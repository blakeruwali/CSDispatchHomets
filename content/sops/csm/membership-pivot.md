---
id: sop.csm.membership-pivot
title: Membership Pivot (Home+)
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [membership, home-plus, business-plus, pitch, pivot, upsell]
related: [sop.csm.membership-status, sop.csm.membership-retention, sop.csm.diagnostic-fee, sop.csm.customer-profiles, sop.csm.kpis, sop.membership.program]
section: booking
order: 4
surfaces: [csm, checklist]
---

# Membership Pivot (Home+)

> **Pitch after the fee is accepted, never before — that single word order is the difference between arithmetic and an upsell.**

## When this applies {#applies}

Every non-member, non-emergency call, at exactly one moment: right after the customer has agreed to the diagnostic fee and before you move on to booking the window. You already know the customer isn't a member because you checked in `sop.csm.membership-status` — this doc is the pitch itself, not the lookup. It does not restate plan terms; those live in `sop.membership.program`. If the objection call gets here through a price pushback instead of a clean booking, the pivot slots in the same way — see `script.objection.price`.

## The execution ladder {#execution}

1. **Confirm the fee is accepted.** The pitch never precedes it.
2. **Deliver the pitch** as a direct statement plus a direct question — never a soft mention.
3. **If they say yes** — hand off enrollment mechanics or note it for the technician to close on-site.
4. **If they say no** — accept it once, move straight to booking. No second attempt on the same call.
5. **If it's an emergency call** — skip the pitch entirely until the issue is resolved and the customer is calm; then mention it briefly, once.
6. **If it's a rental** — do not pitch the tenant; note the owner as the contact for enrollment.
7. **If it's commercial** — pitch Business+, not Home+.

## What you say {#verbatim}

> "One quick thing — most of our customers on this kind of call end up joining Home+. It's {{price:membership_home_plus_monthly}}, includes {{price:membership_home_plus_tuneups}} tune-ups, waives the diagnostic fee today, and gives you {{price:membership_home_plus_repair_discount}} off the repair. It usually pays for itself on the first visit. Want me to add it?"

> "Since you're a landlord here, that's really something for the property owner to decide on — I'll leave a note so whoever books the next visit can bring it up with them."

> "For a commercial account like yours, the fit is actually our Business+ plan, not Home+ — want me to run through what that covers?"

## Worked example {#example}

| Beat | Weak execution | Correct execution |
|---|---|---|
| Timing | Pitched before the fee is confirmed, sounds like a fee dodge | Pitched immediately after "okay, let's book it" — reads as the obvious next line |
| The ask | "Let me know if you're ever interested in a membership" | "Want me to add it?" — direct question, waits for an answer |
| Emergency call | CSM pitches membership while the customer is mid-crisis | CSM resolves the emergency first, mentions membership only if the call ends calm |
| Rental property | CSM pitches the tenant directly | CSM notes the file for the owner, does not pitch the person on the phone |
| Declined once | CSM re-pitches a second time later in the call | CSM accepts the no, books the job, moves on |

## When it goes wrong {#failures}

**Pitched before the fee is accepted.** It now reads as a way to dodge the charge rather than a savings offer, and it usually gets a reflexive no. Recovery: don't re-pitch immediately — finish the booking, and let the technician raise it on-site instead.

**Pitched during an emergency.** A customer dealing with a gas smell or a flooded basement isn't evaluating a maintenance plan, and the pitch reads as predatory. Recovery: apologize for the timing if it's already happened ("sorry, wrong moment for that"), resolve the issue, and don't bring it up again unless the call naturally allows it later.

**Pitched to a tenant instead of the property owner.** The tenant can't authorize it and the CSM has now wasted the pitch and possibly annoyed a non-decision-maker. Recovery: note the account for the owner's contact, don't push the tenant for an answer.

**CSM assumes the answer and skips the pitch.** Skipping because "they won't want it" quietly tanks the pitch-rate metric and loses the calls that would have said yes. Recovery: none after the fact — pitch every eligible call going forward; this is a habit fix, not a per-call one.

### Hard rules

- Never pitch before the diagnostic fee is accepted.
- Never pitch during an active emergency.
- Never pitch a tenant — the property owner enrolls.
- Never skip the pitch because you're guessing at the answer.
- Never restate full membership terms here — anything beyond the pitch line belongs in `sop.membership.program`.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| **2** | Pitched at the correct moment, used the direct close ("want me to add it?"), and followed the situation rule for emergency/rental/commercial |
| **1** | Pitched, but at the wrong moment, with a soft close, or missed a situational rule |
| **0** | Skipped the pitch on an eligible call, or pitched during an emergency or to a tenant |

## Related

- Checking status first: `sop.csm.membership-status`
- Fee framing that precedes this: `sop.csm.diagnostic-fee`
- Full plan terms: `sop.membership.program`
- What we track on pitch rate: `sop.csm.kpis`
