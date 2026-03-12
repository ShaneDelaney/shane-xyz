'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const E = [0.16, 1, 0.3, 1] as const;
const FALLBACK = "I don't have a specific answer for that — reach Shane directly at shanedelaney11@gmail.com.";

interface Initiative {
  id: string;
  category: string;
  title: string;
  description: string;
  url?: string;
}

interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  overview: string;
  metrics: { value: string; label: string }[];
  initiatives: Initiative[];
}

const COMPANIES: Company[] = [
  {
    id: 'meta', name: 'Meta', role: 'Content Marketing Coordinator II', period: 'Oct 2025 – Mar 2026',
    metrics: [{ value: '13', label: 'Published pieces' }, { value: '5', label: 'XFN teams' }, { value: '100%', label: 'Stat accuracy' }],
    overview: 'Meta Horizon is a developer ecosystem and VR platform for creators building worlds, games, and experiences. As Project Lead, I managed the full storytelling pipeline for the Horizon Developer Blog — developer success stories, go-to-market guides, and cross-functional editorial coordination.',
    initiatives: [
      { id: 'meta-pipeline', category: 'Content System', title: 'Developer Story Pipeline', description: 'Sole DRI across all production stages for the Horizon Developer Blog — sourcing creators, developing narratives, conducting interviews, coordinating XFN review, and managing publication. 13 pieces published across developer stories and GTM guides.' },
      { id: 'meta-xfn', category: 'Editorial Operations', title: 'Cross-Functional Editorial Pipeline', description: 'Every piece of content required coordination across Product, DevRel, Design, Legal, and Data Science. Managed this review cycle end-to-end, including a formal stat-verification process confirming 100% metric accuracy across all published content.' },
      { id: 'meta-growth', category: 'Case Studies', title: 'Developer Growth Narratives', description: 'Highlighting how creators succeed within the Horizon ecosystem — surfacing patterns in the metrics, community dynamics, and product behaviors that define a successful developer.' },
      { id: 'vail-one', category: 'Developer Story', title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding', description: 'A VR studio raised $15M from players who hadn\'t played the game yet. The first in a two-part series documenting AEXLAB\'s path from bootstrapped studio to crowdfunding record-holder.', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/' },
      { id: 'vail-two', category: 'Developer Story', title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine', description: 'Raising $15M was the beginning. Keeping players engaged was the harder problem. Part two follows AEXLAB\'s live ops strategy for sustaining a competitive VR playerbase post-launch.', url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/' },
      { id: 'saydeechan', category: 'Developer Story', title: 'Saydeechan: Bringing Worlds to Japan', description: 'One creator decided Horizon Worlds needed a home in Japan. So they built it. A story about localization, community building, and what it means to represent a culture on a new platform.', url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/' },
      { id: 'grow-farm', category: 'Developer Story', title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World', description: 'Two YouTubers with no dev experience hit the top 10 in two months. A story about platform accessibility and what the tools of Horizon enable for creators with an audience but no technical background.', url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/' },
      { id: 'matthiaos', category: 'Developer Story', title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community', description: 'The most important builders aren\'t always the ones with the highest numbers. A profile of a creator whose contribution to Horizon is measured in community trust, not installs.', url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/' },
      { id: 'year-review', category: 'Year in Review', title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers', description: 'A year-in-review surfacing what scaled, what didn\'t, and who defined 2025 in the Horizon developer ecosystem.', url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/' },
      { id: 'kawaii', category: 'Success Story', title: 'Kawaii.Creator — Success Story', description: 'A distinctive visual world, built inside ours. Platform success story highlighting how creative identity and aesthetic commitment translate into platform growth.', url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/' },
      { id: 'gtm-marketing', category: 'GTM Guide', title: 'Develop a Marketing Plan for Your VR App', description: 'The anchor guide in the series — strategy, audience research, channel selection, and the foundational thinking every VR developer needs before launch.', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/' },
      { id: 'gtm-influencer', category: 'GTM Guide', title: 'Leverage Influencer Partnerships for Your VR App', description: 'A practical guide to building influencer partnerships for VR developers. Identifying the right creators, structuring relationships, and measuring what works.', url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/' },
      { id: 'gtm-social', category: 'GTM Guide', title: 'Build Social Media and Community Engagement for Your VR App', description: 'Community-building and social media strategy for VR developers — how to build an audience before, during, and after a launch.', url: 'https://developers.meta.com/horizon/resources/gtm-social-media/' },
      { id: 'gtm-assets', category: 'GTM Guide', title: 'Master Marketing Assets for Your VR App', description: 'Store page screenshots, trailers, and social creative for VR apps. The practical asset guide for developers managing their own visual identity.', url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/' },
      { id: 'gtm-pr', category: 'GTM Guide', title: 'PR Strategy for Your VR App', description: 'PR strategy for VR developers navigating press cycles and journalist relationships. How to get coverage and what to do with it.', url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/' },
      { id: 'gtm-demos', category: 'GTM Guide', title: 'Create App Demos That Convert', description: 'Best practices for VR app demos that convert player interest into installs. The tactical guide to letting your game make its own case.', url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/' },
    ],
  },
  {
    id: 'snap', name: 'Snap Inc.', role: 'Trend Producer', period: 'Mar – Oct 2025',
    metrics: [{ value: '500M+', label: 'Monthly viewers' }, { value: '1,000+', label: 'Videos daily' }, { value: '1M+', label: 'Creators influenced' }],
    overview: 'Spotlight is Snapchat\'s discovery surface for short-form video, reaching hundreds of millions of viewers. My role focused on identifying breakout creators and cultural trends within a high-velocity content pipeline — programming editorial decisions at scale.',
    initiatives: [
      { id: 'snap-spotlight', category: 'Content Programming', title: 'Spotlight Programming Lead', description: 'Daily editorial oversight of a 1,000+ piece pipeline across one of the largest UGC surfaces in social media. Every programming decision shaped what 500M+ monthly viewers saw first.' },
      { id: 'snap-trend', category: 'Trend Intelligence', title: 'Trend Intelligence & Cultural Signals', description: 'Detecting breakout content across a 1,000+ piece daily pipeline — identifying cultural signals before they reached algorithmic momentum. Understanding what\'s next before the numbers confirm it.' },
      { id: 'snap-nux', category: 'Product Collaboration', title: 'New User Experience Curation', description: 'Curating the first screen a new user sees — 300+ pieces reviewed per cohort. The NUX determines whether someone comes back. Every selection is a statement about what Spotlight is.' },
      { id: 'snap-boosted', category: 'Data & Creator Strategy', title: 'Creator Identification System', description: 'A creator identification system built with Data Science to surface emerging talent earlier at scale. Contributed to the criteria that determine who gets boosted across the platform.' },
      { id: 'snap-campaign', category: 'Campaign Sourcing', title: 'Marketing Campaign Content Sourcing', description: 'Identifying standout creator content for platform marketing campaigns. Contributed selections used in Times Square placements and other high-visibility Snap brand activations.' },
      { id: 'snap-systems', category: 'Editorial Systems', title: 'Editorial Systems & Workflow Design', description: 'The operational infrastructure that made a 1,000+ piece daily pipeline manageable. Documentation, routing systems, and workflow design used across 10+ cross-functional teams.' },
      { id: 'snap-breakout', category: 'Breakout Detection', title: 'Breakout Content Identification', description: 'Flagging breakout content before it reached algorithmic momentum — the difference between surfacing a trend and following one. Part instinct, part pattern recognition, part data.' },
      { id: 'snap-product', category: 'Product Collaboration', title: 'Cross-Functional Product Collaboration', description: 'Working with product teams to refine content discovery surfaces. Providing editorial perspective on how programming decisions interact with platform mechanics.' },
    ],
  },
  {
    id: 'phony', name: 'Phony Content', role: 'Content Manager', period: 'May 2024 – Mar 2025',
    metrics: [{ value: '25M+', label: 'Total views' }, { value: '50+', label: 'Stories produced' }, { value: '39%', label: 'Top completion rate' }],
    overview: 'Tiny Texts is a scripted short-form storytelling series on Snapchat built around conversational text message narratives. My role focused on developing the story architecture, production systems, and engagement frameworks that drove consistent audience retention across 50+ episodes.',
    initiatives: [
      { id: 'phony-architecture', category: 'Narrative Design', title: 'Viral Story Architecture', description: 'Designing conversational stories engineered for retention — structure, pacing, and emotional arcs calibrated for short-form audience behavior. These aren\'t just scripts; they\'re systems for keeping someone reading.' },
      { id: 'phony-engagement', category: 'Audience Strategy', title: 'Audience Engagement Analysis', description: 'Analyzing completion rates and retention patterns to identify which structural choices drove behavior — and applying those findings to future production. Led to the 39% peak on Cheer Squad.' },
      { id: 'phony-production', category: 'Editorial Pipeline', title: 'High-Volume Story Production', description: 'Editorial calendars, style guides, and QA frameworks for high-volume serialized story production across 50+ episodes. Built the infrastructure that made consistent quality achievable at scale.' },
      { id: 'phony-cheersquad', category: 'Scripted Series', title: 'Tiny Texts — Cheer Squad', description: '6.3M views and a 39% completion rate. The highest-performing episode in the Tiny Texts catalog — a story whose structure was deliberately engineered for hold.', url: 'https://snapchat.com/t/J2MP13US' },
      { id: 'phony-inhaler', category: 'Scripted Series', title: 'Tiny Texts — Inhaler', description: '4.39M views and 20.3K followers added to the account in one story cycle. A story that converted viewers into subscribers at a rate well above series average.', url: 'https://snapchat.com/t/wPotqUYw' },
      { id: 'phony-shower', category: 'Scripted Series', title: 'Tiny Texts — Mr. Shower', description: '3.01M views and 8.43K followers added. Part of the core Tiny Texts run that established the series as a consistent performer on the platform.' },
      { id: 'phony-sleepover', category: 'Scripted Series', title: 'Tiny Texts — Sleepover', description: '2.2M views and 9.4K followers added. A story that consistently outperformed its view count in follower conversion.' },
      { id: 'phony-snapscore', category: 'Scripted Series', title: 'Tiny Texts — Snap Score', description: '2.08M views and 5.73K followers added. A story timed to a culturally relevant prompt that resonated broadly across the Snapchat audience.', url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168' },
    ],
  },
  {
    id: 'stockx', name: 'StockX', role: 'Brand Creative Production (Freelance)', period: 'Sep 2021 & Dec 2024',
    metrics: [{ value: '10M+', label: 'Campaign impressions' }, { value: '3', label: 'Major shoots' }, { value: '2', label: 'Markets researched' }],
    overview: 'StockX is a global marketplace at the intersection of streetwear, sneakers, and cultural goods. My contributions spanned research and production support — from a Gen Z consumer insights report that informed 2025 marketing strategy, to supporting high-visibility campaign shoots.',
    initiatives: [
      { id: 'stockx-report', category: 'Research Report', title: '2024 Core Insights Report', description: 'A Gen Z trend report mapping digital consumption behavior, emerging subcultures, and affinity brands across LA and NYC. Directly informed StockX\'s 2025 marketing strategy.' },
      { id: 'stockx-sydeon', category: 'Campaign', title: 'Behind the Streams with Sydeon', description: 'Gaming culture and resale culture — one campaign at the intersection. Production support for a creator partnership that reached audiences across both worlds.', url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU' },
      { id: 'stockx-briana', category: 'Campaign', title: 'Briana King Joins StockX', description: 'Skate doesn\'t follow trends. It sets them. Production support for a brand campaign featuring a skate athlete at the forefront of culture.', url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s' },
      { id: 'stockx-brittney', category: 'Campaign', title: 'What Drives Brittney Elena', description: 'An athlete who\'s also a brand. Production support for a campaign centered on authentic athletic identity and the cultural resonance of the StockX marketplace.', url: 'https://www.youtube.com/watch?v=3-loqESOCMI' },
    ],
  },
  {
    id: 'collider', name: 'Collider', role: 'Editorial Content Specialist (Freelance)', period: 'Aug – Oct 2022',
    metrics: [{ value: '30M+', label: 'Monthly visitors' }, { value: '125K+', label: 'Top article views' }, { value: '~15%', label: 'Traffic lift' }],
    overview: 'Collider is a film and television platform with 30M+ monthly visitors. My role as a freelance editorial specialist focused on producing SEO-optimized features that captured high-intent search traffic while delivering genuine editorial value to a film-literate audience.',
    initiatives: [
      { id: 'collider-actors', category: 'Editorial Feature', title: 'Actors and Their Favorite Movies', description: '125K readers. 4:23 average time on page. Top-3 Google result for a competitive search query. An editorial piece that found the right audience and kept them.', url: 'https://collider.com/actors-and-their-favorite-movies/' },
      { id: 'collider-succession', category: 'Editorial Feature', title: 'Hardest Working Characters in Succession, Ranked', description: '89K views and a 22% social share rate. Timed to Succession\'s cultural peak — an editorial instinct about when and what to publish that paid off.', url: 'https://collider.com/hardest-workers-in-succession-ranked/' },
      { id: 'collider-fall', category: 'Editorial Feature', title: 'Movies To Get You Ready For Fall', description: 'A seasonal editorial piece selected for Google Discover. 76K+ readers. A strong example of the intersection between editorial sensibility and search-surface optimization.', url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/' },
    ],
  },
];

const ASK_SUGGESTIONS = [
  "What is Shane's current role?",
  "What are Shane's biggest projects?",
  "Is Shane open to new opportunities?",
  "What makes Shane's work distinctive?",
];

interface AskMsg { role: 'user' | 'assistant'; text: string; }

function getUrlLabel(url: string) {
  try {
    const h = new URL(url).hostname;
    if (h.includes('snapchat')) return 'Open in Snap';
    if (h.includes('youtube')) return 'Watch on YouTube';
    if (h.includes('collider')) return 'Read on Collider';
    if (h.includes('meta')) return 'Open on Meta';
  } catch {}
  return 'Open ↗';
}

export default function Work() {
  const [mounted, setMounted] = useState(false);
  const [activeCompany, setActiveCompany] = useState('meta');
  const [activeInitiative, setActiveInitiative] = useState<string | null>(null);
  const [isAsk, setIsAsk] = useState(false);
  const [askMsgs, setAskMsgs] = useState<AskMsg[]>([]);
  const [askQ, setAskQ] = useState('');
  const [askLoading, setAskLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { if (isAsk) setTimeout(() => inputRef.current?.focus(), 100); }, [isAsk]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [askMsgs, askLoading]);

  const askSubmit = async (q: string) => {
    const t = q.trim();
    if (!t || askLoading) return;
    setAskMsgs(p => [...p, { role: 'user', text: t }]);
    setAskLoading(true);
    try {
      const res = await fetch('/api/shanebot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: t }) });
      const d = await res.json();
      setAskMsgs(p => [...p, { role: 'assistant', text: d.answer ?? FALLBACK }]);
    } catch { setAskMsgs(p => [...p, { role: 'assistant', text: FALLBACK }]); }
    finally { setAskLoading(false); }
  };

  const selectCompany = (id: string) => { setActiveCompany(id); setActiveInitiative(null); setIsAsk(false); };

  const company = COMPANIES.find(c => c.id === activeCompany)!;
  const initiative = activeInitiative ? company.initiatives.find(i => i.id === activeInitiative) ?? null : null;

  if (!mounted) return <div className="h-screen pt-[52px]" style={{ background: 'var(--t-bg)' }} />;

  return (
    <div className="h-screen overflow-hidden flex flex-col pt-[52px]" style={{ background: 'var(--t-bg)' }}>

      {/* Body */}
      <div className="flex flex-1 min-h-0">

        {/* Sidebar */}
        <div
          className="hidden lg:flex flex-col w-[210px] flex-shrink-0 py-8 px-5"
          style={{ borderRight: '1px solid var(--t-border)' }}
        >
          <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-5" style={{ color: 'var(--t-tertiary)' }}>
            Experience
          </p>
          <div className="flex flex-col gap-0.5 flex-1">
            {COMPANIES.map((c) => {
              const active = !isAsk && c.id === activeCompany;
              return (
                <button
                  key={c.id}
                  onClick={() => selectCompany(c.id)}
                  className="text-left w-full px-3 py-2.5 rounded-lg transition-colors"
                  style={{ background: active ? 'var(--t-surface)' : 'transparent' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--t-surface)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="block text-[14px] font-medium transition-colors" style={{ color: active ? 'var(--t-primary)' : 'var(--t-secondary)' }}>
                    {c.name}
                  </span>
                  <span className="block text-[11px] mt-0.5" style={{ color: 'var(--t-tertiary)' }}>
                    {c.period}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => { setIsAsk(true); setActiveInitiative(null); }}
            className="text-left w-full px-3 py-2.5 rounded-lg transition-colors mt-2"
            style={{ background: isAsk ? 'var(--t-surface)' : 'transparent' }}
            onMouseEnter={e => { if (!isAsk) e.currentTarget.style.background = 'var(--t-surface)'; }}
            onMouseLeave={e => { if (!isAsk) e.currentTarget.style.background = 'transparent'; }}
          >
            <span className="block text-[14px] font-medium" style={{ color: isAsk ? 'var(--t-primary)' : 'var(--t-accent)' }}>
              Ask about Shane
            </span>
          </button>
        </div>

        {/* Main panel */}
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
          <AnimatePresence mode="wait">

            {/* ── Ask ── */}
            {isAsk ? (
              <motion.div
                key="ask"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: E }}
                className="px-8 lg:px-12 py-10 pb-20 max-w-[620px]"
              >
                <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>AI</p>
                <h1 className="text-[28px] font-semibold tracking-[-0.02em] mb-2" style={{ color: 'var(--t-primary)' }}>Ask about Shane</h1>
                <p className="text-[15px] mb-8" style={{ color: 'var(--t-secondary)' }}>Trained on resume, experience, and portfolio.</p>

                <div className="flex flex-col gap-2.5 mb-6">
                  {askMsgs.length === 0 && !askLoading && (
                    <>
                      <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-2" style={{ color: 'var(--t-tertiary)' }}>Suggested</p>
                      {ASK_SUGGESTIONS.map(s => (
                        <button key={s} onClick={() => askSubmit(s)}
                          className="text-left text-[14px] px-4 py-3 rounded-xl transition-colors"
                          style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}
                          onMouseEnter={e => { e.currentTarget.style.color = 'var(--t-primary)'; e.currentTarget.style.borderColor = 'var(--t-primary)'; }}
                          onMouseLeave={e => { e.currentTarget.style.color = 'var(--t-secondary)'; e.currentTarget.style.borderColor = 'var(--t-border)'; }}
                        >{s}</button>
                      ))}
                    </>
                  )}
                  {askMsgs.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className="max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed"
                        style={{
                          background: msg.role === 'user' ? 'var(--t-primary)' : 'var(--t-surface)',
                          color: msg.role === 'user' ? 'var(--t-bg)' : 'var(--t-primary)',
                        }}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {askLoading && (
                    <div className="flex justify-start">
                      <div className="px-4 py-3 rounded-2xl flex gap-1.5" style={{ background: 'var(--t-surface)' }}>
                        {[0,1,2].map(i => (
                          <motion.span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--t-tertiary)' }}
                            animate={{ opacity: [0.3,1,0.3], y: [0,-3,0] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i*0.15 }} />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>

                <form onSubmit={e => { e.preventDefault(); askSubmit(askQ); setAskQ(''); }}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
                    style={{ border: '1px solid var(--t-border)' }}>
                    <input ref={inputRef} type="text" value={askQ} onChange={e => setAskQ(e.target.value)}
                      placeholder="Ask anything about Shane..." maxLength={500}
                      className="flex-1 text-[14px] bg-transparent outline-none"
                      style={{ color: 'var(--t-primary)' }} />
                    <button type="submit" disabled={!askQ.trim() || askLoading}
                      className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-opacity disabled:opacity-30"
                      style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </motion.div>

            /* ── Initiative detail ── */
            ) : initiative ? (
              <motion.div
                key={`d-${initiative.id}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: E }}
                className="px-8 lg:px-12 py-10 pb-20 max-w-[620px]"
              >
                <button onClick={() => setActiveInitiative(null)}
                  className="flex items-center gap-1.5 text-[13px] mb-8 transition-colors"
                  style={{ color: 'var(--t-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-secondary)')}>
                  ← {company.name}
                </button>

                <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>
                  {initiative.category}
                </p>
                <h2 className="text-[24px] font-semibold tracking-[-0.015em] leading-snug mb-5" style={{ color: 'var(--t-primary)' }}>
                  {initiative.title}
                </h2>
                <p className="text-[15px] leading-[1.65] mb-8 max-w-[480px]" style={{ color: 'var(--t-secondary)' }}>
                  {initiative.description}
                </p>
                {initiative.url && (
                  <a href={initiative.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: 'var(--t-accent)' }}>
                    {getUrlLabel(initiative.url)}
                  </a>
                )}
              </motion.div>

            /* ── Company overview ── */
            ) : (
              <motion.div
                key={`c-${activeCompany}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: E }}
                className="px-8 lg:px-12 py-10 pb-20"
              >
                {/* Header */}
                <div className="mb-10 max-w-[620px]">
                  <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>
                    {company.role}
                  </p>
                  <h1 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight mb-1" style={{ color: 'var(--t-primary)' }}>
                    {company.name}
                  </h1>
                  <p className="text-[15px] mb-8" style={{ color: 'var(--t-tertiary)' }}>{company.period}</p>

                  <div className="flex items-center gap-10 mb-10 pb-10" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    {company.metrics.map(m => (
                      <div key={m.label}>
                        <p className="text-[22px] font-semibold tracking-[-0.01em] leading-none mb-1" style={{ color: 'var(--t-primary)' }}>{m.value}</p>
                        <p className="text-[11px] uppercase tracking-[0.06em]" style={{ color: 'var(--t-tertiary)' }}>{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--t-secondary)' }}>
                    {company.overview}
                  </p>
                </div>

                {/* Initiative list */}
                <div className="max-w-[620px]">
                  <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-1" style={{ color: 'var(--t-tertiary)' }}>
                    Initiatives — {company.initiatives.length}
                  </p>
                  <div>
                    {company.initiatives.map((init, i) => (
                      <motion.button
                        key={init.id}
                        onClick={() => setActiveInitiative(init.id)}
                        className="w-full text-left flex items-center justify-between py-4 group transition-colors"
                        style={{ borderBottom: '1px solid var(--t-border)' }}
                        initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.03 + i * 0.025, ease: E }}
                      >
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.08em] mb-1" style={{ color: 'var(--t-tertiary)' }}>
                            {init.category}
                          </p>
                          <p className="text-[15px] font-medium" style={{ color: 'var(--t-primary)' }}>
                            {init.title}
                          </p>
                        </div>
                        <span className="text-[14px] ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--t-accent)' }}>
                          →
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile bottom company strip */}
      <div className="lg:hidden flex-shrink-0 px-6 py-3 overflow-x-auto scrollbar-none flex items-center gap-5" style={{ borderTop: '1px solid var(--t-border)' }}>
        {COMPANIES.map(c => (
          <button key={c.id} onClick={() => selectCompany(c.id)}
            className="flex-shrink-0 text-[13px] font-medium whitespace-nowrap transition-colors"
            style={{ color: !isAsk && c.id === activeCompany ? 'var(--t-primary)' : 'var(--t-tertiary)' }}>
            {c.name}
          </button>
        ))}
        <button onClick={() => { setIsAsk(true); setActiveInitiative(null); }}
          className="flex-shrink-0 text-[13px] font-medium whitespace-nowrap"
          style={{ color: isAsk ? 'var(--t-accent)' : 'var(--t-tertiary)' }}>
          Ask
        </button>
      </div>
    </div>
  );
}
