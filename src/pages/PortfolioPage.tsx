import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioItems, portfolioCategories } from '../data/portfolio';
import PortfolioCard from '../components/PortfolioCard';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-medium text-warm-900">Portfolio</h1>
            <p className="text-warm-600 mt-1">
              A collection of projects I've built and contributed to.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-warm-100 rounded-lg p-1">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 text-sm rounded transition-colors ${
                  activeCategory === category.id
                    ? 'bg-warm-50 text-warm-900 shadow-sm'
                    : 'text-warm-500 hover:text-warm-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      <div className="grid gap-4">
        {filteredItems.map((item, index) => (
          <PortfolioCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
