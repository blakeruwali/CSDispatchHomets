---
id: sop.dispatch.job-duration
title: Job Duration, Overruns & the Bumped Job
department: dispatch
owner: dispatch-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [dispatch, duration, overrun, reschedule, bump, arrival-window, capacity, board]
related: [sop.dispatch.hours, sop.dispatch.priorities, sop.dispatch.daily-workflow, sop.dispatch.no-pause, sop.csm.reschedules, sop.csm.diagnostic-fee]
section: dispatch-board
order: 3
surfaces: [dispatch, checklist]
---

# Job Duration, Overruns & the Bumped Job

> **Four windows is a plan against an estimate, not a promise the day will behave — a six-hour job eats three of them, and the only question is who we call, when, and what it costs us.**

## When this applies {#applies}

Every job, at booking, gets a duration class before anything is scheduled behind it. This page applies twice: once at booking, when the class is set, and again the moment a job runs past its estimate and the rest of the day is at risk.

## The execution ladder {#execution}

1. **Book the duration class, not just the window.** With {{price:tech_headcount}}, one wrong estimate is three broken windows by 2 PM.

   | Class | Duration | Board block | Typical |
   |---|---|---|---|
   | **Short** | {{price:job_duration_short}} | One window | Diagnostic, tune-up, minor repair, thermostat, filter/drain |
   | **Medium** | {{price:job_duration_medium}} | The window plus the next | Motor/board/capacitor with a supply run, drain clearing, leak repair |
   | **Long** | {{price:job_duration_long}} | {{price:long_job_block}} | Replacement, coil, boiler, water heater, repipe, heavy commercial |

2. **A long job is a day, not a slot.** When one is on the board, the honest capacity for that day is one or two short jobs — book it that way at booking time, not at noon in a panic.
3. **The CSM classes it, Dispatch verifies it.** A mis-classed job is the single biggest cause of a missed 2–4 window — check it before the day starts, not after it breaks.
4. **The technician calls in at {{price:overrun_threshold}} past the estimate.** Not to ask permission to keep working — to let Dispatch re-forecast the rest of the day.
5. **Dispatch re-forecasts the remaining jobs, newest window last**, and picks exactly one option per at-risk job:

   | # | Option | Use it when |
   |---|---|---|
   | 1 | Keep it — later window today | Overrun is 1–2 hours, job is short |
   | 2 | Subcontract it | Emergency, member in distress, or a callback that can't wait |
   | 3 | Split it: diagnose today, repair another day | Customer is home, fault unknown, a short diagnostic still fits |
   | 4 | Rebook to the next business day, fee waived | Nothing above fits |
   | 5 | Escalate to the dispatch manager | Customer refuses, it's a second bump, or it's P1–P4 |

6. **Never leave it on the board and hope.** A job scheduled into a window we cannot hit is a no-show with extra steps.
7. **The job never gets paused to buy time — it gets closed and re-dispatched.** If today's visit runs out of day, close what was done and book the continuation before the tech leaves the driveway (`sop.dispatch.no-pause`); this SOP decides *when* that happens, that one decides *how* it's logged.
8. **Waive the diagnostic when we bumped them** — {{price:bump_diagnostic_credit}} — never waive the repair price to apologize.
9. **Before rebooking, check tomorrow's duration classes**, not just its open windows, and never put a bumped customer in the last slot of the day — that's how one bump becomes two.

## What you say {#verbatim}

To Dispatch, from the technician at the overrun threshold:

> "I'm 30 minutes past my estimate on the Baldwin boiler and I've got at least three more hours — go ahead and re-plan behind me."

To the customer whose window is now at risk, called before it opens:

> "I'm calling ahead of your 12–2 — the job ahead of yours turned into a bigger repair than expected. I can get you in at 4 today, or first thing tomorrow with your diagnostic fee waived. Which do you want?"

To the customer being split into diagnose-today / repair-later:

> "We'll get eyes on it today and tell you exactly what's wrong. If it needs a part we don't carry on the truck, we'll come back Thursday with it already in hand instead of guessing today."

To the dispatch manager, escalating a refused rebook:

> "This is her second bump this month and she's not accepting tomorrow or a subcontractor — I need you on the phone with her."

## Worked example — a one-hour day becomes a six-hour day {#example}

Board: 8–10, 10–12, 12–2, 2–4. The 8 AM ticket, booked short as a diagnostic, turns into a six-hour boiler repair once the tech is inside. Realistically the day now holds the boiler plus one short job, not four.

| Step | Action |
|---|---|
| 1 | Tech calls in at {{price:overrun_threshold}} past the original short-class estimate |
| 2 | Dispatch checks whether the 10 AM is short and nearby — if not, it moves first, being the earliest and easiest to reach before its window opens |
| 3 | All three remaining customers are called before 10 AM opens, not at noon |
| 4 | Rank the three against `sop.dispatch.priorities` — callback and member first, then the largest remaining job, then the tune-up |
| 5 | The highest-priority one gets the one surviving slot or a subcontractor |
| 6 | The other two get tomorrow, named windows, diagnostic waived, agreed on a live call |
| 7 | The reason — a diagnostic that turned into a long repair — gets logged on all four tickets |

That log entry is the whole point: one boiler moving three tickets is a duration-estimating pattern, and it's invisible if nobody writes down why.

## When it goes wrong {#failures}

**The overrun call comes in after a window has already opened.** Call the customer immediately anyway — late beats never — but flag it: the tech should have called at the threshold, not after the fact.

**A diagnose-today plan turns out to be an obvious long repair once the tech is inside.** Don't force the split — convert it to a rebook with the part ordered, so the return visit is sold work on a known scope instead of a second guess.

**The customer refuses both the subcontractor and tomorrow.** Escalate to the dispatch manager rather than force a same-day slot that doesn't exist — inventing capacity is how the whole afternoon collapses.

**Repeated overruns show up on the same job type.** Flag it to the dispatch manager as a duration-estimating or pricing problem — that's a fix upstream of the board, not a dispatch decision today.

### Hard rules

- Never book a long job's day as if it were four short windows.
- Never leave an at-risk job on the board unmoved and uncalled.
- Never waive the repair price as an apology — only the diagnostic.
- Never rebook a bumped customer into the last window of the next day.
- Never pause a job to "hold the spot" — close it and re-dispatch (`sop.dispatch.no-pause`).

## QA scoring {#qa}

| Score | Standard |
|---|---|
| **2** | Duration class correct at booking, overrun called in at threshold, every at-risk customer reached before their window with a named time, reason logged on every ticket |
| **1** | Correct outcome reached but the call to a displaced customer was late or a ticket wasn't logged |
| **0** | A window missed with no call, the diagnostic not waived on a bump we caused, or a customer bumped twice in the same rebook cycle |

## Related

- Arrival promise and the late call: `sop.dispatch.hours`
- What moves first when something has to move: `sop.dispatch.priorities`
- The midday re-plan this feeds: `sop.dispatch.daily-workflow`
- Why we close and re-dispatch instead of pausing: `sop.dispatch.no-pause`
- Reschedule handling on the phone: `sop.csm.reschedules`
- Diagnostic fee rules: `sop.csm.diagnostic-fee`
