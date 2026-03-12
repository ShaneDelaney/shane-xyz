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

const FEATURED = [
  {
    label: 'Developer Story',
    title: 'VAIL VR: From Couch Surfing to $15M in Crowdfunding',
    href: '/work/portfolio?project=meta-horizon-builder-stories',
  },
  {
    label: 'Developer Story',
    title: 'Saydeechan: Bringing Worlds to Japan',
    href: '/work/portfolio?project=meta-horizon-builder-stories',
  },
  {
    label: 'GTM Guide Series',
    title: 'Go-To-Market Developer Guides (6 parts)',
    href: '/work/portfolio?project=meta-horizon-gtm-guides',
  },
  {
    label: 'Year in Review',
    title: 'Insights from 2025\'s Breakout Creators and Developers',
    href: '/work/portfolio?project=meta-horizon-builder-stories',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="h-screen overflow-hidden bg-white flex items-center pt-14">
      <motion.section
        className="w-full px-5 sm:px-8"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="max-w-3xl mx-auto">

          {/* Location */}
          <motion.p
            className="text-xs text-gray-400 mb-5 tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Shane Delaney — Los Angeles, CA
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-xl sm:text-3xl text-gray-400 leading-snug mb-7 sm:mb-9 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          >
            Content operations and ecosystem storytelling. 13 published pieces across developer stories and go-to-market guides at Meta. Project Lead for Horizon&apos;s builder content program. Previously at Snap Inc.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <Link
              href="/work/portfolio"
              className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/work"
              className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Experience →
            </Link>
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Featured Work */}
          <motion.div
            className="mb-7 sm:mb-9"
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
          >
            <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2.5">Featured Work</p>
            <div className="border-t border-gray-100">
              {FEATURED.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={mounted ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.44 + i * 0.06, ease: EASE }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-5 py-3 border-b border-gray-100 group"
                  >
                    <span className="text-[9px] text-gray-300 font-medium w-5 flex-shrink-0 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-gray-900 leading-snug group-hover:text-gray-500 transition-colors">{item.title}</p>
                    </div>
                    <span className="text-gray-300 group-hover:text-gray-700 transition-colors text-xs flex-shrink-0">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-2.5 text-right">
              <Link
                href="/work/portfolio"
                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
              >
                View all work →
              </Link>
            </div>
          </motion.div>

          {/* Company names — plain text links + copyright */}
          <div className="flex items-center gap-2 flex-wrap">
            {COMPANIES.map((co, i) => (
              <motion.span
                key={co.id}
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.62 + i * 0.07, ease: EASE }}
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
