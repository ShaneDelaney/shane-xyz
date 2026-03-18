'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  { label: 'Meta Horizon Blog', title: 'VAIL VR: From Couch Surfing to $15M in Crowdfunding', tag: 'Creator Spotlight', href: '/published#vail-vr-part-one' },
  { label: 'Meta Horizon', title: "Year in Review: Insights from 2025's Breakout Creators", tag: 'Platform Ecosystems', href: '/published#year-in-review' },
  { label: 'Meta Horizon', title: 'Develop a Marketing Plan for Your VR App', tag: 'GTM Series, Part 1', href: '/published#gtm-marketing-plan' },
];

const COMPANIES: [string, string][] = [
  ['Meta', 'meta'], ['Snap Inc.', 'snap'], ['StockX', 'stockx'], ['Phony Content', 'phony'], ['Collider', 'collider'],
];

const STATS = [
  { value: 'Meta', label: 'Currently' },
  { value: 'Snap', label: 'Previously' },
  { value: '25M+', label: 'Views' },
];

export default function Home() {
  const [m, setM] = useState(false);
  useEffect(() => {
    setM(true);
  }, []);

  return (
    <div style={{ background: 'var(--t-bg)' }}>

      {/* ── Mobile: scroll narrative ── */}
      <div className="sm:hidden">

        {/* ── SCREEN 1: Hook ── */}
        <section className="relative z-10 min-h-[100dvh] flex flex-col px-6 pt-[52px]">

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center py-10">
            <motion.p
              className="text-[10px] uppercase tracking-[0.22em] font-medium mb-5"
              style={{ color: 'var(--t-tertiary)' }}
              initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: E }}>
              Los Angeles · Content Strategist
            </motion.p>

            <motion.h1
              className="text-[60px] font-semibold tracking-[-0.035em] leading-[0.86] mb-7"
              style={{ color: 'var(--t-primary)' }}
              initial={{ opacity: 0, y: 20 }} animate={m ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.06, ease: E }}>
              Shane<br />Delaney
            </motion.h1>

            <motion.p
              className="text-[16px] leading-[1.62] mb-10 max-w-[300px]"
              style={{ color: 'var(--t-secondary)' }}
              initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: E }}>
              I run editorial systems for creator-driven platforms — story sourcing to publication, with the data fluency to back every call.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--t-border)' }}
              initial={{ opacity: 0, y: 8 }} animate={m ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22, ease: E }}>
              {STATS.map((s, i) => (
                <div key={s.label} className="flex-1 flex flex-col items-center py-[18px]"
                  style={{ background: 'var(--t-surface)', borderRight: i < 2 ? '1px solid var(--t-border)' : undefined }}>
                  <span className="text-[24px] font-semibold tracking-[-0.03em] leading-none" style={{ color: 'var(--t-primary)' }}>{s.value}</span>
                  <span className="text-[9px] mt-1.5 uppercase tracking-[0.1em]" style={{ color: 'var(--t-tertiary)' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll prompt */}
          <motion.div
            className="flex flex-col items-center gap-2 pb-8"
            initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.55, ease: E }}>
            <span className="text-[9px] uppercase tracking-[0.22em]" style={{ color: 'var(--t-tertiary)' }}>scroll</span>
            <motion.div
              className="w-px h-9"
              style={{ background: 'linear-gradient(to bottom, var(--t-border), transparent)' }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.div>
        </section>

        {/* ── STORY BEATS ── */}
        {[
          {
            index: '01',
            eyebrow: 'What I do',
            heading: 'Editorial systems that scale',
            body: 'From story sourcing and creator interviews through multi-stage XFN review to final publication — with data fluency to verify every claim and inform every editorial call.',
          },
          {
            index: '02',
            eyebrow: 'Meta Horizon · 2025–2026',
            heading: 'Editorial DRI',
            body: '13 pieces published in 5 months. 8-stage XFN review across 5 teams. Built the Growth Systems Toolkit and a Creator Studio prototype — taken to C-suite.',
          },
          {
            index: '03',
            eyebrow: 'Snap Inc. · 2025',
            heading: 'Trend Producer',
            body: 'Programming Lead for Spotlight — 500M+ monthly viewers. Managed 1,000+ pieces daily. Wrote and produced Tiny Texts: 25M+ views across the catalog.',
          },
          {
            index: '04',
            eyebrow: 'Earlier work',
            heading: 'Collider · StockX · Phony',
            body: 'SEO editorial at Collider. Brand campaign production at StockX. Content operations at Phony Content.',
          },
        ].map((beat) => (
          <motion.section
            key={beat.index}
            className="relative z-10 px-6 py-16"
            style={{ borderTop: '1px solid var(--t-border)' }}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.58, ease: E }}>
            <span className="block text-[10px] font-medium tracking-[0.18em] uppercase mb-5"
              style={{ color: 'var(--t-tertiary)' }}>
              {beat.index} · {beat.eyebrow}
            </span>
            <h2 className="text-[32px] font-semibold tracking-[-0.025em] leading-[1.08] mb-5"
              style={{ color: 'var(--t-primary)' }}>
              {beat.heading}
            </h2>
            <p className="text-[15px] leading-[1.72]" style={{ color: 'var(--t-secondary)' }}>
              {beat.body}
            </p>
          </motion.section>
        ))}

        {/* ── CTA ── */}
        <motion.section
          className="relative z-10 px-6 pt-12 pb-32"
          style={{ borderTop: '1px solid var(--t-border)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease: E }}>
          <div className="flex gap-3">
            <Link href="/work"
              className="flex-1 text-center py-[15px] rounded-full text-[14px] font-medium active:opacity-70 transition-opacity"
              style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}>
              Work
            </Link>
            <Link href="/published"
              className="flex-1 text-center py-[15px] rounded-full text-[14px] font-medium active:opacity-70 transition-opacity"
              style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}>
              Published
            </Link>
          </div>
        </motion.section>

      </div>

      {/* ── Desktop — unchanged ── */}
      <div className="hidden sm:flex flex-col justify-center min-h-screen pt-[52px] pb-8">
        <div className="w-full px-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
            <div className="flex-1 min-w-0">
              <motion.p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-4" style={{ color: 'var(--t-tertiary)' }}
                initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.05, ease: E }}>
                Los Angeles · Platform Content Strategist
              </motion.p>
              <motion.h1 className="text-[60px] font-semibold tracking-[-0.03em] leading-[1.02] mb-5" style={{ color: 'var(--t-primary)' }}
                initial={{ opacity: 0, y: 10 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08, ease: E }}>
                Shane Delaney
              </motion.h1>
              <motion.p className="text-[17px] leading-[1.65] mb-8 max-w-[420px]" style={{ color: 'var(--t-secondary)' }}
                initial={{ opacity: 0, y: 8 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.14, ease: E }}>
                I run editorial systems for creator-driven platforms — from story sourcing to XFN review to publication, with the data fluency to verify claims, surface insights, and inform every editorial call.
              </motion.p>
              <motion.div className="flex items-center gap-3 mb-10"
                initial={{ opacity: 0, y: 6 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.18, ease: E }}>
                <Link href="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-75"
                  style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}>Work</Link>
                <Link href="/published" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-75"
                  style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}>Published</Link>
                <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-75"
                  style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}>About</Link>
              </motion.div>
              <motion.div className="flex items-center gap-2 flex-wrap"
                initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.26, ease: E }}>
                {COMPANIES.map(([co, id]) => (
                  <Link key={co} href={`/work?company=${id}`}
                    className="text-[11px] px-2.5 py-1 rounded-full transition-colors"
                    style={{ border: '1px solid var(--t-border)', color: 'var(--t-tertiary)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--t-primary)'; e.currentTarget.style.borderColor = 'var(--t-secondary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--t-tertiary)'; e.currentTarget.style.borderColor = 'var(--t-border)'; }}>
                    {co}
                  </Link>
                ))}
              </motion.div>
            </div>
            <motion.div className="hidden lg:flex flex-col gap-3 w-[320px] flex-shrink-0"
              initial={{ opacity: 0, y: 12 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease: E }}>
              {CARDS.map((card) => (
                <Link key={card.title} href={card.href}
                  className="block rounded-xl p-4 transition-opacity hover:opacity-80"
                  style={{ background: 'var(--t-surface)', border: '1px solid var(--t-border)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: 'var(--t-tertiary)' }}>{card.label}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'var(--t-bg)', color: 'var(--t-secondary)', border: '1px solid var(--t-border)' }}>{card.tag}</span>
                  </div>
                  <p className="text-[13px] font-medium leading-snug" style={{ color: 'var(--t-primary)' }}>{card.title}</p>
                  <p className="text-[11px] mt-2" style={{ color: 'var(--t-tertiary)' }}>View in Published →</p>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
}
