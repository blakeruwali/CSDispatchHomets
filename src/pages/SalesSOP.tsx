import React, { useMemo } from "react";
import { Handshake, Compass, DoorOpen, Layers, CheckCircle2, MessageSquareWarning, BookOpen, Scale } from "lucide-react";
import { salesSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const ACCENT = "hsl(15,90%,55%)";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "sales-foundations": { icon: Compass, color: ACCENT },
  "sales-visit": { icon: DoorOpen, color: "hsl(200,80%,55%)" },
  "sales-presenting": { icon: Layers, color: "hsl(38,92%,50%)" },
  "sales-closing": { icon: CheckCircle2, color: "hsl(145,60%,42%)" },
  "sales-objections": { icon: MessageSquareWarning, color: "hsl(0,78%,55%)" },
  "sales-reference": { icon: BookOpen, color: "hsl(220,60%,55%)" },
  governance: { icon: Scale, color: "hsl(260,60%,60%)" },
};

const SalesSOP: React.FC = () => {
  // Content is bundled at build time, so this is computed once.
  const sections = useMemo(() => salesSections(), []);

  return (
    <DocsLayout
      shortTitle="Sales SOP"
      title="In-Home Sales Standard Operating Procedures"
      icon={Handshake}
      accent={ACCENT}
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default SalesSOP;
