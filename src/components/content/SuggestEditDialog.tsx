import React, { useEffect, useState } from "react";
import { X, Check, AlertTriangle } from "lucide-react";
import { submitSuggestion } from "@/lib/suggestions";
import type { ContentDoc, Heading } from "@/lib/content";

interface SuggestEditDialogProps {
  doc: ContentDoc;
  headings: Heading[];
  /** The heading currently in view — the likely target of the suggestion. */
  activeHeading: string | null;
  lightMode: boolean;
  accent: string;
  onClose: () => void;
}

/**
 * Lets a staff member propose a change from the page they are reading.
 *
 * The point of catching it here is that the person who just found the script
 * wrong is the person on the call, and they will not file it later. Everything
 * the record needs — document id, source path, section — comes from context
 * rather than being retyped.
 */
export const SuggestEditDialog: React.FC<SuggestEditDialogProps> = ({
  doc, headings, activeHeading, lightMode, accent, onClose,
}) => {
  const [anchor, setAnchor] = useState<string>(activeHeading ?? "");
  const [suggestion, setSuggestion] = useState("");
  const [rationale, setRationale] = useState("");
  const [state, setState] = useState<"editing" | "saving" | "done">("editing");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const card = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,10%)";
  const border = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,100%,0.14)";
  const field = lightMode ? "hsl(0,0%,97%)" : "hsl(0,0%,14%)";
  const strong = lightMode ? "text-gray-900" : "text-white";
  const muted = lightMode ? "text-gray-500" : "text-white/50";
  const faint = lightMode ? "text-gray-400" : "text-white/35";

  async function save() {
    if (!suggestion.trim()) return;
    setState("saving");
    setError(null);

    const result = await submitSuggestion({
      docId: doc.id,
      docPath: doc.path,
      anchor: anchor || null,
      suggestion,
      rationale,
    });

    if (result.status === "ok") {
      setState("done");
      return;
    }

    setState("editing");
    setError(
      result.status === "unauthenticated"
        ? "You need to be signed in to suggest an edit. Open /auth, sign in, then try again."
        : result.status === "unconfigured"
          ? "Suggestions aren't available — this build has no Supabase connection."
          : result.message || "Could not save the suggestion.",
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "hsl(0,0%,0%,0.6)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl p-5"
        style={{ background: card, border: `1px solid ${border}` }}
        onClick={(e) => e.stopPropagation()}
      >
        {state === "done" ? (
          <div className="py-4 text-center">
            <Check className="mx-auto h-8 w-8" style={{ color: "hsl(145,60%,45%)" }} />
            <p className={`mt-3 text-sm font-semibold ${strong}`}>Suggestion sent</p>
            <p className={`mt-1 text-xs ${muted}`}>
              It goes to the editor for review. Accepted changes become a commit to the
              document, so the SOP stays the single source of truth.
            </p>
            <button
              onClick={onClose}
              className="mt-4 rounded-lg px-4 py-2 text-sm font-semibold text-white"
              style={{ background: accent }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className={`text-sm font-semibold ${strong}`}>Suggest an edit</h2>
                <p className={`mt-0.5 truncate text-xs ${muted}`}>{doc.title}</p>
              </div>
              <button onClick={onClose} className={muted} aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              {headings.length > 0 && (
                <div>
                  <label className={`mb-1 block text-[11px] font-medium ${muted}`}>
                    Which part?
                  </label>
                  <select
                    value={anchor}
                    onChange={(e) => setAnchor(e.target.value)}
                    className={`w-full rounded-lg px-3 py-2 text-sm outline-none ${strong}`}
                    style={{ background: field, border: `1px solid ${border}` }}
                  >
                    <option value="">The whole document</option>
                    {headings.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.text}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className={`mb-1 block text-[11px] font-medium ${muted}`}>
                  What should change?
                </label>
                <textarea
                  autoFocus
                  rows={4}
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="The script says X, but on real calls that lands badly because…"
                  className={`w-full resize-y rounded-lg px-3 py-2 text-sm outline-none ${strong}`}
                  style={{ background: field, border: `1px solid ${border}` }}
                />
              </div>

              <div>
                <label className={`mb-1 block text-[11px] font-medium ${muted}`}>
                  What happened? <span className={faint}>Optional, but it's what makes a suggestion persuasive.</span>
                </label>
                <textarea
                  rows={3}
                  value={rationale}
                  onChange={(e) => setRationale(e.target.value)}
                  placeholder="A customer on Tuesday reacted by…"
                  className={`w-full resize-y rounded-lg px-3 py-2 text-sm outline-none ${strong}`}
                  style={{ background: field, border: `1px solid ${border}` }}
                />
              </div>

              {error && (
                <p
                  className="flex items-start gap-1.5 rounded-lg p-2 text-xs"
                  style={{ background: "hsl(0,78%,50%,0.12)", color: "hsl(0,78%,62%)" }}
                >
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                  {error}
                </p>
              )}

              <button
                onClick={() => void save()}
                disabled={state === "saving" || !suggestion.trim()}
                className="w-full rounded-lg py-2 text-sm font-semibold text-white disabled:opacity-40"
                style={{ background: accent }}
              >
                {state === "saving" ? "Sending…" : "Send suggestion"}
              </button>

              <p className={`text-center text-[11px] ${faint}`}>
                Goes to the editor for review — it does not change the document directly.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
