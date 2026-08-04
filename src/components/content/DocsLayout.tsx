import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search, X, Sun, Moon, ArrowLeft, ArrowRight, AlertTriangle, Menu,
} from "lucide-react";
import { MarkdownBody } from "./MarkdownBody";
import {
  flattenDocs, headings, type ContentDoc, type ContentSection,
} from "@/lib/content";

const STATUS_BADGE: Record<string, { label: string; color: string } | null> = {
  published: null,
  "draft-needed": { label: "Not yet written", color: "hsl(0,78%,55%)" },
  "in-review": { label: "In review", color: "hsl(40,90%,55%)" },
  draft: { label: "Draft", color: "hsl(0,0%,55%)" },
  archived: { label: "Archived", color: "hsl(0,0%,45%)" },
};

/** Tracks which heading is currently in view, for the contents rail. */
function useActiveHeading(ids: string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || ids.length === 0) return;
    setActive(ids[0]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // Bias toward the upper third so the heading you're reading under wins,
      // rather than one that has only just entered from the bottom.
      { rootMargin: "-80px 0px -66% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}

export interface DocsLayoutProps {
  /** Shown in the sidebar header, e.g. "CSM SOP". */
  shortTitle: string;
  /** Shown in the top bar. */
  title: string;
  icon: React.ElementType;
  accent: string;
  sections: ContentSection[];
  /** Per-part icon and colour, keyed by section id. */
  sectionStyle: Record<string, { icon: React.ElementType; color: string }>;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({
  shortTitle, title, icon: TitleIcon, accent, sections, sectionStyle,
}) => {
  const ordered = useMemo(() => flattenDocs(sections), [sections]);
  const [activeId, setActiveId] = useState<string | null>(ordered[0]?.id ?? null);
  const [query, setQuery] = useState("");
  const [lightMode, setLightMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const doc = useMemo(
    () => ordered.find((d) => d.id === activeId) ?? ordered[0],
    [ordered, activeId],
  );

  const toc = useMemo(() => (doc ? headings(doc) : []), [doc]);
  const tocIds = useMemo(() => toc.map((h) => h.id), [toc]);
  const activeHeading = useActiveHeading(tocIds, Boolean(doc));

  const q = query.toLowerCase().trim();
  const matches = useMemo(
    () => (q ? ordered.filter((d) => d.haystack.includes(q)) : null),
    [q, ordered],
  );

  const index = doc ? ordered.findIndex((d) => d.id === doc.id) : -1;
  const prev = index > 0 ? ordered[index - 1] : null;
  const next = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null;

  const openDoc = useCallback((id: string) => {
    setActiveId(id);
    setNavOpen(false);
    // A new document always starts at its beginning, never mid-scroll.
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: 0 }));
  }, []);

  const bg = lightMode ? "hsl(0,0%,98%)" : "hsl(0,0%,6%)";
  const railBg = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,8%)";
  const barBg = lightMode ? "hsl(0,0%,100%,0.92)" : "hsl(0,0%,8%,0.92)";
  const border = lightMode ? "hsl(0,0%,90%)" : "hsl(0,0%,100%,0.1)";
  const textStrong = lightMode ? "text-gray-900" : "text-white";
  const textMuted = lightMode ? "text-gray-500" : "text-white/45";
  const textFaint = lightMode ? "text-gray-400" : "text-white/30";
  const hover = lightMode ? "hover:bg-gray-100" : "hover:bg-white/5";

  if (!doc) {
    return (
      <div className="flex h-screen items-center justify-center" style={{ background: bg }}>
        <p className={textMuted}>No documents published to this surface yet.</p>
      </div>
    );
  }

  const badge = STATUS_BADGE[doc.status];

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: bg }}>
      {/* ---------------------------------------------------------- sidebar */}
      <aside
        className={`${navOpen ? "flex" : "hidden"} md:flex absolute md:relative z-30 h-full w-72 flex-shrink-0 flex-col`}
        style={{ background: railBg, borderRight: `1px solid ${border}` }}
      >
        <div
          className="flex h-14 flex-shrink-0 items-center gap-2 px-5"
          style={{ borderBottom: `1px solid ${border}` }}
        >
          <TitleIcon className="h-4 w-4" style={{ color: accent }} />
          <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${textStrong}`}>
            {shortTitle}
          </span>
          <button
            onClick={() => setNavOpen(false)}
            className={`ml-auto md:hidden ${textMuted}`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {matches ? (
            <>
              <p className={`px-2 pb-2 text-[11px] uppercase tracking-wider ${textFaint}`}>
                {matches.length} result{matches.length === 1 ? "" : "s"}
              </p>
              {matches.map((d) => (
                <NavItem
                  key={d.id}
                  doc={d}
                  active={d.id === doc.id}
                  accent={accent}
                  textMuted={textMuted}
                  textStrong={textStrong}
                  hover={hover}
                  onClick={() => openDoc(d.id)}
                />
              ))}
              {matches.length === 0 && (
                <p className={`px-2 py-3 text-xs ${textMuted}`}>No matching documents</p>
              )}
            </>
          ) : (
            sections.map((section) => {
              const style = sectionStyle[section.id];
              const Icon = style?.icon;
              return (
                <div key={section.id} className="mb-5">
                  <div className="mb-1.5 flex items-center gap-2 px-2">
                    {Icon && (
                      <Icon className="h-3 w-3 flex-shrink-0" style={{ color: style.color }} />
                    )}
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${textFaint}`}>
                      {section.title}
                    </p>
                  </div>
                  {section.docs.map((d) => (
                    <NavItem
                      key={d.id}
                      doc={d}
                      active={d.id === doc.id}
                      accent={accent}
                      textMuted={textMuted}
                      textStrong={textStrong}
                      hover={hover}
                      onClick={() => openDoc(d.id)}
                    />
                  ))}
                </div>
              );
            })
          )}
        </nav>
      </aside>

      {/* ------------------------------------------------------------- main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header
          className="flex h-14 flex-shrink-0 items-center justify-between gap-3 px-4 backdrop-blur-md md:px-6"
          style={{ background: barBg, borderBottom: `1px solid ${border}` }}
        >
          <div className="flex min-w-0 items-center gap-2">
            <button
              onClick={() => setNavOpen(true)}
              className={`md:hidden ${textMuted}`}
              aria-label="Open contents"
            >
              <Menu className="h-4 w-4" />
            </button>
            <Link
              to="/"
              className={`hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium sm:flex ${textMuted} ${hover}`}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Dispatch Guide
            </Link>
            <h1 className={`truncate text-sm font-semibold ${textStrong}`}>{title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-1.5"
              style={{
                background: lightMode ? "hsl(0,0%,95%)" : "hsl(0,0%,12%)",
                border: `1px solid ${border}`,
              }}
            >
              <Search className={`h-3.5 w-3.5 ${textMuted}`} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className={`w-28 bg-transparent text-sm outline-none sm:w-48 ${textStrong}`}
              />
              {query && (
                <button onClick={() => setQuery("")} className={textMuted} aria-label="Clear">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setLightMode((v) => !v)}
              className={`rounded-lg p-2 ${textMuted}`}
              style={{
                background: lightMode ? "hsl(0,0%,95%)" : "hsl(0,0%,12%)",
                border: `1px solid ${border}`,
              }}
              title={lightMode ? "Dark mode" : "Light mode"}
            >
              {lightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto flex max-w-[78rem] gap-10 px-5 py-10 md:px-10">
            {/* ------------------------------------------------- document */}
            <article className="doc-article min-w-0 flex-1 max-w-[46rem]">
              <p className={`mb-2 text-[11px] font-medium uppercase tracking-[0.14em] ${textFaint}`}>
                {sections.find((s) => s.docs.some((d) => d.id === doc.id))?.title}
              </p>

              <h1
                className={`text-[2.1rem] font-bold leading-tight tracking-tight ${textStrong}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {doc.title}
              </h1>

              <div className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] ${textFaint}`}>
                <span>v{doc.version}</span>
                <span>·</span>
                <span>Owner: {doc.owner}</span>
                <span>·</span>
                <span>Reviewed {doc.lastReviewed}</span>
                {badge && (
                  <span
                    className="rounded px-1.5 py-0.5 font-semibold uppercase tracking-wide"
                    style={{ background: `${badge.color}22`, color: badge.color }}
                  >
                    {badge.label}
                  </span>
                )}
                {doc.stale && (
                  <span
                    className="flex items-center gap-1 font-medium"
                    style={{ color: "hsl(40,90%,55%)" }}
                    title={`Past its ${doc.reviewCadenceDays}-day review cadence`}
                  >
                    <AlertTriangle className="h-3 w-3" />
                    Stale
                  </span>
                )}
              </div>

              <div className="mt-8">
                <MarkdownBody markdown={doc.body} lightMode={lightMode} onNavigate={openDoc} />
              </div>

              {/* --------------------------------------------- prev / next */}
              <nav
                className="mt-16 grid gap-3 pt-6 sm:grid-cols-2"
                style={{ borderTop: `1px solid ${border}` }}
              >
                {prev ? (
                  <button
                    onClick={() => openDoc(prev.id)}
                    className={`rounded-lg p-3 text-left transition-colors ${hover}`}
                    style={{ border: `1px solid ${border}` }}
                  >
                    <span className={`flex items-center gap-1 text-[11px] ${textFaint}`}>
                      <ArrowLeft className="h-3 w-3" /> Previous
                    </span>
                    <span className={`mt-0.5 block text-sm font-medium ${textStrong}`}>
                      {prev.title}
                    </span>
                  </button>
                ) : (
                  <span />
                )}
                {next && (
                  <button
                    onClick={() => openDoc(next.id)}
                    className={`rounded-lg p-3 text-right transition-colors ${hover}`}
                    style={{ border: `1px solid ${border}` }}
                  >
                    <span className={`flex items-center justify-end gap-1 text-[11px] ${textFaint}`}>
                      Next <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className={`mt-0.5 block text-sm font-medium ${textStrong}`}>
                      {next.title}
                    </span>
                  </button>
                )}
              </nav>

              <p className={`mt-8 text-[11px] ${textFaint}`}>
                {doc.id} · {doc.path}
              </p>
            </article>

            {/* ------------------------------------------------- contents */}
            {toc.length > 1 && (
              <aside className="hidden w-56 flex-shrink-0 xl:block print:hidden">
                <div className="sticky top-4">
                  <p className={`mb-3 text-[11px] font-semibold uppercase tracking-wider ${textFaint}`}>
                    On this page
                  </p>
                  <ul className="space-y-1.5" style={{ borderLeft: `1px solid ${border}` }}>
                    {toc.map((h) => {
                      const isActive = h.id === activeHeading;
                      return (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`block border-l-2 py-0.5 text-[13px] leading-snug transition-colors ${
                              h.level === 3 ? "pl-6" : "pl-3"
                            } ${isActive ? "" : `${textMuted} hover:opacity-80`}`}
                            style={{
                              marginLeft: "-1px",
                              borderColor: isActive ? accent : "transparent",
                              color: isActive ? accent : undefined,
                            }}
                          >
                            {h.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  doc: ContentDoc;
  active: boolean;
  accent: string;
  textMuted: string;
  textStrong: string;
  hover: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  doc, active, accent, textMuted, textStrong, hover, onClick,
}) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] leading-snug transition-colors ${
      active ? textStrong : `${textMuted} ${hover}`
    }`}
    style={active ? { background: `${accent}1a`, color: accent } : undefined}
  >
    {/* Wraps rather than truncates — several SOP titles are long, and a
        half-shown title is harder to scan than a two-line one. */}
    <span className="min-w-0 flex-1 line-clamp-2">{doc.title}</span>
    {doc.status === "draft-needed" && (
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "hsl(0,78%,55%)" }} />
    )}
    {doc.status === "in-review" && (
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "hsl(40,90%,55%)" }} />
    )}
  </button>
);
