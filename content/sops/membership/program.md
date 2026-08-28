---
id: sop.membership.program
title: Home+ Membership — What It Costs and What It Covers
department: ops
owner: owner
status: published
version: 2
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [membership, home-plus, tune-up, discount, diagnostic, enrollment, renewal, systems]
related: [sop.membership.upgrades, reference.membership-plans, sop.field.membership, script.sales.membership-enroll, sop.csm.membership-status, pricing.tokens]
section: membership-program
order: 1
surfaces: [membership, field, csm, dispatch]
acknowledgement: required
---

# Home+ Membership

> **{{price:membership_home_plus_first_year}} the first year. {{price:membership_home_plus_renewal}} every year after. Two systems either way. Everyone — technician, dispatcher, office — quotes the same two numbers.**

## The two numbers {#numbers}

| | |
|---|---|
| **First year** | {{price:membership_home_plus_first_year}} |
| **Renewal, year two onward** | {{price:membership_home_plus_renewal}} |
| **Systems covered** | {{price:membership_home_plus_systems}} |
| **Each additional system** | {{price:membership_home_plus_extra_system}} |

Never quote a monthly figure, never round, never say "about a hundred." The first-year price is the reason people say yes; the renewal price is the reason they do not cancel in surprise a year later. **Say both, every time.** A member who learns about the renewal at renewal is a cancellation.

## What "two systems" means {#two-systems}

One membership covers **{{price:membership_home_plus_systems}}** — the customer picks which. Any mix:

- one heating system and one cooling system (what we recommend, and what most homes have), or
- two cooling systems, or
- two heating systems.

We recommend the heating-plus-cooling pair because it is the pair that gets used, but the choice is the customer's. **Record which two systems are covered in ServiceTitan at enrollment.** A membership with no named systems is an argument waiting to happen at the first tune-up.

A third or fourth system is not covered by default — see `sop.membership.upgrades`.

## What the member gets {#benefits}

- **{{price:membership_home_plus_tuneups}} regular tune-ups** — one per covered system. Cooling gets serviced **before summer**, heating **before winter**. Filters changed, system checked, findings written up.
- **Diagnostic and service call fee: {{price:membership_diagnostic_posture}}.** For the whole membership year, on every visit. We come out and look at the system at no charge.
- **{{price:membership_home_plus_repair_discount}} off the total invoice** on any approved repair or replacement.

That is the list. Do not add to it.

## Regular tune-up vs. premium tune-up {#tuneups}

The membership includes the **regular** tune-up. The **premium** tune-up is a different, deeper service and is **an upgrade the customer pays for** — {{price:membership_premium_tuneup}} per system, or whatever the price book shows on the day.

How it works:

- Member wants the regular tune-up: **included**, no charge, nothing to sell.
- Member wants the premium tune-up: the **included regular tune-up is credited toward it**, so they pay the difference. Say it that way — *"Your regular tune-up goes toward it, so you're only covering the upgrade."*
- Non-member premium tune-up: full price, no credit.
- The {{price:membership_home_plus_repair_discount}} member discount is for approved **repairs and replacements**. It does not stack on top of the credited regular tune-up on the same premium visit.

**Being a member does not make the premium tune-up free or discounted.** Do not imply otherwise at the door or on the phone — that is the fastest way to a chargeback argument at the next visit.

## What the membership does *not* cover {#not-covered}

The tune-ups are maintenance, not repair. If the visit turns up a failed part, **the repair is quoted and billed at the normal price** — with {{price:membership_home_plus_repair_discount}} taken off the total, and no diagnostic fee. Nothing else changes.

Also not covered:

- The **premium tune-up** — it is an upgrade, see above.
- Parts or equipment, at any discount beyond the {{price:membership_home_plus_repair_discount}}.
- A third or fourth system that has not been added and paid for. Each extra system is {{price:membership_home_plus_extra_system}} — see `sop.membership.upgrades`.
- Systems at a second property. The membership belongs to the address on the account.

**Never sell membership as a way to avoid an after-hours or emergency surcharge.** There is no such surcharge for anyone, member or not — see `reference.guarantees`.

## The discount, applied correctly {#discount}

{{price:membership_home_plus_repair_discount}} comes off the **total invoice** for an approved repair or replacement, and it appears as a **line item** the customer can see next to the pre-discount number. A verbal "I took care of you" is not the benefit — a member who cannot see what the plan saved them today will not renew.

The waived diagnostic and the {{price:membership_home_plus_repair_discount}} both apply on the same visit. The discount does not apply to a diagnostic that was already waived; the waiver is the benefit and it does not stack.


## Who has to know this {#who}

| Role | What they own |
|---|---|
| **Technician** | Checks status before knocking, applies the benefit on the estimate, enrolls non-members on today's invoice — `sop.field.membership` |
| **CSM / office** | Quotes both numbers on the phone, confirms status at booking, records covered systems — `sop.csm.membership-status` |
| **Dispatch** | Confirms the fee posture on the job before the tech goes en route: an active member is {{price:membership_diagnostic_posture}} |

If any one of those three quotes a different number, the customer hears a company that does not know its own prices.

## Failure modes {#failures}

- **Quoting the first-year price without the renewal.** The single most common cause of a year-two cancellation.
- **Selling one membership for three systems.** The third system is {{price:membership_home_plus_extra_system}}. See `sop.membership.upgrades`.
- **Leaving the tune-ups unscheduled.** Book the seasonal tune-up while you are with the customer. An unused tune-up is a cancellation waiting to happen.
- **Charging a member a diagnostic.** Refund it on the spot and tell Dispatch; do not make the customer chase it.
- **Enrolling verbally and finishing "later".** If it is not in ServiceTitan on today's invoice, it did not happen.

## Related

- Adding a third or fourth system: `sop.membership.upgrades`
- Membership at the door: `sop.field.membership`
- Enrollment language: `script.sales.membership-enroll`
- Light commercial plans: `reference.membership-plans`
