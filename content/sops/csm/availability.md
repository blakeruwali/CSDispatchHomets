---
id: sop.csm.availability
title: Availability & Booking Windows
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [availability, window, booking, schedule, same-day, dispatch]
related: [sop.csm.booking-authority, sop.csm.confirmation, sop.csm.reschedules, sop.csm.service-area, sop.csm.dispatch-handoff, sop.dispatch.job-duration, sop.dispatch.priorities]
section: booking
order: 1
surfaces: [csm, checklist]
---

# Availability & Booking Windows

> **Offer two windows and stop talking — the customer picks, they don't negotiate.**

## When this applies {#applies}

Every call where a job gets scheduled: new booking, repeat customer, marketplace lead, or a callback from a text. It ends the moment a window is agreed — read-back and confirmation live in `sop.csm.confirmation`. Moving an already-booked window is not this document; that's `sop.csm.reschedules`. The board itself, who's on it and where they're routed, belongs to Dispatch, not to you — see `sop.dispatch.job-duration` and `sop.dispatch.priorities`.

## The execution ladder {#execution}

1. **Get the job type and symptom before you offer anything.** A window offered before you know what's wrong is a guess Dispatch has to unwind later.
2. **Pick two windows from {{price:service_windows}}.** Always two, never one, never "whenever." One window sounds like an ultimatum; an open question invites a request outside our hours.
3. **Ask "which," not "if."** The question format decides whether the customer negotiates or chooses. "Which works better" assumes a booking is happening; "does this work for you" invites a counter-offer.
4. **If both offered windows are declined, do not free-associate a third.** Ask what part of the day is bad and offer two more from the same core list before you go anywhere near overflow.
5. **Overflow ({{price:service_windows_overflow}}), same-day after {{price:same_day_cutoff}}, evenings, weekends, and holidays all require Dispatch approval before you say them out loud.** Not after you've offered them — before. We run {{price:tech_headcount}} against {{price:tech_daily_capacity}}, and those hours only open when the day is genuinely clear.
6. **Once they choose, treat it as booked** — move straight into `sop.csm.confirmation`. Don't re-ask "does that work" a second time; you already have your answer.

## What you say {#verbatim}

> "I can get a tech out between 8 and 10 this morning, or 12 to 2 this afternoon — which works better?"

> "Both of those are tough? What part of the day is easier — morning or after lunch — and I'll find you something in that window."

> "That's outside our standard hours, so let me check with dispatch before I promise it — can I call you right back?"

> "Standard windows come with a 90-minute arrival guarantee, so once we lock this in, you're covered."

## Worked example {#example}

| Weak | Perfect |
|---|---|
| "When's good for you?" | "I can do 8 to 10 this morning, or 2 to 4 this afternoon — which works better?" |
| Customer says "Can you do 6pm?" → CSM says "Sure, let me put you down for 6" | CSM says "Let me check with dispatch on an evening slot and call you right back in five minutes" |
| Customer declines both offered windows → CSM invents a third window on the spot | CSM asks "Morning or afternoon generally easier?" then offers two windows from that half of the day |
| CSM books same-day at 4pm without checking the cutoff | CSM checks {{price:same_day_cutoff}}, sees it's past, and either offers tomorrow's core windows or gets Dispatch sign-off first |

**Transcript — the ask that works:**

> **CSM:** "I've got the details — furnace not heating, gas, two-story. I can get a tech out today between 12 and 2, or between 2 and 4. Which works better?"
>
> **Customer:** "Neither, I'm not home until 5."
>
> **CSM:** "Got it — that's outside our standard hours, so let me check with dispatch before I promise anything. Can I call you back in a few minutes, or would tomorrow morning between 8 and 10 work instead?"
>
> **Customer:** "Tomorrow morning's fine."
>
> **CSM:** "Perfect, locking in 8 to 10 tomorrow."

## When it goes wrong {#failures}

- **Customer wants a time we can't offer without approval.** Say so plainly, put them on a brief hold or promise a callback, and get Dispatch's answer before committing — never "pencil it in" and hope.
- **Both core windows declined and no overflow is available.** Offer the next day's core windows rather than inventing an in-between slot that doesn't exist on the board.
- **You already implied a window before checking approval.** Call back immediately to correct it. A retracted promise stings, but a broken one costs the account.
- **Same-day request lands right at the cutoff.** Treat it as after-cutoff and check with Dispatch — don't round in the customer's favor on the clock.

### Hard rules

- Never ask an open-ended "when works for you" question.
- Never offer overflow, after-cutoff same-day, evening, weekend, or holiday windows without Dispatch approval first.
- Never promise a specific tech or arrival time ahead of what Dispatch confirms.
- Never leave a declined-window call unresolved — always land on a real day and window before hanging up.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| 2 | Offered two concrete windows, used "which" framing, and got Dispatch approval before offering anything outside standard hours |
| 1 | Booked a valid window but asked an open-ended question first, or hedged on approval without fully skipping it |
| 0 | Promised an overflow/after-hours/same-day-after-cutoff window without Dispatch approval, or left the call without a booked window |

## Related

- Read-back at the end of booking: `sop.csm.confirmation`
- Changing a booked window: `sop.csm.reschedules`
- Dispatch's own capacity math: `sop.dispatch.job-duration`
