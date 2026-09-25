import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useAccess } from "@/hooks/useAccess";
import { ROLE_TABS, normalizeRole, tabById } from "@/lib/access";

/**
 * Access requests, grants, and roles this app does not understand.
 *
 * Approving inserts a tab_grant and marks the request approved. The two are
 * separate statements rather than a transaction: if the grant lands and the
 * status update fails, the person has the access they asked for and the
 * request stays visible, which is the harmless direction to fail. The reverse
 * order would mark it approved while granting nothing.
 */

interface RequestRow {
  id: string;
  user_id: string;
  requester_email: string;
  tab: string;
  note: string | null;
  status: string;
  created_at: string;
}

interface GrantRow {
  id: string;
  user_id: string;
  user_email: string;
  tab: string;
  granted_at: string;
}

interface RoleRow {
  user_id: string;
  role: string;
}

const AdminAccess: React.FC = () => {
  const { user } = useAuth();
  const { isAdmin, loading: accessLoading } = useAccess();
  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [grants, setGrants] = useState<GrantRow[]>([]);
  const [roles, setRoles] = useState<RoleRow[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    const [reqRes, grantRes, roleRes] = await Promise.all([
      supabase
        .from("access_requests")
        .select("id,user_id,requester_email,tab,note,status,created_at")
        .order("created_at", { ascending: false }),
      supabase
        .from("tab_grants")
        .select("id,user_id,user_email,tab,granted_at")
        .order("granted_at", { ascending: false }),
      supabase.from("staff_roles").select("user_id,role"),
    ]);
    setRequests((reqRes.data ?? []) as RequestRow[]);
    setGrants((grantRes.data ?? []) as GrantRow[]);
    setRoles((roleRes.data ?? []) as RoleRow[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!accessLoading && isAdmin) void reload();
  }, [accessLoading, isAdmin, reload]);

  if (accessLoading) return null;

  // RequireTab already gates this route. This is the second answer to the same
  // question, kept because an admin page is worth being sure about.
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background p-6">
        <p className="text-sm text-muted-foreground">Admins only.</p>
      </div>
    );
  }

  const decide = async (row: RequestRow, approve: boolean) => {
    if (!user) return;
    setBusy(row.id);

    if (approve) {
      const { error: grantErr } = await supabase.from("tab_grants").insert({
        user_id: row.user_id,
        user_email: row.requester_email,
        tab: row.tab,
        granted_by: user.id,
      });
      // 23505 means they already have it — treat as success and close the
      // request rather than refusing to move it out of the queue.
      if (grantErr && grantErr.code !== "23505") {
        setBusy(null);
        toast({
          title: "Couldn't grant the tab",
          description: grantErr.message,
          variant: "destructive",
        });
        return;
      }
    }

    const { error: updErr } = await supabase
      .from("access_requests")
      .update({
        status: approve ? "approved" : "denied",
        reviewed_by: user.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", row.id);

    setBusy(null);

    if (updErr) {
      toast({
        title: approve ? "Granted, but the request is still open" : "Couldn't deny",
        description: updErr.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: approve ? "Approved" : "Denied",
        description: `${row.requester_email} — ${tabById(row.tab)?.label ?? row.tab}`,
      });
    }
    void reload();
  };

  const revoke = async (row: GrantRow) => {
    setBusy(row.id);
    const { error } = await supabase.from("tab_grants").delete().eq("id", row.id);
    setBusy(null);
    if (error) {
      toast({ title: "Couldn't revoke", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Revoked", description: `${row.user_email} — ${tabById(row.tab)?.label ?? row.tab}` });
    void reload();
  };

  const pending = requests.filter((r) => r.status === "pending");
  const decided = requests.filter((r) => r.status !== "pending").slice(0, 20);

  // Roles Architect is sending that this app has no mapping for. Anyone holding
  // only one of these sees an empty menu, and this is the only place that says
  // why.
  const unmapped: string[] = [];
  for (const row of roles) {
    const key = normalizeRole(row.role);
    if (key === "") continue;
    if (Object.prototype.hasOwnProperty.call(ROLE_TABS, key)) continue;
    if (unmapped.indexOf(row.role) === -1) unmapped.push(row.role);
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-semibold">Access requests</h1>

        {unmapped.length > 0 && (
          <Card style={{ borderColor: "hsl(40,90%,55%)" }}>
            <CardHeader>
              <CardTitle className="text-base">Unmapped roles in Architect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Architect is sending {unmapped.length === 1 ? "a role" : "roles"} this app has
                no mapping for, so anyone holding only {unmapped.length === 1 ? "it" : "them"}{" "}
                sees an empty menu. Add {unmapped.length === 1 ? "it" : "them"} to{" "}
                <code>ROLE_TABS</code> in <code>src/lib/access.ts</code>.
              </p>
              <ul className="text-sm">
                {unmapped.map((r) => (
                  <li key={r}>
                    <code>{r}</code>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Pending {pending.length > 0 ? `(${pending.length})` : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : pending.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nothing waiting.</p>
            ) : (
              <ul className="space-y-3">
                {pending.map((row) => (
                  <li key={row.id} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="text-sm font-medium">{row.requester_email}</div>
                    <div className="text-sm text-muted-foreground">
                      wants <strong>{tabById(row.tab)?.label ?? row.tab}</strong>
                    </div>
                    {row.note && <div className="text-sm mt-1 italic">“{row.note}”</div>}
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" disabled={busy === row.id} onClick={() => decide(row, true)}>
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={busy === row.id}
                        onClick={() => decide(row, false)}
                      >
                        Deny
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Granted tabs</CardTitle>
          </CardHeader>
          <CardContent>
            {grants.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                None. Everyone's access comes from their Architect role.
              </p>
            ) : (
              <ul className="space-y-2">
                {grants.map((row) => (
                  <li key={row.id} className="flex items-center justify-between gap-3">
                    <span className="text-sm">
                      {row.user_email} — {tabById(row.tab)?.label ?? row.tab}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={busy === row.id}
                      onClick={() => revoke(row)}
                    >
                      Revoke
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {decided.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recently decided</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {decided.map((row) => (
                  <li key={row.id} className="text-sm text-muted-foreground">
                    {row.status === "approved" ? "✓" : "✕"} {row.requester_email} —{" "}
                    {tabById(row.tab)?.label ?? row.tab}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminAccess;
