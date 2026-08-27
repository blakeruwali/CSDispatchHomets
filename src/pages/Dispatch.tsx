import React, { useMemo } from "react";
import { Radio, Clock, LayoutList, Settings } from "lucide-react";
import { dispatchSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "dispatch-foundations": { icon: Clock, color: "hsl(200,80%,55%)" },
  "dispatch-board": { icon: LayoutList, color: "hsl(15,90%,55%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const Dispatch: React.FC = () => {
  // Content is bundled at build time, so this is computed once.
  const sections = useMemo(() => dispatchSections(), []);

  return (
    <DocsLayout
      shortTitle="Dispatch SOP"
      title="Dispatch Standard Operating Procedures"
      icon={Radio}
      accent="hsl(200,80%,55%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Dispatch;
