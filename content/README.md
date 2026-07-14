# Homets Content Repository

This folder is the **single source of truth** for all Homets Services operational content — SOPs, scripts, pricing, protocols, playbooks, and reference material. Everything that used to live inside React components (slides, KB articles, SOPs) lives here as versioned Markdown.

## Architecture

```
┌──────────────────────────────────────────────────────────┐
│  content/**/*.md   ← truth. git-versioned. reviewed.    │
└─────────────────────────┬────────────────────────────────┘
                          │  build step / edge function
                          ▼
┌──────────────────────────────────────────────────────────┐
│  Supabase mirror tables (documents, document_versions,   │
│  document_sections, price_tokens, suggestions)           │
└─────────────────────────┬────────────────────────────────┘
                          │  serves
                          ▼
┌──────────────────────────────────────────────────────────┐
│  App surfaces: /  (decks)   /csm  (SOP KB)               │
│                /checklist  (scoring against docs)        │
└──────────────────────────────────────────────────────────┘
```

- **Authoring:** you (editor-in-chief) + AI agents propose changes as git commits/PRs.
- **Staff edits:** in-app **"Suggest edit"** button writes to `content_suggestions` in Supabase. Approved suggestions become git commits.
- **Pricing:** never hardcoded in a doc. Reference via `{{price:token_id}}` tokens defined in `content/pricing/tokens.md`. Later phase: tokens resolve from ServiceTitan pricebook export instead of the markdown file.

## Folder taxonomy

| Folder         | Contains                                                                   |
|----------------|----------------------------------------------------------------------------|
| `sops/`        | Standard operating procedures per department (csm, dispatch, sales, install, plumbing) |
| `pricing/`     | Rate cards, deposit rules, financing terms, membership pricing, `tokens.md` |
| `scripts/`     | Verbatim call scripts (greeting, objection handling, closing)              |
| `protocols/`   | Decision trees (emergency triage, warranty, callback, after-hours)         |
| `playbooks/`   | Channel-specific handling (LSA, web leads, Posh, referral)                 |
| `people/`      | HR, onboarding, safety, certifications                                     |
| `reference/`   | Service scope, membership plans, geographic coverage, equipment supported  |
| `_migrated/`   | **TEMPORARY** — raw exports from the old JSX slide/KB files before restructuring. Delete once migrated. |

## Frontmatter spec

Every `.md` file starts with YAML frontmatter:

```yaml
---
id: sop.csm.greeting                # stable dotted id — used by app + tokens
title: CSM Greeting Standard
department: csm                      # csm | dispatch | sales | install | plumbing | ops | hr
owner: cs-manager                    # role responsible for accuracy
status: published                    # draft | draft-needed | in-review | published | archived
version: 1                           # bumped on each published change
last_reviewed: 2026-07-14            # ISO date; drives staleness alerts
review_cadence_days: 90              # how often this doc must be re-verified
tags: [greeting, script, csm]        # freeform for search
supersedes: []                       # ids of docs this replaces
related: [script.csm.objections]     # ids of related docs
surfaces: [csm, checklist]           # which app surfaces render this doc
---
```

### Status meanings

- **draft** — being written, not visible to staff.
- **draft-needed** — placeholder for content we know we need but haven't written. Shows in-app as "not yet written." Prevents invisible gaps.
- **in-review** — written, awaiting editor approval.
- **published** — live to staff.
- **archived** — retained for history, not shown in-app.

### Staleness

`last_reviewed + review_cadence_days < today` → doc is flagged stale in the editor dashboard. Weekly agent run (Phase 4) surfaces stale docs and proposes re-verification.

## Price tokens

**Never hardcode a price in a doc.** Write:

```markdown
Our diagnostic fee is {{price:diagnostic_residential}} for residential.
```

Tokens are defined once in `content/pricing/tokens.md`. Renderer resolves at display time. When the ServiceTitan integration ships, tokens resolve from live pricebook data and any doc contradicting the pricebook becomes a build warning.

## Migration status

Phase 1 extracts the ~68 existing slides + KB articles + CSM SOP into this structure. Progress lives in `content/_migrated/STATUS.md`.
