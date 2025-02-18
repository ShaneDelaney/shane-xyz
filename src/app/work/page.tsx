'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
      className="space-y-12 pt-20 pb-32 px-4 max-w-6xl mx-auto min-h-screen"
    >
      <motion.div variants={item} layout className="space-y-4">
        <h1 className="text-4xl font-serif font-bold text-gray-800">My Professional Journey</h1>
        <h2 className="text-xl text-zinc-600 font-light">Exploring Digital Innovation</h2>
      </motion.div>

      <div className="space-y-12">
        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Content Manager at Phony Texts</h3>
              <p className="italic text-zinc-700 text-lg">Present Role</p>
              <p className="text-zinc-700 font-light leading-relaxed text-lg">
                At Phony Content, I advanced from Staff Writer to Social Media Content Manager within 9 months, leading content strategy for Tiny Texts, a Snapchat channel with 3.4M+ followers. Leveraging data-driven insights, I increased daily viewership by 90% and maintained retention rates 10% above the platform average.
              </p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Directed content strategy and execution, driving audience growth and engagement.</li>
                <li>• Created 50+ short-form stories with millions of views, including a video with 6M+ views and 40K+ new followers.</li>
                <li>• Conducted audience research and trend analysis to optimize content performance.</li>
                <li>• Managed editorial calendars for consistent and timely content.</li>
                <li>• Provided editorial guidance to enhance content quality and engagement.</li>
                <li>• Partnered with cross-functional teams to align visuals and messaging.</li>
                <li>• Developed original, trend-focused concepts, achieving viral success.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">SEO Writer at Collider</h3>
              <p className="italic text-zinc-700 text-lg">Previous Role</p>
              <p className="text-zinc-700 font-light leading-relaxed text-lg">
                At Collider, I wrote SEO-driven content that increased organic traffic by 15%. I optimized content through keyword research and analytics, creating high-performing articles on trending topics. I implemented SEO strategies to boost traffic and developed content calendars aligned with search trends, specializing in analytical pieces and listicles.
              </p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Boosted organic traffic by 15% with SEO-driven content.</li>
                <li>• Optimized content through keyword research and analytics.</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://collider.com/hardest-workers-in-succession-ranked/" className="block p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                <Image src="/Collider Images/Succession.png" alt="Succession" width={500} height={500} className="w-full h-48 object-cover mb-4 rounded" />
                <h4 className="text-xl font-light mb-4 text-black">Hardest Workers in Succession Ranked</h4>
              </a>
              <a href="https://collider.com/actors-and-their-favorite-movies/" className="block p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                <Image src="/Collider Images/ActorsFavMovies.png" alt="Actors" width={500} height={500} className="w-full h-48 object-cover mb-4 rounded" />
                <h4 className="text-xl font-light mb-4 text-black">Actors and Their Favorite Movies</h4>
              </a>
              <a href="https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/" className="block p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                <Image src="/Collider Images/FallMovies.png" alt="Fall Movies" width={500} height={500} className="w-full h-48 object-cover mb-4 rounded" />
                <h4 className="text-xl font-light mb-4 text-black">Sweater Weather Movies to Get You Ready for Fall</h4>
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Production Assistant at StockX</h3>
              <p className="italic text-zinc-700 text-lg">Previous Role</p>
              <p className="text-zinc-700 font-light leading-relaxed text-lg">
                At StockX, I supported digital campaigns with seamless logistics and content alignment. I maintained brand consistency across marketing assets, managed production logistics, and coordinated with teams. I ensured brand consistency, assisted in location scouting, and contributed to successful campaign launches.
              </p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Supported digital campaigns with seamless logistics and content alignment.</li>
                <li>• Maintained brand consistency across marketing assets.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Freelance Email Copywriter at Cappuccino Man</h3>
            <p className="italic text-zinc-700 text-lg">Previous Role</p>
            <p className="text-zinc-700 font-light leading-relaxed text-lg">
              At Cappuccino Man, I developed email campaigns for better engagement and brand alignment.
            </p>
            <ul className="space-y-2 text-zinc-700 font-light text-lg">
              <li>• Developed email campaigns for improved engagement and brand alignment.</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <motion.section variants={item} layout className="space-y-8">
        <h3 className="text-2xl font-semibold text-black">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-light mb-4 text-black">Content Strategy</h4>
            <ul className="space-y-2">
              <li className="text-black">Digital Media Management</li>
              <li className="text-black">Audience Development</li>
              <li className="text-black">Analytics Growth</li>
              <li className="text-black">Performance Analytics</li>
              <li className="text-black">Narrative Development</li>
            </ul>
          </motion.div>
          <motion.div 
            className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-light mb-4 text-black">Technical</h4>
            <ul className="space-y-2">
              <li className="text-black">SEO Best Practices</li>
              <li className="text-black">Content Management Systems</li>
              <li className="text-black">Analytics Tools</li>
              <li className="text-black">Production Management</li>
              <li className="text-black">Social Platforms</li>
            </ul>
          </motion.div>
          <motion.div 
            className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-light mb-4 text-black">Creative</h4>
            <ul className="space-y-2">
              <li className="text-black">Copywriting</li>
              <li className="text-black">Art Direction</li>
              <li className="text-black">Brand Voice</li>
              <li className="text-black">Creative Direction</li>
              <li className="text-black">Video Storytelling</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
} 