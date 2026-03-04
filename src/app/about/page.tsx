'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const skills = [
  {
    category: 'Editorial & Production',
    items: ['Editorial Calendar Management', 'Story Lifecycle Management', 'Content Pipeline Management', 'Resource Tracking (DRIs)', 'Editorial Instructions (EIs)', 'Content Programming'],
  },
  {
    category: 'Operations & Tools',
    items: ['Airtable', 'Jira', 'Confluence', 'Asana', 'Salesforce', 'Figma', 'CMS Platforms', 'Technical Metadata Management', 'Project Governance'],
  },
  {
    category: 'Strategy & Analytics',
    items: ['Stat Review Process', 'XFN Alignment', 'Stakeholder Management', 'Performance Data Synthesis', 'Competitive Gap Analysis', 'Process Optimization'],
  },
  {
    category: 'AI & Dev Tools',
    items: ['Claude Code', 'Cursor', 'GitHub', 'SuperWhisper'],
  },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.06] mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Editorial operations<br />and content strategy.
          </motion.h1>

          <motion.div
            className="space-y-5 text-base text-gray-500 leading-relaxed mb-14 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <p>
              Marketing and Editorial Operations Specialist with a track record of managing high-volume content pipelines, coordinating cross-functional teams, and building editorial systems that scale.
            </p>
            <p>
              At Meta, I lead the end-to-end editorial content lifecycle for the Horizon Developer Blog. I build story templates, manage the formal stat review process with Data Science, coordinate feedback loops across Marketing, Product, and Legal, and maintain DRI trackers to keep global delivery dates on track.
            </p>
            <p>
              Previously at Snap Inc., I was Programming Lead for Spotlight, synthesizing daily performance data to surface breakout trends, developing standardized editorial processes, and managing a pipeline of 1,000+ pieces of content per day.
            </p>
            <p>
              I bridge creative strategy and operational execution, building the processes that let teams move fast without losing quality.
            </p>
            <p>
              Alongside that, I&apos;ve gone deep on AI-native work. At Meta, I&apos;m actively building systems, dashboards, and internal tools using AI, taking on responsibility as an early AI-first practitioner on my team. Proficient with Claude Code, Cursor, GitHub, and SuperWhisper. Built this site entirely with Claude Code.
            </p>
          </motion.div>

          {/* Info grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <div className="bg-white px-5 py-5">
              <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Currently</p>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">Meta</p>
              <p className="text-xs text-gray-400">Content Marketing Coordinator II</p>
            </div>
            <div className="bg-white px-5 py-5">
              <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Previously</p>
              <p className="text-xs text-gray-400 leading-relaxed">Snap Inc. · Phony Content · StockX · Collider</p>
            </div>
            <div className="bg-white px-5 py-5 col-span-2 sm:col-span-1">
              <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-2">Education</p>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">LMU</p>
              <p className="text-xs text-gray-400">B.A. English & Screenwriting</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mb-14"
          >
            <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-6">Skills & Tools</p>
            <div className="space-y-6">
              {skills.map(group => (
                <div key={group.category}>
                  <p className="text-xs font-medium text-gray-700 mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          >
            <Link
              href="/work"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              View My Work
            </Link>
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-400 transition-colors"
            >
              Download Resume ↓
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-gray-400 text-sm font-medium hover:text-gray-900 transition-colors"
            >
              Get In Touch →
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
