---
id: script.objection.quote-only
title: Objection — "I just want a quote"
department: csm
owner: cs-manager
status: published
version: 3
last_reviewed: 2026-09-10
review_cadence_days: 90
tags: [objection, quote, estimate, phone-quote, script, home-plus-protocol]
related: [sop.csm.service-type, sop.csm.diagnostic-fee, script.objection.price]
section: booking
order: 6
surfaces: [csm, checklist]
---

# Objection — "I just want a quote"

## The response {#response}

> "I hear you — you want a real number. If you're replacing the system, the estimate is free. If we're repairing it, we follow our Home+ Protocol: we diagnose on-site with a LiDAR scan, Manual J load calculation, and full system testing, then give you a written quote before any work starts. The {{price:diagnostic_residential}} covers that visit, and it's credited toward the repair if you approve it today."

## First, clarify what they mean {#clarify}

"I just want a quote" usually means one of two things. Ask before you defend a fee:

> "Happy to get you that number — are you looking to fix the system you have, or are you thinking about replacing it?"

- **Replacing** → estimate is {{price:estimate_install}}. Book it and stop talking.
- **Repairing** → the visit is a billable diagnostic. That's the objection to handle.

Handling a non-objection is how we talk ourselves out of a free-estimate booking.

## Why we don't quote repairs by phone {#why}

Step 2 of our process is **We Diagnose On-Site**. We LiDAR-scan the home, run a Manual J, and test airflow, static pressure, refrigerant, electrical, and combustion safety. A phone quote skips all of that — it's a guess, and a guess we later revise on the doorstep costs trust. The {{price:diagnostic_residential}} buys the measurement, the written report, and a signed quote before work begins.

## The handling ladder {#ladder}

1. **Clarify:** fix or replace?
2. **Agree with the goal:** "You want a real number — fair. You'll get it in writing today."
3. **Explain the process:** LiDAR, Manual J, system testing, written quote.
4. **Shrink the commitment:** "If you don't like the repair price, you owe the diagnostic and nothing else."
5. **Close on a window:** "I can have someone there today between 2 and 4."

## Perfect execution — full call {#perfect}

> **Customer:** "I just want a quote. How much to fix my furnace?"
>
> **CSM:** "Happy to get you that — are you looking to fix the furnace you have, or replace it?"
>
> **Customer:** "Fix it."
>
> **CSM:** "Got it. Here's why I can't give you a real number over the phone: cycling can be a $200 sensor or a $900 board. Anyone who quotes blind is guessing. Our Home+ Protocol sends a licensed tech for a full on-site diagnostic — LiDAR scan, Manual J, airflow, electrical, combustion safety — then a written Good/Better/Best quote before any work starts. The {{price:diagnostic_residential}} covers that, and it's credited if you approve the repair today. If you don't like the price, you owe the diagnostic and nothing else."
>
> **Customer:** "Okay… when can you come?"
>
> **CSM:** "Today between 2 and 4. What's the address?"

## Hard rules {#rules}

- **Replacement estimates are free.** Never quote a diagnostic fee for a new-system estimate.
- **Never give a repair price range over the phone**, even "ballpark."
- **Never say "it depends" and leave it there** — replace the guess with the measured visit.
- **Sell the answer, not the visit.** The fee unlocks LiDAR, Manual J, testing, and a written quote.

## Scoring {#scoring}

- **0** = gave a ballpark, charged for a free estimate, or failed to clarify fix vs. replace.
- **1** = held the line but left the call unbooked.
- **2** = clarified type, explained the on-site diagnostic process, and booked a window.

## Related

- Which conversation you're in: `sop.csm.service-type`
- The price objection proper: `script.objection.price`
- How the diagnostic visit works: `sop.csm.diagnostic-fee`
