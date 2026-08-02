---
id: sop.csm.non-english-callers
title: Non-English Caller Handling
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [language, spanish, interpreter, translation, bilingual, accessibility]
related: [protocol.emergency.triage, sop.csm.intake, sop.csm.transfer-hold]
surfaces: [csm, checklist]
---

# Non-English Caller Handling

A language barrier is not a reason to book a worse job. It is a reason to slow down.

## The protocol {#protocol}

1. **Identify the language.** "What language do you speak?" / *"¿Qué idioma habla?"*
2. **Set expectation.** "Please hold one moment, I'll connect an interpreter."
3. **Call the language line** (see the internal directory).
4. **Conference the interpreter in.**
5. **Book normally** — the interpreter stays on the line through the whole call.
6. **Note it in ServiceTitan:** "Customer speaks [Language] — interpreter needed for future calls."

Step 6 is the one that compounds. Logged once, every future call with this customer starts correctly instead of rediscovering the barrier.

## Never use a child as the interpreter {#no-children}

Not for a booking, and absolutely not for an emergency. A child asked to translate "do you smell gas" is being handed responsibility for their family's safety, and they may not have the vocabulary in either language. Use the language line.

The same applies to a neighbour who "speaks a little English." For safety questions, use the interpreter.

## Emergencies come first, interpreter second {#emergency}

If you have any signal of a life-safety emergency — `protocol.emergency.triage` — do not wait for an interpreter to connect before giving the safety instruction. Use the phrases below, then get the interpreter on for the rest.

### Key Spanish phrases

| Spanish | English |
|---|---|
| *"¿Huele a gas?"* | Do you smell gas? |
| **"Salga de la casa ahora."** | **Leave the house now.** |
| *"Llame al 911."* | Call 911. |
| *"¿No tiene calefacción?"* | No heat? |
| *"¿No tiene aire acondicionado?"* | No AC? |
| *"¿Cuál es su dirección?"* | What is your address? |
| *"Vamos a enviar un técnico."* | We'll send a technician. |

These are for the first thirty seconds of an emergency, not for running a booking. Do not attempt an intake in a language you don't speak — that is how the wrong address gets written down.

## How to speak on a translated call {#how-to-speak}

- **Speak slowly and clearly** — even with an interpreter on the line.
- **Short sentences. No idioms, no slang.** "Is the system blowing air?" not "is it acting up?"
- **Be patient.** Translated calls take 2–3× longer. Budget for it; do not rush the caller to make your queue look better.
- **Talk to the customer, not the interpreter.** "Is your heat working?" — not "ask her if her heat is working."

## Related

- Safety override: `protocol.emergency.triage`
- Hold protocol while connecting the interpreter: `sop.csm.transfer-hold`
