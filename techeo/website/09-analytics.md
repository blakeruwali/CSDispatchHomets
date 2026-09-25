---
id: techeo.web.analytics
title: Analytics & Measurement
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, analytics, ga4, measurement, events, utm, scorecard, dashboards, tracking-qa, privacy]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.metrics, techeo.gtm, techeo.financials, techeo.guardrails, techeo.audit, techeo.positioning, techeo.plan90]
order: 9
---

# Analytics & Measurement

**The site is judged by what lands in Stripe, Supabase, and the receptionist's log, not by what GA4 counts. GA4, Search Console, and Bing Webmaster Tools explain why those numbers moved. They never stand in for them, and they never receive a visitor's name, email, phone number, or anything typed into a form.**

This document owns the event taxonomy, the GA4 configuration, UTM conventions, the source-of-truth hierarchy and monthly reconciliation, search-console monitoring, real-user performance data, storage and reporting of the AEO prompt log, the dashboards, tracking QA, and the site scorecard (D12). It references, and does not restate:

| Topic | Owner |
|---|---|
| Form fields, qualification rules, the SLA definition, the receptionist, email sequences | `08-conversion-and-leads.md` (`techeo.web.conversion`) |
| Scripts, CSP, performance budgets, data schema, environments, CI | `06-technical-architecture.md` (`techeo.web.tech`) |
| Search-tool setup, the prompt-test method, crawler policy | `07-seo-and-aeo.md` (`techeo.web.search`) |
| Privacy-page text, consent wording, retention periods | `10-compliance.md` (`techeo.web.compliance`) |
| Hours, budget, the launch runbook | `11-build-and-launch.md` (`techeo.web.build`) |
| Outcome criteria O1–O13 and standards S1–S6 | `01-strategy.md` #success |

## Measurement philosophy {#philosophy}

`techeo.metrics` #not-measured applies to the site unchanged: an agency proves it is winning with a number the client's bank account agrees with. For techeo.com, those numbers are reservations, purchases, qualified teardown requests, and callbacks made inside the SLA (D12).

| Class | Metrics | Sources | What it can justify |
|---|---|---|---|
| **Outcome** | Qualified reservations; paid Engine Audits; qualified teardown requests; callback SLA compliance; ICP share of form leads | Stripe, Supabase, receptionist log | A change to copy, offer presentation, or process |
| **Standard** (pass/fail) | Self mystery-shop score (S2); wrong facts in AI answers (S3); indexing (S4); raw HTML (S5); budgets (S6) | `08`'s shop log, the prompt log, search consoles, CI | A fix, on a deadline |
| **Diagnostic** | Sessions by channel, landing pages, CTA clicks, form funnels, section reach, FAQ opens, 404s, impressions, position, AI citations, crawler fetches, real-user vitals | GA4, Search Console, Bing, Cloudflare, the prompt log | An investigation only. No diagnostic justifies a change on its own (`01` #success). |

**Rules.**

1. **Every number has one source of truth** (`#sources-of-truth`). When two tools disagree, the lower-ranked one is wrong until reconciled.
2. **Every diagnostic answers a named question** (the "Serves" column in `#events`). Nothing is collected that nobody would act on.
3. **Small numbers are listed, not charted.** Below 20 observations a month, show counts and rows, never percentages. SLA compliance is the exception, because `08` seeds a minimum sample (`01` O9).
4. **Targets say "Target," assumptions say "Assumption,"** no benchmark appears, and the site is reported like a client: one headline, three lines (`techeo.metrics` #client-reporting).

**Never collected:** session replays or heatmaps (D12; this includes Microsoft Clarity, which Bing Webmaster Tools promotes); any advertising pixel; Google signals; user-provided data; a User-ID; any form field value in GA4; any Stripe, Supabase, ClickUp, or Cal.com identifier in GA4.

## Sources of truth and the monthly reconciliation {#sources-of-truth}

| Question | Source of truth | Cross-check |
|---|---|---|
| Audits paid, refunded, disputed | **Stripe**, live mode | `app.audit_purchases`, reconciled daily (`06` #monitoring) |
| Reservations, qualification outcomes, teardowns, calculator emails | **Supabase** `app.submissions` and child tables | ClickUp "Site leads" |
| Calls to [TECHEO_PHONE]; discovery calls booked by phone | **The receptionist vendor's call log** (`08` names it) | `app.cal_bookings` |
| Callback SLA | **Supabase** `app.lead_touches` against each submission's due time | ClickUp history; receptionist log |
| On-site behavior and session acquisition | **GA4** | Cloudflare request analytics |
| Where a lead came from | **Supabase** outbound origin (`channel`, `parent_lead_id`), then `heard_from` + `first_touch` (`#heard-from`) | GA4 channel reports |
| Indexing, queries | **Search Console, Bing Webmaster Tools** | — |
| AI answers about Techeo | **The prompt log** (`#aeo-log`) | Bing and Google AI reports (diagnostic) |

GA4's `purchase`, success events, and `phone_click` never answer the first three questions.

**Counting rules.** A submission counts toward the scorecard only if all of these hold:

- `is_test` is false on the submission and the lead.
- The email doesn't end in `@techeo.com`.
- `'duplicate'` isn't in `flags`.
- It isn't an `08` SLA seed (tagged `seed`) or a self mystery-shop form test (listed in `08`'s monthly shop task). Both still count toward SLA compliance, because they test the people.

Months run in the IANA zone behind [TZ] (`TIMEZONE_IANA` in `site.ts`). GA4 reports in the same zone. If `08` lets the receptionist enter a lead for a caller, that lead is flagged `entered_by_staff` and exists only in Supabase.

### The monthly reconciliation (by the 8th, about 30 minutes)

| Step | Compare | Pass | If it fails |
|---|---|---|---|
| 1 | Stripe live payments at the Engine Audit price vs `app.audit_purchases` (`livemode`) | Same count, amounts, statuses | Fix before publishing; a mismatch is a `06` bug |
| 2 | GA4 success events vs `success_rows_by_form` (below), **row by row** (free-form exploration: *Event name* × *Date hour and minute* if Explorations offers it, otherwise *Date + hour (YYYYMMDDHH)* with the *Minute* dimension; verify the labels at setup). `success_rows_by_form` counts every non-test, non-`@techeo.com`, non-seed, non-shop submission whose response was a thanks page, **including** `duplicate` and `spam_suspect` rows, because a second reservation and a held submission both still land on a thanks page (`08` #form-rules). | Each GA4 event matches a `success_rows_by_form` row within 2 minutes; GA4 never exceeds it | Above it: double firing or test leakage. (A honeypot catch also gets the normal success redirect, `06` #forms pipeline step 3. Check the weekly ops email's quarantine count before calling an excess double firing.) Under 50% capture on a form with ≥10 rows: broken tracking. The expected 60–95% capture is an **assumption**, replaced by the observed median after three months. |
| 3 | GA4 `purchase` vs Stripe | GA4 `purchase` ≤ Stripe completed Checkout Sessions in live mode (including ACH payments still processing or later failed); every difference from paid payments is explained, for example an ACH payment that failed after the thanks page | As step 2 |
| 4 | Paid audits vs `app.cal_bookings` (`audit-kickoff`); receptionist log vs discovery bookings | Every paid audit has a kickoff by the next business day; every phone-booked call is in Cal.com | `08` makes the fallback call or fixes the habit |
| 5 | Five random SLA rows: `app.lead_touches` vs ClickUp vs the receptionist log | First dial agrees within 2 minutes | `06` or `08` fixes the call-log import; the SLA figure is marked "provisional" |
| 6 | `heard_from` vs UTM/referrer agreement (`#heard-from`) | Reported only | A recurring gap → check that channel's links |

**The export.** Looker Studio never connects to Supabase: a database credential held by a Google product, plus a network allowance for Google's addresses, isn't worth it at this volume. A saved file, `docs/analytics/monthly-export.sql` in `techeo-web`, holds named queries that return counts only. Only the SLA misses and the retainer rows carry a lead UUID, and no query returns a contact detail. The founder runs the monthly queries in the Supabase SQL editor and pastes each result into its own named column block in the `leads_monthly` tab of the "techeo-site-data" sheet. The weekly SLA query runs unattended (**Automation**, below).

```sql
-- docs/analytics/monthly-export.sql  (techeo-prod; counts only, no personal data)
-- Run twice: d_from = the month's first day, then d_from = the window's first day (window to date).
-- Replace TIMEZONE_IANA with site.ts's value; paste the month's self-shop form emails into shop.
-- Every named query in this file starts with these CTEs.
with p as (select date '2027-02-01' as d_from, date '2027-03-01' as d_to, 'TIMEZONE_IANA'::text as tz),
shop(email) as (values ('replace-with-08-list@example.invalid')),
scope as (select s.*, l.email, l.crm, l.heard_from, l.first_touch, l.parent_lead_id   -- the window, no tests, no staff
  from app.submissions s join app.leads l on l.id = s.lead_id, p
  where (s.received_at at time zone p.tz)::date >= p.d_from
    and (s.received_at at time zone p.tz)::date < p.d_to
    and not s.is_test and not l.is_test
    and coalesce(lower(l.email::text), '') not like '%@techeo.com'),      -- citext; a phone_missed lead has no email
base as (select * from scope where not ('duplicate' = any(flags))),
counted as (select * from base where coalesce(lower(email::text), '') not in (select lower(email) from shop)
  and not ('seed' = any(flags))),                         -- 08's seed tag; 06 confirms where it is stored
dials as (select b.lead_id, b.received_at, b.sla_window, b.sla_due_at, b.promise_due_at,
    (select min(t.at) from app.lead_touches t where t.lead_id = b.lead_id
      and ((t.kind = 'callback_attempt' and t.by_role in ('receptionist','founder'))
        or (t.kind = 'inbound_call' and t.at <= b.sla_due_at))   -- a missed caller who got through later (08 #unanswered)
      and t.at >= b.received_at) as first_dial
  from base b where b.sla_due_at is not null)             -- set only for 08's eligible events
select 'qualified_reservations', count(distinct q.lead_id)::numeric
  from counted c join app.audit_qualifications q on q.submission_id = c.id
  where c.form_id = 'form_audit_reserve' and q.outcome = 'reserved'
union all
select 'qualified_teardowns', count(distinct t.lead_id)
  from counted c join app.teardown_requests t on t.submission_id = c.id
  where not t.in_exclusion_zone and t.status in ('confirmed','in_progress','delivered')
    and t.origin <> 'outbound'                             -- requested, not an outbound target (08 F9)
union all
select 'icp_share_pct', round(100.0 * count(distinct q.lead_id) filter (where
    q.role in ('owner','co_owner','general_manager') and q.work_mix = 'residential'
    and q.revenue_band in ('1_5m_to_5m','5m_to_10m','10m_to_15m') and c.crm = 'servicetitan'
    and not q.in_exclusion_zone and q.main_goal <> 'website_logo_social'
    and (q.form_id = 'form_audit_reserve'                 -- the reservation form doesn't ask 9, 11, 13, 14 (08)
      or (q.trucks_band in ('3_10','11_25') and not (q.lead_sources <@ array['none'])
        and q.decision_maker = 'self' and q.test_call_consent)))
  / nullif(count(distinct q.lead_id), 0), 1)
  from counted c join app.audit_qualifications q on q.submission_id = c.id
union all
select 'sla_' || sla_window || '_pct',                     -- 'business' is 08's publish metric
  round(100.0 * count(*) filter (where first_dial <= sla_due_at) / count(*), 1)
  from dials group by sla_window
union all
select 'public_promise_pct',
  round(100.0 * count(*) filter (where first_dial <= promise_due_at) / nullif(count(*), 0), 1)
  from dials;
```

The same file holds the other named queries. Each is its own statement, prefixed with the CTEs above, and each result goes in the `leads_monthly` column block of the same name. The O-row queries set `p` as their comments say.

```sql
-- sla_weekly: 06's weekly job runs this every Monday at 06:00 [TZ] for the Monday–Sunday week just ended
-- (p = that week), and once on Sat Jan 30, 2027 for Jan 25–29 (Automation, below)
select to_char(p.d_from, 'IYYY-"W"IW') as iso_week, d.sla_window, count(*) as events,
  count(*) filter (where d.first_dial <= d.sla_due_at) as in_sla,
  count(*) filter (where d.first_dial <= d.promise_due_at) as in_promise,
  round((percentile_cont(0.5) within group (order by extract(epoch from d.first_dial - d.received_at) / 60))::numeric, 1)
    as median_minutes_to_dial
  from dials d, p group by 1, 2;
-- sla_weekly_misses: the same week's misses, by lead UUID only (the cause is added at Friday's review)
select to_char(p.d_from, 'IYYY-"W"IW') as iso_week, d.lead_id, d.sla_window
  from dials d, p where d.first_dial is null or d.first_dial > d.sla_due_at;

-- success_rows_by_form (reconciliation step 2): every submission answered with a thanks page, with duplicates
-- and spam_suspect rows, but not seeds or self-shop forms (their browsers carry #ga-internal)
select s.form_id, count(*) as success_rows
  from scope s
  left join app.audit_qualifications q on q.submission_id = s.id
  left join app.teardown_requests t on t.submission_id = s.id
  where lower(s.email::text) not in (select lower(email) from shop) and not ('seed' = any(s.flags))
    and case s.form_id when 'form_audit_reserve' then q.outcome = 'reserved'
      when 'form_teardown_request' then not t.in_exclusion_zone and t.status <> 'duplicate'
      when 'form_calculator_email' then true else false end
  group by s.form_id;

-- submissions_by_form_week (dashboard page 2)
select to_char((c.received_at at time zone p.tz)::date, 'IYYY-"W"IW') as iso_week, c.form_id, count(*)
  from counted c, p where c.channel <> 'outbound' group by 1, 2 order by 1, 2;   -- outbound targets aren't site submissions (08 F9)

-- qualify_outcome_mix (page 2): outcome classes only, never review reasons
select q.form_id, q.outcome, count(*)
  from counted c join app.audit_qualifications q on q.submission_id = c.id group by 1, 2 order by 1, 2;

-- reservation_queue (page 2): places held at the close, and the oldest one's age in days
select count(*) as held, max(p.d_to - (r.reserved_at at time zone p.tz)::date) as oldest_days
  from app.audit_reservations r join app.leads l on l.id = r.lead_id, p
  where r.status in ('reserved','on_hold') and not l.is_test and coalesce(lower(l.email::text), '') not like '%@techeo.com';

-- teardown_to_discovery (beside scorecard #3): delivered qualified teardowns, and those whose lead
-- held a discovery call within 30 days of delivery
select count(*) filter (where x.held) as reached_discovery, count(*) as delivered
  from (select distinct on (t.lead_id) t.lead_id, exists (select 1 from app.lead_touches h
          where h.lead_id = t.lead_id and h.kind = 'discovery_held'
            and h.at >= t.walkthrough_sent_at and h.at < t.walkthrough_sent_at + interval '30 days') as held
        from counted c join app.teardown_requests t on t.submission_id = c.id
        where t.status = 'delivered' and not t.in_exclusion_zone and t.origin <> 'outbound') x;

-- lead_channel and heard_from_pivot (#heard-from): add this CTE after dials, then run each select. A lead linked
-- to an outbound one (parent_lead_id, 08 F9 step 5) counts once, under the outbound lead (root_id).
, lc as (select c.lead_id, coalesce(c.parent_lead_id, c.lead_id) as root_id, c.form_id, c.heard_from, d.derived,
    case when o.outbound then 'teardown'                                            -- step 1: outbound (08 F9 step 7)
      when c.heard_from is not null and c.heard_from <> 'other' then c.heard_from   -- step 2
      else d.derived end as lead_channel                                            -- steps 3-5
  from counted c
  cross join lateral (select c.parent_lead_id is not null                           -- linked to an outbound lead,
    or (select f.channel from app.submissions f where f.lead_id = c.lead_id and not f.is_test
        order by f.received_at limit 1) is not distinct from 'outbound' as outbound) o   -- or its first record is one
  cross join lateral (select nullif(c.first_touch->>'utm_source', '') as src,
    nullif(c.first_touch->>'utm_medium', '') as med, nullif(lower(c.first_touch->>'ref_host'), '') as ref) t
  cross join lateral (select case                                        -- the channel table's rules, in order
    when t.src = 'teardown' then 'teardown'                                                        -- 1
    when t.src ~ '^(pantheon|nexstar|service-nation|egia)$' then 'peer_network'                    -- 2
    when t.src like 'vendor-%' then 'vendor'                                                       -- 3
    when t.med = 'audio' or t.src = 'guest-kit' then 'podcast'                                     -- 4
    when t.src is null and t.ref ~ '^(.+\.)?facebook\.com$' then 'owner_community'                 -- 5
    when coalesce(t.src, t.ref) ~ '^(linkedin|lnkd\.in|com\.linkedin\.android|(.+\.)?linkedin\.com)$'
      then 'linkedin'                                                                              -- 6
    when coalesce(t.src, t.ref) ~ '^(.+\.)?(chatgpt\.com|openai\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai)$'
      then 'ai_assistant'                                                                          -- 7
    when t.src is null and t.ref ~ '^(www\.)?(google\.[a-z.]+|bing\.com|duckduckgo\.com|search\.yahoo\.com|ecosia\.org)$'
      then 'organic_search'                                                                        -- 8
    when t.src in ('notify', 'founder-email') then 'techeo_email'                                  -- 9
    when coalesce(t.src, t.ref) ~ '^(.+\.)?hometsair\.com$' then 'homets_site'                     -- 10
    when t.med = 'print' then 'print'                                                              -- 11
    when t.src is null and t.ref is null then 'direct_unknown'                                     -- 12 (step 5)
    when t.src is null or t.med = 'referral' then 'other_referral'                                 -- 13
    else 'unassigned' end as derived) d)                                                           -- 14
select form_id, lead_channel, count(distinct root_id) from lc group by 1, 2 order by 1, 2;
select coalesce(heard_from, 'none') as heard_from, derived, count(distinct root_id) from lc group by 1, 2 order by 1, 2;

-- o7_o8 (#below-the-seven): set d_from to the opening date (Feb 1, Sep 7, or a {capacity date}), then add this CTE
-- after dials. It reads app.reservation_openings (06), one row per reservation per opening held, never
-- audit_reservations.opening_date, which a carry moves: a carried reservation counts at every opening where it was
-- held (08 F2 step 7), and the carried_from rows are the scorecard's "carried from" line.
, held as (select o.reservation_id, o.contact_due_at, o.contacted_at,
    (select max(e.opening_date) from app.reservation_openings e             -- the opening it was carried from
      where e.reservation_id = o.reservation_id and e.opening_date < o.opening_date) as carried_from,
    exists (select 1 from app.lead_touches h where h.lead_id = r.lead_id and h.kind = 'discovery_held'
        and (h.at at time zone p.tz)::date >= o.opening_date and (h.at at time zone p.tz)::date < o.opening_date + 30)
      or exists (select 1 from app.cal_bookings b where b.lead_id = r.lead_id
        and b.event_type in ('discovery','discovery-queue') and b.status <> 'canceled' and b.starts_at < now()
        and (b.starts_at at time zone p.tz)::date >= o.opening_date
        and (b.starts_at at time zone p.tz)::date < o.opening_date + 30) as reached_discovery
  from app.reservation_openings o
  join app.audit_reservations r on r.id = o.reservation_id
  join app.audit_qualifications q on q.id = r.qualification_id
  join app.submissions s on s.id = q.submission_id
  join app.leads l on l.id = r.lead_id, p
  where o.opening_date = p.d_from and o.contact_due_at is not null       -- in the queue at this opening
    and not s.is_test and not l.is_test and coalesce(lower(l.email::text), '') not like '%@techeo.com'
    and not ('seed' = any(s.flags)) and not ('duplicate' = any(s.flags)))
select 'o7_contacted_on_time' as row_name, count(*) filter (where contacted_at <= contact_due_at) as n,
  count(*) as m, null::date as carried_from from held
union all
select 'o8_discovery_within_30_days', count(*) filter (where reached_discovery), count(*), null from held
union all
select 'carried_from', count(*), null, carried_from from held where carried_from is not null group by carried_from;

-- retainers (O12, O13): one row per signed retainer, lead UUID only. A lead linked to an outbound one
-- (parent_lead_id, 08 F9 step 5) counts once, under the outbound lead. Add these CTEs after dials. Shorten an
-- OPEN window that a capacity flip closed early (06's SEASON_LOG.md).
, open_windows(d_from, d_to) as (values (date '2027-02-01', date '2027-04-30'), (date '2027-09-07', date '2027-11-30')),
grp as (select l.id as lead_id, coalesce(l.parent_lead_id, l.id) as root_id   -- a linked lead joins its outbound lead
  from app.leads l where not l.is_test),
ret as (select g.root_id as lead_id, min((e.at at time zone p.tz)::date) as signed_on
  from app.stage_events e join grp g on g.lead_id = e.lead_id, p
  where e.to_status = 'retainer signed' group by g.root_id),
first_sub as (select distinct on (g.root_id) g.root_id as lead_id, s.flags, s.channel, s.form_id,
    (s.received_at at time zone p.tz)::date as sub_on
  from app.submissions s join grp g on g.lead_id = s.lead_id, p
  where not s.is_test order by g.root_id, s.received_at)                   -- the linked pair's first record
select r.lead_id, r.signed_on,
  (f.lead_id is not null and not ('entered_by_staff' = any(f.flags))              -- first record: a site form
    and f.channel = 'site' and f.form_id <> 'phone_missed'                         -- a site form: not outbound (08 F9), not a missed call
    and not exists (select 1 from app.leads k where k.parent_lead_id = r.lead_id)  -- and no lead is linked to it
    and coalesce(l.heard_from, '') <> 'teardown'                                   -- not outbound by its own account
    and coalesce(l.first_touch->>'utm_source', '') <> 'teardown') as site_originated,
  round((select count(*) from open_windows o,
      generate_series(coalesce((l.first_touch->>'date')::date, f.sub_on), r.signed_on - 1, interval '1 day') g(d)
      where g.d::date between o.d_from and o.d_to) / 7.0, 1) as open_weeks
  from ret r join app.leads l on l.id = r.lead_id left join first_sub f on f.lead_id = r.lead_id
  where not l.is_test order by r.signed_on;
```

`sla_window`, `sla_due_at`, and `promise_due_at` are columns requested from `06` (`#dependencies`). So are the three that `08` #dependencies adds and these queries read: `app.reservation_openings`, `submissions.channel`, and `leads.parent_lead_id`. `lead_channel` is `teardown` for an outbound lead or a lead linked to one (`08` F9 step 7), whatever `heard_from` says; otherwise `heard_from`'s value when it is answered and not `other`; otherwise the derived slug. The `entered_by_staff` flag is `08`'s (`#dependencies`); `06` confirms where it is stored, as for `seed`.

**Automation.** The two cadences are decided separately.

- **The weekly SLA report is automated now,** because `08` #sla requires it to run unattended for two weeks before launch and uses it to earn SLA version B from Jan 4–31, 2027. A job in `06`'s existing `weekly.yml` runs on Mondays at 06:00 [TZ], plus a one-off business-hours run at 06:00 [TZ] on Sat Jan 30, 2027 (`08` #sla). The Saturday run covers week 4 of the version-B window, Mon Jan 25 – Fri Jan 29 (`p.d_to` = Jan 30), and only its `business` row is read. It emails the summary but writes nothing to the sheet, so the regular Mon Feb 1 run still records the full week as its one `sla_weekly` row, and the founder can decide on `SLA_VERSION = 'B'` before the Feb 1 flip. Each Monday run executes `sla_weekly`, `sla_weekly_misses`, and `submissions_by_form_week` for the week just ended, as a read-only Postgres role limited to the columns those queries read. It appends the rows to the `sla_weekly` tab through a Google service account that can edit only the techeo-site-data sheet, and it emails the same counts-only summary to the founder and the kill-switch enforcer through Resend (`08` #sla). Misses appear by lead UUID only. Like every other `06` job, each run pings Healthchecks.io, so a missed run raises an alert.
- **The monthly export stays manual** until forms pass 50 counted submissions a month or v2 ships (open question 7).

**Done when:**

- The December 2026 reconciliation (Nov 20 – Dec 31) passes steps 1–5 and reads as one line in the monthly document: "Stripe = Supabase: yes. GA4 captured {n} of {m} success events. SLA sample: 5 of 5."
- `sla_weekly` gains a row on Mon Nov 9 and Mon Nov 16, 2026, and nobody ran anything (`08` #sla; `11` R4).
- On `techeo-staging`, a missed call from an unknown number (a `phone_missed` event with no email) appears in `sla_weekly`; when the same caller gets through live before `sla_due_at`, the event counts as met.
- The Sat Jan 30, 2027 run's email reaches the founder that morning with week 4's business-hours figure, and after Mon Feb 1 `sla_weekly` holds week 4 once, from the Monday run.
- On `techeo-staging`, with one ICP reservation fixture and one ICP qualify fixture, the export runs without error and returns a non-null `icp_share_pct` that counts the reservation.
- On `techeo-staging`, a reservation fixture held at a Feb 1, 2027 fixture opening and carried to Sep 7 counts in `o7_o8` at both openings, and the Sep 7 run returns one `carried_from` row: 1, 2027-02-01.
- On `techeo-staging`, `08` F9's Done-when fixture (an outbound target, then a site teardown request from the owner's own address on the shop's domain, linked by `parent_lead_id`) appears once in `lead_channel`, as `teardown`, and a `retainer signed` stage event on it returns one `retainers` row, under the outbound lead's UUID, with `site_originated` false.

## GA4 configuration {#ga4}

### Property and stream settings

The account is created when `11` A4 creates D4's accounts (Oct 12–16, 2026), and configuration is complete in `11` S1, by Fri Nov 13. Settings are screenshotted into `docs/analytics/ga4-settings/`. The labels are as found in September 2026; Google renames admin screens often, so verify each one at setup.

| Setting | Value | Why |
|---|---|---|
| Account | New account "Techeo LLC", created by the Techeo Workspace admin account | D4 |
| Account data sharing | All off except "Technical support" | Nothing shared beyond support |
| Property | "techeo.com"; time zone = the IANA zone behind [TZ]; USD; industry "Business & Industrial Markets"; size "Small"; objective "Generate leads" | Days match the SLA day |
| Access | Administrator: the founder's Techeo account and a break-glass admin account. Editor: a build freelancer, only for the engagement. Never a personal Gmail. | `07`'s rule for Search Console |
| Event and user data retention | **14 months**, the standard maximum; "Reset on new activity" on | Seasonal windows need year-over-year explorations |
| Google signals | **Off** | No ads. Signals also causes data thresholds that hide rows on small properties. |
| Granular location and device data | **Off, all regions** | State-level location still arrives; city data adds risk and serves no decision |
| Ads personalization; user-provided data | Off | — |
| Reporting identity | **Device-based** | No User-ID, signals, or modeling |
| Attribution | "Paid and organic last click"; lookback 30 days for acquisition key events, **90 days** for all others | Data-driven needs volume we won't have; 90 days covers a 6–10 week cycle |
| Data redaction | Email **on**. Query parameters **on**: `session_id`, `email`, `e`, `name`, `first_name`, `last_name`, `phone`, `tel`, `zip`, `address`, `company`, `token`, `code`, `key` | Backstop behind `analytics.ts`'s own stripping |
| Product links | **Search Console only** | D14 bans paid traffic; BigQuery waits for v3 volume |
| Measurement Protocol secrets; event create/modify rules | None | Every event is defined in git (`#implementation`) |

**Enhanced measurement:** keep **Page views**, and turn off "page changes based on browser history events," because anchor jumps and the flag removal in `#internal-traffic` would count as page views. Turn off Scrolls, Outbound clicks, Site search, Form interactions, Video engagement, and File downloads. `section_view`, `outbound_click`, the form events, and `file_download` replace them, with our own names and PII rules.

### Unwanted referrals: Stripe Checkout and the scheduling tool

Buyers leave for `checkout.stripe.com` and return to `/thanks/audit-purchased`. Without an exclusion, GA4 credits the purchase to "checkout.stripe.com / referral." Add these under Admin → Data streams → techeo.com → Configure tag settings → List unwanted referrals (OR logic):

| Match type | Domain | Covers |
|---|---|---|
| Matches regex | `^(.+\.)?stripe\.com$` | Checkout, including the Financial Connections and 3-D Secure steps |
| Matches regex | `^(.+\.)?cal\.com$` | A buyer returning from the kickoff booking page |
| Matches regex | `^(.+\.)?calendly\.com$` | Only if D3's alternative is ever chosen |
| Matches regex | `^(.+\.)?techeo-web\.pages\.dev$` | Internal clicks from preview links: the production `pages.dev` host and every `<hash>.` or `<branch>.techeo-web.pages.dev` preview (`06` #environments) |

`analytics.ts` strips Stripe's `session_id` from `page_location` before any event is sent (`06` #performance assigns this here). The redaction list above is the backstop. **Done when:** in the QA property, a test checkout's `purchase` shows `ignore_referrer = true` in DebugView and keeps the landing session's source.

### Internal, developer, and synthetic traffic {#internal-traffic}

GA4 excludes data only through data filters, and an Active filter's exclusion is permanent.

| Filter | Matches | State |
|---|---|---|
| Internal traffic | `traffic_type = internal` | Testing from setup; **Active at launch**, Fri Nov 20, 2026 |
| Developer traffic | Events with `debug_mode` | Active from setup. DebugView still shows them; reports never do. |

| Who | How they are excluded |
|---|---|
| **The founder**, every browser and phone | Visit `https://techeo.com/#ga-internal` once per browser. `analytics-core` stores the flag in `localStorage` as `techeo_ga` (inside try/catch; `#touch-fields` lists every key), sends `traffic_type: 'internal'`, and removes the fragment with `history.replaceState`. `#ga-reset` clears it. |
| **Homets office network** | Internal-traffic rules for the office's public IPv4 and IPv6 ranges (CIDR); Homets staff are rightly excluded too |
| **The receptionist vendor** | Its egress IP ranges, if shared (open question 5) |
| **Synthetic form tests** (`06`) | Posted server to server; GA4 never sees them |
| **Playwright tests** | CI builds have no measurement ID; `navigator.webdriver` also sets `internal` |
| **Nightly Lighthouse on production** | `lighthouserc.cjs` appends ` TecheoLHCI` to the emulated user agent. `analytics.ts` matches `/TecheoLHCI\|Chrome-Lighthouse\|HeadlessChrome/`, sets `internal`, and still loads GA4 so `06` measures its cost. PageSpeed Insights may not identify itself (verify); a few runs are tolerable. |
| **The monthly self mystery-shop and SLA seeds** (`08`) | The tester and the seeder set `#ga-internal` on every browser they submit from; the receptionist never sees GA4, so the tests stay blind |
| **QA sessions** | `#ga-debug` sends `debug_mode: true` and no `traffic_type`. An Active internal filter would hide them from DebugView too. |

**Done when:** a week of the founder's normal browsing after launch leaves no sessions in Realtime.

### The QA property {#qa-property}

"techeo.com QA" is a second property with 2-month retention, no filters, and no links. It receives events only from preview branches named `analytics-qa/*` and `rehearsal-open`. That lets the OPEN events (`form_audit_qualify`, `begin_checkout`, `purchase`) be tested with Stripe in test mode before Feb 1, 2027, without a test purchase ever reaching production. This needs one change to `06` #environments, which sets GA4 off for all previews: those two branch patterns build with the QA property's ID.

### How the tag loads {#tag-loading}

The work doesn't fit in one file inside `06`'s "analytics setup ≤1 KB" line. On thanks, legal, and 404 pages, 1 KB is the whole own-JavaScript budget. So the code ships as one small core and three chunks that load after `load`, each with its own `size-limit` entry in CI:

| Chunk | Loads | Holds | Budget (compressed) |
|---|---|---|---|
| `analytics-core` (`src/scripts/analytics.ts`) | Every page, at load | Touch capture, the GPC and DNT check, the flags, consent, config with URL sanitizing, script injection | ≤1 KB, `06`'s existing line |
| `analytics-interact` | Every page, after `load` (every page has header and footer links) | Delegated click classification for the nine click events, with `section_anchor` resolution; the FAQ `toggle` listener; the `section_view` `IntersectionObserver`, attached only where `main` has a `section[id]` or `h2[id]`; the calculator's `techeo:calc` events | ≤1.5 KB, requested |
| `analytics-forms` | Pages with a `form[data-form-id]`, after `load` | `focusin`, `input`, and capture-phase `submit` listeners; `techeo:form` events; the touch hidden fields; the submit and checkout flags | ≤1 KB, requested |
| `analytics-thanks` | `/thanks/*`, `/audit`, and the 404 template, after `load` | Success events, the purchase hash and its dedupe list, `checkout_return`, `page_not_found` with its path guard | ≤1 KB, requested |
| Vitals | Every template, after `load` and idle time | `#web-vitals` | ≤2.5 KB, `06`'s line |

The PII guard (`#pii` rule 4) is shared through the core, so each chunk calls it rather than copying it. **If `06` declines the new lines,** cut in this order until what remains fits: drop `section_view`, then `content_link_click`, then `nav_click`. A submit before `analytics-forms` has loaded goes uncounted in GA4 and carries no touch fields. Reconciliation step 2 absorbs it.

The core runs in production and in the two QA branch patterns, in this order:

1. **Record the landing touch** (`#touch-fields`), then check the browser's privacy signals: if `navigator.globalPrivacyControl === true || navigator.doNotTrack === '1'`, stop (`10` #banner). No Google script is requested and no event is built. On form pages, `analytics-forms` still loads, only to write the touch hidden fields, pending `10`'s answer on touch capture (`#dependencies`). If `10` rejects it, the signal check moves ahead of touch capture and nothing loads.
2. **Read the flags** (`#ga-internal`, `#ga-debug`, `#ga-reset`) and the bot markers.
3. **Set consent defaults:** `gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' })`.
4. **Configure,** with `allow_google_signals: false`, `allow_ad_personalization_signals: false`, a sanitized `page_location`, and `#shared-params`. Config-level parameters go with every event; P4 in `#qa` confirms it.
5. **Inject** `gtag/js?id={PUBLIC_GA4_MEASUREMENT_ID}` as an `async` script element, so that step 1 can prevent the request (this amends `06`'s "loads alongside"). The CSP doesn't change.
6. **After `load`,** import the chunks the page needs (table above). Then, after idle time, import the vitals chunk (`#web-vitals`).

**`page_location`** is `origin + pathname`, plus only `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, and `wbraid` when present. Everything else, including the fragment, is dropped.

## Event taxonomy {#events}

**Naming rules.**

- Names are snake_case: letters, digits, and `_`, starting with a letter, at most 40 characters.
- No GA4 reserved names (such as `error`, `session_start`, `first_visit`, `user_engagement`) or reserved prefixes (`_`, `ga_`, `google_`, `firebase_`).
- Values are at most 100 characters, with at most 25 parameters per event (the standard-property limits, checked September 2026).

**Types:** **S** is a string and **N** a number. GA4 has no boolean, so yes/no values are the strings `yes` and `no`.

### Shared parameters, on every event {#shared-params}

The build writes these as `data-*` attributes on `<html>`, and the `config` call reads them.

| Parameter | Type | Values |
|---|---|---|
| `season_state` | S | `OPEN` · `WAITLIST` |
| `waitlist_reason` | S | `season` · `capacity` · `none` |
| `site_release` | S | `v1` · `v1.1` · `v2` · `v3` |
| `build_id` | S | First 7 characters of the deployed commit SHA |
| `content_group` | S | GA4's built-in grouping: `home` · `audit` · `teardown` · `thanks` · `legal` · `not_found`; v1.1 `insights_index` · `insight`; v2 `engines` · `engine` · `pricing` · `case_studies` · `case_study` · `calculator` · `about` · `markets` · `partners`; v3 `glossary` · `glossary_term` · `trade` · `resources` |
| `page_fragment` | S | The landing fragment, only if that id exists on the page (for example `fit`); else `none`. Shows which deep links vendors forward. |
| `traffic_type` · `debug_mode` | — | Only for excluded traffic and QA (`#internal-traffic`) |

**User property:** `color_scheme` (`light` · `dark`), which answers `05`'s v3 dark-mode question.

### v1 events

**KEY** marks a key event.

| # | Event | Fires when | Parameters (beyond shared) | Serves |
|---|---|---|---|---|
| 1 | `page_view` | The `config` call, every page load | — | Landing pages; banner reach (WAITLIST views of T1, T2, T4, T5) |
| 2 | `section_view` | The heading of a `section[id]` (or an `h2[id]`) in `main` is first fully visible; `top` excluded | `section_anchor` S · `section_index` N | Whether owners reach `#operator`, `#promises`, `#fit` |
| 3 | `cta_click` | Click on an element with `data-cta` | `cta_id` S · `cta_position` S · `section_anchor` S · `link_target` S | Which placements move people to `/audit` and `/teardown` |
| 4 | `nav_click` | Click on a link in a `data-nav` container | `nav_region` S · `link_target` S | `02`'s nav decisions, including a sixth v3 item |
| 5 | `content_link_click` | Any other internal link in `main` | `section_anchor` S · `link_target` S | `02` #linking |
| 6 | `phone_click` | Click on any `tel:` link | `cta_position` S · `section_anchor` S | Where call intent starts; the receptionist log counts calls |
| 7 | `season_banner_click` | Click on the banner's link, its only interaction | `link_target` S | Whether WAITLIST reads as "reserve now" |
| 8 | `faq_open` | A `details[data-faq-id]` opens | `faq_id` S · `section_anchor` S | Which objections owners check. Not sent if `05` ships the always-open variant. |
| 9 | `form_start` | First `focusin` or `input` on a visible field of a `form[data-form-id]`, once per form per page view | `form_id` S | Abandonment |
| 10 | `form_submit` | `submit`, after client-side validation passes | `form_id` S · `form_seconds` N (since `form_start`, capped at 3,600) | Tests `03`'s "about three minutes" and "two minutes" |
| 11 | `form_error` | An error is shown, from `form-enhance.ts`'s JSON or a server-rendered `data-form-error` | `form_id` S · `error_type` S · `error_fields` S | Fields that stop people; outages |
| 12 | `qualify_result` | An outcome is known for `form_audit_reserve` or `form_audit_qualify`: from JSON, a server-rendered `data-qualify-outcome`, or the reservation thanks page | `form_id` S · `qualify_outcome` S · `qualify_pass` S | Outcome mix; whether `#fit` screens people first |
| 13 | `audit_reserve_success` **KEY** | `/thanks/audit-reserved` loads with a submit flag under 30 minutes old | `section_anchor` S (`book` or `start`) | Reservations, by form location |
| 14 | `teardown_request_success` **KEY** | `/thanks/teardown` loads with a submit flag | `section_anchor` S | Teardown requests |
| 15 | `calculator_start` | First input in the calculator, once per page view | `calculator_version` S | Reach |
| 16 | `calculator_complete` | A result is first shown in a page view | `calculator_version` S | Completion. **No input, result, or result band is ever sent** (`03` #calculator promise). The result CTA differs by band (`08` #cta-hierarchy: Audit below 70%, Teardown at or above 70% or under one job), so every result-state CTA carries one analytics identity: `data-cta="calculator_next"`, `cta_position = result`, `link_target = result`. Its `cta_click` is identical in every result state. The next page view still shows where the visitor went, as it does for any link, but no event value carries the band. |
| 17 | `calculator_email_success` | `form_calculator_email` succeeds | `calculator_version` S | Soft demand. Not a key event, because it asks for no callback. |
| 18 | `begin_checkout` | `form_audit_qualify` returns `qualified` through `form-enhance.ts`, before redirecting (event callback with a 500 ms fallback) | `currency` `USD` · `value` 1500 · `items`: one item (`item_id` `engine_audit`, `item_name` `Engine Audit`, `price` 1500, `quantity` 1) | Qualified buyers reaching Stripe. A JavaScript-off post goes straight to Stripe and isn't counted here. |
| 19 | `checkout_return` | `/audit` loads with the checkout flag set, or with a `checkout.stripe.com` referrer | `checkout_result` S `cancel` | Buyers who backed out; `08` decides on a call |
| 20 | `purchase` **KEY** | `/thanks/audit-purchased` loads with a `session_id` matching `^cs_(live\|test)_`, once per session id | `transaction_id` (`txn_` + the first 16 hex characters of the session id's SHA-256; the raw id never leaves the page) · `currency` · `value` · `items` as in row 18 | Attribution only. Stripe is the count; GA4 fires on ACH initiation. |
| 21 | `schedule_click` | Click on a link to the `SCHEDULING` host (`06` #config) | `schedule_type` S · `cta_position` S · `section_anchor` S | Kickoff self-booking vs the fallback call |
| 22 | `outbound_click` | Click on a link to any other external host | `link_domain` S · `section_anchor` S | Use of the Homets link and legal-page links |
| 23 | `file_download` | Click on a link with `data-file-id` | `file_id` S · `file_extension` S | Organizer portrait downloads |
| 24 | `report_sample_open` | Click on a sample report image | `sample_page` S (`1` · `2` · `3`) | Whether buyers look inside the report |
| 25 | `page_not_found` | The 404 template loads | `not_found_path` S · `referrer_host` S | Broken inbound links. `referrer_host = techeo.com` is our own broken link: fix it the same day. |
| 26 | `web_vitals` | The vitals library reports a final value | `metric_name` S · `metric_value` N · `metric_rating` S · `metric_budget` S | Real-user performance vs `06`'s budgets |

The submit flag (rows 13, 14) and the checkout flag (row 19) live in `sessionStorage` as `techeo_submit` and `techeo_checkout`. The capture-phase `submit` listener sets them for enhanced and native posts alike, and they are deleted once used, so reloading a thanks page sends nothing. `purchase` keeps the hashes it has already sent in the `localStorage` key `techeo_purchases` (`#touch-fields` lists every key).

**Per form.** Every form sends `form_start`, `form_submit`, and `form_error` with its `form_id`, plus:

| `form_id` | Outcome events | Success event |
|---|---|---|
| `form_audit_reserve` | `qualify_result` | `audit_reserve_success` |
| `form_audit_qualify` | `qualify_result`, then `begin_checkout` or a decline | `purchase` |
| `form_teardown_request` | Duplicates and exclusion-zone replies are `form_error` | `teardown_request_success` |
| `form_calculator_email` | — | `calculator_email_success` |
| `form_market_check` (v2) | — | `market_check_success` **KEY**, carrying **no market result**: a row tying "taken" to a region could identify a client (`01` audience (e)) |
| `form_partner_referral` (v2) | — | `partner_referral_success` **KEY** |

**Later releases.** v1.1 adds no events. v2 adds the two success events above, `calculator_version = full`, and new `cta_id` values. v3 adds events only where a page trigger in `04` calls for one.

### Parameter dictionary {#parameters}

| Parameter | Allowed values |
|---|---|
| `form_id` | The brief's six ids, exactly |
| `cta_id` | v1: `audit` (→ `/audit`, `/audit#book`), `teardown` (→ `/teardown`, `/teardown#request`), `calculator` (→ `/#calculator`), `home` (→ `/`), `calculator_next` (the calculator's result CTA in every result state, whichever page it opens; row 16). v2 adds `pricing`, `markets`, `partners`, `case_studies`, `engines`. |
| `cta_position` | `header` · `hero_primary` · `hero_secondary` · `section` · `result` (calculator; only with `calculator_next`) · `closing` (`#start`) · `outcome` (form outcome panel) · `next_step` (thanks and 404) · `footer` |
| `section_anchor` | The nearest enclosing `section[id]`, else the nearest preceding `h2[id]`, else `site-header`, `site-footer`, or `season-banner`; else `main`. Always an id from our own HTML. |
| `section_index` | The 1-based order of the section in `main` (N), so reach can be read in page order |
| `link_target` | The internal `href` as written: a path, plus an optional fragment. `02` forbids query strings on internal links. Exception: `calculator_next` always sends `result`. |
| `nav_region` | `header` · `section_row` (v1 row 2, below 1024px) · `footer` · `breadcrumb` · `mobile_menu` |
| `faq_id` | The item's H3 id: `faq-<slug>` on `/` (`02` #fragments); `faq-<page>-<slug>` elsewhere (`faq-audit-<slug>` and `faq-teardown-<slug>`, which `03` assigns and freezes, `#dependencies`; and `04`'s v2 ids, such as `faq-pricing-discounts`, per `04` #scope) |
| `error_type` | `validation` · `rate_limited` (429) · `bot_check` (403) · `wrong_state` (409) · `server` (500, 503) · `network` · `checkout_unavailable` · `duplicate` · `exclusion_zone` |
| `error_fields` | Field **keys** from `08`'s schema, sorted and comma-separated (`phone,zip`). Never values. |
| `qualify_outcome` | `08` #qualification's outcomes: `qualified` · `reserved` · `needs_conversation` · `exclusion_zone` · `not_residential` · `out_of_scope` · `not_servicetitan` · `low_lead_flow` · `no_test_consent` · `checkout_unavailable`. Review reasons (`market_hidden` and the rest) are never sent: a GA4 row must not reveal a taken market. |
| `qualify_pass` | `yes` for `qualified`, `reserved`, `checkout_unavailable`; `review` for `needs_conversation`; `no` for hard declines |
| `calculator_version` · `checkout_result` · `schedule_type` | `mini`, `full` · `cancel` · `audit_kickoff`, `discovery` |
| `link_domain` · `referrer_host` | Hostname only, lowercase, `www.` removed · or `none` |
| `file_id` · `file_extension` | `founder_portrait` · `jpg`. File names are never sent; they carry the founder's surname. |
| `not_found_path` | Path only, lowercase, no query or fragment, at most 100 characters, passed through the PII guard |
| `metric_name` · `metric_rating` · `metric_budget` | `LCP`, `INP`, `CLS` · `good`, `needs-improvement`, `poor` · `within`, `over` |
| `metric_value` | Milliseconds for LCP and INP; CLS × 1,000, rounded |

### PII rules {#pii}

1. **No form field value reaches GA4:** no name, email, phone, company, website, ZIP, band, lead source, `heard_from`, note, or calculator number. GA4 learns only that a form started, was submitted, failed on named field keys, or succeeded, plus the server's outcome class.
2. **No identifier that joins GA4 to a person:** no Supabase, Stripe, ClickUp, or Cal.com id, no User-ID, and no raw `session_id`.
3. **No free text.** Every string is an enum, an id from our own HTML, a hostname, or a sanitized path.
4. **Runtime guard.** Any string matching an email pattern (`[^\s@]+@[^\s@]+\.[^\s@]+`) or a phone-like run (`\d[\d\s().-]{6,}\d`) becomes `[redacted]`. Strings are then truncated to 100 characters. In `page_location` and `page_referrer`, the email check covers the whole URL but the phone check covers the path only. The only query keys `page_location` keeps are the allowlisted UTM and click-id keys (`#tag-loading`), UTM values follow the builder sheet's regex (`#utm`), and a dated `utm_content` such as `post-2027-02-15` would otherwise match the phone pattern and be redacted.
5. **Sanitized URLs** (`#tag-loading`), with GA4's redaction as the backstop.
6. **No personal or prospect data in UTMs** (`#utm`).

### Key events and custom definitions {#custom-definitions}

**Key events:** `purchase`, `audit_reserve_success`, and `teardown_request_success`; from v2, `market_check_success` and `partner_referral_success`. That's five of the 30 a standard property allows. `purchase` may already be a key event by default (verify). A phone click or a calculator email is intent, not an outcome, so neither is a key event.

**Register by Mon Nov 16, 2026,** because custom definitions are not retroactive:

- **27 event-scoped dimensions:** `season_state`, `waitlist_reason`, `site_release`, `build_id`, `page_fragment`, `section_anchor`, `section_index`, `cta_id`, `cta_position`, `link_target`, `nav_region`, `faq_id`, `form_id`, `error_type`, `error_fields`, `qualify_outcome`, `qualify_pass`, `calculator_version`, `checkout_result`, `schedule_type`, `file_id`, `sample_page`, `not_found_path`, `referrer_host`, `metric_name`, `metric_rating`, `metric_budget`.
- **1 user-scoped dimension:** `color_scheme`.
- **2 custom metrics:** `form_seconds` (seconds) and `metric_value` (standard).

`link_domain` and `file_extension` use GA4's built-in *Link domain* and *File extension* dimensions. Register them as custom dimensions only if P4 in `#qa` shows the built-ins empty for custom events. The total stays well inside the limits of 50 event-scoped dimensions and 50 custom metrics.

### Implementation contract {#implementation}

| Attribute | On | Set by |
|---|---|---|
| `data-season-state`, `data-waitlist-reason`, `data-release`, `data-build`, `data-page-group` | `<html>` | Base layout, from `site.ts` (`06`) |
| `data-cta`, `data-cta-position` | Every CTA (`SeasonCta` and the rest). `tel:` and scheduling links carry `data-cta-position` only. | `05` components |
| `data-nav` | Header, section row, footer, breadcrumb, mobile menu | `05` |
| `data-form-id` · `data-faq-id` · `data-file-id` · `data-sample-page` | Forms · FAQ `details` · portrait link · sample images | `05` |
| `data-qualify-outcome`, `data-form-error`, `data-error-fields` | Server-rendered outcome and error blocks | `06` `server/render.ts` |

**One registry.** `src/config/analytics-events.ts` holds every event, parameter, and enum above as TypeScript types, and every analytics chunk sends only registry events. `tests/unit/analytics-taxonomy.test.ts` (a request to `06`) fails when:

- a name breaks the rules above;
- a parameter or value is missing from the registry;
- `qualify_outcome` differs from the migration's constraint;
- an `a[href^="/audit"]` or `a[href^="/teardown"]` in `dist/` has no `data-cta` and sits outside a `data-nav` container;
- a `data-cta` value is unknown;
- a `form` lacks a brief `data-form-id`.

**The PII test.** `tests/e2e/analytics-pii.spec.ts` runs on a CI build with the QA property's measurement ID, which is safe because every collect request is aborted. A dummy ID may never produce a collect request. If CI can't reach `googletagmanager.com`, a pinned copy of `gtag.js` is served through a Playwright route instead. Playwright records, then aborts, every request to `*.google-analytics.com` and `*.analytics.google.com`, and fills every form in every state with sentinels:

- email `sentinel.q7@example.com`
- name "Sentinel Qadir"
- company "Sentinel Heating"
- phone `(555) 555-0142`
- calculator inputs 317, 43, and 911

It parses each request's `dl`, `dr`, `dt`, `ep.*`, `epn.*`, and `up.*` fields. It fails if:

- any sentinel string appears;
- any `epn.*` value equals a calculator input, comparing every key except `metric_value`, `form_seconds`, `section_index`, and `value`, which legitimately take numbers in that range (an INP of 43 ms, for example);
- the calculator's result click sends different `ep.*` values in the below-70% state and in the at-or-above-70% and under-one-job states (row 16);
- any page visited recorded no collect request, or no request carried `en=form_submit`, so the test can't pass on silence.

**Done when:** both tests pass on every pull request, and every chunk in `#tag-loading` passes its `size-limit` entry.

## UTM conventions {#utm}

UTMs go on links whose referrer will be lost (email clients, apps, PDFs, QR codes, podcast apps), or where one source runs several campaigns. **Never tag:** internal links (`02` #query-strings); entity fields such as the LinkedIn company-page website, Crunchbase, directories, `sameAs`, `/llms.txt`, and speaker pages (`07` #fact-sheet: the URL is `https://techeo.com` everywhere); owner-community posts, where a tracked link reads as a pitch (`techeo.gtm` channel 3), and the referrer and `heard_from` cover it; and the Homets link (`07` #homets-link), whose referrer is exact.

**Naming rules.**

1. Lowercase `a–z`, `0–9`, single hyphens: `^[a-z0-9]+(-[a-z0-9]+)*$`, at most 40 characters.
2. **`utm_source`** is the sender or place: a network name, or a vendor or show code; `linkedin`; `teardown`; `founder-email`; or `notify` (`08`'s system email).
3. **`utm_medium`** is exactly one of `email` · `referral` · `social` · `audio` · `print` · `document`.
4. **`utm_campaign`** is `{initiative}-{yyyy}`, plus a season or month where one applies. Evergreen links use a fixed campaign with no year: `signature`, `teardown-delivery`, and `08`'s email ids. **`utm_content`** is the placement. **`utm_term`** is never used.
5. **No personal or prospect data, ever.** Vendors and shows get codes (`vendor-v03`, `podcast-s02`), mapped in the builder sheet's private `registry` tab. The four peer networks use their public names (`pantheon`, `nexstar`, `service-nation`, `egia`). No vendor's name appears in a URL a prospect reads.
6. **Destinations** are canonical paths from `02`'s manifest, with any fragment after the query (`/?utm_source=…#calculator`). No link shorteners: a skeptical owner should see where a link goes.
7. **Every tagged link is created in the builder sheet before use.** A value in GA4 that isn't in the sheet fails the monthly QA.

| GTM channel | Placement | Destination | `utm_source` | `utm_medium` | `utm_campaign` | `utm_content` |
|---|---|---|---|---|---|---|
| 7 · Teardown outbound (from Feb 1, 2027) | Teardown email signature. Never `/audit` or `/teardown` (`01` #arrival-paths). | `/` | `teardown` | `email` | `teardown-2027-spring`, `teardown-2027-fall` | `signature` |
| 7 · Teardown outbound | Footer of the scored sheet (PDF) | `/` | `teardown` | `document` | as above | `scored-sheet` |
| 1 · Peer networks | Blake's follow-up emails to members | `/` | `pantheon` · `nexstar` · `service-nation` · `egia` | `email` | `{network}-{yyyy-mm}` | `signature`, `body` |
| 1 · Peer networks | Member-forum posts | `/` or `/insights/<slug>` | network name | `referral` | `{network}-forum-{yyyy}` | `post-{yyyy-mm-dd}` |
| 1 · Peer networks | QR on a talk's last slide | `/` | network name | `print` | `talk-{yyyy-mm}` | `slide-qr` |
| 2 · Vendor referrals | The link a vendor forwards to a client | `/teardown` | `vendor-v01` … `vendor-v10` | `referral` | `vendor-teardown-{yyyy}` | `forward-link` |
| 2 · Vendor referrals | Blake's referral-ask email to the vendor | `/#fit` | vendor code | `email` | `vendor-ask-{yyyy}` | `body` |
| 3 · Podcasts | Show notes: the topic page or `/`, never `/audit` (`07` open question 9) | topic page or `/` | `podcast-s01` … | `audio` | `podcast-{yyyy}` | `show-notes` |
| 3 · Podcasts | The guest kit (PDF) | `/` | `guest-kit` | `document` | `guest-kit-{yyyy}` | `bio` |
| 4 · Supply houses (inactive in year one) | Counter-card QR | `/teardown` | `supply-{code}` | `print` | `counter-card-{yyyy}` | `qr` |
| 5 · Own content | A LinkedIn post body | article or `/` | `linkedin` | `social` | `post-{yyyy-mm}` | `post-{yyyy-mm-dd}` |
| 6 · Trade shows (year two) | Booth QR | `/` | `{show}-{yyyy}` | `print` | `tradeshow-{yyyy}` | `booth-qr` |
| All · founder mail | Default Techeo signature | `/` | `founder-email` | `email` | `signature` | `default` |
| All · founder mail | Delivery email for a requested teardown | `/audit` | `founder-email` | `email` | `teardown-delivery` | `body` |
| All · founder mail | E24, after discovery | `/audit` | `founder-email` | `email` | `e24` | `body` |
| `08` sequences | Every link in `08`'s system email | the page `08` names | `notify` | `email` | `08`'s email id, lowercased: `e01`, `e03`, `e04-{yyyy-mm}`, `e20`, and so on | link position (`button`, `ps`) |

**The builder sheet.** "techeo-utm-builder," in the Techeo Shared Drive (`#aeo-log`), has one row per link in its `links` tab: date, GTM channel, placement, destination, the four UTM values (drop-downs for source and medium; a regex check turns bad cells red), the final URL by formula, where it was placed, and by whom.

**Done when:** every tagged link sent from Feb 1, 2027 is in the sheet, and GA4 shows no UTM value the sheet lacks.

### Attribution hidden fields {#touch-fields}

`08` #form-rules assigns the forms' attribution hidden fields to this document. They feed `06`'s `leads.first_touch` and `last_touch`, and never GA4.

- **Capture.** The first step of `analytics-core`, before the GPC and DNT check, because nothing leaves the browser unless the visitor submits a form to us (pending `10`, `#dependencies`). On a landing, meaning a page load whose referrer isn't techeo.com, it records the fields below. A page load whose referrer host matches the unwanted-referral list (`stripe.com` and its subdomains, `cal.com`, `calendly.com`, `*.techeo-web.pages.dev`; `#ga4`) is not a landing and writes nothing, so a buyer returning from Stripe or Cal.com keeps the touch that brought them.
  - `path`;
  - the five `utm_*` values;
  - `ref_host` (the referrer's hostname);
  - `click_id` (`yes` if `gclid`, `gbraid`, `wbraid`, `msclkid`, or `fbclid` is present, never the value);
  - `date` (a day, not a time).
- **Storage.** The `localStorage` key `techeo_touch`, inside try/catch. `first` is written once and replaced only after 90 days; `last` is overwritten by any landing with a UTM or an external referrer.
- **Submission.** The capture-phase `submit` listener writes `touch_first` and `touch_last` hidden inputs as compact JSON, at most 600 characters each. `06` keeps only these keys, requires UTM values to match `^[A-Za-z0-9._~-]{1,100}$` and `path` to follow `02`'s path rule, and drops anything else. Without JavaScript, both are empty and `06` records the form page's path.

**Client-side storage.** These are every key the site's own scripts write. `10` #cookies and `/privacy` list them (`#dependencies`). All are read and written inside try/catch, and none ever reaches GA4.

| Key | Store | Contents | Lifetime |
|---|---|---|---|
| `techeo_touch` | `localStorage` | `first` and `last` touches, as above | `first` replaced after 90 days; `last` overwritten by the next landing |
| `techeo_ga` | `localStorage` | The internal or debug flag (`#internal-traffic`) | Until `#ga-reset` |
| `techeo_submit` | `sessionStorage` | The submit flag and its time (rows 13, 14) | Deleted on use, or when the tab closes |
| `techeo_checkout` | `sessionStorage` | The checkout flag (row 19) | Deleted on use, or when the tab closes |
| `techeo_purchases` | `localStorage` | At most 10 `txn_` hashes already sent (row 20) | Each expires after 30 days |

**Done when:**

- On staging, landing on `/?utm_source=teardown&utm_medium=email&utm_campaign=teardown-2027-spring&utm_content=signature` and reserving three pages later stores those four values in `first_touch`.
- After a test-mode Stripe cancel and a second qualify, `last_touch` still holds the original UTM values.
- A clean browser that visits `/`, `/audit`, and `/teardown`, submits a form, and completes a test checkout shows no storage key outside this table in DevTools.

### "How did you hear about us?" and the `lead_channel` rule {#heard-from}

`heard_from`, optional on the audit and teardown forms (`08` owns it), is the only record of spoken URLs and verbal recommendations, which arrive as direct traffic (`01` #arrival-paths). Supabase stores it beside `first_touch`.

| `heard_from` | Techeo channel |
|---|---|
| `peer_network` | Peer networks. Today it also absorbs owner communities (open question 3). |
| `vendor` | Vendor referrals |
| `podcast` | Podcasts |
| `teardown` | Teardown outbound |
| `search_ai` | Search and AI |
| `other` | Other |

**`lead_channel`** gives each lead exactly one channel, decided in this order:

1. `teardown`, whatever `heard_from` says, if the lead's first record has `channel = 'outbound'` (an outbound target the founder keyed, `08` F9 step 1) or `parent_lead_id` links it to such a lead (`08` F9 step 5). This is `08` F9 step 7's rule: the site verified that relationship; it didn't start it.
2. Otherwise `heard_from`, if answered and not `other`.
3. Otherwise the `first_touch` UTM, mapped by the channel rules below.
4. Otherwise the `first_touch` referrer host, mapped the same way.
5. Otherwise `direct_unknown`.

A lead linked to an outbound one counts once, under the outbound lead, in every count by channel and in `retainers` (`08` #dependencies: linked leads count as one in stage conversion). An owner who gets a cold teardown and then fills in a form from another address is one `teardown` lead, not two.

The `lead_channel` query in `monthly-export.sql` (`#sources-of-truth`) implements all five steps in SQL: step 1 from the lead's first submission and `parent_lead_id`, then steps 3–5 by applying the channel table's rules 1–13 in order to `first_touch`. A monthly matrix, `heard_from_pivot` in the same file, compares `heard_from` with the UTM- or referrer-derived channel. Disagreement is information: `peer_network` with a direct first touch is a verbal recommendation. If a channel's tagged links land under a different `heard_from` more than half the time across 10 or more leads, check its links.

**The "Techeo channels" custom channel group.** A standard property allows two custom channel groups, applied retroactively (verify). Create this one; its rules run in order on session source and medium. GA4's "matches regex" is a full match, so every pattern below is anchored; verify each rule in the channel-group preview at setup.

| # | Channel | Condition |
|---|---|---|
| 1 | Teardown outbound | source = `teardown` |
| 2 | Peer networks | source matches `^(pantheon\|nexstar\|service-nation\|egia)$`, plus each network's referring hostname once seen |
| 3 | Vendor referrals | source begins with `vendor-` |
| 4 | Podcasts | medium = `audio`, or source = `guest-kit` |
| 5 | Owner communities | source matches `^(.+\.)?facebook\.com$` (covering `m.`, `l.`, and `lm.facebook.com`, where most group clicks arrive) and medium = `referral` (assumption: with no ads or share buttons, Facebook traffic is group traffic) |
| 6 | LinkedIn | source matches `^(linkedin\|lnkd\.in\|com\.linkedin\.android\|(.+\.)?linkedin\.com)$` |
| 7 | AI assistants | source matches `^(.+\.)?(chatgpt\.com\|openai\.com\|perplexity\.ai\|copilot\.microsoft\.com\|gemini\.google\.com\|claude\.ai)$`. ChatGPT tags many cited links `utm_source=chatgpt.com`, but its app often strips referrers, so some AI visits land in Direct (verify). |
| 8 | Organic search | the default Organic Search |
| 9 | Techeo email | source = `notify` or `founder-email` |
| 10 | Homets site | source matches `^(.+\.)?hometsair\.com$` |
| 11 | Print | medium = `print` |
| 12 | Direct | the default Direct |
| 13 | Other referral | medium = `referral` |
| 14 | Unassigned | Everything else: a tagging error to fix |

In every table in this document's Markdown source, `\|` is table escaping only; the regex itself uses a plain `|`.

## Search Console and Bing Webmaster Tools {#search-tools}

`07` #indexing specifies setup (properties, verification, sitemaps, IndexNow, disavow); `09` submits the sitemap (`02` #sitemap; `#qa`, launch day). This section also owns the GA4 link and the watch list.

**GA4 link** (when `11` A4 creates the accounts, Oct 12–16, 2026, and after `07` verifies; configuration complete in `11` S1, by Fri Nov 13): Admin → Product links → Search Console links → the `techeo.com` domain property → the techeo.com stream; then publish the "Search Console" collection in the Reports library.

**Watch** weekly for four weeks after each release, then monthly. Record the date, engine, indexed count, reasons for unindexed pages, and brand position in the `indexing` tab of techeo-site-data.

| Tool · report | Watch | Act when |
|---|---|---|
| GSC · Pages; Bing · URL Inspection | Indexed = the manifest's `inSitemap` count (6 at v1) | A URL isn't indexed after 30 days (S4): inspect it, check `02`'s rules, request indexing, log the cause |
| GSC · Sitemaps | "Success"; discovered = the `inSitemap` count | Any error goes to `06` |
| GSC and Bing · Performance | Brand query "techeo": position and CTR; queries grouped by `07`'s query-map rows; clicks by page (diagnostic) | Brand not first on Feb 1, 2027 (S4): `07` entity work |
| GSC · Not found (404) | URLs with external referrers or ≥3 hits a week | A decision under `02` #preflight-redirects |
| GSC · Manual actions, Security issues | Empty | Anything: the founder, the same day |
| GSC · Links; Bing · Backlinks | New referring domains | A link pattern we didn't earn: `07`'s disavow rule |
| GSC · Crawl stats; enhancements | Host status clean; robots.txt fetched; no structured-data errors | `06` or `07` |
| GSC · Core Web Vitals | Expected: "Not enough usage data" | If data appears, compare it with `#web-vitals` |
| GSC · Generative AI performance; Bing · AI Performance (both per `07`; verify) | AI impressions by page; Copilot citations and grounding queries, copied to `07`'s query sheet | Diagnostic only |
| Bing · IndexNow | Submissions received by launch + 14 days | `07`'s fallback |

**Done when:** S4 is logged on Dec 20, 2026 and Jan 29, 2027, and every monthly close has a dated `indexing` row for both engines.

## Core Web Vitals on a low-traffic site {#web-vitals}

**Field data will probably not exist.** Chrome's public field data (CrUX), which feeds PageSpeed Insights and Search Console, publishes an origin only with enough eligible traffic, which a few hundred owners a month likely won't reach in year one (assumption). The close still checks PageSpeed Insights monthly and records "no field data" or the values.

**Lab data is the gate.** `06`'s Lighthouse CI runs on every pull request and nightly on production with GA4. Each month, the 30-night medians of LCP, CLS, and TBT for `/`, `/audit`, and `/teardown` go in the `vitals_lab` tab.

**Real-user data, if the budget allows,** because owners read on phones over cell networks, which a data-center lab run doesn't reproduce.

- **Library.** Google's `web-vitals`, standard build, current major (v5 or later; verify), importing only `onLCP`, `onINP`, and `onCLS`.
- **Loading.** A separate chunk imported after `load` and `requestIdleCallback` (3-second fallback), so it never competes with LCP. It reports each final value once; CLS and INP report when the page is hidden.
- **Cost.** About 2 KB compressed (the maintainers' figure; `size-limit` confirms), which doesn't fit `06`'s "analytics setup ≤1 KB." `06` #performance now carries its own line, "Vitals chunk, imported after `load`: ≤2.5 KB," on every template. If that line is ever withdrawn, real-user data is off (open question 2).
- **Budget flag.** `metric_budget` compares each value with `06`'s real-user 75th-percentile budgets: LCP ≤2,000 ms, INP ≤150 ms, CLS ≤0.05.
- **Reading.** GA4 can't compute percentiles, and doesn't need to: **the 75th percentile is within budget exactly when at least 75% of samples are `within`.** Per template group and metric, a month with ≥50 samples (an assumption) reports the share `within`; fewer reports "insufficient."
- **Rejected:** Cloudflare's vitals beacon (a third script, ruled out by `06`) and BigQuery export (no volume before v3).

**Done when:** the chunk ships inside its budget line, DebugView shows `web_vitals` for LCP and CLS after the tab is hidden, and the March 2027 close reports a share or "insufficient" for each template group.

## The AEO citation log {#aeo-log}

`07` #prompt-test owns the prompts, assistants, protocol, log columns, and fact-error codes. This section owns storage and reporting.

**Storage:** the Google Shared Drive "Techeo," owned by Techeo LLC's Workspace (D4), in the folder `Website/Measurement/`. Access is limited to the founder and, once hired, the scorer. Nothing in it is ever shared by public link.

| Item | Contents |
|---|---|
| `techeo-aeo-prompt-log` (Sheet) | **`log`:** `07` #log-format's 19 columns, one row per run, append-only, with a protected header and drop-downs for the enumerated columns. **`errors`:** one row per wrong fact: id (`E-0001`), first-seen date, code F1–F10, assistant, prompt, quoted statement, source cited, fix, `owner`, `due_date`, deploy date, `open`/`closed`, and closing run date. **`monthly`:** a pivot by month and assistant of prompts naming Techeo and citing techeo.com (each of 12), P11/P12 pass, and open errors. **`crawler_requests`:** below. |
| `aeo-captures/YYYY-MM/` | Captures named as `07` specifies. They show competitor names, so they stay internal. They are deleted on the retention period `10` sets (`#dependencies`); the assumption until then is 24 months. |
| `techeo-query-sheet` (Sheet) | `07` #measuring-demand's volumes, each with its source and date |

**Reporting in the monthly close:**

- **Scorecard number 6:** open wrong facts.
- **One diagnostic line:** "P11/P12 pass on {n} of {m} core assistants; techeo.com cited on {x} of {runs} runs ({assistants})." {runs} is the month's logged runs: 24 in December 2026 and January 2027, 48 in core months, and 72 when the extended assistants run in Feb, May, Aug, and Nov (`07` #assistants). The 16 quarterly variance runs are left out, because they repeat prompts to measure variance, not reach.
- **Stale errors:** any error open after two monthly runs is listed by id (`07` #corrections).
- **Quarterly:** the worst of the three P11/P12 runs (`07` rule 7).
- **Never reported:** competitor names or prompt text outside Techeo.

**Crawler requests.** For `07`'s `/llms.txt` measurement, the `crawler_requests` tab records month, crawler, `/llms.txt` requests, and site requests. The figures come from Cloudflare's AI crawler dashboard (called AI Crawl Control in 2026; verify its per-path filtering and retention on Free). If retention is under 31 days, capture weekly. If per-path counts aren't available, use `06`'s GraphQL query (verify) or record "not available."

**Done when:** the Nov 16–19, 2026 baseline (48 rows) and the December run (24 rows) are in `log`, `monthly` computes without hand edits, and every open error has an owner and a date.

## The site scorecard {#scorecard}

Seven numbers, published by the 10th under "Site" in the monthly document that carries Techeo's seven numbers and the Homets KPIs (`techeo.metrics` #cadence). They sit **below** founder hours and Homets KPI compliance, which override them, and never repeat a Techeo number. Most `01` targets are per season window, so each number shows the month and the window to date.

| Window | A | B | C | D | E |
|---|---|---|---|---|---|
| Dates | Nov 20, 2026 – Jan 31, 2027 | Feb 1 – Apr 30, 2027 | May 1 – Sep 6, 2027 | Sep 7 – Nov 30, 2027 | Dec 1, 2027 – Jan 31, 2028 |
| State | WAITLIST | OPEN | WAITLIST | OPEN, or WAITLIST·capacity after the Aug 16 gate check | WAITLIST |

The 12-month targets (O2, O5) count Fri Nov 20, 2026 – Fri Nov 19, 2027 (`01` #success). Rows 2 and 3 show a "first 12 months" figure beside the window to date.

| # | Number | Precise definition | Source | Target |
|---|---|---|---|---|
| 1 | **Qualified audit reservations** | Distinct leads with a counted `form_audit_reserve` submission whose outcome is `reserved`. A lead counts once per window. Printed on the same line as O8 (below), because `techeo.metrics` #not-measured allows no lead volume without its booking rate beside it. | Supabase | **Target:** ≥3 in window A (O1); ≥6 in window C (O6); window E set at the Dec 2027 review. In OPEN windows, shown for information. |
| 2 | **Paid Engine Audits, net** | Live-mode Engine Audit payments with status `paid`, less any refunded or disputed by the close. One line beneath: "refunded for a fit problem the form missed: {n}." | Stripe | **Target:** ≥2 by Apr 30, 2027; over the first 12 months, ≥5 if the Aug 16 gate check allows new clients and ≥2 if it doesn't (O2); ≥3 in window D if the gate allows new clients (`01` v2); 0 fit refunds (O4) |
| 3 | **Qualified teardown requests** | Distinct leads with a counted `form_teardown_request`, outside the exclusion zone, not a duplicate, whose request reached `confirmed` or later. Printed with `teardown_to_discovery` beside it: of delivered teardowns, how many reached a discovery call within 30 days. | Supabase | **Target:** ≥12 over the first 12 months (O5) |
| 4 | **Callback SLA compliance** | `08` #sla's business-hours compliance, its publish metric: of `08`'s eligible events received 08:00–18:00 [TZ] on business days (seeds and self-shop forms in; synthetic runs out), the share whose first dial (`app.lead_touches`, `callback_attempt`) came at or before `sla_due_at`. After-hours compliance and public-promise compliance (which must be 100%) sit on the same line. Every miss is listed by lead id, with its cause. | Supabase | **Target:** ≥95% every week (O9). Four straight qualifying weeks earn SLA version B (`08` #sla sets the minimum events and switches it). |
| 5 | **Self mystery-shop Booking sub-score** | techeo.com's Booking Engine sub-score, scored with the `techeo.audit` rubric from `08`'s monthly shop (calls at the `01` R2 hours, plus one form) | `08`'s shop log | **Target:** ≥86 (S2) |
| 6 | **Open wrong facts in AI answers** | Rows in the `errors` tab with status `open` at the close | Prompt log | **Target:** 0 (S3) |
| 7 | **ICP share of audit-form leads** | Of distinct leads with a counted audit-form submission in the window, the share with at least one counted qualification meeting every `techeo.positioning` #icp condition the submitting form collects (reservations: role, revenue, CRM, work mix, goal, zone; qualify: all), as coded in the export query. `08`'s own `is_icp` rule replaces this definition if `08` writes one. | Supabase | **Assumption:** ≥60% (O11), reset after 20 leads. **Trigger:** under 40% for an OPEN window → rewrite `#fit`. |

**Status words:** *Met*, *Not yet* (the window is open and below target), *Missed* (the window closed below target), *Pass* or *Fail* (numbers 4–6), and *Insufficient* (under the sample rule). No colors, arrows, or "trending."

### Below the seven (reported, not scored) {#below-the-seven}

`01` #success says `09` builds the scorecard for O1–O13, and `01`'s v1 success test needs "O8 met" by Apr 30, 2027. The four outcome criteria that aren't among the seven numbers are reported under them, each from a named query in `monthly-export.sql`. Below 20 rows each is shown as "{n} of {m}" (`#philosophy` rule 3).

| O | Definition | Query | Target (`01`) |
|---|---|---|---|
| O7 | Of reservations held at an opening (an `app.reservation_openings` row for that opening, with its `contact_due_at` set), the share with that row's `contacted_at` ≤ `contact_due_at`. `06` keeps one row per reservation per opening held, so a carried reservation counts at every opening where it was held (`08` F2 step 7). | `o7_o8` | 100% at each opening |
| O8 | Of qualified reservations held at an opening (the same `app.reservation_openings` rows), those whose lead held a discovery call within 30 days of it: a `lead_touches` row of kind `discovery_held`, or an uncanceled `discovery` or `discovery-queue` booking in `app.cal_bookings` that has already started. Printed on scorecard row 1's line. | `o7_o8` | ≥50% |
| O12 | Signed retainers (`app.stage_events` to `retainer signed`) that are **site-originated**: the lead's first record is a site form submission, not staff-entered (`entered_by_staff`) and not an outbound target (`channel = 'outbound'`); no lead is linked to it by `parent_lead_id`; and neither `heard_from` nor the first-touch UTM says `teardown`. A lead linked to an outbound one is one row, under the outbound lead, and never site-originated (`08` F9 step 7). In other words, the site started the relationship instead of verifying an outbound one. The founder strikes a row when the first contact was really a conversation (a network event, say) and notes why. | `retainers` | ≥1 |
| O13 | For site-originated retainers, the median of OPEN weeks from `first_touch.date` (or the first submission's date) to the retainer, counting only days inside OPEN windows | `retainers` | ≤10 OPEN weeks |

**Carried reservations** get their own line under O7 and O8 (`08` F2 step 7): of the reservations held at an opening, how many were carried, and from which earlier opening, from `o7_o8`'s `carried_from` rows. "3 carried from Feb 1" beside O8's "{n} of {m}" shows a queue outrunning discovery capacity as a number, not a quiet miss. An opening with no carried reservation prints "none carried." Reported only; `01` sets no target.

**Discovery calls** come from the `discovery_summary` tab of techeo-site-data. The founder fills it by the 8th from `08`'s required comment at `discovery held` (`08` #pipeline). Its columns are month; calls held; coded answers to `01`'s two questions ("What did you look at before this call?" and "Was there anything on the site or the phone that almost stopped you?"), as counts per code; each objection raised by three or more prospects; and that objection's fix date.

**The monthly block:**

> **Headline:** {WAITLIST: #1 qualified reservations, window to date vs target · OPEN: #2 paid Engine Audits, net, window to date vs target}.
>
> **Site (techeo.web.analytics), {month}.** State: {OPEN / WAITLIST·reason}. Stripe = Supabase: {yes/no}. GA4 captured {n} of {m} success events. SLA sample: {5 of 5}.
>
> | # | Number | Month | Window to date | Target | Status |
> |---|---|---|---|---|---|
> | 1–7 | … | … | … | … | … |
>
> **Below the seven:** O7 {n of m}. O8 {n of m} (with #1). {n} carried from {previous opening}, or "none carried." O12 {n}. O13 {median, or "no site-originated retainer yet"}.
> **What we changed:** one line. **What it moved:** one line, citing a number above. **What is next:** one line.
> **Discovery calls:** {n}, from `discovery_summary`. Objections raised by three or more prospects: {list, or "none"}. Each is fixed within two weeks (`01` #success).

**Weekly (Friday):** `08` #sla's weekly SLA report, from the `sla_weekly` tab that `06`'s Monday job fills (Monday–Sunday; `#sources-of-truth`, **Automation**): business-hours, after-hours, and public-promise compliance; median minutes to first dial; event count; and each miss by lead UUID, with its cause added at the review. The live-answer rate comes from the receptionist log by hand. One more line gives this week's counted leads by form.

**Done when:** the December 2026 close, published by Jan 10, 2027, shows the headline and all seven numbers or "Insufficient," none of them from GA4. The February 2027 close is the first to show O7, and the March 2027 close (by Apr 10) shows O8 for the Feb 1 opening. The September 2027 close shows O7 for the Sep 7 opening with its carried line, counting every reservation carried from Feb 1 in O7's {m}.

## Looker Studio dashboards {#dashboards}

One report, "techeo.com — Site measurement," owned by the Techeo Workspace account. It costs $0 (Looker Studio, not Pro), and it serves the monthly close and the Friday review.

**Data sources:**

1. GA4 "techeo.com" (native connector).
2. Search Console `sc-domain:techeo.com`, Site Impression and URL Impression tables (native).
3. The techeo-site-data sheet: `scorecard`, `leads_monthly` (one column block per named query in `monthly-export.sql`), `sla_weekly` (filled by `06`'s Monday job), `reconciliation`, `indexing`, `vitals_lab`, `discovery_summary` (`#below-the-seven`).
4. The techeo-aeo-prompt-log sheet.

Stripe and Supabase are never connected directly.

| Page | Charts | Sources |
|---|---|---|
| 1 · Scorecard | Seven tiles (month, window to date, target as text); a 13-month table with status | 3 |
| 2 · Leads | Counted submissions by form by week (`submissions_by_form_week`; a table under 20 a month, then a stacked bar); outcome mix (`qualify_outcome_mix`); `lead_channel` by form (`lead_channel`); the `heard_from` × derived-channel pivot (`heard_from_pivot`); reservation queue size and oldest age (`reservation_queue`) | 3 |
| 3 · Speed to lead | Weekly SLA compliance, bars with a 95% line labeled "Target"; median minutes to first dial; misses by lead id | 3 |
| 4 · Behavior (diagnostic) | Sessions by Techeo channel; landing page × `page_fragment`; `cta_id` × `cta_position` × `section_anchor`; homepage anchor reach in page order; `faq_open` by `faq_id`; `nav_click`; `page_not_found` by path and referrer | 1 |
| 5 · Forms and checkout (diagnostic) | Start → submit → success per form, with `form_error` by type and fields; median `form_seconds`; `begin_checkout` → `purchase` → `checkout_return`, beside the Stripe count | 1, 3 |
| 6 · Search (diagnostic) | Brand position and CTR by month; clicks and impressions by page; indexed-count history | 2, 3 |
| 7 · Answers and performance (diagnostic) | Naming and citing by assistant; open errors; `/llms.txt` fetches; `web_vitals` share `within` by metric × `content_group`, with sample counts; lab medians | 4, 1, 3 |

**Done when:** every chart renders from live sources with no edits beyond the monthly sheet pastes, and pages 1–3 use no GA4 data.

## Tracking QA {#qa}

### Pre-launch: Mon Nov 16 – Thu Nov 19, 2026

Production is up behind Cloudflare Access with live GA4 (`06` #launch). Anything that submits a form runs on the QA previews (`analytics-qa/*` in WAITLIST, `rehearsal-open` in OPEN), which use staging Supabase, the preview email allowlist, and Stripe test mode. A real submission on production would reach the receptionist.

| # | Check | Pass |
|---|---|---|
| P1 | Every `#ga4` setting matches; screenshots filed | All match |
| P2 | Custom definitions, key events, "Techeo channels," unwanted referrals, redaction saved | All present |
| P3 | Internal filter Testing, developer filter Active; founder's browsers flagged; office IPs entered | All true |
| P4 | **DebugView walkthrough** with `#ga-debug`: every event once, per the per-form table, on the QA previews; on production, every event up to `form_submit` and `form_error`. Each arrives once, with its listed and shared parameters and only allowed values. | Every registry event in this build (26 when `faq_open` and `web_vitals` both ship) |
| P5 | **Test conversions** on the QA preview: reserve, teardown, and calculator-email forms from `@techeo.com` addresses | One success event each; a reload sends nothing |
| P6 | **Checkout round trip** (QA property): qualify → `begin_checkout` → card 4242 → `purchase` with a hashed id and `ignore_referrer = true`; a Stripe cancel → `checkout_return`; an ACH test account → one `purchase` | Pass |
| P7 | **No PII:** the CI PII test passes; no form value in DebugView; no `session_id` in the purchase page's `page_location` | Zero hits |
| P8a | **GPC on:** no request to `googletagmanager.com` or `google-analytics.com`; only `analytics-forms` loads, and only on form pages (`#tag-loading` step 1) | Zero Google requests |
| P8b | **Do Not Track on** (`10` #banner), same check | Zero Google requests |
| P9 | **Consent:** Tag Assistant shows ad signals denied, analytics granted | Match |
| P10 | **Bots:** a production Lighthouse run carries `traffic_type = internal` | Pass |
| P11 | **CSP:** no GA4 violations in `06`'s digest | Zero |
| P12 | **Search:** GSC and Bing verified (`07` L0.6); GA4 ↔ Search Console linked | Both |

**Launch day, Fri Nov 20:** once the Access application is deleted:

1. Set the internal filter to **Active**.
2. Submit `https://techeo.com/sitemap-index.xml` in Search Console and in Bing Webmaster Tools (`02` #sitemap; `06` #launch). Record it as `07` L5 and L6.
3. Confirm Realtime shows no founder session over 30 minutes of normal browsing.

### Monthly, in the close (about 30 minutes beyond the reconciliation)

1. Reconciliation steps 1–6.
2. **Event inventory:** only registry names, plus the automatic `first_visit`, `session_start`, and `user_engagement`.
3. **PII scan:** a free-form exploration of `not_found_path`, `error_fields`, `link_target`, page location, and page referrer, searched for `@` and for runs of seven or more digits. Zero hits; otherwise fix the leak and tell `10` the same day.
4. **`(not set)`** under 5% for `section_anchor` and `cta_position` on `cta_click`. More means a component lost its attributes.
5. **UTM hygiene:** every GA4 UTM value is in the builder sheet; "Unassigned" is empty or explained.
6. **Filters and flags:** both Active; IP ranges current; any new founder device flagged.
7. **Smoke test** with `#ga-debug`: a page view, a `cta_click`, a `form_start`, and a client-side `form_error` from an empty submit. Never submit a real form for QA; the reconciliation proves the success events.
8. **After each flip:** within an hour, events carry the new `season_state`.
9. **Quarterly:** remove anyone who has left from GA4, Search Console, Bing, Looker Studio, the Shared Drive, Supabase, ClickUp, Cal.com, Stripe, and the receptionist vendor's portal (`10` #security).
10. **State-law trigger:** GA4 Users over the last 12 months. If over 20,000, notify `10` the same week (`10` #state-laws).

**After any change** to an analytics chunk, the registry, or a component with `data-*` attributes: CI's taxonomy and PII tests pass, and P4 passes for the affected events on a preview.

## Consent and privacy settings for analytics {#consent}

`10` owns consent wording, the privacy page, retention, and legal analysis. This is what the setup does, and what `10` has decided.

**As configured:** the `#ga4` settings, with every ad and signals feature off. The first-party cookies are `_ga` and `_ga_<container-id>`, with a 2-year default expiry (verify). The site's own storage keys are listed in `#touch-fields`. No form value is ever sent, and GA4 doesn't load under GPC or Do Not Track. There is no banner, and D14 bans cookie walls.

**Decided in `10` #banner** (its answer to this section, due Mon Nov 16, 2026):

1. **No banner.** `10` finds Techeo below every state privacy law's thresholds (`10` #state-laws) and accepts the small residual risk under the California Invasion of Privacy Act. SB 690 passed the Legislature on Aug 28, 2026, and the Governor must act by Sep 30, 2026 (verify the outcome). `10` #banner holds the analysis, including what happens if it is vetoed. This document doesn't restate it.
2. **GPC and Do Not Track:** GA4 is not loaded under either signal (`#tag-loading` step 1; `#qa` P8a and P8b). Do Not Track follows `10`'s open question 2. If the founder declines it there, drop the DNT condition and P8b, and `10` swaps in its alternative sentence.
3. **Privacy-page disclosure:** `10` #banner item 4 drafts the text for `03` #legal's "Analytics and cookies" section. It covers:
   - GA4, and what it receives;
   - that no form entry, contact detail, or calculator number goes to Google (the calculator records only that it was used and that its next-step link was clicked);
   - the cookies and this site's storage keys (`#touch-fields`), their expiry, and retention;
   - how the site responds to GPC and Do Not Track signals, and that no third party collects personal information about visitors across sites through techeo.com (CalOPPA, Cal. Bus. & Prof. Code § 22575(b)(5)–(6); `10` #privacy-why);
   - Google as a service provider, with the disclosure Google Analytics' terms require (verify the clause).
4. **Data-subject requests.** GA4 holds no identifier linked to a name, so `06`'s `dsr_export` and `dsr_erase` have nothing in GA4 to act on. `/privacy` says so.
5. **GA4 retention:** 14 months, accepted.

**Still open with `10`** (`#dependencies`): the storage keys in `10` #cookies, whether capturing the landing touch before the GPC and DNT check is acceptable, and a retention period for `aeo-captures`.

## Dependencies on other documents {#dependencies}

| To | Request | Needed by |
|---|---|---|
| `06` | On `app.submissions`, from `server/sla.ts` and `08` #sla, set only for eligible events: `sla_window` (`business` · `after_hours`), `sla_due_at`, and `promise_due_at` (the live public promise) | Nov 16, 2026 |
| `06` | Accept and validate the `touch_first` and `touch_last` hidden fields (`#touch-fields`) into `leads.first_touch` and `last_touch` | Build |
| `06` | GA4 on for `analytics-qa/*` and `rehearsal-open` previews only, with the QA property's ID | Before Jan 29, 2027 |
| `06` | `gtag.js` injected by `analytics.ts`; `<html>` attributes; taxonomy and PII tests; the Lighthouse marker. Three post-load budget lines with `size-limit` entries: `analytics-interact` ≤1.5 KB, `analytics-forms` ≤1 KB, `analytics-thanks` ≤1 KB (`#tag-loading`; the cut order applies if declined) | Build, by Nov 6 |
| `06` | **Weekly SLA job** in `weekly.yml` (`#sources-of-truth`, **Automation**), at 06:00 [TZ] each Monday: a read-only Postgres role, a Google service account limited to techeo-site-data, and the Resend summary. Plus the one-off business-hours run at 06:00 [TZ] on Sat Jan 30, 2027 (email only) | Live by Fri Nov 6, 2026; the Saturday run scheduled by Fri Jan 22, 2027 |
| `06` | The three additions `08` #dependencies requests, with the columns `monthly-export.sql` reads (`#sources-of-truth`): `app.reservation_openings`, one row per reservation per opening held (`reservation_id`, `opening_date`, and that opening's own `contact_due_at` and `contacted_at`, unique on reservation and opening), for `o7_o8`; `submissions.channel`, with `outbound` on an outbound target's record, for `lead_channel` and `retainers`; and `leads.parent_lead_id`, for both | Before Jan 29, 2027 |
| `06` | `leads.heard_from` check constraint adds `owner_community`, if open question 3 is accepted. (`audit_qualifications.outcome` already matches `08`: `not_residential` in, `market_taken` gone.) | Nov 16, 2026 |
| `05` · `06` · `08` | The `#implementation` attributes, including `data-cta="calculator_next"` on every calculator result CTA; `techeo:form` events from `form-enhance.ts` | Build |
| `03` | Frozen `faq_id`s for the `/audit` and `/teardown` FAQ items, following `04` #scope's `faq-<page>-<slug>`: `faq-audit-<slug>` and `faq-teardown-<slug>`. None may repeat a homepage id (`faq-audit-access` and `faq-audit-refund` are taken on `/`). | Copy freeze |
| `03` | `heard_from` option "An online owner group or forum" (`owner_community`), if open question 3 is accepted | Copy freeze |
| `08` | Flag staff-intake leads `entered_by_staff`; store the `seed` tag where the export can read it; list each month's self-shop form emails in the shop task; add `owner_community` to `heard_from` (open question 3) | Nov 16, 2026 |
| `10` | List the storage keys in `#touch-fields` in `10` #cookies and `/privacy`. Confirm or reject capturing the landing touch before the GPC and DNT check. Set a retention period for `aeo-captures` in `10` #retention. | Nov 16, 2026 |
| `11` | Hours (assumptions): 6–8 build hours for GA4, the link, and Looker Studio; 8–12 build hours for the analytics chunks, the registry, and tests; 2–3 build hours for the weekly SLA job; about 90–120 founder minutes a month for the close (reconciliation 30, tracking QA 30, scorecard and search, vitals, and AEO rows 30–60), plus about 15 minutes each Friday for the SLA report. New cash cost: $0. | Schedule |

## Open questions for the founder {#open-questions}

1. **Consent posture.** *Decided in `10` #banner:* no banner, and GA4 not loaded under GPC or Do Not Track. The one choice left is `10`'s open question 2 (honor Do Not Track like GPC; *recommended default:* yes). Revisit only if SB 690 is vetoed or a demand letter arrives.
2. **Real-user performance data.** It adds about 2 KB of post-load JavaScript, on its own line in `06`'s budget. *Recommended default:* yes, as a separate post-load chunk; if the line is withdrawn, use lab data only.
3. **Owner communities in "How did you hear about us?"** A Facebook-group owner must now pick "A peer or a network I belong to" or "Other," so channel 3 is invisible. *Recommended default:* add "An online owner group or forum" (`owner_community`) before launch, while it is a one-line change with no data behind it: `08`'s field, `06`'s check constraint, and `03`'s option label.
4. **Who runs the monthly close.** *Recommended default:* the founder, about 90–120 minutes by the 10th (an assumption: reconciliation 30, tracking QA 30, the scorecard and the search, vitals, and AEO rows 30–60), plus about 15 minutes each Friday for the SLA report, until the scorer is hired (`techeo.financials` #hiring). The reconciliation then moves to the scorer; the founder keeps the headline and the three lines.
5. **Receptionist traffic.** *Recommended default:* ask the vendor for its egress IP ranges at signing; if it refuses, note the noise in the reconciliation line.
6. **Seeds and self-shop forms.** *Recommended default:* excluded from lead counts and GA4, included in SLA compliance. They test the people, not the demand.
7. **Automating the monthly Supabase export.** The weekly SLA query is already automated, because `08` needs it unattended before launch. *Recommended default:* run the monthly queries by hand until forms pass 50 counted submissions a month or v2 ships. Then `06` extends the weekly job's pattern to a monthly GitHub Action that writes to the same sheet.
8. **GA4 retention.** *Recommended default:* 14 months, so each spring can be compared with the last; `10` #banner has accepted it. Choose 2 months only if `10` later wants the smallest footprint.
9. **Excluding the Homets office network.** *Recommended default:* yes. The founder's work-hour visits and Homets staff are not prospects.
10. **Codes or names in vendor and podcast UTMs.** *Recommended default:* codes, so no vendor's name appears in a link a prospect reads.
