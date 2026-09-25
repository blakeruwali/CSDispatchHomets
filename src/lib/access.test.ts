import { describe, it, expect } from "vitest";
import {
  ALL_TAB_IDS,
  ROLE_TABS,
  TABS,
  isAdmin,
  isUnconfigured,
  isKnownRole,
  normalizeRole,
  tabById,
  tabsFor,
  unmappedRoles,
} from "./access";
import { NAV_TABS } from "./navTabs";

describe("tab definitions", () => {
  it("gives every tab a unique id and path", () => {
    const ids = TABS.map((t) => t.id);
    const paths = TABS.map((t) => t.path);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("maps only tabs that exist", () => {
    // A role granting a tab id that is not in TABS would be silently
    // unreachable — the menu would never show it and no route would match.
    const known = new Set(ALL_TAB_IDS);
    const bad: string[] = [];
    for (const role of Object.keys(ROLE_TABS)) {
      for (const tab of ROLE_TABS[role]) {
        if (!known.has(tab)) bad.push(`${role} -> ${tab}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("keeps the menu in step with the access map", () => {
    // NAV_TABS is derived from TABS, so this pins the one thing that could
    // still drift: the home path being excluded from the bar.
    const navIds = NAV_TABS.map((n) => n.id);
    expect(navIds).not.toContain("csm-deck");
    expect(navIds.length).toBe(TABS.length - 1);
    for (const nav of NAV_TABS) {
      expect(tabById(nav.id)?.path).toBe(nav.path);
    }
  });
});

describe("role normalization", () => {
  it("treats separator and case differences as the same role", () => {
    // The role strings are authored in Architect. A mismatch in spelling
    // between the two projects would lock out a whole department, and would
    // look like a permissions bug rather than a typo.
    for (const variant of [
      "customer-success",
      "customer_success",
      "Customer Success",
      "  CUSTOMER-SUCCESS  ",
      "customer--success",
    ]) {
      expect(normalizeRole(variant)).toBe("customer-success");
      expect(isKnownRole(variant)).toBe(true);
    }
  });

  it("returns nothing for empty input", () => {
    expect(normalizeRole(null)).toBe("");
    expect(normalizeRole(undefined)).toBe("");
    expect(normalizeRole("   ")).toBe("");
    expect(isKnownRole("")).toBe(false);
  });

  it("does not invent access for a role it does not know", () => {
    expect(isKnownRole("warehouse")).toBe(false);
    expect(tabsFor(["warehouse"])).toEqual([]);
  });
});

describe("tabs for a role", () => {
  it("gives admin everything", () => {
    expect(tabsFor(["admin"])).toEqual(ALL_TAB_IDS);
    expect(isAdmin(["admin"])).toBe(true);
    expect(isAdmin(["technician"])).toBe(false);
  });

  it("unions the roles rather than picking the highest", () => {
    // These are not a hierarchy. A technician who also sells replacements
    // holds both roles and needs both books.
    const both = tabsFor(["technician", "sales"]);
    expect(both).toContain("field");
    expect(both).toContain("sales-deck");
  });

  it("keeps non-admin roles away from the admin tabs", () => {
    for (const role of ["customer-success", "technician", "sales", "marketing", "hr", "vendor-management"]) {
      const tabs = tabsFor([role]);
      expect(tabs).not.toContain("rubric-seed");
      expect(tabs).not.toContain("access-requests");
    }
  });

  it("gives hr every book but not Live Scoring", () => {
    // "Read-all, no admin" made concrete: Live Scoring writes QA records about
    // named staff, so read-all does not include it.
    const tabs = tabsFor(["hr"]);
    expect(tabs).toContain("csm");
    expect(tabs).toContain("field");
    expect(tabs).toContain("insurance");
    expect(tabs).not.toContain("checklist");
  });

  it("gives legacy `user` nothing, because / is the CSM deck", () => {
    // The draft mapping said "Home only". Home is the CSM presentation guide,
    // so that would have handed the call-handling deck to anyone who was never
    // assigned a real role.
    expect(tabsFor(["user"])).toEqual([]);
    expect(tabsFor(["interested"])).toEqual([]);
  });

  it("returns tabs in a stable order regardless of role order", () => {
    const a = tabsFor(["sales", "technician"]);
    const b = tabsFor(["technician", "sales"]);
    expect(a).toEqual(b);
  });
});

describe("grants", () => {
  it("adds a single tab on top of the role", () => {
    const tabs = tabsFor(["marketing"], ["dispatch"]);
    expect(tabs).toContain("leads");
    expect(tabs).toContain("dispatch");
  });

  it("ignores a grant for a tab that no longer exists", () => {
    // A stale grant should do nothing, not break the menu.
    expect(tabsFor(["marketing"], ["tab-that-was-deleted"])).toEqual(tabsFor(["marketing"]));
  });

  it("cannot grant an admin tab to a non-admin by accident", () => {
    // A grant is still only ever one tab, so this is intentional if it
    // happens — but it should be visible in a test that it is possible.
    expect(tabsFor(["marketing"], ["access-requests"])).toContain("access-requests");
  });
});

describe("unconfigured accounts", () => {
  it("separates 'not set up yet' from 'allowed nothing'", () => {
    // Both see no tabs; only the first is told to ask their manager.
    expect(isUnconfigured([])).toBe(true);
    expect(isUnconfigured(["user"])).toBe(true);
    expect(isUnconfigured(["interested"])).toBe(true);
    expect(isUnconfigured(["vendor-management"])).toBe(false);
    expect(isUnconfigured(["user", "technician"])).toBe(false);
  });
});

describe("unmapped roles", () => {
  it("names roles Architect sends that this app has no mapping for", () => {
    expect(unmappedRoles(["technician", "warehouse"])).toEqual(["warehouse"]);
  });

  it("does not report the placeholder roles as unmapped", () => {
    // They are mapped — to nothing — on purpose.
    expect(unmappedRoles(["user", "interested"])).toEqual([]);
  });
});
