'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);

  return (
    <div
      className="h-screen overflow-hidden flex items-center pt-[52px]"
      style={{ background: 'var(--t-bg)' }}
    >
      <div className="w-full px-6 sm:px-10">
        <div className="max-w-2xl mx-auto">

          <motion.p
            className="text-[11px] uppercase tracking-[0.1em] font-medium mb-5"
            style={{ color: 'var(--t-tertiary)' }}
            initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05, ease: E }}
          >
            Los Angeles — Content Strategist
          </motion.p>

          <motion.h1
            className="text-[52px] sm:text-[68px] font-semibold tracking-[-0.03em] leading-[1.04] mb-6"
            style={{ color: 'var(--t-primary)' }}
            initial={{ opacity: 0, y: 10 }} animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: E }}
          >
            Shane Delaney
          </motion.h1>

          <motion.p
            className="text-[17px] leading-[1.6] mb-10 max-w-[440px]"
            style={{ color: 'var(--t-secondary)' }}
            initial={{ opacity: 0, y: 8 }} animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14, ease: E }}
          >
            Content strategist working at the intersection of platforms, creators, and emerging technology.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 mb-12"
            initial={{ opacity: 0, y: 6 }} animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.22, ease: E }}
          >
            <div className="flex items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-full text-[15px] font-medium transition-opacity hover:opacity-80"
                style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}
              >
                View Work
              </Link>
              <Link
                href="/published"
                className="text-[15px] font-medium transition-opacity hover:opacity-60"
                style={{ color: 'var(--t-accent)' }}
              >
                Published Content
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link
                href="/about"
                className="text-[14px] transition-colors"
                style={{ color: 'var(--t-tertiary)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-tertiary)')}
              >
                About
              </Link>
              <a
                href="/ShaneDelaneyResume.pdf"
                download
                className="text-[14px] transition-colors"
                style={{ color: 'var(--t-tertiary)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-tertiary)')}
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.32, ease: E }}
          >
            {['Meta', 'Snap Inc.', 'StockX', 'Phony Content', 'Collider'].map((co, i) => (
              <span key={co} className="flex items-center gap-6">
                <Link
                  href="/work"
                  className="text-[13px] transition-colors"
                  style={{ color: 'var(--t-tertiary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-tertiary)')}
                >
                  {co}
                </Link>
                {i < 4 && <span style={{ color: 'var(--t-border)' }}>·</span>}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
