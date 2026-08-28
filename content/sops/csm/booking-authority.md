---
id: sop.csm.booking-authority
title: Booking Priorities & No Dispatch Without a Booking
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [booking, priorities, dispatch, ticket, communication, authority, no-dispatch]
related: [sop.csm.availability, sop.csm.ticket-standards, sop.csm.dispatch-handoff, sop.dispatch.priorities, protocol.emergency.triage, sop.csm.communication]
section: booking
order: 0
surfaces: [csm, checklist]
acknowledgement: required
---

# Booking Priorities & No Dispatch Without a Booking

| | |
|---|---|
| **Purpose** | Every truck that moves is moving against a complete, booked ticket — and the right one moves first. |
| **When it applies** | Every request for service, from any channel, at any hour. |
| **Owner** | CSM books to this order. Dispatch owns the board and may override, on the record. |

## The one rule {#no-dispatch-without-booking}

> **No technician is dispatched without a booked job in ServiceTitan.**

Not a text to the tech. Not "he's nearby, just swing by." Not a verbal from a manager, an owner, or a friend of the family. If a truck is going to an address, there is a job on that address first, with a customer, a phone number, a symptom, a job type, a business unit and a fee posture — `sop.csm.ticket-standards`.

Why we hold this line without exceptions:

- **An unbooked visit has no invoice behind it.** The work gets done and the money is chased for a week, or never.
- **It has no history.** No equipment, no readings, no warranty trail — the next tech at that address starts blind (`sop.field.equipment-capture`).
- **It is invisible to the board.** A truck off-board is a missed 2–4 window somewhere else that nobody saw coming.
- **It has no arrival promise attached**, so the {{price:arrival_guarantee}} does not protect the customer and nothing protects us.

**If a request arrives outside the system** — owner's cell, a tech texted directly, a landlord who "already spoke to somebody" — the answer is the same and it is friendly: *"Absolutely, let me get that in the system right now so we can get it covered properly — can I grab a couple of details?"* Then book it, then dispatch it.

**The only person who can waive this is the dispatch manager**, and the job is entered the same day regardless. A retroactive ticket is still a ticket; a visit with no ticket at all is a hole in the day and in the books.

## What gets booked first {#priorities}

When two callers want the same slot, this is the order. It is the booking-side mirror of `sop.dispatch.priorities` — if the two ever disagree, Dispatch's version governs the board and this page gets fixed.

| Rank | Request | Booked as |
|---|---|---|
| 1 | **Safety** — gas smell, CO, smoke, sparking, active flooding | Do not book first. Run `protocol.emergency.triage`, get them safe, then dispatch |
| 2 | **Callback / warranty on our own work** | Same day, always. This is the highest-cost failure we have — `sop.csm.warranty-callback` |
| 3 | **Member with no heat or no cooling** | Same day. Membership is a promise about response, not a discount |
| 4 | **Approved emergency install** — no heat / no cooling, replacement already sold | Dispatch's call, and it outranks a standard service call |
| 5 | **Non-member no heat / no cooling**, vulnerable occupant, or a commercial site down | Same day if a core window exists, otherwise first window tomorrow |
| 6 | **Water leak or anything actively causing damage** | Same day; give shut-off instructions on the call |
| 7 | **Standard repair — system running but faulty** | Next available core window |
| 8 | **Estimates and second opinions** | Booked, never squeezed — a rushed estimate loses the job |
| 9 | **Tune-ups and maintenance** | The flexible layer. Booked into quiet days, and the first thing moved when a day breaks |

Two things this table does *not* let you do:

1. **Downgrade someone because they are not a member.** Rank 5 is still same-day when we have the room. The member's advantage is that they get the room first.
2. **Promise a rank you cannot staff.** We run {{price:tech_headcount}} and plan {{price:tech_daily_capacity}}. Rank 3 with four full core windows is a call to Dispatch, not a fifth booking (`sop.csm.availability`).

## Temperature changes the ranking {#seasonal}

Under {{price:emergency_temp_cold}} or over {{price:emergency_temp_hot}}, no heat and no cooling move up a rank and the vulnerable-occupant question gets asked out loud: *"Is there anyone elderly, anyone with a medical condition, or a young child in the home?"* The answer goes in the ticket notes, and it is the difference between a 2 PM slot and a right-now escalation.

## What the customer hears {#communication}

The booking is not finished when the slot is chosen. It is finished when the customer can repeat back four things:

1. **The window** — a two-hour slot, named. Never "sometime Tuesday."
2. **What it costs to find out** — the diagnostic, in dollars, and that it comes off if they move forward today ({{price:diagnostic_credit_on_sale}}).
3. **Who is coming and what happens** — a licensed technician, who will diagnose and price before doing any work.
4. **That they will hear from us again** — the confirmation text now, the reminder before the visit (`sop.csm.confirmation-cadence`).

Then the read-back, in your own voice, per `sop.csm.confirmation`. A booking the customer could not repeat is a no-show waiting to happen.

**Three sentences we do not say:**

- *"Sometime in the morning."* — It is a window or it is nothing.
- *"He should be able to fix it while he's there."* — You are pricing a repair you have not seen.
- *"I'll see what I can do and call you back."* — Either book it, or name the time you will call and keep it (`sop.csm.communication`).

## When we cannot book what they need {#cannot}

Never end a call with nothing. In order of preference:

1. **A later window today** — offered plainly, with the reason.
2. **First window tomorrow**, named and held.
3. **A soft hold** — booked tomorrow, with an honest *"if something opens today I will call you first, and I mean call, not maybe."*
4. **Out of area or out of scope** — say so immediately and point them somewhere useful (`sop.csm.service-area`). A straight answer in ninety seconds earns more referrals than a booking we cancel later.

Overflow windows ({{price:service_windows_overflow}}) are never step one, and never offered without Dispatch approval.

## The gate at the end {#gate}

Before you save — while they are still on the line — run `sop.csm.dispatch-handoff`. An incomplete ticket is not a booking, and a job that is not a booking does not get a truck.

## Related

- Windows you may offer: `sop.csm.availability`
- Required fields: `sop.csm.ticket-standards`
- Pre-save gate: `sop.csm.dispatch-handoff`
- What Dispatch runs the board against: `sop.dispatch.priorities`
- Safety-first triage: `protocol.emergency.triage`
