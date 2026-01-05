import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Tool } from '../data/tools';

interface Props {
  tool: Tool;
  index: number;
}

export default function ToolCard({ tool, index }: Props) {
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex flex-col items-center p-4 rounded-lg border border-warm-200 hover:border-warm-300 hover:bg-warm-100/30 transition-all group text-center"
    >
      {tool.logo && !logoError ? (
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="w-10 h-10 object-contain rounded mb-3"
          onError={() => setLogoError(true)}
        />
      ) : (
        <div className="w-10 h-10 bg-warm-200 rounded flex items-center justify-center text-warm-500 text-sm font-medium mb-3">
          {tool.name.charAt(0)}
        </div>
      )}

      <h3 className="font-medium text-warm-900 group-hover:text-accent-dark transition-colors text-sm">
        {tool.name}
      </h3>

      {tool.plan && (
        <span className="text-xs px-1.5 py-0.5 bg-warm-200/70 text-warm-600 rounded mt-1">
          {tool.plan}
        </span>
      )}
    </motion.a>
  );
}
