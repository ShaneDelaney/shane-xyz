'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const PLATFORMS = ['Meta', 'Snap Inc.', 'StockX', 'Phony Content', 'Collider'];

const FOCUS_AREAS = [
  'Content Strategy',
  'Creator Ecosystems',
  'Platform Growth',
  'Narrative Systems',
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="h-screen overflow-hidden bg-white flex items-center pt-14">
      <div className="w-full px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left — intro + contact */}
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 12 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">About</p>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 leading-snug mb-5">
                Shane Delaney
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
                Content strategist focused on platform ecosystems, creator growth, and editorial operations. My work sits at the intersection of storytelling systems and platform scale — building the infrastructure that makes content programs run.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:shanedelaney11@gmail.com"
                  className="flex items-center justify-between px-4 py-3 border border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all group max-w-xs"
                >
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-sm font-medium text-gray-900">shanedelaney11@gmail.com</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-gray-700 transition-colors text-sm">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shane-delaney-546445179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 border border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all group max-w-xs"
                >
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5">LinkedIn</p>
                    <p className="text-sm font-medium text-gray-900">Shane Delaney</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-gray-700 transition-colors text-sm">↗</span>
                </a>
                <a
                  href="/ShaneDelaneyResume.pdf"
                  download
                  className="flex items-center justify-between px-4 py-3 border border-gray-100 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all group max-w-xs"
                >
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5">Resume</p>
                    <p className="text-sm font-medium text-gray-900">ShaneDelaney_Resume.pdf</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-gray-700 transition-colors text-sm">↓</span>
                </a>
              </div>
            </motion.div>

            {/* Right — structured info */}
            <motion.div
              className="lg:w-64 flex-shrink-0 w-full"
              initial={{ opacity: 0, y: 12 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              <div className="space-y-6">

                <div>
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-3">Platforms</p>
                  <div className="flex flex-col gap-1.5">
                    {PLATFORMS.map((p) => (
                      <p key={p} className="text-sm text-gray-700">{p}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-3">Focus Areas</p>
                  <div className="flex flex-col gap-1.5">
                    {FOCUS_AREAS.map((f) => (
                      <p key={f} className="text-sm text-gray-700">{f}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-3">Background</p>
                  <p className="text-sm text-gray-700">LMU</p>
                  <p className="text-xs text-gray-400 mt-0.5">B.A. English & Screenwriting</p>
                </div>

              </div>

              <div className="mt-8">
                <Link href="/work" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
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
