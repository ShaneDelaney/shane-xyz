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

const PhonyStories: WorkItem[] = [
  {
    title: "Cheer Squad",
    stats: {
      views: "6.32 Million",
      followers: "43K",
    },
    link: "https://snapchat.com/t/J2MP13US",
  },
  {
    title: "Inhaler",
    stats: {
      views: "4.39 Million",
      followers: "20.3K",
    },
    link: "https://snapchat.com/t/wPotqUYw",
  },
  {
    title: "Snapscore",
    stats: {
      views: "3.59 Million",
      followers: "10K",
    },
    link: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168",
  },
  {
    title: "Mr. Shower",
    stats: {
      views: "3.01 Million",
      followers: "8.43K",
    },
    link: "https://snapchat.com/t/mqrF3WDp",
  },
  {
    title: "BF Sleepover",
    stats: {
      views: "2.2 Million",
      followers: "9.4K",
    },
    link: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/3298893967734784",
  },
  {
    title: "Cured",
    stats: {
      views: "1.29 Million",
      followers: "1.3K",
    },
    link: "https://snapchat.com/t/8ZEu7frB",
  },
];

const ColliderArticles: WorkItem[] = [
  {
    title: "8 Actors and Their Favorite Movies",
    link: "https://collider.com/actors-and-their-favorite-movies/",
    image: "/Collider Images/ActorsFavMovies.png",
  },
  {
    title: "'Succession': 10 Hardest Working Characters at Waystar Royco, Ranked",
    link: "https://collider.com/hardest-workers-in-succession-ranked/",
    image: "/Collider Images/Succession.png",
  },
  {
    title: "Sweater Weather: 6 Movies To Get You Ready For Fall",
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <h2 className="text-3xl font-light text-black">{title}</h2>
      <p className="text-lg text-zinc-600 font-light max-w-3xl">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Link 
          key={index} 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-lg"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {item.image && (
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <h3 className="text-xl font-light text-black mb-3 group-hover:text-black/70 transition-colors">{item.title}</h3>
            {item.stats && (
              <div className="space-y-2">
                {item.stats.views && (
                  <p className="text-sm text-zinc-600 flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.stats.views} Views
                  </p>
                )}
                {item.stats.followers && (
                  <p className="text-sm text-zinc-600 flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    {item.stats.followers} New Followers
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
    <div className="min-h-screen pt-32 pb-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-16"
      >
        <h1 className="text-4xl font-serif font-bold text-gray-800">My Best Work</h1>
        <h2 className="text-xl text-zinc-600 font-light">Stories that captured millions of views because they connected with real people</h2>
        <Link href="/work">
          <motion.div
            className="mt-8 inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors group"
            whileHover={{ x: -4 }}
          >
            <svg className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-lg">Back to Journey</span>
          </motion.div>
        </Link>
      </motion.div>

      <div className="space-y-24">
        <WorkSection
          title="Phony Stories"
          description="These addictive short-form stories boosted channel viewership by 90% and kept viewers watching longer than competitors. Each story connected with Gen Z and Millennial viewers in authentic ways."
          items={PhonyStories}
        />

        <WorkSection
          title="Collider Articles"
          description="SEO-driven articles that real people actually wanted to read. My content boosted organic traffic by 15% by focusing on what movie and TV fans genuinely care about."
          items={ColliderArticles}
        />

        <WorkSection
          title="StockX Campaigns"
          description="Digital campaigns that maintained authentic brand voice while connecting with target audiences. I helped ensure consistency across all marketing assets for maximum impact."
          items={StockXCampaigns}
        />
      </div>
    </div>
  );
} 