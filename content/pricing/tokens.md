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
surfaces: []   # definitions file — machine-read, values appear resolved inside other docs
---

# Price Tokens

This file defines every price and every operating constant used anywhere in Homets content. Referenced elsewhere as `{{price:token_id}}`. **Change a number here, it changes everywhere.**

Later phase: the pricing tables are replaced by a generated artifact from the ServiceTitan pricebook. Token ids stay the same, so no doc rewrites needed.

> **Rule.** If a number appears in two or more docs, or could ever change, it belongs here. Docs quote the token, never the number.

## Diagnostic fees

| Token | Amount | Notes |
|---|---|---|
| `diagnostic_residential` | $199 | Standard residential diagnostic |
| `diagnostic_discounted` | $99 | Discounted residential diagnostic — promo / dollars-off offers only. Whichever fee the CSM quoted is the fee on the form. |
| `diagnostic_commercial`  | $269 | Standard commercial diagnostic |
| `diagnostic_after_hours` | **Same as standard — no surcharge** | Evenings, weekends, holidays. **We do not charge an emergency or after-hours surcharge.** Resolved by the owner 2026-08-10, closing conflict C1. Quote the standard diagnostic at any hour. |
| `diagnostic_credit_on_sale` | Credited in full | The diagnostic comes off the invoice when the customer approves the repair **or** the replacement on that visit |
| `diagnostic_on_non_repairable` | Charged | A unit found non-repairable still consumed 45–60 minutes of diagnosis. The fee is charged and the replacement estimate is free; the fee is credited if they buy the replacement. |


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
| `membership_home_plus_tuneups`      | 2 per year | Included tune-ups, Home+ |
| `membership_home_plus_repair_discount` | 15% | Discount on repairs for active members |
| `membership_diagnostic_posture`     | Waived | Diagnostic fee for an active member |

### Business+ (light commercial, priced per qualifying rooftop unit)

| Token | Amount | Notes |
|---|---|---|
| `membership_business_plus_essential_initial`  | $249.50 | Essential — initial term, first year, one RTU |
| `membership_business_plus_essential_renewal`  | $499/year | Essential — renewal |
| `membership_business_plus_essential_visits`   | 2 | Scheduled maintenance visits per membership year |
| `membership_business_plus_essential_discount` | 10% | Discount on eligible approved repairs |
| `membership_business_plus_premier_initial`    | $499 | Premier — initial term, first year |
| `membership_business_plus_premier_renewal`    | $998/year | Premier — renewal |
| `membership_business_plus_premier_visits`     | 4 | Scheduled visit allocations per membership year |
| `membership_business_plus_premier_discount`   | 12% | Discount on eligible approved repairs |
| `membership_business_plus_enterprise`         | Written quote required | Enterprise — custom fleet/multi-location scope; renewal defined in the proposal |

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

## Dispatch & field day

| Token | Value | Notes |
|---|---|---|
| `dispatch_hours` | 7:00 AM – 6:00 PM | Dispatch is on the board before the first tech moves and after the last job closes |
| `tech_shift_start` | 7:30 AM | Leave time — the tech is loaded and moving so the first window is met **on site** |
| `first_job_start_default` | 8:00 AM | Default first window. If the first job is booked later, the actual start time is what the tech is told |
| `first_job_notice` | By {{price:board_lock}}, with the exact start hour | Tomorrow's first job is communicated with its real start time — "8 AM" or "9 AM", never "morning" |
| `tech_headcount` | 1 technician | Current field capacity — the board is planned against this, not an assumed crew |
| `tech_daily_capacity` | 4 core jobs per technician per day | 8–10, 10–12, 12–2, 2–4. Overflow windows are added only when the day is actually clear |
| `board_lock` | 5:00 PM the day before | Tomorrow's first job is dispatched by this time |
| `tech_ack_deadline` | 7:00 AM | Technician acknowledgement of the first job |
| `job_check_in` | 90 minutes | No update from a tech on an open job = Dispatch checks in |
| `overrun_threshold` | 30 minutes | Job over its estimate by this much = call Dispatch |
| `tech_unreachable_window` | 30 minutes | Unreachable technician escalates to the dispatch manager |
| `late_arrival_notice` | Before the window opens, with a named time | If the tech will not be on site at the top of the window, the customer hears a specific arrival time — not "on the way" |
| `job_duration_short` | 1–2 hours | Diagnostic, minor repair, tune-up — fits one window |
| `job_duration_medium` | 2–4 hours | Part replacement, capacitor/motor/board with a supply run, drain clearing — one window plus the next |
| `job_duration_long` | 4+ hours | Replacement, coil, boiler, water heater, repipe, heavy commercial — booked as a day, not a window |
| `long_job_block` | 2 windows minimum, 4 windows for a same-day install | Long jobs are blocked on the board before anything else is booked around them |
| `bump_diagnostic_credit` | Diagnostic fee waived when **we** move the job | A customer bumped by us is rebooked with the diagnostic waived — the bump is our cost, not theirs |
| `bump_rebook_deadline` | Next business day, named window, on a live call | A displaced job never leaves the board without a date |


## Guarantees / SLAs

| Token | Value | Applies to |
|---|---|---|
| `marketplace_callback_sla` | 5 minutes | Angi, Thumbtack, Yelp — leads sold to several contractors at once |
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
| `service_windows` | 8–10, 10–12, 12–2, 2–4 | Core bookable windows — the standard four |
| `service_windows_overflow` | 4–6, 6–8 | Offered **only** with Dispatch approval, when capacity is genuinely open |
| `same_day_cutoff` | 3:00 PM | After this, same-day needs Dispatch approval |
| `sms_max_unanswered` | 2 texts per 24h | Outbound SMS cap without a reply |
| `marketplace_attempts` | 6 attempts over 48 hours | Before a marketplace lead is closed unreachable |
| `triage_fail_score_cap` | 60% | QA total cap when emergency triage is missed |
| `manager_callback_sla` | 30 minutes | When the customer asks for a manager and none is available |
| `oncall_eta` | 60–120 minutes | Realistic after-hours arrival estimate |
| `review_survey_gate` | 4 or higher | Survey score required before a review request is sent |

## Emergency thresholds

Concrete numbers, not judgement calls — triage is pass/fail and must be scoreable.

| Token | Value | Notes |
|---|---|---|
| `emergency_temp_cold` | below 40°F | No heat at or under this = emergency |
| `emergency_temp_hot` | above 95°F | No AC at or over this, with a vulnerable occupant = emergency |

## Guarantees

| Token | Value | Notes |
|---|---|---|
| `arrival_guarantee` | 90 minutes, or the service call is free | Clock starts at the beginning of the booked window. Fee only — never parts or repair. |
| `satisfaction_guarantee_window` | 30 days | Customer must report the issue within this window |
| `warranty_repair` | 1 year, parts and labor | Repairs and plumbing repairs |
| `warranty_install_labor` | 1 year labor + manufacturer warranty (5–10 years) | New installations |
| `warranty_tuneup` | None | Tune-ups are preventive, not warrantied |
| `cancellation_fee` | None — we never charge to cancel | |

## Authority limits

| Token | Value | Notes |
|---|---|---|
| `escalation_refund_threshold` | $100 | Refund or credit above this goes to a Manager |
| `csm_credit_authority` | ⚠️ **DISPUTED — see C2** | SOP says CSMs have none; KB says up to 10% off the next visit. Working assumption is none. |
| `retention_call_lead_time` | 30 days before expiration | Membership renewal outreach |
| `seasonal_outreach_lead_time` | 6–8 weeks before peak season | Tune-up campaigns |

---

**TBD flags** (block finalization — need owner confirmation):
- `maintenance_flat_price` — `sop.csm.service-type` says "flat maintenance price" with no number defined anywhere.

**RESOLVED:** `diagnostic_after_hours` — C1 closed 2026-08-10. No after-hours or emergency surcharge; the standard diagnostic applies at every hour.

**RESOLVED:** Business+ pricing — set by the owner 2026-08-17. Three tiers (Essential / Premier / Enterprise), priced per qualifying rooftop unit; the old single `membership_business_plus_monthly` token is retired.

**DISPUTED flags** (two live sources disagree — see `_migrated/csm-reconciliation.md`):
- `csm_credit_authority` — C2. No authority vs. 10% off the next visit.
