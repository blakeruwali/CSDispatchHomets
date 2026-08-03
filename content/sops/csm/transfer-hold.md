---
id: sop.csm.transfer-hold
title: Warm Transfer & Hold Protocol
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [transfer, warm-transfer, cold-transfer, hold, escalation]
related: [sop.csm.communication, sop.csm.de-escalation, sop.csm.escalation]
section: interaction
order: 7
surfaces: [csm, checklist]
---

# Warm Transfer & Hold Protocol

## Warm transfer — never blind {#warm-transfer}

1. **Ask permission.** "Can I put you on a brief hold while I get [name] on the line?"
2. **Brief the receiver.** Customer name, the issue, and what you've done so far.
3. **Return to the customer.** "I have [name] on the line — connecting you now."

A blind transfer forces the customer to tell their story twice. On an already-frustrating call, that is the moment we lose them.

Step 2 is the one people skip under pressure. It is the entire point of the protocol — the receiver should never open with "so what's going on?"

## When you can't reach the receiver {#cold-transfer}

A cold transfer is the **last resort**, not a shortcut. If a warm transfer genuinely isn't possible, protect the customer from getting lost:

> "I'm going to transfer you to [department/person]. If you get disconnected, their direct number is [number]."

Giving the direct number first is what makes this acceptable. A transfer that drops with no way back is how a customer ends up calling a competitor.

## If a manager is unavailable {#manager-unavailable}

> "My manager is currently assisting another customer. Can I have them call you back within {{price:manager_callback_sla}}?"

Log it and tell the manager. See `sop.csm.escalation`.

## Hold rules {#hold}

- **{{price:hold_cap}} cap.** Then come back, whether or not you have the answer.
- **Return with an update**, even if it's only "still working on it, give me one more minute."
- **Never silent-hold.** Always ask first, and wait for the yes before pressing hold.

Silence reads as abandonment. A customer who has been on hold for two minutes with no check-in assumes they've been forgotten, and they're usually right.

### When {{price:hold_cap}} isn't enough {#hold-escalation}

Don't just keep holding. Come back and hand them the choice:

> "I appreciate your patience. Would you prefer to keep holding, or would you like me to call you back as soon as I have an answer?"

Offering the callback is not giving up — it respects their time, and a customer who chose the callback isn't sitting there resenting the wait. If they take it, treat it like any other commitment: log it and make the call.

## Related

- Baseline communication standards: `sop.csm.communication`
- Escalation triggers and authority: `sop.csm.escalation`
- De-escalation technique: `sop.csm.de-escalation`
