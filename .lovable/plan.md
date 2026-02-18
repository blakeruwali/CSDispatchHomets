
# Customer Service Dispatcher Guide Slides

## Overview

Add 5 new slides to the front of the deck (positions 1-5) that serve as a dispatcher's quick-reference guide for scheduling HVAC service calls. All 17 existing investor slides shift to positions 6-22 -- nothing gets deleted.

## New Slides (in order)

### Slide 1: Dispatcher Guide — Title/Cover
A branded cover slide labeled "Customer Service & Dispatch Guide" with the Homets logo, a subtitle like "Quick Reference for Scheduling Calls," and the phone number prominently displayed.

### Slide 2: Type of Service
Three clear categories, each with an icon, short description, and common scenarios:
- **Repair** -- System not working, strange noises, leaks, no heat/cool
- **Install** -- New system, replacement of old unit, new construction
- **Maintenance** -- Seasonal tune-up, filter change, annual inspection

Each card includes example customer phrases a dispatcher might hear (e.g., "My furnace won't turn on" maps to Repair).

### Slide 3: System Types
A visual grid of the 5 system types the company services:
- **Boilers** -- Hot water/steam heating systems
- **Furnaces** -- Forced air gas/electric heating
- **Air Conditioners (AC)** -- Central and window cooling units
- **Heat Pumps** -- Dual heating/cooling electric systems
- **Mini Splits** -- Ductless heating/cooling zones

Each with an icon and 2-3 bullet points on what to ask the customer to identify the system.

### Slide 4: Diagnostic & Service Fees
A clean fee table covering:
- Standard diagnostic/service call fee
- After-hours/emergency surcharge (if any)
- What's included in the diagnostic visit
- How fees apply toward repair cost
- A note on the 90-minute response guarantee

### Slide 5: Residential vs. Commercial
A side-by-side comparison:
- **Residential**: Typical home systems, standard pricing, scheduling priority rules
- **Commercial**: Larger systems, different pricing tiers, multi-unit considerations, property manager protocols
- Key questions dispatchers should ask to determine residential vs. commercial (e.g., "Is this a home or a business?", "How many units?")

## Technical Details

**File modified:** `src/components/presentation/slideData.tsx`
- Add 5 new exported slide components (DispatchTitleSlide, ServiceTypeSlide, SystemTypeSlide, DiagnosticFeesSlide, ResidentialCommercialSlide)
- Uses existing design patterns: dark background (hsl(0,0%,7%)), brand color constants (ORANGE, RED, WARM, GREEN), rounded-2xl cards, Lucide icons
- Update the `slides` export array to prepend the 5 new slides, pushing all 17 existing slides to indices 5-21

**No other files change** -- PresentationShell, ScaledSlide, and MobilePresentation remain untouched.

## Slide Count
- Before: 17 slides (investor deck)
- After: 22 slides (5 dispatcher guide + 17 investor deck)
