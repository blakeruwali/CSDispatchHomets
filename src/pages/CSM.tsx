import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, Sun, Moon, ArrowLeft, Headphones } from "lucide-react";
import { csmSections } from "@/components/csm/csmSopData";
import { KBSection } from "@/components/knowledge-base/KBSection";

const CSM: React.FC = () => {
  const [query, setQuery] = useState("");
  const [lightMode, setLightMode] = useState(false);

  const bg = lightMode ? "hsl(0,0%,96%)" : "hsl(0,0%,5%)";
  const sidebarBg = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,7%)";
  const headerBg = lightMode ? "hsl(0,0%,100%,0.9)" : "hsl(0,0%,7%,0.9)";
  const borderColor = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,100%,0.1)";
  const textPrimary = lightMode ? "text-gray-900" : "text-white";
  const textMuted = lightMode ? "text-gray-500" : "text-white/45";
  const textSubtle = lightMode ? "text-gray-400" : "text-white/30";
  const hoverBg = lightMode ? "hover:bg-gray-100 hover:text-gray-700" : "hover:bg-white/5 hover:text-white/70";

  const q = query.toLowerCase().trim();
  const sidebarSections = csmSections.map((s) => {
    const matchCount = q
      ? s.articles.filter(
          (a) => a.title.toLowerCase().includes(q) || a.keywords.toLowerCase().includes(q)
        ).length
      : s.articles.length;
    return { ...s, matchCount };
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: bg }}>
      {/* Sidebar */}
      <div
        className="w-56 flex-shrink-0 flex flex-col h-full"
        style={{ background: sidebarBg, borderRight: `1px solid ${borderColor}` }}
      >
        <div
          className="h-12 flex items-center px-4 flex-shrink-0 gap-2"
          style={{ borderBottom: `1px solid ${borderColor}` }}
        >
          <Headphones className="w-4 h-4" style={{ color: "hsl(15,90%,55%)" }} />
          <span className={`text-xs font-semibold uppercase tracking-wider ${textPrimary}`}>
            CSM SOP
          </span>
        </div>
        <div className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {sidebarSections.map((section) => {
            if (q && section.matchCount === 0) return null;
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(`kb-${section.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${textMuted} ${hoverBg}`}
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: `${section.iconColor}33` }}
                >
                  <Icon className="w-3 h-3" style={{ color: section.iconColor }} />
                </div>
                <span className="truncate">{section.title}</span>
                {q && <span className={`ml-auto text-[10px] ${textSubtle}`}>{section.matchCount}</span>}
              </button>
            );
          })}
          {q && sidebarSections.every((s) => s.matchCount === 0) && (
            <p className={`text-xs px-3 py-4 ${textMuted}`}>No matching articles</p>
          )}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div
          className="h-12 flex items-center justify-between px-5 flex-shrink-0 backdrop-blur-md"
          style={{ background: headerBg, borderBottom: `1px solid ${borderColor}` }}
        >
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${textMuted} ${hoverBg}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Dispatch Guide
            </Link>
            <h1 className={`text-sm font-semibold ${textPrimary}`}>
              CSM Standard Operating Procedures
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center rounded-lg px-3 py-1.5 gap-2"
              style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}
            >
              <Search className={`w-3.5 h-3.5 ${textMuted}`} />
              <input
                type="text"
                placeholder="Search SOP..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`bg-transparent text-sm outline-none w-56 ${textPrimary}`}
              />
              {query && (
                <button onClick={() => setQuery("")} className={textMuted}>
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setLightMode((v) => !v)}
              className={`p-2 rounded-lg transition-all ${textMuted}`}
              style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}
              title={lightMode ? "Dark mode" : "Light mode"}
            >
              {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {csmSections.map((section) => (
            <div key={section.id} id={`kb-${section.id}`}>
              <KBSection section={section} lightMode={lightMode} searchQuery={query} />
            </div>
          ))}
          {q && csmSections.every((s) =>
            s.articles.every((a) => !a.title.toLowerCase().includes(q) && !a.keywords.toLowerCase().includes(q))
          ) && (
            <p className={`text-sm text-center py-8 ${textMuted}`}>No matching articles found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CSM;
