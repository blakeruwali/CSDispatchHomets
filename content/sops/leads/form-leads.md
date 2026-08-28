---
id: sop.leads.form-leads
title: Facebook & Form Lead Response
department: leads
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [facebook, form-lead, web-lead, meta, speed-to-lead, callback, intake]
related: [sop.leads.missed-calls, sop.csm.intake, sop.csm.booking-authority, sop.csm.lead-source, playbook.web, playbook.speed-to-lead, sop.csm.kpis]
section: leads-recovery
order: 3
surfaces: [leads, checklist]
acknowledgement: required
---

# Facebook & Form Lead Response

> **A form lead is a person standing in a room full of contractors. The first real human voice on the phone wins the job — everyone else gets voicemail.**

Facebook, Instagram, Google, and website forms all produce the same thing: a name, a number, and a problem typed in a hurry. That lead went to us and — on marketplaces and Meta especially — often to two or three competitors at the same time. Form leads are not worked "when the board calms down." They are worked the moment they land, because their value decays by the minute.

## The rule {#rule}

**Every form lead gets a live call attempt within 5 minutes of landing during business hours. Leads that land after hours are called at the very start of the next shift — before the missed-call sweep, in the order they arrived.**

A form lead is never parked in a queue, an inbox, or a CRM tab. If it isn't called, it dies.

## The moment the lead lands {#first-response}

1. **Call first. Within 5 minutes.** Not a text, not an email, not an in-platform reply — a phone call. Speed beats polish.
2. **Open with their own words.** Form leads doubt a human read their form. Prove it immediately:

   > "Hi [name], this is [Name] with home+ Air & Heat — I just got your request about [the exact issue they typed, e.g. 'the AC that stopped cooling upstairs']. Is now a good time to lock in a visit?"

3. **If no answer: text within 2 minutes.** Same minute, while the number is warm:

   > "Hi [name] — [Name] from home+ Air & Heat. Just tried you about the [job type] you requested. We can get a tech out [today / tomorrow morning]. Reply here or call [number] and I'll lock in a window."

4. **If it came through Facebook/Instagram, also reply in the platform.** Many Meta leads live in Messenger — meet them where they submitted:

   > "Hi [name], thanks for reaching out to home+ Air & Heat about the [job type]. We're licensed and insured and cover all of Nassau and Suffolk. I can get a tech to you [today / tomorrow morning] — what's the best number to confirm a window?"

   Keep it short. Name the job, name a real time, ask one question.

## The attempt cadence {#cadence}

| Attempt | Timing | Channel |
|---|---|---|
| 1 | Within 5 minutes | Call → text if no answer |
| 2 | 2 hours later | Call → text |
| 3 | Next morning | Call → text |
| Final | 48 hours | Closing text, then mark unreachable |

Closing text:

> "Hi [name] — last note from home+ Air & Heat. If you still need help with the [job type], we're here: [number]. Otherwise, good luck with it!"

**Three call attempts, then stop.** Note every attempt on the ticket so the next CSM doesn't restart the count. Texts count against the caps in `playbook.sms`. Giving them permission to close it out ("if you've gone another way, just say so") gets honest answers, which are worth more than a lead sitting open for a week.

## The conversation, once they answer {#conversation}

A form lead is a normal call once they're live — full intake (`sop.csm.intake`), symptom clarification, diagnostic fee posture, and book it (`sop.csm.booking-authority`). Two differences:

- **They may not remember submitting the form** — Meta forms autofill and people tap through fast. If they sound confused, anchor them: "You requested a quote for [issue] on Facebook a few minutes ago — I wanted to catch you while it's fresh." Never make them feel foolish; confusion is normal, not a brush-off.
- **Close on time, not interest.** "Is now a good time to get you on the schedule?" assumes the booking. "Are you still looking?" invites a no.

**If they already booked someone:**

> "No problem at all — thanks for letting me know. If it doesn't work out, keep our number."

No pitch, no undercutting, no asking who they went with. Log it as Lost and move on.

## Source attribution {#source}

Log the source **accurately and verbatim** (`sop.csm.lead-source`): "Facebook," "Instagram," "Google form," or "website" are different spend lines. Facebook/Instagram leads are paid Meta leads — lumping them in with website organic forms makes the marketing budget unreadable. If the platform tagged the lead (e.g. "Facebook Lead Form — AC Repair Campaign"), keep that tag on the ticket.

## If it isn't a real lead {#not-a-lead}

Wrong service, outside Nassau or Suffolk, obvious spam, or a duplicate — be brief and useful (`sop.csm.service-area`), then **mark it unqualified and file the dispute in the platform the same day.** Meta and Google both credit invalid leads, but only inside a short window. A dispute filed tomorrow may be money thrown away.

## End-of-day sweep {#sweep}

Same standard as missed calls (`sop.leads.missed-calls`): before the last CSM logs off, every form lead from the day has an outcome logged — booked, quoted, declined, already booked elsewhere, unreachable after three attempts, or unqualified/disputed. Anything unresolved goes on tomorrow's morning list, first thing.

## Why this is measured {#why}

Form leads are pre-paid opportunities — marketing already bought them, and the only variable is our speed. First-touch time (target: ≤ 5 minutes) and form-lead booking rate sit on the CSM scoreboard (`sop.csm.kpis`), because a form answered in an hour is usually answered by someone else's tech already standing in the driveway.

## Related

- Missed-call recovery standard: `sop.leads.missed-calls`
- Full intake once they're live: `sop.csm.intake`
- Booking authority: `sop.csm.booking-authority`
- Source mapping: `sop.csm.lead-source`
- Website form playbook: `playbook.web`
- Speed-to-lead standard: `playbook.speed-to-lead`
