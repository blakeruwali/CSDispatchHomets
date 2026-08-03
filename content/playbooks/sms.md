---
id: playbook.sms
title: Channel Playbook — SMS & Missed-Call Text-Back
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [sms, text, text-back, missed-call, channel, playbook]
related: [sop.csm.tools, sop.csm.communication, sop.csm.confirmation-cadence]
section: channels
order: 10
surfaces: [csm, checklist]
---

# Channel Playbook — SMS & Missed-Call Text-Back

## Missed inbound during CSM hours {#text-back}

Text within {{price:sms_textback_sla}}:

> "Hi, this is [name] at Home+ Air and Heat — I just missed your call. Want me to book you a window today? Reply here."

A missed call is a customer already dialing the next company. A text inside two minutes catches a meaningful share of them, and it works even when they can't take a call back.

## Rules {#rules}

- **Max {{price:sms_max_unanswered}} outbound texts per 24h without a reply.**
- **All texts go through the ServiceTitan number — never a personal phone.** See `sop.csm.tools`.
- **No emojis, no all-caps.**
- **Post-visit thank-you and review requests are automated — do not send them manually.**

## Why the cap exists {#cap}

Past two unanswered texts we are not persistent, we are a nuisance — and unsolicited repeat texting carries real compliance exposure. Two, then stop and let the call attempts carry it.

## Why company numbers only {#numbers}

A text from a personal phone is invisible to ServiceTitan, so it isn't part of the record, can't be audited, and walks out the door when the CSM leaves. It also gives the customer a number that will never be answered by whoever replaces them.

## Don't duplicate the automations {#automated}

The confirmation cadence — reminders, "tech on the way," thank-you, review request — is automated. Manual duplicates make us look disorganized and are the most common source of "why do you keep texting me?" See `sop.csm.confirmation-cadence`.

## Related

- Tools of record: `sop.csm.tools`
- Automated touch schedule: `sop.csm.confirmation-cadence`
