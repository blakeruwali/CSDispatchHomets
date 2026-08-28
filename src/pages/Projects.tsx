import React, { useMemo } from "react";
import { HardHat, Route, PackageCheck, Hammer, ClipboardCheck, Settings } from "lucide-react";
import { projectsSections } from "@/lib/content";
import { DocsLayout } from "@/components/content/DocsLayout";

const SECTION_STYLE: Record<string, { icon: React.ElementType; color: string }> = {
  "projects-foundations": { icon: Route, color: "hsl(270,60%,55%)" },
  "projects-preinstall": { icon: PackageCheck, color: "hsl(200,80%,55%)" },
  "projects-install": { icon: Hammer, color: "hsl(15,90%,55%)" },
  "projects-closeout": { icon: ClipboardCheck, color: "hsl(145,60%,45%)" },
  governance: { icon: Settings, color: "hsl(0,78%,50%)" },
};

const Projects: React.FC = () => {
  // Content is bundled at build time, so this is computed once.
  const sections = useMemo(() => projectsSections(), []);

  return (
    <DocsLayout
      shortTitle="Projects SOP"
      title="Project Management — Sold to Comfort Check"
      icon={HardHat}
      accent="hsl(270,60%,55%)"
      sections={sections}
      sectionStyle={SECTION_STYLE}
    />
  );
};

export default Projects;
