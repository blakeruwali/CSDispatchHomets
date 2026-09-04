---
id: sop.csm.active-listening
title: Active Listening & Acknowledgement
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [listening, acknowledgement, empathy, paraphrase]
related: [sop.csm.greeting, script.csm.empathy, sop.csm.intake]
section: interaction
order: 2
surfaces: [csm, checklist]
---

# Active Listening & Acknowledgement

> **A customer who feels heard will pay a diagnostic fee; a customer who feels processed will shop the next number on Google.**

## When this applies {#applies}

Every call, immediately after the greeting and before the first intake question — address, phone number, or anything that goes on a ticket. It is a mandatory 15-30 second beat, not an optional nicety squeezed in when the queue is light.

This is not intake itself — that sequence lives in `sop.csm.intake`. And if what you hear in the paraphrase is a safety signal (gas smell, no heat below {{price:emergency_temp_cold}}, water actively flooding), stop here and move to `protocol.emergency.triage` instead of continuing this ladder.

## The execution ladder {#execution}

1. **Let them finish the first sentence uninterrupted** — no matter how obvious the problem sounds by word four.
2. **Acknowledge with one line naming the actual pain**, not a generic "sorry to hear that."
3. **Paraphrase the issue back** as a question, so they confirm or correct it.
4. **Only then start data collection** — address, callback number, availability.

Do not compress steps 2 and 3 into one sentence, and do not skip to step 4 because the problem sounds routine. The customer doesn't know it's routine to you.

## What you say {#verbatim}

> "That sounds frustrating — let's get you taken care of."

> "So your boiler stopped making heat overnight — is that right?"

> "You shouldn't have to call twice about this. Let me get it sorted." (repeat issue)

> "In this heat that's miserable. Let's get you on the schedule today if we can." (no AC, heat advisory)

Full situational library lives in `script.csm.empathy` — use it, don't improvise a substitute on the fly.

## Worked example {#example}

Call: customer's boiler stopped producing heat overnight, temperature outside is 28°F.

> **Customer:** "Hi, yeah, my boiler just stopped working, no heat all night, it's freezing in here—"
>
> **CSM:** *(lets her finish, does not jump in at "boiler")* "That's the last thing you need in this weather — let's get someone out to you." *(one-second pause)* "So your boiler stopped making heat sometime overnight and you've had no heat since — is that right?"
>
> **Customer:** "Yes, exactly. I noticed around 6am."
>
> **CSM:** "Got it, thank you — I want to get a tech to you fast. Can I grab your address?"

Compare to the weak version of the same call:

| Beat | Weak CSM | Correct execution |
|---|---|---|
| Customer's opening line | Cuts in at "boiler stopped" to ask for the address | Lets the full sentence land |
| Acknowledgement | "Sorry to hear that. Can I get your address?" | Names the cold, names the urgency, then pauses |
| Paraphrase | Skipped entirely | Reflects the specific issue and timeline back as a question |
| Result | Customer feels like a ticket number | Customer feels heard, more likely to accept the fee and the window |

## When it goes wrong {#failures}

- **Customer interrupts the acknowledgement to restate the problem, annoyed.** Recovery: drop the scripted line, paraphrase immediately using their own words — the acknowledgement was for pacing, not a box to check no matter what.
- **Paraphrase reveals you misheard the problem** ("did you say boiler or water heater?"). Recovery: correct it out loud, thank them for catching it, and re-paraphrase before moving to intake — a misdispatched truck costs more than ten extra seconds.
- **CSM acknowledges but the line sounds robotic/rehearsed** ("I understand your frustration"). Recovery: replace stock phrasing with the specific situational line from `script.csm.empathy` that names their actual problem, not a generic label for it.
- **High call volume tempts skipping straight to intake.** Recovery: this is exactly when skipping costs the most — a rushed-sounding CSM under volume reads as indifferent, not busy. Do the full ladder in under 20 seconds instead of skipping it.

### Hard rules

- Never open with an intake question before acknowledgement and paraphrase are both done.
- Never use "I understand" alone with nothing specific attached to it.
- Never say "that's a common issue" — it minimizes their problem to make ours sound routine.
- Never paraphrase in a way that closes off correction (state it as a question, not a fact).

## QA scoring {#qa}

| Score | Behavior |
|---|---|
| 2 | Empathetic reflect-back naming the actual pain, confirmed with the customer, then questions |
| 1 | Brief generic acknowledgement ("sorry to hear that") then straight to questions |
| 0 | Jumped straight to the intake form with no acknowledgement or paraphrase |

## Related

- Approved acknowledgement lines: `script.csm.empathy`
- The intake sequence this leads into: `sop.csm.intake`
- If the paraphrase surfaces a safety signal, stop here: `protocol.emergency.triage`
