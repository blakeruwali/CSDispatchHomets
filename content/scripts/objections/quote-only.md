---
id: script.objection.quote-only
title: Objection — "I just want a quote"
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [objection, quote, estimate, phone-quote, script]
related: [sop.csm.service-type, sop.csm.diagnostic-fee, script.objection.price]
section: booking
order: 6
surfaces: [csm, checklist]
---

# Objection — "I just want a quote"

## The response {#response}

> "We can't quote a repair without seeing the system — every unit is different. The {{price:diagnostic_residential}} gets you a real number in writing, not a guess."

## First, make sure it's actually an objection {#clarify}

"I just want a quote" is ambiguous — it can mean *repair* (billable diagnostic) or *replacement* (free estimate). Clarify before you handle it:

> "Happy to — are you looking to get the system you have fixed, or looking at replacing it?"

If they're replacing, there is no objection to handle: the estimate is {{price:estimate_install}} and saying so closes the call. See `sop.csm.service-type`. Handling a non-objection is how we talk ourselves out of a free-estimate booking.

## Why we don't quote repairs by phone {#why}

A phone number is a guess, and a guess we later revise on the doorstep costs us the job and the trust. Frame it as protection for them, not policy for us: a written on-site price is a number they can hold us to.

Remember what a phone quote actually does for the customer: **it lets them shop our guess against someone else's guess.** The visit is what converts. Every phone quote is a booking we chose not to make.

## The handling ladder {#ladder}

1. **Clarify the conversation first** (fix or replace?). Half of these calls are free-estimate bookings in disguise — don't handle an objection that isn't there.
2. **Agree with the goal.** "You want a number — that's fair, and you'll get one: in writing, today." You're on their side; the visit is how they get what they asked for.
3. **Explain why a phone number hurts *them*.** A guess that doubles on the doorstep is worse than no guess. Ours is in writing before work starts — they can hold us to it.
4. **Shrink the commitment.** The {{price:diagnostic_residential}} isn't the repair — it's the answer. If they don't like the repair price, they owe the fee and nothing else.
5. **Close on a window.** Don't ask *if* they want a tech — offer the window. "I can have someone there today between 2 and 4 — does that work?"

## Perfect execution — full call {#perfect}

Customer called about a furnace cycling on and off. Watch the ladder in action:

> **Customer:** "I don't want a service call, I just want a quote. How much to fix it?"
>
> **CSM:** "Happy to get you a number — quick question so I get you the right one: are you looking to fix the furnace you have, or are you thinking about replacing it?"
>
> **Customer:** "Fix it. It's only six years old."
>
> **CSM:** "Makes sense — at six years it's almost always worth repairing. Here's the honest answer: I can't give you a real number over the phone, because cycling can be a $200 sensor or a $900 board, and anyone who quotes you blind is guessing. What I *can* do is get a licensed tech there today. The {{price:diagnostic_residential}} covers the visit and a full diagnosis, you get the repair price **in writing** before anything starts, and if you approve the work, that fee is credited toward it."
>
> **Customer:** "So I pay $199 just to find out?"
>
> **CSM:** "You pay $199 for the *answer* — a written number you can hold us to, not a guess that changes on the doorstep. If the repair price doesn't work for you, you owe the $199 and nothing else, and you keep the diagnosis."
>
> **Customer:** "…Okay. How soon can someone come?"
>
> **CSM:** "Today between 2 and 4. Can I get your address?"

**Result:** diagnostic booked at full price, no ballpark given, customer framed as protected — total handling under two minutes.

### Why each beat worked {#perfect-why}

| Beat | What the CSM did | What a weak CSM does |
|---|---|---|
| Opening | Clarified fix vs. replace before handling | Assumes repair and starts defending the fee |
| Phone quote ask | Agreed with the *goal* (a number), redirected the *method* (the visit) | "It depends…" — dead air, customer hangs up |
| "Pay just to find out?" | Sold the answer, not the visit — written price, capped downside | Apologizes or hints the fee might be waived |
| Close | Offered a specific window today | "Call us back when you're ready" |

## Hard rules {#rules}

- **Never give a repair price range over the phone**, even "ballpark." A ballpark is a promise in the customer's head and a trap on the doorstep.
- **Never say "it depends" and leave it there** — replace the guess with the visit.
- **Never quote a fee on a replacement estimate.** If it's replacement, it's {{price:estimate_install}} — say so fast and book it.
- **The fee is the answer, not the obstacle.** Sell what the {{price:diagnostic_residential}} buys, not what it costs.

## Scoring {#scoring}

QA scores this 0/1/2: **0** = gave a ballpark or quoted a fee on a free estimate; **1** = held the line but left the call unbooked; **2** = clarified type, reframed the visit as the answer, and booked a window.

## Related

- Which conversation you're in: `sop.csm.service-type`
- The price objection proper: `script.objection.price`
