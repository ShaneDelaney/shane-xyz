'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface WorkItem {
  title: string;
  stats?: {
    views?: string;
    followers?: string;
  };
  link: string;
  image?: string;
}

// Spotlight section component
const SpotlightSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 4v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 9h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-light text-black">Snap Inc. – Trend Curator</h2>
      </div>
      <p className="text-base text-zinc-600 font-light ml-11">
        Santa Monica, CA · March 2025–Present
      </p>
    </div>
    
    <div className="space-y-6">
      {/* Role Overview Block */}
      <div className="p-5 rounded-xl border border-slate-200 bg-white/50 shadow-sm">
        <p className="text-base text-zinc-700 leading-relaxed">
          Curating high-impact user-generated content for Snapchat Spotlight (<span className="font-mono font-medium text-black px-1.5 py-0.5 bg-yellow-200 rounded-sm">~1,000+ Snaps/day</span>). Building cross-functional editorial systems that ensure brand consistency and drive platform engagement.
        </p>
      </div>
      
      {/* Key Accomplishments */}
      <div>
        <h3 className="text-lg font-medium text-black mb-3">Key Accomplishments</h3>
        <ul className="space-y-2.5 pl-1">
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Led editorial for <span className="font-medium">Say It in a Snap</span> campaign (Times Square subway takeovers)</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-sm text-zinc-700 group relative">
              Led content strategy and curation for Snap's <span className="font-medium">New User Experience (NUX)</span> pilot focused on 13–17-year-olds—building Spotlight's first-touch feed by sourcing <span className="font-mono font-medium text-black px-1 py-0.5 bg-yellow-200 rounded-sm">300+</span> Snaps across Entertainment, Gaming, Fitness, and Tech. Balanced platform data with editorial judgment to optimize engagement and creator diversity.
              <div className="absolute invisible group-hover:visible bg-black/75 text-white text-xs p-2 rounded w-64 -mt-1 left-0 top-full z-10">
                Part of Snap's larger push to refine teen onboarding experience; insights from this pilot helped inform broader Spotlight curation logic.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Created <span className="font-medium">Snap Stars</span> promotional decks for Billie Eilish and Mike Tyson</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Launched <span className="font-medium">"boosted content"</span> initiative with data science team</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Built <span className="font-medium">brand voice documentation</span> for cross-team alignment</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Adapted programming to <span className="font-medium">seasonal moments</span> and audience behavior trends</p>
          </li>
        </ul>
      </div>
      
      {/* Results Snapshot */}
      <div>
        <h3 className="text-lg font-medium text-black mb-3">Results at a Glance</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-mono font-bold">+175% YoY</span>
            <span className="text-xs text-zinc-500">Engagement</span>
          </div>
          <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-mono font-bold">1M+</span>
            <span className="text-xs text-zinc-500">Creators</span>
          </div>
          <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-mono font-bold">500K+</span>
            <span className="text-xs text-zinc-500">Daily Views</span>
          </div>
          <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-mono font-bold">99%</span>
            <span className="text-xs text-zinc-500">Brand-Safe</span>
          </div>
        </div>
      </div>
      
      {/* Strategic Impact Areas */}
      <div>
        <h3 className="text-lg font-medium text-black mb-3">Strategic Impact Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-9 h-9 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-base font-medium text-black mb-2">Data-Driven Content Strategy</h4>
            <p className="text-sm text-zinc-700 mb-3">
              Collaborated with data science team on "boosted content" initiatives, translating analytics into guidance for 1M+ monetized creators.
            </p>
            <Link
              href="/boosted-content"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium transition-colors hover:bg-yellow-200"
            >
              View case study
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className="p-4 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-9 h-9 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10h8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8v8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-base font-medium text-black mb-2">New User Experience (NUX)</h4>
            <p className="text-sm text-zinc-700 group relative">
              Led content strategy for teen-focused pilot, curating 300+ Snaps across Entertainment, Gaming, Fitness and Tech. Balanced platform data with editorial judgment to optimize engagement.
              <span className="absolute invisible group-hover:visible bg-black/75 text-white text-xs p-2 rounded w-64 -mt-1 left-0 top-full z-10">
                Part of Snap's larger push to refine teen onboarding experience; insights helped inform broader Spotlight curation logic.
              </span>
            </p>
          </div>
          
          <div className="p-4 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-9 h-9 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-base font-medium text-black mb-2">Tentpole Campaign Leadership</h4>
            <p className="text-sm text-zinc-700 mb-3">
              Led editorial for "Say It in a Snap" featured in Times Square subway takeovers, generating 500K+ daily impressions.
            </p>
            <div className="flex items-start gap-3">
              <a 
                href="https://newsroom.snap.com/say-it-in-a-snap-newfronts-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium transition-colors hover:bg-yellow-200"
              >
                Snap Newsroom
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://www.adweek.com/convergent-tv/snapchat-new-ad-campaign-and-music-series/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium transition-colors hover:bg-yellow-200"
              >
                Adweek
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="p-4 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-9 h-9 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className="text-base font-medium text-black mb-2">Executive Presentations</h4>
            <p className="text-sm text-zinc-700">
              Developed strategic materials for C-suite executives, highlighting platform potential and creator success stories for high-profile Snap Stars.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const PhonyStories: WorkItem[] = [
  {
    title: "Cheer Squad",
    stats: {
      views: "6.32M",
      followers: "43K",
    },
    link: "https://snapchat.com/t/J2MP13US",
    image: "/assets/Phony-logo.png",
  },
  {
    title: "Inhaler",
    stats: {
      views: "4.39M",
      followers: "20.3K",
    },
    link: "https://snapchat.com/t/wPotqUYw",
    image: "/assets/Phony-logo.png",
  },
  {
    title: "Snapscore",
    stats: {
      views: "3.59M",
      followers: "10K",
    },
    link: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168",
    image: "/assets/Phony-logo.png",
  },
  {
    title: "Mr. Shower",
    stats: {
      views: "3.01M",
      followers: "8.43K",
    },
    link: "https://snapchat.com/t/mqrF3WDp",
    image: "/assets/Phony-logo.png",
  },
  {
    title: "BF Sleepover",
    stats: {
      views: "2.2M",
      followers: "9.4K",
    },
    link: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/3298893967734784",
    image: "/assets/Phony-logo.png",
  },
  {
    title: "Cured",
    stats: {
      views: "1.29M",
      followers: "1.3K",
    },
    link: "https://snapchat.com/t/8ZEu7frB",
    image: "/assets/Phony-logo.png",
  },
];

const ColliderArticles: WorkItem[] = [
  {
    title: "Actors and Their Favorite Movies",
    link: "https://collider.com/actors-and-their-favorite-movies/",
    image: "/assets/collider-logo.png",
  },
  {
    title: "Hardest Working Characters in Succession",
    link: "https://collider.com/hardest-workers-in-succession-ranked/",
    image: "/assets/collider-logo.png",
  },
  {
    title: "Movies To Get You Ready For Fall",
    link: "https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/",
    image: "/assets/collider-logo.png",
  },
];

const StockXCampaigns: WorkItem[] = [
  {
    title: "Behind the Streams with Sydeon",
    link: "https://www.youtube.com/watch?v=0uBuJh7sEjU",
    image: "/assets/stockx-logo.png",
  },
  {
    title: "Briana King Joins StockX",
    link: "https://www.youtube.com/watch?v=V8sx2CJ9x4s",
    image: "/assets/stockx-logo.png",
  },
  {
    title: "What Drives Brittney Elena | StockX",
    link: "https://www.youtube.com/watch?v=3-loqESOCMI",
    image: "/assets/stockx-logo.png",
  },
];

const WorkSection = ({ title, description, items }: { title: string; description: string; items: WorkItem[] }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="space-y-5"
  >
    <div className="space-y-2">
      <h2 className="text-2xl font-light text-black">{title}</h2>
      <p className="text-base text-zinc-600 font-light max-w-3xl">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Link 
          key={index} 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="group p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-md h-full flex flex-col"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {item.image ? (
              <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={100}
                  style={{
                    objectFit: 'contain',
                    padding: '16px',
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '80%',
                    maxHeight: '80%'
                  }}
                  className="transform group-hover:scale-105 transition-transform duration-500"
                  unoptimized={true}
                  priority={true}
                />
              </div>
            ) : (
              <div className="w-full h-40 mb-3 rounded-lg overflow-hidden bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center">
                <svg className="w-9 h-9 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
            <h3 className="text-base font-medium text-black mb-2 group-hover:text-black/70 transition-colors">{item.title}</h3>
            {item.stats && (
              <div className="flex items-center gap-4 mt-auto">
                {item.stats.views && (
                  <p className="text-xs text-zinc-600 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.stats.views}
                  </p>
                )}
                {item.stats.followers && (
                  <p className="text-xs text-zinc-600 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    {item.stats.followers}
                  </p>
                )}
              </div>
            )}
            {!item.stats && !item.image && (
              <div className="mt-auto pt-2">
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Watch video
                </span>
              </div>
            )}
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.section>
);

export default function Work() {
  return (
    <div className="min-h-screen pt-24 pb-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3 mb-14"
      >
        <h1 className="text-3xl font-medium text-gray-800">Professional Experience</h1>
        <p className="text-base text-zinc-600 font-light">Content strategy and creative work across entertainment platforms</p>
      </motion.div>

      <div className="space-y-20">
        <SpotlightSection />

        <WorkSection
          title="Phony Content – Content Manager (2024 - 2025)"
          description="Created and directed 50+ digital storylines for Snapchat's Tiny Texts, driving audience growth through engaging character-based narratives."
          items={PhonyStories}
        />

        <WorkSection
          title="Collider – SEO Content Writer (2023)"
          description="Developed strategic, keyword-optimized content that boosted organic traffic while maintaining editorial quality."
          items={ColliderArticles}
        />

        <WorkSection
          title="StockX – Production Assistant (2022)"
          description="Supported creative direction on major campaign shoots, ensuring brand storytelling aligned with platform voice."
          items={StockXCampaigns}
        />
      </div>
    </div>
  );
} 