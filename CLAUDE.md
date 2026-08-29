# Homets Air & Heat — CLAUDE.md

Homets Air & Heat is a residential + light-commercial HVAC and plumbing company
serving Nassau & Suffolk counties (Long Island, NY). Owner/editor-in-chief:
Blake. This repository is two things at once:

1. **The company SOP** — `content/**/*.md` is the single source of truth for
   every procedure, script, price, protocol, and playbook. Staff read it
   rendered at `/csm`, `/field`, and `/sales`.
2. **The app that serves and scores it** — a Vite + React + TypeScript +
   shadcn/Tailwind app (Lovable project) with Supabase for acknowledgements,
   suggestions, and rubric scoring at `/checklist`.

**ServiceTitan is the system of record** for customers, jobs, scheduling, and
pricing — never this repo. This app teaches, documents, and scores; it holds
no operational queues or customer data (see "Product boundary" in
`content/INDEX.md`).

## Where things live

- `content/INDEX.md` — the master map: every doc the complete SOP requires,
  with status. **Start here for any content question.**
- `content/README.md` — architecture, frontmatter spec, translation and
  acknowledgement rules.
- `content/pricing/tokens.md` — every price and operating constant. Docs write
  `{{price:token_id}}`, never a number.
- `content/sops/` `scripts/` `protocols/` `playbooks/` `reference/`
  `governance/` `people/` — the library itself.
- `src/lib/content.ts` — build-time markdown loader, surfaces/sections,
  token resolution.
- `src/components/presentation/slideData.tsx` (~4,900 lines, dispatch deck)
  and `kbData.tsx` — legacy source material still awaiting migration.
- `.claude/skills/` — Claude's business skills. Each explains one job
  (authoring, comms, dispatch, sales, membership, QA, daily brief, marketing).

## Hard rules (do not violate)

1. **Never hardcode a price or operating constant** in any content doc — use
   `{{price:token}}`; new numbers go in `content/pricing/tokens.md` first.
2. **Never invent business facts.** Missing facts and live contradictions are
   tracked in `content/INDEX.md` ("Open questions") and
   `content/_migrated/csm-reconciliation.md`. Currently open: C2 (CSM credit
   authority — working assumption: none), C3 (post-service follow-up manual vs
   automated), C4 (no-show strike policy), `maintenance_flat_price` (TBD),
   customer referral credit (unknown). Flag these; don't resolve them.
3. **Never author HR/safety/legal policy** (`content/people/`). Existing
   policies get migrated; missing ones get written with counsel, not by an
   agent.
4. **No manufactured urgency in sales content** (fake stock shortages,
   expiring-at-the-door discounts — see S1 in `INDEX.md`). Genuine triggers
   only.
5. **One source of truth.** When migrating legacy `.tsx` content, reconcile
   against published docs — never create a second doc that restates one.
6. **English is the governing text.** A `.es.md` sibling carries only
   `translation_of` + `source_version`, and must be updated in the same
   change that bumps the English version, or validation fails.
7. **After-hours = no surcharge** (C1, resolved). Standard diagnostic at any
   hour. Do not reintroduce an emergency fee anywhere.

## Conventions

- Every content doc has full YAML frontmatter (spec in `content/README.md`):
  stable dotted `id`, `department`, `owner`, `status`, `version`,
  `last_reviewed`, `review_cadence_days`, `surfaces`, `section`, `order`.
- Cross-reference docs by id in backticks (`` `sop.csm.greeting` ``) — the
  renderer turns ids into links.
- Version bumps: wording = minor (1 → 1.1); changed procedure = major, with a
  "Changed in vN" note at the top. Announce every bump in #csm-ops.
- `acknowledgement: required` only for docs that impose a duty on the reader.

## Validation & build

- `npm run validate:content` — frontmatter, duplicate ids, undefined price
  tokens, broken cross-references, translation drift, staleness. Run it after
  **any** content change; it gates the build.
- `npm run build` / `npm run dev` / `npx vitest run` for the app.

## Connected tools

The `homets-servicetitan` skill queries the live ServiceTitan tenant
(availability, appointments, proposals, customers). Gmail, Google Calendar,
Slack, ClickUp, and Fireflies connectors may also be available — use real data
from them instead of placeholders in any customer-facing or ops output.
