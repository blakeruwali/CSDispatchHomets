# SOPs — Standard Operating Procedures

One folder per department. Each SOP is a self-contained Markdown doc with frontmatter. Cross-reference other docs by `id`, never by relative path (paths change; ids don't).

## Departments

- `csm/` — Customer Service Manager team (call handling, intake, booking). Source: `Homets_CSM_SOP_v1.0_Master.md`.
- `dispatch/` — Dispatcher team (job assignment, routing, tech coordination). Source: current dispatch tool slides.
- `sales/` — Technician sales process (in-home diagnostic → quote → close). Source: `techSalesSlides.tsx`.
- `install/` — Install team SOPs. **Status: draft-needed** (Phase 2).
- `plumbing/` — Plumbing-specific procedures. **Status: draft-needed** (Phase 2).

## Structure convention

Each SOP is broken into sections at the H2 level. Sections are addressable — the scoring tool (`/checklist`) links rubric items to specific section anchors so a low score on "greeting" jumps directly to the greeting section of the SOP.

```markdown
## Greeting {#greeting}

Verbatim: "Thank you for choosing Home+ Air and Heat, this is [name], how can we serve you today?"
```

The `{#greeting}` anchor is the scoring rubric's link target.
