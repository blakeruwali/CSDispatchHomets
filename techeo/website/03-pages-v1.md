---
id: techeo.web.pages-v1
title: v1 Page Specifications & Copy
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, copy, pages, v1, homepage, audit, teardown, forms, microcopy, season-state, seo-titles]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.offers, techeo.audit, techeo.delivery, techeo.gtm, techeo.guardrails, techeo.legal]
order: 3
---

# v1 Page Specifications & Copy

**This is the copy deck for every v1 page on techeo.com, section by section and in every season state, ready to paste. Every page makes one argument to an owner who has been sold traffic before: we measure ourselves in booked jobs, and the first money we find is money you already spent.**

## How to read this deck {#conventions}

This document owns the words on every v1 page: titles, metas, H1s, outlines, section order, all visible copy in every state, alt text, and global microcopy. Design is `05`'s; fields, validation, qualification, the calculator formula, the SLA, and emails are `08`'s; the state flip is `06`'s; markup is `07`'s; analytics is `09`'s; legal text and consent wording are `10`'s; URLs are `02`'s. Where this deck drafts words for another owner's topic, it says so. A field `08` adds or removes gets matching copy here in the same change.

**The copy-change rule.** No price, term, or promise changes here first. It changes in `techeo.offers`, `techeo.legal`, or the MSA, then here the same week.

**Notation.** `[TOKEN]` is a brief placeholder only the founder can fill; the production build fails if one remains. `{variable}` is a build-time config value (`06`). **OPEN**, **WAITLIST·season**, and **WAITLIST·capacity** are the state variants (D2); a section with no variants table does not change by state. `→ /path` is a link target (`02`).

| Variable | Renders as | Rule |
|---|---|---|
| `{next opening}` | "February 1" or "September 7" | February 1 from launch through Jan 31 and from Dec 1 through Jan 31; September 7 from May 1 through Sep 6. September 7 is 2027's day after Labor Day (brief D1), not a fixed date: re-derive it each year (2028: September 5), and change `#faq-peak-season`'s end date, the late-window notice, and `#numbers` with it (open question 15). |
| `{season}` | "Heating season" or "Cooling season" | Heating when `{next opening}` is February 1; Cooling when it is September 7 |
| `{capacity date}` | A date in words, such as "March 15" | Set by `techeo.web.strategy` open question 2; shown only in WAITLIST·capacity |
| `{answering hours}` | "Monday to Friday, 8 a.m. to 6 p.m. [TZ]" | The hours the receptionist contract covers live (`08`). Never show hours the contract does not cover. |
| `{build year}` | "2026" | Footer only |

### The SLA line

D11 permits "same business day" until the 15-minute figure is earned. **[SLA line]** in this deck means the full copy of the live version; **[SLA line, short]** means its short copy.

| Version | Full copy | Short copy | Live when |
|---|---|---|---|
| **A** (default) | We'll call you back the same business day. If you send this after 6 p.m. [TZ], on a weekend, or on a holiday, we'll call by 10 a.m. the next business day. | We call back the same business day. | From launch until `08` records four consecutive weeks of 95% or better compliance with the 15-minute target |
| **B** (earned) | We'll call you back within 15 minutes, 8 a.m. to 6 p.m. [TZ], Monday to Friday. Outside those hours, we'll call by 10 a.m. the next business day. | We call back within 15 minutes in business hours. | Only after that threshold; `08` reverts to A in any week compliance falls below 95% |

**Voice and style.** An operator talking to peers: plain, specific, numerical. "We" is Techeo; Blake speaks in the first person only in `#operator`, and is otherwise "Blake," never a pronoun. Systems fail, people don't: never blame a CSR. Never promise leads or results. Numerals for money, percentages, durations, and scores; words for one to nine elsewhere. "10 a.m.", dates in words, no years in state copy. "Homets Air and Heat" at first mention per page. Engine names as D6, Booking first. US English.

## Site chrome: header, season banner, footer {#chrome}

`02` fixes order, targets, and templates (`techeo.web.ia` #chrome). These are the words.

### Header

| Element | Copy |
|---|---|
| Skip link | Skip to content |
| Wordmark | techeo (accessible name "Techeo home") |
| Nav | Engines → `/#engines` · Pricing → `/#how-it-works` · About → `/#operator` · FAQ → `/#faq` |
| Phone, 1024px and up | [TECHEO_PHONE], formatted "(XXX) XXX-XXXX" |
| Phone, under 1024px | Call (icon plus word; icon only below the compact breakpoint (440px, `05` #layout)) |
| Phone accessible name, every width | Call Techeo, [TECHEO_PHONE] |
| CTA, OPEN | Book an Engine Audit (compact below the compact breakpoint (440px, `05` #layout): "Book audit") |
| CTA, WAITLIST, either reason | Reserve an audit slot (compact below the compact breakpoint (440px, `05` #layout): "Reserve slot") |

The "Pricing" label is allowed only while `#how-it-works` shows every v1 price. The CTA is hidden on `/audit` and `/thanks/*`.

**Acceptance:** at 320px the sticky bar and the nav row each fit on one line with no horizontal scroll, in both states; screen readers announce the phone's full accessible name.

### Season banner (WAITLIST only)

**Purpose.** State the season rule once, as a strength, with a date and one thing to do now (`techeo.web.strategy` #season-strategy). **Layout.** `05` component: season banner; `<section id="season-banner" aria-label="Season notice">`; not dismissible, not sticky, not a live region; never on `/thanks/*`.

| Reason | Copy | Fallback if it wraps past two lines at 320px |
|---|---|---|
| `season` | {season}: new audits open {next opening}. [Reserve a slot], no payment needed. | New audits open {next opening}. [Reserve a slot]. |
| `capacity` | We're not taking new audits until at least {capacity date}. [Reserve a slot], no payment needed. | We're not taking new audits until at least {capacity date}. [Reserve a slot]. |

"[Reserve a slot]" → `/audit`; on `/audit` itself → `/audit#book` (`02` #season-banner).

Rendered, the season banner runs 78–79 characters. The capacity banner never says why: the cause may be the Homets kill switch, and Homets' competitors read the site (R1).

**Acceptance:** present on T1, T2, T4, and T5 pages in WAITLIST only; two lines or fewer at 320px, or the fallback ships.

### Footer

| Element | Copy |
|---|---|
| Line under the wordmark | Marketing and booking systems for residential HVAC and plumbing contractors. Run by an operator. |
| Phone and hours | [TECHEO_PHONE] · Answered live, {answering hours}. |
| "On this site" | Engines · Pricing · Engine Audit · Free phone teardown · About · FAQ |
| "Legal" | Privacy · Terms · Accessibility |
| Legal line | © {build year} Techeo LLC, a [TECHEO_STATE] limited liability company · [TECHEO_POSTAL_ADDRESS] |

**Disclosure block** (full width, every page including 404, `/thanks/*`, and the email-link pages in `#email-links`; D8 requires it, `10` owns the final wording):

> **Who owns Techeo.** Techeo LLC is owned by Blake [FOUNDER_SURNAME], who also owns Homets Air and Heat, an HVAC company in [HOMETS_METRO]. We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets, and we work with one client per market per trade. Client data is never used for Homets. [How we keep the two apart]

"[How we keep the two apart]" → `/#operator`.

**Acceptance:** the disclosure text is identical on every page, in `/llms.txt` (`07`), and in the facts of `#operator`'s disclosure list. [TECHEO_POSTAL_ADDRESS] is never a home: a USPS-registered PO box, or a private mailbox at a USPS-registered commercial mail receiving agency (16 CFR 316.2(p)). A registered agent's address qualifies only if it is set up that way for Techeo (`10` open question 12).

## Home `/`: page frame {#home}

**Purpose.** In one phone screen, say who this is for, what it does, and who runs it; then answer a skeptical owner in the order `techeo.web.strategy` #message-hierarchy sets.

- **SEO title (53 characters):** `Techeo | HVAC & Plumbing Marketing Run by an Operator`
- **Meta description (140 characters):** `Techeo books more of the calls HVAC and plumbing contractors already pay for. Run by the owner of Homets Air and Heat. Engine Audit: $1,500.`

Counts include spaces; "&" is one character. Google truncates by pixel width and may rewrite descriptions, so every count in this deck is a house limit, not a display promise.

**Heading outline** (one H1; each section is a `<section>` with its own H2, per `techeo.web.ia` #homepage):

```
H1  Book more of the calls you already pay for.            #top
H2  What the system did on our own phones                  #proof (omitted if not real)
H2  Where booked jobs leak                                  #leak      (H3 × 4 leaks)
H2  What is your phone costing you?                        #calculator
H2  Four engines. The Booking Engine comes first.          #engines   (H3 × 4 engines)
H2  How it works, and what it costs                        #how-it-works (H3 × 4 steps)
H2  The Engine Audit                                       #audit
H2  Built by an operator                                   #operator
H2  What we put in writing                                 #promises
H2  Who it's for, and who it isn't                         #fit
H2  Questions owners ask                                   #faq       (H3 × 18)
H2  (by state; see #home-start)                            #start
```

**Page acceptance:** the five-second test and the WAITLIST test in `techeo.web.strategy` pass in both states at 375 × 667, and the first screen shows the H1, the operator line with Blake's name, and the primary CTA.

## Home sections 1–4: hero, proof, leak, calculator {#home-top}

### 1 · Hero `#top`

**Purpose.** Answer three questions in one screen: is this about my problem, who says so, and what's the catch. Then offer one next step for the season. **Layout.** `05` components: hero, portrait chip (a small crop of the founder portrait beside the operator line), primary and secondary buttons, phone link. Mobile order follows the table.

| Element | Copy |
|---|---|
| Eyebrow | For residential HVAC and plumbing shops |
| H1 | Book more of the calls you already pay for. |
| Subhead | Most agencies sell traffic. We start with the jobs you already paid for and lost on the phone, then build demand. |
| Operator line | Run by Blake [FOUNDER_SURNAME], owner of Homets Air and Heat in [HOMETS_METRO]. We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets. |
| Account line | You keep every account, in your name and on your card. |
| Primary CTA → `/audit` | *(state table)* |
| Secondary CTA | Get a free phone teardown → `/teardown` |
| Phone line | Or call [TECHEO_PHONE]. A person answers, {answering hours}. |
| Portrait chip alt | Portrait of Blake [FOUNDER_SURNAME] |

| Element | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| Primary CTA | Book an Engine Audit | Reserve an audit slot | Reserve an audit slot |
| Microcopy under it | $1,500 · 7 business days · credited in full against a retainer signed within 30 days | New audits open {next opening}. Reserving is free. | We're not taking new audits until at least {capacity date}. Reserving is free. |

**Data.** [FOUNDER_SURNAME], [HOMETS_METRO], [EXCLUSION_RADIUS_MILES], [TECHEO_PHONE], [TZ]; the founder portrait (D9).

**Acceptance:** Blake's name, Homets' name, and the radius are visible without scrolling at 375 × 667 in both states; the account line sits before the first CTA; the word "leads" does not appear. The eyebrow stays at 44 characters or fewer (one line at 343px) and the subhead at about 115 or fewer (three lines on a 335px wrap run), which `05` #first-screen's budget needs; the current eyebrow is 39 characters and the subhead 113. Any change to either re-runs `05` #first-screen's screenshot test in both states.

### 2 · Homets proof strip `#proof`

**Purpose.** Put Homets' own dated ratios beside the claim. This is the only Homets data on the site.

**The omit rule (D7).** The section ships only if its numbers are real: from Homets' ServiceTitan, dated with the window beside them, rounded toward the less flattering value (brief D7), and each a ratio, rate, delta, or median time, never a volume. If the Week 1 baseline pull has not happened, or tile 1's tokens are still placeholders at build time, the section is **omitted entirely, id included**. It is never shown empty, never "coming soon," never estimated. Other tiles render only if all their tokens are real. Nothing links to `#proof`.

**Layout.** `05` component: proof strip (`ProofStrip`, `StatTile`, #c-stat-tile). Up to four stat tiles (2 × 2 on mobile), each with its own window line, then a source line and a caveat line. No icons, counters, or animation.

| Element | Copy |
|---|---|
| H2 | What the system did on our own phones |
| Subhead | Homets Air and Heat, measured in our own ServiceTitan. [HOMETS_WINDOW] |
| Source line | Source: Homets Air and Heat's own ServiceTitan reports. Homets is owned by Techeo's founder and is not a client. Rounded toward the less flattering figure. |
| Caveat line | Ratios and medians only. We don't publish Homets' revenue, call volume, or job counts, because Homets' local competitors read this page too. What the system did at Homets depends on Homets' team and market; yours will depend on yours. |
| Link | How we run Homets → `/#operator` |

The source line is `10` #endorsements' text, word for word: it puts the common-ownership disclosure beside the figures, as the FTC's material-connection rule expects, rather than relying on the footer.

| Tile | Label | Value | Window (`StatTile` part 5) |
|---|---|---|---|
| 1 | Booking rate, qualified callers | [HOMETS_BOOKING_RATE_FROM] → [HOMETS_BOOKING_RATE_TO] | [HOMETS_WINDOW] in full |
| 2 | Inbound calls answered, after | [HOMETS_ANSWER_RATE] | The After period of [HOMETS_WINDOW] only, for example "Jul–Sep 2026" |
| 3 | Marketplace leads never called | [HOMETS_UNTOUCHED_FROM] → [HOMETS_UNTOUCHED_TO] | [HOMETS_WINDOW] in full |
| 4 | Median time to first call, marketplace leads, after | [HOMETS_SPEED_TO_LEAD_MEDIAN] | The After period of [HOMETS_WINDOW] only |

**Token formats.** These follow `12` #numbers item 4, because each token has one value in `06`'s `PLACEHOLDERS` and renders as the same string on every page (`04` #new-tokens). Rates and shares of 1% or more are whole percentages, rounded toward the less flattering value (brief D7): a higher-is-better "after" rounds down ("52.9%" → "52%") and its "before" rounds up; a lower-is-better "after" rounds up and its "before" rounds down. A nonzero rate or share that a whole number would turn into 0 gets one decimal ("0.4%"); "0%" is shown only for a true zero. The untouched tokens are **a share of marketplace leads ("9%" → "0.4%", or "0%" only if none were missed), never a count**, which would be an absolute. The speed token is a median duration in whole minutes, rounded up because lower is better ("4.1 min" → "5 min"), and "under 1 minute" only when the median is under one minute; if it covers only Angi, the one marketplace ServiceTitan measures today (`playbook.speed-to-lead`), tile 4 reads "Median time to first call, Angi leads, after." [HOMETS_WINDOW] **must be entered exactly as "Before: {period}. After: {period}."** (for example "Before: Jan–Mar 2026. After: Jul–Sep 2026."), so the build can split it: tiles 1 and 3 show both periods, and tiles 2 and 4, which hold a single after-period value, show only the After period. A build that can't split the token fails.

**Acceptance:** with tile 1 unfilled, the built HTML has no `id="proof"` and no text from this section. Each tile's HTML contains its own window text, so a screenshot of one tile keeps its dates (D7). The source line matches `10` #endorsements word for word. The founder signs off each figure against its report, and the screenshots (customer data blurred) are filed in `10`'s claims ledger before deploy.

### 3 · Where booked jobs leak `#leak`

**Purpose.** Show that the problem is money already spent, at four points the owner can check this week, each framed as a system failure. **Layout.** `05` component: leak cards, 2 × 2 (stacked on mobile), each with an H3, a body, and a "We measure" line in the numbers style.

| Element | Copy |
|---|---|
| H2 | Where booked jobs leak |
| Intro | A job gets booked only if the call is answered, returned fast, and handled well. Shops lose money at four points, and none shows up in a traffic report. |

| H3 | Body | We measure |
|---|---|---|
| The call nobody answered | A homeowner with no heat calls you first. It rings out, so they call the next company on the list. You paid for a call that went to voicemail. | Answer rate and time to answer, by hour and day. |
| The lead nobody called back fast | Web forms and marketplace leads don't ring. On a busy day they sit, while the homeowner takes calls from every other shop that got the same lead. | Minutes from submission to a human voice, by lead source. |
| The qualified caller who didn't book | They're in your area, they need work you do, and they hung up without an appointment. Usually a price question had no written answer, or there was no clear next step. | Booking rate on qualified callers, and the moments the others were lost. |
| The paid lead nobody touched | You paid Angi, Thumbtack, or Yelp for it, and nobody ever called. It's the easiest leak to miss, because it never rings. | Paid leads with no first call, and bad leads never disputed for a credit. |

| Element | Copy |
|---|---|
| Closing line | None of these is a people problem. Each one is a missing standard, a job nobody owns, or a lead nobody can see is late. |
| Links | Put a number on yours → `/#calculator` · Have us call your office → `/teardown` |

**Acceptance:** the four measures match `techeo.audit` #workstreams; no sentence names a role as the cause; each card passes the swap test (`techeo.web.strategy` R4).

### 4 · Mini calculator `#calculator`

**Purpose.** Turn the owner's own three numbers into a monthly figure, on the page, with no email required. It does arithmetic and never diagnoses (`techeo.web.strategy` #anti-goals 4–5). `08` #calculator owns the formula, ranges, rounding, and validation; the ranges written into the copy below are `08`'s, and change when `08`'s do. The island is the site's only JavaScript (D3).

**Layout.** `05` components: calculator island, formula block (server-rendered, always visible), result panel, inline email form.

| Element | Copy |
|---|---|
| H2 | What is your phone costing you? |
| Intro | Three numbers from your own ServiceTitan reports. The math runs on this page. Nothing you type is sent anywhere unless you ask us to email it to you. |
| Input 1 | **Qualified calls per month.** Help: Calls from people in your service area who need work you do. Leave out calls about existing jobs, vendors, and wrong numbers. |
| Input 2 | **Booking rate on those calls (%).** Help: Booked calls divided by qualified calls. Not sure? Enter your best guess. |
| Input 3 | **Average revenue per booked job ($).** Help: Revenue from booked calls divided by booked calls, over a normal quarter. Count replacements sold on repair calls. |
| Target line | We compare your rate with 70%, the standing booking-rate target we hold our own desk to at Homets. It's our target, not an industry average. |
| Button | Show my number (the result updates only on this button or Enter, `08`) |

| Result state | Copy |
|---|---|
| Empty | Enter your three numbers to see what a 70% booking rate would be worth to you. |
| Below 70% | **About {monthly} a month.** At a 70% booking rate, you'd book about {extraJobs} more jobs a month from the calls you already get. At your average of {avgRevenue} a job, that's about {monthly} a month, or {annual} a year. *This is arithmetic on your three numbers, rounded down. It isn't a diagnosis. The Engine Audit measures the real figure from your ServiceTitan data and adds the leaks this can't see: missed calls, slow callbacks, and paid leads nobody touched.* |
| Below 70%, monthly figure under $100 (`08`'s `monthly_shown` = 0) | As "Below 70%," but the headline reads **Less than $100 a month.** and the sentence ends "that's less than $100 a month, or about {annual} a year" when `08`'s `annual_shown` is above 0, and "that's less than $100 a month, or less than $1,000 a year" when it is 0 (`08` #calculator worked example 8). |
| Under one job (`08`'s UNDER_ONE_JOB) | **Less than one booked job a month.** At {calls} qualified calls, the gap between {rate}% and 70% is under one job. The leaks this can't see are missed calls, slow callbacks, and paid leads nobody touched. A free phone teardown checks the first two at no cost. |
| 70% or higher | **Your phone may not be where the money is.** You're at or above 70%, the target we hold our own desk to. The leaks this can't see are missed calls, slow callbacks, and paid leads nobody touched. A free phone teardown checks the first two at no cost. |
| Inputs edited after a result | Your numbers changed. Press Show my number to update. (The email form hides until the result is recomputed, `08`.) |
| Result CTA, below 70% | OPEN: Book an Engine Audit · WAITLIST: Reserve an audit slot → `/audit` |
| Result CTA, under one job, and 70% or higher | Get a free phone teardown → `/teardown` |
| Under the CTA, WAITLIST | season: New audits open {next opening}. Reserving is free. · capacity: We're not taking new audits until at least {capacity date}. Reserving is free. |
| Error, calls | Enter a whole number of calls from 1 to 10,000. |
| Error, rate | Enter your booking rate as a number from 0 to 100. |
| Error, rate with more than one decimal place | Use at most one decimal place, like 52.5. |
| Error, rate entered as a fraction (between 0 and 1, with a decimal point) | Enter the rate as a percentage: 52 for 52%. |
| Error, revenue | Enter your average revenue per booked job in dollars, from $10 to $50,000. |

**Formula block** (H3 "The math"; server-rendered):

> Qualified calls a month × (70% − your booking rate) = extra booked jobs a month
> Extra booked jobs × your average revenue per booked job = extra revenue a month
> Extra revenue a month × 12 = extra revenue a year
>
> Example only, with made-up inputs that are not an industry average and not Homets' numbers: 300 qualified calls × (70% − 50%) = 60 extra booked jobs. 60 × $400 = $24,000 a month, or $288,000 a year, shown as $280,000.

The "shown as" clause makes the example agree with what the calculator displays for the same inputs under `08`'s rounding (`08` worked example 1), so a visitor who types them in sees the page's own figure.

No-JavaScript note, shown only if the island fails: "The calculator needs JavaScript, which is off or blocked in your browser. The math above works the same by hand."

**Email form** (`form_calculator_email`, both states; appears only after a result; confirms inline):

| Element | Copy |
|---|---|
| Prompt | Want this in your inbox? |
| Label · button | Email address · Email me this |
| Consent statement, beside the button | `10` #consent-texts `calc-v1`, word for word. This deck carries no consent wording of its own. |
| Loading · success | Sending… · Sent. It's from Techeo and should arrive in a minute or two. If it doesn't, check your spam folder. |
| Bad address | Enter an email address like name@yourcompany.com. |
| Send failed | That didn't send, and it's our fault. Try again in a minute, or call [TECHEO_PHONE]. |

**Data.** 70% is from `content/sops/csm/kpis.md`; the example inputs are `techeo.offers` #pricing-rationale's labeled assumptions, and `08` confirms the example matches its formula and rounding.

**Acceptance:** with JavaScript off, the H2, intro, target line, formula, and example are in the raw HTML. `09` confirms no analytics event carries an input value, so the intro's promise is true. "Example" is in the same sentence as every example figure. Results say "about" (or "less than") and round down. Typing the example inputs (300, 50, 400) shows $24,000 a month and $280,000 a year, matching the example. Every `08` state (empty, below 70%, under $100, UNDER_ONE_JOB, AT_TARGET, inputs edited, each error) has copy here. `calc-v1`'s "once. No calls and no newsletter." binds `08` (open question 6).

## Home sections 5–7: engines, ladder, audit {#home-offer}

### 5 · The four engines `#engines`

**Purpose.** Name what Techeo runs, under MEO, Booking first, with the reason. It outlines claim 2. **Layout.** `05` component: engine cards in D6 order. The Booking Engine card is full width and first; the other three sit in a row below it (stacked on mobile).

| Element | Copy |
|---|---|
| H2 | Four engines. The Booking Engine comes first. |
| Intro | We call the whole system MEO: Marketing Engine Optimization. It runs four engines. Two have acronyms you already know; two have plain names, because more acronyms would help nobody. |

| H3 | Covers | What we do |
|---|---|---|
| The Booking Engine | Answer rate, speed to lead, booking rate, membership attach. | Turn the calls and leads you already pay for into booked jobs: written call standards adapted to your prices, a callback clock on every lead source, five scored calls a week with a coaching note, a weekly report, and monthly live training. **Why it's first:** it pays back from money you've already spent, with no new ad spend. |
| Search (SEO) | The local map results, your Google Business Profile, service-area pages, technical health. | Get you found when a homeowner searches. Two new service-area pages a month for towns you actually serve, Google Business Profile upkeep, a steady routine for asking every customer for a review, and technical fixes worked in order. |
| Answer (AEO) | Being named inside AI assistants and AI search results. | When a homeowner asks an AI assistant who to call for AC repair in your town, does it name you? We ask the same 12 questions every month and fix what decides it: consistent business facts, structured data, and pages that answer in the first sentence. |
| The Ads Engine | Local Services Ads, Google Ads, marketplace spend, budget pacing. | Spend less to book more. Weekly search-term cleanup, budget pacing against your own season, and reviewing every Local Services Ads lead, so the bad ones are reported to Google and checked against its automatic credits. Every dollar stays on your accounts and your card. |

| Element | Copy |
|---|---|
| Closing rule (emphasized) | We don't scale demand into a broken phone. Search, Answer, and Ads come after the Booking Engine is working, or after the audit shows it already is. |
| Link | The audit scores all four → `/#audit` |

**Optional standard excerpt** (claim 2's proof). `05` component: pull quote. It ships only once the Homets → Techeo license (`techeo.legal` #ip) is executed; otherwise omit the block, not the section.

> "First touch means a call placed, not a lead read. Opening the notification is not a touch. Adding it to a list is not a touch. Dialing is."
> From the Homets Air and Heat speed-to-lead standard, word for word.

**Acceptance:** the Booking Engine is first in DOM and visual order at every width; names follow D6 exactly; every "What we do" item appears in `techeo.delivery` #rhythm or `techeo.offers` rung 2; the review line describes asking, never buying, gating, or filtering reviews.

**LSA leads, a correction for two source documents.** Google replaced manual Local Services Ads lead disputes with automated lead credits in mid-2024: advertisers now rate or report a lead in the lead inbox, and Google reviews charged leads and applies credits itself (Google Local Services Help, "About Automated Local Services Ads lead credits"; re-verify before launch). This deck therefore never says "dispute" for LSA. `techeo.delivery` #rhythm ("LSA dispute filing") and `techeo.audit` #workstreams ("LSA dispute hygiene") are flagged for the same correction; until they change, the LSA item maps to those rows.

### 6 · How it works, and what it costs `#how-it-works`

**Purpose.** The ladder, with every price D6 allows in v1, so the nav can honestly say "Pricing." **Layout.** `05` component: ladder, four numbered steps (vertical on mobile, a row on desktop), with one price line spanning steps 3 and 4.

| Element | Copy |
|---|---|
| H2 | How it works, and what it costs |
| Intro | Four steps. Each one tells you whether the next is worth it, and you can stop after any of them. |

| H3 | Price or term | Body | CTA |
|---|---|---|---|
| Booking Rate Teardown | Free | We call your office three times as a homeowner, at different hours, score each call against our written standard, and send you a 15–20 minute walkthrough. Nothing to prepare, no staff time. | Get a free phone teardown → `/teardown` |
| Engine Audit | $1,500 · 7 business days | All four engines scored, and the revenue you're losing priced from your own data. Credited in full against the first month of any retainer signed within 30 days. | OPEN: Book an Engine Audit · WAITLIST: Reserve an audit slot → `/audit` |
| Booking Sprint | 90 days, then month-to-month | We install the Booking Engine: your written call standards, lead-source playbooks, callback clocks measured in ServiceTitan, weekly scoring and reports, and monthly training. After 90 days, leave with 30 days' notice. | — |
| Demand Engine | Month-to-month | All four engines, once the phone is booking. Ad spend is billed to your card on your accounts and never passes through us. | — |

| Element | Copy |
|---|---|
| Price line spanning steps 3–4 | Retainers from $3,500/month. The audit tells you which one fits and what it costs, before you sign anything. |
| Teardown microcopy, WAITLIST | season: Requests made now are worked from {next opening}, in order. · capacity: Requests made now are worked from {capacity date}, in order. |

**Acceptance:** all three v1 prices appear in text; if one is removed, `02` relabels the nav "How it works." The Demand Engine's own price, design-partner pricing, and the Attribution Layer never appear (D6).

### 7 · The Engine Audit, summarized `#audit`

**Purpose.** Sell the one product the site sells, in one screen. **Layout.** `05` component: offer panel (copy left, facts and CTA right; stacked on mobile).

| Element | Copy |
|---|---|
| H2 | The Engine Audit |
| Subhead | $1,500. 7 business days. Your numbers, not ours. |
| Body | We test your phones with four calls at deliberately awkward hours and one web form timed to the minute. Then we pull your data, score all four engines, and put one number on page 2: the revenue you're losing each year, built only from your data, rounded down, with every step of the arithmetic shown. |
| Workstreams | Booking Engine, 40% · Search (SEO), 20% · Answer (AEO), 15% · The Ads Engine, 15% · Money, 10% |
| Facts | A 12–18 page report and a recorded 30-minute readout · Exactly three priorities for your next 90 days · Credited in full against the first month of any retainer signed within 30 days · Score 86 or higher and the report says you don't need us |

| Element | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| CTA → `/audit` | Book an Engine Audit | Reserve an audit slot | Reserve an audit slot |
| Line under CTA | See what's inside first → `/audit` | New audits open {next opening}. | We're not taking new audits until at least {capacity date}. |

**Acceptance:** every figure matches `techeo.audit` and D6.

## Home sections 8–10: operator, promises, fit {#home-trust}

### 8 · Built by an operator `#operator`

**Purpose.** Prove the messenger (claim 1) and disclose the Homets affiliation in full before anyone asks (D8). Organizers use this section to introduce Blake. **Layout.** `05` components: large founder portrait, signed letter, operational photo row, disclosure list, organizer bio box. Mobile order: H2, portrait, letter, disclosure list, photos, bio box.

| Element | Copy |
|---|---|
| Eyebrow | From the founder |
| H2 | Built by an operator |

**Letter:**

> I'm Blake [FOUNDER_SURNAME]. I own Homets Air and Heat, an HVAC company in [HOMETS_METRO], and I still run it. Techeo exists because of what we found when we looked hard at our own phones.
>
> As our call volume grew, the phones filled up, and the leads that don't ring, web forms and marketplace leads, quietly became nobody's job. We were paying for leads nobody called. Nobody was careless. There was no written standard, nobody was assigned, and nothing made a late lead visible.
>
> So we wrote it all down: how we answer, what we ask, when we quote the diagnostic fee, how fast every lead source gets a call back, and who owns marketplace leads on every shift. We score calls every week against a rubric where every point traces back to a written standard, and we coach from the scores.
>
> That system is what Techeo installs in your shop, adapted to your prices, your policies, and your lead sources, and measured in your ServiceTitan. Before we charged anyone, we ran the Engine Audit on Homets' own phones, unannounced.
>
> I'm not leaving Homets, and that shapes how Techeo works. We close to new clients in peak season because Homets needs me then, the same way your shop needs you. And I don't sell anything we haven't run on our own phones first.

**Signature:** Blake [FOUNDER_SURNAME] · Founder, Techeo · Owner, Homets Air and Heat

**Conditions.**

- Paragraph 2 is a real Homets weakness (`content/playbooks/speed-to-lead.md` #why-it-broke), allowed by R1 only once fixed. If [HOMETS_UNTOUCHED_TO] is not 0% or the founder cannot attest the fix, it becomes:

  > Running Homets taught me that most of the money a shop loses on the phone is lost quietly: a call that rolls to voicemail at lunch, a web form nobody sees until morning, a paid lead that never gets a call. None of it shows up in a marketing report, and none of it gets fixed without a written standard and someone who owns it.

- "Before we charged anyone, we ran the Engine Audit on Homets' own phones, unannounced" ships only after the Week 4 self-audit (`techeo.plan90`).

**Disclosure list** (H3 "What you should know before you ask"):

| Title | Copy |
|---|---|
| Same owner. | Techeo LLC and Homets Air and Heat are separate companies with the same owner: me. They have separate bank accounts, cards, and books. |
| No clients near Homets. | We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets. That rule has no exceptions. |
| One client per market per trade. | If we work with you, we don't work with another shop in your trade in your market. The contract names your market, so "nearby" is never an argument. |
| Your data never helps Homets. | Nothing we learn from your accounts informs Homets' pricing, hiring, or where Homets goes next. Your ServiceTitan access is used for your engagement and nothing else. |
| You hear it first. | If Homets ever moves toward your market, you hear it from me before it happens, and you can leave your contract without penalty. |
| No poaching, either way. | Neither Techeo nor Homets Air and Heat will hire your technicians or office staff, and you agree not to hire ours. It's in the contract. |
| No borrowed staff. | No Homets employee works on your account as part of their Homets job. Anyone who does Techeo work is contracted and paid by Techeo. |

Link, only if the license covers Homets brand use (`techeo.web.ia` open question 3): "Homets Air and Heat's website" → external.

**Photos** (D9: real photos, releases on file, no customer information; adjust alt text to the final shot):

| Photo | Caption | Alt text |
|---|---|---|
| Founder portrait | — | Blake [FOUNDER_SURNAME], founder of Techeo and owner of Homets Air and Heat. |
| CSM desk | The Homets customer service desk. | The Homets Air and Heat customer service desk, with headsets and call screens. Screens show no customer details. |
| Dispatch board | A Homets dispatch board. Customer details are blurred. | A Homets dispatch board with the day's jobs; customer names and addresses are blurred. |
| Service truck | A Homets service truck. | A Homets Air and Heat service truck. |

**Organizer bio box** (H3 "For event organizers and podcast hosts"; third person, no pronouns):

> Blake [FOUNDER_SURNAME] owns Homets Air and Heat, an HVAC company in [HOMETS_METRO], and founded Techeo to install the same call-handling system in HVAC and plumbing shops outside that market. Techeo's work starts with the calls a contractor already pays for and loses on the phone.

Link: "Download a portrait (JPG)" → the portrait file (`06` hosts; `10` confirms the release covers it).

**Data.** [FOUNDER_SURNAME], [HOMETS_METRO], [EXCLUSION_RADIUS_MILES]; portrait and two to four operational photos (`05` shot list); likeness releases (`10`); the Homets → Techeo license covering brand and photo use.

**The Homets half of the non-solicit.** The MSA is signed by Techeo LLC, so it binds Homets only if Homets signs a non-solicit joinder to it (`techeo.legal` #contracts; open question 14). If the joinder isn't signed by launch, the sentence becomes "Techeo won't hire your technicians or office staff, and you agree not to hire ours. It's in the contract." here, in `#promises`, and in `#faq-homets-conflict`, all at once.

**Acceptance:** the founder confirms each factual sentence of the letter aloud, and any that fails is cut, not softened. The seven disclosure items match `techeo.guardrails` #coi and the counsel-reviewed MSA. No Homets employee is named or identifiable by title. No photo shows customer details at 200% zoom. An organizer can write an accurate two-sentence introduction from this section alone.

### 9 · What we put in writing `#promises`

**Purpose.** Claim 3 in full. Only promises backed by `techeo.offers`, `techeo.legal`, or the audit's written rules. **Layout.** `05` component: promise list, two columns on desktop, one on mobile. No seal or badge icons.

| Element | Copy |
|---|---|
| H2 | What we put in writing |
| Intro | Every line below is a clause in the contract you'd sign, or a rule of the audit. Ask to read the contract before you sign anything, and check. |

| Title | Body | Backed by (not published) |
|---|---|---|
| You own every account. | Google Ads, Local Services Ads, Google Business Profile, GA4, call tracking, and your CRM stay in your name and on your card. We're added as a manager. We never hold an account for you. | `techeo.legal` account-ownership clause |
| Ad spend never passes through us. | Google and the lead platforms bill your card directly. We never front your spend, hold it, or add to it. | `techeo.offers` #terms; `techeo.legal` ad-spend clause |
| 90 days, then month-to-month. | The Booking Sprint's first term is 90 days. After that, every retainer runs month-to-month, and you can leave with 30 days' written notice. | `techeo.offers` #terms; term clause |
| Targets, never promises. | Every result we name is a target, written down with what it depends on: your data, a named owner on your side, and your team at training. Nobody can honestly promise you a booking rate. | `techeo.legal` results clause |
| One client per market per trade. | Your market is defined in the contract by name, as a TV market or a list of counties. We won't work with another shop in your trade inside it. | `techeo.gtm` #exclusivity; exclusivity clause |
| We tell you if you don't need us. | If your audit scores 86 or higher, or the honest gap is small, the report says so and recommends no retainer. | `techeo.audit` #scoring, #gap |
| Full handover when you leave. | Your standards and playbooks as editable documents, your dashboards, written confirmation that every account is yours, and a 30-minute handover call, whatever the reason you leave. | `techeo.delivery` #offboarding; offboarding clause |
| Your team and your data stay yours. | Neither Techeo nor Homets Air and Heat will hire your technicians or office staff, and you agree not to hire ours. It's in the contract. Your data is never used for Homets. | Mutual non-solicit clause, plus Homets' joinder to it (open question 14); data clause; `techeo.guardrails` #coi item 5 |

**Acceptance:** each item maps to a clause in the counsel-reviewed MSA or a written rule in the audit template. An item with no clause behind it at launch is removed, not reworded. The MSA is not linked.

### 10 · Who it's for, and who it isn't `#fit`

**Purpose.** Publish the ICP and the decline list honestly, so poor fits screen themselves out and vendors know whom to send. **Layout.** `05` component: two-column fit table ("For" first when stacked), then a short "why" paragraph, a vendor line, and a CTA.

| Built for shops that… | Not a fit if you… |
|---|---|
| Do residential HVAC, residential plumbing, or both. | Are within [EXCLUSION_RADIUS_MILES] miles of Homets. No exceptions, ever. |
| Bring in $1.5M to $15M a year and run 3 to 25 trucks. | Are a new business without steady lead flow yet. There's nothing to fix yet; come back when the phone rings. |
| Run their jobs on ServiceTitan. | Mainly want a new website, a logo, or social media posts. We don't do that work; we'll point you to someone who does and take no referral fee. |
| Already pay for leads: Local Services Ads, Google Ads, Angi, Thumbtack, or Yelp. | Want us to hold your ad accounts. We won't, even if you ask. |
| Have an owner who still signs the checks and can decide in one meeting. | Are shopping for the lowest-priced monthly SEO package. That's a real product. It isn't ours. |
| Are more than [EXCLUSION_RADIUS_MILES] miles from Homets Air and Heat. | Would rather we didn't call your office as a customer would. The audit starts there. |
| | Aren't on ServiceTitan, for now. We'll keep your name and tell you if that changes. |

| Element | Copy |
|---|---|
| H2 | Who it's for, and who it isn't |
| Why paragraph | Under $1.5M there usually isn't enough lead flow to recover. Over $15M there's usually an in-house marketing lead and a purchasing process. ServiceTitan is where we measure everything we promise. [Why ServiceTitan] → `/#faq-servicetitan` |
| Vendor line | Referring a client? Send them to techeo.com/teardown. It's free, it needs only their published number, and nobody on their team has to do anything. |
| CTA | Not sure? Start with a free phone teardown → `/teardown` |

**Acceptance:** the lists cover every line of `techeo.positioning` #icp and #anti-icp; no line insults the reader.

## Home section 11: FAQ {#home-faq}

**Purpose.** Answer the objections that would otherwise eat a discovery call, answer-first, so people and answer engines can quote them. **Layout.** `05` component: FAQ list. H2 "Questions owners ask." Each question is an H3 carrying the id shown. Answers are in the HTML whether expanded or not (native `<details>` is acceptable; a script accordion is not). The first sentence of every answer stands alone (`07` #answer-first): it names Techeo, Blake, or the offer, restates the answer, and never leans on the question ("Yes," "No," "Because," "Then"). `07` generates FAQ markup from all 18, and answer engines quote single passages. Ids are frozen once published.

**`#faq-price` · What does it cost?**
Techeo's free phone teardown costs nothing, and the Engine Audit is $1,500, credited in full against the first month of any retainer you sign within 30 days of your readout. Retainers start at $3,500/month. Ad spend is separate: Google and the lead platforms bill your own card, never us. We publish the price because you shouldn't need a sales call to find it.

**`#faq-contract-length` · How long is the contract?**
The Booking Sprint has a 90-day first term; after that, everything is month-to-month with 30 days' written notice. Ninety days is what it takes to agree a baseline, write your standards, train your team, and measure the change. The Engine Audit is a one-off purchase under our online purchase terms, with no ongoing commitment.

**`#faq-account-ownership` · Who owns the accounts?**
You own every account Techeo works in: Google Ads, Local Services Ads, Google Business Profile, GA4, call tracking, and your CRM, in your name and on your card. We're added as a manager and removed when you say so. If you leave, you get your standards and playbooks as editable documents, your dashboards, and written confirmation that every account is yours. It's a contract clause, not a courtesy.

**`#faq-homets-conflict` · You own an HVAC company. Aren't you my competitor?**
Techeo is not your competitor if you're a client: we take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat, and we work with one client per market per trade, in writing. Your data is never used for Homets. If Homets ever moves toward your market, you'll hear it from Blake first and can leave without penalty. Neither Techeo nor Homets Air and Heat will hire your technicians or office staff, and you agree not to hire ours. It's in the contract. The upside: the system we install runs Homets' own phones.

**`#faq-exclusion-zone` · What if my shop is inside the exclusion zone?**
Techeo can't work with shops inside the exclusion zone, and won't test their phones, even for a free teardown. Anything we learned about a business near Homets could look like it helped Homets, and the rule only works with no exceptions. Our audit and teardown forms check your location first, so you'll know before you pay or wait.

**`#faq-servicetitan` · Why do I have to be on ServiceTitan?**
Techeo requires ServiceTitan because everything we promise is measured there. Booking rate, speed to lead, and cost per booked job come straight from your ServiceTitan data, and our standards are built around its records. On another system you'd pay us to rebuild the measurement instead of for results, and in our first year we'd rather say no than do it badly. Leave your details anyway; we'll tell you if that changes.

**`#faq-why-not-seo-first` · Why don't you start with SEO?**
Techeo starts with the Booking Engine, not SEO, because more traffic into a phone that doesn't book buys more missed calls. The Booking Engine works on calls you already pay for, needs no new ad spend, and shows up in the monthly numbers you already track; search takes months to earn. The exception: if your audit shows a qualified-caller booking rate above 65%, your phone is close enough to our 70% target that we can start with Search, Answer, and Ads.

**`#faq-who-does-the-work` · Who actually does the work?**
Blake, Techeo's founder, does every audit, readout, training session, and scored call today. We don't resell another vendor's work. As we grow, the first task handed on will be call scoring, to a trained scorer using the same rubric under a confidentiality agreement covering your data. No Homets employee works on your account as part of their Homets job. Our phone is answered by a receptionist service on Techeo's own account; they book calls and do no client work.

**`#faq-audit-access` · What access does the audit need?**
The Engine Audit needs seven kinds of access, requested in one email right after you pay:

1. ServiceTitan: a read-only user, or a CSV export of 90 days of calls, jobs, revenue, and lead source
2. Google Business Profile: manager access
3. Google Ads and Local Services Ads: read access
4. Google Analytics and Search Console: read access
5. Call recordings from the last 30 days, if your phone system makes them. The test calls happen either way; you agreed to them when you booked.
6. Your lead sources, and what you spend on each per month
7. The name of the person who answers your phone most often

The 7 business days start when the last item arrives and your payment has cleared. The audit only reads; it changes nothing in your accounts.

**`#faq-call-recording` · Do you record my team's calls?**
Techeo doesn't record test calls to your office by default. When we test your phones, we take structured notes against our rubric during the call, because the person who answers hasn't agreed to be recorded, and in some states recording without every party's consent is illegal. We never publish a recording of any business. In a retainer, we score recordings your own phone system already makes, and the contract has you confirm they're made with the consent the law requires.

**`#faq-ad-spend` · How is ad spend handled?**
With Techeo, your ad spend stays on your own accounts and your own card. Google and the lead platforms bill your card directly, on accounts in your name. It never passes through Techeo, we never front it, and our fee isn't a percentage of it.

**`#faq-results-timeline` · How soon will I see results?**
The Booking Sprint runs on a fixed calendar: baseline agreed in writing in week 0, first live training in week 3, call scoring from week 4, the 90-day review in week 12. The target we write in is a qualified-caller booking rate up at least 10 points, or speed to lead inside the agreed callback time on 90% of marketplace leads, by day 90. It's a target, not a promise: it depends on your data access, a named owner on your side, and your team at training. Search takes longer; your audit will say how much.

**`#faq-peak-season` · What happens in peak season?**
Techeo stops taking new clients in peak season: from May 1 to September 6 and from December 1 to January 31, you can reserve an audit slot but not start one. Homets needs its owner in peak season, the same way your shop needs you. Existing clients keep their weekly scoring and reports straight through, and reservations are contacted in order within two business days of each opening.

**`#faq-my-team` · Will this make my CSRs look bad?**
Techeo's findings never blame a CSR. Every finding is about the system, never a person: a missing standard, a callback nobody owned, a price question with no written answer. Our notes say "the person who answered," never a name. Your team will read our work, and it's written knowing that.

**`#faq-callback-speed` · How fast do you call back?**
Techeo calls back the same business day, and by 10 a.m. the next business day for anything sent after 6 p.m. [TZ], on a weekend, or on a holiday. We sell speed to lead, so we measure our own. When we've met a faster standard for four weeks straight, this answer will change to the faster number, and not before. *(This is the live [SLA line] with Techeo named, so it stands alone. Version B: the first sentence becomes "Techeo calls back within 15 minutes, 8 a.m. to 6 p.m. [TZ], Monday to Friday, and by 10 a.m. the next business day outside those hours," and the last two become "We sell speed to lead, so we measure our own, every week." It switches with the SLA line, QA check 8.)*

**`#faq-current-agency` · I already have an agency. Do I have to drop them?**
You don't have to drop your agency to work with Techeo. The Booking Sprint works on what happens after the phone rings, not your ads, website, or search, so it can run alongside an agency you're happy with. If your audit shows ads or search leaking too, it says so, and you decide.

**`#faq-audit-refund` · Can I get my $1,500 back?**
Techeo refunds the $1,500 Engine Audit in two cases: if we find after you've paid that we should have turned you away (inside the exclusion zone, or your market's slot is taken), or if you change your mind before granting any access. Once access is granted and work has started, the audit isn't refundable; the credit against a retainer is the only concession. *(Ships only after open question 2 is decided; must match `/terms`.)*

**`#faq-homeowner` · I'm a homeowner. Can you fix my system?**
Techeo doesn't repair or install anything: we're a marketing and call-handling company for contractors. Please call a licensed contractor near you.

**Links:** "Engine Audit" in `#faq-price` → `/audit`; "free phone teardown" in `#faq-price` → `/teardown`. From v1.1, up to three answers may link an article (`02`).

**Acceptance:** all 18 ship with their ids (if `#faq-audit-refund` is undecided at launch, it is removed and its id reserved, and `/audit` follows `#price`'s fallback); every number is in `#numbers`; no answer names a competitor or promises a result. Each answer's first sentence contains "Techeo," "Blake," or an offer name (Engine Audit, Booking Sprint, Booking Engine, free phone teardown), and reads correctly with the question removed.

## Home section 12: final CTA {#home-start}

**Purpose.** End with the one action that fits the season, and give the reason once, as a strength. In WAITLIST the reservation form is inline. **Layout.** `05` component: closing CTA panel; in WAITLIST it holds `form_audit_reserve` with the field copy from `#audit-page`.

| Element | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| H2 | Start with the audit. | Reserve an audit slot for {next opening}. | Reserve the next audit slot. |
| Reason (emphasized) | — | We run an HVAC company too. In peak season our trucks come first, and so would yours. | We take on a small number of shops at a time, so the work stays good. |
| Body | $1,500, 7 business days, credited in full against the first month of any retainer signed within 30 days. A few questions come before checkout, so we never take payment from a shop we'd turn away. | New audits open {next opening}. Reserve now: no payment, no obligation. We contact reservations in order, within two business days of opening, to book a 30-minute call with Blake. | We're not taking new audits until at least {capacity date}. Otherwise as season. |
| Action | Book an Engine Audit → `/audit` | `form_audit_reserve` inline; button "Reserve my slot" | Same as season |
| Secondary | Not ready? Get a free phone teardown → `/teardown` | Rather start smaller? Queue a free phone teardown → `/teardown` | Same as season |
| Phone line | Or call [TECHEO_PHONE] and we'll book a 30-minute call with Blake. | Questions now? Call [TECHEO_PHONE]. The phone stays answered all year. | Same as season |

**Acceptance:** the reason sentence appears once on the page, and no other section apologizes for WAITLIST. The form posts without JavaScript and 303s to `/thanks/audit-reserved`. The capacity copy gives no hint of why capacity is full.

## `/audit` — the Engine Audit {#audit-page}

**Purpose.** Sell the $1,500 audit in OPEN and take reservations in WAITLIST, qualifying before payment so we never take $1,500 from a shop we'd decline. Answer every audit question on the page.

- **SEO title (53 characters):** `Engine Audit for HVAC & Plumbing Contractors | Techeo`
- **Meta description (148 characters):** `A $1,500, 7-business-day audit of your phones, search, AI answers, and ads, priced in your own numbers. Credited in full if you sign within 30 days.`

**Template.** T2; header CTA hidden; banner in WAITLIST. **Outline** (ids fixed whatever the state):

```
H1  The Engine Audit
H2  What you get #what-you-get · The five workstreams #workstreams · The Gap Statement #gap-statement
H2  A look inside the report #sample · What the score means #scoring · Timeline #timeline
H2  The access we need #access · Price, credit, and refunds #price · We say no before we charge #decline
H2  (by state) Book your Engine Audit / Reserve your audit slot #book
H2  Audit questions #audit-faq · Who runs the audit #who-runs-it
```

### Hero

**Layout.** `05` components: page hero, fact strip, primary button (jumps to `#book`), secondary link, phone line.

| Element | Copy |
|---|---|
| Eyebrow | For residential HVAC and plumbing contractors |
| H1 | The Engine Audit |
| Subhead | We test your phones, score all four engines, and put one number on the revenue you're already paying for and losing, built only from your data, rounded down, with the arithmetic shown. |
| Fact strip | $1,500 · 7 business days from access granted · Credited in full against a retainer signed within 30 days · Card or US bank account (ACH) |
| Secondary link | Not ready? Get a free phone teardown → `/teardown` |
| Phone line | Rather talk first? Call [TECHEO_PHONE]. |

| Element | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| Primary button → `#book` | Book an Engine Audit | Reserve an audit slot | Reserve an audit slot |
| Line under subhead | — | New audits open {next opening}. Reserve now: no payment is taken, and reservations are contacted in the order they arrive. | We're not taking new audits until at least {capacity date}. Reserve now: no payment is taken. |

### What you get `#what-you-get`

**Purpose.** List every deliverable, so the buyer knows exactly what $1,500 buys. **Layout.** `05` `RuleList` (#c-rule-list), plain items. **Data.** `techeo.audit` #deliverable. **Acceptance:** each item matches `techeo.audit` #deliverable, and the page count and readout length match `#numbers`.

- A 12–18 page report (PDF) with your Engine Score and a score for each engine
- The Gap Statement: the revenue you're losing each year, with every step shown
- Your own test calls, scored line by line, with the two worst moments quoted word for word from our notes
- Exactly three priorities for your next 90 days, in order
- A recorded 30-minute readout call with Blake
- What we'd do next, which retainer that is, and what it costs, or a plain recommendation to do nothing with us

### The five workstreams `#workstreams`

**Purpose.** Show what the audit checks in each engine, and why the Booking Engine weighs most. **Layout.** `05` `DataTable` (#c-table), three columns, with the caption "The five workstreams and their weights." **Data.** `techeo.audit` #workstreams. **Acceptance:** weights and checks match `techeo.audit` #workstreams (apart from the LSA wording flagged under `#engines`); no scenario, script, or call time appears.

Intro: "Each engine gets a score from 0 to 100. The weights make one composite Engine Score."

| Workstream | Weight | What we check |
|---|---|---|
| The Booking Engine | 40% | Four test calls at deliberately awkward hours, and one web form timed to the minute. From your data: answer rate, time to answer, abandoned calls, booking rate on qualified callers, speed to lead by source, membership attach, and paid leads never called. |
| Search (SEO) | 20% | Your Google Business Profile; reviews against your top three local competitors; rank across 15 buying-intent searches; service-area pages against the towns you serve; site health; consistent business details. |
| Answer (AEO) | 15% | Twelve fixed questions a homeowner might ask an AI assistant about your trade in your town: whether you're named, who is, and which sources the answers cite. |
| The Ads Engine | 15% | Local Services Ads position and when the budget runs out, bad leads never reported, and whether Google credited them, wasted Google Ads search terms, whether a "conversion" means a booked job, and spend against your season. |
| Money | 10% | Cost per booked job by source, revenue per booked call, and spend against demand across the year. The Gap Statement is built here. |

Note: "The Booking Engine carries 40% of the score because it's the part most agencies can't measure. It takes someone who has run a customer service desk." **Never publish** the scenario scripts or their times; an owner who knows them can coach for them.

### The Gap Statement `#gap-statement`

Intro: "One number, on page 2 of your report: what your shop is losing each year from four sources, using only your numbers." `05` component: formula block.

```
  Qualified calls × (70% − your booking rate) × your average revenue per booked job
+ Paid marketplace leads never called × your marketplace close rate × your average revenue per job
+ Local Services Ads jobs missed because your budget ran out before closing time × your average revenue per LSA job
+ Google Ads money spent on searches that were never going to book
= Your gap, per year
```

| Rule | Copy |
|---|---|
| 1 | **Every input is yours.** No industry averages anywhere in the report. |
| 2 | **Rounded down, always.** A gap that works out to $340,000 is reported as $300,000. |
| 3 | **Every step shown,** so you can check the math yourself. |
| 4 | **A small gap is a real answer.** If the honest number is small, the report says so and recommends no retainer. |
| Note | 70% is the standing booking-rate target we hold our own desk to at Homets. It's our target, not an industry average. |

**Acceptance:** the formula matches `techeo.audit` #gap in meaning, line for line, and the Week 3 spreadsheet runs the same arithmetic.

### A look inside the report `#sample`

**Spec.** Three static images from the real PDF template (Week 3, revised Week 8), never from Homets' or a client's report. Figures become labels or grey bars, quotes become grey bars, and no company, city, or person appears. Each is watermarked "Sample. Figures removed." Stacked on mobile, three across on desktop, each linking to a larger static image; no lightbox (D3). `05` component: document preview.

| Element | Copy |
|---|---|
| Caption | Sample pages from the Engine Audit template. Figures removed. |
| Alt, page 1 | Sample Engine Audit page 1: a composite Engine Score with a bar for each of the four engines. Figures removed. |
| Alt, page 2 | Sample Engine Audit page 2: the Gap Statement, four lines of arithmetic adding up to a yearly total. Figures replaced with labels. |
| Alt, page 3 | Sample Booking Engine page: one test call scored line by line against the rubric, with two quoted moments. Quotes and figures removed. |

**Acceptance:** OCR of each image finds no digits other than page numbers and the weights, and no proper noun but "Techeo" and "Engine Audit."

### What the score means `#scoring`

**Purpose.** Tell the buyer what each score band means and what we'd recommend, including nothing. **Layout.** `05` `DataTable` (#c-table), three columns. **Data.** `techeo.audit` #scoring. **Acceptance:** the four bands and recommendations match `techeo.audit` #scoring; the 86–100 row recommends nothing from us.

Intro: "The score points at your weakest engine and gives you a number to beat at 90 days. The Gap Statement is the number that matters."

| Engine Score | What it means | What we recommend |
|---|---|---|
| 0–40 | The phone is the problem. | The Booking Sprint. We won't talk about ads yet. |
| 41–65 | Leaking in two engines. | The Booking Sprint, then the Demand Engine. |
| 66–85 | Solid, and short of demand. | The Demand Engine directly. |
| 86–100 | Well run. | Nothing from us. The report says so in writing. |

### Timeline `#timeline`

**Purpose.** Show every step from payment to credit, with who does what and when the clock starts. **Layout.** `05` `Ladder`, `steps` variant (#c-ladder). **Data.** `08` F3 and F4; `techeo.guardrails` #protected. **Acceptance:** the order and timing match `08` F3/F4: the access email goes out within five minutes of payment (immediately for ACH), a kickoff never gates access, and the clock starts only when access is complete and payment has cleared.

1. **Day 0.** You answer a few questions and pay through Stripe's secure checkout.
2. **Access email.** Within five minutes of paying, one email lists all seven items. You can start on them before kickoff.
3. **Kickoff.** We call from [TECHEO_PHONE] to confirm your order and book a short kickoff call about the access list, offered outside Homets' protected hours: never before 10 a.m. [TZ] on weekdays, Monday mornings, or Friday afternoons.
4. **The clock starts** when the last access item arrives and your payment has cleared.
5. **Business days 1–7.** Test calls, a web form, data pulls, scoring, the Gap Statement. We don't say when the calls happen.
6. **By business day 7.** Your report, and a recorded 30-minute readout call with Blake.
7. **30 days from the readout.** The window for your $1,500 credit against a retainer.

**Late-window notice** (OPEN only, April 16–30 and November 16–30, above `#book`; `05` `Callout` `notice`; per `techeo.web.strategy` open question 1): "**Buying now?** Audits bought from April 16 may not have their readout until May. We don't start new clients between May 1 and September 6, so any retainer you sign starts September 7. The $1,500 credit still applies to a retainer signed within 30 days of your readout." The November version reads "from November 16," "may not have their readout until December," "between December 1 and January 31," and "starts February 1." "May not" is deliberate: a buyer who pays on Fri Apr 16, 2027 and grants access the next Monday can have a readout in April.

### The access we need `#access`

**Purpose.** List every access item before purchase, so nobody pays and then discovers a blocker. **Layout.** `05` ordered list for the seven items, then `RuleList` `disclosure` (#c-rule-list) for the three bold run-in rules. **Data.** `techeo.audit` #inputs; `08` E07. **Acceptance:** the seven items match `techeo.audit` #inputs item for item, except where `08` has moved on: item 5 (test-call consent is collected before payment, so recordings are optional) and the timing (E07 goes out right after payment, not at kickoff). `techeo.audit` #inputs is flagged to match.

Intro: "All of it is requested in one email right after you pay. Plan on about an hour with whoever manages your accounts." (An estimate; confirm on the self-audit and pilots.) Then the seven items from `#faq-audit-access`, word for word, and:

- **Partial access moves the date.** If something's missing, we tell you the same day we notice.
- **We only read.** The audit changes nothing in your accounts. (Open question 3.)
- **Your access is used for your audit only,** never for Homets. At delivery we send a list of every access you granted, so you can remove it or keep it for a retainer. (Open question 3.)

### Price, credit, and refunds `#price`

**Purpose.** State the price, the credit, payment timing, and the refund rule in one place. **Layout.** `05` `RuleList` `disclosure` (#c-rule-list): bold run-in title, then text. **Data.** D6; `techeo.audit` #commercials; `10` #terms; open questions 1 and 2. **Acceptance:** where they overlap, `#price`, `/terms`' Engine Audit purchase terms, and the Stripe product description say the same thing in the same words (price, credit window, clock start, refunds).

- **$1,500,** paid before work starts, by card or US bank account (ACH) through Stripe's secure checkout. We never see your card number.
- **Credited in full** against the first month of any retainer signed within 30 days of your readout.
- **Never discounted.** The credit is the only concession, and it's the same for everyone.
- **ACH payments take a few days.** ACH payments usually take about four business days to clear. If your bank can't be linked instantly at checkout, pay by card instead. The 7 business days start once access is granted and the payment has cleared.
- **Refunds.** The `#faq-audit-refund` answer, word for word.

**If open question 2 is undecided at launch,** the Refunds bullet reads "**Refunds.** See the Engine Audit purchase terms in our Terms of Use → `/terms`," and the Refunds link in `#audit-faq` is removed. The site cannot flip to OPEN on Mon Feb 1, 2027 without a refund term, because `10`'s purchase terms and the Stripe terms checkbox need one.

The ACH line follows Stripe's documentation as found in September 2026 (ACH Direct Debit is delayed-notification and can take up to 4 business days to succeed or fail). `06` #stripe allows instant verification through Financial Connections only (`verification_method=instant`; `06` open question 7), so there is no microdeposit step, and a bank that can't be linked pays by card. In Checkout, ACH Direct Debit shows as "US bank account," not "bank transfer," which is a separate Stripe method; `06` enables ACH Direct Debit only, and `08` checks the label against the live Checkout page and re-verifies the timing before launch.

### We say no before we charge `#decline`

**Purpose.** Publish the decline rules before payment, so poor fits screen themselves out and nobody pays $1,500 to be turned away. **Layout.** `05` `Callout` `note` (#c-callout). **Data.** `08` #qualification. **Acceptance:** the "say no before you pay" list is exactly `08`'s hard-decline set (exclusion zone, not residential, out of scope, not on ServiceTitan, low lead flow, no test-call consent). The market rule and the 86+ line follow as separate sentences, and the market rule is described only as something Blake decides on a call, never as an on-screen outcome.

> You answer a few questions before checkout, so we never take $1,500 from a shop we'd turn away. We'll say no before you pay if your shop is within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat; most of your work is commercial or new construction; you're not on ServiceTitan (for now); there isn't enough lead flow for the audit to be worth $1,500; you mainly want a website, logo, or social media; or you'd rather we didn't call your office as a customer would. If another shop in your trade and market is already a client, Blake tells you on a call before you pay. And if your score is 86 or higher, the report says you don't need us.

### Book or reserve `#book`

OPEN: `form_audit_qualify`, then Stripe Checkout. WAITLIST: `form_audit_reserve`. `08` #form-audit owns which fields each form uses, their order, required flags, validation, and qualification logic; this section carries their words and must change in the same change as `08`'s table.

| Element | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| H2 | Book your Engine Audit | Reserve your audit slot | Reserve your audit slot |
| Intro | A few questions first, then secure checkout. It takes about three minutes. | New audits open {next opening}. Reserve now: no payment, no obligation. We contact reservations in the order they arrived, within two business days of opening. | We're not taking new audits until at least {capacity date}. Otherwise as season. |
| Button | Check fit and continue to payment | Reserve my slot | Reserve my slot |
| Under button | Next: Stripe's secure checkout. $1,500 by card or US bank account (ACH). | No payment. A reservation holds your place in line, not your market. [SLA line, short] | Same as season |
| Loading | Checking fit… then Opening secure checkout… | Reserving… | Reserving… |

**After a flip to WAITLIST.** A `form_audit_qualify` post that reaches a WAITLIST build gets `409`, and `06` re-renders `#book` with the reserve form. A `05` `Callout` `notice` sits above the re-rendered form:

| Reason | Notice |
|---|---|
| `season` | Audits just closed for the season, and nothing was charged. Reserve a slot below and we'll call you when they open on {next opening}. |
| `capacity` | Every audit slot just filled, and nothing was charged. Reserve a slot below and we'll call you when the next one opens on {capacity date}. |

The capacity notice, like every capacity string, gives no hint of why.

**Field copy.** Keys, order, and which form asks what follow `08` #form-audit's 18 fields exactly. Fields 9, 11, 13, and 14 are **qualify only**: the reservation form leaves them off, and the discovery call asks them. Autocomplete tokens are listed because WCAG 2.2 SC 1.3.5, Identify Input Purpose (AA), applies to fields about the user.

| # | Key | Form | Label | Help text or options | Autocomplete |
|---|---|---|---|---|---|
| 1 | `name` | Both | Your name | — | `name` |
| 2 | `role` | Both | Your role | Owner · Co-owner or partner · General manager · Office or customer service manager · Other | — |
| 3 | `company` | Both | Company name | Help: As your customers know it. | `organization` |
| 4 | `website` | Both | Company website (optional) | — | `url` |
| 5 | `zip` | Both | Shop ZIP code | Help: Where your shop or office is. We use it to check the Homets exclusion zone and your market. | `postal-code` |
| 6 | `trade` | Both | Trade | HVAC · Plumbing · Both | — |
| 7 | `work_mix` | Both | Most of your work is… | Homes: residential service, repair, and replacement · Businesses or new construction | — |
| 8 | `revenue_band` | Both | Annual revenue, last 12 months | Under $1.5M · $1.5M to $5M · $5M to $10M · $10M to $15M · Over $15M. Help: A range is fine. It tells us honestly whether the audit is worth it for you. | — |
| 9 | `trucks_band` | Qualify only | Service trucks on the road | 1 to 2 · 3 to 10 · 11 to 25 · 26 or more | — |
| 10 | `crm` | Both | What runs your jobs? | ServiceTitan · Moving to ServiceTitan · Another system · No system yet | — |
| 11 | `lead_sources` | Qualify only | Which of these do you pay for now? | Help: Check all that apply. Local Services Ads · Google Ads · Angi · Thumbtack · Yelp · Other paid leads · None right now | — |
| 12 | `main_goal` | Both | What do you most want fixed? | Book more of the calls we already get · Call back web and marketplace leads faster · Get more calls · A new website, logo, or social media · Not sure yet | — |
| 13 | `decision_maker` | Qualify only | Who signs off on a $1,500 purchase? | I do · Someone else, and they'll join the call | — |
| 14 | `test_call_consent` | Qualify only | Test calls | Radio group. Legend (`10` #consent-texts, approved): "As part of the audit, we call your office and use your web form the way a customer would, and we don't tell you when. We take notes, not recordings. Is that OK?" Options: Yes, that's fine · No, I'd rather you didn't. A radio, not a checkbox, because an unchecked box can't tell "no" from "missed it" (`08`). | — |
| 15 | `email` | Both | Email | Help: Your report and receipts go here. | `email` |
| 16 | `phone` | Both | Mobile phone | Help: We'll call this number to confirm. | `tel` |
| 17 | `heard_from` | Both | How did you hear about us? (optional) | Select: A peer or a network I belong to · My bookkeeper, consultant, or another vendor · A podcast · A phone teardown from Techeo · Search or an AI assistant · Other | — |
| 17a | `peer_network` | Both | Are you in a peer network? (optional) | Select: No · ServiceTitan Pantheon · Nexstar · Service Nation / Roundtable · EGIA · Another network | — |
| 18 | `notes` | Both | Anything we should know? (optional) | Help: For example, we just lost our customer service lead, or we're moving to ServiceTitan in March. | — |
| — | consent | Both | — | `10` #consent-texts, word for word: `reserve-v1` on `form_audit_reserve` (required checkbox, never pre-checked, directly above the button); `qualify-v1` on `form_audit_qualify` (statement above the button). This deck carries no consent wording of its own. | — |

`lead_sources` needs at least one box; its message is "Choose at least one, or None right now." (`#microcopy`). `08` drops "None right now" if other boxes are checked.

**Qualification outcomes** (`form_audit_qualify`; `08` #qualification owns the logic, precedence, and delivery; the response is an HTML block from the form endpoint, since the brief lists no decline URL). Hard declines appear in `08`'s precedence order, and the visitor sees only the first match. Every decline ends "No payment was taken."

| Outcome | Heading | Body |
|---|---|---|
| Qualified | — | Loading label → "Opening secure checkout…", then Stripe Checkout. |
| Exclusion zone | We can't take this one. | Your shop is within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat, the HVAC company our founder owns, and we don't work inside that zone for any reason. We won't contact you unless you ask. |
| Not residential | We work on homes, not commercial jobs. | Our test calls, scoring, and standards are built for homeowners calling about their own system. With mostly commercial work, you'd be paying us to learn your business. |
| Website, logo, or social | That's not work we do. | We don't build websites or logos or run social media, and the audit won't help with them. Call [TECHEO_PHONE] and we'll point you to someone who does. We take no fee for the referral. |
| Not on ServiceTitan | Not yet. | In our first year we only work with shops on ServiceTitan, because that's where we measure everything we promise. We've kept your details on a separate list and will tell you if that changes. For "Moving to ServiceTitan," add: Once you've had 90 days of data in ServiceTitan, we'd be glad to hear from you. |
| Too little lead flow | We'd be taking your money for nothing. | The audit prices leaks in lead flow you already pay for, and from your answers there isn't enough yet for the audit to be worth $1,500. A free phone teardown is a better start. [Get a free phone teardown] |
| No test-call consent | We'd be guessing at the part that matters most. | The audit starts by calling your office as a customer would. Without that we can't measure the Booking Engine, so we'd rather not take your money. |
| Needs a conversation (any `08` manual-review reason, including a taken market) | Let's talk first. | From your answers, we'd rather talk before you pay. [SLA line] The call will show as [TECHEO_PHONE]. |
| Checkout unavailable (`06` #forms, pipeline step 11; not a decline) | Checkout didn't open, and nothing was charged. | Your answers are saved. Try again in a few minutes, or call [TECHEO_PHONE] and we'll finish by phone. |

**A taken market is never answered on screen.** It is `08`'s `market_hidden` review: a taken market renders the "Let's talk first." block on `form_audit_qualify` and a normal 303 to `/thanks/audit-reserved` on `form_audit_reserve`. The founder gives the answer by phone (`08` #qualification). An on-screen answer would let anyone map client markets by trying ZIP codes, and Homets' competitors read the site.

**Reservation outcomes** (`form_audit_reserve`). Success 303s to `/thanks/audit-reserved`. Declines reuse the rows above that apply to the reservation form (exclusion zone, not residential, website, not on ServiceTitan, too little lead flow), ending "No reservation was made." instead.

**Stripe Checkout** (`06` and `08` configure; verify each parameter against Stripe's current documentation):

| Element | Copy |
|---|---|
| Product name | Engine Audit |
| Product description | Techeo's 7-business-day audit of your phones, search, AI answers, and ads. Credited in full against the first month of any retainer signed within 30 days of your readout. |
| `custom_text.submit.message` | Next, we'll email your access list and you'll pick a kickoff time. Card payments clear right away; US bank account (ACH) payments usually take about four business days. |
| `custom_text.terms_of_service_acceptance.message` (with `consent_collection.terms_of_service: required`) | I agree to the [Terms of Use](https://techeo.com/terms), including the Engine Audit purchase terms. |
| Statement descriptor | TECHEO* AUDIT (account prefix TECHEO plus the suffix AUDIT, set by `06` #stripe) |

Stripe's documentation (September 2026) allows up to 1,200 characters per custom text field, with Markdown links. The cancel URL returns to `/audit` unchanged.

**Acceptance for `#book`:** in OPEN no path reaches Checkout without passing `form_audit_qualify`; every decline says no payment was taken; every field has a visible label; the form works with JavaScript off; every key, label, and option matches `08` #form-audit, and every `08` outcome has a block here. No on-screen response to a `market_hidden` case contains "taken," "slot," "market," or "client."

### Audit questions `#audit-faq`

**Purpose.** Answer the questions that come up only once someone is on `/audit`, and link the rest to the homepage FAQ. **Layout.** `05` `Faq` accordion (#c-faq). Each question is an H3 carrying the id shown, `faq-audit-<slug>` (`04` #scope's `faq-<page>-<slug>`). The same id is the item's `data-faq-id` and `faq_id` (`09`) and the fragment of its Question `@id` in the FAQPage markup, `https://techeo.com/audit#faq-audit-<slug>` (`07`). Ids are frozen once published (`02` #fragments), whatever the state, and none repeats a homepage id (`faq-audit-access` and `faq-audit-refund` belong to `/`). **Data.** `#faq`; `08` F3. **Acceptance:** all six ship with their ids; every answer agrees with `#timeline`, `#price`, and `/teardown`; the links resolve to live ids (the Refunds link follows `#price`'s fallback if open question 2 is undecided).

**`#faq-audit-tell-team` · Should I tell my team?**
Your call. We suggest telling them an audit is happening but not when the test calls come, because a normal day is what we measure.

**`#faq-audit-time` · How much of my time does it take?**
A short kickoff call, about an hour of access setup (someone else can do most of it), and the 30-minute readout.

**`#faq-audit-dont-need-you` · What if the audit says I don't need you?**
Then you've paid $1,500 to learn your shop is well run, in writing, with the evidence. We'll ask one thing: if you know an owner whose phone isn't, tell them about us.

**`#faq-audit-retainer-after` · Do I have to sign a retainer after?**
No. The report and readout recording are yours to act on, with us or without us. Sign any retainer within 30 days of your readout and the $1,500 comes off your first month.

**`#faq-audit-vs-teardown` · How is this different from the free phone teardown?**
The teardown is three test calls, one web-form test if you have a form, and a walkthrough. The audit adds a fourth call and your data across all four engines, scored and priced.

**`#faq-audit-talk-first` · Can I talk to someone first?**
OPEN: "Yes. Call [TECHEO_PHONE] and we'll book a 30-minute call with Blake." WAITLIST: "Yes. Call [TECHEO_PHONE] anytime. Calls with Blake open on {next opening} (capacity: {capacity date}), and we'll book yours then."

More questions (links): What it costs → `/#faq-price` · Who owns the accounts → `/#faq-account-ownership` · Why ServiceTitan → `/#faq-servicetitan` · The Homets conflict → `/#faq-homets-conflict` · Refunds → `/#faq-audit-refund`

### Who runs the audit `#who-runs-it`

**Purpose.** Name the person doing the work and disclose Homets on the page where money changes hands. **Layout.** `05` `Callout` `disclosure` (#c-callout), which `05` assigns to this section, beside a `FounderPortrait` (#c-founder). **Data.** [FOUNDER_SURNAME], [HOMETS_METRO], [EXCLUSION_RADIUS_MILES]; the founder portrait; the Week 4 self-audit. **Acceptance:** the facts match the footer disclosure; no pronoun for Blake; the conditional clause is absent until the self-audit is done.

> Blake [FOUNDER_SURNAME] runs every Engine Audit. Blake also owns Homets Air and Heat in [HOMETS_METRO], the first shop the audit was ever run on. We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets.

Links: How we keep the two apart → `/#operator` · What we put in writing → `/#promises`. Portrait alt: "Portrait of Blake [FOUNDER_SURNAME]". The clause "the first shop the audit was ever run on" ships only after the Week 4 self-audit.

**Page acceptance:** the first screen at 375 × 667 shows price, turnaround, credit, and the primary button in both states; nothing is removed or greyed out in WAITLIST; every link obeys the T2 exit rule (`techeo.web.ia` #link-rules, 5).

## `/teardown` — the free Booking Rate Teardown {#teardown-page}

**Purpose.** Let an owner, or a vendor forwarding the link, request a free test of the office phone in two minutes, knowing what happens, who does it, and why calls aren't recorded.

- **SEO title (56 characters):** `Booking Rate Teardown for HVAC & Plumbing Shops | Techeo`
- **Meta description (145 characters):** `We call your office three times as a homeowner, score every call against a written standard, and send you what we found. Free, and yours to keep.`

**Template.** T2; header CTA visible (→ `/audit`); banner in WAITLIST. **Outline:** H1 · What you get `#what-you-get` · How it works `#steps` · Notes, not recordings `#notes-not-recordings` · What it costs you `#what-it-costs` · Request your teardown `#request` · Teardown questions `#teardown-faq` · Who's calling `#whos-calling`.

### Hero

| Element | Copy |
|---|---|
| Eyebrow | Booking Rate Teardown · Free |
| H1 | We call your office. Then we show you what happened. |
| Subhead | Three calls to your published number as a homeowner, at different hours, scored against the standard we hold our own desk to. You get a 15–20 minute walkthrough. It costs nothing and needs nothing from your team. |
| Primary button → `#request` | OPEN: Request my free teardown · WAITLIST: Queue my free teardown |
| Secondary link | Want the full picture? See the Engine Audit → `/audit` |
| Line under subhead, WAITLIST | season: Requests made now are worked in order from {next opening}. · capacity: Requests made now are worked in order from {capacity date}. |

### What you get `#what-you-get`

**Purpose.** Show that the free teardown is real work with a concrete deliverable. **Layout.** `05` `RuleList` (#c-rule-list), plain items. **Data.** `techeo.offers` rung 0; `content/governance/qa-rubric-csm.md`. **Acceptance:** the walkthrough length matches `#numbers`, and the rubric list matches the current rubric's headings.

- A 15–20 minute screen walkthrough of what happened on each call, and where a booked job could have slipped away
- The scored sheet for every call, against the rubric we use on our own desk: answered and how fast, the greeting, listening, getting the details right, the price question, offering a time and booking it, and reading the appointment back
- If you have a web form, how long it took someone to call back, to the minute
- Yours to keep, whatever you do next. No pitch at the end, just one question.

The rubric list paraphrases `content/governance/qa-rubric-csm.md`; it follows any renaming in `techeo.audit`'s adapted rubric.

### How it works `#steps`

**Purpose.** Walk through the five steps so the owner knows what happens and when. **Layout.** `05` `Ladder`, `steps` variant (#c-ladder). **Data.** `08` F5; open question 4. **Acceptance:** the timing matches `08` F5 (confirmation call first; calls within 10 business days, or the date given on that call when the queue is longer; walkthrough within 3 business days of the last call) and `/thanks/teardown`.

1. **You tell us where to call:** your published number, your web form if you have one, and your state.
2. **We confirm by phone.** [SLA line, short]
3. **We call three times as a homeowner,** at different hours, within 10 business days of that call. We don't tell you when. If our queue is longer, we'll give you the date on the confirmation call.
4. **We submit your web form once,** if you have one, and time the callback.
5. **You get the walkthrough** by email within 3 business days of the last call.

WAITLIST step 3: "**We call three times as a homeowner,** starting {next opening} (capacity: {capacity date}), in the order requests arrived. We'll tell you roughly when, never exactly." The 10 and 3 days are defaults (open question 4); `08` F5 caps teardowns at five a week, which is why a long queue gets its own date.

### Notes, not recordings `#notes-not-recordings`

**Purpose.** Explain why the calls aren't recorded before the owner worries about it. **Layout.** `05` `Callout` `note` (#c-callout) holding the lead, the three reasons as bold run-ins, and the clarifier. **Data.** `10` #recording; `08` F5 step 4. **Acceptance:** agrees with `10` #recording's notes-only default and `#faq-call-recording`; counsel has confirmed the Reason 1 wording.

| Element | Copy |
|---|---|
| Lead | By default, we don't record the calls. We take structured notes against the rubric while the call happens, then walk you through them. |
| Reason 1 | **The person who answers hasn't agreed to be recorded.** In some states, recording a call without every party's consent is illegal, and your OK as the owner doesn't cover your employee. |
| Reason 2 | **Notes do the job.** What matters is what was said and what wasn't: answered or not, the right questions or not, a price held or not, booked or not. |
| Reason 3 | **We never publish.** We record only where the law clearly allows it and you ask in writing, and we never publish or share a recording of any business. |
| Clarifier | The walkthrough is a recording of our screen and voice going through the scored notes, not a recording of your calls. |

Counsel confirms "your OK as the owner doesn't cover your employee" before launch (`techeo.legal` #compliance).

### What it costs you `#what-it-costs`

**Purpose.** Remove every hidden cost an owner might fear: money, staff time, a wasted truck, blame, a sales sequence. **Layout.** `05` `RuleList` `disclosure` (#c-rule-list): bold run-in title, then text. **Data.** `08` F5 (cancel rule, no automated follow-up); open question 5. **Acceptance:** "No sequence" matches `08` (nothing automated after the walkthrough), and "No truck" matches `08` F5's cancel-within-60-minutes rule.

- **No money.** The teardown is free, and it stays free.
- **No staff time.** Your team handles three calls the way they handle any call.
- **No truck.** Teardown calls are never emergencies. If your team books us, which is what we hope for, we call back within the hour to cancel, before anything is dispatched.
- **No names.** Our notes say "the person who answered."
- **No sequence.** We ask one question at the end. If the answer is no, that's the end of it.

"No sequence" binds `08` (no automated follow-up); the cancel procedure is `08`'s (open question 5).

### Request your teardown `#request`

| Element | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| H2 | Request your teardown | Queue your teardown | Queue your teardown |
| Intro | Two minutes. We'll confirm by phone, then call your office within 10 business days. If our queue is longer, we'll give you the date on the confirmation call. | Two minutes. Requests are worked in order from {next opening}; we'll confirm by phone now. | As season, with {capacity date} |
| Button · loading | Request my free teardown · Sending… | Queue my free teardown · Sending… | Same as season |
| Under button | [SLA line, short] | [SLA line, short] | [SLA line, short] |

**Field copy** (`form_teardown_request`; `08` owns keys, flags, validation):

| Key | Label | Help text or options | Autocomplete |
|---|---|---|---|
| `name` | Your name | — | `name` |
| `role` | Your role | Owner · Manager · Other | — |
| `company` | Company name | — | `organization` |
| `phone_to_call` | The number customers call | Help: As it appears on your website or Google Business Profile. This is the number we'll call. | — |
| `website` | Website (optional) | Help: If it has a contact or booking form, we'll submit it once and time the callback. | `url` |
| `zip` | Shop ZIP code | Help: Recording law depends on your state, and we check the Homets exclusion zone. | `postal-code` |
| `trade` | Trade | HVAC · Plumbing · Both | — |
| `crm` | What runs your jobs? (optional) | ServiceTitan · Another system · No system yet | — |
| `email` | Email | Help: The walkthrough goes here. | `email` |
| `phone` | Your mobile | Help: For the confirmation call. Not the number we test. | `tel` |
| `heard_from` | How did you hear about us? (optional) | As on `/audit` | — |
| `authority` | — | Required checkbox (`10` approved this text): I own or manage this business, and I'm asking Techeo to place test calls to it and use its web form. | — |
| consent | — | `10` #consent-texts `teardown-v1`, word for word (statement above the button). This deck carries no consent wording of its own. | — |

| Outcome | Copy |
|---|---|
| Accepted | 303 → `/thanks/teardown` |
| Exclusion zone | **We can't take this one.** Your shop is within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat, the HVAC company our founder owns. We don't test phones inside that zone, because anything we learned there could look like it helped Homets. Nothing was scheduled, and we won't contact you unless you ask. |
| Needs a check first (`08`: `market_hidden`, `market_review`, `zip_unknown`, or `zone_edge`) | **We'll call you first.** We need to check one thing before we schedule your teardown. We'll call from [TECHEO_PHONE]. [SLA line, short] |
| Authority box unchecked | Check the box to confirm you own or manage this business. If you're a vendor, call [TECHEO_PHONE] instead. |
| Duplicate within 30 days | We already have a teardown request for this number. [SLA line] To change something, call [TECHEO_PHONE]. |
| Vendor note under the form | Referring a client? Send them this page: techeo.com/teardown. This form is for owners and managers. Vendors can call [TECHEO_PHONE] and we'll prepare one for your client. |

The "We'll call you first." block never says why, so a taken market can't be found by trying ZIP codes (`08` #form-teardown-request). The vendor wording doesn't claim a principle the plan doesn't follow: `techeo.gtm` #teardown sends teardowns unrequested, and vendors get teardowns prepared for their clients (`techeo.web.strategy` open question 7).

### Teardown questions `#teardown-faq`

**Purpose.** Answer the four questions owners ask before requesting. **Layout.** `05` `Faq` accordion (#c-faq). Each question is an H3 carrying the id shown, `faq-teardown-<slug>`, under the same rules as `/audit` `#audit-faq`: the id is the item's `data-faq-id` and `faq_id` (`09`) and its Question `@id` fragment (`07`), frozen once published (`02` #fragments), and never a repeat of a homepage or `/audit` id. **Data.** `techeo.offers` rung 0; `08` F5. **Acceptance:** all four ship with their ids; every answer agrees with `#how-it-works` and `/audit` `#audit-faq`; "audit" appears only as "Engine Audit."

**`#faq-teardown-free` · Is it really free?**
Yes. No card, no contract, no follow-up sequence. It lets you judge our work on your own phones before you spend anything.

**`#faq-teardown-warn-team` · Should I warn my team?**
We'd suggest not saying when; the point is a normal day. If you'd rather tell them, it still works.

**`#faq-teardown-no-answer` · What if nobody answers?**
That's the first finding. We note it, and the next call comes at a different hour.

**`#faq-teardown-vs-audit` · Is this the Engine Audit?**
No. The Engine Audit adds a fourth call and your data across all four engines, scored and priced, for $1,500. [See the Engine Audit] → `/audit`

### Who's calling `#whos-calling`

**Purpose.** Tell the owner who will be calling the office, and disclose Homets on the page. **Layout.** `05` `Callout` `disclosure` (#c-callout), which `05` assigns to this section. **Data.** [FOUNDER_SURNAME], [HOMETS_METRO], [EXCLUSION_RADIUS_MILES]. **Acceptance:** the facts match the footer disclosure; no pronoun for Blake.

> Techeo, run by Blake [FOUNDER_SURNAME], who also owns Homets Air and Heat in [HOMETS_METRO]. The teardown uses the same written standard Homets' own desk is scored against every week. We don't test phones within [EXCLUSION_RADIUS_MILES] miles of Homets.

Link: How we keep Techeo and Homets apart → `/#operator`

**Page acceptance:** the first screen at 375 × 667 shows that it is free, what it is, that it needs only the published number, and who runs it; in the page's main content (excluding the header, season banner, and footer, whose shared chrome says "audit slot" in WAITLIST), "audit" appears only as "Engine Audit" (`techeo.gtm` #scripts).

## Confirmation pages {#thanks}

All three use T3: no header CTA, no banner, full footer, `noindex`, never linked, reached only by a 303 or Stripe's success URL. Copy is built for the state at build time.

### `/thanks/audit-reserved`

- **SEO title (28 characters):** `Audit Slot Reserved | Techeo`
- **Meta description (89 characters):** `Your Engine Audit slot is reserved. Here is what happens next, and when we will call you.`

| Element | Copy |
|---|---|
| H1 | WAITLIST: Your slot is reserved. · OPEN: We have your details. |
| Lead | season: You're in line for an Engine Audit when new audits open on {next opening}. · capacity: You're in line for the next Engine Audit slot, which opens on {capacity date}. · OPEN: Audits are open now, so we'll call to book your 30-minute call with Blake. [SLA line] · All three continue: You haven't paid anything, and you don't owe anything. |
| H2 | What happens next |
| 1 | **Now.** A confirmation email from Techeo is on its way. If it isn't there in five minutes, check your spam folder. |
| 2 | **Soon.** A call from [TECHEO_PHONE]. [SLA line] We'll confirm your details and answer questions. (OPEN: the [SLA line] is dropped here, because the lead carries it.) |
| 3 | WAITLIST only. **{next opening}** (capacity: **{capacity date}**). We contact every reservation in the order it arrived, within two business days, to book a 30-minute call with Blake. |
| 4 | **Then, if it fits.** You pay at techeo.com/audit; your 7 business days start when access is granted and your payment has cleared. |
| H2 | WAITLIST: Two things to know · OPEN: One thing to know |
| Item 1 | WAITLIST only. **A reservation holds your place in line, not your market.** We work with one company per market per trade. If another shop in your trade and market signs first, we'll tell you before the opening. |
| Item 2 | **You can cancel anytime.** Reply to the confirmation email or call [TECHEO_PHONE]. |
| H2 · body | While you wait · A free phone teardown shows you part of what the audit will find. WAITLIST adds: It's queued for the same opening. |
| CTA · link | WAITLIST: Queue a free phone teardown → `/teardown` · OPEN: Get a free phone teardown → `/teardown` · Back to the home page → `/` |

**The OPEN variant** exists because `06` accepts a reservation posted from a cached WAITLIST page after the flip (`state_mismatch`, handled as an OPEN lead by `08` F7) and 303s it here. `{next opening}` and `{capacity date}` are undefined in OPEN, so that build never renders step 3 or item 1.

**Acceptance:** in WAITLIST the date matches the banner and the confirmation email in the same build; the OPEN build shows no date and no unrendered variable; item 1 matches `techeo.web.strategy` open question 4 as decided.

### `/thanks/audit-purchased`

- **SEO title (31 characters):** `Engine Audit Purchased | Techeo`
- **Meta description (101 characters):** `Your Engine Audit is paid for. Pick a kickoff time and see what happens between now and your readout.`

| Element | Copy |
|---|---|
| H1 | Your Engine Audit is booked. |
| Lead | Thank you. Here's everything that happens between now and your readout. |
| Payment note | **Paid by card?** Stripe emails your receipt now. **Paid from a US bank account (ACH)?** It usually takes about four business days to clear. Start on access and pick your kickoff time now anyway; your 7 business days start once access is granted and the payment has cleared. |
| H2 | What happens next |
| 1 | **Now.** Stripe emails your receipt, and we email the access list: seven items, one email, within five minutes. |
| 2 | **Soon.** A call from [TECHEO_PHONE] to confirm your order and help you pick a kickoff time. [SLA line] |
| 3 | **Pick your kickoff time.** A short call about the access list, offered outside Homets' protected hours: never before 10 a.m. [TZ] on weekdays, Monday mornings, or Friday afternoons. Button: **Pick a kickoff time** → scheduling link (`08`) |
| 4 | **Grant access.** You can start before kickoff; plan on about an hour with whoever manages your accounts. |
| 5 | **The clock starts.** 7 business days from the day the last access arrives and your payment has cleared. If something's missing, we tell you the same day we notice. |
| 6 | **We test your phones.** Four calls and one web form during those 7 days. We won't tell you when. |
| 7 | **Your readout.** A recorded 30-minute call with Blake to walk through your 12–18 page report. You keep the PDF and the recording. |
| 8 | **Your credit.** Sign any retainer within 30 days of your readout, and the full $1,500 comes off your first month. |
| Fallback | If you still haven't picked a kickoff time by the end of the next business day, we'll call once more. |
| Help · link | Questions before then? Call [TECHEO_PHONE]. · Back to the home page → `/` |

**Acceptance:** correct for card and ACH alike; the steps match `08` F3/F4 (E07 within five minutes of payment, immediately for ACH; callback card P by the SLA due time; a kickoff never gates access); the `session_id` query never changes content; the kickoff hours match the scheduling tool's real availability (D11); a failed ACH payment is handled by `08`'s email.

### `/thanks/teardown`

- **SEO title (27 characters):** `Teardown Requested | Techeo`
- **Meta description (76 characters):** `Your free phone teardown request is in. Here is what happens next, and when.`

| Element | OPEN | WAITLIST (both reasons) |
|---|---|---|
| H1 | Teardown requested. | Your teardown is in the queue. |
| Lead | After our confirmation call, we'll call your office three times within 10 business days, or from the date we give you on that call if our queue is longer. You won't know when, and that's the point. | We start placing teardown calls on {next opening} (capacity: {capacity date}), in the order requests arrived. We'll tell you roughly when yours will run on our confirmation call. |
| CTA → `/audit` | Book an Engine Audit | Reserve an audit slot |

| Element | Copy (all states) |
|---|---|
| H2 | What happens next |
| 1 | **Now.** A confirmation email from Techeo is on its way. |
| 2 | **Soon.** A call from [TECHEO_PHONE] to confirm the number we'll test, your state, and your hours. [SLA line] |
| 3 | **The test calls.** Three calls at different hours, and one web form submission if you have a form. |
| 4 | **Your walkthrough.** Emailed within 3 business days of the last call: a 15–20 minute screen recording and the scored sheet. The link expires after 90 days, so download anything you want to keep. |
| H2 · body | Want the full picture instead? · The Engine Audit adds your data across all four engines, and prices what the phone is costing you. |
| Link | Back to the home page → `/` |

**Acceptance:** the timing matches `/teardown` exactly; the 90-day expiry matches `08`'s delivery setup (`techeo.web.strategy` open question 9).

## Email-link pages: unsubscribe and call confirmation {#email-links}

Two v1 pages are reached only from links in Techeo's email, never from the site. `06` #optout serves both from Pages Functions behind signed-token links and owns their tokens, status codes, and writes. `10` owns the opt-out rules (#can-spam) and the consent text (#consent-texts), and `08` owns the emails that carry the links. This section owns the words, which ship in `06`'s `messages.ts`.

**Template.** T3-style chrome: header with no CTA, no season banner, full footer with the disclosure block, `noindex, nofollow` (the `X-Robots-Tag` header from `06`, plus the matching robots meta tag), not in the sitemap, never linked from the site. No script, GA4 included; the button is a plain form post. **Opening the page changes nothing; only its button does,** because mail scanners open every link in a message. The copy is the same in every season state. `{number}` and `{date}` are filled when the page is requested, not at build time: the reservation's phone number formatted "(XXX) XXX-XXXX", and its opening date in words with no year.

**URLs.** `06` #optout serves the pages at `/api/email/unsubscribe?t=<token>` and `/api/consent/phone-reserve-confirm?t=<token>`. `02` lists both as function-rendered T3 pages (#inventory-v1, #indexing, #query-strings), with `t` as their one expected parameter, and brief v2 #names lists them. The copy below is final.

### Unsubscribe · `/api/email/unsubscribe?t=<token>`

**Purpose.** Let anyone stop Techeo's marketing email with one press, without logging in, and say plainly what still comes. **Linked from** the `{unsubscribe_link}` in every C and S email footer (`10` #can-spam) and from the `List-Unsubscribe` header. A mailbox provider's one-click request (RFC 8058) gets an empty `200` and never sees this page (`06`).

- **SEO title (29 characters):** `Stop Marketing Email | Techeo`
- **Meta description (131 characters):** `Stop marketing email from Techeo. Email about an Engine Audit you've bought or a slot you've reserved keeps coming until it's done.`

**Which email stops.** All class C (commercial) email stops within one business day: every email about Techeo's services rather than about something the reader asked for (`10` #can-spam items 2 and 4; `08` #emails). Class S (service) email about a purchase in progress keeps coming: an Engine Audit being delivered (`10` #can-spam item 4). S email about a reserved slot keeps coming too, because `06` #notifications checks suppression only before C email and `10`'s S footer offers to stop "all other email." `10` confirms that reading, or `06` suppresses reservation email as well and the copy drops "or reserved a slot." Two gaps are flagged. E19, the email that delivers a teardown, is class C, so an opt-out stops it; `08` decides before launch whether it becomes S. And `06` confirms that #optout's `resend_suppress` job doesn't block S sends; for a complaint, `06` #notifications says Resend's suppression stops S email too. An opt-out never cancels a reservation or a teardown, and the page makes no promise about calls; "cancel" and "stop calling" replies handle those (`08` #replies).

| State (`06` #optout) | Title | H1 | Body | Button or link |
|---|---|---|---|---|
| Valid link, first view (`GET`, `200`) | Stop Marketing Email \| Techeo | Stop marketing email from Techeo? | We'll stop within one business day, usually within minutes. If you've bought an Engine Audit or reserved a slot, we'll still email you about that until it's finished. Nothing changes until you press the button. | Button: Stop marketing email |
| Done (button pressed; `303` to the same URL) | Marketing Email Stopped \| Techeo | Done. You won't get marketing email from Techeo. | It takes effect within one business day, usually within minutes. Email about an Engine Audit you've bought or a slot you've reserved still comes until it's finished. To cancel a reservation or a teardown, or to stop calls, reply to any of our emails or call [TECHEO_PHONE]. | Back to the home page → `/` |
| Already done (same link pressed again, or the address already opted out) | Marketing Email Stopped \| Techeo | You've already stopped marketing email from Techeo. | Nothing more to do. Email about an Engine Audit you've bought or a slot you've reserved still comes until it's finished. | Back to the home page → `/` |
| Invalid or expired link (`400`, `410`) | Link Not Working \| Techeo | This link doesn't work anymore. | To stop marketing email from Techeo, reply "stop" to any of our emails, or call [TECHEO_PHONE]. We'll stop within one business day. | Back to the home page → `/` |
| Too many tries with bad links (`429`) | Too Many Tries \| Techeo | That's a lot of tries in a short time. | Wait a minute and try the link again, or call [TECHEO_PHONE]. | Back to the home page → `/` |
| Server error (`503`) | Something Went Wrong \| Techeo | Something went wrong on our end. | Try again in a minute. If it still doesn't work, reply "stop" to any of our emails or call [TECHEO_PHONE], and we'll stop within one business day. | Try again → the same link |

**Acceptance:** a `GET`, or a link scanner's `HEAD`, writes nothing, and only the button or a one-click request records the opt-out (`06` tests). Every state renders with its own title and no unfilled token. The "still comes" sentences match `10` #can-spam as confirmed. The footer disclosure is `#chrome`'s text word for word. `#qa` runs on each state's rendered output.

### Call confirmation · `/api/consent/phone-reserve-confirm?t=<token>`

**Purpose.** Let someone who reserved an audit slot by phone confirm in writing that Techeo may call them when audits open. A spoken yes counts only while its recording exists, and recordings are deleted at 90 days (`10` #tcpa-analysis item 3). **Linked from** the phone-reservation variants of E01 and E36 (`08`), never from the site. The page names the number and the opening date, because the consent must name the number. `06` reads both from Supabase by reservation id, and returns the server-error state rather than show the consent text without them.

- **SEO title (32 characters):** `Confirm We Can Call You | Techeo`
- **Meta description (86 characters):** `Confirm that Techeo may call you about your Engine Audit reservation when audits open.`

| State (`06` #optout) | Title | H1 | Body | Button or link |
|---|---|---|---|---|
| Valid link, first view (`GET`, `200`) | Confirm We Can Call You \| Techeo | Can we call you when audits open? | Lead: You reserved an Engine Audit slot by phone. Press the button so we can call you at {number} when audits open on {date}. Nothing changes until you press the button. Directly above the button: `10` #consent-texts `phone-reserve-confirm-v1`, word for word, with {number} and {date} filled. Under the button: If you'd rather not, do nothing. We may email you when audits open instead of calling, and your place in line stays the same. | Button: "Yes, call me when audits open." (`10`'s approved text, word for word) |
| Done (button pressed; `303` to the same URL) | We'll Call When Audits Open \| Techeo | Thanks. We'll call you when audits open. | We'll call you at {number} when audits open on {date}. Your place in line hasn't changed. To cancel your reservation, reply "cancel" to any of our emails or call [TECHEO_PHONE]. | Back to the home page → `/` |
| Already confirmed (same link pressed again) | We'll Call When Audits Open \| Techeo | You've already confirmed. | We'll call you at {number} when audits open on {date}. Nothing more to do. | Back to the home page → `/` |
| Invalid or expired link (`400`, `410`) | Link Not Working \| Techeo | This link doesn't work anymore. | Call [TECHEO_PHONE] and we'll confirm by phone. Nothing about your reservation has changed. | Back to the home page → `/` |
| Too many tries with bad links (`429`) | Too Many Tries \| Techeo | That's a lot of tries in a short time. | Wait a minute and try the link again, or call [TECHEO_PHONE]. | Back to the home page → `/` |
| Server error (`503`: Supabase unreachable when the page loads, or D1 and Supabase both down when the button is pressed) | Something Went Wrong \| Techeo | Something went wrong on our end. | Nothing was recorded. Try again in a few minutes, or call [TECHEO_PHONE] and we'll confirm by phone. | Try again → the same link |

**Acceptance:** the text above the button matches `phone-reserve-confirm-v1` in `app.consent_versions` word for word, and the button reads exactly as `10` approved it. No state renders the consent text, the done state, or the already-confirmed state without both {number} and {date} filled. One press writes one `consent_evidence` row, and a second press writes none (`06`). The footer disclosure is `#chrome`'s text word for word. `#qa` runs on each state's rendered output.

## Legal pages: `/privacy`, `/terms`, `/accessibility` {#legal}

**Ownership.** `10` owns the requirements for all three pages, and **final text comes from counsel**. This deck gives only the structure and a plain-language intro, and `10` reviews each intro too. Each page's build notes carry this statement, and each page shows a "Last updated" date `10` controls. Template T4.

### `/privacy`

- **SEO title (23 characters):** `Privacy Policy | Techeo`
- **Meta description (136 characters):** `What techeo.com collects, why, who processes it for us, and how to reach us. Nothing you send Techeo is shared with Homets Air and Heat.`

**H1:** Privacy Policy · *Final text: counsel, to `10`'s requirements.*

> This page explains what techeo.com collects when you use it, why we collect it, who helps us handle it, how long we keep it, and what you can ask us to do with it. The short version: we collect what you type into our forms, recordings and notes of calls to and from our number, and basic analytics about how the site is used. We use it to reply to you and to run our business. Nothing you send Techeo is shared with Homets Air and Heat, the HVAC company our founder also owns.

**H2 structure, in order:** Who we are (Techeo LLC, [TECHEO_STATE], [TECHEO_POSTAL_ADDRESS], separate from Homets) · What we collect, form by form · The calculator · Calls to [TECHEO_PHONE] · Payments through Stripe · Analytics and cookies (`09`) · How we use it · Who processes it for us (each provider named by `10`) · The Homets firewall (client engagement data falls under the client's contract) · Email and how to stop it · How long we keep it · Your choices and rights under applicable state law · Security · Children · Changes · Contact.

**Acceptance:** `10` confirms every intro sentence against the live configuration; the Homets sentence stays only if the firewall holds in the actual systems (separate Supabase and Workspace, D3 and D4).

### `/terms`

- **SEO title (21 characters):** `Terms of Use | Techeo`
- **Meta description (133 characters):** `The rules for using techeo.com and for buying an Engine Audit online. Client engagements are governed by a separate signed agreement.`

**H1:** Terms of Use · *Final text: counsel, to `10`'s requirements.*

> These terms cover using techeo.com, reserving an audit slot, requesting a free phone teardown, and buying an Engine Audit through the site. They are not the contract for a retainer. Retainers are signed separately, under a Master Services Agreement and a Statement of Work that you read before you sign anything.

**H2 structure, in order:** Who these terms cover · Using the site · What the site's numbers mean (targets are targets, examples are examples, the calculator is arithmetic, not advice) · **Engine Audit purchase terms** (price, payment by card or by ACH from a US bank account linked instantly at checkout and never by microdeposits, or by invoice — Stripe-hosted or bank transfer, `08` F10 — start, credit, refunds per open question 2, failed ACH payments) · Reservations (no payment, obligation, or market hold) · Free phone teardowns · Our content · Other services we link to · Disclaimers and limits of liability · Governing law, [TECHEO_STATE] (counsel confirms) · Changes · Contact.

**Acceptance:** the purchase terms match `#price`, `#faq-audit-refund`, and the Stripe description where they overlap; the Stripe terms checkbox links here.

### `/accessibility`

- **SEO title (32 characters):** `Accessibility Statement | Techeo`
- **Meta description (125 characters):** `Techeo builds techeo.com to meet WCAG 2.2 Level AA. What we test, what we know is not right yet, and how to report a barrier.`

**H1:** Accessibility Statement · *Final text: counsel, to `10`'s requirements.*

> We want every owner, office manager, and technician to be able to use techeo.com, including with a screen reader, a keyboard, zoom, or voice control. We build the site to meet WCAG 2.2 Level AA and test every release. If something gets in your way, tell us what happened, and we'll fix it or get you the same information another way.

**H2 structure, in order:** Our standard · How we test (`10`, `11`) · What we know isn't right yet (dated, each with a fix date; "Nothing known as of {date}" if empty) · The calculator and report PDFs in another format · Report a barrier: call [TECHEO_PHONE] (TTY users can dial 711 for relay), write to [TECHEO_POSTAL_ADDRESS], or use a text-based route (open question 9) · How fast we respond (`10`) · Last reviewed.

**Acceptance:** no claim of conformance that `10`'s latest audit did not verify.

## 404 {#not-found}

**Purpose.** Return a lost visitor to a real page, and ask to hear about our own broken links. T5: full chrome, banner in WAITLIST, HTTP 404, `noindex`, no search box, no automatic redirect.

- **SEO title (23 characters):** `Page Not Found | Techeo`
- **Meta description (107 characters):** `This address does not exist on techeo.com. Try the Engine Audit, the free phone teardown, or the home page.`

| Element | Copy |
|---|---|
| H1 | Nothing lives at this address. |
| Body | The link may be old, or the address may have a typo. Most people are looking for one of these: |
| Links | Home: what Techeo does and who runs it → `/` · Engine Audit: $1,500, 7 business days → `/audit` · Free phone teardown: we call your office and show you what happened → `/teardown` |
| Close | If one of our own links sent you here, call [TECHEO_PHONE] and tell us which one. We'll fix it. |

From v1.1, add "Insights: what we've learned running our own phones → `/insights`" (`02`). **Acceptance:** `curl -s -o /dev/null -w '%{http_code}' https://techeo.com/zzz` prints 404, and `curl -s https://techeo.com/zzz` contains the H1 "Nothing lives at this address."

## Global microcopy {#microcopy}

### Validation

Inline under the field and in a summary at the top (`05` pattern; `08` sets required fields and ranges). Never blame the user ("invalid," "you failed to").

| Situation | Message |
|---|---|
| Error summary | There's a problem with {n} answers. Fix them and send again. ("1 answer" when {n} is 1) |
| Required text empty | Enter your {field label, lowercase}. |
| Required choice | Choose one. |
| Required checkbox group (`lead_sources`, `08`) | Choose at least one, or None right now. |
| Required checkbox | Check this box to continue. |
| Email | Enter an email address like name@yourcompany.com. |
| Phone | Enter a 10-digit US phone number. |
| ZIP | Enter a 5-digit ZIP code. |
| Website | Enter your website address, like yourcompany.com. |
| Out of range | Enter a number from {min} to {max}. |
| Too long | Keep this under {max} characters. |
| Bot check failed | We couldn't confirm you're a person. Try again, or call [TECHEO_PHONE] and we'll take your details by phone. |
| Too many attempts | That's a lot of tries in a short time. Wait a minute and send again, or call [TECHEO_PHONE]. |
| Network error | Your details didn't reach us. Check your connection and send again. Nothing was charged. ("Nothing was charged" only before payment) |
| Server error | Something went wrong on our end, and your details weren't saved. Call [TECHEO_PHONE] and we'll take them by phone, or try again in a minute. |

**Placeholders.** No form field carries placeholder text. Examples live in the help text under the label, because placeholder text disappears as soon as someone types and often fails contrast. Every field's visible label is in this deck.

### Loading states

"Sending…" by default; "Checking fit…" then "Opening secure checkout…" on `form_audit_qualify`; "Reserving…" on `form_audit_reserve`. The button keeps its width, sets `aria-busy="true"`, and blocks a second submit (`08`).

### Phone link

Visible text: [TECHEO_PHONE] formatted "(XXX) XXX-XXXX"; mobile header label "Call"; accessible name everywhere "Call Techeo, [TECHEO_PHONE]"; hours line "Answered live, {answering hours}."; `href` in E.164 (`techeo.web.ia` #url-rules). The phone sits in the same relative place in the header and footer on every page, which supports WCAG 2.2 SC 3.2.6, Consistent Help (Level A).

### Footer disclosure and shorthand

The footer disclosure is the `#chrome` text, word for word, on every page. Repeated shorthand: "$1,500 · 7 business days · credited in full against a retainer signed within 30 days" · "Reserving is free." · "Retainers from $3,500/month" · "We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets." Images hold no information that their surrounding text lacks, so a failed image needs no message.

## Number ledger {#numbers}

Every number on a v1 page, with its source. A number not listed here does not ship. Homets figures appear only as tokens (D7).

| Number | Source | Kind |
|---|---|---|
| $1,500; 7 business days from access granted; credit within 30 days | D6; `techeo.audit` #commercials; anchor per open question 1 | Price, term |
| Retainers from $3,500/month | D6 | Price |
| 90 days, then month-to-month, 30 days' notice | `techeo.offers` #terms | Term |
| 40 / 20 / 15 / 15 / 10%; bands 0–40, 41–65, 66–85, 86–100; scores from 0 to 100 | `techeo.audit` #workstreams, #scoring | Method |
| 12–18 pages; 30-minute readout; three priorities; four calls and one web form; 15 searches; top three competitors; 12 questions; 90 days of export; 30 days of recordings; seven access items | `techeo.audit` | Method |
| Page 1, page 2, page 3 of the report (the Gap Statement on page 2; sample alt text) | `techeo.audit` #deliverable | Method |
| 30-minute handover call | `techeo.delivery` #offboarding | Scope |
| 70% booking-rate target | `content/sops/csm/kpis.md` | Homets' own target, always labeled "target" |
| Above 65% | `techeo.offers` rung 3 | Entry rule |
| 10 points; 90% of marketplace leads; day 90; weeks 0, 3, 4, 12; five scored calls a week; monthly training | `techeo.offers` rung 2; `techeo.delivery` #sprint | Target, scope |
| Two service-area pages a month | `techeo.delivery` #rhythm | Scope |
| $1.5M–$15M; 3–25 trucks | `techeo.positioning` #icp | Policy |
| Form options: Under $1.5M · $1.5M to $5M · $5M to $10M · $10M to $15M · Over $15M; 1 to 2 · 3 to 10 · 11 to 25 · 26 or more trucks; "last 12 months" | `08` #form-audit, from `techeo.positioning` #icp | Form option, policy |
| 90 days of data in ServiceTitan (the "Moving to ServiceTitan" decline) | `08` #qualification | Policy |
| 10-digit phone; 5-digit ZIP; booking rate from 0 to 100 | `08` #form-rules and #calculator | Validation |
| Calculator ranges: 1 to 10,000 calls; $10 to $50,000; one decimal place; "52.5" and "52 for 52%" as format examples; less than $100 a month | `08` #calculator | Validation, display rule |
| Three calls; 15–20 minute walkthrough | `techeo.offers` rung 0 | Method |
| 10 and 3 business days (teardown), or the date given on the confirmation call; within the hour (cancel) | Open questions 4 and 5; `08` F5 | Assumption |
| Within five minutes (access email; confirmation email) | `08` F1, F3, F4 | SLA |
| Within one business day (email opt-out, `#email-links`) | `10` #can-spam item 4; `08` #emails | SLA |
| 90-day link expiry | `techeo.web.strategy` open question 9 | Policy |
| 8 a.m. to 6 p.m.; 10 a.m. next business day; 15 minutes (version B only); no slots before 10 a.m., Monday mornings, Friday afternoons | D11; `techeo.guardrails` #protected | SLA, policy |
| Two business days after an opening; 30-minute call with Blake | `techeo.web.strategy` O7; `techeo.gtm` #process | Target, method |
| February 1; September 7; May 1–September 6; December 1–January 31; April 16 and November 16 | D2; `techeo.web.strategy` #season-strategy. September 7 and September 6 hold for 2027 only; re-derive from Labor Day each year (open question 15) | Dates |
| Usually about four business days (ACH) | Stripe documentation, September 2026; re-verify | Platform |
| 711 (TRS relay) | FCC; `10` #accessibility | Platform |
| WCAG 2.2 Level AA | D10; `10` #accessibility | Standard |
| © {build year} | `06` config | Build value |
| About an hour (access); about three minutes (form); two minutes (teardown form) | Estimates; confirm in the pilots and usability tests | Assumption |
| $340,000 → $300,000 | `techeo.audit` #gap | Illustration of rounding |
| 300; 50%; $400; 60; $24,000; $288,000; shown as $280,000 | `techeo.offers` #pricing-rationale; display rounding from `08` #calculator worked example 1 | Labeled example, never a benchmark |
| [EXCLUSION_RADIUS_MILES]; all `[HOMETS_*]` | Founder; D7 | Tokens |

## Copy QA checklist {#qa}

Run on the built HTML of every page, in OPEN, in WAITLIST·season with each `{next opening}`, and in WAITLIST·capacity, before every deploy that touches copy. **Done when** every row passes and the founder has signed the sheet (D15).

| # | Check | Method | Pass |
|---|---|---|---|
| 1 | Banned words (D8) | Case-insensitive regex on rendered text: `\b(guarantee\w*\|unlock\w*\|supercharg\w*\|leverag\w*\|cutting-edge\|game-?changer\w*\|seamless\w*\|world-class\|revolutioni[sz]\w*\|synerg\w*\|10x\|growth hack\w*\|crush(ing\|ed)? it)\b` | 0 hits. The check bans every form of "leverage" for simplicity. |
| 2 | Engine names (D6) | Regex for the two forbidden expansions D6 names, plus `Booking Engine Optimization` and `\bGEO\b` | 0 hits; every engine list starts with the Booking Engine |
| 3 | Gendered pronouns | Case-insensitive `\b(he\|him\|his\|himself\|she\|her\|hers\|herself)\b` | 0 hits anywhere in the copy |
| 4 | "Free audit" | `free (engine )?audit` | 0 hits |
| 5 | Tokens | Every token is on the brief's list or follows `[HOMETS_<METRIC>]`; none unfilled in production | 0 unfilled, 0 unknown |
| 6 | Numbers | Every digit sequence in rendered text maps to a `#numbers` row | 0 untraced |
| 7 | D7 | Homets figures are tokens, dated, ratio, rate, delta, or median, and signed off; `#proof` absent if a headline token is unfilled | Pass |
| 8 | SLA line | While version A is live, `within 15 minutes` returns 0 hits | 0 hits |
| 9 | State rendering | Diff every variant string against this deck | All match; no "coming soon," no greyed buttons |
| 10 | Reading level (target) | Flesch-Kincaid grade of body copy, one named tool (for example Python `textstat`), logged per page | ≤8 on `/`, `/audit`, `/teardown`, thanks pages; ≤10 on legal intros. Trade terms are never reworded to pass. |
| 11 | US English | en-US spell check plus `dialling\|finalis\|prioritis\|organis\|colour\|behaviour\|licence\|cancelled\|programme\|maths\|whilst\|enquir` | 0 hits |
| 12 | Style and claims | Numerals, time format, first-mention names; no "leads" promise, benchmark as fact, undated number, competitor name, blamed CSR, or urgency not from the season state | Passes a read-through by someone other than the author |
| 13 | Promises | Each `#promises` and `#operator` disclosure item mapped to its MSA clause | 8 of 8; 7 of 7 |
| 14 | Titles, metas, alt text, link text | Counted on rendered strings; alt text matches the final photos; no "click here," "learn more," "read more," or bare "here" | Titles ≤60, metas ≤155; all pass |
| 15 | Swap test and five-second tests | R4; `#home` | No section fails; pass in both states |
| 16 | Founder read-aloud | Blake reads every page aloud | Every sentence is one Blake would say to a peer |

In the raw Markdown, `\|` inside these regexes is only table escaping. The regexes themselves use a plain `|`.

## Open questions for the founder {#open-questions}

1. **When does the 30-day credit window start?** D6 and `techeo.offers` don't say. *Recommended default:* 30 days from the readout call, as written here; the MSA and `/terms` match.
2. **Audit refund policy.** None is set. *Recommended default:* a full refund if we should have declined the buyer or if they cancel before granting any access; none once work has started. `#faq-audit-refund` and `/terms` wait on this. **Must be decided before the Mon Feb 1, 2027 flip to OPEN**, because `10`'s purchase terms and the Stripe terms checkbox need a refund term; until then `#price` uses its fallback.
3. **Audit handling promises.** *Recommended default:* publish "the audit only reads" and "we send a list of every access you granted at delivery." Both cost nothing.
4. **Teardown turnaround.** *Recommended default:* test calls within 10 business days of the confirmation call, and the walkthrough within 3 business days of the last call. In WAITLIST, work in order from the opening and give an approximate date. Revisit after ten teardowns.
5. **Booked test calls.** *Recommended default:* no emergency scenario in any teardown, and every booked test appointment canceled by phone within the hour. Write the same rule into `techeo.audit` for its no-heat and water-heater scenarios.
6. **Calculator email follow-up.** *Recommended default:* keep `calc-v1`'s "once. No calls and no newsletter."; `08` sends the result and nothing else.
7. **`#proof` rounding.** *Resolved in brief v2 (D7):* every figure rounds toward the less flattering value, changes are computed from unrounded values, and a nonzero value never shows as 0. The source line reads "Rounded toward the less flattering figure." The [HOMETS_WINDOW] format is fixed by `#proof`.
8. **Exclusion wording.** `techeo.guardrails` #coi sets DMA plus radius; the site says only "within [EXCLUSION_RADIUS_MILES] miles." *Recommended default:* choose a radius that covers the whole DMA; otherwise add "or anywhere in the [HOMETS_METRO] market" everywhere at once.
9. **A text-based route for accessibility and privacy requests.** Phone-only contact is a barrier for deaf and hard-of-hearing visitors, even with 711. *Recommended default:* one monitored address on `/accessibility` and `/privacy` only, never in the header or footer.
10. **The Homets standard excerpt in `#engines`.** *Recommended default:* ship it once the IP license is signed, after correcting the source's British spelling of "dialing".
11. **Organizer bio and portrait download.** *Recommended default:* ship both; organizers control channel #1.
12. **Staff names in notes.** *Recommended default:* never; "the person who answered."
13. **"We never publish a recording of any business."** This is stricter than `techeo.legal`. *Recommended default:* keep it; v2 case studies can use approved transcript excerpts.
14. **Homets' non-solicit joinder.** The MSA is signed by Techeo LLC, so "neither Techeo nor Homets Air and Heat will hire your technicians or office staff" binds Homets only if Homets signs a non-solicit joinder or side undertaking to it. `techeo.legal` #contracts provides neither today. *Recommended default:* Homets signs a joinder to the MSA's mutual non-solicit before launch. If it isn't signed by launch, `#operator`, `#promises`, and `#faq-homets-conflict` switch to the Techeo-only sentence at once.
15. **The September opening each year.** Brief D1 defines it as the day after Labor Day, but D2 and this deck hard-code September 7 and September 6, which hold only in 2027 (in 2028 Labor Day is September 4, so selling resumes Tuesday, September 5). *Recommended default:* revise brief D2 to state the rule ("the day after Labor Day") instead of fixed dates, and have `06` derive `{next opening}` and the WAITLIST end date from it each year, with `#faq-peak-season`, the late-window notice, and `#numbers` changing in the same build.
