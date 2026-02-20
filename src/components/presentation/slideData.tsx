import React, { useState, useMemo } from "react";
import { HometsLogoDark } from "./HometsLogo";
import {
  Flame, Snowflake, Wind, Cpu, Wrench, AlertTriangle,
  Clock, Shield, DollarSign, Phone, Home,
  ThermometerSun, CheckCircle,
  Zap, ChevronRight, Repeat, MessageSquare,
  Hammer, Settings, Thermometer, Fan, CircleDot,
  ClipboardList, HelpCircle, Building,
  ArrowRight, PhoneCall, MapPin, User, Mail, Calendar,
  FileText, Siren, Timer, Users, Search, X,
  ShieldAlert, HandCoins, UserX, AlertOctagon, Headphones
} from "lucide-react";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const WARM = "hsl(25, 100%, 60%)";
const MUTED = "hsl(0, 0%, 65%)";
const GREEN = "hsl(145, 60%, 45%)";

/* ── DISPATCHER GUIDE SLIDES (1-5) ── */

/* ── Dispatch Slide 1: Title/Cover ── */
export const DispatchTitleSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-20"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
      <span className="text-lg text-white/50 tracking-widest uppercase">Internal Reference</span>
    </div>
    <HometsLogoDark width={450} className="mb-8" />
    <h2 className="text-5xl font-bold text-white mb-4">
      Customer Service &amp; Dispatch Guide
    </h2>
    <p className="text-2xl text-white/60 mb-10 font-light tracking-wide max-w-[900px]">
      Quick Reference for Scheduling HVAC Service Calls
    </p>
    <div className="px-10 py-5 rounded-2xl border-2 border-white/20"
      style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.15), hsl(0,78%,50%,0.1))" }}>
      <div className="flex items-center gap-4">
        <Phone className="w-8 h-8" style={{ color: ORANGE }} />
        <span className="text-3xl font-bold text-white">(516) 259-1191</span>
      </div>
    </div>
    <p className="mt-10 text-lg text-white/40">Nassau &amp; Suffolk County, Long Island, NY</p>
  </div>
);

/* ── Dispatch Slide 2: Type of Service ── */
export const ServiceTypeSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Step 1 — Identify Service Type
    </p>
    <h2 className="text-5xl font-bold text-white mb-10">What Does the Customer Need?</h2>
    <div className="grid grid-cols-3 gap-8">
      {[
        {
          icon: Wrench, title: "Repair", color: RED,
          desc: "System not working, strange noises, leaks, no heat or cooling.",
          phrases: [
            "\"My furnace won't turn on\"",
            "\"There's water leaking from my AC\"",
            "\"I hear a loud banging noise\"",
            "\"No heat / no cold air coming out\"",
          ],
        },
        {
          icon: Hammer, title: "Install", color: ORANGE,
          desc: "New system, replacement of old unit, new construction or renovation.",
          phrases: [
            "\"I need a new AC unit\"",
            "\"My system is 20 years old\"",
            "\"We're building a new home\"",
            "\"I want to switch to a heat pump\"",
          ],
        },
        {
          icon: Settings, title: "Maintenance", color: GREEN,
          desc: "Seasonal tune-up, filter change, annual inspection, preventive care.",
          phrases: [
            "\"I need my annual tune-up\"",
            "\"Can someone check my system?\"",
            "\"I want to change my filters\"",
            "\"Getting ready for winter/summer\"",
          ],
        },
      ].map((svc, i) => (
        <div key={i} className="p-8 rounded-2xl flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: `linear-gradient(135deg, ${svc.color}, ${svc.color}cc)` }}>
            <svc.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">{svc.title}</h3>
          <p className="text-lg text-white/55 mb-6 leading-relaxed">{svc.desc}</p>
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: MUTED }}>
              <MessageSquare className="w-3.5 h-3.5 inline mr-1 mb-0.5" />
              Customer might say:
            </p>
            <div className="space-y-2">
              {svc.phrases.map((p, j) => (
                <div key={j} className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
                  <span className="text-base text-white/70 italic">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Dispatch Slide 3: System Types ── */
export const SystemTypeSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Step 2 — Identify System Type
    </p>
    <h2 className="text-5xl font-bold text-white mb-10">What Kind of System?</h2>
    <div className="grid grid-cols-5 gap-5">
      {[
        {
          icon: Flame, title: "Boilers", color: RED,
          desc: "Hot water / steam heating",
          ask: ["Do you have radiators or baseboard heaters?", "Is it steam or hot water?", "Do you see a large tank with pipes?"],
        },
        {
          icon: ThermometerSun, title: "Furnaces", color: ORANGE,
          desc: "Forced air gas / electric",
          ask: ["Do you have air vents in your rooms?", "Is it gas or electric?", "Can you hear the blower fan?"],
        },
        {
          icon: Snowflake, title: "Air Conditioners", color: "hsl(200, 80%, 55%)",
          desc: "Central & window cooling",
          ask: ["Is there an outdoor unit?", "Central or window unit?", "Does it connect to your ductwork?"],
        },
        {
          icon: Repeat, title: "Heat Pumps", color: GREEN,
          desc: "Dual heating & cooling",
          ask: ["Does your system heat AND cool?", "Is it an all-electric system?", "Single outdoor unit, year-round?"],
        },
        {
          icon: Fan, title: "Mini Splits", color: WARM,
          desc: "Ductless zones",
          ask: ["Wall-mounted indoor units?", "How many rooms/zones?", "Any outdoor condenser visible?"],
        },
      ].map((sys, i) => (
        <div key={i} className="p-6 rounded-2xl flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${sys.color}, ${sys.color}cc)` }}>
            <sys.icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1 text-center">{sys.title}</h3>
          <p className="text-sm text-white/50 mb-5 text-center">{sys.desc}</p>
          <div className="mt-auto">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: MUTED }}>
              <HelpCircle className="w-3 h-3 inline mr-1 mb-0.5" />
              Ask the customer:
            </p>
            <div className="space-y-2">
              {sys.ask.map((q, j) => (
                <div key={j} className="flex items-start gap-2">
                  <CircleDot className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: sys.color }} />
                  <span className="text-sm text-white/65 leading-snug">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Dispatch Slide 4: Diagnostic & Service Fees ── */
export const DiagnosticFeesSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Step 3 — Communicate Fees
    </p>
    <h2 className="text-5xl font-bold text-white mb-10">Diagnostic &amp; Service Fees</h2>
    <div className="grid grid-cols-2 gap-8">
      {/* Diagnostic fee table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="p-6 border-b" style={{ borderColor: "hsl(0,0%,18%)" }}>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <ClipboardList className="w-6 h-6" style={{ color: ORANGE }} />
            Diagnostic / Service Call
          </h3>
          <p className="text-sm text-white/40 mt-1">~90%+ Gross Margin · No emergency surcharge</p>
        </div>
        <div className="divide-y" style={{ borderColor: "hsl(0,0%,18%)" }}>
          {[
            { label: "Residential / Specialty Diagnostic", value: "$199", note: "Standard home service call" },
            { label: "Commercial Standard Diagnostic", value: "$269", note: "Office, retail, multi-unit" },
            { label: "Complex Commercial Diagnostic", value: "$499", note: "Large / multi-system commercial" },
            { label: "System Replacement Estimate", value: "FREE", note: "No-cost in-home estimate", free: true },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between p-5" style={{ borderColor: "hsl(0,0%,18%)" }}>
              <div>
                <p className="text-lg font-semibold text-white">{row.label}</p>
                <p className="text-sm text-white/40 mt-1">{row.note}</p>
              </div>
              <span className="text-3xl font-bold" style={{ color: row.free ? GREEN : ORANGE }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Repair & Tune-Up rates */}
      <div className="flex flex-col gap-6">
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5" style={{ color: RED }} />
            Repair Pricing (55–70% GM)
          </h3>
          <p className="text-sm text-white/50 mb-3">Truck Roll ($199) + Hours × Rate + Material</p>
          <div className="space-y-3">
            {[
              "Residential Labor: $219/hr",
              "Commercial Labor: $269/hr",
              "Material Markup: +$79 to 2.19×",
              "60+ tasks · all prices end in 9",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
                <span className="text-base text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" style={{ color: GREEN }} />
            Tune-Up Pricing (~80%+ GM)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Resi AC / Furnace", value: "$299" },
              { label: "Premium / Specialty", value: "$449" },
              { label: "Commercial RTU", value: "$549" },
              { label: "Commercial VRF", value: "$899" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "hsl(0,0%,15%)" }}>
                <span className="text-sm text-white/60">{item.label}</span>
                <span className="text-lg font-bold" style={{ color: GREEN }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 5: Residential vs. Commercial ── */
export const ResidentialCommercialSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Step 4 — Residential or Commercial?
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Determine Customer Type</h2>
    <div className="grid grid-cols-2 gap-8 mb-6">
      {/* Residential */}
      <div className="p-7 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${WARM}, ${ORANGE})` }}>
            <Home className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Residential</h3>
            <p className="text-sm text-white/40">Single-family, condos, apartments</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          {[
            { label: "Diagnostic", value: "$199" },
            { label: "Labor Rate", value: "$219/hr" },
            { label: "AC / Furnace Tune-Up", value: "$299" },
            { label: "Premium Tune-Up", value: "$449" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 rounded-xl" style={{ background: "hsl(0,0%,15%)" }}>
              <span className="text-sm text-white/60">{item.label}</span>
              <span className="text-lg font-bold" style={{ color: ORANGE }}>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,8%)" }}>
          <p className="text-sm font-bold text-white mb-2">Home+ Plans</p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Comfort — 2 tune-ups, 10% disc.</span>
              <span className="font-bold" style={{ color: WARM }}>$299/yr</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Infinite — 2 tune-ups, 15% disc, $1.5K credit</span>
              <span className="font-bold" style={{ color: WARM }}>$2,999/yr</span>
            </div>
          </div>
        </div>
      </div>
      {/* Commercial */}
      <div className="p-7 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${GREEN}, hsl(145,60%,35%))` }}>
            <Building className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">Commercial</h3>
            <p className="text-sm text-white/40">Offices, retail, multi-unit, restaurants</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          {[
            { label: "Standard Diagnostic", value: "$269" },
            { label: "Complex Diagnostic", value: "$499" },
            { label: "Labor Rate", value: "$269/hr" },
            { label: "RTU Tune-Up", value: "$549" },
            { label: "VRF Tune-Up", value: "$899" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 rounded-xl" style={{ background: "hsl(0,0%,15%)" }}>
              <span className="text-sm text-white/60">{item.label}</span>
              <span className="text-lg font-bold" style={{ color: GREEN }}>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,8%)" }}>
          <p className="text-sm font-bold text-white mb-2">Business+ Plans</p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Essential — Quarterly tune-ups</span>
              <span className="font-bold" style={{ color: GREEN }}>$699/yr</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Premier — Priority + discounts</span>
              <span className="font-bold" style={{ color: GREEN }}>$1,499/yr</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Enterprise — $3K repair credit</span>
              <span className="font-bold" style={{ color: GREEN }}>$5,999/yr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Key questions */}
    <div className="p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))" }}>
      <p className="text-lg font-bold text-white mb-3 flex items-center gap-2">
        <HelpCircle className="w-5 h-5" style={{ color: ORANGE }} />
        Key Questions to Ask
      </p>
      <div className="grid grid-cols-4 gap-6">
        {[
          "\"Is this for a home or a business?\"",
          "\"How many units / systems need service?\"",
          "\"Are you the homeowner or property manager?\"",
          "\"Is there a building super we should coordinate with?\"",
        ].map((q, i) => (
          <div key={i} className="flex items-start gap-2">
            <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <span className="text-base text-white/70 italic">{q}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);



export const DiagnosticSalesScriptSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Sales Script — Diagnostic
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Booking the Diagnostic Call</h2>
    <div className="grid grid-cols-2 gap-8">
      {/* Left: The Script */}
      <div className="flex flex-col gap-5">
        {[
          {
            step: "1",
            label: "Acknowledge & Empathize",
            color: WARM,
            script: "\"I'm sorry to hear that — let's get that taken care of for you right away.\"",
            note: "Mirror their urgency. Never minimize the problem.",
          },
          {
            step: "2",
            label: "Present the Diagnostic",
            color: ORANGE,
            script: "\"We'll send a licensed technician to diagnose exactly what's going on. The diagnostic is $199 for residential, and it covers a full system inspection — not just a quick look. And this amount is credited towards repair if you proceed with the repair.\"",
            note: "Lead with VALUE, not cost. Say 'investment' not 'fee.'",
          },
          {
            step: "3",
            label: "Explain What's Included",
            color: GREEN,
            script: "\"That includes a complete safety check, system performance test, and a written diagnosis with repair options and upfront pricing — no surprises.\"",
            note: "Stack the value. Make $199 feel like a bargain.",
          },
          {
            step: "4",
            label: "Handle the Price Objection",
            color: RED,
            script: "\"I totally understand — most companies charge $150 just to show up and then hit you with a separate repair quote. Our $199 covers everything, and if you move forward with the repair, you already know the full cost upfront.\"",
            note: "Reframe: competitors charge MORE with less transparency.",
          },
          {
            step: "5",
            label: "Close with Urgency",
            color: WARM,
            script: "\"We have a tech available [today/tomorrow]. We guarantee arrival within 90 minutes of your window — or the service call is free. Can I lock that in for you?\"",
            note: "Use the 90-min guarantee as a closing tool.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-extrabold"
              style={{ background: item.color, color: "white" }}>
              {item.step}
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white mb-1">{item.label}</p>
              <p className="text-base italic text-white/75 mb-2 leading-relaxed">{item.script}</p>
              <p className="text-sm text-white/40 flex items-start gap-1.5">
                <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Right: Quick Ref & Objections */}
      <div className="flex flex-col gap-5">
        <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.15), hsl(0,78%,50%,0.08))", border: "1px solid hsl(15,90%,55%,0.3)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5" style={{ color: ORANGE }} />
            Quick Price Reference
          </h3>
          <div className="space-y-2">
            {[
              { label: "Residential Diagnostic", price: "$199" },
              { label: "Commercial Standard", price: "$269" },
              { label: "Complex Commercial", price: "$499" },
              { label: "Replacement Estimate", price: "FREE" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl" style={{ background: "hsl(0,0%,9%)" }}>
                <span className="text-sm text-white/60">{row.label}</span>
                <span className="text-xl font-bold" style={{ color: row.price === "FREE" ? GREEN : ORANGE }}>{row.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: GREEN }} />
            Objection Handlers
          </h3>
          <div className="space-y-4">
            {[
              {
                objection: "\"That's too expensive\"",
                response: "\"It covers a full inspection, safety check, AND upfront repair pricing. Most companies charge just to walk in the door — we give you a complete answer.\"",
              },
              {
                objection: "\"Can you just give me a quote over the phone?\"",
                response: "\"I wish I could! But every system is different — our tech needs to inspect it to give you an accurate, honest price. That's how we avoid surprises.\"",
              },
              {
                objection: "\"I'll think about it\"",
                response: "\"Totally fair. Just so you know, we're booking up fast this week. If you want, I can pencil you in — no obligation, and you can cancel anytime before.\"",
              },
              {
                objection: "\"Do you offer free estimates?\"",
                response: "\"Absolutely — system replacement estimates are always free. If you're looking at a repair, our $199 diagnostic gives you the full picture with no hidden costs.\"",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold mb-1" style={{ color: RED }}>{item.objection}</p>
                <p className="text-sm text-white/65 italic leading-relaxed">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${GREEN}22, ${GREEN}11)`, border: `1px solid ${GREEN}44` }}>
          <p className="text-lg font-bold" style={{ color: GREEN }}>🎯 Goal: Book the appointment</p>
          <p className="text-sm text-white/50 mt-1">Don't sell the repair — sell the visit. The tech closes the job on-site.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 2: ServiceTitan Job Types & Business Units ── */
export const JobTypesSlide = () => {
  const businessUnits = [
    {
      unit: "HVAC Repairs",
      color: RED,
      icon: Wrench,
      jobs: [
        "HVAC Diagnostic",
        "HVAC Repair",
        "No Cool <12",
        "No Cool 12+",
        "No Heat <12",
        "No Heat 12+",
        "No Hot Water <10",
        "No Hot Water 10+",
        "Recall",
        "Warranty",
      ],
    },
    {
      unit: "HVAC Maintenance",
      color: GREEN,
      icon: Settings,
      jobs: [
        "HVAC Maintenance <12",
        "HVAC Maintenance 12+",
      ],
    },
    {
      unit: "HVAC Sales",
      color: WARM,
      icon: DollarSign,
      jobs: ["HVAC Estimate"],
    },
    {
      unit: "HVAC Install",
      color: ORANGE,
      icon: Hammer,
      jobs: ["HVAC Installation"],
    },
    {
      unit: "Plumbing Service",
      color: "hsl(200, 80%, 55%)",
      icon: ClipboardList,
      jobs: [
        "Plumbing Inspection",
        "Plumbing Repair",
        "Plumbing Estimate",
      ],
    },
    {
      unit: "Plumbing Install",
      color: "hsl(220, 70%, 55%)",
      icon: Hammer,
      jobs: ["Plumbing Installation"],
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-24"
      style={{ background: "hsl(0,0%,7%)" }}>
      <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
        ServiceTitan Reference
      </p>
      <h2 className="text-5xl font-bold text-white mb-8">Job Types &amp; Business Units</h2>
      <div className="grid grid-cols-3 gap-6">
        {businessUnits.map((bu, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="p-5 flex items-center gap-3" style={{ borderBottom: `2px solid ${bu.color}` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${bu.color}, ${bu.color}cc)` }}>
                <bu.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{bu.unit}</h3>
                <p className="text-xs text-white/40">{bu.jobs.length} job type{bu.jobs.length > 1 ? "s" : ""}</p>
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              {bu.jobs.map((job, j) => (
                <div key={j} className="flex items-center gap-2.5 p-2.5 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
                  <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: bu.color }} />
                  <span className="text-sm text-white/75">{job}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 rounded-2xl flex items-center gap-4" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))", border: "1px solid hsl(15,90%,55%,0.25)" }}>
        <HelpCircle className="w-6 h-6 flex-shrink-0" style={{ color: ORANGE }} />
        <p className="text-base text-white/70">
          <span className="font-bold text-white">Tip:</span> "&lt;12" and "12+" refer to system age in years — select the right variant based on what the customer tells you. Always match the correct Business Unit so techs and reporting stay accurate.
        </p>
      </div>
    </div>
  );
};

/* ── Dispatch Slide 8: Estimate Sales Script ── */
export const EstimateSalesScriptSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: GREEN }}>
      Sales Script — Estimate
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Booking the Free Estimate</h2>
    <div className="grid grid-cols-2 gap-8">
      {/* Left: The Script */}
      <div className="flex flex-col gap-5">
        {[
          {
            step: "1",
            label: "Qualify the Call",
            color: WARM,
            script: "\"Great — are you looking to replace an existing system, or is this for a new installation?\"",
            note: "Determine replacement vs. new build right away.",
          },
          {
            step: "2",
            label: "Set Expectations",
            color: GREEN,
            script: "\"Perfect — we offer completely free, no-obligation estimates. One of our comfort advisors will come out, assess your space, and design a system that fits your home and budget.\"",
            note: "Lead with FREE + no-obligation. Remove all risk.",
          },
          {
            step: "3",
            label: "Gather Key Info",
            color: ORANGE,
            script: "\"To make sure we send the right advisor, can I get a few quick details? How old is your current system? What's the square footage of your home? And what's prompting the change?\"",
            note: "Age, sqft, and motivation help the advisor prepare.",
          },
          {
            step: "4",
            label: "Build Value",
            color: WARM,
            script: "\"Our advisor will walk you through all your options — from entry-level to premium — with financing available. We carry top brands like Carrier, Lennox, and Goodman, and every install comes with our workmanship guarantee.\"",
            note: "Mention brands, financing, and guarantee to build trust.",
          },
          {
            step: "5",
            label: "Close & Confirm",
            color: GREEN,
            script: "\"We have availability [today/this week]. The visit takes about 45 minutes and you'll walk away with a detailed proposal — even if you decide not to move forward. Can I get you on the schedule?\"",
            note: "Low-pressure close. Emphasize they get value either way.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-extrabold"
              style={{ background: item.color, color: "white" }}>
              {item.step}
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white mb-1">{item.label}</p>
              <p className="text-base italic text-white/75 mb-2 leading-relaxed">{item.script}</p>
              <p className="text-sm text-white/40 flex items-start gap-1.5">
                <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Right: Key Details & Objections */}
      <div className="flex flex-col gap-5">
        <div className="p-6 rounded-2xl" style={{ background: `linear-gradient(135deg, ${GREEN}22, ${GREEN}11)`, border: `1px solid ${GREEN}44` }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5" style={{ color: GREEN }} />
            Estimate Overview
          </h3>
          <div className="space-y-2">
            {[
              { label: "Estimate Visit", price: "FREE", highlight: true },
              { label: "Visit Duration", price: "~45 min", highlight: false },
              { label: "Options Presented", price: "3+", highlight: false },
              { label: "Financing Available", price: "YES", highlight: true },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl" style={{ background: "hsl(0,0%,9%)" }}>
                <span className="text-sm text-white/60">{row.label}</span>
                <span className="text-xl font-bold" style={{ color: row.highlight ? GREEN : ORANGE }}>{row.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: GREEN }} />
            Objection Handlers
          </h3>
          <div className="space-y-4">
            {[
              {
                objection: "\"I'm just getting quotes to compare\"",
                response: "\"That's exactly what we recommend! Our proposal will be detailed with multiple options so you can compare apples to apples. And there's zero pressure — we want you to feel confident in your decision.\"",
              },
              {
                objection: "\"Can you give me a ballpark over the phone?\"",
                response: "\"I wish I could! But every home is different — ductwork, insulation, square footage all affect the recommendation. Our free visit makes sure you get an accurate number, not a guess.\"",
              },
              {
                objection: "\"I'm not ready to buy yet\"",
                response: "\"No problem at all! Most customers use the estimate to plan ahead. You'll have a locked-in price you can act on whenever you're ready — no expiration pressure.\"",
              },
              {
                objection: "\"How much does a new system cost?\"",
                response: "\"Systems range widely depending on your home size and needs. Our advisor will show you options from entry-level to premium — many customers are surprised by the affordable financing options.\"",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold mb-1" style={{ color: RED }}>{item.objection}</p>
                <p className="text-sm text-white/65 italic leading-relaxed">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${GREEN}22, ${GREEN}11)`, border: `1px solid ${GREEN}44` }}>
          <p className="text-lg font-bold" style={{ color: GREEN }}>🎯 Goal: Book the free estimate</p>
          <p className="text-sm text-white/50 mt-1">Sell the visit, not the system. The comfort advisor closes on-site.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 9: Maintenance / Tune-Up Sales Script ── */
export const MaintenanceSalesScriptSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: WARM }}>
      Sales Script — Maintenance
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Booking the Tune-Up</h2>
    <div className="grid grid-cols-2 gap-8">
      {/* Left: The Script */}
      <div className="flex flex-col gap-5">
        {[
          {
            step: "1",
            label: "Open with Seasonal Urgency",
            color: WARM,
            script: "\"Great timing — [summer/winter] is right around the corner, and this is when systems break down the most. A tune-up now can save you from an emergency call later.\"",
            note: "Tie it to the season. Create urgency without pressure.",
          },
          {
            step: "2",
            label: "Present the Service",
            color: ORANGE,
            script: "\"Our tune-up is a comprehensive multi-point inspection — we clean the system, check all safety components, test efficiency, and make sure everything is running at peak performance.\"",
            note: "Stack the value. Make it sound thorough, not routine.",
          },
          {
            step: "3",
            label: "Explain the Benefits",
            color: GREEN,
            script: "\"Regular maintenance extends your system's life by years, keeps your energy bills lower, and — most importantly — catches small problems before they become expensive repairs.\"",
            note: "Hit all 3: longevity, savings, prevention.",
          },
          {
            step: "4",
            label: "Mention the Membership",
            color: WARM,
            script: "\"We also offer a maintenance membership that includes priority scheduling, discounts on repairs, and two tune-ups a year. Most customers save more than the membership costs in the first visit alone.\"",
            note: "Plant the seed — the tech will close the membership on-site.",
          },
          {
            step: "5",
            label: "Close & Schedule",
            color: GREEN,
            script: "\"We have openings [this week/next week]. The visit takes about an hour, and you'll know exactly where your system stands. Want me to get you booked?\"",
            note: "Simple, direct close. Don't overcomplicate it.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-extrabold"
              style={{ background: item.color, color: "white" }}>
              {item.step}
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white mb-1">{item.label}</p>
              <p className="text-base italic text-white/75 mb-2 leading-relaxed">{item.script}</p>
              <p className="text-sm text-white/40 flex items-start gap-1.5">
                <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Right: Key Details & Objections */}
      <div className="flex flex-col gap-5">
        <div className="p-6 rounded-2xl" style={{ background: `linear-gradient(135deg, ${WARM}22, ${WARM}11)`, border: `1px solid ${WARM}44` }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" style={{ color: WARM }} />
            Tune-Up Overview
          </h3>
          <div className="space-y-2">
            {[
              { label: "Multi-Point Inspection", price: "✓", highlight: true },
              { label: "Visit Duration", price: "~60 min", highlight: false },
              { label: "System Age Variants", price: "<12 / 12+", highlight: false },
              { label: "Membership Upsell", price: "ON-SITE", highlight: true },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl" style={{ background: "hsl(0,0%,9%)" }}>
                <span className="text-sm text-white/60">{row.label}</span>
                <span className="text-xl font-bold" style={{ color: row.highlight ? WARM : ORANGE }}>{row.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: GREEN }} />
            Objection Handlers
          </h3>
          <div className="space-y-4">
            {[
              {
                objection: "\"My system is working fine, why do I need a tune-up?\"",
                response: "\"That's actually the best time to do it! A tune-up catches hidden issues — like a cracked heat exchanger or a failing capacitor — before they leave you without heat or AC when you need it most.\"",
              },
              {
                objection: "\"How much does a tune-up cost?\"",
                response: "\"It depends on the system type and age. Our tech will give you the full breakdown on-site. What I can tell you is that a tune-up costs a fraction of what an emergency repair would — it's the best investment you can make for your system.\"",
              },
              {
                objection: "\"I had it serviced last year\"",
                response: "\"That's great — you're on top of it! Manufacturers actually recommend service every 6-12 months to maintain your warranty and keep efficiency up. Think of it like an oil change for your car.\"",
              },
              {
                objection: "\"Can't I just do it myself?\"",
                response: "\"You can do the basics like changing filters, absolutely. But our techs check refrigerant levels, electrical connections, and safety controls that require professional tools and training. It's about safety and catching what you can't see.\"",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold mb-1" style={{ color: RED }}>{item.objection}</p>
                <p className="text-sm text-white/65 italic leading-relaxed">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${WARM}22, ${WARM}11)`, border: `1px solid ${WARM}44` }}>
          <p className="text-lg font-bold" style={{ color: WARM }}>🎯 Goal: Book the tune-up + plant membership seed</p>
          <p className="text-sm text-white/50 mt-1">The tech upsells the membership on-site. You just need to get them in the door.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 10: Membership / Service Agreement Sales Script ── */
export const MembershipSalesScriptSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: WARM }}>
      Sales Script — Membership
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Upselling Maintenance Plans</h2>
    <div className="grid grid-cols-2 gap-8">
      {/* Left: The Script */}
      <div className="flex flex-col gap-5">
        {[
          {
            step: "1",
            label: "Transition Naturally",
            color: WARM,
            script: "\"Before we wrap up — I want to make sure you never have to deal with an unexpected breakdown again. Have you heard about our maintenance membership?\"",
            note: "Use after booking a service or at the end of any call.",
          },
          {
            step: "2",
            label: "Present the Value",
            color: ORANGE,
            script: "\"It includes two tune-ups a year — one before summer, one before winter — so your system is always ready. Plus you get priority scheduling, which means you jump to the front of the line during peak season.\"",
            note: "Lead with what they GET, not what they pay.",
          },
          {
            step: "3",
            label: "Highlight Savings",
            color: GREEN,
            script: "\"Members also get a discount on all repairs. Most customers save more than the cost of the membership on their very first repair. It basically pays for itself.\"",
            note: "Make the math obvious — savings > cost.",
          },
          {
            step: "4",
            label: "Handle Hesitation",
            color: RED,
            script: "\"I totally get it — no pressure at all. But think about it this way: one emergency call on a Saturday night can easily cost more than an entire year of membership. This is insurance for your comfort.\"",
            note: "Reframe as protection, not expense.",
          },
          {
            step: "5",
            label: "Soft Close",
            color: GREEN,
            script: "\"Tell you what — I can add it to today's visit and our tech will walk you through everything on-site. If it's not for you, no hard feelings. Sound fair?\"",
            note: "Low-commitment close. Let the tech seal the deal.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-extrabold"
              style={{ background: item.color, color: "white" }}>
              {item.step}
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white mb-1">{item.label}</p>
              <p className="text-base italic text-white/75 mb-2 leading-relaxed">{item.script}</p>
              <p className="text-sm text-white/40 flex items-start gap-1.5">
                <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Right: Plans & Objections */}
      <div className="flex flex-col gap-5">
        <div className="p-6 rounded-2xl" style={{ background: `linear-gradient(135deg, ${WARM}22, ${ORANGE}11)`, border: `1px solid ${WARM}44` }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: WARM }} />
            Membership Tiers
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-xl" style={{ background: "hsl(0,0%,9%)" }}>
              <p className="text-sm text-white/40 mb-1">Residential — Home+</p>
              <div className="flex justify-between items-center">
                <span className="text-base text-white/70">Starting at</span>
                <span className="text-2xl font-bold" style={{ color: GREEN }}>$299<span className="text-sm text-white/40">/yr</span></span>
              </div>
              <p className="text-xs text-white/30 mt-1">Up to $2,999/yr for premium tier</p>
            </div>
            <div className="p-3 rounded-xl" style={{ background: "hsl(0,0%,9%)" }}>
              <p className="text-sm text-white/40 mb-1">Commercial — Business+</p>
              <div className="flex justify-between items-center">
                <span className="text-base text-white/70">Starting at</span>
                <span className="text-2xl font-bold" style={{ color: ORANGE }}>$699<span className="text-sm text-white/40">/yr</span></span>
              </div>
              <p className="text-xs text-white/30 mt-1">Up to $5,999/yr for premium tier</p>
            </div>
          </div>
          <div className="mt-3 p-3 rounded-xl space-y-1.5" style={{ background: "hsl(0,0%,9%)" }}>
            <p className="text-sm font-bold text-white">All plans include:</p>
            {["Priority scheduling", "2 tune-ups per year", "Repair discounts", "No overtime charges"].map((perk, i) => (
              <div key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5" style={{ color: GREEN }} />
                <span className="text-sm text-white/65">{perk}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: GREEN }} />
            Objection Handlers
          </h3>
          <div className="space-y-4">
            {[
              {
                objection: "\"I don't need a membership, my system is new\"",
                response: "\"That's actually the perfect time to start! Keeping up with maintenance from day one protects your manufacturer warranty and keeps your system running at peak efficiency for years.\"",
              },
              {
                objection: "\"I'll just call when something breaks\"",
                response: "\"You absolutely can. But during peak season, our members get priority — non-members sometimes wait 2-3 days. Plus, a single emergency repair often costs more than a full year of membership.\"",
              },
              {
                objection: "\"That's an extra expense I don't need\"",
                response: "\"I hear you. But think of it this way — the membership discount on just one repair usually covers the annual cost. Everything after that is pure savings. It's really more of an investment than an expense.\"",
              },
              {
                objection: "\"Let me think about it\"",
                response: "\"Of course! Our tech can go over all the details during your visit too. A lot of customers like to see the value in person before deciding — totally fair.\"",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold mb-1" style={{ color: RED }}>{item.objection}</p>
                <p className="text-sm text-white/65 italic leading-relaxed">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${WARM}22, ${WARM}11)`, border: `1px solid ${WARM}44` }}>
          <p className="text-lg font-bold" style={{ color: WARM }}>🎯 Goal: Plant the seed — tech closes on-site</p>
          <p className="text-sm text-white/50 mt-1">Mention it on every call. Even a "maybe" is a win — the tech does the heavy lifting.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 11: Plumbing Sales Script ── */
const PLUMB_BLUE = "hsl(200, 80%, 55%)";
export const PlumbingSalesScriptSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: PLUMB_BLUE }}>
      Sales Script — Plumbing
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Booking Plumbing Service &amp; Repair</h2>
    <div className="grid grid-cols-2 gap-8">
      {/* Left: The Script */}
      <div className="flex flex-col gap-5">
        {[
          {
            step: "1",
            label: "Assess Urgency",
            color: RED,
            script: "\"I'm sorry you're dealing with that. Let me ask a few quick questions so we can get you the right help — is this an active leak or flooding right now, or is it something that's been building up?\"",
            note: "Active leaks = emergency dispatch. Non-urgent = schedule normally.",
          },
          {
            step: "2",
            label: "Describe What We Do",
            color: PLUMB_BLUE,
            script: "\"We'll send a licensed plumber to diagnose the issue. They'll inspect everything, explain exactly what's going on, and give you upfront pricing before any work begins — no surprises.\"",
            note: "Upfront pricing is the #1 trust builder for plumbing.",
          },
          {
            step: "3",
            label: "Gather Details",
            color: ORANGE,
            script: "\"To make sure we send the right tech with the right equipment — can you tell me what type of issue you're seeing? Is it a drain, toilet, water heater, leak, or something else?\"",
            note: "Match to job type: Repair, Inspection, or Installation.",
          },
          {
            step: "4",
            label: "Build Confidence",
            color: GREEN,
            script: "\"Our plumbers are licensed and background-checked. We stand behind every job with a workmanship guarantee, and we always clean up after ourselves — your home will look like we were never there.\"",
            note: "Plumbing customers worry about mess and trust. Address both.",
          },
          {
            step: "5",
            label: "Close & Schedule",
            color: PLUMB_BLUE,
            script: "\"We have availability [today/tomorrow]. Our tech will call 30 minutes before arrival so you're not waiting around. Can I get you on the schedule?\"",
            note: "Courtesy call mention reduces no-shows and builds trust.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 rounded-2xl p-5" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-extrabold"
              style={{ background: item.color, color: "white" }}>
              {item.step}
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white mb-1">{item.label}</p>
              <p className="text-base italic text-white/75 mb-2 leading-relaxed">{item.script}</p>
              <p className="text-sm text-white/40 flex items-start gap-1.5">
                <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Right: Job Type Ref & Objections */}
      <div className="flex flex-col gap-5">
        <div className="p-6 rounded-2xl" style={{ background: `linear-gradient(135deg, ${PLUMB_BLUE}22, ${PLUMB_BLUE}11)`, border: `1px solid ${PLUMB_BLUE}44` }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5" style={{ color: PLUMB_BLUE }} />
            ServiceTitan Job Type Guide
          </h3>
          <div className="space-y-2">
            {[
              { scenario: "Leak, clog, broken fixture, running toilet", job: "Plumbing Repair", bu: "Plumbing Service" },
              { scenario: "Camera inspection, sewer scope, full assessment", job: "Plumbing Inspection", bu: "Plumbing Service" },
              { scenario: "Wants quote for new water heater / repipe", job: "Plumbing Estimate", bu: "Plumbing Service" },
              { scenario: "Approved install — water heater, fixture, repipe", job: "Plumbing Installation", bu: "Plumbing Install" },
            ].map((row, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: "hsl(0,0%,9%)" }}>
                <p className="text-xs text-white/40 mb-1">{row.scenario}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-white">{row.job}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${PLUMB_BLUE}33`, color: PLUMB_BLUE }}>{row.bu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" style={{ color: GREEN }} />
            Objection Handlers
          </h3>
          <div className="space-y-4">
            {[
              {
                objection: "\"How much will the repair cost?\"",
                response: "\"Every plumbing issue is a little different, so I can't give an exact number over the phone. But our plumber will diagnose it and give you an upfront price before any work starts — you'll always know the cost before saying yes.\"",
              },
              {
                objection: "\"I'll just try to fix it myself\"",
                response: "\"I totally understand the DIY instinct! Just be careful with plumbing — a small mistake can lead to water damage that costs thousands. Our tech can at least take a look and let you know what you're dealing with.\"",
              },
              {
                objection: "\"Can you come right now? It's an emergency\"",
                response: "\"Absolutely — let me check our emergency availability. We prioritize active leaks and flooding. Can you shut off the water supply to that area in the meantime? I'll get someone to you as fast as possible.\"",
              },
              {
                objection: "\"I want to get a few quotes first\"",
                response: "\"Smart move. We offer free estimates for installations, and for repairs, our plumber gives you the full price upfront on-site. Many customers appreciate that we don't charge just to show up and look.\"",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold mb-1" style={{ color: RED }}>{item.objection}</p>
                <p className="text-sm text-white/65 italic leading-relaxed">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${PLUMB_BLUE}22, ${PLUMB_BLUE}11)`, border: `1px solid ${PLUMB_BLUE}44` }}>
          <p className="text-lg font-bold" style={{ color: PLUMB_BLUE }}>🎯 Goal: Book the plumbing visit</p>
          <p className="text-sm text-white/50 mt-1">Qualify the urgency, match the right job type, and get them on the schedule.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 12: Sales Scripts Cheat Sheet ── */
export const ScriptsCheatSheetSlide = () => {
  const scripts = [
    {
      title: "Diagnostic",
      color: ORANGE,
      icon: Wrench,
      steps: ["Empathize with issue", "Present $199 diagnostic", "Stack value (safety check + upfront pricing)", "Handle price objection", "Close with 90-min guarantee"],
      price: "$199",
      goal: "Book the diagnostic visit",
      topObjection: "\"Too expensive\" → Competitors charge more with less transparency. $199 credited toward repair.",
    },
    {
      title: "Estimate",
      color: GREEN,
      icon: DollarSign,
      steps: ["Qualify: replacement or new?", "It's FREE & no-obligation", "Gather: age, sqft, motivation", "Mention brands + financing", "Close: ~45 min visit"],
      price: "FREE",
      goal: "Book the free estimate",
      topObjection: "\"Ballpark over phone?\" → Every home is different; free visit = accurate number.",
    },
    {
      title: "Maintenance",
      color: WARM,
      icon: Settings,
      steps: ["Seasonal urgency hook", "Multi-point inspection value", "Benefits: lifespan, bills, prevention", "Plant membership seed", "Close: ~60 min visit"],
      price: "Varies",
      goal: "Book tune-up + seed membership",
      topObjection: "\"System is fine\" → Best time! Catches hidden issues before emergencies.",
    },
    {
      title: "Membership",
      color: WARM,
      icon: Shield,
      steps: ["Transition after any booking", "2 tune-ups + priority scheduling", "Savings > membership cost", "Reframe as protection", "Soft close — tech seals deal"],
      price: "From $299/yr",
      goal: "Plant the seed for on-site close",
      topObjection: "\"Extra expense\" → One repair covers the annual cost. Everything after = savings.",
    },
    {
      title: "Plumbing",
      color: PLUMB_BLUE,
      icon: ClipboardList,
      steps: ["Assess urgency (active leak?)", "Upfront pricing, no surprises", "Gather: drain/toilet/heater/leak", "Licensed, background-checked, clean", "Close: 30-min courtesy call"],
      price: "On-site quote",
      goal: "Book the plumbing visit",
      topObjection: "\"Fix it myself\" → Small mistakes = thousands in water damage. Let us look first.",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-24"
      style={{ background: "hsl(0,0%,7%)" }}>
      <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
        Quick Reference
      </p>
      <h2 className="text-5xl font-bold text-white mb-6">Sales Scripts Cheat Sheet</h2>
      <div className="grid grid-cols-5 gap-4">
        {scripts.map((s, i) => (
          <div key={i} className="rounded-2xl overflow-hidden flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
            {/* Header */}
            <div className="p-4 flex items-center gap-3" style={{ borderBottom: `2px solid ${s.color}` }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}>
                <s.icon className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">{s.title}</h3>
                <span className="text-xs font-bold" style={{ color: s.price === "FREE" ? GREEN : s.color }}>{s.price}</span>
              </div>
            </div>
            {/* Steps */}
            <div className="p-3 flex-1 space-y-1.5">
              {s.steps.map((step, j) => (
                <div key={j} className="flex items-start gap-2 p-2 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
                  <span className="text-xs font-extrabold mt-0.5 flex-shrink-0" style={{ color: s.color }}>{j + 1}</span>
                  <span className="text-xs text-white/70 leading-snug">{step}</span>
                </div>
              ))}
            </div>
            {/* Top Objection */}
            <div className="px-3 pb-2">
              <p className="text-xs italic text-white/40 leading-snug p-2 rounded-lg" style={{ background: "hsl(0,0%,9%)" }}>
                {s.topObjection}
              </p>
            </div>
            {/* Goal */}
            <div className="p-3 text-center" style={{ background: `${s.color}15`, borderTop: `1px solid ${s.color}33` }}>
              <p className="text-xs font-bold" style={{ color: s.color }}>🎯 {s.goal}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 p-4 rounded-2xl flex items-center gap-4" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))", border: "1px solid hsl(15,90%,55%,0.25)" }}>
        <HelpCircle className="w-6 h-6 flex-shrink-0" style={{ color: ORANGE }} />
        <p className="text-base text-white/70">
          <span className="font-bold text-white">Remember:</span> Your job is to book the visit — not sell the repair, system, or membership. The technician closes on-site. Focus on empathy, value, and urgency.
        </p>
      </div>
    </div>
  );
};

/* ── NEW SLIDE: Call Flow / Decision Tree ── */
export const CallFlowSlide = () => {
  const steps = [
    { icon: PhoneCall, label: "Answer Call", desc: "Greet & identify caller", color: ORANGE },
    { icon: Siren, label: "Emergency?", desc: "Gas leak / no heat / flood → escalate", color: RED },
    { icon: Wrench, label: "Service Type", desc: "Repair · Install · Maintenance", color: WARM },
    { icon: Thermometer, label: "System Type", desc: "Boiler · Furnace · AC · Heat Pump · Mini Split", color: GREEN },
    { icon: Home, label: "Resi or Comm?", desc: "Determines pricing & job type", color: ORANGE },
    { icon: ClipboardList, label: "Collect Info", desc: "Name, address, phone, system age", color: "hsl(200, 80%, 55%)" },
    { icon: MessageSquare, label: "Select Script", desc: "Diagnostic · Estimate · Maintenance · Membership · Plumbing", color: WARM },
    { icon: Calendar, label: "Book It", desc: "Confirm window & 90-min guarantee", color: GREEN },
  ];
  return (
    <div className="flex flex-col justify-center h-full px-24" style={{ background: "hsl(0,0%,7%)" }}>
      <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
        Call Intake Overview
      </p>
      <h2 className="text-5xl font-bold text-white mb-10">Call Flow — Decision Tree</h2>
      <div className="flex items-center justify-between gap-2">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center text-center" style={{ width: 180 }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{s.label}</h3>
              <p className="text-xs text-white/50 leading-snug">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 flex-shrink-0 -mt-6" style={{ color: "hsl(0,0%,30%)" }} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-10 p-5 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED}22, ${RED}11)`, border: `1px solid ${RED}44` }}>
        <p className="text-lg font-bold text-white flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5" style={{ color: RED }} />
          Emergency Shortcut
        </p>
        <p className="text-base text-white/60">
          If the caller reports a <span className="font-bold text-white">gas leak, carbon monoxide alarm, flooding, or no heat in freezing temps</span> — skip to Emergency Protocol immediately. Do not continue standard intake.
        </p>
      </div>
    </div>
  );
};

/* ── NEW SLIDE: Customer Information Checklist ── */
export const CustomerChecklistSlide = () => {
  const fields = [
    { label: "Full Name", icon: User, placeholder: "First & Last", required: true },
    { label: "Phone Number", icon: Phone, placeholder: "Primary + alt", required: true },
    { label: "Email Address", icon: Mail, placeholder: "For confirmation", required: false },
    { label: "Service Address", icon: MapPin, placeholder: "Full address w/ apt #", required: true },
    { label: "System Type", icon: Thermometer, placeholder: "Boiler / Furnace / AC / HP / Mini Split", required: true },
    { label: "System Age", icon: Clock, placeholder: "Years or 'not sure'", required: true },
    { label: "Problem Description", icon: FileText, placeholder: "Symptoms in customer's words", required: true },
    { label: "Preferred Time Window", icon: Calendar, placeholder: "Morning / Afternoon / ASAP", required: true },
    { label: "Membership Status", icon: Shield, placeholder: "Home+ / Business+ / None", required: false },
    { label: "How They Heard About Us", icon: Users, placeholder: "Google / Referral / Repeat", required: false },
  ];
  return (
    <div className="flex flex-col justify-center h-full px-24" style={{ background: "hsl(0,0%,7%)" }}>
      <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
        Every Call — No Exceptions
      </p>
      <h2 className="text-5xl font-bold text-white mb-10">Customer Information Checklist</h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {fields.map((f, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${ORANGE}44, ${ORANGE}22)` }}>
              <f.icon className="w-5 h-5" style={{ color: ORANGE }} />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white flex items-center gap-2">
                {f.label}
                {f.required && <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ background: `${RED}33`, color: RED }}>Required</span>}
              </p>
              <p className="text-sm text-white/40">{f.placeholder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── NEW SLIDE: Scheduling & Dispatch Rules ── */
export const SchedulingRulesSlide = () => (
  <div className="flex flex-col justify-center h-full px-24" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: GREEN }}>
      Dispatch Operations
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Scheduling &amp; Dispatch Rules</h2>
    <div className="grid grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: `linear-gradient(135deg, ${ORANGE}, ${RED})` }}>
          <Timer className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">90-Minute Guarantee</h3>
        <div className="space-y-2 text-sm text-white/60">
          <p>Tech arrives within 90 minutes of the scheduled window — or the service call is <span className="font-bold text-white">FREE</span>.</p>
          <p>Always confirm: <span className="italic text-white/75">"We guarantee arrival within 90 minutes of your window."</span></p>
        </div>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: `linear-gradient(135deg, ${WARM}, ${ORANGE})` }}>
          <Calendar className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Time Windows</h3>
        <div className="space-y-2">
          {[
            { window: "Morning", time: "8:00 AM – 12:00 PM" },
            { window: "Afternoon", time: "12:00 PM – 4:00 PM" },
            { window: "Evening", time: "4:00 PM – 8:00 PM" },
            { window: "Emergency", time: "Available 24/7" },
          ].map((w, i) => (
            <div key={i} className="flex justify-between p-2.5 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <span className="text-sm text-white/60">{w.window}</span>
              <span className="text-sm font-bold" style={{ color: WARM }}>{w.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: `linear-gradient(135deg, ${GREEN}, hsl(145,60%,35%))`}}>
          <MapPin className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Service Zones</h3>
        <div className="space-y-2">
          {[
            { zone: "Nassau County", status: "Primary", color: GREEN },
            { zone: "Suffolk County", status: "Primary", color: GREEN },
            { zone: "Queens / Brooklyn", status: "Case-by-case", color: WARM },
          ].map((z, i) => (
            <div key={i} className="flex justify-between p-2.5 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <span className="text-sm text-white/60">{z.zone}</span>
              <span className="text-sm font-bold" style={{ color: z.color }}>{z.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-2 gap-6">
      <div className="p-5 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Users className="w-5 h-5" style={{ color: ORANGE }} />
          Tech Assignment Logic
        </h3>
        <div className="space-y-1.5 text-sm text-white/60">
          <p>1. Match by <span className="font-bold text-white">zone proximity</span> first</p>
          <p>2. Then by <span className="font-bold text-white">skillset</span> (boiler vs. AC vs. plumbing)</p>
          <p>3. Then by <span className="font-bold text-white">availability</span> — earliest open slot</p>
          <p>4. Members get <span className="font-bold" style={{ color: WARM }}>priority scheduling</span></p>
        </div>
      </div>
      <div className="p-5 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED}22, ${RED}11)`, border: `1px solid ${RED}44` }}>
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" style={{ color: RED }} />
          When Fully Booked
        </h3>
        <div className="space-y-1.5 text-sm text-white/60">
          <p>1. Offer the <span className="font-bold text-white">next available slot</span> and add to waitlist</p>
          <p>2. For emergencies: <span className="font-bold text-white">always escalate to dispatch manager</span></p>
          <p>3. Never turn away a customer — offer callback or next-day priority</p>
          <p>4. Log the overflow in ServiceTitan for capacity planning</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── NEW SLIDE: Emergency & After-Hours Protocol ── */
export const EmergencyProtocolSlide = () => (
  <div className="flex flex-col justify-center h-full px-24" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: RED }}>
      ⚠️ Priority Protocol
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Emergency &amp; After-Hours</h2>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">What Qualifies as an Emergency</h3>
        <div className="space-y-3">
          {[
            { icon: AlertTriangle, title: "Gas Leak / CO Alarm", desc: "Instruct caller to leave immediately & call 911. Then dispatch.", color: RED },
            { icon: Flame, title: "No Heat (Below 40°F)", desc: "Winter emergency — dispatch same-day, priority override.", color: RED },
            { icon: Snowflake, title: "No AC (Elderly / Medical)", desc: "Health risk — treat as emergency. Confirm medical need.", color: ORANGE },
            { icon: Wind, title: "Active Flooding / Water Leak", desc: "Instruct to shut main valve. Dispatch plumbing emergency.", color: "hsl(200, 80%, 55%)" },
            { icon: Siren, title: "System Making Dangerous Sounds", desc: "Banging, screeching, electrical burning smell — shut off & dispatch.", color: WARM },
          ].map((e, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${e.color}, ${e.color}cc)` }}>
                <e.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">{e.title}</p>
                <p className="text-sm text-white/55">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="p-6 rounded-2xl" style={{ background: `linear-gradient(135deg, ${RED}22, ${RED}11)`, border: `1px solid ${RED}44` }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" style={{ color: RED }} />
            After-Hours Procedures
          </h3>
          <div className="space-y-2 text-sm text-white/60">
            <p>• <span className="font-bold text-white">Hours:</span> Mon–Sun, 7 AM – 10 PM standard</p>
            <p>• <span className="font-bold text-white">After 10 PM:</span> Emergency-only dispatch</p>
            <p>• <span className="font-bold text-white">No surcharge</span> — same pricing 24/7</p>
            <p>• Log all after-hours calls in ServiceTitan with "After-Hours" tag</p>
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <PhoneCall className="w-5 h-5" style={{ color: WARM }} />
            Escalation Contacts
          </h3>
          <div className="space-y-3">
            {[
              { role: "Dispatch Manager", action: "All emergencies & full-book overrides" },
              { role: "On-Call Technician", action: "After-hours emergency dispatch" },
              { role: "Operations Manager", action: "Customer complaints & escalations" },
            ].map((c, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: "hsl(0,0%,15%)" }}>
                <p className="text-sm font-bold text-white">{c.role}</p>
                <p className="text-xs text-white/45">{c.action}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 rounded-2xl" style={{ background: `linear-gradient(135deg, ${GREEN}22, ${GREEN}11)`, border: `1px solid ${GREEN}44` }}>
          <p className="text-lg font-bold" style={{ color: GREEN }}>✅ Key Guarantees</p>
          <div className="mt-2 space-y-1 text-sm text-white/60">
            <p>• No emergency surcharge — ever</p>
            <p>• 90-minute arrival guarantee still applies</p>
            <p>• Same licensed, background-checked technicians</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 17: Comprehensive Objection Handling ── */

export const objectionCategories = [
  {
    category: "Price Objections",
    icon: DollarSign,
    color: ORANGE,
    objections: [
      {
        trigger: "\"That's too expensive.\"",
        response: "I completely understand — no one wants to overpay. Our diagnostic fee covers a full system inspection by a licensed technician who will explain exactly what's going on before any work is done. There are never hidden fees, and the diagnostic fee is waived if you move forward with the repair.",
        tip: "Acknowledge → Reframe value → Remove risk",
      },
      {
        trigger: "\"I can get it cheaper somewhere else.\"",
        response: "That's totally fair to shop around. What I can tell you is our technicians are fully licensed and insured, we offer a 90-minute arrival guarantee, and we stand behind every repair with a satisfaction guarantee. Many customers come to us after a cheaper fix didn't hold up.",
        tip: "Don't bash competitors — sell trust & guarantees",
      },
      {
        trigger: "\"Why do I have to pay just for someone to come look at it?\"",
        response: "Great question! The $199 diagnostic covers a full inspection — our tech will diagnose the issue, explain your options, and give you an upfront price before any work begins. If you choose to go ahead with the repair, the diagnostic fee gets applied to the total cost. There's no pressure and no surprises.",
        tip: "Explain value of diagnosis, mention fee rolls into repair",
      },
      {
        trigger: "\"Can you give me a price over the phone?\"",
        response: "I wish I could! But HVAC systems are complex, and giving a price without seeing the system could lead to inaccurate quotes. Our tech will provide an exact price on-site before doing any work — and you're never obligated to proceed.",
        tip: "Never quote repairs over the phone — always on-site",
      },
      {
        trigger: "\"I wasn't expecting it to cost this much.\"",
        response: "I hear you. The good news is you don't have to decide right now. Our tech will walk you through all your options — from the most affordable fix to a long-term solution. We also offer financing options to make it easier.",
        tip: "Offer options & financing, no pressure",
      },
      {
        trigger: "\"Do you offer any discounts or coupons?\"",
        response: "We do have our Home+ Membership Plan which saves you money year-round — 10-15% off all repairs, two annual tune-ups included, and priority scheduling. Would you like me to tell you more about it?",
        tip: "Pivot to membership — it's the best ongoing discount",
      },
    ],
  },
  {
    category: "Trust & Credibility",
    icon: Shield,
    color: "hsl(200, 80%, 55%)",
    objections: [
      {
        trigger: "\"I've never heard of your company.\"",
        response: "That's okay! We're a fully licensed and insured HVAC company serving Nassau and Suffolk County. We have hundreds of 5-star reviews, and every technician is background-checked. We'd love to earn your trust on this first visit.",
        tip: "Social proof + credentials + low-risk first visit",
      },
      {
        trigger: "\"How do I know your techs are qualified?\"",
        response: "All of our technicians are fully licensed, insured, and go through rigorous background checks. They undergo continuous training and are equipped with the latest diagnostic tools. You're in great hands.",
        tip: "Emphasize licensing, training, background checks",
      },
      {
        trigger: "\"My last HVAC company ripped me off.\"",
        response: "I'm really sorry to hear that — that's frustrating. We do things differently. Our tech will show you exactly what's wrong, explain your options, and give you the price upfront before any work starts. You're always in control.",
        tip: "Empathize first, then differentiate with transparency",
      },
      {
        trigger: "\"Are you guys licensed and insured?\"",
        response: "Absolutely! We are fully licensed and insured in the state of New York. Every technician carries their credentials, and we're happy to provide proof of insurance if needed.",
        tip: "Confident, direct answer — offer documentation",
      },
    ],
  },
  {
    category: "Timing & Urgency",
    icon: Clock,
    color: WARM,
    objections: [
      {
        trigger: "\"I'll just wait and see if it gets worse.\"",
        response: "I totally understand wanting to hold off. The only thing I'd mention is that small HVAC issues tend to get bigger — and more expensive — over time. Catching it early usually saves money in the long run. We can get someone out quickly so you have peace of mind.",
        tip: "Gentle urgency — don't scare, just inform",
      },
      {
        trigger: "\"I don't have time for an appointment right now.\"",
        response: "No problem at all! We offer flexible scheduling including early morning, evening, and weekend slots. We also have a 90-minute arrival window so you're not stuck waiting all day. What time works best for you?",
        tip: "Flexibility + 90-min window removes the hassle",
      },
      {
        trigger: "\"How long will the repair take?\"",
        response: "Most repairs are completed in 1-3 hours, but our technician will give you an accurate time estimate once they've diagnosed the issue. We always respect your time.",
        tip: "Set expectations, be honest about unknowns",
      },
      {
        trigger: "\"Can you come today / right now?\"",
        response: "Let me check our schedule! We do have same-day availability in many cases, and we guarantee arrival within a 90-minute window. Let me see what's open for you.",
        tip: "Check board, offer fastest available slot",
      },
    ],
  },
  {
    category: "Angry / Upset Customers",
    icon: AlertTriangle,
    color: RED,
    objections: [
      {
        trigger: "\"I want to speak to a manager!\"",
        response: "I completely understand, and I want to make sure this gets resolved for you. Let me get all the details so I can connect you with the right person who can help. Can you tell me what happened?",
        tip: "Don't resist — gather info first, then escalate. Never say 'calm down'.",
      },
      {
        trigger: "\"Your technician was rude / unprofessional.\"",
        response: "I'm so sorry you had that experience — that's not the standard we hold ourselves to. I'm going to document this and escalate it to our operations manager right away. Can I also schedule a follow-up visit with a different technician at no extra charge?",
        tip: "Apologize sincerely, document, offer resolution",
      },
      {
        trigger: "\"The problem came back after your repair.\"",
        response: "I'm sorry to hear that. We stand behind our work, so let's get a technician back out to take a look at no additional diagnostic charge. We want to make this right.",
        tip: "Warranty callback — no charge for re-diagnosis",
      },
      {
        trigger: "\"I've been waiting too long!\"",
        response: "I sincerely apologize for the wait. Let me check on the status of your appointment right now and give you an updated ETA. Your time is valuable and I want to make sure we're taking care of you.",
        tip: "Apologize → Check status → Provide update → Offer solution",
      },
      {
        trigger: "\"I want a refund.\"",
        response: "I understand your frustration. Let me pull up your account and review the details of the service. I'll connect you with our team to discuss options — we always want to be fair and make things right.",
        tip: "Don't promise a refund — escalate to manager with full context",
      },
    ],
  },
  {
    category: "Competitor Comparisons",
    icon: Users,
    color: GREEN,
    objections: [
      {
        trigger: "\"Another company quoted me less.\"",
        response: "I appreciate you sharing that. I'd just encourage you to compare apples to apples — our quote includes licensed technicians, a satisfaction guarantee, and no hidden fees. Sometimes lower quotes don't include parts, labor, or warranty. We want you to feel confident in your investment.",
        tip: "Never badmouth — highlight what's included in YOUR price",
      },
      {
        trigger: "\"My regular guy can do it for less.\"",
        response: "If you have someone you trust, that's great! If they're ever unavailable or you want a second opinion, we're here. We offer upfront pricing and guarantees so you always know what you're getting.",
        tip: "Respect their relationship — position as backup/second opinion",
      },
      {
        trigger: "\"I saw a deal on [Groupon / Angi / etc.]\"",
        response: "Those deals can be tempting! Just be sure to check what's included — many promotional offers have limitations or upsell once the tech is on-site. With us, the price we quote is the price you pay, guaranteed.",
        tip: "Transparency is the differentiator",
      },
    ],
  },
  {
    category: "Service & Process",
    icon: HelpCircle,
    color: "hsl(270, 60%, 55%)",
    objections: [
      {
        trigger: "\"Why can't you fix it over the phone?\"",
        response: "I wish we could! But HVAC systems have many components, and our technician needs to physically inspect the system to give you an accurate diagnosis and safe repair. We wouldn't want to guess and have you waste money on the wrong fix.",
        tip: "Safety + accuracy — never diagnose remotely",
      },
      {
        trigger: "\"Can I just buy the part and install it myself?\"",
        response: "Some parts can be a DIY job, but for your safety and warranty protection, HVAC repairs should be done by a licensed professional — especially anything involving gas, refrigerant, or electrical. Our tech will make sure it's done safely and up to code.",
        tip: "Emphasize safety, code compliance, warranty",
      },
      {
        trigger: "\"What if I'm not happy with the repair?\"",
        response: "We have a satisfaction guarantee! If something isn't right, we'll come back and make it right. Your satisfaction is our top priority, and we never consider a job done until you're happy.",
        tip: "Lead with the guarantee — it removes all risk",
      },
      {
        trigger: "\"Do you guarantee your work?\"",
        response: "Absolutely! All of our repairs come with a satisfaction guarantee, and parts carry manufacturer warranties. We stand behind every job.",
        tip: "Confident yes — guarantee + warranty",
      },
      {
        trigger: "\"I need to talk to my spouse / landlord first.\"",
        response: "Of course, take your time! I can hold this appointment slot for you, or if you'd like, I can send you the details so you can share them. Just give us a call back when you're ready.",
        tip: "Don't pressure — hold the slot, make it easy to return",
      },
    ],
  },
  {
    category: "Rental / Tenant Scenarios",
    icon: Building,
    color: "hsl(180, 50%, 50%)",
    objections: [
      {
        trigger: "\"I'm a renter — my landlord has to approve this.\"",
        response: "Totally understand! We work with tenants and landlords all the time. If you'd like, we can do the diagnostic and provide a detailed report you can share with your landlord. That way they have all the info they need to approve the work quickly.",
        tip: "Offer a diagnostic report as a bridge — makes landlord approval easier",
      },
      {
        trigger: "\"My landlord won't pay for it.\"",
        response: "I'm sorry to hear that. In most cases, HVAC is the landlord's responsibility — especially if it's a safety issue like no heat or a gas concern. We can provide documentation that may help. Would you like us to come out and assess the situation?",
        tip: "Gently educate on landlord obligations, offer documentation",
      },
      {
        trigger: "\"Can you bill my landlord directly?\"",
        response: "We typically collect payment at the time of service, but we can absolutely provide a detailed invoice and diagnostic report that your landlord can use for reimbursement. Many landlords prefer it that way.",
        tip: "Payment at service, but provide full documentation for reimbursement",
      },
      {
        trigger: "\"I don't know what kind of system I have — I just rent here.\"",
        response: "No worries at all! That's actually very common. Our technician will identify your system when they arrive and explain everything. All we need from you is the address and the issue you're experiencing.",
        tip: "Reassure them — tech handles identification on-site",
      },
      {
        trigger: "\"My landlord has their own HVAC guy.\"",
        response: "That's great! If they're available quickly, go with them. But if you're stuck waiting — especially in extreme weather — we offer same-day service and a 90-minute arrival guarantee. We're here as a backup option.",
        tip: "Position as the fast backup, not a replacement",
      },
      {
        trigger: "\"I'm moving out soon, why should I fix it?\"",
        response: "I get it — you don't want to invest in a place you're leaving. But if it's a comfort or safety issue while you're still there, a diagnostic can help. Plus, your landlord may cover the cost since it's their property.",
        tip: "Focus on immediate comfort + landlord responsibility",
      },
    ],
  },
  {
    category: "Warranty Expiration Pushback",
    icon: FileText,
    color: "hsl(45, 85%, 50%)",
    objections: [
      {
        trigger: "\"My system is still under warranty — why should I pay?\"",
        response: "Great news that you have a warranty! Manufacturer warranties typically cover parts, but labor and the diagnostic visit are separate. Our tech can verify your warranty status on-site and help you get the most out of your coverage.",
        tip: "Clarify parts vs. labor warranty — help them maximize coverage",
      },
      {
        trigger: "\"The warranty just expired — can you still cover it?\"",
        response: "Unfortunately we can't extend manufacturer warranties, but here's the good news: our Home+ Membership gives you 10-15% off all repairs going forward, plus priority scheduling and annual tune-ups. It's the best way to protect yourself after warranty.",
        tip: "Pivot to membership as post-warranty protection",
      },
      {
        trigger: "\"I paid a lot for this system — it shouldn't be breaking already.\"",
        response: "I completely understand your frustration. Even high-quality systems need maintenance and can develop issues over time. Let's get a tech out to diagnose it — it might be a simple fix. And if the system is still under warranty, we'll make sure you get full credit for covered parts.",
        tip: "Validate frustration, set realistic expectations, check warranty",
      },
      {
        trigger: "\"Who handles the warranty — you or the manufacturer?\"",
        response: "The manufacturer covers the parts warranty, and we handle the labor. Our technician can look up your warranty status on-site, submit any claims, and make sure you're not paying for parts that are covered. We make the process easy.",
        tip: "Be clear on roles — position as warranty facilitator",
      },
      {
        trigger: "\"I didn't register my warranty — am I out of luck?\"",
        response: "Not necessarily! Many manufacturers have a grace period for registration, and some warranties apply automatically. Our tech can check the serial number on-site and verify your coverage. It's worth checking before assuming the worst.",
        tip: "Don't let them give up — tech can verify on-site",
      },
      {
        trigger: "\"My extended warranty company says you need to be approved.\"",
        response: "We work with most home warranty companies. Give me the name of your provider and your claim number, and I'll verify everything before we send a tech. We want to make sure you're fully covered.",
        tip: "Get warranty company name + claim # upfront to avoid surprises",
      },
    ],
  },
  {
    category: "Seasonal Timing Objections",
    icon: Calendar,
    color: "hsl(320, 60%, 55%)",
    objections: [
      {
        trigger: "\"It's not that hot/cold yet — I'll wait.\"",
        response: "That's actually the best time to get it checked! Right now our schedule is more flexible, so you'll get faster service and more appointment options. Once the extreme weather hits, everyone calls at once and wait times go up significantly.",
        tip: "Off-season = faster service, more availability, better prep",
      },
      {
        trigger: "\"I'll just wait until summer/winter to deal with it.\"",
        response: "I hear you, but small issues now often turn into emergency breakdowns when you need the system most. A quick diagnostic now can catch problems early and save you from a much more expensive repair — or a no-heat/no-AC emergency.",
        tip: "Gentle urgency — small fix now vs. emergency later",
      },
      {
        trigger: "\"Is this really urgent or can it wait?\"",
        response: "Without seeing the system, I can't say for sure — but I'd rather you have peace of mind. Our diagnostic will tell you exactly what's going on. If it's minor, the tech will let you know and you can plan accordingly. No pressure.",
        tip: "Honest answer — use diagnostic as the decision-maker",
      },
      {
        trigger: "\"I only use AC/heat a few months — not worth fixing.\"",
        response: "I understand. But even seasonal systems need to be in working order for safety and efficiency. A system running poorly drives up your energy bills even in short seasons. Plus, fixing it now means you're ready when you need it — no emergency calls.",
        tip: "Efficiency + safety + readiness when needed",
      },
      {
        trigger: "\"Can I just get a tune-up instead of a repair?\"",
        response: "A tune-up is a great idea for maintenance! But if you're experiencing a specific issue — like strange noises, weak airflow, or temperature problems — you'll want a diagnostic so the tech can identify and fix the root cause. We can discuss both options when the tech arrives.",
        tip: "Clarify tune-up vs. diagnostic — don't upsell, educate",
      },
      {
        trigger: "\"I heard you should replace your system in spring/fall — should I wait?\"",
        response: "Spring and fall are popular for replacements because demand is lower and you have more time to decide. But if your system is struggling now, waiting could mean an uncomfortable or unsafe situation. Let's do a diagnostic to see where your system stands — then you can make an informed decision.",
        tip: "Validate the advice, but prioritize current comfort and safety",
      },
    ],
  },
];

export const ObjectionHandlingSlide = () => {
  const [search, setSearch] = useState("");
  const query = search.toLowerCase().trim();

  const filtered = useMemo(() => {
    if (!query) return objectionCategories;
    return objectionCategories
      .map((cat) => ({
        ...cat,
        objections: cat.objections.filter(
          (o) =>
            o.trigger.toLowerCase().includes(query) ||
            o.response.toLowerCase().includes(query) ||
            o.tip.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.objections.length > 0);
  }, [query]);

  return (
    <div className="flex flex-col h-full px-16 py-10" style={{ background: "hsl(0,0%,7%)" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xl font-semibold mb-1 uppercase tracking-widest" style={{ color: ORANGE }}>
            Quick Reference — Objection Handling
          </p>
          <h2 className="text-4xl font-bold text-white">What to Say When Customers Push Back</h2>
        </div>
        <Shield className="w-10 h-10" style={{ color: ORANGE }} />
      </div>

      {/* Search bar */}
      <div className="mb-5">
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: "hsl(0,0%,12%)", border: "1px solid hsl(0,0%,20%)" }}
        >
          <Search className="w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search objections... (e.g. 'too expensive', 'refund', 'competitor')"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/30"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-white/40 hover:text-white/70">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Objection cards — scrollable */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2" style={{ maxHeight: "calc(100% - 180px)" }}>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-white/40">No matching objections found</p>
            <p className="text-sm text-white/25 mt-2">Try different keywords</p>
          </div>
        )}
        {filtered.map((cat, ci) => {
          const Icon = cat.icon;
          return (
            <div key={ci}>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${cat.color}22` }}
                >
                  <Icon className="w-4 h-4" style={{ color: cat.color }} />
                </div>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                <span className="text-xs text-white/30 ml-1">({cat.objections.length})</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {cat.objections.map((obj, oi) => (
                  <div
                    key={oi}
                    className="p-4 rounded-xl"
                    style={{ background: "hsl(0,0%,11%)", border: "1px solid hsl(0,0%,16%)" }}
                  >
                    <p className="text-base font-bold mb-2" style={{ color: cat.color }}>
                      🗣️ {obj.trigger}
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3">
                      ✅ {obj.response}
                    </p>
                    <div
                      className="px-3 py-2 rounded-lg text-xs text-white/50 italic"
                      style={{ background: "hsl(0,0%,8%)" }}
                    >
                      💡 Tip: {obj.tip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Dispatch Slide 18: Dispatch Decision Flowchart ── */
export const DispatchFlowchartSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: "hsl(200,80%,55%)" }}>
      Dispatch Operations
    </p>
    <h2 className="text-5xl font-bold text-white mb-8">Dispatch Decision Flowchart</h2>

    {/* Flowchart */}
    <div className="flex items-start gap-4 mb-8">
      {/* Step 1: New Call */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-full p-5 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${ORANGE}, ${WARM})` }}>
          <PhoneCall className="w-7 h-7 text-white mx-auto mb-2" />
          <p className="text-lg font-bold text-white">New Call</p>
          <p className="text-xs text-white/70">Identify need & urgency</p>
        </div>
        <ArrowRight className="w-5 h-5 text-white/30 rotate-90 my-2" />
        <div className="w-full p-3 rounded-xl text-center" style={{ background: "hsl(0,0%,13%)", border: "1px solid hsl(0,0%,18%)" }}>
          <p className="text-sm text-white/70">Is it an emergency?</p>
        </div>
        <div className="flex gap-6 mt-2 w-full">
          <div className="flex flex-col items-center flex-1">
            <span className="text-xs font-bold mb-1" style={{ color: RED }}>YES</span>
            <div className="w-full p-2.5 rounded-lg text-center" style={{ background: `${RED}20`, border: `1px solid ${RED}44` }}>
              <Siren className="w-4 h-4 mx-auto mb-1" style={{ color: RED }} />
              <p className="text-xs text-white/80">Priority 1</p>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-xs font-bold mb-1" style={{ color: GREEN }}>NO</span>
            <div className="w-full p-2.5 rounded-lg text-center" style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}44` }}>
              <Calendar className="w-4 h-4 mx-auto mb-1" style={{ color: GREEN }} />
              <p className="text-xs text-white/80">Schedule</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <ArrowRight className="w-6 h-6 text-white/20 flex-shrink-0 mt-8" />

      {/* Step 2: Check Board */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-full p-5 rounded-2xl text-center" style={{ background: "hsl(200,80%,55%)" }}>
          <ClipboardList className="w-7 h-7 text-white mx-auto mb-2" />
          <p className="text-lg font-bold text-white">Check Board</p>
          <p className="text-xs text-white/70">Review availability</p>
        </div>
        <ArrowRight className="w-5 h-5 text-white/30 rotate-90 my-2" />
        <div className="w-full space-y-2">
          <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,13%)", border: "1px solid hsl(0,0%,18%)" }}>
            <p className="text-xs text-white/60 mb-1">Check:</p>
            <div className="space-y-1">
              {["Tech skills match", "Zone proximity", "Open time slots", "Member priority"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: "hsl(200,80%,55%)" }} />
                  <span className="text-xs text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <ArrowRight className="w-6 h-6 text-white/20 flex-shrink-0 mt-8" />

      {/* Step 3: Assign */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-full p-5 rounded-2xl text-center" style={{ background: GREEN }}>
          <User className="w-7 h-7 text-white mx-auto mb-2" />
          <p className="text-lg font-bold text-white">Assign Tech</p>
          <p className="text-xs text-white/70">Best match for the job</p>
        </div>
        <ArrowRight className="w-5 h-5 text-white/30 rotate-90 my-2" />
        <div className="w-full p-3 rounded-xl text-center" style={{ background: "hsl(0,0%,13%)", border: "1px solid hsl(0,0%,18%)" }}>
          <p className="text-sm text-white/70">Board full?</p>
        </div>
        <div className="flex gap-6 mt-2 w-full">
          <div className="flex flex-col items-center flex-1">
            <span className="text-xs font-bold mb-1" style={{ color: ORANGE }}>YES</span>
            <div className="w-full p-2.5 rounded-lg text-center" style={{ background: `${ORANGE}20`, border: `1px solid ${ORANGE}44` }}>
              <p className="text-xs text-white/80">Squeeze-in or Waitlist</p>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-xs font-bold mb-1" style={{ color: GREEN }}>NO</span>
            <div className="w-full p-2.5 rounded-lg text-center" style={{ background: `${GREEN}20`, border: `1px solid ${GREEN}44` }}>
              <p className="text-xs text-white/80">Book slot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <ArrowRight className="w-6 h-6 text-white/20 flex-shrink-0 mt-8" />

      {/* Step 4: Confirm */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-full p-5 rounded-2xl text-center" style={{ background: `linear-gradient(135deg, ${WARM}, ${ORANGE})` }}>
          <Phone className="w-7 h-7 text-white mx-auto mb-2" />
          <p className="text-lg font-bold text-white">Confirm</p>
          <p className="text-xs text-white/70">Call customer with ETA</p>
        </div>
        <ArrowRight className="w-5 h-5 text-white/30 rotate-90 my-2" />
        <div className="w-full space-y-2">
          {[
            { label: "Confirm date/time", icon: Calendar },
            { label: "Set arrival window", icon: Clock },
            { label: "Text tech photo + ETA", icon: Mail },
            { label: "Log in ServiceTitan", icon: FileText },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "hsl(0,0%,13%)" }}>
              <item.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ORANGE }} />
              <span className="text-xs text-white/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom: Priority Reference */}
    <div className="grid grid-cols-4 gap-4">
      {[
        { level: "P1 — Immediate", time: "< 1 hour", examples: "Gas leak, CO alarm, flooding, fire risk", color: RED },
        { level: "P2 — Same Day", time: "2–4 hours", examples: "No heat < 40°F, no AC > 90°F, sewage backup", color: ORANGE },
        { level: "P3 — Next Day", time: "Next available", examples: "System running poorly, noises, thermostat issues", color: WARM },
        { level: "P4 — Scheduled", time: "Customer choice", examples: "Tune-ups, estimates, maintenance, installs", color: GREEN },
      ].map((p, i) => (
        <div key={i} className="p-4 rounded-xl" style={{ background: `${p.color}10`, border: `1px solid ${p.color}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: p.color }}>{p.level}</p>
          <p className="text-xs text-white/50 mb-2">Response: {p.time}</p>
          <p className="text-xs text-white/60">{p.examples}</p>
        </div>
      ))}
    </div>
  </div>
);

/* ── Slide 19: Repair Running Long ── */
export const RepairRunningLongSlide = () => (
  <div className="flex flex-col gap-6 px-20 py-12" style={{ background: "hsl(0,0%,7%)" }}>
    <div>
      <p className="text-lg font-semibold uppercase tracking-widest mb-2" style={{ color: ORANGE }}>
        Dispatch Scenario
      </p>
      <h2 className="text-4xl font-bold text-white">Repair Running Long — Update &amp; Dispatch Protocol</h2>
      <p className="text-base text-white/50 mt-2">When a tech needs more time on-site, follow these escalating thresholds</p>
    </div>

    {/* Timeline thresholds */}
    <div className="grid grid-cols-3 gap-5">
      {/* Threshold 1 */}
      <div className="rounded-2xl p-6 flex flex-col" style={{ background: `${WARM}12`, border: `1px solid ${WARM}33` }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${WARM}25` }}>
            <Clock className="w-5 h-5" style={{ color: WARM }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: WARM }}>+30 Minutes</p>
            <p className="text-xs text-white/40">Over Estimate</p>
          </div>
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">CS → Current Customer</p>
              <p className="text-xs text-white/50 italic">"Our tech wants to make sure the job is done right — they need about 30 more minutes. Thank you for your patience."</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">Dispatch</p>
              <p className="text-xs text-white/50">Flag next job on board — no changes yet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Threshold 2 */}
      <div className="rounded-2xl p-6 flex flex-col" style={{ background: `${ORANGE}12`, border: `1px solid ${ORANGE}33` }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${ORANGE}25` }}>
            <AlertTriangle className="w-5 h-5" style={{ color: ORANGE }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: ORANGE }}>+1 Hour</p>
            <p className="text-xs text-white/40">Over Estimate</p>
          </div>
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">CS → Current Customer</p>
              <p className="text-xs text-white/50">Update with new ETA and reassure quality</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">Dispatch</p>
              <p className="text-xs text-white/50">Can another tech absorb the next job?</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <PhoneCall className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">CS → Next Customer</p>
              <p className="text-xs text-white/50 italic">"We want to give you a heads up — your tech is finishing a complex repair. We can offer a new window or send a different tech."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Threshold 3 */}
      <div className="rounded-2xl p-6 flex flex-col" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${RED}25` }}>
            <Siren className="w-5 h-5" style={{ color: RED }} />
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: RED }}>+2 Hours / Next Window</p>
            <p className="text-xs text-white/40">Major Delay</p>
          </div>
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">Dispatch</p>
              <p className="text-xs text-white/50">Reassign ALL remaining jobs on that tech's board</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">CS → All Affected Customers</p>
              <p className="text-xs text-white/50">Call each with new tech info and updated ETA</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
            <div>
              <p className="text-xs font-semibold text-white/80 mb-1">Documentation</p>
              <p className="text-xs text-white/50">Log delay reason in ServiceTitan for reporting</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Do / Don't footer */}
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}33` }}>
        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GREEN }} />
        <div className="space-y-1">
          <p className="text-sm font-bold" style={{ color: GREEN }}>DO</p>
          <p className="text-xs text-white/60">Call before the customer calls you</p>
          <p className="text-xs text-white/60">Offer options: new window or different tech</p>
          <p className="text-xs text-white/60">Log every delay with a reason code</p>
        </div>
      </div>
      <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
        <X className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: RED }} />
        <div className="space-y-1">
          <p className="text-sm font-bold" style={{ color: RED }}>DON'T</p>
          <p className="text-xs text-white/60">Promise exact arrival times — use windows</p>
          <p className="text-xs text-white/60">Wait for the customer to call and complain</p>
          <p className="text-xs text-white/60">Leave jobs unassigned — always reassign</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 20: Tech Calls Out Sick Mid-Day ── */
const TechCalloutSlide = () => (
  <div className="flex flex-col gap-6" style={{ color: "hsl(0,0%,95%)" }}>
    {/* Header */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${RED}22`, border: `1px solid ${RED}44` }}>
        <UserX className="w-6 h-6" style={{ color: RED }} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Tech Calls Out Sick — Mid-Day Protocol</h2>
        <p className="text-base text-white/50 mt-1">Redistributing jobs when a tech goes down during the day</p>
      </div>
    </div>

    {/* Step-by-step protocol */}
    <div className="grid grid-cols-1 gap-4">
      {/* Step 1 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: `${ORANGE}22`, color: ORANGE, border: `1px solid ${ORANGE}44` }}>1</div>
          <p className="text-lg font-bold text-white">Assess the Board</p>
          <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: `${ORANGE}22`, color: ORANGE }}>Dispatch — Immediately</span>
        </div>
        <div className="grid grid-cols-3 gap-3 ml-11">
          <div className="flex items-start gap-2">
            <ClipboardList className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Pull up the sick tech's remaining jobs for the day</p>
          </div>
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Identify priority: any emergencies or callbacks first</p>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Note time windows promised to each customer</p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: `${WARM}22`, color: WARM, border: `1px solid ${WARM}44` }}>2</div>
          <p className="text-lg font-bold text-white">Redistribute Jobs</p>
          <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: `${WARM}22`, color: WARM }}>Dispatch — Within 15 min</span>
        </div>
        <div className="grid grid-cols-3 gap-3 ml-11">
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60">Check remaining techs' boards for capacity and zone proximity</p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60">Assign by zone first — minimize drive time between jobs</p>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60">If no capacity today, move non-urgent jobs to next available day</p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: `${GREEN}22`, color: GREEN, border: `1px solid ${GREEN}44` }}>3</div>
          <p className="text-lg font-bold text-white">Notify All Affected Customers</p>
          <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: `${GREEN}22`, color: GREEN }}>CS — Within 30 min</span>
        </div>
        <div className="grid grid-cols-2 gap-3 ml-11">
          <div className="rounded-lg p-3" style={{ background: "hsl(0,0%,8%)", border: "1px solid hsl(0,0%,15%)" }}>
            <p className="text-xs font-semibold text-white/80 mb-2 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" style={{ color: GREEN }} />
              If reassigned to another tech today:
            </p>
            <p className="text-xs text-white/50 italic">"Hi [Name], we had a scheduling change and [New Tech] will be heading your way. Your new arrival window is [Time]. We appreciate your flexibility!"</p>
          </div>
          <div className="rounded-lg p-3" style={{ background: "hsl(0,0%,8%)", border: "1px solid hsl(0,0%,15%)" }}>
            <p className="text-xs font-semibold text-white/80 mb-2 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" style={{ color: WARM }} />
              If rescheduled to another day:
            </p>
            <p className="text-xs text-white/50 italic">"Hi [Name], unfortunately we need to reschedule your appointment. The earliest we can get a tech out is [Date/Window]. We apologize for the inconvenience."</p>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: `${MUTED}22`, color: MUTED, border: `1px solid ${MUTED}44` }}>4</div>
          <p className="text-lg font-bold text-white">Document & Update</p>
          <span className="ml-auto text-xs px-2 py-1 rounded-full" style={{ background: `${MUTED}22`, color: MUTED }}>Both — End of Shift</span>
        </div>
        <div className="grid grid-cols-3 gap-3 ml-11">
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: MUTED }} />
            <p className="text-xs text-white/60">Log tech callout reason in ServiceTitan</p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: MUTED }} />
            <p className="text-xs text-white/60">Confirm all jobs reassigned or rescheduled — none left unassigned</p>
          </div>
          <div className="flex items-start gap-2">
            <Headphones className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: MUTED }} />
            <p className="text-xs text-white/60">Flag any customer complaints for follow-up next day</p>
          </div>
        </div>
      </div>
    </div>

    {/* Priority order reminder */}
    <div className="rounded-xl p-4" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
      <p className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: RED }}>
        <Siren className="w-4 h-4" />
        Redistribution Priority Order
      </p>
      <div className="grid grid-cols-4 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${RED}22`, color: RED }}>1</span>
          <p className="text-xs text-white/60">Gas leaks & safety calls</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>2</span>
          <p className="text-xs text-white/60">No heat / no AC (weather-dependent)</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${WARM}22`, color: WARM }}>3</span>
          <p className="text-xs text-white/60">Callbacks & warranty returns</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${MUTED}22`, color: MUTED }}>4</span>
          <p className="text-xs text-white/60">Maintenance & tune-ups (reschedule first)</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 21: Last-Minute Cancellation — Fill the Open Slot ── */
const LastMinuteCancelSlide = () => (
  <div className="flex flex-col gap-6 h-full px-16 py-10" style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${WARM}18`, border: `1px solid ${WARM}30` }}>
        <UserX className="w-6 h-6" style={{ color: WARM }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Last-Minute Cancellation — Fill the Slot</h2>
        <p className="text-sm text-white/50">When a customer cancels and the tech has an open window</p>
      </div>
    </div>

    {/* 3-step flow */}
    <div className="grid grid-cols-3 gap-4">
      {/* Step 1 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>1</span>
          <h3 className="text-sm font-bold text-white">Confirm & Document</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Ask reason for cancellation — log in ServiceTitan</p>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Offer to reschedule before hanging up</p>
          </div>
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Note cancellation reason &amp; whether rescheduled</p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: `${GREEN}22`, color: GREEN }}>2</span>
          <h3 className="text-sm font-bold text-white">Fill the Slot</h3>
        </div>
        <p className="text-[10px] uppercase tracking-wider text-white/30 mb-2">Check in this order:</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: `${GREEN}22`, color: GREEN }}>A</span>
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Waiting list</span> — customers who wanted an earlier slot</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: `${GREEN}22`, color: GREEN }}>B</span>
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Unbooked estimates</span> — open quotes that need follow-up</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: `${GREEN}22`, color: GREEN }}>C</span>
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Pull-ahead</span> — move a later job on same tech's board forward</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0" style={{ background: `${GREEN}22`, color: GREEN }}>D</span>
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Maintenance blitz</span> — overdue membership tune-ups in the zone</p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: `${WARM}22`, color: WARM }}>3</span>
          <h3 className="text-sm font-bold text-white">Notify & Dispatch</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <User className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60">Call replacement customer: <em className="text-white/40">"Great news — we had an opening and can get to you today!"</em></p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60">Confirm address and provide updated arrival window</p>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60">Update tech's board and send dispatch notification</p>
          </div>
        </div>
      </div>
    </div>

    {/* Script box */}
    <div className="rounded-xl p-4" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
      <p className="text-xs font-bold mb-2 flex items-center gap-2" style={{ color: GREEN }}>
        <Phone className="w-3.5 h-3.5" />
        Cancellation Save Script
      </p>
      <p className="text-xs text-white/50 italic leading-relaxed">
        "I understand — before I cancel, I want to make sure: is there anything we can do to keep this appointment? We have a tech already in your area today and we'd hate for you to have to wait for another opening."
      </p>
    </div>

    {/* Do / Don't footer */}
    <div className="grid grid-cols-2 gap-4 mt-auto">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Try to save the appointment first</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Fill the slot within 10 minutes</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Notify the tech immediately of the change</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Leave the slot empty without trying to fill it</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Send the tech home early without dispatch approval</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Skip logging the cancellation reason</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Slide 22: Multiple Emergencies — Triage Protocol ── */
const MultipleEmergenciesSlide = () => (
  <div className="flex flex-col gap-6 h-full px-16 py-10" style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${RED}18`, border: `1px solid ${RED}30` }}>
        <Siren className="w-6 h-6" style={{ color: RED }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Multiple Emergencies — Triage Protocol</h2>
        <p className="text-sm text-white/50">When several emergency calls come in at once</p>
      </div>
    </div>

    {/* Triage matrix */}
    <div className="grid grid-cols-2 gap-4">
      {/* Priority ranking */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <AlertOctagon className="w-4 h-4" style={{ color: RED }} />
          Step 1: Rank by Severity
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: `${RED}12`, border: `1px solid ${RED}18` }}>
            <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${RED}22`, color: RED }}>P1</span>
            <div>
              <p className="text-xs font-semibold text-white/80">Life Safety</p>
              <p className="text-[10px] text-white/40">Gas leak, CO alarm, electrical fire risk</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}15` }}>
            <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>P2</span>
            <div>
              <p className="text-xs font-semibold text-white/80">Property Damage Risk</p>
              <p className="text-[10px] text-white/40">Active flooding, burst pipe, system sparking</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: `${WARM}08`, border: `1px solid ${WARM}12` }}>
            <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${WARM}22`, color: WARM }}>P3</span>
            <div>
              <p className="text-xs font-semibold text-white/80">Comfort Emergency</p>
              <p className="text-[10px] text-white/40">No heat (below 32°F), no AC (above 95°F), elderly/infant in home</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg" style={{ background: `${MUTED}08`, border: `1px solid ${MUTED}12` }}>
            <span className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${MUTED}22`, color: MUTED }}>P4</span>
            <div>
              <p className="text-xs font-semibold text-white/80">Urgent but Not Emergency</p>
              <p className="text-[10px] text-white/40">System down but no safety/damage risk, mild weather</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dispatch actions */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" style={{ color: ORANGE }} />
          Step 2: Assign Across All Techs
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Map proximity</span> — which tech is closest to each emergency?</p>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Check current job status</span> — who's wrapping up vs. mid-repair?</p>
          </div>
          <div className="flex items-start gap-2">
            <Wrench className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Skill match</span> — gas leak needs gas-certified tech; electrical needs qualified tech</p>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Pull from non-urgent</span> — bump maintenance/tune-ups to free up techs for emergencies</p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="font-semibold text-white/80">Call for backup</span> — if all techs committed, contact on-call or partner company</p>
          </div>
        </div>
      </div>
    </div>

    {/* Customer communication */}
    <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
      <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
        <Headphones className="w-4 h-4" style={{ color: GREEN }} />
        Step 3: Customer Communication During Triage
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: RED }}>P1 Customers</p>
          <p className="text-xs text-white/50 italic">"Stay safe — keep everyone out of the area. A tech is being dispatched to you right now."</p>
          <p className="text-[10px] text-white/30">Call 911 if gas/CO. Tech dispatched immediately.</p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: ORANGE }}>P2-P3 Customers</p>
          <p className="text-xs text-white/50 italic">"We're handling multiple emergencies right now and you're our priority. A tech will be with you within [window]. I'll call you with an update in 30 minutes."</p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: MUTED }}>Bumped Non-Urgent Customers</p>
          <p className="text-xs text-white/50 italic">"We've had several emergency calls come in and need to prioritize safety situations. We'd like to reschedule you to [next available]. I'm sorry for the inconvenience."</p>
        </div>
      </div>
    </div>

    {/* Do / Don't footer */}
    <div className="grid grid-cols-2 gap-4 mt-auto">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Rank all emergencies before dispatching any</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Set a callback timer for every waiting customer</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Log all triage decisions for post-day review</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Dispatch first-come-first-served during a surge</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Leave bumped customers without a call</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Send unqualified techs to gas or electrical emergencies</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Slide 23: Scope Escalation — Job Larger Than Expected ── */
const ScopeEscalationSlide = () => (
  <div className="flex flex-col gap-6 h-full px-16 py-10" style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${ORANGE}18`, border: `1px solid ${ORANGE}30` }}>
        <AlertTriangle className="w-6 h-6" style={{ color: ORANGE }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Scope Escalation — Job Larger Than Expected</h2>
        <p className="text-sm text-white/50">When a tech discovers the repair is actually a replacement or major project</p>
      </div>
    </div>

    {/* 3-step protocol */}
    <div className="grid grid-cols-3 gap-4">
      {/* Step 1 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>1</div>
          <h3 className="text-sm font-bold text-white">Tech Reports Scope Change</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Tech calls dispatch with findings — <span className="text-white/80 font-semibold">what they found</span> and <span className="text-white/80 font-semibold">what's actually needed</span></p>
          </div>
          <div className="flex items-start gap-2">
            <ClipboardList className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Dispatch documents: original scope vs. new scope in ServiceTitan notes</p>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Get time estimate for new scope — will it take hours or a return trip?</p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>2</div>
          <h3 className="text-sm font-bold text-white">CS Calls Customer On-Site</h3>
        </div>
        <div className="space-y-2">
          <div className="rounded-lg p-3" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}15` }}>
            <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: ORANGE }}>Script — Scope Change</p>
            <p className="text-xs text-white/50 italic">"Our tech has completed the diagnostic and found that a [repair/part swap] won't fully resolve the issue. They're recommending [new scope]. We'd like to have our comfort advisor come out to go over your options — there's no additional charge for the estimate."</p>
          </div>
          <div className="flex items-start gap-2">
            <DollarSign className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">Never quote replacement pricing over the phone</span> — schedule the comfort advisor visit</p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>3</div>
          <h3 className="text-sm font-bold text-white">Dispatch & Board Adjustments</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Calendar className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">If tech stays on-site longer:</span> Follow "Repair Running Long" protocol for remaining jobs</p>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">If tech wraps up diagnostic only:</span> Move to next job; schedule advisor for customer</p>
          </div>
          <div className="flex items-start gap-2">
            <FileText className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-xs text-white/60">Convert job type in ServiceTitan from Repair → Estimate / Replacement lead</p>
          </div>
        </div>
      </div>
    </div>

    {/* Decision helper */}
    <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
      <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
        <HelpCircle className="w-4 h-4" style={{ color: WARM }} />
        Quick Decision: Repair or Replace?
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: GREEN }}>Tech Should Repair If:</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Part is available and fix takes &lt; 2 hours</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />System is under 10 years old</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Customer approves repair cost on-site</p>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-wider font-bold" style={{ color: ORANGE }}>Schedule Advisor If:</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Repair cost exceeds 50% of replacement value</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />System is 15+ years old with recurring failures</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Major component failure (compressor, heat exchanger)</p>
        </div>
      </div>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4 mt-auto">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Frame it as "good news — we caught something bigger before it got worse"</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Get the advisor scheduled before the tech leaves</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Thank the customer for their patience and trust</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Quote replacement prices over the phone or on-site without advisor</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Let the tech leave without dispatch knowing the scope changed</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Tell the customer their system is "dead" — keep it solution-focused</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Slide 24: Customer Requests Specific Tech ── */
const SpecificTechRequestSlide = () => (
  <div className="flex flex-col gap-6 h-full px-16 py-10" style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${WARM}18`, border: `1px solid ${WARM}30` }}>
        <User className="w-6 h-6" style={{ color: WARM }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Customer Requests Specific Tech</h2>
        <p className="text-sm text-white/50">When the requested technician is already fully booked</p>
      </div>
    </div>

    {/* Decision tree */}
    <div className="grid grid-cols-3 gap-4">
      {/* Option A */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: `1px solid ${GREEN}22` }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${GREEN}22`, color: GREEN }}>A</div>
          <h3 className="text-sm font-bold text-white">Accommodate — Move Things Around</h3>
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: GREEN }}>When to use:</p>
        <div className="space-y-1.5 mb-3">
          <p className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />VIP / high-value membership customer</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Callback or warranty follow-up (same tech needed)</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />A non-urgent job on the tech's board can be swapped</p>
        </div>
        <div className="rounded-lg p-2.5" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15` }}>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: GREEN }}>Action</p>
          <p className="text-xs text-white/50">Check tech's board for a maintenance or low-priority job that can be moved to another tech. Swap and slot this customer in.</p>
        </div>
      </div>

      {/* Option B */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: `1px solid ${ORANGE}22` }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${ORANGE}22`, color: ORANGE }}>B</div>
          <h3 className="text-sm font-bold text-white">Offer Next Available Day</h3>
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: ORANGE }}>When to use:</p>
        <div className="space-y-1.5 mb-3">
          <p className="text-xs text-white/50 flex items-center gap-1.5"><Clock className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Customer prefers to wait for their tech</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><Clock className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Job is not urgent or time-sensitive</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><Clock className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />No board changes are practical today</p>
        </div>
        <div className="rounded-lg p-2.5" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}15` }}>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: ORANGE }}>Script</p>
          <p className="text-xs text-white/50 italic">"[Tech name] is fully booked today, but I can get you on their schedule on [next date]. Would [morning/afternoon] work best for you?"</p>
        </div>
      </div>

      {/* Option C */}
      <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: `1px solid ${WARM}22` }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: `${WARM}22`, color: WARM }}>C</div>
          <h3 className="text-sm font-bold text-white">Redirect to Another Tech</h3>
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: WARM }}>When to use:</p>
        <div className="space-y-1.5 mb-3">
          <p className="text-xs text-white/50 flex items-center gap-1.5"><ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: WARM }} />Job is time-sensitive (no heat, no AC, leak)</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: WARM }} />Customer is open to another tech if framed well</p>
          <p className="text-xs text-white/50 flex items-center gap-1.5"><ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: WARM }} />Another equally qualified tech is available sooner</p>
        </div>
        <div className="rounded-lg p-2.5" style={{ background: `${WARM}08`, border: `1px solid ${WARM}15` }}>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: WARM }}>Script</p>
          <p className="text-xs text-white/50 italic">"I completely understand wanting [Tech name] — they're great. I also have [Other tech], who specializes in [relevant skill] and can be there [sooner window]. Would you like me to get you taken care of today?"</p>
        </div>
      </div>
    </div>

    {/* Escalation note */}
    <div className="rounded-xl p-5" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,100%,0.08)" }}>
      <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
        <ShieldAlert className="w-4 h-4" style={{ color: RED }} />
        Escalation — Customer Insists & Won't Accept Alternatives
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">1.</span> Acknowledge their loyalty: <span className="italic text-white/50">"I can tell [Tech] made a great impression — that says a lot about our team."</span></p>
          <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">2.</span> Offer to add them to a priority waitlist if a cancellation opens up on that tech's board today.</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">3.</span> Book the next available slot with that tech as a confirmed backup.</p>
          <p className="text-xs text-white/60"><span className="text-white/80 font-semibold">4.</span> If still unresolved, offer to have dispatch manager call them back within 30 minutes.</p>
        </div>
      </div>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4 mt-auto">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Compliment their tech choice — it validates the team</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Present alternatives as equally skilled, not "lesser"</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Note the preference in ServiceTitan for future scheduling</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Say "that tech isn't available" without offering options</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Bump another customer's confirmed appointment to accommodate</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Badmouth or compare techs — "he's just as good" sounds dismissive</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Dispatch Slide 25: Part Not on Truck ── */
export const PartNotOnTruckSlide = () => (
  <div className="flex flex-col h-full px-16 py-10" style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    {/* Header */}
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${WARM}18`, border: `1px solid ${WARM}30` }}>
        <Wrench className="w-6 h-6" style={{ color: WARM }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Part Not on Truck — Source & Schedule Protocol</h2>
        <p className="text-sm text-white/50 mt-0.5">When the tech identifies a needed part that isn't in inventory on-site</p>
      </div>
    </div>

    {/* Decision tree */}
    <div className="grid grid-cols-2 gap-5 flex-1">
      {/* Left: Decision flowchart */}
      <div className="space-y-4">
        <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: `1px solid hsl(0,0%,100%,0.08)` }}>
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-4 h-4" style={{ color: ORANGE }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ORANGE }}>Step 1 — Tech Checks Availability</p>
          </div>
          <ul className="space-y-1.5">
            <li className="text-xs text-white/60 flex items-center gap-2"><ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Check supply house stock (call or app)</li>
            <li className="text-xs text-white/60 flex items-center gap-2"><ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Check if another tech on the road has the part</li>
            <li className="text-xs text-white/60 flex items-center gap-2"><ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: ORANGE }} />Report to dispatch: part #, ETA to obtain, and remaining board</li>
          </ul>
        </div>

        <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: `1px solid hsl(0,0%,100%,0.08)` }}>
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className="w-4 h-4" style={{ color: WARM }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: WARM }}>Step 2 — Dispatch Decides Path</p>
          </div>
          <div className="space-y-3">
            {[
              { label: "Option A: Leave & Return Same Day", desc: "Supply house < 30 min away, no remaining jobs at risk. Tech picks up part and returns.", tag: "Best for", tagColor: GREEN },
              { label: "Option B: Continue Board, Return Later", desc: "Tech completes next jobs, picks up part en route, returns to finish. Ideal if customer is flexible.", tag: "Efficient", tagColor: ORANGE },
              { label: "Option C: Order & Reschedule", desc: "Part must be ordered (1–3 days). Schedule return trip. No charge for second visit.", tag: "Special order", tagColor: RED },
            ].map((opt, idx) => (
              <div key={idx} className="rounded-lg p-3" style={{ background: "hsl(0,0%,8%)", border: `1px solid hsl(0,0%,100%,0.05)` }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full" style={{ background: `${opt.tagColor}18`, color: opt.tagColor }}>{opt.tag}</span>
                  <p className="text-xs font-semibold text-white">{opt.label}</p>
                </div>
                <p className="text-[11px] text-white/45 ml-0.5">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: CS Scripts & documentation */}
      <div className="space-y-4">
        <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: `1px solid hsl(0,0%,100%,0.08)` }}>
          <div className="flex items-center gap-2 mb-3">
            <Phone className="w-4 h-4" style={{ color: GREEN }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: GREEN }}>Step 3 — CS Calls Customer</p>
          </div>
          <div className="space-y-3">
            <div className="rounded-lg p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}15` }}>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Same-Day Return Script</p>
              <p className="text-xs text-white/60 italic leading-relaxed">"Our tech has diagnosed the issue and needs a specific part to complete the repair properly. He's heading to pick it up now and will be back by [ETA]. There's no additional trip charge — we want to make sure it's done right."</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}15` }}>
              <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: ORANGE }}>Order & Reschedule Script</p>
              <p className="text-xs text-white/60 italic leading-relaxed">"The part your system needs has to be ordered from the manufacturer. We'll have it in [1–3 days] and will schedule your follow-up visit right now — no additional diagnostic fee. What day works best for you?"</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: `1px solid hsl(0,0%,100%,0.08)` }}>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4" style={{ color: MUTED }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: MUTED }}>Step 4 — Document in ServiceTitan</p>
          </div>
          <ul className="space-y-1.5">
            <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Log part number, source, and expected delivery date</li>
            <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Tag job as "Return Trip — Part Needed" for tracking</li>
            <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Schedule follow-up before leaving customer's home</li>
            <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Confirm with customer: return date, time window, and tech name</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Waive the second trip fee — the customer shouldn't pay twice</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Give a firm return ETA window, not "we'll call you"</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Have tech complete as much prep work as possible before leaving</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Leave without explaining exactly what's needed and why</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Promise a return time you can't keep — always pad the estimate</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Skip documenting — the return trip must be tracked for reporting</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Dispatch Scenario: Customer No-Show ── */
export const CustomerNoShowSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${RED}18`, border: `1px solid ${RED}33` }}>
        <UserX className="w-5 h-5" style={{ color: RED }} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Customer No-Show — Empty House Protocol</h2>
        <p className="text-sm text-white/50 mt-0.5">When the tech arrives and no one is home</p>
      </div>
    </div>

    {/* 3-step protocol */}
    <div className="grid grid-cols-3 gap-4 mb-5">
      {/* Step 1: Attempt Contact */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>1</div>
          <span className="text-sm font-semibold text-white">Attempt Contact</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Tech on-site</span>
        </div>
        <ul className="space-y-2">
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Tech calls customer — let it ring, then try again</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><MessageSquare className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Send a text: "Hi, this is your Homets tech — I'm at your door. Please let me know if you're nearby!"</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Clock className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Wait <strong className="text-white/80">10 minutes</strong> at the property</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />If no response → Tech notifies Dispatch</li>
        </ul>
      </div>

      {/* Step 2: CS Outreach */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>2</div>
          <span className="text-sm font-semibold text-white">CS Calls Customer</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Dispatch</span>
        </div>
        <div className="rounded-lg p-3 mb-3" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}18` }}>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: ORANGE }}>No-Show Script</p>
          <p className="text-xs text-white/70 italic leading-relaxed">
            "Hi [Name], this is [CS] from Homets. Our technician is at your home for your [service] appointment but wasn't able to reach you. Are you available? We'd love to get this taken care of for you today."
          </p>
        </div>
        <ul className="space-y-1.5">
          <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} /><strong className="text-white/70">Reached:</strong> Confirm if customer is en route or needs to reschedule</li>
          <li className="text-xs text-white/60 flex items-center gap-2"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} /><strong className="text-white/70">No answer:</strong> Leave voicemail, send text, move to Step 3</li>
        </ul>
      </div>

      {/* Step 3: Release & Reassign */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>3</div>
          <span className="text-sm font-semibold text-white">Release & Reassign</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Dispatch</span>
        </div>
        <ul className="space-y-2">
          <li className="text-xs text-white/60 flex items-start gap-2"><ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Release tech from the no-show — send to next job or pull-ahead</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Calendar className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Tag job as <strong className="text-white/70">"No-Show"</strong> in ServiceTitan</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Attempt follow-up call 2 hours later to reschedule</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><FileText className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />Log: date, time arrived, contact attempts, and outcome</li>
        </ul>
      </div>
    </div>

    {/* Policy note */}
    <div className="rounded-xl p-4 mb-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
      <div className="flex items-center gap-2 mb-2">
        <Shield className="w-4 h-4" style={{ color: WARM }} />
        <span className="text-sm font-semibold text-white">No-Show Policy Reference</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: ORANGE }}>1st No-Show</p>
          <p className="text-xs text-white/60">Reschedule with courtesy reminder. No fee. Note the account.</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: WARM }}>2nd No-Show</p>
          <p className="text-xs text-white/60">Reschedule with confirmation required day-before. Flag account.</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: RED }}>3rd No-Show</p>
          <p className="text-xs text-white/60">Require prepayment or credit card on file before booking. Manager review.</p>
        </div>
      </div>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Always call & text before leaving — document every attempt</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Give the customer benefit of the doubt on the first occurrence</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Use the open slot productively — pull-ahead or waiting list</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Leave without documenting — every no-show must be logged</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Make the customer feel punished when they call back</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Let the tech sit idle — reassign immediately after 10-minute wait</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Dispatch Scenario: Permit / Code Violation ── */
export const PermitCodeViolationSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    {/* Header */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${RED}18`, border: `1px solid ${RED}33` }}>
        <ShieldAlert className="w-5 h-5" style={{ color: RED }} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Permit or Code Violation — Stop-Work Protocol</h2>
        <p className="text-sm text-white/50 mt-0.5">When the tech can't proceed due to permits, code issues, or unsafe conditions</p>
      </div>
    </div>

    {/* 3-step protocol */}
    <div className="grid grid-cols-3 gap-4 mb-5">
      {/* Step 1: Identify & Document */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>1</div>
          <span className="text-sm font-semibold text-white">Identify & Document</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Tech on-site</span>
        </div>
        <ul className="space-y-2">
          <li className="text-xs text-white/60 flex items-start gap-2"><AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: RED }} />Tech identifies the issue: missing permit, code violation, or unsafe existing work</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><FileText className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Photo-document everything — existing conditions, violations, labels</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Tech calls Dispatch immediately — <strong className="text-white/70">do NOT proceed</strong> with unpermitted work</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Shield className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />If safety hazard: secure the area, advise customer to evacuate if needed</li>
        </ul>
      </div>

      {/* Step 2: CS Communication */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>2</div>
          <span className="text-sm font-semibold text-white">CS Explains to Customer</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">CS / Tech</span>
        </div>
        <div className="rounded-lg p-3 mb-3" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}18` }}>
          <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: ORANGE }}>Code Issue Script</p>
          <p className="text-xs text-white/70 italic leading-relaxed">
            "Our technician found [describe issue] that requires a permit / doesn't meet current code. For your safety and to protect your home, we can't proceed until this is resolved. Here's what we recommend…"
          </p>
        </div>
        <ul className="space-y-1.5">
          <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Explain <strong className="text-white/70">why</strong> — safety, liability, and homeowner protection</li>
          <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Present options: we pull the permit, or customer hires licensed contractor for pre-existing issues</li>
          <li className="text-xs text-white/60 flex items-center gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Provide written summary of findings for customer's records</li>
        </ul>
      </div>

      {/* Step 3: Dispatch & Next Steps */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>3</div>
          <span className="text-sm font-semibold text-white">Dispatch & Next Steps</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Dispatch</span>
        </div>
        <ul className="space-y-2">
          <li className="text-xs text-white/60 flex items-start gap-2"><ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Release tech to next job — use freed time productively</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Calendar className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Tag job as <strong className="text-white/70">"Permit Required"</strong> or <strong className="text-white/70">"Code Violation — Pending"</strong></li>
          <li className="text-xs text-white/60 flex items-start gap-2"><ClipboardList className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />If we're pulling the permit: create follow-up task with permit timeline</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />Schedule callback once permit is approved or issue is resolved</li>
        </ul>
      </div>
    </div>

    {/* Common scenarios */}
    <div className="rounded-xl p-4 mb-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
      <div className="flex items-center gap-2 mb-3">
        <AlertOctagon className="w-4 h-4" style={{ color: WARM }} />
        <span className="text-sm font-semibold text-white">Common Scenarios</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "No Permit on File", desc: "Previous work done without permits — we can't build on top of it", color: RED },
          { label: "Electrical Code Issue", desc: "Panel or wiring doesn't meet current NEC — needs electrician first", color: ORANGE },
          { label: "Gas Line Violation", desc: "Improper gas piping or connections — safety stop, notify utility if needed", color: RED },
          { label: "Zoning / Setback", desc: "Equipment placement violates local zoning — need variance or relocation plan", color: WARM },
        ].map((item) => (
          <div key={item.label} className="rounded-lg p-2.5" style={{ background: `${item.color}06`, border: `1px solid ${item.color}18` }}>
            <p className="text-xs font-semibold text-white/80 mb-1">{item.label}</p>
            <p className="text-[11px] text-white/50 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Stop work immediately — never proceed without proper permits</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Frame it as protecting the customer, not creating a roadblock</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Offer to handle the permit process when possible</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Blame the customer or previous contractor — stay neutral</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />"Just do it anyway" — liability exposure is not worth it</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Leave without giving the customer a clear written next step</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Dispatch Scenario: Weather Delay ── */
export const WeatherDelaySlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${WARM}18`, border: `1px solid ${WARM}33` }}>
        <Snowflake className="w-5 h-5" style={{ color: WARM }} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Weather Delay — Mass Reschedule Protocol</h2>
        <p className="text-sm text-white/50 mt-0.5">When severe weather forces cancellation or delay of outdoor HVAC jobs</p>
      </div>
    </div>

    {/* Decision matrix */}
    <div className="grid grid-cols-3 gap-4 mb-5">
      {/* Severity 1: Advisory */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: WARM, color: "#fff" }}>!</div>
          <span className="text-sm font-semibold text-white">Advisory — Monitor</span>
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: WARM }}>Light rain, wind advisory, extreme heat</p>
        <ul className="space-y-1.5">
          <li className="text-xs text-white/60 flex items-start gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: GREEN }} />Outdoor jobs proceed with caution</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Clock className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />Monitor hourly — be ready to escalate</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Proactive text to afternoon outdoor customers: "We're monitoring weather"</li>
        </ul>
      </div>

      {/* Severity 2: Delay */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>!!</div>
          <span className="text-sm font-semibold text-white">Delay — Partial Reschedule</span>
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: ORANGE }}>Steady rain, thunderstorms, icy roads</p>
        <ul className="space-y-1.5">
          <li className="text-xs text-white/60 flex items-start gap-2"><AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Pause outdoor installs & rooftop work</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Redirect techs to indoor jobs: diagnostics, furnace work, plumbing</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Calendar className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Reschedule outdoor jobs to next available clear day</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />CS calls each affected customer with new window</li>
        </ul>
      </div>

      {/* Severity 3: Full Cancel */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: `1px solid ${RED}22` }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: RED, color: "#fff" }}>!!!</div>
          <span className="text-sm font-semibold text-white">Shutdown — Full Day Cancel</span>
        </div>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-2" style={{ color: RED }}>Blizzard, hurricane, flooding, unsafe roads</p>
        <ul className="space-y-1.5">
          <li className="text-xs text-white/60 flex items-start gap-2"><Siren className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: RED }} />Cancel ALL jobs — tech safety is non-negotiable</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: RED }} />CS calls every customer on the board — batch outreach</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Calendar className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: RED }} />Block the day in ServiceTitan, mass-reschedule to next 2-3 days</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />Emergency-only exceptions: active gas leaks, no-heat with vulnerable occupants</li>
        </ul>
      </div>
    </div>

    {/* Customer script */}
    <div className="rounded-xl p-4 mb-4" style={{ background: `${ORANGE}08`, border: `1px solid ${ORANGE}18` }}>
      <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: ORANGE }}>Weather Reschedule Script</p>
      <p className="text-xs text-white/70 italic leading-relaxed">
        "Hi [Name], this is [CS] from Homets. Due to [weather condition], we need to reschedule your [service type] appointment for your technician's safety. We've reserved [new date/window] for you — does that work? We'll make sure you're one of our first calls that day."
      </p>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Decide early — don't wait until techs are already en route</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Prioritize rescheduling by urgency: no-heat/no-AC customers first</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Use indoor backlog to keep techs productive on delay days</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Send techs onto rooftops or ladders in unsafe conditions</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Let customers find out by no-show — always call proactively</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Overload the next clear day — spread reschedules across 2-3 days</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Dispatch Scenario: Customer Disputes Diagnostic ── */
export const CustomerDisputeSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${RED}18`, border: `1px solid ${RED}33` }}>
        <HandCoins className="w-5 h-5" style={{ color: RED }} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Customer Disputes Diagnostic — Refusal Protocol</h2>
        <p className="text-sm text-white/50 mt-0.5">When the customer disagrees with findings or refuses the recommended repair</p>
      </div>
    </div>

    {/* 3-step protocol */}
    <div className="grid grid-cols-3 gap-4 mb-5">
      {/* Step 1: Listen & Acknowledge */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>1</div>
          <span className="text-sm font-semibold text-white">Listen & Acknowledge</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Tech on-site</span>
        </div>
        <ul className="space-y-2">
          <li className="text-xs text-white/60 flex items-start gap-2"><Headphones className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Let the customer express their concern fully — don't interrupt</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: GREEN }} />Acknowledge: <em className="text-white/70">"I completely understand your concern"</em></li>
          <li className="text-xs text-white/60 flex items-start gap-2"><FileText className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Show evidence: photos, readings, measurements — make it visual</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />If customer remains upset → Tech offers to have CS/manager call</li>
        </ul>
      </div>

      {/* Step 2: Offer Options */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>2</div>
          <span className="text-sm font-semibold text-white">Present Options</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Tech / CS</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Second Opinion", desc: "Offer to send a senior tech or supervisor to re-evaluate at no extra charge", color: GREEN },
            { label: "Partial Repair", desc: "If applicable, offer a smaller fix that addresses the immediate symptom", color: ORANGE },
            { label: "Written Report", desc: "Provide a detailed written diagnostic so the customer can compare with another company", color: WARM },
            { label: "Decline & Close", desc: "Customer declines all options — collect diagnostic fee, close job respectfully", color: MUTED },
          ].map((opt) => (
            <div key={opt.label} className="flex items-start gap-2 rounded-lg p-2" style={{ background: `${opt.color}06`, border: `1px solid ${opt.color}15` }}>
              <ChevronRight className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: opt.color }} />
              <div>
                <span className="text-xs font-semibold text-white/80">{opt.label}</span>
                <p className="text-[11px] text-white/50 leading-snug">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3: Document & Follow Up */}
      <div className="rounded-xl p-4" style={{ background: "hsl(0,0%,10%)", border: "1px solid hsl(0,0%,18%)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: ORANGE, color: "#fff" }}>3</div>
          <span className="text-sm font-semibold text-white">Document & Follow Up</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50 ml-auto">Dispatch / CS</span>
        </div>
        <ul className="space-y-2">
          <li className="text-xs text-white/60 flex items-start gap-2"><FileText className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Log dispute reason, customer's stated objection, and outcome in ServiceTitan</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Calendar className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: ORANGE }} />Set a <strong className="text-white/70">7-day follow-up</strong> task — many customers reconsider</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Phone className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />CS follow-up call: "Just checking in — we want to make sure your [system] is running safely"</li>
          <li className="text-xs text-white/60 flex items-start gap-2"><Mail className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: WARM }} />Send diagnostic summary email with photos for their records</li>
        </ul>
      </div>
    </div>

    {/* Safety CYA note */}
    <div className="rounded-xl p-4 mb-4" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
      <div className="flex items-center gap-2 mb-2">
        <ShieldAlert className="w-4 h-4" style={{ color: RED }} />
        <span className="text-sm font-semibold text-white">Safety Refusal — Special Handling</span>
      </div>
      <p className="text-xs text-white/60 leading-relaxed">
        If the customer refuses a repair that involves a <strong className="text-white/70">safety hazard</strong> (gas leak, carbon monoxide, electrical risk): document that the customer was informed of the danger, have them sign a <strong className="text-white/70">waiver of liability</strong>, and notify a manager. Never leave a known safety hazard undocumented.
      </p>
    </div>

    {/* Do / Don't */}
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl p-3" style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: GREEN }}>Do</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Respect the customer's right to decline — never pressure</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Offer the second-opinion option before they walk away</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: GREEN }} />Follow up in a week — they often come back</li>
        </ul>
      </div>
      <div className="rounded-xl p-3" style={{ background: `${RED}08`, border: `1px solid ${RED}22` }}>
        <p className="text-[10px] uppercase tracking-wider font-bold mb-1.5" style={{ color: RED }}>Don't</p>
        <ul className="space-y-1">
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Argue or get defensive — it damages the relationship permanently</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Badmouth competitors they mention getting a second opinion from</li>
          <li className="text-xs text-white/50 flex items-center gap-1.5"><AlertTriangle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />Skip documentation — disputes need a clear paper trail</li>
        </ul>
      </div>
    </div>
  </div>
);

/* ── Export slide list (29 slides: Customer Service & Dispatch Guide) ── */
export const slides = [
  { title: "Dispatch Guide", component: DispatchTitleSlide, keywords: "cover title homets phone number dispatch guide" },
  { title: "Call Flow / Decision Tree", component: CallFlowSlide, keywords: "call flow decision tree intake answer identify emergency service type book" },
  { title: "Job Types & Business Units", component: JobTypesSlide, keywords: "job types business units hvac plumbing residential commercial" },
  { title: "Type of Service", component: ServiceTypeSlide, keywords: "diagnostic estimate maintenance repair tune-up service type" },
  { title: "System Types", component: SystemTypeSlide, keywords: "system types ac furnace heat pump mini split boiler package unit" },
  { title: "Customer Info Checklist", component: CustomerChecklistSlide, keywords: "customer info checklist name address phone email system age membership" },
  { title: "Diagnostic Fees", component: DiagnosticFeesSlide, keywords: "diagnostic fees pricing service fee cost charge price" },
  { title: "Residential vs Commercial", component: ResidentialCommercialSlide, keywords: "residential commercial difference scope" },
  { title: "Scheduling & Dispatch Rules", component: SchedulingRulesSlide, keywords: "scheduling dispatch rules 90 minute arrival guarantee time window zones nassau suffolk" },
  { title: "Emergency & After-Hours", component: EmergencyProtocolSlide, keywords: "emergency after hours gas leak no heat flooding escalation on-call" },
  { title: "Diagnostic Sales Script", component: DiagnosticSalesScriptSlide, keywords: "diagnostic sales script phone call booking" },
  { title: "Estimate Sales Script", component: EstimateSalesScriptSlide, keywords: "estimate sales script free quote" },
  { title: "Maintenance Sales Script", component: MaintenanceSalesScriptSlide, keywords: "maintenance tune-up sales script seasonal" },
  { title: "Membership Sales Script", component: MembershipSalesScriptSlide, keywords: "membership service agreement sales script plan discount" },
  { title: "Plumbing Sales Script", component: PlumbingSalesScriptSlide, keywords: "plumbing sales script drain water heater leak" },
  { title: "Scripts Cheat Sheet", component: ScriptsCheatSheetSlide, keywords: "cheat sheet quick reference scripts summary objections" },
  { title: "Objection Handling", component: ObjectionHandlingSlide, keywords: "objection handling price expensive refund angry competitor discount rebuttal de-escalation trust credibility timing urgency spouse landlord guarantee" },
  { title: "Dispatch Flowchart", component: DispatchFlowchartSlide, keywords: "dispatch flowchart routing assign tech priority emergency capacity squeeze-in board decision" },
  { title: "Repair Running Long", component: RepairRunningLongSlide, keywords: "repair running long delay late tech over estimate update customer reassign dispatch protocol threshold" },
  { title: "Tech Calls Out Sick", component: TechCalloutSlide, keywords: "tech sick callout mid-day redistribute reassign jobs board capacity zone priority protocol" },
  { title: "Last-Minute Cancellation", component: LastMinuteCancelSlide, keywords: "cancel last minute open slot fill waiting list pull ahead maintenance blitz reschedule" },
  { title: "Multiple Emergencies", component: MultipleEmergenciesSlide, keywords: "multiple emergencies triage surge priority p1 p2 p3 p4 gas leak safety dispatch all techs backup" },
  { title: "Scope Escalation", component: ScopeEscalationSlide, keywords: "scope escalation larger than expected replacement repair diagnostic advisor comfort system upgrade convert job" },
  { title: "Specific Tech Request", component: SpecificTechRequestSlide, keywords: "specific tech request customer preference booked full schedule accommodate redirect waitlist loyalty" },
  { title: "Part Not on Truck", component: PartNotOnTruckSlide, keywords: "part not on truck supply house order return trip special order inventory leave come back reschedule" },
  { title: "Customer No-Show", component: CustomerNoShowSlide, keywords: "no show empty house no answer arrived nobody home reschedule policy contact attempt" },
  { title: "Permit / Code Violation", component: PermitCodeViolationSlide, keywords: "permit code violation stop work unsafe electrical gas zoning previous contractor liability inspection" },
  { title: "Weather Delay", component: WeatherDelaySlide, keywords: "weather rain snow ice storm cancel delay outdoor rooftop reschedule safety mass cancel blizzard hurricane" },
  { title: "Customer Disputes Diagnostic", component: CustomerDisputeSlide, keywords: "dispute disagree refuse decline diagnostic findings second opinion argument objection safety waiver follow up" },
];
