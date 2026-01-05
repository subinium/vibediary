---
description: Add or update a diary entry with optional archives
allowed-tools: Read, Write, Edit, Bash
argument-hint: <date> <category> <content> [--archive "title" "url" "author"] [--related url] [--thumbnail url]
---

# Add Diary Entry

Add a new diary entry or update an existing one in VibeDiary.

## Current diary files
!`ls -la content/diary/*.md 2>/dev/null | tail -10`

## Arguments format

$ARGUMENTS should be parsed as:
- **date**: YYYY-MM-DD format (required)
- **category**: `creative` or `dev` (required)
- **content**: The diary content with markdown links like `[text](url)` (required)
- **--archive**: Add to reading list: title, url, author (optional, can repeat)
- **--related**: Related post URL (optional)
- **--thumbnail**: Thumbnail URL (optional)
- **--thumbnailLink**: Thumbnail link URL (optional)

## File format

Create/update `content/diary/YYYY-MM-DD.md`:

```markdown
---
category: creative
thumbnail: https://...  # optional
thumbnailLink: https://... # optional
relatedPost: https://... # optional
archives:  # optional
  - title: Article Title
    url: https://...
    author: Author Name
---

Content here with [links](https://...).
```

## After creating/updating

1. Run `~/.bun/bin/bun run scripts/build-diary.ts` to regenerate diary data
2. Confirm the entry was added

## Examples

Add simple entry:
```
/diary 2026-01-06 dev "Built new feature for [VibeDiary](https://github.com/subinium/vibediary)."
```

Add with archive:
```
/diary 2026-01-06 creative "Created AI video." --archive "Great article" "https://x.com/..." "Author Name" --related "https://x.com/mypost"
```
