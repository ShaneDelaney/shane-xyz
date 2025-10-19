'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 -z-10" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6">
              <Image
                src="/logo.png"
                alt="Shane Delaney"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight text-center">
            Shaping stories and systems at the intersection of creativity and tech.
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/work">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-base hover:bg-gray-800 transition-colors shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See My Work
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-300 text-gray-900 rounded-full font-medium text-base hover:bg-gray-50 transition-colors shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                About Me
              </motion.button>
            </Link>
          </div>
          
          {/* Subtext */}
          <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed text-center">
            <p>
              I'm Shane Delaney — a digital strategist and writer. 
              At Meta, I help craft developer-focused storytelling for the Horizon ecosystem, 
              connecting creators, studios, and builders shaping VR experiences.
            </p>
            <p>
              Previously at Snap Inc., I worked on content programming and trend strategy 
              for Spotlight, bridging editorial, data, and product teams to support creator 
              ecosystems and drive platform growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Additional Info Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                Currently
              </h3>
              <p className="text-lg font-medium text-gray-900">
                Meta
              </p>
              <p className="text-base text-gray-600">
                Content Marketing Coordinator II
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                Previously
              </h3>
              <p className="text-base text-gray-600">
                Snap Inc., Phony Content, StockX, Collider
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                Based In
              </h3>
              <p className="text-base text-gray-600">
                Los Angeles, CA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
