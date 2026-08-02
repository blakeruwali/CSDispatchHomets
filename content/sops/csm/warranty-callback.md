---
id: sop.csm.warranty-callback
title: Warranty Callback Identification
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [warranty, callback, recall, no-charge, servicetitan]
related: [reference.guarantees, sop.csm.diagnostic-fee, sop.csm.escalation]
surfaces: [csm, checklist]
---

# Warranty Callback Identification

A customer calling back about work we already did is not a new job. Treating it like one is the single most damaging billing mistake a CSM can make.

## Check the job date first {#check-first}

**Before you quote anything**, look up the customer's history in ServiceTitan and check when we last worked on this system.

| Finding | Handling |
|---|---|
| Same system, inside {{price:warranty_repair}} of a repair | **Warranty callback — no charge.** Book it as a callback, not a diagnostic. |
| Same system, inside {{price:satisfaction_guarantee_window}} and they're unhappy with the work | **Satisfaction guarantee — no charge.** `reference.guarantees` |
| New install inside {{price:warranty_install_labor}} | Labor covered. Parts may be manufacturer warranty — flag for the tech. |
| Tune-up | {{price:warranty_tuneup}}. A failure after a tune-up is a new diagnostic — but check whether the tune-up missed something. |
| Different system, or outside the window | Standard diagnostic — `sop.csm.diagnostic-fee` |

## The tell {#tell}

Customers rarely say "I'm making a warranty claim." They say:

- "You guys were just out here."
- "It's doing the same thing again."
- "This was supposed to be fixed."

**Any of those three = look up the history before you say a number.** If a customer has to argue us into honoring our own warranty, we have already lost them even if we end up doing it free.

## Say it before they ask {#say-it}

Once you've confirmed it's in warranty, lead with it:

> "I see we were out on the 14th and this is the same system — that's covered under warranty, so there's no charge for this visit. Let me get a tech back out to you."

That sentence recovers most of the goodwill the repeat failure cost us.

## When it's the third time {#third-time}

Same issue reported 3+ times is an escalation trigger regardless of warranty status — `sop.csm.escalation`. Book the callback *and* flag it. A system we've failed to fix twice is a Manager problem, not a scheduling problem.

## Note it properly {#notes}

On the ticket: link the original job, state why it's no-charge, and record the customer's description of what's recurring. The tech needs to know what was done last time before they arrive, or we are about to make the same mistake a third time.

## Related

- Warranty periods and guarantees: `reference.guarantees`
- Standard fee posture: `sop.csm.diagnostic-fee`
