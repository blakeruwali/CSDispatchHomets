import React, { useMemo } from "react";
import {
  Headphones, BookOpen, Users, ClipboardList, Calendar, Phone, CheckSquare, Settings,
} from "lucide-react";
import { csmSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  foundations: { icon: BookOpen, color: "hsl(200,80%,55%)" },
  interaction: { icon: Users, color: "hsl(15,90%,55%)" },
  intake: { icon: ClipboardList, color: "hsl(270,60%,55%)" },
  booking: { icon: Calendar, color: "hsl(145,60%,45%)" },
  channels: { icon: Phone, color: "hsl(25,100%,60%)" },
  "post-booking": { icon: CheckSquare, color: "hsl(180,60%,45%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const CSM: React.FC = () => {
  // Content is bundled at build time, so this is computed once.
  const sections = useMemo(() => csmSections(), []);

  return (
    <DocsLayout
      shortTitle="CSM SOP"
      title="CSM Standard Operating Procedures"
      icon={Headphones}
      accent="hsl(15,90%,55%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default CSM;
