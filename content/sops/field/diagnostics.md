---
id: sop.field.diagnostics
title: Diagnostics — Proving the Cause Before You Quote
department: field
owner: service-manager
status: published
version: 3
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostics, diagnosis, root-cause, readings, measurement, technician, field, callback, servicetitan]
related: [sop.field.equipment-capture, reference.diagnostic-readings, sop.csm.tools, sop.csm.diagnostic-fee, sop.csm.symptom-clarification, reference.guarantees, sop.csm.warranty-callback, governance.acknowledgement]
section: field-standards
order: 4
surfaces: [field, checklist]
acknowledgement: required
---

# Diagnostics — Proving the Cause Before You Quote

> **A part is not diagnosed until you have measured it failing. Every diagnostic ends with a named cause, the readings that prove it, and a written price — every time, on every call.**

This is the master standard. Every complaint doc — no-heat, no-cooling, frozen coil, and whatever else gets written after this one — sits underneath it. Those documents tell you where to start on a given symptom. This one tells you what counts as proof, when to stop and condemn something, and what has to be on the page before you leave.

## When this applies {#applies}

Every diagnostic call, residential or commercial, regardless of system type. There is no complaint small enough to skip this, and no customer in enough of a hurry to make it optional.

## The 90-second version {#field-card}

1. **Ask the customer, then verify it yourself.** Never diagnose someone else's description.
2. **Safety first.** Gas, CO, water, scorched wiring — stop, make safe, escalate. Nothing below outranks this.
3. **Capture the equipment** before you touch a tool (`sop.field.equipment-capture`).
4. **Open the point-inspection form for that system** and work every point — not just the one you suspect (`#which-form`).
5. **Name the cause and prove it with a number.** "Capacitor reads 21.4 µF, rated 45 — failed."
6. **Ask why it failed.** The part is the symptom; something killed it.
7. **Write the price in ServiceTitan.** Always, even when the answer is "no fault found."
8. **After the repair, take the readings again** and record them.

**Realistically 25–45 minutes on a straightforward call.** That is the real cost, and this document is not going to pretend otherwise.

## What "diagnosed" means here {#definition}

This is the whole document in one paragraph, so read it twice.

**A diagnosis is a cause you have measured, not a part you suspect.** "Bad capacitor" is not a diagnosis. "Run capacitor reads 21.4 µF against 45 µF rated, compressor drew locked-rotor amps on start attempt" is a diagnosis. The difference is not paperwork. The first is a guess that happens to be right most of the time; the second is the reason we can charge for expertise, stand behind the repair, and win the argument when a customer or a manufacturer pushes back six months later.

**The finding you present to the customer has to be the finding you actually measured — never a finding you inferred and are presenting as if it were tested.** If you inferred it because you couldn't test it on site, say so in those words, both to the customer and in the note. "I couldn't test the reversing valve directly, but the line temperatures point to it leaking through" is honest. Presenting the same guess as a tested fact is not a shortcut, it's a misrepresentation, and it is the one thing in this document with no acceptable excuse.

Three things have to be true before you quote:

1. **You measured the failure.** A number, taken by you, on this visit.
2. **You know why it failed.** Not always fully — but you looked, and what you found or ruled out is written down.
3. **The reading is in ServiceTitan**, not only in your head or on a scrap of paper.

Miss any one of them and you have not diagnosed anything. You have shopped.

## What this does for you {#for-you}

**It is the single biggest thing that keeps you off unpaid return trips.** Almost every callback traces to the same root: a part was replaced, the thing that killed it was not, and it killed the new one too. You went back for free. A contactor replaced without checking why it welded is a job you're going to do twice.

**It is what makes a big ticket stick.** A customer approves a $1,400 repair when the tech shows them a reading and explains what it means. They approve a $260 repair and argue about it when the tech just says the part is bad. The measurement is the sales tool.

**It protects you when it goes wrong.** If a compressor fails a month later and your file shows correct subcooling, correct amp draw, and a clean airflow reading at the time you left, that's a system that failed. Without them, it's a tech who missed something. Same job, two completely different conversations.

**It stops you being second-guessed.** The readings are the argument. Nobody in the office is in a position to overrule a number you took at the unit.

## The sequence {#sequence}

Deviating is fine when the job calls for it. Skipping is not — and if you skip a step, the note says which one and why.

### 1. Talk to the customer before you touch anything {#customer}

The CSM captured a symptom at booking (`sop.csm.symptom-clarification`). Confirm it in person and get the three things the phone never captures:

- **When did it start, and what changed around then?** Storm, power cut, new thermostat, someone "fixed" something.
- **Is it constant or intermittent?** Intermittent changes the entire approach — see below.
- **Has anyone else worked on it?** Including the homeowner. Highest-yield question on the list, most often skipped.

### 2. Safety gate {#safety}

Before diagnosis, before equipment capture, before anything: if you find any of these, **stop, make it safe, and escalate.**

| What you find | What you do |
|---|---|
| Smell of gas / positive leak detection | Shut off gas at the appliance. Get people out if it's strong. Utility gets called, then dispatch. No ignition sources, including light switches. |
| CO detected in the living space | Shut the appliance down. Ventilate. Occupants outside. Fire department for anything above a trace. |
| Suspected cracked heat exchanger | **Shut down and red-tag. Do not restart it to "show" the customer.** Second set of eyes required before condemning — see `#condemn`. |
| Scorched, melted or arcing wiring | Kill power at the disconnect before anything else. |
| Standing water at electrical equipment | Power off first, diagnose second. |
| Backdrafting / spillage at the flue | Shut down. This is a CO event waiting to happen. |

**Every one of these gets written into the job and told to the customer in plain words before you leave.** A hazard you found and mentioned casually is a hazard nobody can prove you found.

Nothing in this document — not the time it takes, not the fee conversation, not a customer in a hurry — outranks this table.

### 3. Verify the complaint yourself {#verify}

Run the system and observe the failure with your own eyes and instruments. If the customer says it's not cooling, put a thermometer on it. If they say it's noisy, hear the noise.

**If you can't reproduce it, say so and go to `#no-fault`.** Don't "fix" a complaint you never witnessed. That's how a working capacitor gets replaced and the actual intermittent fault comes back next week with your name on the last invoice.

### 4. Capture the equipment {#equipment}

Every unit at the location, plate photographed, before you start work. That procedure is its own document and it is not optional: `sop.field.equipment-capture`.

The diagnosis needs it anyway. Model and serial are how you know the design temperature rise, the correct refrigerant charge method, the rated amps you're measuring against, and whether the part is still under manufacturer warranty — which changes the price you're about to quote.

### 5. Work every point on the form {#readings}

Not just the point covering the part you already suspect.

**The ServiceTitan point-inspection form is the diagnostic record.** It is not paperwork that runs alongside the diagnosis — working it *is* the diagnosis, and it prints as the customer's report. Which form goes with which system is in `#which-form`; the thresholds behind the grades are in `reference.diagnostic-readings`.

Grade every point, including the ones that come back **PASS**. A passing point is evidence — it's how you rule a cause out, and it's what proves, later, that the rest of the system was healthy when you left it.

**Where a point has both a grade and a number, fill both.** The grade is what the customer reads. The number is what a manager, a manufacturer or the next technician can actually check, and it's the difference between a report and a receipt.

**"UNABLE TO TEST" is a real answer.** A system that won't run can't be measured, and saying so costs you nothing. Grading a point PASS because you couldn't test it is the one thing here that's genuinely dishonest — it puts your signature behind a test you did not perform.

This is the step people cut when they're running late, and it's the step that pays for itself. The point you skipped is the one that explained the failure.

### Which form {#which-form}

One form per system, chosen by what you're standing in front of:

| System | Form |
|---|---|
| Ducted air conditioner | **18-Point Ducted Air Conditioner Inspection** |
| Ducted heat pump | **22-Point Ducted Heat Pump Inspection** |
| Ductless mini split | **18-Point Ductless Mini Split Inspection** |
| Gas or oil furnace | **Complete Furnace Inspection** |
| Boiler | **Complete Boiler Inspection** |
| Ductwork, as the subject of the visit | **18-Point Ductwork Evaluation** |
| Indoor air quality, as the subject of the visit | **18-Point Indoor Air Quality Assessment** |

**Two systems at the location means two forms**, the same way it means two equipment records. The furnace form does not cover the condenser.

> ⚠️ **The "Full System Evaluation" forms are retired.** Three of them — heat pump, ductwork and IAQ — duplicated the numbered inspections above. If one is still visible to you in ServiceTitan, it hasn't been removed yet: **use the numbered form and tell the Service Manager the old one is still showing.**

### 6. Name the cause and prove it with a number {#prove}

Write it in this shape:

> **Cause:** Run capacitor failed. **Proof:** Measured 21.4 µF against 45 µF rated (−52%). Compressor attempted start, drew LRA, tripped on internal overload.

Not this shape:

> Bad cap.

The two most-replaced parts in this trade are capacitors and contactors, and they're the two most often replaced without measurement because they're cheap and usually the answer. **Usually is not a diagnosis.** Measure them anyway — it takes forty seconds and it's the difference between a professional finding and a lucky guess.

**Never condemn a part you have not tested.** If you can't test it on site with what you carry, say so in the note and explain what you're inferring from — and say the same thing to the customer, in those words.

### 7. Ask what killed it {#root-cause}

The failed part is usually a symptom of something upstream. You don't have to solve it to a certainty every time, but you do have to look — and write down what you found or ruled out.

| Failed part | What to check before you call it done |
|---|---|
| Run capacitor | Compressor amp draw, condenser fan condition, head pressure, ambient conditions, voltage at the unit |
| Contactor (welded or pitted) | Voltage drop, low-voltage control fault, short cycling, correct sizing |
| Compressor | Charge, airflow, metering device, cleanliness of both coils, electrical supply, oil condition |
| Blower motor | Static pressure, filter condition, wheel loading, duct restriction |
| Ignitor (repeat failure) | Gas pressure, flame sensor, control board cycling, correct part number |
| Frozen evaporator | Airflow first, charge second, and always in that order |
| Repeat drain clogs | Slope, trap design, pan condition, IAQ |

**"Replaced the part, didn't check why" is the single most common cause of a callback**, and a callback comes out of a paid slot you could have billed. This isn't the office asking for extra work — it's the step that keeps you from doing this job twice.

### 8. End with a written price {#price}

The customer paid **{{price:diagnostic_residential}}** residential or **{{price:diagnostic_commercial}}** commercial for exactly this: a tech comes out, diagnoses the problem, and gives a written repair price (`sop.csm.diagnostic-fee`). That is the promise the CSM made on the phone.

**So every diagnostic ends with a price in ServiceTitan.** No exceptions:

- **A repair we can do** → priced, presented, approved or declined, recorded either way.
- **A system that should be replaced rather than repaired** → the repair still gets priced, so the customer can see the comparison they're actually being asked to make. Then the replacement conversation.
- **A part we have to order** → priced, with the return visit scheduled before you leave.
- **No fault found** → still a written outcome and still a record. See `#no-fault`.
- **Customer declines everything** → the price stays on the job. It's what the next tech, and the next conversation, starts from.

A diagnostic that ends with a verbal "it's gonna be about six hundred" has not delivered what was sold. The fee bought a written price.

The form closes this out for you, and every one of these is required:

- **Overall Result** — passed / minor items / repairs recommended / repairs required / unsafe, system shut down
- **Urgency** — no action / monitor / within 30 days / priority / emergency
- **Technician Summary for the Homeowner** — plain language, and **it prints on their report**. Write it to the person, not to the office.
- **Repair Options Presented Today**, and **Return Visit Needed** with what it will cover

**The diagnostic is credited toward the repair if they approve it today, and it is not refundable once the visit has happened** (`reference.guarantees`). Both halves of that are yours to say plainly and without apology — you did the work.

## When you can't reproduce the fault {#no-fault}

Intermittent faults are real and they are not a personal failure. What is not acceptable is inventing a repair to avoid an awkward conversation.

1. **Take the full reading set anyway.** A healthy baseline is genuinely valuable — it's what the next visit compares against.
2. **Inspect for the usual intermittent suspects:** loose or corroded connections, marginal capacitor, weak contactor, borderline static pressure, low voltage at the unit, a control board with heat-stress marks.
3. **Tell the customer the truth**, in these words or close to them:

> "I couldn't get it to fail while I was here, and I'm not going to sell you a part on a guess. Here's what I measured, here's what's borderline, and here's what I'd want you to note down if it happens again — the time of day, what the thermostat was set to, and whether it was running before it stopped."

4. **Write the baseline into the job**, so the next tech starts from data instead of from zero.
5. **The diagnostic is still charged.** Service was rendered. You spent the time, took the readings, and left them with a documented healthy baseline and a plan. Say so with a straight back.

Repeat no-fault-found on the same address is a supervisor conversation, not a third guess.

## Condemning a major component {#condemn}

Compressor, heat exchanger, coil, boiler section, tank. Money and safety both sit on these calls, and they are the ones a customer is most likely to seek a second opinion on.

**Before you condemn one:**

1. **Readings that specifically support it**, not just symptoms consistent with it.
2. **Photograph the evidence** — the reading, the crack, the burn, the failed test.
3. **Get a second set of eyes.** Call the Service Manager from the driveway and walk them through the numbers before you tell the customer.
4. **Check the manufacturer warranty status** from the serial you captured. Condemning a compressor that's still covered, and not saying so, is the kind of mistake a customer never forgives.

The second-opinion call is not doubt about your ability. It's standard practice on the three or four decisions per year that are worth the most money and carry the most risk, and it puts a second name on a call that deserves one.

> ⚠️ **Cracked heat exchangers are the sharp end of this.** Condemn on evidence you can show — visual, camera, or a documented combustion test — never on suspicion alone. Once condemned, the unit stays off and red-tagged. Restarting a suspected cracked heat exchanger to keep a customer comfortable is not a favour you are authorised to do.

## Verify the repair before you leave {#verify-repair}

The diagnostic is not finished when the part is in. **Take the reading set again and record the after numbers next to the before numbers.**

- It proves the repair worked, on the day, in writing.
- It catches the second fault — the one that was hiding behind the first — while you're still standing there and still getting paid for it.
- It is the strongest possible answer to a warranty dispute later.

A job with before-and-after readings is a job nobody argues with.

## What goes in ServiceTitan {#servicetitan}

On the job, not in your head, not in a text to dispatch. If it's not in ServiceTitan it did not happen (`sop.csm.tools`).

| Field | What goes in it |
|---|---|
| Complaint (customer's words) | What they told you, verbatim |
| Verified symptom | What you actually observed |
| Readings | The full set for that system type, before values |
| Cause | One sentence, with the number that proves it |
| Contributing factors | What killed it, or what you ruled out |
| Safety findings | Every one, always, even when declined |
| Recommendation | What you told them, in the order you told them |
| Price presented | The written price, whether or not it was approved |
| Outcome | Approved / declined / parts ordered / no fault found |
| After readings | Post-repair values where work was done |
| Photos | Data plate, the failure, and the evidence for anything condemned |

## "But—" {#objections}

**"The customer doesn't want to pay me to stand there taking readings."**
They're not paying for readings, they're paying for an answer, and readings are how you get one. Narrate it and it reads as thorough: *"I'm taking a few measurements so I can tell you exactly what failed instead of guessing."* Nobody has ever objected to that sentence.

**"I've been doing this twenty years, I know what it is by the sound."**
You're probably right. Take the reading anyway — it takes forty seconds and it converts your judgment into something that survives being questioned by a customer, a manufacturer, or a warranty adjuster who wasn't in the room. Experience tells you where to look. The number is what you get to keep.

**"It's obviously the capacitor."**
Then it's a forty-second measurement and you were right. If it's not, you just avoided replacing a good part and leaving the real fault in the system — with your name on the invoice.

**"I don't have time for all this on a stacked day."**
Then the note says what you didn't get to and why. An explained gap is a record; a silent gap is a defect. And be honest about the arithmetic: the twenty minutes you save today is a two-hour unpaid callback in three weeks, and it lands on whoever is free — often you.

**"The office just wants data."**
Some of it, yes. Not the callback you didn't have to drive to, not the $1,400 repair that got approved because you showed a number, and not the warranty dispute that ended the moment your readings came out. Those are yours.

## When it's missing {#enforcement}

So this is not a rule that only lives on paper:

- **A job closed with a repair and no supporting readings gets sent back** to the tech who closed it, same as equipment capture.
- **Reviewed in the weekly one-to-one against your callback rate.** The connection between the two is the whole point of this document, and if the numbers show it doesn't hold for you, bring that to the meeting — it's a fair argument to make with evidence.
- **A genuine exception is fine when it's written down.** No access, customer refused, unsafe to run, gauge failure. Say so in the notes.
- **This document is signed for.** There's an acknowledgement block at the foot of this page (`governance.acknowledgement`).

## Two signatures, and the difference between them {#signatures}

Every diagnostic report ends with both. They are not the same thing and should never be presented as if they were.

**Your signature is required**, and it says: *"I performed and documented all inspection points recorded above."* That is an attestation about your own work. Do not sign it for points you graded without testing.

**The homeowner's is optional**, and it says: *"I received and reviewed this written diagnostic report with the technician. Signing acknowledges receipt only — it does not authorize any repair."*

Offer it, explain it in exactly those terms, and take no for an answer. A customer who declines to sign has still received the report, and the record shows they declined. **Nobody is ever pressed for a signature at the door** — the value of an acknowledgement is that it was freely given, and a signature obtained by pressure is worth less than none at all.

## Related

- Before any of this: `sop.field.equipment-capture`
- The readings themselves: `reference.diagnostic-readings`
- What the customer was promised on the phone: `sop.csm.diagnostic-fee`
- What the CSM already captured: `sop.csm.symptom-clarification`
- Warranty and guarantee windows: `reference.guarantees`
- No-charge callbacks: `sop.csm.warranty-callback`
