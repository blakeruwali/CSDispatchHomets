---
id: sop.csm.reschedules
title: Reschedules & Cancellations
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [reschedule, cancellation, save, retention, manager-review]
related: [sop.csm.availability, sop.csm.confirmation, sop.csm.de-escalation, sop.csm.no-show-recovery, reference.guarantees, sop.csm.escalation]
section: booking
order: 10
surfaces: [csm, checklist]
---

# Reschedules & Cancellations

> **A cancellation request is a booking problem you haven't solved yet, not a decision you accept.**

## When this applies {#applies}

Use this the moment a customer calls or texts to move or cancel a job that is **already on the board** — before the tech has been dispatched or while they're still en route. If the tech already showed and the customer wasn't there, that's a different failure: go to `sop.csm.no-show-recovery`. If the customer is cancelling *and* complaining about something we did, this doc gets you to the "ask why" step and then hands off — the complaint itself is handled in `sop.csm.de-escalation`.

## The execution ladder {#execution}

1. **Ask why — before you touch the calendar.** The reason tells you whether this is a genuine conflict, a save, or a complaint in disguise.
2. **Try to save the job first.** Offer two alternate windows before you offer a cancellation. See `sop.csm.availability` for what's actually open.
3. **If it's a same-day cancel**, get Dispatch approval and log the reason on the ticket before you close anything.
4. **If it's a reschedule**, lock the new window and read it back in full — `sop.csm.confirmation`.
5. **If it's the 3rd reschedule on the same job**, stop and route to a Manager instead of booking a 4th window yourself.
6. **If there's a complaint attached to the cancel**, do not close the file. Hand it to a Manager open, with the reason recorded — see `sop.csm.de-escalation`.

## What you say {#verbatim}

> "Totally fine — what's changed on your end?"

> "Before I cancel that, let me see what else I've got — I don't want you stuck waiting another week for this."

> "I can do Thursday between 2 and 4, or Saturday morning. Which works better?"

> "I hear you found a lower price elsewhere — I can't match it, but I want to make sure I've got that noted so we can look at it."

## Worked example {#example}

| Beat | Weak handling | Correct handling |
|---|---|---|
| Customer says "I need to cancel Thursday" | "Okay, no problem, I'll take that off the schedule." | "Totally fine — what's changed? Let me see if I can just move it instead." |
| Customer says "found someone cheaper" | "I can probably knock something off to keep you." | "I can't match that, but I appreciate you telling me — is the job itself still something you need done, just not with us?" |
| Customer wants a 3rd reschedule on the same ticket | CSM books window #4 without flagging it | CSM books nothing further, tells the customer "let me have my manager give you a quick call to lock this in," and opens a Manager-review note |
| Customer cancels and mentions the last tech was late | CSM closes the ticket as "cancelled — customer choice" | CSM logs the cancel reason, keeps the ticket open, and routes to Manager per `sop.csm.de-escalation` |

The difference in every row is the same: a CSM who treats "cancel" as the opening move of the call, not the closing one.

## When it goes wrong {#failures}

**You accept the cancel before asking why.** You've lost the chance to save the job and you have no reason recorded — a gap someone else has to chase down later. Recovery: call back same day, ask the reason, and log it even if the job stays cancelled.

**You price-match to keep the job.** This is not your call to make, and it teaches the customer every future price is negotiable. Recovery: undo nothing — hold the price, and flag it to a Manager as a pattern if the same customer pushes again.

**A cancel-plus-complaint gets closed as a routine cancellation.** The file looks resolved and quietly becomes a one-star review two days later. Recovery: reopen it, add the complaint detail, and route to a Manager immediately — see `sop.csm.de-escalation`.

**Third reschedule gets rebooked like the first two.** You're propping up a booking that isn't going to happen. Recovery: stop rebooking solo past two attempts — send it to Manager review.

### Hard rules

- Never price-match a competitor quote, on this call or any other.
- Never close a ticket that has a complaint attached to it — that's Manager territory.
- Never accept "call us back" as an ending. Get a window or a named next step before you hang up.
- Never skip logging the reason, even on a clean, no-drama cancellation.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| **2** | Asked why, offered alternate windows before accepting the cancel, logged the reason, followed the situation rule (Manager review, no price-match, or complaint hand-off) correctly |
| **1** | Asked why but skipped straight to cancelling, or saved the job but forgot to log the reason |
| **0** | Cancelled without asking why, price-matched, or closed a file with an attached complaint |

## Related

- Alternate windows: `sop.csm.availability`
- Customer didn't cancel, just wasn't there: `sop.csm.no-show-recovery`
- Read-back on the new window: `sop.csm.confirmation`
- Complaint handling: `sop.csm.de-escalation`
