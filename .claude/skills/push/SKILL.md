---
name: push
description: Git add, commit, and push changes (project)
allowed-tools: Bash
---

# Git Push

Add all changes, commit with message, and push to GitHub.

## Task

1. Check current changes:
```bash
git status --short
git diff --stat
```

2. Stage all changes:
```bash
git add -A
```

3. Generate commit message based on the changes:
- Look at what files changed
- Summarize the changes concisely
- Use conventional commit style if appropriate (feat:, fix:, docs:, etc.)

4. Commit with the generated message:
```bash
git commit -m "$(cat <<'EOF'
<generated commit message based on changes>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

5. Push to remote:
```bash
git push
```
