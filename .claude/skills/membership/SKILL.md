---
name: membership
description: Everything about Homets memberships — Home+ (residential) and Business+ (light commercial) — enrollment pitches, the membership pivot on booking calls, retention and renewal outreach, benefit questions, and membership status handling. Use whenever memberships, tune-ups included in plans, or member discounts come up.
---

# Memberships — Home+ and Business+

Facts come from `content/reference/membership-plans.md` and the membership
tokens in `content/pricing/tokens.md` — always resolve current values before
quoting.

## The plans (token names — verify values in tokens.md)

- **Home+** (residential), per the SOP tokens: `membership_home_plus_monthly`
  ($19.99/mo), 2 tune-ups/year, 15% repair discount, diagnostic waived for
  active members.
- ⚠️ **S2 is live**: hometsair.com's actual funnel sells a different,
  three-tier Home+ (Essential / Comfort / Infinite, Comfort $7.99/mo
  billed annually first year, Stripe-billed). Two revenue-bearing sources
  disagree; only the owner resolves which structure is real. Internal SOP
  work follows the tokens; anything customer-facing must not assert either
  structure as settled — flag S2 instead. When talking to an existing
  member, their actual plan in ServiceTitan/Stripe governs, whatever it's
  called.
- **Business+** (light commercial, priced **per qualifying rooftop unit**):
  Essential ($249.50 first year / $499 renewal, 2 visits, 10% discount),
  Premier ($499 first year / $998 renewal, 4 visits, 12% discount),
  Enterprise (written quote only — never improvise a price).
- Settled either way (C1): nobody pays an after-hours surcharge, member or
  not — so "no overtime charges" is never a membership benefit.

## The moments that sell it

1. **The pivot on a booking call** — `content/sops/csm/membership-pivot.md`:
   offered at fee framing, as math (the plan against the diagnostic they're
   about to pay), never as pressure. One offer; a no is a no.
2. **In the tech's package** — `content/sops/sales/membership.md` and
   `content/sops/field/membership.md`: membership inside the install
   proposal, not bolted on after.
3. **Enrollment script** — `content/scripts/sales/membership-enroll.md`
   (Spanish sibling exists).

## Retention & renewal

`content/sops/csm/membership-retention.md` governs. Renewal outreach starts
`retention_call_lead_time` (30 days) before expiration. Frame renewals in
realized value: tune-ups used, discounts received, waived diagnostics — pull
the member's actual history via the `homets-servicetitan` skill and do that
math with real numbers.

## Status handling on every call

`content/sops/csm/membership-status.md`: check status before quoting any fee.
Active member → waived diagnostic posture. Lapsed → retention conversation,
not a silent full-fee quote.

## Drafting outreach

Follow the `customer-comms` skill for tone and channel rules; seasonal
tune-up campaigns start 6–8 weeks before peak season
(`seasonal_outreach_lead_time`, script at
`content/scripts/csm/seasonal-outreach.md`).
