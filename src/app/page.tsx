'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  MetaLogo,
  SnapLogo,
  StockXLogo,
  ColliderLogo,
  PhonyLogo,
} from '@/components/CompanyDraw';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full px-6 pt-32 pb-28">
        <div className="max-w-5xl mx-auto">

          {/* Location */}
          <motion.p
            className="text-sm text-gray-400 mb-8 tracking-wide"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Shane Delaney — Los Angeles, CA
          </motion.p>

          {/* Meta — left, draws on load */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
            className="mb-10"
          >
            <MetaLogo className="w-44" />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-8 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            Content marketing at Meta, building editorial systems and strategy for Horizon&apos;s developer ecosystem. Previously at Snap Inc.
          </motion.p>

          {/* Snap — right, appears after bio */}
          <motion.div
            className="flex justify-end mb-8"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3, ease: EASE }}
          >
            <SnapLogo className="w-14" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
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

          {/* StockX + Collider — scattered, staggered positions */}
          <div className="flex items-end gap-10 mb-14">
            <StockXLogo className="w-10 mt-2" />
            <ColliderLogo className="w-16 ml-6" />
          </div>

          {/* Stats cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-12"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            {[
              { label: 'Currently', value: 'Meta', sub: 'Content Marketing Coordinator II' },
              { label: 'Previously', value: 'Snap Inc.', sub: 'Trend Producer' },
              { label: 'Education', value: 'LMU', sub: 'B.A. English & Screenwriting' },
              { label: 'Based', value: 'Los Angeles', sub: 'California' },
            ].map(item => (
              <div key={item.label} className="bg-slate-50 px-5 py-5">
                <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm font-semibold text-slate-900 mb-0.5 whitespace-nowrap">{item.value}</p>
                <p className="text-xs text-slate-400 whitespace-nowrap">{item.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* Phony — below stats, right offset */}
          <div className="flex justify-end pr-8">
            <PhonyLogo className="w-10" />
          </div>

        </div>
      </section>
    </div>
  );
}
