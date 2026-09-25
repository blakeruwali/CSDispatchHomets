---
id: techeo.web.brief
title: techeo.com — Website Decision Brief
company: techeo
owner: blake
status: draft
version: 2
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, decisions, brief, scope, budget]
related: [techeo.positioning, techeo.offers, techeo.audit, techeo.gtm, techeo.financials, techeo.guardrails, techeo.plan90, techeo.metrics, techeo.web.strategy, techeo.web.build]
order: 0
---

# techeo.com — Website Decision Brief

**The website is Techeo's first case study. It sells SEO, AEO, and speed to lead, so prospects will judge all three on techeo.com before they read a word of the pitch. They will search for it, ask an AI assistant about it, and — given what we sell — call the number to see who answers.**

This brief is the decision record for every document in `techeo/website/`. Where another website document disagrees with this one, this one wins until it is revised. Each decision names the document that owns the detail.

> **Decide first: lean v1 or full spec (D16).** The documents in this folder specify the full build. Costed honestly in `11` #budget, it runs about **$20,900 before the first sale** and about $42,000 over the plan year — roughly 47% of the Base scenario's revenue, for a company that breaks even at one client. D16 defines a lean v1 at an estimated $4,500–$7,500 that does everything the site must do before February and adds the rest as revenue arrives. **Recommended: lean v1. Decide by Fri Oct 9, 2026** (the builder signing date in `11`).

---

## D1 · Releases {#releases}

| Release | Live | Adds | Trigger |
|---|---|---|---|
| **v1 — Launch** | **Fri Nov 20, 2026** (Week 8 of `techeo.plan90`) | Homepage, `/audit`, `/teardown`, utility and legal pages | Phase 1 exit criteria. If the Fri Nov 6 checkpoint shows the build threatening the audit work, ship the **floor** instead (`01` #releases slip protocol, `02` #floor) — the audit never waits on the website |
| **v1.1 — Quiet-period content** | Dec 2026 – Jan 2027 | `/insights` + the three Phase 2 articles `techeo.plan90` already calls for. The first doubles as the Homets case study `techeo.plan90` needs by Apr 30 (`01` open question 5) | Inside the 4 hrs/week Phase 2 cap; nothing Dec 21 – Jan 1 |
| **v2 — Proof** | **Tue Sep 7, 2027** — the day after Labor Day. **The date is fixed; the scope flexes.** A case study not approved by Mon Aug 16 ships after launch (`01` #releases) | Case studies, engine pages, pricing, full calculator, about, markets, partners | Mon Aug 16 gate check (D2) |
| **v3 — Engine** | Q4 2027 onward | Glossary, trade pages, resources, insights at cadence | Each page has its own trigger in `04`; v3 as a whole waits on the Homets operations hire (`01`) |

**v1 soft-launches.** Nobody is sent to it until Feb 1, 2027, except the referral vendors and peer-network contacts being warmed in Phase 2. Launching in November still matters: it gives search engines and AI crawlers ten weeks to discover and index the site before the first teardown email links to it.

**Reading `techeo.plan90`'s "one page, not five."** v1 has **one marketing page**, the homepage. `/audit` and `/teardown` are conversion pages, not marketing pages. Legal and thank-you pages are required infrastructure. There is no `/about`, no engine pages, and no blog in v1.

## D2 · Season state — the site obeys the guardrails {#season-state}

The site has exactly two public states, set by one config value (`SEASON_STATE`), plus a reason (`WAITLIST_REASON`).

| State | What CTAs do | When (the rule; 2027 dates in brackets) |
|---|---|---|
| **OPEN** | Buy an Engine Audit or book the call that sells one (D16); request a teardown | Feb 1 – Apr 30; and from the day after Labor Day through Nov 30 [Sep 7 – Nov 30, 2027; Sep 5 in 2028] |
| **WAITLIST** | Reserve a place for the next opening; no payment is taken | Every other day: launch – Jan 31; May 1 – Labor Day [May 1 – Sep 6, 2027]; Dec 1 – Jan 31 |

**Reasons, and their only public wording:**

- `season` — "New audits open {next opening}." The date comes from the season config; it is never hard-coded, because the next opening is sometimes February and sometimes September.
- `capacity` — "We're not taking new audits until at least {capacity date}." **Never "every slot is full"**: when the kill switch trips with fewer than three clients active, that sentence would be false, and D14 bans fake scarcity. The public copy never gives the reason.

**What flips the site to WAITLIST / `capacity`,** in any season:

1. The kill switch in `techeo.guardrails` trips.
2. The client-#4 gate would be breached.
3. `AUDIT_CAPACITY` is reached: three audits sold and not yet read out (`08`, `06`).
4. The **Mon Aug 16, 2027 gate check** fails. With three design partners active, the next retainer is client #4, so the September opening happens only if a Homets operations owner is in seat (`techeo.guardrails` #gate); otherwise v2 launches in WAITLIST / `capacity`.

**The capacity date** is the later of the next seasonal opening and the date the trigger is expected to clear. Update it whenever it moves (`01` open question 2).

**Edges.** Audits bought in the last two weeks of an OPEN window are shown the readout date and the earliest retainer start before they pay (`01`, `08`). Discovery calls already booked when the site flips to `capacity` move past the capacity date and become reservations (`08`). The founder flips the site; the named kill-switch enforcer can flip it to WAITLIST / `capacity` alone, and returning to OPEN takes both (`01` open question 3). Every flip is logged.

**This is a feature, not an apology.** The copy frames it as: *we run an HVAC company too. In peak season our trucks come first, and so would yours.* Waitlist copy is owned by `03`; the flip mechanics by `06`; CTA behavior by `08`.

**The site launches in WAITLIST / `season`** and flips to OPEN on Mon Feb 1, 2027.

## D3 · Stack {#stack}

- **Astro, static output, Tailwind CSS. No JavaScript is needed to read any page or submit any form.** The calculator is the only interactive island. GA4, Cloudflare Turnstile, and a small form-enhancement script (loading states, double-submit protection) load asynchronously and are never required.
- **Not a client-rendered SPA — so not Vite + React as built in this repo, and not Lovable** unless it can emit fully prerendered HTML. Many AI crawlers fetch raw HTML and do not execute JavaScript. An AEO agency whose own site ships an empty HTML shell has disproved its own pitch.
- **Hosting:** Cloudflare Pages, with Pages Functions for form endpoints. Cloudflare now steers new projects toward Workers with static assets, so the backend code is written host-agnostic (`06`) and the host is re-decided before v2.
- **Lead store:** Techeo's **own** Supabase project. Nothing is shared with Homets' project.
- **Payments:** Techeo's own Stripe account, card and ACH. The full spec sells the audit through on-site Checkout after `form_audit_qualify`; the lean v1 sells it by Stripe invoice after the discovery call (D16, `08` F10).
- **Scheduling:** a Cal.com or Calendly account owned by Techeo, with availability that respects the protected blocks in `techeo.guardrails`.
- **Email:** Google Workspace on techeo.com for people, with SPF, DKIM, and DMARC before the first email is sent. Mail the site sends goes from its own authenticated transactional sender on a subdomain (`06`).
- **Code:** its own repository, `techeo-web`, under a Techeo-owned GitHub organization, created once the LLC exists (Week 2).

Owned by `06`.

## D4 · Separation {#separation}

Every account the site uses — registrar, DNS, hosting, Stripe, Google Workspace, the transactional email sender, Supabase, scheduling, analytics, Search Console, Bing Webmaster Tools, GitHub, monitoring, the receptionist vendor, and **ClickUp in its own Techeo Workspace, never Homets'** — is registered to **Techeo LLC**, not the founder personally and not Homets. The techeo.com registrant must be Techeo LLC; transfer it if it is not. This is `techeo.legal`'s separation principle applied to infrastructure.

## D5 · Domain preflight is the first website task {#preflight}

techeo.com's current state is unknown: this environment's network proxy blocks it. Before any build work, establish the registrar and registrant, the DNS host, **whether MX records and live email exist** (these must be preserved through any DNS change), existing subdomains, what is published today, the Wayback Machine history, the backlink profile, and — after verifying in Search Console — any manual actions. The Search Console checks need an account owned by Techeo LLC, so they finish in Week 3 (`11`).

If earlier content earned backlinks, **301-map each to a same-topic page where one exists; otherwise let it return 404.** A redirect to an unrelated page is treated as a soft 404 and can carry a spam history across (`02` #preflight-redirects). A domain with a spam history is an SEO problem to solve before launch, not after. Owned by `06`, scheduled by `11`.

## D6 · Offers, names, prices — exactly as in `techeo.offers` {#offers}

| Offer | Price | On the site |
|---|---|---|
| Booking Rate Teardown | Free | v1 |
| **Engine Audit** | **$1,500**, credited in full against the first month of any retainer signed **within 30 days of the readout call**; 7 business days | v1, price shown |
| Booking Sprint | $3,500/mo, 90-day minimum, then month-to-month with 30 days' notice | v1 as "retainers from $3,500/month"; v2 in full |
| Demand Engine | $6,500/mo + ad spend on the client's own accounts and card | v2 |
| Attribution Layer | +$1,500/mo | **Not on the site** until it works on three accounts |
| Design partner pricing | — | **Never published** |

**The audit refund policy is not yet set.** It must be decided before the first audit is sold — the terms, the checkout or invoice, and the FAQ all depend on it (`03` open question 2 has the recommended default).

**Engine names** (`techeo.positioning`): MEO — Marketing Engine Optimization — is the umbrella over **Search (SEO)**, **Answer (AEO)**, **the Ads Engine**, and **the Booking Engine**. Never write "Sales Engine Optimization" or "Ads Engine Optimization," and never give the Ads or Booking engines an acronym. The Booking Engine is always listed first — it is the wedge.

## D7 · Proof and numbers {#proof}

Every **performance claim** published on techeo.com must be:

1. **Real**, from Homets' ServiceTitan or from a client's own data with written approval.
2. **Dated**, with its measurement window beside it. A before-and-after pair shows both windows; `[HOMETS_WINDOW]` is entered as "Before: {period}. After: {period}." (`03` #proof).
3. **Rounded toward the less flattering value.** A higher-is-better "after" rounds down; its "before" rounds up. A lower-is-better "after" (untouched share, minutes to first call) rounds up; its "before" rounds down. Changes are computed from unrounded values, then rounded the same way. **A nonzero value never rounds to zero.**
4. **A share, rate, median, duration, or change — never an absolute volume, count, or dollar amount.** Publish booking rate 52% → 71%. Never publish Homets' revenue, call volume, job counts, or pricebook contents; Homets' local competitors can read the site too. The untouched tokens are a *share* of marketplace leads. `[HOMETS_SPEED_TO_LEAD_MEDIAN]` is the median time to the **first call placed** — label it that way, not "to a human voice," unless the data measures a conversation.

Illustrative figures — the calculator's worked example, the audit's rounding illustration — are allowed when the word "Example" is in the same sentence. The Gap Statement and calculator outputs are estimates of loss, so they round **down** (`08`, `techeo.audit`).

**v1 does not ship with placeholder numbers.** If the Week 1 baseline pull has not happened, the proof section is **omitted**, not faked. No testimonials in v1 (none exist yet), no client logos, no "as seen in," no counters, no "trusted by 100+ contractors." And 70% is Homets' **standard**, not a published result, until the baseline says otherwise (`techeo.positioning` #pitch).

## D8 · Founder, affiliation, voice {#voice}

- The founder is named **Blake [FOUNDER_SURNAME]**, with a real photograph. Techeo is "we." The founder story section is in the first person, signed by Blake.
- **Never use gendered pronouns for the founder.** Write "Blake," "the founder," or first person.
- **Homets Air and Heat is named explicitly**, with the affiliation disclosed without being asked: owned by the same person, based in [HOMETS_METRO]; no clients within [EXCLUSION_RADIUS_MILES] miles of Homets; one client per market per trade. The disclosure appears on the homepage (`#operator`) and in the footer on every page, word for word as `10` #affiliation fixes it.
- **The public exclusion must never be narrower than the policy.** `techeo.guardrails` #coi excludes Homets' whole media market (DMA) plus a radius. Before launch, either set [EXCLUSION_RADIUS_MILES] large enough to cover the DMA, or add "or anywhere in the [HOMETS_METRO] market" to every instance in one change (`03` open question 8).
- **Voice:** an operator talking to peers. Plain, specific, numerical. The register of `content/playbooks/` — declarative, short, no hedging on standards. US English.
- **Banned words:** guarantee / guaranteed, unlock, supercharge, leverage (as a verb), cutting-edge, game-changer, seamless, world-class, revolutionize, synergy, 10x, "growth hacking," "crush it." Results are *targets*, never promises (`techeo.legal`).

## D9 · Media {#media}

Real photographs and footage only. No stock photos of people, no AI-generated people, no AI-generated "job site" images. Diagrams and illustrations are fine.

Homets imagery needs three things: the Homets → Techeo license in `techeo.legal` must cover brand and photo use; every identifiable Homets employee must sign a likeness release; and **no customer information may be visible.** Screens are **staged or opaquely redacted — never blurred**, because blurred or pixelated text can be recovered (`05` #pii).

**v1 minimum: a founder portrait.** Operational photos (CSM desk, a truck) are wanted but optional. The dispatch board is the riskiest photo on the site — it shows customer, technician, and job-count data — and is optional in v1. If the Homets license is not signed by Nov 20, ship the founder portrait alone, shot away from Homets premises (`05`). Owned by `05`; releases by `10`.

## D10 · Brand in v1 {#brand}

**Wordmark only** — `techeo.plan90` rules out a logo project in Phase 1. The visual direction is an *operator's field manual*: utilitarian, high-contrast, numbers-forward. Not SaaS gradients, not HVAC red-and-blue flames and snowflakes. **Mobile-first** — owners read between jobs, on a phone. WCAG 2.2 AA. Owned by `05`.

## D11 · Eat our own cooking — lead handling {#own-cooking}

Techeo sells answer rate and speed to lead. **Its own inbound must visibly meet the standard it sells**, because prospects will test it.

- **Phone:** a public number, [TECHEO_PHONE], answered live by a contracted virtual receptionist on **Techeo's own account** (not Homets'), scripted to book discovery calls into the founder's calendar. Full spec: from launch. Lean v1: from the Feb 1 flip to OPEN; before that, no phone number is published (D16).
- **Forms:** an instant automated confirmation — except for submissions flagged by the bot checks, which get a live callback but no automated email, so strangers' inboxes can't be flooded (`06`). Then a live callback inside the SLA. **In WAITLIST the callback confirms the reservation; no discovery call is booked.**
- **SLA target:** 15 minutes during business hours (8:00–18:00 [TZ], Monday–Friday); by 10:00 the next business day outside them. The clock stops at the first dial, and `08` #sla defines which events count.
- **Publishing the 15-minute figure** requires four consecutive weeks at 95% or better **and at least 20 eligible events** across them. Blind mystery-shop submissions — ones the receptionist cannot tell from real leads — count. Until then the site says "same business day, or by 10 a.m. the next business day if you reach us after 6 p.m., on a weekend, or on a holiday."
- **Market availability is never answered automatically.** A taken market goes to manual review with no reason shown, so nobody can map client markets by trying ZIP codes (`08`).
- **Written channel:** one monitored requests address, shown only on `/privacy` and `/accessibility`, so rights requests and deaf or hard-of-hearing visitors never depend on the phone (`10`).
- **Founder calendar:** discovery calls and readouts are bookable only outside the protected blocks in `techeo.guardrails` — no weekday slots before 10:00, none on Monday morning, none on Friday afternoon. Discovery slots close whenever the site is in WAITLIST.
- **Self mystery-shop monthly:** the receptionist line and a form, scored against the audit rubric in `techeo.audit` and logged.

Owned by `08`.

## D12 · Measurement stance {#measurement}

GA4, Google Search Console, and Bing Webmaster Tools. No session-replay or heatmap tools in v1. The site's outcome metrics are **qualified audit reservations and purchases, qualified teardown requests, and speed-to-lead compliance** — not traffic. Rankings and impressions are diagnostic inputs, never outcomes (`techeo.metrics`). Owned by `09`.

**Consent posture** — whether GA4 honors Global Privacy Control and whether any banner is needed — is owned by `10`, and is settled with counsel by Mon Nov 16, 2026. D14's ban on cookie walls stands either way.

## D13 · Search and answer engines {#search}

Every word of content is in server-rendered HTML. **AI search, answer, and training crawlers are all allowed** (`07` #robots gives the reasoning); Cloudflare's bot and AI-crawler settings must match robots.txt, since a network-level block overrides it. The 12-prompt test from `techeo.audit` is adapted to Techeo's own target queries and run monthly. No programmatic city pages for Techeo itself, no bought links, and no AI-spun articles.

`07` owns search-tool setup (Search Console and Bing verification, sitemap submission, IndexNow); `09` owns the data and reporting from them.

## D14 · Out of scope, v1 and v2 {#out-of-scope}

Client login or reporting portal (trigger: 8 clients). AI chat widget — a bot that fails to book undermines the entire pitch. Popups, exit-intent, countdown timers, fake scarcity, cookie walls. Paid traffic to the site. A logo or brand-identity project before v2. Any page advertising the Attribution Layer.

## D15 · Hours, authorship, money {#constraints}

Phase 1 caps Techeo at 10–12 hours a week (`techeo.guardrails`), and those weeks are already allocated in `techeo.plan90`. **The founder authors every word — writes or dictates it — and approves it.** For v1, `03` is ready-to-paste copy the founder edits and approves. For v2 and v3, a contract writer may draft from the founder's interviews. The build is AI-assisted or goes to a freelancer.

`11` shows the hours arithmetic and the full cost. `techeo.financials` originally budgeted the website at $0; its correction note now carries both options from D16.

## D16 · Lean v1 or full spec {#lean-v1}

**The full spec** is everything in `01`–`12`: on-site Stripe Checkout behind `form_audit_qualify`, a receptionist from launch with automated callbacks, a queued-and-retried backend with a separate operations worker, automated email sequences, ClickUp tasks created by API, per-state calling-hours logic, and CI with performance and schema budgets. It is the right destination. `11` #budget costs it at **$20,920 pre-revenue at plan** ($11,583 – $39,788) and **~$1,274 a month** from Feb 1.

**Lean v1** keeps everything a visitor sees and defers infrastructure until revenue exists. It is the recommended default.

| | Lean v1 | Deferred until |
|---|---|---|
| **Pages and copy** | Every v1 page in `03`, in WAITLIST, with `05`'s design system | — |
| **Search** | `07`'s titles, metas, JSON-LD, robots.txt, sitemap, llms.txt | — |
| **Measurement** | GA4 with `09`'s key events; Search Console; Bing | Looker dashboards: the first OPEN month |
| **Forms** | One endpoint for `form_audit_reserve`, `form_teardown_request`, and `form_calculator_email`: server validation, Turnstile plus honeypot, stored in Supabase, one confirmation email, and an alert to the founder. Consent checkboxes exactly as `10` requires | — |
| **Monitoring** | A daily synthetic submission of every form through to Supabase and email — the cheapest insurance against a silent failure | The operations worker, queue, and retries: first retainer signed, or 20+ leads a month |
| **Calculator** | The `#calculator` island, `08`'s logic | — |
| **Selling the audit** | OPEN state: "Book a 30-minute call about an audit" → scheduling link. The audit is sold on the call and paid by **Stripe invoice** (`08` F10) — where `techeo.gtm`'s sales process already puts it | On-site Checkout and `form_audit_qualify`: two OPEN windows where prospects ask to buy without a call |
| **Phone** | None published in WAITLIST. Reservations get a same-business-day reply from the founder, in allowed hours | Receptionist and public number: Mon Feb 1, 2027 |
| **Email after confirmation** | Written personally by the founder from Workspace, including the Feb 1 "we're open" notice | `08`'s automated sequences: the first OPEN window |
| **Pipeline** | ClickUp tasks entered by hand | API task creation: 20+ leads a month |
| **CI** | Build, link check, axe, and the placeholder check | Lighthouse and schema budgets in CI: v2. Run both by hand before launch |
| **Photography** | Founder portrait, taken by someone the founder knows | Photographer: v2 |
| **Legal pages** | Reviewed by counsel in the same engagement as the MSA | — |

**Nothing in `10` #launch-gate is deferred.** Where lean v1 drops a feature, it drops the compliance work that feature needed too. With no public phone before Feb 1, the calling-hours and recording tables are needed by Feb 1 instead of Nov 20.

**Estimated lean cost.** These are estimates, not bids — get three:

| Item | Estimate |
|---|---|
| Builder, 45–80 hours at `11`'s $60/h plan rate | $2,700 – $4,800 |
| Counsel for the legal pages, bundled with the MSA review | ~$1,800 |
| Photography, tools, domain, Workspace through Jan 31 | $0 – $900 |
| **Pre-revenue total** | **~$4,500 – $7,500** |
| Monthly from Feb 1: receptionist, Supabase Pro, tools | ~$350 – $800 |

**The lean OPEN-state strings** — the only new copy lean v1 needs; `03` owns final wording:

- Primary CTA: "Book a call about an audit"
- Under it: "30 minutes with Blake. If the audit fits, we send an invoice; nothing is charged on the call."
- `/audit`, OPEN: the page body is unchanged; the call CTA replaces `form_audit_qualify` and Checkout.

**Decide by Fri Oct 9, 2026.** If lean: `11`'s builder bid is for the lean scope, and each deferred item carries its trigger into `11` #register.

---

## Canonical names {#names}

Every website document uses these exact identifiers.

### URLs

| Release | URLs |
|---|---|
| v1 | `/` · `/audit` · `/teardown` · `/thanks/audit-reserved` · `/thanks/audit-purchased` (full spec only) · `/thanks/teardown` · `/privacy` · `/terms` · `/accessibility` · 404 · `/robots.txt` · `/sitemap-index.xml` · `/sitemap-0.xml` · `/llms.txt` · the IndexNow key file `/<key>.txt`, if `07` needs one |
| v1, function-rendered | `/api/email/unsubscribe?t=<token>` · `/api/consent/phone-reserve-confirm?t=<token>` · `/api/files/<token>` — noindex, reached only from emails, never linked from the site (`02`, `03` #email-links, `06`) |
| v1.1 | `/insights` · `/insights/<slug>` · `/insights/page/<n>` |
| v2 | `/engines` · `/engines/booking` · `/engines/search` · `/engines/answer` · `/engines/ads` · `/pricing` · `/case-studies` · `/case-studies/<slug>` · `/calculator` · `/about` · `/markets` · `/partners` · `/thanks/market-check` · `/thanks/partner-referral` |
| v3 | `/glossary` · `/glossary/<term>` · `/for/hvac` · `/for/plumbing` · `/resources` · `/resources/<slug>.pdf` |

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

Plus a header, a season banner shown only in WAITLIST, and a footer carrying the disclosure. **These ids belong to the homepage and are never reused on another page** (`02` #fragments).

### Forms

| Id | Where | State |
|---|---|---|
| `form_audit_reserve` | `/audit`, `#start` | WAITLIST. Carries the consent checkbox `10` requires, because a reservation may be called more than three months after it was made |
| `form_audit_qualify` | `/audit` — runs **before** Stripe Checkout, so we never take $1,500 from someone we would decline | OPEN, **full spec only** (D16) |
| `form_teardown_request` | `/teardown` | both states; in WAITLIST, queued for the next opening |
| `form_calculator_email` | `#calculator`, later `/calculator` | both |
| `form_market_check` | `/markets` | v2 |
| `form_partner_referral` | `/partners` | v2 |

### Placeholders

Only facts the founder alone can supply are placeholders. Use exactly these tokens; any new metric follows the `[HOMETS_<METRIC>]` pattern (for example `[HOMETS_CSM_DOC_COUNT]`, the published CSM document count that `techeo.positioning` claim 2 relies on).

`[FOUNDER_SURNAME]` · `[HOMETS_METRO]` · `[EXCLUSION_RADIUS_MILES]` · `[TZ]` · `[TECHEO_PHONE]` · `[TECHEO_POSTAL_ADDRESS]` · `[TECHEO_STATE]` · `[HOMETS_BOOKING_RATE_FROM]` · `[HOMETS_BOOKING_RATE_TO]` · `[HOMETS_ANSWER_RATE]` · `[HOMETS_UNTOUCHED_FROM]` · `[HOMETS_UNTOUCHED_TO]` · `[HOMETS_SPEED_TO_LEAD_MEDIAN]` · `[HOMETS_WINDOW]` · `[HOMETS_CSM_DOC_COUNT]`

- `[TECHEO_POSTAL_ADDRESS]` must be a valid physical postal address under CAN-SPAM: a street address, a USPS PO box, or a private mailbox at a USPS-registered commercial mail receiving agency. A registered agent's address qualifies only if the agent confirms in writing that it accepts and forwards business mail. Never a home.
- `[HOMETS_WINDOW]` is entered as "Before: {period}. After: {period}." (D7).
- Structured facts the build needs but that aren't copy — the LLC formation date, the founder's LinkedIn URL, the address split into street, city, region, and ZIP — are **build-time config values** in `06`'s `site.ts`, not tokens.

### Key dates

| Date | Event |
|---|---|
| Mon Sep 28, 2026 | Week 1 — domain preflight |
| **Fri Oct 9, 2026** | **Decide lean v1 or full spec (D16);** sign the builder |
| Fri Nov 6, 2026 | Floor checkpoint (D1) |
| Mon Nov 16, 2026 | Counsel's sign-off on the consent texts and the analytics posture |
| Fri Nov 20, 2026 | **v1 live**, WAITLIST / `season` |
| Mon Feb 1, 2027 | Flip to OPEN; outbound begins; lean v1's receptionist starts |
| Sat May 1, 2027 | Flip to WAITLIST / `season` |
| Mon Aug 16, 2027 | Gate check for the September opening (D2); v2 scope freeze |
| Tue Sep 7, 2027 | **v2 live**; flip to OPEN if the gate check passed |
| Wed Dec 1, 2027 | Flip to WAITLIST / `season` |

In later years the fall opening follows the rule — the day after Labor Day — not the 2027 date: Tue Sep 5, 2028.

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
| `07-seo-and-aeo.md` | `techeo.web.search` | Query map, structured data, robots and llms.txt, search-tool setup, AEO measurement, off-site entity work |
| `08-conversion-and-leads.md` | `techeo.web.conversion` | CTA hierarchy, form field definitions, qualification logic, calculator logic, flows, SLA, receptionist, email sequences, pipeline |
| `09-analytics.md` | `techeo.web.analytics` | Event taxonomy, analytics configuration, UTMs, dashboards, search-tool reporting, the site scorecard |
| `10-compliance.md` | `techeo.web.compliance` | Legal page requirements, consent language and posture, disclosures, accessibility compliance, trademarks, releases, retention |
| `11-build-and-launch.md` | `techeo.web.build` | Schedule, hours, budget, QA and launch checklists, runbooks, maintenance, the open-decision register |
| `12-content-roadmap.md` | `techeo.web.content` | Editorial standards, article briefs, calendar, case-study process, glossary list |

## House style {#style}

Same conventions as `techeo/` and `content/`: YAML frontmatter; a bold thesis line under the H1; `{#anchor}` on every H2; tables where they help; "Done when" or acceptance criteria wherever work is specified. Real copy, never lorem ipsum. Every document ends with `## Open questions for the founder {#open-questions}` — decisions only the founder can make, each with a recommended default.

## Revision log {#revisions}

**v2, Sep 25, 2026.** Resolved the challenges the section writers raised against v1 of this brief:

- D16 is new: the lean-or-full decision.
- D1: the v2 date is fixed and its scope flexes; the floor protocol and the Aug 16 gate check are added.
- D2: dates are stated as rules; capacity copy is honest; `AUDIT_CAPACITY` and the gate check are added as triggers.
- D3: JavaScript is optional, not absent; the host is to be re-decided; a transactional sender is added.
- D4: accounts are completed. D5: redirects go to same-topic pages only.
- D6: the credit window starts at the readout; the refund policy is flagged as open.
- D7: conservative-direction rounding, allowed metric types, and labeled examples.
- D8: the exclusion wording must match the policy.
- D9: redaction, not blur; the photo minimum is lowered.
- D11: the bot-flag exception, the WAITLIST callback, the event minimum, market-check privacy, and a written channel.
- D12: qualified teardowns, and a named owner and date for the consent posture.
- D13: training crawlers and the search-tool split.
- D15: authorship.
- Names: the missing URLs are added; placeholder formats and build-time values are defined.
