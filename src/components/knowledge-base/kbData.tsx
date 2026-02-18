import React from "react";
import {
  Thermometer, MessageCircleQuestion, ShieldAlert, Monitor,
  MapPin, Crown, FileCheck, Flame, Snowflake, ThermometerSun,
  Repeat, Fan, AlertTriangle, DollarSign, Clock, Phone,
  CheckCircle, ChevronRight, Users, Wrench, Shield, Zap,
  Calendar, Star, Heart, Award, BookOpen, Target,
  TrendingUp, Headphones, Settings, ClipboardList
} from "lucide-react";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const WARM = "hsl(25, 100%, 60%)";
const GREEN = "hsl(145, 60%, 45%)";
const BLUE = "hsl(200, 80%, 55%)";

export interface KBArticle {
  title: string;
  keywords: string;
  content: React.ReactNode;
}

export interface KBSectionData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  articles: KBArticle[];
}

export const kbSections: KBSectionData[] = [
  {
    id: "hvac-101",
    title: "HVAC Systems 101",
    description: "System types, how they work, symptoms & troubleshooting questions",
    icon: Thermometer,
    iconColor: ORANGE,
    articles: [
      {
        title: "Boilers — How They Work",
        keywords: "boiler steam hot water radiator baseboard heating",
        content: (
          <div className="space-y-3">
            <p>Boilers heat water and distribute it through pipes to radiators or baseboard heaters. Two main types:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Flame className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: RED }} />
                <div><strong>Steam Boilers</strong> — Heats water to steam, rises through pipes to radiators. Older homes, one-pipe or two-pipe systems.</div>
              </div>
              <div className="flex items-start gap-2">
                <Flame className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                <div><strong>Hot Water Boilers</strong> — Circulates hot water through baseboard heaters or radiant floor systems. More efficient than steam.</div>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• No heat — check thermostat, pilot light, pressure gauge</li>
                <li>• Banging/clanking — air in pipes, faulty circulator pump</li>
                <li>• Leaking — pressure relief valve, corrosion, cracked heat exchanger</li>
                <li>• Radiators cold on one side — needs bleeding</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">📋 Key Questions to Ask:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "Do you have radiators or baseboard heaters?"</li>
                <li>• "Is it a steam or hot water system?"</li>
                <li>• "How old is the boiler?"</li>
                <li>• "Have you noticed any water around the unit?"</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Furnaces — How They Work",
        keywords: "furnace forced air gas electric blower duct heating",
        content: (
          <div className="space-y-3">
            <p>Furnaces heat air and blow it through ductwork using a blower fan. Most common heating system in the US.</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <ThermometerSun className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                <div><strong>Gas Furnaces</strong> — Use natural gas burners + heat exchanger. 80% (standard) or 90%+ (high-efficiency/condensing) AFUE ratings.</div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: WARM }} />
                <div><strong>Electric Furnaces</strong> — Use heating elements. More expensive to run but simpler, no combustion risk.</div>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• No heat — thermostat issue, pilot/igniter failure, tripped breaker</li>
                <li>• Blowing cold air — dirty filter, gas valve issue, flame sensor</li>
                <li>• Short cycling — overheating, dirty filter, thermostat placement</li>
                <li>• Strange smells — burning dust (normal at startup), gas leak (emergency!)</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ Safety Alert:</p>
              <p className="text-sm opacity-80">If customer reports rotten egg smell → tell them to leave immediately, call 911, then call us. Gas leak protocol.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Air Conditioners — How They Work",
        keywords: "air conditioner ac cooling central window refrigerant compressor",
        content: (
          <div className="space-y-3">
            <p>ACs remove heat from indoor air using a refrigerant cycle. The indoor evaporator coil absorbs heat, outdoor condenser releases it.</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Not cooling — low refrigerant, dirty coils, compressor failure</li>
                <li>• Ice on unit — low airflow (dirty filter), low refrigerant</li>
                <li>• Water leak inside — clogged drain line, frozen coil thawing</li>
                <li>• Loud noises — fan motor, loose parts, compressor issues</li>
                <li>• Runs constantly — undersized unit, refrigerant leak, dirty coils</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">📋 Key Questions to Ask:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "Is it a central system or window unit?"</li>
                <li>• "When did you last change the filter?"</li>
                <li>• "Is the outdoor unit running?"</li>
                <li>• "Do you see any ice forming on the unit?"</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Heat Pumps — How They Work",
        keywords: "heat pump dual heating cooling reverse refrigerant electric",
        content: (
          <div className="space-y-3">
            <p>Heat pumps transfer heat rather than generating it. They work like an AC in summer, then reverse the cycle to heat in winter. Very efficient.</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Not heating — defrost cycle issue, low refrigerant, reversing valve stuck</li>
                <li>• Blowing lukewarm air — normal for heat pumps (not as hot as furnace), check auxiliary heat</li>
                <li>• Constant defrost — faulty defrost board, sensor issue</li>
                <li>• High electric bills — auxiliary heat running too much</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 Good to Know:</p>
              <p className="text-sm opacity-80">Heat pump air feels cooler than furnace air (around 90°F vs 120°F). This is normal! Reassure customers that the system is working correctly.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Mini Splits — How They Work",
        keywords: "mini split ductless zone wall mount indoor outdoor",
        content: (
          <div className="space-y-3">
            <p>Ductless mini splits have individual wall-mounted indoor units connected to an outdoor condenser. Each unit controls one zone independently.</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Water dripping from unit — clogged drain, dirty filters</li>
                <li>• Blinking lights — error codes, needs diagnostic</li>
                <li>• Not responding to remote — dead batteries, unit in lock mode</li>
                <li>• Bad smell — mold in unit (needs deep cleaning)</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">📋 Key Questions:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "How many indoor units do you have?"</li>
                <li>• "Which unit is having the problem?"</li>
                <li>• "Are there any blinking lights or error codes on the display?"</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "System Age Thresholds",
        keywords: "system age old replacement repair threshold 12 years lifecycle",
        content: (
          <div className="space-y-3">
            <p>System age determines whether we book a <strong>repair</strong> or suggest a <strong>replacement estimate</strong>. This directly affects the ServiceTitan Job Type.</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
                <p className="font-bold text-lg mb-2" style={{ color: GREEN }}>Under 12 Years</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Book as <strong>Repair</strong></li>
                  <li>• System likely worth fixing</li>
                  <li>• Job type: "No Cool &lt;12" / "No Heat &lt;12"</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
                <p className="font-bold text-lg mb-2" style={{ color: ORANGE }}>Over 12 Years</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Book as <strong>Repair + Estimate</strong></li>
                  <li>• Tech should also quote replacement</li>
                  <li>• Job type: "No Cool &gt;12" / "No Heat &gt;12"</li>
                </ul>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-1">💡 Average System Lifespans:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Furnaces: 15–20 years</li>
                <li>• Air Conditioners: 15–20 years</li>
                <li>• Boilers: 20–30 years</li>
                <li>• Heat Pumps: 12–15 years</li>
                <li>• Mini Splits: 15–20 years</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "customer-faq",
    title: "Common Customer Questions",
    description: "Ready-to-use answers for the questions customers ask most",
    icon: MessageCircleQuestion,
    iconColor: BLUE,
    articles: [
      {
        title: "How often should I change my filter?",
        keywords: "filter replacement frequency change air filter dirty",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "We recommend every 1–3 months, depending on your filter type and household."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Filter Change Guidelines:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>1-inch filters:</strong> Every 1–2 months</li>
                <li>• <strong>4-inch filters:</strong> Every 3–6 months</li>
                <li>• <strong>5-inch media filters:</strong> Every 6–12 months</li>
                <li>• <strong>Pets in home?</strong> Change more frequently</li>
                <li>• <strong>Allergies?</strong> Consider upgrading to MERV 11+</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 Tip: This is a great time to mention our maintenance membership — members get filter reminders and discounts!</p>
          </div>
        ),
      },
      {
        title: "Why is my energy bill so high?",
        keywords: "bill high energy cost expensive electric gas utility",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "There are several reasons your bill might be higher than expected. Let's schedule a diagnostic so our tech can pinpoint the issue."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Common Causes of High Bills:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Dirty filters restricting airflow (system works harder)</li>
                <li>• Aging system losing efficiency</li>
                <li>• Refrigerant leak (AC runs constantly)</li>
                <li>• Ductwork leaks (losing conditioned air to attic/crawl)</li>
                <li>• Thermostat set too high/low for season</li>
                <li>• Heat pump auxiliary heat running excessively</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">🎯 <strong>Upsell opportunity:</strong> A tune-up ($299) can improve efficiency 10–15%. Membership includes regular tune-ups!</p>
          </div>
        ),
      },
      {
        title: "Should I repair or replace my system?",
        keywords: "repair replace decision factor cost age efficiency new system",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "That depends on a few factors. Our technician can evaluate your system and give you both options with transparent pricing."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">The "Replace" Indicators:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• System is 12+ years old</li>
                <li>• Repair cost exceeds 50% of replacement cost</li>
                <li>• Frequent breakdowns (3+ repairs in past 2 years)</li>
                <li>• R-22 refrigerant (discontinued, very expensive)</li>
                <li>• Energy bills consistently increasing</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 Remember: Replacement estimates are always FREE. Book a "Free Estimate" job type in ServiceTitan.</p>
          </div>
        ),
      },
      {
        title: "What brands do you service?",
        keywords: "brands service work on manufacturer carrier lennox trane",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "We service ALL brands and makes — Carrier, Lennox, Trane, Rheem, Goodman, York, Mitsubishi, Daikin, and more. Our technicians are trained on every major manufacturer."</p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">✅ Key Point:</p>
              <p className="text-sm opacity-80">We are not limited to any single brand. If it heats or cools, we can fix it.</p>
            </div>
          </div>
        ),
      },
      {
        title: "How long will the repair take?",
        keywords: "how long repair time duration hours visit appointment",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "Most diagnostic visits take about 1–2 hours. If parts are needed, our tech will let you know the timeline on-site."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Typical Timeframes:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Diagnostic:</strong> 60–90 minutes</li>
                <li>• <strong>Simple repair:</strong> 1–3 hours (same visit if parts on truck)</li>
                <li>• <strong>Complex repair:</strong> May need to order parts (1–3 business days)</li>
                <li>• <strong>System replacement:</strong> 1–2 full days</li>
                <li>• <strong>Tune-up:</strong> 45–75 minutes</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "What does a diagnostic visit include?",
        keywords: "diagnostic visit include what happens inspection check",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "Our licensed technician will perform a full system inspection, identify the problem, and provide you with repair options and transparent pricing — all for $199."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">A Diagnostic Includes:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Full system inspection and testing</li>
                <li>• Problem identification and diagnosis</li>
                <li>• Written repair options with upfront pricing</li>
                <li>• Safety check of all components</li>
                <li>• Efficiency evaluation</li>
                <li>• System age and condition assessment</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 The $199 diagnostic fee is waived if the customer proceeds with the repair.</p>
          </div>
        ),
      },
      {
        title: "Seasonal Prep Tips to Share",
        keywords: "seasonal tips winter summer spring fall prep prepare maintenance",
        content: (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
                <p className="font-semibold mb-2">🍂 Fall / Winter Prep:</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Schedule furnace/boiler tune-up</li>
                  <li>• Change filters</li>
                  <li>• Test heat before cold weather hits</li>
                  <li>• Check thermostat batteries</li>
                  <li>• Clear area around outdoor unit</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
                <p className="font-semibold mb-2">🌸 Spring / Summer Prep:</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Schedule AC tune-up</li>
                  <li>• Clean or replace filters</li>
                  <li>• Clear debris from outdoor condenser</li>
                  <li>• Check drain lines for clogs</li>
                  <li>• Test cooling before heatwave</li>
                </ul>
              </div>
            </div>
            <p className="text-sm opacity-70">🎯 Use this to pitch tune-ups and memberships: "Getting ahead of the season saves you from an emergency repair later!"</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "objection-handling",
    title: "Objection Handling & De-escalation",
    description: "Scripts and strategies for tough conversations",
    icon: ShieldAlert,
    iconColor: RED,
    articles: [
      {
        title: "\"That's too expensive\"",
        keywords: "price expensive cost too much objection rebuttal",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">🎯 Response Framework:</p>
              <div className="space-y-2 text-sm opacity-80">
                <p><strong>1. Acknowledge:</strong> "I completely understand — nobody wants an unexpected expense."</p>
                <p><strong>2. Reframe value:</strong> "The $199 diagnostic covers a full system inspection by a licensed technician, with upfront pricing before any work begins. There are never surprise charges."</p>
                <p><strong>3. Compare:</strong> "Many companies charge $89–$150 just to show up, then add diagnostic fees on top. Our $199 covers everything."</p>
                <p><strong>4. Incentivize:</strong> "And if you move forward with the repair, we apply the diagnostic fee as a credit."</p>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-1">🚫 Never say:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "That's just what we charge" (dismissive)</li>
                <li>• "We're actually cheap compared to..." (defensive)</li>
                <li>• "I can't do anything about the price" (unhelpful)</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "\"Someone else quoted me less\"",
        keywords: "competitor cheaper quote less comparison other company",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">🎯 Response:</p>
              <div className="space-y-2 text-sm opacity-80">
                <p>"I appreciate you shopping around — that's smart! Here's what sets us apart:"</p>
                <ul className="space-y-1">
                  <li>• ✅ 90-minute arrival guarantee</li>
                  <li>• ✅ Licensed, background-checked technicians</li>
                  <li>• ✅ No emergency surcharges — ever</li>
                  <li>• ✅ Upfront pricing before any work starts</li>
                  <li>• ✅ Satisfaction guarantee</li>
                </ul>
                <p>"Many lower quotes don't include the full diagnostic, or they add fees once they're at your home. We believe in transparency."</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Angry / Upset Customer De-escalation",
        keywords: "angry upset mad yelling escalation calm de-escalation frustrated",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">🛡️ The L.A.S.T. Method:</p>
              <div className="space-y-2 text-sm opacity-80">
                <p><strong>L — Listen:</strong> Let them vent. Don't interrupt. Take notes.</p>
                <p><strong>A — Acknowledge:</strong> "I completely understand your frustration, and I'm sorry you're dealing with this."</p>
                <p><strong>S — Solve:</strong> "Here's what I can do for you right now..." Offer a concrete next step.</p>
                <p><strong>T — Thank:</strong> "Thank you for letting us know. We want to make this right."</p>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Key Phrases:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "I hear you, and that's not the experience we want for you."</li>
                <li>• "Let me see what I can do to help."</li>
                <li>• "Your concern is valid, and I want to address it."</li>
                <li>• "I'm going to make sure this gets resolved."</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ If abusive or threatening → Escalate:</p>
              <p className="text-sm opacity-80">"I want to help, but I need to connect you with a manager who has more authority to resolve this. Please hold."</p>
            </div>
          </div>
        ),
      },
      {
        title: "When to Escalate to a Manager",
        keywords: "escalate manager supervisor when how transfer",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Escalate When:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Customer requests a manager by name</li>
                <li>• Refund request over $100</li>
                <li>• Threat of legal action or BBB complaint</li>
                <li>• Customer has called 3+ times about same issue</li>
                <li>• Safety complaint about a technician</li>
                <li>• Abusive or threatening language</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">✅ How to Transfer:</p>
              <p className="text-sm opacity-80">"I want to make sure this is handled properly. Let me connect you with [Manager Name] who can help resolve this. Can I place you on a brief hold?"</p>
            </div>
          </div>
        ),
      },
      {
        title: "Refund & Credit Request Handling",
        keywords: "refund credit money back request complaint",
        content: (
          <div className="space-y-3">
            <p><strong>You can offer:</strong></p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>• <strong>Apology + priority rebook</strong> — Always your first offer</li>
              <li>• <strong>Discount on next service</strong> — Up to 10% off next visit</li>
              <li>• <strong>Waive diagnostic fee</strong> — If related to a previous botched visit</li>
            </ul>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ Must Escalate for:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Any cash refund</li>
                <li>• Credit over $100</li>
                <li>• Warranty claim disputes</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Tone & Language Best Practices",
        keywords: "tone language professional empathy communication words",
        content: (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
                <p className="font-semibold mb-2">✅ Say This:</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• "Great question!"</li>
                  <li>• "I'd be happy to help"</li>
                  <li>• "Let me find out for you"</li>
                  <li>• "Here's what I recommend"</li>
                  <li>• "Absolutely"</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
                <p className="font-semibold mb-2">🚫 Avoid:</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• "That's not my department"</li>
                  <li>• "I don't know"</li>
                  <li>• "Calm down"</li>
                  <li>• "That's our policy"</li>
                  <li>• "You should have..."</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "servicetitan",
    title: "ServiceTitan & Tools Guide",
    description: "Step-by-step workflows for booking, dispatching, and tagging",
    icon: Monitor,
    iconColor: WARM,
    articles: [
      {
        title: "Booking a Job — Step by Step",
        keywords: "booking job create new appointment servicetitan schedule",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Booking Workflow:</p>
              <ol className="space-y-2 text-sm opacity-80 list-decimal list-inside">
                <li>Search for existing customer (by phone, name, or address)</li>
                <li>If new → Create customer record with all required fields</li>
                <li>Select <strong>Business Unit</strong> (HVAC Repair, HVAC Maintenance, etc.)</li>
                <li>Select <strong>Job Type</strong> (match to system age: &lt;12 or &gt;12 years)</li>
                <li>Add <strong>Job Summary</strong> — include system type, symptoms, customer notes</li>
                <li>Select <strong>time window</strong> (Morning, Afternoon, Evening, Emergency)</li>
                <li>Confirm with customer and read back details</li>
                <li>Add any <strong>tags</strong> (membership, priority, after-hours)</li>
              </ol>
            </div>
          </div>
        ),
      },
      {
        title: "Looking Up Customer History",
        keywords: "customer history lookup search previous visits past jobs",
        content: (
          <div className="space-y-3">
            <p>Always check customer history before booking. It helps you:</p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>• Know what system they have (don't ask again)</li>
              <li>• See previous repairs and recommendations</li>
              <li>• Check membership status</li>
              <li>• Identify repeat issues (escalation potential)</li>
            </ul>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">💡 Pro Tip:</p>
              <p className="text-sm opacity-80">If a tech previously recommended replacement and customer is calling about the same system — mention the previous recommendation and offer a free estimate.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Tagging & Categorizing Calls",
        keywords: "tags categorize label call type priority membership",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Required Tags:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Call Source:</strong> Google, Referral, Repeat Customer, etc.</li>
                <li>• <strong>Priority:</strong> Standard, Priority, Emergency</li>
                <li>• <strong>Membership:</strong> Yes/No + tier</li>
                <li>• <strong>After-Hours:</strong> If applicable</li>
                <li>• <strong>Commercial:</strong> If business customer</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Adding Notes & Follow-ups",
        keywords: "notes follow up follow-up reminder callback",
        content: (
          <div className="space-y-3">
            <p><strong>Every job should have clear notes</strong> so the tech knows what to expect:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Good Note Example:</p>
              <p className="text-sm opacity-80 italic">"Customer reports no cooling since yesterday. Central AC, ~8 years old. Filter changed 2 months ago. Outdoor unit is running but no cold air inside. Customer prefers morning appointment. Has dog — please call before arriving."</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">🚫 Bad Note Example:</p>
              <p className="text-sm opacity-80 italic">"AC broken"</p>
            </div>
          </div>
        ),
      },
      {
        title: "Using the Dispatch Board",
        keywords: "dispatch board schedule assign technician route",
        content: (
          <div className="space-y-3">
            <p>The dispatch board shows all scheduled jobs, available techs, and their routes. Key actions:</p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>• <strong>Assign tech</strong> based on specialization and proximity</li>
              <li>• <strong>Reassign</strong> if a job runs long or cancels</li>
              <li>• <strong>Check capacity</strong> before booking new jobs</li>
              <li>• <strong>Color coding:</strong> Red = Emergency, Yellow = Priority, Green = Standard</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Common Mistakes to Avoid",
        keywords: "mistakes errors avoid wrong common problems",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">🚫 Top Mistakes:</p>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>Wrong Business Unit:</strong> Booking HVAC repair under Plumbing (messes up reporting)</li>
                <li>• <strong>Missing system age:</strong> Can't determine correct job type (&lt;12 vs &gt;12)</li>
                <li>• <strong>No job summary:</strong> Tech arrives blind, wastes time</li>
                <li>• <strong>Double-booking a time slot:</strong> Always check tech availability first</li>
                <li>• <strong>Not checking customer history:</strong> Missing context = poor service</li>
                <li>• <strong>Forgetting to tag membership:</strong> Member doesn't get their discount</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "service-area",
    title: "Service Area & Logistics",
    description: "Coverage zones, drive times, and tech assignments",
    icon: MapPin,
    iconColor: GREEN,
    articles: [
      {
        title: "Nassau County Coverage",
        keywords: "nassau county zone primary coverage area towns",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-bold text-lg mb-2" style={{ color: GREEN }}>✅ Primary Zone — Full Coverage</p>
              <p className="text-sm opacity-80">All of Nassau County including: Hempstead, Garden City, Mineola, Manhasset, Great Neck, Roslyn, Oyster Bay, Massapequa, Levittown, Hicksville, Freeport, Long Beach, Valley Stream, and all surrounding areas.</p>
            </div>
            <p className="text-sm opacity-70">Average drive time: 20–40 minutes. 90-minute guarantee easily met.</p>
          </div>
        ),
      },
      {
        title: "Suffolk County Coverage",
        keywords: "suffolk county zone coverage area towns",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-bold text-lg mb-2" style={{ color: GREEN }}>✅ Primary Zone — Full Coverage</p>
              <p className="text-sm opacity-80">Western and Central Suffolk including: Huntington, Babylon, Islip, Smithtown, Brentwood, Bay Shore, Commack, Hauppauge, Deer Park, Lindenhurst, and surrounding areas.</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-bold mb-1" style={{ color: WARM }}>⚡ Extended Zone</p>
              <p className="text-sm opacity-80">Eastern Suffolk (Riverhead, Hamptons, Montauk) — case-by-case basis. Check with dispatch manager for availability.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Drive Time Expectations",
        keywords: "drive time travel distance how long arrival zone",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>Nassau County:</strong> 20–40 min average</li>
                <li>• <strong>Western Suffolk:</strong> 30–50 min average</li>
                <li>• <strong>Central Suffolk:</strong> 40–60 min average</li>
                <li>• <strong>Eastern Suffolk:</strong> 60–90+ min (limited availability)</li>
                <li>• <strong>Queens/Brooklyn:</strong> Case-by-case, traffic dependent</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 Always factor in traffic. LIE and Southern State can add 20+ minutes during rush hour.</p>
          </div>
        ),
      },
      {
        title: "Handling Out-of-Area Requests",
        keywords: "out of area outside zone cannot service too far",
        content: (
          <div className="space-y-3">
            <p><strong>Standard response:</strong> "Our primary service area covers Nassau and Suffolk County. Let me check if we can accommodate your location."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Queens/Brooklyn:</strong> Check with dispatch — we do some jobs there</li>
                <li>• <strong>Manhattan:</strong> Generally no, refer to NYC HVAC providers</li>
                <li>• <strong>Westchester/CT:</strong> No coverage</li>
                <li>• <strong>Eastern LI (past Riverhead):</strong> Seasonal/case-by-case</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Tech Assignments & Specializations",
        keywords: "technician specialization assign skills boiler commercial",
        content: (
          <div className="space-y-3">
            <p>Some jobs require specific tech skills. When booking, note the system type so dispatch can assign the right tech:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Boiler specialists</strong> — steam and hydronic systems</li>
                <li>• <strong>Commercial HVAC</strong> — RTUs, VRFs, large systems</li>
                <li>• <strong>Ductless/Mini-split</strong> — Mitsubishi, Daikin certified</li>
                <li>• <strong>Plumbing</strong> — separate team, don't cross-book</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Fully-Booked Day Procedures",
        keywords: "fully booked no availability full schedule waitlist overflow",
        content: (
          <div className="space-y-3">
            <p><strong>When all slots are full:</strong></p>
            <ol className="space-y-1 text-sm opacity-80 list-decimal list-inside">
              <li>Check if any jobs can be rescheduled (non-urgent)</li>
              <li>Offer next available date/time</li>
              <li>For emergencies → always find a slot (escalate to dispatch manager)</li>
              <li>Add to waitlist — if a cancellation opens up, call them back</li>
            </ol>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ Never tell an emergency caller "we're fully booked."</p>
              <p className="text-sm opacity-80">Emergencies (no heat below 40°F, gas leaks, active flooding) always get same-day service. Escalate to dispatch manager.</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "membership",
    title: "Membership & Upsell Program",
    description: "Plans, pricing, pitch triggers, and how to add in ServiceTitan",
    icon: Crown,
    iconColor: WARM,
    articles: [
      {
        title: "What the Membership Includes",
        keywords: "membership plan include benefits what covered tune-up discount",
        content: (
          <div className="space-y-3">
            <p><strong>Home+ Membership</strong> is our residential maintenance program. It keeps systems running efficiently and saves customers money.</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">All Plans Include:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Scheduled tune-ups (frequency varies by tier)</li>
                <li>• Priority scheduling — members jump the queue</li>
                <li>• Repair discounts (10–15% depending on tier)</li>
                <li>• No overtime or holiday surcharges</li>
                <li>• Filter change reminders</li>
                <li>• Transferable if they sell the home</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Membership Pricing & Tiers",
        keywords: "membership pricing tiers cost comfort infinite home business",
        content: (
          <div className="space-y-3">
            <div className="space-y-3">
              <div className="p-4 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
                <p className="font-bold text-lg mb-2" style={{ color: WARM }}>🏠 Residential — Home+</p>
                <div className="space-y-2 text-sm opacity-80">
                  <div className="flex justify-between"><span>Comfort — 2 tune-ups, 10% repair discount</span><strong>$299/yr</strong></div>
                  <div className="flex justify-between"><span>Infinite — 2 tune-ups, 15% disc, $1,500 repair credit</span><strong>$2,999/yr</strong></div>
                </div>
              </div>
              <div className="p-4 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
                <p className="font-bold text-lg mb-2" style={{ color: GREEN }}>🏢 Commercial — Business+</p>
                <div className="space-y-2 text-sm opacity-80">
                  <div className="flex justify-between"><span>Essential — Quarterly tune-ups</span><strong>$699/yr</strong></div>
                  <div className="flex justify-between"><span>Premier — Priority + discounts</span><strong>$1,499/yr</strong></div>
                  <div className="flex justify-between"><span>Enterprise — $3K repair credit</span><strong>$5,999/yr</strong></div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Benefits to Highlight on Calls",
        keywords: "benefits selling points pitch highlight membership value",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">🎯 Top Selling Points:</p>
              <ol className="space-y-2 text-sm opacity-80 list-decimal list-inside">
                <li><strong>"It pays for itself"</strong> — A single tune-up costs $299. The Comfort plan includes 2 tune-ups for $299/yr. That's 2-for-1.</li>
                <li><strong>"You skip the line"</strong> — Priority scheduling means you get seen first, especially during peak season.</li>
                <li><strong>"10% off every repair"</strong> — On a $500 repair, that's $50 saved. Most members save the membership cost within the first year.</li>
                <li><strong>"No surprise charges"</strong> — No overtime fees, no holiday surcharges. Ever.</li>
                <li><strong>"Peace of mind"</strong> — Regular maintenance catches problems before they become emergencies.</li>
              </ol>
            </div>
          </div>
        ),
      },
      {
        title: "When to Pitch Membership",
        keywords: "when pitch membership timing natural conversation upsell",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Natural Conversation Points:</p>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>After booking a tune-up:</strong> "By the way, we have a membership that includes 2 tune-ups per year for the same price as one. Want me to add that?"</li>
                <li>• <strong>After a repair booking:</strong> "Members save 10% on all repairs. If you sign up today, we can apply the discount to this visit."</li>
                <li>• <strong>When they mention high bills:</strong> "Our membership includes regular tune-ups that keep your system running efficiently — most members see lower energy bills."</li>
                <li>• <strong>When they ask about seasonal prep:</strong> "We actually have a plan that schedules those for you automatically."</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">🎯 Don't force it. If they say no, say "No problem at all! Just wanted to make sure you knew about it."</p>
          </div>
        ),
      },
      {
        title: "Upsell Triggers During Calls",
        keywords: "upsell trigger opportunity upgrade diagnostic repair estimate",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔔 Listen For These Triggers:</p>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>"My system is old"</strong> → Offer free replacement estimate</li>
                <li>• <strong>"My bills are high"</strong> → Suggest tune-up + membership</li>
                <li>• <strong>"It keeps breaking"</strong> → Mention replacement estimate + membership repair discount</li>
                <li>• <strong>"I haven't had it serviced in years"</strong> → Pitch tune-up + membership</li>
                <li>• <strong>"I'm worried about winter/summer"</strong> → Seasonal tune-up + membership</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "How to Add Membership in ServiceTitan",
        keywords: "add membership servicetitan how create enroll sign up",
        content: (
          <div className="space-y-3">
            <ol className="space-y-2 text-sm opacity-80 list-decimal list-inside">
              <li>Open the customer record in ServiceTitan</li>
              <li>Click "Memberships" tab</li>
              <li>Select "Add Membership"</li>
              <li>Choose the plan: Home+ Comfort ($299) or Home+ Infinite ($2,999)</li>
              <li>Confirm billing method (annual or monthly if available)</li>
              <li>Add the "Membership" tag to the customer</li>
              <li>Schedule the first tune-up</li>
            </ol>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">✅ Don't forget:</p>
              <p className="text-sm opacity-80">If they're booking a repair TODAY, apply the 10% member discount immediately.</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "policies",
    title: "Policies & Guarantees",
    description: "Guarantees, warranties, refund rules, and after-hours policies",
    icon: FileCheck,
    iconColor: "hsl(260, 60%, 60%)",
    articles: [
      {
        title: "90-Minute Arrival Guarantee",
        keywords: "90 minute arrival guarantee time window promise free",
        content: (
          <div className="space-y-3">
            <div className="p-4 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-bold text-lg mb-2" style={{ color: ORANGE }}>⏱️ Our Promise</p>
              <p className="text-sm opacity-80">"We arrive within 90 minutes of your scheduled window, or the service call is <strong>FREE</strong>."</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Details:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Clock starts at the beginning of the selected time window</li>
                <li>• Applies to diagnostic fee / service call fee only</li>
                <li>• Does NOT waive repair or parts costs</li>
                <li>• Applies to all service types (repair, maintenance, diagnostic)</li>
                <li>• Weather and natural disaster exceptions apply</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Satisfaction Guarantee",
        keywords: "satisfaction guarantee happy redo fix right promise",
        content: (
          <div className="space-y-3">
            <p><strong>"If you're not satisfied with our work, we'll come back and make it right — free of charge."</strong></p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Applies to workmanship, not pre-existing conditions</li>
                <li>• Customer must report issue within 30 days of service</li>
                <li>• We send the same tech when possible for continuity</li>
                <li>• If unresolvable, escalate to Operations Manager for resolution</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Warranty Coverage by Service Type",
        keywords: "warranty coverage parts labor how long duration",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>Repairs:</strong> 1-year warranty on parts and labor</li>
                <li>• <strong>New installations:</strong> Manufacturer warranty (5–10 years) + 1-year labor warranty</li>
                <li>• <strong>Tune-ups:</strong> No warranty (preventive service)</li>
                <li>• <strong>Plumbing repairs:</strong> 1-year warranty on parts and labor</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 If a customer calls about a recent repair failing — check the job date. If within warranty, book as a warranty callback (no charge to customer).</p>
          </div>
        ),
      },
      {
        title: "Refund & Credit Policies",
        keywords: "refund credit policy money back return cancel",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Diagnostic fee:</strong> Non-refundable (service was rendered)</li>
                <li>• <strong>Diagnostic fee waived:</strong> If customer proceeds with repair</li>
                <li>• <strong>Repair warranty:</strong> Free redo within warranty period</li>
                <li>• <strong>Cash refunds:</strong> Manager approval required</li>
                <li>• <strong>Membership cancellation:</strong> Pro-rated refund if no services used</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Cancellation & Rescheduling Rules",
        keywords: "cancel reschedule change appointment move time",
        content: (
          <div className="space-y-3">
            <ul className="space-y-1 text-sm opacity-80">
              <li>• <strong>No cancellation fees</strong> — we never charge for canceling</li>
              <li>• <strong>Same-day reschedule:</strong> Accommodate if possible, otherwise next available</li>
              <li>• <strong>No-show:</strong> We attempt to call. If unreachable, cancel and note the account</li>
              <li>• <strong>Repeat no-shows (3+):</strong> Flag account, require confirmation call before future bookings</li>
            </ul>
          </div>
        ),
      },
      {
        title: "After-Hours & Holiday Policies",
        keywords: "after hours holiday weekend evening night overtime surcharge",
        content: (
          <div className="space-y-3">
            <div className="p-4 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-bold text-lg mb-2" style={{ color: GREEN }}>✅ No Emergency Surcharge — Ever</p>
              <p className="text-sm opacity-80">We do NOT charge extra for after-hours, weekends, or holidays. Same prices, same technicians, same guarantees.</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">After-Hours Procedures:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• After-hours calls go to the on-call dispatcher</li>
                <li>• Emergency calls get same-day dispatch</li>
                <li>• Non-emergency after-hours → book for next available morning slot</li>
                <li>• Tag all after-hours calls with "After-Hours" in ServiceTitan</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "No Emergency Surcharge Policy",
        keywords: "no surcharge emergency extra charge fee overtime",
        content: (
          <div className="space-y-3">
            <p>This is one of our <strong>biggest competitive advantages</strong>. Many competitors charge $150–$300 extra for emergency or after-hours visits.</p>
            <div className="p-4 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-bold mb-2" style={{ color: GREEN }}>What to tell customers:</p>
              <p className="text-sm opacity-80">"We never charge emergency surcharges or overtime fees. Whether it's 2 PM on a Tuesday or 2 AM on Christmas, you pay the same rate. That's our promise."</p>
            </div>
            <p className="text-sm opacity-70">🎯 This is a GREAT closer when customers are price-shopping or hesitant. Lead with this.</p>
          </div>
        ),
      },
    ],
  },
];
