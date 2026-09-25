import {
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  HardHat,
  Headphones,
  KeyRound,
  Megaphone,
  Presentation,
  Radio,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { TABS } from "@/lib/access";

/**
 * The tab menu: the same tabs as TABS in access.ts, with an icon and a short
 * label for the top bar.
 *
 * Derived from TABS rather than listed independently, so a tab added to the
 * access map cannot be missing from the menu and a menu entry cannot point at
 * a route that no longer exists. The order here is the order in the bar.
 */

export interface NavTab {
  id: string;
  path: string;
  /** Full name, used in access requests and the "what you can open" list. */
  label: string;
  /** Shorter form for the top bar, where space is tight. */
  short: string;
  icon: React.ElementType;
}

const ICONS: Record<string, React.ElementType> = {
  "csm-deck": Presentation,
  csm: Headphones,
  field: Wrench,
  dispatch: Radio,
  "sales-guide": Handshake,
  "sales-deck": Presentation,
  projects: HardHat,
  leads: Megaphone,
  reviews: Star,
  membership: BadgeCheck,
  insurance: ShieldCheck,
  "access-requests": KeyRound,
};

const SHORT: Record<string, string> = {
  "csm-deck": "CSM Deck",
  csm: "CSM SOP",
  field: "Field SOP",
  dispatch: "Dispatch SOP",
  "sales-guide": "Sales SOP",
  "sales-deck": "Sales Deck",
  projects: "Projects SOP",
  leads: "Leads SOP",
  reviews: "Reviews SOP",
  membership: "Membership SOP",
  insurance: "Insurance SOP",
  "access-requests": "Access",
};

/**
 * `/` is deliberately absent from the bar: it is the page the bar sits on, and
 * the logo already links there. It is still a gated tab — see TABS.
 */
export const NAV_TABS: NavTab[] = TABS.filter((t) => t.path !== "/").map((t) => ({
  id: t.id,
  path: t.path,
  label: t.label,
  short: SHORT[t.id] ?? t.label,
  icon: ICONS[t.id] ?? ClipboardCheck,
}));
