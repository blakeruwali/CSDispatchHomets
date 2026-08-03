/**
 * Loads content/**\/*.md at build time and exposes it as typed documents.
 *
 * This is the "build step" described in content/README.md, implemented with
 * Vite's import.meta.glob rather than a separate pipeline — the markdown is
 * bundled directly, so there is no server, no sync job, and no way for the
 * app to drift from the repository.
 *
 * Price tokens are resolved here, once, from content/pricing/tokens.md. A doc
 * never contains a literal price, so changing tokens.md changes every surface.
 */

export type DocStatus = "draft" | "draft-needed" | "in-review" | "published" | "archived";

export interface ContentDoc {
  id: string;
  title: string;
  department: string;
  owner: string;
  status: DocStatus;
  version: string;
  lastReviewed: string;
  reviewCadenceDays: number;
  tags: string[];
  related: string[];
  surfaces: string[];
  section?: string;
  order: number;
  /** Markdown body with {{price:...}} tokens already resolved. */
  body: string;
  /** Lowercased title + tags + body, for search. */
  haystack: string;
  path: string;
  stale: boolean;
}

export interface ContentSection {
  id: string;
  title: string;
  description: string;
  docs: ContentDoc[];
}

const raw = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// ---------------------------------------------------------------- frontmatter

interface Frontmatter {
  [key: string]: string;
}

function splitFrontmatter(text: string): { fm: Frontmatter; body: string } | null {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) return null;
  const fm: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return { fm, body: text.slice(match[0].length) };
}

function list(value: string | undefined): string[] {
  if (!value) return [];
  const inner = /^\[(.*)\]$/.exec(value.trim());
  const source = inner ? inner[1] : value;
  return source
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

// --------------------------------------------------------------- price tokens

/**
 * Tokens are defined in markdown tables: | `token_id` | value | notes |
 * The value cell may carry emphasis or a warning marker; strip formatting so
 * the rendered text stays clean.
 */
function parseTokens(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  const rowPattern = /^\|\s*`([a-z0-9_]+)`\s*\|([^|]*)\|/gm;
  for (const match of text.matchAll(rowPattern)) {
    const value = match[2]
      .replace(/\*\*/g, "")
      .replaceAll("⚠️", "") // warning sign used to flag disputed values
      .trim();
    out[match[1]] = value;
  }
  return out;
}

const tokensPath = Object.keys(raw).find((p) => p.endsWith("/pricing/tokens.md"));
export const priceTokens: Record<string, string> = tokensPath
  ? parseTokens(raw[tokensPath])
  : {};

function resolveTokens(body: string): string {
  return body.replace(/\{\{price:([a-z0-9_]+)\}\}/g, (whole, token: string) => {
    const value = priceTokens[token];
    // An unresolved token is a content bug; surface it rather than hiding it.
    return value ?? whole;
  });
}

// ------------------------------------------------------------------- the docs

function isStale(lastReviewed: string, cadenceDays: number): boolean {
  if (!lastReviewed || !cadenceDays) return false;
  const due = new Date(lastReviewed);
  if (Number.isNaN(due.getTime())) return false;
  due.setDate(due.getDate() + cadenceDays);
  return due < new Date();
}

function buildDocs(): ContentDoc[] {
  const docs: ContentDoc[] = [];
  for (const [path, text] of Object.entries(raw)) {
    const parsed = splitFrontmatter(text);
    // READMEs, INDEX and the migration notes have no frontmatter by design.
    if (!parsed || !parsed.fm.id) continue;

    const { fm } = parsed;
    const body = resolveTokens(parsed.body);
    const tags = list(fm.tags);

    docs.push({
      id: fm.id,
      title: fm.title ?? fm.id,
      department: fm.department ?? "",
      owner: fm.owner ?? "",
      status: (fm.status as DocStatus) ?? "draft",
      version: fm.version ?? "0",
      lastReviewed: fm.last_reviewed ?? "",
      reviewCadenceDays: Number(fm.review_cadence_days ?? 0),
      tags,
      related: list(fm.related),
      surfaces: list(fm.surfaces),
      section: fm.section,
      order: Number(fm.order ?? 999),
      body,
      haystack: `${fm.title ?? ""} ${tags.join(" ")} ${body}`.toLowerCase(),
      path: path.replace(/^\//, ""),
      stale: isStale(fm.last_reviewed ?? "", Number(fm.review_cadence_days ?? 0)),
    });
  }
  return docs;
}

export const allDocs: ContentDoc[] = buildDocs();

export const docsById: Record<string, ContentDoc> = Object.fromEntries(
  allDocs.map((d) => [d.id, d]),
);

/** Archived docs are retained for history but never rendered to staff. */
export function docsForSurface(surface: string): ContentDoc[] {
  return allDocs.filter(
    (d) =>
      d.status !== "archived" &&
      (d.surfaces.includes(surface) || d.surfaces.includes("all")),
  );
}

// ---------------------------------------------------------------- CSM sections

/**
 * The seven parts of the CSM SOP. Documents declare which part they belong to
 * via `section` in frontmatter; this supplies the labels and the order of the
 * parts themselves.
 */
export const CSM_SECTIONS: { id: string; title: string; description: string }[] = [
  { id: "foundations", title: "Part 1 — Foundations", description: "Role, coverage, tools, communication standards, KPIs" },
  { id: "interaction", title: "Part 2 — Customer Interaction", description: "Greeting, listening, profiles, emergency triage, escalation" },
  { id: "intake", title: "Part 3 — Intake", description: "Required data, service and system type, symptoms, lead source" },
  { id: "booking", title: "Part 4 — Booking", description: "Availability, service area, fees, membership, objections" },
  { id: "channels", title: "Part 5 — Channel Playbooks", description: "Inbound, LSA, web, Posh, SMS, referrals, voicemail" },
  { id: "post-booking", title: "Part 6 — Post-Booking & Retention", description: "Tickets, handoff, follow-up, warranty, retention" },
  { id: "governance", title: "Part 7 — Governance", description: "Guarantees, doc control, QA rubric, coaching, onboarding" },
];

export function csmSections(): ContentSection[] {
  const surfaced = docsForSurface("csm");
  return CSM_SECTIONS.map((section) => ({
    ...section,
    docs: surfaced
      .filter((d) => d.section === section.id)
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)),
  })).filter((s) => s.docs.length > 0);
}
