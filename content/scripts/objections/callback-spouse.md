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

## Why the customer is saying this {#why-saying}

"I need to talk to my spouse" is used in two very different ways. Treating both the same costs bookings.

| What they say | What they usually mean | How to handle |
| --- | --- | --- |
| "I need to talk to my spouse." (soft, vague) | Often a polite smokescreen — they are not convinced or want to end the call without conflict. | Gently surface the real concern before offering a hold. See [smokescreen vs. genuine](#smokescreen). |
| "My wife/husband makes these decisions." (specific, factual) | They genuinely cannot commit without a second decision-maker. | Offer to reserve the slot while they talk; remove the obligation to keep it. |
| "Call me back in an hour." | They need space to think, compare, or verify funds. | Hold the slot and set a concrete callback time — do not leave it open-ended. |
| "I want to check with someone first." | They may be a tenant, property manager, or adult child coordinating for the owner. | Ask who the decision-maker is, then offer to send the appointment details to both parties. |
| "I'm not ready to book right now." | They are worried about being locked into a fee or a time they cannot change. | Lead with cancellation flexibility before asking for the slot. |
| "Let me think about it." | They may not trust the value yet, or they are comparison shopping. | Recap the specific risk of waiting — no heat, no hot water, leak damage — then hold the slot. |
| "Send me something to look at." | They want proof they can share with a spouse or landlord. | Offer to text/email the appointment summary and a short explanation of the visit fee and credit policy. |

The goal is not to talk them out of consulting someone else. The goal is to find out what is actually happening and keep the appointment alive if there is real interest.

## Smokescreen vs. genuine {#smokescreen}

Most "I need to talk to my spouse" responses are not about the spouse. They are about doubt, pressure, or wanting to get off the phone. The CSM's job is to separate the two without being pushy.

### Signs it is a smokescreen

- They cannot name what the spouse needs to know.
- They have already decided "no" several times in the conversation.
- The tone is final, not exploratory.
- They offer to "call you back" rather than asking you to hold the slot.

### Signs it is genuine

- They name the decision-maker and what that person decides.
- They ask what to tell their spouse.
- They want information sent to another person.
- They are apologetic or explain logistics.

### The respectful test

Before offering the soft hold, ask one clarifying question:

> "Totally understand. Is there a specific concern your spouse usually has — like the price, the timing, or what the technician will actually do — so I can make sure I send you both the right information?"

This does two things:

1. It reveals the real objection without calling them a liar.
2. It gives you the actual issue to handle next.

If they give a vague answer like "I just need to talk to them," treat it as a soft no and use the smokescreen path below. If they answer with something specific — price, timing, trust — handle that objection directly.

## Why it works {#why}

When it is genuine, this is not an objection to overcome — it is a decision that needs a second person. Pushing back makes us the company that pressured them.

When it is a smokescreen, the same response still works because it removes the cost of saying yes. Reserving a slot they can walk away from lets the customer take action right now without needing permission. "No obligation, we can reschedule or cancel" answers the fear of locking in before the conversation happens.

**Say it unconditionally.** {{price:cancellation_fee}} — there is no deadline to beat, so don't invent one. "No charge if you cancel by tomorrow" implies a charge on Wednesday and quietly weakens the close.


## How to handle it {#execution}

1. **Agree first.** "Of course — that makes total sense."
2. **Test for the real concern.** Ask the respectful test question to separate genuine consultation from a soft no.
3. **If genuine:** offer the hold while they talk. "While you speak with your wife, I can reserve the slot for you."
4. **If smokescreen:** name the likely concern and ask permission to address it. "A lot of people just want to make sure they're not overpaying. Is that the main thing, or is it something else?"
5. **Remove the risk.** State the cancellation policy clearly: "If anything changes, there's no obligation, and we can reschedule or cancel, no problem."
6. **Ask for the booking.** "Would tomorrow between 8 and 12 work, or would 1 to 5 be better?"
7. **Set the soft hold properly in ServiceTitan.** See `sop.csm.availability`.

## Worked example — genuine {#example-genuine}

**Caller:** "I need to talk to my wife first. Can you call me back?"

**CSM:** "Of course — that makes total sense. Is there a specific concern she usually has, like the price or the timing, so I can make sure I send you both the right info?"

**Caller:** "Yeah, she usually wants to know what the technician is going to do and how much it costs."

**CSM:** "Got it. It's a $199 diagnostic, and if you approve the repair that day, it gets credited to the work. The technician does a full system check and gives you a written flat price before anything is done. While you talk it through with her, I can hold a slot for you — no obligation, and you can cancel or reschedule if anything changes. Would tomorrow between 8 and 12 work, or would 1 to 5 be better?"

## Worked example — smokescreen {#example-smokescreen}

**Caller:** "I need to talk to my wife first. Can you call me back?"

**CSM:** "Of course — that makes total sense. Is there a specific concern she usually has, like the price or the timing, so I can send you both the right info?"

**Caller:** "I just need to talk to her."

**CSM:** "No problem. A lot of people want to make sure they're comfortable with the fee before booking. Is the $199 diagnostic the main thing, or is it something else?"

**Caller:** "Yeah, that seems high just to come out."

**CSM:** "I hear you. That $199 gets a licensed tech to your door, a full and accurate diagnosis, a thorough check of the entire system, and a written flat price before any work starts. If you approve the repair, that fee is credited to the same-day work. While you two talk it over, I can reserve a slot for you — no obligation, and you can cancel or reschedule if anything changes. Would tomorrow between 8 and 12 work, or would 1 to 5 be better?"


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
