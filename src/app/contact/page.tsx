'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const contacts = [
    {
      label: 'Email',
      value: 'shanedelaney11@gmail.com',
      href: 'mailto:shanedelaney11@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'Shane Delaney',
      href: 'https://www.linkedin.com/in/shane-delaney-546445179/',
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-white flex items-center pt-14">
      <div className="w-full px-6 sm:px-10">
        <div className="max-w-sm mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Contact</p>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-2">Get in touch.</h1>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Open to full-time roles, freelance projects, and creative collaborations.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3 mb-8">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between px-5 py-4 border border-gray-100 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all group"
                initial={{ opacity: 0, y: 8 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: EASE }}
              >
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-gray-900">{c.value}</p>
                </div>
                <span className="text-gray-300 group-hover:text-gray-700 transition-colors text-sm">↗</span>
              </motion.a>
            ))}

            <motion.a
              href="/ShaneDelaneyResume.pdf"
              download
              className="flex items-center justify-between px-5 py-4 border border-gray-100 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all group"
              initial={{ opacity: 0, y: 8 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.24, ease: EASE }}
            >
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Resume</p>
                <p className="text-sm font-medium text-gray-900">ShaneDelaney_Resume.pdf</p>
              </div>
              <span className="text-gray-300 group-hover:text-gray-700 transition-colors text-sm">↓</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.32, ease: EASE }}
          >
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">
              ← Back
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
