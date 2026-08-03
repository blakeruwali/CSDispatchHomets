---
id: playbook.angi
title: Channel Playbook — Angi
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [angi, marketplace, lead, channel, playbook, speed-to-lead, servicetitan]
related: [playbook.speed-to-lead, script.csm.marketplace-outreach, sop.csm.lead-source, sop.csm.tools]
section: channels
order: 5
surfaces: [csm, checklist]
---

# Channel Playbook — Angi

**Angi leads flow directly into ServiceTitan.** That makes this the easy one — the lead is already in our system of record the moment it arrives, tagged and reportable.

Which means the failure mode here is not invisibility. It is a lead sitting in a queue nobody is watching.

## What makes Angi different {#character}

Angi leads are **sold to multiple contractors at once**. The customer submits one request, several companies are billed for it, and their phone starts ringing. They take the first competent-sounding call.

- **Speed beats everything.** Not the better quote, not the nicer website — first.
- **We pay whether or not we call.** The cost is incurred at delivery, not at contact.
- **A lead we never touch is a pure loss** with no offsetting benefit.

## Handling {#handling}

1. **Work it in ServiceTitan.** The lead is already there — do not re-key it anywhere else.
2. **Call within {{price:marketplace_callback_sla}}** of the customer's submission — `playbook.speed-to-lead`.
3. Open with the marketplace script — `script.csm.marketplace-outreach`.
4. Run standard intake and booking.
5. **Record the outcome on the ST lead the same day.**

Because Angi is integrated, **first touch is measurable from ServiceTitan today** — lead created against first call logged. This is the one marketplace channel where we can already see how fast we actually are.

## The one thing to configure {#configuration}

The lead arriving in ServiceTitan is not the same as somebody knowing it arrived.

**ServiceTitan must notify the person on lead duty when a new Angi lead lands** — not a dashboard they have to remember to open. An alert that only appears on a screen nobody is watching reproduces exactly the problem we are trying to fix. See the tooling requirement in `playbook.speed-to-lead`.

## Disputing bad leads {#disputes}

Disputes still happen in the **Angi portal**, not in ServiceTitan — the integration brings leads in, it does not push disputes back out. So this stays a manual step:

- Outside Nassau / Suffolk — `sop.csm.service-area`
- A service we don't offer
- Wrong or dead phone number
- Duplicate of an existing lead
- Obvious spam

Mark the ST lead as unqualified **and** file the dispute in the Angi portal the same day. **An undisputed bad lead is a bill we chose to pay.** Target ≥ 80% of bad leads disputed; the dispute window is not indefinite.

## Watch for the deal-shopper {#deal-shopper}

Angi promotions surface in the dispatch guide's objection library as *"I saw a deal on Angi."* If they reference a specific promotional price, **do not confirm or improvise it** — get the booking, note exactly what they say they saw, and let a Manager confirm what we actually honour.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- What to say: `script.csm.marketplace-outreach`
- The two channels that do **not** reach ST: `playbook.thumbtack`, `playbook.yelp`
