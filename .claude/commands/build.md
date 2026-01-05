---
description: Build VibeDiary and optionally push to GitHub
allowed-tools: Bash
argument-hint: [--push] [--message "commit message"]
---

# Build VibeDiary

Build the diary data and project.

## Arguments

- **--push**: Also commit and push to GitHub (optional)
- **--message**: Custom commit message (optional, used with --push)

## Steps

1. Generate diary data from markdown files:
```bash
~/.bun/bin/bun run scripts/build-diary.ts
```

2. Build the project:
```bash
~/.bun/bin/bun run tsc -b && ~/.bun/bin/bun run vite build
```

3. If `--push` is specified:
```bash
git add -A
git commit -m "message"
git push
```

## Examples

Build only:
```
/build
```

Build and push:
```
/build --push --message "Add new diary entry"
```
