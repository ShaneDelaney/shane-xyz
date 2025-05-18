'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="relative w-full h-[100dvh] flex items-center justify-center px-4 py-4 sm:p-0 overflow-hidden">
      <motion.div
        className="relative p-3 sm:p-4 md:p-5 w-full max-w-lg mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8">
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

          {/* Professional title */}
          <motion.div
            className="text-sm sm:text-base font-medium text-zinc-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <span className="border-b border-zinc-300 pb-1">Trend Curator, Snap Inc.</span>
          </motion.div>

          {/* Personal narrative */}
          <div className="w-full flex flex-col items-center gap-6">
            <motion.div
              className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                Content strategist specializing in editorial planning, brand consistency, and digital storytelling. Curating high-impact content and translating data into actionable strategy across entertainment platforms.
              </p>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <Link href="/work">
                <motion.button
                  className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span>Experience</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  className="px-5 py-2 rounded-full bg-white border border-black text-black text-sm font-medium hover:bg-black/5 transition-colors"
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
            
            {/* Contact information */}
            <motion.div
              className="mt-4 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-6 text-xs sm:text-sm text-zinc-500">
                <a 
                  href="mailto:shanedelaney11@gmail.com" 
                  className="flex items-center gap-1 hover:text-zinc-800 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>shanedelaney11@gmail.com</span>
                </a>
                <a 
                  href="tel:+12487620695" 
                  className="flex items-center gap-1 hover:text-zinc-800 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(248) 762-0695</span>
                </a>
              </div>
              <p className="text-xs text-zinc-500">Los Angeles, CA</p>
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
