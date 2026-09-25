---
id: techeo.financials
title: Financial Model — Costs, Unit Economics, Hiring Triggers
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [financials, unit-economics, hiring, scenarios, valuation, risk]
related: [techeo.offers, techeo.delivery, techeo.guardrails]
order: 6
---

# Financial Model — Costs, Unit Economics, Hiring Triggers

**Techeo breaks even at one client. That is the good news and it is also the trap: because break-even is trivial, nothing in the numbers will stop you from taking on client five. Only the gate in `07-homets-guardrails.md` does that.**

## Startup cost {#startup}

| Item | Low | High | Notes |
|---|---|---|---|
| LLC formation + registered agent | $300 | $800 | Home state |
| Operating agreement | $500 | $1,500 | Template + counsel review |
| Trademark — search and file, class 35 | $350 | $2,500 | DIY filing fee vs attorney-handled |
| Professional liability (E&O) | $600 | $1,500 | Annual |
| General liability | $400 | $800 | Annual |
| Cyber liability | $500 | $1,200 | We touch client ad accounts and customer data |
| MSA + SOW drafted / reviewed | $1,500 | $3,000 | Do not skip. See `08`. |
| Bookkeeping setup + 3 months | $600 | $1,200 | Separate books from day one |
| Tool stack, 3 months | $500 | $1,200 | Per `04-delivery.md` |
| Website | $0 | $0 | **Superseded — see note below the table** |
| **Total** | **$5,250** | **$13,700** | Plan on **$9,000** |

Deliberately absent: office, branding agency, paid advertising, CRM, agency platform, any staff.

**Correction, Sep 25, 2026: the website line above is wrong.** It assumed the founder would build the site, which the Phase 1 hours cap in `07-homets-guardrails.md` rules out. The website plan costs it properly (`website/11-build-and-launch.md` #budget):

| Website option | Pre-revenue (through Jan 31, 2027) | Monthly from Feb 1, 2027 |
|---|---|---|
| **Lean v1** — recommended (`website/00-website-brief.md` D16) | ~$4,500 – $7,500 (estimate; get bids) | ~$350 – $800, mostly the receptionist |
| Full spec as written in `website/` | $20,920 at plan ($11,583 – $39,788) | ~$1,274 at plan |

With the lean v1, the startup total becomes roughly **$9,750 – $21,200, plan ~$15,000**. With the full spec it is ~$29,900 at plan — about a third of the Base scenario's year-one revenue before the first sale. Fund either from a documented owner capital contribution to Techeo LLC, never from Homets (#cash rule 4). The totals row above is the original estimate and excludes the website.

## Unit economics {#unit-economics}

Direct cost excludes founder time, which is not a cash cost early but is the binding constraint. Both views are shown because using only the first is how agency owners end up working 70-hour weeks at a "90% margin."

| | Booking Sprint | Demand Engine |
|---|---|---|
| Monthly revenue | $3,500 | $6,500 |
| Contract scorer (~8 hrs @ $22) | $176 | $176 |
| Contract SEO/content (~10 hrs @ $35) | — | $350 |
| Attributable tools | $50 | $75 |
| **Direct cost** | **$226** | **$601** |
| **Cash gross margin** | **94%** | **91%** |
| Founder hours / month | 8–10 | 16–20 |
| Founder time imputed @ $100/hr | $900 | $1,800 |
| **Margin after imputed founder time** | **68%** | **63%** |

The second-to-last row is the honest one. **Target ≥65% margin after imputing founder time at $100/hr** — when a client falls below it, either the price is wrong or the delivery is not templated.

**Break-even:** fixed monthly cost runs $1,200–1,800 (tools, bookkeeping, amortized insurance). Contribution from a single Booking Sprint client is ~$3,270. **One client covers the company.** Everything after that is either reserve, the Homets hire, or profit.

**Client acquisition cost:** with a 6–10 week cycle, ~6 founder hours of selling per closed client plus ~8 hours of audit delivery (which the client pays for). Cash CAC is near zero; time CAC is ~14 hours. In a business where hours are the scarce input, **time CAC is the number to manage**, not dollars.

## Twelve-month scenarios {#scenarios}

Oct 2026 – Sep 2027, following the seasonality plan in `07`: build Oct–Nov, quiet Dec–Jan, sell Feb–Apr.

| | Conservative | Base | Aggressive |
|---|---|---|---|
| Design partners signed by Apr | 2 | 3 | 3 |
| Full-price clients by Sep | 1 | 2 | 4 |
| Clients on Demand Engine | 0 | 1 | 2 |
| Audits sold (year) | 4 | 7 | 12 |
| **Exit MRR (Sep 2027)** | **$7,000** | **$14,750** | **$30,500** |
| **Year-1 revenue** | **~$45k** | **~$90k** | **~$155k** |
| Peak founder hours / week | 18 | 26 | 40+ |
| First Techeo hire | none | month 9 | month 6 |
| Homets ops hire required? | no | borderline | **yes, by month 6** |

**Read the last two rows before the revenue rows.** The Aggressive column is not a sales achievement, it is a staffing decision made nine months earlier. Forty founder hours a week on Techeo is incompatible with running Homets, so Aggressive is only reachable if a Homets operations owner is in seat by month 6 — a $70–95k commitment made *before* the revenue that justifies it. That is the real fork in this plan, and it is a capital allocation question, not a hustle question.

The Base column is the plan of record.

## Hiring plan and triggers {#hiring}

In this order. The order is the point.

| # | Role | Trigger | Cost | Unlocks |
|---|---|---|---|---|
| 1 | **Homets operations owner** (Service Manager / GM) | **Before Techeo client #4** | $70–95k + incentive | Everything. This is the gate. |
| 2 | Part-time call scorer (Techeo) | 3 active clients | $20–25/hr, ~10 hrs/wk | ~40% of recurring founder hours |
| 3 | SEO / content contractor | 4 Demand Engine clients | $35–50/hr, project | Search + Answer delivery |
| 4 | Account manager | 8 clients, or >6 client calls/week | $60–75k | Founder exits delivery |
| 5 | Paid media specialist | $40k/mo managed spend | $65–85k or agency partner | Ads at scale |

**Hire #1 is at Homets, not Techeo, and it is funded by Techeo's revenue.** This inverts the instinct. The natural move is to hire an agency person so Techeo can grow; the correct move is to buy back the founder's time at the business that is worth four times as much per dollar of profit. Techeo's first real job is to pay for its own permission to exist.

The cleanest framing: **Techeo's first $10–15k/mo of revenue is not profit. It is the salary of the person who replaces you at Homets.**

## Cash policy {#cash}

1. **Ad spend never touches Techeo's card or books.** Client accounts, client payment methods, always. This is cash-flow protection, liability protection, and the account-ownership promise all in one rule.
2. **Three months of operating expense in reserve before any hire.**
3. **No owner draw for the first six months.** Cash goes to reserve, then to hire #1.
4. **Techeo does not borrow from Homets.** If it needs capital, it is a documented loan with a rate and a term, executed between two entities — not a transfer. Anything else contaminates both sets of books and undoes the separation in `08`.
5. Monthly close by the 10th. Techeo's numbers get the same discipline as Homets' KPIs.

## The valuation constraint {#valuation}

| Asset | Typical multiple | Why |
|---|---|---|
| Residential HVAC service company | **4–8× EBITDA** | Recurring membership revenue, route density, asset base, active PE consolidation |
| Marketing agency | **1–3× EBITDA** | Key-person dependent, churn risk, no assets |
| Productized software / data | 3–8× ARR | Only if rung 4 becomes a real product |

**A dollar of EBITDA at Homets is worth two to four times a dollar of EBITDA at Techeo.** Three consequences that should shape decisions, not just be noted:

1. Any hour moved from Homets to Techeo destroys enterprise value unless Techeo's cash contribution exceeds the Homets EBITDA lost, multiplied by the multiple gap. The bar is higher than it feels.
2. **Home+ membership growth outranks Techeo on the priority list,** permanently. Recurring revenue is exactly what lifts the 4–8× toward the top of the range.
3. Techeo's most valuable outputs are probably *not* the retainers. They are rung 4 (attribution, which can carry a software multiple) and the operating intimacy with 20–40 contractors, which is acquisition deal flow nobody is pricing.

## Risk register {#risks}

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Homets performance slips while founder is distracted | High | Severe | The gate and kill switch in `07`. Non-negotiable. |
| One case study is not enough to close | High | Moderate | Design partner program; the audit proves competence on their data instead |
| Prospect sees Homets as a competitor | High | Moderate | Written market exclusivity + Homets exclusion zone, disclosed unprompted |
| Client staff will not implement the SOPs | Medium | High | Staff-commitment requirement at sale; decline without it |
| Founder becomes the delivery bottleneck | High | High | Templating rule in `04`; scorer hire at 3 clients |
| Seasonality compounds instead of smoothing | Certain | Moderate | Seasonality calendar in `07`; no onboarding in peak months |
| Call recording consent violation | Low | Severe | Per-state check before every teardown; notes-only default |
| Overstated case study numbers | Low | Severe | Round down, cite client data only, FTC substantiation rule in `08` |
| Techeo revenue never justifies the Homets hire | Medium | Moderate | Hire is triggered by client count, not hope; Conservative case still funds part of it |
