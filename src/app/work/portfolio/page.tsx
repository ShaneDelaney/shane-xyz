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
      <h2 className="text-2xl font-light text-black">Snapchat Spotlight</h2>
      <p className="text-base text-zinc-600 font-light max-w-3xl">
        Platform growth metrics from curating content for one of the fastest-growing short video platforms.
      </p>
    </div>
    
    <div className="space-y-6">
      <div className="p-5 rounded-xl border border-slate-200 bg-white/50 shadow-sm">
        <h3 className="text-lg font-medium text-black mb-3">My Spotlight Contribution</h3>
        <p className="text-sm text-zinc-700 leading-relaxed">
          As a Content Curator for Spotlight, I identify and surface trending content for Snapchat's global audience of 820M+ monthly users. My work helps maintain Spotlight's 99% brand-safe environment while keeping Snapchat at the forefront of Gen Z cultural movements. I contribute to a platform that has become an incubator for viral trends, elevating everyday creators to social media success through authentic content that resonates with audiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-sm transition-shadow h-full">
          <h3 className="text-lg font-medium text-black mb-2">Monthly Active Users</h3>
          <p className="text-sm text-zinc-600 mb-3">
            Since 2020 launch, Spotlight has grown to reach over 500M monthly active users - a 21% year-over-year increase.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-zinc-600 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-mono font-bold text-green-600">500M+</span>
            </p>
            <p className="text-xs text-zinc-600 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
              </svg>
              <span className="font-mono font-bold text-green-600">+21% YoY</span>
            </p>
          </div>
        </div>
        
        <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-sm transition-shadow h-full">
          <h3 className="text-lg font-medium text-black mb-2">Viewing Time Growth</h3>
          <p className="text-sm text-zinc-600 mb-3">
            User engagement has surged dramatically, with total viewing time increasing by 175% year-over-year on Spotlight.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-zinc-600 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
              </svg>
              <span className="font-mono font-bold text-green-600">+175% YoY</span>
            </p>
            <p className="text-xs text-zinc-600 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono font-bold text-green-600">25% Growth</span>
            </p>
          </div>
        </div>
        
        <div className="p-5 rounded-xl border border-slate-200 bg-white/50 hover:shadow-sm transition-shadow h-full">
          <h3 className="text-lg font-medium text-black mb-2">Creator Impact</h3>
          <p className="text-sm text-zinc-600 mb-3">
            Spotlight reaches 90% of US 13-24 year-olds daily and now monetizes over 1 million creators globally.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-zinc-600 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <span className="font-mono font-bold text-green-600">1M+ Creators</span>
            </p>
            <p className="text-xs text-zinc-600 flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span className="font-mono font-bold text-green-600">90% of Gen Z</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-4"></div>
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

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-32 pb-32 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-12"
      >
        <h1 className="text-3xl font-serif font-bold text-gray-800">My Portfolio</h1>
        <h2 className="text-lg text-zinc-600 font-light">Content that connected with audiences and delivered measurable results</h2>
        <Link href="/work">
          <motion.button
            className="mt-4 px-5 py-2 rounded-full bg-black text-white text-sm font-light flex items-center gap-2 hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to journey</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Add Spotlight Section */}
      <SpotlightSection />

      <div className="space-y-20">
        <WorkSection
          title="Phony Stories"
          description="Short-form stories that boosted viewership by 90% and generated millions of views."
          items={PhonyStories}
        />

        <WorkSection
          title="Collider Articles"
          description="SEO-driven articles that boosted organic traffic by 15%."
          items={ColliderArticles}
        />

        <WorkSection
          title="StockX Campaigns"
          description="Digital campaigns with authentic brand voice that connected with target audiences."
          items={StockXCampaigns}
        />
      </div>
    </div>
  );
} 