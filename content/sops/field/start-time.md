---
id: sop.field.start-time
title: Start Time — On Site at the Top of the Window
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [start-time, arrival, window, technician, field, schedule, dispatch]
related: [sop.dispatch.hours, sop.dispatch.daily-workflow, sop.field.forms, sop.field.equipment-capture, reference.guarantees]
section: field-standards
order: 1
surfaces: [field, checklist]
acknowledgement: required
---

# Start Time — On Site at the Top of the Window

> **Your start time is the start of the customer's arrival window, standing at their door — not the time you leave the house.**

## The 60-second version {#field-card}

1. **Truck loaded and fuelled the night before.**
2. **First job acknowledged the night before**, when Dispatch sends it.
3. **Rolling by {{price:tech_shift_start}}.**
4. **On site at the top of the window** — 8 for an 8–10, not 9:55.
5. **Status the job in ServiceTitan as you go**: dispatched → on the way → on site.

## Why the top of the window, and not the end {#top-of-window}

An 8–10 window is not permission to arrive at 9:59. It is a two-hour allowance for traffic, for the job before running long, and for a supply run — and it is spent on the customer's behalf, not on ours.

**Three things ride on it:**

**The arrival guarantee is live from the top of the window.** {{price:arrival_guarantee}} — the clock starts when the window opens, not when you leave (`reference.guarantees`). Every minute you spend not arriving is a minute of that guarantee burned.

**Arriving late costs you the day, not just the call.** A 9:50 arrival on an 8–10 puts your second job at risk, and your third is then Dispatch's problem to move — which means somebody else's customer gets bumped for your morning.

**The customer took time off work.** They have been waiting since 8. Arriving at 9:55 is technically on time and reads as contempt, and it is the single most common thing in a two-star review that otherwise praises the repair.

## Status the job honestly {#statusing}

The board is only as good as the statuses on it. Dispatch is making real decisions off your status every hour.

| Status | Means |
|---|---|
| Acknowledged | You have seen the job and you are going |
| On the way | Wheels moving toward *this* address |
| On site | You are at the property |
| Working | Diagnosis or repair underway |
| Complete | Work done, equipment attached, forms in — `sop.field.forms` |

"On the way" while still at breakfast is not a shortcut, it is bad data — Dispatch books a same-day call against a truck that has not moved, and the customer at the other end of that decision pays for it.

## When you are going to be late {#late}

It happens. What is not acceptable is silence.

1. **Call Dispatch the moment you know** — not when the window closes.
2. **Give a real ETA**, the one you actually believe.
3. **Dispatch calls the customer.** Do not freelance a promise directly to the next customer; Dispatch may be moving the job entirely.
4. **A job running over by {{price:overrun_threshold}} is a call**, even if you are making good progress. The board has to move around you (`sop.dispatch.hours`).

## The night before is part of the start time {#night-before}

The morning is won the evening before:

- ☐ Truck stocked for tomorrow's job types
- ☐ Fuel in the tank
- ☐ First job acknowledged, address read, symptom read
- ☐ Anything you know you are missing flagged to Dispatch **tonight**

A 7:45 AM discovery that the part is not on the truck is a 9:30 arrival.

## Related

- How Dispatch runs your day around this: `sop.dispatch.hours`
- Closing a job properly: `sop.field.forms`
- Equipment before the work: `sop.field.equipment-capture`
- The arrival guarantee itself: `reference.guarantees`
