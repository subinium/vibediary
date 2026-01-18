// Auto-generated from content/diary/*.md
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

export const diaryEntries: DiaryEntry[] = [
  {
    "date": "2026-01-19",
    "content": "",
    "category": "dev",
    "archives": [
      {
        "title": "Superpowers",
        "url": "https://github.com/obra/superpowers",
        "author": "obra"
      },
      {
        "title": "Claude Code Continuous Learning Skill",
        "url": "https://github.com/blader/claude-code-continuous-learning-skill",
        "author": "blader"
      }
    ]
  },
  {
    "date": "2026-01-17",
    "content": "Created [Claude Code Achievements](https://github.com/subinium/claude-code-achievements) - a tool to track and celebrate your Claude Code usage milestones.",
    "category": "dev"
  },
  {
    "date": "2026-01-16",
    "content": "Onboarded 12 team members (2-week program).",
    "category": "dev",
    "archives": [
      {
        "title": "Skills",
        "url": "https://github.com/trailofbits/skills",
        "author": "trailofbits"
      }
    ]
  },
  {
    "date": "2026-01-15",
    "content": "",
    "category": "dev",
    "archives": [
      {
        "title": "Claude Code Showcase",
        "url": "https://github.com/ChrisWiles/claude-code-showcase",
        "author": "ChrisWiles"
      }
    ]
  },
  {
    "date": "2026-01-14",
    "content": "Installed and tested [conductor](https://www.conductor.build/).",
    "category": "dev"
  },
  {
    "date": "2026-01-09",
    "content": "- Deployed [tui-wordle](https://github.com/subinium/tui-wordle) | [tuiwordle.com](https://www.tuiwordle.com/)",
    "category": "dev"
  },
  {
    "date": "2026-01-08",
    "content": "- Completed Claude Code curriculum draft.\n- Added [Google Search Console](https://search.google.com/search-console) to [ethviz](https://ethviz.xyz).",
    "category": "dev",
    "archives": [
      {
        "title": "Jarrod Watts on X",
        "url": "https://x.com/jarrodwatts/status/2008495347115630701",
        "author": "@jarrodwatts"
      },
      {
        "title": "Eric W on X",
        "url": "https://x.com/ericw_ai/status/2008765292659531897",
        "author": "@ericw_ai"
      }
    ]
  },
  {
    "date": "2026-01-06",
    "content": "Taught Claude Code basics to 2 colleagues at work. (The most fun part was explaining Iterm2, Homebrew, Zsh and basic terminal commands.)\n\nCurrently organizing basic development knowledge for Claude Code.",
    "category": "dev"
  },
  {
    "date": "2026-01-05",
    "content": "Built [VibeDiary](https://github.com/subinium/vibediary) - a personal blog for documenting AI journey and portfolio.\n\nSet up Claude Code skills and commands for VibeDiary (diary, portfolio, push).",
    "category": "dev",
    "archives": [
      {
        "title": "ccstatusline",
        "url": "https://github.com/sirmalloc/ccstatusline",
        "author": "sirmalloc"
      },
      {
        "title": "ccusage",
        "url": "https://github.com/ryoppippi/ccusage",
        "author": "ryoppippi"
      },
      {
        "title": "claude-hud",
        "url": "https://github.com/jarrodwatts/claude-hud",
        "author": "jarrodwatts"
      }
    ]
  },
  {
    "date": "2026-01-04",
    "content": "Published [ローディング (Loading) Lyrics Video](https://www.youtube.com/watch?v=bg5ADVookKk) on YouTube.",
    "category": "creative",
    "thumbnail": "https://img.youtube.com/vi/bg5ADVookKk/maxresdefault.jpg",
    "thumbnailLink": "https://www.youtube.com/watch?v=bg5ADVookKk"
  },
  {
    "date": "2026-01-03",
    "content": "Published [消えない星 (Kienai Hoshi) Music Video](https://youtu.be/QpB22Wrd_aY) on YouTube.\n\nSubscribed to [Suno Pro](https://suno.com/) for AI music generation.",
    "category": "creative",
    "thumbnail": "https://img.youtube.com/vi/QpB22Wrd_aY/hqdefault.jpg",
    "thumbnailLink": "https://youtu.be/QpB22Wrd_aY",
    "archives": [
      {
        "title": "Post on AI workflow",
        "url": "https://x.com/bcherny/status/2007179832300581177",
        "author": "Boris Cherny"
      }
    ]
  },
  {
    "date": "2025-12-30",
    "content": "Created Max Verstappen Fan Video. ([Related post](https://x.com/subinium/status/2005899418185392457))\n\nSubscribed to [Higgsfield](https://higgsfield.ai/) Unlimited plan.",
    "category": "creative"
  },
  {
    "date": "2025-12-29",
    "content": "Created image with Grok and produced video with [Runway ML](https://runwayml.com/).",
    "category": "creative",
    "relatedPost": "https://x.com/subinium/status/2005470679110648280"
  },
  {
    "date": "2025-12-25",
    "content": "Tested [Meshy AI](https://www.meshy.ai/) for 3D asset generation.",
    "category": "creative"
  },
  {
    "date": "2025-12-23",
    "content": "Subscribed to [Runway ML](https://runwayml.com/) Unlimited for AI video generation.\n\nTested Nanobanana + Veo 3.1 for video generation.",
    "category": "creative",
    "relatedPost": "https://x.com/subinium/status/2003363298843181229"
  },
  {
    "date": "2025-12-20",
    "content": "Launched a new Telegram channel: [vibenote from subinium](https://t.me/vibenotefromsubinium).",
    "category": "dev",
    "archives": [
      {
        "title": "oh-my-opencode",
        "url": "https://github.com/code-yeongyu/oh-my-opencode",
        "author": "code-yeongyu"
      }
    ]
  },
  {
    "date": "2025-12-07",
    "content": "Built [ethviz](https://github.com/subinium/ethviz) - an interactive blockchain research visualization tool.",
    "category": "dev"
  },
  {
    "date": "2025-12-05",
    "content": "Built [VisionMath](https://vision-math.vercel.app/) - a webcam-based 3D motion recognition interactive web application. [GitHub](https://github.com/subinium/VisionMath)",
    "category": "dev"
  }
];
