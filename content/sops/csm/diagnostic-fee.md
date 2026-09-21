---
id: sop.csm.diagnostic-fee
title: Diagnostic Fee Framing
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [diagnostic, fee, framing, price, objection, waiver]
related: [sop.csm.membership-pivot, script.objection.price, sop.csm.service-type, sop.csm.membership-status, sop.csm.warranty-callback, sop.csm.escalation]
section: booking
order: 3
surfaces: [csm, checklist]
---

# Diagnostic Fee Framing

> **State the fee, say what it buys, then stop talking — the objection you never have to handle is the one you framed correctly the first time.**

## When this applies {#applies}

Every repair / "not working" call, stated once, before the customer has a chance to ask "how much." It applies immediately after you've confirmed this is a repair conversation, not a replacement one — if it's replacement, there is no diagnostic fee at all; see `sop.csm.service-type` and quote {{price:estimate_install}} instead.

This document is about framing the fee *before* it becomes a problem. If the customer pushes back after hearing it, that's a different document — the objection itself, word for word, lives in `script.objection.price`. Don't rebuild that ladder here; point to it.

## The execution ladder {#execution}

1. **Confirm the conversation type first.** Repair gets a diagnostic fee; replacement gets a free estimate. Get this right before you say a number — see `sop.csm.service-type`.
2. **Check membership status before quoting anything.** A member's posture is different — see below.
3. **State the fee once, plainly, with what it buys**, in a single breath. Don't hedge, don't apologize, don't preface it with "unfortunately."
4. **Stop talking.** The pause is the technique — filling the silence with justification signals the price is high, and the customer will agree with you.
5. **If they push back, hand off to `script.objection.price`** rather than improvising a defense of the number.
6. **On approval**, confirm the credit and non-repairable posture apply — don't wait for them to ask.

## What you say {#verbatim}

> "Our diagnostic is {{price:diagnostic_residential}} for residential, {{price:diagnostic_commercial}} for commercial. That covers the tech coming out, diagnosing the issue, and giving you a written repair price. If you approve the repair today, the diagnostic is credited toward the work."

> "Yes — credited toward the repair if approved today. You're not paying twice."

> "Even if the tech finds the unit isn't repairable, the diagnostic still applies — the visit and the diagnosis happened either way. But if you move forward with a replacement, that fee is credited toward it too."

> "You're an active member, so today's visit has {{price:membership_diagnostic_posture}} — no diagnostic to collect."

## What the fee buys {#value}

Never frame this as a cost to defend — frame it as what it purchases. Say all three, every time, in this order:

| Buys | Line |
|---|---|
| The visit | A licensed, insured technician at the door |
| The diagnosis | A real answer, not a phone guess |
| The number | A written repair price before anything starts |

## Crediting and the non-repairable case {#credit}

| Scenario | What happens to the fee |
|---|---|
| Customer approves the repair | {{price:diagnostic_credit_on_sale}} — credited in full against the invoice |
| Customer approves a replacement instead | Same — credited in full, per `diagnostic_credit_on_sale` |
| Customer declines the repair | Fee is owed, nothing else — they keep the written diagnosis |
| Unit is found non-repairable | {{price:diagnostic_on_non_repairable}} — the fee is charged (45-60 minutes of real diagnosis happened), the replacement estimate is free, and the fee is credited if they buy the replacement |

Say the non-repairable case out loud on any older-unit call before the tech arrives — a customer blindsided by "it's not repairable, and you still owe the fee" on the doorstep is a much harder conversation than one who heard it from you first.

## Member posture {#member}

Check membership status before quoting a number at all — see `sop.csm.membership-status`. An active member's diagnostic posture is {{price:membership_diagnostic_posture}}. Confirm it on the ticket so the tech isn't the one explaining it on-site.

## Worked example {#example}

Call: furnace not producing heat, ten years old, non-member.

> **CSM:** "Before I get a tech scheduled — our diagnostic is {{price:diagnostic_residential}}. That covers the technician coming out, diagnosing exactly what's wrong, and a written repair price before anything starts. If you approve the repair, that fee is credited toward the work." *(stops talking)*
>
> **Customer:** "Okay, that's fine. What if it can't be fixed, though? It's pretty old."
>
> **CSM:** "Good question — even if it turns out not to be repairable, the diagnostic still applies since the visit and diagnosis happened either way. But the replacement estimate itself is free, and if you move forward with a new system, that diagnostic fee comes off the replacement price too."
>
> **Customer:** "Got it, that's reasonable. Let's book it."

## When it goes wrong {#failures}

- **Customer objects to the number itself ("$199 just to look at it?").** Recovery: don't improvise a defense — this is the exact scenario `script.objection.price` is built for. Use its ladder, don't rebuild it here.
- **CSM quotes the diagnostic fee on what turns out to be a replacement conversation.** Recovery: catch it immediately, correct out loud ("actually, since you're replacing rather than repairing, there's no diagnostic — the estimate is free"), and move to `sop.csm.service-type`.
- **Customer asks for a waiver because of a hard week, a past bad visit, or general pushback.** Recovery: never grant it — fee waivers are Manager-only, see `sop.csm.escalation`. Offer to flag it for a manager if there's a legitimate prior-visit issue; don't negotiate it yourself.
- **CSM forgets to mention the non-repairable case on an obviously old unit, and it surfaces as a surprise on-site.** Recovery: for the current call, nothing to undo — note it for the tech to explain gently. Going forward, say it proactively on any unit over eight years old.

### Hard rules

- Never quote a diagnostic fee on a replacement/estimate conversation — that's {{price:estimate_install}}, free.
- Never waive the fee yourself, for any reason — see `sop.csm.escalation`.
- Never price-match a competitor's "free" diagnostic.
- Never let the fee objection turn into a defense speech — hand off to `script.objection.price` instead of improvising.

## QA scoring {#qa}

| Score | Behavior |
|---|---|
| 2 | Confirmed repair vs. replacement, stated the fee once with full value framing, paused, and correctly handled member/non-repairable posture without prompting |
| 1 | Stated the fee correctly but skipped the pause, over-justified it, or missed confirming membership status first |
| 0 | Quoted the fee on a replacement call, offered a waiver, or apologized for the price |

## Related

- The price objection, in full: `script.objection.price`
- Which conversation you're in: `sop.csm.service-type`
- Pivoting to membership after the fee lands: `sop.csm.membership-pivot`
- Confirming status before quoting: `sop.csm.membership-status`
- Fee waiver authority: `sop.csm.escalation`
