---
id: sop.field.no-heat
title: "Complaint: No Heat"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-10
review_cadence_days: 90
tags: [diagnostics, heating, no-heat, furnace, boiler, heat-pump, ignition, flame-sensor, co, complaint, field]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.equipment-capture, protocol.emergency.triage]
section: field-diagnostics
order: 2
surfaces: [field, checklist]
---

# Complaint: No Heat

> **Heat calls carry combustion. The sequence below never starts with the fault — it starts with whether the appliance is safe to run at all.**

Our highest-consequence call. A no-cooling call that goes wrong costs a return trip; a no-heat call that goes wrong can cost a family. Nothing in this document outranks `sop.field.diagnostics` §safety.

## Before anything {#safety-first}

1. **Ambient CO in the living space, on arrival, before you start work.** 0 ppm expected. **35 ppm or above: appliance off. 70 ppm or above: everyone out, fire department.** The full ladder is in `reference.diagnostic-readings` §co, and it has no exceptions in it.
2. **Smell for gas.** Positive detection → shut off at the appliance, no ignition sources, utility then dispatch (`protocol.emergency.triage`).
3. **Look at the venting** before you look at the fault. Disconnected flue, blocked termination, spillage at the draft hood.
4. **Confirm the CO alarm situation in the home.** Missing or expired gets said out loud and written down, on every heat call, regardless of what you came for.

**A house with no heat in January is under pressure to get running.** That pressure is exactly why the safety checks come first and are not negotiable — the customer is not in a position to weigh the tradeoff, and it is not their job to.

## The split {#the-split}

| What you observe | Where to go |
|---|---|
| Nothing happens at all | `#nothing-runs` |
| Sequence starts then stops before ignition | `#no-ignition` |
| Lights, then drops out after a few seconds | `#flame-dropout` |
| Runs but the house stays cold | `#runs-not-warm` |
| Heat pump — running, air feels cool | `#heat-pump` |
| Short cycling on a limit | `#short-cycling` |

**Watch a full cycle before you conclude anything.** Call for heat and stand there through it. Most furnace diagnoses are made by watching the sequence fail at a specific point rather than by testing components at random.

## Nothing happens at all {#nothing-runs}

1. **Thermostat** — set above room temp, in HEAT, batteries, display.
2. **Power** — breaker, service switch at the top of the stairs, the door interlock switch on the blower door.
3. **Control board fuse.** Same rule as cooling: **a blown low-voltage fuse is a symptom.** Find the short before you replace it.
4. **Board diagnostic LED.** Read the flash code and record it verbatim. It is the fastest honest answer on the page.
5. **Condensate safety on a 90%+ condensing furnace.** A blocked condensate trap locks it out and looks exactly like a dead furnace.

## Sequence starts but never ignites {#no-ignition}

Follow the sequence in order and find where it stops.

1. **Inducer runs?** No → inducer motor, board, or power.
2. **Pressure switch closes?** No → blocked or disconnected vent, a cracked or water-filled pressure hose, condensate blockage on a 90%, or a weak inducer. **Never jumper a pressure switch to "test" it and leave it that way.**
3. **Ignitor glows / spark present?** No → ignitor, board, or the flame rollout / limit circuit open upstream.
4. **Gas valve opens?** Check for 24V at the valve.
   - **24V present, no gas** → the valve, or no gas supply.
   - **No 24V** → board or safety circuit.
5. **Gas supply.** Static and running pressure. A pressure that collapses when the burner lights is a supply problem, not an appliance problem.
6. **Manifold pressure against the rating plate.** Never set from memory.

**Repeat ignitor failure is not an ignitor problem.** It is gas pressure, a control board cycling it wrongly, a flame sensor causing repeated relights, or the wrong part number. Fitting the third ignitor without asking why is not a diagnosis.

## Lights then drops out {#flame-dropout}

Classic, and usually cheap.

1. **Flame sensor microamps.** Below the manufacturer's minimum (often ~1 µA; typical healthy 1.5–5 µA) → clean or replace. Record the reading before and after cleaning — that pair of numbers is the whole proof.
2. **Grounding.** Poor burner ground causes exactly this and gets missed constantly.
3. **Flame quality.** Lifting, rolling, or yellow flame is a combustion problem, not a sensing problem.
4. **Rollout switch tripped** → **stop.** Rollout means flame went somewhere it should not. Blocked heat exchanger, blocked flue, or a cracked exchanger. Do not reset it and walk away.

## Runs but the house stays cold {#runs-not-warm}

1. **Temperature rise against the rating plate**, typically a 30–40°F window.
   - **Above the window** → not enough air. Filter, blower wheel, static pressure, blower speed.
   - **Below the window** → too much air, undersized load, or underfiring.
2. **Total external static pressure** against 0.5" w.c.
3. **Duct losses**, especially attic and crawlspace runs.
4. **Is it actually running, or short cycling?** See below.

## Short cycling on a limit {#short-cycling}

A furnace tripping the high limit is telling you it cannot get rid of the heat it is making. **The limit is doing its job — never bypass it.**

- Airflow: filter, coil, blower wheel, closed registers, undersized return.
- Blower speed too low for the firing rate.
- Overfiring — manifold pressure above plate.
- A genuinely failed limit switch, which is the *last* thing to suspect, not the first.

## Heat pump, running but cool air {#heat-pump}

Heat pump supply air is cooler than a furnace's by design — around 90–100°F feels lukewarm to a hand used to gas heat. Half of these calls are an explanation rather than a repair, and that explanation is worth giving well.

Check in this order:

1. **Is it actually in heating?** Reversing valve energised, correct thermostat configuration.
2. **Defrost.** Initiates and terminates correctly. An outdoor coil packed in ice that never clears is a defrost fault.
3. **Auxiliary / emergency heat** — staging, lockout, and whether the strips are actually energising.
4. **Reversing valve leaking through.** Looks exactly like low charge on gauges. Compare line temperatures.
5. **Charge and airflow**, same as cooling (`sop.field.no-cooling`).

**Aux heat running at 45°F outdoor is a control problem**, and it is also a bill the customer is going to call about. Say so before they see it.

## Before you leave a combustion appliance {#leaving}

Every no-heat call, every time:

- **Combustion analysis where an analyser is available** — flue CO air-free under 100 ppm acceptable, over 400 ppm is a FAIL and the appliance goes off.
- **Ambient CO re-checked** with everything running.
- **Full cycle observed** start to finish, after the repair.
- **Venting verified intact.**
- **Every safety finding written into the job and said to the customer in plain words** — including the ones they declined to act on.

> ⚠️ **Suspected cracked heat exchanger: shut down, red-tag, second set of eyes before condemning, and do not restart it to keep the house warm overnight.** That last part is the one that gets bargained with, and it is not yours to bargain with (`sop.field.diagnostics` §condemn).

## What gets recorded {#record}

- The **board flash code**, verbatim.
- **Where in the sequence it failed.**
- **Ambient CO on arrival and on departure.** Both, always, even at 0 ppm.
- **Flame sensor microamps before and after** if you cleaned it.
- **Temperature rise, manifold pressure, gas supply pressure, TESP.**
- **Vent condition** and any safety finding, including declined ones.

## Related

- The standard behind all of this: `sop.field.diagnostics`
- CO ladder and combustion thresholds: `reference.diagnostic-readings`
- Gas leak and CO emergencies: `protocol.emergency.triage`
- Cooling-side faults on a heat pump: `sop.field.no-cooling`
