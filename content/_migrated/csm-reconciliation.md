# CSM Reconciliation Register

Contradictions found between the published CSM SOP (`content/sops/csm/`, migrated from `csmSopData.tsx`) and the knowledge base (`src/components/knowledge-base/kbData.tsx`), which staff also read today.

Both sources are live. Where they disagree, a CSM's answer depends on which screen they happened to open — which is precisely the failure mode this repository exists to eliminate.

**Legend:** 🔴 owner decision required · 🟢 resolved in favour of the SOP · 🔵 resolved in favour of the KB (SOP updated)

---

## 🔴 C1 — After-hours pricing. Two policies, both live, both customer-facing.

**This is the one to resolve first.** Three sources, three different answers:

| Source | Says |
|---|---|
| `content/pricing/tokens.md` | `diagnostic_after_hours` = **$299** — "After 5pm, weekends, holidays" |
| KB → Phone Scripts → After-Hours & Overflow | "After-hours dispatch fee: **typically 1.5x–2x** regular rate… *Always state upfront*" |
| KB → Policies → **No Emergency Surcharge Policy** | "**We never charge emergency surcharges or overtime fees.** Whether it's 2 PM on a Tuesday or 2 AM on Christmas, you pay the same rate. That's our promise." |

The third is not a footnote — the KB calls it "one of our biggest competitive advantages" and instructs CSMs to "lead with this" when a customer is price-shopping.

**Why this was urgent.** A CSM who read the policies page told a 2 AM caller there was no surcharge. A CSM who read the pricing page quoted $299. The customer who was promised no surcharge and then billed one leaves a one-star review, and they are right to.

## ✅ RESOLVED — 2026-08-10

**Owner decision: there is no after-hours or emergency surcharge.** The $299 figure was never in effect and is retired.

The knowledge base was right. Actions taken:

1. `diagnostic_after_hours` in `pricing.tokens` now reads **"Same as standard — no surcharge."**
2. `reference.guarantees` carries it as a **published guarantee** rather than an unresolved warning, and that document moved from `in-review` to `published` — C1 was the only thing holding it back.
3. `protocol.emergency.triage` no longer tells CSMs to avoid quoting after-hours pricing. It tells them the price is the same and to say so, because at 2 AM that is a reason to say yes.
4. The live KB page **"After-Hours & Overflow Call Handling"** was corrected. It had been instructing CSMs: *"After-hours dispatch fee: typically 1.5x–2x regular rate… Always state upfront: 'Our after-hours dispatch fee is [$XX].'"* That was the single most damaging line in the system — a direct instruction to quote a fee that does not exist, on the page a CSM opens at 2 AM. It now says there is no fee and to lead with it.
5. The KB closing script's *"The dispatch fee is [$XX]"* placeholder was replaced with the real diagnostic and its credit-toward-repair wording.

**This stopped being a liability and became an asset.** Competitors charge $150–$300 for an after-hours visit. Ours is the same price at 2 AM on Christmas as at 2 PM on a Tuesday, it needs no approval and no membership check, and CSMs are now told to lead with it instead of avoiding the subject.

---

## 🔴 C2 — CSM authority to give money back

| Source | Says |
|---|---|
| `sop.csm.diagnostic-fee` | "**CSMs do not waive.** Fee waivers → Manager only." |
| KB → Objection Handling → Refund & Credit Request Handling | "**You can offer:** … Discount on next service — up to 10% off next visit. Waive diagnostic fee — if related to a previous botched visit." |

The SOP gives CSMs zero discount authority. The KB gives them 10% plus a diagnostic waiver. Both are current.

**Owner decision:** does a CSM have any independent authority to discount or waive, and if so what is the ceiling? The SOP's stricter position is drafted into `sop.csm.escalation` as the working assumption, because unauthorised discounting is the more expensive error — but this is an assumption, not a decision, and it is flagged in that document.

---

## 🔴 C3 — Post-service follow-up: automated or a real phone call?

| Source | Says |
|---|---|
| `sop.csm.confirmation-cadence` | Day-after thank-you + survey is **Automated**. Review request at 2 days, **automated**, gated on survey score ≥ 4. |
| KB → Post-Service → Follow-Up Script | "**Call within 24 hours of every completed job**" — with a verbatim CSM script, and a manual review request during that call. |

These describe different operating models, not different details. One is a fully automated retention sequence; the other is a daily outbound calling obligation for the CSM team. The staffing implication is significant.

**Owner decision:** is post-service follow-up automated, manual, or automated with manual calls on a subset (e.g. big-ticket jobs, low survey scores)? `sop.csm.post-service-followup` is written for the third option — the one both sources can be true under — and marked `in-review` pending confirmation.

---

## 🔴 C4 — Repeat no-show threshold and remedy

| Source | Says |
|---|---|
| `sop.csm.no-show-recovery` | Repeat ghost at **2+** → flag account, **deposit required** on next booking. |
| KB → Policies → Cancellation & Rescheduling | Repeat no-shows at **3+** → flag account, **confirmation call required** before future bookings. |

Different trigger count and a materially different consequence — taking a deposit is a much stronger step than requiring a confirmation call.

**Owner decision:** which threshold, and which remedy? Note that a deposit requirement may need a stated policy customers can be pointed to before we can enforce it.

---

## 🟢 C5 — The greeting. SOP wins, decisively.

| Source | Says |
|---|---|
| `sop.csm.greeting` | "Thank you for **choosing** Home+ Air and Heat, this is [name], how can we **serve** you today?" — and explicitly bans the alternative. |
| KB → Phone Scripts → Opening Greeting | "Thank you for **calling** [Company Name], this is [Your Name]. How can I **help** you today?" |

The KB's version is the exact phrasing the SOP lists under "What we do NOT say," word for word. It is also generic boilerplate with `[Company Name]` placeholders never filled in.

**Resolved:** `sop.csm.greeting` is the standard. The KB article should be retired at migration, not merged.

**Kept from the KB:** the returning-customer variation (when caller ID matches a ServiceTitan record) is a genuinely good idea that the SOP lacked. Added to `sop.csm.greeting` in the SOP's own voice.

---

## 🟢 C6 — Hold cap: 60 or 90 seconds?

| Source | Says |
|---|---|
| `sop.csm.transfer-hold` | Cap **60 seconds**, return with an update. |
| KB → Phone Scripts → Hold & Transfer | Max **90 seconds**; check back at 60s; at 90s offer a callback. |

**Resolved: 60 seconds stands** as the cap — it is the tighter commitment and it is already scored. The KB's *escalation ladder* is better than the SOP's, though: it says what to actually do when 60 seconds isn't enough, which the SOP left unanswered. Merged into `sop.csm.transfer-hold` — 60s check-back, then offer the callback rather than holding on.

---

## 🔵 C7 — Emergency thresholds were too vague to score

| Source | Says |
|---|---|
| `protocol.emergency.triage` (before) | "No heat + **freezing temps** + vulnerable occupant"; "No AC + **heat advisory** + vulnerable occupant" |
| KB → Phone Scripts → After-Hours | "No heat when **below 40°F** outside"; "No AC when **above 95°F** with elderly/infants" |

"Freezing temps" is a judgement call at 2 AM by a stressed CSM. 40°F is a number. Since triage is the only pass/fail item on the QA rubric, it must be scoreable — and "did they check the temperature" is scoreable in a way that "did they sense an emergency" is not.

**Resolved in favour of the KB.** Thresholds tokenised as `emergency_temp_cold` and `emergency_temp_hot` and written into `protocol.emergency.triage`.

---

## 🔵 C8 — Escalation triggers were incomplete

`sop.csm.de-escalation` listed 4 triggers. The KB lists 6, across two articles, including three the SOP missed entirely:

- Refund request over $100
- **Safety complaint about a technician**
- Same issue reported 3+ times
- Property damage alleged
- Abusive language (stay calm, transfer)

A safety complaint about a tech is not a de-escalation problem — it is a liability event, and it was nowhere in the SOP.

**Resolved in favour of the KB.** All triggers consolidated into `sop.csm.escalation`, which is now the single escalation authority; `sop.csm.de-escalation` points at it rather than keeping a second list.

---

## 🔵 C9 — "Never blind transfer" had no fallback

`sop.csm.transfer-hold` said warm transfer, never blind — but was silent on what to do when the receiver genuinely cannot be reached, which is a real situation with no legal move under the old text.

**Resolved in favour of the KB**, which supplies both the controlled cold-transfer fallback (give the customer the direct number first) and the manager-unavailable commitment (callback within 30 minutes). Both added.

---

## 🟢 C10 — Cancellation fees

`script.objection.callback-spouse` says "if you cancel by tomorrow morning there's no charge," which implies a charge exists after that. The KB is unambiguous: "**No cancellation fees — we never charge for canceling.**"

**Resolved in favour of the KB** — there is no cancellation fee, so the script should not imply one. The line now offers the free cancellation as an unconditional fact, which is a stronger close anyway.

---

## Summary

| | Count |
|---|---|
| 🔴 Blocked on owner decision | 4 — C1, C2, C3, C4 |
| 🟢 Resolved in favour of the SOP | 3 — C5, C6, C10 |
| 🔵 Resolved in favour of the KB (SOP updated) | 3 — C7, C8, C9 |

**C1 is resolved (2026-08-10) — no surcharge.** C2, C3 and C4 remain open and can wait for the next SOP review.

## What happens to the KB articles

The reconciled KB articles must not be migrated verbatim into `content/` — that would recreate the contradiction in the place meant to end it. At KB migration time:

- **Retire** (SOP already covers it, better): Opening Greeting, Call Closing, Hold & Transfer, the three objection articles.
- **Migrate** (genuine gaps, now published): Voicemail Scripts, Non-English Caller Handling, Refund & Credit, When to Escalate, Tone & Language, post-service and retention articles, guarantees, service-area handling.
- **Released by C1:** After-Hours & Overflow (corrected in place), No Emergency Surcharge, After-Hours & Holiday Policies. All three now agree — no surcharge, at any hour.
