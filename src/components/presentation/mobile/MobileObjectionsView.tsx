import React, { useState, useMemo } from "react";
import { objectionCategories } from "../slideData";
import { Search, X, ChevronDown } from "lucide-react";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const SURFACE2 = "hsl(0, 0%, 14%)";
const TEXT = "hsl(0, 0%, 95%)";
const MUTED = "hsl(0, 0%, 60%)";
const BORDER = "hsl(0, 0%, 18%)";
const GREEN = "hsl(142, 71%, 45%)";

export const MobileObjectionsView: React.FC = () => {
  const [query, setQuery] = useState("");
  const [openCat, setOpenCat] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (!query) return objectionCategories;
    const q = query.toLowerCase();
    return objectionCategories
      .map((cat) => ({
        ...cat,
        objections: cat.objections.filter(
          (o) =>
            o.trigger.toLowerCase().includes(q) ||
            o.response.toLowerCase().includes(q) ||
            o.tip.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.objections.length > 0);
  }, [query]);

  return (
    <div className="px-4 py-6 space-y-3">
      <h2 className="text-xl font-bold mb-4" style={{ color: TEXT, fontFamily: "'Playfair Display', serif" }}>
        <span style={{ color: ORANGE }}>— </span>Objection Handling
      </h2>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: MUTED }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search objections…"
          className="w-full rounded-xl pl-10 pr-10 py-3 text-sm outline-none"
          style={{ background: SURFACE2, color: TEXT, border: `1px solid ${BORDER}` }}
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X className="w-4 h-4" style={{ color: MUTED }} />
          </button>
        )}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm py-8" style={{ color: MUTED }}>No matching objections found.</p>
      )}

      {filtered.map((cat, ci) => {
        const isOpen = openCat === ci;
        const Icon = cat.icon;
        return (
          <div key={ci} className="rounded-xl overflow-hidden" style={{ background: SURFACE2 }}>
            <button
              onClick={() => setOpenCat(isOpen ? null : ci)}
              className="w-full flex items-center gap-3 p-4 text-left"
              style={{ color: TEXT }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: cat.color }}>
                <Icon className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm">{cat.category}</div>
                <div className="text-xs" style={{ color: MUTED }}>{cat.objections.length} objection{cat.objections.length !== 1 ? "s" : ""}</div>
              </div>
              <ChevronDown
                className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                style={{ color: MUTED, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 space-y-3">
                {cat.objections.map((obj, oi) => (
                  <div key={oi} className="rounded-lg p-3 space-y-2" style={{ background: "hsl(0,0%,10%)", border: `1px solid ${BORDER}` }}>
                    <div className="font-bold text-sm" style={{ color: RED }}>{obj.trigger}</div>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT }}>{obj.response}</p>
                    <div className="text-xs px-2 py-1.5 rounded-md" style={{ background: `${GREEN}15`, color: GREEN }}>
                      💡 {obj.tip}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
