---
id: sop.dispatch.daily-workflow
title: Workflow During the Day — Hour by Hour
department: dispatch
owner: dispatch-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [dispatch, workflow, daily, routine, board, servicetitan, handoff]
related: [sop.dispatch.hours, sop.dispatch.priorities, sop.field.start-time, sop.field.forms, sop.csm.coverage]
section: dispatch-board
order: 2
surfaces: [dispatch, checklist]
---

# Workflow During the Day — Hour by Hour

> The board is never "set." It is worked, all day, by one named person.

## Before the techs move — {{price:dispatch_hours}} opens {#pre-shift}

1. **Read the Posh overnight log** and confirm every emergency was actually dispatched, not just recorded — `sop.csm.coverage`.
2. **Confirm every technician acknowledged their first job — and the start hour they were given.** The night-before dispatch carries the real time ({{price:first_job_notice}}); at 7 AM you are confirming the tech read it, not sending it. No acknowledgement by {{price:tech_ack_deadline}} is a phone call.
3. **Sanity-check the geography.** A first job in eastern Suffolk at 8 AM is a fix you make now, not at noon.
4. **Confirm parts on hold have arrived** for any job scheduled today. A parts job dispatched without the part is a wasted slot and an angry customer.
5. **Check the day's capacity against the emergency season.** We plan {{price:tech_daily_capacity}}. Under {{price:emergency_temp_cold}} or over {{price:emergency_temp_hot}}, hold a slot open. It will get used.

## Morning — first windows {#morning}

- **The tech is on site at the top of the window**, {{price:first_job_start_default}} for an 8–10. Leaving at {{price:tech_shift_start}} is the means, not the promise.
- **Watch arrivals in real time.** The {{price:arrival_guarantee}} clock starts at the beginning of the booked window; a tech not on site at the top of the window is a call to the customer **now**, with a named arrival time — not "he's on his way." Full rule: `sop.dispatch.hours`.
- **Confirm each tech has exactly the next job visible** and nothing further — `sop.dispatch.hours`.
- **Take the CSM's same-day requests.** Approve or decline against `sop.dispatch.priorities`, and answer quickly — the CSM has a customer on the line. Overflow windows ({{price:service_windows_overflow}}) are yours to grant, never the CSM's to offer.

## Midday — the re-plan {#midday}

This is the hour the day is either saved or lost.

1. **Re-forecast every remaining job** against actual finish times, not scheduled ones.
2. **Identify at-risk windows** — the afternoon jobs that will not be met if nothing changes.
3. **Call those customers before their window opens.** Every time, with a specific time. A moved appointment we called about is a non-event; a missed window we did not call about is a review.
4. **Pick one outcome per at-risk job** — keep it later today, subcontract, diagnose today and repair later, or rebook to a named window with {{price:bump_diagnostic_credit}}. The decision table is `sop.dispatch.job-duration`.
5. **Move the flexible layer first** — tune-ups and maintenance, never callbacks or members in distress.
6. **Check {{price:same_day_cutoff}}.** After it, same-day bookings are Dispatch's call only.


## Afternoon — closing the loop {#afternoon}

- **Chase open jobs.** {{price:job_check_in}} with no update is a check-in, not a wait.
- **An emergency install landing late takes the slot.** Approved replacement with no heat or no cooling outranks a standard service call — subcontract the displaced job, or rebook it to a named window tomorrow on a live call. Order and escalation rules: `sop.dispatch.priorities`.
- **Quality-gate every close.** Equipment attached to the location, forms complete, photos present — `sop.field.forms`. A job closed thin gets sent back to the technician who closed it, today, not next week.
- **Route sold work same day.** Approved estimates go to the install coordinator; declined estimates go to the follow-up list, never to nowhere.
- **Parts-hold jobs get a date**, not a status. "Waiting on the part" is not a plan the customer can hear.

## End of day {#end-of-day}

Run the closing checklist in `sop.dispatch.hours` — every job closed or explained, on-call confirmed, soft holds noted for Posh.

**And the one that gets skipped:** tomorrow's first job goes to the technician by {{price:board_lock}} **with its actual start hour**. If tomorrow opens at 9 instead of 8, say 9. A tech guessing at the start time is an 8 AM window missed before the day begins.

## The escalation triggers {#escalation}

Do not sit on these. Raise to the dispatch manager immediately:

| Trigger | Why |
|---|---|
| An emergency with no available technician | Needs overtime or an on-call decision, now |
| A second bump for the same customer | About to become a complaint |
| A callback that cannot be covered today | Highest-cost failure we have |
| A technician unreachable for {{price:tech_unreachable_window}} | Safety first, schedule second |
| Repeated overruns on one job type | Pricing or training problem, not a dispatch one |

## What "worked all day" means {#discipline}

One named dispatcher owns the board at any moment, and a handoff between dispatchers is spoken, not assumed. If the board is everyone's job during a busy afternoon, it is nobody's, and the jobs that fall through are always the quiet ones — the parts-hold, the tune-up moved to "we'll call you," the estimate that never reached the coordinator.

## Related

- Hours and start-time rules: `sop.dispatch.hours`
- What moves first: `sop.dispatch.priorities`
- Duration classes, overruns and bumped jobs: `sop.dispatch.job-duration`
- The technician's close standard: `sop.field.forms`
