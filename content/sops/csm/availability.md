---
id: sop.csm.availability
title: Availability & Booking Windows
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [availability, window, booking, schedule, same-day, dispatch]
related: [sop.csm.confirmation, sop.csm.reschedules, sop.csm.service-area, sop.csm.dispatch-handoff]
section: booking
order: 1
surfaces: [csm, checklist]
---

# Availability & Booking Windows

| | |
|---|---|
| **Purpose** | Book windows we can actually hit. |
| **When it applies** | Every job we schedule. |
| **Owner** | CSM books; Dispatch owns the board. |

## The rules {#rules}

1. **Offer two windows, never open-ended.** "When works for you?" invites a request we can't fill.
2. **Core windows:** {{price:service_windows}}. These are the four you may offer freely.
3. **Overflow windows ({{price:service_windows_overflow}}) need Dispatch approval before you offer them.** We run {{price:tech_headcount}} and plan {{price:tech_daily_capacity}} — the late windows exist only when the day is genuinely clear.
4. **Same-day cutoff: {{price:same_day_cutoff}}** unless Dispatch approves.
5. **Evening, weekend, or holiday needs Dispatch approval first** — do not offer it and then check.
6. **Confirm verbally, then send the ServiceTitan confirmation text.**

## The ask {#ask}

> "I can get a tech out between 8 and 10 this morning, or 12 to 2 this afternoon — which works better?"

Two concrete options. The question is *which*, not *whether*. Open-ended availability questions produce a request outside our windows, and then we are negotiating down from a promise we never should have implied.

## Never promise ahead of the board {#board}

The CSM books; Dispatch owns the board. Anything outside standard windows — after {{price:same_day_cutoff}} same-day, evenings, weekends, holidays — is Dispatch's call and must be approved *before* you offer it to the customer. Taking it back is worse than never offering it.

## Arrival guarantee {#guarantee}

Standard windows carry the {{price:arrival_guarantee}} arrival guarantee. Don't oversell it on the call, but know it exists — it is a genuine differentiator when a customer is comparing us to a company that said "sometime Tuesday."

## Related

- Read-back at the end of booking: `sop.csm.confirmation`
- Changing a booked window: `sop.csm.reschedules`
