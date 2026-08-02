---
id: playbook.posh
title: Channel Playbook — Posh After-Hours Handoff
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [posh, after-hours, overnight, handoff, channel, playbook, on-call]
related: [sop.csm.coverage, protocol.emergency.triage, sop.csm.confirmation]
surfaces: [csm, checklist]
---

# Channel Playbook — Posh After-Hours Handoff

Posh covers {{price:posh_coverage_full}}. Everything they take becomes CSM work at 7 AM.

## Morning intake — 7 AM sharp {#morning}

1. **Pull the Posh overnight log.** First thing, before the queue.
2. **Sort into three buckets:** emergency-dispatched / booked / message-only.
3. **Verify emergency:** confirm the on-call tech resolved it, then call the customer.
4. **Verify booked:** confirm the window is real on the board, then send the confirmation text.
5. **Call back every message-only ticket by {{price:posh_callback_deadline}}.**

## Why every bucket gets verified {#verify}

Posh is an answering service, not a dispatcher. They take good notes; they cannot see our board. So:

- An "emergency dispatched" overnight may have been resolved, or may have been logged and missed. Confirm with the tech, then close the loop with the customer — who has been up all night either way.
- A "booked" overnight slot may collide with the real board. Verify before the confirmation text goes out, not after.
- A "message-only" ticket is a customer who has been waiting since last night. {{price:posh_callback_deadline}} is a hard deadline.

## End of shift — 5 PM {#end-of-shift}

- Log open callbacks in the Posh instructions field so overnight callers get an intelligent answer.
- Note any soft-hold slots so Posh does not rebook over them.

## After-hours emergencies {#emergency}

Posh escalates true emergencies to the on-call tech directly — Dispatch rotates the on-call weekly. The triage signals are the same at 2 AM as at 2 PM: `protocol.emergency.triage`.

## KPIs {#kpis}

| Metric | Target |
|---|---|
| {{price:posh_callback_deadline}} callback completion | 100% |
| Mis-dispatch rate | ≤ 2% |

## Related

- Coverage and shift boundaries: `sop.csm.coverage`
- Emergency triage: `protocol.emergency.triage`
