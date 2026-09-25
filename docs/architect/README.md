# Role-based access — deployment

Two projects have to change. **Do them in this order.** The last step is the one
that starts enforcing access, and if it runs first, everyone except the owner is
locked out of the whole app until the rest is finished.

## Why the order matters

The browser gate (`RequireTab`) hides every tab a person's roles do not allow.
Roles arrive in `staff_roles`, and the only thing that writes that table is
`sync-my-role` calling the Architect project. So until Architect can answer,
every account has zero roles, and zero roles means zero tabs.

The migration seeds exactly one admin — `blakeruwali@hometsair.com` — so there is
always somebody who can approve a request. Everyone else depends on the lookup
working.

**Deploy the frontend last, and only after you have seen a real account come back
with a real role.**

---

## 1. Architect project

**First**, run [`roles-for-email.sql`](./roles-for-email.sql) in Architect's SQL
editor. It adds one security-definer function that returns the roles for an email
address, callable only by the service role.

This is where the assumption about Architect's schema lives — a `user_roles`
table with `user_id` and `role`. If your column names differ, change them there
and the edge function needs no edit. Confirm with:

```sql
select role, count(*) from user_roles group by role order by count(*) desc;
```

That query is also the one worth running before anything else, because its output
is what `ROLE_TABS` in `src/lib/access.ts` has to match.

**Then** create an edge function named `role-lookup` and paste the body from
[`role-lookup.ts`](./role-lookup.ts).

Finally, set one secret on the Architect project:

| Secret | Value |
|---|---|
| `ARCHITECT_ROLE_API_KEY` | a long random string — generate one, e.g. `openssl rand -hex 32` |

That function must **not** be reachable from a browser. It authenticates by the
shared secret, not by a user session, so anything holding the secret can ask for
anyone's roles. That is safe only because the caller is our backend.

## 2. This project's secrets

Set both on the SOP app:

| Secret | Value |
|---|---|
| `ARCHITECT_ROLE_API_KEY` | **the same string** as above |
| `ARCHITECT_ROLE_API_URL` | the Architect function URL, e.g. `https://<architect-ref>.supabase.co/functions/v1/role-lookup` |

If either is missing, `sync-my-role` returns 503 and logs which one — it does not
pretend the person has no roles.

## 3. Apply the migration

`supabase/migrations/20260925120000_role_based_access.sql`.

It creates `staff_roles`, `tab_grants` and `access_requests`, adds `has_role()`
and `is_admin()`, tightens rubric seeding and suggestion review to admins, and
seeds the owner as the first admin.

Nothing about the app changes yet — the frontend gate ships in step 5.

Note on types: the three new tables were added to
`src/integrations/supabase/types.ts` by hand so the app typechecks before the
migration exists. That file is generated, so regenerating it after this step is
expected and will produce the same definitions.

## 4. Verify before enforcing

With the migration applied and the frontend not yet deployed, sign in and call
the function from the browser console on the live site:

```js
const { data, error } = await window.supabase.functions.invoke("sync-my-role");
console.log(data, error);
```

You want `{ roles: ["admin"], synced_at: "..." }` or whatever that account holds
in Architect.

Then check a second account — ideally a technician — and confirm the role string
that comes back matches a key in `ROLE_TABS` in `src/lib/access.ts`. Spelling is
forgiving about case and `-` vs `_`, but not about the word itself:
`customer-success` matches, `cs` does not.

If a role comes back that the app has no mapping for, add it to `ROLE_TABS`
before deploying. The admin page at `/admin/access` also lists unmapped roles
once it is live.

## 5. Deploy the frontend

Merge to `main`. From this point tabs are filtered by role.

If something is wrong, the fastest recovery is to add the affected role to
`ROLE_TABS` and redeploy — not to loosen the database policies, which are doing a
different and narrower job.

---

## What this does not secure

The SOP content is compiled into the JavaScript bundle. Hiding a tab removes it
from the menu and from routing; it does not make the text unreadable to someone
signed in who goes looking in the bundle.

The real confidentiality boundary is the one already in place:
`public.is_homets_user()`, which keeps every table to confirmed
`@hometsair.com` accounts. Role-based tabs are about giving people the four books
they need instead of fourteen, not about keeping secrets from staff.

If a document ever genuinely needs to be restricted from other staff — a pay
scale, a disciplinary process — it cannot live in `content/` and be gated this
way. It needs to be stored server-side and fetched per request.

## Role changes

Roles refresh on next sign-in, or immediately from the **Refresh my access**
button on the no-access page. A role removed in Architect disappears here on the
next sync, because `sync-my-role` replaces rather than merges.

An approved access request adds one tab for one person on top of their role, and
survives role changes until an admin revokes it at `/admin/access`.
