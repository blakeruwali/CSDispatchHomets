---
id: techeo.web.strategy
title: Website Strategy — Jobs, Audiences, Releases
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, strategy, audiences, messaging, season-state, releases, success-criteria, risks]
related: [techeo.web.brief, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.design, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.offers, techeo.audit, techeo.delivery, techeo.gtm, techeo.financials, techeo.guardrails, techeo.legal, techeo.plan90, techeo.metrics]
order: 1
---

# Website Strategy — Jobs, Audiences, Releases

**Skeptical owners check techeo.com to see whether Blake is real before they reply, and Techeo uses it to prove on itself the three things it sells. We judge it by qualified reservations, audit purchases, teardown requests, and callbacks made inside the SLA, never by traffic.**

*If you read nothing else:* in year one, owners meet Blake through a peer network, a referral vendor, or a teardown (podcasts are `techeo.gtm` channel #3 and come later), and then open techeo.com (and often call [TECHEO_PHONE]) to decide whether Blake is a real operator. So the site has three jobs, in this order. First, prove the messenger: Blake, named and photographed, owns Homets Air and Heat, and the conflict of interest is disclosed before anyone asks. Second, turn the interest that survives into one action (reserve or buy the $1,500 Engine Audit, request a teardown, or run the calculator), qualifying people before they pay. Third, show the product working on ourselves: every word in server-rendered HTML, every lead called back inside the standard we sell. Releases follow the seasons: v1 goes live on Nov 20, 2026 in WAITLIST, v1.1 adds three quiet-period articles, v2 adds proof on Sep 7, 2027, and v3 waits until the client-#4 gate clears. When the site and the audit compete for an hour, the audit wins and the site ships late.

## What the site is for {#purpose}

The site has four jobs, ranked by their value to the company plan. When two jobs conflict on a page, the higher-ranked one wins.

| Rank | Job | Why it ranks here | Failing when |
|---|---|---|---|
| 1 | **Verify the messenger** | Every `techeo.gtm` channel delivers someone who checks us before replying. If the site fails that check, we lose a deal we never see. | Discovery calls open with questions the site should have answered; teardown replies fall below 30% |
| 2 | **Convert and qualify without founder time** | Founder hours are the binding constraint (`techeo.metrics` #1). Screen out `techeo.positioning` #anti-icp before they pay or book. | An audit refunded for poor fit; unqualified leads outnumber qualified |
| 3 | **Prove the pitch on ourselves** | A prospect can test our Search, Answer, and Booking work here in five minutes. | Raw HTML is empty; a test call hits voicemail; an assistant misstates Techeo |
| 4 | **Compound demand** | Cheapest lead source in year three, most expensive in year one. | Becomes a job at v3 |

**What the site is not:** year one's main lead source, the sales tool (the audit is, per `techeo.audit`), or a Homets asset. In the `techeo.gtm` #process stages, the site confirms who sent a teardown, books or reserves the discovery call, and qualifies the buyer and takes payment for the audit (`/audit` → `form_audit_qualify` → Stripe Checkout). Its `#promises` must match the MSA.

## Audiences, ranked {#audiences}

| Rank | Audience | Why this rank |
|---|---|---|
| 1 | Owner-operator prospects | They buy. |
| 2 | Adjacent referral vendors | Channel #2, the fastest-paying. They use the site on every referral. |
| 3 | Peer-network organizers and podcast hosts | Gatekeepers to channel #1, where the retainers are. One yes puts Blake in a room of ideal clients. |
| 4 | AI answer engines and search crawlers | Cheap to serve if v1 is built right (brief D3, D13), costly to fix later. Accuracy matters now; volume matters from v3. |
| 5 | Design partners and clients | Few, and they already have Blake's number. A narrow job that cannot fail. |
| 6 | Future hires | Rare in year one; the first hire is at Homets. |

### (a) Owner-operator prospects

These are the ideal clients in `techeo.positioning` #icp, reading on a phone between jobs (D10). The site's jobs for them, in order:

1. Let them decide in one screen whether this is a real operator and whether it fits them.
2. Show that the problem is money they have already spent, using their own numbers (`#leak`, `#calculator`).
3. Answer "you're my competitor," "you'll lock me in," and "agencies sell leads that don't book" before they ask.
4. Give one next step that fits the season.
5. Tell poor fits the truth (`#fit`).

What each arrival already believes, and what they need from the site:

| Arrives from | Already believes | Needs |
|---|---|---|
| Teardown email | "A stranger shopped my office. What's the angle?" Suspicious, possibly stung. | Proof the sender is real, the conflict and exclusion zone, and the price and promises. No second pitch. |
| Peer-network intro | "Someone I trust vouches for Blake." Warm, busy. | The numbers the peer mentioned, dated; cost; start date. |
| Referral vendor | "My bookkeeper says this check is free." | What a teardown is, that it costs nothing (including staff time), and who runs it. |
| Podcast | "This operator made sense." Can arrive in any season. | The same person and claim, then a small next step. |
| Search or AI answer | "I have a problem," or "I heard the name." Least context. | The answer first, then a reason to trust it. |
| Design partner's intro (from Feb 2027) | "My peer is a client." | The peer's result in context: how many clients have reached a comparable result to date, and how many have not. v1 cannot give this. v2 must never imply that one result is typical unless the full client record supports it (16 CFR 255.2(b)), and every client result it shows needs written approval (D7). |

### (b) Adjacent referral vendors

This means ServiceTitan implementation consultants, trades bookkeepers, recruiters, and financing reps. They have watched agencies burn their clients, and every introduction they make carries their name. Jobs, in order:

1. **Show them whom to send and whom not to send** (`#fit`), in terms they can check against what they already know about a client: on ServiceTitan, inside the revenue band, already buying leads, and outside Homets' DMA and more than [EXCLUSION_RADIUS_MILES] miles from Homets.
2. **Give them something to hand over.** The forwardable link is `/teardown`. The `techeo.gtm` referral script offers the client a teardown, not an introduction.
3. **Protect their reputation.** `#promises` (client keeps every account; 90-day minimum, then 30 days' notice) is what lets a bookkeeper refer without risk.
4. **Speak each vendor's language once:**
   - ServiceTitan consultants: native ServiceTitan work.
   - Bookkeepers: cost per booked job.
   - Recruiters: the mutual non-solicit.
   - Financing reps: booked replacement jobs.

   From v2 they also get `/partners` (`04`).

### (c) Peer-network organizers and podcast hosts

They assume most "operator" speakers are vendors in costume, and their own standing with members or listeners is what they protect. Jobs, in order:

1. **Present Blake as an operator first.** Use `#operator`, the dated Homets ratios, real photographs, and the disclosure. Include the one-client-per-market-per-trade rule, because members of the same network compete with each other.
2. **Show a sample of teaching** in `/insights` (from v1.1).
3. **Make the invitation easy.** Provide a two-sentence, third-person bio with no gendered pronouns, plus a real portrait. They live in `#operator` in v1 (`03`) and on `/about` from v2 (`04`).

**Done when** a friendly organizer can write an accurate two-sentence introduction of Blake from the site alone. Test this with the peer network joined in Week 9.

### (d) AI answer engines and search crawlers

This audience is two readers: index crawlers, and assistants that fetch pages live. Many read raw HTML without running JavaScript (D3). Jobs, in order:

1. **Be fetchable.** Every word in server-rendered HTML; AI crawlers allowed (D13). *Verify, don't assume:* since July 2025, Cloudflare has asked new zones at setup whether to allow AI crawlers, and it blocks AI-training crawlers by default. It has changed its AI-crawler categories and managed robots.txt defaults since. At zone setup and after each Cloudflare policy notice, confirm the AI-crawler settings and any managed robots.txt allow `07`'s crawler list.
2. **Keep the entity facts identical everywhere.** What Techeo is, its founder, the Homets affiliation and exclusion, the audit's price and turnaround, and whom it serves read the same on pages, `/llms.txt`, structured data, and listings. `07` owns the markup; this document owns the rule.
3. **Write answer-shaped passages.** Question as heading, answer in the first sentence.
4. **Say what Techeo is not.** Techeo is not an HVAC company and does not service homes, so an assistant never confuses it with Homets.

### (e) Design partners and clients

After signing, clients compare the public promises with their contract. Each design partner owes us two introductions (`techeo.gtm` #design-partners), which land on `/`. Jobs, in order:

1. **Keep the public promises identical to the MSA** (`techeo.legal` #contracts), neither softer nor stronger.
2. **Never expose a client.** Publish nothing about a client without written approval (`10`), and never publish design-partner pricing (D6). `/markets` (v2) never lists occupied markets. It answers one market at a time through `form_market_check`, because a published list would identify clients to their competitors.
3. **Respect their staff.** Client CSRs read the site. It describes systems that fail, never people who fail.

### (f) Future hires

This group covers the scorer, contractor, and account manager hires in `techeo.financials` #hiring, plus candidates for the Homets operations owner, the hire that clears the gate. Jobs:

1. **Show Homets candidates the owner isn't leaving.** The WAITLIST line "our trucks come first" does this at no cost.
2. **Show every candidate the standards are written down.** Claim 2's proof covers this.

There is no careers page until a hiring trigger fires.

**Visitors the site does not serve:**

- **Homeowners.** One FAQ line and the receptionist script say Techeo does not service homes. We never refer them to Homets.
- **Homets' local competitors.** Assume they read every word (R1).
- **Homets staff.** They hear about the site from Blake before launch (R9).
- **Redesign, logo, and social-content shoppers.** The site never offers those services, and `#fit` names them as out of scope.
- **Vendors pitching Techeo.** `08`'s qualification filters them out.

## Arrival paths {#arrival-paths}

**First screen** means a 375 × 667 CSS-pixel frame as emulated in Chrome DevTools (`05` owns breakpoints). Real iOS Safari shows less, because its toolbars take part of that height (`05` #first-screen). In WAITLIST, the banner uses part of it.

**First screen of `/`, in priority order.** Items 1–4 must be visible in the smallest first screen `05` defines, including iOS Safari toolbars; items 5–6 may fall below it. Every "one thing" the table below names for an arrival at `/` comes from this list and never reorders it. Where a row names item 6, the ratio sits as close to the fold as that order allows.

1. The WAITLIST banner, one line, in WAITLIST only.
2. The H1, which is the core claim.
3. The operator line: Blake, owner of Homets Air and Heat in [HOMETS_METRO], no clients within [EXCLUSION_RADIUS_MILES] miles, with the portrait.
4. Claim 3, in one line.
5. The primary CTA for the state. The header CTA stays visible.
6. [HOMETS_BOOKING_RATE_FROM] → [HOMETS_BOOKING_RATE_TO] over [HOMETS_WINDOW], if D7 allows it.

| Arrival | Landing URL | The one thing the first screen must show | Next step: OPEN | Next step: WAITLIST |
|---|---|---|---|---|
| Teardown email | `/`, from the signature link. Never `/audit`, because outbound never says "audit" (`techeo.gtm` #teardown). Never `/teardown`, because they already have one. | Who is behind it: Blake, owner of Homets Air and Heat in [HOMETS_METRO], taking no clients within [EXCLUSION_RADIUS_MILES] miles of Homets | Reply to the email; on the site, `/audit` | Reply, or `form_audit_reserve` |
| Peer-network intro; brand search | `/` | The operator claim with [HOMETS_BOOKING_RATE_FROM] → [HOMETS_BOOKING_RATE_TO] over [HOMETS_WINDOW]. If D7 omits the proof, the operator's identity alone. | `/audit` | `form_audit_reserve` |
| Sent by a vendor | `/teardown` | That it is free, that it needs no logins or staff time (we use only what any customer can see: their published number and web form), what it is, and who runs it | `form_teardown_request` | Same form, queued, with the opening date shown |
| The vendor themselves | `/#fit`, then `/teardown` to forward | Who it is for, and who it is not for | Forward `/teardown`; from v2, `/partners` | Same |
| Podcast | `/`, typed | The core claim in the words used on air, next to Blake's portrait | `#calculator` or `/teardown`; ready buyers `/audit` | `#calculator`, `form_teardown_request`, or `form_audit_reserve` |
| Problem search (v1.1+) or AI citation | `/insights/<slug>` or the cited URL; from v2, `/engines/booking`, `/pricing`, `/case-studies/<slug>` | The answer or cited fact in the first paragraph, worded as cited | `#calculator`, then `/teardown` | Same |
| Phone test | [TECHEO_PHONE] | A live person, answering within the standard, who knows what Techeo is | A discovery call booked | A reservation taken and the opening date stated |
| Organizer or host vetting | `/` → `#operator` → `/insights` | Operator identity and the disclosure | Reply to Blake | Same; WAITLIST never closes this path |

**Attribution.** Spoken URLs and forwarded links arrive as direct traffic. UTMs go on the links Blake controls (`09`). Everything else is measured by asking (#success).

**Acceptance: the five-second test.** Show the first screen of `/`, `/audit`, and `/teardown` for five seconds each to five people, at least three of them contractors or trades-adjacent. Ask: who runs this, what does it sell, and what would you do next? **Done when** four of the five answer all three correctly, in both season states.

## Message hierarchy {#message-hierarchy}

This section sets what to say; `03` and `04` write the copy.

**The core claim** comes from `techeo.positioning`: *Every agency in this industry sells traffic. Techeo sells booked jobs, and starts by fixing the ones the client already paid for and lost.* On the site, that means we are measured by booked jobs, and the first money we find is money the owner has already spent. `/`, `/audit`, `/teardown`, and every v2 marketing page restate the core claim in their first screen. `/insights/<slug>` leads with the answer. Legal, thanks, and 404 pages are exempt.

### The three load-bearing claims

| Claim | What to say | Proof required before it is published | If the proof is not ready | Where |
|---|---|---|---|---|
| **1. Run by an operator** | Blake owns and runs Homets Air and Heat, and Techeo installs the system that runs Homets' own phones. | Blake named with a real portrait (D8, D9). Homets named, with [HOMETS_METRO] and the exclusion policy. Homets ratios per D7, dated [HOMETS_WINDOW]. Operational photos with releases. A phone answered live. | Omit `#proof` (D7). The claim rests on identity, disclosure, photos, and the phone. Never fill the gap with adjectives. | `#top`, `#proof`, `#operator`, footer |
| **2. The system is real and written down** | Techeo installs written SOPs, SLAs, a scoring rubric, and channel playbooks, not advice. | Show the system; don't just count it. Include one real Homets standard excerpt with price tokens removed, the audit's five weighted workstreams, and the Gap Statement arithmetic. Any document count must be a dated `[HOMETS_<METRIC>]` token (e.g. `[HOMETS_CSM_DOC_COUNT]`), recounted on the publish date; the "51" in `techeo.positioning` is a draft. Excerpts only after the Homets → Techeo license is signed. | Describe the parts without excerpts. | `#engines`, `#how-it-works`, `#audit`, `/audit` |
| **3. You keep every account** | Every account is in the client's name and on the client's card. After the Booking Sprint's 90-day minimum, leaving takes 30 days' written notice (D6; `techeo.offers` #terms), and everything is handed over (`techeo.delivery` #offboarding). | The MSA clause (`techeo.legal` #contracts) and `techeo.delivery` #offboarding match what the site says. From v2, a client confirms it in their own words. | Publish nothing stronger than the draft MSA. | One line by the end of `#top`; in full in `#promises`, the FAQ, and `/audit` |

**The 70% sentence.** The pitch in `techeo.positioning` #pitch says our system "books 70% of our own qualified calls." 70% is the standing target in `content/sops/csm/kpis.md`, not a measured result. On the site it appears only as [HOMETS_BOOKING_RATE_TO] with [HOMETS_WINDOW], or explicitly as a target.

**Supporting claims.** None of these leads a page; each hangs from a load-bearing claim.

| Supporting claim | Supports |
|---|---|
| "We do not scale demand into a broken phone" (`techeo.offers` rung 3) | The core claim |
| The four engines, with Booking listed first under MEO. These go at `#engines`, never in the hero: owners buy booked jobs, not frameworks. | The core claim |
| The audit prices the gap from the client's own data | Claim 2 |
| We decline shops that don't need us | Claim 1 |
| The season state | Claim 1 |
| The disclosure package: the [EXCLUSION_RADIUS_MILES]-mile exclusion, one client per market per trade, a data firewall, and mutual non-solicit | Makes claim 1 safe to state |

### The order a skeptical owner needs them in

| # | The owner's question | Answer | Where (v1 homepage) |
|---|---|---|---|
| 1 | Is this about my problem? | The core claim | `#top` |
| 2 | Who is saying this? | Claim 1, with Homets named in the same breath | `#top`, `#proof` |
| 3 | What's the catch? | Claim 3, in one line | End of `#top` |
| 4 | Is my phone leaking, and what is it worth? | Their own numbers | `#leak`, `#calculator` |
| 5 | What would you actually do? | Claim 2 | `#engines`, `#how-it-works`, `#audit` |
| 6 | Aren't you my competitor? | The disclosure package | `#operator` |
| 7 | What do you commit to? | Claim 3 in full | `#promises` |
| 8 | Is this for a shop like mine? | Fit and non-fit | `#fit` |
| 9 | What does it cost, and when? | Price, FAQ, and a CTA that matches the season | `#faq`, `#start` |

This owner has been sold traffic before, so the order runs relevance, then the messenger (our only real difference from their last agency), then the catch, and only then arithmetic. `techeo.positioning` says naming the account wound first "wins the room." On a page, "first" means before the owner has to scroll, not ahead of the claim that makes us worth hearing. That is why claim 3 gets one line in the hero and a full section at position 9. v2 pages use the same order: outcome, who delivered it, then what we promise.

**Never say:**

- D8's banned words.
- "Leads" as the promise.
- A Homets absolute, or any undated number.
- A benchmark presented as fact.
- "Free audit."
- Anything that blames CSRs.
- A result promised by a date.
- Urgency not tied to the real season state.
- A competitor's name.

**Done when:**

- Every claim maps to a load-bearing claim, a supporting claim, or a D6 fact. Anything that maps to none is cut.
- Every claim has evidence in the claims ledger (`10`) before it is published.
- The five-second test and the swap test (R4) pass.

## Season state is strategy {#season-strategy}

D2 defines the two states. `06` builds the flip, `08` sets CTA behavior, and `03` writes the words. This section explains why the states exist and what they must achieve.

### WAITLIST as positioning

- **It makes claim 1 visible.** Agencies never close. Techeo closes when its clients are busiest, because the founder's own company is busiest then too, and owners recognize that calendar.
- **It is honest scarcity.** D14 bans fake scarcity. A real limit stated plainly persuades because everyone else fakes theirs. One client per market per trade (`techeo.gtm` #exclusivity) works the same way.
- **It shows the discipline we sell.** The Booking Sprint installs capacity rules, and Techeo visibly follows its own.
- **It makes the guardrails public.** A control works only when someone else can see it (`techeo.guardrails`). If the site shows OPEN while the kill switch is tripped, that is a false public statement, not a private lapse. That is why the enforcer can require the flip.

### WAITLIST as a list-building tool

With a 6–10 week cycle (`techeo.gtm` #process), a first touch on Feb 1 signs between mid-March and mid-April. A first touch after about Feb 19 may miss the Apr 30 flip, and one after about Mar 19 almost certainly will. In the fall, first touches after about Oct 19 roll into February 2028. So:

1. **The list on Feb 1 decides the spring window.** Reservations taken Nov 20 – Jan 31 are our head start. They arrive unasked: Phase 2 has no selling and a 4-hour weekly cap (brief D1; `techeo.plan90` #phase-2), so the site and the receptionist take them without founder selling time.
2. **The summer list adds to September.** `techeo.plan90` sets "Pipeline built for September" as an April target (#phase-3). Reservations taken May 1 – Sep 6 arrive with no founder selling (`techeo.guardrails` #seasonality) and add to that April pipeline.
3. **Every reservation is market data.** Reservations show where demand is, where one-per-market conflicts will come, and which peer network to join. `08` defines the fields. At minimum, a reservation records market (metro or county), trade, and peer-network membership, plus the exclusion check, so these three uses work.
4. **It is the cheapest positioning test we have.** If prospects who reach the site by Jan 31 don't reserve (O1 below 3), the message is wrong.

### The risk: WAITLIST reads as "closed"

A prospect may read it as "not real yet," "the founder lost interest," or "no demand." Every WAITLIST period follows seven rules:

1. **Always a date.** "New audits open February 1," never "soon."
2. **Always something to do now:** reserve, request a teardown (queued), run the calculator, or read.
3. **The phone is always live.** WAITLIST closes discovery slots (D11), never the phone or the callback SLA.
4. **Nothing disappears.** Sections, prices, and URLs stay the same. Only the banner, `#start`, CTA labels, and the form behind each CTA change (brief forms table; `08`). Greyed-out buttons or "coming soon" pages read as closed.
5. **Give the reason once, as a strength,** in the banner and in `#start`. No other section apologizes.
6. **The confirmation promises a contact date,** and `08` keeps that promise (O7).
7. **No countdown timers or "spots left" counters** (D14).

**Done when** four of five testers who see the WAITLIST first screen for five seconds answer "Is this company taking new clients?" with some version of "Yes: reservations now, audits from [date]." If they say "closed," fix the banner copy, not the policy.

### The edges of each window

- **Opening days.** On Feb 1, and on Sep 7 if the Aug 16 gate check passes, the whole queue is released. Reservations are contacted in the order received, within two business days (O7). `08` staggers those callbacks so they stay outside the protected blocks. Queued teardown requests start in the opening week at `08` F5's 5 a week, ahead of outbound, so a long queue delays the first outbound teardown (#success). If the gate check fails, reservers are told the `capacity` date (open question 2) within two business days instead.
- **Closing days.** An audit bought in the last two weeks of a window (from about Apr 16 or Nov 16) can read out after the flip once access lag is counted, because the 7-business-day clock starts when access is granted (`techeo.audit` #commercials). With same-day access, a Fri Apr 16 purchase reads out Tue Apr 27 and a Tue Nov 16 purchase reads out Mon Nov 29 (Thanksgiving and the Friday after are holidays, `08` #sla); from about Apr 22 or Nov 18, the readout falls after the flip even then. That puts it in May (delivery only) or December (admin and legal only). A December readout breaks `techeo.guardrails`' December allowance, so fall readouts must be held by Nov 30 or the fall cutoff moved earlier. The audit's 30-day credit window then runs into May or December, when no retainer is signed. D2 keeps the site OPEN to Apr 30 and Nov 30, so buyers in those last two weeks must see the readout date, and when a retainer can be signed, before they pay (open question 1).
- **The `capacity` state.** It must show a date we can keep (open question 2).

## Release plan {#releases}

D1 fixes each release's date and contents. This section fixes each release's job, its boundaries, and its criteria.

**The asymmetry.** v1's scope is fixed and its date can move. Outbound does not link to the site before Feb 1; only warmed vendors and peer-network contacts see it. So a late v1 costs indexing time and some of O1's reservations, not outbound deals. v2's date is fixed and its scope can move. Sep 7 is the day selling resumes, so a late v2 costs the fall window. v1.1 and v3 ship when their entry criteria are met, never because a date arrived.

| Release | Live | Company-plan phase | Job |
|---|---|---|---|
| v1 | Fri Nov 20, 2026 | `techeo.plan90` Phase 1 exit, then the site of record through Phases 2 and 3 and the summer | Pass the credibility check, take reservations, and sell the audit from Feb 1 |
| v1.1 | Dec 2026 – Jan 2027 | `techeo.plan90` Phase 2 | Supply the no-ask material for warming referral sources, and give organizers something to vet |
| v2 | Tue Sep 7, 2027 | After `techeo.plan90` Phase 3; `techeo.guardrails` Phase 4 → 5 | Answer "your only case study is your own company" |
| v3 | Q4 2027 onward | `techeo.guardrails` Phase 5, gate cleared | Make techeo.com a lead source |

### v1 — Launch

**Job.** v1 meets the Phase 1 exit criterion, "a live one-page site," gives crawlers ten weeks of lead time before the first teardown goes out (D1), and is what warmed contacts check during Phase 2. It is easy to forget that v1 also carries all of Phase 3's selling and the summer WAITLIST, so it serves as Techeo's public face for nine and a half months.

**Adds.** The brief's v1 URL row, the receptionist line, and four forms: `form_audit_reserve`, `form_audit_qualify` (dormant until Feb 1), `form_teardown_request`, and `form_calculator_email`.

**Deliberately excluded:**

- All v2 pages.
- Testimonials, logos, and counters (D7).
- The Demand Engine price, and design-partner pricing (never shown; D6).
- Everything in D14.
- Any Homets number that did not come from the Week 1 baseline pull.

**Entry criteria.**

- The domain preflight is done (D5).
- Techeo LLC owns every account (D4).
- No founder copy hours are spent until the Homets audit PDF exists (Week 4), unless `11` shows the time fits without moving an audit task. The wait also improves the copy: `#leak` is best written by someone who has just watched their own phones get scored.

**Launch gate.** These are the non-negotiables; the full checklist is `11`'s.

- The site is in WAITLIST / `season`, with Feb 1 shown.
- All content is in the raw HTML.
- [TECHEO_PHONE] is answered live and has passed one self mystery-shop.
- Every form is tested end to end, including the callback.
- The disclosure is on the homepage and in every footer.
- There are no unfilled tokens, no numbers that fail D7, and no banned words.
- `#proof` appears only if the baseline is real.
- D9 in full: likeness releases on file; the Homets → Techeo license covers every Homets image and mark shown, or that item is omitted; no customer information visible.
- Counsel has reviewed the legal pages against `10`'s requirements.
- The WAITLIST five-second test (#arrival-paths) and the "taking new clients?" test (#season-strategy) pass on the production build.
- Search Console and Bing Webmaster Tools are verified.

**Slip protocol.** If, on Fri Nov 6, 2026, the build threatens any Week 7–8 audit task, ship the **floor** on Nov 20 instead of the full v1. The floor is the WAITLIST homepage with `form_audit_reserve` and `/thanks/audit-reserved`, the disclosure, `/privacy`, `/terms`, `/accessibility`, 404, robots, sitemap, `/llms.txt`, and the phone line. `/audit`, `/teardown`, `/thanks/audit-purchased`, and `/thanks/teardown` follow by Fri Jan 15, 2027, inside `11`'s Phase 2 hours and the 4-hour cap. Finishing them is not on `techeo.plan90` #phase-2's list, so it is a Phase 2 exception the founder approves in advance (open question 6). The floor satisfies the Phase 1 exit criterion, so Phase 3 never slips because of the website.

**Exit criteria.** All must be true by Fri Jan 29, 2027:

- Every indexable v1 URL in `02`'s manifest (`/`, `/audit`, `/teardown`, `/privacy`, `/terms`, `/accessibility`) is indexed in Google and Bing, and the `/thanks/*` pages and the 404 are confirmed noindex.
- OPEN has been rehearsed on a preview deploy, including one live-mode `form_audit_qualify` → Stripe Checkout → `/thanks/audit-purchased` run, refunded afterward.
- The OPEN five-second test passes on the OPEN rehearsal preview.
- The audit has been run three times.
- Four weeks of SLA compliance have been measured (D11).

**Success.** By Jan 31: O1, S2, S3, and S4. By Apr 30: at least two paid audits, O4 at zero, O8 met, and no site-caused objection heard three times without a copy fix.

### v1.1 — Quiet-period content

**Job.** Phase 2 calls for three articles "using the Homets numbers" and for warming ten referral sources "with no ask attached." The articles are that gift. They also serve as the teaching sample organizers look for, and they are the first answer-shaped pages for answer engines.

**Adds.** `/insights` and three articles, briefed by `12`, each covering one load-bearing claim:

1. Claim 1: Homets' before-and-after numbers.
2. Claim 2: a written standard in use.
3. Claim 3: a tool owners can use today (for example, checking who owns each marketing account), anchored by one dated Homets ratio from the Week 1 baseline. If the baseline isn't pulled, article 3 ships without it and the deviation from `techeo.plan90` is logged.

Each article ends with the calculator or a teardown, never a pitch.

**Deliberately excluded.** A cadence, newsletter signup, gated downloads, guest posts, AI-spun text (D13), and numbers that don't come from the baseline.

**Entry.** v1 or the floor is live, and the baseline has been pulled. If it hasn't, only article 3 ships. The work must fit the 4-hour Phase 2 cap, per `11`.

**Exit.** By Fri Jan 29, 2027, all three articles are live and indexed, and each has been sent once, with no ask, to all ten referral sources and the peer-network contact.

**Success.**

- **Replies:** at least three of the ten sources reply with something substantive. This is a target; the reply rate is an assumption.
- **Invitations:** at least one invitation (podcast, network session, or lunch-and-learn) traced to an article by Apr 30. This is a target.
- **Mentions:** mentions on discovery calls are logged, with no target.
- **Pageviews:** not measured.

### v2 — Proof

**Job.** `techeo.positioning` names the weakness: "we have one case study and it is our own company." v2 answers it on the day selling reopens "with three case studies in hand" (`techeo.plan90`). It also moves the questions that eat discovery calls (price, how each engine works, and market availability) onto pages.

**Adds.** The brief's v2 URL row.

**Deliberately excluded.** Attribution Layer pages, design-partner pricing, the client portal (triggered at 8 clients), v3 pages, a logo project, and anonymized case studies. A case study is published under the client's name with written approval, or not at all.

**Entry criteria.**

- **Day-90 reviews held.** Each partner has a signed week-0 baseline (`techeo.delivery` #sprint) and written publication approval (`10`).
- **Gate check on Mon Aug 16, 2027.** If three clients are signed (including any still awaiting onboarding) and no Homets operations owner is in seat, v2 launches in WAITLIST / `capacity`. `techeo.plan90` has the third partner signed by Apr 30 but onboarded only in September, so counting active clients would let the site sell client #4. D2 overrides D1's "flip to OPEN." The proof pages ship regardless, because they feed the queue.
- **Writing hours shown by `11`.** The case studies can't be drafted before the late-June and late-July reviews, and `techeo.guardrails` allows Techeo maintenance only in those months. May is delivery-only (`techeo.guardrails` #seasonality), so the May writing also counts against the 26-hour cap, and `11` must show it fits beside Phase 4 delivery (`techeo.guardrails` #time-budget). Recommended schedule (exception: open question 12):
  - May: engine, pricing, about, markets, and partners pages, adapted from v1.
  - Within two weeks of each review: that partner's case study.

**Scope flex.** Any case study not approved by Aug 16 follows after launch; the date does not move.

**Exit.**

- Every v2 URL is live in raw HTML and indexed.
- Every case-study number passes D7 and is approved by the client.
- Every design-partner case study, quote, and video carries a clear and conspicuous disclosure next to it that the client is a Techeo design partner who received discounted services in exchange for sharing results (FTC Endorsement Guides, 16 CFR 255.5). No price is stated (D6). The Homets case study states that Blake owns Homets.
- `/pricing` matches `techeo.offers`.
- `/markets` reveals no client.

**Success by Nov 30, 2027.** These are targets:

- At least three paid audits in the fall window if the gate allows new clients; otherwise at least six qualified reservations held for February 2028.
- The qualified-lead share is at least 10 points above v1's.
- Price is the first question on at most 25% of discovery calls (target). Assumption: the v1 baseline is above 25%; measure it Feb–Apr.
- At least 50% of site-originated audits convert to a retainer.

### v3 — Engine

**Job.** In `techeo.guardrails` Phase 5, Techeo runs its own Search and Answer engines in public. v3 creates demand, and demand without capacity only lengthens the queue. That is why v3 is the only release gated on the Homets hire.

**Adds.** The brief's v3 URL row, plus insights on a regular cadence. Page triggers live in `04`; the publishing calendar lives in `12`.

**Deliberately excluded.**

- Programmatic city pages, bought links, and AI-spun articles (D13).
- Paid traffic, until organic has a measured cost per qualified lead for paid to beat (`techeo.gtm` #no).

**Entry.**

- The gate is cleared.
- Writing hours exist within the founder's Phase 5 budget, or from the content contractor. `techeo.guardrails` #time-budget sets Phase 5 at 30+ hours a week once the gate is cleared, while `techeo.metrics` #1 still targets ≤26; the founder reconciles the two before v3 starts.
- Twelve weeks of v2 lead data exist to serve as the baseline.

**Exit.** Each page exits when its trigger fires and the page is published, indexed, and added to the prompt test.

**Success.** Targets are set from the v2 baseline and reviewed quarterly:

- Qualified leads whose first touch was organic search or an AI answer.
- The share of retainers that started that way.
- Founder hours per qualified organic lead, trending down.
- Zero pages that exist only to rank.

## First-12-month success criteria {#success}

The window runs Fri Nov 20, 2026 – Fri Nov 19, 2027: two WAITLIST periods and two OPEN periods (the second partial). Each number is a **Target** (a miss triggers a review) or an **Assumption** (replace with data). `09` builds the scorecard; `08` owns the pipeline that records it.

### The funnel the site serves

This applies the `techeo.gtm` stage rates (targets) to `techeo.plan90`'s February pace, assumes that pace holds, and rounds down. **The pace is one cap for every source.** `08` F5 allows at most 5 teardowns a week across outbound targets (`08` F9), `form_teardown_request`, and, from v2, `form_partner_referral`, and requests go first. So the spring window has 65 teardown slots in all, and every requested teardown takes one of them from outbound.

| Stage | Rate | Spring window, all sources | Closeable: sent Feb 1 – about Mar 19 |
|---|---|---|---|
| Teardowns sent | 5/week × 13 working weeks (Feb 1 – Apr 30), shared by every source (`08` F5) | 65 | 35 |
| Replies | 30% | 19 | 10 |
| Discovery calls | 50% | 9 | 5 |
| Audits sold | 40% | 3 | 2 |
| Retainers | ≥50% of audits delivered | 1 | 1 |

Only teardowns sent by about Mar 19 can become spring retainers. Requested teardowns take the outbound rates here (**Assumption**). The owner or a vendor has already asked, so a request may convert better than a cold target, but nothing measures that yet. After the spring window, replace the assumption with `09`'s `teardown_to_discovery` for requests beside the teardown-sent → discovery rate `08` F9 records for outbound.

**The February queue release.** Teardown requests taken in WAITLIST are queued for the next opening (brief forms table), and F5 serves them first. O5 assumes about 6 a window: 5 from vendors and 1 from search or AI answers. If all 6 arrive before Feb 1, as they will if the vendors warmed in Phase 2 refer in December or January, they fill the first week of the window and one slot of the second:

| | No requests | 6 requests queued, released Feb 1 |
|---|---|---|
| Week of Feb 1 | 5 outbound | 5 requested, 0 outbound |
| Week of Feb 8 | 5 outbound | 1 requested, 4 outbound |
| Outbound teardowns, Feb 1 – Apr 30 | 65 | 59 |
| Outbound sent by about Mar 19 → replies → calls → audits → retainers | 35 → 10 → 5 → 2 → 1 | 29 → 8 → 4 → 1 → 0 |
| Spring retainers from all 35 closeable slots, requests at outbound rates | 1 | 1 |

The queue doesn't change how many teardowns the spring window gets, only who receives them. It does change what outbound can carry: outbound alone no longer rounds to a spring retainer, and its first teardown moves to the week of Feb 8. The one retainer the teardown motion yields by Apr 30 then depends on the 6 requests converting at least as well as cold targets. Each further request before about Mar 19, queued or not, moves one more outbound teardown out of the closeable weeks.

**Priority rule (decision for `08` F5; the default in `08` open question 6).** One shared cap, with no separate site allowance: at most 5 teardowns a week across all sources, site and partner requests first in the order received, and outbound filling whatever slots remain that week. A separate allowance would add teardowns beyond `techeo.plan90`'s pace, and founder hours are the binding constraint (`techeo.metrics` #1). Requests go first because each carries a promised date, and often a vendor's name (#audiences (b), job 3), while a cold target can wait a week. If the founder later wants more outbound in February, that is a written change to this rule, recorded in `08` F5, never a quiet delay to a promised request.

Teardowns from every source produce about one spring retainer between them. Requests add no teardown capacity, only a possibly better rate per slot. So the other two design partners `techeo.plan90` wants signed by Apr 30 have to come from peer networks and from the reservations held on Feb 1, neither of which takes a teardown slot unless a discovery call ends in `08` F6's "Teardown first." That is where the site's jobs of verifying, reserving, and qualifying carry the spring window. Reservations held on Feb 1, and first touches in roughly the first three weeks of February, are the ones likely to close by Apr 30. Reservations move no faster through the cycle (O13 excludes WAITLIST weeks), but they are already warm and qualified, and they are called within two business days of the flip. New first touches after about Feb 19 may miss Apr 30, and after about Mar 19 will.

### Outcome criteria

| # | Criterion | Number | Type | Basis |
|---|---|---|---|---|
| O1 | Qualified audit reservations, Nov 20 – Jan 31 | ≥3 | Target | Assumes prospects reach the site through 10 warmed sources and 1 peer network, with no ask made |
| O2 | Paid Engine Audits, all paid through `/audit` | ≥2 Feb 1 – Apr 30 (`techeo.plan90` #phase-3). ≥3 Sep 7 – Nov 19 only if the Aug 16 gate check allows new clients; otherwise 0, and v2's ≥6-reservation target applies. 12-month total: ≥5 if the gate is open, ≥2 if it is closed. | Target | `techeo.plan90`; `techeo.guardrails` #gate. The Base scenario's 7 audits (`techeo.financials`) cover Oct 2026 – Sep 2027 and are not used. Spring: teardowns from every source share 65 slots (`08` F5) and yield about 2 audits early enough to close by Apr 30 (#success). A request adds no slot; it takes one from outbound. With 6 requests queued on Feb 1, outbound's own share is 1, and the second audit has to come from the requests, reservations, or peer networks. |
| O3 | Audit → retainer, delivered audits only | ≥50% | Target | `techeo.metrics` #4 |
| O4 | Paid audits refunded for a fit problem `form_audit_qualify` missed | 0 | Target | Brief forms table |
| O5 | Qualified `form_teardown_request` submissions | ≥12 | Target | Assumes 5 of the 10 vendor sources each send one qualified request per OPEN window (10), plus 2 from search or AI answers. Requests queued in WAITLIST count. Podcasts are excluded (`techeo.gtm` #channels). They add demand, not teardown capacity: each shares `08` F5's 5-a-week cap with outbound and goes first, so the spring window's 6 leave 59 of its 65 slots to outbound (#success). The same cap and order apply in the fall, with `form_partner_referral` sharing them from v2. |
| O6 | Qualified reservations, May 1 – Sep 6 | ≥6 | Target | Assumption: summer reservations arrive at about O1's Nov–Jan weekly rate; replace with O1's actual on Feb 1. Adds to the September pipeline. |
| O7 | Reservations contacted within 2 business days of each flip to OPEN | 100% | Target | WAITLIST promise |
| O8 | Qualified reservations that reach a discovery call within 30 days of an opening | ≥50% | Target | Assumption: half of reservers still want an audit at the opening |
| O9 | Site leads called back live inside the SLA | ≥95% weekly | Target | D11. `08` sets the minimum sample and seeds tests. |
| O10 | 15-minute figure published | Feb 1, 2027 if January complies; otherwise Mar 1 | Target | D11 |
| O11 | Form leads that match the ICP | ≥60% | Assumption | Reset after 20 leads. If below 40% for an OPEN window, rewrite `#fit`. |
| O12 | Retainers whose first touch was the site | ≥1 | Target | Tests whether the site does more than verify |
| O13 | Median first touch → retainer, site-originated | ≤10 OPEN weeks | Target | `techeo.gtm`; WAITLIST weeks excluded |

### Standards and guardrails (pass/fail)

| # | Criterion | Target |
|---|---|---|
| S1 | D7 violations, banned words, or unfilled tokens on live pages, checked at every deploy | 0 |
| S2 | Booking sub-score of techeo.com in the monthly self mystery-shop, scored with the `techeo.audit` rubric | ≥86, the same threshold at which `techeo.audit` declines a composite Engine Score as already well run, applied here to the Booking sub-score |
| S3 | Wrong facts assistants attribute to techeo.com in `07`'s monthly prompt test | 0. Citation frequency is a diagnostic. |
| S4 | Indexable URLs indexed in Google and Bing within 30 days; brand query returns techeo.com first by Feb 1 | 100%; yes |
| S5 | Pages with full content present in unrendered HTML | 100% |
| S6 | Performance and accessibility budgets from `06` and `10` | Pass at every release |
| G1 | Site hours logged on their own line in the weekly Techeo time log, and within `11`'s budget | Every week |
| G2 | `techeo.plan90` audit-build tasks (Weeks 2–8) that slip because of site work | 0 |
| G3 | Homets KPI compliance (`techeo.metrics` #2) | Pass. A fail overrides this page. |

**Asked on every discovery call.** `08` logs the answers and `09` reports them.

1. "What did you look at before this call?"
2. "Was there anything on the site or the phone that almost stopped you?"

These questions are the cheapest attribution we have and the only measure of job 1. **Target:** any objection raised by three prospects gets a fix within two weeks.

**What does not count.** Sessions, pageviews, bounce rate, rankings, impressions, list size, followers, and domain authority. `09` may track these as diagnostics, but none of them justifies a change on its own (`techeo.metrics` #not-measured).

**Review cadence:**

- **Weekly (Friday):** hours, leads, SLA.
- **Monthly (by the 10th):** the scorecard, the self-shop, and the prompt test.
- **Quarterly:** re-score techeo.com with the `techeo.audit` rubric, and replace assumptions with data.

## Website risks {#risks}

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Homets' local competitors mine the site for intelligence | High they read; Medium they act | High: Homets is the 4–8× asset | Ratios only (D7). No Homets employee named, which blocks poaching. SOP excerpts only with price tokens stripped, and only if licensed. No customers, routes, or unblurred boards (D9). Weaknesses published only after they are fixed, in the past tense; never a current gap, such as thin weekend coverage, that a competitor could advertise into. | `03`, `05`, `10` |
| R2 | Prospects mystery-shop Techeo | Certain | Severe: one missed call disproves the pitch | D11 in full. Monthly self-shop at awkward hours: weekday 09:30, weekday 17:45, Saturday 08:00, plus one form (`techeo.audit` scenarios). The weekday 09:30 call is placed by the named enforcer or a peer, never the founder (`techeo.guardrails` #protected). The founder may place the 17:45, Saturday, and form tests. `08` #mystery-shop "Who" must match this. "Same business day" until 15 minutes is earned. The receptionist is briefed on both states. | `08` |
| R3 | Unsubstantiated claims | Medium | Severe: FTC exposure and lost credibility | D7. Claims ledger (`10`). Results stated as targets. Testimonials and case studies only with approval and the material connection disclosed (16 CFR 255.5). The founder signs off every number. | `10` |
| R4 | Looking like every trades agency | High | High: dismissed on pattern | **Swap test**: rewrite any section where a competitor's name could replace ours unchanged. Apply D9 and D10. Publish the price, the decline list, and dated numbers. | `03`, `05` |
| R5 | WAITLIST reads as weakness | Medium | Moderate–High | The seven rules and the WAITLIST five-second test | `03`, `08` |
| R6 | Slow or JavaScript-dependent site | Low while D3 holds | Severe: disproves the SEO/AEO pitch | Raw-HTML test in CI. Scheduler and Stripe only after qualification. The calculator's formula also in HTML. A written reason for every third-party script. Cloudflare crawler settings verified. | `06`, `07` |
| R7 | Founder hours | High | High: copy cannot be delegated (D15) | `11`'s hours arithmetic and G1. The founder writes and approves, never builds. | `11` |
| R8 | The site becomes a Phase 1 time sink that delays the audit | High: a site feels like progress | Severe: "the audit is the company" | No copy hours before the Homets audit PDF exists. The Nov 6 checkpoint and the floor. G2. In a short week, the site task is dropped first. | `11` |
| R9 | Homets read as a competitor, or Homets staff read the site as the owner leaving | High / Medium | Moderate. A rattled CSM desk can trip the kill switch. | The disclosure package in the first screen and every footer. Blake briefs Homets staff before launch. | `03`, founder |
| R10 | Case-study approval withheld, or a partner misses the lift | Medium | High for v2 | Approval written into the Design Partner Agreement. v2's scope flexes, not its date. No anonymized substitutes. | `04`, `10` |
| R11 | Problem with the TECHEO name or the domain's history | Unknown until Week 1 | High | D5, the Week 1 trademark search, and a wordmark only (D10) | `06` |
| R12 | Reservations go stale | Medium | High: spring depends on them | O7, `08`'s sequences, and a contact date in every confirmation | `08` |
| R13 | Website cash cost exceeds `techeo.financials` | High: `11` estimates about $20,900 pre-revenue at plan (range $11,600–$39,800) against a $0 line and a $13,700 total high estimate, taking the startup total to about $29,900, and about $44,700 in year one with v2 | High: spends the reserve that funds the Homets operations hire (`techeo.financials` #cash, #hiring) | `11`'s reconciliation; the floor and lean-scope levers; founder approval of each cost line before commitment | `11` |

## Anti-goals {#anti-goals}

The site must never:

1. **Try to be year one's main lead source.** It verifies and converts what the channels send.
2. **Sell anything but the Engine Audit.** There is no retainer checkout. Retainers are signed under an MSA and SOW after an audit.
3. **Take money from someone we would decline.** Qualification always runs before payment. Even an audit agreed on a call is paid through `/audit`, so one door does the qualifying.
4. **Diagnose a specific business.** The calculator only does arithmetic on the owner's inputs. It never scores a company or offers an "instant audit"; that is the audit's job.
5. **Gate content.** Every page is readable without an email address, and the calculator shows its answer on the page. Gated content is invisible to answer engines.
6. **Market Homets or serve homeowners.**
7. **Attract work we don't sell:** web design, logos, social content, print, or wraps.
8. **Manufacture urgency or hide the conflict.**
9. **Publish a number or claim without evidence, or promise a result by a date.**
10. **Blame CSRs.** Clients' staff read this site too.
11. **Put a bot where a person should be** (D14).
12. **Compete with the audit for the founder's hours.**

## Open questions for the founder {#open-questions}

1. **Late-window audit sales.** An audit bought in the last two weeks of an OPEN window can read out after the flip (#season-strategy), and its 30-day credit window then runs into a closed month. A signature is new business even when onboarding comes later: `techeo.plan90` #phase-3 makes May–August "delivery only, with no new business," in Phase 2 Techeo "does not sell, onboard, or deliver" (#phase-2), and the kill switch lists "no new signatures" separately from onboarding. A signing cutoff inside the closed month would also leave a late buyer only a few days of the 30-day credit D6 promises.
   - *Default, retainer signing:* from Apr 16 and Nov 16, before payment, show the readout date and state that a retainer not signed by the flip can be signed only from the next opening (Sep 7 or Feb 1). The $1,500 credit then applies to a retainer signed within 30 days of that opening. This changes `techeo.offers` #terms and brief D6, so the founder must approve it. No retainer is signed May 1 – Sep 6 or Dec 1 – Jan 31.
   - *Default, December readouts:* a readout that falls in December breaks `techeo.guardrails`' December allowance (admin and legal only). Propose a brief D2 revision that closes audit checkout on Nov 16 while reservations and teardown requests continue until Nov 30.
2. **The date the `capacity` state shows.** *Default:* whichever is later: the next seasonal opening, or the first of the month after one full month of recovered Homets KPIs (kill switch) or the Homets operations owner's start date (gate). Update it whenever it moves.
3. **Who can flip `SEASON_STATE`.** *Default:* the named enforcer can flip the site to WAITLIST / `capacity` without the founder, and every flip is logged. A return to OPEN needs both the enforcer and the founder.
4. **Whether a reservation holds a market.** *Default:* no. Exclusivity exists only in a signed MSA. If a same-market, same-trade client signs first, the reserver is told before the opening.
5. **The Homets case study before v2.** `techeo.plan90` wants it by Apr 30, but D1 puts `/case-studies` in v2. *Default:* the claim-1 v1.1 article is the Homets case study, and `02` decides at v2 whether it moves to `/case-studies/<slug>` with a 301.
6. **The v1 slip protocol.** *Default:* approve the Nov 6 checkpoint, the floor, the Jan 15 deadline, and the Phase 2 exception. Finishing those pages is not on `techeo.plan90` #phase-2's list and must fit its 4-hour cap.
7. **Referral fees for vendors.** *Default:* none in year one. Vendors get free teardowns to give their clients and referrals in return. Revisit when `/partners` is written.
8. **Homets employees on the site.** *Default:* no names and no identifying titles. Faces only with a signed release.
9. **Where teardown recordings live.** *Default:* notes-only unless the target's state clearly permits recording (`techeo.legal` #compliance). Any screen walkthrough or recording is never at a public techeo.com URL. It is shared as an unlisted, non-indexed link that expires after 90 days (a new rule this document proposes; add it to `techeo.legal`).
10. **The 70% line in `techeo.positioning` #pitch.** *Default:* change it to "our standing target is 70%" until [HOMETS_BOOKING_RATE_TO] is measured.
11. **The twelve-month targets.** *Default:* adopt them as written, and replace each assumption after the first 20 form leads or the first OPEN window, whichever comes first.
12. **v2 writing in delivery and maintenance months.** v2 writing falls in months `techeo.guardrails` limits to delivery (May) and maintenance (Jun–Aug), and D15 says the copy cannot be delegated. *Default:* the founder approves an explicit exception, capped at the weekly hours `11` shows, inside the 26-hour cap and logged on its own line (G1). If the exception would need more hours, v2 scope flexes: any page whose copy is not approved by Aug 16 follows after launch.
