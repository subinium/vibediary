export interface Tool {
  id: string;
  name: string;
  plan?: string;
  description: string;
  category: 'ai-text' | 'ai-video' | 'ai-audio' | 'development' | 'editing';
  url?: string;
  logo?: string;
}

export const tools: Tool[] = [
  // AI - Text & Code
  {
    id: 'claude',
    name: 'Claude',
    plan: 'Max',
    description: 'Primary AI assistant for coding, writing, and analysis',
    category: 'ai-text',
    url: 'https://claude.ai',
    logo: 'https://claude.ai/images/claude_app_icon.png',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    plan: 'AI Ultra',
    description: 'Google AI for multimodal tasks and research',
    category: 'ai-text',
    url: 'https://gemini.google.com',
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    plan: 'Pro',
    description: 'AI-powered code editor for rapid development',
    category: 'ai-text',
    url: 'https://cursor.com',
    logo: 'https://www.cursor.com/brand/icon.svg',
  },
  {
    id: 'grok',
    name: 'Grok',
    plan: 'Team',
    description: 'xAI assistant with real-time knowledge',
    category: 'ai-text',
    url: 'https://grok.x.ai',
    logo: 'https://grok.x.ai/images/grok-logo.svg',
  },

  // AI - Video
  {
    id: 'higgsfield',
    name: 'Higgsfield',
    plan: 'Unlimited',
    description: 'AI video generation and character animation',
    category: 'ai-video',
    url: 'https://higgsfield.ai',
    logo: 'https://higgsfield.ai/favicon.ico',
  },
  {
    id: 'runway',
    name: 'Runway',
    plan: 'Unlimited',
    description: 'Creative AI tools for video generation',
    category: 'ai-video',
    url: 'https://runwayml.com',
    logo: 'https://runwayml.com/favicon.ico',
  },
  {
    id: 'kling',
    name: 'Kling AI',
    plan: 'Standard',
    description: 'AI-powered video creation platform',
    category: 'ai-video',
    url: 'https://klingai.com',
    logo: 'https://klingai.com/favicon.ico',
  },

  // AI - Audio
  {
    id: 'suno',
    name: 'Suno',
    plan: 'Pro',
    description: 'AI music generation from text prompts',
    category: 'ai-audio',
    url: 'https://suno.com',
    logo: 'https://suno.com/favicon.ico',
  },

  // Development
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Deployment and hosting platform',
    category: 'development',
    url: 'https://vercel.com',
    logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
  },

  // Editing
  {
    id: 'capcut',
    name: 'CapCut',
    description: 'Video editing and post-production',
    category: 'editing',
    url: 'https://www.capcut.com',
    logo: 'https://www.capcut.com/favicon.ico',
  },
];

export const toolCategories = [
  { id: 'ai-text', label: 'AI - Text & Code' },
  { id: 'ai-video', label: 'AI - Video' },
  { id: 'ai-audio', label: 'AI - Audio' },
  { id: 'development', label: 'Development' },
  { id: 'editing', label: 'Editing' },
] as const;
