---
id: script.objection.price
title: Objection — "The diagnostic is too much"
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-10
review_cadence_days: 90
tags: [objection, price, diagnostic, fee, script]
related: [sop.csm.diagnostic-fee, sop.csm.membership-pivot, script.objection.quote-only]
section: booking
order: 5
surfaces: [csm, checklist]
---

# Objection — "The diagnostic is too much"

## The response {#response}

> "I hear you. That {{price:diagnostic_residential}} gets a licensed tech to your door, a full and accurate diagnosis with a thorough check of your entire system, and a written price — the best in the market — so we can get your system fixed and done and you don't have to worry about it any longer. If you approve the repair today, that diagnostic fee is credited toward the work."

## Why it works {#why}

The objection is almost never about the number — it's the fear of paying for nothing. The reframe answers three unspoken worries at once:

1. **"Will I get my money's worth?"** — *licensed tech, full and accurate diagnosis, thorough system check.*
2. **"Will the price balloon?"** — *written price, best in the market, fixed and done.*
3. **"Am I paying twice?"** — *credited toward the repair if you approve it today.*

You're not defending the fee. You're showing them what the fee *unlocks* — certainty, expertise, and a finished job. Do not compare us to competitors, do not apologize, and do not let the call drift into bargaining.

## The handling ladder {#ladder}

Handle it in this order. Most calls resolve at step 1 or 2 — don't skip ahead.

1. **Acknowledge, don't argue.** "I hear you" — two seconds of empathy, then silence. Never say "I understand, *but*…" The "but" erases the empathy.
2. **Re-anchor to the outcome.** Restate what the fee buys: licensed tech, full and accurate diagnosis, thorough system check, written price, and a fixed system — then stop talking.
3. **Close the loop on the credit.** "If you approve the repair today, that diagnostic fee is credited toward the work." This directly answers the "paying twice" fear.
4. **Offer the membership pivot** (see below). Home+ costs less than the fee it waives.
5. **Hold or escalate.** If they still refuse, hold the fee. "I totally get it. The fee's the same for everyone — it's what gets a licensed tech to your door with a real answer and a written price." If they're about to hang up on a real emergency, offer a Manager callback — never a waiver.

## Perfect execution — full call {#perfect}

Customer called about an AC blowing warm air. Fee has been framed once already per `sop.csm.diagnostic-fee`. Watch what the CSM does at each beat:

> **Customer:** "$199 just to come *look* at it? That's a lot of money."
>
> **CSM:** "I hear you — nobody budgets for their AC quitting in August." *(Pause. Let it sit.)*
>
> **Customer:** "…Yeah. I mean, the other company said they'd come out for free."
>
> **CSM:** "Totally understand. Here's what that {{price:diagnostic_residential}} gets you: a licensed tech at your door, a full and accurate diagnosis, a thorough check of your entire system, and a written price — the best in the market — so we can get this fixed and done and you don't have to worry about it any longer. If you approve the repair today, that diagnostic fee is credited toward the work." *(Stop talking.)*
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
| Competitor mention | Reframed what the fee buys: licensed tech, full diagnosis, thorough check, written price, fixed and done | "Well, free companies just add it to the repair anyway" |
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

## Scoring {#scoring}

QA scores this 0/1/2: **0** = dropped the price, offered a waiver, or apologized for the fee; **1** = deflected but filled the silence or argued; **2** = empathy → re-anchor → credit → pivot, and held the full price.

## Related

- Fee framing: `sop.csm.diagnostic-fee`
- "I just want a quote": `script.objection.quote-only`
