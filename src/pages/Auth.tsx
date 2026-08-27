import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

import { useAuth, ALLOWED_EMAIL_DOMAIN, isAllowedEmail } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function Auth() {
  const { session, loading, domainBlocked, blockedEmail } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from;
  const dest = from && from !== "/auth" ? from : "/checklist";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  // Declared with the other hooks: this used to sit below the early returns,
  // which changed the hook count between renders and crashed the page.
  const [linkSent, setLinkSent] = useState(false);


  // main.tsx routes a failed OAuth round trip back here with the reason
  // attached, rather than bouncing the user to a page they cannot reach.
  useEffect(() => {
    const reason = new URLSearchParams(location.search).get("error");
    if (!reason) return;
    toast({ title: "Sign-in failed", description: reason, variant: "destructive" });
    nav("/auth", { replace: true });
  }, [location.search, nav]);

  if (loading) return null;
  if (session) return <Navigate to={dest} replace />;

  const domainError = () =>
    toast({
      title: "Access restricted",
      description: `Only @${ALLOWED_EMAIL_DOMAIN} accounts can sign in.`,
      variant: "destructive",
    });

  const signInGoogle = async () => {
    setBusy(true);
    // Managed Google runs through the Lovable OAuth broker. Calling Supabase's
    // /authorize directly fails with "missing OAuth secret" because no per-app
    // Google client is configured on the Supabase project.
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}${import.meta.env.BASE_URL}`,
      extraParams: { prompt: "select_account" },
    });
    if (result.error) {
      setBusy(false);
      toast({
        title: "Sign-in failed",
        description: String((result.error as { message?: string }).message ?? result.error),
        variant: "destructive",
      });
      return;
    }
    if (result.redirected) return; // browser is navigating to Google
    nav(dest);
  };



  const signInEmail = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast({ title: "Sign-in failed", description: error.message, variant: "destructive" });
    else nav(dest);
  };

  

  // Magic link: no Google provider setup needed, and first sign-in creates the
  // account — which is how the first users get in at all. The domain rule is
  // enforced before sending (only hometsair.com mailboxes can receive the
  // link) and again in useAuth after the session lands.
  //
  // emailRedirectTo carries BASE_URL for the same reason the Google redirect
  // does: on GitHub Pages the app lives under a sub-path, and returning to the
  // bare origin lands on a 404. main.tsx consumes the token fragment before
  // HashRouter sees it.
  const sendMagicLink = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}${import.meta.env.BASE_URL}` },
    });
    setBusy(false);
    if (error) {
      toast({ title: "Couldn't send link", description: error.message, variant: "destructive" });
      return;
    }
    setLinkSent(true);
    toast({ title: "Check your email", description: `Sign-in link sent to ${email}.` });
  };

  // Password set/reset: emails a recovery link that lands on /reset-password.
  // This is also how magic-link users (who never had a password) set one for
  // the first time.
  const sendPasswordReset = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}#/reset-password`,
    });
    setBusy(false);
    if (error) {
      toast({ title: "Couldn't send link", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Check your email", description: `Password link sent to ${email}.` });
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {domainBlocked && (
            <p className="text-sm text-destructive">
              {blockedEmail ? <><strong>{blockedEmail}</strong> is not a </> : "That account isn't a "}
              @{ALLOWED_EMAIL_DOMAIN} address, so it was signed out. Sign in with your
              Homets account, or ask Blake to have your address added.
            </p>
          )}
          <Button onClick={signInGoogle} disabled={busy} className="w-full">
            Continue with Google
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Only @{ALLOWED_EMAIL_DOMAIN} accounts are allowed.
          </p>
          <div className="pt-2 border-t space-y-3">
            <Input placeholder={`name@${ALLOWED_EMAIL_DOMAIN}`} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && signInEmail()}
            />
            <Button variant="outline" onClick={signInEmail} disabled={busy} className="w-full">
              {busy ? "…" : "Sign in with email"}
            </Button>
            <Button variant="ghost" onClick={sendMagicLink} disabled={busy || linkSent} className="w-full">
              {linkSent ? "Link sent — check your email" : "Email me a sign-in link"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
