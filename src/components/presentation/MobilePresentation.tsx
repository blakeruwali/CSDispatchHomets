import React, { useState } from "react";
import { HometsLogo } from "./HometsLogo";
import {
  Phone, MapPin, Clock, AlertTriangle, Shield, DollarSign,
  Wrench, Hammer, Settings, Flame, Snowflake, ThermometerSun,
  Repeat, Fan, ChevronRight, Home, Building, Calendar,
  User, Mail, FileText, Siren, PhoneCall, Wind,
  BookOpen, MessageSquare
} from "lucide-react";
import { MobileKBView } from "./mobile/MobileKBView";
import { MobileObjectionsView } from "./mobile/MobileObjectionsView";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const WARM = "hsl(25, 100%, 60%)";
const GREEN = "hsl(142, 71%, 45%)";
const BG = "hsl(0, 0%, 5%)";
const SURFACE = "hsl(0, 0%, 10%)";
const SURFACE2 = "hsl(0, 0%, 14%)";
const TEXT = "hsl(0, 0%, 95%)";
const MUTED = "hsl(0, 0%, 60%)";
const BORDER = "hsl(0, 0%, 18%)";

type Tab = "guide" | "kb" | "objections";

const Section: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <section id={id} className="px-5 py-8" style={{ borderBottom: `1px solid ${BORDER}` }}>
    {children}
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; accent?: string }> = ({ children, accent = ORANGE }) => (
  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: TEXT }}>
    <span style={{ color: accent }}>— </span>{children}
  </h2>
);

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "guide", label: "Guide", icon: Phone },
  { id: "kb", label: "Knowledge Base", icon: BookOpen },
  { id: "objections", label: "Objections", icon: MessageSquare },
];

export const MobilePresentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("guide");

  return (
    <div className="min-h-screen pb-20" style={{ background: BG }}>
      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-40 flex" style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}>
        {tabs.map((t) => {
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-bold transition-colors"
              style={{
                color: active ? ORANGE : MUTED,
                borderBottom: active ? `2px solid ${ORANGE}` : "2px solid transparent",
              }}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {activeTab === "kb" && <MobileKBView />}
      {activeTab === "objections" && <MobileObjectionsView />}

      {activeTab === "guide" && (
        <>
          {/* Hero */}
          <section className="flex flex-col items-center justify-center px-5 pt-12 pb-10 text-center" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <HometsLogo width={220} className="mb-6" />
            <h1 className="text-xl font-bold mb-2" style={{ color: TEXT }}>Customer Service & Dispatch Guide</h1>
            <p className="text-sm mb-4" style={{ color: MUTED }}>Quick Reference for Scheduling HVAC Service Calls</p>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
              style={{ background: `linear-gradient(135deg, ${ORANGE}, ${RED})`, color: "white" }}>
              <Phone className="w-4 h-4" />
              (516) 259-1191
            </div>
            <p className="text-xs mt-4" style={{ color: MUTED }}>Scroll to explore ↓</p>
          </section>

          {/* Call Flow */}
          <Section>
            <SectionTitle>Call Flow</SectionTitle>
            <div className="space-y-2">
              {[
                { icon: PhoneCall, label: "Answer & Greet", color: ORANGE },
                { icon: Siren, label: "Emergency? → Escalate", color: RED },
                { icon: Wrench, label: "Identify Service Type", color: WARM },
                { icon: ThermometerSun, label: "Identify System Type", color: GREEN },
                { icon: Home, label: "Residential or Commercial?", color: ORANGE },
                { icon: User, label: "Collect Customer Info", color: "hsl(200, 80%, 55%)" },
                { icon: FileText, label: "Select Sales Script", color: WARM },
                { icon: Calendar, label: "Book & Confirm", color: GREEN },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl p-3" style={{ background: SURFACE2 }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: s.color }}>
                    <s.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: TEXT }}>{i + 1}. {s.label}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Service Types */}
          <Section>
            <SectionTitle>Service Types</SectionTitle>
            <div className="space-y-3">
              {[
                { icon: Wrench, title: "Repair", color: RED, desc: "System not working, strange noises, leaks" },
                { icon: Hammer, title: "Install", color: ORANGE, desc: "New system or replacement" },
                { icon: Settings, title: "Maintenance", color: GREEN, desc: "Tune-up, filter change, inspection" },
              ].map((s, i) => (
                <div key={i} className="flex gap-3 rounded-xl p-4" style={{ background: SURFACE2 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.color }}>
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: TEXT }}>{s.title}</div>
                    <div className="text-xs" style={{ color: MUTED }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* System Types */}
          <Section>
            <SectionTitle>System Types</SectionTitle>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Flame, label: "Boilers", color: RED },
                { icon: ThermometerSun, label: "Furnaces", color: ORANGE },
                { icon: Snowflake, label: "Air Conditioners", color: "hsl(200, 80%, 55%)" },
                { icon: Repeat, label: "Heat Pumps", color: GREEN },
                { icon: Fan, label: "Mini Splits", color: WARM },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl p-3" style={{ background: SURFACE2 }}>
                  <s.icon className="w-5 h-5 flex-shrink-0" style={{ color: s.color }} />
                  <span className="text-sm font-semibold" style={{ color: TEXT }}>{s.label}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Fee Reference */}
          <Section>
            <SectionTitle accent={WARM}>Fee Reference</SectionTitle>
            <div className="rounded-xl overflow-hidden" style={{ background: SURFACE2 }}>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { label: "Resi Diagnostic", value: "$199", color: ORANGE },
                    { label: "Comm Standard", value: "$269", color: ORANGE },
                    { label: "Comm Complex", value: "$499", color: ORANGE },
                    { label: "Replacement Estimate", value: "FREE", color: GREEN },
                    { label: "Resi Labor", value: "$219/hr", color: WARM },
                    { label: "Comm Labor", value: "$269/hr", color: WARM },
                    { label: "AC/Furnace Tune-Up", value: "$299", color: GREEN },
                    { label: "Premium Tune-Up", value: "$449", color: GREEN },
                  ].map((r, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <td className="p-3" style={{ color: TEXT }}>{r.label}</td>
                      <td className="p-3 text-right font-bold" style={{ color: r.color }}>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Customer Info Checklist */}
          <Section>
            <SectionTitle>Customer Checklist</SectionTitle>
            <div className="space-y-2">
              {[
                "Full Name", "Phone Number", "Service Address", "System Type",
                "System Age", "Problem Description", "Preferred Time Window",
                "Membership Status", "How They Heard About Us",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg p-2.5" style={{ background: SURFACE2 }}>
                  <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ORANGE }} />
                  <span className="text-sm" style={{ color: TEXT }}>{f}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Scheduling */}
          <Section>
            <SectionTitle accent={GREEN}>Scheduling</SectionTitle>
            <div className="rounded-xl p-4 mb-3" style={{ background: `linear-gradient(135deg, ${ORANGE}22, ${RED}11)`, border: `1px solid ${ORANGE}44` }}>
              <div className="text-lg font-extrabold mb-1" style={{ color: ORANGE }}>90-Minute Guarantee</div>
              <div className="text-xs" style={{ color: TEXT }}>We arrive in 90 minutes or the service call is free.</div>
            </div>
            <div className="space-y-2">
              {[
                { window: "Morning", time: "8 AM – 12 PM" },
                { window: "Afternoon", time: "12 PM – 4 PM" },
                { window: "Evening", time: "4 PM – 8 PM" },
                { window: "Emergency", time: "24/7" },
              ].map((w, i) => (
                <div key={i} className="flex justify-between p-2.5 rounded-lg" style={{ background: SURFACE2 }}>
                  <span className="text-sm" style={{ color: MUTED }}>{w.window}</span>
                  <span className="text-sm font-bold" style={{ color: WARM }}>{w.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {[
                { zone: "Nassau County", status: "Primary" },
                { zone: "Suffolk County", status: "Primary" },
                { zone: "Queens / Brooklyn", status: "Case-by-case" },
              ].map((z, i) => (
                <div key={i} className="flex justify-between p-2.5 rounded-lg" style={{ background: SURFACE2 }}>
                  <span className="text-sm" style={{ color: MUTED }}>{z.zone}</span>
                  <span className="text-sm font-bold" style={{ color: GREEN }}>{z.status}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Emergency Protocol */}
          <Section>
            <SectionTitle accent={RED}>Emergency Protocol</SectionTitle>
            <div className="space-y-2">
              {[
                { icon: AlertTriangle, title: "Gas Leak / CO Alarm", desc: "Tell caller to leave & call 911", color: RED },
                { icon: Flame, title: "No Heat (Below 40°F)", desc: "Same-day priority dispatch", color: RED },
                { icon: Wind, title: "Active Flooding", desc: "Shut main valve, dispatch plumbing", color: "hsl(200, 80%, 55%)" },
                { icon: Siren, title: "Dangerous Sounds/Smell", desc: "Shut off system, dispatch ASAP", color: WARM },
              ].map((e, i) => (
                <div key={i} className="flex gap-3 rounded-xl p-3" style={{ background: SURFACE2 }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: e.color }}>
                    <e.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: TEXT }}>{e.title}</div>
                    <div className="text-xs" style={{ color: MUTED }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3 rounded-xl text-xs" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}44`, color: TEXT }}>
              ✅ No emergency surcharge · 90-min guarantee applies · Same licensed techs
            </div>
          </Section>

          {/* Quick Script Reference */}
          <Section>
            <SectionTitle>Sales Scripts</SectionTitle>
            <div className="space-y-2">
              {[
                { label: "Diagnostic — $199 resi / $269 comm", color: ORANGE },
                { label: "Estimate — Always FREE", color: GREEN },
                { label: "Maintenance — $299 tune-up", color: WARM },
                { label: "Membership — $299/yr Home+", color: RED },
                { label: "Plumbing — $199 inspection", color: "hsl(200, 80%, 55%)" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg p-3" style={{ background: SURFACE2 }}>
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="text-sm" style={{ color: TEXT }}>{s.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: MUTED }}>
              🎯 Your job: book the visit. The technician closes on-site.
            </p>
          </Section>

          {/* Contact */}
          <section className="px-5 py-8">
            <SectionTitle>Key Numbers</SectionTitle>
            <div className="space-y-3">
              <a href="tel:5162591191" className="flex items-center gap-3 rounded-xl p-4 no-underline" style={{ background: SURFACE2, color: TEXT }}>
                <Phone className="w-5 h-5" style={{ color: ORANGE }} />
                <div>
                  <div className="font-semibold text-sm">Main Line</div>
                  <div className="text-xs" style={{ color: MUTED }}>(516) 259-1191</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl p-4" style={{ background: SURFACE2 }}>
                <MapPin className="w-5 h-5" style={{ color: ORANGE }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: TEXT }}>Service Area</div>
                  <div className="text-xs" style={{ color: MUTED }}>Nassau & Suffolk Counties, Long Island</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3" style={{ background: `linear-gradient(to top, ${BG}, ${BG}ee)` }}>
        <a
          href="tel:5162591191"
          className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-base font-bold no-underline"
          style={{ background: `linear-gradient(135deg, ${ORANGE}, ${RED})`, color: "white" }}
        >
          <Phone className="w-5 h-5" />
          Call Now — (516) 259-1191
        </a>
      </div>
    </div>
  );
};
