---
name: dispatch-triage
description: Answer scheduling, booking, dispatch-board, and emergency-triage questions for Homets — is this an emergency, which window to book, service area, residential vs commercial routing, job durations, exception handling (running long, no-show, part not on truck), and dispatch-day planning. Use for any "how do we handle this call/job" question.
---

# Dispatch & triage

How Homets decides what gets booked where, and what happens when the day
breaks. Constants live in `content/pricing/tokens.md` — quote them from
there, current values, never memory.

## Safety first — always check triage before anything else

`content/protocols/emergency/triage.md` overrides every other doc. Gas smell /
CO alarm / sparks → safety instruction, 911/utility, **then** dispatch — in
that order. No heat below `emergency_temp_cold` (40°F) or no AC above
`emergency_temp_hot` (95°F) with a vulnerable occupant = same-day priority.
Missing triage caps a QA score at 60%. If a scenario has any safety signal,
lead with the triage answer.

## The booking decision, in order

1. **Triage** — above.
2. **Service area** — Nassau & Suffolk; out-of-area and fully-booked handling
   in `content/sops/csm/service-area.md`.
3. **Res vs commercial** — `content/sops/csm/res-vs-comm.md`; different
   diagnostic fee and labor rate tokens.
4. **Service type & system type** — `content/sops/csm/service-type.md`,
   `system-type.md`. Replacement estimate = free (`estimate_install`), never
   booked as a diagnostic.
5. **Membership check** — `content/sops/csm/membership-status.md`; member
   diagnostic is waived.
6. **Window** — the standard four (`service_windows`: 8–10, 10–12, 12–2,
   2–4). Overflow 4–6 / 6–8 only with Dispatch approval. Same-day after
   `same_day_cutoff` (3 PM) needs Dispatch approval.
7. **Fee framing** — `content/sops/csm/diagnostic-fee.md`; credited in full
   on approved repair/replacement. No after-hours surcharge, ever.

## The dispatch day

`content/sops/dispatch/` — daily-workflow, priorities, job-duration, hours.
Key constants: board locked for tomorrow by 5 PM (`board_lock`); one
technician, 4 core jobs/day (`tech_daily_capacity`); tech check-in every 90
minutes; 30-minute overrun → call Dispatch; late arrival → customer hears a
named time before the window opens, never "on the way". Long jobs
(`job_duration_long`, 4+ hrs) are blocked on the board first. If we bump a
customer, their diagnostic is waived and they're rebooked to a named window
on a live call before leaving the board (`bump_*` tokens).

## Exceptions

The 16 exception protocols (repair running long, part not on truck, customer
no-show, misbooked, locked out, disputes, VIP, warranty callback, outstanding
balance…) are still in the legacy deck
`src/components/presentation/slideData.tsx` pending migration — search it for
the scenario and answer from what it says, noting it's unmigrated. Warranty
callback identification (no new fee on our own recent work) is published:
`content/sops/csm/warranty-callback.md`.

## Live data

Use the `homets-servicetitan` skill for actual availability, today's board,
and appointment lookups — never guess open windows.

## Open questions — flag, don't decide

No-show strike policy (C4) and CSM credit authority (C2) are disputed; the
flat maintenance price is undefined. Answer with the working assumption
(strict SOP reading) and name the open conflict.
