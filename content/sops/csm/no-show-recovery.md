---
id: sop.csm.no-show-recovery
title: No-Show / Ghost Recovery
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [no-show, ghost, recovery, missed, rebook, deposit]
related: [sop.csm.reschedules, sop.csm.greeting, playbook.sms]
surfaces: [csm, checklist]
---

# No-Show / Ghost Recovery

The customer wasn't there and the tech couldn't reach them. This is a recovery procedure, not a punishment procedure.

## The sequence {#sequence}

1. **Same day, within 2 hours of the missed window: call.**
2. Use the recovery script below.
3. **If answered** → rebook, **no trip fee**.
4. **If no answer** → voicemail + rebook-link text.
5. **Second attempt** the next business morning.
6. **After 2 attempts** → close as "Unable to reach."

## The script {#script}

> "Thank you for choosing Home+ Air and Heat, this is [name]. We had you on the schedule for [window] and our tech couldn't reach you — I want to make sure everything's OK and see if we can rebook."

The opening is the standard greeting, deliberately. The second half leads with concern for them, not with our lost slot. Most no-shows are an emergency, a forgotten appointment, or a phone in another room — approach it that way and the rebook rate is high.

## No trip fee on the first recovery {#no-fee}

Rebook cleanly and don't mention what it cost us. Leading with a fee on the recovery call converts a rebookable customer into a lost one.

## Repeat ghosts {#repeat}

**Two or more no-shows → flag the account. A deposit is required on the next booking.**

This is a Manager-visible flag on the account, not a conversation the CSM improvises. The pattern, not the incident, is what changes the terms.

> ⚠️ **Unconfirmed — conflict C4.** The knowledge base sets this at **3+** no-shows and calls for a **confirmation call** rather than a deposit. This document keeps the SOP's stricter position pending an owner decision. Note that a deposit requirement likely needs a stated customer-facing policy before we can enforce it. See `_migrated/csm-reconciliation.md`.

## Texting rules apply {#sms}

The rebook-link text counts against the outbound cap in `playbook.sms` — {{price:sms_max_unanswered}} without a reply. Two attempts, then stop.

## Related

- Customer-initiated changes: `sop.csm.reschedules`
- SMS rules: `playbook.sms`
