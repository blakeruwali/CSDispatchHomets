-- Restrict every table to @hometsair.com accounts.
--
-- Until now the browser was the only thing enforcing the domain rule: useAuth
-- signs out a session whose email is not @hometsair.com. That check never runs
-- on a direct call to the REST API, and the anon key is public by design — it
-- ships in the JS bundle. Anyone could POST /auth/v1/otp with any address,
-- receive a magic link in their own mailbox, and hold a valid `authenticated`
-- session. Every policy then read `using (true)`, so that session could read
-- every acknowledgement (staff names and signature timestamps), every content
-- suggestion, and every rubric.
--
-- After this migration the browser check is a courtesy — it explains the
-- rejection to a person who mistyped their address. This is the rule.

-- SECURITY DEFINER because it reads auth.users, which `authenticated` cannot.
--
-- It checks auth.users rather than the JWT `email` claim on purpose. The claim
-- is signed and cannot be forged, but it says nothing about whether the person
-- holding it owns the mailbox. Requiring email_confirmed_at means an address
-- must have been proven — otherwise someone could sign up as a plausible
-- @hometsair.com address they do not own and, if the project ever has email
-- confirmation switched off, get a session immediately.
--
-- The leading '@' in the pattern is load-bearing: without it, an address at
-- `nothometsair.com` would match.
create or replace function public.is_homets_user()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from auth.users u
    where u.id = auth.uid()
      and u.email_confirmed_at is not null
      and lower(u.email) like '%@hometsair.com'
  );
$$;

comment on function public.is_homets_user() is
  'True when the current session belongs to a confirmed @hometsair.com account. '
  'Every RLS policy in this schema is keyed on it. Keep in step with '
  'ALLOWED_EMAIL_DOMAIN in src/hooks/useAuth.tsx.';

revoke all on function public.is_homets_user() from public;
grant execute on function public.is_homets_user() to authenticated;

-- Policies are dropped and recreated rather than altered so the resulting
-- definition is visible in one place. Calls are wrapped in a scalar subquery
-- so Postgres evaluates the function once per statement instead of per row.

-- rubrics -------------------------------------------------------------------
drop policy if exists "rubrics readable by authenticated"  on public.rubrics;
drop policy if exists "rubrics writable by authenticated"  on public.rubrics;
drop policy if exists "rubrics updatable by authenticated" on public.rubrics;

create policy "rubrics readable by homets staff"
  on public.rubrics for select to authenticated
  using ((select public.is_homets_user()));
create policy "rubrics writable by homets staff"
  on public.rubrics for insert to authenticated
  with check ((select public.is_homets_user()));
create policy "rubrics updatable by homets staff"
  on public.rubrics for update to authenticated
  using ((select public.is_homets_user()))
  with check ((select public.is_homets_user()));

-- rubric_categories ---------------------------------------------------------
drop policy if exists "rubric_categories readable by authenticated"  on public.rubric_categories;
drop policy if exists "rubric_categories writable by authenticated"  on public.rubric_categories;
drop policy if exists "rubric_categories updatable by authenticated" on public.rubric_categories;
drop policy if exists "rubric_categories deletable by authenticated" on public.rubric_categories;

create policy "rubric_categories readable by homets staff"
  on public.rubric_categories for select to authenticated
  using ((select public.is_homets_user()));
create policy "rubric_categories writable by homets staff"
  on public.rubric_categories for insert to authenticated
  with check ((select public.is_homets_user()));
create policy "rubric_categories updatable by homets staff"
  on public.rubric_categories for update to authenticated
  using ((select public.is_homets_user()))
  with check ((select public.is_homets_user()));
create policy "rubric_categories deletable by homets staff"
  on public.rubric_categories for delete to authenticated
  using ((select public.is_homets_user()));

-- rubric_items --------------------------------------------------------------
drop policy if exists "rubric_items readable by authenticated"  on public.rubric_items;
drop policy if exists "rubric_items writable by authenticated"  on public.rubric_items;
drop policy if exists "rubric_items updatable by authenticated" on public.rubric_items;
drop policy if exists "rubric_items deletable by authenticated" on public.rubric_items;

create policy "rubric_items readable by homets staff"
  on public.rubric_items for select to authenticated
  using ((select public.is_homets_user()));
create policy "rubric_items writable by homets staff"
  on public.rubric_items for insert to authenticated
  with check ((select public.is_homets_user()));
create policy "rubric_items updatable by homets staff"
  on public.rubric_items for update to authenticated
  using ((select public.is_homets_user()))
  with check ((select public.is_homets_user()));
create policy "rubric_items deletable by homets staff"
  on public.rubric_items for delete to authenticated
  using ((select public.is_homets_user()));

-- sessions and their children ----------------------------------------------
-- Ownership already scoped these to one user. The domain check is still worth
-- adding: it stops a non-staff session creating rows at all, rather than
-- letting it accumulate its own private ones.
drop policy if exists "sessions owner all"    on public.sessions;
drop policy if exists "item_states owner all" on public.session_item_states;
drop policy if exists "ai_reviews owner all"  on public.session_ai_reviews;

create policy "sessions owner all"
  on public.sessions for all to authenticated
  using (owner_id = auth.uid() and (select public.is_homets_user()))
  with check (owner_id = auth.uid() and (select public.is_homets_user()));

create policy "item_states owner all"
  on public.session_item_states for all to authenticated
  using (
    (select public.is_homets_user())
    and exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid())
  )
  with check (
    (select public.is_homets_user())
    and exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid())
  );

create policy "ai_reviews owner all"
  on public.session_ai_reviews for all to authenticated
  using (
    (select public.is_homets_user())
    and exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid())
  )
  with check (
    (select public.is_homets_user())
    and exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid())
  );

-- content_suggestions -------------------------------------------------------
drop policy if exists "authenticated can submit suggestions" on public.content_suggestions;
drop policy if exists "authenticated can read suggestions"   on public.content_suggestions;
drop policy if exists "authenticated can review suggestions" on public.content_suggestions;

create policy "homets staff can submit suggestions"
  on public.content_suggestions for insert to authenticated
  with check (submitted_by = auth.uid() and (select public.is_homets_user()));
create policy "homets staff can read suggestions"
  on public.content_suggestions for select to authenticated
  using ((select public.is_homets_user()));
create policy "homets staff can review suggestions"
  on public.content_suggestions for update to authenticated
  using ((select public.is_homets_user()))
  with check ((select public.is_homets_user()));

-- document_acknowledgements -------------------------------------------------
-- These are signatures. They are the most sensitive rows here: who signed
-- what, and when. There is still no update or delete policy, and none should
-- be added — an acknowledgement that can be edited is not evidence of
-- anything.
drop policy if exists "authenticated can acknowledge as themselves" on public.document_acknowledgements;
drop policy if exists "authenticated can read acknowledgements"     on public.document_acknowledgements;

create policy "homets staff can acknowledge as themselves"
  on public.document_acknowledgements for insert to authenticated
  with check (acknowledged_by = auth.uid() and (select public.is_homets_user()));
create policy "homets staff can read acknowledgements"
  on public.document_acknowledgements for select to authenticated
  using ((select public.is_homets_user()));
