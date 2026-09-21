import React, { useMemo } from "react";
import { Star, Settings } from "lucide-react";
import { reviewsSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "review-program": { icon: Star, color: "hsl(45,100%,55%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const Reviews: React.FC = () => {
  const sections = useMemo(() => reviewsSections(), []);

  return (
    <DocsLayout
      shortTitle="Reviews SOP"
      title="Reviews — Program & Asks"
      icon={Star}
      accent="hsl(45,100%,55%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Reviews;
