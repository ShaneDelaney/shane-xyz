'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Spotlight Ticker component
const SpotlightTicker = () => {
  const metrics = [
    { text: "SPOTLIGHT USERS", value: "500M+" },
    { text: "VIEWING TIME", value: "+175%" },
    { text: "CREATORS", value: "1M+" },
    { text: "GEN Z REACH", value: "90%" },
    { text: "YOY GROWTH", value: "+21%" },
    { text: "BRAND SAFETY", value: "99%" },
    { text: "MONTHLY USERS", value: "820M+" },
  ];

  return (
    <div className="w-full overflow-hidden bg-black text-white py-2 border-y border-white/20 mt-6">
      <div className="ticker-container relative flex">
        <div className="ticker-animation flex whitespace-nowrap">
          {[...metrics, ...metrics].map((metric, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="font-mono text-xs sm:text-sm text-white">{metric.text}</span>
              <span className="font-mono font-bold text-xs sm:text-sm text-green-400 ml-2">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ticker-animation {
          animation: ticker 30s linear infinite;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

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

          {/* Personal narrative */}
          <div className="w-full flex flex-col items-center gap-8">
            <motion.div
              className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                Content Curator at Snap Inc. with an editorial eye for developing Spotlight into one of the fastest-growing video platforms in the world.
              </p>
            </motion.div>

            {/* Work link */}
            <div className="flex gap-4">
              <Link href="/work">
                <motion.button
                  className="px-5 py-2 rounded-full bg-black text-white text-sm font-light flex items-center gap-2 hover:opacity-80 transition-opacity"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span>My work</span>
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
            
            {/* Spotlight metrics ticker */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <SpotlightTicker />
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
