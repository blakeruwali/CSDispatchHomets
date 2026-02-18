import React, { useState, useCallback, useEffect } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { slides } from "./slideData";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobilePresentation } from "./MobilePresentation";

export const PresentationShell: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobilePresentation />;

  return <DesktopPresentation />;
};

const DesktopPresentation: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [showGrid, setShowGrid] = useState(false);

  const go = useCallback((dir: number) => {
    setCurrent((c) => Math.max(0, Math.min(slides.length - 1, c + dir)));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); }
      if (e.key === "f" || e.key === "F") toggleFullscreen();
      if (e.key === "g" || e.key === "G") setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, toggleFullscreen, showGrid]);

  const SlideComponent = slides[current].component;

  if (showGrid) {
    return (
      <div className="fixed inset-0 z-50 overflow-auto p-8" style={{ background: "hsl(0,0%,5%)" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">All Slides</h2>
          <button onClick={() => setShowGrid(false)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <button key={i} onClick={() => { setCurrent(i); setShowGrid(false); }}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-[1.03] ${
                i === current ? "border-[hsl(15,90%,55%)]" : "border-white/10"
              }`}
              style={{ background: "hsl(0,0%,8%)" }}>
              <div className="w-full h-full overflow-hidden relative">
                <div style={{ transform: "scale(0.15)", transformOrigin: "top left", width: 1920, height: 1080 }}>
                  <div className="slide-content w-full h-full"><slide.component /></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
                <p className="text-xs text-white/80 text-left">{i + 1}. {slide.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: "hsl(0,0%,5%)" }}>
      {showThumbnails && !isFullscreen && (
        <div className="w-52 flex-shrink-0 overflow-y-auto border-r border-white/10 p-3 space-y-2"
          style={{ background: "hsl(0,0%,7%)" }}>
          {slides.map((slide, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-full aspect-video rounded-md overflow-hidden border-2 transition-all ${
                i === current ? "border-[hsl(15,90%,55%)] ring-1 ring-[hsl(15,90%,55%)]" : "border-white/10 hover:border-white/30"
              }`}>
              <div className="w-full h-full overflow-hidden relative" style={{ background: "hsl(0,0%,8%)" }}>
                <div style={{ transform: "scale(0.09)", transformOrigin: "top left", width: 1920, height: 1080 }}>
                  <div className="slide-content w-full h-full"><slide.component /></div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {!isFullscreen && (
          <div className="h-12 flex items-center justify-between px-4 border-b border-white/10 flex-shrink-0"
            style={{ background: "hsl(0,0%,7%)" }}>
            <div className="flex items-center gap-3">
              <button onClick={() => setShowThumbnails((v) => !v)}
                className="text-white/60 hover:text-white text-sm transition-colors">
                {showThumbnails ? "Hide" : "Show"} Thumbnails
              </button>
              <button onClick={() => setShowGrid(true)}
                className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
            <span className="text-white/40 text-sm font-medium">
              Customer Service & Dispatch Guide
            </span>
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-sm">
                {current + 1} / {slides.length}
              </span>
              <button onClick={toggleFullscreen}
                className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={current} className="absolute inset-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <ScaledSlide>
                <SlideComponent />
              </ScaledSlide>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => go(-1)} disabled={current === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white/60 hover:text-white disabled:opacity-0 transition-all backdrop-blur z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => go(1)} disabled={current === slides.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white/60 hover:text-white disabled:opacity-0 transition-all backdrop-blur z-10">
            <ChevronRight className="w-6 h-6" />
          </button>

          {isFullscreen && (
            <button onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white/40 hover:text-white transition-all backdrop-blur z-10">
              <Minimize className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
