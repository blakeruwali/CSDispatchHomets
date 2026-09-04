---
id: sop.csm.lead-source
title: Lead Source Attribution
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-09-04
review_cadence_days: 90
tags: [lead-source, attribution, google, lsa, yelp, referral, marketing, verbatim]
related: [sop.csm.intake, sop.csm.ticket-standards, playbook.lsa, playbook.angi, playbook.thumbtack, playbook.yelp, playbook.referral, playbook.web]
section: intake
order: 7
surfaces: [csm, checklist]
---

# Lead Source Attribution

> **Every dollar of marketing spend is judged by what you type in one field. Log the caller's answer verbatim, then resolve it — never resolve it in your head and type the bucket.**

This is the shortest question on the call and the one with the longest consequences. Attribution decides which channels get funded next quarter, whether an LSA charge can be disputed, and whether the neighbor who vouched for us ever gets thanked.

## When this applies {#applies}

Every inbound contact where a job or an estimate is created — phone, web form, marketplace, or a Posh handoff. It applies even when you think you already know the answer, and even on a repeat customer, because "used you before" is itself a source worth counting.

If the caller was referred by a person, this doc gets you the name; what happens with that name is `playbook.referral`. If the lead arrived through a paid marketplace, the channel's own handling standard is in `playbook.angi`, `playbook.thumbtack`, or `playbook.yelp`.

## The execution ladder {#execution}

1. **Ask it at the end of intake, not the start.** It is a low-stakes question and it closes the data-collection phase naturally. Asked first, it sounds like screening; asked last, it sounds like curiosity.
2. **Ask the open question and stop talking.** Do not offer a menu. The moment you say "was it Google or Yelp?" you have contaminated the answer.
3. **Write down what they actually said**, in their words, before you interpret it.
4. **Resolve the ambiguous ones with exactly one follow-up** — see the mapping table. One follow-up, not an interrogation.
5. **Get the name on every referral.** No name, no credit, and no thank-you.
6. **Enter it in the ticket's lead source field** to the standard in `sop.csm.ticket-standards` — resolved bucket, plus the verbatim phrase in the notes where the two differ.
7. **Flag the ones marketing needs to see**: a mailer they still have in their hand, a truck sighting with a town, a review that named a specific technician.

## The mapping table {#mapping}

| They say | Log as | Follow-up needed? |
|---|---|---|
| "Google" (unspecified) | Resolve first — see `#google` | **Yes, always** |
| "Top of Google with the green checkmark" | Google — LSA | No |
| "Your ad" / "the sponsored one" | Google — Ads | No |
| "Found your website" | Google — Organic | No |
| "Yelp" | Yelp | No |
| "Angi" / "HomeAdvisor" | Angi | No |
| "Thumbtack" | Thumbtack | No |
| "Neighbor / friend / family / someone told me" | **Referral — [full name]** | **Yes — get the name** |
| "Your truck" / "a mailer" | Fleet / Direct Mail — [town] | Ask which |
| "Used you before" | Repeat Customer | No |
| "Property management / my landlord" | HOA / PM — [company] | Get the company |
| "Facebook" / "Instagram" | Social — [platform] | No |
| "I don't remember" | Unknown — asked | No. Log it honestly |

**"Unknown — asked" is a legitimate entry.** What is not legitimate is a blank field, or a guess dressed up as data.

## Why the Google answers must be separated {#google}

"Google" covers three completely different spend lines. Organic costs us nothing. Ads costs us per click. **LSA costs us per lead and is graded on our answer speed** — and an LSA charge cannot be defended or disputed without accurate attribution (`playbook.lsa`).

Lumping them together makes the marketing budget unreadable: it looks like one enormous channel is carrying the company, when in fact one of the three may be losing money every week and nobody can see it.

## What you say {#verbatim}

The question:

> "One last quick question — how did you hear about us?"

The Google follow-up, which takes four seconds:

> "Do you remember — was it the very top with the green checkmark, or further down the page?"

Getting the referrer's name without sounding administrative:

> "Oh, that's great — so I can thank them properly, do you know their last name, or the street they're on?"

When the caller resists or seems rushed:

> "No problem at all — it just helps us know where to keep showing up. I'll put down that you found us online."

## Weak versus perfect {#worked-example}

| Weak CSM | Perfect CSM |
|---|---|
| Skips the question because the call ran long | Asks it every time; it costs eight seconds |
| Offers a menu: "Google? Yelp?" | Asks open, then resolves with one follow-up |
| Types "Google" and moves on | Asks the green-checkmark question and types "Google — LSA" |
| Types "referral" | Types "Referral — Diane Kessler, Whitman Rd" |
| Leaves it blank when the caller says they forget | Types "Unknown — asked" |
| Types their interpretation of what was said | Types the verbatim phrase, then the resolved bucket |

Worked, on a live call:

> **CSM:** "One last quick question — how did you hear about us?"
> **Caller:** "You came up on Google."
> **CSM:** "Do you remember — was it the very top with the green checkmark, or further down?"
> **Caller:** "The top one, yeah, with the reviews under it."
> **CSM:** "Perfect, thank you. Alright, you're all set for Thursday between two and four…"

Ticket: `Google — LSA`. Notes: *"came up on Google, top with green checkmark and reviews."* That entry is what lets us dispute the charge if the lead is later billed as something it wasn't.

## When it goes wrong {#failures}

**The caller says "I don't remember."** Log "Unknown — asked". Do not guess, and do not lean on them. One honest unknown is worth more than ten confident wrong entries, because the wrong ones move budget.

**Two sources are true at once** — they saw the truck, then searched us on Google. Log the **first touch** that put us in their head, and put the second in the notes. Consistency across the team matters more than which convention we chose.

**A referral with no surname.** Take first name plus street or town. Partial is searchable; blank is not. `playbook.referral`.

**You realise mid-call the source was recorded wrong on an earlier job.** Fix the current ticket, note the correction, and tell the manager. Do not retro-edit a closed job's attribution on your own.

### Hard rules

- Never leave the lead source field blank.
- Never offer a menu of channels before the caller answers.
- Never log a bare "Referral" without a name.
- Never record "Google" without resolving which Google.
- Never invent a source to close the field.

## QA scoring {#qa}

| Score | What it looks like |
|---|---|
| **2** | Asked open at the end of intake, resolved with one follow-up, verbatim phrase in notes, correct bucket in the field, referrer named where applicable. |
| **1** | Asked and logged, but the bucket is unresolved ("Google") or a referrer name is missing. |
| **0** | Field blank, guessed, or a menu was offered and the caller simply agreed with the first option. |

## Related

- Where it lands on the ticket: `sop.csm.ticket-standards`
- The intake sequence it closes: `sop.csm.intake`
- LSA-specific handling and speed grading: `playbook.lsa`
- Marketplace channels: `playbook.angi`, `playbook.thumbtack`, `playbook.yelp`
- Referral capture and thanks: `playbook.referral`
