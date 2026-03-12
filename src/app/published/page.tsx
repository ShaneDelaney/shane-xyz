'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Article {
  title: string;
  publication: string;
  year: string;
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
    label: 'Platform & Creator Economy',
    articles: [
      { title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding', publication: 'Meta Horizon Blog', year: '2025', stat: '$15M crowdfunded', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/' },
      { title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/' },
      { title: 'Saydeechan: Bringing Worlds to Japan', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/' },
      { title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World', publication: 'Meta Horizon Blog', year: '2025', stat: 'Top 10 in 2 months', url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/' },
      { title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/' },
      { title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/' },
      { title: 'Kawaii.Creator — Success Story', publication: 'Meta Horizon', year: '2025', url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/' },
    ],
  },
  {
    id: 'guides',
    label: 'Resources & Guides',
    articles: [
      { title: 'Develop a Marketing Plan for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 1', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/' },
      { title: 'Leverage Influencer Partnerships for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 2', url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/' },
      { title: 'Build Social Media and Community Engagement for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 3', url: 'https://developers.meta.com/horizon/resources/gtm-social-media/' },
      { title: 'Master Marketing Assets for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 4', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/' },
      { title: 'PR Strategy for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 5', url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/' },
      { title: 'Create App Demos That Convert', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 6', url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/' },
    ],
  },
  {
    id: 'narrative',
    label: 'Narrative & Storytelling',
    articles: [
      { title: 'Tiny Texts — Cheer Squad', publication: 'Snapchat / Phony Content', year: '2024', stat: '6.3M views · 39% completion', url: 'https://snapchat.com/t/J2MP13US' },
      { title: 'Tiny Texts — Inhaler', publication: 'Snapchat / Phony Content', year: '2024', stat: '4.39M views · 20.3K followers', url: 'https://snapchat.com/t/wPotqUYw' },
      { title: 'Tiny Texts — Mr. Shower', publication: 'Snapchat / Phony Content', year: '2024', stat: '3.01M views · 8.43K followers' },
      { title: 'Tiny Texts — Sleepover', publication: 'Snapchat / Phony Content', year: '2024', stat: '2.2M views · 9.4K followers' },
      { title: 'Tiny Texts — Snap Score', publication: 'Snapchat / Phony Content', year: '2024', stat: '2.08M views · 5.73K followers', url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168' },
    ],
  },
  {
    id: 'editorial',
    label: 'Editorial & Brand',
    articles: [
      { title: 'Actors and Their Favorite Movies', publication: 'Collider', year: '2022', stat: '125K readers · 4:23 avg time', url: 'https://collider.com/actors-and-their-favorite-movies/' },
      { title: 'Hardest Working Characters in Succession, Ranked', publication: 'Collider', year: '2022', stat: '89K views · 22% social share', url: 'https://collider.com/hardest-workers-in-succession-ranked/' },
      { title: 'Movies To Get You Ready For Fall', publication: 'Collider', year: '2022', stat: '76K readers · Google Discover', url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/' },
      { title: 'Behind the Streams with Sydeon', publication: 'StockX', year: '2021', url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU' },
      { title: 'Briana King Joins StockX', publication: 'StockX', year: '2021', url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s' },
      { title: 'What Drives Brittney Elena', publication: 'StockX', year: '2024', url: 'https://www.youtube.com/watch?v=3-loqESOCMI' },
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
      {/* Body */}
      <div className="flex flex-1 min-h-0 px-6 sm:px-10 gap-10 py-8">

        {/* Left: category nav */}
        <motion.div
          className="hidden md:flex flex-col w-[200px] flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <p
            className="text-[10px] uppercase tracking-[0.1em] font-medium mb-5"
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
            <p
              className="text-[11px]"
              style={{ color: 'var(--t-tertiary)' }}
            >
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
              className="text-[10px] uppercase tracking-[0.1em] font-medium mb-6 hidden md:block"
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
                  className="flex items-start justify-between py-4 group"
                  style={{ borderBottom: '1px solid var(--t-border)' }}
                >
                  <div className="flex-1 min-w-0 pr-4">
                    {article.url ? (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-medium leading-snug block mb-1.5 transition-colors"
                        style={{ color: 'var(--t-primary)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-secondary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-primary)')}
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
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-[12px]" style={{ color: 'var(--t-tertiary)' }}>
                        {article.publication} · {article.year}
                      </p>
                      {article.stat && (
                        <p className="text-[12px]" style={{ color: 'var(--t-tertiary)' }}>
                          {article.stat}
                        </p>
                      )}
                    </div>
                  </div>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-[13px] mt-0.5 transition-colors"
                      style={{ color: 'var(--t-tertiary)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-tertiary)')}
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
