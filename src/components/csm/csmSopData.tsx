import React from "react";
import {
  BookOpen, Users, ClipboardList, Calendar,
  Phone, CheckSquare, Settings,
} from "lucide-react";
import type { KBSectionData } from "@/components/knowledge-base/kbData";

const ORANGE = "hsl(15, 90%, 55%)";
const RED = "hsl(0, 78%, 50%)";
const GREEN = "hsl(145, 60%, 45%)";
const BLUE = "hsl(200, 80%, 55%)";
const PURPLE = "hsl(270, 60%, 55%)";
const WARM = "hsl(25, 100%, 60%)";
const TEAL = "hsl(180, 60%, 45%)";

const H = ({ children }: { children: React.ReactNode }) => (
  <p className="font-semibold text-white mt-3 mb-1">{children}</p>
);
const Q = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 pl-3 my-2 italic" style={{ borderColor: ORANGE }}>
    {children}
  </blockquote>
);
const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-5 space-y-1">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
);
const OL = ({ items }: { items: React.ReactNode[] }) => (
  <ol className="list-decimal pl-5 space-y-1">{items.map((it, i) => <li key={i}>{it}</li>)}</ol>
);
const Table = ({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) => (
  <div className="overflow-x-auto my-2">
    <table className="w-full text-xs border-collapse">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="text-left font-semibold border-b border-white/20 py-1.5 pr-3">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-white/10">
            {r.map((c, j) => <td key={j} className="py-1.5 pr-3 align-top">{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DoDont = ({ dos, donts }: { dos: string[]; donts: string[] }) => (
  <div className="grid grid-cols-2 gap-3 mt-2 text-xs">
    <div className="p-2 rounded-lg" style={{ background: "hsla(145,60%,45%,0.1)" }}>
      <p className="font-semibold mb-1" style={{ color: GREEN }}>Do</p>
      <ul className="list-disc pl-4 space-y-0.5">{dos.map((d, i) => <li key={i}>{d}</li>)}</ul>
    </div>
    <div className="p-2 rounded-lg" style={{ background: "hsla(0,78%,50%,0.1)" }}>
      <p className="font-semibold mb-1" style={{ color: RED }}>Don't</p>
      <ul className="list-disc pl-4 space-y-0.5">{donts.map((d, i) => <li key={i}>{d}</li>)}</ul>
    </div>
  </div>
);
const Meta = ({ purpose, when, owner }: { purpose: string; when: string; owner: string }) => (
  <div className="space-y-1 text-xs mb-2 p-2 rounded-lg" style={{ background: "hsl(0,0%,12%)" }}>
    <div><span className="font-semibold" style={{ color: ORANGE }}>Purpose:</span> {purpose}</div>
    <div><span className="font-semibold" style={{ color: ORANGE }}>When it applies:</span> {when}</div>
    <div><span className="font-semibold" style={{ color: ORANGE }}>Owner:</span> {owner}</div>
  </div>
);

export const csmSections: KBSectionData[] = [
  {
    id: "foundations",
    title: "Part 1 — Foundations",
    description: "CSM role, coverage, tools, communication standards, KPIs",
    icon: BookOpen,
    iconColor: BLUE,
    articles: [
      {
        title: "1.1 CSM Role & Responsibilities",
        keywords: "role responsibilities csm customer success manager",
        content: (
          <div className="space-y-2">
            <p>The CSM is the first and last human voice on most customer touchpoints. Own the call from ring to confirmation text.</p>
            <H>Owns</H>
            <UL items={[
              "Answering inbound calls, web forms, LSA leads, Posh handoffs",
              "Complete intake (customer info, system, symptom, access)",
              "Booking to the right window with the right business unit",
              "Diagnostic-fee framing and Home+ membership pitch",
              "Confirmation text and pre-visit expectations",
              "Reschedules, cancellations, no-show recovery",
            ]} />
            <H>Does NOT own</H>
            <UL items={[
              "Dispatch board and tech assignment (Dispatch owns)",
              "On-site pricing or scope changes (Tech owns)",
              "Fee waivers, refunds, complaint resolution (Manager owns)",
            ]} />
          </div>
        ),
      },
      {
        title: "1.2 Hours, Coverage, Handoffs",
        keywords: "hours coverage posh after hours handoff schedule",
        content: (
          <div className="space-y-2">
            <UL items={[
              <><strong>CSM live coverage:</strong> 7:00 AM – 5:00 PM, Mon–Sat</>,
              <><strong>Posh (external answering service):</strong> 5:00 PM – 7:00 AM, all Sundays, all holidays</>,
              <><strong>On-call tech:</strong> Dispatch rotates weekly — Posh escalates true emergencies</>,
            ]} />
            <H>Shift start (7 AM)</H>
            <OL items={[
              "Pull Posh overnight log first",
              "Triage into buckets: emergency dispatched / booked / message-only",
              "Callback all message-only tickets by 8 AM",
            ]} />
            <H>Shift end (5 PM)</H>
            <OL items={[
              "Log any open callbacks in Posh instructions field",
              "Note any soft-hold slots so Posh doesn't rebook them",
            ]} />
          </div>
        ),
      },
      {
        title: "1.3 Tools of Record",
        keywords: "tools servicetitan phone lsa posh",
        content: (
          <Table
            headers={["Tool", "Use for", "Rule"]}
            rows={[
              ["ServiceTitan", "All bookings, tickets, notes, customer history", "Source of truth — if it's not in ST, it didn't happen"],
              ["Phone system", "Inbound/outbound voice, hold, transfer", "Answer by ring 3"],
              ["LSA Dashboard", "Google Local Services Ads leads, disputes", "Log outcome within 10 min"],
              ["Posh log", "After-hours ticket handoff", "Reviewed at 7 AM sharp"],
              ["SMS (via ServiceTitan)", "Confirmations, missed-call text-back", "Never personal phones"],
            ]}
          />
        ),
      },
      {
        title: "1.4 Communication Standards",
        keywords: "tone communication standards greeting hold callback",
        content: (
          <div className="space-y-2">
            <H>Greeting (verbatim, every call)</H>
            <Q>"Thank you for choosing Home+ Air and Heat, this is [name], how can we serve you today?"</Q>
            <H>Hold protocol</H>
            <UL items={[
              "Ask permission before holding",
              "Cap at 60 seconds",
              "Return with an update even if no answer yet",
            ]} />
            <H>Callback SLAs</H>
            <Table
              headers={["Channel", "First touch"]}
              rows={[
                ["LSA missed call", "≤ 15 min"],
                ["Web form", "≤ 5 min"],
                ["General inbound voicemail", "≤ 30 min"],
                ["Posh message-only", "By 8 AM next business day"],
              ]}
            />
          </div>
        ),
      },
      {
        title: "1.5 KPIs the CSM Owns",
        keywords: "kpi metrics answer rate booking rate membership",
        content: (
          <Table
            headers={["Metric", "Target"]}
            rows={[
              ["Answer rate (inbound)", "≥ 90% within 3 rings"],
              ["LSA answer rate", "≥ 95%"],
              ["Web form first-touch", "≤ 5 min"],
              ["Booking rate (qualified callers)", "≥ 70%"],
              ["Membership pitch rate (non-members)", "≥ 60%"],
              ["Ticket completeness (6.1 fields)", "100%"],
              ["Posh 8 AM callback completion", "100%"],
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "interaction",
    title: "Part 2 — Customer Interaction",
    description: "Greeting, listening, profiles, emergency triage, de-escalation",
    icon: Users,
    iconColor: ORANGE,
    articles: [
      {
        title: "2.1 Greeting & Opening Script",
        keywords: "greeting opening script hello",
        content: (
          <div className="space-y-2">
            <Meta purpose="Set tone in the first 3 seconds." when="Every inbound call." owner="CSM" />
            <Q>"Thank you for choosing Home+ Air and Heat, this is [name], how can we serve you today?"</Q>
            <p>Say it clean, slow, and warm. Do not shorten, rephrase, or add filler.</p>
            <DoDont
              dos={["Use full script every call", "Smile through the phone", "Pause after greeting to let them start"]}
              donts={["Say 'thank you for calling'", "Add your title or department", "Rush through it"]}
            />
          </div>
        ),
      },
      {
        title: "2.2 Active Listening & Acknowledgement",
        keywords: "listening acknowledgement empathy paraphrase",
        content: (
          <div className="space-y-2">
            <Meta purpose="Customer feels heard before they're processed." when="After greeting, before intake questions." owner="CSM" />
            <OL items={[
              "Let them finish the first sentence uninterrupted",
              "Acknowledge with one line: \"That sounds frustrating — let's get you taken care of.\"",
              "Paraphrase the issue back: \"So your boiler stopped making heat overnight — is that right?\"",
              "Only then start data collection",
            ]} />
          </div>
        ),
      },
      {
        title: "2.3 Customer Profile Recognition",
        keywords: "profile homeowner rental commercial hoa tenant",
        content: (
          <Table
            headers={["Profile", "Signal", "Handling"]}
            rows={[
              ["Homeowner", "Owns the address, decision-maker on line", "Standard flow, pitch Home+"]
              ,
              ["Rental / Tenant", "Says \"my landlord\" or \"the property manager\"", "Get owner/PM name + authorization before dispatch. Do NOT pitch Home+"],
              ["Commercial", "Business name, business address, invoice terms", "Business+ pitch, $269 diagnostic, $349/hr labor"],
              ["HOA / Property Mgmt", "Multi-unit, PM company name", "Route to designated PM account contact. Manager approves scope"],
            ]}
          />
        ),
      },
      {
        title: "2.4 Emergency Triage (Safety First)",
        keywords: "emergency triage gas carbon monoxide leak flooding no heat",
        content: (
          <div className="space-y-2">
            <div className="p-2 rounded-lg" style={{ background: "hsla(0,78%,50%,0.15)" }}>
              <p className="font-semibold" style={{ color: RED }}>Life-safety first. Any of these = interrupt intake, act immediately.</p>
            </div>
            <Table
              headers={["Signal", "Immediate action"]}
              rows={[
                ["Smells gas", "Tell customer: leave the house, call 911 + utility. Then dispatch."],
                ["CO alarm active", "Leave the house, call 911. Then dispatch."],
                ["Actively flooding water", "Shut main water valve, dispatch same-day priority."],
                ["No heat + freezing temps + vulnerable occupant", "Same-day priority, page Dispatch."],
                ["No AC + heat advisory + vulnerable occupant", "Same-day priority, page Dispatch."],
                ["Electrical burning smell / sparks", "Kill the breaker if safe, call 911, then dispatch."],
              ]}
            />
            <p className="text-xs">Emergency triage is <strong>pass/fail</strong> on the QA rubric. Miss it and the whole call scores capped at 60%.</p>
          </div>
        ),
      },
      {
        title: "2.5 Difficult Customers & De-escalation",
        keywords: "difficult customer angry de-escalation complaint",
        content: (
          <div className="space-y-2">
            <OL items={[
              "Lower your volume. Match their pace, not their heat.",
              "Acknowledge the feeling: \"I hear you, and I'd feel the same way.\"",
              "Take ownership of the next step, not the past problem: \"Here's what I'm going to do right now.\"",
              "Never argue facts mid-heat. Get the callback booked or escalate.",
            ]} />
            <H>Escalate immediately to Manager</H>
            <UL items={[
              "Asks for a manager",
              "Threatens review, BBB, attorney",
              "Discrimination or harassment claim",
              "Repeat caller with prior complaint",
            ]} />
          </div>
        ),
      },
      {
        title: "2.6 Warm Transfer & Hold Protocol",
        keywords: "transfer warm hold",
        content: (
          <div className="space-y-2">
            <H>Warm transfer (never blind)</H>
            <OL items={[
              "Ask permission: \"Can I put you on a brief hold while I get [name] on the line?\"",
              "Brief the receiver: customer name, issue, what you've done so far",
              "Return to customer: \"I have [name] on the line — connecting you now.\"",
            ]} />
            <H>Hold rules</H>
            <UL items={[
              "60 second cap",
              "Return with an update, even if just \"still working on it\"",
              "Never silent-hold — always ask first",
            ]} />
          </div>
        ),
      },
    ],
  },
  {
    id: "intake",
    title: "Part 3 — Intake",
    description: "Required data, service type, symptoms, membership, lead source",
    icon: ClipboardList,
    iconColor: PURPLE,
    articles: [
      {
        title: "3.1 Required Data Fields",
        keywords: "intake data fields required name phone address",
        content: (
          <div className="space-y-2">
            <p>Capture in order. Do not skip fields to save time — Dispatch will call you back.</p>
            <OL items={[
              "Full name (spelled + confirmed)",
              "Best callback phone",
              "Full service address (with unit / suite)",
              "System type (boiler / furnace / AC / HP / mini-split / plumbing)",
              "Primary symptom in customer's words + your paraphrase",
              "Access notes (gate code, dog, stairs, business hours)",
              "Membership status (member / non-member / lapsed)",
              "Lead source (verbatim)",
            ]} />
          </div>
        ),
      },
      {
        title: "3.2 Service Type Identification",
        keywords: "service type repair install maintenance estimate",
        content: (
          <Table
            headers={["They say", "It's actually", "Fee posture"]}
            rows={[
              ["\"It's broken / not working\"", "Repair diagnostic", "$199 res / $269 comm"],
              ["\"I need a new one / mine is old\"", "Install estimate", "Free"],
              ["\"Annual / tune-up / check\"", "Maintenance", "Flat maintenance price or Home+ covered"],
              ["\"Just a quote\"", "Repair diag OR install estimate (clarify)", "Depends on above"],
            ]}
          />
        ),
      },
      {
        title: "3.3 System Type Identification",
        keywords: "system type boiler furnace ac heat pump mini split plumbing",
        content: (
          <div className="space-y-2">
            <p>Ask, don't guess. Route to the right business unit.</p>
            <Table
              headers={["Ask", "Why"]}
              rows={[
                ["\"Is it forced air or radiators?\"", "Furnace vs. boiler"],
                ["\"Does it also cool in summer?\"", "Heat pump vs. furnace+AC"],
                ["\"Wall-mounted individual units per room?\"", "Mini-split"],
                ["\"Do you know the fuel — gas, oil, electric?\"", "Correct BU + tech skill"],
                ["\"Where is it located?\"", "Basement/attic/roof affects tech gear"],
              ]}
            />
          </div>
        ),
      },
      {
        title: "3.4 Residential vs Commercial Routing",
        keywords: "residential commercial routing business unit",
        content: (
          <Table
            headers={["Signal", "Route to"]}
            rows={[
              ["Single-family home, owner on phone", "Residential BU, $199 diag, $299/hr"],
              ["Business name / office / retail / restaurant", "Commercial BU, $269 diag, $349/hr"],
              ["Multi-family with individual tenant meters", "Residential (verify owner authorization)"],
              ["Large multi-tenant building", "Commercial + Manager review"],
              ["Rooftop unit (RTU)", "Commercial by definition"],
            ]}
          />
        ),
      },
      {
        title: "3.5 Symptom Clarification",
        keywords: "symptom clarify dispatchable ticket",
        content: (
          <div className="space-y-2">
            <p>"AC broken" is not dispatchable. The tech needs to know what to bring.</p>
            <H>Turn vague → dispatchable</H>
            <Table
              headers={["Customer says", "Ask"]}
              rows={[
                ["\"AC broken\"", "\"Is it not running at all, or running but not cold?\""],
                ["\"No heat\"", "\"Is the system on and blowing, or completely off?\""],
                ["\"Leaking water\"", "\"Is it dripping, pooling, or actively running?\""],
                ["\"Strange noise\"", "\"Rattle, bang, hiss, or grinding?\""],
                ["\"Smells weird\"", "\"Gas, burning, musty, or something else?\" (gas = 2.4 triage)"],
              ]}
            />
          </div>
        ),
      },
      {
        title: "3.6 Membership Status Check",
        keywords: "membership home+ business+ status check",
        content: (
          <div className="space-y-2">
            <p>Check ServiceTitan before you quote anything. Pitching a member the membership they already have loses trust.</p>
            <Table
              headers={["Status", "Action"]}
              rows={[
                ["Active member", "Thank explicitly. Waive diagnostic. Apply repair discount."],
                ["Lapsed", "Offer reinstatement at same rate."],
                ["Non-member", "Standard flow. Pitch after diagnostic fee accepted (4.3)."],
              ]}
            />
          </div>
        ),
      },
      {
        title: "3.7 Lead Source Attribution",
        keywords: "lead source attribution google lsa yelp referral",
        content: (
          <div className="space-y-2">
            <Q>"One quick question — how did you hear about us?"</Q>
            <p>Log verbatim. Do not force into a bucket.</p>
            <Table
              headers={["They say", "Log as"]}
              rows={[
                ["\"Google\" (unspecified)", "Google — Organic"],
                ["\"Top of Google with green checkmark\"", "Google — LSA"],
                ["\"Your ad\"", "Google — Ads"],
                ["\"Yelp\"", "Yelp"],
                ["\"Neighbor / friend / family\"", "Referral — [name if given]"],
                ["\"Your truck / mailer\"", "Fleet / Direct Mail"],
                ["\"Used you before\"", "Repeat Customer"],
                ["\"Property management\"", "HOA / PM — [company]"],
              ]}
            />
            <p className="text-xs"><strong>Rule.</strong> Never skip. Referring customers earn a credit only if we log the name.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "booking",
    title: "Part 4 — Booking",
    description: "Availability, diagnostic fee, membership pivot, objections, confirmation",
    icon: Calendar,
    iconColor: GREEN,
    articles: [
      {
        title: "4.1 Availability Rules",
        keywords: "availability window booking schedule",
        content: (
          <div className="space-y-2">
            <Meta purpose="Book windows we can actually hit." when="Every job we schedule." owner="CSM books, Dispatch owns board" />
            <OL items={[
              "Offer 2 windows, never open-ended",
              "Standard windows: 8–10, 10–12, 12–2, 2–4, 4–6",
              "Same-day cutoff: 3:00 PM unless Dispatch approves",
              "Evening / weekend / holiday needs Dispatch approval first",
              "Confirm verbally, then send ST confirmation text",
            ]} />
            <Q>"I can get a tech out between 8 and 10 this morning, or 12 to 2 this afternoon — which works better?"</Q>
          </div>
        ),
      },
      {
        title: "4.2 Diagnostic Fee Framing",
        keywords: "diagnostic fee 199 269 framing",
        content: (
          <div className="space-y-2">
            <Meta purpose="Set fee expectation before the doorstep." when="Every repair / not-working call." owner="CSM" />
            <Q>"Our diagnostic is $199 for residential, $269 for commercial. That covers the tech coming out, diagnosing the issue, and giving you a written repair price. If you approve the repair today, the diagnostic is credited toward the work."</Q>
            <p>Then stop talking. Let them respond.</p>
            <Table
              headers={["They say", "Response"]}
              rows={[
                ["\"Do you waive it if I do the repair?\"", "\"Yes — credited toward the repair if approved today.\""],
                ["\"Someone else does it free\"", "\"Understood. Our tech is licensed, insured, gives a written price on-site — that's what the $199 covers.\" No price match."],
                ["\"Can I get a phone quote?\"", "\"We can't diagnose over the phone accurately — that's why the visit exists.\""],
                ["Home+ member", "Waived. Confirm on ticket."],
              ]}
            />
            <p className="text-xs"><strong>Fee waivers → Manager only.</strong> CSMs do not waive.</p>
          </div>
        ),
      },
      {
        title: "4.3 Membership Pivot (Home+)",
        keywords: "membership home+ pitch pivot 19.99",
        content: (
          <div className="space-y-2">
            <Meta purpose="Every non-member call is an enrollment chance." when="Non-member, non-emergency, after fee accepted." owner="CSM (initial), Tech (on-site)" />
            <Q>"One quick thing — most of our customers on this kind of call end up joining Home+. It's $19.99 a month, includes two tune-ups a year, waives the diagnostic fee today, and gives you 15% off the repair. It usually pays for itself on the first visit. Want me to add it?"</Q>
            <Table
              headers={["Situation", "Rule"]}
              rows={[
                ["Emergency call", "Skip — mention after resolution"],
                ["Already member", "Thank + confirm perks"],
                ["Lapsed", "Offer reinstatement at same $19.99"],
                ["Rental / tenant", "Do NOT pitch — owner enrolls"],
                ["Commercial", "Pitch Business+ instead"],
              ]}
            />
          </div>
        ),
      },
      {
        title: "4.4 Objection Handling — Top 4",
        keywords: "objection price quote callback spouse diy handling",
        content: (
          <div className="space-y-2">
            <H>1. Price ("$199 is too much")</H>
            <Q>"I hear you. That $199 gets a licensed tech to your door, a full diagnosis, and a written price. If you approve the repair, it's credited. You're not paying twice."</Q>
            <H>2. "I just want a quote"</H>
            <Q>"We can't quote a repair without seeing the system — every unit is different. The $199 gets you a real number in writing, not a guess."</Q>
            <H>3. "Call me back / need to talk to spouse"</H>
            <Q>"Absolutely. Before I let you go — want me to pencil in a window so you don't lose the slot? If you cancel by tomorrow morning there's no charge."</Q>
            <H>4. "I'll DIY first"</H>
            <Q>"Fair enough. If it doesn't work out, call us back — the offer stands. One thing: if it's gas, refrigerant, or electrical, please don't DIY — call us."</Q>
            <p className="text-xs mt-2"><strong>Escalate to Manager:</strong> asks for manager, threatens review/BBB/attorney, discrimination claim, repeat complaint.</p>
          </div>
        ),
      },
      {
        title: "4.5 Confirmation & Expectations",
        keywords: "confirmation expectations read back",
        content: (
          <div className="space-y-2">
            <p>Read back in this order at end of every booking:</p>
            <OL items={[
              "Name + address: \"123 Main Street, Massapequa, correct?\"",
              "Window: \"Tech out between 8 and 10 tomorrow morning.\"",
              "Fee: \"$199 diagnostic, credited toward the repair if approved.\"",
              "Tech name (if assigned): \"You'll get a text with his photo before he heads out.\"",
              "Prep: \"Someone 18+ home, clear access to the [unit].\"",
              "Confirm text: \"Sending confirmation now — hit Y to confirm.\"",
            ]} />
          </div>
        ),
      },
      {
        title: "4.6 Reschedules & Cancellations",
        keywords: "reschedule cancel move",
        content: (
          <div className="space-y-2">
            <OL items={[
              "Ask why: \"Totally fine — what's changed?\"",
              "Try to save the job first: offer 2 alternate windows",
              "Same-day cancel → Dispatch approval + reason on ticket",
              "Confirm new window with 4.5 read-back",
            ]} />
            <Table
              headers={["Situation", "Rule"]}
              rows={[
                ["3rd reschedule same job", "Manager review — likely bad-fit customer"],
                ["\"Found cheaper\"", "Do NOT price-match. Note lead source loss."],
                ["\"Resolved itself\"", "Note, move on, no pressure"],
                ["Cancel + complaint", "Manager — do not close file"],
              ]}
            />
          </div>
        ),
      },
      {
        title: "4.7 No-Show / Ghost Recovery",
        keywords: "no show ghost recovery missed",
        content: (
          <div className="space-y-2">
            <OL items={[
              "Same day, within 2 hours of missed window: call",
              "Script: \"Thank you for choosing Home+ Air and Heat, this is [name]. We had you on the schedule for [window] and our tech couldn't reach you — I want to make sure everything's OK and see if we can rebook.\"",
              "If answered → rebook, no trip fee",
              "If no answer → voicemail + rebook-link text",
              "Second attempt next business morning",
              "After 2 attempts → close as \"Unable to reach\"",
            ]} />
            <p className="text-xs">Repeat ghost (2+) → flag account, deposit required next booking.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: "channels",
    title: "Part 5 — Channel Playbooks",
    description: "Inbound, LSA, web forms, Posh, SMS",
    icon: Phone,
    iconColor: WARM,
    articles: [
      {
        title: "5.1 Inbound Phone",
        keywords: "inbound phone call answer ring",
        content: (
          <div className="space-y-2">
            <UL items={[
              "Answer by ring 3 (target 90%+)",
              "Standard greeting (2.1)",
              "Intake (Part 3) → book (Part 4)",
              "Hold cap 60s, ask permission",
              "Confirmation text before hangup",
            ]} />
            <p className="text-xs"><strong>KPIs:</strong> Answer rate ≥ 90%. Booking rate ≥ 70%. Hold ≤ 60s.</p>
          </div>
        ),
      },
      {
        title: "5.2 LSA (Google Local Services Ads)",
        keywords: "lsa google local services ads dispute callback",
        content: (
          <div className="space-y-2">
            <p>Google grades us on answer speed and booking rate. Miss LSA and we lose rank.</p>
            <OL items={[
              "LSA calls jump the queue — answer first",
              "Same greeting (2.1)",
              "Book aggressively — leads are pre-qualified",
              "Log outcome in LSA dashboard within 10 min",
              "Missed LSA → callback within 15 min or the lead is dead",
            ]} />
            <Table
              headers={["Outcome", "Log as"]}
              rows={[
                ["Booked", "Booked"],
                ["Wrong service / geo", "Not a lead + reason"],
                ["Missed", "Missed + set 15-min callback"],
              ]}
            />
            <p className="text-xs"><strong>KPIs:</strong> LSA answer ≥ 95%. Missed callback ≤ 15 min. Dispute rate on ineligible ≥ 80%.</p>
          </div>
        ),
      },
      {
        title: "5.3 Website Form",
        keywords: "web form website inquiry submission",
        content: (
          <div className="space-y-2">
            <OL items={[
              "Call within 5 minutes of submission (during CSM hours)",
              "Opening: \"Hi [name], this is [you] at Home+ Air and Heat — I got your request about [issue]. Is now a good time to lock in a visit?\"",
              "Voicemail + text within 2 min if no answer",
              "Second attempt in 2 hours. Third attempt next morning.",
              "After 3 attempts → mark unreachable",
            ]} />
          </div>
        ),
      },
      {
        title: "5.4 Posh After-Hours Handoff",
        keywords: "posh after hours handoff overnight",
        content: (
          <div className="space-y-2">
            <p>Posh covers 5 PM – 7 AM, weekends, holidays.</p>
            <H>Morning intake (7 AM sharp)</H>
            <OL items={[
              "Pull Posh overnight log",
              "Sort: emergency-dispatched / booked / message-only",
              "Verify emergency: on-call tech resolved + call customer",
              "Verify booked: confirm window + send confirm text",
              "Call back all message-only by 8 AM",
            ]} />
            <H>End of shift (5 PM)</H>
            <UL items={[
              "Log open callbacks in Posh instructions",
              "Note any soft-hold slots so Posh doesn't rebook",
            ]} />
            <p className="text-xs"><strong>KPI:</strong> Posh 8 AM callback completion 100%. Mis-dispatch ≤ 2%.</p>
          </div>
        ),
      },
      {
        title: "5.5 SMS / Text-back",
        keywords: "sms text back missed call",
        content: (
          <div className="space-y-2">
            <H>Missed inbound (CSM hours)</H>
            <p>Text within 2 minutes:</p>
            <Q>"Hi, this is [name] at Home+ Air and Heat — I just missed your call. Want me to book you a window today? Reply here."</Q>
            <H>Rules</H>
            <UL items={[
              "Max 2 outbound texts / 24h without reply",
              "All texts via ServiceTitan number — never personal",
              "No emojis, no all-caps",
              "Post-visit thank-you + review requests are automated (do not send manually)",
            ]} />
          </div>
        ),
      },
    ],
  },
  {
    id: "post-booking",
    title: "Part 6 — Post-Booking",
    description: "Ticket standards, dispatch handoff, confirmation cadence",
    icon: CheckSquare,
    iconColor: TEAL,
    articles: [
      {
        title: "6.1 ServiceTitan Ticket Standards",
        keywords: "servicetitan ticket required fields",
        content: (
          <div className="space-y-2">
            <p>A ticket is dispatchable only if complete. Incomplete = wasted tech time.</p>
            <Table
              headers={["Field", "Rule"]}
              rows={[
                ["Customer name", "Verified + spelled"],
                ["Phone", "Best callback, tested"],
                ["Service address", "Full incl. unit/suite"],
                ["Access notes", "Gate code, dog, stairs, hours"],
                ["System type", "Specific subtype"],
                ["Symptom", "Customer words + your paraphrase"],
                ["Job type", "Repair / Install / Maint / Estimate"],
                ["Business unit", "Correct BU"],
                ["Membership", "Member / non / lapsed"],
                ["Lead source", "Verbatim (3.7)"],
                ["Diag fee posture", "$199 / $269 / waived"],
                ["Window", "2-hour slot"],
                ["Confirm text sent", "Must be YES"],
              ]}
            />
          </div>
        ),
      },
      {
        title: "6.2 Dispatch Handoff Checklist",
        keywords: "dispatch handoff checklist save",
        content: (
          <div className="space-y-2">
            <p>Before you save the ticket:</p>
            <UL items={[
              "☐ All 6.1 fields complete",
              "☐ Symptom is dispatchable (tech knows what to bring)",
              "☐ Address confirmed in-map",
              "☐ Access notes present",
              "☐ Correct business unit",
              "☐ Priority tag if emergency (2.4)",
              "☐ Confirmation text sent",
              "☐ Notes include: objections handled, membership pitched (Y/N + result), lead source verbatim",
            ]} />
            <p className="text-xs">Missing info while customer still on line? Get it now. Do NOT save incomplete "to fix later."</p>
          </div>
        ),
      },
      {
        title: "6.3 Customer Confirmation Cadence",
        keywords: "confirmation cadence text reminder survey review",
        content: (
          <Table
            headers={["Timing", "Touch", "Owner"]}
            rows={[
              ["At booking", "Confirm text + tech photo", "CSM (manual trigger)"],
              ["24h before", "Reminder + prep instructions", "Automated"],
              ["1h before window", "\"Tech on the way\" + ETA", "Automated (tech app)"],
              ["Day after", "Thank-you + survey", "Automated"],
              ["2d after (if score ≥ 4)", "Google review request", "Automated"],
            ]}
          />
        ),
      },
    ],
  },
  {
    id: "governance",
    title: "Part 7 — Governance",
    description: "Version control, onboarding, QA rubric, coaching cadence",
    icon: Settings,
    iconColor: RED,
    articles: [
      {
        title: "7.1 Version Control & Change Log",
        keywords: "version control change log document",
        content: (
          <div className="space-y-2">
            <UL items={[
              "Master SOP lives in ONE Google Doc — no forks",
              "Every change logged in table at top of doc",
              "Minor edits = version y bump (v1.1). Structural = version x bump (v2.0)",
              "Slack #csm-ops on every bump with 1-line summary",
            ]} />
            <p><strong>Owner:</strong> Blake (sole editor). Comments open to all.</p>
          </div>
        ),
      },
      {
        title: "7.2 Training & Onboarding Checklist",
        keywords: "training onboarding checklist new hire day week month",
        content: (
          <div className="space-y-2">
            <H>Day 1</H>
            <UL items={[
              "Read Parts 1–3 end-to-end",
              "Shadow 3 live calls with senior CSM",
              "Tour ST, phone, LSA dashboard, Posh log",
              "Set up accounts + extension",
              "Sign SOP acknowledgment",
            ]} />
            <H>Week 1</H>
            <UL items={[
              "Read Parts 4–7",
              "Take 5 supervised calls",
              "First 5 solo bookings reviewed same day",
              "Role-play all objection scripts (4.4)",
              "Emergency triage drill — 3 scenarios",
            ]} />
            <H>Month 1</H>
            <UL items={[
              "20 solo bookings scored against rubric",
              "First 1:1 coaching review",
              "Certify on all 5 channel playbooks",
              "Membership pitch rate ≥ 60% verified",
              "Signed off by Manager",
            ]} />
          </div>
        ),
      },
      {
        title: "7.3 QA Scoring Rubric",
        keywords: "qa scoring rubric weights checklist",
        content: (
          <div className="space-y-2">
            <p>Lives in-app at <code>/checklist</code> under the CSM rubric.</p>
            <Table
              headers={["Category", "Weight"]}
              rows={[
                ["Greeting & opening (2.1)", "5%"],
                ["Active listening (2.2)", "10%"],
                ["Emergency triage (2.4) — PASS/FAIL", "15%"],
                ["Intake completeness (Part 3)", "20%"],
                ["Booking execution (Part 4)", "20%"],
                ["Membership pitch (4.3)", "10%"],
                ["Confirmation read-back (4.5)", "10%"],
                ["Ticket quality (6.1)", "10%"],
              ]}
            />
            <p className="text-xs">Scoring 0/1/2 per item. Triage fail caps total at 60%.</p>
            <p className="text-xs"><strong>Cadence:</strong> Manager scores 3 calls/CSM/week. Reviewed in weekly 1:1.</p>
          </div>
        ),
      },
      {
        title: "7.4 Coaching Cadence",
        keywords: "coaching cadence 1:1 weekly monthly review",
        content: (
          <div className="space-y-2">
            <H>Weekly 1:1 (30 min)</H>
            <OL items={[
              "Review 3 scored calls (5 min each)",
              "AI coach summary from /checklist (5 min)",
              "One skill focus for next week (5 min)",
              "CSM raises blockers (5 min)",
            ]} />
            <H>Monthly team meeting (60 min)</H>
            <UL items={[
              "Aggregate KPI review",
              "Top 3 objection patterns → SOP update candidates",
              "Recognition: top booker, top pitcher, best save",
            ]} />
            <H>Quarterly SOP review (Blake + senior CSM, 90 min)</H>
            <UL items={[
              "Walk every section",
              "Retire dead scripts",
              "Add scripts for new patterns",
              "Version bump",
            ]} />
          </div>
        ),
      },
    ],
  },
];
