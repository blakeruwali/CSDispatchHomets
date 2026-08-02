---
id: sop.csm.ticket-standards
title: ServiceTitan Ticket Standards
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [servicetitan, ticket, fields, required, standards, dispatchable]
related: [sop.csm.intake, sop.csm.dispatch-handoff, sop.csm.tools, sop.csm.lead-source]
surfaces: [csm, checklist]
---

# ServiceTitan Ticket Standards

**A ticket is dispatchable only if it is complete.** Incomplete tickets are wasted tech time — a truck at a curb with a locked gate and nobody to call.

## Required fields {#fields}

| Field | Rule |
|---|---|
| Customer name | Verified + spelled |
| Phone | Best callback, tested |
| Service address | Full, including unit / suite |
| Access notes | Gate code, dog, stairs, hours |
| System type | Specific subtype — `sop.csm.system-type` |
| Symptom | Customer's words **+** your paraphrase — `sop.csm.symptom-clarification` |
| Job type | Repair / Install / Maintenance / Estimate |
| Business unit | Correct BU — `sop.csm.res-vs-comm` |
| Membership | Member / non-member / lapsed |
| Lead source | Verbatim — `sop.csm.lead-source` |
| Diagnostic fee posture | {{price:diagnostic_residential}} / {{price:diagnostic_commercial}} / waived |
| Window | 2-hour slot from {{price:service_windows}} |
| Confirmation text sent | Must be **YES** |

## Ticket completeness is a 100% target {#completeness}

Not 95%. Every field, every ticket — see `sop.csm.kpis`. These fields are binary: either the access note is there or the tech is standing at a locked gate.

## The fee posture field {#fee-posture}

Record which fee applies and why. "Waived" without a reason is the field that produces billing disputes weeks later. Member waivers reference the membership; anything else requires Manager approval — `sop.csm.diagnostic-fee`.

## If it's not in ServiceTitan, it didn't happen {#record}

Promises made on the call — a specific tech, a callback, a soft-hold deadline, a quoted number — live on the ticket or they don't exist. See `sop.csm.tools`.

## Related

- Intake sequence that fills these: `sop.csm.intake`
- Checklist before you save: `sop.csm.dispatch-handoff`
