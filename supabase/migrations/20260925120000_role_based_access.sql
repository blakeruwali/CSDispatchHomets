-- Role-based access, driven by Architect.
--
-- Roles are authored in the Architect project and copied here at sign-in by
-- the `sync-my-role` edge function, which is the only thing that may write
-- staff_roles. The browser never talks to Architect and never writes a role.
--
-- WHAT THIS DOES AND DOES NOT SECURE
--
-- The SOP content is bundled into the JavaScript at build time — it is not in
-- this database. So hiding a tab is a navigation affordance, not a
-- confidentiality boundary: anyone signed in could read the bundle. The
-- boundary that does hold is the one already in place, public.is_homets_user(),
-- which keeps every table to confirmed @hometsair.com accounts.
--
-- That is why there is no SQL copy of the role-to-tab map. The map lives in
-- src/lib/access.ts, where it can be reviewed in a diff. A second copy here
-- would drift from it, and would protect nothing it does not already protect.
--
-- What this migration does secure is the data that genuinely differs by role:
-- who may seed rubrics, who may rule on a content suggestion, and who may
-- grant access to someone else.

-- ---------------------------------------------------------------- staff_roles

create table if not exists public.staff_roles (
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null,
  synced_at timestamptz not null default now(),
  primary key (user_id, role)
);

comment on table public.staff_roles is
  'Roles copied from the Architect project at sign-in. Written only by the '
  'sync-my-role edge function using the service role; never by the browser.';

-- Read-only to the browser. There is no insert, update or delete policy and
-- no write grant, so a staff member cannot give themselves a role even though
-- they can see the table.
grant select on public.staff_roles to authenticated;
grant all on public.staff_roles to service_role;

alter table public.staff_roles enable row level security;

create policy "staff can read their own roles"
  on public.staff_roles for select to authenticated
  using (user_id = auth.uid() and (select public.is_homets_user()));

-- Admins need the whole table to run the access page: to see who holds what,
-- and to spot a role Architect has started sending that this app has no
-- mapping for. Without that, an unmapped role looks like a broken app rather
-- than a missing line in src/lib/access.ts.
create policy "admins can read all roles"
  on public.staff_roles for select to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()));

-- ----------------------------------------------------------------- functions

-- SECURITY DEFINER so it can read staff_roles without tripping that table's
-- own policy, which would otherwise recurse when a policy calls this function.
create or replace function public.has_role(target_role text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.staff_roles r
    where r.user_id = auth.uid()
      and lower(replace(replace(r.role, '_', '-'), ' ', '-')) = lower(replace(replace(target_role, '_', '-'), ' ', '-'))
  );
$$;

comment on function public.has_role(text) is
  'True when the current session holds this Architect role. Separators are '
  'flattened so customer_success and customer-success are one role, matching '
  'normalizeRole() in src/lib/access.ts.';

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.has_role('admin');
$$;

revoke all on function public.has_role(text) from public;
revoke all on function public.is_admin() from public;
grant execute on function public.has_role(text) to authenticated;
grant execute on function public.is_admin() to authenticated;

-- ----------------------------------------------------------------- tab_grants

-- One extra tab for one person, on top of whatever their Architect role gives.
create table if not exists public.tab_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  -- Denormalized so the access page can name the person. The browser cannot
  -- read auth.users, and a grants list showing raw uuids is unreviewable.
  user_email text not null,
  tab text not null,
  granted_by uuid not null references auth.users(id) on delete restrict,
  granted_at timestamptz not null default now(),
  unique (user_id, tab)
);

comment on table public.tab_grants is
  'Individual tab grants from an approved access request. Additive on top of '
  'the role-to-tab map in src/lib/access.ts.';

grant select on public.tab_grants to authenticated;
grant insert, delete on public.tab_grants to authenticated;
grant all on public.tab_grants to service_role;

alter table public.tab_grants enable row level security;

-- Everyone may see who has been granted what. These are work permissions, not
-- personal data, and an admin needs to see them to review a request.
create policy "staff can read tab grants"
  on public.tab_grants for select to authenticated
  using ((select public.is_homets_user()));

-- `granted_by = auth.uid()` as well as the admin check, so the audit trail
-- cannot name someone else as the grantor.
create policy "admins can grant a tab"
  on public.tab_grants for insert to authenticated
  with check (
    (select public.is_admin())
    and granted_by = auth.uid()
    and (select public.is_homets_user())
  );

create policy "admins can revoke a tab"
  on public.tab_grants for delete to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()));

-- ------------------------------------------------------------ access_requests

create table if not exists public.access_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  requester_email text not null,
  tab text not null,
  note text,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'denied')),
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists access_requests_pending_idx
  on public.access_requests (status, created_at);

-- One open request per person per tab. Re-requesting a tab that is already
-- pending should be a no-op rather than a second row for an admin to read.
create unique index if not exists access_requests_one_open_idx
  on public.access_requests (user_id, tab)
  where status = 'pending';

grant select, insert on public.access_requests to authenticated;
grant update on public.access_requests to authenticated;
grant all on public.access_requests to service_role;

alter table public.access_requests enable row level security;

create policy "staff can request access for themselves"
  on public.access_requests for insert to authenticated
  with check (
    user_id = auth.uid()
    and lower(requester_email) = lower(auth.email())
    and status = 'pending'
    and reviewed_by is null
    and (select public.is_homets_user())
  );

create policy "staff read their own requests, admins read all"
  on public.access_requests for select to authenticated
  using (
    (select public.is_homets_user())
    and (user_id = auth.uid() or (select public.is_admin()))
  );

-- Only admins rule on a request, and only an admin may name themselves as the
-- reviewer. There is no delete policy: a denied request stays on the record.
create policy "admins can rule on a request"
  on public.access_requests for update to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()))
  with check (
    (select public.is_admin())
    and reviewed_by = auth.uid()
    and status in ('approved', 'denied')
  );

-- --------------------------------------------- tighten the existing surfaces

-- Rubric seeding was open to any signed-in staff member. It overwrites the
-- scoring definitions every QA session is measured against, so it becomes
-- admin-only. Reading stays open to staff — a technician should be able to see
-- what they are scored on.
drop policy if exists "rubrics writable by homets staff"  on public.rubrics;
drop policy if exists "rubrics updatable by homets staff" on public.rubrics;

create policy "admins can seed rubrics"
  on public.rubrics for insert to authenticated
  with check ((select public.is_admin()) and (select public.is_homets_user()));
create policy "admins can update rubrics"
  on public.rubrics for update to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()))
  with check ((select public.is_admin()) and (select public.is_homets_user()));

drop policy if exists "rubric_categories writable by homets staff"  on public.rubric_categories;
drop policy if exists "rubric_categories updatable by homets staff" on public.rubric_categories;
drop policy if exists "rubric_categories deletable by homets staff" on public.rubric_categories;

create policy "admins can seed rubric categories"
  on public.rubric_categories for insert to authenticated
  with check ((select public.is_admin()) and (select public.is_homets_user()));
create policy "admins can update rubric categories"
  on public.rubric_categories for update to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()))
  with check ((select public.is_admin()) and (select public.is_homets_user()));
create policy "admins can delete rubric categories"
  on public.rubric_categories for delete to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()));

drop policy if exists "rubric_items writable by homets staff"  on public.rubric_items;
drop policy if exists "rubric_items updatable by homets staff" on public.rubric_items;
drop policy if exists "rubric_items deletable by homets staff" on public.rubric_items;

create policy "admins can seed rubric items"
  on public.rubric_items for insert to authenticated
  with check ((select public.is_admin()) and (select public.is_homets_user()));
create policy "admins can update rubric items"
  on public.rubric_items for update to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()))
  with check ((select public.is_admin()) and (select public.is_homets_user()));
create policy "admins can delete rubric items"
  on public.rubric_items for delete to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()));

-- Ruling on a suggested SOP edit is a document-control decision, so it becomes
-- admin-only. Submitting one stays open to every staff member — that is the
-- point of the Suggest edit button.
drop policy if exists "homets staff can review suggestions" on public.content_suggestions;

create policy "admins can review suggestions"
  on public.content_suggestions for update to authenticated
  using ((select public.is_admin()) and (select public.is_homets_user()))
  with check ((select public.is_admin()) and (select public.is_homets_user()));

-- ------------------------------------------------------------ admin bootstrap

-- Without this, the migration locks everyone out of the surfaces it just
-- tightened.
--
-- is_admin() reads staff_roles, and staff_roles is only ever populated by the
-- sync-my-role function calling Architect. So on the deploy of this migration
-- there are no admins: nobody can seed a rubric, rule on a suggestion, or
-- approve an access request — and nobody can grant themselves the role,
-- because the browser has no write path to staff_roles. That is the correct
-- design and it needs exactly one seeded row to be usable.
--
-- The owner is seeded directly so there is always one account that can
-- approve the first request. It is idempotent, it does nothing if that account
-- does not exist yet, and the Architect sync will keep the row current
-- afterwards. If the owner's address changes, this row is updated by hand —
-- deliberately, because a self-service path to the admin role is the one thing
-- this table must not have.
insert into public.staff_roles (user_id, role)
select u.id, 'admin'
from auth.users u
where lower(u.email) = 'blakeruwali@hometsair.com'
on conflict (user_id, role) do nothing;
