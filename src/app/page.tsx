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
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden ring-2 ring-gray-200">
              <Image
                src="/logo.png"
                alt="Shane Delaney"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="text-lg sm:text-xl font-medium text-gray-700 mb-1">Shane Delaney</h2>
            <p className="text-sm sm:text-base text-gray-500">Los Angeles, CA</p>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Shaping stories and systems at the intersection of creativity and tech.
          </motion.h1>
          
          {/* Subtext */}
          <motion.div
            className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I'm Shane Delaney — a digital strategist and writer based in Los Angeles. 
              At Meta, I help craft developer-focused storytelling for the Horizon ecosystem, 
              connecting creators, studios, and builders shaping VR experiences.
            </p>
            <p>
              Previously at Snap Inc., I worked on content programming and trend strategy 
              for Spotlight, bridging editorial, data, and product teams to support creator 
              ecosystems and drive platform growth.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.div>
        </div>
      </section>
      
      {/* Additional Info Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-200">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>
      </section>
    </div>
  );
}
