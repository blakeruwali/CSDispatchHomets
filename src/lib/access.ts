/**
 * Which tabs each Architect role can open.
 *
 * One map, in code, deliberately. Roles live in Architect and are looked up at
 * sign-in; what a role is *allowed to see here* is a decision about this app
 * and belongs in this repository where it can be read, reviewed and diffed.
 * Putting it in a database table would mean the answer to "who can see
 * pricing?" is invisible in the codebase and editable without review.
 *
 * Grants from an approved access request are additive on top of this.
 */

/** Every gated tab in the app. `path` matches the route in App.tsx. */
export interface TabDef {
  id: string;
  path: string;
  /** How the tab is named in the menu and in an access request. */
  label: string;
}

export const TABS: TabDef[] = [
  // `/` is the CSM presentation guide and knowledge base — not a neutral
  // landing page. It is gated like any other book; see ROLE_TABS.
  { id: "csm-deck", path: "/", label: "CSM Presentation & Knowledge Base" },
  { id: "csm", path: "/csm", label: "CSM SOP" },
  { id: "field", path: "/field", label: "Field SOP" },
  { id: "dispatch", path: "/dispatch", label: "Dispatch SOP" },
  { id: "sales-guide", path: "/sales", label: "Sales SOP" },
  { id: "sales-deck", path: "/sales/deck", label: "Sales Deck" },
  { id: "projects", path: "/projects", label: "Projects SOP" },
  { id: "leads", path: "/leads", label: "Leads SOP" },
  { id: "reviews", path: "/reviews", label: "Reviews SOP" },
  { id: "membership", path: "/membership", label: "Membership SOP" },
  { id: "insurance", path: "/insurance", label: "Insurance SOP" },
  { id: "access-requests", path: "/admin/access", label: "Access Requests" },
];

export const ALL_TAB_IDS: string[] = TABS.map((t) => t.id);

export function tabByPath(path: string): TabDef | undefined {
  return TABS.find((t) => t.path === path);
}

export function tabById(id: string): TabDef | undefined {
  return TABS.find((t) => t.id === id);
}

/**
 * Every SOP book. Excludes the admin tab.
 *
 * This was also the line that kept HR out of Live Scoring. That page was
 * removed along with rubric seeding, so the distinction no longer has anything
 * to bite on — if scoring ever returns, it does not belong in here.
 */
const ALL_BOOKS: string[] = [
  "csm-deck",
  "csm",
  "field",
  "dispatch",
  "sales-guide",
  "sales-deck",
  "projects",
  "leads",
  "reviews",
  "membership",
  "insurance",
];

/**
 * Role to tabs.
 *
 * Keys are normalized (see `normalizeRole`), so `customer-success`,
 * `customer_success` and `Customer Success` all resolve to the same entry.
 * That matters because the role strings are authored in a different project:
 * a spelling difference between the two apps would otherwise lock out a whole
 * department, and the failure would look like a permissions bug rather than a
 * typo.
 */
export const ROLE_TABS: Record<string, string[]> = {
  admin: ALL_TAB_IDS,

  "customer-success": [
    "csm-deck",
    "csm",
    "dispatch",
    "leads",
    "membership",
    "insurance",
    "reviews",
  ],

  // Dispatch has no role in Architect yet. The key is here so that adding one
  // there starts working without a code change; until then dispatchers are
  // customer-success, which includes Dispatch.
  dispatch: ["dispatch", "csm", "membership"],

  technician: [
    "field",
    "sales-guide",
    "membership",
    "insurance",
    "reviews",
  ],

  sales: [
    "sales-guide",
    "sales-deck",
    "projects",
    "membership",
    // Added to the draft: the review ask at the end of a sold job is the
    // technician-and-seller's job, and the script lives in Reviews.
    "reviews",
  ],

  "vendor-management": ["projects"],

  marketing: ["leads", "reviews"],

  // "Read-all, no admin" made concrete: every book, and not the admin tab.
  hr: ALL_BOOKS,

  // Legacy staff accounts. Deliberately empty: `/` is the CSM presentation
  // guide, so "Home only" would have handed the call-handling deck to whoever
  // was never assigned a real role. They get the landing page listing what
  // they can open, which is nothing, and a prompt to ask their manager.
  user: [],

  // Architect's sign-up default. Not staff.
  interested: [],
};

/**
 * Roles that mean "this person has not been set up yet" rather than "this
 * person is allowed nothing".
 *
 * The distinction is only in the message shown, but it is the difference
 * between a technician who thinks the app is broken and one who knows to ask
 * their manager.
 */
export const UNCONFIGURED_ROLES: string[] = ["user", "interested"];

/**
 * Compare role strings from another system forgivingly.
 *
 * Lowercased, with separators flattened, so `Customer_Success`,
 * `customer-success` and `customer success` are one role. Anything that
 * normalizes to nothing is dropped by the callers.
 */
export function normalizeRole(role: string | null | undefined): string {
  if (!role) return "";
  return role
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** True when a role string matches nothing in the map — an unmapped role. */
export function isKnownRole(role: string | null | undefined): boolean {
  const key = normalizeRole(role);
  return key !== "" && Object.prototype.hasOwnProperty.call(ROLE_TABS, key);
}

/**
 * The tabs a person can open: the union of their roles, plus any individually
 * granted tabs from an approved request.
 *
 * Union rather than "highest role wins", because the roles are not a hierarchy
 * — a technician who also does sales holds both and needs both books.
 */
export function tabsFor(
  roles: string[] | null | undefined,
  grants?: string[] | null,
): string[] {
  const allowed = new Set<string>();

  for (const role of roles ?? []) {
    const key = normalizeRole(role);
    const tabs = ROLE_TABS[key];
    if (tabs) for (const tab of tabs) allowed.add(tab);
  }

  // A grant names one tab for one person. Unknown ids are ignored rather than
  // trusted: a stale grant for a tab that has since been removed should do
  // nothing, not crash the menu.
  for (const tab of grants ?? []) {
    if (ALL_TAB_IDS.indexOf(tab) !== -1) allowed.add(tab);
  }

  return ALL_TAB_IDS.filter((id) => allowed.has(id));
}

export function isAdmin(roles: string[] | null | undefined): boolean {
  for (const role of roles ?? []) {
    if (normalizeRole(role) === "admin") return true;
  }
  return false;
}

/**
 * True when every role the person holds is one of the "not set up yet" roles,
 * or they hold none at all. Used to pick the message, not to decide access.
 */
export function isUnconfigured(roles: string[] | null | undefined): boolean {
  const list = roles ?? [];
  if (list.length === 0) return true;
  for (const role of list) {
    if (UNCONFIGURED_ROLES.indexOf(normalizeRole(role)) === -1) return false;
  }
  return true;
}

/**
 * Roles we received that this app has no mapping for.
 *
 * Surfaced to admins on the access page. A role added in Architect and never
 * mapped here shows up as a person who can see nothing, and without this the
 * only symptom is a confused staff member.
 */
export function unmappedRoles(roles: string[] | null | undefined): string[] {
  const out: string[] = [];
  for (const role of roles ?? []) {
    const key = normalizeRole(role);
    if (key === "") continue;
    if (UNCONFIGURED_ROLES.indexOf(key) !== -1) continue;
    if (!Object.prototype.hasOwnProperty.call(ROLE_TABS, key)) out.push(role);
  }
  return out;
}
