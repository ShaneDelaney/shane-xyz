'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [rotation, setRotation] = useState(0);

  const handleLogoClick = () => {
    setRotation(rotation + 360);
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 -z-10" />
      
      {/* Hero Section - Centered and locked */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 cursor-pointer"
              onClick={handleLogoClick}
              animate={{ 
                rotate: rotation,
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/logo.png"
                alt="Shane Delaney"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight text-center">
            Shaping developer stories and content systems at the intersection of creativity and tech.
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link 
              href="/work"
              className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm text-center"
            >
              See My Work
            </Link>
            <Link 
              href="/about"
              className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm text-center"
            >
              About Me
            </Link>
          </div>
          
          {/* Subtext */}
          <div className="text-base sm:text-lg text-gray-600 leading-relaxed text-center mb-8">
            <p>
              I'm Shane Delaney, a developer-focused content strategist. 
              At Meta, I lead narrative strategy for Horizon's developer ecosystem, crafting blog posts, case studies, 
              and creator spotlights that educate and inspire VR developers while driving adoption of new Horizon Worlds features.
            </p>
          </div>
          
          {/* Additional Info Section - Compact */}
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                  Currently
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  Meta
                </p>
                <p className="text-xs text-gray-600">
                  Content Marketing Coordinator II
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                  Previously
                </h3>
                <p className="text-xs text-gray-600">
                  Snap Inc., Phony Content, StockX, Collider
                </p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                  Based In
                </h3>
                <p className="text-xs text-gray-600">
                  Los Angeles, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
