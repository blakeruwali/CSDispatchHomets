---
id: sop.csm.confirmation-cadence
title: Customer Confirmation Cadence
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [confirmation, cadence, reminder, survey, review, automation]
related: [sop.csm.confirmation, playbook.sms, sop.csm.tools]
surfaces: [csm, checklist]
---

# Customer Confirmation Cadence

Five touches between booking and review request. **Only the first is manual.**

## The cadence {#cadence}

| Timing | Touch | Owner |
|---|---|---|
| At booking | Confirmation text + tech photo | **CSM — manual trigger** |
| 24h before | Reminder + prep instructions | Automated |
| 1h before window | "Tech on the way" + ETA | Automated (tech app) |
| Day after | Thank-you + survey | Automated |
| 2d after (if score ≥ 4) | Google review request | Automated |

## The CSM owns exactly one touch {#csm-touch}

The confirmation text at booking. Send it before you hang up — `sop.csm.confirmation`. Everything downstream fires on its own **only if that first ticket is complete and confirmed**; an unconfirmed ticket silently drops out of the whole sequence.

## Do not send the automated touches manually {#no-manual}

If a customer says they didn't get a reminder, check the ticket rather than texting them yourself. A manual duplicate on top of an automation that then fires makes us look like we can't count. See `playbook.sms`.

## The review gate {#review-gate}

Review requests go only to customers who scored 4 or higher on the survey. That gate is deliberate — soliciting a review from an unhappy customer produces exactly the review you'd expect. A low score is a Manager follow-up, not a review request.

## Related

- The booking read-back: `sop.csm.confirmation`
- SMS rules: `playbook.sms`
