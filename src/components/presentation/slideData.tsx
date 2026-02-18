import React from "react";
import { HometsLogoDark } from "./HometsLogo";
import hvacFurnace from "@/assets/hvac-furnace.jpg";
import hvacAc from "@/assets/hvac-ac.jpg";
import hvacAirQuality from "@/assets/hvac-air-quality.jpg";
import {
  Flame, Snowflake, Wind, Cpu, Wrench, AlertTriangle,
  Clock, Shield, DollarSign, Star, MapPin, TrendingUp,
  Users, Truck, Target, Phone, Mail, Globe,
  ThermometerSun, CheckCircle, Home, BarChart3,
  Zap, Award, HeartHandshake, Building2, Leaf,
  Quote, ChevronRight, Rocket, Lock, Repeat,
  Hammer, Settings, Thermometer, Fan, CircleDot,
  ClipboardList, HelpCircle, Building, MessageSquare
} from "lucide-react";
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart
} from "recharts";

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
      {/* Fee table */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="p-6 border-b" style={{ borderColor: "hsl(0,0%,18%)" }}>
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <ClipboardList className="w-6 h-6" style={{ color: ORANGE }} />
            Fee Schedule
          </h3>
        </div>
        <div className="divide-y" style={{ borderColor: "hsl(0,0%,18%)" }}>
          {[
            { label: "Standard Diagnostic / Service Call", value: "$89", note: "Mon–Fri, 7 AM – 6 PM" },
            { label: "After-Hours & Weekend Service", value: "$139", note: "Evenings, Sat & Sun" },
            { label: "Emergency / Holiday Service", value: "$189", note: "24/7 holidays & overnight" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between p-5" style={{ borderColor: "hsl(0,0%,18%)" }}>
              <div>
                <p className="text-lg font-semibold text-white">{row.label}</p>
                <p className="text-sm text-white/40 mt-1">{row.note}</p>
              </div>
              <span className="text-3xl font-bold" style={{ color: ORANGE }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* What's included + guarantee */}
      <div className="flex flex-col gap-6">
        <div className="p-6 rounded-2xl flex-1" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" style={{ color: GREEN }} />
            What's Included
          </h3>
          <div className="space-y-3">
            {[
              "Full system inspection & diagnosis",
              "Written report of findings",
              "Upfront repair estimate before any work",
              "Diagnostic fee applied toward repair cost",
              "No hidden fees — price quoted is price paid",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                <span className="text-base text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.15), hsl(0,78%,50%,0.1))", border: "1px solid hsl(15,90%,55%,0.3)" }}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">90-Minute Response Guarantee</p>
              <p className="text-base text-white/60">We arrive within 90 minutes or the service call is FREE.</p>
            </div>
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
    <h2 className="text-5xl font-bold text-white mb-10">Determine Customer Type</h2>
    <div className="grid grid-cols-2 gap-8 mb-8">
      {/* Residential */}
      <div className="p-8 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${WARM}, ${ORANGE})` }}>
            <Home className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">Residential</h3>
        </div>
        <div className="space-y-3 mb-6">
          {[
            "Single-family homes, condos, apartments",
            "Standard diagnostic fee: $89",
            "Priority scheduling for emergencies",
            "Homeowner is point of contact",
            "Standard warranty terms apply",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
              <span className="text-base text-white/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Commercial */}
      <div className="p-8 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${GREEN}, hsl(145,60%,35%)` }}>
            <Building className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">Commercial</h3>
        </div>
        <div className="space-y-3 mb-6">
          {[
            "Offices, retail, multi-unit buildings, restaurants",
            "Custom pricing — based on system size & units",
            "Property manager / super may be contact",
            "Multi-unit & rooftop systems common",
            "Maintenance contracts available",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
              <span className="text-base text-white/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Dispatcher questions */}
    <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))" }}>
      <p className="text-lg font-bold text-white mb-4 flex items-center gap-2">
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

/* ── INVESTOR PITCH DECK SLIDES (6-22) ── */

/* ── Slide 6: Title ── */
export const TitleSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-20"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
      <span className="text-lg text-white/50 tracking-widest uppercase">Investor Pitch Deck</span>
    </div>
    <HometsLogoDark width={500} className="mb-8" />
    <h2 className="text-4xl font-bold text-white mb-4">
      Scaling Nassau County's Premier HVAC Service
    </h2>
    <p className="text-2xl text-white/60 mb-12 font-light tracking-wide max-w-[900px]">
      Trusted HVAC Experts for Nassau County, NY.{"\n"}
      Professional heating, cooling, air quality, and guaranteed &lt;90-min emergency response.
    </p>
    <div className="px-8 py-4 rounded-full border-2 border-white/20 backdrop-blur"
      style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.15), hsl(0,78%,50%,0.1))" }}>
      <span className="text-2xl font-semibold" style={{ color: ORANGE }}>
        Pre-Seed Round — $250K — 2026
      </span>
    </div>
    <p className="mt-12 text-xl text-white/40">Nassau County, Long Island, NY</p>
  </div>
);

/* ── Slide 2: The Problem (5 pain points) ── */
export const ProblemSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-start justify-between mb-8">
      <div>
        <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
          The Problem & Opportunity
        </p>
        <h2 className="text-5xl font-bold text-white leading-tight max-w-[1100px]">
          Pain Points: Homeowners & Businesses
        </h2>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-6">
      {[
        { icon: Clock, title: "Emergency breakdowns & long wait times", desc: "Critical failures during peak weather seasons leave customers stranded for days with unresponsive providers." },
        { icon: DollarSign, title: "Aging equipment & rising energy costs", desc: "Inefficient legacy systems driving up utility bills, creating urgent need for modern upgrades." },
        { icon: Wind, title: "Poor Indoor Air Quality (IAQ)", desc: "Post-pandemic awareness highlights lack of proper filtration, humidity control, and ventilation in homes." },
        { icon: Cpu, title: "Technical complexity & confusion", desc: "Customers struggle to navigate rebates, electrification incentives, and smart home integration options." },
        { icon: AlertTriangle, title: "Inconsistent workmanship", desc: "Labor shortages lead to unlicensed contractors, poor installations, and voided warranties." },
      ].map((item, i) => (
        <div key={i} className="p-6 rounded-2xl flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <item.icon className="w-10 h-10 mb-4" style={{ color: RED }} />
          <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
          <p className="text-base text-white/55 leading-relaxed flex-1">{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-8 p-6 rounded-2xl flex items-center gap-8" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))" }}>
      <Zap className="w-8 h-8 flex-shrink-0" style={{ color: ORANGE }} />
      <div>
        <p className="text-xl font-bold text-white mb-1">The Market Opportunity</p>
        <p className="text-lg text-white/60">A fast, reliable, tech-enabled HVAC provider delivering 24/7 coverage with guaranteed sub-90-minute response times.</p>
      </div>
      <div className="flex gap-6 flex-shrink-0 ml-auto">
        {["End-to-end comfort + efficiency solutions", "Transparent pricing & digital-first booking", "Capitalizing on electrification rebates"].map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" style={{ color: GREEN }} />
            <span className="text-sm text-white/70">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── Slide 3: The Solution ── */
export const SolutionSlide = () => (
  <div className="flex h-full" style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex-1 flex flex-col justify-center px-24">
      <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
        The Solution
      </p>
      <div className="flex items-center gap-6 mb-8">
        <div className="flex items-center justify-center w-24 h-24 rounded-2xl"
          style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
          <span className="text-4xl font-black text-white">90</span>
        </div>
        <div>
          <p className="text-lg text-white/50 uppercase tracking-widest">MIN</p>
          <p className="text-2xl font-bold text-white">Response</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
        The Homets Promise
      </h2>
      <p className="text-xl text-white/60 mb-10 max-w-[700px]">
        We redefine local HVAC service by combining technical excellence with rapid, reliable dispatch. 100% Satisfaction Guaranteed.
      </p>
      <h3 className="text-2xl font-bold text-white mb-6">Comprehensive, High-Trust Service Model</h3>
      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: Clock, title: "Rapid Response & Availability", desc: "< 90-minute emergency response guarantee with no overtime fees. 5 reserved 'Same-Day' slots daily." },
          { icon: Award, title: "Certified Technical Excellence", desc: "Every technician is NATE-Certified, licensed, and insured. Trained in modern heat pump & smart systems." },
          { icon: Wind, title: "Smart & Healthy Homes", desc: "End-to-end solutions for Indoor Air Quality (HEPA/UV) and smart thermostat integration." },
          { icon: Shield, title: "24/7 Centralized Operations", desc: "Central dispatch ensures efficient routing and clear communication. Open 7 days with transparent pricing." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
              <p className="text-base text-white/55 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-[500px] flex items-center justify-center"
      style={{ background: "linear-gradient(180deg, hsl(15,90%,55%,0.15), hsl(0,78%,50%,0.1))" }}>
      <div className="text-center">
        <ThermometerSun className="w-40 h-40 mx-auto mb-8" style={{ color: ORANGE }} />
        <p className="text-3xl font-bold text-white">Homets Air & Heat</p>
        <p className="text-xl text-white/60 mt-2">hometsair.com</p>
      </div>
    </div>
  </div>
);

/* ── Slide 4: Services (enriched) ── */
export const ServicesSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Comprehensive Service Portfolio
    </p>
    <div className="grid grid-cols-5 gap-6">
      {[
        { icon: Flame, title: "Heating Systems", desc: "Expert furnace repair, installation, and maintenance to ensure winter comfort and safety.", items: ["NATE Certified Technicians", "Energy Efficient Upgrades", "Furnace & Boiler Specialists"] },
        { icon: Snowflake, title: "AC & Cooling Solutions", desc: "Professional air conditioning repair, installation, and seasonal tune-ups for peak performance.", items: ["Same Day Service Availability", "Licensed & Insured Techs", "Comprehensive Warranties"] },
        { icon: Wind, title: "Indoor Air Quality", desc: "Advanced air purification and humidity control solutions for a healthier home environment.", items: ["HEPA & Media Filtration", "UV Light Purification", "Whole-Home Humidity Control"] },
        { icon: Cpu, title: "Smart Tech & Add-ons", desc: "Modernizing homes with smart climate control and versatile heating/cooling zones.", items: ["Smart Thermostat Integration", "Ductless Mini-Split Systems", "Water Heater Services"] },
        { icon: Wrench, title: "24/7 Emergency Repair", desc: "Round-the-clock rapid response for critical heating and cooling failures.", items: ["< 90-Minute Response Guarantee", "No Overtime Fees", "Available Holidays & Weekends"] },
      ].map((svc, i) => (
        <div key={i} className="p-6 rounded-2xl flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
            <svc.icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 text-center">{svc.title}</h3>
          <p className="text-sm text-white/50 mb-4 text-center leading-relaxed">{svc.desc}</p>
          <div className="space-y-2 mt-auto">
            {svc.items.map((item, j) => (
              <div key={j} className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GREEN }} />
                <span className="text-sm text-white/65">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Slide 5: Competitive Advantages (NEW) ── */
export const CompetitiveSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Competitive Advantages
    </p>
    <h2 className="text-5xl font-bold text-white mb-4">Why We Win in Nassau County</h2>
    <p className="text-xl text-white/55 mb-10 max-w-[1100px]">
      We combine the technical expertise of a large firm with the agility and personalized care of a local specialist, solving the biggest pain points in the market.
    </p>
    <div className="grid grid-cols-3 gap-6">
      <div className="p-8 rounded-2xl row-span-2 flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">90-Minute Response Guarantee</h3>
        <p className="text-lg text-white/55 leading-relaxed mb-4">
          While competitors book days out, we guarantee emergency response in under 90 minutes. 5 slots reserved daily for same-day service.
        </p>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <MapPin className="w-8 h-8 mb-3" style={{ color: WARM }} />
        <h3 className="text-xl font-bold text-white mb-2">Local Market Mastery</h3>
        <p className="text-base text-white/55 mb-3">Deep knowledge of Nassau County housing stock, local climate patterns, and specific township regulations.</p>
        <div className="flex gap-4">
          {["Targeted local zoning", "Optimized route planning"].map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Award className="w-8 h-8 mb-3" style={{ color: GREEN }} />
        <h3 className="text-xl font-bold text-white mb-2">Certified Excellence</h3>
        <p className="text-base text-white/55 mb-3">Every technician is NATE-certified, insured, and rigorously trained on the latest HVAC technologies.</p>
        <div className="flex gap-4">
          {["NATE Certified Techs", "Warranty-backed work"].map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Wrench className="w-8 h-8 mb-3" style={{ color: ORANGE }} />
        <h3 className="text-xl font-bold text-white mb-2">Full-Stack Service</h3>
        <p className="text-base text-white/55 mb-3">From emergency repairs to smart home upgrades and IAQ solutions, we capture the entire customer lifecycle.</p>
        <div className="flex gap-4">
          {["Heating & Cooling", "Smart Home Integration"].map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
        <HeartHandshake className="w-8 h-8 mb-3" style={{ color: RED }} />
        <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction</h3>
        <p className="text-base text-white/55 mb-3">Transparent pricing, clear communication, and a total satisfaction guarantee build lasting trust.</p>
        <div className="flex gap-4">
          {["Transparent Quotes", "Reasonable Pricing"].map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 6: Market Opportunity (corrected) ── */
export const MarketSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Market Opportunity
    </p>
    <h2 className="text-5xl font-bold text-white mb-4">High-Growth Demand</h2>
    <p className="text-xl text-white/55 mb-10">Nassau County homeowners actively seeking modernized, energy-efficient HVAC partners.</p>
    <div className="grid grid-cols-3 gap-8 mb-10">
      <div className="p-10 rounded-2xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
        <p className="text-6xl font-bold mb-2" style={{ color: ORANGE }}>$76-80B</p>
        <p className="text-xl text-white/60">Total US HVAC Market</p>
        <p className="text-base text-white/35 mt-2">Systems + Services Combined</p>
      </div>
      <div className="p-10 rounded-2xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
        <p className="text-6xl font-bold mb-2" style={{ color: WARM }}>6.9%</p>
        <p className="text-xl text-white/60">CAGR</p>
        <p className="text-base text-white/35 mt-2">Projected Annual Growth (2024-2033)</p>
      </div>
      <div className="p-10 rounded-2xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
        <p className="text-base text-white/40 mb-4 uppercase tracking-wider">Driven by new construction, climate volatility, and energy efficiency mandates.</p>
        <div className="space-y-3 text-left">
          {[
            { label: "Key Growth Drivers", items: [] },
          ].map((_, i) => null)}
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: WARM }} />
            <p className="text-base text-white/70"><strong className="text-white">Commercial Sector:</strong> Fastest growing segment (7.4% CAGR) due to air quality regulations.</p>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
            <p className="text-base text-white/70"><strong className="text-white">Online Channel:</strong> Digital booking & sales growing at 7.7% CAGR, validating our tech-first approach.</p>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
            <p className="text-base text-white/70"><strong className="text-white">Electrification:</strong> IRA incentives fueling heat pump adoption & system replacements.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6 rounded-2xl flex items-center gap-8" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))" }}>
      <Zap className="w-8 h-8 flex-shrink-0" style={{ color: ORANGE }} />
      <div>
        <p className="text-xl font-bold text-white mb-1">Why Now?</p>
        <p className="text-lg text-white/60">Electrification mandates, IRA tax credits (up to $2,000), and post-pandemic IAQ awareness are creating unprecedented demand for modern HVAC solutions.</p>
      </div>
    </div>
  </div>
);

/* ── Slide 7: Traction ── */
export const TractionSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Traction & Proof Points
    </p>
    <h2 className="text-5xl font-bold text-white mb-16">$54.5K in month one with a single crew</h2>
    <div className="grid grid-cols-4 gap-8 mb-12">
      {[
        { value: "$54.5K", label: "January 2026 Revenue", sub: "Single crew" },
        { value: "~$650K", label: "Annualized Run Rate", sub: "Per crew" },
        { value: "66", label: "5-Star Google Reviews", sub: "4.9 avg rating" },
        { value: "500+", label: "Homes Serviced", sub: "Nassau County" },
      ].map((stat, i) => (
        <div key={i} className="p-8 rounded-2xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
          <p className="text-5xl font-bold mb-3" style={{ color: ORANGE }}>{stat.value}</p>
          <p className="text-lg text-white font-medium mb-1">{stat.label}</p>
          <p className="text-base text-white/40">{stat.sub}</p>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-6 px-10 py-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
      <MapPin className="w-8 h-8 flex-shrink-0" style={{ color: ORANGE }} />
      <p className="text-xl text-white/80">
        <span className="font-bold text-white">31+ service areas</span> across Nassau County — from Hempstead to Long Beach to Glen Cove
      </p>
    </div>
  </div>
);

/* ── Slide 8: Business Model — Pricebook Architecture ── */
const pricebookMarginData = [
  { name: "Diagnostics", margin: 90, color: GREEN },
  { name: "Tune-Ups", margin: 80, color: WARM },
  { name: "Repairs", margin: 62, color: ORANGE },
  { name: "Memberships", margin: 70, color: RED },
  { name: "Equipment", margin: 22, color: MUTED },
];
const COLORS = [ORANGE, RED, WARM, GREEN, MUTED];

export const BusinessModelSlide = () => (
  <div className="flex flex-col justify-center h-full px-16"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center justify-between mb-6">
      <div>
        <p className="text-xl font-semibold mb-2 uppercase tracking-widest" style={{ color: ORANGE }}>
          Revenue Model & Pricing Architecture
        </p>
        <h2 className="text-4xl font-bold text-white">Dynamic Flat-Rate Pricebook Engine</h2>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
        <DollarSign className="w-4 h-4" style={{ color: GREEN }} />
        <span className="text-sm text-white/60">No emergency surcharge — boosts after-hours conversion</span>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-5">
      {/* Col 1-3: Diagnostics + Repairs */}
      <div className="col-span-3 space-y-4">
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-4 h-4" style={{ color: ORANGE }} />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Diagnostics</h3>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${GREEN}22`, color: GREEN }}>~90%+ GM</span>
          </div>
          {[
            { tier: "Residential / Specialty", price: "$199" },
            { tier: "Commercial Standard", price: "$269" },
            { tier: "Complex Commercial", price: "$499" },
            { tier: "System Replacement Est.", price: "FREE" },
          ].map((d, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
              <span className="text-xs text-white/60">{d.tier}</span>
              <span className="text-sm font-bold text-white">{d.price}</span>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-4 h-4" style={{ color: RED }} />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Repairs</h3>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${ORANGE}22`, color: ORANGE }}>55-70% GM</span>
          </div>
          <p className="text-xs text-white/40 mb-2">Truck Roll ($199) + Hours × Rate + Material</p>
          {[
            { label: "Residential Labor", rate: "$219/hr" },
            { label: "Commercial Labor", rate: "$269/hr" },
            { label: "Material Markup", rate: "+$79 to 2.19×" },
          ].map((r, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
              <span className="text-xs text-white/60">{r.label}</span>
              <span className="text-sm font-bold text-white">{r.rate}</span>
            </div>
          ))}
          <p className="text-xs text-white/30 mt-2 italic">60+ tasks, prices end in 9 (psych pricing)</p>
        </div>
      </div>

      {/* Col 4-6: Tune-Ups + Equipment */}
      <div className="col-span-3 space-y-4">
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-3">
            <ThermometerSun className="w-4 h-4" style={{ color: WARM }} />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tune-Ups</h3>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${WARM}22`, color: WARM }}>~80%+ GM</span>
          </div>
          {[
            { service: "Residential AC/Furnace", price: "$299" },
            { service: "Premium / Specialty", price: "$449" },
            { service: "Commercial RTU", price: "$549" },
            { service: "Commercial VRF", price: "$899" },
          ].map((t, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
              <span className="text-xs text-white/60">{t.service}</span>
              <span className="text-sm font-bold text-white">{t.price}</span>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-4 h-4" style={{ color: MUTED }} />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Equipment</h3>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${MUTED}22`, color: MUTED }}>20-25% GM</span>
          </div>
          <p className="text-xs text-white/40 mb-2">Wholesale × 2.0 × 1.25 = Sticker</p>
          {[
            { sys: "Entry AC + Furnace", price: "~$4,839" },
            { sys: "Mid-Range Performance", price: "~$6,959" },
            { sys: "Premium Heat Pump", price: "~$8,949" },
            { sys: "Ultra-Premium (Mitsu)", price: "~$8,229" },
          ].map((e, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
              <span className="text-xs text-white/60">{e.sys}</span>
              <span className="text-sm font-bold text-white">{e.price}</span>
            </div>
          ))}
          <p className="text-xs text-white/30 mt-2 italic">30+ bundles with 5% bundle discount</p>
        </div>
      </div>

      {/* Col 7-9: Membership Plans */}
      <div className="col-span-3 space-y-4">
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Home className="w-4 h-4" style={{ color: ORANGE }} />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Home+ Plans</h3>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${ORANGE}22`, color: ORANGE }}>Residential</span>
          </div>
          {[
            { plan: "Comfort", fee: "$299/yr", detail: "2 tune-ups, 10% repair disc." },
            { plan: "Infinite", fee: "$2,999/yr", detail: "2 tune-ups, 15% disc, $1.5K credit" },
          ].map((p, i) => (
            <div key={i} className="p-2.5 rounded-lg mb-2 last:mb-0" style={{ background: "hsl(0,0%,14%)" }}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-white">{p.plan}</span>
                <span className="text-sm font-bold" style={{ color: ORANGE }}>{p.fee}</span>
              </div>
              <p className="text-xs text-white/45">{p.detail}</p>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-4 h-4" style={{ color: RED }} />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Business+ Plans</h3>
            <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${RED}22`, color: RED }}>Commercial</span>
          </div>
          {[
            { plan: "Essential", fee: "$699/yr", detail: "Quarterly tune-ups" },
            { plan: "Premier", fee: "$1,499/yr", detail: "Priority service + discounts" },
            { plan: "Enterprise", fee: "$5,999/yr", detail: "$3,000 annual repair credit" },
          ].map((p, i) => (
            <div key={i} className="p-2.5 rounded-lg mb-2 last:mb-0" style={{ background: "hsl(0,0%,14%)" }}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-white">{p.plan}</span>
                <span className="text-sm font-bold" style={{ color: RED }}>{p.fee}</span>
              </div>
              <p className="text-xs text-white/45">{p.detail}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl flex items-center gap-3" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))" }}>
          <Repeat className="w-5 h-5 flex-shrink-0" style={{ color: ORANGE }} />
          <p className="text-xs text-white/70">Members save 50%+ vs retail — driving retention & LTV</p>
        </div>
      </div>

      {/* Col 10-12: Margin Chart */}
      <div className="col-span-3 flex flex-col gap-4">
        <div className="p-4 rounded-xl flex-1" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Gross Margin by Stream</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={pricebookMarginData} layout="vertical" margin={{ left: 0, right: 10 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 10 }} width={70} axisLine={false} tickLine={false} />
              <Bar dataKey="margin" radius={[0, 4, 4, 0]} barSize={16}>
                {pricebookMarginData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Blended Target</h3>
          <div className="text-center">
            <p className="text-4xl font-bold" style={{ color: ORANGE }}>45%+</p>
            <p className="text-xs text-white/50 mt-1">Gross Margin (service-weighted)</p>
          </div>
          <div className="mt-3 flex gap-2 flex-wrap">
            {["Labor-heavy = high margin", "Equipment = volume play", "Memberships = ARR engine"].map((t, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/50">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 9: Unit Economics & GTM (NEW) ── */
export const UnitEconomicsSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <div className="grid grid-cols-2 gap-12">
      {/* Left: Unit Economics */}
      <div>
        <p className="text-lg font-semibold mb-6 uppercase tracking-widest" style={{ color: ORANGE }}>
          Unit Economics
        </p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { value: "45%+", label: "Target Gross Margin", desc: "Blended margin across service (high) and equipment (volume)." },
            { value: "< 3 Months", label: "CAC Payback Period", desc: "Acquisition cost recouped rapidly through initial repair or install." },
            { value: "3x - 4x", label: "LTV / CAC Ratio", desc: "Driven by maintenance plan retention and equipment lifecycle replacement." },
          ].map((m, i) => (
            <div key={i} className="p-6 rounded-2xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
              <p className="text-3xl font-bold mb-2" style={{ color: ORANGE }}>{m.value}</p>
              <p className="text-base font-semibold text-white mb-2">{m.label}</p>
              <p className="text-sm text-white/50">{m.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-lg font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
          Revenue Streams
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "System Installation", desc: "Furnaces, AC, Heat Pumps, Mini-Splits", tag: "High Ticket", color: ORANGE },
            { title: "Service & Repair", desc: "24/7 Emergency, Diagnostics, Labor", tag: "High Margin", color: RED },
            { title: "Maintenance Plans", desc: "Recurring annual memberships", tag: "Recurring", color: GREEN },
            { title: "IAQ & Upgrades", desc: "Purification, Smart Thermostats, Filters", tag: "Upsell", color: WARM },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-xl flex items-start gap-3" style={{ background: "hsl(0,0%,11%)" }}>
              <div className="w-1 h-full rounded-full flex-shrink-0" style={{ background: s.color }} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-white">{s.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10" style={{ color: s.color }}>{s.tag}</span>
                </div>
                <p className="text-sm text-white/50">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Go-to-Market */}
      <div>
        <p className="text-lg font-semibold mb-6 uppercase tracking-widest" style={{ color: ORANGE }}>
          Go-to-Market
        </p>
        <div className="space-y-6">
          {[
            { icon: Globe, title: "Digital Dominance", desc: "Hyper-local SEO for \"Nassau HVAC\", PPC for emergency keywords, and high-converting mobile-first landing pages." },
            { icon: Star, title: "Reputation Flywheel", desc: "Aggressive review generation (Google/Yelp) post-service to build trust and drive organic referrals." },
            { icon: Users, title: "Community & Partnerships", desc: "Direct mail in target zip codes; alliances with local realtors and property managers for steady lead flow." },
            { icon: Cpu, title: "Seamless Online Booking Engine", desc: "Self-service scheduling and instant quoting tool to capture demand 24/7 and reduce administrative overhead." },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 p-5 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-base text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 10: Market Positioning — Competitive Landscape ── */
const competitorDensityData: { name: string; competitors: number; row: number; col: number; isHQ?: boolean }[] = [
  // Row 0 — North Shore
  { name: "Glen Cove", competitors: 12, row: 0, col: 0 },
  { name: "Oyster Bay", competitors: 15, row: 0, col: 1 },
  { name: "Cold Spr Hbr", competitors: 16, row: 0, col: 2 },
  { name: "Huntington", competitors: 10, row: 0, col: 3 },
  // Row 1 — North-Central
  { name: "Roslyn", competitors: 13, row: 1, col: 0 },
  { name: "Glen Head", competitors: 7, row: 1, col: 1 },
  { name: "Syosset", competitors: 8, row: 1, col: 2 },
  { name: "Woodbury", competitors: 20, row: 1, col: 3 },
  // Row 2 — Central (HQ row)
  { name: "Lake Success", competitors: 12, row: 2, col: 0 },
  { name: "Jericho (HQ)", competitors: 1, row: 2, col: 1, isHQ: true },
  { name: "Hicksville", competitors: 10, row: 2, col: 2 },
  { name: "Plainview", competitors: 19, row: 2, col: 3 },
  // Row 3 — South
  { name: "Westbury", competitors: 17, row: 3, col: 0 },
  { name: "Levittown", competitors: 14, row: 3, col: 1 },
  { name: "East Meadow", competitors: 15, row: 3, col: 2 },
  { name: "Farmingdale", competitors: 8, row: 3, col: 3 },
];

const getDensityColor = (count: number, isHQ?: boolean): string => {
  if (isHQ) return "hsl(40, 90%, 50%)"; // gold
  if (count <= 5) return "hsl(145, 65%, 42%)";
  if (count <= 10) return "hsl(80, 55%, 48%)";
  if (count <= 15) return "hsl(40, 70%, 50%)";
  return "hsl(0, 70%, 52%)";
};

const getDensityBg = (count: number, isHQ?: boolean): string => {
  if (isHQ) return "hsl(40, 90%, 50%, 0.15)";
  if (count <= 5) return "hsl(145, 65%, 42%, 0.12)";
  if (count <= 10) return "hsl(80, 55%, 48%, 0.10)";
  if (count <= 15) return "hsl(40, 70%, 50%, 0.10)";
  return "hsl(0, 70%, 52%, 0.12)";
};

const segmentShareData = [
  { name: "Single-Family", value: 55, fill: ORANGE },
  { name: "Small Commercial", value: 20, fill: RED },
  { name: "Property Mgmt", value: 15, fill: WARM },
  { name: "Eco Buyers", value: 10, fill: GREEN },
];

export const MarketPositioningSlide = () => (
  <div className="flex flex-col justify-center h-full px-16"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center justify-between mb-5">
      <div>
        <p className="text-xl font-semibold mb-2 uppercase tracking-widest" style={{ color: ORANGE }}>
          Competitive Landscape
        </p>
        <h2 className="text-4xl font-bold text-white">50+ Competitors — And We're Already Ranking</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-full border border-white/10" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.15), hsl(0,78%,50%,0.1))" }}>
          <span className="text-sm font-bold" style={{ color: ORANGE }}>50+</span>
          <span className="text-sm text-white/50 ml-2">competitors in region</span>
        </div>
        <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
          <span className="text-sm font-bold" style={{ color: GREEN }}>3 months</span>
          <span className="text-sm text-white/50 ml-2">to crack rankings</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-5">
      {/* Col 1-5: Competitor Density Heat Map */}
      <div className="col-span-5">
        <div className="p-5 rounded-2xl h-full flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5" style={{ color: ORANGE }} />
            <h3 className="text-base font-bold text-white">Google Maps Competitor Density</h3>
          </div>
          {/* Heat Map Grid */}
          <div className="grid grid-cols-4 gap-2 mb-4 flex-1">
            {competitorDensityData.map((zone, i) => (
              <div key={i} className="p-2.5 rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-center"
                style={{ background: getDensityBg(zone.competitors, zone.isHQ), border: zone.isHQ ? "2px solid hsl(40, 90%, 50%)" : "1px solid hsl(0,0%,20%)" }}>
                {zone.isHQ && (
                  <div className="absolute top-1 right-1">
                    <Star className="w-3 h-3" style={{ color: "hsl(40, 90%, 50%)" }} />
                  </div>
                )}
                <div className="w-7 h-7 rounded-full flex items-center justify-center mb-1.5 font-bold text-sm text-white"
                  style={{ background: getDensityColor(zone.competitors, zone.isHQ) }}>
                  {zone.competitors}
                </div>
                <p className="text-[10px] font-semibold text-white leading-tight">{zone.name}</p>
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="flex items-center gap-3 mb-3 px-1">
            <span className="text-[10px] text-white/40 uppercase tracking-wider">Density:</span>
            {[
              { label: "Low (≤5)", color: "hsl(145, 65%, 42%)" },
              { label: "Med (6-10)", color: "hsl(80, 55%, 48%)" },
              { label: "High (11-15)", color: "hsl(40, 70%, 50%)" },
              { label: "Saturated (16+)", color: "hsl(0, 70%, 52%)" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                <span className="text-[10px] text-white/50">{l.label}</span>
              </div>
            ))}
          </div>
          {/* Insight Callouts */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl flex items-center gap-2.5" style={{ background: "linear-gradient(135deg, hsl(40,90%,50%,0.12), hsl(40,90%,50%,0.04))" }}>
              <Rocket className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(40, 90%, 50%)" }} />
              <p className="text-xs text-white/80"><span className="font-bold text-white">Ranking in 3 months</span> — appearing on Google Maps against 50+ established competitors</p>
            </div>
            <div className="p-2.5 rounded-xl flex items-center gap-2.5" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.1), hsl(15,90%,55%,0.04))" }}>
              <Target className="w-4 h-4 flex-shrink-0" style={{ color: ORANGE }} />
              <p className="text-xs text-white/80"><span className="font-bold text-white">HQ in Jericho</span> — central to all high-density zones, &lt;30 min reach to every area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Col 6-8: Target Segments + Pie */}
      <div className="col-span-4 flex flex-col gap-4">
        <div className="p-5 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-base font-bold text-white mb-3">Target Revenue Mix by Segment</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={segmentShareData} cx="50%" cy="50%" outerRadius={65} innerRadius={35}
                dataKey="value" stroke="none">
                {segmentShareData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {segmentShareData.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.fill }} />
                <span className="text-xs text-white/60">{s.name}</span>
                <span className="text-xs font-bold text-white ml-auto">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 flex-1">
          {[
            { icon: Home, title: "Single-Family Residential", desc: "Affluent homeowners with aging systems — highest ticket size & referral potential.", stat: "Avg ticket: $4.5K+", color: ORANGE },
            { icon: Building2, title: "Small Commercial", desc: "Retail, offices, dental, restaurants — recurring RTU maintenance contracts.", stat: "Avg contract: $2.4K/yr", color: RED },
            { icon: Users, title: "Property Managers", desc: "Multi-unit dwellings & HOAs — volume play with predictable demand.", stat: "10-50 units per account", color: WARM },
            { icon: Leaf, title: "Eco-Conscious Buyers", desc: "Heat pump early adopters leveraging IRA credits — premium margins.", stat: "Up to $2K in rebates", color: GREEN },
          ].map((seg, i) => (
            <div key={i} className="p-3 rounded-xl flex items-start gap-3" style={{ background: "hsl(0,0%,11%)" }}>
              <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: `${seg.color}22` }}>
                <seg.icon className="w-4 h-4" style={{ color: seg.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-white">{seg.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: `${seg.color}18`, color: seg.color }}>{seg.stat}</span>
                </div>
                <p className="text-xs text-white/45 mt-0.5">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Col 9-12: Regulatory Tailwinds + Competitive Moat */}
      <div className="col-span-3 flex flex-col gap-4">
        <div className="p-5 rounded-2xl flex-1" style={{ background: "hsl(0,0%,11%)" }}>
          <h3 className="text-base font-bold text-white mb-4">Regulatory Tailwinds</h3>
          <div className="space-y-4">
            {[
              { icon: DollarSign, title: "IRA Tax Credits", value: "Up to $2,000", desc: "Driving heat pump & high-efficiency upgrade demand", color: GREEN },
              { icon: Star, title: "Energy Star Rebates", value: "State-level", desc: "Incentivizing old furnace → clean energy replacement", color: WARM },
              { icon: Wind, title: "IAQ Mandate Wave", value: "Post-COVID", desc: "New filtration & ventilation requirements in commercial", color: ORANGE },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full ml-auto" style={{ background: `${item.color}18`, color: item.color }}>{item.value}</span>
                </div>
                <p className="text-xs text-white/45 pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.1), hsl(0,78%,50%,0.06))" }}>
          <h3 className="text-base font-bold text-white mb-3">Competitive Moat</h3>
          <div className="space-y-2">
            {[
              { text: "90-min response guarantee", icon: Clock },
              { text: "Hyper-local brand trust", icon: Shield },
              { text: "Membership lock-in (ARR)", icon: Lock },
              { text: "NATE-certified workforce", icon: Award },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <m.icon className="w-3.5 h-3.5" style={{ color: ORANGE }} />
                <span className="text-xs text-white/70">{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
/* ── Slide 11: Customer Success Stories (NEW) ── */
export const CustomerStoriesSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Customer Success Stories
    </p>
    <p className="text-xl text-white/55 mb-6">Trusted by hundreds of homeowners across Nassau County for reliability, speed, and quality.</p>
    <div className="flex gap-6 mb-10">
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Star className="w-6 h-6" style={{ color: WARM }} />
        <span className="text-2xl font-bold text-white">4.9</span>
        <span className="text-base text-white/50">Average Rating</span>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Shield className="w-6 h-6" style={{ color: GREEN }} />
        <span className="text-base text-white/70">100% Satisfaction Guarantee</span>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <CheckCircle className="w-6 h-6" style={{ color: ORANGE }} />
        <span className="text-base text-white/70">Verified Reviews</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-8">
      {[
        {
          quote: "Homets Air & Heat saved the day when our furnace died on the coldest night of the year. They arrived within 90 minutes and had us warm again in under two hours. Professional, courteous, and reasonably priced.",
          service: "Emergency Heating Repair",
          name: "Michael Rodriguez",
          initials: "MR",
          location: "Hempstead, NY",
        },
        {
          quote: "Finally found an HVAC company that treats customers right. The technician was knowledgeable and explained everything clearly. My AC is running better than ever.",
          service: "AC Repair & Maintenance",
          name: "Sarah Chen",
          initials: "SC",
          location: "Garden City, NY",
        },
        {
          quote: "Outstanding service from start to finish! They installed a new central AC system in our home. The crew was clean, efficient, and the price was very competitive. Highly recommend!",
          service: "AC Installation",
          name: "James Patterson",
          initials: "JP",
          location: "Levittown, NY",
        },
      ].map((t, i) => (
        <div key={i} className="p-8 rounded-2xl flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <Quote className="w-8 h-8 mb-4" style={{ color: ORANGE, opacity: 0.4 }} />
          <p className="text-base text-white/70 leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
          <div className="pt-4 border-t border-white/10">
            <span className="text-xs px-3 py-1 rounded-full mb-3 inline-block" style={{ background: `${ORANGE}22`, color: ORANGE }}>{t.service}</span>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, hsl(15,90%,55%), hsl(0,78%,50%))" }}>
                {t.initials}
              </div>
              <div>
                <p className="text-base font-semibold text-white">{t.name}</p>
                <p className="text-sm text-white/40">{t.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Slide 12: Growth Roadmap (6 phases with KPIs) ── */
export const GrowthSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Strategic Growth Roadmap
    </p>
    <div className="grid grid-cols-3 gap-6">
      {[
        { num: "01", title: "Capacity & Talent", items: ["Recruit and train 5+ additional NATE-certified technicians.", "Implement apprentice program to build talent pipeline.", "Expand fleet with 3 new fully-stocked service vehicles."], kpi: "KPI: Tech Utilization Rate > 85%" },
        { num: "02", title: "Electrification & IAQ", items: ["Aggressively market heat pumps leveraging IRA/state rebates.", "Bundle IAQ solutions (HEPA/UV) with every system install.", "Focus on \"Whole Home Health\" post-pandemic demand."], kpi: "KPI: Heat Pump Mix +25% YoY" },
        { num: "03", title: "Digital Dominance", items: ["Launch self-serve online booking and instant quoting tool.", "Hyper-local SEO targeting Nassau County townships.", "Automated review generation flywheel for Google/Yelp."], kpi: "KPI: Online Booking Share > 40%" },
        { num: "04", title: "Recurring Revenue", items: ["Scale \"Comfort Club\" maintenance membership program.", "Launch subscription-based air filter delivery service.", "Prioritize members for emergency slots to drive retention."], kpi: "KPI: 1,000+ Active Memberships" },
        { num: "05", title: "B2B Expansion", items: ["Partner with local realtors for pre-sale HVAC inspections.", "Secure service contracts with property management firms.", "Target small commercial (retail/office) maintenance."], kpi: "KPI: B2B Revenue Share 20%" },
        { num: "06", title: "Operational Excellence", items: ["Optimize dispatching for < 90 min response consistency.", "Standardize \"Homets Way\" quality checklists for all jobs."], kpi: "" },
      ].map((phase, i) => (
        <div key={i} className="p-6 rounded-2xl" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-black" style={{ color: ORANGE }}>{phase.num}</span>
            <h3 className="text-xl font-bold text-white">{phase.title}</h3>
          </div>
          <div className="space-y-2 mb-4">
            {phase.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                <p className="text-sm text-white/60 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          {phase.kpi && (
            <div className="mt-auto px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs font-semibold" style={{ color: GREEN }}>{phase.kpi}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

/* ── Slide 13: Financial Projections ── */
const projectionData = [
  { month: "Jan '26", crews: 1, revenue: 54.5 },
  { month: "Apr '26", crews: 2, revenue: 110 },
  { month: "Jul '26", crews: 3, revenue: 170 },
  { month: "Oct '26", crews: 4, revenue: 200 },
  { month: "Jun '27", crews: 5, revenue: 300 },
  { month: "Dec '27", crews: 6, revenue: 400 },
  { month: "Dec '28", crews: 8, revenue: 550 },
  { month: "Dec '29", crews: 10, revenue: 700 },
  { month: "Dec '30", crews: 12, revenue: 830 },
];

const marginData = [
  { year: "Year 1", gross: 38, net: 12 },
  { year: "Year 2", gross: 42, net: 18 },
  { year: "Year 3", gross: 46, net: 22 },
  { year: "Year 4", gross: 48, net: 25 },
  { year: "Year 5", gross: 50, net: 28 },
];

const revenueMixData = [
  { name: "Installation", value: 35, fill: ORANGE },
  { name: "Service/Repair", value: 25, fill: RED },
  { name: "Maintenance", value: 25, fill: GREEN },
  { name: "IAQ/Upgrades", value: 15, fill: WARM },
];

export const ProjectionsSlide = () => (
  <div className="flex h-full" style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex-1 flex flex-col justify-center px-16">
      <div className="flex items-center gap-3 mb-4">
        <HometsLogoDark width={160} />
      </div>
      <p className="text-xl font-semibold mb-2 uppercase tracking-widest" style={{ color: ORANGE }}>
        Financial Projections & Opportunity
      </p>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "Current (1 crew)", value: "$54.5K/mo" },
          { label: "6-Mo Target (3-4 crews)", value: "$200K/mo" },
          { label: "Year 2 (~$5M annual)", value: "$400K/mo" },
          { label: "Year 5 Exit (4x multiple)", value: "$40M" },
        ].map((s, i) => (
          <div key={i} className="p-3 rounded-xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
            <p className="text-lg font-bold" style={{ color: ORANGE }}>{s.value}</p>
            <p className="text-xs text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="text-lg font-bold text-white mb-2">5-Year Revenue Growth Path to $10M</p>
      <div className="h-[250px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={projectionData}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={ORANGE} stopOpacity={0.3} />
                <stop offset="95%" stopColor={ORANGE} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
            <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              tickFormatter={(v) => `$${v}K`} />
            <Tooltip contentStyle={{ background: "hsl(0,0%,12%)", border: "1px solid hsl(0,0%,20%)", borderRadius: 12, color: "white" }}
              formatter={(v: number) => [`$${v}K`, "Monthly Revenue"]} />
            <Area type="monotone" dataKey="revenue" stroke={ORANGE} strokeWidth={3}
              fill="url(#revenueGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="w-[600px] flex flex-col justify-center px-10">
      <p className="text-lg font-bold text-white mb-4">Gross Margin Expansion</p>
      <div className="h-[180px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={marginData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="year" stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }} />
            <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ background: "hsl(0,0%,12%)", border: "1px solid hsl(0,0%,20%)", borderRadius: 12, color: "white" }}
              formatter={(v: number) => [`${v}%`]} />
            <Bar dataKey="gross" name="Gross Margin" fill={ORANGE} radius={[4, 4, 0, 0]} />
            <Bar dataKey="net" name="Net Margin" fill={GREEN} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-lg font-bold text-white mb-4">Target Revenue Mix (Year 5)</p>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={revenueMixData} cx="50%" cy="50%" outerRadius={70} innerRadius={40}
              dataKey="value" stroke="none" label={({ name, value }) => `${name} ${value}%`}>
              {revenueMixData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
            </Pie>
            <Tooltip contentStyle={{ background: "hsl(0,0%,12%)", border: "1px solid hsl(0,0%,20%)", borderRadius: 12, color: "white" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

/* ── Slide 14: Why Invest Now (NEW) ── */
export const WhyInvestSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
      Why Invest Now
    </p>
    <p className="text-xl text-white/55 mb-10 max-w-[1200px]">
      A convergence of market demand, regulatory support, and operational excellence positions Homets Air & Heat for rapid scaling.
    </p>
    <div className="grid grid-cols-3 gap-6">
      {[
        { icon: TrendingUp, title: "Market Momentum", desc: "The U.S. HVAC industry is surging toward $80B+. Extreme weather patterns are driving demand for reliable, high-performance climate control systems year-round.", tag: "6.9% CAGR Industry Growth", color: ORANGE },
        { icon: DollarSign, title: "Regulatory Catalysts", desc: "The Inflation Reduction Act (IRA) and Energy Star rebates are creating urgent incentives for homeowners to replace aging gas furnaces with modern electric heat pumps.", tag: "Up to $2,000 Tax Credits Driving Sales", color: GREEN },
        { icon: Cpu, title: "Technological Shift", desc: "Adoption of smart thermostats, IoT monitoring, and high-efficiency systems is accelerating, increasing average ticket size and enabling proactive maintenance.", tag: "Higher Customer Lifetime Value", color: WARM },
        { icon: Lock, title: "Defensible Moat", desc: "Our localized Nassau County focus, NATE-certified technicians, and <90-minute response guarantee create a service level national chains cannot match.", tag: "100% Satisfaction Guarantee", color: RED },
        { icon: Repeat, title: "Revenue Quality", desc: "Shift from transactional repairs to subscription-based maintenance plans ensures predictable cash flow, higher margins, and increased business valuation.", tag: "Growing Maintenance Subscriber Base", color: GREEN },
        { icon: Rocket, title: "Expansion Potential", desc: "The fragmented local market offers a prime opportunity for organic expansion and strategic roll-ups. Our scalable operations platform is ready for growth.", tag: "Scalable Service Model", color: ORANGE },
      ].map((item, i) => (
        <div key={i} className="p-6 rounded-2xl flex flex-col" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ background: `${item.color}22` }}>
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-base text-white/55 leading-relaxed mb-4 flex-1">{item.desc}</p>
          <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs font-semibold" style={{ color: item.color }}>{item.tag}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Slide 15: Team & Operations (enriched) ── */
export const TeamSlide = () => (
  <div className="flex flex-col justify-center h-full px-24"
    style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-4">
      <HometsLogoDark width={160} />
    </div>
    <p className="text-2xl font-semibold mb-6 uppercase tracking-widest" style={{ color: ORANGE }}>
      Team & Operations
    </p>
    <div className="grid grid-cols-2 gap-10">
      {/* Left: Org Structure */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Organization Structure</h3>
        <div className="space-y-4">
          <div className="p-5 rounded-xl text-center" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.2), hsl(0,78%,50%,0.15))" }}>
            <p className="text-lg font-bold text-white">Owner / General Manager</p>
            <p className="text-sm text-white/50">Strategy, P&L, Partnerships</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
              <p className="text-base font-bold text-white">Operations & Dispatch</p>
              <p className="text-sm text-white/50">Scheduling, Routing, Customer Success</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
              <p className="text-base font-bold text-white">Service Manager</p>
              <p className="text-sm text-white/50">QA, Training, Technical Lead</p>
            </div>
          </div>
          <div className="p-4 rounded-xl text-center" style={{ background: "hsl(0,0%,14%)" }}>
            <p className="text-base font-bold text-white">Field Technicians</p>
            <p className="text-sm text-white/50">NATE Certified Techs & Apprentices</p>
          </div>
        </div>
      </div>
      {/* Right: Operational Excellence */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Operational Excellence</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
            <Clock className="w-6 h-6 mb-2" style={{ color: ORANGE }} />
            <p className="text-sm font-bold text-white mb-1">Extended Coverage</p>
            <p className="text-xs text-white/50">Mon-Thu: 7 AM - 11 PM</p>
            <p className="text-xs text-white/50">Fri-Sun: 7 AM - 6 PM</p>
            <p className="text-xs font-semibold mt-1" style={{ color: RED }}>24/7 Emergency Support</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
            <Truck className="w-6 h-6 mb-2" style={{ color: WARM }} />
            <p className="text-sm font-bold text-white mb-1">Rapid Dispatch</p>
            <p className="text-xs text-white/50">{"< 90-Min Response SLA"}</p>
            <p className="text-xs text-white/50">Centralized GPS Routing</p>
            <p className="text-xs text-white/50">5 "Same-Day" Slots Daily</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
            <Shield className="w-6 h-6 mb-2" style={{ color: GREEN }} />
            <p className="text-sm font-bold text-white mb-1">Quality Assurance</p>
            <p className="text-xs text-white/50">Standardized Checklists</p>
            <p className="text-xs text-white/50">Weekly NATE Training</p>
            <p className="text-xs text-white/50">Photo Verification</p>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-4">Key Performance Indicators (Weekly)</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "98%", label: "On-Time Arrival", sub: "Target: >95%", color: GREEN },
            { value: "4.9", label: "CSAT Score", sub: "Out of 5.0 Stars", color: WARM },
            { value: "85%", label: "First-Visit Fix", sub: "Inventory Optimization", color: ORANGE },
          ].map((kpi, i) => (
            <div key={i} className="p-4 rounded-xl text-center" style={{ background: "hsl(0,0%,11%)" }}>
              <p className="text-3xl font-bold mb-1" style={{ color: kpi.color }}>{kpi.value}</p>
              <p className="text-sm font-semibold text-white">{kpi.label}</p>
              <p className="text-xs text-white/40">{kpi.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── Slide 16: The Ask & Use of Funds (combined, $250K) ── */
const fundsData = [
  { name: "Crew Hiring & Training", value: 45, fill: ORANGE },
  { name: "Fleet & Equipment", value: 25, fill: WARM },
  { name: "Marketing & Lead Gen", value: 15, fill: RED },
  { name: "Technology & Ops", value: 10, fill: GREEN },
  { name: "Working Capital", value: 5, fill: "hsl(35, 90%, 55%)" },
];

export const AskSlide = () => (
  <div className="flex h-full" style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex-1 flex flex-col justify-center px-20">
      <div className="flex items-center gap-3 mb-4">
        <HometsLogoDark width={160} />
      </div>
      <p className="text-2xl font-semibold mb-4 uppercase tracking-widest" style={{ color: ORANGE }}>
        The Ask & Use of Funds
      </p>
      <h2 className="text-5xl font-bold text-white mb-2">Seeking Pre-Seed Capital</h2>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-6xl font-black" style={{ color: ORANGE }}>$250K</span>
        <span className="text-2xl text-white/60">Pre-Seed / Friends & Family</span>
      </div>

      <div className="p-4 rounded-xl mb-6" style={{ background: "hsl(0,0%,11%)" }}>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-white">Total Ask</p>
          <p className="text-lg font-bold" style={{ color: ORANGE }}>$250K</p>
        </div>
        <p className="text-base font-semibold text-white mb-3">Strategic Allocation</p>
        <div className="space-y-4">
          {[
            { name: "Crew Hiring & Training", pct: "45%", desc: "Hire and train 2-3 additional NATE-certified technician crews.", fill: ORANGE },
            { name: "Fleet & Equipment", pct: "25%", desc: "Service vehicles, diagnostic tools, and parts inventory.", fill: WARM },
            { name: "Marketing & Lead Gen", pct: "15%", desc: "Local SEO/PPC, direct mail, and referral campaigns.", fill: RED },
            { name: "Technology & Ops", pct: "10%", desc: "Dispatch software, CRM, and customer booking portal.", fill: GREEN },
            { name: "Working Capital", pct: "5%", desc: "Seasonality buffer and vendor terms.", fill: "hsl(35, 90%, 55%)" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ background: item.fill }} />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-base text-white font-medium">{item.name}</span>
                  <span className="text-base font-bold" style={{ color: item.fill }}>{item.pct}</span>
                </div>
                <p className="text-sm text-white/45">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-lg font-bold text-white mb-3">6-Month Targets</p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { title: "3-4 Crews Active", desc: "Scale from 1 crew to 3-4 fully operational service crews." },
          { title: "$200K/mo Revenue", desc: "Reach $200K monthly revenue within 6 months of funding." },
          { title: "45%+ Gross Margin", desc: "Achieve target margins via tech efficiency and scale." },
        ].map((t, i) => (
          <div key={i} className="p-4 rounded-xl" style={{ background: "hsl(0,0%,15%)" }}>
            <p className="text-base font-bold text-white mb-1">{t.title}</p>
            <p className="text-sm text-white/50">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Exit Strategy */}
      <div className="p-4 rounded-xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.12), hsl(0,78%,50%,0.08))" }}>
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="w-5 h-5" style={{ color: ORANGE }} />
          <p className="text-base font-bold text-white">Exit Strategy</p>
        </div>
        <p className="text-sm text-white/70">Target <span className="font-bold text-white">$10M annual revenue</span> by Year 5 — sale at <span className="font-bold" style={{ color: ORANGE }}>4x multiple ($40M valuation)</span></p>
      </div>
    </div>
    <div className="w-[500px] flex flex-col items-center justify-center gap-4">
      <ResponsiveContainer width={400} height={280}>
        <PieChart>
          <Pie data={fundsData} cx="50%" cy="50%" outerRadius={120} innerRadius={70}
            dataKey="value" stroke="none" label={({ name, value }) => `${name} ${value}%`}>
            {fundsData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "hsl(0,0%,12%)", border: "1px solid hsl(0,0%,20%)", borderRadius: 12, color: "white" }} />
        </PieChart>
      </ResponsiveContainer>

      {/* Investor Returns Table */}
      <div className="w-full px-4">
        <p className="text-sm font-bold text-white mb-2 text-center">Investor Returns</p>
        <div className="rounded-xl overflow-hidden" style={{ background: "hsl(0,0%,11%)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "hsl(0,0%,15%)" }}>
                <th className="px-3 py-2 text-left text-white/50 font-medium">Scenario</th>
                <th className="px-3 py-2 text-right text-white/50 font-medium">Exit</th>
                <th className="px-3 py-2 text-right text-white/50 font-medium">$250K →</th>
                <th className="px-3 py-2 text-right text-white/50 font-medium">Return</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t" style={{ borderColor: "hsl(0,0%,18%)" }}>
                <td className="px-3 py-2 text-white/70">Base (3x)</td>
                <td className="px-3 py-2 text-right text-white/70">$30M</td>
                <td className="px-3 py-2 text-right text-white">~$3.75M</td>
                <td className="px-3 py-2 text-right text-white font-semibold">15x</td>
              </tr>
              <tr className="border-t" style={{ borderColor: "hsl(0,0%,18%)", background: "hsl(15,90%,55%,0.1)" }}>
                <td className="px-3 py-2 font-bold" style={{ color: ORANGE }}>Target (4x)</td>
                <td className="px-3 py-2 text-right font-bold" style={{ color: ORANGE }}>$40M</td>
                <td className="px-3 py-2 text-right text-white font-bold">~$5M</td>
                <td className="px-3 py-2 text-right font-bold" style={{ color: ORANGE }}>20x</td>
              </tr>
              <tr className="border-t" style={{ borderColor: "hsl(0,0%,18%)" }}>
                <td className="px-3 py-2 text-white/70">Upside (5x)</td>
                <td className="px-3 py-2 text-right text-white/70">$50M</td>
                <td className="px-3 py-2 text-right text-white">~$6.25M</td>
                <td className="px-3 py-2 text-right text-white font-semibold">25x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/35 mt-2 text-center">Based on $250K SAFE, $2M cap (~12.5% equity)</p>
      </div>
    </div>
  </div>
);

/* ── Slide 17: Funding Deployment Timeline ── */
const timelineData = [
  {
    phase: "Phase 1",
    period: "Months 1-2",
    title: "Foundation",
    spend: "$65K",
    items: ["Hire & train Crew #2", "Fleet vehicle #2 + equipment", "CRM & scheduling platform live"],
    color: ORANGE,
  },
  {
    phase: "Phase 2",
    period: "Months 3-4",
    title: "Growth",
    spend: "$85K",
    items: ["Hire Crew #3", "Launch digital marketing campaigns", "Maintenance plan enrollment drive"],
    color: WARM,
  },
  {
    phase: "Phase 3",
    period: "Months 5-6",
    title: "Scale",
    spend: "$70K",
    items: ["Hire Crew #4", "Expand service radius", "Hit $200K/mo revenue target"],
    color: GREEN,
  },
  {
    phase: "Ongoing",
    period: "Months 1-12",
    title: "Working Capital",
    spend: "$30K",
    items: ["Cash reserve for operations", "Insurance & licensing", "Contingency buffer"],
    color: MUTED,
  },
];

export const DeploymentTimelineSlide = () => (
  <div className="flex flex-col h-full px-20 py-16"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-3 mb-2">
      <Clock className="w-7 h-7" style={{ color: ORANGE }} />
      <h2 className="text-4xl font-bold text-white">Funding Deployment</h2>
    </div>
    <p className="text-xl text-white/50 mb-10">How we put $250K to work in 6 months</p>

    {/* Timeline bar */}
    <div className="flex gap-2 mb-10 h-3 rounded-full overflow-hidden" style={{ background: "hsl(0,0%,15%)" }}>
      {[
        { width: "26%", color: ORANGE },
        { width: "34%", color: WARM },
        { width: "28%", color: GREEN },
        { width: "12%", color: MUTED },
      ].map((seg, i) => (
        <div key={i} className="h-full rounded-full" style={{ width: seg.width, background: seg.color }} />
      ))}
    </div>

    {/* Phase cards */}
    <div className="grid grid-cols-4 gap-5 flex-1">
      {timelineData.map((phase, i) => (
        <div key={i} className="flex flex-col rounded-2xl p-6" style={{ background: "hsl(0,0%,11%)" }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full" style={{ background: phase.color }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: phase.color }}>{phase.phase}</span>
          </div>
          <p className="text-sm text-white/40 mb-3">{phase.period}</p>
          <p className="text-2xl font-bold text-white mb-1">{phase.title}</p>
          <p className="text-3xl font-bold mb-5" style={{ color: phase.color }}>{phase.spend}</p>
          <div className="flex flex-col gap-3 mt-auto">
            {phase.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: phase.color }} />
                <p className="text-sm text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom summary */}
    <div className="flex items-center justify-between mt-8 px-6 py-4 rounded-xl" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.1), hsl(0,78%,50%,0.06))" }}>
      <div className="flex items-center gap-3">
        <Target className="w-5 h-5" style={{ color: ORANGE }} />
        <p className="text-base text-white/70">6-Month Goal</p>
      </div>
      <p className="text-lg font-bold text-white">3-4 Crews Active &nbsp;·&nbsp; $200K/mo Revenue &nbsp;·&nbsp; 45%+ Gross Margin</p>
    </div>
  </div>
);

/* ── Slide 18: Contact & Thank You (corrected) ── */
export const ContactSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-24"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="flex items-center gap-3 mb-6">
      <HometsLogoDark width={160} />
    </div>
    <h2 className="text-5xl font-bold text-white mb-3">Get in Touch</h2>
    <p className="text-3xl text-white/60 mb-12 font-light">Thank You for Your Consideration.</p>
    <p className="text-xl text-white/50 mb-12 max-w-[900px]">
      We are ready to modernize the HVAC experience in Nassau County. Join us in capturing this $76-80B market opportunity with a trusted, tech-enabled local brand.
    </p>
    <div className="px-8 py-4 rounded-full mb-12" style={{ background: "linear-gradient(135deg, hsl(15,90%,55%,0.2), hsl(0,78%,50%,0.15))" }}>
      <span className="text-2xl font-semibold" style={{ color: ORANGE }}>
        Pre-Seed Capital Ask: $250K
      </span>
      <p className="text-base text-white/50 mt-1">Seeking strategic partners to accelerate expansion.</p>
    </div>
    <div className="grid grid-cols-2 gap-8 w-full max-w-[900px] mb-10">
      <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Phone className="w-7 h-7" style={{ color: ORANGE }} />
        <div className="text-left">
          <p className="text-sm text-white/40">Direct Line</p>
          <p className="text-xl text-white font-semibold">(516) 259-1191</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Globe className="w-7 h-7" style={{ color: ORANGE }} />
        <div className="text-left">
          <p className="text-sm text-white/40">Website</p>
          <p className="text-xl text-white font-semibold">hometsair.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <MapPin className="w-7 h-7" style={{ color: ORANGE }} />
        <div className="text-left">
          <p className="text-sm text-white/40">Headquarters</p>
          <p className="text-lg text-white font-semibold">55 Jericho Tpke Suite 203</p>
          <p className="text-base text-white/60">Jericho, NY 11753</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: "hsl(0,0%,11%)" }}>
        <Clock className="w-7 h-7" style={{ color: ORANGE }} />
        <div className="text-left">
          <p className="text-sm text-white/40">Operating Hours</p>
          <p className="text-base text-white font-semibold">Mon-Thu: 7 AM – 11 PM &nbsp;|&nbsp; Fri-Sun: 7 AM – 6 PM</p>
          <p className="text-sm font-semibold mt-1" style={{ color: RED }}>24/7 Emergency Service Available</p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Export slide list (22 slides: 5 dispatch + 17 investor) ── */
export const slides = [
  /* Dispatcher Guide (1-5) */
  { title: "Dispatch Guide", component: DispatchTitleSlide },
  { title: "Type of Service", component: ServiceTypeSlide },
  { title: "System Types", component: SystemTypeSlide },
  { title: "Diagnostic Fees", component: DiagnosticFeesSlide },
  { title: "Residential vs Commercial", component: ResidentialCommercialSlide },
  /* Investor Deck (6-22) */
  { title: "Title", component: TitleSlide },
  { title: "The Problem", component: ProblemSlide },
  { title: "The Solution", component: SolutionSlide },
  { title: "Services", component: ServicesSlide },
  { title: "Competitive Advantages", component: CompetitiveSlide },
  { title: "Market Opportunity", component: MarketSlide },
  { title: "Traction", component: TractionSlide },
  { title: "Business Model", component: BusinessModelSlide },
  { title: "Unit Economics & GTM", component: UnitEconomicsSlide },
  { title: "Market Positioning", component: MarketPositioningSlide },
  { title: "Customer Success", component: CustomerStoriesSlide },
  { title: "Growth Roadmap", component: GrowthSlide },
  { title: "Financial Projections", component: ProjectionsSlide },
  { title: "Why Invest Now", component: WhyInvestSlide },
  { title: "Team & Operations", component: TeamSlide },
  { title: "The Ask", component: AskSlide },
  { title: "Funding Deployment", component: DeploymentTimelineSlide },
  { title: "Contact", component: ContactSlide },
];
