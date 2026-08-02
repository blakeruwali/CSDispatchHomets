---
id: sop.csm.communication
title: Communication Standards
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [tone, communication, standards, greeting, hold, callback, sla]
related: [sop.csm.greeting, sop.csm.transfer-hold, script.csm.tone-language, sop.csm.non-english-callers, sop.csm.kpis]
surfaces: [csm, checklist]
---

# Communication Standards

The floor every CSM interaction stands on, regardless of channel.

## Greeting {#greeting}

Verbatim, every call:

> **"Thank you for choosing Home+ Air and Heat, this is [name], how can we serve you today?"**

Full standard, including what we never say and why the wording is what it is: `sop.csm.greeting`.

## Hold protocol {#hold}

- Ask permission before holding. Always.
- Cap at {{price:hold_cap}}.
- Return with an update even if you have no answer yet.

Full warm-transfer procedure: `sop.csm.transfer-hold`.

## Callback SLAs {#callback-sla}

| Channel | First touch |
|---|---|
| LSA missed call | ≤ {{price:lsa_callback_sla}} |
| Web form | ≤ {{price:web_lead_callback_sla}} |
| General inbound voicemail | ≤ {{price:voicemail_callback_sla}} |
| Posh message-only | By {{price:posh_callback_deadline}} |

These are commitments, not aspirations. They are scored — see `sop.csm.kpis`.

## Written communication {#written}

- No emojis, no all-caps, no abbreviations a customer would have to decode.
- Full sentences. Sign with your first name.
- Anything sent to a customer should read the way you would say it out loud.

## Related

- Greeting standard: `sop.csm.greeting`
- Transfer & hold: `sop.csm.transfer-hold`
- Targets and measurement: `sop.csm.kpis`
