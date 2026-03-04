export interface CacheEntry {
  keywords: string[][];  // array of keyword groups — question must match at least one word from each group
  answer: string;
}

// Each entry's keywords is an array of groups.
// A question scores 1 point per group that has at least one keyword present.
// Highest score wins. Minimum score of 1 required to match.
export const cache: CacheEntry[] = [
  // --- CURRENT ROLE / META ---
  {
    keywords: [['meta'], ['role', 'do', 'job', 'work', 'position', 'title', 'current']],
    answer: "Shane is currently a Content Marketing Coordinator II at Meta in Los Angeles. He leads the end-to-end editorial content lifecycle for the Horizon Developer Blog, managing cross-functional feedback loops across Marketing, Product, and Legal, and coordinating the formal stat review process with Data Science prior to every launch.",
  },
  {
    keywords: [['meta', 'horizon'], ['blog', 'developer', 'content', 'editorial']],
    answer: "At Meta, Shane owns the editorial lifecycle for the Horizon Developer Blog. He builds story templates, tracks editorial milestones, manages XFN coordination across Marketing, Product, and Legal, and maintains DRI trackers to keep global delivery dates on track.",
  },
  {
    keywords: [['meta'], ['how long', 'when', 'start', 'since', 'joined', 'timeline']],
    answer: "Shane joined Meta in October 2025 and is currently in the role. He works out of Los Angeles as a Content Marketing Coordinator II on the Horizon developer ecosystem.",
  },
  {
    keywords: [['stat review', 'data science', 'metrics', 'accuracy', 'verification']],
    answer: "At Meta, Shane manages the formal stat review and verification process for the Developer Blog. He works directly with Data Science and cross-functional teams to audit and confirm 100% accuracy of all public-facing metrics before any content goes live.",
  },
  {
    keywords: [['dri', 'tracker', 'delivery', 'milestone', 'deadline', 'calendar', 'schedule']],
    answer: "Shane maintains internal trackers and Directly Responsible Individual (DRI) assignments at Meta to monitor story progress and ensure alignment on global delivery dates. He also manages editorial calendars and milestone tracking across the full content lifecycle.",
  },
  {
    keywords: [['xfn', 'cross-functional', 'stakeholder', 'coordination', 'bridge', 'legal', 'product', 'marketing']],
    answer: "Shane serves as the primary editorial bridge between Marketing, Product, and Legal at Meta. He synthesizes cross-functional feedback, produces internal status reports for leadership, and manages feedback loops for high-visibility content launches.",
  },
  {
    keywords: [['gtm', 'go-to-market', 'developer guide', 'vr', 'horizon worlds']],
    answer: "Shane led the end-to-end creation of a four-part Meta Horizon Go-To-Market guide series for VR developers. He owned all copy, coordinated XFN reviews across Product, DevRel, Design, and Legal, managed the formal stat review process, and maintained the editorial calendar through on-schedule publication of all four guides.",
  },
  {
    keywords: [['builder stor', 'spotlight', 'creator', 'narrative']],
    answer: "Shane led narrative strategy and editorial oversight for a six-part builder story spotlight series on the Meta Horizon Developers Blog. He defined story angles, conducted interviews, guided agency partners, and managed the full publication pipeline from sourcing through launch.",
  },

  // --- SNAP ---
  {
    keywords: [['snap', 'snapchat'], ['role', 'do', 'job', 'work', 'position', 'title', 'experience']],
    answer: "At Snap Inc., Shane was a Trend Producer based in Santa Monica. He served as Programming Lead for Spotlight content, synthesizing daily performance data to identify breakout trends, managing a pipeline of 1,000+ Snaps per day, and developing standardized Editorial Instructions to reduce operational friction.",
  },
  {
    keywords: [['spotlight', 'programming lead', 'trend', 'amplification']],
    answer: "As Programming Lead for Snapchat Spotlight, Shane synthesized daily performance data to identify breakout content and inform real-time amplification decisions. He led daily editorial syncs to review performance and translate data patterns into actionable creative iteration plans.",
  },
  {
    keywords: [['nux', 'new user', 'onboarding', 'retention', 'teen']],
    answer: "Shane curated personalized content feeds for Snapchat's New User Experience, targeting teen audiences (13-17). He reviewed 300+ content pieces per cohort using data-driven segmentation guidelines, achieving retention rates 10% higher than platform averages.",
  },
  {
    keywords: [['times square', 'say it in a snap', 'campaign', 'outdoor', 'subway', 'nyc']],
    answer: "Shane led editorial curation for Snap's Times Square campaign, selecting standout user-generated content for NYC subway placements that generated 500K+ daily impressions. He collaborated with the marketing team on content merchandising and placement strategy.",
  },
  {
    keywords: [['boosted content', 'data science', 'creator', 'monetization', 'emerging']],
    answer: "Shane collaborated with Snap's data science team to build a custom content system for identifying emerging creators. He translated complex data findings into strategic editorial guidance, created internal documentation for 10+ cross-functional teams, and helped influence monetization strategy across 1M+ creators.",
  },
  {
    keywords: [['editorial instruction', 'ei', 'template', 'brief', 'process', 'documentation', 'standardize']],
    answer: "Shane developed standardized Editorial Instructions (EIs) and content brief templates at Snap to reduce operational friction and accelerate the creative QA cycle. He has a consistent track record of building documentation frameworks and editorial systems that scale across teams.",
  },

  // --- PHONY CONTENT ---
  {
    keywords: [['phony content', 'tiny texts', 'snapchat stories', 'scripted']],
    answer: "At Phony Content, Shane was Content Manager for Tiny Texts — a Snapchat channel where he led editorial operations for 50+ scripted digital stories. The work generated 4M+ views and 40K+ new followers, achieving a 90% viewership boost through data-informed content strategy and strong editorial systems.",
  },
  {
    keywords: [['4 million', '4m', 'views', 'followers', 'viral', 'viewership boost']],
    answer: "Through his work at Phony Content on the Tiny Texts Snapchat channel, Shane generated 4M+ views and 40K+ new followers across 50+ scripted stories, achieving a 90% viewership boost. Top stories reached 6M+ views individually with 39-42% completion rates.",
  },

  // --- STOCKX ---
  {
    keywords: [['stockx'], ['role', 'work', 'experience', 'do', 'project']],
    answer: "Shane worked with StockX on a freelance basis in 2021 and again in 2024. He authored the 2024 Core Insights Report analyzing Gen Z digital consumption patterns in LA and NYC, which informed StockX's 2025 marketing strategy. He also managed production timelines for high-visibility digital campaigns.",
  },
  {
    keywords: [['core insights', 'gen z', 'trend report', 'consumer', 'research']],
    answer: "Shane authored StockX's 2024 Core Insights Report, analyzing Gen Z digital consumption patterns in LA and NYC. The report mapped digital behaviors, highlighted key subcultures, and identified affinity brands and figures for campaign targeting to inform StockX's 2025 marketing strategy.",
  },

  // --- COLLIDER ---
  {
    keywords: [['collider'], ['role', 'work', 'experience', 'write', 'seo']],
    answer: "Shane was an Editorial Content Specialist (Freelance) at Collider, an entertainment news platform with 30M+ monthly visitors. He produced SEO-optimized features while adhering to complex style guides and metadata protocols, boosting organic traffic by approximately 15% in two months.",
  },

  // --- SKILLS / TOOLS ---
  {
    keywords: [['skill', 'tool', 'software', 'platform', 'use', 'know', 'proficient', 'experience with']],
    answer: "Shane's core skills span editorial operations, content pipeline management, XFN coordination, and performance data synthesis. He works across tools including Airtable, Jira, Confluence, Asana, Salesforce, Figma, and various CMS platforms. He also has deep expertise in editorial calendar management, DRI tracking, stat review processes, and developing Editorial Instructions (EIs).",
  },
  {
    keywords: [['airtable', 'jira', 'confluence', 'asana', 'salesforce', 'figma', 'cms']],
    answer: "Shane's operations toolkit includes Airtable, Jira, Confluence, Asana, Salesforce, Figma, and CMS platforms. He uses these for project governance, editorial tracking, and cross-functional collaboration.",
  },
  {
    keywords: [['editorial', 'content', 'pipeline', 'lifecycle', 'operations', 'production']],
    answer: "Shane specializes in editorial and content operations: managing full story lifecycles, building editorial calendars, developing content briefs and Editorial Instructions, tracking DRIs, running stat review processes, and building documentation frameworks. He's done this at scale at both Meta and Snap.",
  },
  {
    keywords: [['strategy', 'analytic', 'data', 'performance', 'insight', 'optimize']],
    answer: "Shane approaches content strategy through a data lens. At Snap, he synthesized daily performance data to make real-time editorial decisions. At Meta, he runs the formal stat review process with Data Science. He's experienced in competitive gap analysis, performance data synthesis, and process optimization.",
  },

  // --- EDUCATION ---
  {
    keywords: [['education', 'school', 'college', 'university', 'degree', 'study', 'studied', 'lmu', 'loyola']],
    answer: "Shane graduated from Loyola Marymount University (LMU) in Los Angeles with a B.A. in English and Screenwriting in 2023. The writing-intensive background directly informs his approach to editorial strategy and content quality.",
  },

  // --- AVAILABILITY / OPPORTUNITIES ---
  {
    keywords: [['available', 'open to', 'looking', 'hiring', 'opportunity', 'new role', 'job', 'hire', 'recruit']],
    answer: "Shane is open to full-time roles, freelance projects, and creative collaborations. You can reach him at shanedelaney11@gmail.com or through his LinkedIn. He's based in Los Angeles, CA.",
  },

  // --- CONTACT ---
  {
    keywords: [['contact', 'reach', 'email', 'linkedin', 'get in touch', 'message']],
    answer: "You can reach Shane at shanedelaney11@gmail.com. He's also on LinkedIn — just search Shane Delaney. He's based in Los Angeles and is open to new opportunities.",
  },

  // --- GENERAL BACKGROUND / SUMMARY ---
  {
    keywords: [['who is', 'tell me about', 'background', 'about shane', 'summary', 'overview']],
    answer: "Shane Delaney is a Marketing & Editorial Operations Specialist based in Los Angeles. He currently works at Meta as a Content Marketing Coordinator II, managing the editorial lifecycle for the Horizon Developer Blog. Before that he was a Trend Producer at Snap Inc. His background spans editorial operations, content strategy, XFN coordination, and data-informed content programming across major tech and media platforms.",
  },
  {
    keywords: [['year', 'how many', 'experience', 'long', 'career']],
    answer: "Shane has been building his career in content and editorial operations since 2021, with roles at StockX, Collider, Phony Content, Snap Inc., and Meta. He graduated from LMU in 2023 and has been in a full-time content operations capacity since May 2024.",
  },

  // --- PORTFOLIO / PROJECTS ---
  {
    keywords: [['portfolio', 'project', 'case study', 'example', 'work sample', 'show me']],
    answer: "Shane's portfolio includes the Meta Horizon GTM developer guide series, a six-part builder story spotlight series on the Meta Horizon Developers Blog, Snap's NUX curation project, the Times Square campaign, the Tiny Texts Snapchat channel (4M+ views), and the StockX 2024 Core Insights Report. You can explore everything at shanedelaney.xyz/work/portfolio.",
  },
  {
    keywords: [['location', 'based', 'where', 'city', 'los angeles', 'la', 'remote']],
    answer: "Shane is based in Los Angeles, CA. He's worked on-site in LA and Santa Monica, and is open to discussing remote or hybrid arrangements depending on the role.",
  },

  // --- AI-NATIVE ---
  {
    keywords: [['ai', 'artificial intelligence'], ['native', 'first', 'tools', 'build', 'use', 'work', 'skill', 'experience', 'proficient']],
    answer: "Shane has gone head-first into AI-native work. At Meta, he's actively building systems, dashboards, and internal tools using AI, taking on responsibility as an early AI-first practitioner on his team. He's proficient with Claude Code, Cursor, GitHub, and SuperWhisper, and built his portfolio site entirely with Claude Code.",
  },
  {
    keywords: [['claude code', 'cursor', 'superwhisper', 'github', 'ai tool', 'dev tool']],
    answer: "Shane's AI and dev tool stack includes Claude Code, Cursor, GitHub, and SuperWhisper. He built this portfolio site entirely with Claude Code and uses these tools daily for building systems, automations, and internal tools at Meta.",
  },
  {
    keywords: [['build', 'building', 'built'], ['tool', 'dashboard', 'system', 'automation', 'app', 'internal']],
    answer: "Beyond content operations, Shane is actively building systems, dashboards, and internal and external tools at Meta using AI. He's taken on early responsibility as an AI-first practitioner on his team and built this portfolio site himself using Claude Code.",
  },
  {
    keywords: [['website', 'site', 'portfolio', 'built', 'made', 'created', 'developed', 'coded']],
    answer: "Shane built this portfolio site himself using Claude Code. It reflects his broader approach to AI-native work — he's actively using and building with AI tools at Meta and in his own projects.",
  },
  {
    keywords: [['learn', 'learning', 'growth', 'eager', 'curious', 'growth mindset']],
    answer: "Shane is actively learning and building in the AI space. At Meta, he's taken on responsibility as an early AI-first practitioner, building tools and systems with AI. He describes himself as eager to keep pushing in this space and open to roles where that mindset is valued.",
  },
];

export function findCachedAnswer(question: string): string | null {
  const q = question.toLowerCase().replace(/[?!.,'"]/g, ' ').replace(/\s+/g, ' ').trim();

  let bestAnswer: string | null = null;
  let bestScore = 0;

  for (const entry of cache) {
    // Score = number of keyword groups where at least one keyword matches
    const score = entry.keywords.reduce((acc, group) => {
      return acc + (group.some(k => q.includes(k)) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  // Require at least 1 group to match
  return bestScore >= 1 ? bestAnswer : null;
}

export const FALLBACK = "I don't have a specific answer for that, but you can reach Shane directly at shanedelaney11@gmail.com — he's happy to chat about his background and experience.";
