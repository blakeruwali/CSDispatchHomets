---
id: sop.field.sweating-grille
title: "Complaint: Sweating Grilles & Register Condensation"
department: field
owner: service-manager
status: published
version: 2
last_reviewed: 2026-09-20
review_cadence_days: 90
tags: [diagnostics, condensation, sweating, grille, register, humidity, dew-point, delta-t, airflow, duct-insulation, complaint, field, dispatch]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.water-leak, sop.field.forms, sop.csm.symptom-clarification, sop.dispatch.priorities, sop.dispatch.job-duration]
section: field-diagnostics
order: 7
surfaces: [field, dispatch, checklist]
---

# Complaint: Sweating Grilles & Register Condensation

> **An observation is not a diagnosis. Condensation is a dew point problem until you have measured otherwise — and you cannot measure it from the hallway.**

## The failure this document exists to prevent {#why}

On a real job we found two genuine defects: missing duct insulation and water in the pan. We repaired both. Neither was the cause of the customer's complaint. Both were worth fixing — but they were sold as the solution to a symptom nobody had measured. The customer paid, the grille kept sweating, and the callback came back to us as a warranty dispute.

Condensation happens for exactly one reason: **a surface is at or below the dew point of the air touching it.** Everything else — insulation, airflow, charge, oversizing, an open window — is only a mechanism that produces that condition. Your job is to prove which mechanism, with numbers, before a single part is quoted.

## When this applies {#applies}

Any complaint of water dripping from a supply register, dampness or staining on a ceiling or wall around a grille, visible beads on the grille face, or mold spotting at a diffuser. Also applies when you find it yourself on an unrelated call — a sweating grille found is a sweating grille documented.

## Safety gate {#safety}

- **Wet ceiling = electrical risk.** If drywall is saturated near a fixture or a can light, kill the circuit before probing.
- **Do not disturb suspected mold.** Visible growth beyond surface spotting at the grille face is a remediation conversation, not a wipe-down. Document and escalate.
- **Ladders and wet surfaces.** Condensation on a ceiling grille means condensation on the floor below it.

---

## STEP 1 — Confirm the complaint is condensation {#step-1}

Water at a register has three possible sources, and they are handled by three different documents. Settle this first.

| What you see | Likely source | Where it goes |
|---|---|---|
| Beads/film on the **grille face and frame**, worst during long run cycles, dries when system is off | Condensation | This document |
| Water **running from inside the duct**, staining the boot, worse after the coil runs | Drain pan / coil overflow | `sop.field.water-leak` |
| Water present with the system **off for hours**, or unrelated to run time | Building envelope / plumbing / roof | Not HVAC — document and advise |

Touch the grille. Cold and wet is condensation. Wet and ambient temperature is not.

## STEP 2 — Measure the indoor air {#step-2}

**Take these before you touch anything.** If the system has been off, run cooling 15 minutes first and take all readings within the same cycle.

- Indoor dry bulb temperature: ______ °F
- Indoor relative humidity: ______ %
- **Calculated dew point: ______ °F**
- Outdoor dry bulb / RH: ______ °F / ______ %

Use the table in STEP 3 to convert. **Dew point above 60 °F is the headline number** — at that level nearly any conditioned surface will sweat and duct insulation will not save you.

## STEP 3 — Dew point reference {#step-3}

Indoor dew point (°F) by dry bulb and relative humidity.

| Room temp | 45% RH | 50% RH | 55% RH | 60% RH | 65% RH |
|---|---|---|---|---|---|
| **72 °F** | 49 | 52 | 55 | 57 | 59 |
| **74 °F** | 51 | 54 | 57 | 59 | 62 |
| **76 °F** | 54 | 56 | 59 | 61 | 63 |
| **78 °F** | 56 | 58 | 60 | 63 | 65 |

Read it against the grille surface temperature from STEP 4. **If grille surface ≤ dew point, it will sweat — that is physics, not a defect.** The question then becomes *why is the air that humid* or *why is that grille that cold*.

## STEP 4 — Temperatures {#step-4}

Run cooling 15 minutes first. All readings in the same cycle.

**Return air — at the air handler, not the room:**

1. Pull the filter out of its slot
2. Probe through the slot, tip in the airstream, past the filter, before the coil
3. Keep the tip off the metal
4. Wait 30–60 seconds

- Return: ______ °F   Supply: ______ °F   **Delta-T: ______ °F**
- **Grille surface (IR): ______ °F**
- Space dew point (from STEP 3): ______ °F
- Gap = grille surface − dew point: ______ °F

**Delta-T 16–22 °F is normal.** Above 22 °F points to low airflow — the air spends too long on the coil, leaves too cold, and chills the grille below dew point. Below 16 °F with sweating points to a humidity load problem, not a cold-surface problem.

## STEP 5 — Static pressure and airflow {#step-5}

Only if delta-T is high, or the customer reports weak flow at that register.

- Total external static pressure: ______ in. w.c. (target ≤ 0.5 unless rated otherwise)
- Filter condition / restriction: ______
- Dampers, closed registers, crushed flex, blower speed tap: ______

Low airflow is the single most common *mechanical* cause of a cold grille. Fix airflow before you fix anything else.

## STEP 6 — The envelope around the grille {#step-6}

Now, and only now, look at the construction.

- Duct insulation present and intact at the boot? ______
- Boot sealed to the ceiling/wall opening, or is humid attic air washing the back of it? ______
- Grille material — bare metal in a humid space is the worst case ______
- Unconditioned space above/behind (attic, crawlspace, garage)? ______

**An uninsulated boot in a dry house does not sweat.** Insulation defects matter only when the dew point is already high. Report them as what they are: a contributing defect, not the cause.

---

## Deciding the cause {#decision}

| Finding | Cause | The fix you quote |
|---|---|---|
| Dew point > 60 °F, delta-T normal, all grilles affected | **Indoor humidity load** | Dehumidification, run-time/oversizing conversation, envelope/infiltration sources (open windows, bath fans, crawlspace) |
| Delta-T > 22 °F, high static, one or a few grilles | **Low airflow** | Airflow correction — filter, duct restriction, blower speed, closed dampers |
| Dew point normal, grille surface far below it, isolated to a boot in unconditioned space | **Uninsulated / unsealed boot** | Insulate and air-seal the boot |
| Short cycles, space never dries out, oversized equipment | **Oversizing / poor run time** | Staging, blower profile, or replacement conversation — with the numbers |
| Everything in range, condensation only on extreme days | **Ambient limit** | Explain honestly; offer dehumidification as an option, not a repair |

## Hard rules {#rules}

- **Never quote a repair for sweating without a recorded dew point, grille surface temperature and delta-T.** Three numbers. No exceptions.
- **Never sell duct insulation as "the fix" for condensation** unless the numbers show the boot is the outlier and the space dew point is in range. Sell it as a defect repair, disclosed as such.
- **Never repair an unrelated defect and let the customer believe the complaint is solved.** If you fix the drain and the grille will still sweat, say so on site and write it on the invoice.
- **Never close the job in cooling season without telling the customer the seasonal trap** (below).
- Photograph every reading and the grille condition, and attach them to the job in ServiceTitan per `sop.field.forms`.

## The cooling-season trap {#seasonal}

Turn the heat on and the symptom vanishes. It is not fixed — it is October. A customer told "it's resolved" in the fall calls back the following May, angry, and we own the argument because we let them believe it.

Say this before you leave:

> "This is a moisture-and-temperature issue, so it goes quiet the moment cooling stops. If we don't correct the cause, you'll see it again the first humid week in spring. I'd rather you hear that from me now than find out then."

## What goes on the invoice {#documentation}

Record, in the job notes:

1. All STEP 2–STEP 4 readings, with the calculated dew point
2. The identified cause from the decision table
3. Every defect found, **flagged as cause or contributing**
4. Whether the complaint is expected to recur, and under what conditions
5. Photos: grille condition, IR reading, gauge/meter displays

## QA scoring {#qa}

| Score | Standard |
|---|---|
| **0** | Quoted or performed work with no dew point, grille temperature or delta-T recorded. Sold a defect repair as the cause. |
| **1** | Readings taken but incomplete, or cause identified without the seasonal conversation and written disclosure. |
| **2** | Full STEP 2–6 readings recorded, cause identified from the decision table, contributing defects disclosed separately from the cause, seasonal trap explained on site, photos and notes in ServiceTitan. |
