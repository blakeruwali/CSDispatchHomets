---
id: script.objection.price
title: Objection — "The diagnostic is too much"
department: csm
owner: cs-manager
status: published
version: 4
last_reviewed: 2026-09-10
last_reviewed: 2026-09-10
review_cadence_days: 90
tags: [objection, price, diagnostic, fee, script]
related: [sop.csm.diagnostic-fee, sop.csm.membership-pivot, script.objection.quote-only]
section: booking
order: 5
surfaces: [csm, checklist]
---

# Objection — "The diagnostic is too much"

## The one line to memorize {#response}

This is the whole script. If you only remember one thing, remember this — one breath, then **stop talking**:

> "I hear you. That {{price:diagnostic_residential}} gets a licensed tech to your door today, a real answer in writing before any work starts — and if you approve the repair, it's credited toward the work."

That's it. Empathy, value, credit — ten seconds, and then silence. The pause does the selling.

## Only if they push again {#layers}

Don't stack everything into one speech. Add **one** layer per pushback, in this order:

1. **"I could get it looked at for free."** → "Free is fine right up until it's a guess. Ours is a full check of your entire system with a written, flat price — so it's fixed right the first time and you're not paying someone else to come back out in three weeks."
2. **"What if I don't like the repair price?"** → "Then you owe the diagnostic fee and nothing else — and you keep a written diagnosis you can hold anyone else to."
3. **"What if it can't be fixed?"** → "The visit and the diagnosis still happened, so the fee applies — but the replacement estimate is free, and the fee comes off the replacement if you move forward."
4. **Still hesitating** → pivot to Home+ (see below). It costs less than the fee it waives.
5. **Still refusing** → hold the fee, kindly: "I totally get it. The fee's the same for everyone — it's what gets a licensed tech to your door with a real answer and a written price." If it's a real emergency and they're about to hang up, offer a Manager callback — never a waiver.

## Why the short version works {#why}

The objection is almost never about the number — it's the fear of paying for nothing. Long speeches make it worse: the more you justify, the more the customer hears "this price is negotiable." A short, confident answer signals the fee is normal, fair, and the same for everyone.

Every layer answers one specific worry — value (licensed tech, full system check), risk (written flat price, no obligation), fairness (credited toward the work). Pick the layer that matches *their* worry instead of reciting all of them.

## Perfect execution — full call {#perfect}

Customer called about an AC blowing warm air. Fee has been framed once already per `sop.csm.diagnostic-fee`. Watch what the CSM does at each beat:

> **Customer:** "$199 just to come *look* at it? That's a lot of money."
>
> **CSM:** "I hear you — nobody budgets for their AC quitting in August." *(Pause. Let it sit.)*
>
> **Customer:** "…Yeah. I mean, the other company said they'd come out for free."
>
> **CSM:** "Totally understand — and free is fine right up until it's a guess. Here's what that {{price:diagnostic_residential}} gets you: a licensed tech at your door, a full and accurate diagnosis, a thorough check of your entire system, and a written, flat price before anyone touches a thing — so it's fixed right the first time and you're not paying someone else to come back out in three weeks. If you approve the repair today, that diagnostic fee is credited toward the work." *(Stop talking.)*
>
> **Customer:** "Hmm. Okay… but what if I don't like the repair price?"
>
> **CSM:** "Then you owe the diagnostic fee and nothing else — and you keep a written diagnosis you can hold anyone else to. No obligation, no surprise numbers."
>
> **Customer:** "Alright… fine. When can someone come?"
>
> **CSM:** "I can have a tech there today between 2 and 4. And since you're booking a visit anyway — most customers in your spot join Home+. It's {{price:membership_home_plus_monthly}}, it waives today's diagnostic outright, and it takes {{price:membership_home_plus_repair_discount}} off the repair. Want me to set that up?"
>
> **Customer:** "…Yeah, let's do it."

**Result:** full diagnostic booked, membership sold, fee never dropped. Total objection handling: under 90 seconds.

### Why each beat worked {#perfect-why}

| Beat | What the CSM did | What a weak CSM does |
|---|---|---|
| First objection | Empathy, then **silence** | Apologizes for the price ("I know, it is pricey…") |
| Competitor mention | Reframed on quality, not price: licensed tech, full diagnosis, thorough check, written flat price, fixed right the first time | "Well, free companies just add it to the repair anyway" |
| "What if I don't like the price?" | Turned the fee into protection (written diagnosis, no obligation) | Offers to "see what I can do" about the fee |
| Close | Asked for the booking directly, then pivoted to Home+ | Ends with "call us back if you change your mind" |

## The membership follow-through {#membership}

If they hesitate on the fee, this is the natural moment for the Home+ pivot — the membership costs less than the diagnostic it waives. See `sop.csm.membership-pivot`.

> "One option — most customers in your spot join Home+. It's {{price:membership_home_plus_monthly}}, and it waives today's diagnostic outright plus {{price:membership_home_plus_repair_discount}} off the repair."

## Hard rules {#rules}

- **No price matching.** Ever.
- **No waivers.** Fee waivers are Manager-only — see `sop.csm.diagnostic-fee`.
- **Don't cave to end the call.** A booked job at full price beats a waived fee and a customer who now expects one.
- **Never trash-talk the "free" competitor.** Reframe, don't attack — attacking makes the customer defend the other company.
- **Never claim we're the cheapest or "the best price in the market."** We compete on quality and certainty, not price. Say *written, flat price* and *fixed right the first time* — a cheapest claim invites shopping and one higher quote destroys it.
- **Always close on a time window.** The fee conversation isn't handled until a slot is booked.

## Scoring {#scoring}

QA scores this 0/1/2: **0** = dropped the price, offered a waiver, or apologized for the fee; **1** = deflected but filled the silence or argued; **2** = empathy → re-anchor → credit → pivot, and held the full price.

## Related

- Fee framing: `sop.csm.diagnostic-fee`
- "I just want a quote": `script.objection.quote-only`
