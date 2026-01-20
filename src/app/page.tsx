'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent scrolling on this page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleLogoClick = () => {
    setRotation(rotation + 360);
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-white">
      {/* Subtle gradient background - Apple-inspired */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 -z-10" />
      
      {/* Hero Section - Perfectly centered with Apple-style spacing */}
      <section className="h-full w-full flex items-center justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Profile Section - Tighter spacing */}
            <motion.div 
              className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 cursor-pointer group"
              onClick={handleLogoClick}
              animate={{ 
                rotate: rotation,
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="Shane Delaney"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>
            
            {/* Main Heading - Apple-style typography */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-[1.1] text-center text-balance px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Storytelling and creative strategy in tech.
            </motion.h1>
            
            {/* Subtext - Secondary blurb */}
            <motion.div 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-3"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-balance">
                Content strategist at Meta, crafting stories and creative strategy for Horizon's developer ecosystem. Leading narrative strategy for developer spotlights and educational guides that turn technical concepts into compelling narratives that drive engagement and adoption.
              </p>
            </motion.div>
            
            {/* CTA Buttons - Apple-style with better spacing */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 w-full max-w-md sm:max-w-none px-3"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href="/work"
                className="group relative px-6 sm:px-8 py-2.5 sm:py-3 md:py-3.5 bg-gray-900 text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                <span className="relative z-10">See My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Link>
              <Link 
                href="/about"
                className="px-6 sm:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white border border-gray-300 text-gray-900 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                About Me
              </Link>
            </motion.div>
            
            {/* Additional Info Section - Cleaner, more refined */}
            <motion.div 
              className="border-t border-gray-200 pt-3 sm:pt-4 md:pt-6 w-full max-w-3xl mx-auto px-3"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center sm:text-left">
                <div>
                  <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Currently
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">
                    Meta
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Content Marketing Coordinator II
                  </p>
                </div>
                <div>
                  <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Previously
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                    Snap Inc., Phony Content, StockX, Collider
                  </p>
                </div>
                <div>
                  <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Based In
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
