---
id: sop.field.equipment-capture
title: Equipment Capture in ServiceTitan — Before Any Work
department: field
owner: service-manager
status: published
version: 4
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [equipment, servicetitan, data-plate, serial, model, warranty, technician, field, capture]
related: [sop.csm.warranty-callback, reference.guarantees, sop.csm.system-type, sop.csm.tools, governance.acknowledgement, sop.field.forms]
section: field-standards
order: 3
surfaces: [field, checklist]
acknowledgement: required
---

# Equipment Capture in ServiceTitan — Before Any Work

> **Every piece of equipment at the location goes into ServiceTitan, with a scanned and photographed data plate, before you touch a tool.**

## When this applies {#applies}

Every visit, every job type, no exceptions: diagnostic, repair, tune-up, install, estimate, callback, warranty visit. It applies to the unit you were dispatched for **and** every other piece of equipment at the address — the second furnace nobody mentioned, the water heater in the corner, every RTU on a commercial roof. The job is *equipment at this location*, not *equipment that broke*.

It does not apply only when the plate is physically unreachable without unsafe access, and even then the rule below at `#unreadable` still applies — you do not skip the record, you document why it is incomplete.

## The execution ladder {#execution}

1. **Before you open a panel or pick up a tool, find every unit at the location** — the one you were sent for and anything else on the property that heats, cools, heats water, or filters air.
2. **Scan the data plate** on your tablet. ServiceTitan reads model and serial straight off the plate — no typing, no transcription error.
3. **Photograph the data plate**, filling the frame, in focus, even after a successful scan. The photo is the backstop if the scan misreads a character months from now.
4. **Photograph the whole unit** where it sits, showing condition and surroundings.
5. **Create or update the equipment record on the customer's location** — type, manufacturer, model, serial, fuel/power, capacity, refrigerant type, manufacture date, location, filter size, condition notes.
6. **Repeat for every additional unit** at the address before you start diagnosing or repairing anything.
7. **Only then start work.**
8. **At close, confirm every unit you touched or found has a record attached to the location** — not buried in job notes (`sop.field.forms`).

Budget 60–90 seconds per unit. If you are genuinely pressed, the three non-negotiable pieces are **the plate scan, the model, and the serial** — everything else can be filled in later from the scan and the photo. Nothing can be filled in later from a plate you never scanned.

## What you say {#verbatim}

> "I'm just logging your equipment — model and serial on file so we've got your warranty covered."

> "You've actually got two systems here — I want to get both on record, not just the one you called about."

> "This plate's pretty worn — let me get what I can and note the rest so nobody guesses at it later."

## Worked example {#example}

**Weak:** Tech is dispatched for a dead condenser, fixes the capacitor, closes the job. No equipment record. Three months later the compressor fails under manufacturer warranty. There is no serial on file, the claim is rejected, and the callback lands unpaid on whoever picks it up.

**Perfect:** Tech arrives, before touching the condenser, scans its plate, photographs it, and notices the furnace in the same closet has never been logged either. Scans and photographs that too. Both records go on the location: manufacturer, model, serial, refrigerant type, filter size. Capacitor gets replaced. Three months later the compressor fails — the serial is on file, the claim is approved, and the callback pays.

| | Weak | Perfect |
|---|---|---|
| Units captured | 1 of 2 | 2 of 2 |
| Model/serial source | Memory / skipped | Scan + photo |
| Warranty claim later | Fails, unpaid callback | Approved, paid callback |
| Next dispatch | Starts from nothing | Arrives with the right part |

## When it goes wrong {#failures}

- **Plate is illegible or missing.** Run the scan anyway — a partial plate often still yields the manufacturer. Photograph whatever remains. Write "data plate illegible" in condition notes. Check for a secondary label: inside the blower door, on the cabinet, on the disconnect, or a prior installer's sticker. Never guess a serial — a guessed number is worse than a blank one because the next person will trust it.
- **Access to a unit is refused or blocked.** Note it plainly — "customer refused attic access," "crawlspace locked" — and capture everything else. An explained gap is a record; a silent gap is a defect.
- **You recorded it in job notes instead of the location.** That is not captured. Notes do not attach to the location, do not drive maintenance, and do not surface when the CSM books the next call. Move it to the equipment record before you close.
- **Dispatch flags a closed job with no equipment attached.** Acknowledge the flag same day and complete or explain the gap. This is reviewed alongside your callback rate — the two are connected.

### Hard rules

- Never invent or estimate a model or serial number.
- Never skip the second system because you were only dispatched for one.
- Never leave equipment data sitting only in job notes.
- Never close a job with unexplained missing equipment capture.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Every unit at the location scanned, photographed, and recorded on the location with model/serial exact; gaps explained if any |
| 1 | Primary unit captured correctly but a second unit at the address was missed, or minor fields incomplete |
| 0 | No equipment record, a guessed serial/model, or capture logged only in job notes |

## Related

- Closing the job and forms: `sop.field.forms`
- Warranty periods and coverage: `reference.guarantees`
- No-charge callbacks: `sop.csm.warranty-callback`
- What the CSM captured at booking: `sop.csm.system-type`
- System of record: `sop.csm.tools`
