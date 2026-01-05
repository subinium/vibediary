import { motion } from 'framer-motion';
import type { DiaryEntry as DiaryEntryType } from '../data/diary';

interface Props {
  entry: DiaryEntryType;
  index: number;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return { day, month, year };
}

function parseContent(content: string) {
  const parts: (string | { text: string; url: string })[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push({ text: match[1], url: match[2] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

function getLinkIcon(url: string) {
  if (url.includes('x.com') || url.includes('twitter.com')) {
    return (
      <svg className="w-3.5 h-3.5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return null;
}

function CategoryBadge({ category }: { category: 'creative' | 'dev' }) {
  const styles = {
    creative: 'bg-amber-100 text-amber-700',
    dev: 'bg-blue-100 text-blue-700',
  };
  const labels = {
    creative: 'Creative',
    dev: 'Dev',
  };
  return (
    <span className={`text-xs px-1.5 py-0.5 rounded ${styles[category]}`}>
      {labels[category]}
    </span>
  );
}

export default function DiaryEntry({ entry, index }: Props) {
  const { day, month, year } = formatDate(entry.date);
  const contentParts = parseContent(entry.content);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex gap-4 sm:gap-6 pb-10 mb-10 border-b border-warm-200 last:border-b-0 last:mb-0 last:pb-0"
    >
      <div className="flex-shrink-0 w-12 sm:w-16 text-center pt-1">
        <div className="text-2xl sm:text-3xl font-semibold text-warm-800">{day}</div>
        <div className="text-xs text-warm-500 uppercase tracking-wide">{month}</div>
        <div className="text-xs text-warm-400">{year}</div>
      </div>

      <div className="flex-1 border-l border-warm-200 pl-4 sm:pl-6">
        <div className="mb-3">
          <CategoryBadge category={entry.category} />
        </div>

        {entry.thumbnail && (
          <a
            href={entry.thumbnailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 rounded-lg overflow-hidden max-w-xs"
          >
            <img
              src={entry.thumbnail}
              alt="Thumbnail"
              className="w-full aspect-video object-cover hover:opacity-90 transition-opacity"
            />
          </a>
        )}

        <div className="text-warm-700 whitespace-pre-line leading-relaxed">
          {contentParts.map((part, i) =>
            typeof part === 'string' ? (
              <span key={i}>{part}</span>
            ) : (
              <a
                key={i}
                href={part.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-800 underline decoration-warm-400 underline-offset-2 hover:decoration-accent-dark hover:text-accent-dark transition-colors"
              >
                {getLinkIcon(part.url)}{part.text}
              </a>
            )
          )}
          {entry.relatedPost && (
            <>
              {' ('}
              <a
                href={entry.relatedPost}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-800 underline decoration-warm-400 underline-offset-2 hover:decoration-accent-dark hover:text-accent-dark transition-colors"
              >
                {getLinkIcon(entry.relatedPost)}Related post
              </a>
              {')'}
            </>
          )}
        </div>

        {entry.archives && entry.archives.length > 0 && (
          <div className="mt-4 pt-3 border-t border-warm-200">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-xs font-medium text-purple-700 uppercase tracking-wide">Reading List</span>
            </div>
            <ul className="space-y-1.5">
              {entry.archives.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-warm-400 mt-0.5">•</span>
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-800 underline decoration-warm-400 underline-offset-2 hover:decoration-accent-dark hover:text-accent-dark transition-colors"
                    >
                      {getLinkIcon(item.url)}{item.title}
                    </a>
                    {item.author && (
                      <span className="text-warm-500 ml-1">— {item.author}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
}
