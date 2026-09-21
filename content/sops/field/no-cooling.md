---
id: sop.field.no-cooling
title: "Complaint: Not Cooling"
department: field
owner: service-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostics, cooling, no-cooling, ac, compressor, capacitor, charge, airflow, complaint, field]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.frozen-coil, sop.field.equipment-capture]
section: field-diagnostics
order: 1
surfaces: [field, checklist]
---

# Complaint: Not Cooling

> **Split the call before you touch a gauge. "Not cooling" is four different jobs, and the first two minutes tell you which one you are on.**

## When this applies {#applies}

Any call where the complaint is warm air, no air, or a system that will not hold temperature — residential or light commercial, ducted or ductless. This is the highest-volume call we take between May and September, and it is also the call where the most refrigerant gets added to systems that never needed any. Everything here sits underneath `sop.field.diagnostics` — measure the cause, prove it with a number, end with a written price. This document is only about *where to start* and how not to guess.

## Safety gate {#safety}

Cooling calls carry less combustion risk than heat calls, but they are not risk-free. Before anything below:

- **High voltage present, panel or disconnect scorched, melted, or arcing** → kill power at the source before you touch anything.
- **Standing water at the air handler or panel** → power off first, diagnose second.
- **Refrigerant odor or hissing at the line set** → treat as a leak, ventilate the space, do not use an open flame leak-check method near it.

None of that is common on a cooling call. All of it outranks the rest of this document when it shows up (`sop.field.diagnostics` §safety).

## The execution ladder {#execution}

**Confirm it yourself before you touch a gauge.** The customer's version and the system's actual behavior are different pieces of evidence, and they disagree more often than you'd expect.

1. **Thermostat set below room temperature, in COOL, fan on AUTO.** Say it out loud with the customer watching — it is not condescending if you narrate it as a checklist.
2. **Filter.** Pull it. Half of everything below starts here.
3. **Both breakers and the outdoor disconnect.** Indoor and outdoor are usually separate circuits.
4. **Look at the outdoor unit and the line set** before you open anything. Ice on the suction line sends you straight to `sop.field.frozen-coil` — do not gauge up a frozen system.
5. **Work the split below** to find where the failure actually is.
6. **Take the full reading set** for wherever you land — temperature split, superheat/subcooling, TESP, amp draws against rating plate.
7. **Name the cause with the number that proves it**, and price the repair in ServiceTitan before you leave (`sop.field.diagnostics` §prove).

## The split {#the-split}

| What you observe | Where to go |
|---|---|
| Nothing runs at all — indoor and outdoor both dead | `#nothing-runs` |
| Indoor blower runs, outdoor unit does not | `#outdoor-dead` |
| Both run, air from the registers is not cold | `#running-not-cold` |
| Both run, air is cold, house still will not come down | `#cold-but-not-keeping-up` |

### Nothing runs at all {#nothing-runs}

1. **Power at the equipment.** Breakers, disconnect, the service switch at the top of the basement stairs that somebody flipped.
2. **Blown fuse on the control board.** Usually a 3A or 5A automotive-style fuse. **A blown low-voltage fuse is a symptom, not a repair.** Something shorted 24V to ground — usually a chafed thermostat wire or a rubbed-through wire at the condenser. Replacing the fuse and leaving is a callback you scheduled yourself.
3. **Float switch / condensate safety tripped.** Extremely common, easy to miss. If the pan is full or the drain is clogged, the switch did its job. Clear the drain, then find out why it clogged.
4. **Door interlock switch** on the blower compartment.
5. **Thermostat itself** — dead batteries, failed common wire, failed unit.

### Indoor runs, outdoor does not {#outdoor-dead}

This is where capacitors and contactors live, and where the most guessing happens.

1. **24V at the contactor coil?**
   - **No** → the call is not reaching the condenser. Thermostat, control board, low-voltage wiring, or a tripped high/low pressure switch or float switch upstream. Work backwards from the contactor to the board.
   - **Yes, contactor not pulling in** → failed contactor coil.
   - **Yes, contactor pulled in, nothing runs** → next step.
2. **High voltage at the load side of the contactor?** If yes and nothing turns, you're into the capacitor, the motors, or the compressor.
3. **Measure the capacitor.** Rated vs. measured, both recorded. PASS within 6%, ATTENTION 6–10% low, FAIL beyond 10% (`reference.diagnostic-readings`).
4. **Condenser fan spins freely by hand?** A seized fan bearing takes out capacitors. So does a fan motor drawing over FLA.
5. **Compressor amp draw against RLA**, and check for grounded, open, or locked rotor.

**Then ask what killed it.** A failed capacitor sitting next to a filthy condenser coil and 105°F head pressure did not die of old age. Replace it without cleaning the coil and you're back in three weeks (`sop.field.diagnostics` §root-cause).

### Both run, air is not cold {#running-not-cold}

**Take the temperature split first — return minus supply, target 15–22°F.** That one number splits the rest of the job.

**Check airflow before charge. Always, in that order.**

1. Filter, indoor coil, blower wheel. A loaded blower wheel looks clean at a glance — check the blades, not the housing.
2. Total external static pressure against 0.5" w.c. rated. Over it, and no amount of refrigerant fixes a duct problem.
3. Blower speed tap / ECM programming, especially if anyone has been in there before you.
4. Then gauges: superheat 8–12°F on fixed orifice, subcooling 8–12°F on TXV.

| What the gauges say | What it usually means |
|---|---|
| Low suction, high superheat, low subcooling | Undercharge — **find the leak** |
| Low suction, low superheat | Airflow restriction, or overfeeding metering device |
| High suction, low superheat | Overcharge, or a TXV stuck open |
| High head, high subcooling | Overcharge, dirty condenser, or non-condensables |
| High head, normal subcooling | Condenser airflow — coil, fan, or recirculation |

If the split is normal but the house still isn't cooling, the equipment is doing its job — go to `#cold-but-not-keeping-up`.

### Cold air, house not keeping up {#cold-but-not-keeping-up}

Nothing is broken. Something is undersized, leaking, or loaded — this is a conversation, not a part.

- **Duct leakage and insulation**, particularly attic runs. A typical system loses 20–30% of its air before it reaches a room.
- **Room-by-room airflow.** Rooms with no return path pressurize and stop moving air when the door closes.
- **Run time.** A system running continuously on the hottest afternoon of the year and holding within a few degrees is behaving normally.
- **Load changes.** Finished basement, new addition, west-facing glass, an attic that lost its insulation.
- **Sizing.** Only worth raising with real numbers behind it.

## Common misdiagnoses {#misdiagnoses}

| Looks like | Is actually | Caught by |
|---|---|---|
| "Bad board" | Blown low-voltage fuse from a chafed wire | Trace the short before replacing anything |
| "Low on gas" | Frozen coil giving false low-suction readings | Never gauge a system with visible ice — thaw first (`sop.field.frozen-coil`) |
| "Dead compressor" | Failed run capacitor preventing start | Measure the cap before condemning the compressor |
| "Undersized system" | Duct leakage or a closed/blocked return | Room-by-room airflow check before any sizing conversation |
| "Needs a recharge" | Dirty condenser coil raising head pressure | Coil condition and head pressure before adding refrigerant |

## What you say {#verbatim}

> "I'm taking a few measurements so I can tell you exactly what's wrong instead of guessing — it'll take a few minutes."

> "Your system is low on refrigerant, and refrigerant doesn't get used up — that means there's a leak somewhere. I want to find it rather than just top it off, because a top-off without finding the leak means we're having this same conversation again in a few weeks."

> "The capacitor's reading twenty-one microfarads against a forty-five rating — that's why the outdoor unit isn't starting. I also want to check the coil and fan while I'm in there, because something usually causes a capacitor to fail early."

> "The equipment's working correctly. What's fighting you is the ductwork / the return / the amount of glass on that side of the house — here's what that actually looks like to fix."

## When it goes wrong {#failures}

**You add refrigerant and the system was actually iced up, not low.** Stop. Recover what you added if it was overcharged as a result, thaw the system properly, and re-run the gauges on a thawed system before touching charge again. Tell the customer what happened and why.

**You replace a capacitor and the system fails again within the week.** You skipped the "what killed it" step. Go back to the condenser fan, head pressure, and coil cleanliness — one of them is the real cause, and the callback is unpaid until you find it.

**Customer insists it's "just low on freon" and wants you to skip the leak search.** Explain the number behind the recommendation, price the leak search, and if they still decline, write down that a top-off was offered and declined without a leak search, and that the system will run low again.

**You can't reproduce the complaint on arrival.** Take the full reading set anyway, document a healthy baseline, and follow `sop.field.diagnostics` §no-fault. Do not replace a part to close the ticket.

### Hard rules

- Never gauge up a system with visible ice on the coil or line set.
- Never add refrigerant without a leak search, or without writing down that one was offered and declined.
- Never condemn a compressor without first measuring the capacitor and checking for locked-rotor amps.
- Never sell a bigger system to fix a duct problem.

## What gets recorded {#record}

Beyond the standard form points (`sop.field.diagnostics` §servicetitan):

- The **split you landed on**, in one line — "indoor running, outdoor dead, no 24V at contactor."
- **Temperature split, superheat, subcooling, TESP** — including the ones that came back normal.
- **Whether a leak search was performed**, what method, and what was found. If a system was charged without a leak found, that fact is written down.
- **Before and after readings** where a repair was made.

## QA scoring {#qa}

| Score | What the file shows |
|---|---|
| **2** | Split identified correctly, full reading set recorded, cause tied to a number, leak search performed or explicitly declined and noted, price in ServiceTitan |
| **1** | Correct repair made, but a reading is missing, or the leak-search decision isn't documented |
| **0** | Refrigerant added with no leak search noted, a part condemned without a measurement, or a frozen system gauged without thawing first |

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Thresholds and target ranges: `reference.diagnostic-readings`
- Ice anywhere on the system: `sop.field.frozen-coil`
- Plate data first: `sop.field.equipment-capture`
