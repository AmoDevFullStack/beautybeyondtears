
-- Tighten activity_log insert policy
DROP POLICY IF EXISTS "Anyone can insert activity" ON public.activity_log;
CREATE POLICY "Anon and own-user inserts" ON public.activity_log
  FOR INSERT TO anon, authenticated
  WITH CHECK (user_id IS NULL OR user_id = auth.uid());

-- Lock down trigger-only functions
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
