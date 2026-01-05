---
description: Add a new portfolio item
allowed-tools: Read, Edit
---

# Add Portfolio Item

사용자가 포트폴리오 추가를 요청하면, 어떤 형식으로 말하든 알아서 파악해서 추가해줘.

## 사용자 입력 예시 (다 똑같이 처리)

```
/portfolio VibeDiary 개인 블로그 프로젝트 github.com/subinium/vibediary
/portfolio "새 영상" creative 유튜브 https://youtu.be/xxx
/portfolio ethviz dev 블록체인 시각화 도구
/portfolio 뮤비 消えない星 suno higgsfield로 만듦
```

## 파악해야 할 것

1. **제목**: 프로젝트/작품 이름

2. **카테고리**: creative 또는 development
   - 영상, 뮤비, 음악, 유튜브 → creative
   - 코드, 개발, 깃헙, 앱, 도구 → development
   - 명시하면 그대로 사용

3. **설명**: 자연스러운 한 줄 설명 생성

4. **링크들** (URL 보고 자동 판단):
   - github.com → github 필드
   - youtube.com, youtu.be → youtube 필드 + 썸네일 자동
   - 그 외 → link 필드

5. **태그**: 내용에서 키워드 추출

## 파일 수정

`src/data/portfolio.ts`의 `portfolioItems` 배열에 추가:

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

- creative는 배열 앞쪽에
- development는 배열 뒤쪽에
