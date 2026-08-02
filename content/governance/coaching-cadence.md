---
id: governance.coaching
title: Coaching & Review Cadence
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 180
tags: [coaching, cadence, 1:1, weekly, monthly, quarterly, review]
related: [governance.qa.csm, governance.doc-control, sop.csm.kpis]
surfaces: [csm]
---

# Coaching & Review Cadence

Three loops at three speeds: the individual weekly, the team monthly, the document quarterly.

## Weekly 1:1 — 30 minutes {#weekly}

1. **Review 3 scored calls** — 5 min each.
2. **AI coach summary** from `/checklist` — 5 min.
3. **One skill focus for next week** — 5 min.
4. **CSM raises blockers** — 5 min.

**One** skill focus, not a list. A CSM working on one thing for a week improves at it; a CSM handed five things improves at none.

The last five minutes belong to the CSM. If the manager is still talking at minute 26, the meeting failed.

## Monthly team meeting — 60 minutes {#monthly}

- Aggregate KPI review — `sop.csm.kpis`.
- **Top 3 objection patterns → SOP update candidates.**
- Recognition: top booker, top pitcher, best save.

The objection review is the feedback loop that keeps this SOP alive. Patterns heard on the phones this month become script changes next quarter — that is how a document stays true instead of becoming decoration.

## Quarterly SOP review — 90 minutes {#quarterly}

Owner + senior CSM:

- Walk every section.
- **Retire dead scripts.** A script nobody uses is worse than no script — it makes the whole document look optional.
- Add scripts for new patterns surfaced in the monthly reviews.
- Version bump and announce — `governance.doc-control`.

This is also where the staleness backlog gets cleared: every doc past its `review_cadence_days` is either re-verified or rewritten.

## Related

- Scoring instrument: `governance.qa.csm`
- Versioning and announcements: `governance.doc-control`
