---
id: techeo.web.design
title: Design System — Brand, Tokens, Components, Photography
company: techeo
owner: blake
status: draft
version: 1
last_reviewed: 2026-09-25
review_cadence_days: 30
tags: [website, design-system, brand, wordmark, typography, color, tokens, layout, components, accessibility, wcag, icons, diagrams, photography, motion]
related: [techeo.web.brief, techeo.web.strategy, techeo.web.ia, techeo.web.pages-v1, techeo.web.pages-later, techeo.web.tech, techeo.web.search, techeo.web.conversion, techeo.web.analytics, techeo.web.compliance, techeo.web.build, techeo.web.content, techeo.positioning, techeo.plan90, techeo.legal, techeo.guardrails]
order: 5
---

# Design System — Brand, Tokens, Components, Photography

**techeo.com should look like the manual for a system that works: ink on paper, one yellow for the action, and every number printed with its window and source. If a competitor's logo could go on a section and nothing else would need to change, the design has failed along with the copy.**

## Scope and rules {#scope}

This document owns the visual system of techeo.com: brand principles, the wordmark and the icons derived from it, type, color, layout, and every component's design, states, and accessibility. It also owns icons and diagrams, photography, motion, and the code tokens. Everything else belongs to the owner named in the brief's `#ownership` table, and this document refers to that owner by number.

1. **Tokens only.** A pull request that puts a raw hex value, pixel size, or spacing value in a component fails review. Every value this document specifies for a component maps to a named token in #tokens. Component CSS may combine tokens with `calc()` and viewport units, as the mobile menu's `max-height: calc(100dvh - var(--header-h))` does. A literal px, rem, or hex value inside such an expression still fails.
2. **One source.** Tokens live once, in `src/styles/global.css`, the stylesheet `06` names: static tokens in its `@theme` block, and spacing, breakpoint overrides, and tokens Tailwind has no namespace for as `:root` properties beside it. Tailwind 4 generates its utilities from them (#tokens).
3. **Names.** Component names in `code` are the Astro component names. They replace the functional names in `03` and `04`, as `04` allows, and #c-matrix maps one set to the other.
4. **WCAG 2.2 AA** is the floor for every component (D10). `10` audits against it.

## Brand principles: the operator's field manual {#principles}

A field manual is written for someone doing the work, under time pressure, who needs the answer and the procedure rather than a mood. D10 asks for utilitarian, high-contrast, and numbers-forward.

| # | Principle | Do | Don't |
|---|---|---|---|
| 1 | **The number is the headline.** | Set [HOMETS_BOOKING_RATE_TO] at display size, with its window underneath. Put "$1,500 · 7 business days" under the hero button. | Put an illustration where a figure belongs, or an adjective ("proven") with no figure beside it. |
| 2 | **Every figure carries its papers.** | Put the window and source beside every measured figure. Put a dashed EXAMPLE frame around every made-up figure (#c-callout). | Put the window in a footnote three screens away, or style example figures like measured ones. |
| 3 | **Show the system, not a picture of success.** | Show the formula block, the weighted workstreams, a verbatim standard, and redacted report pages. | Use rockets, gears, funnels, rising charts, or dashboard mockups. |
| 4 | **One signal color, and it means "act."** | Fill the button that books or reserves with yellow. The Booking Engine tag is yellow too, because Booking comes first. #color lists every place yellow may appear. | Use yellow headings, yellow bands on a page outside a `panel`, yellow anywhere #color doesn't list, or yellow text on paper (1.29:1 contrast). |
| 5 | **Structure you can see.** | Use numbered sections, 2px rules, mono labels (WE MEASURE, SOURCE), and real table headers. | Use soft shadows, pill shapes, gradients, or glass effects. |
| 6 | **Real or nothing.** | Show Blake's portrait, the Homets desk, a truck in the Homets yard, and a redacted board. | Use stock technicians, AI-generated vans or rooms, or a smiling headset model (D9). |
| 7 | **Readable in a truck cab.** | Use body text of 17px or more on phones, ink on paper (16.61:1), and one column below 640px. | Put information in hover-only states, or use light gray text or thin weights. |

### Tropes to avoid {#tropes}

- **The trades-agency look:**
  - flame, snowflake, thermometer, and wrench-and-lightning imagery
  - red-versus-blue heroes, or the technician in front of a van with arms crossed
  - "Dominate your market" over a map of pins
  - counters, logo walls, "as seen in," badges, and star widgets
  - carousels, video backgrounds, parallax, and everything on D14's list
- **The SaaS look:** gradient meshes, glassmorphism, 3D blobs, isometric illustrations, dashboard mockups, and AI sparkle icons.
- **Neubrutalism,** which this palette sits close to: hard offset shadows, rotated stickers, and emoji.
- **Homets' orange.** The Homets app's primary color is `hsl(15 90% 55%)`. It appears nowhere on techeo.com: separate companies look separate (D4), so no prospect reads Homets' brand as vouching for Techeo.

**Visual swap test (extends `01` R4).** Replace the wordmark on a full-page phone screenshot of `/` with a competitor agency's name, and show it to two contractors. **Done when** neither says "that looks like them" and neither points to a trope on this list. Any section they point to gets redesigned.

## Wordmark, favicon, and share image {#wordmark}

### Wordmark

v1 has no logo project (D10, D14). The wordmark is the word itself, set once and frozen as an outline.

| Property | Spec |
|---|---|
| Text | `techeo`, always lowercase. Running text says "Techeo." The mark itself never reads "TECHEO" or "TechEO." |
| Typeface | IBM Plex Mono SemiBold (600) from `@ibm/plex-mono` 2.5.0, with tracking 0. In a mono face every letter gets an equal cell, so the six letters read as a label on a data plate, not a startup logo. |
| Construction | Outline the text once to `wordmark.svg`, with `fill="currentColor"` and the viewBox tight to the ink. Never render the mark as live text, so it looks the same before fonts load. The font's license (OFL 1.1) permits use in a logo; keep Plex's `license.txt` in the repo. |
| Colors | Ink on paper or white, paper on ink, or ink on yellow. No other combinations. |
| Clear space | 1x on every side, where x is the rendered x-height (0.516 em, about 11px at header size). |
| Size | At least 64 CSS px wide on screen and 18 mm in print. Header: 80px wide below 1024px, 96px from 1024px (measured at 79.2 and 93.6px). Footer: 96px. Share image: 240px. |
| Additions | None in v1: no tagline, no icon, no ™ or ®. `10` decides trademark notices after clearance. |
| Accessible name | `<a href="/" aria-label="Techeo home">` with the SVG `aria-hidden`. The name contains the visible word, which satisfies SC 2.5.3. |

**Files.** Masters live in Techeo's Drive (D4). The files are `wordmark.svg`, `wordmark-padded.svg` (includes the clear space), ink and paper PNGs at 1024 wide, and `logo-square-512.png` for `07`'s Organization `logo`. Where each file goes in the repo depends on whether it needs a fixed URL, because Astro fingerprints everything under `src/assets/`:

- `public/brand/logo-square-512.png`, so it is served at `https://techeo.com/brand/logo-square-512.png`, the URL `07`'s structured data uses.
- `public/` for the favicons and `site.webmanifest`; `public/og/` for the share images (`06`'s repository layout).
- `src/assets/brand/` for `wordmark.svg` only, which components import.
- The padded SVG and the 1024px PNGs stay in Drive, for press and partners.

`07` checks Google's current minimum logo size, which is 112 × 112 as of this writing.

### Favicon and app icons

The icon is the wordmark's "t" in ink, centered on a yellow square. Yellow is used here, off the page, because a browser tab needs a mark that still reads at 16px. The favicon and app icons are on #color's list of yellow uses. They are one of its two exceptions to the ink-border rule, because they sit in browser chrome, not on paper or surface.

| File | Spec |
|---|---|
| `icon.svg` | A full-bleed square in `#FFD400`, no radius. The ink "t" outline stands at 72% of the square's height, nudged one unit left because the crossbar weights it right. |
| `favicon.ico` | 16px and 32px sizes. At 16px, hint the stem by hand to exactly 2px, on whole pixels. |
| `icon-96.png` | Google Search requires a square favicon of at least 8 × 8 px and recommends one larger than 48 × 48; 96 × 96 meets that. Recheck Search Central's guidance at build time. |
| `apple-touch-icon.png` | 180 × 180, opaque. iOS rounds the corners itself. |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | For the manifest. The maskable version keeps the glyph inside the central 80% safe zone. |

**Head tags** (`06` places them):

- `rel="icon"` links for the `.ico`, the SVG, and the 96px PNG
- `rel="apple-touch-icon"`
- `rel="manifest"`, pointing to `/site.webmanifest`
- `theme-color` set to `#F5F3ED`

The manifest sets `name` to "Techeo," `display` to `browser`, and both colors to `#F5F3ED`.

**Done when** the icon reads as a "t" at 16px in Chrome, Safari, and Firefox tab strips, in light and dark browser themes, and a live URL Inspection test of `/favicon.ico` and `/icon-96.png` returns 200 and is not blocked by robots.txt. Whether the favicon appears in Google results is checked separately, weeks after launch, because Google fetches favicons on its own schedule.

### Share image (1200 × 630)

One template. v1 ships three images from it. From v1.1, the build generates one per article.

- **Ground:** paper, with an 8px yellow bar along the bottom edge and a 2px ink rule along the bar's top edge, per #color's yellow rule.
- **Safe area:** keep all text inside x 64–1136 and y 56–574, so a 2:1 crop loses nothing.
- **Top row:** the wordmark in ink, 240px wide, at the left. At the right, one label in Plex Mono 600 at 22px, uppercase, ink-2 (for example, "FOR HVAC AND PLUMBING CONTRACTORS").
- **Headline:** the page's H1 from `03`, in Public Sans 700 at 64px, line height 1.05, tracking −0.015em. Maximum 720px wide and three lines; `03` shortens any H1 that runs longer.
- **Right column, x 800–1136:**
  - Default and article images: Blake's portrait, 336 × 420, black-and-white, with a 2px ink border.
  - Audit and teardown images: a 2px ink box in Plex Mono 600 at 26px, carrying D6's offer name. The audit box reads "ENGINE AUDIT / $1,500 / 7 BUSINESS DAYS." The teardown box reads "BOOKING RATE / TEARDOWN / FREE / 3 CALLS," four lines, each within the 336px column. `07` aligns the teardown image's `og:image:alt` with the offer name.
- **Bottom left:** "techeo.com" in Plex Mono at 24px.

**No Homets figures on any share image.** A shared image travels without its window, so a figure on it would fail D7 as soon as someone shared it. The images also show no customers, employees, or trucks.

**Files:** `og-default.png`, `og-audit.png`, and `og-teardown.png`, each an 8-bit sRGB PNG, opaque, 250 KB or less. `06` picks the generator for the v1.1 article images; Satori with resvg is the common route for Astro, to be verified on the installed version. `07` owns the meta tags and `og:image:alt`.

## Typography {#typography}

### Families

| Family | License | Role | Why |
|---|---|---|---|
| **Public Sans** v2.001 (USWDS) | SIL OFL 1.1 | Everything people read: headings, body, buttons, forms | The US Web Design System built it for plain, dense public-service interfaces, which makes it the nearest thing type has to a field manual. It is neutral without being a SaaS default like Inter. Its files include tabular figures (`tnum`), which we confirmed. |
| **IBM Plex Mono** 2.5.0 | SIL OFL 1.1 | The wordmark, stat values, labels, formulas, and source and window lines | Every character, digits included, takes the same width, and it has the look of an engineering document. Unlike Public Sans, it includes → (U+2192). Public Sans's full font has −, ≤, and ≥, but the Fontsource `latin` subset loaded here keeps only − (U+2212) and drops ≤ and ≥. |

Both are self-hosted as WOFF2, at the paths and with the hashed filenames `06` sets. The site makes no requests to Google Fonts or any other font CDN, at runtime or during the build.

### Font files loaded: three, no more

`06` #performance owns how fonts load, and its budget for every template is at most two families, three files, 70 KB, and two preloads. Lighthouse CI asserts it. These three files fit inside it.

| File | Source | Size (measured, Sep 2026) | Preloaded |
|---|---|---|---|
| Public Sans, variable, wght 400–700, roman | `@fontsource-variable/public-sans` 5.3.0, `latin-wght-normal` (wght 100–900, 26.8 KB), instanced to 400–700 with fontTools | 24.3 KB | Yes: it is both the H1 face and the body face (`06`) |
| IBM Plex Mono 400 | `@ibm/plex-mono` 2.5.0 `complete/woff2`, custom subset | 11.8 KB | No |
| IBM Plex Mono 600 | same | 12.0 KB | No |

That is 48.1 KB if every file loads, of which 24.3 KB is preloaded. The variable file serves weights 400 and 700 from one request and counts as one file under `06`'s rule. The instanced file keeps `tnum` and U+2212.

**No italics.** The Public Sans italic is not loaded, so nothing may depend on it: `em, cite { font-style: normal; }` sets both upright, and emphasis is carried by weight 700. `html { font-synthesis: none }` stops the browser from faking a missing bold or italic.

**The font build.** In September 2026, neither family's Fontsource build (which follows Google Fonts) contained U+2192 (→). IBM's complete Plex Mono file does. These commands produced the sizes above:

```sh
fonttools varLib.instancer public-sans-latin-wght-normal.woff2 wght=400:700 \
  -o public-sans-latin-wght-400-700.woff2

pyftsubset IBMPlexMono-Regular.woff2 \
  --unicodes="U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-2019,U+201C-201D,U+2022,U+2026,U+2192,U+2212,U+2264-2265" \
  --layout-features="kern,ccmp" --flavor=woff2 --output-file=ibm-plex-mono-400.woff2

pyftsubset IBMPlexMono-SemiBold.woff2 \
  --unicodes="U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-2019,U+201C-201D,U+2022,U+2026,U+2192,U+2212,U+2264-2265" \
  --layout-features="kern,ccmp" --flavor=woff2 --output-file=ibm-plex-mono-600.woff2
```

The Plex subset includes ≤ and ≥ (U+2264–2265), matching `06` #performance's subset list.

**Public Sans has no arrow glyph in any version we checked,** and the subset loaded here has no ≤ or ≥. Arrows inside Public Sans text use the `Arrow` component, which is Lucide's `arrow-right` as inline SVG with `aria-hidden`. In Public Sans text, write "at most" or "or less" in words. The CI build fails if U+2192, U+2264, or U+2265 appears outside an element set in Plex Mono (the `font-mono`, `type-display`, `type-data`, or `type-label` class).

**Loading.** All three files use `font-display: swap`. The metric-matched fallbacks (`"Public Sans Fallback"` on Arial, `"IBM Plex Mono Fallback"` on Courier New) must be generated by a tool, never guessed. Astro's Fonts API, stable since Astro 6.0 (March 2026), generates them from these three local files; `fontaine` is the alternative. `06` chooses. **Done when** the font swap adds less than 0.01 to CLS on `/` in Lighthouse's default mobile run (412 × 823) and in a custom run at 375 × 667 (`--screenEmulation.mobile --screenEmulation.width=375 --screenEmulation.height=667 --screenEmulation.deviceScaleFactor=2`).

### Type scale

The base size is 16px (1rem). Sizes step up at breakpoints and are never set in `vw`, because `vw` type ignores the browser's text-size setting (SC 1.4.4).

| Token | Use | < 640px | 640–1023px | ≥ 1024px | Line height | Face | Tracking |
|---|---|---|---|---|---|---|---|
| `display` | Stat values, calculator result | 40px · 2.5rem | 48px · 3rem | 56px · 3.5rem | 1.0 | Plex Mono 600 | −0.02em |
| `h1` | Page H1 | 32px · 2rem | 40px · 2.5rem | 52px · 3.25rem | 1.08; 1.05 from 1024px | Public Sans 700 | −0.015em |
| `h2` | Section H2 | 26px · 1.625rem | 30px · 1.875rem | 36px · 2.25rem | 1.15; 1.1 from 1024px | Public Sans 700 | −0.01em |
| `h3` | Cards, steps, FAQ questions | 20px · 1.25rem | 20px | 22px · 1.375rem | 1.3 | Public Sans 700 | 0 |
| `lead` | Subheads, intros | 17px · 1.0625rem | 19px · 1.1875rem | 21px · 1.3125rem | 1.45 | Public Sans 400 | 0 |
| `body` | Paragraphs, lists, inputs | 17px · 1.0625rem | 17px | 18px · 1.125rem | 1.55 | Public Sans 400 | 0 |
| `small` | Help text, captions, microcopy | 15px · 0.9375rem | 15px | 15px | 1.45 | Public Sans 400 | 0 |
| `data` | Formulas, "We measure," windows | 15px · 0.9375rem | 15px | 16px · 1rem | 1.5 | Plex Mono 400 | 0 |
| `label` | Eyebrows, mono labels | 12px · 0.75rem | 12px | 13px · 0.8125rem | 1.35 | Plex Mono 600, uppercase | +0.04em |
| `button` | Buttons, nav | 16px · 1rem | 16px | 16px | 1.2 | Public Sans 700 | 0 |

- **Lead matches body on phones,** so the hero fits the first screen (#first-screen). At 18px, `03`'s subhead would wrap to four lines at 375px wide instead of three.
- **Inputs are 17px or larger,** so iOS Safari never zooms in on focus. It zooms on inputs smaller than 16px.
- **Measure:** 68ch maximum for prose (`--container-prose`, 42rem); 18ch for the H1 from 1024px, which breaks the home H1 onto two lines; 28ch for H2s; 60ch for leads.
- **No all-caps headings, and no centered or justified text,** including in heroes and CTA panels.

### Numbers and units {#numbers}

- **Tabular figures everywhere:** `html { font-variant-numeric: lining-nums tabular-nums }`. Public Sans figures are proportional by default: its "1" is 814 units wide and its "8" is 1,295. Without this setting, columns and stat values shift.
- **Money:** "$1,500" and "$3,500/month." The dollar sign sits on the baseline at full size, with no ".00" and commas for thousands.
- **Percentages:** no space before the sign ("52%"). A change in a rate is counted in **points**: 52% to 71% is 19 points, never 19%.
- **From → to:** set in Plex Mono with a space on each side of the arrow. Mark it up as `<span aria-hidden="true">→</span><span class="sr-only">to</span>`, so screen readers say "52% to 71%."
- **Ranges:** an en dash with no spaces ("12–18"). Where `03` writes "to" in words, keep the words.
- **Formulas:** ×, −, +, and = with a space on each side. The minus sign is always U+2212.
- **Units stay with their figures:** the `Num` component applies `white-space: nowrap`, so "4 min" or "$3,500/month" never breaks across lines.
- **No animated or counting numbers,** anywhere (D7).

## Color {#color}

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--color-paper` | `#F5F3ED` | **Background.** The page, in a warm off-white. |
| `--color-surface` | `#FFFFFF` | **Surface.** Cards, inputs, panels. |
| `--color-sunken` | `#EAE7DE` | Table heads, the formula block, secondary-button hover |
| `--color-ink` | `#15140F` | **Primary text.** Also rules and borders that carry meaning. |
| `--color-ink-2` | `#4A483F` | **Secondary text.** Help text, captions, windows. |
| `--color-hairline` | `#D3CFC3` | **Border**, decorative only. Row dividers. |
| `--color-control` | `#6F6C62` | Input and select borders, dashed frames. Never used for text. |
| `--color-accent` · `-hover` | `#FFD400` · `#EDBF00` | **Accent, accent hover.** Primary-button fill, the Booking Engine tag. |
| `--color-focus` · `-on-ink` | `#15140F` · `#FFD400` | **Focus ring**, on light surfaces and on ink |
| `--color-success` · `-bg` | `#1D6A3A` · `#E3F0E6` | **Success.** "Sent." confirmations. |
| `--color-warning` · `-bg` | `#7A4C00` · `#FFF1C7` | **Warning.** Notices and decline outcomes. |
| `--color-danger` · `-bg` | `#B3261E` · `#FBE7E5` | **Danger.** Validation errors only; never "Not a fit" or a falling metric. |
| `--color-banner-bg` · `-text` · `-link` | `#15140F` · `#F5F3ED` · `#FFD400` | **The WAITLIST banner** |
| `--color-on-ink` · `-2` | `#F5F3ED` · `#BDB9AC` | Footer text, and the footer legal line |

### Contrast, computed

**Method.**

1. For each 8-bit channel, take c/255. If the result is 0.04045 or less, divide it by 12.92; otherwise compute ((c + 0.055)/1.055)^2.4. WCAG's older threshold of 0.03928 gives the same results for 8-bit values.
2. Compute luminance: L = 0.2126 R + 0.7152 G + 0.0722 B.
3. The contrast ratio is (L_lighter + 0.05)/(L_darker + 0.05), **truncated**, not rounded, to two decimals.

Thresholds: 4.5:1 for text; 3:1 for large text (24px, or 18.66px bold), UI components, and focus rings (SC 1.4.3, SC 1.4.11).

| # | Pair | Ratio | Text (4.5) | Large and UI (3.0) | Used for |
|---|---|---|---|---|---|
| 1 | ink on paper | 16.61 | Pass | Pass | Body, headings, rules, focus ring |
| 2 | ink on surface | 18.43 | Pass | Pass | Cards, inputs, panels |
| 3 | ink on sunken | 14.91 | Pass | Pass | Table heads, formula block |
| 4 | ink-2 on paper | 8.26 | Pass | Pass | Help text, captions, windows |
| 5 | ink-2 on surface | 9.17 | Pass | Pass | Help text in cards |
| 6 | ink-2 on sunken | 7.41 | Pass | Pass | Disabled label; secondary text in heads |
| 7 | ink on accent | 12.88 | Pass | Pass | Primary button, Booking tag, selection |
| 8 | ink on accent-hover | 10.58 | Pass | Pass | Primary button, hover and press |
| 9 | on-ink on ink | 16.61 | Pass | Pass | Banner text, footer text |
| 10 | accent on ink | 12.88 | Pass | Pass | Banner link; focus ring on ink |
| 11 | on-ink-2 on ink | 9.39 | Pass | Pass | Footer legal line |
| 12 | success on surface | 6.61 | Pass | Pass | Inline "Sent." |
| 13 | success on success-bg | 5.62 | Pass | Pass | Success block |
| 14 | warning on warning-bg | 6.52 | Pass | Pass | Notice label and border |
| 15 | ink on warning-bg | 16.38 | Pass | Pass | Notice body |
| 16 | danger on surface | 6.53 | Pass | Pass | Error text; error border on inputs |
| 17 | danger on paper | 5.89 | Pass | Pass | Error text outside cards |
| 18 | danger on danger-bg | 5.49 | Pass | Pass | Error summary heading |
| 19 | ink on danger-bg | 15.51 | Pass | Pass | Error summary links |
| 20 | control on surface | 5.25 | n/a (border) | Pass | Input border against its fill |
| 21 | control on paper | 4.73 | n/a (border) | Pass | Input border against the page |

**Banned pairs:**

| Pair | Ratio | Result |
|---|---|---|
| accent on paper | 1.29 | Fails |
| accent on surface | 1.43 | Fails |
| hairline on paper | 1.40 | Fails |
| control on sunken | 4.24 | Passes for UI, fails for text |

Rules follow from these.

- **Where yellow appears.** This list is exhaustive: the primary-button fill (and its compact header form), the skip link, the Booking Engine tag and diagram node, the `panel` top band, `::selection`, the favicon and app icons, and the share-image bottom bar. On ink, yellow also appears as the banner link and the focus ring (contrast row 10, 12.88:1). Anywhere else is a #tropes hit.
- **On paper and surface, yellow is never text and never an edge by itself.** Any yellow fill with an edge on paper or surface carries a 2px ink border along that edge. That covers the buttons, the skip link, the Booking tag, the diagram node, the rule under the `panel` band, and the rule over the share-image bar. Two exceptions: `::selection`, which the browser draws behind ink text, and the favicon and app icons, which sit in browser chrome.
- **Hairlines never form the only edge of a control.**

### Light only, for v1 and v2

We ship one theme, light, for four reasons:

- **The direction:** the field-manual look is ink on paper.
- **Glare:** owners read in trucks and outdoors, and dark text on a light ground holds up better in glare. This is an unmeasured assumption.
- **Cost:** a second theme doubles the contrast table, the photo treatment, the share images, and every QA pass, inside a 10–12-hour week (D15).
- **Compliance:** WCAG does not require a dark theme.

Instead:

1. **Set `color-scheme: only light`**, as a CSS property and a meta tag, so browsers that honor it don't auto-darken the page. Screenshot the result for `10` in Chrome for Android with auto-dark on and in Samsung Internet's dark mode, which may darken pages anyway.
2. **Support forced colors in full.** Borders map to `CanvasText` or `ButtonText`, focus rings to `Highlight`, and SVG to `currentColor`. Yellow fills vanish in that mode, so nothing may depend on them.

Revisit at v3 only if `09` tracks `prefers-color-scheme` and more than a third of visitors prefer dark. That threshold is a default, not a benchmark.

## Layout {#layout}

### Breakpoints

The base styles are the phone layout. Each breakpoint adds to it.

| Name | Min width | What changes |
|---|---|---|
| base | 320px | One column; compact header CTA; Call as an icon; 16px gutters |
| `xs` | **440px** | Full CTA label; Call as icon plus text; banner at 15px |
| `sm` | 640px | 8-column grid; two-up leaks, fit lists, and photos; buttons at their natural width |
| `lg` | 1024px | 12-column grid; desktop header; section nav row removed; ladder in a row |
| `xl` | 1280px | The container is at its 1,200px maximum, which it reaches at 1264px (1,200 + two 32px margins) |

**Why 440px, not `02`'s default of 400px.** `02` allows a change as long as its tests pass at 320px and 1280px. Measured with the real fonts, the full-label header needs about 376px: wordmark 79, Call 81, "Reserve an audit slot" button 192, gaps 24. A 400px screen leaves only 368px inside its margins, while a 440px screen leaves 408px. The compact header needs about 267px of the 288px available at 320px.

### Grid, containers, spacing

| Tier | Columns | Gap | Side margin |
|---|---|---|---|
| < 640px | 4 | 16px | 16px |
| 640–1023px | 8 | 24px | 24px |
| ≥ 1024px | 12 | 24px | 32px |

- **Containers:**
  - `--container-wide` is 75rem, for grids, the header, and the footer.
  - `--container-prose` is 42rem, for letters, legal pages, articles, and answers.
  - Content is left-aligned to the wide container. Space to the right of prose stays empty.
- **Radius:** 0 on containers, 2px on buttons and inputs.
- **Borders:** 2px ink for rules and panels, 1px ink for boxes, and 1px hairline for dividers.
- **Spacing scale:** base-4, using only 0, 4, 8, 12, 16, 24, 32, 48, 64, and 96px. These are Tailwind's `0 1 2 3 4 6 8 12 16 24`. Three fixed component sizes join them: 40px (`10`, the Booking tag), 44px (`11`, targets), and 56px (`14`, FAQ summaries). #tokens clears Tailwind's default spacing and declares only these, so an off-scale class such as `p-5` does not compile.

| Token | < 640 | 640–1023 | ≥ 1024 | Use |
|---|---|---|---|---|
| `--space-section` | 48 | 64 | 96 | Top padding of every section |
| `--space-block` | 32 | 32 | 48 | Between a section's intro and its content |
| `--space-stack` | 24 | 24 | 24 | Between list items, form groups, and blocks |
| `--space-tight` | 8 | 8 | 8 | From a label to its control, and from a label line to its H2 |
| `--space-inset` | 16 | 24 | 32 | Padding inside boxes and panels |

**Section rhythm.** On `/`, every section after the hero opens with a `SectionHeader` (#c-section-header). Sections never alternate background colors; rules separate them, the way chapters are separated in a manual. The banner and the footer are the only full-bleed color bands.

### Touch targets

- **Minimum.** Every target is at least 24 × 24 CSS px (SC 2.5.8, AA). Two exceptions apply, as the SC allows: links inside sentences, and undersized targets spaced so that a 24px-diameter circle centered on each one intersects no other target and no other undersized target's circle.
- **Primary actions and navigation are at least 44 × 44.** Buttons are 48px tall. The header CTA, nav links, the Call link, menu rows, and FAQ summaries are 44px or taller.
- **Checkboxes and radios** are 24px, inside label rows at least 44px tall.
- **No dragging and no sliders** (SC 2.5.7).
- **Short viewports.** When the viewport is 400px tall or less (a landscape phone, or 400% zoom), the header stops being sticky so it can't cover most of the screen. The on-screen keyboard hides about half a phone's screen without changing the height this rule reads, so the header also stops being sticky while a text control has focus on a touch screen (#c-forms-phone).

### First-screen budget, 375 × 667 {#first-screen}

`01` #arrival-paths ranks what the first screen of `/` shows. Its items 1–4 must be visible in the smallest first screen this document defines, which is a 375 × 667 phone in iOS Safari with its toolbars. Those items are the WAITLIST banner, the H1, the operator line with the portrait, and claim 3 (`03`'s account line). `03` adds that the 375 × 667 frame shows the primary CTA in both states, and that Blake's name, Homets, and the exclusion radius are visible without scrolling. The line counts below come from word-wrap runs with the real font metrics on a 343px column.

| Block | px |
|---|---|
| Season banner, WAITLIST only (14px/20px, two lines, 8px padding) | 56 |
| Header bar + section nav row | 56 + 44 |
| Hero top padding + eyebrow (one line) + gap | 16 + 16 + 8 |
| H1 (32px/1.08, two lines) + gap | 69 + 12 |
| Subhead (`lead` at 17px/1.45, three lines) + gap | 74 + 16 |
| Operator line beside the 48px chip (`body` 17px/1.55 on a 287px column, four lines) + gap | 105 + 8 |
| Account line (`body`, two lines) + gap | 53 + 16 |
| Primary button | 48 |
| **Total** | **597 in WAITLIST · 541 in OPEN** |

The account line is the last of `01`'s four required items. It ends at **533px in WAITLIST and 477px in OPEN**, inside Safari's roughly 550px.

**Two limits on `03`'s hero copy for `/`.** The budget needs both. With only the eyebrow change, the account line ends at 558px; with only the subhead change, at 549px. Safari shows about 550px.

- **The eyebrow fits on one line at 343px:** 44 characters at most. `label` is Plex Mono, so every character takes 7.68px at 12px (a 0.6em advance plus 0.04em tracking). `03`'s eyebrow, "For residential HVAC and plumbing shops," is 39 characters (300px) and fits.
- **The subhead fits on three lines at 343px,** which allows about 115 characters. Check it with a wrap run on a 335px column, so rendering differences can't add a fourth line. `03`'s subhead is 113 characters and takes three lines.

**Result with `03`'s current hero copy:** the account line ends at 533px in WAITLIST and 477px in OPEN, so `01`'s item 4 holds in iOS Safari and the #first-screen test passes. Any change to the eyebrow or subhead is re-measured against the two limits above.

Moving `SectionNav` below the hero on `/` would save 44px instead. `02` #chrome places the section row directly after the header, though, so this document doesn't use that option.

**Done when** a 375 × 667 screenshot from Chrome DevTools shows the account line and the whole primary button in both states, with real token values. A screenshot from a real iPhone in current iOS Safari must also be filed for both states. It shows the banner (WAITLIST only), the H1, the operator line with the portrait chip, and the account line, all in full.

**Known limit:** iOS Safari shows about 550px on a 375 × 667 phone (verify on a device). There the primary button falls about 47px below the fold in WAITLIST, which `01` allows (item 5). In OPEN it clears the fold by only about 9px, so some devices may cut it off. `01`'s items 1–4 stay visible in both states, and the sticky header CTA stays on screen (open question 9).

## Components {#components}

### Shared rules {#c-shared}

| Container | Look | For |
|---|---|---|
| `rule` | 2px ink top rule, 16px above the content, no box | List items: leaks, promises, disclosures, ladder steps on phones, FAQ items |
| `box` | Surface fill, 1px ink border, `--space-inset` padding | Self-contained modules: engine cards, stat tiles, the formula, the calculator, the fact strip, table scroll regions |
| `panel` | Surface fill, 2px ink border, and a 6px (`--border-band`) accent band inside the top edge with a 2px ink rule under it | Places the visitor acts: offer panel, closing CTA, `SeasonCta`, article CTA. At most one per section. |

| State | Rule for every component unless it says otherwise |
|---|---|
| hover | Applies only inside `@media (hover: hover)`. Never carries information, and never changes layout: no border-width or size changes. |
| focus-visible | `outline: 3px solid var(--color-focus); outline-offset: 2px`. Uses `--color-focus-on-ink` on ink backgrounds. Never removed, and never hidden under the sticky header (`02` scroll padding; #c-forms-phone while the keyboard is open; SC 2.4.11). Contrast: 16.61:1 on paper, 12.88:1 on ink. |
| active | Buttons press instantly with `translateY(1px)`. No ripple. |
| disabled | Avoid it. Never disable a submit button to signal an incomplete form. If unavoidable: `aria-disabled="true"`, sunken fill, ink-2 text (7.41:1), a 2px dashed control border. |
| loading | `03`'s loading label; the button's width locked; `aria-busy="true"` on the form; no spinner. This needs the small script `08` and `06` define. Without JavaScript, the browser's own progress indicator is the loading state, and the endpoint rejects duplicate posts (`06`). |
| error | A 2px danger border plus a text message (#c-validation). Color is never the only signal. |

### Skip link and header {#c-header}

**`SkipLink`:**

- "Skip to content" (`03`), linking to `<main id="main" tabindex="-1">`. It is the first focusable element on every page.
- Moved off-screen with `transform` until it receives focus. On focus it appears 8px from the top-left corner, as a 44px accent button with a 2px ink border. SC 2.4.1.

**`SiteHeader`:**

- A sticky bar: paper background, 2px ink bottom border, height `--header-h` (56px, or 64px from 1024px).
- Contents, left to right: the wordmark link; from 1024px, four nav links and the phone number; below 1024px, the Call link; then the compact CTA.
- Nav links: the `button` style in ink, no underline, 24px apart, at least 44px tall.

**`SectionNav`** is `02`'s second row below 1024px: its own `<nav aria-label="Main">`, outside the header.

- Paper background with a 1px hairline bottom border. Not sticky, and `display: none` from 1024px.
- Four links in Public Sans 700 at the `small` size (15px), spread with `justify-content: space-between`, each 44px tall. Their text measures 183px, which fits at 320px.

| Width | Call link | CTA label |
|---|---|---|
| < 440px | Icon only, 44 × 44 | Compact: "Book audit" / "Reserve slot" |
| 440–1023px | Icon + "Call" | Full label |
| ≥ 1024px | Icon + the formatted number (129px) | Full label |

- **States.** Links take a 2px underline on hover and the focus ring on focus. On `/audit` and `/thanks/*` the CTA is not rendered at all, rather than hidden (`02`).
- **Accessibility.**
  - The header is the `banner` landmark.
  - The Call link's accessible name is "Call Techeo, [TECHEO_PHONE]," which contains its visible text.
  - `scroll-padding-top` is set to `var(--header-h) + 8px`, so anchor jumps land below the sticky bar.
- **v2.** The desktop nav follows `02` #header-v2, measured at about 870px of the 960px available at 1024px. Below 1024px the bar adds the Menu summary, and #c-mobile-menu sets the widths.
- **Used on:** every page.

### Mobile menu (v2) {#c-mobile-menu}

- **Anatomy.** The `<details>` element `02` specifies.
  - Summary: at least 44 × 44, with Lucide `menu` at 24px. From 640px it adds the visible label "Menu" at the `small` size (15px), weight 700; below 640px it is the icon alone, with the accessible name "Menu" (`02`). The icon swaps to `x` when the menu is open.
  - Panel: in normal flow under the bar, with `max-height: calc(100dvh - var(--header-h))` and internal scrolling.
  - Rows: 48px tall, Public Sans 700 at the `body` size, with hairlines between `02`'s groups.
- **States.** Hover underlines. The focus ring sits on the summary. While open, the summary gets a sunken fill. No animation.
- **Accessibility.**
  - Verify the expanded state is announced in NVDA with Firefox, VoiceOver with Safari (macOS and iOS), and TalkBack with Chrome.
  - No focus trap: it isn't a modal.
  - Escape doesn't close it without script. That's acceptable, because every item loads a new page.
- **Used on:** every page from v2, below 1024px.

**The v2 phone bar.** Adding the summary to the v1 bar overflows it, so v2 moves the compact breakpoint from 440px to 640px. The widths below are arithmetic from the v1 measurements (#layout): wordmark 79, Call icon 44, Call with label 81, compact CTA about 120, full CTA 192, Menu icon 44, Menu with label about 72, and 12px gaps.

| Width | Bar, left to right | Needs | Available |
|---|---|---|---|
| < 440px | Wordmark · compact CTA · Menu (icon). The Call link leaves the bar, and [TECHEO_PHONE] stays in the panel's last group, as `02` allows. | about 267px | 288px at 320 |
| 440–639px | Wordmark · Call (icon) · compact CTA · Menu (icon) | about 323px | 408px at 440 |
| 640–1023px | Wordmark · Call (icon + "Call") · full CTA · Menu (icon + label) | about 460px | 592px at 640 |

Full labels need about 460px, which a 440px viewport (408px inside its margins) can't hold. Keeping the Call icon below 440px would need about 323px of 288. Closing that gap with a 64px wordmark, 8px gaps, and 12px CTA padding would leave under 1px spare, which is too fragile to ship. The CTA never leaves the bar (`02`).

**Done when** the v2 header fits on one line, measured with the real fonts, at 320, 439, 440, 639, 640, 1023, 1024, and 1280px.

### Season banner {#c-season-banner}

- **Anatomy.** `<section id="season-banner" aria-label="Season notice">`, a full-bleed band above the header.
  - Background banner-bg; padding 8px vertical, **12px horizontal below 440px**, gutter-wide above.
  - One sentence in banner-text: `text-banner` (14px/20px) below 440px, and `text-small` (15px, about 22px line height) from 440px.
  - The link in banner-link, weight 700, underlined 1px at `--underline-offset-link` (3px).
  - **No decorative mark.** Measured at 320px: `03`'s season copy, the "Cooling season" variant, and an 83-character capacity line each fit on two lines only with 12px side padding and no leading mark. Adding 16px pushes the September copy to three lines.
- **States.** The link underline thickens to 2px on hover. The focus ring is yellow. No dismiss, no sticky position, no icon, no live region (`02`, `03`).
- **Used on:** T1, T2, T4, T5, and T6–T11 in WAITLIST. Never on T3.

### Buttons and links {#c-buttons}

| Variant | Fill · text · border | Height · padding | Width |
|---|---|---|---|
| **Primary** | Accent · ink `button` · 2px ink | 48px · 0 24px | Full width in content below 640px; natural above |
| Primary compact (header) | Same as primary | 44px · 0 16px | Natural |
| **Secondary** | Surface · ink · 2px ink | 48px · 0 24px | Same as primary |
| **Tertiary** | None · ink `button` (16px/700), 1px underline at `--underline-offset-tertiary` (4px), then `Arrow` | `min-height: 44px`, 12px vertical padding | Inline-flex |
| Inline link | Inherits text · 1px underline at `--underline-offset-link` (3px) | Inline; exempt from SC 2.5.8 | — |
| Phone link | Tertiary, led by a `phone` icon | 44px | — |

| State | Primary | Secondary | Tertiary and inline |
|---|---|---|---|
| hover | Accent-hover fill | Sunken fill | Underline goes to 2px |
| focus-visible | Ring | Ring | Ring |
| active | 1px press | 1px press | — |
| disabled · loading | Per #c-shared; width stays locked | Per #c-shared | Never disabled |

**Rules:**

- One primary per section. The header CTA doesn't count.
- Primary comes first. Below 640px, buttons stack with 12px between; from 640px they sit side by side.
- Labels never wrap. `03` supplies a compact label wherever the full one can't fit at 320px.
- `<a>` navigates. `<button>` only submits a form or runs the calculator.
- Icons are 20px, 8px from the label, and `aria-hidden`.
- External links show `arrow-up-right`. Every link opens in the same tab, including the legal links in consent text (`02` #link-rules rule 8; #c-fields).
- The visible label is the accessible name (SC 2.5.3).

### Section header {#c-section-header}

- **Anatomy, top to bottom:**
  - A 2px ink rule across the container.
  - 16px of space, then a label line: a two-digit section number, followed by " · " and `03`'s eyebrow where one exists ("07 · FROM THE FOUNDER" on `#operator`, or "06 ·" when `#proof` is omitted).
  - 8px of space, then the H2 (at most 28ch).
  - An optional intro in `lead`, at most 60ch.
- **Numbers.** Section numbers are `aria-hidden` and generated at build from the sections present, so omitting `#proof` renumbers the rest. Numbering starts at 01 with the first section after the hero; the hero has no number. With `#proof` present, `#operator` is 07 and `#start` is 11. Numbers appear on `/` only.
- **Accessibility.** The H2 is the section's `aria-labelledby` target (`02`).
- **Used on:** every section of `/` after the hero, and every H2 section on T2, T4, and T6–T11.

### Hero, portrait chip, fact strip {#c-hero}

- **`Hero`** follows `03`'s order:
  1. Eyebrow (`label`)
  2. H1
  3. Subhead (`lead`)
  4. Operator line, with the `PortraitChip` beside it
  5. Account line
  6. Primary and secondary buttons
  7. Microcopy (`small`, ink-2)
  8. Phone line (`small`)

  Top padding is 16, 48, and 64px by tier. From 1024px the hero sits in columns 1–8, and columns 9–12 are left empty on purpose.
- **`PortraitChip`:**
  - A square, black-and-white crop of the portrait with a 1px ink border.
  - Size: 48px, 56px from 640px, 64px from 1024px.
  - Top-aligned, 8px to the left of the operator line.
  - `loading="eager"`, width and height attributes set, alt text from `03`.
  - The only image above the fold on `/`.
- **`PageHero`** (T2) follows the same pattern without the chip, and adds a `FactStrip` under the subhead.
- **`FactStrip`:**
  - A `<ul>` in a `box`, with hairline dividers between items.
  - The price uses Plex Mono 600 at `text-fact` (24px); the rest use `data`.
  - Layout: stacked below 640px, 2 × 2 from 640px, four across from 1024px.
- **Used on:** `/`, `/audit`, `/teardown`, and later T9 pages.

### CTA blocks {#c-cta}

All three blocks are `panel`s.

| Component | Anatomy | Layout | Used on |
|---|---|---|---|
| `OfferPanel` | Subhead, body, workstreams (weights right-aligned in `data`), facts, CTA, line under the CTA | From 1024px: 7 columns of copy, with facts and CTA in a sunken 5-column inset. Stacked below 1024px. | `/` #audit |
| `CtaPanel` | H2, reason line, body, action (a button, or `form_audit_reserve` in WAITLIST), secondary link, phone line | One column, prose width | `/` #start; wraps `/audit` #book and `/teardown` #request |
| `SeasonCta` | Lead-in (`lead`), buttons per `04`'s patterns A–C, phone line, `03`'s WAITLIST sentence (`small`) | One column | Every v1.1–v3 template |

The **reason line** is the one sentence `03` emphasizes. It is set in weight 700 with a 4px (`--border-heavy`) ink rule on its left, and it appears once per page. Panels take their states from their contents. A panel is not a landmark.

### Proof strip and stat tile {#c-stat-tile}

**`StatTile`** is a `box` with six parts:

1. **Label:** `small`, 700 weight, ink, at most two lines.
2. **From line** (pairs only): `data` in ink-2, "52% →", with a screen-reader-only "to."
3. **Value:** `display`.
4. **Delta** (optional; unused in v1): `data`, "+19 points."
5. **Window:** `data` in ink-2, from [HOMETS_WINDOW]. Required on every tile, so a screenshot of one tile keeps its dates (D7).
6. **Source:** `data` in ink-2, the claim's source line from its ledger row (`10`), for example "Source: ServiceTitan. Rounded toward the less flattering figure." Optional inside a `ProofStrip`, where the strip's source line covers it; required wherever a tile renders outside one.

**Too few to report.** When `12` #numbers' publishing floor isn't met, the ledger row carries "too few to report" in place of a value. The tile keeps its label, window, and source, and sets that phrase in `data`, ink-2, where the value would be. It never shows a number.

"52% → 71%" measures 216px at 40px, but a half-width tile at 375px has about 114px of room: the outer box and the tile box each take 1px of border and 16px of padding per side, and the gap is 12px. Plex Mono 600 at 40px is 24px per character, so at most four `display` characters fit. Pairs always put the "from" figure on its own smaller line, at every width. Values are never truncated; a value of five or more characters, such as "4 min," spans two columns.

**`ProofStrip`:**

- The section header and `03`'s subhead come first.
- An outer `box` holds the grid, with the source and caveat lines directly under it, so a screenshot of the grid carries its source.
- The grid is 2 × 2 (12px gaps) below 1024px, and four across (24px gaps) from 1024px. It uses subgrid, so labels, values, and windows align.
- The strip ends with `03`'s link.

**Precision.** Values and changes are precomputed and rounded per `12` #numbers and the claims ledger (`10`). Components render the strings and never compute or round. Changes round toward the less flattering value (brief D7), so an improvement always rounds toward zero: −8.7 points shows as −8, never −9.

**Behavior:**

- Static: no hover, links, icons, or animation.
- Driven by a `ready` flag from `10`'s claims-ledger data. If tile 1 isn't ready, the whole section, wrapper included, renders nothing (`03`).
- The production build fails if any `[HOMETS_…]` token reaches a page (`06`).

**Accessibility.** The tiles form a `<ul>`, read in order: label, from, value, window, and source where present.

**Used on:** `/` #proof; case studies in v2.

### Rule lists {#c-rule-list}

`RuleList` items use the `rule` container, `--space-stack` apart, with `role="list"`. Safari drops list semantics under `list-style: none`.

| Variant | Item anatomy | Layout | Used on |
|---|---|---|---|
| `leak` | H3, body, then a WE MEASURE label over `data` | One column; 2 × 2 from 640px | `/` #leak |
| `promise` | H3 title and body; no icons or seals (`03`) | One column; two from 1024px | `/` #promises |
| `disclosure` | Bold run-in title, then text | Prose width | `/` #operator |
| `fit` | Two `<ul>`s under H3s, "Built for shops that…" first. Markers are 8px squares, filled for the first list and outlined for the second. No check or cross marks, no red or green. | Stacked; side by side from 640px | `/` #fit |
| `proof-link` (v2) | An H3 linking to the case study; the short disclosure as a bold run-in; then one headline figure with its window, in `data` | One column | `ProofBlock` on engine pages (`04` #engine-pattern) when at least one case study exists. With none, `ProofBlock` is the `absence` callout (#c-callout). |

The fit lists are lists, not a `<table>`. Row 3 of one has no relation to row 3 of the other, so table markup would announce pairs that don't exist.

### Engine card {#c-engine-card}

**Anatomy.** A `box` containing:

- A number tag ("01"–"04") in `label` style. The Booking Engine's tag is a 40 × 24 accent block with a 2px ink border (#color's yellow rule).
- An H3 with the name exactly as D6 writes it.
- A COVERS label over `small` text.
- The body.
- "Why it's first," Booking card only, in weight 700.

**Layout.**

- Booking spans the full width and comes first.
- The other three stack below 1024px and sit three across from 1024px.
- DOM order matches visual order at every width (`03`).

**v2 links.** Each card links to `/engines/<engine>` with a stretched link on the H3 (`::after { inset: 0 }`).

- Hover: sunken fill, underlined H3.
- Focus: the ring goes on the card, via `.engine-card:has(a:focus-visible)` (`:has()` works in every evergreen browser since December 2023).
- Accessible name: the engine name alone.

**Used on:** `/` #engines, `/engines`, `OtherEngines`.

### Ladder and steps {#c-ladder}

**Anatomy.** The ladder is an `<ol role="list">`. Each step has:

- A 32 × 32 number square with a 2px ink border, the number in Plex Mono 600 at the `button` size (16px), drawn by a CSS counter.
- The H3.
- The price or term, in Plex Mono 600 at the `body` size (17px; 18px from 1024px).
- The body.
- A CTA: tertiary for the Teardown, primary for the Audit.

No square is yellow; the Audit's button carries the signal.

**Connectors** are CSS pseudo-elements, so they are never announced.

- Below 1024px: a 2px ink line down a 32px left rail.
- From 1024px: four columns, with a 2px ink line through the centers of the squares.

**Price bracket.** `03`'s "Retainers from $3,500/month…" sits after the `<ol>`, because it isn't a step. It opens with the label "STEPS 3–4," which `03` may reword.

- From 1024px: it spans columns 3–4 under a 2px bracket with 12px end ticks.
- Below 1024px: it follows step 4, with a bracket on its left.

**The `steps` variant** drops prices and CTAs.

**Used on:** `/` #how-it-works uses the ladder. `/audit` #timeline, `/teardown` #how-it-works, `/thanks/*`, and `/pricing` use `steps`.

### Formula block {#c-formula}

- **Anatomy.** A `<figure>` in a sunken `box`, under `03`'s H3 ("The math").
  - Each line is a `<p>` in `data` style.
  - Lines starting with "+" or "=" hang (`padding-left: 2ch; text-indent: -2ch`), so wrapped text aligns after the operator.
  - The total line is Plex Mono 600, under a 2px ink rule.
- **Examples.** A worked example goes in an `example` callout below the block, never inside it.
- **Reflow.** No horizontal scroll at 320px (SC 1.4.10).
- **Used on:** `/` #calculator, `/audit` #gap-statement, `/calculator`.

### Calculator {#c-calculator}

**Anatomy.** A `box` with two regions: the input form, and a result region with `role="status"`. From 1024px they sit side by side, 7 and 5 columns; below that, the inputs come first.

**Fields.**

- `type="text"`, with `inputmode="numeric"` for calls and revenue and `inputmode="decimal"` for the rate. iOS shows no Enter key on either pad; #c-forms-phone sets `enterkeyhint` and the phone behavior.
- **Never `type="number"`:** scroll wheels change it, it accepts "e," and it shows spinners.
- **Never a range slider:** it requires dragging (SC 2.5.7) and is imprecise.
- Widths hint at the expected length: calls 8ch, rate 5ch, revenue 10ch.
- A 48px sunken "$" cell before revenue and a "%" cell after the rate, both `aria-hidden`, since `03`'s labels already name the units.
- "Show my number" is a secondary button, always rendered (`08`).

| Result state | Look |
|---|---|
| Empty | `03`'s empty text in `small`, ink-2. The panel reserves its height (a `min-height` measured from the longest result copy), so the page never shifts. |
| Below 70% | `<p>About <span class="type-display">$24,000</span> a month.</p>`: the figure at `display` size, the words at `h3`, on one baseline. Then the body, the disclaimer (`small`, ink-2), the primary button, and the WAITLIST line. The figure never animates. |
| 70% or higher | `03`'s statement at `h3`, then the body. The teardown button is the primary action. |
| Under one job (`08`'s UNDER_ONE_JOB) | `08`'s statement at `h3`, then the body. The teardown button is the primary action. |
| Stale (inputs edited after a result) | The result is replaced by `08`'s "Your numbers changed. Press Show my number to update." in `small`, ink-2. The email form is hidden until the result is recomputed, so emailed figures always match the ones shown. |
| Field error | Inline errors appear (#c-validation) and the result returns to Empty. The summary appears only if the button was used. |
| No JavaScript | `03`'s note, in a `note` callout |
| Email form | Appears after a result: one field and a button, stacked below 640px. Success shows in the success color with `circle-check`; failure in the danger color with `circle-alert`. |

**Announcements.** The result updates only when "Show my number" is pressed or on Enter (`08`). The `role="status"` region announces each update once, so screen readers hear one result, not one per keystroke. The server renders the same markup the island hydrates, so the layout doesn't shift when the script loads (`06`).

**Used on:** `/` #calculator. On v2 `/calculator`, each leak gets its own `<fieldset>` with an H3 legend.

### Form fields {#c-fields}

**Anatomy**, top to bottom, following GOV.UK's order:

1. Label (`body`, 700)
2. Help text (`small`, ink-2, linked by `aria-describedby`)
3. Error message (when present)
4. Control

Parts are 8px apart; groups are `--space-stack` apart. "(optional)" appears in the label, as `03` writes it. There are no asterisks and no placeholders (`03`).

| Control | Spec |
|---|---|
| Text input | 48px tall, `body` text, surface fill, 2px control border, 2px radius, 12px padding. Widths match the expected answer: ZIP 8ch, phone 16ch, other fields up to 30rem. Autocomplete tokens per `03` (SC 1.3.5); keyboard attributes per #c-forms-phone. |
| Textarea | At least 4 rows (120px), resizable vertically only |
| Select | Native `<select>` with `appearance: none`, a `chevron-down` background icon, and 44px right padding. Under forced colors, set `appearance: auto`. **Use only for more than five options;** five or fewer are radios. |
| Radio or checkbox group | A `<fieldset>` with its `<legend>` styled as a label. Rows at least 44px tall. Native 24 × 24 inputs with `accent-color: var(--color-ink)`. The `<label>` wraps the input and its text, so the whole row is clickable. Options always stack. |
| Required checkbox (`authority`, `form_teardown_request`) | The checkbox pattern, with `03`'s text |
| `test_call_consent` (`form_audit_qualify`) | The radio-group pattern, not a checkbox: `08` #form-audit row 14 replaced `03`'s original checkbox, because an unchecked box can't tell "no" from "missed it." The legend is the text `10` approved (`03` row 14), and the two options are stacked. No option is pre-selected. The *choice* validation applies. A "no" is a decline (`08`'s `no_test_consent`). |
| **Consent checkbox** | **Never pre-checked.** The full consent text is the label, at `body` size: never small gray type, a tooltip, or a collapsed section. It sits directly above the submit button. Its links are ordinary inline links that open in the same tab (see "Links in consent text" below). |
| Consent statement | The same text above the submit button, with no checkbox. `10` owns the wording, and chooses per form between this and the consent checkbox. |

**Links in consent text** (checkbox or statement) open in the same tab, like every link on the site: `02` #link-rules rule 8 allows no `target="_blank"` anywhere. They carry no new-tab icon or new-tab text. A visitor who reads `/privacy` and presses Back gets the form back as they left it. The form pages are static HTML, so the browser's back-forward cache keeps what was typed, and where that cache doesn't apply, the browser's own form restoration does. **Flag to `06`:** keep the form pages eligible for the back-forward cache (no `unload` handlers, and no `Cache-Control: no-store` on page HTML). There is one gap. Without JavaScript, the page re-rendered after a failed post is an `/api/*` response sent with `no-store`, so Back may ask to resend the form. Resending re-renders it with the values that were posted (`06` `server/render.ts`). The device test in #c-forms-phone checks the round trip.

**States:**

- Hover and focus: the border turns ink, and focus adds the ring.
- Disabled: never; remove unavailable options instead.
- Loading: the form gets `aria-busy`.
- Error: see #c-validation.

If `06` adds a bot check such as Cloudflare Turnstile, it goes directly above the submit button in its least intrusive mode (verify the current widget options).

### Inline validation and outcomes {#c-validation}

**Inline error.**

- The field group gets a 4px (`--border-heavy`) danger rule on its left, with 12px padding; the input gets a 2px danger border.
- The message sits between the help text and the control: a 20px `circle-alert`, then `03`'s words in `small` 700 danger, prefixed with a visually hidden "Error:".
- The control gets `aria-invalid="true"` and `aria-describedby="{help} {error}"`.

**Timing.**

- Check every field on submit.
- Once a field has been filled and left, check it again each time it loses focus.
- Clear an error the moment the value becomes valid.
- Never show an error during someone's first entry in a field, and never on focus.

**Error summary.**

- A `box` at the top of the form, with a 4px (`--border-heavy`) danger border and a heading strip in danger-bg.
- The H2 is `03`'s "There's a problem with {n} answers…".
- It lists one link per error: the link text is the field's error message, and the target is `#{field-id}`.
- After a failed submit, focus moves to the summary (`tabindex="-1"`). There is no `role="alert"`; moving focus already announces it, and both together would read it twice.
- A server-rendered failure (JavaScript off) uses the same markup. We recommend that `03` and `08` add the prefix "Error: " to the page title in that case.

**Outcome panels.** `03`'s decline outcomes and reservation outcomes appear in a `notice` callout at container width. It contains the heading as an H2, the body, and then "No payment was taken." or "No reservation was made." on its own line in weight 700. Focus moves to the heading.

This covers SC 1.3.1, 3.3.1, 3.3.3, and 4.1.3. If `08` pre-fills Stripe Checkout with values from `form_audit_qualify`, it also serves SC 3.3.7.

### Forms on a phone {#c-forms-phone}

`form_audit_reserve` has 14 fields and `form_audit_qualify` has 18 (`08` #form-audit), and owners fill them on a phone. On a 375 × 667 phone, the on-screen keyboard (plus iOS's bar above it) takes about half the height. The layout viewport doesn't shrink when the keyboard opens, in iOS Safari or in current Android Chrome, so the `max-height: 400px` rule (#layout) doesn't fire. The 56px sticky header would stay pinned over what's left, on top of focused fields and the error summary (SC 2.4.11).

**Header while a field has focus.** On a touch screen, the header stops being sticky while a text control has focus:

```css
@media (pointer: coarse) {
  html:has(:is(input:not([type="radio"], [type="checkbox"]), textarea, select):focus) #site-header { position: static; }
}
```

- A sticky element keeps its place in the flow, so the switch moves nothing on the page. The bar scrolls away with the page and comes back when focus leaves the field.
- This needs no script. A `scroll-margin` computed from `visualViewport` would need one, and would protect only the element the browser scrolls to.
- `select` is included because iOS opens its picker over the lower half of the screen.
- Radios and checkboxes open no keyboard, so they leave the header sticky.

**Error summary with the keyboard open.** A submit from the keyboard's own key or from the button can fail while the keyboard is up.

- Focus then moves to the summary (#c-validation). The summary is not a text control, so the keyboard closes and the header is sticky again.
- **Flag to `06`:** `form-enhance.ts` focuses the summary with `preventScroll: true`, then calls `scrollIntoView({ block: "start" })`. That call honors the page's `scroll-padding-top`, so the summary's heading lands 8px below the header after the keyboard has closed.
- A summary link moves focus into its field. The keyboard opens, the header unsticks, and the browser scrolls the field above the keyboard.

**Keyboards, field by field.** `08` sets each control and `03` sets the `autocomplete` tokens. This table adds what each field shows on a phone.

| Field (`08` key) | Markup | Keyboard | Also set |
|---|---|---|---|
| `name`, `company` | `type="text"` | Letters | `autocapitalize="words"`, `spellcheck="false"` |
| `website` (every form) | `type="text"`, `inputmode="url"`. Never `type="url"`, which rejects a bare "homets.com" that `08` fixes by adding `https://`. | URL keys | `autocapitalize="none"`, `autocorrect="off"`, `spellcheck="false"` |
| `zip` | `type="text"`, `inputmode="numeric"` | Digits | — |
| `phone`, `phone_to_call` | `type="tel"` | Phone pad | — |
| `email` (every form) | `type="email"` | @ and . keys | `autocapitalize="none"`, `spellcheck="false"` |
| `notes` | `<textarea>` | Letters; Return adds a line | No `enterkeyhint` |
| Calculator: `qualified_calls`, `avg_revenue` · `booking_rate_pct` | `type="text"`, `inputmode="numeric"` · `inputmode="decimal"` (#c-calculator) | Digits · digits and a decimal point. **Neither iOS pad has an Enter key.** | `enterkeyhint="go"`, `autocomplete="off"` |
| `form_calculator_email`'s `email` | `type="email"` | @ and . keys | `enterkeyhint="send"` |
| Radios, checkboxes, `heard_from` | No keyboard; `heard_from` opens the system picker | — | — |

**The Enter key.** `enterkeyhint` changes the key's label, never what Enter does, so it is set only where the label is true.

- It reads `go` on the calculator inputs, where Enter runs the calculation (`08`), and `send` on the calculator's email field, where Enter submits a one-field form.
- In reserve, qualify, and teardown, Enter in a single-line field submits the whole form, as browsers do. Those fields keep the browser's own label, because a "next" label without a script that moves focus would be false. An early submit gets the error summary like any other.
- Visitors move between fields by tapping, or with the keyboard's own previous and next controls.

**The calculator without an Enter key.** Nothing on a phone depends on Enter.

- "Show my number" sits directly under the last input, full width below 640px (#c-buttons), so it is in view as soon as the keyboard closes.
- After the button is pressed, if the result region's top edge is off-screen, the island scrolls it into view with `scrollIntoView({ block: "nearest" })`, which follows #motion.
- Focus stays on the button, and `role="status"` still announces the result once.

**Radio groups and tap order.**

- Options stack in `08`'s order. Each is a full-width row at least 44px tall, with the label wrapping the input (#c-fields), so a thumb can hit anywhere on the row, not just the 24px circle.
- A choice never moves focus, opens the next group, or scrolls the page (no auto-advance; SC 3.2.2), so a mis-tap is fixed with a second tap on the same screen.
- Tapping a radio while the keyboard is open closes the keyboard, and the page may shift as it closes. The choice itself adds no movement.
- The visitor taps into the next text field; iOS's previous and next arrows may skip radio groups (verify). DOM order is the visual order, so taps and Tab follow the same sequence.

**Device test.** Run it on a real 375 × 667 iPhone (SE, 2nd or 3rd generation) in current iOS Safari, and on a real Android phone in current Chrome (the smallest available; record its CSS size). Test `form_audit_reserve`, `form_audit_qualify`, `form_teardown_request`, and the `/#calculator` island with `form_calculator_email`, in both season states where the form appears. File the screenshots with #first-screen's.

- [ ] Focus each text field in turn. Its keyboard matches the table, and the control, its label, and any inline error are fully visible between the top of the screen and the keyboard, with nothing sticky over them.
- [ ] Submit each form empty from the keyboard's own key, where it has one. The keyboard closes, and the error summary's heading is fully visible below the header. Each summary link opens its field above the keyboard.
- [ ] Tap anywhere on each radio row to select it. Nothing moves focus or scrolls after a choice.
- [ ] In the calculator, enter three numbers and close the keyboard. "Show my number" is in view, and after one tap the result's first line is on screen.
- [ ] Fill each form, follow a consent link, and press Back. Every value is still there.
- [ ] When the keyboard closes, the header is sticky again and nothing else on the page moves.

### FAQ accordion {#c-faq}

- **Anatomy.** Native `<details>` elements separated by `rule`s.
  - Each `<summary>` holds the H3 with `03`'s frozen id, plus a 24px `chevron-down` on the right. It is at least 56px tall.
  - The default marker is removed (`list-style: none`, and `::-webkit-details-marker { display: none }`).
  - Answers are at most 68ch wide.
- **States.**
  - Hover underlines the H3, and the focus ring sits on the summary.
  - Opening rotates the chevron 180°, instantly under reduced motion.
  - All items start closed. Don't add the `name` attribute: it lets only one item open at a time, and owners compare answers.
- **Fragments.** A link to `/#faq-servicetitan` lands on an H3 that stays visible when its item is closed. No script opens the item.
- **Accessibility risk.** HTML permits headings inside `<summary>`, but some browser and screen-reader pairs expose the summary as a button and flatten its contents, dropping the heading.
  - Test NVDA with Firefox and with Chrome, VoiceOver with Safari on macOS and iOS, and TalkBack with Chrome.
  - If any pair loses the H3s, ship the expanded variant instead: the same headings and answers, always open, without `<details>` (`03` allows this).
  - Record the result on `/accessibility`.
- **Used on:** `/` #faq, `/audit` #audit-faq, `/teardown` #teardown-faq.

### Tables {#c-table}

- **Anatomy.**
  - A `<caption>` above the table, in `small` 700, left-aligned.
  - `<thead>` has a sunken fill, `small` 700 text, and a 2px ink bottom border.
  - Rows are divided by 1px hairlines. Cell padding is 12px by 16px.
  - Figures are right-aligned, in `data` style.
  - No zebra stripes, sticky headers, or color-coded cells.
- **Responsive.**
  - Tables of up to three columns stay tables at every width.
  - Wider tables sit in `<div class="table-scroll" role="region" aria-labelledby="{caption-id}" tabindex="0">`, with `overflow-x: auto`, a 1px ink border, and the focus ring.
  - Below 640px, a label reading "SCROLL SIDEWAYS FOR MORE COLUMNS" sits under wide tables. SC 1.4.10 exempts data tables.
- **Used on:** `/audit` #workstreams and #scoring; v2 `MetricDelta`, pricing, `CadenceTable`, `MetricTable`.

### Callouts {#c-callout}

Callouts sit at prose width. Variants differ by border and title, never by color alone, and none uses `role="alert"`. Every 4px left rule is `--border-heavy`.

| Variant | Look | For |
|---|---|---|
| `note` | Sunken fill, 4px ink left rule. The only variant that may be an `<aside>`. | Neutral asides; the calculator's no-JavaScript note |
| `disclosure` | Surface fill, 2px ink border, 700-weight run-in title, at `body` size or larger | Homets affiliation text outside the footer: `/audit` #who-runs-it, `/teardown` #whos-calling, and v2 `ConnectionDisclosure`. Never collapsed (`04`). |
| `notice` | Warning-bg fill, 4px warning left rule, ink body, 700-weight title | The late-window notice; decline outcomes |
| `example` | 2px **dashed** control border and an "EXAMPLE" label | Every made-up figure. Measured figures never go inside one; example figures never appear outside one. |
| `absence` | Surface fill, 1px ink border, 700-weight title | `04`'s honest-absence `ProofBlock`, when no case study exists. A populated `ProofBlock` is `RuleList` `proof-link`. |

### Quote block {#c-quote}

- **Anatomy.** `PullQuote`: a `<figure>` holding a `<blockquote>` and a `<figcaption>`.
  - The quote is Public Sans 700 at `text-quote` (20px/1.4), with a 4px (`--border-heavy`) ink rule on its left and 24px of padding.
  - `03`'s attribution goes in the figcaption, in `small`, ink-2.
  - No giant quotation marks, no italics, no photo.
- **Conditions.** The Homets excerpt ships only once the Homets → Techeo license is executed (`03`, `techeo.legal` #ip).
- **v2.** Client quotes (`#in-their-words`) reuse the component with name, title, and company in the caption and the disclosure above (`04`).
- **Used on:** `/` #engines (when the license condition is met); case studies.

### Founder block {#c-founder}

| Component | Spec |
|---|---|
| `FounderPortrait` | 4:5, black-and-white, 1px ink border, lazy-loaded. Full width below 640px; 5 of 8 columns from 640px; from 1024px, 4 of 12 beside the letter. |
| `FounderLetter` | Prose width, `body` size, 16px between paragraphs. The name is set in weight 700, with titles in `small`. **No scanned signature image**: a published signature invites forgery. |
| `PhotoRow` | `<figure>`s with `03`'s captions, each 3:2 with a 1px ink border. One column; two from 640px; three from 1024px. |
| `DisclosureList` · `BioBox` | `RuleList` `disclosure` · a `box` with `03`'s H3, the bio, and a download link showing its size, e.g. "(JPG, 1.2 MB)" |

On phones, the order is `03`'s. From 1024px, the portrait and the letter share a row.

**Used on:** `/` #operator, `/about`.

### Document preview {#c-doc-preview}

- **Anatomy.** Three US Letter figures (17:22), each with a 1px ink border.
  - Each image links, in the same tab, to a larger static image, and `03`'s alt text names the link.
  - The caption comes from `03`.
  - The watermark is baked into the images.
- **Layout.** Stacked below 640px, at most 320px wide; three across from 1024px. No lightbox (D3).
- **Used on:** `/audit` #sample.

### Footer {#c-footer}

**Anatomy.** `<footer id="site-footer">`: an ink background with on-ink text; padding is `--space-section` at the top and 32px at the bottom. It contains, in order:

1. **The disclosure.** `03`'s words, verbatim, full width, at `body` size, with "Who owns Techeo." in 700 and its link underlined.
2. **A 1px on-ink-2 rule.**
3. **The columns.**
   - From 1024px: three columns. Techeo (the paper wordmark at 96px, the tagline line, and the phone with hours), then On this site, then Legal.
   - From 640px: Techeo spans full width, and the two lists sit side by side below it.
   - Below 640px: everything stacks.
4. **The legal line**, in `small` on-ink-2.

**List links.** 17px and not underlined at rest; the list tells readers they are links. They underline on hover and show a yellow focus ring. Rows are at least 44px tall below 1024px; from 1024px they are 32px tall with 24px spacing.

**Accessibility.** The footer is the `contentinfo` landmark, and its nav is labeled "Footer." The phone link keeps the same relative position on every page (SC 3.2.6).

**Used on:** every page, including 404 and `/thanks/*`.

### Case-study stat panel (v2) {#c-case-panel}

| Component | Spec |
|---|---|
| `ConnectionDisclosure` | A `disclosure` callout, under the H1 and above any number (`04`) |
| `CaseFacts` | A `<dl>` in a `box`: terms in `label`, values in `body`. Two columns from 640px. |
| Headline `StatTile` | The H1 metric: full width below 640px, half width above. It renders outside a `ProofStrip`, so its Source part (#c-stat-tile) is required. |
| `MetricDelta` | Columns: Number, Before, After, Change. Each Change cell carries its own unit and sign, + or − (U+2212): "+18 points," "−3 min." Values and changes arrive precomputed and rounded per `12` #numbers; the component never computes or rounds. Where a change differs from the gap between the displayed figures, the note below uses `12`'s text verbatim: "Change calculated before rounding." A row below `12`'s publishing floor shows "too few to report" in `data`, ink-2, across Before, After, and Change. No red or green; the sign and the words carry the direction. |
| `DataSourceBox`, `ApprovalLine`, `UpdateLog` | Shared with articles. Dates go in `<time>` elements. |

### Article layout (v1.1) {#c-article}

T7 renders `04` #insights-article with these components:

| Component | Spec |
|---|---|
| `Breadcrumb` | `<nav aria-label="Breadcrumb">` wrapping an `<ol>`, in `small`. The separators come from CSS. The current page is plain text with `aria-current="page"`. |
| H1 · `AnswerFirst` | `h1`, at most 22ch · `lead` in ink, with a 4px (`--border-heavy`) ink left rule |
| `Byline` | A square black-and-white portrait (40px; 48px from 1024px), the name as a link, titles in `small`, dates in `<time>` (`small`, ink-2) |
| `SourceNote` | Directly under each figure or table: a SOURCE label, then `data` text |
| `DataSourceBox` | A `box` with the H2 "Where these numbers come from" (id `sources`) and a `<dl>` labeled MEASURED, SOURCE, WINDOW, PULLED, ROUNDING, NOT INCLUDED, RELATIONSHIP, and APPROVAL. For articles that only use examples, use an `example` callout instead. |
| `ArticleCta` · `ReadNext` · `CorrectionsLog` | A `panel` · a `RuleList` of H3 links, each with its answer in `small` · a `note` callout with dated entries |

- **Layout.** One column. From 1024px the article sits in columns 1–8; columns 9–12 stay empty. No sidebar, table of contents, share bar, reading time, or signup (`04`).
- **Print.** Hide the header, nav, banner, and CTAs. Keep the footer disclosure, print external URLs after their links, and print ink on white.

### Component matrix {#c-matrix}

| Component | Name in `03` / `04` | Release |
|---|---|---|
| `SkipLink`, `SiteHeader`, `SectionNav`, `SiteFooter`, `SeasonBanner` | Header, footer, season banner | v1 |
| `MobileMenu` | Menu (`02` #header-v2) | v2 |
| `Button`, `Arrow`, `PhoneLink`, `Num`, `SectionHeader` | Buttons, phone link, H2 pattern | v1 |
| `Hero`, `PortraitChip`, `PageHero`, `FactStrip` | Hero, portrait chip, page hero, fact strip | v1 |
| `ProofStrip`, `StatTile` | Proof strip; case-study headline figure | v1 (conditional) |
| `RuleList` | Leak cards, promise list, disclosure list, fit table, `ArticleList`, `ReadNext`; `ProofBlock` with case studies (`proof-link`, v2) | v1 |
| `EngineCard` | Engine cards, `EngineCard`, `OtherEngines` | v1 |
| `Ladder` (and its `steps` variant) | Ladder, timelines, "What happens next" | v1 |
| `OfferPanel`, `CtaPanel`, `SeasonCta` | Offer panel, closing CTA panel, `SeasonCta`, `ArticleCta` | v1 |
| `FormulaBlock`, `Calculator` | Formula block, calculator island, result panel, email form | v1 |
| `Field`, `Select`, `RadioGroup`, `CheckboxGroup`, `Consent`, `ErrorSummary` | Form fields, validation, outcomes | v1 |
| `Faq`, `DataTable`, `Callout`, `PullQuote` | FAQ list, tables, notices, pull quote; `ProofBlock` with no case study (`absence`) | v1 |
| `FounderPortrait`, `FounderLetter`, `PhotoRow`, `BioBox`, `DocPreview` | Founder block, document preview | v1 |
| `CaseFacts`, `ConnectionDisclosure`, `MetricDelta` | Case-study components | v2 |
| `Breadcrumb`, `AnswerFirst`, `Byline`, `SourceNote`, `DataSourceBox`, `CorrectionsLog` | Article frame | v1.1 |

## Iconography and diagrams {#icons}

**One icon set: Lucide.**

- **License:** ISC. Icons derived from Feather are MIT.
- **Why it fits:** 2px strokes on a 24px grid match the site's 2px rules.
- **Implementation:** `@lucide/astro`, which renders inline SVG at build with no runtime JavaScript. Pin the version, and keep Lucide's `LICENSE` in the repo.
- **v1 icons:** `phone`, `arrow-right`, `arrow-up-right`, `chevron-down`, `circle-alert`, `circle-check`, `info`, `download`. v2 adds `menu` and `x`. Check each name against the installed version: Lucide has renamed icons before (`alert-circle` became `circle-alert`).
- **Sizes:** 20px beside text, 24px on their own. `stroke-width: 2` with `absoluteStrokeWidth`, colored with `currentColor`, and `aria-hidden="true"`.
- **Icon-only controls:** in v1, just one, the Call link below 440px. v2 adds the Menu summary below 640px, and the Call link stays icon-only from 440 to 639px (#c-mobile-menu). Each has an accessible name.
- **Banned:** feature-bullet icons, icons in stat tiles, seals, badges, trade symbols (flame, snowflake, droplet, wrench), and emoji.

**Diagram style.**

- **HTML and CSS first.** The ladder, steps, and fact strip are HTML and CSS, so their text is real text (D13) and reflows.
- **SVG only where geometry demands it** (v2 `/engines` #connections). The SVG goes inline in a `<figure>` with `aria-hidden="true"`, and the meaning goes in the HTML `<figcaption>` (`04`'s text).
- **Grammar:**
  - Nodes are square-cornered boxes with 2px ink strokes and surface fill. The Booking Engine node gets the accent fill.
  - Arrows are 2px ink with solid 8px heads.
  - Node labels are Public Sans 700 at 16px. Flow labels are uppercase Plex Mono 400 at 13px, in ink-2 ("CALLERS").
  - Everything sits on an 8px grid, with at most seven nodes and no icons.
  - Strokes use `currentColor`. Under forced colors, fills switch to `fill: Canvas; stroke: CanvasText`, so the Booking node's first position has to carry its emphasis.
- **The four-engine diagram (v2).**
  - Booking is the full-width node at the top, first, as D6 and `04` require.
  - Search (SEO), Answer (AEO), and the Ads Engine sit below it, in that order. Each has an arrow up to Booking labeled "CALLERS."
  - A return path on the right, labeled "BOOKED JOBS BY SOURCE → BUDGET," runs back to the three.
  - At 343px each lower node is about 105px wide, and "the Ads Engine" fits on two lines at 14px.

## Photography {#photography}

### Rules (D9, applied)

1. **Real photographs only.** No stock people, no AI-generated people, and no AI-generated sites, vans, or rooms.
2. **Three conditions for any Homets image.**
   - The Homets → Techeo license (`techeo.legal` #ip) covers it.
   - Every identifiable employee has signed a likeness release (`10`).
   - **No customer information is visible.**
3. **No Homets employee is named or identifiable by title** (`03`, `01` R1). Shoot customer-service staff from behind or the side. That cuts the number of releases needed and the poaching risk.
4. **No absolute numbers in any frame.** Boards and screens can reveal job counts, technician counts, or revenue (D7). Screens are off, show a document with no figures, or are redacted.
5. **Never at a customer's home.** Shoot at the Homets shop, office, or yard, a training bench, or an employee's home with a property release.
6. **Black-and-white on the site.** It makes phone and camera shots match, keeps Homets' livery color out of Techeo's palette (D4), makes redactions less conspicuous, and shrinks files. Color masters are archived (open question 4).

### v1 shot list

Shoot everything in one half-day session at Homets in Weeks 5–6 (Oct 26 – Nov 6). That leaves time to finish redaction, releases, and the license before `11`'s P5 import (Nov 9–11). `11` schedules and budgets the shoot.

| ID | Shot | Ships | Framing | Light | Crops by slot | People | Hazards |
|---|---|---|---|---|---|---|---|
| **P1** | **Founder portrait** | v1, required | Waist-up and head-and-shoulders, eyes to camera, shoulders turned 20°. A plain shirt with **no logo**. A neutral wall, with no Homets marks or interior in frame (`11` P2), so the portrait works even if the license is late. Shoot 3:4 and 3:2, leaving space on the right. | Window light at 45°, a white fill card. No ring light or flash. | Chip 1:1 (export 96, 128, 192w, covering the 48–64px chip at 2× and 3×; matching `06` #performance). `#operator` 4:5 (720, 1080w). `#who-runs-it` 1:1 at 96–120px. Byline 1:1 at 40–48px. Share image 336 × 420. Download: color 4:5, 2400 × 3000. | Blake. `10` confirms the rights for the download. | None |
| **P2** | **Customer-service desk** | v1 | Wide, three-quarter view, from seated eye level. Headsets, screens, the rubric on paper. People from behind only. | Existing light. Match screen brightness to the room. Shutter at 1/60 s or slower so screens don't band. | 3:2 | Releases for anyone recognizable | Screens off or showing a standard. No notes, whiteboards, or printouts in frame. |
| **P3** | **Dispatch board** | v1 (D9 minimum) | **No more than three technician rows and four hours in frame**, so no daily total can be inferred. Blur never counts as redaction. | Tripod, matched screen brightness, no glare | 3:2 | Technician names redacted | Everything in #pii. **#pii step 5's blur is required here,** over step 4's opaque fills, because `03`'s caption and alt text say "Customer details are blurred." |
| **P4** | **Service truck** | v1 | Three-quarter front at eye level, **in the Homets yard**, never at a customer's curb. No people. | Overcast, or the hour after sunrise | 3:2 | None | Plate obscured. No customer homes or streets behind it. |
| **P5** | **Technician at work** | Shot in v1. It becomes a fourth `#operator` photo only if `03` adds its caption and alt text; otherwise it waits for v2 `/about` and case studies. | Hands and tools in focus, the face optional. At the bench, on the office's own equipment, or in an employee's home with a property release. Correct PPE visible. | Existing light plus a bounce card | 3:2 (and 4:5 for v2) | **Likeness release** if the face shows | Manufacturer logos kept small. No customer property. |
| P6 | Blake scoring calls (optional) | v1.1 | Over the shoulder: rubric, headset, laptop | Window light | 3:2 | Blake | The screen shows only the rubric |

**Capture:** a camera or a recent phone, shooting RAW or ProRAW at 24 MP or more and ISO 1600 or lower, with verticals straightened in editing.

**Do:** frame it like documentary work, show real tasks, use available light, keep horizons level, and use a neutral black-and-white with blacks near 5% and whites near 95%.

**Don't:** stage handshakes, thumbs-ups, pointing at laptops, or smiles to camera in work shots, and don't add vignettes, grain, "moody" grading, or HDR halos.

### PII redaction procedure {#pii}

Pixelating or blurring text is not redaction: freely available tools can recover pixelated text. Every sensitive region gets an **opaque fill** first; any blur added after that is cosmetic.

| Step | Action | Done when |
|---|---|---|
| 1 | **Stage the scene.** Close customer-facing apps. Choose the board view. Remove notes and printouts, and turn off any screen you don't need. | The frame has been checked on the camera at 100% |
| 2 | Shoot in RAW, bracketed. | The files are on the card |
| 3 | **Transfer and redact on Homets-controlled storage.** Originals can contain Homets customer data, so an original that needed step 4 never enters Techeo's accounts (D4, `techeo.guardrails` #coi). Only a frame whose photo-log entry shows step 4 covered nothing may have its RAW copied to Techeo (#photography, Masters). | The originals are in Homets' Drive and the copies on the device are deleted |
| 4 | On a new layer, draw **opaque rectangles** in the screen's own background color over customer names, addresses, phone numbers, emails, job notes, dollar amounts, membership status, maps and pins, technician names, and any reflections. | Every item is covered, checked at 100% |
| 5 | Add a Gaussian blur of 20px or more (at 2400px wide) on top of step 4's fills, so the covered areas look like out-of-focus interface. **Required** for P3 and for any image whose `03` caption or alt text says "blurred," so the published words are true; optional otherwise. | The blur is present wherever it is required. It never replaces step 4. |
| 6 | Flatten the image and export a new JPEG: 2400px on the long edge, sRGB, quality 90, black-and-white. | The published file has a single layer |
| 7 | **Strip the metadata** with `exiftool -all= -overwrite_original file.jpg`. Phones embed GPS coordinates. | Running `exiftool` on the file shows no GPS, serial number, or maker notes |
| 8 | **Verify** at 200% zoom (`03`), then run OCR with `tesseract file.jpg -`. | The OCR output contains no names, streets, phone numbers, or dollar figures |
| 9 | A **second reviewer**, not the person who redacted the file, signs the photo log. | The log entry is signed |
| 10 | Only redacted files move into Techeo's accounts: the export (into Techeo's Drive and `src/assets/photos/`) and the flattened, redacted master TIFF (Masters, below). | The export's location is logged |

**Photo log.** Kept in Techeo's Drive; `10` files it alongside the releases. Each entry records:

- the file name, date, and location
- the people shown and their release IDs
- whether the license covers the photo
- whether step 4 covered anything, which decides where the master may be stored
- who redacted it and who verified it
- the OCR result
- whether the metadata was stripped

### Formats and delivery

| Item | Spec |
|---|---|
| Masters | A RAW file can't hold a redaction, so where a master goes depends on the photo log. Every original lands on Homets storage first (#pii step 3). **Frames where step 4 covered nothing** (expected: P1 and P5): the RAW file and the edited 16-bit color TIFF go to Techeo's Drive at `/brand/photos/masters/`. **Frames that needed step 4** (expected: P2, P3, P4 for its plate, and P6): the RAW file and every unredacted file stay on Homets storage only, and Techeo's Drive gets only the flattened, redacted 16-bit color TIFF exported after step 9. |
| Web source | JPEG at quality 90, sRGB, 2400px on the long edge, black-and-white, with metadata stripped. Stored in `src/assets/photos/`. |
| Delivered | Astro `<Picture>` in AVIF and WebP, with a JPEG fallback. Each slot sets its own `widths` and `sizes`. Every image carries width and height attributes. Everything except the chip uses `loading="lazy"` and `decoding="async"`. Confirm that Astro's image service drops metadata. |
| `PhotoRow` sizes | `(min-width: 1264px) 384px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc(50vw - 36px), calc(100vw - 32px)`; widths 360, 540, 720, and 1080. Three across from 1024px is (100vw − 64px margins − 48px gaps) ÷ 3: 304px at 1024 and 384px once the container reaches 1,200px at 1264. |
| Byte budgets | Chip: 8 KB or less. `#operator` portrait: 70 KB or less at 720w AVIF. Each row photo: 60 KB or less at 720w. On `/`: 15 KB or less above the fold, and 350 KB or less when fully scrolled. `06` may tighten these. |

`03` and `04` own the alt text. Components require `alt` on every `<img>`, and captions go in `<figcaption>`.

**If the executed Homets → Techeo license does not cover brand and photo use by Fri Nov 6** (`11`'s export deadline), v1 ships P1 only and omits `PhotoRow`. P1 must then show a neutral wall, with no Homets marks or interior. v1 would fall below D9's minimum (a portrait plus 2–4 operational photos), so that outcome is a founder decision (open question 11), not a quiet default.

## Motion {#motion}

**Nothing moves unless the visitor acts.** The only transitions allowed:

- a link's underline thickness and a button's fill color, over 120ms with ease-out
- the FAQ chevron turning, over 120ms
- a button's instant 1px press
- smooth scrolling to anchors, and only under `prefers-reduced-motion: no-preference`

**Banned:**

- entrance and scroll-reveal animation, which also hides content until the script runs
- parallax
- counting numbers
- marquees, auto-playing video, and carousels
- spinners, animated gradients, and hover lifts

**Reduced motion.** Under `prefers-reduced-motion: reduce`, `--duration-fast` is 0ms and scrolling is set to `auto`. **Done when** a screen recording of `/` with reduced motion on shows no in-between frames.

## Design tokens in code {#tokens}

### The stylesheet: `src/styles/global.css` (Tailwind 4)

`06` fixes Tailwind CSS 4 and names this stylesheet; `11` B2 builds it. Static tokens go in its `@theme` block, so Tailwind generates utilities from them and emits each as a CSS variable. Tokens that change by breakpoint are overridden in plain `:root` rules outside `@theme`; utilities read the variables, so they follow. Spacing tokens are plain `:root` properties, aliased into Tailwind's `--spacing-*` namespace with `@theme inline`.

The `initial` resets clear Tailwind's default palette, breakpoints, spacing, type sizes, radii, and shadows. That makes `bg-blue-500`, `md:`, `p-5`, `text-sm`, `rounded-lg`, and `shadow-md` fail to compile, instead of relying on review to catch them.

```css
/* src/styles/global.css. techeo.web.design v1: the only place raw values live. */
@import "tailwindcss";

/* static: emit every variable here, even ones only the type-* classes read */
@theme static {
  --color-*: initial;  --breakpoint-*: initial;  --spacing-*: initial;
  --text-*: initial;   --radius-*: initial;      --shadow-*: initial;

  --breakpoint-xs: 440px; --breakpoint-sm: 640px; --breakpoint-lg: 1024px; --breakpoint-xl: 1280px;

  --color-paper: #F5F3ED;  --color-surface: #FFFFFF;  --color-sunken: #EAE7DE;
  --color-ink: #15140F;    --color-ink-2: #4A483F;
  --color-hairline: #D3CFC3;  --color-control: #6F6C62;
  --color-accent: #FFD400;    --color-accent-hover: #EDBF00;
  --color-focus: #15140F;     --color-focus-on-ink: #FFD400;
  --color-success: #1D6A3A;   --color-success-bg: #E3F0E6;
  --color-warning: #7A4C00;   --color-warning-bg: #FFF1C7;
  --color-danger: #B3261E;    --color-danger-bg: #FBE7E5;
  --color-banner-bg: #15140F; --color-banner-text: #F5F3ED; --color-banner-link: #FFD400;
  --color-on-ink: #F5F3ED;    --color-on-ink-2: #BDB9AC;

  --font-sans: "Public Sans", "Public Sans Fallback", Arial, sans-serif;
  --font-mono: "IBM Plex Mono", "IBM Plex Mono Fallback", "Courier New", monospace;

  /* Base (phone) sizes; :root overrides below step them up. display, data, and label
     are used only through the type-* classes, because a text-* utility can't set the family. */
  --text-display: 2.5rem;  --text-display--line-height: 1;    --text-display--letter-spacing: -0.02em;
  --text-h1: 2rem;         --text-h1--line-height: 1.08;      --text-h1--letter-spacing: -0.015em; --text-h1--font-weight: 700;
  --text-h2: 1.625rem;     --text-h2--line-height: 1.15;      --text-h2--letter-spacing: -0.01em;  --text-h2--font-weight: 700;
  --text-h3: 1.25rem;      --text-h3--line-height: 1.3;       --text-h3--font-weight: 700;
  --text-lead: 1.0625rem;  --text-lead--line-height: 1.45;
  --text-body: 1.0625rem;  --text-body--line-height: 1.55;
  --text-small: 0.9375rem; --text-small--line-height: 1.45;
  --text-data: 0.9375rem;  --text-data--line-height: 1.5;
  --text-label: 0.75rem;   --text-label--line-height: 1.35;   --text-label--letter-spacing: 0.04em;
  --text-button: 1rem;     --text-button--line-height: 1.2;   --text-button--font-weight: 700;
  --text-banner: 0.875rem; --text-banner--line-height: 1.25rem;  /* banner below 440px */
  --text-fact: 1.5rem;     --text-fact--line-height: 1.2;        /* FactStrip price */
  --text-quote: 1.25rem;   --text-quote--line-height: 1.4;       /* PullQuote */

  /* The #layout scale, plus the fixed component sizes 40, 44, and 56px */
  --spacing-0: 0px;      --spacing-1: 0.25rem;  --spacing-2: 0.5rem;   --spacing-3: 0.75rem;
  --spacing-4: 1rem;     --spacing-6: 1.5rem;   --spacing-8: 2rem;     --spacing-10: 2.5rem;
  --spacing-11: 2.75rem; --spacing-12: 3rem;    --spacing-14: 3.5rem;  --spacing-16: 4rem;
  --spacing-24: 6rem;    --spacing-target: 2.75rem;  --spacing-target-min: 1.5rem;

  --container-wide: 75rem; --container-prose: 42rem;
  --radius-control: 2px;
}

@theme inline {
  --spacing-section: var(--space-section); --spacing-block: var(--space-block);
  --spacing-stack: var(--space-stack);     --spacing-tight: var(--space-tight);
  --spacing-inset: var(--space-inset);     --spacing-gutter: var(--gutter);
  --spacing-header: var(--header-h);
}

:root {
  color-scheme: only light;
  --space-section: 3rem; --space-block: 2rem; --space-stack: 1.5rem;
  --space-tight: 0.5rem; --space-inset: 1rem; --gutter: 1rem; --header-h: 3.5rem;
  /* No Tailwind namespace: components use these as var(--…) */
  --border-rule: 2px; --border-box: 1px; --border-heavy: 4px; --border-band: 6px;
  --underline-offset-link: 3px; --underline-offset-tertiary: 4px;
  --focus-width: 3px; --focus-offset: 2px; --duration-fast: 120ms;
}
@media (min-width: 640px) {
  :root { --text-display: 3rem; --text-h1: 2.5rem; --text-h2: 1.875rem; --text-lead: 1.1875rem;
          --space-section: 4rem; --space-inset: 1.5rem; --gutter: 1.5rem; }
}
@media (min-width: 1024px) {
  :root { --text-display: 3.5rem; --text-h1: 3.25rem; --text-h1--line-height: 1.05;
          --text-h2: 2.25rem; --text-h2--line-height: 1.1; --text-h3: 1.375rem; --text-lead: 1.3125rem;
          --text-body: 1.125rem; --text-data: 1rem; --text-label: 0.8125rem;
          --space-section: 6rem; --space-block: 3rem; --space-inset: 2rem; --gutter: 2rem; --header-h: 4rem; }
}
@media (prefers-reduced-motion: reduce) { :root { --duration-fast: 0ms; } }

/* The three Plex Mono styles. Longhands, not the font shorthand, which would reset font-variant-numeric. */
@layer components {
  .type-display { font-family: var(--font-mono); font-weight: 600; font-size: var(--text-display);
                  line-height: var(--text-display--line-height); letter-spacing: var(--text-display--letter-spacing); }
  .type-data    { font-family: var(--font-mono); font-weight: 400; font-size: var(--text-data);
                  line-height: var(--text-data--line-height); }
  .type-label   { font-family: var(--font-mono); font-weight: 600; font-size: var(--text-label);
                  line-height: var(--text-label--line-height); letter-spacing: var(--text-label--letter-spacing);
                  text-transform: uppercase; }
}

html { background: var(--color-paper); color: var(--color-ink); font-family: var(--font-sans);
       font-synthesis: none; font-variant-numeric: lining-nums tabular-nums;
       scroll-padding-top: calc(var(--header-h) + 8px); }
em, cite { font-style: normal; }  /* no italic file is loaded (#typography) */
@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
@media (max-height: 400px) { #site-header { position: static; } }
/* A text control has focus on a touch screen, so the keyboard is probably open (#c-forms-phone). */
@media (pointer: coarse) {
  html:has(:is(input:not([type="radio"], [type="checkbox"]), textarea, select):focus) #site-header { position: static; }
}
:focus-visible { outline: var(--focus-width) solid var(--color-focus); outline-offset: var(--focus-offset); }
/* .on-ink is set on #season-banner and #site-footer */
.on-ink :focus-visible { outline-color: var(--color-focus-on-ink); }
::selection { background: var(--color-accent); color: var(--color-ink); }
@media (forced-colors: active) { :focus-visible { outline-color: Highlight; } }

/* URLs stand in for 06's hashed paths. */
@font-face { font-family: "Public Sans"; font-weight: 400 700; font-style: normal; font-display: swap;
  src: url("/fonts/public-sans-latin-wght-400-700.woff2") format("woff2"); }
@font-face { font-family: "IBM Plex Mono"; font-weight: 400; font-style: normal; font-display: swap;
  src: url("/fonts/ibm-plex-mono-400.woff2") format("woff2"); }
@font-face { font-family: "IBM Plex Mono"; font-weight: 600; font-style: normal; font-display: swap;
  src: url("/fonts/ibm-plex-mono-600.woff2") format("woff2"); }
/* The two "... Fallback" faces are generated by a tool (#typography), never written by hand. */
```

### Rules for using the tokens

- **The Plex Mono styles are classes.** `display`, `data`, and `label` set the family, and `label` sets uppercase, which a `text-*` utility can't do. Components use `type-display`, `type-data`, and `type-label`. A bare `text-display`, `text-data`, or `text-label` would render in Public Sans, so review fails it.
- **Tokens with no Tailwind namespace** (the `--border-*` widths, the underline offsets, focus, and duration) are used as `var(--…)` in component styles, or through an `@utility` defined in this file. Underline thickness reuses `--border-box` (1px at rest) and `--border-rule` (2px on hover).
- **Off-scale classes.** The resets stop most of them compiling, but Tailwind 4 still generates any integer border width, outline width, underline offset, or decoration thickness (`border-3`, `underline-offset-5`), whatever the theme says. CI's grep therefore also fails on those numeric classes in templates.
- **No opacity modifiers** such as `bg-ink/50`. The colors are plain hex, and translucent ink would invalidate the contrast table.
- **No arbitrary values** such as `text-[19px]`. CI greps the templates for `-[` and fails on any match not on `06`'s allowlist, which is expected to cover grid templates only.

**Done when**, on the installed Tailwind version, a scratch template using `p-5`, `text-sm`, `bg-blue-500`, `rounded-lg`, and `md:flex` produces no CSS for any of them; `max-w-prose` resolves to 42rem, not a built-in 65ch; and every variable the `type-*` classes and the `:root` overrides read is present in the built CSS.

**Compatibility note: a JS config.** If `06` ever needs one (for a plugin that requires it), v4 reads it only through `@config "../../tailwind.config.mjs";`, placed in this stylesheet directly after `@import "tailwindcss";`, as Tailwind's docs show. v4 then reads `theme` and `theme.extend` for compatibility. It ignores `corePlugins`, `safelist`, and `separator`, and needs no `content` key, because it finds sources itself. We haven't verified that a JS config's top-level `colors` and `screens` remove v4's defaults the way the `initial` resets do, so the resets stay in `@theme` either way.

## Deliverables and acceptance {#deliverables}

`11` owns the schedule, owners, and hours. This table names the `11` task that delivers each item. v1 has no separate designer role, so the Builder produces items 1–7 and the ladder; `11`'s v2 budget carries the designer hours for the engines diagram.

| # | Deliverable | Scheduled in `11` |
|---|---|---|
| 1 | Wordmark files, including `logo-square-512.png` | B3 |
| 2 | Favicon set and `site.webmanifest` | B3 |
| 3 | The three share images, plus the editable template on Techeo's account (D4) | B3 |
| 4 | The three font files, the instancing and subset script, and the license files | B2 |
| 5 | `src/styles/global.css` as written in #tokens (the `@theme` block, the `:root` tokens, and the `type-*` classes), plus a contrast report generated from the tokens using the #color method | B2 |
| 6 | Every v1 component in #c-matrix, in every state, in both season states | B4 |
| 7 | **A component gallery** for development and preview builds only. It never appears in production, the sitemap, or `02`'s route manifest, and preview hosts send `X-Robots-Tag: noindex`. `06` picks the mechanism. | B4 |
| 8 | Photos P1–P5, edited, redacted, logged, and exported, with releases filed with `10` | P1–P5 |
| 9 | The ladder in HTML/CSS; the engines diagram in SVG (v2) | B4 (ladder) / v2 build plan (diagram) |

**Acceptance.** v1 does not launch until every item below passes on the production build, in both OPEN and WAITLIST.

- [ ] **Contrast.** Every text and background pair in the built CSS appears in the #color table, and axe-core finds zero contrast violations on every v1 URL.
- [ ] **Keyboard.** Every interactive element is reachable in DOM order. Its focus ring is 3px, has at least 3:1 contrast, and is never hidden under the sticky header (SC 2.4.7, 2.4.11, 1.4.11).
- [ ] **Reflow, zoom, and spacing.** Nothing scrolls sideways at 320px except table scroll regions. Nothing is lost at 200% zoom. Nothing clips under the SC 1.4.12 text-spacing overrides.
- [ ] **Targets.** Every target is at least 24 × 24 or meets the spacing exception; primary actions and navigation are at least 44 × 44. Measured at 375px.
- [ ] **Layout.**
  - The #first-screen test passes in both states.
  - The header and the section nav each fit on one line at 320, 439, 440, 1024, and 1280px (`02`). (The v2 header adds 639 and 640px; see #c-mobile-menu.)
  - The banner holds to two lines at 320px, or `03`'s fallback copy ships.
- [ ] **Phone forms.** The #c-forms-phone device test passes on reserve, qualify, teardown, and the calculator, in iOS Safari and Android Chrome, with the keyboard open.
- [ ] **Modes.** In Windows contrast themes, every control, border, and focus ring stays visible. With reduced motion on, nothing moves.
- [ ] **Fonts.**
  - Exactly three font files, 70 KB or less in total, with no more than two preloaded (`06` #performance).
  - A row of "1111" aligns over a row of "8888."
  - No U+2192, U+2264, or U+2265 appears outside Plex Mono.
  - The font swap adds less than 0.01 to CLS in Lighthouse's default mobile run and in the 375 × 667 run (#typography).
- [ ] **Wordmark.** Renders identically with web fonts blocked, and is never narrower than 64px.
- [ ] **Numbers.** Every measured figure shows its window, and its source wherever it renders outside a `ProofStrip`. Every made-up figure sits in an `example` callout. Nothing animates.
- [ ] **Photos.** Each photo has a signed log row, zero OCR hits, stripped metadata, and releases and license coverage where needed. None shows customer data at 200% zoom.
- [ ] **Review.** Zero #tropes hits. The visual swap test passes. The FAQ screen-reader test has been run, recorded, and a variant chosen.

## Open questions for the founder {#open-questions}

1. **Accent color.** Yellow `#FFD400` with ink reads as work-gear high-visibility: it says "act here," and it stays well clear of Homets' orange. The alternative is ink only, with no accent color. *Recommended default: yellow, used exactly as specified above.*
2. **Wordmark.** Lowercase `techeo`, set in IBM Plex Mono SemiBold. *Recommended default: approve it as it is, and revisit only in v2's brand work (D14).*
3. **Photographer.** A hired local photographer for a half-day, or Blake's phone. *Recommended default: hire one for P1–P5 in a single session in Weeks 5–6. The portrait is the one image every prospect and organizer sees. `11` adds the cost to its reconciliation.*
4. **Black-and-white photography.** *Recommended default: black-and-white on the site. Keep color masters, and make the organizer download a color JPEG.*
5. **Homets staff faces.** *Recommended default: no identifiable customer-service faces in v1. Shoot backs, hands, and headsets, and still collect releases from anyone who could be recognized.*
6. **The dispatch-board photo** is the riskiest image, because it can expose customer PII, technician names, and job counts. *Recommended default: include it only with the tight crop and the full #pii procedure. If it hasn't passed OCR and a second reviewer by `11`'s P4 deadline (Fri Nov 6), ship without it. P2 and P4 still meet D9's minimum.*
7. **Portrait wardrobe.** *Recommended default: a plain shirt with no Homets logo, so the portrait works for Techeo, the press, and podcasts whatever the license covers.*
8. **Numbered sections on `/`** ("01"–"11," starting with the first section after the hero; decorative only). *Recommended default: on. They help a reader keep their place in a long scroll on a phone, and they fit the manual direction.*
9. **Safari's shorter first screen.** On a 375 × 667 phone, iOS Safari's toolbars leave about 550px. With the one-line eyebrow and three-line subhead (#first-screen), `01`'s items 1–4 fit in both states, and the account line ends about 17px above the fold in WAITLIST. The primary button falls about 47px below the fold in WAITLIST and only just clears it in OPEN. *Recommended default: accept it. The H1, Blake's name, Homets, the radius, and the account line stay visible, and the sticky header CTA is always on screen. Revisit if the real-iPhone screenshot (#first-screen) or the five-second test fails.*
10. **Dark mode.** *Recommended default: light only through v2. Reconsider at v3 with `09`'s data.*
11. **The Homets license and D9's photo minimum.** Without an executed license covering brand and photo use by Fri Nov 6, v1 ships P1 only, below D9's minimum of a portrait plus 2–4 operational photos (#photography). *Recommended default: ask counsel to execute the license's photo clause by Nov 6. Otherwise launch with P1 only, and ask for D9 to be revised to match.*
