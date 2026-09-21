---
id: sop.field.access-safety
title: Ladders, Attics, Crawlspaces & Roofs
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-21
review_cadence_days: 90
tags: [safety, ladder, attic, crawlspace, roof, heat, fall, access, technician, field]
related: [sop.field.safety, sop.field.electrical-safety, sop.field.arrival, sop.field.equipment-capture, sop.dispatch.hours]
section: field-safety
order: 3
surfaces: [field, checklist]
acknowledgement: required
---

# Ladders, Attics, Crawlspaces & Roofs

> **The equipment is rarely what hurts a technician in this trade. Getting to it is.**

Falls and heat are what actually put people in hospital in residential HVAC. Both happen on ordinary days, on jobs that were going fine, to technicians who had done the same climb a hundred times.

## The 60-second version {#field-card}

1. **Your ladder, not theirs.**
2. **Footing solid, 4-to-1 angle, three points of contact.**
3. **Tell someone you are going up or under**, and roughly for how long.
4. **Test the surface before you put weight on it.**
5. **Attic above 110°F: shorter trips, more water, come down before you need to.**
6. **Never go anywhere you cannot get back out of.**

## Ladders {#ladders}

**Use your own ladder.** The customer's is an unknown of unknown age, and using it makes a fall our liability and their guilt. `sop.field.arrival` already says to bring your own rather than ask.

- **Right ladder for the height.** Reaching from the top two steps is how the most ordinary fall happens.
- **Footing before weight.** Level, dry, both feet planted. On soft ground, put something under it. On a slick floor, have someone foot it or find another way up.
- **Roughly a 4-to-1 angle** — one foot out for every four feet of height. Too steep tips backwards; too shallow slides out.
- **Extension ladder to a roof: three feet above the edge, tied off where you can.**
- **Three points of contact, always**, and that means tools go up in a bag or on a belt, not in a hand.
- **Never move a ladder with yourself or anything else on it.**
- **Shoe covers come off for the climb** — the footing exception in `sop.field.arrival` §shoe-covers exists for this.

## Attics {#attics}

The most common serious injury in this trade is a foot through a ceiling.

- **Walk the joists or the catwalk. Never the insulation** — it hides joists, junction boxes, and nothing at all.
- **Test before full weight.** Decking rots, and it rots invisibly from above.
- **Light the space properly.** A headlamp, both hands free. A phone flashlight in your teeth is how people misjudge a step.
- **Know your way back before you go in.** In an unfamiliar attic, count turns.
- **Watch your head** — roofing nails come through the deck, and truss plates are at eye height.
- **Respirator or N95** for insulation, particularly blown-in. Long sleeves for fibreglass.

### Heat {#heat}

A Long Island attic in July runs well above the outdoor temperature, and heat illness starts before you notice it.

- **Water before you go up**, not after you come down. Thirst is already a late signal.
- **Short trips.** Do what needs doing at the unit, come down, and do the record-keeping in the cooler space — the same split `sop.field.equipment-capture` describes for photographing the plate and typing it in the truck.
- **Come down at the first sign**: headache, dizziness, nausea, cramps, or — the dangerous one — **you stop sweating**.
- **Tell Dispatch if you are struggling.** A job rescheduled for heat is a normal outcome, not a failure, and it is covered by the stop-work rule in `sop.field.safety`.

## Crawlspaces {#crawlspaces}

The hazards here are the ones you cannot see from the hatch.

- **Look before you enter.** Standing water, sewage, sagging insulation, gas odour, animal activity, spiders and snakes are all ordinary findings.
- **Standing water plus anything electrical: do not enter.** Power off first, verified, or it is a stop.
- **Air it out** where it has been closed up.
- **Never enter a space you cannot turn around in or back out of.** If getting stuck is conceivable, it is a no.
- **Someone knows you are under there.** The customer counts, and so does a status in ServiceTitan.
- **Gas smell under a house is an evacuation**, not a diagnosis — `protocol.emergency.triage`.

## Roofs {#roofs}

Commercial RTU work and some residential condensers put you on a roof.

- **Assess from the ladder before you step off.** Soft spots, loose gravel, wet membrane, moss.
- **Stay well back from the edge**, and never work with your back to it.
- **Wind changes everything.** Panels and covers become sails. If you are bracing yourself, come down.
- **Wet, icy, or snow-covered: the answer is no.** There is no version of this worth it.
- **Never work a roof alone at height without someone knowing**, and never in a storm — lightning included.

## When it goes wrong {#failures}

**You are already in the attic when you realise the decking is unsafe.** Stop moving. Distribute your weight, get back the way you came along a joist, and do not improvise a new route. Then write the defect down — the customer needs to know, and the next technician does too.

**The only access is through the customer's stored belongings.** Ask them to clear it rather than moving it yourself. You will be blamed for anything broken, and rightly, because you moved it.

**The access is genuinely unsafe** — no floored attic, a rotted platform, a hatch that will not take a ladder. That is a stop, not a challenge. Document it, tell the customer what would make it safe, and let Dispatch book it properly. We can sell the pull-down stairs or the decking; we cannot sell a technician's back.

**You feel the heat getting to you and the job is nearly done.** "Nearly done" is exactly when this happens. Come down.

### Hard rules

- Never use the customer's ladder.
- Never stand on the top two steps.
- Never step on insulation between joists.
- Never enter a space you cannot back out of.
- Never work a wet, icy, or wind-exposed roof.
- Never go into an attic, crawlspace, or roof without someone knowing you are there.
- Never push through heat symptoms to finish a job.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Own ladder, set and footed properly, access assessed before weight, someone informed, heat managed, any access defect documented for the customer |
| 1 | Access handled safely but nobody informed, or an unsafe access condition noticed and not written down |
| 0 | Customer's ladder used, insulation walked, unsafe access forced, or heat symptoms pushed through |

## Related

- Stop-work authority: `sop.field.safety`
- Power off before you climb: `sop.field.electrical-safety`
- Shoe covers and the footing exception: `sop.field.arrival`
- Check-in windows while you are out of contact: `sop.dispatch.hours`
