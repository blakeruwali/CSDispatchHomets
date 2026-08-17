---
id: sop.field.membership
title: Membership at the Door — Check It Before You Knock
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-17
review_cadence_days: 90
tags: [membership, home-plus, business-plus, technician, field, servicetitan, discount, enrollment]
related: [reference.membership-plans, script.sales.membership-enroll, sop.csm.membership-status, sop.csm.membership-pivot, sop.field.diagnostics, sop.field.equipment-capture, pricing.tokens]
section: field-standards
order: 0
surfaces: [field, checklist]
acknowledgement: required
---

# Membership at the Door

> **Every visit starts with a membership check. The customer hears their status out loud, the benefit lands on the invoice as a line item, and a non-member leaves the visit with two numbers in front of them.**

## The 90-second version {#field-card}

1. **Open the job in ServiceTitan before you knock.** Membership status is on the customer record. Ten seconds.
2. **Say the status out loud at the door.** "I see you're on Home+ — thank you." Or, for a non-member, nothing yet; you earn that conversation with the diagnosis.
3. **Apply the benefit on the estimate, not in conversation.** Waived diagnostic and repair discount as visible lines.
4. **Lapsed?** Offer reinstatement at the same rate *before* you present the price, never after.
5. **Non-member?** Present the repair with two numbers — today's price, and the member price plus the plan. `script.sales.membership-enroll`.
6. **Commercial?** Business+ is priced per rooftop unit. Confirm nameplate and access, count the units, point at the right tier.
7. **If they say yes, enroll it in ServiceTitan on today's invoice** and book the first included visit before you leave the driveway.

## Why this keeps landing on you {#why}

The office checks status at booking, but the office is not the person holding the estimate. By the time you are at the kitchen table the customer has forgotten what they were told on the phone, and every benefit they do not see applied is a benefit they do not believe they have.

Two failures cost us real money, both of them in the field:

- **Quoting a member full price and walking it back.** The customer now knows the price was negotiable. Everything after that is a negotiation.
- **Finishing a $900 repair for a non-member without showing the member number.** That was the single best moment of the year to enroll them, and it is gone. They will not be as motivated on a maintenance call in April.

## Three states, three behaviours {#states}

| Status | What you do |
|---|---|
| **Active** | Name it at the door and thank them. Diagnostic {{price:membership_diagnostic_posture}}. Repair discount applied as a line item. Schedule the included tune-up before you leave if it is unused. |
| **Lapsed** | Offer reinstatement at the same rate — {{price:membership_home_plus_monthly}} residential — **before** you present the repair price. It changes the whole price conversation. |
| **Non-member** | Standard flow. Diagnose, prove the cause, then present both numbers. Enroll on today's invoice. |

Do not guess. If ServiceTitan is ambiguous or the record looks wrong, call the office — do not apply a discount on a hunch and do not deny one either.

## What "tailored service" actually means {#tailored}

Checking the box is not the point. A member's visit should visibly differ from a non-member's:

- **The discount is a line item.** {{price:membership_home_plus_repair_discount}} shown on the estimate, with the pre-discount number next to it. If they cannot see what the plan saved them today, it did not save them anything they will remember at renewal.
- **The included tune-up gets scheduled while you are standing there.** {{price:membership_home_plus_tuneups}} per year. An unused tune-up is a cancellation waiting to happen.
- **The equipment record gets updated.** Members carry a history with us; that history is what makes the next visit fast — `sop.field.equipment-capture`.
- **Commercial members get the written record.** Premier requires a written equipment and visit-allocation record. Capture the nameplate on every supported unit, not just the one you were called for.

## Commercial: count the units first {#commercial}

Business+ is **per qualifying rooftop unit**. Before quoting anything:

1. Walk the roof and count supported RTUs.
2. Photograph every nameplate.
3. Confirm site access — who lets us in, and during what hours.

Then point at the tier: one unit, two visits a year → Essential. One unit needing more frequent service, or two units → Premier. A fleet, several locations, or anything outside the published plans → **do not quote it.** Capture the site list and hand it to the Operations Manager for an Enterprise proposal.

Full plan detail, pricing and rules: `reference.membership-plans`.

## Failure modes {#failures}

- **"The office should have caught it."** They may have. The customer still needs to hear it from you, and the invoice still needs the line.
- **Applying a benefit that does not exist.** No emergency or after-hours surcharge applies to anybody — never sell membership as the way to dodge one. See `reference.guarantees`.
- **Enrolling verbally and finishing the enrollment "later".** If it is not in ServiceTitan on today's invoice, it did not happen, the customer will not be billed, and the first person to find out is the customer when a benefit is refused.
- **Pitching a tenant.** They do not own the system. Confirm the profile first — `sop.csm.customer-profiles`.
- **Discounting a diagnostic that was already waived.** The waiver is the benefit; it does not stack.

## Related

- Plan benefits and pricing: `reference.membership-plans`
- Door-side enrollment language: `script.sales.membership-enroll`
- Office-side status check: `sop.csm.membership-status`
- Proving the cause before you quote: `sop.field.diagnostics`
