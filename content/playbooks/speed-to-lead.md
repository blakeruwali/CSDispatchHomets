---
id: playbook.speed-to-lead
title: Speed to Lead — The Standard
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [speed-to-lead, outbound, marketplace, angi, thumbtack, yelp, sla, lead-duty, servicetitan]
related: [playbook.angi, playbook.thumbtack, playbook.yelp, script.csm.marketplace-outreach, playbook.lsa, playbook.web, sop.csm.tools]
section: channels
order: 1
surfaces: [csm, checklist]
---

# Speed to Lead — The Standard

Every lead from Angi, Thumbtack and Yelp is **money we have already spent**. An unworked marketplace lead is not a missed opportunity — it is a paid invoice with nothing on the other side of it.

These leads go to several contractors at once. The customer is fielding calls from all of them, and the one who reaches them first usually books the job. We are not competing on price at this stage; we are competing on being first.

## The standard {#standard}

> **{{price:marketplace_callback_sla}} from submission to a human voice. Every marketplace lead, every time.**

| Channel | First touch | Where the lead lands |
|---|---|---|
| Angi | ≤ {{price:marketplace_callback_sla}} | **ServiceTitan, automatically** |
| Thumbtack | ≤ {{price:marketplace_callback_sla}} | Thumbtack app only — **CSM creates the ST lead** |
| Yelp | ≤ {{price:marketplace_callback_sla}} | Yelp only — **CSM creates the ST lead** |
| Google LSA | ≤ {{price:lsa_callback_sla}} | `playbook.lsa` |
| Website form | ≤ {{price:web_lead_callback_sla}} | `playbook.web` |

**First touch means a call placed, not a lead read.** Opening the notification is not a touch. Adding it to a list is not a touch. Dialling is.

## Two different failure modes {#two-failures}

The three marketplaces are not the same problem, because only one of them reaches our system of record.

**Angi is integrated.** The lead is in ServiceTitan the moment it arrives. It fails by sitting in a queue nobody is watching — a *notification* problem, and a solvable one. It is also the only marketplace channel we can currently measure at all.

**Thumbtack and Yelp are not.** Those leads exist only inside their platforms. Nothing about them is in ServiceTitan unless a CSM types it in, so they fail by being invisible — and it means **we cannot presently say how many we get, how fast we answer, or what a booked job from them costs.** Any figure quoted for those two channels today is a guess.

For those two, **creating the ServiceTitan lead at first touch is a required step of the procedure**, not bookkeeping to catch up on later. See `playbook.thumbtack` and `playbook.yelp`.

## Why this broke {#why-it-broke}

Inbound volume rose, the phones filled up, and marketplace leads quietly became nobody's job. That is the normal failure mode: they arrive silently, in a different place from the phone queue, with no ringing to demand attention. Work that does not interrupt you does not get done on a busy day.

Two things fix it, and both are needed:

1. **A named owner** — not "the team", a person, per shift. That is this document.
2. **Something that makes a late lead visible.** For Angi that is a ServiceTitan notification setting. For Thumbtack and Yelp it is currently a person checking two apps, which is exactly as fragile as it sounds.

## Lead duty {#lead-duty}

**One CSM per shift owns marketplace leads.** Named on the shift schedule, same as any other assignment.

- Lead duty **outranks the inbound queue** for the first {{price:marketplace_callback_sla}} of a new lead. A ringing phone will ring again; a marketplace lead will not.
- If the owner is on a call when a lead lands, **any available CSM takes it**, and claims it in ServiceTitan so nobody double-calls.
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

Every lead ends in one of these, recorded on the **ServiceTitan lead** — `sop.csm.tools`. For Thumbtack and Yelp that lead only exists because you created it at first touch:

| Outcome | Use when |
|---|---|
| **Booked** | It became a job |
| **Unreachable** | The full cadence ran out |
| **Not a lead** | Wrong service, outside our area, spam — **these are disputable with the platform** |
| **Lost** | We reached them and they went elsewhere |

**"Not a lead" is the one people skip.** Every platform lets you dispute a lead that was never real, and an undisputed bad lead is a bill we chose to pay. Disputes are filed in the platform's own portal on all three channels — the Angi integration brings leads in, it does not push disputes back out.

## What the tooling has to do {#tooling-requirement}

A requirement for whoever configures ServiceTitan and the lead integrations — **not a feature of this app**. ServiceTitan is our system of record; a lead queue anywhere else would be a second one, and `sop.csm.tools` exists to prevent exactly that.

### Angi — integrated already, needs alerting

1. **Notify the person on lead duty when a new Angi lead lands.** Not a dashboard they have to remember to open.
2. **Show the open lead queue with time elapsed**, so a late lead is visibly late.
3. **Report median time to first touch.** Median, not average — one lead found three days later would drag a mean so far that a genuinely fast week would look broken.

All three are achievable today, because the data is already in ServiceTitan.

### Thumbtack and Yelp — not integrated

The open decision is whether to connect them, via a lead integration, a connector, or an email parser into the ServiceTitan API. Connected, they inherit everything above and become measurable for the first time.

Not connected, **manual ST lead creation at first touch is permanent and mandatory**, and the alerting problem stays a human one: somebody has to be watching two apps.

**The standard applies either way.** Tooling changes how reliably it is met, not whether it applies.

## What gets measured {#measurement}

| Metric | Target | Measurable today? |
|---|---|---|
| Median first touch, Angi | ≤ {{price:marketplace_callback_sla}} | **Yes** — ST holds the data |
| Median first touch, Thumbtack / Yelp | ≤ {{price:marketplace_callback_sla}} | Only once ST leads are created at first touch |
| Leads within SLA | ≥ 80% | Angi now; the others follow capture |
| Leads never touched | **0** | Angi now; the others follow capture |
| Bad leads disputed | ≥ 80% | Manual on all three |

"Leads never touched" is the number that matters most right now. It should be zero every single day, and until it is, nothing else on this page is worth reading.

Individual call handling is scored against the **Marketplace Lead — Outbound Response** rubric at `/checklist` and reviewed in the weekly 1:1 — `governance.coaching`.

## Related

- Per-platform handling: `playbook.angi`, `playbook.thumbtack`, `playbook.yelp`
- What to say: `script.csm.marketplace-outreach`
- System of record: `sop.csm.tools`
