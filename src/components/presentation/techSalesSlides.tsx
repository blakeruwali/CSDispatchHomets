import React, { useState } from "react";
import {
  DollarSign, CheckCircle, Shield, Home, User, Clock,
  ArrowRight, ChevronRight, Phone, Star, Wrench, AlertTriangle,
  ThermometerSun, Zap, FileText, MessageSquare, Heart,
  Target, TrendingUp, Award, Handshake, Eye, Lightbulb,
  BadgeCheck, CircleDollarSign, Calculator, Scale, Timer,
  RefreshCw, Search, ShieldCheck, Gauge, CalendarCheck
} from "lucide-react";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const GREEN = "hsl(145, 60%, 45%)";
const BLUE = "hsl(210, 80%, 55%)";
const GOLD = "hsl(45, 90%, 55%)";
const MUTED = "hsl(0, 0%, 65%)";
const NAVY = "hsl(215, 50%, 23%)";
const SURFACE = "hsl(0,0%,11%)";
const SURFACE2 = "hsl(0,0%,14%)";

/* ─── Slide 1: Cover ─── */
export const TechSalesCoverSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-20"
    style={{ background: "linear-gradient(135deg, hsl(0,0%,6%) 0%, hsl(0,0%,12%) 100%)" }}>
    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
      <span className="text-lg text-white/50 tracking-widest uppercase">Technician Training</span>
    </div>
    <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8"
      style={{ background: `linear-gradient(135deg, ${ORANGE}, ${RED})` }}>
      <TrendingUp className="w-12 h-12 text-white" />
    </div>
    <h2 className="text-5xl font-bold text-white mb-4">HVAC Estimate Sales Guide</h2>
    <p className="text-2xl text-white/60 mb-8 font-light tracking-wide max-w-[900px]">
      From Arrival to Close — Selling Replacements & Installations with Confidence
    </p>
    <div className="grid grid-cols-3 gap-6 mt-4 max-w-[800px]">
      {[
        { n: "13", label: "Sales Process Slides" },
        { n: "7", label: "Objection Handling" },
        { n: "∞", label: "Revenue Potential" },
      ].map((s, i) => (
        <div key={i} className="rounded-xl p-4 border border-white/10" style={{ background: "hsl(0,0%,10%)" }}>
          <div className="text-3xl font-bold mb-1" style={{ color: ORANGE }}>{s.n}</div>
          <div className="text-sm text-white/50">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Slide 2: The Sales Mindset ─── */
export const SalesMindsetSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Foundation</p>
    <h2 className="text-5xl font-bold text-white mb-8">The Sales Mindset</h2>
    <p className="text-xl text-white/60 mb-8 max-w-[900px]">You're not "selling" — you're helping homeowners make an informed decision about their family's comfort and safety.</p>
    <div className="grid grid-cols-2 gap-6">
      {[
        { icon: Shield, title: "Advisor, Not Salesman", color: BLUE,
          points: ["You're the expert they invited into their home", "Lead with education — the sale follows", "Never pressure — present options and let them choose", "Your job is to give them the information to decide"] },
        { icon: Heart, title: "Empathy First", color: RED,
          points: ["Acknowledge their frustration/discomfort", "Understand their budget concerns are real", "Remember: this is one of their biggest home investments", "They're trusting YOU with their family's comfort"] },
        { icon: Target, title: "Own the Outcome", color: GREEN,
          points: ["Every estimate is an opportunity to change a family's comfort", "Present Good/Better/Best — always", "If you don't offer the best option, you're deciding for them", "The tech who believes in the product sells the product"] },
        { icon: Award, title: "Professionalism = Trust", color: GOLD,
          points: ["Clean uniform, clean truck, clean bootcovers", "Arrive on time, introduce yourself by name", "Business card before you start", "Treat every home like your grandmother's house"] },
      ].map((card, i) => (
        <div key={i} className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${card.color}22` }}>
              <card.icon className="w-5 h-5" style={{ color: card.color }} />
            </div>
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
          </div>
          <ul className="space-y-2">
            {card.points.map((p, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: card.color }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Slide 3: Arrival Protocol ─── */
export const ArrivalProtocolSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 1</p>
    <h2 className="text-5xl font-bold text-white mb-8">First Impressions — Arrival Protocol</h2>
    <p className="text-lg text-white/55 mb-6">You have 30 seconds to make a first impression. Make them count.</p>
    <div className="grid grid-cols-4 gap-4">
      {[
        { step: "1", title: "Before You Arrive", icon: Phone, color: BLUE,
          items: ["Call/text 15 min out: \"Hi, this is [Name] from HomeTS. I'm about 15 minutes away.\"", "Review job notes & customer history in ServiceTitan", "Check if they're a Home+ member", "Clean up your truck — they WILL look at it"] },
        { step: "2", title: "At the Door", icon: User, color: GREEN,
          items: ["Park on the street, NOT the driveway", "Bootcovers on BEFORE they open the door", "Smile, introduce yourself, hand them your card", "\"Hi, I'm [Name], your comfort advisor from HomeTS\""] },
        { step: "3", title: "Set the Stage", icon: Eye, color: ORANGE,
          items: ["\"I'm going to do a thorough evaluation of your system\"", "\"I'll take about 30–45 minutes to check everything\"", "\"Then I'll sit down with you and go over all your options\"", "Ask: \"Is there anything specific that prompted this?\""] },
        { step: "4", title: "Build Rapport", icon: Heart, color: RED,
          items: ["Notice the home — compliment something genuine", "Ask about the family (pets, kids, rooms they use most)", "Listen for comfort complaints and pain points", "Take mental notes — use these in your presentation"] },
      ].map((s, i) => (
        <div key={i} className="rounded-2xl p-5 flex flex-col" style={{ background: SURFACE }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{ background: `${s.color}22`, color: s.color }}>{s.step}</div>
            <h3 className="text-lg font-bold text-white">{s.title}</h3>
          </div>
          <ul className="space-y-2">
            {s.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: s.color }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-6 rounded-xl p-4 flex items-center gap-4" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
      <AlertTriangle className="w-6 h-6 flex-shrink-0" style={{ color: RED }} />
      <p className="text-sm text-white/80"><strong style={{ color: RED }}>Never:</strong> Jump straight to the equipment. Never say "So you need a new system?" Never talk price until the full evaluation is done.</p>
    </div>
  </div>
);

/* ─── Slide 4: The Walk-Around Assessment ─── */
export const WalkAroundSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 2</p>
    <h2 className="text-5xl font-bold text-white mb-8">The Walk-Around Assessment</h2>
    <p className="text-lg text-white/55 mb-6">This is where you build credibility. Be thorough, take photos, and narrate what you find.</p>
    <div className="grid grid-cols-3 gap-5">
      {[
        { title: "Indoor Unit", icon: ThermometerSun, color: BLUE,
          checks: ["Age, make, model, serial number", "Filter condition (show them)", "Blower motor & capacitor", "Evaporator coil condition", "Drain pan & condensate line", "Electrical connections & voltage"] },
        { title: "Outdoor Unit", icon: Gauge, color: GREEN,
          checks: ["Condenser coil condition (show buildup)", "Compressor amp draw vs. rated", "Refrigerant levels & type (R-22 vs R-410A)", "Contactor & capacitor condition", "Fan motor & blade condition", "Pad/mount condition & clearances"] },
        { title: "Home & Ductwork", icon: Home, color: ORANGE,
          checks: ["Thermostat type & programming", "Duct condition — visible leaks/damage", "Room-by-room temperature complaints", "Insulation visible from attic/crawlspace", "Return air — enough? Positioned correctly?", "Electrical panel capacity for upgrades"] },
      ].map((area, i) => (
        <div key={i} className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${area.color}22` }}>
              <area.icon className="w-5 h-5" style={{ color: area.color }} />
            </div>
            <h3 className="text-xl font-bold text-white">{area.title}</h3>
          </div>
          <ul className="space-y-2">
            {area.checks.map((c, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                <Search className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: area.color }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-2 gap-4">
      <div className="rounded-xl p-4" style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}33` }}>
        <p className="text-sm font-bold mb-1" style={{ color: GREEN }}>📸 Photo Rule</p>
        <p className="text-xs text-white/70">Take 10+ photos minimum. Dirty filters, corroded wires, cracked heat exchangers, old data plates. These are your visual evidence when presenting options.</p>
      </div>
      <div className="rounded-xl p-4" style={{ background: `${BLUE}12`, border: `1px solid ${BLUE}33` }}>
        <p className="text-sm font-bold mb-1" style={{ color: BLUE }}>🗣️ Narrate Everything</p>
        <p className="text-xs text-white/70">"I'm going to check your capacitor now... see this bulging? That's a sign it's failing." Educating as you go builds trust and sets up the close.</p>
      </div>
    </div>
  </div>
);

/* ─── Slide 5: Building Rapport & Identifying Pain Points ─── */
export const PainPointsSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 3</p>
    <h2 className="text-5xl font-bold text-white mb-8">Identifying Pain Points</h2>
    <p className="text-lg text-white/55 mb-6">The customer doesn't buy equipment — they buy solutions to problems. Find the problems.</p>
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
        <h3 className="text-xl font-bold text-white mb-4" style={{ color: ORANGE }}>🎯 Discovery Questions</h3>
        <div className="space-y-3">
          {[
            { q: "\"What made you decide to look into a new system?\"", why: "Uncovers their primary motivation — cost, comfort, age, breakdown" },
            { q: "\"Are there rooms that are too hot or too cold?\"", why: "Opens door to zoning, ductwork, properly sized equipment" },
            { q: "\"What does your electric/gas bill look like in summer/winter?\"", why: "Creates cost-saving anchor for high-efficiency recommendation" },
            { q: "\"Anyone in the home have allergies or respiratory issues?\"", why: "Opens IAQ discussion — air purifiers, UV lights, humidifiers" },
            { q: "\"How long do you plan to stay in this home?\"", why: "Determines ROI timeframe — longer = better to invest more" },
            { q: "\"Have you had any repairs in the last year or two?\"", why: "Highlights money already spent — sunk cost awareness" },
            { q: "\"What's most important to you: upfront cost, monthly cost, or long-term value?\"", why: "Tells you which tier to emphasize and whether to lead with financing" },
          ].map((item, i) => (
            <div key={i} className="rounded-lg p-3" style={{ background: SURFACE2 }}>
              <p className="text-sm font-bold text-white mb-1">{item.q}</p>
              <p className="text-xs text-white/50">↳ {item.why}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <h3 className="text-xl font-bold text-white mb-4" style={{ color: RED }}>🚩 Common Pain Points to Listen For</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "High energy bills", "Uneven temperatures", "Frequent repairs",
              "Noisy system", "Old/outdated equipment", "Dust & allergies",
              "Humidity issues", "System short cycling", "R-22 refrigerant",
              "No AC in certain rooms", "Safety concerns (CO, gas)", "Poor air quality",
            ].map((pain, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70 rounded-lg p-2" style={{ background: SURFACE2 }}>
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: RED }} />
                {pain}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-6" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}33` }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: GOLD }}>💡 Pro Tip: Repeat Back</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            "So it sounds like your biggest concerns are [X] and [Y]..." — When you repeat their pain points back, they feel heard. Then when you present, tie each option back: "This system solves the [X] problem because..."
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Slide 6: Good / Better / Best Presentation ─── */
export const GoodBetterBestSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 4</p>
    <h2 className="text-5xl font-bold text-white mb-6">Good / Better / Best Presentation</h2>
    <p className="text-lg text-white/55 mb-6">Always present three options. The middle option is your target. The customer chooses — you never decide for them.</p>
    <div className="grid grid-cols-3 gap-6">
      {[
        { tier: "Good", color: MUTED, badge: "Entry Level", icon: Shield,
          features: ["Standard efficiency (14–16 SEER2)", "Single-stage compressor", "Basic thermostat", "Standard 1-year labor warranty", "Meets code requirements", "Most affordable upfront"],
          script: "\"This gets you back up and running with a reliable, code-compliant system. It's your most affordable option.\"" },
        { tier: "Better", color: ORANGE, badge: "★ Recommended", icon: Star,
          features: ["High efficiency (17–19 SEER2)", "Two-stage or variable speed", "Smart thermostat included", "Extended 5-year labor warranty", "Hard start kit & surge protector", "Home+ Membership included (1 year)"],
          script: "\"This is what I'd put in my own home. You get noticeably better comfort, lower bills, and complete protection.\"" },
        { tier: "Best", color: GOLD, badge: "Premium", icon: Award,
          features: ["Top efficiency (20+ SEER2 / inverter)", "Variable speed everything", "Premium smart thermostat + zoning", "Lifetime compressor warranty", "UV light + air purifier included", "Home+ Membership (2 years) + priority service"],
          script: "\"This is the ultimate comfort package — whisper quiet, lowest possible bills, and every add-on included. If you plan to stay 10+ years, this pays for itself.\"" },
      ].map((t, i) => (
        <div key={i} className="rounded-2xl p-6 flex flex-col relative overflow-hidden"
          style={{ background: SURFACE, border: i === 1 ? `2px solid ${ORANGE}` : `1px solid hsl(0,0%,15%)` }}>
          {i === 1 && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${ORANGE}, ${GOLD})` }} />}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <t.icon className="w-6 h-6" style={{ color: t.color }} />
              <h3 className="text-2xl font-bold text-white">{t.tier}</h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: `${t.color}22`, color: t.color }}>{t.badge}</span>
          </div>
          <ul className="space-y-2 mb-5 flex-1">
            {t.features.map((f, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: t.color }} />
                {f}
              </li>
            ))}
          </ul>
          <div className="rounded-lg p-3" style={{ background: SURFACE2 }}>
            <p className="text-xs font-bold mb-1" style={{ color: t.color }}>Script:</p>
            <p className="text-xs text-white/60 italic">{t.script}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 rounded-xl p-4" style={{ background: `${ORANGE}12`, border: `1px solid ${ORANGE}33` }}>
      <p className="text-sm text-white/80"><strong style={{ color: ORANGE }}>Key Rule:</strong> Always present from <strong>Best → Good</strong> (top down). Anchor high, let them come down. Never start with the cheapest option.</p>
    </div>
  </div>
);

/* ─── Slide 7: Presenting the Investment ─── */
export const PresentingInvestmentSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 5</p>
    <h2 className="text-5xl font-bold text-white mb-8">Presenting the Investment</h2>
    <p className="text-lg text-white/55 mb-6">Never say "price" or "cost." It's an <em>investment</em> in their home, comfort, and safety.</p>
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
        <h3 className="text-xl font-bold text-white mb-4" style={{ color: GREEN }}>✅ Presentation Framework</h3>
        <div className="space-y-3">
          {[
            { step: "1", title: "Recap Pain Points", desc: "\"Based on what we found today — [list 2-3 issues] — here are your options.\"" },
            { step: "2", title: "Show Photos", desc: "Pull up the photos on your tablet. Let them SEE the problems. \"This is your capacitor — see the bulging? That's a ticking time bomb.\"" },
            { step: "3", title: "Present Best First", desc: "Start with the Best option. Explain every feature and how it solves THEIR specific problems." },
            { step: "4", title: "Work Down", desc: "\"If you want to save on the upfront investment, here's the Better option — still excellent, just without [X and Y].\"" },
            { step: "5", title: "Pause & Listen", desc: "After presenting all three: \"Which of these feels like the right fit for your home?\" Then STOP TALKING." },
          ].map((s, i) => (
            <div key={i} className="flex gap-3 rounded-lg p-3" style={{ background: SURFACE2 }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ background: `${GREEN}22`, color: GREEN }}>{s.step}</div>
              <div>
                <p className="text-sm font-bold text-white">{s.title}</p>
                <p className="text-xs text-white/55 italic">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <h3 className="text-xl font-bold text-white mb-4" style={{ color: BLUE }}>🔄 Language Swaps</h3>
          <div className="space-y-2">
            {[
              { bad: "\"The price is...\"", good: "\"The investment for this option is...\"" },
              { bad: "\"It costs...\"", good: "\"For as low as $X/month, you get...\"" },
              { bad: "\"The cheapest option...\"", good: "\"The most affordable option...\"" },
              { bad: "\"You need to replace...\"", good: "\"Based on what I found, I'd recommend...\"" },
              { bad: "\"This is expensive but...\"", good: "\"This is the premium package — here's why homeowners choose it...\"" },
              { bad: "\"Sign here\"", good: "\"Let me get the paperwork started for you\"" },
            ].map((swap, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg p-2" style={{ background: `${RED}12`, color: RED }}>❌ {swap.bad}</div>
                <div className="rounded-lg p-2" style={{ background: `${GREEN}12`, color: GREEN }}>✅ {swap.good}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-4" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: GOLD }}>💡 The Power of Silence</p>
          <p className="text-xs text-white/70">After you present the investment amount, <strong>stop talking</strong>. The first person to speak loses. Let them process. Count to 10 in your head if you have to.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Slide 8: Financing as a Closing Tool ─── */
export const FinancingSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 6</p>
    <h2 className="text-5xl font-bold text-white mb-8">Financing as a Closing Tool</h2>
    <p className="text-lg text-white/55 mb-6">80% of HVAC installations are financed. Lead with monthly payment, not total price.</p>
    <div className="grid grid-cols-3 gap-5">
      <div className="rounded-2xl p-6 col-span-2" style={{ background: SURFACE }}>
        <h3 className="text-xl font-bold text-white mb-5" style={{ color: GREEN }}>Script: Introducing Financing</h3>
        <div className="space-y-3">
          {[
            { label: "Transition Line", script: "\"Before I share the investment, let me ask — would it help if I could show you monthly payment options?\"", note: "Most say yes. Now you've framed everything as monthly." },
            { label: "Anchor Monthly", script: "\"The Better package — which is what I'd recommend — comes out to about $X/month with approved credit. That's less than most people's coffee budget.\"", note: "Compare to everyday expense. Makes $15k feel like $189." },
            { label: "Same-as-Cash", script: "\"We also offer 0% for 18 months — so if you pay it off in that window, zero interest. A lot of homeowners use that.\"", note: "Social proof + urgency. 'A lot of homeowners' normalizes it." },
            { label: "Close on Monthly", script: "\"Would you like to go with the monthly option, or did you want to do the full investment today?\"", note: "Assumptive close — both options are YES." },
          ].map((item, i) => (
            <div key={i} className="rounded-lg p-4" style={{ background: SURFACE2 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: `${GREEN}22`, color: GREEN }}>{item.label}</span>
              </div>
              <p className="text-sm text-white/80 italic mb-1">{item.script}</p>
              <p className="text-xs text-white/40">↳ {item.note}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl p-5" style={{ background: SURFACE }}>
          <h3 className="text-lg font-bold text-white mb-3" style={{ color: BLUE }}>📊 Key Stats</h3>
          {[
            { stat: "80%", label: "of HVAC jobs are financed" },
            { stat: "40%", label: "higher close rate with monthly framing" },
            { stat: "25%", label: "higher ticket when financed" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg p-3 mb-2" style={{ background: SURFACE2 }}>
              <span className="text-2xl font-bold" style={{ color: BLUE }}>{s.stat}</span>
              <span className="text-xs text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-4" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: RED }}>⚠️ Never Say</p>
          <ul className="text-xs text-white/70 space-y-1">
            <li>• "Do you want to finance?" (sounds desperate)</li>
            <li>• "Can you afford...?" (offensive)</li>
            <li>• "Your credit might not..." (presumptuous)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Slide 9: Home+ Membership Tie-In ─── */
export const MembershipTieInSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 7</p>
    <h2 className="text-5xl font-bold text-white mb-8">Home+ Membership Tie-In</h2>
    <p className="text-lg text-white/55 mb-6">Bundle the membership into the Better and Best tiers. It's not an add-on — it's included.</p>
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
        <h3 className="text-xl font-bold text-white mb-4" style={{ color: ORANGE }}>The Script</h3>
        <div className="space-y-3">
          {[
            "\"The Better and Best packages both include your first year of Home+ Membership — that's a $299 value.\"",
            "\"That gets you two tune-ups a year — one for heating, one for cooling — so your new system stays under warranty and running at peak efficiency.\"",
            "\"You also get 15% off any future repairs, priority scheduling, and no overtime charges.\"",
            "\"Most homeowners keep it going after the first year because the tune-ups alone are worth more than the membership.\"",
            "\"Think of it like an insurance policy for your brand new investment.\"",
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg p-3" style={{ background: SURFACE2 }}>
              <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ORANGE }} />
              <p className="text-sm text-white/75 italic">{line}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <h3 className="text-xl font-bold text-white mb-4" style={{ color: GREEN }}>Home+ Benefits to Highlight</h3>
          <div className="space-y-2">
            {[
              { benefit: "2 tune-ups/year (HVAC)", value: "$398 value" },
              { benefit: "15% off all repairs", value: "Ongoing savings" },
              { benefit: "Priority scheduling", value: "Skip the line" },
              { benefit: "No overtime/holiday charges", value: "$150+ savings/call" },
              { benefit: "Extended labor warranty", value: "Peace of mind" },
              { benefit: "Transferable to new owner", value: "Adds home value" },
            ].map((b, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg p-3" style={{ background: SURFACE2 }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: GREEN }} />
                  <span className="text-sm text-white/75">{b.benefit}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${GREEN}15`, color: GREEN }}>{b.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-4" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: GOLD }}>💡 Conversion Tip</p>
          <p className="text-xs text-white/70">Don't ask "Do you want to add the membership?" — it's INCLUDED in the Better/Best tiers. Say: "This package comes with your Home+ Membership, so you're covered from day one."</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Slide 10: Creating Urgency ─── */
export const UrgencySlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 8</p>
    <h2 className="text-5xl font-bold text-white mb-8">Creating Urgency — Without Pressure</h2>
    <p className="text-lg text-white/55 mb-6">Urgency is ethical when it's TRUE. Use real facts, not fake deadlines.</p>
    <div className="grid grid-cols-2 gap-6">
      {[
        { title: "Legitimate Urgency Triggers", color: ORANGE, icon: Clock,
          items: [
            { trigger: "Seasonal demand", script: "\"We're heading into [summer/winter] and our schedule fills up fast. If we get you on the books this week, I can lock in your install date.\"" },
            { trigger: "Equipment availability", script: "\"This unit is in stock right now, but with supply chain issues, I can't guarantee it next week.\"" },
            { trigger: "Utility rebates", script: "\"There's a [rebate/tax credit] available right now for high-efficiency systems — I'd hate for you to miss that.\"" },
            { trigger: "Current system risk", script: "\"Your system is running on borrowed time. If it fails on the coldest night, you're looking at emergency rates and hotel stays.\"" },
            { trigger: "R-22 phase-out", script: "\"Your system uses R-22 refrigerant which is no longer manufactured. Each refill is going to cost more and more.\"" },
          ]},
        { title: "Same-Day Close Techniques", color: GREEN, icon: CalendarCheck,
          items: [
            { trigger: "Installation date hold", script: "\"If you'd like to move forward today, I can hold your install date. Otherwise it goes to the next customer.\"" },
            { trigger: "Today-only inclusion", script: "\"If we get the paperwork done today, I'll include [thermostat upgrade / UV light / extended warranty] at no additional charge.\"" },
            { trigger: "Financing lock", script: "\"Interest rates are [rising/competitive right now]. Locking in today's rate on financing protects your monthly payment.\"" },
            { trigger: "Decision simplifier", script: "\"I know it's a big decision. Here's what I'd suggest — let's get the financing approved (no obligation), see your monthly payment, and then you can decide with all the facts.\"" },
            { trigger: "Social proof", script: "\"I installed three of these in your neighborhood this month alone. Your neighbor on [street] went with the Better package and loves it.\"" },
          ]},
      ].map((col, ci) => (
        <div key={ci} className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <div className="flex items-center gap-3 mb-5">
            <col.icon className="w-6 h-6" style={{ color: col.color }} />
            <h3 className="text-xl font-bold text-white">{col.title}</h3>
          </div>
          <div className="space-y-3">
            {col.items.map((item, i) => (
              <div key={i} className="rounded-lg p-3" style={{ background: SURFACE2 }}>
                <p className="text-xs font-bold mb-1" style={{ color: col.color }}>{item.trigger}</p>
                <p className="text-xs text-white/65 italic">{item.script}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 rounded-xl p-4" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
      <p className="text-sm text-white/80"><strong style={{ color: RED }}>Never lie about urgency.</strong> Fake scarcity destroys trust. If they catch you once, you've lost them — and every referral they would have sent.</p>
    </div>
  </div>
);

/* ─── Slide 11: The Close — Assumptive Techniques ─── */
export const ClosingTechniquesSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 9</p>
    <h2 className="text-5xl font-bold text-white mb-8">The Close — Assumptive Techniques</h2>
    <p className="text-lg text-white/55 mb-6">You've earned the right to close. Don't be afraid of it. The customer is waiting for you to guide them.</p>
    <div className="grid grid-cols-3 gap-5">
      {[
        { title: "The Assumptive Close", color: ORANGE, icon: BadgeCheck,
          script: "\"Great — so let me get the paperwork started on the Better package. I can get you on the schedule for [day].\"",
          why: "Assume the sale. Don't ask IF — ask WHEN. Most customers are waiting for you to take the lead.",
          when: "Use when: Customer has been nodding, asking install questions, or engaging with a specific tier." },
        { title: "The Either/Or Close", color: BLUE, icon: Scale,
          script: "\"Would you like to go with the Better package, or does the Best make more sense for your family?\"",
          why: "Both options are YES. You've eliminated 'no' from the equation while giving them control.",
          when: "Use when: Customer seems interested but hasn't committed. Narrows the decision." },
        { title: "The Summary Close", color: GREEN, icon: FileText,
          script: "\"So to recap — you're getting [system], [warranty], [membership], installed [date], for [$X/month]. Shall I lock that in?\"",
          why: "Restating the value stack reminds them of everything they're getting. Makes the price feel justified.",
          when: "Use when: You've presented everything and need to wrap up the conversation." },
      ].map((tech, i) => (
        <div key={i} className="rounded-2xl p-6 flex flex-col" style={{ background: SURFACE }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${tech.color}22` }}>
              <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
            </div>
            <h3 className="text-lg font-bold text-white">{tech.title}</h3>
          </div>
          <div className="rounded-lg p-3 mb-3" style={{ background: `${tech.color}10`, border: `1px solid ${tech.color}33` }}>
            <p className="text-sm text-white/80 italic">{tech.script}</p>
          </div>
          <p className="text-sm text-white/65 mb-3">{tech.why}</p>
          <p className="text-xs mt-auto rounded-lg p-2" style={{ background: SURFACE2, color: MUTED }}>{tech.when}</p>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-2 gap-4">
      <div className="rounded-xl p-4" style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}33` }}>
        <p className="text-sm font-bold mb-1" style={{ color: GREEN }}>✅ After They Say Yes</p>
        <p className="text-xs text-white/70">"Excellent choice. Let me get everything set up." Move quickly to paperwork. Don't keep selling after the close — you risk un-selling them.</p>
      </div>
      <div className="rounded-xl p-4" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
        <p className="text-sm font-bold mb-1" style={{ color: RED }}>❌ If They Say "Not Today"</p>
        <p className="text-xs text-white/70">Don't argue. Say: "I completely understand. I'll leave the proposal with you. Can I follow up [tomorrow/this week]?" Then follow up. 40% of sales close on the follow-up.</p>
      </div>
    </div>
  </div>
);

/* ─── Slide 12: Paperwork & Next Steps ─── */
export const PaperworkSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 10</p>
    <h2 className="text-5xl font-bold text-white mb-8">Paperwork & Next Steps</h2>
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
        <h3 className="text-xl font-bold text-white mb-4" style={{ color: GREEN }}>📋 On-Site Checklist</h3>
        <div className="space-y-2">
          {[
            { task: "Run financing application (if applicable)", detail: "Get approval before they change their mind" },
            { task: "Complete the contract/proposal in ServiceTitan", detail: "All three options documented, chosen option highlighted" },
            { task: "Collect signature (digital preferred)", detail: "\"Let me get your approval right here\"" },
            { task: "Collect deposit or first payment", detail: "Whatever your company policy requires" },
            { task: "Schedule the installation date", detail: "Lock it in NOW — don't leave it open" },
            { task: "Confirm permit requirements", detail: "Let them know if a permit is needed and what to expect" },
            { task: "Set expectations for install day", detail: "Duration, crew size, what to move/clear, parking" },
            { task: "Leave your card + company materials", detail: "\"If you think of any questions, call me directly\"" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg p-3" style={{ background: SURFACE2 }}>
              <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{ background: `${GREEN}22`, color: GREEN }}>{i + 1}</div>
              <div>
                <p className="text-sm font-bold text-white">{item.task}</p>
                <p className="text-xs text-white/50">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-2xl p-6" style={{ background: SURFACE }}>
          <h3 className="text-xl font-bold text-white mb-4" style={{ color: BLUE }}>🗓️ Post-Visit Actions</h3>
          <div className="space-y-2">
            {[
              { time: "Same day", action: "Send confirmation email/text with install date and what to expect" },
              { time: "Next day", action: "Personal follow-up call: \"Just wanted to make sure you don't have any questions\"" },
              { time: "Day before install", action: "Confirmation call/text with arrival time and crew info" },
              { time: "After install", action: "Same-day thank you call + request Google review" },
              { time: "30 days post", action: "Check-in call: \"How's the new system treating you?\" + referral ask" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg p-3" style={{ background: SURFACE2 }}>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0 mt-0.5" style={{ background: `${BLUE}22`, color: BLUE }}>{item.time}</span>
                <p className="text-sm text-white/70">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-4" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: GOLD }}>💡 The Referral Ask</p>
          <p className="text-xs text-white/70">"If you know anyone who might need heating or cooling help, I'd really appreciate the referral. We treat every customer like family." — Do this EVERY time. Referrals are the highest-closing leads in HVAC.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Slide 13: Follow-Up Protocol ─── */
export const FollowUpSlide = () => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <p className="text-xl font-semibold mb-3 uppercase tracking-widest" style={{ color: ORANGE }}>Step 11</p>
    <h2 className="text-5xl font-bold text-white mb-8">Follow-Up Protocol — Unsold Estimates</h2>
    <p className="text-lg text-white/55 mb-6">40% of HVAC sales close on follow-up. If you're not following up, you're leaving money on the table.</p>
    <div className="grid grid-cols-4 gap-4">
      {[
        { day: "Same Day", icon: Phone, color: ORANGE,
          actions: ["Send thank-you text with your direct number", "\"Great meeting you today! I left the proposal on your kitchen counter. Call me anytime — [Name]\"", "Log the estimate in ServiceTitan with notes on which tier they leaned toward"] },
        { day: "Day 2", icon: MessageSquare, color: BLUE,
          actions: ["Call (not text): \"Hi [Name], it's [You] from HomeTS. Just checking in — did you have any questions about the options?\"", "If voicemail: leave a warm, brief message", "Note their response/objection in ServiceTitan"] },
        { day: "Day 5", icon: FileText, color: GREEN,
          actions: ["Text or email: \"Hey [Name], I wanted to let you know we have install dates opening up next week. Want me to hold one for you?\"", "If they had a specific objection, address it directly", "Offer to come back and re-present if they have new questions"] },
        { day: "Day 10+", icon: RefreshCw, color: GOLD,
          actions: ["Final call: \"Hi [Name], just following up one last time. No pressure — I just want to make sure you have everything you need to make a decision.\"", "If no response, move to 'long-term nurture' — seasonal check-in calls", "Never burn the bridge — they may call in 6 months"] },
      ].map((step, i) => (
        <div key={i} className="rounded-2xl p-5 flex flex-col" style={{ background: SURFACE }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}22` }}>
              <step.icon className="w-5 h-5" style={{ color: step.color }} />
            </div>
            <h3 className="text-lg font-bold text-white">{step.day}</h3>
          </div>
          <ul className="space-y-2">
            {step.actions.map((a, j) => (
              <li key={j} className="text-xs text-white/70 leading-relaxed flex items-start gap-2">
                <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-2 gap-4">
      <div className="rounded-xl p-4" style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}33` }}>
        <p className="text-sm text-white/80"><strong style={{ color: GREEN }}>Key stat:</strong> The average HVAC sale takes 2.3 touches to close. Most techs give up after 1. Be the tech who follows up.</p>
      </div>
      <div className="rounded-xl p-4" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
        <p className="text-sm text-white/80"><strong style={{ color: RED }}>Never say:</strong> "Just checking in" with nothing new to offer. Always have a reason — new availability, expiring rebate, seasonal deadline.</p>
      </div>
    </div>
  </div>
);

/* ────────────────────────────────────────────────
   OBJECTION HANDLING SLIDES (14–20)
   ──────────────────────────────────────────────── */

const ObjectionSlide: React.FC<{
  number: string;
  objection: string;
  icon: React.ElementType;
  color: string;
  whyTheyHesitate: string[];
  responseScript: { label: string; script: string }[];
  proTip: { title: string; text: string };
  doNot: string[];
}> = ({ number, objection, icon: Icon, color, whyTheyHesitate, responseScript, proTip, doNot }) => (
  <div className="flex flex-col justify-center h-full px-20" style={{ background: "hsl(0,0%,7%)" }}>
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xl font-semibold uppercase tracking-widest" style={{ color: ORANGE }}>Objection {number}</span>
    </div>
    <div className="flex items-center gap-4 mb-8">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${color}22` }}>
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      <h2 className="text-4xl font-bold text-white">"{objection}"</h2>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-5">
        <div className="rounded-2xl p-5" style={{ background: SURFACE }}>
          <h3 className="text-lg font-bold text-white mb-3" style={{ color: BLUE }}>🧠 Why They Hesitate</h3>
          <ul className="space-y-2">
            {whyTheyHesitate.map((reason, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-4" style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: GOLD }}>💡 {proTip.title}</p>
          <p className="text-xs text-white/70">{proTip.text}</p>
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-2xl p-5" style={{ background: SURFACE }}>
          <h3 className="text-lg font-bold text-white mb-3" style={{ color: GREEN }}>✅ Response Script</h3>
          <div className="space-y-3">
            {responseScript.map((step, i) => (
              <div key={i} className="rounded-lg p-3" style={{ background: SURFACE2 }}>
                <span className="text-xs font-bold block mb-1" style={{ color: GREEN }}>{step.label}</span>
                <p className="text-sm text-white/75 italic">{step.script}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-4" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
          <p className="text-sm font-bold mb-1" style={{ color: RED }}>❌ Do NOT</p>
          <ul className="text-xs text-white/70 space-y-1">
            {doNot.map((d, i) => <li key={i}>• {d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

/* ─── Objection 1: Too Expensive ─── */
export const Objection1Slide = () => (
  <ObjectionSlide
    number="1" objection="That's too expensive" icon={DollarSign} color={RED}
    whyTheyHesitate={[
      "Sticker shock — they're comparing to a repair, not another install",
      "They don't understand the total value (warranty, efficiency, membership)",
      "They haven't been shown monthly payment options yet",
      "They may have unrealistic expectations from online pricing",
    ]}
    responseScript={[
      { label: "Acknowledge", script: "\"I completely understand — it's a significant investment. Let me break down what you're actually getting...\"" },
      { label: "Reframe to Monthly", script: "\"When we look at this on a monthly basis, the Better package comes out to about $X/month — and that includes your warranty, membership, and everything.\"" },
      { label: "Cost of Inaction", script: "\"If we look at what you've spent on repairs the last 2 years — [$X] — plus your higher energy bills with a [X] SEER system, the new system actually saves you money over 5 years.\"" },
      { label: "Offer Flexibility", script: "\"We also have 0% financing for 18 months. Would it help to see what that looks like?\"" },
    ]}
    proTip={{ title: "The Repair vs. Replace Math", text: "Always have the \"repair cost trap\" ready: \"You've spent $X on repairs. Another $Y is likely this year. At what point does it make more sense to invest in something new with a full warranty?\"" }}
    doNot={["Drop your price immediately — it devalues the work", "Say \"I can talk to my manager\" (makes you look powerless)", "Apologize for the price — you're worth it", "Compare yourself to the cheapest competitor"]}
  />
);

/* ─── Objection 2: Need to Think About It ─── */
export const Objection2Slide = () => (
  <ObjectionSlide
    number="2" objection="I need to think about it" icon={Clock} color={BLUE}
    whyTheyHesitate={[
      "They're overwhelmed by the decision size",
      "They might want to research/compare but don't want to say so",
      "They need their spouse's input (but won't say that)",
      "They genuinely need time — and that's OK",
    ]}
    responseScript={[
      { label: "Isolate the Concern", script: "\"Absolutely — it's a big decision. Can I ask: is it the system itself you're unsure about, or the investment?\"" },
      { label: "Address Specifically", script: "If it's the investment → pivot to financing. If it's the system → re-explain features tied to their pain points." },
      { label: "Create Soft Urgency", script: "\"Take your time — I just want you to know that install dates are booking out [X weeks] right now. If you decide by [date], I can hold your spot.\"" },
      { label: "Set Follow-Up", script: "\"Can I check in with you [tomorrow/Thursday]? I'll leave the proposal so you can review it with [spouse].\"" },
    ]}
    proTip={{ title: "The Real Objection", text: "\"I need to think about it\" is almost never the real objection. It's usually price, spouse, or wanting other quotes. Your job is to gently find the real reason — then address THAT." }}
    doNot={["Pressure them (\"What's there to think about?\")", "Leave without setting a follow-up date", "Accept it at face value without probing", "Make them feel guilty for not deciding today"]}
  />
);

/* ─── Objection 3: Getting Other Quotes ─── */
export const Objection3Slide = () => (
  <ObjectionSlide
    number="3" objection="I want to get a few more quotes" icon={Search} color={ORANGE}
    whyTheyHesitate={[
      "They feel responsible to comparison shop (especially for large purchases)",
      "Someone told them to \"always get 3 quotes\"",
      "They're not yet sold on YOU, not just the price",
      "They want leverage to negotiate",
    ]}
    responseScript={[
      { label: "Validate", script: "\"That's smart — I'd do the same thing. Can I share something that will help you compare apples to apples?\"" },
      { label: "Educate on Comparison", script: "\"When you get other quotes, make sure they include: same SEER rating, same warranty terms, install details, permit, and whether they're pulling a permit. A lot of companies leave things out to look cheaper.\"" },
      { label: "Differentiate", script: "\"What we include that others don't: [extended warranty / membership / post-install inspection / etc]. And we don't use subcontractors — our crew does every install.\"" },
      { label: "Anchor Your Value", script: "\"I'm confident in our pricing because I know what's included. When you compare, you'll see the difference.\"" },
    ]}
    proTip={{ title: "Give Them the Comparison Sheet", text: "Create a one-page checklist they can use when comparing quotes: SEER2 rating, warranty terms, who does the install, permit included?, disposal of old equipment, start-up testing, membership/maintenance included. This makes YOU the expert — even if they leave." }}
    doNot={["Badmouth competitors", "Drop your price to \"match\" someone they haven't even called yet", "Act offended or desperate", "Skip the follow-up — they WILL call someone else if you don't stay top of mind"]}
  />
);

/* ─── Objection 4: Spouse Needs to Decide ─── */
export const Objection4Slide = () => (
  <ObjectionSlide
    number="4" objection="I need to talk to my spouse" icon={User} color={GREEN}
    whyTheyHesitate={[
      "Legitimate — major purchases are joint decisions",
      "Sometimes used as a polite brush-off",
      "They may be bought in but know their spouse will push back on price",
      "The absent spouse may have different priorities (comfort vs. cost)",
    ]}
    responseScript={[
      { label: "Validate & Offer Help", script: "\"Completely understand — this is a family decision. Would it help if I put together a simple summary you can share with [spouse's name]?\"" },
      { label: "Equip Them to Sell", script: "\"The key things to share: [system solves X problem], [monthly payment is $X], [includes full warranty and membership]. I'll put it all on one page for you.\"" },
      { label: "Offer to Return", script: "\"Or — I'm happy to come back when you're both available. Sometimes it's easier when I can answer questions directly. Would [evening/weekend] work?\"" },
      { label: "Get Micro-Commitment", script: "\"In the meantime, which option were YOU leaning toward? That way I can have everything ready to go if [spouse] agrees.\"" },
    ]}
    proTip={{ title: "Prevent This Objection", text: "At the start of the appointment, ask: \"Is there anyone else involved in making this decision? I want to make sure everyone has the information they need.\" If spouse is absent, offer to schedule when both are home." }}
    doNot={["Say \"Can you call them now?\" (pushy)", "Dismiss it (\"You don't need permission\")", "Leave without a follow-up plan", "Skip leaving a written proposal — the absent spouse needs something to review"]}
  />
);

/* ─── Objection 5: Can't I Just Repair It? ─── */
export const Objection5Slide = () => (
  <ObjectionSlide
    number="5" objection="Can't I just repair it instead?" icon={Wrench} color={GOLD}
    whyTheyHesitate={[
      "A repair feels cheaper and simpler right now",
      "They don't understand the long-term cost of repeated repairs",
      "Emotional attachment to \"their\" system (especially if they installed it)",
      "Fear of the unknown — new system = new learning curve",
    ]}
    responseScript={[
      { label: "Agree Partially", script: "\"You could repair it — and I can do that for you. The repair would be about $[X]. But I want to make sure you have the full picture before you decide.\"" },
      { label: "Show the Math", script: "\"Your system is [X] years old. Average lifespan is 15-20 years. You've spent $[Y] on repairs in the last [Z] years. Statistically, you're looking at [A] more repairs in the next 2-3 years.\"" },
      { label: "Efficiency Gap", script: "\"Your current system is [X] SEER. A new system at [Y] SEER would save you roughly $[Z]/month on energy. Over 10 years, that's $[total].\"" },
      { label: "Let Them Choose", script: "\"I can do the repair today — no problem. Or we can look at replacement options that come with a full warranty and zero repair costs for years. What feels right for you?\"" },
    ]}
    proTip={{ title: "The $5,000 Rule", text: "If repair cost × age of system > $5,000, replacement is almost always the better financial decision. Example: $800 repair × 12-year-old system = $9,600 — well past the threshold." }}
    doNot={["Refuse to do the repair (they'll call someone else)", "Make them feel stupid for wanting to repair", "Guarantee the repair will fail (you don't know that)", "Forget to present repair AND replace options side by side"]}
  />
);

/* ─── Objection 6: Found It Cheaper Online ─── */
export const Objection6Slide = () => (
  <ObjectionSlide
    number="6" objection="I saw this unit cheaper online" icon={TrendingUp} color={NAVY}
    whyTheyHesitate={[
      "They Googled the model number and found a lower equipment price",
      "They don't understand that equipment cost ≠ installed cost",
      "Amazon/Home Depot pricing doesn't include install, warranty, permits",
      "They feel like they're being overcharged",
    ]}
    responseScript={[
      { label: "Don't Be Defensive", script: "\"You're right — you can find the equipment cheaper online. Here's the important difference...\"" },
      { label: "Break Down the Real Cost", script: "\"That online price is just the box. Our price includes: professional installation, permits, disposal of old equipment, start-up and testing, full warranty registration, and our 1-year labor guarantee.\"" },
      { label: "Warranty Warning", script: "\"Here's the catch most people don't know: manufacturers require professional installation for the warranty to be valid. If you buy online and hire a handyman, the manufacturer warranty is void.\"" },
      { label: "Quality of Install", script: "\"The equipment is maybe 40% of the job. The other 60% is the quality of the installation — refrigerant charge, ductwork connections, electrical, airflow testing. That's what determines if your system lasts 10 years or 20.\"" },
    ]}
    proTip={{ title: "The 60/40 Rule", text: "Equipment is 40% of system performance. Installation quality is 60%. A perfectly good unit installed poorly will underperform, break down early, and void warranties. This is your strongest argument." }}
    doNot={["Say \"You get what you pay for\" (condescending)", "Dismiss their research (they did their homework)", "Match the online price (impossible and unprofitable)", "Get into an argument about pricing"]}
  />
);

/* ─── Objection 7: Bad Experience with Contractors ─── */
export const Objection7Slide = () => (
  <ObjectionSlide
    number="7" objection="I've been burned by contractors before" icon={ShieldCheck} color={GREEN}
    whyTheyHesitate={[
      "Previous bad experience (overcharged, poor work, ghosted after)",
      "Trust is broken — they're projecting past experiences onto you",
      "They're hyper-vigilant about being taken advantage of",
      "May have been upsold on unnecessary work before",
    ]}
    responseScript={[
      { label: "Empathize", script: "\"I'm sorry you went through that — unfortunately, it happens too often in this industry. That's exactly why we do things differently.\"" },
      { label: "Differentiate with Proof", script: "\"We have [X] five-star reviews on Google. We're licensed, insured, and we pull permits on every job. I'll give you my direct cell — if anything goes wrong, you call ME.\"" },
      { label: "Transparency", script: "\"I showed you exactly what I found, with photos. The proposal has everything itemized — no hidden fees, no surprises. What you see is what you pay.\"" },
      { label: "Guarantee", script: "\"We stand behind our work with a [X]-year labor warranty. If anything isn't right, we come back and fix it — no charge, no questions.\"" },
    ]}
    proTip={{ title: "Reviews Are Your Armor", text: "Pull up your Google reviews on your phone and show them. \"Here's what homeowners in your area are saying about us.\" Nothing overcomes distrust faster than 200+ five-star reviews from their neighbors." }}
    doNot={["Badmouth the previous contractor (even if they deserve it)", "Dismiss their concerns (\"We're not like them\")", "Get offended — their guard is up and it's not personal", "Promise things you can't deliver to overcompensate"]}
  />
);

/* ─── Install Pricing Framework ─── */
export const InstallPricingFrameworkSlide = () => {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

  const residentialSystems = [
    {
      system: "Central AC + Coil",
      good: { range: "$5,500 – $7,500", seer: "14–16 SEER2", details: "Single-stage, basic thermostat, standard install" },
      better: { range: "$8,500 – $12,000", seer: "17–19 SEER2", details: "Two-stage, smart thermostat, hard start kit, surge protector" },
      best: { range: "$13,000 – $18,000+", seer: "20+ SEER2", details: "Variable speed inverter, zoning, IAQ bundle, premium warranty" },
    },
    {
      system: "Gas Furnace + AC",
      good: { range: "$7,500 – $10,000", seer: "80% AFUE / 14 SEER2", details: "Single-stage both, standard ductwork" },
      better: { range: "$11,000 – $15,000", seer: "96% AFUE / 17 SEER2", details: "Two-stage furnace, variable blower, smart thermostat" },
      best: { range: "$16,000 – $22,000+", seer: "98% AFUE / 20+ SEER2", details: "Modulating furnace, inverter AC, zoning, full IAQ" },
    },
    {
      system: "Heat Pump System",
      good: { range: "$6,500 – $9,000", seer: "15 SEER2 / 8 HSPF2", details: "Single-stage, electric backup, basic thermostat" },
      better: { range: "$10,000 – $14,000", seer: "17 SEER2 / 9 HSPF2", details: "Two-stage, smart thermostat, dual fuel option" },
      best: { range: "$15,000 – $21,000+", seer: "20+ SEER2 / 10+ HSPF2", details: "Variable speed inverter, cold climate rated, full IAQ" },
    },
    {
      system: "Mini Split (per zone)",
      good: { range: "$3,500 – $5,000", seer: "18 SEER2", details: "Single-zone wall mount, basic remote" },
      better: { range: "$5,500 – $7,500", seer: "20 SEER2", details: "Single-zone, WiFi control, enhanced filtration" },
      best: { range: "$8,000 – $12,000+", seer: "22+ SEER2", details: "Multi-zone (2–3 heads), hyper-heating, smart integration" },
    },
    {
      system: "Boiler (Hydronic)",
      good: { range: "$6,000 – $9,000", seer: "84% AFUE", details: "Standard cast iron, basic controls" },
      better: { range: "$10,000 – $15,000", seer: "90–95% AFUE", details: "High-efficiency, modulating, indirect water heater option" },
      best: { range: "$16,000 – $25,000+", seer: "95%+ AFUE", details: "Condensing boiler, smart controls, radiant floor ready" },
    },
  ];

  const addOns = [
    { item: "Smart Thermostat", price: "$350 – $600", note: "Included in Better/Best tiers" },
    { item: "Hard Start Kit", price: "$150 – $250", note: "Protects compressor, included in Better+" },
    { item: "Surge Protector", price: "$200 – $350", note: "Whole-unit protection" },
    { item: "UV Air Purifier", price: "$800 – $1,500", note: "Kills mold/bacteria in coil" },
    { item: "Media Air Cleaner", price: "$600 – $1,200", note: "4\" or 5\" whole-home filtration" },
    { item: "Humidifier / Dehumidifier", price: "$800 – $1,800", note: "Whole-home comfort control" },
    { item: "Zoning System (2-zone)", price: "$2,000 – $3,500", note: "Dampers, panel, extra thermostat" },
    { item: "Duct Modification", price: "$500 – $3,000+", note: "Per area — resize, add runs, seal" },
    { item: "Electrical Panel Upgrade", price: "$1,800 – $3,500", note: "When panel can't support new equipment" },
    { item: "Permit & Inspection", price: "$150 – $500", note: "Always included — never skip" },
  ];

  return (
    <div className="flex flex-col justify-center h-full px-16" style={{ background: "hsl(0,0%,7%)" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xl font-semibold mb-2 uppercase tracking-widest" style={{ color: ORANGE }}>Pricing Reference</p>
          <h2 className="text-4xl font-bold text-white">Installation Pricing Framework</h2>
        </div>
        <div className="flex rounded-xl overflow-hidden" style={{ border: `1px solid hsl(0,0%,20%)` }}>
          {(["residential", "commercial"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all"
              style={{
                background: activeTab === tab ? ORANGE : "transparent",
                color: activeTab === tab ? "white" : "hsl(0,0%,55%)",
              }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "residential" ? (
        <>
          {/* Systems table */}
          <div className="rounded-2xl overflow-hidden mb-5" style={{ background: SURFACE, border: `1px solid hsl(0,0%,15%)` }}>
            <div className="grid grid-cols-[180px_1fr_1fr_1fr] text-xs font-bold uppercase tracking-wider"
              style={{ background: SURFACE2 }}>
              <div className="px-4 py-3 text-white/40">System Type</div>
              <div className="px-4 py-3" style={{ color: MUTED }}>Good</div>
              <div className="px-4 py-3" style={{ color: ORANGE }}>★ Better</div>
              <div className="px-4 py-3" style={{ color: GOLD }}>Best</div>
            </div>
            {residentialSystems.map((sys, i) => (
              <div key={i} className="grid grid-cols-[180px_1fr_1fr_1fr]"
                style={{ borderTop: `1px solid hsl(0,0%,13%)`, background: i % 2 === 0 ? "transparent" : "hsl(0,0%,9%)" }}>
                <div className="px-4 py-3 flex items-center">
                  <span className="text-sm font-bold text-white">{sys.system}</span>
                </div>
                {([sys.good, sys.better, sys.best] as const).map((tier, j) => (
                  <div key={j} className="px-4 py-3">
                    <p className="text-sm font-bold text-white mb-0.5">{tier.range}</p>
                    <p className="text-[11px] font-semibold mb-0.5" style={{ color: j === 0 ? MUTED : j === 1 ? ORANGE : GOLD }}>{tier.seer}</p>
                    <p className="text-[10px] text-white/40">{tier.details}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="rounded-2xl p-5" style={{ background: SURFACE, border: `1px solid hsl(0,0%,15%)` }}>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5" style={{ color: GREEN }} />
              Common Add-Ons & Upgrades
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {addOns.map((a, i) => (
                <div key={i} className="rounded-lg p-2.5" style={{ background: SURFACE2 }}>
                  <p className="text-xs font-bold text-white mb-0.5">{a.item}</p>
                  <p className="text-xs font-semibold" style={{ color: GREEN }}>{a.price}</p>
                  <p className="text-[10px] text-white/35 mt-0.5">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center rounded-2xl p-12" style={{ background: SURFACE }}>
          <Calculator className="w-16 h-16 mb-4" style={{ color: ORANGE }} />
          <h3 className="text-2xl font-bold text-white mb-3">Commercial Pricing</h3>
          <p className="text-lg text-white/50 text-center max-w-[600px] mb-6">
            Commercial installs are quoted per-project using site survey data. Use these guidelines:
          </p>
          <div className="grid grid-cols-3 gap-4 w-full max-w-[800px]">
            {[
              { label: "RTU Replacement", range: "$8,000 – $35,000+", note: "Per unit, varies by tonnage & crane needs" },
              { label: "Split System", range: "$10,000 – $30,000+", note: "Depends on lineset length & electrical" },
              { label: "VRF / Multi-Zone", range: "$25,000 – $100,000+", note: "Complex design, engineering required" },
            ].map((c, i) => (
              <div key={i} className="rounded-xl p-4 text-center" style={{ background: SURFACE2 }}>
                <p className="text-sm font-bold text-white mb-1">{c.label}</p>
                <p className="text-lg font-bold" style={{ color: ORANGE }}>{c.range}</p>
                <p className="text-[11px] text-white/40 mt-1">{c.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl p-4 w-full max-w-[800px]" style={{ background: `${BLUE}12`, border: `1px solid ${BLUE}33` }}>
            <p className="text-sm text-white/70 text-center">
              <strong style={{ color: BLUE }}>Reminder:</strong> Commercial labor rate is <strong className="text-white">$269/hr</strong>. Diagnostic fee is <strong className="text-white">$269</strong>. Always include permit costs and crane rental if applicable.
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 rounded-xl p-3 flex items-center gap-3" style={{ background: `${RED}12`, border: `1px solid ${RED}33` }}>
        <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: RED }} />
        <p className="text-xs text-white/70">
          <strong style={{ color: RED }}>Important:</strong> These are framework ranges. Always use your estimating tool for exact pricing. Factor in: complexity, accessibility, code requirements, ductwork mods, electrical upgrades, and permit fees. Never quote from memory.
        </p>
      </div>
    </div>
  );
};

/* ─── Export all tech sales slides ─── */
export const techSalesSlides = [
  { title: "HVAC Estimate Sales Guide", component: TechSalesCoverSlide, keywords: "tech sales cover estimate hvac guide training" },
  { title: "The Sales Mindset", component: SalesMindsetSlide, keywords: "mindset advisor empathy trust professionalism sales" },
  { title: "Arrival Protocol", component: ArrivalProtocolSlide, keywords: "arrival first impression door bootcovers rapport introduction" },
  { title: "Walk-Around Assessment", component: WalkAroundSlide, keywords: "walk around assessment inspection photos indoor outdoor ductwork" },
  { title: "Identifying Pain Points", component: PainPointsSlide, keywords: "pain points discovery questions comfort bills allergies" },
  { title: "Good / Better / Best", component: GoodBetterBestSlide, keywords: "good better best tiered pricing presentation options seer" },
  { title: "Install Pricing Framework", component: InstallPricingFrameworkSlide, keywords: "install pricing framework residential commercial add-ons furnace heat pump mini split boiler" },
  { title: "Presenting the Investment", component: PresentingInvestmentSlide, keywords: "investment price presentation language photos recap" },
  { title: "Financing Close", component: FinancingSlide, keywords: "financing monthly payment 0% interest close approval" },
  { title: "Home+ Membership Tie-In", component: MembershipTieInSlide, keywords: "membership home+ tune-up discount bundle included" },
  { title: "Creating Urgency", component: UrgencySlide, keywords: "urgency seasonal rebate same-day close r-22 deadline" },
  { title: "Closing Techniques", component: ClosingTechniquesSlide, keywords: "close assumptive either-or summary technique sale" },
  { title: "Paperwork & Next Steps", component: PaperworkSlide, keywords: "paperwork contract signature install date follow-up checklist" },
  { title: "Follow-Up Protocol", component: FollowUpSlide, keywords: "follow up unsold estimate callback nurture day 2 5 10" },
  { title: "Objection: Too Expensive", component: Objection1Slide, keywords: "objection expensive price cost financing monthly" },
  { title: "Objection: Need to Think", component: Objection2Slide, keywords: "objection think about it hesitate stall follow up" },
  { title: "Objection: Other Quotes", component: Objection3Slide, keywords: "objection quotes compare shop competitor apples" },
  { title: "Objection: Spouse Decision", component: Objection4Slide, keywords: "objection spouse husband wife partner joint decision" },
  { title: "Objection: Just Repair It", component: Objection5Slide, keywords: "objection repair replace fix cost math age lifespan" },
  { title: "Objection: Cheaper Online", component: Objection6Slide, keywords: "objection online cheaper amazon price equipment install warranty" },
  { title: "Objection: Burned Before", component: Objection7Slide, keywords: "objection trust burned contractor bad experience reviews" },
];
