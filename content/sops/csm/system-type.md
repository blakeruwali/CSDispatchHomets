---
id: sop.csm.system-type
title: System Type Identification
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [system-type, boiler, furnace, ac, heat-pump, mini-split, plumbing, business-unit]
related: [sop.csm.res-vs-comm, sop.csm.symptom-clarification, sop.csm.intake]
section: intake
order: 3
surfaces: [csm, checklist]
---

# System Type Identification

> **Ask what the customer can see or feel, never what they'd have to know — "boiler or furnace?" gets you a confident wrong answer more often than a right one.**

## When this applies {#applies}

Right after name, phone, and address on every call — field 4 of `sop.csm.intake`. This determines which business unit the ticket routes to and what the tech loads on the truck. It feeds directly into `sop.csm.res-vs-comm` (a rooftop unit is commercial no matter what the caller sounds like) and sets up `sop.csm.symptom-clarification`, since the right follow-up questions depend on knowing the equipment.

## The execution ladder {#execution}

1. **Ask forced air vs. radiators** — this alone splits furnace from boiler for most callers.
2. **Ask if it cools in summer too** — separates a heat pump from a furnace-plus-AC setup.
3. **Ask about wall-mounted units per room** — catches mini-splits, which customers otherwise call "the AC."
4. **Ask the fuel type** — gas, oil, or electric — this affects both business unit and which tech is qualified.
5. **Ask where it's located** — basement, attic, closet, or roof. Roof changes the job and the routing before you've asked anything else.
6. **If they don't know after all five, log "unknown" with fuel and location** and let the tech identify it on site. Don't guess on their behalf.

## What you say {#verbatim}

> "Is it forced air through vents, or radiators / baseboard heat?"

> "Does that same system cool your house in the summer, or is your AC separate?"

> "Are there wall-mounted units, one in each room, or is it one central system?"

> "Do you happen to know if it runs on gas, oil, or electric?"

> "And where's the unit located — basement, attic, a closet, or up on the roof?"

If the customer can't answer any of it:

> "No problem — a lot of folks don't know off the top of their head. I'll note what we do have, and the tech will identify the exact system when they're there."

## Worked example {#example}

| | Weak call | Perfect call |
|---|---|---|
| CSM asks | "Do you have a boiler or a furnace?" | "Is it forced air through vents, or radiators?" |
| Customer answers | "Um... I think a furnace?" (it's actually a boiler) | "Radiators, yeah." |
| Result logged | "Furnace" — wrong | "Boiler" — confirmed from what the customer can actually observe |
| Consequence | Tech arrives with furnace parts on a boiler call, second trip for the right stock | Tech loads correctly the first time |

## When it goes wrong {#failures}

- **Customer describes something that sounds like two systems** ("there's a big unit in the basement and also something on the wall upstairs"). Log both — this is common in additions and finished basements — and note it clearly so the tech isn't surprised.
- **Customer is certain about a wrong answer** (confidently says "furnace" for what's actually a boiler). Trust the observable-behavior answers (forced air vs. radiators) over the vocabulary word they used.
- **Unit is on the roof.** Note it immediately and flag for `sop.csm.res-vs-comm` — a rooftop unit is commercial regardless of what kind of building it's on.
- **Customer refuses to guess and gets frustrated at the questions.** Drop straight to "unknown, tech will identify" rather than pushing further — an honest unknown beats an irritated customer and a guessed answer.

### Hard rules

- Never ask "boiler or furnace" as your first question — always start from forced air vs. radiators.
- Never guess the system type yourself to move the call along faster.
- Never skip the location question — roof and attic units change staffing and safety gear.
- Never leave the field blank; if unknown, write "unknown" plus fuel and location.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | All applicable observable-behavior questions asked, system type correctly logged (or honestly logged as unknown with fuel/location), roof units flagged |
| 1 | System type eventually correct but reached via vocabulary-guessing questions rather than observable ones |
| 0 | Wrong system type logged with no attempt to verify, or a rooftop location not flagged for commercial routing |

## Related

- Business unit routing: `sop.csm.res-vs-comm`
- Making the symptom dispatchable: `sop.csm.symptom-clarification`
- Field order this sits inside: `sop.csm.intake`
