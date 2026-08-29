---
name: marketing-outreach
description: Work Homets lead channels and marketing — Angi, Thumbtack, Yelp, Google LSA, website forms, inbound phone, SMS text-back, Posh after-hours, referrals, review generation, and seasonal campaigns. Use for any question about lead handling, speed-to-lead, channel playbooks, review strategy, or campaign drafting.
---

# Marketing & lead channels

The standard is `content/playbooks/speed-to-lead.md`; each channel has its
own playbook in `content/playbooks/`. SLAs are tokens — verify current
values in `content/pricing/tokens.md`.

## The channels and their SLAs

| Channel | Playbook | Callback SLA | In ServiceTitan? |
|---|---|---|---|
| Angi | `playbook.angi` | 5 min (marketplace) | Flows in automatically |
| Thumbtack | `playbook.thumbtack` | 5 min | **No — manual capture at first touch** |
| Yelp | `playbook.yelp` | 5 min | **No — manual capture at first touch** |
| Google LSA | `playbook.lsa` | 15 min on a missed call; log outcome in 10 min | — |
| Website form | `playbook.web` | 5 min | — |
| Inbound phone | `playbook.inbound` | answer by 3 rings | — |
| SMS text-back | `playbook.sms` | 2 min on a missed call; max 2 unanswered texts/24h | — |
| Posh after-hours | `playbook.posh` | message tickets by 8 AM next business day | — |
| Referrals | `playbook.referral` | **blocked** — credit amount undecided; never quote one |

Marketplace leads are sold to several contractors at once — speed is the
whole game: 6 attempts over 48 hours before closing unreachable
(`marketplace_attempts`). Outreach scripts:
`content/scripts/csm/marketplace-outreach.md`. Outbound calls are QA-scored
on their own rubric (see the `qa-coaching` skill).

## Reviews

`content/scripts/csm/review-request.md`. The gate: survey score ≥ 4
(`review_survey_gate`) before a Google review is requested. Never draft
review-gating that violates platform rules (no offering incentives for
reviews, no suppressing negatives).

## Campaigns

- Seasonal tune-up outreach launches 6–8 weeks before peak season
  (`seasonal_outreach_lead_time`); script:
  `content/scripts/csm/seasonal-outreach.md`. Tie the offer to membership
  (the `membership` skill) — a tune-up caller is a Home+ prospect.
- All copy follows the `customer-comms` skill: tone standards, token-sourced
  prices, real guarantees only (90-min arrival, no after-hours surcharge,
  1-yr repair warranty), no manufactured urgency.
- Lead-source attribution matters downstream — every campaign's response
  path must let the CSM record the source per
  `content/sops/csm/lead-source.md`.

## When analyzing channel performance

Pull actuals (ServiceTitan job counts by lead source, response times) rather
than estimating; where data isn't reachable, state the blind spot. Recommend
against any channel decision the data doesn't support.
