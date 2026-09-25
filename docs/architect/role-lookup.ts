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
 * Run `roles-for-email.sql` from this folder first — this function calls it.
 * That SQL is where the assumption about Architect's schema lives (a
 * `user_roles` table with `user_id` and `role`), so if your column names differ
 * you change it there and this file stays as it is.
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
    // One indexed lookup via roles-for-email.sql in this folder, rather than
    // paging through auth.users. listUsers() meant scanning every account on
    // every sign-in and silently stopped finding people past a few thousand.
    const { data, error } = await admin.rpc("roles_for_email", {
      lookup_email: email,
    });

    if (error) {
      console.error("role-lookup: roles_for_email failed", error.message);
      return json({ error: "Lookup failed" }, 500);
    }

    // An address with no account, or an account with no roles, both come back
    // empty. That is not an error — it is a person who has not been set up, and
    // the SOP app renders it as "your role hasn't been set up yet".
    const roles: string[] = [];
    for (const row of (data ?? []) as unknown[]) {
      // The function returns setof text, so each row is a bare string. Guard
      // anyway: this value ends up in an authorization table.
      const role = typeof row === "string" ? row.trim() : "";
      if (role !== "" && roles.indexOf(role) === -1) roles.push(role);
    }

    return json({ roles });
  } catch (err) {
    console.error("role-lookup: unhandled", String(err));
    return json({ error: "Unexpected error" }, 500);
  }
});
