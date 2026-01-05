import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DiaryEntry } from '../data/diary';

interface Props {
  entries: DiaryEntry[];
}

function formatDateTitle(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
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

export default function CalendarView({ entries }: Props) {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedEntry, setSelectedEntry] = useState<DiaryEntry | null>(null);

  const entryMap = useMemo(() => {
    const map = new Map<string, DiaryEntry>();
    entries.forEach((entry) => map.set(entry.date, entry));
    return map;
  }, [entries]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const monthName = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const days = useMemo(() => {
    const result: (number | null)[] = [];
    for (let i = 0; i < startDay; i++) {
      result.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      result.push(i);
    }
    return result;
  }, [startDay, daysInMonth]);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getDateString = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const handleDayClick = (day: number) => {
    const dateStr = getDateString(day);
    const entry = entryMap.get(dateStr);
    if (entry) {
      setSelectedEntry(entry);
    }
  };

  return (
    <div>
      <div className="bg-warm-100/50 rounded-lg p-4 sm:p-6 border border-warm-200">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goToPrevMonth}
            className="p-2 text-warm-600 hover:text-warm-900 hover:bg-warm-200/50 rounded transition-colors"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-lg font-medium text-warm-900">{monthName}</h3>
          <button
            onClick={goToNextMonth}
            className="p-2 text-warm-600 hover:text-warm-900 hover:bg-warm-200/50 rounded transition-colors"
            aria-label="Next month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs text-warm-500 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const dateStr = getDateString(day);
            const hasEntry = entryMap.has(dateStr);

            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                disabled={!hasEntry}
                className={`
                  aspect-square flex items-center justify-center text-sm rounded transition-colors
                  ${hasEntry
                    ? 'bg-warm-300/50 text-warm-900 hover:bg-warm-400/50 cursor-pointer font-medium'
                    : 'text-warm-400 cursor-default'
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedEntry && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-6 p-6 bg-warm-100/30 rounded-lg border border-warm-200"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium text-warm-900">
                {formatDateTitle(selectedEntry.date)}
              </h3>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-1 text-warm-500 hover:text-warm-700 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedEntry.thumbnail && (
              <a
                href={selectedEntry.thumbnailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4 rounded-lg overflow-hidden max-w-xs"
              >
                <img
                  src={selectedEntry.thumbnail}
                  alt="Thumbnail"
                  className="w-full aspect-video object-cover hover:opacity-90 transition-opacity"
                />
              </a>
            )}

            <div className="text-warm-700 whitespace-pre-line leading-relaxed">
              {parseContent(selectedEntry.content).map((part, i) =>
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
                    {part.text}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
