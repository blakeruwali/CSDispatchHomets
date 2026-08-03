-- Speed to lead: marketplace lead capture and first-touch measurement.
--
-- The problem this solves: Angi / Thumbtack / Yelp leads are paid for and then
-- not worked, because nobody is watching those inboxes while the phones ring.
-- Every lead here is money already spent, so the only number that matters is
-- how long it sits before a human touches it.

create type public.lead_channel as enum (
  'angi', 'thumbtack', 'yelp', 'lsa', 'web', 'phone', 'referral', 'other'
);

create type public.lead_status as enum (
  'new',          -- nobody has picked it up
  'working',      -- claimed, attempts in progress
  'booked',       -- became a job
  'unreachable',  -- attempt cadence exhausted
  'not_a_lead',   -- wrong service, out of area, spam — disputable with the platform
  'lost'          -- reached them, they went elsewhere
);

create type public.lead_attempt_kind as enum ('call', 'text', 'email', 'platform_message');

create type public.lead_attempt_outcome as enum (
  'connected', 'no_answer', 'voicemail', 'wrong_number', 'sent'
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  channel public.lead_channel not null,

  -- The platform's own id. Lets automated ingestion run repeatedly without
  -- creating duplicates when the same notification arrives twice.
  external_id text,

  customer_name text,
  phone text,
  email text,
  address text,
  job_type text,
  description text,

  -- received_at is when the CUSTOMER submitted, as reported by the platform.
  -- ingested_at is when it reached us. Speed to lead is measured from
  -- received_at, because that is the clock the customer is actually running.
  received_at timestamptz not null default now(),
  ingested_at timestamptz not null default now(),

  -- Copied onto the row rather than looked up, so changing a channel's target
  -- later does not silently rewrite history on leads already handled.
  sla_seconds int not null,

  claimed_by uuid references auth.users(id) on delete set null,
  claimed_at timestamptz,

  -- The single most important column in this schema.
  first_touch_at timestamptz,

  status public.lead_status not null default 'new',
  outcome_notes text,

  -- Set once the lead becomes a ServiceTitan job, so revenue can be traced
  -- back to the channel that paid for it.
  servicetitan_job_id text,

  -- Original payload, kept so a parser change can be replayed against history.
  raw jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Dedupe only where the platform gave us an id; manual entries stay free.
create unique index leads_channel_external_id_key
  on public.leads (channel, external_id)
  where external_id is not null;

create index leads_open_idx on public.leads (received_at desc)
  where status in ('new', 'working');
create index leads_channel_received_idx on public.leads (channel, received_at desc);

create table public.lead_attempts (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  kind public.lead_attempt_kind not null,
  outcome public.lead_attempt_outcome not null,
  notes text,
  attempted_by uuid references auth.users(id) on delete set null,
  attempted_at timestamptz not null default now()
);

create index lead_attempts_lead_idx on public.lead_attempts (lead_id, attempted_at);

-- First touch is stamped by the database, not the client, so it cannot be
-- backdated by a slow page or an optimistic UI update.
create or replace function public.stamp_lead_first_touch()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.leads
     set first_touch_at = coalesce(first_touch_at, new.attempted_at),
         status = case when status = 'new' then 'working' else status end,
         updated_at = now()
   where id = new.lead_id;
  return new;
end;
$$;

create trigger lead_attempts_stamp_first_touch
  after insert on public.lead_attempts
  for each row execute function public.stamp_lead_first_touch();

create or replace function public.touch_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.touch_leads_updated_at();

-- Reporting view: seconds to first touch, and whether the SLA was met.
create or replace view public.lead_response_times as
select
  l.id,
  l.channel,
  l.status,
  l.received_at,
  l.first_touch_at,
  l.sla_seconds,
  extract(epoch from (l.first_touch_at - l.received_at))::int as seconds_to_first_touch,
  case
    when l.first_touch_at is null then null
    else extract(epoch from (l.first_touch_at - l.received_at)) <= l.sla_seconds
  end as met_sla,
  (select count(*) from public.lead_attempts a where a.lead_id = l.id) as attempt_count
from public.leads l;

-- Leads are team-shared work, not per-user records: anyone signed in can see
-- and work the queue. A lead only one person can see is a lead that waits.
alter table public.leads         enable row level security;
alter table public.lead_attempts enable row level security;

create policy "leads readable by authenticated"
  on public.leads for select to authenticated using (true);
create policy "leads writable by authenticated"
  on public.leads for insert to authenticated with check (true);
create policy "leads updatable by authenticated"
  on public.leads for update to authenticated using (true);

create policy "lead_attempts readable by authenticated"
  on public.lead_attempts for select to authenticated using (true);
create policy "lead_attempts writable by authenticated"
  on public.lead_attempts for insert to authenticated with check (true);
