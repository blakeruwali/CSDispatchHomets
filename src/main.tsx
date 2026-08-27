import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { supabase } from "./integrations/supabase/client";
import { returnOriginFor } from "./lib/oauthHandoff";

/**
 * OAuth returns to the site with the result in the URL fragment. Because this
 * app uses HashRouter, that fragment would otherwise be read as a route and
 * dump the user on the 404 page. Consume it here, set the session, then hand
 * control back to the router.
 *
 * Supabase is configured for the implicit flow, so a success carries
 * `access_token`, and a failure carries `error_description` — a blocked
 * account, a cancelled consent screen, a misconfigured redirect. Both have to
 * be handled: sending a failed sign-in to the checklist produces a redirect
 * loop back to /auth with nothing explaining why.
 *
 * Google sign-in that began on the company domain lands here on the Lovable
 * host, because that is the only origin the broker accepts. The session would
 * otherwise be written to this origin's localStorage, which the company
 * domain cannot read — the user ends up signed in on a site they never asked
 * for. So when `state` names an allowed return origin, forward the fragment
 * there instead and let that origin establish the session.
 */
async function consumeOAuthFragment() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw.includes("access_token") && !raw.includes("error_description")) return;

  const params = new URLSearchParams(raw);
  const access_token = params.get("access_token");
  const refresh_token = params.get("refresh_token");
  const errorDescription = params.get("error_description");

  // Hand the result back to the origin the user actually started from. Guarded
  // by an allowlist in oauthHandoff — forwarding tokens to a caller-supplied
  // origin would be an open redirect that leaks credentials.
  const returnOrigin = returnOriginFor(params.get("state"));
  if (returnOrigin && returnOrigin !== window.location.origin) {
    // `replace`, so the tokens do not sit in this origin's history entry.
    window.location.replace(`${returnOrigin}/#${raw}`);
    // Stop here: the browser is navigating away and nothing else should run.
    await new Promise(() => {});
    return;
  }

  if (access_token && refresh_token) {
    await supabase.auth.setSession({ access_token, refresh_token });
    window.location.hash = "#/checklist";
    return;
  }

  // Back to the sign-in page, carrying the reason so it can be shown.
  const reason = errorDescription ? `?error=${encodeURIComponent(errorDescription)}` : "";
  window.location.hash = `#/auth${reason}`;
}

void consumeOAuthFragment().finally(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
