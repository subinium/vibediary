import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const DIARY_DIR = path.join(process.cwd(), 'content/diary');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/diary.ts');

interface ArchiveItem {
  title: string;
  url: string;
  author?: string;
}

interface DiaryEntry {
  date: string;
  content: string;
  category: 'creative' | 'dev';
  thumbnail?: string;
  thumbnailLink?: string;
  relatedPost?: string;
  archives?: ArchiveItem[];
}

function buildDiary() {
  const files = fs.readdirSync(DIARY_DIR).filter(f => f.endsWith('.md'));

  const entries: DiaryEntry[] = files
    .map(file => {
      const filePath = path.join(DIARY_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(content);

      const date = file.replace('.md', ''); // filename is YYYY-MM-DD.md

      return {
        date,
        content: body.trim(),
        category: data.category || 'dev',
        ...(data.thumbnail && { thumbnail: data.thumbnail }),
        ...(data.thumbnailLink && { thumbnailLink: data.thumbnailLink }),
        ...(data.relatedPost && { relatedPost: data.relatedPost }),
        ...(data.archives && { archives: data.archives }),
      } as DiaryEntry;
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // Sort by date descending

  const output = `// Auto-generated from content/diary/*.md
// Run: bun run build:diary

export interface ArchiveItem {
  title: string;
  url: string;
  author?: string;
}

export interface DiaryEntry {
  date: string;
  content: string;
  category: 'creative' | 'dev';
  thumbnail?: string;
  thumbnailLink?: string;
  relatedPost?: string;
  archives?: ArchiveItem[];
}

export const diaryEntries: DiaryEntry[] = ${JSON.stringify(entries, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`Generated ${entries.length} diary entries`);
}

buildDiary();
