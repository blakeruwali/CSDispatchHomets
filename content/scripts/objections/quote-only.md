---
id: script.objection.quote-only
title: Objection — "I just want a quote"
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [objection, quote, estimate, phone-quote, script]
related: [sop.csm.service-type, sop.csm.diagnostic-fee, script.objection.price]
surfaces: [csm, checklist]
---

# Objection — "I just want a quote"

## The response {#response}

> "We can't quote a repair without seeing the system — every unit is different. The {{price:diagnostic_residential}} gets you a real number in writing, not a guess."

## First, make sure it's actually an objection {#clarify}

"I just want a quote" is ambiguous — it can mean *repair* (billable diagnostic) or *replacement* (free estimate). Clarify before you handle it:

> "Happy to — are you looking to get the system you have fixed, or looking at replacing it?"

If they're replacing, there is no objection to handle: the estimate is {{price:estimate_install}} and saying so closes the call. See `sop.csm.service-type`. Handling a non-objection is how we talk ourselves out of a free-estimate booking.

## Why we don't quote repairs by phone {#why}

A phone number is a guess, and a guess we later revise on the doorstep costs us the job and the trust. Frame it as protection for them, not policy for us: a written on-site price is a number they can hold us to.

## Hard rules {#rules}

- Never give a repair price range over the phone, even "ballpark."
- Never say "it depends" and leave it there — replace the guess with the visit.

## Related

- Which conversation you're in: `sop.csm.service-type`
- The price objection proper: `script.objection.price`
