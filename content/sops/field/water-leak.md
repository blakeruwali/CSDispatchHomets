---
id: sop.field.water-leak
title: "Complaint: Water Leaking"
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostics, complaint, field, condensate, drain, pan, float-switch, water, leak]
related: [sop.field.diagnostics, reference.diagnostic-readings, sop.field.frozen-coil, sop.field.equipment-capture]
section: field-diagnostics
order: 4
surfaces: [field, checklist]
---

# Complaint: Water Leaking

> **Water is a symptom, never the fault. Find what put it there, prove it with a reading, and price the cause — not the puddle.**

The customer sees water on a ceiling or a floor and wants it stopped. Stopping it takes ten minutes. Finding out why it started is the visit, and it is the difference between a repeat call in August and a job that holds.

## When this applies {#applies}

Any call where water appears at or below an air handler, furnace, coil, condenser, mini-split head, or a line set. If the water is coming from plumbing rather than HVAC, stop and hand it to the plumbing side — a supply line above a furnace is not our diagnosis to guess at.

If the complaint is *ice* rather than water, work `sop.field.frozen-coil` first. A frozen coil that thaws while you drive to the call presents as a leak, and it is the single most common misread on this page.

## The execution ladder {#execution}

Work it in this order. Do not skip to step 4 because the trap looks obvious.

1. **Make it safe and stop the damage.** Power the system down if water is near electrical. Shop-vac the pan. Protect the ceiling or floor before you diagnose — a customer watching you diagnose while their drywall soaks will not hear a word of the findings.
2. **Establish where the water is, precisely.** Primary pan, secondary pan, the drain line itself, a ceiling stain three feet from the unit, or the line set. Photograph it before you touch anything. That photo is the evidence for the estimate.
3. **Check the float switch.** Is it present, is it wired, is it tripped? A tripped float that did its job means the drain is blocked — that is your answer, not a nuisance to bypass. **A missing float switch is a finding you write down on every one of these calls.**
4. **Test the primary drain.** Pour water into the pan and watch it clear. Slow or no flow is a blockage. Verify the trap is present, correctly configured, and primed — an unprimed or missing trap on a negative-pressure air handler will pull air and hold water in the pan all day.
5. **Clear and verify.** Vacuum from the termination, flush the line, then pour again and watch it run clean. **Re-verify after clearing or you have not finished the repair.**
6. **If the drain is clear and water is still appearing, it is not a drain problem.** Move to the split below.

## The split — what the water actually means {#the-split}

| What you observe | What it usually is |
|---|---|
| Pan full, drain slow, float tripped | Blocked primary drain / dirty coil shedding biofilm |
| Pan dry, water at the line set | Missing or damaged insulation — sweating, not leaking |
| Water only when the system runs hard | Undersized or negative-pressure trap, or airflow blowing condensate off the coil |
| Ceiling stain away from the unit | Secondary pan overflow, or drain line broken inside the ceiling |
| Ice on the coil, water after it melts | `sop.field.frozen-coil` — charge or airflow |
| Water at a horizontal furnace / coil in an attic | Pan rusted through, or the drain pitch is wrong |
| Rust and staining, no active water today | Chronic, long-running. Document it — it changes the replacement conversation |

**Measure before you conclude.** Airflow and charge readings belong on a leak call whenever the coil is involved: total external static pressure, temperature split, and superheat/subcool per `reference.diagnostic-readings`. A coil freezing and thawing looks like a plumbing problem and is a refrigerant or airflow problem.

## What you say {#verbatim}

When you have found the cause, state cause first, fix second, price last:

> "Here's what I found. Your drain line was blocked, which backed the water up into the pan until the safety switch shut the system off — that switch is what stopped this from getting into your ceiling. I've cleared the line and tested it. The reason it blocked is the coil above it is dirty, so this will come back next season unless we address that too."

When there is no float switch:

> "One thing I want you to know about: there's no safety switch on this drain. If it blocks again while you're at work, there's nothing to shut the system off — the water goes into the ceiling instead. It's a small part, and I'd rather you had one."

When the pan is rusted through in an attic:

> "The pan under this unit has rusted through, so the water isn't being caught anymore. I'll show you the photo. I can give you the options for that today — I don't want to patch something that's going to be back over your bedroom in a month."

## When it goes wrong {#failures}

**The drain clears and the customer says "so it's fixed?" while the coil is filthy.** Do not agree. Clearing the line without naming the cause is how the same call books again in six weeks with an angrier customer. Say the cause out loud and put it on the invoice, even if they decline the coil cleaning.

**The float switch is tripped and the system won't run in July.** The temptation is to bypass it to "get them cooling tonight." **Never bypass a float switch.** That is the switch working. Bypassing it makes us the cause of the ceiling damage.

**You cannot find active water.** Do not invent a cause. Document the staining, take readings, note the conditions that would reproduce it, and tell the customer plainly what you did and did not find. An honest "I could not reproduce it, here is what I checked and here is what to watch for" is a defensible visit. A guessed repair is not.

**The water turns out to be plumbing.** Stop, say so, and get the right trade booked. Do not run a partial plumbing repair on an HVAC ticket.

### Hard rules

- Never bypass or remove a float switch.
- Never leave a drain unverified after clearing it — pour and watch.
- Never close a leak call without recording whether a float switch exists.
- Never replace a rusted pan without photographing the original.
- Never price the puddle. Price the cause.

## What gets recorded {#record}

- Photo of the water, before you touch it, and a photo after the repair.
- Float switch: present / absent / tripped / bypassed-on-arrival.
- Primary drain: flow before, flow after.
- Trap: present, primed, correctly configured — yes or no.
- Coil condition and static pressure.
- Superheat / subcool and temperature split if the coil was involved.
- Every declined recommendation, in the customer's hearing and in the job notes.

Equipment data plate captured per `sop.field.equipment-capture` — no exceptions on this call type either.

## QA scoring {#qa}

| Score | What it looks like |
|---|---|
| **2** | Cause identified and proven with a reading or photo. Drain verified after clearing. Float switch status recorded. Customer heard the cause in plain words. |
| **1** | Water stopped, drain cleared, but the underlying cause was not named or not documented. |
| **0** | Float switch bypassed, drain not re-verified, no photos, or the invoice describes the puddle rather than the fault. |

## Related

- The standard behind all of this: `sop.field.diagnostics`
- Ice first, water second: `sop.field.frozen-coil`
- Thresholds and expected readings: `reference.diagnostic-readings`
