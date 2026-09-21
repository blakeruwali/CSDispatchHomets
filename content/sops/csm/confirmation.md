---
id: sop.csm.confirmation
title: Confirmation & Expectations Read-Back
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [confirmation, read-back, expectations, closing, booking]
related: [sop.csm.availability, sop.csm.confirmation-cadence, sop.csm.dispatch-handoff]
section: booking
order: 9
surfaces: [csm, checklist]
---

# Confirmation & Expectations Read-Back

> **Six items, same order, every call — the read-back is what turns a booked window into a kept promise.**

## When this applies {#applies}

Runs at the end of every single booking, the instant a window is chosen — right after `sop.csm.availability` closes. It is not optional for repeat customers and not shortened for a simple call. What happens after the booking (follow-up cadence, no-answer handling) lives in `sop.csm.confirmation-cadence`; getting the ticket itself dispatch-ready is `sop.csm.dispatch-handoff`.

## The execution ladder {#execution}

1. **Name + address, read back and confirmed aloud.** Not typed silently — said, and corrected on the spot if wrong.
2. **Window, stated as the actual times**, not "morning" or "this afternoon."
3. **Fee, stated as a number**, even if it was already discussed earlier in the call.
4. **Tech name and photo-text**, if a tech is already assigned; if not, say a text is coming before arrival.
5. **Prep**, spoken as an instruction: someone 18+ home, and clear access to the unit.
6. **Send the confirmation text before you hang up** and tell the customer to expect it.

## What you say {#verbatim}

> "Let me confirm everything before we hang up — 123 Main Street, Massapequa, correct?"

> "Tech's out tomorrow between 8 and 10 AM."

> "That's a {{price:diagnostic_residential}} diagnostic, credited toward the repair if you approve the work."

> "You'll get a text with his photo before he heads your way."

> "Just need someone 18 or older home, and clear access to the furnace."

> "I'm sending the confirmation text right now — you should see it come through in the next few seconds."

## Worked example {#example}

**Full read-back, transcript:**

> **CSM:** "Great, you're booked. Let me read everything back before we hang up. That's 456 Elm Street, Bethpage, correct?"
>
> **Customer:** "Yes, that's right."
>
> **CSM:** "Tech's out tomorrow between 10 and 12. That's a {{price:diagnostic_residential}} diagnostic, credited toward the repair if you decide to move forward. You'll get a text with his name and photo before he arrives — just need someone 18 or older home and clear access to the water heater in the basement. Sound good?"
>
> **Customer:** "Yep, all good."
>
> **CSM:** "Perfect — sending your confirmation text now. You should see it any second. Anything else before I let you go?"

| Weak | Perfect |
|---|---|
| "Okay you're all set, bye!" | Reads back all six items in order before ending the call |
| "We said $199 earlier so I won't repeat it" | States the fee again, out loud, even though it was covered earlier |
| Sends the text after wrapping up the next call | Sends it live, on this call, before hanging up |
| "Someone should probably be home" | "I need someone 18 or older home" — stated as a requirement, not a suggestion |

## When it goes wrong {#failures}

- **Customer disputes the address on read-back.** Fix it immediately in the ticket, then re-read the corrected address back before moving to the next item — never assume it's right the second time.
- **Customer pushes back on the fee at read-back.** Hold the number, restate what it buys (a written price, credited if they approve), and do not quietly drop or soften it to end the friction.
- **Confirmation text doesn't land while you're still on the line.** Say so, don't hang up — verify the number, resend, and confirm receipt before ending the call.
- **Customer says no one will be home for the window.** Don't book it as-is; fix the access plan (lockbox, neighbor, reschedule) before the read-back is considered complete.

### Hard rules

- Never skip or abbreviate the read-back for a repeat customer.
- Never state the fee only once in the call and assume it stuck.
- Never end the call before the confirmation text is sent and acknowledged.
- Never leave a "someone will probably be home" answer unresolved.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| 2 | All six items read back in order, fee stated as a number, text sent and confirmed before hangup |
| 1 | Most items covered but out of order, abbreviated, or the fee wasn't restated |
| 0 | Booking ended without a read-back, or the confirmation text was never sent live on the call |

## Related

- Windows and Dispatch approval: `sop.csm.availability`
- What happens after booking: `sop.csm.confirmation-cadence`
- Pre-save checklist: `sop.csm.dispatch-handoff`
