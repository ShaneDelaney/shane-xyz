'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-40"></div>
      </div>
      
      <div className="relative z-10 py-20 sm:py-24 px-4 w-full max-w-screen-lg mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            About Me
          </h1>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
              I'm a content strategist and trend curator with expertise in digital storytelling, editorial planning, and platform growth strategies. 
              Currently at Snap Inc., I work at the intersection of product development, data analysis, and content strategy to create compelling 
              user experiences that drive engagement and retention.
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              My approach combines deep analytical thinking with creative problem-solving. I specialize in translating data insights into actionable 
              content strategies, building editorial systems that scale, and developing frameworks that support emerging creators.
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-5 pb-1 border-b border-gray-200 inline-block">
                Core Skills
              </h2>
              <ul className="space-y-3 mt-5">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Content Strategy</h3>
                    <p className="text-gray-600 mt-1">
                      Developing comprehensive content plans aligned with product goals and audience needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Data Analysis</h3>
                    <p className="text-gray-600 mt-1">
                      Translating complex metrics into practical content optimizations and user experience improvements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Editorial Systems</h3>
                    <p className="text-gray-600 mt-1">
                      Building scalable frameworks for content curation, creation, and distribution.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Trend Forecasting</h3>
                    <p className="text-gray-600 mt-1">
                      Identifying emerging cultural trends and audience preferences to inform content strategy.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-5 pb-1 border-b border-gray-200 inline-block">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-medium">Analytics Tools</h3>
                  <p className="text-gray-600 text-sm mt-1">Amplitude, Google Analytics, Looker</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-medium">Visualization</h3>
                  <p className="text-gray-600 text-sm mt-1">Tableau, D3.js, Figma</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-medium">Workflow</h3>
                  <p className="text-gray-600 text-sm mt-1">Asana, Notion, Jira</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-medium">Content Systems</h3>
                  <p className="text-gray-600 text-sm mt-1">Contentful, WordPress, Airtable</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-5 pb-1 border-b border-gray-200 inline-block">
                Education
              </h2>
              <div className="space-y-6 mt-5">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src="/assets/lmu-logo.png"
                        alt="Loyola Marymount University logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Loyola Marymount University</h3>
                      <p className="text-gray-600 mt-1">B.A. English & Screenwriting</p>
                      <p className="text-gray-500 text-sm mt-1">September 2019 - August 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-5 pb-1 border-b border-gray-200 inline-block">
                Selected Projects
              </h2>
              <div className="mt-5">
                <Link href="/work">
                  <motion.div 
                    className="relative flex items-center gap-4 px-6 py-5 bg-white rounded-lg shadow-sm border border-gray-100 group cursor-pointer overflow-hidden"
                    whileHover={{ 
                      y: -3,
                      boxShadow: "0 10px 40px -15px rgba(0,0,0,0.1)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    <span className="absolute inset-0 w-1 bg-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <div className="relative">
                      <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">View My Work</h3>
                      <p className="text-gray-600 mt-1 max-w-md">
                        Explore my complete portfolio featuring projects in content strategy, data analysis, and editorial planning.
                      </p>
                    </div>
                    <div className="ml-auto">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16 pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/">
            <motion.button
              className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 text-base font-medium flex items-center gap-3 hover:bg-gray-50 transition-colors shadow-sm"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Return Home</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 