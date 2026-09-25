---
id: techeo.web.content
title: Content Roadmap — Standards, Articles, Case Studies
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, content, editorial-standards, insights, articles, case-studies, glossary, calendar, distribution, aeo, ftc]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.positioning, techeo.offers, techeo.audit, techeo.delivery, techeo.gtm, techeo.guardrails, techeo.legal, techeo.plan90, techeo.metrics]
order: 12
---

# Content Roadmap — Standards, Articles, Case Studies

**Techeo publishes only what an operator can answer from a desk that is actually measured: three articles in the 2026–27 quiet period, three named case studies for the September 2027 reopening, and a glossary once v3's entry criteria are met. Every piece answers one question an owner asks, every number carries its source and window, nothing new ships May 1 – Sep 6, the quiet-period pieces stay inside the Phase 2 cap, and nothing ships without Blake's approval.**

## Scope {#scope}

This document owns what Techeo publishes, to what standard, and when. It references the owners below and does not restate them.

| This document owns | Owned elsewhere (referenced, not restated) |
|---|---|
| Editorial standards, the question log, the AI policy, the workflow, and the fact-check | Templates, components, and page copy for insights, case studies, the glossary, and resources: `04` (`techeo.web.pages-later`) |
| Article topics, titles, slugs, and briefs | URLs, slug rules, and linking rules: `02` (`techeo.web.ia`) |
| The editorial calendar, Dec 2026 – Dec 2027 | Query map, answer-first rules, markup, `/llms.txt`, and the prompt test: `07` (`techeo.web.search`) |
| The case-study process, from week 0 to the video | Claims ledger, FTC rules, disclosure wording, releases, and trademarks: `10` (`techeo.web.compliance`) |
| The glossary list and its canonical definitions | UTMs: `09`; hours reconciliation: `11`; the engagement: `techeo.delivery` #sprint; the partner program: `techeo.gtm` #design-partners |
| Distribution, the QA checklist, and the never-publish list | |

## What Techeo publishes {#inventory}

| Type | Where | Release | By Dec 31, 2027 | Gate to publish |
|---|---|---|---|---|
| Articles | `/insights/<slug>` | v1.1 onward | 3 certain (A1–A3). A4–A7 are v3 articles and follow one a month from January 2028, only once v3's entry criteria are met (`#calendar`) | A question-log row, a brief, the fact-check, founder approval |
| Case studies | `/case-studies/<slug>` | v2, Tue Sep 7, 2027 | 3: Homets, plus partners 1 and 2. Partner 3 follows in early 2028. | Signed baseline, written approval, evidence pack, `10` sign-off |
| Glossary | `/glossary`, `/glossary/<term>` | v3, from Tue Dec 7, 2027 | 31 entries and 6 pages, only if all three v3 entry criteria are met | v3's entry criteria (`techeo.web.strategy` #releases), including `techeo.guardrails` #gate |
| Resources | `/resources` | v3 | Per `04` #resources | The explaining article is live |
| Repurposed pieces | LinkedIn, talks, show notes, vendor emails | From Dec 2026 | One kit per piece | The same standards as the source page |

**Never, in any release:** a newsletter, gated downloads, guest posts, news commentary, listicles, or programmatic pages. There is no cadence before v3 (`techeo.web.strategy` #releases). Inside `techeo.plan90` (through Apr 30, 2027), content is limited to A1–A3, February repurposing (1.5 h), and the April A1 re-pull (0.75 h).

## Editorial standards {#standards}

### One question an owner actually asks {#one-question}

1. **Each piece answers exactly one question**, stated as its H1 in the owner's words.
2. **The question is on record.** Every brief cites a row in `techeo-question-log`, a sheet in the Techeo Shared Drive. Columns: row id · date · source · the exact words · trade · ICP fit · `07` row, or "none: propose" · status · piece.
3. **Sources, strongest first:** discovery calls (`08` asks "What did you type?") · audit readouts and teardown replies · peer-network and owner-community threads · podcast hosts' questions · Homets' own management questions (v1.1 only) · `07` #query-map.
4. **The decision test:** would this help an owner decide something this month? If not, it isn't published, as `04`'s `/insights` intro promises.
5. **Topics are chosen at the monthly close** (by the 10th, `techeo.metrics` #cadence), never mid-month.

**Done when:** every brief cites a log row.

### The operator voice {#voice}

The register is `content/playbooks/`: declarative, short, numerical, and firm about standards.

| Rule | Write | Never write |
|---|---|---|
| Peer to peer | "Count them from the platform." | "It may be worth considering whether…" |
| Firm on standards, careful on causes | "Every lead gets a call." · "We believe weekly scoring moved it." | "This will fix your booking rate." |
| Name the subject in anything quotable | "At Homets Air and Heat, the share fell…" | "At our shop, it fell…" |
| Say who "we" is at first use | "We (Homets' desk)…" or "We at Techeo…" | A "we" that could mean either company |
| "I" only for Blake's own decisions | "I thought our problem was lead volume." | A gendered pronoun for the founder, anywhere |
| Systems fail, people don't | "New leads had no owner on a shift." | "Our CSRs ignored leads." |
| Homets weaknesses: past tense, once fixed (`techeo.web.strategy` R1) | "Two platforms never reached ServiceTitan until…" | Any gap that exists today |
| Results are targets | "Our standing target is 70%." | A promised result, a result by a date, "leads" as the promise |
| Examples are labeled | "*Example.* A shop with 300 qualified calls a month…" | An unlabeled figure a reader could take for Homets' |

**Language.** US English, in `03`'s number style. Spellings from `content/` are converted (dialling → dialing, honour → honor, programme → program, maths → math). Use the serial comma, and write headings in sentence case, as questions where natural. D6 names are used exactly, with the Booking Engine listed first. None of D8's banned words. ServiceTitan screen and report names appear in quotation marks, with "as of {Month YYYY}."

### Numbers: source, window, ratio {#numbers}

1. **Only D7 numbers:** a ratio, share, median, or change, from Homets' ServiceTitan or from client data with written approval, with its window in the same sentence or table row. Never a count, dollar figure, or volume.
2. **No third-party benchmarks, even with a citation.** D7 admits only Homets or client data. Write "ServiceTitan publishes averages; we don't quote them," never the figure.
3. **Every figure has a claims-ledger row** (`10` #claims) before approval. Drafts carry tokens; the build fills them.
4. **Precision.** Round toward the less flattering value (brief D7): a higher-is-better "after" rounds down and its "before" rounds up; a lower-is-better "after" rounds up and its "before" rounds down. Whole percentages for shares of 1% or more; one decimal wherever a whole number would turn a nonzero value into 0 (0.4%, never 0%); whole minutes for medians, and "under 1 minute" only when the median is under one minute. Every SourceNote says "Rounded toward the less flattering figure."
5. **Changes** are computed from raw values and rounded toward the less flattering value, so an improvement rounds toward zero. If the result differs from the gap between the displayed figures, show it and add "Change calculated before rounding."
6. **Publishing floor** (an assumption, not a statistical test): booking rate needs at least 100 qualified calls in the window, the untouched share at least 50 marketplace leads, and a median at least 30 leads. Below the floor, write "too few to report."
7. **Windows:** [HOMETS_WINDOW], entered as "Before: {period}. After: {period}." (`03` #proof). There is no separate baseline-window token; the build splits the one token (`04` #new-tokens), and drafts mark each half as {Before period of [HOMETS_WINDOW]} or {After period of [HOMETS_WINDOW]}. Say so when the two fall in different seasons.
8. **The 70% is a target, never a measurement:** "Our standing target is 70%. It is Homets' own written target, not an industry average."

### Quotable structure {#quotable}

`07` #answer-first and #definitions set the rules. In articles, they mean:

- **`AnswerFirst` is the index `answer`** (`04`): at most 200 characters (`06`), it names its subject and answers the H1 alone.
- **The core term's definition appears at first use, word for word from `#glossary`**, with the term in bold. Articles never paraphrase a definition.
- **Formulas are text:** state the unit, the exclusions, and whether the figure is a median or an average. Every H2's first sentence answers that H2. Comparisons are HTML tables.

### Platform facts and outside sources {#platform-facts}

- **Any statement about how Google, ServiceTitan, a lead platform, or a law works is a platform fact.** It carries "as of {Month YYYY}," links the primary source, has a ledger row, and is re-verified at 12 months or on any announced change (`07` #numbers).
- **Agency blogs and forums can prompt a check, but are never cited.**
- **Anything unverifiable is cut, not softened.** help.servicetitan.com was unreachable from this repository's environment on Sep 25, 2026, so every ServiceTitan statement in A1 is checked in a browser at fact-check.
- **Laws are described, never advised on.** Any article that touches a law says "This isn't legal advice" and goes to `10` before approval.

### AI assistance {#ai-policy}

D13 bans AI-spun articles, and D15 reserves the words for the founder.

| Allowed | Not allowed |
|---|---|
| Transcribing Blake's dictation; suggesting an outline Blake rewrites | Shipping a draft without a full operator rewrite |
| Spelling, grammar, banned-word, and character-count checks | Generating any number, quote, example, or customer story |
| Formatting tables and frontmatter | Stating a platform fact without its primary source; images of people or job sites (D9) |

**A full operator rewrite** means Blake re-types or re-dictates every paragraph; editing a machine draft doesn't count. **The test:** set the machine draft and the final side by side, and no sentence appears in both. Blake must be able to defend every sentence on a call. Each brief records the AI assist used: none, transcription, outline, checks, or draft fully rewritten.

### The workflow {#workflow}

| # | Stage | Done when |
|---|---|---|
| 1 | Log the question | The log row has its source and `07` row |
| 2 | Brief (`#brief-template`) | Every field is filled |
| 3 | Data pull | Every figure has a ledger row at `draft`, with evidence filed |
| 4 | Draft, `AnswerFirst` first | The word target is met; `status: draft` |
| 5 | Cold edit, on a later day | `#qa` items 1–15 pass |
| 6 | Fact-check, on a later day than the draft | The procedure below is complete; the rows are `ready` |
| 7 | Compliance pass | `#qa` items 16–30 pass; `status: in-review`; CI green on preview |
| 8 | **Founder approval** | The commit that sets `status: published` reads "Approved for publication {date}, Blake," and nothing changes after it |
| 9 | Publish and index | `07`'s indexing request is made on publish day, and indexed status is checked at 14 days. The 14-day check is a diagnostic: Google doesn't promise indexing, so a miss means diagnosing, not re-requesting. A release's exit test comes from `01`. For A1–A3, that means indexed by Fri Jan 29, 2027 (`#phase-2-schedule`) |
| 10 | Distribute | The kit is sent (`#distribution`) |
| 11 | Review | Every 180 days, and platform facts at 12 months |

Blake does every stage, and D15 makes approval non-delegable. From v3, a content contractor may run stages 3 and 6. **Before an article describing the Homets desk goes live, Blake tells the Homets CS manager what it says.** That is a heads-up, not a review task, because `techeo.guardrails` #coi item 6 bars Homets employees from Techeo work without a separate written agreement and separate pay.

**Fact-check procedure:** (1) Open each figure's ledger row and confirm the raw value, window, filters, and definitions. (2) Re-run the report for the same window; late classifications move counts. (3) Confirm the rounding under `#numbers`. (4) Confirm the sentence and SourceNote match the row. (5) Open each platform fact's primary source and set the as-of month. (6) Recompute every example. (7) Log "Fact-checked {date}: CL-0xx…" in the brief.

**Corrections** happen within one business day (`10`), with a dated `CorrectionsLog` entry and a new `updated` date (`04`). A figure is never edited silently.

### The brief template {#brief-template}

id (`techeo.insight.<slug>`, per `06`) · the question, with its log row · title (≤50 characters, a question) · `shortTitle` (≤40) · `answer` (≤200) · `description` (120–155) · slug · `07` rows · `claim` · reader · thesis (two sentences at most) · its selling job · outline with H2 ids · Homets tokens and ledger rows · platform facts to verify · links now, from v2, and from v3 · CTA lead-in · word target · must not include · AI assist · distribution · hours.

## The three v1.1 articles {#v1-1-articles}

`techeo.plan90` Phase 2 requires three pieces, and `techeo.web.strategy` #releases gives each one load-bearing claim. For each claim, the topic is the one that best feeds Phase 3 selling:

| # | Claim | Topic | Why it sells |
|---|---|---|---|
| A1 | 1 · Run by an operator | Booking rate, measured properly in ServiceTitan, with Homets' before and after | The Gap Statement starts from qualified calls × (0.70 − current booking rate), so an owner who measures their own rate has done half the audit's arithmetic. A1 also stands in as the Homets case study until v2 (`techeo.web.strategy` open question 5), meeting `techeo.plan90`'s Apr 30 exit. |
| A2 | 2 · Written down | Marketplace leads never touched, and the written speed-to-lead standard | `techeo.audit` calls it "the single most damaging number in most audits." |
| A3 | 3 · You keep every account | A checklist of who owns each account | It names the trust wound, vendors can forward it safely, and it needs no Homets data, so it ships even if the baseline slips. |

LSA call handling becomes A4, the first v3 article (January 2028 at the earliest), because it proves no load-bearing claim on its own and D1 limits v1.1 to the three Phase 2 articles.

**Shared requirements.** T7 and components per `04` #insights-article. CTA pattern B, using `04`'s `ArticleCta` with the lead-in given below. Links per `02` #link-insights. If v1 shipped as the floor, `08` decides whether articles wait for `/teardown` or use the Reserve CTA. A2's standard excerpt requires the signed Homets → Techeo license (`10` #releases).

### A1 · What is booking rate, and how do you measure it? {#a1-booking-rate}

| Field | Value |
|---|---|
| id · slug · claim | `techeo.insight.measure-booking-rate` · `/insights/measure-booking-rate` · `1` |
| Question · log row | Q-001 · source: a Homets management question, or `07` P05 · logged by Mon Nov 30, 2026 |
| Title (48; 57 with " \| Techeo") · `shortTitle` | What is booking rate, and how do you measure it? · Measuring booking rate |
| `answer` (165) | Booking rate is the share of qualified callers who end the call with a job booked: qualified callers who booked, divided by all qualified callers in the same window. |
| `description` (145) | Booking rate is qualified callers who booked, divided by qualified callers. How to measure it in ServiceTitan, and what moved it on an HVAC desk. |
| `07` rows | PA1, PA3, D1; prompts P05, P09; supports C4, C10 |
| Reader | The owner of a $1.5M–$15M shop on ServiceTitan who buys leads and suspects the booking-rate figure is wrong. Second reader: ServiceTitan consultants. |
| Thesis | Booking rate on qualified callers is the cheapest number to move, because every call in it is already paid for. Measure it on the right denominator, then fix it before buying more leads. |
| Words · hours | 1,600–2,000 · data 0.5, draft 2.5, edit 1.0, fact-check 0.5, approval 0.25, kit 0.5 = **5.25** (assumption) |
| AI assist | None planned |

**Lead paragraph (draft copy):**
> At Homets Air and Heat, the HVAC company owned by Techeo's founder, booking rate on qualified callers rose from [HOMETS_BOOKING_RATE_FROM] in {Before period of [HOMETS_WINDOW]} to [HOMETS_BOOKING_RATE_TO] in {After period of [HOMETS_WINDOW]}. Before that number meant anything, we had to decide who counts as a qualified caller. Here is how to measure yours in ServiceTitan, and why it comes before buying more leads.

**Outline:**

1. **"Who counts as a qualified caller?"** `#qualified-caller`: the glossary definition, then a table with three columns (Count it · Exclude it · Decide once, in writing). Count a price shopper who could have booked, and an existing customer booking new work. Exclude a wrong number, a vendor, or a question about a scheduled job. "An out-of-area caller turned away correctly is not a miss."
2. **"How do you calculate it?"** `#formula`: the formula in text, over one window. Read it weekly and judge it monthly. Break it down by source, hour, and day, never by person; individual figures belong in coaching. Under about 100 qualified calls, the rate is noise (an assumption).
3. **"How do you find it in ServiceTitan?"** `#servicetitan`. Nothing in this section is drafted as fact until the fact-check confirms it in a browser (`#platform-facts`). Confirm, then describe: which types ServiceTitan sorts inbound calls into (booked, unbooked, excused, and any non-lead or abandoned type), what duration or marking makes a call a lead call, and the booking-rate formula. Draft the consequences (short hang-ups, long vendor calls) only after the rules are confirmed. The fix to describe: call reasons that classify correctly, plus a weekly spot check of 20 calls. Screens are described in words only (`10` #trademarks). Optional: [HOMETS_ST_BOOKING_RATE] beside [HOMETS_BOOKING_RATE_TO], same window.
4. **"What should your booking rate be?"** `#target`: "Our standing target is 70%, Homets' own written target, not an industry average." Set your own target after four clean weeks. No benchmark figures.
5. **"What moved Homets' booking rate, and what didn't?"** `#what-moved`: a table of [HOMETS_BOOKING_RATE_FROM] → [HOMETS_BOOKING_RATE_TO]; [HOMETS_UNQUALIFIED_SHARE] (the share of answered calls excluded as unqualified); and one pair that didn't move, by default [HOMETS_MEMBERSHIP_PITCH_RATE_FROM] → [HOMETS_MEMBERSHIP_PITCH_RATE_TO]. Then the changes Blake confirms actually happened (defaults from `04` #case-study-homets), with "we believe" wherever cause isn't proven. No SOP text and no prices.
6. **"Why fix booking rate before buying more leads?"** `#before-more-leads`: "*Example.* A shop with 300 qualified calls a month booking 55% books 165 jobs; at 65% it books 195, which is 30 more jobs a month with no new spend." Link "what a booking-rate gap costs" → `/#calculator`.
7. `#sources`: the `DataSourceBox`, *Mixed* variant.

| | |
|---|---|
| Homets data | [HOMETS_BOOKING_RATE_FROM] · [HOMETS_BOOKING_RATE_TO] · [HOMETS_WINDOW] (both periods) · one pair that didn't move · new and optional: [HOMETS_ST_BOOKING_RATE], [HOMETS_UNQUALIFIED_SHARE] |
| Verify | ServiceTitan's lead-call rule (the duration or marking that makes a call a lead call); its call types, including "excused"; whether short calls are treated as non-lead, excused, or abandoned; the booking-rate formula; and the name of the report that shows booking rate |
| Links | Now: `/#calculator`, `/#operator`, A2. From v2: `/case-studies/homets-air-and-heat`, `/engines/booking`. From v3: `/glossary/booking-rate`, `/glossary/qualified-caller`. Inbound: `03` `#faq-my-team`. |
| CTA lead-in | "Want an outside read on your own booking rate? A free phone teardown scores three calls to your office against the same standard." |
| Must not include | Screenshots · Homets counts · CSR names · rubric weights · prices · towns |

### A2 · How many paid leads does your shop never call? {#a2-untouched-leads}

| Field | Value |
|---|---|
| id · slug · claim | `techeo.insight.marketplace-leads-never-touched` · `/insights/marketplace-leads-never-touched` · `2` |
| Question · log row | Q-002 · source: a Homets management question, or `07` P06 · logged by Mon Nov 30, 2026 |
| Title (46; 55) · `shortTitle` | How many paid leads does your shop never call? · Paid leads never called |
| `answer` (188) | Count paid leads nobody called from each platform's own records, not your CRM. Any number above zero is money spent on nothing; the fix is a written standard and one named owner per shift. |
| `description` (151) | Marketplace leads never touched are paid leads nobody called. How to count yours, how fast to call back, and the written standard an HVAC desk runs on. |
| `07` rows | PA4, PA5, PA6, D2, D6; prompts P06, P10 |
| Reader | An owner paying for marketplace leads, and the office manager who works them. Second reader: bookkeepers who see the platform invoices. |
| Thesis | The most expensive leads are the ones paid for and never called. They are invisible because platforms that never reach the CRM never appear in its reports. |
| Words · hours | 1,600–1,900 · data 0.5, draft 2.0, edit 1.0, fact-check 0.5, approval 0.25, kit 0.5 = **4.75** |
| AI assist | None planned |

**Lead paragraph (draft copy):**
> **Marketplace leads never touched** is the share of paid marketplace leads that nobody from your company ever called, counted from each platform's own records because leads that never reached your CRM are the likeliest to be missed. At Homets Air and Heat, owned by Techeo's founder, that share fell from [HOMETS_UNTOUCHED_FROM] in {Before period of [HOMETS_WINDOW]} to [HOMETS_UNTOUCHED_TO] in {After period of [HOMETS_WINDOW]}.

**Outline:**

1. **"Why do paid leads go uncalled?"** `#why`: `content/playbooks/speed-to-lead.md` #why-it-broke, in the past tense. They arrive in apps with nothing ringing, and on a busy day, work that doesn't interrupt anyone doesn't get done.
2. **"How do you count yours?"** `#count`: pull 90 days of lead records from each platform (an export, the lead history, or the invoice detail, whichever it offers); list the submission times; match them to outbound calls; count the leads with no call; divide by leads received, per platform. Some platforms push leads into ServiceTitan and some don't, so check your own integrations. A labeled worked example.
3. **"How fast should a contractor call back a lead?"** `#how-fast`: "Within minutes, against a written first-touch standard for each channel." Then the speed-to-lead and first-touch definitions, verbatim, and the weekly median rather than the average, using `04`'s example (3, 4, 6, 9, and 2,880 minutes). Give [HOMETS_SPEED_TO_LEAD_MEDIAN] ([HOMETS_WINDOW]), labeled by what it measures (open question 3). "In our experience at Homets, the first contractor to call usually books" is labeled as experience, not a statistic.
4. **"What does a written standard look like?"** `#standard`: the Speed to Lead Standard from `04` #resources, with the minute values blank. One owner per shift; new leads outrank the ringing queue; a six-step cadence; four outcomes; four weekly measures. This is claim 2's proof. Without the license, describe it without quoting it.
5. **"What changed at Homets when leads got an owner?"** `#homets`: the before and after pair plus [HOMETS_LEADS_IN_STANDARD_SHARE]. Add [HOMETS_BOOKED_AFTER_ATTEMPT_3_SHARE] only if measured; otherwise cut the claim that later attempts recover jobs. Name what still can't be measured.
6. **"What about leads that were never real?"** `#bad-leads`: the "Not a lead" outcome and each platform's own bad-lead process, as of the fact-check month. Once A5 is live (April 2028 at the earliest), link it.
7. `#sources`: *Mixed* variant.

| | |
|---|---|
| Homets data | [HOMETS_UNTOUCHED_FROM] · [HOMETS_UNTOUCHED_TO] (shares, never counts) · [HOMETS_SPEED_TO_LEAD_MEDIAN] · [HOMETS_WINDOW] (both periods) · new: [HOMETS_LEADS_IN_STANDARD_SHARE]; optional [HOMETS_BOOKED_AFTER_ATTEMPT_3_SHARE] |
| Verify | Per-lead charging and lead sharing on each platform; each platform's bad-lead process; whether each platform lets you export or list 90 days of leads with submission times |
| Links | Now: `/#leak`, `/#operator`, A1. From v2: `/engines/booking`, `/engines/ads`. From v3: `/glossary/speed-to-lead`, `/resources#speed-to-lead-standard`. Inbound: `03` `#faq-callback-speed`. |
| CTA lead-in | "Want an outside read on how your office handles new leads? A free phone teardown is three calls to your published number, scored against this standard." |
| Must not include | Which platforms Homets buys from, or its spend or volume by platform · Homets' SLA minutes · vendor names · towns |

### A3 · Who owns your Google Ads and Business Profile? {#a3-account-ownership}

| Field | Value |
|---|---|
| id · slug · claim | `techeo.insight.marketing-account-ownership` · `/insights/marketing-account-ownership` · `3` |
| Question · log row | Q-003 · source: a Homets management question, or `07` PA11 · logged by Mon Nov 30, 2026 |
| Title (46; 55) · `shortTitle` | Who owns your Google Ads and Business Profile? · Who owns your accounts |
| `answer` (193) | Your company should own every marketing account in its own name, with the top access level held by a login you control and billing on your card. An agency should get user access you can remove. |
| `description` (150) | Your company should own every marketing account in its own name. A checklist for Google Ads, LSA, your Business Profile, analytics, and call tracking. |
| `07` rows | PA11, C14; supports B5 |
| Reader | An owner with a current or past agency; the bookkeeper who pays the agency; the consultant onboarding a shop |
| Thesis | You can't fire an agency that owns your accounts, so check ownership now, while nothing is wrong. |
| Words · hours | 1,200–1,500 · draft 1.25, edit 0.5, platform facts 0.5, approval 0.25, kit 0.5 = **3.0** |
| AI assist | None planned |

**Outline:**

1. **"What does owning an account mean?"** `#what-owning-means`: four tests. The business is the named owner, on a company email address; you hold the highest role; billing is on your card; the agency's access can be removed. The account's history stays with the account.
2. **"Which accounts should you check?"** `#the-list`: a table with the columns Account · Why it matters · Where to look (as of the fact-check month) · What "yours" looks like. The rows: Google Ads, Local Services Ads, Business Profile, Google Analytics, Search Console, call tracking and its numbers, the domain registrar, website hosting, ServiceTitan admin users, and marketplace accounts.
3. **"How do you check without starting a fight?"** `#how-to-check`: ask for a written list of accounts and roles, then log in yourself. An agency that set things up properly will be glad you asked.
4. **"What if your agency owns one?"** `#if-not`: ask in writing for the top access level or a transfer; export the history first; don't cancel before the transfer; ask the call-tracking provider, and whoever holds that account, whether the numbers can be ported out to an account in your name. "This isn't legal advice; your contract governs."
5. **"What do we put in writing?"** `#in-writing`: one paragraph. Techeo clients keep every account in their name and on their card, and ad spend never passes through Techeo. Link → `/#promises`.
6. **"How does Homets hold its own accounts?"** `#homets`: Homets' actual practice, as Blake confirms it. No numbers.
7. `#sources`: the *Examples only* variant, plus the platform sources and `10`'s third-party disclaimer, because the H1 names Google Ads.

| | |
|---|---|
| Homets data | None |
| Verify | Google Ads access levels and manager-account linking; Business Profile roles and transfer of primary ownership; how LSA access works; Google Analytics and Search Console permission levels; call-tracking number porting |
| Links | Now: `/#promises`, A1, A2. From v2: `/engines/ads`, `/engines/search`. From v3: `/resources#who-owns-your-marketing-accounts`, `/glossary/local-services-ads`. Inbound: `03` `#faq-account-ownership`. |
| CTA lead-in | "Owning the accounts is step one. Step two is knowing whether the calls they produce get booked." |
| Must not include | Any agency's name, or a story that identifies a business · legal advice · anything implying Techeo holds client accounts |

### Phase 2 schedule {#phase-2-schedule}

Phase 2 allows 4 hours a week for nine weeks, 36 hours in all (`techeo.plan90`). Content takes at most 2 hours of any week (half the cap), leaving the rest for legal work, the trademark, bookkeeping, the close, and the website upkeep in `11` #v1-1. This document owns the content hours; `11` #v1-1 owns the Phase 2 hours, and the Other column below restates it, so no week goes over 4.0 hours. Two of `11`'s lines differ from an earlier draft of this table: the builder runs the December and January reduced prompt tests (`07` #run-protocol), and self-shop scoring falls in W11 and W15, because `08` #mystery-shop scores by the 10th. Each kit (0.5 hours) includes the no-ask send to the ten referral sources. The Dec 21–23 and Dec 28–30 afternoons are drafting only; `11`'s holiday deploy freeze (Dec 19 – Jan 3) still holds.

| Week | Dates | Content work | Content | Other Phase 2 work (`11` #v1-1) | Other | Total |
|---|---|---|---|---|---|---|
| W10 | Nov 30 – Dec 4 | A1: data check 0.5; draft, first part 1.5 | 2.0 | Review 0.5 · `techeo.legal` open items 0.5 · (reduced prompt test, Dec 1–3, run by the builder) | 1.0 | 3.0 |
| W11 | Dec 7–11 | A1: finish the draft 1.0; cold edit 1.0 | 2.0 | Review 0.5 · trademark filing review 1.0 · self-shop scoring, December shop, by Thu Dec 10, 0.5 (this week's open items move to W12 and W16) | 2.0 | 4.0 |
| W12 | Dec 14–18 | A1: fact-check Mon afternoon 0.5; approval 0.25; **publish Tue Dec 15**; kit Wed 0.5 | 1.25 | Review 0.5 · open items 2.0 (0.5 from W11) · Homets link 0.25 | 2.75 | 4.0 |
| W13 | Dec 21–23 (Dec 24–25 protected) | A2: data check and ledger rows 0.5; draft 1.5 | 2.0 | Review 0.5 (Wed) · day-30 read, Mon Dec 21, 0.5 | 1.0 | 3.0 |
| W14 | Dec 28–30 (Dec 31 – Jan 1 protected) | A2: finish the draft 0.5 (Mon); cold edit 1.0 (Tue). A3: draft, first part 0.5 (Wed) | 2.0 | Review 0.5 (Wed) · bookkeeping setup 1.0 | 1.5 | 3.5 |
| W15 | Jan 4–8 | None | 0 | Review 0.5 · December close 1.5 · self-shop scoring, January shop, by Fri Jan 8, 0.5 · site scorecard 1.0 · (reduced prompt test, Jan 5–7, run by the builder) | 3.5 | 3.5 |
| W16 | Jan 11–15 | A2: fact-check Mon afternoon 0.5; approval 0.25; **publish Thu Jan 14**; kit Fri 10:00–12:00 0.5. A3: finish the draft 0.75 | 2.0 | Review 0.5 · open items 0.5 (from W11) | 1.0 | 3.0 |
| W17 | Jan 18–22 | A3: cold edit Mon afternoon 0.5; platform facts Tue 0.5; approval Wed 0.25; **publish Thu Jan 21** | 1.25 | Review 0.5 · open items 1.5 · close routine 0.5 | 2.5 | 3.75 |
| W18 | Jan 25–29 | A3: kit Mon afternoon 0.5 | 0.5 | Review 0.5 · open items 1.0 · flip PR and rehearsal 0.5 · `08` F2 tasks 1.0 · `07`'s v1 exit check, Fri Jan 29, 0.5 | 3.5 | 4.0 |
| | | **Total (assumption; `11` owns the hours)** | **13.0** | | **18.75** | **31.75 of 36** |

**Slack is 4.25 hours, 4.0 of them before Fri Jan 15** (W10 1.0, W13 1.0, W14 0.5, W15 0.5, W16 1.0), against the roughly 3.0 hours `11` reserves for the floor (`11` #hours, option B). So the floor fits by `techeo.web.strategy`'s Jan 15 deadline without moving A3 (`11` #v1-1).

**If Phase 2 runs short,** the priority is A1, then A2, then A3; A1 is required as the Homets case study stand-in. A piece that misses Jan 21 moves to the next quiet period open to articles, December 2027 (rule 2 bans new articles May 1 – Sep 6), never into February's selling weeks. **If the floor ships,** it takes the slack before Jan 15, and A3 keeps its Jan 21 date. The priority rule applies only if the time log shows less slack than `11` plans.

**Done when** (`techeo.web.strategy` #releases, v1.1 exit, which `01` owns): by Fri Jan 29, 2027, all three are live and indexed, and each has been sent once, with no ask, to the ten referral sources and the peer-network contact. Indexing is requested on publish day, and `07`'s Jan 29 exit check (`07` #first-90-days) confirms the result. A3 keeps Thu Jan 21, which gives it eight days to be indexed. Publishing it by Jan 14 would put 1.25 more content hours before Jan 15, which cuts the 4.0 hours of slack there below the floor's 3.0. If any article isn't indexed on Jan 29, the exit is missed: the check logs the gap with a date, and nobody redefines the exit to make it pass. The 14-day check at stage 9 (A1 by Tue Dec 29, A2 by Thu Jan 28, A3 by Thu Feb 4) is a diagnostic, not the exit. `#change-requests` proposes new exit wording to `01`, and until `01` adopts it, this test stands.

## Editorial calendar, December 2026 – December 2027 {#calendar}

**Rules:**

1. **No content work in a protected block** (`techeo.guardrails` #protected): weekday mornings until 10:00, Monday mornings, Friday afternoons, the weekly CSM 1:1 and call-scoring session, and any day of a heat wave, hard freeze, or holiday-weekend coverage gap. This plan also protects Dec 24–25 and Dec 31 – Jan 1.
2. **No new articles May 1 – Sep 6.** The only content work then is case-study production for v2, at 3 hours a week or less.
3. **Content takes no more than 2 hours of a Phase 2 week (half the 4-hour cap), or 5 hours of an OPEN week,** and it always loses to an audit, a teardown, a discovery call, or onboarding.
4. **Publish Tuesday to Thursday, after 10:00 [TZ], never on a flip day** (Feb 1, May 1, Sep 7, Dec 1). This applies to articles and glossary waves. The one exception is the v2 release: pages that ship in a release deploy, including the three case studies, go live with v2 on Tue Sep 7, 2027 (D1).
5. **Conditional items** ship only if their go/no-go check passes. Otherwise they wait for the next open slot, never May 1 – Sep 6.

| Month | State (D2) | Allowance | Publish | Engine | `07` row | Release | Live | Hrs |
|---|---|---|---|---|---|---|---|---|
| Dec 2026 | WAITLIST | 4/wk | **A1** | Booking | PA1, PA3, D1 | v1.1 | Tue Dec 15 | 5.25 |
| Jan 2027 | WAITLIST | 4/wk | **A2**, **A3** | Booking; Ads, Search | PA4–6, D2, D6; PA11, C14 | v1.1 | Thu Jan 14; Thu Jan 21 | 7.75 |
| Feb 2027 | OPEN from Feb 1 | Sell, 14/wk | Nothing new. A talk segment and podcast topic cards from A1 and A2. | Booking | Supports B5, B6 | — | by Fri Feb 12 | 1.5 |
| Apr 2027 | OPEN to Apr 30 | 18/wk | A1 refresh: re-pull, and update only if a figure changed | Booking | PA1, D1 | v1.1 | by Thu Apr 15 | 0.75 |
| May 2027 | WAITLIST from May 1 | Deliver only | Nothing; check that partner evidence is on file | — | — | — | — | 0.25 |
| Jun 2027 | WAITLIST | Maintenance | Homets case study drafted (`04`); partner 1's interview and video | Booking | B5 | v2 | draft by Jun 30 | 5.5 |
| Jul 2027 | WAITLIST | Maintenance | Partner 1's case study to approval; partner 2's interview and video | Booking | B5, C10 | v2 | approved by Fri Jul 30 | 5.5 |
| Aug 2027 | WAITLIST | Maintenance | Partner 2's case study approved by Mon Aug 16; A1–A3 relinked for v2 (`02` #anchor-to-page) | Booking | B5 | v2 | Aug 16 | 4.5 |
| Sep 2027 | OPEN from Sep 7, or WAITLIST / `capacity` if the Aug 16 gate check fails (`01`) | Sell | **Three case studies** live with v2. No new article (partner 3 onboards). | Booking | B5, C10 | v2 | Tue Sep 7 | 2.0 |
| Oct 2027 | OPEN, or WAITLIST / `capacity` if the Aug 16 gate check fails (`01`) | Phase 5, gated | Nothing publishes. The Oct close checks v3's entry criteria and, if the gate has cleared, expands the glossary and A4 briefs. | — | — | — | — | 0.5 |
| Nov 2027 | OPEN to Nov 30, or WAITLIST / `capacity` if the Aug 16 gate check fails (`01`) | Phase 5, gated | Nothing publishes. Glossary wave 1 drafted, only if the gate has cleared. | All | D1–D3, D5, D10, PA14 | v3 | — | 8 |
| Dec 2027 | WAITLIST from Dec 1 | Quiet | **Glossary wave 1** (conditional); partner 3's interview and video | All; Booking | D1–D3, D5, D10, PA14; B5 | v3; v2 | Tue Dec 7 | 2 + 1.5 |

Hours are founder assumptions. The Hrs column counts each piece's hours in the month it publishes; `#phase-2-schedule` shows the weeks they are spent in (A2's data pull, draft, and cold edit, and part of A3's draft, fall in December). **Go/no-go checks:**

- **Every v3 item** (glossary wave 1, A4–A7): all three v3 entry criteria in `techeo.web.strategy` #releases are met. The gate is cleared, writing hours exist, and twelve weeks of v2 lead data exist. v2 goes live Tue Sep 7, 2027, so the twelve weeks end Tue Nov 30, and **Tue Dec 7, 2027 is the earliest date for any v3 item.** They publish in this order, one a month: glossary wave 1 (December 2027), A4 (January 2028), A7 (February 2028), A6 (March 2028), and A5 (April 2028). The first slot opens in the month after all three criteria are met, the order holds, and rule 2 still applies. **If the gate has not cleared, no v3 item publishes.**
- **A4 in March 2027** is not scheduled: D1 limits v1.1 to the three Phase 2 articles, and `techeo.plan90` #not-in-plan rules out a content calendar. Open question 7 has the conditions if the founder wants it anyway.
- **A3, if it misses Jan 21** (`#phase-2-schedule`'s priority rule): Tue Dec 14, 2027, ahead of the v3 order; it is a v1.1 article, not a v3 item.

**The v3 article briefs**, expanded to the full template at the monthly close before drafting:

| # | Title (chars) · slug | Thesis | Data | Explains |
|---|---|---|---|---|
| A4 | Should LSA calls be answered before other calls? (48) · `lsa-calls-answered-first` | LSA calls are bought per lead, and Google names responsiveness as an LSA ranking factor ("About ad rankings" help page; verify at publish). Homets answers them first. How to do it, and how to report LSA answer rate on its own line. | [HOMETS_ANSWER_RATE], new [HOMETS_LSA_ANSWER_RATE], [HOMETS_WINDOW] | — |
| A5 | Can you still dispute Local Services Ads leads? (47) · `local-services-ads-disputes` | Google replaced manual LSA disputes with automatic lead reviews and lead feedback (as of {Month YYYY}; confirm the rollout date on Google's help page at publish, and use the single verified date in `#glossary` #24). What an owner can do now: rate every lead, log outcomes, and tighten job-type and service-area settings. | None; platform facts | — |
| A6 | Which phone numbers should an owner check weekly? (49) · `weekly-phone-desk-numbers` | The numbers in `content/sops/csm/kpis.md`, how each is read, with our targets labeled as ours | [HOMETS_ANSWER_RATE], [HOMETS_BOOKING_RATE_TO], [HOMETS_UNTOUCHED_TO] | The Phone Desk Scorecard (`04`) |
| A7 | How do you mystery-shop your own phones? (40) · `mystery-shop-your-own-phones` | One scenario, ten yes/no checks, and why to take notes rather than record (`10` #recording). Never the five audit scripts or the rubric weights. | None | Shop Your Own Phone (`04`) |

## Case studies: the design-partner process {#case-studies}

`04` fixes the page, `10` #endorsements the FTC rules and disclosures, `techeo.delivery` the engagement, and `techeo.gtm` what partners owe. **A case study is published under the client's real name with written approval, or not at all.** There are no anonymized substitutes (`techeo.web.strategy` R10).

| Case study | Baseline | Day-90 review | Interview and video | Approval by | Live |
|---|---|---|---|---|---|
| Homets Air and Heat | Week 1 pull by Blake; reports on file; no second Homets check (`04` open question 17) | — | None: a founder quoting their own company isn't an endorsement | Fri Jul 30, 2027 | Tue Sep 7, 2027 |
| Partner 1 | Late March 2027 | Late June | Within 7 days of the review | Fri Jul 30 | Tue Sep 7, 2027 |
| Partner 2 | Late April 2027 | Late July | Within 3 days | Mon Aug 16 (gate check) | Tue Sep 7, 2027 |
| Partner 3 | September 2027 | December | Before Fri Dec 17 | January 2028 | Early February 2028 |

Partner dates are assumptions, derived from `techeo.plan90`'s staggered onboarding: partner 1 onboards in March and partner 2 in April, with day-90 reviews in late June and late July. **Day-90 review = week 12 after the signed week-0 baseline** (`techeo.delivery` #sprint), so each baseline falls late in its onboarding month. **Partner 2 runs compressed** to meet Aug 16: interview within 3 days, draft within 7 days of the review, and client review in 5 business days. If approval misses Aug 16, the case study ships after Sep 7, because v2's scope flexes and its date doesn't (`techeo.web.strategy` #releases).

### The steps {#case-study-steps}

| # | Step | When | Done when |
|---|---|---|---|
| S0 | Design Partner Agreement with every clause in `10` #endorsements, plus: **the partner may remove a figure but never change its value** | Before week 0 | Filed in the evidence pack |
| S1 | Week-0 baseline with `#baseline-fields`, signed by the owner (`techeo.delivery`) | Week 0 | Signed before Techeo touches the desk |
| S2 | Weekly KPI export filed, and a dated log of what Techeo changed | Weeks 1–12 | 12 exports and the log in the pack |
| S3 | After-window pull using the baseline's definitions and filters; a confirming pull on the draft day | Day of the review | Ledger rows (client metric) at `draft` |
| S4 | Day-90 review (`techeo.delivery`); the interview and video booked | Week 12 | Both on the calendar |
| S5 | Interview (`#interview`) | Within 7 days | Every section in `04` has source material |
| S6 | Video (`#video`) | Same session, or within 14 days | Releases on file for everyone on camera |
| S7 | Draft in `04`'s structure | Within 14 days of the review | `#qa` passes |
| S8 | Client review: the client edits its own quotes, and keeps or removes figures | 10 business days (partner 2: 5) | One consolidated round |
| S9 | Signed approval covering the text version, URL, metro, figures, quotes, photos, and video cut | After the last change | Approval date on or after the last change (`06` enforces this) |
| S10 | `10` sign-off: disclosure above the first number, `#typical` present, one figure traced to the pack | Before deploy | Recorded in the ledger |
| S11 | Publish; tell the partner first | With v2, or 14 or more days after the review | `ApprovalLine` rendered |
| S12 | Distribute; add the day-180 update if approved; withdraw within 1 business day if asked (`04`) | Ongoing | `UpdateLog` current |

**Windows.** Before is the signed baseline's window (default: the 90 days before kickoff, the audit's export). After is the 30 days ending the day before the day-90 review, showing the installed system rather than the ramp. Name each window's season, and apply `#numbers`' floor. **If the numbers don't move,** the case study is still offered for publication; an honest flat result is credible. If approval is withheld, nothing is published, and `10`'s all-clients typicality line still counts that client.

### Week-0 baseline: publishable fields {#baseline-fields}

1. The company's legal and public names, trade, metro, and CRM; the before window; the "qualified caller" exclusions, written out.
2. **Metrics:** qualified booking rate; ServiceTitan's built-in booking rate for the same window; answer rate; LSA answer rate; median first touch by channel, where measurable; marketplace leads never touched, as a share of platform records; membership pitch rate; membership attach rate; the Engine Score. Cost per booked job is recorded but published only as a percentage change (D7).
3. **What can't be measured yet:** a channel that never reaches ServiceTitan is "not measurable," never estimated.
4. **The signature line:** "I agree these figures describe {Company}'s phone and lead handling for {window}." Then name, title, and date.
5. **The publication line:** "Signing this baseline does not approve publication. Publication needs separate written approval of the final text."

### The interview {#interview}

Forty-five minutes by video call. Blake opens: "I'd like to record this so I quote you accurately. The recording isn't published, and I delete it 30 days after you approve the case study. Is that OK?" The 30-day deletion waits on a `10` #retention class (`#change-requests`). If the answer is no, Blake takes notes. No AI note-taker is used (`10` open question 9). Blake feeds no numbers and asks no leading questions, and nothing depends on what the partner says: the fee never depends on sentiment (`10`).

**Before:**

1. Before we started, what did a busy Monday look like on your phones?
2. What were you measuring on the phones, and what were you guessing at?
3. What had you tried before, and what happened?
4. Why did you say yes to the design-partner program, and what almost made you say no?
5. When you heard I own an HVAC company, what was your first thought? What settled it, if anything?

**During:**

6. Which change felt biggest to your team, and which felt smallest?
7. What was harder than you expected?
8. How much time did it take each week, from you and from your team?
9. Who inside your company owned it? (Title only, unless that person agrees to be named.)
10. What did your team say about the weekly call scoring? No names.
11. Is there anything we did that you'd tell us to stop?

**Results:**

12. Apart from the numbers, what have you noticed change?
13. Looking at the before and after figures, which result surprised you?
14. Which number didn't move, and why do you think that is?
15. Did anything get worse?
16. What do you think caused the change? Your view, not ours.

**For other owners:**

17. What kind of shop wouldn't this work for?
18. What would you tell an owner who thinks their phones are fine?
19. If you were reading this case study, what would you want to know that we haven't asked?

**Permissions:**

20. Which of your words are you comfortable seeing on the page with your name?
21. May we name {Company}, your metro, and your title? May we use photos of your shop, under D9 and releases?
22. Is there anything you said today that you want kept off the page?

Questions 1–3 feed `#before`; 6–11 feed `#what-it-took`; 12–16 feed `#what-moved` and `#what-did-not-move`; 12, 17, and 18 feed `#in-their-words`.

### The day-90 video testimonial {#video}

- **When and where:** at the end of the day-90 session, or in a 20-minute slot within 14 days. It is recorded remotely, because late June and late July are peak season for both companies. The partner films on their own phone or webcam, landscape, in their own shop, or the session is a recorded video call.
- **Before recording:** written consent to record; a likeness release for everyone on camera (D9, `10` #releases); and a background check, so no dispatch board, screen, or customer detail is visible.
- **The disclosure** is `10` #endorsements' design-partner quote/video line, word for word, not restated here: printed above the player, on screen inside the video for the first 5 seconds, and spoken at the start. Because the partner films alone, the spoken line is captured one of two ways: the session is a recorded video call that includes Blake's audio, and Blake reads the line first; or the partner reads `10`'s line on camera. The discount is never stated (D6).
- **Five unscripted questions:** What was going wrong on your phones before? What did you change? What moved, and over what period? What was hard, or didn't move? Who should do this, and who shouldn't?
- **Any figure spoken on camera must match an approved figure,** and its window is both shown on screen and spoken, by the partner or in Blake's closing line, so nothing is visual-only (WCAG 2.2 SC 1.2.5, AA). Otherwise the figure is cut.
- **Editing:** cut for length only, to 2–4 minutes, and never reordered to change the meaning. Captions are corrected by hand, and there is an HTML transcript. Any on-screen text that isn't spoken is added to an audio-described version. The partner approves the final cut at S9. The video appears only in that partner's `#in-their-words` (`04` open question 10), hosted per `06`.

## The glossary: v3 term list {#glossary}

**This table is the single source of every definition** (`07` #definitions). From today, articles, `/llms.txt`, markup, and audit reports quote it word for word, a year before `/glossary` exists. The exception is a platform-fact entry (#10, #23–#25): it is quoted only after it has been verified and has its as-of month and ledger row (`#platform-facts`; the table below the list). A changed definition is a versioned change here, rolled out everywhere in one deploy.

**Rules.** At most 40 words (`06`), in the form "**{Term}** is {kind of thing} {that differs by}," never using the term to define itself. A term gets its own page only under the depth rule of 250 words plus a worked example (`02`, `06`); otherwise it is an entry at `/glossary#<slug>`. Targets are labeled as ours, and pitfalls describe systems, not people. A page whose H1 names a third-party mark carries `10`'s disclaimer. Entries for Techeo's own names link to the page that owns that query. Platform-fact terms (#10, #23–#25) are verified before first use in `/llms.txt` or A1–A3, and re-verified every 12 months.

**Waves.** Wave 1 (Tue Dec 7, 2027, the earliest v3 date, and only if all three v3 entry criteria are met) publishes all 31 entries and six pages: booking rate, qualified caller, speed to lead, answer rate, cost per booked job, and Local Services Ads, with disputes as a `#disputes` section (`07` D5). That meets `04`'s trigger of at least 20 entries, 5 of them at depth. Wave 2 follows A5 in the same one-a-month order (2028, never May 1 – Sep 6) and promotes marketplace leads never touched, answer engine optimization, and membership attach rate.

| # | Term | Slug | Definition (canonical) | Engine | Page | `07` |
|---|---|---|---|---|---|---|
| 1 | Booking rate | `booking-rate` | Booking rate is the share of qualified callers who end the call with a job booked: qualified callers who booked, divided by all qualified callers in the same window. | Booking | W1 | D1 |
| 2 | Qualified caller | `qualified-caller` | A qualified caller is a person calling about work you do, inside the area you serve, who could have been booked on that call; wrong numbers, vendors, questions about existing jobs, and requests you don't serve are excluded. | Booking | W1 | D10 |
| 3 | Answer rate | `answer-rate` | Answer rate is the share of inbound calls a live person answers within your written standard, a set number of rings or seconds, out of all inbound calls received during the hours you promise to answer. | Booking | W1 | D3 |
| 4 | LSA answer rate | `local-services-ads-answer-rate` | LSA answer rate is answer rate counted only on calls that come through Google Local Services Ads, reported on its own line because each of those calls is a lead you pay for. | Booking | Entry | — |
| 5 | Speed to lead | `speed-to-lead` | Speed to lead is the time from the moment a customer submits a request (a web form, a marketplace lead, a missed-call text) to the moment a person from your company is speaking with them. | Booking | W1 | D2 |
| 6 | First touch | `first-touch` | First touch is the first call a person from your company places to a new lead, timed from the customer's submission; opening the notification, reading the lead, or adding it to a list doesn't count. | Booking | Entry | — |
| 7 | Lead duty | `lead-duty` | Lead duty is a named, per-shift assignment that makes one person responsible for calling every new web and marketplace lead first, ahead of the ringing inbound queue, until each lead has had its first call. | Booking | Entry | — |
| 8 | Marketplace leads never touched | `marketplace-leads-never-touched` | Marketplace leads never touched is the share of paid marketplace leads that nobody from your company ever called, counted from each platform's own records because leads that never reached your CRM are the likeliest to be missed. | Booking | W2 | D6 |
| 9 | Membership pitch rate | `membership-pitch-rate` | Membership pitch rate is the share of calls with non-members in which your team offers your maintenance membership, counting whether the offer was made, not whether the customer joined. | Booking | Entry | — |
| 10 | Marketplace lead | `marketplace-lead` | A marketplace lead is a customer request that a lead platform such as Angi or Thumbtack charges you for, often whether or not you reach the customer and often sent to other contractors too. | Ads | Entry | PA5 |
| 11 | Membership attach rate | `membership-attach-rate` | Membership attach rate is the share of eligible non-member customers who join your maintenance membership during a call or visit, out of all eligible non-members your company served in the same window. | Booking | W2 | PA15 |
| 12 | Cost per booked job | `cost-per-booked-job` | Cost per booked job is what you spent on a lead source in a period, including fees, divided by the jobs booked from that source in the same period, which puts every channel on one scale. | — | W1 | PA14 |
| 13 | Lead source attribution | `lead-source-attribution` | Lead source attribution is recording on every lead, booked or not, the specific channel that produced it, such as "Google Local Services Ads" rather than "Google," so cost per booked job can be read by source. | — | Entry | — |
| 14 | Call scoring | `call-scoring` | Call scoring is reviewing a fixed number of recorded calls per person each week against a written, weighted rubric, so coaching follows one standard instead of memory or mood. | Booking | Entry | C9 |
| 15 | Mystery shop | `mystery-shop` | A mystery shop is a scripted test call or form submission made the way a real customer would make it, then scored against a written standard, to see how a business handles demand when nobody knows it's a test. | Booking | Entry | C12 |
| 16 | Week-0 baseline | `week-0-baseline` | A week-0 baseline is the set of numbers an owner signs before an engagement starts, recording what "before" looked like, so every later result is measured against figures both sides agreed in writing. | — | Entry | — |
| 17 | MEO (Marketing Engine Optimization) | `marketing-engine-optimization` | MEO (Marketing Engine Optimization) is Techeo's name for running a contractor's four marketing engines as one system judged by cost per booked job: the Booking Engine, Search (SEO), Answer (AEO), and the Ads Engine. | — | Entry → `/engines` | D7 |
| 18 | The Booking Engine | `booking-engine` | The Booking Engine is everything that happens after the phone rings or a lead lands, measured by answer rate, speed to lead, booking rate, and membership attach; it works on demand the contractor has already paid for. | Booking | Entry → `/engines/booking` | C10 |
| 19 | The Ads Engine | `ads-engine` | The Ads Engine is the paid side of a contractor's demand: Local Services Ads, Google Ads, and marketplace spend, with budgets paced against the contractor's own season and judged by cost per booked job. | Ads | Entry → `/engines/ads` | C8 |
| 20 | Search engine optimization (SEO) | `search-engine-optimization` | Search engine optimization (SEO) is the work of earning unpaid visibility in search results; for a local contractor that mostly means the local pack, the Google Business Profile, service-area pages, and a site search engines can crawl. | Search | Entry → `/engines/search` | C7 |
| 21 | Answer engine optimization (AEO) | `answer-engine-optimization` | Answer engine optimization (AEO) is the work of getting a business named and cited accurately in AI assistants and AI search results, through consistent business facts, structured data, reviews, and pages that answer questions directly. | Answer | W2 | D4 |
| 22 | Generative engine optimization (GEO) | `generative-engine-optimization` | Generative engine optimization (GEO) is a name used in the trade press for the work of getting a business cited in AI-generated answers; Techeo calls the same work answer engine optimization (AEO). | Answer | Entry | D4 |
| 23 | Local Services Ads (LSA) | `local-services-ads` | Local Services Ads (LSA) are Google's pay-per-lead ads for local service businesses: they appear above other results on many service searches, and the business pays for leads such as calls and messages, not clicks. | Ads | W1 | D5 |
| 24 | LSA dispute | `local-services-ads-dispute` | An LSA dispute was a request asking Google to credit a charged Local Services Ads lead that wasn't a real lead; Google has since replaced manual disputes with automatic lead reviews and advertiser feedback on leads (as of {Month YYYY}). | Ads | Section of #23 | D5, PA7 |
| 25 | Google Business Profile (GBP) | `google-business-profile` | A Google Business Profile (GBP) is the free Google listing that controls how a business appears in Maps and the local pack: its categories, hours, service area, photos, and reviews. | Search | Entry | — |
| 26 | Service-area page | `service-area-page` | A service-area page is a page on a contractor's website about one town it actually serves, with local detail a homeowner there would recognize, not a copy with the town name swapped. | Search | Entry | — |
| 27 | Conversion tracking | `conversion-tracking` | Conversion tracking is the setup that tells an ad platform which actions count as success; for a contractor it should count booked jobs or qualified calls, not page views or form starts. | Ads | Entry | PA13 |
| 28 | Offline conversion import | `offline-conversion-import` | Offline conversion import is sending booked jobs and their revenue from your CRM back to an ad platform, matched to the click or call that produced them, so the platform learns which searches become booked work. | Ads | Entry; never names the Attribution Layer (D6) | PA13 |
| 29 | Search-term waste | `search-term-waste` | Search-term waste is Google Ads spend on searches that could never become work you want, such as other trades, do-it-yourself questions, job seekers, or towns you don't serve, found in the search terms report. | Ads | Entry | — |
| 30 | Entity consistency | `entity-consistency` | Entity consistency is keeping a business's core facts (name, owner, what it does, where it works, phone, website) worded the same everywhere, so search engines and AI assistants attach the right facts to the right company. | Answer | Entry | — |
| 31 | Gap Statement | `gap-statement` | The Gap Statement is the Engine Audit's one annualized figure for revenue a contractor is losing, built only from that contractor's own data, with every step of the arithmetic shown and the total rounded down. | — | Entry → `/audit` | D9 |

**Platform-fact entries.** Each is verified in a browser against its primary source before first use; until then it stays out of `/llms.txt`, the markup, and A1–A3.

| # | Term | Platform fact to verify | Primary source | As of | Ledger row | Verify before |
|---|---|---|---|---|---|---|
| 10 | Marketplace lead | Per-lead charging and lead sharing, per platform | Each platform's pricing or help page | {Month YYYY}, set at verification | CL-{nnn}, added by `10` #claims | First use in `/llms.txt` or A2 |
| 23 | Local Services Ads (LSA) | Pay-per-lead billing, placement, and the lead types charged | Google's Local Services Ads help center | {Month YYYY} | CL-{nnn} | First use in `/llms.txt` or A3 |
| 24 | LSA dispute | That manual disputes were replaced, by what, and from when: one date for the whole plan (`04`, `07`, A5) | Google's Local Services Ads help page on lead credits | {Month YYYY} | CL-{nnn} | First use in `/llms.txt`; A5 |
| 25 | Google Business Profile (GBP) | That it is free, and what it controls | Google Business Profile help center | {Month YYYY} | CL-{nnn} | First use in `/llms.txt` or A3 |

**Done when:** wave 1's entries pass `06`'s schema, all six pages meet the depth rule, and a CI diff finds each definition identical in `/llms.txt`, the markup, and every article that quotes it.

## Distribution and repurposing {#distribution}

**No paid promotion:** no boosted or sponsored posts, paid newsletter placements, paid podcast appearances (`07`), distribution services, or engagement pods. Blake moves every piece through `techeo.gtm`'s channels by hand, with the disclosure. UTMs follow `09` #utm.

**The kit** (30 minutes per piece, counted in its hours):

| Asset | Spec |
|---|---|
| LinkedIn post | 150–300 words, full text rather than a bare link (`07` #entity-channels): the definition, one dated ratio, and the link, ending "I own Techeo (and Homets Air and Heat)." UTM `linkedin` / `social` / `post-{yyyy-mm}` / `post-{yyyy-mm-dd}` |
| Vendor note | A personal email of 80 words or fewer with no ask. It links to a Techeo page that ends in a teardown CTA and goes to vendors who never opted in, so it carries `10` #can-spam's postal address, advertisement line, and opt-out unless counsel classifies it as non-commercial (`#change-requests`). Opt-outs go on the one suppression list within 1 business day. |
| Community answer | 150 words or fewer, in reply to a live thread; a link only where group rules allow; no UTM (`09`); the disclosure line |
| Podcast topic card | The H1 question, the definition, one dated ratio, three talking points, and the URL for the show notes (`07` open question 9) |
| Talk segment | Five minutes and three slides at most, dated ratios only, for peer-network meetings from February 2027 |

**The vendor note for A3 (draft copy):**
> Subject: A checklist for your clients' marketing accounts
>
> {Name}, you see more of your clients' invoices than anyone. I wrote up how an owner checks who actually owns their Google Ads, Business Profile, and the rest, and what to ask for if an agency holds one: {link}
>
> No pitch in it and nothing to sign up for. If it helps a client, pass it on.
>
> Blake
> Blake [FOUNDER_SURNAME] · Founder, Techeo · Owner, Homets Air and Heat · [TECHEO_POSTAL_ADDRESS]
>
> This is a business email from Techeo. If you'd rather not get these, reply "stop" and I won't send another.

If `10` classifies the note as commercial, `10`'s C footer replaces the last line and carries the postal address.

| Channel (`techeo.gtm`) | A1 | A2 | A3 | Case studies (v2) |
|---|---|---|---|---|
| #2 Vendor referrals (10) | ServiceTitan consultants | Bookkeepers, financing reps | Bookkeepers, consultants | All ten |
| #1 Peer networks | The Phase 2 contact; a talk segment from February | Same | Same | Talk: "what moved, what didn't" |
| #3 Owner communities | Threads about CSRs not booking | Threads about lead platforms | Threads about agencies | Only when asked |
| #3 Podcasts | Topic card | Topic card | Topic card | The partner may join, with the disclosure |
| #5 LinkedIn | Post in launch week | Post in launch week | Post in launch week | One post per case study |

**In Phase 2 (through Jan 29, 2027),** the kit for A1–A3 is the vendor note, the peer-network send, and the LinkedIn post (`07` #entity-channels), because `techeo.plan90` limits Phase 2 to the three pieces and warming the ten referral sources. Community answers and podcast topic cards start Feb 1, 2027.

**Requested `09` rows:** `vendor-v01`…`vendor-v10` / `email` / `insights-warm-2026` / `a1-body`, `a2-body`, `a3-body`; and for the peer contact, `{network code}` / `email` / `insights-warm-2026` / `{piece}-body`. **Done when:** each kit is sent within five business days of publishing, and every tagged link is in `09`'s builder sheet.

## Content QA checklist {#qa}

Items 1–15 run at stage 5 and items 16–30 at stage 7. Every item must pass.

1. The H1 is one owner question, with a log row.
2. `AnswerFirst` is 200 characters or fewer, names its subject, and answers the H1 alone.
3. Every H2 except `#sources` is a sub-question, and its first sentence answers it.
4. Any piece with Homets or client data says what didn't move.
5. The swap test passes: no paragraph could run unchanged under another agency's name (`techeo.web.strategy` R4).
6. Systems, not people: no CSR is blamed.
7. "We" is identified at first use; "I" is used only for Blake's own decisions; no gendered pronoun for the founder.
8. US English and `03`'s number style.
9. No D8 banned words (CI grep); D6 names are exact.
10. Every figure is a ratio, share, median, or change, with its window beside it.
11. Every figure has a `ready` ledger row and a `SourceNote`.
12. Rounding follows `#numbers`: no nonzero value becomes 0, the change rule is applied, and the floor is met.
13. No third-party benchmark figures; targets are labeled as ours.
14. Examples are labeled in the same sentence and can't be mistaken for Homets' volumes.
15. Glossary definitions are quoted word for word; formulas are in text.
16. Platform facts carry an as-of month and a primary source, re-opened at fact-check.
17. No competitor is named; third-party marks are used nominatively, with the disclaimer where the H1 or title names one (`10` #trademarks).
18. Nothing on `#never-publish` appears, checked line by line.
19. No third-party screenshots and no customer information (D9).
20. Case studies: the disclosure sits above the first number, `#typical` is present, and approval postdates the last change.
21. Links meet `02` #link-insights and #anchor-text, with at most one `/audit` link in the body.
22. External links go only to cited primary sources.
23. The title is 50 characters or fewer, `shortTitle` 40 or fewer, and `description` 120–155; the slug follows `02` #slugs; the id is `techeo.insight.<slug>`.
24. `sources[]` is complete, and the `DataSourceBox` uses the right variant.
25. The AI-assist line is recorded, and any machine draft has had a verified full rewrite.
26. The cold edit and the fact-check happened on days after the draft.
27. For articles about the desk, the Homets CS manager got the heads-up.
28. The preview passes `04` #common-acceptance.
29. The publish date follows `#calendar` rule 4, or is the v2 release date for a v2 case study.
30. Founder approval is in the publishing commit.

## What we never publish {#never-publish}

| Never | Why |
|---|---|
| Homets absolutes: revenue, margin, or counts of calls, leads, jobs, customers, or members; average ticket; revenue per job; spend; cost per lead in dollars; headcount; trucks; pay | D7; Homets' competitors read the site (`techeo.web.strategy` R1) |
| Homets prices, pricebook, fees, promotions, or any `{{price:…}}` value, including SLA minutes | R1; `04` #resources |
| Full SOP text, scripts, the QA rubric or its weights, the five mystery-shop scripts, the 12 AEO prompts, the audit template, the Gap spreadsheet | The Booking Sprint's and the audit's inventory |
| Client data, names, or quotes without written approval; any figure a client removed; occupied markets; design-partner pricing | `10`; D6 |
| Competitor names, "versus" content, or disparagement aimed at any firm | `07` #never |
| Anything that helps Homets' local competitors: towns or boundaries beyond the [HOMETS_METRO] disclosure, staffing, coverage hours, surge rules, which platforms Homets buys and how much, vendor names, hiring or pay, current weaknesses | R1 |
| Customer information, call recordings, unblurred screens, employee names or identifying titles | D9; `10` #releases |
| Teardown or audit findings about any identifiable business | `techeo.gtm` #teardown; `10` #recording |
| Promised results, results by a date, "leads" as the promise | D8; `techeo.legal` |
| The Attribution Layer, until D6 changes; the kill-switch enforcer's name, and any statement that a Homets KPI or level pauses Techeo's new business (Homets' KPI targets may be published as Homets' standing targets, never described as tripwires); the client ceiling | D6, D14; `04` open questions 7 and 8 |
| Homeowner repair, safety, or DIY advice | Techeo doesn't serve homes |
| Stock or AI-generated images of people or job sites | D9 |

## Changes asked of other documents {#change-requests}

| Doc | Change |
|---|---|
| `07` | Use A1–A3's titles and slugs in #query-map and #sd-article. Decide proposed rows PA16 (answer LSA calls first), PA17 (weekly phone numbers), and PA18 (mystery-shop your own phones). Quote `#glossary` word for word in `/llms.txt` "Terms we use," adding the platform-fact entries (#10, #23–#25) only once verified. PA7: use the single verified date for the end of manual LSA disputes (`#glossary` #24). |
| `04` | Open question 13: use the single verified date for the end of manual LSA disputes (`#glossary` #24). |
| `02` | Replace the illustrative slugs in #slugs. `marketplace-leads-never-touched` keeps its plural because it is a metric name. |
| `03` | Link `#faq-my-team` → A1, `#faq-callback-speed` → A2, and `#faq-account-ownership` → A3. Label [HOMETS_SPEED_TO_LEAD_MEDIAN] per open question 3. |
| `01` | Proposed, and not in force until `01` adopts it: change #releases' v1.1 exit to "all three articles live by Jan 21 with indexing requested on publish day, each indexed within 14 days of publishing, and the Jan 29 check records their status," because Google doesn't promise indexing by a date. Until then, `01`'s current exit applies (all three live and indexed by Fri Jan 29, 2027), and `#phase-2-schedule` uses it. Only if the founder answers open question 13 "yes": exempt insights from v3's twelve-week criterion. |
| `09` | Add the `#distribution` UTM rows. |
| `10` | Add ledger rows for [HOMETS_ST_BOOKING_RATE], [HOMETS_UNQUALIFIED_SHARE], [HOMETS_LEADS_IN_STANDARD_SHARE], [HOMETS_BOOKED_AFTER_ATTEMPT_3_SHARE], and [HOMETS_LSA_ANSWER_RATE]; platform-fact rows for A1–A3 and for glossary entries #10, #23–#25; the `#numbers` precision rule; the agreement clause "remove, never alter." Classify the vendor note (commercial or relationship) before the first send on Wed Dec 16, 2026; if it is commercial, it uses the C footer. Add the vendor note to #counsel-package. Add a retention class for case-study interview recordings (delete 30 days after approval) and for raw or unused video footage. |
| `11` | #v1-1, the v1.1 release plan's Exit row: restate `01`'s exit, which is all three live and indexed by Fri Jan 29, 2027, and each sent once with no ask to the ten sources and the peer-network contact. Treat "each indexed within 14 days of publishing" (A3 by Thu Feb 4) as a diagnostic, not the exit. If an article isn't indexed on Jan 29, the exit is missed and logged in `07`'s check. Use the 14-day wording only if `01` adopts the proposal above. |
| `techeo.delivery` · `techeo.guardrails` | The week-0 report carries `#baseline-fields` · December's "admin and legal only" conflicts with `techeo.plan90` Phase 2 and brief D1, so reconcile the wording |

## Open questions for the founder {#open-questions}

1. **The three v1.1 topics.** *Recommended default: approve A1 (booking rate), A2 (marketplace leads never touched), and A3 (account ownership).* A1 stands in as the Homets case study until v2, and afterward both stay live with no 301 (`04`).
2. **Final slugs:** `measure-booking-rate`, `marketplace-leads-never-touched`, `marketing-account-ownership`. *Recommended default: approve.* They follow `02` #slugs.
3. **What [HOMETS_SPEED_TO_LEAD_MEDIAN] measures.** ServiceTitan records the first call placed, but speed to lead runs until someone is speaking. *Recommended default:* if only dial time is measurable, publish it as "median first touch (call placed)" everywhere.
4. **Rounding for lower-is-better metrics.** *Resolved in brief v2 (D7):* round toward the less flattering value; never round a nonzero value to 0.
5. **"I" in articles.** *Recommended default:* Blake may write "I" for Blake's own decisions in bylined articles, and every passage that could be quoted names its subject.
6. **December content work.** *Recommended default:* A1 Nov 30 – Dec 16, then A2's data pull, draft, and cold edit and the start of A3's draft on the Dec 21–23 and Dec 28–30 afternoons, at 2 hours a week or less. No content work on holiday-weekend coverage gaps (`techeo.guardrails` #protected), Dec 24–25, or Dec 31 – Jan 1.
7. **A4's timing.** *Recommended default: A4 is the first v3 article (January 2028 at the earliest),* because D1 limits v1.1 to three articles and `techeo.plan90` has no content calendar. If you want it in March 2027, `00` must first add it to D1, and it publishes only if the Feb 26 weekly review shows the first partner signed, February at 14 Techeo hours a week or less, and `techeo.plan90`'s February targets met (5 teardowns a week, 8+ discovery calls).
8. **Case-study windows and floors.** *Recommended default:* before = the 90 days before kickoff; after = the 30 days ending the day before the review; floors of 100 qualified calls, 50 marketplace leads, and 30 leads for a median.
9. **Interview recordings.** *Recommended default:* recorded only with consent; no AI note-taker; transcribed by Blake or a tool `10` approves; deleted 30 days after approval, once `10` adds the retention class.
10. **Video.** *Recommended default:* remote, on the partner's own device or a recorded video call, with no travel in June or July.
11. **Glossary before the gate.** *Recommended default:* no public glossary until v3's entry criteria are met (Tue Dec 7, 2027 at the earliest); `#glossary` governs every article's definitions from today.
12. **A content contractor.** *Recommended default:* none until the gate clears. After that, a contractor may run the data pull and fact-check, and Blake writes and approves.
13. **Articles before v3.** v3's twelve-week criterion puts the first v3 article in January 2028 even if the gate clears earlier. *Recommended default: no exemption;* the order in `#calendar` stands. If you want articles sooner, `01` must exempt insights from the twelve-week criterion (`#change-requests`).
