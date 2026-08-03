import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Phone, MessageSquare, Plus, X, Zap, AlertTriangle, RefreshCw,
} from "lucide-react";
import {
  fetchLeads, fetchAttemptCounts, createLead, recordAttempt, setLeadStatus,
  subscribeToLeads,
} from "@/lib/leadsDb";
import {
  CHANNELS, MARKETPLACE_CHANNELS, channelConfig, leadClock, sortByUrgency,
  statsByChannel, nextAttempt, formatClock, formatDuration, isOpen,
  URGENCY_COLOR, STATUS_LABEL,
  type Lead, type LeadChannel, type LeadStatus, type LeadAttemptKind,
  type LeadAttemptOutcome,
} from "@/lib/leads";

const BG = "hsl(0,0%,5%)";
const CARD = "hsl(0,0%,8%)";
const BORDER = "hsl(0,0%,100%,0.12)";
const ACCENT = "hsl(15,90%,55%)";

/** Drives the countdowns. One timer for the page, not one per row. */
function useTick(ms = 1000): Date {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), ms);
    return () => window.clearInterval(id);
  }, [ms]);
  return now;
}

const Leads: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [attemptCounts, setAttemptCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const now = useTick();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [rows, counts] = await Promise.all([fetchLeads(), fetchAttemptCounts()]);
      setLeads(rows);
      setAttemptCounts(counts);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  // Someone else claiming a lead has to show up here without a refresh,
  // otherwise two people call the same customer.
  useEffect(() => subscribeToLeads(() => void load()), [load]);

  const open = useMemo(() => sortByUrgency(leads.filter(isOpen), now), [leads, now]);
  const recent = useMemo(() => leads.filter((l) => !isOpen(l)).slice(0, 25), [leads]);
  const stats = useMemo(
    () => statsByChannel(leads.filter((l) => MARKETPLACE_CHANNELS.includes(l.channel))),
    [leads],
  );

  const breachedCount = open.filter((l) => leadClock(l, now).urgency === "breached").length;

  async function logAttempt(
    lead: Lead,
    kind: LeadAttemptKind,
    outcome: LeadAttemptOutcome,
  ) {
    await recordAttempt(lead.id, kind, outcome);
    await load();
  }

  async function setStatus(lead: Lead, status: LeadStatus) {
    await setLeadStatus(lead.id, status);
    await load();
  }

  return (
    <div className="min-h-screen w-full" style={{ background: BG }}>
      <header
        className="sticky top-0 z-10 h-12 flex items-center justify-between px-5 backdrop-blur-md"
        style={{ background: "hsl(0,0%,7%,0.92)", borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/45 hover:bg-white/5 hover:text-white/70"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Dispatch Guide
          </Link>
          <h1 className="text-sm font-semibold text-white flex items-center gap-2">
            <Zap className="w-4 h-4" style={{ color: ACCENT }} />
            Speed to Lead
          </h1>
          {breachedCount > 0 && (
            <span
              className="rounded px-2 py-0.5 text-[11px] font-semibold"
              style={{ background: "hsl(0,78%,50%,0.18)", color: "hsl(0,78%,60%)" }}
            >
              {breachedCount} past SLA
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => void load()}
            className="p-2 rounded-lg text-white/45 hover:text-white/70"
            style={{ background: "hsl(0,0%,12%)", border: `1px solid ${BORDER}` }}
            title="Refresh"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
            style={{ background: ACCENT }}
          >
            <Plus className="w-3.5 h-3.5" />
            Add lead
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-6 space-y-6">
        {error && <SetupNotice message={error} />}

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-3">
            Open queue {open.length > 0 && `· ${open.length}`}
          </h2>
          {loading && !leads.length ? (
            <p className="text-sm text-white/40">Loading…</p>
          ) : open.length === 0 ? (
            <EmptyQueue hasError={!!error} />
          ) : (
            <div className="space-y-2">
              {open.map((lead) => (
                <LeadRow
                  key={lead.id}
                  lead={lead}
                  now={now}
                  attempts={attemptCounts[lead.id] ?? 0}
                  onAttempt={logAttempt}
                  onStatus={setStatus}
                />
              ))}
            </div>
          )}
        </section>

        {stats.length > 0 && <MarketplaceStats stats={stats} />}

        {recent.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-3">
              Recently closed
            </h2>
            <div className="space-y-1.5">
              {recent.map((lead) => (
                <ClosedRow key={lead.id} lead={lead} />
              ))}
            </div>
          </section>
        )}
      </main>

      {showAdd && (
        <AddLeadDialog
          onClose={() => setShowAdd(false)}
          onSaved={() => {
            setShowAdd(false);
            void load();
          }}
        />
      )}
    </div>
  );
};

// ------------------------------------------------------------------- pieces

const SetupNotice: React.FC<{ message: string }> = ({ message }) => (
  <div
    className="rounded-xl p-4 text-sm"
    style={{ background: "hsl(40,90%,55%,0.1)", border: "1px solid hsl(40,90%,55%,0.3)" }}
  >
    <p className="font-semibold text-white flex items-center gap-2">
      <AlertTriangle className="w-4 h-4" style={{ color: "hsl(40,90%,55%)" }} />
      Lead tables not reachable
    </p>
    <p className="text-white/60 mt-1.5">
      Apply <code className="text-white/80">supabase/migrations/20260803120000_speed_to_lead.sql</code>{" "}
      to the Supabase project, then reload. Until then this page has nothing to show.
    </p>
    <p className="text-white/35 mt-1.5 text-xs">{message}</p>
  </div>
);

const EmptyQueue: React.FC<{ hasError: boolean }> = ({ hasError }) => (
  <div
    className="rounded-xl p-6 text-center"
    style={{ background: CARD, border: `1px solid ${BORDER}` }}
  >
    <p className="text-sm text-white/70 font-medium">Queue is clear.</p>
    <p className="text-xs text-white/40 mt-1">
      {hasError
        ? "Nothing can load until the migration is applied."
        : "Every marketplace lead has been touched. This is the state to stay in."}
    </p>
  </div>
);

interface LeadRowProps {
  lead: Lead;
  now: Date;
  attempts: number;
  onAttempt: (lead: Lead, kind: LeadAttemptKind, outcome: LeadAttemptOutcome) => Promise<void>;
  onStatus: (lead: Lead, status: LeadStatus) => Promise<void>;
}

const LeadRow: React.FC<LeadRowProps> = ({ lead, now, attempts, onAttempt, onStatus }) => {
  const clock = leadClock(lead, now);
  const config = channelConfig(lead.channel);
  const urgencyColor = URGENCY_COLOR[clock.urgency];
  const next = nextAttempt(attempts);
  const untouched = !lead.first_touch_at;

  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: CARD,
        border: `1px solid ${clock.urgency === "breached" ? "hsl(0,78%,50%,0.5)" : BORDER}`,
        borderLeft: `3px solid ${urgencyColor}`,
      }}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
              style={{ background: `${config.color}22`, color: config.color }}
            >
              {config.label}
            </span>
            <span className="text-sm font-semibold text-white">
              {lead.customer_name || "Unnamed lead"}
            </span>
            {lead.job_type && <span className="text-xs text-white/45">· {lead.job_type}</span>}
          </div>

          {lead.description && (
            <p className="text-xs text-white/55 mt-1.5 line-clamp-2">{lead.description}</p>
          )}

          <div className="flex items-center gap-3 mt-2 text-xs text-white/45 flex-wrap">
            {lead.phone && <span className="text-white/70">{lead.phone}</span>}
            {lead.address && <span>{lead.address}</span>}
            <span>
              {attempts} of 6 attempts
              {next && <span className="text-white/35"> · next: {next.label}</span>}
            </span>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-lg font-bold tabular-nums" style={{ color: urgencyColor }}>
            {formatClock(clock)}
          </div>
          <div className="text-[11px] text-white/35">
            {untouched ? "not yet touched" : `first touch ${formatDuration(clock.secondsToFirstTouch ?? 0)}`}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 flex-wrap">
        {lead.phone && (
          <a
            href={`tel:${lead.phone}`}
            onClick={() => void onAttempt(lead, "call", "no_answer")}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
            style={{ background: ACCENT }}
          >
            <Phone className="w-3.5 h-3.5" />
            Call now
          </a>
        )}
        <ActionButton onClick={() => void onAttempt(lead, "call", "connected")}>
          Connected
        </ActionButton>
        <ActionButton onClick={() => void onAttempt(lead, "text", "sent")}>
          <MessageSquare className="w-3 h-3" /> Texted
        </ActionButton>
        <span className="w-px h-5 bg-white/10 mx-1" />
        <ActionButton onClick={() => void onStatus(lead, "booked")} tone="good">
          Booked
        </ActionButton>
        <ActionButton onClick={() => void onStatus(lead, "unreachable")}>Unreachable</ActionButton>
        <ActionButton onClick={() => void onStatus(lead, "not_a_lead")}>Not a lead</ActionButton>
        <ActionButton onClick={() => void onStatus(lead, "lost")}>Lost</ActionButton>
      </div>
    </div>
  );
};

const ActionButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  tone?: "good";
}> = ({ onClick, children, tone }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
    style={{
      background: tone === "good" ? "hsl(145,60%,45%,0.15)" : "hsl(0,0%,100%,0.06)",
      border: `1px solid ${tone === "good" ? "hsl(145,60%,45%,0.4)" : BORDER}`,
    }}
  >
    {children}
  </button>
);

const ClosedRow: React.FC<{ lead: Lead }> = ({ lead }) => {
  const clock = leadClock(lead);
  const config = channelConfig(lead.channel);
  return (
    <div
      className="rounded-lg px-3 py-2 flex items-center justify-between gap-3 text-xs"
      style={{ background: "hsl(0,0%,7%)", border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span style={{ color: config.color }}>{config.label}</span>
        <span className="text-white/70 truncate">{lead.customer_name || "Unnamed"}</span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        {clock.secondsToFirstTouch !== null && (
          <span style={{ color: clock.metSla ? "hsl(145,60%,45%)" : "hsl(0,78%,55%)" }}>
            {formatDuration(clock.secondsToFirstTouch)}
          </span>
        )}
        <span className="text-white/40">{STATUS_LABEL[lead.status]}</span>
      </div>
    </div>
  );
};

const MarketplaceStats: React.FC<{ stats: ReturnType<typeof statsByChannel> }> = ({ stats }) => (
  <section>
    <h2 className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-3">
      Marketplace performance
    </h2>
    <div className="grid gap-2 sm:grid-cols-3">
      {stats.map((s) => {
        const config = channelConfig(s.channel);
        const hitRate = s.touched ? Math.round((s.withinSla / s.touched) * 100) : null;
        return (
          <div
            key={s.channel}
            className="rounded-xl p-4"
            style={{ background: CARD, border: `1px solid ${BORDER}` }}
          >
            <p className="text-xs font-semibold" style={{ color: config.color }}>
              {config.label}
            </p>
            <p className="text-2xl font-bold text-white mt-1 tabular-nums">
              {s.medianSecondsToFirstTouch === null
                ? "—"
                : formatDuration(s.medianSecondsToFirstTouch)}
            </p>
            <p className="text-[11px] text-white/40">median first touch</p>
            <div className="mt-2 pt-2 space-y-0.5 text-[11px]" style={{ borderTop: `1px solid ${BORDER}` }}>
              <Stat label="Leads" value={String(s.total)} />
              <Stat label="Booked" value={String(s.booked)} />
              <Stat
                label="Within SLA"
                value={hitRate === null ? "—" : `${hitRate}%`}
                tone={hitRate !== null && hitRate < 80 ? "bad" : undefined}
              />
              {s.untouched > 0 && (
                <Stat label="Never touched" value={String(s.untouched)} tone="bad" />
              )}
            </div>
            <p className="text-[10px] text-white/30 mt-2 leading-snug">{config.note}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const Stat: React.FC<{ label: string; value: string; tone?: "bad" }> = ({ label, value, tone }) => (
  <div className="flex justify-between">
    <span className="text-white/40">{label}</span>
    <span style={{ color: tone === "bad" ? "hsl(0,78%,60%)" : "hsl(0,0%,85%)" }}>{value}</span>
  </div>
);

// -------------------------------------------------------------- add dialog

const AddLeadDialog: React.FC<{ onClose: () => void; onSaved: () => void }> = ({
  onClose,
  onSaved,
}) => {
  const [channel, setChannel] = useState<LeadChannel>("angi");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [minutesAgo, setMinutesAgo] = useState("0");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function save() {
    setSaving(true);
    setErr(null);
    try {
      await createLead({
        channel,
        slaSeconds: CHANNELS[channel].slaSeconds,
        customerName: name || null,
        phone: phone || null,
        jobType: jobType || null,
        description: description || null,
        receivedAt: new Date(Date.now() - Number(minutesAgo || 0) * 60_000).toISOString(),
      });
      onSaved();
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "hsl(0,0%,0%,0.7)" }}>
      <div
        className="w-full max-w-md rounded-xl p-5"
        style={{ background: CARD, border: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white">Add a lead</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white/70">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <Label>Channel</Label>
            <div className="flex gap-1.5 flex-wrap">
              {(Object.keys(CHANNELS) as LeadChannel[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setChannel(c)}
                  className="rounded-lg px-2.5 py-1 text-xs font-medium transition-colors"
                  style={{
                    background: channel === c ? `${CHANNELS[c].color}25` : "hsl(0,0%,100%,0.05)",
                    color: channel === c ? CHANNELS[c].color : "hsl(0,0%,60%)",
                    border: `1px solid ${channel === c ? CHANNELS[c].color : BORDER}`,
                  }}
                >
                  {CHANNELS[c].label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-white/35 mt-1.5">
              Target: {formatDuration(CHANNELS[channel].slaSeconds)} to first touch
            </p>
          </div>

          <Field label="Customer name" value={name} onChange={setName} autoFocus />
          <Field label="Phone" value={phone} onChange={setPhone} placeholder="516-555-0123" />
          <Field label="Job type" value={jobType} onChange={setJobType} placeholder="No heat — boiler" />
          <Field label="What they said" value={description} onChange={setDescription} />
          <Field
            label="Submitted how long ago? (minutes)"
            value={minutesAgo}
            onChange={setMinutesAgo}
            placeholder="0"
          />

          {err && <p className="text-xs" style={{ color: "hsl(0,78%,60%)" }}>{err}</p>}

          <button
            onClick={() => void save()}
            disabled={saving}
            className="w-full rounded-lg py-2 text-sm font-semibold text-white disabled:opacity-50"
            style={{ background: ACCENT }}
          >
            {saving ? "Saving…" : "Add to queue"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-[11px] font-medium text-white/45 mb-1">{children}</label>
);

const Field: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}> = ({ label, value, onChange, placeholder, autoFocus }) => (
  <div>
    <Label>{label}</Label>
    <input
      autoFocus={autoFocus}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg px-3 py-1.5 text-sm text-white outline-none"
      style={{ background: "hsl(0,0%,12%)", border: `1px solid ${BORDER}` }}
    />
  </div>
);

export default Leads;
