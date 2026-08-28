---
id: sop.leads.form-leads
title: Facebook & Form Lead Response
department: leads
owner: cs-manager
status: published
version: 3
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

**Every Facebook / Instagram / form lead gets a live call attempt within 1 minute of the notification landing during business hours. Leads that land after hours are called at the very start of the next shift — before the missed-call sweep, in the order they arrived.**

A form lead is never parked in a queue, an inbox, or a CRM tab. If it isn't called, it dies.

## Coverage & legal contact windows {#coverage-hours}

**The desk is covered 6:00 AM – 10:00 PM, seven days a week.** The owner (Devi) holds the desk outside CSM hours — leads that land between 6 AM and 10 PM get the same 1-minute call, whoever is covering.

**Legal calling window: 8:00 AM – 9:00 PM (customer's local time).** Federal telemarketing law (TCPA) prohibits marketing calls and texts to residences before 8 AM or after 9 PM. This is not a guideline — violations carry per-call penalties. Our coverage is wider than the legal window, so the rules are:

| Lead lands | What happens |
|---|---|
| **8:00 AM – 9:00 PM** | Call within 1 minute. If no answer: text + email within 2 minutes. |
| **6:00 AM – 8:00 AM** | **Do not call yet.** Log the lead, prepare the ticket. At **8:00 AM sharp**, call — then text + email if no answer. The lead still gets a sub-5-minute response measured from the legal open. |
| **9:00 PM – 10:00 PM** | **Do not call or text.** Send the **email only** (email has no legal hour restriction). Call + text at **8:00 AM the next morning**, before anything else on the board. |
| **10:00 PM – 6:00 AM** (desk dark) | Queue in arrival order. At **8:00 AM sharp**, call in the order they arrived — these leads go first, ahead of the missed-call sweep. |

**Never call or text before 8 AM or after 9 PM — no exceptions, even if the lead just came in.** A lead that arrived at 9:30 PM is far more likely to book from a prompt 8 AM call than from a 9:45 PM call that wakes the house and irritates them. Speed matters, but only inside the legal window; outside it, *first at 8 AM* is the speed standard.

## Where the lead shows up {#notifications}

A new Meta lead fires notifications to **email and the app** at the same time. Whoever sees it first owns it — there is no "I thought someone else had it." The standard:

- Notifications for the lead inbox and the app are **on, audible, and checked on every shift** — never muted, never "I'll check it later."
- The moment the notification lands, the clock starts: **call inside 1 minute.**
- If two people see it, the first to dial owns it; the second logs nothing and moves on.

## The moment the lead lands {#first-response}

1. **Call first. Within 1 minute.** Not a text, not an email, not an in-platform reply — a phone call. Speed beats polish.
2. **Open with their own words — name the ad or offer they responded to.** Form leads doubt a human read their form. Prove it immediately:

   > "Hi [name], this is [Name] with home+ Air & Heat — you just sent us a request through our Facebook ad for [the exact offer / issue, e.g. 'the AC tune-up special' or 'the AC that stopped cooling upstairs']. I wanted to catch you while it's fresh — is now a good time to lock in a visit?"

3. **If no answer: text and email within 2 minutes.** Same minute, while the number is warm — both channels, not one:

   > Text: "Hi [name] — [Name] from home+ Air & Heat. Just tried you about the [job type / offer] you requested on Facebook. We can get a tech out [today / tomorrow morning]. Reply here or call [number] and I'll lock in a window."

   > Email subject: "Your [job type] request — home+ Air & Heat" — one short paragraph naming their request, one real time offered, one question, our number.

4. **If it came through Facebook/Instagram, also reply in the platform.** Many Meta leads live in Messenger — meet them where they submitted:

   > "Hi [name], thanks for reaching out to home+ Air & Heat about the [job type]. We're licensed and insured and cover all of Nassau and Suffolk. I can get a tech to you [today / tomorrow morning] — what's the best number to confirm a window?"

   Keep it short. Name the job, name a real time, ask one question.

## The attempt cadence {#cadence}

| Attempt | Timing | Channel |
|---|---|---|
| 1 | Within 1 minute (legal window 8 AM – 9 PM; leads outside it are called at 8 AM sharp) | Call → text + email if no answer |
| 2 | 2 hours later | Call → text |
| 3 | Next morning | Call → text |
| Final | 48 hours | Closing text, then mark unreachable |

**Attempts 2 and 3 also stay inside the 8 AM – 9 PM window.** Never stack a call, a text, and an email back-to-back on attempts 2 and 3 — one call, one text per attempt. The full-court press (call + text + email + Messenger) belongs to attempt 1 only; after that, restraint is what keeps the lead warm instead of blocked.

Closing text:

> "Hi [name] — last note from home+ Air & Heat. If you still need help with the [job type], we're here: [number]. Otherwise, good luck with it!"

**Three call attempts, then stop.** Note every attempt on the ticket so the next CSM doesn't restart the count. Texts count against the caps in `playbook.sms`. Giving them permission to close it out ("if you've gone another way, just say so") gets honest answers, which are worth more than a lead sitting open for a week.

## The conversation, once they answer {#conversation}

A form lead is a normal call once they're live — full intake (`sop.csm.intake`), symptom clarification, diagnostic fee posture, and book it (`sop.csm.booking-authority`). The goal on every live conversation is a **booked appointment**: an estimate visit if the lead came from a replacement/estimate offer, a diagnostic visit if it came from a repair or tune-up offer. Even a hesitant "I'm not sure" is worked toward a booking — the appointment is the product.

- **Close on time, not interest.** "Is now a good time to get you on the schedule?" assumes the booking. "Are you still looking?" invites a no.

## "I don't remember inquiring" {#confused-leads}

This is the most common Facebook-lead moment, and it is **normal — not a brush-off.** Meta forms autofill name and number; people tap through in seconds and genuinely forget. Never argue, never make them feel foolish, and never hang up on a confused lead. Anchor them with three facts and pivot straight to the booking:

1. **Where it happened:** "You filled out a short form on Facebook [this morning / about an hour ago] — it autofills your info, so it only takes a tap."
2. **What it was about:** "It was our ad for [the exact offer — 'the AC tune-up special' / 'a free replacement estimate' / 'the no-cooling diagnostic']."
3. **Why you're calling so fast:** "We call right back while it's fresh so you don't sit in a queue."

Then pivot, gently but directly:

> "While I have you — is the [system / issue] still acting up? … Then let's do this: I can have a licensed tech out [today / tomorrow morning]. The diagnostic is {{price:diagnostic_residential}} and it comes off the work if you move forward. Which window works better?"

If they truly have no issue and no interest after the anchor — log it accurately ("doesn't recall / no need"), don't re-argue, and keep the disposition honest. But **one anchor attempt is mandatory on every confused lead before you let it go.**

**If they already booked someone:**

> "No problem at all — thanks for letting me know. If it doesn't work out, keep our number."

No pitch, no undercutting, no asking who they went with. Log it as Lost and move on.

## Source attribution {#source}

Log the source **accurately and verbatim** (`sop.csm.lead-source`): "Facebook," "Instagram," "Google form," or "website" are different spend lines. Facebook/Instagram leads are paid Meta leads — lumping them in with website organic forms makes the marketing budget unreadable. If the platform tagged the lead (e.g. "Facebook Lead Form — AC Repair Campaign"), keep that tag on the ticket.

## If it isn't a real lead {#not-a-lead}

Wrong service, outside Nassau or Suffolk, obvious spam, or a duplicate — be brief and useful (`sop.csm.service-area`), then **mark it unqualified and file the dispute in the platform the same day.** Meta and Google both credit invalid leads, but only inside a short window. A dispute filed tomorrow may be money thrown away.

## End-of-day sweep {#sweep}

Same standard as missed calls (`sop.leads.missed-calls`): before the last CSM logs off, every form lead from the day has an outcome logged — booked, quoted, declined, already booked elsewhere, unreachable after three attempts, or unqualified/disputed. Anything unresolved goes on tomorrow's morning list, first thing.

## The target: 60% booking rate {#target}

**Every social/form lead channel is held to a minimum 60% booking rate** — six of every ten Facebook, Instagram, or form leads end the week with a booked estimate or diagnostic on the calendar.

| Metric | Target |
|---|---|
| First-touch time (call attempt) | ≤ 1 minute |
| Leads reached by a live voice | ≥ 80% |
| **Booking rate (booked ÷ total valid leads)** | **≥ 60%** |
| Invalid leads disputed same day | 100% |

The five levers that move the rate, in order of impact:

1. **Speed.** A lead called in the first minute books far more often than one called in an hour. Everything else is secondary to this.
2. **All three channels on the first miss** — call, then text *and* email inside 2 minutes, plus the Messenger reply on Meta leads. One channel is not an attempt.
3. **Anchor every confused lead** with the ad, the timing, and the offer before accepting a no (`#confused-leads`).
4. **Offer two named windows, never "when are you free?"** An open question invites "let me think about it"; two real times invite a choice.
5. **Clean the denominator.** Spam, wrong-service, and out-of-area leads are disputed and marked unqualified the same day so the rate reflects real opportunities, not junk.

Rate is reviewed weekly per CSM and per campaign on the CSM scoreboard (`sop.csm.kpis`). A campaign booking under 60% for two straight weeks is a marketing conversation, not just a CSM one — flag it to the CS manager with the disposition breakdown.

## Why this is measured {#why}

Form leads are pre-paid opportunities — marketing already bought them, and the only variable is our speed. A form answered in an hour is usually answered by someone else's tech already standing in the driveway.

## Related

- Missed-call recovery standard: `sop.leads.missed-calls`
- Full intake once they're live: `sop.csm.intake`
- Booking authority: `sop.csm.booking-authority`
- Source mapping: `sop.csm.lead-source`
- Website form playbook: `playbook.web`
- Speed-to-lead standard: `playbook.speed-to-lead`
