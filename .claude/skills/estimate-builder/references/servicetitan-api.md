# ServiceTitan estimate machinery — concrete call shapes

Verified against `integrated-home-hub/supabase/functions/st-api/index.ts`
(2026-08-29). If a call fails unexpectedly, re-read that file — it is the
source of truth and better-commented than ServiceTitan's docs.

## The st-api proxy (integrated-home-hub)

One trusted entry point for every ST API call. **Service-role bearer
required** — public/anon callers get 401. Secrets it needs are already set
in the hub's Supabase project (ST_APP_KEY, ST_CLIENT_ID, ST_CLIENT_SECRET,
ST_TENANT_ID, ST_ENV), mirroring `~/Tools/servicetitan-app/.env`.

```
GET  {SUPABASE_URL}/functions/v1/st-api?op=<op>&<params>
POST {SUPABASE_URL}/functions/v1/st-api?op=<op>   { ...body }
Authorization: Bearer <service-role key>
```

All ops return `{ ok: true, data: ... }` or `{ ok: false, error: "..." }`.

### Lookup ops (find the customer/job first)

| Op | Params | Use |
|---|---|---|
| `whoami` | — | auth sanity check |
| `customer_search` | `&name=...` | find the customer id |
| `customer_get` / `customer_contacts` | `&customer_id=N` | record + phone/email |
| `job_get` | `&job_id=N` | the job an estimate attaches to |
| `appointments` | `&today=1` or `&days=N` | today's board |
| `appointment_assignments` | `&days=N` | which tech has which job |
| `technicians_list` | — | tech ids (e.g. for sold_by) |

### Estimate ops (the core of this skill)

| Op | Shape |
|---|---|
| `estimate_create` | POST `{ jobId, name, summary, items, subtotal }` |
| `estimate_update` | POST `&estimate_id=N` `{ ...patch }` — **metadata only**, items ignored |
| `estimate_add_items` | POST `&estimate_id=N` `{ items: [{ skuId, qty, unitRate, description }] }` |
| `estimate_replace_items` | POST `&estimate_id=N` same items shape — deletes every existing item then re-adds (tenant can't bulk-replace; that's why it loops) |
| `estimate_sell` | POST `&estimate_id=N` `[&sold_by_id=N]` — marks it sold |
| `job_note` | POST `&job_id=N` `{ text }` — leave the paper trail on the job |

Item rule: `skuId` must be a real pricebook SKU id — look it up in the ST
pricebook (or `hvac-catalog`'s mirror, noting it's stale since 2026-03);
never invent one.

## The recommendation pipeline (comfort-architect customers)

`architect-st-push-estimate` — POST `{ "customer_id": "<architect uuid>" }`
with user JWT or service role. Builds a three-line estimate (Heating
Equipment / Cooling Equipment / Installation Labor split), POSTs via
st-api, stores `st_estimate_id` on the recommendation row, and **re-push
PATCHes the same estimate** so ST's Open Estimates view stays clean.
Side effects: report event row + Slack #report-alerts ping. Use this path
whenever the estimate originates from a comfort-architect recommendation;
use raw st-api ops for everything else.

## The local CLI

`~/Tools/servicetitan-app/cli.py` (the `homets-servicetitan` skill's tool)
uses the same OAuth flow and endpoint families. Prefer it for read-heavy
work in sessions where it's installed; prefer st-api when acting from a
context that already holds the hub's service-role key.

## Choosing a path, quickly

- Recommendation exists in architect DB → `architect-st-push-estimate`.
- Ad-hoc repair/replacement quote on a known job → `estimate_create` then
  `estimate_add_items`.
- Revising an estimate's line items → `estimate_replace_items` (never
  `estimate_update`, which silently ignores items).
- Customer accepted → `estimate_sell` with the selling tech's id, then a
  `job_note` recording what was sold.
- No service-role key or CLI in this session → build the full line-item
  draft as the deliverable and name the missing access.
