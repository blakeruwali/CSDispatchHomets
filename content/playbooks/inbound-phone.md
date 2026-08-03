---
id: playbook.inbound
title: Channel Playbook — Inbound Phone
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [inbound, phone, channel, playbook, answer-rate]
related: [sop.csm.greeting, sop.csm.intake, sop.csm.availability, sop.csm.kpis]
section: channels
order: 3
surfaces: [csm, checklist]
---

# Channel Playbook — Inbound Phone

The default channel. Everything in the master CSM SOP applies; this page carries only what is specific to live inbound voice.

## The flow {#flow}

1. **Answer by ring {{price:answer_by_ring}}** (target 90%+).
2. **Standard greeting** — `sop.csm.greeting`.
3. **Acknowledge, then intake** — `sop.csm.active-listening` → `sop.csm.intake`.
4. **Book** — `sop.csm.availability` → `sop.csm.confirmation`.
5. **Hold cap {{price:hold_cap}}**, permission first — `sop.csm.transfer-hold`.
6. **Confirmation text before hangup.**

## KPIs {#kpis}

| Metric | Target |
|---|---|
| Answer rate | ≥ 90% within {{price:answer_by_ring}} |
| Booking rate (qualified) | ≥ 70% |
| Hold time | ≤ {{price:hold_cap}} |

## Missed inbound {#missed}

A missed call during {{price:csm_hours}} triggers the text-back inside {{price:sms_textback_sla}} — see `playbook.sms`. Voicemail gets a callback inside {{price:voicemail_callback_sla}}.

## Related

- Master SOP entry point: `sop.csm.greeting`
- Missed-call text-back: `playbook.sms`
- After hours: `playbook.posh`
