DROP FUNCTION IF EXISTS public.seed_rubric(jsonb);
COMMENT ON TABLE public.rubrics IS 'DEPRECATED: scoring and rubrics removed from the app';
COMMENT ON TABLE public.rubric_categories IS 'DEPRECATED: scoring and rubrics removed from the app';
COMMENT ON TABLE public.rubric_items IS 'DEPRECATED: scoring and rubrics removed from the app';
COMMENT ON TABLE public.sessions IS 'DEPRECATED: scoring and rubrics removed from the app';
COMMENT ON TABLE public.session_item_states IS 'DEPRECATED: scoring and rubrics removed from the app';
COMMENT ON TABLE public.session_ai_reviews IS 'DEPRECATED: scoring and rubrics removed from the app';