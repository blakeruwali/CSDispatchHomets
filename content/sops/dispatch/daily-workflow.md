---
id: sop.dispatch.daily-workflow
title: Workflow During the Day — Hour by Hour
department: dispatch
owner: dispatch-manager
status: published
version: 3
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [dispatch, workflow, daily, routine, board, servicetitan, handoff]
related: [sop.dispatch.hours, sop.dispatch.priorities, sop.dispatch.job-duration, sop.dispatch.no-pause, sop.field.start-time, sop.field.forms, sop.csm.coverage]
section: dispatch-board
order: 2
surfaces: [dispatch, checklist]
---

# Workflow During the Day — Hour by Hour

> **The board is never "set." It is worked, all day, by one named person, from before the first truck moves to after the last job closes.**

## When this applies {#applies}

Every day Dispatch runs, from pre-shift board review through end-of-day close-out. It is the spine the other dispatch SOPs hang off of — priority calls (`sop.dispatch.priorities`), duration and overrun decisions (`sop.dispatch.job-duration`), and the coverage window itself (`sop.dispatch.hours`) all happen at a specific point in the hour-by-hour shape below.

## The execution ladder {#execution}

**Pre-shift, before {{price:dispatch_hours}} opens**

1. Read the Posh overnight log and confirm every emergency was actually dispatched, not just recorded (`sop.csm.coverage`).
2. Confirm every technician acknowledged their first job and start hour — the real time went out the night before ({{price:first_job_notice}}); at 7 AM you're confirming they read it. No acknowledgement by {{price:tech_ack_deadline}} is a phone call.
3. Sanity-check the geography — a first job in eastern Suffolk at 8 AM is a fix you make now, not at noon.
4. Confirm parts on hold have arrived for any job scheduled today. A parts job dispatched without the part is a wasted slot and an angry customer.
5. Check the day's capacity against the emergency season — we plan {{price:tech_daily_capacity}}; under {{price:emergency_temp_cold}} or over {{price:emergency_temp_hot}}, hold a slot open. It will get used.
6. Verify the diagnostic fee posture on every dispatched ticket before the tech goes en route (see the table below) — that mismatch belongs to Dispatch, not to the tech standing at the door.

**Morning — first windows**

7. The tech is on site at the top of the window — {{price:first_job_start_default}} for an 8–10. Leaving at {{price:tech_shift_start}} is the means, not the promise.
8. Watch arrivals in real time. The {{price:arrival_guarantee}} clock starts at the top of the booked window; a tech not on site by then is a call to the customer **now**, with a named arrival time — full rule in `sop.dispatch.hours`.
9. Confirm each tech has exactly the next job visible and nothing further.
10. Take the CSM's same-day requests — approve or decline against `sop.dispatch.priorities`, and answer fast; the CSM has a customer on the line. Overflow windows ({{price:service_windows_overflow}}) are yours to grant, never the CSM's to offer.

**Midday — the re-plan**

11. Re-forecast every remaining job against actual finish times, not scheduled ones.
12. Identify at-risk windows — the afternoon jobs that won't be met if nothing changes.
13. Call those customers before their window opens, every time, with a specific time.
14. Pick one outcome per at-risk job from the decision table in `sop.dispatch.job-duration` — keep, subcontract, split, rebook, or escalate.
15. Move the flexible layer first — tune-ups and maintenance, never callbacks or members in distress.
16. Check {{price:same_day_cutoff}} — after it, same-day bookings are Dispatch's call only.

**Afternoon — closing the loop**

17. Chase open jobs — {{price:job_check_in}} with no update is a check-in, not a wait.
18. An emergency install landing late takes the slot; the displaced job gets subcontracted or rebooked to a named window, never dropped (`sop.dispatch.priorities`).
19. Quality-gate every close — equipment attached, forms complete, photos present (`sop.field.forms`). A thin close goes back to the tech today.
20. Route sold work same day — approved estimates to the install coordinator, declined estimates to the follow-up list, never to nowhere.
21. Parts-hold jobs get a date, not a status.

**End of day**

22. Run the closing checklist in `sop.dispatch.hours` — every job closed or explained, on-call confirmed, soft holds noted for Posh.
23. Confirm zero paused jobs on the board — any found paused get closed and re-dispatched today, not carried over (`sop.dispatch.no-pause`).
24. Tomorrow's first job goes to the technician by {{price:board_lock}} with its actual start hour.

## What you say {#verbatim}

To a technician at 6:55 AM who hasn't acknowledged their first job:

> "Just confirming you saw the board — you're 8 AM in Levittown, moving by 7:30."

To the CSM asking for a same-day overflow slot at 3:15 PM:

> "I can do a 6–8 if the tech's clear by then — let me check his afternoon and call you back in ten minutes, don't promise it yet."

To a technician mid-afternoon, closing the loop on a quiet job:

> "You've been on that job 90 minutes with no update — give me a status, even if it's 'almost done.'"

To the incoming dispatcher at shift handoff:

> "Board's clean, one soft hold in Wantagh for tomorrow, Rivera's on-call tonight, and the Baldwin boiler still needs its continuation appointment booked before end of day."

## Worked example — a full day on the board {#example}

| Time | What Dispatch does |
|---|---|
| 6:45 AM | Posh log reviewed, overnight emergency confirmed dispatched |
| 6:55 AM | Tech ack confirmed for the 8 AM Levittown job; ticket fee posture checked against what the CSM quoted |
| 8:00 AM | Arrival clocked; guarantee clock live |
| 9:40 AM | CSM calls with a same-day P7 request — declined for the 12–2 slot, offered tomorrow instead since the afternoon is already tight |
| 11:15 AM | Midday re-plan: 12–2 job is now at risk because the 10–12 ran long; customer called with a 1:30 arrival before the window opens |
| 2:20 PM | Emergency install call comes in — approved replacement, no cooling, 95°F outside; the 2–4 tune-up gets bumped to Thursday, diagnostic waived, logged on both tickets |
| 4:45 PM | Job check-in on the emergency install — still on site, status "compressor set, finishing electrical" |
| 5:50 PM | Closing checklist run: every job closed or explained, on-call confirmed for tonight, tomorrow's first job dispatched with real start hour |

Nothing on this list is exceptional — it's the ordinary shape of a day with one truck and four windows that keep moving under real conditions.

## When it goes wrong {#failures}

**A tech goes unreachable mid-afternoon.** Escalate to the dispatch manager immediately once past {{price:tech_unreachable_window}} — safety first, schedule second; do not keep calling the customer with guesses while the tech is unaccounted for.

**Two customers are at risk in the same 30-minute window and only one call gets made.** Call both — a rushed 90-second call beats a silent no-show every time; if truly out of time, call the earlier window first since it fails sooner.

**A job closes with equipment missing or forms incomplete.** Send it back to the technician who closed it the same day. Do not let it sit until the next morning — the customer and the invoice both need it right now.

**The board shows a paused job.** Convert it same day: close what was done, book the continuation, dispatch it like any other appointment (`sop.dispatch.no-pause`). It never carries over as "paused."

### Hard rules

- Never let the board sit unattended during {{price:dispatch_hours}}.
- Never promise a same-day slot the tech doesn't actually have.
- Never let a paused job survive to the next shift.
- Never hand off the board without naming the next dispatcher out loud.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| **2** | Pre-shift checks complete, every at-risk window called ahead, every close quality-gated, zero paused jobs, tomorrow dispatched by {{price:board_lock}} |
| **1** | One step missed but caught and corrected same day with no customer left uninformed |
| **0** | A missed window with no call, a paused job left overnight, or tomorrow's board not dispatched on time |

## Related

- Hours and start-time rules: `sop.dispatch.hours`
- What moves first: `sop.dispatch.priorities`
- Duration classes, overruns and bumped jobs: `sop.dispatch.job-duration`
- Why we never pause a job: `sop.dispatch.no-pause`
- The technician's close standard: `sop.field.forms`
