import React from "react";
import logo from "@/assets/homets-logo-white.png";

/**
 * The company lockup. Every governed document carries it, so a page pulled up
 * on a technician's phone in a driveway reads as company issue rather than as
 * somebody's notes.
 */
export const BrandMark: React.FC<{
  accent: string;
  /** Line under the logo, e.g. the book this page belongs to. */
  subtitle?: string;
  className?: string;
  compact?: boolean;
}> = ({ accent, subtitle, className = "", compact = false }) => (
  <div
    className={`relative overflow-hidden ${className}`}
    style={{
      background: "linear-gradient(135deg, hsl(215,32%,12%) 0%, hsl(215,38%,18%) 100%)",
      borderBottom: `2px solid ${accent}`,
    }}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full opacity-20 blur-2xl"
      style={{ background: accent }}
    />
    <div className={`relative flex items-center gap-3 ${compact ? "px-4 py-2.5" : "px-5 py-4"}`}>
      <img
        src={logo}
        alt="Home+s Air & Heat"
        className={compact ? "h-7 w-auto" : "h-10 w-auto"}
        style={{ objectFit: "contain" }}
      />
      {subtitle && (
        <span className="min-w-0 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/70">
          {subtitle}
        </span>
      )}
    </div>
  </div>
);

/** Quiet, printable footer lockup for the end of a document. */
export const BrandFooter: React.FC<{ lightMode: boolean }> = ({ lightMode }) => (
  <div
    className="mt-10 flex items-center gap-3 rounded-lg px-4 py-3"
    style={{
      background: "linear-gradient(135deg, hsl(215,32%,12%) 0%, hsl(215,38%,18%) 100%)",
      opacity: lightMode ? 1 : 0.9,
    }}
  >
    <img src={logo} alt="Home+s Air & Heat" className="h-7 w-auto" />
    <p className="text-[11px] leading-snug text-white/60">
      Home+s Air &amp; Heat — HVAC &amp; Plumbing · Nassau &amp; Suffolk County
      <br />
      Internal document. Confidential to Home+s staff.
    </p>
  </div>
);
