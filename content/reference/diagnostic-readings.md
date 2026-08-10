---
id: reference.diagnostic-readings
title: Diagnostic Thresholds — The Numbers Behind the Forms
department: field
owner: service-manager
status: in-review
version: 2
last_reviewed: 2026-08-10
review_cadence_days: 90
tags: [diagnostics, readings, thresholds, servicetitan, forms, superheat, subcooling, static-pressure, combustion, co, reference, technician, field]
related: [sop.field.diagnostics, sop.field.equipment-capture, reference.guarantees]
section: field-documentation
order: 1
surfaces: [field, checklist]
---

# Diagnostic Thresholds — The Numbers Behind the Forms

> **Every threshold on this page is taken from the ServiceTitan point-inspection forms themselves.** This document does not invent a second standard — it collects the one already built into the forms, so a technician can see the whole picture on one page and a manager can review it without opening ten forms.
>
> **The equipment data plate always wins.** Where a plate and this page disagree, follow the plate and write down which one you used.

## How the forms grade {#grading}

Every point on every inspection resolves to one of four states, and the wording is the same across all of them:

| State | What it means | What the customer is told |
|---|---|---|
| **PASS** | Tested within manufacturer specification | Nothing needed |
| **ATTENTION** | Working today, but worn or out of spec | Worth planning for |
| **FAIL** | Not performing correctly | Repair recommended |
| **UNABLE TO TEST** | System would not run, or no access | Says so plainly — never left blank |

**UNABLE TO TEST is a real answer and it is not a failure of yours.** A dead system cannot be measured. What is not acceptable is grading a point PASS because you could not test it.

## Electrical {#electrical}

| Reading | PASS | ATTENTION | FAIL |
|---|---|---|---|
| **Run capacitor** | Within **6%** of rating | **6–10% below** rating — weakening | **More than 10% below** rating |
| **Thermostat calibration** | Within **2°F** | Out by 2°F or more | — |
| Contactor | Contacts clean, closes correctly | Pitting | Burned, welded, replacement required |
| Compressor | Draw within RLA | — | Grounded, open winding, or locked rotor |
| Surge protection | Fitted | None fitted, system unprotected | — |

**Record the rated and measured capacitance as two separate numbers.** The customer report prints them side by side — 45 rated, 28.4 measured — and that comparison does more work than any sentence you could write.

## Cooling performance {#cooling}

| Reading | Target | Notes |
|---|---|---|
| **Temperature split across the coil** | **15–22°F** (return minus supply) | Below the range means the system is not removing the heat it should. Enter N/A if it would not run. |
| **Superheat** | **8–12°F** on a **fixed orifice** system | |
| **Subcooling** | **8–12°F** on a **TXV** system | |
| Refrigerant type | From the plate | **R-22 has its own conversation** — see below. |

**R-22.** No longer manufactured in the US. Still legal to service, but supply is recovered and reclaimed stock only, which makes any future leak repair significantly more expensive. That is worth saying **before** a customer commits to a major repair on an R-22 system, not after — and the AC form has a field for recording that you did.

## Airflow and duct {#airflow}

| Reading | Reference | Notes |
|---|---|---|
| **Total external static pressure** | Rated at **0.5" w.c.** on most residential equipment | Most homes measure well above it. The single most useful number for explaining why a correctly sized system still cannot heat or cool evenly. |
| Duct leakage | A typical residential system loses **20–30%** of the air it carries | Record CFM25 if a duct blaster was run; otherwise it is a visual assessment and the form says so. |
| Duct in unconditioned space | — | Attic air reaches ~130°F in August. Insulation slows loss; sealing stops leaks. Both matter more here than in a basement. |

## Heating — furnace and boiler {#heating}

| Reading | Reference | Notes |
|---|---|---|
| **Temperature rise** | **Within the rating-plate window** — typically a 30–40°F band | Above the window means not enough air across the heat exchanger. |
| **Flue CO, air-free** | **Acceptable below 100 ppm** | **Above 400 ppm air-free: FAIL.** |
| Soot on the heat exchanger | — | Roughly **2–4% efficiency loss per 1/32"** of buildup. Soot is fuel bought and not used. |
| Manifold / nozzle | Per the rating plate | Never set from memory. |

## Carbon monoxide — ambient {#co}

Measured **in the living space and around the appliance, not in the flue**, with exhaust appliances running.

| Reading | Grade | Action |
|---|---|---|
| **0 ppm** | PASS | — |
| **Below 10 ppm** | PASS | — |
| **10–35 ppm** | ATTENTION | Source investigated and the space ventilated |
| **35 ppm or above** | FAIL | **Appliance shut down** |
| **70 ppm or above** | FAIL | **Space evacuated and the fire department notified** |

This ladder is not advisory and it is not a judgment call. It is the same on the furnace form, the boiler form and the IAQ form, and it is the one table in this document with no exceptions in it.

## Indoor air quality {#iaq}

| Reading | PASS | ATTENTION | FAIL |
|---|---|---|---|
| **Relative humidity** | **30–50%** | Below 30% (dry); 50–60% (elevated) | Above 60% — supports mould and dust mites; below 20% — very dry |
| **CO₂** | Below **800 ppm** | 800–1200 ppm — ventilation marginal | Above 1200 ppm — inadequate ventilation |
| **Filter MERV** | **MERV 11+** with adequate surface area | MERV 8–10 (equipment protection, limited for occupants); MERV 6 or below; or a high-MERV filter in a slot too small for it | — |

Outdoor air runs around **420 ppm** CO₂, which is the number that makes the indoor reading mean something to a customer.

## What "recorded" means {#recorded}

The forms have both a graded dropdown and a numeric field for most points. **Both get filled.** The grade is what the customer reads; the number is what a manager, a manufacturer, or the next technician can actually check.

- **Not** "checked charge, looks good" → `Superheat 11°F, TXV system, 82°F outdoor.`
- **Not** "airflow fine" → `TESP 0.82" w.c. against 0.5" rated.`
- **Not** "cap tested OK" → `Rated 45 MFD, measured 44.1 MFD — PASS, within 6%.`

A number you wrote down is a number you can defend a year later. "Fine" is worth nothing to the next person, including future you.

## Related

- The procedure these numbers serve: `sop.field.diagnostics`
- Getting the plate data in the first place: `sop.field.equipment-capture`
- Warranty windows the readings protect: `reference.guarantees`
