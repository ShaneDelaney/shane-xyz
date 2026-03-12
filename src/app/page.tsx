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
    url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/',
  },
  {
    label: 'Developer Story',
    title: 'Saydeechan: Bringing Worlds to Japan',
    url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/',
  },
  {
    label: 'GTM Guide',
    title: 'Develop a Marketing Plan for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/',
  },
  {
    label: 'Year in Review',
    title: 'Insights from 2025\'s Breakout Creators and Developers',
    url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        className="w-full px-5 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-28"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Location */}
          <motion.p
            className="text-sm text-gray-400 mb-6 sm:mb-10 tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Shane Delaney — Los Angeles, CA
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-2xl sm:text-4xl text-gray-400 leading-snug mb-10 sm:mb-14 max-w-3xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          >
            Content operations and ecosystem storytelling. 13 published pieces across developer stories and go-to-market guides at Meta. Project Lead for Horizon&apos;s builder content program. Previously at Snap Inc.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-3 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          >
            <Link
              href="/work/portfolio"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Portfolio
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

          {/* Featured Work */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
          >
            <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-4">Featured Work</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {FEATURED.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-5 py-4 group flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={mounted ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.44 + i * 0.06, ease: EASE }}
                >
                  <div className="min-w-0">
                    <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-1.5">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900 leading-snug group-hover:text-gray-500 transition-colors">{item.title}</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-xs flex-shrink-0 mt-0.5">↗</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-3 text-right">
              <Link
                href="/work/portfolio"
                className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
              >
                View all work →
              </Link>
            </div>
          </motion.div>

          {/* Company names — plain text links */}
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
