---
id: sop.csm.service-area
title: Service Area, Out-of-Area & Fully-Booked Days
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [service-area, coverage, nassau, suffolk, out-of-area, fully-booked, waitlist, drive-time]
related: [sop.csm.availability, protocol.emergency.triage, sop.csm.dispatch-handoff]
section: booking
order: 2
surfaces: [csm, checklist]
---

# Service Area, Out-of-Area & Fully-Booked Days

## Coverage {#coverage}

| Zone | Coverage | Typical drive time |
|---|---|---|
| **All of Nassau County** | ✅ Full | 20–40 min |
| **Western & Central Suffolk** — Huntington, Babylon, Islip, Smithtown, Brentwood, Bay Shore, Commack, Hauppauge, Deer Park, Lindenhurst | ✅ Full | 30–60 min |
| **Eastern Suffolk** — Riverhead, the Hamptons, Montauk | ⚡ Case-by-case — check with the dispatch manager | 60–90+ min |
| **Queens / Brooklyn** | ⚡ Check with Dispatch — we do take some | Traffic dependent |
| **Manhattan** | ❌ No — refer to NYC providers | — |
| **Westchester / Connecticut** | ❌ No coverage | — |

Nassau and Western Suffolk comfortably meet the {{price:arrival_guarantee}} arrival guarantee. Eastern Suffolk often does not — which is why it needs approval rather than a booking.

## Traffic is not an excuse, it's a planning input {#traffic}

The LIE and the Southern State add 20+ minutes at rush hour. Factor it in when you offer a window — a booking that only works in clear traffic is a booking that breaks the arrival guarantee. See `sop.csm.availability`.

## Handling out-of-area requests {#out-of-area}

Standard opening:

> "Our primary service area covers Nassau and Suffolk County. Let me check if we can accommodate your location."

**"Let me check" is the important half.** Never flatly refuse before confirming with Dispatch — the extended zones are real, and a hard no to a customer we could have served is revenue and reputation we didn't have to lose.

When the answer is genuinely no, be useful rather than abrupt:

> "That's outside where we can get a tech reliably, and I'd rather tell you that than have you waiting on us. You'll want a provider based in [area]."

## Fully-booked days {#fully-booked}

1. **Check whether any non-urgent job can be moved** to free a slot.
2. **Offer the next available** date and window.
3. **Emergencies always get a slot** — escalate to the dispatch manager.
4. **Add them to the waitlist**, and actually call back if a cancellation opens up.

> ⚠️ **Never tell an emergency caller "we're fully booked."**

No heat {{price:emergency_temp_cold}}, a gas leak, or active flooding gets same-day service regardless of what the board looks like. That is a dispatch manager problem to solve, not a CSM sentence to say. See `protocol.emergency.triage`.

## The waitlist is a promise {#waitlist}

Only add someone if we will genuinely call them back. A waitlist nobody works is worse than saying "the soonest is Thursday" — the customer stops looking elsewhere and then hears nothing.

## Tech specialization affects the slot {#specialization}

Not every tech can take every job. Note the system type accurately so Dispatch can match it — `sop.csm.system-type`:

- **Boiler specialists** — steam and hydronic
- **Commercial** — RTUs, VRFs, large systems
- **Ductless / mini-split** — Mitsubishi and Daikin certified
- **Plumbing** — separate team, never cross-booked with HVAC

"Any tech, any job" scheduling is what produces the second truck roll.

## Related

- Booking windows: `sop.csm.availability`
- Emergency override: `protocol.emergency.triage`
