---
id: sop.csm.service-type
title: Service Type Identification
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [service-type, repair, install, maintenance, estimate, diagnostic]
related: [sop.csm.diagnostic-fee, sop.csm.system-type, sop.csm.res-vs-comm]
section: intake
order: 2
surfaces: [csm, checklist]
---

# Service Type Identification

The service type sets the fee. Getting it wrong means either quoting a diagnostic on a free estimate, or giving away a diagnostic we should have charged for.

## Translation table {#translation}

| They say | It's actually | Fee posture |
|---|---|---|
| "It's broken / not working" | Repair diagnostic | {{price:diagnostic_residential}} res / {{price:diagnostic_commercial}} comm |
| "I need a new one / mine is old" | Install estimate | {{price:estimate_install}} |
| "Annual / tune-up / check" | Maintenance | Flat maintenance price, or Home+ covered |
| "Just a quote" | Repair diag **or** install estimate — clarify | Depends on which |

## Clarifying "just a quote" {#just-a-quote}

This is the ambiguous one, and it is the most common phrase on the phone. One question resolves it:

> "Happy to — are you looking to get the system you have fixed, or looking at replacing it?"

- **Fix what they have** → repair diagnostic, fee applies. Frame it now, per `sop.csm.diagnostic-fee`.
- **Replace** → install estimate, {{price:estimate_install}}. Say so plainly; it's a selling point.

Never let a customer arrive at the door believing an estimate was free when it's a billable diagnostic. That is the single most common source of doorstep disputes.

## Related

- Framing the diagnostic fee: `sop.csm.diagnostic-fee`
- Routing to the right business unit: `sop.csm.res-vs-comm`
