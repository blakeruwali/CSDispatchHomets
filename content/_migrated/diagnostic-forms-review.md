# Diagnostic Forms Review — ServiceTitan

Review of twelve exported ServiceTitan Form 2.0 definitions, 2026-08-10. Same purpose as `csm-reconciliation.md`: record what two live sources say differently, and put the decisions in front of the owner rather than guessing.

**Headline: the point-inspection forms are the best documentation asset this company has, and a second family of forms is quietly competing with them on the same jobs.**

---

## The two families

### A — Point inspections (keep)

| Form | Points | Fields |
|---|---|---|
| 18-Point Ducted Air Conditioner Inspection | 18 | 53 |
| 22-Point Ducted Heat Pump Inspection | 22 | 58 |
| 18-Point Ductless Mini Split Inspection | 18 | 53 |
| 18-Point Ductwork Evaluation | 18 | 43 |
| 18-Point Indoor Air Quality Assessment | 18 | 54 |
| Complete Furnace Inspection | — | 75 |
| Complete Boiler Inspection | — | 75 |

One architecture across all seven: numbered points, a PASS / ATTENTION / FAIL / UNABLE TO TEST grade, a paired numeric field, and print-only **"WHAT THIS MEANS"** explainers written for the homeowner. They close with **Overall Result**, **Urgency**, a plain-language **Technician Summary** that prints on the customer's report, and an **Acknowledgment** section.

The customer-facing output is genuinely excellent. The R-22 explainer, the surge-protection note, the capacitor block that prints *45 rated / 28.4 measured* side by side — that is a document that earns a repair approval without anybody having to push.

The signature design is right, and it is the part most worth protecting:

- **Technician signature, required:** *"I performed and documented all 18 inspection points recorded above."*
- **Homeowner acknowledgment, optional:** *"Signing acknowledges receipt only — it does not authorize any repair."*

### B — "Full System Evaluation" (decide)

| Form | ID | Business unit | Fields | Rules |
|---|---|---|---|---|
| IAQ Assessment – Full System Evaluation | 149 | **none assigned** | 68 | 62 |
| Ductwork Evaluation – Full System Assessment | 150 | Home+ HVAC Repairs | 71 | 45 |
| Heat Pump – Full System Evaluation | 156 | HVAC Maintenance, HVAC Repairs, **Plumbing Service** | 84 | 34 |

**All three duplicate a point-inspection form head to head** — IAQ, ductwork, heat pump. A technician opening ServiceTitan on a heat pump job sees two diagnostic forms and picks one. Whichever they pick, the other one's data never exists, and no report is comparable to any other.

---

## D5 — Which family wins? *(owner decision)*

You cannot run both. Two forms for the same job is not redundancy, it is a coin flip on what gets recorded.

**Recommendation: retire the three Full System forms, keep the point inspections.** They are better documents, they are internally consistent across seven system types, and their signature model is defensible.

---

## D6 — The Full System forms contain sales scripting *(owner decision)*

This is the substantive concern, and it is why D5 is not merely tidying up. Quoting the form definitions verbatim:

**Section 11 of both #149 and #150 is titled "Revenue Triggers & Recommendations"**, introduced with: *"💰 The fields below are automatically shown based on findings. Each represents a recommendation opportunity."*

Field-level coaching written into #149:

| Field | Description as written |
|---|---|
| Customer Interested in Improving Indoor Air Quality? | *"Soft close: shifts conversation from **fear** to aspiration"* |
| Homeowner Priority | *"Helps tech pivot **closing style** based on what the customer cares about"* |
| Filter Subscription Program | *"Converts one-time filter sale into **recurring revenue**"* |
| Recommended IAQ Tier | *"Drives **proposal automation**"* |

And on a mold finding, #149 displays:

> **🔴 MOLD LIABILITY WARNING** — Visible mold contamination detected. Anti-microbial treatment and UV germicidal system are **mandatory recommendations**. Customer must acknowledge findings. Failure to remediate creates ongoing health and legal liability.

Four separate problems in one box:

1. **A finding that automatically mandates two specific products is not a diagnosis.** It is a script with a diagnosis-shaped wrapper.
2. **"Mandatory" is aimed at the technician but reads to the customer as a legal requirement.** It is not one.
3. **"Failure to remediate creates ongoing health and legal liability"** is a legal opinion, printed by an HVAC company, to a homeowner.
4. **#149 also asks the technician to grade "Indoor Air Health Risk Level"** — a health determination about a household whose asthma and COPD status the same form records two sections earlier. We are not qualified to make it and we should not be recording that we did.

**The word "fear" is in the form definition.** If one of these reports is ever produced in a complaint, a chargeback, or a licensing question, that field description is the entire case and no explanation survives it.

None of this appears anywhere in the point-inspection family. That family recommends plenty — it just does it from findings.

**Recommendation: delete the Full System forms rather than editing them.** The equivalent point inspection already exists for all three.

---

## D7 — Required customer signatures *(owner decision)*

| Family | Customer signature |
|---|---|
| Point inspections | **Optional.** "Acknowledges receipt only — it does not authorize any repair." |
| #149, #150 | **Required** to submit |
| #156 | **Required** — *"Customer Acknowledge of System Health and Risks"* |

A required signature means the technician cannot close the job until the customer signs. At a doorstep, with a technician waiting, that is pressure — and #156 goes further by naming what is signed as an acknowledgment of *risk*, which is a different and heavier thing than acknowledging receipt of a report.

It also backfires: a signature given under pressure is worth less in a dispute than the optional one freely given, because the pressure is visible in the form design itself.

**Recommendation: customer signatures are optional everywhere, with the point-inspection wording.** #156's "refuses shutdown (document refusal)" path is worth keeping — a documented refusal is exactly right — but it does not need a compelled signature to work.

---

## Defects — no decision needed, just fixes

**1. "all 0 inspection points."** The technician signature on **Complete Furnace Inspection** and **Complete Boiler Inspection** reads:

> *"I performed and documented all **0** inspection points recorded above."*

An unfilled template placeholder, sitting in the one field a technician is required to sign. Both forms are point-based in structure but were never numbered. Either give them point counts or reword to "all inspection points recorded above."

**2. #149 has no business unit assigned.** Every other form is scoped to at least one. Worth confirming what that means for visibility.

**3. #156 is assigned to Home+ Plumbing Service.** A heat pump evaluation appearing on plumbing jobs is very likely unintended.

**4. Form / definition ID collision in the exports.** All seven point-inspection forms export as `form.id=144, definition.id=80` — including two files both named "Complete Furnace Inspection" and one named "Complete Boiler Inspection". The Full System forms have distinct ids (149/85, 150/86, 156/91). This may be an artefact of how the exports were produced rather than the live tenant state, but **verify before importing any of these anywhere**, because a re-import against a colliding id can overwrite a different form.

---

## What was adopted into the SOP

The thresholds in `reference.diagnostic-readings` were rewritten to match these forms exactly, replacing the standard-of-practice values previously drafted. This closes **D4** — the forms already answer it.

| Threshold | From the forms |
|---|---|
| Run capacitor | PASS within 6% · ATTENTION 6–10% below · FAIL >10% below |
| Temperature split | 15–22°F |
| Superheat | 8–12°F, fixed orifice |
| Subcooling | 8–12°F, TXV |
| Total external static | 0.5" w.c. rated |
| Temperature rise | Rating-plate window, typically 30–40°F |
| Flue CO, air-free | <100 ppm acceptable · >400 ppm FAIL |
| Ambient CO | 0 / <10 PASS · 10–35 ATTENTION · ≥35 shut down · ≥70 evacuate + fire department |
| Relative humidity | 30–50% PASS · >60% or <20% FAIL |
| CO₂ | <800 PASS · 800–1200 ATTENTION · >1200 FAIL |
| Filter | MERV 11+ PASS |
| Thermostat calibration | Within 2°F |

`sop.field.diagnostics` now names the form per system type, states that working the form *is* the diagnosis, requires both the grade and the number, protects "UNABLE TO TEST" as a legitimate answer, and separates the two signatures.
