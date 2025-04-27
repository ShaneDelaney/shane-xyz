'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="md:w-2/3 space-y-6">
        <motion.h1 
          className="text-4xl font-serif font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            As a Trend Curator at Snap Inc., I identify content that resonates with global audiences, helping to shape what millions of users see daily on one of the world&apos;s largest social platforms.
          </p>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            My work at Phony Content demonstrates measurable growth—driving campaigns with 4M+ views, 90% higher engagement rates than industry averages, and bringing in 40K+ new followers through strategic content development.
          </p>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            What makes my approach effective is the combination of creative intuition with data analysis. I focus on creating content people actually want to watch, consistently delivering results across different platforms and audience segments.
          </p>
          
          <div className="pt-4">
            <Link href="/work">
              <motion.button
                className="px-5 py-3 rounded-full bg-black text-white text-sm font-light flex items-center gap-2 hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View my journey</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 