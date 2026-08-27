---
id: sop.dispatch.job-duration
title: Job Duration, Overruns & the Bumped Job
department: dispatch
owner: dispatch-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [dispatch, duration, overrun, reschedule, bump, arrival-window, capacity, board]
related: [sop.dispatch.hours, sop.dispatch.priorities, sop.dispatch.daily-workflow, sop.csm.reschedules, sop.csm.diagnostic-fee]
section: dispatch-board
order: 3
surfaces: [dispatch, checklist]
---

# Job Duration, Overruns & the Bumped Job

> Four windows is a plan, not a promise to ourselves. A six-hour job eats three of them, and the only question that matters is who we call, when, and what it costs us.

## Book the duration, not the window {#classes}

Every job goes on the board with an estimated duration **before** anything is booked behind it. With {{price:tech_headcount}}, a wrong estimate at booking is three broken windows by 2 PM.

| Class | Duration | Board block | Typical |
|---|---|---|---|
| **Short** | {{price:job_duration_short}} | One window | Diagnostic, tune-up, minor repair, thermostat, filter/drain service |
| **Medium** | {{price:job_duration_medium}} | The window plus the next | Motor, board, capacitor with a supply run, drain clearing, leak repair |
| **Long** | {{price:job_duration_long}} | {{price:long_job_block}} | System replacement, evaporator coil, boiler, water heater, repipe, heavy commercial |

**Rules that follow from the table:**

1. **A long job is a day, not a slot.** When a long job is on the board, the honest capacity for that day is *one or two* short jobs — not four. Book it that way at booking time, not at noon in a panic.
2. **Unknown scope is a diagnostic, priced and blocked as short.** Never block a full day "just in case," and never block one window for a job the CSM described as "the whole system's out."
3. **Parts runs count.** A repair needing a supply house stop is medium, minimum.
4. **The CSM books duration class, Dispatch verifies it.** Mis-classed jobs are the single biggest cause of a missed 2–4 window.

## When a job runs long — the decision, in order {#overrun}

The technician calls Dispatch at {{price:overrun_threshold}} past the estimate (`sop.dispatch.hours`). Dispatch then re-forecasts the **rest of the day**, not the job that is running.

Work the remaining jobs one at a time, newest window last, and pick exactly one of these:

| # | Option | Use it when | What the customer hears |
|---|---|---|---|
| 1 | **Keep it — later window today** | The overrun is 1–2 hours and the job is short | A new named window today, called **before** the original one opens |
| 2 | **Subcontract it** | Emergency, member in distress, or a callback that cannot wait | "Our partner crew is covering you today at 3 PM" — we still own the follow-up |
| 3 | **Split it: diagnose today, repair another day** | The customer is home, the fault is unknown, and a short diagnostic still fits | "We'll get eyes on it today and schedule the repair for Thursday" |
| 4 | **Rebook to the next business day, fee waived** | Nothing above fits | A named window, {{price:bump_rebook_deadline}}, with {{price:bump_diagnostic_credit}} |
| 5 | **Escalate to the dispatch manager** | Customer refuses, or it is a second bump, or a P1–P4 | Overtime, on-call, or a manager call — never a "we'll ring you" |

**Never option 6: leave it on the board and hope.** A job that stays scheduled into a window we cannot hit is a no-show with extra steps.

### The worked example {#example}

Four jobs booked — 8–10, 10–12, 12–2, 2–4. The 8 AM job turns into a six-hour boiler repair. Realistically the day now holds the boiler plus **one** short job.

1. **10 AM keeps its slot only if it is short and nearby** — otherwise it moves first, because it is the earliest customer and therefore the easiest to reach before their window opens.
2. **Call all three remaining customers before 10 AM.** Not at noon. The value of the call collapses the moment the window opens.
3. **Rank the three by the ladder in `sop.dispatch.priorities`** — callback and member first, then the largest job, then the tune-up.
4. **Highest-priority one gets the subcontractor or the one surviving slot.**
5. **The other two get tomorrow, named windows, diagnostic waived**, agreed on a live call — voicemail is not an agreement.
6. **Log the reason on every ticket.** Three tickets moved by one boiler is a duration-estimating problem, and it is invisible if nobody writes it down.

## Should we waive the diagnostic fee? {#fee}

Yes — **when we moved the job.** {{price:bump_diagnostic_credit}}. It is the cheapest apology we have and it costs us nothing against a job we were going to do anyway.

| Situation | Fee |
|---|---|
| We bumped them (overrun, emergency displaced them) | **Waived** on the rebooked visit |
| We bumped them twice | Waived, plus a dispatch-manager call |
| Customer rescheduled, more than 24h notice | Standard — `sop.csm.reschedules` |
| Customer not home / no access | Standard, per `sop.csm.diagnostic-fee` |
| Active member | Already waived — `reference.membership-plans` |

**Do not waive the repair price to apologise.** The fee is the goodwill lever; discounting the work teaches the customer that a delay is worth money.

## Diagnose today, repair later — when it is the right call {#split}

Sending the tech for a short diagnostic and returning for the repair is usually **better** than a straight rebook, because:

- The customer sees us today, which is what they actually booked.
- We come back with the right part instead of a truck-stock guess.
- The return visit is sold work on a known scope, not a fresh cold job.

Use it when the customer is home, access is confirmed, and a 1–2 hour visit genuinely fits. Do **not** use it when the fault is obviously a long repair we will just have to redo the trip for, or when the tech is already past hours.

## Protecting tomorrow from today {#tomorrow}

Every bump lands on a day that is already planned. Before you rebook:

- ☐ Check tomorrow's duration classes, not just its open windows
- ☐ Never rebook a bumped job into the last window — bumping the same customer twice is the failure this SOP exists to prevent
- ☐ Hold one core window open on any day carrying a long job
- ☐ Flag repeated overruns on one job type to the dispatch manager — that is an estimating or a pricing fix, not a dispatch one

## Related

- Arrival promise and the late call: `sop.dispatch.hours`
- What moves first when something has to move: `sop.dispatch.priorities`
- The midday re-plan this feeds: `sop.dispatch.daily-workflow`
- Reschedule handling on the phone: `sop.csm.reschedules`
- Diagnostic fee rules: `sop.csm.diagnostic-fee`
