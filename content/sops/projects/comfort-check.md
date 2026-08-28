---
id: sop.projects.comfort-check
title: The Comfort Check
department: projects
owner: project-manager
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [projects, comfort-check, follow-up, quality, review, warranty, satisfaction]
related: [sop.projects.lifecycle, sop.projects.install-day, sop.projects.closeout, script.csm.review-request, sop.csm.post-service-followup]
section: projects-closeout
order: 2
acknowledgement: required
surfaces: [projects, field, checklist]
---

# The Comfort Check

| | |
|---|---|
| **Purpose** | Ten to fourteen days after the install we go back, verify the system is performing, and give the customer a place to say anything they have been sitting on. |
| **When it applies** | Every install, without exception. It is not optional, and it is not a phone call. |
| **Owner** | Project Manager books it; a technician or the installing lead performs it. |

## Why we go back {#why}

A system that reads perfectly on install day can be wrong two weeks later — a duct that whistles at night, a room that never gets there, a drain that seeps. The customer will not usually call about it. They will simply tell one neighbour. The comfort check is how a small annoyance becomes a fixed detail and a five-star review, instead of a warranty dispute in the second season.

## Booked before we leave {#booked-early}

The comfort check is scheduled at closeout and named to the customer during the install walkthrough. It goes on the board as a real appointment with a real window, at no charge.

## On the visit {#the-visit}

1. **Ask first, measure second**: "How's it been running? Anything at all you've noticed — noise, a room that's off, anything?" Then be quiet and let them answer.
2. **Verify performance**: supply/return temps, static pressure, charge, amp draws, combustion where applicable. Compare against the install-day startup readings — a drift is a finding.
3. **Check the physical install**: condensate and drain, vibration and noise, sealing and insulation, thermostat programming, filter seated and clean.
4. **Room-by-room**: walk the rooms they mentioned, with them.
5. **Reconfirm the basics**: filter size and interval, thermostat settings, warranty terms.
6. **Maintenance**: if they are not yet a member, this is the natural moment — `script.sales.membership-enroll`. If they are, confirm the first tune-up is on the calendar.

## Findings {#findings}

Anything found is ours. Correct it on the spot where possible; where it needs parts or a crew, book it before leaving and treat it as a warranty callback with priority — not a new job in the queue. Never leave a finding described only out loud; write it on the job with photos.

## Then, and only then, ask for the review {#review}

A comfort check that ends clean is the best moment we ever get to ask. Use `script.csm.review-request`. If the customer is anything less than happy, we do not ask — that is a Project Manager follow-up, same day.

## Documented {#documentation}

Comfort check readings, photos, findings, corrections and the customer's own words go on the job. That record closes the project — `sop.projects.lifecycle`.

## Related

- Install day and startup readings: `sop.projects.install-day`
- Closeout: `sop.projects.closeout`
- Review script: `script.csm.review-request`
