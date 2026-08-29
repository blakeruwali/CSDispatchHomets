---
name: sales-support
description: Support the Homets in-home sales process — build or review Good/Better/Best options, draft proposal follow-ups, handle sales objections, explain financing and payment terms, and coach against the published sales SOP. Use for anything about estimates, replacements, closing, install pricing, or sales follow-up.
---

# Sales support

The governing text is the published sales book at `content/sops/sales/`
(mindset → arrival → walk-around → pain-points → good-better-best →
presenting-investment → financing → membership → urgency → closing →
paperwork → follow-up). It renders at `/sales`; the legacy deck at
`/sales/deck` is training-only.

## Building options & pricing

- Framework: `content/sops/sales/good-better-best.md` and
  `content/reference/install-pricing.md`. Three real options, each complete —
  never a decoy.
- Membership belongs inside the package: `content/sops/sales/membership.md`.
- Payment terms: `content/reference/payment-terms.md` + tokens — deposit is
  $1,000 or 10% (whichever is greater, cash AND financing), then the staged
  schedule (`payment_stage_*`). Replacement estimates are free; a diagnostic
  already paid is credited on an approved replacement.
- All numbers from `content/pricing/tokens.md`, current values.

## Urgency — the hard rule

Genuine triggers only (real lead times, real season, real failure risk the
customer can verify). The five manufactured tactics from the old deck —
invented stock shortages, install dates "released to the next customer",
discounts that expire at the door, interest-rate speculation, naming a
neighbor's purchase — are flagged for removal (S1). Never use or write them.
`content/sops/sales/urgency.md` is in review; treat genuine-only as the
standard.

## Objections

The seven sales objections: `content/scripts/objections/sales.md`. Price,
"just a quote", spouse/callback, DIY each have their own doc under
`content/scripts/objections/`. Draft responses from these, in the tone of
`script.csm.tone-language` — ownership language, reasons instead of policy.

## Follow-up

`content/sops/sales/follow-up.md` governs cadence and content. Pull the real
open proposals from ServiceTitan (`homets-servicetitan` skill) — proposal
amount, options presented, date presented — and reference them specifically.
A follow-up that could have been sent to anyone is below standard.

## Second opinions & diagnostics feeding sales

A compressor, heat exchanger, coil, or tank is never condemned without the
driveway call to the Service Manager (D1, `content/sops/field/diagnostics.md`).
A replacement pitch built on an uncondemned major component is premature.

## Open facts — flag, don't invent

Home+ presented inside a sales package uses the published plan
(`content/reference/membership-plans.md`, $19.99/mo, 15% repair discount, 2
tune-ups, waived diagnostic). Business+ is per-RTU tiered (Essential /
Premier / Enterprise — Enterprise is written-quote only). The customer
referral credit amount is undecided — never quote one.
