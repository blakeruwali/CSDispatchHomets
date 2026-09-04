# Documentation Depth Audit & Remediation

## What the audit found

130 English documents, 85,049 words — an average of **654 words per doc**, but the median sits far lower and the distribution is the problem, not the total.

| Band | Docs | Verdict |
|---|---|---|
| Under 200 words | 11 | Stubs or placeholders — unusable on a live call |
| 200–400 words | 44 | Summary-level. States the rule, never shows the execution |
| 400–700 words | 45 | Usable but thin — no transcript, no failure cases |
| Over 700 words | 30 | The standard we want |

Concrete markers of the "too light" problem:

- **49 documents contain no verbatim language at all** — no script line a team member can actually say. An SOP with no words to say is a policy memo, not a job aid.
- **Most CSM docs have only 3–5 sections.** Typical shape: the rule, a small table, "Related". No worked example, no what-goes-wrong, no scoring.
- **4 documents are explicit placeholders** (`status: draft-needed`): field water leak, noise, electrical, and the referral playbook. These are live complaint types with nothing behind them.
- **The two docs rebuilt most recently — the price objection (850 words) and the quote-only objection (932 words) — are the only ones with the full structure**: ladder, transcript, weak-vs-perfect table, hard rules, 0/1/2 QA scoring. Everything else is a generation behind them.
- **No document tells the reader what to do when it goes wrong.** Failure branches, edge cases, and escalation-in-context are missing almost everywhere.

Root cause: the library was written breadth-first — every topic got a page so the map would look complete. Depth was never backfilled, so the docs describe the standard instead of teaching the execution.

## The fix: one house standard, applied doc by doc

Every operational SOP gets rebuilt to the same seven-part shape (the shape the two objection docs already prove out):

1. **The rule in one sentence** — what good looks like, quotable.
2. **When this applies** — trigger conditions and the nearest doc that isn't this one.
3. **The execution ladder** — numbered steps in the order they happen on the call/visit.
4. **Verbatim language** — actual sentences, in blockquotes, that QA scores against.
5. **A full worked example** — a real transcript or a step-by-step walkthrough end to end.
6. **When it goes wrong** — the three or four common failure branches with the recovery for each, plus hard rules ("never…").
7. **QA scoring 0/1/2** — how a coach grades this, tied to the rubric.

Target: **700–1,200 words** for operational docs. Reference material (pricing, plans, scope) stays factual and short — it is not the problem.

## Sequence of work

Ordered by revenue and risk, not by folder.

**Phase 1 — Close the placeholders (4 docs).** Field: water leak, noise, electrical. Playbook: referral. These are gaps a customer discovers.

**Phase 2 — Front-line CSM (highest call volume, ~20 docs).** Intake, symptom clarification, service type, system type, res-vs-comm, diagnostic fee, greeting, active listening, de-escalation, transfer/hold, ticket standards, dispatch handoff, membership pivot/status, reschedules, no-show recovery, confirmation, lead source, availability, tools.

**Phase 3 — Field & Dispatch execution (~15 docs).** No-heat, no-cooling, frozen coil, equipment capture, forms, start time, membership check, daily workflow, job duration, priorities, no-pause, equipment scanning.

**Phase 4 — Sales, Leads, Membership, Projects, Reviews, Insurance (~35 docs).** Same treatment, same shape.

**Phase 5 — Scripts, playbooks and objections (~20 docs).** Each objection doc matched to the price/quote-only standard.

**Phase 6 — Governance and enforcement.** Update the QA rubric to reference the new section anchors, and extend `scripts/validate-content.mjs` so the standard is enforced, not just intended.

Spanish mirrors (`.es.md`) are regenerated after each phase's English docs are final, so translation happens once per doc rather than twice.

## Technical notes

- Rebuilds are content-only edits to `content/**`; frontmatter (`id`, `related`, `section`, `order`, `surfaces`) is preserved so no route, nav item, or cross-reference breaks. `version` bumps and `last_reviewed` resets on each rebuilt doc.
- All prices continue to use `{{price:token}}` — no inline numbers, no exceptions.
- `scripts/validate-content.mjs` gains three depth checks: minimum word count for docs with `surfaces` including an operational surface, presence of at least one blockquote (verbatim language), and presence of a `{#qa}` or scoring section. These run as warnings first, then hard failures once a phase is complete, so the build never blocks mid-migration.
- Section anchors (`{#execution}`, `{#failures}`, `{#qa}`) are standardized so the scorecard at `/checklist` can deep-link into the exact section a low score maps to.

## What you should expect

Each phase lands as a reviewable batch. Phase 1 is small and immediate. Phase 2 is the one that changes daily behaviour on the phones — every CSM doc will have language to say, a transcript to model, and a way to be graded.
