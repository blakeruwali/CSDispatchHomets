---
id: sop.field.equipment-capture
title: Equipment Capture in ServiceTitan — Before Any Work
department: field
owner: service-manager
status: published
version: 2
last_reviewed: 2026-08-04
review_cadence_days: 90
tags: [equipment, servicetitan, data-plate, serial, model, warranty, technician, field, capture]
related: [sop.csm.warranty-callback, reference.guarantees, sop.csm.system-type, sop.csm.tools, governance.acknowledgement]
section: field-standards
order: 3
surfaces: [field, checklist]
acknowledgement: required
---

# Equipment Capture in ServiceTitan — Before Any Work

> **Every piece of equipment at the location goes into ServiceTitan, with a photo of its data plate, before you touch a tool.**

## The 60-second version {#field-card}

At every unit, before you start:

1. **Scan the equipment.** Point your tablet camera at the data plate and run the equipment scan — ServiceTitan reads the model and serial straight off the plate. Then photograph the plate as well.
2. **Photograph the whole unit** where it sits.
3. **Create the equipment record** — make, model, serial, location, filter size.
4. **Then start work.**

**Roughly 60–90 seconds per unit.** That is the real cost, and this document does not pretend it is free.

If you are genuinely up against it, the three that must be captured are **the plate scan, the model, and the serial.** Everything else can be filled in later from the scan and the photo. Nothing can be filled in later from a plate you did not scan.

## What this does for you {#for-you}

Not for the office — for the person holding the wrench.

**You get paid for callbacks that aren't your fault.** A part fails inside the manufacturer's warranty and there is no serial on file, the claim fails. The company eats it, and the return trip lands on whoever is free — often you, on a job that now pays nothing. With the serial captured, the manufacturer pays and the callback is a paid job.

**The right part rides out with you.** Model on file means the next dispatch to that address goes out with the part already on the truck. A second trip is unpaid drive time and a slot you could have billed.

**The photo protects you.** When a customer says the unit was newer than it was, or that it was not leaking before you arrived, the dated photo of what you found is the end of the argument. That record exists for your benefit at least as much as the company's.

**Your quotes get bigger and land faster.** Age and refrigerant type are what turn "it's pretty old" into a replacement conversation the customer believes. Both come off the plate. You cannot make that argument from memory.

**You stop re-doing your own diagnostic work.** Everything you record today is waiting for you the next time you or anyone else is sent to that address.

## "But—" {#objections}

The objections are fair. Here are the answers.

**"The customer is standing there and I look slow."**
Narrate it and it reads as thorough, not slow:

> "I'm just logging your equipment — model and serial on file so we've got your warranty covered."

Customers hear a company that keeps records. Nobody has ever complained about that sentence.

**"It's 110° in that attic and I'm not spending an extra five minutes up there."**
You are not. Take the two photos, come down, and type the record from the photos in the truck or on the stairs. The part that has to happen at the unit is the camera, and that is fifteen seconds.

**"I already know this system, I've been here before."**
Then the record already exists and this takes you ten seconds to confirm. If it does not exist, you are the reason the next tech starts from nothing.

**"I'll add it when I close the job."**
Nobody does, and that is not a character flaw — it is what every busy trade does when the work runs long and the next call is waiting. Capture rate after the fact is close to zero. That is exactly why the rule is placed before the work and not after it.

**"The office wants data, that's an office problem."**
Half of it is. The half above is not — the unpaid callback, the second trip, and the disputed damage claim all land on a technician.

## Capture every system, not just the one you were sent for {#every-system}

The job is *equipment at this location*, not *the equipment that broke*.

- Furnace **and** AC condenser is two records. Two plates, two entries.
- Two-zone or two-furnace homes: every unit, including the attic one nobody mentioned.
- Water heater, boiler, mini-split heads **and** their outdoor unit, air handler, IAQ gear.
- Commercial: **every RTU on the roof**, numbered consistently so the next tech knows which is which.

The second system is the one that gets skipped, and it is the one that generates the next call. When that call comes in, a record we already hold is the difference between you arriving with the part and you arriving to look at it.

## What goes in the record {#fields}

| Field | Rule |
|---|---|
| Equipment type | Furnace / boiler / AC condenser / air handler / heat pump / mini-split / water heater / IAQ |
| Manufacturer | As printed on the plate |
| **Model number** | **Exact, character for character** |
| **Serial number** | **Exact, character for character** |
| Fuel / power | Natural gas / propane / oil / electric |
| Capacity | Tonnage or BTU as shown |
| Refrigerant type | Cooling equipment — drives repair-vs-replace |
| Manufacture date | From the plate, or decoded from the serial |
| Location | Where the next tech will find it |
| Filter size | Exact size per system — this is what makes maintenance possible |
| Condition notes | What you actually found |

**Model and serial are transcribed from the photo, never from memory.** They are long, they mix letters and digits, and one wrong character is a warranty claim that fails months later when nobody can reconstruct what happened.

## Scan the plate, then photograph it {#photo}

The typed fields can contain a typo. The scan and the photo cannot.

- **Scan first:** every unit gets the equipment scan run against its data plate — model and serial come in from the scan, character for character, with no typing to get wrong.
- **One photo per unit minimum after the scan:** **the data plate, filling the frame, in focus.** The photo is the backstop — if the scan misreads a character, the photo is what settles it months later.
- Plus a wider shot showing the unit and its surroundings.
- Dirty plate? Wipe it, then rescan and reshoot. A plate the scanner cannot read is a plate you cannot read either — a scan that failed is not a record.

## When the plate is unreadable or gone {#unreadable}

Common on old outdoor equipment. Do not skip the record, and do not invent numbers.

1. Photograph whatever is left, however partial.
2. Enter what you *can* establish — type, manufacturer, location, fuel, rough age.
3. **Write "data plate illegible" in the condition notes.**
4. Check for a secondary label: inside the blower door, on the cabinet, on the disconnect, or a prior installer's sticker.

**A guessed serial is worse than a blank one**, because the next person will trust it.

## Where it goes {#where}

**The equipment record attached to the customer's location — not the job notes.**

This is the most common way it gets done wrong. Notes are invisible on the next visit: they do not attach to the location, do not drive maintenance, and do not show up when the CSM books the next call. The information exists and does nothing. Same principle as everywhere else here — if it is not in the right place in ServiceTitan, it did not happen (`sop.csm.tools`).

## When it's missing {#enforcement}

So this is not a rule that only exists on paper:

- **Dispatch checks it at close.** A job closed with work performed and no equipment attached to the location gets sent back to the technician who closed it.
- **It is reviewed in the weekly one-to-one**, alongside callback rate — the two are related, and the connection is the point.
- **A genuine exception is fine when it is written down.** No access to the unit, customer refused the attic, locked crawlspace — say so in the notes. An explained gap is a record. A silent gap is a defect.
- **This document is signed for.** There is an acknowledgement block at the foot of this page. Once you have signed it, "nobody told me" is off the table — and so is the reverse: if you were never asked to sign, that is on us and not on you (`governance.acknowledgement`).

## Why before, and not after {#why-before}

Beyond the fact that nobody does it afterwards:

1. **The plate stops being reachable.** Pull a blower, replace a panel, drop insulation back down, and it is behind something. On a heat exchanger job it may be gone.
2. **You need the serial mid-job.** The moment you find a failed part, the question is whether it is under warranty — and you cannot answer that from a record you have not made yet.
3. **The replacement conversation needs it before you quote**, not after.
4. **A stripped system cannot be photographed honestly.** The record should show what you found, not what you left.

## Related

- Warranty periods and coverage: `reference.guarantees`
- No-charge callbacks: `sop.csm.warranty-callback`
- What the CSM captured at booking: `sop.csm.system-type`
- System of record: `sop.csm.tools`
