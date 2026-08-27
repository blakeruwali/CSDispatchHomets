---
id: sop.dispatch.priorities
title: Job Priorities — What Moves First
department: dispatch
owner: dispatch-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [dispatch, priority, triage, board, emergency, membership, callback, routing]
related: [sop.dispatch.hours, sop.dispatch.daily-workflow, protocol.emergency.triage, reference.membership-plans, sop.csm.warranty-callback]
section: dispatch-board
order: 1
surfaces: [dispatch, checklist]
---

# Job Priorities — What Moves First

> When two jobs want the same technician, this page decides. It is a ladder, not a discussion.

## The priority ladder {#ladder}

| P | Class | Examples | Response |
|---|---|---|---|
| **P1** | Life safety | Gas smell, CO alarm, burning/sparking, active flooding | Immediate. Customer is directed to 911/utility first — `protocol.emergency.triage` |
| **P2** | Emergency no-service | No heat under {{price:emergency_temp_cold}}, no AC over {{price:emergency_temp_hot}} with a vulnerable occupant, no water, sewage backup | Same day. Interrupt the board |
| **P3** | Emergency install / system replacement | System dead and unrepairable, customer has approved a replacement, no heat or no cooling until it goes in | Same day, and it **outranks standard service** — see the revenue rule below |
| **P4** | Callback / warranty | We were just there and it is not fixed | Same day where possible, next morning at the latest. **Never behind new work** |
| **P5** | Member service | Active Home+ or Business+ with a service issue | Priority scheduling ahead of non-members — that is what they bought |
| **P6** | Commercial down | Commercial unit down, business impacted, no vulnerable-occupant factor | Same or next day, coordinated with the site contact |
| **P7** | Standard service | Non-member service call, system running but faulty | Next available core window |
| **P8** | Sold install / estimate | Scheduled install, quoted estimate visit | Booked date — protected, not raided for P7 work |
| **P9** | Maintenance / tune-up | Membership visits, seasonal tune-ups | The flexible layer. First to move, last to cancel |

**Priority is set at booking by the CSM and verified by Dispatch.** An untagged emergency is an emergency that waits in line, which is the whole reason the tag exists (`sop.csm.dispatch-handoff`).

With {{price:tech_headcount}} and {{price:tech_daily_capacity}}, this ladder is not theoretical — on most days something has to move, and this page says what.

## The four rules that decide the hard calls {#rules}

**1. A callback outranks new revenue.** Always. It feels backwards on a busy day and it is not: the callback customer already paid us and is currently deciding what to tell their neighbours. See `sop.csm.warranty-callback`.

**2. Members go first among equals.** Two identical no-cooling calls, one tech: the active member gets the earlier slot. Priority scheduling is a printed benefit of Home+ and Business+ (`reference.membership-plans`) and a benefit we do not honour is a refund waiting to happen.

**3. Between two non-emergencies, the larger job wins.** Once life safety, emergencies and callbacks are placed, sequence what remains by value to the business. An approved install or a replacement estimate on a dead system is worth more than a routine diagnostic, and it is also the customer with the most on the line. Revenue never outranks P1–P4 — it decides the order *underneath* them.

**4. An emergency install at the end of the day takes the slot.** A customer with an approved replacement and no heat or no cooling gets the truck, even when it lands on top of a booked service call. The displaced service call does not simply vanish — Dispatch does one of three things, in this order:

1. **Hand it to a subcontractor** who can cover it in the original window.
2. **Move it to the next day**, to a named window, agreed with the customer on a live call.
3. **Escalate to the dispatch manager** if the customer refuses both or the job is a callback or a member in distress — those are not the ones you move.

Whichever path, the customer hears it from us **before their window opens**, with a specific new time. Log the reason on both tickets.

**5. Maintenance is the shock absorber.** When the day breaks, tune-ups move — never callbacks, never members-in-distress. Moving a tune-up is a phone call; moving a no-heat is a lost customer. But **move it to a real date on the call**, never to "we'll ring you."

## Never say "we're fully booked" to a P1, P2 or P3 {#never-full}

The board is not the customer's problem. Emergencies get a slot; creating one is the dispatch manager's job — overtime, a re-sequenced afternoon, or the on-call tech. Mirrors the CSM rule in `protocol.emergency.triage`.

## Skill and qualification override sequence {#skill}

Priority decides *what* goes next. It does not decide *who*.

- Send the technician **qualified for the equipment**, not merely the nearest one. A wasted truck roll on a system a tech cannot work costs the whole slot.
- **Commercial refrigeration, boilers, VRF and gas piping are qualification-gated.** If the qualified tech is two hours out, the job waits for them — it does not go to whoever is free.
- **Continuity beats proximity on a callback.** Send the original technician back where possible; they know what they did. Send someone else only when the customer has asked for it, or the relationship is already damaged.

## Re-sequencing during the day {#resequence}

When a P1, P2 or P3 lands mid-day:

1. **Find the slack, not the victim** — an unstarted P9 or a P7 with a wide window.
2. **With one truck, "slack" often means a subcontractor or tomorrow.** Decide which before you pick up the phone, so the customer hears a plan and not a problem.
3. **Reassign, then call.** The displaced customer hears a new time, not an apology with no date attached.
4. **Displace the same customer twice and it escalates to the dispatch manager.** Two bumps is how a routine job becomes a complaint.
5. **Log the reason on both tickets.** The pattern in those notes is next quarter's staffing case.

## Related

- Life-safety matrix (governs everything here): `protocol.emergency.triage`
- Hour-by-hour routine: `sop.dispatch.daily-workflow`
- Member benefits we are honouring: `reference.membership-plans`
- Callback handling: `sop.csm.warranty-callback`
