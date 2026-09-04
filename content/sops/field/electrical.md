---
id: sop.field.electrical
title: "Complaint: Breaker Tripping or Short Cycling"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostics, complaint, field, electrical, breaker, tripping, short-cycling, amp-draw, contactor]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.no-cooling, sop.field.noise, protocol.emergency.triage]
section: field-diagnostics
order: 5
surfaces: [field, checklist]
---

# Complaint: Breaker Tripping or Short Cycling

> **A breaker that trips is a component doing its job. The fault is never the breaker until everything downstream of it has been measured.**

This is the call where guessing is most expensive and most dangerous. A nuisance trip and a compressor on its way to ground look identical from the thermostat, and only one of them can be safely reset.

## Before anything {#safety-first}

1. **Never reset a breaker more than once without measuring.** The first reset is diagnostic. A second reset on an untested circuit is how a fire starts.
2. **Look before you touch.** Scorch marks, melted insulation, burnt smell, swollen capacitor, pitted contactor. Any of these and the circuit stays off until it is repaired.
3. **Verify the circuit is dead** before working in it — meter it, do not trust the switch.
4. **Burning smell in the living space, smoke, or a scorched panel** is an emergency, not a service call. `protocol.emergency.triage`, and the homeowner should be told to keep the circuit off.

## The first fork — trip or cycle {#fork}

These are two different documents' worth of fault, booked under one complaint. Separate them in the first two minutes.

| The customer says | It is actually |
|---|---|
| "The breaker keeps popping" | Overcurrent or a short — work `#tripping` |
| "It turns on and off every few minutes" | Short cycling — work `#short-cycling` |
| "It runs, then stops, then comes back in ten minutes" | Thermal overload resetting — treat as `#tripping`, the motor is the suspect |

## Breaker tripping {#tripping}

1. **Amp draw on every leg, under load, against the rating plate.** This is the whole diagnosis. Record RLA, FLA, and what you measured. Draw above rated is a failing component; draw at locked-rotor is a component failing *now*.
2. **Megohm / insulation resistance to ground on the compressor** where the tool is available. A compressor going to ground trips instantly and repeatedly and must never be repeatedly reset.
3. **Capacitors — measured, not eyeballed.** A run capacitor below tolerance drives amp draw up and takes the motor with it. Record measured µF against rated.
4. **Contactor.** Pitted, welded, or chattering contacts cause both trips and cycling. Welded closed means the unit runs with the thermostat satisfied — check for that specifically.
5. **Wiring and terminations.** Loose lugs, heat discoloration, undersized or damaged conductor, rodent damage at the disconnect.
6. **The breaker itself, last.** A weak breaker exists, but it is the final suspect after amp draw is proven normal. **Never upsize a breaker to stop it tripping.** The breaker protects the conductor; changing it does not change what the wire can carry.
7. **Confirm the fix under load** — run it, watch the draw, and stay for a full cycle.

## Short cycling {#short-cycling}

The system starts and stops before completing a cycle. Find which safety is stopping it.

| Path | What to check |
|---|---|
| Cooling, cycling fast | Low charge, dirty coil, restricted airflow, low-pressure switch cutting out |
| Cooling, high-pressure cutout | Dirty condenser, overcharge, failing fan motor |
| Heating, limit trip | Airflow — filter, blower, static. See `sop.field.no-heat` §short-cycling |
| Any, thermal overload | Motor drawing high, capacitor weak, bearings tight |
| Any, control side | Thermostat location, anticipator/cycle rate, loose low-voltage wiring, oversized equipment |
| Any, board fuse repeatedly blown | **A short. Find it — do not keep fitting fuses.** |

**Oversized equipment short cycles by design and cannot be repaired into behaving.** If that is the finding, say it, document it, and let the replacement conversation be an honest one rather than a series of parts.

## What you say {#verbatim}

Explaining a trip in plain language is what stops the customer resetting it after you leave:

> "That breaker isn't broken — it's doing exactly what it's built to do. Your compressor is pulling [X] amps and it's rated for [Y], so the breaker is shutting it down before it can overheat the wire. If we keep resetting it, we're overriding the one thing protecting the house."

When the compressor is grounded:

> "I checked the compressor's insulation to ground, and it's failed — that's why it trips the instant it starts. This one can't be reset safely, so I'm leaving that breaker off and I'll show you the options for replacement today."

When the customer asks for a bigger breaker:

> "I understand why that seems like the fix, and I have to tell you no on that one. The breaker matches the wire in your walls. A bigger breaker just lets the wire get hotter before anything shuts off — it doesn't fix the draw, it removes the protection."

## When it goes wrong {#failures}

**It won't trip while you're there.** Intermittent trips are real. Measure under the worst condition you can create — long run time, high ambient, second stage — and record the draw you saw. If the draw is clean and the trip is not reproducible, document it, leave the customer with what to watch for, and do not replace a compressor on a story.

**The customer has been resetting it for weeks.** Ask, always. That history tells you the fault is progressing, and it changes the urgency of the conversation.

**You find a capacitor out of tolerance and stop there.** Replace it, then re-measure the draw. A weak capacitor is often a symptom of a motor drawing high, not the cause. If the draw stays high, the capacitor was not the diagnosis.

**Someone has already upsized the breaker.** That is a finding you report, in writing, and it does not go back in.

### Hard rules

- Never reset a breaker twice without measuring.
- Never upsize a breaker or a fuse.
- Never bypass a safety switch or a pressure switch to keep a unit running.
- Never fit a second board fuse without finding the short.
- Never leave a grounded compressor energised.

## What gets recorded {#record}

- Amp draw per leg, measured, next to the rating plate value.
- Capacitor measured µF vs. rated.
- Contactor condition.
- Insulation-to-ground result if tested.
- Whether the trip was reproduced on site.
- How long the customer has been resetting it.
- Breaker size and conductor size, if the panel was inspected.
- Run/no-run decision and reason.

## QA scoring {#qa}

| Score | What it looks like |
|---|---|
| **2** | Amp draw recorded against rating, cause proven, safety explained to the customer, unit left in a safe state, everything documented. |
| **1** | Component replaced and the symptom cleared, but no measured draw recorded before or after. |
| **0** | Breaker reset repeatedly without measurement, breaker or fuse upsized, safety bypassed, or a grounded compressor left live. |

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Expected electrical values: `reference.diagnostic-readings` §electrical
- Cooling-side short cycling: `sop.field.no-cooling`
- Motor sounds that precede a trip: `sop.field.noise`
