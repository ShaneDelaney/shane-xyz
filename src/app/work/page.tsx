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
    stats: [
      { value: '4-part', label: 'GTM Guide Series' },
      { value: '6-part', label: 'Builder Story Series' },
      { value: '100%', label: 'Metric Accuracy' },
      { value: 'XFN', label: 'Cross-func Lead' },
    ],
    bullets: [
      'Lead end-to-end editorial lifecycle for the Horizon Developer Blog, from story ideation through publication.',
      'Build and maintain story templates, track editorial milestones, and manage XFN feedback loops for high-visibility launches.',
      'Manage the formal stat review process with Data Science, confirming 100% accuracy of all public-facing metrics before launch.',
      'Serve as primary editorial bridge between Marketing, Product, and Legal — synthesizing feedback and producing leadership status reports.',
      'Maintain internal DRI trackers to monitor story progress and align on global delivery dates.',
    ],
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    title: 'Trend Producer',
    period: 'Mar – Oct 2025',
    location: 'Santa Monica, CA',
    stats: [
      { value: '1,000+', label: 'Snaps/day' },
      { value: '10%', label: 'Higher Retention' },
      { value: '500K+', label: 'Daily Impressions' },
      { value: '1M+', label: 'Creators Influenced' },
    ],
    bullets: [
      'Served as Programming Lead for Spotlight content, synthesizing daily performance data to identify breakout trends.',
      'Led daily editorial syncs; translated data patterns into actionable creative iteration plans.',
      'Orchestrated a daily pipeline of 1,000+ Snaps, ensuring all content met strict quality, safety, and brand-safe standards.',
      'Developed standardized Editorial Instructions (EIs) and content brief templates to reduce operational friction.',
    ],
  },
  {
    id: 'phony',
    company: 'Phony Content',
    title: 'Content Manager',
    period: 'May 2024 – Mar 2025',
    location: 'Los Angeles, CA',
    stats: [
      { value: '4M+', label: 'Total Views' },
      { value: '40K+', label: 'New Followers' },
      { value: '90%', label: 'Viewership Boost' },
      { value: '50+', label: 'Scripted Stories' },
    ],
    bullets: [
      'Led editorial operations for Tiny Texts — a Snapchat channel of 50+ scripted digital stories.',
      'Managed resource allocation and creative QA via agile sprint planning.',
      'Built centralized documentation frameworks to standardize production workflows.',
      'Top story: Cheer Squad — 6.32M views, 43K followers, 39% completion rate.',
    ],
  },
  {
    id: 'collider',
    company: 'Collider',
    title: 'Editorial Content Specialist',
    period: 'Aug – Oct 2022',
    location: 'Los Angeles, CA',
    stats: [
      { value: '30M+', label: 'Monthly Visitors' },
      { value: '15%', label: 'Traffic Boost' },
      { value: '125K+', label: 'Top Article Views' },
      { value: '#3', label: 'Google Ranking' },
    ],
    bullets: [
      'Produced high-visibility features for a platform with 30M+ monthly visitors, adhering to complex style guides and SEO protocols.',
      'Boosted organic web traffic by approximately 15% in two months through targeted SEO content strategies.',
      'Top article: "Actors and Their Favorite Movies" — 125K+ views, 4:23 average time on page.',
    ],
  },
  {
    id: 'stockx',
    company: 'StockX',
    title: 'Brand Creative Production',
    period: 'Sep 2021 & Dec 2024',
    location: 'Los Angeles, CA',
    stats: [
      { value: '10M+', label: 'Cross-platform Impressions' },
      { value: '3', label: 'Major Campaign Shoots' },
      { value: 'Gen Z', label: '2025 Insights Report' },
    ],
    bullets: [
      'Authored the 2024 Core Insights Report analyzing Gen Z digital consumption patterns in LA and NYC, informing StockX\'s 2025 marketing strategy.',
      'Managed production timelines for high-visibility lifestyle campaigns.',
      'Supported 3 major shoots: "Behind the Streams with Sydeon," "Briana King Joins StockX," "What Drives Brittney Elena."',
    ],
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => { setMounted(true); }, []);

  const select = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  const role = roles[active];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="flex-1 w-full px-6 pt-20 pb-0">
        <div className="max-w-5xl mx-auto h-full">

          {/* Page header */}
          <motion.div
            className="flex items-baseline justify-between pt-14 pb-8"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Experience</h1>
            <Link href="/work/portfolio" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
              Portfolio →
            </Link>
          </motion.div>

          {/* Split layout */}
          <motion.div
            className="flex gap-0 border border-gray-100 rounded-2xl overflow-hidden"
            style={{ height: 'calc(100vh - 14rem)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            {/* Left — company list */}
            <div className="w-44 flex-shrink-0 border-r border-gray-100 py-4 flex flex-col gap-0.5 overflow-y-auto">
              {roles.map((r, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={r.id}
                    onClick={() => select(i)}
                    className={`w-full text-left px-4 py-3 transition-all duration-150 relative ${
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
                    <p className="text-[10px] text-gray-400 mt-0.5">{r.period.split(' – ')[0].split(' ').slice(-1)[0]}</p>
                  </button>
                );
              })}
            </div>

            {/* Right — spotlight */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="p-8 h-full"
                >
                  {/* Role header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">{role.company}</h2>
                    <p className="text-sm text-gray-500">{role.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{role.location} · {role.period}</p>
                  </div>

                  {/* Stats strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                    {role.stats.map(stat => (
                      <div key={stat.label} className="bg-gray-50 rounded-xl px-4 py-3">
                        <p className="text-lg font-semibold text-gray-900 tracking-tight leading-none mb-1">{stat.value}</p>
                        <p className="text-[10px] text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <div className="space-y-3">
                    {role.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.1 + i * 0.06, ease: EASE }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 mt-2" />
                        <p className="text-sm text-gray-600 leading-relaxed">{bullet}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="pb-8" />
        </div>
      </section>
    </div>
  );
}
