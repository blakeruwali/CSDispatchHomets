import React from "react";
import {
  BookOpen, Users, ClipboardList, Calendar,
  Phone, CheckSquare, Settings, FileText, AlertTriangle,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import type { ContentDoc, ContentSection } from "@/lib/content";
import { MarkdownBody } from "./MarkdownBody";

/** Visual identity per SOP part, keyed by the `section` slug in frontmatter. */
const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  foundations:    { icon: BookOpen,      color: "hsl(200,80%,55%)" },
  interaction:    { icon: Users,         color: "hsl(15,90%,55%)" },
  intake:         { icon: ClipboardList, color: "hsl(270,60%,55%)" },
  booking:        { icon: Calendar,      color: "hsl(145,60%,45%)" },
  channels:       { icon: Phone,         color: "hsl(25,100%,60%)" },
  "post-booking": { icon: CheckSquare,   color: "hsl(180,60%,45%)" },
  governance:     { icon: Settings,      color: "hsl(0,78%,50%)" },
};

const STATUS_BADGE: Record<string, { label: string; color: string } | null> = {
  published: null, // the normal case needs no badge
  "draft-needed": { label: "Not yet written", color: "hsl(0,78%,50%)" },
  "in-review": { label: "In review", color: "hsl(40,90%,55%)" },
  draft: { label: "Draft", color: "hsl(0,0%,50%)" },
  archived: { label: "Archived", color: "hsl(0,0%,40%)" },
};

interface ContentSectionCardProps {
  section: ContentSection;
  lightMode: boolean;
  searchQuery?: string;
  openDocId?: string;
  onNavigate?: (id: string) => void;
}

export const ContentSectionCard: React.FC<ContentSectionCardProps> = ({
  section, lightMode, searchQuery, openDocId, onNavigate,
}) => {
  const style = SECTION_STYLE[section.id] ?? { icon: FileText, color: "hsl(0,0%,50%)" };
  const Icon = style.icon;

  const cardBg = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,8%)";
  const borderColor = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,18%)";
  const textPrimary = lightMode ? "text-gray-900" : "text-white";
  const textMuted = lightMode ? "text-gray-500" : "text-white/60";

  const query = searchQuery?.toLowerCase().trim() || "";
  const docs = query
    ? section.docs.filter((d) => d.haystack.includes(query))
    : section.docs;

  if (query && docs.length === 0) return null;

  // Controlled when a cross-reference opened a specific doc; free otherwise.
  const forced = openDocId && docs.some((d) => d.id === openDocId) ? [openDocId] : undefined;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: cardBg, border: `1px solid ${borderColor}` }}
    >
      <div className="p-5 flex items-center gap-4" style={{ borderBottom: `1px solid ${borderColor}` }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${style.color}, ${style.color}cc)` }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className={`text-lg font-bold ${textPrimary}`}>{section.title}</h2>
          <p className={`text-xs ${textMuted}`}>{section.description}</p>
        </div>
      </div>

      <Accordion
        type="multiple"
        className="px-4 pb-2"
        {...(forced ? { value: forced } : {})}
      >
        {docs.map((doc, i) => (
          <DocItem
            key={doc.id}
            doc={doc}
            last={i === docs.length - 1}
            lightMode={lightMode}
            borderColor={borderColor}
            textPrimary={textPrimary}
            onNavigate={onNavigate}
          />
        ))}
      </Accordion>
    </div>
  );
};

interface DocItemProps {
  doc: ContentDoc;
  last: boolean;
  lightMode: boolean;
  borderColor: string;
  textPrimary: string;
  onNavigate?: (id: string) => void;
}

const DocItem: React.FC<DocItemProps> = ({
  doc, last, lightMode, borderColor, textPrimary, onNavigate,
}) => {
  const badge = STATUS_BADGE[doc.status];

  return (
    <AccordionItem
      value={doc.id}
      id={`doc-${doc.id}`}
      className="border-b-0 scroll-mt-20"
      style={{ borderBottom: last ? "none" : `1px solid ${borderColor}` }}
    >
      <AccordionTrigger className={`text-sm font-semibold hover:no-underline py-3 ${textPrimary}`}>
        <span className="flex items-center gap-2 text-left">
          {doc.title}
          {badge && (
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide"
              style={{ background: `${badge.color}22`, color: badge.color }}
            >
              {badge.label}
            </span>
          )}
          {doc.stale && (
            <span
              className="flex items-center gap-1 text-[10px] font-medium"
              style={{ color: "hsl(40,90%,55%)" }}
              title={`Last reviewed ${doc.lastReviewed} — past its ${doc.reviewCadenceDays}-day cadence`}
            >
              <AlertTriangle className="w-3 h-3" />
              Stale
            </span>
          )}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div className="pb-3">
          <MarkdownBody markdown={doc.body} lightMode={lightMode} onNavigate={onNavigate} />
          <p className={`mt-4 text-[10px] ${lightMode ? "text-gray-400" : "text-white/30"}`}>
            {doc.id} · v{doc.version} · owner: {doc.owner} · reviewed {doc.lastReviewed} · {doc.path}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
