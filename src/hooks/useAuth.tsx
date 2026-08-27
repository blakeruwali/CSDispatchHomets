import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const ALLOWED_EMAIL_DOMAIN = "hometsair.com";

/**
 * This check is user experience, not security.
 *
 * Signing a non-domain account out here happens in the browser, after Supabase
 * has already issued a real session. The token stays valid, so anyone holding
 * one can reach the API directly without going near this page. The rule is
 * only actually enforced by row-level security keyed on the email claim —
 * `public.is_homets_user()` in the database.
 *
 * Keep the two definitions of the domain in step. If this constant changes,
 * the SQL function has to change with it.
 */

export function isAllowedEmail(email?: string | null) {
  return !!email && email.toLowerCase().endsWith(`@${ALLOWED_EMAIL_DOMAIN}`);
}

/**
 * A rejected sign-in has to survive the redirect that follows it.
 *
 * `useAuth` is called independently by RequireAuth, Auth, DocsLayout,
 * AcknowledgePanel and Checklist, and each call owns its own `useState`. The
 * rejection happens inside whichever component was mounted when the session
 * arrived — normally RequireAuth on a gated route — and the sign-in page then
 * mounts fresh, with its own state, knowing nothing about it.
 *
 * The result was a user completing Google sign-in, being bounced back to
 * /auth, and being told nothing at all. Holding the rejection at module scope
 * and notifying every instance is what makes the reason reach the person it
 * is about.
 */
interface Rejection {
  email: string | null;
}

let rejection: Rejection | null = null;
const listeners = new Set<(r: Rejection | null) => void>();

function setRejection(next: Rejection | null) {
  rejection = next;
  for (const listener of listeners) listener(next);
}

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState<Rejection | null>(rejection);

  useEffect(() => {
    listeners.add(setBlocked);
    return () => { listeners.delete(setBlocked); };
  }, []);

  useEffect(() => {
    const handle = (s: Session | null) => {
      if (s && !isAllowedEmail(s.user.email)) {
        // Keep the address: "that account isn't allowed" is far more useful
        // than "an account isn't allowed" when someone has three Google
        // logins and picked the wrong one.
        setRejection({ email: s.user.email ?? null });
        setSession(null);
        setLoading(false);
        void supabase.auth.signOut();
        return;
      }
      if (s) setRejection(null);
      setSession(s);
      setLoading(false);
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => handle(s));
    supabase.auth.getSession().then(({ data }) => handle(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  return {
    session,
    user: session?.user as User | undefined,
    loading,
    domainBlocked: blocked !== null,
    /** The address that was rejected, when we captured it. */
    blockedEmail: blocked?.email ?? null,
    clearDomainBlocked: () => setRejection(null),
  };
}
