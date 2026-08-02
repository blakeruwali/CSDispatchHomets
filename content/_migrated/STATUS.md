# Migration Status

Phase 1 goal: extract every piece of hardcoded content from the app into `content/` markdown.

**Full company map — including what has no source material at all — lives in [`content/INDEX.md`](../INDEX.md).**

## Source inventory

| Source file | Lines | Content type | Target folder | Status |
|---|---|---|---|---|
| `src/components/csm/csmSopData.tsx` | 873 | CSM SOP v1.0 (7 parts, 38 sections) | `sops/csm/`, `scripts/`, `playbooks/`, `protocols/`, `governance/`, `people/` | ✅ **complete — 38 of 38 sections → 42 docs** |
| `src/components/presentation/slideData.tsx` | 4,914 | Dispatch tool slides (~48 slides) | `sops/dispatch/`, `protocols/`, `playbooks/`, `reference/` | ⏳ pending |
| `src/components/presentation/techSalesSlides.tsx` | 1,250 | Sales guide slides (~24 slides) | `sops/sales/`, `pricing/`, `scripts/` | ⏳ pending |
| `src/components/knowledge-base/kbData.tsx` | 2,250 | KB articles (13 sections, ~80 articles) | `reference/`, `protocols/` | ⏳ pending |
| **Total** | **9,287** | | | **1 of 4 sources complete (~9% by line)** |

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

## Not yet started

`slideData.tsx`, `techSalesSlides.tsx`, `kbData.tsx`. Per-document target lists in `INDEX.md` §3–5.

**Before migrating the KB:** three of its sections (objection handling, phone scripts, membership) restate content now published under `sops/csm/` and `scripts/`. Migrating them verbatim would create a second source of truth — the exact thing this repository exists to prevent. Reconcile first.

## Extraction process

Each slide/section becomes ONE markdown file with:
1. Frontmatter (id, department, status, cadence).
2. H1 title.
3. Body in Markdown — no JSX, no color styling, no layout code.
4. Pricing referenced as `{{price:token}}` — never a raw number.
5. Cross-refs by `id`, not path.
6. `{#anchor}` on every H2 so the scoring rubric can deep-link to the exact standard.

## Verification checklist (Phase 5)

- [x] Every price in every migrated doc uses a token. *(CSM verified — 27 tokens in use)*
- [x] Every token used exists in `content/pricing/tokens.md`. *(verified — 0 undefined)*
- [x] No broken `related` ids. *(verified across all 43 docs)*
- [ ] No orphan docs (every doc surfaces somewhere in the app or is `status: archived`).
- [ ] Frontmatter validates against schema. *(no validator written — see below)*

## Known follow-ups

- **No automated validator exists.** The checks above were run ad hoc against the current tree. A CI script that fails the build on an undefined token, a broken id, or malformed frontmatter would make these guarantees permanent instead of point-in-time.
- **The app still reads from the `.tsx` files.** Migration produced the markdown; nothing renders from it yet. The build step / edge function described in `content/README.md` is unbuilt, so `/csm` still serves `csmSopData.tsx`. Until that ships, `content/` and the app can drift.
- **`src/lib/rubric-seed.ts` does not reference SOP anchors.** Every rubric category now has a matching doc and anchor — wiring them turns a low score into a link to the standard it failed.
