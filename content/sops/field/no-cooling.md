---
id: sop.field.no-cooling
title: "Complaint: Not Cooling"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-10
review_cadence_days: 90
tags: [diagnostics, cooling, no-cooling, ac, compressor, capacitor, charge, airflow, complaint, field]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.frozen-coil, sop.field.equipment-capture]
section: field-diagnostics
order: 1
surfaces: [field, checklist]
---

# Complaint: Not Cooling

> **Split the call before you touch a gauge. "Not cooling" is four different jobs, and the first two minutes tell you which one you are on.**

This is the highest-volume call we take between May and September. It is also the one where the most refrigerant gets added to systems that never needed any.

Everything here sits underneath `sop.field.diagnostics` — measure the cause, prove it with a number, end with a written price. This document is only about *where to start*.

## The split {#the-split}

Before anything else, answer this. It divides the whole job.

| What you observe | Where to go |
|---|---|
| Nothing runs at all — indoor and outdoor both dead | `#nothing-runs` |
| Indoor blower runs, outdoor unit does not | `#outdoor-dead` |
| Both run, air from the registers is not cold | `#running-not-cold` |
| Both run, air is cold, house still will not come down | `#cold-but-not-keeping-up` |

**Confirm it yourself.** The customer's version and the system's behaviour are different pieces of evidence, and they disagree more often than you would expect.

## Before the split — thirty seconds that save an hour {#first-checks}

1. **Thermostat set below room temperature, in COOL, fan on AUTO.** Say it out loud with the customer watching. It is not condescending if you narrate it as a checklist.
2. **Filter.** Pull it. Half of everything below starts here.
3. **Both breakers and the outdoor disconnect.** Indoor and outdoor are usually separate circuits.
4. **Look at the outdoor unit and the line set** before you open anything. Ice on the suction line sends you straight to `sop.field.frozen-coil`.

## Nothing runs at all {#nothing-runs}

No blower, no condenser, no thermostat display or a blank one.

1. **Power at the equipment.** Breakers, disconnect, service switch — the switch at the top of the basement stairs that somebody flipped.
2. **Blown fuse on the control board.** Usually a 3A or 5A automotive-style fuse. **A blown low-voltage fuse is a symptom, not a repair.** Something shorted 24V to ground — usually a chafed thermostat wire or a rubbed-through wire at the condenser. Replacing the fuse and leaving is a callback you have scheduled yourself.
3. **Float switch / condensate safety tripped.** Extremely common and easy to miss. If the pan is full or the drain is clogged, the switch has done its job. Clear the drain, then find out why it clogged.
4. **Door interlock switch** on the blower compartment.
5. **Thermostat itself** — dead batteries, failed common wire, failed unit.

**Wrong turn to avoid:** replacing a control board because the fuse is blown. Find the short first.

## Indoor runs, outdoor does not {#outdoor-dead}

This is where capacitors and contactors live, and where the most guessing happens.

1. **Is there 24V at the contactor coil?**
   - **No 24V** → the call is not reaching the condenser. Thermostat, control board, low-voltage wiring, or a tripped high/low pressure switch or float switch upstream. Work backwards from the contactor to the board.
   - **Yes 24V, contactor not pulling in** → failed contactor coil.
   - **Yes 24V, contactor pulled in, nothing runs** → go to 2.
2. **High voltage present at the load side of the contactor?** If yes and nothing turns, you are into the capacitor, the motors, or the compressor.
3. **Measure the capacitor.** Rated vs measured, both recorded. PASS within 6%, ATTENTION 6–10% low, FAIL beyond 10% (`reference.diagnostic-readings`).
4. **Condenser fan spins freely by hand?** A seized fan bearing takes out capacitors. So does a fan motor drawing over FLA.
5. **Compressor:** amp draw against RLA, and check for grounded, open, or locked rotor.

**Then ask what killed it.** A failed capacitor with a filthy condenser coil and 105°F head pressure did not die of old age. Replacing it without cleaning the coil is a return visit in three weeks (`sop.field.diagnostics` §root-cause).

> ⚠️ **A hard-start kit is not a diagnosis.** It is a legitimate repair on a specific finding, and a way of hiding a dying compressor from yourself on every other call. If you fit one, the note says which reading justified it.

## Both run, air is not cold {#running-not-cold}

The system is trying. Something is stopping it from moving heat.

**Take the temperature split first — return minus supply, target 15–22°F.** That one number splits the rest of the job.

### Split is low or nothing {#split-low}

**Check airflow before charge. Always, and in that order.**

1. **Filter, indoor coil, blower wheel.** A loaded blower wheel looks clean at a glance — check the blades, not the housing.
2. **Total external static pressure** against 0.5" w.c. rated. Over it and you have a duct problem no amount of refrigerant will fix.
3. **Blower speed tap / ECM programming**, especially if anyone has been in there before you.
4. **Then gauges.** Superheat 8–12°F on fixed orifice, subcooling 8–12°F on TXV.

| What the gauges say | What it usually means |
|---|---|
| Low suction, high superheat, low subcooling | Undercharge — **so find the leak** |
| Low suction, low superheat | Airflow restriction, or overfeeding metering device |
| High suction, low superheat | Overcharge, or a TXV stuck open |
| High head, high subcooling | Overcharge, dirty condenser, or non-condensables |
| High head, normal subcooling | Condenser airflow — coil, fan, or recirculation |

> ⚠️ **Refrigerant does not get used up.** If a system is low, it leaked, and it will leak again. "Topped it off" with no leak search is a repair with a built-in return visit, and it is the single fastest way to lose a customer's trust when they are back on the phone next month. Search, find, price the repair. If the customer declines and wants a charge to get through the weekend, that is their call — write down that it was offered and declined.

### Split is normal but the house is not cooling {#split-normal}

The equipment is doing its job. Go to `#cold-but-not-keeping-up`.

## Cold air, house not keeping up {#cold-but-not-keeping-up}

Nothing is broken. Something is undersized, leaking, or loaded — and this is a conversation, not a part.

- **Duct leakage and insulation**, particularly attic runs. A typical system loses 20–30% of its air before it reaches a room.
- **Room-by-room airflow.** Rooms with no return path pressurise and stop moving air when the door closes.
- **Run time.** A system that runs continuously on the hottest afternoon of the year and holds within a few degrees is behaving normally.
- **Load changes.** Finished basement, new addition, west-facing glass, an attic that lost its insulation.
- **Sizing.** Only worth raising with real numbers behind it.

**Do not sell a bigger system to fix a duct problem.** An oversized system short cycles, dehumidifies badly, and produces a customer who is less comfortable after spending more money. If the ducts are the finding, `18-Point Ductwork Evaluation` is the right next step and the honest one.

## What gets recorded {#record}

Beyond the standard form points (`sop.field.diagnostics` §servicetitan):

- The **split you landed on**, in one line — "indoor running, outdoor dead, no 24V at contactor."
- **Temperature split, superheat, subcooling, TESP** — including the ones that came back normal.
- **Whether a leak search was performed**, what method, and what was found. If a system was charged without a leak found, that fact is written down.
- **Before and after readings** where a repair was made.

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Thresholds and target ranges: `reference.diagnostic-readings`
- Ice anywhere on the system: `sop.field.frozen-coil`
- Plate data first: `sop.field.equipment-capture`
