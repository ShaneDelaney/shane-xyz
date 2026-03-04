'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 pb-20">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {/* Avatar */}
            <motion.div
              className="relative w-12 h-12 mb-8 cursor-pointer"
              onClick={() => setRotation(r => r + 360)}
              animate={{ rotate: rotation }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.png"
                alt="Shane Delaney"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-5 leading-[1.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Editorial operations<br className="hidden sm:block" /> and content strategy.
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Content marketing and editorial operations at Meta, building content systems and strategy for Horizon&apos;s developer ecosystem. Previously at Snap Inc.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/work"
                className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                See My Work
              </Link>
              <a
                href="/ShaneDelaneyResume.pdf"
                download
                className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 hover:text-gray-900 transition-all"
              >
                Resume ↓
              </a>
            </motion.div>

            {/* Info strip */}
            <motion.div
              className="border-t border-gray-100 pt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5">Currently</p>
                <p className="text-sm font-semibold text-gray-900">Meta</p>
                <p className="text-xs text-gray-500">Content Marketing Coordinator II</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5">Previously</p>
                <p className="text-xs text-gray-500 leading-relaxed">Snap Inc. · Phony Content · StockX · Collider</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1.5">Based In</p>
                <p className="text-xs text-gray-500">Los Angeles, CA</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
