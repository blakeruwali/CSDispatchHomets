---
id: sop.csm.escalation
title: Escalation & Money-Back Authority
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [escalation, manager, refund, credit, authority, complaint, liability]
related: [sop.csm.de-escalation, sop.csm.transfer-hold, sop.csm.diagnostic-fee, sop.csm.post-service-followup]
surfaces: [csm, checklist]
---

# Escalation & Money-Back Authority

The single authority on when a CSM stops handling a call and hands it to a Manager. Other documents point here rather than keeping their own lists.

## Escalate immediately {#triggers}

| Trigger | Why it's non-negotiable |
|---|---|
| Customer asks for a manager — by name or generally | Arguing with this request escalates it every time |
| **Safety complaint about a technician** | Liability event, not a service complaint |
| Property damage alleged | Insurance and documentation implications |
| Threat of legal action, BBB, or attorney | Anything said after this can be quoted back |
| Discrimination or harassment claim | Zero CSM handling — straight to Manager |
| Abusive or threatening language | Stay calm, transfer. Do not absorb it. |
| Refund or credit above {{price:escalation_refund_threshold}} | Above CSM authority |
| Any cash refund | Above CSM authority regardless of amount |
| Same issue reported 3+ times | The pattern is the problem, not the incident |
| Warranty claim dispute | Needs the job record and a policy call |

**None of these are failures of your handling.** They are the defined boundary of the role — see `sop.csm.role`. A CSM who escalates a safety complaint in ten seconds did the job correctly.

## How to hand it off {#handoff}

> "I want to make sure this is handled properly. Let me connect you with [Manager] who can help resolve this. Can I place you on a brief hold?"

Then **brief the manager before connecting** — customer name, the issue, what you've already done. Warm transfer, never blind: `sop.csm.transfer-hold`.

## If no manager is available {#unavailable}

> "My manager is currently assisting another customer. Can I have them call you back within {{price:manager_callback_sla}}?"

Commit to the time, log it on the ticket, and tell the manager. {{price:manager_callback_sla}} is a promise the company keeps, not a way to end the call — a missed manager callback on an already-escalated customer is how a complaint becomes a review.

## What a CSM can offer {#authority}

**First offer, always: apology + priority rebook.** It resolves more than any discount does, and it costs nothing.

| Remedy | Who authorizes |
|---|---|
| Apology + priority rebook | CSM |
| Callback visit for incomplete or unresolved work | CSM — book it, no charge |
| Different technician (personality clash, trust) | CSM — note the reason |
| Discount on a future service | **Manager** |
| Waiving a diagnostic fee | **Manager** — see `sop.csm.diagnostic-fee` |
| Partial refund or credit | **Manager** |
| Full or cash refund | **Manager + Owner** |

> ⚠️ **Unconfirmed — conflict C2.** The knowledge base currently tells CSMs they may offer up to 10% off a future visit and may waive a diagnostic fee after a botched visit. The CSM SOP says CSMs never waive. **This table follows the stricter position**, because an unauthorised discount is the more expensive mistake to unwind. Pending owner confirmation — see `_migrated/csm-reconciliation.md`.

## What is never refundable {#non-refundable}

- **The diagnostic fee, once the visit happened.** Service was rendered. It is credited toward an approved repair, not refunded — `sop.csm.diagnostic-fee`.
- Exception: a diagnostic connected to a **previous botched visit** is a Manager call, not an automatic no.
- **Membership cancellation** is pro-rated if no services were used.

## Log every escalation {#logging}

On the ticket, before you hand off: what the customer said, what you offered, who you escalated to, and what you promised about timing. The manager picking it up should not have to ask the customer to repeat the story — that is the moment the call gets worse.

## Related

- De-escalation technique before the handoff: `sop.csm.de-escalation`
- Transfer mechanics: `sop.csm.transfer-hold`
- Post-service complaints: `sop.csm.post-service-followup`
