---
id: sop.field.start-time
title: Start Time — On Site at the Top of the Window
department: field
owner: service-manager
status: published
version: 2
last_reviewed: 2026-09-04
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

## When this applies {#applies}

Every job, every day, every window — 8–10, 10–12, 12–2, 2–4. It applies most on the first job of the day, because that arrival sets whether the rest of the board holds, but it applies identically to your second, third, and fourth stop.

## The execution ladder {#execution}

1. **The night before:** truck loaded and fuelled, first job acknowledged when Dispatch sends it, anything missing flagged to Dispatch that night, not at 7:45 AM.
2. **Rolling by {{price:tech_shift_start}}.**
3. **Status the job in ServiceTitan as it actually happens** — acknowledged, on the way, on site — in real time, not in a batch later.
4. **On site at the top of the window.** An 8–10 window means 8, not 9:55.
5. **If you know you will miss the top of the window, call Dispatch the moment you know it** — not when the window closes.
6. **If a job is running long, call it in at {{price:overrun_threshold}} over estimate**, even if progress is good, so Dispatch can move the rest of the board around you.

## What you say {#verbatim}

If you are early or exactly on time:

> "Right on schedule — I know you've been waiting since the window opened."

If you are going to be late and Dispatch has already called the customer:

> "Sorry for the wait — I want you to have a real number, not another 'on my way.' I'll be there by [specific time]."

Never say to a customer:

> "Traffic was bad" as the whole explanation, with no specific new time attached.

## Worked example {#example}

**Weak:** 8–10 window. Tech leaves the shop at 8:15 because the truck wasn't loaded the night before, hits traffic, arrives at 9:58. Technically inside the window, but the customer has been sitting since 8, missed part of their morning, and leaves a two-star review that praises the repair and dings "showed up at the very last minute, no call."

**Perfect:** Truck loaded and fuelled the night before, first job acknowledged, tech rolling by {{price:tech_shift_start}}, on site at 7:58 for the 8–10 window. The arrival guarantee clock never gets close to burning, and the customer's whole day opens up two hours earlier than it would have.

| | Weak | Perfect |
|---|---|---|
| Prep | Truck loaded morning-of | Loaded and fuelled night before |
| Arrival | 9:58 for an 8–10 | 7:58 for an 8–10 |
| Customer's day | Two hours lost waiting | Freed up immediately |
| Guarantee exposure | Nearly burned | Untouched |

## When it goes wrong {#failures}

- **You realize mid-drive you will be late.** Call Dispatch immediately with a real ETA — the one you actually believe, not an optimistic guess. Do not call the customer yourself with a promise; Dispatch may need to move the job entirely.
- **A prior job runs long and threatens the next window.** Call it in at {{price:overrun_threshold}} over, even while making good progress. Silence is the failure, not the overrun itself.
- **You discover at the customer's door that the truck is missing a part.** That should have been caught the night before during truck-stocking. Flag it to Dispatch now rather than starting a job you can't finish.
- **You are unreachable for {{price:tech_unreachable_window}}.** This escalates to the dispatch manager automatically — do not let your phone go dark mid-route.

### Hard rules

- Never say "on the way" in ServiceTitan before you have actually left for that address.
- Never freelance a new arrival time directly to the customer — that is Dispatch's call to make and communicate.
- Never let a job run past its estimate without notifying Dispatch, regardless of how confident you are.
- Never treat "technically inside the window" as the same thing as "at the top of the window."

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | On site at or before the top of every window that day; statuses updated in real time; any delay called in proactively with a real ETA |
| 1 | On site within the window but late enough to be noticeable, or a status update lagged without customer impact |
| 0 | Arrival at the tail end of the window with no advance notice, or a status falsified ("on the way" while not moving) |

## Related

- How Dispatch runs your day around this: `sop.dispatch.hours`
- Closing a job properly: `sop.field.forms`
- Equipment before the work: `sop.field.equipment-capture`
- The arrival guarantee itself: `reference.guarantees`
