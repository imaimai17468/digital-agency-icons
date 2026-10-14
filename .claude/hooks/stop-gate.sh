#!/usr/bin/env bash
# Stop gate: when the working tree holds a change outside Markdown, build the
# packages, then run `pnpm check` and the tests, and block the turn on failure
# with the output as the reason.
#
# A Stop that this gate already blocked once carries `stop_hook_active: true`;
# that run reports failures as a warning instead, so a failure the agent
# cannot fix does not loop forever.

set -uo pipefail

INPUT=$(cat)
ROOT="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
cd "$ROOT" || exit 0

CHANGED=$(git status --porcelain --untracked-files=all | awk '{print $NF}' | grep -v '\.md$' || true)
if [ -z "$CHANGED" ]; then
  exit 0
fi

LOG=$(mktemp)
trap 'rm -f "$LOG"' EXIT

if pnpm build:packages >"$LOG" 2>&1 && pnpm check >>"$LOG" 2>&1 && pnpm test:only >>"$LOG" 2>&1; then
  exit 0
fi

REASON="Stop gate failed (pnpm build:packages → pnpm check → pnpm test:only). Fix it before finishing:
$(tail -n 60 "$LOG")"

if [ "$(printf '%s' "$INPUT" | jq -r '.stop_hook_active // false')" = "true" ]; then
  jq -n --arg msg "$REASON" '{systemMessage: ("⚠️ " + $msg)}'
else
  jq -n --arg reason "$REASON" '{decision: "block", reason: $reason}'
fi
