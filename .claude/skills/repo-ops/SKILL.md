---
name: repo-ops
description: How to work safely across the ten Homets business repos — which repo owns what, what auto-deploys from where, branch and validation rules per repo, env-file policy, and the cross-repo guardrails. Use before making changes in any repo other than the one you were opened in, or when a task spans repos.
---

# Repo ops — working across the Homets portfolio

Start any cross-repo session with
`bash .claude/skills/repo-ops/scripts/portfolio-status.sh [repos-root]`
(default `/home/user`) — one table of every clone's branch, dirty files,
unpushed commits, and last commit, so you know the lay of the land before
touching anything.

Ten repos, one business. The danger is that several **auto-deploy from
their default branch with no staging** — a bad push to main IS a
production incident. Branch first, validate with the repo's own gate,
and let a human merge anything that deploys.

## The map

| Repo | What it is | Deploys via | Gate before pushing |
|---|---|---|---|
| `CSDispatchHomets` | SOP library + training app (public repo) | GitHub Pages workflow | `npm run validate:content` (gates the build) |
| `integrated-home-hub` | Sales/proposal engine + ops portal; 105 edge functions, deepest ServiceTitan integration | Lovable → architect.hometsair.com; edge functions auto-deploy; **no staging** (its own docs say so); Lovable bot pushes to `dev` | CI = tsc + vite build + vitest + deno function tests; run them locally first |
| `homets-home-tech` | hometsair.com marketing site (262 SEO pages) | Lovable | `npm run check` (typecheck+lint+tests+schema/sitemap validators) |
| `complusmechanical` | Com+ commercial brand site | **Netlify builds straight from the repo** (`npm run build`, publish dist) | `npm run build` at minimum |
| `longislandhvacrepair` | Second-brand site, booking unwired | Lovable (stalled) | build |
| `homets-comfort-architect` | iPad Swift app (Manual J) | Xcode/TestFlight | needs `Secrets.swift` from the example to compile; every calc change must pass the 29-home regression harness |
| `hvac-catalog` | Pricebook + proposal tool (stalled May 2026) | Lovable | vitest; pricebook snapshots are ~5 months stale — don't trust them as current |
| `project-phoenix` | Brand asset studio | Lovable | tsc + vite build |
| `homets-pitch-deck` | Investor deck (private — real revenue/valuation data) | Lovable | build |
| `homets-smart-service` | Abandoned prototype | — | archive candidate; don't build on it |

## Cross-repo guardrails

1. **ServiceTitan is the only system of record** for customers, jobs,
   leads, scheduling, pricing. Never add or extend a shadow store (e.g.
   phoenix's `service_requests` table) — route to ServiceTitan instead.
2. **Business facts** come from the `brand-facts` skill and
   CSDispatchHomets' token file; check drift before copying any price,
   phone, or link between repos.
3. **Env files**: `.env` files are tracked deliberately in these repos
   because builds read `import.meta.env` with no env injection —
   **untracking one breaks production builds**. They may hold ONLY
   publishable-class values (Supabase anon keys, Stripe pk_ tokens);
   anything private goes in git-ignored `.env.local` or Supabase
   edge-function secrets. The header comments in each file state this.
4. **Edge-function secrets** (ServiceTitan client credentials, Stripe
   secret keys, Resend, Twilio, LOVABLE_API_KEY, UNSPLASH_ACCESS_KEY…)
   live in Supabase function secrets or the hvac-catalog
   `st_credentials` table — never in the repo, never echoed into chat.
5. **Each web repo has its own Supabase project** (refs in `brand-facts`).
   The one sanctioned cross-wire: homets-home-tech reads the architect DB
   for leads — rotating the architect anon key silently breaks that.
6. **Lovable repos have squashed single-commit histories** — git blame
   and history archaeology don't work; read the code and the repos' own
   docs (`AGENTS.md`, `docs/SYSTEM-REFERENCE.md`, `ROADMAP.md`) instead.
7. **Branch etiquette**: work on a `claude/…` branch; never force-push a
   branch you didn't create this session; PRs only when asked. For
   integrated-home-hub note Lovable's bot pushes to `dev` continuously —
   rebase before pushing.
8. Com+ was **forked from the Homets site** — before touching analytics,
   redirects, tracking numbers, or assets there, check it isn't fork
   residue still pointing at Homets (several instances already found and
   cleaned; more may remain).
