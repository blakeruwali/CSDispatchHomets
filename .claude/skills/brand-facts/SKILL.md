---
name: brand-facts
description: The canonical fact sheet for all Homets brands — company names, domains, phone numbers, booking systems, Supabase projects, and which repo owns which fact — plus the known-drift list. Use before writing anything public-facing in ANY repo, when a phone/price/link/brand fact is needed, or when checking whether two repos disagree.
---

# Brand facts — one business, three brands, ten repos

The rule that makes this skill exist: **a business fact lives in exactly
one place, and everything else quotes it.** Prices and operating
constants live in `content/pricing/tokens.md` (this repo). Everything
below maps where the other facts live and where they're known to drift.

## The brands

| Brand | Market | Site | Repo |
|---|---|---|---|
| **Homets Air & Heat** | Residential + light commercial, Nassau & Suffolk | hometsair.com | `homets-home-tech` |
| **Com+ Mechanical** | Commercial (RTU/VRF/boilers/chillers), NYC + LI | Com+ Netlify site | `complusmechanical` |
| **Long Island HVAC Repair** | Second residential lead-gen brand (same phone & Levittown HQ as Homets) | longislandhvacrepair.com | `longislandhvacrepair` |

Sales portal for all residential replacement work: architect.hometsair.com
(`integrated-home-hub`).

## Phones

Established by scanning usage across all repos (2026-08-29 drift scan):

- **(516) 259-1191 — Homets primary customer-facing number.** Used
  consistently across hometsair.com, the hub's proposals/agreements, and
  the pitch deck. Default to this for anything Homets-branded.
- **(516) 667-0911 — Long Island HVAC Repair brand line** (LIR site data
  and analytics).
- **(332) 600-4640 — Com+ Mechanical** (its single tracking number; its
  `trackingPhones.ts` maps ~20 "channels" to this one number, so
  per-channel attribution there is not real).
- (516) 268-2241 and (646) 696-7937 appear only in project-phoenix brand
  assets — unverified; don't use without confirming.
- Known-fake numbers shipping in templates/placeholders: (516) 555-1234,
  (555) 123-4567, (516) 555-0123/0100 — never copy these into real copy.
- **Known cross-brand bug**: the hub's `proposalMode.ts` puts the Homets
  number on the Com+ proposal footer — Com+ proposals should carry
  (332) 600-4640.

## Booking

- Homets: ServiceTitan Scheduling Pro widget (homets-home-tech).
- Com+: its own ServiceTitan scheduler.
- longislandhvacrepair: **not wired** — placeholder ST keys; CTAs fall
  back to /contact.
- phoenix templates reference three different platforms (Acuity,
  SimplyBook, Calendly) plus placeholder links — treat every booking URL
  in phoenix as unverified until confirmed.

## Supabase projects (one per web repo — never cross-wire without intent)

| Repo | Project ref |
|---|---|
| integrated-home-hub ("architect" DB) | `dlpafltpdpjnfrjkyryz` |
| homets-home-tech | `einqxayjujnbzycsxwwi` (also read by hub scripts and, deliberately, by home-tech's architectClient for leads) |
| complusmechanical | `iydtisjdhudevsunzehk` |
| hvac-catalog | `aycsniurygblrspcoczj` |
| project-phoenix | `vljikukbfcgvyetvllhg` |
| homets-smart-service (abandoned) | `wujhvbmqhlxwbpuutssn` |

All committed keys are anon-role/publishable by design; RLS is the wall.

## Fact-authority rules

1. **Prices, fees, SLAs, guarantees, membership terms** →
   `content/pricing/tokens.md` + `content/reference/` in CSDispatchHomets.
   Any other repo showing a number gets checked against the tokens.
   Known live drift (found by the scan, unfixed as of 2026-08-29):
   - homets-smart-service advertises membership at $49.99/mo vs the
     tokens' $19.99 Home+.
   - **The big one — S2 is live and revenue-wired**: the SOP's tokens
     define a single Home+ plan at $19.99/mo, but hometsair.com's actual
     funnel sells a THREE-tier Essential / Comfort / Infinite structure
     (Comfort at $7.99/mo billed annually first year, Stripe join flows,
     an Essential reduced-diagnostic benefit). Customers are being billed
     on the site's structure. Neither source can be assumed correct —
     only the owner resolves S2. Until then: internal SOP docs follow the
     tokens; never "correct" the funnel to match the tokens (or vice
     versa) without the owner's decision, and flag the conflict whenever
     membership structure comes up.
   - Every longislandhvacrepair city page advertises a "$99 diagnostic
     waived with repair" — tokens say $199 standard, $99 promo-only.
     Whether that's an intended standing offer for the LIR brand or drift
     is the owner's call.
2. **Customers, jobs, leads, scheduling** → ServiceTitan only. Repos with
   their own lead tables (phoenix `service_requests`) are shadow stores —
   flag, don't extend.
3. **Guarantees you may state anywhere**: 90-minute arrival or the service
   call is free (fee only), no after-hours/emergency surcharge ever,
   30-day satisfaction window, 1-yr parts & labor on repairs, free
   replacement estimates, no cancellation fee.
4. **Open unknowns — never assert**: canonical public phone per brand,
   referral credit amount, maintenance flat price, CSM credit authority
   (C2), Com+ Google Ads conversion ID/labels (currently placeholder =
   no conversion tracking).
5. When you find new drift between repos, say so explicitly and name both
   sources — that's a finding, not a detail.

## One-command drift scan

When the repo clones are present, run
`bash .claude/skills/brand-facts/scripts/check-drift.sh [repos-root]`
(default root `/home/user`). It prints every phone number, membership
price, booking link, and cross-brand hometsair.com reference with
repo:file:line, skipping repos that aren't cloned. It finds; you judge —
a hit is drift only when it contradicts the fact authority above.
