import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth, ALLOWED_EMAIL_DOMAIN, isAllowedEmail } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export default function Auth() {
  const { session, loading, domainBlocked } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  if (loading) return null;
  if (session) return <Navigate to="/checklist" replace />;

  const domainError = () =>
    toast({
      title: "Access restricted",
      description: `Only @${ALLOWED_EMAIL_DOMAIN} accounts can sign in.`,
      variant: "destructive",
    });

  const signInGoogle = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
      extraParams: { hd: ALLOWED_EMAIL_DOMAIN, prompt: "select_account" },
    });
    if (result.error) {
      setBusy(false);
      toast({ title: "Sign-in failed", description: String(result.error), variant: "destructive" });
      return;
    }
    if (result.redirected) return;
    setBusy(false);
    nav("/checklist");
  };

  const signInEmail = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast({ title: "Sign-in failed", description: error.message, variant: "destructive" });
    else nav("/checklist");
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
              That account isn't a @{ALLOWED_EMAIL_DOMAIN} address, so it was signed out.
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
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
