# Protocols

Decision trees and standard operating procedures for edge cases and time-sensitive scenarios.

- `emergency/` — triage matrix (no heat in winter, no AC in heatwave, gas leak, water leak, etc.)
- `warranty/` — warranty determination flow
- `callback/` — recall/callback handling (job returned within X days)
- `after-hours/` — Posh handoff, on-call rotation, emergency dispatch outside {{price:csm_hours}}

Protocol docs are structured as numbered decision steps so the scoring tool can score dispatcher decisions step-by-step.
