import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import { Sparkles, Loader2 } from "lucide-react";

type Rubric = { id: string; slug: string; name: string };
type Category = { id: string; rubric_id: string; name: string; sort_order: number; weight: number };
type Item = {
  id: string;
  category_id: string;
  label: string;
  sort_order: number;
  weight: number;
  item_type: "binary" | "quality";
  max_score: 1 | 2;
  coaching_hints: string | null;
};
type Session = {
  id: string;
  rubric_id: string;
  title: string | null;
  customer_context: string | null;
  ended_at: string | null;
  outcome: string | null;
  outcome_revenue: number | null;
  score_cached: number | null;
  notes: string | null;
};
type ItemState = {
  session_id: string;
  item_id: string;
  score: 0 | 1 | 2 | null;
  reflection: string | null;
};

export default function Checklist() {
  const { session: auth, loading } = useAuth();
  const [rubrics, setRubrics] = useState<Rubric[]>([]);
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [states, setStates] = useState<Record<string, ItemState>>({});
  const [bootstrapping, setBootstrapping] = useState(true);

  // Load rubrics + most recent open session on mount
  useEffect(() => {
    if (!auth) return;
    (async () => {
      const { data: rs } = await supabase.from("rubrics").select("id,slug,name").order("name");
      setRubrics(rs ?? []);
      const { data: open } = await supabase
        .from("sessions")
        .select("*")
        .is("ended_at", null)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (open) await loadSession(open as Session);
      setBootstrapping(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.user.id]);

  const loadSession = async (s: Session) => {
    setActiveSession(s);
    const { data: cats } = await supabase
      .from("rubric_categories")
      .select("*")
      .eq("rubric_id", s.rubric_id)
      .order("sort_order");
    const catList = (cats ?? []) as Category[];
    setCategories(catList);
    const catIds = catList.map((c) => c.id);
    const { data: its } = await supabase
      .from("rubric_items")
      .select("*")
      .in("category_id", catIds.length ? catIds : ["00000000-0000-0000-0000-000000000000"])
      .order("sort_order");
    setItems((its ?? []) as Item[]);
    const { data: st } = await supabase
      .from("session_item_states")
      .select("session_id,item_id,score,reflection")
      .eq("session_id", s.id);
    const map: Record<string, ItemState> = {};
    (st ?? []).forEach((r: any) => (map[r.item_id] = r));
    setStates(map);
  };

  const startSession = async (rubricId: string, title: string, ctx: string) => {
    const { data, error } = await supabase
      .from("sessions")
      .insert({
        owner_id: auth!.user.id,
        rubric_id: rubricId,
        title: title || null,
        customer_context: ctx || null,
      })
      .select("*")
      .single();
    if (error) {
      toast({ title: "Couldn't start session", description: error.message, variant: "destructive" });
      return;
    }
    await loadSession(data as Session);
  };

  if (loading || bootstrapping) {
    return <main className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</main>;
  }
  if (!auth) return <Navigate to="/auth" replace />;

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-sm text-muted-foreground hover:underline">← Home</Link>
          <h1 className="font-semibold">Live Scoring</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-muted-foreground">{auth.user.email}</span>
          <Button variant="ghost" size="sm" onClick={() => supabase.auth.signOut()}>Sign out</Button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-4 md:p-6">
        {!activeSession ? (
          <NewSessionCard rubrics={rubrics} onStart={startSession} />
        ) : (
          <LiveSession
            session={activeSession}
            categories={categories}
            items={items}
            states={states}
            setStates={setStates}
            onFinalize={(updated) => setActiveSession(updated)}
            onClose={() => {
              setActiveSession(null);
              setCategories([]);
              setItems([]);
              setStates({});
            }}
          />
        )}
      </div>
    </main>
  );
}

function NewSessionCard({
  rubrics,
  onStart,
}: {
  rubrics: Rubric[];
  onStart: (rubricId: string, title: string, ctx: string) => void;
}) {
  const [rubricId, setRubricId] = useState<string>("");
  const [title, setTitle] = useState("");
  const [ctx, setCtx] = useState("");

  if (rubrics.length === 0) {
    return (
      <Card>
        <CardHeader><CardTitle>No rubrics yet</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>Seed the rubrics first.</p>
          <Link to="/admin/seed" className="text-primary underline">Go to /admin/seed</Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader><CardTitle>Start a new session</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div>
          <label className="text-sm font-medium">Rubric</label>
          <Select value={rubricId} onValueChange={setRubricId}>
            <SelectTrigger><SelectValue placeholder="Pick rubric" /></SelectTrigger>
            <SelectContent>
              {rubrics.map((r) => <SelectItem key={r.id} value={r.id}>{r.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">Title (optional)</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Smith — boiler estimate" />
        </div>
        <div>
          <label className="text-sm font-medium">Customer context (optional)</label>
          <Textarea value={ctx} onChange={(e) => setCtx(e.target.value)} placeholder="Notes before the call/job…" />
        </div>
        <Button onClick={() => rubricId && onStart(rubricId, title, ctx)} disabled={!rubricId}>
          Start session
        </Button>
      </CardContent>
    </Card>
  );
}

function LiveSession({
  session,
  categories,
  items,
  states,
  setStates,
  onFinalize,
  onClose,
}: {
  session: Session;
  categories: Category[];
  items: Item[];
  states: Record<string, ItemState>;
  setStates: React.Dispatch<React.SetStateAction<Record<string, ItemState>>>;
  onFinalize: (s: Session) => void;
  onClose: () => void;
}) {
  const score = useMemo(() => computeScore(items, states), [items, states]);

  // autosave reflections (debounced per item)
  const saveTimers = useRef<Record<string, number>>({});

  const setScore = async (item: Item, value: 0 | 1 | 2) => {
    const prev = states[item.id];
    const next: ItemState = {
      session_id: session.id,
      item_id: item.id,
      score: prev?.score === value ? null : value,
      reflection: prev?.reflection ?? null,
    };
    setStates({ ...states, [item.id]: next });
    const { error } = await supabase
      .from("session_item_states")
      .upsert(
        {
          session_id: session.id,
          item_id: item.id,
          score: next.score,
          reflection: next.reflection,
          scored_at: new Date().toISOString(),
        },
        { onConflict: "session_id,item_id" },
      );
    if (error) toast({ title: "Save failed", description: error.message, variant: "destructive" });
  };

  const setReflection = (item: Item, text: string) => {
    const next: ItemState = {
      session_id: session.id,
      item_id: item.id,
      score: states[item.id]?.score ?? null,
      reflection: text,
    };
    setStates((s) => ({ ...s, [item.id]: next }));
    if (saveTimers.current[item.id]) window.clearTimeout(saveTimers.current[item.id]);
    saveTimers.current[item.id] = window.setTimeout(async () => {
      await supabase.from("session_item_states").upsert(
        {
          session_id: session.id,
          item_id: item.id,
          score: next.score,
          reflection: next.reflection,
        },
        { onConflict: "session_id,item_id" },
      );
    }, 600);
  };

  const [coachingByItem, setCoachingByItem] = useState<Record<string, string>>({});
  const [coachingOverall, setCoachingOverall] = useState<string>("");
  const [coachLoading, setCoachLoading] = useState<string | "overall" | null>(null);

  const runCoach = async (focusItemId?: string) => {
    setCoachLoading(focusItemId ?? "overall");
    try {
      const { data, error } = await supabase.functions.invoke("ai-coach", {
        body: { session_id: session.id, focus_item_id: focusItemId ?? null },
      });
      if (error) throw error;
      const summary: string = data?.review?.overall_summary ?? "";
      if (focusItemId) setCoachingByItem((s) => ({ ...s, [focusItemId]: summary }));
      else setCoachingOverall(summary);
    } catch (e: any) {
      toast({ title: "Coaching failed", description: e.message ?? String(e), variant: "destructive" });
    } finally {
      setCoachLoading(null);
    }
  };

  const finalize = async (outcome: string, revenue: string) => {
    const rev = revenue ? Number(revenue) : null;
    const { data, error } = await supabase
      .from("sessions")
      .update({
        ended_at: new Date().toISOString(),
        outcome,
        outcome_revenue: rev,
        score_cached: score.pctOverall,
      })
      .eq("id", session.id)
      .select("*")
      .single();
    if (error) {
      toast({ title: "Couldn't finalize", description: error.message, variant: "destructive" });
      return;
    }
    onFinalize(data as Session);
    toast({ title: "Session saved", description: `Final score ${score.pctOverall.toFixed(1)}%` });
  };

  return (
    <div className="grid md:grid-cols-[1fr_280px] gap-6">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{session.title ?? "Session"}</CardTitle>
            {session.customer_context && (
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">{session.customer_context}</p>
            )}
          </CardHeader>
        </Card>

        {categories.map((cat) => (
          <Card key={cat.id}>
            <CardHeader>
              <CardTitle className="text-base">{cat.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.filter((i) => i.category_id === cat.id).map((item) => {
                const st = states[item.id];
                return (
                  <div key={item.id} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {item.label}
                          <span className="text-muted-foreground font-normal ml-2">
                            ({item.item_type === "binary" ? "Y/N" : "0/1/2"} · w{item.weight})
                          </span>
                        </div>
                        {item.coaching_hints && (
                          <div className="text-xs text-muted-foreground mt-1">{item.coaching_hints}</div>
                        )}
                      </div>
                      <ScoreButtons item={item} value={st?.score ?? null} onChange={(v) => setScore(item, v)} />
                    </div>
                    <Textarea
                      className="mt-2 text-sm"
                      placeholder="Reflection / notes…"
                      value={st?.reflection ?? ""}
                      onChange={(e) => setReflection(item, e.target.value)}
                    />
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => runCoach(item.id)}
                        disabled={coachLoading === item.id}
                      >
                        {coachLoading === item.id ? (
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                        ) : (
                          <Sparkles className="h-3 w-3 mr-1" />
                        )}
                        Coach this item
                      </Button>
                    </div>
                    {coachingByItem[item.id] && (
                      <div className="mt-2 rounded-md border bg-muted/40 p-3 text-sm prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown>{coachingByItem[item.id]}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}

        {!session.ended_at && (
          <FinalizeCard onFinalize={finalize} score={score.pctOverall} />
        )}

        {session.ended_at && (
          <Card>
            <CardHeader><CardTitle>Session complete</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>Outcome: <b>{session.outcome ?? "—"}</b></p>
              <p>Score: <b>{(session.score_cached ?? 0).toFixed(1)}%</b></p>
              <Button variant="outline" onClick={onClose}>Start another</Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="md:sticky md:top-4 self-start">
        <Card>
          <CardHeader><CardTitle className="text-base">Live score</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold">{score.pctOverall.toFixed(0)}%</div>
            <Progress value={score.pctOverall} />
            <div className="text-xs text-muted-foreground">
              {score.earned} / {score.possibleAll} pts<br/>
              answered {score.answeredCount}/{score.totalCount}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ScoreButtons({
  item,
  value,
  onChange,
}: {
  item: Item;
  value: 0 | 1 | 2 | null;
  onChange: (v: 0 | 1 | 2) => void;
}) {
  const opts: (0 | 1 | 2)[] = item.item_type === "binary" ? [0, 1] : [0, 1, 2];
  return (
    <div className="flex gap-1">
      {opts.map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={`h-8 w-8 rounded-md border text-sm font-medium transition-colors ${
            value === v
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-accent"
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}

function FinalizeCard({ onFinalize, score }: { onFinalize: (outcome: string, rev: string) => void; score: number }) {
  const [outcome, setOutcome] = useState("");
  const [rev, setRev] = useState("");
  return (
    <Card>
      <CardHeader><CardTitle>Finalize</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div>
          <label className="text-sm font-medium">Outcome</label>
          <Select value={outcome} onValueChange={setOutcome}>
            <SelectTrigger><SelectValue placeholder="Pick outcome" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="closed_best">Closed — Best</SelectItem>
              <SelectItem value="closed_better">Closed — Better</SelectItem>
              <SelectItem value="closed_good">Closed — Good</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
              <SelectItem value="callback">Callback</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium">Revenue (optional)</label>
          <Input type="number" value={rev} onChange={(e) => setRev(e.target.value)} placeholder="0" />
        </div>
        <Button onClick={() => outcome && onFinalize(outcome, rev)} disabled={!outcome}>
          Finalize at {score.toFixed(0)}%
        </Button>
      </CardContent>
    </Card>
  );
}

function computeScore(items: Item[], states: Record<string, any>) {
  let earned = 0;
  let possibleAll = 0;
  let answered = 0;
  for (const item of items) {
    const r = states[item.id]?.score;
    possibleAll += item.weight * item.max_score;
    if (r === 0 || r === 1 || r === 2) {
      answered++;
      earned += item.weight * r;
    }
  }
  const pctOverall = possibleAll > 0 ? (earned / possibleAll) * 100 : 0;
  return {
    earned,
    possibleAll,
    answeredCount: answered,
    totalCount: items.length,
    pctOverall,
  };
}
