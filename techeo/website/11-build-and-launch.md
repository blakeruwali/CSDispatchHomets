---
id: techeo.web.build
title: Build & Launch Plan — Schedule, Hours, Budget, Runbooks
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, build, launch, schedule, hours, budget, qa, runbook, season-state, maintenance, raci]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.content, techeo.plan90, techeo.guardrails, techeo.financials, techeo.legal, techeo.audit, techeo.delivery, techeo.offers, techeo.metrics]
order: 11
---

# Build & Launch Plan — Schedule, Hours, Budget, Runbooks

**v1 can go live on Fri Nov 20, 2026 without moving an audit task, but only if a freelancer does the build and Blake spends about 22.25 hours on work nobody else can do. Even then it doesn't fit the Phase 1 cap: Weeks 5, 6, and 8 run 0.25, 0.5, and 0.25 hours over 12, an hour in all that the founder has to approve in advance and log. Phase 2 fits, with 4.25 hours to spare, once the builder runs the December and January prompt tests. v1 also costs about $20,900 before it earns a dollar, which `techeo.financials`' $13,700 high estimate can't absorb, and the site costs about $44,700 in its first year once the monthly costs and v2 are counted.**

## Scope and the short answers {#scope}

This document owns when and how techeo.com is built and launched, by whom, and for how many hours and dollars: the work breakdown, schedule, hours, budget, QA and launch checklists, runbooks, release plans, maintenance, changelog, and RACI. Everything else is referenced by its owner per the brief's ownership table: mechanics to `06-technical-architecture.md` (`techeo.web.tech`), copy to `03-pages-v1.md` (`techeo.web.pages-v1`), lead handling to `08-conversion-and-leads.md` (`techeo.web.conversion`), legal requirements to `10-compliance.md` (`techeo.web.compliance`).

| Question | Answer |
|---|---|
| Does v1 fit the Phase 1 cap? | **Not quite, even at the 12-hour top of the band with a freelance builder.** Weeks 5, 6, and 8 run 0.25, 0.5, and 0.25 hours over, 1.0 hour in all, and no rebalance removes it (`#hours`). At 10 hours, no: `techeo.plan90` alone exceeds that. |
| Does Phase 2 fit? | **Yes:** 31.75 of 36 hours with `12`'s article hours counted, if the builder runs the December and January reduced prompt tests. The 4.25 hours of slack are the floor's reserve (`#v1-1`). |
| Does it collide with the audit build? | No. Zero founder website hours in Week 4 (Homets audit), Week 7 (pilot audits), and Week 9 (Thanksgiving). |
| What does it cost? | About **$20,900** pre-revenue at plan (range $11,600–$39,800), then about **$1,270 a month** from Feb 1, 2027. The startup total becomes about **$29,900**, **above the $13,700 high estimate** in every scenario (`#budget`). Year one, Oct 2026 – Nov 2027 with v2, is about **$44,700** at plan (`#year-one`). |
| When does it launch? | **Fri Nov 20, 2026, 10:00–11:45 [TZ]**, inside Friday's 10:00–12:00 open block, ending 15 minutes early. |
| What if it slips? | The Fri Nov 6 checkpoint (`techeo.web.strategy` #releases), with the triggers in `#hours`, and a spill check at the Fri Nov 13 review. |

**Conventions.** Every hour figure is an **assumption**, to be replaced by the weekly time log (`techeo.metrics` #1). Times are [TZ]. "Builder" is the contracted freelancer using AI coding tools; **the founder never builds** (`techeo.web.strategy` R7). F is founder hours, B builder hours.

## Roles and working rules {#roles}

| Role | Who | Terms |
|---|---|---|
| Founder | Blake [FOUNDER_SURNAME] | — |
| Builder | One freelance developer with Astro, Cloudflare, Stripe, and Supabase experience, using AI coding tools, with a named backup | Techeo LLC; fixed fee with milestones (`#budget`) |
| Builder's backup | The backup named in the builder's bid | Runs the screen-reader passes (`#qa` 8.3, 8.7, 8.8), 3 of Q1's hours, so someone other than the builder does them (`10` #accessibility) |
| Counsel | The attorney engaged for the MSA and SOW (`techeo.legal` #contracts) | The website compliance package beyond the MSA (`10` #counsel-package), re-quoted for its full scope: about 6–12 hours, or a written flat quote at L1 |
| Receptionist vendor | Chosen from three quotes against `08` #receptionist | Month-to-month |
| Photographer | A local documentary photographer | Half-day. Assigns copyright, or licenses editing, redaction, and sublicensing (`10` #releases), in an agreement signed before the shoot |
| Kill-switch enforcer | The person named in `techeo.guardrails` #kill-switch | Places test, seed, and shop calls; may flip the site to WAITLIST. About 0.85 hour a week for seeds (10 minutes each, 5 a week from Nov 2), plus test and shop calls: about 15 hours through Jan 31. If the enforcer is a Homets employee (the bookkeeper, for example), a separate written agreement with Techeo LLC and separate pay (`techeo.guardrails` #coi item 6; open question 17) |
| Peer caller | A trusted owner or manager outside Homets | Places shop calls |
| Homets reviewers | Two Homets managers: one redacts and completes the photo log on Homets storage; the other, who didn't redact, reviews and signs it (`05` #pii steps 4–9) | Paid Techeo work under a one-page agreement with Techeo LLC: 3.5 and 0.5 hours at an agreed rate (open question 9) |
| Writer, designer | v2 and v3 only (`#v2`, `#v3`) | Techeo LLC, per page or per hour |

**Working rules:**

1. **Founder blocks.** Only Monday 13:00–17:00, Tuesday–Thursday 10:00–12:00 and 13:00–17:00, and Friday 10:00–12:00. Never during the CSM 1:1. On a heat-wave, hard-freeze, or coverage-gap day, the task moves to the next open block that week or drops (`techeo.guardrails` #protected).
2. **The weekly review is Friday 10:00–10:30** (`techeo.metrics` #cadence), since Friday afternoon is protected. In launch week it moves to **Thu Nov 19, 13:30**, after G2, so Friday's window is all launch work. In Thanksgiving week it is Wed Nov 25, 10:00, and in the Christmas and New Year weeks it is Wednesday (`#v1-1`). Site hours get their own line in the time log (`techeo.web.strategy` G1).
3. **The builder never waits on the founder.** Questions go in a written status every Thursday by 17:00 and are answered in writing after Friday's review (H4, 0.25 hour a week, counted in `#hours`). In Weeks 4 and 7 the builder works from approved decisions only, and those notes are read the following week.
4. **The audit wins.** When a `techeo.plan90` task and a website task compete for an hour, the website task drops (`techeo.web.strategy` R8, G2).
5. **Separation.** Every contract, invoice, and account belongs to Techeo LLC (D4). No Homets employee does Techeo work without a separate agreement and pay (`techeo.guardrails` #coi item 6).
6. **Least privilege.** The builder's access ends with the contract (`06` open question 1).

## v1 work breakdown {#wbs}

Hours are assumptions. "Done when" points to the owning document's acceptance criteria where it already exists.

### H · Hiring and management

| ID | Task | Owner | F | B | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| H1 | Send this document with `03`, `05`, `06`, and `08` to three freelancers; ask for a fixed-fee bid with milestones, a named backup, and 30–38 hours a week, Oct 12 – Nov 20 | Founder | 0.5 | — | — | Tue Sep 29, 13:00 | Three bids by Tue Oct 6 |
| H2 | Interview two bidders (15 minutes each); sign with Techeo LLC | Founder | 0.75 | — | H1; LLC filing receipt (`techeo.plan90` Week 2) | Oct 7–9 | Signed: fee within `#budget`'s bid rule, milestones, IP to Techeo LLC, confidentiality, access removal |
| H3 | Thursday status notes; `06`'s six runbooks | Builder | — | 1 | H2 | Oct 15 – Nov 19 | Runbooks in `docs/runbooks/`; printed copies with the founder and the enforcer |
| H4 | Read the Thursday status and answer its questions after the weekly review | Founder | 1.0 (0.25 in W3, W5, W6, W8) | — | H3 | Fridays 10:30 from Oct 16; Thu Nov 19, 14:00 in launch week | Answers in writing by 12:00 the same day |
| H5 | Slip checkpoint (`techeo.web.strategy` #releases): apply the triggers in `#hours` | Founder | 0.25 | — | H4; the time log | Fri Nov 6, 10:45 | Full v1 or the floor, recorded with the reason |

### A · Domain, accounts, email

| ID | Task | Owner | F | B | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| A1 | Domain preflight checks 1–6, 8's public blocklists, and 7's third-party backlink check (`06` #dns), run with an AI assistant using `06`'s commands | Founder | 0 (inside `techeo.plan90` W1's "confirm techeo.com") | — | — | Mon Sep 28, 13:00 | Each check answered; `06`'s finding table applied; a third-party owner triggers `06` open question 12 that day |
| A2 | Checks 7–8's Search Console parts (Links, manual actions, security issues), read the hour A5's verification record verifies; `docs/preflight.md`; `02` redirect rows; registrant change or delisting if needed | Builder | — | 3 | A4, A5 | Oct 13–16 | `06` #dns preflight "Done when"; the manual-actions and security-issues read is logged before B1, B2, or I1 starts (D5) |
| A3 | Accounts, wave 1: Workspace (1 user, `team@` group, synthetic alias), Cloudflare, the `techeo-llc` GitHub organization, the password vault, a recovery mailbox outside techeo.com | Founder | 1.25 | — | LLC filing receipt | Oct 5–9, on receipt | Each account names Techeo LLC, uses passkey 2FA, and has a vault row with owner, scope, rotation date. Workspace's MX, SPF, DKIM, and DMARC `p=none` go on the current DNS host the day Workspace is created, unless preflight check 3 found live email; in that case no mail is sent from techeo.com until A5's DMARC test passes (D3) |
| A4 | Accounts, wave 2: Stripe (EIN, bank, identity), Supabase, Resend, Cal.com (Homets free/busy connected), ClickUp, Better Stack, Healthchecks.io, GA4, Search Console, Bing, the phone-number account; builder invited with least privilege | Founder | 1.0 | 1 | A3; EIN and bank (`techeo.plan90` W2) | Oct 12–16 | Every D4 account owned by Techeo LLC; Stripe test mode works; live activation submitted |
| A5 | Move name servers to Cloudflare; Workspace MX, SPF, DKIM, and DMARC `p=none`; Resend records; the Search Console verification record; CAA; TLS; crawler settings | Builder | — | 4 | A1, A3 | Oct 12–14 | `dig` matches `06` #dns; a test email passes DMARC at Gmail; the pre-move zone file is exported and stored |
| A6a | [TECHEO_PHONE]: a Techeo-held number (`08` open question 15) | Builder | — | 0.5 | A4 | By Wed Oct 14 | The number is in Techeo LLC's name; E.164 value set in `site.ts` |
| A6b | Forwarding [TECHEO_PHONE] to the vendor, live from Nov 2 | Builder | — | 0.5 | A6a, R2 | Oct 15–23 | Forwarding tested from two carriers |

### B · Platform, design, pages

| ID | Task | Owner | F | B | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| B1 | Repository, rulesets, CI skeleton, Pages project (Direct Upload), Access on previews | Builder | — | 6 | A4; A2's manual-actions read | By Fri Oct 16 | A preview passes `06`'s smoke checks |
| B2 | Design tokens, Tailwind 4 config, font subsets with their OFL license files, contrast report | Builder | — | 6 | C1 (accent color); A2's manual-actions read | Oct 14–20 | `05` #deliverables items 4–5 |
| B3 | Wordmark SVG, favicons, `site.webmanifest`, the three share images | Builder | — | 5 | C1 (wordmark) | Oct 19–23 | `05` #deliverables items 1–3; the wordmark renders with web fonts blocked |
| B4 | Every v1 component in both states, plus the preview-only gallery | Builder | — | 14 | B2 | Oct 19–30 | `05` #deliverables items 6–7; axe finds nothing in the gallery |
| B5 | Every v1 page built from `03`'s deck, with the founder's edits merged as they're approved | Builder | — | 12 | B4, C3–C7 | Oct 26 – Nov 6 | Every `02` v1 URL renders in all three state variants; `03` #qa rows 1–15 pass, with row 13 checked against the clause list in `techeo.legal` #contracts (C8 re-checks it against counsel's draft) |
| B6 | Calculator island | Builder | — | 6 | B4; `08` #calculator | Oct 26–30 | Formula present in the raw HTML; ≤7 KB; `08`'s test cases pass |

### I · Forms, data, integrations

| ID | Task | Owner | F | B | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| I1 | Supabase production and staging projects, migrations, RPC functions, pgTAP tests | Builder | — | 10 | A4; A2's manual-actions read | Oct 13–23 | `06` #data "Done when" |
| I2 | Forms pipeline, all four v1 forms | Builder | — | 16 | I1; `08` fields | Oct 19 – Nov 6 | `06` #forms "Done when" (JavaScript on and off, every failure injected) |
| I3 | Notifications: Resend, ClickUp, SLA due times, drain | Builder | — | 8 | I2, A5 | Oct 26 – Nov 6; the SLA due times and the receptionist's call-event path by Fri Oct 30 (R4) | `06` #notifications "Done when" |
| I4 | Stripe Dashboard (Price, descriptor, terms URL, emails, invoice PDFs), Checkout, webhook, tests | Builder | — | 8 | A4; `/terms` URL | Oct 26 – Nov 6 | `06` #stripe test plan passes; live activation by Fri Nov 13, when live keys replace test keys in production (G0) |
| I5 | Cal.com events, "Techeo calls" schedule, webhook | Builder | — | 3 | A4; C1 | Oct 26–30 | `06` #scheduling "Done when" |
| I6 | Season mechanics, bot App, three-variant builds, preview drill | Builder | — | 6 | B5 | Nov 2–6 | `06` #season-state "Done when" (drill under five minutes) |
| I7 | Headers; CSP report-only on previews from Oct 26; secrets inventory; `gitleaks`; pnpm settings | Builder | — | 4.5 | B1 | Oct 19 – Nov 13 | `06` #security "Done when" |
| I8 | The full `06` #ci suite | Builder | — | 12 | As parts land | Oct 14 – Nov 13 | `06` #ci "Done when" |
| I9 | Monitoring, `techeo-ops`, daily synthetic run, R2 backups, first restore test | Builder | — | 8 | I2–I4 | Nov 2–13 | Synthetic green daily from Nov 9; restore under 30 minutes |

### C · Copy (the founder writes and approves; D15)

`03` is already a final-draft deck, so the founder **edits and approves** rather than writing from a blank page. `techeo.web.strategy` #releases bars copy hours before the Homets audit PDF exists (Fri Oct 23) unless this document shows they fit. C3–C5 cover sections that don't depend on the audit, and `#hours` shows they fit in Weeks 1–3.

| ID | Task | Owner | F | B | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| C1 | **Decision batch.** Decide, or accept the default for, the open questions that gate the build: `01` 3, 6; `03` 1–3; `05` 1–3, 5–7; `06` 1, 2, 4, 8, 9, 11; `07` 1, 3, 4, 8; `08` 1, 2, 10, 15; `09` 1 (with `10`); this document's; and every open `#register` row whose "Decide by" is C1 | Founder | 1.0 | — | — | Wed Sep 30, 13:00 | Each answer dated in its owning document; each C1 row in `#register` accepted or rejected, with its interim rule if the target hasn't edited yet |
| C2 | Fill the tokens: [FOUNDER_SURNAME], [HOMETS_METRO], [EXCLUSION_RADIUS_MILES], [TZ], [TECHEO_STATE], [TECHEO_POSTAL_ADDRESS] (a USPS-registered PO box, a private mailbox at a registered commercial mail receiving agency, or a registered agent's address only if the agent confirms in writing that it accepts and forwards business mail; `10` open question 12), and [TECHEO_PHONE]. Submit [HOMETS_*] figures from the Week 1 baseline to `10`'s claims ledger. | Founder | 0.25 | — | Week 1 baseline and radius; LLC filing; A6a | Thu Oct 15, 13:00 | No `PLACEHOLDERS` value is null except a [HOMETS_*] without a ledger id, whose tile or `#proof` is omitted (D7) |
| C3 | `#operator` founder story, first person, signed by Blake | Founder | 1.0 | — | — | Thu Oct 1 | Committed; `03` #qa rows 1–5 pass on it |
| C4 | `#promises`, `#fit`, the intros for the three legal pages | Founder | 0.75 | — | — | Thu Oct 1, 14:00 (0.25) and Week 2 | Same |
| C5 | `#faq`, the three thanks pages, 404, microcopy | Founder | 1.0 | — | — | Week 2 (0.5) and Wed Oct 14 (0.5) | Same |
| C6 | Audit-dependent homepage sections: `#top`, `#leak`, `#calculator` framing, `#engines`, `#how-it-works`, `#audit` | Founder | 2.0 | — | The Homets audit PDF | Week 5 | Same |
| C7 | `/audit` and `/teardown` | Founder | 1.5 | — | C6 | Week 6 | Same |
| C8 | Read every page aloud (`03` #qa row 16); re-check row 13 against counsel's MSA draft, cutting any `#promises` item that has no clause; sign the copy QA sheet, the claims-ledger entries, and the accessibility release sheet (`10` #accessibility) | Founder | 1.25 | — | B5; rows 1–15 passing; counsel's MSA draft by Mon Nov 16 | Tue Nov 17, 14:00 | Signed sheets filed |

### P · Photography and releases

| ID | Task | Owner | F | Other | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| P1 | Get two half-day quotes and book one | Founder | 0.25 | — | — | Week 1 | Booked for **Tue Oct 27, 13:00–17:00**, with Thu Oct 29 as the rain date, on a day with no CSM 1:1, on `10`'s photographer terms (copyright assignment, or a license with sublicensing), signed before the shoot on P1a's agreement |
| P1a | English and Spanish release packets, with the $50 payment and scans to `Compliance/releases/`; the photographer agreement; the Homets reviewers' one-page agreement. All from `10`'s templates | Builder | — | B 1 | P1; `10` #releases | By Fri Oct 23 | Packets printed for the shoot; the photographer's agreement signed |
| P2 | Shoot per `05`'s shot list. The founder hands out releases before anyone identifiable is photographed. The portrait goes against a neutral wall with no Homets marks, so it works even if the license is late (`05` fallback); the truck is shot overcast, or later by the photographer alone. | Founder, photographer | 1.25 (portrait, staging brief, releases) | Photographer, 4 h | P1a; releases signed first (`10`'s form); scene staged per `05` #pii step 1 | Tue Oct 27 | RAW files on Homets storage; no card leaves with originals |
| P3 | Choose selects from RAW previews on Homets storage | Founder | 0.5 | — | P2 | Thu Oct 29 | Selects listed per slot; the reviewers' agreement signed |
| P4 | Redact and complete the photo log (`05` #pii steps 4–8); a second Homets manager, not the redactor, reviews and signs it (step 9) | Homets reviewers | — | 3.5 h + 0.5 h, paid | P3; the reviewers' agreement (P1a) | Oct 29 – Nov 6 | `05` acceptance "Photos" row passes; exports in Techeo's Drive by Fri Nov 6 |
| P5 | Move exports into `src/assets/`; `<Picture>` slots; metadata check in CI | Builder | — | B 2 | P4 | Nov 9–11 | `05` byte budgets met; CI's GPS and serial-number check passes |

**Releases before counsel's comments.** `10` sends the release form to counsel on Mon Oct 26 and asks for comments by Fri Nov 6, so the Oct 27 releases are signed on a form counsel hasn't commented on. Images of anyone who signed before counsel's comments are held until counsel approves the form. If the text changes, those people re-sign before the P4 exports on Nov 6.

### R · Receptionist

| ID | Task | Owner | F | B/Other | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| R1 | Three quotes compared against `08` #receptionist must-haves 1–10, including caller ID (9) and unanswered calls and outages (10) | Builder | — | B 3 | H2 | Oct 12–14 | Comparison sheet with each must-have confirmed in writing or marked missing |
| R2 | Choose the vendor; sign month-to-month with service starting **Mon Nov 2** | Founder | 0.75 | — | R1 | Thu Oct 15 | Contract in Techeo LLC's name |
| R3 | Review `script-1.0` (inbound, callbacks, escalation, knowledge card) before it's loaded | Founder | 0.5 | — | R2 | Week 5 | Approved version with the vendor by Fri Oct 30 |
| R4 | Vendor loads `script-1.0` and trains its agents on it and on the internal Do Not Call policy (L4); per-call events flow to `app.lead_touches`; daily export works | Vendor, builder | — | B 4 | R3; I3's SLA path; L4 | **By Mon Nov 2** | Events arrive within 5 minutes; the DNC policy trained (the draft from Nov 2, the approved text after L3); recording-table version `rec-2026-10-v1` confirmed with the vendor once counsel has verified it (`10` #recording), and calling-hours version `hours-2026-10-v1` loaded from Nov 2 and confirmed again once counsel verifies it with the Nov 16 sign-off (`10` #quiet-hours); a test callback shows [TECHEO_PHONE] as caller ID (`10` #tcpa-analysis item 5); `08`'s weekly SLA report runs unattended for Nov 2–8 and Nov 9–15 (environments below) |
| R5 | Six or more test calls (week of Nov 9), plus seeds at 5 a week from Nov 2 (environments below) | Enforcer, peer | — | Enforcer 1.5 h, plus 10 minutes a seed | R4 | Nov 2–13 | Logged calls cover routes 3, 5, 7a, 10, 12, and one after-hours call |
| R6 | Pre-launch self mystery-shop (`08` #mystery-shop): **A** Tue Nov 10, 09:30, enforcer (inside the founder's protected block); **B** Wed Nov 11, 17:45, peer; **C** Sat Nov 14, 08:00, enforcer; **F** Thu Nov 12, a random business-hours minute, peer, on `form_audit_reserve` on production behind Access. Founder scores Mon Nov 16. | Founder scores | 0.75 | — | R4 | Nov 10–16 | ≥86, no call under 70, no critical fail. Otherwise the vendor retrains, a re-shop runs Wed Nov 18, and the launch gate holds until it passes. |

**Where the pre-launch calls and forms go.** Production doesn't exist until G0 on Mon Nov 9. From Nov 2 to Nov 8, seeds and R5's form submissions run on the QA preview against `techeo-staging`. By Fri Oct 30 the builder adds the enforcer's and the peer's email addresses to the preview Access policy (one-time PIN), adds the vendor's intake address and the seed inboxes to `EMAIL_RECIPIENT_ALLOWLIST`, and points `09`'s weekly SLA report at staging for Nov 2–8. From G0, seeds, R5, and R6's test F go to production behind Access, with the same two people on its Access policy, and the report reads production.

### L · Legal pages

| ID | Task | Owner | F | B | Depends on | When | Done when |
|---|---|---|---|---|---|---|---|
| L1 | Brief counsel with `techeo.plan90` W5's MSA send: `10`'s requirements, `03` #legal's structure, the refund decision (C1), and the builder's processor list from the live configuration. Ask for the recording table first, by Fri Oct 30, because counsel verifies it before the first seed call (`10` #recording), and for the calling-hours table with the Nov 16 sign-off (`10` #quiet-hours) | Founder, builder | 0.25 | 1 | C1 | Mon Oct 26 | Engagement letter covers the full compliance package in `10` #counsel-package (a), not just the three pages, with a written flat quote or an hours estimate (`#budget`) |
| L2 | Counsel drafts `/privacy`, `/terms`, `/accessibility`; builder places them on the preview, marked in review | Counsel, builder | — | 1 | L1 | Oct 26 – Nov 9 | Drafts on the preview by Mon Nov 9 |
| L3 | Founder review of counsel's text, in two parts. **Frozen by Mon Nov 16 with counsel's sign-off (`10` #counsel-package):** the consent texts (`CONSENT_VERSIONS`, one id per form), the privacy page's processor list, and the analytics posture. **May change until Wed Nov 18, 12:00:** other wording on `/privacy`, `/terms`, and `/accessibility`. Approves L4. | Founder | 0.75 | — | L2, L4 | Mon Nov 16, 13:00 | Counsel's written sign-off filed in `Compliance/counsel/`; "Last updated" dates set; Stripe's terms URL is `/terms`. Any change to a consent text or the processor list after Nov 16 re-runs `#qa` 4.1, 4.11, 12.3, and 12.4 and moves launch to the fallback date. |
| L4 | Internal Do Not Call policy, one page, from `10` #tcpa-analysis item 4 | Builder | — | 0.5 | `10` | By Fri Oct 30 | Used in R4's training from Nov 2; in counsel's package; approved in L3; any change sent to the vendor the same day |

`10`'s gate is counsel's sign-off on the consent texts and the analytics posture by Mon Nov 16 (brief v2 key dates). This plan freezes everything a form, the processor list, or analytics depends on with counsel's Nov 16 sign-off, as `10` requires, and lets the rest of the page wording move to Wed Nov 18, 12:00, a change `10` has to adopt (`#dependencies`).

### S · Search and analytics

| ID | Task | Owner | F | B | When | Done when |
|---|---|---|---|---|---|---|
| S1 | GA4 per `09` (custom definitions registered by Mon Nov 16), Search Console, Bing, the GA4 ↔ Search Console link, Looker Studio | Builder | — | 6 | Oct 19 – Nov 13 | `09` #qa P1–P3 |
| S2 | `analytics.ts`, the event registry, taxonomy and PII tests | Builder | — | 8 | Nov 2–13 | `09`'s tests pass in CI |
| S3 | Founder's LinkedIn profile and the company page (`07` L0.7), from company-page text the builder drafts from `07`'s fact sheet | Founder, builder | 0.5 | 0.5 | Wed Nov 18, 14:00 | Both live with fact-sheet wording; after launch only as a logged waiver of L0.7 (`#hours`) |
| S4 | JSON-LD per `07`, `robots.txt`, `llms.txt`, sitemap, IndexNow | Builder | — | 6 | Nov 2–13 | `07` L0.2, L0.3, L0.5 |
| S5 | Baseline prompt test, 48 runs (`07` L0.1), run by the builder under `07` #run-protocol (open question 5) | Builder | — | 2 | Nov 16–19 | 48 rows logged |
| S6 | Tracking QA P1–P12 (`09` #qa) | Builder | — | 3 | Nov 16–19 | 12 of 12 pass |

### Q and G · QA and launch

| ID | Task | Owner | F | B | When | Done when |
|---|---|---|---|---|---|---|
| Q1 | The manual parts of `#qa`; 3 of the 12 hours are the builder's backup's (8.3, 8.7, 8.8) | Builder, backup | — | 12 | Nov 9–19 | Every `#qa` row passes or has a signed waiver from the founder that no launch-gate item depends on |
| Q2 | Release-candidate review on the founder's own phone in both states: first screen, tap-to-call, one form on the QA preview | Founder | 0.5 | — | Tue Nov 17, 13:00 | Approved, or a fix list with Wednesday due dates |
| G0 | Production behind Access (`06` #launch), with test keys until I4's live activation and live keys by Fri Nov 13. HSTS at 300 s through the zone API or a Response Header Transform Rule (the dashboard's shortest step is 1 month; verify that 300 s is accepted, and if it isn't, start at 1 month and drop the 10:10 raise). One synthetic run; a WAITLIST → WAITLIST flip drill; the enforcer and the peer on its Access policy. DMARC `p=quarantine` follows separately on Mon Nov 16. | Builder | — | 3 | **Mon Nov 9** | Every monitor green for 72 hours, by Thu Nov 12 |
| G1 | Homets staff briefing (`techeo.web.strategy` R9): what Techeo is; no Homets customer, employee, or figure appears on the site; Techeo's line never takes Homets calls | Founder | 0.5 | — | Wed Nov 18, 13:00 | Held with the CSM desk and dispatch |
| G2 | Go/no-go | Founder, builder | 0.5 | — | Thu Nov 19, 13:00 | `#launch-day` preconditions all true, including no open `#register` row that blocks launch, or the hold is recorded |
| G3 | Launch | Founder, builder, enforcer | 1.75 | 4 | Fri Nov 20, 10:00–11:45 | `#launch-day` |
| G4 | Hypercare: defects, monitoring, day-1 and week-1 checks | Builder | — | 8 | Nov 20 – Dec 18 | `#post-launch` items through day 30 closed |
| G5 | OPEN readiness: live rehearsal, the Feb 1 pull request, OPEN checks on production, January upkeep | Builder | — | 12 | Jan 4 – Feb 1 | `#flip-open` |

**Totals:** founder **22.25 hours**. Builder **191.5 hours through launch**, plus 8 for hypercare and 12 for OPEN readiness, **211.5 in all** (range 170–260), 3 of them by the builder's backup. Others: photographer 4; Homets reviewers 3.5 and 0.5; enforcer about 15 through Jan 31 (seeds, R5, R6, the launch call, the flip drill, and the December and January shops); peer about 1; counsel about 6–12 hours beyond the MSA for the compliance package, or its flat quote.

## Schedule, Weeks 1–9 {#schedule}

This maps onto `techeo.plan90` Phase 1. Founder slots are shown in [TZ].

| Week | Dates | Founder (website) | Builder | Others | Gate or milestone |
|---|---|---|---|---|---|
| W1 | Sep 28 – Oct 2 | Mon 13:00 A1. Tue 13:00 H1, P1. Wed 13:00 C1. Thu 13:00 C3, 14:00 C4 (first part). | Not yet contracted | — | Preflight answers written (D5) |
| W2 | Oct 5–9 | A3 on receipt day. Wed H2 interviews; Thu C4, C5 (first part); Fri 10:30 signature. | Signs Fri Oct 9; local scaffold (2 h) | — | Builder under contract |
| W3 | Oct 12–16 | Mon 13:00 A4. Wed 13:00 C5. Thu 10:30 R2, 13:00 C2. Fri 10:30 H4. | A5 (Mon–Wed), A2 (the hour Search Console verifies), A6a, then B1, B2, I1; A6b, R1 (30 h) | Vendors quote | **Fri Oct 16:** preview passes smoke checks |
| W4 | Oct 19–23 | **None (Homets audit)** | P1a, B3, B4, I1, I2, I7, I8, S1 (37 h) | — | Fri Oct 23: audit PDF, which opens C6 |
| W5 | Oct 26–30 | Mon 13:00 L1. **Tue 13:00–14:15 P2**; Tue, Wed 15:00 C6. Thu 13:00 P3, 14:00 R3. Fri 10:30 H4. | B4, B5, B6, I2–I5, L4 (36.5 h) | Photographer; counsel | CSP report-only on previews. **Fri Oct 30:** script-1.0 approved; SLA path live; seed access set up |
| W6 | Nov 2–6 | Tue, Wed 13:00 C7. **Fri 10:30 H4, 10:45 H5.** | B5, I2–I4, I6, I9, R4, S2, S4 (36 h) | Receptionist live Nov 2 on script-1.0; seeds on the QA preview; P4 exports Fri | **Fri Nov 6, 10:30: builder status and slip checkpoint** |
| W7 | Nov 9–13 | **None (pilot audits)** | G0 (Mon), P5, Q1, I8, I9, L2, S1, S2, S4 (35 h) | Seeds on production behind Access; test and R6 calls | **Mon Nov 9:** production behind Access. Stripe live by Fri Nov 13; synthetic green daily |
| W8 | Nov 16–20 | Mon 13:00 L3, 14:00 R6. Tue 13:00 Q2, 14:00 C8. Wed 13:00 G1, 14:00 S3. Thu 13:00 G2, **13:30 weekly review**, 14:00 H4. **Fri 10:00–11:45 G3.** | S5, S6, Q1, G3; DMARC `p=quarantine` Mon (15 h) | Counsel's sign-off on consent and analytics Mon; other page wording final Wed 12:00 | **Fri Nov 20: v1 live.** |
| W9 | Nov 23–25 | **None** (Thanksgiving Nov 26–27) | G4 day-1 and week-1 checks | Seeds | Review moves to Wed Nov 25, 10:00 |

**Dependency spine.** LLC filing receipt → A3 → H2 → A4 → A5 → A2's manual-actions read → B1/I1 → I2 → I3/I4 → I9 → G0 → G3; and Homets audit PDF → C6 → C7 → B5 → C8 → G2. The **longest external wait is the state's LLC processing time**, same-day to weeks (verify for [TECHEO_STATE]). If the receipt slips, H2, A3–A5, and B1 slide day for day; nothing is built or committed before the contract (D3, D4). A slip past Fri Oct 16 brings the floor decision forward.

## Founder hours against the cap {#hours}

### What `techeo.plan90` already takes

`techeo.plan90` gives no hours, so these are **assumptions** built from its task list, `techeo.audit`'s "~8 hours once templated (first one: ~20 hours)," and a 30-minute weekly review. Replace them with the time log after Week 2.

| Week | `techeo.plan90` tasks (founder hours) | Total |
|---|---|---|
| W1 | Framework 0.5 · radius 1.0 · enforcer 1.0 · ServiceTitan baseline 4.0 · pricing assumptions 1.0 · techeo.com and trademark search 1.0 · review 0.5 | 9.0 |
| W2 | LLC and EIN 1.5 · bank and card 1.0 · audit rubric 3.0 · five scripts 3.0 · review 0.5 | 9.0 |
| W3 | Gap Statement 4.0 · PDF template 3.5 · access email 1.0 · review 0.5 | 9.0 |
| W4 | Cold shop 2.0 · data pull 3.0 · Homets audit 6.5 · review 0.5 | 12.0 |
| W5 | Top three findings 2.5 · MSA to counsel 1.5 · insurance quotes 1.5 · IP license draft 1.5 · review 0.5 | 7.5 |
| W6 | Starter-set list 1.0 · SOP starter set and four-hour test 6.0 · playbooks 3.0 · review 0.5 | 10.5 |
| W7 | Recruit 1.0 · two pilot audits end to end at `techeo.audit`'s ~8-hour rate 16.0 · notes 1.0 · review 0.5 | 18.5 |
| W8 | Audit v2 revisions 4.0 · bind insurance 1.0 · review 0.5, held Thu Nov 19, 13:30 (the "single-page site" row is the website column below) | 5.5 |
| W9 | 20 targets 3.0 · 10 referral sources 1.5 · peer network 0.5 · scripts 2.0 · Design Partner Agreement draft 1.5 · review 0.5 | 9.0 |
| | | **90.0** |

### The arithmetic

W1 and W2 each had a quarter-hour spare, so C4 and C5 start early; that is the only rebalance the dependencies allow. W3's remaining 0.25 hour can't be used by anything later: C6 and C7 wait on the audit PDF, P2 and P3 on the shoot, and R3 on the vendor's draft.

| Week | Cap | `techeo.plan90` | Website (founder) | Total | Against cap | Website tasks |
|---|---|---|---|---|---|---|
| W1 | 12 | 9.0 | 3.0 | 12.0 | 0 | H1, P1, C1, C3, C4 (0.25) |
| W2 | 12 | 9.0 | 3.0 | 12.0 | 0 | A3, H2, C4 (0.5), C5 (0.5) |
| W3 | 12 | 9.0 | 2.75 | 11.75 | −0.25 | A4, R2, C2, C5 (0.5), H4 |
| W4 | 12 | 12.0 | 0 | 12.0 | 0 | — (W4's status note is read in W5) |
| W5 | 12 | 7.5 | 4.75 | 12.25 | **+0.25** | L1, P2, P3, C6, R3, H4 |
| W6 | 12 | 10.5 | 2.0 | 12.5 | **+0.5** | C7, H4, H5 (slip checkpoint) |
| W7 | 12 | 18.5 | 0 | 18.5 | **+6.5** | — (W7's status note is read in W8) |
| W8 | 12 | 5.5 | 6.75 | 12.25 | **+0.25** | L3, R6, Q2, C8, S3, G1, G2, G3 (1.75), H4 |
| W9 | 7.2 (3 of 5 days) | 9.0 | 0 | 9.0 | **+1.8** | — |
| **Phase 1** | **103.2** | **90.0** | **22.25** | **112.25** | **+9.05** | |

**Plainly:**

1. **At the 12-hour top of the band, the website doesn't quite fit.** Once the slip checkpoint, the full 1.75-hour launch window, and a quarter-hour a week for the builder's questions are counted, **Weeks 5, 6, and 8 run 0.25, 0.5, and 0.25 hours over, 1.0 hour in all.** No week has any buffer.
2. **At the 10-hour bottom, it doesn't fit at all.** The cap is 86 hours; `techeo.plan90` alone is 90.
3. **`techeo.plan90` exceeds the cap on its own in Weeks 7 and 9.** Two pilot audits at `techeo.audit`'s ~8-hour templated rate take 16 hours, and they come before Week 8's templating fixes, so 8 each is if anything low. That isn't this document's to fix, but it is why the website takes nothing from those weeks and can't absorb spillover.
4. **A founder-driven AI build** would add 150 or more hours that Phase 1 doesn't have. "AI-assisted" can only mean a builder who is not the founder.

### Options

| Option | Effect on founder hours | Cost | Verdict |
|---|---|---|---|
| **A · Delegate the whole build**; the founder does only C, signatures, scoring, approvals, and launch | 22.25 hours; without it, 170+ | $12,690 at plan | **Required**; every option assumes it |
| **B · Cut scope to the floor** (`techeo.web.strategy` #releases): WAITLIST homepage, `form_audit_reserve`, `/thanks/audit-reserved`, legal pages, robots, sitemap, `/llms.txt`, and the phone on Nov 20; `/audit`, `/teardown`, and the other thanks pages by Fri Jan 15 | Moves at most about 3.0 hours into Phase 2: C7 (1.5), plus a separate read-aloud and phone check of the two pages (about 1.5). Phase 2 has 4.0 hours of slack before Jan 15 (`#v1-1`). Decided on Nov 6, C7 is usually already done (Nov 3–4), so only about 1.5 move and W8 drops by about 0.5. Chosen from the start instead, it would bring every Phase 1 week to 12 or under (W5 11.75 with P3 moved to Mon Nov 2, W6 11.5, W8 11.75), but it ships less on Nov 20 than brief D1 promises | $0 extra; same builder work, later | **Pre-committed trigger**, below. As the default it needs D1 revised (open question 1) |
| **C · Use a slack week** | None in Phase 1: W3's 0.25 hour comes too early for anything that's over. Phase 2's slack can't take launch work and is B's reserve. | — | Not available |
| **D · Exceed the cap as a logged decision, approved in advance** | W5 +0.25, W6 +0.5, W8 +0.25 (1.0 in all) | — | **Recommended.** It is the only way to ship D1's v1 on Nov 20, and `techeo.guardrails` asks only that exceeding a cap be "a visible decision rather than a drift" |

**Recommendation: A, plus D approved in advance for Weeks 5, 6, and 8 and logged at each Friday review, plus B as a pre-committed trigger.** At the **Fri Nov 6, 10:45 checkpoint** (H5), the founder ships the floor on Nov 20 if **any** of these is true:

1. C3–C7 are not all approved by Thu Nov 5, 17:00.
2. Logged founder website hours for Weeks 1–6 exceed the plan (15.5) by more than 1.5.
3. The builder's Thursday status shows any `form_audit_reserve` or `form_teardown_request` end-to-end test failing on the preview.
4. Both pilot contractors are not confirmed, with dates inside Nov 9–13, by Thu Nov 5, 17:00.

**A second check runs at the Fri Nov 13 review.** If the time log shows the pilots actually spilling into Week 8, v1 launches on the Tue Nov 24 fallback (`#launch-day`), because the floor can't be built in one week.

**In Week 8 the launch-gate tasks keep their slots:** L3, R6, C8, G1, G2, and G3. G1 is a launch precondition (`techeo.web.strategy` R9, `#launch-day`), and `07`'s Homets link waits on it. Only S3 may move after launch, and only as a logged waiver of `07` L0.7: the builder still ships the company page (0.5 B), and the founder's profile half (0.5) takes W10's Tue Dec 1, 13:00 slot, using half of W10's 1.0 hour of slack and leaving the floor 3.5 hours before Jan 15.

## Budget and reconciliation {#budget}

### Stripe fees per $1,500 Engine Audit

These were checked against third-party pricing summaries and Stripe support-page snippets in September 2026. stripe.com could not be fetched from this environment. **Verify every row on stripe.com/pricing before launch.**

| | Card, US-issued | ACH Direct Debit, instant verification |
|---|---|---|
| Processing | 2.9% + $0.30 = **$43.80** | 0.8%, capped at $5.00 = **$5.00** |
| Post-payment invoice (`invoice_creation`, `06` #stripe) | 0.4%, at most $2.00 = $2.00 | $2.00 |
| Bank-link verification (Financial Connections) | — | $0.10–$1.50 per linked account (sources disagree; verify) |
| **Total** | **$45.80 (3.05%)** | **$7.10–$8.50** |
| Net to Techeo | $1,454.20 | $1,491.50–$1,492.90 |
| Edge cases | International card +1.5% ($22.50). A refund doesn't return the processing fee (verify). Dispute fee $15, plus a separate $15 fee if you counter the dispute, refunded if you win (a 2025 change; verify on stripe.com/pricing). | Failed debit $4.00; dispute $15 (verify) |

At the Base scenario's seven audits (`techeo.financials` #scenarios), fees run $320.60 if all pay by card, or $49.70–$59.50 if all pay by ACH.

### One-time and pre-revenue costs, through Jan 31, 2027

| Item | Low | Plan | High | Basis (assumptions unless noted) |
|---|---|---|---|---|
| Builder, v1 through the OPEN rehearsal | $7,650 | $12,690 | $26,000 | 170 h × $45 · 211.5 h × $60 · 260 h × $100; get three bids |
| Builder, v1.1 and the two reduced prompt tests (`#v1-1`) | $540 | $840 | $1,700 | 12–17 h: templates 10–15, plus the December and January reduced tests at 1 hour each |
| Photographer, half-day | $400 | $600 | $900 | Local rates |
| Counsel, website compliance package (`10` #counsel-package) | $1,800 | $3,600 | $6,000 | Re-quoted for the full scope `10` lists, not three pages: the legal pages, the consent texts, the TCPA and calling-hours positions, the recording table, CAN-SPAM, the claims ledger, the Homets license, the releases, the photographer agreement, the trademark clearance result, and its 15 questions. 6–12 h beyond the MSA at $300–$500 an hour; plan 9 h at $400. Counsel's written flat quote at L1 replaces this row. The trademark filing stays in `techeo.financials` #startup |
| Receptionist, Nov 2 – Jan 31 | $945 | $2,270 | $3,600 | `08` #receptionist: $315–$1,200 a month (estimate: 45–120 billable calls at $7–$10; verify with vendors); plan about $757 a month, the midpoint. January's seeds and three-attempt callbacks push toward the high end |
| Receptionist setup | $0 | $0 | $100 | Vendor-dependent |
| Monitoring test line, Nov–Jan (`08` #unanswered) | $6 | $15 | $30 | A programmable-voice number in Techeo LLC's name for `techeo-ops`' daily call to [TECHEO_PHONE], never the teardown test line: $2–$10 a month (assumption; verify). The vendor doesn't bill monitoring calls (must-have 10) |
| ClickUp, Oct–Jan (`08` open question 11) | $0 | $0 | $80 | Free by default, with no custom fields. Unlimited at $7–$10 per member a month (verify) for the founder and the builder only if the delivery fields are wanted, chosen before any custom field is set |
| Phone number, 3 months | $0 | $30 | $45 | May be included |
| Workspace Business Starter, 1 user, Oct–Jan | $28 | $28 | $34 | $7 a month annual, $8.40 flexible (Sep 2026 listings; verify) |
| Password manager, 2 seats, Oct–Jan | $0 | $32 | $40 | Verify |
| GitHub Team (`06` #repo) | $44 | $44 | $48 | $4 per user a month (github.com/pricing, Sep 2026, shown as a first-12-months price; verify): founder and builder Oct–Jan, enforcer from Nov (all three from Oct, high). Environment required reviewers need Enterprise Cloud on a private repository, so `06` uses the ruleset's code-owner review instead |
| Domain transfer with a year's renewal | $0 | $11 | $11 | `06`: $10.44–$11.15 (verify) |
| Likeness releases | $50 | $150 | $250 | $50 a person from Techeo's account (`10` open question 8) × identifiable people in `05`'s P2 and P5: 1, 3, or 5 |
| Homets reviewers (P4) | $120 | $160 | $200 | 3.5 h of redaction plus 0.5 h of second review at $30–$50 an hour (assumption), under a one-page agreement (open question 9) |
| Enforcer, if paid | $0 | $450 | $750 | About 15 h through Jan 31 at $30–$50 an hour. Required if the enforcer is a Homets employee (`techeo.guardrails` #coi item 6); $0 only if not (open question 17) |
| Live rehearsal fee | $0.33 | $0.33 | $0.33 | Card fee on $1, not returned |
| Hosting, D1, Workers, Access, Supabase Free, Cal.com, Resend, Better Stack, Healthchecks.io, fonts (SIL OFL), GA4, Search Console, Bing, R2 | $0 | $0 | $0 | `06`'s free-plan findings (verify) |
| **Total** | **$11,583** | **$20,920** | **$39,788** | |

### Monthly run-rate

| Item | From | Plan | Range |
|---|---|---|---|
| Workspace, 1 user | Oct 2026 | $7 | $7–$8.40 |
| GitHub Team, 3 seats (`06` open question 1) | Oct 2026 | $12 | $8–$12 |
| Receptionist (`08` #receptionist) | Mon Nov 2, 2026 | $757 | $315–$1,200 |
| Phone number | Nov 2026 | $10 | $0–$15 |
| Monitoring test line (`08` #unanswered) | Nov 2026 | $5 | $2–$10 |
| Password manager | Oct 2026 | $8 | $0–$10 |
| ClickUp (`08` open question 11): Free by default; Unlimited for 1–2 members only if the delivery fields are wanted | Oct 2026 | $0 | $0–$20 |
| Supabase Pro (`06` open question 3) | Mon Feb 1, 2027 | $25 | $25 |
| Workers Paid, only if the CPU limit forces it | — | $0 | $0–$5 |
| Enforcer's seeds and shop calls, if paid (about 3 h a month) | Feb 2027 | $90 | $0–$150 |
| Builder maintenance retainer, 6 h a month (`#maintenance`) | Feb 2027 | $360 | $225–$800 |
| **Nov 2026 – Jan 2027** | | **$799** | $332–$1,275 |
| **From Feb 2027** | | **$1,274** | $582–$2,255 |

Plus the domain at $10.44–$11.15 a year, and Stripe fees per sale. The enforcer's Nov–Jan hours are in the one-time table.

### Reconciliation against `techeo.financials`

`techeo.financials` #startup budgets the website at **$0** ("build it yourself"). The hours cap rules that out.

| | Low | Plan | High |
|---|---|---|---|
| `techeo.financials` startup, website at $0 | $5,250 | $9,000 | $13,700 |
| Website, pre-revenue (this document) | $11,583 | $20,920 | $39,788 |
| **New startup total** | **$16,833** | **$29,920** | **$53,488** |
| Against the $13,700 high estimate | +$3,133 | **+$16,220** | +$39,788 |

**The new plan total, about $29,900, does not stay within the $13,700 high estimate, and neither does the low case.** With the plan at $9,000, the high estimate leaves $4,700. The website's other lines take about $3,930 at low and $8,230 at plan, so the build itself would have to cost at most about $770, and at plan nothing is left for it at all. Only a founder build could, and the cap forbids one. The site also adds about $800–$1,270 a month at plan to the $1,200–$1,800 fixed cost in `techeo.financials` #unit-economics. At plan, one Booking Sprint client (about $3,270 a month in contribution) still covers the company, with about $200 to spare at the top of the fixed range; at the top of the receptionist range ($2,255 a month for the site) it doesn't, and the second client carries the site.

**Levers:**

| Lever | Saves (plan) | Cost of pulling it | Owner of the change |
|---|---|---|---|
| Lean scope: defer the D1 outbox, ClickUp API tasks, nightly Lighthouse, and the gallery until after Feb 1 | ~24 builder h ≈ $1,440 | Less resilience in WAITLIST, when traffic is lowest; the synthetic test stays; the founder waives `#qa` 9.2; revises `06`, `08`, `09`. The season-bot App and pa11y stay: the Feb 1 flip and the enforcer's flip run through the App (`06` #repo), and `10`'s launch gate includes the pa11y layer (`#accessibility`), which no waiver may touch | `06` |
| Counsel's flat quote at L1, near the low end | Up to ~$1,800 | None | Founder, counsel |
| Receptionist from Nov 9, not Nov 2 | ~$175 | Loses `08`'s two unattended SLA weeks | `08` |
| Founder's phone, no photographer | $600 | Weaker portrait (`05` recommends hiring) | `05` |
| Build bid at $45 an hour | ~$3,170 | Smaller pool, more review risk | Founder |

**Recommendation.** Add a website line to `techeo.financials`: **$20,900 plan, $21,700 ceiling through Jan 31, 2027**, funded by a documented owner capital contribution to Techeo LLC, never Homets cash (`techeo.financials` #cash rule 4). Sign the builder on a fixed fee paid in milestones, under one rule:

- **Sign at $12,690 or less.**
- **From $12,691 to $13,469** (the ceiling less the other plan lines, about $8,230), sign and log the overage against the ceiling.
- **Above $13,469,** apply the lean-scope lever before signing. If the bid is still above, sign for the floor scope and finish in December and January.

| Milestone | Date | Share | Amount at $12,690 |
|---|---|---|---|
| Signing | Fri Oct 9 | 20% | $2,538 |
| Checkpoint: preview live, reserve and teardown forms passing end to end | Fri Nov 6 | 30% | $3,807 |
| Launch | Fri Nov 20 | 30% | $3,807 |
| Live rehearsal passed | Fri Jan 29 | 20% | $2,538 |

At `techeo.audit`'s ~$1,300 contribution per audit, the site's pre-revenue cost equals about 16 audits, or between six and seven months of one Booking Sprint.

### Year-one total, Oct 2026 – Nov 2027 {#year-one}

The tables above stop at Jan 31. This one adds everything through the end of the fall 2027 window: the monthly run-rate from Feb 1, v2 (`#v2`), and the per-sale Stripe fees. v3 starts after Nov 30, 2027 and is left out (`#v3`, about $4,205 at plan).

| Component | Low | Plan | High | Basis |
|---|---|---|---|---|
| v1 and v1.1, Oct 2026 – Jan 2027 | $11,583 | $20,920 | $39,788 | The one-time table, including its months of receptionist, phone, and tools |
| Run-rate, Feb – Nov 2027 (10 months) | $5,820 | $12,740 | $22,550 | "From Feb 2027" row × 10 |
| Domain renewal, Oct 2027 | $10 | $11 | $11 | `06`: $10.44–$11.15 (verify) |
| v2, May – Oct 2027 | $7,020 | $10,660 | $16,800 | `#v2`'s cost table, with hypercare and the wider counsel review |
| Stripe fees | $28 | $321 | $321 | Conservative's four audits by ACH; Base's seven by card (`techeo.financials` #scenarios). Each fall-window audit adds $45.80 by card |
| **Year one** | **$24,461** | **$44,652** | **$79,470** | |
| Of which Oct 2026 – Sep 2027, `techeo.financials`' scenario year | $23,197 | $41,973 | $74,749 | Less Oct–Nov 2027's run-rate, the renewal, and October's hypercare |

**Reconciled against `techeo.financials`:**

- **#startup** budgets the website at $0. Pre-revenue, it is $20,920 at plan, from the owner capital contribution recommended above.
- **#unit-economics** puts fixed cost at $1,200–$1,800 a month, without the site. The site adds $1,274 a month at plan from Feb 1, most of it the receptionist ($757) and the builder retainer ($360).
- **#scenarios** runs Oct 2026 – Sep 2027. Over that year the site costs about $42,000 at plan: about 47% of Base's ~$90,000 of revenue, and about 93% of Conservative's ~$45,000. About $21,050 of it falls after Feb 1 and is paid from revenue; v2 is funded that way (`#v2`).
- **#cash rule 2** holds three months of operating expense in reserve before any hire. The site's run-rate adds about $3,800 to that reserve at plan, before hire #1, the Homets operations owner (`techeo.financials` #hiring). That is the reserve `techeo.web.strategy` R13 says the website spends; `#register` CR-09 carries the figure R13 should quote.

**Effect on cash by month, at plan.** Outflows only; revenue is `techeo.financials`'.

| Month | Website cash out | Cumulative | What lands |
|---|---|---|---|
| Oct 2026 | $3,322 | $3,322 | Builder signing milestone $2,538; photographer $600; releases $150; accounts and the domain |
| Nov 2026 | $12,323 | $15,645 | Builder checkpoint and launch milestones $7,614; counsel $3,600; receptionist from Nov 2; Homets reviewers; enforcer |
| Dec 2026 | $1,729 | $17,374 | v1.1 templates and the December prompt test $780; receptionist; enforcer |
| Jan 2027 | $3,546 | $20,920 | Rehearsal milestone $2,538; the January prompt test; receptionist; enforcer |
| Feb 2027 | $1,274 | $22,194 | Run-rate from Feb 1: Supabase Pro, the builder retainer, and the enforcer join |
| Mar 2027 | $1,274 | $23,468 | Run-rate |
| Apr 2027 | $1,274 | $24,742 | Run-rate |
| May 2027 | $3,134 | $27,876 | v2 templates and engine pages: builder $930, writer $750, designer $180 |
| Jun 2027 | $3,644 | $31,520 | Builder $870, writer $900, counsel on `/pricing` and the approval form $600 |
| Jul 2027 | $3,314 | $34,834 | `/calculator` and the index: builder $1,020; writer $300; designer $120; case-study photography $600 |
| Aug 2027 | $4,824 | $39,658 | Independent accessibility audit $2,250; builder $600; writer $300; counsel on the disclosures, `/partners`, and `/markets` $400 |
| Sep 2027 | $1,994 | $41,652 | Launch-week builder hours $360; hypercare $360 |
| Oct 2027 | $1,405 | $43,057 | Hypercare $120; domain renewal $11 |
| Nov 2027 | $1,274 | $44,331 | Run-rate |
| Per sale | $321 | $44,652 | Stripe fees on Base's seven audits, netted from each payout |

**November 2026 is the cash peak**: two builder milestones and counsel land together, about 59% of the pre-revenue total in one month. The capital contribution goes in by the Fri Oct 9 signing for October's $3,322, and the balance by Fri Nov 6, the checkpoint milestone.

## Pre-launch QA checklist {#qa}

Run Mon Nov 9 – Thu Nov 19 on the QA previews and on production behind Access (from G0, Mon Nov 9). The builder owns each row unless marked (F) founder, (E) enforcer, or (Bk) the builder's named backup. **Done when** every row passes or carries a founder waiver that no `techeo.web.strategy` or `10` launch-gate item depends on, with evidence (screenshots, curl output, logs) in `docs/qa/v1.0.md`.

### 1 · Content and copy

| # | Check | Pass |
|---|---|---|
| 1.1 | `03` #qa rows 1–15 on built HTML in all three state variants, with row 13 against counsel's MSA draft (C8); (F) row 16 and the signed sheet (C8) | Pass; signed |
| 1.2 | Disclosure present in `#operator` and word for word in every footer (D8) | Every page |
| 1.3 | Prices and terms match D6: $1,500; 7 business days; credit wording; "Retainers from $3,500/month"; no Demand Engine price; no Attribution Layer | Exact |
| 1.4 | Engine names per D6, Booking Engine listed first everywhere | 0 deviations |
| 1.5 | SLA line is version A; "within 15 minutes" appears nowhere | 0 hits |
| 1.6 | No testimonials, logos, counters, "as seen in," or popups (D7, D14); alt text matches the final photos | Pass |

### 2 · Placeholders resolved, or sections omitted

| # | Check | Pass |
|---|---|---|
| 2.1 | `06`'s production token gate over all of `dist/` (HTML, XML, `llms.txt`, `robots.txt`, JSON-LD) | 0 brief tokens, 0 unknown tokens |
| 2.2 | `#proof` renders only if `[HOMETS_BOOKING_RATE_FROM]`, `[HOMETS_BOOKING_RATE_TO]`, and `[HOMETS_WINDOW]` are all set with ledger ids; otherwise no `id="proof"` and no proof text | `proof.test.ts` passes |
| 2.3 | Every other Homets figure has a claims-ledger id, a window, and a ratio or delta form (D7) | Pass |
| 2.4 | [TECHEO_POSTAL_ADDRESS] is a USPS-registered PO box, a private mailbox at a registered commercial mail receiving agency, or a registered agent's address only if the agent confirms in writing that it accepts and forwards business mail (`10` open question 12); never a home (F confirms) | Confirmed; the agent's letter filed if used |
| 2.5 | [TECHEO_PHONE] renders as "(XXX) XXX-XXXX," with an E.164 `href` | Pass |

### 3 · Links

| # | Check | Pass |
|---|---|---|
| 3.1 | `lychee --offline --include-fragments --root-dir "$PWD/dist" --index-files index.html dist` (`06` #ci; without `--root-dir`, root-relative links like `/audit` can't be resolved) | 0 broken |
| 3.2 | External links, including Cal.com and Stripe's terms link, checked live | 0 errors |
| 3.3 | `02` URL rules: no trailing slash, no `.html`, no links to `/thanks/*` | 0 |
| 3.4 | Host variants: http → https, `www` → apex, `techeo-web.pages.dev` → apex, each a single 301 (`02` #host-redirects) | Pass |
| 3.5 | Every legacy URL from the preflight 301s per `02` #preflight-redirects | Pass |

### 4 · Forms end to end, including failure paths and the synthetic test

| # | Check | Pass |
|---|---|---|
| 4.1 | Each of the four forms, with JavaScript on and off, in every state where it appears: success → 303 to the right thanks page (JSON 200 for the calculator) | Pass |
| 4.2 | Validation errors show `03`'s messages, the summary, `aria-invalid`, and kept values | Pass |
| 4.3 | Decline outcomes (exclusion-zone ZIP, commercial, not on ServiceTitan, under $1.5M) show `03`'s blocks and send `08`'s emails | Pass |
| 4.4 | `form_audit_qualify` posted to a WAITLIST build → 409; Stripe is never called | Pass |
| 4.5 | Honeypot filled → quarantine plus normal redirect; rate limit → 429; bot check fails → 403 | Pass |
| 4.6 | Failure injection: Supabase, Resend, and ClickUp each down, then all three down → 503 with the phone number and values kept (`06` #forms failure table) | Every row as stated |
| 4.7 | Duplicate submit → one record; `state_mismatch` flagged | Pass |
| 4.8 | Confirmation email within 5 minutes with `08`'s content; internal email subject shows the right due time for leads at 10:00, 17:55, Saturday, the day before a holiday, and a Pacific lead under [TZ] | Pass |
| 4.9 | ClickUp task created once, with its SLA due date; a later submission from the same lead becomes a comment | Pass |
| 4.10 | Receptionist callback on a seed lands within the SLA and is logged in `app.lead_touches` (on the QA preview Nov 2–8, on production behind Access from Nov 9) | Pass |
| 4.11 | **Daily synthetic run** (`06` #monitoring) green on production behind Access for three consecutive days | 3 of 3 |
| 4.12 | No personal data in any log line or alert | 0 |

### 5 · Stripe in test mode, through webhooks

| # | Check | Pass |
|---|---|---|
| 5.1 | Every scenario in `06` #stripe's test plan: card success, decline, 3-D Secure, ACH success, ACH failure, expiry, duplicate and out-of-order events, refund, qualify in WAITLIST | All pass |
| 5.2 | Dispute test card (4000 0000 0000 0259) → `disputed` plus an immediate alert | Pass |
| 5.3 | Price guard refuses any Price other than 150,000 USD cents, one-time | Pass |
| 5.4 | Only card and `us_bank_account` offered; ACH via instant verification only; no promotion codes | Pass |
| 5.5 | Descriptor reads "TECHEO* AUDIT"; terms checkbox links to `/terms`; receipt, invoice PDF, and ACH mandate emails arrive | Pass |
| 5.6 | A bad webhook signature is rejected; the API version is pinned; the restricted key has only `06`'s scopes | Pass |
| 5.7 | Daily reconciliation: no mismatch for seven days on the QA preview | 7 of 7 |
| 5.8 | Live mode activated; live keys stored in production; no live session can be created in WAITLIST | Pass |

### 6 · Email deliverability and authentication

| # | Check | Pass |
|---|---|---|
| 6.1 | Gmail "Show original" on Workspace mail and on Resend mail: SPF, DKIM, and DMARC all PASS and aligned | Pass |
| 6.2 | DMARC at `p=quarantine` from Mon Nov 16, after three weeks of aggregate reports with no legitimate failure (`06` #dns) | Confirmed |
| 6.3 | Inbox placement for confirmations at Gmail, Outlook.com, Yahoo, and one Workspace and one Microsoft 365 business mailbox | Inbox in 5 of 5 |
| 6.4 | Blocklists (Spamhaus DBL, SURBL) clear for techeo.com | Clear |
| 6.5 | Commercial emails carry [TECHEO_POSTAL_ADDRESS] and an opt-out (CAN-SPAM, per `10`); transactional emails are classed per `10` | Pass |
| 6.6 | Replies to `team@techeo.com` reach the founder and the receptionist's intake address | Pass |

### 7 · Real phones and browsers

| # | Device and browser | Checks |
|---|---|---|
| 7.1 | iPhone with current iOS Safari; one iPhone a major version back | First-screen test in both states (`05` open question 9), header CTA, tap-to-call, reserve form, calculator, no sideways scroll at 320 px |
| 7.2 | A mid-range Android phone with Chrome | Same, over cellular data, not Wi-Fi |
| 7.3 | Desktop Chrome, Edge, Firefox, and macOS Safari | Layout at 1024 and 1280 px, forms, focus ring, print view of `/audit` |
| 7.4 | Landscape phone, 200% zoom, OS dark mode, reduced motion | Nothing lost; light theme holds; nothing moves |

### 8 · Accessibility (WCAG 2.2 AA; `10` owns conformance)

| # | Check | Pass |
|---|---|---|
| 8.1 | axe (WCAG 2.2 AA tags) plus pa11y on every v1 URL, in three states, at 320 and 1280 px | 0 violations |
| 8.2 | Keyboard only: every control in DOM order; visible 3 px focus never hidden under the sticky header (2.4.11); skip link works | Pass |
| 8.3 | (Bk) VoiceOver with iOS Safari, and NVDA with Chrome on Windows, run by the builder's backup, not the builder: headings, landmarks, form labels, error announcements, the calculator result, the FAQ disclosure (`05`) | Pass, with notes filed |
| 8.4 | Target size (2.5.8), consistent help (3.2.6), redundant entry (3.3.7); Turnstile in `interaction-only` with a keyboard- and screen-reader-operable challenge (3.3.8 doesn't apply in v1, which has no authentication step) | Pass |
| 8.5 | Windows contrast themes; text-spacing overrides (1.4.12); reflow at 320 px (1.4.10) | Pass |
| 8.6 | `/accessibility` claims nothing the latest test didn't verify; known issues are dated | Pass |
| 8.7 | (Bk) TalkBack with Android Chrome on `10`'s five tasks: reserve, qualify to Stripe (OPEN variant), teardown, calculator, homepage | Each task done without sighted help |
| 8.8 | (Bk) Third-party steps: Stripe Checkout, Cal.com, and any Turnstile challenge, by keyboard and VoiceOver (`10`) | Usable, or the phone alternative sits beside any step that fails |

### 9 · Performance budgets

| # | Check | Pass |
|---|---|---|
| 9.1 | Lighthouse CI budgets in `06` #performance, per path, as the median of 3 runs | All assertions pass |
| 9.2 | Nightly Lighthouse run, with GA4 loaded | 7 consecutive passing nights on the release-candidate preview before Nov 16, then 4 of 4 nights on production behind Access, Nov 16–19 (`06` #performance) |
| 9.3 | One WebPageTest run on a real mid-range Android over 4G for `/` | LCP ≤2.0 s |

### 10 · SEO

| # | Check | Pass |
|---|---|---|
| 10.1 | One H1 per page; titles ≤60 characters and metas ≤155, unique, matching `03` | Pass |
| 10.2 | Canonicals absolute, on the apex, self-referencing (`02`, `07`) | Pass |
| 10.3 | `robots.txt` and `llms.txt` identical to `07`, apart from build values | Diff clean |
| 10.4 | `/sitemap-index.xml` lists only indexable URLs: no thanks pages and no 404 | Pass |
| 10.5 | `noindex` on `/thanks/*` and the 404 page; **previews send `X-Robots-Tag: noindex` and sit behind Access**; a logged-out preview request is blocked | Pass |
| 10.6 | Structured data passes `jsonld.test.ts`, Google's Rich Results Test on each template (by hand), and validator.schema.org (`07` #sd-validation) | Pass |
| 10.7 | Raw HTML with JavaScript off contains every section, the calculator formula, "Homets Air and Heat," and "$1,500" | Pass |
| 10.8 | Cloudflare crawler settings match `07` #cloudflare; screenshots filed | Match |
| 10.9 | Search Console (domain property) and Bing verified | Both |
| 10.10 | Open Graph tags and share images render in LinkedIn Post Inspector (on production after launch, `07` L9) | Pass |

### 11 · Analytics

| # | Check | Pass |
|---|---|---|
| 11.1 | `09` #qa P1–P12, including the **DebugView walkthrough (26 of 26 events)**, zero PII, and no GA4 under GPC | 12 of 12 |

### 12 · Legal and compliance (`10` #launch-gate)

`10` lists what this checklist must include before v1 goes public. Rows 12.3, 12.4, 12.5, and section 8 cover `#consent-texts`, `#privacy-contents`, `#releases`, and `#accessibility`; the rest are below.

| # | Check | Pass |
|---|---|---|
| 12.1 | Counsel's written sign-off on `/privacy`, `/terms`, `/accessibility`, the consent texts, and the analytics posture is filed in `Compliance/counsel/` | Filed |
| 12.2 | All three linked from every footer; `/terms` linked from Stripe's consent and from `/audit` | Pass |
| 12.3 | Each form's consent text matches `10`'s current version for that form (`CONSENT_VERSIONS`, one id per form), unchanged since the Nov 16 sign-off (L3) | Pass |
| 12.4 | The privacy page's processor list matches the live configuration; the Homets firewall sentence is true (separate Supabase, Workspace, ClickUp) | Pass |
| 12.5 | D9 likeness releases on file in `Compliance/releases/`, with payment recorded; photo log signed by the second reviewer; the photographer's agreement filed; the Homets → Techeo license covers each Homets image, or that image is omitted (`05` fallback; `10` #releases) | Pass |
| 12.6 | Preliminary TECHEO trademark search result on file (`techeo.plan90` Week 1) | On file |
| 12.7 | `10` #rights: one staged request from a test lead completes in under 60 minutes of work, and the export covers every system in `#data-inventory` | Drill log filed |
| 12.8 | `10` #cookies: a clean browser visit to `/`, `/audit`, and `/teardown` shows exactly `10`'s cookie names in DevTools, and `/privacy`'s table matches; `09` P8 passes for GPC and DNT | Screenshots filed |
| 12.9 | `10` #retention: `supabase test db` proves each class purges on schedule, and a `legal_hold` row survives | CI log filed |
| 12.10 | `10` #trademarks: a build grep finds no third-party logo file and no "partner," "certified," or "official" next to a third-party name | 0 hits; grep output filed |
| 12.11 | `10` #processors: each provider's current data processing terms filed in `Compliance/vendors/`, or "none offered" noted | Every processor on `/privacy` |
| 12.12 | (F) Internal Do Not Call policy (L4): approved in L3, trained with the vendor (R4) and the enforcer | Policy and training record filed |
| 12.13 | Recording table `rec-2026-10-v1` verified by counsel and confirmed in writing with the receptionist vendor (`10` #recording) | Both confirmations filed |
| 12.14 | `10` #can-spam and #claims in full: every template renders its footer; unsubscribe works without login and suppresses within one business day; `List-Unsubscribe` and `List-Unsubscribe-Post` present; `08`'s opt-out test passes; every number in `03` #numbers and every `#promises` item has a `ready` ledger row, (F) signed before the deploy | Pass; signed |
| 12.15 | Calling-hours table `hours-2026-10-v1` verified by counsel and confirmed in writing with the vendor (`10` #quiet-hours) | Both confirmations filed |
| 12.16 | (E) The vendor's outbound caller ID shows [TECHEO_PHONE] on a test callback (`10` #tcpa-analysis item 5) | Call log or screenshot filed |

### 13 · Season flip, tested both ways

| # | Check | Pass |
|---|---|---|
| 13.1 | CI builds all three variants and `season.test.ts` passes | Pass |
| 13.2 | Timed preview drill WAITLIST → OPEN → WAITLIST, each under five minutes, with Cal.com discovery closed and opened and open Checkout Sessions expired | Pass |
| 13.3 | (E) The enforcer runs **Season flip** from their own 2FA account on a preview, using the printed runbook (`06` open question 2) | Done |
| 13.4 | The capacity variant shows its date and never a cause | Pass |
| 13.5 | **Cron against [TZ]:** a flip must land with the first scheduled run after local midnight. Two runs a day wouldn't do it everywhere: in Pacific time neither 05:05 nor 06:05 UTC falls after local midnight (05:05 UTC is 21:05 PST or 22:05 PDT the previous day), and in Mountain time neither does under standard time (Feb 1, Dec 1, and all year in Arizona), though 06:05 UTC is 00:05 MDT on May 1. `06`'s hourly schedule, 04:05–10:05 UTC, gives every US zone a run at 00:05 local. | `season-cron.test.ts` passes, including [TZ] |
| 13.6 | The vendor switches scripts within 1 hour of a test email (`08` must-have 7); the production drill (G0) passes | Pass |

### 14 · 404

| # | Check | Pass |
|---|---|---|
| 14.1 | `curl -sI https://techeo.com/zzz` → 404 with `noindex` and `03`'s body | Pass |
| 14.2 | No soft 404s: a trailing-slash URL 301s; unknown `/api/*` paths return 404 or 405 | Pass |

### 15 · Security headers

| # | Check | Pass |
|---|---|---|
| 15.1 | `curl -sI` on `/` and `/thanks/teardown` shows exactly `06` #security's header set; CSP enforced | Match |
| 15.2 | The report-only week ended with no unexplained violations | Pass |
| 15.3 | HSTS at 300 s behind Access, set through the zone API or a Response Header Transform Rule (or 1 month if 300 s couldn't be set; G0); TLS Full (strict); minimum TLS 1.2 | Pass |
| 15.4 | `gitleaks` clean; `pnpm audit --prod` clean; Actions pinned to SHAs | Pass |
| 15.5 | Every secret has a rotation date in the vault; the break-glass sheet is with the enforcer | Pass |

### 16 · DNS and MX

| # | Check | Pass |
|---|---|---|
| 16.1 | `dig` for NS, apex, `www`, MX (`1 smtp.google.com`), SPF, DKIM, DMARC, Resend records, CAA, verification TXT matches `06` #dns | Match |
| 16.2 | Mail from an outside account reaches the founder's mailbox and `team@` | Pass |
| 16.3 | Registrant is Techeo LLC (RDAP); transfer lock and auto-renew on; expiry more than a year out | Pass, or `06`'s dated plan |
| 16.4 | DNSSEC enabled only after seven days of stable name servers (`06`) | Correct for the date |
| 16.5 | Pre-migration zone file stored in the vault | Present |

### 17 · Receptionist test calls

| # | Check | Pass |
|---|---|---|
| 17.1 | (E) Six or more test calls (R5); (F) pre-launch mystery shop ≥86 with no critical fail (R6) | Both pass |
| 17.2 | Answered live within 20 seconds; recording notice in the first sentence; WAITLIST script with "February 1" | Every call |
| 17.3 | Per-call events reach `app.lead_touches` within 5 minutes; `08`'s SLA report ran unattended Nov 2–8 (staging) and Nov 9–15 (production behind Access) | Pass |
| 17.4 | Discovery booking impossible in WAITLIST (no slots offered) | Pass |

## Launch-day runbook, Fri Nov 20 {#launch-day}

**The founder works 10:00–11:45 [TZ] only,** inside Friday's 10:00–12:00 open block, ending 15 minutes early. Before 10:00 is the dispatch-board block and after 12:00 is Friday afternoon, both protected in `techeo.guardrails`. The weekly review moved to Thu Nov 19, 13:30, so the whole window is launch work: 1.75 hours (G3). Anything after 11:45 belongs to the builder under the pre-authorized rollback rules below. `06` #launch leaves every clock time to this runbook; the Access deletion is at 10:05 to leave 100 minutes for verification inside the window.

**Preconditions, confirmed at the Thu Nov 19, 13:00 go/no-go (G2):** every `#qa` row passes or is waived; `techeo.web.strategy`'s launch gate and `10` #launch-gate are met in full; 72 hours behind Access with every monitor green (from G0 on Mon Nov 9); counsel's sign-off filed and the consent texts and processor list unchanged since Nov 16; counsel's final page text live; counsel's MSA draft received by Mon Nov 16 and `03` #qa row 13 re-checked against it (C8); staff briefed (G1); the vendor confirmed on the WAITLIST script; no open `#register` row that blocks launch; and no heat wave, hard freeze, or coverage gap forecast at Homets for Friday.

| Time | Step | Owner | Verify | If it fails |
|---|---|---|---|---|
| 07:30 | Confirm overnight monitors and the 11:10 UTC synthetic run; take restore points (zone export, Supabase dump); log the Access application and deployment ids | Builder | Log all green, ids recorded | Fix, or report a hold at 10:00 |
| 08:00 | Email the vendor: "Launch today; WAITLIST script; next opening February 1." | Builder | Confirmed by 09:00 | Hold |
| 09:30 | Final curl pass through the Access service token: headers, 404, redirects, `/api/health` build SHA | Builder | Matches `#qa` 14–15 | Hold |
| 10:00 | Go call; founder reads the log | Founder, builder | "Go" recorded | Hold; fallback below |
| 10:05 | **Delete the Cloudflare Access application** (`06` #launch) | Builder | Founder's phone on cellular loads `/` with the "February 1" banner; `curl -sI` gives 200 with no `X-Robots-Tag` | Recreate Access (rollback step 1) |
| 10:10 | Raise HSTS to 30 days (skipped if G0 already started at 1 month) | Builder | `strict-transport-security: max-age=2592000` | Revert the setting |
| 10:12 | Point Better Stack at the public URLs | Builder | Two clean check cycles by 10:20 | Investigate; rollback if a page errors |
| 10:15 | `07` L1, L2, L4, L8: not noindexed, files served, raw-HTML facts present, host variants correct | Builder | All pass | Fix forward if not a rollback criterion |
| 10:20 | Run the synthetic check by hand | Builder | All four forms pass downstream; qualify returns 409 | **Rollback** |
| 10:30 | `07` L5–L7: Search Console sitemap, URL Inspection and indexing requests on `/`, `/audit`, `/teardown`; Bing sitemap and URL submission; IndexNow | Builder | Sitemap "Success"; JSON-LD in the crawled HTML | Fix forward |
| 10:30 | GA4 internal filter set to **Active** (`09`) | Builder | Setting screenshot | Fix forward |
| 10:35 | `07` L3 (ask an assistant with live retrieval for the price on `/audit`) and L9 (LinkedIn Post Inspector on three URLs) | Founder | Answer says $1,500; previews correct | Fix forward |
| 10:45 | A live call to [TECHEO_PHONE] on shop script A (a reservation), plus one `form_audit_reserve` seed from a real phone | Enforcer | Live answer; correct read-back; confirmation within 5 minutes; task with due time | Escalate to the vendor; not fixed by 11:30 means **rollback** |
| 11:00 | Founder browses for 30 minutes, to 11:30, meeting `09`'s launch-day check, while the builder watches GA4 Realtime | Founder, builder | No founder session | Fix the filter |
| 11:15 | Changelog entry v1.0.0 (`#changelog`) | Builder | Committed | — |
| 11:30 | **Decision point:** launched, or rolled back | Founder | "Launched" email to founder, enforcer, vendor | Rollback |
| 11:45 | **Founder stops.** | — | — | — |
| 13:00–17:30 | Watch alerts; second synthetic run at 15:00; confirm the seed's callback dial; end-of-day report | Builder | Report by 17:30, read by the founder Monday 13:00 | Pre-authorized rollback |

**Rollback criteria:** any form fails its test submission; any page returns a 5xx; the CSP blocks a form; a brief token is visible; a legal page is missing (all from `06`); the disclosure is missing from the homepage or any footer; the site renders OPEN, or any price other than D6's; Stripe Checkout can be reached; the phone line fails the live test and isn't fixed by 11:30. **Fix forward instead** for a missing sitemap submission, a share-preview error, GA4 misconfiguration (disable GA4 by config if it leaks PII), or a copy typo.

**Rollback procedure,** fastest first (`06` #launch):

1. Recreate the Access application (about a minute). Verify that a logged-out request gets the Access login.
2. Restore the previous deployment in Pages.
3. Revert the commit and redeploy.
4. Restore DNS from the zone export, only if mail is broken.

Then tell the vendor the phone is still answered, log the incident, fix it, and relaunch at the next open morning.

**Decision rights.** Before 11:45 the founder decides. After 11:45 the builder rolls back on any criterion above without asking and informs the founder. **Only the founder relaunches.**

**Fallback dates.** If Friday is blocked or the gate fails: **Tue Nov 24, 10:00–11:45** (Monday morning is protected), then **Tue Dec 1**, same window. On a fallback date the founder does only the 10:00 go call and the 11:30 decision (0.5 hour). The builder runs `07` L3 and L9, and the founder's 30-minute GA4 browsing check (`09`) moves to the next working block (Wed Nov 25 or Wed Dec 2). Nov 24 puts Week 9 at 10.0 hours against its 7.2 (+2.8), a cap exception the founder approves at that week's Wed Nov 25 review and logs. Dec 1 puts W10 at 4.0 of 4.0, using W10's slack (`#v1-1`); anything beyond that is approved at the Fri Dec 4 review and logged. Until Feb 1 a late v1 costs crawl lead time, not deals (`techeo.web.strategy` #releases). A copy or integration blocker triggers the floor instead of waiting.

## Post-launch checks {#post-launch}

| When | Checks | Owner | Founder time |
|---|---|---|---|
| **Day 1**, Mon Nov 23 | Monitors and synthetic green; `/`, `/audit`, `/teardown` indexed or queued with no crawl errors (`07`); CSP digest; 404 log; GA4 carries `season_state = WAITLIST`; every real lead has a task and an in-SLA dial | Builder | 0 (read Wed Nov 25) |
| **Week 1**, Nov 23–27 | Daily Search Console look; production `lychee`; DMARC reports; five seeds; the weekly SLA report; vendor invoice matches calls | Builder, enforcer | 0 |
| **Day 30**, Mon Dec 21 | `07` S4: all six indexable URLs indexed in Google and Bing, canonicals match, no `pages.dev` or `www` in `site:` results. HSTS to one year (`06`). Lighthouse green 30 nights. `/accessibility` known issues updated. December prompt test and self-shop logged. G4 closed. | Builder; founder reads Mon Dec 21 | 0.5 |
| **Day 60**, Tue Jan 19 | DMARC `p=reject` clean since Jan 4. SLA streak at two of four weeks. Article 1 indexed, article 2 (Jan 14) queued, article 3 due Thu Jan 21. Rehearsal booked; Cal.com and the OPEN script ready for Feb 1; reservation list clean for `08` F2. | Builder; founder reads | In Phase 2 |
| **Day 90**, Thu Feb 18 | `07`'s 90-day review. `techeo.web.strategy` O1 (≥3 qualified reservations by Jan 31), S2, S3, S4. First OPEN numbers: paid audits, O4 at zero, the SLA version. Founder hours against this plan (G1, G2). Budget actuals. The v1 change list. | Founder, builder | 1.0 |

## Phase 2 hours and v1.1 {#v1-1}

Phase 2 (`techeo.plan90`): Nov 30, 2026 – Jan 29, 2027, nine weeks at **4 hours a week, 36 in all.** This is `12` #phase-2-schedule's combined table, with its content hours, dates, kits, and protected days, and two changes:

- **Self-shop scoring moves to W11 and W15,** because `08` #mystery-shop scores by the 10th. The calls run in the week ending on the month's first Saturday (Nov 30 – Dec 5, then Dec 28 – Jan 2), placed by the enforcer or the peer. W11's 0.5 hour of open items moves to W12 to make room.
- **The builder runs the December and January reduced prompt tests** under `07` #run-protocol (open question 5), which frees 2.0 founder hours and gives the floor its reserve.

The other `techeo.plan90` estimates are assumptions. Every article counts under `techeo.plan90`'s "three published pieces," and each kit includes the no-ask send to the ten sources.

| Week | Dates | `techeo.plan90` | Content (`12`) | Website | Total |
|---|---|---|---|---|---|
| W10 | Nov 30 – Dec 4 | Review 0.5 · `techeo.legal` open items 0.5 | A1: data check, draft 2.0 | — (reduced prompt test, Dec 1–3, run by the builder) | 3.0 |
| W11 | Dec 7–11 | Review 0.5 · trademark filing review 1.0 | A1: finish the draft, cold edit 2.0 | Self-shop scoring, December shop, by Thu Dec 10, 0.5 | 4.0 |
| W12 | Dec 14–18 | Review 0.5 · open items 2.0 | A1: fact-check, approval, **publish Tue Dec 15**, kit 1.25 | Homets link (`07`) 0.25 | 4.0 |
| W13 | Dec 21–23 (Dec 24–25 protected) | Review 0.5 (Wed) | A2: data check, ledger rows, draft 2.0 | Day-30 read, Mon Dec 21, 0.5 | 3.0 |
| W14 | Dec 28–30 (Dec 31 – Jan 1 protected) | Review 0.5 (Wed) · bookkeeping setup 1.0 | A2: finish, cold edit; A3: draft, first part 2.0 | — | 3.5 |
| W15 | Jan 4–8 | Review 0.5 · December close 1.5 | — | Self-shop scoring, January shop, by Fri Jan 8, 0.5 · site scorecard in the close (`09`) 1.0 · (reduced prompt test, Jan 5–7, run by the builder) | 3.5 |
| W16 | Jan 11–15 | Review 0.5 · open items 0.5 | A2: fact-check, approval, **publish Thu Jan 14**, kit; A3: finish the draft 2.0 | — | 3.0 |
| W17 | Jan 18–22 | Review 0.5 · open items 1.5 · close routine 0.5 | A3: cold edit, platform facts, approval, **publish Thu Jan 21** 1.25 | — | 3.75 |
| W18 | Jan 25–29 | Review 0.5 · open items 1.0 | A3 kit 0.5 | Flip PR approval and rehearsal 0.5 · `08` F2 day-before tasks, Fri Jan 29, 1.0 · `07`'s v1 exit check, Fri Jan 29, 0.5 | 4.0 |
| | | **14.0** | **13.0** | **4.75** | **31.75 of 36** |

**Slack is 4.25 hours, 4.0 of them before Fri Jan 15** (W10 1.0, W13 1.0, W14 0.5, W15 0.5, W16 1.0). The floor needs about 3.0 at most (`#hours`, Option B), so it fits by `techeo.web.strategy`'s Jan 15 deadline without moving A3: C7 in W10 and W13 if it isn't done already, and the read-aloud and phone check in W15 and W16, once the builder has the pages up after the holiday freeze. If the time log shows less slack than that, `12`'s rule applies and A3 moves to the December 2027 quiet period.

**Protected days.** Following `12`, Dec 24–25 and Dec 31 – Jan 1 carry no Techeo work, and the W13 and W14 reviews move to Wednesday. Content work on Dec 21–23 and Dec 28–30 is afternoons only (`12` #calendar rule 1), and a hard-freeze or coverage-gap day drops it (working rule 1).

**What Phase 2's list leaves out.** Self-shop scoring, the day-30 read, the scorecard, the Homets link, the prompt tests, and the Feb 1 flip tasks are site upkeep that D11 and D13 require, but `techeo.plan90` #phase-2 ends "Nothing else," and `techeo.guardrails` calls December "Admin and legal only." `#dependencies` asks both to name the upkeep, as `07` open question 11 and `techeo.web.strategy` open question 6 also ask.

**v1.1 release plan.**

| Item | Detail |
|---|---|
| Entry | v1 or the floor is live, and the Week 1 baseline exists; otherwise only article 3 ships (`techeo.web.strategy` #releases) |
| Builder | `/insights` template, article template, Article and BreadcrumbList JSON-LD, the `llms.txt` Insights section, the 404 page's added link, sitemap entries. **12 hours, ready by Fri Dec 4.** Plus the December and January reduced prompt tests under `07` #run-protocol, 1 hour each. |
| Publishing | Article 1 on **Tue Dec 15** (`/insights` ships with it and is never empty, `04`); article 2 on **Thu Jan 14**; article 3 on **Thu Jan 21** (`12` #phase-2-schedule). The builder runs URL Inspection and IndexNow on each, on publish day. |
| Holiday freeze | Dec 19 – Jan 3: no deploys except security fixes and scheduled publishes |
| Exit | `01`'s exit, restated: Fri Jan 29, 2027 — all three articles live and indexed, and each sent once, with no ask, to the ten referral sources and the peer-network contact. `07`'s Jan 29 check records the result; a miss is logged with a date. (The 14-day indexing check in `12` is a diagnostic, not the exit.) |
| Cost | $840 at plan, prompt tests included (`#budget`) |

## Runbook: Feb 1, 2027 flip to OPEN {#flip-open}

Mon Feb 1 morning is a protected block, so **the flip is automatic** (`06` #season-state), and the founder verifies from 13:00.

| When | Step | Owner | Done when |
|---|---|---|---|
| Mon Jan 4 | SLA publish window opens (`08` #sla); DMARC `p=reject` (`06`) | Builder, enforcer | Confirmed |
| Mon Jan 18 | Cal.com discovery and `discovery-queue` (35-day horizon) set to start Feb 1; payment method on the Techeo Supabase org confirmed | Builder | Previewed |
| Mon Jan 25 | `season.yml` opens the Feb 1 PR; `08`'s E03 goes to reservations | Automatic | PR open; E03 sent |
| By Thu Jan 28 | **Live rehearsal** per `06` #stripe ($1, refunded, key rotated); OPEN script to the vendor, effective Feb 1, 08:00 | Builder, vendor | `paid` then `refunded` row; vendor confirms |
| Thu Jan 28, 13:00 | Go/no-go: founder approves the PR (plus the enforcer under `capacity`) after checking `#register` for open rows that block Feb 1 | Founder | `season-guard` passes; no open row blocks Feb 1 |
| Fri Jan 29, 10:30–12:00 | After the 10:00 review: `08` F2 day-before tasks (exclusion and market re-checks, capacity, the call list); `07`'s v1 exit check | Founder | Call list with the vendor |
| Sun Jan 31 | January SLA streak closes; if earned, version B waits as a separate PR | Builder | Logged |
| **Mon Feb 1, the first scheduled run after local midnight** (`06` runs hourly, 04:05–10:05 UTC; `#qa` 13.5) | Scheduled run merges and deploys; Cal.com opens | Automatic | Deploy green |
| Mon Feb 1, 07:30 | Header CTA "Book an Engine Audit"; no banner; `/audit#book` shows `form_audit_qualify`; synthetic qualify → 303 to `checkout.stripe.com`, then expired; Offer InStock and `llms.txt` OPEN sentence (`07`); discovery slots only in "Techeo calls"; Checkout and Cal.com by keyboard and VoiceOver (`10`). Upgrade the Techeo Supabase org to Pro (upgrades take effect immediately; verify whether any API can schedule one). | Builder | All pass; Pro active |
| Mon Feb 1, 08:00 | E04 sent; the vendor calls reservations in `reserved_at` order (`08` F2) | Vendor | Calls logged |
| Mon Feb 1, 13:00 | Founder checks on a phone; merges version B if earned (O10); URL Inspection on `/` and `/audit` | Founder | Done |
| Mon Feb 1, 14:00 | GA4 events carry `season_state = OPEN` (`09`) | Builder | Pass |
| Tue Feb 2, end of day | O7: every reservation contacted | Vendor | 100%, or misses logged |

**Rollback criteria:** qualify misroutes; Checkout fails; a page mixes states; Cal.com offers a protected slot; the price guard trips. **Procedure:** restore the previous deployment in Pages (a WAITLIST build, with its Functions), tell the vendor to take reservations only, fix forward the same business day, and redeploy `main`. Never flip to `capacity` to cover a defect; that state promises a date. **Cost:** Supabase Pro at $25 a month. **Founder hours:** about 2.5, Jan 28 – Feb 1.

## Runbook: May 1, 2027 flip to WAITLIST {#flip-waitlist}

Sat May 1 flips automatically to WAITLIST / `season` with the next opening on Sep 7 (`06`), with no approval needed.

| When | Step | Owner |
|---|---|---|
| **Fri Apr 9** | Discovery booking horizon capped at Apr 30 (`08` F7), so no discovery call lands in May | Builder |
| Fri Apr 16, 10:30 | Late-window notice live on `/audit`; founder confirms the readout-date wording (`techeo.web.strategy` open question 1) | Founder, 0.25 |
| Thu Apr 29, 13:00 | Go/no-go: `#register` checked for open rows that block May 1; WAITLIST script with "September 7" to the vendor, effective May 1, 00:00; late-April audits checked for readout dates | Founder, 0.25 |
| Sat May 1, the first scheduled run after local midnight (`06`) | Commit and deploy; open Checkout Sessions expired; Cal.com discovery closed | Automatic |
| Sat May 1, by 12:00 | Banner reads "September 7"; CTA "Reserve an audit slot"; qualify returns 409; no discovery slots; synthetic passes; markup and `llms.txt` match `07` | Builder, 1 h |
| Mon May 3, 13:00 | Founder check on a phone | Founder, 0.25 |

**Rollback:** the builder runs the workflow by hand; if Actions is down, `flip-manual.md`, and the enforcer tells the vendor to stop booking (`06`). **Founder hours:** about 0.75.

## v2 plan {#v2}

**Prerequisite owned outside the website:** the Homets engine rhythm log that three v2 engine pages cite needs three months of entries by Aug 16, 2027. It starts by Mon Mar 1, 2027, kept by the founder's designee at Homets as Homets time, and is checked at the Friday reviews (`#register` CR-25).

**Live Tue Sep 7, 2027, with the flip to OPEN, never automatic (`06`).** `techeo.guardrails` allows delivery only in May and maintenance only in June–August, so **the build and drafting are delegated; the founder does interviews and approvals only**, at most 2 hours in any week and about 16 in all.

**Triggers:** `04` #triggers per page and `techeo.web.strategy` #releases, including the **Mon Aug 16 gate check**: if three clients are signed (including any still awaiting onboarding) and no Homets operations owner is in seat, v2 launches in WAITLIST / `capacity` with the proof pages live. The date holds; a page whose trigger hasn't fired by Aug 16 ships after Sep 7.

| Month | Founder (interviews and approvals) | Delegated work (`04` #build-order) | Founder hours |
|---|---|---|---|
| May 3–28 | One recorded 90-minute engines interview; approve the five engine pages | Builder: T8/T9 templates, `SeasonCta`, v2 chrome (May 3–21). Writer: drafts from the interview, `04`'s copy, and v1. | 3.5 |
| June | Approve `/pricing` (after counsel), `/markets`, `/partners`; `/about` interview (45 min) and approval; Homets case-study interview (1 h), claims sign-off, approval | Builder: pages; writer: drafts; counsel: `/pricing`, approval form with `10` | 4.75 |
| July | Partner 1's case-study interview after the late-June day-90 review; claims sign-off; approve the index and `/calculator` copy | Builder: `/calculator` (12 h), index | 2.5 |
| August | Partner 2's interview after the late-July review; claims sign-off; approve email and script link updates (`02` #anchor-to-page); **gate check Mon Aug 16, 13:00** | Builder: link updates, QA, indexing (Aug 16 – Sep 3). Independent accessibility audit, report in by Aug 16 (`10` open question 14) | 2.75 |
| Aug 30 – Sep 3 | Go/no-go **Thu Sep 2, 13:00**; `08` F2 day-before tasks **Fri Sep 3, 10:30–11:30** (exclusion and market re-checks, capacity, the call list). Sep 3 afternoon and Labor Day weekend are protected. | Builder: final QA; vendor: OPEN script and call list | 1.5 |
| Tue Sep 7 | Launch and flip, **13:00–15:00**, treating that morning as the post-holiday week open. E04 and the receptionist's reservation calls start at **15:30** once the OPEN checks pass, or **Wed Sep 8 at 08:00**; O7's two-business-day window is measured from then, to **Thu Sep 9** | Builder: `#v2-launch`, two deploys with separate rollbacks; vendor: calls in `reserved_at` order | 1.0 |
| | | | **16.0** |

`08` F2 assumes the site flips before 08:00 on an opening day and E04 goes at 08:00. On Sep 7 the flip comes with v2 at 13:00, so E04 and the calls wait until the site shows OPEN; otherwise they would announce an opening the site doesn't show and `discovery-queue` wouldn't be open (`#dependencies`).

| Cost item | Hours | Plan | Range |
|---|---|---|---|
| Builder (`04`'s 55 build hours plus 8 for QA and launch) | 63 | $3,780 | $2,835–$6,300 |
| Contract writer or editor (drafts from interviews and `04`'s copy; $50–$100 an hour, an assumption) | 30 | $2,250 | $1,500–$3,000 |
| Designer (engines diagram, case-study images; `05`) | 5 | $300 | $225–$500 |
| Counsel (`/pricing`, the case-study approval form, the first case study's disclosures and the all-clients line, `/partners`, `/markets`; `10` #counsel-package (c)) | 2–4 | $1,000 | $600–$2,000 |
| Case-study photography (partner-supplied, or a half-day) | — | $600 | $0–$1,200 |
| Independent accessibility audit (`10` open question 14), before Aug 16 | — | $2,250 | $1,500–$3,000 |
| Builder hypercare, Sep 7 – Oct 7 (`#v2-launch`) | 8 | $480 | $360–$800 |
| **Total** | | **$10,660** | **$7,020–$16,800** |

v2 is funded from revenue. Its QA uses `#qa` plus `04`'s acceptance lists, and its launch follows `#v2-launch`.

### Founder hours against the caps, Feb–Dec 2027 {#caps-2027}

`04` #build-order asks this document to show v2 under the 26-hour cap, and `12` asks it to count the calendar's 2027 hours. October to December add the fall window, the Dec 1 flip (`#flip-dec`), and v3 preparation. Monthly founder hours, with the per-week average against each month's cap (`techeo.guardrails` #seasonality and #time-budget). **Delivery and selling are assumptions** from `techeo.delivery` #capacity and `techeo.plan90` #phase-3: a teardown at 1 hour; a discovery call at 0.75; a paid audit at 8 (one in March, one in April, one in October, two in November by the Nov 16 cutoff, which is `techeo.web.strategy`'s fall target of three); a Booking Sprint at 16 hours a month in months 1–3 and 9 after (partner 1 from March, partner 2 from April, partner 3 from September); 0.5 a week for the review and 1.5 for each close. Replace them with the time log.

**How the columns are built.** Site upkeep is 6.0 hours in an ordinary month (`#maintenance`, with the prompt test at 2 hours and the quarterly and annual items spread evenly), plus 1.7 in a quarterly month (Feb, May, Aug, Nov) for the 3.7-hour prompt test (`07` #assistants), plus each flip's founder tasks. Per week is the month's hours over its working weeks (weekdays less `08`'s holidays, divided by 5: Feb 4.0, Mar 4.6, Apr 4.4, May 4.0, Jun 4.4, Jul 4.2, Aug 4.4, Sep 4.2, Oct 4.2, Nov 4.0, Dec 4.2), to one decimal. October to December show the **OPEN branch** (the Aug 16 gate check passed), the heavier case; the capacity branch is below the table.

| Month | Cap (h/wk) | Delivery and selling | Site upkeep (`#maintenance`) | `12` calendar | v2 and v3 (founder) | Month | Per week | Against cap |
|---|---|---|---|---|---|---|---|---|
| Feb | 14 | 31.5 (5 teardowns a week, 8 discovery calls, partner 1 signed) | 8.2 (the Feb 1 checks; the quarterly prompt test) | 1.5 | — | 41.2 | 10.3 | −3.7 |
| Mar | 18 | 54.0 (partner 1 month 1, one audit, 4 teardowns a week, partner 2 signed) | 6.0 | 0 (A4 not scheduled) | — | 60.0 | 13.0 | −5.0 |
| Apr | 18 | 69.5 (partners 1 and 2, one audit, selling, partner 3 signed) | 6.5 (May 1 prep) | 0.75 | — | 76.75 | 17.4 | −0.6 |
| May | 26; deliver only | 35.5 | 7.95 (the May 3 check; the quarterly prompt test) | 0.25 | 3.5 | 47.2 | 11.8 | −14.2 |
| Jun | 26; maintenance only | 28.5 | 6.0 | In v2 (drafting goes to the writer) | 4.75 | 39.25 | 8.9 | −17.1 |
| Jul | 26; maintenance only | 21.5 | 6.0 | In v2 | 2.5 | 30.0 | 7.1 | −18.9 |
| Aug | 26; maintenance only | 21.5 | 7.7 (the quarterly prompt test) | In v2 | 2.75 | 31.95 | 7.3 | −18.7 |
| Sep | 26 | 60.5 (partner 3 month 1; selling from Sep 7) | 6.0 | 2.0 | 2.5 | 71.0 | 16.9 | −9.1 |
| Oct | 26 (the hard cap until the gate clears) | 68.5 (partner 3 month 2; 4 teardowns a week, 8 discovery calls, one audit) | 6.5 (v2 day-30 read) | 0.5 | — | 75.5 | 18.0 | −8.0 |
| Nov | 26 | 70.0 (partner 3 month 3; two audits by Nov 16; 3 teardowns a week, 6 discovery calls) | 8.2 (the quarterly prompt test; Dec 1 prep) | 8.0 (glossary wave 1 drafted, only if the gate has cleared) | In `12` | 86.2 | 21.6 | −4.4 |
| Dec | 26; quiet from Dec 1 (below) | 30.5 (partners 1–3 at 9 each; no selling; no readouts after Nov 30) | 7.25 (the Dec 1 check and `08` F2 step 7's sort) | 3.5 (glossary wave 1, conditional; partner 3's interview and video) | 0.5 (v3: T11 and `/glossary` approval) | 41.75 | 9.9 | −16.1 |

**Read it plainly.** The hours fit every month against the 26-hour cap on these assumptions. **April is the tight one,** 0.6 hour a week under 18, so a third April audit or a slow partner-2 onboarding breaks it; the answer then is the `AUDIT_CAPACITY` flip, not more hours. June–August has room in hours but not in kind: `techeo.guardrails` allows maintenance only, which is why the v2 build and drafting are delegated. **November is the heaviest fall month,** 21.6 a week with glossary drafting, and still fits.

**The capacity branch.** If the Aug 16 gate check fails, the fall's selling and the glossary drop out: Sep about 11.4 a week (its 23.0 selling hours gone), Oct 10.6, Nov 11.4, Dec 9.3. No v3 item publishes (`12` #calendar).

**December is the open problem.** `techeo.guardrails` #seasonality stops at September 2027. It set December 2026 at "admin and legal only, 4 hrs/wk" and hasn't set December 2027; Phase 5's "30+" applies only once the gate has cleared. With three clients in delivery, December needs about 30 hours of delivery alone (7.3 a week), so a repeat of the 2026 allowance can't hold even with no selling and no site work. This table uses the 26-hour hard cap; `#register` CR-19 asks `techeo.guardrails` to set December 2027 and say whether delivery to existing clients sits outside it. `#flip-dec` keeps readouts out of December if the Nov 16 cutoff is adopted.

**A count to settle.** `12` counts 8 founder hours in November for drafting glossary wave 1; `#v3` has a writer drafting it and the founder at 5.5 hours of approvals. The table uses `12`'s figure until `#register` CR-18 closes.

**What interview-and-approve replaces.** The writer takes `04`'s drafts-all column (39.5 founder hours) and `12`'s June–August drafting (S7: the Homets case study and partners 1 and 2). `12`'s interviews, video sessions, claims sign-offs, and approvals are the v2 column, counted once. `04`'s default column is 18.5, because Blake also writes `/about` `#why` and `#how-we-run` and each case study's `#what-moved`; if open question 10 says so, add those 3.5 hours, mostly in June–August.

## Runbook: Sep 7, 2027, v2 launch and flip {#v2-launch}

Tue Sep 7 is the day after Labor Day. Its morning is treated as the post-holiday week open, so **the founder works 13:00–15:00, about 1.0 hour of it**, and the builder runs the rest. `06` #season-state makes this flip manual and names this runbook. Two things change on one afternoon, content (v2) and state (OPEN), so they ship as **two deploys**: v2 first, still in WAITLIST, then the season flip. Each has its own rollback, so a bad page doesn't cost the opening, and a bad flip doesn't cost v2.

**Preconditions, confirmed at the Thu Sep 2, 13:00 go/no-go (`#v2`):**

*Both branches:*

- The `release/v2` pull request approved, its preview green in all three state variants, with CI's manifest, sitemap, redirect, raw-HTML, JSON-LD, and token checks passing.
- Every v2 URL passes `#qa` sections 1–3, 7–10, 14, and 15, applied to the v2 URLs, plus `04`'s acceptance lists. Nightly Lighthouse passes 7 nights in a row on the v2 release-candidate preview (`06` #performance).
- The independent accessibility audit's findings fixed, or dated as known issues on `/accessibility` (`10` open question 14).
- Each case study has the client's written approval, its material-connection disclosure beside it, and a `ready` claims-ledger row for every number (`techeo.web.strategy` v2 exit; `10`). One that lacks any of the three ships after Sep 7; the date holds.
- Counsel's v2 review filed: `/pricing`, the approval form, the case-study disclosures and the all-clients line, `/partners`, and `/markets` (`10` #counsel-package).
- `market_checks` and `partner_referrals` migrated to production by Thu Sep 2. The migrations only add tables, so v1 runs on them. `calc-v2`, `market-v1`, and `referral-v1` are in `app.consent_versions` (`10` #consent-texts).
- The anchor-to-page change set (deploy 1, item 4) reviewed by the founder, including `08`'s email templates and the receptionist's `script-2.0`.
- No open `#register` row blocks v2.
- No heat wave, hard freeze, or coverage gap forecast at Homets for Tue Sep 7.

*Branch O, OPEN (the Aug 16 gate check passed: fewer than three clients signed, or a Homets operations owner in seat):*

- E03 went out Tue Aug 31 with `{contact_due_date}` "Thursday, September 9, 2027" (`08` F1, F2).
- `08` F2's day-before tasks are done (Fri Sep 3, 10:30–11:30), and the call list is with the vendor.
- The vendor holds `script-2.0` in its OPEN and WAITLIST forms and switches to OPEN on the builder's "OPEN live" email, not at 08:00, within the hour `#qa` 13.6 tests.
- Cal.com discovery and `discovery-queue` are ready to open with the flip, and the "Techeo calls" schedule is current.
- A $1 live rehearsal on the v2 preview has passed by Thu Sep 2 (`06` #stripe), refunded, with the key rotated.
- The founder has approved the season-bot App's flip PR at the go/no-go, and the enforcer has too if a capacity hold was ever set (`06` #season-state).

*Branch C, WAITLIST·capacity (the gate check failed: three clients signed, including any still awaiting onboarding, and no operations owner in seat):*

- The enforcer or the founder ran **Season flip** to WAITLIST·capacity on the live v1 site by Tue Aug 17, with `{capacity date}` from `techeo.web.strategy` open question 2 (Feb 1, 2028 at the earliest), so no page promises Sep 7 after the gate has failed.
- E02 has gone to every reservation held for Sep 7, by Wed Aug 18, with the capacity date; the Aug 31 E03 is suppressed (`08` F1).
- The vendor has the WAITLIST·capacity script with `{capacity date}`, confirmed in writing by Wed Aug 18, and discovery stays closed.
- `08` F2 step 7 treats every Sep 7 reservation as a capacity carry, which doesn't count toward the carry limit (`08` F7).
- v2 ships in the capacity variant. The flip (13:45), the OPEN checks, E04, and the reservation calls don't run. Branch C adds about 0.5 founder hour on Aug 17–18 for E02's wording and the script.

**Deploy 1, the v2 change set, in one merge:**

1. Every v2 route released in the manifest (`02` #scope) and built in all three state variants.
2. The `/about` and `/pricing` 302s removed from `_redirects` **in the same deploy** that ships the pages (`02` #redirects-by-release). CI's check of `_redirects` against the manifest passes.
3. Header and footer switched to v2 (`02` #header-v2, #footer).
4. Anchors retargeted per `02` #anchor-to-page: site links; `08`'s email templates; the receptionist script (`script-2.0`); `techeo.gtm`'s outreach templates; section 9 of the audit PDF template (`techeo.audit` #deliverable); `/llms.txt`'s v2 sections; JSON-LD, including the retainer Offers in `07` #sd-retainers and the Engine Audit Offer's links. Done when `02`'s grep finds no `/#engines`, `/#how-it-works`, or `/#operator` link meant for a new page, and every old anchor still resolves on `/`.
5. The sitemap grows to 24 URLs, plus any new articles (`02` #sitemap).
6. `/teardown`'s vendor note replaced by the `/partners` line (`04` #build-order row 8).
7. Changelog entry v2.0.0 drafted (`#changelog`).

| Time | Step | Owner | Verify | If it fails |
|---|---|---|---|---|
| 07:30 | Overnight monitors, the synthetic run, and the release candidate's nightly Lighthouse all green; restore points (zone export, Supabase dump); record the live deployment as **R0** (v1) | Builder | Log green; R0 recorded | Fix, or report a hold at 13:00 |
| 08:00 | Email the vendor: "v2 goes live this afternoon. Stay on your current script until our 'OPEN live' email." (Branch C: "Capacity script unchanged.") | Builder | Confirmed by 09:00 | Hold |
| 12:30 | Final pass on the `release/v2` preview through the Access service token: headers, 404, redirects, `/api/health` | Builder | Matches `#qa` 14–15 | Hold |
| 13:00 | Go call; the founder reads the log and `#register` | Founder, builder | "Go" recorded | Hold; fallback below |
| 13:05 | **Deploy 1: merge `release/v2`.** The state doesn't change (WAITLIST·season in Branch O, WAITLIST·capacity in Branch C). Record the deployment as **R1** | Builder | `/api/health` shows the v2 SHA | Restore R0 |
| 13:10 | v2 checks: `/sitemap-0.xml` lists 24 URLs (plus articles); each v2 URL returns 200 in raw HTML with its own canonical and no `noindex`; `/about` and `/pricing` return 200, not 302; header and footer are v2; old anchors resolve on `/`; `lychee` on production; the disclosure on every case study and in every footer; `/pricing` matches D6; Better Stack monitors added for the new URLs | Builder | All pass | Page-level pull; restore R0 only for a site-wide failure |
| 13:25 | The synthetic run, extended to `form_market_check` and `form_partner_referral` with JavaScript on and off; `/calculator` against `08`'s test cases, with its formula in the raw HTML | Builder | Both forms pass downstream; calculator cases pass | Page-level pull of the failing page |
| 13:40 | Founder on a phone over cellular: `/`, `/pricing`, one case study, `/about`. First screen, disclosure, prices | Founder | Approved | Page-level pull |
| 13:45 | **Branch O. Deploy 2: the flip.** The builder runs **Season flip** to OPEN on the PR approved at the go/no-go; Cal.com discovery and `discovery-queue` open. Record the deployment as **R2** | Builder | Deploy green | Restore R1 |
| 13:55 | **Branch O. OPEN checks** (`#flip-open`'s Feb 1, 07:30 row, on v2): header CTA "Book an Engine Audit"; no banner; `/audit#book` shows `form_audit_qualify`; synthetic qualify → 303 to `checkout.stripe.com`, then expired; `/pricing` CTAs in OPEN; Offer InStock and the `llms.txt` OPEN sentence (`07`); discovery slots only in "Techeo calls"; Checkout and Cal.com by keyboard and VoiceOver (`10`) | Builder | All pass by 14:25 | State rollback |
| 13:55 | **Branch C. Capacity checks:** the banner shows `{capacity date}` and never a cause; qualify returns 409; no discovery slots; the Offer's `availabilityStarts` is the capacity date; the `llms.txt` WAITLIST sentence (`07`) | Builder | All pass | Page-level pull of any page that shows OPEN; restore R0 if it's site-wide |
| 14:05 | Search Console: resubmit the sitemap; URL Inspection and Request indexing on `/`, `/pricing`, `/engines`, `/case-studies`, and `/about` (the daily quota is small); Bing sitemap and URL Submission for the 14 new URLs; IndexNow for every new and changed URL | Builder | Sitemap "Success"; JSON-LD in the crawled HTML | Fix forward |
| 14:15 | `07` L3 on v2 (an assistant with live retrieval asked for the Booking Sprint price on `/pricing`), and L9 (LinkedIn Post Inspector on `/pricing` and one case study) | Founder | "$3,500 a month"; previews correct | Fix forward |
| 14:30 | **Decision point:** launched, or rolled back. Branch O: "OPEN live" email to the vendor and the enforcer | Founder | Email sent; the vendor confirms OPEN by 15:30 | Rollback |
| 14:45 | GA4 Realtime: events carry `season_state` and the v2 page types; the internal filter excludes the founder (`09`) | Builder | Pass | Fix forward |
| 15:00 | **Founder stops.** | — | — | — |
| 15:30 | **Branch O. E04** to the call list and its email-only variant, once every 13:55 check has passed and the vendor has confirmed OPEN. The vendor calls in `reserved_at` order inside the lead-local guard (`08` F2 step 3). Otherwise both start Wed Sep 8 at 08:00; O7 is measured to Thu Sep 9 either way | Builder, vendor | E04 sent; calls logged | Hold E04 to Sep 8 |
| 15:30–17:30 | Watch alerts; second synthetic run at 16:00; changelog v2.0.0 and `SEASON_LOG.md` committed; end-of-day report | Builder | Report by 17:30, read by the founder Wed Sep 8, 13:00 | Pre-authorized rollback |

**Rollback, by layer.** Content and state roll back separately. Never restore R0 to fix a state problem, and never flip to fix a page.

| Layer | When | How | After 15:00 |
|---|---|---|---|
| **Page-level pull** | One v2 page is wrong: a number without a `ready` ledger row, a missing disclosure, a client withdrawing approval, a broken v2 form or `/calculator`, or a 5xx on that page only | Take the page out of the manifest's current release (`02` #scope), which drops it from the build, the sitemap, the navigation, and `llms.txt`. If it's `/about` or `/pricing`, put its v1 302 back (`02` #redirects-by-release). Redeploy through the fast lane (`06` #ci). A case study comes down whole; it is never edited to pass (`12`'s "remove, never alter" clause) | The builder, without asking |
| **State rollback** | The flip is wrong: qualify misroutes, Checkout fails, a page mixes states, Cal.com offers a protected slot, or the price guard trips | Restore R1 (v2 in WAITLIST), close Cal.com discovery, tell the vendor to take reservations only, and hold E04. Fix forward the same business day and re-flip. If only payments fail, use `08` F10's payment fallback instead. Never flip to `capacity` to cover a defect: that state promises a date | The builder may restore R1; only the founder re-flips |
| **Full revert** | A site-wide failure: 5xx across templates, the CSP blocking forms, a brief token visible, a legal page missing, the disclosure missing from the homepage or a footer, or the header or footer broken | Restore R0 (v1). In Branch O, flip v1 to OPEN (its OPEN build has run since Feb 1) so the opening holds, then relaunch v2 at the next open block. DNS doesn't change. v2's tables stay; v1 ignores them | The builder may restore R0; only the founder flips v1 to OPEN or relaunches v2 |

**Decision rights.** Before 15:00 the founder decides. After 15:00 the builder acts on the criteria above without asking and informs the founder. **Only the founder approves a flip to OPEN or a relaunch;** the builder only executes an approved one.

**Fallback.** If v2 as a whole fails the Thu Sep 2 go/no-go, Branch O still opens on Sep 7: deploy 2 alone, on v1, at 13:45, with the OPEN checks and E04 at 15:30 as above. v2 then ships at the next open block, Wed Sep 8 or Thu Sep 9, 13:00–15:00, as deploy 1 alone. If Tuesday itself is blocked (a heat wave or a coverage gap), both deploys move to Wed Sep 8, 13:00–15:00, with E04 at 15:30 that day. O7 then runs to Fri Sep 10, and the vendor calls first everyone E03 promised a call by Thu Sep 9.

**Hypercare.** The builder, 8 hours, Sep 7 – Oct 7 (`#v2`'s cost table).

| When | Checks | Owner | Founder time |
|---|---|---|---|
| Day 1, Wed Sep 8 | Monitors and synthetic green on every form, the v2 forms included; the 14 new URLs crawled or queued with no errors; CSP digest; the 404 log for old anchors and v1 redirect paths; GA4 `season_state`; O7 progress; every real lead with a task and an in-SLA dial | Builder | Read at 13:00, in site upkeep |
| Week 1, Sep 8–14 | Daily Search Console look; production `lychee`; `/about` and `/pricing` reported as pages, not redirects; the vendor on `script-2.0`; O7 closed by Thu Sep 9 | Builder, vendor | 0 |
| Day 30, Thu Oct 7 | All 24 URLs indexed in Google and Bing with matching canonicals; no v1 anchor link left in emails or the script; Lighthouse green 30 nights; `/accessibility` updated; September's prompt test logged; hypercare closed | Builder; founder reads | 0.5, in October's site upkeep (`#caps-2027`) |

## Runbook: Dec 1, 2027 flip to WAITLIST {#flip-dec}

Wed Dec 1 flips automatically to WAITLIST / `season`, with the next opening on Tue Feb 1, 2028 (`06` #season-state), with no approval needed. Under a capacity hold the scheduled flip keeps the reason `capacity` and its date (`06`), and the checkout steps below don't apply, because checkout never opened.

**The Nov 16 checkout cutoff.** `techeo.web.strategy` open question 1 is still open. This runbook builds to its default and sets the date the founder must answer by (`#register` CR-13):

- **Default, built here unless the founder rejects it by Mon Aug 16, 2027:** audit checkout closes at 23:59 [TZ] on **Tue Nov 16, 2027**. From Wed Nov 17, `/audit#book` shows `form_audit_reserve` for the Feb 1, 2028 opening and `form_audit_qualify` returns 409, while the rest of the site stays OPEN: discovery calls continue to Nov 30 (`08` F7), and teardown requests continue. When access completes the next business day, the seven business days run Nov 17 – Mon Nov 29 (Nov 25–26 are holidays), so the readout falls in November; a slow access list can still push one into early December, which the rule below covers. It needs a brief D2 revision (checkout can close before the flip), a `06` setting read by the qualify endpoint, the `/audit` build, and the Offer (a `CHECKOUT_CLOSES` date, set like a flip), `03`'s copy for the closed checkout, `07`'s Offer and `llms.txt` audit sentence from Nov 17, and `techeo.offers` #terms.
- **If the founder rejects it:** checkout runs to Tue Nov 30. Audits bought Nov 17–30 read out Dec 1–9, at most three (`AUDIT_CAPACITY`), each under the rule below.

**How December readouts are held,** under either answer, including a report that runs late:

1. A readout for an audit bought before the cutoff is a delivery commitment to a paying buyer, so it is held, never moved to February.
2. Slots are Tuesday–Thursday, 13:00–16:30, from Wed Dec 1 to Fri Dec 10, never in a protected block or on a heat-wave, hard-freeze, or coverage-gap day. The founder offers them in E13 (`08`), matching the date the late-window notice showed before payment (`03`).
3. Each December readout is logged at that week's review as an exception to December's allowance (`#register` CR-19).
4. The credit is D6's until D6 is revised. `techeo.web.strategy` open question 1's signing default needs brief D6 and `techeo.offers` #terms revised first (`#register` CR-13). Until then, the readout states the credit that D6 promises and that `03`'s late-window notice showed before payment: the $1,500 comes off the first month of a retainer signed within 30 days of the readout, and that retainer starts Feb 1, 2028. If the revision is adopted, no retainer is signed Dec 1 – Jan 31, and the readout states that the credit applies to a retainer signed within 30 days of Feb 1, 2028. `03`'s late-window notice and `06` #stripe's credit logic then change together, in one deploy (CR-13), and a buyer who paid before that deploy keeps the terms the notice showed.
5. A readout that can't be held by Fri Dec 10 goes to the first open block after Mon Jan 3, 2028, only if the buyer agrees in writing; otherwise `08` open question 19's late-report terms apply.

| When | Step | Owner |
|---|---|---|
| Sep 2027 review | 2028 season rows committed (`06` open question 13), so the Dec 1 commit carries "next opening February 1, 2028"; the 2028 holiday list drafted (`08`); `#register` rows that block Dec 1 decided | Builder, founder |
| **Tue Nov 9** | Discovery booking horizon capped at Nov 30 (`08` F7; automatic Cal.com change, `06`) | Automatic; builder verifies by 12:00 |
| Tue Nov 16 | Late-window notice live on `/audit` (date-driven rebuild, `06`). At 13:00 the founder confirms the readout-date wording and that checkout closes at 23:59 | Automatic; founder, 0.25 |
| Wed Nov 17, by 12:00 | Checkout closed: `/audit#book` shows `form_audit_reserve` for Feb 1, 2028; synthetic qualify → 409; no open Checkout Session; discovery and teardowns still open; Offer and `llms.txt` per `07` | Builder, 0.5 h |
| Mon Nov 29, 13:00 | Go/no-go: `#register` checked for open rows that block Dec 1; WAITLIST script with "February 1" to the vendor, effective Dec 1, 00:00; late-November audits checked for readout dates, and any December readout slotted by the rule above | Founder, 0.25 |
| Tue Nov 30 | Last OPEN day: discovery calls end; the vendor's call list closes | Vendor |
| Wed Dec 1, the first scheduled run after local midnight (`06`) | Commit and deploy; open Checkout Sessions expired; Cal.com discovery closed | Automatic |
| Wed Dec 1, by 12:00 | Banner reads "February 1"; CTA "Reserve an audit slot"; qualify returns 409; no discovery slots; synthetic passes; the Offer's `availabilityStarts` is 2028-02-01 and `llms.txt` matches `07`; `SEASON_LOG.md` entry | Builder, 1 h |
| Wed Dec 1, 13:00 | Founder check on a phone; `08` F2 step 7's end-of-window sort starts, its emails sent by Fri Dec 3 | Founder, 1.25 |
| Wed Dec 8 | December prompt test, the first Tuesday–Thursday at least 7 days after the flip (`07` #run-protocol); glossary wave 1 is the day before, Tue Dec 7, if its go/no-go passes (`12`) | Founder, 2 h (in `#maintenance`) |

**Rollback:** the builder runs the workflow by hand; if Actions is down, `flip-manual.md`, and the enforcer tells the vendor to stop booking (`06`). If checkout can still be reached on Nov 17, the builder deploys the closed build by hand and expires open sessions. Any purchase made after the cutoff is honored, and its readout is held under the rule above. **Founder hours:** about 1.75 (Nov 16, Nov 29, Dec 1), plus any December readouts.

## v3 plan {#v3}

**Entry:** gate cleared, writing hours available, and 12 weeks of v2 lead data, so **no earlier than Tue Nov 30, 2027** (`techeo.web.strategy` #releases). Each page ships on its own `04` #triggers row. The founder interviews and approves; a project writer engaged per page, as in v2, drafts, at $75 an hour at plan (an assumption, within v2's $50–$100). `techeo.financials` hire #3 waits on its own trigger (four Demand Engine clients), and v3 doesn't depend on it.

| Page | Trigger (`04`) | Founder h | Builder h | Other cost (plan) |
|---|---|---|---|---|
| `/glossary` and T11 | v3 entry; ≥20 entries approved, ≥5 meeting the depth rule | 0.5 + 5 (entry approvals) | 5 | Writer 20 h, $1,500 |
| `/for/hvac` | ≥2 HVAC case studies | 2 | 2 | Writer 5 h, $375 |
| `/resources` plus 3 resources | Articles live; license covers derived material | 3 | 3 | Writer 6 h, $450; `05` PDF design $360; `10` and counsel review $500 |
| `/for/plumbing` | ≥1 plumbing case study and the plumbing SOP set | 2.5 | 1 | Writer 4 h, $300 |
| Insights in the header | 12 articles and `12`'s cadence | 0 | 1 | — |
| **Total** | | **13** | **12 ($720)** | **≈ $3,485** |

That is about $4,205 in all, spread across whichever quarters the triggers fire.

## Ongoing maintenance {#maintenance}

| Cadence | Task | Owner | Founder h | Builder h |
|---|---|---|---|---|
| Weekly | Read the SLA report and lead counts at the Friday review; log site hours | Founder | 0.2 | — |
| Weekly | Grouped Dependabot and security PRs per `06`'s policy (majors never within 30 days of a D1 release date) | Builder | — | 0.25 |
| Weekly | CSP digest, 404 report, `lychee`, alert review | Builder | — | 0.25 |
| Weekly | SLA seeds: 5 a week while earning version B, 3 while B is live (`08` #sla); about 10 minutes each | Enforcer | — | — |
| Monthly | Self mystery-shop: calls in the week ending on the month's first Saturday, placed by the enforcer or peer; scored by the founder by the 10th (`08`) | Founder | 0.5 | — |
| Monthly | AEO prompt test (`07` #assistants): 1 h reduced, 2 h full core, 3.7 h in quarterly months (Feb, May, Aug, Nov: 88 runs with the extended assistants and the variance runs); the builder runs December and January 2026–27 (open question 5) | Founder | 1.0–3.7 | — |
| Monthly | Site scorecard in the monthly close, by the 10th (`09`) | Founder, builder | 1.0 | 0.5 |
| Monthly | GA4 monthly QA (`09` #qa) and a Cloudflare crawler-settings drift check | Builder | — | 0.75 |
| Monthly | Copy fixes: any objection heard three times fixed within two weeks (`techeo.web.strategy`); claims-ledger refreshes | Founder approves, builder ships | 0.5 | 1.0 |
| Quarterly | Re-score techeo.com with the `techeo.audit` rubric; replace assumptions, including this document's hour estimates | Founder | 2.5 | — |
| Quarterly | Restore test (`06`); accessibility re-test and `/accessibility` update (`10`); access review and secret-rotation check; ClickUp CSV export | Builder | — | 4.0 |
| Quarterly | Legal-page review date with `10` | Founder | 0.25 | — |
| Per flip | `#flip-open`, `#flip-waitlist`, the `AUDIT_CAPACITY` flip within 1 business day (`08` F2); Sep 7, 2027 follows `#v2-launch` and Dec 1, 2027 follows `#flip-dec` | Founder, builder | 0.75–2.5 | 1–3 |
| Annually | Renewals; the holiday list each December (`08`); 2028 season rows at the Sep 2027 review (`06` open question 13); HSTS preload review, Nov 2027 | Founder, builder | 1.0 | 2.0 |

**Averages:** founder about **6 hours in an ordinary month and 7.7 in a quarterly one** (Feb, May, Aug, Nov), before flip tasks, or 1.4–1.8 a week, counted in `#caps-2027` against each month's cap; builder about **6 hours a month**, the $360 retainer in `#budget`.

## Changelog and time log {#changelog}

`02` and `07` write to "`11`'s changelog": `CHANGELOG.md` at the root of `techeo-web`, one entry per production deploy that changes copy, markup, `robots.txt`, `llms.txt`, redirects, legal text, or a major dependency. Season flips stay in `SEASON_LOG.md`, cross-referenced.

```
### v1.0.0 — 2026-11-20 10:05 [TZ]
build: <sha> · deployment: <pages id> · approved: Blake (copy), counsel (consent 2026-11-16; legal pages 2026-11-18)
changed: initial public release, WAITLIST/season, next opening 2027-02-01
robots: v1 · llms.txt sha256: <hash> · json-ld: v1 · redirects: +<n> (preflight)
slugs: none · qa: docs/qa/v1.0.md
```

Versions: v1.0.x for fixes, v1.1.x for insights, v2.0.0 on Sep 7, 2027. **The time log** is `techeo.metrics` #1's weekly log with a "Site" line against this document's plan. A week more than 1 hour over plan is raised at that Friday's review, and the next website task is the first thing dropped. The pre-approved exceptions in Weeks 5, 6, and 8 are logged as exceptions, not as drift.

## RACI {#raci}

R does the work, A answers for it (one per row), C is consulted, I is informed.

| Activity | Founder | Builder | Counsel | Vendor | Photographer | Enforcer | Peer | Homets reviewers | Writer | Designer |
|---|---|---|---|---|---|---|---|---|---|---|
| Domain preflight | A, R (1–6, 8, and 7's third-party check) | R (7–8's Search Console parts, follow-ups) | — | — | — | — | — | — | — | — |
| LLC-owned accounts | A, R | C | — | — | — | — | — | — | — | — |
| DNS, email authentication | A | R | — | — | — | — | — | — | — | — |
| Build, analytics and SEO setup, dependencies, monitoring | A | R | — | — | — | — | — | — | — | — |
| Copy edits and approval | A, R | C (QA) | — | — | — | — | — | — | — | — |
| Tokens and claims ledger | A, R | I | — | — | — | — | — | — | — | — |
| Photography | A | I | — | — | R | — | — | C | — | — |
| Redaction and photo log | A | I | — | — | C | — | — | R | — | — |
| Likeness releases | A, R | R (packets) | C (`10`) | — | — | — | — | I | — | — |
| Receptionist selection | A, R | R (shortlist) | — | C | — | — | — | — | — | — |
| Script loading and test calls | A | C | — | R | — | R | R | — | — | — |
| Seeds and the weekly SLA report | A | R (report) | — | I | — | R (seeds) | — | — | — | — |
| Legal pages and the DNC policy | A | R (DNC draft) | R | C (training) | — | — | — | — | — | — |
| Pre-launch QA | A | R | — | C | — | R (calls) | R (calls) | — | — | — |
| Go/no-go and launch | A, R | R | — | I | — | R (test call) | — | — | — | — |
| Rollback after 11:45 on launch day | I | A, R | — | I | — | I | — | — | — | — |
| Flip to OPEN | A, R | C | — | I | — | C (A under a capacity hold) | — | — | — | — |
| Scheduled flips verified (Feb 1, May 1, Dec 1) | A | R | — | I | — | I | — | — | — | — |
| v2 launch and flip, Sep 7, 2027 (`#v2-launch`) | A, R (go call, approvals, decision) | R (both deploys, checks, page-level pull) | — | I | — | R (Branch C's capacity flip) | — | — | — | — |
| `#register` statuses | A (decisions) | R (rows, Thursday status) | — | — | — | — | — | — | — | — |
| Capacity flip at the third sale (`AUDIT_CAPACITY`, within 1 business day, `08` F2) | A | R | — | I | — | I | — | — | — | — |
| Flip to WAITLIST / `capacity` (kill switch) | I | C | — | I | — | A, R | — | — | — | — |
| Monthly self-shop | A, R (scoring) | I | — | I | — | R (calls) | R (calls) | — | — | — |
| Prompt test | A; R from Feb 2027 | R (Nov baseline, Dec, Jan) | — | — | — | — | — | — | — | — |
| Scorecard, budget, time log | A, R | C | — | — | — | I | — | — | — | — |
| v1.1, v2, v3 | A (approvals, interviews) | R | C | — | R (v2 photos) | — | — | — | R (v2 and v3 drafts) | R (v2 diagram, v3 PDFs) |

## Change-request and decision register {#register}

**Every cross-document change request and every decision that holds up work gets one row here, with a status.** Each website document's "What this document changes elsewhere" table remains the source text. This register is the one place that says whether each request is still open and what it blocks. Without it, the builder gets two instructions for one thing and nothing to say which one is current.

**Rules:**

1. **One row per request.** A request enters the register on the day it's written into any website document's change table, or into an open question that edits another document. A row points to the source text; it doesn't restate it in full.
2. **Status** is **open**; **accepted** (the target agrees but hasn't edited yet); **rejected** (with the reason, also noted in the source document); or **applied** (with the commit that made the edit, written `applied a1b2c3d`). Rows this revision of `11` applies read "applied, this revision" until the commit exists. The target document's owner sets the status, and the builder keeps the table.
3. **While a row is open, build to the brief first, then to the owner in the brief's ownership table, then to the row's interim rule.** The builder never chooses between two documents alone. The row goes in the Thursday status (working rule 3).
4. **Gates read the register.** C1 (Wed Sep 30), G2 (Thu Nov 19), and each flip or release go/no-go (Thu Jan 28 for Feb 1, Thu Apr 29 for May 1, Thu Sep 2 for v2, Mon Nov 29 for Dec 1) list the open rows whose "Blocks" column names that gate or a task due before the next one. Each row is decided at that meeting, or the gate holds, as `#launch-day` holds on a failed precondition. Accepting the owning document's recommended default counts as a decision. Each Friday review reads the rows due that week.
5. **"Blocks"** names what can't finish until the row closes: a task ID from `#wbs`, launch (G2), Feb 1, May 1, v2, or Dec 1. **"Decide by"** is the last date that keeps that work on schedule.

Seeded Sep 25, 2026 with the conflicts found in the cross-document review. The builder adds every other open request from the change tables in `01`–`12` by the first Thursday status, Thu Oct 15.

| # | From | To | Change | Blocks | Decide by | Owner | Status |
|---|---|---|---|---|---|---|---|
| CR-01 | `06` open question 16; `08` F1 step 3 | Brief D11; `06` #forms; `08` F1 | E01 when `bot_check` is `missing`: revise D11 to "no confirmation email when the bot check could not run; the thanks page and the callback confirm instead," or keep sending it, capped at one per address per 24 hours | I2, I3; `#qa` 4.5, 4.8 | C1, Wed Sep 30, 2026 | Founder | **Applied** — brief v2 D11 (no automated email when the bot check could not run); `06` #forms step 7, open question 16; `08` F1 step 3 |
| CR-02 | `08` #sla (seed tagging), #dependencies | `06` #data | New `app.seed_identities` (founder and enforcer access only), which `ingest_submission` matches to add `seed` to `submissions.flags`, so seeds stay out of funnels and the SLA figures (`09`) | I1; seeds from Nov 2 (R5); `#qa` 17.3 | Fri Oct 9, 2026, before I1 | Builder, in `06` | **Applied** — `06` #data (`app.seed_identities`, `register_seed`) |
| CR-03 | `10` #quiet-hours | `08` #sla; `06` `server/sla.ts` | The lead-local guard reads `state_code` against calling-hours table `hours-2026-10-v1` and stamps `calling_rule_version`; a dial the guard blocks falls due at the opening of the lead's window (`08` #sla) | I3 (SLA due times by Fri Oct 30); R4; `#qa` 4.8, 12.15 | Fri Oct 23, 2026 | Builder, in `06`; counsel verifies the table (L1) | **Applied** — `06` #notifications reads `calling-hours.ts` state by state; a blocked dial falls due at the opening of the lead's window (`08` #sla owns the rule) |
| CR-04 | `10` #retention | `06` #data | Exclusion-zone declines split into `zone_decline` (30 days) and `zone_decline_stub` (12 months) | I1; `#qa` 12.9 | Fri Oct 9, 2026 | Builder | Applied in `06` #data (retention seeds and `ingest_submission`); I1's pgTAP retention test confirms it |
| CR-05 | `10` #tcpa-analysis item 5 | `08` #receptionist; `11` R1, R4, `#qa` | Callbacks show [TECHEO_PHONE] as caller ID, as a vendor must-have | R1, R2; launch | Mon Oct 12, 2026 (R1) | Builder | Applied in `08` (must-have 9 of 10). Applied, this revision, in R1, R4, and `#qa` 12.16 |
| CR-06 | `11` #dependencies and `12` #change-requests, each asking the other | `12` #phase-2-schedule; `11` #v1-1 | The Phase 2 table. `11`: shop scoring in W11 and W15 (`08` scores by the 10th), and the builder runs the December and January prompt tests: 31.75 of 36 hours, 4.25 of slack. `12`: scoring in W12 and W16, and the founder runs them: 33.75 of 36, 2.25 of slack, under the floor's 3.0 | Phase 2, from Mon Nov 30, 2026; the floor's Jan 15 deadline | Fri Nov 13, 2026 review | Founder (open question 5); `11` and `12` apply | **Applied** — `12` #phase-2-schedule (W11 and W15 scoring; builder-run prompt tests; 31.75 of 36 hours) |
| CR-07 | `04` #build-order; `11` #v2, open question 10 | `04`; brief D15 | v2 founder hours are 16.0 for interviews and approvals, not 18.5. Blake's own sections add 3.5 only if open question 10 says so, which needs D15 revised to "the founder authors and approves every word" | v2: the writer's contract, May 3, 2027 | Fri Apr 16, 2027 | Founder | **Applied** — brief v2 D15 ("the founder authors every word — writes or dictates it — and approves it") |
| CR-08 | `07` #assistants | `11` #maintenance, #caps-2027 | Prompt test at 1 h reduced, 2 h full core, and 3.7 h in quarterly months | Feb 1 (February's hours) | — | Builder | Applied, this revision |
| CR-09 | `11` #budget, #year-one | `01` #risks R13 | "About $16,700" becomes "about $20,900 pre-revenue at plan ($11,600–$39,800), a startup total of about $29,900, and about $44,700 in year one with v2" | H2, whose signature commits the largest line | C1, Wed Sep 30, 2026 | Founder, in `01` | **Applied** — `01` #risks R13 quotes $20,900 / $29,900 / $44,700 |
| CR-10 | `11` #budget, #year-one | `techeo.financials` #startup, #unit-economics | A website line of $20,900 plan and $21,700 ceiling through Jan 31, 2027, from a documented capital contribution (October's share by the Oct 9 signing, the balance by Fri Nov 6); a site run-rate of $1,274 a month at plan from Feb 1; v2 at about $10,700 from revenue | H2 | C1 | Founder (open question 3) | **Applied** as a correction note in `techeo.financials` #startup, which carries both the lean v1 (brief D16) and the full-spec figures; the website line itself waits on the D16 decision (Fri Oct 9) |
| CR-11 | `11` open question 1 | Brief D1 | v1's row, only if the floor becomes the default or H5 triggers it: `/audit` and `/teardown` by Jan 15, not Nov 20 | H5 | C1 as a default; Fri Nov 6, 10:45 (H5) as a trigger | Founder | **Applied** — brief v2 D1 names the Nov 6 floor checkpoint as a trigger |
| CR-12 | `08` #dependencies | Brief D2 | `AUDIT_CAPACITY` joins the kill switch and the client-#4 gate as a capacity trigger | I6 (season mechanics); Feb 1 | C1 | Founder | **Applied** — brief v2 D2 (capacity trigger 3) |
| CR-13 | `techeo.web.strategy` open question 1 | Brief D2, D6; `techeo.offers` #terms; `03`; `06`; `07` | A retainer not signed by the flip is signed only from the next opening, stated before payment from Apr 16 and Nov 16; and audit checkout closes Nov 16, 2027 while the site stays OPEN to Nov 30 (`#flip-dec`) | Feb 1 (the signing rule appears before payment and in `/terms`); Dec 1, 2027 (the cutoff) | Signing rule: Thu Jan 28, 2027. Cutoff: Mon Aug 16, 2027 | Founder | **Partly applied** — brief v2 D2 "Edges" adopts the pre-payment disclosure; the Nov 16, 2027 checkout cutoff stays open |
| CR-14 | `02` open question 8 | Brief D5 | A legacy URL with earned links but no page on the same topic returns 404, not a 301 | A2's mapping sheet (Oct 13–16) | C1 | Founder | **Applied** — brief v2 D5 |
| CR-15 | `03` open question 7 | Brief D7 item 3; `10` #endorsements | "Rounded down" becomes "rounded toward the less flattering figure," with the source line and the omit rule to match | C2 (Thu Oct 15); B5; `#qa` 1.1, 2.2, 2.3 | C1 | Founder | **Applied** — brief v2 D7; `03`, `04`, `05`, `10`, `12` |
| CR-16 | `04` open questions 14–15; `02` #inventory, #search; `10` open question 12 | Brief #names | New URLs: `/thanks/market-check` and `/thanks/partner-referral` (v2); `/insights/page/<n>` (at pagination); `/resources/<slug>.pdf` (v3); `/search` (at its trigger). The `[TECHEO_POSTAL_ADDRESS]` registered-agent condition | C2 (the address); v2 (the thanks pages); the rest at their triggers | C1 for the address; Fri Apr 30, 2027 for the v2 thanks pages | Founder | **Applied** — brief v2 #names (URLs; the postal-address condition). `/search` is added at its trigger |
| CR-17 | `11` #dependencies; `techeo.web.strategy` open question 6; `07` open question 11 | `techeo.plan90` #phase-2, W7, W8; `techeo.metrics` #cadence | Phase 2's list names the site upkeep; W8's review moves to Thu Nov 19; W7's pilots count at 8 hours each; the moved review days | Phase 2 (Mon Nov 30, 2026); W8 | Fri Nov 13, 2026 review | Founder | Open |
| CR-18 | `12` #calendar; `11` #v3; `04` #build-order | `12`; `11` | Glossary wave 1: `12` counts 8 founder hours of drafting in November and 2 in December; `#v3` and `04` have a writer drafting it (20 h) and the founder approving (5.5 h) | v3: glossary wave 1, Tue Dec 7, 2027 | The October 2027 close | Founder | Open. `#caps-2027` counts `12`'s figure |
| CR-19 | `11` #dependencies, #caps-2027; `12` #change-requests | `techeo.guardrails` #seasonality | December 2026's "admin and legal only" against A1's publication and W10–W14's upkeep; December 2027, which isn't set, with about 30 hours of delivery for three clients | Phase 2 (Mon Nov 30, 2026); Dec 1, 2027 | Fri Nov 13, 2026 for 2026; the Sep 2027 review for 2027 | Founder | **Partly applied** — `techeo.guardrails` December 2026 row now allows the Phase 2 content; December 2027 stays open |
| CR-20 | `06` #dependencies | `11` | `CONSENT_VERSIONS`, one id per form, replaces `CONSENT_VERSION` in L3 and `#qa` 12.3; a decide-by date and escalation path for each blocking preflight finding (A1, A2); the builder runs `claims.yml` after each ledger change (`#maintenance`); the enforcer as backup approver (`#roles`); `#qa` rows for `06` #optout and #deliverables | A1 (Mon Sep 28); L3; launch | C1 | Builder, in `11` | `CONSENT_VERSIONS`: applied, this revision, in L3 and `#qa` 12.3. Open for the rest |
| CR-21 | `08` #dependencies | `11` | The outage runbook, printed with the flip runbook and drilled before Nov 20; R4 also loads the exclusion ZIP list and starts the monitoring call on Nov 2; `team@` as a collaborative inbox; Techeo LLC's bank details for F10 invoices by the Jan 28 rehearsal; F10, not a rollback, in `#flip-open` when only payments fail | R4 (Nov 2); launch; Feb 1 | Fri Oct 23, 2026 | Builder, in `11` | Open, except the monitoring line's cost (applied, this revision, in `#budget`) and F10 in `#v2-launch` |
| CR-22 | `11` #dependencies | `06`; `09`; `10` | `06`: G0 on Mon Nov 9, DMARC `p=quarantine` on Mon Nov 16, the HSTS fallback, Workspace records at A3, the preview allowlist by Oct 30, Supabase Pro by hand. `09`: the SLA report reads staging for Nov 2–8. `10`: page wording other than the frozen three may change to Wed Nov 18, 12:00; counsel verifies the recording table by Oct 30; releases are held until counsel approves the form | A3; R4 (Nov 2); L1; L3; G0 | Mon Oct 26, 2026 (L1) | Builder; counsel | `06`: applied for G0 and DMARC (#dns, #launch), open for the rest. `09`, `10`: open |
| CR-23 | `08`; `10`; `01`; `06` | `11` | The receptionist at $315–$1,200 a month; counsel re-quoted for the full compliance package, and the v2 review widened; the v2 gate counts signed clients; `#qa` 9.2 per `06` #performance; `#qa` 12.15–12.16 per `10` #launch-gate; R1 against must-haves 1–10 | — | — | Builder | Applied, this revision |
| CR-24 | `11` #v2-launch, #flip-dec | `02`; `03`; `06`; `07`; `08` | The two-deploy v2 flip and its page-level pull; Branch C's E02 and capacity script; the Nov 16 checkout cutoff's copy, setting, Offer, and `llms.txt` form (`#dependencies`) | v2; Dec 1, 2027 | Mon Aug 16, 2027 | Builder; each owner | Open |
| CR-25 | `04` #triggers, open question 18 | `11`; `techeo.plan90` | The Homets engine rhythm log that `/engines/search`, `/answer`, and `/ads` need (at least 3 months by Aug 16, 2027) has no owner or hours. Owner: the founder's designee at Homets, counted as Homets time (`04` open question 18); starts by Mon Mar 1, 2027; checked at the Friday reviews | v2 (engine pages) | Fri Feb 26, 2027 | Founder | Open |

## What this document changes elsewhere {#dependencies}

Each row is also tracked, with what it blocks and its status, in `#register`.

| Owner | Change |
|---|---|
| Brief (`00`) | *Applied in brief v2:* D15 authorship, the `[TECHEO_POSTAL_ADDRESS]` condition, and D1's floor trigger. Still open: if `techeo.web.strategy` open question 1's default is accepted, D2: audit checkout may close on Nov 16 while the site stays OPEN to Nov 30 (`#flip-dec`). |
| `techeo.plan90` | #phase-2's list adds the site upkeep D11 and D13 require: self-shop scoring, the day-30 read, the scorecard, the Homets link, the prompt tests, and the Feb 1 flip tasks. W8's weekly review moves to Thu Nov 19, 13:30. W7's two pilots are counted at `techeo.audit`'s 8 hours each. |
| `techeo.guardrails` | *Applied:* December 2026 now allows the Phase 2 content. Still open: record the pre-approved exceptions in Weeks 5, 6, and 8 (open question 1). #seasonality: add October 2027 – January 2028, and set December 2027's allowance with delivery for three clients in it (about 30 hours a month, `#caps-2027`), saying whether delivery to existing clients sits outside it. |
| `techeo.metrics` | #cadence: the weekly review is Thursday in launch week and Wednesday in the Thanksgiving, Christmas, and New Year weeks. |
| `techeo.financials` | *Applied as a correction note in #startup, carrying both brief D16 options; the line itself follows the Oct 9 decision.* Full-spec figures: #startup: a website line of $20,900 plan and $21,700 ceiling through Jan 31, 2027. #unit-economics: a site run-rate of about $800–$1,270 a month at plan, $1,274 from Feb 1, including the receptionist at `08`'s $315–$1,200 range and GitHub Team. v2 at about $10,700, from revenue. Year one, Oct 2026 – Nov 2027, about $44,700 at plan (`#year-one`). |
| `techeo.web.strategy` (`01`) | #releases: the floor keeps its Jan 15 deadline, now backed by 4.0 hours of Phase 2 slack before that date (`#v1-1`). Open question 6 to match. |
| `02` | #scope: a manifest entry can be held out of the current release for a page-level pull on or after the v2 launch, with its v1 302 restored if it is `/about` or `/pricing` (`#v2-launch`). |
| `03` | If `techeo.web.strategy` open question 1's default is accepted: `/audit` copy for Nov 17–30, 2027, when checkout has closed and the site is otherwise OPEN (`#flip-dec`). |
| `04` | #build-order: v2 founder hours are 16.0 (15, plus `08` F2's day-before tasks on Fri Sep 3), not the default column's 18.5; the 3.5 hours for sections Blake writes count only if open question 10 says so. |
| `06` | #launch and #dns: G0 is Mon Nov 9, with test keys until Stripe's live activation and live keys by Fri Nov 13; DMARC `p=quarantine` moves to Mon Nov 16, a week after G0; HSTS at G0 falls back to 1 month if 300 s can't be set. Workspace's mail records go on the current DNS host at A3, before the name-server move, unless live email was found. #environments: the enforcer, the peer, the vendor's intake address, and the seed inboxes join the preview Access policy and `EMAIL_RECIPIENT_ALLOWLIST` by Fri Oct 30. #launch's Feb 1 row: Supabase Pro is upgraded by hand at 07:30, because upgrades take effect immediately. #season-state: the Sep 7, 2027 row runs as two deploys, v2 then the flip, with separate rollback targets (`#v2-launch`). If `techeo.web.strategy` open question 1's default is accepted, a `CHECKOUT_CLOSES` date (Tue Nov 16, 2027, 23:59 [TZ]) that the qualify endpoint, the `/audit` build, and the Offer read, set like a flip (`#flip-dec`). |
| `07` | L0.1 and the December and January reduced prompt tests move to the builder; Blake runs from February (open question 5, replacing `07` open question 3's default through April). The week-1 daily Search Console look moves to the builder. On a fallback launch date the builder runs L3 and L9. L0.7 may move after launch only as a logged waiver. If `techeo.web.strategy` open question 1's default is accepted, the Engine Audit Offer and the `llms.txt` audit sentence take their WAITLIST form from Nov 17, 2027 (`#flip-dec`). |
| `08` | F2 steps 2–3 for the Sep 7 opening: the flip comes with v2 at 13:00, so E04 and the calls start at 15:30 once the OPEN checks pass, or Wed Sep 8 at 08:00, and O7 is measured to Thu Sep 9. The vendor switches to `script-2.0`'s OPEN form on the builder's "OPEN live" email. If the Aug 16 gate check fails: E02 to every Sep 7 reservation by Wed Aug 18, E03 suppressed, and the capacity script confirmed by the same day (`#v2-launch`, Branch C). |
| `09` | The weekly SLA report reads `techeo-staging` for Nov 2–8 and production from Nov 9. |
| `10` | #counsel-package: page wording other than the consent texts, the processor list, and the analytics posture may change until Wed Nov 18, 12:00 (those three still freeze with the Nov 16 sign-off); counsel verifies the recording table by Fri Oct 30, before the first seed call; releases signed at the Oct 27 shoot are held until counsel approves the form. Budgeted as `10` asks: the counsel line is renamed "website compliance package" and re-quoted for its full scope (a); the v2 accessibility audit is in `#v2` (b); and the v2 counsel review adds the case-study disclosures, the all-clients line, `/partners`, and `/markets` (c). |
| `12` | The 2027 calendar hours are counted in `#caps-2027`; June–August drafting (S7) goes to the v2 writer. |

## Open questions for the founder {#open-questions}

1. **The hours verdict.** v1 as D1 defines it doesn't fit the Phase 1 cap: Weeks 5, 6, and 8 run 0.25, 0.5, and 0.25 hours over. *Recommended default:* approve those three exceptions in advance and log them, with the four triggers in `#hours`, the Nov 13 spill check, and the Week 8 rule that only S3 may move. *Alternative:* ship the floor by default, which keeps every Phase 1 week at 12 or under and fits Phase 2's slack, but needs D1 revised, because `/audit` and `/teardown` would go live Jan 15, not Nov 20.
2. **Freelancer or a founder-driven AI build.** *Recommended default:* a freelancer on a fixed fee of no more than $12,690 under `#budget`'s bid rule, milestones 20/30/30/20, signed with Techeo LLC on the filing-receipt day. A founder-driven build adds 150+ hours the cap doesn't have.
3. **A website line in `techeo.financials`.** *Recommended default:* $20,900 plan, $21,700 ceiling through Jan 31, 2027, funded by a documented capital contribution (October's share by the Oct 9 signing, the balance by Fri Nov 6), replacing the "Website $0" row. The startup total becomes about $29,900, and the site's first year, with v2, about $44,700 (`#year-one`).
4. **Builder bids above $12,690.** *Recommended default:* sign at $12,690 or less. From $12,691 to $13,469, sign and log the overage against the $21,700 ceiling. Above $13,469, apply the lean-scope lever (revising `06`, `08`, `09`) before signing; if the bid is still above, sign for the floor scope and finish in December and January.
5. **Who runs the Nov 16–19 baseline and the December and January reduced prompt tests.** `07` recommends Blake through April, because the method is also the audit's Answer workstream. *Recommended default:* the builder runs all three under `07` #run-protocol with no founder accounts, which gives Phase 2 the slack the floor needs; Blake runs every monthly test from February, starting with the full core set.
6. **Who places shop calls.** *Recommended default:* the enforcer places A and C, a peer places B and F, and the founder scores. The 09:30 call always falls inside the founder's protected block.
7. **Launch fallback dates.** *Recommended default:* Tue Nov 24, then Tue Dec 1, both 10:00–11:45. On a fallback date the founder does only the 10:00 go call and the 11:30 decision (0.5 hour); the builder runs `07` L3 and L9; the 30-minute GA4 check moves to the next working block. Nov 24 puts Week 9 at 10.0 against 7.2 (+2.8), approved at the Wed Nov 25 review as a cap exception and logged; Dec 1 fits W10 at 4.0 of 4.0. A Dec 1 launch logs the Phase 1 exit criterion as late; Nov 24 doesn't, because Phase 1 runs to Nov 27. A copy or integration blocker triggers the floor instead.
8. **The builder's authority after 11:45 on launch day.** *Recommended default:* the builder may roll back on the listed criteria without asking; only the founder relaunches.
9. **Homets staff time on the shoot.** *Recommended default:* the redaction, the second review, and the photo log are Techeo work, because the photos exist only for techeo.com. Both Homets managers work under a one-page agreement with Techeo LLC and are paid from Techeo's account at an agreed rate ($160 at plan), per `techeo.guardrails` #coi item 6. Releases carry `10`'s $50 payment.
10. **v2 authorship.** *Recommended default:* interview-and-approve with a contract writer, the founder at no more than 16 hours from May 3 to Sep 7 and 2 in any week. Revise D15 to "the founder authors and approves every word." If Blake also writes `04`'s default sections, add 3.5 hours.
11. **v2 launch time.** *Recommended default:* Tue Sep 7, 2027, 13:00–15:00, treating that Tuesday morning as the post-Labor Day week open, with v2 and the flip as two deploys (`#v2-launch`), and E04 and the reservation calls from 15:30 once the OPEN checks pass (or Wed Sep 8, 08:00).
12. **Builder retainer.** *Recommended default:* 6 hours a month from Feb 1, reviewed at day 90.
13. **Holiday freeze.** *Recommended default:* no deploys Dec 19 – Jan 3 except security fixes and scheduled publishes.
14. **The weekly review slot.** *Recommended default:* Friday 10:00–10:30; Thursday 13:30 in launch week (Nov 19); Wednesday in the Thanksgiving, Christmas, and New Year weeks.
15. **`techeo.plan90`'s Weeks 7 and 9**, which exceed the cap on these estimates before any website work (W7 at 18.5 with the pilots at `techeo.audit`'s 8-hour rate). *Recommended default:* check against the Weeks 1–3 time log; if it's confirmed, treat the overrun as a visible `techeo.plan90` decision and move no website task into either week.
16. **Receptionist start date.** *Recommended default:* Mon Nov 2, as `08` sets, with script-1.0 loaded that day, so the SLA report has two unattended weeks before launch. Nov 9 saves about $175 at `08`'s plan rate and loses that proof.
17. **Paying the enforcer.** *Recommended default:* if the enforcer is a Homets employee, a one-page agreement with Techeo LLC and pay at an agreed rate (about 15 hours, $450 at plan, through Jan 31; about 3 hours a month after), per `techeo.guardrails` #coi item 6. If the enforcer is a spouse or an outside advisor, no pay, recorded in writing.
