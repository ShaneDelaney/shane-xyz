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
  { value: '13', label: 'Published' },
  { value: '25M+', label: 'Views' },
  { value: '900M+', label: 'MAU' },
];

export default function Home() {
  const [m, setM] = useState(false);
  useEffect(() => {
    setM(true);
  }, []);

  return (
    <div style={{ background: 'var(--t-bg)' }}>

      {/* ── Mobile: scrollable ── */}
      <div className="sm:hidden">
        {/* Hero — first screen */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-7 pt-[52px] pb-[72px]">

          <motion.p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-5"
            style={{ color: 'var(--t-tertiary)' }}
            initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.0, ease: E }}>
            Los Angeles · Content Strategist
          </motion.p>

          <motion.h1 className="text-[54px] font-semibold tracking-[-0.03em] leading-[0.92] mb-6"
            style={{ color: 'var(--t-primary)' }}
            initial={{ opacity: 0, y: 14 }} animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: E }}>
            Shane<br />Delaney
          </motion.h1>

          <motion.p className="text-[15px] leading-[1.65] max-w-[265px] mb-9"
            style={{ color: 'var(--t-secondary)' }}
            initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.12, ease: E }}>
            I run editorial systems for creator-driven platforms — from story sourcing to XFN review to publication, with the data fluency to verify claims, surface insights, and inform every editorial call.
          </motion.p>

          {/* Stats */}
          <motion.div className="flex items-stretch w-full mb-9 rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--t-border)' }}
            initial={{ opacity: 0, y: 6 }} animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.18, ease: E }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="flex-1 flex flex-col items-center py-5"
                style={{ background: 'var(--t-surface)', borderRight: i < 2 ? '1px solid var(--t-border)' : undefined }}>
                <span className="text-[26px] font-semibold tracking-[-0.03em] leading-none" style={{ color: 'var(--t-primary)' }}>{s.value}</span>
                <span className="text-[10px] mt-1.5 uppercase tracking-[0.1em]" style={{ color: 'var(--t-tertiary)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex items-center gap-3"
            initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.24, ease: E }}>
            <Link href="/work" className="px-8 py-3.5 rounded-full text-[14px] font-medium transition-opacity active:opacity-70"
              style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}>
              Work
            </Link>
            <Link href="/published" className="px-8 py-3.5 rounded-full text-[14px] font-medium transition-opacity active:opacity-70"
              style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}>
              Published
            </Link>
          </motion.div>

        </div>
        {/* Highlights — revealed on scroll */}
        <div className="px-6 pb-28 flex flex-col gap-0" style={{ borderTop: '1px solid var(--t-border)' }}>
          {[
            { label: 'Role', value: 'Platform Content Strategist' },
            { label: 'Focus', value: 'Editorial systems that surface the creators shaping platform ecosystems.' },
            { label: 'Recent', value: 'Meta Horizon — Editorial DRI. 13 pieces published. 5-team XFN review. 5 months.' },
            { label: 'Before that', value: 'Snap Inc. — Wrote and produced Tiny Texts. 25M+ views across the catalog.' },
            { label: 'Also', value: 'Collider, StockX, Phony Content. Editorial, production, and creator campaigns.' },
          ].map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col py-5"
              style={{ borderBottom: '1px solid var(--t-border)' }}>
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium mb-2"
                style={{ color: 'var(--t-tertiary)' }}>{item.label}</span>
              <span className="text-[15px] leading-[1.6]"
                style={{ color: 'var(--t-primary)' }}>{item.value}</span>
            </motion.div>
          ))}
        </div>
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
