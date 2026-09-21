---
id: sop.field.membership
title: Membership at the Door — Check It Before You Knock
department: field
owner: service-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [membership, home-plus, business-plus, technician, field, servicetitan, discount, enrollment]
related: [reference.membership-plans, script.sales.membership-enroll, sop.csm.membership-status, sop.csm.membership-pivot, sop.field.diagnostics, sop.field.equipment-capture, pricing.tokens]
section: field-standards
order: 0
surfaces: [field, checklist]
acknowledgement: required
---

# Membership at the Door

> **Every visit starts with a membership check before you knock, and the visit itself looks different depending on the answer.**

## When this applies {#applies}

Every residential and commercial visit, before you get out of the truck. It applies whether the job is a diagnostic, a repair, a tune-up, or an estimate — membership status changes the fee posture, the discount, and what gets offered, on every one of those job types.

## The execution ladder {#execution}

1. **Open the job in ServiceTitan before you knock.** Membership status lives on the customer record — ten seconds.
2. **If active, say the status out loud at the door and thank them.** Do not wait until the invoice to acknowledge it.
3. **If lapsed, offer reinstatement at the current rate before you present any repair price** — the order matters, it changes the whole conversation.
4. **If non-member, say nothing about it yet.** Diagnose first, earn the conversation with proof of the problem.
5. **Apply every benefit as a visible line item on the estimate** — waived diagnostic, repair discount — never as a verbal-only adjustment.
6. **For a non-member repair, present two numbers**: today's price, and the member price plus the plan, using `script.sales.membership-enroll`.
7. **For commercial, count rooftop units and photograph nameplates before quoting anything** — Business+ prices per unit.
8. **If they enroll, put it in ServiceTitan on today's invoice and book the first included visit before you leave the driveway.** Verbal enrollment that isn't in the system did not happen.

## What you say {#verbatim}

To an active member, at the door:

> "I see you're on Home+ — thank you for that, it's why there's no charge for me being here today."

To a lapsed member, before presenting a repair price:

> "Looks like your membership lapsed — we can get you back on it at the same rate before I price this out, and it'll change the number you're about to see."

To a non-member after diagnosing:

> "Here's what it costs today as a one-time repair, and here's what it costs as a member — the plan pays for itself on this one job alone."

## Worked example {#example}

**Weak:** Tech doesn't check status, quotes a member the full non-member repair price at the table, then has to "walk it back" when the customer mentions their plan. The customer now assumes every price here is negotiable.

**Perfect:** Tech checks the record in the truck, opens with "I see you're on Home+, thank you," diagnoses the issue, and presents the repair with the 10% Comfort discount already applied as a line item next to the pre-discount number. Customer sees exactly what the plan saved them and schedules their unused seasonal tune-up before the tech leaves.

| | Weak | Perfect |
|---|---|---|
| Status checked | Not checked | Checked before knocking |
| Discount visibility | Verbal correction after complaint | Line item on the estimate |
| Included tune-up | Never mentioned | Scheduled on the spot |
| Trust in pricing | Damaged | Reinforced |

## When it goes wrong {#failures}

- **ServiceTitan status looks ambiguous or wrong.** Call the office. Do not apply a discount on a hunch and do not deny one on a hunch either — a wrong guess in either direction costs trust or costs money.
- **You finish a large non-member repair and forget to pitch membership.** That was the best moment of the year to enroll them; they will not be nearly as motivated cold on a maintenance call. Build the two-number presentation into every non-member estimate so it never depends on remembering.
- **A tenant, not the owner, is standing at the door.** Confirm the customer profile before pitching anything — a tenant cannot enroll a system they don't own (`sop.csm.customer-profiles`).
- **Commercial site turns out to be a fleet or multi-location account.** Do not quote a tier. Capture the site list and nameplates and hand it to the Operations Manager for an Enterprise proposal.

### Hard rules

- Never quote a member full price and "walk it back" after the fact.
- Never sell membership as a way to dodge an after-hours or emergency surcharge — no such surcharge exists (`reference.guarantees`).
- Never stack a membership discount on top of an already-waived diagnostic.
- Never leave an enrollment verbal-only — if it isn't on today's invoice in ServiceTitan, the customer isn't covered.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Status checked before the knock, correctly acknowledged or leveraged, discount shown as a line item, enrollment (if any) entered same visit |
| 1 | Status checked but applied late or verbally only, or a non-member repair closed without the two-number presentation |
| 0 | Status not checked, a benefit wrongly applied or wrongly denied, or a promised enrollment never entered in ServiceTitan |

## Related

- Plan benefits and pricing: `reference.membership-plans`
- Door-side enrollment language: `script.sales.membership-enroll`
- Office-side status check: `sop.csm.membership-status`
- Proving the cause before you quote: `sop.field.diagnostics`
