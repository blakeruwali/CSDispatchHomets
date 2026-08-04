---
id: reference.guarantees
title: Guarantees, Warranties & Policies
department: ops
owner: owner
status: in-review
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [guarantee, warranty, policy, arrival, satisfaction, refund, cancellation]
related: [sop.csm.warranty-callback, sop.csm.escalation, sop.csm.reschedules, pricing.tokens]
section: governance
order: 1
surfaces: [csm, checklist]
---

# Guarantees, Warranties & Policies

What we promise customers. A CSM should be able to state any of these from memory — they are the strongest things we have to say on a price-shopping call.

## Arrival guarantee {#arrival}

> **"We arrive within 90 minutes of your scheduled window, or the service call is free."**

- Clock starts at the **beginning** of the booked window.
- Applies to the **diagnostic / service call fee only**. It does not waive parts or repair costs.
- Applies to all service types — repair, maintenance, diagnostic.
- Weather and natural disaster exceptions apply.

The guarantee in full: **{{price:arrival_guarantee}}**.

## Satisfaction guarantee {#satisfaction}

> **"If you're not satisfied with our work, we'll come back and make it right — free of charge."**

- Covers **workmanship**, not pre-existing conditions.
- Customer must report the issue within {{price:satisfaction_guarantee_window}} of service.
- We send the same tech where possible, for continuity — unless the customer would rather not, which is their call.
- If it can't be resolved, escalate to the Operations Manager — `sop.csm.escalation`.

## Warranty coverage {#warranty}

| Service | Coverage |
|---|---|
| Repairs | {{price:warranty_repair}} |
| Plumbing repairs | {{price:warranty_repair}} |
| New installations | {{price:warranty_install_labor}} |
| Tune-ups | {{price:warranty_tuneup}} — preventive service |

**If a customer calls about a recent repair failing, check the job date before you quote anything.** Inside the window it is a warranty callback at no charge — `sop.csm.warranty-callback`. Quoting a diagnostic on a warranty callback is one of the fastest ways to lose a customer we already earned.

## Cancellation & rescheduling {#cancellation}

- **{{price:cancellation_fee}}.** We never charge to cancel — say so plainly, it removes friction from every booking.
- Same-day reschedule: accommodate if possible, otherwise next available.
- No-show: we attempt to reach them. Procedure in `sop.csm.no-show-recovery`.

## Refunds {#refunds}

- **Diagnostic fee: non-refundable** once the visit happened — service was rendered. It is *credited* toward an approved repair, which is a different thing.
- **Repair inside warranty:** free redo.
- **Cash refunds:** Manager approval, always.
- **Membership cancellation:** pro-rated refund if no services were used.

Authority limits: `sop.csm.escalation`.

## ⚠️ After-hours pricing — UNRESOLVED {#after-hours}

**Do not quote after-hours pricing and do not promise a no-surcharge guarantee until this is settled.**

Two published positions currently contradict each other:

- `pricing.tokens` carries `diagnostic_after_hours` at $299.
- The knowledge base promises customers: *"We never charge emergency surcharges or overtime fees. Whether it's 2 PM on a Tuesday or 2 AM on Christmas, you pay the same rate."* — and instructs CSMs to lead with it as a competitive advantage.

Both are live today. Full detail and the owner decision required: conflict **C1** in `_migrated/csm-reconciliation.md`.

**Interim handling.** Book the call normally. If the customer asks what after-hours costs:

> "Let me get you booked, and I'll have a manager confirm the after-hours rate with you before the tech heads out — I don't want to quote you something and have it change."

This section moves to `published` the moment C1 is answered. Until then this document stays `in-review`.

## Related

- Warranty callback identification: `sop.csm.warranty-callback`
- Escalation and refund authority: `sop.csm.escalation`
