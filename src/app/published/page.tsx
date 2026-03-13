'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Article {
  title: string;
  slug: string;
  publication: string;
  year: string;
  description: string;
  stat?: string;
  url?: string;
  scope?: string;
  impact?: string;
}

interface Category {
  id: string;
  label: string;
  articles: Article[];
}

function getLinkLabel(url: string): string {
  try {
    const h = new URL(url).hostname;
    if (h.includes('snapchat')) return 'Open on Snapchat';
    if (h.includes('youtube')) return 'Watch on YouTube';
    if (h.includes('collider')) return 'Read on Collider';
    if (h.includes('meta')) return 'Read on Meta Horizon';
  } catch {}
  return 'Open link';
}

const CATEGORIES: Category[] = [
  {
    id: 'platform',
    label: 'Platform Ecosystems',
    articles: [
      {
        title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding',
        slug: 'vail-vr-part-one',
        publication: 'Meta Horizon Blog', year: '2025', stat: '$15M crowdfunded',
        description: 'How AEXLAB built one of VR\'s most successful multiplayer shooters from a living room to a $15M community-funded studio.',
        scope: 'Pitched the two-part series format. Conducted all editorial interviews with AEXLAB founders, developed the crowdfunding narrative arc, wrote and revised both drafts, and managed XFN review through product, legal, and DevRel.',
        impact: 'Most-distributed story on the Horizon developer blog\'s first half of 2025. Established AEXLAB as the platform\'s flagship crowdfunding case study.',
        url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/',
      },
      {
        title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine',
        slug: 'vail-vr-part-two',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'A deep dive into AEXLAB\'s transition from premium to free-to-play and the live ops strategy behind their sustained growth.',
        scope: 'Developed the live ops editorial angle for part two, conducted follow-up interviews with the AEXLAB team, wrote and revised the full piece through multiple XFN review rounds.',
        impact: 'Completed the two-part series, making AEXLAB the most thoroughly documented developer case study in Horizon\'s content library.',
        url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/',
      },
      {
        title: 'Saydeechan: Bringing Worlds to Japan',
        slug: 'saydeechan',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'A creator spotlight on how Saydeechan built a cross-cultural community inside Horizon Worlds, expanding the platform\'s reach into Japan.',
        scope: 'Identified the creator independently. Developed the cross-cultural localization angle, conducted the editorial interview, wrote and edited the full piece, managed review and publication.',
        impact: 'First Horizon creator story focused on Japanese market expansion — opened a new editorial lane for the team and the platform.',
        url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/',
      },
      {
        title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World',
        slug: 'grow-a-farm',
        publication: 'Meta Horizon Blog', year: '2025', stat: 'Top 10 in 2 months',
        description: 'How an influencer-developer duo overcame the cold-start problem and reached the top 10 on Horizon Worlds within two months of launch.',
        scope: 'Sourced both creators, developed the platform accessibility narrative, conducted both editorial interviews, wrote the full feature, coordinated XFN review and publication.',
        impact: 'Highlighted a world that hit the platform top 10 in two months — a key data point for Horizon\'s platform accessibility story.',
        url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/',
      },
      {
        title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community',
        slug: 'matthiaos',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'A profile of the Flip Key Studios founder and his role in shaping the Horizon community through the Community Letters program.',
        scope: 'Identified the creator as an underrepresented story type. Developed the community-contribution angle, conducted the interview, wrote and edited the full profile.',
        impact: 'Expanded the team\'s editorial definition of success beyond MAU and installs — established a precedent for community-contribution stories on the platform.',
        url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/',
      },
      {
        title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers',
        slug: 'year-in-review',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'An annual roundup of the creators and developers who defined Horizon\'s growth in 2025, with key platform trends and takeaways.',
        scope: 'Synthesized platform data across 2025, developed the editorial framework, wrote and edited the full feature, coordinated multi-team review.',
        impact: 'Definitive end-of-year record of Horizon\'s developer ecosystem momentum — used internally as a reference for 2026 strategy planning.',
        url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/',
      },
      {
        title: 'Kawaii.Creator: Success Story',
        slug: 'kawaii-creator',
        publication: 'Meta Horizon', year: '2025',
        description: 'A platform success story on how a distinctive visual identity and aesthetic commitment translate directly into audience growth on Horizon.',
        scope: 'Developed the visual-identity success story angle, conducted the creator interview, wrote the piece, managed publication on the Horizon platform.',
        impact: 'Part of a creator success story suite used in developer recruitment and onboarding — positioned aesthetic-led creators as a distinct success archetype.',
        url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/',
      },
    ],
  },
  {
    id: 'guides',
    label: 'Product & Platform Storytelling',
    articles: [
      {
        title: 'Develop a Marketing Plan for Your VR App',
        slug: 'gtm-marketing-plan',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 1',
        description: 'The anchor guide in the series. Strategy, audience research, channel selection, and the foundational thinking every VR developer needs before launch.',
        scope: 'Researched and outlined the full GTM marketing framework for VR developers. Wrote the anchor guide, coordinated accuracy review with Product and DevRel, published to the Horizon developer resource library.',
        impact: 'Sets the strategic foundation all other guides build from — the primary entry point into the GTM series.',
        url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/',
      },
      {
        title: 'Leverage Influencer Partnerships for Your VR App',
        slug: 'gtm-influencer',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 2',
        description: 'A practical framework for identifying, pitching, and activating creator partnerships to drive discovery and installs for VR apps.',
        scope: 'Researched influencer partnership models specific to VR and gaming. Wrote the full guide covering discovery, outreach, contracts, and measurement. Coordinated review with DevRel and marketing.',
        impact: 'Practical framework for a GTM category most VR developers hadn\'t formalized — addresses a specific gap in available developer resources.',
        url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/',
      },
      {
        title: 'Build Social Media and Community Engagement for Your VR App',
        slug: 'gtm-social-media',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 3',
        description: 'Community-building and social media strategy for VR developers, covering pre-launch, launch, and post-launch audience development.',
        scope: 'Developed the community-building framework for VR developer needs, wrote the guide covering the full pre/launch/post-launch arc, coordinated cross-team review.',
        impact: 'Most comprehensive guide in the series for organic growth — covers the full audience development lifecycle for developers without dedicated marketing support.',
        url: 'https://developers.meta.com/horizon/resources/gtm-social-media/',
      },
      {
        title: 'Master Marketing Assets for Your VR App',
        slug: 'gtm-assets',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 4',
        description: 'How to build a complete asset library for a VR app launch, from screenshots and trailers to store page copy and press kits.',
        scope: 'Researched VR app store creative best practices. Wrote the guide covering screenshots, trailers, icons, and social assets. Coordinated review with Design and DevRel.',
        impact: 'Addresses a consistent developer pain point — most VR developers manage their own visual identity without documented standards to follow.',
        url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/',
      },
      {
        title: 'PR Strategy for Your VR App',
        slug: 'gtm-pr',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 5',
        description: 'A developer-focused PR playbook covering media outreach, press release structure, and how to earn coverage in a crowded VR market.',
        scope: 'Researched PR frameworks applicable to VR game launches. Wrote the full guide covering press outreach, media kits, and coverage amplification. Coordinated review with communications and DevRel.',
        impact: 'Specifically addresses VR\'s niche press landscape — a segment most generic PR guides skip, and a consistent pain point in developer ecosystem research.',
        url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/',
      },
      {
        title: 'Create App Demos That Convert',
        slug: 'gtm-demos',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 6',
        description: 'How to design and deliver app demos that move users from curiosity to download, with specific guidance for VR\'s unique onboarding challenges.',
        scope: 'Researched demo design principles for VR app conversion. Wrote the final guide in the series with tactical best practices and worked examples. Coordinated review with Product and DevRel.',
        impact: 'Closes the series with the most conversion-specific content — direct path from demo to install, addressing VR\'s uniquely high onboarding friction.',
        url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/',
      },
    ],
  },
  {
    id: 'narrative',
    label: 'Creator Economy',
    articles: [
      {
        title: 'Tiny Texts: Cheer Squad',
        slug: 'tiny-texts-cheer-squad',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '6.3M views · 39% completion',
        description: 'The highest-performing episode in the Tiny Texts catalog. A story whose structure was deliberately engineered for audience hold.',
        scope: 'Developed the concept, characters, and narrative arc. Wrote and revised the full script with structural techniques designed specifically to maximize completion — hook placement, pacing beats, and a calibrated ending.',
        impact: '6.3M views. 39% completion rate — highest in the catalog. Became the benchmark for story architecture across the rest of the series.',
        url: 'https://snapchat.com/t/J2MP13US',
      },
      {
        title: 'Tiny Texts: Inhaler',
        slug: 'tiny-texts-inhaler',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '4.39M views · 20.3K followers',
        description: 'A story that converted viewers into subscribers at a rate well above series average, driven by a calibrated hook and ending structure.',
        scope: 'Developed the story concept and character dynamics. Wrote and edited the full script, specifically calibrating the ending structure for follower conversion rather than just completion.',
        impact: '4.39M views, 20.3K followers added in one cycle — highest single-story follower conversion rate in the Tiny Texts catalog.',
        url: 'https://snapchat.com/t/wPotqUYw',
      },
      {
        title: 'Tiny Texts: Mr. Shower',
        slug: 'tiny-texts-mr-shower',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '3.01M views · 8.43K followers',
        description: 'Part of the core Tiny Texts run that established the series as a consistent performer on Snapchat Spotlight.',
        scope: 'Developed the story concept and character voice. Wrote and edited the script as part of the core series run, applying pacing and structural patterns developed across earlier episodes.',
        impact: '3.01M views, 8.43K followers. Core run that established Tiny Texts as a consistent platform performer.',
      },
      {
        title: 'Tiny Texts: Sleepover',
        slug: 'tiny-texts-sleepover',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '2.2M views · 9.4K followers',
        description: 'A story that consistently outperformed its view count in follower conversion, driven by a strong emotional hook and payoff.',
        scope: 'Developed the story concept and emotional hook. Designed the ending to drive above-average follower conversion, wrote and edited the full script.',
        impact: '2.2M views, 9.4K followers. Consistently outperformed its view count in follower conversion — strong signal for the hook-and-payoff structure used.',
      },
      {
        title: 'Tiny Texts: Snap Score',
        slug: 'tiny-texts-snap-score',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '2.08M views · 5.73K followers',
        description: 'A story timed to a culturally resonant prompt that drove broad engagement across the Snapchat audience.',
        scope: 'Identified the Snap Score topic as a high-resonance cultural prompt for the Snapchat audience. Wrote and edited the full script, timed release to maximize cultural relevance and reach.',
        impact: '2.08M views, 5.73K followers. Demonstrated the ability to time content to culturally resonant prompts for platform-wide distribution.',
        url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168',
      },
    ],
  },
  {
    id: 'editorial',
    label: 'Media & Culture',
    articles: [
      {
        title: 'Actors and Their Favorite Movies',
        slug: 'actors-favorite-movies',
        publication: 'Collider', year: '2022', stat: '125K readers · 4:23 avg time on page',
        description: 'A deep editorial feature that became a top-3 Google result for a competitive query and held audience attention well above site average.',
        scope: 'Identified the topic as a high-intent, under-served search opportunity. Researched and compiled the editorial content across a broad actor catalog. Wrote and optimized the full piece for both editorial quality and search performance.',
        impact: '125K readers, 4:23 average time on page — well above site average. Top-3 Google result for a competitive query.',
        url: 'https://collider.com/actors-and-their-favorite-movies/',
      },
      {
        title: 'Hardest Working Characters in Succession, Ranked',
        slug: 'succession-hardest-workers',
        publication: 'Collider', year: '2022', stat: '89K views · 22% social share rate',
        description: 'A piece timed to Succession\'s cultural peak that achieved a 22% social share rate, well above Collider\'s baseline.',
        scope: 'Identified the timing window during Succession\'s peak cultural moment. Developed the ranking framework and wrote the full editorial piece for Collider\'s film-literate audience.',
        impact: '89K views. 22% social share rate — well above the Collider baseline. Editorial timing instinct translated directly into distribution.',
        url: 'https://collider.com/hardest-workers-in-succession-ranked/',
      },
      {
        title: 'Movies To Get You Ready For Fall',
        slug: 'movies-for-fall',
        publication: 'Collider', year: '2022', stat: '76K readers · Google Discover',
        description: 'A seasonal editorial piece selected for Google Discover, demonstrating the intersection of editorial sensibility and search-surface optimization.',
        scope: 'Developed the seasonal concept and editorial selection criteria. Wrote and optimized the feature for both search and Google Discover eligibility — structure, metadata, and quality all considered.',
        impact: '76K readers. Selected for Google Discover — required meeting Google\'s strict editorial quality criteria. Seasonal timing drove distribution beyond search alone.',
        url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/',
      },
      {
        title: 'Behind the Streams with Sydeon',
        slug: 'behind-the-streams-sydeon',
        publication: 'StockX', year: '2021',
        description: 'A creator partnership campaign at the intersection of gaming culture and resale culture, reaching audiences across both worlds.',
        scope: 'On-set production support throughout the shoot. Talent coordination and creative logistics — bridging the gaming creator world and the StockX brand environment.',
        impact: 'Campaign reached audiences at the intersection of gaming culture and the StockX resale marketplace — part of StockX\'s push into creator and gaming identity.',
        url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU',
      },
      {
        title: 'Briana King Joins StockX',
        slug: 'briana-king-stockx',
        publication: 'StockX', year: '2021',
        description: 'A brand partnership announcement video positioning StockX within the gaming and creator economy space.',
        scope: 'On-set production support for the brand campaign shoot. Talent coordination and shoot logistics — supporting a campaign at the intersection of skate identity and the StockX brand.',
        impact: 'Positioned StockX within gaming and skate culture — connected the brand to a creator demographic that defines cultural credibility in that space.',
        url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s',
      },
      {
        title: 'What Drives Brittney Elena',
        slug: 'what-drives-brittney-elena',
        publication: 'StockX', year: '2024',
        description: 'A creator profile exploring the intersection of athletic identity, personal brand, and platform culture.',
        scope: 'On-set production support across the campaign shoot. Creative direction and talent-facing logistics for a campaign built on authentic athlete storytelling.',
        impact: 'Creator profile at the intersection of athletic identity and platform culture — positioned StockX within the creator athlete space.',
        url: 'https://www.youtube.com/watch?v=3-loqESOCMI',
      },
    ],
  },
];

export default function Published() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('platform');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      for (const cat of CATEGORIES) {
        const match = cat.articles.find(a => a.slug === hash);
        if (match) {
          setActiveCategory(cat.id);
          setExpandedId(match.title);
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 350);
          break;
        }
      }
    }
  }, []);

  const category = CATEGORIES.find(c => c.id === activeCategory) ?? CATEGORIES[0];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setExpandedId(null);
  };

  const toggleExpanded = (title: string) => {
    setExpandedId(prev => prev === title ? null : title);
  };

  return (
    <div
      className="flex flex-col pt-[52px] md:min-h-screen"
      style={{ background: 'var(--t-bg)' }}
    >

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col flex-1">
        {/* Category pills — horizontal scroll */}
        <div className="flex-shrink-0 px-5 pt-5 pb-3 overflow-x-auto scrollbar-none flex items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all"
              style={{
                background: cat.id === activeCategory ? 'var(--t-primary)' : 'var(--t-surface)',
                color: cat.id === activeCategory ? 'var(--t-bg)' : 'var(--t-secondary)',
                border: '1px solid var(--t-border)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article list */}
        <div className="flex-1 overflow-y-auto scrollbar-none pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }} animate={mounted ? { opacity: 1 } : {}} exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: EASE }}
            >
              {category.articles.map((article, i, arr) => (
                <motion.div
                  key={article.title}
                  id={article.slug}
                  initial={{ opacity: 0, y: 3 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.18, delay: i * 0.03, ease: EASE }}
                  className="px-5 py-4"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--t-divider)' : undefined }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: 'var(--t-tertiary)' }}>{article.publication}</span>
                        {article.stat && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ background: 'var(--t-surface)', color: 'var(--t-secondary)', border: '1px solid var(--t-border)' }}>
                            {article.stat}
                          </span>
                        )}
                      </div>
                      <p className="text-[14px] font-medium leading-snug mb-2" style={{ color: 'var(--t-primary)' }}>
                        {article.title}
                      </p>
                      <p className="text-[12px] leading-[1.6]" style={{ color: 'var(--t-secondary)' }}>
                        {article.description}
                      </p>
                    </div>
                    {article.url && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--t-tertiary)' }}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex flex-1 min-h-0 md:h-[calc(100vh-52px)] md:overflow-hidden">
       <div className="flex flex-1 md:min-h-0">
        {/* Left: category nav */}
        <motion.div
          className="hidden md:flex flex-col w-[220px] flex-shrink-0 py-10 px-6"
          style={{ borderRight: '1px solid var(--t-border)' }}
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.12em] font-medium mb-5"
            style={{ color: 'var(--t-tertiary)' }}
          >
            Categories
          </p>
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className="text-left px-3 py-2 rounded-lg text-[13px] transition-colors"
                  style={{
                    background: isActive ? 'var(--t-surface)' : 'transparent',
                    color: isActive ? 'var(--t-primary)' : 'var(--t-secondary)',
                    fontWeight: isActive ? '500' : '400',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--t-primary)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--t-secondary)'; }}
                >
                  {cat.label}
                  <span className="ml-1.5 text-[11px]" style={{ color: 'var(--t-border-strong)' }}>
                    {cat.articles.length}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6">
            <p className="text-[11px]" style={{ color: 'var(--t-tertiary)' }}>
              {CATEGORIES.reduce((sum, c) => sum + c.articles.length, 0)} published pieces
            </p>
          </div>
        </motion.div>

        {/* Right: article list */}
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none px-8 lg:px-12 py-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 4 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.12em] font-medium mb-6 hidden md:block"
                style={{ color: 'var(--t-tertiary)' }}
              >
                {category.label}
              </p>

              <div className="flex flex-col">
                {category.articles.map((article, i) => {
                  const isExpanded = expandedId === article.title;
                  return (
                    <motion.div
                      key={article.title}
                      id={article.slug}
                      initial={{ opacity: 0, y: 4 }}
                      animate={mounted ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.22, delay: i * 0.04, ease: EASE }}
                    >
                      {/* Collapsed header — always visible */}
                      <button
                        onClick={() => toggleExpanded(article.title)}
                        className="w-full text-left py-4"
                        style={{ borderBottom: isExpanded ? 'none' : '1px solid var(--t-divider)' }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[14px] font-medium leading-snug mb-1.5 transition-opacity"
                              style={{ color: 'var(--t-primary)', opacity: isExpanded ? 1 : undefined }}
                            >
                              {article.title}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[11px]" style={{ color: 'var(--t-tertiary)' }}>
                                {article.publication}
                              </span>
                              <span className="text-[11px]" style={{ color: 'var(--t-border-strong)' }}>·</span>
                              <span className="text-[11px]" style={{ color: 'var(--t-tertiary)' }}>
                                {article.year}
                              </span>
                              {article.stat && (
                                <>
                                  <span className="text-[11px]" style={{ color: 'var(--t-border-strong)' }}>·</span>
                                  <span
                                    className="text-[11px] font-medium px-1.5 py-0.5 rounded"
                                    style={{ background: 'var(--t-surface)', color: 'var(--t-secondary)' }}
                                  >
                                    {article.stat}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            className="flex-shrink-0 mt-0.5 text-[10px]"
                            style={{ color: 'var(--t-tertiary)', display: 'inline-block' }}
                          >
                            ↓
                          </motion.span>
                        </div>
                      </button>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: EASE }}
                            style={{ overflow: 'hidden', borderBottom: '1px solid var(--t-divider)' }}
                          >
                            <div className="pb-6 pt-1">
                              <p
                                className="text-[13px] leading-[1.65] mb-5 max-w-[520px]"
                                style={{ color: 'var(--t-secondary)' }}
                              >
                                {article.description}
                              </p>

                              <div className="flex flex-col gap-3 mb-5">
                                {article.scope && (
                                  <div className="flex gap-4">
                                    <span
                                      className="text-[10px] uppercase tracking-[0.1em] font-medium w-[46px] flex-shrink-0 pt-[2px]"
                                      style={{ color: 'var(--t-tertiary)' }}
                                    >
                                      Scope
                                    </span>
                                    <p className="text-[12px] leading-[1.65] flex-1" style={{ color: 'var(--t-secondary)' }}>
                                      {article.scope}
                                    </p>
                                  </div>
                                )}
                                {article.impact && (
                                  <div className="flex gap-4">
                                    <span
                                      className="text-[10px] uppercase tracking-[0.1em] font-medium w-[46px] flex-shrink-0 pt-[2px]"
                                      style={{ color: 'var(--t-tertiary)' }}
                                    >
                                      Impact
                                    </span>
                                    <p className="text-[12px] leading-[1.65] flex-1" style={{ color: 'var(--t-secondary)' }}>
                                      {article.impact}
                                    </p>
                                  </div>
                                )}
                              </div>

                              {article.url && (
                                <a
                                  href={article.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[12px] font-medium transition-opacity hover:opacity-70"
                                  style={{
                                    background: 'var(--t-surface)',
                                    color: 'var(--t-primary)',
                                    border: '1px solid var(--t-border)',
                                  }}
                                >
                                  {getLinkLabel(article.url)}
                                  <span>↗</span>
                                </a>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>{/* end desktop inner */}
      </div>{/* end desktop wrapper */}
    </div>
  );
}
