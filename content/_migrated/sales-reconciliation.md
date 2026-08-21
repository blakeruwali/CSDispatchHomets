# Sales Reconciliation Register

Raised while migrating `src/components/presentation/techSalesSlides.tsx` (22 slides) into the sales SOP, 2026-08-17. Same purpose as `csm-reconciliation.md` and `diagnostic-forms-review.md`: record what the sources disagree about, and put the decisions in front of the owner instead of quietly picking one.

Everything else in the deck migrated cleanly and is published. Two items did not.

---

## S1 — Five manufactured-urgency tactics *(owner decision)*

The deck's "Creating Urgency" slide mixes genuine reasons to act with five invented ones. The genuine ones are published in `sop.sales.urgency`. These five are written into that document as **not approved**, and it is held at `in-review` until the owner confirms.

| Tactic, as written in the deck | Problem |
|---|---|
| *"This unit is in stock right now, but with supply chain issues, I can't guarantee it next week."* | A shortage nobody verified. If the customer calls next week and it is available, the technician lied to them. |
| *"If you'd like to move forward today, I can hold your install date. Otherwise it goes to the next customer."* | Only true if we actually release held dates to punish a customer for thinking about it. We do not. |
| *"If we get the paperwork done today, I'll include [thermostat upgrade / UV light / extended warranty] at no additional charge."* | A discount that expires at the door was never real, and it teaches the customer that our pricing is arbitrary — which makes every other number in the proposal negotiable. |
| *"Interest rates are [rising]. Locking in today's rate on financing protects your monthly payment."* | Speculation about the credit market, presented to a homeowner as fact by someone with no basis for it. |
| *"I installed three of these in your neighborhood this month alone. Your neighbor on [street] went with the Better package and loves it."* | Other customers' purchases are not ours to discuss by street. Also unverifiable, and therefore usually invented. |

**Why this is not a matter of taste.** A customer who feels rushed signs, spends the evening reading reviews, and calls to cancel — then tells the neighbourhood why. We work the same roads repeatedly on Long Island; the reputational cost compounds in a way the ticket does not.

It is also the same failure identified in **D6** of `diagnostic-forms-review.md`, where an IAQ form carried the field description *"Soft close: shifts conversation from fear to aspiration."* Two separate sources, the same instinct. Deciding it once, in the sales SOP, settles it for both.

**Recommendation: confirm the removal.** The genuine triggers — R-22 phase-out, real system risk, a rebate you can name and show, the actual booking backlog — are stronger anyway, because they survive the customer checking them.

**Also note:** the deck's *"HVAC Estimate Sales Guide"* slides are live at `/sales/deck`. Confirming S1 means editing or retiring that slide, which is a code change, not a content change.

---

## S2 — Three live sources disagree about Home+ *(owner decision)*

Found while migrating the membership tie-in slide.

| Source | Plan name | Price | Repair discount |
|---|---|---|---|
| `pricing.tokens` → `reference.membership-plans` (**published**) | Home+ | **{{price:membership_home_plus_monthly}}** — $239.88/yr | **{{price:membership_home_plus_repair_discount}}** |
| Knowledge base, `kbData.tsx` (**live on the dispatch surface**) | Home+ **Comfort** | **$299/yr** | **10%** |
| Knowledge base | Home+ **Infinite** | $2,999/yr | 15% + $1,500 repair credit |
| Sales deck, `techSalesSlides.tsx` (**live**) | Home+ | *"a $299 value"* | 15% |

Three disagreements at once:

1. **Price.** $19.99/mo is $239.88 a year, not $299. A technician saying *"that's a $299 value"* while the published plan page says $19.99/mo is quoting a number the customer can disprove from our own site.
2. **Discount.** 15% in the tokens and the deck; **10%** in the knowledge base.
3. **Structure.** The tokens and the published plan document describe a single Home+ plan. The knowledge base describes a two-tier Comfort / Infinite structure. These are not the same product.

**Why it is urgent.** `sop.field.membership` and `sop.sales.membership` both instruct staff to state the discount and the price out loud, and both are published. Until this is settled they are instructing people to say a figure that another live source contradicts.

`sop.sales.membership` therefore quotes the **tokens** and points at `reference.membership-plans` rather than repeating a price, so that answering S2 in one place fixes every document at once.

**Needed from the owner:** the real plan structure, the real price, and the real repair discount. Then `pricing.tokens` is updated and the knowledge base article is corrected in the same pass, exactly as C1 was.

---

## Corrected during migration — no decision needed

**"No overtime charges" was being sold as a membership benefit.** The deck's membership script read: *"You also get 15% off any future repairs, priority scheduling, and no overtime charges."*

Nobody pays an after-hours or emergency surcharge, member or not — that was settled as **C1** on 2026-08-10. Selling a benefit that every customer already has is the fastest way to make a customer doubt the rest of the proposal, and they can check it: the no-surcharge promise is published.

The clause is removed from `sop.sales.membership`, which now carries an explicit warning against it. `reference.membership-plans` already carried the same warning.

**"$150+ savings/call" attached to that benefit** is removed with it — it was a saving against a charge that does not exist.

---

## What migrated cleanly

For the record, so nobody re-litigates the whole deck over two items: the mindset, arrival protocol, walk-around, pain-point discovery, Good/Better/Best structure, investment language, financing sequence, the three closes, paperwork checklist, follow-up cadence, all seven objection scripts including every "never say" list, the install pricing framework, and the cash-versus-financing payment stages all migrated as written.

The payment stages in particular resolved four price tokens that had been defined and unused since the CSM migration — `deposit_rule`, `payment_stage_2_cash`, `payment_stage_2_financing` and `payment_stage_3` were waiting for exactly this document.
