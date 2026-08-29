---
name: estimate-builder
description: Build customer estimates fast and push them to ServiceTitan — repair quotes, replacement Good/Better/Best packages, and the day's estimate needs from the technician's board. Use whenever asked to create, price, revise, or push an estimate or quote, or to work through which of today's jobs need estimates.
---

# Estimate builder → ServiceTitan

Turn a job or a technician's diagnosis into a priced estimate in
ServiceTitan, fast, without inventing a number. ServiceTitan is the system
of record — the estimate is not done until it exists there.

## The daily flow

1. **Pull today's board** (`homets-servicetitan` skill): appointments,
   job types, technician notes. Jobs that need an estimate: any diagnostic
   with a completed diagnosis and no open estimate, any replacement
   opportunity a tech flagged, any expired/stale open estimate worth
   refreshing.
2. **Build each estimate** (rules below).
3. **Push to ServiceTitan** (paths below), then confirm the estimate id
   landed and tell the user what was created vs updated.
4. **Queue the follow-up** per `content/sops/sales/follow-up.md` — an
   estimate without a follow-up plan is a lead going cold.

## Pricing rules (non-negotiable)

- **Every number comes from a source**: the ServiceTitan pricebook (the
  authority; `hvac-catalog` mirrors it), `content/pricing/tokens.md` for
  operating constants, `content/reference/install-pricing.md` for the
  replacement framework. Never price from memory; if a price can't be
  sourced, name the gap and stop.
- Labor: `labor_residential_hourly` / `labor_commercial_hourly` tokens.
- Replacement estimates are **free** (`estimate_install`); a diagnostic
  already paid is credited in full on an approved repair or replacement.
- Deposits and stages on accepted work: `deposit_rule` ($1,000 or 10%,
  whichever is greater) and the `payment_stage_*` schedule — quote them
  from tokens, current values.
- Repairs carry the 1-year parts & labor warranty; installs 1-year labor +
  manufacturer terms (`content/reference/guarantees.md`).

## Replacement estimates: Good / Better / Best

Follow `content/sops/sales/good-better-best.md` — three real, complete
options, never a decoy. Membership (Home+) goes inside the package
(`content/sops/sales/membership.md`), financing framed per
`content/sops/sales/financing.md`. No manufactured urgency, ever (S1).
A compressor, heat exchanger, coil, or tank must have had the D1
second-opinion call before a replacement estimate is built on its
condemnation.

## Push paths to ServiceTitan

**Read `references/servicetitan-api.md` before any push** — it has the
verified op catalog and exact call shapes (estimate_create /
add_items / replace_items / sell, plus the lookup ops), including the
trap that `estimate_update` silently ignores line items.

Pick the path that matches where the estimate originates:

1. **Comfort-architect recommendations** — `integrated-home-hub`'s
   `architect-st-push-estimate` edge function: POST
   `{ "customer_id": "<architect uuid>" }` with a user JWT or service
   role. It builds the three-line payload (heating equipment, cooling
   equipment, installation labor), POSTs via `st-api`, and re-pushes as a
   PATCH so ST's Open Estimates stays clean. Requires the customer +
   system recommendation to exist in the architect DB.
2. **Direct ST estimates** (repairs, ad-hoc quotes) — the `st-api`
   edge function in `integrated-home-hub` proxies the ServiceTitan
   sales/v2 API (estimates CRUD with pricebook SKU line items), or the
   CLI from the `homets-servicetitan` skill if it exposes estimate
   creation. Line items reference real pricebook SKUs — look them up,
   don't invent SKU ids.
3. **No credentials in hand?** Draft the complete estimate (line items,
   SKUs, prices, totals, option structure) as the deliverable and say
   exactly which push path and which missing access is needed — never
   fake a push.

## After the push

- Verify: re-fetch the estimate (or the function's response) and report
  the ST estimate id, action (created/updated), and total.
- Customer-facing delivery (email/SMS cover note) follows the
  `customer-comms` skill; proposal presentation follows `sales-support`.
- Log nothing customer-related anywhere but ServiceTitan — no shadow
  copies in Supabase tables or spreadsheets.
