---
id: script.objection.price
title: Objection — "The diagnostic is too much"
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [objection, price, diagnostic, fee, script]
related: [sop.csm.diagnostic-fee, sop.csm.membership-pivot, script.objection.quote-only]
section: booking
order: 5
surfaces: [csm, checklist]
---

# Objection — "The diagnostic is too much"

## The response {#response}

> "I hear you. That {{price:diagnostic_residential}} gets a licensed tech to your door, a full diagnosis, and a written price. If you approve the repair, it's credited. **You're not paying twice.**"

## Why it works {#why}

The objection is almost never about the number — it's the fear of paying for nothing. "You're not paying twice" answers the actual worry in five words.

Re-anchor to what the fee buys: a licensed, insured tech and a written price. Do not defend the number by comparing it to competitors, and do not apologize for it.

## The handling ladder {#ladder}

Handle it in this order. Most calls resolve at step 1 or 2 — don't skip ahead.

1. **Acknowledge, don't argue.** "I hear you" — two seconds of empathy, then silence. Never say "I understand, *but*…" The "but" erases the empathy.
2. **Re-anchor to value.** Restate what the fee buys: licensed tech, real diagnosis, written price, credit on repair. One sentence. Stop talking.
3. **Answer the real fear.** "You're not paying twice" — the fee isn't lost money, it's a deposit on the repair.
4. **Offer the membership pivot** (see below). Home+ costs less than the fee it waives.
5. **Hold or escalate.** If they still refuse, hold the fee. "I totally get it. The fee's the same for everyone — it's what puts a licensed tech at your door instead of a guess." If they're about to hang up on a real emergency, offer a Manager callback — never a waiver.

## Perfect execution — full call {#perfect}

Customer called about an AC blowing warm air. Fee has been framed once already per `sop.csm.diagnostic-fee`. Watch what the CSM does at each beat:

> **Customer:** "$199 just to come *look* at it? That's a lot of money."
>
> **CSM:** "I hear you — nobody budgets for their AC quitting in August." *(Pause. Let it sit.)*
>
> **Customer:** "…Yeah. I mean, the other company said they'd come out for free."
>
> **CSM:** "Totally understand. Here's what the {{price:diagnostic_residential}} gets you: a licensed, insured tech at your door, a real diagnosis — not a guess — and a written price before any work starts. And if you approve the repair, that $199 is credited straight toward it. **You're not paying twice.**" *(Stop talking.)*
>
> **Customer:** "Hmm. Okay… but what if I don't like the repair price?"
>
> **CSM:** "Then you owe the $199 and nothing else — and you keep a written diagnosis you can hold anyone else to. No obligation, no surprise numbers."
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
| Competitor mention | Reframed what the fee buys — never bad-mouthed the competitor | "Well, free companies just add it to the repair anyway" |
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
