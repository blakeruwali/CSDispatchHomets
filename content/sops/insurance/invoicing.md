---
id: sop.insurance.invoicing
title: Insurance Invoicing — What We Can and Cannot Write
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-09-02
review_cadence_days: 90
tags: [insurance, invoice, documentation, adjuster, home-warranty, authority]
related: [sop.insurance.claims, sop.csm.ticket-standards, sop.projects.closeout, pricing.tokens]
section: insurance-claims
order: 2
surfaces: [insurance]
acknowledgement: required
---

# Insurance Invoicing — What We Can and Cannot Write

> **Carriers ask for formats. We accommodate the format. We never change the facts.**

## The standing offer {#offer}

When a customer says "my insurance needs it written a certain way," the answer is:

> "Send me exactly what they're asking for and I'll write it that way if I can. If it's something we're not able to put on an invoice, I'll tell you today rather than leave you waiting."

Two outcomes, both fine. What is not fine is silence for a week while the customer thinks it is coming.

## What we will always do {#will}

- **Itemise.** Part, labour, maintenance, disposal, tax — as separate lines with separate prices.
- **Name the part properly.** "LG indoor unit control board, PN xxxxx" — not "board."
- **Include equipment identity.** Make, model, serial, system location, age if known.
- **State the failure and the cause** in the technician's own findings.
- **Say whether it is repairable** and, when it is not, why.
- **Split repair and maintenance** onto separate lines when both are on the job — most carriers cover the failure and not the maintenance, and a bundled number gets the whole claim denied.
- **Reissue on letterhead** with licence number, EIN, service address, date of service, and technician name.
- **Answer the adjuster's technical questions** in writing, copying the customer.

## What we will never do {#wont}

| They ask for | Our answer |
|---|---|
| A higher price so the deductible is covered | No. Refuse plainly, on the spot |
| A different date of service | No. The date is the date |
| The cause reworded to a covered peril | No. The findings are what the tech found |
| Removing maintenance so the whole ticket reads as a covered repair | No. We split the lines instead |
| An invoice for work not performed | No. Ever |
| Deleting the diagnostic line | No. It happened and it was paid |

Say it once, kindly, and do not negotiate:

> "I can't write that — it wouldn't be accurate, and an inaccurate invoice puts your claim at risk more than it helps it. What I can do is give you a fully itemised estimate with the model, serial, failed part and the cause spelled out, which is what adjusters actually ask us for."

**{{price:insurance_claim_authority}}** for any change to the wording, scope or date of an issued invoice. A CSM or technician does not amend an invoice for a carrier — they escalate it.

## Home warranty companies specifically {#warranty}

Home warranties (AHS, Choice, First American, Cinch) behave differently from homeowner's insurance:

- They frequently want to **authorise the work in advance** and pay us directly on a work order number. If the customer has an authorisation number, get it on the ticket before the repair.
- They cap labour and part allowances. **Anything above their allowance is the customer's balance**, and the customer must be told the number before the work starts, in writing.
- They routinely exclude maintenance, code upgrades, refrigerant, and modifications. Quote those as a separate customer-pay line from the start.
- If they will not authorise, the job reverts to a normal customer-pay repair at our normal price — and the diagnostic stays charged.

## Closing the file {#closing}

Every insurance job closes with, attached to the job in ServiceTitan:

1. The paid diagnostic invoice.
2. The itemised estimate that went to the customer.
3. Photos: nameplate, failed part, cause.
4. Any adjuster correspondence.
5. The final invoice for the completed repair, if we did it.

That bundle is what turns a reimbursement question six weeks later into a two-minute email instead of a lost afternoon.

## Related

- The visit itself: `sop.insurance.claims`
- Ticket standards: `sop.csm.ticket-standards`
- Job closeout: `sop.projects.closeout`
