---
id: script.objection.refrigerant-price
title: Objection — "How much do you charge for one pound of refrigerant?"
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-09-10
review_cadence_days: 90
tags: [objection, price, refrigerant, leak, repair, script]
related: [sop.csm.diagnostic-fee, script.objection.price, script.objection.quote-only, protocol.emergency.triage]
section: booking
order: 9
surfaces: [csm, checklist]
---

# Objection — "How much do you charge for one pound of refrigerant?"

## The response {#response}

> "I can get you an exact number, but it depends on what your system actually needs — the refrigerant type, how much is missing, and whether there's a leak. That's why we start with a diagnostic: a licensed tech checks the pressures, finds out why the refrigerant is low, and gives you a written flat price before any work starts. Adding refrigerant without finding the leak is like putting gas in a car with a hole in the tank — it just leaks back out. Does morning or afternoon work better?"

## Why the customer is saying this {#why-saying-it}

They are treating refrigerant like a commodity they can price-shop. The job of the CSM is to move the conversation from "price per pound" to "diagnosis and permanent fix."

| What they say | What they usually mean | What to answer |
| --- | --- | --- |
| "How much for one pound of refrigerant?" | They want a quick comparison against another company. | Reframe: refrigerant isn't sold by the pound as a stand-alone service. EPA rules and warranty requirements mean it must be handled properly. |
| "The other company said they'd top it off cheap." | They think refrigerant is the fix, not the symptom. | Explain that low refrigerant means a leak or system issue. Topping it off without diagnosis wastes money and can damage the compressor. |
| "I just need a rough number." | They want control before inviting someone in. | Offer certainty: a written flat price after diagnosis, with the diagnostic credited if they approve the repair. |
| "Can't you just tell me over the phone?" | They don't understand why HVAC pricing can't be phone-quoted. | Explain that the refrigerant type and system condition change the price, and that EPA regulations require a licensed technician to handle it. |
| "I saw a price online." | They are price-shopping a part, not a repair. | Point out that online refrigerant prices don't include recovery, leak detection, warranty protection, or the technician's labor and expertise. |

## Why it works {#why}

The customer thinks they're asking about a simple part. The real answer is about **cause and permanence**. This response:

1. **Avoids giving a misleading price.** A per-pound quote locks you into a number before the tech sees the system.
2. **Names the hidden problem.** Low refrigerant is almost always a leak, not a one-time shortage.
3. **Protects the customer.** Topping off without diagnosis can void warranties and burn out compressors.
4. **Brings it back to the diagnostic.** The path to a written flat price is the same diagnostic visit.
5. **Closes on a small choice.** Morning or afternoon is easier than "do you want to book?"

## The handling ladder {#ladder}

1. **Acknowledge the question.** "I can get you that number." Don't dodge.
2. **Name the variables.** Refrigerant type, system size, leak status, EPA handling.
3. **Explain why refrigerant alone isn't the fix.** Use the "gas in a car with a hole" analogy.
4. **Offer the diagnostic path.** Written flat price, diagnostic credited if repair approved.
5. **Close on a small choice.** "Does morning or afternoon work better?"

## Scenario responses {#scenarios}

### "Can't you just tell me per pound?"

> "I wish it were that simple. The price depends on the refrigerant your system uses and how much the system actually needs. More importantly, if it's low, there's a reason — usually a leak. We don't want to sell you refrigerant that just leaks back out next month. The tech diagnoses the whole system and gives you a written flat price. If you approve the repair, the diagnostic is credited. Does morning or afternoon work better?"

### "The other company said $X per pound."

> "I hear you. The difference is that a reputable repair starts with a diagnosis. If they're quoting refrigerant by the pound without checking the leak, they're selling you a temporary fix, not a repair. A licensed tech finds the root cause, gives you a written flat price, and fixes it so it stays fixed. Does morning or afternoon work better?"

### "What if it's just a quick top-off?"

> "That would be great if it were true. The problem is that systems don't just run low on refrigerant — it has to go somewhere, usually a leak. EPA rules also require us to recover and handle it properly, not just add more. The tech can tell you in about 30 minutes whether it's a simple issue or something bigger, and you'll have a written flat price before any work starts. Does morning or afternoon work better?"

### "I'll just buy refrigerant online and do it myself."

> "I wouldn't recommend that. Refrigerant has to be handled by a licensed tech under EPA rules, and adding the wrong amount or wrong type can damage the compressor and void your warranty. The diagnostic is the safer first step, and it gets credited if you approve the repair. Does morning or afternoon work better?"

### "This is an emergency — the house is getting hot."

> "I understand — let me get you on the schedule today. A tech will diagnose it, find the leak if there is one, and get you a written flat price before any work starts. If it's truly an emergency with no cooling and vulnerable people in the home, I'll flag it for Dispatch. Are you okay for today, or does this need to be right now?"

*(If there is no cooling, vulnerable occupants, or electrical/gas smell, go straight to `protocol.emergency.triage`.)*

## Worked example {#example}

**Caller:** "How much do you charge for one pound of refrigerant?"

**CSM:** "I can get you an exact number, but it depends on your system — the refrigerant type, how much is missing, and whether there's a leak. What we do is send a licensed tech to diagnose it properly, find the root cause, and give you a written flat price before any work starts. Adding refrigerant without finding the leak is like putting gas in a car with a hole in the tank. Does morning or afternoon work better?"

**Caller:** "Can't you just give me a ballpark?"

**CSM:** "I don't want to give you a number that changes when the tech gets there — that's how customers get surprised. The diagnostic is {{price:diagnostic_residential}}, it gets credited if you approve the repair, and you'll know the full price before we touch anything. Does morning or afternoon work better?"

## Leave it warm {#warm}

- Confirm the symptom and system type.
- Note refrigerant / "system low" in ServiceTitan.
- Offer same-day or next-day availability if the home has no cooling.
- If they decline, hold a soft slot for the next 24–48 hours.

## What not to do {#avoid}

- ❌ Don't quote a per-pound price over the phone.
- ❌ Don't say "I don't know" and leave it there.
- ❌ Don't badmouth a competitor by name.
- ❌ Don't imply refrigerant is a standalone fix without diagnosis.
- ❌ Don't skip the safety line if the call involves gas smell, burning, or sparking.

## QA scoring {#scoring}

- **0** = gave a per-pound price, let the caller shop on price, or ended without moving toward a diagnostic.
- **1** = explained why per-pound pricing isn't accurate but left the call without a scheduled or held window.
- **2** = reframed the question, explained leak/diagnosis/permanence, used the gas-in-a-car analogy or equivalent, and secured a specific slot or soft hold.

## Related

- General price objection: `script.objection.price`
- "I just want a quote": `script.objection.quote-only`
- Emergency override: `protocol.emergency.triage`
- Diagnostic fee rules: `sop.csm.diagnostic-fee`
