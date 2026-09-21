---
id: sop.csm.ticket-standards
title: ServiceTitan Ticket Standards
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [servicetitan, ticket, fields, required, standards, dispatchable]
related: [sop.csm.intake, sop.csm.dispatch-handoff, sop.csm.tools, sop.csm.lead-source]
section: post-booking
order: 1
surfaces: [csm, checklist]
---

# ServiceTitan Ticket Standards

> **A ticket is dispatchable only if a tech who's never spoken to the customer can work it cold.**

## When this applies {#applies}

Every ticket, every booking type, before it's saved — while the customer is still on the line. This is the field-by-field standard; the moment of using it right before you click save is `sop.csm.dispatch-handoff`, and the sequence that gathers the information in the first place is `sop.csm.intake`.

## The execution ladder {#execution}

1. **Fill fields as you collect them, not from memory at the end.** Reconstructing a ticket after the call is how details get dropped.
2. **Write the symptom in two parts**: the customer's own words, then your paraphrase into something a tech can act on.
3. **Write access notes as instructions, not observations** — what the tech needs to do to get to the equipment, not just what's true about the house.
4. **Set job type, business unit, and membership status explicitly** — never leave a field on its default value.
5. **Record the fee posture with a reason**, not just a status.
6. **Log lead source verbatim** per `sop.csm.lead-source`.
7. **Confirm the text sent flag reads YES** before you consider the ticket done.

## Required fields {#fields}

| Field | Rule |
|---|---|
| Customer name | Verified + spelled |
| Phone | Best callback, tested |
| Service address | Full, including unit / suite |
| Access notes | Gate code, dog, stairs, hours — written as instructions |
| System type | Specific subtype |
| Symptom | Customer's words **+** your paraphrase |
| Job type | Repair / Install / Maintenance / Estimate |
| Business unit | Correct BU (residential vs. commercial) |
| Membership | Member / non-member / lapsed |
| Lead source | Verbatim — `sop.csm.lead-source` |
| Diagnostic fee posture | {{price:diagnostic_residential}} / {{price:diagnostic_commercial}} / waived, with reason |
| Window | 2-hour slot from {{price:service_windows}} |
| Confirmation text sent | Must be **YES** |

## What you say {#verbatim}

> "Just so I write this up right for the tech — is that a whistling sound, or more of a banging?"

> "Is there a gate code, or a dog I should note for the tech?"

> "Which floor is the unit on, and is there anything blocking access to it?"

## Worked example — a complete ticket {#example}

Customer called about a noisy furnace. Here is the ticket as it should read when saved:

```
Customer name:        Denise Falcone
Phone:                (516) 555-0148, confirmed
Service address:      88 Cherry Ln, Unit 2B, Massapequa, NY 11758
Access notes:         Buzz "Falcone 2B" at the front door — inner door is
                       propped for the tech. Dog is a small, friendly beagle,
                       kept in the bedroom during the visit at owner's request.
System type:          Gas furnace, forced air, basement mechanical room
Symptom:               Customer: "It's making a loud banging noise every time
                       it kicks on, started two days ago."
                       Paraphrase: Possible delayed ignition / dirty burners —
                       bang occurs at ignition, not during run cycle.
Job type:              Repair
Business unit:         Residential HVAC
Membership:            Non-member — pitched, declined for now
Lead source:           Google — LSA
Fee posture:           {{price:diagnostic_residential}} — non-member, no waiver
Window:                2 PM – 4 PM, today
Confirmation text sent: YES
```

Every field here answers a question a tech would otherwise have to call and ask.

## When it goes wrong {#failures}

- **Symptom field has only the customer's words, no paraphrase.** Add the paraphrase before saving — "it's making a weird noise" tells a tech nothing about what to bring.
- **Access notes describe the house but not the path in.** Rewrite as an instruction: not "there's a gate," but "gate code 4471, latch is stiff, push hard."
- **Fee posture says "waived" with no reason.** Stop and get the reason — membership reference or Manager approval — before saving; an unexplained waiver becomes a billing dispute.
- **A field is blank because the customer didn't know.** Don't leave it empty — note what you tried ("asked twice, customer unsure of system age") so Dispatch knows it was addressed, not skipped.

### Hard rules

- Never save a ticket with a blank required field.
- Never write a symptom as only the customer's raw words.
- Never mark a fee "waived" without a reason attached.
- Never leave the confirmation-text field on anything but YES.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| 2 | Every required field complete, symptom has both quote and paraphrase, fee posture has a reason |
| 1 | Ticket is bookable but missing a paraphrase, a reason, or an access detail a tech would need |
| 0 | Ticket saved with a blank required field or an unexplained fee waiver |

## Related

- Intake sequence that fills these: `sop.csm.intake`
- Checklist before you save: `sop.csm.dispatch-handoff`
- Lead source capture: `sop.csm.lead-source`
