'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
    <div className="h-screen overflow-hidden bg-white flex flex-col pt-14">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-3 flex-shrink-0 border-b border-gray-100">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
          ← Home
        </Link>
        <span className="text-sm text-gray-400">Published</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 min-h-0 px-6 sm:px-10 gap-10 py-6">

        {/* Left: category nav */}
        <motion.div
          className="hidden md:flex flex-col w-52 flex-shrink-0"
          initial={{ opacity: 0, x: -8 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <p className="text-[9px] uppercase tracking-widest text-gray-400 font-medium mb-4">Categories</p>
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-medium'
                      : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="mt-auto">
            <p className="text-[10px] text-gray-300 leading-relaxed">
              {CATEGORIES.reduce((sum, c) => sum + c.articles.length, 0)} published pieces
            </p>
          </div>
        </motion.div>

        {/* Right: article list */}
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-medium mb-6 md:hidden">
              {category.label}
            </p>

            {/* Mobile category pills */}
            <div className="flex items-center gap-2 flex-wrap mb-6 md:hidden">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    cat.id === activeCategory
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-200 text-gray-500 hover:border-gray-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col">
              {category.articles.map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.25, delay: i * 0.03, ease: EASE }}
                  className="flex items-start justify-between py-4 border-b border-gray-100 group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    {article.url ? (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors leading-snug block mb-1"
                      >
                        {article.title}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 leading-snug mb-1">{article.title}</p>
                    )}
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="text-xs text-gray-400">{article.publication} — {article.year}</p>
                      {article.stat && (
                        <p className="text-xs text-gray-300">{article.stat}</p>
                      )}
                    </div>
                  </div>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-gray-300 group-hover:text-gray-600 transition-colors text-sm mt-0.5"
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
