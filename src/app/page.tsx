'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    title: 'Editorial Judgment at Scale',
    body: 'Final decision maker on high-volume content amplification, balancing brand, culture, creators, and business goals under time pressure.',
  },
  {
    title: 'Data Integrity & XFN Translation',
    body: 'Verifying metrics end-to-end and translating complex data into clear, actionable frameworks for cross-functional teams and leadership.',
  },
  {
    title: 'Narrative Systems',
    body: 'Building the editorial pipelines and story frameworks that translate platform activity into published content at scale.',
  },
  {
    title: 'Cross-Functional Execution',
    body: 'End-to-end ownership across product, marketing, legal, and data science, shipping complex initiatives without losing speed or quality.',
  },
];

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

          {/* Eyebrow */}
          <motion.p
            className="text-[11px] uppercase tracking-[0.12em] font-medium mb-5"
            style={{ color: 'var(--t-tertiary)' }}
            initial={{ opacity: 0 }}
            animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05, ease: E }}
          >
            Los Angeles, Platform Content Strategist
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-[54px] sm:text-[70px] font-semibold tracking-[-0.035em] leading-[1.02] mb-6"
            style={{ color: 'var(--t-primary)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: E }}
          >
            Shane Delaney
          </motion.h1>

          {/* Hero tagline */}
          <motion.p
            className="text-[18px] leading-[1.65] mb-10 max-w-[500px]"
            style={{ color: 'var(--t-secondary)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14, ease: E }}
          >
            I build the storytelling systems that help platforms surface the creators shaping their ecosystems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-5 mb-14"
            initial={{ opacity: 0, y: 6 }}
            animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.22, ease: E }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-medium transition-opacity hover:opacity-75"
              style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}
            >
              View Work
            </Link>
            <Link
              href="/published"
              className="text-[15px] font-medium transition-opacity hover:opacity-60"
              style={{ color: 'var(--t-secondary)' }}
            >
              Published Content
            </Link>
          </motion.div>

          {/* How I Work pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3, ease: E }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.12em] font-medium mb-5"
              style={{ color: 'var(--t-tertiary)' }}
            >
              How I Work
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-[680px]">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={m ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.34 + i * 0.06, ease: E }}
                >
                  <p
                    className="text-[13px] font-medium mb-1.5 leading-snug"
                    style={{ color: 'var(--t-primary)' }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="text-[12px] leading-[1.6]"
                    style={{ color: 'var(--t-tertiary)' }}
                  >
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platform credits */}
          <motion.div
            className="flex items-center gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.52, ease: E }}
          >
            {([['Meta','meta'],['Snap Inc.','snap'],['StockX','stockx'],['Phony Content','phony'],['Collider','collider']] as [string,string][]).map(([co, id], i, arr) => (
              <span key={co} className="flex items-center gap-6">
                <Link
                  href={`/work?company=${id}`}
                  className="text-[12px] transition-colors"
                  style={{ color: 'var(--t-border-strong)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-border-strong)')}
                >
                  {co}
                </Link>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--t-border)' }}>·</span>
                )}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
