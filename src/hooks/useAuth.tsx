import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const ALLOWED_EMAIL_DOMAIN = "hometsair.com";

export function isAllowedEmail(email?: string | null) {
  return !!email && email.toLowerCase().endsWith(`@${ALLOWED_EMAIL_DOMAIN}`);
}

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [domainBlocked, setDomainBlocked] = useState(false);

  useEffect(() => {
    const handle = (s: Session | null) => {
      if (s && !isAllowedEmail(s.user.email)) {
        setDomainBlocked(true);
        setSession(null);
        setLoading(false);
        void supabase.auth.signOut();
        return;
      }
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
    domainBlocked,
    clearDomainBlocked: () => setDomainBlocked(false),
  };
}
