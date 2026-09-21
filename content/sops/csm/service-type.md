---
id: sop.csm.service-type
title: Service Type Identification
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [service-type, repair, install, maintenance, estimate, diagnostic]
related: [sop.csm.diagnostic-fee, sop.csm.system-type, sop.csm.res-vs-comm, script.objection.quote-only]
section: intake
order: 2
surfaces: [csm, checklist]
---

# Service Type Identification

> **The service type sets the fee — get it wrong and you either bill a diagnostic on a free estimate or give away a diagnostic we should have charged for.**

## When this applies {#applies}

Right after you've got the caller's basic details from `sop.csm.intake`, before you frame any price. If the customer says "just a quote," this document is where that phrase gets resolved into a real service type. For the full objection-handling version of the same conversation — including how to hold the line when a customer pushes back on paying for a diagnostic — see `script.objection.quote-only`.

## The execution ladder {#execution}

1. **Listen for the trigger phrase** — "broken," "new one," "tune-up," or "just a quote" all mean something different, and only one of them is genuinely ambiguous.
2. **Run it through the translation table** to get a working service type.
3. **If it's "just a quote," ask the clarifying question** before you say a single price out loud.
4. **State the fee posture plainly**, in writing-appropriate language — you're about to put this on the ticket and the customer is going to hear it again from the tech.
5. **Hand off to the right downstream doc**: repair diagnostic → `sop.csm.diagnostic-fee`; anything commercial-flavored → `sop.csm.res-vs-comm`.

## What you say {#verbatim}

Translation table:

| They say | It's actually | Fee posture |
|---|---|---|
| "It's broken / not working" | Repair diagnostic | {{price:diagnostic_residential}} res / {{price:diagnostic_commercial}} comm |
| "I need a new one / mine is old" | Install estimate | {{price:estimate_install}} |
| "Annual / tune-up / check" | Maintenance | Flat maintenance price, or Home+ covered |
| "Just a quote" | Repair diagnostic **or** install estimate — clarify | Depends on which |

Resolving "just a quote":

> "Happy to — are you looking to get the system you have fixed, or looking at replacing it?"

Stating the fee once you know which:

> "Since you want it fixed, the visit is a {{price:diagnostic_residential}} diagnostic — that gets a tech out, a real diagnosis, and a written repair price. If you go ahead with the repair, that fee comes off the invoice."

> "Since you're looking at replacing it, that's a free estimate — no charge for the visit."

## Worked example {#example}

| | Weak call | Perfect call |
|---|---|---|
| Customer says | "I just want a quote on my furnace." | "I just want a quote on my furnace." |
| CSM response | Quotes a ballpark repair range on the spot | "Are you looking to fix what you have, or replace it?" |
| Customer | "Fix it, I guess." | "Fix it, I guess." |
| Outcome | Customer arrives at the door expecting the phone number to be the price; tech quotes the real repair; customer feels misled, disputes the invoice | CSM says plainly: "That'll be a {{price:diagnostic_residential}} diagnostic visit, credited if you approve the repair." Customer knows exactly what they're paying for before the tech knocks |

## When it goes wrong {#failures}

- **Customer answers "both" — fix if cheap, replace if not.** Book it as a repair diagnostic; that visit produces the information needed to make the replace decision, and the fee is still credited toward whichever path they choose.
- **Customer insists on a phone price before agreeing to anything.** Don't give one — hand this straight to `script.objection.quote-only` for the full handling ladder.
- **Customer says "tune-up" but describes a symptom too** ("annual check, but it's also making a noise"). This is a repair diagnostic wearing a maintenance label — treat the noise as the real service type and price it accordingly.
- **You genuinely can't tell fix vs. replace after asking.** Default to booking the repair diagnostic — it's the only path that doesn't require you to guess, and the tech resolves the ambiguity on site.

### Hard rules

- Never quote a ballpark repair price by phone, under any framing.
- Never let a customer believe a repair diagnostic is free.
- Never quote a fee on a service that's genuinely a replacement estimate.
- Never leave "just a quote" un-clarified on the ticket — write down which one it turned out to be.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Correct service type identified, ambiguous phrasing clarified before any price stated, fee posture stated plainly and accurately |
| 1 | Correct service type identified but stated late, or clarifying question asked after a price was already implied |
| 0 | Wrong service type booked (e.g., diagnostic billed on a replacement, or fee waived on a repair), or a phone price given |

## Related

- Framing the diagnostic fee: `sop.csm.diagnostic-fee`
- Routing to the right business unit: `sop.csm.res-vs-comm`
- Full objection handling for "just a quote": `script.objection.quote-only`
