export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'creative' | 'development';
  tags: string[];
  link?: string;
  github?: string;
  youtube?: string;
  thumbnail?: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Creative
  {
    id: 'video-2026-01-04',
    title: 'ローディング (Loading)',
    description: 'Lyrics video with AI-generated music and visuals.',
    category: 'creative',
    tags: ['AI Music', 'Suno', 'Lyrics Video'],
    youtube: 'https://www.youtube.com/watch?v=bg5ADVookKk',
    thumbnail: 'https://img.youtube.com/vi/bg5ADVookKk/hqdefault.jpg',
  },
  {
    id: 'video-2026-01-03',
    title: '消えない星 (Kienai Hoshi)',
    description: 'Music video created with Suno, Higgsfield, and Nanobanana.',
    category: 'creative',
    tags: ['AI Music', 'Suno', 'Higgsfield', 'Music Video'],
    youtube: 'https://youtu.be/QpB22Wrd_aY',
    thumbnail: 'https://img.youtube.com/vi/QpB22Wrd_aY/hqdefault.jpg',
  },
  {
    id: 'justchillandvibing',
    title: 'Just Chill and Vibing',
    description: 'YouTube channel for creative content and vibes.',
    category: 'creative',
    tags: ['YouTube', 'Content'],
    youtube: 'https://www.youtube.com/@justchillandvibing',
  },

  // Development
  {
    id: 'visionmath',
    title: 'VisionMath',
    description: 'Webcam-based 3D motion recognition with interactive web visualization.',
    category: 'development',
    tags: ['WebGL', '3D', 'Motion'],
    link: 'https://vision-math.vercel.app/',
    github: 'https://github.com/subinium/VisionMath',
  },
  {
    id: 'ethviz',
    title: 'ethviz',
    description: 'Interactive blockchain research visualization tool.',
    category: 'development',
    tags: ['Blockchain', 'Visualization'],
    github: 'https://github.com/subinium/ethviz',
  },
  {
    id: 'full-stack-builder',
    title: 'Full Stack Builder',
    description: 'A collection of full-stack development resources and templates for rapid prototyping.',
    category: 'development',
    tags: ['Full Stack', 'Templates'],
    github: 'https://github.com/subinium/full-stack-builder',
  },
];

export const portfolioCategories = [
  { id: 'all', label: 'All' },
  { id: 'creative', label: 'Creative' },
  { id: 'development', label: 'Development' },
] as const;
