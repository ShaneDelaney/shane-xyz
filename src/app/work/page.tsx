'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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
      { value: '10', label: 'Articles Published' },
      { value: '2', label: 'Series Led' },
      { value: '100%', label: 'Stat Accuracy Rate' },
      { value: '4 Teams', label: 'XFN Coordinated' },
    ],
    bullets: [
      'Leads end-to-end editorial lifecycle for the Horizon Developer Blog, from story ideation through publication, ensuring content stays current with platform updates and meets strict brand guidelines.',
      'Owned editorial direction for the 4-part Go-To-Market Developer Guide (marketing plan development, influencer partnerships, social and community engagement, marketing asset creation) — now a cornerstone resource on Meta\'s developer portal.',
      'Managed XFN reviews across Product, DevRel, Design, and Legal for all high-visibility launches; ran the formal stat review process with Data Science to confirm 100% metric accuracy prior to publication.',
      'Led the 6-part Builder Story Spotlight series — defined story angles, conducted creator interviews, guided agency partners on execution, and managed the full pipeline from sourcing through launch.',
      'Maintains internal DRI trackers and editorial calendars to monitor story progress and align on global delivery dates.',
    ],
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    title: 'Trend Producer',
    period: 'Mar 2025 – Oct 2025',
    location: 'Santa Monica, CA',
    stats: [
      { value: '500M', label: 'Monthly Spotlight Viewers' },
      { value: '1,000+', label: 'Daily Content Pipeline' },
      { value: '500K+', label: 'Campaign Daily Impressions' },
      { value: '1M+', label: 'Creators Influenced' },
    ],
    bullets: [
      'Served as Programming Lead for Spotlight — one of Snapchat\'s highest-scale content surfaces, reaching 500M+ monthly viewers.',
      'Managed a high-volume daily content pipeline of 1,000+ Snaps, ensuring all assets met strict quality, safety, and brand-safe policy standards.',
      'Synthesized daily performance data to identify breakout trends and inform real-time amplification decisions; led daily editorial syncs to translate findings into actionable creative direction.',
      'Developed standardized Editorial Instructions (EIs) and content brief templates that reduced operational friction and accelerated the creative QA cycle.',
      'Collaborated with Data Science to build a custom creator identification system; developed internal documentation for 10+ cross-functional teams and influenced monetization strategy across 1M+ creators.',
    ],
  },
  {
    id: 'phony',
    company: 'Phony Content',
    title: 'Content Manager',
    period: 'May 2024 – Mar 2025',
    location: 'Los Angeles, CA',
    stats: [
      { value: '25M+', label: 'Total Views' },
      { value: '6.3M', label: 'Top Story Views' },
      { value: '39%', label: 'Top Story Completion' },
      { value: '50+', label: 'Stories Managed' },
    ],
    bullets: [
      'Led editorial operations for Tiny Texts, a Snapchat scripted content channel, managing 50+ stories from concept through publication.',
      'Contributed to 25M+ total views across the channel, with the top story (Cheer Squad) reaching 6.32M views and a 39% completion rate.',
      'Managed resource allocation and creative QA through agile sprint planning, keeping production on schedule across all active stories.',
      'Built centralized documentation frameworks and editorial systems that standardized the production workflow end-to-end.',
    ],
  },
  {
    id: 'collider',
    company: 'Collider',
    title: 'Editorial Content Specialist (Freelance)',
    period: 'Aug 2022 – Oct 2022',
    location: 'Los Angeles, CA',
    stats: [
      { value: '30M+', label: 'Monthly Platform Visitors' },
      { value: '125K+', label: 'Top Article Views' },
      { value: '4:23', label: 'Avg. Time on Page' },
      { value: '~15%', label: 'Organic Traffic Lift' },
    ],
    bullets: [
      'Produced SEO-optimized features for Collider, an entertainment platform with 30M+ monthly visitors, adhering to complex style guides and metadata protocols.',
      'Top article: "Actors and Their Favorite Movies" — 125K+ views, 4:23 avg. time on page, top 3 Google result.',
      'Lifted organic web traffic by approximately 15% in two months through targeted content and metadata strategy.',
    ],
  },
  {
    id: 'stockx',
    company: 'StockX',
    title: 'Brand Creative Production (Freelance)',
    period: 'Sep 2021 & Dec 2024',
    location: 'Los Angeles, CA',
    stats: [
      { value: '10M+', label: 'Campaign Impressions' },
      { value: '3', label: 'Major Shoots Supported' },
      { value: '2', label: 'Markets Researched' },
    ],
    bullets: [
      'Authored the 2024 Core Insights Report analyzing Gen Z digital consumption patterns across LA and NYC, directly informing StockX\'s 2025 marketing strategy.',
      'Supported 3 high-visibility campaign shoots — "Behind the Streams with Sydeon," "Briana King Joins StockX," and "What Drives Brittney Elena" — generating 10M+ cross-platform impressions.',
      'Managed production timelines and coordinated logistics across creative, talent, and brand teams.',
    ],
  },
];

export default function Work() {
  return (
    <Suspense>
      <WorkInner />
    </Suspense>
  );
}

function WorkInner() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(1);

  const initialIndex = () => {
    const id = searchParams.get('company');
    if (!id) return 0;
    const i = roles.findIndex(r => r.id === id);
    return i >= 0 ? i : 0;
  };

  const [active, setActive] = useState(initialIndex);

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

          <motion.div
            className="flex gap-0 border border-gray-100 rounded-2xl overflow-hidden"
            style={{ height: 'calc(100vh - 14rem)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            {/* Left: company selector */}
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
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {r.period.split(' – ')[0].replace(/[A-Za-z]+ /, '')}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: spotlight */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.26, ease: EASE }}
                  className="p-8"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">{role.company}</h2>
                    <p className="text-sm text-gray-500">{role.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{role.location} · {role.period}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                    {role.stats.map(stat => (
                      <div key={stat.label} className="bg-gray-50 rounded-xl px-4 py-3">
                        <p className="text-lg font-semibold text-gray-900 tracking-tight leading-none mb-1">{stat.value}</p>
                        <p className="text-[10px] text-gray-400 leading-snug">{stat.label}</p>
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
                        transition={{ duration: 0.22, delay: 0.08 + i * 0.055, ease: EASE }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 mt-[7px]" />
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
