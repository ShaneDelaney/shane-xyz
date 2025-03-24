'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="relative w-full h-[100dvh] flex items-center justify-center px-4 py-4 sm:p-0 overflow-hidden">
      <motion.div
        className="relative p-3 sm:p-4 md:p-5 w-full max-w-xl mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
          {/* Logo section */}
          <motion.div
            className="relative mb-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
              priority
              draggable={false}
              quality={95}
            />
          </motion.div>

          {/* Name heading */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-tight text-center text-zinc-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Shane Delaney
          </motion.h1>

          {/* Personal narrative */}
          <div className="w-full flex flex-col items-center gap-6 pt-2">
            <motion.p
              className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Content Curator at Snap Inc. with proven success growing audiences and creating engaging social media content.
            </motion.p>

            {/* Work link */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <Link href="/work">
                <motion.button
                  className="px-5 py-2 rounded-full bg-black text-white text-sm font-light flex items-center gap-2 hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span>See my work</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  className="px-5 py-2 rounded-full bg-white border border-black text-black text-sm font-light hover:bg-black/5 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  About me
                </motion.button>
              </Link>
            </div>
            
            {/* Stats */}
            <motion.div
              className="flex items-center gap-6 pt-3 text-xs sm:text-sm text-zinc-500 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>4M+ views</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                </svg>
                <span>90% engagement</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                <span>40K+ followers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
    </div>
  );
}
