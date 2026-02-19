import React, { useState } from "react";
import { kbSections } from "../../knowledge-base/kbData";
import { ChevronDown } from "lucide-react";

const ORANGE = "hsl(15, 90%, 55%)";
const SURFACE2 = "hsl(0, 0%, 14%)";
const TEXT = "hsl(0, 0%, 95%)";
const MUTED = "hsl(0, 0%, 60%)";
const BORDER = "hsl(0, 0%, 18%)";

export const MobileKBView: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openArticle, setOpenArticle] = useState<string | null>(null);

  return (
    <div className="px-4 py-6 space-y-3">
      <h2 className="text-xl font-bold mb-4" style={{ color: TEXT, fontFamily: "'Playfair Display', serif" }}>
        <span style={{ color: ORANGE }}>— </span>Knowledge Base
      </h2>
      {kbSections.map((section) => {
        const isOpen = openSection === section.id;
        const Icon = section.icon;
        return (
          <div key={section.id} className="rounded-xl overflow-hidden" style={{ background: SURFACE2 }}>
            <button
              onClick={() => setOpenSection(isOpen ? null : section.id)}
              className="w-full flex items-center gap-3 p-4 text-left"
              style={{ color: TEXT }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: section.iconColor }}>
                <Icon className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm">{section.title}</div>
                <div className="text-xs" style={{ color: MUTED }}>{section.articles.length} articles</div>
              </div>
              <ChevronDown
                className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                style={{ color: MUTED, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 space-y-2">
                {section.articles.map((article, ai) => {
                  const artKey = `${section.id}-${ai}`;
                  const artOpen = openArticle === artKey;
                  return (
                    <div key={ai} className="rounded-lg overflow-hidden" style={{ background: "hsl(0,0%,10%)" }}>
                      <button
                        onClick={() => setOpenArticle(artOpen ? null : artKey)}
                        className="w-full flex items-center justify-between p-3 text-left"
                        style={{ color: TEXT }}
                      >
                        <span className="text-sm font-medium">{article.title}</span>
                        <ChevronDown
                          className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200"
                          style={{ color: MUTED, transform: artOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>
                      {artOpen && (
                        <div className="px-3 pb-3 text-sm" style={{ color: TEXT, borderTop: `1px solid ${BORDER}` }}>
                          {article.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
