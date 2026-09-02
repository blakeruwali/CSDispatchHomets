---
id: sop.insurance.claims
title: Insurance & Home Warranty Claims — Handling the Visit
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-09-02
review_cadence_days: 90
tags: [insurance, home-warranty, claim, adjuster, estimate, diagnostic, fee, waiver]
related: [sop.insurance.invoicing, sop.csm.diagnostic-fee, sop.field.forms, sop.field.equipment-capture, sop.csm.second-opinion, pricing.tokens]
section: insurance-claims
order: 1
surfaces: [insurance]
acknowledgement: required
---

# Insurance & Home Warranty Claims — Handling the Visit

> **We diagnose, we price, we document. The carrier decides. We are never the customer's insurance company, and we never wait on a claim to get paid for work we already did.**

A claim customer is a normal customer with one extra step: someone else has to approve the money. That changes the paperwork. It does not change the diagnostic, the pricing, or the fee.

## What this covers {#scope}

Any job where the customer says some version of:

- "I want to go through my homeowner's insurance."
- "This should be covered by my home warranty" (AHS, Choice, First American, Cinch).
- "My adjuster needs an estimate."
- "Can you write it up so my insurance will pay it?"

**A real example.** Kate Kim, Friday morning. Diagnostic on an LG mini-split. Findings: maintenance required and the **indoor control board** needs replacing. The customer chose to file with her home insurance rather than pay out of pocket. We charged the diagnostic, wrote a free itemised estimate for the control board plus the maintenance, and sent it the same day. That is the pattern — every one of these runs the same way.

## The fee rule — say it before the tech leaves the house {#fee}

This is the part that costs us money when it is left vague.

| Situation | Diagnostic |
|---|---|
| Repair approved **and performed on the same visit** | **Credited in full** — comes off the invoice |
| Customer waits on the carrier, signs later, we return another day | **Charged and kept.** Not credited on the return trip |
| We have to come back **because of us** — wrong part, part not on the truck, tech ran out of day, our scheduling error | **Credited.** The return trip is our cost, not theirs |
| Unit found non-repairable, customer buys the replacement from us | Credited toward the replacement |
| Claim denied, customer walks away | Charged. We did the diagnosis; that work happened |

**Verbatim, at the kitchen table:**

> "The {{price:diagnostic_residential}} diagnostic is credited if we do the repair today. If you'd rather wait on your insurance, that's completely fine — but the diagnostic stays on today's invoice, because that visit already happened. When the claim comes back approved, we'll schedule the repair and the repair is priced exactly as you see it here."

**Never say** "we'll take care of it later," "we'll see what we can do," or "we'll figure out the fee when the claim comes through." Those three sentences are why fees get written off.

The only person who may waive the fee outside the table above is a **Manager** — same as `sop.csm.diagnostic-fee`.

## On site {#on-site}

1. **Diagnose the way you always do.** A claim does not shorten the diagnostic — it lengthens it, because the estimate has to survive an adjuster reading it.
2. **Scan the data plate.** Make, model, serial, and the failed component. `sop.field.equipment-capture` applies without exception here: an estimate with no serial number gets rejected.
3. **Photograph the failure.** The failed part, the nameplate, the install location, and any visible cause (surge damage, water intrusion, corrosion, rodent damage). Carriers pay on cause. Photos in ServiceTitan on the job, not on a phone.
4. **Write the cause in plain words** in the job notes: what failed, what made it fail, and whether it is repairable. "Indoor control board failed — no output to blower, board shows heat damage at relay. Not field-repairable; board replacement required."
5. **Quote the repair at our normal price.** No claim pricing, no padded pricing. The number is the number.
6. **Collect the diagnostic before you leave**, per the table above.

## Setting the customer's expectation {#expectation}

Say all four of these out loud:

- **"We don't file the claim for you."** We supply the estimate and the documentation; the customer or the adjuster files.
- **"We don't bill your insurance directly."** The customer pays us; the carrier reimburses the customer. (Home warranty companies that authorise a work order in advance are the exception — see `sop.insurance.invoicing`.)
- **"Your coverage decision is between you and your carrier."** Never predict whether something will be covered. Never say "insurance always covers this."
- **"The estimate is free. The diagnosis is what you paid for today."**

## Getting the estimate out {#estimate}

- The written estimate is **{{price:insurance_estimate_fee}}**.
- Out **{{price:insurance_estimate_delivery}}** — emailed **and** texted, same as a membership proposal.
- Itemised: equipment/part, labour, maintenance, tax — separated, not bundled into one number. Adjusters reject lump sums.
- Company letterhead, licence number, job address, date of service, technician name.
- Copy the adjuster only when the customer asks us to and gives us the address in writing (text or email is fine).

## Follow-up {#followup}

Claims stall. Ours do not go quiet.

| Day | Action |
|---|---|
| Day 3 | Call: "Has the adjuster come back to you?" Log the answer on the job |
| Day 7 | Call + text. Offer to answer adjuster questions directly |
| Day 14 | Final call. Approved → book it. Denied → present the repair on its own merits, and offer financing |

After day 14 the customer moves to nurture, exactly like an unclosed estimate — `sop.leads.estimate-cancellation-rescue`.

## When the claim is approved {#approved}

- Book the repair as a **new appointment**, never as a resumed one. Do not pause the original job — `sop.dispatch.no-pause`.
- Re-confirm the price. If the part price moved, say so before the visit, in writing.
- The diagnostic from the first visit **stays charged** unless that first visit sold the job.
- Close the job the day the work is done, with the invoice the customer needs for reimbursement — `sop.insurance.invoicing`.

## What we never do {#never}

- Never inflate an estimate so the customer's deductible is covered. That is insurance fraud and it ends the company.
- Never write two estimates at two prices for the same scope.
- Never backdate an invoice or change the date of service.
- Never describe wear-and-tear failure as storm or surge damage.
- Never let a customer tell us what the cause was. The technician's findings are the technician's findings.

Any request that touches this list goes to the **owner** the same day. `{{price:insurance_claim_authority}}` for anything that reshapes an invoice.

## Related

- Building the invoice the carrier will accept: `sop.insurance.invoicing`
- The fee framing itself: `sop.csm.diagnostic-fee`
- Equipment and data-plate capture: `sop.field.equipment-capture`
- Reviving the ones that go cold: `sop.leads.estimate-cancellation-rescue`
