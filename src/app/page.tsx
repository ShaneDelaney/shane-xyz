'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { label: 'Currently',  value: 'Meta',        sub: 'Content Marketing Coordinator II' },
  { label: 'Previously', value: 'Snap Inc.',    sub: 'Trend Producer' },
  { label: 'Education',  value: 'LMU',          sub: 'B.A. English & Screenwriting' },
  { label: 'Based',      value: 'Los Angeles',  sub: 'California' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        className="w-full px-6 pt-32 pb-28"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Location */}
          <motion.p
            className="text-sm text-gray-400 mb-10 tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Shane Delaney — Los Angeles, CA
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-3xl sm:text-4xl text-gray-400 leading-snug mb-14 max-w-3xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          >
            Content marketing at Meta, building editorial systems and strategy for Horizon&apos;s developer ecosystem. Previously at Snap Inc.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 mb-20"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <Link
              href="/work"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              See My Work
            </Link>
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className="px-5 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Stats cards — clean border-divided layout */}
          <motion.div
            className="border border-gray-200 rounded-2xl overflow-hidden grid grid-cols-2 sm:grid-cols-4"
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
          >
            {STATS.map((item, i) => (
              <div
                key={item.label}
                className={`px-6 py-6 ${i < STATS.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-3">
                  {item.label}
                </p>
                <p className="text-base font-semibold text-gray-900 mb-1">{item.value}</p>
                <p className="text-xs text-gray-400 leading-snug">{item.sub}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
}
