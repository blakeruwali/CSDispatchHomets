---
id: sop.dispatch.hours
title: Hours, Start Times & Managing the Technician's Day
department: dispatch
owner: dispatch-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [dispatch, hours, start-time, schedule, technician, day, board]
related: [sop.dispatch.priorities, sop.dispatch.daily-workflow, sop.field.start-time, sop.csm.availability]
section: dispatch-foundations
order: 1
surfaces: [dispatch, checklist]
---

# Hours, Start Times & Managing the Technician's Day

| | |
|---|---|
| **Purpose** | Everyone knows when the day starts, and the board reflects reality all day. |
| **When it applies** | Every scheduled day, every technician. |
| **Owner** | Dispatch owns the board. The CSM books against it, never over it. |

## The hours {#hours}

| | |
|---|---|
| Office / CSM phones | {{price:csm_hours}}, {{price:csm_days}} |
| Dispatch on the board | {{price:dispatch_hours}} |
| Technician leave time | {{price:tech_shift_start}} |
| Core customer windows | {{price:service_windows}} |
| Overflow windows (Dispatch approval only) | {{price:service_windows_overflow}} |
| After hours | On-call rotation — `protocol.emergency.triage` |

Dispatch is on the board **before** the first technician moves and **after** the last job closes. A board that goes unattended at 4 PM is a board that produces tomorrow's callbacks.

## Capacity — what one truck can actually hold {#capacity}

We currently run {{price:tech_headcount}}. The honest plan is {{price:tech_daily_capacity}}.

- **The standard day is the four core windows:** {{price:service_windows}}.
- **{{price:service_windows_overflow}} are overflow, not inventory.** They are offered only when the day is genuinely clear and Dispatch says yes — never booked ahead by default and never promised by the CSM without approval (`sop.csm.availability`).
- **A fifth or sixth job booked hopefully is how the 2–4 window gets missed.** If the four core windows are full, the next request goes to tomorrow, to a subcontractor, or to the dispatch manager — not onto the end of the day.

## Start time means on-site, not rolling {#start-time}

**A technician's start time is the start of the customer's arrival window, on site.** Not leaving the house, not at the supply house, not pulling out of the driveway.

The default first window is {{price:first_job_start_default}}, so the tech is up, loaded and moving at {{price:tech_shift_start}} and is at the door at 8 — not at 9:55. The full rule as the technician reads it is `sop.field.start-time` — the two documents say the same thing, and if they ever disagree, the field version governs what the technician does and Dispatch fixes this page.

## Tell the technician the real start hour, the night before {#first-job-notice}

Not every day starts at 8. Some days the first job is a 10–12. The technician is told **which**, by {{price:board_lock}}, in the same message that dispatches the job.

- **{{price:first_job_notice}}.** "Your first job is 9 AM in Levittown" — a named hour and a place.
- **"Morning" is not a start time.** A tech who does not know whether to be moving at 7:30 or 9:30 will guess, and the guess costs the 8 AM window.
- **If the first job changes overnight**, the technician is called before {{price:tech_ack_deadline}}, not texted and hoped for.

Dispatch's job here is narrow and non-negotiable:

1. **Dispatch the first job the night before**, by {{price:board_lock}}, with its exact start hour. A tech should never wake up not knowing where they are going or when.
2. **Confirm acknowledgement by {{price:tech_ack_deadline}}.** No acknowledgement is a phone call, not a shrug.
3. **If the first job will be missed, the customer hears it from us before the window opens** — not after.

## The arrival promise, and the call when we cannot keep it {#arrival-promise}

We book two-hour windows, and the promise we make is that the technician is on site **at the top of the window** — 8 AM for an 8–10, not 9:45.

When the tech will not be there at the top:

1. **Dispatch calls the customer before the window opens.** Not during, not after.
2. **Give a named arrival time, not a status.** "He'll be at your door at 9:15" — never "he's on his way" or "sometime in the window."
3. **Give the reason in one sentence** and move on. Customers forgive a fixed time; they do not forgive being left to watch the driveway.
4. **The {{price:arrival_guarantee}} clock is still running** from the start of the booked window — a proactive call does not stop it, it just keeps the customer.

{{price:late_arrival_notice}}.

## Managing the day, job to job {#managing}

A technician should hold **the job they are on plus the next one**, and nothing further. More than that and they optimise their own route instead of the board's priorities; less than that and they sit idle between calls.

| Moment | Dispatch does |
|---|---|
| Tech dispatched | Next job visible, address and symptom clean |
| Tech on site | Clock the arrival — the {{price:arrival_guarantee}} clock is live |
| {{price:job_check_in}} with no update | Check in. Do not wait for the tech to surface |
| Job running long | Re-sequence the *rest of the day* now, not at the end of it |
| Job closed | Verify equipment attached and forms complete before releasing the next — `sop.field.forms` |
| Sold job / estimate | Hand to the install coordinator same day |

## Running long is a dispatch event, not a tech problem {#running-long}

The moment a job overruns by {{price:overrun_threshold}}, the technician calls Dispatch. Not to ask permission to keep working — to let the board move.

Dispatch then, in this order:

1. **Identify the customer who is now at risk**, not the tech who is late.
2. **Call that customer before their window opens.** A proactive call keeps a job; a late arrival with no warning loses one and earns the review.
3. **Move the job or move the tech.** Re-assign to whoever is nearest and qualified.
4. **Note it on the ticket.** Repeated overruns on one job type is a pricing or a training signal, and it is invisible if nobody writes it down.

## Lunch, drive time and the honest board {#honest-board}

The board must contain the real day, including the parts nobody likes scheduling:

- **Drive time between calls is blocked**, not assumed. Nassau to eastern Suffolk at 4 PM is not fifteen minutes.
- **Lunch is on the board.** An unscheduled lunch becomes a job that mysteriously runs 45 minutes long.
- **Supply house runs are jobs.** If a tech has to fetch a part, it occupies the board like anything else.

A board that pretends these do not exist is a board that books a 4–6 window it cannot hit.

## End of day {#end-of-day}

Before Dispatch leaves:

- ☐ Every job today is closed, or has a written reason it is not
- ☐ Tomorrow's first job is dispatched to every technician
- ☐ Callbacks and parts-hold jobs are scheduled, not floating
- ☐ On-call tech confirmed for tonight
- ☐ Any soft-hold slots noted for the CSM team and for Posh — `sop.csm.coverage`

## Related

- What Dispatch runs the day against: `sop.dispatch.priorities`
- Hour-by-hour routine: `sop.dispatch.daily-workflow`
- The technician's own start-time rule: `sop.field.start-time`
- Windows the CSM may offer: `sop.csm.availability`
