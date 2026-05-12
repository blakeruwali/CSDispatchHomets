import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return json({ error: "Unauthorized" }, 401);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: claimsErr } = await supabase.auth.getClaims(token);
    if (claimsErr || !claims?.claims) return json({ error: "Unauthorized" }, 401);

    const { session_id, focus_item_id } = await req.json();
    if (!session_id) return json({ error: "session_id required" }, 400);

    // Load session, items, states
    const { data: session, error: sErr } = await supabase
      .from("sessions")
      .select("*")
      .eq("id", session_id)
      .single();
    if (sErr || !session) return json({ error: "session not found" }, 404);

    const { data: rubric } = await supabase
      .from("rubrics")
      .select("name,slug")
      .eq("id", session.rubric_id)
      .single();

    const { data: cats } = await supabase
      .from("rubric_categories")
      .select("id,name,sort_order")
      .eq("rubric_id", session.rubric_id)
      .order("sort_order");

    const catIds = (cats ?? []).map((c) => c.id);
    const { data: items } = await supabase
      .from("rubric_items")
      .select("*")
      .in("category_id", catIds.length ? catIds : ["00000000-0000-0000-0000-000000000000"])
      .order("sort_order");

    const { data: states } = await supabase
      .from("session_item_states")
      .select("item_id,score,reflection")
      .eq("session_id", session_id);

    const stateMap = new Map((states ?? []).map((s) => [s.item_id, s]));
    const catMap = new Map((cats ?? []).map((c) => [c.id, c.name]));

    const itemSummaries = (items ?? []).map((it: any) => {
      const st = stateMap.get(it.id);
      return {
        id: it.id,
        category: catMap.get(it.category_id),
        label: it.label,
        type: it.item_type,
        max: it.max_score,
        weight: it.weight,
        coaching: it.coaching_hints,
        score: st?.score ?? null,
        reflection: st?.reflection ?? null,
      };
    });

    const focusItem = focus_item_id
      ? itemSummaries.find((i) => i.id === focus_item_id)
      : null;

    const systemPrompt = `You are an expert sales & dispatch coach for an HVAC/Plumbing company (Homets Services). 
You review a scored call/job session against a rubric and give crisp, actionable coaching.
Always return concise feedback the rep can apply on the very next call.
Tone: direct, specific, supportive. No fluff.`;

    const userPrompt = focusItem
      ? `Rubric: ${rubric?.name}
Customer context: ${session.customer_context ?? "(none)"}
Outcome: ${session.outcome ?? "(in progress)"}

Focus item ONLY:
- Category: ${focusItem.category}
- Item: ${focusItem.label}
- Score: ${focusItem.score ?? "unscored"} / ${focusItem.max}
- Coaching hints: ${focusItem.coaching ?? "(none)"}
- Rep reflection: ${focusItem.reflection ?? "(none)"}

Give 2-4 bullet coaching tips and one example phrase the rep can say next time.`
      : `Rubric: ${rubric?.name}
Customer context: ${session.customer_context ?? "(none)"}
Outcome: ${session.outcome ?? "(in progress)"}

All scored items:
${itemSummaries
  .map(
    (i) =>
      `- [${i.category}] ${i.label} — ${i.score ?? "—"}/${i.max} (w${i.weight})${i.reflection ? ` | note: ${i.reflection}` : ""}`,
  )
  .join("\n")}

Return:
1. **Overall summary** (2-3 sentences)
2. **Top 3 wins**
3. **Top 3 gaps to fix next call** — each with one concrete phrase or action.
Use markdown.`;

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) return json({ error: "LOVABLE_API_KEY missing" }, 500);

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!aiResp.ok) {
      if (aiResp.status === 429) return json({ error: "Rate limited, try again shortly." }, 429);
      if (aiResp.status === 402) return json({ error: "AI credits exhausted. Add funds in Settings → Workspace → Usage." }, 402);
      const t = await aiResp.text();
      console.error("AI gateway error", aiResp.status, t);
      return json({ error: "AI gateway error" }, 500);
    }

    const aiJson = await aiResp.json();
    const summary: string = aiJson.choices?.[0]?.message?.content ?? "";
    const usage = aiJson.usage ?? {};

    const { data: review, error: revErr } = await supabase
      .from("session_ai_reviews")
      .insert({
        session_id,
        focus_item_id: focus_item_id ?? null,
        per_item_feedback: focusItem ? { item: focusItem } : { items: itemSummaries },
        overall_summary: summary,
        model_used: "google/gemini-3-flash-preview",
        prompt_tokens: usage.prompt_tokens ?? null,
        completion_tokens: usage.completion_tokens ?? null,
      })
      .select("*")
      .single();

    if (revErr) {
      console.error("insert review failed", revErr);
      return json({ error: revErr.message, summary }, 500);
    }

    return json({ review });
  } catch (e) {
    console.error("ai-coach error", e);
    return json({ error: e instanceof Error ? e.message : "unknown" }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
