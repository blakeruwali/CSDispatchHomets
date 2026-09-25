# Techeo — Company Build Plan

The founding documents for **Techeo**, a marketing and conversion agency for residential HVAC and plumbing contractors.

## Why this lives here (and why it shouldn't for long)

It lives in this repo because this is where the source material is. Techeo's first product is an extraction of `content/` — the Homets CSM SOP, the channel playbooks, the QA rubric, the price-token system. Writing the plan next to the asset it is built from keeps the lineage visible.

It should **move to its own repository the day the LLC is formed.** Two companies sharing a git repo is the same mistake as two companies sharing a bank account: it is convenient right up until someone has to prove which one owns what. See `08-legal-and-admin.md` — the IP license from Homets to Techeo is what makes the extraction clean, and it cannot be written if the two companies' records are one pile.

## Reading order

Read `01` and `07` first. `01` is what Techeo sells; `07` is what stops Techeo from eating Homets. Everything else is execution detail that only matters if those two hold.

| Doc | What it settles |
|---|---|
| `01-positioning.md` | What Techeo sells, to whom, and the acronym problem |
| `02-offers-and-pricing.md` | The offer ladder and what each tier costs |
| `03-engine-audit.md` | The paid diagnostic — the sales tool, specified |
| `04-delivery.md` | What a client actually receives, week by week |
| `05-go-to-market.md` | Where the first clients come from |
| `06-financial-model.md` | Startup cost, unit economics, hiring triggers |
| `07-homets-guardrails.md` | Time budget, the gate, the kill switch |
| `08-legal-and-admin.md` | Formation, contracts, insurance, compliance |
| `09-90-day-plan.md` | Week-by-week, anchored to real dates |
| `10-metrics.md` | Techeo's own seven numbers |

## Status

Every document here is `draft`. Nothing in this folder has been tested against a paying client, and several numbers are explicitly marked as assumptions to be replaced with Homets' real figures. A number in a table is not a fact until `06-financial-model.md` says where it came from.

## Conventions

Frontmatter mirrors `content/`'s: `id`, `title`, `owner`, `status`, `version`, `last_reviewed`, `review_cadence_days`. The `techeo.*` id namespace is deliberately outside the set that `scripts/validate-content.mjs` recognises, so the Homets validator neither governs nor trips on these files.

Prices are written inline here rather than tokenised. Tokenise them on the move to Techeo's own repo, once there is a pricebook worth a single source of truth.
