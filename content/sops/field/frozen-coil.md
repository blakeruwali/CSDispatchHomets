---
id: sop.field.frozen-coil
title: "Complaint: Ice on the System"
department: field
owner: service-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostics, frozen, ice, evaporator, airflow, charge, leak, complaint, field]
related: [sop.field.diagnostics, sop.field.no-cooling, reference.diagnostic-readings]
section: field-diagnostics
order: 3
surfaces: [field, checklist]
---

# Complaint: Ice on the System

> **Airflow first, charge second, always in that order — and the ice has to be gone before any reading you take means anything.**

## When this applies {#applies}

Any complaint or observation of ice on the indoor coil, the suction line, or the outdoor unit — whether the customer called about ice specifically or you found it while working a "not cooling" call. A frozen coil is not a fault; it is the visible end of one, and there are only a handful of causes. A system iced from a dirty filter and a system iced from a leak look identical from the driveway, which is exactly why this document exists.

## Safety gate {#safety}

- **A thawing coil produces a large amount of water fast.** Check the secondary pan and the condensate path before you leave the area, and protect flooring/finished ceilings below the unit.
- **Never chip or scrape ice off a coil.** Fins and tubing damage easily, and a punctured coil turns a small call into a compressor replacement.
- **Never hook gauges to a frozen system and treat the reading as real.** A frozen coil produces artificially low suction pressure. Adding refrigerant to it based on that number overcharges a system that was never low, and when it thaws, head pressure climbs and the compressor runs hot.

## The execution ladder {#execution}

1. **Turn the compressor off, leave the blower running.** Fan ON at the thermostat with cooling off is the fastest safe thaw.
2. **Protect the house** — towels, wet vac, check the secondary pan.
3. **Photograph the ice** before it goes. It is evidence, it explains the invoice, and in twenty minutes it won't exist.
4. **Set expectations with the customer:** a full thaw is commonly 30–90 minutes, sometimes longer. If you cannot wait for it, that is a legitimate two-visit job — say so, price it honestly, schedule the return before you leave.
5. **While it thaws, work the airflow checks below.** The thaw is not dead time.
6. **After the thaw, take the full reading set** — this is the only point at which readings mean anything.
7. **Name the cause with the number that proves it**, and price the repair (`sop.field.diagnostics` §prove).

## The split {#the-split}

| What you observe while thawing | Where it usually points |
|---|---|
| Filter loaded, coil face dirty, or blower wheel loaded | `#airflow` |
| Airflow checks all clean, static pressure normal | `#other-causes` — likely charge or metering |
| Outdoor temperature below roughly 60°F when it iced | Running AC in cold weather — often the entire diagnosis |
| Thermostat set very low with continuous overnight run | Operating condition, not a fault |

### Airflow — check all of it before you touch a gauge {#airflow}

The large majority of frozen coils are airflow, and airflow problems are cheaper to fix and easier to prove.

| Check | Looking for |
|---|---|
| **Filter** | Loaded, collapsed, or a high-MERV filter in a slot too small for it |
| **Indoor coil face** | Dirt mat on the entering side — pull the access and actually look |
| **Blower wheel** | Loaded blades. Can look clean from the housing and be half full |
| **Total external static pressure** | Against 0.5" w.c. rated |
| **Registers and returns** | Closed, blocked by furniture, or covered by a rug |
| **Blower speed / ECM setting** | Especially if someone has been in the equipment before you |
| **Duct restriction** | Crushed flex, closed dampers, undersized return |

### Then the rest {#other-causes}

- **Low charge from a leak.** The second most common cause, and the one that comes back if you only add refrigerant.
- **Metering device** — TXV stuck or restricted, blocked fixed orifice.
- **Running the AC in cold weather.** Below roughly 60°F outdoor, a standard system will ice up regardless of health.
- **Failed indoor blower**, or a blower running on the wrong tap.
- **Thermostat set very low with continuous run**, particularly overnight.

## After the thaw {#after-thaw}

Take the full set (`reference.diagnostic-readings`): temperature split (target 15–22°F), TESP against 0.5" w.c., superheat and subcooling, compressor and blower amps.

| What you find | What it points at |
|---|---|
| Split and static normal, charge correct | The restriction you already cleared was the cause |
| High static, low split | Airflow — and the ice returns if it isn't fixed |
| Low subcooling, high superheat, correct airflow | Undercharge → **leak search** |
| Low superheat with correct airflow | Metering device |

## Common misdiagnoses {#misdiagnoses}

| Looks like | Is actually | Caught by |
|---|---|---|
| "Low on refrigerant" | Airflow restriction on a fully-charged system | Airflow checks done before gauges are ever connected |
| "Needs a recharge, added gas on the spot" | Frozen coil giving false low-suction reading | Never gauge a system with ice still on it |
| "Bad TXV" | Simple filter/blower loading | Full airflow check before touching the metering device |
| "One-time thing, ran fine after" | Cold-weather operation masking an underlying airflow issue | Ask about outdoor temp at time of failure and re-check airflow anyway |

## What you say {#verbatim}

> "The ice was the symptom, not the problem. What caused it was [the filter / a dirty blower wheel / low refrigerant from a leak]. I need to let it thaw fully before I can measure anything accurately — that's usually thirty to ninety minutes."

> "I can't test a frozen system honestly. Any reading I took right now would be wrong and could lead me to add refrigerant your system doesn't need."

> "If we don't deal with the cause, it's going to freeze again. Here's what that looks like, and here's the difference between the cheap fix and the one that actually holds."

If the cause was a filter, say that plainly and price it like a filter — a cheap honest answer on a hot day is worth more than the ticket you didn't write.

## When it goes wrong {#failures}

**You gauge up before the thaw is complete and the readings look "low."** Stop. Do not add refrigerant. Wait for a full thaw and re-check. If refrigerant was already added on a partial thaw, say so in the notes and recheck subcooling once fully thawed — you may need to recover the excess.

**Customer wants you to chip the ice off to speed things up.** Refuse. Explain the coil damage risk in plain terms and offer the fan-only thaw timeline instead, or reschedule the return visit.

**Airflow checks come back clean and you still find ice re-forming during the visit.** Move to charge and metering device — don't keep re-checking airflow you've already ruled out.

**Customer declines the leak search and wants a charge to get through a heatwave.** That's a legitimate choice on their part. Record that it was offered, declined, and that the system will ice again.

### Hard rules

- Never scrape or chip ice off a coil.
- Never record or act on a gauge reading taken while ice is still present.
- Never add refrigerant without a leak search, or without documenting that one was offered and declined.
- Never close the ticket without identifying an airflow cause versus a charge cause — "it thawed and ran fine" is not a diagnosis.

## What gets recorded {#record}

- **Photo of the ice** before thawing.
- **What was frozen** — indoor coil, suction line, outdoor unit, or all of it.
- **Filter condition and size**, and TESP.
- **All post-thaw readings.** Pre-thaw gauge readings are not valid and should not be entered as if they were.
- **Cause identified**, and whether a leak search was performed.
- **Whether a return visit was needed** for a full thaw.

## QA scoring {#qa}

| Score | What the file shows |
|---|---|
| **2** | Ice photographed, full thaw completed before any reading taken, cause identified with post-thaw numbers, leak search performed or declined and documented |
| **1** | Correct outcome, but pre-thaw readings recorded as if valid, or the return-visit reasoning isn't written down |
| **0** | Refrigerant added or a part condemned based on a reading taken while the coil was still iced |

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Where a cooling call starts: `sop.field.no-cooling`
- Targets and thresholds: `reference.diagnostic-readings`
