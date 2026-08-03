---
id: playbook.thumbtack
title: Channel Playbook — Thumbtack
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [thumbtack, marketplace, lead, channel, playbook, speed-to-lead, servicetitan, manual-capture]
related: [playbook.speed-to-lead, script.csm.marketplace-outreach, sop.csm.lead-source, sop.csm.tools, playbook.yelp]
section: channels
order: 6
surfaces: [csm, checklist]
---

# Channel Playbook — Thumbtack

> **Thumbtack does not reach ServiceTitan.** These leads live only in the Thumbtack app and its email notifications. Nothing about them exists in our system of record until a CSM puts it there by hand.

That is the whole problem with this channel, and it has two consequences worth naming plainly.

## Why this one goes missing {#invisible}

**1. Nobody is watching.** An Angi lead lands in ServiceTitan where the team already works. A Thumbtack lead lands in an app on somebody's phone. When the phones are busy, nothing makes it interrupt anyone.

**2. We cannot currently measure it.** Because Thumbtack leads never enter ServiceTitan unless someone types them in, we have **no reliable record of how many we get, how fast we respond, or how many become jobs**. Cost per booked job for this channel is, right now, unknowable. Every number we might quote about Thumbtack is a guess.

Fixing the second problem is a side effect of fixing the first: capture the lead in ST and it becomes measurable.

## What makes Thumbtack different on the call {#character}

The customer sees responses **side by side**, with timestamps. Unlike a phone call they either answer or miss, a Thumbtack reply sits in a list next to every competitor's.

- **Late is visible.** On Angi, being third to call is invisible. Here the customer can see it.
- **The written reply is a first impression.** It gets read and compared, so wording matters more than on any other channel.

## Handling {#handling}

1. **Reply in the Thumbtack app within {{price:marketplace_callback_sla}}.** If you are mid-call, the in-app message holds the position; a call twenty minutes later does not.
2. **Call.**
3. **Create the ServiceTitan lead at first touch — not after it books.** Source: **Thumbtack**. See below.
4. Work the full cadence — `playbook.speed-to-lead`.
5. Record the outcome on the ST lead the same day.

## Create the ST lead at first touch {#st-capture}

**This is the step that will get skipped, and it is the one that matters most.**

The temptation is to work the lead in Thumbtack and only create the ServiceTitan record once it turns into a booking. Do not. A lead only entered when it converts produces:

- **No record of the ones that didn't convert** — so the channel looks like it has a 100% close rate on a handful of jobs, which is worse than no data.
- **No attribution** — `sop.csm.lead-source` cannot do its job.
- **No dispatch handoff** — the tech gets a booking with no history behind it.
- **No way to know if we are fast**, because there is no timestamp to measure against.

Create it when you first touch it, whatever the outcome turns out to be. It takes under a minute and it is the difference between a channel we manage and a channel we guess about.

## The in-app reply {#reply}

Short, specific, clearly written by a person:

> "Hi [name] — thanks for reaching out about the [job type]. We're licensed and insured, based on Long Island, and we can have a tech out [today / tomorrow morning]. Happy to call and lock in a window — what number is best?"

Do not paste a capability brochure. They are comparing five of those already. Name the job, name a real time, ask one question.

## Cost discipline {#cost}

Thumbtack charges per lead or contact depending on the setup, so **an unworked Thumbtack lead is a direct loss** in the same way as Angi. Bad leads — wrong service, out of area, spam — get flagged in Thumbtack for dispute **and** marked unqualified on the ST lead, the same day.

## Open decision — integrate, or keep dual entry? {#open-decision}

Manual capture works and the standard above assumes it. But it is a step that depends on a person remembering during exactly the moments they are busiest, which is a fragile place to put a measurement system.

**For the owner:** is it worth connecting Thumbtack to ServiceTitan — via a lead integration, a connector, or an email parser into the ST API — so these land the way Angi already does?

Until that is decided, **manual capture is mandatory**, not optional. The channel is unmeasurable without it.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- Outreach scripts: `script.csm.marketplace-outreach`
- The other unintegrated channel: `playbook.yelp`
