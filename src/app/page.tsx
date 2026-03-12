'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: '13', label: 'Published pieces' },
  { value: '500M+', label: 'Snap reach' },
  { value: '25M+', label: 'Phony views' },
];

const COMPANIES = [
  { name: 'Meta',          id: 'meta'     },
  { name: 'Snap Inc.',     id: 'snap'     },
  { name: 'StockX',        id: 'stockx'   },
  { name: 'Collider',      id: 'collider' },
  { name: 'Phony Content', id: 'phony'    },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="h-screen overflow-hidden bg-white flex items-center pt-14">
      <motion.section
        className="w-full px-6 sm:px-10"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="max-w-xl mx-auto">

          {/* Name */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-none mb-1.5">
              Shane Delaney
            </h1>
            <p className="text-sm text-gray-400">Los Angeles, CA</p>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-base sm:text-lg text-gray-500 leading-relaxed mb-7"
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            Content operations and ecosystem storytelling. Project Lead for Meta Horizon&apos;s developer content program — 13 published pieces across developer stories and go-to-market guides. Previously at Snap Inc.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 mb-9"
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
          >
            <Link
              href="/work/portfolio"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/work"
              className="px-5 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Experience →
            </Link>
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex items-center gap-8 pb-8 mb-8 border-b border-gray-100"
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-none mb-1">{s.value}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Company strip */}
          <div className="flex items-center gap-2 flex-wrap">
            {COMPANIES.map((co, i) => (
              <motion.span
                key={co.id}
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.36 + i * 0.05, ease: EASE }}
              >
                <Link
                  href={`/work?company=${co.id}`}
                  className="text-xs text-gray-400 tracking-wide hover:text-gray-900 transition-colors duration-200"
                >
                  {co.name}
                </Link>
                {i < COMPANIES.length - 1 && (
                  <span className="text-gray-200 text-xs select-none">·</span>
                )}
              </motion.span>
            ))}
          </div>

        </div>
      </motion.section>
    </div>
  );
}
