---
description: Git add, commit, and push changes
allowed-tools: Bash
argument-hint: <commit message>
---

# Git Push

Add all changes, commit with message, and push to GitHub.

## Current status
!`git status --short`

## Current branch
!`git branch --show-current`

## Task

1. Stage all changes:
```bash
git add -A
```

2. Commit with the provided message ($ARGUMENTS):
```bash
git commit -m "$(cat <<'EOF'
$ARGUMENTS

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

3. Push to remote:
```bash
git push
```

## Examples

```
/push Add new diary entry for Jan 6
```

```
/push Fix styling issues
```
