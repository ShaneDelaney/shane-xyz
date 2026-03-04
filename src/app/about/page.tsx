'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
        <div className="max-w-3xl mx-auto w-full">

          {/* Header */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Editorial operations<br className="hidden sm:block" /> and content strategy.
          </motion.h1>

          {/* Bio */}
          <motion.div
            className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Marketing & Editorial Operations Specialist with a track record of managing high-volume content pipelines, coordinating cross-functional teams, and building editorial systems that scale.
            </p>
            <p>
              At Meta, I lead the end-to-end editorial content lifecycle for the Horizon Developer Blog. I build and maintain story templates, manage the formal stat review process with Data Science, coordinate feedback loops across Marketing, Product, and Legal, and maintain DRI trackers to keep global delivery dates on track.
            </p>
            <p>
              Previously at Snap Inc., I served as Programming Lead for Spotlight, synthesizing daily performance data to surface breakout trends, developing standardized editorial processes, and managing a pipeline of 1,000+ pieces of content per day.
            </p>
            <p>
              I bridge creative strategy and operational execution, building the processes that let teams move fast without losing quality.
            </p>
            <p>
              Alongside that, I&apos;ve gone head-first into AI-native work. At Meta, I&apos;m actively building systems, dashboards, and internal tools using AI, taking on responsibility as an early AI-first practitioner on my team. I&apos;m proficient with Claude Code, Cursor, GitHub, and SuperWhisper, and built this site entirely with Claude Code. Eager to keep pushing in this space.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">Currently</p>
              <p className="text-sm font-semibold text-gray-900 mb-0.5">Meta</p>
              <p className="text-xs text-gray-500">Content Marketing Coordinator II</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">Previously</p>
              <p className="text-xs text-gray-500 leading-relaxed">Snap Inc. · Phony Content · StockX · Collider</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">Education</p>
              <p className="text-xs font-medium text-gray-900 mb-0.5">LMU</p>
              <p className="text-[10px] text-gray-500">B.A. English & Screenwriting</p>
            </div>
          </motion.div>

          {/* Skills & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">Skills & Tools</h2>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-medium text-gray-700 mb-2.5">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-md"
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
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work"
              className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
            >
              View My Work
            </Link>
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className="px-5 py-2.5 bg-white border border-gray-300 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
            >
              Download Resume ↓
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-gray-500 text-sm font-medium hover:text-gray-900 transition-colors"
            >
              Get In Touch →
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
