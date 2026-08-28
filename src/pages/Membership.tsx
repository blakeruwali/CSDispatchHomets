import React, { useMemo } from "react";
import { BadgeCheck, Settings } from "lucide-react";
import { membershipSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "membership-program": { icon: BadgeCheck, color: "hsl(150,65%,42%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const Membership: React.FC = () => {
  const sections = useMemo(() => membershipSections(), []);

  return (
    <DocsLayout
      shortTitle="Membership SOP"
      title="Membership — Plans, Pricing & Upgrades"
      icon={BadgeCheck}
      accent="hsl(150,65%,42%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Membership;
