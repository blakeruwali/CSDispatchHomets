/**
 * Speed-to-lead domain logic.
 *
 * Marketplace leads (Angi, Thumbtack, Yelp) are sold to several contractors at
 * once. The customer is fielding calls from all of them, and the first real
 * human on the phone usually books the job — so the only metric that decides
 * whether this money was wasted is time from submission to first touch.
 *
 * Everything here is pure so the rules are testable without a database.
 */

export type LeadChannel =
  | "angi" | "thumbtack" | "yelp" | "lsa" | "web" | "phone" | "referral" | "other";

export type LeadStatus =
  | "new" | "working" | "booked" | "unreachable" | "not_a_lead" | "lost";

export type LeadAttemptKind = "call" | "text" | "email" | "platform_message";

export type LeadAttemptOutcome =
  | "connected" | "no_answer" | "voicemail" | "wrong_number" | "sent";

export interface Lead {
  id: string;
  channel: LeadChannel;
  external_id: string | null;
  customer_name: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  job_type: string | null;
  description: string | null;
  received_at: string;
  ingested_at: string;
  sla_seconds: number;
  claimed_by: string | null;
  claimed_at: string | null;
  first_touch_at: string | null;
  status: LeadStatus;
  outcome_notes: string | null;
  servicetitan_job_id: string | null;
}

export interface LeadAttempt {
  id: string;
  lead_id: string;
  kind: LeadAttemptKind;
  outcome: LeadAttemptOutcome;
  notes: string | null;
  attempted_at: string;
}

// ------------------------------------------------------------------ channels

export interface ChannelConfig {
  label: string;
  /** Seconds from customer submission to first touch. */
  slaSeconds: number;
  color: string;
  /** Why this channel has the target it has — shown in the UI. */
  note: string;
}

/**
 * Five minutes for every shared marketplace. These leads go to multiple
 * contractors simultaneously, so the target is not "prompt", it is "first".
 *
 * LSA and web keep the targets already published in the CSM SOP.
 */
export const CHANNELS: Record<LeadChannel, ChannelConfig> = {
  angi: {
    label: "Angi",
    slaSeconds: 5 * 60,
    color: "hsl(15,90%,55%)",
    note: "Sold to several contractors at once — first to connect usually wins.",
  },
  thumbtack: {
    label: "Thumbtack",
    slaSeconds: 5 * 60,
    color: "hsl(200,80%,55%)",
    note: "Customer compares responses side by side. Late replies are visibly late.",
  },
  yelp: {
    label: "Yelp",
    slaSeconds: 5 * 60,
    color: "hsl(0,78%,50%)",
    note: "Response time is shown on the profile and affects ranking.",
  },
  lsa: {
    label: "Google LSA",
    slaSeconds: 15 * 60,
    color: "hsl(145,60%,45%)",
    note: "Missed-call callback target from the CSM SOP.",
  },
  web: {
    label: "Website form",
    slaSeconds: 5 * 60,
    color: "hsl(270,60%,55%)",
    note: "They filled in our form and probably two others.",
  },
  phone: {
    label: "Phone",
    slaSeconds: 5 * 60,
    color: "hsl(180,60%,45%)",
    note: "Missed inbound awaiting a callback.",
  },
  referral: {
    label: "Referral",
    slaSeconds: 30 * 60,
    color: "hsl(25,100%,60%)",
    note: "Warm, but someone vouched for us — don't leave them waiting.",
  },
  other: {
    label: "Other",
    slaSeconds: 15 * 60,
    color: "hsl(0,0%,50%)",
    note: "",
  },
};

/** Channels that are paid-per-lead marketplaces — the ones being missed today. */
export const MARKETPLACE_CHANNELS: LeadChannel[] = ["angi", "thumbtack", "yelp"];

export function channelConfig(channel: LeadChannel): ChannelConfig {
  return CHANNELS[channel] ?? CHANNELS.other;
}

// ------------------------------------------------------------------- urgency

export type Urgency = "fresh" | "closing" | "breached" | "done";

export interface LeadClock {
  urgency: Urgency;
  /** Seconds remaining before the SLA is missed. Negative once breached. */
  secondsRemaining: number;
  /** Seconds elapsed since the customer submitted. */
  secondsElapsed: number;
  /** Seconds from submission to first touch, once touched. */
  secondsToFirstTouch: number | null;
  metSla: boolean | null;
}

export function isOpen(lead: Pick<Lead, "status">): boolean {
  return lead.status === "new" || lead.status === "working";
}

/**
 * The clock a lead is running against.
 *
 * Once first touch has happened the countdown stops permanently — a lead
 * touched in 90 seconds does not become "late" because the job took a while
 * to book. Speed to lead measures the reply, not the resolution.
 */
export function leadClock(lead: Lead, now: Date = new Date()): LeadClock {
  const received = new Date(lead.received_at).getTime();
  const nowMs = now.getTime();

  if (lead.first_touch_at) {
    const touched = new Date(lead.first_touch_at).getTime();
    const secondsToFirstTouch = Math.round((touched - received) / 1000);
    return {
      urgency: "done",
      secondsRemaining: lead.sla_seconds - secondsToFirstTouch,
      secondsElapsed: secondsToFirstTouch,
      secondsToFirstTouch,
      metSla: secondsToFirstTouch <= lead.sla_seconds,
    };
  }

  const secondsElapsed = Math.round((nowMs - received) / 1000);
  const secondsRemaining = lead.sla_seconds - secondsElapsed;

  let urgency: Urgency;
  if (secondsRemaining < 0) urgency = "breached";
  // The last third of the window is where a lead needs to be visibly loud.
  else if (secondsRemaining <= lead.sla_seconds / 3) urgency = "closing";
  else urgency = "fresh";

  return { urgency, secondsRemaining, secondsElapsed, secondsToFirstTouch: null, metSla: null };
}

/** Most urgent first: breached, then closing, then fresh, oldest within each. */
export function sortByUrgency(leads: Lead[], now: Date = new Date()): Lead[] {
  const rank: Record<Urgency, number> = { breached: 0, closing: 1, fresh: 2, done: 3 };
  return [...leads].sort((a, b) => {
    const ca = leadClock(a, now);
    const cb = leadClock(b, now);
    if (rank[ca.urgency] !== rank[cb.urgency]) return rank[ca.urgency] - rank[cb.urgency];
    return new Date(a.received_at).getTime() - new Date(b.received_at).getTime();
  });
}

// -------------------------------------------------------------- attempt plan

export interface PlannedAttempt {
  /** Minutes after the lead arrived. */
  atMinutes: number;
  kind: LeadAttemptKind;
  label: string;
}

/**
 * The published cadence from `playbook.speed-to-lead`. Six touches over two
 * days — most contractors stop after one, which is why attempts 3 to 6 are
 * where the recovered jobs actually come from.
 */
export const ATTEMPT_PLAN: PlannedAttempt[] = [
  { atMinutes: 0, kind: "call", label: "Call immediately" },
  { atMinutes: 2, kind: "text", label: "Text if no answer" },
  { atMinutes: 15, kind: "call", label: "Second call" },
  { atMinutes: 60, kind: "call", label: "Third call" },
  { atMinutes: 60 * 24, kind: "call", label: "Next morning" },
  { atMinutes: 60 * 48, kind: "text", label: "Final text, then close" },
];

export const MAX_ATTEMPTS = ATTEMPT_PLAN.length;

/** What the person working this lead should do next. */
export function nextAttempt(attemptCount: number): PlannedAttempt | null {
  return ATTEMPT_PLAN[attemptCount] ?? null;
}

// -------------------------------------------------------------------- stats

export interface ChannelStats {
  channel: LeadChannel;
  total: number;
  touched: number;
  /** Leads still open with no first touch at all. */
  untouched: number;
  withinSla: number;
  booked: number;
  medianSecondsToFirstTouch: number | null;
}

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

/**
 * Median rather than mean: one lead found three days later would drag an
 * average so far that a genuinely fast week would look broken.
 */
export function statsByChannel(leads: Lead[]): ChannelStats[] {
  const byChannel = new Map<LeadChannel, Lead[]>();
  for (const lead of leads) {
    const list = byChannel.get(lead.channel) ?? [];
    list.push(lead);
    byChannel.set(lead.channel, list);
  }

  return [...byChannel.entries()]
    .map(([channel, group]) => {
      const times = group
        .map((l) => leadClock(l).secondsToFirstTouch)
        .filter((s): s is number => s !== null);

      return {
        channel,
        total: group.length,
        touched: times.length,
        untouched: group.filter((l) => !l.first_touch_at && isOpen(l)).length,
        withinSla: group.filter((l) => leadClock(l).metSla === true).length,
        booked: group.filter((l) => l.status === "booked").length,
        medianSecondsToFirstTouch: median(times),
      };
    })
    .sort((a, b) => b.total - a.total);
}

// ------------------------------------------------------------------ display

export function formatDuration(seconds: number): string {
  const abs = Math.abs(Math.round(seconds));
  const h = Math.floor(abs / 3600);
  const m = Math.floor((abs % 3600) / 60);
  const s = abs % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${String(s).padStart(2, "0")}s`;
  return `${s}s`;
}

/** Countdown text: "4m 12s left" while running, "8m over" once breached. */
export function formatClock(clock: LeadClock): string {
  if (clock.urgency === "done") {
    return clock.secondsToFirstTouch === null
      ? "—"
      : `${formatDuration(clock.secondsToFirstTouch)} to first touch`;
  }
  return clock.secondsRemaining >= 0
    ? `${formatDuration(clock.secondsRemaining)} left`
    : `${formatDuration(clock.secondsRemaining)} over`;
}

export const URGENCY_COLOR: Record<Urgency, string> = {
  fresh: "hsl(145,60%,45%)",
  closing: "hsl(40,90%,55%)",
  breached: "hsl(0,78%,50%)",
  done: "hsl(0,0%,45%)",
};

export const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "New",
  working: "Working",
  booked: "Booked",
  unreachable: "Unreachable",
  not_a_lead: "Not a lead",
  lost: "Lost",
};
