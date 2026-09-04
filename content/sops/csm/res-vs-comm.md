---
id: sop.csm.res-vs-comm
title: Residential vs Commercial Routing
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [residential, commercial, routing, business-unit, rtu, multi-family]
related: [sop.csm.customer-profiles, sop.csm.system-type, sop.csm.diagnostic-fee]
section: intake
order: 4
surfaces: [csm, checklist]
---

# Residential vs Commercial Routing

> **Route it at intake — different fee, different labor rate, different tech, different business unit, and re-routing after booking wastes a slot someone else could have had.**

## When this applies {#applies}

Right after `sop.csm.system-type`, on every call, and it isn't optional just because the address "sounds residential." This decision sets the fee posture the customer hears — pair it with `sop.csm.diagnostic-fee` for how to frame that fee once you know which side of the line the job is on. If the caller isn't the property owner, this also triggers an authorization check in `sop.csm.customer-profiles` before you dispatch anything.

## The execution ladder {#execution}

1. **Listen for the obvious signals first** — a business name, "office," "store," or "restaurant" in how they describe the location.
2. **Check for the two traps** before you finalize: individually-metered multi-family units, and rooftop equipment. Both look like the opposite of what they are.
3. **If it's still unclear, ask directly** what the space is used for — not what the building looks like.
4. **State the routing and the fee posture** that comes with it, out loud, before you move to symptom detail.
5. **If it's a converted or mixed-use property, default commercial** and note why on the ticket.

## What you say {#verbatim}

Routing table:

| Signal | Route to |
|---|---|
| Single-family home, owner on the phone | Residential BU — {{price:diagnostic_residential}} diag, {{price:labor_residential_hourly}} |
| Business name / office / retail / restaurant | Commercial BU — {{price:diagnostic_commercial}} diag, {{price:labor_commercial_hourly}} |
| Multi-family with individual tenant meters | Residential — **verify owner authorization** |
| Large multi-tenant building | Commercial + manager review |
| Rooftop unit (RTU) | **Commercial by definition** |

Asking when it's genuinely unclear:

> "Is this a home, or a business location?"

Explaining the rooftop rule to a caller who's confused why their small building is "commercial":

> "Because the unit's on the roof, that puts this on our commercial side regardless of the building — that's about the equipment and access, not the size of your business."

## Worked example {#example}

| | Weak call | Perfect call |
|---|---|---|
| Caller | "Hi, our AC on the roof isn't cooling the front office." | "Hi, our AC on the roof isn't cooling the front office." |
| CSM | Hears "office," assumes commercial, moves on without confirming the unit location | Confirms rooftop location, states plainly: "That's an RTU, so it's commercial — {{price:diagnostic_commercial}} diagnostic, {{price:labor_commercial_hourly}} labor" |
| Later | Dispatch discovers it's a rooftop unit needing certified access and ladder gear the assigned residential tech doesn't carry — job rebooked | Correct tech and equipment assigned the first time, no rebook |

## When it goes wrong {#failures}

- **A tenant calls about a multi-family unit, not the owner.** Route residential per the meter signal, but stop and verify authorization through `sop.csm.customer-profiles` before you dispatch — a tenant may not be able to approve billable work.
- **Caller describes a converted house with a ground-floor office.** Default commercial and write down why — a residential price on a commercial job is money we absorb; the reverse is just a conversation.
- **Caller genuinely doesn't know if the building is commercial** (property manager calling on behalf of an owner they've never met). Ask what the space is used for, not who's calling, and route on that answer.
- **You already quoted residential pricing before realizing it's an RTU.** Correct it immediately, on the same call — "I need to correct that, since it's a rooftop unit this is actually a commercial visit" — don't let a wrong quote ride to the doorstep.

### Hard rules

- Never route by building appearance alone — ask about the equipment and the meter situation.
- Never dispatch a tenant-initiated multi-family call without checking authorization.
- Never treat a rooftop unit as residential, regardless of what the caller sounds like or asks for.
- Never leave a mixed-use routing decision unexplained on the ticket — write down why you chose commercial or residential.

## QA scoring {#qa}

| Score | Standard |
|---|---|
| 2 | Correct routing identified, both trap cases (multi-family meters, RTU) checked explicitly, fee posture stated accurately |
| 1 | Correct routing reached but only after a wrong initial assumption was caught and corrected mid-call |
| 0 | Wrong business unit dispatched, or an RTU/multi-family signal missed entirely |

## Related

- Who is authorized to approve work: `sop.csm.customer-profiles`
- Fee framing once routed: `sop.csm.diagnostic-fee`
- Getting the equipment details that feed this decision: `sop.csm.system-type`
