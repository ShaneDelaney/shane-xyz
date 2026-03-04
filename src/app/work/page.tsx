'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Role {
  id: string;
  company: string;
  title: string;
  location: string;
  timeline: string;
  bullets: string[];
  category: string;
  portfolioLinks?: string[];
}

const roles: Role[] = [
  {
    id: 'meta',
    company: 'Meta',
    title: 'Content Marketing Coordinator II',
    location: 'Los Angeles, CA',
    timeline: 'October 2025 – Present',
    bullets: [
      'Lead the end-to-end editorial content lifecycle for the Developer Blog, ensuring all posts remain current with platform updates and follow strict brand guidelines.',
      'Build and maintain story templates, track editorial milestones, and manage cross-functional (XFN) feedback loops for high-visibility launches.',
      'Manage the formal stat review process, collaborating with Data Science and XFN teams to audit and confirm 100% accuracy of all public-facing metrics prior to launch.',
      'Serve as the primary editorial bridge between Marketing, Product, and Legal, synthesizing feedback and producing internal status reports for leadership.',
      'Maintain internal trackers and DRI assignments to monitor story progress and ensure alignment on global delivery dates.',
    ],
    category: 'tech',
    portfolioLinks: ['meta-horizon-gtm-guides', 'meta-horizon-builder-stories'],
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    title: 'Trend Producer',
    location: 'Santa Monica, CA',
    timeline: 'March 2025 – October 2025',
    bullets: [
      'Served as Programming Lead for Spotlight content; synthesized daily performance data to identify breakout trends and inform real-time amplification decisions.',
      'Led daily afternoon syncs with editorial teams to review performance; translated data patterns into actionable creative iteration plans to improve content reach.',
      'Orchestrated high-volume digital content streams (1,000+ Snaps per day), ensuring all assets met strict quality, safety, and brand-safe policy bars.',
      'Developed standardized templates for content briefs and Editorial Instructions (EIs) to reduce operational friction and accelerate the creative QA cycle.',
    ],
    category: 'tech',
    portfolioLinks: ['nux-project', 'say-it-in-a-snap', 'boosted-content'],
  },
  {
    id: 'phony',
    company: 'Phony Content',
    title: 'Content Manager',
    location: 'Los Angeles, CA',
    timeline: 'May 2024 – March 2025',
    bullets: [
      'Led project governance for 50+ scripted digital stories, managing resource allocation and creative QA via agile sprint planning.',
      'Built centralized documentation frameworks and editorial systems to standardize production workflows across subscription-based platforms.',
    ],
    category: 'creative',
    portfolioLinks: ['tiny-texts'],
  },
  {
    id: 'collider',
    company: 'Collider',
    title: 'Editorial Content Specialist (Freelance)',
    location: 'Los Angeles, CA',
    timeline: 'August 2022 – October 2022',
    bullets: [
      'Produced high-visibility features for a platform with 30M+ monthly visitors, adhering to complex style guides and SEO metadata protocols.',
      'Boosted organic web traffic by ~15% in two months through targeted SEO content strategies.',
    ],
    category: 'writing',
    portfolioLinks: ['collider-seo'],
  },
  {
    id: 'stockx',
    company: 'StockX',
    title: 'Brand Creative Production (Freelance)',
    location: 'Los Angeles, CA',
    timeline: 'September 2021 & December 2024',
    bullets: [
      'Authored the 2024 Core Insights Report analyzing digital consumption patterns to inform global product marketing and programming strategies.',
      'Managed production timelines for high-visibility digital campaigns.',
    ],
    category: 'creative',
    portfolioLinks: ['core-insights-research', 'campaign-shoot-highlights'],
  },
];

const filters = [
  { value: 'all', label: 'All' },
  { value: 'tech', label: 'Tech' },
  { value: 'creative', label: 'Creative' },
  { value: 'writing', label: 'Writing' },
];

const RoleCard = ({ role, index }: { role: Role; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = role.bullets[0];
  const rest = role.bullets.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{role.company}</h3>
          <p className="text-xs text-gray-600 mt-0.5">{role.title}</p>
          <p className="text-[10px] text-gray-400 mt-0.5">{role.location} · {role.timeline}</p>
        </div>
        {role.portfolioLinks && role.portfolioLinks.length > 0 && (
          <Link
            href={`/work/portfolio#${role.portfolioLinks[0]}`}
            className="text-[10px] font-medium text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap flex items-center gap-1 mt-0.5"
          >
            Projects →
          </Link>
        )}
      </div>

      {/* Bullets */}
      <ul className="space-y-1.5">
        <li className="text-xs text-gray-600 leading-relaxed flex items-start gap-2">
          <span className="text-gray-300 mt-1 flex-shrink-0">–</span>
          <span>{preview}</span>
        </li>
        {expanded && rest.map((bullet, i) => (
          <li key={i} className="text-xs text-gray-600 leading-relaxed flex items-start gap-2">
            <span className="text-gray-300 mt-1 flex-shrink-0">–</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {rest.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[10px] font-medium text-gray-400 hover:text-gray-700 transition-colors"
        >
          {expanded ? 'Show less ↑' : `+${rest.length} more`}
        </button>
      )}
    </motion.div>
  );
};

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = filter === 'all' ? roles : roles.filter(r => r.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
        <div className="max-w-3xl mx-auto w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-end justify-between gap-4 mb-2">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Experience</h1>
              <Link
                href="/work/portfolio"
                className="text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors mb-1"
              >
                Portfolio →
              </Link>
            </div>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Content marketing and editorial operations across tech platforms and media.
            </p>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-100">
              {filters.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filter === tab.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Role list */}
            <div className="space-y-3">
              {filtered.map((role, i) => (
                <RoleCard key={role.id} role={role} index={i} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
