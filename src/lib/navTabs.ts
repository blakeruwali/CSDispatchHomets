import {
  BadgeCheck,
  Handshake,
  HardHat,
  Headphones,
  Megaphone,
  Presentation,
  Radio,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

/**
 * The tab menu shown in the top bar. The order here is the order in the bar.
 */

export interface NavTab {
  id: string;
  path: string;
  label: string;
  /** Shorter form for the top bar, where space is tight. */
  short: string;
  icon: React.ElementType;
}

/**
 * `/` is deliberately absent from the bar: it is the page the bar sits on, and
 * the logo already links there.
 */
export const NAV_TABS: NavTab[] = [
  { id: "csm", path: "/csm", label: "CSM SOP", short: "CSM SOP", icon: Headphones },
  { id: "field", path: "/field", label: "Field SOP", short: "Field SOP", icon: Wrench },
  { id: "dispatch", path: "/dispatch", label: "Dispatch SOP", short: "Dispatch SOP", icon: Radio },
  { id: "sales-guide", path: "/sales", label: "Sales SOP", short: "Sales SOP", icon: Handshake },
  { id: "sales-deck", path: "/sales/deck", label: "Sales Deck", short: "Sales Deck", icon: Presentation },
  { id: "projects", path: "/projects", label: "Projects SOP", short: "Projects SOP", icon: HardHat },
  { id: "leads", path: "/leads", label: "Leads SOP", short: "Leads SOP", icon: Megaphone },
  { id: "reviews", path: "/reviews", label: "Reviews SOP", short: "Reviews SOP", icon: Star },
  { id: "membership", path: "/membership", label: "Membership SOP", short: "Membership SOP", icon: BadgeCheck },
  { id: "insurance", path: "/insurance", label: "Insurance SOP", short: "Insurance SOP", icon: ShieldCheck },
];
