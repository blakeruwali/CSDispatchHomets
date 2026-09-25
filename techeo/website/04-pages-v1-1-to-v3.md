---
id: techeo.web.pages-later
title: v1.1–v3 Page Specifications & Copy
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, pages, copy, insights, engines, pricing, case-studies, calculator, about, markets, partners, glossary, trades, resources, v1-1, v2, v3]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.offers, techeo.audit, techeo.delivery, techeo.gtm, techeo.financials, techeo.guardrails, techeo.legal, techeo.metrics]
order: 4
---

# v1.1–v3 Page Specifications & Copy

**Every page after v1 answers a question a prospect would otherwise spend a discovery call on, and no page ships until the evidence behind it exists. Each page has a trigger you can check, not just a date, and draft copy for the founder to edit and approve.**

## How to use this document {#scope}

This document owns every v1.1, v2, and v3 page: trigger, purpose, title and meta, outline, sections, copy, data, and acceptance criteria. Everything else belongs to the owner in the brief's `#ownership` table, most often `02` (URLs, templates T1–T11, links, indexing), `03` (WAITLIST reason copy), `08` (form fields, calculator logic, CTA hierarchy), `10` (consent, disclosures, claims ledger), and `12` (article, case-study, and glossary content).

**Conventions.**

- **Copy.** Blockquotes and quoted strings are draft copy that the founder edits and approves (D15). Brief tokens are used exactly. `{curly_braces}` are build-time values (below).
- **Titles and metas** are counted in characters, including spaces. The limits are ≤60 for titles and 120–155 for metas *after tokens are filled*. Where a token appears, both counts are given. These are house limits: Google truncates by pixel width and may rewrite, so preview each at build. Title patterns per template are `07` #titles'. Four pages are named exceptions (listed in `07` #titles): `/about`, because T9's "for HVAC and Plumbing" doesn't describe an about page; `/partners`, because T2's `{Contractors|Shops}` would address contractors on a page written for vendors; and `/for/hvac` and `/for/plumbing`, which name one trade where T9 names both.
- **Ids.** Every H2 on T7, T8, and T9 pages takes the id shown, frozen at first publication (`02` #fragments). FAQ ids are `faq-<page>-<slug>`.
- **Components** have functional names. `05` owns the design and may rename them.

### Build-time values {#values}

| Value | Source | Renders as |
|---|---|---|
| `{next_opening_date}` | `06` `getSeason()`, from D2 | Under WAITLIST / `season`, the season opening: "February 1", "September 7". Under WAITLIST / `capacity`, the capacity date set by `01` open question 2. |
| `{callback_promise}` | `03`'s [SLA line, short] for the live version, switched by `SLA_VERSION` (`06`; `08` decides when B is earned, per D11) | A: "We call back the same business day." B: "We call back within 15 minutes in business hours." A whole sentence, never spliced into another. |
| `{teardown_turnaround}` | `08` | Business days, request to delivery |
| `{prices_effective_date}` | `/pricing` content file | Date in words |
| `{design_partner_count}` | `/pricing` content file | The number of design partners ever signed, in words ("three"; capitalized at the start of a sentence) |
| `{rhythm_start_month}` | Each engine's Homets rhythm log (`#triggers`) | "March 2027" |
| `{doc_count_date}` | The claims-ledger row for `[HOMETS_CSM_DOC_COUNT]` (`10`) | The recount date, in words |
| `{calculator_link}` · `{about_link}` | Route manifest | `/#calculator` → `/calculator`; `/#operator` → `/about` (from v2, unless `/about` slips, `#triggers`) |

### New placeholder tokens {#new-tokens}

These follow the `[HOMETS_<METRIC>]` pattern; `10` adds them to the claims ledger.

| Token | Meaning | Required |
|---|---|---|
| `[HOMETS_CSM_DOC_COUNT]` | Published Homets CSM standards, recounted on the publish date (`01` #message-hierarchy) and always followed by "(counted {doc_count_date})" | Optional; otherwise write "the written standards" |
| `[HOMETS_AEO_PROMPTS_NAMED_FROM]` · `[HOMETS_AEO_PROMPTS_NAMED_TO]` | How many of the 12 prompts named Homets, at baseline and at the latest run | Optional |
| `[HOMETS_AEO_BASELINE_DATE]` · `[HOMETS_AEO_LATEST_DATE]` | The dates of those two prompt runs. A prompt run happens on one date, so the booking-rate windows never stand in for it. The baseline run is the Week 4 Homets self-audit (Oct 2026). | With the two prompt tokens |
| `[HOMETS_<METRIC>_FROM]` · `_TO` | A metric that did not move, e.g. `[HOMETS_MEMBERSHIP_PITCH_RATE_FROM]` | At least one pair on the Homets case study |

**`[HOMETS_UNTOUCHED_FROM]` / `[HOMETS_UNTOUCHED_TO]` render as a share of platform-recorded marketplace leads** ("14% → 0%"), never as a count. A count is an absolute, which D7 bans.

**`[HOMETS_WINDOW]` carries both windows.** It is entered exactly as `03` #proof fixes it, "Before: {period}. After: {period}.", and the build splits it the same way on every page: a from → to pair shows the whole token, and a figure with only an after value shows only its After period. No page uses a separate baseline-window token, unless the brief revises its token list.

### The season CTA {#season-cta}

`SeasonCta` takes its labels from `02` #header-v1. The WAITLIST reason sentence is `03`'s, reused verbatim (D2). Each page supplies a one-line **lead-in**.

| Pattern | OPEN | WAITLIST | Used by |
|---|---|---|---|
| **A · Audit first** | "Book an Engine Audit" → `/audit` · "Get a free phone teardown" → `/teardown` · `tel:` | "Reserve an audit slot" → `/audit` · teardown ("Requested now, done after {next_opening_date}.") · `tel:` · `03`'s sentence | Most pages |
| **B · Teardown first** | Teardown primary, audit secondary | Same; teardown queued | Articles (default), glossary |
| **C · Page form first** | The page's form, then pattern A | Same | `/calculator`, `/markets`, `/partners` |

`08` may reorder any pair. **A flip between OPEN and WAITLIST changes only CTA labels, the banner, and `03`'s sentence.** Prices, sections, and forms never disappear (`01` #season-strategy).

### Acceptance every page inherits {#common-acceptance}

- [ ] All content is in raw HTML with JavaScript off (`06` CI).
- [ ] One H1; H2 ids as specified; breadcrumb per `02` #breadcrumbs.
- [ ] Zero D8 banned words, zero gendered pronouns for the founder, zero unfilled tokens, and zero competitor names (CI grep).
- [ ] Every figure passes D7. No benchmark is stated as fact.
- [ ] Links meet `02` #link-rules and #link-later.
- [ ] `06` performance and `10` WCAG 2.2 AA checks pass. Forms work without JavaScript (POST → 303).
- [ ] OPEN, WAITLIST / `season`, and WAITLIST / `capacity` all render correctly.

## Release triggers {#triggers}

A page ships when **every** condition holds. v2 pages ship in the v2 deploy. v3 pages ship on founder approval once built.

| Page | Release | Earliest | Trigger |
|---|---|---|---|
| `/insights` | v1.1 | Dec 1, 2026 | v1 or `01`'s floor is live. It ships with the first article and never empty. |
| `/insights/<slug>` | v1.1 | Dec 1, 2026 | `12`'s standard and the D7 check pass. For the claim-1 and claim-2 articles, the Week 1 baseline has also been pulled. |
| `/engines/booking` | v2 | Sep 7, 2027 | A non-Homets Booking Sprint has run through week 8, so the calendar on the page has been used on a real client |
| `/engines`, Search, Answer, Ads | v2 | Sep 7, 2027 | `/engines/booking` is approved, and the engine's `techeo.delivery` #rhythm tasks have run on Homets for 3 consecutive months, with a log. **The rhythm log starts no later than Mon Mar 1, 2027.** Owner and hours are set in `11` and `techeo.plan90`; this is Homets' own marketing work, counted as Homets time (open question 18). If an engine's log is short of 3 months on Aug 16, that engine page follows after launch. |
| `/pricing` | v2 | Sep 7, 2027 | A dated price-review note in `techeo.offers` #review, completed by Mon Aug 2, 2027 whether or not a third retainer client has started, stating "unchanged" or the new price for each public rung. Any change is made first to the brief's D6 and `techeo.offers`; the `/pricing` content file and the CI copy of D6 follow in the same PR. Counsel has reviewed the MSA terms the page states. **v2 does not ship without it.** |
| `/case-studies` | v2 | Sep 7, 2027 | At least one non-Homets client case study has passed its trigger. If only Homets qualifies by Aug 16, ship `/case-studies/homets-air-and-heat` alone, keep "Case studies" out of the header and footer, and ship the index when the first client study clears. |
| `/case-studies/<slug>` | v2 | Two weeks after the client's day-90 review | Signed week-0 baseline, review held, written approval of the text, the named URL, and the metro, and a stored evidence pack. `10` signs off. |
| `/case-studies/homets-air-and-heat` | v2 | Sep 7, 2027 | Week 1 baseline pulled, `[HOMETS_WINDOW]` closed, and the Homets → Techeo license covers brand and photos (`techeo.legal` #ip) |
| `/calculator` | v2 | Sep 7, 2027 | `08`'s logic is final, the Gap spreadsheet has been used on ≥3 audits, and `CALC_MISSED_CALLS` matches `techeo.audit` #gap (open question 3) |
| `/about` | v2 | Sep 7, 2027 | Portrait and D9 releases on file; `#how-we-run` approved |
| `/markets` | v2 | Sep 7, 2027 | Brief revised for `/thanks/market-check`; "market" defined in the MSA; internal market register exists with restricted access |
| `/partners` | v2 | Sep 7, 2027 | Brief revised for `/thanks/partner-referral`; `10` has approved the third-party consent wording; the teardown is templated; open question 19 is answered |
| `/glossary` | v3 | Tue Nov 30, 2027 (`01` v3 entry) | v3 entry (`01` #releases). ≥20 entries approved, ≥5 of them meeting `12`'s depth rule. |
| `/glossary/<term>` | v3 | Tue Nov 30, 2027 (`01` v3 entry), with `/glossary` | The depth rule (default: ≥250 words plus a worked example) |
| `/for/hvac` | v3 | Tue Nov 30, 2027 (`01` v3 entry) | v3 entry and ≥2 approved client (non-Homets) HVAC case studies |
| `/for/plumbing` | v3 | Tue Nov 30, 2027 (`01` v3 entry) | v3 entry, ≥1 approved plumbing case study, and a plumbing SOP starter set. Homets' plumbing section is at about 0 of 8 documents today. |
| `/resources` | v3 | Tue Nov 30, 2027 (`01` v3 entry) | v3 entry and ≥3 resources passing `#resources` acceptance |

The v3 entry needs the gate cleared plus 12 weeks of v2 lead data, so no v3 page ships before Tue Nov 30, 2027 (`01` #releases; `11` #v3).

**v2's date is fixed; its scope flexes** (`01` #releases). A v2 page other than `/pricing` whose trigger hasn't fired by Mon Aug 16, 2027 follows after launch. The brief's D1 v2 trigger ("Homets + two partners at day 90 = three case studies") needs a revision recording `01`'s rule that the date is fixed and the scope flexes.

**When a v2 page slips.** The site never links to a URL that isn't built:

| Slipped page | What ships in its place |
|---|---|
| `/engines` or `/engines/booking` | Keep `/#engines` as the target of the header's "Engines" item and of every engine link. `/engines` can't ship without `/engines/booking`. |
| `/engines/search`, `/answer`, or `/ads` | That engine's card on `/engines` and its row in `OtherEngines` render without a link. |
| `/about` | Keep `/#operator` (`{about_link}`) and keep the `/about` 302. |
| `/calculator` | Keep `/#calculator` (`{calculator_link}`). |
| `/case-studies` | Omit "Case studies" from the header and the footer. |
| `/case-studies/homets-air-and-heat` | `/about` `#why` drops its figures sentence and link (as when D7 omits them). |
| `/markets` | "Check your market" links are dropped from `/pricing`, `/about`, and `/engines/booking`; the market question stays on the reservation callback (`08`). |
| `/partners` | `03`'s `/teardown` vendor note stays as it is. |

A slipped page is also excluded from build-order row 14's link updates, the sitemap, and `/llms.txt`. **Acceptance:** the CI crawl finds no link to an unbuilt v2 URL.

---

## v1.1 · `/insights` {#insights-index}

**Template** T6 · **CTA** A. **Purpose:** one URL that shows organizers and vendors that Blake teaches (`01` audience c), and a clean list for crawlers. No signup and no categories.

| | Copy | Chars |
|---|---|---|
| Title | Insights: Notes from an HVAC Operator's Desk \| Techeo | 53 |
| Meta | Notes on booking rate, speed to lead, and marketing that books jobs, from the owner of an HVAC company. Every number is dated and its source is named. | 150 |

**Outline:** H1 "What we've learned running our own phones" · intro · `ArticleList` · H2 "Start here" (once there are ≥6 articles, linking the three claim articles: "If you read three, read these.") · `SeasonCta`.

**Intro:**
> Articles written or edited by Blake [FOUNDER_SURNAME], owner of Homets Air and Heat and founder of Techeo. Each answers a question owners ask us, using numbers from our own HVAC company. Every figure is dated and every source named. If an article wouldn't help an owner decide something, we don't publish it.

**`ArticleList`:** newest first. Each item is an `<article>`: an H2 title link, the one-sentence `answer`, "Published {date}", and "Updated {date}" if there is one. Twenty per page; `/insights/page/<n>` exists only past 20.

**CTA lead-in:** "Want these numbers for your own shop? The Engine Audit builds them from your ServiceTitan data."

**Data:** the article collection (`06`): `title`, `shortTitle`, `answer`, `description`, `published`, `updated`, `updatedNote`, `author`, `sources[]`, `related[]`, `claim`, `draft`.

**Acceptance.** CI fails a build that would emit an empty list. Dates match the articles. The same deploy adds "Insights" to the footer and turns `/blog` → `/insights` into a 301 (`02`).

## v1.1 · `/insights/<slug>` template {#insights-article}

**Template** T7 · **CTA** B (`08` may switch it to A). `12` owns the content; this section owns the frame. **Purpose:** answer one question in the first paragraph, source every figure visibly, and end on the calculator or a teardown, never a pitch.

| | Pattern | Limit |
|---|---|---|
| Title | `{title} \| Techeo`. `title` is question-shaped, ≤50 characters (`12`). | ≤60 |
| Meta | `description`: the answer plus what the article shows | 120–155 |

```
nav#breadcrumb  Home › Insights › {shortTitle}
H1  {title}
    AnswerFirst (≤200 characters) · Byline + dates
H2  {body sections}                  SourceNote under every figure and table
H2  Where these numbers come from    id: sources    DataSourceBox
    ArticleCta (lead-in copy), followed immediately by SeasonCta pattern B
    (teardown primary, state-correct audit CTA secondary)    id: next-step
H2  Read next                        id: read-next  (once two articles exist)
    CorrectionsLog                   id: corrections (only when used)
```

1. **`AnswerFirst`:** one or two sentences that answer the H1, at most 200 characters (`06` schema), identical to the index `answer`. `07` #answer-first follows this length (`12` #change-requests).
2. **`Byline`:** a small portrait, then "By [Blake [FOUNDER_SURNAME]]({about_link}) · Founder, Techeo · Owner, Homets Air and Heat" (`07` #fact-sheet's title line), then "Published {Month D, YYYY}" and, when updated, "Updated {date}: {updatedNote}", in `<time>` elements. **The byline names the real author.** A contractor-drafted article reads "By {Name} · Edited by Blake [FOUNDER_SURNAME]".
3. **`SourceNote`:** "Source: Homets Air and Heat, ServiceTitan call and job reports, [HOMETS_WINDOW]. Rounded toward the less flattering figure." Under a figure with only an after value, the note shows only the After period of [HOMETS_WINDOW] (`03` #proof).
4. **`DataSourceBox`**, on every article:
   - *Measured:* **Source** {system, reports} · **Window** "[HOMETS_WINDOW]" (both periods, as `03` #proof enters it) · **Pulled** {date}, by Blake · **Rounding** "Every figure is rounded toward the less flattering value." · **Not included** {exclusions} · **Relationship** "Homets Air and Heat is owned by Techeo's founder." Client data adds **Approval** "Used with written approval from {Name}, {Title}, {Company}, {date}."
   - *Examples only:* "This article contains no Homets or client measurements. Any figures are worked examples, labeled as examples."
   - *Mixed:* both.
5. **`ArticleCta`**, the lead-in to the end-of-article `SeasonCta` (pattern B, `02` #link-insights item 2):
   > **Put a number on your own phone.** The [calculator]({calculator_link}) turns your call count and booking rate into a monthly figure, using only numbers you type. Or have us call your office: a free phone teardown is three calls to your published number, scored against the standard we hold our own desk to.
6. **`ReadNext`:** one to three articles from `related[]` (fallback: the newest other article). From v3, add up to three glossary terms.
7. **`CorrectionsLog`:** "**Correction, {date}:** {what was wrong; what it now says}."

**`updated` changes only when a figure, claim, or piece of advice changes.** It drives the visible date, `dateModified` (`07`), and `lastmod` (`02`), so the three always agree. Required links: the homepage section the article argues for, at most one `/audit` link in the body, and another article once two exist (`02` #link-insights). The template has no comments, share buttons, signup, reading time, or script embeds.

**Acceptance.** The H1 and first paragraph alone answer the question. Every figure has a `SourceNote`, and the `DataSourceBox` uses the correct variant. Every article ends with the calculator link, the teardown CTA, and the state-correct audit CTA.

---

## v2 · `/engines` {#engines-hub}

**Template** T6 · **CTA** A. **Purpose:** MEO in one screen, each engine with Booking first, and the entry rule.

| | Copy | Chars |
|---|---|---|
| Title | Marketing Engine Optimization: The Four Engines \| Techeo | 56 |
| Meta | Techeo runs four engines as one plan: the Booking Engine first, then Search (SEO), Answer (AEO), and the Ads Engine. What each does and how it is measured. | 155 |

**Outline:** H1 "Four engines, one number: cost per booked job" · H2 One plan, four engines `#meo` · H2 Why the Booking Engine comes first `#booking-first` · H2 We don't scale demand into a broken phone `#entry-rule` · H2 How the engines feed each other `#connections` · H2 What we don't sell `#not-sold` · `SeasonCta`.

**Lead:**
> Every agency in this industry sells traffic. We sell booked jobs, so we run the four parts of your marketing that decide how many you get. We start with the phone, because that's where the money you've already spent leaks out.

**`#meo`:** four clickable `EngineCard`s, always in this order.
> MEO (Marketing Engine Optimization) is our name for running all four engines as one system, judged by one number: what a booked job costs you. Two engines have acronyms because you already use them. Two have plain names, because another acronym would cost more to explain than it's worth.

| Card | One line | Measured by | Sold in |
|---|---|---|---|
| **The Booking Engine** | After the phone rings: answer rate, speed to lead, booking rate, the membership offer | Booking rate, qualified callers | Booking Sprint; Demand Engine |
| **Search (SEO)** | Local pack, Business Profile, a page per town you serve, a crawlable site | Booked jobs from search | Demand Engine |
| **Answer (AEO)** | Whether AI assistants name you when a homeowner asks who to call | Prompts naming you, of 12 | Demand Engine |
| **The Ads Engine** | LSA, Google Ads, marketplaces, on your accounts and card | Cost per booked job, by channel | Demand Engine |

**`#booking-first`:**
> 1. **It works on calls you already pay for.** There's no new spend; we recover more of the money you've committed.
> 2. **You see it move, or not, in your next monthly close.** Search takes months to show results. Booking rate doesn't.
> 3. **It takes having run a customer service desk.** We run one, at Homets Air and Heat, and it's written down.
> 4. **It tells the other three where to spend.** With every booked job logged by source, we know which channel produces jobs, not just leads.

**`#entry-rule`** (`DemandEntry`, reused on `/pricing` and the engine pages):
> Search, Answer, and the Ads Engine are sold together as the Demand Engine, and only to shops whose phones already book. You qualify if you've completed a Booking Sprint with us, or if your Engine Audit shows a qualified booking rate above 65%. Buying more calls for a desk that books half of them is how owners get burned by agencies. We won't do it.

**`#connections`:** a diagram (`05`) with this text in the HTML:
> Search and Answer bring callers. The Ads Engine buys callers. The Booking Engine turns callers into booked jobs and records where each came from. That record sets next month's budget: channels that produce booked jobs get more, and channels that produce only leads get cut.

**`#not-sold`** (`NotSold`, reused on `/pricing`):
> Website redesigns, logos, social media calendars, print, vehicle wraps, and search-only retainers, which would make us responsible for traffic we can't convert. When you need one of those, we'll point you to someone good and take no fee.

("Take no fee" is open-ended, so it waits on open question 20.)

**CTA lead-in:** "The Engine Audit scores all four engines on your own data, in seven business days."

**Acceptance.** D6 order everywhere, the diagram included. No acronym for Ads or Booking, and none of "Sales Engine Optimization," "Ads Engine Optimization," or "GEO." The entry rule matches `techeo.offers` rung 3 ("above 65%," no Engine Score condition) and `03` #faq-why-not-seo-first, and reads the same on `/pricing` and the engine pages (open question 4).

## v2 · The engine page pattern {#engine-pattern}

All four are T9 with CTA A and one outline:

```
nav#breadcrumb  Home › Engines › {engine}
H1  {engine promise}      Lead: what it is, what we do, how it's judged
H2  The problem                            id: problem
H2  What we do                             id: what-we-do     CadenceTable
H2  What we measure                        id: measure        MetricTable
H2  What you provide                       id: you-provide
H2  How it connects to the other engines   id: connects
H2  Price and who it's for                 id: price
H2  Proof                                  id: engine-proof   ProofBlock
H2  The other engines                      id: other-engines  OtherEngines (D6 order)
```

**`ProofBlock`** links each published case study that used the engine, with its short disclosure. **If there is none, it says so:**
> **No client case study for this engine yet.** We've run this work on Homets Air and Heat every month since {rhythm_start_month}. The first client case study follows a Demand Engine client's 90-day review.

This honest-absence block stands in for `02` #link-later's case-study link until one exists. Its second sentence renders only when that engine's Homets rhythm log exists (`#triggers`); otherwise it is cut.

**`#price` on the Search, Answer, and Ads pages** (`DemandPrice`):
> {Engine} is part of the **Demand Engine: $6,500 a month plus your ad spend**, on your own accounts and card. We don't sell it on its own. {DemandEntry, sentence 2.} [See all prices](/pricing)

**Acceptance.** The tasks match `techeo.delivery` #rhythm on the deploy date, and each page changes in the same week `techeo.delivery` does. Targets are labeled as ours. No result is tied to a date.

## v2 · `/engines/booking` {#engine-booking}

This is the first page written, because Booking is the wedge.

| | Copy | Chars |
|---|---|---|
| Title | The Booking Engine for HVAC and Plumbing \| Techeo | 49 |
| Meta | Answer rate, speed to lead, and booking rate, fixed with written SOPs, SLAs, and weekly call scoring. Book more of the calls you already pay for. | 145 |

**H1:** "The Booking Engine: book more of the calls you already pay for"

> The Booking Engine is everything after your phone rings or a lead lands: whether someone answers, how fast a form or marketplace lead gets a call, whether a qualified caller ends the call booked, and whether they hear the membership offer. We install the written system that runs our own HVAC company's customer service desk, then score your calls every week until the numbers move.

**`#problem`:**
> Most shops lose booked jobs in four places, and none of them shows up in an agency report, because agency reports stop at the lead.
> - **Calls nobody answers:** busy mornings, lunch, the last hour of the day.
> - **Slow first touch:** a form or marketplace lead waits an hour, and the homeowner books whoever called first.
> - **Qualified callers who don't book:** they heard a price with no reason attached and said they'd call back.
> - **Marketplace leads never touched:** paid for, sent to an app nobody watched, never called.
>
> In our experience, a missed lead usually means nothing made it visible or nobody owned it. That's a system problem, and systems can be fixed.

**`#what-we-do`**, the first 90 days (`techeo.delivery` #sprint):

| Week | What happens | What you get |
|---|---|---|
| 0 | Kickoff; access confirmed; baseline frozen and signed by you | The numbers we'll be judged against |
| 1 | Our written standards adapted to your prices and policies | Draft SOP set |
| 2 | A playbook and response-time standard per lead source, measured in ServiceTitan | Playbooks; SLA sheet |
| 3 | Live training 1: greeting, qualification, booking, the diagnostic fee | Recording; acknowledgement sheet |
| 4 | Scoring starts: 5 calls, first coaching note to your CS lead | First scorecard |
| 5–8 | Weekly: 5 scored calls, a coaching note, a KPI report; speed-to-lead tracking checked | Weekly scorecard and report |
| 9 | Live training 2: objections, the membership offer, marketplace outreach | Recording |
| 10–11 | Scoring continues; dashboard built; the audit's gaps re-measured | Dashboard access |
| 12 | 90-day review: baseline against today; engines re-scored | Review and next-quarter plan, with a Demand Engine proposal where it fits |

> **After day 90:** each week, 5 scored calls with a coaching note, a response-time check, and a KPI report. Each month, a live training session and a one-page report headlined by cost per booked job. Each quarter, a re-score (open question 5).
>
> **What you keep:** your SOP set, adapted from the [HOMETS_CSM_DOC_COUNT] written standards Homets' desk runs on (counted {doc_count_date}), plus a playbook per lead source and your scorecards. If you leave, all of it goes with you as editable documents.

**`#measure`** (targets from `content/sops/csm/kpis.md`):

| Number | What it means | Our own desk's target |
|---|---|---|
| Answer rate | Inbound calls answered live within your ring standard | 90%+ |
| LSA answer rate | Local Services Ads calls answered live | 95%+ |
| Speed to lead | The time from the moment a customer submits a request (a web form, a marketplace lead, a missed-call text) to the moment a person from your company is speaking with them, as a weekly *median*: one lead found three days late wrecks an average. Where only the dial is recorded, we report first touch (call placed), under that name. | Your SLA, set in week 2 |
| Booking rate | Qualified callers who end the call booked. An out-of-area caller turned away isn't a miss. | 70%+ |
| Membership pitch rate | Non-members who hear the offer. We count the offer, which your team controls. | 60%+ |
| Marketplace leads never touched | Paid leads nobody called | Zero, every day |
| **Cost per booked job** | Spend ÷ booked jobs, by channel | The headline of every report |

> These are Homets' own targets, not an industry benchmark and not a promise for your desk. **Success by day 90** is a qualified booking rate up at least 10 points from your signed baseline, or speed to lead inside your SLA on 90% of marketplace leads. That's a target, and it depends on your team showing up, which is why we ask for that in writing.

**`#you-provide`:**
> Read-only ServiceTitan access. Call recordings, or written permission to call your line as a customer. One named person who owns the rollout. Your CS team at every training. Your current prices and policies. If your team can't make time for training, we'll decline: a system can't be installed in a company that won't show up for it.

**`#connects`:**
> The other three engines depend on this one. It logs where every booked job came from, which tells the Ads Engine what to fund. Google lists responsiveness among its Local Services Ads ranking factors, so a desk that answers fast helps your LSA placement. And every call that Search and Answer bring in lands on this desk.

(`07` verifies Google's current LSA ranking factors before launch.)

**`#price`** (`SprintPrice`):
> **Booking Sprint: $3,500 a month.** 90-day minimum, then month-to-month with 30 days' written notice. It starts with an [Engine Audit](/audit): $1,500, credited in full against your first month if you sign within 30 days of your readout. For residential HVAC and plumbing companies on ServiceTitan that already buy leads, at least [EXCLUSION_RADIUS_MILES] miles from Homets. [All prices](/pricing) · [Check your market](/markets)

**`#engine-proof`:** Homets first, then the partner case studies.

**Acceptance.** The 90-day table matches `techeo.delivery` #sprint row for row. No `{{price:…}}` value appears. The page describes systems that fail, never people who fail (`01` anti-goal 10). Speed-to-lead wording matches `12` #glossary row 5 exactly.

## v2 · `/engines/search` {#engine-search}

| | Copy | Chars |
|---|---|---|
| Title | Search (SEO) for HVAC and Plumbing Contractors \| Techeo | 55 |
| Meta | Local pack, Google Business Profile, service-area pages, and technical fixes, judged by booked jobs from search, not rankings. Part of the Demand Engine. | 153 |

**H1:** "Search (SEO): show up where the calls come from, and count the jobs"

> Search Engine Optimization for a contractor means the local pack, your Google Business Profile, a real page for each town you serve, and a site Google can crawl. We run it inside the Demand Engine and judge it by booked jobs from search, not by a rankings report.

**`#problem`:**
> Most SEO reports show rankings going up. Few show what the phone did. Owners pay for positions nobody calls from, for town pages that are one page with the name swapped, and for traffic that lands on a desk that books half of it. Meanwhile the basics drift: a wrong primary category, reviews arriving slower than the three shops above you, and a site that crawls on a phone.

**`#what-we-do`:**

| Cadence | Work |
|---|---|
| Monthly | Two service-area pages for towns you serve. The structure is ours; the town, local proof, and photos are yours. |
| Monthly | Business Profile posts; category and service checks |
| Monthly | Review velocity: the routine that gets technicians asking every customer |
| Monthly | Technical fix queue: speed, mobile, structured data, indexing, listing consistency |
| Quarterly | Re-score; next quarter's town list |

> **We won't:** mass-produce city pages, buy links, buy or reward reviews, or pick which customers get asked for one (Google's review policies prohibit that; verify at publish). We don't redesign websites. If yours can't take new pages, the audit says so.

**`#measure`:** booked jobs and calls from organic search and the Business Profile, by ServiceTitan lead source (the outcome) · cost per booked job from search · local pack position on 15 buying-intent searches (a diagnostic) · review count and pace against the top three local competitors (a diagnostic).

**`#you-provide`:** Business Profile manager access; website access or an introduction to whoever runs the site; photos from real jobs; the towns you serve and the ones you want more of; a team that asks for reviews.

**`#connects`:**
> Search brings callers. The Booking Engine books them and tags the source, which is how we know whether search is worth its cost. Search and Answer share groundwork: accurate business facts and pages that answer questions directly help both.

## v2 · `/engines/answer` {#engine-answer}

| | Copy | Chars |
|---|---|---|
| Title | Answer (AEO) for HVAC and Plumbing Contractors \| Techeo | 55 |
| Meta | Whether AI assistants name your company when homeowners ask who to call. We run the same 12 prompts every month, record who is named, and fix the causes. | 153 |

**H1:** "Answer (AEO): be the company AI assistants name"

> Answer Engine Optimization decides whether an AI assistant or AI search result names your company when a homeowner asks who to call. Every month we ask the same 12 questions about your city, record who gets named and which sources the answers cite, and fix the signals behind the answer.

**`#problem`:**
> More homeowners now ask an AI assistant who to call, some before they search at all. The answer often names only a few companies, and some assistants show where they found them. If your business facts disagree across the web, your reviews are thin, or your pages bury the answer under a pitch, you're not on the list. Many owners have never checked.

**`#what-we-do`:**

| Cadence | Work |
|---|---|
| Monthly | The 12-prompt test across the major AI assistants: who's named, which competitors, which sources |
| Monthly | Entity work: name, address, phone, services, hours, and service area identical on your site, Business Profile, and the directories assistants read |
| Monthly | Structured data, so machines read the facts the way people do |
| Monthly | Content written to be quoted: short, direct answers to homeowners' questions, using facts you're willing to publish |
| Quarterly | Re-score |

> Three of the twelve, to try tonight: "best HVAC company in {your city}," "who should I call for emergency AC repair in {your city}," "how much does a furnace replacement cost in {your city}."

**`#measure`:**
> Prompts that name you, out of 12, per assistant, with the trend. Competitors named. Sources cited, which tell us what to fix next. Calls where the customer says an AI assistant sent them, captured by your CSRs' lead-source question. **The honest part:** AI answers vary from run to run, and the assistants change often. We report what we saw, with the date. Nobody can promise placement in an AI answer, and we won't. We run a version of this test on techeo.com every month too.

**`#you-provide`:** website and Business Profile access; accurate facts (hours, service area, licenses); a decision on which answers you'll publish, such as a price range for a common job.

**`#connects`:**
> Assistants lean on the same signals as local search, so Answer and Search share groundwork. When an assistant sends a caller, the Booking Engine books them and logs "AI assistant" as the source.

**`#engine-proof`**, if the tokens are filled:
> At Homets Air and Heat, [HOMETS_AEO_PROMPTS_NAMED_FROM] of 12 prompts named us at baseline ([HOMETS_AEO_BASELINE_DATE]); [HOMETS_AEO_PROMPTS_NAMED_TO] of 12 did on [HOMETS_AEO_LATEST_DATE].

**Acceptance.** No AI product names in visible copy (open question 12). The three prompts match `techeo.audit` #workstreams exactly. The full 12 are never published. "More homeowners now ask an AI assistant" has a `10` claims-ledger row with its source, or the sentence is cut; so does any other factual claim in `#problem`.

## v2 · `/engines/ads` {#engine-ads}

| | Copy | Chars |
|---|---|---|
| Title | The Ads Engine for HVAC and Plumbing Contractors \| Techeo | 57 |
| Meta | LSA, Google Ads, and marketplace spend, managed on your own accounts and card. Weekly waste cuts and budget pacing, reported as cost per booked job. | 148 |

**H1:** "The Ads Engine: your accounts, your card, judged by booked jobs"

> The Ads Engine covers Google Local Services Ads, Google Ads, and the lead marketplaces you pay for. Every account stays in your name, on your card. We cut waste every week and report one number: what each booked job cost you, by channel.

**`#problem`:**
> Four leaks we look for in every audit: an LSA budget that runs out before the phones close; bad LSA leads paid for with no feedback to Google; Google Ads spend on searches nobody would choose to pay for; and "conversions" that count page views instead of booked jobs. Add spend that stays flat while demand swings with the season, and marketplace spend nobody compares to booked revenue.

**`#what-we-do`:**

| Cadence | Work |
|---|---|
| Weekly | Search-term review and negatives; budget pacing against your seasonality; bid adjustments |
| Weekly | LSA lead review: every lead's outcome marked, and bad leads rated and reported through Google's lead-feedback tools so the automated credit review can catch them |
| Monthly | Cost per booked job by channel; marketplace spend against booked revenue |
| Quarterly | Re-score; a budget plan for the next season |

> **LSA credits are Google's decision.** Google replaced manual lead disputes with automated credit reviews. We give that system the best record we can, but we can't promise a credit.

(Verify the current process at publish. See open question 13.)

**`#measure`:** **cost per booked job by channel** (the headline) · share of days the LSA budget ran out before closing · share of Google Ads spend on terms we'd exclude · lead-to-booked rate by source · LSA answer rate.

**`AdSpendPolicy`** (also on `/pricing`):
> Every ad account is in your name, and every platform bills your card. We work as a linked manager on your accounts. We never front spend, pass it through our books, or mark it up. Our fee is not a percentage of your spend.

**`#you-provide`:** manager access on your own Google Ads, LSA, and marketplace accounts; your card on each platform; a monthly budget decision (you approve, we pace); ServiceTitan lead-source tags (the Booking Engine sets these up).

**`#connects`:**
> Buying calls for a desk that doesn't book them is waste, so the Booking Engine comes first. Once the desk books, booked jobs by source decide where the next dollar goes.

**Acceptance.** No Attribution Layer, offline-conversion import, or Techeo-held account (D6, D14). The only LSA badge named is "Google Verified." Google retired the older badge names and their money-back program in Oct 2025 (verify), and one old name contains a D8 banned word.

---

## v2 · `/pricing` {#pricing}

**Template** T9 · **CTA** A, with secondary links to `/markets` and `/calculator`. The same deploy removes the `/pricing` 302. **Purpose:** take price off the discovery call (`01` target: price is the first question on ≤25% of calls) by publishing every public rung exactly as D6 does.

| | Copy | Chars |
|---|---|---|
| Title | Pricing for HVAC and Plumbing Contractors \| Techeo | 50 |
| Meta | Every price in writing: free phone teardown, $1,500 Engine Audit credited in full, Booking Sprint $3,500/mo, Demand Engine $6,500/mo plus your ad spend. | 152 |

**Outline:** H1 "What Techeo costs" · H2 The four steps `#ladder` · H2 What's included `#included` · H2 Terms `#terms` · H2 Ad spend `#ad-spend` · H2 When we'll tell you not to hire us `#when-we-say-no` · H2 What we don't sell `#not-sold` · H2 Questions about price `#questions` · `SeasonCta`.

**Lead:**
> Every standard price we offer new clients is on this page, and we don't negotiate them. If a price doesn't fit, we'll offer less scope, not a lower number. Prices apply to agreements signed on or after {prices_effective_date}.

**`#ladder`**, four `RungCard`s:

> **Booking Rate Teardown: free.** Three calls to your published number at different times of day, as a homeowner would make them, plus a test of your web form if you have one. We take structured notes on each call, not recordings, and score them against the standard we hold our own desk to. You get a 15–20 minute walkthrough: a recording of our screen and voice going through the scored notes, not a recording of your calls. We need nothing but your number. [Get a free phone teardown](/teardown)

> **Engine Audit: $1,500.** Seven business days from access. It covers five workstreams: the Booking Engine (40% of the score), Search (20%), Answer (15%), the Ads Engine (15%), and the money (10%). You get five mystery-shop contacts (four calls at awkward hours and a web-form test), scored, with the worst moments written up; an Engine Score; and a Gap Statement, which is the yearly revenue your own data says is leaking, with every step shown and rounded down. Also a 12–18 page report, a recorded 30-minute readout, and a three-item 90-day priority list. **Credited in full** against the first month of any retainer signed within 30 days of your readout. The audit itself is never discounted. [Book an Engine Audit](/audit)

> **Booking Sprint: $3,500 a month.** 90-day minimum, then month-to-month with 30 days' written notice. It installs the Booking Engine; see the table below. [How it works](/engines/booking)

> **Demand Engine: $6,500 a month, plus your ad spend.** All four engines, with ad spend on your own accounts and card. Month-to-month with 30 days' written notice. {DemandEntry, sentence 2.} [The four engines](/engines)

**`#included`** (`IncludedTable`):

| | Booking Sprint | Demand Engine |
|---|---|---|
| Adapted SOP set and channel playbooks | Yes | Included if you start with a Booking Sprint |
| Response-time standards measured in ServiceTitan | Yes | SLA compliance check, weekly |
| 5 scored calls a week, each with a coaching note | Yes | Yes |
| Weekly KPI report; live CS training | Yes | Included if you start with a Booking Sprint |
| Ads Engine: LSA, Google Ads, marketplaces, weekly | — | Yes |
| Search: 2 service-area pages a month, Business Profile, reviews, technical fixes | — | Yes |
| Answer: the monthly 12-prompt test, entity and structured-data work | — | Yes |
| One-page monthly report; re-score | Day-90 review, then a monthly report and a quarterly re-score | Monthly; quarterly |
| Ad spend | — | Yours, on your card |
| Call-tracking software, if you lack it | On your account; the cost is stated before you sign | Same |

The Demand Engine column lists only what `techeo.delivery` #rhythm lists. What a client entering it directly gets of the Booking Engine's setup is open question 9.

**`#terms`** (must match the MSA, `techeo.legal` #contracts; counsel and `10` confirm):
> - **Billing:** monthly in advance, on auto-pay by ACH or card. No net terms.
> - **Term:** the Booking Sprint has a 90-day minimum. After that, everything is month-to-month with 30 days' written notice.
> - **Your accounts:** Google Ads, Business Profile, LSA, analytics, call tracking, ServiceTitan. All of them are in your name. We're a user on them, never the owner.
> - **Leaving:** you get everything: SOPs as editable documents, dashboards, playbooks, written confirmation of account ownership, and a 30-minute handover call.
> - **One client per market per trade,** in writing. [Check your market](/markets)
> - **Results are targets,** with what each depends on written down. No one can promise you a booking rate, and our agreement doesn't pretend to.
> - **Prices rise 5% a year** on your agreement's anniversary. It's written in at signing, so it's never a negotiation later.

(Counsel confirms that "anniversary" matches the MSA's "on renewal" for month-to-month terms.)

**`#ad-spend`:** `AdSpendPolicy`, plus:
> If your spend or scope grows enough to change the work, we'll say so at the quarterly review, and you decide.

**`#when-we-say-no`** (the default for open question 1):
> We recommend a retainer only when your own numbers, not an industry average, show a monthly gap many times our fee, and we show you the arithmetic. If the gap is small, the audit says so. If your marketing and phones are already well run (an overall Engine Score of 86 or more), we'll tell you and won't sell you a retainer.

**`#questions`:**

| Id | Q | A |
|---|---|---|
| `faq-pricing-discounts` | Do you discount? | "No. If the number doesn't fit, we offer less scope. Discounting the same work would tell our next client the price was made up." |
| `faq-pricing-design-partners` (shown from v2 launch whenever `design_partner_count` is 1 or more) | Does anyone pay less? | "Yes. {design_partner_count} early clients are design partners. They pay a reduced fee for their first six months in exchange for sharing their data, publishing a named case study, and giving feedback. Each case study says so. The program is closed." |
| `faq-pricing-skip-audit` | Can I skip the audit? | "No. It sets the baseline we're judged against and tells us both whether to work together. Sign within 30 days of the readout and it costs you nothing." |
| `faq-pricing-search-only` | Can I buy just SEO? | "No. It would make us responsible for traffic we can't turn into booked jobs." |
| `faq-pricing-percent-of-spend` | Do you take a cut of ad spend? | "No. Our fee is flat, and your spend goes from your card to the platform." |
| `faq-pricing-price-change` | What if prices change after I reserve? | "We'll tell you before you pay. Signed agreements change only by the 5% annual increase." |

**Never published anywhere on the site:** the design-partner price; the Attribution Layer (D6); the 15% pricing rule unless open question 1 says otherwise; any client's fee, scope, or start date; hourly rates, costs, margins, or the audit's contribution.

**WAITLIST** adds `03`'s sentence and, under the audit card: "The next audit slots open {next_opening_date}. Reserve a slot now; no payment is taken to reserve."

**Data.** One content file holds the prices, `{prices_effective_date}`, and `design_partner_count`. `07` builds `Offer` markup from the same file. `10` uses the same count in `ConnectionDisclosure` ("one of Techeo's {design_partner_count} design partners"; a change request to `10` #endorsements).

**Acceptance.** CI diffs the content file against a checked-in copy of D6's table. The same prices appear on `/`, `/audit`, the engine pages, and in the markup. Links: `/audit`, `/teardown`, `/calculator`, `/markets`, `/#promises`. Counsel has signed off `#terms`.

---

## v2 · `/case-studies` {#case-studies-index}

**Template** T6 · **CTA** A.

| | Copy | Chars |
|---|---|---|
| Title | Case Studies: Dated, Client-Approved Results \| Techeo | 53 |
| Meta | Each case study shows a signed baseline, a dated measurement window, the data source, and what did not move. Every number is approved by the client. | 148 |

**Outline:** H1 "Case studies: what moved, what didn't, and who signed off" · lead · H2 What every case study here includes `#standard` · `CaseCard`s · H2 Is this typical? `#typical` · `SeasonCta`.

> Every case study here is published under the client's real name, with numbers from their own ServiceTitan data, approved by them in writing. We show what didn't move as well as what did.

**`#standard`:** 1. A baseline the owner signed before we started · 2. Dated before and after windows · 3. The source of each number · 4. What we did · 5. What moved, as ratios and changes, rounded toward the less flattering value · 6. What didn't move · 7. Our relationship with the company, stated at the top · 8. The client's dated written approval.

**`CaseCard`** (Homets first, then by date): company (H3 link) · trade · metro · "Booking Sprint, started {Month YYYY}" · headline change and window · short disclosure: *Homets* "Owned by Techeo's founder. Not a paying client." · *Design partner* "Design partner: paid a reduced fee in exchange for this case study." · *Otherwise* "Paying client."

**`#typical`**, until `AllClientsLine` is required:
> We don't know yet, and we won't pretend to. A handful of companies isn't enough to say what a typical result is. Yours depends on your team, your lead sources, your season, and how much of the system you put to work. The audit shows what's possible from your own numbers.

**From then on**, `#typical` is the `AllClientsLine` followed by:
> That's every client, not a selection. Yours depends on your team, your lead sources, your season, and how much of the system you put to work. The audit shows what's possible from your own numbers.

**`AllClientsLine`** (here and in `#typical` on every T8 page; `10` #endorsements):
> Across all {n} Booking Sprint clients so far, the day-90 change in qualified-caller booking rate ranged from {min} to {max} points.

It is generated from `10`'s claims ledger, counting clients that didn't move and clients never published, in the same build as any new case study. **It is required once at least five non-Homets clients have day-90 data and every counted client has signed the aggregate-results clause (`10` #endorsements). Until then the "We don't know yet" text stands.** At a smaller count, the minimum and maximum would be single clients' exact results, and could expose a client who never approved publication.

**Acceptance.** No card appears without its disclosure, and no card is anonymized. Each card's figure matches its page. `AllClientsLine` is present once at least five non-Homets clients have day-90 data and every counted client has signed the aggregate-results clause (`10` #endorsements), and absent before then; the build fails if a counted client lacks the clause. Its {n} counts every Booking Sprint client past day 90.

## v2 · `/case-studies/<slug>` template {#case-study-template}

**Template** T8 · **CTA** A · **Slug:** company name (`02`). `12` owns the process and the drafts; this section fixes the structure.

**Why it's fixed.** The FTC's Endorsement Guides (16 CFR Part 255, revised 2023) treat a featured result as what others can generally expect. Unless we can substantiate that, the page must clearly disclose the generally expected result; a "results not typical" disclaimer is not enough (§255.2(b)). That is why `#typical` carries `AllClientsLine`. The Guides also require material connections to be disclosed, such as a reduced fee given for the case study or common ownership. The Consumer Reviews and Testimonials Rule (16 CFR Part 465, in force since Oct 21, 2024) bars fake or misattributed testimonials and undisclosed insider ones. `techeo.legal` #compliance requires every number to be backed by data we can produce on request. **`10` confirms the current text of both before v2. This is not legal advice.**

| | Pattern | Limit |
|---|---|---|
| Title | `{Company}: {Metric} Case Study \| Techeo` | ≤60 |
| Meta | "How {Company} took its {metric} from {from} to {to}, with the window, the source, and what did not move. {Relationship}." | 120–155 |

```
nav#breadcrumb  Home › Case studies › {Company}
H1  {Company}: what changed on the phones
    ConnectionDisclosure (full) — under the H1, above any number
    CaseFacts
H2  The results                       id: results           MetricDelta ("{metric} from {from} to {to}" first)
H2  Where these numbers come from     id: sources           DataSourceBox (case)
H2  What the desk looked like before  id: before
H2  What we did                       id: what-we-did
H2  What moved                        id: what-moved
H2  What didn't move                  id: what-did-not-move
H2  What {Company} put in             id: what-it-took
H2  In their words                    id: in-their-words    (approved only)
H2  Is this typical?                  id: typical
    ApprovalLine · UpdateLog (id: updates) · engines used · /pricing · SeasonCta
```

| Component | Required content |
|---|---|
| `ConnectionDisclosure` | Design partner: "{Company} was one of Techeo's {design_partner_count} design partners. It paid a reduced fee for its first six months in exchange for sharing its data, publishing this case study under its own name, recording a video, and introducing us to two peers." Paying client, verbatim from `10` and only if true: "{Company} is a paying Techeo client. It received nothing for this case study." Never collapsed, and never smaller than body text. |
| `CaseFacts` | Trade · metro · CRM · engagement and start month · "{Owner} signed the week-0 baseline on {date}" · before window · after window · source |
| `MetricDelta` | First, the headline: "{metric} from {from} to {to}", with its windows. Then Number · Before · After · Change. Ratios, shares, medians, and point changes only. No revenue, call, job, or truck counts, even with approval (D7). Rounded toward the less flattering value: an after-rate of 71.8% shows as 71%; a before-rate of 52.3% shows as 53%. |
| `DataSourceBox` | "{Company}'s ServiceTitan account: {reports}" · pulled {date} by Techeo · "{Owner} reviewed the figures on {date}" · definitions of "qualified caller" and each metric · exclusions · "The reports behind every number are on file and available to {Company} on request." |
| `#before` | Systems, never people |
| `#what-we-did` | Week ranges from `techeo.delivery` #sprint, plus what was specific to this client |
| `#what-moved` | One paragraph per metric; "we believe" wherever causation isn't proven |
| `#what-did-not-move` | **Required, never empty.** At least one metric, with figures. If everything moved, name the one that moved least. |
| `#what-it-took` | Training hours, the internal owner, the access granted: the dependencies the results clause names |
| `#in-their-words` | The client's own words, edited only for length, with approval. Video gets edited captions, an HTML transcript, and audio description or an equivalent spoken narration of any visual-only information, such as a name lower-third or B-roll (WCAG 2.2 SC 1.2.5). The disclosure appears above the player and on screen for the first 5 seconds, and is spoken at the start (`10`). We script nothing. |
| `#typical` | `AllClientsLine`, once at least five non-Homets clients have day-90 data and every counted client has signed the aggregate-results clause (`10` #endorsements), then: "This is one company's result. Your team, lead sources, and season will produce your own. The audit shows what's possible from your numbers." Until then the quoted text stands alone. |
| `ApprovalLine` | "Reviewed and approved for publication by {Name}, {Title}, {Company}, on {date}. Numbers last verified {date}." |
| `UpdateLog` | "Updated {date}: {e.g., added day-180 figures}." Updates happen in place, and the slug never changes. |

**Evidence pack** (internal; `10` retention): the signed baseline, dated ServiceTitan exports or screenshots behind each figure, the approval, D9 releases, and the Design Partner Agreement clause granting publication and the URL. **If approval is withdrawn,** the page comes down within one business day and returns 404.

**Acceptance.** The disclosure sits above the first number. No digit appears in the H1 (except in the company's own name); figures stay in the meta and in `#results`. `10` traces one `MetricDelta` value per study to the pack. The approval postdates the last content change. No customer data and no unblurred screens (D9).

## v2 · `/case-studies/homets-air-and-heat` {#case-study-homets}

**The v1.1 claim-1 article** (`01` open question 5; `02` decides). *Recommendation:* keep both, with no 301. The article teaches, this page carries the evidence, and the article links here.

| | Copy | Chars |
|---|---|---|
| Title | Homets Air and Heat: Booking Rate Case Study \| Techeo | 53 |
| Meta | How Homets Air and Heat took its qualified booking rate from [HOMETS_BOOKING_RATE_FROM] to [HOMETS_BOOKING_RATE_TO], with the window, the source, and what did not move. Techeo's founder owns Homets. | 198 as written · 154 filled |

The title can't avoid the Homets name under T8, which breaks `07` #query-map's rule that Techeo titles never carry it. **Change request to `07`:** add this one page as the exception.

**H1:** "Homets Air and Heat: how our own desk's booking rate moved"

**`MetricDelta` headline:** "Qualified booking rate from [HOMETS_BOOKING_RATE_FROM] to [HOMETS_BOOKING_RATE_TO] ([HOMETS_WINDOW])"

**`ConnectionDisclosure`:**
> **Our relationship:** Homets Air and Heat is owned by Blake [FOUNDER_SURNAME], who also owns Techeo. Homets was never a paying client. This is the system Techeo sells, measured in the company where it was built.

**`CaseFacts`:** HVAC company with a plumbing team, as the founder confirms (open question 16) · **Figures cover:** {the business units the figures cover; default: residential HVAC calls, with commercial and plumbing calls excluded} · [HOMETS_METRO] (no Techeo clients within [EXCLUSION_RADIUS_MILES] miles) · ServiceTitan · No engagement: built in-house, and it became the Booking Sprint · **Baseline:** "Pulled from ServiceTitan history for the Before period of [HOMETS_WINDOW] by Blake [FOUNDER_SURNAME] on {date}. Homets wasn't a client, so there's no week-0 signature; the reports are on file." · After window: the After period of [HOMETS_WINDOW].

The business units in `CaseFacts` and the exclusions in `#sources` follow the founder's answer to open question 16. No second Homets person checks the baseline (open question 17). Verifying figures for Techeo's marketing is Techeo work, which `techeo.guardrails` #coi item 6 bars for Homets staff without a separate written agreement and separate pay. If the founder wants a second check, it goes to a person outside Homets under a written agreement, and the page names that person's role, never a Homets title.

**`#results`:**

| Number | Before (Before period of [HOMETS_WINDOW]) | After (After period of [HOMETS_WINDOW]) |
|---|---|---|
| Booking rate, qualified callers | [HOMETS_BOOKING_RATE_FROM] | [HOMETS_BOOKING_RATE_TO] |
| Marketplace leads never touched, share of platform-recorded leads ({channels}) | [HOMETS_UNTOUCHED_FROM] | [HOMETS_UNTOUCHED_TO] |
| Answer rate, inbound | Not reported for this window | [HOMETS_ANSWER_RATE] |
| Median first touch (call placed), Angi leads | Not reported for this window | [HOMETS_SPEED_TO_LEAD_MEDIAN] |

If before values exist, add `[HOMETS_ANSWER_RATE_FROM]` and `[HOMETS_SPEED_TO_LEAD_MEDIAN_FROM]`. Never estimate. Angi is the only marketplace that reaches ServiceTitan automatically (`content/playbooks/speed-to-lead.md`); if another channel becomes measurable for both windows, the row names it.

**`#sources`:**
> Homets' ServiceTitan call, lead, and job reports for both windows, pulled by Blake [FOUNDER_SURNAME]. "Qualified" excludes out-of-area callers, commercial calls, plumbing calls, and wrong numbers. First touch counts only marketplace channels whose leads reach ServiceTitan automatically; we don't report what we can't measure. The untouched share uses each platform's own lead records as the denominator. Channels without records for the before window are excluded and named. Every figure is rounded toward the less flattering value, and the reports are on file.

**`#before`** (drawn from `content/playbooks/speed-to-lead.md`; the founder confirms):
> When our call volume rose, the phones filled up and the marketplace leads quietly became nobody's job. They arrived in apps, not on the phone, with nothing ringing to demand attention, and on a busy day work that doesn't interrupt you doesn't get done. Our standards lived in people's heads, so they varied by person and by day.

**`#what-we-did`:**
> 1. **Wrote the desk down:** [HOMETS_CSM_DOC_COUNT] standards (counted {doc_count_date}) covering greeting, intake, emergency triage, booking, the diagnostic fee, the membership offer, and ticket quality, each tied to a line on a scoring rubric.
> 2. **Gave marketplace leads an owner:** one CSR per shift on lead duty. A new lead outranks the inbound queue for its first-touch window, and every lead gets the full attempt cadence before it's closed.
> 3. **Made invisible leads visible:** leads from platforms that don't reach ServiceTitan are entered at first touch, so every lead we work is on the record, and each platform's own lead records show any we missed.
> 4. **Scored calls every week** against a weighted rubric, reviewed in a weekly one-on-one.
> 5. **Put the same short list of numbers on a weekly review,** against written targets.

The attempt count stays unpublished: the source gives it as `{{price:marketplace_attempts}}` (`01` R1), unless the founder confirms it may be published.

**`#what-moved`:** the founder writes one paragraph each for booking rate and untouched leads: the change, and what we believe caused it.

**`#what-did-not-move`:** at least one filled pair, e.g.
> Membership pitch rate went from [HOMETS_MEMBERSHIP_PITCH_RATE_FROM] to [HOMETS_MEMBERSHIP_PITCH_RATE_TO] over the same windows. {What we think is behind it; what we're doing about it.}

**Guardrail (`01` R1):** a metric that didn't move may appear only if it's internal (e.g., membership pitch rate). Customer-facing gaps (weekend coverage, a town, staffing) appear only in the past tense, once fixed.

**`#what-it-took`:**
> A weekly one-on-one for every CSR, a manager's time to score calls, and an owner willing to point the audit at the company first. We ran the full Engine Audit on Homets before charging anyone for one. The parts that embarrassed us are the parts of the audit that work.

**`#in-their-words`:** omitted. A founder quoting their own company is not an endorsement.

**`#typical`:** `AllClientsLine` first, once required (`#case-studies-index`), then:
> No one should read one company's result, least of all the founder's own, as a prediction. It shows the system works where it was built. The design-partner case studies are the closer comparison, and there are only a few of them.

**`ApprovalLine`:** "Approved for publication by Blake [FOUNDER_SURNAME], owner of Homets Air and Heat, on {date}. Numbers last verified {date}."

**Change request to `12`:** its case-study table copied the countersignature step from an earlier draft of this page; it is withdrawn.

**Media:** two or three operational photos (`05`), with releases and no customer data. No Homets employee is named or given an identifying title (`01` open question 8).

---

## v2 · `/calculator` {#calculator}

**Template** T10 · **CTA** C (`form_calculator_email`, then A). `08` #calculator owns logic, section order, keys, rounding, validation, and the form. This section is visible copy only. It's the site's one island (D3). **Purpose:** put a dollar figure on the leaks in `techeo.audit` #gap using only the owner's numbers, without pretending to be an audit (`01` anti-goal 4).

**Four sections, and a fifth behind a flag.** Sections 1–4 are `techeo.audit` #gap's four terms, in `08`'s order. Unanswered calls, which `#leak` names, sit behind `CALC_MISSED_CALLS` and stay off until `techeo.audit` #gap adds that term (open question 3). **The page has two copy variants, keyed to the flag.** Where a row below gives only one, it serves both.

| | Flag off (default) | Chars | Flag on | Chars |
|---|---|---|---|---|
| Title | Booking Gap Calculator for Contractors \| Techeo | 47 | Missed-Call Revenue Calculator for Contractors \| Techeo | 55 |
| Meta | Put a monthly dollar figure on unbooked callers, untouched marketplace leads, early LSA cutoffs, and wasted ad spend. Your numbers only. No email. | 146 | Put a monthly dollar figure on missed calls, unbooked callers, untouched marketplace leads, early LSA cutoffs, and ad waste. Your numbers only. No email. | 153 |

**Outline:** H1 "Where your booked jobs leak, in dollars" · lead · H2 Before you start `#before-you-start` · H2 Your numbers `#inputs` (the island) · H2 Your result `#result` (live region) · H2 How the arithmetic works `#formulas` · H2 A worked example `#example` · H2 What this is not `#not-an-audit` · form · `SeasonCta`.

Lead, flag off:
> Four places booked jobs leak, priced with your own numbers. Nothing you type leaves this page unless you ask us to email you the result.

Lead, flag on:
> Five places booked jobs leak out of a contractor's phone, priced with your own numbers. Nothing you type leaves this page unless you ask us to email you the result.

**`#before-you-start`:**
> Use a typical month, not your busiest. Pull the numbers from ServiceTitan if you can. The result is only as good as your weakest estimate. If you don't know a section, leave it blank; blank counts as zero, never as our guess.

**`#inputs`** (`08` owns keys, ranges, and messages):

| Section (`08`) | Labels (key) | Help |
|---|---|---|
| Shared | Average revenue per booked job (`avg_revenue`) | "Revenue from booked jobs ÷ booked jobs, same month." |
| 1 · Unbooked callers | Qualified callers in the month (`qualified_calls`) · Your current booking rate (`booking_rate_pct`) · a read-only line: "Target: 70%, the standing target we hold our own desk to at Homets." | "Answered callers who needed a service you offer, in your area." · "Qualified callers who booked ÷ qualified callers." |
| 2 · Marketplace | Leads nobody called (`untouched_leads`) · Your close rate on leads you reach (`marketplace_close_pct`) | "Angi, Thumbtack, Yelp, and similar." |
| 3 · LSA cutoff | Days the budget ran out before closing (`lsa_cutoff_days`) · Jobs you'd book after that time, per day (`lsa_jobs_per_day`) · Average revenue per LSA job (`avg_revenue_lsa`, optional) | "Be conservative. Leave revenue blank to use your average." |
| 4 · Google Ads | Monthly spend on search terms you'd never choose (`wasted_ads_spend`) | "From the search terms report. Leave blank if you haven't looked; the audit does." |
| 5 · Unanswered (flag on only) | Inbound calls (`inbound_calls`) · Calls answered live (`answered_calls`) · Share of answered calls that were real customers (`real_customer_pct`) | "Leave out wrong numbers, sales calls, and out-of-area callers." |

**Section messages** (`08`): a blank section shows "Not entered: $0." A half-filled section gets "Fill in both numbers in this section, or clear it."

**`#result`:** one line of exact arithmetic per section with the owner's numbers, then:
> **Monthly total: ${monthly}. A year at this pace: ${annual}.** Rounded down. The yearly figure is a typical month × 12, so a peak month overstates it. This is arithmetic on your inputs, not a measurement of your business.

"Email me this breakdown" opens `form_calculator_email` inline. The result is always visible before the email is asked for (`01` anti-goal 5).

**`#formulas`** (static; `08` confirms each):
> 1. Qualified callers × (70% − your current rate) × revenue per job. At or above 70%, this line is $0.
> 2. Marketplace leads never touched × marketplace close rate × revenue per job.
> 3. Days the LSA budget ran out × jobs per day after the cutoff × revenue per LSA job.
> 4. Monthly spend on wasted searches.

Flag on adds:
> 5. Missed calls × share that are real customers × your **current** booking rate × revenue per job. We use the current rate, not the target, to stay conservative.

**`#example`** (never styled as a result), flag off:
> **Example inputs, not a benchmark:** 300 qualified callers, a 50% booking rate against our 70% target, $400 per booked job, 10 untouched marketplace leads at a 30% close rate, 4 early LSA cutoffs at 1 job each, and $500 of wasted spend.
> 1. 300 × 20% × $400 = $24,000 · 2. 10 × 30% × $400 = $1,200 · 3. 4 × 1 × $400 = $1,600 · 4. $500
> Monthly: $27,300, shown as **$27,000**. Yearly: $327,600, shown as **$320,000**.

Flag on, the inputs add "440 inbound calls, 400 answered live, and 75% of answered calls real customers (the 300 above)":
> 5. 40 × 75% × 50% × $400 = $6,000
> Monthly: $33,300, shown as **$33,000**. Yearly: $399,600, shown as **$390,000**.

(Rounding: `08` #calculator. If `03`'s `#calculator` has a worked example, both pages use the same inputs.)

**`#not-an-audit`:**
> It isn't an audit, a forecast, or a promise. It knows only what you told it. The Engine Audit builds this figure from your ServiceTitan data, calls your line four times, tests your web form, and shows every step. [How the Booking Engine closes these leaks](/engines/booking)

**`<noscript>`:** "The calculator needs JavaScript. Everything it does is written out below, so you can do it on paper in five minutes."

**CTA lead-in:** "Want this built from your real numbers instead of estimates? That's the Engine Audit's Gap Statement."

**Acceptance.** With JavaScript off, every input label and help text is in the HTML; only computing a result needs the island. Only the 70% target is supplied, and it is read-only. Both examples recompute exactly under `08`'s rounding. The result is announced to screen readers, and help text is associated with each input. Section names and order match `08` and `techeo.audit` #gap, and the flag-on copy ships only when #gap has the unanswered-calls term.

---

## v2 · `/about` {#about}

**Template** T9 · **CTA** A, with `tel:` secondary. The same deploy removes the `/about` 302. **Purpose:** verify the messenger (`01` job 1). Who Blake is, what Homets is, how the two companies are kept apart, and as much of the guardrails as earns trust without exposing internals.

| | Copy | Chars |
|---|---|---|
| Title | About Techeo: Blake [FOUNDER_SURNAME], HVAC Operator \| Techeo | 44 + surname (fits 60 with a surname of 16 characters or fewer) |
| Meta | Techeo is owned by Blake [FOUNDER_SURNAME], who owns Homets Air and Heat in [HOMETS_METRO]. How we keep the two apart and why we take no clients near Homets. | 157 as written · 126 + surname + metro filled: ≤155 if the two total ≤29 characters; otherwise shorten |

The title leaves out the Homets name, because hometsair.com must win "homets air and heat" (`07` #query-map). It is a named exception to T9's pattern (`#scope`).

**Outline:** H1 "Techeo is run by an HVAC operator" · lead and portrait · H2 Why I started Techeo `#why` · H2 Homets Air and Heat `#homets` · H2 How we keep the two companies apart `#separation` · H2 Where we don't work `#where-we-dont-work` · H2 How Techeo is run `#how-we-run` · H2 For organizers and hosts `#bio` · `SeasonCta`.

> Blake [FOUNDER_SURNAME] owns Homets Air and Heat, an HVAC company in [HOMETS_METRO]. Techeo installs the phone-and-follow-up system Homets runs on in HVAC and plumbing companies outside that market, then grows demand on top of it. You keep every account.

**`#why`** (first person, signed; every factual sentence must stay true):
> I own an HVAC company. When our call volume rose, the phones filled up and the marketplace leads quietly became nobody's job: already paid for, never called. No marketing report showed it, because marketing reports stop at the lead.
>
> So we wrote the desk down. Every standard our customer service team works to is a written document: how we greet, what we ask, how we book, how fast a marketplace lead gets a call, how many times we try. Each is tied to a scoring rubric and reviewed weekly. Our qualified booking rate went from [HOMETS_BOOKING_RATE_FROM] to [HOMETS_BOOKING_RATE_TO] ([HOMETS_WINDOW]). [The full case study](/case-studies/homets-air-and-heat)
>
> Other owners asked how. Techeo is my answer: the same system, installed in your company, with demand scaled on top only once your phone books.
>
> — Blake [FOUNDER_SURNAME]

(If D7 omits the numbers, cut that sentence and the link.)

**`#homets`:**
> Homets is an HVAC company in [HOMETS_METRO], owned by Blake. Every standard Techeo installs was written and tested there, and each new version of the Engine Audit runs on Homets first. Techeo is a separate company. It doesn't service homes and never refers homeowners to Homets.

If `02` open question 3 approves the Homets link, it moves here with the About role. Every description of Homets on this page, in `#bio`, and in the lead follows the trade mix the founder confirms (open question 16).

**`#separation`:**
> - **Separate companies:** Techeo LLC has its own bank account, books, contracts, and accounts, none of them shared with Homets.
> - **Your data never works for Homets:** nothing we learn informs Homets' pricing, hiring, marketing, or plans. It's in your agreement.
> - **Your ServiceTitan access serves your engagement only,** never to compare you with Homets or anyone else.
> - **No Homets employee works on your account** without a separate written agreement and separate pay.
> - **No poaching, either way:** a mutual non-solicit covers your technicians and office staff.
> - **If Homets ever expands toward your market,** you'll hear it from us first, and you can leave without penalty.

**`#where-we-dont-work`:**
> No clients within [EXCLUSION_RADIUS_MILES] miles of Homets, ever. And one HVAC client and one plumbing client per market, written into the agreement, so we never run the same local strategy for two competitors. [Check whether your market is open](/markets)

**`#how-we-run`.** This table decides what the site says about `techeo.guardrails`:

| Publish | Copy | Keep private, and why |
|---|---|---|
| Homets comes first | "We run an HVAC company too. When it's busiest, so are our clients, so we take no new clients from May through early September or in December and January. Existing clients are served all year." | The weekly hour cap (internal; reads as "part-time") |
| Protected hours | "Blake takes no scheduled calls before 10:00 on weekdays, on Monday mornings, or on Friday afternoons. That's when Homets' dispatch board needs its owner, and you'll see it on our calendar. Our phone is still answered live from 8:00." The hours follow `08`'s published hours (D11: 8:00–18:00 [TZ], Monday to Friday). | What fills those blocks |
| A client limit | "We take a limited number of clients, set by hours, not ambition. When we're full, new audits pause, and this site says so with a date." | The number (three) and the client-#4 gate (together with `/markets`, they could help identify clients) |
| An outside check | "Techeo isn't allowed to borrow from Homets: not money, not staff, not attention. A named person other than the founder can pause Techeo's new business if Homets' own phone standards slip. Existing clients keep being served." | The enforcer's name, the metrics, the thresholds (a visible trip would signal trouble at Homets) |
| We decline shops that don't need us | "If the audit scores your business as well run, we'll say so and not sell you a retainer." | — |
| Our promises | "[What we put in writing](/#promises)" | Financials; license terms |

**`#bio`:**
> **Short bio, free to use:** Blake [FOUNDER_SURNAME] owns Homets Air and Heat, an HVAC company in [HOMETS_METRO], and founded Techeo to install the same call-handling system in HVAC and plumbing shops outside that market. Techeo's work starts with the calls a contractor already pays for and loses on the phone.

Outside the bio block: "Blake speaks and writes about booking rate, speed to lead, and what contractors should require of any marketing agency." (The bio itself is `03` #operator's organizer bio, word for word, per `07` #fact-sheet; any wording change goes to `07` first.)
>
> [Download a portrait (JPG)]({portrait file}) · To invite Blake, call [TECHEO_PHONE].

**Done when** a friendly organizer can write an accurate introduction from `#bio` alone (`01` audience c).

**CTA lead-in:** "The fastest way to judge us is the audit, or a free call to your own office first."

**Acceptance.** `#separation` matches `techeo.legal` #contracts (counsel confirms). Nothing in the "Keep private" column appears on the site, in `/llms.txt`, or in markup. Dates match D2. Links: the Homets case study, `/markets`, and `/#promises`.

---

## v2 · `/markets` {#markets}

**Template** T2 (few exits) · **CTA** C with `form_market_check`. **Purpose:** present one-per-market-per-trade as the honest close it is (`techeo.gtm` #exclusivity), and answer "is my market open?" one company at a time, **never identifying a client.**

| | Copy | Chars |
|---|---|---|
| Title | Market Check for HVAC & Plumbing Contractors \| Techeo | 53 |
| Meta | Techeo works with one HVAC company and one plumbing company per market. Check whether yours is open. We don't publish a list of taken markets. | 142 |

**Outline:** H1 "One HVAC company and one plumbing company per market" · lead · H2 How exclusivity works `#how-exclusivity-works` · H2 Where we never work `#never` · H2 Check your market `#check` · H2 What our answer means `#answers` · H2 Why there's no list `#no-list` · pattern A.

> We won't run the same local strategy for two competitors, so we take one HVAC company and one plumbing company in each market. It's written into your agreement. Tell us where you work, and a person will tell you whether your slot is open.

**`#how-exclusivity-works`:**
> - **A market** is the area written into your agreement: usually a TV media market or an agreed list of counties. Never a vague "your area."
> - **A slot** is your trade in your market. If you sell both HVAC and plumbing, you hold both (open question 6).
> - **It's yours when you sign a retainer.** A reservation, an audit, or a market check doesn't hold it. If a company in your market and trade signs first, we'll tell you before your audit opens.
> - **It lasts** as long as you're a client.

**`#never`:**
> Within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat. That's our own company's market, and no client of ours will ever compete with it. [How we keep the two apart](/about)

This and `/about` `#where-we-dont-work` use `10` #affiliation's radius-only wording by default. They add "or anywhere in its [HOMETS_METRO] market" only when `03` open question 8 selects the variant, in the same deploy as the footer and every other surface (`10` #affiliation: "Switch every surface at once"). The fit lines in `/engines/booking` `#price` and `/partners` `#who` switch in that deploy too.

**`#check`** (`form_market_check`; fields `08`, consent `10`):

| Element | Copy |
|---|---|
| Fields (`08` #forms-v2) | "Your name" · "Company name" · "Your role" (Owner · Manager · Other) · "Best phone number" · "Email" · "Trade" (HVAC · Plumbing · Both) · "Main city or county you serve" · "Your shop's ZIP code" · "What runs your jobs?" (ServiceTitan · Moving to ServiceTitan · Another system · No system yet) · "How did you hear about us? (optional)". No "State" field: the ZIP gives it. |
| Help, main city | "Where most of your jobs are. We'll ask about the edges on the call." |
| Button / under | "Check my market" / "{callback_promise} We'll confirm a few details on that call. Blake calls with the answer within 2 business days." |

The form POSTs, then 303s to **`/thanks/market-check`** (proposed; noindex; title "Market Check Received \| Techeo", 30):
> **We've got your market check for {trade} in {city}.** {callback_promise} We'll confirm your details on that call, and Blake will call with the answer within 2 business days. Nothing is held until an agreement is signed. *WAITLIST adds:* "The next audit slots open {next_opening_date}. If your market is open, Blake will offer to reserve you a slot on the call." [Get a free phone teardown](/teardown) while you wait.

The receptionist's call confirms the business is real and never gives an answer (`08` #forms-v2).

**`#answers`:**
> - **Open:** no client holds your trade in your market. We'll give you the next step, usually the audit.
> - **Not available:** we can't take a {trade} client there. We don't say why. The reason could be our own company's zone, a signed client, or a conflict we can't discuss, and the answer is the same for all three.
> - **Let's talk:** your area crosses a boundary. We'll work it out on the call, before you pay for anything.

**`#no-list`:**
> A published map of our markets would tell anyone which areas already have a client, and often which company. Our clients' competitors read websites too. So we answer one company at a time, by phone. The only exceptions are clients who chose to publish a case study under their own name.

**Anti-identification rules** (`08`, `06`):
1. No list, map, count, "available" counter, or aggregate appears anywhere, including `/llms.txt`, markup, and sitemaps.
2. A person answers, by phone or email, after verifying the business is real (the website or listing matches the name and phone). The answer is never automated or shown on screen.
3. "Not available" is one sentence for every cause, and the reason is never given, including to the receptionist.
4. The market register (`06`) is readable only by the founder and whoever `08` names, under confidentiality.
5. Repeat checks from one source are answered once, then referred to the founder; `06` sets rate limits.
6. Case studies name a metro only with the client's written approval.

**Acceptance.** With test clients in the register, a grep of the build output finds no register value. Every "not available" line in `08`'s scripts is identical. Exits are only `/audit`, `/about`, `/teardown`, the legal pages, and `tel:`.

## v2 · `/partners` {#partners}

**Template** T2 · **CTA** C with `form_partner_referral`. Indexed (`02` open question 7 default). **Purpose:** turn `techeo.gtm`'s best line, *give the vendor something to give*, into a page. ServiceTitan consultants, trades bookkeepers, recruiters, and financing reps hand a client a free teardown instead of an introduction. The page protects the vendor's reputation and never exposes the client.

| | Copy | Chars |
|---|---|---|
| Title | Referral Partners: Give a Free Phone Teardown \| Techeo | 54 |
| Meta | For ServiceTitan consultants, trades bookkeepers, recruiters, and financing reps: give a client a free phone teardown instead of an introduction. | 145 |

The title is a named exception to T2's pattern (`#scope`): the reader is a vendor, not a contractor.

**Outline:** H1 "Give a client a free phone teardown, not an introduction" · lead · H2 What your client gets `#what-they-get` · H2 Who to send, and who not to `#who` · H2 How it works `#referral-steps` · H2 What we will never do `#never` · H2 Request a teardown for a client `#request` · H2 Questions `#questions`.

> You see inside more HVAC and plumbing shops in a month than most people do in a year. When one is losing jobs on the phone, don't send them to us. Send them a free teardown of their own phone handling. It's more useful than an introduction, it costs them nothing, and it makes you look good.

**`#what-they-get`:**
> We call their published number three times at different times of day, as a homeowner would, and test their web form if they have one. We take structured notes on each call, not recordings, and score them against the standard we hold our own desk to. They get a 15–20 minute walkthrough of what happened and what it likely cost: a recording of our screen and voice going through the scored notes, not a recording of their calls. It needs nothing from them: no login, no data, no staff time. There's no pitch. If they want to talk afterward, they reply.

**`#who`:**
> **Send us shops that are:** residential HVAC or plumbing · on ServiceTitan · already paying for leads (LSA, Angi, Thumbtack, Yelp, Google Ads) · owner-run, roughly $1.5M to $15M in revenue · at least [EXCLUSION_RADIUS_MILES] miles from Homets.
>
> **Please don't send:** new businesses without lead flow · shops that want a website, logo, or social media · shops in our exclusion zone · shops not on ServiceTitan (for now).

**`#referral-steps`:**
> 1. Fill in the form with your details and the shop's name and published number.
> 2. We call their number three times and test their form.
> 3. Within {teardown_turnaround} business days, we send the teardown **to you** to hand over. If the owner has already asked for it, we can send it to them directly.
> 4. If the owner replies, we talk. If not, nothing else happens, and they're never added to a list.
>
> *WAITLIST adds:* "Teardowns requested now are done after {next_opening_date}."

**`#never`:**
> Contact your client before they ask. Name you as the referrer without your permission. Pitch inside the teardown. Ask for your client list. Pay or ask for a referral fee. When our clients need a bookkeeper, a ServiceTitan consultant, a recruiter, or financing, we point them to people we trust, and we take no fee either. We refer clients to each other, and no money changes hands.

(The fee line follows `01` open question 7's default, which covers year one only; open question 20 decides whether it is permanent. The last sentence is `10` #endorsements' disclosure for a reciprocal-referral understanding.)

**`#request`** (`form_partner_referral`; fields `08`; consent `10`, which must cover submitting a third party's business details):

| Fieldset | Copy |
|---|---|
| "About you" | "Your name" · "Your company" · "What you do" (ServiceTitan implementation · Bookkeeping or accounting · Recruiting · Financing · Other) · "Email" · "Phone" |
| "The shop" | "Business name" · "Website (optional)" · "Published phone number to call" (help: "The number on their website or Google listing.") · "City" · "State" · "Trade" · "On ServiceTitan?" (Yes · No · Not sure) |
| "Where should the teardown go?" | "To me. I'll pass it on." (default) · "To the owner directly. They've asked for it." → "Owner's name" · "Owner's email" · checkbox "The owner has asked to receive this teardown from Techeo directly." |
| Button / under | "Request the teardown" / "We'll confirm by email, and call you if anything's unclear. {callback_promise}" |

The form POSTs, then 303s to **`/thanks/partner-referral`** (proposed; noindex; "Teardown Referral Received \| Techeo", 35):
> **Thanks. We'll take it from here.** We'll call {business name} and send the teardown to {you / the owner} within {teardown_turnaround} business days. *WAITLIST:* the calls happen after {next_opening_date}. If it's a shop we can't work with at all, we won't call it, and we'll tell you only: "We won't be doing this one."

**`#questions`:**
> **Is it really free?** Yes, for you and for them. It takes us about 45 minutes, and it's the best introduction we could ask for.
> **What if they're not a fit?** If the shop isn't a fit for a retainer (say, it isn't on ServiceTitan), we still do the teardown and it's theirs. If it's a shop we can't work with at all, we won't call it, and we'll tell you only: "We won't be doing this one." That's the same sentence whatever the reason.
> **Can I send more than one?** Yes. If we're backed up, we'll tell you the date before we start.

"We won't be doing this one." is also the sentence in `08`'s script for a declined partner referral (a change request to `08`). A shop in the exclusion zone, or a signed client's direct competitor, gets no teardown (`08` #form-teardown-request), and the vendor never learns which.

**Capacity** (internal, `08`): partner teardowns share the founder's teardown hours. When the queue would pass `08`'s weekly limit, the confirmation gives the delivery date. The limit is never published.

**Acceptance.** "To me" is the default. Direct delivery requires the checkbox. No automated email or text goes to the shop from this form (`10`: TCPA, CAN-SPAM). The page names no partner or shop. Links: `/teardown`, plus T2's allowed exits. The vendor-facing decline is one sentence for every cause and contains none of "market," "slot," "taken," or "client" (as `08` requires for `market_hidden`). **The same deploy replaces `03`'s `/teardown` vendor note** with "Referring a client? Use our referral page: techeo.com/partners." and the authority-box error's vendor clause with "If you're referring a client, use techeo.com/partners." (a change request to `03`; open question 19).

---

## v3 · `/glossary` and `/glossary/<term>` {#glossary}

**Templates** T6 and T11 · **CTA** B. `12` owns the list and the entries; this section owns the templates and the exemplar. **Purpose:** answer-shaped definitions of the numbers that decide booked jobs, identical to the ones our reports use.

| | Copy | Chars |
|---|---|---|
| Index title | Glossary: HVAC and Plumbing Marketing Terms \| Techeo | 52 |
| Index meta | Plain definitions of the numbers that decide booked jobs: booking rate, speed to lead, answer rate, LSA, AEO, and more, each with a worked example. | 147 |
| Term title | `{Term}{ (ACRONYM)}: Definition and How to Measure It \| Techeo`, or `{Term}: Definition \| Techeo` if over 60 | ≤60 |
| Term meta | The definition sentence + "How to measure it, and a worked example." | 120–155 |

**Index:** H1 "Glossary: the numbers that decide booked jobs" · lead · A–Z jump links (letters with entries only) · one H2 per letter · each entry is a `<dt id="{term-slug}">` (term and acronym) followed by a `<dd>` (the one-sentence definition, plus "Read the full entry" when the term has its own page).
> The terms we use in audits, reports, and contracts, defined the way we measure them. When our report says "booking rate," this is what it means.

**Term page (T11):** breadcrumb · H1 `{Term} ({ACRONYM})` · definition (≤40 words) · H2 How to measure it `#measure` · H2 A worked example `#example` · H2 What we aim for `#target` (ours, labeled, or "We don't set a target for this") · H2 Where it goes wrong `#pitfalls` (systems, not people) · H2 Related terms `#related` · "Where it fits" (engine link) · "Updated {date}" · pattern B.

**Exemplar: `/glossary/speed-to-lead`.** Title "Speed to Lead: Definition and How to Measure It \| Techeo" (56). Meta "Speed to lead is the time from a customer's request until a person from your company is speaking with them. How to measure it, and a worked example." (148).

The first sentence is `12` #glossary row 5, word for word. ServiceTitan records when a call is placed, not when someone is speaking, so a measured figure built from dial times is published as "median first touch (call placed)" (`12` row 6 and open question 3's default), never as speed to lead. If the founder wants speed to lead defined as the call placed, that is decided through `12` open question 3: row 5 changes first, then this entry, `07`'s `/llms.txt`, and the markup, in one deploy.

> **Speed to lead** is the time from the moment a customer submits a request (a web form, a marketplace lead, a missed-call text) to the moment a person from your company is speaking with them. Opening the notification doesn't count, and neither does a call that rings out.
>
> **How to measure it.** For each lead, subtract the submission time from the moment a person from your company was first speaking with the customer. If your phone system records only when a call was placed, you're measuring [first touch](/glossary#first-touch): report it under that name, because it runs shorter than speed to lead. Report the weekly **median** by channel, not the average: one lead found three days late drags an average so far that a fast week looks broken.
>
> **A worked example.** *Example.* Five web leads are first reached by a person after 3, 4, 6, 9, and 2,880 minutes (the last sat over a weekend). The average, 580 minutes, says your team is slow. The median, 6, says your team is fast and one lead fell through a gap. Those are different problems: the first needs coaching, the second needs coverage.
>
> **What we aim for.** On our own desk, every channel has a written first-touch standard, and new marketplace leads come before the ringing queue. We don't publish one number for everyone, because the right standard depends on the channel. Marketplace leads go to several contractors at once, and the first to call often gets the job.
>
> **Where it goes wrong.** Leads arrive in an app, with nothing ringing. Nobody is named as the owner of new leads on a shift. There's one attempt and then nothing, when attempts three through six are where recovered jobs come from. Platforms never reach the CRM, so the lead can't even be counted.
>
> **Related:** first touch · answer rate · booking rate · marketplace leads never touched · lead duty. **Where it fits:** [the Booking Engine](/engines/booking).

**Acceptance.** Each first sentence works as a standalone, quotable definition. A term gets its own page only once it meets the depth rule; until then it's an `id` on `/glossary` (`02` #slugs). Targets are labeled as ours. Engine terms link the engine page in the first paragraph. The acronym appears in the H1 and title, never in the slug. Speed-to-lead wording matches `12` #glossary row 5 exactly, here and on every page that defines or measures it.

## v3 · `/for/hvac` and `/for/plumbing` {#trades}

**Template** T9 · **CTA** A · each page ships on its own trigger. **Purpose:** show what differs by trade, and say which parts are measured and which are assumed. The system is the same; the lead mix, emergency share, and seasons aren't.

| | Copy | Chars |
|---|---|---|
| HVAC title | Booking and Marketing Systems for HVAC Companies \| Techeo | 57 |
| HVAC meta | How the Booking Engine, SEO, AEO, and the Ads Engine work for residential HVAC: peak-season call spikes, emergency triage, and maintenance memberships. | 151 |
| Plumbing title | Booking and Marketing Systems for Plumbers \| Techeo | 51 |
| Plumbing meta | How our system works for residential plumbing: year-round emergencies, drain and water-heater calls, after-hours leads, and what carries over from HVAC. | 152 |

Both titles are named exceptions to T9's pattern (`#scope`): each page serves one trade, so its title names that trade alone.

**Shared outline:** breadcrumb · H1 · lead · H2 What's different about {trade} `#different` (`TradeDiffTable`) · H2 What we change in the system `#changes` · H2 What stays the same `#same` · H2 Proof from {trade} shops `#trade-proof` · H2 Who it's for `#trade-fit` · pattern A.

**Every `TradeDiffTable` row carries a status:** *Measured* (linking an approved case study in that trade) or *Assumption*.

**`#same`** (both pages): "The written standards, the weekly scoring, the Engine Audit, and one headline number: cost per booked job."

**Calendar line** (both pages): "Our intake calendar follows our HVAC company's peak: no new clients from May through early September or in December and January." HVAC adds "You already know why." Plumbing adds "It's set by our season, not yours."

### `/for/hvac`

**H1:** "The booking system an HVAC company built, for HVAC companies"
> We run an HVAC company, so this is the trade we know from the inside. Rows marked "Assumption" are our working view from running Homets, not measurements from your market.

| Topic | What we see | Status |
|---|---|---|
| Seasonality | Two peaks. A heat wave can multiply calls, so the standards have to hold when the desk is overloaded. | Assumption |
| Emergencies | No-cool and no-heat calls dominate the peaks. Safety calls (a gas smell, a CO alarm) are triaged before anything else. | Assumption; triage rule from Homets' protocol |
| Lead sources | LSA, Google Ads, marketplaces, maintenance members, and dealer-locator leads if you're a listed dealer | Assumption |
| Memberships | Recurring revenue rides on the offer being made on every non-member call | Pitch-rate target measured at Homets |
| Price calls | "What do you charge for a tune-up?" tests whether the desk can hold a price and still book | Assumption; audit scenario 3 |
| Replacements | One replacement lead is worth many repairs, so its speed to lead matters most | Assumption |

**`#changes`:**
> Your triage script leads the SOP set. Surge-day rules decide who answers, who calls back, and what gets booked when every line rings. The membership offer is fitted to your plans. The marketplace cadence runs hardest in the shoulder months, when replacement leads go to whoever calls first.

### `/for/plumbing`

**H1:** "What an HVAC operator's booking system does for a plumbing company"
> Homets is mainly an HVAC company. It has a plumbing team, but that team's written standards are still being built, so we're building the plumbing version of this system with plumbing clients and publishing what we measure. The phone system carries over directly: answering, speed to lead, booking qualified callers, never leaving a paid lead untouched. The call mix doesn't. Rows marked "Assumption" are still assumptions.

(Default copy until the founder confirms Homets' trade mix, open question 16. Homets' plumbing work is a material fact for a plumbing prospect, so it stays in the lead, not only in the footer; `10` #affiliation.)

| Topic | What we expect | Status |
|---|---|---|
| Seasonality | Flatter than HVAC, with spikes at hard freezes and holiday weekends | Assumption until {client} data covers a year |
| Emergencies | More true emergencies year-round: active leaks, no hot water, sewer backups. After-hours coverage matters more. | Assumption |
| Triage | The first question is often whether the water is shut off, and whether the caller knows how | Assumption; plumbing protocol pending |
| Lead sources | LSA, Google Ads, and marketplaces, with more one-time emergency callers and fewer members | Assumption |
| Price calls | Drain cleaning and water-heater replacement draw price shoppers | Assumption |
| Memberships | Less central for many shops; the offer fits what you sell | Assumption |

**`#changes`:**
> A plumbing triage script, after-hours rules sized to your emergency share, water-heater and drain call flows, and a membership offer that fits your plans, if you have them.

**Acceptance.** Every row has a status, and "Measured" links a case study in that trade. No industry percentage appears. `/for/plumbing` keeps its opening admission until two plumbing client case studies exist (open question 11). Links: all four engines, that trade's case studies, and `/audit`. The v3 homepage `#fit` links both pages.

## v3 · `/resources` {#resources}

**Template** T6 · **CTA** A. **Purpose:** tools owners can use on their own, without giving away the product. **The rule: give away *what* to measure and *whether* it's happening. Never *how* a team does the work.** Standards and scorecards are free. SOPs, scripts, rubrics, and training are the Booking Sprint.

| | Copy | Chars |
|---|---|---|
| Title | Resources: Free Checklists for HVAC and Plumbing \| Techeo | 57 |
| Meta | Free one-page tools for HVAC and plumbing owners: the Speed to Lead standard, an account ownership checklist, and a phone desk scorecard. No email needed. | 154 |

| Give away | Source | Why it's safe |
|---|---|---|
| **The Speed to Lead Standard** (one page) | `content/playbooks/speed-to-lead.md`, with every `{{price:…}}` replaced by a blank and vendor and tool names removed | Says what good looks like; trains no one |
| **Who Owns Your Marketing Accounts?** (checklist) | The v1.1 claim-3 article | Buyer protection behind claim 3 |
| **The Phone Desk Scorecard** (weekly sheet) | `content/sops/csm/kpis.md`: the numbers, how each is read, blank target columns, and our targets labeled as ours | Shows what to look at; the coaching is the product |
| **Shop Your Own Phone** (card) | One scenario that is not one of the audit's five (furnace short-cycling, a weekday at 14:00), 10 yes/no checks, the recording-consent warning | Drives teardowns; one scenario, no weights, and nothing a desk could use to spot our audit or teardown calls |

| Never given away | Why |
|---|---|
| Any complete SOP, script, or channel playbook | The Sprint's inventory (`techeo.delivery` #templating) |
| The weighted QA rubric and its definitions | The weekly-scoring instrument |
| The five mystery-shop scripts, verbatim | The audit's Booking workstream |
| The full 12 AEO prompts | Monthly delivery |
| The audit template and the Gap spreadsheet | The audit; `/calculator` already publishes the arithmetic |
| Training recordings, coaching notes, objection scripts | Delivery |
| Homets price values, customer data, tool names | D7, D9, `01` R1 |

**Page:** H1 "Free tools for owners who run their own numbers" · lead · one H2 per resource (`id` = the resource slug), containing what it is, who it's for, **the full text in HTML**, "Download the PDF," and "Why this works" linking to its article (`02` #link-later) · pattern A.
> One-page tools from the standards we run at Homets Air and Heat. No email address needed. Print them, use them, pass them around.

**Exemplar: The Speed to Lead Standard (full text).**
> **Every paid lead is money already spent.** A lead nobody calls isn't a missed opportunity; it's an invoice with nothing on the other side.
>
> **The standard:** every lead gets a call placed within your first-touch time: ____ minutes for marketplace leads, ____ for Local Services Ads, ____ for web forms. **First touch means a call placed.** Opening the notification doesn't count, and neither does adding the lead to a list.
>
> **One owner per shift.** Name who owns new leads on each shift. A new marketplace lead outranks the ringing queue for the first ____ minutes. If the owner is on a call, anyone available takes it and marks it claimed.
>
> **The cadence for marketplace leads:** call immediately · text at +2 minutes if there's no answer · call at +15 minutes · call at +1 hour · call the next morning · final text at +48 hours, then close. Text only where the lead agreed to be contacted by text on the platform or form. One call isn't an attempt at a lead. It's an attempt at a coincidence.
>
> **Every lead ends as one of four:** Booked · Unreachable (the cadence ran out) · Not a lead (wrong service, out of area, spam; report it to the platform) · Lost (reached, went elsewhere).
>
> **Measure weekly:** median first touch by channel · share of leads inside the standard · leads never touched (target: zero, every day) · bad leads reported.
>
> *From Techeo, techeo.com. Built from the standard Homets Air and Heat runs on.*

**PDFs.** `02` rule 3 forbids extensions, and the brief has no download pattern. *Default (open question 14):* `/resources/<slug>.pdf`, served with the header `Link: <https://techeo.com/resources>; rel="canonical"`. Google supports canonical HTTP headers for non-HTML files; `07` verifies. The PDFs are tagged for accessibility (`10`) and never gated.

**Per-resource trigger:** the license covers derived material (`techeo.legal` #ip), the explaining article is live, the PDF passes `10`'s check, and the founder has checked it against the never-given-away list.

`10` approves the texting-consent line (`techeo.legal` #compliance treats texting as consent-dependent under the TCPA).

**Acceptance.** The full text is in the HTML. No form or email is required (`01` anti-goal 5). No `{{price:…}}` value, vendor name, or tool name appears. The Shop Your Own Phone card's scenario, timing, and wording match none of `techeo.audit` #workstreams' five scenarios. Speed-to-lead and first-touch wording matches `12` #glossary rows 5 and 6.

---

## Build order, v2 and v3 {#build-order}

**Assumptions.** Hours are estimates for `11`, not commitments. *Build* is AI-assisted or freelance. *Other* belongs to another document. May is deliver-only and Jun–Aug maintenance-only (`techeo.guardrails` #seasonality); writing in those months needs the founder's explicit exception. So **Founder (default)** follows open question 21's default: a contract writer drafts the engine, pricing, markets, and partners pages from Blake's interviews and this document's copy, and Blake writes `/about` `#why` and `#how-we-run` and each case study's `#what-moved`, then edits and approves every page. A yes needs D15 revised (`11` open question 10). **Founder (drafts all)** is the cost if the answer is no.

`11` #v2 budgets 16.0 founder hours for interviews and approvals. The 3.5 hours for the sections Blake writes (the default column's 18.5) count only if `11` open question 10 accepts them. v3 falls after the gate and outside May–Aug, and its default column matches `11` #v3.

### v2 — Tue Sep 7, 2027

| # | Task | Founder (default) | Founder (drafts all) | Build | Other | Depends on | Window |
|---|---|---|---|---|---|---|---|
| 1 | T8/T9 templates, `SeasonCta`, v2 header, menu, footer (`02` #header-v2) | 0 | 0 | 10 | 3 (`05`) | v1 components | May 3–21 |
| 2 | `/engines/booking` (includes the 90-minute engines interview for #2–#4) | 2 | 4 | 2 | 0 | #1; non-Homets sprint at week 8 | May |
| 3 | `/engines`, with diagram | 0.5 | 1.5 | 2 | 2 (`05`) | #2 | May |
| 4 | Search, Answer, Ads pages | 1.5 | 6 | 3 | 1 (`07` checks) | #2; 3 months of Homets rhythm logs, started by Mar 1 | May–Jun |
| 5 | `/pricing` | 1 | 3 | 3 | 3 (counsel, `10`, `07`) | `techeo.offers` #review note by Aug 2; MSA final | Jun |
| 6 | `/about` (Blake writes `#why` and `#how-we-run`) | 2.5 | 3 | 2 | 1 (`10`) | Portrait, releases; `#how-we-run` approved; open question 16 | Jun |
| 7 | `/markets` + thanks | 0.5 | 2 | 4 | 2 (`06` register, `08`) | Brief revision; MSA market definition | Jun |
| 8 | `/partners` + thanks | 0.5 | 2 | 4 | 1 (`10`) | Brief revision; teardown template; open question 19; the same deploy replaces `03`'s `/teardown` vendor note with "Referring a client? Use our referral page: techeo.com/partners." | Jun–Jul |
| 9 | Homets case study (Blake writes `#what-moved`) | 2.5 | 4 | 2 | 2 (evidence pack, `10`) | Tokens; license; open questions 16 and 17 | Jun |
| 10 | `/case-studies` index | 0.5 | 1 | 2 | 0 | #9; a non-Homets case study (`#triggers`) | Jul |
| 11 | Partner case study 1 (Blake writes `#what-moved`) | 2 | 4 | 1 | 2 | Day-90 review, late June | Mid-Jul |
| 12 | Partner case study 2 (Blake writes `#what-moved`) | 2 | 4 | 1 | 2 | Day-90 review, mid-to-late July; partner 2 kicks off by mid-April (no onboarding in May, `techeo.guardrails` #seasonality) | Mid-Aug |
| 13 | `/calculator` | 0.5 | 3 | 12 | 3 (`08`, `10` a11y) | `08` spec; `CALC_MISSED_CALLS` (open question 3) | Jul |
| 14 | Anchor-to-page link updates in site, emails, script (`02` #anchor-to-page) | 0.5 | 1 | 3 | 1 (`08`) | #2–#13, leaving out any slipped page (`#triggers`) | Aug |
| 15 | QA, indexing, gate check on Mon Aug 16 (`01`), go/no-go, launch | 2 | 1 | 4 | 2 (`11`) | All | Aug 16–Sep 7 |
| | **Total** | **18.5** | **39.5** | **55** | **25** | | |

Row 15's default includes `11`'s go/no-go and launch-day hours, which the drafts-all column left out.

**Critical path:** #1 → #2 → #4, and #1 → #13. A case study not approved by Aug 16 ships after Sep 7; the date holds.

### v3 — from Tue Nov 30, 2027, each page on its own trigger

| # | Task | Founder (default) | Founder (drafts all) | Build | Other | Depends on |
|---|---|---|---|---|---|---|
| 1 | T11 template, `/glossary` | 0.5 | 1 | 4 | 1 (`07`) | v3 entry |
| 2 | 20 entries; 5 promoted to pages | 5 (approvals, with `12`) | 10 (with `12`) | 1 | 0 | #1; `12`'s list |
| 3 | `/for/hvac` | 2 | 4 | 2 | 0 | 2 client (non-Homets) HVAC case studies |
| 4 | `/resources` + 3 resources | 3 | 6 | 3 | 6 (`05` PDFs, `10`) | Articles live; license |
| 5 | `/for/plumbing` | 2.5 | 5 | 1 | 2 (plumbing SOP set) | Plumbing case study; open question 16 |
| 6 | Insights in the header (`02` #header-v3) | 0 | 0 | 1 | 0 | 12 articles; `12` cadence |
| | **Total** | **13** | **26** | **12** | **9** | |

## Open questions for the founder {#open-questions}

1. **Publish the pricing rule (`techeo.offers` #pricing-rationale)?** *Default: the principle, not the number* (`/pricing` #when-we-say-no). "15%" invites "your fee is 18% of my gap, cut it," contradicts the no-discount rule, and exposes margin logic. If you publish it, use: "We don't recommend a retainer unless its fee is 15% or less of the monthly revenue your own data shows we can recover: at least $23,400 a month for the Booking Sprint and $43,400 for the Demand Engine." Those figures are rounded up from $23,334 and $43,334, so the promise is never looser than the rule.
2. **When the 30-day audit credit starts.** D6 says only "within 30 days." *Default: from the readout call,* the day the buyer can act. `03`'s `/audit` must match.
3. **The calculator's fifth source.** *Default: add an unanswered-calls term to `techeo.audit` #gap* (missed calls × qualified share × current booking rate × revenue per job), so the audit and calculator agree. Until then, the unanswered-calls section stays behind `CALC_MISSED_CALLS` (`08`), and `/calculator` ships its flag-off copy.
4. **The Demand Engine threshold.** `DemandEntry` follows `techeo.offers` rung 3 and `03` #faq-why-not-seo-first, which stays live on `/` in v2: a completed Booking Sprint, or an audit showing a booking rate above 65%. Should entry become "65% or higher" and also require an Engine Score of 66 or more? *Default: yes, both audit conditions.* `techeo.audit` #scoring sends composites of 41–65 to a Booking Sprint first, so a shop with a 70% booking rate and a composite of 50 shouldn't enter the Demand Engine directly. If you adopt it, `techeo.offers` rung 3 changes first; `DemandEntry`, `03` #faq-why-not-seo-first, and `03` #numbers then change in the same deploy. Until then, every page says "above 65%" with no Engine Score condition.
5. **Training cadence.** `techeo.offers` says monthly; `techeo.delivery` says weeks 3 and 9. *Default: weeks 3 and 9 in the sprint, then monthly,* with `techeo.offers` updated.
6. **A shop selling both trades: one slot or two?** *Default: both.* Its search and ads work covers both trades.
7. **Publish that a named person other than the founder can pause new business?** *Default: yes,* without the name, metrics, or thresholds. The `capacity` state never gives its reason. The copy doesn't say "outside both companies," because `techeo.guardrails` #kill-switch allows a bookkeeper, advisor, or spouse and no one is named yet. If you want that stronger line, `techeo.guardrails` must first require that the enforcer work for neither company.
8. **Publish the three-client ceiling?** *Default: no.* "A limited number, set by hours" is true and doesn't reveal the client count.
9. **The Demand Engine term when entered directly from the audit.** *Default: month-to-month with 30 days' notice,* as `/pricing` says. A 90-day minimum means changing `techeo.offers` and the MSA first. **And what a direct-entry client gets of the Booking Engine's setup** (the SOP set, playbooks, weekly KPI report, and training), which `techeo.delivery` #rhythm doesn't list: *default: included only after a Booking Sprint,* as `/pricing` #included marks them, with `techeo.offers` confirming.
10. **Design-partner videos.** *Default: only in that partner's `#in-their-words`,* with edited captions, a transcript, audio description of visual-only content, and the disclosure above the player, on screen for the first 5 seconds, and spoken at the start (`10`). Never on the homepage, and never clipped to a result without its window.
11. **`/for/plumbing` with no plumbing client.** *Default: don't publish it* until one plumbing case study and the plumbing SOP set exist. The opening admission stays until two plumbing client case studies exist.
12. **AI product names on `/engines/answer`.** *Default: none in visible copy.* The names change and raise trademark questions (`10`).
13. **LSA dispute language across the plan.** Google replaced manual LSA disputes with automated credit reviews in 2024–25, and consolidated its LSA badges into "Google Verified" in Oct 2025 (verify both). *Default: rename the task "LSA lead review and feedback"* in `techeo.delivery` #rhythm, `techeo.audit` #workstreams, and `content/playbooks/lsa.md`.
14. **Download URLs.** *Default: `/resources/<slug>.pdf` with a canonical header to `/resources`,* added to the brief and `02` before v3.
15. **The two proposed confirmation pages.** *Default: approve `/thanks/market-check` and `/thanks/partner-referral`* in a brief revision before May 2027. Both forms must work without JavaScript, and a 303 needs a destination.
16. **Homets' trade mix, and which business units the published figures cover.** `content/sops/csm/service-area.md` lists a plumbing team ("never cross-booked with HVAC"), and `content/sops/csm/res-vs-comm.md` a commercial business unit, so "a residential HVAC company" would be false by omission. For a plumbing prospect, Homets' plumbing work is a material fact in the conflict disclosure (`10` #affiliation). *Default: describe Homets as "an HVAC company in [HOMETS_METRO] that also does plumbing,"* with `/for/plumbing`'s default lead, and state in the Homets case study's `CaseFacts` and `#sources` that the figures cover residential HVAC calls, with commercial and plumbing calls excluded. **Change request to `10` and the brief:** the footer disclosure's "an HVAC company" follows the confirmed wording.
17. **A second check on the Homets baseline.** *Default: none.* Blake pulls the baseline and the reports stay on file. A Homets employee checking figures for Techeo's marketing would be doing Techeo work (`techeo.guardrails` #coi item 6), and `12` limits Homets staff to a heads-up. If you want a second check, it goes to a person outside Homets under a written agreement, and the page names that person's role.
18. **Who runs the Demand Engine rhythm on Homets, and from when.** The Search, Answer, and Ads pages need 3 months of logged `techeo.delivery` #rhythm work on Homets before Aug 16, and no plan document schedules it. *Default: it starts no later than Mon Mar 1, 2027, as Homets' own marketing work counted as Homets time,* with its owner and hours set in `11` and `techeo.plan90`. An engine whose log is short of 3 months on Aug 16 follows after launch.
19. **May a vendor request test calls for a shop that hasn't asked?** For the founder and counsel, through `10`. `03`'s `/teardown` requires an owner's or manager's authority; `/partners` has Techeo call at a vendor's request. *Default: yes,* as `techeo.gtm`'s unrequested teardowns already do, and `03`'s vendor note points to `/partners`. If the answer is no, `/partners` instead asks the vendor to send the owner to `/teardown`, and delivery is only ever to an owner who requested it.
20. **Referral fees after year one.** `01` open question 7 and `techeo.positioning` #not-sold say no fee "in year one," and `/partners` ships at the end of year one with an open-ended promise. *Default: none, permanently,* and `techeo.positioning` #not-sold drops "in year one."
21. **May v2 and v3 drafting go to a contract writer while Blake interviews, edits, and approves (`11`'s model)?** *Default: yes for the engine, pricing, markets, and partners drafts; Blake writes `/about` `#why` and `#how-we-run` and each case study's `#what-moved`.* May is deliver-only and Jun–Aug maintenance-only, so the drafts-all column in `#build-order` needs your explicit exception. A yes needs D15 revised (`11` open question 10).
