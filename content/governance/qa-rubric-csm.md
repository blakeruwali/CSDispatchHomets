---
id: governance.qa.csm
title: CSM QA Scoring Rubric
department: csm
owner: cs-manager
status: published
version: 3
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [qa, scoring, rubric, weights, checklist, coaching]
related: [governance.coaching, sop.csm.kpis, protocol.emergency.triage, sop.csm.escalation, sop.csm.warranty-callback, sop.csm.non-english-callers, playbook.speed-to-lead]
section: governance
order: 3
surfaces: [csm, checklist]
---

# CSM QA Scoring Rubric

Lives in-app at `/checklist` under the CSM rubric. This document is the definition; the app is the instrument.

## Weights {#weights}

| Category | Weight | Scored against |
|---|---|---|
| Greeting & opening | 5% | `sop.csm.greeting` |
| Active listening | 10% | `sop.csm.active-listening` |
| **Emergency triage — PASS/FAIL** | 15% | `protocol.emergency.triage` |
| Intake completeness | 20% | `sop.csm.intake` |
| Booking execution | 20% | `sop.csm.availability`, `sop.csm.diagnostic-fee` |
| Membership pitch | 10% | `sop.csm.membership-pivot` |
| Confirmation read-back | 10% | `sop.csm.confirmation` |
| Ticket quality | 10% | `sop.csm.ticket-standards` |

## Scoring scale {#scale}

Each item scores **0 / 1 / 2**:

- **0** — did not happen, or happened wrong.
- **1** — happened, but flat, partial, or out of order.
- **2** — happened as written, at the right moment, with the right tone.

A 1 is not a failing grade. It is the most common score and the whole point of coaching.

## The triage cap {#triage-cap}

**Missing emergency triage caps the entire call at {{price:triage_fail_score_cap}}**, no matter how well everything else went. There is no partial credit on safety, and no amount of excellent booking technique offsets a missed gas smell.

## Cadence {#cadence}

- Manager scores **3 calls per CSM per week**.
- Reviewed in the weekly 1:1 — `governance.coaching`.
- The AI coach summary at `/checklist` supplements the manager's read; it does not replace it.

## Separate rubrics {#separate-rubrics}

Outbound marketplace calls are a different job from inbound handling and are scored on their own rubric — **Marketplace Lead — Outbound Response** at `/checklist`, weighted heavily toward speed. Standard: `playbook.speed-to-lead`.

## Not scored on a standard call {#not-scored}

Some standards apply only when the situation arises, so they sit outside the weighted categories and are scored when present:

- **Escalation handled correctly** — `sop.csm.escalation`. Getting a safety complaint or legal threat to a Manager promptly is pass/fail in its own right.
- **Warranty callback identified before quoting** — `sop.csm.warranty-callback`. Quoting a diagnostic on a covered callback is an automatic fail on that call.
- **Interpreter used rather than a family member** — `sop.csm.non-english-callers`.

## Every rubric line points at a document {#traceability}

If a CSM loses points, they should be able to click straight to the section that defines the standard. A rubric item with no document behind it is an opinion, and it doesn't belong in the score.

## Related

- Coaching cadence: `governance.coaching`
- Team-level metrics: `sop.csm.kpis`
