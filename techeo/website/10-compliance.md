---
id: techeo.web.compliance
title: Compliance & Legal Requirements for the Website
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, compliance, legal, privacy, consent, tcpa, can-spam, ftc, accessibility, trademarks, releases, retention]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.build, techeo.web.content, techeo.legal, techeo.gtm, techeo.guardrails, techeo.offers, techeo.audit, techeo.delivery, techeo.plan90]
order: 10
---

# Compliance & Legal Requirements for the Website

**This is a checklist for a conversation with counsel, not legal advice. It lists every legal requirement techeo.com must meet, why it applies, what the site must do, and what counsel must confirm, because a company that sells trust to contractors cannot afford a site that fails its own fine print.**

## How to use this document {#how-to-use}

- **Not legal advice.** As in `techeo.legal`, this is the founder's working reading of public law and platform rules as of Sep 25, 2026, organized so counsel can confirm, correct, or strike each line. No legal page, consent text, or disclosure ships as final until counsel has reviewed it (`#counsel-package`).
- **Owns** (brief `#ownership`): legal-page requirements, consent language and `consent_version` ids, disclosures, accessibility compliance, trademarks, releases, retention, the claims ledger, and the state recording table. Fields stay with `08`, schema and security with `06`, analytics setup with `09`, copy with `03` and `04`, photography with `05`, schedule, budget, and launch checklists with `11`.
- **"Verify"** marks a legal or platform fact that may have changed; each is rechecked at the counsel review.

## Applicability at a glance {#applicability}

| Law or standard | Applies? | Why | Section |
|---|---|---|---|
| CalOPPA (Cal. Bus. & Prof. Code §§ 22575–22579); Delaware and Nevada notice laws | **Yes, treat as applying** | Collects contact details from residents; no size threshold | `#privacy` |
| CCPA/CPRA and the other state comprehensive laws | **No, at current scale** | Below every threshold; most exclude business contacts | `#state-laws` |
| State GPC mandates; California Invasion of Privacy Act | Not covered; low residual risk | GPC honored anyway; SB 690 pending | `#cookies` |
| TCPA § 227(b) (autodialers, recorded voice, texts) | **Not triggered in v1** | Hand-dialed live calls, no texts | `#tcpa` |
| TCPA § 227(c), 47 CFR 64.1200, state telemarketing laws | **Yes** | Callbacks that sell a service, often to mobiles | `#tcpa` |
| CAN-SPAM | **Yes** | Covers B2B commercial email | `#can-spam` |
| State call-recording laws | **Yes** | The receptionist line records; test calls cross state lines | `#recording` |
| FTC Act § 5; Endorsement Guides (16 CFR Part 255); 16 CFR Part 465 | **Yes**; testimonials from v2 | Every claim; design partners' discount is a material connection | `#claims`, `#endorsements` |
| ADA Title III; California Unruh Act | Treat as applying | Website-only coverage is unsettled, and suits are filed in volume | `#accessibility` |
| Lanham Act; right of publicity; photo copyright | **Yes** | Own mark, others' names, staff and founder images | `#trademarks`, `#releases` |
| State breach laws · COPPA | Limited · No | Little statutory data held · not directed to children | `#security`, `#boilerplate` |

## Privacy policy (`/privacy`) {#privacy}

### Why a policy is required {#privacy-why}

1. **CalOPPA** requires any commercial website collecting personally identifiable information (name, email, phone, or other contact details) from California residents to post a privacy policy conspicuously, whatever the company's size, linked from the homepage with the word "Privacy" (the footer does this, `03` #chrome). It must state: categories of PII collected and of third parties receiving it; any review-and-correct process; how changes are announced; the effective date; **how the site responds to Do Not Track and similar signals** (strictly required only if the operator collects PII about a visitor's activity over time and across third-party sites, § 22575(b)(5), which Techeo doesn't; disclose it anyway); and whether other parties may collect PII about a visitor's activity across websites through the site.
2. **The honest caveat.** CalOPPA's "consumer" acquires goods or services "for personal, family, or household purposes." A contractor buying an audit acts for a business, so a court might find CalOPPA inapplicable. Comply anyway: it costs a few sentences, homeowners do reach the site (`03` `#faq-homeowner`), and the MSA asks clients to trust Techeo with data. *Counsel confirms.*
3. **Delaware and Nevada** have similar website-notice statutes (verify scope and Nevada's small-operator exemption).
4. **Contracts.** Google Analytics' terms require a policy disclosing GA and its cookies, with a link to Google's page on partner-site data (verify the clause and URL at build). Stripe's services agreement requires notice of Stripe's processing (verify).

### Do the state comprehensive privacy laws apply? {#state-laws}

**Conclusion: no, at Techeo's scale, and it is monitored.** The analysis:

| Law | Threshold (verify each) | Techeo, projected year 1 |
|---|---|---|
| **CCPA/CPRA** (covers business-to-business contact data since Jan 1, 2023) | Annual gross revenue over **$26,625,000** (the 2025 inflation adjustment; next adjustment due Jan 2027), **or** buys, sells, or shares the personal information of **100,000+** California consumers or households a year, **or** derives **50%+** of revenue from selling or sharing it | Revenue far below the threshold (`techeo.financials`); sells or shares nothing: no ad pixels, Google signals off (`09`) |
| Common-control rule | An entity that controls or is controlled by a covered business, **shares common branding with it** (a shared name or mark that signals common ownership), **and receives consumers' personal information from it** (Civ. Code § 1798.140(d)(2)) | Homets is not believed to be a CCPA business, so the rule has nothing to attach to. Techeo uses its own name and marks (D10) but displays Homets' name and marks under license (`#releases`) and discloses common ownership (D8), so whether that is "common branding" matters only if Homets is a CCPA business. No personal information passes between them (`#processors`), which fails the third element either way. *Counsel confirms.* |
| **The other states in force** (about 19, from Virginia and Colorado to Indiana, Kentucky, and Rhode Island, which took effect Jan 1, 2026) | Usually 100,000 consumers a year; lower in some (Rhode Island 35,000; Connecticut's amendments of Jul 1, 2026 reportedly lowered its threshold; verify) | Far below any count. **These laws' "consumer" generally excludes a person acting in a commercial or employment context**, which is every contractor contact |
| **Texas, Nebraska** (no numeric threshold) | Exempt SBA-defined small businesses, except for consent before selling sensitive data | Techeo is small and sells nothing |
| **Laws enacted in 2026** (reports name Alabama, Louisiana, Oklahoma, and Vermont) | Not yet reviewed | *Counsel confirms the list* |

**Re-evaluate when:** GA4 shows more than 20,000 users in a rolling 12 months (checked in `09`'s monthly close); revenue passes $10M; Techeo adds ad pixels, retargeting, a data sale, or a client portal holding homeowner data; or a state law without a business-context exclusion takes effect.

**Posture.** Every visitor still gets access, correction, deletion, and opt-out (`#rights`). It costs little, matches the MSA's data promises, and keeps the policy true without state-by-state carve-outs.

### Data inventory, source by source {#data-inventory}

`08` owns the fields and `06` the tables. Every form row flows through Cloudflare D1 (30 days) into Supabase. Except for the calculator's, each also creates a ClickUp task and an internal Workspace email to the founder (`06` #notifications); calculator leads appear only in the weekly digest. Every form also submits **attribution**: the landing path, `utm_*` tags, referrer host, whether an ad click id was present (never its value), and the landing date, from the browser's `techeo_touch` record (`09` #touch-fields), kept in `leads.first_touch` and `last_touch` under the lead's class.

**What the receptionist vendor holds.** Its callback card carries only name, company, phone, due time, and time zone (`06` #notifications). Everything else it holds comes from its own recorded calls: `08`'s inbound intake (ZIP, trade, CRM, revenue band, lead sources, trucks, and goal) and what cards R and T confirm (ZIP, trade, and CRM; the number to test, state, and office hours). Replies to Techeo's automated email reach it too, because `team@techeo.com` includes its intake address (`06`). It never receives revenue bands, market status, flags, or UTMs from Techeo's systems, and `06`'s redaction test enforces that.

| Source | Personal data | Purpose | Retention class (`#retention`) |
|---|---|---|---|
| `form_audit_reserve`, `form_audit_qualify` | Contact details (name, role, company, website, email, mobile), ZIP with derived state and time zone, and `08` #form-audit's business answers; consent version; attribution | Hold a place; check fit and the zone before payment; call | `prospect`, `declined`, `zone_decline` and `zone_decline_stub`, `st_list`, `purchase` |
| Stripe Checkout (Stripe's domain) | Billing name and address, email, card or bank details, device data | Payment, fraud prevention, receipts. Techeo keeps only ids, amount, and status | `purchase` |
| `form_teardown_request` | Contact details, the business's published number, state, trade, authority attestation; attribution | Confirm, test, deliver the walkthrough | `prospect` |
| `form_calculator_email` | Email; the inputs and the result; attribution | Email the result once | `calculator` |
| `form_market_check`, `form_partner_referral` (v2) | Contact details; for referrals, the shop's business details and, if sent direct, the owner's name and email; attribution | Answer by phone; place a teardown | `prospect` |
| Calls with [TECHEO_PHONE] | Caller number, **recording**, agent notes, intake answers | Answer, book, quality review | `receptionist` |
| Readout calls (the founder with a buyer's team) | **Recording**: participants' voices and names, what is said, shared screens; the spoken recording consent | Deliver the readout; the buyer's copy | `purchase` (`client` once an MSA is signed) |
| Cal.com bookings; email with Techeo | Booking details; what the sender writes | Schedule; reply | Follows the lead |
| Site visits | GA4 events without form values; approximate location; device; Turnstile signals. Techeo stores only a keyed hash of the IP, for 24 hours. The `techeo_touch` record stays in the browser unless a form is sent (`#cookies`) | Measure pages; stop spam; attribute leads | GA4 14 months from last activity |
| From other people | Referrer-supplied shop details; public listings for outbound teardowns | Outreach | `prospect` |

### Processors and other recipients {#processors}

`/privacy` names each provider (`03`). **Before launch, file each provider's current data processing terms** in `Compliance/vendors/` on Techeo's Drive, or note that none is offered. It isn't legally required at Techeo's size, but it keeps the MSA's data addendum honest, and cyber insurers ask.

| Provider | Handles | Confirm (verify each) |
|---|---|---|
| Cloudflare (Pages, Functions, D1, Turnstile, Access, R2, DNS) | Everything submitted, in transit and 30 days in D1; backups encrypted before upload | Data terms in its self-serve agreement; Turnstile's data use |
| Supabase | All form data | Data terms; US region (`06`) |
| Stripe | Buyer billing, payment, and device data | Stripe is an independent controller for fraud screening and Financial Connections bank data |
| Google (Workspace, Analytics) | Email, calendar, Drive; GA4 events; readout recordings and report files, filed with the audit record on Techeo's Drive unless `techeo.audit` names other engagement storage | Accept both data processing terms in the admin consoles |
| Cal.com | Booking details | Data terms on the Free plan; **Techeo's calendar is the destination, and the Homets calendar is read for free/busy only** (`06` open question 9) |
| Resend · ClickUp | Email content · lead tasks | Data terms; Resend's log retention; Techeo's own ClickUp Workspace |
| Receptionist vendor | Recordings, caller details, intake answers, callback cards, replies to `team@techeo.com` | `08` #receptionist item 8, plus security, subprocessors, breach notice within 72 hours, 90-day recording retention, **a stated retention period for call logs, agent notes, and the callback-card and intake emails in its inbox** (item 8's "stated retention period" names each), deletion on request, and caller ID showing [TECHEO_PHONE] (`#tcpa-analysis` item 5) |
| Better Stack, Healthchecks.io, GitHub | **Nothing personal by design** (`06`) | No lead data in alerts, issues, or logs |
| Teardown walkthroughs: Cloudflare R2 (`techeo-deliverables`) | The walkthrough video of Techeo's own screen and voice, its captions (transcribed on the founder's machine, so no third party hears it), and the scored sheet, filed under the teardown request id | Cloudflare's data terms (row above). Served only through signed `/api/files/<token>` links: unlisted, noindex, the link expires at 90 days, revocation is checked on every request, and the files are deleted at day 120 (`06` #deliverables; `#retention`) |
| Readout recordings and reports: recorded locally with OBS Studio, kept in Techeo's Drive | Readout participants' voices, names, and shared screens; the report | No new processor. Recorded on the founder's machine and captioned there; the file and report are kept with the audit record in Techeo's Drive (the Google row's terms), shared "Restricted" with the buyer's named attendees only, with access expiring on E14's `{expiry_date}` (verify that expiration applies to accounts outside Techeo's Workspace; `06` #deliverables). Never on R2, D1, or Supabase |
| Bookkeeping software (not yet chosen) | Buyer names and amounts | Founder and bookkeeper only; its data terms are filed here once it is chosen |
| **Homets Air and Heat** | **Nothing** | The firewall sentence stays only while this is true (`03` #legal) |

### Required contents, section by section {#privacy-contents}

`03` #legal fixes the H2 order; counsel writes the final text. Sections not listed simply restate this document: *Who we are* (Techeo LLC, [TECHEO_STATE], [TECHEO_POSTAL_ADDRESS], [TECHEO_PHONE], separate from Homets), *What we collect* (`#data-inventory`), *Who processes it* (`#processors`, by name), *Security* (a summary of `06`, never "bank-level" or absolute), *Children* (`#boilerplate`), and *Contact* (phone, post, requests address). Where a sentence binds another document, it is drafted here:

| `03` H2 | Draft sentence |
|---|---|
| The calculator | "The calculator does its math in your browser. Nothing you type is sent to us or to Google unless you ask us to email you the result." (True only while `09`'s no-inputs rule and `08`'s network-trace test pass.) |
| Calls to [TECHEO_PHONE] | "Calls to and from our number are answered by a receptionist service working for Techeo, and they're recorded so we can check quality. Recordings stay with that service and are deleted after 90 days. If you buy an Engine Audit, Blake records the readout call, only if everyone on the line agrees, so you can share it with your team. That recording is kept with your audit record." |
| Payments through Stripe | "You pay on Stripe's checkout page. Stripe collects your card or bank details and information about your device to process the payment and prevent fraud, under its own privacy policy. We never see your card or bank account number." |
| Analytics and cookies | `#cookies`, including the GPC and Do Not Track sentence |
| How we use it | "We don't sell your personal information, share it for advertising, or use it to profile you." |
| The Homets firewall | "Nothing you send Techeo is shared with Homets Air and Heat, the HVAC company our founder also owns. Techeo and Homets use separate systems and accounts." Client engagement data falls under the client's contract. |
| Email and how to stop it | "We email you about what you asked for and, unless you tell us not to, about our services. If we contacted your business first, with a free phone teardown, that email says who we are and how to stop. Every marketing email has a stop link, or you can reply "stop," and we stop within one business day." (`#can-spam`) |
| How long we keep it | `#retention` in plain words, plus: "Deleted records can remain in encrypted backups for up to 13 months, and we reapply any deletion if a backup is restored." |
| Your choices and rights | "You can ask us to show you, correct, or delete what we hold about you, or to stop calling or emailing you, wherever you live." Marketing email stops within one business day. |
| Changes | "When we change this policy, we update the date at the top. If a change affects information you've already given us, we email you before it takes effect." Each change bumps the policy version in `app.consent_versions`. |

**Done when:** every sentence matches the live configuration on launch day (`03` acceptance), counsel has signed the text, the page shows "Last updated {date}," and the privacy-policy version is recorded in `app.consent_versions` so every consent text links to a known version.

### Rights requests {#rights}

- **Intake:** by phone (`08` #receptionist, Escalation, code U3), post, or the requests address (open question 3). The receptionist records the request and never argues it.
- **Verify:** match the email **and** phone on file, reply only to that email, and confirm a deletion once by email. Never ask for ID.
- **Timing:** acknowledge within **10 business days** and complete within **45 days** (the CCPA's clock, adopted as house policy).
- **Access:** `dsr_export(email)` (`06`), plus ClickUp comments, Cal.com bookings, vendor call summaries, Workspace emails, and a link to any readout recording the person is on, as one PDF.
- **Delete:** `dsr_erase(email)`; the ClickUp task and bookings; a written request to the receptionist vendor; the Workspace notifications; Resend's logs for the address, where the provider allows; any readout recording, unless the buyer's company holds it under `#terms`' license, in which case the reply says so; and an erasure-log entry so a restored backup is re-erased. **Kept, and the reply says so:** purchase records, the hashed consent-evidence stub, and the suppression entry.
- **Opt-out:** email suppressed within 1 business day; calls stop on the spot (`08`).
- **Log:** `app.dsr_requests` (received, type, channel, verified, completed, systems touched), kept 24 months.

**Done when:** a staged request from a test lead completes in under 60 minutes of work, and the export contains every system in `#data-inventory`.

## Cookies, analytics, and consent {#cookies}

### What the site sets

| Name | Set by | Purpose | Lifetime | Category |
|---|---|---|---|---|
| `_ga` | GA4, first party | Distinguishes browsers | 2 years from last visit (Google's default; verify) | Analytics |
| `_ga_<container-id>` | GA4, first party | Session state | 2 years (verify) | Analytics |
| `__cf_bm` | Cloudflare | Bot scoring | 30 minutes | Strictly necessary; set **only if** Bot Fight Mode or Bot Management is on (`06` #dns decides) |
| `cf_clearance` | Cloudflare | Records a passed challenge | Per challenge setting | Strictly necessary; only when a challenge is served |
| Turnstile | Cloudflare | Spam check | None by default: Cloudflare states Turnstile sets no cookies unless pre-clearance is enabled (verify) | — |
| `techeo_touch` (`localStorage`) | Techeo, first party | Remembers the first and latest landing page, campaign tags, referring site, whether an ad click id was present (never its value), and the date. It leaves the browser only inside a form the visitor submits (`09` #touch-fields) | `first` replaced after 90 days; `last` until overwritten by the next landing or cleared | Functional (attribution) |
| `techeo_ga` (`localStorage`) | Techeo | The staff-traffic or debug flag from `#ga-internal` | Until `#ga-reset` or cleared | Internal only |
| `techeo_submit`, `techeo_checkout` (`sessionStorage`) | Techeo | Mark a form submission or checkout so the thanks page counts it once | Deleted on use, or when the tab closes | Analytics support; nothing personal |
| `techeo_purchases` (`localStorage`) | Techeo | Up to 10 hashed transaction ids already counted, so a reload doesn't count a purchase twice | Each expires after 30 days | Analytics support; no card, name, or amount |

`09` #touch-fields owns the keys; this table and `/privacy` must list every one of them. Stripe Checkout and Cal.com set their own cookies **on their own domains** only; techeo.com loads neither script (`06` #security). **Done when:** a clean browser visit to `/`, `/audit`, and `/teardown`, with a form submitted and a test checkout completed, shows exactly these cookie and storage names in DevTools, and the table in `/privacy` matches.

### Is a consent banner required? {#banner}

**Reasoning.** US law has no EU-style cookie-consent rule. A banner is needed only if a state law requires opt-in for this processing (none does for first-party analytics), if a covered business sells or shares data for cross-context advertising (Techeo is neither), or if a wiretap-style statute makes consent-free tracking a litigation risk (California's CIPA). GA4 runs first-party, with signals and ad features off and no form values sent (`09` #pii).

**CIPA.** Plaintiffs have sued site operators over analytics tags as "pen registers" (Penal Code § 638.51) and over session replay and chat as wiretapping (§ 631). Techeo has neither replay nor chat (D12, D14). **SB 690**, as amended in 2026, would leave § 638.51 website claims to the Attorney General alone from Jan 1, 2027. Law-firm alerts report that it passed the Legislature before the Aug 31, 2026 deadline for ordinary bills (verify the date, the vote, and whether it reaches pending cases; the 2025 Senate version dropped retroactivity). The Governor's deadline is Sep 30, 2026 (**verify the outcome**). It leaves §§ 631 and 632 unchanged. `09` #consent dates its passage to Aug 28, 2026, consistent with the state constitution's bar on passing ordinary bills after Aug 31 of an even year (verify).

**Decision (answers `09` #consent, due Nov 16, 2026):**

1. **No banner.** Tradeoff: a small residual CIPA risk if SB 690 fails, accepted because a banner costs trust, speed, and data on a low-traffic site, and the site is an unattractive target. If SB 690 is vetoed, counsel re-decides before launch whether GA4 skips California visitors.
2. **GPC:** GA4 doesn't load under GPC, as built (`09` #tag-loading). Twelve states (California, Colorado, Connecticut, Delaware, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Texas) require **covered** businesses to honor it (verify); Techeo does more than it must. California's Opt Me Out Act reportedly requires browsers to offer the signal from 2027 (verify), so `09` should expect GA4 coverage to fall.
3. **Do Not Track: treat it like GPC** (open question 2), one more condition in `analytics.ts` step 1 (a change request to `09`). CalOPPA doesn't strictly require the DNT disclosure of a site that doesn't track across other sites (`#privacy-why`), so this rests on simplicity: it makes the disclosure one true sentence, at the cost of a little data.
4. **Privacy-page analytics disclosure**, draft:

> **Analytics.** We use Google Analytics to count visits and see which pages help owners decide. It sets two cookies, `_ga` and `_ga_{id}`, that last up to two years. Google deletes the detailed data tied to your browser 14 months after your last visit, and keeps summary reports without identifiers longer. We've turned off Google's advertising features, and we never send Google anything you type into a form or the calculator. **If your browser sends a Global Privacy Control or Do Not Track signal, we don't load Google Analytics at all.** We also note which page and link brought you to the site. That note stays in your browser and reaches us only if you send a form. We don't track you across other websites. The only other companies that collect information through our pages are Cloudflare, which hosts the site and checks forms for automated abuse, and Stripe, which collects device information on its own checkout page to prevent fraud. [How Google uses information from sites that use its services]

   If open question 2 is declined, replace the bold sentence with: "If your browser sends a Global Privacy Control signal, we don't load Google Analytics. We don't change anything in response to Do Not Track, which has no agreed standard."
5. **Rights requests:** GA4 holds nothing linked to a name, and `/privacy` says so. **GA4 retention:** 14 months, `09`'s default, accepted. `09` turns on "Reset on new activity," so a returning browser's data runs 14 months from its last visit, not its first, and aggregated reports outlive the setting (verify); item 4's draft says so.
6. **v2 video:** self-hosted or embedded in a no-tracking mode, with no ad pixel on any page carrying video, which keeps Video Privacy Protection Act theories off the table.
7. **The `techeo_touch` record** (answers `09` #touch-fields, which asks `10` to confirm its reading). **Capture continues under GPC and DNT,** as `09` built it: the record stays in the visitor's browser and reaches Techeo only inside a form the visitor chooses to send, so it is neither a sale, a share for advertising, nor collection by a third party. `/privacy` discloses it (item 4's draft and the `#cookies` table). If counsel disagrees (Q3), `09` moves the capture after the GPC and DNT check (a change request to `09`).

**Done when:** `09`'s P8 passes for GPC and for DNT, and the disclosure matches the build.

## Retention schedule {#retention}

These values replace `06`'s seeded assumptions. `app.retention_policies` carries them, and `approved_on` is set when counsel signs.

| Class | Applies to | Keep | Then | Basis |
|---|---|---|---|---|
| `synthetic`; D1 outbox, quarantine, rate events, CSP reports | Test and transit data | 7 days; 30 days · 7 days · 24 hours · 90 days | Delete | `06` |
| `calculator` | Leads whose only submission is the calculator email | **90 days** after the email | Delete | "Once. No newsletter"; kept only for duplicate checks and reconciliation |
| `zone_decline` | Exclusion-zone declines: the answers | **30 days** | Delete | Firewall: keep as little as possible about businesses near Homets (`techeo.guardrails` #coi item 4) |
| `zone_decline_stub` | Exclusion-zone declines: a suppression stub (hashed email and phone, ZIP, date) | 12 months | Delete | Stops a repeat submission from reaching anyone |
| `declined` | Other hard declines | 12 months | Delete | `08`'s `prior_decline` check |
| `st_list` | Declined as not on ServiceTitan, promised a message if that changes | 24 months, or until opt-out | Delete | The promise on screen |
| `prospect` | Leads with no purchase | **24 months after the last two-way contact or submission** | Delete | Two selling seasons |
| `purchase` | Leads with a purchase | 7 years after the purchase | Anonymize | Tax records; counsel or the bookkeeper confirms |
| `client` | Signed clients | MSA term plus 7 years | Per MSA | `techeo.legal` |
| `consent_evidence` | Hashed phone and email, `consent_version`, form, time received, last call | **5 years after the last call** | Delete | The TCPA's 4-year limitations period (28 U.S.C. § 1658), plus margin |
| `suppression` | Hashed opt-outs and do-not-contact entries | Indefinitely | — | CAN-SPAM; internal Do Not Call records must be honored 5 years (47 CFR 64.1200(d)(6)) |
| `receptionist` | Recordings; vendor call logs; callback-card and intake emails in the vendor's inbox | Recordings 90 days; logs 12 months; emails per the vendor's stated period (`#processors`) | Vendor deletes | Mystery-shop scoring and disputes |
| Readout recordings | The buyer's recorded readout | The buyer's link expires per E14's {expiry_date}; the file is kept with the audit record under `purchase` (or `client`) | Delete with the class | The buyer's license (`#terms`) covers its own downloaded copy. The "Is that OK with everyone?" answer is logged in `app.consent_evidence` as `readout-rec-v1` |
| ClickUp tasks · Cal.com bookings | Working copies | Deleted within 30 days of the lead's purge | Delete | Supabase is the record of truth |
| Workspace internal notifications | Lead emails in the founder's inbox | **Purged with the lead's class**: the nightly job lists purged lead ids, and messages under the `site-leads` label carrying them are deleted (a Workspace script, or by hand monthly until one exists). The quarterly purge of anything past 24 months stays as the backstop | Delete | Workspace Business Starter lacks Vault retention rules (verify the plan). Without this, a 30-day or 90-day class would live 24 months in the inbox |
| Resend | Delivery logs and message content | The provider's log retention (verify; the shortest the plan allows) | Resend deletes | `06` |
| GA4 | Events | 14 months from last activity (`09` resets on new activity); aggregated reports longer (verify) | Google deletes | `09` |
| Backups (R2) | Nightly dumps | 35 dailies, 13 monthlies | Rotate | `06`; the erasure log is re-applied after any restore |
| Teardown walkthroughs | Videos, captions, and scored sheets in R2 `techeo-deliverables` | Link expires at 90 days; file deleted at 120 | Delete | `techeo.web.strategy` open question 9; `06` #deliverables runs the sweep |
| Claims evidence | Ledger evidence and case-study packs | While the claim is published, plus 3 years | Delete | Substantiation defense |
| Releases, licenses, photo log | Signed documents | While any covered image or text is used, plus 7 years | Archive | Contract claims |
| `dsr_requests` | Rights-request log | 24 months | Delete | Mirrors CCPA record-keeping |

**Schema requests to `06`:** the new classes above; `app.consent_evidence`, `app.suppression`, `app.dsr_requests`, and `app.erasure_log` (hashed with a keyed HMAC, never plain); `purge_after` computed from last activity, not creation; and the nightly job emitting the ClickUp task ids and lead ids to delete. **Seeding `app.retention_policies`:** `06`'s anchors are confirmed (`calculator`, `declined`, `st_list`, and `prospect` on `last_activity`; `purchase` on `paid`; `client` on `msa_end`, `manual`; `consent_evidence` 5 years on `last_call`; `suppression` with a null period, never purged). Split `zone_decline` into `zone_decline` (30 days, `created`) and `zone_decline_stub` (12 months, `created`). `receptionist`, readout files, Workspace, Resend, GA4, and the R2 backups stay out of the table as "governed outside Supabase," each owned by the founder and checked at the quarterly access review. **Done when** `supabase test db` proves each class purges on schedule and a `legal_hold` row survives.

**Change request to `06` #notifications** (the firewall): an exclusion-zone decline's founder email carries no answers, only the subject "[No call] Exclusion-zone decline," the date, and the lead id, and its ClickUp task carries no band-level answers. It already never reaches the receptionist, and calculator leads already get no internal email.

## Lead-data security and breach response {#security}

**Security requirements.** `06` owns the controls; compliance requires they stay true: no Supabase key in a browser, row-level security with no public policies, passkey or hardware-key 2FA everywhere, no personal data in logs, alerts, or GitHub, a quarterly access review (extend `09`'s removal list to Supabase, ClickUp, Cal.com, Stripe, and the receptionist portal), and a confidentiality agreement for any contractor who sees lead data (`techeo.legal` #compliance).

**What never enters Techeo's website systems** (Supabase, D1, ClickUp, Resend, GA4, Workspace notifications):

- **Client ServiceTitan customer data** (homeowner names, addresses, jobs, invoices, recordings). It stays in the client's systems; an audit export goes only to `techeo.audit`'s engagement storage, on that document's schedule. `06`'s schema guard enforces it.
- **Homets customer data**, including unredacted photo originals, which stay in Homets' storage (`05` #pii step 3).
- **Card or bank numbers** (Stripe holds them) and **passwords to client accounts** (access is delegated only, `03` `#faq-audit-access`; a shared password is refused).
- **Government IDs, health data, precise location, children's data, uploaded files,** and **the names of people who answer test calls** (`08` F5).

**Breach basics.** Most state breach laws define "personal information" as a name plus a government ID, financial account, or medical number, or login credentials, so Techeo's site data mostly falls outside them. The plan still runs: **contain** within 1 hour (revoke keys per `rotate-secrets.md`, recreate the Access application if needed, preserve logs); **call the cyber insurer's claims line before hiring anyone**, since policies often require prompt notice and panel counsel (`techeo.legal` #insurance); **assess** within 72 hours (what data, whose, which states, whether credentials or client data are involved); **notify** as counsel directs, under each state's deadline (some are 30 days), the MSA's data addendum, and processors if theirs was the source; **record** the incident and decision either way.

**Done when** the plan is a one-page runbook in the vault, the insurer's claims number is on it, and a tabletop run with the enforcer takes under an hour.

## Consent language for forms and calls {#tcpa}

### What the telephone laws require of v1 {#tcpa-analysis}

1. **Autodialer, prerecorded, and artificial-voice rules (47 U.S.C. § 227(b)) are not triggered.** v1 uses live agents dialing by hand, no recorded messages, and no texts (`08` #sla). Hand-dialed live calls need no consent under § 227(b), to mobiles or landlines; *Facebook v. Duguid* (2021) also narrowed what counts as an autodialer. The Do Not Call rules in item 2 still apply. State "mini-TCPA" laws (Florida, Oklahoma, Maryland, and others) define automated systems more broadly, which is one more reason to keep dialing manual.
2. **Do Not Call rules apply.** A callback selling a discovery call or an audit is telemarketing, and an owner's mobile can count as a "residential subscriber" (47 CFR 64.1200(c)(2), (e); courts decide mixed-use phones case by case). Inquiries are exempt two ways: an **established business relationship** lasts **3 months after an inquiry** and 18 months after a purchase (§ 64.1200(f)(5)); and **prior express invitation or permission** must be a signed written agreement naming the number (§ 64.1200(c)(2)(ii)), which a checkbox can be under E-SIGN.
3. **WAITLIST creates a gap.** A reservation made May 3 is called Sep 7, after the inquiry exemption has lapsed. **So `form_audit_reserve` uses an affirmative checkbox** asking for calls at the opening. **Phone reservations are weaker.** The receptionist reads `phone-reserve-v1` and logs the yes, but a spoken yes can count as a signature under E-SIGN only while a recording of it exists (the FCC has accepted voice recordings for written consent; verify for § 64.1200(c)(2)(ii)), and recordings are deleted at 90 days. So:
   - **E01 for a phone reservation** carries a "Yes, call me when audits open" link to a techeo.com page that records `phone-reserve-confirm-v1` when the visitor presses its button. The button records it, not the link, because mail scanners open links.
   - **The vendor's call-log entry** (timestamp, agent, `phone-reserve-v1`, yes) goes into `app.consent_evidence` for 5 years, independent of the recording.
   - **F2's call list flags** any phone reservation more than 3 months old at the opening that lacks the confirmation. Those leads are contacted by email only (E03, and an E04 variant asking them to book by reply or at `/audit`), or called only after a National Do Not Call Registry check shows the number isn't registered.
   - These are change requests to `08` (E01, F1, F2) and `06` (the confirmation page and its consent row). If the vendor can keep the consent part of each reservation call for 5 years instead, counsel says whether that suffices (Q4).
4. **Internal Do Not Call policy** (§ 64.1200(d)): written and available on request, staff trained, requests recorded and honored for 5 years, and callers giving their name, Techeo's name, and a contact number. `08`'s `do not contact` status and the `suppression` class meet it; **the one-page policy is a launch deliverable.**
5. **Caller ID** must show a number that reaches Techeo in business hours (47 CFR 64.1601(e)); callbacks display [TECHEO_PHONE] (`03`). `08` #receptionist makes this must-have 9: "Outbound callbacks display [TECHEO_PHONE] as caller ID (47 CFR 64.1601(e))." **The FTC's Telemarketing Sales Rule** exempts most business-to-business calls and inbound calls a customer initiates (16 CFR 310.6(b); verify), but its 2024 amendments extend the ban on misrepresentation to B2B calls; the receptionist's "never" list (`08`) covers it. An outbound callback to someone who inquired is still telemarketing under the TSR; the inquiry matters only for the Do Not Call Registry. Techeo's callbacks are exempt because they are B2B. A call to a homeowner is not B2B, and `08` routes those away.
6. **Revocation.** Since Apr 11, 2025, a revocation made by any reasonable means must be honored within 10 business days. The "revoke all" provision was delayed to Jan 31, 2027, and revisions separating marketing from informational revocations were circulated Sep 9, 2026 for a Sep 30 vote (verify the outcome). Techeo stops calls on the spot and email within 1 business day, and one stop ends all marketing on every channel, which satisfies every version.
7. **One-to-one consent.** The FCC's 2023 rule requiring written consent to name one seller at a time was **vacated by the Eleventh Circuit on Jan 24, 2025** (*Insurance Marketing Coalition v. FCC*); law-firm reports say the FCC has since deleted the vacated text (verify 47 CFR 64.1200(f)(9)). It governed autodialed and prerecorded marketing, which v1 doesn't use, and every Techeo consent names only Techeo anyway. Since *McLaughlin Chiropractic v. McKesson* (2025), courts need not defer to FCC interpretations, so counsel reads the statute as well as the rules.

### Calling hours and attempts {#quiet-hours}

The federal window is 8 a.m. to 9 p.m. at the called party's location (§ 64.1200(c)(1)). Compliance guides report about 18 stricter states, for example 8 p.m. endings (Florida and others), a 9 a.m. start in Texas, 9 a.m. to 6 p.m. weekdays in Rhode Island, and possibly a 10 a.m. start in Kentucky (verify each, including any exemption for calls the person requested). A blanket 09:00 start would break D11 and `03`'s SLA line everywhere to satisfy a few states: version B's "within 15 minutes, 8 a.m. to 6 p.m. [TZ]" for any lead in [TZ] submitting before 08:45, and both versions' "by 10 a.m." for Mountain leads when [TZ] is Eastern. So the rule is state by state.

**The rule for every outbound call to a lead, first callback and opening-day calls included:** business days only, never on `08`'s holidays; within the lead's state window from the calling-hours table below; and **at most 3 attempts per request in any rolling 24 hours** (Florida's cap, applied everywhere), which `08`'s cadence already meets.

**Calling-hours table** (`calling_rule_version` = `hours-2026-10-v1`; **counsel verifies before launch**; a change is a new version, as with the recording table):

| Window, lead-local | States |
|---|---|
| 08:00–20:00 (the default: `08`'s guard as written, with the 20:00 end covering the 8 p.m. states) | Every state not listed below, and the District of Columbia |
| 09:00–20:00 | Texas, and any state counsel adds |
| 09:00–18:00, weekdays | Rhode Island |
| 10:00–20:00 | Kentucky, only if counsel confirms its statute reaches requested callbacks |

`08`'s guard reads the lead's `state_code` against this table (a change request to `08` #sla and `06`'s `server/sla.ts`), which keeps D11's 08:00 start everywhere else. Recommendation to `08`: a dial the guard blocks falls due at window-open plus 15 minutes the same day, not the next day, and is reported with the after-hours events, as `08` already does for time-zone differences. Counsel says whether version B needs "where state calling hours allow" for the later-start states (Q5).

### Consent texts, by form {#consent-texts}

`05` #c-fields renders both patterns. A checkbox is **never pre-checked**, its full text is the label at body size, and it sits directly above the submit button. The texts are stored verbatim in `app.consent_versions`; any word change creates a new id.

| `consent_version` | Form | Pattern | Text |
|---|---|---|---|
| `reserve-v1` | `form_audit_reserve` | **Required checkbox** | Yes, call me at the number above about this reservation, including when audits open, and email me about it and about Techeo's services. Calls may be recorded for quality. I can ask Techeo to stop at any time. See our [Privacy Policy] and [Terms of Use]. |
| `qualify-v1` | `form_audit_qualify` | Statement above the button | By continuing, you're asking Techeo to call you at the number above and email you about this request and our services. Calls may be recorded for quality. You can ask us to stop at any time. See our [Privacy Policy] and [Terms of Use]. |
| `teardown-v1` | `form_teardown_request` | Statement | By sending this, you're asking Techeo to call you at your mobile number and email you about this teardown, including the results and one question at the end. Calls may be recorded for quality. You can ask us to stop at any time. See our [Privacy Policy] and [Terms of Use]. |
| `calc-v1` | `form_calculator_email` on `/#calculator` | Statement beside the button | We'll email your three numbers and the result to this address, once. No calls and no newsletter. See our [Privacy Policy]. |
| `calc-v2` (v2) | `form_calculator_email` on `/calculator` | Statement beside the button | We'll email the numbers you entered and the result to this address, once. No calls and no newsletter. See our [Privacy Policy]. |
| `market-v1` (v2) | `form_market_check` | Statement | By sending this, you're asking Techeo to call and email you about your market check and our services. Calls may be recorded for quality. You can ask us to stop at any time. See our [Privacy Policy] and [Terms of Use]. |
| `referral-v1` (v2) | `form_partner_referral` | Statement | By sending this, you confirm you're allowed to share the shop's business details and, if you give them, its owner's name and email with us, and you're asking Techeo to call and email you about this referral. Apart from the test calls, we won't contact the shop unless its owner asked for the teardown to go to them directly. Calls may be recorded for quality. See our [Privacy Policy] and [Terms of Use]. |
| `phone-reserve-v1` | Receptionist, `08` inbound step 5 | Spoken; the answer is logged and recorded | Before I save your reservation: Techeo will call you at {number} about it, including when audits open on {date}, and email you at {email}. Calls are recorded. Is that OK? |
| `phone-reserve-confirm-v1` | E01, phone reservations only (`#tcpa-analysis` item 3) | A link to a techeo.com page; the page's button records it under E-SIGN | Button: "Yes, call me when audits open." Above it: By pressing this, you're asking Techeo to call you at {number} about your reservation, including when audits open on {date}, and to email you about it and about Techeo's services. Calls may be recorded for quality. You can ask us to stop at any time. See our [Privacy Policy] and [Terms of Use]. |
| `phone-book-v1` | Receptionist, `08` inbound step 4 (OPEN), before booking | Spoken; the answer is logged and recorded | Blake will call you at {phone}, and we'll email you at {email} about the call and our services. Calls are recorded. Is that OK? |
| `readout-rec-v1` | The founder, at the start of each readout (`#recording`) | Spoken; the answer is on the recording and logged | I record the readout so you can share it with your team. Is that OK with everyone on the line? |

**Authorizations** (`08` #form-rules item 6: not marketing consent; approved here):

| Field | Approved text |
|---|---|
| `test_call_consent` legend | As part of the audit, we call your office and use your web form the way a customer would, and we don't tell you when. We take notes, not recordings. Is that OK? |
| `authority` | I own or manage this business, and I'm asking Techeo to place test calls to it and use its web form. *(As `03` wrote it.)* |
| `owner_requested` | The owner has asked to receive this teardown from Techeo directly. *(As `04` wrote it.)* |

**Future texting (not v1).** If texts are ever automated, add a separate, optional, unchecked box that is never required to reserve or buy: "Text me about this request. Techeo may send automated texts about my request to the mobile number above, about 1–4 per request. Message and data rates may apply. Reply STOP to stop, HELP for help. Agreeing isn't required to buy anything." First: A2P 10DLC registration (verify carrier rules), a `/privacy` line that mobile numbers and text consent are never shared for anyone's marketing, and counsel's review of state mini-TCPA laws.

**Done when:** every form posts a `consent_version` that exists in `app.consent_versions`; no checkbox renders checked; a reservation cannot be submitted without `reserve-v1`; the receptionist's intake log carries `phone-reserve-v1` or `phone-book-v1` with a yes; and on a staged opening, every phone reservation more than 3 months old either has `phone-reserve-confirm-v1` or is flagged on F2's call list.

## Techeo's own email: CAN-SPAM {#can-spam}

**What applies.** CAN-SPAM covers all commercial email, B2B included, and Techeo is liable for mail vendors send for it: up to **$53,088** per violating email (the 2025 figure, not adjusted for 2026; verify). Commercial messages need accurate headers; a non-deceptive subject; identification as an advertisement **unless the recipient gave affirmative consent**; a valid physical postal address; and a clear opt-out that works for at least 30 days, is honored within 10 business days, and costs no more than a reply or one web page. Transactional or relationship messages need only accurate headers.

**How Techeo meets it.**

1. **Affirmative consent.** The consent texts in `#consent-texts` ask for email "about … our services," so follow-ups to form leads don't need an advertisement label. *Counsel confirms.* The rule keys on `consent_version`, not on how the lead arrived: a C email to a lead with no services-email consent on record carries "This is a business email from Techeo." in the footer. That covers a discovery call booked by phone in OPEN without `phone-book-v1` (`08` inbound step 4, then E24), a referrer, and a press contact. `calc-v1` asks only for the result, so E20 (class C in `08`) relies on the visitor's request for that one message as affirmative consent (15 U.S.C. 7702(1)). Counsel confirms that, or `08` reclassifies E20 as S and removes anything promotional from it.
2. **Classes** (`08` #emails): **S** (confirmations, access lists, reminders, declines) are treated as transactional; **C** (E10, E14–E16, E19, E20, E24) are commercial. **Both carry the footer**, because several S emails mention the teardown or audit.
3. **Postal address.** [TECHEO_POSTAL_ADDRESS] must be a street address, a USPS-registered PO box, or a private mailbox at a commercial mail receiving agency registered under USPS rules (16 CFR 316.2). A registered agent's address qualifies only if the agent allows it as a mailing address and forwards mail (open question 12).
4. **One suppression list** across Resend and the founder's Workspace mail. An opt-out stops all C email within **1 business day**; S email about a purchase in progress continues.
5. **Cold teardown emails** (`techeo.gtm` #teardown) are commercial email **without** consent: they need the address, an opt-out, and a plain advertisement line ("This is a business email from Techeo.") under the signature. Counsel confirms the line. The script as written contradicts it: it opens "I own an HVAC company in {market}, so this is peer to peer rather than a sales email" and never names Techeo. **Change request to `techeo.gtm` #scripts** (Teardown cold outreach): delete "so this is peer to peer rather than a sales email"; open with "I own Homets Air and Heat in [HOMETS_METRO] and run Techeo, which does this work for shops outside my market"; sign "Blake [FOUNDER_SURNAME], Techeo"; and append the advertisement line and the C footer.

**Final footers** (replace `08`'s draft):

- **C:** "Techeo LLC · [TECHEO_POSTAL_ADDRESS] · You're getting this because you {reason}. To stop marketing email from Techeo, reply "stop" or use this link: {unsubscribe_link}. We'll stop within one business day."
- **S:** "Techeo LLC · [TECHEO_POSTAL_ADDRESS] · This email is about your {request_label}. To stop all other email from Techeo: {unsubscribe_link}."

`{reason}` values: "reserved an Engine Audit slot," "requested a free phone teardown," "asked for your calculator result," "bought an Engine Audit," "talked with Blake about an Engine Audit."

**Done when:** every template renders its footer; the unsubscribe link works without login and suppresses within one business day; `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present (large mailbox providers require one-click unsubscribe only from bulk senders, but it costs nothing); and `08`'s opt-out test passes.

## Call recording {#recording}

**Techeo's receptionist line records every call** (`08` #receptionist). Callers can be in any state, and California courts apply California's all-party rule to calls with Californians even when the recorder is elsewhere. So:

- **Every inbound call and every callback discloses recording in the agent's first turn, before any substantive question or answer** (`08` requirement 5). The callback opener does it in its first sentence ("…from Techeo on a recorded line…"). `08`'s inbound greeting discloses it in its second sentence: "Thanks for calling Techeo. Calls are recorded for quality. This is [first name]. How can I help?" Continuing after notice is generally treated as consent; counsel confirms the wording works in every all-party state.
- The vendor holds **written consent from its agents** to recording and to Techeo's QA review (`08` requirement 5).
- Recordings stay in the vendor's portal, are deleted at 90 days, and are never published or shared.

**Founder calls.** Discovery calls are not recorded by default. Readouts are recorded (`03`). The founder says at the start: "I record the readout so you can share it with your team. Is that OK with everyone on the line?" (`readout-rec-v1`). If anyone says no, don't record. The answer is logged in `app.consent_evidence` either way, and the file is kept as `#retention`'s readout row says. **No AI note-taker in v1** (open question 9): it is a recording, a new processor, and a possible voiceprint issue under Illinois' BIPA, and class actions filed in 2025 targeted note-takers that recorded without every participant's consent (verify their status).

**Teardown and audit test calls: notes-only by default** (`techeo.legal` #compliance rule 2). The walkthrough records Techeo's own screen and voice, not the call. Recording is allowed only if **both** the target's state and the caller's state are `one_party`, the owner asked in writing, and the table below was reviewed within 12 months (`08` F5).

**State recording table** (`recording_rule_version` = `rec-2026-10-v1`; **counsel verifies before the first test call**):

| Value | States |
|---|---|
| `all_party` | California, Delaware, Florida, Illinois, Maryland, Massachusetts, Montana, Nevada, New Hampshire, Pennsylvania, Washington |
| `unclear` (treated as `all_party`) | Connecticut (all-party for civil liability), Michigan (split case law), Oregon (all-party in person, one-party by phone), Vermont (no statute) |
| `one_party` | Every other state and the District of Columbia |

**Inconsistencies to fix.** `04`'s `/partners` `#what-they-get` and `/pricing`'s Booking Rate Teardown paragraph now follow the default, like `/teardown`. Three sources still state the older rule:

1. `techeo.gtm` #teardown, "Consent warning": "In a two-party-consent state, do not record" implies recording everywhere else. Change it to "Default to notes-only; record only where both states are `one_party` and the owner asked in writing" (a change request to `techeo.gtm`).
2. `techeo.offers` rung 0, "Constraint": the same wording, and the same change (a change request to `techeo.offers`).
3. `techeo.audit` says section 3 of the report uses "a recording of their own phone failing." Under the default, it is timestamped notes unless the client supplied recordings with the warranty `techeo.legal` requires.

`03` `#notes-not-recordings` says "your OK as the owner doesn't cover your employee." That is the right reading in all-party states; counsel confirms before launch.

## Performance claims and the claims ledger {#claims}

**What applies.** The FTC Act requires a reasonable basis for every objective claim **before** it is published, at the level of proof the claim implies. "Measured in our own ServiceTitan" is a claim about the proof itself. D7 sets the publishing rules; the ledger is how compliance with them is proven.

**The ledger** is a sheet in the Drive folder `Compliance/claims-ledger`. The build reads a generated `src/content/claims.json` with public fields only (`05`'s `ready` flag).

| Column | Content |
|---|---|
| `claim_id` · text · where | `CL-001`…; the exact public wording; every page and anchor it appears on |
| Type · token | Homets metric, client metric, operational ("Answered live," "We never see your card number"), price or term, platform fact, or target; any `[HOMETS_*]` token |
| Raw value · published value | D7 rounds down; the raw value is kept in case `03` open question 7 changes the rule |
| Window · source | The measurement period shown beside the figure; system, report, filters, and definitions ("qualified caller") |
| Evidence | The export or screenshot, redacted with opaque fills (`05` #pii); originals stay in Homets' or the client's systems |
| Approved · status · review by | The founder, plus the client's dated written approval for client figures; `draft`, `ready`, or `withdrawn`; 12 months for metrics and platform facts (`07` #numbers) |

**Rules.** No row, no claim: the build fails on a claim id that isn't `ready` or is past its review date. Targets are labeled as targets (D8), and benchmarks are never presented as fact (`07` #numbers). No competitor is named. If evidence fails or approval is withdrawn, the row is withdrawn and the page changes within 1 business day. Operational claims are re-checked monthly: "Answered live" against the vendor's log, and the SLA line against `08`'s weekly report.

**Done when:** every number in `03` #numbers and every operational promise in `#promises` has a `ready` row, and the founder has signed the sheet before the Nov 20 deploy.

## Endorsements, testimonials, and case studies {#endorsements}

**What applies.**

- **Endorsement Guides (16 CFR Part 255, revised 2023):** honest views of real experience; **material connections disclosed clearly and conspicuously, next to the endorsement**; a featured result implies typicality unless substantiated or the generally expected result is disclosed.
- **Consumer Reviews and Testimonials Rule (16 CFR Part 465, effective Oct 21, 2024):** bans fake or misattributed testimonials, undisclosed insider reviews, reviews bought on condition of sentiment, and review suppression, with civil penalties.

**Techeo's connections, and the disclosure lines:**

| Situation | Connection | Disclosure (placement) |
|---|---|---|
| Homets figures (`#proof`, v2 Homets case study) | Common ownership. These are Techeo's own claims, not an endorsement | In the strip's source line, not only the footer: "Source: Homets Air and Heat's own ServiceTitan reports. Homets is owned by Techeo's founder and is not a client. Rounded toward the less flattering figure." (`03` #proof) |
| Design-partner case study | Reduced fee in exchange for the case study, a video, and introductions | Under the H1, above the first number (`04` `ConnectionDisclosure`): "{Company} was one of Techeo's {design_partner_count} design partners. It paid a reduced fee for its first six months in exchange for sharing its data, publishing this case study under its own name, recording a video, and introducing us to two peers." `{design_partner_count}` is the number of design partners ever signed, written in words and read from the `/pricing` content file (`04`), so the sentence stays true if fewer than `techeo.plan90`'s three are signed. **Never state the discount** (D6). |
| Design-partner quote or video | Same | Under the quote: "— {Name}, {Title}, {Company}. Design partner: paid Techeo a reduced fee in exchange for this case study." For video, above the player **and inside it**, on screen for the first 5 seconds and spoken at the start |
| A design partner's introductions | Owed under the agreement | The partner says: "Heads up: I'm a Techeo design partner. We got a reduced rate for sharing our results and making a couple of introductions like this one." |
| Paying-client case study | The relationship only | "{Company} is a paying Techeo client. It received nothing for this case study." (only if true) |
| Blake's posts in owner groups, podcasts, forums | Owns Techeo and Homets | "I own Techeo (and Homets Air and Heat)." whenever Techeo's work comes up |
| Referral partners (v2) | None while no fee is paid; a reciprocal-referral understanding would be one | If it exists: "We refer clients to each other." |

**Typicality.** Every case study and the index carry a **line covering every client**: "Across all {n} Booking Sprint clients so far, the day-90 change in qualified-caller booking rate ranged from {min} to {max} points," counting clients that didn't move and clients never published. Covering the whole population substantiates the line and answers the Guides' "generally expected results" test. But D7 allows client figures only "from a client's own data with written approval," and at small {n} the min and max are single clients' exact results. At n = 2 with one client unpublished, the line would expose that client's number, and `04` now requires the line from exactly that point. So:

- Every MSA and the Design Partner Agreement grant **consent to inclusion in aggregate, unattributed results** (a change request to `techeo.legal` #contracts for the MSA; the Design Partner Agreement list below).
- The line is published **only once n ≥ 5 and every counted client has that clause**. Until then, `04`'s `#typical` text ("We don't know yet, and we won't pretend to…") stands.
- `04` #case-studies-index and every T8 `#typical` apply this rule.

**Done when** the line is generated from the ledger in the same build as any new case study, and the build fails if a counted client lacks the clause.

**The Design Partner Agreement must say** (Week 9, with counsel): the reduced fee doesn't depend on the results, the sentiment, or what the case study says; the partner's words are its own, never scripted; the partner approves every number and the final text and may withdraw approval (the page comes down within 1 business day, `04`); consent to inclusion in aggregate, unattributed results (the all-clients line); consent to the named URL and metro (`02` open question 5); the disclosure duty for introductions; D9 releases; evidence-pack retention.

**Never:** a review of Techeo by a Homets employee, family member, or contractor anywhere; reviews asked for only from happy clients, or paid for; an anonymized case study (`01`); testimonials or logos in v1 (D7).

## Affiliation disclosure {#affiliation}

**Why.** D8 and `techeo.guardrails` #coi item 3 require disclosure before anyone asks. Legally, common ownership with a potential competitor is a material fact to a contractor choosing a vendor, and leaving out a material fact can itself be deceptive under the FTC Act.

**Final footer text** (every page, `/llms.txt`, and the receptionist's knowledge card, word for word):

> **Who owns Techeo.** Techeo LLC is owned by Blake [FOUNDER_SURNAME], who also owns Homets Air and Heat, an HVAC company in [HOMETS_METRO]. We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets, and we work with one client per market per trade. Client data is never used for Homets. [How we keep the two apart]

**Variant, required if the radius does not cover Homets' whole media market** (`03` open question 8; `techeo.guardrails` #coi defines the zone as the DMA plus a radius): "We take no clients within [EXCLUSION_RADIUS_MILES] miles of Homets or anywhere in its [HOMETS_METRO] market, and…" Switch every surface at once.

**`#operator`.** The seven items in `03`'s disclosure list are approved, each on one condition: the matching MSA clause exists and counsel has reviewed it (`03` QA check 13). "Separate bank accounts, cards, and books" must be true on launch day (`techeo.legal` #formation).

**Acceptance:** identical text on every page, including 404 and `/thanks/*`; no pronouns; "owned by" is accurate (counsel confirms if the founder holds either company through another entity or jointly with a spouse); and the text is in the HTML, not an image.

## Terms of use (`/terms`) {#terms}

`03` #legal fixes the outline. These are the clause requirements; counsel drafts the final text. **Key clauses, drafted:**

| Section | Requirement and draft |
|---|---|
| Who these terms cover | The site, reservations, teardowns, and online audit purchases; the MSA and SOW govern retainers and prevail |
| Using the site | No misuse, no automated form submissions, no submitting for a business without authority. **Automated reading follows `robots.txt`** (D13, `07`); a boilerplate anti-scraping clause would contradict it. |
| What the site's numbers mean | "Nothing on this site is legal, tax, financial, or HVAC or plumbing advice. Results we describe are targets, not promises; each depends on your data, your team, and your market. Examples are labeled as examples." |
| The calculator | "The calculator takes the numbers you enter, works out the booked jobs between your booking rate and our 70% target, multiplies them by your average revenue per job, and rounds down. The result is an estimate from your own inputs, and not a forecast of what you will earn or what we will deliver. The 70% figure is the target Homets holds its own desk to, not an industry average." (`08` #calculator's formula. At v2, the clause adds that `/calculator` sums the other lines you fill in, each shown step by step, and rounds the total down.) |
| Engine Audit purchase terms | $1,500 through Stripe Checkout, a Stripe-hosted invoice, or a bank transfer to Techeo LLC's operating account (`08` F10; under lean v1 the invoice is the only route, brief D16); 7 business days from the last access item and cleared payment; the $1,500 credit against the first month of a retainer signed within 30 days of the readout (`03` open question 1), once per buyer, non-transferable, no cash value; refunds exactly as `#faq-audit-refund` (`03` open question 2); failed ACH per `08` F4; the buyer authorizes test calls and form use; a perpetual license to the report and recording while Techeo keeps its frameworks (`techeo.legal` #contracts); the audit only reads, and its data serves the audit only, never Homets |
| Reservations · teardowns | "A reservation holds your place in line. It costs nothing, obliges you to nothing, and doesn't hold your market; only a signed agreement does." Teardowns: free, owner or manager authority, notes not recordings, no emergencies, booked test visits canceled within the hour |
| Our content · links | Copyright Techeo LLC; Homets' name and images under license; third-party marks per `#trademarks`; no responsibility for linked sites, Stripe and Cal.com included |
| Disclaimers and limits of liability | Provided as is. "To the extent the law allows, Techeo's total liability arising from the site or an Engine Audit is limited to what you paid Techeo in the 12 months before the claim, or $100 if you paid nothing." No indirect or consequential damages, matching the MSA's cap at fees paid |
| Governing law · changes | [TECHEO_STATE] law and courts, no arbitration (open question 11); version and date shown, and a purchase is governed by the version accepted at checkout |

**Formation.** The Stripe Checkout checkbox (`consent_collection`, `03` #book) is the assent. `06` stores the accepted terms version on each purchase (`audit_purchases.terms_version`, a schema request). **Done when** the purchase terms match `/audit` #price, `#faq-audit-refund`, and the Stripe description word for word.

**Invoice and bank-transfer purchases (`08` F10).** There is no checkbox, so the invoice carries the assent: it names the `/terms` URL and version and states, above the amount, "Paying this invoice accepts the Engine Audit purchase terms at {url}, version {n}." `06` records that version in `audit_purchases.terms_version` when the payment clears. The 7 business days start once the last access item is in **and** the funds have arrived. A refund goes back by the route the payment came in. **Done when** the invoice template carries the terms line and a test invoice payment records `terms_version`.

## Accessibility {#accessibility}

**Target: WCAG 2.2 Level AA** (D10), which adds, among others, Focus Not Obscured (2.4.11), Target Size (2.5.8), Consistent Help (3.2.6), Redundant Entry (3.3.7), and Accessible Authentication (3.3.8) to 2.1.

**Legal context, stated carefully.** ADA Title III bars disability discrimination by places of public accommodation, but the Justice Department has no Title III web regulation. Its 2024 rule (WCAG 2.1 AA) covers only state and local governments, and in April 2026 the Department reportedly extended those compliance dates by a year (verify the rule, its date, and the new deadlines). Courts are split on whether a website with no physical location is covered; several circuits require a link to a physical place. A website-only B2B service is a weaker target than a retailer, but thousands of suits and demand letters are filed each year, heavily in New York, Florida, and California, where the Unruh Act adds at least $4,000 in statutory damages per violation. The practical reason outranks the legal one: an owner reading on a phone at 200% zoom is the buyer.

**No overlay widgets.** In April 2025 the FTC finalized a $1 million order against accessiBe for claiming its widget made sites WCAG-compliant. Techeo installs none and claims nothing its own testing hasn't verified.

**Testing standard** (`06` #ci runs the automated layer; `11` schedules the rest):

| Layer | Method | When | Pass |
|---|---|---|---|
| Automated | axe-core in Playwright (WCAG 2.2 A/AA tags) at 320 and 1280 px in all three states; pa11y-ci second | Every pull request | Zero violations |
| Keyboard | Skip link, order, visible focus never hidden by the sticky header, no trap, errors reachable, forms submit | Every release | Checklist complete |
| Screen readers | **VoiceOver and Safari on iPhone** first (the audience), then NVDA on Windows and TalkBack on Android: reserve, qualify to Stripe, teardown, calculator, homepage | Every release | Each task done without sighted help |
| Zoom and reflow | 200% text; 400% zoom (1.4.10); text spacing (1.4.12); forced colors | Every release | Nothing lost; no horizontal scroll |
| Third-party steps | Stripe Checkout, Cal.com, any Turnstile challenge, by keyboard and VoiceOver | Launch; each OPEN flip | Usable, or the phone alternative sits beside the link |
| Documents and media | Tagged PDFs checked with a PDF accessibility checker; v2 video with edited captions and an HTML transcript | Each file | Pass |

Someone other than the builder runs the screen-reader pass where possible; the founder signs the release sheet.

**Accessibility statement contents** (`03` fixes the H2 order):

- **Our standard:** "We aim to meet WCAG 2.2 Level AA." Never "fully compliant," "ADA compliant," or "certified."
- **How we test:** the table above in plain words, with the date and scope of the last full check.
- **What we know isn't right yet:** each issue dated with a fix date, third-party checkout and scheduling limits included.
- **Another format:** the calculator's math by phone; audit reports as accessible PDF or plain text on request.
- **Report a barrier:** [TECHEO_PHONE] (711 relay welcome), post, or the text-based address (open question 3).
- **Response:** acknowledged within 1 business day; a barrier on a reserve, purchase, or teardown path is worked around by phone that day and fixed within 5 business days; others within 30 days.

**Done when:** every layer passes on the launch build, and the statement makes no claim the latest check didn't verify (`03` acceptance).

## Trademarks {#trademarks}

**Techeo's own mark.**

- **Clearance first** (`techeo.legal` #formation, Week 1). A class 35 conflict stops the build before copy hours are spent (`06` open question 12).
- **™ until registered; ® only once the registration certificate issues**, never on filing or allowance, because misusing ® can be held against the owner. `05` keeps the wordmark symbol-free in v1. After clearance, `/terms` and the footer legal line add "Techeo™ is a trademark of Techeo LLC"; after registration, "Techeo® is a registered trademark of Techeo LLC."
- **Filing:** standard characters "TECHEO" in class 35 (covering the lowercase wordmark) in Phase 2 (`techeo.plan90`); counsel advises on the filing basis and class 42.
- **Product names** (Engine Audit, Booking Sprint, Demand Engine, Booking Rate Teardown, MEO): knockout searches before v2 `/pricing`; no ™ on descriptive names.

**Other companies' names: nominative use only.**

| Rule | Applied |
|---|---|
| Words only, only as needed | "ServiceTitan," "Google Ads," "Local Services Ads," "Google Business Profile," "Angi," "Thumbtack," "Yelp," "Stripe," "Cal.com" in plain text. **No logos, stylized type, or brand colors.** |
| No implied partnership or certification | Never "ServiceTitan partner," "certified," "official," "approved," or a "Google Partner" or marketplace badge **unless earned and used within that program's badge rules.** "Marketing for contractors on ServiceTitan," never "ServiceTitan's marketing agency" (`07` C4). |
| No AI product names in visible copy | `04` open question 12's default, agreed |
| No third-party screenshots on the site | Figures are redrawn as Techeo's own tables; ServiceTitan screenshots stay in the internal evidence pack, because the client's software agreement may treat the interface as confidential |
| Disclaimer | On `/terms`, and at the foot of any page whose title or H1 names a third-party mark: "ServiceTitan, Google, Angi, Thumbtack, and Yelp are trademarks of their owners. Techeo isn't affiliated with, endorsed by, or a partner of any of them." |

**Done when:** a build grep finds no third-party logo file and no "partner," "certified," or "official" next to a third-party name.

## Licenses and releases {#releases}

**The Homets → Techeo license** (`techeo.legal` #ip; drafted in Week 5). For the website it must expressly grant Techeo LLC:

1. The name **Homets Air and Heat**, its marks, livery, uniforms, and signage, in photos, copy, case studies, and `/llms.txt`.
2. Aggregate Homets metrics as ratios, medians, and deltas signed off by the founder (D7), and redacted report extracts as internal evidence.
3. Photographs of Homets premises, vehicles, and equipment.
4. SOP excerpts with price tokens stripped (`03` open question 10), and a link to Homets' website (`02` open question 3).
5. Terms: stated consideration; removal on 30 days' notice from Homets; on a sale of Homets, a 90-day wind-down with published case studies surviving unless the buyer objects; co-owner or lender consent if any exists (`techeo.legal`).

Counsel also confirms Homets' exact legal name and every name the license covers: parts of the SOP library say "Home+ Air and Heat" (Home+ is also a membership-plan name), while the site says "Homets Air and Heat" (D8).

**Likeness releases** (D9, `05` #photography). One per identifiable person, before the image is published:

- **Parties:** the person and **Techeo LLC**, in an agreement separate from Homets employment (`techeo.guardrails` #coi item 6), with a nominal payment from Techeo's account (open question 8).
- **Voluntary:** not a condition of employment at Homets; saying no has no consequence.
- **Scope:** Techeo's website, social profiles, presentations, print, and case studies; cropping and black-and-white editing; **no name or job title published** (`01` R1).
- **Duration:** perpetual for published materials, with removal from the website within 30 days of a written request after the person leaves Homets.
- **Language and filing:** English and Spanish versions (as with `content/governance/acknowledgement.es.md`); the release ID in `05`'s photo log and the scan in `Compliance/releases/`.

**The founder** also licenses name, likeness, signature, and bio to Techeo LLC, so the rights stay clean if Techeo takes an investor or is sold. **The photographer** assigns copyright, or licenses editing, redaction, black-and-white conversion, and **sublicensing to organizers and press** for the portrait download (`03` `#operator`); without it, the download doesn't ship. **Property releases** cover any employee's home used as a location (`05` P5). **No customer, customer home, vehicle, or information appears in any image,** checked by `05`'s OCR and 200% review.

**Done when:** every image in `src/assets/photos/` has a photo-log row with a release ID (or "no identifiable person"), the license covers it, and the photographer's agreement is filed.

## Children's privacy and remaining boilerplate {#boilerplate}

- **Children.** Not directed to children, so COPPA's duties don't attach. `/privacy`: "techeo.com is for businesses. It isn't directed to children, and we don't knowingly collect personal information from anyone under 18. If we learn we have, we delete it."
- **No user-generated content,** so no DMCA agent designation; revisit if comments or uploads are added.
- **Electronic records:** consent and assent are captured under E-SIGN; `consent_versions` and Stripe's consent record are the evidence.
- **Entity identification:** the footer legal line names Techeo LLC and [TECHEO_STATE] on every page (`03`).
- **Homeowner safety:** `#faq-homeowner` and the receptionist's emergency line (`08`) stand; the terms say Techeo does no HVAC or plumbing work. **Sales tax** on the audit is `06` open question 14.

## Counsel review package {#counsel-package}

**When.** `11` owns the schedule: this package goes to counsel with the MSA and SOW in Week 5 (`techeo.plan90`; `11` L1), and counsel's drafts and final text follow `11` L2–L3. `10`'s own gate is counsel's sign-off on the consent texts and the analytics decision by **Mon Nov 16, 2026** (`09` #consent). A second, smaller review in Week 9 covers the Design Partner Agreement. The v2 review follows `11` #v2.

**Cost.** `11` budgets counsel (D15). **Change requests to `11`:**

- (a) Rename "Counsel, three legal pages" to "Counsel, website compliance package (`10` #counsel-package)" and re-quote it for the full scope: the three pages plus the consent texts, the TCPA and calling-hours positions, the recording table, CAN-SPAM, the claims ledger, the Homets license, the releases, the photographer agreement, the trademark clearance, and the questions below. A flat fee for three pages may not cover it.
- (b) Add "Independent accessibility audit, before v2: $1,500–$3,000 (assumption)" to `11`'s v2 cost table (open question 14).
- (c) Add the first case study's disclosures and the all-clients line, `/partners`, and `/markets` to the v2 counsel review — `11` #v2 now includes them alongside `/pricing` and the case-study approval form.

**What to send:** this document; `03` #legal plus `#operator`, `#promises`, `#faq-call-recording`, `#faq-audit-refund`, and `/teardown` `#notes-not-recordings`; `08`'s receptionist greeting, callback opener, F5, and email classes; `09` #touch-fields; the calling-hours table; the cold teardown email (`techeo.gtm`); the Stripe Checkout text; the claims ledger template; the Homets license draft, likeness release, and photographer agreement; the trademark clearance result.

**Questions to ask:**

1. Does the policy satisfy CalOPPA, Delaware, and Nevada, whether or not CalOPPA reaches business-only collection?
2. Is Techeo outside the CCPA and every other state privacy law at projected scale, including the common-control rule with Homets? Is licensed display of Homets' marks "common branding"? Are the re-evaluation triggers right?
3. Is "no banner, no analytics under GPC or DNT" defensible, and does a veto of SB 690 change it? May the `techeo_touch` record keep capturing under GPC and DNT, given that it leaves the browser only inside a submitted form?
4. Confirm that hand-dialed live callbacks need no consent under § 227(b) or any state mini-TCPA we'd call into. Does `reserve-v1` satisfy § 64.1200(c)(2)(ii) for calls more than three months after a reservation? Does a spoken, logged `phone-reserve-v1` count as a signed writing once the recording is deleted, and is the `phone-reserve-confirm-v1` fallback, or a 5-year consent clip, right? How are owners' mobiles treated?
5. Which state calling-hour, attempt, and telemarketer-registration laws reach inquiry callbacks in [TECHEO_STATE] and the first 20 target markets? Is the calling-hours table right, including Texas, Rhode Island, Kentucky, and the 8 p.m. states? Does `03`'s version B need "where state calling hours allow"?
6. Is the recording table right, including the interstate rule, and does a disclosure in the agent's first turn, before any substantive exchange, suffice in every all-party state?
7. Are unrequested test calls and test form submissions (outbound teardowns; partner "to me" requests) lawful everywhere we'd call?
8. Does the consent wording remove the advertisement label from follow-up email, and does keying it on `consent_version` cover phone-booked leads? Is E20 covered by the visitor's request? Is the postal address valid? Does the cold teardown email comply, given that the current script says "I own an HVAC company in {market}, so this is peer to peer rather than a sales email" and `#can-spam` item 5 replaces it?
9. Are the material-connection lines adequate without the discount amount? Does the all-clients line meet the typicality requirement, and is `04`'s "We don't know yet" text adequate while fewer than five clients are counted? What must the Design Partner Agreement and the MSA say, including the aggregate-results clause?
10. Terms: [TECHEO_STATE] venue without arbitration; the liability cap; assent through Stripe's checkbox; the refund policy.
11. What is Title III exposure for a website-only B2B business in our circuit? Does the accessibility statement overclaim?
12. Filing basis and classes for TECHEO; whether our third-party name uses are nominative.
13. Does the Homets license cover `#releases`, including a sale of Homets and the naming discrepancy?
14. Are the retention periods right, and what breach-notice duties could the site's data create?
15. Is the affiliation disclosure accurate, and does "Client data is never used for Homets" match the MSA exactly?

## What `11`'s launch checklist must include {#launch-gate}

`11` owns the checklist. v1 does not go public on Fri Nov 20, 2026 until each of these compliance items is done: counsel's sign-off filed in `Compliance/counsel/`; the `Done when` of `#privacy-contents`, `#rights` (one drill), `#cookies`, `#retention`, `#consent-texts`, `#can-spam`, `#claims`, `#accessibility`, `#trademarks`, and `#releases`; vendor terms filed (`#processors`); the internal Do Not Call policy written and trained; the recording table and calling-hours table versions confirmed with the receptionist vendor; and the vendor's caller ID confirmed as [TECHEO_PHONE].

## Open questions for the founder {#open-questions}

1. **Consent banner.** *Recommended default:* none, with GA4 off under GPC or DNT. Revisit if SB 690 is vetoed or a demand letter arrives.
2. **Honor Do Not Track like GPC?** *Recommended default:* yes. CalOPPA doesn't strictly require the disclosure here (`#privacy-why`), but honoring DNT costs a little data and makes the disclosure one plain sentence.
3. **A written route for privacy and accessibility requests.** *Recommended default:* one monitored Workspace group address, shown only on `/privacy` and `/accessibility` (`03` open question 9), answered within 1 business day.
4. **Rights for everyone, wherever they live.** *Recommended default:* yes, on the 10-business-day and 45-day clock.
5. **Retention periods.** *Recommended default:* `#retention` as written, including 90 days for calculator-only leads and 30 days for exclusion-zone answers.
6. **Calling window.** *Recommended default:* 08:00–20:00 lead-local on business days, with the stricter states' windows from the counsel-verified calling-hours table (Texas 09:00 start, Rhode Island 09:00–18:00 weekdays, Kentucky 10:00 if confirmed), at most 3 attempts in 24 hours. This keeps D11's 08:00 start everywhere else, at the cost of a few later first dials in those states.
7. **Reservation consent as a required checkbox.** *Recommended default:* yes; it is the written permission for calls made months later.
8. **Payment for likeness releases.** *Recommended default:* $50 a person from Techeo's account, English and Spanish forms.
9. **AI note-takers on calls.** *Recommended default:* none in v1; readouts recorded only after everyone on the line says yes.
10. **Trademark notice.** *Recommended default:* no symbol on the wordmark; "Techeo™ is a trademark of Techeo LLC" in the footer and `/terms` after clearance; ® only after registration.
11. **Arbitration in the terms.** *Recommended default:* none; [TECHEO_STATE] courts. Arbitration costs more than any dispute a $1,500 purchase can produce.
12. **Postal address.** *Recommended default:* a private mailbox at a USPS-registered commercial mail receiving agency, unless the registered agent confirms in writing that it accepts and forwards business mail.
13. **Design-partner disclosure.** *Recommended default:* "a reduced fee," no percentage (D6), unless counsel requires the amount.
14. **Independent accessibility audit.** *Recommended default:* none for v1; one before v2, at an assumed $1,500–$3,000, which `11` is asked to budget (its v2 budget doesn't include it yet).
15. **Results across all clients.** *Recommended default:* publish once five non-Homets clients have day-90 data and every one has signed the aggregate-results clause, counting clients that didn't move; until then, `04`'s `#typical` text stands.
