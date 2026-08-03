---
id: sop.csm.membership-retention
title: Membership Retention & Renewal
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [membership, retention, renewal, cancellation, save, home-plus]
related: [sop.csm.membership-status, sop.csm.membership-pivot, script.csm.seasonal-outreach]
section: post-booking
order: 7
surfaces: [csm, checklist]
---

# Membership Retention & Renewal

Selling a membership once is `sop.csm.membership-pivot`. Keeping it is this document, and it is worth more.

## Renewal outreach {#renewal}

Call members {{price:retention_call_lead_time}} before expiration:

> "Hi [name], this is [your name] from Home+ Air and Heat. I'm reaching out because your membership is coming up for renewal on [date]. I wanted to make sure we get you scheduled for your [spring/fall] tune-up and keep all your member benefits active. Can I go ahead and renew that for you?"

Notice the call is about **scheduling the tune-up**, not about collecting a payment. A member who books the tune-up renews; a member asked to renew in the abstract thinks about the money.

## Benefits worth restating {#benefits}

Members forget what they're paying for. Name it concretely:

- **Priority scheduling** — seen first, especially in peak season when it matters most.
- **{{price:membership_home_plus_repair_discount}} off repairs.**
- **{{price:membership_home_plus_tuneups}} tune-ups a year** — heating in fall, cooling in spring.
- **Diagnostic {{price:membership_diagnostic_posture}}.**
- **Longer equipment life** — maintained systems last years longer, which is the argument that actually lands with homeowners.

## "I want to cancel" {#cancel}

**Ask why first. Always.**

> "I understand. May I ask what's prompting you to cancel? I want to make sure we haven't missed anything."

| Reason | Response |
|---|---|
| "Too expensive" | Quantify what they got: "Your membership has saved you $[X] this year in repair discounts alone." Pull the number from ServiceTitan — don't estimate out loud. |
| "I don't use it" | "Let me get your tune-up scheduled right now so you get the full value." Book it on the call. |
| "I'm moving" | "If you're staying in our service area, it transfers to your new home." |

**If they still want to cancel, process it gracefully.**

> "We understand. We'll process that for you — you're always welcome back."

No third attempt, no guilt, no "are you sure?" A member who cancels cleanly comes back. One who had to fight to leave never does, and tells people about it.

Cancellation is pro-rated if no services were used — `reference.guarantees`.

## Log the reason {#log}

Every cancellation reason goes on the account. Three "too expensive" in a month is a pricing signal; three "never used it" is an onboarding signal. Neither is visible if nobody writes it down.

## Never pitch retention to a tenant {#tenants}

The same rule as the initial pitch — the owner holds the membership, not the occupant. See `sop.csm.customer-profiles`.

## Related

- Checking status at intake: `sop.csm.membership-status`
- The initial pitch: `sop.csm.membership-pivot`
- Seasonal tune-up campaigns: `script.csm.seasonal-outreach`
