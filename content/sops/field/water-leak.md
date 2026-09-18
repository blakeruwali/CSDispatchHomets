---
id: sop.field.water-leak
title: "Complaint: Water Leaking"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-18
review_cadence_days: 90
tags: [diagnostics, complaint, field, condensate, drain, pan, float-switch, water, leak, condensation, sweating, dew-point, insulation]
related: [sop.field.diagnostics, sop.field.frozen-coil, sop.field.no-cooling, reference.diagnostic-readings]
section: field-diagnostics
order: 4
surfaces: [field, checklist]
---

# Complaint: Water Leaking

> **Find out WHERE the water is before you work out why. Drain water and condensation look identical on a ceiling and have nothing else in common — different cause, different fix, different price.**

This is the call where the obvious repair is most often the wrong one. Every water complaint has something visibly wrong nearby — a damp pan, a bare duct, an old stain — and fixing the thing you can see is not the same as fixing the thing that is wetting the customer's ceiling. A repair aimed at the wrong source comes back, and it comes back to a customer who has already paid.

## Three sources, one puddle {#three-sources}

Almost every residential water call is one of three things. They are told apart by **where the water actually is**, not by what looks worst.

| Where the water is | What it is | Where you go |
|---|---|---|
| Dripping or tracking from **one point** | Condensate drain, pan, or a leaking joint | [The drain](#drain) |
| On the **face and vanes** of the grille | Supply air is below the room's dew point | [The grille face](#face) |
| On the **frame, ceiling ring, or ceiling around** the grille | Humid air condensing on cold metal at the boot | [The boot](#boot) |

**Two of them can be true at once.** That is the callback this SOP exists to prevent — see [Do not stop at the first one](#both).

## Before anything else — locate the water {#locate}

**Pull the grille off and look.** Thirty seconds, and it decides everything that follows.

1. **Where is it wet?** Face and vanes, frame and ceiling ring, or running from a single point.
2. **Is it condensation or flow?** Condensation forms evenly across a surface. Flow tracks, drips, and follows gravity from one place.
3. **Photograph it with the grille off**, before you touch anything.
4. **Squeeze any insulation** you find on the boot. Wet insulation is a finding in itself — see [The boot](#boot).

**Do not quote anything before you have done this.** A price given from the driveway on a water call is a guess.

## Source 1 — the drain {#drain}

The cheapest to check, so check it first.

| Check | Looking for |
|---|---|
| **Primary pan** | Standing water, rust line, biological growth |
| **Drain line** | Flows clear when poured, or backs up |
| **Trap** | Dry, missing, or wrong depth — a dry trap lets air pull water back |
| **Float switch** | Tripped, wet, or bypassed by someone before you |
| **Secondary pan** | Water in it means the primary has already failed at least once |
| **Previous repairs** | A joint someone else cut in is a joint that can weep |

**A blocked drain is often a symptom, not the cause.** A coil running much colder than design condenses harder and can overwhelm a drain that had been coping for years. If you find a blocked line, keep going — take the readings anyway and find out why the system is making that much water.

> ⚠️ **Clearing a drain makes the visible problem stop.** It does not make a sweating grille stop. If the water was coming from both, the customer sees a dry ceiling today and a wet one next week.

## Source 2 — condensation on the grille face {#face}

The grille sits **in the airstream**. Its surface temperature is set by the air blowing over it. When that surface falls below the room's dew point, water forms on it — the same way a cold glass sweats on a warm day.

**Relative humidity (RH)** is how much moisture the air is holding, as a percentage of what it could hold at that temperature. RH plus room temperature gives you the **dew point** — the temperature at which water starts condensing. That is the only threshold that matters here.

So a wet grille face means one of two things, and the readings tell you which:

- **The supply air is too cold** — a coil running well below design, from low airflow or a charge problem
- **The room is too humid** — a high dew point, so even normal supply air condenses

> **Insulation cannot fix a wet grille face.** Insulation protects the duct body and the boot from ambient air. It does nothing to the air passing through the grille. If the face and vanes are wet, wrapping the duct is work aimed at the wrong mechanism — and the customer pays for a repair that was never going to hold.

## Source 3 — condensation on the boot or duct {#boot}

Wet **frame, ceiling ring, or ceiling** — not the vanes — means humid air is reaching cold metal outside the airstream. This is the one insulation is for, and it is also the one that gets installed badly.

| Check | Looking for |
|---|---|
| **Is the insulation wet?** | Squeeze it. Wet means the vapour barrier is not doing its job |
| **Are the seams sealed?** | Foil-faced insulation is only a vapour barrier if every seam is taped or mastic'd |
| **Is it sealed to the boot?** | Laid on top is not sealed. Humid air goes straight past it |
| **Any gap to bare metal?** | One gap is enough |
| **Rust or old staining** | Tells you how long this has been happening |

> ⚠️ **Fibreglass laid on a cold boot without a continuous vapour barrier makes the problem worse, not better.** Vapour passes through the batt, condenses on the metal underneath, and now saturated insulation is holding water against the duct where nobody can see it.

## The readings {#readings}

Run the system in cooling for **15 minutes** before taking anything, and take the whole set in the same cycle. Thresholds live in `reference.diagnostic-readings` — the numbers below are where to put the probe.

| Reading | Where |
|---|---|
| **Room temperature + RH** | Mid-room, chest height, **6+ feet from the register.** Hold still 2–3 minutes — RH sensors are slow and the first number is always wrong |
| **Supply air temperature** | In the airstream at the grille |
| **Grille surface temperature** | IR gun, on the metal |
| **Return air temperature** | At the air handler, through the filter slot — past the filter, before the coil, tip off the metal. **Not at the return grille in the room** |
| **Temperature split** | Return minus supply. Target **15–22°F** |
| **Total external static pressure** | Supply plenum and return plenum, tips **perpendicular to airflow.** Add the absolute values |
| **Superheat / subcooling** | Only after airflow is ruled out — see `sop.field.frozen-coil` for why order matters |

**The equipment data plate always wins.** TESP is referenced at 0.5" w.c. on most residential equipment, but ducted inverter and mini-split air handlers are frequently rated far lower. Read the plate, write down the rated figure, and compare against that.

## Dew point from room temperature and RH {#dew-point}

| Room temp | 50% RH | 55% | 60% | 65% | 70% |
|---|---|---|---|---|---|
| **72°F** | 52 | 55 | 57 | 60 | 62 |
| **74°F** | 54 | 57 | 59 | 62 | 64 |
| **76°F** | 56 | 59 | 61 | 63 | 65 |
| **78°F** | 58 | 60 | 63 | 65 | 67 |

If the grille surface reads below the dew point in this table, condensation is confirmed and the argument is over.

## Reading the result {#result}

| What you find | What it points at |
|---|---|
| Water from one point, pan wet, line blocked | **Drain.** Clear it — then take the readings anyway |
| Dew point above 60°F | **The house is too humid.** Ductwork will not fix it; look for the moisture source |
| Split above 22°F with cold supply | **Low airflow.** Filter, coil, blower, dampers, duct restriction — then static |
| TESP above the plate rating | **Duct restriction.** Sagging flex, crushed runs, undersized return |
| Split normal, return already cold | **The room is being overcooled.** Control or thermostat problem, not the coil |
| Split and static normal, face still wet | Re-check the dew point. If it is fine, the water is not condensation — go back to [locate](#locate) |
| Frame wet, face dry | **Boot.** Insulation, vapour barrier, seal to the ceiling |

## Do not stop at the first one {#both}

A water complaint can have two causes running at the same time, and the drain is always the one you find first because it is the one you look at first.

**Before you close the job, ask: does what I found explain what the customer actually described?** A blocked drain does not put condensation on the outside face of a grille. If the customer described sweating and you found a clog, you have found *a* problem, not necessarily *the* problem.

Take the readings even when you have already found something. They cost fifteen minutes and they are the difference between one visit and four.

## What you tell the customer {#customer}

Name the source, not the symptom:

> "The water was coming from [the condensate drain / the air at the register being colder than the room / the metal above the ceiling]. What caused it was [X]. I've [done Y], and here's the number that tells us it worked — your supply air should be around 55°F instead of 48°F."

If you have found one cause and suspect another, **say that too, before you leave.** A customer told up front that there may be a second issue is a customer who trusts you when it turns up. The same customer told nothing is a recall.

## What gets recorded {#record}

- **Photo with the grille off**, before anything was touched
- **Where the water was** — face and vanes, frame and ceiling, or single-point drip
- **Room temperature and RH, and the dew point** they give
- **Supply, return, split, and grille surface temperature**
- **TESP, and the rated figure from the data plate** you compared it against
- **Pan, drain line, trap and float switch condition**
- **Insulation condition** — wet or dry, seams sealed or not
- **Cause identified**, and whether a second cause is suspected
- **Every reading you took, including the normal ones.** The normal readings are what rule causes out, and the next technician on this job needs them as much as the abnormal ones

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Thresholds and targets: `reference.diagnostic-readings`
- Why airflow comes before charge: `sop.field.frozen-coil`
- Cooling calls: `sop.field.no-cooling`
