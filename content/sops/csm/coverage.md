---
id: sop.csm.coverage
title: Hours, Coverage & Shift Handoffs
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [hours, coverage, posh, after-hours, handoff, shift]
related: [playbook.posh, sop.csm.role, protocol.emergency.triage]
section: foundations
order: 2
surfaces: [csm]
---

# Hours, Coverage & Shift Handoffs

## Who is covering the phone, when {#coverage}

| Window | Covered by |
|---|---|
| {{price:csm_hours}}, {{price:csm_days}} | CSM team, live |
| {{price:posh_coverage_full}} | Posh, external answering service |
| Any hour | On-call tech — Dispatch rotates weekly; Posh escalates true emergencies only |

There is no hour with nobody on it. If a customer says "I called and nobody answered," that is a defect — log it and tell the manager.

## Shift start — 7:00 AM {#shift-start}

1. Pull the Posh overnight log **first**, before touching the queue.
2. Triage every overnight ticket into one of three buckets: emergency-dispatched / booked / message-only.
3. Call back every message-only ticket by {{price:posh_callback_deadline}}.

Full morning procedure, including verification steps for the emergency and booked buckets: `playbook.posh`.

## Shift end — 5:00 PM {#shift-end}

1. Log any open callbacks in the Posh instructions field so the overnight service can answer intelligently.
2. Note any soft-hold slots so Posh does not rebook over them.

An open callback that is not written into Posh instructions is an open callback that dies overnight.

## Escalating outside CSM hours {#after-hours}

Emergencies do not wait for business hours. If a life-safety signal appears at any hour, `protocol.emergency.triage` overrides everything on this page.

## Related

- After-hours channel playbook: `playbook.posh`
- Emergency triage matrix: `protocol.emergency.triage`
