import React from "react";
import { useAccess } from "@/hooks/useAccess";
import { ROLE_TABS } from "@/lib/access";

/**
 * Role switcher for the editor preview.
 *
 * Renders only on hosts that serve the preview (see isPreviewHost), so it
 * cannot appear on process.hometsair.com. The preview treats the viewer as an
 * admin by default; this is how you check what a technician or a marketer
 * actually sees without signing in as one.
 */
const PreviewRoleSwitcher: React.FC = () => {
  const { preview, previewRole, setPreviewRole } = useAccess();

  if (!preview) return null;

  const roles = Object.keys(ROLE_TABS);

  return (
    <div
      className="fixed bottom-3 left-3 z-50 flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs shadow-lg"
      style={{ background: "hsl(0,0%,12%)", color: "hsl(0,0%,90%)" }}
    >
      <span style={{ opacity: 0.7 }}>Preview as</span>
      <select
        value={previewRole ?? "admin"}
        onChange={(e) => setPreviewRole(e.target.value)}
        className="bg-transparent outline-none"
        style={{ color: "inherit" }}
      >
        {roles.map((role) => (
          <option key={role} value={role} style={{ color: "black" }}>
            {role}
          </option>
        ))}
      </select>
      {previewRole && (
        <button onClick={() => setPreviewRole(null)} style={{ opacity: 0.7 }}>
          reset
        </button>
      )}
    </div>
  );
};

export default PreviewRoleSwitcher;
