

# Knowledge Base for Customer Service & Dispatch Team

## Overview
Add a comprehensive Knowledge Base alongside the existing Dispatch Guide, accessible via a tabbed navigation. The KB covers 7 core topics that equip the team to handle any call confidently.

## Layout Approach
Add a tab bar at the top of the app with two tabs: **Guide** (existing 16 slides) and **Knowledge Base** (new expandable/accordion-based reference). Both share the same sidebar + header shell.

## Knowledge Base Sections

### 1. HVAC Systems 101
- Overview of each system type: Boilers, Furnaces, Air Conditioners, Heat Pumps, Mini Splits
- How each works (simple explanation)
- Common symptoms and what they likely mean
- Key questions to ask the caller for each system type
- System age thresholds (ties into the "<12 years" / ">12 years" job type logic)

### 2. Common Customer Questions (FAQ)
- Filter replacement frequency
- "Why is my bill so high?"
- Repair vs. replace decision factors
- Brands serviced
- How long repairs typically take
- What a diagnostic visit includes
- Seasonal prep tips to share with customers

### 3. Objection Handling & De-escalation
- Price objections ("That's too expensive") with rebuttals
- Competitor comparisons ("Someone else quoted less")
- Angry/upset customer de-escalation steps
- When and how to escalate to a manager
- Refund/credit request handling
- Tone and language best practices

### 4. ServiceTitan & Tools Guide
- Booking a job step-by-step
- Looking up customer history
- Tagging and categorizing calls
- Adding notes and follow-ups
- Using the dispatch board
- Common mistakes to avoid

### 5. Service Area & Logistics
- Nassau County coverage zones
- Suffolk County coverage zones
- Drive time expectations by zone
- Handling out-of-area requests
- Tech assignments and specializations
- Fully-booked day procedures

### 6. Membership & Upsell Program
- What the maintenance membership includes
- Membership pricing and tiers
- Benefits to highlight on calls
- When to pitch membership (natural conversation points)
- Upsell triggers during diagnostic/repair calls
- How to add membership in ServiceTitan

### 7. Policies & Guarantees
- 90-minute arrival guarantee details
- Satisfaction guarantee terms
- Warranty coverage by service type
- Refund and credit policies
- Cancellation and rescheduling rules
- After-hours and holiday policies
- No emergency surcharge policy

## Technical Details

### Files to Create

**`src/components/knowledge-base/KnowledgeBase.tsx`**
- Main KB page component
- Renders all 7 sections as expandable accordion groups
- Each section contains sub-topics as nested accordions
- Search/filter functionality that works across all KB content
- Respects the existing light/dark mode toggle

**`src/components/knowledge-base/kbData.tsx`**
- Structured data for all 7 sections
- Each section has: title, icon, description, and an array of articles
- Each article has: title, content (JSX), and search keywords

**`src/components/knowledge-base/KBSection.tsx`**
- Reusable accordion section component
- Icon + title header, expandable content area
- Styled to match existing guide design (dark bg, brand colors, rounded cards)

### Files to Modify

**`src/components/presentation/PresentationShell.tsx`**
- Add a tab bar below the header with two tabs: "Guide" and "Knowledge Base"
- Tab state controls which view renders in the main content area
- Sidebar updates: in Guide mode shows slide nav, in KB mode shows section nav
- Search works across both tabs (filters slides or KB articles depending on active tab)

**`src/pages/Index.tsx`**
- No route changes needed; the tab lives within the existing PresentationShell

### Design Approach
- Accordion-based layout using the existing Radix accordion components already installed
- Same color palette: dark background `hsl(0,0%,7%)`, brand orange/red/green accents
- Each section gets a distinct Lucide icon for quick scanning
- Content uses clean typography with bullet points, highlight boxes for key info, and warning callouts for critical policies
- Mobile view: same accordion layout, optimized for touch

### Proposed Section Icons (Lucide)
1. HVAC Systems 101 -- `Thermometer`
2. Customer FAQ -- `MessageCircleQuestion`
3. Objection Handling -- `ShieldAlert`
4. ServiceTitan Guide -- `Monitor`
5. Service Area -- `MapPin`
6. Membership & Upsell -- `Crown`
7. Policies & Guarantees -- `FileCheck`

