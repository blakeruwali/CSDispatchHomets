---
id: techeo.web.brief
title: techeo.com — Website Decision Brief
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, decisions, brief, scope]
related: [techeo.positioning, techeo.offers, techeo.audit, techeo.gtm, techeo.guardrails, techeo.plan90, techeo.metrics]
order: 0
---

# techeo.com — Website Decision Brief

**The website is Techeo's first case study. It sells SEO, AEO, and speed to lead, so prospects will judge all three on techeo.com before they read a word of the pitch. They will search for it, ask an AI assistant about it, and — given what we sell — call the number to see who answers.**

This brief is the decision record for every document in `techeo/website/`. Where another website document disagrees with this one, this one wins until it is revised. Each decision names the document that owns the detail.

---

## D1 · Releases {#releases}

| Release | Live | Adds | Trigger |
|---|---|---|---|
| **v1 — Launch** | **Fri Nov 20, 2026** (Week 8 of `techeo.plan90`) | Homepage, `/audit`, `/teardown`, utility and legal pages | Phase 1 exit criteria |
| **v1.1 — Quiet-period content** | Dec 2026 – Jan 2027 | `/insights` + the three Phase 2 articles `techeo.plan90` already calls for | Inside the 4 hrs/week Phase 2 cap |
| **v2 — Proof** | **Tue Sep 7, 2027** (the day after Labor Day, when selling resumes) | Case studies, engine pages, pricing, full calculator, about, markets, partners | Homets + two partners at day 90 = three case studies |
| **v3 — Engine** | Q4 2027 onward | Glossary, trade pages, resources, insights at cadence | Each page has its own trigger in `04` |

**v1 soft-launches.** Nobody is sent to it until Feb 1, 2027, except the referral vendors and peer-network contacts being warmed in Phase 2. Launching in November still matters: it gives search engines and AI crawlers ten weeks to discover and index the site before the first teardown email links to it.

**Reading `techeo.plan90`'s "one page, not five."** v1 has **one marketing page**, the homepage. `/audit` and `/teardown` are conversion pages, not marketing pages. Legal and thank-you pages are required infrastructure. There is no `/about`, no engine pages, and no blog in v1.

## D2 · Season state — the site obeys the guardrails {#season-state}

The site has exactly two public states, set by one config value (`SEASON_STATE`), plus a reason (`WAITLIST_REASON`):

| State | What CTAs do | When |
|---|---|---|
| **OPEN** | Book and pay for an Engine Audit; request a teardown | Feb 1 – Apr 30; from v2 launch Sep 7 – Nov 30 |
| **WAITLIST** | Reserve a slot for the next opening; no payment is taken | Launch through Jan 31; May 1 – Sep 6; Dec 1 – Jan 31 |

`WAITLIST_REASON` is either `season` ("New audits open February 1") or `capacity` ("Every slot is full; the next opens [date]"). There is no third public reason. When the kill switch in `techeo.guardrails` trips, or when the client-#4 gate would be breached, the site flips to `WAITLIST` with reason `capacity`. The named kill-switch enforcer can require the flip.

**This is a feature, not an apology.** The copy frames it as: *we run an HVAC company too. In peak season our trucks come first, and so would yours.* Waitlist copy is owned by `03`; the flip mechanics by `06`; CTA behavior by `08`.

**The site launches in WAITLIST (reason: `season`)** and flips to OPEN on Mon Feb 1, 2027.

## D3 · Stack {#stack}

- **Astro, static output, Tailwind CSS.** Zero JavaScript by default. The calculator is the only interactive island.
- **Not a client-rendered SPA — so not Vite + React as built in this repo, and not Lovable** unless it can emit fully prerendered HTML. Many AI crawlers fetch raw HTML and do not execute JavaScript. An AEO agency whose own site ships an empty HTML shell has disproved its own pitch.
- **Hosting:** Cloudflare Pages, with Pages Functions for form endpoints.
- **Lead store:** Techeo's **own** Supabase project. Nothing is shared with Homets' project.
- **Payments:** Techeo's own Stripe account; Checkout, card and ACH.
- **Scheduling:** a Cal.com or Calendly account owned by Techeo, with availability that respects the protected blocks in `techeo.guardrails`.
- **Email:** Google Workspace on techeo.com, with SPF, DKIM, and DMARC before the first email is sent.
- **Code:** its own repository, `techeo-web`, under a Techeo-owned GitHub organization, created once the LLC exists (Week 2).

Owned by `06`.

## D4 · Separation {#separation}

Every account the site uses — registrar, DNS, hosting, Stripe, Google Workspace, Supabase, scheduling, analytics, Search Console, GitHub — is registered to **Techeo LLC**, not the founder personally and not Homets. The techeo.com registrant must be Techeo LLC; transfer it if it is not. This is `techeo.legal`'s separation principle applied to infrastructure.

## D5 · Domain preflight is the first website task {#preflight}

techeo.com's current state is unknown: this environment's network proxy blocks it. Before any build work, establish the registrar and registrant, the DNS host, **whether MX records and live email exist** (these must be preserved through any DNS change), existing subdomains, what is published today, the Wayback Machine history, the backlink profile, and — after verifying in Search Console — any manual actions. If earlier content earned backlinks, 301-map those URLs. A domain with a spam history is an SEO problem to solve before launch, not after. Owned by `06`, scheduled by `11`.

## D6 · Offers, names, prices — exactly as in `techeo.offers` {#offers}

| Offer | Price | On the site |
|---|---|---|
| Booking Rate Teardown | Free | v1 |
| **Engine Audit** | **$1,500**, credited in full against the first month of any retainer signed within 30 days; 7 business days | v1, price shown |
| Booking Sprint | $3,500/mo, 90-day minimum, then month-to-month with 30 days' notice | v1 as "retainers from $3,500/month"; v2 in full |
| Demand Engine | $6,500/mo + ad spend on the client's own accounts and card | v2 |
| Attribution Layer | +$1,500/mo | **Not on the site** until it works on three accounts |
| Design partner pricing | — | **Never published** |

**Engine names** (`techeo.positioning`): MEO — Marketing Engine Optimization — is the umbrella over **Search (SEO)**, **Answer (AEO)**, **the Ads Engine**, and **the Booking Engine**. Never write "Sales Engine Optimization" or "Ads Engine Optimization," and never give the Ads or Booking engines an acronym. The Booking Engine is always listed first — it is the wedge.

## D7 · Proof and numbers {#proof}

Every number published on techeo.com must be:

1. **Real**, from Homets' ServiceTitan or from a client's own data with written approval
2. **Dated**, with its measurement window shown beside it
3. **Rounded down**
4. **A ratio or a delta — never an absolute.** Publish booking rate 52% → 71%. Never publish Homets' revenue, call volume, job counts, or pricebook contents. Homets' local competitors can read the site too.

**v1 does not ship with placeholder numbers.** If the Week 1 baseline pull has not happened, the proof section is **omitted**, not faked. No testimonials in v1 (none exist yet), no client logos, no "as seen in," no counters, no "trusted by 100+ contractors."

## D8 · Founder, affiliation, voice {#voice}

- The founder is named **Blake [FOUNDER_SURNAME]**, with a real photograph. Techeo is "we." The founder story section is in the first person, signed by Blake.
- **Never use gendered pronouns for the founder.** Write "Blake," "the founder," or first person.
- **Homets Air and Heat is named explicitly**, with the affiliation disclosed without being asked: owned by the same person, based in [HOMETS_METRO]; no clients within [EXCLUSION_RADIUS_MILES] miles of Homets; one client per market per trade. The disclosure appears on the homepage (`#operator`) and in the footer on every page.
- **Voice:** an operator talking to peers. Plain, specific, numerical. The register of `content/playbooks/` — declarative, short, no hedging on standards.
- **Banned words:** guarantee / guaranteed, unlock, supercharge, leverage (as a verb), cutting-edge, game-changer, seamless, world-class, revolutionize, synergy, 10x, "growth hacking," "crush it." Results are *targets*, never promises (`techeo.legal`).

## D9 · Media {#media}

Real photographs and footage only. No stock photos of people, no AI-generated people, no AI-generated "job site" images. Diagrams and illustrations are fine.

Homets imagery needs three things: the Homets → Techeo license in `techeo.legal` must cover brand and photo use; every identifiable Homets employee must sign a likeness release; and **no customer information may be visible** — dispatch-board and ServiceTitan screens show customer names and addresses and must be blurred or staged. v1 minimum: a founder portrait and 2–4 operational photos (CSM desk, dispatch board, a truck). Owned by `05`; releases by `10`.

## D10 · Brand in v1 {#brand}

**Wordmark only** — `techeo.plan90` rules out a logo project in Phase 1. The visual direction is an *operator's field manual*: utilitarian, high-contrast, numbers-forward. Not SaaS gradients, not HVAC red-and-blue flames and snowflakes. **Mobile-first** — owners read between jobs, on a phone. WCAG 2.2 AA. Owned by `05`.

## D11 · Eat our own cooking — lead handling {#own-cooking}

Techeo sells answer rate and speed to lead. **Its own inbound must visibly meet the standard it sells**, because prospects will test it.

- **Phone:** a public number, [TECHEO_PHONE], answered live by a contracted virtual receptionist on **Techeo's own account** (not Homets'), scripted to book discovery calls into the founder's calendar.
- **Forms:** instant automated confirmation; a live callback by the receptionist inside the SLA to book the discovery call.
- **SLA target:** 15 minutes during business hours (8:00–18:00 [TZ], Monday–Friday); by 10:00 the next business day outside them. **Publish the 15-minute figure only after four consecutive weeks of measured compliance of 95% or better.** Until then the site says "same business day."
- **Founder calendar:** discovery calls and readouts are bookable only outside the protected blocks in `techeo.guardrails` — no weekday slots before 10:00, none on Monday morning, none on Friday afternoon. Discovery slots close whenever the site is in WAITLIST.
- **Self mystery-shop monthly:** the receptionist line and a form, scored against the audit rubric in `techeo.audit` and logged.

Owned by `08`.

## D12 · Measurement stance {#measurement}

GA4, Google Search Console, and Bing Webmaster Tools. No session-replay or heatmap tools in v1. The site's outcome metrics are **qualified audit reservations and purchases, teardown requests, and speed-to-lead compliance** — not traffic. Rankings and impressions are diagnostic inputs, never outcomes (`techeo.metrics`). Owned by `09`.

## D13 · Search and answer engines {#search}

Every word of content is in server-rendered HTML. AI search and answer crawlers are **allowed**. The 12-prompt test from `techeo.audit` is adapted to Techeo's own target queries and run monthly. No programmatic city pages for Techeo itself, no bought links, and no AI-spun articles. Owned by `07`.

## D14 · Out of scope, v1 and v2 {#out-of-scope}

Client login or reporting portal (trigger: 8 clients). AI chat widget — a bot that fails to book undermines the entire pitch. Popups, exit-intent, countdown timers, fake scarcity, cookie walls. Paid traffic to the site. A logo or brand-identity project before v2. Any page advertising the Attribution Layer.

## D15 · Hours and money {#constraints}

Phase 1 caps Techeo at 10–12 hours a week (`techeo.guardrails`), and those weeks are already allocated in `techeo.plan90`. **The founder writes the copy and approves it** — the one thing that cannot be delegated. The build is AI-assisted or goes to a freelancer. `11` must show the hours arithmetic and flag honestly if v1 does not fit the cap. `techeo.financials` budgets the website at $0; `11` must list every new cost — receptionist, Workspace, Stripe fees, photography, legal-page review — and reconcile the total against the $9,000 plan and $13,700 high estimate.

---

## Canonical names {#names}

Every website document uses these exact identifiers.

### URLs

| Release | URLs |
|---|---|
| v1 | `/` · `/audit` · `/teardown` · `/thanks/audit-reserved` · `/thanks/audit-purchased` · `/thanks/teardown` · `/privacy` · `/terms` · `/accessibility` · 404 · `/robots.txt` · `/sitemap-index.xml` · `/llms.txt` |
| v1.1 | `/insights` · `/insights/<slug>` |
| v2 | `/engines` · `/engines/booking` · `/engines/search` · `/engines/answer` · `/engines/ads` · `/pricing` · `/case-studies` · `/case-studies/<slug>` · `/calculator` · `/about` · `/markets` · `/partners` |
| v3 | `/glossary` · `/glossary/<term>` · `/for/hvac` · `/for/plumbing` · `/resources` |

### Homepage sections, in order (v1)

| # | Anchor | Section |
|---|---|---|
| 1 | `#top` | Hero |
| 2 | `#proof` | Homets proof strip — omitted if the numbers are not real yet (D7) |
| 3 | `#leak` | Where booked jobs leak |
| 4 | `#calculator` | Mini calculator: what is your phone costing you? |
| 5 | `#engines` | The four engines, Booking first |
| 6 | `#how-it-works` | The ladder: Teardown → Audit → Booking Sprint → Demand Engine |
| 7 | `#audit` | The Engine Audit, summarized, linking to `/audit` |
| 8 | `#operator` | Built by an operator — founder story and Homets disclosure |
| 9 | `#promises` | What we put in writing |
| 10 | `#fit` | Who it is for, and who it is not for |
| 11 | `#faq` | FAQ |
| 12 | `#start` | Final CTA, season-state aware |

Plus a header, a season banner shown only in WAITLIST, and a footer carrying the disclosure.

### Forms

| Id | Where | State |
|---|---|---|
| `form_audit_reserve` | `/audit`, `#start` | WAITLIST |
| `form_audit_qualify` | `/audit` — runs **before** Stripe Checkout, so we never take $1,500 from someone we would decline | OPEN |
| `form_teardown_request` | `/teardown` | both states; in WAITLIST, queued for the next opening |
| `form_calculator_email` | `#calculator`, later `/calculator` | both |
| `form_market_check` | `/markets` | v2 |
| `form_partner_referral` | `/partners` | v2 |

### Placeholders

Only facts the founder alone can supply are placeholders. Use exactly these tokens; any new metric follows the `[HOMETS_<METRIC>]` pattern.

`[FOUNDER_SURNAME]` · `[HOMETS_METRO]` · `[EXCLUSION_RADIUS_MILES]` · `[TZ]` · `[TECHEO_PHONE]` · `[TECHEO_POSTAL_ADDRESS]` (a registered-agent or mailbox address, never a home — CAN-SPAM requires a postal address in commercial email) · `[TECHEO_STATE]` · `[HOMETS_BOOKING_RATE_FROM]` · `[HOMETS_BOOKING_RATE_TO]` · `[HOMETS_ANSWER_RATE]` · `[HOMETS_UNTOUCHED_FROM]` · `[HOMETS_UNTOUCHED_TO]` · `[HOMETS_SPEED_TO_LEAD_MEDIAN]` · `[HOMETS_WINDOW]`

### Key dates

| Date | Event |
|---|---|
| Mon Sep 28, 2026 | Week 1 — domain preflight |
| Fri Nov 20, 2026 | **v1 live**, WAITLIST / `season` |
| Mon Feb 1, 2027 | Flip to OPEN; outbound begins |
| Sat May 1, 2027 | Flip to WAITLIST / `season` |
| Tue Sep 7, 2027 | **v2 live**; flip to OPEN |
| Wed Dec 1, 2027 | Flip to WAITLIST / `season` |

---

## Who owns what {#ownership}

One owner per topic. Other documents reference the owner and do not restate it.

| Doc | id | Owns |
|---|---|---|
| `01-strategy.md` | `techeo.web.strategy` | Site jobs, audiences, message hierarchy, release strategy, success criteria, website risks |
| `02-information-architecture.md` | `techeo.web.ia` | Page inventory, URLs, navigation, internal linking, redirects, indexing and canonical rules |
| `03-pages-v1.md` | `techeo.web.pages-v1` | Every v1 page, section by section, with final draft copy in both states, plus v1 titles and meta descriptions |
| `04-pages-v1-1-to-v3.md` | `techeo.web.pages-later` | Every v1.1, v2, and v3 page: spec, copy, build trigger |
| `05-design-system.md` | `techeo.web.design` | Visual system, tokens, components, photography rules and shot list, accessible components |
| `06-technical-architecture.md` | `techeo.web.tech` | Stack, repo, hosting, forms backend, data schema, integrations, performance, security, CI, DNS, monitoring, domain preflight mechanics |
| `07-seo-and-aeo.md` | `techeo.web.search` | Query map, structured data, robots and llms.txt, AEO measurement, off-site entity work |
| `08-conversion-and-leads.md` | `techeo.web.conversion` | CTA hierarchy, form field definitions, qualification logic, calculator logic, flows, SLA, receptionist, email sequences, pipeline |
| `09-analytics.md` | `techeo.web.analytics` | Event taxonomy, analytics configuration, UTMs, dashboards, the site scorecard |
| `10-compliance.md` | `techeo.web.compliance` | Legal page requirements, consent language, disclosures, accessibility compliance, trademarks, releases, retention |
| `11-build-and-launch.md` | `techeo.web.build` | Schedule, hours, budget, QA and launch checklists, runbook, maintenance |
| `12-content-roadmap.md` | `techeo.web.content` | Editorial standards, article briefs, calendar, case-study process, glossary list |

## House style {#style}

Same conventions as `techeo/` and `content/`: YAML frontmatter; a bold thesis line under the H1; `{#anchor}` on every H2; tables where they help; "Done when" or acceptance criteria wherever work is specified. Real copy, never lorem ipsum. Every document ends with `## Open questions for the founder {#open-questions}` — decisions only the founder can make, each with a recommended default.
