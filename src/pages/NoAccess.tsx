import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useAccess } from "@/hooks/useAccess";
import { TABS, tabById } from "@/lib/access";

/**
 * Shown in place of a tab the person cannot open.
 *
 * It does three jobs, and the third is the one that matters: it tells them
 * what they *can* open. A bare rejection leaves someone stuck on a page with
 * no way forward, which is how a permissions screen becomes a support call.
 */

interface Props {
  /** The tab that was refused, when we know it. */
  tabId?: string;
}

const NoAccess: React.FC<Props> = ({ tabId }) => {
  const { user } = useAuth();
  const { tabs, unconfigured, error, refresh, loading } = useAccess();
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const tab = tabId ? tabById(tabId) : undefined;
  const available = TABS.filter((t) => tabs.indexOf(t.id) !== -1);

  const requestAccess = async () => {
    if (!user || !tabId) return;
    setSending(true);
    const { error: insErr } = await supabase.from("access_requests").insert({
      user_id: user.id,
      requester_email: user.email,
      tab: tabId,
      note: note.trim() === "" ? null : note.trim(),
    });
    setSending(false);

    if (insErr) {
      // 23505 is the one-open-request-per-tab index doing its job. That is not
      // a failure the person needs to understand as an error.
      if (insErr.code === "23505") {
        setSent(true);
        toast({
          title: "Already requested",
          description: "You have a request open for this tab. An admin will see it.",
        });
        return;
      }
      toast({
        title: "Couldn't send the request",
        description: insErr.message,
        variant: "destructive",
      });
      return;
    }

    setSent(true);
    toast({
      title: "Request sent",
      description: "An admin will review it. You'll get the tab as soon as it's approved.",
    });
  };

  const doRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center p-6">
      <div className="w-full max-w-2xl space-y-4 pt-16">
        <Card>
          <CardHeader>
            <CardTitle>
              {unconfigured
                ? "Your role hasn't been set up yet"
                : tab
                  ? `You don't have access to ${tab.label}`
                  : "You don't have access to this page"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {unconfigured ? (
              <p className="text-sm text-muted-foreground">
                Your account is signed in, but no role has been set for you in Architect
                yet — so there is nothing for us to show you. Ask your manager to set your
                role, then use <strong>Refresh my access</strong> below.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                This tab isn't part of your role. If you need it for your work, ask for it
                and an admin will review the request.
              </p>
            )}

            {error && (
              <p className="text-sm" style={{ color: "hsl(40,90%,35%)" }}>
                {error} Your access below may be out of date.
              </p>
            )}

            {!unconfigured && tabId && (
              <div className="space-y-2">
                <Textarea
                  placeholder="Optional: why you need it (helps an admin say yes quickly)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  disabled={sent}
                />
                <Button onClick={requestAccess} disabled={sending || sent}>
                  {sent ? "Request sent" : sending ? "Sending…" : "Request access"}
                </Button>
              </div>
            )}

            <div>
              <Button variant="outline" onClick={doRefresh} disabled={refreshing || loading}>
                {refreshing ? "Checking…" : "Refresh my access"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">What you can open</CardTitle>
          </CardHeader>
          <CardContent>
            {available.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Nothing yet. Once your role is set, your tabs will appear here.
              </p>
            ) : (
              <ul className="space-y-1">
                {available.map((t) => (
                  <li key={t.id}>
                    <Link to={t.path} className="text-sm underline">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NoAccess;
