---
id: techeo.legal
title: Legal, Contracts, Insurance & Compliance
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 90
tags: [legal, entity, contracts, insurance, compliance, trademark, ip]
related: [techeo.guardrails, techeo.offers, techeo.gtm]
order: 8
---

# Legal, Contracts, Insurance & Compliance

**This is a checklist for a conversation with counsel, not legal advice.** Two items on it — the Homets IP position and the call-recording rule — carry real risk and should be settled before a single dollar is invoiced.

## Formation sequence {#formation}

In this order:

1. **Techeo LLC**, home state. Separate entity from Homets — non-negotiable, for four reasons: it ring-fences liability, it keeps financials clean enough to sell either business independently, it makes the conflict-of-interest policy in `07` structurally real rather than a promise, and it preserves tax election flexibility.
2. **EIN**, then a business bank account and a dedicated card. No commingling, ever, including "I'll expense it and sort it later."
3. **Operating agreement** — even as a single member. It is what proves the entity is real if the separation is ever challenged.
4. **Separate books** in accounting software from transaction one. Not a class or a tag inside Homets' books. A separate set.
5. **The Homets IP license** — see below. Do this before the first client, not after.
6. **Trademark** — clearance search on TECHEO, then file in class 35 (advertising and business services). Verify the mark is actually available before investing in the brand; a rebrand after three case studies carry the name is expensive.
7. **Domain and brand audit** — confirm what is currently published at techeo.com and whether anything on it contradicts the positioning in `01`.

## The Homets IP position {#ip}

Techeo's first product is an extraction of assets that Homets paid to create: the CSM SOP set, the channel playbooks, the QA rubric, the price-token system. **Left undocumented, this is the single largest legal loose end in the plan.**

- If Homets is **wholly owned by you**, execute a written license (or assignment) from Homets to Techeo covering the SOP content and methodology, at a stated consideration. It costs little and it makes Techeo's inventory unambiguously Techeo's.
- If Homets has **any partner, co-owner, investor, or lender with a claim on its assets**, stop and resolve this in writing first. Building a second company on the first company's assets without documented consent is how a successful Techeo becomes a dispute — and the claim gets more valuable, not less, as Techeo grows.
- Either way, the move of this folder out of the Homets repo (see `README.md`) should happen alongside the license, so the records match the legal position.

## Contract architecture {#contracts}

**MSA** (the relationship) + **SOW** per engagement (the scope, price, term) + a short **data processing addendum** where required. Have counsel draft or review; budget $1,500–3,000 per `06`.

### Clauses to insist on

| Clause | Why it matters |
|---|---|
| **Client owns all accounts** — Google Ads, GBP, LSA, GA4, call tracking, CRM, named individually | The industry's trust wound. It is also the headline of our pitch, so it must be literally true in the paper. |
| **Market exclusivity** — one client per defined market per trade | Define the market precisely: DMA or a named county list. A vague grant becomes a dispute the first time a nearby contractor calls. |
| **Homets disclosure and release** | Discloses the affiliation, states the exclusion zone, and releases the client without penalty if Homets ever expands toward their market. |
| **Mutual non-solicit** — technicians and office staff, both directions | Closes a contractor's deepest fear about a competitor-adjacent vendor. A trust asset, not a formality. |
| **Results language** — targets, never guarantees | Booking-rate and revenue figures are stated as targets with named client dependencies. No guaranteed-revenue language anywhere, in the contract or in sales material. |
| **Client obligations** — access, staff training attendance, a named internal owner | Makes the reason an engagement failed determinable. Without it, every failure is our fault by default. |
| **Call recording compliance** — client warrants it has consent for recordings it supplies | We are handling their recordings. Their warranty, plus our own per-state rule below. |
| **Data and confidentiality**, both directions, with the explicit statement that client data is never used for Homets' benefit | Turns the `07` data firewall into an enforceable promise. |
| **IP** — Techeo retains its frameworks and templates; client receives a perpetual license to the deliverables produced for them | Lets us reuse templates (the whole business model) while the client keeps what they paid for. |
| **Term and termination** — 90-day initial, then month-to-month, 30 days' written notice | Short notice is a feature. It forces us to keep earning it. |
| **Offboarding** — everything handed over, per `04-delivery.md` | Written down so it happens even on a bad exit. |
| **Limitation of liability** — capped at fees paid | Standard and necessary. |
| **Annual increase** — 5% at renewal | Agreed at signing so it is never a negotiation later. |
| **Ad spend** — client's accounts, client's payment method; Techeo never fronts or passes through spend | Cash flow, liability, and the ownership promise in one line. |

## Insurance {#insurance}

| Policy | Why |
|---|---|
| General liability | Baseline; often required by client vendor onboarding |
| **Professional liability (E&O)** | The real one. We advise on spend and staffing; a client who blames a downturn on our advice lands here. |
| **Cyber liability** | We hold access to client ad accounts, CRM data, and customer records. This is the exposure most small agencies forget. |

Bind E&O and cyber **before the first paid engagement**, not before the first client complaint.

## Compliance {#compliance}

**Call recording consent.** Some states require all-party consent. This governs both the mystery-shop teardowns in `05-go-to-market.md` and any handling of client recordings. Rules:

1. Check the target's state before dialling. Every time.
2. **Default to notes-only.** Score against the rubric live and deliver structured notes; it is nearly as persuasive as audio and carries none of the risk.
3. Record only where clearly permitted, and never publish a recording of a named business without written permission.

**FTC substantiation and endorsements.** Every number in a case study must be backed by client data we can produce on request, and testimonials need to reflect actual results with the relationship disclosed. This is why `03-engine-audit.md` requires rounding the Gap Statement *down* — the conservative number is the defensible one.

**TCPA.** If any engagement touches outbound SMS or dialling, consent and opt-out mechanics become our problem too. Keep SMS work inside the client's existing consented channels in year one, or exclude it from scope.

**Google Ads / LSA policy.** Agency access has its own rules about account structure, ownership, and lead disputes. Use the client's own accounts with us as a linked manager — which the ownership clause requires anyway — rather than creating accounts we hold.

**Employment.** Contractors are contractors: written agreements, defined deliverables, no control over hours, and a confidentiality clause covering client data. A part-time call scorer handling recordings and customer information needs that clause specifically.

## Admin cadence {#admin}

| Cadence | Task |
|---|---|
| Weekly | Time log — Techeo hours, against the cap in `07` |
| Monthly, by the 10th | Close the books; publish Techeo metrics alongside Homets KPIs |
| Quarterly | Estimated taxes; review the guardrails document |
| Annually | Entity filing, insurance renewal, contract template review, price review |

## Open items to close before the first invoice {#open}

- [ ] Homets IP license executed (or partner consent documented)
- [ ] TECHEO trademark clearance result
- [ ] techeo.com current state confirmed
- [ ] Exclusion zone radius set — `07`, section `#coi`
- [ ] Kill-switch enforcer named — `07`, section `#kill-switch`
- [ ] MSA + SOW reviewed by counsel
- [ ] E&O and cyber policies bound
- [ ] Per-state recording rule documented for the first 20 target markets
