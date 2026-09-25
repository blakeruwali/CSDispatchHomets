---
id: techeo.web.ia
title: Information Architecture — Pages, URLs, Navigation
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, information-architecture, urls, navigation, internal-linking, redirects, indexing, sitemap]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.offers, techeo.audit, techeo.gtm, techeo.plan90]
order: 2
---

# Information Architecture — Pages, URLs, Navigation

**Every URL and URL pattern techeo.com will publish is fixed here before v1 ships, so no later release breaks a link that a prospect, a crawler, or a teardown email already holds. v1 is one page with twelve anchors, and later releases turn those anchors into pages by adding links, never by moving what exists.**

## Scope and the route manifest {#scope}

This document owns the page inventory, URL rules, navigation, internal linking, redirects, indexing, canonical rules, and sitemap membership. Copy belongs to `03` and `04`, components to `05`, build and DNS to `06`, robots.txt, llms.txt, and markup to `07`, CTAs and forms to `08`, analytics to `09`, and legal wording to `10`. Where this document drafts a nav label, banner, or footer line, the owner can change the words, but not the target, the position, or the rule.

**The route manifest.** `techeo-web` holds one data file (`06` picks its location) with one entry per route: `path`, `name`, `release`, `rendered`, `template`, `indexable`, `inSitemap`, `schemaType`, `specDoc`, `navLabel`, and `updated` (the date of the last meaningful content change), plus `inFloor` on v1 entries (`#floor-manifest`). The header, footer, canonical tag, breadcrumbs, sitemap filter, and CI link checks all read from it. The tables under `#inventory` are its contents.

**Static and collection routes.** Each static route is one manifest entry. A collection route (`/insights/<slug>`, `/insights/page/<n>`, `/case-studies/<slug>`, `/glossary/<term>`) is one pattern entry, for example `/insights/:slug`, carrying `template`, `indexable`, `schemaType`, and `specDoc`. Its instances come from the content collection (for `/insights/page/<n>`, from the article count). The collection's entries supply `updated`, and for glossary terms they supply `hasPage`, which sets `inSitemap`.

**Function-rendered routes.** Every entry carries `rendered`: `'static'` for a page built into `dist/`, or `'function'` for the three signed-link pages under `/api/` (`#indexing`), which a Pages Function renders on each request. Those three have `template: 'T3'`, `indexable: false`, `inSitemap: false`, no `navLabel`, and no canonical. `/api/files/:token` is a pattern entry whose instances are never listed, because its tokens are minted per recipient (`06` #deliverables). No other `/api/` route gets an entry: none renders a public page, and the staff pages sit behind Cloudflare Access (`06`).

**Done when:** CI expands each pattern entry from its collection, then fails any build that emits an HTML file missing from the manifest, or has a `'static'` manifest path with no HTML file. For each `'function'` entry it requires the matching route file under `functions/api/` instead (`06` names the check).

## Page inventory, all releases {#inventory}

**Key.** "self" = canonical `https://techeo.com` + path. **Book** = OPEN audit CTA, "Book an Engine Audit" → `/audit` (`form_audit_qualify`, then Stripe Checkout). **Reserve** = WAITLIST audit CTA, "Reserve an audit slot" → `/audit` (`form_audit_reserve`). **Teardown** = "Get a free phone teardown" → `/teardown` (`form_teardown_request`; queued in WAITLIST). **Call** = `tel:` [TECHEO_PHONE]. Schema types are names only; `07` owns markup and may refine them.

### v1 — Launch, Fri Nov 20, 2026 {#inventory-v1}

If the Fri Nov 6 checkpoint picks the floor, `#floor` governs what is built and where every link points until cutover, due by Fri Jan 15, 2027.

| URL | Page | Purpose | Primary CTA — OPEN | Primary CTA — WAITLIST | Secondary CTA | Template | Robots | Canonical | Sitemap | Schema type | Spec |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | Home | Who Techeo is for, what it does, proof of the operator claim; route to `/audit` | Book | Reserve (plus `form_audit_reserve` at `#start`) | Teardown; Call | T1 Home | index | self | y | `WebPage` (carries `Organization`) | 03 |
| `/audit` | Engine Audit | Sell the $1,500 audit or reserve a slot | `form_audit_qualify` → Checkout | `form_audit_reserve` | Call; Teardown | T2 Conversion | index | self | y | `Service` | 03 |
| `/teardown` | Booking Rate Teardown | Request the free three-call teardown | `form_teardown_request` | `form_teardown_request` (queued) | Book / Reserve | T2 Conversion | index | self | y | `Service` | 03 |
| `/thanks/audit-reserved` | Reservation confirmed | Confirm; state next-opening date and callback window | Teardown | Teardown | Home | T3 Confirmation | noindex | self | n | none | 03 |
| `/thanks/audit-purchased` | Audit purchased | Confirm payment; start kickoff | Next step per `08` (default: pick a kickoff time) | Same | Call | T3 Confirmation | noindex | self | n | none | 03 |
| `/thanks/teardown` | Teardown requested | Confirm; say when the calls happen | Book | Reserve | Home | T3 Confirmation | noindex | self | n | none | 03 |
| `/privacy` | Privacy policy | What the site collects and why | none | none | — | T4 Legal | index | self | y | `WebPage` | 03; `10` |
| `/terms` | Terms of use | Site terms (not the MSA) | none | none | — | T4 Legal | index | self | y | `WebPage` | 03; `10` |
| `/accessibility` | Accessibility statement | WCAG 2.2 AA commitment; how to report a barrier | none | none | Call | T4 Legal | index | self | y | `WebPage` | 03; `10` |
| 404 (`/404.html`) | Not found | Return the visitor to a real page | Home | Home | `/audit`, `/teardown`, Call | T5 Error | noindex + HTTP 404 | none | n | none | 03 |
| `/api/email/unsubscribe?t=<token>` | Unsubscribe | Stop Techeo's marketing email with one press (`10` #can-spam) | Button "Stop marketing email" (posts to the same URL) | Same | Home | T3, Function-rendered | `noindex, nofollow` (header + meta) | none | n | none | 03 #email-links; `06` #optout |
| `/api/consent/phone-reserve-confirm?t=<token>` | Call confirmation | Record written consent to call a phone reservation at the opening (`10` #tcpa-analysis item 3) | Button "Yes, call me when audits open." (posts to the same URL) | Same | Home | T3, Function-rendered | `noindex, nofollow` (header + meta) | none | n | none | 03 #email-links; `06` #optout |
| `/api/files/<token>` | Teardown walkthrough | Deliver the walkthrough video, its captions, and the scored sheet until the link expires | none | none | — | T3, Function-rendered | `noindex, nofollow, noarchive` (header + meta) | none | n | none | `06` #deliverables |
| `/robots.txt` | — | Crawler rules | — | — | — | file | n/a | n/a | n | — | 07 |
| `/sitemap-index.xml` (and `/sitemap-0.xml`) | — | URL list | — | — | — | file | n/a | n/a | n/a | — | 02 (contents); 06 (generation) |
| `/llms.txt` | — | Guide for AI crawlers | — | — | — | file | n/a | n/a | n | — | 07 |

The three `/api/` rows are the signed-link pages (`#indexing`): reached only from Techeo's email, never from the site. They are not in the brief's `#names` list, which names site pages, so the brief revision `03` #email-links asks for should add them. They ship with v1 either way: every email footer links to the unsubscribe page (`10` #can-spam), the phone-reservation E01 links to the call confirmation (`10` #tcpa-analysis item 3), and E19 needs the walkthrough page for the first teardown.

### v1.1 — Quiet-period content, Dec 2026 – Jan 2027 {#inventory-v1-1}

| URL | Page | Purpose | Primary — OPEN | Primary — WAITLIST | Secondary | Template | Robots | Canonical | Sitemap | Schema type | Spec |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/insights` | Insights | Every article, newest first, publish date shown | Book | Reserve | Teardown | T6 Index | index | self | y | `CollectionPage` | 04 |
| `/insights/<slug>` | Article | One owner question answered with dated Homets figures | Teardown | Teardown | Book / Reserve | T7 Article | index | self | y | `Article` | 04; `12` |
| `/insights/page/<n>` *(proposed)* | Insights, page n | Pagination; exists only past 20 articles (n ≥ 2) | Book | Reserve | Teardown | T6 Index | index | self | n | `CollectionPage` | 04 |

### v2 — Proof, Tue Sep 7, 2027 {#inventory-v2}

| URL | Page | Purpose | Primary — OPEN | Primary — WAITLIST | Secondary | Template | Robots | Canonical | Sitemap | Schema type | Spec |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/engines` | The four engines | MEO; routes to each engine, Booking first | Book | Reserve | Teardown | T6 Index | index | self | y | `CollectionPage` | 04 |
| `/engines/booking` | The Booking Engine | Answer rate, speed to lead, booking rate, membership attach | Book | Reserve | Teardown | T9 Feature | index | self | y | `Service` | 04 |
| `/engines/search` | Search (SEO) | Local pack, GBP, service-area pages, crawl | Book | Reserve | Teardown | T9 Feature | index | self | y | `Service` | 04 |
| `/engines/answer` | Answer (AEO) | Citation inside AI assistants and AI search | Book | Reserve | Teardown | T9 Feature | index | self | y | `Service` | 04 |
| `/engines/ads` | The Ads Engine | LSA, Google Ads, marketplace spend, pacing | Book | Reserve | Teardown | T9 Feature | index | self | y | `Service` | 04 |
| `/pricing` | Pricing | Every published rung, price, and term (D6) | Book | Reserve | `/markets`; `/calculator` | T9 Feature | index | self | y | `WebPage` (+ `Offer`s, 07) | 04 |
| `/case-studies` | Case studies | List of case studies | Book | Reserve | Teardown | T6 Index | index | self | y | `CollectionPage` | 04; `12` |
| `/case-studies/<slug>` | Case study | One client's dated ratios and deltas, approved in writing (D7) | Book | Reserve | Teardown | T8 Case study | index | self | y | `Article` | 04; `12` |
| `/calculator` | Calculator | Full version of `#calculator` | `form_calculator_email` | `form_calculator_email` | Book / Reserve | T10 Tool | index | self | y | `WebApplication` | 04; `08` |
| `/about` | About | Founder, Homets, separation, conflict policy | Book | Reserve | Call | T9 Feature | index | self | y | `AboutPage` | 04 |
| `/markets` | Markets | Is my market and trade slot open? One page, never one per market (D13) | `form_market_check` | `form_market_check` | Book / Reserve | T2 Conversion | index | self | y | `WebPage` | 04 |
| `/partners` | Referral partners | ST consultants, bookkeepers, recruiters, financing reps refer a teardown | `form_partner_referral` | `form_partner_referral` | Teardown | T2 Conversion | index | self | y | `WebPage` | 04 |
| `/thanks/market-check` *(proposed)* | Market check received | Confirmation for a no-JS form | Book | Reserve | Home | T3 Confirmation | noindex | self | n | none | 04 |
| `/thanks/partner-referral` *(proposed)* | Referral received | Confirmation for a no-JS form | Home | Home | — | T3 Confirmation | noindex | self | n | none | 04 |

`/insights/page/<n>` and the two proposed confirmation URLs are not in the brief and need a brief revision before they ship. `form_calculator_email` lives inside the calculator island and confirms inline, so it needs no confirmation URL.

### v3 — Engine, Q4 2027 onward (each page on its own `04` trigger) {#inventory-v3}

| URL | Page | Purpose | Primary — OPEN | Primary — WAITLIST | Secondary | Template | Robots | Canonical | Sitemap | Schema type | Spec |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/glossary` | Glossary | A–Z trade and marketing terms | Teardown | Teardown | Book / Reserve | T6 Index | index | self | y | `DefinedTermSet` | 04; `12` |
| `/glossary/<term>` | Glossary term | One definition, one worked example | Teardown | Teardown | Book / Reserve | T11 Term | index | self | y | `DefinedTerm` | 04; `12` |
| `/for/hvac` | For HVAC contractors | The system, written for residential HVAC | Book | Reserve | Teardown | T9 Feature | index | self | y | `Service` | 04 |
| `/for/plumbing` | For plumbing contractors | The system, written for residential plumbing | Book | Reserve | Teardown | T9 Feature | index | self | y | `Service` | 04 |
| `/resources` | Resources | Downloadable checklists and templates | Book | Reserve | Teardown | T6 Index | index | self | y | `CollectionPage` | 04 |

Article and glossary readers are researching, not buying, so the teardown leads there (`04` #season-cta pattern B). `08` may reorder any CTA pair above.

### Templates and the chrome each one carries {#templates}

| Template | Used by | Header | Season banner (WAITLIST) | Breadcrumb | Footer |
|---|---|---|---|---|---|
| T1 Home | `/` | Full | Yes | No | Full |
| T2 Conversion | `/audit`, `/teardown`, `/markets`, `/partners` | Full. The CTA is hidden on `/audit` | Yes | No | Full |
| T3 Confirmation | `/thanks/*`; the signed-link pages under `/api/`, rendered by a Function in the same chrome (`#indexing`) | No CTA | No | No | Full |
| T4 Legal | `/privacy`, `/terms`, `/accessibility` | Full | Yes | No | Full |
| T5 Error | 404 | Full | Yes | No | Full |
| T6 Index | `/insights`, `/insights/page/<n>`, `/engines`, `/case-studies`, `/glossary`, `/resources` | Full | Yes | Only on `/insights/page/<n>` | Full |
| T7 Article | `/insights/<slug>` | Full | Yes | Yes | Full |
| T8 Case study | `/case-studies/<slug>` | Full | Yes | Yes | Full |
| T9 Feature | `/engines/*`, `/pricing`, `/about`, `/for/*` | Full | Yes | On `/engines/*` and `/for/*` | Full |
| T10 Tool | `/calculator` | Full | Yes | No | Full |
| T11 Term | `/glossary/<term>` | Full | Yes | Yes | Full |

**The header CTA never links to the page it sits on** (hidden on `/audit`), and it is hidden on `/thanks/*` because the visitor has just converted.

## URL conventions {#url-rules}

1. **Host:** `https://techeo.com`, the apex, never `www` (open question 1).
2. **Case:** lowercase only, including in print, email, and the receptionist script. People still type what they hear, so a request with a capital letter in its path gets a 301 to the lowercase path at the zone (`#host-redirects`).
3. **Characters and separators:** `a–z`, `0–9`, and single hyphens. No underscores, spaces, or percent-encoding. HTML pages carry no file extension. Machine files (`/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml`, `/llms.txt`) and static assets keep theirs (`#indexing` sets the asset rules).
4. **Depth:** at most two path segments. Pagination adds a third: `/insights/page/2`.
5. **Nothing that expires goes in a URL:** no dates, years, IDs, prices, or season words. A flip between OPEN and WAITLIST never changes a URL.
6. **Trailing slash: never,** except the root `/`.
7. **Internal links are root-relative** (`/audit`). Canonical, `og:url`, sitemap, and llms.txt entries are absolute.
8. **Phone links** use E.164 `tel:+1…` for [TECHEO_PHONE], with the formatted number as the visible text.
9. **`/api/` is exempt from rules 2–5.** It holds `06`'s Function routes, and the only public ones that render a page are the signed-link pages (`#indexing`). Their tokens are base64url (`06` #optout): mixed-case, dotted, and expiring. `/api/files/<token>` carries its token in the path, so lowercasing or rewriting that path would break the signature.

### Trailing-slash policy and how it is enforced {#trailing-slash}

**Why no slash:** every URL in the brief is written without one, `techeo.com/audit` is shorter to print and to say aloud, and one form means one canonical.

**Astro** (`06` owns the file; these three keys are set by this document):

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://techeo.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
```

`format: 'file'` builds `dist/audit.html`, `dist/insights.html`, `dist/insights/<slug>.html`, `dist/thanks/audit-reserved.html`, and `dist/404.html`. Astro's `trailingSlash` governs the dev server and on-demand routes; for prerendered pages the host decides. So the file layout is what enforces the policy in production. **Verify on the installed Astro version** that `Astro.url.pathname` carries `.html` at build time under `format: 'file'`. Either way, canonicals come from the manifest, never from `Astro.url`.

**Cloudflare Pages** serves `name.html` at `/name` and redirects the variants to it. Expected behavior, to be confirmed on the first preview deploy:

| Request | Expected response |
|---|---|
| `/audit` | 200, serves `audit.html` |
| `/audit/` | 308 → `/audit` |
| `/audit.html` | 308 → `/audit` |
| `/insights` (a file `insights.html` and a folder `insights/` both exist) | 200, serves `insights.html` |
| `/insights/` | 308 → `/insights` |
| `/index.html` | 308 → `/` |
| `/does-not-exist` | 404, with the body of `/404.html` |

Community reports disagree on some `file`-layout edge cases on Pages, so **the acceptance test is the authority, not this table.** If Pages fails it, `06` moves hosting to Workers static assets with `html_handling = "drop-trailing-slash"` and `not_found_handling = "404-page"`. No URL changes, and the policy is never flipped to trailing slashes to suit a host. On Workers static assets, Cloudflare's docs show every `html_handling` redirect as a 307 (temporary), not a 308. If `06` makes this move, it also adds permanent 301 rules for the `.html` and trailing-slash variants (a Single Redirect or `_redirects`), or accepts 307 and updates this table.

**Done when:** every row above behaves as stated on a preview deployment. The test uses `curl -s -D - -o body.html`, a GET that captures headers and body, and sends an Access service token (`-H 'CF-Access-Client-Id: …' -H 'CF-Access-Client-Secret: …'`; see `#indexing`). The 404 row also checks that `body.html` is the 404 page. CI rejects any internal `href` that ends in `/` (other than `/`) or contains `.html` or `?`.

### Slug rules {#slugs}

All slugs match `^[a-z0-9]+(-[a-z0-9]+)*$`, run to at most 60 characters, never contain "techeo", and **never change after publication** without a 301 row (`#renames`).

| Collection | Rule | Examples |
|---|---|---|
| Insights `/insights/<slug>` | 3–6 words naming the question, not the headline. No year, no list count ("7-ways"), no leading or trailing stop words. | `/insights/marketplace-leads-never-touched` · `/insights/booking-rate-before-lead-volume` (illustrative; `12` sets topics) |
| Case studies `/case-studies/<slug>` | The client's company name, legal suffix dropped. No metro, trade, or result, because results change at each review and the page updates in place. On a collision, append the trade (`-plumbing`). | `/case-studies/homets-air-and-heat` |
| Glossary `/glossary/<term>` | The full term, singular, acronym spelled out. The acronym goes in the H1 and title. | `/glossary/speed-to-lead` · `/glossary/answer-engine-optimization` (not `/aeo`) · `/glossary/local-services-ads` (not `/lsa`) |
| Engines, trades, thanks | Fixed by the brief. Nothing is added under them without a brief revision. | `/engines/booking` · `/for/hvac` |

**Reserved under `/insights/`:** `page`, `tag`, `category`, `author`, `feed`, `rss`, `index`, `all`, `search`, `drafts`. No release has tag, category, author, or date-archive pages.

**Glossary depth rule.** A term gets its own URL only when its entry meets `12`'s depth standard (recommended default: one worked example and at least 250 words). Until then it is an entry on `/glossary` with the id `#<term-slug>`. Promoting it later means adding a link, not a redirect.

### Query strings {#query-strings}

- **A canonical never contains a query string.** Canonicals are built from the manifest, so this holds by construction.
- **Expected inbound parameters:** the `utm_*` keys GA4 reads (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `utm_id`, `utm_source_platform`, `utm_creative_format`, `utm_marketing_tactic`; `09` decides which ones Techeo uses and owns their values); the click IDs `gclid`, `gbraid`, `wbraid`, `msclkid`, and `fbclid`; Stripe's `session_id` on `/thanks/audit-purchased`; and `t`, the signed token, on the two email-link pages under `/api/` (`#indexing`). `08` sets `success_url` to `https://techeo.com/thanks/audit-purchased?session_id={CHECKOUT_SESSION_ID}` and `cancel_url` to `https://techeo.com/audit`. A static page serves the same file whatever the query.
- **Internal links never carry a query string.** In GA4, a UTM on an internal link overwrites the visitor's real source. The one exception is an email-link page's "Try again" link to its own URL (`03` #email-links), which keeps its `t`. Those pages load no GA4.
- **No page changes its content based on a query string.** There is no `?page=`, `?tab=`, `?state=`, or filter parameter in any release. The one exception is the two email-link pages: a Function renders each from its `t` token, and `t` is the only parameter they read (`#indexing`). `/api/files/<token>` carries its token in the path, not the query.
- **Every redirect keeps the query string,** so UTMs survive `www` → apex. The first deploy verifies this for the zone rules (`#host-redirects`) and for `_redirects` (`#redirects-file`).

### Fragments and anchor ids {#fragments}

- **The homepage section ids are a contract:** `top`, `proof`, `leak`, `calculator`, `engines`, `how-it-works`, `audit`, `operator`, `promises`, `fit`, `faq`, `start`. They are never renamed or reused, and they survive v2 even when a section shrinks to a summary.
- **FAQ entries** get the id `faq-<slug>` (for example `#faq-homets-conflict`, `#faq-account-ownership`). `03` assigns them, and each is frozen once published.
- **Every H2** on T2, T4, T7, T8, and T9 pages gets an id from its heading, frozen at first publication, so emails and articles can deep-link.
- **Reserved site-wide ids:** `main`, `site-header`, `site-footer`, `season-banner`, `breadcrumb`.
- **Browsers never send fragments to the server,** so a fragment cannot be redirected or logged. That is why `#anchor-to-page` is a list of link updates, not redirects.

## Navigation {#navigation}

### Page chrome, in DOM order {#chrome}

1. **Skip link:** "Skip to content" → `#main`. The first focusable element on every page, hidden until focused, then shown top left above everything.
2. **Season banner:** WAITLIST only; never on T3 pages.
3. **`<header id="site-header">`** containing `<nav aria-label="Main">`.
4. **v1 below 1024px only:** the section-link row (`#header-v1`).
5. **`<main id="main" tabindex="-1">`.**
6. **`<footer id="site-footer">`** containing `<nav aria-label="Footer">`, the disclosure block, and the legal line.

Only the header bar is sticky. `html { scroll-padding-top }` equals the bar's height plus 8px, so neither an anchor jump nor keyboard focus lands under it (WCAG 2.2 SC 2.4.11, Focus Not Obscured (Minimum)). The **compact breakpoint** (400px by default; `05` sets it at 440px after measuring the real fonts) and the 1024px breakpoint are defaults. `05` may move them if every test in this section still passes at 320px and 1280px.

### Season banner {#season-banner}

`<section id="season-banner" aria-label="Season notice">`, rendered at build time from `SEASON_STATE` and `WAITLIST_REASON` (`06` owns the flip).

| Reason | Copy (`03` #chrome owns the words) | Link |
|---|---|---|
| `season` | `03` #chrome copy. One-sentence draft: "New audits open {next opening date}; reserving is free." ({next opening date} is February 1 at launch) | "Reserve a slot" → `/audit` |
| `capacity` | `03` #chrome copy. One-sentence draft: "We're not taking new audits until at least {date}." | "Reserve the next slot" → `/audit` |

Rules: one sentence and one link, at most two lines at 320px. On `/audit` the banner link targets `/audit#book` (`08`), not `/audit`, so it never links to the page it sits on. Not dismissible, not sticky, and not a live region (the banner is static text rendered at build time; `role="alert"` is for content that changes after load, and screen readers are inconsistent about announcing alerts present at load). Dates are written as words ("February 1").

### Header — v1 {#header-v1}

**Desktop (≥1024px), one sticky row, ≤64px tall:**

| Order | Item | Target | Why it is there |
|---|---|---|---|
| 1 | Wordmark "techeo" | `/` | The universal home link. D10 allows a wordmark only. |
| 2 | Engines | `/#engines` | The four engines are what Techeo sells. MEO is the vocabulary the positioning rests on (`techeo.positioning` `#framework`). |
| 3 | Pricing | `/#how-it-works` | An owner's first question is price. D6 publishes it, and hiding it behind a call is what distrusted agencies do. **Condition:** `#how-it-works` must show every v1 price D6 allows (Teardown free; Engine Audit $1,500, credited in full; retainers from $3,500/month). If it does not, the label becomes "How it works". |
| 4 | About | `/#operator` | "Run by an operator" is claim 1 of the pitch, and the Homets disclosure lives here (D8). "About" is the word visitors look for, and the label carries over to `/about` in v2. |
| 5 | FAQ | `/#faq` | Skeptical owners check objections here before calling: the Homets conflict, account ownership, ServiceTitan, the waitlist. |
| 6 | [TECHEO_PHONE] | `tel:` | Prospects will call to see who answers (D11). Answering is the product demo. |
| 7 | Header CTA | `/audit` | The only conversion that pays or reserves. |

**Left out on purpose:** `#leak`, `#calculator`, `#promises`, and `#fit` work as a scrolled sequence. The CTA covers `#audit`. `#start` ends the page. `#proof` may be omitted (D7), so nothing links to it. `/teardown`, the secondary offer, appears in the hero, `#leak`, `#how-it-works`, `#fit`, and the footer, which keeps the header to one CTA.

**Below 1024px:**

- **Row 1**, the sticky bar, ≤56px tall: wordmark · "Call" (icon plus text) · header CTA.
- **Row 2**, outside `<header>`, scrolls away: Engines · Pricing · About · FAQ, always visible. There is no menu button.
- **Below the compact breakpoint:** "Call" shows only the icon (accessible name "Call Techeo, [TECHEO_PHONE]"), and the CTA uses its compact label.
- Row 2 is a second `<nav aria-label="Main">` rendered only below 1024px. The desktop links are `display: none` there, so assistive technology finds one main nav.

**Why v1 has no menu button:** four short links fit on one line at 320px, and a hidden menu costs a tap. A menu inside a sticky bar also stays open over the content after an in-page jump unless JavaScript closes it, and D3 provides none.

**Header CTA by season state:**

| State | Label | Compact label (below the compact breakpoint) | Target |
|---|---|---|---|
| OPEN | Book an Engine Audit | Book audit | `/audit` |
| WAITLIST (either reason) | Reserve an audit slot | Reserve slot | `/audit` |

The CTA always targets `/audit`, never `/#start`, even in WAITLIST when `#start` holds the same form. `/audit` explains what is being reserved, and one target gives `09` one event to count. The floor is the one exception: `/audit` doesn't exist yet, so the CTA targets `/#start` (`#floor-links`).

**Done when:** at 320px, rows 1 and 2 each fit on one line with no horizontal scroll; every header link resolves on every page; and tabbing from the skip link reaches the CTA in the order above.

### Header — v1.1 {#header-v1-1}

No change. "Insights" goes in the footer only: three articles do not earn a slot beside Pricing, and homepage visitors come to evaluate, not to read. Article pages carry a breadcrumb back to `/insights`.

### Header — v2 {#header-v2}

**Desktop:** wordmark · Engines · Case studies · Pricing · About · [TECHEO_PHONE] · header CTA.

| Item | Target | Why it is there |
|---|---|---|
| Engines | `/engines` | Same job as v1, now a hub over four engine pages |
| Case studies | `/case-studies` | v2 exists because three case studies exist (D1). Proof answers more objections than an FAQ, so it takes FAQ's slot. |
| Pricing | `/pricing` | D6 prices in full, including the Demand Engine |
| About | `/about` | Same label as v1, now a full page |

FAQ moves to the footer; `#faq` stays on the homepage.

**Below 1024px:** the sticky bar holds wordmark · Call · CTA · Menu at every width. Below the compact breakpoint the CTA uses its compact label ("Book audit" / "Reserve slot"), the Call link is icon-only, and the Menu summary is the 44×44 icon with the accessible name "Menu". The visible "Menu" label returns from the compact breakpoint up. **The CTA never leaves the bar.** `08` #cta-hierarchy puts the audit CTA in the header on every page except `/audit` and `/thanks/*`, and D10's reader is on a phone.

`05` measures the compact v1 bar at about 267px of the 288px available at 320px, so the Menu summary needs about 30px found elsewhere, for example a smaller wordmark or tighter gaps. If `05` cannot find it, the Call icon leaves the bar below the compact breakpoint before the CTA would, and [TECHEO_PHONE] stays in the panel's last group.

The menu is a native `<details>` disclosure. Its panel sits in flow under the bar (`max-height: calc(100dvh - <bar height>)`) and scrolls internally, in this order: Engines, Case studies, Pricing, About; Calculator, Check your market; [TECHEO_PHONE] with `08`'s answering hours. **The panel never contains a same-page fragment link.**

| Menu-only item | Target | Why it is there |
|---|---|---|
| Calculator | `/calculator` | Owners who arrive with a problem go to the calculator next (`01` arrival table), and it is the only tool that turns their own numbers into a monthly figure. On desktop it is one click away in the footer's Start column. On a phone the footer is a long scroll away, and the panel is not width-bound the way the desktop row is (`#header-v3` caps that row at five items). |
| Check your market | `/markets` | One client per market per trade (D8) makes "is my slot open?" the question a qualified owner has to settle before booking, and `/markets` answers it with `form_market_check`. It is menu-only for the same reason as Calculator. |

Insights is not in the v2 menu. It joins the menu and the desktop header together at the `#header-v3` trigger, and until then it sits in the footer.

Every item except the phone number links to another page, so a tap loads a new page. Two cases leave the menu open without script: the `tel:` item, and a Back navigation restored from the back/forward cache. Both are acceptable because the panel sits in flow and scrolls; `05` confirms the open state never covers the CTA.

**Done when:** at 320px, on every page that carries the CTA (`#templates`), the bar holds all four items on one line with no horizontal scroll, in both season states. It holds three only if the Call fallback above applies, and the CTA is always one of them. `05` updates `#c-mobile-menu` to match: the CTA stays in the bar, and the summary is icon-only below the compact breakpoint.

### Header — v3 {#header-v3}

Insights joins between Pricing and About (desktop and the menu's first group) once **at least 12 articles are published and `12`'s cadence is live.** Nothing else joins. Glossary, resources, and trade pages are reached from the footer and in-context links. Five items is the ceiling. A sixth needs `09` data showing its footer link carries real traffic.

### Footer {#footer}

On every page, including 404 and `/thanks/*`.

| Release | Column | Links (label → target) |
|---|---|---|
| v1 | Techeo | Wordmark; the line "Marketing and booking systems for residential HVAC and plumbing contractors. Run by an operator." (draft, `03`); [TECHEO_PHONE] → `tel:`; answering hours (`08`) |
| v1 | On this site | Engines → `/#engines` · Pricing → `/#how-it-works` · Engine Audit → `/audit` · Free phone teardown → `/teardown` · About → `/#operator` · FAQ → `/#faq` |
| v1 | Legal | Privacy → `/privacy` · Terms → `/terms` · Accessibility → `/accessibility` |
| v1.1 | On this site | Adds Insights → `/insights` |
| v2 | Techeo | Unchanged |
| v2 | On this site | Removed; its links move to Engines, Start, and Company |
| v2 | Engines | The Booking Engine → `/engines/booking` · Search (SEO) → `/engines/search` · Answer (AEO) → `/engines/answer` · The Ads Engine → `/engines/ads` · All four engines → `/engines` |
| v2 | Start | Engine Audit → `/audit` · Free phone teardown → `/teardown` · Pricing → `/pricing` · Calculator → `/calculator` · Check your market → `/markets` |
| v2 | Company | About → `/about` · Case studies → `/case-studies` · Insights → `/insights` · FAQ → `/#faq` · Referral partners → `/partners` |
| v2 | Legal | Unchanged |
| v3 | Who it's for | For HVAC contractors → `/for/hvac` · For plumbing contractors → `/for/plumbing` |
| v3 | Learn | Insights → `/insights` (moves here from Company) · Glossary → `/glossary` · Resources → `/resources` |

**Disclosure block,** full width, every page, every release (D8; `10` owns final wording). Draft:

> **Who owns Techeo.** Techeo LLC is owned by Blake [FOUNDER_SURNAME], who also owns Homets Air and Heat, an HVAC company in [HOMETS_METRO]. We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets, and we work with one client per market per trade. Client data is never used for Homets. [How we keep the two apart](/#operator)

The link points to `/#operator` in v1 and v1.1, and to `/about` from v2.

**Legal line:** "© {build year} Techeo LLC, a [TECHEO_STATE] limited liability company · [TECHEO_POSTAL_ADDRESS]".

**Social links:** only profiles registered to Techeo LLC (D4), listed by `07`; none by default in v1. **No email address in the header or footer** in v1 (open question 2). `/accessibility` and `/privacy` each carry one monitored `mailto:` address, which `10` sets.

## v1 homepage outline {#homepage}

`03` owns the copy. This table fixes each section's job and its links.

| # | Anchor | Section | Job | Outbound links in v1 | Added later |
|---|---|---|---|---|---|
| 1 | `#top` | Hero | One phone screen: who it is for, what it does (books more of the calls owners already pay for), who runs it, one next step. Holds the H1. | CTA → `/audit` (label by state); "Get a free phone teardown" → `/teardown`; `tel:` | — |
| 2 | `#proof` | Homets proof strip | Dated ratios and deltas only: `[HOMETS_BOOKING_RATE_FROM]` → `[HOMETS_BOOKING_RATE_TO]`, `[HOMETS_ANSWER_RATE]`, `[HOMETS_UNTOUCHED_FROM]` → `[HOMETS_UNTOUCHED_TO]`, `[HOMETS_SPEED_TO_LEAD_MEDIAN]`, each beside `[HOMETS_WINDOW]`. **Omitted entirely, id included, if the numbers are not real (D7).** | "How we run Homets" → `/#operator` | v2: → `/case-studies/homets-air-and-heat` |
| 3 | `#leak` | Where booked jobs leak | The four leaks the audit measures: unanswered calls, slow first touch, qualified callers who do not book, marketplace leads never touched | "Put a number on yours" → `/#calculator`; "Have us call your office" → `/teardown` | v2: → `/engines/booking` |
| 4 | `#calculator` | Mini calculator | The owner's own call count and booking rate turned into a monthly figure. The heading, formula, and a worked example labeled as an example are server-rendered before the island loads (logic: `08`). | Result CTA → `/audit` below 70%; → `/teardown` at or above 70% or under one job (`08` #cta-hierarchy); `form_calculator_email` (inline) | v2: → `/calculator` |
| 5 | `#engines` | The four engines | MEO as the umbrella; the Booking Engine first, then Search (SEO), Answer (AEO), the Ads Engine; why Booking is the door | "The audit scores all four" → `/#audit` | v2: each → `/engines/<engine>`; → `/engines` |
| 6 | `#how-it-works` | The ladder | Teardown → Audit → Booking Sprint → Demand Engine, with each price D6 allows in v1; demand is never scaled into a broken phone | Teardown rung → `/teardown`; Audit rung → `/audit` | v2: → `/pricing` |
| 7 | `#audit` | The Engine Audit | $1,500; 7 business days; five workstreams; the Gap Statement; full credit within 30 days | Section CTA → `/audit` | v2: at most one case-study link |
| 8 | `#operator` | Built by an operator | First-person founder story signed by Blake, real photograph; names Homets and discloses the shared owner, [HOMETS_METRO], the [EXCLUSION_RADIUS_MILES]-mile exclusion, one client per market per trade | Homets website (open question 3) | v2: → `/about`, `/markets` |
| 9 | `#promises` | What we put in writing | You own every account; one client per market per trade; mutual non-solicit; client data never used for Homets; results are targets, never promises; 90 days, then 30 days' notice | None (the MSA is not published) | — |
| 10 | `#fit` | Who it is for, and not for | The ICP and decline list from `techeo.positioning` | "Not sure? Start with a free teardown" → `/teardown` | v2: → `/markets`; v3: → `/for/hvac`, `/for/plumbing` |
| 11 | `#faq` | FAQ | Objections, one `faq-<slug>` id each | `/audit`, `/teardown`, `/privacy`; from v1.1, up to three article links in total | v2: engine pages, `/pricing`, `/markets` |
| 12 | `#start` | Final CTA | OPEN: book the audit. WAITLIST: `form_audit_reserve` inline. Both: teardown and phone. | OPEN → `/audit`; WAITLIST: form POST, then 303 → `/thanks/audit-reserved`; `/teardown`; `tel:` | — |

Each section is a `<section id="…" aria-labelledby="…">` with its own H2; the hero holds the only H1. **Done when:** `/` has each id exactly once (`proof` may be absent), no id repeats anywhere on the site, and each present anchor lands with its heading visible below the sticky bar.

## Internal linking {#linking}

### Rules {#link-rules}

1. Hrefs are root-relative and lowercase, with no trailing slash, `.html`, or query string. A signed-link page's links to its own URL and its own files keep their token (`#query-strings`).
2. Shared components write homepage anchors as `/#anchor`, even on the homepage, where the browser scrolls without reloading.
3. **Nothing links to `/#proof`,** because D7 lets it vanish. Link the case study once one exists.
4. **Nothing links to `/thanks/*`.** Only form handlers go there: a 303 after a POST, or Stripe's `success_url`. **Nothing on the site links into `/api/` either.** The signed-link pages are reached only from Techeo's email and the `List-Unsubscribe` header (`#indexing`).
5. **Conversion pages (T2) keep exits few.** They link only to other conversion pages, `/#operator` and `/#promises` (`/about` from v2), `/#faq-*` entries, the legal pages, and the phone. From v2, `/audit` may add one case-study link, as proof at the point of purchase.
6. Every indexable page has at least two inbound links from indexable pages (header and footer count) and sits at most three clicks from `/`.
7. Link a destination once per section, at its first mention.
8. No `rel="nofollow"` on internal links and no `target="_blank"` anywhere.
9. External links go only to the Homets site (if approved), Stripe Checkout (by form), the scheduling tool (`08`), and sources cited in articles (`12`). The only `mailto:` links are on `/accessibility` and `/privacy` (`#footer`).

### Anchor-text conventions {#anchor-text}

Nav labels are nouns. CTAs start with a verb. Contextual links name the destination or claim in 2–6 words. Never "click here," "learn more," "read more," or a bare "here." A fully clickable card takes its heading as its accessible name.

| Destination | Use | Never |
|---|---|---|
| `/audit` | "Engine Audit," "Book an Engine Audit," "Reserve an audit slot" | "free audit" (the audit costs $1,500) |
| `/teardown` | "free phone teardown," "Booking Rate Teardown" | "free audit" (`techeo.gtm` keeps "audit" out of outbound) |
| `/#engines`, `/engines` | "the four engines" | "our services," "solutions" |
| `/engines/booking` | "the Booking Engine" | Any acronym (D6) |
| `/engines/ads` | "the Ads Engine" | "Ads Engine Optimization," "AEO" |
| `/engines/search` | "Search (SEO)," "SEO" | "Sales Engine Optimization" |
| `/engines/answer` | "Answer (AEO)," "AEO" | "GEO" |
| `/#how-it-works`, `/pricing` | "Pricing," "what it costs" | — |
| `/#operator`, `/about` | "About," "who runs Techeo," "built by an operator" | — |
| `tel:` | The number itself | "Call now!" |

### v1 link map {#link-map-v1}

| From | Links to |
|---|---|
| Header (every page) | `/` · `/#engines` · `/#how-it-works` · `/#operator` · `/#faq` · `tel:` · `/audit` (not on `/audit` or any T3 page) |
| Season banner | `/audit` (`/audit#book` on `/audit` itself) |
| Footer (every page) | `/#engines` · `/#how-it-works` · `/audit` · `/teardown` · `/#operator` · `/#faq` · `/privacy` · `/terms` · `/accessibility` · `tel:` |
| `/` | As in `#homepage` |
| `/audit` | `/#operator` · `/#promises` · `/#faq-*` · `/teardown` · `/privacy` · `/terms` · `tel:` · Stripe Checkout (OPEN, through `form_audit_qualify`) |
| `/teardown` | `/audit` · `/#operator` · `/privacy` · `tel:` |
| `/thanks/audit-reserved` | `/teardown` · `/` |
| `/thanks/audit-purchased` | Scheduling link (`08`) · `tel:` · `/` |
| `/thanks/teardown` | `/audit` · `/` |
| `/privacy`, `/terms`, `/accessibility` | Each other · `/` · `tel:` · `mailto:` on `/accessibility` and `/privacy` (the text route `10` requires) |
| 404 | `/` · `/audit` · `/teardown` · `tel:` |
| `/api/email/unsubscribe`, `/api/consent/phone-reserve-confirm` | `/` ("Back to the home page") · their own URL, with `t` (the button's POST; "Try again") · `tel:` in the body copy (`03` #email-links) |
| `/api/files/<token>` | Its three files (`06` #deliverables) · `tel:` on the expired page |

Form consent text links to `/privacy` and `/terms`. `10` owns that wording. In the floor, `#floor-links` replaces every row that names `/audit`, `/teardown`, or a `/thanks/*` page that isn't built.

### v1.1: how insights link in {#link-insights}

Every article carries:

1. **At least one contextual link into the homepage section it argues for:**

   | The article is about | Link to |
   |---|---|
   | Missed calls, speed to lead, marketplace leads | `/#leak` |
   | What a booking-rate gap costs | `/#calculator` |
   | SEO, AEO, or ads compared with booking | `/#engines` |
   | Agency trust, account ownership | `/#promises` |
   | The operator background, Homets figures | `/#operator` |

2. **One end-of-article CTA block, `04` pattern B:** Teardown first, then the audit CTA (Book or Reserve, by state). At most one other `/audit` link in the body.
3. **The byline "Blake [FOUNDER_SURNAME]"** → `/#operator` (`/about` from v2). There is no author page.
4. **At least one link to another article** once two exist, where it is relevant.

**Inbound to insights in v1.1:** the footer, `/insights`, and up to three `#faq` answers where an article is the fuller answer. The homepage section list does not change, and `/audit` and `/teardown` do not link to articles (rule 5).

**Before an article publishes, it is linked from its matching `#faq` answer or from at least one other article. The first article is always linked from a `#faq` answer.** With `/insights`, that gives every article the two inbound links rule 6 requires from the day it goes live.

**Pagination.** The pagination nav on `/insights` and on every `/insights/page/<n>` links to every page number, not only to the next and previous pages. That keeps every article within three clicks of `/` (`/` → `/insights` → `/insights/page/<n>` → article), as rule 6 requires.

### v2 and v3 {#link-later}

- **Engine pages** link to the other three in D6 order ("Other engines" block), to at least one case study that used the engine, to `/pricing`, and to the audit CTA.
- **Case studies** link to each engine used, to `/pricing` (the rung bought), and to the audit CTA.
- **`/pricing`** links to `/audit`, `/teardown`, `/calculator`, `/markets`, and `/#promises`. **`/about`** links to `/case-studies/homets-air-and-heat`, `/markets`, and `/#promises`.
- **`/calculator`** links to `/audit` and `/engines/booking`. **`/markets`** links to `/audit` and `/about`. **`/partners`** links to `/teardown`.
- **v3:** articles link a glossary term at its first mention, once per article. A term that names an engine links to the engine page in its first paragraph. `/for/*` links to all four engines, that trade's case studies, and `/audit`. Each resource links to the article that explains it.

**Done when (every release):** a CI crawl of `dist/` finds zero broken internal links (fragments included), zero hrefs breaking `#url-rules`, zero links to `/thanks/*` outside form handling, zero `href`s into `/api/`, and no indexable page with fewer than two inbound links or deeper than three clicks.

## Redirects {#redirects}

### Principles {#redirect-rules}

- **Permanent means 301** in `_redirects` and zone rules. On Pages, the host's own path normalization uses 308, which is also permanent (verify on the first deploy). The Workers static-assets fallback uses 307, which is not (`#trailing-slash`).
- **Always write the status code:** `_redirects` defaults to **302**.
- **302 only where the target changes in a later release:** `/about` and `/pricing` (real pages in v2) and `/blog` (re-pointed to `/insights` in v1.1). Browsers cache a 301 indefinitely, so a cached `/pricing` 301 would hide the real v2 page from returning visitors.
- **One hop.** Targets are always final canonical URLs. Any lowercase variant reaches the canonical in at most two hops (protocol and host together, then path). A mixed-case path adds one hop (`#host-redirects`).
- **Never redirect a path that is also a built page.** CI compares `_redirects` sources with the manifest.
- **Keep query strings. No catch-all redirects to `/`:** Google treats those as soft 404s.
- **Limits** (verify against current Cloudflare docs): 2,000 static and 100 dynamic rules, 1,000 characters per line, static before dynamic.

### Host and protocol {#host-redirects}

Set at the zone, not in `_redirects`; `06` configures them.

| From | To | Code | Mechanism |
|---|---|---|---|
| `http://techeo.com/*` and `http(s)://www.techeo.com/*` | `https://techeo.com/*`, path and query kept, in one hop | 301 | **One Single Redirect for both.** Expression: `(http.host eq "www.techeo.com") or (http.host eq "techeo.com" and not ssl)`. Dynamic target: `concat("https://techeo.com", http.request.uri.path)`, with "Preserve query string" on. Scoping by host leaves every other subdomain alone, mail included. This rule replaces "Always Use HTTPS", which stays off: Cloudflare does not document where Always Use HTTPS runs relative to Redirect Rules, and if it answers first, `http://www` takes three hops. The `www` DNS record must exist and be proxied or the rule never fires. |
| `https://techeo.com` + any path containing A–Z | The lowercased path, query kept | 301 | A Single Redirect placed after the one above, excluding `/_astro/` (Astro's hashed build files are mixed-case by design) and `/api/` (signed tokens are mixed-case, and `/api/files/<token>` carries one in its path; `#url-rules` 9). Condition: the path contains an uppercase letter; `06` writes it in a form the plan accepts, for example `http.request.uri.path ne lower(http.request.uri.path)` or `http.request.uri.path matches "[A-Z]"`. Target: `concat("https://techeo.com", lower(http.request.uri.path))`, with "Preserve query string" on. |
| `https://techeo-web.pages.dev/*` (production alias; name assumed from D3's repo) | `https://techeo.com/*` | 301 | Bulk Redirect, subpath matching, path and query kept, "Include subdomains" **off** so previews stay reachable |
| Legacy subdomains found in preflight | The same-topic URL on `https://techeo.com` | 301 | Zone rule. If there is no same-topic URL there is no redirect (as in `#preflight-redirects` row 2), and `06` removes the record once nothing live depends on it. Never touch mail-related records `06` lists as live. |

**Done when:**

- `curl -sIL 'http://www.techeo.com/audit/?utm_source=test'` ends at `https://techeo.com/audit?utm_source=test` within two hops, with no 302 in the chain. The same check passes for `http://techeo.com/`, `https://www.techeo.com/`, and `https://techeo-web.pages.dev/teardown`. Confirm the hop count on the first deploy.
- `curl -sI https://techeo.com/Audit` returns a 301 to `/audit`, an `/_astro/` asset loads unchanged, and a `/api/files/<token>` link whose token contains capital letters returns its page, not a 301. Confirm on the first preview that Pages treats paths as case-sensitive, where `/Audit` returns 404, which is why the rule exists.

### `_redirects` at v1 launch {#redirects-file}

```
# techeo.com _redirects. Owned by techeo.web.ia (02). Every line states its code.
# 1. Legacy URLs from the domain preflight (D5). Rows come from the mapping sheet.
#    Sources are lowercase: the zone lowercases paths first (#host-redirects).
#    /legacy-path          /new-path              301

# 2. Parents that are not pages
/thanks                    /                      301

# 3. Guessable paths. 302 where the target changes in a later release
#    (/about and /pricing become pages in v2; /blog moves to /insights in v1.1).
/about                     /#operator             302
/pricing                   /#how-it-works         302
/blog                      /                      302
/faq                       /#faq                  301
/contact                   /#start                301
```

Pages' docs allow fragments and query strings in a destination. They do not say how an incoming query combines with a fragment target, or whether a source also matches with a trailing slash. **Verify on the first preview deploy**, with the Access service token (`#indexing`):

1. `curl -sI '<preview>/contact?utm_source=test'` returns `Location: /?utm_source=test#start`, and `/faq?utm_source=test` returns `Location: /?utm_source=test#faq`, not `/#faq?utm_source=test`. If not, the fragment targets fall back to `/`, and the scroll is lost.
2. A query survives a plain redirect: `/thanks?utm_source=test` returns `Location: /?utm_source=test`. If not, `06` moves these rows to zone Single Redirects with "Preserve query string" on.
3. Every section-2 and section-3 source also redirects with a trailing slash: `/thanks/`, `/about/`, `/pricing/`, `/blog/`, `/faq/`, `/contact/`. If not, add an explicit line for each slash variant.

### Changes by release {#redirects-by-release}

| Release | Add | Remove |
|---|---|---|
| v1.1 | `/blog` → `/insights` 301 (replaces the 302). `/insights/page/1` → `/insights` 301, once pagination exists. | The `/blog` 302 |
| Floor cutover (only if the floor ships) | — | The `/audit` and `/teardown` 302s (`#floor-manifest`), in the cutover deploy |
| v2 | — | The `/about` and `/pricing` 302s, **in the same deploy that ships the pages** |
| v3 | `/for` → `/` 301 | — |

### v2: anchors become pages — link updates, not redirects {#anchor-to-page}

Browsers never send fragments to the server, so `/#engines` cannot be 301'd to `/engines`. Old links keep working because the v2 homepage **keeps every v1 id**, on a summary section that links to the new page.

| v1 location | v2 page | What changes |
|---|---|---|
| `/#engines` | `/engines`, `/engines/*` | Header, footer, and body links retargeted. The section becomes four summaries, each linking to its page. |
| `/#how-it-works` ("Pricing") | `/pricing` | Header retargeted. The ladder stays and links to `/pricing`. |
| `/#operator` ("About") | `/about` | Header retargeted. The section stays (D8 requires the disclosure on the homepage) and links to `/about`. |
| `/#calculator` | `/calculator` | The mini calculator stays and links to the full one. |
| `/#proof` | `/case-studies/homets-air-and-heat` | The strip links to the case study. |
| `/#fit` | `/markets`; `/for/*` in v3 | Links added. |
| `/#faq` | Stays on the homepage | Footer link only. |

**The same deploy also updates** `08`'s email sequences and receptionist script, the outreach templates in `techeo.gtm`, section 9 of the audit PDF template (`techeo.audit` `#deliverable`), and `07`'s llms.txt and off-site profiles. **Done when:** a grep of `techeo-web` and of every template `08` lists finds no `/#engines`, `/#how-it-works`, or `/#operator` link meant for the new page, and every old anchor still resolves on `/`.

### Domain preflight mappings (D5) {#preflight-redirects}

`06` runs the preflight in Week 1 (Mon Sep 28, 2026) and hands over three inputs: the Wayback Machine URL list, a backlink export (Search Console's Links report plus one third-party tool), and Search Console pages with clicks over its 16-month history. Each legacy URL is decided by this table:

| Condition | Action |
|---|---|
| At least one real (non-spam) referring domain, and a new URL on the same topic exists | 301 → that URL |
| Earned links, but no new URL on the same topic (for example, an unrelated former business) | Let it 404. Never send it to `/`. |
| Spam content or links (pharma, casino, link networks) | Let it 404. If there is a manual action, `07` decides on a disavow. |
| Old subdomain with links | Zone rule to the same-topic URL. If there is none, no redirect (as in row 2), and `06` removes the record once nothing live depends on it. |
| Legacy path equals a new URL | The new page wins |

This narrows D5: a backlinked URL with no same-topic page is not 301'd, because a redirect to an unrelated page is treated as a soft 404. The brief needs a D5 revision before the mapping sheet is signed off (open question 8).

**Mapping sheet columns:** legacy URL · first and last Wayback capture · referring domains · Search Console clicks (16 months) · what it was · action · target · code · decision date.

**Done when (before v1 goes live):** every legacy URL with a non-spam referring domain has a row with an action; section 1 of `_redirects` matches the sheet; and every mapped URL returns 301 → 200 in one hop on a preview deploy.

### Renames after publication {#renames}

A slug change is one commit that adds `old → new 301`, updates every internal link, updates the manifest (the sitemap follows), and logs the change in `11`'s changelog. **An old slug is never reused** for other content.

## Indexing and canonical rules {#indexing}

| URL class | Robots | Canonical | Sitemap | Notes |
|---|---|---|---|---|
| `/`, `/audit`, `/teardown`, and every v2/v3 content page | index (no robots tag) | self | y | — |
| `/privacy`, `/terms`, `/accessibility` | index | self | y | They answer "what does Techeo do with my data?" for people and assistants. Hiding them saves no crawl budget. |
| `/thanks/*` | `<meta name="robots" content="noindex">` | self | n | Never linked. **Never disallowed in robots.txt:** a crawler must fetch the page to see the noindex. |
| 404 | HTTP 404 + `noindex` | none | n | — |
| `/insights/page/<n>` | index | self (never `/insights`) | n | Per Google's pagination guidance |
| Drafts | Never built in production | — | n | Filtered at build (`06`) |
| Function endpoints (prefix set by `06`; default `/api/`) | `X-Robots-Tag: noindex` | — | n | Not public pages. Forms and webhooks take POST, `/api/health` answers GET, and `/api/staff/*` sits behind Cloudflare Access (`06`). The signed-link pages in the next row are the only public `/api/` routes that render a page. |
| Signed-link pages under `/api/`: `/api/email/unsubscribe` and `/api/consent/phone-reserve-confirm` (`06` #optout; words in `03` #email-links), and `/api/files/<token>` (`06` #deliverables) | `X-Robots-Tag: noindex, nofollow` (`/api/files/` adds `noarchive`), plus the matching robots meta tag | none (rule 4) | n | GET renders a T3-style page (`#templates`) and never writes. On the first two, only the page's button or an RFC 8058 one-click request writes (`06` #optout). Never linked from the site (`#link-rules` 4). `t` is the one expected parameter on the first two (`#query-strings`). `/api/files/<token>` carries its token in the path, and its `…/video.mp4`, `…/captions.vtt`, and `…/sheet.pdf` files send the same header. `07`'s `Disallow: /api/` stays, unlike on `/thanks/*`: no crawler should fetch a URL that carries a token, and one that leaks can at most be listed without content until the token expires or is revoked. |
| Preview deployments | `X-Robots-Tag: noindex` (Pages default; confirm with `curl -I`) + Cloudflare Access on previews | Production URL | n | Non-production builds also add a `noindex` meta to every page, keyed on the Pages build variable `CF_PAGES_BRANCH` (verify the name). CI and acceptance tests reach previews with an Access service token (`06`). |
| Assets: `/og/*`, `/downloads/*`, and v3 `/resources/<slug>.pdf` *(proposed; brief revision, `04` open question 14)* | — | PDFs: the header `Link: <https://techeo.com/resources>; rel="canonical"` | n | Asset paths are lowercase and hyphenated. Astro's build-generated `/_astro/*` files keep their hashed names. |
| `techeo-web.pages.dev`, `www` | 301 (`#host-redirects`) | — | n | — |
| Staging | **No staging host exists;** previews do the job. Any future one sits behind Access with `X-Robots-Tag: noindex`. | — | n | — |

**Canonical rules:**

1. Every 200 HTML page built into `dist/` emits one `<link rel="canonical">`: absolute `https://techeo.com`, no query, no fragment, no trailing slash except `/`. `og:url` matches it.
2. It is built from the manifest path, never from the request or `Astro.url`.
3. No canonical ever points at a different page; duplicates are prevented by not creating them. `#calculator` and `/calculator` are different content.
4. A `noindex` page that returns 200 is its own canonical. The 404 page emits no canonical, and neither does a signed-link page: its only working URL carries a token, which rule 1 forbids, and the path without the token serves no page.
5. Preview builds emit production canonicals, so a leaked preview points at the real page.
6. No `hreflang`: US English only.

**Done when:** CI confirms on the production build that no manifest-indexable page carries `noindex`, no `noindex` page is in the sitemap, and every canonical meets rule 1. The signed-link pages are not in `dist/`, so `06`'s Playwright tests cover them: every state of each page, and each `/api/files/` file, returns its `X-Robots-Tag` header, and every page state carries the robots meta, no canonical, and no script. After launch, Search Console shows no "Alternate page with proper canonical" or "Duplicate without user-selected canonical" entries for manifest URLs.

## XML sitemap composition {#sitemap}

`@astrojs/sitemap` writes `/sitemap-index.xml` → `/sitemap-0.xml`. `06` configures it: `filter` reads `inSitemap` from the manifest, and `serialize()` sets each item's `lastmod` from the manifest's `updated` date. The site-wide `lastmod` option is never set. `07` adds the `Sitemap:` line to robots.txt; `09` submits the index to Search Console and Bing Webmaster Tools.

| Release | URLs added | Running total |
|---|---|---|
| v1 | `/` · `/audit` · `/teardown` · `/privacy` · `/terms` · `/accessibility` | 6 |
| v1.1 | `/insights` · each `/insights/<slug>` (three by Jan 31, 2027) | 10 |
| v2 | `/engines` · `/engines/booking` · `/engines/search` · `/engines/answer` · `/engines/ads` · `/pricing` · `/case-studies` · three `/case-studies/<slug>` · `/calculator` · `/about` · `/markets` · `/partners` | 24, plus any new articles |
| v3 | `/glossary` · each `/glossary/<term>` that has its own page · `/for/hvac` · `/for/plumbing` · `/resources` | Grows with content |

**Never in the sitemap:** `/thanks/*`, 404, `/insights/page/<n>`, glossary entries without their own page, redirect sources, Function endpoints and the signed-link pages, `/robots.txt`, `/llms.txt`, and assets, PDFs included.

**Fields:** `<loc>` and `<lastmod>` only. Google ignores `<priority>` and `<changefreq>` and trusts `<lastmod>` only when it is consistently accurate. So `lastmod` comes from the manifest's (or the content entry's) `updated` date and changes only when the main content does. **It is never the build time.**

**Done when:** on the production build, every `<loc>` returns 200, is its own canonical, carries no `noindex`, and has no slash, `.html`, or query; every `inSitemap: true` entry appears exactly once; and no `lastmod` is later than its deploy date.

## Breadcrumbs {#breadcrumbs}

| Release | Where | Trail |
|---|---|---|
| v1 | None. Every page is one level down, and the wordmark is the home link. | — |
| v1.1 | `/insights/<slug>` | Home › Insights › {article short title} |
| v1.1 | `/insights/page/<n>` | Home › Insights › Page {n} |
| v2 | `/engines/*`, `/case-studies/<slug>` | Home › Engines › The Booking Engine · Home › Case studies › {client name} |
| v3 | `/glossary/<term>`, `/for/*` | Home › Glossary › {term} · Home › For HVAC contractors |

**Rules:**

- The trail holds only URLs that return 200. `/for` and `/thanks` are not pages, so `/for/hvac` has a two-item trail.
- Markup: `<nav id="breadcrumb" aria-label="Breadcrumb">` with an `<ol>`, above the H1. The last item is plain text with `aria-current="page"`. Separators are CSS, not text.
- `07` adds `BreadcrumbList` markup matching the visible trail exactly. Since January 2025, Google shows breadcrumbs only in desktop results (mobile shows the domain), so the trail serves readers first.

## 404 behavior {#not-found}

- **Status:** a real HTTP 404. **Cloudflare Pages treats a build without a top-level `404.html` as a single-page app,** answering every unknown path with the homepage and a 200, which creates soft 404s. CI fails if `dist/404.html` is missing. There is exactly one, at the root (Pages walks up the tree for the nearest).
- **Draft copy** (`03` owns): H1 "Nothing lives at this address." Body: "The link may be old, or the address may have a typo. Most people are looking for one of these:" then Home, Engine Audit, Free phone teardown; Insights from v1.1; Engines, Case studies, Pricing from v2. Close: "If one of our own links sent you here, call [TECHEO_PHONE] and tell us which one."
- No automatic redirect, no search box. Full header and footer, and the banner in WAITLIST.
- **Monitoring:** weekly for four weeks after each release, then monthly, from Search Console's "Not found (404)" report and Cloudflare request data (`06`, `09`). A 404 URL with external referrers or three or more hits a week gets a decision under the `#preflight-redirects` rules.

**Done when:** `curl -s -D - https://techeo.com/zzz` returns status 404, and the body contains the 404 page's H1 and `<meta name="robots" content="noindex">`.

## Site search {#site-search}

**No site search and no search box until both hold:** v3 is live, and there are at least 60 indexable content pages across `/insights`, `/glossary`, `/case-studies`, and `/resources`. Until then the header, footer, and index pages cover the site. A search box with thin results reads as broken, and it adds JavaScript D3 does not allow for.

**At the trigger:** a static index (Pagefind is the default candidate) whose JavaScript loads only on a `/search` page. `/search` is `noindex`, stays out of the sitemap, and takes `?q=`. It needs a brief revision (a new URL and a second island) before it is built.

## Text sitemaps {#trees}

**v1**

```
techeo.com/
├── #top #proof #leak #calculator #engines #how-it-works
│   #audit #operator #promises #fit #faq #start
├── audit
├── teardown
├── thanks/                 (not a page; 301 → /)
│   ├── audit-reserved      noindex
│   ├── audit-purchased     noindex
│   └── teardown            noindex
├── privacy
├── terms
├── accessibility
├── 404.html                (any unmatched path)
├── api/                    (Function routes; signed links from email only)
│   ├── email/unsubscribe?t=<token>                noindex
│   ├── consent/phone-reserve-confirm?t=<token>    noindex
│   └── files/<token>                              noindex
├── robots.txt · sitemap-index.xml → sitemap-0.xml · llms.txt
└── redirect-only: /about /pricing /blog (302) · /faq /contact /thanks (301)
```

**v1.1** adds:

```
├── insights
│   ├── <slug> × 3
│   └── page/<n>            (proposed; only past 20 articles)
```

**v2** adds:

```
├── engines
│   ├── booking
│   ├── search
│   ├── answer
│   └── ads
├── pricing
├── case-studies
│   └── <slug> × 3          (homets-air-and-heat + two partners)
├── calculator
├── about
├── markets
├── partners
└── thanks/market-check · thanks/partner-referral   (proposed; noindex)
```

**v3** adds:

```
├── glossary
│   └── <term> × n          (only terms that pass the depth rule)
├── for/                    (not a page; 301 → /)
│   ├── hvac
│   └── plumbing
└── resources
```

## Floor variant {#floor}

If the Fri Nov 6 checkpoint (`11` #hours, task H5) picks the floor, techeo.com launches on Nov 20 without `/audit`, `/teardown`, `/thanks/audit-purchased`, or `/thanks/teardown`. Those four follow by Fri Jan 15, 2027 (`01` #releases, slip protocol). Until then, every link that would reach them points at a page that exists. **The floor adds no URL the full v1 lacks and renames none. It changes link targets and a few lines of copy, and one deploy puts them back.**

The floor is WAITLIST only. OPEN needs `/audit#book` and Checkout's return page, so an OPEN floor build fails (`#floor-flag`), and nothing below has an OPEN column.

### Route manifest, sitemap, and redirects {#floor-manifest}

Every v1 entry in the route manifest (`#scope`) carries `inFloor`. Later-release entries don't: `/insights` and its articles ship on their own dates under either variant (`11` #v1-1).

| URL | `inFloor` | In the floor |
|---|---|---|
| `/` | y | T1, WAITLIST only, with `form_audit_reserve` at `#start`. All twelve ids stay (`proof` per D7). |
| `/thanks/audit-reserved` | y | `form_audit_reserve`'s 303 target (`06` #launch) |
| `/privacy`, `/terms`, `/accessibility` | y | Unchanged |
| 404 (`/404.html`) | y | Links retargeted (`#floor-links`) |
| `/robots.txt`, `/sitemap-index.xml` (and `/sitemap-0.xml`), `/llms.txt` | y | `robots.txt` unchanged, since it names none of the missing pages; `llms.txt` per `#floor-others` |
| `/audit`, `/teardown` | n | Not built. A typed or remembered address gets a 302 (below). |
| `/thanks/audit-purchased`, `/thanks/teardown` | n | Not built. Nothing links to them (`#link-rules` 4) and no floor endpoint redirects to them, so a request returns 404. |
| `/api/email/unsubscribe`, `/api/consent/phone-reserve-confirm`, `/api/files/:token` | y | Unchanged. They are `rendered: 'function'` (`#scope`), so `#floor-flag` rule 1 doesn't gate them. The email-link pages 303 only to their own URL, which rule 4 allows. |

Robots, canonical, template, and schema type for each built entry are as in `#inventory-v1`. The two Function pages in `03` #email-links ship unchanged: E01's phone variant needs the call-confirmation page, and every class C email needs the unsubscribe page.

**Sitemap:** `/` · `/privacy` · `/terms` · `/accessibility`, 4 URLs. `07` L6 submits four; cutover adds `/audit` and `/teardown`.

**`_redirects`:** the v1 file (`#redirects-file`), plus two lines at the end of section 3:

```
# Floor only (02 #floor). 302: both paths become pages at cutover.
/audit                     /#start                302
/teardown                  /#how-it-works         302
```

`#start` holds the reservation form. `#how-it-works` describes the teardown first and carries its phone line. Both lines are 302 for the reason `/about` and `/pricing` are (`#redirect-rules`), and CI's `_redirects`-versus-manifest check fails the cutover build if either is still there. The three `#redirects-file` checks cover both lines, slash variants included. `/faq` → `/#faq` and `/contact` → `/#start` don't change: both targets exist in the floor.

**Acceptance tests.** `#trailing-slash` and `#host-redirects` use `/audit` and `techeo-web.pages.dev/teardown` as sample paths. On a floor build they run on `/privacy` instead, because the floor's 302 would break their "no 302 in the chain" condition. At cutover they run as written.

**Text sitemap, floor:**

```
techeo.com/
├── #top #proof #leak #calculator #engines #how-it-works
│   #audit #operator #promises #fit #faq #start
├── thanks/                 (not a page; 301 → /)
│   └── audit-reserved      noindex
├── privacy
├── terms
├── accessibility
├── 404.html                (any unmatched path)
├── api/                    (as in v1: the three signed-link pages)
├── robots.txt · sitemap-index.xml → sitemap-0.xml · llms.txt
└── redirect-only: /about /pricing /blog /audit /teardown (302) · /faq /contact /thanks (301)
```

### Where each v1 link goes in the floor {#floor-links}

**Key.** **Reserve** keeps its labels ("Reserve an audit slot"; compact "Reserve slot") and targets `/#start`. The **teardown line** replaces every teardown button: a sentence ending in the number, with only [TECHEO_PHONE] as the `tel:` link (`#anchor-text`). Default draft: "Call [TECHEO_PHONE] to request a free phone teardown." Where a section already has a phone line, the two merge, so the number is linked once per section (`#link-rules` 7). The receptionist keys each phone request through `08` F8 as `form_teardown_request`, and it joins the WAITLIST queue as a web request would. `03` owns every drafted string below; this table fixes the targets.

| Location | Full v1 | Floor | Floor wording (draft) |
|---|---|---|---|
| Header CTA, every page except `/thanks/*` | Reserve → `/audit` | Reserve → `/#start` | Labels unchanged. On `/` it is an in-page jump, as the banner's `/audit#book` is on `/audit`. |
| Season banner | "Reserve a slot" → `/audit` (`/audit#book` on `/audit`) | → `/#start` on every page | Unchanged |
| Hero `#top` | Reserve → `/audit`; "Get a free phone teardown" → `/teardown`; phone line | Reserve → `/#start`; the teardown button merges into the phone line | "Or call [TECHEO_PHONE] to request a free phone teardown. A person answers, {answering hours}." |
| `#leak` | "Put a number on yours" → `/#calculator`; "Have us call your office" → `/teardown` | `/#calculator` unchanged; teardown line | "Want us to call your office? Call [TECHEO_PHONE] for a free phone teardown." |
| `#calculator` result CTA | Below 70%: Reserve → `/audit`. At or above 70%, or under one job: "Get a free phone teardown" → `/teardown` | Below 70%: Reserve → `/#start`. The other bands: teardown line | The band's copy already ends "A free phone teardown checks the first two at no cost." The CTA becomes "Call [TECHEO_PHONE] to request one." |
| `#engines` | "The audit scores all four" → `/#audit` | Unchanged | — |
| `#how-it-works` | Teardown rung → `/teardown`; Audit rung → `/audit` | Teardown rung: teardown line. Audit rung: Reserve → `/#start` | Teardown rung: "Call [TECHEO_PHONE] to request one." The WAITLIST microcopy under it stays. |
| `#audit` | Reserve → `/audit` | Reserve → `/#start` | Label and the WAITLIST line under it unchanged |
| `#operator`, `#promises` | Homets website (open question 3); none | Unchanged | — |
| `#fit` | Vendor line names techeo.com/teardown; "Not sure? Start with a free phone teardown" → `/teardown` | Vendor line names the number; the CTA becomes the teardown line | Vendor line: "Referring a client? Have the owner call [TECHEO_PHONE] and ask for a free phone teardown. It's free, it needs only their published number, and nobody on their team has to do anything." CTA: "Not sure? Start with a free phone teardown: call [TECHEO_PHONE]." Only the CTA's number is linked. |
| `#faq-price` | "Engine Audit" → `/audit`; "free phone teardown" → `/teardown` | "Engine Audit" → `/#audit`; "free phone teardown" unlinked | Answer text unchanged, so the FAQPage markup doesn't change |
| `#start` | `form_audit_reserve`; "Rather start smaller? Queue a free phone teardown" → `/teardown`; phone line | Form unchanged; the teardown link merges into the phone line | "Rather start smaller? Call [TECHEO_PHONE] to queue a free phone teardown. The phone stays answered all year." |
| `form_audit_reserve` decline, too little lead flow (`03` #audit-page) | "[Get a free phone teardown]" → `/teardown` | Teardown line | "A free phone teardown is a better start. Call [TECHEO_PHONE] to request one." |
| `/thanks/audit-reserved` | "Queue a free phone teardown" → `/teardown` · Home → `/` | Teardown line · Home → `/` | "Call [TECHEO_PHONE] to queue one," after the "While you wait" body. Step 4's plain-text "You pay at techeo.com/audit" stays: it describes a step after the Feb 1 opening, and the guard in `#floor-flag` puts cutover first. |
| Footer, "On this site" | Engines · Pricing · Engine Audit → `/audit` · Free phone teardown → `/teardown` · About · FAQ | Engine Audit → `/#audit`; "Free phone teardown" removed | The Techeo column's `tel:` line and hours carry the phone. The Legal column and the disclosure block are unchanged. |
| 404 | Home · Engine Audit → `/audit` · Free phone teardown → `/teardown` · close line with `tel:` | Home · Engine Audit → `/#audit` · teardown line | "Free phone teardown: call [TECHEO_PHONE] to request one." `03` decides whether the close line keeps its own link. |
| `/privacy`, `/terms`, `/accessibility` | Each other · `/` · `tel:` · `mailto:` | Unchanged | — |
| `/insights` and any article published before cutover | `SeasonCta` pattern B: teardown → `/teardown`, then Reserve → `/audit` | Teardown line, then Reserve → `/#start`, unless `08` holds articles for `/teardown` (`12` #v1-1-articles) | `ArticleCta` lead-ins unchanged |

**Done when** (every floor build): `lychee` finds no broken link or fragment in `dist/`; no `href`, JSON-LD `url` or `@id` (fragment removed), `llms.txt` link, or sitemap `<loc>` names a path outside the floor manifest; and the rendered text never names `techeo.com/teardown`, and names `techeo.com/audit` only in `/thanks/audit-reserved` step 4.

### The build flag {#floor-flag}

`V1_VARIANT: 'floor' | 'full'` lives in `site.ts` (`06` #config), outside the SEASON markers, so a season flip never touches it and the founder's code-owner review covers every change. `06` implements it to these rules:

1. **Routes.** With `'floor'`, the build emits only the v1 entries with `inFloor: true`, plus any later-release entries already in the manifest. `06` picks the mechanism. The manifest parity check and the sitemap filter read the same set.
2. **One link helper.** Every location in `#floor-links` gets its target from one helper, which `06` names, that reads `V1_VARIANT` the way `getSeason()` reads the season. The header, banner, footer, 404, calculator island, thanks page, and `SeasonCta` (`04` #season-cta) all call it. A lint rule blocks a literal `/audit` or `/teardown` href anywhere else, so cutover changes one value instead of a search through components.
3. **Copy.** Each floor string sits beside its full-v1 string in `messages.ts`, keyed by variant. None is typed into a component.
4. **Endpoints.** No floor Function redirects to a path outside the floor manifest. `06` leaves the public `form_audit_qualify` and `form_teardown_request` endpoints out of the floor build or has them return 404. The staff intake path (`08` F8) still keys phone teardowns as `form_teardown_request`.
5. **Guard.** `config.test.ts` fails any build with `V1_VARIANT = 'floor'` and `SEASON_STATE = 'OPEN'`. The Feb 1 flip PR (`11` #flip-open) can't pass CI until cutover has shipped, which backs the Jan 15 deadline with a check as well as a date.
6. **CI builds.** With `'floor'`, CI's three builds become the floor's two WAITLIST variants. The branch that finishes the four pages builds all three full variants on Access-protected previews (`06` #ci), and the Stripe test run happens there before cutover.

### What other documents change in the floor {#floor-others}

Each owner keeps its own wording. These are the changes each owner makes so that nothing points at a missing page. All of them revert at cutover (`#floor-cutover`).

**`03` (copy).** Not built: `#audit-page`, `#teardown-page`, and the `/thanks/audit-purchased` and `/thanks/teardown` parts of `#thanks`. The reservation form's field copy stays in `messages.ts`, because `#start` uses it. Only the strings in `#floor-links` are reworded. `03` #qa runs on the floor build in both WAITLIST reasons.

**`07` (search).**

| Item | In the floor |
|---|---|
| `#sd-offers`: the Engine Audit and teardown `Service` + `Offer` nodes | Not emitted, because their pages don't exist; `jsonld.test.ts` skips those fixtures. The homepage `@graph` (`#sd-home`) names neither path, so it doesn't change. `07` may add the Engine Audit `Service` to `/` for these weeks. *Default: no,* so cutover only adds nodes and never moves an `@id`. |
| `/llms.txt`, Pages section | The Engine Audit line points to `https://techeo.com/#audit` ("the $1,500 audit, what it checks, and how to reserve a slot"). The Booking Rate Teardown line is dropped, and the teardown fact ends "Request one by calling [TECHEO_PHONE]." The status sentence is the WAITLIST one, as always. |
| Launch checks L1, L3, L5, L6, L7, L9 | Run on `/` only. L3's question becomes "read https://techeo.com/ and tell me the price of the Engine Audit." L6 submits four URLs. The `/audit` and `/teardown` runs move to cutover. |
| Query-map rows and prompt P12 that target `/audit` or `/teardown` | Scored against `/` until cutover |
| `#entity-channels` row #2, adjacent vendors | The one-line fact goes out with `https://techeo.com/` and [TECHEO_PHONE] instead of `/teardown` |

**`08` (emails and script).** Only messages a prospect can receive before cutover change. E04's email-only variant, E09, E10, E24, E30, and E37 go out only in OPEN or after an opening, so they keep their wording.

| Message | Full v1 | Floor, until cutover |
|---|---|---|
| E01, last paragraph | "…a free phone teardown shows part of what the audit finds: https://techeo.com/teardown" | "…a free phone teardown shows part of what the audit finds. Call [TECHEO_PHONE] to queue one." |
| E01, step 3 | "you pay at techeo.com/audit" | Unchanged: it describes a step after the Feb 1 opening, and the guard puts cutover first |
| E20, WAITLIST clause | "New audits open {next opening}; reserving is free at techeo.com/audit" | "New audits open {next opening}; reserving is free at https://techeo.com/#start" |
| E20, at target or under one job | "A free phone teardown checks the first two: techeo.com/teardown" | "A free phone teardown checks the first two. Call [TECHEO_PHONE] to request one." |
| E28, E29 (both can follow a `form_audit_reserve` decline) | "…: techeo.com/teardown." | "…: call [TECHEO_PHONE] and ask for one." |
| E32, reservation canceled | "If you want back in, techeo.com/audit takes two minutes." | "If you want back in, reserve again at https://techeo.com/#start or call [TECHEO_PHONE]." |
| Script step 9, referrer | "The fastest route for the owner is techeo.com/teardown." | "The fastest route is for the owner to call this number and ask for a free phone teardown." |
| Script steps 5, 7c, 7d | Teardowns queued by phone through F8 | Unchanged. They are the floor's only teardown route. |

The floor script goes to the vendor as a versioned change, logged like any other (`08` #receptionist). Every floor wording is still true after cutover, so a late revert breaks nothing: `08` reverts the emails in the cutover deploy and decides whether step 9 reverts at all. Before Nov 20, `08` confirms that F8's teardown intake passes its Done-when test, since it is the only way to request a teardown in the floor.

**`09` (analytics).**

- Retargeted audit CTAs report `link_target` `/#start`. Each teardown line is a `tel:` link, so it counts as `phone_click` with its own `cta_position` and `section_anchor`, and no new event is needed.
- In `#calculator`, the result CTA is a link in one band and a `tel:` link in the others. `09` gives the `tel:` link the same `cta_click` identity (`calculator_next`) and no `phone_click`, so the event type never reveals the band (`09` #events, event 16).
- Web `form_teardown_request` counts read zero by design; phone teardowns count with `entered_by_staff` (`08` F8).

**`11` (launch).** Until cutover, the Day 1 check (`11` #post-launch) looks for `/` alone, and the Day 30 check counts four indexable URLs, not six.

### Cutover: one deploy {#floor-cutover}

Due by Fri Jan 15, 2027, outside `11`'s holiday freeze (Dec 19 – Jan 3), in a slot `11` schedules. One commit, which the founder approves as code owner of `site.ts`.

**Before merging, on the cutover commit's preview:**

1. The four pages pass `03` #qa in all three states, and the founder has done the read-aloud and phone check (`11` #hours, option B).
2. `form_teardown_request` → `/thanks/teardown` and `form_audit_reserve` on `/audit#book` → `/thanks/audit-reserved` pass end to end. On an OPEN preview, `form_audit_qualify` → Stripe test Checkout → `/thanks/audit-purchased` passes.
3. `07` #sd-validation passes on the `/audit` and `/teardown` markup.

**In the commit:**

4. `V1_VARIANT` becomes `'full'`. Every `#floor-links` location reverts through the helper and `messages.ts`; nothing is edited by hand.
5. The four pages build. The sitemap lists six URLs, and `updated` is the cutover date on `/audit`, `/teardown`, and `/`, whose CTAs changed.
6. The two floor lines leave `_redirects`.
7. `llms.txt` gets its two Pages lines back, and the teardown fact loses its phone sentence.
8. E01, E20, E28, E29, and E32 revert (`08`).

**The same day, after the deploy:**

9. Production `lychee` passes. `curl -sI` returns 200, not 302, on `/audit` and `/teardown`. `/thanks/teardown` and `/thanks/audit-purchased` return 200, and each body carries `<meta name="robots" content="noindex">`. `#trailing-slash` and `#host-redirects` pass as written.
10. `07` L1, L3, L5, L7, and L9 run on `/audit` and `/teardown`, with URL Inspection, IndexNow, and Bing URL Submission for both. `01`'s exit criteria need both indexed by Fri Jan 29.
11. `07`'s vendor one-liner goes back to `/teardown`. If step 9 reverts, `08` sends the vendor the script change.
12. The cutover is logged in `11` #changelog.

**Done when:** `#link-map-v1` holds on production, the sitemap lists the six v1 URLs, `_redirects` has no `/audit` or `/teardown` line, and an OPEN build passes CI.

## Open questions for the founder {#open-questions}

1. **Apex or `www` as the canonical host?** *Recommended default: apex, `techeo.com`.* It is what gets printed and said aloud; `www` 301s to it.
2. **Publish an email address anywhere beyond `/accessibility` and `/privacy`?** *Recommended default: not in v1.* Those two pages carry one monitored address because `10` requires a text route for privacy and accessibility requests: phone-only contact is a barrier for deaf and hard-of-hearing visitors. A general address in the header or footer is different. D11 covers phone and forms, but nothing answers a sales inbox inside the SLA, and a prospect who emails as a test would find the gap. Revisit when the receptionist contract covers email.
3. **Link to the Homets website from `#operator`?** *Recommended default: yes, one plain link from `#operator` only.* It lets a prospect verify the operator claim. It needs the Homets → Techeo license (`techeo.legal` `#ip`) to cover brand use. Homets' side of the link is `07` #homets-link's decision.
4. **A "Call" button in the mobile header on every page?** *Recommended default: yes.* It invites test calls, and passing that test is the pitch. It also raises the receptionist's per-minute bill, a cost only the founder can accept.
5. **Client company names in case-study URLs?** *Recommended default: yes.* Put consent to the named URL into the Design Partner Agreement beside the case-study approval `techeo.gtm` already requires.
6. **If the preflight finds earlier content of the founder's own on techeo.com, republish any of it?** *Recommended default: no.* Map its links by the `#preflight-redirects` rules and let the rest 404.
7. **Make `/partners` public and indexed in v2?** *Recommended default: yes.* Vendor referrals are channel #2 in `techeo.gtm`, and a findable page makes the ask easier. The cost is some unsolicited vendor pitches.
8. **Let a legacy URL that earned backlinks return 404 when no page on the same topic exists?** *Recommended default: yes.* D5 says to 301-map every URL that earned backlinks, but a redirect to an unrelated page is treated as a soft 404, so it keeps nothing and hides the true status. This narrows D5, so the brief needs a D5 revision before the mapping sheet is signed off (`#preflight-redirects`).
