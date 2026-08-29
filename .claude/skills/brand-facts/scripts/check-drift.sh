#!/usr/bin/env bash
# check-drift.sh — scan the Homets repo clones for business facts that drift.
#
# Usage: check-drift.sh [repos-root]   (default: /home/user)
# Scans whichever business repos are cloned under the root and prints every
# occurrence of the fact classes that have historically drifted: phone
# numbers, membership prices, booking-platform links, and hometsair.com
# references inside non-Homets brand repos. Output is repo:file:line so a
# human (or Claude) can judge each hit — the script finds, it never fixes.

ROOT="${1:-/home/user}"
REPOS="CSDispatchHomets integrated-home-hub homets-home-tech longislandhvacrepair homets-comfort-architect complusmechanical hvac-catalog project-phoenix homets-pitch-deck homets-smart-service"
EXCLUDES="--exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=build --exclude=*.lock --exclude=*.lockb --exclude=package-lock.json --exclude=*.map --exclude=*.min.js"

scan () { # $1 label, $2 pattern, $3 repos
  echo ""
  echo "── $1"
  local found=0
  for r in $3; do
    d="$ROOT/$r"
    [ -d "$d" ] || continue
    # shellcheck disable=SC2086
    hits=$(grep -rInE $EXCLUDES "$2" "$d/src" "$d/content" "$d/public" "$d/supabase" "$d/netlify.toml" 2>/dev/null | head -12)
    if [ -n "$hits" ]; then
      echo "$hits" | sed "s|$ROOT/|  |"
      found=1
    fi
  done
  [ "$found" = 0 ] && echo "  (no hits in cloned repos)"
}

echo "Homets brand-fact drift scan — root: $ROOT"
missing=""
for r in $REPOS; do [ -d "$ROOT/$r" ] || missing="$missing $r"; done
[ -n "$missing" ] && echo "Not cloned (skipped):$missing"

scan "Phone numbers (verify each against the canonical number)" \
  '\(516\) ?[0-9]{3}-[0-9]{4}|\(646\) ?[0-9]{3}-[0-9]{4}|\(332\) ?[0-9]{3}-[0-9]{4}|\(555\) ?[0-9]{3}-[0-9]{4}|516-[0-9]{3}-[0-9]{4}' \
  "$REPOS"

scan "Membership prices (authority: content/pricing/tokens.md — \$19.99 Home+)" \
  '\$19\.99|\$49\.99|\$299|19\.99/mo|49\.99' \
  "$REPOS"

scan "Booking platforms (three+ platforms have shipped; verify links)" \
  'calendly\.com|simplybook\.me|acuity\.|getjobber\.com|scheduler\.servicetitan' \
  "$REPOS"

scan "hometsair.com references inside OTHER brands (fork residue)" \
  'hometsair\.com' \
  "longislandhvacrepair complusmechanical"

echo ""
echo "Done. Judge each hit against .claude/skills/brand-facts/SKILL.md —"
echo "a hit is drift only when it contradicts the fact authority."
