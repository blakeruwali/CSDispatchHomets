CREATE TABLE public.document_acknowledgements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id text NOT NULL,
  doc_path text NOT NULL,
  doc_title text NOT NULL,
  doc_version text NOT NULL,
  statement text NOT NULL,
  acknowledged_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
  acknowledged_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (doc_id, doc_version, acknowledged_by)
);

CREATE INDEX document_acknowledgements_doc_idx
  ON public.document_acknowledgements (doc_id, doc_version);

GRANT SELECT, INSERT ON public.document_acknowledgements TO authenticated;
GRANT ALL ON public.document_acknowledgements TO service_role;

ALTER TABLE public.document_acknowledgements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "authenticated can acknowledge as themselves"
  ON public.document_acknowledgements
  FOR INSERT TO authenticated
  WITH CHECK (acknowledged_by = auth.uid());

CREATE POLICY "authenticated can read acknowledgements"
  ON public.document_acknowledgements
  FOR SELECT TO authenticated
  USING (true);