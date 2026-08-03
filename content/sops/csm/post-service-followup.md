---
id: sop.csm.post-service-followup
title: Post-Service Follow-Up
department: csm
owner: cs-manager
status: in-review
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [follow-up, post-service, satisfaction, complaint, retention, callback]
related: [sop.csm.confirmation-cadence, script.csm.review-request, sop.csm.escalation, sop.csm.warranty-callback]
section: post-booking
order: 4
surfaces: [csm, checklist]
---

# Post-Service Follow-Up

> ⚠️ **Status: in-review — conflict C3.** `sop.csm.confirmation-cadence` describes the day-after touch as fully automated. The knowledge base instructs a manual CSM call within 24 hours of **every** completed job. Those are different operating models with very different staffing costs. This document is written for the middle position — automation as the baseline, manual calls on the jobs that warrant one — which is the only reading under which both sources are true. **Pending owner confirmation.** See `_migrated/csm-reconciliation.md`.

## Who gets a manual call {#who}

The automated survey and thank-you go to everyone — `sop.csm.confirmation-cadence`. A CSM calls personally when:

- The job was a **large-ticket repair or an install**.
- The survey came back **below {{price:review_survey_gate}}**, or not at all.
- It was a **warranty callback or a repeat visit** — `sop.csm.warranty-callback`.
- The customer was **escalated or difficult** at any point during booking.
- The tech **flagged it** on the ticket.

Everything else is covered by the automation. Calling a happy customer after a routine $199 diagnostic to ask if they're happy is a use of the hour that a low-score follow-up needed more.

## The call {#script}

Within 24 hours of the visit:

> "Hi [name], this is [your name] from Home+ Air and Heat. I'm calling to make sure everything is working well after yesterday's visit. How's your [heating/cooling/plumbing] doing today?"

Then stop and listen. The question is genuinely open — do not lead them to "fine."

## If they're satisfied {#satisfied}

> "That's wonderful to hear! We're so glad [tech name] was able to take care of that for you."

**Name the tech.** It makes the company a person, and it's the detail customers repeat when they recommend us.

Then, and only then, move to the review request — `script.csm.review-request`.

## If they're not satisfied {#unsatisfied}

1. **"I'm sorry to hear that. Can you tell me more about what's going on?"**
2. **Listen fully. Do not interrupt**, and do not start solving while they're still talking.
3. **Apologize plainly:** "I apologize for the inconvenience." Not "I'm sorry you feel that way."
4. **Act:** "Here's what I'd like to do to make this right…"

### What you can offer

| Situation | Remedy |
|---|---|
| Work incomplete or issue unresolved | **Callback visit, no charge** — book it on the call |
| Personality clash or trust issue with the tech | Different technician, note the reason |
| Anything involving money back | **Manager** — `sop.csm.escalation` |

**Log the complaint in ServiceTitan** regardless of how it resolves. An unhappy customer who was fixed on the phone and never logged is a pattern we can't see.

### Never ask an unhappy customer for a review

Obvious, and it still happens when a CSM is working down a call list. If the answer to "how's it doing" is anything but good, the review request is off the table for that call.

## Escalation triggers apply here too {#escalation}

Property damage, legal threats, a safety complaint about the tech, or a third report of the same issue — stop and escalate. Full list: `sop.csm.escalation`.

## Related

- The automated cadence this sits on top of: `sop.csm.confirmation-cadence`
- Review request script: `script.csm.review-request`
