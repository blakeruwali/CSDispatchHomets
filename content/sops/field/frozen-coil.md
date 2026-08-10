---
id: sop.field.frozen-coil
title: "Complaint: Ice on the System"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-08-10
review_cadence_days: 90
tags: [diagnostics, frozen, ice, evaporator, airflow, charge, leak, complaint, field]
related: [sop.field.diagnostics, sop.field.no-cooling, reference.diagnostic-readings]
section: field-diagnostics
order: 3
surfaces: [field, checklist]
---

# Complaint: Ice on the System

> **Airflow first. Charge second. Always in that order — and the ice has to be gone before any reading you take means anything.**

A frozen coil is not a fault. It is the visible end of one, and there are only a handful of causes. This is the call where guessing is most tempting and most expensive, because a system iced up from a dirty filter and a system iced up from a leak look identical from the driveway.

## Why the order matters {#order}

An iced system gives you **false readings on every gauge**. Suction pressure is low because the coil is blocked with ice, not because the charge is low. A technician who hooks up to a frozen system, sees low suction, and adds refrigerant has just overcharged a system that was never low — and when it thaws, head pressure climbs, the compressor runs hot, and the callback is worse than the original call.

**You cannot diagnose a frozen system. You can only diagnose a thawed one.**

## On arrival {#arrival}

1. **Turn the compressor off, leave the blower running.** Fan ON at the thermostat with cooling off is the fastest safe thaw.
2. **Protect the house.** A thawing coil produces a lot of water at once, and a drain pan that was coping is about to not cope. Towels, wet vac, and check the secondary pan before you walk away from it.
3. **Photograph the ice** before it goes. It is evidence, it explains the invoice, and it will not exist in twenty minutes.
4. **Never chip or scrape ice off a coil.** Fins and tubing damage easily, and a punctured coil turns a $200 call into a compressor.
5. **Set expectations with the customer:** a full thaw is commonly 30–90 minutes, sometimes longer.

**If you cannot wait for the thaw**, that is a legitimate two-visit job. Say so plainly, price it honestly, and schedule the return before you leave. What is not acceptable is guessing a repair so the job closes today.

## While it thaws — find the cause {#while-thawing}

The thaw is not dead time. Everything on this list can be done with the coil still frozen, and one of them is almost always the answer.

### Airflow — check all of it before you touch a gauge {#airflow}

The large majority of frozen coils are airflow, and airflow problems are cheaper to fix and easier to prove.

| Check | Looking for |
|---|---|
| **Filter** | Loaded, collapsed, or a high-MERV filter in a slot too small for it |
| **Indoor coil face** | Dirt mat on the entering side — pull the access and actually look |
| **Blower wheel** | Loaded blades. It can look clean from the housing and be half full |
| **Total external static pressure** | Against 0.5" w.c. rated |
| **Registers and returns** | Closed, blocked by furniture, or covered by a rug |
| **Blower speed / ECM setting** | Especially if someone has been in the equipment before you |
| **Duct restriction** | Crushed flex, closed dampers, undersized return |

### Then the rest {#other-causes}

- **Low charge from a leak.** The second most common cause, and the one that comes back if you only add refrigerant.
- **Metering device** — TXV stuck or restricted, blocked fixed orifice.
- **Running the AC in cold weather.** Below roughly 60°F outdoor, a standard system will ice up regardless of health. Sometimes the entire diagnosis.
- **Failed indoor blower** or a blower running on the wrong tap.
- **Thermostat set very low with continuous run**, particularly overnight.

## After the thaw {#after-thaw}

**Now the readings mean something. Take the full set** (`reference.diagnostic-readings`):

1. Temperature split, target 15–22°F.
2. TESP against 0.5" w.c.
3. Superheat and subcooling.
4. Compressor and blower amps.

| What you find | What it points at |
|---|---|
| Split and static normal, charge correct | The restriction you already cleared was the cause |
| High static, low split | Airflow — and the ice will return if it is not fixed |
| Low subcooling, high superheat, correct airflow | Undercharge → **leak search** |
| Low superheat with correct airflow | Metering device |

> ⚠️ **A system low on refrigerant has a leak.** Refrigerant is not consumed. Adding gas without a leak search means the customer is on the phone again in weeks, and the second conversation is much harder than the first. Search, find, price it. If they decline and want enough charge to get through a heatwave, that is a legitimate choice — record that it was offered, declined, and that the system will ice again.

## What you tell the customer {#customer}

Plain and specific, because "your coil froze" explains nothing:

> "The ice was the symptom. What caused it was [the filter / a dirty blower wheel / low refrigerant from a leak]. I've cleared the ice and [fixed X]. If we don't deal with the cause, it will freeze again — here's what that looks like."

If the cause was a filter, **say that it is a filter and price it like a filter.** The trust you earn from a cheap honest answer on a hot day is worth more than the ticket you did not write.

## What gets recorded {#record}

- **Photo of the ice** before thawing.
- **What was frozen** — indoor coil, suction line, outdoor unit, or all of it.
- **Filter condition and size**, and TESP.
- **All post-thaw readings.** Pre-thaw gauge readings are not valid and should not be entered as if they were.
- **Cause identified**, and whether a leak search was performed.
- **Whether a return visit was needed** for a full thaw.

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Where a cooling call starts: `sop.field.no-cooling`
- Targets and thresholds: `reference.diagnostic-readings`
