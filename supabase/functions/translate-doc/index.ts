/**
 * Translates a governed SOP document into another language on demand.
 *
 * The English markdown in content/**\/*.md stays the single source of truth;
 * this function only produces a reading aid. Anything it returns is cached by
 * the client against the document's version, so a translation can never
 * outlive the clause it was made from.
 */

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LANGUAGES: Record<string, string> = {
  es: "Latin American Spanish, as spoken by HVAC and plumbing field technicians in the New York metro area",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);

    const { markdown, title, target } = await req.json();
    if (!markdown || typeof markdown !== "string") {
      return json({ error: "markdown required" }, 400);
    }
    if (markdown.length > 40000) return json({ error: "document too large" }, 413);

    const language = LANGUAGES[target ?? "es"];
    if (!language) return json({ error: "unsupported target language" }, 400);

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "AI gateway not configured" }, 500);

    const system = [
      "You translate internal standard operating procedures for Home+s Air & Heat,",
      `a residential and commercial HVAC and plumbing company. Translate into ${language}.`,
      "",
      "Rules:",
      "- Return ONLY the translated markdown. No preamble, no code fences around the whole document.",
      "- Preserve every markdown structure exactly: headings, heading anchors like {#steps},",
      "  tables, lists, blockquotes, bold, and inline code spans.",
      "- Never translate text inside inline code spans (document ids such as `sop.csm.greeting`).",
      "- Never translate or convert prices, dollar amounts, times, phone numbers, or SLAs.",
      "- Keep product and brand names in English: Home+s Air & Heat, Home+, Business+,",
      "  ServiceTitan, Google LSA, Posh, Angi, Thumbtack, Yelp.",
      "- Verbatim customer-facing scripts inside blockquotes: give the natural Spanish a",
      "  technician would actually say, and keep the company name in English.",
      "- Plain, direct, respectful register (usted). Write for a working technician, not a lawyer.",
    ].join("\n");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        messages: [
          { role: "system", content: system },
          {
            role: "user",
            content: `Document title: ${title ?? "(untitled)"}\n\n---\n\n${markdown}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error(`AI gateway failed [${response.status}]: ${details}`);
      return json({ error: "Translation failed", status: response.status, details }, response.status);
    }

    const data = await response.json();
    const translated: string | undefined = data?.choices?.[0]?.message?.content;
    if (!translated) return json({ error: "Empty translation" }, 502);

    return json({ markdown: translated.trim() }, 200);
  } catch (error) {
    console.error("translate-doc error:", error);
    return json({ error: String(error) }, 500);
  }
});

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
