import { describe, it, expect } from "vitest";
import {
  allDocs,
  docsById,
  docsForSurface,
  csmSections,
  priceTokens,
  CSM_SECTIONS,
} from "./content";

describe("content loader", () => {
  it("loads documents from content/", () => {
    expect(allDocs.length).toBeGreaterThan(40);
  });

  it("parses frontmatter into typed fields", () => {
    const greeting = docsById["sop.csm.greeting"];
    expect(greeting).toBeDefined();
    expect(greeting.title).toBe("CSM Greeting Standard");
    expect(greeting.department).toBe("csm");
    expect(greeting.status).toBe("published");
    expect(greeting.section).toBe("interaction");
    expect(greeting.surfaces).toContain("csm");
  });

  it("gives every document a unique id", () => {
    const ids = allDocs.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("price tokens", () => {
  it("parses tokens from tokens.md", () => {
    expect(priceTokens.diagnostic_residential).toBe("$199");
    expect(priceTokens.hold_cap).toBe("60 seconds");
  });

  it("resolves every token in every rendered body", () => {
    const unresolved: string[] = [];
    for (const doc of allDocs) {
      for (const match of doc.body.matchAll(/\{\{price:([a-z0-9_]+)\}\}/g)) {
        // tokens.md documents the syntax itself; everything else must resolve.
        if (doc.id !== "pricing.tokens") unresolved.push(`${doc.id}: ${match[1]}`);
      }
    }
    expect(unresolved).toEqual([]);
  });

  it("substitutes the real value into the body", () => {
    const fee = docsById["sop.csm.diagnostic-fee"];
    expect(fee.body).toContain("$199");
    expect(fee.body).not.toContain("{{price:");
  });
});

describe("cross-references", () => {
  it("resolves every `related` id to a real document", () => {
    const broken: string[] = [];
    for (const doc of allDocs) {
      for (const id of doc.related) {
        if (!docsById[id]) broken.push(`${doc.id} -> ${id}`);
      }
    }
    expect(broken).toEqual([]);
  });
});

describe("CSM surface", () => {
  it("groups every CSM document into a known section", () => {
    const known = new Set(CSM_SECTIONS.map((s) => s.id));
    const orphans = docsForSurface("csm")
      .filter((d) => d.id !== "pricing.tokens")
      .filter((d) => !d.section || !known.has(d.section));
    expect(orphans.map((d) => d.id)).toEqual([]);
  });

  it("renders all seven parts of the SOP", () => {
    const sections = csmSections();
    expect(sections).toHaveLength(7);
    expect(sections.map((s) => s.id)).toEqual([
      "foundations",
      "interaction",
      "intake",
      "booking",
      "channels",
      "post-booking",
      "governance",
    ]);
  });

  it("orders documents within a section by their declared order", () => {
    for (const section of csmSections()) {
      const orders = section.docs.map((d) => d.order);
      expect(orders).toEqual([...orders].sort((a, b) => a - b));
    }
  });

  it("opens with the greeting in the interaction part", () => {
    const interaction = csmSections().find((s) => s.id === "interaction");
    expect(interaction?.docs[0].id).toBe("sop.csm.greeting");
  });

  it("never surfaces archived documents", () => {
    expect(docsForSurface("csm").every((d) => d.status !== "archived")).toBe(true);
  });
});
