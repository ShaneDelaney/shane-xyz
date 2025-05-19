'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center px-4 py-4 sm:p-0 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-50"></div>
      </div>
      
      <motion.div
        className="relative z-10 p-4 sm:p-8 md:p-12 w-full max-w-2xl mx-auto overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-10 md:gap-14">
          {/* Logo section */}
          <motion.div
            className="relative mb-2 sm:mb-4 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/assets/logo.png"
              alt="Shane Delaney logo"
              width={112}
              height={112}
              className="w-full h-full object-contain"
              priority
              draggable={false}
              quality={95}
            />
          </motion.div>

          {/* Name heading */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-center text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Shane Delaney
          </motion.h1>

          {/* Professional title */}
          <motion.div
            className="text-sm sm:text-base md:text-xl text-gray-600 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="border-b border-gray-200 pb-1">Trend Curator, Snap Inc.</span>
          </motion.div>

          {/* Personal narrative */}
          <motion.div
            className="w-full flex flex-col items-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed text-center max-w-xl">
              Content strategist specializing in editorial planning, brand consistency, and digital storytelling. Translating complex data into actionable strategy that drives engagement and platform growth.
            </p>

            {/* Navigation buttons */}
            <div className="flex gap-4 sm:gap-5 mt-2 sm:mt-4 w-full justify-center">
              <Link href="/work" className="flex-1 max-w-[160px]">
                <motion.button
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gray-900 text-white text-sm sm:text-base font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span>Selected Work</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>

              <Link href="/about" className="flex-1 max-w-[160px]">
                <motion.button
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white border border-gray-200 text-gray-900 text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors shadow-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  About Me
                </motion.button>
              </Link>
            </div>
            
            {/* Contact information */}
            <motion.div
              className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-xs sm:text-sm md:text-base text-gray-500">
                <a 
                  href="mailto:shanedelaney11@gmail.com" 
                  className="flex items-center gap-1.5 sm:gap-2 hover:text-gray-800 transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>shanedelaney11@gmail.com</span>
                </a>
                <a 
                  href="tel:+12487620695" 
                  className="flex items-center gap-1.5 sm:gap-2 hover:text-gray-800 transition-colors group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(248) 762-0695</span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">Los Angeles, CA</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Hero />
    </div>
  );
}
