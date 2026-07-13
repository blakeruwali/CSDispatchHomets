// Source-of-truth rubric definitions. Edit here and re-run /admin/seed to upsert.
// item_type: "binary" (max_score 1) or "quality" (max_score 2)

export type SeedItem = {
  label: string;
  sort_order: number;
  weight: number;
  item_type: "binary" | "quality";
  max_score: 1 | 2;
  coaching_hints?: string;
};

export type SeedCategory = {
  name: string;
  sort_order: number;
  weight: number;
  items: SeedItem[];
};

export type SeedRubric = {
  slug: "sales" | "dispatch" | "csm";
  name: string;
  categories: SeedCategory[];
};

const B = (label: string, sort_order: number, weight: number): SeedItem => ({
  label,
  sort_order,
  weight,
  item_type: "binary",
  max_score: 1,
});

const Q = (label: string, sort_order: number, weight: number, hints: string): SeedItem => ({
  label,
  sort_order,
  weight,
  item_type: "quality",
  max_score: 2,
  coaching_hints: hints,
});

export const salesRubric: SeedRubric = {
  slug: "sales",
  name: "HVAC Sales — In-Home Estimate",
  categories: [
    {
      name: "Pre-Call & Arrival",
      sort_order: 1,
      weight: 8,
      items: [
        B("Reviewed customer history before arrival", 1, 2),
        B("On-time within scheduled window", 2, 3),
        B("Greeted with name + company", 3, 2),
        B("Shoe covers / mat used", 4, 1),
      ],
    },
    {
      name: "Discovery — Walk Around & Pain Points",
      sort_order: 2,
      weight: 14,
      items: [
        Q(
          "Let customer lead the walk-through (didn't dominate)",
          1,
          3,
          "0 = tech talked over customer; 1 = mostly listened but interrupted; 2 = customer drove the tour, tech asked follow-ups",
        ),
        B("Captured system age, brand, last service", 2, 2),
        Q(
          "Open-ended pain question actually opened them up",
          3,
          4,
          "0 = closed yes/no questions; 1 = one open question, short answer; 2 = customer talked freely about frustrations",
        ),
        Q(
          "Surfaced a specific pain in customer's own words",
          4,
          5,
          "0 = generic 'old system'; 1 = a real pain identified by tech; 2 = quoted customer language reused later in the pitch",
        ),
      ],
    },
    {
      name: "Presenting Options",
      sort_order: 3,
      weight: 11,
      items: [
        B("Presented three options (Good/Better/Best), not just one", 1, 3),
        B("Anchored to Best first", 2, 3),
        Q(
          "Tied each tier back to a discovery pain point",
          3,
          5,
          "0 = generic features; 1 = tied Best only; 2 = each tier explicitly addresses a pain customer named",
        ),
      ],
    },
    {
      name: "Investment & Financing",
      sort_order: 4,
      weight: 9,
      items: [
        B("Framed price as monthly investment, not lump sum", 1, 3),
        B("Offered financing proactively", 2, 3),
        Q(
          "Walked cash vs. financing trade-off cleanly",
          3,
          3,
          "0 = skipped; 1 = mentioned both; 2 = clear comparison incl. 50% deposit / 90% pre-install per Homets policy",
        ),
      ],
    },
    {
      name: "Membership & Urgency",
      sort_order: 5,
      weight: 8,
      items: [
        Q(
          "Pitched Home+ membership tied to today's job",
          1,
          3,
          "0 = no pitch; 1 = generic mention; 2 = bundled with today's repair/install savings",
        ),
        Q(
          "Created LEGITIMATE urgency (rebate/weather/parts) — no fake pressure",
          2,
          5,
          "0 = high-pressure or none; 1 = soft mention; 2 = real, verifiable reason customer felt was honest",
        ),
      ],
    },
    {
      name: "Close",
      sort_order: 6,
      weight: 13,
      items: [
        Q(
          "Used an assumptive close",
          1,
          4,
          "0 = 'want to think about it?'; 1 = soft trial close; 2 = clean assumptive ('which day works for install?')",
        ),
        Q(
          "Handled at least one objection without conceding price",
          2,
          5,
          "0 = dropped price; 1 = deflected; 2 = re-anchored to value/pain and held price",
        ),
        B("Got signed agreement or verbal commitment", 3, 4),
      ],
    },
    {
      name: "Paperwork & Follow-Up",
      sort_order: 7,
      weight: 6,
      items: [
        B("Paperwork on-site (not 'I'll send it later')", 1, 2),
        B("Confirmed install date + customer prep", 2, 2),
        B("Scheduled 24-hr follow-up touchpoint", 3, 2),
      ],
    },
  ],
};

export const dispatchRubric: SeedRubric = {
  slug: "dispatch",
  name: "CSR — Inbound Call Intake",
  categories: [
    {
      name: "Opening",
      sort_order: 1,
      weight: 8,
      items: [
        B("Picked up within 3 rings", 1, 2),
        B("Greeted with company name + own first name", 2, 2),
        Q(
          "Acknowledged customer's concern before launching into questions",
          3,
          4,
          "0 = jumped to intake form; 1 = brief acknowledgement; 2 = empathetic reflect-back before questioning",
        ),
      ],
    },
    {
      name: "Emergency Triage",
      sort_order: 2,
      weight: 12,
      items: [
        B("Asked emergency-screening question early (gas/CO/no heat in cold/flood)", 1, 5),
        Q(
          "On an emergency: gave correct safety instruction (911 / leave premises / shut main valve) BEFORE dispatching",
          2,
          4,
          "0 = dispatched first; 1 = safety mentioned after intake; 2 = safety instruction first, then dispatch",
        ),
        B("Escalated to dispatch manager OR routed to same-day priority", 3, 3),
      ],
    },
    {
      name: "Service & System Triage",
      sort_order: 3,
      weight: 14,
      items: [
        B("Identified service type (Repair / Install / Maintenance)", 1, 3),
        B("Identified system type (Boiler / Furnace / AC / HP / Mini Split)", 2, 3),
        B("Identified residential vs commercial", 3, 3),
        Q(
          "Asked clarifying questions until problem was specific enough to dispatch on",
          4,
          5,
          "0 = vague ticket ('AC broken'); 1 = some detail; 2 = tech can arrive prepared with right parts/skills",
        ),
      ],
    },
    {
      name: "Customer Info Capture",
      sort_order: 4,
      weight: 16,
      items: [
        B("Full name (first + last)", 1, 3),
        B("Phone (primary + alt if available)", 2, 3),
        B("Service address (full + apt/unit #)", 3, 3),
        B("System age", 4, 2),
        B("Preferred time window", 5, 3),
        B("Asked for email for confirmation", 6, 2),
      ],
    },
    {
      name: "Script Selection & Pitch",
      sort_order: 5,
      weight: 18,
      items: [
        B("Selected correct script (Diagnostic/Estimate/Maintenance/Membership/Plumbing)", 1, 3),
        Q(
          "Framed diagnostic fee as value, not cost",
          2,
          3,
          "0 = 'it's $X'; 1 = mentioned what's included; 2 = full value frame: visit + safety inspection + clear estimate",
        ),
        Q(
          "Pivoted to Home+ membership using social proof ('most homeowners choose')",
          3,
          4,
          "0 = no pivot; 1 = brief mention; 2 = social-proof framing tied to today's call",
        ),
        Q(
          "Handled at least one price/scope objection without conceding",
          4,
          4,
          "0 = caved; 1 = deflected; 2 = re-anchored to guarantee/value, kept price",
        ),
        Q(
          "Closed with the 90-min guarantee as a tool",
          5,
          4,
          "0 = not stated; 1 = mentioned; 2 = used as the close-the-deal lever",
        ),
      ],
    },
    {
      name: "Booking",
      sort_order: 6,
      weight: 10,
      items: [
        B("Confirmed time window verbally", 1, 3),
        B("Stated 90-min guarantee out loud", 2, 3),
        Q(
          "Set clear next-step expectations (tech name, text confirmation, prep)",
          3,
          4,
          "0 = vague; 1 = one expectation set; 2 = full handoff: tech name (if known) + text + prep instructions",
        ),
      ],
    },
    {
      name: "Wrap-Up",
      sort_order: 7,
      weight: 6,
      items: [
        B("Asked 'how did you hear about us?'", 1, 2),
        B("Confirmed membership status", 2, 2),
        Q(
          "Closed warmly — recap + thank-you",
          3,
          2,
          "0 = abrupt hangup; 1 = thank-you only; 2 = recap booking details + warm close",
        ),
      ],
    },
  ],
};

export const allRubrics: SeedRubric[] = [salesRubric, dispatchRubric];
