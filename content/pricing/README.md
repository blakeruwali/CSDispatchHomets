# Pricing

- `tokens.md` — canonical price definitions. Everything else references these tokens.
- Other docs in this folder: rate cards, financing terms, deposit policy narratives — the *human-readable* pricing docs that reference the tokens.

**Never hardcode a price outside `tokens.md`.** Later phase: `tokens.md` gets replaced by a generated file synced from the ServiceTitan pricebook, and this rule keeps every doc automatically correct.
