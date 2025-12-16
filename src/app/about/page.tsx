'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 -z-10" />
      
      {/* Main Content */}
      <section className="h-full w-full flex items-center justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 overflow-y-auto scrollbar-hide">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Profile Image - Hero style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0"
            >
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                  src="/about_shane.png"
                  alt="Shane Delaney"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="flex-1 min-w-0 w-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 sm:mb-6"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4 leading-tight">
                  Storytelling and creative strategy in tech.
                </h1>
              </motion.div>
              
              {/* Body Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6"
              >
                <p>
                  Content strategist working on storytelling and creative strategy. I help turn complex ideas into clear narratives.
                </p>
                
                <p>
                  At Meta, I work on narrative strategy for Horizon's developer ecosystem. I recently coordinated Meta's four-part Go-To-Market guide series. Previously at Snap Inc., I curated content for Spotlight. I also worked on content production at Phony Content and contributed to trend research at StockX.
                </p>
                
                <p className="text-gray-700">
                  Building creative strategies that help ideas connect with people.
                </p>
              </motion.div>
              
              {/* Info Cards Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-4 sm:mb-6"
              >
                {/* Currently */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Currently
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">Meta</p>
                  <p className="text-[10px] sm:text-xs text-gray-600">Content Marketing Coordinator II</p>
                </motion.div>
                
                {/* Previously */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Previously
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                    Snap Inc., Phony Content, StockX, Collider
                  </p>
                </motion.div>
                
                {/* Education */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  <h3 className="text-[9px] sm:text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                    Education
                  </h3>
                  <p className="text-[10px] sm:text-xs font-medium text-gray-900 mb-0.5">LMU</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-600">B.A. English & Screenwriting</p>
                </motion.div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
              >
                <Link 
                  href="/work"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-full font-medium text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md text-center"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-900 rounded-full font-medium text-xs sm:text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md text-center"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
