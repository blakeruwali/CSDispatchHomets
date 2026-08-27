---
id: sop.field.forms
title: Adding Equipment & Completing Forms Before You Close
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-27
review_cadence_days: 90
tags: [forms, equipment, servicetitan, documentation, close, technician, photos, checklist]
related: [sop.field.equipment-capture, sop.field.start-time, sop.dispatch.daily-workflow, sop.field.diagnostics, governance.acknowledgement]
section: field-documentation
order: 1
surfaces: [field, checklist]
acknowledgement: required
---

# Adding Equipment & Completing Forms Before You Close

> **A job is not finished when the repair works. It is finished when the equipment is attached and the forms are in.**

## The 60-second version {#field-card}

Before you press Complete:

1. **Equipment attached to the location** — every system, with a data-plate photo (`sop.field.equipment-capture`).
2. **The job's form filled in** — readings, findings, what you did.
3. **Photos** — before, after, and anything you are flagging.
4. **Customer signature** captured on the device.
5. **Recommendations recorded**, even the declined ones.

**Two to three minutes.** Every one of them is cheaper than the phone call you get in three months about a job nobody can reconstruct.

## Equipment goes on the location, not in the notes {#equipment}

This is the mistake that costs the most. Notes are invisible on the next visit — they do not attach to the location, do not drive maintenance, and do not appear when the CSM books the next call.

**Every system at the address gets a record**, not just the one that broke: furnace *and* condenser, the second zone nobody mentioned, water heater, mini-split heads *and* the outdoor unit, every RTU on a commercial roof. Full field-by-field standard: `sop.field.equipment-capture`.

## The form is the diagnosis, in writing {#forms}

Which form depends on the job type, and Dispatch attaches it when they dispatch. If a job arrives without the right form on it, that is a call to Dispatch — not a reason to skip it.

| Job type | Form must contain |
|---|---|
| Diagnostic | Symptom as found, readings taken, root cause, options presented |
| Repair | Part replaced, readings before and after, warranty status of the part |
| Maintenance / tune-up | Full checklist, every reading, filter size and condition |
| Install | Commissioning readings, startup checklist, registration submitted |
| Callback | What the prior visit did, what was actually wrong, why it recurred |

**Readings are numbers, not adjectives.** "Charge looked good" is not a reading. Subcool and superheat, static pressure, temperature split, amp draw, combustion numbers — whatever the form asks for, with the value. Six months from now the number is evidence and the adjective is nothing.

## Photos {#photos}

- **Before** — what you found, in place.
- **After** — what you left.
- **The data plate** — for every unit.
- **Anything you are flagging** — rust, scorching, a cracked pan, an unsafe install someone else did.

The photo of a pre-existing problem is the end of the argument when a customer says it was not like that before you arrived. It protects you at least as much as the company.

## Record what they declined {#declined}

The recommendation the customer said no to is the most valuable line in the file. It is the follow-up call, the next estimate, and the reason the CSM does not sound blindsided when the same system fails in November.

Write **what you recommended, the price given, and their reason for declining.** "Customer declined" alone tells the next person nothing.

## Why the close gate exists {#enforcement}

- **Dispatch quality-gates every close.** Work performed with no equipment attached, or a blank form, gets sent back to the technician who closed it — same day (`sop.dispatch.daily-workflow`).
- **It is reviewed in the weekly one-to-one**, next to callback rate. The two are related and the connection is the point.
- **A genuine exception is fine when it is written down.** No access, customer refused the attic, plate illegible — say so. An explained gap is a record. A silent gap is a defect.
- **This page is signed for** (`governance.acknowledgement`).

## Related

- Equipment capture in full: `sop.field.equipment-capture`
- Being there on time in the first place: `sop.field.start-time`
- What Dispatch checks at close: `sop.dispatch.daily-workflow`
