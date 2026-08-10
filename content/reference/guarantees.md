---
id: reference.guarantees
title: Guarantees, Warranties & Policies
department: ops
owner: owner
status: published
version: 2
last_reviewed: 2026-08-10
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

## No emergency or after-hours surcharge {#after-hours}

> **"We never charge emergency surcharges or overtime fees. Whether it's 2 PM on a Tuesday or 2 AM on Christmas, you pay the same rate. That's our promise."**

**{{price:diagnostic_after_hours}}** — evenings, weekends and holidays are billed at the standard diagnostic, {{price:diagnostic_residential}} residential and {{price:diagnostic_commercial}} commercial.

This is one of the strongest things we have to say on a price-shopping call, and it is worth leading with rather than waiting to be asked. Many competitors charge $150–$300 extra for an emergency or after-hours visit. **Say it before the customer asks what a 2 AM call costs** — it converts a nervous question into a reason to choose us.

- **No overtime fee. No holiday fee. No weekend fee.** There is no hour of the year at which our price changes.
- **It applies to every trade** — HVAC and plumbing alike.
- **It is not a member benefit.** Everyone gets it, which is exactly why it can be said without checking anything first.
- **Nobody needs manager approval to state it**, because there is no discretion in it.

## Related

- After-hours coverage and handoff: `playbook.posh`
- Warranty callback identification: `sop.csm.warranty-callback`
- Escalation and refund authority: `sop.csm.escalation`
