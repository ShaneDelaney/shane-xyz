'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  { label: 'Meta Horizon Blog', title: 'VAIL VR: From Couch Surfing to $15M in Crowdfunding', tag: 'Creator Spotlight', href: '/published#vail-vr-part-one' },
  { label: 'Meta Horizon', title: "Year in Review: Insights from 2025's Breakout Creators", tag: 'Platform Ecosystems', href: '/published#year-in-review' },
  { label: 'Meta Horizon', title: 'Develop a Marketing Plan for Your VR App', tag: 'GTM Series, Part 1', href: '/published#gtm-marketing-plan' },
];


const QUICK_LINKS = [
  { label: 'Experience', meta: 'Meta · Snap · 5 companies', href: '/work', external: false },
  { label: 'Published', meta: '22+ pieces · Tech platforms', href: '/published', external: false },
  { label: 'Resume', meta: 'Download PDF', href: '/ShaneDelaney_Resume.pdf', external: true },
];

const DESKTOP_STATS = [
  {
    value: '22+',
    label: 'Pieces published',
    detail: '13 at Meta Horizon (developer stories, GTM guides, success stories), 3 at Collider, plus Snap and brand campaigns. All live and externally published.',
    href: '/published',
  },
  {
    value: '25M+',
    label: 'Views',
    detail: 'Across the Tiny Texts scripted series at Snap Inc. Top story hit 6.3M views with a 39% completion rate — well above platform average.',
    href: '/work?company=phony',
  },
  {
    value: '900M+',
    label: 'Platform MAU',
    detail: 'Combined monthly active users across Meta Horizon and Snapchat — the platforms where Shane has led editorial operations and content strategy.',
    href: '/work',
  },
];

const MOBILE_LINKS = [
  {
    label: 'Experience',
    detail: 'Meta Horizon · Snap Inc. · Collider · StockX · Phony Content. Editorial DRI, trend production, brand campaigns, and content operations.',
    href: '/work',
    external: false,
  },
  {
    label: 'Published',
    detail: '22+ pieces live across Meta Horizon, Collider, and Snap — developer stories, GTM guides, scripted series, and creator spotlights.',
    href: '/published',
    external: false,
  },
  {
    label: 'Resume',
    detail: 'Content Marketing Coordinator II at Meta. Trend Producer at Snap. Full history available in the PDF.',
    href: '/ShaneDelaney_Resume.pdf',
    external: true,
  },
];

export default function Home() {
  const [m, setM] = useState(false);
  const [openStat, setOpenStat] = useState<number | null>(null);
  const [openLink, setOpenLink] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setM(true); }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (statRef.current && !statRef.current.contains(e.target as Node)) setOpenStat(null);
      if (linkRef.current && !linkRef.current.contains(e.target as Node)) setOpenLink(null);
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) setOpenMobile(null);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
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

            {/* Quick-access dropdowns */}
            <motion.div
              ref={mobileRef}
              className="flex flex-col"
              initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.22, ease: E }}>
              {MOBILE_LINKS.map((item, i) => (
                <div key={item.label} style={{ borderTop: '1px solid var(--t-border)' }}>
                  <button
                    onClick={() => setOpenMobile(openMobile === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 active:opacity-50 transition-opacity">
                    <span className="text-[15px] font-semibold tracking-[-0.01em]" style={{ color: 'var(--t-primary)' }}>{item.label}</span>
                    <motion.span
                      animate={{ rotate: openMobile === i ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: E }}
                      className="text-[10px]" style={{ color: 'var(--t-tertiary)' }}>▾</motion.span>
                  </button>
                  <AnimatePresence>
                    {openMobile === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: E }}
                        style={{ overflow: 'hidden' }}>
                        <div className="pb-5">
                          <p className="text-[13px] leading-[1.65] mb-3" style={{ color: 'var(--t-secondary)' }}>{item.detail}</p>
                          <Link
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            onClick={() => setOpenMobile(null)}
                            className="text-[12px] font-medium transition-opacity active:opacity-50"
                            style={{ color: 'var(--t-primary)' }}>
                            {item.external ? 'Download ↓' : 'View →'}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--t-border)' }} />
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

      {/* ── Desktop ── */}
      <div className="hidden sm:flex flex-col justify-center min-h-screen pt-[52px] pb-8">
        <div className="w-full px-10">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
            <div className="flex-1 min-w-0">
              <motion.p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-4" style={{ color: 'var(--t-tertiary)' }}
                initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.05, ease: E }}>
                Los Angeles · Content Strategist
              </motion.p>
              <motion.h1 className="text-[60px] font-semibold tracking-[-0.03em] leading-[1.02] mb-5"
                style={{ color: 'var(--t-primary)' }}
                initial={{ opacity: 0, y: 10 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08, ease: E }}>
                Shane Delaney
              </motion.h1>
              <motion.p className="text-[17px] leading-[1.65] mb-8 max-w-[400px]" style={{ color: 'var(--t-secondary)' }}
                initial={{ opacity: 0, y: 8 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.14, ease: E }}>
                I run editorial systems for creator-driven platforms — story sourcing to publication, with the data fluency to back every call.
              </motion.p>
              <motion.div ref={linkRef} className="flex items-center gap-6 mb-8 relative"
                initial={{ opacity: 0, y: 6 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.18, ease: E }}>
                {MOBILE_LINKS.map((item, i) => (
                  <div key={item.label} className="flex items-center gap-6">
                    <div className="relative">
                      <button
                        onClick={() => setOpenLink(openLink === i ? null : i)}
                        className="group">
                        <span className="text-[13px] font-medium transition-opacity group-hover:opacity-60" style={{ color: 'var(--t-primary)' }}>{item.label}</span>
                      </button>
                      <AnimatePresence>
                        {openLink === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.18, ease: E }}
                            className="absolute top-full left-0 mt-3 w-[260px] rounded-xl p-4 z-50"
                            style={{ background: 'var(--t-surface)', border: '1px solid var(--t-border)' }}>
                            <p className="text-[12px] leading-[1.65] mb-3" style={{ color: 'var(--t-secondary)' }}>{item.detail}</p>
                            <Link
                              href={item.href}
                              target={item.external ? '_blank' : undefined}
                              rel={item.external ? 'noopener noreferrer' : undefined}
                              onClick={() => setOpenLink(null)}
                              className="text-[11px] font-medium transition-opacity hover:opacity-60"
                              style={{ color: 'var(--t-primary)' }}>
                              {item.external ? 'Download ↓' : 'View →'}
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
                <Link href="/about" className="text-[13px] font-medium transition-opacity hover:opacity-60"
                  style={{ color: 'var(--t-primary)' }}>About</Link>
              </motion.div>
              <motion.div ref={statRef} className="flex items-center gap-6 relative"
                initial={{ opacity: 0 }} animate={m ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.26, ease: E }}>
                {DESKTOP_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <div className="relative">
                      <button
                        onClick={() => setOpenStat(openStat === i ? null : i)}
                        className="flex items-baseline gap-2 group"
                        style={{ cursor: 'pointer' }}>
                        <span className="text-[15px] font-semibold tracking-tight transition-opacity group-hover:opacity-60" style={{ color: 'var(--t-primary)' }}>{stat.value}</span>
                        <span className="text-[11px] transition-opacity group-hover:opacity-60" style={{ color: 'var(--t-tertiary)' }}>{stat.label}</span>
                        <span className="text-[9px] transition-all" style={{ color: 'var(--t-tertiary)', transform: openStat === i ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▾</span>
                      </button>
                      <AnimatePresence>
                        {openStat === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.18, ease: E }}
                            className="absolute top-full left-0 mt-3 w-[260px] rounded-xl p-4 z-50"
                            style={{ background: 'var(--t-surface)', border: '1px solid var(--t-border)' }}>
                            <p className="text-[12px] leading-[1.65] mb-3" style={{ color: 'var(--t-secondary)' }}>{stat.detail}</p>
                            <Link href={stat.href} onClick={() => setOpenStat(null)}
                              className="text-[11px] font-medium transition-opacity hover:opacity-60"
                              style={{ color: 'var(--t-primary)' }}>
                              See work →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div className="hidden lg:flex flex-col gap-3 w-[320px] flex-shrink-0"
              initial={{ opacity: 0, y: 12 }} animate={m ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25, ease: E }}>
              {CARDS.map((card) => (
                <Link key={card.title} href={card.href}
                  className="block py-4 transition-opacity hover:opacity-60 group"
                  style={{ borderTop: '1px solid var(--t-border)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-medium" style={{ color: 'var(--t-tertiary)' }}>{card.label}</span>
                    <span className="text-[10px]" style={{ color: 'var(--t-tertiary)' }}>{card.tag}</span>
                  </div>
                  <p className="text-[13px] font-medium leading-snug" style={{ color: 'var(--t-primary)' }}>{card.title}</p>
                </Link>
              ))}
              <div style={{ borderTop: '1px solid var(--t-border)' }} />
            </motion.div>
          </div>
        </div>
      </div>


    </div>
  );
}
