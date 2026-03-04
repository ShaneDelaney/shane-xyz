'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const COMPANIES = ['Meta', 'Snap Inc.', 'StockX', 'Collider', 'Phony Content'];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Whole-section entrance — fades in as one unit */}
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

          {/* Bio — larger, more commanding */}
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
            className="flex items-center gap-3 mb-16"
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

          {/* Hairline rule */}
          <motion.hr
            className="border-none h-px bg-gray-200 mb-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={mounted ? { scaleX: 1, opacity: 1 } : {}}
            style={{ originX: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
          />

          {/* Company names — staggered fade */}
          <div className="flex items-center gap-2 mb-16 flex-wrap">
            {COMPANIES.map((name, i) => (
              <motion.span
                key={name}
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.46 + i * 0.07, ease: EASE }}
              >
                <span className="text-xs text-gray-400 tracking-wide">{name}</span>
                {i < COMPANIES.length - 1 && (
                  <span className="text-gray-200 text-xs select-none">·</span>
                )}
              </motion.span>
            ))}
          </div>

          {/* Stats cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            {[
              { label: 'Currently',  value: 'Meta',        sub: 'Content Marketing Coordinator II' },
              { label: 'Previously', value: 'Snap Inc.',   sub: 'Trend Producer' },
              { label: 'Education',  value: 'LMU',         sub: 'B.A. English & Screenwriting' },
              { label: 'Based',      value: 'Los Angeles', sub: 'California' },
            ].map(item => (
              <div key={item.label} className="bg-slate-50 px-5 py-5">
                <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm font-semibold text-slate-900 mb-0.5 whitespace-nowrap">{item.value}</p>
                <p className="text-xs text-slate-400 whitespace-nowrap">{item.sub}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
}
