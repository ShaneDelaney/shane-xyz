'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PortraitDraw from '@/components/PortraitDraw';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full px-6 pt-32 pb-28">
        <div className="max-w-5xl mx-auto">

          <motion.p
            className="text-sm text-gray-400 mb-5 tracking-wide"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Shane Delaney — Los Angeles, CA
          </motion.p>

          <motion.div
            className="mb-12 w-52 sm:w-64"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
          >
            <PortraitDraw />
          </motion.div>

          <motion.p
            className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-10 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            Content marketing at Meta, building editorial systems and strategy for Horizon&apos;s developer ecosystem. Previously at Snap Inc.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 mb-16"
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

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden"
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

        </div>
      </section>
    </div>
  );
}
