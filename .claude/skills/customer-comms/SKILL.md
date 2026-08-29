---
name: customer-comms
description: Draft any customer-facing communication for Homets Air & Heat — emails, SMS, voicemails, review requests, follow-ups, estimates cover notes, apology/recovery messages. Use whenever writing to or for a customer, so the message matches published scripts, tone standards, guarantees, and real ServiceTitan data.
---

# Customer communications

Every customer-facing word must match what the SOP already promises. Draft
from the published scripts, then personalize with real data.

## Ground every draft in these docs

| Need | Read |
|---|---|
| Tone (say/avoid phrases) | `content/scripts/csm/tone-language.md` — the test: does the sentence move the problem toward us or toward the customer? |
| Empathy lines | `content/scripts/csm/empathy.md` |
| Voicemail structure | `content/scripts/csm/voicemail.md` |
| Review request (survey gate ≥4) | `content/scripts/csm/review-request.md` |
| Seasonal tune-up outreach | `content/scripts/csm/seasonal-outreach.md` |
| Marketplace lead outreach | `content/scripts/csm/marketplace-outreach.md` |
| Objections (price, quote-only, spouse, DIY) | `content/scripts/objections/` |
| What we may promise | `content/reference/guarantees.md` |
| Membership facts | `content/reference/membership-plans.md` |
| Payment/deposit language | `content/reference/payment-terms.md` |
| SMS rules & caps | `content/playbooks/sms.md` |

## Real data, not placeholders

Use the `homets-servicetitan` skill to pull the customer's actual record:
appointment windows, proposal/estimate status, membership status, job history.
A draft with `[DATE]` placeholders is unfinished if ServiceTitan access is
available. Check membership status before quoting fees — active members get
the waived-diagnostic posture (`membership_diagnostic_posture`).

## Prices and promises

- Quote prices only from `content/pricing/tokens.md` (resolve the token to
  the current number). Never from memory.
- Guarantees you may state: 90-minute arrival or the service call is free
  (fee only), 30-day satisfaction window, 1-year parts & labor on repairs,
  free replacement estimates, no cancellation fee, **no after-hours or
  emergency surcharge — ever**.
- Never promise: a specific referral credit (amount undecided), CSM-issued
  discounts or waivers (C2 disputed — working assumption: no authority), a
  flat maintenance price (TBD).

## Style

- Warm, direct, ownership language. No "per our policy" — give the reason.
- SMS: within the outbound cap (`sms_max_unanswered` = 2 texts/24h without a
  reply), short, one clear ask, named next step.
- Email: subject that says the point, real names (customer's and the sender's),
  specific window/date/amount, one call to action.
- Spanish: mirror the published `.es.md` phrasing when it exists; same facts,
  same tokens.
- Sign as the actual sender (CSM name or Homets Air & Heat), never as Claude.
