---
id: sop.field.forms
title: Adding Equipment & Completing Forms Before You Close
department: field
owner: service-manager
status: published
version: 3
last_reviewed: 2026-09-04
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

## When this applies {#applies}

Every job, every job type, before you press Complete in ServiceTitan — diagnostic, repair, tune-up, install, estimate, callback, warranty visit. There is no close where forms and equipment are optional, and there is no "I'll add it later" that counts.

## The execution ladder {#execution}

1. **Check the diagnostic fee on the form against what the customer was quoted** — {{price:diagnostic_residential}}, {{price:diagnostic_discounted}}, or {{price:diagnostic_commercial}}, adjusted for membership status (`sop.field.membership`). Do this before anyone signs anything.
2. **Confirm equipment is scanned and attached to the location** for every system at the address, not just the one you came for (`sop.field.equipment-capture`).
3. **Fill in the job's form completely** — readings as numbers, findings, what you did, part numbers and warranty status.
4. **Take photos** — before, after, the data plate, and anything you are flagging.
5. **Remove the diagnostic line if the repair or replacement was approved on this visit.**
6. **Record every recommendation, including declined ones**, with the price given and the customer's stated reason.
7. **Get the customer's signature on the device.**
8. **Only then press Complete.**

Two to three minutes, every time. Every minute of it is cheaper than the phone call in three months about a job nobody can reconstruct.

## What you say {#verbatim}

> "There's a diagnostic to find out exactly what's wrong. If it's repairable I'll price the repair, and if it isn't I'll show you why and price the replacement — either way, if you move forward today the diagnostic comes off."

> "I want to get your signature here just confirming what we did today and what we found — takes ten seconds."

> "I'm noting that you're holding off on the coil replacement for now — that stays on file so whoever comes out next isn't starting from zero."

## Worked example {#example}

**Weak:** Tech replaces a capacitor, tells the customer the blower motor is "getting tired," customer says maybe later, tech closes the job with no note on it. Four months later the blower fails on an emergency no-cool call. The new tech has no idea it was flagged, re-diagnoses from scratch, and the customer says "didn't you guys already look at that?"

**Perfect:** Same repair, but the form records: "Blower motor bearing noise audible at startup, amp draw within spec but trending high. Recommended replacement at {{price:estimate_install}}-scoped estimate; customer declined, citing budget, wants to revisit in spring." Four months later the same call comes in — the tech arrives with the part already suspected and the customer says "yeah, you guys did tell me this might happen."

| | Weak | Perfect |
|---|---|---|
| Declined recommendation | Not recorded | Recorded with price and reason |
| Diagnostic fee on form | Not checked against quote | Verified before signature |
| Next visit | Starts from zero | Starts from history |

## When it goes wrong {#failures}

- **The form's fee doesn't match the ticket.** Call Dispatch and get it corrected before you present anything. Never change the quoted fee yourself, in either direction — if the customer says they were told something different, believe them, honor it, and note the discrepancy for Dispatch to reconcile.
- **A non-repairable unit's diagnostic gets skipped or waived on your own judgment.** It is charged — {{price:diagnostic_on_non_repairable}} — because you spent real time establishing the answer. The replacement estimate itself is free ({{price:estimate_install}}), and the diagnostic is credited only if they buy the replacement.
- **Job runs long and the form gets "finished later."** It won't be — capture rate after the fact is close to zero. If you are genuinely out of time, flag the gap to Dispatch before you close rather than closing incomplete and silent.
- **Dispatch flags a closed job with a blank form or missing equipment.** Acknowledge same day and complete or explain the gap; a written exception (no access, plate illegible, customer refused) is acceptable, a silent one is not.

### Hard rules

- Never let a customer sign a form with a fee you have not verified against the ticket.
- Never discount or raise a quoted diagnostic fee on your own authority.
- Never record equipment or findings only in free-text notes instead of the structured fields.
- Never close a job without recording a declined recommendation as a declined recommendation.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Fee verified, equipment attached, form complete with numeric readings, photos taken, declined items recorded, signature captured |
| 1 | Form and signature present but one element thin — vague readings, missing photo, or an unrecorded decline |
| 0 | Form blank or missing, equipment not attached, or a fee discrepancy signed without correction |

## Related

- Equipment capture in full: `sop.field.equipment-capture`
- Being there on time in the first place: `sop.field.start-time`
- What Dispatch checks at close: `sop.dispatch.daily-workflow`
