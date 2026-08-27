import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

// Recovery landing page. The email link arrives with type=recovery in the URL
// hash; main.tsx has already handed the fragment to Supabase, so we just wait
// for the PASSWORD_RECOVERY event before showing the form. Recovery sessions
// are exempt from the current-password requirement — do NOT send it here.
export default function ResetPassword() {
  const nav = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setReady(true);
    });
    // If the session was already recovered before this component mounted
    // (e.g. main.tsx consumed the fragment early), allow the form too.
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const submit = async () => {
    if (password.length < 8) {
      toast({ title: "Password too short", description: "Use at least 8 characters.", variant: "destructive" });
      return;
    }
    if (password !== confirm) {
      toast({ title: "Passwords don't match", variant: "destructive" });
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) {
      toast({ title: "Couldn't set password", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Password set", description: "You can now sign in with your email and password." });
    nav("/checklist");
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Set your password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {ready ? (
            <>
              <Input
                placeholder="New password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Confirm password"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />
              <Button onClick={submit} disabled={busy} className="w-full">
                {busy ? "…" : "Set password"}
              </Button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              This page only works from a password-reset email link. If you opened it directly,
              go back to sign in and use “Set / reset password”.
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
