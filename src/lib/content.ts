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
      .replace(/⚠️/g, "") // warning sign used to flag disputed values
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

// ------------------------------------------------------------------ headings

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
  /** Clause number within the document, e.g. "3" — prefixed by the doc number
   *  to form a full citation like §2.5.3. Only H2s are numbered; an H3 is a
   *  sub-point of the clause above it, not a clause in its own right. */
  clause?: number;
}

/**
 * H2/H3 headings, for a document's on-page table of contents.
 *
 * Authors write `## Section title {#anchor}` so the QA rubric can deep-link to
 * an exact standard. The same anchors drive the contents list here — one
 * convention, two uses.
 */
export function headings(doc: ContentDoc): Heading[] {
  const out: Heading[] = [];
  const pattern = /^(##|###)\s+(.+?)\s*$/gm;
  let clause = 0;
  for (const match of doc.body.matchAll(pattern)) {
    const level = match[1].length as 2 | 3;
    const anchor = /\{#([a-z0-9-]+)\}\s*$/.exec(match[2]);
    const text = match[2].replace(/\s*\{#[a-z0-9-]+\}\s*$/, "").trim();
    if (!anchor || !text) continue; // unanchored headings can't be linked
    if (level === 2) clause += 1;
    out.push({ id: anchor[1], text, level, clause: level === 2 ? clause : undefined });
  }
  return out;
}

/**
 * Clause numbers for a document's headings, keyed by anchor.
 * `docNumber` is the part.document prefix, e.g. "2.5" → clauses "2.5.1", "2.5.2".
 */
export function clauseNumbers(doc: ContentDoc, docNumber: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const h of headings(doc)) {
    if (h.clause) out[h.id] = `${docNumber}.${h.clause}`;
  }
  return out;
}

/**
 * The date a document falls due for re-verification.
 * Derived rather than stored, so it can never disagree with the cadence.
 */
export function reviewDue(doc: ContentDoc): string {
  if (!doc.lastReviewed || !doc.reviewCadenceDays) return "";
  const due = new Date(doc.lastReviewed);
  if (Number.isNaN(due.getTime())) return "";
  due.setDate(due.getDate() + doc.reviewCadenceDays);
  return due.toISOString().slice(0, 10);
}

/** Published documents are in force; everything else explicitly is not. */
export function inForce(doc: ContentDoc): boolean {
  return doc.status === "published";
}

// ------------------------------------------------------------------ surfaces

export interface SectionDef {
  id: string;
  title: string;
  description: string;
}

/**
 * Groups a surface's documents into its declared parts, in order.
 * Parts with no documents are dropped so an empty heading never renders.
 */
export function sectionsForSurface(surface: string, defs: SectionDef[]): ContentSection[] {
  const surfaced = docsForSurface(surface);
  return defs
    .map((section) => ({
      ...section,
      docs: surfaced
        .filter((d) => d.section === section.id)
        .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)),
    }))
    .filter((s) => s.docs.length > 0);
}

export interface NumberedSection extends ContentSection {
  /** 1-based part number, e.g. 2 */
  number: number;
  /** Documents with their "part.doc" number attached, e.g. "2.5" */
  numbered: { doc: ContentDoc; number: string }[];
}

/**
 * Attaches citation numbers to a surface's parts and documents.
 *
 * Numbers come from position, not from frontmatter, so they cannot drift out
 * of sync with the order a reader actually sees. The consequence is that
 * inserting a document renumbers the ones after it — acceptable while the SOP
 * is still being built out, and the stable `id` remains the durable reference.
 */
export function numberSections(sections: ContentSection[]): NumberedSection[] {
  return sections.map((section, i) => ({
    ...section,
    number: i + 1,
    numbered: section.docs.map((doc, j) => ({ doc, number: `${i + 1}.${j + 1}` })),
  }));
}

/** Every document's citation number on a surface, keyed by doc id. */
export function docNumbers(sections: ContentSection[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const section of numberSections(sections)) {
    for (const { doc, number } of section.numbered) out[doc.id] = number;
  }
  return out;
}

/** Reading order across every part — drives prev/next paging. */
export function flattenDocs(sections: ContentSection[]): ContentDoc[] {
  return sections.flatMap((s) => s.docs);
}

// ---------------------------------------------------------------- CSM sections

/**
 * The seven parts of the CSM SOP. Documents declare which part they belong to
 * via `section` in frontmatter; this supplies the labels and the order of the
 * parts themselves.
 */
export const CSM_SECTIONS: SectionDef[] = [
  { id: "foundations", title: "Part 1 — Foundations", description: "Role, coverage, tools, communication standards, KPIs" },
  { id: "interaction", title: "Part 2 — Customer Interaction", description: "Greeting, listening, profiles, emergency triage, escalation" },
  { id: "intake", title: "Part 3 — Intake", description: "Required data, service and system type, symptoms, lead source" },
  { id: "booking", title: "Part 4 — Booking", description: "Availability, service area, fees, membership, objections" },
  { id: "channels", title: "Part 5 — Channel Playbooks", description: "Speed to lead, marketplaces, inbound, LSA, web, Posh, SMS" },
  { id: "post-booking", title: "Part 6 — Post-Booking & Retention", description: "Tickets, handoff, follow-up, warranty, retention" },
  { id: "governance", title: "Part 7 — Governance", description: "Guarantees, doc control, QA rubric, coaching, onboarding" },
];

export function csmSections(): ContentSection[] {
  return sectionsForSurface("csm", CSM_SECTIONS);
}

// -------------------------------------------------------------- field sections

/**
 * Technician procedures that apply on every visit, whatever the job type.
 * Distinct from the sales surface, which is the in-home sales process only.
 */
export const FIELD_SECTIONS: SectionDef[] = [
  {
    id: "field-standards",
    title: "Part 1 — On Every Job",
    description: "What happens on every visit, before and regardless of the work itself",
  },
  {
    id: "field-safety",
    title: "Part 2 — Safety",
    description: "Job site safety, PPE, hazard handling",
  },
  {
    id: "field-documentation",
    title: "Part 3 — Documentation",
    description: "Photos, notes, and what has to be in ServiceTitan before a job closes",
  },
];

export function fieldSections(): ContentSection[] {
  return sectionsForSurface("field", FIELD_SECTIONS);
}
