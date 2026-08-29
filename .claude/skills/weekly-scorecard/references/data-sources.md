# Scorecard data sources — where each number actually lives

Verified 2026-08-29. Prefer an existing series over re-deriving one.

## Revenue

- **`job_revenue_events` table** in the homets-home-tech Supabase project
  (`einqxayjujnbzycsxwwi`) — populated by the
  `servicetitan-daily-revenue-poll` edge function from completed ST jobs.
  This is the ready-made weekly revenue series; sum by week, avg for
  ticket size. It also cross-references `hvac_leads` for attribution.
- Fallback: pull completed jobs directly via the `homets-servicetitan`
  CLI or the hub's `st-api` (`op=appointments`, `op=job_get`).

## Pipeline

- Open estimates: `homets-servicetitan` skill (open proposals/estimates
  with amount + age) — the primary source.
- Sold: `st-api` estimate data / `architect-st-sold-retry` context in the
  hub; comfort-architect pushes carry `st_estimate_id` +
  `architect_report_events` (`event_type='estimate_pushed'`) in the
  architect DB (`dlpafltpdpjnfrjkyryz`) for push volume.

## Channels

- Lead counts + attribution: ServiceTitan lead sources; home-tech's
  `hvac_leads` table for web-originated leads (includes retry pipeline
  `crm-lead-retry` workflow — a high failure count there is itself a
  scorecard finding).
- SLA targets are tokens in `content/pricing/tokens.md`
  (`marketplace_callback_sla` 5m, `lsa_callback_sla` 15m,
  `web_lead_callback_sla` 5m, `voicemail_callback_sla` 30m,
  `sms_textback_sla` 2m). Actual response times: ST call/booking
  timestamps where available; otherwise mark the SLA column "not
  measurable yet" — that gap is worth surfacing on the scorecard itself.

## Membership

- Active/new/cancelled: ServiceTitan memberships; Stripe-billed Home+
  flows through home-tech's `admin-memberships` / `manage-subscription`
  functions if ST data is incomplete.
- Renewals due: ST membership expirations inside 30 days
  (`retention_call_lead_time`).

## Reviews

- home-tech has a Google-reviews sync (search its `supabase/functions`
  for the reviews function and its table) — count + rating trend.
- Baseline from the pitch deck: 66 five-star (early 2026).

## Targets

- Pitch-deck roadmap: $200K/mo then $400K/mo at 45%+ GM; ~$4.5K avg
  ticket baseline. Owner-set targets override — ask once, reuse.

## Access notes

- The two Supabase tables above need service-role or authenticated access
  (RLS) — the anon key in the repos may not read them. If a query is
  denied, say which table/project needs credentials rather than skipping
  the metric silently.
