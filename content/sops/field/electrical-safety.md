---
id: sop.field.electrical-safety
title: Electrical Safety — Working Dead, and the Times You Cannot
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-21
review_cadence_days: 90
tags: [safety, electrical, lockout, tagout, capacitor, arc-flash, disconnect, technician, field]
related: [sop.field.safety, sop.field.electrical, sop.field.diagnostics, reference.diagnostic-readings, sop.field.access-safety]
section: field-safety
order: 2
surfaces: [field, checklist]
acknowledgement: required
---

# Electrical Safety — Working Dead, and the Times You Cannot

> **Work it dead. Prove it is dead with a meter you have just proved works. Every time, including the time you are certain.**

Residential HVAC runs 240 volts at enough current to kill, in basements and attics where you are often grounded, sweating, and alone. The habits below are not for the rare dramatic fault. They are for the ordinary Tuesday when nothing seems wrong.

## The 60-second version {#field-card}

1. **Kill power at the disconnect**, not just the thermostat.
2. **Lock it, tag it, or keep it in your sight.**
3. **Live–dead–live**: prove your meter on a known source, test the circuit, prove the meter again.
4. **Discharge capacitors** before your hands go near them.
5. **One hand where you can**, and never a hand on grounded metal.
6. **If you must work live, you know exactly why** — see `#live`.

## Prove it dead {#prove-dead}

**A switch in the OFF position is a claim, not evidence.** Disconnects fail, someone else's wiring is not what the label says, and a "dead" circuit can be backfed from a second supply.

The sequence is **live–dead–live**:

1. **Live:** test your meter on a circuit you know is energised. This proves the meter, the leads and the battery.
2. **Dead:** test the circuit you are about to work on. Every leg, and each leg to ground — not just across.
3. **Live:** test the known source again. If the meter died between steps 1 and 2, you have just proved a dead circuit that is not dead.

**A non-contact tester is for a first look, never for proving dead.** It reports induced voltage and it reports nothing at all when its battery is flat — and it fails silently, which is the worst failure mode a safety tool can have.

## Lockout and control of the disconnect {#lockout}

Whoever turned it off is who turns it back on.

- **Lock or tag the disconnect** where the hardware allows it. Outdoor disconnects that accept a lock get one.
- **Where it cannot be locked** — a pull-out at the condenser, a breaker in a panel down the hall — **the pull stays in your pocket** or the disconnect stays in your line of sight.
- **Tell the customer, out loud**, which breaker is off and that it stays off until you say otherwise. A helpful homeowner restoring power while you are in the attic is a real event, not a hypothetical.
- **Before you re-energise**: hands clear, panels on, nobody in contact with the equipment. Say "powering it up" loudly enough to be heard.

## Capacitors {#capacitors}

**A run or start capacitor holds a charge after the power is off, including one that is already failed.**

- **Discharge every capacitor before it is near your hands**, with a properly rated resistor — not a screwdriver across the terminals. Shorting it damages the terminals, welds the blade, and throws sparks in a cabinet you may be leaning into.
- **Verify zero volts with the meter** after discharging. Assume nothing from the spark or its absence.
- **A bulging or leaking capacitor is handled as a chemical as well as an electrical hazard** — gloves, eye protection, and it leaves in a bag rather than in the customer's bin.

## Arc flash and the panel {#arc-flash}

The energy available at a residential service panel is enough to cause serious burns.

- **Never work inside an energised panel to make a repair.** Testing at a panel is a measurement, not a repair.
- **Stand to the side of a panel door as you open it**, not square in front of it.
- **One hand in, the other out of contact** — not in a pocket for show, but genuinely not completing a circuit through your chest.
- **Insulated tools, and dry hands, on dry footing.** If the floor is wet, the floor gets dealt with first.
- **A panel with burning smell, scorching, or heat you can feel through the cover is not ours.** Power off, customer told, licensed electrician. Say so plainly: we work on the equipment, not the service.

## When you genuinely must work live {#live}

Some measurements only exist under load — amp draw on a compressor, voltage at the contactor while it pulls in, capacitor microfarads under run conditions. `sop.field.electrical` is built on those readings.

**That is measuring live, and it is the only reason to be live.** The line is simple:

| Live is | Live is not |
|---|---|
| Taking a reading that cannot exist with the power off | Replacing a part because the disconnect is awkward to reach |
| Clamping a meter around a conductor | Pulling wire off a terminal to "save a trip down the ladder" |
| Watching a contactor pull in | Anything where both hands are in the cabinet |

When measuring live:

- **Set the meter before you open anything** — correct function, correct range, leads seated.
- **Plan the probe path first.** Where each hand goes, where your body is, what you will touch if you slip.
- **Nothing else in the cabinet.** No spare hand steadying a panel, no tool resting on the contactor.
- **Never alone in a wet location.** Standing water and live work do not go together at all — that is on the stop list in `sop.field.safety`.

## When it goes wrong {#failures}

**You get a tingle or a shock, however small.** Stop. Power down. Tell Dispatch — this is a reportable incident even if you feel fine. A small shock means the path exists, and next time the conditions may be worse.

**The disconnect is missing, painted over, or wired backwards.** Do not improvise around it. Kill the breaker, verify dead, and write the defect on the job — it is a finding the customer needs and an estimate we should be making.

**You find someone else's unsafe work** — a doubled-up breaker, a bypassed safety, a junction with no box, aluminium branch wiring at the unit. Document it, photograph it, tell the customer, and do not extend it. Our repair does not adopt their defect.

**You are on a ladder and need the power off.** Down first. Every time. Both hands belong on the ladder when you move — `sop.field.access-safety`.

### Hard rules

- Never work dead without proving dead, meter proved before and after.
- Never trust a non-contact tester to prove dead.
- Never short a capacitor with a screwdriver.
- Never make a repair inside an energised panel.
- Never leave a disconnect where someone else can restore it without your knowledge.
- Never work live in standing water or on a wet floor.
- Never conceal a shock, however minor.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Circuit proved dead with the live–dead–live sequence, disconnect controlled, capacitors discharged and verified, live work limited to measurements, findings documented |
| 1 | Worked safely but the disconnect was left uncontrolled, or a defect was noticed and not written down |
| 0 | Worked live for convenience, proved dead with a non-contact tester alone, shorted a capacitor, or a shock went unreported |

## Related

- Stop-work authority and the stop list: `sop.field.safety`
- The electrical complaint itself: `sop.field.electrical`
- Expected electrical values: `reference.diagnostic-readings` §electrical
- Ladders and access: `sop.field.access-safety`
