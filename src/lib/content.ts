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
  /**
   * Whether a reader has to record, by name and date, that they have read this
   * document. Set with `acknowledgement: required` in frontmatter. Reserved for
   * documents that impose a duty on the reader — a reference table does not
   * need signing, a procedure that lands on a technician does.
   */
  requiresAck: boolean;
  /** Markdown body with {{price:...}} tokens already resolved. */
  body: string;
  /**
   * Authored translations, keyed by locale, from `*.<locale>.md` siblings.
   * Each carries the English version it was made from, so a translation left
   * behind by a revision can be detected rather than silently served. English
   * is the governing text; see `src/lib/translate.ts`.
   */
  translations: Record<string, DocTranslation>;
  /** Lowercased title + tags + body, for search. */
  haystack: string;
  path: string;
  stale: boolean;
}

export interface DocTranslation {
  markdown: string;
  /** The `version` of the English document this was translated from. */
  sourceVersion: string;
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

function substitute(body: string): string {
  return body.replace(/\{\{price:([a-z0-9_]+)\}\}/g, (whole, token: string) => {
    const value = priceTokens[token];
    // An unresolved token is a content bug; surface it rather than hiding it.
    return value ?? whole;
  });
}

/**
 * A token's value may itself cite another token. `first_job_notice` is written
 * as "By {{price:board_lock}}, with the exact start hour" so the deadline has
 * one definition instead of two that can drift apart — which is the whole
 * point of the token file. So substitute until the text stops changing rather
 * than once, or that inner token reaches the page as literal braces.
 *
 * Bounded, because a token citing itself would otherwise spin forever. Hitting
 * the bound leaves the token visible, which is what an unresolved token is for:
 * the suite fails and someone unpicks the loop.
 */
function resolveTokens(body: string): string {
  let out = body;
  for (let pass = 0; pass < 5; pass += 1) {
    const next = substitute(out);
    if (next === out) break;
    out = next;
  }
  return out;
}

// ------------------------------------------------------------------- the docs

function isStale(lastReviewed: string, cadenceDays: number): boolean {
  if (!lastReviewed || !cadenceDays) return false;
  const due = new Date(lastReviewed);
  if (Number.isNaN(due.getTime())) return false;
  due.setDate(due.getDate() + cadenceDays);
  return due < new Date();
}

/** Locale suffix on a translated sibling, e.g. `greeting.es.md`. */
const LOCALE_FILE = /\.([a-z]{2})\.md$/;

/**
 * Authored translations, keyed by the English file they translate.
 *
 * A translated file carries only `translation_of` and `source_version` in its
 * frontmatter — it inherits everything else from the governing document, so
 * the two can never disagree about owner, status or review date. What it does
 * declare is which English version it was made from, which is the one fact
 * that cannot be inherited and the one that goes stale.
 */
function buildTranslations(): Record<string, Record<string, DocTranslation>> {
  const out: Record<string, Record<string, DocTranslation>> = {};
  for (const [path, text] of Object.entries(raw)) {
    const match = LOCALE_FILE.exec(path);
    if (!match) continue;
    const base = path.replace(LOCALE_FILE, ".md");
    const parsed = splitFrontmatter(text);
    out[base] = out[base] ?? {};
    out[base][match[1]] = {
      markdown: resolveTokens(parsed ? parsed.body : text),
      sourceVersion: parsed?.fm.source_version ?? "",
    };
  }
  return out;
}

function buildDocs(): ContentDoc[] {
  const translations = buildTranslations();
  const docs: ContentDoc[] = [];
  for (const [path, text] of Object.entries(raw)) {
    if (LOCALE_FILE.test(path)) continue; // handled as a translation, not a doc
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
      requiresAck: fm.acknowledgement === "required",
      body,
      translations: translations[path] ?? {},
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
  /** Bare name, e.g. "Foundations". The "Part N" prefix is derived from
   *  position by `numberSections`, so it cannot disagree with the document
   *  numbers beneath it when an unwritten part is dropped from a surface. */
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
  { id: "foundations", title: "Foundations", description: "Role, coverage, tools, communication standards, KPIs" },
  { id: "interaction", title: "Customer Interaction", description: "Greeting, listening, profiles, emergency triage, escalation" },
  { id: "intake", title: "Intake", description: "Required data, service and system type, symptoms, lead source" },
  { id: "booking", title: "Booking", description: "Availability, service area, fees, membership, objections" },
  { id: "channels", title: "Channel Playbooks", description: "Speed to lead, marketplaces, inbound, LSA, web, Posh, SMS" },
  { id: "post-booking", title: "Post-Booking & Retention", description: "Tickets, handoff, follow-up, warranty, retention" },
  { id: "governance", title: "Governance", description: "Guarantees, doc control, QA rubric, coaching, onboarding" },
  {
    id: "membership-program",
    title: "The Membership Program",
    description: "Home+ pricing, covered systems, benefits, and adding systems three and four",
  },
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
    title: "On Every Job",
    description: "What happens on every visit, before and regardless of the work itself",
  },
  {
    id: "field-safety",
    title: "Safety",
    description: "Job site safety, PPE, hazard handling",
  },
  {
    id: "field-diagnostics",
    title: "Diagnosing by Complaint",
    description: "Where to start on the calls that actually come in, and the wrong turns each one invites",
  },
  {
    id: "field-documentation",
    title: "Documentation",
    description: "Photos, notes, and what has to be in ServiceTitan before a job closes",
  },
  // The two stages of a sold install a technician actually performs on site.
  // They are owned by the projects book — the other six stages are office work
  // and stay there — but `sop.projects.install-day` and
  // `sop.projects.comfort-check` name `field` in their surfaces because the
  // crew doing the work reads this book, not the coordinator's one. Without
  // these parts, a document can declare the field surface and then be dropped
  // from it for having nowhere to sit.
  {
    id: "projects-install",
    title: "Install Day",
    description: "Arrival, scope discipline, startup readings, and the walkthrough",
  },
  {
    id: "projects-closeout",
    title: "Closeout & Comfort Check",
    description: "Invoice, warranty registration, records, and going back at 10-14 days",
  },
  // Shares the id `governance` with the CSM surface's Part 7, so a single
  // company-wide governance document can appear in both books without being
  // duplicated or orphaned.
  {
    id: "governance",
    title: "Governance",
    description: "How these documents are issued, acknowledged, and changed",
  },
  {
    id: "membership-program",
    title: "The Membership Program",
    description: "Home+ pricing, covered systems, benefits, and adding systems three and four",
  },
];

export function fieldSections(): ContentSection[] {
  return sectionsForSurface("field", FIELD_SECTIONS);
}

// -------------------------------------------------------------- sales sections

/**
 * The in-home sales visit, start to finish. Distinct from the field surface,
 * which is what happens on every service call whatever the job — this is the
 * replacement/estimate conversation only, and a technician doing both reads
 * both books.
 */
export const SALES_SECTIONS: SectionDef[] = [
  { id: "sales-foundations", title: "Foundations", description: "What the job actually is, and the posture that sells" },
  { id: "sales-visit", title: "In the Home", description: "Arrival, the walk-around, and finding what they actually care about" },
  { id: "sales-presenting", title: "Presenting the Options", description: "Good/Better/Best, the investment conversation, financing, membership" },
  { id: "sales-closing", title: "Closing and After", description: "Urgency, closes, paperwork, and the follow-up that wins the ones you did not close" },
  { id: "sales-objections", title: "Objection Playbook", description: "The seven you will hear, what each one really means, and what never to say" },
  { id: "sales-reference", title: "Reference", description: "Pricing framework and payment terms" },
  // Shared with the CSM and field surfaces.
  { id: "governance", title: "Governance", description: "How these documents are issued, acknowledged, and changed" },
];

export function salesSections(): ContentSection[] {
  return sectionsForSurface("sales", SALES_SECTIONS);
}

// ----------------------------------------------------------- dispatch sections

/**
 * The dispatch board: hours and start times, what moves first, and how the day
 * is actually worked. Distinct from the field surface — this is the person
 * running the board, not the technician being sent.
 */
export const DISPATCH_SECTIONS: SectionDef[] = [
  {
    id: "dispatch-foundations",
    title: "Foundations",
    description: "Hours, start times, and how a technician's day is managed",
  },
  {
    id: "dispatch-board",
    title: "Running the Board",
    description: "Job priorities and the hour-by-hour workflow",
  },
  // Shared with the CSM, field and sales surfaces.
  { id: "governance", title: "Governance", description: "How these documents are issued, acknowledged, and changed" },
  {
    id: "membership-program",
    title: "The Membership Program",
    description: "Home+ pricing, covered systems, benefits, and adding systems three and four",
  },
];

export function dispatchSections(): ContentSection[] {
  return sectionsForSurface("dispatch", DISPATCH_SECTIONS);
}

// --------------------------------------------------------------- leads sections

/**
 * Lead recovery and rescue: the work of bringing back leads that slipped —
 * missed calls and cancelled estimates. Distinct from the CSM surface, which
 * covers call handling and booking; this is the recovery effort, with its own
 * owner and metrics (rescue rate, nurture conversion).
 */
export const LEADS_SECTIONS: SectionDef[] = [
  {
    id: "leads-recovery",
    title: "Lead Recovery",
    description: "Missed calls, cancelled estimates, and bringing leads back from the edge",
  },
  // Shared with the CSM, field, sales, dispatch and projects surfaces.
  { id: "governance", title: "Governance", description: "How these documents are issued, acknowledged, and changed" },
];

export function leadsSections(): ContentSection[] {
  return sectionsForSurface("leads", LEADS_SECTIONS);
}

// ----------------------------------------------------------- projects sections

/**
 * Project management: a sold install from the signed agreement through to the
 * comfort check. Distinct from sales (which ends at the signature) and from
 * field (which is the service call) — this is the office-owned lifecycle of a
 * project, with one named owner at every stage.
 */
export const PROJECTS_SECTIONS: SectionDef[] = [
  {
    id: "projects-foundations",
    title: "Foundations",
    description: "The seven stages, who owns each, and the handoff out of sales",
  },
  {
    id: "projects-preinstall",
    title: "Before the Crew Rolls",
    description: "Procurement, permits, and the pre-install confirmation",
  },
  {
    id: "projects-install",
    title: "Install Day",
    description: "Arrival, scope discipline, startup readings, and the walkthrough",
  },
  {
    id: "projects-closeout",
    title: "Closeout & Comfort Check",
    description: "Invoice, warranty registration, records, and going back at 10-14 days",
  },
  // Shared with the CSM, field, sales and dispatch surfaces.
  { id: "governance", title: "Governance", description: "How these documents are issued, acknowledged, and changed" },
];

export function projectsSections(): ContentSection[] {
  return sectionsForSurface("projects", PROJECTS_SECTIONS);
}

// ------------------------------------------------------------ reviews sections

/**
 * The review program: why reviews matter to a company founded in Nov 2025,
 * the 100+ first-year target, and who owns each ask. Distinct from the CSM
 * surface (which handles calls) and field (which handles visits) — this is
 * the shared reputation effort, with the tech ask, the CS ask, and the rules
 * that apply to everyone in one place.
 */
export const REVIEWS_SECTIONS: SectionDef[] = [
  {
    id: "review-program",
    title: "The Review Program",
    description: "Targets, the technician's ask, the CS team's ask, and the rules for everyone",
  },
];

export function reviewsSections(): ContentSection[] {
  return sectionsForSurface("reviews", REVIEWS_SECTIONS);
}

// -------------------------------------------------------- membership sections

/**
 * The membership book: what Home+ costs, what it covers, and how a third or
 * fourth system gets added. Surfaced on field, csm and dispatch too, because
 * a member hears the same numbers from all three or trusts none of them.
 */
export const MEMBERSHIP_SECTIONS: SectionDef[] = [
  {
    id: "membership-program",
    title: "The Membership Program",
    description: "Home+ pricing, covered systems, benefits, and adding systems three and four",
  },
];

export function membershipSections(): ContentSection[] {
  return sectionsForSurface("membership", MEMBERSHIP_SECTIONS);
}

// ------------------------------------------------------------ insurance sections

/**
 * Insurance and home-warranty claims: the visit, the fee rule, and what we
 * will and will not put on an invoice for a carrier. Its own book because the
 * money is approved by a third party, which changes the paperwork and nothing
 * else — and because the fee rule here is the one people get wrong.
 */
export const INSURANCE_SECTIONS: SectionDef[] = [
  {
    id: "insurance-claims",
    title: "Insurance & Home Warranty",
    description: "The claim visit, the diagnostic fee rule, estimates, and invoicing a carrier will accept",
  },
];

export function insuranceSections(): ContentSection[] {
  return sectionsForSurface("insurance", INSURANCE_SECTIONS);
}
