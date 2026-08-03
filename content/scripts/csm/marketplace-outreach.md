---
id: script.csm.marketplace-outreach
title: Marketplace Lead Outreach Scripts
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-03
review_cadence_days: 90
tags: [script, outbound, marketplace, angi, thumbtack, yelp, speed-to-lead]
related: [playbook.speed-to-lead, playbook.angi, playbook.thumbtack, playbook.yelp, script.csm.voicemail]
section: channels
order: 2
surfaces: [csm, checklist]
---

# Marketplace Lead Outreach Scripts

Outbound to someone who asked for quotes minutes ago. They are expecting calls — the job is to be the one that sounds like a person rather than a call centre.

## The opening call {#opening}

> "Hi [name], this is [your name] at Home+ Air and Heat — I saw your request on [Angi / Thumbtack / Yelp] about [their exact words]. Is now a good time to get you on the schedule?"

Three things are doing the work:

- **Name the platform.** It tells them instantly this isn't a cold call.
- **Quote their own words back** — "the boiler that stopped overnight," not "your heating issue." It proves a human read the request.
- **Close on time, not interest.** "Is now a good time to get you on the schedule" assumes the booking. "Are you still looking?" invites a no.

Then run the normal call: acknowledge (`script.csm.empathy`), intake (`sop.csm.intake`), book (`sop.csm.availability`).

## The two-minute text {#text}

If the first call doesn't connect, text within two minutes:

> "Hi [name] — [your name] from Home+ Air and Heat. Just tried you about the [job type] request you posted. We can get a tech out [today / tomorrow morning]. Reply here or call [number] and I'll lock in a window."

Most people who don't answer an unknown number will read a text within minutes. Offering a **specific** slot beats "let us know when works" every time.

## Later attempts {#later}

**Third and fourth call** — do not re-explain from scratch:

> "Hi [name], [your name] from Home+ Air and Heat again — still holding a spot for you [today/tomorrow] on that [job type]. Want me to book it?"

**Next morning:**

> "Hi [name], [your name] at Home+ Air and Heat. I reached out yesterday about your [job type] request. If you're still looking, I can get someone out today — if you've gone another way, just say so and I'll stop bothering you."

That last clause matters. Giving them permission to close it out gets an honest answer, which is worth more than a lead sitting open for a week.

**Final text at 48 hours:**

> "Hi [name] — last note from Home+ Air and Heat. If you still need help with the [job type], we're here: [number]. Otherwise, good luck with it!"

Then mark unreachable — `playbook.speed-to-lead`.

## In-platform replies {#in-platform}

Thumbtack and Yelp both put the reply in front of the customer next to competitors' replies. Keep it short and specific:

> "Hi [name] — thanks for reaching out about the [job type]. We're licensed and insured and cover all of Nassau and Suffolk. I can get a tech to you [today / tomorrow morning] — what's the best number to confirm a window?"

Do not paste a capability brochure. They are comparing five of those already. Name the job, name a real time, ask one question.

## If they already booked someone {#lost}

> "No problem at all — thanks for letting me know. If it doesn't work out, keep our number."

**No pitch, no undercutting, no asking who they went with.** Log it as Lost and move on. They remember graceful, and marketplace customers come back around.

## If it isn't a real lead {#not-a-lead}

Wrong service, outside Nassau or Suffolk, or obviously spam — be brief and useful (`sop.csm.service-area`), then **mark it unqualified and file the dispute in the platform the same day**. That is money back.

## Never do this {#never}

- ❌ Don't lead with price. They asked for a quote; they get a booking first.
- ❌ Don't mention what the lead cost us. Ever.
- ❌ Don't leave a voicemail *instead of* a text — do both. Script in `script.csm.voicemail`.
- ❌ Don't say "I'm following up on your inquiry." That is the sentence every other contractor is using.

## Related

- The standard and cadence: `playbook.speed-to-lead`
- Voicemail wording: `script.csm.voicemail`
