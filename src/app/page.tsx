'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  {
    label: 'Meta Horizon Blog',
    title: 'VAIL VR: From Couch Surfing to $15M in Crowdfunding',
    tag: 'Creator Spotlight',
    href: '/published#vail-vr-part-one',
  },
  {
    label: 'Meta Horizon',
    title: 'Year in Review: Insights from 2025\'s Breakout Creators',
    tag: 'Platform Ecosystems',
    href: '/published#year-in-review',
  },
  {
    label: 'Meta Horizon',
    title: 'Develop a Marketing Plan for Your VR App',
    tag: 'GTM Series, Part 1',
    href: '/published#gtm-marketing-plan',
  },
];

const COMPANIES: [string, string][] = [
  ['Meta', 'meta'],
  ['Snap Inc.', 'snap'],
  ['StockX', 'stockx'],
  ['Phony Content', 'phony'],
  ['Collider', 'collider'],
];

export default function Home() {
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);

  return (
    <div
      className="flex flex-col justify-start md:justify-center pt-16 pb-24 md:min-h-screen md:pt-[52px] md:pb-8"
      style={{ background: 'var(--t-bg)' }}
    >
      <div className="w-full px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 min-w-0">

            {/* Eyebrow */}
            <motion.p
              className="text-[11px] uppercase tracking-[0.12em] font-medium mb-4"
              style={{ color: 'var(--t-tertiary)' }}
              initial={{ opacity: 0 }}
              animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05, ease: E }}
            >
              Los Angeles · Platform Content Strategist
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-[40px] sm:text-[60px] font-semibold tracking-[-0.03em] leading-[1.02] mb-4 sm:mb-5"
              style={{ color: 'var(--t-primary)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={m ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08, ease: E }}
            >
              Shane Delaney
            </motion.h1>

            {/* Tagline — hidden on mobile, shown on sm+ */}
            <motion.p
              className="hidden sm:block text-[17px] leading-[1.65] mb-8 max-w-[420px]"
              style={{ color: 'var(--t-secondary)' }}
              initial={{ opacity: 0, y: 8 }}
              animate={m ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14, ease: E }}
            >
              I build the storytelling systems that help platforms surface the creators shaping their ecosystems.
            </motion.p>

            {/* Stat strip — mobile only */}
            <motion.div
              className="sm:hidden flex items-stretch mb-6 rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--t-border)' }}
              initial={{ opacity: 0 }}
              animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.14, ease: E }}
            >
              {[
                { value: '13', label: 'Pieces published' },
                { value: '25M+', label: 'Content views' },
                { value: '900M+', label: 'MAU platform' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex-1 flex flex-col items-center justify-center py-3.5"
                  style={{
                    borderRight: i < 2 ? '1px solid var(--t-border)' : undefined,
                    background: 'var(--t-surface)',
                  }}
                >
                  <span className="text-[17px] font-semibold tracking-[-0.02em]" style={{ color: 'var(--t-primary)' }}>{stat.value}</span>
                  <span className="text-[10px] mt-0.5 text-center leading-tight px-1" style={{ color: 'var(--t-tertiary)' }}>{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-3 mb-7 sm:mb-10"
              initial={{ opacity: 0, y: 6 }}
              animate={m ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.18, ease: E }}
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-75"
                style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}
              >
                Work
              </Link>
              <Link
                href="/published"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-75"
                style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}
              >
                Published
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-opacity hover:opacity-75 hidden sm:inline-flex"
                style={{ border: '1px solid var(--t-border)', color: 'var(--t-secondary)' }}
              >
                About
              </Link>
            </motion.div>

            {/* Company chips — desktop only */}
            <motion.div
              className="hidden sm:flex items-center gap-2 flex-wrap"
              initial={{ opacity: 0 }}
              animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.26, ease: E }}
            >
              {COMPANIES.map(([co, id]) => (
                <Link
                  key={co}
                  href={`/work?company=${id}`}
                  className="text-[11px] px-2.5 py-1 rounded-full transition-colors"
                  style={{
                    border: '1px solid var(--t-border)',
                    color: 'var(--t-tertiary)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--t-primary)'; e.currentTarget.style.borderColor = 'var(--t-secondary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--t-tertiary)'; e.currentTarget.style.borderColor = 'var(--t-border)'; }}
                >
                  {co}
                </Link>
              ))}
            </motion.div>

            {/* TLDR — mobile only */}
            <motion.p
              className="sm:hidden text-[14px] leading-[1.6] max-w-[340px]"
              style={{ color: 'var(--t-secondary)' }}
              initial={{ opacity: 0 }}
              animate={m ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.26, ease: E }}
            >
              I've led content strategy at Meta, Snap, and StockX — building the editorial systems that help platforms grow their creator ecosystems.
            </motion.p>
          </div>

          {/* ── Right: article cards — hidden on mobile ── */}
          <motion.div
            className="hidden lg:flex flex-col gap-3 w-[320px] flex-shrink-0"
            initial={{ opacity: 0, y: 12 }}
            animate={m ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: E }}
          >
            {CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="block rounded-xl p-4 transition-opacity hover:opacity-80"
                style={{
                  background: 'var(--t-surface)',
                  border: '1px solid var(--t-border)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] font-medium"
                    style={{ color: 'var(--t-tertiary)' }}
                  >
                    {card.label}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      background: 'var(--t-bg)',
                      color: 'var(--t-secondary)',
                      border: '1px solid var(--t-border)',
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
                <p
                  className="text-[13px] font-medium leading-snug"
                  style={{ color: 'var(--t-primary)' }}
                >
                  {card.title}
                </p>
                <p
                  className="text-[11px] mt-2"
                  style={{ color: 'var(--t-tertiary)' }}
                >
                  View in Published →
                </p>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
