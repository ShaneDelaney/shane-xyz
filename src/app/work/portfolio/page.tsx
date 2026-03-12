'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const SPRING = { type: 'spring', stiffness: 300, damping: 30 } as const;
const EASE   = [0.16, 1, 0.3, 1] as const;

interface Card {
  id: string;
  company: string;
  category: string;
  title: string;
  url?: string;
  about: string;
  contribution: string;
  period: string;
  tags: string[];
  metrics?: string[];
}

const CARDS: Card[] = [
  // ── META — BUILDER STORIES ────────────────────────────────────────────────
  {
    id: 'vail-vr-part-one',
    company: 'Meta',
    category: 'Developer Story',
    title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding',
    url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/',
    about: 'Part one of a two-part spotlight on AEXLAB and their flagship VR title, VAIL VR. Documents the studio\'s journey from couch-surfing origins to raising $15M in community crowdfunding — one of the most successful funding campaigns in VR gaming.',
    contribution: 'Production lead end-to-end across five documented meetings from October 30 through November 12. Drove narrative development, coordinated the Scout House interview, managed developer approval with AEXLAB\'s Chandler Steele, and led the piece through legal and XFN review to publication.',
    period: 'Nov 2025',
    tags: ['Developer Story', 'Production Lead', 'Agency Coordination', 'XFN Review'],
    metrics: ['$15M crowdfunding', '5 production meetings'],
  },
  {
    id: 'vail-vr-part-two',
    company: 'Meta',
    category: 'Developer Story',
    title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine',
    url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/',
    about: 'The second installment of the VAIL VR series — goes inside AEXLAB\'s live operations engine and documents how they transitioned VAIL VR to free-to-play using a data-driven approach to player retention and content cadence.',
    contribution: 'Production lead end-to-end. Shaped the narrative direction toward the live ops angle, coordinated legal review given the specificity of financial and technical figures cited, and drove the full production and review cycle through to publication.',
    period: 'Nov 2025',
    tags: ['Developer Story', 'Production Lead', 'Legal Coordination'],
    metrics: ['Part 2 of 2', 'Live ops angle'],
  },
  {
    id: 'saydeechan',
    company: 'Meta',
    category: 'Developer Story',
    title: 'Saydeechan: Bringing Worlds to Japan',
    url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/',
    about: 'Developer story on Saydeechan, a solo creator building Horizon Worlds experiences specifically for Japanese audiences. One of the few ecosystem stories focused on cultural localization as a product strategy rather than revenue or growth metrics.',
    contribution: 'Sourced and pitched this story. Led narrative development with the Japan localization framing at the center, managed the Scout House interview and logistics, coordinated asset collection, and drove the full cross-functional review cycle through to publication.',
    period: 'Dec 2025',
    tags: ['Developer Story', 'Sourcing', 'Narrative Development', 'Production Lead'],
  },
  {
    id: 'grow-a-farm',
    company: 'Meta',
    category: 'Developer Story',
    title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World',
    url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/',
    about: 'Builder story on SnakeThug7 (1.86M YouTube subscribers) and Dinco — two gaming influencers who built a Horizon Worlds experience with no prior dev experience. The game reached the top 10 mobile worlds within two months of launch.',
    contribution: 'Production lead end-to-end. Attended the Scout House interview on October 29 and V1 review on November 4. Authored the internal Workplace announcement post upon publication on November 19, 2025.',
    period: 'Nov 2025',
    tags: ['Developer Story', 'Production Lead', 'Creator Sourcing'],
    metrics: ['Top 10 mobile worlds', '1.86M YT creator'],
  },
  {
    id: 'matthiaos',
    company: 'Meta',
    category: 'Developer Story',
    title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community',
    url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/',
    about: 'Creator spotlight on Matthiaos — documenting community-driven worldbuilding and how one builder used Horizon Worlds as a platform for creative advocacy and player-first design.',
    contribution: 'Production lead end-to-end. Owned sourcing, narrative development, interview coordination through Scout House, asset collection, and the full XFN review cycle from initial outreach through to publication.',
    period: 'Feb 2026',
    tags: ['Developer Story', 'Production Lead', 'Community Angle'],
  },
  {
    id: 'year-in-review',
    company: 'Meta',
    category: 'Year in Review',
    title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers',
    url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/',
    about: 'A 2025 year-in-review piece surfacing patterns and insights from the year\'s breakout creators and developers on Meta Horizon — what worked, what scaled, and what defined the platform\'s most commercially successful builders.',
    contribution: 'Production lead end-to-end. Developed the editorial concept and framing, owned all copy and narrative direction, coordinated stat verification with Data Science, and drove cross-functional review across Product, DevRel, Design, and Legal through to publication.',
    period: 'Feb 2026',
    tags: ['Developer Story', 'Editorial Lead', 'Data Verification', 'XFN Review'],
  },
  {
    id: 'kawaii-creator',
    company: 'Meta',
    category: 'Success Story',
    title: 'Kawaii.Creator — Success Story',
    url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/',
    about: 'Success story featured on the Meta Horizon developer portal\'s Discover section — spotlighting Kawaii.Creator and their work building on the Horizon platform.',
    contribution: 'Production lead end-to-end. Owned sourcing, narrative development, and the full production and review cycle through to publication on the success stories portal.',
    period: 'Feb 2026',
    tags: ['Success Story', 'Production Lead'],
  },

  // ── META — GTM GUIDES ─────────────────────────────────────────────────────
  {
    id: 'gtm-marketing-plan',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Develop a Marketing Plan for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/',
    about: 'The anchor guide in a six-part GTM series for VR developers — covers high-level marketing strategy, audience research, and channel identification. Includes supplementary worksheets and checklists designed to make the guide actionable during a live launch sprint, not just as reference.',
    contribution: 'Primary author and editorial lead. Owned all copy and direction from outline through publication. Created supplementary worksheets and checklists. Coordinated XFN review across Product, DevRel, Design, Legal, and Data Science. Ran formal stat verification prior to launch.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination', 'Stat Verification'],
    metrics: ['Part 1 of 6', 'Includes worksheets + checklists'],
  },
  {
    id: 'gtm-influencer',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Leverage Influencer Partnerships for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/',
    about: 'Second guide in the series — practical strategy for identifying and building influencer partnerships to grow VR app visibility on Meta Horizon. Covers tiers, outreach, and campaign structure.',
    contribution: 'Primary author and editorial lead. Owned all copy and direction. Managed the full publication lifecycle including XFN review across five teams and formal stat verification before launch.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination'],
    metrics: ['Part 2 of 6'],
  },
  {
    id: 'gtm-social',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Build Social Media and Community Engagement for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-social-media/',
    about: 'Third guide in the series — community-building tactics and social media strategies tailored specifically for VR developers launching on Meta Horizon, covering channel selection and content cadence.',
    contribution: 'Primary author and editorial lead. Owned all copy and direction. Managed XFN review and publication schedule across all five teams.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination'],
    metrics: ['Part 3 of 6'],
  },
  {
    id: 'gtm-assets',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Master Marketing Assets for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/',
    about: 'Fourth guide in the series — covers creating effective marketing assets for promoting VR apps and Horizon Worlds experiences, from store page screenshots to trailers and social creative.',
    contribution: 'Primary author and editorial lead. Owned all copy and direction. Managed XFN review and publication.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination'],
    metrics: ['Part 4 of 6'],
  },
  {
    id: 'gtm-pr',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'PR Strategy for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/',
    about: 'Fifth guide in the series — public relations strategy and media outreach for VR developers navigating press cycles and review coverage around app launches.',
    contribution: 'Co-authored with Roger Wong (Documentation Engineer, Meta) in February 2026. Collaborated on copy and editorial direction while managing production logistics, XFN review coordination, and the publication pipeline.',
    period: 'Feb 2026',
    tags: ['GTM Guide', 'Co-Author', 'Roger Wong Collaboration'],
    metrics: ['Part 5 of 6'],
  },
  {
    id: 'gtm-app-demos',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Create App Demos That Convert',
    url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/',
    about: 'Final guide in the series — best practices for building compelling app demos that convert player interest into installs. Closes the six-part series with execution-level tactical guidance.',
    contribution: 'Co-authored with Roger Wong (Documentation Engineer, Meta) in February 2026. Collaborated on copy and editorial direction through to publication.',
    period: 'Feb 2026',
    tags: ['GTM Guide', 'Co-Author', 'Roger Wong Collaboration'],
    metrics: ['Part 6 of 6'],
  },

  // ── SNAP INC. ─────────────────────────────────────────────────────────────
  {
    id: 'snap-spotlight',
    company: 'Snap Inc.',
    category: 'Content Programming',
    title: 'Spotlight Programming Lead',
    about: 'Snapchat\'s Spotlight surface reaches 500M+ monthly viewers. As Programming Lead, managed a daily editorial pipeline of 1,000+ pieces of content — making real-time curation and amplification decisions across quality, safety, and brand-safe policy.',
    contribution: 'Served as Programming Lead responsible for the full daily pipeline. Synthesized performance data to surface breakout trends, led editorial syncs translating data into amplification decisions, and developed standardized Editorial Instructions (EIs) and content brief templates that reduced operational friction across the team.',
    period: 'Mar – Oct 2025',
    tags: ['Content Programming', 'Editorial Pipeline', 'Trend Analysis'],
    metrics: ['500M+ monthly viewers', '1,000+ pieces/day'],
  },
  {
    id: 'snap-nux',
    company: 'Snap Inc.',
    category: 'Product Collaboration',
    title: 'New User Experience (NUX) Curation',
    about: 'Snapchat\'s New User Experience shapes what new users see first on the platform. The teen NUX (13–17) required editorial judgment layered on top of algorithmic signals to build personalized onboarding feeds that drove retention.',
    contribution: 'Curated personalized UGC feeds for teen cohorts using data-driven guidelines (M1.2 incremental data), reviewing 300+ content pieces per cohort segmented by interest. Collaborated with product engineering teams and maintained demographic-appropriate quality standards. Achieved 10% higher retention than platform average.',
    period: 'Mar – Oct 2025',
    tags: ['Content Curation', 'Cohort Segmentation', 'Data-Driven'],
    metrics: ['300+ pieces per cohort', '10% higher retention than avg.'],
  },
  {
    id: 'snap-boosted',
    company: 'Snap Inc.',
    category: 'Data & Creator Strategy',
    title: 'Creator Identification System & Boosted Content',
    about: 'Snap\'s boosted content initiative required identifying emerging creators before algorithmic signals could surface them at scale. Built in collaboration with Data Science to create a systematic approach to spotting and elevating creators earlier in their growth curve.',
    contribution: 'Collaborated with Data Science to build a custom creator identification system. Translated complex data findings into strategic content guidance, created internal documentation for 10+ XFN teams, built a supporting web app tool, and influenced monetization strategy across 1M+ creators.',
    period: 'Mar – Oct 2025',
    tags: ['Data Strategy', 'Creator Tools', 'XFN Collaboration', 'Process Documentation'],
    metrics: ['1M+ monetized creators', '10+ XFN teams served'],
  },

  // ── PHONY CONTENT ─────────────────────────────────────────────────────────
  {
    id: 'tiny-texts-cheer-squad',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Cheer Squad',
    url: 'https://snapchat.com/t/J2MP13US',
    about: 'Top-performing story in the Tiny Texts scripted series on Snapchat. Cheer Squad became the breakout title in the show\'s catalog, generating the highest view count and follower conversion in the series.',
    contribution: 'Led editorial operations for the full Tiny Texts slate — overseeing creative direction, QA, and production cadence. Managed the writing team and editorial calendar that produced Cheer Squad and the broader series.',
    period: 'May 2024 – Mar 2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['6.3M views', '43K followers', '39% completion rate'],
  },
  {
    id: 'tiny-texts-inhaler',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Inhaler',
    url: 'https://snapchat.com/t/wPotqUYw',
    about: 'Second-highest performing story in the Tiny Texts series. Inhaler demonstrated the show\'s ability to sustain strong completion rates across different narrative formats and emotional tones.',
    contribution: 'Led editorial operations across the full series. Managed creative QA, writing team coordination, and the production systems that maintained consistent output and quality across 50+ stories.',
    period: 'May 2024 – Mar 2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['4.39M views', '20.3K followers', '42% completion rate'],
  },
  {
    id: 'tiny-texts-snapscore',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Snapscore',
    url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168',
    about: 'Third-highest performing story in the Tiny Texts catalog on Snapchat, demonstrating consistent performance across the series\' top titles.',
    contribution: 'Led editorial operations for the series. Built the centralized documentation frameworks, style guides, and editorial calendars that standardized production end-to-end and enabled the team to scale output without sacrificing quality.',
    period: 'May 2024 – Mar 2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['3.59M views', '10K followers', '35% completion rate'],
  },

  // ── STOCKX ────────────────────────────────────────────────────────────────
  {
    id: 'stockx-core-insights',
    company: 'StockX',
    category: 'Research Report',
    title: '2024 Core Insights Report',
    about: 'Gen Z trend report analyzing digital consumption behavior among 18–25 males in LA and NYC — mapping emerging subcultures, affinity brands, and behavioral patterns that directly informed StockX\'s 2025 marketing strategy.',
    contribution: 'Sole author. Mapped digital behaviors including curated sharing and resale culture, identified emerging subcultures (Gorp Core, DIY, archive styling), surfaced affinity figures for campaign targeting, and delivered strategic recommendations that shaped 2025 programming and creative direction.',
    period: 'Dec 2024',
    tags: ['Research', 'Trend Analysis', 'Gen Z Strategy', 'Sole Author'],
    metrics: ['LA & NYC markets', 'Informed 2025 strategy'],
  },
  {
    id: 'stockx-sydeon',
    company: 'StockX',
    category: 'Campaign',
    title: 'Behind the Streams with Sydeon',
    url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU',
    about: 'High-visibility campaign shoot with gaming influencer Sydeon, produced as part of StockX\'s creator partnership program targeting the gaming and streaming community.',
    contribution: 'Supported production logistics — managed talent scheduling, location coordination, and digital asset organization across the shoot. Contributed to on-set execution and post-production asset workflows.',
    period: 'Sep 2021',
    tags: ['Campaign Production', 'Influencer', 'Gaming'],
    metrics: ['10M+ impressions (series total)'],
  },
  {
    id: 'stockx-briana-king',
    company: 'StockX',
    category: 'Campaign',
    title: 'Briana King Joins StockX',
    url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s',
    about: 'Campaign shoot with Briana King, skate community leader, produced as part of StockX\'s ongoing creator-driven content series.',
    contribution: 'Supported production logistics across talent, location, and asset workflows. Coordinated on-set execution and digital asset organization for post-production.',
    period: 'Sep 2021',
    tags: ['Campaign Production', 'Skate', 'Creator'],
    metrics: ['10M+ impressions (series total)'],
  },
  {
    id: 'stockx-brittney-elena',
    company: 'StockX',
    category: 'Campaign',
    title: 'What Drives Brittney Elena',
    url: 'https://www.youtube.com/watch?v=3-loqESOCMI',
    about: 'Campaign profile with basketball influencer Brittney Elena, part of the StockX creator content series highlighting athletes and their relationship with culture and community.',
    contribution: 'Supported production logistics including talent scheduling, location coordination, and asset organization. Contributed to on-set execution and post-production asset workflows.',
    period: 'Dec 2024',
    tags: ['Campaign Production', 'Basketball', 'Creator'],
    metrics: ['10M+ impressions (series total)'],
  },

  // ── COLLIDER ──────────────────────────────────────────────────────────────
  {
    id: 'collider-actors-movies',
    company: 'Collider',
    category: 'Editorial Feature',
    title: 'Actors and Their Favorite Movies',
    url: 'https://collider.com/actors-and-their-favorite-movies/',
    about: 'Evergreen editorial feature for Collider — a 30M+ monthly visitor film and TV platform. Designed to capture high-intent search traffic while providing genuine editorial value to the platform\'s film-literate audience.',
    contribution: 'Sole author. Developed the concept, executed keyword and SEO strategy, and wrote the piece to balance search optimization with editorial quality. Became the top-performing article from the freelance engagement — 125K+ views, 4:23 avg. time on page, top-3 Google result.',
    period: 'Aug – Oct 2022',
    tags: ['SEO', 'Evergreen Content', 'Editorial Feature', 'Sole Author'],
    metrics: ['125K+ views', '4:23 avg. time on page', 'Top-3 Google result'],
  },
  {
    id: 'collider-succession',
    company: 'Collider',
    category: 'Editorial Feature',
    title: 'Hardest Working Characters in Succession, Ranked',
    url: 'https://collider.com/hardest-workers-in-succession-ranked/',
    about: 'Editorial feature on Succession capitalizing on peak cultural interest in the show — optimized for both search traffic and social sharing among the show\'s highly engaged fan base.',
    contribution: 'Sole author. Developed concept, executed SEO strategy, and wrote the feature. Generated strong social share rate reflective of the show\'s highly engaged audience.',
    period: 'Aug – Oct 2022',
    tags: ['SEO', 'Editorial Feature', 'Pop Culture', 'Sole Author'],
    metrics: ['89K+ views', '22% social share rate'],
  },
  {
    id: 'collider-fall-movies',
    company: 'Collider',
    category: 'Editorial Feature',
    title: 'Movies To Get You Ready For Fall',
    url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/',
    about: 'Seasonal editorial feature designed to capture timely search and discovery traffic during the fall content cycle on Collider. Selected for inclusion in Google Discover.',
    contribution: 'Sole author. Developed concept, wrote the feature against a seasonal brief, and optimized for discovery. The piece was featured in Google Discover — indicating strong relevance and engagement signal.',
    period: 'Aug – Oct 2022',
    tags: ['SEO', 'Seasonal Content', 'Editorial Feature', 'Sole Author'],
    metrics: ['76K+ views', 'Featured in Google Discover'],
  },
];

const COMPANY_ORDER = ['Meta', 'Snap Inc.', 'Phony Content', 'StockX', 'Collider'];
const COMPANY_ACCENT: Record<string, { badge: string; dot: string }> = {
  'Meta':          { badge: 'bg-blue-50 text-blue-600',   dot: 'bg-blue-500'   },
  'Snap Inc.':     { badge: 'bg-yellow-50 text-yellow-600', dot: 'bg-yellow-400' },
  'Phony Content': { badge: 'bg-purple-50 text-purple-600', dot: 'bg-purple-500' },
  'StockX':        { badge: 'bg-emerald-50 text-emerald-600', dot: 'bg-emerald-500' },
  'Collider':      { badge: 'bg-orange-50 text-orange-500', dot: 'bg-orange-400' },
};

function PortfolioInner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    const id = searchParams.get('project');
    if (id) {
      const exact = CARDS.findIndex(c => c.id === id);
      if (exact !== -1) { setIndex(exact); return; }
      const byCompany = CARDS.findIndex(c =>
        id.includes(c.company.toLowerCase().split(' ')[0].toLowerCase())
      );
      if (byCompany !== -1) setIndex(byCompany);
    }
  }, [searchParams]);

  const go = useCallback((dir: 1 | -1) => {
    const next = index + dir;
    if (next < 0 || next >= CARDS.length) return;
    setDirection(dir);
    setIndex(next);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft')  go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    setTouchStart(null);
  };

  const card    = CARDS[index];
  const accent  = COMPANY_ACCENT[card.company] ?? { badge: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400' };
  const coCards = CARDS.filter(c => c.company === card.company);
  const coIdx   = coCards.findIndex(c => c.id === card.id) + 1;
  const ghosts  = [CARDS[index + 1], CARDS[index + 2]].filter(Boolean);
  const hasNext = index < CARDS.length - 1;

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 72 : -72, opacity: 0, rotate: d > 0 ? 2.5 : -2.5, scale: 0.96 }),
    center: { x: 0, opacity: 1, rotate: 0, scale: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -72 : 72, opacity: 0, rotate: d > 0 ? -2.5 : 2.5, scale: 0.96 }),
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-5 sm:px-8 pt-20 sm:pt-24 pb-4 max-w-xl mx-auto w-full">
        <motion.p
          className="text-xs font-semibold text-gray-900 tracking-tight"
          initial={{ opacity: 0 }} animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Portfolio
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }} animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Link href="/work" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">
            ← Experience
          </Link>
        </motion.div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pb-10">
        <div className="w-full max-w-xl">

          {/* Stack */}
          <motion.div
            className="relative mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Ghost cards */}
            {ghosts.slice(0, 2).reverse().map((g, i) => {
              const depth = ghosts.length === 2 ? (i === 0 ? 2 : 1) : 1;
              return (
                <div
                  key={g.id}
                  className="absolute bg-white rounded-3xl"
                  style={{
                    top: `${depth * 9}px`,
                    left: `${depth * 6}px`,
                    right: `${depth * 6}px`,
                    height: 56,
                    opacity: 1 - depth * 0.22,
                    transform: `scale(${1 - depth * 0.018})`,
                    zIndex: 10 - depth,
                    boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                  }}
                />
              );
            })}

            {/* Active card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={card.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={SPRING}
                className="relative z-20 bg-white rounded-3xl overflow-hidden cursor-pointer select-none"
                style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.07)' }}
                onClick={() => hasNext && go(1)}
              >
                {/* Card top */}
                <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-4 sm:pb-5">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${accent.badge}`}>
                      {card.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-400 tabular-nums">
                        {coIdx}/{coCards.length}
                      </span>
                      {/* Next hint */}
                      {hasNext && (
                        <span className="text-[10px] text-gray-300">→</span>
                      )}
                    </div>
                  </div>

                  {/* Title — stop propagation so click doesn't also advance card */}
                  {card.url ? (
                    <a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 mb-1"
                      onClick={e => e.stopPropagation()}
                    >
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug group-hover:text-gray-500 transition-colors">
                        {card.title}
                      </h2>
                      <span className="text-gray-300 group-hover:text-gray-600 transition-colors text-sm flex-shrink-0 mt-0.5">↗</span>
                    </a>
                  ) : (
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug mb-1">
                      {card.title}
                    </h2>
                  )}
                  <p className="text-[11px] text-gray-400">{card.period}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-50 mx-5 sm:mx-7" />

                {/* Card body — stop propagation on scroll area so drag doesn't fire card click */}
                <div
                  className="px-5 sm:px-7 py-4 sm:py-5 max-h-[42vh] sm:max-h-[46vh] overflow-y-auto space-y-4 sm:space-y-5"
                  onClick={e => e.stopPropagation()}
                >
                  <div>
                    <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">About</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.about}</p>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">My Role</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{card.contribution}</p>
                  </div>

                  {card.metrics && card.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {card.metrics.map((m, i) => (
                        <span key={i} className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pb-1">
                    {card.tags.map((t, i) => (
                      <span key={i} className="text-[10px] text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom tap-to-advance bar */}
                {hasNext && (
                  <div className="px-5 sm:px-7 py-3 border-t border-gray-50 flex items-center justify-end gap-1.5">
                    <span className="text-[10px] text-gray-300">Tap to advance</span>
                    <span className="text-[10px] text-gray-300">→</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation row */}
          <motion.div
            className="flex items-center justify-between px-1"
            initial={{ opacity: 0 }} animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          >
            <button
              onClick={() => go(-1)}
              disabled={index === 0}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors py-2 pr-4"
            >
              ←
              {index > 0 && (
                <span className="text-[10px] hidden sm:inline truncate max-w-[100px] text-gray-400">
                  {CARDS[index - 1].company}
                </span>
              )}
            </button>

            {/* Company-scoped dots */}
            <div className="flex items-center gap-1.5">
              {coCards.map((c) => {
                const isActive = c.id === card.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      const globalIdx = CARDS.findIndex(x => x.id === c.id);
                      setDirection(globalIdx > index ? 1 : -1);
                      setIndex(globalIdx);
                    }}
                    className="p-1"
                  >
                    <div className={`rounded-full transition-all duration-200 ${
                      isActive ? `w-4 h-1.5 ${accent.dot}` : 'w-1.5 h-1.5 bg-gray-300'
                    }`} />
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => go(1)}
              disabled={!hasNext}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-colors py-2 pl-4"
            >
              {hasNext && (
                <span className="text-[10px] hidden sm:inline truncate max-w-[100px] text-gray-400">
                  {CARDS[index + 1].company}
                </span>
              )}
              →
            </button>
          </motion.div>

          {/* Company strip — horizontally scrollable on mobile */}
          <motion.div
            className="mt-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            initial={{ opacity: 0 }} animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          >
            <div className="flex items-center gap-4 sm:gap-5 sm:justify-center overflow-x-auto pb-1 scrollbar-none">
              {COMPANY_ORDER.map((co) => {
                const isActive = co === card.company;
                const firstIdx = CARDS.findIndex(c => c.company === co);
                const count = CARDS.filter(c => c.company === co).length;
                return (
                  <button
                    key={co}
                    onClick={() => {
                      if (firstIdx !== -1) {
                        setDirection(firstIdx > index ? 1 : -1);
                        setIndex(firstIdx);
                      }
                    }}
                    className={`flex-shrink-0 flex flex-col items-center gap-0.5 transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-300 hover:text-gray-500'
                    }`}
                  >
                    <span className="text-[10px] font-medium whitespace-nowrap">{co}</span>
                    <span className="text-[9px] tabular-nums">{count}</span>
                  </button>
                );
              })}
            </div>
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
