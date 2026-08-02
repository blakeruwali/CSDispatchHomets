---
id: script.csm.review-request
title: Google Review Request
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [review, google, reputation, script, feedback]
related: [sop.csm.post-service-followup, sop.csm.confirmation-cadence, playbook.sms]
surfaces: [csm, checklist]
---

# Google Review Request

**Timing:** immediately after the customer expresses satisfaction — never before, never cold.

## The ask {#ask}

> "I'm really glad we could help! If you have a moment, it would mean a lot to us if you could leave us a quick Google review. I can text you the link right now — it only takes about 30 seconds. Would that be okay?"

Two things make this work: **"it would mean a lot to us"** (a favour between people, not a corporate request) and **"about 30 seconds"** (removes the unspoken objection that it's a chore).

## Sending the link {#link}

- Use the review link template in the ServiceTitan automated messages.
- Manual fallback: "Here's the link to leave a review: [URL]. Thank you so much!"
- Email instead if they'd rather.

Send it **while they're still on the phone**, so it's arriving as you say goodbye.

## Hard rules {#rules}

- **Never offer a discount, credit, or incentive for a review.** It violates Google's policy and can cost us the whole review profile — far more than the review was worth.
- **Never say "5-star review."** Ask for honest feedback. Soliciting a specific rating is also a policy violation.
- **Never ask an unhappy customer.** If satisfaction wasn't clearly expressed, there is no ask.
- **Don't pressure.** If they say no: *"No problem at all!"* — and mean it. Move on.

## The automated path {#automated}

Most review requests fire automatically two days post-service, gated on a survey score of {{price:review_survey_gate}} or higher — `sop.csm.confirmation-cadence`. The manual ask is for the calls where a customer volunteers that they're delighted; it is not a second attempt at customers who ignored the automated one.

Check whether the automation already went out before asking manually. Two review requests for one job reads as desperate.

## Related

- The follow-up call this belongs to: `sop.csm.post-service-followup`
- Automated cadence and the score gate: `sop.csm.confirmation-cadence`
