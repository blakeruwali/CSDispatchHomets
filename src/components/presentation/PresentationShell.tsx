import React, { useRef, useState, useEffect, useCallback } from "react";
import { slides } from "./slideData";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobilePresentation } from "./MobilePresentation";
import { Search, X, Sun, Moon } from "lucide-react";

export const PresentationShell: React.FC = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobilePresentation />;
  return <ScrollablePresentation />;
};

const ScrollablePresentation: React.FC = () => {
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

  // Keyboard shortcut: Ctrl+K for search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const query = searchQuery.toLowerCase().trim();
  const filteredSlides = query
    ? slides.map((slide, i) => ({
        ...slide,
        originalIndex: i,
        match:
          slide.title.toLowerCase().includes(query) ||
          (slide.keywords?.toLowerCase().includes(query) ?? false),
      })).filter((s) => s.match)
    : slides.map((slide, i) => ({ ...slide, originalIndex: i, match: true }));

  // Theme colors
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
  const badgeActive = lightMode ? "bg-[hsl(15,90%,55%)] text-white" : "bg-[hsl(15,90%,55%)] text-white";
  const badgeInactive = lightMode ? "bg-gray-200 text-gray-500" : "bg-white/10 text-white/40";

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: bg }}>
      {/* Left sidebar navigation */}
      <div
        className="w-56 flex-shrink-0 flex flex-col h-full"
        style={{ background: sidebarBg, borderRight: `1px solid ${borderColor}` }}
      >
        <div
          className="h-12 flex items-center px-4 flex-shrink-0"
          style={{ borderBottom: `1px solid ${borderColor}` }}
        >
          <span className={`text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
            Slides
          </span>
        </div>
        <div className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {(query ? filteredSlides : slides.map((s, i) => ({ ...s, originalIndex: i }))).map(
            (slide, _, __, i = slide.originalIndex) => (
              <button
                key={i}
                onClick={() => {
                  scrollToSlide(i);
                  if (query) { setSearchQuery(""); setSearchOpen(false); }
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${
                  i === activeIndex
                    ? `${activeBg} font-medium`
                    : `${textMuted} ${hoverBg}`
                }`}
              >
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                    i === activeIndex ? badgeActive : badgeInactive
                  }`}
                >
                  {i + 1}
                </span>
                <span className="truncate">{slide.title}</span>
              </button>
            )
          )}
          {query && filteredSlides.length === 0 && (
            <p className={`text-xs px-3 py-4 ${textMuted}`}>No matching slides</p>
          )}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div
          className="h-12 flex items-center justify-between px-5 flex-shrink-0 backdrop-blur-md"
          style={{ background: headerBg, borderBottom: `1px solid ${borderColor}` }}
        >
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${textMuted}`}>
              Customer Service & Dispatch Guide
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center rounded-lg px-3 py-1.5 gap-2"
                  style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}
                >
                  <Search className={`w-3.5 h-3.5 ${textMuted}`} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search slides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`bg-transparent text-sm outline-none w-48 ${textPrimary} placeholder:${textMuted}`}
                    autoFocus
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className={textMuted}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className={`text-xs ${textMuted} hover:${textPrimary}`}
                >
                  Esc
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setTimeout(() => searchInputRef.current?.focus(), 100);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${textMuted}`}
                style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd
                  className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono"
                  style={{ background: lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,18%)" }}
                >
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Light/dark toggle */}
            <button
              onClick={() => setLightMode((v) => !v)}
              className={`p-2 rounded-lg transition-all ${textMuted}`}
              style={{ background: lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,12%)", border: `1px solid ${borderColor}` }}
              title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            >
              {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Slide counter */}
            <span className={`text-xs ${textSubtle}`}>
              {activeIndex + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Scrollable slides */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {slides.map((slide, i) => {
            const SlideComponent = slide.component;
            const isHighlighted = query && filteredSlides.some((s) => s.originalIndex === i);
            const isDimmed = query && !isHighlighted;

            return (
              <div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                data-slide-index={i}
                className={`rounded-xl overflow-hidden shadow-lg transition-opacity duration-300 ${
                  isDimmed ? "opacity-20" : "opacity-100"
                }`}
                style={{
                  background: cardBg,
                  border: isHighlighted
                    ? "2px solid hsl(15,90%,55%)"
                    : `1px solid ${borderColor}`,
                }}
              >
                <div className="slide-content p-6 md:p-8">
                  <SlideComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
