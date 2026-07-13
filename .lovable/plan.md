# CSM Team SOP — Structure & Roadmap

## Recommended Format (not slides)

Slides are for training and pitching. An SOP is a **reference document** the team pulls up mid-call. It needs to be searchable, versioned, and answer "what do I do RIGHT NOW" in under 10 seconds.

**Recommendation: a structured SOP handbook, delivered in two synced surfaces:**

1. **Master SOP document** (Google Doc or Notion) — source of truth, versioned, one owner (you), editable without a deploy. Printable to PDF for onboarding.
2. **In-app quick-reference** at `/csm` — the same content restructured as a searchable knowledge base (like your existing Knowledge Base component), NOT slides. Collapsible sections, search bar, mobile-first. Team uses this live on calls.

Why not slides: slides force linear reading, hide content behind clicks, and can't be searched mid-call. Your dispatch guide works as slides because it's training. An SOP is operational — different job.

**Structure standard for every SOP section (keep it uniform):**

```text
SECTION TITLE
├── Purpose        (1 sentence — why this exists)
├── When it applies (trigger — inbound call, missed call, etc.)
├── Owner          (CSM / Dispatch / Manager)
├── Procedure      (numbered steps, verbatim scripts in quotes)
├── Decision rules (if/then table for edge cases)
├── Escalation    (when + who to hand off to)
├── Do / Don't    (2-column quick scan)
└── Linked assets  (script, form, KB article)
```

Every section follows this shape. Predictable = fast to scan.

---

## Master SOP Outline (Table of Contents)

Scoped to what you named: **Customer Interaction, Intake, Booking**.

### Part 1 — Foundations
- 1.1 CSM Role & Responsibilities
- 1.2 Hours, Coverage, Handoffs (business hours / after-hours / Posh)
- 1.3 Tools of Record (ServiceTitan, phone system, LSA, Posh)
- 1.4 Communication Standards (tone, hold times, callbacks)
- 1.5 KPIs the CSM owns (answer rate, booking rate, membership pitch rate)

### Part 2 — Customer Interaction
- 2.1 Greeting & Opening Script
- 2.2 Active Listening & Acknowledgement
- 2.3 Customer Profile Recognition (Homeowner / Rental / Commercial / HOA)
- 2.4 Emergency Triage (gas, CO, no heat, flooding — safety-first)
- 2.5 Difficult Customers & De-escalation
- 2.6 Warm Transfer & Hold Protocol

### Part 3 — Intake
- 3.1 Required Data Fields (name, phone, address, system, symptom)
- 3.2 Service Type Identification (Repair / Install / Maintenance)
- 3.3 System Type Identification (Boiler / Furnace / AC / HP / Mini Split / Plumbing)
- 3.4 Residential vs Commercial routing
- 3.5 Symptom Clarification (turning "AC broken" into a dispatchable ticket)
- 3.6 Membership Status Check
- 3.7 Lead Source Attribution ("how did you hear about us")

### Part 4 — Booking
- 4.1 Availability Rules (windows, evening slots, weekend)
- 4.2 Diagnostic Fee Framing ($199 / $269, credited toward repair)
- 4.3 Membership Pivot (Home+ social-proof framing)
- 4.4 Objection Handling (price, "just a quote", "call me back")
- 4.5 Confirmation & Expectations (window, tech name, text, prep)
- 4.6 Reschedules & Cancellations
- 4.7 No-Show / Ghost Recovery

### Part 5 — Channel-Specific Playbooks
- 5.1 Inbound Phone
- 5.2 LSA (Google Local Services Ads)
- 5.3 Website Form
- 5.4 Posh After-Hours Handoff
- 5.5 SMS / Text-back

### Part 6 — Post-Booking
- 6.1 ServiceTitan Ticket Standards (what fields must be complete)
- 6.2 Dispatch Handoff Checklist
- 6.3 Customer Confirmation (24-hr text, morning-of text)

### Part 7 — Governance
- 7.1 Version Control & Change Log
- 7.2 Training & Onboarding Checklist (day 1, week 1, month 1)
- 7.3 QA Scoring Rubric (link to `/checklist` dispatch rubric)
- 7.4 Coaching Cadence (weekly 1:1s, call reviews)

---

## Phased Roadmap

### Phase 1 — Draft the Master SOP (Week 1)
- Set up the master doc (Google Doc recommended — easy sharing, version history, comments).
- Fill Parts 1, 2, 3 first (Foundations, Interaction, Intake). These are the highest daily-use sections.
- Pull existing content from your memory: dispatch protocols, communication standards, customer profiles, external answering service, general info.
- **Deliverable:** Parts 1–3 complete, reviewed by you.

### Phase 2 — Complete SOP Content (Week 2)
- Fill Parts 4, 5, 6, 7.
- Add verbatim scripts (reuse your existing Posh scripts, LSA templates, diagnostic scripts).
- Build the decision tables (emergency triage matrix, availability rules, escalation triggers).
- **Deliverable:** Full SOP v1.0, printable to PDF, ready for team rollout.

### Phase 3 — In-App Quick Reference at `/csm` (Week 3)
- New route mirroring your Knowledge Base component pattern (`src/components/knowledge-base/`).
- Each SOP section = one collapsible KB article. Search bar on top. Mobile-friendly (already handled by that component).
- Source content from the master SOP — one-way sync (SOP is truth, app is mirror).
- **Deliverable:** `/csm` live, team can pull it up on phone during calls.

### Phase 4 — Scoring & Coaching Loop (Week 4)
- Your existing `/checklist` already has a Dispatch rubric — extend or clone it as the CSM rubric so managers score real CSM calls against the SOP.
- Weekly coaching cadence: manager reviews 3 calls per CSM, scores against rubric, uses AI coach for gap analysis.
- Feed patterns back into the SOP (if 3 CSMs miss the same objection, update Part 4.4).
- **Deliverable:** Living SOP with feedback loop.

### Phase 5 — Governance (Ongoing)
- Monthly SOP review — you + one senior CSM.
- Change log at the top of the master doc.
- Onboarding checklist for new hires (Part 7.2).

---

## What I Need From You to Start

1. Confirm **Google Doc** as the master SOP home (or name your preference — Notion, Word, etc.).
2. Confirm the **scope** matches: Customer Interaction + Intake + Booking. Anything to add or cut?
3. Approve this outline and I'll draft **Part 1 (Foundations) + Part 2 (Customer Interaction)** as the first working chunk — actual SOP prose you can paste into the doc, not more planning.

No code changes yet — this is a document-first workstream. The in-app piece (`/csm`) only happens in Phase 3 once the SOP content is stable.
