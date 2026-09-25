/**
 * role-lookup — PASTE THIS INTO THE ARCHITECT PROJECT, NOT THIS ONE.
 *
 * This file is documentation. It lives here so the two halves of the feature
 * can be reviewed together, and it is not deployed by this repository — there
 * is no supabase/functions/role-lookup directory here on purpose.
 *
 * In Architect, create an edge function named `role-lookup` with this body and
 * set one secret on that project:
 *
 *   ARCHITECT_ROLE_API_KEY   the same random value set in the SOP app
 *
 * It answers one question: "what roles does this email have?" It is called
 * only by the SOP app's `sync-my-role` function, server to server, and it is
 * authenticated by the shared secret rather than by a user session — the
 * caller is a backend, not a person.
 *
 * ASSUMPTION TO CHECK BEFORE PASTING: that Architect stores roles in a table
 * named `user_roles` with a `user_id` column referencing auth.users and a
 * `role` column. If the table or columns are named differently, change the
 * query below and nothing else.
 */

import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type, x-role-api-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

/**
 * Compare without leaking length or position through timing. Overkill for a
 * shared secret behind TLS, and cheap enough that there is no reason not to.
 */
function secretsMatch(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const expected = Deno.env.get("ARCHITECT_ROLE_API_KEY");
  if (!expected) {
    console.error("role-lookup: ARCHITECT_ROLE_API_KEY is not set");
    return json({ error: "Not configured" }, 503);
  }

  const presented = req.headers.get("x-role-api-key") ?? "";
  if (!secretsMatch(presented, expected)) {
    // Deliberately not "wrong key" — an unauthenticated caller learns nothing
    // about whether the header name or the value was the problem.
    return json({ error: "Unauthorized" }, 401);
  }

  let email = "";
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return json({ error: "Bad request" }, 400);
  }
  if (email === "" || email.length > 320 || !email.includes("@")) {
    return json({ error: "Bad request" }, 400);
  }

  // IMPORTANT: this function trusts its caller completely, because the caller
  // is a backend holding the shared secret. It is the SOP app's job to ensure
  // the email it sends is one it verified from a signed JWT. Do not add a
  // browser-callable path to this function.
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );

  try {
    // Find the account by email. listUsers is paginated, so filter server-side
    // where the SDK allows it and fall back to scanning the first pages.
    let userId: string | null = null;
    for (let page = 1; page <= 10 && !userId; page += 1) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
      if (error) {
        console.error("role-lookup: listUsers failed", error.message);
        return json({ error: "Lookup failed" }, 500);
      }
      const users = data?.users ?? [];
      for (const u of users) {
        if ((u.email ?? "").toLowerCase() === email) {
          userId = u.id;
          break;
        }
      }
      if (users.length < 200) break; // last page
    }

    // An address with no account is not an error — it is a person who has not
    // signed into Architect. Empty roles is the correct answer, and the SOP app
    // renders it as "your role hasn't been set up yet".
    if (!userId) return json({ roles: [] });

    const { data: rows, error: rolesErr } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", userId);

    if (rolesErr) {
      console.error("role-lookup: user_roles query failed", rolesErr.message);
      return json({ error: "Lookup failed" }, 500);
    }

    const roles: string[] = [];
    for (const row of rows ?? []) {
      const role = typeof row?.role === "string" ? row.role.trim() : "";
      if (role !== "" && roles.indexOf(role) === -1) roles.push(role);
    }

    return json({ roles });
  } catch (err) {
    console.error("role-lookup: unhandled", String(err));
    return json({ error: "Unexpected error" }, 500);
  }
});
