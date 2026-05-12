-- Drop overly permissive write policies
drop policy if exists "rubrics writable by authenticated" on public.rubrics;
drop policy if exists "rubrics updatable by authenticated" on public.rubrics;
drop policy if exists "rubric_categories writable by authenticated" on public.rubric_categories;
drop policy if exists "rubric_categories updatable by authenticated" on public.rubric_categories;
drop policy if exists "rubric_categories deletable by authenticated" on public.rubric_categories;
drop policy if exists "rubric_items writable by authenticated" on public.rubric_items;
drop policy if exists "rubric_items updatable by authenticated" on public.rubric_items;
drop policy if exists "rubric_items deletable by authenticated" on public.rubric_items;

-- Security-definer function any authenticated user can call to (re)seed a rubric idempotently.
-- Bypasses RLS since it runs as owner. Safe for solo-use phase; tighten with a roles table later.
create or replace function public.seed_rubric(payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_rubric_id uuid;
  v_category_id uuid;
  v_slug text;
  v_name text;
  cat jsonb;
  itm jsonb;
  cat_count int := 0;
  item_count int := 0;
begin
  if auth.uid() is null then
    raise exception 'must be authenticated';
  end if;

  v_slug := payload->>'slug';
  v_name := payload->>'name';

  insert into public.rubrics (slug, name)
  values (v_slug, v_name)
  on conflict (slug) do update set name = excluded.name, is_active = true
  returning id into v_rubric_id;

  -- wipe and re-insert categories+items for idempotent reseed
  delete from public.rubric_categories where rubric_id = v_rubric_id;

  for cat in select * from jsonb_array_elements(payload->'categories')
  loop
    insert into public.rubric_categories (rubric_id, name, sort_order, weight)
    values (v_rubric_id, cat->>'name', (cat->>'sort_order')::int, (cat->>'weight')::int)
    returning id into v_category_id;
    cat_count := cat_count + 1;

    for itm in select * from jsonb_array_elements(cat->'items')
    loop
      insert into public.rubric_items
        (category_id, label, sort_order, weight, item_type, max_score, coaching_hints)
      values
        (v_category_id,
         itm->>'label',
         (itm->>'sort_order')::int,
         (itm->>'weight')::int,
         itm->>'item_type',
         (itm->>'max_score')::int,
         itm->>'coaching_hints');
      item_count := item_count + 1;
    end loop;
  end loop;

  return jsonb_build_object(
    'rubric_id', v_rubric_id,
    'slug', v_slug,
    'categories', cat_count,
    'items', item_count
  );
end;
$$;

revoke all on function public.seed_rubric(jsonb) from public;
grant execute on function public.seed_rubric(jsonb) to authenticated;