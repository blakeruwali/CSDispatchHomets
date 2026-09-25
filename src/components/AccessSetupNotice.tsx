import React from "react";
import { useAccess } from "@/hooks/useAccess";

/**
 * Says so, quietly, when role-based access is not switched on yet.
 *
 * The app deliberately shows everyone every tab until the migration is applied
 * and Architect can answer — locking the whole team out would be a far worse
 * failure than showing too much for a day. But a safety valve nobody can see is
 * one that stays open for months, so it announces itself.
 *
 * It disappears on its own the moment the setup is finished. Nothing to remove.
 */
const AccessSetupNotice: React.FC = () => {
  const { loading, enforcing, preview } = useAccess();

  if (loading || enforcing || preview) return null;

  return (
    <div
      className="fixed bottom-3 right-3 z-50 rounded-lg px-3 py-2 text-xs shadow-lg"
      style={{ background: "hsl(40,90%,92%)", color: "hsl(30,60%,25%)", maxWidth: "20rem" }}
    >
      <strong>Role-based access is not active.</strong> Everyone can see every
      tab until the Architect lookup is set up — see{" "}
      <code>docs/architect/README.md</code>.
    </div>
  );
};

export default AccessSetupNotice;
