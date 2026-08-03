---
id: playbook.angi
title: Channel Playbook — Angi
department: csm
owner: cs-manager
status: in-review
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [angi, marketplace, lead, channel, playbook, speed-to-lead]
related: [playbook.speed-to-lead, script.csm.marketplace-outreach, sop.csm.lead-source]
section: channels
order: 5
surfaces: [csm, checklist]
---

# Channel Playbook — Angi

> ⚠️ **In review.** The handling standard below is settled. What is **not** confirmed is how Angi leads physically reach us today — shared inbox, someone's personal email, or only inside the Angi app — and that determines whether the queue can be fed automatically or has to be entered by hand. See the open question at the bottom.

## What makes Angi different {#character}

Angi leads are **sold to multiple contractors at once**. The customer submits one request and several companies are billed for it. From their side, their phone starts ringing and they take the first competent-sounding call.

That means:

- **Speed beats everything.** Not the better quote, not the nicer website — first.
- **We pay whether or not we call.** The cost is incurred at delivery, not at contact.
- **A lead we never touch is a pure loss** with no offsetting benefit at all.

## Handling {#handling}

1. **Call within {{price:marketplace_callback_sla}}** — `playbook.speed-to-lead`.
2. Open with the marketplace script — `script.csm.marketplace-outreach`.
3. Run standard intake and booking.
4. **Log the outcome in the console the same day** — `/leads`.
5. Log the lead source as **Angi** on the ServiceTitan ticket — `sop.csm.lead-source`.

## Disputing bad leads {#disputes}

Angi allows leads to be disputed when they were never serviceable. Log these as **"Not a lead"** with the reason on the same day:

- Outside Nassau / Suffolk — `sop.csm.service-area`
- A service we don't offer
- Wrong or dead phone number
- Duplicate of an existing lead
- Obvious spam

**An undisputed bad lead is a bill we chose to pay.** Target is ≥ 80% of bad leads disputed. The window for disputing is not indefinite, so same-day logging is the whole game.

## Watch for the deal-shopper {#deal-shopper}

Angi promotions surface in the dispatch guide's objection library as *"I saw a deal on Angi."* If they reference a specific promotional price, **do not confirm or improvise it** — get the booking, note exactly what they say they saw, and let a Manager confirm what we actually honour.

## Open question — how do these reach us? {#open-question}

**Blocking for automation.** Right now the console at `/leads` needs someone to enter the lead by hand, which costs about thirty seconds — acceptable, but it still depends on somebody noticing.

| If leads arrive by… | Then |
|---|---|
| Email to a shared inbox | A parser can feed the queue within seconds of arrival. Best case. |
| Email to a personal inbox | Set up forwarding to a shared address first, then as above. |
| Only in the Angi app | Automation needs either partner API access or an app-notification forwarding rule. Until then, manual entry with a phone alert. |

Answer this and the ingestion work is small. Until it's answered, **enter Angi leads manually the moment they appear** — the standard applies either way.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- What to say: `script.csm.marketplace-outreach`
