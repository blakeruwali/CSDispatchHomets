# Migration Status

Phase 1 goal: extract every piece of hardcoded content from the app into `content/` markdown.

## Source inventory

| Source file | Lines | Content type | Target folder | Status |
|---|---|---|---|---|
| `src/components/presentation/slideData.tsx` | 4,914 | Dispatch tool slides (~48 slides) | `sops/dispatch/`, `protocols/`, `playbooks/`, `reference/` | ⏳ pending |
| `src/components/presentation/techSalesSlides.tsx` | 1,250 | Sales guide slides (~20 slides) | `sops/sales/`, `pricing/`, `scripts/` | ⏳ pending |
| `src/components/knowledge-base/kbData.tsx` | 2,250 | KB articles | `reference/`, `protocols/` | ⏳ pending |
| `src/components/csm/csmSopData.tsx` | 873 | CSM SOP v1.0 (7 parts) | `sops/csm/` | 🟡 1 of ~30 sections migrated (`greeting.md`) |
| **Total** | **9,287** | | | |

## Extraction process

Each slide/section becomes ONE markdown file with:
1. Frontmatter (id, department, status, cadence).
2. H1 title.
3. Body in Markdown — no JSX, no color styling, no layout code.
4. Pricing referenced as `{{price:token}}` — never a raw number.
5. Cross-refs by `id`, not path.

## Verification checklist (Phase 5)

- [ ] Every price in every migrated doc uses a token.
- [ ] Every token used exists in `content/pricing/tokens.md`.
- [ ] No orphan docs (every doc surfaces somewhere in the app or is `status: archived`).
- [ ] No broken `related` ids.
- [ ] Frontmatter validates against schema.
