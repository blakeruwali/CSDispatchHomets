---
id: sop.csm.no-show-recovery
title: No-Show / Ghost Recovery
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [no-show, ghost, recovery, missed, rebook, deposit]
related: [sop.csm.reschedules, sop.csm.greeting, playbook.sms, sop.csm.escalation]
section: booking
order: 11
surfaces: [csm, checklist]
---

# No-Show / Ghost Recovery

> **The tech showed up and nobody was there — that's a recovery call, not a strike against the customer.**

## When this applies {#applies}

Use this the moment Dispatch or the tech reports an appointment where the customer wasn't there, or wasn't reachable, at the booked window. This is different from `sop.csm.reschedules`, which covers a customer who calls *us* first to move or cancel — here, we're the ones reaching out after the fact. If the miss was on our side (tech ran late, no-showed, or Dispatch dropped the job), the script below still applies, but skip the trip-fee language entirely and open with an apology, not a check-in — see the "our fault" branch under failures.

## The execution ladder {#execution}

1. **Same day, within 2 hours of the missed window — call.** Waiting until tomorrow costs you most of the rebook rate.
2. **Use the recovery script** below, word for word on the opening.
3. **If answered:** rebook on the spot, no trip fee mentioned or charged.
4. **If no answer:** leave a voicemail and send the rebook-link text.
5. **Second attempt** the next business morning, same script.
6. **After 2 attempts with no response:** close the ticket as "Unable to reach" and stop texting — see the SMS cap below.
7. **If this is the customer's 2nd or later no-show:** flag the account for Manager review before rebooking — a deposit may be required on the next booking, at Manager discretion (see `sop.csm.escalation`).

## What you say {#verbatim}

> "Thank you for choosing Home+ Air and Heat, this is [name]. We had you on the schedule for [window] and our tech couldn't reach you — I want to make sure everything's OK and see if we can rebook."

> "No worries at all — these things happen. I can get you right back on for tomorrow between [window]. Does that work?"

> "I'm so sorry — that one was on us. Our tech ran into a longer job ahead of yours and didn't make it to you today. I want to make it right — can I get you first thing tomorrow?"

## Worked example {#example}

**Scenario:** Customer booked a 12–2 diagnostic, tech arrived at 12:15, knocked, called, texted — no answer. Job closed as no-show at 12:45.

> **CSM (calling at 1:40 PM):** "Thank you for choosing Home+ Air and Heat, this is Maria. We had you on the schedule for 12 to 2 today and our tech couldn't reach you — I want to make sure everything's OK and see if we can rebook."
>
> **Customer:** "Oh no, I'm so sorry — I had a work call run long and completely lost track of time."
>
> **CSM:** "No worries at all — these things happen. I can get you right back on tomorrow between 10 and 12, or 2 and 4 if that's easier."
>
> **Customer:** "10 to 12 works."
>
> **CSM:** "Perfect, you're set for tomorrow, 10 to 12. Thanks for calling me back."

Notice what's absent: no mention of the missed slot costing us anything, no trip fee, no lecture about being home next time. The call is entirely forward-looking.

## When it goes wrong {#failures}

**We were the ones who missed the window.** Don't use the neutral "couldn't reach you" opening — it puts the miss on them when it was ours. Open with a direct apology, waive the trip fee automatically (it's already company-caused, not a first-recovery courtesy), and offer the next available slot first.

**Customer answers and gets defensive before you finish the sentence.** Let the "everything OK?" framing do its job — don't interrupt to explain the tech's side. Recovery: repeat the concern, then pivot straight to the two rebook windows.

**Second no-show from the same customer gets rebooked exactly like the first.** The pattern goes unflagged and repeats a third time. Recovery: before offering a window, flag the account and note that a deposit may apply — that's a Manager call, not yours to waive or enforce solo.

**CSM mentions the trip fee on a first recovery.** Even said kindly, "since we normally charge for this" turns a rebookable customer into a lost one. Recovery: don't walk it back mid-call — just don't bring it up, and don't circle back to it later either.

### Hard rules

- Never charge or even mention a trip fee on a first-time recovery call.
- Never wait past the same business day to make the first attempt.
- Never send more than 2 unanswered texts in 24 hours — `playbook.sms` caps it at {{price:sms_max_unanswered}}.
- Never rebook a 2nd-or-later no-show without flagging the account first.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| **2** | Called within 2 hours, used the concern-first opening, rebooked with no fee mentioned, flagged repeat no-shows before rebooking |
| **1** | Made contact and rebooked, but called late, skipped the concern framing, or forgot to flag a repeat |
| **0** | Never attempted contact, mentioned/charged a trip fee on a first recovery, or rebooked a flagged repeat account without escalating |

## Related

- Customer-initiated changes: `sop.csm.reschedules`
- SMS rules: `playbook.sms`
- Deposit and account flags: `sop.csm.escalation`
