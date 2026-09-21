import React, { useMemo } from "react";
import { ShieldCheck, Settings } from "lucide-react";
import { insuranceSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "insurance-claims": { icon: ShieldCheck, color: "hsl(205,80%,50%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const Insurance: React.FC = () => {
  const sections = useMemo(() => insuranceSections(), []);

  return (
    <DocsLayout
      shortTitle="Insurance SOP"
      title="Insurance & Home Warranty Claims"
      icon={ShieldCheck}
      accent="hsl(205,80%,50%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Insurance;
