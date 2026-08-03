# Migration Status

Phase 1 goal: extract every piece of hardcoded content from the app into `content/` markdown.

**Full company map — including what has no source material at all — lives in [`content/INDEX.md`](../INDEX.md).**

## Source inventory

| Source file | Lines | Content type | Target folder | Status |
|---|---|---|---|---|
| `src/components/csm/csmSopData.tsx` | 873 | CSM SOP v1.0 (7 parts, 38 sections) | `sops/csm/`, `scripts/`, `playbooks/`, `protocols/`, `governance/`, `people/` | ✅ **complete — 38 of 38 sections → 42 docs** |
| `src/components/presentation/slideData.tsx` | 4,914 | Dispatch tool slides (~48 slides) | `sops/dispatch/`, `protocols/`, `playbooks/`, `reference/` | ⏳ pending |
| `src/components/presentation/techSalesSlides.tsx` | 1,250 | Sales guide slides (~24 slides) | `sops/sales/`, `pricing/`, `scripts/` | ⏳ pending |
| `src/components/knowledge-base/kbData.tsx` | 2,250 | KB articles (13 sections, ~80 articles) | `reference/`, `protocols/` | 🟡 **CSM-relevant sections reconciled and migrated** (phone scripts, objections, post-service, policies, service area). Equipment, thermostats, FAQ, commercial, IAQ, plumbing still pending. |
| **Total** | **9,287** | | | **1 of 4 sources complete; CSM surface area finished across two** |

## Completed — CSM SOP

All 7 parts migrated. Sections were distributed by taxonomy rather than kept in one folder:

| Source part | Landed in |
|---|---|
| Part 1 — Foundations (1.1–1.5) | `sops/csm/` — 5 docs |
| Part 2 — Customer Interaction (2.1–2.6) | `sops/csm/` — 5 docs; 2.4 → `protocols/emergency/triage.md` |
| Part 3 — Intake (3.1–3.7) | `sops/csm/` — 7 docs |
| Part 4 — Booking (4.1–4.7) | `sops/csm/` — 6 docs; 4.4 → `scripts/objections/` — 4 docs |
| Part 5 — Channel Playbooks (5.1–5.5) | `playbooks/` — 5 docs |
| Part 6 — Post-Booking (6.1–6.3) | `sops/csm/` — 3 docs |
| Part 7 — Governance (7.1–7.4) | `governance/` — 3 docs; 7.2 → `people/onboarding/csm.md` |

**Content changed during migration** — this was not a verbatim copy:

- **7.1 Version Control was rewritten** as `governance.doc-control` v2. The source said the master SOP lives in one Google Doc; it now lives in this repository. The single-source-of-truth principle is unchanged; the mechanism is not.
- **Every price was replaced with a token.** `$199` → `{{price:diagnostic_residential}}` and so on. `pricing/tokens.md` grew from 20 to 32 tokens to absorb operating constants (hold cap, ring target, callback deadlines, service windows) that were previously repeated inline across sections.
- **`playbooks/referral.md` was created as `draft-needed`.** `sop.csm.lead-source` promises referring customers a credit; no source document defines what that credit is. The gap is now visible rather than implied.

## Completed — CSM knowledge-base reconciliation

The KB sections a CSM uses on a live call were reconciled against the migrated SOP rather than copied. That surfaced **10 contradictions between two sources both live today** — recorded in [`csm-reconciliation.md`](csm-reconciliation.md), 4 of which need an owner decision.

**Gaps the KB filled** — real call scenarios the SOP was silent on:

| New doc | Covers |
|---|---|
| `sop.csm.non-english-callers` | Interpreter protocol, Spanish emergency phrases, never use a child to translate |
| `sop.csm.escalation` | Consolidated escalation triggers + money-back authority limits |
| `sop.csm.warranty-callback` | Identifying a no-charge callback *before* quoting |
| `sop.csm.service-area` | Coverage zones, out-of-area, fully-booked days, waitlist |
| `sop.csm.post-service-followup` | 24h follow-up, negative feedback handling |
| `sop.csm.membership-retention` | Renewal outreach, cancellation saves |
| `script.csm.voicemail` | Four voicemail scripts + after-hours attendant |
| `script.csm.review-request` | Google review ask, and the policy rules around it |
| `script.csm.seasonal-outreach` | Pre-winter and pre-summer tune-up campaigns |
| `script.csm.tone-language` | Say-this / avoid-this phrasing |
| `reference.guarantees` | Arrival, satisfaction, warranty periods, cancellation, refunds |

**Existing docs improved** where the KB was sharper: concrete emergency temperature thresholds in `protocol.emergency.triage` (v2), hold-escalation and cold-transfer fallback in `sop.csm.transfer-hold` (v2), returning-customer greeting in `sop.csm.greeting` (v3), consolidated escalation in `sop.csm.de-escalation` (v2).

## Not yet started

`slideData.tsx`, `techSalesSlides.tsx`, and the non-CSM half of `kbData.tsx`. Per-document target lists in `INDEX.md` §3–5.

**When migrating the rest of the KB:** the reconciled articles must not be copied verbatim — that recreates the contradiction in the place meant to end it. The retire / migrate / hold decision for each is at the bottom of `csm-reconciliation.md`.

## Extraction process

Each slide/section becomes ONE markdown file with:
1. Frontmatter (id, department, status, cadence).
2. H1 title.
3. Body in Markdown — no JSX, no color styling, no layout code.
4. Pricing referenced as `{{price:token}}` — never a raw number.
5. Cross-refs by `id`, not path.
6. `{#anchor}` on every H2 so the scoring rubric can deep-link to the exact standard.

## Verification checklist (Phase 5)

Now enforced by `npm run validate:content` rather than checked by hand:

- [x] Every price in every migrated doc uses a token.
- [x] Every token used exists in `content/pricing/tokens.md`.
- [x] No broken `related` or body cross-references.
- [x] No duplicate ids.
- [x] Frontmatter present, complete, and using a valid `status`.
- [x] Staleness surfaced as a warning against `last_reviewed + review_cadence_days`.
- [x] No orphan docs — every CSM doc is grouped into one of the seven parts and rendered. Enforced by `src/lib/content.test.ts`.

## Known follow-ups

- **`/csm` now renders from `content/`.** `src/lib/content.ts` globs the markdown at build time, resolves price tokens, and groups docs by their `section` frontmatter. `csmSopData.tsx` has been deleted — an orphaned second copy is the drift this repo exists to prevent. Covered by `src/lib/content.test.ts`.
- **The knowledge base still serves the old articles.** `kbData.tsx` renders on the dispatch surface and still contains the contradicting greeting, the 90-second hold cap, and the "No Emergency Surcharge — Ever" promise. **The reconciliation is delivered on `/csm` only** until the KB migration lands. Conflict C1 is still live for anyone reading the KB page.
- **`slideData.tsx` and `techSalesSlides.tsx` still render from JSX** — they have no markdown equivalent yet.
- **A lead console was built and then removed** (commit `d6a3c34`, reverted in the follow-up). It put a lead queue outside ServiceTitan, which contradicts `sop.csm.tools` — "if it's not in ST, it didn't happen" — and made this app a second system of record. The speed-to-lead content stayed; the queue requirement now lives in `playbook.speed-to-lead` as a ServiceTitan specification, and the behaviour is scored by the marketplace rubric at `/checklist`.
- **Marketplace channels added** — `playbook.speed-to-lead` plus Angi, Thumbtack and Yelp playbooks, outreach scripts, and a fourth QA rubric. **Angi flows into ServiceTitan automatically; Thumbtack and Yelp do not**, so those two carry a mandatory ST-lead-creation step at first touch and are currently unmeasurable without it.
- **`src/lib/rubric-seed.ts` does not reference SOP anchors.** Every rubric category now has a matching doc and anchor — wiring them turns a low score into a link to the standard it failed.
