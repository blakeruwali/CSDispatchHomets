---
name: qa-coaching
description: Score CSM calls or marketplace outreach against the Homets QA rubrics, draft coaching notes and 1:1 summaries, and analyze call transcripts (including Fireflies transcripts) for compliance with the SOP. Use whenever asked to review a call, grade an interaction, prepare coaching, or assess team performance.
---

# QA scoring & coaching

The instrument is `/checklist` in the app; the definitions are in
`content/governance/`. Score against the published docs, never taste.

## The CSM rubric — `content/governance/qa-rubric-csm.md`

Weights: greeting 5%, active listening 10%, **emergency triage 15%
(pass/fail)**, intake 20%, booking execution 20%, membership pitch 10%,
confirmation read-back 10%, ticket quality 10%. Each item scores 0/1/2
(0 = didn't happen or wrong; 1 = happened but flat/partial/out of order;
2 = as written, right moment, right tone). A 1 is the most common score and
the point of coaching — say what would make it a 2.

**The triage cap:** missed emergency triage caps the whole call at 60%
(`triage_fail_score_cap`), regardless of everything else.

Situational standards (scored only when the situation arises) are listed in
the rubric's "not scored on a standard call" section — escalation, warranty
callback, non-English callers, etc.

## Scoring a call

1. Get the transcript (Fireflies tools if connected, or pasted text).
2. Walk the call against each category's governing doc (the rubric names
   them) — quote the moment from the transcript that earned the score.
3. Apply the triage check first; if failed, apply the cap and say so plainly.
4. Output: per-category score with evidence, total, the 2–3 highest-leverage
   coaching points, and the exact SOP doc id each point trains against.

## Marketplace outbound — separate rubric

Outbound speed-to-lead calls are scored on the **Marketplace Lead — Outbound
Response** rubric (seeded in `src/lib/rubric-seed.ts`), weighted toward speed
(5-minute callback SLA) and first-touch capture of Thumbtack/Yelp leads into
ServiceTitan. Standard: `content/playbooks/speed-to-lead.md`.

## Coaching cadence

`content/governance/coaching-cadence.md`: manager scores 3 calls per CSM per
week, reviewed in the weekly 1:1. When drafting a 1:1 summary: lead with what
scored 2 (reinforce), then the one or two 1→2 moves, each anchored to its doc
id so a low score jumps to the standard it failed. The AI summary supplements
the manager's read — never present it as replacing it.

## KPIs

The numbers the CSM owns are in `content/sops/csm/kpis.md` — tie coaching
themes to the KPI they move.
