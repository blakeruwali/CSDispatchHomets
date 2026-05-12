import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Rubric,
  ChecklistItem,
  SessionState,
  uid,
  loadRubrics,
  saveRubrics,
  loadSessions,
  saveSessions,
  loadActiveSession,
  saveActiveSession,
  computeScore,
} from "@/lib/checklistStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, Play, Square, Check, X, MinusCircle, ArrowLeft, Copy } from "lucide-react";
import { toast } from "sonner";

const blankRubric = (): Rubric => ({
  id: uid(),
  name: "New Rubric",
  type: "sales",
  passThreshold: 80,
  items: [],
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

const blankItem = (): ChecklistItem => ({
  id: uid(),
  label: "",
  weight: 5,
  category: "",
  critical: false,
});

export default function Checklist() {
  const [rubrics, setRubrics] = useState<Rubric[]>([]);
  const [sessions, setSessions] = useState<SessionState[]>([]);
  const [active, setActive] = useState<SessionState | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tab, setTab] = useState<string>("live");

  useEffect(() => {
    setRubrics(loadRubrics());
    setSessions(loadSessions());
    setActive(loadActiveSession());
  }, []);

  useEffect(() => saveRubrics(rubrics), [rubrics]);
  useEffect(() => saveSessions(sessions), [sessions]);
  useEffect(() => saveActiveSession(active), [active]);

  const editing = useMemo(() => rubrics.find((r) => r.id === editingId) || null, [rubrics, editingId]);
  const activeRubric = useMemo(
    () => (active ? rubrics.find((r) => r.id === active.rubricId) : null),
    [rubrics, active]
  );

  const updateRubric = (id: string, patch: Partial<Rubric>) => {
    setRubrics((rs) =>
      rs.map((r) => (r.id === id ? { ...r, ...patch, updatedAt: Date.now() } : r))
    );
  };

  const updateItem = (rubricId: string, itemId: string, patch: Partial<ChecklistItem>) => {
    setRubrics((rs) =>
      rs.map((r) =>
        r.id === rubricId
          ? {
              ...r,
              updatedAt: Date.now(),
              items: r.items.map((i) => (i.id === itemId ? { ...i, ...patch } : i)),
            }
          : r
      )
    );
  };

  const startSession = (rubric: Rubric) => {
    if (rubric.items.length === 0) {
      toast.error("Add at least one checklist item before starting");
      return;
    }
    if (active && !confirm("End current session and start a new one?")) return;
    if (active) endSession(false);
    const s: SessionState = {
      id: uid(),
      rubricId: rubric.id,
      rubricName: rubric.name,
      startedAt: Date.now(),
      responses: {},
      itemNotes: {},
    };
    setActive(s);
    setTab("live");
    toast.success(`Started: ${rubric.name}`);
  };

  const endSession = (notify = true) => {
    if (!active) return;
    const ended: SessionState = { ...active, endedAt: Date.now() };
    setSessions((ss) => [ended, ...ss]);
    setActive(null);
    if (notify) toast.success("Session saved to history");
  };

  const respond = (itemId: string, value: 1 | 0 | -1) => {
    if (!active) return;
    setActive({
      ...active,
      responses: { ...active.responses, [itemId]: value },
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="font-display text-2xl font-bold tracking-tight">
              Live Close-Rate Scoring
            </h1>
          </div>
          {active && (
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Live: {active.rubricName}</span>
            </div>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="live">Live Session</TabsTrigger>
            <TabsTrigger value="rubrics">Rubrics</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* LIVE */}
          <TabsContent value="live" className="mt-6">
            {!active ? (
              <Card>
                <CardHeader>
                  <CardTitle>Start a session</CardTitle>
                </CardHeader>
                <CardContent>
                  {rubrics.length === 0 ? (
                    <div className="text-muted-foreground">
                      No rubrics yet. Create one in the <button className="text-primary underline" onClick={() => setTab("rubrics")}>Rubrics</button> tab.
                    </div>
                  ) : (
                    <div className="grid gap-3 md:grid-cols-2">
                      {rubrics.map((r) => (
                        <Card key={r.id} className="border-border">
                          <CardContent className="flex items-center justify-between p-4">
                            <div>
                              <div className="font-semibold">{r.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {r.type} · {r.items.length} items · pass ≥ {r.passThreshold}%
                              </div>
                            </div>
                            <Button onClick={() => startSession(r)} size="sm">
                              <Play className="mr-1 h-4 w-4" /> Start
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <LiveSession
                session={active}
                rubric={activeRubric!}
                onRespond={respond}
                onNote={(itemId, note) =>
                  setActive({ ...active, itemNotes: { ...active.itemNotes, [itemId]: note } })
                }
                onMeta={(patch) => setActive({ ...active, ...patch })}
                onEnd={() => endSession(true)}
              />
            )}
          </TabsContent>

          {/* RUBRICS */}
          <TabsContent value="rubrics" className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your Rubrics</h2>
              <Button
                onClick={() => {
                  const r = blankRubric();
                  setRubrics((rs) => [r, ...rs]);
                  setEditingId(r.id);
                }}
              >
                <Plus className="mr-1 h-4 w-4" /> New Rubric
              </Button>
            </div>

            {rubrics.length === 0 && (
              <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
                No rubrics yet — create your first one to start scoring.
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              {rubrics.map((r) => (
                <Card
                  key={r.id}
                  className={`cursor-pointer transition ${
                    editingId === r.id ? "border-primary" : ""
                  }`}
                  onClick={() => setEditingId(r.id)}
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {r.items.length} items · {r.type}
                      </div>
                    </div>
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          const copy: Rubric = {
                            ...r,
                            id: uid(),
                            name: `${r.name} (copy)`,
                            items: r.items.map((i) => ({ ...i, id: uid() })),
                            createdAt: Date.now(),
                            updatedAt: Date.now(),
                          };
                          setRubrics((rs) => [copy, ...rs]);
                        }}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" onClick={() => startSession(r)}>
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm(`Delete "${r.name}"?`)) {
                            setRubrics((rs) => rs.filter((x) => x.id !== r.id));
                            if (editingId === r.id) setEditingId(null);
                          }
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {editing && (
              <RubricEditor
                rubric={editing}
                onChange={(patch) => updateRubric(editing.id, patch)}
                onItemChange={(itemId, patch) => updateItem(editing.id, itemId, patch)}
                onAddItem={() =>
                  updateRubric(editing.id, { items: [...editing.items, blankItem()] })
                }
                onRemoveItem={(itemId) =>
                  updateRubric(editing.id, {
                    items: editing.items.filter((i) => i.id !== itemId),
                  })
                }
              />
            )}
          </TabsContent>

          {/* HISTORY */}
          <TabsContent value="history" className="mt-6">
            {sessions.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
                No completed sessions yet.
              </div>
            ) : (
              <div className="space-y-3">
                {sessions.map((s) => {
                  const rb = rubrics.find((r) => r.id === s.rubricId);
                  if (!rb) {
                    return (
                      <Card key={s.id}>
                        <CardContent className="p-4 text-sm text-muted-foreground">
                          {s.rubricName} (rubric deleted) ·{" "}
                          {new Date(s.startedAt).toLocaleString()}
                        </CardContent>
                      </Card>
                    );
                  }
                  const sc = computeScore(rb, s);
                  return (
                    <Card key={s.id}>
                      <CardContent className="flex items-center justify-between p-4">
                        <div>
                          <div className="font-semibold">{s.rubricName}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(s.startedAt).toLocaleString()}
                            {s.customer ? ` · ${s.customer}` : ""}
                            {s.rep ? ` · ${s.rep}` : ""}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={sc.passed ? "default" : "destructive"}>
                            {sc.passed ? "PASS" : "FAIL"}
                          </Badge>
                          <span className="text-2xl font-bold">{Math.round(sc.pctOverall)}%</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              if (confirm("Delete this session?"))
                                setSessions((ss) => ss.filter((x) => x.id !== s.id));
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

/* ----------------------------------------------------------- */

function RubricEditor({
  rubric,
  onChange,
  onItemChange,
  onAddItem,
  onRemoveItem,
}: {
  rubric: Rubric;
  onChange: (patch: Partial<Rubric>) => void;
  onItemChange: (itemId: string, patch: Partial<ChecklistItem>) => void;
  onAddItem: () => void;
  onRemoveItem: (itemId: string) => void;
}) {
  return (
    <Card className="border-primary/40">
      <CardHeader>
        <CardTitle>Edit Rubric</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="md:col-span-2">
            <Label>Name</Label>
            <Input value={rubric.name} onChange={(e) => onChange({ name: e.target.value })} />
          </div>
          <div>
            <Label>Type</Label>
            <Select value={rubric.type} onValueChange={(v: any) => onChange({ type: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="dispatch">Dispatch</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Pass Threshold (%)</Label>
            <Input
              type="number"
              min={0}
              max={100}
              value={rubric.passThreshold}
              onChange={(e) => onChange({ passThreshold: Number(e.target.value) })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Checklist Items</Label>
            <Button size="sm" onClick={onAddItem}>
              <Plus className="mr-1 h-4 w-4" /> Add Item
            </Button>
          </div>
          {rubric.items.length === 0 && (
            <div className="rounded border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
              No items yet. Click "Add Item" to build your checklist.
            </div>
          )}
          {rubric.items.map((item, idx) => (
            <div key={item.id} className="grid gap-2 rounded-lg border border-border p-3 md:grid-cols-12">
              <div className="md:col-span-5">
                <Label className="text-xs">#{idx + 1} Item</Label>
                <Input
                  value={item.label}
                  placeholder="e.g. Confirmed budget with decision-maker"
                  onChange={(e) => onItemChange(item.id, { label: e.target.value })}
                />
              </div>
              <div className="md:col-span-3">
                <Label className="text-xs">Category</Label>
                <Input
                  value={item.category || ""}
                  placeholder="e.g. Discovery"
                  onChange={(e) => onItemChange(item.id, { category: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <Label className="text-xs">Weight</Label>
                <Input
                  type="number"
                  min={0}
                  value={item.weight}
                  onChange={(e) => onItemChange(item.id, { weight: Number(e.target.value) })}
                />
              </div>
              <div className="flex items-end gap-2 md:col-span-2">
                <label className="flex items-center gap-2 text-xs">
                  <Checkbox
                    checked={!!item.critical}
                    onCheckedChange={(v) => onItemChange(item.id, { critical: !!v })}
                  />
                  Critical
                </label>
                <Button size="sm" variant="ghost" onClick={() => onRemoveItem(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

/* ----------------------------------------------------------- */

function LiveSession({
  session,
  rubric,
  onRespond,
  onNote,
  onMeta,
  onEnd,
}: {
  session: SessionState;
  rubric: Rubric;
  onRespond: (itemId: string, v: 1 | 0 | -1) => void;
  onNote: (itemId: string, note: string) => void;
  onMeta: (patch: Partial<SessionState>) => void;
  onEnd: () => void;
}) {
  const score = computeScore(rubric, session);
  const grouped = useMemo(() => {
    const map = new Map<string, ChecklistItem[]>();
    rubric.items.forEach((i) => {
      const k = i.category?.trim() || "General";
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(i);
    });
    return Array.from(map.entries());
  }, [rubric]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <Card>
          <CardContent className="grid gap-3 p-4 md:grid-cols-2">
            <div>
              <Label>Customer</Label>
              <Input
                value={session.customer || ""}
                onChange={(e) => onMeta({ customer: e.target.value })}
                placeholder="Customer name"
              />
            </div>
            <div>
              <Label>Rep / Tech</Label>
              <Input
                value={session.rep || ""}
                onChange={(e) => onMeta({ rep: e.target.value })}
                placeholder="Who's running this call"
              />
            </div>
          </CardContent>
        </Card>

        {grouped.map(([cat, items]) => (
          <Card key={cat}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base uppercase tracking-wide text-muted-foreground">
                {cat}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {items.map((item) => {
                const r = session.responses[item.id];
                return (
                  <div
                    key={item.id}
                    className={`rounded-lg border p-3 transition ${
                      r === 1
                        ? "border-green-500/50 bg-green-500/5"
                        : r === 0
                          ? "border-destructive/50 bg-destructive/5"
                          : r === -1
                            ? "border-muted bg-muted/30"
                            : "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="font-medium">
                          {item.label || <span className="italic text-muted-foreground">Untitled item</span>}
                          {item.critical && (
                            <Badge variant="destructive" className="ml-2 text-[10px]">CRITICAL</Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.weight} pts</div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant={r === 1 ? "default" : "outline"}
                          onClick={() => onRespond(item.id, 1)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant={r === 0 ? "destructive" : "outline"}
                          onClick={() => onRespond(item.id, 0)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant={r === -1 ? "secondary" : "outline"}
                          onClick={() => onRespond(item.id, -1)}
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {r !== undefined && (
                      <Textarea
                        className="mt-2 h-16"
                        placeholder="Quick note (optional)"
                        value={session.itemNotes[item.id] || ""}
                        onChange={(e) => onNote(item.id, e.target.value)}
                      />
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SCORE PANEL */}
      <div className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
        <Card className="border-primary/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
              Live Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-5xl font-bold">{Math.round(score.pctOverall)}%</span>
                <Badge variant={score.passed ? "default" : score.criticalFailed ? "destructive" : "secondary"}>
                  {score.criticalFailed ? "CRITICAL FAIL" : score.passed ? "ON TRACK" : "BUILDING"}
                </Badge>
              </div>
              <Progress value={score.pctOverall} className="mt-2" />
              <div className="mt-1 text-xs text-muted-foreground">
                Pass threshold: {rubric.passThreshold}%
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded bg-green-500/10 p-2">
                <div className="text-lg font-bold text-green-500">{score.yesCount}</div>
                <div className="text-muted-foreground">Yes</div>
              </div>
              <div className="rounded bg-destructive/10 p-2">
                <div className="text-lg font-bold text-destructive">{score.noCount}</div>
                <div className="text-muted-foreground">No</div>
              </div>
              <div className="rounded bg-muted p-2">
                <div className="text-lg font-bold">{score.naCount}</div>
                <div className="text-muted-foreground">N/A</div>
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              {score.answeredCount} / {score.totalCount} answered · {score.earned} of {score.possibleAll} pts
            </div>

            <Button variant="destructive" className="w-full" onClick={onEnd}>
              <Square className="mr-2 h-4 w-4" /> End & Save
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Session Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="h-32"
              placeholder="Overall notes, objections, next steps..."
              value={session.generalNotes || ""}
              onChange={(e) => onMeta({ generalNotes: e.target.value })}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
