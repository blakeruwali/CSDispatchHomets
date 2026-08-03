# Homets Company SOP — Master Index

Every document the complete company SOP requires, whether or not it exists yet. This is the map: if a procedure isn't on this page, it isn't part of the SOP, and if it's on this page as `draft-needed`, its absence is a known gap rather than an invisible one.

**Status key:** ✅ published · 🟡 in-review · ⬜ draft-needed (source content exists, not yet migrated) · ❌ draft-needed (no source — must be authored from scratch)

---

## Coverage at a glance

| Department | Docs required | Published | Remaining | Source material |
|---|---|---|---|---|
| CSM | 51 | 51 | 0 | ✅ complete — SOP + KB reconciled, marketplace channels added |
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

## 3. Dispatch ⬜ next up

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

## 4. Sales — Technician ⬜

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

## 5. Reference / Knowledge Base ⬜

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

## 6. Install ❌ no source material

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

## 7. Plumbing ❌ mostly missing

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

## 8. People / HR ❌ almost entirely missing

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

## 9. Reference — company facts ⬜

| Doc | id | Status |
|---|---|---|
| Service scope (HVAC & plumbing) | `reference.service-scope` | ⬜ |
| Service area — Nassau & Suffolk | `reference.service-area` | ⬜ (KB source) |
| Membership plans — Home+ / Business+ | `reference.membership-plans` | ⬜ (KB source) |
| Equipment & brands supported | `reference.equipment-supported` | ⬜ (KB source) |
| Business units → job type mapping | `reference.business-units` | ⬜ |
| Company info, licenses, insurance | `reference.company` | ❌ |

---

## 10. Pricing

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
| **C1** | **Do we charge extra after hours?** `pricing.tokens` says $299; the KB promises customers "No Emergency Surcharge — Ever" and tells CSMs to lead with it. **Customer-facing and live right now.** | `reference.guarantees`, `diagnostic_after_hours`, every after-hours call |
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

---

## Sequencing recommendation

1. **Answer C1.** It is the only item on this page that costs money this week — a customer promised no surcharge and billed $299 leaves a review we can't undo.
2. **Dispatch migration** — biggest source file, content already battle-tested, pure extraction. Highest value per hour.
3. **Sales migration** — self-contained, low overlap with what's published.
4. **Remaining KB migration** — the CSM-relevant sections are done and reconciled; what's left is equipment, thermostats, FAQ and commercial reference material.
5. **Wire the rubric to anchors** — `src/lib/rubric-seed.ts` scores against categories that now have real section anchors, and the renderer already assigns each `{#anchor}` a DOM id. Linking them makes a low score jump straight to the standard it failed.
6. **Install & People authoring** — needs interviews, not extraction. Schedule it; don't wait for it.

## How it reaches staff

`/csm` renders these markdown files directly. `src/lib/content.ts` globs `content/**/*.md` at build time, parses frontmatter, resolves `{{price:token}}` against `pricing/tokens.md`, and groups documents into the seven parts using their `section` and `order` fields. Cross-references written as `` `sop.csm.greeting` `` become clickable links to the referenced document — the reason ids exist instead of file paths.

To add a document to the CSM surface: create the markdown with `surfaces: [csm]`, a `section`, and an `order`. Nothing else to wire up.

## Product boundary

This app teaches, documents and **scores** — it is not a system of record. ServiceTitan is, per `sop.csm.tools`. Operational queues, lead capture and customer data belong there; a second copy here would be the exact duplication this repository exists to prevent.

Where an operating problem needs tooling, the SOP states the **requirement** the real system must meet — see the tooling section of `playbook.speed-to-lead` — and this app's contribution is the standard, the scripts, and the rubric that scores the behaviour.

## Validation

`npm run validate:content` checks every document: frontmatter completeness, valid status values, duplicate ids, undefined price tokens, broken cross-references, and staleness. It exits non-zero on error, so it can gate a build.
