---
id: sop.csm.symptom-clarification
title: Symptom Clarification
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [symptom, clarify, dispatchable, ticket, diagnosis]
related: [sop.csm.intake, sop.csm.ticket-standards, protocol.emergency.triage, sop.csm.system-type]
section: intake
order: 5
surfaces: [csm, checklist]
---

# Symptom Clarification

> **"AC broken" is not dispatchable — if a tech can't decide what to load on the truck from your ticket, you didn't finish the intake.**

## When this applies {#applies}

Every call, right after you've got name, number, address, and system type from `sop.csm.intake`. This is the field that turns a vague complaint into a job a tech can actually prep for. If the symptom includes gas smell, smoke, or a temperature extreme, stop here and go to `protocol.emergency.triage` — that call is not a normal intake anymore.

## The execution ladder {#execution}

1. **Let the customer say it their way first.** Don't interrupt the first sentence — you need their exact words for the ticket.
2. **Run it through the translation table** below to turn the vague complaint into a specific one.
3. **Ask the safety-gate question ("smells weird") every single time**, even if it wasn't the customer's opening complaint. It costs one sentence and it's the only branch that can end the call somewhere other than a normal booking.
4. **Get a timeline.** "When did this start?" and "has it done this before?" — both go on the ticket.
5. **Paraphrase it back to the customer** to confirm you understood, then write both versions on the ticket: their words, and your dispatchable version.

## What you say {#verbatim}

| Customer says | Ask |
|---|---|
| "AC broken" | "Is it not running at all, or running but not blowing cold?" |
| "No heat" | "Is the system on and blowing, or completely off?" |
| "Leaking water" | "Is it dripping, pooling, or actively running?" |
| "Strange noise" | "Would you call it a rattle, a bang, a hiss, or a grinding?" |
| "Smells weird" | "Would you describe that as gas, burning, musty, or something else?" |

Confirming your paraphrase back to the customer:

> "So just to make sure I've got this right for the tech — the outdoor unit is running, the indoor blower is running, but the air coming out isn't cold, and this started yesterday afternoon. Sound right?"

## Worked example {#example}

| | Weak clarification | Perfect clarification |
|---|---|---|
| Ticket text | "AC not working" | "Outdoor unit runs, indoor blower runs, air coming out is not cold — started yesterday afternoon" |
| Time to collect | ~10 seconds | ~30 seconds |
| Smell question asked | Skipped — customer didn't mention a smell | Asked anyway: "No, nothing like that" logged |
| Outcome | Tech arrives without knowing if it's electrical, refrigerant, or airflow — guesses on parts | Tech loads a capacitor and a set of gauges before leaving the shop |

The twenty extra seconds is the entire value of this document. Both tickets took roughly the same time to open; only one of them prevents a second truck roll.

## When it goes wrong {#failures}

- **Customer answers the smell question with "gas" or "burning."** Stop the intake immediately and go to `protocol.emergency.triage` — do not keep collecting fields.
- **Customer can't describe the symptom beyond "it's just broken."** Give them the multiple-choice version from the table instead of an open question — most people can pick from four options even when they can't describe it freely.
- **Customer gives you a diagnosis instead of a symptom** ("I think the capacitor's dead"). Thank them, note it as their theory, and still get the actual observable symptom — the tech needs what's happening, not the customer's guess at why.
- **Symptom changes mid-call** ("actually now I hear a noise too"). Capture both; don't let the second one get lost because you'd already moved on.

### Hard rules

- Never write a symptom on the ticket that a tech couldn't act on without calling the customer back.
- Never skip the smell question because the customer didn't bring up a smell themselves.
- Never substitute the customer's self-diagnosis for the actual symptom — record both if they give you one.
- Never let "gas" or "burning" continue through the rest of intake as if it were a normal call.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Symptom made fully dispatchable, smell/safety question asked, timeline captured, both customer's words and paraphrase on the ticket |
| 1 | Symptom clarified but timeline or paraphrase missing, or safety question asked late |
| 0 | Vague symptom ("broken," "not working") left on the ticket as-is, or safety question skipped entirely |

## Related

- Where this lands on the ticket: `sop.csm.ticket-standards`
- Safety override: `protocol.emergency.triage`
- Field ordering this sits inside: `sop.csm.intake`
