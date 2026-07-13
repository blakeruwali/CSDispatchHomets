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

export const csmRubric: SeedRubric = {
  slug: "csm",
  name: "CSM — SOP Call Scorecard",
  categories: [
    {
      name: "Greeting & Tone (SOP Part 2)",
      sort_order: 1,
      weight: 10,
      items: [
        B("Answered within 3 rings (or callback within SLA)", 1, 2),
        B("Used verbatim greeting: 'Thank you for choosing Home+ Air and Heat, this is [name], how can we serve you today?'", 2, 4),
        Q(
          "Warm, unhurried tone — customer felt heard, not processed",
          3,
          4,
          "0 = robotic/rushed; 1 = polite but transactional; 2 = warm, calm, unmistakably human",
        ),
      ],
    },
    {
      name: "Customer Interaction (SOP Part 2)",
      sort_order: 2,
      weight: 12,
      items: [
        Q(
          "Acknowledged concern BEFORE asking intake questions",
          1,
          4,
          "0 = jumped to form; 1 = brief 'sorry to hear that'; 2 = empathetic reflect-back naming the pain",
        ),
        B("No hold longer than 60 seconds without a check-back", 2, 3),
        Q(
          "Active listening — repeated key details back to confirm",
          3,
          3,
          "0 = none; 1 = confirmed once; 2 = confirmed address, system, and issue in customer's words",
        ),
        B("No jargon dumped on the customer (or explained if used)", 4, 2),
      ],
    },
    {
      name: "Emergency Screening (SOP Part 3)",
      sort_order: 3,
      weight: 10,
      items: [
        B("Asked emergency-screening question early (gas smell / CO / no heat in cold / active leak/flood)", 1, 4),
        Q(
          "On emergency: gave safety instruction (911 / leave premises / shut main) BEFORE booking",
          2,
          4,
          "0 = booked first; 1 = safety after intake; 2 = safety first, then dispatch/escalate",
        ),
        B("Escalated correctly if outside CSM hours or true emergency", 3, 2),
      ],
    },
    {
      name: "Intake — Required Fields (SOP Part 3)",
      sort_order: 4,
      weight: 16,
      items: [
        B("Full name (first + last)", 1, 2),
        B("Primary phone (+ alt if available)", 2, 2),
        B("Full service address incl. apt/unit #", 3, 3),
        B("Email captured for confirmation", 4, 2),
        B("Service type identified (Repair / Install / Maintenance)", 5, 2),
        B("System type identified (Boiler / Furnace / AC / HP / Mini Split / Plumbing)", 6, 2),
        B("Residential vs Commercial flagged", 7, 2),
        B("System age captured", 8, 1),
      ],
    },
    {
      name: "Diagnosis Detail & Rate Framing (SOP Part 4)",
      sort_order: 5,
      weight: 12,
      items: [
        Q(
          "Asked clarifying questions until the ticket was dispatch-ready",
          1,
          4,
          "0 = vague ('AC broken'); 1 = some detail; 2 = tech can arrive with the right parts/skills",
        ),
        Q(
          "Framed diagnostic fee as VALUE, not cost ($199 res / $269 comm)",
          2,
          3,
          "0 = 'it's $X'; 1 = mentioned what's included; 2 = full value frame — visit + safety inspection + written estimate",
        ),
        Q(
          "Stated labor rate correctly when asked ($299/hr res, $349/hr comm)",
          3,
          3,
          "0 = wrong or dodged; 1 = stated but flat; 2 = stated with confidence + value context",
        ),
        B("Never quoted a repair price sight-unseen", 4, 2),
      ],
    },
    {
      name: "Home+ Membership Pivot (SOP Part 4)",
      sort_order: 6,
      weight: 10,
      items: [
        Q(
          "Pivoted to Home+ using social proof ('most homeowners choose…')",
          1,
          4,
          "0 = no pivot; 1 = generic mention; 2 = social-proof framing tied to today's call",
        ),
        Q(
          "Tied Home+ ($19.99/mo) to a savings moment on THIS call",
          2,
          4,
          "0 = generic pitch; 1 = mentioned savings; 2 = bundled with today's diag/repair math",
        ),
        B("Confirmed existing membership status before pitching", 3, 2),
      ],
    },
    {
      name: "Booking & 90-Min Guarantee (SOP Part 4)",
      sort_order: 7,
      weight: 12,
      items: [
        B("Offered a specific time window (not 'sometime tomorrow')", 1, 3),
        B("Confirmed window verbally with the customer", 2, 2),
        B("Stated the 90-minute arrival guarantee out loud", 3, 3),
        Q(
          "Used the 90-min guarantee as a closing lever",
          4,
          4,
          "0 = never said; 1 = mentioned; 2 = used to close a hesitant customer",
        ),
      ],
    },
    {
      name: "Objection Handling (SOP Part 4)",
      sort_order: 8,
      weight: 8,
      items: [
        Q(
          "Handled a price/scope objection without conceding the fee",
          1,
          5,
          "0 = caved / waived fee; 1 = deflected; 2 = re-anchored to value + guarantee, held price",
        ),
        Q(
          "Handled 'I'll call around' with confidence, not desperation",
          2,
          3,
          "0 = begged; 1 = neutral; 2 = re-framed on value/response time and offered to hold slot",
        ),
      ],
    },
    {
      name: "Channel-Specific SLAs (SOP Part 5)",
      sort_order: 9,
      weight: 6,
      items: [
        B("LSA lead: callback attempted within 15 minutes", 1, 2),
        B("Web lead: callback attempted within 5 minutes", 2, 2),
        B("Posh handoff: reviewed message and returned call within SLA", 3, 2),
      ],
    },
    {
      name: "Post-Booking / ServiceTitan (SOP Part 6)",
      sort_order: 10,
      weight: 8,
      items: [
        B("ServiceTitan ticket created with all required fields", 1, 3),
        B("Correct business unit + job type selected", 2, 2),
        B("Confirmation text/email sent to customer", 3, 2),
        B("Notes field written so the tech can act on it (no vague 'not working')", 4, 1),
      ],
    },
    {
      name: "Wrap-Up",
      sort_order: 11,
      weight: 6,
      items: [
        B("Asked 'how did you hear about us?'", 1, 2),
        Q(
          "Closed warmly — recap booking + thank-you using Home+ language",
          2,
          4,
          "0 = abrupt hangup; 1 = thank-you only; 2 = recap of window + tech + prep, warm close",
        ),
      ],
    },
  ],
};

export const allRubrics: SeedRubric[] = [salesRubric, dispatchRubric, csmRubric];

