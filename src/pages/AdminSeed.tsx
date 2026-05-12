import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allRubrics } from "@/lib/rubric-seed";
import { toast } from "@/hooks/use-toast";

type SeedResult = { rubric_id: string; slug: string; categories: number; items: number };

export default function AdminSeed() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [results, setResults] = useState<SeedResult[]>([]);
  const [counts, setCounts] = useState<{ rubrics: number; categories: number; items: number } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUserEmail(data.session?.user.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setUserEmail(session?.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const refreshCounts = async () => {
    const [r, c, i] = await Promise.all([
      supabase.from("rubrics").select("id", { count: "exact", head: true }),
      supabase.from("rubric_categories").select("id", { count: "exact", head: true }),
      supabase.from("rubric_items").select("id", { count: "exact", head: true }),
    ]);
    setCounts({ rubrics: r.count ?? 0, categories: c.count ?? 0, items: i.count ?? 0 });
  };

  useEffect(() => {
    if (userEmail) refreshCounts();
  }, [userEmail]);

  const signIn = async () => {
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast({ title: "Sign-in failed", description: error.message, variant: "destructive" });
  };

  const signUp = async () => {
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}` },
    });
    setBusy(false);
    if (error) toast({ title: "Sign-up failed", description: error.message, variant: "destructive" });
    else toast({ title: "Check your email to confirm." });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setResults([]);
    setCounts(null);
  };

  const runSeed = async () => {
    setBusy(true);
    const out: SeedResult[] = [];
    try {
      for (const r of allRubrics) {
        const { data, error } = await supabase.rpc("seed_rubric", { payload: r as any });
        if (error) throw error;
        out.push(data as SeedResult);
      }
      setResults(out);
      await refreshCounts();
      toast({ title: "Seed complete", description: out.map((o) => `${o.slug}: ${o.items} items`).join(" · ") });
    } catch (e: any) {
      toast({ title: "Seed failed", description: e.message ?? String(e), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-2xl font-bold">Admin · Seed Rubrics</h1>

        {!userEmail ? (
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex gap-2">
                <Button onClick={signIn} disabled={busy}>Sign in</Button>
                <Button variant="outline" onClick={signUp} disabled={busy}>Sign up</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Solo-use bootstrap. A real auth flow lands in Phase 2.
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Signed in as {userEmail}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={runSeed} disabled={busy}>
                  {busy ? "Seeding…" : "Seed / re-seed both rubrics"}
                </Button>
                <Button variant="ghost" onClick={signOut}>Sign out</Button>
              </CardContent>
            </Card>

            {counts && (
              <Card>
                <CardHeader>
                  <CardTitle>Database counts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm">
                    <li>rubrics: {counts.rubrics}</li>
                    <li>rubric_categories: {counts.categories}</li>
                    <li>rubric_items: {counts.items}</li>
                  </ul>
                </CardContent>
              </Card>
            )}

            {results.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Last seed result</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs">{JSON.stringify(results, null, 2)}</pre>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </main>
  );
}
