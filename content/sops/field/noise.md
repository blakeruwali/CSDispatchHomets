---
id: sop.field.noise
title: "Complaint: Noise"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostics, complaint, field, noise, rattle, squeal, grinding, bearing, blower]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.electrical, sop.field.no-heat]
section: field-diagnostics
order: 6
surfaces: [field, checklist]
---

# Complaint: Noise

> **A noise call is a race between the customer's patience and a bearing. Reproduce the sound, name it, and decide one thing first: does this system keep running tonight or not?**

Noise is the only complaint where the system is still working. That makes it the easiest call to under-diagnose and the easiest one to lose credibility on — the customer already knows something is wrong, and if you cannot reproduce it they conclude you did not look.

## When this applies {#applies}

Any call booked as a sound: rattle, squeal, grind, bang, hum, hiss, gurgle, or "it's louder than it used to be." Combustion noise — rumble, boom on ignition, flame roll — goes to `sop.field.no-heat` first, because that is a safety sequence, not a noise diagnosis.

## The execution ladder {#execution}

1. **Get the customer to describe it before you open anything.** When does it happen — startup, shutdown, all the time? How long has it been getting worse? Ask them to imitate it. This costs ninety seconds and narrows the list more than any tool will.
2. **Reproduce it.** Cycle the system and stand there. If it only happens at 2 a.m., ask them to record it on their phone next time and note that on the ticket. **Never diagnose a noise you have not heard.**
3. **Locate it by isolating.** Indoor or outdoor. Blower or burner. Running or coasting down. Kill power and spin the wheel by hand. Pull the blower and run the system without it if the design allows.
4. **Classify it** using the split below.
5. **Make the run/no-run call.** Grinding, metal-on-metal, and a compressor screaming on start are all "off now" sounds. Say so before you talk price.
6. **Prove it with a number where one exists** — amp draw, static pressure, bearing play measured by hand, blower wheel imbalance visible on inspection. `reference.diagnostic-readings` §electrical for draw thresholds.

## The split {#the-split}

| Sound | Where it points | Keep running? |
|---|---|---|
| **Squeal, continuous** | Blower motor bearings, belt on older units, dry motor | Usually yes, short term — it is a warning, not a failure |
| **Squeal on startup only** | Belt slip, capacitor weak, motor struggling to start | Check start capacitor and amp draw before dismissing it |
| **Grinding, metal on metal** | Failed bearing, blower wheel hitting the housing, motor mount collapsed | **No. Shut it down.** Running it destroys the housing and, on a furnace, moves an airflow problem into a limit trip |
| **Rattle at startup / shutdown only** | Loose panel, loose duct connection, blower wheel out of balance, cabinet screws | Yes — but find it. A rattle you cannot locate becomes a callback |
| **Bang / boom on ignition** | Delayed ignition — gas pooling before it lights | **No. This is a combustion fault.** `sop.field.no-heat` |
| **Loud hum, no start** | Contactor chatter, failed run capacitor, locked rotor | **No.** Amp draw immediately — a compressor drawing locked-rotor amps is being destroyed while you listen |
| **Buzz at the outdoor unit** | Contactor, loose panel, transformer | Diagnose; usually not urgent |
| **Hiss** | Refrigerant leak, or duct leak on a pressurised run | Leak search — do not hand-wave it |
| **Gurgle / bubbling** | Low charge, or condensate trap pulling air | Charge readings, then the trap |
| **Whistle at registers or filter** | Static pressure. Undersized return, filter too restrictive, closed dampers | TESP against 0.5" w.c. |
| **Pop / ticking in ductwork** | Thermal expansion, usually benign | Yes — explain it rather than sell it |

## What you say {#verbatim}

Reproducing the sound in front of the customer is the highest-value ninety seconds of the visit:

> "Come stand here with me for a second — I want you to hear what I hear when it starts. That's the sound, right? Good. That's the blower bearing, and here's how I know: with the power off, this wheel should spin free and quiet. Feel that grinding? That's metal riding on metal."

When it must come off tonight:

> "I need to be straight with you: this one I don't want running. That grinding is the motor bearing failing, and every hour it runs it's chewing into the housing behind it — which turns a motor repair into a motor and housing repair. I'd rather shut it down tonight and get you the options now."

When the sound is benign:

> "Good news — that ticking is the metal expanding as the duct warms up. It's not a fault and there's nothing to fix. If it ever turns into a bang or a scrape, call me back, because those are different sounds entirely."

Telling a customer nothing is wrong, clearly and confidently, earns more trust than a small sale does.

## When it goes wrong {#failures}

**You cannot reproduce it.** This is the most common outcome and it is not a failure — it is a result. Document precisely what you tested, ask the customer to record it, and offer to return. Do not replace a part on a sound you never heard.

**The customer wants it running anyway after you condemn it.** Say the consequence once, plainly, put the refusal in writing on the job, and do not restart a grinding blower or an ignition-banging furnace to keep the peace. That decision is not the customer's to override — same principle as `sop.field.diagnostics` §condemn.

**You find the rattle is a loose panel.** Tighten it, and still complete the diagnostic properly. A ten-second fix does not exempt you from readings, equipment capture, or documentation.

**The noise is the second complaint on the ticket.** Work both. A noise noticed alongside weak cooling is usually one fault, not two.

### Hard rules

- Never diagnose a noise you have not heard.
- Never restart a grinding motor or a furnace with delayed ignition.
- Never quote a part on a sound alone — get a reading or a visible cause.
- Never bill "no problem found" without documenting what you tested.

## What gets recorded {#record}

- The sound, in the customer's words and yours.
- When it occurs: startup / shutdown / continuous / intermittent.
- Whether you reproduced it. If not, say so explicitly.
- Amp draw on the suspect motor, and rated FLA.
- Total external static pressure if the sound is airflow-related.
- Run/no-run decision and the reason.
- Any declined recommendation.

## QA scoring {#qa}

| Score | What it looks like |
|---|---|
| **2** | Sound reproduced and demonstrated to the customer, cause proven with a reading or visible defect, run/no-run stated clearly, everything documented. |
| **1** | Cause identified but not demonstrated, or no supporting reading recorded. |
| **0** | Part quoted or replaced on a sound never heard, or an unsafe unit left running. |

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Combustion noise: `sop.field.no-heat`
- Amp draw and electrical thresholds: `sop.field.electrical`, `reference.diagnostic-readings`
