CREATE TABLE public.content_suggestions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id text NOT NULL,
  doc_path text NOT NULL,
  anchor text,
  suggestion text NOT NULL,
  rationale text,
  submitted_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open','accepted','rejected','duplicate')),
  reviewed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at timestamptz,
  review_note text
);

GRANT SELECT, INSERT, UPDATE ON public.content_suggestions TO authenticated;
GRANT ALL ON public.content_suggestions TO service_role;

ALTER TABLE public.content_suggestions ENABLE ROW LEVEL SECURITY;

CREATE INDEX content_suggestions_status_submitted_at_idx
  ON public.content_suggestions (status, submitted_at DESC);

CREATE POLICY "authenticated can submit suggestions"
  ON public.content_suggestions FOR INSERT TO authenticated
  WITH CHECK (submitted_by = auth.uid());

CREATE POLICY "authenticated can read suggestions"
  ON public.content_suggestions FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "authenticated can review suggestions"
  ON public.content_suggestions FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.content_suggestions_immutable_fields()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.id IS DISTINCT FROM OLD.id
     OR NEW.doc_id IS DISTINCT FROM OLD.doc_id
     OR NEW.doc_path IS DISTINCT FROM OLD.doc_path
     OR NEW.anchor IS DISTINCT FROM OLD.anchor
     OR NEW.suggestion IS DISTINCT FROM OLD.suggestion
     OR NEW.rationale IS DISTINCT FROM OLD.rationale
     OR NEW.submitted_by IS DISTINCT FROM OLD.submitted_by
     OR NEW.submitted_at IS DISTINCT FROM OLD.submitted_at
  THEN
    RAISE EXCEPTION 'Only review fields (status, reviewed_by, reviewed_at, review_note) may be updated';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER content_suggestions_immutable_fields_trg
  BEFORE UPDATE ON public.content_suggestions
  FOR EACH ROW EXECUTE FUNCTION public.content_suggestions_immutable_fields();