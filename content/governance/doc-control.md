---
id: governance.doc-control
title: Document Control & Change Log
department: ops
owner: owner
status: published
version: 2
last_reviewed: 2026-08-02
review_cadence_days: 180
tags: [governance, version-control, change-log, doc-control, editorial]
supersedes: []
related: [governance.coaching, governance.qa.csm, pricing.tokens]
section: governance
order: 2
surfaces: [csm]
---

# Document Control & Change Log

> **Changed in v2.** The master SOP no longer lives in a Google Doc. It lives in this repository, under `content/`, and is served to the app from there. The single-source-of-truth principle is unchanged; the mechanism is now git.

## Where the SOP lives {#location}

**One repository. No forks, no side copies, no "my version" in anyone's Drive.**

- `content/**/*.md` is the truth. Everything the app renders is generated from it.
- A procedure that exists only in a Google Doc, a Slack thread, or someone's head is not policy.
- If two documents disagree, the one in `content/` wins.

## Who can change it {#editorial}

**Owner:** Blake — sole editor. Comments and suggestions open to all.

Three ways a change gets in:

| Route | Who | How |
|---|---|---|
| Direct edit | Editor-in-chief | Commit to `content/` |
| Proposal | Anyone, incl. AI agents | Pull request against `content/` |
| **Suggest edit** | Any staff member, in-app | Writes to `content_suggestions` in Supabase; approved suggestions become commits |

The in-app "Suggest edit" button is the important one. A CSM who finds a script that doesn't work on real calls should be able to say so from the page they found it on, and that suggestion should reach the editor without a meeting.

## Versioning {#versioning}

Every doc carries `version` in its frontmatter.

- **Minor edit** — wording, a new example, a corrected typo → bump the minor version (v1 → v1.1).
- **Structural change** — a changed procedure, a new required field, a retired script → bump the major version (v1.x → v2.0) and note what changed at the top of the doc, as this page does.

Git history is the change log. The frontmatter version is what staff see.

## Announcing changes {#announce}

Post to **#csm-ops** on every version bump with a one-line summary. A change nobody was told about is a change that doesn't reach the phones.

## Staleness {#staleness}

Every doc carries `last_reviewed` and `review_cadence_days`. When `last_reviewed + review_cadence_days` is in the past, the doc is flagged stale on the editor dashboard.

Stale does not mean wrong — it means unverified. The quarterly review (`governance.coaching`) clears the backlog.

## Prices are never edited in place {#pricing}

No document contains a price. They reference tokens from `pricing.tokens`, which is the only file where a number changes. This is what makes a price change a one-line commit instead of a search-and-replace across the whole SOP.

## Related

- Review and coaching cadence: `governance.coaching`
- Price token rules: `pricing.tokens`
