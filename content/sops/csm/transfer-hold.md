---
id: sop.csm.transfer-hold
title: Warm Transfer & Hold Protocol
department: csm
owner: cs-manager
status: published
version: 3
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [transfer, warm-transfer, cold-transfer, hold, escalation]
related: [sop.csm.communication, sop.csm.de-escalation, sop.csm.escalation]
section: interaction
order: 7
surfaces: [csm, checklist]
---

# Warm Transfer & Hold Protocol

> **A blind transfer makes the customer tell their story twice — on an already-hard call, that's the moment we lose them.**

## When this applies {#applies}

Any time a call moves to another person (a Manager on an escalation, Dispatch on a scheduling conflict, Sales on a replacement lead) or any time you need to leave the customer on hold to find an answer. It applies whether the call is calm or already heated.

This document covers the mechanics of handing off or holding. The list of *when* a call must go to a Manager lives in `sop.csm.escalation`; the technique for calming the customer down before or during the transfer lives in `sop.csm.de-escalation`.

## The execution ladder {#execution}

1. **Ask permission before holding.** Never press hold on silence or an assumed yes.
2. **Brief the receiver before connecting** — name, the issue, what you've already done or offered.
3. **Return to the customer and confirm the handoff** by name before connecting.
4. **If the receiver is unavailable**, commit to a specific callback window and log it.
5. **If a transfer must be cold** (last resort only), give the customer a direct number first, so a dropped call isn't a dead end.

## What you say {#verbatim}

> "Can I put you on a brief hold while I get [name] on the line?"

> "I have [name] on the line — connecting you now."

> "I'm going to transfer you to [department/person]. If you get disconnected, their direct number is [number]."

> "My manager is currently assisting another customer. Can I have them call you back within {{price:manager_callback_sla}}?"

> "I appreciate your patience. Would you prefer to keep holding, or would you like me to call you back as soon as I have an answer?"

## Worked example {#example}

Customer escalation call, Manager needs to be brought in.

> **CSM:** "I want to make sure this gets handled properly — can I put you on a brief hold while I get my manager, Dana, on the line?"
>
> **Customer:** "Fine, but don't make me wait forever."
>
> **CSM:** *(hold placed; calls Dana)* "Dana — I have Mr. Alvarez on the line. Second AC visit this month, unit's still not cooling, he's asking for a refund. I've already offered a free priority callback tomorrow 8-10, he wants that in addition to talking to you about the refund."
>
> **CSM:** *(returns to customer)* "Thanks for holding — I have Dana on the line now, she has the full picture, connecting you now."

Compare to the failure mode:

| Beat | Weak CSM | Correct execution |
|---|---|---|
| Before hold | Presses hold mid-sentence, no ask | Asks permission, waits for the yes |
| Handoff | "Here's someone who can help you" — no context given to Dana | Full brief: name, issue, what's already been offered |
| Return | Customer connected with no warning who's on the line | "I have Dana on the line now — connecting you" |
| If unavailable | "She'll call you back at some point" | Commits to `{{price:manager_callback_sla}}`, logs it |

## When it goes wrong {#failures}

- **Receiver is unavailable and the customer is already upset.** Recovery: never leave it open-ended — commit to `{{price:manager_callback_sla}}`, log the promise on the ticket, and tell the manager directly so the callback actually happens.
- **Hold runs past `{{price:hold_cap}}` with no answer yet.** Recovery: come back anyway, even with nothing new — "still working on it, one more minute" — and if it's clearly going to take longer, offer the callback choice instead of leaving them hanging.
- **A warm transfer genuinely isn't possible** (receiver mid-call elsewhere, no way to bridge). Recovery: cold transfer as last resort only, and always give the direct number first — a drop with no way back is how a customer calls a competitor next.
- **Customer refuses to hold at all.** Recovery: don't force it — offer the callback immediately instead, and treat the promised callback exactly like any other commitment.

### Hard rules

- Never transfer blind when a warm transfer is possible.
- Never place a silent hold — always ask, always wait for the yes.
- Never let `{{price:hold_cap}}` pass without returning with an update.
- Never let a cold transfer go out without giving the direct number first.

## QA scoring {#qa}

| Score | Behavior |
|---|---|
| 2 | Asked permission, briefed the receiver fully, confirmed the handoff by name, and respected the hold cap with a real update |
| 1 | Transferred correctly but skipped or thinned the brief, or let hold run past cap without checking back |
| 0 | Blind transfer, silent hold, or a cold transfer given with no direct number |

## Related

- Baseline communication standards: `sop.csm.communication`
- Escalation triggers and authority: `sop.csm.escalation`
- De-escalation technique: `sop.csm.de-escalation`
