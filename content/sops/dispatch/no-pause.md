---
id: sop.dispatch.no-pause
title: Never Pause a Job — Re-Dispatch Instead
department: dispatch
owner: dispatch-manager
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [dispatch, servicetitan, pause, rebook, multi-visit, estimate, invoice, revenue]
related: [sop.dispatch.equipment, sop.dispatch.daily-workflow, sop.dispatch.job-duration, sop.field.forms]
section: dispatch-board
order: 5
surfaces: [dispatch, checklist]
---

# Never Pause a Job — Re-Dispatch Instead

> A paused job is invisible revenue. A re-dispatched job is a booked appointment. We never pause.

ServiceTitan has a pause button. **We do not use it.** A paused job drops off the board, drops off the schedule, and drops off every report — it is work we sold and never finished, sitting in a queue nobody works. Every unfinished job gets **closed and re-dispatched as a new appointment** instead.

## The rule {#rule}

**Technicians never pause a job. Dispatch never accepts a paused job.** Whatever the reason the work isn't done today, the handling is the same:

1. **Close today's job** with everything that was actually done — equipment scanned, photos, forms, the correct invoice for today's visit.
2. **Book the next appointment on the same job, same day** — the office or the technician adds it before anyone leaves it, with a named window the customer agreed to.
3. **Dispatch the new appointment like any other job** on its day.

The customer hears one continuous plan ("we'll be back Tuesday 10–12 to finish"). The board sees two clean jobs. Nothing floats.

## Scenario 1 — The job runs out of day {#multi-day}

The 10–11 install at Blake's house isn't finished by end of day. The tech does **not** pause it.

- Close today's visit with the work completed so far documented.
- Add the continuation appointment **before leaving the driveway** — customer agrees to the window on the spot.
- Dispatch re-dispatches it tomorrow like a fresh job, with the history attached.

## Scenario 2 — Waiting on the office for an estimate {#estimate-delay}

The office can't get the estimate to the tech while he's on site. The tech does **not** pause the job and wait.

- The tech tells the customer: **"The office will reach out with your estimate."**
- The tech closes the job — his work on site is done.
- The estimate delivery becomes the office's task, tracked, with a follow-up date — never a paused job holding it hostage.

## Scenario 3 — Estimate couldn't be given on site {#estimate-revisit}

The tech went out but the estimate couldn't be produced — the estimate team wasn't available, the home needs a full scan, whatever the reason.

- Close today's visit.
- **The office or the tech adds a new appointment for another day** — confirmed with the customer and the sales team — to return, scan the home, and present the estimate.
- That return visit is dispatched like any other job.

## Why pause is banned {#why}

| What a paused job does | What re-dispatch does |
|---|---|
| Disappears from the board and the schedule | Stays visible as a booked appointment |
| Kills the revenue — sold work never completed | Protects the revenue with a dated return |
| Breaks capacity planning — tomorrow's board is wrong | Keeps booking and capacity accurate |
| No owner, no follow-up, no deadline | A named window the customer heard |
| Customer gets silence | Customer gets a plan |

## Never close on wrong numbers {#wrong-numbers}

The opposite failure is just as banned: **do not close a job with incorrect numbers to make it go away.** If the estimate total is wrong, the invoice amount is wrong, or any figure on the job doesn't match reality — **stop and fix it first.**

- The tech calls Dispatch before closing.
- Dispatch corrects the estimate/invoice or escalates to whoever owns it.
- Only then does the job close.

A job closed with wrong numbers corrupts the invoice, the revenue report, and the customer's trust — all three at once. A wrong number is a fix-now problem, never a close-anyway problem.

## Dispatch's daily check {#daily-check}

- **Zero paused jobs on the board, ever.** Any job found paused gets converted same day: close what was done, book the continuation, dispatch it.
- **Every multi-day job has its next appointment booked before end of day** — not "we'll call them."
- **Every closed job's numbers are verified** at close-out, riding along with the equipment-capture check in `sop.dispatch.equipment`.

## Related

- The close-out verification this rides with: `sop.dispatch.equipment`
- Where the check sits in the day: `sop.dispatch.daily-workflow`
- Duration classes and overruns: `sop.dispatch.job-duration`
- The technician's close standard: `sop.field.forms`
