---
name: sop-authoring
description: Author, migrate, revise, or translate Homets SOP content in content/**. Use whenever the user asks to write, update, migrate, reconcile, or review an SOP, script, protocol, playbook, price token, or reference doc — including migrating the legacy dispatch deck (slideData.tsx) or knowledge base (kbData.tsx) into markdown.
---

# Authoring Homets SOP content

The house style, mechanics, and discipline for every change under `content/`.
Read `content/README.md` (frontmatter spec) and `content/INDEX.md` (what
exists, what's missing, what's disputed) before writing anything.

## Workflow

1. **Check INDEX.md first.** If the doc is listed, it has a planned id,
   department, and status — use them. If it isn't listed, adding it means
   updating INDEX.md in the same change.
2. **Check for overlap.** Search published docs for the same topic. The repo
   exists to prevent two sources of truth: reconcile, reference by id, or
   supersede — never restate.
3. **Write the doc** with complete frontmatter (spec in `content/README.md`).
   Stable dotted id (`sop.dispatch.two-tech`), correct `department`, `owner`,
   `status`, `version: 1`, `last_reviewed` = today, sensible
   `review_cadence_days` (90 for procedures, 30 for pricing, 180 for
   governance), `surfaces` + `section` + `order` to place it in the app.
4. **Tokens, never numbers.** Any price, SLA, threshold, or operating
   constant is `{{price:token_id}}` from `content/pricing/tokens.md`. A new
   constant means a new token in tokens.md in the same commit.
5. **Cross-reference by id** in backticks — `` `sop.csm.greeting` `` — the
   renderer links them. Never link by file path.
6. **Validate:** `npm run validate:content` must pass before the change is
   done.
7. **Version discipline** on edits to published docs: wording = minor bump;
   procedure change = major bump + "Changed in vN" note at the top + note to
   announce in #csm-ops. A major bump on an `acknowledgement: required` doc
   re-asks every signature — say so in the summary.

## Migration (legacy .tsx → content/)

Sources: `src/components/presentation/slideData.tsx` (dispatch, ~48 slides),
`src/components/knowledge-base/kbData.tsx` (~80 KB articles). This is
extraction, not authoring — preserve the battle-tested substance, restructure
into the INDEX's planned one-doc-per-topic layout.

- Where the legacy deck and a published CSM doc disagree, **do not pick a
  winner silently** — record the conflict in
  `content/_migrated/csm-reconciliation.md` style and flag it to the owner
  (that's open question #5 in INDEX.md).
- Strip sales scripting that manufactures urgency or fear (the D6/S1
  precedent: those sections get deleted, not edited).
- Update `content/_migrated/STATUS.md` and `content/INDEX.md` statuses as
  docs land.

## Translations (.es.md)

Spanish sibling beside the English, frontmatter only
`translation_of` + `source_version`. Written when the English is written or
revised — bumping an English version without updating its translation's
`source_version` fails validation. English governs; the translation is a
reading aid.

## Never

- Invent a price, policy, or fact. Open unknowns are listed in INDEX.md
  ("Open questions") — C2, C3, C4, `maintenance_flat_price`, referral credit.
  Write `⚠️ DISPUTED` / TBD flags the way `pricing/tokens.md` does, and stop.
- Author anything under `content/people/` (HR/safety/legal) from scratch.
- Reintroduce an after-hours or emergency surcharge (C1 — resolved: none).
- Hardcode a number that exists as a token, or could ever change.
