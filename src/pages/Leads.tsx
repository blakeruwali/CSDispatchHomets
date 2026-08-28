import React, { useMemo } from "react";
import { Megaphone, PhoneCall, LifeBuoy, Settings } from "lucide-react";
import { leadsSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "leads-recovery": { icon: LifeBuoy, color: "hsl(25,100%,60%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const Leads: React.FC = () => {
  const sections = useMemo(() => leadsSections(), []);

  return (
    <DocsLayout
      shortTitle="Leads SOP"
      title="Leads — Recovery & Rescue"
      icon={Megaphone}
      accent="hsl(25,100%,60%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Leads;
