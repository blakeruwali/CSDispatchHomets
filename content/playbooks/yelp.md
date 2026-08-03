---
id: playbook.yelp
title: Channel Playbook — Yelp
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [yelp, marketplace, lead, channel, playbook, speed-to-lead, reputation, servicetitan, manual-capture]
related: [playbook.speed-to-lead, script.csm.marketplace-outreach, sop.csm.lead-source, sop.csm.tools, script.csm.review-request, playbook.thumbtack]
section: channels
order: 7
surfaces: [csm, checklist]
---

# Channel Playbook — Yelp

> **Yelp does not reach ServiceTitan.** Like Thumbtack, these leads live only in Yelp — nothing exists in our system of record until a CSM creates it by hand.

Yelp is the worst of the three to neglect, for a reason specific to the platform.

## Slow responses damage the channel itself {#compounding}

Yelp publishes a response-time indicator on the business profile and factors responsiveness into how prominently a business surfaces.

So a stretch of ignored Yelp messages does not only lose those jobs. It **degrades the profile that generates future ones**, and it does so somewhere prospective customers can see. On Angi a slow week costs you that week's leads. On Yelp it costs you next month's too.

**This is the channel where neglect compounds.**

## Handling {#handling}

1. **Reply in Yelp messaging within {{price:marketplace_callback_sla}}.** Always in-platform, even if you also reach them by phone — the in-app reply is what the response-time metric counts.
2. **Call.**
3. **Create the ServiceTitan lead at first touch — not after it books.** Source: **Yelp**.
4. Work the full cadence — `playbook.speed-to-lead`.
5. Record the outcome on the ST lead the same day.

Reply first, then call. Reversing the order can leave a booked job sitting next to an unanswered-looking message on a public profile.

## Create the ST lead at first touch {#st-capture}

Same rule and same reasoning as `playbook.thumbtack` — and the same step that will get skipped.

Without it we have no record of Yelp volume, no response-time measurement, no attribution, and no way to say whether Yelp is worth what we pay for it. **Cost per booked job on this channel is currently unknowable.**

Create the ST lead when you first touch the message, whatever the outcome turns out to be.

## The in-app reply {#reply}

> "Hi [name] — thanks for getting in touch about the [job type]. We're licensed and insured and cover all of Nassau and Suffolk. I can get a tech to you [today / tomorrow morning] — what's the best number to confirm a window?"

## Reputation is one system {#reputation}

Yelp messaging and Yelp reviews feed the same profile. A customer who waited two days for a reply is not a customer who leaves a five-star review afterwards.

Our review requests are gated on a survey score of {{price:review_survey_gate}} or higher — `script.csm.review-request` — and response speed is upstream of that score. Speed to lead is a reputation programme wearing a sales hat.

## Never argue on the platform {#never-argue}

Anything typed into Yelp messaging is on a public-facing platform and may be screenshotted. Complaints, disputes and refund conversations move to the phone immediately — `sop.csm.escalation`. Never negotiate in writing on Yelp.

## Open decision — integrate, or keep dual entry? {#open-decision}

**For the owner:** same question as Thumbtack — is it worth connecting Yelp leads into ServiceTitan so they land the way Angi already does?

Yelp carries an extra argument for doing it: because response time affects profile ranking here, the cost of a missed message is larger than the single lost job, and manual capture is the only thing currently standing between us and that.

Until it is decided, **manual capture is mandatory**.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- Outreach scripts: `script.csm.marketplace-outreach`
- Review requests: `script.csm.review-request`
- The other unintegrated channel: `playbook.thumbtack`
