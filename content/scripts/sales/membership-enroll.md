---
id: script.sales.membership-enroll
title: Membership Enrollment — At the Door
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-17
review_cadence_days: 90
tags: [script, membership, enrollment, home-plus, business-plus, objection, close]
related: [sop.field.membership, reference.membership-plans, sop.csm.membership-pivot, pricing.tokens]
section: field-standards
order: 3
surfaces: [field, checklist]
---

# Membership Enrollment — At the Door

Verbatim language. Use it after the diagnosis is proven and the repair price is written — never before. A membership pitched ahead of a diagnosis sounds like a sales call; pitched after, it sounds like arithmetic.

## The two-number close {#two-numbers}

Write both numbers down and turn the tablet around. Do not read them aloud from your side of the table.

> "Two ways to do this. The repair on its own is **[full price]**. Or you go on Home+ at {{price:membership_home_plus_monthly}} — the diagnostic comes off, you get {{price:membership_home_plus_repair_discount}} off this repair, and it comes to **[member price]** today. The plan also covers {{price:membership_home_plus_tuneups}} tune-ups a year. Which one do you want me to write up?"

**Then stop talking.** The pause is the technique — the numbers argue better than you do.

If the member price is at or below the standalone price, say so plainly: *"The plan pays for itself before I leave."* Only say it when it is true.

## Commercial variant {#commercial}

Count the rooftop units before you open your mouth.

> "You've got [n] units up there. The way our commercial plan works, it's per unit — for this one, Business+ Essential is {{price:membership_business_plus_essential_initial}} the first year, that's {{price:membership_business_plus_essential_visits}} maintenance visits and {{price:membership_business_plus_essential_discount}} off approved repairs, including this one. If you want both units covered, or this one seen more often, Premier is {{price:membership_business_plus_premier_initial}} for {{price:membership_business_plus_premier_visits}} visit allocations and {{price:membership_business_plus_premier_discount}} off."

For a fleet or several locations:

> "You're past what our published plans cover, and I'd rather not guess at it. Let me take the equipment list and our Operations Manager will put a written proposal together for the whole site."

**Do not quote Enterprise numbers.** There are none until the proposal exists.

## Objections {#objections}

| They say | You say |
|---|---|
| "Let me think about it." | "Of course. The only thing that changes if you decide later is that today's repair won't be discounted — the {{price:membership_home_plus_repair_discount}} only applies while I'm here. Want me to price it both ways on the invoice so you have it in writing?" |
| "I don't use it enough." | "Fair. Most of it isn't the repairs — it's the {{price:membership_home_plus_tuneups}} tune-ups. That's what keeps me from being back here in January for something bigger." |
| "Can I cancel anytime?" | "Yes — anytime, and if you haven't used a visit it's pro-rated back. There's no contract holding you." |
| "Is this how you avoid the after-hours fee?" | "No — nobody pays an after-hours or emergency surcharge with us, member or not. Same price at 2 AM Christmas as 2 PM Tuesday. The plan is the diagnostic, the discount and the tune-ups." |
| "My landlord handles that." | Do not pitch. Note the owner or property manager on the ticket — `sop.csm.customer-profiles`. |

## After a yes {#after-yes}

Three things, before you leave the driveway:

1. **Enroll it in ServiceTitan on today's invoice.** Not later, not from the shop.
2. **Apply the discount as a visible line item** on the estimate they sign.
3. **Book the first included visit** with a date on the calendar. For commercial, record the nameplate and the visit allocations in writing.

> "You're on Home+ as of today. I've taken the diagnostic off and the discount's on the invoice there. Let's get your first tune-up on the calendar now so it doesn't slip."

## Related

- When and how to check status: `sop.field.membership`
- What each plan actually includes: `reference.membership-plans`
