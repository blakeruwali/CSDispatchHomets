# Fixing the missed membership check in the field

Technicians are not verifying membership status or tailoring service to it. The fix is to make the check a named, acknowledged step in the Field SOP book, give techs a single reference for what each plan actually includes, and hand them verbatim language for enrolling non-members at the door.

## 1. New Field SOP: Membership at the Door

`content/sops/field/membership.md` — department `field`, `surfaces: [field, checklist]`, `acknowledgement: required`, section `field-standards`.

Contents:
- **90-second version** — check ServiceTitan membership status *before* you knock; say the benefit out loud; apply it on the invoice; if non-member, quote the repair with and without membership.
- **Three states, three behaviours** — Active (name the benefit, waive diagnostic, apply repair discount), Lapsed (offer reinstatement at the same rate before quoting), Non-member (quote both ways, enroll on today's invoice).
- **What "tailored service" means** — member gets priority booking language, included tune-up scheduled before you leave, discount shown as a line item, not a verbal claim.
- **Failure modes** — quoting a member full price and walking it back; skipping the check because the office "should have caught it"; enrolling someone without recording it in ServiceTitan.
- All prices via `{{price:...}}` tokens; no literal numbers in the doc.

## 2. Member benefits reference

`content/reference/membership-plans.md` — the file `content/reference/README.md` already points at but which does not exist.

- **Home+** (residential): monthly rate, included tune-ups, repair discount, diagnostic posture.
- **Business+** (light commercial), three tiers as supplied:
  - *Essential* — one qualifying RTU, $249.50 first year / $499 renewal, 2 visits/yr, 10% repair discount.
  - *Premier* — $499 first year / $998 renewal, 4 visit allocations, 12% repair discount, written equipment and allocation record.
  - *Enterprise* — custom scope, written quote, equipment/location inventory before proposal.
- Shared rules: nameplate and site access confirmed before service; additional RTUs priced separately; discounts apply to eligible approved repairs only.
- `surfaces: [field, csm, checklist]` so both books show it.

## 3. Non-member enrollment script

`content/scripts/sales/membership-enroll.md` — verbatim at-the-door language:
- The two-number close (repair price today vs. member price plus the plan).
- Commercial variant pointing at the right Business+ tier by unit count.
- Objection lines: "I'll think about it", "I don't use it enough", "cancel anytime?".
- What to do after a yes: enroll in ServiceTitan on today's invoice, book the first included visit before leaving.

## Technical notes

- Price tokens added to `content/pricing/tokens.md`: `membership_business_plus_essential_initial` / `_renewal`, `_premier_initial` / `_renewal`, `_enterprise`, plus visit counts and 10%/12% repair discounts. The existing `membership_business_plus_monthly` TBD flag is removed and the TBD list updated.
- Docs are picked up automatically by `src/lib/content.ts` (`import.meta.glob`) — no loader changes needed.
- `content/reference/README.md` and `content/sops/README.md` updated to list the new files.
- Acknowledgement on the field SOP means each technician signs it per version through the existing acknowledgement panel.
- No rubric or database changes in this pass, per your selection.
