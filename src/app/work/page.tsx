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
      className="space-y-12 pt-32 pb-32 px-4 max-w-6xl mx-auto min-h-screen"
    >
      <motion.div variants={item} layout className="space-y-4">
        <h1 className="text-4xl font-serif font-bold text-gray-800">My Journey</h1>
        <h2 className="text-xl text-zinc-600 font-light">Creating content that people actually want to watch</h2>
        <Link href="/work/portfolio">
          <motion.div
            className="mt-8 p-6 rounded-2xl bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black/10 transition-all group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-light text-black">View My Portfolio</h3>
                <p className="text-zinc-600">Check out my viral stories and campaigns</p>
              </div>
              <motion.div
                className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      <div className="space-y-12">
        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Content Curator at Snap Inc.</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-zinc-700">
                <p className="italic text-lg">Santa Monica, CA</p>
                <span className="hidden sm:block">|</span>
                <p className="italic text-lg">March 2025 - Present</p>
              </div>
              <p className="text-zinc-600 text-base italic">Global social media and camera app with over 750 million monthly active users worldwide.</p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Spearhead identification of viral-potential content and cultural moments that drive engagement across Snapchat&apos;s global audience</li>
                <li>• Develop cutting-edge public content strategies alongside Trend Producers to capture Gen Z and Millennial attention</li>
                <li>• Analyze thousands of user-submitted Snaps daily to strategically surface high-performing, timely content</li>
                <li>• Lead cross-functional collaboration with engineering, moderation, and product teams to optimize content performance</li>
                <li>• Pioneer tracking methodologies for emerging US short-form video trends to keep Snapchat ahead of pop culture movements</li>
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
              <p className="text-zinc-600 text-base italic">Digital media company behind Tiny Texts, a Snapchat channel with 3.4M+ followers known for short-form, comedic screen-life stories.</p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Developed short-form stories that boosted viewership by 90% compared to previous content</li>
                <li>• Exceeded platform metrics by achieving retention rates 10% higher than average</li>
                <li>• Launched viral campaign content that generated 4M+ views and attracted 40K+ new followers</li>
                <li>• Analyzed audience data to enhance content engagement and drive viewer growth</li>
                <li>• Orchestrated publishing schedules and coordinated deliverables across multiple stakeholders</li>
                <li>• Designed and implemented efficient revision tracking and approval workflows</li>
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
              <p className="text-zinc-700 font-light leading-relaxed text-lg">
                Crafted SEO-optimized content that drove a 15% increase in organic traffic. Developed data-driven articles on trending entertainment topics through strategic keyword research and analytics.
              </p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Boosted organic traffic by 15% through targeted SEO-driven content strategies</li>
                <li>• Leveraged keyword research and analytics to optimize content performance</li>
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

        <motion.section variants={item} layout className="relative pl-8 pb-12 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Production Assistant at StockX</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-zinc-700">
                <p className="italic text-lg">Los Angeles, CA</p>
                <span className="hidden sm:block">|</span>
                <p className="italic text-lg">June 2022</p>
              </div>
              <p className="text-zinc-600 text-base italic">Global E-Commerce marketplace for sneakers, streetwear, electronics, and collectibles.</p>
              <p className="text-zinc-700 font-light leading-relaxed text-lg">
                Facilitated digital marketing campaigns through strategic logistical coordination and content alignment. Maintained consistent brand presentation across all marketing assets.
              </p>
              <ul className="space-y-2 text-zinc-700 font-light text-lg">
                <li>• Streamlined logistics for high-impact digital marketing campaigns</li>
                <li>• Ensured brand consistency across diverse marketing materials</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} layout className="relative pl-8 border-l-2 border-zinc-200">
          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-zinc-200" />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Freelance Email Copywriter at Cappuccino Man</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-zinc-700">
              <p className="italic text-lg">Los Angeles, CA</p>
              <span className="hidden sm:block">|</span>
              <p className="italic text-lg">March 2024</p>
            </div>
            <p className="text-zinc-600 text-base italic">Boutique coffee catering service specializing in elevated coffee experiences for high-end events and private functions across Los Angeles.</p>
            <p className="text-zinc-700 font-light leading-relaxed text-lg">
              Crafted targeted email campaigns for event planners and luxury venues to strengthen brand presence in LA&apos;s premium events market.
            </p>
            <ul className="space-y-2 text-zinc-700 font-light text-lg">
              <li>• Engineered strategic email sequences for event planners, wedding coordinators, and corporate clients</li>
              <li>• Designed compelling promotional content showcasing signature coffee experiences and custom packages</li>
              <li>• Structured segmented email strategies to effectively reach different client categories</li>
            </ul>
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
            <ul className="space-y-2">
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
            <ul className="space-y-2">
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
            <ul className="space-y-2">
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