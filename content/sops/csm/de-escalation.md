---
id: sop.csm.de-escalation
title: Difficult Customers & De-escalation
department: csm
owner: cs-manager
status: published
version: 3
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [difficult, angry, de-escalation, complaint, escalation, manager]
related: [sop.csm.escalation, sop.csm.transfer-hold, sop.csm.reschedules, script.csm.empathy, script.csm.tone-language]
section: interaction
order: 6
surfaces: [csm, checklist]
---

# Difficult Customers & De-escalation

> **You own the next step, never the past problem — and the moment a trigger from `sop.csm.escalation` appears, you stop de-escalating and hand off.**

## When this applies {#applies}

Any call where the customer's tone escalates — raised voice, interrupting, sarcasm, repeated complaints about the same visit, or an outright threat. It applies the moment you notice the heat rising, not after it boils over.

This document is technique only. The list of triggers that end a CSM's handling of the call and the remedies a CSM may offer live in `sop.csm.escalation` — read that before you need it, not during the call. The mechanics of handing the call to a Manager live in `sop.csm.transfer-hold`.

## The execution ladder {#execution}

1. **Lower your volume and slow your pace.** Match their pace, never their heat — mirroring anger doubles it.
2. **Acknowledge the feeling out loud**, specifically, in one sentence.
3. **Scan for an escalation trigger** (see `sop.csm.escalation`). If one is present, stop this ladder and go straight to warm transfer.
4. **If no trigger is present, own the next step**, not the past problem. State exactly what happens now.
5. **Confirm the next step back to them** and close the call calmly — never rushed, never abrupt, even after a hard call.

## What you say {#verbatim}

> "I hear you, and I'd feel the same way."

> "Here's what I'm going to do right now: I'm booking you a technician for tomorrow between 8 and 10, no charge for the callback."

> "I want to make sure this is handled properly. Let me connect you with [Manager] who can help resolve this. Can I place you on a brief hold?"

> "I appreciate your frustration, and I'm not going to argue with you about it — I want to focus on getting this fixed."

## Worked example {#example}

Customer whose AC repair from last week failed again, second call this month.

> **Customer:** "This is the second time this month your guy has been out here and it's STILL not fixed. I want my money back."
>
> **CSM:** *(lowers volume, slows down)* "I hear you, and honestly, I'd be frustrated too — two visits and it's still not right." *(pause)* "Here's what I'm going to do: I'm booking a technician back out at no charge, priority slot, tomorrow morning between 8 and 10. I'm also flagging this so a manager reviews what happened on the last two visits."
>
> **Customer:** "I don't want another visit, I want a refund."
>
> **CSM:** "That's a fair ask, and it's actually a conversation for my manager — refunds are their call, not mine, and I want you to get a real answer, not a guess from me. Can I connect you now, or would you prefer a callback within {{price:manager_callback_sla}}?"
>
> **Customer:** "...Fine, connect me."
>
> **CSM:** "Thank you for your patience — one moment." *(warm transfer per `sop.csm.transfer-hold`, briefs the manager: name, two prior visits, callback requested, refund requested)*

Note what didn't happen: no defense of the technician's first two visits, no promise of a refund, no argument about whether the complaint is fair.

## When it goes wrong {#failures}

- **Customer demands a refund or fee waiver mid-call.** Recovery: never negotiate it yourself — state plainly that it's a manager decision, not a no, and move to warm transfer per `sop.csm.escalation`.
- **Customer threatens to leave a bad review or call a lawyer.** Recovery: don't react to the threat or argue against it — a legal/BBB threat is an immediate escalation trigger; acknowledge calmly and transfer.
- **Customer's anger is actually directed at a real safety issue** (technician behavior, property damage). Recovery: this is not a de-escalation call at all — escalate immediately per `sop.csm.escalation`, do not attempt to soothe first.
- **CSM starts defending the company's side of the story** ("well, our tech said..."). Recovery: stop mid-sentence if you catch yourself doing this — pivot immediately to "here's what happens now," because relitigating the past is what doubles the temperature.

### Hard rules

- Never argue facts mid-heat, even if the customer is factually wrong.
- Never waive a fee or promise a refund to end a hard call — see `sop.csm.diagnostic-fee` and `sop.csm.escalation`.
- Never hang up first, under any circumstance.
- Never close the file on a cancellation that arrived with a complaint attached — see `sop.csm.reschedules`.

## QA scoring {#qa}

| Score | Behavior |
|---|---|
| 2 | Matched pace, named the feeling specifically, owned a concrete next step, escalated correctly the instant a trigger appeared |
| 1 | Stayed calm and avoided arguing, but missed or delayed an obvious escalation trigger, or gave a vague next step |
| 0 | Argued facts, defended the company's past handling, offered a waiver/refund, or raised their own voice |

## Related

- Escalation triggers and CSM authority limits: `sop.csm.escalation`
- Warm transfer procedure: `sop.csm.transfer-hold`
- Acknowledgement language: `script.csm.empathy`
