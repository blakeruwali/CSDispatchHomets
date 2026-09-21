---
id: sop.csm.intake
title: Required Intake Data Fields
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [intake, data, fields, required, name, phone, address, access]
related: [sop.csm.ticket-standards, sop.csm.symptom-clarification, sop.csm.lead-source, sop.csm.dispatch-handoff, sop.csm.system-type, sop.csm.service-type, sop.csm.res-vs-comm]
section: intake
order: 1
surfaces: [csm, checklist]
---

# Required Intake Data Fields

> **Eight fields, in order, on every call — skip one and Dispatch calls the customer back after they've already hung up on you.**

## When this applies {#applies}

Every inbound call that isn't already a dispatched job checking in. This is the shell the rest of intake runs inside — `sop.csm.symptom-clarification`, `sop.csm.service-type`, `sop.csm.system-type`, and `sop.csm.res-vs-comm` are the deep dives on fields 4 and 5. If the caller is describing gas smell, no heat below freezing, or anything on `protocol.emergency.triage`, stop and go there first — intake fields wait, safety doesn't.

## The execution ladder {#execution}

Collect in this order. Don't reorder it to "save time" — the order exists because of what happens if the call drops.

1. **Full name** — get it spelled if there's any doubt. "Is that with two Ns or one?"
2. **Best callback phone.** Confirm it back digit by digit. This and name are the two fields that let you recover a dropped call — everything after this point is dead weight if you lose the customer before you get here.
3. **Full service address**, including unit or suite number. Repeat it back.
4. **System type** — see `sop.csm.system-type`.
5. **Primary symptom**, in the customer's words plus your paraphrase — see `sop.csm.symptom-clarification`.
6. **Access notes** — gate code, dog, stairs, business hours. Ask for this explicitly; it's the field customers forget once you move on.
7. **Membership status** — member / non-member / lapsed. See `sop.csm.membership-status`.
8. **Lead source**, verbatim — see `sop.csm.lead-source`.

Name and phone come first because a dropped call after field 2 is recoverable; a dropped call before it is a lost customer. Access notes come before membership and lead source because once the conversation turns to money or marketing, nobody remembers there's a dog in the yard.

## What you say {#verbatim}

Opening, to get name and number locked before anything else:

> "Happy to help — let me just grab your name and a good callback number first, in case we get disconnected."

Confirming the address:

> "So that's 42 Oak Street, unit 2B, Massapequa — did I get that right?"

Asking for access notes, framed as protecting the customer's own appointment:

> "Last couple things so our tech isn't stuck at the curb — is there a gate code, a dog, or anything about getting to the unit I should know?"

If a customer tries to skip straight to "just send someone":

> "I'll get someone out there today — I just need thirty seconds of information first so the tech shows up with the right parts and can actually get to the unit."

## Worked example {#example}

| | Weak intake | Perfect intake |
|---|---|---|
| Name/phone | Asked at the very end, after the customer had already hung up mid-address | Asked first, confirmed back digit by digit |
| Address | Took it once, no repeat-back — tech got the wrong building on a multi-unit block | Repeated back including unit number |
| Symptom | "AC broken" typed verbatim, nothing else | Customer's words plus paraphrase: "outdoor unit runs, no cold air, started yesterday" |
| Access | Never asked — tech spent 20 minutes trying to reach a locked side yard | Asked directly, logged "gate code 4471, dog is friendly" |
| Result | Truck rolled, tech stuck at curb, second trip booked | Truck rolled once, tech walked straight to the unit |

## When it goes wrong {#failures}

- **Call drops before you get the callback number.** You have nothing to recover with — log what you have (name if captured, caller ID number) and flag the ticket for a callback attempt at that number. This is exactly why phone comes second, not fifth.
- **Customer refuses to give access details ("just tell them to knock").** Note it as declined, not blank — a declined field is a decision; a blank field looks like your mistake.
- **Customer is in a hurry and tries to skip ahead to a time slot.** Don't negotiate the order away — thirty seconds now is the difference between one trip and two. Say so plainly, then move fast through the remaining fields.
- **Two different phone numbers come up (cell vs. landline).** Ask which one the tech should call from the truck, and log both with that one marked "primary."

### Hard rules

- Never save a ticket without name and callback number confirmed.
- Never skip access notes because the customer sounds easy or the address sounds simple.
- Never leave a field blank without noting *why* — "declined," "unknown," "N/A for this job type."

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | All eight fields captured, in order, address and phone confirmed back to the customer, access notes asked explicitly |
| 1 | All fields eventually captured but out of order, or one field (not name/phone/address) missing and later recovered |
| 0 | Name, phone, or address missing or unconfirmed, or ticket saved with a blank field and no note explaining it |

## Related

- Full ticket field list and rules: `sop.csm.ticket-standards`
- Pre-save checklist: `sop.csm.dispatch-handoff`
- Making the symptom dispatchable: `sop.csm.symptom-clarification`
