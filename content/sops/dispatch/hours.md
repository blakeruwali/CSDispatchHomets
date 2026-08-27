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
| Technician shift start | {{price:tech_shift_start}} |
| Booked customer windows | {{price:service_windows}} |
| After hours | On-call rotation — `protocol.emergency.triage` |

Dispatch is on the board **before** the first technician moves and **after** the last job closes. A board that goes unattended at 4 PM is a board that produces tomorrow's callbacks.

## Start time means on-site, not rolling {#start-time}

**A technician's start time is the start of the customer's arrival window, on site.** Not leaving the house, not at the supply house, not pulling out of the driveway.

That means the tech is up, loaded and moving at {{price:tech_shift_start}} so an 8–10 window is met at 8, not at 9:55. The full rule as the technician reads it is `sop.field.start-time` — the two documents say the same thing, and if they ever disagree, the field version governs what the technician does and Dispatch fixes this page.

Dispatch's job here is narrow and non-negotiable:

1. **Dispatch the first job the night before**, by {{price:board_lock}}. A tech should never wake up not knowing where they are going.
2. **Confirm acknowledgement by {{price:tech_ack_deadline}}.** No acknowledgement is a phone call, not a shrug.
3. **If the first job will be missed, the customer hears it from us before the window opens** — not after.

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
