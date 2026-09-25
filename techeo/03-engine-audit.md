---
id: techeo.audit
title: The Engine Audit — Product Specification
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [audit, diagnostic, sales-tool, mystery-shop, scoring]
related: [techeo.offers, techeo.delivery, techeo.gtm]
order: 3
---

# The Engine Audit — Product Specification

**This is the most important thing to build first. It is the sales tool, the qualifier, the scope document and the first invoice, and it is the only Techeo product that can be delivered before the company has a single client.**

Build the audit before the website. A website with no audit is a brochure; an audit with no website still closes business.

## Commercials {#commercials}

| | |
|---|---|
| Price | $1,500, paid before work starts |
| Turnaround | 7 business days from access granted |
| Effort | ~8 hours once templated (first one: ~20 hours) |
| Contribution | ~$1,300 |
| Conversion target | ≥50% of audits convert to a retainer within 30 days |

If conversion runs below 35% across the first six audits, the problem is qualification, not the audit. Tighten the ICP filter before changing the deliverable.

## Access required {#inputs}

Request all of it in one email at kickoff; a partial grant delays the clock and the client should know that.

1. ServiceTitan — read-only user, or a CSV export of 90 days of calls, jobs, revenue and lead source
2. Google Business Profile — manager access
3. Google Ads + Local Services Ads — read access
4. Google Analytics / Search Console — read access
5. Call recordings for the last 30 days, **or** written consent for us to shop the line
6. Their current lead-source list and monthly spend per source
7. The name of the person who answers the phone most often

## The five workstreams {#workstreams}

### 1. Booking Engine (weight 40%)

The centerpiece. Everything else in the audit is table stakes that any agency could produce; this is the part nobody else can.

**Mystery shop: 5 calls across 4 scenarios, at deliberately awkward hours.**

| # | Scenario | Timing | What it tests |
|---|---|---|---|
| 1 | No cooling, upstairs only, homeowner | Tuesday 09:30 | Baseline handling, diagnostic fee quoting |
| 2 | No heat, urgent, has an infant at home | Weekday 17:45 | Urgency triage, after-hours posture |
| 3 | Price shopper — "what do you charge for a tune-up?" | Weekday 11:00 | Whether they can hold a price and still book |
| 4 | Water heater leaking now | Saturday 08:00 | Weekend coverage, emergency path |
| 5 | Web form submission, no call | Any weekday | Speed to lead — measured to the minute |

Score each against a rubric adapted from `content/governance/qa-rubric-csm.md`. Pull from their data: answer rate, average ring time to answer, abandoned call rate, booking rate on qualified callers, speed-to-lead actuals by channel, membership attach rate, count of marketplace leads never touched.

The single most damaging number in most audits is **marketplace leads never touched** — leads already paid for, never called. It is a number the owner has usually never seen, and it reframes the whole conversation from marketing to money.

### 2. Search / SEO (weight 20%)

GBP completeness, category selection, review count and velocity versus the three top local competitors, local pack rank across 15 commercial-intent queries in their metro, service-area page coverage against the towns they actually serve, technical crawl (speed, mobile, schema, indexation), and citation consistency.

### 3. Answer / AEO (weight 15%)

Run a fixed set of 12 prompts through the major AI assistants — "best HVAC company in {city}", "who should I call for emergency AC repair in {city}", "how much does a furnace replacement cost in {city}" — and record whether the client is named, which competitors are, and what sources those answers cite. Then check the signals that drive inclusion: entity consistency, review corpus, structured data, and whether their content answers the question directly or buries it under a sales page.

This section sells the future. Most owners have not looked, and seeing a competitor named while they are absent is the most motivating slide in the deck.

### 4. Ads Engine (weight 15%)

LSA position and budget exhaustion timing, LSA lead-rating hygiene (manual disputes ended in 2024; bad leads that are never rated in the Leads tab never get the second review that can credit them), Google Ads search-term waste, conversion tracking integrity — does a "conversion" mean a booked job or a page view — budget pacing against their own seasonality, and marketplace spend versus booked revenue per source.

### 5. Money (weight 10%)

Cost per booked job by channel, revenue per booked call, membership attach rate, and the seasonality curve of their spend against their demand. This section is where the Gap Statement gets assembled.

## Scoring {#scoring}

Score each engine 0–100, weight as above, and present one composite **Engine Score**. Scores are a communication device, not science — their job is to make the weakest engine undeniable and to give a number to improve at the 90-day review.

| Composite | Verdict | Recommended entry |
|---|---|---|
| 0–40 | The phone is the problem | Booking Sprint. Do not discuss ads. |
| 41–65 | Leaking in two engines | Booking Sprint → Demand Engine |
| 66–85 | Solid; demand-constrained | Demand Engine directly |
| 86–100 | Well run | Decline politely, refer out, ask for a referral |

Declining the 86+ client is not lost revenue. It is the single most credible thing we can do, and they talk.

## The Gap Statement {#gap}

**One number, on page 2: annualized revenue currently leaking.** Everything else in the document supports it.

Build it only from their own data, and show every step:

```
  (qualified calls × (0.70 − current booking rate) × their avg revenue per booked job)
+ (marketplace leads never touched × their marketplace close rate × avg revenue)
+ (LSA budget exhausted before close of business × days × avg revenue per LSA job)
+ (documented Google Ads search-term waste)
= annualized gap
```

Rules, non-negotiable:

- **Every input is theirs, not ours.** No industry benchmarks anywhere in this document.
- **Round down. Always.** A gap of $340k is presented as $300k. Credibility beats drama, and the FTC substantiation point in `08` applies to anything we put in writing.
- **Show the arithmetic.** An owner who can check the maths believes the maths.
- If the honest gap is small, say so and decline the engagement. See the 86+ row above.

## Deliverable {#deliverable}

12–18 pages, PDF, plus a recorded 30-minute readout call. Fixed structure:

1. Engine Score and the four sub-scores — one page
2. **The Gap Statement** with arithmetic — one page
3. Booking Engine: the five calls, transcribed excerpts, scored, with the two worst moments quoted verbatim
4. Search: rank table and the competitor comparison
5. Answer: the 12 prompts, who got named
6. Ads: waste table
7. Money: cost per booked job by channel
8. The 90-day priority list — exactly three items, in order
9. What Techeo would do, which rung it corresponds to, and what it costs

Section 3 is what sells. A recording of their own phone failing, timestamped and scored, ends the argument that their team is fine.

## Build order {#build-order}

1. The scoring rubric, adapted from `content/governance/qa-rubric-csm.md`
2. The five mystery-shop scenario scripts, verbatim
3. The Gap Statement calculator as a spreadsheet, so it is arithmetic and not judgment
4. The PDF template
5. **Run the whole thing on Homets.** Score our own phones cold. Whatever embarrasses us is the part of the audit that works.
6. Run it free on two friendly non-competing contractors from the network. Fix what confused them.
7. Then charge for it.

Step 5 is not optional. An audit that has never been pointed at its author is a sales document, not a diagnostic.
