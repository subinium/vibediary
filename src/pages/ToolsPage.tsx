import { motion } from 'framer-motion';
import { tools, toolCategories } from '../data/tools';
import ToolCard from '../components/ToolCard';

export default function ToolsPage() {
  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-2xl font-medium text-warm-900">Tools</h1>
        <p className="text-warm-600 mt-2">
          The tools and software I use daily for AI development and productivity.
        </p>
      </motion.header>

      <div className="space-y-8">
        {toolCategories.map((category) => {
          const categoryTools = tools.filter((t) => t.category === category.id);
          if (categoryTools.length === 0) return null;

          return (
            <motion.section
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-sm font-medium text-warm-500 uppercase tracking-wide mb-4">
                {category.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {categoryTools.map((tool, index) => (
                  <ToolCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
