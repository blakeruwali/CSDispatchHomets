---
name: daily-ops-brief
description: Assemble the Homets daily operations brief — today's board and appointments, open proposals needing follow-up, membership renewals coming due, missed-call and lead-response gaps, and stale SOP docs. Use when asked "what's today look like", for a morning/EOD brief, or any status roll-up across the business.
---

# Daily ops brief

One page the owner can act on. Pull live data — a brief built on guesses is
worse than no brief.

## Sources

1. **ServiceTitan** (`homets-servicetitan` skill): today's appointments and
   windows, technician availability, open proposals/estimates with age and
   amount, recent jobs missing follow-up.
2. **Gmail / Slack / Google Calendar** (if connected): unanswered customer
   emails, #csm-ops announcements pending, calendar conflicts. (ClickUp is
   retired — don't pull from or write to it.)
3. **This repo**: `npm run validate:content` for content errors/staleness;
   `content/INDEX.md` open questions still awaiting the owner.

## Structure (in priority order)

1. **Today's board** — jobs by window against capacity
   (`tech_daily_capacity` = 4 core jobs; board should have been locked by
   5 PM yesterday). Flag: unacknowledged first job (tech ack due 7 AM),
   long jobs not blocked first, overflow windows in use.
2. **Money in motion** — open proposals by age; anything past the follow-up
   cadence in `content/sops/sales/follow-up.md` gets named with the next
   action. Outstanding balances if visible.
3. **Lead-response risk** — any lead outside its SLA (marketplace 5 min,
   web 5 min, LSA 15 min, voicemail 30 min, Posh tickets by 8 AM). These are
   the most expensive misses; put them first when present.
4. **Memberships** — renewals inside the 30-day window
   (`retention_call_lead_time`), lapsed members with jobs booked.
5. **Follow-ups & reviews** — completed jobs awaiting post-service follow-up
   (note C3 is unresolved: manual vs automated) and review requests gated on
   survey ≥ 4.
6. **The SOP itself** — validation failures, stale docs, open owner
   decisions (C2/C3/C4, maintenance price, referral credit) worth a nudge.

## Rules

- Every line ends in an action with an owner ("call", "rebook", "decide"),
  not a statistic.
- Quote real names, amounts, and windows. If a source is unavailable, say
  which section is blind rather than filling it in.
- Keep it under a page; detail goes in an appendix only if asked.
