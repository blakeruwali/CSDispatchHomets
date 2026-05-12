-- RUBRICS
create table public.rubrics (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  version int not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.rubric_categories (
  id uuid primary key default gen_random_uuid(),
  rubric_id uuid not null references public.rubrics(id) on delete cascade,
  name text not null,
  sort_order int not null,
  weight int not null,
  created_at timestamptz not null default now(),
  unique (rubric_id, sort_order)
);

create table public.rubric_items (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.rubric_categories(id) on delete cascade,
  label text not null,
  description text,
  sort_order int not null,
  weight int not null,
  item_type text not null check (item_type in ('binary','quality')),
  max_score int not null check (max_score in (1,2)),
  coaching_hints text,
  created_at timestamptz not null default now(),
  unique (category_id, sort_order)
);

-- SESSIONS
create table public.sessions (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  rubric_id uuid not null references public.rubrics(id),
  title text,
  customer_context text,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  outcome text check (outcome in ('closed_best','closed_better','closed_good','lost','callback') or outcome is null),
  outcome_revenue numeric(10,2),
  score_cached numeric(5,2),
  notes text,
  created_at timestamptz not null default now()
);

create table public.session_item_states (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  item_id uuid not null references public.rubric_items(id),
  score int check (score in (0,1,2) or score is null),
  reflection text,
  scored_at timestamptz,
  unique (session_id, item_id)
);

create table public.session_ai_reviews (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  per_item_feedback jsonb not null,
  focus_item_id uuid references public.rubric_items(id),
  overall_summary text,
  model_used text,
  prompt_tokens int,
  completion_tokens int,
  created_at timestamptz not null default now()
);

-- INDEXES
create index on public.sessions(owner_id, created_at desc);
create index on public.session_item_states(session_id);
create index on public.session_ai_reviews(session_id);
create index on public.rubric_categories(rubric_id, sort_order);
create index on public.rubric_items(category_id, sort_order);

-- RLS
alter table public.rubrics              enable row level security;
alter table public.rubric_categories    enable row level security;
alter table public.rubric_items         enable row level security;
alter table public.sessions             enable row level security;
alter table public.session_item_states  enable row level security;
alter table public.session_ai_reviews   enable row level security;

create policy "rubrics readable by authenticated"
  on public.rubrics for select to authenticated using (true);

create policy "rubric_categories readable by authenticated"
  on public.rubric_categories for select to authenticated using (true);

create policy "rubric_items readable by authenticated"
  on public.rubric_items for select to authenticated using (true);

-- Seeding policies (allow authenticated user to upsert rubric definitions from /admin/seed)
create policy "rubrics writable by authenticated"
  on public.rubrics for insert to authenticated with check (true);
create policy "rubrics updatable by authenticated"
  on public.rubrics for update to authenticated using (true) with check (true);

create policy "rubric_categories writable by authenticated"
  on public.rubric_categories for insert to authenticated with check (true);
create policy "rubric_categories updatable by authenticated"
  on public.rubric_categories for update to authenticated using (true) with check (true);
create policy "rubric_categories deletable by authenticated"
  on public.rubric_categories for delete to authenticated using (true);

create policy "rubric_items writable by authenticated"
  on public.rubric_items for insert to authenticated with check (true);
create policy "rubric_items updatable by authenticated"
  on public.rubric_items for update to authenticated using (true) with check (true);
create policy "rubric_items deletable by authenticated"
  on public.rubric_items for delete to authenticated using (true);

create policy "sessions owner all"
  on public.sessions for all to authenticated
  using (owner_id = auth.uid()) with check (owner_id = auth.uid());

create policy "item_states owner all"
  on public.session_item_states for all to authenticated
  using (exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid()))
  with check (exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid()));

create policy "ai_reviews owner all"
  on public.session_ai_reviews for all to authenticated
  using (exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid()))
  with check (exists (select 1 from public.sessions s where s.id = session_id and s.owner_id = auth.uid()));