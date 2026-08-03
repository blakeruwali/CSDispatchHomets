import { describe, it, expect } from "vitest";
import {
  leadClock, sortByUrgency, statsByChannel, nextAttempt, formatDuration,
  formatClock, channelConfig, isOpen, MARKETPLACE_CHANNELS, CHANNELS,
  type Lead, type LeadChannel, type LeadStatus,
} from "./leads";

const NOW = new Date("2026-08-03T12:00:00Z");

function lead(over: Partial<Lead> = {}): Lead {
  return {
    id: "l1",
    channel: "angi",
    external_id: null,
    customer_name: "Test",
    phone: "5551234567",
    email: null,
    address: null,
    job_type: null,
    description: null,
    received_at: NOW.toISOString(),
    ingested_at: NOW.toISOString(),
    sla_seconds: 300,
    claimed_by: null,
    claimed_at: null,
    first_touch_at: null,
    status: "new",
    outcome_notes: null,
    servicetitan_job_id: null,
    ...over,
  };
}

function minutesAgo(min: number): string {
  return new Date(NOW.getTime() - min * 60_000).toISOString();
}

describe("channel configuration", () => {
  it("holds every marketplace to a five-minute first touch", () => {
    for (const channel of MARKETPLACE_CHANNELS) {
      expect(CHANNELS[channel].slaSeconds).toBe(300);
    }
  });

  it("keeps the LSA target already published in the SOP", () => {
    expect(CHANNELS.lsa.slaSeconds).toBe(15 * 60);
  });

  it("falls back to a default for an unknown channel", () => {
    expect(channelConfig("nope" as LeadChannel).label).toBe("Other");
  });
});

describe("leadClock", () => {
  it("is fresh at the start of the window", () => {
    const c = leadClock(lead({ received_at: minutesAgo(1) }), NOW);
    expect(c.urgency).toBe("fresh");
    expect(c.secondsRemaining).toBe(240);
  });

  it("turns closing in the final third of the window", () => {
    const c = leadClock(lead({ received_at: minutesAgo(4) }), NOW);
    expect(c.urgency).toBe("closing");
  });

  it("breaches once the window is gone", () => {
    const c = leadClock(lead({ received_at: minutesAgo(9) }), NOW);
    expect(c.urgency).toBe("breached");
    expect(c.secondsRemaining).toBeLessThan(0);
  });

  it("stops the clock at first touch rather than at booking", () => {
    const c = leadClock(
      lead({ received_at: minutesAgo(90), first_touch_at: minutesAgo(88) }),
      NOW,
    );
    expect(c.urgency).toBe("done");
    expect(c.secondsToFirstTouch).toBe(120);
    expect(c.metSla).toBe(true);
  });

  it("records a miss when first touch came too late", () => {
    const c = leadClock(
      lead({ received_at: minutesAgo(60), first_touch_at: minutesAgo(40) }),
      NOW,
    );
    expect(c.metSla).toBe(false);
    expect(c.secondsToFirstTouch).toBe(20 * 60);
  });

  it("has no verdict before anyone has touched it", () => {
    expect(leadClock(lead(), NOW).metSla).toBeNull();
  });
});

describe("sortByUrgency", () => {
  it("puts breached first, then closing, then fresh", () => {
    const sorted = sortByUrgency(
      [
        lead({ id: "fresh", received_at: minutesAgo(1) }),
        lead({ id: "breached", received_at: minutesAgo(20) }),
        lead({ id: "closing", received_at: minutesAgo(4) }),
      ],
      NOW,
    );
    expect(sorted.map((l) => l.id)).toEqual(["breached", "closing", "fresh"]);
  });

  it("puts the oldest first when urgency ties", () => {
    const sorted = sortByUrgency(
      [
        lead({ id: "newer", received_at: minutesAgo(10) }),
        lead({ id: "older", received_at: minutesAgo(30) }),
      ],
      NOW,
    );
    expect(sorted.map((l) => l.id)).toEqual(["older", "newer"]);
  });

  it("does not mutate the input", () => {
    const input = [lead({ id: "a", received_at: minutesAgo(1) }), lead({ id: "b", received_at: minutesAgo(30) })];
    sortByUrgency(input, NOW);
    expect(input.map((l) => l.id)).toEqual(["a", "b"]);
  });
});

describe("isOpen", () => {
  it("counts new and working as open", () => {
    expect(isOpen({ status: "new" })).toBe(true);
    expect(isOpen({ status: "working" })).toBe(true);
  });

  it("counts every resolved status as closed", () => {
    for (const status of ["booked", "unreachable", "not_a_lead", "lost"] as LeadStatus[]) {
      expect(isOpen({ status })).toBe(false);
    }
  });
});

describe("attempt cadence", () => {
  it("starts with an immediate call", () => {
    expect(nextAttempt(0)).toMatchObject({ atMinutes: 0, kind: "call" });
  });

  it("texts second, because most no-answers reply to a text", () => {
    expect(nextAttempt(1)).toMatchObject({ kind: "text", atMinutes: 2 });
  });

  it("runs out after the published plan", () => {
    expect(nextAttempt(6)).toBeNull();
  });
});

describe("statsByChannel", () => {
  it("uses the median so one forgotten lead cannot distort the week", () => {
    const leads = [
      lead({ id: "a", received_at: minutesAgo(100), first_touch_at: minutesAgo(99) }),  // 60s
      lead({ id: "b", received_at: minutesAgo(100), first_touch_at: minutesAgo(98) }),  // 120s
      lead({ id: "c", received_at: minutesAgo(5000), first_touch_at: minutesAgo(200) }), // 2 days
    ];
    const [angi] = statsByChannel(leads);
    expect(angi.medianSecondsToFirstTouch).toBe(120);
  });

  it("separates untouched open leads from resolved ones", () => {
    const leads = [
      lead({ id: "a", status: "new" }),
      lead({ id: "b", status: "working" }),
      lead({ id: "c", status: "booked", first_touch_at: NOW.toISOString() }),
    ];
    const [angi] = statsByChannel(leads);
    expect(angi.untouched).toBe(2);
    expect(angi.booked).toBe(1);
    expect(angi.total).toBe(3);
  });

  it("counts SLA hits only where first touch beat the target", () => {
    const leads = [
      lead({ id: "hit", received_at: minutesAgo(60), first_touch_at: minutesAgo(58) }),
      lead({ id: "miss", received_at: minutesAgo(60), first_touch_at: minutesAgo(30) }),
    ];
    const [angi] = statsByChannel(leads);
    expect(angi.withinSla).toBe(1);
  });

  it("groups by channel, busiest first", () => {
    const stats = statsByChannel([
      lead({ id: "a", channel: "yelp" }),
      lead({ id: "b", channel: "angi" }),
      lead({ id: "c", channel: "angi" }),
    ]);
    expect(stats.map((s) => s.channel)).toEqual(["angi", "yelp"]);
  });

  it("returns nothing for no leads", () => {
    expect(statsByChannel([])).toEqual([]);
  });
});

describe("formatting", () => {
  it("formats durations by magnitude", () => {
    expect(formatDuration(45)).toBe("45s");
    expect(formatDuration(125)).toBe("2m 05s");
    expect(formatDuration(3700)).toBe("1h 1m");
  });

  it("says how long is left, then how far over", () => {
    expect(formatClock(leadClock(lead({ received_at: minutesAgo(1) }), NOW))).toBe("4m 00s left");
    expect(formatClock(leadClock(lead({ received_at: minutesAgo(10) }), NOW))).toContain("over");
  });

  it("reports first touch once the lead has been worked", () => {
    const c = leadClock(lead({ received_at: minutesAgo(10), first_touch_at: minutesAgo(8) }), NOW);
    expect(formatClock(c)).toBe("2m 00s to first touch");
  });
});
