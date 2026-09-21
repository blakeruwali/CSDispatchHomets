---
id: playbook.referral
title: Channel Playbook — Customer Referrals
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [referral, credit, channel, playbook, word-of-mouth]
related: [sop.csm.lead-source, sop.csm.intake, sop.reviews.cs-ask, sop.csm.booking-authority]
section: channels
order: 12
surfaces: [csm, checklist]
---

# Channel Playbook — Customer Referrals

> **A referral is the only lead that arrives already trusting us. It costs nothing to acquire and everything to waste — and we waste it by never thanking the person who sent it.**

Referral callers book at a higher rate than any paid channel and argue about the diagnostic fee less. They also test us on one thing no ad channel does: whether the person who vouched for us hears back.

## When this applies {#applies}

Any inbound where the lead source is a person: "my neighbor used you", "my sister said to call", a landlord passing us to a tenant, or a contractor sending work our way. It applies at intake, on the same call — not afterwards.

## The execution ladder {#execution}

1. **Hear the referral and stop the script.** The moment they name a person, acknowledge it before you carry on with intake. This is the single highest-leverage second on the call.
2. **Capture the referrer's name verbatim** — first and last if they have it, plus the town or street if they don't. Log the lead source as **Referral — [name]**, exactly as `sop.csm.lead-source` requires. A referral logged as "word of mouth" is a referral we cannot credit and cannot thank.
3. **Ask the connecting question**: how they know each other, or which job the referrer had done. It takes ten seconds, it tells the tech what expectation is already set, and it usually surfaces the referrer's address so the account can be matched.
4. **Match the referrer to an account in ServiceTitan while the caller is on the line.** If there are two Millers on that street, ask. Matching later means guessing later.
5. **Book normally.** The referral does not change the diagnostic fee, the window, or the booking standard. It changes the tone, not the terms.
6. **Note it on the ticket for the technician** — "referred by [name], [job type]". A tech who can say "your neighbor sent you our way, that means a lot" closes on a warmer footing.
7. **Close the loop with the referrer within one business day.** Someone calls or texts the referrer to thank them. Today that step is the one that most often does not happen, and it is the reason referral flow stalls.

## What you say {#verbatim}

At the moment they name the referrer:

> "Oh, [name] — that's great to hear, and please tell them thank you from us. That's the best kind of call to get."

Capturing the name without making it feel administrative:

> "So I can thank them properly — do you happen to know their last name, or the street they're on?"

Closing the loop with the referrer, by phone or text:

> "Hi [referrer], this is [name] at Home+ Air and Heat. I wanted to thank you personally — [customer] called us today and said you sent them our way. That means a lot to us, and we'll take good care of them."

If the customer expects a discount because they were referred:

> "I appreciate you saying that, and I want to be straight with you rather than promise something I can't hold to. Our diagnostic is {{price:diagnostic_residential}} either way, and it comes off the bill in full if you move forward with the repair that day. What I will do is make sure [referrer] hears from us — they earned that."

## A referral we handle badly {#worked-example}

**Weak version.** Caller mentions their neighbor. CSM says "great" and carries on. Lead source is logged as "referral". No name. The neighbor never hears anything. Six months later the neighbor is asked again and says "I sent them someone once, never heard a word."

**Perfect version.** Caller says "my neighbor Diane down on Whitman had you out for her boiler."

> **CSM:** "Diane — that's great, and please tell her thank you from us. So I can thank her properly, is that Diane on Whitman Road here in Huntington?"
> **Caller:** "Yes, Diane Kessler."
> **CSM:** "Perfect, I've got her. Alright, let's get you taken care of…"

Lead source logged as **Referral — Diane Kessler**. Ticket note reads "referred by Diane Kessler, boiler repair 2026-02". Tech opens with it at the door. Next morning, Diane gets a text thanking her. The next time someone on Whitman asks Diane who to call, that text is the reason she answers.

## When it goes wrong {#failures}

**They don't know the referrer's full name.** Take what they have — first name plus street or town. Partial beats nothing; ServiceTitan can be searched on either.

**The referrer is not in our system.** Log it anyway, verbatim. Some referrals come from people who have never been customers — a plumber, a realtor, a property manager. Those are worth more than a single job and should be flagged to the manager.

**The caller asks what the referrer gets.** Do not invent an amount. Say we make sure they hear from us, and pass the question up. Promising a credit that does not exist is a promise the company then has to either honour blind or break.

**The referred job goes badly.** Escalate it faster than a normal complaint. A bad referral job damages two relationships, and the referrer will find out. `sop.csm.escalation`.

### Hard rules

- Never log a referral without a name.
- Never promise a referral credit or discount amount. Above CSM authority — `sop.csm.booking-authority`.
- Never let the referrer go unthanked.
- Never change the diagnostic fee or the booking standard because a call was referred.

> ⚠️ **Unconfirmed — pending owner.** The referral *reward* itself — amount, who receives it, whether it triggers at booking or at completion, how it is applied in ServiceTitan, and whether it is capped — is not yet decided. Until it is, this playbook is deliberately limited to capture and thanks, and no CSM offers a reward of any kind. Everything above works without that decision; nothing below the line gets said on a call until it is made.

## What gets recorded {#record}

- Lead source: **Referral — [full name as given]**.
- Referrer's street or town if the surname is unknown.
- Matched ServiceTitan account, or "no account found".
- Relationship / which job the referrer had.
- Thank-you sent: yes, by whom, when.

## QA scoring {#qa}

| Score | What it looks like |
|---|---|
| **2** | Referrer named verbatim in the lead source, account matched or explicitly not found, ticket noted for the tech, thank-you logged within one business day. |
| **1** | Referral acknowledged and a name captured, but no account match and no thank-you logged. |
| **0** | Logged as generic "referral" or "word of mouth" with no name, or a reward promised. |

## Related

- Lead source capture standard: `sop.csm.lead-source`
- Asking a happy customer for more than a review: `sop.reviews.cs-ask`
- What a CSM may and may not offer: `sop.csm.booking-authority`
