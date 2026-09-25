---
id: techeo.web.tech
title: Technical Architecture — Build, Host, Secure, Operate
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, architecture, astro, cloudflare, forms, supabase, stripe, security, dns, email, ci, monitoring, season-state]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.delivery, techeo.financials, techeo.legal, techeo.guardrails, techeo.audit, techeo.plan90, techeo.metrics]
order: 6
---

# Technical Architecture — Build, Host, Secure, Operate

**techeo.com ships as prerendered HTML on Cloudflare, with a few small form endpoints behind it. It is built so that a crawler with JavaScript off reads every word, no lead is lost when a vendor fails, and one part-time founder can flip, deploy, and roll it back in minutes.**

## Scope and decisions at a glance {#scope}

This document owns the stack, repository, hosting, forms backend, data schema, integrations, performance, security, CI, DNS, monitoring, the domain preflight mechanics, the season-flip mechanics (D2), and the mechanics behind opt-out links, consent confirmations, and deliverable links. Other topics are only referenced, never restated:
- **Fields, qualification logic, the SLA, and email content:** `08-conversion-and-leads.md` (`techeo.web.conversion`).
- **URLs and indexing:** `02-information-architecture.md` (`techeo.web.ia`).
- **Markup and robots.txt:** `07-seo-and-aeo.md` (`techeo.web.search`).
- **GA4 configuration:** `09-analytics.md` (`techeo.web.analytics`).
- **Retention periods and consent wording:** `10-compliance.md` (`techeo.web.compliance`).
- **Schedule, budget, and the launch runbook:** `11-build-and-launch.md` (`techeo.web.build`).

| Area | Decision |
|---|---|
| Framework | Astro 7, static output, Tailwind CSS 4, strict TypeScript, no UI framework |
| Hosting | Cloudflare Pages, built and tested in GitHub Actions, then uploaded (Direct Upload). Code runs only under `/api/*`. One cron Worker with three triggers. |
| Lead capture | D1 outbox, then Techeo's Supabase, then email and ClickUp. **Captured if any one of three stores accepts it.** |
| Spam | Turnstile, a honeypot, D1 rate limits, one WAF rule |
| Payments | A server-created Stripe Checkout Session after `form_audit_qualify` passes; card, or ACH with instant verification |
| Scheduling | Cal.com Free, linked out |
| Email | Workspace for people; Resend on `notify.techeo.com` for site mail |
| Season flip | One GitHub workflow commits and deploys in under five minutes |
| Opt-outs and consent confirmations | Signed per-recipient links, RFC 8058 one-click, one suppression list synced to Resend and ClickUp |
| Deliverables | Teardown walkthroughs on R2 behind 90-day signed links, deleted at 120 days; readouts stay in engagement storage |
| Approvals | The founder is code owner of every path that renders words; consent and legal changes need a new version and counsel's sign-off |
| Code host | A private repository on GitHub Team, so rulesets, required checks, and code-owner review are enforced |
| Monitoring | Better Stack, Healthchecks.io, a daily synthetic submission of every form |

Third-party facts were checked against September 2026 search results. **Verify** marks a secondary source or a dashboard label that may change; `11` runs the verification pass before launch.

## Stack decision {#stack-decision}

| Criterion | **Astro (chosen)** | Next.js static export | Vite + React SPA (this repo) | Lovable | Webflow | WordPress |
|---|---|---|---|---|---|---|
| Every word in the raw HTML crawlers fetch | Yes; ships no JavaScript unless a component asks for it | Yes, but every page then loads React to become interactive | No: an empty `<div id="root">` until JavaScript runs | Generates a Vite + React SPA, same problem (D3) | Yes | Yes |
| Speed on a mid-range phone | Best: no JavaScript on a baseline page | A React runtime on every page | Content waits for the script bundle | As the SPA | Fair; ships the platform's own scripts | Theme- and plugin-dependent |
| Cash cost | $0 | $0 | $0 | A paid plan to keep editing (verify) | A monthly site plan (verify) | Hosting plus plugins |
| Founder familiarity | New `.astro` syntax; same TypeScript, Tailwind, zod, Vitest | React: familiar | Most familiar | Familiar (this repo uses it) | New | New |
| Speed of building with AI help | High: small surface, content in Markdown | High | High | Highest for a first draft, lowest for controlled revisions | Low: edits are visual, not reviewable code | Medium |
| Content as Markdown in git | Built in, checked against a schema | Needs extra setup | Custom code (as `src/lib/content.ts` does) | Possible | No (Webflow's CMS) | No (a database) |
| Lock-in | Low: MIT license, output is plain files | Low to medium | Low | Medium | High | Medium |

**Decision: Astro, confirming D3.**

1. **The pitch is AEO.** D3 notes that many AI crawlers read raw HTML. Astro emits complete HTML, and CI proves it on every build.
2. **Only the calculator needs JavaScript.** JavaScript is opt-in, so every other page ships none of its own.
3. **Content is data.** Articles, case studies, and glossary entries are schema-checked Markdown with `techeo/`'s frontmatter conventions.
4. **This repo is tied to Lovable and Homets' Supabase project.** D4 needs a clean, Techeo-owned repository anyway.

**Versions and hosting (verify at setup).**
- **Astro:** version 7 needs Node 22.12 or later; pin Node 24 LTS. `astro@7.3.5` was current on Sep 24, 2026.
- **Ownership:** Astro's team joined Cloudflare on Jan 16, 2026. Astro stays MIT-licensed, and this build uses no adapter.
- **Pages or Workers:** Cloudflare now recommends Workers static assets for new projects (verify). This document follows D3's choice of Pages, and keeps a later move mechanical: all backend logic sits in host-agnostic `server/`.

## Hosting and runtime {#hosting}

```
Browser ─HTTPS─▶ Cloudflare zone techeo.com (DNS, TLS, HSTS, redirects, one WAF rate rule)
                 ├─ static files: Pages project "techeo-web" ← dist/ uploaded by GitHub Actions
                 └─ /api/* → Pages Functions
                       ├─ D1 "techeo-outbox"     capture log, job queue, rate counters, quarantine
                       ├─ Supabase "techeo-prod" system of record (schema app)
                       ├─ R2 "techeo-deliverables" teardown walkthroughs, 120 days
                       ├─ Resend · ClickUp · Stripe · Turnstile siteverify   (REST over fetch)
Worker "techeo-ops" (cron) ─▶ /api/internal/sla-timers every min · /api/internal/drain every 10 min
                              · daily synthetic run and deliverables sweep
Stripe · Cal.com · ClickUp · Resend webhooks ─▶ /api/{stripe,cal,clickup,resend}/webhook
Receptionist call events ─▶ /api/receptionist/call-event
Email recipients ─▶ /api/email/unsubscribe (link, and RFC 8058 one-click) · /api/consent/phone-reserve-confirm
Teardown recipients ─▶ /api/files/<token> (walkthrough, captions, scored sheet) ◀─ R2 "techeo-deliverables"
GitHub Actions ─▶ build, test, deploy, season flips (then /api/internal/season-applied), migrations, backups
```

- **Plain `fetch` calls to each vendor's REST API; no Stripe or Supabase SDK in the bundle.** That keeps each request inside the Workers Free limit of 10 ms CPU (verify). If end-to-end tests exceed it, pay for Workers Paid ($5/month) rather than rewrite.
- **Page views never run code.** `public/_routes.json` includes only `/api/*`. The free allowance of 100,000 requests a day (verify) is spent on submissions, not traffic.
- **Direct Upload, not Git integration.** GitHub Actions builds `dist/` once, tests that exact output, and runs `wrangler pages deploy`, so what ships is what was tested. A Pages project can't change upload method after it is created, so create it with `wrangler pages project create techeo-web --production-branch main`.
- **A separate Worker for scheduled jobs.** Pages Functions can't run on a schedule. `techeo-ops` holds three Cron Triggers (Free allows five per account; verify) and calls `/api/internal/*` with a bearer token. All integration code and secrets stay in the Pages project.
  - `* * * * *`: the SLA timers (`#notifications`), on their own trigger as `08` #pipeline requires, so a reminder can't fire after the due time.
  - `*/10 * * * *`: the drain.
  - `10 11 * * *`: the daily synthetic run (`#monitoring`), then the deliverables sweep (`#deliverables`), and on the 1st of the month the expired-link check.

  The every-minute trigger adds about 1,440 Worker runs and 1,440 Function requests a day, well inside the daily allowance above. A per-lead alarm (a Durable Object), which `08` also allows, was not chosen: it adds a second kind of Worker for no gain at this volume.

**Done when:** loading `/` runs no Function (confirmed in Pages metrics), and `/api/health` returns `200` with the build SHA.

## Repository {#repo}

The repository is `techeo-web`, private, under the Techeo LLC GitHub organization on GitHub Team (open question 1). It is created in Week 2, once the LLC filing receipt exists (D3, D4); `11` schedules it.

```
techeo-web/
├── .github/  workflows/{ci,deploy,season,db,nightly,weekly,claims,approval-scope}.yml · CODEOWNERS · season-approvers.yml
│             dependabot.yml · pull_request_template.md (the counsel sign-off line)
├── astro.config.mjs · wrangler.toml · package.json · pnpm-lock.yaml · pnpm-workspace.yaml · .npmrc (registry and auth only) · .nvmrc (24)
├── lighthouserc.cjs · .size-limit.cjs · .pa11yci.json · .htmlvalidate.json · lychee.toml · playwright.config.ts
├── SEASON_LOG.md                  # every flip: when, who, from → to, why
├── data/                          # Census ZCTA gazetteer, ZCTA-to-county file, county-to-IANA-zone table (public data),
│                                  # area-code table: state and zone per NANP area code (08 #unanswered); free-mail domains (08 F9)
├── docs/  preflight.md · runbooks/{flip,flip-manual,rollback,restore,rotate-secrets,live-rehearsal}.md
├── functions/api/                 # Pages Functions: thin route files only
│   ├── _middleware.ts             # security headers, noindex, no-store, method guard
│   ├── health.ts · csp-report.ts
│   ├── forms/{audit-reserve,audit-qualify,teardown-request,calculator-email}.ts   (v2: market-check, partner-referral)
│   ├── stripe/webhook.ts · cal/webhook.ts · clickup/webhook.ts · resend/webhook.ts · receptionist/call-event.ts
│   ├── email/unsubscribe.ts · consent/phone-reserve-confirm.ts   # signed-token links (#optout)
│   ├── files/[[path]].ts          # teardown deliverables from R2 (#deliverables)
│   ├── staff/{intake,opt-out,deliverable,seeds}.ts   # behind their own Access applications (08 F1, #sla; #optout; #deliverables)
│   └── internal/{drain,sla-timers,synthetic-verify,season-applied,ops-alert,deliverables-sweep}.ts
├── scripts/  claims-export.ts     # the ledger sheet → src/content/claims.json (#repo)
├── server/                        # host-agnostic backend: pipeline.ts, schemas/ (one per form, plus claims.ts),
│                                  # spam/, outbox.ts, jobs.ts, sla.ts, geo.ts, render.ts, headers.ts, notify/,
│                                  # tokens.ts (signed links), pages/ (the unsubscribe, confirm, and file pages),
│                                  # integrations/, generated/ (gitignored: excluded-zips.json, zone and zone-edge sets)
├── ops/                           # techeo-ops Worker
├── public/  _redirects (02's contents) · _routes.json · favicons · og/ · brand/ (stable, unhashed logo, 512 × 512, for 07)
│            downloads/founder-portrait.jpg (EXIF-free, stable URL for 07)
├── src/
│   ├── config/  site.ts · routes.ts (02's route manifest) · offers.ts (D6) · messages.ts (03 microcopy) · consent.ts (10)
│   │            calling-hours.ts (10 #quiet-hours: state windows, keyed by calling_rule_version)
│   ├── content.config.ts · content/{insights,case-studies,glossary}/ · content/claims.json (generated from 10's ledger)
│   ├── pages/   index · audit · teardown · thanks/{audit-reserved,audit-purchased,teardown} · privacy · terms
│   │            accessibility · 404 · robots.txt.ts · llms.txt.ts   (later releases per 02)
│   │            og/insights/[slug].png.ts (v1.1: article images, Satori + resvg per 05; verify on the installed Astro)
│   ├── layouts/ Base.astro + one per 02 template (T1–T11)
│   ├── components/ chrome/ · cta/ (SeasonCta, PhoneLink) · home/ (one per homepage section) · forms/ · seo/ · media/
│   ├── lib/ season.ts · tokens.ts · format.ts · dates.ts
│   ├── scripts/ calculator.ts · form-enhance.ts · analytics.ts (analytics-core)
│   │            analytics-interact.ts · analytics-forms.ts · analytics-thanks.ts · vitals.ts (post-load, 09 #tag-loading)
│   └── styles/global.css (Tailwind 4, 05's tokens) · assets/{fonts,photos}/
├── supabase/  migrations/ · tests/ (pgTAP) · seed.staging.sql
└── tests/  unit/ · build/ (checks on dist/) · e2e/ · token-allowlist.yml · schema-allowlist.txt
```

**Why GitHub Team.** On GitHub Free, a private repository gets no rulesets, no branch protection, no required status checks, and no environments or environment secrets; GitHub shows rulesets as "not enforced" until the organization upgrades. GitHub Team (about $4 per member a month; verify) enforces all of them on private repositories. Required reviewers on an environment still need GitHub Enterprise Cloud for a private repository (verify), so production approvals come from code-owner review instead, below. Making `techeo-web` public instead is open question 1's alternative.

**Rules for `main`** (two GitHub rulesets):
- Every change arrives by pull request, and every `ci.yml` check must pass, plus `consent-guard` and `approval-scope` (below).
- **Code-owner review is required.** `CODEOWNERS` assigns the founder's account to:
  - `supabase/migrations/**`, `.github/**`, `src/config/site.ts`, and `src/config/calling-hours.ts`, so no migration, workflow, season change, or calling window (`#notifications`) merges without the founder's approval;
  - every path that puts words, prices, or promises in front of a visitor or a lead, because the founder approves every word (D15): `src/config/{offers,consent,messages}.ts`, `src/content/**` (including `claims.json`), `src/pages/**` (including `robots.txt.ts` and `llms.txt.ts`), `src/components/**`, `src/layouts/**`, `server/notify/**` (every email template), `server/pages/**`, and `public/_redirects`.
- **Every pull request gets a copy diff.** CI extracts the visible text of every built page and rendered email template and posts the difference from `main` as a comment, so the founder reviews words, not code.
- **`consent-guard`: consent and legal texts stay frozen after counsel signs** (`10` #consent-texts; `11` L3). It fails a pull request that changes `src/config/consent.ts` or the `/privacy`, `/terms`, or `/accessibility` page unless:
  1. every changed consent text, and a changed privacy policy or terms page, carries a new version id (`reserve-v2`, `privacy-v2`); a changed text under an existing id fails;
  2. a migration seeds each new id in `app.consent_versions`, with the `sha256` of the text in `consent.ts`;
  3. the pull request body carries `Counsel-Signoff: Compliance/counsel/<file>`, naming counsel's written approval. The check can't read Drive, so the founder's code-owner review confirms the file exists.

  An `/accessibility` change has no version id, so it needs item 3 only.
- **`approval-scope`: a named backup approver** (open question 17). The kill-switch enforcer is listed in `CODEOWNERS` beside the founder on the content paths, never on `consent.ts`, `offers.ts`, the legal pages, `site.ts`, migrations, or workflows. When the enforcer is the only approver, the check passes only if the copy diff removes words and adds or changes none (a withdrawn claim, a wrong sentence, a broken section), or if it is empty (a security or dependency fix). Such a merge is labeled `post-hoc-review`, and an issue assigned to the founder opens at once. The founder reviews it within 2 business days and reverts or keeps it. Every published word is still one the founder approved.
- History stays linear; no force-pushes.
- **Who can skip what.** The `techeo-season-bot` GitHub App (`#season-state`) is the one bypass actor on both rulesets: "checks" (pull request, required checks, linear history) and "review" (code-owner review). The "review" ruleset also lets the founder bypass it for pull requests only, because GitHub never counts an author's approval of their own pull request and the founder writes the copy (D15). The founder's own pull requests still pass every check.
- **Production runs only from `main`.** Production deploys and production migrations use a `production` environment whose deployment branches are limited to `main` (available on Team; verify), so the production secrets are usable only after a merged, approved pull request.

**Content collections** mirror the `techeo/` frontmatter and add `04`'s fields:

```ts
// src/content.config.ts
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const doc = { id: z.string().regex(/^techeo\.(insight|case|term)\.[a-z0-9-]+$/), company: z.literal('techeo'),
  owner: z.literal('blake'),
  status: z.enum(['draft', 'in-review', 'published', 'archived']), version: z.number().int().positive(),
  last_reviewed: z.coerce.date(), review_cadence_days: z.number().int().positive(), tags: z.array(z.string()) };
const source = z.object({ label: z.string(), url: z.string().url().optional(), date: z.coerce.date(),
  kind: z.enum(['homets-servicetitan', 'client-servicetitan', 'public', 'techeo']), claimId: z.string().optional() })
  .refine(s => !s.kind.endsWith('servicetitan') || s.claimId, 'ServiceTitan figures need a claims-ledger id (10)');
export const collections = {
  insights: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/insights' }),
    schema: z.object({ ...doc, title: z.string().max(50), shortTitle: z.string().max(40), answer: z.string().max(200),
      description: z.string().min(120).max(155), published: z.coerce.date(), updated: z.coerce.date().optional(),
      updatedNote: z.string().optional(), author: z.literal('blake'), sources: z.array(source).min(1),
      related: z.array(reference('insights')).default([]), claim: z.enum(['1', '2', '3']).nullable() }) }),
  'case-studies': defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
    schema: z.object({ ...doc, client: z.string(), trade: z.enum(['hvac', 'plumbing', 'both']), metro: z.string(),
      engagement: z.enum(['booking-sprint', 'demand-engine']), relationship: z.enum(['homets', 'design-partner', 'paying']),
      baselineSignedOn: z.coerce.date(), beforeWindow: z.string(), afterWindow: z.string(),
      metrics: z.array(z.object({ name: z.string(), from: z.number(), to: z.number(),
        unit: z.enum(['pct', 'pct-points', 'minutes', 'share']), claimId: z.string() })).min(2),   // no counts or dollars (D7)
      engines: z.array(z.enum(['booking', 'search', 'answer', 'ads'])).min(1),
      approval: z.object({ name: z.string(), title: z.string(), date: z.coerce.date() }), evidencePackRef: z.string() })
      .refine(c => c.approval.date >= c.last_reviewed, 'Approval must postdate the last change (04)') }),
  glossary: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/glossary' }),
    schema: z.object({ ...doc, term: z.string(), acronym: z.string().optional(), hasPage: z.boolean(),
      definition: z.string().refine(d => d.split(/\s+/).length <= 40, '≤40 words (04)'),
      engine: z.enum(['booking', 'search', 'answer', 'ads']).optional(), target: z.string().nullable(),
      related: z.array(reference('glossary')).default([]) }) }),
};
```

- **What builds.** Only `status: published` entries build in production, which replaces `04`'s `draft` flag. Preview builds also include `in-review`.
- **The depth rule.** CI enforces `04`'s rule: `hasPage: true` requires 250 or more words and an H2 "A worked example".
- **The sitemap** (`02` #sitemap). `@astrojs/sitemap` in `astro.config.mjs`: `filter` keeps only routes whose `routes.ts` entry has `inSitemap: true`, and `serialize()` sets each `lastmod` from that entry's `updated` date. The site-wide `lastmod` option is never set. CI checks the parity (`#ci`).
- **Article images (v1.1).** `og/insights/[slug].png.ts` renders each article's Open Graph image at build to `05`'s spec: 8-bit sRGB PNG, opaque, 250 KB or less. CI fails an image over the limit.
- **Claims.** Every `claimId`, in a source or a case-study metric, and every `CLAIMS` entry in `site.ts` resolves through `src/content/claims.json`, generated from `10` #claims' ledger. Case-study figures pass through the same ledger rule as the `HOMETS_*` values (D7). The rules follow this list.
- **Everything else about content belongs to `12`.**

**From the ledger to `claims.json`.** The ledger is a sheet in Drive, and the build reads only the generated file.
- **Export.** `scripts/claims-export.ts` reads the sheet through the Google Sheets API, as a Techeo Workspace service account with Viewer access to that one sheet (`GOOGLE_CLAIMS_SA_KEY`, an Actions secret). It keeps the public fields only: `claim_id`, the public wording, type, token, published value (or "too few to report", `05`), window, source line, status, and review date. Raw values, evidence links, and approvers never reach git. Each row is validated against `server/schemas/claims.ts`, a strict zod schema: ids match `CL-\d{3}`, status is `draft`, `ready`, or `withdrawn`, and every `ready` row has a review date and every metric a window. A row that fails stops the export with its id named. The file is written sorted by id, so a diff shows only real changes.
- **Who runs it, and how it lands.** `claims.yml` runs every Monday at 06:00 UTC and on demand. The builder runs it after any ledger change (`11` #maintenance's monthly "claims-ledger refreshes"). If the file changed, the workflow opens a pull request as `techeo-season-bot`, listing each changed row in plain words. `CODEOWNERS` covers `claims.json`, so the pull request merges only with the founder's approval and after every check passes. The workflow never merges and never commits to `main`.
- **Authoring errors fail the build.** A `claimId` or `CLAIMS` entry with no row, or with a row at `draft`, fails it. Only a change can cause this, so its pull request catches it.
- **Lapses never fail a build.** A `ready` row past its review date, or a `withdrawn` row, renders as omitted under D7's omit rule, and the build logs it. Its tile renders nothing, and so does the whole `ProofStrip` when tile 1 lapses (`03` #proof). A case-study metric row, or a Markdown block wrapped in `<Claim id>`, also renders nothing. A case study left with fewer than two live metrics renders without its results section, and the alert says so. So a season flip, a security fix, or the Dec 1, 2027 automatic commit always deploys, whatever the ledger's dates.
- **Alarms, like the season's.** The first `season.yml` run of each local day emails the founder through `/api/internal/ops-alert` 30 days and 7 days before the review date of any claim the build uses. The email lists the claim id, the pages it appears on, and the ledger row to renew. The daily date-driven rebuild (`#season-state`) counts the set of live claims as a date-dependent value, so a lapse reaches production the day it happens. That run alerts the founder too: "CL-004 lapsed on Oct 12, 2027 and was removed from `/` `#proof`."

**Done when:**
- A Markdown file with a missing or wrongly typed field fails the build, with the field named in the error.
- A case-study metric whose `claimId` has no ledger row, or a `draft` one, fails the build.
- With the build date set one day past a claim's review date, the build passes, the claim's tile and text are absent from the HTML, and the alert fires. The 30-day and 7-day alarms fire in `tests/unit/claims-alarm.test.ts`.
- A ledger row with an extra column, a raw value, or a malformed id fails the export, and `claims.json` holds public fields only.

## Configuration — `src/config/site.ts` {#config}

Every build-time fact the pages render lives in this one file, and the Functions import the same file, so a page and its endpoint can't disagree about the season.

```ts
// >>> SEASON — edited only by .github/workflows/season.yml
export const SEASON_STATE: 'OPEN' | 'WAITLIST' = 'WAITLIST';
export const WAITLIST_REASON: 'season' | 'capacity' | null = 'season';
export const NEXT_OPENING = '2027-02-01';          // next OPEN window; renders "February 1"
export const CAPACITY_DATE: string | null = null;  // required when WAITLIST_REASON = 'capacity'
// <<< SEASON
export const SEASON_SCHEDULE = [                  // D2 key dates
  { on: '2026-11-20', state: 'WAITLIST', reason: 'season', nextOpening: '2027-02-01' },
  { on: '2027-02-01', state: 'OPEN', reason: null, nextOpening: '2027-09-07', auto: 'approved-pr' },
  { on: '2027-05-01', state: 'WAITLIST', reason: 'season', nextOpening: '2027-09-07', auto: 'commit' },
  { on: '2027-09-07', state: 'OPEN', reason: null, nextOpening: '2028-02-01', auto: 'with-v2-release' },
  { on: '2027-12-01', state: 'WAITLIST', reason: 'season', nextOpening: '2028-02-01', auto: 'commit' },
  { on: '2028-02-01', state: 'OPEN', reason: null, nextOpening: '2028-09-05', auto: 'approved-pr' },   // D2 recurs
  { on: '2028-05-01', state: 'WAITLIST', reason: 'season', nextOpening: '2028-09-05', auto: 'commit' },
] as const;                                        // Sep 5 and Dec 1, 2028: open question 13
export const LATE_WINDOWS = [['04-16', '04-30'], ['11-16', '11-30']] as const;   // 03 #timeline notice
export const TIMEZONE_IANA: string | null = null;  // IANA zone behind [TZ]
export const SLA_VERSION: 'A' | 'B' = 'A';          // 03's SLA line; 08 decides when B is earned
export const ANSWERING_HOURS = { days: [1, 2, 3, 4, 5], open: '08:00', close: '18:00' };   // D11
export const PROTECTED_BLOCKS = [                  // techeo.guardrails #protected, in [TZ]; the SLA timer holds founder pushes
  { days: [1, 2, 3, 4, 5], from: '00:00', to: '10:00' }, { days: [1], from: '10:00', to: '12:00' },
  { days: [5], from: '12:00', to: '24:00' } ] as const;   // plus the CSM 1:1, read from Cal.com busy times
export const AUDIT_CAPACITY = 3;                    // 08 F2: audits sold and not yet read out
export const SCHEDULING = { kickoffUrl: 'https://cal.com/techeo/audit-kickoff',
                            discoveryUrl: 'https://cal.com/techeo/discovery',
                            discoveryWeeklyCap: { default: 4, '03': 5, '04': 5 } };   // 08 open question 5
export const CONSENT_VERSIONS = {                  // 10 #consent-texts; keys into consent.ts, one id per form
  form_audit_reserve: 'reserve-v1', form_audit_qualify: 'qualify-v1',
  form_teardown_request: 'teardown-v1', form_calculator_email: 'calc-v1',
} as const;                                        // v2 adds calc-v2 (/calculator), market-v1, referral-v1
export const ENTITY = {                            // 07 #entity's Organization markup
  sameAs: [] as string[],                          // verified profile URLs only; empty omits sameAs; never hometsair.com
  foundingDate: null as string | null,             // from the LLC filing receipt (Week 2)
  postalAddress: null as null | { streetAddress: string; addressLocality: string;
    addressRegion: string; postalCode: string },   // structured [TECHEO_POSTAL_ADDRESS]; null omits address
};
export const PLACEHOLDERS = {                      // brief tokens; null renders the bracketed token
  FOUNDER_SURNAME: null, HOMETS_METRO: null, EXCLUSION_RADIUS_MILES: null, TZ: null,
  TECHEO_PHONE: null /* E.164 */, TECHEO_POSTAL_ADDRESS: null, TECHEO_STATE: null,
  HOMETS_BOOKING_RATE_FROM: null, HOMETS_BOOKING_RATE_TO: null, HOMETS_ANSWER_RATE: null,
  HOMETS_UNTOUCHED_FROM: null, HOMETS_UNTOUCHED_TO: null, HOMETS_SPEED_TO_LEAD_MEDIAN: null, HOMETS_WINDOW: null,
} satisfies Record<string, string | null>;
export const CLAIMS: Partial<Record<keyof typeof PLACEHOLDERS, string>> = {};   // token → 10's claims-ledger id
```

**Rules the build enforces** (`tests/unit/config.test.ts`, which also runs when the Functions are bundled):

1. **The state is consistent.** OPEN needs no reason. WAITLIST needs `season` or `capacity`, and `capacity` needs a `CAPACITY_DATE`. The date the banner shows (`NEXT_OPENING`, or `CAPACITY_DATE` under `capacity`) must be today or later on the build date. `season.yml`'s date alarms and holds (`#season-state`) keep that true, so no build is ever blocked by a date passing.
2. **The schedule stays ahead.** Every `nextOpening` that falls within the next 180 days must have its own OPEN row in `SEASON_SCHEDULE`. The build fails months before a missing row matters, never in launch week: the missing Sep 5, 2028 row (open question 13) starts failing on Mar 9, 2028.
3. **The entity values agree.** When `ENTITY.postalAddress` is set, `PLACEHOLDERS.TECHEO_POSTAL_ADDRESS` must be its parts joined, so the footer and the markup can't disagree.
4. **One helper renders every token.** Components, the Markdown plugin, meta tags, and JSON-LD all call `token()`. A null value renders the bracketed token itself, so the production gate in `#ci` catches it.
5. **No Homets number without a ledger entry.** A non-null `HOMETS_*` value with no `CLAIMS` entry fails the build. This is D7, enforced in code.
6. **The proof strip follows the omit rule.** `ProofStrip` renders only when `HOMETS_BOOKING_RATE_FROM`, `HOMETS_BOOKING_RATE_TO`, and `HOMETS_WINDOW` are all set and all claimed by live ledger rows (`ready` and inside their review date; `#repo`). Otherwise it renders nothing, not even its id (`03` #proof). Every other tile renders only if its own tokens are set and live.
7. **Every consent id exists.** Each value in `CONSENT_VERSIONS`, each phone and confirmation id `consent.ts` defines (`phone-reserve-v1`, `phone-reserve-confirm-v1`, `phone-book-v1`, `readout-rec-v1`), and the privacy and terms versions has a text in `consent.ts` and a seed row in `app.consent_versions` (`#data`) whose `text_sha256` matches that text. Each form posts its own id, so the rule in `10` #consent-texts' Done-when ("every form posts a `consent_version` that exists in `app.consent_versions`") holds by construction.

**Copy variables** resolve through `src/lib/season.ts`:

| Variable | Source |
|---|---|
| `{next opening}` | `NEXT_OPENING`, as words ("February 1") — the seasonal opening, used by `03` |
| `{next_opening_date}` | `NEXT_OPENING` under WAITLIST·season; `CAPACITY_DATE` under WAITLIST·capacity (`04` #values), so v1.1+ pages never show the seasonal date while the banner shows the capacity date |
| `{season}` | "Heating season" when `NEXT_OPENING` falls in February, "Cooling season" when it falls in September |
| `{capacity date}` | `CAPACITY_DATE` |
| `{answering hours}` | `ANSWERING_HOURS` plus [TZ] |
| `{callback_promise}` and [SLA line] | `SLA_VERSION` |
| `{build year}` | The build date, in `TIMEZONE_IANA` |
| Late-window notice | Shown when the state is OPEN and the build date falls inside `LATE_WINDOWS` |

## Season state mechanics {#season-state}

### Where the state lives and what reads it

The state lives only between the `SEASON` markers in `site.ts`.

- **Pages.** Every CTA is `SeasonCta` (`04` #season-cta). Every season-dependent component calls `getSeason()` in `src/lib/season.ts`: the header, banner, hero, `#start`, `/audit#book`, the thanks pages, and the calculator result. It returns the state, the reason, the dates, and `03`'s labels. A lint rule blocks importing `SEASON_STATE` anywhere else.
- **Functions** import the same module. In WAITLIST, `POST /api/forms/audit-qualify` returns `409` and re-renders `/audit#book` with the reserve form; no Checkout Session is created. In OPEN, a reservation posted from a cached WAITLIST page is accepted and flagged `state_mismatch`. A stale page never costs a lead.
- **Cal.com.** In WAITLIST, both discovery events (`discovery` and `discovery-queue`, `#scheduling`) switch to a "Closed" availability schedule (D11) through Cal.com's API (verify; otherwise it's a manual runbook step).
- **Stripe.** A flip to WAITLIST expires every open Checkout Session through `/api/internal/season-applied` (below).

### Commit and deploy, not an environment variable

| | **Commit + deploy (chosen)** | Env var + rebuild |
|---|---|---|
| Access the flipper needs | Write access to one repository, limited by a ruleset (enforced on GitHub Team; `#repo`) | The Cloudflare account, which also controls DNS and every secret |
| Audit trail | A git commit with actor and reason, plus `SEASON_LOG.md` | Cloudflare's audit log |
| Pages and Functions agree | Always: same commit, same bundle | Only after a redeploy |
| Tested in CI | All three variants, on every commit | Invisible to CI |
| Time | About 2–3 minutes | About 2–3 minutes |

**Chosen: commit and deploy.** It takes the same time, needs far narrower access, logs who flipped and why, and keeps the flag where tests can see it. Narrow access matters because the kill-switch enforcer, who may not be technical, is allowed to flip the site (`techeo.web.strategy` open question 3).

**Permissions.** The founder and the enforcer each have a GitHub account with 2FA and write access. `season.yml` commits as the `techeo-season-bot` App, using a token from `actions/create-github-app-token`.
- **A flip to WAITLIST** is committed straight to `main`, because it is the protective direction.
- **A flip to OPEN** opens a pull request. A required check, `season-guard`, passes only after the founder approves, and also the enforcer if the current reason is `capacity`. The approvers are listed in `.github/season-approvers.yml`. The founder's approval also satisfies the code-owner rule on `site.ts`.
- **None of this is enforced on GitHub Free** for a private repository: without Team, anyone with write access could push to `main` and deploy (`#repo`).

### The flip runbook (`docs/runbooks/flip.md`), in under five minutes

1. On any device, open **Actions → Season flip → Run workflow**.
2. Choose `state` and `reason`. For `capacity`, add a `capacity_date` that can be kept (`techeo.web.strategy` open question 2). Add a one-sentence `note`.
3. The workflow then does the rest:
   - It validates the inputs and edits only the SEASON block.
   - It commits, for example `season: WAITLIST/capacity until 2027-03-15 (by @actor)`, and appends to `SEASON_LOG.md`.
   - It deploys through the fast lane (`#ci`) and switches Cal.com availability.
   - It confirms the new banner and header CTA on `/` and `/audit`.
   - It then calls `POST /api/internal/season-applied` with the bearer `OPS_TOKEN`. That endpoint lists the `status=open` Checkout Sessions and expires each one (on a flip to WAITLIST), then emails the founder and the enforcer through Resend. A session it can't expire is left as a `stripe_expire` job for the drain.

**If GitHub Actions is down,** the founder builds locally and runs `wrangler pages deploy dist --branch main` (`flip-manual.md`). If the founder can't be reached either, the enforcer tells the receptionist to stop booking discovery calls (`08`).

### Scheduled flips

`season.yml` runs every hour from 04:05 to 10:05 UTC (`5 4-10 * * *`). Each run checks the local date in `TIMEZONE_IANA` and does nothing if that day's work is already done, so a flip lands with **the first scheduled run after local midnight**, whatever [TZ] turns out to be. Every US zone, from Eastern to Hawaii and in daylight time too, gets a run at 00:05 local. Two runs a day would not do this: 05:05 UTC is 21:05 PST the previous evening, so a Pacific flip would land almost a day late. GitHub can start scheduled runs late (verify). If GitHub Actions' `timezone:` key for schedules (reported as added in March 2026; verify) is available once [TZ] is set, the schedule can narrow to 00:05 and 01:05 in `TIMEZONE_IANA`.

| Date | Change | How | Approval |
|---|---|---|---|
| Fri Nov 20, 2026 | Launch in WAITLIST / `season` | Initial value | Founder |
| Mon Jan 25, 2027 | Opens the Feb 1 pull request | Automatic | — |
| Mon Feb 1, 2027 | → OPEN | The first run after midnight merges the approved PR | Founder; plus the enforcer under a capacity hold |
| Fri Apr 9, 2027 | Both discovery events stop offering slots after Apr 30 (`08` F7) | Automatic Cal.com change | — |
| Fri Apr 16, 2027 | Late-window notice appears | Date-driven rebuild | — |
| Sat May 1, 2027 | → WAITLIST / `season`, next opening Sep 7 | Automatic commit | None |
| Tue Sep 7, 2027 | → OPEN with the v2 release | `11`'s v2 runbook, never automatic | Founder |
| Tue Nov 9, 2027 | Discovery slots end Nov 30 (`08` F7) | Automatic Cal.com change | — |
| Tue Nov 16, 2027 | Late-window notice appears | Date-driven rebuild | — |
| Wed Dec 1, 2027 | → WAITLIST / `season`, next opening Feb 1, 2028 | Automatic commit | None |
| Tue Jan 25, 2028 | Opens the Feb 1, 2028 pull request | Automatic | — |
| Tue Feb 1, 2028 | → OPEN | As Feb 1, 2027 | As Feb 1, 2027 |
| Sun Apr 9, 2028 | Discovery slots end Apr 30 | Automatic Cal.com change | — |
| Mon May 1, 2028 | → WAITLIST / `season`, next opening Sep 5, 2028 | Automatic commit | None |

**The F7 cutoff.** 21 days before the last OPEN day of each window (`08` F7), the run sets both discovery events' date-range end to that last OPEN day, so a rolling booking window can't offer a slot after it.

**A capacity hold always wins.** On a scheduled OPEN date while the reason is `capacity`, the run doesn't merge. It raises an alert and leaves the decision to the people `techeo.web.strategy` open question 3 names. A scheduled flip to WAITLIST / `season` during a hold keeps the reason `capacity` and its date.

**Date alarms and holds.** A date passing must never stop deploys or leave a past date on the banner.
- **Alarms.** Seven days and one day before `CAPACITY_DATE`, and before a scheduled OPEN whose pull request isn't approved, the run emails the founder and the enforcer through `/api/internal/ops-alert` (bearer `OPS_TOKEN`).
- **Holds.** If the date passes with nothing decided, the first run of the next local day commits a hold straight to `main`: WAITLIST with the same reason and a date 14 days out, logged in `SEASON_LOG.md` with the note "automatic hold". Until then, an approval that comes later on the day itself can still be merged by hand. A hold is the protective direction, so it is committed like any flip to WAITLIST; a pull request would leave every build failing until someone merged it. `08`'s E02 goes to reservations when `CAPACITY_DATE` moves. Anyone on the approvers list can replace the hold through the flip workflow.
- **Capacity reached.** The Stripe webhook raises its own alert when `AUDIT_CAPACITY` is reached (`#stripe`), because `08` F2 requires the capacity flip within 1 business day.

**Date-driven rebuilds.** Once each local day, the run hashes every value that depends only on the date (the late-window notice, `{build year}`, and the set of live claims, `#repo`), and redeploys only when the hash changes. It also sets the discovery weekly cap for the month from `SCHEDULING.discoveryWeeklyCap` (`#scheduling`).

### Tests that prove both states render

`ci.yml` builds three variants (OPEN, WAITLIST·season, and WAITLIST·capacity) using `SEASON_STATE_OVERRIDE` and `BUILD_DATE_OVERRIDE`. A production build rejects both overrides. `tests/build/season.test.ts` then checks:

| Check | OPEN | WAITLIST·season | WAITLIST·capacity |
|---|---|---|---|
| Header CTA (`02` #header-v1) | "Book an Engine Audit" | "Reserve an audit slot" | "Reserve an audit slot" |
| `#season-banner` on T1, T2, T4, T5; never on `/thanks/*` | Absent | "February 1" | The capacity date |
| `/audit#book` form | `form_audit_qualify` | `form_audit_reserve` | `form_audit_reserve` |
| "$1,500" on `/` and `/audit`; "Retainers from $3,500/month" on `/`; no "coming soon"; no disabled CTA | Pass | Pass | Pass |
| Banner names no cause ("Homets", "kill", "KPI") | — | — | Pass |
| Late-window notice, build date Apr 20, 2027 | Present | Absent | Absent |
| `{next_opening_date}` on `/pricing` (v2) | — | The seasonal opening | The capacity date |

An end-to-end test also posts `form_audit_qualify` to the WAITLIST build and expects `409`, with no call to Stripe.

`tests/unit/season-cron.test.ts` proves the schedule: for America/New_York, America/Chicago, America/Denver, America/Phoenix, America/Los_Angeles, America/Anchorage, and Pacific/Honolulu, at least one run falls between 00:00 and 03:00 local on every `SEASON_SCHEDULE` date. `tests/unit/config.test.ts` also proves a hold: with the build date set one day past `CAPACITY_DATE`, the hold commit's config passes rule 1.

**Done when:**
- All three variants pass, and so do the cron and hold tests.
- A timed drill on a preview branch (`dry_run: preview`) goes from **Run workflow** to a live banner in under five minutes.
- The drill is repeated on production during the soft launch, flipping WAITLIST / `season` to itself.

## Forms backend {#forms}

`08` owns fields, validation rules, qualification, and emails. This section owns receiving, checking, storing, and relaying.

| Form id | Endpoint | Posted from | State behavior | Success |
|---|---|---|---|---|
| `form_audit_reserve` | `POST /api/forms/audit-reserve` | `/audit#book`, `/#start` | The WAITLIST form. In OPEN, it is accepted and flagged `state_mismatch`. | `303` → `/thanks/audit-reserved` |
| `form_audit_qualify` | `POST /api/forms/audit-qualify` | `/audit#book` | OPEN only; `409` in WAITLIST | `303` → Stripe Checkout. A decline returns `200` with `03`'s outcome block. |
| `form_teardown_request` | `POST /api/forms/teardown-request` | `/teardown#request` | Both. In WAITLIST, `queued_for` is set to `NEXT_OPENING` under `season` and to `CAPACITY_DATE` under `capacity` (`03` /teardown). | `303` → `/thanks/teardown` |
| `form_calculator_email` | `POST /api/forms/calculator-email` | The `#calculator` island | Both | JSON `200`, confirmed inline |
| `form_market_check`, `form_partner_referral` (v2) | `/api/forms/market-check`, `/api/forms/partner-referral` | `/markets`, `/partners` | Both | `303` to the proposed thanks URLs, once the brief is revised |

**Staff intake** (`08` F1: a reservation taken by phone). `POST /api/staff/intake` sits behind its own Cloudflare Access application: Techeo's Workspace accounts, plus the receptionist vendor's named agents if `08` wants them to enter reservations directly. It runs the same pipeline as `form_audit_reserve`, with `bot_check = 'staff'`, `channel = 'phone'` on the submission and on any reservation, and the call's time as `reserved_at`.

**Seed registration** (`08` #sla). `POST /api/staff/seeds` has its own Access application, whose policy names only the founder's and the enforcer's accounts, never the vendor's agents. It stores a seed's email and phone as keyed HMACs (`PII_HMAC_KEY`) in `app.seed_identities` through `register_seed`, and retires a seed the same way (`#data`). Nothing on the page shows which submissions were seeds.

Other methods get `405`. Pages doesn't apply `_headers` to Function responses, so every `/api/*` response sets its own `X-Robots-Tag: noindex`, `Cache-Control: no-store`, and security headers from `server/headers.ts`.

### The pipeline (`server/pipeline.ts`)

1. **Check the request.** Only `application/x-www-form-urlencoded`, so no file uploads anywhere (`415`). At most 16 KB (`413`). `Origin` must be the site's own (`403`); a missing `Origin` is accepted and flagged.
2. **Recognize test runs.** A signed `X-Techeo-Synthetic` header, at most 300 s old, marks a test submission: no Turnstile, no rate limits, and every output goes to the synthetic inbox and the synthetic ClickUp list.
3. **Honeypot.** The field `hp_referral_code` ("Referral code (leave blank)") is visually hidden, with `aria-hidden`, `tabindex="-1"`, and `autocomplete="off"`. If it's filled, the payload is held in D1 `quarantine` for 7 days and the normal success redirect is returned. The weekly ops email lists masked entries, so a real person caught by mistake can be released.
4. **Rate limits (D1),** keyed by `HMAC(IP_HASH_KEY, ip + UTC date)`; raw IPs are never stored. Each key gets 5 submissions per form per 10 minutes and 20 per day. Beyond that the response is `429`, with `03`'s "Too many attempts" message and [TECHEO_PHONE]. If one form takes 300 submissions in a day, Turnstile becomes required and an alert fires.
5. **Normalize and validate** with the form's zod schema, generated from `08`'s field table. The same schema runs in the browser. `form_audit_reserve`'s schema leaves out `08`'s fields 9, 11, 13, and 14, exactly as the form does.
   - Text is trimmed and NFC-normalized.
   - Phone numbers are converted to E.164.
   - ZIP codes must be 5 digits.
   - Errors return `422` with `src/config/messages.ts` copy.
6. **Idempotency.** The key is the `submission_uuid` that `form-enhance.ts` sets. Without JavaScript, it is `sha256(form_id + normalized payload)`, matched against the last 10 minutes in D1. A repeat gets the first response back and triggers nothing new. `08`'s business duplicate rules, such as a teardown for the same number within 30 days, run later in Supabase.
7. **Turnstile.**
   - **Token present:** siteverify (3 s timeout, `idempotency_key` = submission id) must confirm `success`, `hostname`, and `action`. A definite failure returns `403` with `03`'s "Bot check failed" message and the phone number.
   - **Siteverify unreachable:** the submission is accepted and recorded `unverified`.
   - **No token** (JavaScript off or blocked): accepted and recorded `missing`, unless `TURNSTILE_REQUIRED=true`. Brief v2 D11 sends **no automated confirmation email** for these: an unverified post could put Techeo's mail in a stranger's inbox and invite spam complaints against the transactional sender. The thanks page and the live callback inside the SLA confirm instead.
8. **Business rules (`08`'s logic).**
   - **Exclusion zone, checked first.** `server/generated/excluded-zips.json` is built in CI as the union of two sets (`techeo.guardrails` #coi item 1: Homets' DMA, plus a stated radius):
     - every ZCTA whose Census gazetteer point lies within [EXCLUSION_RADIUS_MILES] of `EXCLUSION_CENTER_LAT/LNG`;
     - every ZCTA with any row in `data/`'s ZCTA-to-county file for a Homets market county (`HOMETS_COUNTY_FIPS`, an Actions secret; the same counties are the `homets_exclusion` rows in `market_slots`).

     The same build writes the `zone_edge` set: the radius plus `ZONE_EDGE_BUFFER_MILES` (default 25, `08` open question 8). A ZIP in the zone is declined `exclusion_zone` on reserve, qualify, and teardown before any market check, with no callback task. A ZIP missing from the gazetteer returns `zip_known = false`.
   - **From the ZIP:** `state_code`, and `lead_tz` through `data/`'s county-to-IANA-zone table, for `08`'s lead-local calling guard.
   - **Market and history:** Supabase RPC `qualify_context`, 1.5 s timeout, only for ZIPs outside the zone. It returns `market_status`, `existing_purchase`, `prior_decline`, and any unexpired review clearance (`#data`). On failure, `market_status` is `unknown` and `history_unknown` is added to `review_reasons` (`08` #qualification). On `form_audit_qualify` the outcome is then `needs_conversation`: no payment while the market and the lead's history can't be checked.
   - **Outcome.** `08` #qualification's rules then give the outcome, `decline_reasons`, and `review_reasons`, stamped with `rules_version`.
9. **Capture.** One D1 batch writes the submission and its jobs. Then Supabase `ingest_submission` runs with a 2.5 s timeout. On failure, a `store_supabase` job waits for the drain.
10. **Last resort.** If D1 and Supabase both failed, the founder email (`#notifications`) is sent synchronously with the full submission. **A lead is captured if D1, Supabase, or the founder's inbox took it.** If all three failed, the visitor gets `503` with `03`'s server-error message and phone number, and every value typed is kept in the form.
11. **Checkout (qualify only, outcome `qualified`).** Create the session (`#stripe`: 5 s timeout, `Idempotency-Key: qualify-<id>`) and `303` to it. If Stripe fails, the outcome is `checkout_unavailable`, which is never stored as final, so a retry can succeed. An urgent ClickUp task is created, and the page shows copy `03` must add, drafted here: "Checkout didn't open, and nothing was charged. Your answers are saved. Try again in a few minutes, or call [TECHEO_PHONE] and we'll finish by phone."
12. **Respond, then relay.** After the response, `ctx.waitUntil` runs whatever `#notifications`' routing table gives the outcome: the founder email, the receptionist card (eligible events only), `08`'s confirmation or decline email, and the ClickUp task. Anything that fails stays pending for the drain.

### With and without JavaScript

- **Without JavaScript,** a successful post gets a `303` redirect. Everything else re-renders the real page: `server/render.ts` fetches it (`env.ASSETS.fetch(new URL('/audit', request.url))`; the binding needs an absolute URL or a Request) and uses `HTMLRewriter` to:
  - refill values;
  - set `aria-invalid` and reveal the error slots;
  - insert the error summary, or swap in the outcome block for a decline.

  Status codes: `422` invalid, `200` decline, `409` wrong state, `429` rate limit, `403` bot check, `503` capture failure.
- **With JavaScript,** `form-enhance.ts` (3 KB compressed at most) intercepts the submit. It validates on the client, sets `aria-busy`, and blocks a second submit (`03` #microcopy). It waits up to 5 seconds for a Turnstile token, then posts with `Accept: application/json` and handles the JSON reply.
- **Turnstile loading.** It loads with `/audit` and `/teardown`. On `/`, it waits for the first `focusin` inside a form. The widget runs with `appearance: interaction-only` and a per-form `action`.

### Failure modes

| Failure | The visitor sees | What happens | Alert |
|---|---|---|---|
| Supabase down | Success | Held in D1. Two quick retries within the request's `waitUntil`, then the drain retries every 10 minutes, backing off to hourly, for 72 hours. Email and ClickUp go out from D1's copy, so the callback still happens. | Pending over 30 min |
| Resend down | Success | Retried; the ClickUp task still goes out | Over 30 min. **Urgent** if email and ClickUp are both pending over 15 min: then no person knows about the lead. |
| ClickUp down or rate-limited (`429`) | Success | Retried per its rate-limit headers | Over 60 min |
| D1 down or out of quota | Success, if Supabase accepted | Supabase and email called directly | Any D1 error |
| D1, Supabase, and email all down | `503` with the phone number; entries kept | Only the id and error class are logged | Immediate |
| Stripe down | "Checkout didn't open…" | Answers kept; urgent callback task | Immediate |
| Unhandled exception | `500` page with the phone number | Workers Logs | Daily synthetic run |

**Done when:** Playwright passes for every form, in every state, with JavaScript on and off. It must also pass with fake integrations returning `503` from each service singly and all at once. Every row above behaves as stated, and no log line contains personal data.

## Data {#data}

| Store | Holds | Never holds |
|---|---|---|
| D1 `techeo-outbox` | 30 days of submissions and jobs; 24 hours of rate events; 7 days of quarantine; 90 days of CSP reports | Anything older |
| Supabase `techeo-prod` | Leads, submissions (missed calls included), audit records, teardown and calculator requests, Stripe events, bookings, callback times, stage changes, the market register, seed identities (HMACs only), and `10`'s consent evidence, suppression list, and rights-request log | Client ServiceTitan data, recordings, files, card or bank numbers |
| Stripe | Payment methods, charges, receipts, invoices | Qualification answers (it holds only ids in metadata) |
| ClickUp | One task per lead, for working the pipeline | The record of truth: tasks can be deleted |
| R2 `techeo-deliverables` | Teardown walkthrough videos, their caption files, and scored sheets, for 120 days (`#deliverables`) | Readout recordings and audit reports, which stay in the engagement storage (`10` #processors); client ServiceTitan data |

### D1 outbox

```sql
CREATE TABLE submissions (id TEXT PRIMARY KEY, form_id TEXT NOT NULL, idem_key TEXT NOT NULL UNIQUE,
  content_hash TEXT NOT NULL, payload TEXT NOT NULL, meta TEXT NOT NULL, outcome TEXT, response TEXT,
  store_status TEXT NOT NULL DEFAULT 'pending' CHECK (store_status IN ('pending','stored','dead')),
  is_test INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL);
CREATE TABLE jobs (id TEXT PRIMARY KEY,
  source_type TEXT NOT NULL CHECK (source_type IN ('submission','stripe_event','cal_booking','clickup_event',
    'receptionist_event','season_flip','opt_out','consent_confirm','resend_event','deliverable')),
  source_id TEXT NOT NULL,        -- submission id · evt_… · booking uid + trigger + time · history item id · call id
                                  -- · commit SHA · token id · svix-id · teardown request id
  submission_id TEXT REFERENCES submissions(id) ON DELETE SET NULL,   -- null for webhook and flip work
  kind TEXT NOT NULL CHECK (kind IN ('store_supabase','store_touch','store_opt_out','store_consent',
    'store_email_event','email_founder','email_receptionist','email_confirmation','clickup_task','clickup_update',
    'stripe_expire','sla_reminder','sla_escalation','deliverable_delete')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','done','dead')), attempts INTEGER NOT NULL DEFAULT 0,
  next_at INTEGER NOT NULL, external_id TEXT, last_error TEXT, UNIQUE (source_type, source_id, kind));
CREATE TABLE rate_events (key TEXT NOT NULL, form_id TEXT NOT NULL, at INTEGER NOT NULL);
CREATE TABLE quarantine (id TEXT PRIMARY KEY, form_id TEXT NOT NULL, payload TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE TABLE csp_reports (sig TEXT PRIMARY KEY, directive TEXT, blocked TEXT, page TEXT, count INTEGER, last_at INTEGER);
```

**Jobs are keyed on their source,** not only on a submission. Webhook work (a payment, an ACH result, an expiry, a refund, a Cal.com booking, a ClickUp status) has no submission row, and D1 purges submissions at 30 days, before most refunds or disputes. So each webhook's jobs are keyed on its event id, and one purchase can carry several `clickup_update` and `email_founder` jobs, one per event. An opt-out or a consent confirmation is keyed on its token id, and a Resend event on its `svix-id` (`#optout`, `#notifications`). The SLA timers (`#notifications`) are jobs on the submission.

D1 Free allows 100,000 rows written and 5 million rows read a day **per account**, shared by `techeo-outbox` and `techeo-outbox-preview` (and CI). Since Sep 1, 2026, once either limit is exceeded, D1 queries return errors until the 00:00 UTC reset (verify whether reads fail too, which would include the rate-limit and idempotency checks). If a flood uses up the quota, capture continues through Supabase and the email fallback (pipeline steps 9–10). The WAF rule in `#dns` should stop a flood well before that.

### Supabase project

- **Organizations.** "Techeo" holds `techeo-prod` (the US region nearest [TZ]). "Techeo Staging" holds `techeo-staging` on the Free plan, for previews and CI. Both belong to Techeo LLC. Nothing is shared with Homets.
- **The two-project limit.** Supabase allows two active Free projects across every organization a user owns or administers (verify). If the founder's account administers an active Free Homets project, create `techeo-staging` under the enforcer's account or a separate Techeo admin account, or start `techeo-prod` on Pro.
- **Plan.** Free until Mon Feb 1, 2027, then Pro at $25 a month (open question 3). Pro removes the Free plan's pause after 7 idle days and adds daily backups (verify).
- **Keys.** Server-side secret keys (`sb_secret_…`) only; the legacy `anon` and `service_role` keys are being retired by the end of 2026 (verify). **No Supabase key ever reaches a browser.**
- **Exposure.** The Data API serves only `public`. Tables live in `app`, which isn't exposed. A few RPC functions in `public` are the only way in, and only `service_role` can run them.
- **Extensions:** `citext` and `pg_cron` (verify on the plan). No Storage buckets, no Edge Functions.

### DDL — `supabase/migrations/20261012000000_init.sql`

```sql
create schema if not exists app;
revoke all on schema app from public, anon, authenticated;
grant usage on schema app to service_role;
create extension if not exists citext with schema extensions;

create table app.retention_policies (retention_class text primary key,  -- one row per class in 10 #retention
  keep interval check (keep between interval '1 day' and interval '10 years'),   -- null: no automatic purge
  anchor text not null check (anchor in ('created','last_activity','paid','last_call','msa_end')),
  action text not null check (action in ('delete','anonymize','manual')),
  approved_on date);                                                   -- set when counsel signs (10)
insert into app.retention_policies values                             -- copied from 10 #retention; 10 changes them
  ('synthetic','7 days','created','delete',null), ('calculator','90 days','last_activity','delete',null),
  ('zone_decline','30 days','created','delete',null), ('zone_decline_stub','12 months','created','delete',null),
  ('declined','12 months','last_activity','delete',null),
  ('st_list','24 months','last_activity','delete',null), ('prospect','24 months','last_activity','delete',null),
  ('purchase','7 years','paid','anonymize',null), ('client','7 years','msa_end','manual',null),
  ('consent_evidence','5 years','last_call','delete',null), ('suppression',null,'created','manual',null),
  ('dsr_requests','24 months','created','delete',null);
create table app.consent_versions (id text primary key, full_text text not null,  -- 10 owns the words
  text_sha256 text not null check (text_sha256 ~ '^[0-9a-f]{64}$'), effective_on date not null);
-- Seeded by the next migration, 20261012000200_consent_seed.sql, which `pnpm run consent:migration` generates from
-- consent.ts: reserve-v1, qualify-v1, teardown-v1, calc-v1, phone-reserve-v1, phone-reserve-confirm-v1,
-- phone-book-v1, readout-rec-v1, privacy-v1, terms-v1 (10 #consent-texts). v2 adds calc-v2, market-v1, referral-v1.
-- A word change is a new id in a new migration (#repo, consent-guard); a stored row is never edited.

create table app.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  email extensions.citext check (length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
                                                         -- null only for a caller known by number alone (phone_missed)
  name text check (char_length(name) between 1 and 120),
  phone_e164 text check (phone_e164 ~ '^\+1[2-9][0-9]{2}[2-9][0-9]{6}$'),
  company text check (char_length(company) between 1 and 160),
  website text check (char_length(website) <= 255),
  zip text check (zip ~ '^[0-9]{5}$'), state_code text check (state_code ~ '^[A-Z]{2}$'),
  lead_tz text,                                          -- IANA zone from ZIP → county (08's lead-local guard)
  trade text check (trade in ('hvac','plumbing','both')),
  crm text check (crm in ('servicetitan','switching','other','none')),
  heard_from text check (heard_from in ('peer_network','vendor','podcast','teardown','search_ai','other')),
                                                         -- 08 #form-audit row 17's keys; owner_community joins
                                                         -- only if 09 open question 3 is accepted
  email_status text not null default 'ok' check (email_status in ('ok','bounced','complained')),   -- #notifications
  first_touch jsonb not null default '{}', last_touch jsonb not null default '{}',  -- path, utm_*, referrer host
  stage text not null default 'new' check (stage in ('new','contacted','discovery_booked','audit_reserved',
    'audit_purchased','client','declined','closed_lost','do_not_contact')),
  clickup_task_id text,
  parent_lead_id uuid references app.leads on delete set null,   -- the outbound lead this one joined (08 F9 step 5)
  is_test boolean not null default false,
  retention_class text not null default 'prospect' references app.retention_policies,   -- set by ingest_submission
  last_activity_at timestamptz not null default now(),  -- latest submission or two-way lead_touches row
  purge_after timestamptz, legal_hold boolean not null default false,
  constraint reachable check (email is not null or phone_e164 is not null),
  constraint not_own_parent check (parent_lead_id <> id));
create unique index leads_email_live on app.leads (email) where not is_test;

create table app.submissions (
  id uuid primary key,                                   -- minted by the Function; same id as in D1
  idempotency_key text not null unique,
  form_id text not null check (form_id in ('form_audit_reserve','form_audit_qualify','form_teardown_request',
    'form_calculator_email','form_market_check','form_partner_referral',
    'phone_missed')),                                    -- a missed, abandoned, or voicemail call (08 #unanswered)
  lead_id uuid not null references app.leads on delete cascade,
  channel text not null default 'site' check (channel in ('site','phone','referral','outbound','peer-network')),
                                                         -- audit_reservations' values: staff intakes and phone_missed are
                                                         -- phone; F9's outbound targets, outbound (08 F8, F9)
  received_at timestamptz not null, stored_at timestamptz not null default now(),
  season_state text not null check (season_state in ('OPEN','WAITLIST')),
  waitlist_reason text check (waitlist_reason in ('season','capacity')),
  build_sha text not null check (build_sha ~ '^[0-9a-f]{7,40}$'),
  page_path text not null check (page_path ~ '^/[a-z0-9/-]*$'),
  source jsonb not null default '{}',
  bot_check text not null check (bot_check in ('passed','missing','unverified','synthetic','staff','vendor')),
                                                         -- vendor: a signed call event (phone_missed)
  flags text[] not null default '{}',                    -- includes seed (08 #sla), matched from app.seed_identities
  consent_version text references app.consent_versions,
  payload jsonb not null,                                -- normalized fields exactly as validated
  sla_window text check (sla_window in ('business','after_hours')),   -- server/sla.ts; 08's eligible events only (09)
  sla_due_at timestamptz, promise_due_at timestamptz,    -- promise_due_at: the live public promise
  calling_rule_version text check (calling_rule_version ~ '^hours-[0-9]{4}-[0-9]{2}-v[0-9]+$'),
                                                         -- the calling-hours table the due time used (10 #quiet-hours)
  is_test boolean not null default false, purge_after timestamptz, legal_hold boolean not null default false,
  constraint reason_matches_state check ((season_state = 'WAITLIST') = (waitlist_reason is not null)),
  constraint sla_all_or_none check ((sla_window is null) = (sla_due_at is null)
    and (sla_due_at is null) = (promise_due_at is null)
    and (sla_due_at is null) = (calling_rule_version is null)));
create index on app.submissions (lead_id, received_at desc);

create table app.audit_qualifications (                  -- one row per reserve or qualify submission (08 #form-audit)
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique references app.submissions on delete cascade,
  lead_id uuid not null references app.leads on delete cascade,
  form_id text not null check (form_id in ('form_audit_reserve','form_audit_qualify')),
  role text not null check (role in ('owner','co_owner','general_manager','office_manager','other')),
  work_mix text not null check (work_mix in ('residential','commercial')),
  revenue_band text not null check (revenue_band in ('under_1_5m','1_5m_to_5m','5m_to_10m','10m_to_15m','over_15m')),
  main_goal text not null check (main_goal in ('book_more_calls','faster_callbacks','more_calls','website_logo_social','not_sure')),
  peer_network text check (peer_network in ('none','pantheon','nexstar','service_nation','egia','other')),   -- optional (08 #form-audit 17a)
  trucks_band text check (trucks_band in ('1_2','3_10','11_25','26_plus')),   -- fields 9, 11, 13, 14: qualify only
  lead_sources text[] check (cardinality(lead_sources) >= 1
    and lead_sources <@ array['lsa','google_ads','angi','thumbtack','yelp','other_paid','none']),
  decision_maker text check (decision_maker in ('self','other_joins_call')),
  test_call_consent boolean,
  constraint qualify_has_buyer_fields check (form_id = 'form_audit_reserve' or (trucks_band is not null
    and lead_sources is not null and decision_maker is not null and test_call_consent is not null)),
  notes text check (char_length(notes) <= 1000),
  zip_known boolean not null, in_exclusion_zone boolean not null, zone_edge boolean not null,
  market_status text not null check (market_status in ('open','taken','review','unknown','not_checked')),  -- not_checked: in the zone
  outcome text not null check (outcome in ('qualified','needs_conversation','reserved','exclusion_zone',
    'not_residential','out_of_scope','not_servicetitan','low_lead_flow','no_test_consent','checkout_unavailable')),
  decline_reasons text[] not null default '{}' check (decline_reasons <@ array['exclusion_zone','not_residential',
    'out_of_scope','not_servicetitan','low_lead_flow','no_test_consent']),        -- every hard decline matched (08)
  review_reasons text[] not null default '{}' check (review_reasons <@ array['market_hidden','market_review',
    'zip_unknown','zone_edge','over_15m','trucks_26_plus','trucks_1_2','no_paid_sources','decision_other',
    'existing_purchase','prior_decline','history_unknown']),   -- history_unknown: qualify_context failed (08)
  rules_version text not null,                           -- 08's qualification logic version
  created_at timestamptz not null default now());

create table app.audit_reservations (
  id uuid primary key default gen_random_uuid(),
  qualification_id uuid not null unique references app.audit_qualifications on delete cascade,
  lead_id uuid not null references app.leads on delete cascade,
  reserved_at timestamptz not null,                      -- the queue order (08 F1, F2); by phone, the call's time
  channel text not null check (channel in ('site','phone','referral','outbound','peer-network')),
  opening_date date not null,                            -- the date shown when reserved; a carry moves it (08 F2 step 7)
  waitlist_reason text not null check (waitlist_reason in ('season','capacity')),
  status text not null default 'reserved' check (status in ('reserved','on_hold','contacted','discovery_booked',
    'purchased','declined','canceled','lapsed')),
  contact_due_at timestamptz, contacted_at timestamptz,  -- due: two business days after the opening (01 O7)
  phone_consent_confirmed_at timestamptz,                -- phone-reserve-confirm-v1 pressed (#optout; 10 #tcpa-analysis)
  carry_count integer not null default 0 check (carry_count >= 0),   -- carries that count toward 08's limit; a carry
                                                         -- to a {capacity date} doesn't (08 F2 step 7, open question 20)
  created_at timestamptz not null default now());
create index on app.audit_reservations (opening_date, reserved_at);   -- ClickUp's "#07" = rank in this order

create table app.reservation_openings (                  -- one row per reservation per opening held (08 F2 step 7)
  reservation_id uuid not null references app.audit_reservations on delete cascade,
  opening_date date not null,                            -- a seasonal opening or a {capacity date}
  waitlist_reason text not null check (waitlist_reason in ('season','capacity')),   -- the reason when it was set
  carried_from date,                                     -- the previous opening; null at the first
  counts_toward_limit boolean not null default false,    -- a counted carry: not the first opening, not a capacity date
  contact_due_at timestamptz, contacted_at timestamptz,  -- O7 at this opening; 09's O7 and O8 read this table
  closed_as text check (closed_as in ('discovery_booked','purchased','carried','lapsed','canceled','declined')),
  primary key (reservation_id, opening_date),
  constraint first_is_not_a_carry check (carried_from is not null or not counts_toward_limit));

create table app.audit_purchases (
  id uuid primary key default gen_random_uuid(),
  qualification_id uuid not null references app.audit_qualifications on delete restrict,
  lead_id uuid not null references app.leads on delete restrict,
  livemode boolean not null,
  payment_route text not null default 'checkout' check (payment_route in ('checkout','stripe_invoice','bank_transfer')),
                                                         -- 08 F10: invoice routes, recorded on the staff page
  checkout_session_id text unique check (checkout_session_id ~ '^cs_(test|live)_'),   -- required for checkout only
  customer_id text check (customer_id ~ '^cus_'),
  payment_intent_id text unique check (payment_intent_id ~ '^pi_'),
  invoice_id text check (invoice_id ~ '^in_'),           -- required for stripe_invoice
  transfer_ref text check (char_length(transfer_ref) between 1 and 64),   -- bank_transfer: Techeo's invoice number
                                                         -- and the bank's transaction reference; never an account number
  amount_cents integer not null check (amount_cents > 0),
  currency text not null default 'usd' check (currency = 'usd'),
  payment_method text check (payment_method in ('card','us_bank_account')),
  status text not null default 'checkout_open' check (status in ('checkout_open','checkout_expired','processing',
    'paid','payment_failed','refunded','disputed')),
  session_created_at timestamptz, paid_at timestamptz, failed_at timestamptz, refunded_at timestamptz,
  kickoff_booked_at timestamptz, access_complete_on date, readout_on date,
  terms_version text,                                    -- the /terms version accepted at checkout (10 #terms)
  credit_cents integer not null default 150000 check (credit_cents >= 0),
  credit_expires_on date generated always as (readout_on + 30) stored,   -- 03 open question 1 default
  credit_status text not null default 'pending_readout' check (credit_status in
    ('pending_readout','available','committed','applied','expired','void')),
  retainer_signed_on date,                               -- signed inside the window: the credit is committed
  credit_applied_on date, credit_applied_ref text,       -- first retainer invoice; may be Sep 7 or Feb 1 (03 #timeline)
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  constraint route_has_reference check (case payment_route
    when 'checkout' then checkout_session_id is not null and session_created_at is not null
    when 'stripe_invoice' then invoice_id is not null
    else transfer_ref is not null end),
  constraint paid_has_time check (status <> 'paid' or paid_at is not null),
  constraint credit_after_readout check (credit_status in ('pending_readout','void') or readout_on is not null),
  constraint credit_signed_in_window check (credit_status not in ('committed','applied')
    or (retainer_signed_on is not null and retainer_signed_on <= credit_expires_on)));

create table app.teardown_requests (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique references app.submissions on delete cascade,
  lead_id uuid not null references app.leads on delete cascade,
  origin text not null default 'request' check (origin in ('request','partner','outbound')),
                                                         -- outbound: an F9 target keyed before the first test call
  role text check (role in ('owner','manager','other')),
  phone_to_call_e164 text not null check (phone_to_call_e164 ~ '^\+1[2-9][0-9]{2}[2-9][0-9]{6}$'),
  website text check (char_length(website) <= 255),
  state_code text check (state_code ~ '^[A-Z]{2}$'),     -- drives the recording-law check (techeo.legal)
  authority_confirmed boolean not null default false,
  constraint asked_unless_outbound check (origin = 'outbound' or (authority_confirmed and role is not null)),
                                                         -- nobody asked for an outbound teardown (08 F9 step 1)
  in_exclusion_zone boolean not null,
  review_reasons text[] not null default '{}' check (review_reasons <@ array['market_hidden','market_review',
    'zip_unknown','zone_edge']),                         -- "We'll call you first" (08 #form-teardown-request)
  queued_for date,                                       -- set when received in WAITLIST
  office_hours text check (char_length(office_hours) <= 200),   -- confirmed on callback card T
  recording_mode text not null default 'notes_only' check (recording_mode in ('notes_only','recorded_with_consent')),
  recording_rule_checked_on date, recording_rule_version text,  -- 10's state table, checked before the first dial
  constraint recording_needs_rule check (recording_mode = 'notes_only'
    or (recording_rule_checked_on is not null and recording_rule_version is not null)),
  status text not null default 'requested' check (status in ('requested','confirmed','in_progress',
    'delivered','declined','canceled','duplicate')),
  walkthrough_sent_at timestamptz, walkthrough_expires_at timestamptz,   -- #deliverables
  walkthrough_object_prefix text check (walkthrough_object_prefix ~ '^td/[0-9a-f-]{36}/$'),   -- R2 key prefix
  walkthrough_revoked_at timestamptz, walkthrough_deleted_at timestamptz,
  constraint walkthrough_link_90_days check (walkthrough_expires_at is null
    or walkthrough_expires_at <= walkthrough_sent_at + interval '90 days'),
  created_at timestamptz not null default now());
create index on app.teardown_requests (phone_to_call_e164, created_at desc);

create table app.calculator_submissions (               -- only when someone asks for the email (08 #calculator)
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique references app.submissions on delete cascade,
  lead_id uuid not null references app.leads on delete cascade,
  formula_version text not null check (formula_version in ('calc-mini-1','calc-full-1')),
  inputs jsonb not null,                                 -- every input as entered (v2: every section)
  qualified_calls integer check (qualified_calls between 1 and 10000),
  booking_rate_pct numeric(4,1) check (booking_rate_pct between 0 and 100),   -- one decimal place
  avg_revenue integer check (avg_revenue between 10 and 50000),               -- whole dollars
  constraint mini_has_inputs check (formula_version <> 'calc-mini-1'
    or (qualified_calls is not null and booking_rate_pct is not null and avg_revenue is not null)),
  target_rate_pct numeric(4,1) not null default 70 check (target_rate_pct = 70),   -- fixed (08)
  monthly_exact bigint not null check (monthly_exact >= 0),   -- whole dollars, before rounding
  monthly_shown bigint not null check (monthly_shown >= 0),   -- after 08's rounding steps
  emailed_at timestamptz, created_at timestamptz not null default now());

create table app.stripe_events (id text primary key check (id ~ '^evt_'), type text not null,
  livemode boolean not null, created timestamptz not null, object_id text,
  received_at timestamptz not null default now(), processed_at timestamptz, error text);
create table app.cal_bookings (uid text primary key,
  event_type text not null check (event_type in ('discovery','discovery-queue','audit-kickoff')),
  lead_id uuid references app.leads on delete set null, purchase_id uuid references app.audit_purchases on delete set null,
  starts_at timestamptz not null, ends_at timestamptz not null check (ends_at > starts_at),
  status text not null check (status in ('booked','rescheduled','canceled')),
  in_protected_block boolean not null default false, updated_at timestamptz not null default now());
create table app.lead_touches (id bigint generated always as identity primary key,   -- D11 SLA evidence (08 #sla)
  lead_id uuid not null references app.leads on delete cascade,
  submission_id uuid references app.submissions on delete set null,   -- the event whose clock this stops
  kind text not null check (kind in ('callback_attempt','callback_connected','email_sent','discovery_held',
    'inbound_call')),                                    -- inbound_call: answered live (08 F8); two-way, like
                                                         -- callback_connected and discovery_held
  at timestamptz not null, by_role text not null check (by_role in ('receptionist','founder','system')),
  source text not null check (source in ('receptionist_log','manual','system')),   -- never a ClickUp status
  vendor_call_id text unique);                           -- the vendor's per-call id; a replay is ignored
create table app.stage_events (id bigint generated always as identity primary key,   -- 08 #pipeline
  lead_id uuid references app.leads on delete cascade, clickup_task_id text not null,
  from_status text, to_status text not null, to_status_id text,
  at timestamptz not null, clickup_event_id text not null unique);
create table app.review_clearances (id uuid primary key default gen_random_uuid(),   -- 08 #qualification
  email extensions.citext not null, zip text not null check (zip ~ '^[0-9]{5}$'),
  trade text not null check (trade in ('hvac','plumbing','both')),
  cleared_reasons text[] not null check (cardinality(cleared_reasons) >= 1 and cleared_reasons <@ array[
    'market_hidden','market_review','zip_unknown','zone_edge','over_15m','trucks_26_plus','trucks_1_2',
    'no_paid_sources','decision_other','existing_purchase','prior_decline','history_unknown']),
                                                         -- hard declines are never cleared
  cleared_by text not null, cleared_at timestamptz not null default now(),
  expires_at timestamptz not null check (expires_at <= cleared_at + interval '14 days'));
create table app.consent_evidence (id bigint generated always as identity primary key,   -- 10 #retention
  email_hmac text not null, phone_hmac text,             -- keyed HMAC computed by the Function; never plain
  consent_version text not null references app.consent_versions,
  form_id text not null,                                 -- a form id, or 'phone_intake', 'email_confirm', 'readout'
  channel text not null default 'site' check (channel in ('site','email','phone')),   -- phone: spoken (08 F8; readouts)
  captured_by text check (char_length(captured_by) between 1 and 80),   -- the agent's name or id, or 'founder'
  vendor_call_id text,                                   -- joins the vendor's call log; null on the founder's own calls
  received_at timestamptz not null, last_call_at timestamptz,
  evidence_ref text unique,                              -- confirmation token id, or vendor call id plus consent_version;
                                                         -- a replay is ignored
  is_test boolean not null default false,                -- synthetic rows purge under `synthetic`
  purge_after timestamptz, legal_hold boolean not null default false,
  constraint spoken_has_taker check (channel <> 'phone' or captured_by is not null));
create table app.suppression (id bigint generated always as identity primary key,   -- opt-outs, do not contact (10)
  email_hmac text, phone_hmac text, check (email_hmac is not null or phone_hmac is not null),
  reason text not null check (reason in ('opt_out','do_not_contact','zone_decline','complaint')),
  source text not null default 'manual' check (source in ('link','one_click','reply','phone','resend','manual',
    'ingest')),                                          -- how it arrived (#optout)
  zip text check (zip ~ '^[0-9]{5}$'),                   -- the zone-decline stub only
  is_test boolean not null default false,
  created_at timestamptz not null default now(),
  expires_on date,                                       -- zone stub only: created_at + 12 months (zone_decline_stub, 10)
  constraint only_stub_expires check ((reason = 'zone_decline') = (expires_on is not null)));
create unique index suppression_once on app.suppression (coalesce(email_hmac, ''), coalesce(phone_hmac, ''), reason)
  where reason <> 'zone_decline';                        -- a repeated opt-out stores one row
create table app.seed_identities (id uuid primary key default gen_random_uuid(),   -- 08 #sla seeds
  email_hmac text, phone_hmac text, check (email_hmac is not null or phone_hmac is not null),   -- keyed HMACs only
  registered_by text not null check (registered_by in ('founder','enforcer')),   -- the only two who can see or add one
  created_at timestamptz not null default now(), retired_at timestamptz);
create table app.email_events (svix_id text primary key,   -- Resend webhook events (#notifications)
  resend_email_id text not null, lead_id uuid references app.leads on delete cascade,
  type text not null check (type in ('email.bounced','email.complained','email.delivery_delayed')),
  bounce_type text,                                      -- as Resend reports it; only a permanent bounce flags the lead
  outbox_ref text,                                       -- the D1 job that sent it (not "job_id": schema-guard)
  at timestamptz not null, received_at timestamptz not null default now());
create table app.dsr_requests (id uuid primary key default gen_random_uuid(),   -- 10 #rights
  received_at timestamptz not null, type text not null check (type in ('access','delete','correct','opt_out')),
  channel text not null check (channel in ('email','phone','post','form')), email_hmac text,
  verified_at timestamptz, completed_at timestamptz, systems_touched text[] not null default '{}',
  purge_after timestamptz);
create table app.erasure_log (id bigint generated always as identity primary key,   -- re-applied after any restore (10)
  email_hmac text, phone_hmac text, erased_at timestamptz not null default now(),
  reason text not null check (reason in ('dsr','retention')),
  dsr_request_id uuid references app.dsr_requests on delete set null,
  clickup_task_id text, clickup_deleted_at timestamptz); -- the drain deletes the task within 30 days (10)
create table app.zcta_county (zcta text not null check (zcta ~ '^[0-9]{5}$'),   -- Census 2020, public
  county_fips text not null check (county_fips ~ '^[0-9]{5}$'), state_code text not null,
  land_share numeric(5,4) not null, primary key (zcta, county_fips));
create table app.market_slots (id uuid primary key default gen_random_uuid(),  -- the market register (04)
  trade text not null check (trade in ('hvac','plumbing')), market_name text not null,
  county_fips text[] not null check (cardinality(county_fips) >= 1),              -- the MSA's county list
  basis text not null check (basis in ('client','homets_exclusion','held')),   -- homets_exclusion = HOMETS_COUNTY_FIPS
  effective_from date not null, effective_to date, note text);

do $$ declare t record; begin                            -- RLS on, no policies, no anon or authenticated grants
  for t in select tablename from pg_tables where schemaname = 'app' loop
    execute format('alter table app.%I enable row level security', t.tablename);
    execute format('revoke all on app.%I from public, anon, authenticated', t.tablename);
    execute format('grant select, insert, update, delete on app.%I to service_role', t.tablename);
  end loop; end $$;
alter default privileges in schema app revoke all on tables from public, anon, authenticated;
```

Later migrations add `updated_at` triggers, the triggers that move `leads.last_activity_at` on each submission and each two-way `lead_touches` row, and the trigger that sets `purge_after` from the class's `keep` and `anchor`. v2 adds `market_checks` and `partner_referrals` once `08` fixes their fields. `seed_identities` and `reservation_openings` are on `schema-allowlist.txt` (the firewall, below).

**The backup role** (`supabase/migrations/20261012000100_backup_reader.sql`). Every `app` table has RLS on and no policies, and `pg_dump` refuses to dump such a table for a role that can't bypass RLS, so the nightly backup needs its own role:

```sql
create role backup_reader login bypassrls;               -- the password is set from the vault, never committed
grant usage on schema app to backup_reader;
grant select on all tables in schema app to backup_reader;
alter default privileges in schema app grant select on tables to backup_reader;
```

If Supabase's `postgres` role can't grant `bypassrls` (verify), the migration instead adds a `for select to backup_reader using (true)` policy on each `app` table, and the job runs `pg_dump --enable-row-security`.

**RPC functions** live in `public` and run as `security invoker` with `set search_path = ''`. Each gets `revoke execute … from public, anon, authenticated; grant execute … to service_role;`. The revoke is required: Supabase's default privileges let `anon` execute any new function in `public`.

| Function | Does |
|---|---|
| `ingest_submission(p jsonb)` | In one transaction: if the key already exists, returns the stored ids marked as a duplicate. Otherwise it upserts the lead by email (non-null new values win). A `phone_missed` event matches by `phone_e164` instead, and creates a phone-only lead when nothing matches; a later submission whose phone matches a phone-only lead fills in that lead's email rather than creating a second lead. A new lead is linked to an outbound one by `08` F9 step 5's match rules (`parent_lead_id`); more than one candidate links nothing and alerts the founder. It inserts the submission, with its `channel` and, for an eligible event, the `calling_rule_version` from `server/sla.ts`, then the form's child row; a reservation also gets its first `reservation_openings` row. It adds `seed` to `flags` when the email or phone HMAC matches an unretired `seed_identities` row, and sets the lead's `retention_class` (below). It writes `consent_evidence` from the HMACs the Function passes, with its `channel`, plus `captured_by` and `vendor_call_id` for a spoken consent (`08` F8). A staff intake answered live writes its `inbound_call` touch, and a zone decline its `suppression` stub, with `expires_on` set to the creation date plus 12 months (the `zone_decline_stub` class). It then applies `08`'s duplicate rules and returns the ids. |
| `qualify_context(p jsonb)` | Called in pipeline step 8, for ZIPs outside the zone only. Returns `market_status` (`open`; `taken`; `review`, when the ZIP straddles claimed and unclaimed counties; or `unknown`), plus `existing_purchase`, `prior_decline`, and whether an unexpired `review_clearances` row covers this email, ZIP, and trade. It never returns a register value (`04`'s anti-identification rule), and never returns `taken` because of a `homets_exclusion` row: the zone check has already declined those ZIPs. |
| `record_stripe_event(p)` · `upsert_cal_booking(p)` · `record_lead_touch(p)` · `record_stage_event(p)` | Webhook writes. Stripe events are skipped if already seen, then apply the status order in `#stripe`. A touch or stage event whose vendor call id or ClickUp event id is already stored is ignored, so an `inbound_call` a staff intake already wrote lands once. |
| `clear_review(p)` | Writes the founder's clearance after discovery (`08` #qualification) |
| `register_seed(p)` · `carry_reservation(p)` · `record_payment(p)` | Staff-page writes (`#forms`). `register_seed` stores or retires a seed's HMACs, from the founder's or the enforcer's account only. `carry_reservation` applies `08` F2 step 7 to one reservation: it closes the current `reservation_openings` row as `carried`, moves `opening_date`, opens the next row, and raises `carry_count` unless the new opening is a `{capacity date}`. A carry past `08`'s limit (open question 20: two) is refused, and the reservation lapses instead. `record_payment` records an F10 payment (`08` F10 step 3): the `audit_purchases` row with its `payment_route` and invoice or transfer reference, as `paid`, or `processing` for ACH through a Stripe invoice. It then runs the capacity count in `#stripe`, so `AUDIT_CAPACITY` counts every route. |
| `record_opt_out(p)` · `record_consent_confirm(p)` | The `#optout` writes. An opt-out inserts one `suppression` row per address and reason (a repeat is ignored) and returns the lead's `clickup_task_id`. A confirmation inserts `consent_evidence` with `channel = 'email'`, keyed on the token id (a repeat returns the first row), and sets `audit_reservations.phone_consent_confirmed_at`. |
| `record_email_event(p)` · `record_walkthrough(p)` | The Resend webhook's write (`#notifications`), which sets `leads.email_status`; and a teardown deliverable's link, revocation, and deletion times (`#deliverables`) |
| `synthetic_status(run)` · `dsr_export(email)` · `dsr_erase(p)` | The synthetic run's check; data-subject requests (`10` sets the process). `dsr_erase` takes the email and its HMAC, and writes `erasure_log`. It also revokes any live teardown link at once and queues the files' deletion (`#deliverables`). |

**Retention.** `10` #retention sets every class and period; `app.retention_policies` carries its table, and nothing here restates it.
- **Class.** `ingest_submission` assigns the class from the form and outcome: `calculator` (a lead whose only submissions are calculator emails), `zone_decline` (`exclusion_zone`; its `suppression` stub is `zone_decline_stub`), `st_list` (`not_servicetitan`), `declined` (any other hard decline), or `prospect`. A later submission can move a lead to a longer-kept class, never a shorter one. The Stripe webhook moves a lead to `purchase` on payment; `client` is set by hand when an MSA is signed.
- **Purge date.** `purge_after` is the class's anchor plus its `keep`. For most classes the anchor is the last activity: the latest submission or two-way `lead_touches` row, so a live conversation keeps a lead. A zone decline's submission and answers get their own, shorter `purge_after`, whatever the lead's class (the firewall).
- **The nightly job.** Each night, `pg_cron` runs `app.run_retention()`:
  - It deletes rows past `purge_after`, unless `legal_hold` is set.
  - It deletes zone-decline `suppression` stubs past `expires_on` (12 months, `zone_decline_stub`), and `is_test` rows in `suppression` and `consent_evidence` after 7 days (`synthetic`). `email_events` rows go with their lead. Every other `suppression` row is kept (`10`).
  - Leads that have a purchase are anonymized instead: contact fields are nulled, contact keys are stripped from their submissions' `payload`, and the email becomes `erased+<id>@erased.invalid`. `.invalid` is reserved by RFC 2606, so it can never be delivered, and the name keeps the dot that `leads`' email check requires.
  - It never deletes a child row of a lead with a purchase, because `audit_purchases` restricts those deletes.
  - It expires only `available` credits past `credit_expires_on`; a `committed` credit waits for its invoice (`#stripe`).
  - It writes each purged lead's `clickup_task_id` to `app.erasure_log`, and the drain deletes the task within 30 days (`10`).

D1's own periods are set in this document (the `#data` table above), and `10` #retention's first row adopts them.

**The ServiceTitan firewall** (`techeo.guardrails` #coi, rules 4 and 7). Client ServiceTitan customer data never enters this database. Four controls:
1. No form takes a file, and no endpoint accepts `multipart/form-data`, with one exception: the one-click unsubscribe (`#optout`), which RFC 8058 lets mailbox providers send as multipart. It reads at most 1 KB, parses only the `List-Unsubscribe` field, and stores nothing from the body. Teardown deliverables go from a staff browser straight to R2 (`#deliverables`), never through a Function or into Supabase.
2. `tests/unit/schema-guard.test.ts` fails if a migration creates a table missing from `schema-allowlist.txt`, or adds a column matching `customer|job|invoice|appointment|technician|servicetitan|recording`. The allowlist names the only exceptions: the Stripe ids, `recording_mode`, and the teardown's `recording_rule_checked_on` and `recording_rule_version`.
3. Audit exports, recordings, and screenshots go to the engagement storage `techeo.audit` defines. The only free text stored here is `notes`, capped at 1,000 characters.
4. No Storage buckets exist.

**Migrations** use the Supabase CLI and follow the expand/contract pattern (add new structure first, remove old structure only once nothing uses it), so any deployed version of the site works against both the old and new schema. That is what makes a rollback safe. `db.yml` applies migrations to staging on merge, then to production from `main` in the `production` environment, always before the site deploy that needs them. The approval is the founder's required code-owner review of every change under `supabase/migrations/**` (`#repo`); a manual re-run checks `github.actor` against the founder's account before touching production. An applied migration is never edited.

**Done when:** `supabase test db` (pgTAP) confirms the following:
- `anon` and `authenticated` hold no privilege on any `app` table and cannot execute any `public` function.
- Calling `ingest_submission` twice with the same key stores one submission.
- One fixture per `08` #qualification row passes through `ingest_submission` with the right outcome, `decline_reasons`, and `review_reasons`, including a reservation without fields 9, 11, 13, and 14, and a `qualify_context` timeout that stores `history_unknown`. A qualify row missing any of those four is refused.
- Every `heard_from` key in `08` #form-audit row 17 is accepted, and `search_or_ai` is refused.
- Every id in `CONSENT_VERSIONS` and `consent.ts` has a row in `app.consent_versions`.
- Credit: readout May 5, retainer signed May 20, credit applied Sep 7 → accepted. Signed Jun 10 → `committed` refused.
- Payment routes (`08` F10): a `bank_transfer` purchase with a `transfer_ref` and no `checkout_session_id` is accepted, and so is a `stripe_invoice` purchase with an `invoice_id`. A `checkout` purchase without a session id is refused.
- Teardown origin (`08` F9): an `outbound` row with `authority_confirmed = false` and no `role` is accepted. A `request` or `partner` row missing either is refused.
- Seeds (`08` #sla): a submission whose email or phone HMAC matches an unretired `seed_identities` row gets `seed` in `flags`; a retired row matches nothing.
- Missed calls (`08` #unanswered): a `phone_missed` submission from an unknown number stores a phone-only lead, and a later reservation from that number fills in the same lead's email. A lead with neither email nor phone is refused.
- SLA stamps: a submission with `sla_due_at` and no `calling_rule_version` is refused, and a malformed version is refused.
- Carries (`08` F2 step 7): a carry to the next seasonal opening raises `carry_count` and adds a `reservation_openings` row; a carry to a `{capacity date}` adds the row without raising the count; a third counted carry is refused.
- Phone consent (`08` F8): a `consent_evidence` row with `channel = 'phone'` and no `captured_by` is refused. `lead_touches` accepts `inbound_call`, and a replay with the same vendor call id stores one row.
- Outbound matching (`08` F9 step 5): a site teardown from the owner's address on the shop's domain sets `parent_lead_id` to the outbound lead; two candidates link nothing.
- One case per retention class purges or anonymizes on schedule, including a zone-decline stub deleted 12 months after it was created, and a `legal_hold` row survives. `run_retention()` anonymizes a purchased lead without a constraint error and leaves its purchase rows intact.
- `backup_reader` can select from every `app` table and cannot insert.

## Notifications {#notifications}

**Machine-sent email goes through Resend,** from `notify.techeo.com`.
- **Volume:** the Free plan allows 3,000 a month and 100 a day (verify). The synthetic run uses about 8 a day.
- **Why a subdomain:** Resend recommends one, and it keeps machine mail's reputation apart from the founder's Workspace mail.
- **Key and addresses:** the API key can only send, and only from that domain. From: `Techeo <team@notify.techeo.com>`. Reply-To: `team@techeo.com`, a Workspace group with the founder and the receptionist's intake address. `08` confirms it; `02` open question 2 governs publishing it.
- **No duplicates:** each send carries `Idempotency-Key` = job id (verify support), backed by the job's `external_id` check.
- **Opt-out on every send.** Each message carries `List-Unsubscribe` and `List-Unsubscribe-Post` headers and the footer's `{unsubscribe_link}` (`#optout`), plus Resend tags `lead_id` and `job_id`, so webhook events map back to a lead. Before each C email, the job checks `app.suppression` by the address's HMAC and drops a suppressed send (`done`, `last_error = 'suppressed'`). S email about a purchase in progress still goes (`10` #can-spam item 4).

**Who gets what.** `08` owns every message's content and trigger; this table is the transport routing. Nothing that reaches the receptionist or ClickUp carries market data (`08` #qualification and #pipeline; `10` #data-inventory).

| Event | Founder email | Receptionist card | ClickUp | Prospect email |
|---|---|---|---|---|
| `08` #sla eligible events: `reserved`, `needs_conversation`, `qualified`, `checkout_unavailable`, teardowns accepted or under review, `state_mismatch` | Yes | Yes | A task in `new` | `08`'s confirmation |
| `phone_missed` (`08` #unanswered), also an eligible event | Yes | Card V | A task in `new`, or a comment on the caller's task when the number matches a lead | None: there is no address |
| `exclusion_zone` declines | Only the subject `[No call] Exclusion-zone decline`, the date, and the lead id | **Never** | Priority 4, in `declined by us`, with `08`'s decline tag. No answers or bands | `08`'s decline email (E25) |
| Other hard declines | Yes, subject `[No call]` | **Never** | Priority 4, in `declined by us`, with `08`'s decline tag | `08`'s decline email |
| `form_calculator_email` | No; listed in the weekly digest | Never | **Never** | E20 only |
| `spam_suspect` (`08` #form-rules 7) | Yes, flagged | Yes, flagged (the agent verifies the business before calling) | Task, flagged | `08`'s confirmation |
| Stripe, Cal.com, and ACH events | Per `#stripe` and `#scheduling` | Only where `08` names a call (card P; the ACH-failure call) | Updates the lead's task | `08`'s |
| Synthetic runs | `SYNTHETIC_INBOX` only | Never | The "Synthetic" list | `SYNTHETIC_INBOX` |
| Honeypot quarantine | The weekly ops email only | Never | None | None |

- **`exclusion_zone` declines** (the firewall, `10` #retention): the founder email carries only the subject `[No call] Exclusion-zone decline`, the date, and the lead id. The ClickUp task carries no answers or bands: its name is "Exclusion-zone decline · {date}", and its description holds only the lead id.
- **`spam_suspect`** gets no founder release first (`08` #dependencies). The card goes out inside the SLA; the agent checks that the business is real (its website or listing matches the name and phone), calls if it is, and clears the flag. Only confirmed spam leaves the SLA.

**The founder email** goes to `NOTIFY_FOUNDER_EMAIL`, or only to `SYNTHETIC_INBOX` for test runs. It is plain text, plus a matching minimal HTML part.

| Part | Content |
|---|---|
| Subject | `[Call by 2:45 p.m.] Audit reservation: Acme Heating (HVAC, 75201)`. The due time comes from `server/sla.ts` (D11 hours, `08`'s holiday list, and the lead-local guard). Declines read `[No call] Not residential: …`, except an exclusion-zone decline, whose subject is exactly `[No call] Exclusion-zone decline`. |
| First line | "The receptionist calls {name} at {tap-to-dial phone} by {due}, card {R · P · Q · C · T · V}." |
| Body | Contact details, with exclusion-zone and unknown-ZIP flags. Every answer under `03`'s labels. Outcome, `decline_reasons`, `review_reasons`, and `rules_version`. Season state and reason. Market status. Landing path, `utm_*`, click-id presence, referrer host, `heard_from`. Flags (bot check, duplicate, state mismatch, test). ClickUp and Supabase links. Submission and lead ids, build SHA, and time received. An exclusion-zone decline's email has none of this: only the date and the lead id (above). |
| Never | IP address, full referrer URL, user agent, Turnstile token |

**The receptionist callback card** goes to `NOTIFY_RECEPTIONIST_EMAIL`, only for `08` #sla's eligible events. It never goes out for hard declines, calculator emails, or synthetic runs.

| Part | Content |
|---|---|
| Subject | `[Call by 2:45 p.m. CT] Reservation callback: Acme Heating` |
| Body | "Call {name} ({company}) at {tap-to-dial phone} by {due} [TZ], {lead-local due} their time ({lead_tz}). Request: {reservation · Engine Audit · free phone teardown · missed call}. Script: `08` card {R · P · Q · C · T · V}." Nothing else, apart from two notes: "Flagged: check the business is real (website or listing matches the name and phone) before calling" for `spam_suspect`, and "Their email bounced: confirm the address on the call" after a hard bounce (below). |
| Never | Market status or any market value, review or decline reasons, revenue or truck bands, other answers, notes, UTM data, links to Supabase |

The SLA timer sends the same card again, marked "Reminder," 5 minutes before the due time if no dial is logged (below).

**The prospect's email** (content and triggers are `08`'s) uses the same jobs. For `bot_check = missing`, no automated confirmation is sent (brief v2 D11; `#forms` step 7).

**`tests/unit/notify-redaction.test.ts`** renders every receptionist card and every ClickUp payload from the `#qualification` fixtures. It fails if a card contains "market", a revenue or truck band, or a decline or review reason, or if a ClickUp payload contains "market" or a review reason. It also renders a seed's card and task, and fails if either the card or the task name contains `seed` (`08` #sla). It also renders the founder email and the ClickUp payload for an `exclusion_zone` decline, and fails unless the email holds only the subject `[No call] Exclusion-zone decline`, the date, and the lead id, and the payload holds no answer, band, ZIP, trade, or CRM value.

**ClickUp** is transport only here: **statuses, list names, tags, and priorities belong to `08` #pipeline.** The task lives in Techeo's own Workspace (open question 4), Space "Pipeline", List "Leads". A later submission from the same lead adds a comment rather than a second task.

```http
POST https://api.clickup.com/api/v2/list/{CLICKUP_LIST_ID}/task
Authorization: {CLICKUP_API_TOKEN}
{ "name": "Audit reservation · Acme Heating · HVAC · 75201",
  "markdown_content": "**Call by 2:45 p.m.** …contact details, ZIP, trade, CRM, band-level answers, source, lead id…",
  "status": "new", "priority": 2, "assignees": ["{CLICKUP_FOUNDER_USER_ID}"],
  "tags": ["form_audit_reserve", "site", "waitlist-season", "hvac", "lead-3f2a9c1e"],
  "due_date": 1795466700000, "due_date_time": true, "notify_all": false }
```

`1795466700000` is Mon Nov 23, 2026, 2:45 p.m. CST (20:45 UTC). Status, priority, and tags take `08`'s values; the example shows a reservation.

- **Content.** `markdown_content` holds contact details, ZIP, trade, CRM, the band-level answers, and the source. It never holds `market_status` or `review_reasons` (`08` #pipeline, "Never in ClickUp"). A decline appears only as `08`'s decline tag. An exclusion-zone decline's task holds only the lead id and the date (above).
- **No duplicate tasks.** The job uses `leads.clickup_task_id` and D1's `external_id` first. If Supabase is unreachable, it filters the list by the `lead-<first 8 hex>` tag and confirms the full lead id in the description. Payments, ACH failures, and bookings update the same task.
- **Plan limits.** About 100 API requests per minute per token. On the Free Forever plan, Custom Fields are metered by use, not by field: about 60 uses per Workspace in total, spent each time a value is set, and never reset (verify). The synthetic run alone would spend them in about ten days. So on Free, the lead id goes in the description and a tag, the SLA due time is the native `due_date`, and no custom field is set, including by the synthetic run. `08`'s custom fields arrive only with a paid ClickUp plan (open question 4).
- **The status webhook.** `taskStatusUpdated`, HMAC-verified, writes one `app.stage_events` row per move through `record_stage_event`. It never writes `lead_touches`, because a status change doesn't stop the SLA clock (`08` #sla). When the new status id equals `CLICKUP_STATUS_READOUT_HELD` (`08`'s `readout held`), it starts the credit (`#stripe`).

**The SLA's evidence** (`08` #sla, which `09` measures):
- **Call events.** `POST /api/receptionist/call-event` takes the vendor's per-call event (`08` #receptionist, must-haves 4 and 10). It arrives by the vendor's webhook, or by a Zapier step that posts it, including Zapier's email parser for a vendor that sends only structured email. It is authenticated with an HMAC signature, or a shared secret in a header where the vendor can't sign (`RECEPTIONIST_WEBHOOK_SECRET`), and Access lets the path through. It matches the number to a lead's `phone_e164`, then handles the event by kind:
  - **An outbound dial** calls `record_lead_touch` with `source = 'receptionist_log'`, keyed on the vendor's call id. Only an outbound dial to the lead's number stops the clock, with the one exception below. The founder's own dials are logged by hand (`source = 'manual'`).
  - **An inbound call answered live,** from a number that matches a lead, writes an `inbound_call` touch. A staff intake writes the same row under the same call id (`08` F8), so it lands once either way. It stops no clock, except that it closes a `phone_missed` event from that number that is still due (`08` #unanswered).
  - **A missed call** (a voicemail, an abandon, or a failed overflow) becomes a `phone_missed` submission through `#forms`' capture steps 9–12, keyed on the vendor's call id, with `channel = 'phone'`, `bot_check = 'vendor'`, and the call's start as `received_at`. `08` #unanswered's skip list runs first: suppression by the number's HMAC, `do_not_contact`, the monitoring line, withheld caller ID, and the rest. The phone check on `leads` admits North American (+1) numbers only, so any other caller ID is logged like a withheld one.
- **Due times.** `server/sla.ts` sets `sla_window`, `sla_due_at`, `promise_due_at`, and `calling_rule_version` on `app.submissions` for `08`'s eligible events only, using D11's hours, `08`'s holiday list, and `08` #sla's lead-local guard.
  - **The window is state by state.** The guard reads the lead's `state_code` against `10` #quiet-hours' calling-hours table, copied into `src/config/calling-hours.ts` under its version id (the first is `hours-2026-10-v1`), and stamps the version it used on the submission. The window is applied in `leads.lead_tz`.
  - **When the state is unknown.** A phone-only lead (a `phone_missed` caller with no other record, so no ZIP) takes the state and zone of its number's area code from `data/`'s area-code table (`08` #unanswered). A lead with no known state (an unknown ZIP, or an area code the table can't place) gets the table's default window, 08:00–20:00, in `lead_tz`, or in [TZ] when that is unknown too.
  - **A blocked dial.** When the guard blocks the 15-minute dial, the due time follows `08` #sla's rule, and the event is reported with the after-hours events.
  - **A change is a new version.** A new table from `10` is a new version id in `calling-hours.ts`, never an edit to an existing one, and counsel verifies it before launch (`10` #quiet-hours). The founder is the file's code owner (`#repo`). Submissions keep the version they were stamped with.
- **Attempts: at most 3 per request in any rolling 24 hours** (`08` #sla; `10` #quiet-hours). `server/sla.ts` never sends a reminder or re-sends a card (the bounce note included) for a request that already has three `callback_attempt` touches in the past 24 hours, or while the lead's window is closed. A vendor-logged dial that breaks either rule is still stored as logged, and `09`'s weekly report lists it (`08` #sla).
- **Timers, on their own every-minute Cron Trigger** (`* * * * *` in `techeo-ops`, `#hosting`), not on the 10-minute drain, which could fire after the due time (`08` #pipeline). Each run calls `/api/internal/sla-timers`, which reads only the pending `sla_reminder` and `sla_escalation` jobs whose `next_at` has passed, checks `lead_touches` for a dial (or, for a `phone_missed` event, an `inbound_call` answered before the due time), and sends or cancels them. A job that fails is retried by the next minute's run, never by the drain.
  - 5 minutes before `sla_due_at` with no dial: the receptionist card again, marked "Reminder," reading "If you've already dialed, no action needed," because the vendor's event can arrive up to 5 minutes after a dial (`08` #pipeline).
  - 30 minutes past due, during business hours: a push to the founder through `ALERT_PUSH_URL`, with the lead id only. It is held until the end of any `PROTECTED_BLOCKS` window.

**Bounces and complaints: `POST /api/resend/webhook`.** Without it, a mistyped address means E01, E03, and the opening-day E04 never arrive, and nobody knows to confirm the address on the callback.
- **Checked and stored.** It verifies Resend's signature (Svix-style `svix-id`, `svix-timestamp`, and `svix-signature` headers over the raw body, 300 s of skew; `RESEND_WEBHOOK_SECRET`; verify the scheme). It stores the event through `record_email_event`, keyed on `svix-id`, so a replay does nothing, and replies `200` within a second, queuing the rest as D1 jobs. It subscribes to `email.bounced`, `email.complained`, and `email.delivery_delayed` only. It maps the event to a lead by the `lead_id` tag, or else by the Resend email id in D1's `jobs.external_id`. Access lets the path through, as it does the other signed webhooks (`#environments`).
- **A hard bounce** (Resend's permanent bounce type; verify the field) sets `leads.email_status = 'bounced'`. It adds a ClickUp comment, "Email bounced: confirm the address on the callback," and, while the lead's callback is still due, re-sends the receptionist card with the bounce note. Later S and C sends to that address are skipped until the address changes, and F2's opening-day call list shows "email bounced" beside the lead. A soft bounce is only recorded.
- **A complaint** sets `email_status = 'complained'` and writes `app.suppression` (`reason = 'complaint'`, `source = 'resend'`) through `record_opt_out`. It tags the task `email-opt-out` (`08` #pipeline) and emails the founder the lead id. Resend also suppresses a complaining address on its side (verify), so S email stops too — acceptable for a complaint, which is why opt-outs never use Resend's list. The founder's email says S email has stopped, so any purchase in progress is handled by phone.
- **A delay** is recorded. More than 5 in a day raises an alert, because that points at the provider, not the lead.
- **Thresholds** are in `#monitoring`.

`tests/unit/resend-webhook.test.ts` posts signed fixtures. A bad signature gets `401`. A replayed `svix-id` changes nothing. A hard bounce produces the flag, the comment job, and the card job; a soft bounce produces neither. A complaint produces one `suppression` row and the tag job. An event whose tag is missing still maps through `external_id`.

**SMS alerts: no.** The receptionist, not the founder, owns the callback SLA and works from email. System alerts reach the founder as free push notifications (`#monitoring`). Texting from a US 10-digit number requires A2P 10DLC registration (verify the cost), which buys nothing here. Revisit only if the receptionist vendor takes leads by SMS alone.

**Done when:**
- For each form except `form_calculator_email`, submissions at 10:00, at 17:55, on a Saturday, and on the day before a holiday each produce one founder email, one receptionist card when the event is eligible, `08`'s confirmations, and one task with the correct due time.
- A Pacific lead submitting at 16:30 Eastern [TZ] gets the correct due time, and so does one at 08:05 Eastern (05:05 Pacific), which `08`'s lead-local guard moves.
- Every due-time case in `08` #sla's Done-when passes in `tests/unit/sla.test.ts`, including a Texas lead in the Central zone at 09:05 ET (08:05 CT), due at 10:00 ET (09:00 CT). Each eligible submission carries `calling_rule_version = 'hours-2026-10-v1'`.
- A request with three logged attempts in the past 24 hours gets no reminder or re-sent card, and a fourth vendor-logged dial appears in the weekly report.
- A test abandon from a number with no lead record produces a `phone_missed` submission, a phone-only lead, card V, and a task whose due time follows the area code's state window. A test call answered live before that due time closes it. An abandon from a suppressed number, or from the monitoring line, produces no submission and no card.
- A calculator email produces E20 and a Supabase row, and no task, founder email, or card.
- An exclusion-zone decline produces a founder email with only its subject, date, and lead id, a task with no answers, and no card.
- A `spam_suspect` reservation produces a flagged card and task inside the SLA, and `08`'s confirmation, with no founder action.
- A vendor-logged dial stops the clock; a ClickUp status change does not.
- With the drain stopped, a lead due at 14:45 gets its reminder card at 14:40, within one minute, from the SLA timer.
- A resubmission followed by a forced drain creates nothing new, and the redaction and Resend-webhook tests pass.

## Opt-out and consent-confirmation links {#optout}

**Two endpoints carry every promise the footers and consent texts make.** Every C and S footer carries `{unsubscribe_link}` (`10` #can-spam). `10` and `11` #qa 12.14 require one-click `List-Unsubscribe-Post` and suppression within 1 business day. `10` #tcpa-analysis item 3 requires a techeo.com page whose button records `phone-reserve-confirm-v1`.

| Endpoint | Linked from | `GET` | `POST` |
|---|---|---|---|
| `/api/email/unsubscribe?t=<token>` | Every Resend message: the footer's `{unsubscribe_link}` and the `List-Unsubscribe` header | A page with one button, "Stop marketing email" | The page's button, or an RFC 8058 one-click request from the mailbox provider: records the opt-out |
| `/api/consent/phone-reserve-confirm?t=<token>` | E01 for a phone reservation only (`08` F1) | A page with `10`'s `phone-reserve-confirm-v1` text, word for word, and its button "Yes, call me when audits open." | The button: records the consent |

**Tokens (`server/tokens.ts`).**
- **Format:** `v1.<payload>.<signature>`. The payload is base64url JSON. The signature is base64url HMAC-SHA256 over `v1.<payload>`, keyed with `LINK_HMAC_KEY` (a Pages secret, separate from `PII_HMAC_KEY`) and compared in constant time.
- **Payload:** `p`, the purpose (`unsub`, `confirm`, or `file` for `#deliverables`), so a token works only where it was meant to; `jti`, a random 128-bit id; `lid`, the lead id; `eh`, the address's keyed HMAC, so an opt-out can be recorded even when Supabase is down or the lead has been purged; and `exp`. A confirmation token also carries `rid`, the reservation id. **No email address, phone number, or name ever appears in a URL.**
- **Per recipient:** the email job mints a fresh token for each message it renders.
- **Expiry:** an unsubscribe token lasts 400 days, far past CAN-SPAM's 30-day minimum. A confirmation token lasts until the reservation's `opening_date` plus 14 days, and never more than 12 months. Past it, the page gives the other ways in (below).
- **Rotation:** after a rotation, `LINK_HMAC_KEY_PREVIOUS` still verifies tokens for 400 days (`rotate-secrets.md`), so old unsubscribe links keep working.

**Why a button, not the link.** Mail scanners and link previewers open every URL in a message. A `GET` never writes; it only renders the page. The page's button posts back with the token in a hidden field, and `Origin` must be `https://techeo.com`. The one other write is RFC 8058's one-click request, recognized exactly:

```
List-Unsubscribe: <https://techeo.com/api/email/unsubscribe?t=v1.…>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

Resend's DKIM signature must cover both headers (verify that it signs custom headers). A `POST` to that URL whose body is exactly `List-Unsubscribe=One-Click` records the opt-out with `source = 'one_click'` and returns `200` with an empty body. The body may arrive form-encoded or, as RFC 8058 allows, as `multipart/form-data`, read to 1 KB at most (the firewall's one exception, `#data`). The request carries no cookies and no `Origin`, so it skips the `Origin` check, and nothing redirects.

**What a `POST` writes.**
1. **Capture, as a form does.** A D1 job first (`store_opt_out` or `store_consent`, keyed on the token's `jti`), then `record_opt_out` or `record_consent_confirm` in Supabase with a 2.5 s timeout (`#forms` steps 9–10). The response waits only for D1 or Supabase; the rest runs in `waitUntil`, with the drain as backup.
2. **An opt-out** writes one `app.suppression` row (`reason = 'opt_out'`, `source = 'link'` or `'one_click'`) from the token's `eh`. It then queues two jobs. **It never adds the address to Resend's suppression list:** that list blocks every send, so a buyer who unsubscribes from marketing (C) email would also stop getting the service (S) email about a purchase in progress, which `10` #can-spam item 4 and `03`'s unsubscribe page promise continues. The opt-out is enforced only by the send-time HMAC check against `app.suppression` before any C email (`#notifications`), which works even for a purged lead. Resend-side suppression is reserved for complaints and hard bounces.
   - `clickup_update` tags the lead's task `email-opt-out` (`08` #pipeline), which the founder's pre-send check reads before any hand-sent email (`08` #emails).
   - `email_founder` sends one line, "[Opt-out] lead {id}". `10` #tcpa-analysis item 6 makes one stop end all marketing on every channel, so the founder stops marketing calls too.

   All of this lands within minutes, far inside `10`'s 1 business day. The drain alerts if a `store_opt_out` job is pending over 4 hours. **Test:** an opted-out purchaser still receives E12, and receives no C email.
3. **A confirmation** writes one `app.consent_evidence` row: `consent_version = 'phone-reserve-confirm-v1'`, `form_id = 'email_confirm'`, the email and phone HMACs, the time, and `evidence_ref` set to the token's `jti`. It sets `audit_reservations.phone_consent_confirmed_at`, which F2's call list reads (`10` #tcpa-analysis item 3), and adds the ClickUp comment "Confirmed by email: call at the opening." The page names the number and the opening date, because the consent must name the number. It reads both from Supabase by `rid` when it renders. If Supabase is down, it returns `503` rather than show consent text without its number.

**Other ways in.** A reply "stop", a phone request, or a letter is recorded by the founder or the receptionist through `POST /api/staff/opt-out`, behind the staff Access application (`#forms`), with `source = 'reply'`, `'phone'`, or `'manual'`. It runs the same write path.

| Case | `GET` | Button `POST` | One-click `POST` |
|---|---|---|---|
| Valid token, first time | `200`, the page | `303` to the same URL, which shows "Done" | `200`, empty |
| Already recorded (same `jti`, or the address already suppressed) | `200`, saying it's done | `200`, "Done"; nothing new written | `200`; nothing new written |
| Bad signature, wrong purpose, or malformed | `400` page with the other ways in | `400` | `400` |
| Expired | `410` page with the other ways in | `410` | `410` |
| D1 and Supabase both down | — | `503` with the other ways in; an opt-out also goes to the founder synchronously, as in `#forms` step 10 | `503`, so the provider retries |
| Any other method | `405` | `405` | `405` |

**Rate limits.** Requests with a bad or expired token count against the D1 key from `#forms` step 4: 30 a day per key, then `429`. Valid tokens are never limited, because one-click requests arrive from a handful of mailbox-provider addresses.

**Headers and pages.** Every response carries `X-Robots-Tag: noindex, nofollow`, `Cache-Control: no-store`, `Referrer-Policy: no-referrer` (the token is in the URL), and the site's CSP. `server/pages/{unsubscribe,confirm}.ts` renders each page with the built stylesheet, found through the build manifest, and loads no script, GA4 included. The words come from `messages.ts`; drafted here for `03`:
- **Unsubscribe.** H1: "Stop marketing email from Techeo?" Body: "We'll stop within one business day, usually within minutes. If you have an audit in progress, we'll still email you about it." Button: "Stop marketing email." Done: "Done. You won't get marketing email from Techeo."
- **Confirmation.** `10`'s `phone-reserve-confirm-v1` text above its button, filled with the number and date. Done: "Thanks. We'll call you at {number} when audits open on {date}."
- **The other ways in** (expired or invalid): "This link doesn't work anymore. To stop email from Techeo, reply "stop" to any of our emails, or call [TECHEO_PHONE]." For a confirmation: "This link doesn't work anymore. Call [TECHEO_PHONE] and we'll confirm by phone."

**Tests.**
- **`tests/unit/tokens.test.ts`:** forged, truncated, wrong-purpose, and expired tokens fail; a token signed with the previous key passes during its window.
- **Playwright (`tests/e2e/optout.spec.ts`):**
  - A `GET`, and a `HEAD`, with a link-scanner user agent render or answer and write nothing in D1 or Supabase.
  - The button writes one row, and a second press writes none.
  - A one-click `POST`, form-encoded and multipart, writes one row and returns an empty `200`.
  - The confirmation page shows `10`'s text word for word; its button writes one `consent_evidence` row and sets `phone_consent_confirmed_at`.
  - Every response carries `noindex` and `no-referrer`.
  - With Supabase failing, the opt-out still lands from D1 on the next drain.
- **The daily synthetic run** (`#monitoring`) mints both tokens for its own submission. It expects the unsubscribe `GET` to return the page and write nothing. The one-click `POST` must write one `is_test` suppression row and complete the ClickUp tag on the Synthetic task; synthetic runs skip the Resend call. Its confirmation `POST` must write one `is_test` `consent_evidence` row. Each run's address is unique, so no later run is suppressed.

**Done when:** every C and S template renders a working `{unsubscribe_link}` and both headers; a test message sent to Gmail shows Gmail's own unsubscribe control (verify); an opt-out by link, one-click, reply, or phone stops C email by the next drain; the Playwright suite and the synthetic checks pass; and `11` #qa 12.14 passes.

## Stripe {#stripe}

**Decision: a Checkout Session created on the server, only after `form_audit_qualify` returns `qualified`. Not a static Payment Link,** which fails in four ways:

1. **It skips qualification.** A Payment Link can be bookmarked, forwarded, or crawled and paid with no questions answered. That breaks `01`'s rule against taking money from someone we would decline, and target O4.
2. **It loses context.** A session carries the qualification id (`client_reference_id`) and metadata.
3. **It ignores the season.** No session can be created in WAITLIST, and a flip expires any that are open.
4. **It never expires.** A session lasts 60 minutes.

```
mode=payment
line_items[0][price]={STRIPE_PRICE_ID_ENGINE_AUDIT}   line_items[0][quantity]=1      # $1,500.00, "Engine Audit"
payment_method_types[]=card   payment_method_types[]=us_bank_account
payment_method_options[us_bank_account][verification_method]=instant
payment_method_options[us_bank_account][financial_connections][permissions][]=payment_method
customer_creation=always   customer_email={email}   client_reference_id={qualification_id}
metadata[lead_id]  metadata[submission_id]  metadata[build_sha]  payment_intent_data[metadata][qualification_id]
metadata[rehearsal]=true                                       # only on sessions priced by STRIPE_PRICE_OVERRIDE
payment_intent_data[description]=Engine Audit
payment_intent_data[statement_descriptor_suffix]=AUDIT        # "TECHEO* AUDIT", 22 characters at most
invoice_creation[enabled]=true   billing_address_collection=required   allow_promotion_codes=false
consent_collection[terms_of_service]=required   custom_text[submit][message]   custom_text[terms_of_service_acceptance][message]   # 03 #book
submit_type=pay   expires_at={now+3600}                         # Stripe allows 30 minutes to 24 hours
success_url=https://techeo.com/thanks/audit-purchased?session_id={CHECKOUT_SESSION_ID}   cancel_url=https://techeo.com/audit
```

**Why these settings** (verify each against Stripe's documentation at setup):
- **Payment methods are listed explicitly,** so a Dashboard toggle can't add buy-now-pay-later to a $1,500 business purchase.
- **The descriptor uses a suffix,** because since 2024 Stripe rejects `statement_descriptor` on card payments and requires the account prefix "TECHEO".
- **`consent_collection` needs the terms URL** set in the Dashboard.
- **A price guard:** the Function refuses to create sessions unless the Price is exactly 150,000 USD cents, one-time (D6). The only exception is the rehearsal override, which works on previews only.
- **ACH is instant verification only.** Microdeposits would add 1–2 business days before a debit that already takes about four (`03` #price). A bank that can't link means paying by card.

**The webhook, `POST /api/stripe/webhook`:**
- It verifies `Stripe-Signature` with WebCrypto HMAC-SHA256 over the raw body, allowing 300 s of skew.
- It stores each event through `record_stripe_event`. A duplicate returns `200` and does nothing else.
- It replies within a second, and queues email and ClickUp work in the outbox, keyed on the event id (`#data`).
- The API version is pinned on the endpoint, in `STRIPE_API_VERSION`.
- **Capacity alert.** After a purchase becomes `paid` or `processing`, it counts purchases in those states with no `readout_on`. When the count reaches `AUDIT_CAPACITY` (`site.ts`; `08` F2), it alerts the founder and the enforcer: "Flip to capacity within 1 business day."

| Event | Card | ACH | Effects |
|---|---|---|---|
| `checkout.session.completed` | `paid` | `processing` (`payment_status = unpaid`) | Lead marked `audit_purchased` and moved to retention class `purchase`; founder email; ClickUp `audit sold` at priority 1 (`08`); card P to the receptionist; `08`'s access email |
| `checkout.session.async_payment_succeeded` | — | `paid` | "ACH cleared" founder email; the 7 business days can start |
| `checkout.session.async_payment_failed` | — | `payment_failed` | Urgent task; `08`'s failed-payment email; alert to the founder |
| `checkout.session.expired` | `checkout_expired` | same | ClickUp comment "qualified, didn't finish"; `08` decides whether anyone calls |
| `charge.refunded` · `charge.dispute.created` | `refunded` (credit `void`) · `disputed` | same | Email · immediate alert |

**Out-of-order events never downgrade a row.** The ranking: `refunded` and `disputed` beat `paid`, which beats `payment_failed` and `processing`, which beat `checkout_open` and `checkout_expired`.

**Receipts.** Turn on Stripe's customer emails for payments and refunds. Stripe then sends the receipt, a paid invoice PDF (`invoice_creation`), and the ACH mandate confirmation. Techeo sends no receipt of its own.

**The 30-day credit,** tracked on `app.audit_purchases`:
1. The founder moves the ClickUp task to `08`'s `readout held` status, recognized by its status id (`CLICKUP_STATUS_READOUT_HELD`), not its name. The webhook records `readout_on`, sets `credit_status = available`, and `credit_expires_on` becomes the readout date plus 30 days.
2. A reminder fires on day 21.
3. **The window is about signing.** When a retainer is signed on or before `credit_expires_on`, `retainer_signed_on` is recorded and the credit becomes `committed`. That holds even when the retainer starts Sep 7 or Feb 1, as `03` #timeline's late-window notice and `01` open question 1 promise.
4. Whatever system bills the retainer (still undecided in `techeo.financials`) shows "Engine Audit credit (readout {date}) −$1,500" on the first retainer invoice, and `credit_applied_on` and `credit_applied_ref` are recorded. The invoice date has no limit.
5. A constraint rejects `committed` or `applied` unless the retainer was signed inside the window. The nightly job expires only `available` credits past `credit_expires_on`.

**Test plan:** previews and CI use a Stripe sandbox or test mode (verify which Stripe recommends).

| Scenario | How | Expected |
|---|---|---|
| Card success | 4242 4242 4242 4242 | `paid`; one task; one email |
| Card declined | 4000 0000 0000 0002 | No `paid` row |
| 3-D Secure | Stripe's 3DS test card | `paid` after the challenge |
| ACH success | Financial Connections test institution, success account | `processing`, then `paid` |
| ACH failure | The test institution's failure account | `payment_failed`; urgent task |
| Expiry | `POST /v1/checkout/sessions/{id}/expire` | `checkout_expired` |
| Duplicate or out-of-order events | `stripe events resend`; replay `completed` after `async_payment_succeeded` | One row, ending `paid` |
| Refund | Refund in the Dashboard | `refunded`; credit `void` |
| Qualify in WAITLIST | POST to a WAITLIST build | `409`; Stripe is never called |

**The live rehearsal** (a `techeo.web.strategy` exit criterion) happens before the Feb 1 flip, on the date `11` #flip-open sets, following `live-rehearsal.md`:
1. Deploy branch `rehearsal-open` with `SEASON_STATE_OVERRIDE=OPEN`.
2. For the rehearsal only, give the Preview environment live keys and a temporary live webhook endpoint.
3. Pay a $1.00 live Price, allowed on previews only through `STRIPE_PRICE_OVERRIDE` (open question 5). Every session under the override carries `metadata[rehearsal]=true`.
4. Refund it. Delete the endpoint, restore the test keys, and rotate the restricted key.

Previews use `techeo-staging`, so the rehearsal's rows live there, not in production. The daily reconciliation (`#monitoring`) and `08`'s "payment without a `qualified` row" check both skip live sessions marked `rehearsal`, so the rehearsal raises no production mismatch.

**Done when:** every scenario passes; the rehearsal leaves a row in `techeo-staging` that went `paid` then `refunded`, plus a receipt and one task; and the daily reconciliation shows no mismatch for seven straight days.

## Scheduling {#scheduling}

**Cal.com Free, in an account owned by Techeo LLC.** The free plan includes unlimited event types, booking limits, and webhooks (verify). Calendly's free plan allows one event type and no webhooks.

**Linked, never embedded.** A link costs 0 bytes and needs no CSP exception. An embed would load Cal.com's `embed.js` and an iframe app onto `/thanks/audit-purchased`, the page every buyer lands on, bringing third-party JavaScript and a risk to responsiveness. Links open in the same tab.
- **The thanks page** links to the bare booking URL.
- **`08`'s purchase email** links to a prefilled one (`?name=…&email=…&metadata[purchase_id]=…`). Cal.com returns that metadata in its webhook, which ties the booking to the purchase.

| Event | Slug | Length | Rules |
|---|---|---|---|
| Discovery call with Blake | `discovery` | 30 min | Booked by the receptionist during a call, or through a link `08` sends. At least 4 hours' notice, 15-minute buffers, at most 21 days out. The shared limits below. **Closed in WAITLIST.** |
| Opening-day discovery | `discovery-queue` | 30 min | Hidden; booked by the receptionist only, for reservations on opening day (`08` F2). The "Techeo calls" schedule, the same notice and buffers, at most 35 days out. The shared limits below. **Closed in WAITLIST.** |
| Audit kickoff | `audit-kickoff` | 20 min | Booked by the buyer. At least 1 business day's notice, at most 1 a day, at most 10 days out. |
| Readout | — | 30 min | Scheduled by the founder, by hand (`techeo.audit`) |

**The "Techeo calls" schedule, in [TZ]** (open question 8): Monday 13:00–16:30; Tuesday to Thursday 10:30–12:00 and 13:00–16:30; Friday 10:30–12:00. That leaves out weekday mornings before 10:00, Monday morning, and Friday afternoon (D11; `techeo.guardrails` #protected).
- **The weekly CSM 1:1** is blocked by a recurring busy event, and by connecting the Homets calendar for conflict checks only, so just free/busy times cross over (open question 9).
- **Heat waves, hard freezes, and holiday gaps** go in as date overrides on the day they are called.
- **`POST /api/cal/webhook`** checks `X-Cal-Signature-256` (an HMAC-SHA256), handles `BOOKING_CREATED`, `BOOKING_RESCHEDULED`, and `BOOKING_CANCELLED` (Cal.com's spelling), updates `app.cal_bookings` and the ClickUp task, and raises an alert if any booking lands in a protected block.

**Discovery limits, shared by both discovery events** (`08` F2 and open question 5): at most 2 a day, and 4 a week in February, 5 a week in March and April (`SCHEDULING.discoveryWeeklyCap`; 4 in months `08` hasn't set).
- **Per event.** Each event carries the day and week limits. `season.yml` updates the week figure on the 1st of each month.
- **Across both.** Cal.com's frequency limits count each event type on its own (verify). So `cal/webhook` counts bookings across both events, and when a day or week is full, it blocks the rest of it with a date override through the API (verify). The override goes on a discovery-only copy of the "Techeo calls" schedule that both discovery events use, so it never closes kickoff slots.

**The F7 cutoff** (`#season-state`). 21 days before the last OPEN day of each window, `season.yml` sets both discovery events' date-range end to that day.

**Done when:**
- In WAITLIST, neither discovery event offers a slot. In OPEN, they offer none before 10:00, none on Monday morning, none on Friday afternoon, and none during the 1:1.
- A `discovery-queue` booking writes to `app.cal_bookings`.
- A fifth February booking in one week, across both events, is refused.
- On Mon Apr 12, 2027, no discovery slot is offered on or after May 1.
- A booking made through a prefilled link sets `kickoff_booked_at` on the right purchase.

## Teardown and readout deliverables {#deliverables}

**Every link the live copy promises will expire does expire, on a Techeo-owned system.** `03`'s `/thanks/teardown` tells requesters the walkthrough link expires after 90 days. `10` #retention deletes the file at 120 days, and E14 and E19 send links that expire on `{expiry_date}`. `10` #processors lists the video host and the readout recorder as not yet chosen. This section chooses them.

| Deliverable | Made with | Stored in | Link | Link expires | File deleted |
|---|---|---|---|---|---|
| Teardown walkthrough: 15–20 minutes of Techeo's own screen and voice | OBS Studio (free, on the founder's machine), exported as 720p H.264 MP4, about 100–150 MB | R2 bucket `techeo-deliverables` in Techeo LLC's Cloudflare account (D4), under `td/<teardown request id>/` | `https://techeo.com/api/files/<token>` | 90 days after sending (`walkthrough_expires_at`) | Day 120 |
| Its captions | Transcribed on the founder's machine with `whisper.cpp`, so no third party hears it, then corrected by hand; WebVTT | Same prefix | The walkthrough page's `<track>` | Same | Same |
| The scored sheet | Exported from the rubric sheet as a tagged PDF (`10` #accessibility, documents and media) | Same prefix | The walkthrough page | Same | Same |
| Readout recording | OBS Studio on the founder's machine while the readout runs on Google Meet (open question 18), with a caption file made the same way | The engagement storage `techeo.audit` names; by default the audit record's folder in Techeo's Drive (`10` #processors) | Drive sharing to the buyer's named attendees only ("Restricted", never "Anyone with the link"), with Drive's access expiration set to E14's `{expiry_date}` (verify that expiration applies to accounts outside Techeo's Workspace) | E14's `{expiry_date}` | With its class, `purchase` or `client` (`10` #retention) |
| Readout report | `techeo.audit`'s template, exported as a tagged PDF | Same | Same | Same | Same |

**Why two homes.** A teardown deliverable holds only Techeo's notes about how a prospect's office answers the phone, so it can live beside the site. A readout recording can show the client's own screens and figures. The ServiceTitan firewall (`#data`; `10` #security) keeps that out of every website system, so it stays in engagement storage and never touches R2, D1, or Supabase.

**Uploading a walkthrough** (`functions/api/staff/deliverable.ts`, behind the staff Access application):
1. The founder opens the staff page for the teardown request and picks the MP4, the VTT, and the PDF.
2. The Function checks that the request is `in_progress`. It returns three presigned R2 `PUT` URLs, each valid for 15 minutes and signed over its content type and the file's exact length, which must be under a cap: MP4 at most 500 MB, VTT at most 200 KB, PDF at most 10 MB. The browser uploads straight to R2; the bucket's CORS rule allows `PUT` from `https://techeo.com` only. No file passes through a Function.
3. No link is issued until all three objects exist (checked with `HEAD`), so no walkthrough goes out without its captions and its sheet.
4. `record_walkthrough` sets the prefix, `walkthrough_sent_at`, and `walkthrough_expires_at` (sent plus 90 days, which a constraint enforces). The page returns the link and its `{expiry_date}` in words for E19, which the founder sends by hand (`08` #emails).

**Serving `/api/files/<token>`:**
- **The token** is `#optout`'s format with purpose `file`, carrying the teardown request id and `exp` equal to `walkthrough_expires_at`.
- **Revocation is checked every time.** Before serving anything, the Function checks Supabase that `walkthrough_revoked_at` is null, so an erasure takes effect at once. If Supabase can't answer, it returns `503`: it fails closed.
- **The page.** `GET /api/files/<token>` renders the video with `controls`, `preload="metadata"`, and the caption track on by default, plus download links and the line "Download anything you want to keep. This link expires {expiry_date}." `…/video.mp4`, `…/captions.vtt`, and `…/sheet.pdf` stream from the R2 binding `DELIVERABLES` with `Range` support, so the video can seek. The CSP needs no change: media falls back to `default-src 'self'`.
- **Unlisted and never indexed.** Nothing links to these URLs, and they are never in the sitemap. Every response carries `X-Robots-Tag: noindex, nofollow, noarchive`, `Cache-Control: private, no-store`, `Referrer-Policy: no-referrer`, and a neutral `Content-Disposition` filename (`techeo-teardown-2026-12-04.mp4`). No GA4.
- **After expiry or revocation:** `410`, with "This link expired on {date}. Questions? Call [TECHEO_PHONE]."

**The daily sweep** (`/api/internal/deliverables-sweep`, from `techeo-ops`' daily trigger):
1. **Revoke.** It sets `walkthrough_revoked_at` on every row whose `walkthrough_expires_at` has passed. The token also expires by itself; the flag is a second lock.
2. **Delete.** For every row sent 120 or more days ago, it deletes each object under the prefix, confirms with a `HEAD` that returns `404`, and sets `walkthrough_deleted_at`. A failure leaves a `deliverable_delete` job for the drain, and an alert fires after 24 hours.
3. **Orphans.** It lists the bucket and deletes any object older than 120 days, and any upload older than 1 day with no `record_walkthrough` row. An R2 lifecycle rule that deletes objects after 121 days is the backstop (verify lifecycle rules on the plan).

**Erasure (`10` #rights).** `dsr_erase` revokes the link at once and queues `deliverable_delete`; the objects are gone within one drain run, and `erasure_log` records the prefix. A readout recording in Drive is deleted by hand, as `10` #rights says, unless the buyer's company holds it under `#terms`' license.

**The monthly check.** On the 1st, the daily trigger also mints the token for every link revoked in the last 45 days and requests it, expecting `410`. It lists the bucket too, expecting no object older than 120 days. Any other result alerts the founder.

**Cost.** About 5 teardowns a week (`08` open question 6) at about 150 MB each, kept 120 days, is about 11 GB at steady state. R2's free tier includes 10 GB-months of storage and free egress (verify), so the rest costs about $0.02 a month. Readouts cost nothing beyond Workspace storage.

**Done when:**
- A walkthrough plays with captions and seeks, on iOS Safari and Android Chrome.
- Its page and files return `noindex` and `no-referrer`.
- With the clock set to day 90, its link returns `410`. At day 120, its objects are gone and `HEAD` returns `404`.
- `dsr_erase` on its lead makes the link return `410` at once and removes the objects by the next drain.
- No link can be issued without the caption file and the PDF.
- A readout recording's Drive share names only the attendees and carries E14's expiration.

## Performance {#performance}

These budgets are stricter than Google's "good" Core Web Vitals thresholds (at the 75th percentile: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1), because the site is the case study.

| Size budget (compressed) | `/` | `/audit`, `/teardown` | Thanks, legal, 404 |
|---|---|---|---|
| HTML | ≤35 KB | ≤30 KB | ≤15 KB |
| CSS | One shared file, ≤18 KB | Same file | Same file |
| Our own JavaScript | ≤12 KB (calculator ≤7, form script ≤3, `analytics-core` ≤1) | ≤5 KB | ≤1 KB (`analytics-core`) |
| Analytics chunks, imported after `load` (`09` #tag-loading) | `analytics-interact` ≤1.5 KB; `analytics-forms` ≤1 KB | `analytics-interact` ≤1.5 KB; `analytics-forms` ≤1 KB; `analytics-thanks` ≤1 KB on `/audit` | `analytics-interact` ≤1.5 KB; `analytics-thanks` ≤1 KB on `/thanks/*` and 404 |
| Vitals chunk, imported after `load` (`09` #web-vitals) | ≤2.5 KB | ≤2.5 KB | ≤2.5 KB |
| Third-party scripts at load | GA4 only; Turnstile waits for form focus | GA4 and Turnstile | GA4 |
| Fonts | ≤70 KB total, ≤3 files (`05`'s three files), ≤2 preloaded | Same | Same |
| Images before the first scroll (375 × 667 screen) | ≤15 KB | ≤40 KB | 0 |
| Images on the whole page | ≤350 KB | ≤250 KB | — |
| Requests at load | ≤15 | ≤18 | ≤10 |

| Metric | CI (Lighthouse mobile, median of 3, no GA4) | Production nightly (with GA4) | Real users, 75th percentile |
|---|---|---|---|
| LCP | ≤1.8 s | ≤2.0 s | ≤2.0 s |
| CLS | ≤0.02 | ≤0.02 | ≤0.05 |
| TBT (the lab stand-in for INP) · INP | ≤100 ms | ≤150 ms | INP ≤150 ms |
| Lighthouse scores: Performance / Accessibility / Best Practices / SEO | ≥95 / 100 / ≥95 / 100 | ≥90 / 100 / ≥95 / 100 | — |

A low-traffic site may never have enough visits to appear in Chrome's public field data (CrUX). `09` reports real-user vitals to GA4 with the roughly 2 KB `web-vitals` library, imported after `load` and idle time as its own chunk.

**Post-load chunks.** `09`'s event code doesn't fit in `analytics-core`, and on thanks, legal, and 404 pages the core alone fills the 1 KB own-JavaScript budget. So `analytics-interact`, `analytics-forms`, and `analytics-thanks` load after `load`, each only on the templates its line names, as the vitals chunk does. `analytics-thanks` fires the key events `audit_reserve_success`, `teardown_request_success`, and `purchase`, so it must fit. Each post-load chunk has its own line above, and none counts against the load budget: not our own JavaScript, and not requests at load. `09`'s fallback cut order is not needed.

**Fonts** (`05` chooses the faces; this section sets how they load):
- **Self-hosted WOFF2** with hashed filenames. No Google Fonts CDN, which would add a connection, a CSP exception, and a third party.
- **Subset** to Basic Latin, Latin-1 (covering `·` and `×`), and `– — ‘ ’ “ ” • … → − ≤ ≥`, following `05`'s subset command, with a matching `unicode-range`.
- **Two families and three files, exactly as `05` lists them** (Public Sans variable 400–700, roman only; IBM Plex Mono 400 and 600), 70 KB or less if all load (`05` measures 48.1 KB). The variable file serves both weights and counts as one file. No italic is loaded (`05` #typography).
- **`font-display: swap`,** with a metric-matched fallback `@font-face` computed at build with `capsize` or `fontaine`, so the swap causes no layout shift.
- **Preload only** the H1 and body face, which is the one Public Sans variable file, with `crossorigin`.

**Images (`astro:assets`):**
- `<Picture>` serves AVIF and WebP with a JPEG fallback, at widths 360–1440 (96, 128, and 192 for the portrait chip, per `05` P1), with a `sizes` value per component.
- Every image carries explicit dimensions. The LCP candidate gets `loading="eager"` and `fetchpriority="high"`; the rest are lazy with `decoding="async"`.
- **Metadata is stripped** at build, and originals are scrubbed with `exiftool -all=` before commit. GPS tags on a truck or board photo would reveal Homets' locations (D9). CI fails on any image carrying GPS or camera-serial tags.

**JavaScript:**
- **The calculator is a plain TypeScript custom element,** not a framework island, which would need an inline bootstrap script a strict CSP must hash.
- **Nothing is inlined.** Scripts bundle to `/_astro/*.js`; `build.inlineStylesheets: 'never'` and `vite.build.assetsInlineLimit: 0` keep CSS and assets out of the HTML.
- **Every script has a `size-limit` entry** in `.size-limit.cjs`, matched by chunk name (`dist/_astro/analytics-thanks.*.js`), so hashed filenames never need updating: the calculator ≤7 KB, `form-enhance` ≤3 KB, `analytics-core` ≤1 KB, `analytics-interact` ≤1.5 KB, `analytics-forms` ≤1 KB, `analytics-thanks` ≤1 KB, and the vitals chunk ≤2.5 KB. Each entry sets `gzip: true`. Gzip usually runs larger than the Brotli Cloudflare serves, so the check errs strict.
- **No prefetching, speculation rules, or service worker** in v1.

**GA4 (`09` configures):**
- `analytics.ts` injects `gtag.js` as an `async` script element (`09` #ga4), so it can prevent the request when it must. It runs in production, and on the `analytics-qa/*` and `rehearsal-open` previews with the QA property's ID (`#environments`). The CSP doesn't change.
- After `load`, `analytics.ts` imports only the chunks the page needs (`09` #tag-loading), then the vitals chunk after idle time. The chunks are same-origin files under `/_astro/`, so they need no CSP change either.
- No Google Tag Manager container: it adds a second script layer that is edited outside git.
- `09` strips `session_id` from `page_location` on the purchase thanks page.
- **The written reason `01` R6 requires for each third-party script:** GA4 is D12's measurement, and Turnstile protects the forms, only where a form exists. There is no third script.

**Cloudflare speed settings:**
- **On:** HTTP/3, TLS 1.3, Early Hints. (Brotli is always on; Cloudflare removed its toggle in 2024.)
- **Off:** Rocket Loader and Email Obfuscation (both inject scripts), Speed Brain, 0-RTT, and Web Analytics injection.
- **Browser cache TTL:** "Respect existing headers".

**Done when:** `lighthouserc.cjs` asserts both tables, including per-path `resource-summary` budgets (font count ≤3, `/` images ≤15 KB before the first scroll and ≤350 KB in all). Lighthouse records every script fetched before the page goes quiet, post-load chunks included. So each path's own-JavaScript assertion is its load line plus the post-load lines for its template: `/` ≤17 KB (12 + 1.5 + 1 + 2.5), `/audit` ≤11 KB, `/teardown` ≤10 KB, `/thanks/*` and 404 ≤6 KB, and legal pages ≤5 KB. Each path's request assertion allows one extra request per post-load chunk. Those assertions and every `size-limit` entry pass on every pull request. Nightly Lighthouse passes 7 nights in a row on the release-candidate preview before Nov 16, then every night on production behind Access from Nov 16 to Nov 19 (4 of 4; `11` #qa 9.2).

## Security {#security}

`server/headers.ts` is the single source of the response headers. An Astro integration writes it to `dist/_headers`, and `functions/api/_middleware.ts` applies the same headers to every Function response. CI checks the Pages limits, because Pages rejects the whole file if either is exceeded: at most 100 rules, and at most 2,000 characters per header line. The production output is below. Preview builds also add `X-Robots-Tag: noindex` under `/*`, and point `Reporting-Endpoints` at their own host.

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com https://challenges.cloudflare.com; style-src 'self'; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; frame-ancestors 'none'; form-action 'self' https://checkout.stripe.com; base-uri 'none'; object-src 'none'; manifest-src 'self'; upgrade-insecure-requests; report-uri /api/csp-report; report-to csp
  Reporting-Endpoints: csp="https://techeo.com/api/csp-report"
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), autoplay=(), bluetooth=(), browsing-topics=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), hid=(), magnetometer=(), microphone=(), midi=(), payment=(), serial=(), usb=(), xr-spatial-tracking=()
  Cross-Origin-Opener-Policy: same-origin
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
/thanks/*
  ! Referrer-Policy
  Referrer-Policy: no-referrer
  X-Robots-Tag: noindex
```

| Directive | Why |
|---|---|
| `script-src` | Our scripts, GA4's loader, and Turnstile. No `'unsafe-inline'`, and CI fails any inline executable script (JSON-LD is data and is allowed). No Stripe.js: Checkout is hosted. |
| `style-src 'self'` | CI fails any `<style>` element or `style=` attribute. If the report-only week shows Turnstile injecting a stylesheet, add its hash. |
| `img-src`, `connect-src` | GA4 collection per Google's tag CSP guide (verify), with Signals and ads features off (`09`); Turnstile, per its CSP reference |
| `frame-src` | Turnstile's iframe. **The scheduling link needs nothing, because it is a plain link.** An embed would need `https://app.cal.com` in `script-src` and `frame-src`, which `#scheduling` rules out. |
| `form-action` | Allows the `303` from `/api/forms/audit-qualify` to `https://checkout.stripe.com/c/pay/…`, a redirect browsers check against `form-action` |
| `frame-ancestors 'none'`, `X-Frame-Options: DENY` | Nobody frames techeo.com; the second header covers older browsers |
| `/thanks/*` referrer | Keeps `?session_id=cs_…` out of referrers sent to Cal.com and GA4 |

**Rollout.** The policy runs as `Content-Security-Policy-Report-Only` for the first week of previews and is enforced from the first production deploy. `/api/csp-report` deduplicates reports into D1, stores at most 100 a day, and sends a daily digest.

**HSTS** is set at the zone, not in `_headers`, so it also covers the `www` and `http` redirects. It rises in steps, on the dates `11` schedules:
- **Production behind Access (`11` G0):** 300 seconds. The dashboard's shortest option is 1 month (verify), so this step is set through the zone settings API or a Response Header Transform Rule, and the rule is removed when the zone setting takes over.
- **Launch, Fri Nov 20:** 1 month (`max-age=2592000`), the dashboard's shortest step.
- **Thirty days after launch (`11` #post-launch):** one year with `includeSubDomains`, provided the preflight found no subdomain that needs plain HTTP.
- **Preload stays off** (open question 10).

**Secrets:**
- **One inventory.** A Techeo password-manager vault lists every secret with its owner, scope, and next rotation date. A break-glass sheet gives the enforcer emergency access.
- **Where they live.** Runtime secrets are Cloudflare Pages secrets per environment, readable only by the founder. Deploy and backup credentials are GitHub environment secrets in the `production` environment, whose deployment branches are limited to `main` (GitHub Team; `#repo`). The approval to use them is the code-owner review every change to `main` needs, because environment required reviewers on a private repository need Enterprise Cloud (verify). `.dev.vars` holds test keys only.
- **Stripe** uses a restricted key (`rk_live_…`): write access to Checkout Sessions, Customers, and Invoices; read access to Prices.
- **Rotation:** yearly, on any contractor change, and at once after a suspected leak (`rotate-secrets.md`).
- **Leak scanning.** `gitleaks` runs in CI and as a pre-commit hook. GitHub's secret scanning needs paid Secret Protection on private repositories (verify).
- **Accounts.** Every D4 account, plus Resend, ClickUp, Cal.com, Better Stack, and Healthchecks.io, belongs to Techeo LLC and uses passkey or hardware-key 2FA. The registrar's and Cloudflare's recovery email is a Techeo mailbox **outside** techeo.com, so a broken zone can't lock out the tools that fix it.

**Dependencies:**
- **pnpm, pinned through `packageManager` in `package.json`** (currently 12.x; verify), blocks dependency install scripts by default. Only `sharp`, `esbuild`, and `workerd` are allowed, through `allowBuilds` in `pnpm-workspace.yaml` (pnpm 11 replaced `onlyBuiltDependencies`; verify). pnpm 11 also stopped reading non-auth settings from `.npmrc`, so `.npmrc` holds registry and auth settings only, and pnpm 12 fails on unknown `pnpm-workspace.yaml` keys when the version is pinned (verify).
- **New releases wait seven days.** `minimumReleaseAge: 10080` (minutes) in `pnpm-workspace.yaml` refuses versions under 7 days old, because several 2025 npm compromises shipped as fresh releases. pnpm's own default is 1 day (verify).
- **Locked installs.** `--frozen-lockfile`, with exact versions.
- **Dependabot runs weekly,** grouping minor and patch updates, with a 7-day cooldown. Security fixes merge within 7 days when high or critical, and within 30 days otherwise.
- **Major upgrades** are done by hand, never within 30 days of a D1 release date.
- **`pnpm audit --prod`** fails the build on high or critical runtime issues.
- **Actions are pinned to commit SHAs,** and `GITHUB_TOKEN` is read-only by default.

**Done when:** `curl -sI` on `/` and `/thanks/teardown` shows exactly these headers, the report-only week ends with no unexplained violations, and every secret has a rotation date.

## Domain, DNS, and email {#dns}

### The domain preflight (D5): Week 1, Mon Sep 28, 2026

The preflight only reads and records; it changes nothing. Results go in `docs/preflight.md`, and `11` schedules the follow-up actions.

| # | Check | How |
|---|---|---|
| 1 | Registrar, registrant, expiry, status codes; who controls the registrar account | `whois` and RDAP. Then sign in to the registrar account and confirm mail reaches the registrant email, or find who holds the login. |
| 2 | Name servers and every existing DNS record | `dig NS SOA MX TXT CAA DS`, plus the current host's zone export |
| 3 | Live email, whose it is, and existing mail tenants | MX present? Does anyone receive mail there today, and is it Techeo's, the founder's, or someone else's? Ask, check the provider, send a test message. Look for `google-site-verification` and `MS=` TXT records, and query Microsoft's user-realm lookup for an `@techeo.com` address, to see whether techeo.com is already verified in a Google Workspace or Microsoft 365 tenant (verify the lookup). |
| 4 | Subdomains | Certificate Transparency logs (search `%.techeo.com` on crt.sh), the zone export, and `dig` on common names |
| 5 | What is published | `curl -sIL` on http and https, apex and `www`; a screenshot |
| 6 | History | The Wayback Machine's CDX URL list (`02` #preflight-redirects takes it as input) |
| 7 | Backlinks | Search Console's Links report, plus one third-party tool |
| 8 | Penalties and reputation | Search Console manual actions and security issues; Safe Browsing; the Spamhaus DBL and SURBL lists (a listed domain can't send mail reliably) |

The dates below are `11`'s: A3 (Workspace and wave-1 accounts) Oct 5–9, A5 (the name-server move) Oct 12–14, A2 and B1 by Fri Oct 16, the slip checkpoint H5 on Fri Nov 6, and G0 on Mon Nov 9.

| Finding | Action | Who; elapsed time | Blocks; decide by |
|---|---|---|---|
| Registrant is the founder or Homets | Change it to Techeo LLC in Week 2. If Homets holds it, record the assignment with the IP license (`techeo.legal` #ip). ICANN approved dropping the 60-day post-change lock, and registrars are rolling that out through 2026 (verify). | Founder; the change takes a day, the Homets assignment up to two weeks with counsel | Nothing: a dated plan meets "Done when". Changed by Fri Oct 16. |
| A vendor registered it, or holds the registrar account | On Mon Sep 28, a written request to move it into Techeo LLC's own registrar account: a push between accounts, or the auth code. Follow up by phone on Fri Oct 2. Then the escalation path below. | Founder; 1–5 business days if the vendor answers | A5, and everything after it. Escalate Fri Oct 9; decide Fri Oct 16. |
| The registrar account or the registrant email can't be reached (no login, so no auth code) | On Mon Sep 28, start the registrar's account-recovery process with the LLC filing receipt (or the founder's ID if the founder is the registrant) and past invoices. If the registrant email sits on a dead domain, ask the registrar to update it once identity is verified. | Founder; about 3–10 business days (verify with the registrar) | A5. Escalate Fri Oct 9; decide Fri Oct 16. |
| An unrelated third party owns it | Stop the build (open question 12): one broker quote against the founder's ceiling | Founder; a week | Everything. Buy or rename by Mon Oct 5, a week after A1 (open question 12). |
| Unregistered | Register it the same day in Techeo LLC's registrar account, for several years, with the transfer lock on | Founder; same day | Nothing |
| Expired or in redemption | Restore it at the current registrar the same day, then transfer | Founder; a redemption restore can take a few days (verify) | A5. Restored by Fri Oct 9, or escalate as for an unreachable account. |
| Transfer-locked (inside 60 days of a registration or transfer) | Keep the current registrar until the lock lifts, set the name servers there, and transfer afterward | Builder, at A5 | Nothing |
| Expires within 90 days | Renew now, for several years | Founder; same day | Nothing |
| DNSSEC on at the current host | Remove the DS record, wait at least 48 hours and at least the DS TTL, then change name servers. Otherwise the domain stops resolving. | Builder; at least 48 hours | A5. DS record removed by Fri Oct 9. |
| techeo.com already verified in another Google Workspace or Microsoft 365 tenant | If it is the founder's or Homets' tenant, remove techeo.com from it (Workspace: remove the domain or close the old account; Microsoft 365: remove the domain in the admin center). If the tenant is unknown or unmanaged, use Google's domain-ownership recovery by DNS verification, or Microsoft's admin takeover of an unmanaged tenant through a TXT record (verify each current process). | Founder, with the builder for the DNS record; a removal takes a day, a recovery or takeover about 1–5 business days (verify) | A3's Workspace creation, and so A5's DMARC test. Started Mon Sep 28; escalate to Google or Microsoft support Fri Oct 9; decide Fri Oct 16. |
| Live email that is Techeo's or the founder's | Recreate every MX, SPF, DKIM, DMARC, autodiscover, and verification record in Cloudflare first. Lower TTLs to 300 s 48 hours ahead, then confirm with `dig @<new-ns>`. Mailbox migration is a separate step. | Builder; 48 hours of lowered TTLs | A5. TTLs lowered by Fri Oct 9. |
| Live email that belongs to someone else (a former business, a vendor, a previous owner) | Don't recreate its MX, SPF, DKIM, or verification records. Tell the mailbox owner in writing that mail to techeo.com stops at the name-server move (A5). After the move their mail bounces: Workspace has no catch-all, and nobody at Techeo reads it. | Founder sends the notice; builder at A5; two weeks' notice | Nothing, if the notice goes out by Tue Sep 29 |
| It serves or redirects to a live Homets or third-party property | Homets: remove the redirect at A5; any link from hometsair.com afterward follows `07` #homets-link. A third party: written notice on Mon Sep 28, with A5 as the cut-off. Either way, delete every record pointing at a host Techeo doesn't control, so no dangling CNAME can be taken over. | Founder sends the notice; builder at A5 | Nothing, if the notice goes out by Tue Sep 29. A third party that claims the domain is the "unrelated third party" row. |
| Zone in another Cloudflare account | Move it; the name servers change | Builder, same day; if nobody can reach that account, as for an unreachable registrar | A5 |
| An earlier site with backlinks | Follow `02`'s mapping rules; `07` decides whether to disavow | Builder, at A2 | Nothing |
| On a blocklist (Spamhaus DBL, SURBL) | Request delisting before the first email | Builder, at A2; several days (verify each list) | The first send from techeo.com or `notify.techeo.com`. Requested by Fri Oct 16. |
| Flagged by Safe Browsing for malware or phishing | Remove or replace the flagged content (the zone move usually does it), then request a review in Search Console's Security issues report | Builder, at A2; Google's review usually takes days (verify) | G0: browsers would warn every visitor, and mail links would be flagged. Review requested by Fri Oct 16. If not cleared at H5, Fri Nov 6, launch moves to `11`'s Tue Nov 24 fallback, or the founder applies open question 12. |
| A manual action | Fix the cause (remove the spam content or links; `07` decides on a disavow), then file a reconsideration request | Builder drafts at A2, the founder signs; Google's reviews take days to weeks (verify) | Not the build: D5 needs the read logged, not the result. Filed by Fri Oct 16. If not lifted at H5, the founder decides between launching Nov 20 with search visibility pending and renaming (open question 12). |
| Parked, empty, or already Techeo's | Nothing to preserve | — | Nothing |

**The escalation path** for a domain Techeo can't yet control (a vendor-held domain, an unreachable registrar account, a stuck restore, or another tenant's claim):
1. **Mon Sep 28 (A1):** the written request or the recovery starts, logged in `docs/preflight.md` with its date.
2. **Fri Oct 2:** a phone follow-up and a second written request.
3. **Fri Oct 9, the end of A3:** escalate. For a vendor, counsel sends a letter (counsel's time is `11`'s budget line). For a registrar, use its dispute or escalation process, then ICANN's registrar complaint form if it stalls (verify the current process). For a tenant, open a Google or Microsoft support case.
4. **Fri Oct 16, B1's date:** if the domain is still not under Techeo's control, the founder applies open question 12's buy-or-rename decision for an ownership problem. For any blocker, `11` brings the floor decision forward ("a slip past Fri Oct 16 brings the floor decision forward"). A rename restarts this preflight on the new name that day.
5. **Fri Nov 6 (H5):** the last checkpoint for the blockers that don't stop the build (Safe Browsing and a manual action).

**Done when:**
- All eight checks are answered.
- Every live record that belongs to Techeo or the founder is recreated and verified, and every other owner has been given notice.
- Search Console (domain property) and Bing Webmaster Tools are verified (`09`).
- The registrant is Techeo LLC, or there is a dated plan to make it so.
- Every blocking finding has its decide-by date in `docs/preflight.md`.

### Zone, registrar, and records

- **Name servers:** Cloudflare, in Techeo's account. Pages serves the bare domain only when the zone is on Cloudflare.
- **Registrar:** Cloudflare Registrar, once a transfer is allowed. The .com price is at cost: $10.44, about $11.15 after Nov 1, 2026 (verify). Transfer lock on; auto-renew on Techeo's card.
- **DNSSEC: on,** seven days after the name-server change proves stable. It blocks forged DNS answers for a domain that takes payments and sends email, and Cloudflare Registrar manages the DS record. The one risk, forgetting to disable it before a future move, is written into the runbook.

| Host | Type | Value | Purpose |
|---|---|---|---|
| `techeo.com` | CNAME (flattened), proxied | `techeo-web.pages.dev` | Created by Pages → Custom domains |
| `www` | AAAA `100::`, proxied | — | Exists only to be redirected: a rule sends it to `https://techeo.com` + path with a 301, query string kept (`02` #host-redirects) |
| `techeo.com` | MX | `1 smtp.google.com` | Workspace (the single-record setup for accounts since April 2023) |
| `techeo.com` | TXT | `v=spf1 include:_spf.google.com ~all` | Workspace SPF |
| `google._domainkey` | TXT | 2048-bit key from the Admin console | Workspace DKIM |
| `_dmarc` | TXT | Stages below | DMARC |
| `resend._domainkey.notify` | TXT | Key from Resend | DKIM for mail the site sends |
| `send.notify` | MX + TXT | Resend's feedback MX and its SPF include, as Resend lists them | Bounce handling and SPF alignment for `notify.techeo.com` |
| `techeo.com` | TXT | `google-site-verification=…` | Search Console |
| `techeo.com` | CAA | `0 issue "letsencrypt.org"`, `0 issue "pki.goog"`, `0 issue "ssl.com"`, `0 iodef "mailto:…"` | Only Cloudflare's certificate authorities may issue (verify the list) |
| `_smtp._tls` | TXT | `v=TLSRPTv1; rua=mailto:…` | Reports on mail delivery TLS failures (optional) |

**DMARC progression.** RFC 9989 (May 2026) removed the `pct=` tag, so each stage applies to all mail at once. Cloudflare's free DMARC Management adds its own report address and a dashboard.

| Stage | From | Record | Move on when |
|---|---|---|---|
| Monitor | At the name-server move (`11` A5), before the first email | `v=DMARC1; p=none; rua=mailto:<cloudflare rua>,mailto:dmarc@techeo.com; adkim=r; aspf=r` | Three weeks of reports show Workspace and Resend passing aligned DKIM |
| Quarantine | Mon Nov 16, a week after `11` G0 (`11` #qa 6.2) | `p=quarantine; sp=quarantine` | Four more weeks without a legitimate failure |
| Reject | When `11` #flip-open schedules it, before outbound starts Feb 1 | `p=reject; sp=reject` | Permanent. Any new sending tool gets aligned DKIM before its first message. |

Stripe and Cal.com send from their own domains, so they need no records here.

**Other zone settings:**
- **TLS:** Full (strict), Always Use HTTPS, Automatic HTTPS Rewrites, minimum TLS 1.2.
- **Redirects:** a Bulk Redirect sends `techeo-web.pages.dev` to `techeo.com` (`02`).
- **One WAF rate-limiting rule:** more than 10 requests to paths under `/api/forms/` in 10 seconds from one IP blocks that IP for 10 seconds. The Free plan allows one rule, matching only the Path and Verified Bot fields, counting by IP, with fixed 10-second windows (verify). Request method is not a Free field, so the rule can't say "POST"; other methods get `405` from the Function anyway.
- **Crawler settings** (D13; `07` #cloudflare owns the policy): Bot Fight Mode off, Cloudflare's managed robots.txt off, AI Labyrinth off. AI Crawl Control allows the Search, Agent, and Training categories. **Training must stay on Allow** in any case: Cloudflare treats Googlebot, Bingbot, and Applebot as both Search and Training crawlers, and blocking Training blocks their search crawling too (verify the current behavior). Any future training opt-out goes in robots.txt (`07`), never this toggle. Cloudflare changed its defaults for new domains on Sep 15, 2026 (verify the current labels), so check these the day the zone is added and every month after. The monthly check confirms that Googlebot and Bingbot are not blocked, from Security events and Search Console's crawl stats.
- **Crawler Hints** on (`07` confirms). **Email Routing** off.

## Environments {#environments}

| | Local | Preview | Production |
|---|---|---|---|
| URL | `astro dev`; `wrangler pages dev dist` for Functions | `<hash>` and `<branch>.techeo-web.pages.dev` | `https://techeo.com` |
| Access | Developer | **Cloudflare Access** (Zero Trust Free): Techeo Workspace accounts plus any named freelancer, and a service token for CI. Pages' "Enable access policy" covers hash previews; confirm it covers branch aliases, or add an Access app for `*.techeo-web.pages.dev`. Bypass rules only on the signed paths, each of which checks its own signature or token: the five webhooks (Stripe, Cal.com, ClickUp, Resend, and the receptionist's call events) and the three signed-link paths (`/api/email/unsubscribe`, `/api/consent/*`, `/api/files/*`). | Public from launch, except `/api/staff/*`, which stays behind its own Access application. Before launch, production behind Access (`#launch`) uses the same bypass list. |
| Indexing | — | Pages' default `X-Robots-Tag: noindex`, plus a `noindex` meta tag; canonicals point to production (`02`) | Per `02` |
| Season, Stripe | Overrides allowed; test mode | Overrides allowed; test mode | `site.ts` only; live |
| Supabase, D1 | `supabase start`; local D1 | `techeo-staging`; `techeo-outbox-preview` | `techeo-prod`; `techeo-outbox` |
| Turnstile | Cloudflare's always-pass test keys (verify) | Preview widget | Production widget |
| Email, ClickUp | Test recipients; stub | Allowlist only; "Preview leads" list | Live; "Leads" list (`08` #pipeline) |
| GA4 | Off | Off, except `analytics-qa/*` and `rehearsal-open`, which build with the QA property's ID (`09` #qa-property) | On |

**Variables.** With Direct Upload, Pages never runs a build: `astro build` runs in GitHub Actions. So the **Build** group lives in GitHub Actions, as repository variables per environment, with `EXCLUSION_CENTER_*` and `HOMETS_COUNTY_FIPS` as Actions secrets. Values set in the Pages project would never reach the build. The two **Runtime** groups live in the Pages project, per environment. The D1 binding, `OUTBOX`, and the R2 binding, `DELIVERABLES` (`techeo-deliverables`; previews use `techeo-deliverables-preview`), are declared in `wrangler.toml`, with one block per environment.

| Group | Where | Names |
|---|---|---|
| Build | GitHub Actions | `SITE_ENV`; `SEASON_STATE_OVERRIDE`, `WAITLIST_REASON_OVERRIDE`, `CAPACITY_DATE_OVERRIDE`, `BUILD_DATE_OVERRIDE` (all rejected in production); `PUBLIC_GA4_MEASUREMENT_ID` (the QA property's on the two QA branch patterns); `PUBLIC_TURNSTILE_SITE_KEY`; `ZONE_EDGE_BUFFER_MILES` (default 25); `EXCLUSION_CENTER_LAT`, `EXCLUSION_CENTER_LNG`, `HOMETS_COUNTY_FIPS` (Actions secrets; never committed) |
| Runtime secrets | Pages project | `SUPABASE_SECRET_KEY`, `TURNSTILE_SECRET_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `CLICKUP_API_TOKEN`, `CLICKUP_WEBHOOK_SECRET`, `CAL_WEBHOOK_SECRET`, `RECEPTIONIST_WEBHOOK_SECRET`, `RESEND_WEBHOOK_SECRET`, `IP_HASH_KEY`, `PII_HMAC_KEY` (the consent-evidence and suppression hashes), `LINK_HMAC_KEY` and `LINK_HMAC_KEY_PREVIOUS` (signed links, `#optout`), `R2_DELIVERABLES_ACCESS_KEY_ID` and `R2_DELIVERABLES_SECRET_ACCESS_KEY` (object read and write on `techeo-deliverables` only, for presigned uploads), `ALERT_PUSH_URL` (open question 11), `SYNTHETIC_HMAC_KEY`, `OPS_TOKEN` (the last two also in `techeo-ops`) |
| Runtime variables | Pages project | `SUPABASE_URL`, `TURNSTILE_REQUIRED`, `STRIPE_PRICE_ID_ENGINE_AUDIT`, `STRIPE_API_VERSION`, `STRIPE_PRICE_OVERRIDE` (preview only), `EMAIL_FROM`, `EMAIL_REPLY_TO`, `NOTIFY_FOUNDER_EMAIL`, `NOTIFY_RECEPTIONIST_EMAIL`, `NOTIFY_ENFORCER_EMAIL`, `SYNTHETIC_INBOX`, `EMAIL_RECIPIENT_ALLOWLIST`, `CLICKUP_LIST_ID`, `CLICKUP_STATUS_READOUT_HELD`, `CLICKUP_FOUNDER_USER_ID`, `CLICKUP_FIELD_*` (paid ClickUp plan only) |
| GitHub Actions secrets | GitHub Actions | `CLOUDFLARE_API_TOKEN` (Pages:Edit and D1:Edit, one account), `CLOUDFLARE_ACCOUNT_ID`, `SEASON_BOT_APP_ID`, `SEASON_BOT_PRIVATE_KEY`, `CAL_API_KEY`, `OPS_TOKEN` (for `season-applied` and `ops-alert`), `CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET`, `SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_URL_BACKUP`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `AGE_RECIPIENT`, `HC_PING_*`, `GOOGLE_CLAIMS_SA_KEY` (read-only on the claims-ledger sheet, for `claims.yml`) |

A CI check fails a production build if `SITE_ENV` isn't `production`, or if either public ID is empty.

## CI and deployment {#ci}

| Stage | Tool | Fails when |
|---|---|---|
| Static checks | `pnpm install --frozen-lockfile`; `astro check`; `tsc` on `server/` and `ops/`; ESLint | Lockfile drift, a type or lint error, or an install script not in `allowBuilds` |
| Unit and database tests | Vitest; `supabase test db` (pgTAP) | Config, season, cron, token, signed-link, schema, SLA (including the calling-hours table and the attempt cap), notification-redaction, Resend-webhook, claims-export, claims-alarm, header, geo, RLS, grant, or RPC test fails |
| Approvals | `consent-guard`; `approval-scope`; the copy diff (`#repo`) | A consent or legal text changed without a new version id, its seed migration, or a `Counsel-Signoff:` line; a backup-only approval of a diff that adds or changes words |
| Build variables | `build-env.test.ts` | A production build with `SITE_ENV` other than `production`, or an empty `PUBLIC_GA4_MEASUREMENT_ID` or `PUBLIC_TURNSTILE_SITE_KEY` |
| Three builds | `astro build` for OPEN, WAITLIST·season, WAITLIST·capacity | Any error |
| Script sizes | `size-limit` (`.size-limit.cjs`) on `dist/_astro/` | Any script over its `#performance` line, the post-load analytics and vitals chunks included |
| Manifest and sitemap parity | `manifest.test.ts` | An HTML file missing from `routes.ts`, a manifest path with no file, or a `_redirects` source that is a real page (`02` #scope). The sitemap's URLs differ from the manifest's `inSitemap` set, or a `lastmod` differs from its `updated` date (`02` #sitemap). |
| Raw HTML | `raw-html.test.ts`, which parses pages without running scripts | An H1, a required H2 id, or the calculator formula is missing (S5) |
| Tokens and `#proof` | `tokens.test.ts`, `proof.test.ts` | See the token gate, below |
| Copy QA | `copy-qa.test.ts`, which runs `03` #qa rows 1–5, 8, and 11 on rendered text | Any hit |
| Links | `lychee --offline --include-fragments --root-dir "$PWD/dist" --index-files index.html dist` (verify the flags against the pinned lychee version; without `--root-dir`, root-relative links like `/audit` can't be resolved), plus `02`'s URL rules | A broken link or fragment; a trailing slash, `.html`, or `?`; any link to `/thanks/*` |
| HTML and inline code | `html-validate`; `inline.test.ts` | A validation error; an inline executable script, a `<style>` element, or a `style=` attribute |
| Structured data | `jsonld.test.ts`: per-type zod schemas from `07`'s spec | Invalid JSON, a missing property, or an unspecified type. Google's Rich Results Test has no public API, so `07` runs it by hand on each new template. |
| Headers | `headers.test.ts` | CSP differs from the snapshot; over 100 rules; a line over 2,000 characters |
| Accessibility | `@axe-core/playwright` (WCAG 2.2 AA tags) at 320 and 1280 px in all three states; `pa11y-ci` as a second engine | Any violation (`10` owns conformance) |
| End-to-end and performance | Playwright and `@lhci/cli` against `wrangler pages dev dist` | A `#forms`, `#optout`, or `#deliverables` scenario, or a `#performance` assertion, fails |
| Secrets and dependencies | `gitleaks`; `pnpm audit --prod` | Any finding |

**The token gate** scans every file in `dist/`: HTML, XML, `llms.txt`, `robots.txt`, and JSON-LD.
- **Brief tokens** are the fourteen in the brief's list, plus anything matching `\[HOMETS_[A-Z0-9_]+\]`. A production build fails on any of them, which matches `03`'s rule.
- **In every environment,** the build fails on unknown bracketed tokens (`\[[A-Z][A-Z0-9_]{2,}\]`) and on unresolved build variables such as `{next opening}`.
- **`tests/token-allowlist.yml`** covers only text that looks like a token but isn't one, such as a v3 template showing `[YOUR_COMPANY]`. Each entry needs a path, the exact string, a reason, an approver, and an expiry date. **Brief tokens and `[HOMETS_*]` strings can never be allowlisted;** the test rejects any entry that tries.
- **Preview builds** show unfilled brief tokens as a visible `<mark>` and report them as warnings.
- **`proof.test.ts`** fails if tile 1's values are unset but `id="proof"` or any proof-strip text is present. It also fails if the section is present with a `[HOMETS_` string in it, or without its measurement window.

**Deploying.** `deploy.yml` runs after every stage passes on the build whose state matches `site.ts`.
1. Apply pending migrations (`db.yml`; production only from `main`, where the founder's code-owner review has already approved them).
2. Run `wrangler pages deploy dist --project-name techeo-web --branch <branch>`.
3. Run smoke checks with `curl` (through the Access service token for previews): `02`'s trailing-slash and redirect tables, `/zzz` returning `404` with `noindex`, the exact header set, and `/api/health`.

If the smoke checks fail in production, the workflow rolls back to the previous deployment through the Pages API and raises an alert.

**The fast lane for flips.** A `techeo-season-bot` commit that touches only the SEASON block and `SEASON_LOG.md` takes a shorter path: one build; the token, `#proof`, season, and inline checks; then deploy and smoke checks. It skips Lighthouse, axe, pa11y, and the end-to-end tests, because all three states passed those on the commit being flipped. Target: under three minutes.

**Minutes budget.** About 18 runner-minutes per push, and roughly 40 pushes a month during the build, plus the scheduled jobs: the seven daily `season.yml` runs add about 210 minutes a month, since each rounds up to a minute, and the weekly `claims.yml` about 10 more. That comes to about 1,100–1,250 of the 3,000 minutes a month GitHub Team includes for private repositories (verify).

**Done when:** a deliberately broken branch fails the matching stage for each of these: an unfilled `[FOUNDER_SURNAME]`, a `#proof` tile containing a token, an inline script, a trailing-slash link, a banned word, an axe violation, a 300 KB hero image, a 2 KB `analytics-thanks` chunk, a sitemap entry for a page whose manifest row says `inSitemap: false`, a changed consent text under its old id, and a `claimId` with no ledger row.

## Monitoring and alerting {#monitoring}

| What | Tool | How often | Alert when |
|---|---|---|---|
| `/`, `/audit`, `/teardown` return 200 and contain "Skip to content" | Better Stack Free (10 monitors, 3-minute checks; verify) | Every 3 min | Two failures in a row |
| `/api/health`: D1, configuration, build SHA | Better Stack | Every 3 min | Any failure |
| TLS certificate and domain expiry | Better Stack's SSL and domain monitors; a weekly `openssl s_client` job | Daily; weekly | Certificate under 21 days; domain under 60 days |
| **A test submission of every form** | `techeo-ops` cron at 11:10 UTC, before US business hours | Daily | Any step fails |
| Outbox | The drain | Every 10 min | A job gives up; Supabase storage pending over 30 min; email and ClickUp both pending over 15 min; an opt-out pending over 4 hours (`#optout`) |
| SLA timers | `techeo-ops`' every-minute trigger, pinging Healthchecks.io | Every minute | Two missed minutes in a row; a reminder sent after its due time |
| Email bounces and complaints | The Resend webhook (`#notifications`) | On each event; rates over a rolling 7 days | Any complaint, the same day. Hard bounces over 4% of sends in 7 days (once there are at least 25 sends), or 3 in one day. Complaints over 0.1% of sends, the line Gmail's bulk-sender rules hold senders under (verify the current thresholds, Resend's too). More than 5 delays in a day. |
| Deliverables | The daily sweep and the monthly expired-link check (`#deliverables`) | Daily; monthly | A deletion that fails for 24 hours; an expired link that doesn't return `410`; an object older than 120 days |
| Stripe webhooks | Stripe's emails about failing endpoints, plus a daily reconciliation comparing live sessions completed in the last 3 days (via the API) with production `audit_purchases`, skipping sessions marked `metadata.rehearsal`. It also matches each paid Stripe invoice to the `stripe_invoice` row with its `qualification_id` (`08` F10); bank transfers are matched by hand at the Friday review. | Daily | Any mismatch, or a webhook processing error |
| Scheduled jobs that fail to run | Healthchecks.io Free (20 checks), expecting a ping from each job | Per job | The drain, the SLA timers, the synthetic run, the deliverables sweep, the backup, the season check, `claims.yml`, or a weekly job misses its window |
| Broken links | Weekly `lychee` run over the production sitemap and external links | Weekly | Any 4xx or 5xx; also opens a GitHub issue |
| 404s | A Cloudflare GraphQL Analytics query (verify it is available on Free); Search Console (`09`) | Weekly | A path crosses `02` #not-found's threshold |
| CSP reports, production Lighthouse, crawler settings | D1 digest; nightly Lighthouse CI with GA4; a monthly checklist | Daily; nightly; monthly | A new violation; a missed budget; drift from `#dns` |

**The daily synthetic run** is the control against a form that fails silently:
1. **Submit.** `techeo-ops` posts every form active in the current state, form-encoded as a no-JavaScript browser would. Each post carries a signed `X-Techeo-Synthetic` header, email `synthetic+<run>@techeo.com`, and a fixed ZIP outside the exclusion zone. The reservation carries only the reservation form's fields. In WAITLIST it also posts `form_audit_qualify` and expects `409`.
2. **Check the response.** The status and `Location` must match: the thanks page, or `https://checkout.stripe.com/` for a qualify in OPEN.
3. **Check what happened downstream.** Two minutes later, `/api/internal/synthetic-verify` confirms:
   - the Supabase rows exist;
   - every D1 job is done;
   - each Resend message's last event is `delivered`, and it carries both `List-Unsubscribe` headers;
   - the ClickUp task exists in the Synthetic list, with no custom field set;
   - the unsubscribe and confirmation links behave as `#optout`'s tests require.

   It then deletes the task and expires any Checkout Session the run opened.
4. **Report.** Ping Healthchecks.io on success, or its `/fail` URL naming the form and the step. **Alerts never contain personal data.**

The synthetic run proves the system works; D11's monthly mystery shop (`08`) proves the people do. Synthetic runs never reach the receptionist.

**Alert routing:** email plus push to the founder's phone through Healthchecks.io integrations (open question 11). Season and capacity alerts also email the enforcer (`#season-state`, `#stripe`), and the SLA timer's push goes straight to `ALERT_PUSH_URL` (`#notifications`).
- **Site down or a form broken:** fixed the same business day; rolling back takes one click.
- **A lead no person has been notified about:** fixed within one hour during answering hours. The phone line is the fallback until then.

## Launch cutover, rollback, and backups {#launch}

`11` owns the launch runbook and every date and clock time in it; these are the technical steps it calls. Only the brief's key dates appear here.

| Step (`11` schedules it) | Technical steps | Done when |
|---|---|---|
| Accounts and name servers (`11` A3–A5) | Accounts under Techeo LLC, and the GitHub organization on Team. Name servers moved to Cloudflare. SPF, DKIM, and DMARC `p=none` in place. | `dig` matches `#dns`; a test email passes DMARC at Gmail |
| Repository and previews (`11` B1) | Repository, rulesets, CI, and an Access-protected preview | A preview passes the smoke checks |
| `techeo.web.strategy`'s slip checkpoint | **The minimum-release "floor" build must include `/thanks/audit-reserved`,** because `form_audit_reserve` redirects there. | The floor's manifest passes the parity check |
| Production behind Access (`11` G0) | Production goes up on techeo.com **behind a Cloudflare Access application**, with test keys until Stripe's live activation, live keys by Fri Nov 13 (`11` I4). Access lets the signed paths through (`#environments`), and `techeo-ops` uses a service token. HSTS at 300 s; one synthetic run; a WAITLIST → WAITLIST flip drill. | Every monitor green for 72 hours |
| **Launch, Fri Nov 20** (`11` #launch-day sets the time) | **Delete the Access application.** DNS already moved weeks earlier. Then raise HSTS to 1 month, resume the monitors, submit the sitemap (`09`), and run the synthetic check by hand. | Every `02` and `#security` curl check passes on the public site |
| DMARC and HSTS steps (`11` #qa 6.2, #post-launch, #flip-open) | DMARC `p=quarantine` a week after G0, before launch (`#dns`); later, HSTS to one year and DMARC `p=reject` | Records confirmed |
| OPEN readiness (`11` #flip-open) | Live Stripe rehearsal; the Feb 1 flip PR approved | Both logged |
| **Mon Feb 1** | Supabase Pro; flip to OPEN | The OPEN checks pass on production |

Launch is a Friday morning, because Friday afternoon is a protected Homets block.

**Rollback, fastest option first:**
1. **Hide the site:** recreate the Access application (about a minute).
2. **Restore the previous deployment:** one action in Pages, or one API call. Functions roll back with the pages, and expand/contract migrations keep the database compatible.
3. **Revert the commit** and redeploy.
4. **Restore DNS** from the exported pre-migration zone file. This is needed only if the name-server move breaks email.

Roll back if any form fails its test submission, a page returns a server error, the CSP blocks a form, a brief token is visible, or a legal page is missing.

**Backups and exports:**
- **Nightly.** `nightly.yml` runs `pg_dump --schema=app` as the read-only `backup_reader` role (`#data`). `SUPABASE_DB_URL_BACKUP` is the session-pooler connection string (`…pooler.supabase.com:5432`, user `backup_reader.<project-ref>`), not the direct connection, because the direct hostname resolves only over IPv6 and GitHub's runners have no IPv6 route (verify). It encrypts the dump with `age` to the founder's key (private half in the vault and on paper) and uploads it to the R2 bucket `techeo-backups`. The bucket keeps 35 dailies and 13 monthlies. R2's free tier needs a payment method on file (verify). From Feb 1, Supabase Pro's own daily backups add a second layer.
- **Quarterly restore test** into `techeo-staging` through the same pooler, followed by `supabase test db`, then the erasure log re-applied (`10`). **Done when:** a restore takes under 30 minutes and is logged.
- **Other stores.** D1 holds only 30 days of in-flight data. Stripe is the record for payments, exported monthly by the bookkeeper. ClickUp is exported to CSV quarterly. Cal.com bookings mirror into Google Calendar.
- **Full export** (for a sale, an audit, or a request): `pnpm run export:leads` writes every `app` table to an encrypted archive. `dsr_export` returns one person's data.

**New costs for `11` to reconcile (verify each):**

| Item | Cost |
|---|---|
| Cloudflare: Pages, D1, Workers, Access, DMARC Management | $0 |
| R2 `techeo-deliverables` (`#deliverables`) | $0 within the free 10 GB; about $0.02 a month at the expected 11 GB (verify) |
| Resend, Cal.com, Better Stack, Healthchecks.io | $0 |
| GitHub Team for `techeo-llc` (open question 1) | About $4 per member a month: about $8 for the founder and the enforcer, plus about $4 while a freelancer holds a seat (verify). `11` adds it to the run-rate. |
| Cloudflare Registrar | $10.44–11.15 a year |
| Supabase Pro, from Feb 1, 2027 | $25 a month |
| ClickUp | $0 on Free with no custom fields; about $10 a month (verify) if `08`'s custom fields are wanted (open question 4) |
| Stripe | Per-payment card and ACH fees, plus the invoicing fee |
| Live rehearsal | $1 plus fees |
| Workers Paid | $5 a month, only if the CPU limit forces it |

Workspace and the receptionist are `11`'s lines from D3 and D11.

## What this document changes elsewhere {#dependencies}

| Owner | Change |
|---|---|
| `08` | F2 step 2, and any "05:05–06:05 UTC": read "the first scheduled run after local midnight" (`#season-state`). F1 step 3: E01 still goes out for `bot_check = missing`, capped, until D11 is revised (open question 16). Card R: the card carries no ZIP, trade, or CRM (`10` #data-inventory), so the agent asks for them rather than reading them back. `#pipeline`: on ClickUp Free, no custom fields (`#notifications`). E01 for a phone reservation carries the `#optout` confirmation link. E19's `{walkthrough_link}` and `{expiry_date}` come from the staff deliverable page (`#deliverables`). The receptionist card may carry two notes, for `spam_suspect` and for a hard bounce (`#notifications`). F2's call list shows "email bounced" and reads `phone_consent_confirmed_at`. |
| `11` | `#flip-open` and `#flip-waitlist`: "the first scheduled run after local midnight"; `#qa` 13.5 is met by the hourly schedule. Run-rate: GitHub Team (`#launch`). `#qa` 9.2: the nightly criterion in `#performance`. L3 and `#qa` 12.3: `CONSENT_VERSIONS`, one id per form, replaces `CONSENT_VERSION`. A1 and A2: each blocking preflight finding carries a decide-by date and the escalation path in `#dns`. `#maintenance`: the builder runs `claims.yml` after each ledger change, and the founder approves its pull request. `#roles`: the enforcer is the backup approver within `approval-scope`'s limits (open question 17). `#qa`: rows for the Done-when lists in `#optout` and `#deliverables`. **`#register`:** CR-02 (`app.seed_identities`) is applied in `#data`, and CR-03 (the calling-hours table and `calling_rule_version`) in `#data` and `#notifications`; both can close. |
| `03` | The `checkout_unavailable` copy drafted in `#forms` step 11. The unsubscribe, confirmation, and expired-link page copy drafted in `#optout`, and the walkthrough page's lines in `#deliverables`. |
| `09` | `#heard-from`: the key is `search_ai`, not `search_or_ai` (`08` #form-audit row 17); `owner_community` joins only if open question 3 is accepted. **`#tag-loading`:** the three post-load lines are accepted in `#performance`, each with a `size-limit` entry, so the cut order isn't needed. **`#sources-of-truth`:** the `seed` tag is in `app.submissions.flags` (`#data`). A phone-only lead from a `phone_missed` event has a null `email`, so `scope`'s `@techeo.com` filter needs `coalesce(lower(l.email::text), '')`, or those events drop out of the SLA figures. A `phone_missed` event's clock also stops at an `inbound_call` answered before its due time (`08` #unanswered). `submissions.channel` now exists, so O12's "first record is a site form" can read `channel = 'site'`, which also leaves out missed calls and outbound targets. |
| `10` | Confirm the retention anchors in `app.retention_policies` (`#data`). **#claims "Rules":** a claim past its review date, or withdrawn, is omitted from the page by the build, with alarms at 30 and 7 days (`#repo`), instead of failing the build; a missing or `draft` row still fails it. **#processors:** the teardown video host is Cloudflare R2 (`techeo-deliverables`), readouts are recorded locally and kept in engagement storage (`#deliverables`), and the "not yet chosen" note goes. **#consent-texts:** confirm the ids `privacy-v1` and `terms-v1` for the policy versions `app.consent_versions` records. **#accessibility:** confirm that walkthroughs and readout recordings get caption files, and that scored sheets and reports are tagged PDFs. **#quiet-hours:** `server/sla.ts` reads the calling-hours table from `src/config/calling-hours.ts`, under its version id, and stamps `calling_rule_version` on each eligible submission (`#notifications`); a change is a new id, never an edit. **#retention:** set a period for `app.seed_identities`, which holds keyed HMACs only. This document proposes deletion 30 days after a seed is retired. |

## Open questions for the founder {#open-questions}

1. **GitHub organization, plan, and roles.** *Recommended default:* `techeo-llc` on GitHub Team (about $4 per member a month; verify), owned by the founder. The enforcer gets write access to `techeo-web` only. A freelancer's access ends with the engagement. Without Team, a private repository has no enforced rulesets, required checks, or environment secrets, so the flip and deploy controls in `#repo` would not exist. *Alternative:* make `techeo-web` public, which gets those controls free, but it would publish the qualification rules, the schema, the exclusion-zone build, and `SEASON_LOG.md`. If chosen, `SEASON_LOG.md` notes must never name a cause.
2. **How the enforcer flips the site.** *Recommended default:* the GitHub workflow, from a 2FA-protected account, with a printed one-page runbook rehearsed together before Nov 20. A Cloudflare login would also expose DNS and every secret.
3. **When Supabase moves to Pro.** *Recommended default:* Mon Feb 1, 2027, the first day money can arrive. Until then, nightly backups cover the data, and the daily synthetic run keeps the Free project from pausing.
4. **ClickUp: a separate Techeo Workspace, or a Space inside Homets'?** *Recommended default:* a separate Workspace owned by Techeo LLC, on the Free plan with no custom fields, because Free meters every custom-field value set and never resets the count (verify). Admins of a Homets Workspace could see Techeo prospects. Move to a paid plan (about $10 a month; verify) only if `08`'s custom fields are wanted.
5. **Live rehearsal amount.** *Recommended default:* $1.00, refunded. A $1,500 run costs about $44 in card fees that aren't returned on a refund, and it proves nothing more.
6. **Stripe invoice PDFs.** *Recommended default:* on. Bookkeepers expect them, and the fee is small (verify).
7. **ACH with instant verification only.** *Recommended default:* yes. A bank that can't link means paying by card.
8. **Call hours.** *Recommended default:* Monday 13:00–16:30; Tuesday to Thursday 10:30–12:00 and 13:00–16:30; Friday 10:30–12:00 [TZ]. No evenings until the spring shows demand for them.
9. **Connect the Homets calendar to Cal.com for busy times only?** *Recommended default:* yes. Only free/busy crosses over, and it's the one reliable guard for the CSM 1:1 and Homets emergencies.
10. **HSTS preload.** *Recommended default:* no. It is hard to undo; review it in Nov 2027.
11. **Where alerts reach your phone.** *Recommended default:* the ntfy app on a private topic, at $0, with no personal data in any alert. During protected blocks, only "lead with no human notified" interrupts.
12. **If someone else owns techeo.com.** *Recommended default:* stop the build, get one broker quote against a ceiling you set, and decide within a week whether to buy or rename, before any copy hours are spent.
13. **2028 season dates.** D2's Feb 1 – Apr 30 window recurs, so the Tue Feb 1 and Mon May 1, 2028 rows are already in `SEASON_SCHEDULE`. What remains is the day after Labor Day 2028, Tue Sep 5, and the Dec 1, 2028 row. *Recommended default:* add both at the September 2027 review. CI starts failing on Mar 9, 2028 if the Sep 5 row is missing.
14. **Sales tax on the audit.** *Recommended default:* the bookkeeper or counsel confirms in writing that the audit isn't taxable in [TECHEO_STATE] or in buyers' states. No Stripe Tax in v1.
15. **Pages or Workers.** *Recommended default:* Pages for v1, per D3. Re-decide in Jun 2027 at v2 planning; Workers would absorb `techeo-ops` and add built-in rate limiting.
16. **The confirmation email when Turnstile could not run.** *Resolved in brief v2 D11:* no automated email when the bot check could not run; the thanks page and the callback confirm instead.
17. **Who approves a change when you can't.** D15 makes you the approver of every word, and `CODEOWNERS` enforces it (`#repo`). *Recommended default:* the kill-switch enforcer is the backup approver, limited by `approval-scope` to changes that only remove words (a withdrawn claim, a wrong sentence) or change none (a security or dependency fix). Consent texts, prices, legal pages, migrations, and workflows wait for you. You review every backup-approved merge within 2 business days and revert it or keep it. *Alternative:* the builder, under the same limits; that is weaker, because the builder usually wrote the change.
18. **How readouts are recorded.** *Recommended default:* OBS Studio on your own machine while the readout runs on Google Meet, at $0, with the file and its caption file kept in the audit record's Drive folder (`#deliverables`). *Alternative:* Meet's own recording, if Workspace's plan includes it (verify; Business Starter may not), which saves a step but adds cost if the plan must change.
