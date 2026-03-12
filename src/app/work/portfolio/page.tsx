'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const SPRING = { type: 'spring', stiffness: 320, damping: 32 } as const;
const EASE   = [0.16, 1, 0.3, 1] as const;

interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  timeline: string;
  description: string;
  details: string[];
  tags: string[];
  metrics?: string[];
  relatedLinks?: { title: string; url: string; description?: string }[];
}

const PROJECTS: Project[] = [
  {
    id: 'meta-horizon-builder-stories',
    title: 'Meta Horizon Builder Story Spotlights',
    company: 'Meta',
    role: 'Content Marketing Coordinator II',
    timeline: 'Oct 2025 – Mar 2026',
    description: 'Served as Project Lead and System Owner for the Builder Stories program — led end-to-end production on 7 developer success stories published on the Meta Horizon developers portal. Formally RACI-designated as Responsible across all stages: narrative development, outreach, interviews, copy-editing, assets, XFN review, and reporting.',
    details: [
      'Sourced and pitched creator stories; built and maintained external developer relationships',
      'Led interviews and shaped narrative direction for each spotlight',
      'Coordinated asset collection and agency execution with Scout House (29 check-ins)',
      'Drove XFN review cycles across Product, DevRel, Design, Legal, and Data Science',
      'Served as Project Lead and System Owner for the 8-step Builder Stories production workflow',
    ],
    tags: ['Narrative Direction', 'Production Lead', 'Agency Management', 'XFN Coordination'],
    metrics: ['7 stories published', 'Meta Horizon Developers Blog'],
    relatedLinks: [
      { title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/', description: "AEXLAB's journey from humble beginnings to $15M in crowdfunding." },
      { title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/', description: 'How AEXLAB transitioned VAIL VR to free-to-play with data-driven live ops.' },
      { title: 'Saydeechan: Bringing Worlds to Japan', url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/', description: "A solo creator's journey to help launch Horizon Worlds in Japan." },
      { title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World', url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/', description: 'Two influencers with no dev experience create a top-ranked Horizon world.' },
      { title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community', url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/', description: 'Community-driven worldbuilding inside Horizon Worlds.' },
      { title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers', url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/', description: 'How rapid iteration drove commercial success in VR in 2025.' },
      { title: 'Kawaii.Creator — Success Story', url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/', description: 'Creator success story featured on the Meta Horizon developer portal.' },
    ],
  },
  {
    id: 'meta-horizon-gtm-guides',
    title: 'Meta Horizon Go-To-Market Developer Guide Series',
    company: 'Meta',
    role: 'Content Marketing Coordinator II',
    timeline: 'Jan – Feb 2026',
    description: 'Editorial lead on a six-part GTM guide series for VR developers — owned all copy and direction for four guides, collaborated with Meta Documentation Engineer Roger Wong on two. Managed full publication lifecycle with XFN review across five teams and formal stat verification before each launch.',
    details: [
      'Owned copy and editorial direction for four primary guides (Jan 2026)',
      'Collaborated with Roger Wong (Documentation Engineer, Meta) on two additional guides (Feb 2026)',
      'Ran formal stat verification with Data Science to confirm 100% metric accuracy pre-launch',
      'Coordinated XFN review across Product, DevRel, Design, Legal, and Data Science',
      'Created supplementary worksheets and checklists for the Marketing Plan guide',
    ],
    tags: ['Editorial Lifecycle', 'XFN Coordination', 'Content Strategy', 'Developer Education'],
    metrics: ['6 guides published', 'Meta Horizon developers portal'],
    relatedLinks: [
      { title: 'Develop a Marketing Plan for Your VR App', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/', description: 'High-level marketing strategy, audience research, and channel identification.' },
      { title: 'Leverage Influencer Partnerships', url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/', description: 'Building strategic influencer partnerships to grow VR app visibility.' },
      { title: 'Build Social Media and Community Engagement', url: 'https://developers.meta.com/horizon/resources/gtm-social-media/', description: 'Community-building tactics and social media strategies for VR developers.' },
      { title: 'Master Marketing Assets for VR Apps', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/', description: 'Creating effective marketing assets for promoting VR apps.' },
      { title: 'PR Strategy for VR Apps', url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/', description: 'Public relations strategy and media outreach for VR developers.' },
      { title: 'Creating App Demos That Convert', url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/', description: 'Best practices for building compelling app demos that drive installs.' },
    ],
  },
  {
    id: 'snap-spotlight',
    title: 'Spotlight Programming Lead',
    company: 'Snap Inc.',
    role: 'Trend Producer',
    timeline: 'Mar – Oct 2025',
    description: "Served as Programming Lead for Spotlight — Snapchat's highest-scale content surface reaching 500M+ monthly viewers. Managed a daily pipeline of 1,000+ pieces of content and led editorial syncs translating daily performance data into real-time amplification decisions.",
    details: [
      'Managed daily pipeline of 1,000+ pieces of content across quality, safety, and brand-safe policy',
      'Synthesized daily performance data to surface breakout trends',
      'Led editorial syncs translating data findings into real-time amplification decisions',
      'Developed standardized Editorial Instructions (EIs) and content brief templates',
    ],
    tags: ['Editorial Pipeline', 'Trend Analysis', 'Content Programming', 'Scale'],
    metrics: ['500M+ monthly viewers', '1,000+ pieces/day'],
  },
  {
    id: 'snap-nux',
    title: 'New User Experience Curation',
    company: 'Snap Inc.',
    role: 'Trend Producer',
    timeline: '2025',
    description: 'Curated personalized UGC feeds for Snapchat\'s New User Experience for teens (13–17), achieving 10% higher retention than platform averages using data-driven cohort guidelines and algorithmic + editorial judgment.',
    details: [
      'Reviewed and recommended 300+ content pieces per teen cohort segmented by interest',
      'Filtered content using data-driven cohort guidelines (M1.2 incremental data)',
      'Collaborated with product engineering teams through dedicated Slack channels',
      'Ensured demographic fit while maintaining editorial quality standards',
    ],
    tags: ['Content Curation', 'Data-Driven Programming', 'Cohort Segmentation'],
    metrics: ['300+ pieces per cohort', '10% higher retention than platform average'],
  },
  {
    id: 'snap-boosted',
    title: 'Boosted Content & Creator Identification System',
    company: 'Snap Inc.',
    role: 'Trend Producer',
    timeline: '2025',
    description: 'Collaborated with Snap\'s Data Science team to build a custom creator identification system to surface emerging creators. Developed internal documentation for 10+ XFN teams and influenced monetization strategy across 1M+ creators.',
    details: [
      'Translated complex data findings into strategic content guidance for editorial teams',
      'Created internal documentation and process templates for 10+ XFN teams',
      'Built custom web app tool to streamline creator identification workflow',
      'Developed standardized Editorial Instructions (EIs) for the initiative',
    ],
    tags: ['Data Strategy', 'Process Documentation', 'XFN Collaboration', 'Creator Tools'],
    metrics: ['1M+ monetized creators', '10+ XFN teams served'],
  },
  {
    id: 'tiny-texts',
    title: 'Tiny Texts on Snapchat',
    company: 'Phony Content',
    role: 'Content Manager',
    timeline: 'May 2024 – Mar 2025',
    description: 'Led editorial operations for Tiny Texts — 50+ scripted Snapchat stories generating 25M+ total views. Top story (Cheer Squad) reached 6.3M views and a 39% completion rate. Built production infrastructure including style guides, editorial calendars, and documentation frameworks.',
    details: [
      'Led agile sprint planning and creative QA for 50+ scripted digital stories',
      'Built centralized style guides and voice/tone documentation for writing team consistency',
      'Managed editorial calendar across rotating writers to maintain publishing cadence',
      'Optimized content for engagement metrics across 25M+ total views',
    ],
    tags: ['Editorial Operations', 'Content Systems', 'Short-Form Content'],
    metrics: ['25M+ total views', '6.3M views (top story)', '39% completion rate'],
    relatedLinks: [
      { title: 'Cheer Squad', url: 'https://snapchat.com/t/J2MP13US', description: '6.32M views · 43K followers · 39% completion rate' },
      { title: 'Inhaler', url: 'https://snapchat.com/t/wPotqUYw', description: '4.39M views · 20.3K followers · 42% completion rate' },
      { title: 'Snapscore', url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168', description: '3.59M views · 10K followers · 35% completion rate' },
    ],
  },
  {
    id: 'stockx-insights',
    title: '2024 Core Insights Report',
    company: 'StockX',
    role: 'Brand Creative Production',
    timeline: 'December 2024',
    description: "Authored StockX's 2024 Gen Z trend report analyzing digital consumption behavior among 18–25 males in LA and NYC — directly informing their 2025 marketing strategy and campaign planning.",
    details: [
      'Mapped digital behaviors including curated sharing and resale culture',
      'Highlighted emerging subcultures: Gorp Core, DIY, archive styling',
      'Identified affinity brands and figures for campaign targeting',
      'Delivered strategic recommendations for 2025 programming and creative direction',
    ],
    tags: ['Strategic Reporting', 'Trend Research', 'Gen Z Strategy', 'Consumer Insights'],
    metrics: ['18–25 male demographic', 'LA & NYC markets', 'Informed 2025 campaign strategy'],
    relatedLinks: [
      { title: 'Trend Report Excerpt', url: '/assets/StockXCoreInsights.pdf', description: 'Strategic analysis of Gen Z consumer behavior in key markets' },
    ],
  },
  {
    id: 'stockx-campaigns',
    title: 'Campaign Production Highlights',
    company: 'StockX',
    role: 'Brand Creative Production',
    timeline: 'Sep 2021 & Dec 2024',
    description: 'Managed production logistics for 3 high-profile campaign shoots coordinating talent, location, and asset workflows across campaigns generating 10M+ cross-platform impressions.',
    details: [
      'Managed talent scheduling, location coordination, and asset organization for 3 campaigns',
      'Supported on-set visual execution and creative direction',
      'Organized digital assets for post-production workflows',
    ],
    tags: ['Production Coordination', 'Campaign Execution'],
    metrics: ['10M+ cross-platform impressions', '3 major campaigns'],
    relatedLinks: [
      { title: 'Behind the Streams with Sydeon', url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU', description: 'Gaming influencer campaign' },
      { title: 'Briana King Joins StockX', url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s', description: 'Skate community leader campaign' },
      { title: 'What Drives Brittney Elena', url: 'https://www.youtube.com/watch?v=3-loqESOCMI', description: 'Basketball influencer profile' },
    ],
  },
  {
    id: 'collider-seo',
    title: 'Film & TV Editorial Features',
    company: 'Collider',
    role: 'Editorial Content Specialist',
    timeline: 'Aug – Oct 2022',
    description: 'Produced SEO-optimized editorial features for a 30M+ monthly visitor platform. Top article generated 125K+ views, a 4:23 avg. time on page, and a top-3 Google result — lifting organic traffic approximately 15% in two months.',
    details: [
      'Produced features adhering to complex style guides and SEO metadata protocols',
      'Balanced keyword strategy with editorial quality for sustained organic traffic',
      'Created evergreen content with high reader retention and time-on-page',
    ],
    tags: ['SEO', 'Editorial', 'Evergreen Content'],
    metrics: ['30M+ monthly visitors', '~15% organic traffic growth'],
    relatedLinks: [
      { title: 'Actors and Their Favorite Movies', url: 'https://collider.com/actors-and-their-favorite-movies/', description: '125K+ views · 4:23 avg time on page · top 3 Google result' },
      { title: 'Hardest Working Characters in Succession', url: 'https://collider.com/hardest-workers-in-succession-ranked/', description: '89K+ views · 22% social share rate' },
      { title: 'Movies To Get You Ready For Fall', url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/', description: '76K+ views · featured in Google Discover' },
    ],
  },
];

const COMPANY_ORDER = ['Meta', 'Snap Inc.', 'Phony Content', 'StockX', 'Collider'];
const COMPANY_COLORS: Record<string, string> = {
  'Meta':          'bg-blue-50 text-blue-600',
  'Snap Inc.':     'bg-yellow-50 text-yellow-600',
  'Phony Content': 'bg-purple-50 text-purple-600',
  'StockX':        'bg-green-50 text-green-600',
  'Collider':      'bg-orange-50 text-orange-600',
};

function PortfolioInner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    const projectId = searchParams.get('project');
    if (projectId) {
      const i = PROJECTS.findIndex(p => p.id === projectId);
      if (i !== -1) setIndex(i);
    }
  }, [searchParams]);

  const go = useCallback((dir: 1 | -1) => {
    const next = index + dir;
    if (next < 0 || next >= PROJECTS.length) return;
    setDirection(dir);
    setIndex(next);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const project = PROJECTS[index];
  const companyColor = COMPANY_COLORS[project.company] ?? 'bg-gray-100 text-gray-600';

  // Company progress
  const companyProjects = PROJECTS.filter(p => p.company === project.company);
  const companyIndex = companyProjects.findIndex(p => p.id === project.id) + 1;

  // Ghost card offsets (next cards peeking behind)
  const ghosts = [1, 2].map(offset => PROJECTS[index + offset]).filter(Boolean);

  const cardVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, rotate: d > 0 ? 3 : -3, scale: 0.97 }),
    center: { x: 0, opacity: 1, rotate: 0, scale: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, rotate: d > 0 ? -3 : 3, scale: 0.97 }),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 sm:px-8 pt-20 sm:pt-24 pb-6 max-w-2xl mx-auto w-full">
        <motion.h1
          className="text-sm font-semibold text-gray-900 tracking-tight"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Portfolio
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Link href="/work" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
            ← Experience
          </Link>
        </motion.div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 sm:px-8 pb-10">
        <div className="w-full max-w-2xl">

          {/* Stack container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            {/* Ghost cards */}
            {ghosts.slice(0, 2).reverse().map((g, i) => {
              const depth = ghosts.length === 2 ? (i === 0 ? 2 : 1) : 1;
              return (
                <div
                  key={g.id}
                  className="absolute inset-x-0 bg-white rounded-3xl border border-gray-100"
                  style={{
                    top: `${depth * 10}px`,
                    left: `${depth * 5}px`,
                    right: `${depth * 5}px`,
                    height: '60px',
                    transform: `scale(${1 - depth * 0.02})`,
                    opacity: 1 - depth * 0.25,
                    zIndex: 10 - depth,
                    boxShadow: '0 1px 8px 0 rgba(0,0,0,0.04)',
                  }}
                />
              );
            })}

            {/* Active card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={project.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={SPRING}
                className="relative z-20 bg-white rounded-3xl border border-gray-100 overflow-hidden"
                style={{ boxShadow: '0 2px 24px 0 rgba(0,0,0,0.06)' }}
              >
                {/* Card header */}
                <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${companyColor}`}>
                      {project.company}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {project.company} · {companyIndex} of {companyProjects.length}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug mb-1">
                    {project.title}
                  </h2>
                  <p className="text-xs text-gray-400">{project.role} · {project.timeline}</p>
                </div>

                {/* Card body — scrollable */}
                <div className="px-6 sm:px-8 py-5 max-h-[52vh] overflow-y-auto space-y-6">

                  {/* Published Links — first */}
                  {project.relatedLinks && project.relatedLinks.length > 0 && (
                    <div>
                      <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        {project.relatedLinks.some(l => l.url.startsWith('http')) ? 'Published' : 'Links'}
                      </p>
                      <div className="space-y-0 -mx-1">
                        {project.relatedLinks.map((link, i) => (
                          link.url ? (
                            <a
                              key={i}
                              href={link.url}
                              target={link.url.startsWith('http') ? '_blank' : '_self'}
                              rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="flex items-start justify-between gap-3 px-1 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/link"
                            >
                              <div className="min-w-0">
                                <p className="text-sm font-medium text-gray-900 leading-snug group-hover/link:text-gray-500 transition-colors">{link.title}</p>
                                {link.description && (
                                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{link.description}</p>
                                )}
                              </div>
                              <span className="text-gray-300 group-hover/link:text-gray-600 transition-colors text-xs flex-shrink-0 mt-0.5">↗</span>
                            </a>
                          ) : null
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Overview</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((m, i) => (
                        <span key={i} className="text-[11px] font-medium text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Details */}
                  {project.details.length > 0 && (
                    <div>
                      <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Contributions</p>
                      <div className="space-y-2">
                        {project.details.map((d, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 mt-[7px]" />
                            <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pb-1">
                      {project.tags.map((t, i) => (
                        <span key={i} className="text-[10px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex items-center justify-between mt-8"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          >
            {/* Prev */}
            <button
              onClick={() => go(-1)}
              disabled={index === 0}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              ← {index > 0 && <span className="text-xs hidden sm:inline truncate max-w-[140px]">{PROJECTS[index - 1].company}</span>}
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {PROJECTS.map((p, i) => {
                const isActive = i === index;
                const isSameCompany = p.company === project.company;
                return (
                  <button
                    key={p.id}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    className="transition-all duration-200"
                    aria-label={p.title}
                  >
                    <div className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-4 h-1.5 bg-gray-900'
                        : isSameCompany
                        ? 'w-1.5 h-1.5 bg-gray-400'
                        : 'w-1.5 h-1.5 bg-gray-200'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Next */}
            <button
              onClick={() => go(1)}
              disabled={index === PROJECTS.length - 1}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              {index < PROJECTS.length - 1 && <span className="text-xs hidden sm:inline truncate max-w-[140px]">{PROJECTS[index + 1].company}</span>} →
            </button>
          </motion.div>

          {/* Company progress strip */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-5"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
          >
            {COMPANY_ORDER.map((co) => {
              const isActive = co === project.company;
              const done = PROJECTS.findIndex(p => p.company === co);
              const isDone = done < index && co !== project.company;
              return (
                <button
                  key={co}
                  onClick={() => {
                    const i = PROJECTS.findIndex(p => p.company === co);
                    if (i !== -1) { setDirection(i > index ? 1 : -1); setIndex(i); }
                  }}
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? 'text-gray-900' : isDone ? 'text-gray-400' : 'text-gray-300 hover:text-gray-500'
                  }`}
                >
                  {co}
                </button>
              );
            })}
          </motion.div>

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
