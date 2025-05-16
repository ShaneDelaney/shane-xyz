'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
      <h2 className="text-2xl font-light text-black">Snapchat – Brand Systems & Content Strategy</h2>
      <p className="text-base text-zinc-600 font-light max-w-3xl">
        Voice alignment, editorial systems, and high-impact curation for a global platform.
      </p>
    </div>
    
    <div className="space-y-8">
      {/* Overview Block */}
      <div className="p-6 rounded-xl border border-slate-200 bg-white/50 shadow-sm">
        <span className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Overview</span>
        <p className="text-base text-zinc-700 leading-relaxed">
          As a Trend Curator at Snap, I craft internal systems and editorial tools that drive platform quality and brand consistency. My work spans cross-functional collaboration with data, engineering, and product teams—blending creative instincts with structured documentation. From sourcing viral content to building brand-safe voice standards, I've contributed to both strategic campaigns and long-term content infrastructure.
        </p>
      </div>
      
      {/* Strategic Impact Highlights */}
      <div>
        <h3 className="text-lg font-medium text-black mb-4">Strategic Impact Highlights</h3>
        <ul className="space-y-3 pl-1">
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Curated viral content for Spotlight, helping Snapchat reach <span className="font-medium">90% of U.S. 13–24-year-olds</span></p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Identified high-potential videos from <span className="font-medium">820M+ global monthly users</span></p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Collaborated with <span className="font-medium">1M+ monetized creators</span> to develop high-performing content strategies</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Analyzed user engagement data to surface trends that drive growth and visibility</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Partnered with engineering and product teams to refine internal tooling and curation pipelines</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="min-w-5 text-yellow-500 pt-0.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-zinc-700">Helped pioneer Gen Z trend forecasting frameworks tied to content selection and campaigns</p>
          </li>
        </ul>
      </div>
      
      {/* Key Contributions */}
      <div>
        <h3 className="text-lg font-medium text-black mb-4">Key Contributions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-black mb-2">Voice Standards & Guidelines</h4>
            <p className="text-sm text-zinc-700">
              Created internal voice documentation and tone alignment systems for content moderators and curators to ensure brand consistency across Spotlight UGC.
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-black mb-2">Mission Trending App</h4>
            <p className="text-sm text-zinc-700">
              Worked with Snap's data science team to translate technical insight into editorial strategy tools—delivered via docs, presentation decks, and a web app (built in Cursor IDE).
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-black mb-2">Campaign Development</h4>
            <p className="text-sm text-zinc-700 mb-5">
              Sourced and curated content for Snap's Say It in a Snap campaign, featured in Times Square subway takeovers. Contributed to Kylie Jenner's 10-year Snap anniversary activation with filters, lenses, and in-person experience concepts.
            </p>
            <div className="flex items-start gap-4 mt-4">
              <a 
                href="https://newsroom.snap.com/say-it-in-a-snap-newfronts-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium transition-colors hover:bg-yellow-200"
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
                className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium transition-colors hover:bg-yellow-200"
              >
                Adweek Article
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-md transition-shadow h-full">
            <div className="w-10 h-10 bg-yellow-200 flex items-center justify-center rounded-md mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 13v-1m4 1v-3m4 3V8M12 21l8-8-4-4-8 4-4-4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-black mb-2">Executive Presentation Materials</h4>
            <p className="text-sm text-zinc-700">
              Built high-impact creator decks for internal leadership, featuring standout Snap Stars including Billie Eilish, Mike Tyson, and Lizzo—aligned to brand narrative goals and platform data.
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
  },
  {
    title: "Inhaler",
    stats: {
      views: "4.39M",
      followers: "20.3K",
    },
    link: "https://snapchat.com/t/wPotqUYw",
  },
  {
    title: "Snapscore",
    stats: {
      views: "3.59M",
      followers: "10K",
    },
    link: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168",
  },
  {
    title: "Mr. Shower",
    stats: {
      views: "3.01M",
      followers: "8.43K",
    },
    link: "https://snapchat.com/t/mqrF3WDp",
  },
  {
    title: "BF Sleepover",
    stats: {
      views: "2.2M",
      followers: "9.4K",
    },
    link: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/3298893967734784",
  },
  {
    title: "Cured",
    stats: {
      views: "1.29M",
      followers: "1.3K",
    },
    link: "https://snapchat.com/t/8ZEu7frB",
  },
];

const ColliderArticles: WorkItem[] = [
  {
    title: "Actors and Their Favorite Movies",
    link: "https://collider.com/actors-and-their-favorite-movies/",
    image: "/Collider Images/ActorsFavMovies.png",
  },
  {
    title: "Hardest Working Characters in Succession",
    link: "https://collider.com/hardest-workers-in-succession-ranked/",
    image: "/Collider Images/Succession.png",
  },
  {
    title: "Movies To Get You Ready For Fall",
    link: "https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/",
    image: "/Collider Images/FallMovies.png",
  },
];

const StockXCampaigns: WorkItem[] = [
  {
    title: "Behind the Streams with Sydeon",
    link: "https://www.youtube.com/watch?v=0uBuJh7sEjU",
  },
  {
    title: "Briana King Joins StockX",
    link: "https://www.youtube.com/watch?v=V8sx2CJ9x4s",
  },
  {
    title: "What Drives Brittney Elena | StockX",
    link: "https://www.youtube.com/watch?v=3-loqESOCMI",
  },
];

const WorkSection = ({ title, description, items }: { title: string; description: string; items: WorkItem[] }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <h2 className="text-2xl font-light text-black">{title}</h2>
      <p className="text-base text-zinc-600 font-light max-w-3xl">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Link 
          key={index} 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="group p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-md h-full"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {item.image && (
              <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <h3 className="text-lg font-medium text-black mb-2 group-hover:text-black/70 transition-colors">{item.title}</h3>
            {item.stats && (
              <div className="flex items-center gap-4">
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
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.section>
);

export default function Work() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-16"
      >
        <h1 className="text-3xl font-serif font-bold text-gray-800">My Journey</h1>
      </motion.div>

      <div className="space-y-24">
        <SpotlightSection />

        <WorkSection
          title="Phony Stories: Content Development"
          description="Short-form stories that I personally wrote and produced during my time at Phony Texts. My copywriting and production skills increased viewership by 90% and generated millions of views through compelling narratives that resonated with our target audience."
          items={PhonyStories}
        />

        <WorkSection
          title="Collider Articles: SEO Strategy"
          description="Strategic, keyword-optimized content that boosted organic traffic by 15% while maintaining editorial quality."
          items={ColliderArticles}
        />

        <WorkSection
          title="StockX Campaigns: Brand Development"
          description="Authentic content that strengthened brand voice and connected effectively with target audiences."
          items={StockXCampaigns}
        />
      </div>
    </div>
  );
} 