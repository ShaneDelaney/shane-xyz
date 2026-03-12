export interface CacheEntry {
  keywords: string[][];
  answer: string;
}

export const cache: CacheEntry[] = [
  // --- META ---
  {
    keywords: [['meta'], ['role', 'do', 'job', 'work', 'position', 'title', 'current']],
    answer: "Content Marketing Coordinator II at Meta (Oct 2025 – Mar 2026), Los Angeles. Shane owned the full editorial lifecycle for the Horizon Developer Blog — from creator sourcing and interviews through XFN coordination and publication. 13 pieces published total.",
  },
  {
    keywords: [['meta', 'horizon'], ['blog', 'developer', 'content', 'editorial']],
    answer: "Shane was the sole DRI for the Meta Horizon Developer Blog — sourcing creators, conducting editorial interviews, writing developer stories and GTM guides, managing cross-functional review across Product, DevRel, Legal, Design, and Data Science, and publishing. He also built a formal stat-verification process with Data Science confirming 100% metric accuracy.",
  },
  {
    keywords: [['gtm', 'go-to-market', 'developer guide']],
    answer: "Shane wrote a 6-part GTM guide series for Meta Horizon — covering marketing planning, influencer partnerships, social and community strategy, marketing assets, PR, and app demos. He owned all copy and editorial direction, coordinated XFN review, and delivered the series on schedule.",
  },
  {
    keywords: [['xfn', 'cross-functional', 'stakeholder', 'coordination']],
    answer: "Shane ran XFN review cycles across Product, DevRel, Design, Legal, and Data Science for every piece of Horizon content. He was the editorial bridge between teams — synthesizing feedback, managing stat verification, and producing internal status reports for leadership.",
  },

  // --- SNAP ---
  {
    keywords: [['snap', 'snapchat'], ['role', 'do', 'job', 'position', 'title', 'experience']],
    answer: "Trend Producer at Snap Inc. (Mar – Oct 2025), Santa Monica. Shane was the programming lead for Spotlight, reviewing and programming 1,000+ videos daily for a surface with 500M+ monthly viewers. He identified breakout content before it hit algorithmic momentum and curated new user experience feeds for teen cohorts.",
  },
  {
    keywords: [['spotlight', 'programming', 'trend']],
    answer: "As programming lead for Snapchat Spotlight, Shane reviewed 1,000+ pieces of content daily and made editorial calls on what 500M+ monthly viewers saw first. He flagged breakout content before the algorithm confirmed it and built workflow documentation used across 10+ cross-functional teams.",
  },
  {
    keywords: [['nux', 'new user', 'onboarding', 'retention']],
    answer: "Shane curated personalized content feeds for Snapchat's New User Experience targeting teens 13–17, reviewing 300+ pieces per cohort. His selections contributed to 10% higher retention than platform averages.",
  },
  {
    keywords: [['times square', 'campaign', 'say it in a snap']],
    answer: "Shane sourced creator content for Snap's Times Square and NYC subway brand campaign — Say It in a Snap — contributing selections that generated 500K+ daily impressions.",
  },
  {
    keywords: [['boosted', 'data science', 'creator', 'identification']],
    answer: "Shane partnered with Snap's Data Science team to build a creator identification system that surfaced emerging talent earlier at scale. The system influenced monetization strategy across 1M+ creators and produced documentation for 10+ cross-functional teams.",
  },

  // --- PHONY CONTENT ---
  {
    keywords: [['phony', 'tiny texts', 'scripted', 'snapchat stories']],
    answer: "Content Manager for Tiny Texts at Phony Content — a scripted short-form series on Snapchat. Shane wrote scripts, designed narrative structures for retention, and built the production systems for 50+ episodes. 25M+ total views. Top episode: Cheer Squad at 6.3M views and a 39% completion rate.",
  },

  // --- STOCKX ---
  {
    keywords: [['stockx'], ['role', 'work', 'experience', 'project']],
    answer: "Shane worked with StockX on a freelance basis in 2021 and 2024. He authored the 2024 Core Insights Report on Gen Z consumer behavior across LA and NYC — which informed StockX's 2025 marketing strategy — and provided production support on three major campaign shoots generating 10M+ combined impressions.",
  },

  // --- COLLIDER ---
  {
    keywords: [['collider'], ['role', 'work', 'experience', 'write']],
    answer: "Editorial Content Specialist at Collider (Aug – Oct 2022), a film and TV platform with 30M+ monthly visitors. Shane produced SEO-optimized features and contributed to roughly a 15% organic traffic lift in two months. Top piece: Actors and Their Favorite Movies — 125K readers, 4:23 average time on page, top-3 Google result.",
  },

  // --- SKILLS ---
  {
    keywords: [['skill', 'tool', 'software', 'platform', 'proficient', 'know', 'good at']],
    answer: "Shane's core strengths are editorial operations — pipeline management, DRIs, stat review — XFN coordination, and AI-native tooling. His ops stack includes Airtable, Jira, Confluence, and Asana. On the AI and dev side: Claude Code, Cursor, GitHub, and SuperWhisper. Ask about a specific area for more detail.",
  },

  // --- AI ---
  {
    keywords: [['ai', 'artificial intelligence'], ['native', 'tools', 'build', 'use', 'skill']],
    answer: "Shane is an early AI-first practitioner — he built this portfolio site with Claude Code and uses it alongside Cursor, GitHub, and SuperWhisper daily. He's applied AI tooling to build internal systems and automations, and is actively pursuing roles at the intersection of content and AI.",
  },
  {
    keywords: [['website', 'site', 'portfolio', 'built', 'coded', 'developed', 'created']],
    answer: "Shane built this site himself using Claude Code — which reflects his broader AI-native approach. He actively builds with AI tools and sees that skill set as core to his work, not just a side interest.",
  },

  // --- EDUCATION ---
  {
    keywords: [['education', 'school', 'college', 'degree', 'lmu', 'loyola']],
    answer: "Shane studied at LMU (Loyola Marymount University), graduating in 2023 with a B.A. in English and Screenwriting. The writing-intensive background is directly reflected in his editorial voice and content quality standards.",
  },

  // --- AVAILABILITY ---
  {
    keywords: [['available', 'hiring', 'open to', 'opportunity', 'hire', 'recruit']],
    answer: "Shane is open to full-time roles in content strategy, editorial operations, or content marketing — especially at companies at the intersection of content and technology. Based in Los Angeles. Reach him at shanedelaney11@gmail.com.",
  },
  {
    keywords: [['role', 'position'], ['looking', 'seeking', 'want', 'interested', 'targeting']],
    answer: "Shane is targeting content strategy, editorial operations, and content marketing roles — especially where content meets platform scale or AI. Full-time preferred, open to remote or hybrid. Reach him at shanedelaney11@gmail.com.",
  },

  // --- CONTACT ---
  {
    keywords: [['contact', 'reach', 'email', 'linkedin', 'get in touch']],
    answer: "Reach Shane at shanedelaney11@gmail.com or on LinkedIn (Shane Delaney). Based in Los Angeles and open to new opportunities.",
  },

  // --- BACKGROUND / OVERVIEW ---
  {
    keywords: [['who is', 'background', 'about shane', 'summary', 'overview', 'tell me']],
    answer: "Shane Delaney is a content strategist based in Los Angeles. He's spent the last few years building editorial programs and content pipelines at companies like Meta, Snap Inc., Phony Content, StockX, and Collider — working at the intersection of storytelling, platform operations, and emerging technology.",
  },
  {
    keywords: [['distinctive', 'stand out', 'unique', 'different', 'why hire', 'strengths', 'what makes']],
    answer: "Shane sits at the intersection of editorial rigor and operational systems thinking — which is rare in a content role. He doesn't just make things; he builds the processes and tools that let content programs scale without losing quality. Add an AI-native work style on top of that, and he's a different kind of content hire.",
  },
  {
    keywords: [['how long', 'years', 'experience', 'career', 'history']],
    answer: "Shane has been building since 2021 — starting with StockX and Collider, then Phony Content, Snap Inc., and most recently Meta. Full-time in content operations since May 2024, LMU grad in 2023.",
  },

  // --- LOCATION ---
  {
    keywords: [['location', 'based', 'where', 'city', 'los angeles', 'remote']],
    answer: "Based in Los Angeles, CA. Has worked on-site in LA and Santa Monica — open to remote or hybrid depending on the role.",
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

  // Require all keyword groups to match before using a cached answer
  return bestScore >= entry_count_check(bestScore, cache, q) ? bestAnswer : null;
}

function entry_count_check(bestScore: number, entries: CacheEntry[], q: string): number {
  // Find the entry that produced the best score and require all its groups match
  for (const entry of entries) {
    const score = entry.keywords.reduce((acc, group) => {
      return acc + (group.some(k => q.includes(k)) ? 1 : 0);
    }, 0);
    if (score === bestScore) {
      return entry.keywords.length; // require all groups to match
    }
  }
  return 999;
}

export const FALLBACK = "I don't have a specific answer for that — reach Shane directly at shanedelaney11@gmail.com.";
