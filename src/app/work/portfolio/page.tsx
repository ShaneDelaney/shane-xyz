'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// ── Card data (used as initiative item source) ─────────────────────────────
interface Card {
  id: string;
  category: string;
  title: string;
  hook: string;
  url?: string;
}

const CARDS: Card[] = [
  // META
  { id: 'meta-developer-story-pipeline', category: 'Content System', title: 'Developer Story Pipeline', hook: 'Building and managing the storytelling pipeline for Horizon creators.' },
  { id: 'meta-xfn-pipeline', category: 'Editorial Operations', title: 'Cross-Functional Editorial Pipeline', hook: 'Coordinating storytelling across product, analytics, and marketing teams.' },
  { id: 'meta-developer-growth-narratives', category: 'Case Studies', title: 'Developer Growth Narratives', hook: 'Highlighting how creators succeed within the Horizon ecosystem.' },
  { id: 'vail-vr-part-one', category: 'Developer Story', title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding', hook: 'A VR studio raised $15M from players who hadn\'t played the game yet.', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/' },
  { id: 'vail-vr-part-two', category: 'Developer Story', title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine', hook: 'Raising $15M was the beginning. Keeping players is the harder problem.', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/' },
  { id: 'saydeechan', category: 'Developer Story', title: 'Saydeechan: Bringing Worlds to Japan', hook: 'One creator decided Horizon Worlds needed a home in Japan. So they built it.', url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/' },
  { id: 'grow-a-farm', category: 'Developer Story', title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World', hook: 'Two YouTubers. No dev experience. Top 10 in two months.', url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/' },
  { id: 'matthiaos', category: 'Developer Story', title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community', hook: 'The most important builders aren\'t always the ones with the highest numbers.', url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/' },
  { id: 'year-in-review', category: 'Year in Review', title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers', hook: 'A year-in-review surfacing what scaled, what didn\'t, and who defined 2025.', url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/' },
  { id: 'kawaii-creator', category: 'Success Story', title: 'Kawaii.Creator — Success Story', hook: 'A distinctive visual world, built inside ours.', url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/' },
  { id: 'gtm-marketing-plan', category: 'GTM Guide', title: 'Develop a Marketing Plan for Your VR App', hook: 'The anchor guide in the series — strategy, audience research, channel selection.', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/' },
  { id: 'gtm-influencer', category: 'GTM Guide', title: 'Leverage Influencer Partnerships for Your VR App', hook: 'A practical guide to building influencer partnerships for VR developers.', url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/' },
  { id: 'gtm-social', category: 'GTM Guide', title: 'Build Social Media and Community Engagement for Your VR App', hook: 'Community-building and social media strategy for VR developers.', url: 'https://developers.meta.com/horizon/resources/gtm-social-media/' },
  { id: 'gtm-assets', category: 'GTM Guide', title: 'Master Marketing Assets for Your VR App', hook: 'Store page screenshots, trailers, and social creative for VR apps.', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/' },
  { id: 'gtm-pr', category: 'GTM Guide', title: 'PR Strategy for Your VR App', hook: 'PR strategy for VR developers navigating press cycles and journalist relationships.', url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/' },
  { id: 'gtm-app-demos', category: 'GTM Guide', title: 'Create App Demos That Convert', hook: 'Best practices for VR app demos that convert player interest into installs.', url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/' },
  // SNAP
  { id: 'snap-spotlight', category: 'Content Programming', title: 'Spotlight Programming Lead', hook: 'Daily editorial oversight of a 1,000+ piece pipeline across one of the largest UGC surfaces in social media.' },
  { id: 'snap-trend-intelligence', category: 'Trend Intelligence', title: 'Trend Intelligence & Cultural Signals', hook: 'Detecting breakout content across a 1,000+ piece daily pipeline.' },
  { id: 'snap-nux', category: 'Product Collaboration', title: 'New User Experience Curation', hook: 'Curating the first screen a new user sees — 300+ pieces reviewed per cohort.' },
  { id: 'snap-boosted', category: 'Data & Creator Strategy', title: 'Creator Identification System', hook: 'A creator identification system built with Data Science to surface emerging talent earlier at scale.' },
  { id: 'snap-campaign-sourcing', category: 'Campaign Sourcing', title: 'Marketing Campaign Content Sourcing', hook: 'Identifying standout creator content for platform marketing campaigns.' },
  { id: 'snap-editorial-systems', category: 'Editorial Systems', title: 'Editorial Systems & Workflow Design', hook: 'The operational infrastructure that made a 1,000+ piece daily pipeline manageable.' },
  { id: 'snap-breakout-detection', category: 'Breakout Detection', title: 'Breakout Content Identification', hook: 'Flagging breakout content before it reached algorithmic momentum.' },
  { id: 'snap-product-collab', category: 'Product Collaboration', title: 'Cross-Functional Product Collaboration', hook: 'Working with product teams to refine content discovery surfaces.' },
  // PHONY
  { id: 'phony-viral-story-architecture', category: 'Narrative Design', title: 'Viral Story Architecture', hook: 'Designing conversational stories engineered for retention.' },
  { id: 'phony-engagement-analysis', category: 'Audience Strategy', title: 'Audience Engagement Analysis', hook: 'Understanding how conversational storytelling retains audiences.' },
  { id: 'phony-high-volume-production', category: 'Editorial Pipeline', title: 'High-Volume Story Production', hook: 'Producing serialized conversational stories at scale.' },
  { id: 'tiny-texts-cheer-squad', category: 'Scripted Series', title: 'Tiny Texts — Cheer Squad', hook: '6.3M views and a 39% completion rate.', url: 'https://snapchat.com/t/J2MP13US' },
  { id: 'tiny-texts-inhaler', category: 'Scripted Series', title: 'Tiny Texts — Inhaler', hook: '4.39M views and 20.3K followers added.', url: 'https://snapchat.com/t/wPotqUYw' },
  { id: 'tiny-texts-mr-shower', category: 'Scripted Series', title: 'Tiny Texts — Mr. Shower', hook: '3.01M views and 8.43K followers added.' },
  { id: 'tiny-texts-snapscore', category: 'Scripted Series', title: 'Tiny Texts — Snap Score', hook: '2.08M views and 5.73K followers added.', url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168' },
  // STOCKX
  { id: 'stockx-core-insights', category: 'Research Report', title: '2024 Core Insights Report', hook: 'A Gen Z trend report mapping digital consumption behavior across LA and NYC.' },
  { id: 'stockx-sydeon', category: 'Campaign', title: 'Behind the Streams with Sydeon', hook: 'Gaming culture and resale culture — one campaign at the intersection.', url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU' },
  { id: 'stockx-briana-king', category: 'Campaign', title: 'Briana King Joins StockX', hook: 'Skate doesn\'t follow trends. It sets them.', url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s' },
  { id: 'stockx-brittney-elena', category: 'Campaign', title: 'What Drives Brittney Elena', hook: 'An athlete who\'s also a brand.', url: 'https://www.youtube.com/watch?v=3-loqESOCMI' },
  // COLLIDER
  { id: 'collider-actors-movies', category: 'Editorial Feature', title: 'Actors and Their Favorite Movies', hook: '125K readers. 4:23 average time on page. Top-3 Google result.', url: 'https://collider.com/actors-and-their-favorite-movies/' },
  { id: 'collider-succession', category: 'Editorial Feature', title: 'Hardest Working Characters in Succession, Ranked', hook: 'A piece timed to Succession\'s cultural peak — 89K views, 22% social share rate.', url: 'https://collider.com/hardest-workers-in-succession-ranked/' },
  { id: 'collider-fall-movies', category: 'Editorial Feature', title: 'Movies To Get You Ready For Fall', hook: 'A seasonal editorial piece selected for Google Discover. 76K readers.', url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/' },
];

// ── Section data (editorial structure) ────────────────────────────────────
interface Section {
  id: string;
  company: string;
  role: string;
  period: string;
  bg: string;
  accent: string;
  metrics: { value: string; label: string }[];
  overview: string;
  initiatives: string[];
  impact: string[];
}

const SECTIONS: Section[] = [
  {
    id: 'meta',
    company: 'Meta',
    role: 'Content Marketing Coordinator II',
    period: 'Oct 2025 – Mar 2026',
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
    metrics: [
      { value: '13', label: 'published pieces' },
      { value: '5', label: 'XFN teams' },
      { value: '100%', label: 'stat accuracy' },
    ],
    overview: 'Meta Horizon is a developer ecosystem and VR platform for creators building worlds, games, and experiences. My work centered on the Horizon Developer Blog — managing the full storytelling pipeline that documented creator success, provided go-to-market resources, and established editorial credibility for the platform\'s developer community.',
    initiatives: [
      'meta-developer-story-pipeline',
      'meta-xfn-pipeline',
      'meta-developer-growth-narratives',
      'vail-vr-part-one',
      'vail-vr-part-two',
      'saydeechan',
      'grow-a-farm',
      'matthiaos',
      'year-in-review',
      'kawaii-creator',
      'gtm-marketing-plan',
      'gtm-influencer',
      'gtm-social',
      'gtm-assets',
      'gtm-pr',
      'gtm-app-demos',
    ],
    impact: [
      '13 published pieces across developer success stories and go-to-market guides on the Meta developers portal.',
      'Sole DRI across all production stages — sourcing, narrative development, interviews, XFN review, and publication.',
      'Cross-functional coordination with Product, DevRel, Design, Legal, and Data Science on every launch.',
      'Formal stat verification confirming 100% metric accuracy across all published content.',
    ],
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    role: 'Trend Producer',
    period: 'Mar – Oct 2025',
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
    metrics: [
      { value: '500M+', label: 'monthly viewers' },
      { value: '1,000+', label: 'videos daily' },
      { value: '1M+', label: 'creators influenced' },
    ],
    overview: 'Spotlight is Snapchat\'s discovery surface for short-form video, surfacing creator content to hundreds of millions of viewers. My role focused on identifying breakout creators and cultural trends within a high-velocity content pipeline — programming editorial decisions at scale across one of the largest UGC discovery surfaces in social media.',
    initiatives: [
      'snap-spotlight',
      'snap-trend-intelligence',
      'snap-nux',
      'snap-boosted',
      'snap-campaign-sourcing',
      'snap-editorial-systems',
      'snap-breakout-detection',
      'snap-product-collab',
    ],
    impact: [
      'Reviewed 1,000+ pieces of content daily across the Spotlight pipeline.',
      'Surfaced emerging creators and breakout formats for audiences of 500M+ monthly viewers.',
      'Contributed creator content selections to Snap marketing campaigns including Times Square placements.',
      'Built editorial systems and documentation used across 10+ cross-functional teams.',
    ],
  },
  {
    id: 'phony',
    company: 'Phony Content',
    role: 'Content Manager',
    period: 'May 2024 – Mar 2025',
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
    metrics: [
      { value: '25M+', label: 'total views' },
      { value: '50+', label: 'stories produced' },
      { value: '39%', label: 'top completion' },
    ],
    overview: 'Tiny Texts is a scripted short-form storytelling series on Snapchat built around conversational text message narratives. My role focused on managing editorial operations for the full series — developing the story architecture, production systems, and engagement frameworks that drove consistent audience retention across 50+ episodes.',
    initiatives: [
      'phony-viral-story-architecture',
      'phony-engagement-analysis',
      'phony-high-volume-production',
      'tiny-texts-cheer-squad',
      'tiny-texts-inhaler',
      'tiny-texts-mr-shower',
      'tiny-texts-snapscore',
    ],
    impact: [
      '25M+ cumulative views across the Tiny Texts series on Snapchat.',
      'Top story (Cheer Squad) reached 6.3M views and a 39% completion rate.',
      'Built documentation frameworks, style guides, and editorial calendars that standardized production end-to-end.',
      'Sustained consistent quality across 50+ stories through structured creative QA and production systems.',
    ],
  },
  {
    id: 'stockx',
    company: 'StockX',
    role: 'Brand Creative Production (Freelance)',
    period: 'Sep 2021 & Dec 2024',
    bg: 'linear-gradient(145deg, #0A2010 0%, #122a18 100%)',
    accent: '#4ADE80',
    metrics: [
      { value: '10M+', label: 'campaign impressions' },
      { value: '3', label: 'major shoots' },
      { value: '2', label: 'markets researched' },
    ],
    overview: 'StockX is a global marketplace at the intersection of streetwear, sneakers, and cultural goods. My contributions spanned brand research and production support — from authoring a Gen Z consumer insights report that informed 2025 marketing strategy, to supporting high-visibility campaign shoots with major creators and athletes.',
    initiatives: [
      'stockx-core-insights',
      'stockx-sydeon',
      'stockx-briana-king',
      'stockx-brittney-elena',
    ],
    impact: [
      '2024 Core Insights Report directly informed StockX\'s 2025 marketing strategy across LA and NYC.',
      'Supported 3 high-visibility campaign shoots generating 10M+ cross-platform impressions.',
      'Research mapped Gen Z digital consumption, emerging subcultures, and affinity brands.',
    ],
  },
  {
    id: 'collider',
    company: 'Collider',
    role: 'Editorial Content Specialist (Freelance)',
    period: 'Aug – Oct 2022',
    bg: 'linear-gradient(145deg, #1C0800 0%, #2d1200 100%)',
    accent: '#FB923C',
    metrics: [
      { value: '30M+', label: 'monthly visitors' },
      { value: '125K+', label: 'top article views' },
      { value: '~15%', label: 'traffic lift' },
    ],
    overview: 'Collider is a film and television platform with 30M+ monthly visitors. My role as a freelance editorial specialist focused on producing SEO-optimized features that captured high-intent search traffic while delivering genuine editorial value to a film-literate audience.',
    initiatives: [
      'collider-actors-movies',
      'collider-succession',
      'collider-fall-movies',
    ],
    impact: [
      'Top article reached 125K+ views with a 4:23 average time on page and a top-3 Google result.',
      'Lifted organic traffic approximately 15% in two months through targeted content and metadata strategy.',
      'Seasonal feature selected for Google Discover, reaching 76K+ readers.',
    ],
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function getUrlLabel(url: string): string {
  try {
    const host = new URL(url).hostname;
    if (host.includes('snapchat')) return 'Open in Snap';
    if (host.includes('youtube')) return 'Watch';
    if (host.includes('collider')) return 'Read';
    if (host.includes('meta')) return 'Open on Meta';
  } catch {}
  return 'Open';
}

function PortfolioInner() {
  const [activeId, setActiveId] = useState('meta');
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    const id = searchParams.get('section') || searchParams.get('company');
    if (id) {
      const found = SECTIONS.find(s => s.id === id);
      if (found) setActiveId(found.id);
    }
  }, [searchParams]);

  const section = SECTIONS.find(s => s.id === activeId) ?? SECTIONS[0];

  if (!mounted) {
    return (
      <div className="h-screen overflow-hidden flex flex-col pt-14" style={{ background: SECTIONS[0].bg }} />
    );
  }

  return (
    <div
      className="h-screen overflow-hidden flex flex-col pt-14"
      style={{ background: section.bg, transition: 'background 0.7s ease' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 lg:px-10 py-3 flex-shrink-0">
        <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors">
          ← Home
        </Link>
        <span className="text-sm text-white/40">{section.company}</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 min-h-0 px-6 lg:px-10 gap-8 pb-4">

        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-48 flex-shrink-0 py-6 overflow-hidden">
          <p className="text-[11px] text-white/25 italic leading-relaxed mb-8 px-3">
            Platforms generate enormous volumes of content. My work focuses on identifying signal within that noise.
          </p>
          <div className="flex flex-col gap-0.5">
            {SECTIONS.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className="text-left px-3 py-2.5 rounded-lg transition-all"
                  style={isActive ? { backgroundColor: s.accent + '18' } : {}}
                >
                  <span
                    className="block text-[11px] font-medium transition-colors"
                    style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.28)' }}
                  >
                    {s.company}
                  </span>
                  {isActive && (
                    <span className="block text-[9px] mt-0.5" style={{ color: s.accent + '99' }}>
                      {s.role.split(' ').slice(0, 3).join(' ')}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content — scrollable chapter */}
        <div className="flex-1 overflow-y-auto scrollbar-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.38, ease: EASE }}
              className="py-6 pb-16 max-w-2xl"
            >
              {/* Company header */}
              <div className="mb-10">
                <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-none mb-2">
                  {section.company}
                </h1>
                <p className="text-sm text-white/45 mb-6">{section.role} · {section.period}</p>
                <div className="flex items-center gap-8">
                  {section.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xl font-semibold text-white leading-none mb-1">{m.value}</p>
                      <p className="text-[10px] text-white/35 uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* System overview */}
              <div className="mb-10 pb-10 border-b border-white/8">
                <p
                  className="text-[9px] uppercase tracking-widest font-medium mb-4"
                  style={{ color: section.accent }}
                >
                  System Overview
                </p>
                <p className="text-sm text-white/60 leading-relaxed max-w-lg">
                  {section.overview}
                </p>
              </div>

              {/* Initiatives */}
              <div className="mb-10 pb-10 border-b border-white/8">
                <p
                  className="text-[9px] uppercase tracking-widest font-medium mb-5"
                  style={{ color: section.accent }}
                >
                  Key Initiatives
                </p>
                <div className="flex flex-col border-t border-white/8">
                  {section.initiatives.map((cardId, i) => {
                    const card = CARDS.find(c => c.id === cardId);
                    if (!card) return null;
                    return (
                      <div
                        key={cardId}
                        className="flex items-start gap-5 py-4 border-b border-white/8 group"
                      >
                        <span className="text-[9px] text-white/20 tabular-nums w-4 flex-shrink-0 mt-0.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-[9px] uppercase tracking-widest mb-1 font-medium"
                            style={{ color: section.accent + '80' }}
                          >
                            {card.category}
                          </p>
                          <p className="text-sm font-medium text-white leading-snug mb-1">{card.title}</p>
                          <p className="text-xs text-white/40 leading-relaxed">{card.hook}</p>
                        </div>
                        {card.url && (
                          <a
                            href={card.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-xs font-medium transition-opacity hover:opacity-60 mt-1"
                            style={{ color: section.accent }}
                          >
                            {getUrlLabel(card.url)} ↗
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Impact */}
              <div>
                <p
                  className="text-[9px] uppercase tracking-widest font-medium mb-5"
                  style={{ color: section.accent }}
                >
                  Impact
                </p>
                <div className="space-y-4">
                  {section.impact.map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.06, ease: EASE }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: section.accent }}
                      />
                      <p className="text-sm text-white/60 leading-relaxed">{line}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom company strip */}
      <div
        className="flex-shrink-0 px-6 lg:px-10 py-4 border-t border-white/8"
      >
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none lg:justify-center">
          {SECTIONS.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className="flex-shrink-0 text-xs font-medium whitespace-nowrap transition-colors"
                style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.22)' }}
              >
                {s.company}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Suspense>
      <PortfolioInner />
    </Suspense>
  );
}
