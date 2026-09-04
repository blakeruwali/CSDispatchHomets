---
id: sop.csm.greeting
title: CSM Greeting Standard
department: csm
owner: cs-manager
status: published
version: 4
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [greeting, script, csm, opening]
related: [sop.csm.active-listening, sop.csm.intake, script.csm.empathy]
section: interaction
order: 1
surfaces: [csm, checklist]
---

# CSM Greeting Standard

> **The first three seconds decide whether this call becomes a booking or a comparison shop — say the verbatim greeting, every time, without rushing it.**

## When this applies {#applies}

Every inbound call, every channel, every hour the CSM team is on the phones ({{price:csm_hours}}). It applies before anything else happens on the call — before triage, before intake, before the customer has said a word about why they called.

This is not the moment to acknowledge the problem. That comes next, in `sop.csm.active-listening`. If the caller is mid-emergency and talking over you, see `protocol.emergency.triage` — safety screening can interrupt the greeting sequence, but it does not replace it.

## The execution ladder {#execution}

1. **Check the screen before you pick up.** Caller ID match to an existing ServiceTitan record changes one clause — know before you speak.
2. **Answer within `{{price:answer_by_ring}}`.** A greeting delivered on ring six already sounds apologetic before you've said a word.
3. **Deliver the verbatim greeting**, full sentence, unhurried.
4. **Pause.** Let the caller start talking. Do not fill the silence with "how are you today" or a second sentence.
5. **Hand off to acknowledgement**, not to intake — see `sop.csm.active-listening`.

## What you say {#verbatim}

New caller:

> "Thank you for choosing Home+ Air and Heat, this is [name], how can we serve you today?"

Returning caller (caller ID match only — one clause added, nothing else changes):

> "Thank you for choosing Home+ Air and Heat, this is [name] — welcome back! How can we serve you today?"

This is the phrase QA scores against. Say it clean, slow, and warm. Do not shorten it, rephrase it, or pad it.

## Worked comparison {#example}

| Beat | Weak CSM | Correct execution |
|---|---|---|
| Opening words | "Homets Services, how can I help?" | "Thank you for choosing Home+ Air and Heat, this is Maria, how can we serve you today?" |
| Pace | Rushed through it in under two seconds, sounds like a disclaimer | Delivered at conversational pace, warm tone |
| Returning customer | Treated like a stranger despite caller ID match | "…this is Maria — welcome back! How can we serve you today?" |
| After the greeting | Immediately asks "what's the address?" | Pauses, lets the customer describe the problem, then moves to `sop.csm.active-listening` |

Why it matters: "choosing" acknowledges the customer had five HVAC companies to pick from and picked us — it starts the call as a partnership, not a transaction. "Serve" is deliberately broader than "help"; it's the first, unspoken move toward a Home+ conversation later in the call.

## When it goes wrong {#failures}

- **CSM shortens the greeting under call volume pressure ("Thanks for calling, how can I help?").** Recovery: there is no salvaging a skipped greeting mid-call — flag it to yourself, deliver the full greeting on the next call, and note the volume issue to a manager if it's a pattern, not a one-off.
- **Caller ID match is ambiguous (shared line, multiple names on the account).** Recovery: use the standard greeting. Guessing wrong on "welcome back" damages more trust than not recognizing a repeat customer at all.
- **Caller starts talking over the greeting because it's an emergency.** Recovery: let the greeting go unfinished if needed, drop straight into triage per `protocol.emergency.triage`, and don't try to circle back and finish the greeting later — that reads as scripted, not caring.
- **CSM adds title, department, or a second sentence ("...this is Maria in customer service, how may I direct your call?").** Recovery: nothing to fix mid-call, but retrain the habit — every added word is a word the customer has to wait through before they can talk.

### Hard rules

- Never vary the wording of the verbatim greeting.
- Never skip the pause after the greeting to ask a question immediately.
- Never say "welcome back" without a confirmed caller ID match.
- Never lead with department name, title, or "how may I direct your call" — we don't route callers, we serve them.

## QA scoring {#qa}

| Score | Behavior |
|---|---|
| 2 | Verbatim greeting, correct pace, correct caller-ID clause when applicable, pause before customer speaks |
| 1 | Greeting delivered but rushed, reworded, or missing the returning-customer clause when it applied |
| 0 | Greeting skipped, replaced with generic phrasing, or CSM spoke over the customer's first words |

## Related

- Next step after greeting: `sop.csm.active-listening`
- Acknowledgement language: `script.csm.empathy`
- Emergency screening overrides everything on this page: `protocol.emergency.triage`
