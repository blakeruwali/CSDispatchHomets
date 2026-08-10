import React from "react";
import {
  Thermometer, MessageCircleQuestion, ShieldAlert, Monitor,
  MapPin, Crown, FileCheck, Flame, Snowflake, ThermometerSun,
  Repeat, Fan, AlertTriangle, DollarSign, Clock, Phone,
  CheckCircle, ChevronRight, Users, Wrench, Shield, Zap,
  Calendar, Star, Heart, Award, BookOpen, Target,
  TrendingUp, Headphones, Settings, ClipboardList,
  Droplets, Wind, Building, Gauge, ShowerHead, PipetteIcon,
  Leaf, ThermometerSnowflake, CircuitBoard
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
    id: "thermostats",
    title: "Thermostats & Controls",
    description: "Types, troubleshooting, smart thermostat guidance",
    icon: Gauge,
    iconColor: BLUE,
    articles: [
      {
        title: "Thermostat Types Explained",
        keywords: "thermostat types smart programmable manual digital nest ecobee honeywell",
        content: (
          <div className="space-y-3">
            <p>Customers often don't know what thermostat they have. Here's a quick ID guide:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Settings className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ORANGE }} />
                <div><strong>Manual/Dial</strong> — Older homes, simple on/off. No programming capability.</div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: WARM }} />
                <div><strong>Programmable</strong> — Set schedules (wake, leave, return, sleep). Honeywell, Emerson common brands.</div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: GREEN }} />
                <div><strong>Smart</strong> — Wi-Fi connected, learns habits, remote control via app. Nest, Ecobee, Honeywell T-series.</div>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">📋 Key Question:</p>
              <p className="text-sm opacity-80">"Does your thermostat have a screen? Can you control it from your phone?" — This tells you the type instantly.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Thermostat Troubleshooting",
        keywords: "thermostat blank screen not working batteries wiring no display",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Issues:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Blank screen</strong> — Dead batteries (most common!), tripped breaker, blown fuse</li>
                <li>• <strong>Not reaching set temp</strong> — Dirty filter, wrong fan setting, system undersized</li>
                <li>• <strong>Short cycling</strong> — Thermostat placed near heat source (lamp, oven, window)</li>
                <li>• <strong>Won't switch modes</strong> — Stuck in heat/cool, wiring issue, needs reset</li>
                <li>• <strong>"Wait" or "Delay" on display</strong> — Normal compressor protection (5-min delay)</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 Quick Fix to Suggest:</p>
              <p className="text-sm opacity-80">"Try replacing the batteries first — that solves about 40% of thermostat issues. If it's still not working after that, we'll send a tech out."</p>
            </div>
          </div>
        ),
      },
      {
        title: "Smart Thermostat Compatibility",
        keywords: "smart thermostat compatible install nest ecobee C-wire",
        content: (
          <div className="space-y-3">
            <p>When customers ask about smart thermostat installation:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Compatibility Checklist:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>C-wire required</strong> — Most smart thermostats need a "common" wire for power. Older homes may not have one.</li>
                <li>• <strong>System type matters</strong> — Heat pumps need specific thermostat models with auxiliary heat support</li>
                <li>• <strong>Multi-zone systems</strong> — May need one thermostat per zone</li>
                <li>• <strong>High-voltage systems</strong> — Baseboard heaters use line-voltage, NOT compatible with most smart thermostats</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">🎯 <strong>Upsell:</strong> "We can install a smart thermostat during a tune-up visit for maximum convenience. Want me to add that to the appointment?"</p>
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
            <p className="text-sm opacity-70">💡 Most homeowners choose our Home+ Membership — it waives the diagnostic entirely and includes priority scheduling, annual maintenance, and 10% off repairs.</p>
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
      {
        title: "Do you offer payment plans?",
        keywords: "payment plan finance monthly installment credit afford",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "Yes! We offer flexible financing options for larger repairs and new installations. Our comfort advisor can go over all the details during your visit."</p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">✅ Key Points:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Financing available for installations and major repairs</li>
                <li>• Quick approval process</li>
                <li>• Don't quote specific rates on the phone — advisor presents options in person</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Is the estimate really free?",
        keywords: "free estimate really cost charge hidden replacement",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "Absolutely — our replacement estimates are 100% free with zero obligation. A comfort advisor visits your home, evaluates your system, and presents options. If you decide not to move forward, there's no charge."</p>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">💡 Clarification:</p>
              <p className="text-sm opacity-80">The FREE estimate applies to <strong>replacement/installation</strong> only. Diagnostic visits for repairs are $199 — that covers the visit, complete safety inspection, and a clear repair estimate. Most homeowners choose Home+ Membership to waive the diagnostic entirely.</p>
            </div>
          </div>
        ),
      },
      {
        title: "What's the difference between a tune-up and a diagnostic?",
        keywords: "tune-up diagnostic difference maintenance repair inspection",
        content: (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
                <p className="font-semibold mb-2" style={{ color: GREEN }}>Tune-Up ($299)</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Preventive maintenance</li>
                  <li>• System is currently working</li>
                  <li>• Cleaning, adjustments, safety check</li>
                  <li>• Improves efficiency</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
                <p className="font-semibold mb-2" style={{ color: ORANGE }}>Diagnostic ($199)</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Something is wrong/broken</li>
                  <li>• Find the problem</li>
                  <li>• Present repair options</li>
                  <li>• Fee waived if they repair</li>
                </ul>
              </div>
            </div>
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
                <p><strong>2. Present value (one sentence):</strong> "It's $199 for the full diagnostic — that covers the visit, complete safety inspection, and a clear repair estimate before we do anything."</p>
                <p><strong>3. Pivot to membership (social proof):</strong> "Most homeowners choose to enroll in our Home+ Membership instead. That waives the diagnostic entirely, gives you priority scheduling, annual maintenance, and 10% off repairs."</p>
                <p><strong>4. Compare:</strong> "Many companies charge $89–$150 just to show up, then add diagnostic fees on top. Our $199 covers everything."</p>
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
  {
    id: "plumbing",
    title: "Plumbing Services",
    description: "Plumbing job types, common issues, and booking guidance",
    icon: Droplets,
    iconColor: BLUE,
    articles: [
      {
        title: "Plumbing Services We Offer",
        keywords: "plumbing services offer water heater drain pipe leak faucet",
        content: (
          <div className="space-y-3">
            <p>We offer full residential and commercial plumbing services. Key categories:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Water heater</strong> — repair, replacement, tankless installation</li>
                <li>• <strong>Drain cleaning</strong> — clogs, slow drains, sewer line issues</li>
                <li>• <strong>Leak repair</strong> — faucets, pipes, toilets, under-slab</li>
                <li>• <strong>Fixture installation</strong> — sinks, faucets, toilets, showers</li>
                <li>• <strong>Sewer & main line</strong> — camera inspection, repair, replacement</li>
                <li>• <strong>Gas line</strong> — installation, leak detection, repair</li>
                <li>• <strong>Sump pump</strong> — install, repair, battery backup</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ Important:</p>
              <p className="text-sm opacity-80">Plumbing jobs use separate Business Units in ServiceTitan (Plumbing Install or Plumbing Service). Never book under HVAC.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Water Heater Troubleshooting",
        keywords: "water heater hot water no hot lukewarm tank tankless",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>No hot water</strong> — pilot light out (gas), breaker tripped (electric), thermostat failure</li>
                <li>• <strong>Lukewarm only</strong> — broken dip tube, undersized unit, sediment buildup</li>
                <li>• <strong>Water too hot</strong> — thermostat set too high (should be 120°F)</li>
                <li>• <strong>Leaking from tank</strong> — pressure relief valve, corrosion, tank failure</li>
                <li>• <strong>Rumbling/popping</strong> — sediment buildup, needs flushing</li>
                <li>• <strong>Rusty water</strong> — anode rod depleted or tank corroding internally</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">📋 Key Questions:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "Is it a tank or tankless water heater?"</li>
                <li>• "Gas or electric?"</li>
                <li>• "How old is it?" (tanks last 8–12 years)</li>
                <li>• "Is there water pooling around the base?"</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Drain & Sewer Issues",
        keywords: "drain clog slow backed up sewer smell gurgling toilet",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔍 Common Symptoms:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Single slow drain</strong> — localized clog (hair, grease, debris)</li>
                <li>• <strong>Multiple slow drains</strong> — main sewer line issue</li>
                <li>• <strong>Gurgling sounds</strong> — venting problem or partial blockage</li>
                <li>• <strong>Sewage smell</strong> — dry P-trap, cracked sewer line, vent issue</li>
                <li>• <strong>Water backing up</strong> — serious blockage, may need camera inspection</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ Emergency Indicators:</p>
              <p className="text-sm opacity-80">Sewage backing up into home, water coming up through floor drains, or multiple fixtures backing up simultaneously = dispatch ASAP.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Plumbing Pricing Quick Reference",
        keywords: "plumbing price cost fee inspection diagnostic water heater",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>Plumbing Diagnostic:</strong> $199</li>
                <li>• <strong>Drain Cleaning:</strong> Starts at $199</li>
                <li>• <strong>Camera Inspection:</strong> $299</li>
                <li>• <strong>Water Heater Flush:</strong> $199</li>
                <li>• <strong>Plumbing Labor:</strong> $219/hr</li>
                <li>• <strong>Estimates for replacement:</strong> Always FREE</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 Same 90-minute guarantee and no emergency surcharge applies to plumbing calls.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "iaq",
    title: "Indoor Air Quality",
    description: "Air quality products, symptoms, and upsell opportunities",
    icon: Wind,
    iconColor: "hsl(180, 60%, 50%)",
    articles: [
      {
        title: "IAQ Products We Offer",
        keywords: "air quality products purifier humidifier UV filter HEPA",
        content: (
          <div className="space-y-3">
            <p>Indoor Air Quality (IAQ) is a growing category. Products include:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Air Purifiers</strong> — Whole-home units installed in ductwork (HEPA, UV, ionizers)</li>
                <li>• <strong>UV Germicidal Lights</strong> — Kill mold/bacteria in the air handler</li>
                <li>• <strong>Humidifiers</strong> — Whole-home units, prevent dry air in winter</li>
                <li>• <strong>Dehumidifiers</strong> — Whole-home, prevent mold/mildew in summer</li>
                <li>• <strong>HEPA Filtration</strong> — Hospital-grade air filtering</li>
                <li>• <strong>Duct Cleaning</strong> — Remove dust, allergens, debris from ductwork</li>
                <li>• <strong>ERV/HRV</strong> — Energy recovery ventilators for fresh air exchange</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "When to Suggest IAQ Solutions",
        keywords: "suggest IAQ allergy asthma dust mold smell air quality upsell",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">🔔 Listen for These Triggers:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>"We have allergies"</strong> → Air purifier or HEPA filter upgrade</li>
                <li>• <strong>"The air feels dry"</strong> → Whole-home humidifier</li>
                <li>• <strong>"There's a musty smell"</strong> → UV light, duct cleaning, dehumidifier</li>
                <li>• <strong>"Lots of dust in the house"</strong> → Duct cleaning + better filtration</li>
                <li>• <strong>"Someone in the home has asthma"</strong> → HEPA filtration + UV purifier</li>
                <li>• <strong>"We just had mold remediation"</strong> → UV light to prevent recurrence</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">🎯 IAQ products are high-margin add-ons. Mention them naturally during tune-up and repair bookings.</p>
          </div>
        ),
      },
      {
        title: "Duct Cleaning — What to Tell Customers",
        keywords: "duct cleaning dusty air vents dirty how long cost",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "We recommend duct cleaning every 3–5 years, or sooner if you notice excessive dust, musty odors, or have had renovations."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Signs Ducts Need Cleaning:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Visible dust blowing from vents</li>
                <li>• Musty or stale smell when system runs</li>
                <li>• Recent home renovation (drywall dust, paint)</li>
                <li>• Pest infestation (droppings in ducts)</li>
                <li>• Increased allergy symptoms indoors</li>
                <li>• Uneven airflow between rooms</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 Combo Upsell:</p>
              <p className="text-sm opacity-80">"Many customers pair duct cleaning with a UV light installation — it keeps the ducts cleaner longer and kills airborne bacteria."</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial HVAC",
    description: "Commercial-specific systems, pricing, and booking procedures",
    icon: Building,
    iconColor: "hsl(260, 60%, 60%)",
    articles: [
      {
        title: "Commercial vs Residential — Key Differences",
        keywords: "commercial residential difference business office store",
        content: (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
                <p className="font-bold mb-2" style={{ color: GREEN }}>Residential</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Diagnostic: $199</li>
                  <li>• Labor: $219/hr</li>
                  <li>• Single-family homes</li>
                  <li>• Standard systems</li>
                  <li>• Homeowner decisions</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
                <p className="font-bold mb-2" style={{ color: ORANGE }}>Commercial</p>
                <ul className="space-y-1 text-sm opacity-80">
                  <li>• Standard: $269</li>
                  <li>• Complex: $499</li>
                  <li>• Labor: $269/hr</li>
                  <li>• RTUs, VRFs, chillers</li>
                  <li>• Property managers/owners</li>
                </ul>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">⚠️ Always ask:</p>
              <p className="text-sm opacity-80">"Is this for a home or a business?" — It changes pricing, business unit, and tech assignment.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Commercial System Types",
        keywords: "commercial RTU rooftop VRF chiller packaged unit AHU",
        content: (
          <div className="space-y-3">
            <p>Commercial systems are more complex. Common types you'll hear about:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <ul className="space-y-2 text-sm opacity-80">
                <li>• <strong>RTU (Rooftop Unit)</strong> — All-in-one heating/cooling on the roof. Most common for retail, restaurants, small offices.</li>
                <li>• <strong>VRF (Variable Refrigerant Flow)</strong> — Multi-zone system with individual control. Office buildings, hotels.</li>
                <li>• <strong>Split Systems</strong> — Same concept as residential but larger capacity.</li>
                <li>• <strong>Chiller Systems</strong> — Large buildings, uses chilled water. We service some, not all.</li>
                <li>• <strong>AHU (Air Handling Unit)</strong> — Distributes conditioned air through large ductwork.</li>
                <li>• <strong>Make-Up Air Units</strong> — Restaurants, kitchens — brings in fresh air to replace exhausted air.</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">💡 You don't need to know the system type to book — just note what the customer describes and the tech will identify it on-site.</p>
          </div>
        ),
      },
      {
        title: "Booking Commercial Jobs",
        keywords: "commercial booking job business property manager contact",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Additional Info to Collect:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Business name</strong> and type (restaurant, office, retail, etc.)</li>
                <li>• <strong>Contact person</strong> — who will meet the tech on-site?</li>
                <li>• <strong>Property manager</strong> — are they the decision maker or a tenant?</li>
                <li>• <strong>Access info</strong> — roof access, keys, alarm codes, building hours</li>
                <li>• <strong>Number of units</strong> — commercial properties often have multiple systems</li>
                <li>• <strong>PO or authorization</strong> — some businesses require purchase orders</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-1">💡 Pro Tip:</p>
              <p className="text-sm opacity-80">Commercial customers are often repeat/high-value. Always pitch the Business+ membership. A single commercial repair can easily exceed $1,000.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Commercial Emergency Priorities",
        keywords: "commercial emergency restaurant walk-in cooler server room data center",
        content: (
          <div className="space-y-3">
            <p>Commercial emergencies can mean revenue loss for the business. Treat with urgency:</p>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">🚨 High-Priority Commercial:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Restaurant with no AC/heat</strong> — Health code risk, may need to close</li>
                <li>• <strong>Server room/data center overheating</strong> — Equipment damage risk</li>
                <li>• <strong>Medical office</strong> — Patient comfort, medication storage</li>
                <li>• <strong>Retail during business hours</strong> — Customer experience, employee safety</li>
                <li>• <strong>Walk-in cooler/freezer failure</strong> — Food spoilage risk (refer to refrigeration if needed)</li>
              </ul>
            </div>
            <p className="text-sm opacity-70">🎯 For commercial emergencies, always escalate to dispatch manager for fastest tech assignment.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "new-installs",
    title: "New Installation & Replacement",
    description: "Replacement guidance, financing, and estimate booking",
    icon: Wrench,
    iconColor: ORANGE,
    articles: [
      {
        title: "When to Book a Free Estimate",
        keywords: "free estimate replacement new system install when book",
        content: (
          <div className="space-y-3">
            <div className="p-4 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-bold text-lg mb-2" style={{ color: GREEN }}>💰 Replacement Estimates Are Always FREE</p>
              <p className="text-sm opacity-80">No diagnostic fee. A comfort advisor visits, evaluates the home, and presents options with pricing. Zero obligation.</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Book a Free Estimate When:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• System is 12+ years old and customer mentions replacement</li>
                <li>• Tech previously recommended replacement</li>
                <li>• Customer says "I just want a new system"</li>
                <li>• Repair cost would exceed 50% of replacement cost</li>
                <li>• Customer is renovating or adding to their home</li>
                <li>• Customer mentions wanting better efficiency or lower bills</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Financing Options",
        keywords: "financing payment plan monthly credit approval 0% interest",
        content: (
          <div className="space-y-3">
            <p><strong>Standard answer:</strong> "We offer flexible financing options so you don't have to pay everything upfront. Our comfort advisor will go over all the options during the estimate."</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">What to Tell Customers:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Financing available through approved partners</li>
                <li>• Quick approval process (often same-day)</li>
                <li>• Low monthly payments available</li>
                <li>• No prepayment penalties</li>
                <li>• The comfort advisor handles all financing paperwork on-site</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-1">💡 Don't Quote Specifics:</p>
              <p className="text-sm opacity-80">Never quote specific interest rates or monthly amounts over the phone. Financing details are presented in person during the estimate visit.</p>
            </div>
          </div>
        ),
      },
      {
        title: "What Happens During an Estimate Visit",
        keywords: "estimate visit what happens process comfort advisor how long",
        content: (
          <div className="space-y-3">
            <p>Help customers know what to expect:</p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 The Process:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal list-inside">
                <li>Comfort advisor arrives and inspects current system</li>
                <li>Evaluates home (square footage, insulation, ductwork)</li>
                <li>Discusses customer preferences (efficiency, budget, features)</li>
                <li>Presents 2–3 system options with transparent pricing</li>
                <li>Reviews financing options if needed</li>
                <li>If approved, installation can often be scheduled within days</li>
              </ol>
            </div>
            <p className="text-sm opacity-70">⏱️ Typical estimate visit: 60–90 minutes. Customer should have all decision-makers present.</p>
          </div>
        ),
      },
      {
        title: "Installation Timeline & What to Expect",
        keywords: "installation timeline how long days schedule what expect",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">Typical Timelines:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Standard AC or furnace:</strong> 1 day</li>
                <li>• <strong>AC + furnace combo:</strong> 1–2 days</li>
                <li>• <strong>Boiler replacement:</strong> 1–2 days</li>
                <li>• <strong>Mini split (single zone):</strong> 1 day</li>
                <li>• <strong>Multi-zone mini split:</strong> 2–3 days</li>
                <li>• <strong>Full ductwork + system:</strong> 3–5 days</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">✅ Reassure Customers:</p>
              <p className="text-sm opacity-80">"Our install team cleans up after every job. We treat your home like our own — booties, drop cloths, and a final walkthrough to make sure you're happy."</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "phone-scripts",
    title: "Phone Scripts & Call Protocols",
    description: "Verbatim scripts for greetings, closings, voicemails, holds, transfers & special situations",
    icon: Phone,
    iconColor: GREEN,
    articles: [
      {
        title: "Opening Greeting Script",
        keywords: "greeting answer call opening hello welcome script phone",
        content: (
          <div className="space-y-3">
            <p><strong>Standard greeting — use every time:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="text-sm italic">"Thank you for calling [Company Name], this is [Your Name]. How can I help you today?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🎯 Tone & Pacing Notes:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Smile while speaking</strong> — customers can hear it in your voice</li>
                <li>• Speak at a moderate pace — not rushed, not slow</li>
                <li>• Emphasize "How can I help you" — shows eagerness to assist</li>
                <li>• Wait for the customer to finish before responding</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">📋 Returning Customer Variation:</p>
              <p className="text-sm opacity-80 italic">"Thank you for calling [Company Name], this is [Your Name]. I see you're an existing customer — welcome back! How can I help you today?"</p>
              <p className="text-sm opacity-70 mt-1">Use when caller ID matches a customer record in ServiceTitan.</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-1">⚠️ Never Say:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "Yeah?" or "Hello?" — always use the full script</li>
                <li>• "What do you need?" — sounds dismissive</li>
                <li>• Company name only with no greeting — feels robotic</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Call Closing & Confirmation Script",
        keywords: "closing confirm appointment recap summary end call goodbye",
        content: (
          <div className="space-y-3">
            <p><strong>Always recap before ending the call:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">✅ Closing Script Template:</p>
              <div className="text-sm opacity-80 space-y-1 italic">
                <p>"Great, let me confirm everything for you:"</p>
                <p>"We have you scheduled for [Job Type] on [Date] between [Time Window]."</p>
                <p>"Our technician will arrive at [Service Address]."</p>
                <p>"The diagnostic is $199 for residential, and it's credited toward the repair if you approve it today."</p>
                <p>"You'll receive a text with your tech's photo and ETA on the day of service."</p>
                <p>"Is there anything else I can help you with today?"</p>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Confirmation Checklist:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• ✅ Appointment date and time window confirmed</li>
                <li>• ✅ Service address verified</li>
                <li>• ✅ Job type / issue described</li>
                <li>• ✅ Pricing expectations set (dispatch fee, estimates)</li>
                <li>• ✅ Tech arrival process explained</li>
                <li>• ✅ Customer phone number confirmed for day-of texts</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">💡 Final Sign-Off:</p>
              <p className="text-sm opacity-80 italic">"Thank you for choosing [Company Name], [Customer Name]. We look forward to helping you. Have a great [day/evening]!"</p>
            </div>
          </div>
        ),
      },
      {
        title: "Voicemail Scripts",
        keywords: "voicemail message leave recording missed call after hours",
        content: (
          <div className="space-y-3">
            <p>Use these word-for-word when leaving voicemails:</p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">📞 Missed Customer Call:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company]. I'm returning your call about [issue if known]. I'd love to help you get that taken care of. You can reach us back at [phone number] — we're available [hours]. Thanks and talk soon!"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">📅 Appointment Confirmation:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company] confirming your appointment for [Date] between [Time Window]. If you need to reschedule, give us a call at [phone number]. We look forward to seeing you!"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-2">😟 Follow-Up After No-Show:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company]. We had you on the schedule today but it looks like we may have missed you. No worries — give us a call at [phone number] and we'll get you rescheduled at a time that works. Thanks!"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🌙 After-Hours Greeting (auto-attendant):</p>
              <p className="text-sm opacity-80 italic">"Thank you for calling [Company]. Our office is currently closed. Our regular hours are [hours]. If this is a heating or cooling emergency, please press 1 to reach our on-call technician. Otherwise, leave a message and we'll return your call the next business day. Thank you!"</p>
            </div>
          </div>
        ),
      },
      {
        title: "Hold & Transfer Protocols",
        keywords: "hold transfer wait manager escalation warm cold transfer",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">⏸️ Placing on Hold:</p>
              <div className="text-sm opacity-80 space-y-1">
                <p><strong>Ask permission:</strong> <span className="italic">"May I place you on a brief hold while I look into that?"</span></p>
                <p><strong>Wait for "yes"</strong> before pressing hold.</p>
                <p><strong>Max hold time:</strong> 90 seconds</p>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔄 Check-Back Etiquette:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• After 60 seconds: <span className="italic">"Thank you for holding, I'm still looking into this for you."</span></li>
                <li>• After 90 seconds: <span className="italic">"I appreciate your patience. Would you prefer to continue holding or would you like a callback?"</span></li>
                <li>• <strong>Never leave a customer on hold without checking back</strong></li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">🔀 Transfer Types:</p>
              <div className="space-y-2 text-sm opacity-80">
                <div><strong>Warm Transfer (preferred):</strong> Brief the receiving person first, then introduce: <span className="italic">"[Name], I have [Customer] on the line who needs help with [issue]."</span></div>
                <div><strong>Cold Transfer (last resort):</strong> Only if warm transfer unavailable. Tell customer: <span className="italic">"I'm going to transfer you to [Department/Person]. If you get disconnected, their direct number is [number]."</span></div>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">⬆️ Manager Escalation:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Customer asks for manager → <span className="italic">"Absolutely, let me get my manager for you."</span></li>
                <li>• <strong>Never argue</strong> or try to convince them otherwise</li>
                <li>• Brief the manager on the situation before connecting</li>
                <li>• If manager unavailable: <span className="italic">"My manager is currently assisting another customer. Can I have them call you back within 30 minutes?"</span></li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Non-English Caller Handling",
        keywords: "spanish language interpreter translation non-english bilingual",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">🌐 Step-by-Step Protocol:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li>Identify the language (ask: <span className="italic">"What language do you speak?" / "¿Qué idioma habla?"</span>)</li>
                <li>Say: <span className="italic">"Please hold one moment, I'll connect an interpreter."</span></li>
                <li>Call the language line / interpreter service (see internal directory)</li>
                <li>Conference the interpreter into the call</li>
                <li>Book the appointment normally — interpreter stays on the line</li>
                <li>Add a note in ServiceTitan: "Customer speaks [Language] — interpreter needed for future calls"</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-2">🇪🇸 Key Spanish Phrases for HVAC Emergencies:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>"No tiene calefacción?"</strong> — No heat?</li>
                <li>• <strong>"No tiene aire acondicionado?"</strong> — No AC?</li>
                <li>• <strong>"¿Huele a gas?"</strong> — Do you smell gas?</li>
                <li>• <strong>"Salga de la casa ahora"</strong> — Leave the house now</li>
                <li>• <strong>"Vamos a enviar un técnico"</strong> — We'll send a technician</li>
                <li>• <strong>"¿Cuál es su dirección?"</strong> — What is your address?</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 Tips:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Speak slowly and clearly — even if a translator is on the line</li>
                <li>• Use simple sentences and avoid idioms or slang</li>
                <li>• Be patient — translated calls take 2–3x longer</li>
                <li>• Never ask a customer's child to translate</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "After-Hours & Overflow Call Handling",
        keywords: "after hours emergency on-call overnight weekend overflow pricing",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">🚨 After-Hours Emergency — Dispatch Now:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• No heat when below 40°F outside</li>
                <li>• Gas leak or CO detector alarm</li>
                <li>• Flooded basement from plumbing/HVAC</li>
                <li>• No AC when above 95°F with elderly/infants in home</li>
                <li>• Complete electrical failure related to HVAC</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-2">📅 Next-Day Scheduling (not emergency):</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• System running but not cooling/heating efficiently</li>
                <li>• Strange noises but system still functioning</li>
                <li>• Thermostat issues (not related to safety)</li>
                <li>• Maintenance or tune-up requests</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">💰 After-Hours Pricing:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>There is no after-hours fee.</strong> Same rate at every hour — no overtime, no weekend, no holiday surcharge</li>
                <li>• <strong>Lead with it:</strong> <span className="italic">"And there's no after-hours charge — you pay the same as you would on a Tuesday afternoon."</span></li>
                <li>• <strong>Everyone gets it</strong> — it is not a member benefit, so you never need to check anything first</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">📋 On-Call Tech Dispatch Rules:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Check the on-call schedule in ServiceTitan before dispatching</li>
                <li>• Text/call the on-call tech to confirm availability</li>
                <li>• Give customer a realistic ETA (usually 60–120 minutes after hours)</li>
                <li>• Log everything in ServiceTitan with "After-Hours" tag</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "post-service",
    title: "Post-Service & Customer Retention",
    description: "Follow-up scripts, review requests, referrals, retention & seasonal outreach",
    icon: Star,
    iconColor: WARM,
    articles: [
      {
        title: "Post-Service Follow-Up Script",
        keywords: "follow up callback after service satisfaction check quality",
        content: (
          <div className="space-y-3">
            <p><strong>Call within 24 hours of every completed job:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">📞 Follow-Up Script:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company]. I'm calling to make sure everything is working well after yesterday's visit. How's your [heating/cooling/plumbing] doing today?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">✅ If Satisfied:</p>
              <div className="text-sm opacity-80 space-y-1">
                <p className="italic">"That's wonderful to hear! We're so glad [Tech Name] was able to take care of that for you."</p>
                <p>→ Transition to Google review request (see next article)</p>
                <p>→ Mention referral program if appropriate</p>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">❌ If NOT Satisfied:</p>
              <div className="text-sm opacity-80 space-y-1">
                <p className="italic">"I'm sorry to hear that. Can you tell me more about what's going on?"</p>
                <p>→ Listen fully without interrupting</p>
                <p>→ Apologize sincerely: <span className="italic">"I apologize for the inconvenience."</span></p>
                <p>→ Offer a callback visit at no charge or escalate to manager</p>
                <p>→ Log the complaint in ServiceTitan</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Google Review Request Script",
        keywords: "google review rating stars feedback online reputation",
        content: (
          <div className="space-y-3">
            <p><strong>Timing:</strong> Ask immediately after the customer expresses satisfaction (during follow-up call or at end of service).</p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">⭐ Review Request Script:</p>
              <p className="text-sm opacity-80 italic">"I'm really glad we could help! If you have a moment, it would mean a lot to us if you could leave us a quick Google review. I can text you the link right now — it only takes about 30 seconds. Would that be okay?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📱 How to Send the Link:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Use the review link template in ServiceTitan automated messages</li>
                <li>• Or text manually: <span className="italic">"Here's the link to leave a review: [URL]. Thank you so much!"</span></li>
                <li>• Follow up via email if they prefer</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">🚫 What NOT to Say:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Never offer discounts or incentives for reviews (violates Google policy)</li>
                <li>• Don't say "5-star review" — just ask for honest feedback</li>
                <li>• Don't pressure — if they say no, say <span className="italic">"No problem at all!"</span></li>
                <li>• Never ask unhappy customers for reviews</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Referral Program Script",
        keywords: "referral program recommend friend family reward bonus",
        content: (
          <div className="space-y-3">
            <p><strong>Mention naturally after a positive interaction:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">🤝 Referral Script:</p>
              <p className="text-sm opacity-80 italic">"By the way, [Name], if you know anyone — friends, family, neighbors — who needs heating, cooling, or plumbing help, we have a referral program. You'll receive [reward amount/type] for every person you refer who books a service. It's our way of saying thank you!"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Program Details to Know:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Reward:</strong> [Configure per company — e.g., $50 credit, gift card]</li>
                <li>• <strong>How it works:</strong> Referred person must book and complete a service</li>
                <li>• <strong>Tracking:</strong> Log referrals in ServiceTitan under the referring customer's profile</li>
                <li>• <strong>No limit</strong> on number of referrals</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">💡 Natural Transitions:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• After review request: <span className="italic">"And if you know anyone who needs help..."</span></li>
                <li>• After a big job: <span className="italic">"We love working with great customers like you..."</span></li>
                <li>• During membership signup: <span className="italic">"Members also get enhanced referral rewards..."</span></li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Handling Negative Feedback Post-Service",
        keywords: "complaint unhappy negative feedback post service callback refund",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">🛑 De-Escalation Script:</p>
              <div className="text-sm opacity-80 space-y-1">
                <p><strong>1. Acknowledge:</strong> <span className="italic">"I'm really sorry to hear about your experience. That's not the level of service we aim for."</span></p>
                <p><strong>2. Listen:</strong> Let them vent completely. Do not interrupt.</p>
                <p><strong>3. Empathize:</strong> <span className="italic">"I completely understand your frustration."</span></p>
                <p><strong>4. Act:</strong> <span className="italic">"Here's what I'd like to do to make this right..."</span></p>
              </div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Resolution Options:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Callback visit (free):</strong> For incomplete work or issue not resolved</li>
                <li>• <strong>Different technician:</strong> If personality clash or trust issue</li>
                <li>• <strong>Partial refund/credit:</strong> Manager approval required</li>
                <li>• <strong>Full refund:</strong> Manager + owner approval required</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">⬆️ Escalate to Manager When:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Customer demands a refund</li>
                <li>• Customer threatens legal action or BBB complaint</li>
                <li>• Property damage is alleged</li>
                <li>• Customer uses abusive language (stay calm, transfer)</li>
                <li>• Same issue reported 3+ times</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Membership Retention Calls",
        keywords: "membership retention cancel renewal expire annual plan",
        content: (
          <div className="space-y-3">
            <p><strong>Call members 30 days before expiration:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">📞 Renewal Script:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company]. I'm reaching out because your maintenance membership is coming up for renewal on [Date]. I wanted to make sure we get you scheduled for your [spring/fall] tune-up and keep all your member benefits active. Can I go ahead and renew that for you?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">💎 Renewal Benefits Pitch:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Priority scheduling</strong> — members get seen first, especially in peak season</li>
                <li>• <strong>Discount on repairs</strong> — typically 15–20% off parts and labor</li>
                <li>• <strong>2 tune-ups/year</strong> — heating in fall, cooling in spring</li>
                <li>• <strong>No after-hours fees</strong> — emergency service at regular rates</li>
                <li>• <strong>Extended equipment life</strong> — regular maintenance adds 5+ years</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">❌ "I Want to Cancel" — Response:</p>
              <div className="text-sm opacity-80 space-y-1">
                <p><strong>Ask why:</strong> <span className="italic">"I understand. May I ask what's prompting you to cancel? I want to make sure we haven't missed anything."</span></p>
                <p><strong>Common reasons & responses:</strong></p>
                <ul className="space-y-1 pl-4">
                  <li>• <strong>"Too expensive"</strong> → Highlight savings: <span className="italic">"Your membership has saved you $[XX] this year in repair discounts alone."</span></li>
                  <li>• <strong>"Don't use it"</strong> → <span className="italic">"Let me get your tune-up scheduled right now so you get the full value."</span></li>
                  <li>• <strong>"Moving"</strong> → <span className="italic">"If you're staying in our service area, it transfers to your new home!"</span></li>
                </ul>
                <p className="mt-1">If they still want to cancel, process it gracefully: <span className="italic">"We understand. We'll process that for you. You're always welcome back!"</span></p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Seasonal Outreach Scripts",
        keywords: "seasonal outreach spring summer fall winter tune-up reminder proactive",
        content: (
          <div className="space-y-3">
            <p><strong>Proactive calls to existing customers before peak seasons:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">❄️ Pre-Winter (Sept–Oct) Script:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company]. With winter right around the corner, I wanted to reach out and see if we can get your heating system tuned up before the cold hits. A fall tune-up helps prevent breakdowns and keeps your energy bills down. We have openings [next week / timeframe]. Would you like to schedule?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">☀️ Pre-Summer (Mar–Apr) Script:</p>
              <p className="text-sm opacity-80 italic">"Hi [Name], this is [Your Name] from [Company]. Summer's coming and now is the perfect time to make sure your AC is ready to go. We'd love to get you on the schedule for a spring tune-up — it helps catch any issues before the heat wave. Can I book that for you?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Outreach Best Practices:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Start calling <strong>6–8 weeks</strong> before peak season</li>
                <li>• Prioritize members first, then recent customers, then dormant</li>
                <li>• Mention specific benefits: efficiency, warranty compliance, comfort</li>
                <li>• If no answer, leave a voicemail + send a text/email follow-up</li>
                <li>• Track outreach in ServiceTitan with campaign tags</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 Upsell Opportunities:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Mention <strong>IAQ products</strong> during seasonal calls (UV lights, humidifiers)</li>
                <li>• Offer <strong>membership signup</strong> for non-members: <span className="italic">"Did you know our members save 15% and get priority booking?"</span></li>
                <li>• Suggest <strong>smart thermostat install</strong> during the tune-up visit</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "dispatch-scenarios",
    title: "Dispatch Scenarios & Protocols",
    description: "Tech routing, job reassignment, emergency dispatch, capacity management & reschedules",
    icon: MapPin,
    iconColor: BLUE,
    articles: [
      {
        title: "Tech Routing & Assignment Rules",
        keywords: "dispatch routing assign technician skills location zone availability",
        content: (
          <div className="space-y-3">
            <p><strong>How to choose the right tech for each job:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">📋 Assignment Priority (in order):</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li><strong>Skill match</strong> — Tech must be certified for the job type (HVAC install vs. repair vs. plumbing)</li>
                <li><strong>Zone/proximity</strong> — Assign the closest available tech to minimize drive time</li>
                <li><strong>Availability</strong> — Check the tech's board in ServiceTitan for open time slots</li>
                <li><strong>Workload balance</strong> — Don't overload one tech while others have gaps</li>
                <li><strong>Customer history</strong> — If the customer had a specific tech before, try to send the same one</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">🔧 Skill Categories in ServiceTitan:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>HVAC Repair</strong> — Diagnose & fix, all system types</li>
                <li>• <strong>HVAC Install</strong> — Full system changeouts, ductwork</li>
                <li>• <strong>HVAC Maintenance</strong> — Tune-ups, filter changes, clean & checks</li>
                <li>• <strong>Plumbing Service</strong> — Drain cleaning, water heaters, faucets, toilets</li>
                <li>• <strong>Plumbing Install</strong> — Re-pipes, fixture installs, gas lines</li>
                <li>• <strong>Sales</strong> — Comfort advisors for replacement estimates</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 Pro Tip:</p>
              <p className="text-sm opacity-80">When in doubt about skill match, check the tech's profile in ServiceTitan → "Skills & Certifications" tab. Never send an HVAC-only tech on a plumbing call.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Job Reassignment & Reschedules",
        keywords: "reassign reschedule move job swap tech change appointment",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">🔄 When to Reassign a Job:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Tech is running behind and will miss the arrival window</li>
                <li>• Job requires skills the assigned tech doesn't have</li>
                <li>• Tech calls out sick or has a vehicle breakdown</li>
                <li>• Customer specifically requests a different technician</li>
                <li>• Emergency call takes priority and pulls the tech away</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Reassignment Steps:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li>Identify an available tech with the right skills & proximity</li>
                <li>Contact the new tech to confirm they can take the job</li>
                <li>Update the dispatch board in ServiceTitan (drag & drop or reassign)</li>
                <li>Call the customer to inform them: <span className="italic">"Hi [Name], I wanted to let you know [New Tech] will be coming out today instead. They're fully qualified and will take great care of you."</span></li>
                <li>Add a note to the job explaining the reassignment reason</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">📅 Customer Reschedule Protocol:</p>
              <div className="text-sm opacity-80 space-y-1">
                <p><strong>Customer calls to reschedule:</strong></p>
                <p className="italic">"Absolutely, let me find a new time for you. Do you prefer morning or afternoon?"</p>
                <p><strong>We need to reschedule (our side):</strong></p>
                <p className="italic">"Hi [Name], I'm calling because we need to adjust your appointment. I apologize for the inconvenience — I have [alternative times] available. Which works best for you?"</p>
                <p className="mt-1"><strong>Always offer the next available slot</strong> and compensate with priority if we caused the reschedule.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Emergency Dispatch Protocols",
        keywords: "emergency urgent priority dispatch same-day gas leak no heat flood",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-2">🚨 Priority 1 — Immediate Dispatch (within 1 hour):</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Gas leak</strong> — Customer smells gas (call 911 first, then dispatch)</li>
                <li>• <strong>CO alarm sounding</strong> — Evacuate first, then dispatch</li>
                <li>• <strong>Flooding/active water leak</strong> — Major property damage risk</li>
                <li>• <strong>No heat below 32°F</strong> — Freeze risk to pipes and occupants</li>
                <li>• <strong>Electrical burning smell from HVAC</strong> — Fire risk</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">⚡ Priority 2 — Same-Day Dispatch:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• No AC above 90°F with elderly, infants, or medical conditions</li>
                <li>• No heat below 40°F (not an immediate safety threat but urgent)</li>
                <li>• Sewage backup or main drain clog</li>
                <li>• Water heater leaking (not flooding but needs attention)</li>
                <li>• Complete system failure (no cool/no heat, functioning unit stopped)</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Emergency Dispatch Checklist:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li>Confirm the emergency type and severity</li>
                <li>Check safety — advise customer to evacuate if needed (gas, CO)</li>
                <li>Pull the nearest available tech from current job (if Priority 1)</li>
                <li>Notify the pulled tech's current customer about the delay</li>
                <li>Assign the emergency job in ServiceTitan with "Emergency" tag</li>
                <li>Call customer with ETA: <span className="italic">"Our tech [Name] is on the way. ETA is approximately [X] minutes."</span></li>
                <li>Follow up within 1 hour to confirm tech arrived</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-1">⚠️ Pulling a Tech from Another Job:</p>
              <p className="text-sm opacity-80">Only for Priority 1. Call the current customer: <span className="italic">"Hi [Name], our technician has been called to a safety emergency. We'll have [another tech / reschedule] to complete your service as soon as possible. I sincerely apologize."</span></p>
            </div>
          </div>
        ),
      },
      {
        title: "Capacity Management & Squeeze-Ins",
        keywords: "capacity full board overbooked squeeze-in same day overflow waitlist",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">📊 When the Board Is Full:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Check for cancellations</strong> — Gaps may open up throughout the day</li>
                <li>• <strong>Look for short jobs finishing early</strong> — Maintenance calls often wrap up ahead of schedule</li>
                <li>• <strong>Assess urgency</strong> — Can the new call wait until tomorrow, or is it same-day priority?</li>
                <li>• <strong>Consider overtime</strong> — With manager approval, extend a tech's day for urgent calls</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">📥 Squeeze-In Protocol:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li>Identify the tech with the lightest remaining workload</li>
                <li>Call or text the tech: <span className="italic">"Can you fit in one more call? It's a [job type] at [address], about [estimated time]."</span></li>
                <li>If tech agrees, add to the board and note it as "Squeeze-In"</li>
                <li>Give customer a wider arrival window: <span className="italic">"We can get to you today, but the arrival window will be between [X] and [Y]."</span></li>
                <li>If no tech available, offer first slot tomorrow or add to waitlist</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Waitlist Script:</p>
              <p className="text-sm opacity-80 italic">"We're fully booked today, but I can put you on our priority waitlist. If anything opens up, you'll be the first call. Otherwise, I have [next available slot] — would you like to secure that spot?"</p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-1">⚠️ Member Priority:</p>
              <p className="text-sm opacity-80">Maintenance members get <strong>priority squeeze-in</strong> over non-members. Always check membership status in ServiceTitan before saying the board is full.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Multi-Day & Complex Job Scheduling",
        keywords: "multi-day install complex schedule two day three day project",
        content: (
          <div className="space-y-3">
            <p><strong>For installs and large projects requiring multiple days:</strong></p>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Multi-Day Job Types:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Full HVAC system replacement:</strong> 1–2 days</li>
                <li>• <strong>Ductwork replacement/install:</strong> 2–3 days</li>
                <li>• <strong>Multi-zone mini split:</strong> 2–3 days</li>
                <li>• <strong>Full re-pipe (plumbing):</strong> 2–4 days</li>
                <li>• <strong>Whole-home IAQ retrofit:</strong> 1–2 days</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">📅 Scheduling Protocol:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li>Block <strong>consecutive days</strong> on the board for the same crew</li>
                <li>Assign <strong>lead installer + helper</strong> — keep the same team all days</li>
                <li>Confirm all equipment/materials are ordered and on-site before Day 1</li>
                <li>Set customer expectations: <span className="italic">"The install will take [X] days. The crew will arrive at [time] each day and wrap up by [time]."</span></li>
                <li>Add a note on each day's job with the project scope and progress tracker</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-1">💡 End-of-Day Customer Update:</p>
              <p className="text-sm opacity-80">Call the customer at end of each day: <span className="italic">"Hi [Name], just wanted to update you — the crew completed [work done today]. They'll be back tomorrow at [time] to continue with [next steps]. Everything is on track!"</span></p>
            </div>
          </div>
        ),
      },
      {
        title: "Tech Running Late — Communication Protocol",
        keywords: "late running behind delay arrival window eta customer notification",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${ORANGE}15`, border: `1px solid ${ORANGE}33` }}>
              <p className="font-semibold mb-2">⏰ When a Tech Is Running Late:</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li><strong>15+ minutes late</strong> — Proactively call the customer (don't wait for them to call us)</li>
                <li><strong>Apologize + give new ETA:</strong> <span className="italic">"Hi [Name], this is [Your Name] from [Company]. I wanted to let you know that [Tech] is running a bit behind from a previous appointment. Their new ETA is [time]. I apologize for the delay."</span></li>
                <li>Offer alternatives if delay is 30+ minutes: <span className="italic">"Would you prefer to wait, or would you like me to reschedule for a time that works better?"</span></li>
                <li>Update the job in ServiceTitan with a note about the delay and new ETA</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📋 Threshold Guidelines:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>5–15 min:</strong> No call needed — within normal window</li>
                <li>• <strong>15–30 min:</strong> Proactive call with apology + new ETA</li>
                <li>• <strong>30–60 min:</strong> Call + offer to reschedule or send different tech</li>
                <li>• <strong>60+ min:</strong> Manager notified, offer reschedule + compensation (discount/priority)</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${RED}15`, border: `1px solid ${RED}33` }}>
              <p className="font-semibold mb-1">🚫 Never Say:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• "They're on their way" when you don't know the actual ETA</li>
                <li>• "The last job took longer than expected" — too much detail, sounds like excuses</li>
                <li>• Nothing at all — silence is worse than a delay call</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Dispatch Board Best Practices",
        keywords: "dispatch board servicetitan organize daily setup morning routine",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg" style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}33` }}>
              <p className="font-semibold mb-2">🌅 Morning Board Setup (Daily Routine):</p>
              <ol className="space-y-1 text-sm opacity-80 list-decimal pl-4">
                <li>Review all scheduled jobs for the day — confirm no cancellations overnight</li>
                <li>Check tech availability — call-outs, vacations, vehicle issues</li>
                <li>Reassign any orphaned jobs from absent techs</li>
                <li>Verify all install jobs have materials confirmed</li>
                <li>Identify open slots for same-day callers</li>
                <li>Review high-priority/VIP jobs and ensure best tech assigned</li>
              </ol>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "hsl(0,0%,15%)" }}>
              <p className="font-semibold mb-2">📊 Throughout the Day:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Monitor tech progress — are they on schedule or falling behind?</li>
                <li>• Watch for completed jobs → check if tech can take a squeeze-in</li>
                <li>• Communicate with techs via text/chat for quick updates</li>
                <li>• Flag any jobs that are taking longer than estimated</li>
                <li>• Keep the waitlist updated — call waitlisted customers when slots open</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${BLUE}15`, border: `1px solid ${BLUE}33` }}>
              <p className="font-semibold mb-2">🏁 End-of-Day Wrap-Up:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• Confirm all jobs are marked complete or rescheduled</li>
                <li>• Review any callbacks or follow-ups needed for tomorrow</li>
                <li>• Check tomorrow's board — any gaps to fill? Any heavy days to balance?</li>
                <li>• Note any recurring issues (tech consistently late, jobs underestimated, etc.)</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg" style={{ background: `${WARM}15`, border: `1px solid ${WARM}33` }}>
              <p className="font-semibold mb-1">💡 Golden Rules of Dispatch:</p>
              <ul className="space-y-1 text-sm opacity-80">
                <li>• <strong>Communicate early</strong> — customers forgive delays, not silence</li>
                <li>• <strong>Members first</strong> — always check membership before scheduling decisions</li>
                <li>• <strong>Right tech, right job</strong> — skill match over speed</li>
                <li>• <strong>Document everything</strong> — notes in ServiceTitan are your safety net</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
];
