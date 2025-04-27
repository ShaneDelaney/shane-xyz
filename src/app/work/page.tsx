'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 5 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Work() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      layout
      className="space-y-12 pt-32 pb-32 px-4 max-w-5xl mx-auto min-h-screen"
    >
      <motion.div variants={item} layout className="space-y-4">
        <h1 className="text-4xl font-serif font-bold text-gray-800">My Journey</h1>
        <h2 className="text-xl text-zinc-600 font-light">The professional path that shaped my approach to content</h2>
        <Link href="/work/portfolio">
          <motion.button
            className="mt-6 px-5 py-2 rounded-full bg-black text-white text-sm font-light flex items-center gap-2 hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View my portfolio</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </Link>
      </motion.div>

      <div className="space-y-12">
        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Trend Curator at Snap Inc. (Spotlight)</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-zinc-700">
                <p className="italic text-lg">Santa Monica, CA</p>
                <span className="hidden sm:block">|</span>
                <p className="italic text-lg">March 2025 - Present</p>
              </div>
              <p className="text-zinc-600 text-base italic">Working on Snapchat&apos;s Spotlight program — a TikTok-style short video platform with 500M+ monthly active users and 175% YoY increase in viewing time.</p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Curate trending content for Spotlight, reaching 90% of US 13-24 year-olds</li>
                <li>• Identify viral-potential videos across Snapchat&apos;s global audience of 820M monthly users</li>
                <li>• Collaborate with 1M+ monetized creators to develop high-performing content strategies</li>
                <li>• Analyze user engagement metrics to strategically surface content that drives growth</li>
                <li>• Lead cross-functional efforts with engineering and product teams</li>
                <li>• Pioneer trend forecasting methodologies for Gen Z cultural movements</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Content Manager at Phony Texts</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-zinc-700">
                <p className="italic text-lg">Los Angeles, CA</p>
                <span className="hidden sm:block">|</span>
                <p className="italic text-lg">March 2024 - March 2025</p>
              </div>
              <p className="text-zinc-600 text-base italic">Digital media company behind Tiny Texts, a Snapchat channel with 3.4M+ followers.</p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Developed short-form stories that boosted viewership by 90%</li>
                <li>• Achieved retention rates 10% higher than platform average</li>
                <li>• Launched viral campaigns generating 4M+ views and 40K+ new followers</li>
                <li>• Analyzed audience data to enhance engagement and growth</li>
                <li>• Orchestrated publishing schedules across multiple stakeholders</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">SEO Writer at Collider</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-zinc-700">
                <p className="italic text-lg">Remote</p>
                <span className="hidden sm:block">|</span>
                <p className="italic text-lg">August 2022 - October 2022</p>
              </div>
              <p className="text-zinc-600 text-base italic">Entertainment news platform covering movies, TV, and pop culture.</p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Boosted organic traffic by 15% through SEO-driven content</li>
                <li>• Crafted data-driven articles on trending entertainment topics</li>
                <li>• Leveraged keyword research to optimize content performance</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://collider.com/hardest-workers-in-succession-ranked/" className="block p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                <Image src="/Collider Images/Succession.png" alt="Succession" width={500} height={500} className="w-full h-48 object-cover mb-4 rounded-xl" />
                <h4 className="text-xl font-light text-black group-hover:text-black/70 transition-colors">Hardest Workers in Succession Ranked</h4>
              </a>
              <a href="https://collider.com/actors-and-their-favorite-movies/" className="block p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                <Image src="/Collider Images/ActorsFavMovies.png" alt="Actors" width={500} height={500} className="w-full h-48 object-cover mb-4 rounded-xl" />
                <h4 className="text-xl font-light text-black group-hover:text-black/70 transition-colors">Actors and Their Favorite Movies</h4>
              </a>
              <a href="https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/" className="block p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all bg-white/50 backdrop-blur-sm hover:shadow-lg" target="_blank" rel="noopener noreferrer">
                <Image src="/Collider Images/FallMovies.png" alt="Fall Movies" width={500} height={500} className="w-full h-48 object-cover mb-4 rounded-xl" />
                <h4 className="text-xl font-light text-black group-hover:text-black/70 transition-colors">Sweater Weather Movies to Get You Ready for Fall</h4>
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Other Experience</h3>
            <p className="text-zinc-700 font-light leading-relaxed text-lg">
              Production Assistant at StockX (June 2022) and Freelance Email Copywriter at Cappuccino Man (March 2024).
            </p>
          </div>
        </motion.section>
      </div>

      <motion.section variants={item} layout className="space-y-8">
        <h3 className="text-2xl font-semibold text-black">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors bg-white/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-light mb-4 text-black">Content Strategy</h4>
            <ul className="space-y-1 text-sm">
              <li className="text-black">Content Development & Execution</li>
              <li className="text-black">Audience Growth & Engagement</li>
              <li className="text-black">Editorial Calendar Management</li>
              <li className="text-black">Narrative & Brand Storytelling</li>
              <li className="text-black">Email Marketing & Copywriting</li>
            </ul>
          </motion.div>
          <motion.div 
            className="p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors bg-white/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-light mb-4 text-black">Technical</h4>
            <ul className="space-y-1 text-sm">
              <li className="text-black">SEO Best Practices</li>
              <li className="text-black">Digital Marketing Strategy</li>
              <li className="text-black">Performance Analytics & Optimization</li>
              <li className="text-black">Content Management Systems (CMS)</li>
              <li className="text-black">Social Media Management</li>
            </ul>
          </motion.div>
          <motion.div 
            className="p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors bg-white/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-light mb-4 text-black">Creative</h4>
            <ul className="space-y-1 text-sm">
              <li className="text-black">Video Storytelling & Art Direction</li>
              <li className="text-black">Cross-Functional Collaboration</li>
              <li className="text-black">Brand Voice Development</li>
              <li className="text-black">Creative Direction</li>
              <li className="text-black">Research & Editing</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
} 