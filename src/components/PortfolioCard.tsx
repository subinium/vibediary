import { motion } from 'framer-motion';
import type { PortfolioItem } from '../data/portfolio';

interface Props {
  item: PortfolioItem;
  index: number;
}

export default function PortfolioCard({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex gap-4 p-4 bg-warm-100/50 rounded-lg border border-warm-200 hover:border-warm-300 transition-colors"
    >
      {item.thumbnail && (
        <a
          href={item.youtube || item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-32 sm:w-40 rounded-lg overflow-hidden"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full aspect-video object-cover hover:opacity-90 transition-opacity"
          />
        </a>
      )}

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-warm-900 mb-1">{item.title}</h3>
        <p className="text-warm-600 text-sm mb-3 line-clamp-2">{item.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-1.5 py-0.5 bg-warm-200/50 text-warm-700 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 text-sm">
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 hover:text-warm-900 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {item.youtube && (
            <a
              href={item.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 hover:text-warm-900 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 hover:text-warm-900 transition-colors flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Link
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
