'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="h-screen overflow-hidden bg-white flex items-center pt-14">
      <div className="w-full px-6 sm:px-10">
        <div className="max-w-xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
            className="mb-3"
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-400">Los Angeles, CA</p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-none mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            Shane Delaney
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
          >
            Content strategist working at the intersection of platforms, creators, and emerging technology.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
          >
            <div className="relative inline-block">
              {mounted && (
                <motion.div
                  className="absolute -inset-1.5 rounded-full pointer-events-none"
                  animate={{ opacity: [0, 0.18, 0], scale: [0.92, 1.06, 0.92] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  style={{ background: 'rgba(17,17,17,0.15)', filter: 'blur(6px)' }}
                />
              )}
              <Link
                href="/work"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
              >
                <span>View Work</span>
                <motion.span
                  animate={mounted ? { x: [0, 3, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  →
                </motion.span>
              </Link>
            </div>

            <Link
              href="/published"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
            >
              Published Content →
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
