---
id: techeo.web.conversion
title: Conversion & Lead Handling — Held to Our Own Standard
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, conversion, cta, forms, qualification, calculator, flows, speed-to-lead, sla, receptionist, email, pipeline, mystery-shop, season-state]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.offers, techeo.audit, techeo.delivery, techeo.gtm, techeo.guardrails, techeo.legal, techeo.plan90, techeo.metrics]
order: 8
---

# Conversion & Lead Handling — Held to Our Own Standard

**Every visitor who raises a hand on techeo.com gets what we would install in a client's shop: a live person, a dial inside the standard, a written script, and an honest no when we're the wrong fit. Nobody pays $1,500 until we know we'd take the job.**

## Scope, and the standard we copy {#scope}

This document owns the CTA hierarchy, form fields, qualification, calculator logic, flows, the SLA, the receptionist, email content, and the pipeline (brief `#ownership`). It does not own:

- page words (`03`, `04`)
- receiving, storing, and relaying data (`06`)
- events and dashboards (`09`)
- consent wording, disclosures, retention, and legal determinations (`10`)

Changes this document needs from other owners are listed in `#dependencies`.

**We hold ourselves to Homets' written standard:**

| Homets standard | Source | Techeo's version |
|---|---|---|
| First touch means a call placed, not a lead read | `playbook.speed-to-lead` #standard | The SLA clock stops at the first dial in the receptionist's call log |
| Web form: call inside the SLA, then 2 hours later, then the next morning; then unreachable | `playbook.web` #flow | Same cadence. Where Homets would text after a missed first call, we email (E35); there is no SMS in v1 (`06`) |
| Booking rate ≥70% on qualified callers | `sop.csm.kpis` #targets | The calculator's only built-in number, labeled as our target |

**Notation.** OPEN, WAITLIST·season, WAITLIST·capacity, `{next opening}`, `{capacity date}`, and `[SLA line]` are as defined in `03` #conventions. A business day is Monday–Friday, excluding the holidays in `#sla`. All times are [TZ] unless marked *lead-local*.

## CTA hierarchy by season state {#cta-hierarchy}

**Rules.**

1. **One primary per section.** The primary style (`05`) is reserved for the season audit CTA and for a page's own form submit.
2. **Fixed labels.**
   - **Audit:** "Book an Engine Audit" (OPEN) or "Reserve an audit slot" (WAITLIST), always linking to `/audit`.
   - **Teardown:** "Get a free phone teardown," linking to `/teardown`.
   - **Call:** a `tel:` link in E.164.
3. **A flip changes only labels, microcopy, and the form shown in `/audit#book` and `/#start`.** Nothing disappears or greys out (`01` #season-strategy).
4. **DOM order is priority order,** and mobile stacks follow it.
5. **`#operator` and `#promises` carry no CTA.** They verify; they don't sell.
6. **A thanks page has one next step.**

| Page · section | Primary: OPEN | Primary: WAITLIST | Secondary | Tertiary |
|---|---|---|---|---|
| Header (hidden on `/audit`, `/thanks/*`) | Audit | Audit | — | Call |
| `/#top` | Audit | Audit | Teardown | Call + "A person answers, {answering hours}." |
| `/#leak` | Link → `/#calculator` | Same | Link → `/teardown` | — |
| `/#calculator` | "Show my number" (secondary style); after a result: Audit if below 70%, Teardown if at or above 70% or under one job | Same | "Email me this" | — |
| `/#engines`, `/#how-it-works` | Links only (rung 0 → Teardown, rung 1 → Audit) | Same | — | — |
| `/#audit` | Audit | Audit | "See what's inside first" (OPEN only) | — |
| `/#operator`, `/#promises` | None | None | — | — |
| `/#fit` | Teardown | Teardown | — | — |
| `/#start` | Audit | `form_audit_reserve` inline | Teardown | Call |
| `/audit` hero · `#book` | Audit → `#book` · "Check fit and continue to payment" | Same · "Reserve my slot" | Teardown | Call |
| `/teardown` hero · `#request` | "Request my free teardown" · submit | "Queue my free teardown" · submit | "See the Engine Audit" | Call |
| `/thanks/audit-reserved` | "Get a free phone teardown" → `/teardown` | "Queue a free phone teardown" | Home | — |
| `/thanks/audit-purchased` (OPEN only) | "Pick a kickoff time" → Cal.com `audit-kickoff` | — | — | Call |
| `/thanks/teardown` | Audit | Audit | Home | — |

**v1.1–v3.** `02` #inventory stands, using `04` #season-cta patterns A, B, and C.

**The phone link** is identical in every state. What the receptionist does with a call changes by state:

| State | What the receptionist does |
|---|---|
| OPEN | Books discovery; books a kickoff for buyers |
| WAITLIST (either reason) | Takes reservations and teardown requests; no calls with Blake |

Nobody is ever paid by phone, and nobody ever says "closed." The full script is in `#receptionist`.

**Done when** a crawl of each built variant finds one primary per section, every audit CTA resolves to `/audit`, and the `tel:` href is identical on every page.

## Trust lines and objection handling {#trust}

Each objection is answered right beside the button it would stop. `03` owns the words; this table places them.

| CTA | Trust line in the same block | Deeper answer |
|---|---|---|
| Book an Engine Audit | "$1,500 · 7 business days · credited in full against a retainer signed within 30 days" | `/#faq-price` |
| `#book` submit (OPEN) | "A few questions come before checkout, so we never take payment from a shop we'd turn away." | `/audit#decline` |
| Reserve an audit slot | "Reserving is free." · "A reservation holds your place in line, not your market." | `/#faq-peak-season` |
| Retainer price lines | "You keep every account, in your name and on your card." · "90 days, then month-to-month" | `/#promises` |
| Teardown | "Free. Needs only your published number." · "No names. No sequence." | `/teardown#notes-not-recordings` |
| "Email me this" | "We'll send your three numbers and the result, once. No newsletter." | — |
| Phone | "A person answers, {answering hours}." | `/#faq-callback-speed` |

**The competitor objection** is answered before any button: in the hero operator line, the footer, `#operator`, and `/#faq-homets-conflict`.

**Rules for every trust line:**

- It is backed by a contract clause or an audit rule.
- No tooltips, popups, or seals.
- No testimonials in v1 (D7).

## Forms: shared rules and field definitions {#form-rules}

1. **Validation.**
   - Runs on submit, in the browser (`06`'s `form-enhance.ts`) and on the server, using one zod schema generated from the tables below.
   - Markup and timing follow `05` #c-validation.
   - Error messages use `03` #microcopy names: *text*, *choice*, *email*, *phone*, *ZIP*, *website*, *too long*. New messages are drafted here.
2. **Controls.**
   - Required fields are unmarked; optional fields say "(optional)."
   - Up to five options: radios. Six or more: a select.
   - Numbers use `type="text"` with an `inputmode`.
   - No placeholders.
3. **Normalization.**
   - Trim, NFC, and collapse spaces.
   - Strip "$ , %" from numbers.
   - Truncate ZIP+4 to 5 digits.
   - Convert phones to E.164 (NANP only).
   - Prefix `https://` on websites that lack a scheme.
   - Strip control characters.
4. **Hidden fields.** `form_id`, `consent_version` (`10`), the honeypot and `submission_uuid` (`06`), Turnstile, and attribution (`09`).
5. **Storage (`06` #data).**
   - Supabase at submit time (the drain retries if it is down), with a 30-day outbox copy in D1: contact details to `app.leads`, answers to the child tables named below, the payload to `app.submissions.payload`.
   - Stripe gets only the email and IDs. The receptionist gets only what a callback needs.
6. **Consent.**
   - `10` owns each form's consent statement or checkbox (`consent_version`). This document adds none.
   - `authority`, `test_call_consent`, and `owner_requested` are authorizations, not marketing consent. `10` approves their words.
7. **No uploads.** A `notes` field with more than two URLs sets `spam_suspect`, which flags the internal email and the receptionist card. The confirmation goes out as usual. The receptionist checks that the business is real (its website or listing matches the name and phone) and, if so, calls inside the SLA and clears the flag. Only confirmed spam is excluded from the SLA.
8. **Duplicates** (`ingest_submission`).
   - A second reservation keeps the original place.
   - A qualify from an email with a paid or processing purchase in the last 30 days → `existing_purchase` review.
   - A teardown for the same `phone_to_call` within 30 days → `03`'s duplicate message.
   - The same calculator inputs within 24 hours → no second email.

### `form_audit_reserve` and `form_audit_qualify` {#form-audit}

The reservation form asks only what decides whether we can hold a place, plus market data (`01` #season-strategy, item 3). The purchase form adds four buyer questions.

| # | Key | Label | Control | Res. | Qual. | Validation | Why we ask | Stored |
|---|---|---|---|---|---|---|---|---|
| 1 | `name` | Your name | text, `name` | ✓ | ✓ | 1–120 characters, including a letter | Who we call | `leads.name` |
| 2 | `role` | Your role | radio: `owner` · `co_owner` · `general_manager` · `office_manager` · `other` | ✓ | ✓ | *choice* | Is the decision maker on the line? | `audit_qualifications.role` |
| 3 | `company` | Company name | text, `organization` | ✓ | ✓ | 1–160 | Market and business check | `leads.company` |
| 4 | `website` | Company website (optional) | text, `inputmode="url"` | opt | opt | Host with a dot; ≤255 → *website* | Prep; the audit tests its form | `leads.website` |
| 5 | `zip` | Shop ZIP code | text, numeric, `postal-code` | ✓ | ✓ | 5 digits → *ZIP* | Exclusion, market, state, callback time zone | `leads.zip`, `state_code` |
| 6 | `trade` | Trade | radio: `hvac` · `plumbing` · `both` | ✓ | ✓ | *choice* | Market slots are per trade | `leads.trade` |
| 7 | `work_mix` | Most of your work is… | radio: `residential` "Homes: residential service, repair, and replacement" · `commercial` "Businesses or new construction" | ✓ | ✓ | *choice* | The ICP is residential, and so are the test calls | `audit_qualifications.work_mix` (new) |
| 8 | `revenue_band` | Annual revenue, last 12 months | radio: `under_1_5m` · `1_5m_to_5m` · `5m_to_10m` · `10m_to_15m` · `over_15m` | ✓ | ✓ | *choice* | ICP band | `…revenue_band` |
| 9 | `trucks_band` | Service trucks on the road | radio: `1_2` · `3_10` · `11_25` · `26_plus` | — | ✓ | *choice* | ICP: 3–25 trucks | `…trucks_band` |
| 10 | `crm` | What runs your jobs? | radio: `servicetitan` · `switching` "Moving to ServiceTitan" · `other` · `none` | ✓ | ✓ | *choice* | Hard qualifier (`techeo.positioning` #icp) | `leads.crm` |
| 11 | `lead_sources` | Which of these do you pay for now? | checkboxes: `lsa` · `google_ads` · `angi` · `thumbtack` · `yelp` · `other_paid` · `none` | — | ✓ | At least one; new message: "Choose at least one, or None right now." `none` is dropped if others are checked | "Already buying leads"; Gap terms 2–4 | `…lead_sources` |
| 12 | `main_goal` | What do you most want fixed? | radio, with `03`'s five labels: `book_more_calls` · `faster_callbacks` · `more_calls` · `website_logo_social` · `not_sure` | ✓ | ✓ | *choice* | Screens out work we don't sell | `…main_goal` |
| 13 | `decision_maker` | Who signs off on a $1,500 purchase? | radio: `self` · `other_joins_call` | — | ✓ | *choice* | ICP: the owner signs | `…decision_maker` |
| 14 | `test_call_consent` | Test calls | radio, with the legend (`10` #consent-texts) "As part of the audit, we call your office and use your web form the way a customer would, and we don't tell you when. We take notes, not recordings. Is that OK?" Options: `yes` "Yes, that's fine" · `no` "No, I'd rather you didn't" | — | ✓ | *choice* | The Booking Engine can't be measured without it. A no is a decline. Replaces `03`'s checkbox, since an unchecked box can't tell "no" from "missed it" | `…test_call_consent` |
| 15 | `email` | Email | `type="email"` | ✓ | ✓ | ≤254 characters, one @, a dot in the domain | Confirmation, receipts, report | `leads.email` |
| 16 | `phone` | Mobile phone | `type="tel"` | ✓ | ✓ | Valid NANP number → *phone* | The callback | `leads.phone_e164` |
| 17 | `heard_from` | How did you hear about us? (optional) | select, with `03`'s six labels: `peer_network` · `vendor` · `podcast` · `teardown` · `search_ai` · `other`. Add `owner_community` ("An online owner group or forum") if `09` open question 3 is accepted; it stays a select | opt | opt | One of the list | Cheapest attribution (`01` #success) | `leads.heard_from` |
| 17a | `peer_network` | Are you in a peer network? (optional) | select: `none` · `pantheon` (ServiceTitan Pantheon) · `nexstar` · `service_nation` (Service Nation / Roundtable) · `egia` · `other` | opt | opt | One of the list | Tells us which network to join and where the waitlist comes from (`01` #season-strategy item 3) | `audit_qualifications.peer_network` |
| 18 | `notes` | Anything we should know? (optional) | textarea | opt | opt | ≤1,000 → *too long* | Context | `…notes` |
| — | consent | `10`'s statement | — | ✓ | ✓ | Per `10` | — | `submissions.consent_version` |

Fields 9, 11, 13, and 14 are left off the reservation form: they don't change whether we can hold a place, and the discovery call asks them.

**Done when:** the schema is generated from this table, the `#qualification` fixtures pass, and every label matches `03` or this table exactly.

## Qualification logic {#qualification}

**Payment is never taken before qualification passes.** Qualification runs on the server, in `06`'s pipeline step 8, before any Checkout Session exists. Each outcome is stamped with `rules_version` (first value: `q-2026-11-1`).

**Derived on the server and never shown to the visitor:**

- **`in_exclusion_zone`:** the ZIP's Census ZCTA point is within [EXCLUSION_RADIUS_MILES] of the Homets exclusion center, or the ZIP is on the Homets market county list (`techeo.guardrails` #coi; `03` open question 8).
- **`zone_edge`:** the ZIP is within that radius plus `ZONE_EDGE_BUFFER_MILES` (default 25).
- **From the ZIP:** `zip_known`, `state_code`, `lead_tz`.
- **`market_status`:** checked per trade.
- **`existing_purchase`.**
- **`prior_decline`:** declined or do-not-contact within the last 12 months.

The last three, plus any open review clearance, come from one Supabase RPC in step 8, `06`'s `qualify_context`, with a 1.5 s timeout. If it fails or times out, `market_status` is `unknown` and `history_unknown` is added to `review_reasons`, so the outcome is `needs_conversation`: a cleared lead or a repeat buyer never gets an unpredictable result.

**Hard declines, in precedence order.** The visitor sees the first match. All matches are stored in `decline_reasons`.

| # | Outcome | Rule | Reserve | Qualify | Teardown |
|---|---|---|---|---|---|
| 1 | `exclusion_zone` | `in_exclusion_zone` | ✓ | ✓ | ✓ |
| 2 | `not_residential` | `work_mix = commercial` | ✓ | ✓ | — |
| 3 | `out_of_scope` | `main_goal = website_logo_social` | ✓ | ✓ | — |
| 4 | `not_servicetitan` | `crm` ≠ `servicetitan` | ✓ | ✓ | — |
| 5 | `low_lead_flow` | `revenue_band = under_1_5m` | ✓ | ✓ | — |
| 6 | `no_test_consent` | `test_call_consent = no` | — | ✓ | — |

The order runs from the absolute (the zone never moves), through work we don't do and "not yet," to the one decline a buyer can reverse.

**Manual review** blocks checkout and never reveals its reason. On `form_audit_qualify` it produces `needs_conversation` ("Let's talk first"). On `form_audit_reserve` the reservation is accepted and the reasons are stored in `review_reasons`.

| Reason | Rule | Decider and default |
|---|---|---|
| `market_hidden` | `market_status = taken` for any selected trade | **The founder only.** Gives `04`'s one-sentence "not available" answer by phone within 2 business days, then sends E-NA. **Never shown on screen and never told to the receptionist.** An on-screen answer would let anyone map client markets by trying ZIPs (`04` anti-identification rules). |
| `market_review` | `review` or `unknown`, including an RPC timeout | The founder checks the county list; proceeds if clear |
| `zip_unknown`, `zone_edge` | As derived | The founder asks which towns the shop serves; any overlap with Homets' counties becomes `exclusion_zone` |
| `over_15m`, `trucks_26_plus` | As named | Outside the ICP. Default: decline after the call until the gate clears (`techeo.guardrails` #gate covers "any client outside the ICP") |
| `trucks_1_2` | Revenue is in band | Outside the ICP. Default: talk, then decline with S1 and a teardown offer until the gate clears (`techeo.guardrails` #gate) |
| `no_paid_sources` | `lead_sources = [none]` | Outside the ICP ("already buying leads," `techeo.positioning` #icp). Default: talk, then decline with S1 and a teardown offer until the gate clears (`techeo.guardrails` #gate) |
| `decision_other` | `other_joins_call` | Proceed once the signer is on the call |
| `existing_purchase`, `prior_decline` | As derived | The founder reads the history |
| `history_unknown` | `qualify_context` failed or timed out | The founder reads the history and checks the market; proceeds if clear |

**Clearing a review.** After discovery, the founder writes a row to `app.review_clearances`: email, cleared reasons, `cleared_by`, and an expiry 14 days out. The next `form_audit_qualify` from that email returns `qualified` if all of these hold:

- the ZIP and trade are the same,
- every failed check has been cleared,
- `market_status` is `open` at that moment.

Hard declines are never cleared. An audit agreed on a call is still paid through `/audit` (`01` anti-goal 3).

**Outcomes:**

| Outcome | On screen (`03` block) | Email | Callback | ClickUp |
|---|---|---|---|---|
| `qualified` | "Opening secure checkout…" → Stripe | E07 once paid | Yes | `new` → `audit sold` |
| `needs_conversation` | "Let's talk first." | E06 | Yes; book discovery | `new` |
| `reserved` | 303 → `/thanks/audit-reserved` | E01 | Yes | `new` → `waiting for opening` |
| `exclusion_zone` | "We can't take this one." | E25 | **No** | `declined by us` |
| `not_residential` | New for `03`: "We work on homes, not commercial jobs." / "Our test calls, scoring, and standards are built for homeowners calling about their own system. With mostly commercial work, you'd be paying us to learn your business." | E26 | No | `declined by us` |
| `out_of_scope` | "That's not work we do." | E27 | No | `declined by us` |
| `not_servicetitan` | "Not yet." For `switching`, new: "Once you've had 90 days of data in ServiceTitan, we'd be glad to hear from you." | E28 | No | `declined by us`, tag `st-list` |
| `low_lead_flow` | "We'd be taking your money for nothing." | E29 | No | `declined by us` |
| `no_test_consent` | "We'd be guessing at the part that matters most." | E30 | No | `declined by us` |
| `checkout_unavailable` | `06`'s copy | — | Yes, urgent | `new`, priority 1 |

Qualify declines end "No payment was taken." Reserve declines end "No reservation was made." **`03`'s "Market slot taken" block is withdrawn;** that case renders "Let's talk first."

**"No payment before a pass" is enforced five ways:**

1. Only the qualify endpoint creates Checkout Sessions, and only for `qualified`.
2. No Payment Link, invoice, or Dashboard charge uses the audit Price, except an F10 invoice issued against a `qualified` row while F10 is on. `06`'s daily reconciliation flags any payment without a `qualified` row.
3. WAITLIST returns `409`.
4. The receptionist takes no card details.
5. O4's target is 0 fit refunds.

**Done when:**

- A fixture per row passes.
- Precedence holds for every pair of hard declines.
- A `market_hidden` response contains none of "taken," "slot," "market," or "client."
- No qualify path reaches Stripe without a `qualified` row.

## `form_teardown_request` {#form-teardown-request}

| Key | Label (`03`) | Control | Req | Validation | Why we ask | Stored |
|---|---|---|---|---|---|---|
| `name` | Your name | text | ✓ | *text* | Who we confirm with | `leads.name` |
| `role` | Your role | radio: `owner` · `manager` · `other` | ✓ | *choice* | Authority to authorize tests; "other" is checked on the call | `teardown_requests.role` |
| `company` | Company name | text | ✓ | *text* | The shop | `leads.company` |
| `phone_to_call` | The number customers call | `type="tel"`, no autocomplete | ✓ | *phone* | The number we test | `…phone_to_call_e164` |
| `website` | Website (optional) | text | opt | *website* | The form we submit and time | `…website` |
| `zip` | Shop ZIP code | text | ✓ | *ZIP* | State (recording rule), exclusion, market | `leads.zip`, `…state_code` |
| `trade` | Trade | radio | ✓ | *choice* | Which scenario; market check | `leads.trade` |
| `crm` | What runs your jobs? (optional) | radio | opt | — | Whether an audit could follow | `leads.crm` |
| `email` | Email | email | ✓ | *email* | Where the walkthrough goes | `leads.email` |
| `phone` | Your mobile | tel | ✓ | *phone*; if it equals `phone_to_call`, flag it rather than reject | The confirmation call, so the owner isn't tested by mistake | `leads.phone_e164` |
| `heard_from` | How did you hear about us? (optional) | select | opt | — | Attribution | `leads.heard_from` |
| `authority` | — | checkbox, `03`'s text (`10` approves) | ✓ | `03`'s message | We test only with an owner's or manager's authorization | `…authority_confirmed` |
| consent | `10` | — | ✓ | — | — | `submissions.consent_version` |

**Outcomes:**

- **Accepted:** 303 → `/thanks/teardown`.
- **`exclusion_zone`:** `03`'s block, plus E25. No call.
- **A repeat within 30 days:** `03`'s duplicate message.
- **`market_hidden`, `market_review`, `zip_unknown`, or `zone_edge`:** new copy for `03`. Heading: "We'll call you first." Body: "We need to check one thing before we schedule your teardown. We'll call from [TECHEO_PHONE]. [SLA line, short]" The confirmation is E17's review variant.

We never tear down a signed client's direct competitor: a teardown is free consulting, and exclusivity has to mean something. The founder gives the market-decline sentence by phone, then sends E-NA's teardown variant.

## The calculators {#calculator}

**Principles.**

- **It's arithmetic, never a diagnosis** (`01` anti-goal 4).
- **70% is the only number we supply.** It comes from `content/sops/csm/kpis.md`, is labeled as ours, and is fixed, because the Gap Statement fixes it at 0.70 (`techeo.audit` #gap). An editable target only invites a bigger number.
- **No other input has a default.**
- **Always round down and show the arithmetic.** The rounding steps in the formula block below are also the Gap Statement's steps (a change to `techeo.audit` in `#dependencies`), so a buyer sees one rounding convention on the site and on page 2 of the audit.
- **Nothing is sent or stored unless the visitor asks for the email:** no localStorage, no cookies, nothing in the URL. `09` sends no event carrying an input value.

### Mini calculator, `/#calculator` (v1)

| Input | Key | Unit | Allowed | Parse and errors |
|---|---|---|---|---|
| Qualified calls per month | `qualified_calls` | calls | Whole number, 1–10,000 | Strip commas; a decimal is an error. "Enter a whole number of calls from 1 to 10,000." |
| Booking rate on those calls | `booking_rate_pct` | % | 0–100, one decimal place | `03`'s message. New: "Use at most one decimal place, like 52.5." A value between 0 and 1 with a decimal point gets: "Enter the rate as a percentage: 52 for 52%." |
| Average revenue per booked job | `avg_revenue` | $ | Whole dollars, $10–$50,000 | Cents are truncated, which is the conservative direction. "Enter your average revenue per booked job in dollars, from $10 to $50,000." |

**The caps are typo guards, not benchmarks.** They catch a year's figure typed as a month's, or annual revenue typed as a job average. They are an assumption; widen them if a real owner hits one.

**Formula.** Integer math, with the rate in tenths of a percent:

```
rate_t        = booking_rate_pct × 10
if rate_t ≥ 700            → AT_TARGET
extra_jobs    = floor(qualified_calls × (700 − rate_t) ÷ 1000)
if extra_jobs = 0          → UNDER_ONE_JOB
monthly_exact = extra_jobs × avg_revenue;   annual_exact = monthly_exact × 12
monthly_shown = floor to $100 (<$1,000) · $1,000 (<$100,000) · $10,000 (≥$100,000)
annual_shown  = floor to $1,000 (<$10,000) · $10,000 (<$1,000,000) · $100,000 (≥$1,000,000)
monthly_shown = 0          → "less than $100 a month"
annual_shown  = 0          → "less than $1,000 a year"
```

Jobs are floored before multiplying, so an owner can check "{extra_jobs} × {avg_revenue}" by hand. Results show no cents.

**Updating.**

- The result updates only on "Show my number" or Enter. That gives one screen-reader announcement (`05` `role="status"`).
- **Inputs edited after a result:** the result area shows new text for `03`, "Your numbers changed. Press Show my number to update." The email form hides until the result is recomputed, so emailed figures always match the ones shown.
- **Any invalid input:** the result area returns to empty.

**States:** empty, below 70%, AT_TARGET (`03`'s "70% or higher"), and UNDER_ONE_JOB. New text for UNDER_ONE_JOB, for `03`: "**Less than one booked job a month.** At {calls} qualified calls, the gap between {rate}% and 70% is under one job. The leaks this can't see are missed calls, slow callbacks, and paid leads nobody touched. A free phone teardown checks the first two at no cost." It carries the teardown CTA.

**Worked examples.** Example 1 uses the labeled assumptions in `techeo.offers` #pricing-rationale. The rest are invented to test the rules. None is a benchmark or a Homets figure.

| # | Inputs | Arithmetic | Shown |
|---|---|---|---|
| 1 | 300 calls, 50%, $400 | 700 − 500 = 200; 300 × 200 ÷ 1000 = 60 jobs; 60 × $400 = $24,000; × 12 = $288,000 | About $24,000/mo; $280,000/yr |
| 2 | 137, 43.5%, $437 | 700 − 435 = 265; 137 × 265 = 36,305 ÷ 1000 → 36; 36 × $437 = $15,732; × 12 = $188,784 | $15,000; $180,000 |
| 3 | 1,200, 61.2%, $1,150 | 700 − 612 = 88; 1,200 × 88 = 105,600 ÷ 1000 → 105; 105 × $1,150 = $120,750; × 12 = $1,449,000 | $120,000; $1,400,000 |
| 4 | 40, 68%, $350 | 40 × 20 = 800 ÷ 1000 → 0 | UNDER_ONE_JOB |
| 5 | 250, 72%, $500 | 720 ≥ 700 | AT_TARGET; teardown CTA |
| 6 | 0 calls | Below the 1–10,000 range | Error; result goes empty |
| 7 | 52,000 calls | Above the cap | Error |
| 8 | 100, 69%, $50 | 700 − 690 = 10; 100 × 10 ÷ 1000 = 1 job; 1 × $50 = $50; × 12 = $600 | Less than $100 a month; less than $1,000 a year |

`03` must extend its example to "…or $288,000 a year, shown as $280,000," so the formula block and the result agree.

### Full calculator, `/calculator` (v2)

The full calculator mirrors the Gap Statement's four terms. `04`'s fifth source, unanswered calls, sits behind the flag `CALC_MISSED_CALLS`. The flag stays off until `techeo.audit` #gap adds that term (`04` open question 3).

| Section | Inputs (key · range) | Term |
|---|---|---|
| Shared | `avg_revenue` · $10–50,000 | — |
| 1 · Unbooked callers | `qualified_calls` · 1–10,000; `booking_rate_pct` · 0–100.0 | `floor(calls × (700 − rate_t) ÷ 1000) × avg_revenue`. At or above 70%: "At or above our 70% target: $0 from this line." |
| 2 · Marketplace | `untouched_leads` · 0–2,000/mo; `marketplace_close_pct` · 0–100.0 | `floor(untouched × close_t ÷ 1000) × avg_revenue` |
| 3 · LSA cutoff | `lsa_cutoff_days` · 0–31; `lsa_jobs_per_day` · 0–50.0; `avg_revenue_lsa` · optional; blank uses their own `avg_revenue` | `floor(days × jobs_t ÷ 10) × revenue` |
| 4 · Google Ads | `wasted_ads_spend` · $0–100,000/mo | As entered |
| Flag · Unanswered | `inbound_calls`, `answered_calls` (≤ inbound), `real_customer_pct` | `floor((inbound − answered) × real_t × rate_t ÷ 1,000,000) × avg_revenue`, at the **current** rate |

**Section rules:**

- A blank section counts as $0: "Not entered: $0."
- A half-filled section gets a new `04` message: "Fill in both numbers in this section, or clear it."
- A result needs at least one complete section.
- Each line shows its exact arithmetic. Only the total is rounded, using the mini's steps.

**Worked example** (`04`'s inputs, flag off):

- 300 × 20.0% = 60 jobs × $400 = $24,000
- 10 × 30.0% = 3 jobs × $400 = $1,200
- 4 × 1.0 = 4 jobs × $400 = $1,600
- $500 wasted spend
- Total: $27,300 a month, shown as **$27,000**; $327,600 a year, shown as **$320,000**

With the flag on, (440 − 400) × 75.0% × 50.0% = 15 jobs adds $6,000, which gives $33,000 a month and $390,000 a year. Both match `04`'s figures.

`04`'s editable target becomes read-only: "Target: 70%, the standing target we hold our own desk to at Homets."

### `form_calculator_email`

- **Fields.** `email` (required, *email*) and `10`'s consent. Hidden: the inputs, `formula_version` (`calc-mini-1` or `calc-full-1`), and `shown_monthly`.
- **Server check.** The server recomputes the result. If it differs from `shown_monthly`, it logs `calc_mismatch` and emails its own figure.
- **Stored on submit only.** `app.calculator_submissions` holds the email, inputs (`jsonb` in v2), `monthly_exact`, `monthly_shown`, `formula_version`, and `emailed_at`. A lead is created with `source = calculator`.
- **Never:** a ClickUp task, a callback, or a second email. These leads appear in the weekly digest.

**Done when:**

- All eight examples pass in shared unit tests.
- A network trace shows no request carrying an input or result value before the email is sent. The only requests are `09`'s `calculator_start` and `calculator_complete`, and they carry only `calculator_version`.
- axe finds no violations in any state.

## v2 forms: `form_market_check` and `form_partner_referral` {#forms-v2}

### `form_market_check` (`/markets`)

Labels follow `04` #markets, in its order. There is no "State" field: the ZIP gives it.

| # | Key | Label (`04`) | Control | Req. | Validation | Why we ask | Stored |
|---|---|---|---|---|---|---|---|
| 1 | `name` | Your name | text, `name` | ✓ | 1–120 characters, including a letter → *text* | Who Blake calls with the answer | `leads.name` |
| 2 | `company` | Company name | text, `organization` | ✓ | 1–160 → *text* | The business the receptionist verifies | `leads.company` |
| 3 | `role` | Your role | radio: `owner` "Owner" · `manager` "Manager" · `other` "Other" | ✓ | *choice* | The answer goes to someone who can act on it; "other" is checked on the call | `market_checks.role` |
| 4 | `phone` | Best phone number | `type="tel"`, `tel` | ✓ | Valid NANP number → *phone* | The verification call and Blake's answer | `leads.phone_e164` |
| 5 | `email` | Email | `type="email"`, `email` | ✓ | ≤254 characters, one @, a dot in the domain → *email* | E33, and E-NA's market-check variant if the answer is no | `leads.email` |
| 6 | `trade` | Trade | radio: `hvac` "HVAC" · `plumbing` "Plumbing" · `both` "Both" | ✓ | *choice* | Market slots are per trade | `leads.trade`, `market_checks.trade` |
| 7 | `service_area` | Main city or county you serve | text; help (`04`): "Where most of your jobs are. We'll ask about the edges on the call." | ✓ | 1–120 → *text*; longer → *too long* | Jobs can sit far from the shop's ZIP | `market_checks.service_area` |
| 8 | `zip` | Your shop's ZIP code | text, numeric, `postal-code` | ✓ | 5 digits → *ZIP* | Exclusion zone, state, callback time zone | `leads.zip`, `market_checks.state_code` |
| 9 | `crm` | What runs your jobs? | radio: `servicetitan` "ServiceTitan" · `switching` "Moving to ServiceTitan" · `other` "Another system" · `none` "No system yet" | ✓ | *choice* | An open market leads nowhere until the shop is on ServiceTitan | `leads.crm` |
| 10 | `heard_from` | How did you hear about us? (optional) | select, `#form-audit` row 17's keys | opt | One of the list | Attribution | `leads.heard_from` |
| — | consent | `10`'s statement | — | ✓ | Per `10` | — | `submissions.consent_version` |

**Process.**

- Nothing is answered on screen. E33 confirms within 5 minutes.
- Inside the SLA, the receptionist confirms the business is real (its website or listing matches the name and phone), without giving any answer.
- Within 2 business days, the founder calls with one of `04`'s three answers. A "not available" answer is followed by E-NA's market-check variant.
- A repeat check within 30 days goes to the founder (`04` rule 5).
- Stored in `app.market_checks`.

### `form_partner_referral` (`/partners`)

Labels and fieldsets follow `04` #partners. The partner is the lead: `app.leads` holds the partner's contact details, and the shop's details live only in a new `app.partner_referrals` table, never in `app.leads` or any email list.

| # | Key | Label (`04`) | Control | Req. | Validation | Why we ask | Stored |
|---|---|---|---|---|---|---|---|
| | **About you** | | | | | | |
| 1 | `partner_name` | Your name | text, `name` | ✓ | 1–120 characters, including a letter → *text* | Who we confirm with | `leads.name` |
| 2 | `partner_company` | Your company | text, `organization` | ✓ | 1–160 → *text* | Which vendor sent the shop | `leads.company` |
| 3 | `partner_type` | What you do | radio: `st_implementation` "ServiceTitan implementation" · `bookkeeping` "Bookkeeping or accounting" · `recruiting` "Recruiting" · `financing` "Financing" · `other` "Other" | ✓ | *choice* | Which partner channel works | `partner_referrals.partner_type` |
| 4 | `partner_email` | Email | `type="email"`, `email` | ✓ | ≤254 characters, one @, a dot in the domain → *email* | E34, and the teardown when it comes to the partner | `leads.email` |
| 5 | `partner_phone` | Phone | `type="tel"`, `tel` | ✓ | Valid NANP number → *phone* | The call if anything is unclear | `leads.phone_e164` |
| | **The shop** | | | | | | |
| 6 | `shop_name` | Business name | text, no autocomplete | ✓ | 1–160 → *text* | The shop we test | `partner_referrals.shop_name` |
| 7 | `shop_website` | Website (optional) | text, `inputmode="url"`, no autocomplete | opt | Host with a dot; ≤255 → *website* | The web form we submit and time | `partner_referrals.shop_website` |
| 8 | `shop_phone_to_call` | Published phone number to call; help (`04`): "The number on their website or Google listing." | `type="tel"`, no autocomplete | ✓ | *phone*; if it equals `partner_phone`, flag it rather than reject | The number we test | `partner_referrals.shop_phone_to_call_e164` |
| 9 | `shop_city` | City | text, no autocomplete | ✓ | 1–80 → *text* | Zone and market, checked by hand | `partner_referrals.shop_city` |
| 10 | `shop_state` | State | select: the 50 states and DC | ✓ | *choice* | Zone, market, and the recording rule | `partner_referrals.shop_state` |
| 11 | `shop_trade` | Trade | radio: `hvac` "HVAC" · `plumbing` "Plumbing" · `both` "Both" | ✓ | *choice* | Which scenario; market check | `partner_referrals.shop_trade` |
| 12 | `shop_crm` | On ServiceTitan? | radio: `yes` "Yes" · `no` "No" · `not_sure` "Not sure" | ✓ | *choice* | Whether an audit could follow. Not a condition of the teardown | `partner_referrals.shop_crm` |
| | **Where should the teardown go?** | | | | | | |
| 13 | `deliver_to` | Where should the teardown go? | radio: `partner` "To me. I'll pass it on." (checked by default) · `owner` "To the owner directly. They've asked for it." | ✓ | *choice* | Nothing reaches the shop unasked | `partner_referrals.deliver_to` |
| 14 | `owner_name` | Owner's name | text, no autocomplete | If `owner` | 1–120 → *text* | Whom the walkthrough is addressed to | `partner_referrals.owner_name` |
| 15 | `owner_email` | Owner's email | `type="email"`, no autocomplete | If `owner` | *email* | Where the walkthrough goes | `partner_referrals.owner_email` |
| 16 | `owner_requested` | The owner has asked to receive this teardown from Techeo directly. | checkbox | If `owner` | New message: "Confirm the owner asked for this, or choose "To me."" | We send nothing to a shop that didn't ask (`10`) | `partner_referrals.owner_requested_confirmed` |
| — | consent | `10`'s statement, which must cover a third party's details | — | ✓ | Per `10` | — | `submissions.consent_version` |

`deliver_to` defaults to `partner`. Choosing `owner` makes `owner_name`, `owner_email`, and the `owner_requested` attestation required; the server enforces this whether or not JavaScript ran.

**Rules.**

- City and state are asked instead of ZIP because referrers rarely know a shop's ZIP. The founder checks the zone and the market by hand before any call.
- Nothing automated ever reaches the shop (`04`). E34 goes to the partner only.
- A referral we won't take gets one sentence to the partner, whatever the cause: "We won't be doing this one." (`04` #partners).
- Duplicates are matched on the shop's phone within 30 days.
- These teardowns share F5's weekly limit.

## Flows {#flows}

T0 means the server's `received_at`. Each email (E-number), callback card, and status named here is specified in `#emails`, `#receptionist`, and `#pipeline`.

### F1 · Audit reservation (WAITLIST)

1. **T0.** The reservation rules run in ≤3 s.
   - **Hard decline:** show the decline block; send the decline email within 5 min; no callback; create a task in `declined by us` at priority 4.
   - **Reserved:** 303 to `/thanks/audit-reserved`. Write the submission, the qualification with its `review_reasons`, and the `app.audit_reservations` row (`reserved_at = T0`, `opening_date`, `waitlist_reason`).
2. **T0 + ≤1 min.** Create the task in `new` with its SLA due time, and send the internal emails.
3. **T0 + ≤5 min.** Send E01 — except for `bot_check = missing`, which gets no automated email (brief v2 D11; `06` #forms step 7). The thanks page and the callback confirm instead.
4. **By the due time.** Callback card R.
   - Connected: move to `waiting for opening`.
   - A failed first attempt: E35.
   - Three failed attempts: send E31. The reservation stands: move it to `waiting for opening` with the tag `unreached`.
5. **Within 5 business days.** The founder reviews the flags. A `market_hidden` flag gets a one-sentence call, then E-NA, then `on hold`, keeping the reservation's place.
6. **Until the opening.**
   - E02 if `CAPACITY_DATE` moves.
   - E03 seven days before the opening (Mon Jan 25; Tue Aug 31, 2027).
   - E32 on cancellation.
   - A phone reservation takes the call's time as `reserved_at` and is keyed through F8.

### F2 · Opening day

Every reservation is contacted by the end of the second business day, counting the opening day as the first: by Tue Feb 2 for the Mon Feb 1, 2027 opening, or by the end of the first business day after `CAPACITY_DATE`.

**The Sep 7, 2027 exception.** The site flips with v2 at 13:00 (`11` #v2), never automatically (`06` #season-state). E04 and the calls start at 15:30 once the OPEN checks pass, or Wed Sep 8 at 08:00. Every reservation is contacted by the end of Thu Sep 9, and `{contact_due_date}` reads "Thursday, September 9, 2027." The Feb 1 openings keep 08:00.

1. **The last business day before the opening, before 12:00.** The founder:
   - re-runs the exclusion and market checks;
   - calls anyone newly `market_hidden`;
   - confirms discovery capacity;
   - flags phone reservations more than 3 months old at the opening that lack `phone-reserve-confirm-v1`. Those are contacted by email only (E03 and E04's email-only variant), unless a National Do Not Call Registry check the founder runs that day clears the number (`10` #tcpa-analysis item 3; verify access and cost);
   - sends the receptionist the call list: queue order, name, company, phone, state, time zone, and "email only: do not dial" beside each flagged reservation, so the vendor can still book one that calls in or replies. Never revenue, review flags, or market data.

   **Who is on the list.** The call list and E04's recipients are reservations in `waiting for opening` only, including those tagged `unreached` or `carried`. Exclude `on hold`, seeds, canceled reservations, `do not contact`, and `declined by us`. Seed teardowns are removed from F5's queue.
2. **Before 08:00 [TZ] on the opening day** (the Feb 1 openings). `06` flips the site and Cal.com with the first scheduled run after local midnight (`06` #season-state). The founder or the enforcer confirms that the live site and Cal.com show OPEN. E04 sends only after that. On Sep 7, 2027, the flip comes with the v2 release at 13:00–15:00 (`11` #v2), and the same confirmation gates E04.
3. **08:00** (Sep 7, 2027: 15:30 once the OPEN checks pass, or Wed Sep 8 at 08:00). Send E04 to the call list, and E04's email-only variant to flagged reservations. The receptionist calls in `reserved_at` order, between the later of 08:00 [TZ] and the opening of the lead's state window, and the earlier of 18:00 [TZ] and that window's close (`#sla` lead-local guard): day 0, day 0 + 2 hours, then the morning of day 1, never more than 3 attempts in any rolling 24 hours. Connected callers book into Cal.com `discovery-queue`, which uses the discovery schedule with a 35-day horizon.
4. **End of day 1** (Sep 7, 2027: the end of Thu Sep 9). Measure O7. For an email-only reservation, E04's variant is the contact, and its send time is `contacted_at`. Anyone unreached gets E31 with the public link and stays active for 30 days, in `waiting for opening` with the tag `unreached`; after that the task moves to `unreachable` and the reservation is `lapsed`.
5. **Slots.**
   - Discovery: at most 2 a day; 4 a week, or 5 a week in March and April (open question 5).
   - Audits: at most 3 sold and not yet read out (`AUDIT_CAPACITY`). The third sale flips the site to WAITLIST·capacity within 1 business day.
   - **`{capacity date}`, by trigger.** Kill switch and gate: `01` open question 2's date. `AUDIT_CAPACITY`: the earliest expected readout plus 1 business day, or the next seasonal opening if that date falls after the window's last OPEN day (a capacity date after the scheduled flip to WAITLIST would promise a slot that doesn't exist).
6. **Fairness.**
   - Contact runs oldest `reserved_at` first. Each reservation picks from the slots open when it is reached.
   - No held slots. No moving up for size, source, or design-partner potential. No moving back up after being unreachable.
   - A reservation that calls in first is booked when it calls, which we don't advertise.
   - The queue orders calls with Blake. It never grants exclusivity (only a signed MSA does; `01` open question 4) or a design-partner place.
7. **End of the window.** On the first business day in WAITLIST after any flip (Mon May 3 and Wed Dec 1, 2027, or the first business day after a capacity flip), the founder sorts every reservation held at that opening that hasn't booked discovery, bought, canceled, or been declined. The receptionist's call notes decide the case; the founder sends each email within 2 business days.

   | Case | What happens | ClickUp · reservation | Email |
   |---|---|---|---|
   | Reached, but no discovery slot fit before the window closed (the day or week cap, the 35-day horizon, or the F7 cutoff) | Carries to the next opening | `waiting for opening`, tag `carried` · `reserved` | E36 |
   | Reached, and asked to wait for the next window | Carries | Same | E36's "asked to wait" line |
   | Unreached, with its 30-day active window (step 4) still running | Carries | `waiting for opening`, tags `carried` and `unreached` · `reserved` | E36's unreached line |
   | `on hold` | Carries, still held; the founder decides again at the next day-before review | `on hold`, tag `carried` | None |
   | Unreached when its 30-day active window ends, whenever that falls | Lapses; it doesn't carry | `unreachable` · `lapsed` | None; E31 already said so |
   | Would carry past the limit below | Lapses | `closed lost`, tag `lapsed` · `lapsed` | E37 |
   | Reached, and said no | Canceled | `closed lost`, tag `canceled` · `canceled` | E32 |

   **Carry rules.**
   - `reserved_at` never changes, so a carried reservation stays ahead of everyone who reserved after it. `opening_date` moves to the next opening, and `carry_count` rises by one.
   - **Limit.** A reservation carries at most twice, so it is held at no more than three openings (open question 20). A carry to a `{capacity date}` doesn't count toward the limit: the capacity was ours to run out of.
   - **Consent re-check.** A carried phone reservation is more than 3 months old at the next opening (Feb 1 to Sep 7 is seven months; Sep 7 to Feb 1 is five). E36's phone variant carries the `phone-reserve-confirm-v1` link again, and step 1 flags the reservation if it is still unconfirmed. Web reservations rest on `reserve-v1`, which asks for calls "including when audits open" (`10` #consent-texts; counsel question 4).
   - **Counting.** `06` keeps one `app.reservation_openings` row per reservation per opening held, so O7 and O8 count a carried reservation at every opening where it was held. `09`'s scorecard prints carried reservations as their own line ("{n} carried from {previous opening}"), so a queue that outruns discovery capacity shows up as a number rather than a quiet miss.
   - Seeds never carry; they are canceled once the callback is logged (`#sla`).

### F3 · Audit purchase (OPEN), by card

1. **T0.** A `qualified` submission creates a Checkout Session (`06` #stripe, email prefilled) and 303s to it. The purchase is `checkout_open` and the SLA clock runs.
2. **Paid** (`checkout.session.completed`).
   - Purchase `paid`; lead `audit_purchased`; task in `audit sold` at priority 1.
   - The buyer lands on `/thanks/audit-purchased`.
   - **Within 5 min:** Stripe's receipt, and E07, the access request built from `techeo.audit`'s Week 3 email.
3. **By the due time.** Callback card P: confirm the order and book `audit-kickoff`. With no kickoff booked by the end of the next business day, call once more. A kickoff never gates access.
4. **Business day 2, access incomplete.** Send E11.
5. **Last access item arrives.** Set `access_complete_on`. Day 1 is the next business day; delivery is due on day 7. Send E12, and move to `audit in progress`.
6. **Business day 5.** Send E13 with readout slots on day 6 or 7. Readouts are scheduled by hand (`06`).
7. **The readout,** recorded, with the PDF sent at the start. Move to `readout held`. The credit becomes `available` until readout + 30 days (`03` open question 1).
8. **Follow-up.**
   - E14, E15, and E16 on days 1, 7, and 25.
   - `06` sends a reminder on day 21.
   - An unused credit expires on day 30.
   - If a retainer is signed, apply the credit and hand off to `techeo.delivery`.

### F4 · ACH, failure, and abandonment

1. **ACH checkout completes unpaid.** The purchase is `processing`, tagged `ach-processing`. **Send E07 immediately, with its ACH line.** The buyer can prepare access, but no test calls or data pulls start before the payment clears.
2. **`async_payment_succeeded`** (about 4 business days per Stripe; verify). The purchase is `paid`. Send E12, or its cleared variant if access isn't complete yet.
3. **`async_payment_failed`.**
   - `payment_failed`, an urgent task, and a founder alert.
   - **E09 within 1 hour.**
   - A receptionist call within 2 business hours offering card payment through `/audit` or a call with Blake.
   - If unresolved after 5 business days: close the order, remove any access we were granted within 1 business day and confirm it, and move to `closed lost`.
4. **Checkout expires** (60 min). If the lead has no paid or processing purchase and no opt-out, send E10 once, 15 min after expiry.
5. **`checkout_unavailable`.** Keep the answers, open an urgent task, and have the callback offer a retry.
6. **Stripe can't take payment for hours, or at all.** F10.

Refunds and disputes follow `06` #stripe and `/terms`.

### F5 · Teardown request

1. **T0.** The request is accepted, or gets an outcome (`#form-teardown-request`). Within 5 min: E17 (its review variant for a request under review) and a task in `new`.
2. **By the due time.** Callback card T confirms the number, the state, office hours, the web form, and the requester's authority, then gives the timing: "within 10 business days" in OPEN, or "from {next opening}, roughly the week of {estimate}" in WAITLIST. Move to `teardown queued`.
3. **Capacity.**
   - At most 5 teardowns a week across all sources (`techeo.plan90`'s February pace); site and partner requests go first.
   - A queue longer than 10 business days gets its date on the confirmation call.
   - In WAITLIST, E18 goes out when the window opens.
4. **Recording-law check, before the first dial, every time** (`techeo.legal` #compliance).
   - Look up `state_code` and the caller's own location in `10`'s table: `one_party`, `all_party`, or `unclear`.
   - **Default `notes_only`.** Record only if both are `one_party`, the owner asked in writing, and the table was reviewed within 12 months.
   - Store `recording_mode`, `recording_rule_checked_on`, and `recording_rule_version`. The walkthrough records only our own screen and voice.
5. **Calls.**
   - Three calls, at different hours, on at least two days, within 10 business days, plus one web form submission timed to the minute from a dedicated test line (never [TECHEO_PHONE]).
   - Use `techeo.audit` scenarios 1 or 3 only, never an emergency.
   - Notes say "the person who answered."
   - **A test appointment is canceled by phone within 60 minutes, before dispatch.**
6. **Within 3 business days of the last call.** Send E19 with an unlisted, noindex link that expires in 90 days. Move to `teardown sent`. Nothing automated follows.

### F6 · Discovery call to purchase (handoff to `techeo.gtm` #process)

The founder reads the task first, in a non-protected block. Blake dials. The call covers:

1. The Homets disclosure, unprompted and first (`techeo.guardrails` #coi item 3).
2. Their numbers and their pain.
3. Three questions, logged:
   - `01` #success's two: "What did you look at before this call?" and "Was there anything on the site or the phone that almost stopped you?"
   - `07` #measuring-demand's one: "Did you search or ask an AI assistant about this? What did you type?" The answer is recorded verbatim, in the prospect's own words, because it is the only source of real prompt wording for `07`'s query sheet and `12`'s `techeo-question-log` (`12` #one-question).
4. The next step.

| Outcome | Next |
|---|---|
| Audit | A clearance if needed, then E24 |
| Teardown first | F5 |
| Not a fit | E-NA or the matching decline |
| Later, inside this window | No reservation. The task keeps `discovery held`, with a due date on the day the prospect named |
| Later, next window | Blake reads `10`'s `phone-reserve-v1` at the end of the call, then keys a reservation through F8 the same day: `reserved_at` is the call's time, so it joins the back of the line, and `opening_date` is the next seasonal opening, or a later one the prospect names. The task moves to `waiting for opening`, and E01's phone variant follows. |

Move the task to `discovery held`, then `audit sold` when Stripe fires. Calculator emails follow `#calculator`, and calls to the line follow `#receptionist`.

### F7 · Flips mid-window

- **Scheduled flips to WAITLIST.** From 21 days before the last OPEN day (Fri Apr 9 for Fri Apr 30; Tue Nov 9 for Tue Nov 30, 2027), discovery booking stops at the last OPEN day. Paid audits are delivered under `03`'s late-window notice. Reservations still unbooked at the cutoff are offered any slot up to the last OPEN day; those that can't take one, and anyone still queued on Apr 30 or Nov 30, follow F2 step 7.
- **Capacity flips** (kill switch, gate, or `AUDIT_CAPACITY`).
  - Paid audits continue.
  - Reservations not yet booked keep their place and follow F2 step 7. A carry to `{capacity date}` doesn't count toward the carry limit.
  - `{capacity date}` follows F2 step 5's rule for the trigger: `01` open question 2's date for the kill switch and the gate, which can push booked calls to the next seasonal opening; the readout-based date for `AUDIT_CAPACITY`.
  - Within 1 business day, the receptionist moves each booked discovery call past `{capacity date}`. Each becomes a reservation with its original booking time.
  - If the founder can't be reached, the enforcer's written instruction to the vendor is enough.
- **`state_mismatch`.** A reservation posted from a cached WAITLIST page is handled as an OPEN lead.

### F8 · Phone intake

A call that produces a lead, a consent, or a promise to call back becomes a record, the same as a form. A phone lead nobody keys can't be counted, called back on time, or honored when it opts out.

**Who keys it, and by when.**

- **The agent who took the call keys it, during the call or within 15 minutes of hanging up,** on the staff intake page: `06`'s `POST /api/staff/intake`, behind its own Cloudflare Access application, with each of the vendor's named agents on the policy (open question 16).
- **Fallback, if the vendor can't use the page:** within the same 15 minutes, the agent sends the structured intake email (a fixed template, one `key: value` line per field below) to the intake address. Zapier's email parser posts it to the same endpoint, as `06` does for call events. A message the parser rejects goes to the founder, who keys it by the end of the next business day; until then the vendor's log is the record.
- **The founder keys the founder's own calls** (F6's "Later," F9's outbound targets) on the same page.

**What each call type keys.** Every staff submission carries `bot_check = 'staff'`, `channel = 'phone'` (on the submission and on any reservation), the flag `entered_by_staff` in `app.submissions.flags` (`09`), the vendor's call id, and the call's start from the vendor's log as `received_at`.

| Call type (inbound step) | Fields keyed | Keyed as | Child rows | Consent | What follows |
|---|---|---|---|---|---|
| Reservation (5) | Step 3's answers, which map to `#form-audit` rows 1–8, 10, 12, and 15–17; anything else in `notes` | `form_audit_reserve` | `audit_qualifications`; `audit_reservations`, with `reserved_at` = the call's start | `phone-reserve-v1` | The reservation rules; E01's phone variant; the task in `waiting for opening` |
| Discovery booking, OPEN (4) | Step 3's answers, including rows 9 and 11; the Cal.com booking uid | `form_audit_qualify` with `phone_booking = true`: the rules run, no Checkout Session is ever created, and rows 13–14 wait for the discovery call | `audit_qualifications` | `phone-book-v1` | E21; the task in `discovery booked` |
| Teardown (5, 7c, 7d) | Card T's items: the number to test, state, office hours, web form, the caller's role, and a spoken yes to `10`'s authority text | `form_teardown_request` | `teardown_requests` | `10`'s spoken teardown text (requested in `#dependencies`) | E17; the task in `teardown queued`; F5 from step 3 |
| ServiceTitan list (7c) | Name, company, phone, email, ZIP, trade, `crm` | `form_audit_reserve`'s rules, in either state | `audit_qualifications`, outcome `not_servicetitan` | None needed: E28 is service email | E28; `declined by us`, tag `st-list` |
| Commercial or out of scope (7b, 7e), only if the caller gives an email | Step 3's answers so far | `form_audit_reserve`'s rules, in either state | Outcome `not_residential` or `out_of_scope` | None needed | E26 or E27; `declined by us` |
| Existing client (8), referrer (9), a seller worth a reply (10), press (11) | Name, company or outlet, phone, email, the message, any deadline; for a referrer, the shop's name, never as a lead | No submission | None | None | A task in ClickUp's "Messages" list (`#pipeline`), plus the escalation code |

**Never keyed:** step 7a's zone calls (nothing is booked or stored beyond the vendor's own log), homeowners, job seekers, Homets calls, and spam. They are counted in the weekly digest (escalation D).

**Consent evidence.** The agent keys each spoken consent (the version read, and yes or no) and logs it in the vendor's call record. `ingest_submission` writes the `app.consent_evidence` row from the staff submission: `consent_version`, `form_id`, `received_at` (the minute of the yes, or the call's start if the agent didn't note it), `captured_by` (the agent's name or id), `vendor_call_id`, and `channel = 'phone'`, the last three new (`06`). When that call's event arrives, `06` matches it by id, so the evidence rests on the vendor's log as well as the agent's entry, independent of any recording (`10` #tcpa-analysis item 3). A no means nothing is saved, and the agent closes the call (step 6).

**The SLA clock.** A call answered live is its own first touch. A staff intake creates no callback card and no due time, and it is left out of the SLA figures, which measure callbacks; the live-answer rate measures calls (`#unanswered`). Two cases do become eligible events, with the clock starting when the call ends: a call that dropped before intake finished, and a caller who asked to be called back instead of booking. Each gets the matching callback card. `06` writes the call as a `lead_touches` row of the new kind `inbound_call`, so the lead's `last_activity_at` moves.

**OPEN phone bookings.** The agent books `discovery` in Cal.com during the call (step 4), then keys the intake. The intake creates the lead, the submission, and the ClickUp task, which starts in `discovery booked`. `06` links the booking to the lead by booking uid or attendee email, whichever arrives first, so a `BOOKING_CREATED` that lands before the intake is held and linked, never dropped. `09`'s counts by form, `lead_channel`, and O8 therefore include phone leads, and O12 leaves them out (`entered_by_staff`).

**What the staff page shows the agent:** "Saved," and which confirmation email will go. Never a review reason, market status, or decline cause: a `market_hidden` phone reservation looks exactly like any other. If the server finds a zone ZIP the agent missed, the page says "Zone: read step 7a now if the caller is still on the line," and E25 goes out as it would for a form.

**The exclusion ZIP list the vendor holds** (inbound step 3).

- **What:** a CSV with one column, `zip`: five-digit ZIPs, one per line, sorted. It is `06`'s `server/generated/excluded-zips.json` flattened: the radius ZIPs and the Homets-county ZIPs, merged, with no labels. It never includes the `zone_edge` set, county or market names, client markets, or any other `app.market_slots` data.
- **When:** `06`'s build writes it whenever the list changes and alerts the founder. The founder sends it to the vendor's account manager with `script-1.0` on Nov 2 and after every change. The vendor confirms it is loaded within 1 business day, logged in ClickUp like a script change (Escalation, below). Each quarter the founder compares the vendor's loaded copy with the build's.
- **Backstop:** the staff page runs the same zone check, so a ZIP the agent misses is still declined.

**Done when:**

- A test phone reservation, phone booking, teardown, and ServiceTitan-list add each produce one lead flagged `entered_by_staff`, the child rows above, one `consent_evidence` row naming the agent and the vendor call id wherever a consent was read, and one ClickUp task in the status above.
- The weekly SLA review compares the vendor's export with staff intakes, and every reservation, booking, or teardown call has an intake keyed within 15 minutes. A call with none is keyed that day and logged as a miss.
- No staff-page response contains "market," a review reason, or any decline cause but the zone line.
- The vendor's loaded ZIP list matches the build's.

### F9 · Outbound teardowns (handoff from `techeo.gtm` #teardown)

An outbound target enters the pipeline before the first test call, so a prospect who later fills in a form or calls joins the task that already exists instead of starting a second one.

1. **Record first.** Before the first test call, the founder keys the target on the staff page (`call_type = outbound_target`, founder accounts only): company, the published number (`phone_to_call`), website, ZIP from the listing, trade, and the address the teardown email will go to, plus the owner's name if known. It is stored as a lead with `channel = 'outbound'` and `entered_by_staff`, with a `teardown_requests` row whose `origin = 'outbound'` and no authority, because nobody asked (`06`).
2. **Zone, market, and suppression, logged.** The server runs the same zone and market checks as a form and stamps `in_exclusion_zone`, `market_status`, the date, and `rules_version` on the record. That is the proof of `techeo.gtm` #process's "outside exclusion zones" before any call. A zone ZIP, a taken market (F5 never tests a client's direct competitor), or an email or phone on `app.suppression` is refused, and nothing is stored.
3. **CAN-SPAM status.** The record has no `consent_version`, so every commercial email to it, the cold teardown email included, carries the advertisement line and the C footer (`10` #can-spam items 1 and 5) until the prospect consents on a form or a call.
4. **ClickUp.** The task starts in `teardown queued`, tagged `outbound`, with no SLA due date, because nobody asked for a call; no confirmation email and no callback card go out. It moves to `teardown sent` when the founder sends the cold email. Every move writes `stage_events` on this one task, so `techeo.gtm`'s "Teardown sent → Discovery" rate is computed on it. The test calls follow F5 steps 4–5 and count toward F5's weekly limit.
5. **Matching a later form or call.** Within 12 months of the outbound lead's last activity, `ingest_submission` and the staff page look for it before creating a new lead, in this order:
   1. the same email (the existing upsert);
   2. the submitted `phone`, or a teardown's `phone_to_call`, equals the outbound record's number to test or its phone;
   3. the email's domain equals the outbound record's website domain, and the ZIP or the company name matches too. Free-mail domains (gmail.com, yahoo.com, outlook.com, hotmail.com, aol.com, icloud.com, and the rest of `06`'s list) never match.

   One match links the new lead to the outbound one (`parent_lead_id`, `06`). The ClickUp job comments on the existing task instead of creating one, and stage moves continue there. The confirmation email and any callback card go out as usual, and the new submission's qualification runs normally. More than one candidate links nothing and alerts the founder, who merges by hand using the `lead-<first 8 hex>` tag.
6. **Opt-outs.** A "stop" reply to a cold email, or an unsubscribe, goes into `app.suppression` (`opt_out`) through the staff page's `stop` action within 1 business day, and the task is tagged `email-opt-out` (`#replies`). A request not to be called sets `do not contact`.
7. **Reporting.** A lead whose first record has `channel = 'outbound'`, or one linked to such a lead, is never site-originated for O12 and O13, and its `lead_channel` is `teardown`, whatever `heard_from` says (`09`, requested in `#dependencies`).

**Done when** an outbound target, followed by a site teardown request from the owner's own address on the shop's domain, produces one ClickUp task with one unbroken run of `stage_events`, and O12's query marks it not site-originated.

### F10 · When Stripe can't take payment

Stripe is the only door for $1,500. When it stays shut, OPEN keeps working: qualification still runs first, and only the payment rail changes.

**Triggers,** any one while the site is OPEN:

- Checkout Sessions fail (`checkout_unavailable`) for 4 business hours in a row, or Stripe's status page reports a Checkout or API incident expected to last longer.
- Stripe disables charges on the account for any reason, including a review after the first $1,500 charge (`charges_enabled = false` on `account.updated`, or a Dashboard notice).
- Live activation isn't approved by the Thu Jan 28, 2027 rehearsal (`11` #flip-open). A miss of Fri Nov 13, 2026 only moves the rehearsal: v1 launches in WAITLIST, and no payment is taken before Feb 1.

**A payout hold or reserve alone is not a trigger,** because buyers can still pay. The founder answers Stripe's request within 1 business day (the audit's description, `/terms`, the MSA template, and the company's documents), and `11` tracks the cash.

**Who.** The founder declares F10. During a protected block, the builder may declare it on a trigger and tells the founder. `06` turns `PAYMENT_FALLBACK` on and off by commit and deploy, like a flip. **Never flip to `capacity`, or roll back to a WAITLIST build, to cover a payment outage** (`11` #flip-open): the site stays OPEN.

**What buyers see.** On `/audit#book`, above the form (new copy for `03`): "**Card and bank payments are down on our side right now.** You can still check fit: answer the questions below. If it's a fit, Blake emails you an invoice you can pay by bank transfer. Your 7 business days start once access is granted and the payment arrives." Labels and CTAs don't change.

**The route.**

1. A `qualified` outcome creates no Checkout Session. It shows new copy for `03`, "You're a fit. No payment was taken. Blake will email your invoice by the end of the next business day.", and sends E38. The task goes to `new` at priority 1, tagged `invoice-route`. The callback runs as usual on card Q, whose line becomes "Blake will email your invoice by {date}. Any questions before then?"
2. The founder issues an invoice only from a task whose submission is `qualified` (or cleared under `#qualification`), with its `qualification_id` on the invoice:
   - **Checkout alone is down:** a Stripe-hosted invoice for the audit Price, card or ACH, with the `qualification_id` in its metadata.
   - **Stripe can't charge at all:** a bank-transfer invoice to Techeo LLC's operating account, sent as a PDF from `blake@techeo.com`. Blake calls the buyer to confirm it before the buyer pays, and the invoice says: "We never change bank details by email. If a message says otherwise, call [TECHEO_PHONE]."
3. **On payment,** the founder records it on the staff page (`paid`, `payment_route`, and the invoice or bank reference). F3 then runs from step 2: E07, card P, the kickoff. ACH through a Stripe invoice follows F4.
4. **The clock** starts the business day after the last access item arrives and the payment has arrived: the invoice paid by card, the ACH cleared, or the transfer credited to Techeo's account.

**Buyers caught mid-flow.** Anyone with `checkout_unavailable` or an expired session in the 24 hours before F10 starts gets E38's mid-flow variant, and the urgent callback offers the invoice route. E10 is held while F10 is on, because it sends buyers back to a checkout that isn't working.

**Controls.**

- `#qualification`'s second enforcement rule holds, with one exception: an F10 invoice issued against a `qualified` row while F10 is on. `06`'s daily reconciliation matches each Stripe invoice by `qualification_id`; the founder matches each bank transfer against the bank statement at the Friday review.
- `AUDIT_CAPACITY` counts invoice purchases exactly like Checkout purchases (`06`).
- **O2 counts them.** Qualification ran through `/audit`, which is what `01` anti-goal 3 protects. The scorecard notes the payment route.
- A refund of a bank transfer goes back the same way, under `/terms` (`10`).

**Ending F10.** When a synthetic qualify reaches `checkout.stripe.com` again and Stripe shows charges enabled, the founder turns `PAYMENT_FALLBACK` off. Buyers already on the invoice route finish on it.

**Done when** a preview with `PAYMENT_FALLBACK` on shows the fit message for a `qualified` submission, sends E38, and creates no Checkout Session, and a recorded bank payment starts F3 at step 2 with one `audit_purchases` row whose route is `bank_transfer`.

### F11 · When we have to move a call

Date overrides stop new bookings on a bad day (`#sla`, the founder's calendar). This covers the calls already booked: discovery calls, kickoffs, and readouts moved for a heat wave, a hard freeze, a coverage gap, illness, or anything else on our side, and a founder no-show.

1. **Notice.** The founder emails the vendor "move {date}" (or "move {date} {time}" for one call) as soon as it's known and sets the date override. The notice never states a cause. If the founder can't send it, the enforcer's written instruction is enough, as in F7.
2. **The receptionist calls each affected prospect within 1 business hour of the notice, and before the call's start time, whichever comes first.** A notice outside business hours is acted on by 09:00 the next business day, or before the start if that's sooner. The agent reschedules in Cal.com during the call (`BOOKING_RESCHEDULED`; E21 confirms the new time): "Hi, this is [first name] from Techeo on a recorded line. I'm sorry: Blake can't keep your call on {day} at {time}. I have {slot} or {slot}. Which is better?"
3. **Unreached.** The agent leaves a voicemail, then cancels the booking as host with the reason "moved by us." `06` sends E39 with the rebooking link.
4. **Limit.** We move any one prospect's call at most once. If a second move would be needed, Blake calls personally in the next non-protected block to rebook. More than two calls moved by us in any two weeks goes on Friday's review as a capacity signal: a Techeo commitment that can't fit is a sign the gate needs clearing (`techeo.guardrails` #protected).
5. **A readout moves.** If only the call moves, the PDF still goes by day 7, and the 7-business-day promise is kept. If the report itself will be late, the founder sends E40 as soon as that's known, and by business day 5 at the latest (in place of E13), with a new readout date, aiming for no more than 3 business days after day 7. The PDF goes the day it's finished, before the call. The credit window runs from the actual readout (`credit_expires_on` = readout + 30), so the buyer loses no credit time. There is no discount (`03` #price: the credit is the only concession); a slip of more than 5 business days on our side is open question 19. A slip caused by missing access doesn't count, because the clock hasn't started.
6. **Founder no-show.** Blake hasn't called within 5 minutes of a booked start, whether the founder notices or the prospect calls the line. The receptionist apologizes, offers the next two slots, and escalates N3. Blake sends E39's no-show variant, personally, the same business day. A no-show counts as the one move allowed.
7. **Logging.** Each moved call gets the tag `moved-by-us` and a comment with a cause class only: weather, coverage, illness, no-show, or other, never a Homets detail. The month's moved calls and founder no-shows are listed in the mystery-shop task beside the scores, and `09` reports the count with S2, because a moved call is part of the Booking Engine a prospect experiences.

**Done when** a staged "move {date}" on a test booking produces a rescheduled booking or E39 within the hour, the tag and cause class, and a line in that month's shop task.

## Speed to lead: Techeo's own standard {#sla}

| Item | Standard |
|---|---|
| Business hours | 08:00–18:00 [TZ], Monday–Friday, excluding holidays |
| Holidays | New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving and the Friday after, and Christmas Day. A Saturday holiday is observed the Friday before; a Sunday holiday, the Monday after. Dates: Nov 26–27, 2026; Dec 25, 2026; Jan 1, May 31, Jul 5, Sep 6, Nov 25–26, Dec 24, and Dec 31, 2027 (observed for Jan 1, 2028). `06`'s `server/sla.ts` reads this list. |
| Received in business hours | **First dial within 15 minutes of `received_at`**, even if that runs past 18:00 |
| Received outside business hours | First dial **by 10:00 the next business day** |
| Lead-local guard | Every outbound call to a lead, first callbacks and opening-day calls included, is placed on a business day, within the lead's state window from `10` #quiet-hours (`calling_rule_version`, first value `hours-2026-10-v1`), default 08:00–20:00; at most 3 attempts per request in any rolling 24 hours. The table's stricter windows are Texas (09:00–20:00), Rhode Island (09:00–18:00, weekdays), and Kentucky (10:00–20:00, only if counsel confirms); counsel verifies the table before launch. The default is stricter than the federal 8 a.m.–9 p.m. window for solicitation calls (47 CFR 64.1200(c)(1)). `06`'s `server/sla.ts` reads `state_code` against the table and stamps the version on the submission; a lead with no known state (an unknown ZIP, or a missed call from an area code `06` can't place) gets the default. If the guard blocks the 15-minute dial, the event is reported with the after-hours events. Its due time is the opening of the lead's window if that falls before 18:00 [TZ] the same day; otherwise it is due at 10:00 [TZ] the next business day, or at the window's opening if that is later. |
| Cadence | Attempt 1 by the due time, with a voicemail, and E35 within 2 minutes of the vendor's event if it fails; attempt 2 two hours later, or the next business morning; attempt 3 the next business day before 12:00 lead-local. Then send E31 and mark the lead `unreachable`. A reservation instead stays in `waiting for opening` with the tag `unreached`; the closed `unreachable` status applies to it only after its 30-day active window following an opening (F2 step 4). |
| Public promise | `03`'s [SLA line]: version A until the 15-minute standard is earned, then version B |

**Eligible events.** These count toward the SLA:

- `reserved`, `needs_conversation`, `qualified`, and `checkout_unavailable`
- teardowns, both accepted and under review
- `state_mismatch`
- missed, abandoned, and voicemail calls to [TECHEO_PHONE] (`#unanswered`), and phone intakes that owe a callback (F8)
- in v2, market checks and partner referrals

Submissions with `bot_check = missing` count, and so do `spam_suspect` submissions until the receptionist confirms them as spam. **Excluded:** hard declines, calculator emails, synthetic runs, quarantined submissions, confirmed spam, repeats within 10 minutes, phone intakes answered live (F8), outbound targets (F9), and monitoring calls.

**Measurement.**

- **Clock start:** `app.submissions.received_at`.
- **Clock stop:** the first outbound dial to `phone_e164` in the vendor's call log, written to `app.lead_touches` (`source = receptionist_log`), or a dial the founder logs.
- **What doesn't stop the clock:** a ClickUp status change or an email.
- **A miss:** any eligible event with no dial by its due time.

**Weekly report.** It covers Monday–Sunday; `09` builds it. Each report is generated at 06:00 [TZ] the following Monday, emailed to the founder and the enforcer, and read at that Friday's `techeo.metrics` review. It shows:

- business-hours compliance, which is the publish metric
- after-hours compliance
- public-promise compliance, which must be 100%
- median minutes to first dial
- the week's event count
- every miss, with its cause
- any request dialed more than 3 times in 24 hours, or outside its state window
- the live-answer rate and the answered rate (`#unanswered`)

**Seeds.** WAITLIST volume is too low to prove anything on its own. So a trusted non-vendor (the enforcer, or a peer) submits real forms, called seeds, from real phones they answer.

- Seeds fill each week to a minimum: 5 business-hours events while earning version B, and 3 while B is live.
- Seeds never book time with Blake.
- They count toward compliance, but they are tagged `seed` and excluded from every funnel metric (`01` O1–O13).
- **How a seed is tagged without the vendor knowing.** Before submitting, the enforcer registers each seed's email and phone in `app.seed_identities` (founder and enforcer access only). `ingest_submission` matches them and adds `seed` to `app.submissions.flags`, where `09`'s export reads it. The flag never appears in the receptionist card or the ClickUp task name.
- A seed reservation is canceled silently (no E32) once its callback is logged. A seed teardown is removed from F5's queue once its confirmation call is logged.

**Publishing the 15-minute figure (D11).**

- **Earned** after four consecutive weeks. Each week needs at least 5 business-hours events and at least 95% compliance, and the four weeks need at least 20 events in total. A week below the minimum breaks the streak.
- **First window:** Jan 4–31, 2027. If it passes, `SLA_VERSION = 'B'` ships with the Feb 1 flip (`01` O10). Week 4's business-hours events close Fri Jan 29 (the last dial is due by 18:15 [TZ]); weekend events are after-hours and don't change the business-hours figure. So a business-hours run of week 4's report goes out at 06:00 [TZ] on Sat Jan 30. The founder reads it that weekend and merges `SLA_VERSION = 'B'` before the flip only if it shows the fourth passing week.
- **Revert.** Any live week below 95%, or with fewer than 3 events, reverts the site to version A by 18:00 [TZ] on the Tuesday after its report. The streak then restarts.

**The founder's calendar.**

- **Bookable hours.** Only `06` #scheduling's "Techeo calls" schedule: Monday 13:00–16:30; Tuesday–Thursday 10:30–12:00 and 13:00–16:30; Friday 10:30–12:00. No slot before 10:00, none on Monday morning, none on Friday afternoon.
- **Other blocks.** The weekly CSM 1:1 is blocked by a recurring busy event and by the Homets free/busy feed. Heat waves, hard freezes, and holiday coverage gaps become date overrides; the founder emails the vendor "no bookings {date}." Calls already booked that day follow F11.
- **Call types.** Discovery is closed in WAITLIST, capped at 2 a day and 4 a week (5 a week in March and April; open question 5), and bookable at most 21 days out (35 for `discovery-queue`). Kickoffs and readouts use the same schedule.
- **Receptionist bookings.** The receptionist never books outside an offered slot. If `06` flags a booking inside a protected block, the receptionist moves it within 1 business day, with an apology call (F11).
- **Nothing interrupts a protected block,** including escalations.

**After hours and holidays.** The vendor answers live at every hour, takes messages and reservations, and in OPEN books discovery into offered slots. Outbound callbacks happen only during business hours, except a 15-minute dial that runs past 18:00.

**Dialing rules.** A live agent dials every callback by hand, to the number the lead gave for that request, within the lead's state window and at most 3 times per request in any rolling 24 hours (the lead-local guard). Every callback shows [TECHEO_PHONE] as caller ID (must-have 9). In v1 there is no autodialer, no prerecorded or artificial voice, and no texting. A request to stop calling is honored on the spot and sets `do not contact`. `10` confirms the TCPA and state telemarketing position. The FCC's consent rules changed in 2024–2025 and parts were litigated, so verify what is current before launch.

**Done when:**

- `06`'s tests produce these due times, with an Eastern [TZ] and the lead in the same zone unless stated:
  - A lead at 10:00 on a business day → 10:15 the same day.
  - A lead at 17:55 → 18:10 the same day.
  - A lead on a Saturday, at any hour → 10:00 Monday.
  - A lead at 18:30 on Wed Nov 25, 2026, the day before Thanksgiving → 10:00 Mon Nov 30 (Thanksgiving and the Friday after are holidays).
  - A Pacific lead at 08:30 ET (05:30 PT) → 11:00 ET the same day (08:00 PT).
  - Under a Pacific [TZ], an Eastern lead at 17:50 PT (20:50 ET) → 10:00 PT the next business day.
  - A Texas lead in the Central zone at 09:05 ET (08:05 CT) → 10:00 ET the same day (09:00 CT, when Texas's window opens), stamped `hours-2026-10-v1`.
- The weekly report has run unattended for two weeks before Nov 20, 2026.

## The virtual receptionist {#receptionist}

### Vendor requirements

**Must have**, each confirmed in writing:

1. **Live people at every hour.** 95% of calls answered within 20 seconds. No AI-first or bot plan: D14's reasoning applies to the phone.
2. **Callbacks.** Outbound callbacks triggered by `06`'s email: the first dial within 10 minutes during business hours, with every attempt logged.
3. **Booking.** Bookings made in Cal.com's public pages, with the time read back in the caller's time zone.
4. **Call logs.** One log per call: timestamp, direction, number, agent, duration, disposition, and notes. A per-call event within 5 minutes, by webhook, Zapier, or structured email. A daily export.
5. **Recording.** A recording disclosure in the agent's first turn, before any substantive exchange. Written consent from the agents to recording and to Techeo's QA review.
6. **Ownership (D4).** The account is in Techeo LLC's name and paid by Techeo's card. [TECHEO_PHONE] is owned by Techeo and portable or forwarded.
7. **Scripts.** Separate OPEN and WAITLIST scripts, switched within 1 hour of an email from the founder or the enforcer.
8. **Terms.** Month-to-month. Spam calls not billed. Caller data kept confidential and never resold, with a stated retention period.
9. **Caller ID.** Outbound callbacks display [TECHEO_PHONE] as caller ID (47 CFR 64.1601(e); `10` #tcpa-analysis item 5).
10. **Unanswered calls and outages.** An overflow queue at a backup site or team; a voicemail box the vendor owns; every missed, abandoned, and voicemail call sent as a per-call event; notice to the founder and the enforcer within 15 minutes of any outage; and monitoring calls from Techeo's test line recognized and not billed (`#unanswered`).

**Nice to have:** Spanish-speaking agents; per-call billing; a Cal.com or Zapier integration.

**Cost (estimate).** This comes from September 2026 public prices in third-party summaries; verify with each vendor.

- **Human-first plans** run about $300/month for 30 calls, up to about $2,100 for 300 ($7–$10 a call).
- **Per-minute plans** run about $250 for 50 minutes, up to about $720 for 200.
- **Our volume**, assumed: 20–60 inbound calls, 10–40 callbacks (card V's missed-call callbacks included), and 15–20 seed and mystery calls a month. Monitoring calls are unbilled under must-have 10.

At that volume, 45–120 billable calls a month at $7–$10 each, expect **$315–$1,200/month** (estimate; verify with vendors) from about Nov 2, 2026 (`11` reconciles). Per-minute plans cost more: 45 calls at about 3 minutes each is 135 minutes, past a 100-minute tier, which on the plans above means the 200-minute tier at about $720. The low end holds only if volume stays near 45 calls; January's seeds (5 a week, plus the monthly shop) and callbacks that take three attempts push toward the high end.

**Setup timeline:**

- Contract signed by Thu Oct 15 (`11` R2).
- `script-1.0` loaded and service live Mon Nov 2 (`11` R4), with the exclusion ZIP list (F8), caller ID confirmed as [TECHEO_PHONE] (`10` #launch-gate), and the first monitoring call green (`#unanswered`).
- Six or more test calls Nov 2–13.
- Pre-launch mystery shop Nov 10–16, scoring 86 or higher.

### Script: inbound

The agent's screen shows the current state: OPEN, WAITLIST·season with {next opening}, or WAITLIST·capacity with {capacity date}.

1. **Greeting, verbatim:** "Thanks for calling Techeo. Calls are recorded for quality. This is [first name]. How can I help?" (`10` #recording).
2. **Route.** If the caller's purpose is unclear, ask "Are you calling about your own company?"
   - A shop owner or manager → 3.
   - An existing client → 8.
   - A referrer → 9.
   - A seller, a job seeker, or Homets business → 10.
   - Press, podcast, or event → 11.
   - A homeowner → 12.
   - Spam → end the call and log it.
3. **Intake, in this order:**
   - Name, company, and role: "Are you the owner, a co-owner, the general manager, the office manager, or something else?"
   - Best number (read it back).
   - Email (spell it back).
   - "What ZIP code is your shop in?" If it's on the exclusion ZIP list (F8) → 7a.
   - "HVAC, plumbing, or both? Mostly homes or mostly commercial?" Commercial → 7b.
   - "What do you run your jobs on?" Anything but ServiceTitan → 7c.
   - "Roughly what's your annual revenue: under 1.5 million, 1.5 to 5, 5 to 10, 10 to 15, or over 15?" These are `#form-audit` row 8's bands, so F8 keys the answer as given. Under 1.5 million → 7d.
   - "Paying for leads now: Local Services Ads, Google Ads, Angi, Thumbtack, Yelp?"
   - "About how many trucks?"
   - "What would you most like fixed?" Only a website, logo, or social media → 7e.
   - "How did you hear about us?"
4. **OPEN: book the call.**
   - Offer times: "Blake does these calls personally: 30 minutes, by phone, and Blake calls you. I have {slot} or {slot}. Which is better?" Book only what the calendar shows.
   - Before booking, read `10`'s `phone-book-v1` and note the answer. Key the booking through F8.
   - Read it back: "That's {weekday}, {date} at {time} {Techeo time zone}, {time} your time. Blake will call {phone}. The confirmation goes to {email}. Anything Blake should know first?"
   - If they want to buy now: "You book the audit at techeo.com/audit: a few questions, then secure checkout. I can't take payment by phone."
5. **WAITLIST: offer a reservation.**
   - Season: "New audits start {next opening}. We run an HVAC company too, and this is its busy season."
   - Capacity: "Every audit slot is full; the next opens {capacity date}." Never say why.
   - Then: "I can reserve your place in line now: no payment, no obligation. On {date} we call reservations in the order they came in, within two business days, to book 30 minutes with Blake. Would you like one?"
   - If yes: read `10`'s `phone-reserve-v1`. On a yes, key the reservation through F8, then offer to queue a free teardown.
6. **Close:** "Thanks for calling Techeo."
7. **Not a fit.** Close warmly. For 7a, never book or queue anything.
   - **7a, exclusion zone:** "I'm sorry, we can't work with shops in that area. Techeo's owner also owns Homets Air and Heat, and we take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets. That rule has no exceptions." The wording follows `10` #affiliation: radius-only by default. Only when `03` open question 8 selects the variant (required if the radius doesn't cover Homets' whole market), the sentence reads "…within [EXCLUSION_RADIUS_MILES] miles of Homets or anywhere in its [HOMETS_METRO] market," and the script changes the day that deploy ships the variant to the footer, `03`, `llms.txt`, and E25.
   - **7b, commercial:** "Our work is built for homeowner calls, so we'd be the wrong fit for mostly commercial work. I'll let Blake know you called."
   - **7c, not on ServiceTitan:** "In our first year we only work with shops on ServiceTitan. I can add you to the list we'll contact if that changes. A free phone teardown doesn't need ServiceTitan, if you'd like one."
   - **7d, under $1.5M:** "The audit may not be worth $1,500 to you yet. A free phone teardown is a better start. Shall I set one up?"
   - **7e, website, logo, or social only:** "That's not work we do. I can ask Blake to email you a name or two of people we'd trust, at no fee."
   - **Over $15M, 1–2 or 26+ trucks, no paid leads, or someone else signs:** book or reserve anyway, and add a note for Blake.
8. **Existing client:** "Is anything urgent: money being spent that shouldn't be, or calls or leads not reaching you?"
   - Urgent → U1: "Blake will call by {next non-protected time}. You own every account, so you can pause any campaign yourself right now."
   - Otherwise, take a message; Blake calls back by the end of the next business day.
9. **Referrer.** Take their name, company, role, phone, and email; the shop's name; and whether the shop's owner asked for a teardown. Say: "Blake will call you by the end of the next business day. The fastest route for the owner is techeo.com/teardown." Never contact the shop.
10. **Seller, job seeker, or Homets business.**
    - **Seller:** "Blake doesn't take sales calls by phone. I'll note your details, and if it's a fit, Blake will reach out." No callback promised.
    - **Job seeker:** "Techeo isn't hiring right now." Take no details.
    - **Homets staff, vendors, or billing:** "This line is for Techeo only. Please use Homets' own number." Take no message (`techeo.guardrails` #coi item 6).
11. **Press, podcast, or event.** Take the name, outlet, topic, deadline, and contact details. "Blake will get back to you by the end of the next business day, sooner if your deadline needs it." No comment.
12. **Homeowner.**
    - For gas, a carbon monoxide alarm, smoke, sparking, or water near electrics, say first: "Please leave the house now and call 911 or your gas company from outside."
    - Then: "Techeo is a marketing company for contractors. We don't do repairs, so we can't send anyone. Please call a licensed contractor near you." Never recommend anyone.
    - **Only if the caller names Homets Air and Heat, or says they're a Homets customer:** "You've reached Techeo, a separate company. Homets' number is {Homets' main number, from the card}." Otherwise, never mention Homets (`01` #audiences). The founder enters that number at setup; it never appears on techeo.com.

**Knowledge card.** These are the only allowed answers:

- **Prices:** the published prices only.
- **Who owns Techeo:** the footer disclosure, word for word.
- **"Is my market open?"** → "Blake checks markets personally; nobody on this line can see that list."
- **"How fast do you call back?"** → [SLA line].
- **"Do you record?"** → "This call is recorded for quality. The free teardown uses notes, not recordings, by default."
- **"Can I email Blake?"** → "I'll take a message and Blake will reply." There's no public address in v1 (`02` open question 2).
- **"Blake didn't call me."** → "I'm sorry. I'll make sure Blake knows right now. I have {slot} or {slot}. Which is better?" Then N3 (F11).

### Script: callbacks

**Opener**, naming the request (`playbook.web` #opener), with the recording notice in the first sentence: "Hi, this is [first name] from Techeo on a recorded line, calling about the {reservation / Engine Audit / free phone teardown} you just requested on techeo.com. Is this {first name}?" Then: "Have you got two minutes?"

**Voicemail:** "Hi {first name}, this is [first name] from Techeo, returning your request from techeo.com. I'll try you again {this afternoon / tomorrow morning}, or call us at [TECHEO_PHONE]."

| Card | Covers |
|---|---|
| R · reservation | Confirm company, ZIP, trade, and CRM; state the contact date; offer a teardown |
| P · paid | "I'm confirming Blake has your Engine Audit order. Did the access-list email arrive?" Book the kickoff. For ACH: "Bank transfers take about four business days; you can start on the access list now." |
| Q · qualified, unpaid | "Did checkout go all right? If something got in the way, I'll pass it to Blake." |
| C · needs a conversation | "In a few cases Blake talks with you before anyone pays. I can book 30 minutes now." |
| T · teardown | Number to test, state, answering hours, web form, owner or manager; F5's timing; "We don't tell you when, and we don't record by default." |
| M · market check (v2) | Verify the business. "Blake checks markets personally and will call you by {date}." |
| V · missed call | "Hi, this is [first name] from Techeo on a recorded line. We missed a call from this number at {time} {today / yesterday}, and I'm sorry we didn't pick up. How can I help?" Then the inbound script from step 2 (`#unanswered`) |

**The receptionist never:**

- promises a result, rate, revenue, or unpublished timeline;
- uses a D8 word;
- says whether a market is open, or whether any company is a client;
- quotes an unpublished price, a discount, or design-partner pricing;
- takes payment details;
- books outside offered slots, transfers a call to Blake, or gives out a personal number;
- discusses Homets' business, data, staff, or customers;
- says "closed," or explains why capacity is full;
- gives legal views on recording;
- blames a caller's staff.

### Escalation

| Code | Situation | Channel | Founder responds |
|---|---|---|---|
| U1 | A client's money is being spent wrongly, or their calls or leads aren't arriving | Text to the founder's Techeo mobile, plus email | Within 60 min of the next non-protected business hour |
| U2 | A caller reports a site fault (form, checkout, wrong date) | Text + email | Same as U1 |
| U3 | A legal threat, a conduct complaint, or a privacy or deletion request | Urgent email | 1 business day; privacy requests follow `10` |
| U4 | Press with a deadline under 48 hours | Text + email | Same business day where possible |
| N1 · N2 | A prospect insists on Blake · a referrer, organizer, or press with no deadline | Message | Next business day · end of next business day |
| N3 | A booked caller says Blake didn't call (F11) | Text + email | In the next non-protected block, after the receptionist has offered two slots |
| O | An outage: monitoring calls failing, or the vendor's own notice (`#unanswered`) | The vendor's notice to the founder and the enforcer within 15 minutes; the monitoring alert | The outage runbook: 30 minutes in business hours |
| D | Sellers, job seekers, homeowner and spam counts | Weekly digest | — |

- **Texts** go only to the founder's own phone.
- **Protected blocks:** no escalation interrupts one.
- **Script changes:** the script is versioned from `script-1.0`. The vendor confirms each change within 1 business day, and the change is logged in ClickUp.

### When the phone isn't answered {#unanswered}

Must-have 1 covers 95% of calls in 20 seconds. This covers the rest, because a prospect testing us is as likely to land in the other 5% as anywhere (`01` R2; D11).

**Routing.**

| Seconds without an answer | Where the call goes |
|---|---|
| 0–30 | The vendor's primary queue |
| 30 | The vendor's backup queue: a second site or team, confirmed in writing (must-have 10) |
| 60 | Voicemail |

**The founder's phone is never in the ring path.** A phone system can't see protected blocks, and the script never transfers a call to Blake. The founder's Techeo mobile is only an outage option, below.

**Voicemail.** The vendor owns the mailbox. Greeting, verbatim: "This is Techeo, and this call is recorded. Every line is busy, so please leave your name, your company, and the best number to reach you. [SLA line, short] If you smell gas or a carbon monoxide alarm is going off, hang up and call 911 or your gas company from outside." Each message arrives as a per-call event with the disposition `voicemail`, and its transcript or audio link goes to the intake address (must-have 4). Recordings stay in the vendor's portal (`10` #recording).

**Missed calls become callbacks.** Every inbound call with caller ID that no agent answered becomes an SLA-eligible event: a voicemail, an abandon (the caller hung up before an agent answered), or an overflow that failed. `06`'s call-event path creates it as a `phone_missed` event, with the call's start as `received_at`. It sends card V to the receptionist and creates a ClickUp task in `new`, or a comment on the caller's task when the number matches a lead.

- **Skipped:** numbers on `app.suppression` or `do not contact`, the monitoring line, withheld caller ID, known spam, abandons within 5 seconds of the first ring (logged, not called), and callers who reached an agent on a later call before the due time (that call closes the event).
- **Cadence.** An abandon gets one attempt, with a voicemail if unanswered, and no E35, since there's no email address. A voicemail that names a request gets the matching card and the full cadence.
- **The guard** takes the state and time zone from the number's area code when no lead record exists (a new `data/` table, `06`).

**The weekly live-answer rate** is calls answered by an agent within 20 seconds, divided by all inbound calls, excluding spam, the monitoring line, and abandons within 5 seconds of the first ring. Every other abandon, failed overflow, and voicemail counts as unanswered. The report shows it beside the answered rate (answered by a person at any wait), both from the vendor's daily export. In a week below 95%, the founder sends the vendor the week's unanswered calls and gets a written cause within 2 business days.

**Monitoring the line.** A scheduled call proves the forward from [TECHEO_PHONE] still reaches a person.

- `techeo-ops` calls [TECHEO_PHONE] from a dedicated monitoring number (a programmable-voice number in Techeo LLC's name, never the teardown test line) at 07:50 [TZ] every business day and 09:50 [TZ] on weekends and holidays.
- The agent recognizes the caller ID, gives the greeting, and ends the call. The test passes when the call is answered within 30 seconds and the vendor's event for it arrives within 5 minutes. The job then pings Healthchecks.io (`06` #monitoring); a failure or a missing ping alerts the founder and the enforcer.
- The vendor doesn't bill monitoring calls (must-have 10). If it must, the call runs once each business day only. `11` budgets the number.

**Vendor outage runbook,** printed with `06`'s flip runbook.

1. **Triggers:** two failed monitoring calls in a row; the vendor reports an outage; or a seed, a mystery shop, or a caller reports ringing with no answer.
2. **Within 30 minutes in business hours, or 60 outside them,** the founder repoints [TECHEO_PHONE]'s forwarding at the number's host (Techeo-owned; must-have 6) to the host's own voicemail (verify the host offers one). If the founder is in a protected block or doesn't answer within 15 minutes, the enforcer does it. Callers hear: "This is Techeo, and this call is recorded. Our answering service is down right now. Please leave your name, your company, and your number, and we'll call you back as soon as it's fixed, today if we can. If you smell gas, hang up and call 911 or your gas company from outside." Messages go to `team@techeo.com`.
3. **Recovery.** When the vendor is back, the founder or the enforcer points the forward back and sends the vendor the message list. The vendor calls each caller back on card V, with the clock running from each call's start. If the outage lasts past 2 business hours, the founder may return calls personally, outside protected blocks. The founder's Techeo mobile may take the forward instead of the host's voicemail only outside protected blocks, and only by the founder's choice.
4. **Afterward.** The vendor sends a written incident report within 2 business days. Misses during the outage count in the SLA report, with the outage named as their cause, and version B's revert rule applies as usual. Two outages over 30 minutes within 90 days trigger the replacement row in `#mystery-shop`.

**Done when:** the monitoring call runs green daily from Nov 2, 2026; a timed drill before Nov 20, run by the enforcer from the printed runbook, repoints [TECHEO_PHONE] to the host's voicemail and back in under 30 minutes; and a test abandon produces a card V inside the SLA.

## Email {#emails}

### Sending rules

**Senders.** Automated email goes through Resend as `Techeo <team@notify.techeo.com>`, with Reply-To set to `team@techeo.com` (`06`). Founder email is sent by hand from `blake@techeo.com` in Workspace, using these templates (open question 14). **Before every founder send,** the founder checks the lead's task: no founder email goes to a task in `do not contact`, and no C email goes to a task tagged `email-opt-out`, which `06` adds whenever an opt-out is recorded.

**Commercial (C) email** carries `10`'s CAN-SPAM elements:

- Techeo LLC and [TECHEO_POSTAL_ADDRESS]
- a reason line
- a working opt-out
- `List-Unsubscribe` and `List-Unsubscribe-Post` headers on Resend-sent email. Workspace can't add them, so hand-sent, one-to-one founder C email relies on the footer's reply-"stop" opt-out and the pre-send check, subject to `10`'s sign-off.

Draft footer: "Techeo LLC · [TECHEO_POSTAL_ADDRESS] · You're getting this because you {reason}. To stop email from us, reply "stop" or use {unsubscribe_link}."

**Service (S) email** carries the same footer unless `10` drops it.

**Opt-outs.** Honored within 1 business day (CAN-SPAM allows 10; `10` confirms). An opt-out stops all C email; S email about a purchase in progress continues.

**Style.**

- Subjects say literally what the email is: no emojis and no fake "Re:".
- Plain text plus minimal HTML.
- No tracking pixels.
- `{contact_due_date}` is the end of the second business day, counting the opening day as the first, written in words: Tuesday, February 2, 2027; for a capacity opening, the first business day after `CAPACITY_DATE`. **Sep 7, 2027 exception** (F2): the site flips with v2 at 13:00 (`11` #v2), E04 and the calls start at 15:30 once the OPEN checks pass, or Wed Sep 8 at 08:00, and every reservation is contacted by the end of Thu Sep 9, so `{contact_due_date}` reads "Thursday, September 9, 2027."

### Replies to `team@techeo.com` {#replies}

Every automated email invites a reply: "cancel," "stop," a correction, E25's address, E27's needs, E28's go-live date. The site has no sales inbox by design, but these replies work as one, so they get an owner and a clock.

- **Setup.** `team@techeo.com` is a Google Groups collaborative inbox (verify on the Workspace plan), whose members are the founder and the vendor's intake address (`06` #notifications; `11` #qa 6.6). Each thread can be assigned and marked resolved.
- **Owner:** the founder, who clears the inbox once each business day in a non-protected block. **First pass:** the vendor's intake team, which works every hour and handles "cancel" and "stop" on its own, so neither ever waits for the founder. **When the founder is away more than 1 business day,** the vendor acknowledges everything else with "Thanks. Blake will reply by {date}." No one else is added to the group: prospects' replies stay with the founder and the vendor.
- **Response time:** "stop" and "cancel" are honored within 1 business day (`10` #can-spam item 4). Everything else is answered or acted on within 1 business day, except E25's check, E27's names, and E28's date, which take up to 2.

| Reply | Action | Who |
|---|---|---|
| "Cancel" (E01–E04, E36) | Staff page `cancel`: reservation `canceled`, E32, and the task to `closed lost` with the tag `canceled` | Vendor or founder |
| "Stop," "unsubscribe," or "remove me" | Staff page `stop`: `app.suppression` (`opt_out`) and the tag `email-opt-out` — never Resend's suppression list, which would also block service email (`06` #optout). "Stop calling" as well sets `do not contact` | Vendor or founder |
| A corrected name, phone, or email spelling | Staff page `correct`: the lead updated, with a task comment | Vendor or founder |
| A corrected ZIP, trade, or CRM | The founder updates the lead and re-runs the zone and market checks, because the outcome can change; a changed outcome follows `#qualification` | Founder |
| E25: an address | The founder checks the ZIP by hand. If the right ZIP is outside the zone, the founder corrects it and replies with the link to submit again; otherwise, one sentence: "We've checked, and your shop is inside the zone." Nothing more about Homets' area | Founder |
| E27: what they need | One or two names from open question 12's list, or "We don't know anyone we'd trust with that yet." | Founder |
| E28: a go-live date | The task's due date becomes the go-live date plus 90 days; the tag `st-list` stays; the founder writes then | Founder |
| "Call me," or a question | A callback within 1 business day, inside the state window; answers only from the knowledge card | Vendor |
| A privacy, deletion, or legal message | U3; privacy requests follow `10` | Founder |
| An out-of-office, bounce, or auto-reply | Resolved with no action. A hard bounce adds a task comment, and the next call asks for a working address | Vendor |
| Anything else | A task in the "Messages" list for the founder | Vendor |

**What the vendor may do with replies:** read them; run `cancel`, `stop`, and spelling-only `correct`; send one fixed acknowledgment ("Thanks, that's done." or "Thanks. Blake will reply by {date}."); and assign the rest to the founder. The vendor never replies with anything else, forwards a reply outside the group, discusses a market or any unpublished price, or changes a ZIP, trade, or CRM.

**Weekly check.** At the Friday review, the founder confirms that no thread has sat unresolved for more than 1 business day, and logs any that did.

**Done when** a seeded "cancel" and a seeded "stop" are each processed by the vendor alone within 1 business day, with the rows and tags above.

### Templates

**E01 · Reservation confirmation** · S · T0 + ≤5 min
Subject: `Your Engine Audit slot is reserved for {next opening}`
> Hi {first_name},
>
> You're in line for an Engine Audit when new audits open on {next opening}. You haven't paid anything, and you don't owe anything.
>
> 1. **Soon:** a call from [TECHEO_PHONE] to confirm your details. [SLA line, short]
> 2. **{next opening}:** we call reservations in the order they arrived, within two business days, to book 30 minutes with Blake. Expect our call by {contact_due_date}.
> 3. **If it fits:** you pay at techeo.com/audit, and your 7 business days start when access is granted.
>
> A reservation holds your place in line, not your market. Only a signed agreement grants a market. If another {trade} shop in your market signs first, Blake will tell you before {next opening}.
>
> You told us: {company}, ZIP {zip}, {trade_label}, {crm_label}. If anything's wrong, reply. To cancel, reply "cancel." While you wait, a free phone teardown shows part of what the audit finds: https://techeo.com/teardown
>
> Techeo · [TECHEO_PHONE]

**Variants.** *Capacity:* "…the next Engine Audit slot, which opens on {capacity date}." *Duplicate:* adds "You already reserved on {original_date}, and you keep that place." *Phone reservation* (F8; `10` #tcpa-analysis item 3): step 1, since the details were confirmed on the call, becomes "**One tap, please.** You reserved by phone. So we can call you when audits open, open this page and press "Yes, call me when audits open": {confirm_link}. The button records your OK; opening the link doesn't. If you skip it, we may email you at the opening instead of calling." The page records `phone-reserve-confirm-v1` (`06`).

**E04 · We're open** · S · opening day, 08:00 (Sep 7, 2027: 15:30 once the OPEN checks pass, or Wed Sep 8 at 08:00), to F2's call list, only after the site is confirmed OPEN (F2 step 2)
Subject: `Engine Audits are open. We're calling reservations now.`
> Hi {first_name}, new Engine Audits are now open. We're calling reservations in the order they arrived, and you'll hear from [TECHEO_PHONE] by {contact_due_date} to book 30 minutes with Blake. Nothing to do before then. If you've changed your mind, reply "cancel." — Techeo

**Email-only variant** (F2 step 1's flagged phone reservations) · Subject: `Engine Audits are open. Your place in line is ready.`
> Hi {first_name}, new Engine Audits are now open, and your reservation from {reserved_date} holds your place in line. Reply with two or three times that suit you for 30 minutes with Blake, or call [TECHEO_PHONE], and we'll book it. If you'd rather go straight to the audit, techeo.com/audit takes about three minutes. If you've changed your mind, reply "cancel." — Techeo

**E07 · Access list (post-purchase)** · S · payment + ≤5 min
Subject: `Your Engine Audit: the access we need, and what happens next`
> Hi {first_name},
>
> Thank you. Your Engine Audit is booked, and Stripe sends your receipt separately. {ach_line}
>
> 1. **Pick a kickoff time** (20 minutes, optional but useful): {kickoff_link}
> 2. **Grant the access below.** Plan on about an hour with whoever manages your accounts. Reply as items are done.
> 3. **The clock:** your 7 business days start the business day after the last item arrives{ach_clause}. If something's missing, we tell you the same day we notice.
>
> {The seven items from `techeo.audit`'s Week 3 access-request email. Until it exists: `03` #faq-audit-access's list, adding {audit_access_email}. Item 5 reads: "Call recordings from the last 30 days, if you'd like to send them. You've already told us we may test your line."}
>
> The audit only reads; it changes nothing in your accounts. Your access is used for your audit only, never for Homets. *(Both sentences wait on `03` open question 3.)*
>
> Questions: [TECHEO_PHONE]. — Techeo

`{ach_line}`: "You paid by bank transfer (ACH), which takes about four business days to clear. You can grant access now; work starts once it clears." `{ach_clause}`: " and your payment has cleared."

**E14 · Readout + 1 day** · C · founder
Subject: `Your Engine Audit: the three priorities`
> Hi {first_name}, thanks for yesterday. The report and recording are yours, with or without us: {report_link} · {recording_link} (the links expire {expiry_date}). Your three priorities, in order: 1. {p1} 2. {p2} 3. {p3}. If you want us to do it, it's the {rung}, {price_line}, and your $1,500 comes off the first month if you sign by {credit_expires_on}. If you'd rather do it yourselves, the report says where to start, and I'll answer questions either way. — Blake

**Variant for a score of 86 or more, or a small gap:** "Your report says you don't need us, and I meant it. One favor: if you know an owner whose phone isn't in this shape, tell them about us." E15 and E16 are not sent after this variant.

**E15 · Readout + 7 days** · C · founder
Subject: `One week since your readout`
> Hi {first_name}, a week on. Have you looked at priority 1, {p1_short}? If you've started on it yourselves, I'd like to hear what you found. If you'd like to talk about us doing it, I have {slot_a} or {slot_b}. Your credit runs to {credit_expires_on}. — Blake

**E16 · Readout + 25 days** · C · founder
Subject: `Your $1,500 audit credit ends {credit_expires_on}`
> Hi {first_name}, a plain reminder: your $1,500 comes off the first month of any retainer signed by {credit_expires_on}, five days from now. After that the credit ends; the report and recording stay yours. If you're deciding, I'll go through the agreement with you before you sign anything. If you've decided not to go ahead, a one-line reply is welcome, and nothing follows this email. — Blake

E15 and E16 are skipped once the prospect signs, opts out, or says no.

**E17 · Teardown confirmation** · S · T0 + ≤5 min
Subject: `Your free phone teardown: what happens next`
> Hi {first_name}, we've got your request for a free phone teardown of {company}.
>
> 1. **Soon:** a call from [TECHEO_PHONE] to confirm the number we'll test ({phone_to_call}), your state, and your hours. [SLA line, short]
> 2. **Within 10 business days of that call:** three calls to your office as a homeowner, at different hours, plus one web form if you have one. We won't say when. *(WAITLIST: "From {next opening}, in the order requests arrived; we'll tell you roughly which week.")*
> 3. **Within 3 business days of the last call:** a 15–20 minute walkthrough and the scored sheet.
>
> By default we take notes, not recordings, and they say "the person who answered," never a name. No sales sequence follows: the walkthrough ends with one question, and if the answer is no, that's the end of it. — Techeo

**Review variant** (a teardown under review: `market_hidden`, `market_review`, `zip_unknown`, or `zone_edge`). Steps 2 and 3 are dropped, and step 1 reads: "**Soon:** a call from [TECHEO_PHONE]. We'll call you first to check one thing, then tell you when the teardown calls will happen. [SLA line, short]" The rest is unchanged. It promises no test calls, because the check may end the request.

**E20 · Calculator result** · C · within 1 min
Subject: `Your numbers from the techeo.com calculator`
> You entered {calls} qualified calls a month, a {rate}% booking rate, and {avg} average revenue per booked job.
>
> {Below 70%: "{calls} × (70% − {rate}%) = {jobs} more booked jobs a month, rounded down. {jobs} × {avg} = {monthly_exact}: about {monthly_shown} a month, or {annual_shown} a year, rounded down." · Small result (`monthly_shown` = 0): "{calls} × (70% − {rate}%) = {jobs} more booked jobs a month, rounded down. {jobs} × {avg} = {monthly_exact}: less than $100 a month, or {about {annual_shown} / less than $1,000} a year." · At target: "You're at or above 70%, so the phone may not be where the money is." · Under one job: "The gap is less than one booked job a month."}
>
> 70% is the standing target we hold our own desk to at Homets Air and Heat. It's our target, not an industry average. This is arithmetic, not a diagnosis. It can't see missed calls, slow callbacks, or paid leads nobody touched. {OPEN: "The Engine Audit measures those: techeo.com/audit" · WAITLIST: "New audits open {next opening}; reserving is free at techeo.com/audit" · At target or under one job: "A free phone teardown checks the first two: techeo.com/teardown"}
>
> This is the only email we'll send about it. — Techeo

**E21 · Discovery confirmation** · S · on `BOOKING_CREATED`, and on `BOOKING_RESCHEDULED` with the new time (turn off Cal.com's own attendee email if the plan allows it; verify)
Subject: `Your call with Blake: {weekday}, {date} at {time} {tz_label}`
> Hi {first_name}, you're booked for 30 minutes with Blake [FOUNDER_SURNAME] on {weekday}, {date} at {time} {tz_label} ({local_time} your time). Blake will call {phone}. First, how Techeo and Homets Air and Heat are kept apart; then your numbers: calls a month, how many book, what you pay for leads. Rough answers are fine. To reschedule: {reschedule_link} or [TECHEO_PHONE]. — Techeo

**Kickoff variant:** subject `Your audit kickoff: {weekday}, {date} at {time}`; the body covers only the access list.

**E22 · Reminder** · S · 24 hours before, or 08:00 the same day if booked less than 24 hours ahead
Subject: `{Tomorrow / Today}: your call with Blake at {time} {tz_label}`
> Hi {first_name}, Blake will call {phone} {tomorrow / today} at {time} ({local_time} your time) for 30 minutes. If something's come up: {reschedule_link} or [TECHEO_PHONE]. — Techeo

**E23 · No-show** · S · 10 min after the start
The receptionist also calls within 2 hours, concern first (`sop.csm.no-show-recovery`). After two attempts with no rebooking, the task moves to `closed lost`.
Subject: `Sorry we missed you today`
> Hi {first_name}, Blake called at {time} and couldn't reach you. No problem; things come up in this trade. If you'd still like to talk, pick another time: {booking_link}, or call [TECHEO_PHONE]. We'll try you once more tomorrow morning, then leave it with you. — Techeo

**Other emails.** Each is signed "— Techeo" unless marked founder, which are signed "— Blake."

| Id · class · when | Subject | Body |
|---|---|---|
| E02 · S · capacity date moves | `The next audit opening has moved to {capacity date}` | "When you reserved, we said {old_date}. The next slot now opens on {capacity date}. You keep your place, and we'll call you by {contact_due_date}. If that doesn't work, reply "cancel." Sorry for the change." |
| E03 · S · 7 days before the opening | `Audits open {next opening}: we'll call you by {contact_due_date}` | "New Engine Audits open a week from today. You'll hear from [TECHEO_PHONE] by {contact_due_date}. If plans have changed, reply "cancel" and we'll give your place to the next shop." |
| E32 · S · reservation canceled | `Your audit reservation is canceled` | "Done. We won't call about it. If you want back in, techeo.com/audit takes two minutes." |
| E06 · S · `needs_conversation` | `About your Engine Audit request` | "From your answers, we'd rather talk before you pay, so no payment was taken. [SLA line] Nothing is wrong with your request; some answers just need a person to look at them." |
| E09 · S · ACH failed, within 1 hour | `Your bank payment for the Engine Audit didn't go through` | "Your bank reported that the $1,500 transfer didn't go through{: bank_reason}. Nothing else was charged, and work hasn't started. Pay by card at techeo.com/audit, or call [TECHEO_PHONE]. If we don't hear from you by {date_plus_5_business_days}, we'll close the order and remove any access you've given us." |
| E10 · C · checkout expired + 15 min, once | `Your Engine Audit checkout expired. Nothing was charged.` | "For your security, checkout links expire after an hour. If you still want the audit, techeo.com/audit takes about three minutes. If something got in the way, reply and tell us. This is the only email about it." |
| E11 · S · founder · business day 2 | `Engine Audit: {n} access items still to go` | "Still missing: {missing_items}. If everything lands today, your readout is due by {projected_delivery}. If one is hard to get, tell me which; there's usually a way around it." |
| E12 · S · access complete and payment cleared | `Your Engine Audit has started. Readout by {delivery_date}.` | "Your 7 business days run {day1_date} to {delivery_date}. We'll call your office and use your web form as a customer would, without saying when. Around {day5_date}, Blake will email readout times." · *Cleared variant (access incomplete):* "Your payment cleared. We're still waiting on {missing_items}." |
| E13 · S · founder · business day 5 | `Engine Audit readout: pick a time` | "Your report will be ready by {delivery_date}. I'd like 30 minutes to walk you through it, recorded so you can share it. Any of these? {slot_1} · {slot_2} · {slot_3} ([TZ]). The PDF arrives as the call starts." |
| E18 · S · WAITLIST teardown window opens | `Your phone teardown is starting` | "Over the next 10 business days we'll call {phone_to_call} three times as a homeowner{, and use your web form once}. We won't say when. If your number or hours changed, reply before {date}." |
| E19 · C · founder · teardown delivered | `Your phone teardown: {n} calls, scored` | "Here's your teardown: {walkthrough_link}, with each call's scored sheet (expires {expiry_date}). The short version: {one specific, factual observation}. It's yours, whatever you do next. One question: would it help to see the same test across all your lead sources, priced in your own numbers? If the answer is no, that's the end of it." |
| E24 · C · founder · after discovery | `Next step: your Engine Audit` | "As we discussed, the next step is the Engine Audit: $1,500, 7 business days, credited in full against a retainer signed within 30 days of your readout. Book it at techeo.com/audit.{ Cleared: "For the next 14 days, the form will take you straight through."} If you'd rather start with a free teardown, reply." |
| E31 · S · after the third attempt | `We tried to reach you about your {request_label}` | "We called {n} times and couldn't reach you, so we'll stop calling. {Reservation: "Your reservation stands; we'll call on {opening}." · Opening: "Book here: {discovery_link}; your reservation stays active until {date}." · Teardown: "We won't test until we've spoken."} Call [TECHEO_PHONE] any time." |
| E33 · S · market check (v2), T0 + ≤5 min | `Your market check: what happens next` | "We've got your market check for {trade_label} around {service_area}. Soon: a call from [TECHEO_PHONE] to confirm a few details about {company}. [SLA line, short] Then, within 2 business days, Blake calls you with the answer. We give it by phone, never by email or on screen, and nothing is held until an agreement is signed." |
| E34 · S · partner referral (v2), T0 + ≤5 min, to the partner only; nothing goes to the shop | `Your teardown referral for {shop_name}` | "Thanks for sending {shop_name} our way. We check a few things by hand first, and if anything's unclear, we'll call you from [TECHEO_PHONE]. Then we call {shop_name}'s published number three times as a homeowner{, and use their web form once}{WAITLIST: , starting {next opening}}. If our queue is longer than 10 business days, we'll tell you the date before we start. The teardown goes to {you / the owner} within 3 business days of the last call. We never name you to the shop without your permission. If it's a shop we can't take on, we'll tell you only: "We won't be doing this one."" |
| E35 · S · within 2 minutes of the vendor's event for a failed first attempt, on any callback card but V | `We just tried to call you about your {request_label}` | "We just called {phone} about the {request_label} you made on techeo.com and couldn't reach you. We'll try again {this afternoon / tomorrow morning}. If it's easier, call us at [TECHEO_PHONE]: a person answers, {answering hours}." |
| E36 · S · F2 step 7, within 2 business days of the window's end | `Your audit reservation carries to {next opening}` | "{reason_line} Your reservation carries to {next opening}, and you keep your place, ahead of everyone who reserved after {reserved_date}. You'll hear from us by {contact_due_date}. Nothing to do now; if you'd rather not wait, reply "cancel."" · `{reason_line}`: *No slot:* "We couldn't fit your call with Blake before this window closed. That's on us, not you." · *Asked to wait:* "As you asked, we've moved your reservation to the next opening." · *Unreached:* "We haven't managed to reach you by phone this window." · *Phone reservation* adds: "So we can call you then, please press "Yes, call me when audits open" on this page: {confirm_link}." |
| E37 · S · F2 step 7, at the carry limit | `Your audit reservation has ended` | "Your reservation from {reserved_date} has been carried through {n} openings without a call with Blake, so we've closed it rather than keep you waiting. Nothing was charged, and you owe nothing. If you still want an Engine Audit, techeo.com/audit takes two minutes, and a new reservation joins the line from that day." |
| E38 · S · F10, `qualified` + ≤5 min | `Your Engine Audit: your invoice is on its way` | "You're a fit for an Engine Audit, and no payment was taken. Card and bank payments through our checkout are down right now, so Blake will email your invoice by the end of {next_business_day}{bank transfer: ", then call you to confirm it before you pay"}. Your 7 business days start once access is granted and the payment arrives. We never change bank details by email." · *Mid-flow variant* opens: "Our checkout had a problem on our side, and nothing was charged." |
| E39 · S · F11: a moved call whose prospect wasn't reached; no-show variant: founder, the same business day | `We need to move your call with Blake` | "We're sorry: we have to move your {call_label} on {weekday}, {date} at {time}. Something has come up that Blake can't set aside, and we'd rather reschedule than rush you. Pick a new time: {reschedule_link}, or call [TECHEO_PHONE] and we'll book it with you.{ Readout: " Your report is on schedule, and the PDF reaches you by {delivery_date} either way."}" · *No-show variant:* "I missed our call at {time} today. That's on me, and I'm sorry. Pick any time that suits you: {reschedule_link}, or reply with two times and I'll make one work." |
| E40 · S · founder · F11 step 5, as soon as a late report is known, by business day 5 | `Your Engine Audit readout: a new date` | "I'm sorry: your report won't be ready by {delivery_date} as planned. It will reach you by {new_pdf_date}, and I'd like to walk you through it then. Any of these? {slot_1} · {slot_2} · {slot_3} ([TZ]). Your $1,500 credit runs 30 days from the readout itself, so you lose no time on it." |

### Declines, each with something useful

Declines go out within 5 min of the on-screen outcome, as class S. Nothing follows them.

**Self-check block S1**, appended where the table below says so:
> **Four things you can check this week, without us**
> 1. **Answered calls.** Pull last month's inbound calls by hour. Find the hours with the most calls that rang out or hit voicemail.
> 2. **Callback time.** For every web form and marketplace lead, count the minutes from submission to your team's first dial. Opening the notification doesn't count; dialing does.
> 3. **Booking rate.** Booked calls divided by qualified calls. We hold our own desk to a 70% target: our standard, not an industry average.
> 4. **Paid leads nobody called.** Count last month's Angi, Thumbtack, and Yelp leads with no call from you, and dispute the ones that were never real.

| Id | Subject | Body | Useful part |
|---|---|---|---|
| E25 · `exclusion_zone` | `About your request to Techeo` | "We can't take this one. Your shop is within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat. Homets is the HVAC company Techeo's founder owns, and we don't work inside that zone for any reason: no audits, no teardowns, no calls. The rule has no exceptions. {No payment was taken. / No test calls were scheduled.} We won't contact you again unless you ask. If you think we've placed your shop wrongly, reply with your address and we'll check by hand." Radius-only by default (`10` #affiliation). Only when `03` open question 8 selects the variant (required if the radius doesn't cover Homets' whole market), the second sentence reads "…within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat or anywhere in its [HOMETS_METRO] market," shipped in the same deploy as every other surface. | None, by design (`10` #affiliation governs the wording) |
| E26 · `not_residential` | `About your Engine Audit request` | "We work on homes, not commercial jobs. Our test calls, scoring, and standards are built for homeowners; with mostly commercial work, you'd be paying us to learn your business. {No payment was taken. / No reservation was made.} If your mix changes, we'd be glad to hear from you." | S1 |
| E27 · `out_of_scope` | `About your request to Techeo` | "We don't build websites or logos or run social media, and the audit won't help with those. Reply with what you need, and Blake will send one or two names we'd trust with our own, if we know any. We take no referral fee." | The founder's list (open question 12) |
| E28 · `not_servicetitan` | `About your Engine Audit request` | "In our first year we work only with shops on ServiceTitan, because everything we promise is measured there. We've added {company} to our ServiceTitan list and will tell you if that changes. {switching: "Reply with your go-live date, and we'll be in touch 90 days after it."} A free phone teardown doesn't need ServiceTitan: techeo.com/teardown." | Teardown, S1 |
| E29 · `low_lead_flow` | `About your Engine Audit request` | "The audit prices leaks in lead flow you already pay for, and from your answers there isn't enough of it yet for the audit to be worth $1,500 to you. A free phone teardown is a better start: techeo.com/teardown." | Teardown, S1 |
| E30 · `no_test_consent` | `About your Engine Audit request` | "The audit starts by calling your office and using your web form as a customer would. Without that, we'd be guessing at the part that matters most, so we'd rather not take your money. Our notes never name the person who answered, and every finding is about the system. If you change your mind, techeo.com/audit takes three minutes." | S1 |
| E-NA · not available (founder, after the call) | `About your Engine Audit request` | "Thanks for talking with me. As I said, we can't take a {trade} client in your market right now. We don't give the reason, because the answer has to be the same whatever the cause. No payment was taken. {If kept: "If that changes, you'll hear it from me first."}" | S1 |
| E-NA · teardown variant | `About your teardown request` | "Thanks for talking with me. As I said, we can't take a {trade} client in your market right now. We don't give the reason, because the answer has to be the same whatever the cause. So we won't be doing the teardown, and we won't call your office." | S1 |
| E-NA · market-check variant (v2) | `About your market check` | "Thanks for talking with me. As I said, we can't take a {trade} client in your market right now. We don't give the reason, because the answer has to be the same whatever the cause. Nothing was held or charged. {If kept: "If that changes, you'll hear it from me first."}" | S1 |

**Done when:**

- Every template renders as text and HTML in every variant.
- `03` #qa's checks pass.
- `10` has signed off the footer and the classes.
- SPF, DKIM, and DMARC pass for both domains.
- An opt-out after E10 writes `app.suppression` and tags the task `email-opt-out`; the send-time check and the founder's pre-send check then stop E14–E16, while service email about the audit continues (`06` #optout).

## Pipeline in ClickUp {#pipeline}

**Where it lives.** Techeo's own ClickUp Workspace (`06` open question 4), in a Space called "Pipeline." It has four lists:

- **"Leads"** (renamed from `06`'s "Site leads"). One task per lead, from any source (site, phone, referral, or outbound), except leads whose only submission is the calculator. A later form or call from a linked outbound lead comments on its task (F9).
- **"Messages."** Client, referrer, press, and seller messages from the phone (F8), and `team@` replies that need the founder (`#replies`). Statuses `open` and `done` only; it writes no `stage_events`.
- **"Mystery shop."**
- **"Synthetic."**

Supabase is the record of truth. ClickUp is where the work gets done.

**Statuses** mirror `techeo.gtm` #process:

| ClickUp status | `techeo.gtm` stage | `app.leads.stage` | Entered when |
|---|---|---|---|
| `new` · `calling` · `connected` | Identified | `new` · `contacted` · `contacted` | Lead arrives, and the SLA timer runs · first dial · a conversation happens |
| `waiting for opening` · `on hold` | Identified | `audit_reserved` | Reservation confirmed · held by the founder and kept in line, for any cause (for example, the prospect asked to pause). ClickUp records no reason |
| `teardown queued` · `teardown sent` | Identified · Teardown sent | `contacted` | Teardown confirmed, or an outbound target recorded (F9) · E19 or the cold teardown email sent |
| `discovery booked` · `discovery held` | Discovery call | `discovery_booked` | Cal webhook · founder, after the call |
| `audit sold` · `audit in progress` | Audit sold | `audit_purchased` | Stripe webhook · access complete |
| `readout held` | Audit delivered | `audit_purchased` | Founder, after the readout |
| `retainer signed` (closed) | Retainer signed | `client` | MSA and SOW executed |
| `declined by us` · `closed lost` · `unreachable` · `do not contact` (closed) | — | `declined` · `closed_lost` · `closed_lost` · `do_not_contact` | As named |

Every status change in "Leads" is written to a new `app.stage_events` table by `06`'s `taskStatusUpdated` webhook. `techeo.gtm`'s conversion rates are computed from those rows.

**Fields per lead.**

- **Lead ID and SLA due, on any plan:** the Lead ID in the description and a `lead-<first 8 hex>` tag; SLA due as the task's own due date (`06` #notifications).
- **Custom fields, on a paid plan only:** first dial, delivery due, readout date, and credit expiry.
- **Tags:**
  - source form
  - channel (`site`, `phone`, `referral`, `outbound`, `peer-network`)
  - season at arrival
  - trade
  - purchase state (`ach-processing`, `ach-failed`, `refunded`, `invoice-route`)
  - contact state (`unreached`, `email-opt-out`, `carried`, `lapsed`, `canceled`, `moved-by-us`)
  - decline reason
- **Name prefix:** queue number (`#07 · Reservation · …`), with the opening date as the start date.
- **Checklist:** the 7 access items.
- **Required comment at `discovery held`:** `01`'s two questions; F6's third, "Did you search or ask an AI assistant about this? What did you type?", with the answer word for word; and the outcome. When the founder fills `09`'s `discovery_summary` tab by the 8th, the verbatim answers are copied to `07`'s query sheet and `12`'s `techeo-question-log`.

**Never in ClickUp:** market status, `market_hidden`, register data, revenue beyond the band, or any Homets data.

**Plan.** ClickUp's Free Forever plan allows 60 Custom Field uses per Workspace in total. Each value set on a task is one use, and uses never reset (verify). The daily synthetic run alone would use that up within weeks of launch, before seeds, mystery shops, or real leads. So on Free, no custom field is set at all, including by the synthetic run: Lead ID and SLA due live outside custom fields, as above. The four delivery fields need a paid plan (Unlimited, about $7–$10 per user a month; verify), bought before the first value is set (open question 11; the cost goes to `11`).

**SLA timers.** `06` runs these on their own every-minute Cron Trigger (`* * * * *`) or a per-lead scheduled alarm, not on the 10-minute drain, which could fire after the due time.

- 5 minutes before the due time with no dial logged: a second email to the receptionist, marked "Reminder." The vendor's call event can arrive up to 5 minutes after a dial (`#receptionist` must-have 4), so the reminder reads "If you've already dialed, no action needed."
- 30 minutes past due, during business hours: a push to the founder, unless the founder is in a protected block.
- A miss is judged on the dial's timestamp in the vendor's log, not on when the event arrives. Every miss goes into the weekly report.

**Handoff to sales** happens at `connected` → `discovery booked`. Before the founder takes over, the task must hold the contact details, ZIP, trade, CRM, answers, source, and the receptionist's summary. From then on the lead follows `techeo.gtm`'s process.

**Done when:**

- A test lead moves through every status and writes one `stage_events` row per move.
- No task, field, tag, status, or comment contains `market_status`, `market_hidden`, a register value, or a statement about market availability. (A bare search for "market" would fail on "marketplace," on company names, and on the mystery shop's "Is my market open?")
- Friday's review reads stage counts straight from the status totals.

## The monthly self mystery-shop {#mystery-shop}

D11 requires this shop. `01`'s S2 sets the pass mark at 86. The synthetic run proves the system works; this shop proves the people do (`06` #monitoring).

**Procedure.**

- **When:** the Monday-to-Saturday week that ends on the month's first Saturday (it may start in the previous month). Scoring is finished by the 10th. If a test weekday is a holiday in `#sla`, use the next business day.
- **Exception, the first shop:** calls Tue Nov 10 – Sat Nov 14, 2026, scored Mon Nov 16 (`11` R6), after the script loads on Nov 2. It must score 86 or higher before Nov 20; a failed shop is re-run Wed Nov 18.
- **Who:** test A (weekday 09:30) is always placed by the enforcer or a peer, never the founder (`01` R2; `techeo.guardrails` #protected). The founder may place tests B, C, and F from a number on no Techeo record, and places B only Monday to Thursday, because Friday afternoon is protected. `11` open question 6 is the default: the enforcer places A and C, a peer places B and F.

| Test | When | What |
|---|---|---|
| A · ICP prospect | Weekday, 09:30 | OPEN: a discovery booking. WAITLIST: a reservation, with the date stated. |
| B · Objection | Weekday, 17:45 | Rotate: "Aren't you my competitor?", "Is my market open?", "Do you record?", "Can I pay by phone?" |
| C · Curveball | Saturday, 08:00 | Rotate: a homeowner smelling gas; a Homets customer on the wrong line; a shop not on ServiceTitan; a shop inside the zone; press on deadline; an urgent client |
| F · Form | A random business-hours minute; after hours in alternate months | A real submission that books no time with Blake. Qualify tests use `decision_other`, so no payment is ever taken. |

**Scoring.** The rubric follows `governance.qa.csm`'s structure. Each item scores 0, 1, or 2.

| Category | Weight | Scored against |
|---|---|---|
| Greeting, including the recording notice | 5% | Inbound step 1 |
| Active listening | 10% | Step 2 |
| **Routing and triage** (pass/fail) | 15% | Steps 2, 7, 8, 12 |
| Intake completeness | 20% | Step 3, or the callback card |
| Booking execution | 20% | Step 4 or 5 |
| Next-step offer (replaces the membership pitch; the offer counts) | 10% | Teardown or reservation offer |
| Confirmation read-back | 10% | Step 4; E21 arrives |
| Log quality | 10% | The summary matches the call |

**Critical fails.** Any one of these caps the call at 40, the top of the audit's 0–40 "phone is the problem" band:

- failed triage
- a promised result, or a word D8 bans
- disclosing whether a market is open, a client's identity, or anything about Homets beyond the footer disclosure, step 7a, and step 12's number
- a booking outside the offered slots
- no recording notice
- taking payment details

**The form score (F)** is based on time to the first dial:

| First dial | Score |
|---|---|
| Within 15 minutes | 100 |
| 16–30 minutes | 60 |
| 31–60 minutes | 30 |
| Later the same day | 10 |
| After that | 0 |

For after-hours tests, a dial by 10:00 the next business day scores 100; otherwise 0. Subtract 20 for a confirmation email that takes longer than 5 minutes, and 20 more if the callback doesn't name the request.

**Monthly score:** 0.2 × (A + B + C + F) + 0.1 × live-answer rate + 0.1 × SLA compliance. **Pass at 86.**

| Result | What it triggers | Deadline |
|---|---|---|
| Month under 86, or any call under 70 | Send the scored sheet, with the script line behind each lost point, to the vendor; get a corrective note; re-shop the scenario | Sheet within 2 business days; re-shop within 10 |
| Any critical fail | Written notice, retraining, re-shop | Within 5 business days each |
| Form score under 60, or a missed dial | Counts as an SLA miss; version B's revert rule applies | Immediate |
| Two monthly fails in a row, two critical fails within 90 days, or two outages over 30 minutes within 90 days (`#unanswered`) | Replace the vendor: shortlist two against `#receptionist` and run a parallel month | Decision within 30 days |

**Logging.**

- One ClickUp task per month, holding the scored sheets, the month's failed monitoring calls and outages (`#unanswered`), and its calls moved by us and founder no-shows (F11).
- Recordings stay in the vendor's portal, linked but never copied.
- The score feeds `09`'s S2 and the `techeo.metrics` monthly document, beside Homets' KPIs.

## What this document changes elsewhere {#dependencies}

| Owner | Change |
|---|---|
| Brief (`00`) | **D2:** add `AUDIT_CAPACITY` to the capacity triggers, beside the kill switch and the client-#4 gate. |
| `01` | **Open question 2:** add the `AUDIT_CAPACITY` case: the earliest expected readout plus 1 business day, or the next seasonal opening if that falls after the window's last OPEN day (F2 step 5). |
| `03` | **Calculator:** the "shown as $280,000" example; the new messages; the UNDER_ONE_JOB and "numbers changed" states. **Audit forms:** add the `work_mix` field and the `switching` option; make `test_call_consent` a yes/no radio; shorten the reservation form; add "An online owner group or forum" to `heard_from` if `09` open question 3 is accepted. **Outcomes:** add `not_residential` and teardown's "We'll call you first"; withdraw "Market slot taken" and the reservation market exception. **`/thanks/audit-reserved`:** step 2 drops "check your market," because the receptionist never sees market status. **`/thanks/audit-purchased`:** step 2 becomes "The access list is already in your inbox." The fallback becomes "Soon: a call from [TECHEO_PHONE] to confirm your order. [SLA line]" **`/audit#book` under F10:** the payment-outage notice and the invoice-route `qualified` block, as drafted there. |
| `04` | **`/calculator`:** a read-only target, the missed-call flag, the new example totals, the section error. **`/markets`:** no "State" field (already done); `crm`'s second option reads "Moving to ServiceTitan," as on `/audit`, not "Switching to ServiceTitan." Every other `/markets` and `/partners` label and option set already matches `#forms-v2`. E33 and E34 are the confirmation emails both pages promise. |
| `06` | **Schema:** `crm` gains `switching`. `audit_qualifications` gains `work_mix`, `review_reasons`, `decline_reasons`, and `not_residential`, and its purchase-only fields become nullable. `audit_reservations` is ordered by `reserved_at` and gains `channel`. New `review_clearances` and `stage_events` tables. `teardown_requests` gains recording-rule and office-hours fields. `calculator_submissions` gains `inputs jsonb` and this document's ranges. v2: `market_checks` and a new `partner_referrals` table, with `#forms-v2`'s columns. New `seed_identities` (founder and enforcer access only), which `ingest_submission` matches to add `seed` to `submissions.flags`. **Pipeline:** when step 8's `qualify_context` fails or times out, add `history_unknown` to `review_reasons` as well as setting `market_status = unknown`. `spam_suspect` submissions get the receptionist card, flagged, with no founder release first. **Timers:** the SLA timers run on their own every-minute Cron Trigger (`* * * * *`) or a per-lead alarm, not on the 10-minute drain; E35 fires from the vendor's event for a failed first attempt. **Season:** the flip schedule keeps a run shortly after 00:00 local time in every US time zone (`#season-state`'s hourly runs do). **Also:** a receptionist email variant with no market status, revenue, or decline causes; a staff intake path; `discovery-queue`; `#pipeline`'s statuses; an email opt-out tags the lead's task `email-opt-out`; the ClickUp redaction test follows `#pipeline`'s Done-when rather than the bare word "market." **Staff page (F8–F10, `#replies`):** the vendor's named agents join the staff intake Access policy; `call_type`s as in F8's table, plus `outbound_target` (founder accounts only); `phone_booking = true` runs the qualify rules with no Checkout Session and rows 13–14 nullable; `entered_by_staff` in `submissions.flags`; actions `cancel`, `stop`, `correct`, and recording an F10 payment; a response that never names a review reason, market status, or decline cause but the zone line; the structured-email fallback through Zapier's parser. **Schema:** `consent_evidence` gains `captured_by`, `vendor_call_id`, and `channel`; `lead_touches.kind` gains `inbound_call`; `submissions.form_id` gains `phone_missed`, and `submissions` gains `channel` (the `audit_reservations` values) and `calling_rule_version`; `audit_reservations` gains `carry_count`, with a new `reservation_openings` table (one row per reservation per opening held); `teardown_requests` gains `origin` (`request`, `partner`, `outbound`), with `authority_confirmed` required unless `origin = 'outbound'`; `leads` gains `parent_lead_id`; `audit_purchases` gains `payment_route` (`checkout`, `stripe_invoice`, `bank_transfer`) and an invoice or bank reference, with `checkout_session_id` required only for `checkout`. **Calls:** the call-event path turns missed, abandoned, and voicemail calls into `phone_missed` events with card V (`#unanswered`); a `data/` area-code table gives state and zone for numbers with no lead; `server/sla.ts` reads `10`'s calling-hours table by `state_code` and caps attempts at 3 in any rolling 24 hours; Cal.com bookings link to a phone lead by uid or attendee email, whichever arrives first; a host cancellation with the reason "moved by us" sends E39. **Monitoring:** the daily monitoring call from `techeo-ops`, pinging Healthchecks.io. **Build:** `vendor-excluded-zips.csv` (one `zip` column, no labels, no `zone_edge`), written whenever the list changes, with an alert to the founder. **Matching (F9):** the outbound-lead match rules, a free-mail domain list, and a founder alert on more than one candidate. **Payments (F10):** `PAYMENT_FALLBACK`, committed like a flip; no Checkout Session while it's on; E10 held; `AUDIT_CAPACITY` and the daily reconciliation count invoice purchases. **Emails:** E36–E40 and E04's email-only variant; the `phone-reserve-confirm-v1` page (`10` #tcpa-analysis item 3). |
| `09` | The weekly SLA report and S2, generated at 06:00 [TZ] each Monday and emailed to the founder and the enforcer, plus a business-hours run at 06:00 on Sat Jan 30, 2027; calculator events carry no inputs; seeds carry `seed` in `app.submissions.flags` and are excluded from funnels; `owner_community` joins `heard_from` if `09` open question 3 is accepted. **New:** `phone_missed` events join the SLA figures, and staff intakes answered live and outbound targets stay out (`#sla`); the live-answer rate as `#unanswered` defines it, with abandons counted, beside the answered rate; any request dialed more than 3 times in 24 hours or outside its state window, listed in the weekly report; O7 and O8 read `app.reservation_openings`, so a carried reservation counts at each opening, with a "carried from" line; a lead whose first record has `channel = 'outbound'`, or linked to one by `parent_lead_id`, gets `lead_channel = teardown` ahead of `heard_from` and is never site-originated for O12 and O13, and linked leads count as one in stage conversion; O2 and the scorecard note the F10 payment route; calls moved by us and founder no-shows, counted monthly beside S2 (F11) |
| `10` | Consent text for each form, plus a phone version; attestation wording; the email footer and classes, including E33–E35; sign-off on hand-sent, one-to-one founder C email without `List-Unsubscribe` headers; the state recording table; retention for calculator-only leads and zone declines. **New:** a spoken teardown consent and authority text for phone teardowns (F8); the voicemail and outage greetings (`#unanswered`) and the position on returning missed calls (card V); sign-off on the classes of E36–E40 and E04's email-only variant; `/terms` wording for payment by invoice or bank transfer and its refunds (F10); counsel's view on the 3-month consent re-check for carried phone reservations (F2 step 7) |
| `11` | Costs: the receptionist at $315–$1,200/month (estimate), replacing the $300–$600 line; seed and mystery calls; and the ClickUp tier ($0 on Free with no custom fields, or Unlimited at about $7–$10 per user a month for the delivery fields; verify). Vendor setup dates now match R2 and R4. **New:** R1 compares quotes against must-haves 1–10, not 1–8; R4 confirms the caller ID, loads the exclusion ZIP list, and starts the monitoring call on Nov 2; the monitoring number (a programmable-voice number in Techeo LLC's name, a few dollars a month; verify) and any vendor charge for monitoring calls; the outage runbook printed with the flip runbook and drilled before Nov 20; `team@` set up as a collaborative inbox (`#replies`); Techeo LLC's bank details for F10 invoices ready by the Jan 28 rehearsal; and, in `#flip-open`, F10 rather than a rollback when only payments fail. |
| `techeo.gtm` | **#teardown and #process:** each outbound target is recorded on the staff page, with the zone check logged, before the first test call (F9); opt-outs from cold email go into `app.suppression` within 1 business day. |
| `techeo.audit` | The Week 3 access email feeds E07. Decide whether the Gap Statement adds a missed-call term. **#gap:** replace "A gap of $340k is presented as $300k" with `08` #calculator's rounding steps, so the Gap Statement and both calculators round identically. |

## Open questions for the founder {#open-questions}

1. **Receptionist vendor.** *Recommended default:* a human-only service that answers live at every hour, billed per call, month-to-month. Choose it from three quotes against `#receptionist`. Budget $315–$1,200/month (estimate: 45–120 calls at $7–$10 a call; verify with vendors).
2. **Published hours versus covered hours.** *Recommended default:* publish Monday–Friday, 8 a.m. to 6 p.m. [TZ], while the vendor answers live around the clock.
3. **Holidays.** *Recommended default:* the seven listed in `#sla`, reviewed each December.
4. **`AUDIT_CAPACITY`.** *Recommended default:* 3 audits sold and not yet read out. The third sale flips the site to WAITLIST·capacity, with `{capacity date}` set by F2 step 5's rule for this trigger.
5. **Discovery limits.** *Recommended default:* 2 a day. 4 a week in February, 5 a week in March and April.
6. **Teardown capacity.** *Recommended default:* 5 a week across all sources, with site and partner requests first.
7. **Shops over $15M, with 1–2 or 26+ trucks, or buying no leads, before the gate clears.** *Recommended default:* talk, then decline with S1 (`techeo.guardrails` #gate).
8. **Zone-edge buffer.** *Recommended default:* 25 miles, checked by hand.
9. **A callback to buyers who have just paid.** *Recommended default:* yes, inside the SLA.
10. **Who submits SLA seeds.** *Recommended default:* the kill-switch enforcer: 5 a week through January 2027, then 3.
11. **ClickUp tier.** *Recommended default:* Free, with no custom fields at all: the Lead ID in the description and a tag, SLA due as the task's own due date. Move to Unlimited (about $7–$10 per user a month; verify) before any custom field is set, only if you want the four delivery fields.
12. **Referral names for out-of-scope declines.** *Recommended default:* one or two names per category, only people you'd hire yourself, no fee (`techeo.positioning` #not-sold).
13. **Client urgencies during protected blocks.** *Recommended default:* never interrupt a block. Clients can pause their own campaigns, and the MSA states support hours.
14. **Post-readout emails.** *Recommended default:* sent by the founder personally, by hand from Workspace, from templates, after the pre-send check in `#emails`.
15. **Techeo's phone number.** *Recommended default:* a Techeo-held number, forwarded to the vendor.
16. **Who keys phone leads.** *Recommended default:* the vendor's named agents, on the Access-protected staff page, within 15 minutes of each call (F8). The structured-email fallback applies only if the vendor refuses the page; keying by hand would cost founder hours the cap doesn't have.
17. **Unanswered calls.** *Recommended default:* overflow to the vendor's backup queue at 30 seconds and voicemail at 60; the founder's phone never in the ring path; in an outage, forwarding repointed to the number host's voicemail within 30 minutes (`#unanswered`).
18. **Payment when Stripe can't take it.** *Recommended default:* keep OPEN and qualify as usual, then invoice qualified buyers: a Stripe-hosted invoice when only Checkout is down, a bank transfer when Stripe can't charge at all (F10). Never flip to `capacity` to cover it.
19. **A late report.** *Recommended default:* no discount, and the credit window runs from the actual readout. If the report is more than 5 business days late for reasons on our side, the buyer may ask for a full refund; add that case to `03` open question 2's refund term before Feb 1, 2027.
20. **Carry-over limit for reservations.** *Recommended default:* two carries, so no reservation is held at more than three openings, with carries to a `{capacity date}` not counted (F2 step 7).
21. **Who triages `team@techeo.com`.** *Recommended default:* the vendor's first pass, which handles "cancel," "stop," and spelling fixes on its own; the founder for everything else, once each business day; nobody else in the group (`#replies`).
