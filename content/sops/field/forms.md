---
id: sop.field.forms
title: Adding Equipment & Completing Forms Before You Close
department: field
owner: service-manager
status: published
version: 2
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

1. **Check the diagnostic fee on the form matches what the customer was quoted** — {{price:diagnostic_residential}}, {{price:diagnostic_discounted}}, or {{price:diagnostic_commercial}}.
2. **Equipment scanned and attached to the location** — every system, plate scanned on the tablet plus a data-plate photo (`sop.field.equipment-capture`).
3. **The job's form filled in** — readings, findings, what you did.
4. **Photos** — before, after, and anything you are flagging.
5. **If they bought the repair or the replacement, the diagnostic comes off the invoice.**
6. **Customer signature** captured on the device.
7. **Recommendations recorded**, even the declined ones.

**Two to three minutes.** Every one of them is cheaper than the phone call you get in three months about a job nobody can reconstruct.

## Get the diagnostic fee right before anyone signs {#fee-accuracy}

> **The fee on the form must be the fee the customer was told on the phone. Check it before you knock, not after they sign.**

The fee is not always the same number:

| Situation | Fee on the form |
|---|---|
| Standard residential repair call | {{price:diagnostic_residential}} |
| Dollars-off / promo call — CSM quoted the discount | {{price:diagnostic_discounted}} |
| Commercial | {{price:diagnostic_commercial}} |
| Active member | {{price:membership_diagnostic_posture}} — confirm status first (`sop.field.membership`) |
| We bumped this customer off an earlier day | Waived — {{price:bump_diagnostic_credit}} |

**Where to check:** the fee posture field on the ticket, set by the CSM at booking (`sop.csm.ticket-standards`). Read it in the truck before you walk up.

**If the form's fee does not match the ticket, call Dispatch and get it corrected before you present anything.** A signed form with the wrong number is the worst version of this problem — the customer signed one price and sees another, and now a good visit turns into a billing dispute we lose. Nobody signs a form you have not checked.

**Never change the quoted fee yourself.** You do not discount it and you do not raise it. If the customer says they were told a different number than the ticket shows, believe them, honor the number they were told, and note it — then Dispatch or the CSM sorts out the record.

## Equipment goes on the location, not in the notes {#equipment}

This is the mistake that costs the most. Notes are invisible on the next visit — they do not attach to the location, do not drive maintenance, and do not appear when the CSM books the next call.

**Every system at the address gets a record**, not just the one that broke: furnace *and* condenser, the second zone nobody mentioned, water heater, mini-split heads *and* the outdoor unit, every RTU on a commercial roof. Full field-by-field standard: `sop.field.equipment-capture`.

**Every job type, no exceptions** — diagnostic, tune-up, repair, estimate, install, callback, warranty visit. There is no visit where equipment capture is optional. The tune-up you do today is the warranty claim, the annual maintenance reminder, and the replacement quote next year, and all three fail if the model and serial are not on file.

## When the diagnostic gets credited {#credit}

We tell every customer: **approve the work today and the diagnostic comes off.** That promise is only kept if you take it off the invoice.

- Repair approved on this visit → remove the diagnostic line before the customer signs.
- Replacement approved on this visit → same, the diagnostic is credited onto the replacement.
- Customer declines everything → the diagnostic stands, in full, as quoted.

The credit happens on the invoice at the door, not "on the next one" — {{price:diagnostic_credit_on_sale}}. A customer who is billed a fee we said we would waive will call, and they will be right.

## Old systems and the non-repairable finding {#non-repairable}

Fifteen- and twenty-year-old equipment often is not worth repairing, and sometimes cannot be repaired at all. That does **not** make the visit free.

1. **Diagnose it properly anyway.** Readings, findings, and the reason it is non-repairable, on the form. "It's old" is not a diagnosis.
2. **The diagnostic is charged** — {{price:diagnostic_on_non_repairable}}. You spent 45–60 minutes establishing the answer, and the answer is what the customer paid for.
3. **The replacement estimate is free** ({{price:estimate_install}}) and is presented on the same visit — good / better / best (`sop.sales.good-better-best`).
4. **If they approve the replacement, the diagnostic is credited to it** — the same promise as any repair.
5. **Photograph the evidence**: the data plate showing age, the failed component, the rust or the cracked heat exchanger. This is what makes the replacement conversation believable.

Say it plainly at the door, before you start:

> "There's a diagnostic to find out exactly what's wrong. If it's repairable I'll price the repair, and if it isn't I'll show you why and price the replacement — either way, if you move forward today the diagnostic comes off."

That sentence is what stops the "you charged me just to tell me it's dead" call.


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
