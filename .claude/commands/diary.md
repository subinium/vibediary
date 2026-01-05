---
description: Add or update a diary entry with optional archives
allowed-tools: Read, Write, Edit, Bash
---

# Add Diary Entry

사용자가 다이어리 추가를 요청하면, 어떤 형식으로 말하든 알아서 파악해서 추가해줘.

## 사용자 입력 예시 (다 똑같이 처리)

```
/diary 1월 6일 dev VibeDiary 업데이트 완료
/diary 2026-01-06 creative 영상 제작함
/diary 어제 dev 새 기능 추가
/diary 12/25 creative "크리스마스 영상" --related https://x.com/...
/diary 오늘 creative 뮤비 만들었음 유튜브 https://youtu.be/xxx
```

## 파악해야 할 것

1. **날짜**: 어떤 형식이든 YYYY-MM-DD로 변환
   - "1월 6일", "1/6", "01-06" → 2026-01-06
   - "어제", "오늘", "그제" → 실제 날짜 계산
   - 연도 없으면 현재 연도(2026) 사용

2. **카테고리**: creative 또는 dev
   - 영상, 뮤비, 음악, 이미지 관련 → creative
   - 코드, 개발, 빌드, 기능 관련 → dev
   - 명시하면 그대로 사용

3. **내용**: 나머지 텍스트를 자연스러운 문장으로 정리
   - URL이 있으면 마크다운 링크로 변환
   - YouTube URL → 썸네일 자동 추가

4. **옵션들** (있으면):
   - related post URL → relatedPost
   - archive/읽은글 → archives 배열
   - 썸네일 → thumbnail, thumbnailLink

## 파일 생성

`content/diary/YYYY-MM-DD.md`:

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

## 마지막에 꼭 실행

```bash
~/.bun/bin/bun run scripts/build-diary.ts
```
