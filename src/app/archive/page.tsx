'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

interface Article {
  title: string;
  publication: string;
  year: string;
  stat?: string;
  url?: string;
  category: string;
}

const ALL_ARTICLES: Article[] = [
  // Platform & Creator Economy
  { title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding', publication: 'Meta Horizon Blog', year: '2025', stat: '$15M crowdfunded', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/', category: 'Platform & Creator Economy' },
  { title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/', category: 'Platform & Creator Economy' },
  { title: 'Saydeechan: Bringing Worlds to Japan', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/', category: 'Platform & Creator Economy' },
  { title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World', publication: 'Meta Horizon Blog', year: '2025', stat: 'Top 10 in 2 months', url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/', category: 'Platform & Creator Economy' },
  { title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/', category: 'Platform & Creator Economy' },
  { title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers', publication: 'Meta Horizon Blog', year: '2025', url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/', category: 'Platform & Creator Economy' },
  { title: 'Kawaii.Creator: Success Story', publication: 'Meta Horizon', year: '2025', url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/', category: 'Platform & Creator Economy' },
  // Resources & Guides
  { title: 'Develop a Marketing Plan for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 1', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/', category: 'Resources & Guides' },
  { title: 'Leverage Influencer Partnerships for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 2', url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/', category: 'Resources & Guides' },
  { title: 'Build Social Media and Community Engagement for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 3', url: 'https://developers.meta.com/horizon/resources/gtm-social-media/', category: 'Resources & Guides' },
  { title: 'Master Marketing Assets for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 4', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/', category: 'Resources & Guides' },
  { title: 'PR Strategy for Your VR App', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 5', url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/', category: 'Resources & Guides' },
  { title: 'Create App Demos That Convert', publication: 'Meta Horizon', year: '2025', stat: 'GTM Series · Part 6', url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/', category: 'Resources & Guides' },
  // Narrative & Storytelling
  { title: 'Tiny Texts: Cheer Squad', publication: 'Snapchat / Phony Content', year: '2024', stat: '6.3M views · 39% completion', url: 'https://snapchat.com/t/J2MP13US', category: 'Narrative & Storytelling' },
  { title: 'Tiny Texts: Inhaler', publication: 'Snapchat / Phony Content', year: '2024', stat: '4.39M views · 20.3K followers', url: 'https://snapchat.com/t/wPotqUYw', category: 'Narrative & Storytelling' },
  { title: 'Tiny Texts: Mr. Shower', publication: 'Snapchat / Phony Content', year: '2024', stat: '3.01M views · 8.43K followers', category: 'Narrative & Storytelling' },
  { title: 'Tiny Texts: Sleepover', publication: 'Snapchat / Phony Content', year: '2024', stat: '2.2M views · 9.4K followers', category: 'Narrative & Storytelling' },
  { title: 'Tiny Texts: Snap Score', publication: 'Snapchat / Phony Content', year: '2024', stat: '2.08M views · 5.73K followers', url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168', category: 'Narrative & Storytelling' },
  // Editorial & Brand
  { title: 'Actors and Their Favorite Movies', publication: 'Collider', year: '2022', stat: '125K readers · 4:23 avg time', url: 'https://collider.com/actors-and-their-favorite-movies/', category: 'Editorial & Brand' },
  { title: 'Hardest Working Characters in Succession, Ranked', publication: 'Collider', year: '2022', stat: '89K views · 22% social share', url: 'https://collider.com/hardest-workers-in-succession-ranked/', category: 'Editorial & Brand' },
  { title: 'Movies To Get You Ready For Fall', publication: 'Collider', year: '2022', stat: '76K readers · Google Discover', url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/', category: 'Editorial & Brand' },
  { title: 'Behind the Streams with Sydeon', publication: 'StockX', year: '2021', url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU', category: 'Editorial & Brand' },
  { title: 'Briana King Joins StockX', publication: 'StockX', year: '2021', url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s', category: 'Editorial & Brand' },
  { title: 'What Drives Brittney Elena', publication: 'StockX', year: '2024', url: 'https://www.youtube.com/watch?v=3-loqESOCMI', category: 'Editorial & Brand' },
];

const CATEGORIES = ['All', 'Platform & Creator Economy', 'Resources & Guides', 'Narrative & Storytelling', 'Editorial & Brand'];

export default function Archive() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState('All');
  useEffect(() => { setMounted(true); }, []);

  const filtered = active === 'All' ? ALL_ARTICLES : ALL_ARTICLES.filter(a => a.category === active);

  return (
    <div style={{ background: 'var(--t-bg)', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-6 sm:px-10 pt-[52px]">

        {/* Header */}
        <div className="pt-16 pb-10">
          <motion.p
            className="text-[11px] uppercase tracking-[0.12em] font-medium mb-4"
            style={{ color: 'var(--t-tertiary)' }}
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: E }}
          >
            Writing
          </motion.p>
          <motion.h1
            className="text-[32px] font-semibold tracking-[-0.025em] mb-2"
            style={{ color: 'var(--t-primary)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05, ease: E }}
          >
            Published Work
          </motion.h1>
          <motion.p
            className="text-[15px]"
            style={{ color: 'var(--t-secondary)' }}
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: E }}
          >
            {ALL_ARTICLES.length} pieces across Meta, Snap, Collider, and StockX.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex items-center gap-2 flex-wrap pb-8"
          style={{ borderBottom: '1px solid var(--t-divider)' }}
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15, ease: E }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-[12px] px-3.5 py-1.5 rounded-full transition-all"
              style={{
                background: active === cat ? 'var(--t-primary)' : 'var(--t-surface)',
                color: active === cat ? 'var(--t-bg)' : 'var(--t-secondary)',
                border: 'none',
              }}
              onMouseEnter={e => { if (active !== cat) e.currentTarget.style.background = 'var(--t-surface-hover)'; }}
              onMouseLeave={e => { if (active !== cat) e.currentTarget.style.background = 'var(--t-surface)'; }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Article list */}
        <div className="pb-24">
          {filtered.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 4 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.18 + i * 0.025, ease: E }}
              className="flex items-start justify-between py-5 group"
              style={{ borderBottom: '1px solid var(--t-divider)' }}
            >
              <div className="flex-1 min-w-0 pr-6">
                {article.url ? (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium leading-snug block mb-2 transition-opacity hover:opacity-60"
                    style={{ color: 'var(--t-primary)' }}
                  >
                    {article.title}
                  </a>
                ) : (
                  <p
                    className="text-[15px] font-medium leading-snug mb-2"
                    style={{ color: 'var(--t-primary)' }}
                  >
                    {article.title}
                  </p>
                )}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[12px]" style={{ color: 'var(--t-tertiary)' }}>
                    {article.publication}
                  </span>
                  <span className="text-[12px]" style={{ color: 'var(--t-border-strong)' }}>·</span>
                  <span className="text-[12px]" style={{ color: 'var(--t-tertiary)' }}>
                    {article.year}
                  </span>
                  {article.stat && (
                    <>
                      <span className="text-[12px]" style={{ color: 'var(--t-border-strong)' }}>·</span>
                      <span className="text-[12px]" style={{ color: 'var(--t-tertiary)' }}>
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
                  className="flex-shrink-0 text-[14px] mt-0.5 transition-opacity hover:opacity-60"
                  style={{ color: 'var(--t-tertiary)' }}
                  aria-label="Open article"
                >
                  ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
