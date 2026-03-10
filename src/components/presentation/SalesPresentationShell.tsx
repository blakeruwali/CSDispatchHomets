import React, { useRef, useState, useEffect, useCallback } from "react";
import { techSalesSlides } from "./techSalesSlides";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search, X, Sun, Moon, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SalesPresentationShell: React.FC = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileSalesPresentation />;
  return <DesktopSalesPresentation />;
};

/* ── Mobile ── */
const MobileSalesPresentation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen" style={{ background: "hsl(0,0%,5%)" }}>
      <div className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 backdrop-blur-md"
        style={{ background: "hsl(0,0%,7%,0.9)", borderBottom: "1px solid hsl(0,0%,100%,0.1)" }}>
        <button onClick={() => navigate("/")} className="text-white/50 hover:text-white transition-colors">
          <Home className="w-5 h-5" />
        </button>
        <h1 className="text-sm font-bold text-white">HVAC Sales Guide</h1>
        <div className="w-5" />
      </div>
      <div className="px-4 py-4 space-y-4">
        {techSalesSlides.map((slide, i) => {
          const SlideComponent = slide.component;
          return (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg"
              style={{ background: "hsl(0,0%,8%)", border: "1px solid hsl(0,0%,100%,0.1)" }}>
              <div className="slide-content p-4">
                <SlideComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Desktop ── */
const DesktopSalesPresentation: React.FC = () => {
  const navigate = useNavigate();
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const scrollToSlide = useCallback((i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-slide-index"));
            if (!isNaN(idx)) setActiveIndex(idx);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === "Escape") { setSearchOpen(false); setSearchQuery(""); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const query = searchQuery.toLowerCase().trim();
  const filteredSlides = query
    ? techSalesSlides.map((slide, i) => ({
        ...slide, originalIndex: i,
        match: slide.title.toLowerCase().includes(query) || (slide.keywords?.toLowerCase().includes(query) ?? false),
      })).filter((s) => s.match)
    : techSalesSlides.map((slide, i) => ({ ...slide, originalIndex: i, match: true }));

  const bg = lightMode ? "hsl(0,0%,96%)" : "hsl(0,0%,5%)";
  const sidebarBg = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,7%)";
  const headerBg = lightMode ? "hsl(0,0%,100%,0.9)" : "hsl(0,0%,7%,0.9)";
  const cardBg = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,8%)";
  const borderColor = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,100%,0.1)";
  const textPrimary = lightMode ? "text-gray-900" : "text-white";
  const textMuted = lightMode ? "text-gray-500" : "text-white/45";
  const textSubtle = lightMode ? "text-gray-400" : "text-white/30";
  const activeBg = lightMode ? "bg-orange-50 text-gray-900" : "bg-white/10 text-white";
  const hoverBg = lightMode ? "hover:bg-gray-100 hover:text-gray-700" : "hover:bg-white/5 hover:text-white/70";
  const badgeActive = "bg-[hsl(15,90%,55%)] text-white";
  const badgeInactive = lightMode ? "bg-gray-200 text-gray-500" : "bg-white/10 text-white/40";

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: bg }}>
      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 flex flex-col h-full"
        style={{ background: sidebarBg, borderRight: `1px solid ${borderColor}` }}>
        <div className="h-12 flex items-center justify-between px-4 flex-shrink-0"
          style={{ borderBottom: `1px solid ${borderColor}` }}>
          <span className={`text-xs font-semibold uppercase tracking-wider ${textMuted}`}>Slides</span>
          <button onClick={() => navigate("/")} className={`${textMuted} hover:text-white transition-colors`} title="Back to Dispatch Guide">
            <Home className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {(query ? filteredSlides : techSalesSlides.map((s, i) => ({ ...s, originalIndex: i }))).map(
            (slide) => {
              const i = slide.originalIndex;
              return (
                <button key={i} onClick={() => { scrollToSlide(i); if (query) { setSearchQuery(""); setSearchOpen(false); } }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${
                    i === activeIndex ? `${activeBg} font-medium` : `${textMuted} ${hoverBg}`
                  }`}>
                  <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                    i === activeIndex ? badgeActive : badgeInactive
                  }`}>{i + 1}</span>
                  <span className="truncate">{slide.title}</span>
                </button>
              );
            }
          )}
          {query && filteredSlides.length === 0 && (
            <p className={`text-xs px-3 py-4 ${textMuted}`}>No matching slides</p>
          )}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-12 flex items-center justify-between px-5 flex-shrink-0 backdrop-blur-md"
          style={{ background: headerBg, borderBottom: `1px solid ${borderColor}` }}>
          <h1 className={`text-sm font-bold ${textPrimary}`}>HVAC Estimate Sales Guide</h1>
          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-lg px-3 py-1.5 gap-2"
                  style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}>
                  <Search className={`w-3.5 h-3.5 ${textMuted}`} />
                  <input ref={searchInputRef} type="text" placeholder="Search slides..."
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className={`bg-transparent text-sm outline-none w-48 ${textPrimary}`} autoFocus />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className={textMuted}><X className="w-3.5 h-3.5" /></button>
                  )}
                </div>
                <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className={`text-xs ${textMuted}`}>Esc</button>
              </div>
            ) : (
              <button onClick={() => { setSearchOpen(true); setTimeout(() => searchInputRef.current?.focus(), 100); }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${textMuted}`}
                style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}>
                <Search className="w-3.5 h-3.5" /><span>Search</span>
                <kbd className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono"
                  style={{ background: lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,18%)" }}>⌘K</kbd>
              </button>
            )}
            <button onClick={() => setLightMode((v) => !v)}
              className={`p-2 rounded-lg transition-all ${textMuted}`}
              style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}>
              {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <span className={`text-xs ${textSubtle}`}>{activeIndex + 1} / {techSalesSlides.length}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {techSalesSlides.map((slide, i) => {
            const SlideComponent = slide.component;
            const isHighlighted = query && filteredSlides.some((s) => s.originalIndex === i);
            const isDimmed = query && !isHighlighted;
            return (
              <div key={i} ref={(el) => (slideRefs.current[i] = el)} data-slide-index={i}
                className={`rounded-xl overflow-hidden shadow-lg transition-opacity duration-300 ${isDimmed ? "opacity-20" : "opacity-100"}`}
                style={{ background: cardBg, border: isHighlighted ? "2px solid hsl(15,90%,55%)" : `1px solid ${borderColor}` }}>
                <div className="slide-content p-6 md:p-8"><SlideComponent /></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
