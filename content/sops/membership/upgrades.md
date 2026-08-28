---
id: sop.membership.upgrades
title: Adding Systems and Upgrading a Membership
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [membership, upgrade, additional-system, home-plus, renewal, servicetitan, tune-up]
related: [sop.membership.program, sop.field.membership, script.sales.membership-enroll, sop.csm.membership-status, reference.membership-plans, pricing.tokens]
section: membership-program
order: 2
surfaces: [membership, field, csm, dispatch]
acknowledgement: required
---

# Adding Systems and Upgrading a Membership

> **A membership covers {{price:membership_home_plus_systems}}. System three is {{price:membership_home_plus_extra_system}}, system four is another {{price:membership_home_plus_extra_system}}, and neither one gets a tune-up until it is on the account.**

## When this comes up {#when}

Three moments, and all three are in the field or on the phone:

1. **At enrollment** — the home has more than two systems. Count them before you write the membership.
2. **At a tune-up** — the tech finds a system nobody told us about, or the customer asks why it is not being serviced.
3. **At renewal** — the customer added a mini-split, finished a basement, or replaced one system with two.

## The rule {#rule}

- One membership = **{{price:membership_home_plus_systems}}**, any mix of heating and cooling.
- Each system beyond that = **{{price:membership_home_plus_extra_system}}**, added to the membership.
- The additional-system charge applies **in the first year and at every renewal**. It is not a one-time setup fee.
- Each added system carries its own tune-up, its own waived diagnostic, and the same {{price:membership_home_plus_repair_discount}} on approved work.

So a home with four systems pays {{price:membership_home_plus_first_year}} plus two × {{price:membership_home_plus_extra_system}} in year one, and {{price:membership_home_plus_renewal}} plus two × {{price:membership_home_plus_extra_system}} at renewal. Do that arithmetic **out loud, in front of the customer**, and write the total on the invoice.

## Count the systems before you sell {#count}

Never enroll off a description. Walk it:

1. Count the **indoor** units — furnaces, air handlers, boilers, mini-split heads grouped by their outdoor unit.
2. Count the **outdoor** units — condensers, heat pumps.
3. A heat pump that both heats and cools is **one system**, not two.
4. Scan or photograph every data plate, covered or not — `sop.field.equipment-capture`.
5. Read the count back: *"So that's the upstairs furnace and AC covered, and the basement unit would be the third system at {{price:membership_home_plus_extra_system}}."*

## What to say {#script}

**At enrollment, three systems:**

> "The membership covers two systems for {{price:membership_home_plus_first_year}} the first year — normally the furnace and the AC. You've got a third unit downstairs. That one's {{price:membership_home_plus_extra_system}} to add, and it gets its own tune-up and the same no-charge service calls. Want me to put all three on?"

**At a tune-up, uncovered system found:**

> "While I was up there I noticed the attic unit isn't on your membership, so I'm not able to service it today. I can add it for {{price:membership_home_plus_extra_system}} and take care of it on the same visit — otherwise it's outside the plan and I'll leave it alone."

**At renewal, systems changed:**

> "Your renewal's {{price:membership_home_plus_renewal}} for the two systems. You added the mini-split in the spring — adding that brings it to [total]. Should I include it?"

**If they decline the extra system:** fine. Note it in ServiceTitan as *declined*, do not service that system, and do not waive its diagnostic. Bring it up again at renewal.

## What has to happen in ServiceTitan {#servicetitan}

Nothing is added on a handshake. Before you leave or hang up:

- The additional system is on the membership record, with its equipment entry and data-plate scan attached.
- The {{price:membership_home_plus_extra_system}} charge is on today's invoice.
- The extra tune-up is scheduled, or the customer is told when it will be.
- The renewal amount is updated so year two does not quote the old figure.

If it is not recorded, the tech who arrives next season will refuse to service a system the customer believes they paid for.

## Downgrades and replaced equipment {#downgrades}

- **A system is removed or replaced one-for-one:** the count is unchanged. Update the equipment record, not the price.
- **Two systems replaced by one:** drop the additional-system charge at the *next renewal*, not mid-term. No mid-term refunds of an additional-system fee once its tune-up has been used.
- **Customer wants to drop a system to save money:** offer it, note it, and be plain — that system loses its tune-up, its waived diagnostic, and its {{price:membership_home_plus_repair_discount}}.

## Failure modes {#failures}

- **Servicing an uncovered system "as a favour."** It teaches the customer the extra fee is optional, and the next tech gets the argument.
- **Treating {{price:membership_home_plus_extra_system}} as first-year only.** It recurs at renewal. Say so at the sale.
- **Quoting a total from memory.** Two systems plus extras is arithmetic; do it on paper in front of them.
- **Adding the system but not the equipment record.** Then it has no history, no warranty trail, and no tune-up on the schedule.

## Related

- Plan cost and coverage: `sop.membership.program`
- Membership at the door: `sop.field.membership`
- Equipment scanning: `sop.field.equipment-capture`
