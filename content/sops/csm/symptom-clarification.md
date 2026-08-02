---
id: sop.csm.symptom-clarification
title: Symptom Clarification
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [symptom, clarify, dispatchable, ticket, diagnosis]
related: [sop.csm.intake, sop.csm.ticket-standards, protocol.emergency.triage]
surfaces: [csm, checklist]
---

# Symptom Clarification

**"AC broken" is not dispatchable.** The tech needs to know what to bring.

## Turn vague into dispatchable {#dispatchable}

| Customer says | Ask |
|---|---|
| "AC broken" | "Is it not running at all, or running but not cold?" |
| "No heat" | "Is the system on and blowing, or completely off?" |
| "Leaking water" | "Is it dripping, pooling, or actively running?" |
| "Strange noise" | "Rattle, bang, hiss, or grinding?" |
| "Smells weird" | "Gas, burning, musty, or something else?" |

## The "smells weird" question is a safety gate {#smells}

Never let this one pass with a vague answer. **Gas or burning → stop the intake and go to `protocol.emergency.triage` immediately.** Musty is an air-quality conversation; gas is a 911 call. The same four words from the customer cover both.

## The test for a dispatchable symptom {#test}

Before you move on, ask yourself: *could a tech decide what parts to load from this line?*

- ❌ "AC not working"
- ✅ "Outdoor unit runs, indoor blower runs, air coming out is not cold — started yesterday afternoon"

Both took the same thirty seconds to collect. One of them prevents a second trip.

## Record both versions {#record}

The ticket carries the customer's words **and** your paraphrase — see `sop.csm.ticket-standards`. The customer's words matter because they carry detail you might have filtered out; your paraphrase matters because it's the version the tech can act on.

## Related

- Where this lands on the ticket: `sop.csm.ticket-standards`
- Safety override: `protocol.emergency.triage`
