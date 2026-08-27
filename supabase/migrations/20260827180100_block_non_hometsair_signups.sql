-- Refuse to create an account outside @hometsair.com.
--
-- The RLS migration that precedes this one already means a non-staff session
-- can read nothing. This closes the remaining gap: without it, anyone can
-- still cause a row to be written to auth.users by POSTing to /auth/v1/otp or
-- /auth/v1/signup with the public anon key. Those accounts would be inert, but
-- they would be real — an unbounded, publicly writable table of email
-- addresses, and a confusing thing to find in the dashboard later.
--
-- This runs as a trigger rather than a Supabase auth hook because auth hooks
-- are configured in project settings, not in a migration, and would not travel
-- with this repository.
--
-- Applying it needs ownership of auth.users. If the migration runner refuses,
-- the RLS migration still stands on its own and the exposure is closed; what
-- remains is only the junk-account nuisance. Do not "fix" a permission error
-- here by weakening the policies in the previous file.

create or replace function auth.enforce_hometsair_domain()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- Same pattern as public.is_homets_user(). The leading '@' matters: without
  -- it, an address at `nothometsair.com` would pass.
  if new.email is null or lower(new.email) not like '%@hometsair.com' then
    raise exception 'Only @hometsair.com accounts may be created'
      using errcode = '22023';
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_hometsair_domain on auth.users;

create trigger enforce_hometsair_domain
  before insert on auth.users
  for each row execute function auth.enforce_hometsair_domain();
