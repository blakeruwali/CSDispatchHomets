/**
 * sync-my-role — copy the caller's roles from Architect into staff_roles.
 *
 * The browser cannot do this itself, for two reasons. The shared secret that
 * authenticates us to Architect would be readable in the bundle, and a client
 * that reports its own roles is a client that can claim to be an admin.
 *
 * So the email is taken from the verified JWT and never from the request body.
 * That is the whole security argument: a caller can only ever sync themselves,
 * because the only address this function will look up is the one Supabase
 * signed.
 *
 * Roles are replaced rather than merged. A role removed in Architect has to
 * disappear here on the next sync, or revoking access would never take effect.
 */

import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ALLOWED_EMAIL_DOMAIN = "hometsair.com";

/** Architect can be slow to cold-start; it should not hang a sign-in. */
const LOOKUP_TIMEOUT_MS = 8000;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return json({ error: "Unauthorized" }, 401);
    }

    const anon = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: claimsErr } = await anon.auth.getClaims(token);
    if (claimsErr || !claims?.claims) return json({ error: "Unauthorized" }, 401);

    const userId = claims.claims.sub as string;
    const email = (claims.claims.email as string | undefined) ?? "";

    if (!userId || !email) return json({ error: "Unauthorized" }, 401);

    // The same rule the browser applies, applied again where it cannot be
    // bypassed. A token for an outside address gets no roles at all.
    if (!email.toLowerCase().endsWith(`@${ALLOWED_EMAIL_DOMAIN}`)) {
      return json({ error: "Forbidden" }, 403);
    }

    const lookupUrl = Deno.env.get("ARCHITECT_ROLE_API_URL");
    const lookupKey = Deno.env.get("ARCHITECT_ROLE_API_KEY");
    if (!lookupUrl || !lookupKey) {
      // Not an error for the caller: the feature simply is not wired up yet.
      // Answered as 200 with a flag the app can act on, because the difference
      // between "not configured" and "configured, and you have no roles" is the
      // difference between showing everyone everything and locking everyone
      // out. A 503 here would be indistinguishable from an outage.
      console.error("sync-my-role: ARCHITECT_ROLE_API_URL or _KEY is not set");
      return json({ not_configured: true, roles: [] });
    }

    // --- ask Architect ------------------------------------------------------

    let roles: string[] = [];
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);
    try {
      const res = await fetch(lookupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-role-api-key": lookupKey,
        },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        // Never echo the response body to the caller — it is another system's
        // output and could carry anything.
        console.error("sync-my-role: Architect returned", res.status, detail.slice(0, 500));
        return json({ error: "Role lookup failed" }, 502);
      }

      const payload = await res.json().catch(() => null);
      const raw = payload && Array.isArray(payload.roles) ? payload.roles : [];
      // Accept only plain strings, bounded, de-duplicated. This is data from
      // another system and it lands in our authorization table.
      const seen = new Set<string>();
      for (const item of raw) {
        if (typeof item !== "string") continue;
        const role = item.trim().slice(0, 64);
        if (role === "" || seen.has(role)) continue;
        seen.add(role);
        if (seen.size >= 32) break;
      }
      roles = Array.from(seen);
    } catch (err) {
      clearTimeout(timer);
      const aborted = err instanceof DOMException && err.name === "AbortError";
      console.error("sync-my-role: lookup error", aborted ? "timeout" : String(err));
      return json({ error: aborted ? "Role lookup timed out" : "Role lookup failed" }, 504);
    }
    clearTimeout(timer);

    // --- write the result --------------------------------------------------

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );

    // Replace, do not merge. Delete first so a role dropped in Architect is
    // dropped here; if the insert then fails the person has no roles, which is
    // the safe direction for an authorization table to fail in.
    const { error: delErr } = await admin
      .from("staff_roles")
      .delete()
      .eq("user_id", userId);
    if (delErr) {
      console.error("sync-my-role: delete failed", delErr.message);
      return json({ error: "Could not write roles" }, 500);
    }

    if (roles.length > 0) {
      const rows = roles.map((role) => ({
        user_id: userId,
        role,
        synced_at: new Date().toISOString(),
      }));
      const { error: insErr } = await admin.from("staff_roles").insert(rows);
      if (insErr) {
        console.error("sync-my-role: insert failed", insErr.message);
        return json({ error: "Could not write roles" }, 500);
      }
    }

    return json({ roles, synced_at: new Date().toISOString() });
  } catch (err) {
    console.error("sync-my-role: unhandled", String(err));
    return json({ error: "Unexpected error" }, 500);
  }
});
