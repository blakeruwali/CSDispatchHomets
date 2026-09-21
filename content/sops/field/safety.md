---
id: sop.field.safety
title: Safety & Stop-Work Authority
department: field
owner: service-manager
status: published
version: 1
last_reviewed: 2026-09-21
review_cadence_days: 90
tags: [safety, stop-work, ppe, hazard, incident, near-miss, technician, field]
related: [sop.field.diagnostics, sop.field.electrical-safety, sop.field.access-safety, sop.field.no-heat, reference.diagnostic-readings, protocol.emergency.triage, sop.field.arrival, governance.acknowledgement]
section: field-safety
order: 1
surfaces: [field, checklist]
acknowledgement: required
---

# Safety & Stop-Work Authority

> **Any technician can stop any job, at any time, for any safety reason. You will never be questioned for it, and you will never be short-paid for it.**

That sentence is the whole document. Everything below explains how to use it.

## The 60-second version {#field-card}

1. **You can stop.** No permission needed, no explanation owed in the moment.
2. **Make it safe** — power off, gas off, people out, whatever the hazard needs.
3. **Tell the customer plainly** what you found and what happens next.
4. **Call Dispatch.** Not after you leave — from the property.
5. **Write it on the job** before you drive away.
6. **Never restart** something you shut down for safety to keep the peace.

## Why this is first, not last {#why}

Most safety documents are written to protect the company. This one is written because of how these calls actually go wrong.

A technician finds something genuinely dangerous at 4:40 PM on a Friday. The customer is upset, the board is full, the next job is waiting, and nobody wants to be the person who says the house has no heat tonight. So the appliance gets restarted "just until Monday."

That decision is never made by a reckless person. It is made by a conscientious one under pressure, trying to help. **This document exists to take that decision off you.** The rule is already made. You are carrying it out, not choosing it.

## Stop-work authority — what it actually means {#stop-work}

**You do not need approval to stop.** Not from Dispatch, not from the service manager, not from the owner.

- **You will not be penalized.** Not on your numbers, not in your one-to-one, not on your pay.
- **A stop is never "wrong" in hindsight.** If you shut a system down and it turns out to have been safe, that is a good outcome, not a mistake. A rule people are second-guessed on is a rule nobody uses.
- **It applies to anything** — the equipment, the building, an animal, a person, the weather, or your own condition.
- **It applies to a job you already started**, including one you are halfway through and one you have already been paid for.

**If anyone — a customer, a dispatcher, a manager — pressures you to continue after you have called a stop, that is escalated to the owner.** Including if the pressure comes from inside this company. Put it in writing on the job.

## The stop list {#stop-list}

These stop work immediately. This is not a judgement call.

| What you find | What happens |
|---|---|
| **Ambient CO at or above the action threshold** | Appliance off. At the evacuation threshold, everyone out and fire department — the ladder is in `reference.diagnostic-readings` §co and it has no exceptions in it |
| **Smell of gas** | No switches, no phone use inside, people out, gas off at the meter if safely reachable, utility called — `protocol.emergency.triage` |
| **Suspected cracked heat exchanger** | Shut down and red-tag. Second set of eyes before condemning. **Do not restart it to show the customer** (`sop.field.diagnostics` §condemn) |
| **Backdrafting or spillage at the flue** | Shut down. This is a CO event that has not happened yet |
| **Arcing, scorched, or melted wiring** | Kill power at the disconnect before anything else — `sop.field.electrical-safety` |
| **Standing water at electrical equipment** | Power off first, diagnose second |
| **Structure that will not hold you** | Attic joists, a soft roof, a rotted platform. No job is worth a ceiling |
| **Aggressive animal you cannot have secured** | Leave. Call Dispatch. This is a real and common injury |
| **A person who is threatening, intoxicated, or will not let you work safely** | Leave the property first, call Dispatch second |
| **You are impaired** — ill, exhausted, on medication that affects you | Call Dispatch before the next job, not after an incident |

**"Shut down" means it stays down.** Tagged, the customer told why, the reason written on the job, and Dispatch informed so the follow-up is booked. It does not mean off until you drive away.

## PPE — the baseline {#ppe}

Carried on every truck, used without being told:

- **Eye protection** — any time you are above your own head, cutting, drilling, brazing, or working live. Brazing and cutting get the right shade, not clear safety glasses.
- **Gloves matched to the task.** Cut-resistant for sheet metal, insulated for electrical, and nothing loose near a rotating blower.
- **Boots** — sturdy, closed, with grip. Note the interaction with shoe covers in `sop.field.arrival` §shoe-covers: covers come off for footing on ladders and wet floors, and that exception exists for exactly this reason.
- **Hearing protection** near a running blower in a confined mechanical room.
- **Respirator or N95** for attic insulation, heavy dust, biological growth in a pan or duct.
- **Headlamp**, so you are not holding a flashlight in a hand you need.

**Loose clothing, dangling lanyards, rings, watches and neck chains come off before you work near anything that spins or carries current.**

## Working alone {#alone}

You are almost always alone on a residential call, in someone's basement or attic, and that is the real risk profile of this trade.

- **Status the job honestly in ServiceTitan** — on site, in progress. That record is how anyone knows where you are.
- **No update on an open job for {{price:job_check_in}} and Dispatch checks in on you.** That is not surveillance, it is the only mechanism that notices something has happened to you.
- **Unreachable for {{price:tech_unreachable_window}} escalates to the dispatch manager** (`sop.dispatch.hours`). Do not let your phone go dark mid-job.
- **Tell someone before you go into an attic, crawlspace, or onto a roof** — the customer counts. `sop.field.access-safety`.

## When the customer pushes back {#pushback}

They will, and it is rarely hostility. It is a person being told their heat is off in January.

> "I understand completely, and I'm not going to leave you without a plan. But I can't turn this back on — it's producing carbon monoxide, and that's not something I'm able to sign off on. Here's what I can do right now."

Then actually do something: portable heat if we have it, a priority slot booked before you leave, a call to Dispatch about options, the manufacturer warranty checked. **A stop with no next step feels like abandonment. A stop with a plan is a service.**

What you never do:

- Restart it "just for tonight."
- Leave the decision with the customer. This one is not theirs to overrule, and saying so kindly is part of the job.
- Soften the finding so the conversation is easier. Write down what you found, in the words you would use if it were read back to you in a year.

## Incidents and near-misses {#incidents}

**Anything that hurt someone, could have hurt someone, or damaged property is reported from the property, before you leave.**

| What happened | What you do |
|---|---|
| **Injury, any severity** | Get care first. Then call Dispatch — including for a cut you think is nothing |
| **Property damage** | Tell the customer immediately, photograph it, call Dispatch before leaving (`sop.field.arrival` §failures) |
| **Near-miss** | Report it. The near-miss is the free lesson; the next one may not be |
| **Unsafe condition you did not cause** | Document it, tell the customer, write it on the job |

**Nobody has ever been disciplined here for reporting an incident.** People get disciplined for concealing one, because a concealed incident is the one that repeats and the one an insurer refuses.

### Hard rules

- Never restart a system you shut down for safety.
- Never work live when it can be worked dead — `sop.field.electrical-safety`.
- Never bypass a safety switch, a float switch, a pressure switch, or a limit to keep a unit running.
- Never enter a space you cannot get back out of.
- Never leave a gas leak or a CO event without the utility or the fire department involved.
- Never let schedule pressure — yours, Dispatch's, or the customer's — decide a safety question.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Hazards identified and acted on without prompting, customer told plainly with a next step, Dispatch called from the property, everything documented on the job |
| 1 | Hazard handled correctly but documented late or thinly, or the customer was left without a next step |
| 0 | A system on the stop list left running, a safety device bypassed, or an incident not reported |

## Related

- Electrical work practice: `sop.field.electrical-safety`
- Ladders, attics, crawlspaces and roofs: `sop.field.access-safety`
- CO thresholds and the evacuation ladder: `reference.diagnostic-readings`
- Gas leaks and CO emergencies: `protocol.emergency.triage`
- Combustion safety on a heat call: `sop.field.no-heat`
- Condemning equipment: `sop.field.diagnostics`
- Why this document is signed: `governance.acknowledgement`
