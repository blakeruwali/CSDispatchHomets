---
id: playbook.lsa
title: Channel Playbook — Google Local Services Ads (LSA)
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [lsa, google, local-services-ads, channel, playbook, dispute, callback]
related: [sop.csm.greeting, sop.csm.lead-source, sop.csm.kpis, playbook.inbound]
section: channels
order: 2
surfaces: [csm, checklist]
---

# Channel Playbook — Google Local Services Ads (LSA)

**Google grades us on answer speed and booking rate. Miss LSA and we lose rank.** This is the one channel where our handling directly changes how much future demand we get.

## The flow {#flow}

1. **LSA calls jump the queue — answer them first.** Ahead of any other ringing line.
2. **Same greeting** — `sop.csm.greeting`. No LSA-specific opener.
3. **Book aggressively** — these leads are pre-qualified and we've already paid for them.
4. **Log the outcome in the LSA dashboard within {{price:lsa_log_sla}}.**
5. **Missed LSA → call back within {{price:lsa_callback_sla}}** or the lead is dead.

## Outcome logging {#logging}

| Outcome | Log as |
|---|---|
| Booked | Booked |
| Wrong service / out of geography | Not a lead + reason |
| Missed | Missed + set a {{price:lsa_callback_sla}} callback |

## Why logging is not paperwork {#why-logging}

The log is what lets us dispute charges for leads that were never leads — wrong service, out of area, spam. Unlogged, we pay for them. Logged accurately and promptly, we get credited. The {{price:lsa_log_sla}} window exists because the dashboard's dispute path gets harder the longer you wait.

## Attribution {#attribution}

LSA callers describe us as "the top one with the green checkmark." Log the source as **Google — LSA**, not "Google" — see `sop.csm.lead-source`. Muddled attribution makes this channel's real cost per booked job impossible to read.

## KPIs {#kpis}

| Metric | Target |
|---|---|
| LSA answer rate | ≥ 95% |
| Missed-call callback | ≤ {{price:lsa_callback_sla}} |
| Dispute rate on ineligible leads | ≥ 80% |

## Related

- Source attribution rules: `sop.csm.lead-source`
- Standard inbound flow: `playbook.inbound`
