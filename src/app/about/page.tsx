'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const PLATFORMS = ['Meta', 'Snap Inc.', 'Phony Content', 'StockX', 'Collider'];

const FOCUS_AREAS = [
  'Editorial Judgment at Scale',
  'Data Integrity & XFN Translation',
  'Narrative Systems',
  'Cross-Functional Execution',
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className="min-h-screen md:h-screen md:overflow-hidden flex items-start md:items-center pt-[52px]"
      style={{ background: 'var(--t-bg)' }}
    >
      <div className="w-full px-6 sm:px-10 py-10 md:py-0">
        <div className="max-w-3xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left — intro + contact */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.12em] font-medium mb-4"
                style={{ color: 'var(--t-tertiary)' }}
              >
                About
              </p>
              <h1
                className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.02em] leading-snug mb-5"
                style={{ color: 'var(--t-primary)' }}
              >
                Shane Delaney
              </h1>
              <p
                className="text-[15px] leading-[1.7] mb-3 max-w-sm"
                style={{ color: 'var(--t-secondary)' }}
              >
                Platform content strategist with experience at Meta and Snap Inc. I build the editorial systems and story pipelines that help platforms surface the creators and products shaping their ecosystems.
              </p>
              <p
                className="text-[15px] leading-[1.7] mb-8 max-w-sm"
                style={{ color: 'var(--t-secondary)' }}
              >
                I operate across editorial, data, and cross-functional teams, verifying what's true, translating what's complex, and publishing what matters.
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:shanedelaney11@gmail.com"
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group max-w-xs"
                  style={{ border: '1px solid var(--t-border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--t-secondary)'; e.currentTarget.style.background = 'var(--t-surface)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--t-border)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.08em] font-medium mb-0.5" style={{ color: 'var(--t-tertiary)' }}>Email</p>
                    <p className="text-[13px] font-medium" style={{ color: 'var(--t-primary)' }}>shanedelaney11@gmail.com</p>
                  </div>
                  <span className="text-[13px]" style={{ color: 'var(--t-tertiary)' }}>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shane-delaney-546445179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group max-w-xs"
                  style={{ border: '1px solid var(--t-border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--t-secondary)'; e.currentTarget.style.background = 'var(--t-surface)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--t-border)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.08em] font-medium mb-0.5" style={{ color: 'var(--t-tertiary)' }}>LinkedIn</p>
                    <p className="text-[13px] font-medium" style={{ color: 'var(--t-primary)' }}>Shane Delaney</p>
                  </div>
                  <span className="text-[13px]" style={{ color: 'var(--t-tertiary)' }}>↗</span>
                </a>
                <a
                  href="/ShaneDelaneyResume.pdf"
                  download
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group max-w-xs"
                  style={{ border: '1px solid var(--t-border)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--t-secondary)'; e.currentTarget.style.background = 'var(--t-surface)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--t-border)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.08em] font-medium mb-0.5" style={{ color: 'var(--t-tertiary)' }}>Resume</p>
                    <p className="text-[13px] font-medium" style={{ color: 'var(--t-primary)' }}>ShaneDelaney_Resume.pdf</p>
                  </div>
                  <span className="text-[13px]" style={{ color: 'var(--t-tertiary)' }}>↓</span>
                </a>
              </div>
            </motion.div>

            {/* Right — structured info */}
            <motion.div
              className="lg:w-56 flex-shrink-0 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              <div className="space-y-7">

                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3"
                    style={{ color: 'var(--t-tertiary)' }}
                  >
                    Platforms
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {PLATFORMS.map((p) => (
                      <p key={p} className="text-[13px]" style={{ color: 'var(--t-secondary)' }}>{p}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3"
                    style={{ color: 'var(--t-tertiary)' }}
                  >
                    Focus Areas
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {FOCUS_AREAS.map((f) => (
                      <p key={f} className="text-[13px]" style={{ color: 'var(--t-secondary)' }}>{f}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3"
                    style={{ color: 'var(--t-tertiary)' }}
                  >
                    Background
                  </p>
                  <p className="text-[13px]" style={{ color: 'var(--t-secondary)' }}>LMU</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--t-tertiary)' }}>B.A. English & Screenwriting</p>
                  <p className="text-[12px] mt-0.5" style={{ color: 'var(--t-tertiary)' }}>Los Angeles</p>
                </div>

              </div>

              <div className="mt-8">
                <Link
                  href="/work"
                  className="text-[13px] transition-colors"
                  style={{ color: 'var(--t-tertiary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-tertiary)')}
                >
                  View Work →
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
