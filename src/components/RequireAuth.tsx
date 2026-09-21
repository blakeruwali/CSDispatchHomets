import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { isPreviewEnvironment } from "@/lib/previewBypass";

/**
 * Gate for internal documentation. Nothing here is public: every SOP, script
 * and rubric is company material, and an acknowledgement only means something
 * if the reader was signed in when they made it.
 *
 * Exception: the Lovable preview and localhost, where sign-in cannot be
 * completed while we are building. See `lib/previewBypass`.
 */
export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (isPreviewEnvironment()) return <>{children}</>;



  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Checking your access…</p>
      </main>
    );
  }

  if (!session) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
