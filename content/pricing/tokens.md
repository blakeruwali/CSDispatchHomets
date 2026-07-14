---
id: pricing.tokens
title: Price Tokens — Single Source of Truth
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-07-14
review_cadence_days: 30
tags: [pricing, tokens, reference]
surfaces: [all]
---

# Price Tokens

This file defines every price used anywhere in Homets content. Referenced elsewhere as `{{price:token_id}}`. **Change a number here, it changes everywhere.**

Later phase: this file is replaced by a generated artifact from the ServiceTitan pricebook. Token ids stay the same, so no doc rewrites needed.

## Diagnostic fees

| Token | Amount | Notes |
|---|---|---|
| `diagnostic_residential` | $199 | Standard residential diagnostic |
| `diagnostic_commercial`  | $269 | Standard commercial diagnostic |
| `diagnostic_after_hours` | $299 | After 5pm, weekends, holidays |

## Labor rates

| Token | Amount | Notes |
|---|---|---|
| `labor_residential_hourly` | $299/hr | Standard residential labor |
| `labor_commercial_hourly`  | $349/hr | Standard commercial labor |

## Membership

| Token | Amount | Notes |
|---|---|---|
| `membership_home_plus_monthly`     | $19.99/mo | Home+ residential membership |
| `membership_business_plus_monthly` | TBD       | Business+ commercial — needs confirmation |

## Deposits & payment flow

| Token | Value | Notes |
|---|---|---|
| `deposit_rule` | $1,000 or 10% of project, whichever is greater | Applies to cash/check AND financing |
| `payment_stage_2_cash` | 50% of total | Due before install date (cash/check) |
| `payment_stage_2_financing` | 90% of total | Due 3 days before install (financing) — secures equipment |
| `payment_stage_3` | Remaining balance | Due at completion |

## Business hours

| Token | Value |
|---|---|
| `csm_hours` | 7 AM – 5 PM |
| `after_hours_coverage` | Posh Virtual Receptionist, 5 PM – 7 AM |

## Guarantees / SLAs

| Token | Value |
|---|---|
| `lsa_callback_sla` | 15 minutes |
| `web_lead_callback_sla` | 5 minutes |
| `same_day_service_window` | 90 minutes |

---

**TBD flags** (block finalization — need owner confirmation):
- `membership_business_plus_monthly` — Business+ pricing not yet set in source docs.
