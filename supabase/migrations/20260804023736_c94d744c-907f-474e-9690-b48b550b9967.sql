DROP POLICY "authenticated can review suggestions" ON public.content_suggestions;

CREATE POLICY "authenticated can review suggestions"
  ON public.content_suggestions FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (
    (reviewed_by IS NULL AND status = 'open')
    OR reviewed_by = auth.uid()
  );

REVOKE ALL ON FUNCTION public.content_suggestions_immutable_fields() FROM public, anon, authenticated;
REVOKE ALL ON FUNCTION public.seed_rubric(jsonb) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.seed_rubric(jsonb) TO authenticated;