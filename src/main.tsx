import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { supabase } from "./integrations/supabase/client";

/**
 * OAuth returns to the site root with the tokens in the URL fragment. Because
 * this app uses HashRouter, that fragment would otherwise be read as a route
 * and dump the user on the 404 page. Consume it here, set the session, then
 * hand control back to the router.
 */
async function consumeOAuthFragment() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw.includes("access_token") && !raw.includes("error_description")) return;

  const params = new URLSearchParams(raw);
  const access_token = params.get("access_token");
  const refresh_token = params.get("refresh_token");

  if (access_token && refresh_token) {
    await supabase.auth.setSession({ access_token, refresh_token });
  }
  window.location.hash = "#/checklist";
}

void consumeOAuthFragment().finally(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
