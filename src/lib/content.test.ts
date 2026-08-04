import { describe, it, expect } from "vitest";
import {
  allDocs,
  docsById,
  docsForSurface,
  csmSections,
  fieldSections,
  sectionsForSurface,
  flattenDocs,
  headings,
  clauseNumbers,
  docNumbers,
  numberSections,
  reviewDue,
  inForce,
  priceTokens,
  CSM_SECTIONS,
  FIELD_SECTIONS,
} from "./content";
import { ackState, acknowledgementStatement } from "./acknowledgements";

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
      // tokens.md documents the syntax itself; everything else must resolve.
      if (doc.id === "pricing.tokens") continue;
      for (const match of doc.body.matchAll(/\{\{price:([a-z0-9_]+)\}\}/g)) {
        unresolved.push(`${doc.id}: ${match[1]}`);
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
    const orphans = docsForSurface("csm").filter((d) => !d.section || !known.has(d.section));
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

describe("headings", () => {
  it("extracts anchored headings for the contents rail", () => {
    const hs = headings(docsById["sop.field.equipment-capture"]);
    expect(hs.length).toBeGreaterThan(3);
    expect(hs.every((h) => h.id && h.text)).toBe(true);
  });

  it("strips the anchor marker from the visible text", () => {
    for (const h of headings(docsById["sop.csm.greeting"])) {
      expect(h.text).not.toContain("{#");
    }
  });

  it("skips unanchored headings, which cannot be linked", () => {
    const doc = { ...docsById["sop.csm.greeting"], body: "## No anchor here\n\n## Anchored {#yes}" };
    expect(headings(doc).map((h) => h.id)).toEqual(["yes"]);
  });

  it("records heading depth", () => {
    const doc = { ...docsById["sop.csm.greeting"], body: "## Two {#a}\n\n### Three {#b}" };
    expect(headings(doc).map((h) => h.level)).toEqual([2, 3]);
  });
});

describe("field surface", () => {
  it("renders the technician SOP", () => {
    const ids = flattenDocs(fieldSections()).map((d) => d.id);
    expect(ids).toContain("sop.field.equipment-capture");
  });

  it("keeps CSM documents off the field surface", () => {
    const ids = flattenDocs(fieldSections()).map((d) => d.id);
    expect(ids).not.toContain("sop.csm.greeting");
  });

  it("names parts by position, so a dropped part cannot mislabel the rest", () => {
    // Titles are bare; "Part N" comes from numberSections. The field surface
    // has unwritten parts that get dropped, and this is what keeps its
    // headings agreeing with the document numbers beneath them.
    const ns = numberSections(fieldSections());
    expect(ns.every((s) => !s.title.startsWith("Part"))).toBe(true);
    expect(ns.map((s) => `Part ${s.number} — ${s.title}`)).toEqual([
      "Part 1 — On Every Job",
      "Part 2 — Governance",
    ]);
  });

  it("groups every field document into a known part", () => {
    const known = new Set(FIELD_SECTIONS.map((s) => s.id));
    const orphans = docsForSurface("field").filter((d) => !d.section || !known.has(d.section));
    expect(orphans.map((d) => d.id)).toEqual([]);
  });
});

describe("sectionsForSurface", () => {
  it("drops parts that have no documents", () => {
    expect(sectionsForSurface("csm", CSM_SECTIONS).every((s) => s.docs.length > 0)).toBe(true);
  });

  it("returns nothing for a surface with no documents", () => {
    expect(sectionsForSurface("nonexistent", CSM_SECTIONS)).toEqual([]);
  });

  it("flattens into a stable reading order for prev/next paging", () => {
    const flat = flattenDocs(csmSections());
    expect(flat.length).toBe(new Set(flat.map((d) => d.id)).size);
    expect(flat[0].id).toBe("sop.csm.role");
  });
});

describe("citation numbering", () => {
  it("numbers parts and documents by position", () => {
    const ns = numberSections(csmSections());
    expect(ns[0].number).toBe(1);
    expect(ns[0].numbered[0].number).toBe("1.1");
    expect(ns[1].numbered[0].number).toBe("2.1");
  });

  it("gives every document on a surface a unique citation", () => {
    const nums = Object.values(docNumbers(csmSections()));
    expect(new Set(nums).size).toBe(nums.length);
  });

  it("numbers clauses beneath the document number", () => {
    const doc = docsById["protocol.emergency.triage"];
    const clauses = clauseNumbers(doc, "2.5");
    const values = Object.values(clauses);
    expect(values[0]).toBe("2.5.1");
    expect(values[1]).toBe("2.5.2");
  });

  it("numbers only H2s — an H3 is a sub-point, not a clause", () => {
    const doc = { ...docsById["sop.csm.greeting"], body: "## A {#a}\n\n### B {#b}\n\n## C {#c}" };
    expect(clauseNumbers(doc, "1.1")).toEqual({ a: "1.1.1", c: "1.1.2" });
  });
});

describe("acknowledgement", () => {
  it("marks a document that binds the reader", () => {
    expect(docsById["sop.field.equipment-capture"].requiresAck).toBe(true);
  });

  it("leaves reference material unsigned — asking on every page trains people to click past it", () => {
    expect(docsById["reference.guarantees"].requiresAck).toBe(false);
    expect(docsById["sop.csm.greeting"].requiresAck).toBe(false);
  });

  it("publishes the acknowledgement policy to everyone it applies to", () => {
    const policy = docsById["governance.acknowledgement"];
    expect(policy.status).toBe("published");
    expect(policy.surfaces).toEqual(expect.arrayContaining(["csm", "field"]));
  });

  it("places the policy in a part on both books", () => {
    for (const sections of [csmSections(), fieldSections()]) {
      expect(flattenDocs(sections).map((d) => d.id)).toContain("governance.acknowledgement");
    }
  });

  it("counts a signature only against the version it was made on", () => {
    const doc = { ...docsById["sop.field.equipment-capture"], version: "2" };
    const at = "2026-08-04";
    expect(ackState(doc, undefined)).toBe("none");
    expect(ackState(doc, { docId: doc.id, docVersion: "2", acknowledgedAt: at })).toBe("current");
    expect(ackState(doc, { docId: doc.id, docVersion: "1", acknowledgedAt: at })).toBe("superseded");
  });

  it("names the document, its version and its citation in the statement", () => {
    const doc = docsById["sop.field.equipment-capture"];
    const statement = acknowledgementStatement(doc, "1.1");
    expect(statement).toContain("§1.1");
    expect(statement).toContain(doc.title);
    expect(statement).toContain(`v${doc.version}`);
    // The escape hatch is the point: signing is not a waiver of judgment.
    expect(statement).toContain("I will say so at the time");
  });

  it("omits the citation when the document has no number on this surface", () => {
    expect(acknowledgementStatement(docsById["sop.csm.greeting"], "")).not.toContain("§");
  });
});

describe("document control", () => {
  it("derives the review due date from the cadence", () => {
    const doc = { ...docsById["sop.csm.greeting"], lastReviewed: "2026-01-01", reviewCadenceDays: 90 };
    expect(reviewDue(doc)).toBe("2026-04-01");
  });

  it("returns nothing when there is no cadence to derive from", () => {
    expect(reviewDue({ ...docsById["sop.csm.greeting"], reviewCadenceDays: 0 })).toBe("");
  });

  it("treats only published documents as in force", () => {
    expect(inForce(docsById["sop.csm.greeting"])).toBe(true);
    expect(inForce(docsById["playbook.referral"])).toBe(false);
    expect(inForce(docsById["reference.guarantees"])).toBe(false);
  });
});
