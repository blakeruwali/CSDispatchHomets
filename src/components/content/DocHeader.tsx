import React from "react";
import { AlertTriangle } from "lucide-react";
import { reviewDue, inForce, type ContentDoc } from "@/lib/content";

const STATUS_LABEL: Record<string, string> = {
  published: "In force",
  "in-review": "In review — not in force",
  "draft-needed": "Not yet written",
  draft: "Draft — not in force",
  archived: "Archived — superseded",
};

const STATUS_COLOR: Record<string, string> = {
  published: "hsl(145,60%,40%)",
  "in-review": "hsl(40,90%,45%)",
  "draft-needed": "hsl(0,78%,52%)",
  draft: "hsl(0,0%,50%)",
  archived: "hsl(0,0%,45%)",
};

interface DocHeaderProps {
  doc: ContentDoc;
  /** Citation number, e.g. "2.5" */
  number: string;
  partTitle: string;
  lightMode: boolean;
}

/**
 * The control block that makes this a governed document rather than a page.
 *
 * Everything here is derived from frontmatter — nothing is decorative and
 * nothing is invented. `Review due` is computed from the cadence rather than
 * stored, so it can never contradict it, and a document past that date says so
 * on its face instead of only on an editor's dashboard.
 */
export const DocHeader: React.FC<DocHeaderProps> = ({ doc, number, partTitle, lightMode }) => {
  const border = lightMode ? "hsl(0,0%,85%)" : "hsl(0,0%,100%,0.15)";
  const panel = lightMode ? "hsl(0,0%,98%)" : "hsl(0,0%,100%,0.03)";
  const strong = lightMode ? "text-gray-900" : "text-white";
  const label = lightMode ? "text-gray-500" : "text-white/45";
  const value = lightMode ? "text-gray-800" : "text-white/80";

  const status = doc.status;
  const due = reviewDue(doc);

  const fields: { label: string; value: string }[] = [
    { label: "Document", value: doc.id },
    { label: "Clause", value: `§${number}` },
    { label: "Version", value: `v${doc.version}` },
    { label: "Owner", value: doc.owner || "—" },
    { label: "Last reviewed", value: doc.lastReviewed || "—" },
    { label: "Review due", value: due || "—" },
  ];

  return (
    <header className="mb-10">
      <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${label}`}>
        {partTitle}
      </p>

      <h1
        className={`text-[2.15rem] font-bold leading-[1.15] tracking-tight ${strong}`}
        style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}
      >
        <span className={label} style={{ fontVariantNumeric: "tabular-nums" }}>
          §{number}
        </span>{" "}
        {doc.title}
      </h1>

      {/* Anything not published states plainly that it does not yet bind. */}
      {!inForce(doc) && (
        <p
          className="mt-4 flex items-start gap-2 rounded-md px-3 py-2 text-sm font-medium"
          style={{
            background: `${STATUS_COLOR[status] ?? "hsl(0,0%,50%)"}1a`,
            color: STATUS_COLOR[status] ?? "hsl(0,0%,50%)",
          }}
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>
            {STATUS_LABEL[status] ?? status}. This document does not yet carry authority —
            follow the standard it points to, and do not treat it as settled.
          </span>
        </p>
      )}

      <dl
        className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 rounded-lg px-4 py-3 text-[12px] sm:grid-cols-3"
        style={{ background: panel, border: `1px solid ${border}` }}
      >
        {fields.map((f) => (
          <div key={f.label} className="min-w-0">
            <dt className={`text-[10px] uppercase tracking-wider ${label}`}>{f.label}</dt>
            <dd className={`truncate font-medium ${value}`} title={f.value}>
              {f.value}
            </dd>
          </div>
        ))}
        <div className="min-w-0">
          <dt className={`text-[10px] uppercase tracking-wider ${label}`}>Status</dt>
          <dd className="font-semibold" style={{ color: STATUS_COLOR[status] }}>
            {STATUS_LABEL[status] ?? status}
          </dd>
        </div>
        {doc.stale && (
          <div className="min-w-0">
            <dt className={`text-[10px] uppercase tracking-wider ${label}`}>Attention</dt>
            <dd className="font-semibold" style={{ color: "hsl(40,90%,50%)" }}>
              Overdue for review
            </dd>
          </div>
        )}
      </dl>
    </header>
  );
};
