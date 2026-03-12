'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Article {
  title: string;
  publication: string;
  year: string;
  description: string;
  stat?: string;
  url?: string;
}

interface Category {
  id: string;
  label: string;
  articles: Article[];
}

const CATEGORIES: Category[] = [
  {
    id: 'platform',
    label: 'Platform Ecosystems',
    articles: [
      {
        title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding',
        publication: 'Meta Horizon Blog', year: '2025', stat: '$15M crowdfunded',
        description: 'How AEXLAB built one of VR\'s most successful multiplayer shooters from a living room to a $15M community-funded studio.',
        url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/',
      },
      {
        title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'A deep dive into AEXLAB\'s transition from premium to free-to-play and the live ops strategy behind their sustained growth.',
        url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/',
      },
      {
        title: 'Saydeechan: Bringing Worlds to Japan',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'A creator spotlight on how Saydeechan built a cross-cultural community inside Horizon Worlds, expanding the platform\'s reach into Japan.',
        url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/',
      },
      {
        title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World',
        publication: 'Meta Horizon Blog', year: '2025', stat: 'Top 10 in 2 months',
        description: 'How an influencer-developer duo overcame the cold-start problem and reached the top 10 on Horizon Worlds within two months of launch.',
        url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/',
      },
      {
        title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'A profile of the Flip Key Studios founder and his role in shaping the Horizon community through the Community Letters program.',
        url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/',
      },
      {
        title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers',
        publication: 'Meta Horizon Blog', year: '2025',
        description: 'An annual roundup of the creators and developers who defined Horizon\'s growth in 2025, with key platform trends and takeaways.',
        url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/',
      },
      {
        title: 'Kawaii.Creator: Success Story',
        publication: 'Meta Horizon', year: '2025',
        description: 'A platform success story on how a distinctive visual identity and aesthetic commitment translate directly into audience growth on Horizon.',
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
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 1',
        description: 'The anchor guide in the series. Strategy, audience research, channel selection, and the foundational thinking every VR developer needs before launch.',
        url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/',
      },
      {
        title: 'Leverage Influencer Partnerships for Your VR App',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 2',
        description: 'A practical framework for identifying, pitching, and activating creator partnerships to drive discovery and installs for VR apps.',
        url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/',
      },
      {
        title: 'Build Social Media and Community Engagement for Your VR App',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 3',
        description: 'Community-building and social media strategy for VR developers, covering pre-launch, launch, and post-launch audience development.',
        url: 'https://developers.meta.com/horizon/resources/gtm-social-media/',
      },
      {
        title: 'Master Marketing Assets for Your VR App',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 4',
        description: 'How to build a complete asset library for a VR app launch, from screenshots and trailers to store page copy and press kits.',
        url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/',
      },
      {
        title: 'PR Strategy for Your VR App',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 5',
        description: 'A developer-focused PR playbook covering media outreach, press release structure, and how to earn coverage in a crowded VR market.',
        url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/',
      },
      {
        title: 'Create App Demos That Convert',
        publication: 'Meta Horizon', year: '2025', stat: 'GTM Series, Part 6',
        description: 'How to design and deliver app demos that move users from curiosity to download, with specific guidance for VR\'s unique onboarding challenges.',
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
        publication: 'Snapchat / Phony Content', year: '2024', stat: '6.3M views, 39% completion',
        description: 'The highest-performing episode in the Tiny Texts catalog. A story whose structure was deliberately engineered for audience hold.',
        url: 'https://snapchat.com/t/J2MP13US',
      },
      {
        title: 'Tiny Texts: Inhaler',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '4.39M views, 20.3K followers',
        description: 'A story that converted viewers into subscribers at a rate well above series average, driven by a calibrated hook and ending structure.',
        url: 'https://snapchat.com/t/wPotqUYw',
      },
      {
        title: 'Tiny Texts: Mr. Shower',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '3.01M views, 8.43K followers',
        description: 'Part of the core Tiny Texts run that established the series as a consistent performer on Snapchat Spotlight.',
      },
      {
        title: 'Tiny Texts: Sleepover',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '2.2M views, 9.4K followers',
        description: 'A story that consistently outperformed its view count in follower conversion, driven by a strong emotional hook and payoff.',
      },
      {
        title: 'Tiny Texts: Snap Score',
        publication: 'Snapchat / Phony Content', year: '2024', stat: '2.08M views, 5.73K followers',
        description: 'A story timed to a culturally resonant prompt that drove broad engagement across the Snapchat audience.',
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
        publication: 'Collider', year: '2022', stat: '125K readers, 4:23 avg time on page',
        description: 'A deep editorial feature that became a top-3 Google result for a competitive query and held audience attention well above site average.',
        url: 'https://collider.com/actors-and-their-favorite-movies/',
      },
      {
        title: 'Hardest Working Characters in Succession, Ranked',
        publication: 'Collider', year: '2022', stat: '89K views, 22% social share rate',
        description: 'A piece timed to Succession\'s cultural peak that achieved a 22% social share rate, well above Collider\'s baseline.',
        url: 'https://collider.com/hardest-workers-in-succession-ranked/',
      },
      {
        title: 'Movies To Get You Ready For Fall',
        publication: 'Collider', year: '2022', stat: '76K readers, Google Discover',
        description: 'A seasonal editorial piece selected for Google Discover, demonstrating the intersection of editorial sensibility and search-surface optimization.',
        url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/',
      },
      {
        title: 'Behind the Streams with Sydeon',
        publication: 'StockX', year: '2021',
        description: 'A creator partnership campaign at the intersection of gaming culture and resale culture, reaching audiences across both worlds.',
        url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU',
      },
      {
        title: 'Briana King Joins StockX',
        publication: 'StockX', year: '2021',
        description: 'A brand partnership announcement video positioning StockX within the gaming and creator economy space.',
        url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s',
      },
      {
        title: 'What Drives Brittney Elena',
        publication: 'StockX', year: '2024',
        description: 'A creator profile exploring the intersection of athletic identity, personal brand, and platform culture.',
        url: 'https://www.youtube.com/watch?v=3-loqESOCMI',
      },
    ],
  },
];

export default function Published() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('platform');
  useEffect(() => { setMounted(true); }, []);

  const category = CATEGORIES.find(c => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <div
      className="h-screen overflow-hidden flex flex-col pt-[52px]"
      style={{ background: 'var(--t-bg)' }}
    >
      <div className="flex flex-1 min-h-0 px-6 sm:px-10 gap-10 py-8">

        {/* Left: category nav */}
        <motion.div
          className="hidden md:flex flex-col w-[200px] flex-shrink-0"
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
                  onClick={() => setActiveCategory(cat.id)}
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
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">

          {/* Mobile category pills */}
          <div className="flex items-center gap-2 flex-wrap mb-6 md:hidden">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="text-[12px] px-3 py-1.5 rounded-full border transition-all"
                style={{
                  borderColor: cat.id === activeCategory ? 'var(--t-primary)' : 'var(--t-border)',
                  background: cat.id === activeCategory ? 'var(--t-primary)' : 'transparent',
                  color: cat.id === activeCategory ? 'var(--t-bg)' : 'var(--t-secondary)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.12em] font-medium mb-6 hidden md:block"
              style={{ color: 'var(--t-tertiary)' }}
            >
              {category.label}
            </p>

            <div className="flex flex-col">
              {category.articles.map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 4 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.25, delay: i * 0.04, ease: EASE }}
                  className="flex items-start justify-between py-5 group"
                  style={{ borderBottom: '1px solid var(--t-divider)' }}
                >
                  <div className="flex-1 min-w-0 pr-6">
                    {article.url ? (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-medium leading-snug block mb-1.5 transition-opacity hover:opacity-60"
                        style={{ color: 'var(--t-primary)' }}
                      >
                        {article.title}
                      </a>
                    ) : (
                      <p
                        className="text-[14px] font-medium leading-snug mb-1.5"
                        style={{ color: 'var(--t-primary)' }}
                      >
                        {article.title}
                      </p>
                    )}
                    <p
                      className="text-[13px] leading-relaxed mb-2"
                      style={{ color: 'var(--t-secondary)' }}
                    >
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
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
                          <span className="text-[11px] font-medium" style={{ color: 'var(--t-secondary)' }}>
                            {article.stat}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-[13px] mt-0.5 transition-opacity hover:opacity-60"
                      style={{ color: 'var(--t-tertiary)' }}
                      aria-label="Open"
                    >
                      ↗
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
