

# Add Missing 5% — Phone Scripts & Protocols to Knowledge Base

## Overview
Add **2 new comprehensive KB sections** to `kbData.tsx` covering all the identified gaps. This brings the Knowledge Base to **13 sections** and approximately **80+ articles** — completing the 100% coverage for CS and Dispatch teams.

## New Sections & Articles

### Section 12: "Phone Scripts & Call Protocols"
Icon: Phone (already imported), Color: GREEN

**Articles (7):**
1. **Opening Greeting Script** — Verbatim script for answering calls: "Thank you for calling [Company], this is [Name], how can I help you today?" with tone/pacing notes and variations for returning customers
2. **Call Closing & Confirmation Script** — Recap template: confirm appointment date/time, service address, job type, pricing expectations, tech arrival window, and "Is there anything else I can help with?"
3. **Voicemail Scripts** — Word-for-word voicemail for: missed customer calls, appointment confirmations, follow-up after no-show, and after-hours greeting
4. **Hold & Transfer Protocols** — How to properly place on hold ("May I place you on a brief hold?"), max hold time (90 seconds), check-back etiquette, warm vs. cold transfers, and manager escalation steps
5. **Non-English Caller Handling** — Step-by-step: identify language, use language line/interpreter service, key Spanish phrases for HVAC emergencies, and how to book through a translator
6. **After-Hours & Overflow Call Handling** — What qualifies as after-hours emergency vs. next-day, on-call tech dispatch rules, pricing for after-hours, and how to set expectations

### Section 13: "Post-Service & Customer Retention"
Icon: Star (already imported), Color: WARM

**Articles (6):**
1. **Post-Service Follow-Up Script** — 24-hour callback template: "Hi [Name], this is [Agent] from [Company]. I'm calling to make sure everything is working well after yesterday's visit..." with branching for satisfied vs. unsatisfied
2. **Google Review Request Script** — Natural ask: timing (right after positive feedback), verbatim script, how to text/email the review link, and what NOT to say (no incentives)
3. **Referral Program Script** — How to mention the referral program, what the reward is, and a natural transition: "By the way, if you know anyone who needs..."
4. **Handling Negative Feedback Post-Service** — De-escalation script for unhappy post-service calls, when to offer a callback visit vs. refund, and manager escalation criteria
5. **Membership Retention Calls** — Script for calling expiring members, renewal benefits pitch, and how to handle "I want to cancel"
6. **Seasonal Outreach Scripts** — Pre-summer and pre-winter proactive call templates for tune-up reminders to existing customers

## Technical Details

### File Modified
**`src/components/knowledge-base/kbData.tsx`**
- Append 2 new section objects to the `kbSections` array (after line 1542, before the closing `];`)
- No new icon imports needed — `Phone`, `Star`, `Clock`, `Heart`, `Users`, `CheckCircle`, `MessageCircleQuestion`, `Shield`, `AlertTriangle` are all already imported
- Import `Globe` from lucide-react for the non-English caller article
- All articles follow the exact same JSX structure as existing articles (colored info boxes, bullet lists, tip callouts)
- Total addition: ~13 articles across 2 sections

### No other files need changes
The `KBSection`, `KnowledgeBase`, `MobileKBView`, and search functionality all dynamically render from `kbSections` — new sections appear automatically everywhere.

