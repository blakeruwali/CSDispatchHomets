---
id: sop.dispatch.hours
title: Hours, Start Times & Managing the Technician's Day
department: dispatch
owner: dispatch-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [dispatch, hours, start-time, schedule, technician, day, board]
related: [sop.dispatch.priorities, sop.dispatch.daily-workflow, sop.dispatch.job-duration, sop.field.start-time, sop.csm.availability, sop.csm.coverage]
section: dispatch-foundations
order: 1
surfaces: [dispatch, checklist]
---

# Hours, Start Times & Managing the Technician's Day

> **Coverage hours are not a suggestion for the customer and not a courtesy for the tech — they are the boundary Dispatch plans every promise inside of.**

## When this applies {#applies}

Every scheduled day, every technician, every booked window. It applies from the moment the board is set the night before through the moment Dispatch signs off at close. It governs what the CSM is allowed to book, what the technician is told and when, and what happens the instant a window is at risk.

## The execution ladder {#execution}

1. **{{price:dispatch_hours}} is the boundary.** Dispatch is on the board before the first technician moves and after the last job closes. Nothing is booked, promised, or dispatched outside it without going through on-call.
2. **The board only holds {{price:tech_daily_capacity}}.** With {{price:tech_headcount}}, the standard day is the four core windows — {{price:service_windows}}. Overflow ({{price:service_windows_overflow}}) is Dispatch's call only, granted when the day is genuinely clear, never booked ahead by default and never offered by the CSM without asking (`sop.csm.availability`).
3. **Tomorrow's first job goes out by {{price:board_lock}}, with its exact start hour.** {{price:first_job_notice}}. "Morning" is not a start time — the tech needs a number to plan the truck around.
4. **Confirm acknowledgement by {{price:tech_ack_deadline}}.** No acknowledgement is a phone call before the shift starts, not a shrug at 8:15 when the tech is nowhere.
5. **Start time means on-site, not rolling.** The default first window is {{price:first_job_start_default}}; the tech leaves at {{price:tech_shift_start}} so they are at the door at the top of the window, not pulling out of the driveway at it. Field-side detail lives in `sop.field.start-time` — if the two ever disagree, the field version governs the tech and Dispatch fixes this page.
6. **Hold the arrival promise.** The technician is on site at the top of the booked window. When they will not be, Dispatch calls the customer **before the window opens** with a named arrival time — never "on the way." {{price:late_arrival_notice}}. The {{price:arrival_guarantee}} clock starts at the top of the window regardless of the call.
7. **Manage job to job, not the whole route.** A technician holds the job they're on plus the next one, and nothing further. More than that and they start optimizing their own route instead of the board's priorities.
8. **Running long is a dispatch event the moment it hits {{price:overrun_threshold}}.** The tech calls in, not to ask permission — to let Dispatch move the rest of the day. Full decision table: `sop.dispatch.job-duration`.
9. **After hours, the board hands off, it does not go dark.** Posh covers `{{price:after_hours_coverage}}`; the on-call tech is confirmed before Dispatch signs off, and any soft holds are noted for Posh and the CSM team (`sop.csm.coverage`).
10. **Close the day against the checklist below** — every job accounted for, tomorrow already dispatched.

## What you say {#verbatim}

To the technician, the night before:

> "Your first job is 9 AM in Levittown — a supply run first, so leave by 8:15."

To the technician mid-shift, when a job is running long:

> "Stop and call me the second you're 30 minutes past your estimate. I'd rather re-plan the day at 11 than apologize to three people at 4."

To the customer, before a missed window:

> "I'm calling ahead of your 8–10 window — our tech is running behind on the job before yours. He'll be at your door at 9:15, and I wanted you to have a real time instead of a guess."

To the customer who asks why nobody can come before 7 AM or after 6 PM:

> "Our dispatch team runs the board 7 to 6. Anything outside that goes to our after-hours line, and if it's urgent, on-call gets a technician moving the same way."

To Posh or the CSM team at handoff:

> "Board's clean for tonight — one soft hold in Massapequa for tomorrow's 10, on-call is Rivera, and here's the two numbers if anything comes in overnight."

## Worked example — a normal Tuesday against the clock {#example}

| Time | Dispatch does |
|---|---|
| 5:00 PM (day before) | Board lock — tomorrow's first job dispatched to the technician with its real start hour |
| 7:00 AM | Tech acknowledgement confirmed; no response by now is a phone call |
| 7:30 AM | Tech leaves for an 8 AM window |
| 8:00 AM | Arrival clocked — the {{price:arrival_guarantee}} clock is live |
| 11:35 AM | Tech calls in — 35 minutes past the estimate on the 10–12 job |
| 11:40 AM | Dispatch identifies the at-risk 12–2 customer and calls them with a named 1:00 arrival, before their window opens |
| 6:00 PM | Dispatch closes the board: every job closed or explained, on-call confirmed, tomorrow's first job already out |

Nothing on that list happens at random. Every action sits inside the {{price:dispatch_hours}} window and every promise made outside a booked window (the 5 PM lock, the 7 AM ack) exists to protect a promise made inside one.

## When it goes wrong {#failures}

**A tech doesn't acknowledge the first job by {{price:tech_ack_deadline}}.** Call them directly — do not wait for a text back. If they're unreachable past {{price:tech_unreachable_window}}, escalate to the dispatch manager; a truck that never left the driveway is worse than one running late.

**A window is going to be missed and nobody called ahead.** Call now, even if it's already open. A late call is worse than no call, but no call is the actual failure — apologize once, give the real time, and log why the proactive call didn't happen.

**A customer wants a window outside {{price:service_windows}} or {{price:service_windows_overflow}}.** Say what's actually available. Overflow only goes out with Dispatch approval on a day that's genuinely clear — never promised by the CSM to close a call.

**An after-hours request comes in and it isn't clearly an emergency.** Don't guess. Route it to on-call per `protocol.emergency.triage` and let the triage matrix decide, not a hunch about how urgent it sounds on the phone.

### Hard rules

- Never dispatch or promise a window outside {{price:dispatch_hours}} without going through on-call.
- Never let a tech leave the shop without knowing their real start hour.
- Never wait until a window opens to call a customer who's going to be late.
- Never hand off the board at end of day without a named on-call technician confirmed.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| **2** | First job dispatched by {{price:board_lock}} with real start hour; ack confirmed by {{price:tech_ack_deadline}}; every at-risk window called before it opened; on-call confirmed at close |
| **1** | One of the above missed but caught and corrected same day with no customer left waiting past their window |
| **0** | A window missed with no proactive call, a tech sent with no acknowledged start time, or the board handed off with no confirmed on-call |

## Related

- What Dispatch runs the day against: `sop.dispatch.priorities`
- Duration classes, overruns and bumped jobs: `sop.dispatch.job-duration`
- Hour-by-hour routine: `sop.dispatch.daily-workflow`
- The technician's own start-time rule: `sop.field.start-time`
- Windows the CSM may offer: `sop.csm.availability`
- After-hours and overnight handling: `sop.csm.coverage`
