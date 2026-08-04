import React, { useMemo } from "react";
import { Wrench, ClipboardCheck, HardHat, FileText, Scale } from "lucide-react";
import { fieldSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "field-standards": { icon: ClipboardCheck, color: "hsl(15,90%,55%)" },
  "field-safety": { icon: HardHat, color: "hsl(0,78%,50%)" },
  "field-documentation": { icon: FileText, color: "hsl(200,80%,55%)" },
  governance: { icon: Scale, color: "hsl(260,60%,60%)" },
};

const Field: React.FC = () => {
  // Content is bundled at build time, so this is computed once.
  const sections = useMemo(() => fieldSections(), []);

  return (
    <DocsLayout
      shortTitle="Field SOP"
      title="Technician Standard Operating Procedures"
      icon={Wrench}
      accent="hsl(15,90%,55%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Field;
