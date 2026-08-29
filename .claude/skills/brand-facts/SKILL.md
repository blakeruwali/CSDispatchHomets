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

## Phones — ⚠️ verify before publishing

Four different numbers appear across the repos, and no single canonical
list exists yet. Before putting a phone number in anything public, confirm
which is current with the owner or ServiceTitan settings:

- (516) 667-0911 — longislandhvacrepair site data (`src/lir/data/site.ts`),
  described as the shared Homets number.
- (516) 268-2241 and (646) 696-7937 — project-phoenix brand assets.
- (516) 259-1191 — the investor pitch deck.
- (332) 600-4640 — Com+ Mechanical's single tracking number (its
  `trackingPhones.ts` maps ~20 "channels" to this one number, so
  per-channel attribution there is not real).
- Known-fake numbers still shipping in phoenix templates: (516) 555-1234,
  (555) 123-4567 — never copy these anywhere.

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
   Any other repo showing a number gets checked against the tokens —
   known drift example: homets-smart-service advertises membership at
   $49.99/mo vs the real {{price token}} $19.99 Home+.
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
