---
id: protocol.emergency.triage
title: Emergency Triage Matrix (Safety First)
department: csm
owner: cs-manager
status: published
version: 2
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [emergency, triage, safety, gas, carbon-monoxide, leak, flooding, no-heat, no-ac]
related: [sop.csm.greeting, sop.csm.symptom-clarification, sop.csm.coverage, sop.csm.service-area, sop.csm.non-english-callers, governance.qa.csm]
section: interaction
order: 5
surfaces: [csm, checklist]
---

# Emergency Triage Matrix (Safety First)

> **Life-safety first. Any signal below = interrupt intake, act immediately.**
>
> This protocol overrides every other page in the SOP. Do not finish the greeting, do not finish the intake, do not quote a fee. Act.

## Step 1 — Listen for the signal {#signals}

These can surface at any point: during the greeting, mid-intake, or buried in a rambling description. The CSM's job is to hear them.

| Signal | Immediate action |
|---|---|
| Smells gas | Tell the customer: **leave the house, call 911 and the utility.** Then dispatch. |
| CO alarm active | **Leave the house, call 911.** Then dispatch. |
| Actively flooding water | **Shut the main water valve.** Dispatch same-day priority. |
| No heat, outside temperature {{price:emergency_temp_cold}} | Same-day priority. Page Dispatch. |
| No heat {{price:emergency_temp_cold}} **+ vulnerable occupant** | Same-day priority, escalate ahead of other same-day work. |
| No AC {{price:emergency_temp_hot}} + vulnerable occupant | Same-day priority. Page Dispatch. |
| Electrical burning smell / sparks | **Kill the breaker if safe, call 911.** Then dispatch. |
| Complete electrical failure related to HVAC | Same-day priority. Page Dispatch. |

The temperature thresholds are numbers, not judgement calls, because this matrix is scored pass/fail and a stressed CSM at 2 AM should not have to decide what counts as "cold enough."

## Step 2 — Get them safe before you get their address {#sequence}

The order is: **safety instruction → 911/utility → then our dispatch.** Never reverse it. We are not the emergency service; we are the follow-up. Telling a customer with a gas smell "let me get your address first" is the single worst call we can make.

Say it directly and without hedging:

> "Stop — I need you to leave the house right now, then call 911 and the gas company from outside. Once you're out, call me back at this number and I'll have a tech on the way."

## Step 3 — Vulnerable occupant check {#vulnerable}

For the no-heat and no-AC rows, "vulnerable occupant" means an infant, an elderly resident, someone with a medical condition, or anyone the customer flags as at risk. Ask if it isn't volunteered:

> "Is there anyone in the home who's elderly, very young, or has a medical condition I should know about?"

A yes moves a routine no-heat call to same-day priority.

## Step 4 — Escalate {#escalate}

- **During {{price:csm_hours}}** — page Dispatch directly. Do not queue it.
- **Outside CSM hours** — Posh escalates true emergencies to the on-call tech. See `sop.csm.coverage`.

Tag the ticket priority before you save it. An emergency that reaches Dispatch untagged is an emergency that waits in line.

### After-hours dispatch {#after-hours-dispatch}

1. **Check the on-call schedule** in ServiceTitan before promising anything.
2. **Contact the on-call tech** and confirm they're available.
3. **Give a realistic ETA** — {{price:oncall_eta}} after hours. Do not quote a daytime window at 1 AM.
4. **Tag the ticket "After-Hours."**

**After-hours costs the same as any other hour** — quote the standard diagnostic and say so plainly, it is a reason to say yes at 2 AM (`reference.guarantees`).

## Never say "we're fully booked" to an emergency {#never-full}

The board is not the customer's problem. Emergencies get a slot; freeing one is the dispatch manager's job. See `sop.csm.service-area`.

## Scoring {#scoring}

Emergency triage is **pass/fail** on the QA rubric. Miss it and the whole call is capped at {{price:triage_fail_score_cap}}, regardless of how well everything else went. There is no partial credit on safety.

## Related

- Turning a vague symptom into a real one: `sop.csm.symptom-clarification`
- After-hours escalation path: `sop.csm.coverage`
- QA weighting: `governance.qa.csm`
