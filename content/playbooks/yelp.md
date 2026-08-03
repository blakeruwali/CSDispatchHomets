---
id: playbook.yelp
title: Channel Playbook — Yelp
department: csm
owner: cs-manager
status: in-review
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [yelp, marketplace, lead, channel, playbook, speed-to-lead, reputation]
related: [playbook.speed-to-lead, script.csm.marketplace-outreach, sop.csm.lead-source, script.csm.review-request]
section: channels
order: 7
surfaces: [csm, checklist]
---

# Channel Playbook — Yelp

> ⚠️ **In review.** Handling is settled; how leads reach us is not. Same open question as `playbook.angi`.

## What makes Yelp different {#character}

Yelp is the only one of the three where **slow responses damage the channel itself, not just the individual lead**.

Yelp publishes a response-time indicator on the business profile and factors responsiveness into how prominently a business surfaces. So a week of ignored Yelp messages doesn't only lose those jobs — it degrades the profile that generates future ones, and it does so where prospective customers can see it.

**This is the channel where neglect compounds.**

## Handling {#handling}

1. **Respond within {{price:marketplace_callback_sla}}** — reply in Yelp messaging *and* call.
2. **Always reply in-platform**, even if you also reach them by phone. The in-app reply is what the response-time metric counts.
3. Work the full cadence — `playbook.speed-to-lead`.
4. Log the outcome the same day in `/leads`.
5. Lead source on the ticket: **Yelp** — `sop.csm.lead-source`.

## The in-app reply {#reply}

> "Hi [name] — thanks for getting in touch about the [job type]. We're licensed and insured and cover all of Nassau and Suffolk. I can get a tech to you [today / tomorrow morning] — what's the best number to confirm a window?"

Reply first, then call. Reversing the order can leave a booked job sitting next to an unanswered-looking message on the profile.

## Reputation is one system {#reputation}

Yelp messaging and Yelp reviews feed the same profile. A customer who waited two days for a reply is not a customer who leaves a five-star review afterwards.

Our review requests are gated on a survey score of {{price:review_survey_gate}} or higher — `script.csm.review-request` — and response speed is upstream of that score. Speed to lead is a reputation programme wearing a sales hat.

## Never argue on the platform {#never-argue}

Anything typed into Yelp messaging is on a public-facing platform and may be screenshotted. Complaints, disputes and refund conversations move to the phone immediately — `sop.csm.escalation`. Never negotiate in writing on Yelp.

## Open question {#open-question}

Same as Angi and Thumbtack. Yelp messages typically generate an email notification, which usually makes parsing viable, but this needs confirming. Until then, **enter these manually as they land**.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- Outreach scripts: `script.csm.marketplace-outreach`
- Review requests: `script.csm.review-request`
