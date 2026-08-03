---
id: sop.csm.kpis
title: KPIs the CSM Owns
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [kpi, metrics, targets, answer-rate, booking-rate, membership]
related: [sop.csm.communication, governance.qa.csm, governance.coaching, playbook.speed-to-lead]
section: foundations
order: 5
surfaces: [csm, checklist]
---

# KPIs the CSM Owns

Seven numbers. Every one of them is inside the CSM's control — none of them depend on Dispatch, the techs, or the weather.

## Targets {#targets}

| Metric | Target |
|---|---|
| Answer rate (inbound) | ≥ 90% within {{price:answer_by_ring}} |
| LSA answer rate | ≥ 95% |
| Web form first-touch | ≤ {{price:web_lead_callback_sla}} |
| Booking rate (qualified callers) | ≥ 70% |
| Membership pitch rate (non-members) | ≥ 60% |
| Ticket completeness (`sop.csm.ticket-standards` fields) | 100% |
| Posh {{price:posh_callback_deadline}} callback completion | 100% |
| Marketplace first touch (Angi / Thumbtack / Yelp) | ≤ {{price:marketplace_callback_sla}} |
| Marketplace leads never touched | **0** |

## How they are read {#reading}

- **Answer rate and LSA answer rate** are volume-protective — they measure how much demand we caught, not how well we handled it.
- **Booking rate** is the conversion number. Judge it only against *qualified* callers; an out-of-area caller we correctly turned away is not a miss.
- **Membership pitch rate** counts the pitch, not the close. We control whether it was offered.
- **Ticket completeness and Posh callback completion** are 100% targets because they are binary. Either the field is filled or it isn't.
- **Marketplace first touch** is measured from the customer's submission, not from when we noticed. Leads never touched should be zero every day — see `playbook.speed-to-lead`.

## Cadence {#cadence}

Reviewed weekly in the 1:1 alongside three scored calls — see `governance.coaching`. Aggregate trend is reviewed monthly with the team.

## Related

- Call-level scoring rubric: `governance.qa.csm`
- Coaching and review cadence: `governance.coaching`
