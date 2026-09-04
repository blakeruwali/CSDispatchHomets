---
id: sop.csm.dispatch-handoff
title: Dispatch Handoff Checklist
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [dispatch, handoff, checklist, save, ticket, quality-gate]
related: [sop.csm.booking-authority, sop.csm.ticket-standards, sop.csm.intake, protocol.emergency.triage, sop.csm.lead-source, sop.dispatch.daily-workflow]
section: post-booking
order: 2
surfaces: [csm, checklist]
---

# Dispatch Handoff Checklist

> **Run this while the customer is still on the line. A question you ask now costs eight seconds; the same question tomorrow costs a callback, a rescheduled truck, and the customer's confidence.**

The handoff is the last quality gate between a conversation and a truck. Everything upstream of it — intake, system type, fee posture — is only worth what survives into the ticket Dispatch actually reads.

## When this applies {#applies}

Immediately before you save any ticket that creates a visit: repair, install estimate, maintenance, warranty callback, or a rebooked continuation appointment. It applies to every channel, including a job you are entering on behalf of Posh or a web form.

The field-by-field standard for *what* goes in each field is `sop.csm.ticket-standards`. This document is the gate you run *after* those fields are filled and *before* you hit save.

## The execution ladder {#execution}

Do it out loud in your head, in this order, before the customer hangs up.

1. **Read the ticket back to yourself as if you were the technician**, not as the person who typed it. If the first thing a tech would do is call you to ask something, that thing is missing.
2. **Check the completeness list** below. Every box, every ticket.
3. **Fill any gap while the line is still open.** This is the entire point of the document.
4. **Say the confirmation sentence** to the customer and send the confirmation text before you end the call — `sop.csm.confirmation`.
5. **Tag priority if it is an emergency**, per `protocol.emergency.triage`. Do not describe an emergency in the notes and leave the tag off; Dispatch sorts on the tag.
6. **Save.** Then, and only then, is the job Dispatch's.

## The checklist {#checklist}

- ☐ All `sop.csm.ticket-standards` fields complete
- ☐ Symptom is dispatchable — the tech knows what to bring
- ☐ Address confirmed in-map
- ☐ Access notes present
- ☐ Correct business unit — `sop.csm.res-vs-comm`
- ☐ Priority tag if emergency — `protocol.emergency.triage`
- ☐ Fee posture recorded, with the amount quoted — `sop.csm.diagnostic-fee`
- ☐ Membership status recorded — `sop.csm.membership-status`
- ☐ Confirmation text sent
- ☐ Notes include: objections handled, membership pitched (Y/N + result), lead source verbatim

## The one rule {#rule}

**Missing information while the customer is still on the line? Get it now.**

Do NOT save an incomplete ticket "to fix later." Later means calling a customer back to ask a question you already had them on the phone for — the single most avoidable way we look disorganized, and the most common reason Dispatch calls a CSM back mid-shift.

## What you say {#verbatim}

Buying the eight seconds you need:

> "Give me one moment while I make sure the technician has everything — I'd rather get it right now than call you back."

Filling the access gap, which is the one most often missed:

> "Two quick things so he isn't standing at the curb: is there a gate, a dog, or a code he'd need? And is the unit in the basement, attic, or outside?"

Confirming the address properly — read it back, do not ask them to repeat it:

> "So that's 412 Whitman Road in Huntington Station — is that the same as the mailing address, or is the service address different?"

Closing the handoff to the customer:

> "You're all set for Thursday between two and four. You'll get a text confirmation in the next minute, and the technician will call when he's on the way."

## Why the notes field is on the checklist {#notes}

The three note items aren't administrative:

- **Objections handled** tells the tech what the customer is already worried about before they knock.
- **Membership pitched (Y/N + result)** stops the tech re-pitching something the customer declined an hour ago.
- **Lead source verbatim** is the marketing record and, for referrals, someone's credit — `sop.csm.lead-source`.

## Address confirmed in-map {#address}

Read the address back *and* confirm the pin resolves to a real location. Long Island has repeated street names across Nassau and Suffolk; a plausible-looking address in the wrong county is a lost half-day. If the pin lands in a field or the map cannot find the number, ask for a cross street before you save.

## A handoff done badly and done well {#worked-example}

| Weak CSM | Perfect CSM |
|---|---|
| "Not cooling" in the symptom field | "AC running continuously, air from vents is not cold, started yesterday afternoon; outdoor unit is running. 2018 Carrier, side of house." |
| Address typed, never verified | Address read back and pin confirmed in-map |
| Access notes blank | "Gate on the left, code 4412. Large dog kept inside. Basement access through the side door." |
| Fee posture blank or "TBD" | "{{price:diagnostic_residential}} quoted and accepted; credited in full if repair approved same visit" |
| Emergency described in notes, no tag | Tagged per `protocol.emergency.triage`, then described |
| Saves and moves on | Reads it back as the tech, fills the gap, sends the confirmation, then saves |

The difference between these two tickets is roughly ninety seconds of CSM time and roughly one wasted truck roll.

## When it goes wrong {#failures}

**The customer is in a hurry and wants off the phone.** Prioritise: address, access, callback number, symptom. Those four are what make the visit possible. Say you will text for the rest — and then actually text.

**The caller is not the person at the property** (tenant, adult child, property manager). Get the on-site contact's name and number as well as the caller's, and note who is authorised to approve work — that authority question is `sop.csm.booking-authority`, and getting it wrong stops the job at the door.

**You have already saved the ticket and then spot the gap.** Call the customer back immediately, not at the end of your shift. A recovery call within ten minutes reads as thorough; one the next morning reads as disorganised.

**Dispatch calls you back about a ticket you wrote.** Fix it, and treat it as a scored miss on this checklist — that call is the metric this document exists to drive to zero.

### Hard rules

- Never save an incomplete ticket intending to fix it later.
- Never save a ticket with an unverified address.
- Never leave the access notes blank because the caller "didn't mention anything."
- Never describe an emergency without tagging it.
- Never end the call before the confirmation text is sent.

## QA scoring {#qa}

| Score | What it looks like |
|---|---|
| **2** | Every checklist item complete before save, address verified in-map, gaps closed on the live call, confirmation sent, no Dispatch callback. |
| **1** | Ticket is workable but one non-blocking item is missing (notes incomplete, membership status unrecorded). |
| **0** | Dispatch or the technician had to call for missing information, or the ticket was saved knowingly incomplete. |

## Related

- Field-by-field standard: `sop.csm.ticket-standards`
- Emergency priority tagging: `protocol.emergency.triage`
- Who can authorise work: `sop.csm.booking-authority`
- What Dispatch does with it next: `sop.dispatch.daily-workflow`
