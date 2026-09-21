---
id: sop.dispatch.priorities
title: Job Priorities — What Moves First
department: dispatch
owner: dispatch-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [dispatch, priority, triage, board, emergency, membership, callback, routing]
related: [sop.dispatch.hours, sop.dispatch.daily-workflow, sop.dispatch.job-duration, protocol.emergency.triage, reference.membership-plans, sop.csm.warranty-callback]
section: dispatch-board
order: 1
surfaces: [dispatch, checklist]
---

# Job Priorities — What Moves First

> **When two jobs want the same technician, this ladder decides. It is worked in order, never argued with.**

## When this applies {#applies}

Every time Dispatch has more demand than trucks — a P1 lands mid-morning, two customers want the same 2–4, or an emergency install collides with a booked service call. On a slow day the ladder is invisible because nothing collides. On a normal day, with {{price:tech_headcount}} and {{price:tech_daily_capacity}}, something collides most afternoons, and this page says what moves.

## The execution ladder {#execution}

Work top to bottom. Nothing below outranks anything above it.

| P | Class | Examples | Response |
|---|---|---|---|
| **P1** | Life safety | Gas smell, CO alarm, burning/sparking, active flooding | Immediate — customer to 911/utility first, `protocol.emergency.triage` |
| **P2** | Emergency no-service | No heat under {{price:emergency_temp_cold}}, no AC over {{price:emergency_temp_hot}} with a vulnerable occupant, no water, sewage backup | Same day, interrupt the board |
| **P3** | Emergency install / system replacement | System dead and unrepairable, replacement approved, no heat or cooling until it's in | Same day, outranks standard service |
| **P4** | Callback / warranty | We were just there and it isn't fixed | Same day where possible, next morning at the latest — never behind new work |
| **P5** | Member service | Active Home+ or Business+ with a service issue | Priority scheduling ahead of non-members |
| **P6** | Commercial down | Unit down, business impacted, no vulnerable-occupant factor | Same or next day, coordinated with the site contact |
| **P7** | Standard service | Non-member call, system running but faulty | Next available core window |
| **P8** | Sold install / estimate | Scheduled install, quoted estimate visit | Booked date — protected, never raided for P7 work |
| **P9** | Maintenance / tune-up | Membership visits, seasonal tune-ups | The flexible layer — first to move, last to cancel |

1. **Priority is set at booking by the CSM, verified by Dispatch.** An untagged emergency is an emergency stuck in line — check the tag before you touch the sequence.
2. **A callback outranks new revenue, always.** That customer already paid us and is deciding what to tell the neighbours (`sop.csm.warranty-callback`).
3. **Members go first among equals.** Two identical no-cooling calls, one tech — the active member gets the earlier slot; it's a printed benefit, not a courtesy.
4. **Between two non-emergencies, the larger job wins**, once life safety, emergencies and callbacks are placed.
5. **An emergency install at day's end still takes the slot** — see the displacement sequence below.
6. **Maintenance absorbs the shock.** When the day breaks, tune-ups move first, real date on the call, never "we'll ring you."
7. **Skill gates the person, priority gates the order.** Send the tech qualified for the equipment, not merely the nearest one — commercial refrigeration, boilers, VRF and gas piping wait for the qualified tech rather than going to whoever is free.

## What you say {#verbatim}

To the customer being displaced by an emergency install:

> "We have a family with no heat and an approved system going in today — I need to move your afternoon appointment. I can have someone out tomorrow at 10, or I can send a partner crew this afternoon. Which works better?"

To the technician, reassigning mid-route:

> "Skip the Massapequa job for now — head to Bellmore, it's a P2 no-heat. I'm moving Massapequa to 3 PM with someone else or tomorrow, your call once you're rolling."

To the CSM asking to slot a same-day request:

> "That's a P7 — next open core window is 2–4, or I can put them on tomorrow's 8 if they'd rather have a firm morning."

To a customer told "we're fully booked" who is actually a P1/P2/P3:

> "We are never too full for this — I'm finding you a truck right now, give me five minutes."

## Worked example — the 1:30 collision {#example}

Board at 1:30: four techs' worth of work, one truck. A call comes in — approved system replacement, no cooling, 95°F outside, elderly occupant. It has to go today.

| Step | Action |
|---|---|
| 1 | Confirm the tag — P3, approved replacement, vulnerable occupant present, so it also reads P2 in urgency |
| 2 | Scan the afternoon board for slack — a P9 tune-up at 2–4 is the only thing that isn't a callback or a member |
| 3 | Reassign the tech to the P3 install, moving the tune-up |
| 4 | Call the tune-up customer before 2 PM: "I need to move your visit — a family's system just failed. Can I get you in Thursday at 10, tune-up fee waived as a thank-you?" |
| 5 | Log the reason on both tickets — the P3 ticket notes what it displaced, the P9 ticket notes why |

If the only slack had been a callback or a member in distress instead of a tune-up, the answer changes — subcontract the P3, or escalate to the dispatch manager rather than bump the customer this ladder protects.

## When it goes wrong {#failures}

**Two P1/P2 calls land at once with one truck.** Escalate to the dispatch manager immediately for overtime or the on-call tech — this ladder does not have a tiebreaker built in on purpose, because the answer is "get a second truck," not "pick one."

**The CSM books a P7 as urgent to get the customer off the phone.** Dispatch verifies the tag on arrival, downgrades it if it doesn't meet the P1–P4 bar, and books it at its real priority — flag the pattern to the CSM lead if it repeats.

**A displaced customer refuses both the subcontractor and the next-day slot.** Escalate to the dispatch manager. This is not a Dispatch-level call to force.

**The same customer gets bumped twice.** Automatic escalation to the dispatch manager — two bumps is how a routine job becomes a churn risk, and it needs a manager's judgment, not another rebook.

### Hard rules

- Never tell a P1, P2 or P3 "we're fully booked."
- Never move a callback or a member in distress to make room for new revenue.
- Never send an unqualified tech to a gated job because they're the nearest one.
- Never bump the same customer twice without a manager on the call.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| **2** | Correct priority applied, displaced customer called before their window with a named time, reason logged on both tickets |
| **1** | Correct priority applied but the call to the displaced customer was late or the reason wasn't logged |
| **0** | Wrong job displaced, a P1–P4 told "fully booked," or a customer bumped twice without escalation |

## Related

- Life-safety matrix that governs everything here: `protocol.emergency.triage`
- Hour-by-hour routine: `sop.dispatch.daily-workflow`
- Duration classes and the bumped job: `sop.dispatch.job-duration`
- Coverage hours and after-hours handoff: `sop.dispatch.hours`
- Member benefits being honoured: `reference.membership-plans`
- Callback handling: `sop.csm.warranty-callback`
