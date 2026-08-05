import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search, X, Sun, Moon, ArrowLeft, ArrowRight, AlertTriangle, Menu, PencilLine, Languages,
} from "lucide-react";
import { MarkdownBody } from "./MarkdownBody";
import { BrandMark, BrandFooter } from "./BrandMark";
import { LOCALE_LABEL, translateDoc, type Locale, type TranslationSource } from "@/lib/translate";
import { t, sectionTitle } from "@/lib/i18n";
import { SuggestEditDialog } from "./SuggestEditDialog";
import { AcknowledgePanel } from "./AcknowledgePanel";
import { DocHeader } from "./DocHeader";
import { useAuth } from "@/hooks/useAuth";
import {
  ackState, myAcknowledgements, type AcknowledgementRecord,
} from "@/lib/acknowledgements";
import {
  flattenDocs, headings, clauseNumbers, docNumbers, numberSections, inForce,
  type ContentDoc, type ContentSection,
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
  const numbered = useMemo(() => numberSections(sections), [sections]);
  const numbers = useMemo(() => docNumbers(sections), [sections]);
  const [activeId, setActiveId] = useState<string | null>(ordered[0]?.id ?? null);
  const [query, setQuery] = useState("");
  // Documentation defaults to light. A governing document should read like a
  // document, not like app furniture; the toggle is still there for anyone who
  // prefers dark.
  const [lightMode, setLightMode] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [suggesting, setSuggesting] = useState(false);
  // Field crews read these documents in Spanish. English remains the governing
  // text, so the toggle changes the reading language, never the record.
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      return (window.localStorage.getItem("homets.locale") as Locale) ?? "en";
    } catch {
      return "en";
    }
  });
  const [translated, setTranslated] = useState<string | null>(null);
  const [translationSource, setTranslationSource] = useState<TranslationSource | null>(null);
  const [translating, setTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [translateNonce, setTranslateNonce] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Held here rather than in the panel so the sidebar can mark, at a glance,
  // which binding documents this reader still owes an acknowledgement on.
  const { user, loading: authLoading } = useAuth();
  const [acks, setAcks] = useState<Record<string, AcknowledgementRecord>>({});
  const [acksLoading, setAcksLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    if (authLoading) return;
    if (!user) {
      setAcks({});
      setAcksLoading(false);
      return;
    }
    setAcksLoading(true);
    void myAcknowledgements().then((all) => {
      if (cancelled) return;
      setAcks(all);
      setAcksLoading(false);
    });
    return () => { cancelled = true; };
  }, [user, authLoading]);

  const recordAck = useCallback((record: AcknowledgementRecord) => {
    setAcks((prev) => ({ ...prev, [record.docId]: record }));
  }, []);

  /** True when a document binds the reader and they have not signed this
   *  version of it — an outstanding obligation, not merely an unread page. */
  const outstanding = useCallback(
    (d: ContentDoc) =>
      Boolean(user) && d.requiresAck && inForce(d) && ackState(d, acks[d.id]) !== "current",
    [user, acks],
  );

  const doc = useMemo(
    () => ordered.find((d) => d.id === activeId) ?? ordered[0],
    [ordered, activeId],
  );

  useEffect(() => {
    try {
      window.localStorage.setItem("homets.locale", locale);
    } catch {
      // Preference is a convenience; failing to persist it is not an error.
    }
  }, [locale]);

  useEffect(() => {
    let cancelled = false;
    setTranslationError(null);
    if (!doc || locale === "en") {
      setTranslated(null);
      setTranslationSource(null);
      setTranslating(false);
      return;
    }
    setTranslating(true);
    void translateDoc(doc, locale)
      .then((result) => {
        if (cancelled) return;
        setTranslated(result.markdown);
        setTranslationSource(result.source);
      })
      .catch((error: Error) => {
        if (cancelled) return;
        setTranslated(null);
        setTranslationSource(null);
        setTranslationError(error.message);
      })
      .finally(() => {
        if (!cancelled) setTranslating(false);
      });
    return () => { cancelled = true; };
  }, [doc, locale, translateNonce]);

  const toc = useMemo(() => (doc ? headings(doc) : []), [doc]);
  const clauses = useMemo(
    () => (doc ? clauseNumbers(doc, numbers[doc.id] ?? "") : {}),
    [doc, numbers],
  );
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
    // A cross-reference can point at a document that lives on another surface;
    // following it here would silently dump the reader on document 1.
    if (!ordered.some((d) => d.id === id)) return;
    setActiveId(id);
    setNavOpen(false);
    // A new document always starts at its beginning, never mid-scroll.
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: 0 }));
  }, [ordered]);

  const onThisSurface = useCallback(
    (id: string) => ordered.some((d) => d.id === id),
    [ordered],
  );

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
        <div className="relative flex-shrink-0">
          <BrandMark accent={accent} subtitle={shortTitle} />
          <button
            onClick={() => setNavOpen(false)}
            className="absolute right-3 top-3 text-white/60 md:hidden"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div
          className="flex flex-shrink-0 items-center gap-2 px-5 py-2"
          style={{ borderBottom: `1px solid ${border}` }}
        >
          <TitleIcon className="h-3.5 w-3.5" style={{ color: accent }} />
          <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${textMuted}`}>
            {locale === "es" ? "Manual Operativo" : "Operations Manual"}
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {matches ? (
            <>
              <p className={`px-2 pb-2 text-[11px] uppercase tracking-wider ${textFaint}`}>
                {matches.length} {matches.length === 1 ? t("result", locale) : t("results", locale)}
              </p>
              {matches.map((d) => (
                <NavItem
                  key={d.id}
                  doc={d}
                  number={numbers[d.id]}
                  active={d.id === doc.id}
                  needsAck={outstanding(d)}
                  accent={accent}
                  textMuted={textMuted}
                  textStrong={textStrong}
                  hover={hover}
                  onClick={() => openDoc(d.id)}
                />
              ))}
              {matches.length === 0 && (
                <p className={`px-2 py-3 text-xs ${textMuted}`}>{t("noMatches", locale)}</p>
              )}
            </>
          ) : (
            numbered.map((section) => {
              const style = sectionStyle[section.id];
              const Icon = style?.icon;
              return (
                <div key={section.id} className="mb-5">
                  <div className="mb-1.5 flex items-center gap-2 px-2">
                    {Icon && (
                      <Icon className="h-3 w-3 flex-shrink-0" style={{ color: style.color }} />
                    )}
                    <p className={`text-[11px] font-semibold uppercase tracking-wider ${textFaint}`}>
                      {t("part", locale)} {section.number} — {sectionTitle(section.id, section.title, locale)}
                    </p>
                  </div>
                  {section.numbered.map(({ doc: d, number }) => (
                    <NavItem
                      key={d.id}
                      doc={d}
                      number={number}
                      active={d.id === doc.id}
                      needsAck={outstanding(d)}
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
              {t("backToGuide", locale)}
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
                placeholder={t("search", locale)}
                className={`w-28 bg-transparent text-sm outline-none sm:w-48 ${textStrong}`}
              />
              {query && (
                <button onClick={() => setQuery("")} className={textMuted} aria-label="Clear">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div
              className="flex items-center gap-0.5 rounded-lg p-0.5"
              style={{
                background: lightMode ? "hsl(0,0%,95%)" : "hsl(0,0%,12%)",
                border: `1px solid ${border}`,
              }}
              title={t("language", locale)}
            >
              {(["en", "es"] as Locale[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`rounded-md px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                    code === locale ? "" : textMuted
                  }`}
                  style={
                    code === locale
                      ? { background: accent, color: "hsl(0,0%,100%)" }
                      : undefined
                  }
                >
                  {code === "en" ? "EN" : "ES"}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLightMode((v) => !v)}
              className={`rounded-lg p-2 ${textMuted}`}
              style={{
                background: lightMode ? "hsl(0,0%,95%)" : "hsl(0,0%,12%)",
                border: `1px solid ${border}`,
              }}
              title={lightMode ? t("darkMode", locale) : t("lightMode", locale)}
            >
              {lightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <div className="mx-auto flex max-w-[78rem] gap-10 px-5 py-10 md:px-10">
            {/* ------------------------------------------------- document */}
            <article className="doc-article min-w-0 flex-1 max-w-[46rem]">
              <DocHeader
                doc={doc}
                number={numbers[doc.id] ?? ""}
                partTitle={sections.find((s) => s.docs.some((d) => d.id === doc.id))?.title ?? ""}
                lightMode={lightMode}
              />

              <div className="-mt-4 mb-8 flex justify-end print:hidden">
                {/* The person who just found the script wrong is the person on
                    the call. Catch it here, or it never gets filed. */}
                <button
                  onClick={() => setSuggesting(true)}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] font-medium transition-colors ${textMuted} ${hover}`}
                  style={{ border: `1px solid ${border}` }}
                >
                  <PencilLine className="h-3 w-3" />
                  {t("suggestEdit", locale)}
                </button>
              </div>

              <div className="mt-8">
                {locale !== "en" && (
                  <div
                    className="mb-6 flex flex-wrap items-center gap-2 rounded-lg px-3 py-2 text-[12px]"
                    style={{
                      background: lightMode ? "hsl(200,60%,96%)" : "hsl(200,60%,12%)",
                      border: `1px solid ${border}`,
                    }}
                  >
                    <Languages className="h-3.5 w-3.5" style={{ color: accent }} />
                    <span className={textMuted}>
                      {translating
                        ? t("translating", locale)
                        : translationError
                          ? t("translationFailed", locale)
                          : translationSource === "authored"
                            ? `${LOCALE_LABEL[locale]} · ${doc.version ? `v${doc.version}` : ""}`
                            : t("machineNotice", locale)}
                    </span>
                    {translationError && (
                      <button
                        onClick={() => setTranslateNonce((n) => n + 1)}
                        className="font-semibold underline"
                        style={{ color: accent }}
                      >
                        {t("retry", locale)}
                      </button>
                    )}
                  </div>
                )}

                <MarkdownBody
                  markdown={translated ?? doc.body}
                  lightMode={lightMode}
                  clauses={clauses}
                  onNavigate={openDoc}
                  canNavigate={onThisSurface}
                />
              </div>

              {/* Only documents that impose a duty ask to be signed. Asking on
                  a reference table would train people to click past it. */}
              {doc.requiresAck && inForce(doc) && (
                <AcknowledgePanel
                  key={doc.id}
                  doc={doc}
                  number={numbers[doc.id] ?? ""}
                  record={acks[doc.id]}
                  loading={acksLoading && Boolean(user)}
                  onAcknowledged={recordAck}
                  lightMode={lightMode}
                  accent={accent}
                />
              )}

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
                      <ArrowLeft className="h-3 w-3" /> {t("previous", locale)}
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
                      {t("next", locale)} <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className={`mt-0.5 block text-sm font-medium ${textStrong}`}>
                      {next.title}
                    </span>
                  </button>
                )}
              </nav>

              <BrandFooter lightMode={lightMode} />

              <p className={`mt-4 text-[11px] ${textFaint}`}>
                {doc.id} · {doc.path}
              </p>
            </article>

            {/* ------------------------------------------------- contents */}
            {toc.length > 1 && (
              <aside className="hidden w-56 flex-shrink-0 xl:block print:hidden">
                <div className="sticky top-4">
                  <p className={`mb-3 text-[11px] font-semibold uppercase tracking-wider ${textFaint}`}>
                    {t("onThisPage", locale)}
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
                            {h.clause && clauses[h.id] && (
                              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                                {clauses[h.id]}{" "}
                              </span>
                            )}
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

      {suggesting && (
        <SuggestEditDialog
          doc={doc}
          headings={toc}
          activeHeading={activeHeading}
          lightMode={lightMode}
          accent={accent}
          onClose={() => setSuggesting(false)}
        />
      )}
    </div>
  );
};

interface NavItemProps {
  doc: ContentDoc;
  number?: string;
  active: boolean;
  /** Binding on this reader and not yet acknowledged at this version. */
  needsAck?: boolean;
  accent: string;
  textMuted: string;
  textStrong: string;
  hover: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  doc, number, active, needsAck, accent, textMuted, textStrong, hover, onClick,
}) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] leading-snug transition-colors ${
      active ? textStrong : `${textMuted} ${hover}`
    }`}
    style={active ? { background: `${accent}1a`, color: accent } : undefined}
  >
    {number && (
      <span className="flex-shrink-0 tabular-nums opacity-50">{number}</span>
    )}
    {/* Wraps rather than truncates — several SOP titles are long, and a
        half-shown title is harder to scan than a two-line one. */}
    <span className="min-w-0 flex-1 line-clamp-2">{doc.title}</span>
    {needsAck && (
      <span
        title="Needs your acknowledgement"
        className="flex-shrink-0 rounded-sm px-1 py-px text-[9px] font-bold uppercase tracking-wide"
        style={{ background: "hsl(38,92%,45%,0.18)", color: "hsl(38,92%,38%)" }}
      >
        Sign
      </span>
    )}
    {doc.status === "draft-needed" && (
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "hsl(0,78%,55%)" }} />
    )}
    {doc.status === "in-review" && (
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "hsl(40,90%,55%)" }} />
    )}
  </button>
);
