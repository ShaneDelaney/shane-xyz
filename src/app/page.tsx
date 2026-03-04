'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

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

          {/* Company pills */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
          >
            {COMPANIES.map((co, i) => (
              <motion.div
                key={co.id}
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.46 + i * 0.06, ease: EASE }}
              >
                <Link
                  href={`/work?company=${co.id}`}
                  className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
                >
                  {co.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
}
