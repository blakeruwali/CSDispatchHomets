import { supabase } from "@/integrations/supabase/client";

/**
 * Staff-proposed edits to SOP documents.
 *
 * This table holds *proposals about* documents, never document content —
 * `content/**\/*.md` in the repository stays the source of truth, and an
 * accepted suggestion becomes a git commit rather than a database write.
 * See `governance.doc-control`.
 */

export interface NewSuggestion {
  /** Stable dotted id, e.g. sop.csm.greeting */
  docId: string;
  /** Source path, so an editor can find the file without a lookup */
  docPath: string;
  /** Heading anchor the suggestion refers to, or null for the whole document */
  anchor: string | null;
  suggestion: string;
  rationale: string;
}

/**
 * A flat status rather than a discriminated union on `ok`. This project
 * compiles with `strictNullChecks: false`, under which TypeScript will not
 * narrow a union by a boolean-literal discriminant — so a `{ok: true} |
 * {ok: false, reason}` shape fails to type-check at the call site.
 */
export type SubmitStatus = "ok" | "unauthenticated" | "unconfigured" | "error";

export interface SubmitResult {
  status: SubmitStatus;
  message?: string;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  );
}

const SUBMIT_TIMEOUT_MS = 10000;

/** A hung request looks identical to a broken one to the person waiting. */
async function withTimeout<T>(work: PromiseLike<T>): Promise<T> {
  let timer: number | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = window.setTimeout(
      () => reject(new Error(`Timed out after ${SUBMIT_TIMEOUT_MS / 1000}s`)),
      SUBMIT_TIMEOUT_MS,
    );
  });
  try {
    return await Promise.race([Promise.resolve(work), timeout]);
  } finally {
    if (timer !== undefined) window.clearTimeout(timer);
  }
}

/**
 * Row-level security requires `submitted_by = auth.uid()`, so an anonymous
 * submit is rejected by the database. Check first and say so plainly rather
 * than surfacing a policy violation.
 */
export async function submitSuggestion(input: NewSuggestion): Promise<SubmitResult> {
  if (!isSupabaseConfigured()) {
    return { status: "unconfigured" };
  }

  const { data: auth } = await supabase.auth.getUser();
  const userId = auth?.user?.id;
  if (!userId) return { status: "unauthenticated" };

  try {
    const { error } = await withTimeout(
      supabase.from("content_suggestions").insert({
        doc_id: input.docId,
        doc_path: input.docPath,
        anchor: input.anchor,
        suggestion: input.suggestion.trim(),
        rationale: input.rationale.trim() || null,
        submitted_by: userId,
      }),
    );
    if (error) return { status: "error", message: error.message };
    return { status: "ok" };
  } catch (e) {
    return { status: "error", message: e instanceof Error ? e.message : String(e) };
  }
}

/** Open suggestion counts per document, so a doc can show it has pending edits. */
export async function openSuggestionCounts(): Promise<Record<string, number>> {
  if (!isSupabaseConfigured()) return {};
  try {
    const { data, error } = await withTimeout(
      supabase.from("content_suggestions").select("doc_id").eq("status", "open"),
    );
    if (error || !data) return {};
    const counts: Record<string, number> = {};
    for (const row of data) counts[row.doc_id] = (counts[row.doc_id] ?? 0) + 1;
    return counts;
  } catch {
    // A dashboard nicety — never let it break the page it decorates.
    return {};
  }
}
