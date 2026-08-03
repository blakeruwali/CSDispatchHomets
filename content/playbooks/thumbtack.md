---
id: playbook.thumbtack
title: Channel Playbook — Thumbtack
department: csm
owner: cs-manager
status: in-review
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [thumbtack, marketplace, lead, channel, playbook, speed-to-lead]
related: [playbook.speed-to-lead, script.csm.marketplace-outreach, sop.csm.lead-source]
section: channels
order: 6
surfaces: [csm, checklist]
---

# Channel Playbook — Thumbtack

> ⚠️ **In review.** Handling is settled; how leads reach us is not. Same open question as `playbook.angi`.

## What makes Thumbtack different {#character}

On Thumbtack the customer sees responses **side by side**. Unlike a phone call they either answer or miss, a Thumbtack reply sits in a list next to every competitor's reply — with a timestamp.

That changes two things:

- **Late is visible.** On Angi, being third to call is invisible. Here, arriving after four other pros is something the customer can literally see.
- **The written reply is a first impression.** It gets read and compared, so the wording matters more than on any other channel.

## Handling {#handling}

1. **Respond within {{price:marketplace_callback_sla}}** — reply in-platform *and* call.
2. **Reply in the app first if you can't call immediately.** A message inside two minutes holds the position while you finish the call you're on; a call twenty minutes later does not.
3. Then work the full cadence — `playbook.speed-to-lead`.
4. Log the outcome the same day in `/leads`.
5. Lead source on the ticket: **Thumbtack** — `sop.csm.lead-source`.

## The in-app reply {#reply}

Short, specific, and clearly written by a person:

> "Hi [name] — thanks for reaching out about the [job type]. We're licensed and insured, based on Long Island, and we can have a tech out [today / tomorrow morning]. Happy to call and lock in a window — what number is best?"

Do not paste a capability brochure. They are comparing five of those already. Name the job, name a real time, ask one question.

## Cost discipline {#cost}

Thumbtack charges per lead or contact depending on the setup, so **an unworked Thumbtack lead is a direct loss** in the same way as Angi. Bad leads — wrong service, out of area, spam — go in as **"Not a lead"** with the reason on the same day so they can be disputed.

## Open question {#open-question}

Same as Angi: shared inbox, personal inbox, or app-only? Thumbtack notifications commonly arrive by both email and push, which usually makes email parsing viable — but it needs confirming before anything is built on it. Until then, **enter these manually as they land**.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- Outreach scripts: `script.csm.marketplace-outreach`
