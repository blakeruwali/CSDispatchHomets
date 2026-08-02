---
id: sop.csm.tools
title: Tools of Record
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 180
tags: [tools, servicetitan, phone, lsa, posh, sms]
related: [sop.csm.ticket-standards, playbook.lsa, playbook.posh, playbook.sms]
surfaces: [csm]
---

# Tools of Record

Each tool has exactly one job. Using the wrong tool for a job is how information gets lost.

## The tools {#tools}

| Tool | Use for | Rule |
|---|---|---|
| ServiceTitan | All bookings, tickets, notes, customer history | **Source of truth — if it's not in ST, it didn't happen** |
| Phone system | Inbound/outbound voice, hold, transfer | Answer by ring {{price:answer_by_ring}} |
| LSA Dashboard | Google Local Services Ads leads and disputes | Log outcome within {{price:lsa_log_sla}} |
| Posh log | After-hours ticket handoff | Reviewed at 7 AM sharp |
| SMS (via ServiceTitan) | Confirmations, missed-call text-back | **Never personal phones** |

## The two non-negotiables {#non-negotiables}

**1. ServiceTitan is the record.** A promise made on a call and not written into ServiceTitan does not exist. Not in your notebook, not in your memory, not in a Slack message — in the ticket.

**2. Customer contact goes through company numbers.** Every text and every call to a customer uses the ServiceTitan number. Personal phones break the record, break the audit trail, and follow the CSM out the door when they leave.

## Related

- What a complete ticket contains: `sop.csm.ticket-standards`
- LSA dashboard handling: `playbook.lsa`
- SMS rules and templates: `playbook.sms`
