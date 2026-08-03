import { supabase } from "@/integrations/supabase/client";
import type {
  Lead, LeadAttemptKind, LeadAttemptOutcome, LeadChannel, LeadStatus,
} from "./leads";

/**
 * Data access for the lead queue.
 *
 * `src/integrations/supabase/types.ts` is generated from the live schema and
 * says so at the top, so it must not be hand-edited — a regeneration would
 * silently drop the edit. The lead tables ship as a migration in this change
 * and are not in the live schema yet, so the generated `Database` type does
 * not know about them.
 *
 * Rather than scatter casts through the UI, the untyped access is confined to
 * this module and everything above it works against real types. Once the
 * migration is applied and types are regenerated, the `db` alias below can be
 * replaced with `supabase` and the casts disappear with no caller changes.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- see note above
const db = supabase as any;

interface Result<T> {
  data: T | null;
  error: { message: string } | null;
}

/**
 * Without credentials the client still constructs, but every request hangs
 * instead of failing — which shows a CSM an eternal "Loading…" during a lead
 * rush. Check up front so the UI can say what is actually wrong.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  );
}

function assertConfigured(): void {
  if (!isSupabaseConfigured()) {
    throw new Error(
      "Supabase is not configured — VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are empty.",
    );
  }
}

const REQUEST_TIMEOUT_MS = 8000;

/** A hung request is indistinguishable from a broken one to the person waiting. */
async function withTimeout<T>(work: PromiseLike<Result<T>>, label: string): Promise<Result<T>> {
  let timer: number | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = window.setTimeout(
      () => reject(new Error(`${label} timed out after ${REQUEST_TIMEOUT_MS / 1000}s`)),
      REQUEST_TIMEOUT_MS,
    );
  });
  try {
    return await Promise.race([Promise.resolve(work), timeout]);
  } finally {
    if (timer !== undefined) window.clearTimeout(timer);
  }
}

function unwrap<T>(result: Result<T>): T | null {
  if (result.error) throw new Error(result.error.message);
  return result.data;
}

export interface NewLead {
  channel: LeadChannel;
  slaSeconds: number;
  customerName?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  jobType?: string | null;
  description?: string | null;
  receivedAt?: string;
  externalId?: string | null;
}

export async function fetchLeads(limit = 200): Promise<Lead[]> {
  assertConfigured();
  const result = await withTimeout<Lead[]>(
    db.from("leads").select("*").order("received_at", { ascending: false }).limit(limit),
    "Loading leads",
  );
  return unwrap(result) ?? [];
}

/** Attempt counts per lead id, so the UI can show "3 of 6 attempts". */
export async function fetchAttemptCounts(): Promise<Record<string, number>> {
  assertConfigured();
  const result = await withTimeout<{ lead_id: string }[]>(
    db.from("lead_attempts").select("lead_id"),
    "Loading attempts",
  );
  const counts: Record<string, number> = {};
  for (const row of unwrap(result) ?? []) {
    counts[row.lead_id] = (counts[row.lead_id] ?? 0) + 1;
  }
  return counts;
}

export async function createLead(input: NewLead): Promise<void> {
  assertConfigured();
  const result = await withTimeout<null>(
    db.from("leads").insert({
      channel: input.channel,
      sla_seconds: input.slaSeconds,
      customer_name: input.customerName ?? null,
      phone: input.phone ?? null,
      email: input.email ?? null,
      address: input.address ?? null,
      job_type: input.jobType ?? null,
      description: input.description ?? null,
      external_id: input.externalId ?? null,
      ...(input.receivedAt ? { received_at: input.receivedAt } : {}),
    }),
    "Saving lead",
  );
  unwrap(result);
}

/**
 * Records an attempt. A database trigger stamps `first_touch_at` from this, so
 * the speed metric cannot be backdated by a slow client, and moves the lead to
 * `working`. The claim below is conditional on nobody having claimed it yet.
 */
export async function recordAttempt(
  leadId: string,
  kind: LeadAttemptKind,
  outcome: LeadAttemptOutcome,
  notes?: string,
): Promise<void> {
  assertConfigured();
  const { data: auth } = await supabase.auth.getUser();
  const userId = auth?.user?.id ?? null;

  const result = await withTimeout<null>(
    db.from("lead_attempts").insert({
      lead_id: leadId,
      kind,
      outcome,
      notes: notes ?? null,
      attempted_by: userId,
    }),
    "Logging attempt",
  );
  unwrap(result);

  await withTimeout<null>(
    db
      .from("leads")
      .update({ claimed_by: userId, claimed_at: new Date().toISOString() })
      .eq("id", leadId)
      .is("claimed_at", null),
    "Claiming lead",
  );
}

export async function setLeadStatus(leadId: string, status: LeadStatus): Promise<void> {
  assertConfigured();
  const result = await withTimeout<null>(
    db.from("leads").update({ status }).eq("id", leadId),
    "Updating lead",
  );
  unwrap(result);
}

/**
 * Live updates. Two CSMs working the same queue must not call the same
 * customer, so a claim elsewhere has to appear here without a refresh.
 */
export function subscribeToLeads(onChange: () => void): () => void {
  if (!isSupabaseConfigured()) return () => undefined;
  const channel = supabase
    .channel("leads-live")
    .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, onChange)
    .on("postgres_changes", { event: "*", schema: "public", table: "lead_attempts" }, onChange)
    .subscribe();
  return () => {
    void supabase.removeChannel(channel);
  };
}
