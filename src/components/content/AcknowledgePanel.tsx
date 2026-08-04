import React, { useCallback, useEffect, useRef, useState } from "react";
import { ShieldCheck, AlertTriangle, Loader2, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  acknowledgeDoc,
  acknowledgementStatement,
  ackState,
  type AcknowledgementRecord,
} from "@/lib/acknowledgements";
import { isSupabaseConfigured } from "@/lib/suggestions";
import { useAuth } from "@/hooks/useAuth";
import type { ContentDoc } from "@/lib/content";

interface AcknowledgePanelProps {
  doc: ContentDoc;
  /** Citation number, e.g. "1.1" */
  number: string;
  /** This reader's existing record for this document, if any. */
  record?: AcknowledgementRecord;
  /** True while the layout is still fetching records. */
  loading: boolean;
  onAcknowledged: (record: AcknowledgementRecord) => void;
  lightMode: boolean;
  accent: string;
}

/**
 * The signature block at the foot of a binding document.
 *
 * Deliberately not a modal and not at the top: it sits after the last line of
 * the document, so reaching it is itself part of the claim being made. The
 * button stays disabled until this block has actually been on screen, which
 * makes "I scrolled past it" the one thing a reader cannot do.
 *
 * Nothing here changes the document. It records a fact about a person on a
 * date, which is what makes "nobody told me" stop being available afterwards.
 */
export const AcknowledgePanel: React.FC<AcknowledgePanelProps> = ({
  doc, number, record, loading, onAcknowledged, lightMode, accent,
}) => {
  const { user } = useAuth();
  const [checked, setChecked] = useState(false);
  const [reached, setReached] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const statement = acknowledgementStatement(doc, number);
  const state = ackState(doc, record);
  const signedIn = Boolean(user);

  // "Has this block been on screen" — the cheapest honest proxy for having
  // read to the end, and it cannot be satisfied from the top of the page.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) setReached(true); },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [doc.id]);

  const sign = useCallback(async () => {
    setSaving(true);
    setError(null);
    const result = await acknowledgeDoc({ doc, statement });
    setSaving(false);

    if (result.status === "ok" || result.status === "already") {
      onAcknowledged({
        docId: doc.id,
        docVersion: doc.version,
        acknowledgedAt: new Date().toISOString().slice(0, 10),
      });
      return;
    }
    setError(
      result.status === "unauthenticated"
        ? "Sign in first — an acknowledgement has to carry a name."
        : result.status === "unconfigured"
          ? "Acknowledgements aren't available in this build."
          : result.message || "Could not record the acknowledgement.",
    );
  }, [doc, statement, onAcknowledged]);

  const border = lightMode ? "hsl(0,0%,85%)" : "hsl(0,0%,100%,0.15)";
  const panel = lightMode ? "hsl(0,0%,99%)" : "hsl(0,0%,100%,0.03)";
  const strong = lightMode ? "text-gray-900" : "text-white";
  const body = lightMode ? "text-gray-700" : "text-white/70";
  const muted = lightMode ? "text-gray-500" : "text-white/45";
  const green = "hsl(145,60%,38%)";
  const amber = "hsl(38,92%,42%)";

  const heading = (
    <div className="mb-3 flex items-center gap-2">
      <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: accent }} />
      <h2
        className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${strong}`}
        style={{ fontFamily: "inherit" }}
      >
        Acknowledgement
      </h2>
    </div>
  );

  return (
    <section
      ref={panelRef}
      className="mt-14 rounded-lg px-5 py-5 print:hidden"
      style={{ background: panel, border: `1px solid ${border}`, borderLeft: `3px solid ${accent}` }}
    >
      {heading}

      {loading ? (
        <p className={`flex items-center gap-2 text-sm ${muted}`}>
          <Loader2 className="h-3.5 w-3.5 animate-spin" /> Checking your record…
        </p>
      ) : state === "current" ? (
        <div>
          <p className="text-sm font-semibold" style={{ color: green }}>
            Acknowledged — v{record.docVersion}, {record.acknowledgedAt}
          </p>
          <p className={`mt-1.5 text-[13px] leading-relaxed ${muted}`}>
            On record against your name. If this document is revised, the version
            you signed no longer covers you and you will be asked again here.
          </p>
        </div>
      ) : (
        <>
          {state === "superseded" && (
            <p
              className="mb-3 flex items-start gap-2 rounded-md px-3 py-2 text-[13px] font-medium"
              style={{ background: `${amber}1a`, color: amber }}
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>
                You acknowledged <strong>v{record.docVersion}</strong> on {record.acknowledgedAt}.
                This is <strong>v{doc.version}</strong> — it has changed since, so please read it
                again and re-acknowledge.
              </span>
            </p>
          )}

          <p className={`mb-4 text-[13px] leading-relaxed ${muted}`}>
            This document sets a standard you are expected to work to. Recording that
            you have read it is how we know the standard reached you — and it is the
            reason nobody has to be asked twice whether they were told.
          </p>

          {!isSupabaseConfigured() ? (
            <p className={`text-[13px] ${muted}`}>
              Acknowledgements aren't available in this build.
            </p>
          ) : !signedIn ? (
            <p className={`flex items-center gap-2 text-[13px] ${body}`}>
              <Lock className="h-3.5 w-3.5 flex-shrink-0" />
              <span>
                <Link to="/auth" className="font-semibold underline" style={{ color: accent }}>
                  Sign in
                </Link>{" "}
                to acknowledge — a signature has to carry a name.
              </span>
            </p>
          ) : (
            <>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer"
                  style={{ accentColor: accent }}
                />
                <span
                  className={`text-[13.5px] leading-relaxed ${body}`}
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
                >
                  {statement}
                </span>
              </label>

              {error && (
                <p
                  className="mt-3 flex items-start gap-1.5 rounded-md p-2 text-xs"
                  style={{ background: "hsl(0,78%,50%,0.12)", color: "hsl(0,78%,45%)" }}
                >
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                  {error}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => void sign()}
                  disabled={!checked || !reached || saving}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
                  style={{ background: accent }}
                >
                  {saving
                    ? "Recording…"
                    : state === "superseded"
                      ? `Re-acknowledge v${doc.version}`
                      : `Acknowledge v${doc.version}`}
                </button>
                <span className={`text-[11px] ${muted}`}>
                  Recorded with your name, the version, and today's date. It cannot be
                  edited or removed afterwards.
                </span>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};
