---
id: sop.csm.res-vs-comm
title: Residential vs Commercial Routing
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [residential, commercial, routing, business-unit, rtu, multi-family]
related: [sop.csm.customer-profiles, sop.csm.system-type, sop.csm.diagnostic-fee]
surfaces: [csm, checklist]
---

# Residential vs Commercial Routing

Residential and commercial are different fees, different labor rates, different techs, and different business units. Route it at intake — re-routing after booking wastes a slot.

## Routing table {#routing}

| Signal | Route to |
|---|---|
| Single-family home, owner on phone | Residential BU — {{price:diagnostic_residential}} diag, {{price:labor_residential_hourly}} |
| Business name / office / retail / restaurant | Commercial BU — {{price:diagnostic_commercial}} diag, {{price:labor_commercial_hourly}} |
| Multi-family with individual tenant meters | Residential — **verify owner authorization** |
| Large multi-tenant building | Commercial + Manager review |
| Rooftop unit (RTU) | **Commercial by definition** |

## The two that trip people up {#edge-cases}

**Multi-family with individual meters.** It looks commercial because it's a big building, but a separately metered unit is a residential job. The catch is authorization — the person calling may be a tenant. Verify per `sop.csm.customer-profiles` before dispatch.

**Rooftop units.** No matter what the building looks like or who is calling, an RTU is commercial. Roof access, equipment size, and tech certification all follow from that.

## When you genuinely can't tell {#ambiguous}

Ask what the space is used for, not what the building is:

> "Is this a home, or a business location?"

If the answer is "both" — a converted house with an office downstairs, a storefront with an apartment above — route commercial and note why. Commercial pricing on a residential job is a conversation; residential pricing on a commercial job is a loss we absorb.

## Related

- Who is authorized to approve work: `sop.csm.customer-profiles`
- Fee framing once routed: `sop.csm.diagnostic-fee`
