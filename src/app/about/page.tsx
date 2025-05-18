'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="md:w-2/3 space-y-6">
        <motion.h1 
          className="text-4xl font-serif font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-zinc-700 font-light leading-relaxed">
            Content strategist and curator with proven expertise in high-volume editorial operations, brand consistency, and digital storytelling. At Snap Inc., I review <span className="font-medium">~1,000+ Snaps daily</span>, merchandising high-impact UGC across Spotlight to drive engagement.
          </p>
          <p className="text-lg text-zinc-700 font-light leading-relaxed">
            My cross-functional approach bridges data science, product teams, and creative strategy to deliver measurable results. Strong track record of leading tentpole campaigns, developing editorial systems, and translating complex data into actionable content insights.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-base font-medium text-black mb-2">Core Skills</h3>
              <ul className="space-y-1">
                <li className="text-sm text-zinc-700">• Content Curation & Editorial Strategy</li>
                <li className="text-sm text-zinc-700">• Campaign Merchandising</li>
                <li className="text-sm text-zinc-700">• Metadata & Tagging Systems</li>
                <li className="text-sm text-zinc-700">• Tentpole Content Planning</li>
                <li className="text-sm text-zinc-700">• Brand Voice Development</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-base font-medium text-black mb-2">Technical Proficiencies</h3>
              <ul className="space-y-1">
                <li className="text-sm text-zinc-700">• CMS & Content Management Tools</li>
                <li className="text-sm text-zinc-700">• Airtable, Google Workspace, Figma</li>
                <li className="text-sm text-zinc-700">• Cursor IDE, GitHub, OpenAI API</li>
                <li className="text-sm text-zinc-700">• Project Management (Slack, Trello, Asana)</li>
                <li className="text-sm text-zinc-700">• Data Analysis & Reporting</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6">
            <h3 className="text-base font-medium text-black mb-3">Education</h3>
            <p className="text-sm text-zinc-700">
              <span className="font-medium">Loyola Marymount University</span> – B.A., English & Screenwriting (2019-2023)
            </p>
          </div>
          
          <div className="pt-4">
            <Link href="/work">
              <motion.button
                className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View my experience</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 