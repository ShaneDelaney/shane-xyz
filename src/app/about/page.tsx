'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/10 -z-10" />
      
      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
              A strategist who blends storytelling with systems.
            </h1>
          </div>
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Column - Body Copy */}
            <div className="lg:col-span-8 space-y-6 text-lg text-gray-700 leading-relaxed order-2 lg:order-1">
              <p>
                I'm a content and marketing strategist focused on the intersection of creativity and technology.
              </p>
              
              <p>
                At <strong>Meta</strong>, I support the Horizon Developer Ecosystem team by helping produce and 
                organize developer stories — highlighting how builders and studios are creating for Horizon Worlds 
                and Horizon Store.
              </p>
              
              <p>
                Before that, I worked at <strong>Snap Inc.</strong> as a Trend Curator on the Spotlight team, 
                where I played a pivotal role in daily content operations and curation for 1,000+ UGC submissions. 
                I was the point of contact for the New User Experience (NUX) project in a target male 13–17 demographic 
                — helping inform creative decisions through editorial judgment and performance insights.
              </p>
              
              <p>
                My background also includes content management for <strong>Phony Content</strong>, where I oversaw 
                Snapchat story production, and creative coordination for <strong>StockX</strong>, where I contributed 
                to the 2024 Core Insights Report and brand campaign shoots.
              </p>
              
              <p className="font-medium text-gray-900">
                I approach every project with equal parts creativity and precision — building content systems that 
                let great ideas scale without losing their human voice.
              </p>
              
              {/* CTA Buttons */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/work"
                    className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-base hover:bg-gray-800 transition-colors shadow-sm text-center"
                  >
                    View My Work
                  </Link>
                  <Link 
                    href="/contact"
                    className="px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-full font-medium text-base hover:bg-gray-50 transition-colors shadow-sm text-center"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 order-1 lg:order-2">
              {/* Profile Image */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/about_shane.png"
                  alt="Shane Delaney"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Current Role */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
                  Currently
                </h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-gray-900">Meta</p>
                  <p className="text-base text-gray-600">Content Marketing Coordinator II</p>
                </div>
              </div>
              
              {/* Previously */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
                  Previously
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-base font-medium text-gray-900">Snap Inc.</p>
                    <p className="text-sm text-gray-600">Trend Curator</p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-900">Phony Content</p>
                    <p className="text-sm text-gray-600">Content Manager</p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-900">StockX</p>
                    <p className="text-sm text-gray-600">Brand Creative Production</p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-900">Collider</p>
                    <p className="text-sm text-gray-600">SEO Content Writer</p>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-base font-medium text-gray-900">Loyola Marymount University</p>
                  <p className="text-sm text-gray-600">B.A. English & Screenwriting</p>
                  <p className="text-xs text-gray-500">2019 - 2023</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
