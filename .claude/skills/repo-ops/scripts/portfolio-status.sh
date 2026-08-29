#!/usr/bin/env bash
# portfolio-status.sh — one-glance state of every cloned Homets business repo.
#
# Usage: portfolio-status.sh [repos-root]   (default: /home/user)
# For each clone: current branch, last commit (author + age + subject),
# dirty-file count, and unpushed-commit count. Read-only.

ROOT="${1:-/home/user}"
REPOS="CSDispatchHomets integrated-home-hub homets-home-tech longislandhvacrepair homets-comfort-architect complusmechanical hvac-catalog project-phoenix homets-pitch-deck homets-smart-service"

printf "%-26s %-32s %-8s %-8s %s\n" "REPO" "BRANCH" "DIRTY" "AHEAD" "LAST COMMIT"
for r in $REPOS; do
  d="$ROOT/$r"
  if [ ! -d "$d/.git" ]; then
    printf "%-26s %s\n" "$r" "(not cloned)"
    continue
  fi
  branch=$(git -C "$d" rev-parse --abbrev-ref HEAD 2>/dev/null)
  dirty=$(git -C "$d" status --porcelain 2>/dev/null | wc -l | tr -d ' ')
  upstream=$(git -C "$d" rev-parse --abbrev-ref --symbolic-full-name "@{u}" 2>/dev/null)
  if [ -n "$upstream" ]; then
    ahead=$(git -C "$d" rev-list --count "$upstream..HEAD" 2>/dev/null)
  else
    ahead="-"
  fi
  last=$(git -C "$d" log -1 --format="%an, %ar — %s" 2>/dev/null | cut -c1-70)
  printf "%-26s %-32s %-8s %-8s %s\n" "$r" "$branch" "$dirty" "$ahead" "$last"
done
echo ""
echo "Deploy reminder: hub/home-tech/complus auto-deploy from their default"
echo "branches with no staging — see repo-ops SKILL.md before merging anything."
