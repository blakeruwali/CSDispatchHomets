---
id: sop.field.equipment-capture
title: Equipment Capture in ServiceTitan — Before Any Work
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [equipment, servicetitan, data-plate, serial, model, warranty, technician, field, capture]
related: [sop.csm.warranty-callback, reference.guarantees, sop.csm.system-type, sop.csm.tools]
section: field-standards
order: 1
surfaces: [field, checklist]
---

# Equipment Capture in ServiceTitan — Before Any Work

> **Every piece of equipment at the location is entered in ServiceTitan with a photo of its data plate before you touch a tool.**
>
> Not after the diagnosis. Not after the repair. Not "when I get a minute." Before.

## Why before, and not after {#why-before}

This is the whole reason the rule exists, so it is worth being blunt about it.

**Nobody captures equipment after the job.** The work runs long, the customer has questions, the next call is waiting, and the tech leaves. Capture rate after the fact is close to zero — that is not a character flaw, it is what every busy trade does. The only version of this that works is the one that happens before the work starts.

Four things also go wrong specifically when you wait:

1. **The plate stops being readable.** Pull a blower, replace a panel, or lay insulation back down and the plate is behind something. On a heat exchanger job it may be gone entirely.
2. **You need the serial *mid-job*, not at the end.** The moment you find a failed part, the question is whether it is under manufacturer warranty — and you cannot answer that without the model and serial you have not entered yet. See `reference.guarantees`.
3. **The repair-versus-replace conversation needs the plate.** Age and refrigerant type decide that conversation, and both come off the data plate. Having it in hand before you quote is the difference between a recommendation and a guess.
4. **A disassembled system cannot be photographed honestly.** The record should show what you found, not what you left.

## Capture every system, not just the one you were sent for {#every-system}

The job is "equipment at this location," not "the equipment that broke."

- A house with a furnace **and** an AC condenser has two records. Two systems, two plates, two entries.
- Two-zone or two-furnace homes: **every** unit, including the one in the attic you were not called about.
- Water heater, boiler, mini-split heads **and** their outdoor unit, air handler, IAQ equipment — all of it.
- Commercial: **every RTU on the roof**, not just the one that's down. Number them consistently so the next tech knows which is which.

The second system is the one that gets skipped, and it is the one that generates the next call. A record we already hold turns that call into a booked job with the right parts on the truck.

## The sequence {#sequence}

1. **Arrive, greet, and ask to see the equipment** before discussing the problem in detail.
2. **Photograph the data plate** on each unit — close, square, legible.
3. **Photograph the full unit** in place, so its condition and installation are on record.
4. **Enter the equipment record in ServiceTitan** from the photo, not from memory.
5. **Attach the photos to the equipment record.**
6. **Then start diagnosing.**

Steps 2 and 4 are separate on purpose. Photograph everything first, then type — it keeps you off the customer's floor with a phone in your hand for ten minutes, and it means the plate is captured even if you get interrupted.

## Required fields {#fields}

| Field | Rule |
|---|---|
| Equipment type | Furnace / boiler / AC condenser / air handler / heat pump / mini-split (head + outdoor) / water heater / IAQ |
| Manufacturer | As printed on the plate |
| **Model number** | **Exact, character for character, from the plate** |
| **Serial number** | **Exact, character for character, from the plate** |
| Fuel / power | Natural gas / propane / oil / electric |
| Capacity | Tonnage or BTU as shown |
| Refrigerant type | Cooling equipment — record it, it drives repair-vs-replace |
| Manufacture date | From the plate, or decoded from the serial |
| Install date | If known or documented — do not guess |
| Location | Basement / attic / crawlspace / closet / roof / side yard — where the next tech will find it |
| Filter size | Exact size, per system. This is what makes maintenance possible. |
| Condition notes | What you actually found — rust, leaks, prior repairs, code issues |

**Model and serial are transcribed, never remembered.** They are long, they mix letters and digits, and a single wrong character makes a warranty claim fail months later when nobody can reconstruct what happened.

## The data plate photo is not optional {#photo}

The typed record can contain a typo. The photo cannot.

When a manufacturer disputes a warranty claim, the photo is the evidence. When the numbers are questioned a year from now, the photo settles it. When a plate is partly corroded, the photo shows exactly how much was legible.

- One photo per unit, minimum: **the data plate, filling the frame, in focus.**
- Add a second wider shot showing the unit and its surroundings.
- If the plate is dirty, wipe it and reshoot. A photo you cannot read is not a record.

## When the plate is unreadable or gone {#unreadable}

It happens on old and outdoor equipment. Do not skip the record and do not invent numbers.

1. Photograph whatever remains, however partial.
2. Enter everything you *can* establish — type, manufacturer, location, fuel, approximate age.
3. **Write "data plate illegible" in the condition notes**, explicitly.
4. Check for a secondary label — inside the blower door, on the furnace cabinet, on the electrical disconnect, or on a prior installer's sticker.

An honest partial record beats a blank one, and it beats a guessed one by much more. A wrong serial in the system is worse than no serial, because someone will trust it.

## Where it goes: the equipment record, not the job notes {#where}

**This is the most common way this gets done wrong.**

Equipment typed into a job note is invisible next visit. It does not attach to the customer's location, it does not appear when the CSM books the next call, it does not drive maintenance, and it cannot be reported on. The information technically exists and is operationally worthless.

It goes on the **equipment record attached to the customer's location** in ServiceTitan. Same principle as everywhere else in this company: if it is not in the right place in ServiceTitan, it did not happen — `sop.csm.tools`.

## What this unlocks {#downstream}

Worth knowing, because it is not paperwork for its own sake:

- **Warranty gets honored.** No serial, no claim. The customer pays for something a manufacturer would have covered, and finds out later — `sop.csm.warranty-callback`.
- **Maintenance actually works.** A membership tune-up needs to know what it is tuning, and the filter size decides whether the tech arrives with the right filter or not at all.
- **The right parts come on the truck.** Dispatch and the CSM can see the model before anyone drives out — `sop.csm.system-type` captures the customer's guess at booking; this replaces it with fact.
- **Repair-versus-replace becomes credible.** Age plus refrigerant plus condition is an argument. "It's pretty old" is not.
- **Replacement quoting is faster and more accurate**, because the existing system is already documented.

## A job is not complete without it {#gate}

**Equipment records are a condition of closing the job, not an extra.** A job closed with work performed and no equipment attached to the location is an incomplete job, and it will come back to the tech who closed it.

If a genuine exception applies — no access to the unit, customer refused entry to the attic — say so in the notes. An explained gap is a record. A silent gap is a defect.

## Related

- Warranty periods and what they cover: `reference.guarantees`
- Identifying a no-charge callback: `sop.csm.warranty-callback`
- What the CSM captured at booking: `sop.csm.system-type`
- System of record: `sop.csm.tools`
