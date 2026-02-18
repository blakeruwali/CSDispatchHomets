import React from "react";
import { kbSections } from "./kbData";
import { KBSection } from "./KBSection";

interface KnowledgeBaseProps {
  lightMode: boolean;
  searchQuery?: string;
}

export const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ lightMode, searchQuery }) => {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
      {kbSections.map((section) => (
        <div key={section.id} id={`kb-${section.id}`}>
          <KBSection
            section={section}
            lightMode={lightMode}
            searchQuery={searchQuery}
          />
        </div>
      ))}
      {searchQuery && kbSections.every((s) => {
        const q = searchQuery.toLowerCase().trim();
        return s.articles.every(
          (a) => !a.title.toLowerCase().includes(q) && !a.keywords.toLowerCase().includes(q)
        );
      }) && (
        <p className={`text-sm text-center py-8 ${lightMode ? "text-gray-400" : "text-white/40"}`}>
          No matching articles found
        </p>
      )}
    </div>
  );
};
