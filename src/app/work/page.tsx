'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

interface Role {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  portfolioId?: string;
  stats: { value: string; label: string }[];
  bullets: string[];
}

const roles: Role[] = [
  {
    id: 'meta',
    company: 'Meta',
    title: 'Content Marketing Coordinator II',
    period: 'Oct 2025 – Present',
    location: 'Los Angeles, CA',
    portfolioId: 'vail-vr-part-one',
    stats: [
      { value: '13', label: 'Published Pieces' },
      { value: '2', label: 'Programs Led' },
      { value: '100%', label: 'Stat Accuracy Rate' },
      { value: '5', label: 'XFN Teams' },
    ],
    bullets: [
      'Project Lead and System Owner for the Horizon Developer Blog content pipeline — owning sourcing, narrative development, cross-functional review, and publication across all active workstreams.',
      'Led editorial direction for a 6-part Go-To-Market Developer Guide series — now a cornerstone resource on the Meta developers portal.',
      'Coordinated XFN reviews across Product, DevRel, Design, Legal, and Data Science for all high-visibility launches; ran formal stat verification prior to publication.',
      'Led 7 builder story spotlights end-to-end — defined story angles, sourced and interviewed creators, guided agency partners, and managed the full pipeline from sourcing through launch.',
      'Maintained DRI trackers and editorial calendars to manage concurrent workstreams and global delivery dates.',
    ],
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    title: 'Trend Producer',
    period: 'Mar 2025 – Oct 2025',
    location: 'Santa Monica, CA',
    portfolioId: 'snap-spotlight',
    stats: [
      { value: '500M+', label: 'Monthly Viewers' },
      { value: '1,000+', label: 'Daily Pipeline' },
      { value: '1M+', label: 'Creators Influenced' },
      { value: '10+', label: 'XFN Teams' },
    ],
    bullets: [
      'Programming Lead for Spotlight — one of Snapchat\'s highest-scale content surfaces, reaching 500M+ monthly viewers.',
      'Managed a daily pipeline of 1,000+ Snaps across quality, safety, and brand-safe policy standards.',
      'Synthesized daily performance data to identify breakout trends; led editorial syncs translating findings into real-time amplification decisions.',
      'Developed standardized Editorial Instructions and content brief templates that reduced operational friction and accelerated creative QA.',
      'Collaborated with Data Science to build a creator identification system; developed documentation for 10+ cross-functional teams.',
    ],
  },
  {
    id: 'phony',
    company: 'Phony Content',
    title: 'Content Manager',
    period: 'May 2024 – Mar 2025',
    location: 'Los Angeles, CA',
    portfolioId: 'tiny-texts-cheer-squad',
    stats: [
      { value: '25M+', label: 'Total Views' },
      { value: '6.3M', label: 'Top Story Views' },
      { value: '39%', label: 'Top Story Completion' },
      { value: '50+', label: 'Stories Managed' },
    ],
    bullets: [
      'Led editorial operations for Tiny Texts on Snapchat — managing 50+ scripted stories from concept through publication.',
      'Contributed to 25M+ total views; top story (Cheer Squad) reached 6.3M views and a 39% completion rate.',
      'Built centralized documentation frameworks and editorial systems that standardized the production workflow end-to-end.',
    ],
  },
  {
    id: 'collider',
    company: 'Collider',
    title: 'Editorial Content Specialist (Freelance)',
    period: 'Aug 2022 – Oct 2022',
    location: 'Los Angeles, CA',
    portfolioId: 'collider-actors-movies',
    stats: [
      { value: '30M+', label: 'Monthly Visitors' },
      { value: '125K+', label: 'Top Article Views' },
      { value: '4:23', label: 'Avg. Time on Page' },
      { value: '~15%', label: 'Organic Traffic Lift' },
    ],
    bullets: [
      'Produced SEO-optimized features for Collider, an entertainment platform with 30M+ monthly visitors.',
      'Top article: "Actors and Their Favorite Movies" — 125K+ views, 4:23 avg. time on page, top-3 Google result.',
      'Lifted organic traffic approximately 15% in two months through targeted content and metadata strategy.',
    ],
  },
  {
    id: 'stockx',
    company: 'StockX',
    title: 'Brand Creative Production (Freelance)',
    period: 'Sep 2021 & Dec 2024',
    location: 'Los Angeles, CA',
    portfolioId: 'stockx-core-insights',
    stats: [
      { value: '10M+', label: 'Campaign Impressions' },
      { value: '3', label: 'Major Shoots' },
      { value: '2', label: 'Markets Researched' },
    ],
    bullets: [
      'Authored the 2024 Core Insights Report analyzing Gen Z digital consumption across LA and NYC, directly informing StockX\'s 2025 marketing strategy.',
      'Supported 3 high-visibility campaign shoots generating 10M+ cross-platform impressions.',
      'Managed production logistics across creative, talent, and brand teams.',
    ],
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('company');
    if (id) {
      const i = roles.findIndex(r => r.id === id);
      if (i >= 0) setActive(i);
    }
    setMounted(true);
  }, []);

  const select = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const role = roles[active];

  return (
    <div className="h-screen overflow-hidden bg-white flex flex-col pt-14">
      <div className="flex-1 flex flex-col min-h-0 w-full px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto w-full flex flex-col flex-1 min-h-0">

          {/* Header */}
          <motion.div
            className="flex items-baseline justify-between py-5 sm:py-7 flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Experience</h1>
            <Link href="/work/portfolio" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
              Portfolio →
            </Link>
          </motion.div>

          {/* Mobile layout */}
          <div className="sm:hidden overflow-y-auto flex-1">
            <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4">
              {roles.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => select(i)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm transition-all ${
                    i === active ? 'bg-gray-900 text-white font-medium' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {r.company}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="pt-5 pb-12"
              >
                <div className="mb-5">
                  <h2 className="text-xl font-semibold text-gray-900 mb-0.5">{role.company}</h2>
                  <p className="text-sm text-gray-500">{role.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{role.location} · {role.period}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {role.stats.map(s => (
                    <div key={s.label} className="bg-gray-50 rounded-xl px-4 py-3">
                      <p className="text-lg font-semibold text-gray-900 leading-none mb-1">{s.value}</p>
                      <p className="text-[10px] text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 mb-5">
                  {role.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 mt-[7px]" />
                      <p className="text-sm text-gray-600 leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
                {role.portfolioId && (
                  <Link
                    href={`/work/portfolio?project=${role.portfolioId}`}
                    className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    See in portfolio →
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop two-panel */}
          <motion.div
            className="hidden sm:flex flex-1 min-h-0 border border-gray-100 rounded-2xl overflow-hidden mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            {/* Sidebar */}
            <div className="w-44 flex-shrink-0 border-r border-gray-100 py-3 flex flex-col overflow-y-auto">
              {roles.map((r, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={r.id}
                    onClick={() => select(i)}
                    className={`w-full text-left px-4 py-3 transition-all relative ${
                      isActive ? 'bg-gray-50' : 'hover:bg-gray-50/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="role-indicator"
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-900"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <p className={`text-sm transition-colors ${isActive ? 'font-semibold text-gray-900' : 'text-gray-400'}`}>
                      {r.company}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {r.period.split(' – ')[0].replace(/[A-Za-z]+ /, '')}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="p-8"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-0.5">{role.company}</h2>
                      <p className="text-sm text-gray-500">{role.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{role.location} · {role.period}</p>
                    </div>
                    {role.portfolioId && (
                      <Link
                        href={`/work/portfolio?project=${role.portfolioId}`}
                        className="flex-shrink-0 text-xs text-gray-400 hover:text-gray-900 transition-colors mt-1"
                      >
                        See in portfolio →
                      </Link>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-7">
                    {role.stats.map(s => (
                      <div key={s.label} className="bg-gray-50 rounded-xl px-4 py-3">
                        <p className="text-lg font-semibold text-gray-900 leading-none mb-1">{s.value}</p>
                        <p className="text-[10px] text-gray-400">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {role.bullets.map((b, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.06 + i * 0.05, ease: EASE }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 mt-[7px]" />
                        <p className="text-sm text-gray-600 leading-relaxed">{b}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
