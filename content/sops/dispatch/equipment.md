---
id: sop.dispatch.equipment
title: Equipment Capture — Dispatch Verification
department: dispatch
owner: dispatch-manager
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [equipment, servicetitan, verification, close, send-back, quality-gate, dispatch]
related: [sop.field.equipment-capture, sop.dispatch.daily-workflow, sop.field.forms, sop.dispatch.priorities]
section: dispatch-board
order: 4
surfaces: [dispatch, checklist]
---

# Equipment Capture — Dispatch Verification

> The tech captures the equipment. Dispatch makes sure it actually happened — on every job, every day.

The capture rule itself lives in `sop.field.equipment-capture` and belongs to the technician. This document is Dispatch's half: the checks that make the rule real instead of aspirational.

## Check it at close, not next week {#close-check}

Every job that closes with work performed gets one question answered before it leaves the board:

**Is the equipment scanned and attached to the location, with a readable data-plate photo?**

- **Yes** — close it.
- **No** — send it back to the technician who closed it, **today**, while they may still be near the address or at least still remember the job. A send-back next week is a second trip; a send-back today is a phone call and two minutes on their tablet.

This applies to **every visit type**, not just repairs: diagnostics, tune-ups, estimates, installs, callbacks, warranty calls. If a tech was on site, the location's equipment record should be complete when they leave.

## What "attached correctly" means {#standard}

Dispatch is checking placement and completeness, not re-typing anything:

| Check | Right | Wrong |
|---|---|---|
| Record location | Equipment attached to the **customer's location** | Buried in job notes |
| Plate scan | Equipment scan run on every unit | No scan — typed from memory |
| Plate photo | Present, fills the frame, readable | Missing, blurry, unreadable |
| Model & serial | From the scan (or "data plate illegible" noted) | Blank with no explanation |
| Coverage | Every system at the address | Only the unit that broke |

**Model and serial must come from the scan and the photo, never from memory** — one wrong character is a warranty claim that fails months later. If the plate was unreadable, the condition notes must say "data plate illegible" — a silent gap is a defect, an explained gap is a record.

## The send-back conversation {#send-back}

Short, factual, no lecture:

> "Job 4821 — no equipment on the location. Add the record and the plate photos and close it again, or write the exception in the notes."

A genuine exception is fine when it is written down: no access to the unit, customer refused the attic, locked crawlspace. "Customer refused" is a record. Silence is a defect.

## Why Dispatch owns this check {#why-dispatch}

- **Tomorrow's dispatch depends on it.** A model on file means the next visit to that address goes out with the right part already on the truck. Without it, you are dispatching blind — a second trip, unpaid drive time, and a slot that could have been billed.
- **Warranty claims live or die here.** A part fails inside manufacturer warranty with no serial on file, the claim fails and the company eats it — and the callback lands back on your board, unpaid.
- **The fee posture check rides along.** While you're at close, confirm the diagnostic fee matches the visit outcome — credited on a sold job, charged on a non-repairable. See `sop.dispatch.daily-workflow`.

## The weekly loop {#weekly}

A tech who is repeatedly sent back for missing equipment goes on the service manager's list for the weekly one-to-one, alongside callback rate — the two are related, and the connection is the point. Dispatch's job is to surface the pattern, not to coach it.

## Related

- The capture rule itself: `sop.field.equipment-capture`
- Close-out quality gate: `sop.field.forms`
- Where this check sits in the day: `sop.dispatch.daily-workflow`
