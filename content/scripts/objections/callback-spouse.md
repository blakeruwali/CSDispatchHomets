---
id: script.objection.callback-spouse
title: Objection — "Call me back / I need to talk to my spouse"
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-10
review_cadence_days: 90
tags: [objection, callback, spouse, decision-maker, soft-hold, script]
related: [sop.csm.availability, sop.csm.reschedules, script.objection.price]
section: booking
order: 7
surfaces: [csm, checklist]
---

# Objection — "Call me back / I need to talk to my spouse"

## The response {#response}

> "Of course — that makes total sense. While you speak with your wife, I can go ahead and reserve the slot for you. If anything changes, there's no obligation, and we can reschedule or cancel, no problem."

## Why it works {#why}

This is not an objection to overcome — it's a legitimate decision that needs a second person. Pushing back makes us the company that pressured them.

The move is to remove the cost of saying yes. Reserving a slot they can walk away from lets the customer take action right now without needing permission. "No obligation, we can reschedule or cancel" answers the fear of locking in before the conversation happens. Most customers keep the slot.

**Say it unconditionally.** {{price:cancellation_fee}} — there is no deadline to beat, so don't invent one. "No charge if you cancel by tomorrow" implies a charge on Wednesday and quietly weakens the close.

## How to handle it {#execution}

1. **Agree first.** "Of course — that makes total sense."
2. **Offer the hold.** Tie it to their conversation so it feels helpful, not pushy. "While you speak with your wife, I can reserve the slot for you."
3. **Remove the risk.** State the cancellation policy clearly: "If anything changes, there's no obligation, and we can reschedule or cancel, no problem."
4. **Ask for the booking.** "Would tomorrow between 8 and 12 work, or would 1 to 5 be better?"
5. **Set the soft hold properly in ServiceTitan.** See `sop.csm.availability`.

## Worked example {#example}

**Caller:** "I need to talk to my wife first. Can you call me back?"

**CSM:** "Of course — that makes total sense. While you speak with your wife, I can go ahead and reserve the slot for you. If anything changes, there's no obligation, and we can reschedule or cancel, no problem. Would tomorrow between 8 and 12 work, or would 1 to 5 be better?"

## Hold the slot properly {#soft-hold}

- Book it in ServiceTitan like any other job — see `sop.csm.availability`.
- Note it as a soft hold so Dispatch and Posh know its status. See `sop.csm.coverage`.
- Note on the ticket that the customer is deciding with a second person, so a follow-up call doesn't come in cold.

## What not to do {#avoid}

- ❌ Don't ask to speak to the spouse. Ever.
- ❌ Don't manufacture urgency we can't back — no invented "last slot today."
- ❌ Don't leave with "give us a call back when you decide." That's the version that never calls.

## Related

- Booking windows and Dispatch approval: `sop.csm.availability`
- If they later cancel: `sop.csm.reschedules`
