---
id: sop.membership.program
title: Home+ Membership — What It Costs and What It Covers
department: ops
owner: owner
status: published
version: 4
last_reviewed: 2026-09-02
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
| **Premium tune-up upgrade (not included)** | {{price:membership_premium_tuneup_upgrade}} |

The website sells the first year as **$7.99/mo billed annually** and the renewal as **$24.99/mo billed annually**. Those are the same two numbers written monthly — {{price:membership_home_plus_first_year}} and {{price:membership_home_plus_renewal}}. If the customer quotes the monthly figure back at you, **agree and give the annual total**; never let the two versions sound like two different plans, and never quote a monthly price the customer could read as a month-to-month billing.

The first-year price is the reason people say yes; the renewal price is the reason they do not cancel in surprise a year later. **Say both, every time.** A member who learns about the renewal at renewal is a cancellation.

**No contract. Cancel anytime.** That is on the website, so it is a promise — say it, do not hedge it.

## What "two systems" means {#two-systems}

One membership covers **{{price:membership_home_plus_systems}}** — the customer picks which. Any mix:

- one heating system and one cooling system (what we recommend, and what most homes have), or
- two cooling systems, or
- two heating systems.

We recommend the heating-plus-cooling pair because it is the pair that gets used, but the choice is the customer's. **Record which two systems are covered in ServiceTitan at enrollment.** A membership with no named systems is an argument waiting to happen at the first tune-up.

A third or fourth system is not covered by default — see `sop.membership.upgrades`.

## What the member gets {#benefits}

- **{{price:membership_home_plus_tuneups}} basic tune-ups** — one per covered system, each a **26-point inspection**. Cooling gets serviced **before summer**, heating **before winter**. Filters checked, thermostat calibrated, pressures and electrical checked, findings written up. Retail value {{price:membership_tuneup_retail}} each.
- **Diagnostic and service call fee: {{price:membership_diagnostic_posture}}.** For the whole membership year, on every visit. We come out and look at the system at no charge.
- **{{price:membership_home_plus_repair_discount}} off the total invoice** on any approved repair or replacement.
- **Priority scheduling** — members go ahead of non-members in the board, see `sop.dispatch.priorities`.
- **No overtime or after-hours charges.** True for everyone (`reference.guarantees`) — state it as a company policy, not as a member perk.
- **Transferable** — the membership can transfer to the new owner if the home is sold. It does **not** move with the customer to a second or new property.

That is the list. Do not add to it.

## Basic tune-up vs. Premium tune-up {#tuneups}

The Comfort membership includes the **basic 26-point** tune-up. The **Premium 38-point** tune-up is a deeper service. Comfort members pay a {{price:membership_premium_tuneup_upgrade}} upgrade for it; **Signature members already have it** on every covered system.

| System | Basic (included on Comfort) | Premium retail | **Member upgrade price** |
|---|---|---|---|
| Furnace / AC / heat pump | $299 value | $449 | **{{price:membership_premium_tuneup_upgrade}}** |
| Boiler | $349 value | $549 | **{{price:membership_premium_tuneup_upgrade}}** |
| Mini-split | $279 value | $399 | **{{price:membership_premium_tuneup_upgrade}}** |

Those three rows are the numbers published on the website — they are the only Premium retail numbers anyone quotes. **Confirm the system type before quoting.** Any system not in the table is estimated on site after inspection; never guess ("four hundred something").

What Premium adds over Basic: heat exchanger inspection, carbon monoxide testing, gas line leak detection, complete electrical testing, AC drain line flush, combustion and airflow analysis, and a written efficiency report.

How it works:

- Comfort member wants the basic tune-up: **included**, no charge, nothing to sell.
- Comfort member wants Premium: the included basic tune-up is **credited toward it** and they pay the {{price:membership_premium_tuneup_upgrade}} upgrade. Say it that way — *"Your included tune-up goes toward it, so you're only covering the upgrade."*
- **Signature member: Premium is already included on every covered system.** Never sell them the upgrade.
- Non-member: Premium is quoted at retail for the system type above.
- The {{price:membership_home_plus_repair_discount}} discount is for approved **repairs and replacements**. It does not come off the upgrade price.

**When to recommend Premium:** the system is over 10 years old, or the basic inspection turned up anything unusual. The heat exchanger and CO checks are the honest reason — lead with safety, not with the price.

**Being a Comfort member does not make the Premium tune-up free.** Do not imply otherwise at the door or on the phone.

## Home+ Signature — the middle tier {#signature}

Signature is the plan for a **multi-system home** or a homeowner who wants the deep service on every visit.

| | |
|---|---|
| **Price** | {{price:membership_signature_price}} |
| **Systems covered** | {{price:membership_signature_systems}} |
| **Tune-up** | {{price:membership_signature_tuneup}} |
| **Diagnostic** | {{price:membership_signature_diagnostic}} |
| **Repair pricing** | Member repair discount on every approved repair |
| **Includes** | Everything in Comfort, plus combustion & airflow analysis and a written report every visit |

Signature is the right pivot when a Comfort quote runs into a **third system** or when the customer is asking about the {{price:membership_premium_tuneup_upgrade}} Premium upgrade on two or more systems — at that point Signature costs less than Comfort plus upgrades. Do the math out loud with them.

## Home+ Infinite — the upper tier {#infinite}

Comfort is the plan most homes buy. **Infinite** is the tier for larger homes, older equipment, or a customer who wants everything handled.

| | |
|---|---|
| **Price** | {{price:membership_infinite_price}} |
| **Discount** | {{price:membership_infinite_discount}} on all services |
| **Service credit** | {{price:membership_infinite_credit}}, applied to any repair, replacement or service — rolls over |
| **Replacement credit** | {{price:membership_infinite_replacement_credit}}, applied to a system replacement |
| **Diagnostics** | Free, always — with or without a repair |
| **Emergency response** | Priority, ahead of Comfort |

Infinite includes everything in Comfort. Do not sell Infinite to a customer whose annual spend will not use the credit — an unused credit is a cancellation and a bad review. Quote Infinite when the customer is already looking at a large repair or a replacement this year.

## Quoting the savings {#savings}

The website advertises **{{price:membership_comfort_savings}}** in Comfort savings: $847+ of retail value (furnace tune-up $299, AC tune-up $299, priority scheduling $50, diagnostic waiver $199) against a $299 annual price. Use those exact figures — a made-up savings number that does not match the site is a credibility problem.

The site also runs a deadline: **{{price:membership_intro_deadline}}.** The first-year rate is locked in at enrollment. Say it as a real deadline, not as pressure theater, and never invent a new one after it passes.



## What the membership does *not* cover {#not-covered}

The tune-ups are maintenance, not repair. If the visit turns up a failed part, **the repair is quoted and billed at the normal price** — with {{price:membership_home_plus_repair_discount}} taken off the total, and no diagnostic fee. Nothing else changes.

Also not covered:

- The **Premium 38-point tune-up** — it is a {{price:membership_premium_tuneup_upgrade}} upgrade, see above.
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
- **Quoting the monthly figure as month-to-month.** $7.99 and $24.99 are annual billing shown monthly. Say the annual total in the same breath.
- **Selling Infinite for the discount alone.** The credit is the reason to buy it; if they will not use {{price:membership_infinite_credit}} of work, sell Comfort.
- **Presenting "no overtime charges" as a member perk.** Nobody pays a surcharge here — see `reference.guarantees`.

## Related

- Adding a third or fourth system: `sop.membership.upgrades`
- Membership at the door: `sop.field.membership`
- Enrollment language: `script.sales.membership-enroll`
- Light commercial plans: `reference.membership-plans`
