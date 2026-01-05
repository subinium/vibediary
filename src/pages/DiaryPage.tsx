import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { diaryEntries } from '../data/diary';
import DiaryEntry from '../components/DiaryEntry';
import CalendarView from '../components/CalendarView';

type ViewMode = 'list' | 'calendar';

interface MonthGroup {
  key: string;
  label: string;
  entries: typeof diaryEntries;
}

export default function DiaryPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const groupedEntries = useMemo(() => {
    const groups: MonthGroup[] = [];
    let currentMonth = '';

    diaryEntries.forEach((entry) => {
      const date = new Date(entry.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
      const monthLabel = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });

      if (monthKey !== currentMonth) {
        groups.push({
          key: monthKey,
          label: monthLabel,
          entries: [entry],
        });
        currentMonth = monthKey;
      } else {
        groups[groups.length - 1].entries.push(entry);
      }
    });

    return groups;
  }, []);

  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium text-warm-900">Diary</h1>
            <p className="text-warm-600 mt-1">
              Daily notes on my AI journey and experiments.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-warm-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-warm-50 text-warm-900 shadow-sm'
                  : 'text-warm-500 hover:text-warm-700'
              }`}
              aria-label="List view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'calendar'
                  ? 'bg-warm-50 text-warm-900 shadow-sm'
                  : 'text-warm-500 hover:text-warm-700'
              }`}
              aria-label="Calendar view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {viewMode === 'list' ? (
        <div className="space-y-12">
          {groupedEntries.map((group, groupIndex) => (
            <motion.section
              key={group.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-sm font-medium text-warm-500 uppercase tracking-wide whitespace-nowrap">
                  {group.label}
                </h2>
                <div className="flex-1 h-px bg-warm-200" />
              </div>

              <div>
                {group.entries.map((entry, index) => (
                  <DiaryEntry
                    key={entry.date}
                    entry={entry}
                    index={groupIndex * 10 + index}
                  />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      ) : (
        <CalendarView entries={diaryEntries} />
      )}
    </div>
  );
}
