# Homets Company SOP — Master Index

Every document the complete company SOP requires, whether or not it exists yet. This is the map: if a procedure isn't on this page, it isn't part of the SOP, and if it's on this page as `draft-needed`, its absence is a known gap rather than an invisible one.

**Status key:** ✅ published · 🟡 in-review · ⬜ draft-needed (source content exists, not yet migrated) · ❌ draft-needed (no source — must be authored from scratch)

---

## Coverage at a glance

| Department | Docs required | Published | Remaining | Source material |
|---|---|---|---|---|
| CSM | 51 | 51 | 0 | ✅ complete — SOP + KB reconciled, marketplace channels added |
| Field (technician) | ~5 | 1 | ~4 | ❌ none — authored |
| Dispatch | ~24 | 0 | ~24 | `slideData.tsx` (4,914 lines) |
| Sales (tech) | ~22 | 0 | ~22 | `techSalesSlides.tsx` (1,250 lines) |
| Reference / KB | ~30 | 0 | ~30 | `kbData.tsx` (2,250 lines) |
| Install | ~10 | 0 | ~10 | ❌ none |
| Plumbing | ~8 | 0 | ~8 | partial — KB plumbing section |
| People / HR | ~12 | 1 | ~11 | ❌ none |
| Governance | 3 | 3 | 0 | ✅ complete |
| Pricing | ~5 | 1 | ~4 | partial |

---

## 1. CSM — Customer Service ✅ complete

The flagship SOP. All 7 parts and 38 sections of `csmSopData.tsx`, **plus** the CSM-relevant knowledge-base material reconciled against it. Conflicts found during that reconciliation are recorded in [`_migrated/csm-reconciliation.md`](_migrated/csm-reconciliation.md) — four still need an owner decision.

### Foundations
| Doc | id | Status |
|---|---|---|
| CSM Role & Responsibilities | `sop.csm.role` | ✅ |
| Hours, Coverage & Shift Handoffs | `sop.csm.coverage` | ✅ |
| Tools of Record | `sop.csm.tools` | ✅ |
| Communication Standards | `sop.csm.communication` | ✅ |
| KPIs the CSM Owns | `sop.csm.kpis` | ✅ |

### Customer interaction
| Doc | id | Status |
|---|---|---|
| Greeting Standard | `sop.csm.greeting` | ✅ |
| Active Listening & Acknowledgement | `sop.csm.active-listening` | ✅ |
| Customer Profile Recognition | `sop.csm.customer-profiles` | ✅ |
| **Emergency Triage Matrix** | `protocol.emergency.triage` | ✅ |
| Difficult Customers & De-escalation | `sop.csm.de-escalation` | ✅ |
| Warm Transfer & Hold | `sop.csm.transfer-hold` | ✅ |
| **Escalation & Money-Back Authority** | `sop.csm.escalation` | ✅ |
| **Non-English Caller Handling** | `sop.csm.non-english-callers` | ✅ |

### Intake
| Doc | id | Status |
|---|---|---|
| Required Intake Data Fields | `sop.csm.intake` | ✅ |
| Service Type Identification | `sop.csm.service-type` | ✅ |
| System Type Identification | `sop.csm.system-type` | ✅ |
| Residential vs Commercial Routing | `sop.csm.res-vs-comm` | ✅ |
| Symptom Clarification | `sop.csm.symptom-clarification` | ✅ |
| Membership Status Check | `sop.csm.membership-status` | ✅ |
| Lead Source Attribution | `sop.csm.lead-source` | ✅ |

### Booking
| Doc | id | Status |
|---|---|---|
| Availability & Booking Windows | `sop.csm.availability` | ✅ |
| Diagnostic Fee Framing | `sop.csm.diagnostic-fee` | ✅ |
| Membership Pivot (Home+) | `sop.csm.membership-pivot` | ✅ |
| Confirmation & Expectations Read-Back | `sop.csm.confirmation` | ✅ |
| Reschedules & Cancellations | `sop.csm.reschedules` | ✅ |
| No-Show / Ghost Recovery | `sop.csm.no-show-recovery` | ✅ |
| **Service Area, Out-of-Area & Fully-Booked** | `sop.csm.service-area` | ✅ |

### Post-booking
| Doc | id | Status |
|---|---|---|
| ServiceTitan Ticket Standards | `sop.csm.ticket-standards` | ✅ |
| Dispatch Handoff Checklist | `sop.csm.dispatch-handoff` | ✅ |
| Customer Confirmation Cadence | `sop.csm.confirmation-cadence` | ✅ |
| **Warranty Callback Identification** | `sop.csm.warranty-callback` | ✅ |
| **Post-Service Follow-Up** | `sop.csm.post-service-followup` | 🟡 in-review — conflict C3 |
| **Membership Retention & Renewal** | `sop.csm.membership-retention` | ✅ |

### Scripts
| Doc | id | Status |
|---|---|---|
| Acknowledgement & Empathy Lines | `script.csm.empathy` | ✅ |
| **Voicemail Scripts** | `script.csm.voicemail` | ✅ |
| **Tone & Language Standards** | `script.csm.tone-language` | ✅ |
| **Google Review Request** | `script.csm.review-request` | ✅ |
| **Seasonal Outreach** | `script.csm.seasonal-outreach` | ✅ |
| Objection — price | `script.objection.price` | ✅ |
| Objection — "just a quote" | `script.objection.quote-only` | ✅ |
| Objection — callback / spouse | `script.objection.callback-spouse` | ✅ |
| Objection — DIY | `script.objection.diy` | ✅ |

### Reference the CSM relies on
| Doc | id | Status |
|---|---|---|
| **Guarantees, Warranties & Policies** | `reference.guarantees` | 🟡 in-review — conflict C1 |

### Channel playbooks
| Doc | id | Status |
|---|---|---|
| **Speed to Lead — the standard** | `playbook.speed-to-lead` | ✅ |
| **Marketplace outreach scripts** | `script.csm.marketplace-outreach` | ✅ |
| **Angi** — flows into ServiceTitan | `playbook.angi` | ✅ |
| **Thumbtack** — not in ST, manual capture | `playbook.thumbtack` | ✅ |
| **Yelp** — not in ST, manual capture | `playbook.yelp` | ✅ |
| Inbound Phone | `playbook.inbound` | ✅ |
| Google LSA | `playbook.lsa` | ✅ |
| Website Form | `playbook.web` | ✅ |
| Posh After-Hours | `playbook.posh` | ✅ |
| SMS / Text-back | `playbook.sms` | ✅ |
| Customer Referrals | `playbook.referral` | ❌ **blocked — see below** |

---

## 2. Governance ✅ complete

| Doc | id | Status |
|---|---|---|
| Document Control & Change Log | `governance.doc-control` | ✅ |
| CSM QA Scoring Rubric | `governance.qa.csm` | ✅ |
| Coaching & Review Cadence | `governance.coaching` | ✅ |
| **Marketplace outbound rubric** | in `rubric-seed.ts` | ✅ scored at `/checklist` |
| Dispatch QA rubric | `governance.qa.dispatch` | ⬜ |
| Tech sales QA rubric | `governance.qa.sales` | ⬜ |

---

## 3. Field — Technician ✅ started

Procedures that apply to a technician on **every** visit, whatever the job type. Distinct from §4 Sales, which is the in-home sales process only.

| Doc | id | Status |
|---|---|---|
| **Equipment Capture in ServiceTitan** | `sop.field.equipment-capture` | ✅ |
| **Diagnostics — proving the cause before you quote** | `sop.field.diagnostics` | ✅ published — D1–D7 all decided |
| **Diagnostic thresholds behind the forms** | `reference.diagnostic-readings` | ✅ published — thresholds match the ServiceTitan forms |
| **Complaint: Not Cooling** | `sop.field.no-cooling` | ✅ published · 🇪🇸 |
| **Complaint: No Heat** | `sop.field.no-heat` | ✅ published · 🇪🇸 |
| **Complaint: Ice on the System** | `sop.field.frozen-coil` | ✅ published · 🇪🇸 |
| Complaint: Water Leaking | `sop.field.water-leak` | ❌ placeholder |
| Complaint: Breaker Tripping / Short Cycling | `sop.field.electrical` | ❌ placeholder |
| Complaint: Noise | `sop.field.noise` | ❌ placeholder |
| Arrival & site conduct | `sop.field.arrival` | ❌ |
| Job documentation & photos | `sop.field.documentation` | ❌ |
| Truck stock & parts | `sop.field.truck-stock` | ❌ |
| Job site safety | `people.safety.job-site` | ❌ |

Renders at **`/field`**. Parts are declared in `FIELD_SECTIONS` (`src/lib/content.ts`); a doc joins the surface by setting `surfaces: [field]` plus a `section` and `order`.

---

## 4. Dispatch ⬜ next up

Source: `src/components/presentation/slideData.tsx` — 4,914 lines, ~48 slides, already written and in daily use as the dispatch training deck. This is migration work, not authoring work.

### Core flow
| Doc | id | Status |
|---|---|---|
| Dispatch role & board ownership | `sop.dispatch.role` | ⬜ |
| Call flow & triage | `sop.dispatch.call-flow` | ⬜ |
| Dispatch flowchart | `sop.dispatch.flowchart` | ⬜ |
| Scheduling rules | `sop.dispatch.scheduling` | ⬜ |
| Job types & business units | `reference.business-units` | ⬜ |
| Tech assignment & specializations | `sop.dispatch.tech-assignment` | ⬜ |
| Two-tech job criteria | `sop.dispatch.two-tech` | ⬜ |
| Fully-booked day procedures | `sop.dispatch.fully-booked` | ⬜ |
| Customer checklist | `sop.dispatch.customer-checklist` | ⬜ |
| Site survey script | `script.dispatch.site-survey` | ⬜ |

### Exception protocols (one doc each — 16 scenarios in source)
| Doc | id | Status |
|---|---|---|
| Repair running long | `protocol.dispatch.repair-running-long` | ⬜ |
| Part not on truck | `protocol.dispatch.part-not-on-truck` | ⬜ |
| Customer no-show | `protocol.dispatch.customer-no-show` | ⬜ |
| Permit / code violation | `protocol.dispatch.permit-violation` | ⬜ |
| Weather delay | `protocol.dispatch.weather-delay` | ⬜ |
| Customer dispute | `protocol.dispatch.customer-dispute` | ⬜ |
| Unrelated safety hazard | `protocol.dispatch.safety-hazard` | ⬜ |
| VIP customer | `protocol.dispatch.vip` | ⬜ |
| Warranty callback | `protocol.warranty.callback` | ⬜ |
| Misbooked job | `protocol.dispatch.misbooked` | ⬜ |
| Mid-repair cancellation | `protocol.dispatch.mid-repair-cancel` | ⬜ |
| Locked / no access | `protocol.dispatch.locked-access` | ⬜ |
| Tech complaint | `protocol.dispatch.tech-complaint` | ⬜ |
| Maintenance upsell | `protocol.dispatch.maintenance-upsell` | ⬜ |
| Manufacturer warranty | `protocol.warranty.manufacturer` | ⬜ |
| Outstanding balance | `protocol.dispatch.outstanding-balance` | ⬜ |

### Customer-type handling
| Doc | id | Status |
|---|---|---|
| Homeowner | `sop.dispatch.customer.homeowner` | ⬜ |
| Rental property | `sop.dispatch.customer.rental` | ⬜ |
| Commercial office | `sop.dispatch.customer.commercial` | ⬜ |
| Property manager | `sop.dispatch.customer.property-manager` | ⬜ |

> **Note.** The source deck has five sales scripts (diagnostic, estimate, maintenance, membership, plumbing) and a large objection library. These overlap the CSM scripts already published — during migration, reconcile rather than duplicate. Where dispatch and CSM say the same thing, one doc wins and the other references it.

---

## 5. Sales — Technician ⬜

Source: `src/components/presentation/techSalesSlides.tsx` — 1,250 lines, ~24 slides.

| Doc | id | Status |
|---|---|---|
| Sales mindset | `sop.sales.mindset` | ⬜ |
| Arrival protocol | `sop.sales.arrival` | ⬜ |
| Walk-around | `sop.sales.walk-around` | ⬜ |
| Pain points discovery | `sop.sales.pain-points` | ⬜ |
| Good / Better / Best presentation | `sop.sales.good-better-best` | ⬜ |
| Presenting the investment | `sop.sales.presenting-investment` | ⬜ |
| Financing | `sop.sales.financing` | ⬜ |
| Membership tie-in | `sop.sales.membership` | ⬜ |
| Creating urgency | `sop.sales.urgency` | ⬜ |
| Closing techniques | `sop.sales.closing` | ⬜ |
| Paperwork | `sop.sales.paperwork` | ⬜ |
| Follow-up | `sop.sales.follow-up` | ⬜ |
| Install pricing framework | `pricing.install-framework` | ⬜ |
| Cash vs financing | `pricing.cash-vs-financing` | ⬜ |
| Objections 1–7 | `script.objection.sales.*` | ⬜ (7 docs) |

---

## 6. Reference / Knowledge Base ⬜

Source: `src/components/knowledge-base/kbData.tsx` — 2,250 lines, 13 sections, ~80 articles. Mostly *reference* rather than *procedure* — the material scripts point at when a customer asks a factual question.

| Group | Target | Status |
|---|---|---|
| HVAC Systems 101 (boilers, furnaces, AC, heat pumps, mini-splits, age thresholds) | `reference/equipment/` | ⬜ 6 docs |
| Thermostats & controls | `reference/thermostats/` | ⬜ 3 docs |
| Common customer questions | `reference/faq/` | ⬜ 10 docs |
| Objection handling & de-escalation | reconcile with `scripts/objections/` | ⬜ 6 docs |
| ServiceTitan & tools guide | `reference/servicetitan/` | ⬜ 6 docs |
| Service area & logistics | `reference/service-area.md` | ⬜ 6 docs |
| Membership & upsell program | `reference/membership-plans.md` | ⬜ 6 docs |
| Policies & guarantees | `reference/policies/` | ⬜ 7 docs |
| Plumbing services | `sops/plumbing/` + `reference/` | ⬜ 4 docs |
| Indoor air quality | `reference/iaq/` | ⬜ 3 docs |
| Commercial HVAC | `reference/commercial/` | ⬜ 4 docs |
| New installation & replacement | `reference/installs/` | ⬜ 4 docs |
| Phone scripts & call protocols | reconcile with `scripts/csm/` | ⬜ 6 docs |
| Post-service & retention | `sops/csm/` | ⬜ |

> **Reconciliation required.** Three KB sections (objection handling, phone scripts, membership) restate content now published under `sops/csm/` and `scripts/`. Migrating them verbatim would create two sources of truth — exactly what this repository exists to prevent. Each needs a decision: merge into the CSM doc, or keep as a reference doc that links to it.

---

## 7. Install ❌ no source material

Nothing exists to migrate. Every doc here must be authored from scratch with the install team.

| Doc | id | Status |
|---|---|---|
| Install role & crew structure | `sop.install.role` | ❌ |
| Pre-install site survey | `sop.install.site-survey` | ❌ |
| Equipment ordering & staging | `sop.install.ordering` | ❌ |
| Install day sequence | `sop.install.day-of` | ❌ |
| Permit & inspection process | `sop.install.permits` | ❌ |
| Commissioning & customer walkthrough | `sop.install.commissioning` | ❌ |
| Punch list & callbacks | `sop.install.punch-list` | ❌ |
| Warranty registration | `sop.install.warranty-registration` | ❌ |
| Job site safety | `people.safety.job-site` | ❌ |
| Install QA checklist | `governance.qa.install` | ❌ |

---

## 8. Plumbing ❌ mostly missing

The KB has a plumbing section (services offered, water heater troubleshooting, drain & sewer, pricing quick reference) — that's reference material, not procedure. The procedures don't exist.

| Doc | id | Status |
|---|---|---|
| Plumbing services offered | `reference.plumbing.services` | ⬜ (KB source) |
| Water heater troubleshooting | `reference.plumbing.water-heater` | ⬜ (KB source) |
| Drain & sewer issues | `reference.plumbing.drain-sewer` | ⬜ (KB source) |
| Plumbing pricing | `pricing.plumbing` | ⬜ (KB source) |
| Plumbing intake & dispatch rules | `sop.plumbing.intake` | ❌ |
| Plumbing emergency protocol | `protocol.emergency.plumbing` | ❌ |
| Plumbing job standards | `sop.plumbing.job-standards` | ❌ |
| Plumbing QA | `governance.qa.plumbing` | ❌ |

---

## 9. People / HR ❌ almost entirely missing

| Doc | id | Status |
|---|---|---|
| CSM onboarding 30/60/90 | `people.onboarding.csm` | ✅ |
| Dispatcher onboarding | `people.onboarding.dispatcher` | ❌ |
| Technician onboarding | `people.onboarding.tech` | ❌ |
| Installer onboarding | `people.onboarding.installer` | ❌ |
| Job site safety | `people.safety.job-site` | ❌ |
| PPE & hazard protocols | `people.safety.ppe` | ❌ |
| Required certifications by role | `people.certifications.matrix` | ❌ |
| Certification renewal tracking | `people.certifications.renewal` | ❌ |
| Time off & scheduling policy | `people.hr.time-off` | ❌ |
| Benefits summary | `people.hr.benefits` | ❌ |
| Escalation & grievance path | `people.hr.escalation` | ❌ |
| Vehicle & fleet policy | `people.hr.fleet` | ❌ |

> **Note.** `content/people/README.md` says existing HR documents should be dropped in here *before* anything is drafted. That instruction stands — HR content carries legal exposure and must not be invented by an agent. If policies exist in Drive or a handbook, they get migrated; if they don't exist, they get written with counsel, not with us.

---

## 10. Reference — company facts ⬜

| Doc | id | Status |
|---|---|---|
| Service scope (HVAC & plumbing) | `reference.service-scope` | ⬜ |
| Service area — Nassau & Suffolk | `reference.service-area` | ⬜ (KB source) |
| Membership plans — Home+ / Business+ | `reference.membership-plans` | ⬜ (KB source) |
| Equipment & brands supported | `reference.equipment-supported` | ⬜ (KB source) |
| Business units → job type mapping | `reference.business-units` | ⬜ |
| Company info, licenses, insurance | `reference.company` | ❌ |

---

## 11. Pricing

| Doc | id | Status |
|---|---|---|
| Price tokens | `pricing.tokens` | ✅ |
| Install pricing framework | `pricing.install-framework` | ⬜ |
| Cash vs financing | `pricing.cash-vs-financing` | ⬜ |
| Deposit & payment policy narrative | `pricing.deposits` | ⬜ |
| Plumbing pricing | `pricing.plumbing` | ⬜ |

---

## Open questions that block finalization

These cannot be answered by migration, research, or an agent. They need the owner.

### 🔴 Live contradictions — two published sources disagree today

Full detail in [`_migrated/csm-reconciliation.md`](_migrated/csm-reconciliation.md).

| # | Question | Blocks |
|---|---|---|
| ~~**C1**~~ | ~~Do we charge extra after hours?~~ **✅ RESOLVED 2026-08-10 — there is no after-hours or emergency surcharge.** The $299 is retired, `reference.guarantees` is now published and carries it as a customer promise, and the KB page that instructed CSMs to quote a fee has been corrected. | Closed |
| **C2** | **Can a CSM discount or waive anything independently?** SOP says no; KB says up to 10% off the next visit plus a diagnostic waiver. | `sop.csm.escalation`, `csm_credit_authority` |
| **C3** | **Is post-service follow-up automated or a manual call on every job?** The staffing implication is significant. | `sop.csm.post-service-followup` |
| **C4** | **Repeat no-shows: 2 strikes and a deposit, or 3 and a confirmation call?** | `sop.csm.no-show-recovery` |

### Missing facts

| # | Question | Blocks |
|---|---|---|
| 1 | **What is the Business+ commercial membership price?** | `pricing.tokens` TBD flag, every commercial membership pitch |
| 2 | **What is the customer referral credit** — amount, trigger, who receives it? | `playbook.referral`, and a promise `sop.csm.lead-source` already makes to customers |
| 3 | **Do HR/safety policies exist in writing anywhere?** If yes, where — Drive, handbook, insurer portal? | All 11 `people/` gaps |
| 4 | **Who owns the Install SOP** — is there a lead installer who can sit for the authoring sessions? | All 10 `install/` docs |
| 5 | **Which wins on overlap** — the CSM SOP or the dispatch deck — where the two say different things about the same call? | Dispatch migration reconciliation |
| 6 | **Is the flat maintenance price defined?** `sop.csm.service-type` currently says "flat maintenance price" with no number. | `pricing.tokens`, maintenance bookings |

### Field diagnostics decisions — ✅ all decided 2026-08-10

Raised by `sop.field.diagnostics` and answered as recommended. The document is now **published and in force**, which also activates its acknowledgement block.

| # | Question | Decision |
|---|---|---|
| **D1** | Second opinion before condemning a compressor, heat exchanger, coil or tank? | **Required** — a call to the Service Manager from the driveway |
| **D2** | Is there a time budget for a diagnostic? | **25–45 minutes stated as reality, not as a target.** If dispatch is booking shorter, dispatch is what changes |
| **D3** | Do we charge the diagnostic on a genuine no-fault-found? | **Yes**, and the technician has the words for it |
| **D4** | Are the reference thresholds right? | **Closed** — the ServiceTitan forms already carried our thresholds; `reference.diagnostic-readings` was rewritten to match them |

### Diagnostic form decisions — ✅ all decided 2026-08-10

From the review of twelve exported ServiceTitan forms in [`_migrated/diagnostic-forms-review.md`](_migrated/diagnostic-forms-review.md), answered as recommended. **These are ServiceTitan changes, not repository changes** — the action list is at the foot of that document and someone with tenant access has to do them.

| # | Question | Decision | Blocks |
|---|---|---|---|
| **D5** | ~~Which family of diagnostic form wins?~~ **Point inspections.** The seven numbered point inspections, or the three "Full System Evaluation" forms? All three of the latter duplicate a point inspection exactly — IAQ, ductwork, heat pump — so a tech opening a heat pump job sees two forms and picks one. | **Retire the three Full System forms.** The point inspections are better documents, consistent across seven system types, and their signature model is defensible. | `sop.field.diagnostics`, every diagnostic visit |
| **D6** | ~~The Full System forms contain sales scripting.~~ **Delete, don't edit.** A section titled "Revenue Triggers", field descriptions reading "soft close: shifts conversation from fear to aspiration" and "converts one-time filter sale into recurring revenue", a mold banner declaring two named products "mandatory recommendations" and asserting legal liability, and a technician-graded "Indoor Air Health Risk Level". | **Delete rather than edit.** The equivalent point inspection already exists for all three. | Reputational and licensing exposure — the word "fear" is in the form definition |
| **D7** | ~~Should a customer signature ever be required to close a job?~~ **Never.** Point inspections make it optional and receipt-only; #149, #150 and #156 require it, and #156 frames it as acknowledging *risk*. | **Optional everywhere**, with the point-inspection wording. Keep #156's documented-refusal path. | Customer trust, and the evidential value of the signature itself |

**Defects with no decision attached** (detail in the review): the Complete Furnace and Complete Boiler technician signatures both read *"I performed and documented all **0** inspection points"*; #149 has no business unit assigned; #156 is assigned to Home+ Plumbing Service; and every point-inspection export carries the same form/definition id, which should be verified against the live tenant before any re-import.

---

## Sequencing recommendation

1. ~~Answer C1.~~ ~~D1–D7.~~ **All decided 2026-08-10.** The remaining diagnostic work is in ServiceTitan, not here: deactivate forms 149/150/156 and fix the "all 0 inspection points" signature on the furnace and boiler forms.
2. **Dispatch migration** — biggest source file, content already battle-tested, pure extraction. Highest value per hour.
3. **Sales migration** — self-contained, low overlap with what's published.
4. **Remaining KB migration** — the CSM-relevant sections are done and reconciled; what's left is equipment, thermostats, FAQ and commercial reference material.
5. **Wire the rubric to anchors** — `src/lib/rubric-seed.ts` scores against categories that now have real section anchors, and the renderer already assigns each `{#anchor}` a DOM id. Linking them makes a low score jump straight to the standard it failed.
6. **Install & People authoring** — needs interviews, not extraction. Schedule it; don't wait for it.

## How it reaches staff

`/csm` and `/field` render these markdown files directly, through one shared documentation layout — persistent contents sidebar, a single document on a readable measure, an on-page contents rail tracking your scroll position, and prev/next paging. Printing drops the app chrome and prints the open document alone. `src/lib/content.ts` globs `content/**/*.md` at build time, parses frontmatter, resolves `{{price:token}}` against `pricing/tokens.md`, and groups documents into the seven parts using their `section` and `order` fields. Cross-references written as `` `sop.csm.greeting` `` become clickable links to the referenced document — the reason ids exist instead of file paths.

Adding a document to an existing surface is frontmatter only — `surfaces`, `section`, `order`. Adding a whole new surface is a `SectionDef[]` and a five-line page.

## Product boundary

This app teaches, documents and **scores** — it is not a system of record. ServiceTitan is, per `sop.csm.tools`. Operational queues, lead capture and customer data belong there; a second copy here would be the exact duplication this repository exists to prevent.

Where an operating problem needs tooling, the SOP states the **requirement** the real system must meet — see the tooling section of `playbook.speed-to-lead` — and this app's contribution is the standard, the scripts, and the rubric that scores the behaviour.

## Validation

`npm run validate:content` checks every document: frontmatter completeness, valid status values, duplicate ids, undefined price tokens, broken cross-references, and staleness. It exits non-zero on error, so it can gate a build.
