import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { isManagedHost } from "@/lib/oauthHandoff";
import {
  ALL_TAB_IDS,
  isAdmin as rolesAreAdmin,
  isUnconfigured,
  tabsFor,
  unmappedRoles,
} from "@/lib/access";

/**
 * Roles and tab grants for the signed-in person.
 *
 * Held at module scope rather than in each component's state, for the same
 * reason the rejection store in useAuth is: RequireTab wraps every route and
 * the menu filters against this too, so a per-component useState would mean a
 * dozen identical queries on every navigation. One load, many subscribers.
 */

interface AccessState {
  /** True until we know what this person can see. Gates rendering, so it must
   *  start true — rendering "no access" before the roles arrive would flash a
   *  rejection at every legitimate user on every page load. */
  loading: boolean;
  roles: string[];
  grants: string[];
  /** Set once a load has completed for the current user, success or not. */
  loaded: boolean;
  /** Populated when the Architect lookup failed, so the UI can say so rather
   *  than silently presenting an empty menu as though it were policy. */
  error: string | null;
  /**
   * False until the feature is actually wired up — the tables exist and
   * Architect can be reached.
   *
   * This is the difference between "we asked and you are allowed nothing" and
   * "we have not been told anything yet", and it decides whether the app hides
   * tabs or shows them all. Without it, deploying this frontend before the
   * migration and the Architect secrets would lock every account out of every
   * tab, because no roles exist to be read. Enforcement switches itself on as
   * soon as the setup is finished; nothing needs redeploying.
   */
  enforcing: boolean;
}

const EMPTY: AccessState = {
  loading: true,
  roles: [],
  grants: [],
  loaded: false,
  error: null,
  enforcing: true,
};

let state: AccessState = EMPTY;
let loadedFor: string | null = null;
let inFlight: Promise<void> | null = null;

const listeners = new Set<(s: AccessState) => void>();

function setState(next: AccessState) {
  state = next;
  for (const listener of listeners) listener(next);
}

/**
 * In the Lovable editor preview there is often no Supabase session at all, and
 * an empty menu makes the app look broken to whoever is editing it. So the
 * preview treats the viewer as an admin, and the role switcher below lets them
 * see what each role actually gets.
 *
 * This is scoped to hosts that serve the editor preview. On
 * process.hometsair.com it is never active, which is the only place it would
 * matter.
 */
const PREVIEW_ROLE_KEY = "homets.previewRole";

export function isPreviewHost(): boolean {
  try {
    return isManagedHost();
  } catch {
    return false;
  }
}

export function getPreviewRole(): string | null {
  if (!isPreviewHost()) return null;
  try {
    return window.sessionStorage.getItem(PREVIEW_ROLE_KEY);
  } catch {
    // Private windows and blocked site data throw rather than return null.
    return null;
  }
}

export function setPreviewRole(role: string | null) {
  if (!isPreviewHost()) return;
  try {
    if (role === null) window.sessionStorage.removeItem(PREVIEW_ROLE_KEY);
    else window.sessionStorage.setItem(PREVIEW_ROLE_KEY, role);
  } catch {
    /* nothing we can do, and nothing that should break the page */
  }
  // Re-publish so every subscriber re-renders against the new role.
  setState({ ...state });
}

/** Postgres/PostgREST codes meaning the table is not there yet. */
function tableMissing(err: { code?: string; message?: string } | null): boolean {
  if (!err) return false;
  if (err.code === "PGRST205" || err.code === "42P01") return true;
  return (err.message ?? "").indexOf("does not exist") !== -1;
}

async function readLocal(
  userId: string,
): Promise<{ roles: string[]; grants: string[]; missing: boolean }> {
  const [rolesRes, grantsRes] = await Promise.all([
    supabase.from("staff_roles").select("role").eq("user_id", userId),
    supabase.from("tab_grants").select("tab").eq("user_id", userId),
  ]);

  const roles: string[] = [];
  for (const row of rolesRes.data ?? []) {
    if (row && typeof row.role === "string") roles.push(row.role);
  }
  const grants: string[] = [];
  for (const row of grantsRes.data ?? []) {
    if (row && typeof row.tab === "string") grants.push(row.tab);
  }
  const missing = tableMissing(rolesRes.error) || tableMissing(grantsRes.error);
  return { roles, grants, missing };
}

/**
 * Load roles for a user, syncing from Architect when we have none.
 *
 * `force` is the "Refresh my access" button: sync first, then read. Without it
 * we only sync when the local table is empty, so an ordinary page load does
 * not make a cross-project call every time.
 */
async function load(userId: string, force: boolean): Promise<void> {
  let error: string | null = null;
  let roles: string[] = [];
  let grants: string[] = [];
  let enforcing = true;

  try {
    if (!force) {
      const local = await readLocal(userId);
      roles = local.roles;
      grants = local.grants;
      if (local.missing) enforcing = false;
    }

    if (force || roles.length === 0) {
      const { data, error: fnErr } = await supabase.functions.invoke("sync-my-role");
      // The function answers 200 with this flag when its Architect secrets are
      // not set. Treated as "not switched on yet", not as a denial.
      if (data && (data as { not_configured?: boolean }).not_configured) {
        enforcing = false;
      }
      if (fnErr) {
        // Keep whatever we already had. A lookup that fails should not revoke
        // access someone already has — that turns an Architect outage into an
        // outage here.
        error = "We couldn't reach Architect to check your role.";
      }
      const after = await readLocal(userId);
      roles = after.roles;
      grants = after.grants;
      if (after.missing) enforcing = false;
    }
  } catch (err) {
    error = "We couldn't load your access.";
  }

  loadedFor = userId;
  setState({ loading: false, roles, grants, loaded: true, error, enforcing });
}

export function useAccess() {
  const { session, loading: authLoading } = useAuth();
  const [local, setLocal] = useState<AccessState>(state);

  useEffect(() => {
    listeners.add(setLocal);
    return () => {
      listeners.delete(setLocal);
    };
  }, []);

  const userId = session?.user?.id ?? null;

  useEffect(() => {
    if (authLoading) return;

    if (!userId) {
      // Signed out: drop everything, so the next person to sign in on this
      // browser does not briefly inherit the previous person's menu.
      loadedFor = null;
      inFlight = null;
      setState({
        loading: false,
        roles: [],
        grants: [],
        loaded: false,
        error: null,
        enforcing: state.enforcing,
      });
      return;
    }

    if (loadedFor === userId || inFlight) return;
    inFlight = load(userId, false).finally(() => {
      inFlight = null;
    });
  }, [userId, authLoading]);

  const refresh = () => {
    if (!userId) return Promise.resolve();
    setState({ ...state, loading: true });
    inFlight = load(userId, true).finally(() => {
      inFlight = null;
    });
    return inFlight;
  };

  // --- effective roles ------------------------------------------------------

  const previewRole = getPreviewRole();
  const preview = isPreviewHost();

  let roles = local.roles;
  if (preview) {
    // An explicit switcher choice wins, so an editor can see the technician
    // view. With no choice made, admin, so the preview is never a blank menu.
    roles = previewRole ? [previewRole] : ["admin"];
  }

  const admin = rolesAreAdmin(roles);

  // Until the feature is wired up, everyone sees everything — the same as
  // before this was built. The alternative is a blank app for the whole team
  // the moment this deploys ahead of its setup.
  const enforcing = preview ? true : local.enforcing;
  const tabs = enforcing ? tabsFor(roles, preview ? [] : local.grants) : ALL_TAB_IDS;

  return {
    /** True while we do not yet know what this person may see. */
    loading: authLoading || (userId !== null && !local.loaded && !preview),
    roles,
    grants: preview ? [] : local.grants,
    tabs,
    enforcing,
    isAdmin: admin,
    /** No role, or only the placeholder roles — "ask your manager", not "denied". */
    unconfigured: isUnconfigured(roles),
    /** Roles Architect sent that this app has no mapping for. */
    unmapped: unmappedRoles(roles),
    error: local.error,
    refresh,
    preview,
    previewRole,
    setPreviewRole,
  };
}

/** Whether a given tab id is open to the current person. */
export function useCanViewTab(tabId: string) {
  const access = useAccess();
  return {
    loading: access.loading,
    allowed: access.tabs.indexOf(tabId) !== -1,
    access,
  };
}
