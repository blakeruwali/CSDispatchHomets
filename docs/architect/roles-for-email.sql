-- roles_for_email — RUN THIS IN THE ARCHITECT PROJECT, NOT THIS ONE.
--
-- Paired with role-lookup.ts in this folder. The edge function calls this
-- instead of paging through auth.users with listUsers(), which meant a scan of
-- every account on every sign-in and quietly stopped working past a couple of
-- thousand users.
--
-- SECURITY DEFINER because auth.users is not readable by the calling role.
-- Execute is revoked from anon and authenticated on purpose: with it granted,
-- any signed-in Architect user could enumerate anyone's roles by guessing
-- email addresses. Only the service role — that is, only the edge function —
-- may call it.
--
-- CHECK BEFORE RUNNING: that roles live in public.user_roles with user_id and
-- role columns. If `role` is an enum rather than text, the ::text cast below
-- already handles it.

create or replace function public.roles_for_email(lookup_email text)
returns setof text
language sql
stable
security definer
set search_path = ''
as $$
  select r.role::text
  from auth.users u
  join public.user_roles r on r.user_id = u.id
  where lower(u.email) = lower(lookup_email);
$$;

comment on function public.roles_for_email(text) is
  'Roles for one email address. Called only by the role-lookup edge function '
  'using the service role, on behalf of the Homets SOP app.';

revoke all on function public.roles_for_email(text) from public;
revoke all on function public.roles_for_email(text) from anon;
revoke all on function public.roles_for_email(text) from authenticated;
grant execute on function public.roles_for_email(text) to service_role;
