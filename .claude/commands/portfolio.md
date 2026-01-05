---
description: Add a new portfolio item
allowed-tools: Read, Edit
argument-hint: <title> --category <creative|development> --description <desc> [--github url] [--youtube url] [--link url] [--tags tag1,tag2]
---

# Add Portfolio Item

Add a new item to the portfolio in VibeDiary.

## Current portfolio
!`grep -A2 "id:" src/data/portfolio.ts | head -30`

## Arguments format

$ARGUMENTS should be parsed as:
- **title**: Project title (required)
- **--category**: `creative` or `development` (required)
- **--description**: Short description (required)
- **--github**: GitHub URL (optional)
- **--youtube**: YouTube URL (optional)
- **--link**: Project link (optional)
- **--thumbnail**: Thumbnail URL (optional)
- **--tags**: Comma-separated tags (optional)

## Task

1. Read `src/data/portfolio.ts`
2. Add new item to the `portfolioItems` array with format:
```typescript
{
  id: 'kebab-case-id',
  title: 'Title',
  description: 'Description',
  category: 'creative' | 'development',
  tags: ['tag1', 'tag2'],
  github?: 'https://...',
  youtube?: 'https://...',
  link?: 'https://...',
  thumbnail?: 'https://...',
}
```
3. Place creative items at top, development items after

## Examples

```
/portfolio "My Project" --category development --description "A cool project" --github "https://github.com/user/repo" --tags "React,TypeScript"
```
