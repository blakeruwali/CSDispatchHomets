---
id: sop.csm.membership-status
title: Membership Status Check
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [membership, home-plus, business-plus, status, lapsed, servicetitan]
related: [sop.csm.membership-pivot, sop.csm.membership-retention, sop.csm.diagnostic-fee, sop.csm.tools, sop.membership.program]
section: intake
order: 6
surfaces: [csm, checklist]
---

# Membership Status Check

> **Check ServiceTitan before you say a single price out loud.**

## When this applies {#applies}

Run this check on **every inbound call, before you quote a diagnostic fee, a window, or anything else.** It's the first thing you do after identifying the customer, and it happens before `sop.csm.diagnostic-fee` and before the pivot in `sop.csm.membership-pivot`. This doc only covers the lookup and what changes on the call because of it — it does not restate what's in each plan. Plan terms live in `sop.membership.program`; renewals and save conversations live in `sop.csm.membership-retention`.

## The execution ladder {#execution}

1. **Pull up the account in ServiceTitan** before discussing price — see `sop.csm.tools` for why ServiceTitan is the only place this lookup counts.
2. **Read the status:** active, lapsed, or none on file.
3. **Active member** → thank them by name for the membership, apply the diagnostic posture and repair discount, and continue the call on member terms.
4. **Lapsed** → offer reinstatement before you get into the fee conversation at all.
5. **No membership found** → proceed with the standard flow; the pivot happens later in the call, after the diagnostic fee is accepted — see `sop.csm.membership-pivot`.
6. **If the account shows a different tier** (Signature, Infinite, Business+), confirm which plan before quoting anything — the posture differs by tier and is defined in `sop.membership.program`.

## What you say {#verbatim}

> "Let me just pull up your account real quick before we get into pricing."

> "I see you're on Home+ — thank you for being a member. That means there's no diagnostic charge today, and you'll get {{price:membership_home_plus_repair_discount}} off whatever the repair comes to."

> "Looks like your membership lapsed a few months back — want me to go ahead and get that reinstated at the same rate before we talk about today's visit?"

> "I don't see a membership on file — I'll walk you through the standard visit, and I've got an option at the end that might save you money on this one."

## Worked example {#example}

| Status found | Weak call | Correct call |
|---|---|---|
| Active member | "That'll be {{price:diagnostic_residential}} for the diagnostic." (Customer corrects the CSM.) | "I see you're on Home+ — thank you. No diagnostic charge today, and {{price:membership_home_plus_repair_discount}} off the repair." |
| Lapsed | Fee conversation happens first; reinstatement never comes up | "Your membership lapsed — want it back at the same rate before we get into today's fee?" |
| No membership | CSM never checks, quotes the fee cold | CSM checks silently, confirms "no membership on file," proceeds to standard flow |
| Business+ account mis-read as residential | CSM applies Home+ discount language to a commercial account | CSM confirms tier in ServiceTitan first, applies Business+ terms from `sop.membership.program` |

The active-member row is the one that costs us the most when it's skipped: quoting a member full price and then walking it back reads as either incompetence or a bait-and-switch, even when it's neither.

## When it goes wrong {#failures}

**CSM quotes the standard fee before checking status.** The member hears full price first and the correction, however quick, damages trust. Recovery: check immediately, apologize once ("sorry, let me pull that up properly"), and restate the corrected, member-rate answer — don't over-apologize past that.

**Lapsed member is offered reinstatement only after the fee objection comes up.** The reinstatement now looks like a discount you invented to save the call, not a standing offer. Recovery: none mid-call except to be straight about it — "this is actually the same reinstatement rate we'd offer anyone, happy to set it up now."

**CSM assumes "no membership" without checking ServiceTitan** — going off a name they half-recognize, or what the customer says. Recovery: never guess. Look it up every time, even for someone who "sounds like a regular."

**Wrong tier applied.** Comfort language used on a Signature or Infinite account under-serves the customer; commercial terms applied to residential over-promises. Recovery: re-confirm tier in ServiceTitan before finishing the quote, correct out loud, move on.

### Hard rules

- Never quote a price before checking membership status in ServiceTitan.
- Never silently apply a member benefit — always name it out loud.
- Never guess at status from memory or the customer's own claim; the system is the record.
- Never restate full plan terms from this doc — point to `sop.membership.program` for anything beyond the status-driven action.

## QA scoring {#qa}

| Score | Criteria |
|---|---|
| **2** | Checked ServiceTitan before quoting anything, applied the correct status action, and named the benefit or reinstatement offer out loud |
| **1** | Checked status but applied it late (after quoting) or forgot to name the benefit explicitly |
| **0** | Quoted price before checking, guessed at status, or missed a lapsed/active account entirely |

## Related

- The non-member pitch: `sop.csm.membership-pivot`
- Renewals, saves and cancellations: `sop.csm.membership-retention`
- Fee framing: `sop.csm.diagnostic-fee`
- Full plan terms: `sop.membership.program`
- Where this lookup happens: `sop.csm.tools`
