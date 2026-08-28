---
id: sop.projects.install-day
title: Install Day — Arrival to Walkthrough
department: projects
owner: project-manager
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [projects, install, crew, startup, readings, walkthrough, cleanup]
related: [sop.projects.lifecycle, sop.projects.pre-install, sop.projects.closeout, sop.projects.comfort-check, sop.field.start-time, sop.field.equipment-capture, sop.field.forms]
section: projects-install
order: 1
acknowledgement: required
surfaces: [projects, field, checklist]
---

# Install Day — Arrival to Walkthrough

| | |
|---|---|
| **Purpose** | The install is executed and documented to the same standard every time, whoever is leading it. |
| **When it applies** | Every install day, every crew. |
| **Owner** | The lead installer owns the site; the Project Manager owns the outcome. |

## Arrival {#arrival}

- On site at the **start** of the window, same as service — `sop.field.start-time`.
- Lead knocks, introduces the whole crew by name, and confirms the scope out loud with the customer before a single tool comes out: what is going in, where, how long, and when the system will be down.
- Floor protection and drop cloths before the first trip in.
- Photograph the space **before** work starts. It protects the customer and it protects us.

## During {#during}

- The lead is the only voice to the customer. Crew questions go to the lead, not to the homeowner.
- **Nothing outside the signed scope gets done for free, and nothing extra gets charged without a signed change order.** Found a cracked heat exchanger in the adjacent unit, a rotted platform, a failing disconnect? Stop, photograph, call the Project Manager, present it as a written change order. Verbal approvals do not exist.
- Update the Project Manager at midday on anything that threatens same-day completion.
- The old equipment leaves with us unless the customer explicitly asked to keep it.

## Startup and documentation {#startup}

Before the customer is called over, the lead records on the job:

| Captured | Detail |
|---|---|
| New equipment | Model and serial of every unit installed — `sop.field.equipment-capture` |
| Startup readings | Supply/return temps, static pressure, refrigerant charge / subcool / superheat, gas pressure where applicable, amp draws |
| Combustion | Where applicable, combustion analysis results |
| Photos | Finished install from three angles, electrical connections, condensate, venting, thermostat |
| Registration | Serial numbers captured for warranty registration — `sop.projects.closeout` |

An install without startup readings is not finished. It is a machine somebody turned on.

## The walkthrough {#walkthrough}

With the customer, at the equipment, before anyone packs up:

1. Show them the new system and what changed.
2. Thermostat: set it, walk them through the screens, get them to do it once themselves.
3. Filter: size, location, how to change it, how often.
4. Warranty: what is covered, for how long, and that we register it for them.
5. Membership: every install customer gets the maintenance conversation — `script.sales.membership-enroll`.
6. Tell them about the **comfort check** in 10–14 days, by name, so the follow-up call is expected.
7. Walk the space together and confirm the site is clean.

Then the customer signs off and the final balance is collected per `sop.sales.paperwork`.

## Never leave a customer without heat or cooling {#never-leave-down}

If the job cannot be completed the same day, the lead does not drive away until either the old system is functional, temporary equipment is in place, or the Project Manager has personally spoken to the customer about the arrangement for the night.

## Related

- Confirming beforehand: `sop.projects.pre-install`
- Closing the project: `sop.projects.closeout`
- The follow-up visit: `sop.projects.comfort-check`
