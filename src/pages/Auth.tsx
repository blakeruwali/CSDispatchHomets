import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

import { useAuth, ALLOWED_EMAIL_DOMAIN, isAllowedEmail } from "@/hooks/useAuth";
import { GOOGLE_SIGN_IN_ENABLED } from "@/lib/oauthHandoff";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/homets-logo-white.png";
import { ShieldCheck, ClipboardCheck, BookOpen, Loader2, Mail, KeyRound } from "lucide-react";


export default function Auth() {
  const { session, loading, domainBlocked, blockedEmail } = useAuth();
  const nav = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from;
  const dest = from && from !== "/auth" ? from : "/checklist";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  // Declared with the other hooks: this used to sit below the early returns,
  // which changed the hook count between renders and crashed the page.
  const [linkSent, setLinkSent] = useState(false);
  // "password" = returning staff with a password set.
  // "link" = first-time / passwordless sign-in, which is how new staff get in.
  const [mode, setMode] = useState<"password" | "link">("password");


  // main.tsx routes a failed OAuth round trip back here with the reason
  // attached, rather than bouncing the user to a page they cannot reach.
  useEffect(() => {
    const reason = new URLSearchParams(location.search).get("error");
    if (!reason) return;
    toast({ title: "Sign-in failed", description: reason, variant: "destructive" });
    nav("/auth", { replace: true });
  }, [location.search, nav]);

  if (loading) return null;
  if (session) return <Navigate to={dest} replace />;

  const domainError = () =>
    toast({
      title: "Access restricted",
      description: `Only @${ALLOWED_EMAIL_DOMAIN} accounts can sign in.`,
      variant: "destructive",
    });

  const signInGoogle = async () => {
    setBusy(true);

    // Google goes straight through Supabase. The Lovable broker is a server
    // route (`/~oauth/initiate`) that only Lovable's hosting serves, and it
    // will only accept callbacks on a domain attached to that app — so a
    // sign-in started here finished on homets-shine-deck.lovable.app, leaving
    // the session in that origin's localStorage where this site cannot read
    // it. Supabase hosts its own callback, so production stays production.
    //
    // The account already carries a linked Google identity issued by this
    // Supabase project, so the provider is configured on it. If that ever
    // stops being true the failure returns as `error_description`, which
    // main.tsx routes back here and shows, rather than failing silently.
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}`,
        queryParams: { prompt: "select_account", hd: "hometsair.com" },
      },
    });

    if (error) {
      setBusy(false);
      toast({ title: "Sign-in failed", description: error.message, variant: "destructive" });
      return;
    }
    // Success means the browser is navigating to Google; leave `busy` set so
    // the button cannot be pressed twice while the redirect is in flight.
  };



  const signInEmail = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) toast({ title: "Sign-in failed", description: error.message, variant: "destructive" });
    else nav(dest);
  };

  

  // Magic link: no Google provider setup needed, and first sign-in creates the
  // account — which is how the first users get in at all. The domain rule is
  // enforced before sending (only hometsair.com mailboxes can receive the
  // link) and again in useAuth after the session lands.
  //
  // emailRedirectTo carries BASE_URL for the same reason the Google redirect
  // does: on GitHub Pages the app lives under a sub-path, and returning to the
  // bare origin lands on a 404. main.tsx consumes the token fragment before
  // HashRouter sees it.
  const sendMagicLink = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}${import.meta.env.BASE_URL}` },
    });
    setBusy(false);
    if (error) {
      toast({ title: "Couldn't send link", description: error.message, variant: "destructive" });
      return;
    }
    setLinkSent(true);
    toast({ title: "Check your email", description: `Sign-in link sent to ${email}.` });
  };

  // Password set/reset: emails a recovery link that lands on /reset-password.
  // This is also how magic-link users (who never had a password) set one for
  // the first time.
  const sendPasswordReset = async () => {
    if (!isAllowedEmail(email)) return domainError();
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${import.meta.env.BASE_URL}#/reset-password`,
    });
    setBusy(false);
    if (error) {
      toast({ title: "Couldn't send link", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Check your email", description: `Password link sent to ${email}.` });
  };

  return (
    <main className="min-h-screen w-full lg:grid lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel — reads as company issue, not somebody's login form. */}
      <section
        className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-12"
        style={{ background: "linear-gradient(135deg, hsl(215,32%,10%) 0%, hsl(215,38%,18%) 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--slide-gradient)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "hsl(var(--accent))" }}
        />
        <img src={logo} alt="Home+s Air & Heat" className="relative h-12 w-auto object-contain self-start" />

        <div className="relative max-w-lg">
          <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            The Homets Operating System
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            One place for the SOPs, pricing, dispatch rules and call scorecards your
            team runs on — always the current version, always the same answer.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { Icon: BookOpen, title: "Standard Operating Procedures", body: "CSM, dispatch and field playbooks in English and Español." },
              { Icon: ClipboardCheck, title: "Live scoring", body: "Real-time checklists that coach the call while it's happening." },
              { Icon: ShieldCheck, title: "Signed and tracked", body: "Version-scoped acknowledgements that protect you and the company." },
            ].map(({ Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--slide-gradient)" }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{title}</span>
                  <span className="block text-sm text-white/50">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-[11px] uppercase tracking-[0.18em] text-white/35">
          Homets Services, LLC · HVAC &amp; Plumbing · Nassau &amp; Suffolk
        </p>
      </section>

      {/* Form panel */}
      <section className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-sm">
          <div
            className="mb-8 flex items-center justify-center rounded-xl px-6 py-4 lg:hidden"
            style={{ background: "linear-gradient(135deg, hsl(215,32%,12%) 0%, hsl(215,38%,18%) 100%)" }}
          >
            <img src={logo} alt="Home+s Air & Heat" className="h-9 w-auto object-contain" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight">Sign in to your workspace</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Staff access only — use your <strong className="font-medium text-foreground">@{ALLOWED_EMAIL_DOMAIN}</strong> account.
          </p>

          {domainBlocked && (
            <div className="mt-6 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
              {blockedEmail ? <><strong>{blockedEmail}</strong> is not a </> : "That account isn't a "}
              @{ALLOWED_EMAIL_DOMAIN} address, so it was signed out. Sign in with your
              Homets account, or ask Blake to have your address added.
            </div>
          )}

          {GOOGLE_SIGN_IN_ENABLED && (
            <>
              <Button onClick={signInGoogle} disabled={busy} size="lg" className="mt-6 w-full font-semibold">
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleGlyph />}
                Continue with Google
              </Button>
              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  or with email
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </>
          )}

          {/* Mode switch */}
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-secondary/60 p-1">
            {([
              ["password", "Password", KeyRound],
              ["link", "Email link", Mail],
            ] as const).map(([value, label, Icon]) => (
              <button
                key={value}
                type="button"
                onClick={() => setMode(value)}
                className={`flex items-center justify-center gap-1.5 rounded-md py-2 text-sm font-medium transition-colors ${
                  mode === value
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>

          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              mode === "password" ? signInEmail() : sendMagicLink();
            }}
          >
            <div className="space-y-1.5">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={`name@${ALLOWED_EMAIL_DOMAIN}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {mode === "password" && (
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button
                    type="button"
                    onClick={sendPasswordReset}
                    disabled={busy}
                    className="text-xs font-medium text-primary hover:underline disabled:opacity-50"
                  >
                    Set / reset
                  </button>
                </div>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              variant={GOOGLE_SIGN_IN_ENABLED ? "outline" : "default"}
              disabled={busy || (mode === "link" && linkSent)}
              className="w-full font-semibold"
            >
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === "password"
                ? "Sign in"
                : linkSent
                  ? "Link sent — check your email"
                  : "Email me a sign-in link"}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
            New to the team? Your first sign-in is the{" "}
            <button
              type="button"
              onClick={() => setMode("link")}
              className="font-medium text-primary hover:underline"
            >
              email link
            </button>
            . Access is limited to @{ALLOWED_EMAIL_DOMAIN} accounts — ask Blake if yours
            isn't working.
          </p>
        </div>
      </section>
    </main>
  );
}

/** Google's mark, so the button reads as an official provider button. */
function GoogleGlyph() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.0 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.0 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C37.1 40.2 44 35 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

