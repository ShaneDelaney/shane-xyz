export interface CacheEntry {
  keywords: string[][];
  answer: string;
}

export const cache: CacheEntry[] = [
  // --- META ---
  {
    keywords: [['meta'], ['role', 'do', 'job', 'work', 'position', 'title', 'current']],
    answer: "**Content Marketing Coordinator II at Meta** (Oct 2025–present), Los Angeles.\n- Owns the full editorial lifecycle for the Horizon Developer Blog\n- Runs XFN coordination across Product, DevRel, Design, and Legal\n- Manages stat review with Data Science before every launch",
  },
  {
    keywords: [['meta', 'horizon'], ['blog', 'developer', 'content', 'editorial']],
    answer: "Shane owns the Horizon Developer Blog end-to-end — from story ideation to publication. He manages DRI trackers, editorial calendars, XFN feedback loops, and the formal stat review process with Data Science.",
  },
  {
    keywords: [['gtm', 'go-to-market', 'developer guide', 'vr', 'horizon worlds']],
    answer: "**4-part Meta Horizon GTM Guide Series** — cornerstone resource on the Meta developers portal.\n- Owned all copy and editorial direction\n- Coordinated XFN reviews (Product, DevRel, Design, Legal)\n- On-schedule delivery across all four guides",
  },
  {
    keywords: [['builder stor', 'spotlight', 'creator', 'narrative']],
    answer: "**6-part Builder Story Spotlight Series** on the Meta Horizon Developers Blog.\n- Defined story angles and conducted creator interviews\n- Guided agency partners on execution\n- Managed full pipeline from sourcing through launch",
  },
  {
    keywords: [['xfn', 'cross-functional', 'stakeholder', 'coordination', 'legal', 'product']],
    answer: "Shane is the editorial bridge between Marketing, Product, and Legal at Meta — synthesizing XFN feedback, managing stat verification with Data Science, and producing internal status reports for leadership.",
  },

  // --- SNAP ---
  {
    keywords: [['snap', 'snapchat'], ['role', 'do', 'job', 'work', 'position', 'title', 'experience']],
    answer: "**Trend Producer at Snap Inc.** (Mar–Oct 2025), Santa Monica.\n- Programming Lead for Spotlight — 500M+ monthly viewers\n- Managed a daily pipeline of 1,000+ Snaps\n- Led daily editorial syncs to translate data into creative direction",
  },
  {
    keywords: [['spotlight', 'programming lead', 'trend', 'amplification']],
    answer: "As **Programming Lead for Snapchat Spotlight**, Shane synthesized daily performance data to identify breakout content and drive real-time amplification decisions across one of Snap's highest-scale surfaces.",
  },
  {
    keywords: [['nux', 'new user', 'onboarding', 'retention', 'teen']],
    answer: "Shane curated personalized UGC feeds for Snap's New User Experience targeting teens (13–17). **10% higher retention** than platform averages — 300+ pieces reviewed per cohort using data-driven segmentation guidelines.",
  },
  {
    keywords: [['times square', 'say it in a snap', 'campaign', 'outdoor', 'subway', 'nyc']],
    answer: "**Say It in a Snap — Times Square takeover.** Shane led editorial curation for NYC subway placements, generating **500K+ daily impressions** through standout UGC selection and cross-team collaboration.",
  },
  {
    keywords: [['boosted content', 'data science', 'creator', 'monetization', 'emerging']],
    answer: "Shane partnered with Snap's data science team to build a custom creator identification system. The initiative influenced monetization strategy across **1M+ creators** and produced documentation for 10+ XFN teams.",
  },

  // --- PHONY CONTENT ---
  {
    keywords: [['phony content', 'tiny texts', 'snapchat stories', 'scripted']],
    answer: "**Content Manager for Tiny Texts at Phony Content** — scripted Snapchat stories.\n- 50+ stories managed end-to-end\n- **4M+ views**, 40K+ new followers, 90% viewership boost\n- Top story: 6.32M views, 39% completion rate",
  },
  {
    keywords: [['4 million', '4m', 'views', 'followers', 'viral', 'viewership boost']],
    answer: "Through Tiny Texts on Snapchat: **4M+ views**, 40K+ new followers, 90% viewership boost across 50+ scripted stories. Top stories hit 6M+ views individually with 39–42% completion rates.",
  },

  // --- STOCKX ---
  {
    keywords: [['stockx'], ['role', 'work', 'experience', 'do', 'project']],
    answer: "Shane worked with StockX on a freelance basis in 2021 and 2024 — authoring the **2024 Core Insights Report** (Gen Z consumer behavior in LA/NYC) and supporting three high-visibility campaign shoots that generated **10M+ impressions**.",
  },
  {
    keywords: [['core insights', 'gen z', 'trend report', 'consumer', 'research']],
    answer: "**StockX 2024 Core Insights Report** — Gen Z consumer behavior analysis across LA and NYC that directly informed StockX's 2025 marketing strategy. Mapped digital behaviors, identified subcultures, and flagged affinity brands for targeting.",
  },

  // --- COLLIDER ---
  {
    keywords: [['collider'], ['role', 'work', 'experience', 'write', 'seo']],
    answer: "**Editorial Content Specialist at Collider** (30M+ monthly visitors). Produced SEO-optimized features adhering to complex style guides — lifted organic traffic ~**15% in two months**. Top article: 125K+ views, 4:23 avg time on page, top 3 Google result.",
  },

  // --- SKILLS / TOOLS ---
  {
    keywords: [['skill', 'tool', 'software', 'platform', 'use', 'know', 'proficient']],
    answer: "**Core strengths:**\n- Editorial operations, pipeline management, XFN coordination\n- Data synthesis and performance-driven content strategy\n- AI-native tooling: Claude Code, Cursor, GitHub, SuperWhisper\n- Ops tools: Airtable, Jira, Confluence, Asana, Salesforce",
  },
  {
    keywords: [['airtable', 'jira', 'confluence', 'asana', 'salesforce', 'figma', 'cms']],
    answer: "Shane's ops toolkit: **Airtable, Jira, Confluence, Asana, Salesforce, Figma,** and various CMS platforms — used for project governance, editorial tracking, and cross-functional collaboration.",
  },

  // --- AI ---
  {
    keywords: [['ai', 'artificial intelligence'], ['native', 'first', 'tools', 'build', 'use', 'work', 'skill']],
    answer: "Shane is an **early AI-first practitioner** at Meta — actively building internal systems, dashboards, and tools using AI. Daily stack: **Claude Code, Cursor, GitHub, SuperWhisper.** Built this site entirely with Claude Code.",
  },
  {
    keywords: [['claude code', 'cursor', 'superwhisper', 'github', 'ai tool', 'dev tool']],
    answer: "Shane's AI/dev stack: **Claude Code, Cursor, GitHub, SuperWhisper.** He built this portfolio site with Claude Code and uses these tools daily to build automations and internal tools at Meta.",
  },
  {
    keywords: [['website', 'site', 'portfolio', 'built', 'made', 'created', 'developed', 'coded']],
    answer: "Shane built this site himself with **Claude Code** — reflecting his broader AI-native approach. He actively builds with AI tools at Meta and in his own projects.",
  },

  // --- EDUCATION ---
  {
    keywords: [['education', 'school', 'college', 'university', 'degree', 'study', 'lmu', 'loyola']],
    answer: "**LMU (Loyola Marymount University)** — B.A. in English & Screenwriting, 2023. The writing-intensive background directly informs his editorial strategy and content quality standards.",
  },

  // --- AVAILABILITY ---
  {
    keywords: [['available', 'open to', 'looking', 'hiring', 'opportunity', 'new role', 'job', 'hire', 'recruit']],
    answer: "Shane is open to full-time roles, freelance projects, and creative collaborations. Based in **Los Angeles, CA** — reach him at shanedelaney11@gmail.com.",
  },

  // --- CONTACT ---
  {
    keywords: [['contact', 'reach', 'email', 'linkedin', 'get in touch', 'message']],
    answer: "**shanedelaney11@gmail.com** — or find him on LinkedIn (Shane Delaney). Based in Los Angeles, open to new opportunities.",
  },

  // --- BACKGROUND ---
  {
    keywords: [['who is', 'tell me about', 'background', 'about shane', 'summary', 'overview']],
    answer: "**Shane Delaney** — Marketing & Editorial Operations Specialist, Los Angeles.\n- Currently: Content Marketing Coordinator II at Meta\n- Previously: Trend Producer at Snap Inc.\n- Specializes in editorial operations, content strategy, and AI-native tooling",
  },
  {
    keywords: [['what makes shane', 'stand out', 'unique', 'different', 'why hire', 'strengths']],
    answer: "Shane sits at the intersection of **editorial rigor and operational systems thinking** — rare for a content role. He builds the processes, tools, and documentation that let teams move fast without losing quality, and is one of the few content practitioners going deep on AI-native work.",
  },
  {
    keywords: [['year', 'how many', 'experience', 'long', 'career']],
    answer: "Building since 2021 — StockX, Collider, Phony Content, Snap Inc., and Meta. Full-time in content operations since May 2024, LMU grad 2023.",
  },

  // --- PORTFOLIO ---
  {
    keywords: [['portfolio', 'project', 'case study', 'example', 'work sample', 'show me']],
    answer: "**Key projects:**\n- Meta Horizon GTM Guide Series (4-part)\n- Meta Horizon Builder Story Spotlights (6-part)\n- Snap NUX Curation + Times Square Campaign\n- Tiny Texts (4M+ views)\n- StockX Core Insights Report\n\n→ shanedelaney.xyz/work/portfolio",
  },
  {
    keywords: [['location', 'based', 'where', 'city', 'los angeles', 'la', 'remote']],
    answer: "Based in **Los Angeles, CA**. Has worked on-site in LA and Santa Monica — open to remote or hybrid depending on the role.",
  },
];

export function findCachedAnswer(question: string): string | null {
  const q = question.toLowerCase().replace(/[?!.,'"]/g, ' ').replace(/\s+/g, ' ').trim();

  let bestAnswer: string | null = null;
  let bestScore = 0;

  for (const entry of cache) {
    const score = entry.keywords.reduce((acc, group) => {
      return acc + (group.some(k => q.includes(k)) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestScore >= 1 ? bestAnswer : null;
}

export const FALLBACK = "I don't have a specific answer for that — reach Shane directly at shanedelaney11@gmail.com.";
