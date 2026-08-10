import { supabase } from "@/integrations/supabase/client";
import { isSupabaseConfigured } from "@/lib/suggestions";
import type { ContentDoc } from "@/lib/content";
import type { Locale } from "@/lib/translate";

/**
 * Records that a named person read a specific version of a specific document.
 *
 * Scoped to the version on purpose. An acknowledgement of v1 says nothing about
 * v2, so revising a document re-opens the obligation for everyone rather than
 * leaving a stale signature standing behind new text. The record is
 * insert-only — nobody, including the person who signed, can amend or withdraw
 * it after the fact, which is the only thing that makes it worth having.
 *
 * What is stored is a fact about a person and a document, never document
 * content: `content/**\/*.md` in the repository remains the source of truth.
 */

export interface AcknowledgementRecord {
  docId: string;
  docVersion: string;
  /** ISO date, e.g. 2026-08-04 */
  acknowledgedAt: string;
}

/** Flat status for the same reason as `SubmitStatus` in suggestions.ts —
 *  this project compiles with `strictNullChecks: false`, under which a
 *  boolean-discriminated union does not narrow at the call site. */
export type AckStatus = "ok" | "already" | "unauthenticated" | "unconfigured" | "error";

export interface AckResult {
  status: AckStatus;
  message?: string;
}

const ACK_TIMEOUT_MS = 10000;

async function withTimeout<T>(work: PromiseLike<T>): Promise<T> {
  let timer: number | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = window.setTimeout(
      () => reject(new Error(`Timed out after ${ACK_TIMEOUT_MS / 1000}s`)),
      ACK_TIMEOUT_MS,
    );
  });
  try {
    return await Promise.race([Promise.resolve(work), timeout]);
  } finally {
    if (timer !== undefined) window.clearTimeout(timer);
  }
}

/**
 * The exact words the reader is agreeing to, snapshotted into the record.
 *
 * Stored verbatim rather than regenerated at read time, because the point of
 * the record is what this person was shown on the day they signed. If this
 * wording is ever changed, old records keep the wording they were made under.
 *
 * Written in the language the reader is reading. A technician working through
 * the Spanish text should not be asked to sign an English sentence — an
 * acknowledgement is worth exactly as much as the signer's understanding of
 * it, and the record stores what was actually on screen either way.
 */
export function acknowledgementStatement(
  doc: ContentDoc,
  number: string,
  locale: Locale = "en",
): string {
  const citation = number ? `§${number} ` : "";
  if (locale === "es") {
    return [
      `He leído ${citation}${doc.title} (v${doc.version}) en su totalidad.`,
      `Entiendo lo que exige de mí y que se aplica a mi trabajo a partir de hoy.`,
      `Si no puedo cumplirlo en un trabajo, lo diré en el momento en lugar de buscar una alternativa por mi cuenta.`,
    ].join(" ");
  }
  return [
    `I have read ${citation}${doc.title} (v${doc.version}) in full.`,
    `I understand what it requires of me and that it applies to my work from today.`,
    `If I cannot follow it on a job, I will say so at the time rather than work around it.`,
  ].join(" ");
}

/** ISO date only — the day is the fact that matters, not the second. */
function isoDate(value: string): string {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

export async function acknowledgeDoc(input: {
  doc: ContentDoc;
  statement: string;
}): Promise<AckResult> {
  if (!isSupabaseConfigured()) return { status: "unconfigured" };

  const { data: auth } = await supabase.auth.getUser();
  const userId = auth?.user?.id;
  if (!userId) return { status: "unauthenticated" };

  try {
    const { error } = await withTimeout(
      supabase.from("document_acknowledgements").insert({
        doc_id: input.doc.id,
        doc_version: input.doc.version,
        doc_title: input.doc.title,
        doc_path: input.doc.path,
        statement: input.statement,
        acknowledged_by: userId,
      }),
    );
    // 23505: the unique key on (doc_id, doc_version, acknowledged_by). Signing
    // the same version twice is not an error to report, it is already done.
    if (error) {
      if (error.code === "23505") return { status: "already" };
      return { status: "error", message: error.message };
    }
    return { status: "ok" };
  } catch (e) {
    return { status: "error", message: e instanceof Error ? e.message : String(e) };
  }
}

/**
 * The signed-in reader's own acknowledgements, keyed by doc id and holding the
 * most recent version they signed. RLS restricts the select to their own rows.
 */
export async function myAcknowledgements(): Promise<Record<string, AcknowledgementRecord>> {
  if (!isSupabaseConfigured()) return {};
  try {
    const { data: auth } = await supabase.auth.getUser();
    if (!auth?.user?.id) return {};

    const { data, error } = await withTimeout(
      supabase
        .from("document_acknowledgements")
        .select("doc_id, doc_version, acknowledged_at")
        .eq("acknowledged_by", auth.user.id)
        .order("acknowledged_at", { ascending: true }),
    );
    if (error || !data) return {};

    // Ascending order means the last row written for a document wins, which is
    // the version this person most recently signed.
    const out: Record<string, AcknowledgementRecord> = {};
    for (const row of data) {
      out[row.doc_id] = {
        docId: row.doc_id,
        docVersion: row.doc_version,
        acknowledgedAt: isoDate(row.acknowledged_at),
      };
    }
    return out;
  } catch {
    return {};
  }
}

export type AckState = "unknown" | "current" | "superseded" | "none";

/**
 * Where a reader stands on a document: signed the version in front of them,
 * signed an earlier one, or never signed it.
 *
 * `superseded` is the case the whole feature exists for. Someone who read v1
 * six months ago and never saw v2 is, for our purposes, someone who has not
 * read the document — and they should be told which version they signed rather
 * than simply asked again with no explanation.
 */
export function ackState(doc: ContentDoc, record: AcknowledgementRecord | undefined): AckState {
  if (!record) return "none";
  return record.docVersion === doc.version ? "current" : "superseded";
}
