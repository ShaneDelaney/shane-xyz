'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 -z-10" />

      <section className="w-full flex items-center justify-center px-3 sm:px-4 lg:px-6 pt-28 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                Storytelling and creative strategy in tech.
              </h1>
            </motion.div>

            {/* Body Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed"
            >
              <p>
                Content strategist working on storytelling and creative strategy. I help turn complex ideas into clear narratives that drive measurable results.
              </p>

              <p>
                At Meta, I lead narrative strategy for Horizon&apos;s developer ecosystem, managing an end-to-end editorial pipeline that has produced 10+ major pieces, including a four-part Go-To-Market guide series and a six-part builder story spotlight series. These stories showcase diverse creator journeys, from entrepreneurial crowdfunding campaigns to first-time creators building top-ranked worlds. Each piece educates and inspires VR developers while driving adoption of Horizon Worlds features.
              </p>

              <p>
                Previously at Snap Inc., I curated content for Spotlight, managing a daily pipeline of 1,000+ creator submissions and collaborating with product and data science teams to launch trend-driven initiatives. At Phony Content, I produced 50+ viral Snapchat stories that generated 4M+ views and 40K+ new followers, achieving a 90% viewership boost. I also contributed to trend research at StockX that informed the company&apos;s 2025 marketing strategy.
              </p>

              <p>
                I build creative strategies that help ideas connect with people by combining storytelling with data analysis to create content that drives engagement and measurable impact.
              </p>
            </motion.div>

            {/* Info Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <h3 className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Currently
                </h3>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">Meta</p>
                <p className="text-xs text-gray-600">Content Marketing Coordinator II</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <h3 className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Previously
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Snap Inc., Phony Content, StockX, Collider
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <h3 className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Education
                </h3>
                <p className="text-xs font-medium text-gray-900 mb-0.5">LMU</p>
                <p className="text-[10px] text-gray-600">B.A. English & Screenwriting</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/work"
                className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
