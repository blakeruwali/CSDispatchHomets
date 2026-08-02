---
id: pricing.tokens
title: Price Tokens — Single Source of Truth
department: ops
owner: owner
status: published
version: 2
last_reviewed: 2026-08-02
review_cadence_days: 30
tags: [pricing, tokens, reference]
surfaces: [all]
---

# Price Tokens

This file defines every price and every operating constant used anywhere in Homets content. Referenced elsewhere as `{{price:token_id}}`. **Change a number here, it changes everywhere.**

Later phase: the pricing tables are replaced by a generated artifact from the ServiceTitan pricebook. Token ids stay the same, so no doc rewrites needed.

> **Rule.** If a number appears in two or more docs, or could ever change, it belongs here. Docs quote the token, never the number.

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

## Estimates

| Token | Amount | Notes |
|---|---|---|
| `estimate_install` | Free | Replacement / new install estimate — never a diagnostic |

## Membership

| Token | Amount | Notes |
|---|---|---|
| `membership_home_plus_monthly`      | $19.99/mo | Home+ residential membership |
| `membership_business_plus_monthly`  | TBD       | Business+ commercial — needs confirmation |
| `membership_home_plus_tuneups`      | 2 per year | Included tune-ups, Home+ |
| `membership_home_plus_repair_discount` | 15% | Discount on repairs for active members |
| `membership_diagnostic_posture`     | Waived | Diagnostic fee for an active member |

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
| `csm_days` | Mon – Sat |
| `after_hours_coverage` | Posh Virtual Receptionist, 5 PM – 7 AM |
| `posh_coverage_full` | 5 PM – 7 AM weekdays, all Sundays, all holidays |

## Guarantees / SLAs

| Token | Value | Applies to |
|---|---|---|
| `lsa_callback_sla` | 15 minutes | Missed Google LSA call |
| `web_lead_callback_sla` | 5 minutes | Website form submission |
| `voicemail_callback_sla` | 30 minutes | General inbound voicemail |
| `posh_callback_deadline` | 8:00 AM next business day | Posh message-only tickets |
| `lsa_log_sla` | 10 minutes | Logging LSA call outcome in the LSA dashboard |
| `sms_textback_sla` | 2 minutes | Missed-call text-back during CSM hours |
| `same_day_service_window` | 90 minutes | Arrival guarantee |

## Call-handling constants

| Token | Value | Notes |
|---|---|---|
| `answer_by_ring` | 3 rings | Inbound answer target |
| `hold_cap` | 60 seconds | Maximum hold before returning with an update |
| `service_windows` | 8–10, 10–12, 12–2, 2–4, 4–6 | The only windows we offer |
| `same_day_cutoff` | 3:00 PM | After this, same-day needs Dispatch approval |
| `sms_max_unanswered` | 2 texts per 24h | Outbound SMS cap without a reply |
| `triage_fail_score_cap` | 60% | QA total cap when emergency triage is missed |

---

**TBD flags** (block finalization — need owner confirmation):
- `membership_business_plus_monthly` — Business+ pricing not yet set in source docs.
