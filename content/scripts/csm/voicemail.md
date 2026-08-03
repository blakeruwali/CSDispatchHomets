---
id: script.csm.voicemail
title: Voicemail Scripts
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [voicemail, script, missed-call, callback, after-hours]
related: [playbook.web, playbook.sms, sop.csm.no-show-recovery, sop.csm.communication]
section: channels
order: 11
surfaces: [csm, checklist]
---

# Voicemail Scripts

Word-for-word. A voicemail is often the customer's first impression of us, and it is the one contact where you get no chance to recover a bad start.

## Returning a missed customer call {#missed-call}

> "Hi [name], this is [your name] from Home+ Air and Heat. I'm returning your call about [issue if known]. I'd love to help you get that taken care of. You can reach us back at [number] — we're available {{price:csm_hours}}. Thanks and talk soon!"

Naming their issue is what separates this from a robocall. If you know why they called, say it.

Pair it with a text — `playbook.sms` — within {{price:sms_textback_sla}}. Voicemail plus text converts far better than either alone.

## Appointment confirmation {#confirmation}

> "Hi [name], this is [your name] from Home+ Air and Heat confirming your appointment for [date] between [window]. If you need to reschedule, give us a call at [number]. We look forward to seeing you!"

## After a no-show {#no-show}

> "Hi [name], this is [your name] from Home+ Air and Heat. We had you on the schedule today but it looks like we may have missed you. No worries — give us a call at [number] and we'll get you rescheduled at a time that works. Thanks!"

**"No worries" is doing real work here.** Most no-shows are embarrassed, and an embarrassed customer avoids the callback. Removing the blame is what gets the rebook — see `sop.csm.no-show-recovery`.

## After-hours auto-attendant {#after-hours}

> "Thank you for calling Home+ Air and Heat. Our office is currently closed. Our regular hours are {{price:csm_hours}}, {{price:csm_days}}. If this is a heating or cooling emergency, please press 1 to reach our on-call technician. Otherwise, leave a message and we'll return your call the next business day. Thank you!"

The emergency option must come **before** the leave-a-message option. Someone smelling gas should not have to listen to the full menu.

## Rules for every voicemail {#rules}

- **Say the callback number twice** — once mid-message, once at the end.
- **Under 20 seconds.** Long voicemails get deleted at second five.
- **Leave your name.** The customer should be able to ask for you by name.
- **Never leave pricing in a voicemail.** Fee framing needs a live conversation — `sop.csm.diagnostic-fee`.
- **Log it on the ticket.** An unlogged voicemail gets duplicated by the next CSM.

## Related

- Web lead voicemail timing: `playbook.web`
- Text-back pairing: `playbook.sms`
