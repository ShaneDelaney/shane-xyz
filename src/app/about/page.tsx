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
            As a Content Curator at Snap Inc., I identify and refine content that resonates with global audiences, helping to shape what millions of users experience daily on one of the world&apos;s largest social platforms.
          </p>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            During my previous role at Phony Content, my editorial approach delivered measurable results—I personally wrote and produced viral videos that achieved 4M+ views. By analyzing engagement data and refining my copywriting based on audience insights, I converted casual viewers into 40K+ loyal followers through compelling narratives and strategic content decisions.
          </p>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            What sets my work apart is the balance between editorial instinct and data-driven insights. I excel at identifying and developing content that resonates on a cultural level while driving audience engagement, consistently delivering results across diverse platforms and audience segments.
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