---
id: sop.csm.diagnostic-fee
title: Diagnostic Fee Framing
department: csm
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-02
review_cadence_days: 90
tags: [diagnostic, fee, framing, price, objection, waiver]
related: [sop.csm.membership-pivot, script.objection.price, sop.csm.service-type, sop.csm.membership-status]
surfaces: [csm, checklist]
---

# Diagnostic Fee Framing

| | |
|---|---|
| **Purpose** | Set the fee expectation before the doorstep. |
| **When it applies** | Every repair / "not working" call. |
| **Owner** | CSM |

## The frame {#frame}

> "Our diagnostic is {{price:diagnostic_residential}} for residential, {{price:diagnostic_commercial}} for commercial. That covers the tech coming out, diagnosing the issue, and giving you a written repair price. If you approve the repair today, the diagnostic is credited toward the work."

**Then stop talking.** Let them respond.

The pause is the technique. Filling the silence with justification signals that you think the price is high, and the customer will agree with you.

## Responses {#responses}

| They say | Response |
|---|---|
| "Do you waive it if I do the repair?" | "Yes — credited toward the repair if approved today." |
| "Someone else does it free" | "Understood. Our tech is licensed, insured, and gives a written price on-site — that's what the {{price:diagnostic_residential}} covers." **No price match.** |
| "Can I get a phone quote?" | "We can't diagnose over the phone accurately — that's why the visit exists." |
| Home+ member | {{price:membership_diagnostic_posture}}. Confirm on the ticket. |

## Fee waivers are Manager-only {#waivers}

**CSMs do not waive.** Not to save a call, not to end a hard conversation, not because the customer is upset. The fee is the same for everyone who isn't a member, and a CSM who waives once will be asked to waive every time.

The member path is not a waiver — it's a benefit, and it's the reason to talk about membership. See `sop.csm.membership-pivot`.

## Never quote a diagnostic on an install estimate {#estimate}

Replacement estimates are {{price:estimate_install}}. Confirm which conversation you're in before quoting anything — `sop.csm.service-type`.

## Related

- The price objection, in full: `script.objection.price`
- Pivoting to membership after the fee lands: `sop.csm.membership-pivot`
