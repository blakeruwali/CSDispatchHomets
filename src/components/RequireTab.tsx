import React from "react";
import { useAccess } from "@/hooks/useAccess";
import NoAccess from "@/pages/NoAccess";

/**
 * Gate a route on one tab.
 *
 * Wraps the page rather than replacing the route, so the URL is preserved —
 * someone who was sent a link to a tab they cannot open should be able to
 * request that exact tab, and then reload the same address once it is granted.
 *
 * Renders nothing while access is still loading. Showing the rejection first
 * and the page a moment later would flash "you don't have access" at everyone
 * on every navigation.
 */

interface Props {
  tab: string;
  children: React.ReactNode;
}

const RequireTab: React.FC<Props> = ({ tab, children }) => {
  const { loading, tabs } = useAccess();

  if (loading) return null;
  if (tabs.indexOf(tab) === -1) return <NoAccess tabId={tab} />;

  return <>{children}</>;
};

export default RequireTab;
