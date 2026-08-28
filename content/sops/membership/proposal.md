---
id: sop.membership.proposal
title: Building a Membership Proposal — Free Site Survey to Signed Plan
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [membership, proposal, site-survey, free-estimate, home-plus, business-plus, commercial, options, follow-up]
related: [sop.membership.program, sop.membership.upgrades, reference.membership-plans, sop.field.membership, sop.csm.membership-status, script.sales.membership-enroll, sop.csm.res-vs-comm, pricing.tokens]
section: membership-program
order: 3
surfaces: [membership, field, csm, dispatch]
acknowledgement: required
---

# Building a Membership Proposal

> **Nobody buys a maintenance plan over the phone from a guess. We survey the property for free, build {{price:membership_proposal_options}} written options around the equipment we actually saw, email **and** text the proposal within {{price:membership_proposal_delivery_hours}}, then call and walk them through the option they leaned toward.**

## The five steps {#steps}

1. **Qualify the property** — residential or commercial, how many systems, what county. That decides Home+ or Business+.
2. **Book the free site survey.** {{price:membership_survey_fee}}. We do not quote a plan sight-unseen.
3. **Survey and inventory the equipment** — scan every data plate, count systems or rooftop units, note access.
4. **Build {{price:membership_proposal_options}} options** and send them by **email and text** within {{price:membership_proposal_delivery_hours}}.
5. **Call within {{price:membership_proposal_call_hours}}** of sending and walk the customer through the option they picked.

## Step 1 — Residential or commercial {#qualify}

Ask before anything else, and write the answer on the job:

| Answer | Path |
|---|---|
| House, condo, owner-occupied | **Home+** — Comfort or Infinite, priced by covered systems |
| Store, office, warehouse, restaurant, light-commercial rooftop units | **Business+** — Essential, Premier or Enterprise, priced per qualifying RTU |
| Landlord, HOA, property manager, tenant | Confirm who owns the equipment and who pays before promising anything — `sop.csm.customer-profiles` |

Business+ is centered on Nassau County light-commercial rooftop units. Split systems, ductless, boilers and anything larger get a **custom written scope** — never a published tier. See `reference.membership-plans`.

## Step 2 — The free site survey {#survey}

**When a customer will not pay a diagnostic fee for a plan conversation, that is fine — the survey is free.** Say it plainly:

> "There's no charge for this. I can't build you an honest plan without seeing what you have, so we'll come out, inventory the equipment, and put the options in writing. If we find something broken while we're there, I'll tell you before we touch it — a repair diagnosis is a separate visit with a separate fee."

Two hard lines:

- **{{price:membership_survey_fee}} covers the survey and the written proposal only.** Inventory, condition notes, photos, recommendations.
- **It is not a free diagnostic.** The moment the customer wants a *fault* found — no heat, no cooling, a noise — that becomes a diagnostic visit at the standard fee (`sop.csm.diagnostic-fee`). Never let a "free estimate" quietly turn into a free troubleshooting call.

Book the survey like any other job (`sop.dispatch.job-duration`). It is a short visit for a single-system home and a **long** visit for a multi-unit roof.

## Step 3 — What the survey has to capture {#capture}

No proposal goes out without all of this. Scan the data plates — `sop.field.equipment-capture`.

**Residential**
- Every heating and cooling system in the home, with make, model, serial, age
- Which systems the customer wants covered (the plan covers {{price:membership_home_plus_systems}}; extras are {{price:membership_home_plus_extra_system}})
- Condition notes and anything that will need repair this year
- Filter sizes and locations

**Commercial**
- Unit tag, make, model, serial, zone and service history for **every** rooftop unit
- Total RTU count — the first unit is in the tier, each additional is {{price:membership_business_plus_extra_rtu}}
- Roof and site access: who unlocks it, what hours, ladder or hatch, any escort requirement
- Filter responsibility — ours or theirs, in writing

## Step 4 — Three options, always {#options}

Every proposal shows **{{price:membership_proposal_options}} options side by side**, cheapest on the left. One option is a price; three options is a decision. Never send a single number.

**Residential (Home+)**

| | Good | Better | Best |
|---|---|---|---|
| Plan | Comfort, {{price:membership_home_plus_systems}} | Comfort + additional systems at {{price:membership_home_plus_extra_system}} each | Home+ Infinite |
| Price | {{price:membership_home_plus_first_year}} first year, {{price:membership_home_plus_renewal}} after | Comfort price plus each extra system | {{price:membership_infinite_price}} |
| Discount | {{price:membership_home_plus_repair_discount}} | {{price:membership_home_plus_repair_discount}} | {{price:membership_infinite_discount}} + {{price:membership_infinite_credit}} credit |
| Diagnostic | {{price:membership_diagnostic_posture}} | {{price:membership_diagnostic_posture}} | Free always |

Recommend Infinite **only** when the survey found a large repair or a likely replacement this year. An unused credit is a cancellation — see `sop.membership.program`.

**Commercial (Business+)**

| | Good | Better | Best |
|---|---|---|---|
| Plan | Essential | Premier | Enterprise |
| Price | {{price:membership_business_plus_essential_initial}} first year, {{price:membership_business_plus_essential_renewal}} renewal | {{price:membership_business_plus_premier_initial}} first year, {{price:membership_business_plus_premier_renewal}} renewal | {{price:membership_business_plus_enterprise}} |
| Visits | {{price:membership_business_plus_essential_visits}} per year | {{price:membership_business_plus_premier_visits}} allocations | Stated in the proposal |
| Repair discount | {{price:membership_business_plus_essential_discount}} | {{price:membership_business_plus_premier_discount}} | As proposed |
| Extra units | {{price:membership_business_plus_extra_rtu}} each | {{price:membership_business_plus_extra_rtu}} each | Inventoried in scope |

Every commercial proposal states the **equipment list, the visit allocation per unit, exclusions and the renewal price** on the page. A tier with no equipment list is not a proposal.

**What every proposal must show, on all three options:** the first-year price, the renewal price, exactly what is covered, what is excluded, and that there is no contract on the residential plans.

## Step 5 — Send it, then call {#deliver}

Within **{{price:membership_proposal_delivery_hours}}** of the survey, send the same proposal **twice**:

- **Email** — the full PDF or proposal link, all {{price:membership_proposal_options}} options, subject line naming the property.
- **Text** — short, with the link:

> "Hi {name}, it's {tech} from Home+ Air & Heat. Thanks for the walkthrough today — I've emailed you {{price:membership_proposal_options}} plan options for your {equipment}. Here's the link: {url}. I'll give you a call shortly to walk through them."

Then **call within {{price:membership_proposal_call_hours}}**. The call is not "did you get it" — it is the presentation:

1. Confirm what we found on site, in their words.
2. Walk all three options briefly, then stop on the one they leaned toward.
3. State the first-year price **and** the renewal price out loud. Both numbers, every time.
4. Ask for the enrollment: *"Want me to get you set up on the {tier} today?"*
5. Enroll it in ServiceTitan on the spot and **book the first included visit before you hang up.**

## If they do not answer {#followup}

Follow up on **{{price:membership_proposal_followup_days}}**, alternating call and text. After the third attempt, move the customer into seasonal nurture (`sop.csm.seasonal-outreach`) — do not keep dialing, and do not discount the plan to close it.

## Failure modes {#failures}

- **Quoting a plan without a survey.** The equipment count is wrong, the proposal is wrong, and the first tune-up is an argument.
- **Letting the free survey become a free diagnostic.** Say the boundary out loud on site.
- **Sending one option.** One number gets compared to a competitor; three options get compared to each other.
- **Email only.** Texts get read. Send both.
- **Sending and waiting.** The proposal does not sell itself — the call within {{price:membership_proposal_call_hours}} is where the plan closes.
- **Quoting a published Business+ tier for non-RTU equipment.** That is an Enterprise scope — hand it to the Operations Manager.
- **Leaving the renewal price out.** A member who learns the renewal at renewal cancels.
- **Enrolling verbally.** If it is not in ServiceTitan today, it did not happen.

## Related

- Plan pricing and benefits: `reference.membership-plans`
- What Home+ costs and covers: `sop.membership.program`
- Adding systems: `sop.membership.upgrades`
- Membership at the door: `sop.field.membership`
- Enrollment language: `script.sales.membership-enroll`
