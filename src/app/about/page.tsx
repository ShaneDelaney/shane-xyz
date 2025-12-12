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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              A strategist who blends storytelling with systems.
            </h1>
          </div>
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Column - Body Copy */}
            <div className="lg:col-span-8 space-y-4 text-base text-gray-700 leading-relaxed order-2 lg:order-1">
              <p>
                I'm a content marketing and creative strategist specializing in developer storytelling, product education, 
                and high-velocity editorial workflows. I excel at translating complex technical concepts into clear, compelling 
                content—from in-depth blog posts and documentation to snappy social media updates and short-form video tutorials.
              </p>
              
              <p>
                My background blends trend-driven performance analysis, cross-functional production, and deep developer ecosystem 
                experience. At <strong>Meta</strong>, I lead narrative direction for developer and creator stories in the Horizon 
                VR ecosystem, turning cutting-edge tech into accessible stories that inspire creators and builders. I recently led 
                the end-to-end creation of Meta's four-part Horizon Go-To-Market guide series, coordinating publication schedules 
                and owning all copy. This project showcased my ability to blend content strategy, technical writing, and project 
                management—delivering educational content that empowers VR developers with actionable marketing strategies. Previously at <strong>Snap Inc.</strong>, I guided trend-focused content curation for the Snapchat Spotlight platform, using 
                performance insights to inform editorial decisions and engage new users. I also managed high-volume content 
                production at <strong>Phony Content</strong> (over 50 scripted Snapchat stories) and contributed to culture-driven 
                marketing initiatives at <strong>StockX</strong> – analyzing Gen Z subcultures and sneaker trends to help shape the 
                brand's 2025 go-to-market strategy.
              </p>
              
              <p className="font-medium text-gray-900">
                I'm equally creative and tactical, building content systems that let great ideas scale without losing their human touch. 
                I'm also an avid user of Vercel (the platform hosting this site) and work daily with tools like Cursor and GitHub, 
                keeping me closely connected to the developer communities I write for.
              </p>
              
              {/* CTA Buttons */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3">
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
            <aside className="lg:col-span-4 space-y-6 order-1 lg:order-2">
              {/* Profile Image */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/about_shane.png"
                  alt="Shane Delaney"
                  width={800}
                  height={1000}
                  className="w-full h-auto max-h-64 object-cover"
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
                    <p className="text-sm text-gray-600">Trend Producer</p>
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
