---
id: playbook.speed-to-lead
title: Speed to Lead — The Standard
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [speed-to-lead, outbound, marketplace, angi, thumbtack, yelp, sla, lead-duty]
related: [playbook.angi, playbook.thumbtack, playbook.yelp, script.csm.marketplace-outreach, playbook.lsa, playbook.web]
section: channels
order: 1
surfaces: [csm, checklist]
---

# Speed to Lead — The Standard

Every lead from Angi, Thumbtack and Yelp is **money we have already spent**. An unworked marketplace lead is not a missed opportunity — it is a paid invoice with nothing on the other side of it.

These leads go to several contractors at once. The customer is fielding calls from all of them, and the one who reaches them first usually books the job. We are not competing on price at this stage; we are competing on being first.

## The standard {#standard}

> **{{price:marketplace_callback_sla}} from submission to a human voice. Every marketplace lead, every time.**

| Channel | First touch |
|---|---|
| Angi | ≤ {{price:marketplace_callback_sla}} |
| Thumbtack | ≤ {{price:marketplace_callback_sla}} |
| Yelp | ≤ {{price:marketplace_callback_sla}} |
| Google LSA | ≤ {{price:lsa_callback_sla}} — `playbook.lsa` |
| Website form | ≤ {{price:web_lead_callback_sla}} — `playbook.web` |

**First touch means a call placed, not a lead read.** Opening the notification is not a touch. Adding it to a list is not a touch. Dialling is.

## Why this broke {#why-it-broke}

Inbound volume rose, the phones filled up, and marketplace leads quietly became nobody's job. That is the normal failure mode: they arrive silently, in a different place from the phone queue, with no ringing to demand attention. Work that does not interrupt you does not get done on a busy day.

Two things fix it, and both are needed:

1. **A named owner.** Not "the team" — a person, per shift.
2. **A queue that is visibly late.** A lead that is 14 minutes past its window has to look wrong on a screen someone is already watching.

## Lead duty {#lead-duty}

**One CSM per shift owns marketplace leads.** Named on the shift schedule, same as any other assignment.

- Lead duty **outranks the inbound queue** for the first {{price:marketplace_callback_sla}} of a new lead. A ringing phone will ring again; a marketplace lead will not.
- If the owner is on a call when a lead lands, **any available CSM takes it.** The queue shows who has claimed what, so nobody double-calls.
- If everyone is on a call, the lead still gets its {{price:marketplace_callback_sla}} — the Manager takes it. There is no version of this where the lead waits.
- **After hours**, marketplace leads go to the next morning's opener as the first task, before the Posh log. See `sop.csm.coverage`.

## The attempt cadence {#cadence}

One call is not an attempt at a lead — it is an attempt at a coincidence. Most contractors stop after one, which is exactly why attempts three through six are where the recovered jobs come from.

| # | When | What |
|---|---|---|
| 1 | Immediately | **Call** |
| 2 | +2 minutes | **Text** if no answer — `script.csm.marketplace-outreach` |
| 3 | +15 minutes | Call |
| 4 | +1 hour | Call |
| 5 | Next morning | Call |
| 6 | +48 hours | Final text, then close |

**{{price:marketplace_attempts}}**, then mark unreachable. Not before.

## Logging outcomes {#outcomes}

Every lead ends in one of these, and the wrong ones cost real money:

| Outcome | Use when |
|---|---|
| **Booked** | It became a job |
| **Unreachable** | The full cadence ran out |
| **Not a lead** | Wrong service, outside our area, spam — **these are disputable with the platform** |
| **Lost** | We reached them and they went elsewhere |

**"Not a lead" is the one people skip.** Every platform lets you dispute a lead that was never real, and an undisputed bad lead is a bill we chose to pay. Log it accurately the same day.

## What gets measured {#measurement}

The console at `/leads` tracks **median time to first touch per channel**, not the average — one lead found three days later would drag a mean so far that a genuinely fast week would look broken.

| Metric | Target |
|---|---|
| Median first touch, marketplace | ≤ {{price:marketplace_callback_sla}} |
| Leads within SLA | ≥ 80% |
| Leads never touched | **0** |
| Bad leads disputed | ≥ 80% |

"Leads never touched" is the number that matters most right now. It should be zero every single day, and until it is, nothing else on this page is worth reading.

## Related

- Per-platform handling: `playbook.angi`, `playbook.thumbtack`, `playbook.yelp`
- What to say: `script.csm.marketplace-outreach`
- The other paid channel with a hard SLA: `playbook.lsa`
