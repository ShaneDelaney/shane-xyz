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
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <div className="space-y-4">
      <h2 className="text-3xl font-light text-black">{title}</h2>
      <p className="text-lg text-zinc-600 font-light">{description}</p>
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
            className="p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {item.image && (
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="text-xl font-light text-black mb-2">{item.title}</h3>
            {item.stats && (
              <div className="space-y-1">
                {item.stats.views && (
                  <p className="text-sm text-zinc-600">Views: {item.stats.views}</p>
                )}
                {item.stats.followers && (
                  <p className="text-sm text-zinc-600">Follower Growth: {item.stats.followers}</p>
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
        <h1 className="text-4xl font-serif font-bold text-gray-800">My Work</h1>
        <p className="text-xl text-zinc-600 font-light">A collection of my professional work across various platforms and mediums.</p>
      </motion.div>

      <div className="space-y-16">
        <WorkSection
          title="Phony Stories"
          description="A selection of stories written for a popular Snapchat series, blending humor with relatable scenarios to engage young audiences."
          items={PhonyStories}
        />

        <WorkSection
          title="Collider Articles"
          description="SEO-driven content developed for one of the top entertainment news platforms."
          items={ColliderArticles}
        />

        <WorkSection
          title="StockX Campaigns"
          description="High-profile video campaigns showcasing meticulous planning, creative collaboration, and hands-on execution."
          items={StockXCampaigns}
        />
      </div>
    </div>
  );
} 