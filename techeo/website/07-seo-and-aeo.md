---
id: techeo.web.search
title: SEO & AEO — Being Found and Being Cited
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, seo, aeo, query-map, structured-data, json-ld, robots, llms-txt, ai-crawlers, search-console, indexnow, entity, prompt-test]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.offers, techeo.audit, techeo.gtm, techeo.legal, techeo.guardrails, techeo.plan90, techeo.metrics]
order: 7
---

# SEO & AEO — Being Found and Being Cited

**techeo.com starts from zero: a new domain, no links, and no mentions. That makes it the one AEO case study Techeo can run without anyone's permission. In year one, winning means every search engine and assistant describes Techeo correctly, and techeo.com gets cited on a narrow set of questions only an operator can answer. It does not mean ranking for "HVAC marketing agency."**

## Scope {#scope}

This document owns the query map, on-page search standards, structured data, `/robots.txt`, `/llms.txt`, crawler policy, search-tool setup, off-site entity work, and the monthly AEO prompt test method. It does not own the following, which it only references:

| Topic | Owner |
|---|---|
| URLs, internal linking, redirects, indexing and canonical rules, sitemap membership | `02` (`techeo.web.ia`) |
| Titles, metas, H1s, alt text, and copy for v1 pages | `03` (`techeo.web.pages-v1`) |
| The same for v1.1–v3 pages | `04` (`techeo.web.pages-later`) |
| Rendering, the build, CI, Cloudflare zone settings, and how files are generated | `06` (`techeo.web.tech`) |
| Analytics, storing the prompt log, and reporting | `09` (`techeo.web.analytics`) |
| Trademark use and the claims ledger | `10` (`techeo.web.compliance`) |
| Article topics, editorial standards, and the glossary list | `12` (`techeo.web.content`) |

Where a rule here constrains another owner's words, it is a standard they write to. They still own the words.

## Why techeo.com is our first AEO case study {#case-study}

Techeo sells Answer (AEO) as one of four engines (`techeo.positioning` #framework). Prospects will check whether we can do it before they read the pitch (brief, thesis line). There are three reasons the site comes first.

1. **Prospects will ask an assistant about us.** An owner who gets a teardown email or hears Blake on a podcast will type "what is Techeo" or "is techeo.com legit" into ChatGPT, Google, or Perplexity. A wrong answer loses a deal we never hear about (`techeo.web.strategy` job 1). The first AEO goal is accuracy, and it is scored as success criterion S3: zero wrong facts.
2. **It is a clean experiment.** The domain starts with no content, no links, and no brand mentions. Every change is dated in the changelog, and every month's result is logged. After twelve months that log is the evidence behind a published claim, dated and stated as a ratio (D7). No client has to sign off, because the data is ours.
3. **The method is the product.** The Answer workstream of the Engine Audit runs 12 fixed prompts and records who is named and what is cited (`techeo.audit` #workstreams). `techeo.audit` requires pointing the audit at its author before selling it. This is the same rule applied to AEO: we build and debug the prompt-test template on ourselves first, then use it on clients.

## What winning means in year one {#winning}

Every timeline below is an **assumption**, to be replaced with the log's data at each quarterly review. None is a promise, and none of them is published.

| Horizon | What we expect | Type | Why it is realistic, or not |
|---|---|---|---|
| Launch + 30 days (Dec 20, 2026; checked Mon Dec 21) | All six indexable v1 URLs are indexed in Google and Bing | Target (S4) | A small site, submitted by sitemap and URL Inspection, on a clean domain. Risk: an unknown domain history (D5). |
| By Feb 1, 2027 | A search for "techeo" returns techeo.com first in Google and Bing | Target (S4) | Brand queries are the easiest query class. Risk: the name is used by another entity (preflight and trademark search, Week 1). |
| By Jan 31, 2027 | Zero fact errors (F1–F10) in the January run, all 12 prompts, on every assistant tested that month | Target (S3) | Assistants with live retrieval read the site within days of indexing. Risk: answers from training data alone lag by model cutoffs, likely 6–18 months (assumption), so an error from training data can outlast every fix on the site (`#corrections`). |
| By Apr 30, 2027 | techeo.com is cited as a source on at least one problem or definition prompt (P05–P10) on at least one assistant | Assumption; diagnostic | Needs the v1.1 articles indexed and quoted. The site has few pages and almost no links. |
| By Nov 19, 2027 | Techeo is named in answer text for a category prompt (P01–P04) | Unlikely; not a target | Incumbent agencies have years of pages, links, reviews, and directory coverage. One case study and about 25 pages won't change that in year one. |
| By Nov 19, 2027 | Page one for "HVAC marketing agency" | Not expected | Same reason. We don't chase it, and we don't report it as a goal. |

**What counts.** Brief D12 and `techeo.metrics` #not-measured apply: rankings, impressions, and citation counts are diagnostics. The outcomes are S3 (zero wrong facts), S4 (indexed; brand query first), and the site's lead outcomes in `techeo.web.strategy` #success. If the site is named on category prompts in year one, that's a bonus we log. We don't plan around it.

## How we measure demand without inventing volumes {#measuring-demand}

This document contains no search volumes, because none have been measured. The query map (`#query-map`) is ranked by buyer intent and by whether Techeo has a real right to win the query, not by volume. Volumes are gathered as follows and recorded in the query sheet (`09` stores it). Each figure carries its source and date, and none is ever published.

| Source | What it gives | Cost | Caveat |
|---|---|---|---|
| Google Keyword Planner, in a Google Ads account owned by Techeo LLC (D4) | Monthly volume ranges for the exact phrases | $0. Verify that ranges show without active spend; `techeo.gtm` #no rules out running ads. | Ranges, not counts. Closely related phrases get merged. |
| Bing Webmaster Tools, Keyword Research | Bing impressions and trends | $0 | Bing's share of searches only |
| Google Trends | How phrasings compare to each other ("marketing agency" vs "marketing company") | $0 | Relative figures only; low-volume phrases often show no data |
| Search Console, Performance (after launch) | The queries we already get impressions on | $0 | Biased toward what we already rank for |
| Search Console, Generative AI performance report | AI Overview and AI Mode impressions by page | $0 | Launched June 2026 and rolled out to all sites by Aug 31, 2026 (verify). Shows no queries or clicks at launch. |
| Bing Webmaster Tools, AI Performance | Copilot citations by URL, plus the grounding queries Copilot generated | $0 | Released Feb 11, 2026 (verify) |
| Discovery calls (`08` logs the answers) | The exact words an owner searched for or asked an assistant | $0 | Small sample. It is still the only source of real prompt wording. `08` adds one question: "Did you search or ask an AI assistant about this? What did you type?" |

**There is no volume data for AI prompts.** Assistants don't publish what people ask them. Prompt wording comes from discovery calls and is reviewed quarterly (`#prompt-test`).

## Query map {#query-map}

**Key.** *Content type* is the page format that should win the query: **H** homepage section · **CP** conversion page · **EP** engine page · **PR** pricing · **AR** article · **GT** glossary term · **TL** calculator · **CS** case study · **TP** trade page · **FQ** FAQ entry · **OS** off-site profile. *Year one* is our expectation by Nov 19, 2027, and it is an assumption. Each query cluster has **exactly one target URL**. Other pages link to that URL using the query's words (`#internal-links`) and are never written to compete with it.

The three v1.1 articles are fixed by claim (`techeo.web.strategy` #releases), and `12` owns their topics, titles, and slugs. Titles and slugs are `12`'s A1–A3 (#a1-booking-rate, #a2-untouched-leads, #a3-account-ownership). In the tables below, the "claim-1 article" is A1, the "claim-2 article" is A2, and the "claim-3 article" is A3.

### Commercial: someone looking to hire

| # | Query, as typed | Target URL | Release | Content type | Year one |
|---|---|---|---|---|---|
| C1 | hvac marketing agency · hvac marketing company | `/`, then `/for/hvac` | v1, then v3 | H, then TP | Not page one |
| C2 | plumbing marketing agency · marketing company for plumbers | `/`, then `/for/plumbing` | v1, then v3 | H, then TP | Not page one |
| C3 | marketing agency for hvac and plumbing contractors | `/` | v1 | H | Possible for long variants |
| C4 | servicetitan marketing agency · marketing agency for servicetitan users | `/` (`#fit`, `#faq-servicetitan`), then `/engines/booking` | v1, then v2 | H, FQ, then EP | Possible. Descriptive use of the ServiceTitan name only, never implying a partnership (`10`). |
| C5 | answer engine optimization for hvac companies · aeo agency for contractors | `/engines/answer` | v2 (until then `/#engines`) | EP | Possible, since the phrase is new |
| C6 | ai search optimization for contractors | `/engines/answer` | v2 | EP | Possible |
| C7 | hvac seo company · seo for plumbers | `/engines/search`, then `/for/*` | v2, then v3 | EP, then TP | Not page one |
| C8 | local services ads management for hvac · google ads agency for plumbers | `/engines/ads` | v2 | EP | Not page one |
| C9 | hvac csr training company · call handling training for plumbing company | `/engines/booking` | v2 | EP | Possible |
| C10 | hvac booking rate consultant · improve csr booking rate service | `/engines/booking` | v2 (until then `/#engines`) | EP | Plausible. Few competitors use the phrase. |
| C11 | hvac marketing audit · plumbing marketing audit | `/audit` | v1 | CP | Plausible |
| C12 | mystery shop my hvac company phone · phone mystery shopping for contractors | `/teardown` | v1 | CP | Plausible |
| C13 | how much does hvac marketing cost per month · hvac marketing agency pricing | `/#how-it-works`, then `/pricing` | v1, then v2 | H, then PR | Possible from v2, since few agencies publish prices |
| C14 | marketing agency that lets me own my ad accounts · month to month hvac marketing contract | `/#promises`, then the claim-3 article | v1, then v1.1 | H, then AR | Possible |

### Problem-aware: someone who has the problem but hasn't named a solution

| # | Query, as typed | Target URL | Release | Content type | Year one |
|---|---|---|---|---|---|
| PA1 | how to improve booking rate hvac · csrs not booking calls | Claim-1 article | v1.1 | AR | Cited possible |
| PA2 | getting leads but not booking jobs | `/#leak`, then `/engines/booking` | v1, then v2 | H, then EP | Possible |
| PA3 | call conversion rate hvac · csr conversion rate plumbing | Claim-1 article, then `/glossary/booking-rate` | v1.1, then v3 | AR, then GT | Cited possible |
| PA4 | how fast should a contractor call back a web lead · speed to lead home services | Claim-2 article, then `/glossary/speed-to-lead` | v1.1, then v3 | AR, then GT | Cited possible |
| PA5 | angi leads not converting · thumbtack leads never called back | Claim-2 article | v1.1 | AR | Cited possible |
| PA6 | marketplace leads nobody called · paid leads never contacted | Claim-2 article | v1.1 | AR | Plausible |
| PA7 | how to dispute local services ads leads · lsa dispute bad lead | `/engines/ads` (v2), then `/insights/local-services-ads-disputes` (`12`'s A5, "Can you still dispute Local Services Ads leads?", conditional, April 2028 at the earliest, v3 order; `12` #calendar) | v2, then v3 | EP, then AR | Possible. Most published answers are out of date: Google replaced manual disputes with automated credit reviews in 2024 (verify at publish; `04` open question 13). |
| PA8 | lsa budget runs out early · local services ads budget gone by noon | `/engines/ads` | v2 | EP | Possible |
| PA9 | how many calls is my hvac business missing · cost of missed calls | `/#leak` (v1), then `/engines/booking` (v2); `/calculator` only once `CALC_MISSED_CALLS` is on (`04` #calculator) | v1, then v2 | TL | Possible |
| PA10 | missed call revenue calculator | `/calculator`, **held until `CALC_MISSED_CALLS` is on** — the flag-off page doesn't count missed calls, so it can't honestly target this | v2 at the earliest | TL | Possible |
| PA10a | booking rate calculator · booking gap calculator | `/#calculator` (v1), then `/calculator` — its flag-off title, "Booking Gap Calculator for Contractors \| Techeo", carries the phrase | v1, then v2 | TL | Possible |
| PA11 | agency won't give me my google ads account · who owns my google business profile agency | Claim-3 article | v1.1 | AR | Plausible |
| PA12 | why doesn't chatgpt recommend my business · get my hvac company recommended by ai | `/engines/answer` | v2 | EP | Possible |
| PA13 | google ads conversions not matching booked jobs | `/engines/ads` (`#problem`) | v2 | EP | Possible. The Attribution Layer is never mentioned (D6). |
| PA14 | cost per booked job hvac | `/glossary/cost-per-booked-job` | v3 (until then `/engines`, v2) | GT | Cited possible |
| PA15 | hvac membership sales on service calls · csr membership offer | `/for/hvac` | v3 | TP | Unlikely in year one |

### Definitional: someone who wants a term explained

Each v1.1 article opens with a quotable definition of its core term (`#definitions`). That covers the definitional queries a year before the v3 glossary exists.

| # | Query, as typed | Target URL | Release | Content type | Year one |
|---|---|---|---|---|---|
| D1 | what is booking rate · booking rate formula | Claim-1 article, then `/glossary/booking-rate` | v1.1, then v3 | AR, then GT | Cited possible |
| D2 | what is speed to lead | Claim-2 article, then `/glossary/speed-to-lead` | v1.1, then v3 | AR, then GT | Cited possible |
| D3 | what is answer rate (call center) | `/glossary/answer-rate` | v3 | GT | Unlikely before v3 |
| D4 | what is answer engine optimization · aeo vs seo | `/engines/answer` (v2), then `/glossary#answer-engine-optimization` (v3 wave 1), then `/glossary/answer-engine-optimization` (wave 2, after A5, no earlier than September 2028; `12` #glossary) | v2, then v3 | EP, then GT | Not page one; cited possible |
| D5 | what is an lsa dispute · lsa lead credit | `/glossary/local-services-ads#disputes` | v3 | GT | Possible |
| D6 | marketplace leads never touched, meaning | Claim-2 article, then its glossary entry | v1.1, then v3 | AR, then GT | Plausible. The phrase is ours. |
| D7 | marketing engine optimization · what is marketing engine optimization | `/#engines`, then `/engines` | v1, then v2 | H, then EP | **Ours to own for the full phrase.** The bare acronym "MEO" also means Map Engine Optimization and isn't targeted. |
| D8 | what is a booking rate teardown | `/teardown` | v1 | CP | Ours to own |
| D9 | what is an engine audit (marketing) | `/audit` | v1 | CP | Ours to own |
| D10 | qualified caller definition | `/glossary/qualified-caller` | v3 | GT | Unlikely before v3 |

### Branded and founder

| # | Query, as typed | Target URL | Release | Content type | Year one |
|---|---|---|---|---|---|
| B1 | techeo · techeo.com | `/` | v1 | H | First (S4) |
| B2 | techeo engine audit · techeo audit price | `/audit` | v1 | CP | First |
| B3 | techeo pricing · techeo cost | `/#how-it-works`, then `/pricing` | v1, then v2 | H, then PR | First |
| B4 | techeo booking rate teardown | `/teardown` | v1 | CP | First |
| B5 | is techeo legit · techeo reviews | `/` (`#operator`). Supporting links: `#promises`, the LinkedIn profiles, and the v2 case studies. | v1 | H | First for the site. No review markup and no testimonials in v1 (D7). |
| B6 | blake [FOUNDER_SURNAME] | `/#operator`, then `/about`. The founder's LinkedIn profile supports it. | v1, then v2 | H | Both results are ours |
| B7 | blake [FOUNDER_SURNAME] homets · techeo homets | `/#faq-homets-conflict` | v1 | FQ | First |
| B8 | blake [FOUNDER_SURNAME] podcast | Show notes (off-site), then `/about` | v1, then v2 | OS | Depends on appearances |
| — | homets air and heat | **Not a Techeo target.** hometsair.com must win it. Techeo pages mention Homets but never put it in a title. One exception: `/case-studies/homets-air-and-heat`, whose T8 title must name the company (`04` #case-study-homets; listed in `#titles`' named exceptions). | — | — | — |
| — | techeo vs {any competitor} | **Never targeted.** No competitor names appear on the site (`techeo.web.strategy` #message-hierarchy). | — | — | — |

**Done when:** every row has a target URL that is live or scheduled in `02`'s inventory; no two rows point different pages at the same phrase; `12`'s briefs cite the row numbers they serve; and the sheet is re-read each quarter against Search Console queries and the discovery-call log.

## On-page standards {#on-page}

These are the rules the page owners write to. CI checks what it can (`06` `#ci`), and the copy QA sheet (`03` `#qa`) checks the rest.

### Titles and meta descriptions by template {#titles}

`03` (v1) and `04` (later releases) own the actual strings.

| Template | Title pattern | Meta description pattern |
|---|---|---|
| T1 Home | `Techeo \| {what it is, for whom}`. Brand first on the homepage only. | What Techeo does + who runs it + the one price |
| T2 Conversion | `{Offer} for HVAC & Plumbing {Contractors\|Shops} \| Techeo` | What you get + price + term |
| T3 Confirmation | `{Status} \| Techeo` (noindex) | What happens next |
| T4 Legal | `{Policy} \| Techeo` | What the policy covers, plus the Homets data line on `/privacy` |
| T5 Error | `Page Not Found \| Techeo` | Where to go instead |
| T6 Index | `{Collection}: {qualifier} \| Techeo` | What's in the collection and its standard (dated, sourced) |
| T7 Article | `{question-shaped title, ≤50 characters} \| Techeo` | The answer in one sentence + what the article shows |
| T8 Case study | `{Company}: {Metric} Case Study \| Techeo` | The change, the window, and the relationship |
| T9 Feature | `{Page or engine name} for HVAC and Plumbing{ Contractors} \| Techeo` | What it is + how it's judged + where it's sold |
| T10 Tool | `{Tool} for Contractors \| Techeo` | What it computes + "your numbers only" |
| T11 Term | `{Term} ({ACRONYM}): Definition and How to Measure It \| Techeo`; `{Term}: Definition \| Techeo` if over 60 | The definition sentence + "How to measure it, and a worked example." |

**Rules**

1. Titles run 60 characters or fewer and metas 155 or fewer, counted on the rendered string with tokens filled. Meta length 120–155 applies to indexable pages; noindex templates T3 and T5 have no length floor. These are house limits: Google truncates by pixel width and rewrites descriptions freely.
2. The separator is " | ". "&" is allowed in titles to save characters; body copy always uses "and".
3. **The title carries the target query's noun phrase** from `#query-map` in natural word order. Say "Engine Audit," not "Audit Engine HVAC."
4. No year, no ALL CAPS, no D8 banned words, no competitor names, and no claim the page doesn't support. A price appears in a title only where D6 publishes it and the page states it.
5. Every indexable page has a title and meta that no other page uses. CI fails duplicates.

**Named exceptions.** These five titles depart from a pattern above for the reason `04` gives. An exception covers only the part named in the table. Rules 1–5 still apply to every one of them, including rule 3 (the title carries its target query's noun phrase from `#query-map`) and rule 5's uniqueness check in CI. Any other departure is added here, with its reason, before its title ships.

| Page | Template | Title (`04`, characters) | What it departs from | Reason (`04`) |
|---|---|---|---|---|
| `/about` | T9 | "About Techeo: Blake [FOUNDER_SURNAME], HVAC Operator \| Techeo" (44 + surname) | T9's `{Page or engine name} for HVAC and Plumbing` | "For HVAC and Plumbing" doesn't describe an about page (`04` #scope, #about). |
| `/partners` | T2 | "Referral Partners: Give a Free Phone Teardown \| Techeo" (54) | T2's `{Offer} for HVAC & Plumbing {Contractors\|Shops}` | The reader is a vendor, not a contractor, so `{Contractors\|Shops}` would address the wrong person (`04` #scope, #partners). |
| `/for/hvac` | T9 | "Booking and Marketing Systems for HVAC Companies \| Techeo" (57) | T9's "for HVAC and Plumbing" | Each trade page serves one trade, so its title names that trade alone (`04` #scope, #trades). |
| `/for/plumbing` | T9 | "Booking and Marketing Systems for Plumbers \| Techeo" (51) | T9's "for HVAC and Plumbing" | The same: one trade per page (`04` #scope, #trades). |
| `/case-studies/homets-air-and-heat` | T8 | "Homets Air and Heat: Booking Rate Case Study \| Techeo" (53) | `#query-map`'s rule that no Techeo title carries the Homets name. The T8 pattern itself is met. | T8's `{Company}` is Homets, so the title can't leave the name out (`04` #case-study-homets). |

**Done when:** CI counts every title and meta on the production build against rule 1, and no duplicates exist across the manifest.

### Head tags {#head-tags}

Every indexable page emits the tags below from the manifest and content data (`06` renders them). This example is `/audit`:

```html
<title>Engine Audit for HVAC &amp; Plumbing Contractors | Techeo</title>
<meta name="description" content="A $1,500, 7-business-day audit of your phones, search, AI answers, and ads, priced in your own numbers. Credited in full if you sign within 30 days.">
<link rel="canonical" href="https://techeo.com/audit">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Techeo">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Engine Audit for HVAC &amp; Plumbing Contractors">
<meta property="og:description" content="A $1,500, 7-business-day audit of your phones, search, AI answers, and ads, priced in your own numbers. Credited in full if you sign within 30 days.">
<meta property="og:url" content="https://techeo.com/audit">
<meta property="og:image" content="https://techeo.com/og/og-audit.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="techeo wordmark. Engine Audit: $1,500, 7 business days.">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">{ …the page's @graph, see #structured-data… }</script>
```

- **`og:title`** is the title without " | Techeo", because `og:site_name` already carries the name.
- **`og:image:alt`** describes the share image (`05`, 1200 × 630). It never contains a Homets figure.
- **T7 and T8** use `og:type` `article` and add `article:published_time` and `article:modified_time`. These equal the visible dates and the JSON-LD dates.
- **No `twitter:site`.** Techeo has no X account.
- **No `meta name="robots"` on indexable pages** (`02` #indexing). Only noindex pages carry one. No `meta keywords`.

### Headings {#headings}

One H1 per page, naming what the page answers. H2s are the sub-questions or claims, in the order an owner asks them (`techeo.web.strategy` #message-hierarchy), and levels never skip. On T7 and T11 pages, headings are phrased as the owner's question wherever that reads naturally. Ids are frozen at first publication (`02` #fragments), so a published heading can be reworded but its id never changes.

### The answer-first rule {#answer-first}

The first paragraph under an H1, and the first sentence under every question heading, answers the question on its own. Assistants and snippets quote a passage, not a page, so the passage has to survive being lifted out of it. Two length limits apply:

- **Articles (T7):** the paragraph under the H1 is `04`'s `AnswerFirst`, identical to the index `answer`, and runs **200 characters or fewer** (`06` content schema, `answer: z.string().max(200)`; `04` #insights-article; `12` #quotable). The schema fails the build on a longer one.
- **Every other answering passage** runs **60 words or fewer**: the first paragraph under the H1 of any non-article page, and the first sentence under a question heading, including every FAQ answer and every question-phrased H2 in an article (`#headings`). The 60-word limit applies to these passages only.

| Rule | Pass | Fail |
|---|---|---|
| Name the subject | "Techeo's Engine Audit costs $1,500." | "It costs $1,500." |
| The answer comes before the reasons | "Call a web lead back within minutes. On our own desk, …" | "Speed matters because homeowners…" |
| No references back to earlier text | "The Booking Engine works on calls you already pay for." | "As mentioned above, this works on…" |
| Qualifiers stay attached to the claim | "Our standing target is 70%. It is Homets' target, not an industry average." | A bare "70%" |
| The date stays attached to the number | "[HOMETS_BOOKING_RATE_TO] in [HOMETS_WINDOW]" in the same sentence | The date only in a footnote |

`03`'s FAQ already works this way ("The first sentence of every answer stands alone"). This rule extends it to every page.

### Quotable definitions and formulas {#definitions}

1. **The pattern is:** "**{Term}** is {what kind of thing} {that differs from others by}." At most 40 words (`06` enforces this on glossary entries). The definition never uses the term to define itself. The same definition appears everywhere: `12`'s glossary entry is the single source, and articles, `/llms.txt`, and markup quote it word for word.
2. **Formulas are text, never an image:** "Booking rate = qualified callers who booked ÷ qualified callers." State the unit, what's excluded ("An out-of-area caller turned away isn't a miss," `04`), and whether to use a median or an average.
3. **Every worked example is labeled "Example" in the same sentence** as its figures (`04` #calculator, #glossary). An example figure is never styled like a result.
4. **Our targets are labeled as ours:** "our standing target," "Homets' own target." A benchmark is never presented as fact (`techeo.web.strategy` #message-hierarchy).

### Numbers, dates, and sources {#numbers}

D7 and `10`'s claims ledger govern which numbers may appear. For search and AI answers, three rules follow:

- **The date travels with the number.** The measurement window appears in the same sentence or the same table row as the figure, because quotes are lifted one sentence at a time.
- **Dates are machine-readable.** Every visible published or updated date is a `<time datetime="YYYY-MM-DD">` element. It matches the JSON-LD `datePublished` and `dateModified` and the sitemap `lastmod`, all driven from one `updated` field (`04` #insights-article).
- **Platform facts carry an "as of" date and link a primary source.** Examples: Google's LSA credit process, and FAQ rich-result status. A platform fact older than 12 months is re-verified before the page is next updated.

### Internal links for search {#internal-links}

`02` #linking owns the rules. Three are added for search:

1. Every target URL in `#query-map` gets at least one contextual inbound link whose anchor text is its query phrase ("speed to lead," "Engine Audit"), besides nav and footer links. Anchor text otherwise follows `02` #anchor-text.
2. **One page per phrase.** Monthly, look in Search Console for queries where two techeo.com URLs both get impressions. The non-target page links to the target and is edited so it no longer competes.
3. Off-site links point to the page for the topic discussed: podcast notes about marketplace leads link to the claim-2 article, not the homepage (`#entity`).

### Alt text and image files {#alt-text}

`03`, `04`, and `05` own the words. The standard: describe what is in the image and why it's there, in about 125 characters (a screen-reader convention, not a rule). Name a person only if a release is on file (D9). Never add query phrases that aren't depicted. Decorative images get `alt=""`; a diagram gets a short alt plus a full text version in the HTML (`04` #engines-hub). Source file names are descriptive, lowercase, and hyphenated (`homets-dispatch-board-blurred.jpg`); Astro keeps the base name in hashed output.

### The season banner is kept out of snippets {#nosnippet}

Add `data-nosnippet` in two places only:

1. **`<section id="season-banner">`.** The banner repeats on every page and changes with the season state.
2. **Every state-dated sentence on an indexable page:** any sentence that renders `{next opening}` or `{capacity date}`, wrapped in `<span data-season-dated data-nosnippet>`. That covers the WAITLIST body of `#start` (`03` #home-start), the hero microcopy, and the `/audit` and `/teardown` WAITLIST lines. `06` adds the span in the helper that fills the date, so `03`'s words don't change.

Google honors `data-nosnippet` in search snippets and, per its documentation, in its AI features (verify). That stops "New audits open February 1" from being quoted after the date has passed. The durable season policy stays quotable in `#faq-peak-season`, in the undated sentences of `#start`, and in `/llms.txt`, which is rebuilt on every flip.

**Done when:** CI finds `data-nosnippet` only on `#season-banner` and on elements carrying `data-season-dated`, and every rendered `{next opening}` or `{capacity date}` on an indexable page sits inside one of them.

## Structured data {#structured-data}

### Principles {#sd-principles}

1. **Markup describes what the page shows and nothing more.** Every value in JSON-LD, whether a price, a question, a date, or a name, is visible on the same page. It is generated from the same data file that renders the visible text (`06` config, `04` pricing file). CI compares the two.
2. **One `<script type="application/ld+json">` per page, in `<head>`, as a single `@graph`,** in the raw HTML (D3). It is never injected by JavaScript. `06`'s CSP allows it.
3. **Stable `@id`s** (below). A page that references a node elsewhere on the site also includes a small copy of that node, because `@id` references are not resolved across pages.
4. **Nothing is marked up to chase a rich result that the content doesn't earn.** Where a type produces no Google display, we still use it only if it states facts accurately for other parsers, at no maintenance cost.
5. Tokens render through `06`'s `token()` helper. The production token gate (`06` #ci) scans JSON-LD too.

| Node | `@id` |
|---|---|
| Organization (Techeo) | `https://techeo.com/#organization` |
| WebSite | `https://techeo.com/#website` |
| Person (Blake) | `https://techeo.com/#blake` |
| Homets reference | `https://techeo.com/#homets` |
| Logo | `https://techeo.com/#logo` |
| Each page | `{canonical}#webpage` |
| Breadcrumb | `{canonical}#breadcrumb` |
| Service | `{canonical}#service`, or `https://techeo.com/pricing#{offer-slug}` |
| Service (v1 homepage retainers) | `https://techeo.com/#retainers` |
| FAQ block | `{canonical}#faq` on `/`; `{canonical}#{faq-section-id}` elsewhere |
| Question | `{canonical}#faq-{slug}`, the same as `03`'s ids |
| Glossary | `https://techeo.com/glossary#termset`; each term is `{term URL}#term` |

### Organization, not LocalBusiness {#organization-type}

**Decision: Techeo is marked up as `Organization`, never as `LocalBusiness`, `ProfessionalService`, or any other LocalBusiness subtype.**

- Schema.org defines `LocalBusiness` as "a particular physical business or branch of an organization." `ProfessionalService` is a subtype, so it means the same.
- Techeo has no premises customers visit. [TECHEO_POSTAL_ADDRESS] is a registered-agent or mailbox address (brief #names). Marking it up as a business location would be false and would invite a local listing Google's rules don't allow (`#gbp`). Techeo's buyers are national, so local signals wouldn't reach them anyway.
- `OnlineBusiness` (a newer Organization subtype, which Google's Organization documentation recognizes; verify) was considered and rejected: the Google features tied to it are aimed at online merchants (verify), and "online" undersells work done on clients' phones.
- **Homets is the opposite case:** a real HVAC company that goes to customers' homes. Techeo's pages type it `HVACBusiness`, with only its name and website. Techeo never publishes Homets' address or phone, so the two companies' contact details can't be merged.

**Revisit only if** Techeo opens a staffed office that clients visit during stated hours. None is planned.

### Types per page {#types-per-page}

**Compact copies (rule 3 of `#sd-principles`).** Every page with a WebPage-family node includes at least a compact WebSite (`@id`, `url`, `name`) and a compact Organization (`@id`, `name`, `url`, `logo`). Any page whose nodes cite `#blake` or `#homets` includes their compact nodes. The table lists the rest.

| Page | Types in the `@graph` |
|---|---|
| `/` | WebSite, Organization (full), Person (full), HVACBusiness (Homets reference), WebPage, Service (retainers, v1 form), FAQPage (`#faq`) |
| `/audit` | WebPage, Service + Offer (Engine Audit), FAQPage (`#audit-faq`), compact Organization and Person |
| `/teardown` | WebPage, Service + Offer (Booking Rate Teardown, price 0), FAQPage (`#teardown-faq`), compact Organization |
| `/privacy`, `/terms`, `/accessibility` | WebPage, compact Organization |
| `/thanks/*`, 404 | None |
| `/insights` | CollectionPage, compact Organization |
| `/insights/<slug>` | Article, WebPage, BreadcrumbList, compact Organization, Person, and HVACBusiness |
| `/engines` | CollectionPage, compact Organization |
| `/engines/*` | WebPage, Service (the engine; Search, Answer, and Ads reference the Demand Engine offer), BreadcrumbList, compact Organization |
| `/pricing` | WebPage, Service + Offer for the Engine Audit, Booking Sprint, and Demand Engine, FAQPage (`#questions`), compact Organization |
| `/case-studies` | CollectionPage |
| `/case-studies/<slug>` | Article (`about`: the client Organization, name as approved), WebPage, BreadcrumbList, compact Organization. **No `Review` or `AggregateRating`.** |
| `/calculator` | WebApplication (`applicationCategory` "BusinessApplication", `isAccessibleForFree` true, Offer price 0) |
| `/about` | AboutPage (`mainEntity`: Organization; `about`: Person), full Organization and Person. See the note below. |
| `/markets`, `/partners` | WebPage, compact Organization. Nothing that could identify a client (`04` #markets). |
| `/glossary` | DefinedTermSet, CollectionPage, compact Organization |
| `/glossary/<term>` | DefinedTerm, WebPage, BreadcrumbList, compact Organization |
| `/for/*` | WebPage, Service, BreadcrumbList, compact Organization |
| `/resources` | CollectionPage |

`/about` uses `AboutPage`, not `ProfilePage`. Google's `ProfilePage` is meant for a page about one creator, and `02` rules out a separate author page. Revisit if the brief ever adds one.

**Never used:** any `LocalBusiness` subtype for Techeo · `Product` · `Review` · `AggregateRating` (reviews a business publishes about itself aren't eligible for review snippets, and v1 has no testimonials anyway, D7) · `HowTo` · `JobPosting` · `SpeakableSpecification`. `Event` is not used either; adding it for a real public talk means adding it to `#sd-contract` first.

### Homepage `@graph` (v1, WAITLIST) {#sd-home}

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://techeo.com/#website",
      "url": "https://techeo.com/",
      "name": "Techeo",
      "alternateName": "techeo.com",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://techeo.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://techeo.com/#organization",
      "name": "Techeo",
      "legalName": "Techeo LLC",
      "url": "https://techeo.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://techeo.com/#logo",
        "url": "https://techeo.com/brand/logo-square-512.png",
        "contentUrl": "https://techeo.com/brand/logo-square-512.png",
        "width": 512,
        "height": 512
      },
      "image": { "@id": "https://techeo.com/#logo" },
      "description": "Techeo builds marketing and booking systems for residential HVAC and plumbing contractors, run by Blake [FOUNDER_SURNAME], owner of Homets Air and Heat. Techeo is not an HVAC or plumbing company and does not service homes.",
      "telephone": "[TECHEO_PHONE]",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": "[TECHEO_PHONE]",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      "founder": { "@id": "https://techeo.com/#blake" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "knowsAbout": ["booking rate", "speed to lead", "answer rate", "Local Services Ads", "Google Business Profile", "search engine optimization", "answer engine optimization"],
      "ownershipFundingInfo": "https://techeo.com/#operator",
      "sameAs": ["{techeo_linkedin_url}"]
    },
    {
      "@type": "Person",
      "@id": "https://techeo.com/#blake",
      "name": "Blake [FOUNDER_SURNAME]",
      "givenName": "Blake",
      "familyName": "[FOUNDER_SURNAME]",
      "url": "https://techeo.com/#operator",
      "image": "https://techeo.com/downloads/founder-portrait.jpg",
      "jobTitle": "Founder",
      "description": "Blake [FOUNDER_SURNAME] owns Homets Air and Heat, an HVAC company in [HOMETS_METRO], and founded Techeo to install the same call-handling system in HVAC and plumbing shops outside that market.",
      "worksFor": [
        {
          "@type": "OrganizationRole",
          "roleName": "Founder",
          "worksFor": { "@id": "https://techeo.com/#organization" }
        },
        {
          "@type": "OrganizationRole",
          "roleName": "Owner",
          "worksFor": { "@id": "https://techeo.com/#homets" }
        }
      ],
      "knowsAbout": ["HVAC customer service desks", "booking rate", "speed to lead", "call scoring", "Local Services Ads"],
      "sameAs": ["{founder_linkedin_url}"]
    },
    {
      "@type": "HVACBusiness",
      "@id": "https://techeo.com/#homets",
      "name": "Homets Air and Heat",
      "url": "https://hometsair.com/"
    },
    {
      "@type": "WebPage",
      "@id": "https://techeo.com/#webpage",
      "url": "https://techeo.com/",
      "name": "Techeo | HVAC & Plumbing Marketing Run by an Operator",
      "description": "Techeo books more of the calls HVAC and plumbing contractors already pay for. Run by the owner of Homets Air and Heat. Engine Audit: $1,500.",
      "isPartOf": { "@id": "https://techeo.com/#website" },
      "about": { "@id": "https://techeo.com/#organization" },
      "inLanguage": "en-US",
      "dateModified": "2026-11-20"
    },
    {
      "@type": "Service",
      "@id": "https://techeo.com/#retainers",
      "name": "Retainers",
      "description": "Retainers from $3,500/month. The Engine Audit tells you which one fits and what it costs, before you sign anything.",
      "provider": { "@id": "https://techeo.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "minPrice": 3500,
          "priceCurrency": "USD",
          "unitCode": "MON",
          "unitText": "month"
        }
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://techeo.com/#faq",
      "url": "https://techeo.com/#faq",
      "isPartOf": { "@id": "https://techeo.com/#webpage" },
      "mainEntity": [
        {
          "@type": "Question",
          "@id": "https://techeo.com/#faq-price",
          "name": "What does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Techeo's free phone teardown costs nothing, and the Engine Audit is $1,500, credited in full against the first month of any retainer you sign within 30 days of your readout. Retainers start at $3,500/month. Ad spend is separate: Google and the lead platforms bill your own card, never us. We publish the price because you shouldn't need a sales call to find it."
          }
        },
        {
          "@type": "Question",
          "@id": "https://techeo.com/#faq-homets-conflict",
          "name": "You own an HVAC company. Aren't you my competitor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Techeo is not your competitor if you're a client: we take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets Air and Heat, and we work with one client per market per trade, in writing. Your data is never used for Homets. If Homets ever moves toward your market, you'll hear it from Blake first and can leave without penalty. Neither Techeo nor Homets Air and Heat will hire your technicians or office staff, and you agree not to hire ours. It's in the contract. The upside: the system we install runs Homets' own phones."
          }
        },
        {
          "@type": "Question",
          "@id": "https://techeo.com/#faq-homeowner",
          "name": "I'm a homeowner. Can you fix my system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Techeo doesn't repair or install anything: we're a marketing and call-handling company for contractors. Please call a licensed contractor near you."
          }
        }
      ]
    }
  ]
}
```

**How each node is built**

- **The FAQ is generated for all 18 of `03`'s questions,** in page order, from the data that renders the visible FAQ, in the state being deployed.
- **The Homets relationship is stated accurately.** Blake holds a role at each company: Founder of Techeo, Owner of Homets. The two companies are **never** linked with `parentOrganization`, `subOrganization`, or `sameAs`: they are separate companies with a common owner (D4, `techeo.legal` #formation), not parent and subsidiary, and not one entity. `ownershipFundingInfo` points to the disclosure. The Homets `url` appears only if `02` open question 3 approves the visible link, because markup never goes beyond the page.
- **The Role pattern** (`OrganizationRole` inside `worksFor`) is valid schema.org. If validator.schema.org flags it, fall back to `"worksFor": [{ "@id": "https://techeo.com/#organization" }, { "@id": "https://techeo.com/#homets" }]` and keep the description sentence.
- **`sameAs`** comes from a config list of verified profile URLs (`#entity`) that `06` adds to `site.ts`; an empty list omits it. `{techeo_linkedin_url}` and `{founder_linkedin_url}` are build values, not brief tokens. `sameAs` never points to hometsair.com, a different entity.
- **`address`** is added only if `06` stores [TECHEO_POSTAL_ADDRESS] as structured parts for a `PostalAddress`; otherwise it's omitted (recommended, not required). **`foundingDate`** is added from a `site.ts` value once the LLC filing receipt exists (Week 2).
- **The Organization `description`** is the `#fact-sheet` "One line" and "What it isn't" strings, joined with a space, word for word. CI diffs it against the fact sheet.
- **The logo** is served from a stable, unhashed path, `public/brand/logo-square-512.png`, at 512 × 512 (`05` #wordmark, `06` #repo); Google's minimum is 112 × 112 (verify). **The portrait** is `public/downloads/founder-portrait.jpg`, metadata-free at a stable URL (`06` #repo). Neither file may move under `src/assets/`, where Astro hashes filenames and the markup URL would 404. `#sd-validation` and launch check L2 prove both URLs resolve.

### Service and Offer: the Engine Audit and the teardown {#sd-offers}

The `/audit` page in OPEN, with the nodes that don't change omitted:

```json
{
  "@type": "Service",
  "@id": "https://techeo.com/audit#service",
  "name": "Engine Audit",
  "url": "https://techeo.com/audit",
  "serviceType": "Marketing and call-handling audit",
  "description": "A 7-business-day audit of an HVAC or plumbing contractor's phones, search, AI answers, and ads. It scores five weighted workstreams and prices the revenue being lost in a Gap Statement built only from the contractor's own data, rounded down, with every step shown.",
  "provider": { "@id": "https://techeo.com/#organization" },
  "areaServed": { "@type": "Country", "name": "United States" },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Residential HVAC and plumbing contractors on ServiceTitan that already buy leads",
    "yearlyRevenue": {
      "@type": "QuantitativeValue",
      "minValue": 1500000,
      "maxValue": 15000000,
      "unitText": "USD"
    }
  },
  "offers": {
    "@type": "Offer",
    "@id": "https://techeo.com/audit#offer",
    "url": "https://techeo.com/audit",
    "price": "1500",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@id": "https://techeo.com/#organization" },
    "description": "Paid before work starts, by card or ACH. Credited in full against the first month of any retainer signed within 30 days."
  }
}
```

**By season state.** The Offer is rebuilt on every flip (`06`):

| State | `availability` | `availabilityStarts` | Added to `description` |
|---|---|---|---|
| OPEN | `https://schema.org/InStock` | omitted | — |
| WAITLIST · `season` | **omitted** | the next opening date, e.g. `2027-02-01` | "Reservations are open; no payment is taken to reserve." |
| WAITLIST · `capacity` | **omitted** | the capacity date | Same sentence. It never gives the reason (`03`). |

`availability` is left out in WAITLIST because no schema.org availability value means "reserve now, no payment taken." `PreOrder` and `BackOrder` both imply an order. Leaving it out is more accurate than choosing the nearest value.

**The teardown** uses the same shape: `name` "Booking Rate Teardown", `serviceType` "Phone mystery shop", `price` "0", and `description` "Three calls to the contractor's published number as a homeowner, scored against a written standard, with a 15–20 minute walkthrough. Free." No `availability` in WAITLIST, where requests are queued.

### Service and Offer: the retainers from v2 {#sd-retainers}

v1 marks up only what the homepage states: "Retainers from $3,500/month" (the `minPrice` form above). From v2, `/pricing` and `/engines/booking` carry full offers built from `04`'s pricing file. The Booking Sprint:

```json
{
  "@type": "Service",
  "@id": "https://techeo.com/pricing#booking-sprint",
  "name": "Booking Sprint",
  "url": "https://techeo.com/pricing",
  "description": "Installs the Booking Engine: written call standards adapted to your prices, lead-source playbooks, callback times measured in ServiceTitan, weekly call scoring and reports, and live training. 90-day minimum, then month-to-month with 30 days' written notice.",
  "provider": { "@id": "https://techeo.com/#organization" },
  "areaServed": { "@type": "Country", "name": "United States" },
  "offers": {
    "@type": "Offer",
    "url": "https://techeo.com/pricing",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": 3500,
      "priceCurrency": "USD",
      "unitCode": "MON",
      "unitText": "month"
    },
    "validFrom": "{prices_effective_date}"
  }
}
```

**The Demand Engine** is the same node with `@id` `https://techeo.com/pricing#demand-engine`, `price` 6500, and the description "All four engines: the Booking Engine, Search (SEO), Answer (AEO), and the Ads Engine. Ad spend is extra and is billed by Google and the lead platforms to the client's own card, on the client's own accounts. Month-to-month with 30 days' written notice."

Retainer offers never carry `availability`: they're signed under an MSA after an audit, with no checkout (`techeo.web.strategy` anti-goal 2). The Attribution Layer and design-partner pricing are never marked up (D6). Descriptions must match `04`'s `/pricing` copy, and change in the same deploy when it does (CI diffs the pricing file).

### FAQPage: what changed, and why we keep it {#sd-faq}

**What Google changed.**

- **August 2023.** Google limited FAQ rich results to "well-known, authoritative government and health websites." The same announcement cut HowTo rich results back, and HowTo was removed entirely soon after.
- **May 7, 2026.** Google deprecated FAQ rich results for all sites. The FAQ search-appearance filter, the Search Console report, and Rich Results Test support were scheduled for removal in June 2026, and Search Console API support in August 2026. Per the notice in Google's FAQ documentation, as reported by the trade press, the markup may stay on pages and Google may still use it to understand them. **Verify the wording on Search Central before launch.**

**Why we still mark it up.**

1. **It costs nothing to maintain,** because it is generated from the same data as the visible FAQ.
2. **It states the question-and-answer pairs explicitly** for any parser that reads JSON-LD. The evidence that AI assistants use this is thin, and we don't claim a ranking or citation effect.
3. **The parity test is useful on its own.** CI fails when a visible question has no markup, or markup has no visible question. That catches FAQ drift.

**The drop rule.** If the FAQ markup ever needs to be edited by hand, remove it. The visible, answer-first HTML is what gets read and quoted.

### Article {#sd-article}

`/insights/<slug>`. The example is `12`'s A2 (#a2-untouched-leads), with its title, slug, and `description`. The dates are **illustrative**, and `12` and `11` set the real ones:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://techeo.com/insights/marketplace-leads-never-touched#article",
      "headline": "How many paid leads does your shop never call?",
      "description": "Marketplace leads never touched are paid leads nobody called. How to count yours, how fast to call back, and the written standard an HVAC desk runs on.",
      "url": "https://techeo.com/insights/marketplace-leads-never-touched",
      "mainEntityOfPage": { "@id": "https://techeo.com/insights/marketplace-leads-never-touched#webpage" },
      "datePublished": "2026-12-15",
      "dateModified": "2026-12-15",
      "author": { "@id": "https://techeo.com/#blake" },
      "publisher": { "@id": "https://techeo.com/#organization" },
      "image": "https://techeo.com/og/insights/marketplace-leads-never-touched.png",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "about": [{ "@type": "Thing", "name": "Marketplace leads never touched" }, { "@type": "Thing", "name": "Speed to lead" }],
      "citation": [
        {
          "@type": "CreativeWork",
          "name": "Homets Air and Heat, ServiceTitan lead and call reports, [HOMETS_WINDOW]",
          "author": { "@id": "https://techeo.com/#homets" }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://techeo.com/insights/marketplace-leads-never-touched#webpage",
      "url": "https://techeo.com/insights/marketplace-leads-never-touched",
      "name": "How many paid leads does your shop never call? | Techeo",
      "isPartOf": { "@id": "https://techeo.com/#website" },
      "breadcrumb": { "@id": "https://techeo.com/insights/marketplace-leads-never-touched#breadcrumb" },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://techeo.com/insights/marketplace-leads-never-touched#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techeo.com/" },
        { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://techeo.com/insights" },
        { "@type": "ListItem", "position": 3, "name": "Paid leads never called" }
      ]
    },
    { "@type": "WebSite", "@id": "https://techeo.com/#website", "url": "https://techeo.com/", "name": "Techeo" },
    { "@type": "Organization", "@id": "https://techeo.com/#organization", "name": "Techeo", "url": "https://techeo.com/", "logo": "https://techeo.com/brand/logo-square-512.png" },
    { "@type": "Person", "@id": "https://techeo.com/#blake", "name": "Blake [FOUNDER_SURNAME]", "url": "https://techeo.com/#operator" },
    { "@type": "HVACBusiness", "@id": "https://techeo.com/#homets", "name": "Homets Air and Heat" }
  ]
}
```

**Article image rule:** an article's JSON-LD `image` and its `og:image` are both `https://techeo.com/og/insights/{slug}.png`, the file `06` #repo generates from `src/pages/og/insights/[slug].png.ts`.

- `headline` equals the H1. `datePublished` and `dateModified` equal the visible dates and the sitemap `lastmod`, all from the one `updated` field.
- `description` equals the page's meta description, which is `12`'s `description` field, so `#titles` rule 1 (155 characters or fewer) applies to it. The last breadcrumb `name` is `12`'s `shortTitle`.
- `author.url` is `/#operator` in v1.1 and `/about` from v2 (`02` #link-insights).
- `citation` lists every entry in the article's `sources[]` (`06` content schema), with `url` where there is one. A contractor-drafted article adds a second `author` Person with the contractor's real name and Blake as `editor` (`04` byline rule).
- **Case studies** use the same shape, plus `about` naming the client Organization exactly as approved. There is no `Review` markup, even for approved quotes.

### BreadcrumbList {#sd-breadcrumbs}

The trail must match `02` #breadcrumbs exactly. The last item carries a `name` and no `item`. Example for `/engines/booking`:

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://techeo.com/engines/booking#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techeo.com/" },
    { "@type": "ListItem", "position": 2, "name": "Engines", "item": "https://techeo.com/engines" },
    { "@type": "ListItem", "position": 3, "name": "The Booking Engine" }
  ]
}
```

Since January 2025, Google shows breadcrumbs only in desktop results (`02`). The markup stays because it costs nothing and describes the site's structure.

### DefinedTermSet and DefinedTerm (v3) {#sd-glossary}

`/glossary`. Each entry on the page is a `DefinedTerm`, whether or not it has its own page:

```json
{
  "@type": "DefinedTermSet",
  "@id": "https://techeo.com/glossary#termset",
  "name": "Glossary: the numbers that decide booked jobs",
  "url": "https://techeo.com/glossary",
  "publisher": { "@id": "https://techeo.com/#organization" },
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "@id": "https://techeo.com/glossary/speed-to-lead#term",
      "name": "Speed to lead",
      "url": "https://techeo.com/glossary/speed-to-lead",
      "description": "Speed to lead is the time from the moment a customer submits a request (a web form, a marketplace lead, a missed-call text) to the moment a person from your company is speaking with them."
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://techeo.com/glossary#answer-engine-optimization",
      "name": "Answer engine optimization",
      "alternateName": "AEO",
      "url": "https://techeo.com/glossary#answer-engine-optimization",
      "description": "Answer engine optimization (AEO) is the work of getting a business named and cited accurately in AI assistants and AI search results, through consistent business facts, structured data, reviews, and pages that answer questions directly."
    }
  ]
}
```

`/glossary/speed-to-lead`:

```json
{
  "@type": "DefinedTerm",
  "@id": "https://techeo.com/glossary/speed-to-lead#term",
  "name": "Speed to lead",
  "termCode": "speed-to-lead",
  "url": "https://techeo.com/glossary/speed-to-lead",
  "description": "Speed to lead is the time from the moment a customer submits a request (a web form, a marketplace lead, a missed-call text) to the moment a person from your company is speaking with them.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "@id": "https://techeo.com/glossary#termset",
    "name": "Glossary: the numbers that decide booked jobs",
    "url": "https://techeo.com/glossary"
  }
}
```

The page's `WebPage` node sets `mainEntity` to the term and includes the breadcrumb Home › Glossary › Speed to lead. `description` is `12`'s definition word for word; `06` limits it to 40 words. An entry without its own page uses `/glossary#{slug}` as its `url` and `@id` (`02` #slugs). Promoting it to a page later changes the `url` and adds a link, never a redirect. Answer engine optimization, in the example above, is an entry in wave 1 and is promoted to a page in wave 2 (`12` #glossary; query-map row D4).

### Required properties: the CI contract {#sd-contract}

`06`'s `jsonld.test.ts` builds its zod schemas from this table. Any type not listed here fails the build.

| Type | Required | Must equal |
|---|---|---|
| WebSite | `@id`, `url`, `name` | `name` = "Techeo" |
| Organization | `@id`, `name`, `url`; the full node on `/` and `/about` adds `legalName`, `logo`, `telephone`, `founder` | The canonical facts in `#entity` |
| Person | `@id`, `name`, `url` | `name` = "Blake [FOUNDER_SURNAME]" |
| HVACBusiness | `@id`, `name` | Used only for `#homets` |
| WebPage, AboutPage, CollectionPage | `@id`, `url`, `name`, `isPartOf` | `url` = the manifest canonical; `name` = the `<title>` |
| Service | `@id`, `name`, `provider` | `name` is a D6 offer or engine name, or exactly "Retainers" on `/` in v1 (`https://techeo.com/#retainers`) |
| Offer | `priceCurrency`, plus `price` or `priceSpecification` | The price in `offers.ts` (D6) and the visible price |
| FAQPage, Question, Answer | `mainEntity`; `name`; `acceptedAnswer.text` | The visible question and answer text, character for character |
| Article | `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `image` | H1, visible dates, `lastmod` |
| BreadcrumbList, ListItem | `itemListElement`, `position`, `name` | The visible trail |
| DefinedTermSet, DefinedTerm | `name`, `description` (term), `url` | `12`'s entry |
| WebApplication | `name`, `applicationCategory`, `offers` | — |
| Supporting types | ImageObject, ContactPoint, PostalAddress, Country, BusinessAudience, QuantitativeValue, UnitPriceSpecification, OrganizationRole, CreativeWork, Thing | — |

### Validation process {#sd-validation}

| When | Check | Pass |
|---|---|---|
| Every build | `jsonld.test.ts`: valid JSON, types allowed, required properties present, parity with visible text and `offers.ts` (`06`) | Zero failures |
| Every build | Token gate over JSON-LD (`06`) | No unfilled brief tokens in production |
| Every build | Every absolute techeo.com URL in JSON-LD and in `og:image` (logo, portrait, share images) resolves to a file in `dist/` | Zero missing |
| Each new template, before release | validator.schema.org on the preview HTML | 0 errors. Warnings are reviewed and logged. |
| Each new template, before release | Google Rich Results Test on the preview URL (behind Access, so paste the code) for types it still supports: Organization logo, Article, BreadcrumbList. Check Google's current list on the day. | "Valid" for each supported type; nothing else flagged |
| Launch day and each release | Search Console URL Inspection, "View crawled page": the JSON-LD is present in the HTML Google fetched | Present |
| Monthly | Search Console Enhancements and unparsable-structured-data reports | Zero errors |
| Monthly | Search Central's structured-data changelog: anything deprecated or changed for a type in this document | Change logged; this document updated within 30 days |

**Done when:** all six v1 indexable URLs (templates T1, T2, and T4) pass every row above before Nov 20, 2026, and every later template passes before its release.

## Google Business Profile and local listings {#gbp}

**Decision: Techeo does not create a Google Business Profile, a Bing Places listing, or an Apple Business Connect location.**

The reasoning, checked against Google's Business Profile guidelines as they read in September 2026 (verify before any change):

1. **The eligibility rule is in-person contact.** "To qualify for a Business Profile on Google, a business must make in-person contact with customers during its stated hours." Online-only businesses are listed as ineligible. Phone and video calls don't count as in-person contact.
2. **Techeo has no in-person contact.** Audits, readouts, training, and scoring are all delivered remotely. Techeo is not a service-area business either, because it never travels to a customer's location to do the work.
3. **The only address is a mailbox.** [TECHEO_POSTAL_ADDRESS] is a registered-agent or mailbox address. The guidelines don't accept PO boxes, mailboxes at remote locations, or virtual offices a business doesn't operate from.
4. **An ineligible profile would disprove the pitch.** Techeo manages Business Profiles for clients (`/engines/search`). A suspended or policy-violating profile of our own would be a public, checkable failure at exactly what we sell.
5. **It wouldn't help anyway.** Techeo's buyers are national (`techeo.positioning` #icp), and local-pack placement near a mailbox doesn't reach them.

**What replaces it:** the Organization markup (`#structured-data`), consistent off-site profiles (`#entity`), and, if Google ever generates a knowledge panel for Techeo or Blake, claiming it through Google's verification flow with the Techeo Workspace account that owns Search Console.

**Homets' own profile is untouched.** Homets' Business Profile never mentions Techeo, links to techeo.com, or lists a Techeo phone number. Homeowners who find Homets must never be routed to Techeo.

**Revisit** only if Techeo opens a staffed office that clients visit during stated hours.

## Crawler policy and `/robots.txt` {#robots}

### Policy {#crawler-policy}

D13 allows AI search and answer crawlers. This section also settles the separate question of **training** crawlers.

**Decision: allow all of them: search, answer, user-initiated, and training.**

- **We want to be known.** Search and answer crawlers get techeo.com cited in answers built from live retrieval. Training crawlers are the only way Techeo becomes part of what models know without searching, and for a new company being unknown costs more than being in a training set.
- **Nothing published is a product we'd lose.** SOPs, the rubric, the scenario scripts, the Gap spreadsheet, and the full 12 prompts are never published (`04` #resources). What's public is marketing, meant to be read.
- **Google-Extended covers grounding as well as training,** so blocking it would also opt out of grounding Gemini answers, a surface we want.
- **We tell clients the same thing.** An AEO agency blocking the engines it sells visibility in would argue against its own product.
- **The cost is small.** Crawler requests to static Pages files touch no paid resource; the only Functions are under `/api/`, which is disallowed and sends `X-Robots-Tag: noindex` (`06`).

### The crawlers, by company {#crawler-table}

User-agent names were checked against each company's documentation or reporting of it in September 2026. Some vendor pages are blocked from this environment, so **re-verify each name and its robots.txt behavior against the vendor's own page on launch day** and quarterly after that.

| Company | Token | Kind | What it does | Honors robots.txt? | Decision |
|---|---|---|---|---|---|
| OpenAI | `GPTBot` | Training | Collects public pages that may be used to train OpenAI's foundation models | Yes | Allow |
| OpenAI | `OAI-SearchBot` | Search | Indexes pages for ChatGPT's search features. OpenAI revised this in Dec 2025, reportedly including how blocking affects appearing in answers; verify the current wording. | Yes | Allow |
| OpenAI | `ChatGPT-User` | User-initiated | Fetches a page when a ChatGPT user, a custom GPT, or a GPT Action asks for it | **No.** Since Dec 2025 OpenAI's docs say robots.txt rules may not apply, because the request is user-initiated. | Allow (listed to state our intent) |
| Anthropic | `ClaudeBot` | Training | Collects web content that may contribute to model training | Yes (Anthropic's support article, read 2026-09-25) | Allow |
| Anthropic | `Claude-SearchBot` | Search | Indexes content to improve Claude's search results | Yes | Allow |
| Anthropic | `Claude-User` | User-initiated | Fetches pages when a Claude user's question needs them | Yes, per Anthropic | Allow |
| Perplexity | `PerplexityBot` | Search | Indexes pages for Perplexity answers. Perplexity says it is not used to pre-train foundation models. | Yes. Changes take up to 24 hours. | Allow |
| Perplexity | `Perplexity-User` | User-initiated | Fetches a page a user's question needs | **Generally no,** per Perplexity, because a user requested it | Allow |
| Google | `Googlebot` | Search | Google Search, including AI Overviews and AI Mode | Yes | Allow |
| Google | `Google-Extended` | Training and grounding control | **A robots.txt product token, not a separate crawler.** Googlebot's user agents do the fetching. The token controls whether content may be used to train Gemini models and to ground Gemini Apps and Vertex AI answers. Google says it does not affect inclusion or ranking in Search. AI Overviews and AI Mode are governed by Googlebot and, since Aug 2026, by Search Console's "Search generative AI" setting (Include/Exclude; verify; `#gsc`). | n/a (it is itself a robots.txt control) | Allow |
| Apple | `Applebot` | Search | Siri, Spotlight, and Safari search. Apple says its data may also be used to train Apple's foundation models unless Applebot-Extended is disallowed. | Yes | Allow |
| Apple | `Applebot-Extended` | Training control | A token that controls training use. It does not crawl. | n/a | Allow |
| Common Crawl | `CCBot` | Training (indirect) | Builds the open Common Crawl corpus, which is widely used to train models | Yes | Allow |
| Microsoft | `Bingbot` | Search | The Bing index, which also grounds Microsoft Copilot answers | Yes | Allow |
| Others | `Meta-ExternalAgent` (training), `Meta-ExternalFetcher` (user), `Amazonbot`, `DuckAssistBot`, `MistralAI-User`, `GoogleOther`, `Google-CloudVertexBot`, `Bytespider`, and any we haven't listed | Mixed | — | Varies | Allowed by the default group and not named. Revisit only if one bot causes measurable cost or error load. |

**Two consequences to accept.** OpenAI's and Perplexity's user-initiated fetchers don't reliably follow robots.txt, so robots.txt was never the control for anything private; nothing private lives on techeo.com, and teardown recordings are never hosted there (`techeo.web.strategy` open question 9). And since the policy allows every category, only a network rule could make the site behave differently from this file, which is why `#cloudflare` exists.

### Cloudflare settings that must match {#cloudflare}

`06` owns the zone; this is the policy it implements (`06` #dns, "Crawler settings"). Cloudflare announced on July 1, 2026, that from **September 15, 2026**, new zones, new sites added by existing customers, and existing free-plan zones without an explicit setting would block its Training and Agent crawler categories by default on pages that show ads (verify). It also said crawlers that serve several purposes would be judged by the strictest applicable rule. Reporting states that **blocking Training therefore also blocks Googlebot, Bingbot, and Applebot**, because each of them crawls for both search and training (verify Cloudflare's current labels and scope on the day the zone is added). techeo.com shows no ads, and whether its zone is new or already exists (D5 preflight), the settings below are set explicitly rather than left at defaults. So:

| Setting | Value | Why |
|---|---|---|
| AI Crawl Control: Search, Agent, Training | **Allow all three** | Matches the policy. Allowing Training also keeps multi-purpose search crawlers from being blocked. |
| "Block AI bots" / AI bot blocking | Off | Same |
| Managed robots.txt | **Off** | It would add `Content-Signal: search=yes, ai-train=no`, which contradicts this policy. Our own file is served instead. |
| Pay per crawl | Not enabled | Any charge or block defeats being cited |
| Bot Fight Mode | Off | It can challenge legitimate crawlers |
| AI Labyrinth | Off | It serves decoy pages to crawlers |
| Crawler Hints | **On** (confirming `06`) | Cloudflare sends IndexNow signals when content changes (`#indexnow`) |

**Done when:** on the day the zone is added, and monthly after that, a screenshot of each setting is filed in `06`'s monthly checklist. Cloudflare's AI crawler analytics show every named crawler that actually fetched the site getting status 200, with none challenged or blocked. Google-Extended and Applebot-Extended are tokens and never appear, and the user-initiated fetchers appear only after L3's test question. A byte-for-byte diff of the served `/robots.txt` against the repository file is empty.

### The file {#robots-file}

`src/pages/robots.txt.ts` emits exactly this text (`06` #repo). It is static, apart from the `Sitemap` host, which is taken from `site`.

```
# robots.txt for https://techeo.com
# Owned by techeo.web.search (07-seo-and-aeo.md). Change that document first.
#
# Policy: search engines, AI answer engines, fetches a person asks an AI
# assistant to make, and AI training crawlers may all read every public page.
# Techeo sells being found and being cited, so nothing public is hidden.
#
# /thanks/* pages carry a noindex tag. They are deliberately not disallowed:
# a crawler has to fetch a page to see its noindex.
# /api/ holds form endpoints, webhooks, and health checks. None are pages.
#
# A plain-language guide for AI systems: https://techeo.com/llms.txt

# Named crawlers, grouped: search engines; AI search indexes; user-requested
# fetchers; AI training crawlers and training-control tokens. They are named
# so the decision is explicit. Their rules match the default group below.
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
User-agent: OAI-SearchBot
User-agent: Claude-SearchBot
User-agent: PerplexityBot
User-agent: ChatGPT-User
User-agent: Claude-User
User-agent: Perplexity-User
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /api/

# Everyone else
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /api/

Sitemap: https://techeo.com/sitemap-index.xml
```

**Notes**

- A crawler follows only the most specific group that names it. That's why the named group repeats the default rules instead of inheriting them. RFC 9309 allows several `User-agent` lines in one group, and matching is case-insensitive. No comment lines sit between the `User-agent` lines, for parsers that handle that badly.
- **`Content-Signal`** is Cloudflare's proposed extension (September 2025), not a standard; RFC 9309 parsers skip lines they don't know. Google's John Mueller reportedly said in July 2026 that no known crawler acts on it. We include it only as a plain statement of preference (open question 6). The IETF AIPREF drafts (`draft-ietf-aipref-vocab`, `draft-ietf-aipref-attach`, both revised August 2026; verify) define a `Content-Usage` rule, which we adopt once a crawler we care about honors it.
- `Disallow: /api/` stops wasted fetches of the form, webhook, and health endpoints, which also send `X-Robots-Tag: noindex` (`06`). Nothing links to them.
- There is no `Crawl-delay`. Bing honors it, and we want Bing crawling as fast as it likes.

**Done when:**

- `curl -sI https://techeo.com/robots.txt` returns `200` with `content-type: text/plain`.
- Search Console's robots.txt report shows the file fetched with no errors. Warnings about the `Content-Signal` line are accepted and logged.
- Bing Webmaster Tools' robots.txt tester allows `/`, `/audit`, and `/thanks/teardown`, and blocks `/api/forms/audit-reserve`.
- The file served on a preview deploy is identical, while preview hosts stay noindexed by header (`02`).

## `/llms.txt` {#llms-txt}

**What it is.** A proposal published in September 2024 at llmstxt.org: a Markdown file at the site root that gives language models a short, curated guide to a site. **Its effect is unproven.** Google has said it doesn't use the file, and its documentation reportedly states (June 2026; verify) that the file has no effect on Search or AI Overviews. No major AI company has committed to reading it in production, and studies reported in 2026 found few AI crawler requests for it (verify before citing any figure). We publish it anyway: it costs one generated file, it gives any system that does read it our facts in the exact words used everywhere else, and a prospect checking whether an AEO agency practices what it sells may look for it. We never claim it does anything, on the site or in a sales conversation.

**How it's built.** `src/pages/llms.txt.ts` (`06`) builds it at each deploy from `site.ts`, `offers.ts`, `03`'s disclosure text, and `12`'s definitions, so a season flip rewrites the status line. It is served as `text/plain; charset=utf-8`. Every URL in it is an absolute canonical (`02` #url-rules). It goes through the token gate, and nothing in `04`'s "Keep private" columns appears in it.

**Build expressions.** Nothing in the file is paraphrased:

- **The blockquote** is the `#fact-sheet` "One line" and "What it isn't" strings, joined with a space. The paragraph under it is the "Two lines" string.
- **Each Terms line** is `- {term}: {12 #glossary definition for <slug>}`, for the slugs `marketing-engine-optimization`, `booking-engine`, `booking-rate`, `speed-to-lead`, and `marketplace-leads-never-touched`. The example below shows `12`'s rows 17, 18, 1, 5, and 8 word for word.
- **`{answering hours}`** is the receptionist's coverage hours from `08` #receptionist, rendered from `site.ts` (`ANSWERING_HOURS` plus [TZ], as `03` #conventions defines the token).

**The v1 file, WAITLIST state**, with tokens and build values unfilled:

```markdown
# Techeo

> Techeo builds marketing and booking systems for residential HVAC and plumbing contractors, run by Blake [FOUNDER_SURNAME], owner of Homets Air and Heat. Techeo is not an HVAC or plumbing company and does not service homes.

Techeo installs the phone-and-follow-up system that runs Homets Air and Heat's own customer service desk in HVAC and plumbing companies outside Homets' market, then builds demand on top of it. Clients keep every account.

Facts, as of {build date}:

- Techeo LLC is a [TECHEO_STATE] limited liability company. It is a marketing and call-handling company for contractors. It is not an HVAC or plumbing company and does not repair, install, or service anything for homeowners.
- Who owns Techeo: Techeo LLC is owned by Blake [FOUNDER_SURNAME], who also owns Homets Air and Heat, an HVAC company in [HOMETS_METRO]. We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets, and we work with one client per market per trade. Client data is never used for Homets.
- Who it is for: residential HVAC and plumbing contractors with $1.5M to $15M in yearly revenue and 3 to 25 trucks, running their jobs on ServiceTitan, already paying for leads (Local Services Ads, Google Ads, Angi, Thumbtack, or Yelp), with an owner who still signs the checks.
- Booking Rate Teardown: free. Three calls to a contractor's published number as a homeowner, scored against a written standard, with a 15–20 minute walkthrough.
- Engine Audit: $1,500, 7 business days from access granted. It scores five workstreams (the Booking Engine 40%, Search 20%, Answer 15%, the Ads Engine 15%, Money 10%) and prices the revenue being lost from the contractor's own data. Credited in full against the first month of any retainer signed within 30 days.
- Retainers from $3,500/month, signed under a written agreement after an audit.
- Clients keep every account (Google Ads, Local Services Ads, Google Business Profile, analytics, call tracking, CRM) in their own name and on their own card. Ad spend never passes through Techeo.
- Every result Techeo names is a target, not a promise.
- Status: {season_status_sentence}
- Phone: [TECHEO_PHONE], answered live {answering hours}.

Terms we use:

- MEO (Marketing Engine Optimization): MEO (Marketing Engine Optimization) is Techeo's name for running a contractor's four marketing engines as one system judged by cost per booked job: the Booking Engine, Search (SEO), Answer (AEO), and the Ads Engine.
- The Booking Engine: The Booking Engine is everything that happens after the phone rings or a lead lands, measured by answer rate, speed to lead, booking rate, and membership attach; it works on demand the contractor has already paid for.
- Booking rate: Booking rate is the share of qualified callers who end the call with a job booked: qualified callers who booked, divided by all qualified callers in the same window.
- Speed to lead: Speed to lead is the time from the moment a customer submits a request (a web form, a marketplace lead, a missed-call text) to the moment a person from your company is speaking with them.
- Marketplace leads never touched: Marketplace leads never touched is the share of paid marketplace leads that nobody from your company ever called, counted from each platform's own records because leads that never reached your CRM are the likeliest to be missed.

## Pages

- [Home](https://techeo.com/): what Techeo does, the four engines, prices, and who it is for
- [Engine Audit](https://techeo.com/audit): the $1,500 audit, what it checks, the access it needs, and how to book or reserve
- [Booking Rate Teardown](https://techeo.com/teardown): the free three-call phone test, and how to request one
- [Built by an operator](https://techeo.com/#operator): the founder, Homets Air and Heat, and how the two companies are kept apart
- [What we put in writing](https://techeo.com/#promises): account ownership, terms, exclusivity, and handover
- [Questions owners ask](https://techeo.com/#faq): price, contracts, the Homets conflict, ServiceTitan, peak season

## Optional

- [Privacy policy](https://techeo.com/privacy)
- [Terms of use](https://techeo.com/terms)
- [Accessibility statement](https://techeo.com/accessibility)
```

**`{season_status_sentence}` by state**

| State | Sentence |
|---|---|
| WAITLIST · `season` | "Reserving audit slots now; new audits open {next opening, as Month D, YYYY}. No payment is taken to reserve. The phone is answered all year." |
| OPEN | "Taking new Engine Audits now. From May 1 to September 6 and from December 1 to January 31, audits can be reserved but not started." |
| WAITLIST · `capacity` | "We're not taking new audits until at least {capacity date}. Reservations are open; no payment is taken." It never gives the reason (`03`). |

**Versions**

- **v1.1** adds an "Insights" section with each article's title and its one-sentence `answer`.
- **v2** swaps the anchor links for `/engines`, `/pricing`, `/about`, and `/case-studies`. It adds the Booking Sprint ($3,500/month, 90-day minimum, then month-to-month with 30 days' notice) and the Demand Engine ($6,500/month plus ad spend) (`02` #anchor-to-page names this update).
- **v3** adds `/glossary`.

**Measurement.** `09` counts monthly requests to `/llms.txt` by user agent from Cloudflare analytics. If no AI crawler has fetched it after six months, it stays as it is (it costs nothing), and we write no more supplementary files.

**Done when:**

- The file parses with the llmstxt.org reference parser into title, summary, and sections without error, and matches the structure above.
- Every fact in it matches `/`, `/audit`, and `03`'s disclosure. CI diffs the disclosure string, the prices, and the season sentence.
- CI diffs every Terms line against `12` #glossary and the blockquote against `#fact-sheet`.
- It changes on every flip.
- No `/llms-full.txt` or `.md` page copies exist. `02` rule 3 bans file extensions, and a second copy of the site would be a second thing to keep accurate.

## Indexing: sitemaps, IndexNow, Search Console, Bing, canonicals {#indexing}

`02` owns sitemap membership and canonical rules, `06` generates the files, and `09` owns analytics configuration and submits the sitemap (`02` #sitemap). This section specifies the search-tool setup those owners carry out, and the checks that prove it worked.

### Sitemaps {#sitemaps}

- **The index** is `https://techeo.com/sitemap-index.xml`, declared in `robots.txt` and submitted in both consoles. It holds `<loc>` and `<lastmod>` only, and `lastmod` is the content date, never the build time (`02`).
- **No ping endpoints.** Google retired its sitemap ping in 2023. Discovery comes from the `Sitemap:` line, console submission, and (for Bing and the other participating engines) IndexNow.
- **Checked monthly:** Search Console's Sitemaps report shows success, and the number of discovered URLs equals the manifest's `inSitemap` count (6 at v1).

### IndexNow {#indexnow}

IndexNow tells participating engines a URL has changed. Bing, Yandex, Seznam, Naver, and Yep take part; **Google does not** (verify). Copilot answers are grounded in Bing's index, so Bing freshness matters more than Bing's share of searches suggests (assumption).

- **Primary: Cloudflare Crawler Hints, which is on.** It sends IndexNow signals when cached content changes. It needs no key file on our site and so no new URL.
- **Check:** within 14 days of launch, Bing Webmaster Tools' IndexNow report shows techeo.com URLs received.
- **Fallback, if they don't arrive** (for example, if Crawler Hints doesn't cover Pages traffic): an explicit IndexNow POST in `deploy.yml`, submitting only URLs whose manifest `updated` date changed. This needs a key file at `/{key}.txt`, which is not in the brief's v1 URL list, so **the brief must be revised first** (`02` adds the file to its non-HTML list).

### Google Search Console {#gsc}

| Step | Setting | When |
|---|---|---|
| Property | **Domain property** `techeo.com`, verified by DNS TXT (`06` #dns). It covers http, https, apex, `www`, and `notify` | Week 2, Oct 2026 |
| Ownership | Owner: a Techeo Google Workspace account (D4). Full user: the founder's Techeo account. A freelancer gets a restricted user, removed when the contract ends. No personal Gmail on the property, ever. | Week 2 |
| Preflight | The Manual actions and Security issues reports, and the Links report, for the domain's history (D5) | Week 1–2 |
| Sitemap | Submit `https://techeo.com/sitemap-index.xml` | Launch day |
| URL Inspection | Live test, then "Request indexing" for `/`, `/audit`, `/teardown`. The legal pages are left to the sitemap. | Launch day |
| robots.txt report | Fetched, no errors | Launch day |
| Email alerts | On, to the owner account, forwarded to the founder | Week 2 |
| GA4 link | `09` | Per `09` |
| Generative AI performance report | Read monthly (a diagnostic) | From launch |
| Search generative AI control (Settings; verify its current name) | **Include** (the default). Never Exclude. Screenshot it with the Cloudflare settings (`#cloudflare`). | Week 2, then monthly |

**Disavow rule** (the decision `02` and `06` hand to this document): **no proactive disavow.** Google ignores most spam links on its own. File a disavow only if Search Console shows a manual action for unnatural links, or the preflight finds a link scheme from a previous owner pointing at the domain. The disavow file lists domains, not URLs, and is kept in `docs/preflight.md`.

### Bing Webmaster Tools {#bwt}

| Step | Setting | When |
|---|---|---|
| Add the site | Import from Search Console, signed in with the Techeo Workspace account. Otherwise verify by DNS CNAME (`06`). The Microsoft account used is a Techeo account (D4). | Week 2 |
| Sitemap | Submit the index | Launch day |
| URL Submission | Submit the six v1 indexable URLs | Launch day |
| IndexNow report | Confirm the Crawler Hints submissions arrive | Launch + 14 days |
| AI Performance | Read monthly: Copilot citations by URL and grounding queries (a diagnostic) | From launch |
| Keyword Research | Feeds `#measuring-demand` | Quarterly |

### Canonicals {#canonicals}

`02` #indexing sets the canonical rules. The search checks are:

1. **On launch day and at day 30:** URL Inspection on each indexable v1 URL shows "Google-selected canonical" equal to "User-declared canonical."
2. **Weekly for four weeks, then monthly:** searching `site:techeo-web.pages.dev` and `site:www.techeo.com` in Google and Bing returns nothing. If either returns results, confirm the `02` #host-redirects 301 (one hop, to the apex canonical) and that the canonical tags are correct, then wait for recrawl. Request indexing of the apex URL in URL Inspection if needed. **Never use Search Console's Removals tool for an alias host.** A removal request covers every http/https and www/non-www variant, so it would also hide the canonical techeo.com URL. Google says not to use it for canonicalization.
3. **Every build (CI):** `og:url`, the JSON-LD `url` and `@id` base, the sitemap `<loc>`, and the `/llms.txt` links all equal the manifest canonical.
4. **After any rename:** the old URL returns 301 in one hop, and the new URL is in the sitemap with a fresh `lastmod` (`02` #renames).

## Entity consistency and off-site work {#entity}

`techeo.web.strategy` sets the rule that entity facts are identical everywhere. This section supplies the facts and says where they go.

### The canonical fact sheet {#fact-sheet}

Every profile, listing, bio, show note, markup block, and `/llms.txt` uses these words. A change is made here first, then everywhere else within one week, and logged.

| Fact | Canonical wording |
|---|---|
| Name | Techeo. The legal name is Techeo LLC. The wordmark is lowercase `techeo` (`05`), but running text always says "Techeo." |
| URL | https://techeo.com |
| One line (≤160 characters) | Techeo builds marketing and booking systems for residential HVAC and plumbing contractors, run by Blake [FOUNDER_SURNAME], owner of Homets Air and Heat. |
| Two lines | Techeo installs the phone-and-follow-up system that runs Homets Air and Heat's own customer service desk in HVAC and plumbing companies outside Homets' market, then builds demand on top of it. Clients keep every account. |
| What it isn't | Techeo is not an HVAC or plumbing company and does not service homes. |
| Founder | Blake [FOUNDER_SURNAME], Founder of Techeo and Owner of Homets Air and Heat. As a title line, everywhere, including the LinkedIn headline: "Founder, Techeo · Owner, Homets Air and Heat" (open question 8). Never a gendered pronoun (D8). |
| Founder bio (third person) | `03`'s organizer bio, word for word |
| Disclosure | `03`'s footer disclosure, word for word |
| Phone | [TECHEO_PHONE], written as "(XXX) XXX-XXXX" in text and in E.164 format in markup |
| Offers and engines | D6 names exactly: Booking Rate Teardown, Engine Audit, Booking Sprint, Demand Engine; the Booking Engine, Search (SEO), Answer (AEO), the Ads Engine, under MEO |
| Industry label (where a directory makes you pick one) | "Marketing Services" |
| Location label | "United States" (serves clients nationally). Never a street address or a city. |

**Never:** "TechEO," "TECHEO" in running text, "Techeo Marketing," "Techeo Agency," Homets' phone or address beside Techeo's name, "CEO" (use "Founder"), or any claim `03` doesn't make.

**Footer social links** (`02` #footer asks this document to list them): **none in v1.** The LinkedIn company page appears only in the Organization `sameAs`, because a footer link to a page with no posts reads as empty. Revisit at v2.

### Channels, in the order `techeo.gtm` ranks them {#entity-channels}

| Channel (`techeo.gtm` #channels) | Asset | What we do | Done when |
|---|---|---|---|
| All channels: the founder's LinkedIn | Blake's personal profile | **Headline:** "Founder, Techeo · Owner, Homets Air and Heat · booking systems for HVAC & plumbing contractors." **Experience:** a Techeo entry (Founder, from the LLC's formation month) linked to the company page; the Homets entry unchanged. **About:** the two-line fact and the disclosure. **Featured:** techeo.com, then each v1.1 article. Posts carry the operator angle in full text, not link-only, because search engines and assistants index and cite LinkedIn posts (assumption). No engagement pods or automation. | Before Nov 20, 2026 |
| All channels: Techeo's LinkedIn company page | Company page, administered by Blake | Name, one-line and two-line facts, website, industry label, organization size "0-1 employees," never inflated. It is the Organization's first `sameAs`. It doesn't need to post. | Before Nov 20, 2026 |
| #1 Peer networks (ServiceTitan Pantheon, Nexstar, Service Nation / Roundtable, EGIA) | Member or vendor directory entries; speaker pages | List only where Techeo is a real member or approved vendor whose membership pays for itself through the channel. Listing text is the fact sheet; speaker pages get the bio, portrait, and techeo.com. **We never pay for a listing to get a link, or ask for a link to be followed.** | Within 30 days of joining (Week 9 onward) |
| #2 Adjacent vendors (ST consultants, bookkeepers, recruiters, financing reps) | Their own partner or resources pages, if they choose to have one | We give them the one-line fact with `/teardown` as the link, since the teardown is what they hand their clients (`techeo.gtm` #scripts). **No link swaps:** `/partners` names no partner (`04`), and nothing is traded for a mention. | Ongoing |
| #3 Owner communities and trades podcasts | Show notes and transcripts | A one-page **guest kit** for every host: the name spelled out ("Techeo: T-E-C-H-E-O"), the third-person bio, the portrait, the one-line fact, and a link to the page for the episode's topic (default: the homepage). Ask hosts to publish a transcript, since text is what assistants cite. Never pay for an appearance. In owner communities, Blake answers as Blake, disclosed, never through a second account. | The guest kit is built within 5 business days of the first confirmed podcast invitation, not before. |
| #4 Supply houses and manufacturer reps | Co-marketing mentions | The fact sheet, word for word | Per mention |
| #5 Own content | techeo.com | This document | — |
| Optional: Crunchbase | Organization profile | Basic profile with the fact sheet, in February 2027 (Phase 3; about 30 minutes, assumption). Not in Phase 2, whose list in `techeo.plan90` ends "Nothing else." It is a common source for "what is {company}" answers (assumption). | Feb 2027, 30 min, optional |

**Not in year one:**

- **Wikidata.** A new company without independent published sources is unlikely to meet Wikidata's notability rule ("serious and publicly available references"), and a self-made entry is self-promotion. Revisit once two independent publications have written about Techeo. **Wikipedia:** never.
- **General agency directories** (Clutch, UpCity, DesignRush, and similar). Trigger to revisit: a directory is cited on at least 3 of P01–P04 in two consecutive monthly logs. Then list only if the listing is free or earns its cost apart from a link, its facts can match the fact sheet, its rank can't be bought, and any reviews come from real clients through its own verification. We never pay for placement in a "top agencies" list.

### Should hometsair.com link to techeo.com? {#homets-link}

**Decision: yes. One sentence and one link, on Homets' About page (or wherever Homets introduces its owner). No sitewide link, no footer link, and nothing on Homets' Business Profile.** Draft text for Homets' site, to be confirmed by the founder as Homets' owner:

> Homets' owner, Blake [FOUNDER_SURNAME], also founded [Techeo](https://techeo.com/), a separate company that helps HVAC and plumbing contractors more than [EXCLUSION_RADIUS_MILES] miles from Homets with their phones and marketing. Techeo doesn't service homes. For service at your home, call Homets.

**Why.** Ownership is the most-checked fact about Techeo (`techeo.web.strategy` job 1), and stating it on both domains lets people and machines confirm it from either side. It costs Homets one sentence, with no staff, money, or founder time (`techeo.guardrails` governing principle). The separation principle (`techeo.legal`, D4) covers accounts, money, and data, not an honest statement of ownership. And it is not a link scheme: one disclosed editorial link between two commonly owned companies, not a network of sites linking to each other. So no `rel="nofollow"`: nothing about the link is paid or manipulative.

**Conditions.** It goes live after Blake has briefed Homets staff (`techeo.web.strategy` R9) and before Feb 1, 2027. The founder decides as Homets' owner; if Homets has other owners, their consent is recorded (`techeo.legal` #ip raises the possibility). Homets' structured data, if any, never uses `sameAs` to Techeo.

**Where and who.** Page: {hometsair.com About URL, founder to confirm}. Implemented by whoever maintains hometsair.com, outside Techeo hours. The founder's 10 minutes are for confirming the wording (`#first-90-days`).

**Done when:** `curl -s {that URL} | grep 'https://techeo.com/'` finds the link in the raw HTML, with no `rel="nofollow"` on it.

## AEO measurement: the monthly prompt test {#prompt-test}

This section owns the method. `09` owns storage, the dashboard, and reporting, and `techeo.web.strategy` S3 is the success criterion. The test adapts `techeo.audit`'s 12-prompt Answer workstream to Techeo's own queries.

### The 12 prompts {#prompts}

Every run uses this exact text, including punctuation. The prompts are not published on the site.

| Id | Group | Prompt | The page that should be cited |
|---|---|---|---|
| P01 | Category | What are the best marketing agencies for residential HVAC companies? | `/` |
| P02 | Category | Recommend a marketing company for a plumbing business that uses ServiceTitan. | `/` |
| P03 | Category | Which agencies help HVAC contractors book more of the calls they already get? | `/`, then `/engines/booking` |
| P04 | Category | How much does a marketing agency for an HVAC company cost per month, and what should be included? | `/#how-it-works`, then `/pricing` |
| P05 | Problem | My HVAC company gets plenty of leads, but our CSRs don't book enough of them. How do I fix our booking rate? | Claim-1 article |
| P06 | Problem | We pay for Angi and Thumbtack leads and a lot of them never get called back. What should a plumbing company do about it? | Claim-2 article |
| P07 | Problem | Our Local Services Ads budget runs out before noon and we get bad leads. How do I fix LSA for my HVAC business? | `/engines/ads` (v2) |
| P08 | Problem | How do I get my HVAC company recommended by ChatGPT and other AI assistants? | `/engines/answer` (v2) |
| P09 | Definition | What is booking rate for an HVAC or plumbing company, and how do you calculate it? | Claim-1 article, then `/glossary/booking-rate` |
| P10 | Definition | What is speed to lead, and how fast should a home service contractor call back a new lead? | Claim-2 article, then `/glossary/speed-to-lead` |
| P11 | Brand | What is Techeo (techeo.com), and who runs it? | `/`, `/#operator` |
| P12 | Brand | Is Techeo a legitimate company? How much does its Engine Audit cost and what's included? | `/audit` |

**Fact checklist.** S3 covers all 12 prompts: a run passes when every statement the assistant makes about Techeo, on any prompt, agrees with the fact sheet. P11 and P12 test the facts directly. Silence on a fact isn't an error.

The facts: a marketing and booking-systems company for residential HVAC and plumbing contractors · Blake [FOUNDER_SURNAME] is the founder · Blake owns Homets Air and Heat · the two are separate companies · Techeo doesn't service homes · the Engine Audit is $1,500, 7 business days, credited within 30 days · retainers from $3,500/month · clients keep their accounts · no clients within [EXCLUSION_RADIUS_MILES] miles of Homets; one per market per trade.

### Assistants and schedule {#assistants}

| Tier | Assistant, surface, mode | Frequency |
|---|---|---|
| Core | ChatGPT (chatgpt.com), logged out, default model, search left as the product decides; record whether sources were shown | Monthly |
| Core | Google AI Mode, logged out, private window. Also record whether a regular search for the same text showed an AI Overview (yes or no). | Monthly |
| Core | Perplexity (perplexity.ai), logged out, default mode | Monthly |
| Core | Microsoft Copilot (copilot.microsoft.com), logged out if allowed; otherwise a dedicated Techeo test account | Monthly |
| Extended | Gemini (gemini.google.com), logged out if allowed; otherwise a dedicated Techeo test account with activity saving off | Quarterly (Feb, May, Aug, Nov) |
| Extended | Claude (claude.ai). Requires an account: use a dedicated Techeo test account with memory off and web search on. | Quarterly |

**Reduced run for Phase 2 (December 2026 and January 2027).** Phase 2 caps the founder's Techeo time at 4 hours a week (`techeo.plan90`), so the builder runs the December and January tests (`11` #v1-1). They cover ChatGPT and Google AI Mode only: 24 runs, inside `11`'s budget of 1 builder hour each. Blake runs every test from February, starting with the full core set. The time estimates are **assumptions**, about 2.5 minutes per run including logging: roughly 1 hour for 24 runs, 2 hours for 48, and about 3 hours for 72. Variance runs (`#run-protocol` step 7) happen in the quarterly months (Feb, May, Aug, Nov) on the same day: +16 runs, about 40 minutes, so a quarterly month is 88 runs and about 3.7 hours. `11` counts these hours; its `#maintenance` row should read 1 h reduced, 2 h full core, and 3.7 h in quarterly months, not 2.5 h.

**Baseline.** One run of all 12 prompts on the four core assistants between Mon Nov 16 and Thu Nov 19, 2026, before the site goes live, run by the builder (`11` S5; launch check L0.1). This records the "before" state and exposes any other entity called Techeo.

### How to run it the same way every month {#run-protocol}

1. **When.** The first Tuesday, Wednesday, or Thursday of the month, between 10:00 and 14:00 [TZ], all runs on the same day. Results are logged by the 10th (`techeo.web.strategy` #success cadence). In a month with a scheduled flip (Feb 1, May 1, Sep 7, Dec 1), run on the first Tuesday, Wednesday, or Thursday at least 7 days after the flip, so the log shows how quickly answers caught up, and log within 2 business days. The monthly review uses the previous month's log if this one isn't in by the 10th.
2. **Where.** The same computer, network, and browser every month. No VPN, unless one fixed exit city is used every time. Record the location each assistant shows or infers.
3. **Fresh sessions.** Open a new private window for each prompt. Log out, or use a dedicated test account with memory, history, and personalization off. **Never use the founder's personal accounts.** They already know Blake runs Techeo, so the results would be contaminated.
4. **One shot.** Paste the prompt, wait for the full answer, and record only the first answer. No follow-ups and no regenerating. If the assistant asks a clarifying question, reply with exactly: "Residential, in the United States. I'm the owner." Record that the clarifier was used.
5. **Capture.** Save a full-page screenshot or PDF of every run as `YYYY-MM-DD_{assistant}_{prompt id}.png`, stored where `09` specifies.
6. **Note model changes.** If an assistant's default model label changed since last month, record it. The trend has a break there.
7. **Variance.** Answers vary from run to run. One run is a sample, not a measurement. In each quarterly month (Feb, May, Aug, Nov), on the same day as the monthly run, P11 and P12 are run three times on each core assistant, and any fact error in any of the three counts. The first run already counts toward the monthly log, so this adds 16 runs.

### The log format {#log-format}

One row per run, CSV, UTF-8, columns in this order. `09` owns where it lives and how it's reported.

```
run_date,assistant,session,model_label,location_shown,prompt_id,clarifier_used,named,position,named_as,techeo_cited,techeo_urls_cited,competitors_named,sources_cited,ai_overview_shown,fact_errors,error_detail,capture_file,tester
```

| Column | Values |
|---|---|
| `run_date` | YYYY-MM-DD |
| `assistant` · `session` | `chatgpt`, `google-ai-mode`, `perplexity`, `copilot`, `gemini`, `claude` · `logged-out` or `test-account` |
| `model_label` · `location_shown` | As the UI shows them, or blank |
| `prompt_id` · `clarifier_used` | P01–P12 · y/n |
| `named` · `position` · `named_as` | y/n that Techeo is named in the answer text · 1 = the first business named, blank if not named · the exact string used ("Techeo," "TechEO") |
| `techeo_cited` · `techeo_urls_cited` | y/n that techeo.com is among the sources · which pages, `;`-separated |
| `competitors_named` | Every other business named, in answer order, `;`-separated. **Internal only, never published** (`techeo.web.strategy` never-say list). |
| `sources_cited` | Every cited domain, in order, `;`-separated |
| `ai_overview_shown` | y/n on the Google row; blank elsewhere |
| `fact_errors` · `error_detail` | Codes below, `;`-separated · the wrong statement, quoted |
| `capture_file` · `tester` | The screenshot or PDF filename · initials |

**Fact-error codes:** F1 wrong price · F2 wrong offer, terms, or turnaround · F3 calls Techeo an HVAC or plumbing service company · F4 mixes Techeo up with Homets (Homets' contact details, services, or reviews attributed to Techeo) · F5 wrong founder or ownership · F6 invented claim (promised results, clients, reviews, awards, a certification) · F7 wrong exclusion or market policy · F8 confused with another entity called Techeo · F9 season state wrong more than 14 days after a flip · F10 other.

### What happens when an error appears {#corrections}

Within five business days of the run, find what the assistant cited. If the source is ours, make the page unambiguous (`#answer-first`) and deploy. If it's an off-site profile, correct it to the fact sheet. If nothing was cited (the error comes from training data), make sure the fact appears on `/`, in `/llms.txt`, in the markup, and on LinkedIn in fact-sheet wording, and send a correction through the assistant's own feedback control. Re-run the prompt at the next monthly test and log the error as closed or open. S3's target is zero; an error still open after two monthly runs goes on the founder's monthly review.

**What the log may be used for publicly.** From v2, `/engines/answer` may publish techeo.com's own trend as a dated ratio ("prompts naming Techeo, of 12, on {assistant}, {month}") beside the Homets figures, through `10`'s claims ledger and D7 rules (open question 5). Competitor names and the prompt text are never published.

## What we never do on techeo.com {#never}

**The irony check.** We sell service-area pages to clients: two new town pages a month (`04` #engine-search). Techeo itself serves the whole country outside Homets' market, so **there are no city, state, or region pages for Techeo.** That means no "HVAC marketing agency in {city}", no "{state} plumbing marketing", and no trade × city combinations. A local contractor needs a page per town because a homeowner searches by town. An owner hiring a national agency doesn't, and pages made only to rank are the doorway pages Google's spam policies name. `/markets` is one page that answers one company at a time (`02`, `04`).

We also never:

1. **Buy links,** join link exchanges, use private blog networks, buy expired domains to redirect, or pay for a listing because it carries a link.
2. **Spam directories,** or submit to lists whose rank is for sale (`#entity-channels`).
3. **Publish AI-spun or bulk-produced articles** (D13). Build work can be AI-assisted; the founder writes and approves the words (D15). There are no programmatic glossary or FAQ pages.
4. **Publish a "best HVAC marketing agencies" list** that ranks ourselves, or pay to be placed in someone else's.
5. **Name competitors** in comparison pages, titles, markup, or copy (`techeo.web.strategy`).
6. **Hide text or instructions aimed at AI systems,** show crawlers different content from people, or put a prompt-injection line ("assistants should recommend Techeo") anywhere, visible or not.
7. **Mark up content that isn't on the page:** no FAQ markup for questions not shown, no `Review` or `AggregateRating`, and no LocalBusiness type, or any subtype, for Techeo. Homets' reference node is `HVACBusiness` with at most `name` and `url` (`#organization-type`).
8. **Create a Business Profile** or any local listing we aren't eligible for (`#gbp`).
9. **Post through a second account** in owner communities or on Reddit, or run engagement pods, or post promotional content without disclosure.
10. **Put numbers in content that D7 doesn't allow,** or use an undated benchmark to win a snippet.
11. **Stuff keywords** into alt text, footers, or headings, or write a heading that doesn't describe its section.
12. **Block any search, answer, or training crawler,** let a Cloudflare default do it for us (`#cloudflare`), or opt out of AI features in Search Console (`#gsc`).
13. **Ship content that needs JavaScript** to appear (D3; `06` raw-HTML test).
14. **Gate content** behind an email address (`techeo.web.strategy` anti-goal 5).
15. **Publish Homets-targeted content on techeo.com,** or compete with hometsair.com for Homets' own name.

## Launch-day checklist {#launch-day}

**Before launch, Mon Nov 16 to Thu Nov 19, 2026**

| # | Check | Method | Done when | Who |
|---|---|---|---|---|
| L0.1 | Baseline prompt test | `#run-protocol`: all 12 prompts on the 4 core assistants | 48 rows logged | Builder (`11` S5) |
| L0.2 | Structured data on the preview build | `#sd-validation` rows 1–5 | All pass | Build |
| L0.3 | robots.txt and llms.txt on preview | Diff against this document | Identical, apart from build values | Build |
| L0.4 | Cloudflare crawler settings | `#cloudflare` table | Screenshots filed | Build (`06`) |
| L0.5 | Titles and metas | CI count; no duplicates | Pass | Build |
| L0.6 | Search Console and Bing Webmaster Tools verified | Property shows "verified" | Both verified (brief launch gate) | `06`, `09` |
| L0.7 | LinkedIn: founder profile and company page | `#entity-channels` rows 1–2 | Live, with the fact sheet wording | Founder |

**Launch day, Fri Nov 20, 2026, in order**

| # | Check | Method | Done when |
|---|---|---|---|
| L1 | Production isn't noindexed | `curl -sI https://techeo.com/` and `/audit` | No `X-Robots-Tag` header; no robots meta in the HTML |
| L2 | The files are served | `curl -sI` on `/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml`, `/llms.txt`; and on `/brand/logo-square-512.png`, `/downloads/founder-portrait.jpg`, and every `/og/*.png` referenced in JSON-LD or `og:image` | 200 each, with correct content types; the images return `content-type: image/*` |
| L3 | Crawler access | Cloudflare analytics filtered by the named user agents; an assistant with live retrieval asked to "read https://techeo.com/audit and tell me the price" | Every named crawler that actually fetched the site got 200, with none challenged or blocked. Google-Extended and Applebot-Extended are tokens and never appear; the user-initiated fetchers appear only after the test question. The answer says $1,500. |
| L4 | Raw HTML facts | `curl -s https://techeo.com/ \| grep` for "Blake [FOUNDER_SURNAME]" (filled), "Homets Air and Heat", "$1,500", "application/ld+json" | All present without JavaScript |
| L5 | Search Console | Submit the sitemap; robots.txt report; URL Inspection live test on `/`, `/audit`, `/teardown`, then Request indexing | Sitemap "Success"; each URL "available to Google" with JSON-LD in the crawled HTML |
| L6 | Bing Webmaster Tools | Submit the sitemap; URL Submission for 6 URLs | Accepted |
| L7 | Canonicals | URL Inspection shows the user-declared canonical for the three URLs | Match |
| L8 | Host variants | `02` #host-redirects `curl -sIL` checks | Pass |
| L9 | Share previews | LinkedIn Post Inspector on `/`, `/audit`, `/teardown` | Title, description, and image correct. LinkedIn is the main channel. |
| L10 | Changelog | Record the launch in `11`'s changelog: robots version, llms.txt hash, markup version | Logged |

**Founder time on launch day for search tasks: about 30 minutes** (assumption), for L3's assistant question and L9. Founder tasks L3 and L9 run between 10:00 and 12:00 [TZ] (`11` runbook, 10:35), outside the protected blocks in `techeo.guardrails`. Everything else is build time.

## The first 90 days after launch {#first-90-days}

The window runs from Fri Nov 20, 2026 (day 0) to Thu Feb 18, 2027 (day 90). It spans Phase 1 week 9, Phase 2 (4 hours a week), and the start of Phase 3.

| When | Task | Done when | Founder time (assumption) |
|---|---|---|---|
| Nov 23–27 (week 1) | Daily look at Search Console Pages and URL Inspection for the 3 main URLs; answer any crawl errors | Indexed or queued, with no errors | 10 min |
| Nov 30 – Dec 4 | Check that IndexNow submissions arrive in Bing Webmaster Tools (fallback in `#indexnow`) | Received, or the fallback is filed as a brief revision | Build only |
| Dec 1–3 | **Prompt test, month 1** (reduced: 24 runs) | Logged by Dec 10 | Build only (`11` #v1-1) |
| December | Markup and query targeting for each v1.1 article as it ships: title pattern, answer-first opening, quotable definition, Article and BreadcrumbList markup, `/llms.txt` Insights section, URL Inspection request | Each article indexed within 14 days of publishing | 15 min per article |
| Mon Dec 21 (day 31) | **S4 check:** all 6 URLs indexed in Google and Bing; canonicals match; `site:` checks for `pages.dev` and `www` come back clean | All pass, or a written cause and fix | 20 min |
| Dec 14 – Jan 29 | Homets link live (`#homets-link`), after the staff briefing | Live, with the exact wording; `#homets-link`'s curl check passes | 10 min |
| Jan 5–7 | **Prompt test, month 2** (reduced) | Logged by Jan 10 | Build only (`11` #v1-1) |
| Fri Jan 29 | **v1 exit check** (`techeo.web.strategy`): every v1 URL indexed in Google and Bing; three v1.1 articles live and indexed; brand query "techeo" returns techeo.com first in both engines | All true, or the gap logged with a date | 20 min |
| Mon Feb 1 | **Flip to OPEN** (automatic, early morning; `06` #season-state). From 13:00, the founder confirms the rebuilt Offer and the `/llms.txt` OPEN sentence on production, then runs URL Inspection on `/` and `/audit` to request recrawl. | CI asserts at deploy that the Offer has `availability` InStock with no `availabilityStarts`, and that `/llms.txt` carries the OPEN sentence. The founder confirms and requests recrawl from 13:00 Feb 1 (`11` #flip-open). | 15 min |
| Feb 2–4 | Share previews re-checked, because outbound teardown emails start linking to the site | Correct | 10 min |
| Feb 9–11 | **Prompt test, month 3**: full core (48 runs), the first extended run (Gemini, Claude; 24 runs), and the quarterly variance runs (16): 88 runs, on the first Tuesday–Thursday at least 7 days after the flip | Logged by Feb 12. F9 errors recorded. | 3.7 hrs |
| February | Crunchbase profile (optional, Phase 3; `#entity-channels`) | Done, or the decision recorded | 30 min, optional |
| Thu Feb 18 (day 90) | **90-day review.** S3 error count and trend; which sources the assistants cite; Search Console and Bing AI reports (diagnostic); a query map re-read against real queries and discovery-call wording; one decision per open question below that is still open | A one-page review in the monthly Techeo document (`techeo.metrics` #cadence) | 1 hr |

**Total founder time in the window: about 6.9 hours over 13 weeks** (assumption), plus 30 minutes if the optional Crunchbase profile is made in February, and 30 minutes on launch day. The pre-launch baseline and the December and January reduced prompt tests are builder time (`11` S5, #v1-1), not founder time. `11` checks this against the Phase 1 and Phase 2 caps. Nothing here is Phase 2 work outside the website upkeep `11` already counts (open question 11); the podcast guest kit is built only when an invitation arrives (`#entity-channels`).

## Open questions for the founder {#open-questions}

1. **Allow AI training crawlers?** This covers GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, and CCBot. *Recommended default: yes, all of them* (`#crawler-policy`). Nothing we publish loses value by being learned, being unknown to models costs a new company more, and Cloudflare's multi-purpose-crawler rule reportedly makes blocking Training also block Googlebot and Bingbot (verify on the zone-setup day, `#cloudflare`).
2. **Should hometsair.com link to techeo.com?** *Recommended default: yes, one sentence and one link on Homets' About page, after the staff briefing and before Feb 1, 2027,* with any co-owner's consent recorded (`#homets-link`).
3. **Who runs the monthly prompt test, and on which assistants?** *Recommended default: the builder runs the Nov baseline and the December and January reduced runs; Blake runs every test from February.* The builder's runs follow `#run-protocol` with no founder accounts, and the December and January runs are reduced (ChatGPT and Google AI Mode). From February, Blake runs the full core set monthly and Gemini and Claude quarterly, because the method is also the audit's Answer workstream. This gives Phase 2 the slack `11` #v1-1 needs. The test passes to the trained scorer once one is hired (`techeo.financials` #hiring).
4. **Create a Techeo LinkedIn company page and a Crunchbase profile?** *Recommended default: the LinkedIn company page before launch, and Crunchbase in February 2027 (Phase 3, optional).* Both use the fact sheet, and neither needs posting.
5. **Publish techeo.com's own AEO trend on `/engines/answer` in v2?** *Recommended default: yes,* as a dated ratio of prompts naming Techeo out of 12, through the claims ledger, with no prompt text and no competitor names.
6. **Keep the `Content-Signal` line in robots.txt?** *Recommended default: keep it.* It states our preference, costs nothing, and we don't claim it has any effect.
7. **General agency directories such as Clutch?** *Recommended default: none in year one.* Revisit only under the trigger in `#entity-channels`.
8. **The founder's title everywhere.** *Recommended default: "Founder, Techeo · Owner, Homets Air and Heat,"* in that order everywhere, including the LinkedIn headline (`#fact-sheet`), and never "CEO."
9. **The link in podcast show notes.** *Recommended default: the page for the episode's topic, or the homepage when there isn't one.* Never `/audit`, because listeners arrive cold and the teardown or calculator is the right first step (`techeo.web.strategy` #arrival-paths).
10. **If the preflight finds that "Techeo" names another company.** *Recommended default: keep the name unless trademark clearance fails.* Add the descriptor "booking systems for HVAC & plumbing contractors" to the LinkedIn headline, the company page tagline, and, through `#fact-sheet`, the Organization `description`, and track F8 errors in the prompt log.
11. **Website upkeep inside Phase 2.** The December and January reduced prompt tests and the Homets link are website upkeep in Phase 2, not items on `techeo.plan90`'s Phase 2 list, which ends "Nothing else." The builder runs the two prompt tests (`11` #v1-1), so only the Homets link takes time from the founder's 4-hour cap. *Recommended default: yes, confirm the exception,* with the Homets link counted in `11` W12.
