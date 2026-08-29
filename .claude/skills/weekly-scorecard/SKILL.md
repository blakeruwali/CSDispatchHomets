---
name: weekly-scorecard
description: Build the Homets weekly business scorecard — revenue vs plan, sales pipeline, lead-channel performance against SLAs, membership growth, and reviews — as a polished artifact the owner can share. Use when asked for a weekly review, scorecard, business report, "how did we do this week", or month-over-month performance.
---

# Weekly scorecard

One page, real numbers, honest gaps. The daily brief (`daily-ops-brief`
skill) is about *today's actions*; the scorecard is about *whether the
business is on plan* — week over week, against stated targets.

## Targets to score against

From the investor plan (`homets-pitch-deck`, verify before quoting to
outsiders): the roadmap runs toward $200K/mo and then $400K/mo revenue at
45%+ gross margin; traction baseline was ~$650K run rate, $4.5K average
ticket, 66 five-star reviews. If the owner has set newer targets, those
win — ask once, then reuse.

## Pull real data (in this order of preference)

1. **ServiceTitan** (`homets-servicetitan` skill): completed-job revenue
   for the week, jobs by type and business unit, average ticket, open
   estimates (count, value, age buckets), sold estimates and close rate,
   memberships sold/active.
2. **Existing pipelines**: homets-home-tech has a
   `servicetitan-daily-revenue-poll` edge function and hub has
   `servicetitan-analytics` — their Supabase tables may already hold the
   series; prefer reading an existing series over re-deriving it.
3. **Channel data**: lead counts and response times per channel (Angi,
   Thumbtack, Yelp, LSA, web, phone, SMS) versus the SLA tokens
   (marketplace/web 5 min, LSA 15 min, voicemail 30 min, SMS 2 min).
4. **Reviews**: Google review count/rating (home-tech's reviews sync).

If a source is unreachable, the section says "no data — needs X", never
an estimated number presented as real.

## The page (in this order)

1. **Headline strip**: week revenue vs target, sold vs presented, average
   ticket, memberships net-new — each with week-over-week delta.
2. **Pipeline**: open estimate value by age (fresh / 1–2wk / stale);
   stale ones named with next action per `sop.sales.follow-up`.
3. **Channels**: leads, booked %, and SLA hit-rate per channel; call out
   the most expensive miss of the week.
4. **Membership**: active count, new, cancelled, renewals due in 30 days.
5. **The one thing**: the single highest-leverage recommendation for next
   week, grounded in the numbers above.

## Rendering

Load the `dataviz` skill before charting; publish as an Artifact
(consistent title week to week, e.g. "Homets Weekly Scorecard", with the
week in the page header — republish the same artifact URL rather than
minting a new page each week when updating the current week). Keep every
figure's source named in a footnote. If the owner wants it recurring,
set up a scheduled run (send_later / Routine) rather than relying on
memory.
