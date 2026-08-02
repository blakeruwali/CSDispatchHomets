---
id: sop.csm.intake
title: Required Intake Data Fields
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [intake, data, fields, required, name, phone, address, access]
related: [sop.csm.ticket-standards, sop.csm.symptom-clarification, sop.csm.lead-source, sop.csm.dispatch-handoff]
surfaces: [csm, checklist]
---

# Required Intake Data Fields

Capture in this order. **Do not skip fields to save time — Dispatch will call you back**, and by then the customer is off the phone.

## The eight fields {#fields}

1. **Full name** — spelled and confirmed.
2. **Best callback phone.**
3. **Full service address** — including unit / suite.
4. **System type** — boiler / furnace / AC / heat pump / mini-split / plumbing. See `sop.csm.system-type`.
5. **Primary symptom** — in the customer's words, *plus* your paraphrase. See `sop.csm.symptom-clarification`.
6. **Access notes** — gate code, dog, stairs, business hours.
7. **Membership status** — member / non-member / lapsed. See `sop.csm.membership-status`.
8. **Lead source** — verbatim. See `sop.csm.lead-source`.

## Why the order matters {#order}

Name and callback number come first because they are what lets us recover the call if it drops. Everything after that is recoverable; a disconnected caller you can't ring back is not.

Access notes come before membership and lead source because they are the field customers forget once the conversation turns to money.

## Access notes are not optional {#access}

"Access notes" is the field most often left blank and the one that most often costs a truck roll. Ask explicitly rather than waiting for it to come up:

> "Last couple things so our tech isn't stuck at the curb — is there a gate code, a dog, or anything about getting to the unit I should note?"

Gate code, dog, stairs, parking, and — for commercial — the hours somebody is actually on site.

## Related

- Full ticket field list and rules: `sop.csm.ticket-standards`
- Pre-save checklist: `sop.csm.dispatch-handoff`
