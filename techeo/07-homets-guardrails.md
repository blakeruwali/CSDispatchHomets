---
id: techeo.guardrails
title: Homets Guardrails — Time, the Gate, the Kill Switch
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [guardrails, time-budget, conflict-of-interest, seasonality, kill-switch, gate]
related: [techeo.financials, techeo.gtm, techeo.legal, techeo.metrics]
order: 7
---

# Homets Guardrails — Time, the Gate, the Kill Switch

**The governing principle: Techeo may not be funded by borrowing from Homets — not in cash, not in staff, and above all not in founder attention. Techeo is additive or it does not happen.**

This is the document that decides whether Techeo is a good idea. Every other document here describes upside. This one describes the only way the upside gets destroyed.

## Founder time budget {#time-budget}

| Phase | Months | Techeo hours / week | Overlap with work Homets needs anyway | Risk |
|---|---|---|---|---|
| 1 — Extract & package | Oct–Nov 2026 | 10–12 | **~85%** | Low |
| 2 — Quiet period | Dec–Jan | 3–5 | Low | Low |
| 3 — Sell design partners | Feb–Apr 2027 | 14–18 | ~20% | **Real** |
| 4 — Deliver 3 clients | May–Sep 2027 | 20–26 | ~10% | **High** |
| 5 — Scale past 3 clients | Oct 2027+ | 30+ | ~0% | **Requires the gate cleared** |

**Phase 1 is not a time conflict.** The remaining two-thirds of the Homets SOP — Dispatch (0 of ~24 docs), Sales (0 of ~22), Reference/KB (0 of ~30), Install, Plumbing, Field, HR — is simultaneously the work that makes Homets run without you *and* Techeo's entire product inventory. Those are the same hours with two payoffs. Do this work regardless of whether Techeo ever sells anything.

**Phase 3 is where the conflict starts,** and it is the bad kind: sales calls land in business hours, competing directly with Homets escalations.

**Hard cap: 26 Techeo hours per week until the gate is cleared.** Written here so that exceeding it is a visible decision rather than a drift.

## Protected Homets blocks {#protected}

Untouchable by Techeo, no exceptions:

- Weekday mornings until 10:00 — the dispatch board and overnight escalations
- The weekly CSM 1:1 and call-scoring session — this is the instrument the kill switch depends on
- Monday morning and Friday afternoon — week open and week close
- Any day during a heat wave, hard freeze, or holiday-weekend coverage gap

Techeo work goes in afternoons, evenings, and shoulder-season blocks. If a Techeo commitment cannot fit there, it is not a scheduling problem — it is a signal that the gate needs clearing first.

## The Gate {#gate}

> **No Techeo client #4 until a named person other than the founder owns Homets' daily operations.**

Not "until things calm down." Not "until I've systematised more." A person, in a seat, with the authority to run the day. Funded by Techeo revenue, per hire #1 in `06-financial-model.md`.

Three clients is the ceiling of what one distracted owner can deliver without the quality collapse that ends the whole venture. The arithmetic is in `04-delivery.md`: at 16–20 founder hours per Demand Engine client per month, client four crosses 26 hours a week before any selling or admin.

**Also gated behind the same hire:** the Aggressive scenario in `06`, any trade show commitment, and any client outside the ICP.

## The Kill Switch {#kill-switch}

The instrument already exists. `content/sops/csm/kpis.md` defines seven numbers reviewed weekly in the 1:1. No new tracking is required — which is exactly why this control is credible.

**Tripwires.** Two consecutive months missing any of these:

| Metric | Target |
|---|---|
| Answer rate (inbound) | ≥ 90% within SLA |
| LSA answer rate | ≥ 95% |
| Booking rate (qualified callers) | ≥ 70% |
| Membership pitch rate (non-members) | ≥ 60% |
| Marketplace leads never touched | **0** |
| Marketplace first touch | ≤ SLA |

**Consequence of a trip:** Techeo enters new-business pause. Existing clients continue to be served — we do not break commitments to fix our own overreach — but no outbound, no audits, no discovery calls, no new signatures, until the number recovers for a full month.

**Who enforces it.** This is the part that usually fails. *A tripwire the founder enforces on himself is not a control.* It needs to sit with someone else:

1. The CS manager publishes the seven numbers weekly to a shared location neither party can quietly edit.
2. A **named third party** — bookkeeper, advisor, or spouse — holds standing authority to declare the pause. Write the actual name in this document before the first Techeo dollar is invoiced.
3. The monthly close reports Techeo hours worked alongside the Homets KPIs, in the same document. Hours and outcomes reviewed together or the connection stays invisible.

> Named enforcer: **`____________________`** *(fill this in — the document is not finished until it has a name in it)*

## What a slip actually costs {#cost-of-slip}

Run this with the real revenue figure; the shape is what matters.

```
Homets EBITDA lost   = revenue × % slip × gross margin      (overhead is fixed,
                                                             so nearly all of the
                                                             gross margin drops through)
Enterprise value lost = EBITDA lost × 4–8×
Techeo value created  = Techeo contribution × 1–3×
```

Worked example at a **placeholder** $4M of Homets revenue and 45% gross margin:

| | |
|---|---|
| A 5% revenue slip | $200,000 revenue |
| EBITDA effect | ~$90,000 |
| Enterprise value effect at 6× | **~$540,000** |
| Techeo Base-case year 1 contribution | ~$60,000 |
| Techeo value created at 2× | **~$120,000** |

**A 5% slip at Homets costs roughly four times what a good first year of Techeo creates.** Not because Techeo is a bad business — because it is a 2× business attached to a 6× business, and attention flows the wrong way by default.

Replace the placeholder with the real number and keep the result somewhere visible.

## Seasonality calendar {#seasonality}

An agency serving HVAC companies does **not** smooth seasonality — it compounds it. Our clients share our demand curve, and they shop for marketing while ramping into the season we are also ramping into.

| Month | Homets load | Techeo allowance |
|---|---|---|
| Oct 2026 | Shoulder | **Build.** 12 hrs/wk |
| Nov | Shoulder | **Build.** 12 hrs/wk |
| Dec | Heating ramp + holidays | Minimal. Admin and legal only, 4 hrs/wk |
| Jan 2027 | Heating peak | Minimal. 4 hrs/wk |
| Feb | Easing | **Sell.** 14 hrs/wk |
| Mar | Shoulder | **Sell + onboard.** 18 hrs/wk |
| Apr | Cooling ramp | **Sell + onboard.** 18 hrs/wk |
| May | Cooling ramp | Deliver only. No new onboarding. |
| Jun–Aug | Cooling peak | Maintenance only. No sales, no onboarding. |
| Sep | Shoulder | **Sell.** Resume. |

Two rules fall out of this table:

- **Never onboard a client in June, July, August, or late December.** Onboarding is the most founder-intensive phase of any engagement and those are the months Homets cannot spare.
- **A 90-day plan starting today would put the selling phase in December and January** — the single worst window in the year. The plan in `09-90-day-plan.md` is deliberately restructured around this rather than counting 90 days from the calendar.

## Conflict of interest policy {#coi}

We own an HVAC company and sell to HVAC companies. That is a genuine conflict and it gets managed in writing, not with reassurance.

1. **Exclusion zone.** No client in Homets' DMA, plus a stated radius. *Set the number before the first sales call: `____ miles`.*
2. **Market exclusivity.** One client per market per trade, granted in the MSA. See `05-go-to-market.md`.
3. **Disclose unprompted.** On the first call, before they ask: "I own an HVAC company in {market}. Here is why that is good for you, and here is the exclusion zone and exclusivity clause that makes sure it never works against you."
4. **Data firewall.** Client data never informs Homets' pricing, recruiting, market entry, or competitive decisions. State this to clients and mean it. If Homets ever expands toward a client's market, the client is told before it happens and released from the contract without penalty.
5. **No poaching, ever, in either direction.** Written into the MSA as a mutual non-solicit covering technicians and office staff. A contractor's deepest fear about hiring a competitor-adjacent vendor is losing techs. Closing that door in writing converts the objection into a trust asset.
6. **No shared resources.** No Homets employee performs Techeo work without a separate written agreement and separate pay. No shared card, no shared bank account, no shared subscriptions.
7. **Client ServiceTitan access is used only for that client's engagement.** Never for benchmarking, never for Homets.

## Review {#review}

This document is reviewed monthly, before the Techeo monthly close, and it is the first item on the agenda rather than the last. The gate, the cap, and the tripwires are re-read out loud at that review. Controls that are not re-read stop being controls.
