import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { KBSectionData } from "./kbData";

interface KBSectionProps {
  section: KBSectionData;
  lightMode: boolean;
  searchQuery?: string;
}

export const KBSection: React.FC<KBSectionProps> = ({ section, lightMode, searchQuery }) => {
  const Icon = section.icon;
  const surfaceBg = lightMode ? "hsl(0,0%,96%)" : "hsl(0,0%,11%)";
  const cardBg = lightMode ? "hsl(0,0%,100%)" : "hsl(0,0%,8%)";
  const borderColor = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,18%)";
  const textPrimary = lightMode ? "text-gray-900" : "text-white";
  const textMuted = lightMode ? "text-gray-500" : "text-white/60";

  const query = searchQuery?.toLowerCase().trim() || "";
  const filteredArticles = query
    ? section.articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.keywords.toLowerCase().includes(query)
      )
    : section.articles;

  if (query && filteredArticles.length === 0) return null;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: cardBg, border: `1px solid ${borderColor}` }}
    >
      <div className="p-5 flex items-center gap-4" style={{ borderBottom: `1px solid ${borderColor}` }}>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${section.iconColor}, ${section.iconColor}cc)` }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className={`text-lg font-bold ${textPrimary}`}>{section.title}</h2>
          <p className={`text-xs ${textMuted}`}>{section.description}</p>
        </div>
      </div>

      <Accordion type="multiple" className="px-4 pb-2">
        {filteredArticles.map((article, i) => (
          <AccordionItem
            key={i}
            value={`${section.id}-${i}`}
            className="border-b-0"
            style={{ borderBottom: i < filteredArticles.length - 1 ? `1px solid ${borderColor}` : "none" }}
          >
            <AccordionTrigger
              className={`text-sm font-semibold hover:no-underline py-3 ${textPrimary}`}
            >
              {article.title}
            </AccordionTrigger>
            <AccordionContent>
              <div
                className={`text-sm leading-relaxed pb-3 ${lightMode ? "text-gray-700" : "text-white/75"}`}
              >
                {article.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
