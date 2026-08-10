---
id: reference.diagnostic-readings
title: Required Readings by System Type
department: field
owner: service-manager
status: in-review
version: 1
last_reviewed: 2026-08-04
review_cadence_days: 90
tags: [diagnostics, readings, measurement, superheat, subcooling, static-pressure, combustion, reference, technician, field]
related: [sop.field.diagnostics, sop.field.equipment-capture, reference.guarantees]
section: field-documentation
order: 1
surfaces: [field, checklist]
---

# Required Readings by System Type

> **The data plate and the manufacturer's spec always win over any number on this page.** Where they disagree, follow the plate and write down which one you used.

This is the reference behind `sop.field.diagnostics`. The rule there is that a diagnosis is a cause you have measured — this is the list of what to measure, and what the number should look like.

**Take the whole set, including the readings that come back normal.** A normal reading is what rules a cause out, and it is what proves the rest of the system was healthy when you left it.

## Every call, whatever the system {#every-call}

| Reading | Reference | Why it earns its place |
|---|---|---|
| Supply voltage at the disconnect | Within ±10% of nameplate | Low voltage kills compressors and burns contactors. It is the quiet cause behind a lot of "bad part" calls. |
| Voltage at the unit **under load** | Within ±10% | An unloaded reading hides a bad connection. Measure while it is running. |
| Run / start capacitor, µF | **Within ±6% of rated** | The most-swapped part in the trade. Forty seconds to measure, and the number is the diagnosis. |
| Contactor condition | No pitting, welding or chatter | Photograph pitting — it is the evidence for the upstream fault. |
| Filter | Type, size, condition, date | Half of "no cooling" and most frozen coils start here. |
| Ambient / outdoor temp | Recorded | Every pressure and superheat number is meaningless without it. |
| Ambient CO in the living space | **0 ppm expected** | Any sustained reading above zero is investigated, not noted and ignored. See `#combustion`. |

## Cooling — split system, package unit, heat pump in cooling {#cooling}

| Reading | Reference band | Notes |
|---|---|---|
| Return air dry bulb | Recorded | |
| Supply air dry bulb | Recorded | |
| **Delta-T (return − supply)** | **16–22°F** | Below ~14°F or above ~24°F, something is wrong — airflow or charge. Humidity shifts this band; a high-humidity return runs lower. |
| Suction pressure + saturation temp | Per conditions | |
| Liquid pressure + saturation temp | Per conditions | |
| **Superheat** | TXV/EEV: **8–14°F**. Fixed orifice: **per the manufacturer's target chart**, from indoor wet bulb and outdoor dry bulb | Never charge a fixed-orifice system by a rule of thumb. |
| **Subcooling** | **8–12°F**, or the data-plate value where given | The plate wins. |
| Compressor amp draw | Against **RLA** on the plate | Over RLA in normal conditions is a finding, not a footnote. |
| Condenser fan amps | Against **FLA** | |
| Line temperatures (suction, liquid) | Recorded | |
| Refrigerant type | From the plate | Drives repair-vs-replace more than any other single fact. |
| Coil condition, both | Photographed | A dirty condenser explains high head pressure before you touch a gauge. |

**Airflow before charge, always.** Charging a system with a restricted return or a loaded evaporator produces a number that is wrong and a customer who calls back.

## Airflow and duct {#airflow}

| Reading | Reference | Notes |
|---|---|---|
| **Total external static pressure** | Most residential equipment is rated **0.5" WC** | Measure it. Over the rating is a duct problem, and no amount of refrigerant fixes a duct problem. |
| Return static | Recorded separately | Tells you which side the restriction is on. |
| Supply static | Recorded separately | |
| Blower amp draw | Against FLA | |
| Temperature rise (heating) | **Within the data-plate range** | Outside the plate range is a defect, full stop — high rise is airflow, low rise can be overfiring or oversized blower. |

## Gas furnace {#furnace}

| Reading | Reference | Notes |
|---|---|---|
| Gas supply pressure, static and running | Typically ~7" WC natural gas | A pressure that drops hard when the burner lights is a supply problem, not an appliance problem. |
| **Manifold pressure** | **Per the rating plate** — commonly 3.5" WC natural gas, 10–11" WC LP | Never set by memory. The plate is the authority and the plate is right there. |
| **Temperature rise** | **Within the data-plate range** | The single best indicator that a furnace is set up correctly. |
| Flame sensor microamps | Typically **1.5–5 µA**; below the manufacturer's minimum (often ~1 µA) → clean or replace | The cheapest fix in the trade and the most common nuisance-lockout cause. |
| Inducer operation, pressure switch | Function verified | |
| Limit and rollout switches | Function verified, not jumpered | A jumpered safety is a red-tag conversation. |
| **Flue draft / spillage** | No spillage at the draft hood | Spillage is a CO event waiting to happen. |
| Heat exchanger inspection | Visual and/or camera, **photographed** | See the condemning rule in `sop.field.diagnostics`. |

## Combustion and CO {#combustion}

Where a combustion analyser is available, record it. Where it is not, say so in the note rather than leaving the row blank.

| Reading | Reference | Action |
|---|---|---|
| **Ambient CO, living space** | 0 ppm | Anything sustained above 0 is investigated. **9 ppm** is the ASHRAE indoor limit. **35 ppm and up: occupants out, appliance off, fire department.** |
| **Flue CO, air-free** | **Under 100 ppm** | **100–400 ppm:** service required, document it. **Over 400 ppm:** shut the appliance down and red-tag it. |
| Stack temperature | Recorded | |
| O₂ / CO₂ | Per manufacturer | |
| Draft | Per manufacturer | |

**A CO finding is never a verbal mention.** It goes in the job, it goes to the customer in plain words, and the appliance state you left it in — running, shut down, red-tagged — is written down.

## Heat pump in heating {#heat-pump}

Everything in `#cooling`, plus:

| Reading | Reference | Notes |
|---|---|---|
| Defrost cycle | Initiates and terminates correctly | |
| Reversing valve operation | Full changeover, no bypass | A leaking reversing valve looks exactly like low charge on the gauges. |
| Auxiliary / emergency heat staging | Correct sequence, correct lockout | |
| Outdoor coil condition | Photographed | |
| Balance point behaviour | Noted | Aux heat running at 45°F outdoor is a control problem and a bill the customer will call about. |

## Mini-split {#mini-split}

Everything in `#cooling`, plus:

| Reading | Notes |
|---|---|
| Per-head operation | Every head, not only the one they mentioned |
| Error / fault codes | Recorded verbatim — the code is the diagnosis on these systems |
| Line-set length and lift | Against manufacturer charge adjustment |
| Indoor blower wheel and coil condition | Photographed — mini-split coils foul badly and it is often the whole complaint |
| Condensate pump / gravity drain | Verified |

## Water heater — tank {#water-heater}

| Reading | Reference | Notes |
|---|---|---|
| Setpoint and delivered temperature | **120°F** is the standard recommendation | Higher reduces legionella risk but raises scald risk — say so before you change anything. |
| Incoming water pressure | **40–80 psi** | **Over 80 psi requires a pressure-reducing valve.** This is the cause behind a lot of "the tank keeps leaking" calls. |
| Expansion tank pre-charge | **Matched to static water pressure** | Measure it with the water side depressurised, or the reading is fiction. |
| T&P valve | Function and discharge routing verified | |
| Anode rod | Condition, photographed | The whole tank-life conversation lives here. |
| Gas: manifold pressure, flue draft, ambient CO | Per `#furnace` and `#combustion` | |
| Electric: element resistance, amp draw, thermostat function | Against nameplate | |
| Age from the serial | Recorded | Drives repair-vs-replace. |

## Boiler / hydronic {#boiler}

| Reading | Notes |
|---|---|
| Supply and return water temperature | Delta across the loop tells you flow |
| System pressure, cold and hot | Against the design fill pressure |
| Expansion tank charge | With the system depressurised |
| Circulator operation and amp draw | |
| Low-water cutoff | Function verified |
| Air elimination / purge state | |
| Combustion set | Per `#combustion` |

## Plumbing service call {#plumbing}

| Reading | Notes |
|---|---|
| Static water pressure | 40–80 psi; over 80 needs a PRV |
| Flow at the fixture of complaint, and at one known-good fixture | The comparison is the diagnosis |
| Water heater condition | Even when it is not the complaint |
| Shut-off valve condition and location | Photographed — the next tech and the customer both need this |
| Drain: location of the blockage, method used, footage | |
| Camera findings where run | Recorded, with the recording saved |

## What "recorded" means {#recorded}

In the ServiceTitan job, on this visit, in numbers.

- **Not** "checked charge, looks good." → `Superheat 11°F, subcooling 9°F, 82°F outdoor.`
- **Not** "airflow fine." → `TESP 0.82" WC against 0.5" rated — return restriction, 1" filter in a 20x25 return.`
- **Not** "cap tested OK." → `Run cap 44.1 µF against 45 rated, within tolerance.`

A number you wrote down is a number you can defend a year later. A word like "fine" is worth nothing to the next person, including future you.

## Related

- The procedure these readings serve: `sop.field.diagnostics`
- Getting the plate data in the first place: `sop.field.equipment-capture`
- Warranty windows the readings protect: `reference.guarantees`
