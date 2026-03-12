'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="h-screen overflow-hidden bg-white flex items-center pt-14">
      <div className="w-full px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* Left — bio */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 12 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">About</p>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 leading-snug mb-5">
                Content operations<br />and ecosystem storytelling.
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Content Marketing Coordinator II at Meta — Project Lead and System Owner for Horizon&apos;s developer content program. 13 published pieces across developer success stories and a 6-part GTM guide series.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-7">
                Previously Trend Producer at Snap Inc., programming Spotlight for 500M+ monthly viewers. Before that: editorial operations at Phony Content, brand production at StockX, and freelance features at Collider. Built this site entirely with Claude Code.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="/work/portfolio"
                  className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  View Portfolio
                </Link>
                <a
                  href="/ShaneDelaneyResume.pdf"
                  download
                  className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
                >
                  Resume ↓
                </a>
              </div>
            </motion.div>

            {/* Right — info grid */}
            <motion.div
              className="lg:w-72 flex-shrink-0 w-full"
              initial={{ opacity: 0, y: 12 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-gray-100 rounded-2xl overflow-hidden">
                <div className="bg-white px-5 py-4">
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Most Recently</p>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">Meta</p>
                  <p className="text-xs text-gray-400">Content Marketing Coordinator II</p>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Previously</p>
                  <p className="text-xs text-gray-500 leading-relaxed">Snap Inc. · Phony Content<br />StockX · Collider</p>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Education</p>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">LMU</p>
                  <p className="text-xs text-gray-400">B.A. English & Screenwriting</p>
                </div>
                <div className="bg-white px-5 py-4">
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Skills</p>
                  <p className="text-xs text-gray-500 leading-relaxed">Editorial · Operations<br />Strategy · AI & Dev Tools</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <a
                  href="mailto:shanedelaney11@gmail.com"
                  className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                >
                  shanedelaney11@gmail.com
                </a>
                <span className="text-gray-200 text-xs">·</span>
                <Link href="/contact" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">
                  Contact →
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
