---
id: playbook.web
title: Channel Playbook — Website Form
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [web, form, website, lead, channel, playbook, callback]
related: [sop.csm.greeting, playbook.sms, sop.csm.kpis]
surfaces: [csm, checklist]
---

# Channel Playbook — Website Form

A web form is a customer who is, at that moment, filling out forms on other HVAC sites too. Speed is the whole game.

## The flow {#flow}

1. **Call within {{price:web_lead_callback_sla}} of submission** (during {{price:csm_hours}}).
2. **Opening:** "Hi [name], this is [you] at Home+ Air and Heat — I got your request about [issue]. Is now a good time to lock in a visit?"
3. **Voicemail + text within 2 minutes** if no answer.
4. **Second attempt in 2 hours. Third attempt the next morning.**
5. **After 3 attempts** → mark unreachable.

## Why the opener is different {#opener}

This is the one channel that does not use the standard greeting — they contacted us, so we name their issue back to them immediately. Referencing the specific problem they typed proves a human read it, which is exactly what a form-filler doubts.

## Why {{price:web_lead_callback_sla}} {#speed}

The form went to us and probably to two competitors. First real human on the phone books the job. A form answered in an hour is usually answered by someone else's tech already standing in the driveway.

## Attempt discipline {#attempts}

Three attempts, then stop and mark unreachable. Note each attempt on the ticket so the next CSM doesn't restart the count. Texts count against the cap in `playbook.sms`.

## KPI {#kpi}

| Metric | Target |
|---|---|
| First-touch time | ≤ {{price:web_lead_callback_sla}} |

## Related

- SMS rules and templates: `playbook.sms`
- Source attribution: `sop.csm.lead-source`
