---
id: sop.csm.missed-calls
title: Missed Call Recovery
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [missed-call, callback, speed-to-lead, inbound, recovery, phone, intake]
related: [sop.csm.greeting, sop.csm.intake, sop.csm.booking-authority, sop.csm.kpis, sop.csm.availability]
section: leads
order: 1
surfaces: [csm, checklist]
---

# Missed Call Recovery

> **A missed call is not a lost call. It is a lead with a timer on it — and the timer is already running.**

Every missed inbound call is someone with a broken system or money to spend who called *us first*. If we call back inside five minutes, most of them still book. If we call back in an hour, most of them have already booked with the next company on the list. The recovery of a missed call is measured in minutes, not shifts.

## The rule {#rule}

**Every missed call gets a callback attempt within 5 minutes of being noticed, and no missed call is ever left unworked at the end of a shift.**

If the board is slammed and you cannot call back in 5 minutes, that is exactly what the answering service overflow and the on-deck CSM are for — a missed call is never parked because "we're busy." Busy is when missed calls matter most.

## The moment you see it {#first-response}

The instant a missed call shows on the board, in the queue, or in the answering-service log:

1. **Call back first.** Phone call, not a text. Speed beats polish — a slightly rushed callback in two minutes beats a perfect one in twenty.
2. **If no answer, text immediately.** Same minute, while the number is still warm:

   > "Hi, this is [Name] with home+ Air & Heat — I'm sorry we missed your call. Are you looking to get a system looked at today? I can get you scheduled right now."

3. **Try again.** Second call attempt at 15 minutes, third at 1 hour. After three attempts with no contact, log it and move it to the end-of-day sweep — it is never silently dropped.

## The callback conversation {#conversation}

Lead with the apology, then get to the point fast — they already told the phone what they want by calling:

> "Hi, this is [Name] with home+ Air & Heat — I saw we missed your call a few minutes ago and I'm sorry about that. How can I help you today?"

Then it is a normal call: full intake (`sop.csm.intake`), symptom clarification, fee posture, and book it (`sop.csm.booking-authority`). **Do not treat a callback as lower-value than a live answer.** A customer who called back-to-back companies books with whoever treats them like a priority first.

**If the customer says they already booked somewhere else:** be gracious, leave the door open, and log it:

> "No problem at all — glad you're getting it taken care of. If anything changes or you ever want a second opinion, we're here."

Log the outcome either way — booked, already booked elsewhere, no answer, wrong number. A missed call with no outcome logged looks exactly like a missed call nobody worked.

## After-hours missed calls {#after-hours}

After-hours calls go to the answering service, which is the safety net — but anything that slips through (a dropped transfer, a hang-up before pickup, a weekend gap) follows the same rule at the **start of the next shift**: the first CSM on works the overnight missed-call list **before** anything else, in the order the calls came in. Emergencies flagged by the answering service get called first regardless of order.

## The end-of-day sweep {#sweep}

Before the last CSM logs off:

- Every missed call from today has an outcome logged: booked, quoted, declined, already booked elsewhere, or no contact after three attempts.
- Anything unresolved goes on tomorrow's morning list, first thing — not "when someone gets to it."
- The manager reviews the day's missed-call count and recovery rate. A rising missed-call count is a staffing problem, not a tech problem, and it goes to the weekly numbers.

## Why this is measured {#why}

Missed calls are the most expensive calls we take — marketing already paid for them, the customer already chose us once, and the only question is whether we answer. Recovery rate (missed calls returned within 5 minutes, and missed calls ultimately booked) sits on the CSM scoreboard next to booking rate, because the two are the same skill: being there when the customer reaches out (`sop.csm.kpis`).

## Related

- Live answer standard: `sop.csm.greeting`
- What to capture once they're on the line: `sop.csm.intake`
- Booking the call: `sop.csm.booking-authority`
- How recovery rate is measured: `sop.csm.kpis`
