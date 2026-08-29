---
id: reference.membership-plans
title: Membership Plans — Home+ and Business+
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-08-17
review_cadence_days: 90
tags: [membership, home-plus, business-plus, benefits, rtu, commercial, discount, tune-up]
related: [sop.field.membership, sop.csm.membership-status, sop.csm.membership-pivot, script.sales.membership-enroll, pricing.tokens]
section: governance
order: 2
surfaces: [field, csm, checklist]
---

# Membership Plans

One page, both plan families. If a customer asks what they get, the answer is here — do not improvise benefits, and do not promise anything this page does not list.

## Home+ Comfort — residential {#home-plus}

| | |
|---|---|
| **Price** | {{price:membership_home_plus_monthly}} |
| **Included tune-ups** | {{price:membership_home_plus_tuneups}} — basic 26-point, {{price:membership_tuneup_retail}} retail value each |
| **Each additional system** | {{price:membership_home_plus_extra_system}} |
| **Premium 38-point tune-up** | Not included. Member upgrade {{price:membership_premium_tuneup_upgrade}} per system. No published retail price — {{price:membership_premium_tuneup}} |
| **Repair discount** | {{price:membership_home_plus_repair_discount}} on eligible approved repairs |
| **Diagnostic** | {{price:membership_diagnostic_posture}} |
| **Scheduling** | Priority over non-members |
| **Cancellation** | Anytime, no contract. Pro-rated refund if no services were used. |

Home+ covers the residential systems we service at the address on the account. It transfers to the new owner if the home is sold; it does not follow the customer to a second property, and it is not offered to a tenant on a system they do not own — see `sop.csm.customer-profiles`.

## Home+ Infinite — residential top tier {#infinite}

| | |
|---|---|
| **Price** | {{price:membership_infinite_price}} |
| **Includes** | Everything in Comfort |
| **Discount** | {{price:membership_infinite_discount}} on all services |
| **Service credit** | {{price:membership_infinite_credit}}, applied to any repair, replacement or service |
| **Diagnostic** | Free always, with or without a repair |
| **Emergency response** | Priority ahead of Comfort |

Infinite is quoted to customers already facing a large repair or a replacement this year. Selling it to a low-spend household produces an unused credit and a cancellation.


## Business+ — light commercial {#business-plus}

Business+ is priced **per qualifying rooftop unit (RTU)**. Additional units are priced separately, on the same tier or a different one. Before any Business+ service, the unit nameplate and site access must be confirmed and recorded.

### Essential {#essential}

A two-visit annual maintenance starting point for one qualifying light-commercial RTU.

- **Initial term:** {{price:membership_business_plus_essential_initial}} first year
- **Renewal:** {{price:membership_business_plus_essential_renewal}}
- {{price:membership_business_plus_essential_visits}} scheduled maintenance visits per membership year
- {{price:membership_business_plus_essential_discount}} discount on eligible approved repairs
- Unit nameplate and site access confirmed before service
- Additional rooftop units {{price:membership_business_plus_extra_rtu}}

### Premier {#premier}

More frequent service for one RTU, or two visits each for two qualifying rooftop units.

- **Initial term:** {{price:membership_business_plus_premier_initial}} first year
- **Renewal:** {{price:membership_business_plus_premier_renewal}}
- {{price:membership_business_plus_premier_visits}} scheduled visit allocations per membership year
- {{price:membership_business_plus_premier_discount}} discount on eligible approved repairs
- Written equipment and visit-allocation record
- Additional rooftop units {{price:membership_business_plus_extra_rtu}}

### Enterprise {#enterprise}

A custom plan for larger fleets, multiple locations, or operating requirements outside the published plans.

- **Initial term:** {{price:membership_business_plus_enterprise}}
- **Renewal:** defined in the proposal
- Equipment and location inventory taken before the proposal is written
- Visit frequency and supported systems stated in writing
- Account-coordination responsibilities defined in scope
- Credits, discounts and service windows apply **only as proposed** — nothing carries over from Essential or Premier

Enterprise is quoted, never sold at the door. Capture the site list and hand it to the Operations Manager.

## Rules that apply to every plan {#rules}

- **Discounts apply to eligible approved repairs only.** Not to installs, not to parts bought over the counter, not to a diagnostic already waived.
- **Visits are allocations, not credits.** Unused visits do not roll over and are not refundable as cash.
- **The discount is a line item.** It appears on the invoice; a verbal "I took care of you" is not the benefit.
- **No emergency or after-hours surcharge** applies to anyone, member or not — see `reference.guarantees`. Never sell membership as the way to avoid a surcharge that does not exist.

## Related

- Checking status and tailoring the visit: `sop.field.membership`
- Enrollment language at the door: `script.sales.membership-enroll`
- Office-side status check: `sop.csm.membership-status`
