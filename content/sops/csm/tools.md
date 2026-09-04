---
id: sop.csm.tools
title: Tools of Record
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 180
tags: [tools, servicetitan, phone, lsa, posh, sms]
related: [sop.csm.ticket-standards, playbook.lsa, playbook.posh, playbook.sms, sop.csm.membership-status]
section: foundations
order: 3
surfaces: [csm]
---

# Tools of Record

> **If it's not in ServiceTitan, it didn't happen — no exceptions, no matter how good your memory is.**

## When this applies {#applies}

This is the reference for every system a CSM touches during a call and immediately after it — which tool owns which fact, and what "recorded" actually means for each one. It's not a how-to for any single tool's interface; it's the rule for where information has to land. For what a *complete* ticket contains once it's in ServiceTitan, see `sop.csm.ticket-standards`.

## The execution ladder {#execution}

1. **Before you say a price, pull the customer's record in ServiceTitan** — status, history, open tickets. This is the same lookup described in `sop.csm.membership-status`.
2. **During the call**, take notes directly into the ServiceTitan ticket, not a notebook or a sticky note — write as you go, not from memory afterward.
3. **Any promise made on the call** (a callback time, a waived fee, a rebook date) goes into the ticket before you hang up, not after your next call starts.
4. **Every outbound text or call to the customer** goes through the ServiceTitan-linked number, never a personal phone.
5. **LSA leads and disputes** get logged in the LSA Dashboard, outcome recorded within {{price:lsa_log_sla}}.
6. **After-hours tickets from Posh** get reviewed at 7 AM sharp, the same day — not folded into whenever you get to your inbox.
7. **At the end of the call**, confirm the ticket reflects what actually happened, not what was supposed to happen — a rescheduled job with no note is functionally an untouched job to the next person who opens it.

## What you say {#verbatim}

These aren't customer-facing lines — they're the internal habit lines that keep the record honest.

> "Let me get that in the ticket before we hang up so it's there no matter who picks this up next."

> "I don't have that in front of me — give me one second to pull up ServiceTitan rather than guess."

> "That text needs to go out from the ServiceTitan number, not my cell — one second."

## Worked example {#example}

| Tool | Use for | Rule |
|---|---|---|
| ServiceTitan | All bookings, tickets, notes, customer history | **Source of truth — if it's not in ST, it didn't happen** |
| Phone system | Inbound/outbound voice, hold, transfer | Answer by ring {{price:answer_by_ring}} |
| LSA Dashboard | Google Local Services Ads leads and disputes | Log outcome within {{price:lsa_log_sla}} |
| Posh log | After-hours ticket handoff | Reviewed at 7 AM sharp |
| SMS (via ServiceTitan) | Confirmations, missed-call text-back | **Never personal phones** |

**A ticket done right, end to end:**

> Customer calls at 2:15 PM to reschedule a 3–5 PM job. CSM pulls the ticket in ServiceTitan first (not from memory of "oh yeah, that's the Miller job"), reads current status, asks why, offers two new windows, gets a yes for tomorrow 10–12, updates the ticket immediately with the new window and the stated reason ("customer had a family emergency"), and confirms with the customer before ending the call. Nothing about this job exists anywhere except ServiceTitan — no separate note, no memory-only detail.

**The same call done wrong:** CSM reschedules verbally, tells themselves "I'll update it after lunch," takes the next call, and the ticket sits stale until Dispatch pulls the board at 4:45 and finds a 3–5 PM job with no update and a tech about to be sent to an empty house.

## When it goes wrong {#failures}

**A promise gets made on the call and never makes it into the ticket.** The next person to touch the account — Dispatch, a different CSM, the tech — has no idea it exists, and the customer is the one who pays for our gap. Recovery: as soon as it's noticed, log it retroactively with a timestamp and a note explaining the delay; don't just quietly add it as if it happened on time.

**A CSM texts a customer from a personal phone** because it was faster in the moment. This breaks the audit trail permanently and the message is gone if that CSM ever leaves. Recovery: there isn't a clean one — note it in the ticket that contact happened off-system, and stop doing it going forward.

**Posh after-hours tickets pile up past 7 AM** because the morning got busy. Customers who left a message overnight sit uncontacted well past their SLA. Recovery: review Posh first, before taking new inbound calls, until the backlog clears.

**LSA outcome logging slips past {{price:lsa_log_sla}}.** Google can flag or dispute the lead, and without a logged outcome we have nothing to contest it with. Recovery: log it the moment you remember, and flag the miss to a Manager if it's a repeated pattern, not a one-off.

### Hard rules

- Never keep a customer commitment anywhere but the ServiceTitan ticket.
- Never text or call a customer from a personal number.
- Never let a Posh ticket sit past 7 AM review.
- Never assume "I'll remember" is a substitute for writing it down immediately.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| **2** | Checked ServiceTitan before speaking to price/history, logged every promise made on the call before it ended, used only company-linked contact channels |
| **1** | Logged the call eventually but late, or used the right tool but missed one detail (e.g., forgot the reason code) |
| **0** | Made a commitment that never made it into ServiceTitan, or used a personal phone/number for customer contact |

## Related

- What a complete ticket contains: `sop.csm.ticket-standards`
- LSA dashboard handling: `playbook.lsa`
- SMS rules and templates: `playbook.sms`
- The lookup this enables: `sop.csm.membership-status`
