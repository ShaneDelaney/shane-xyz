'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="md:w-2/3 space-y-4">
        <motion.h1 
          className="text-4xl font-serif font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-zinc-600 font-light leading-relaxed">
            I am a passionate digital marketer with a strong background in social media management and content strategy. My journey began with a love for storytelling and has evolved into a career focused on elevating brands through strategic SEO, compelling copywriting, and effective content management.
          </p>
          <p className="text-xl text-zinc-600 font-light leading-relaxed">
            Over the years, I have honed my skills in audience development, analytics growth, and narrative development, always striving to create engaging and impactful content.
          </p>
          <p className="text-xl text-zinc-600 font-light leading-relaxed">
            My goal is to continue pushing the boundaries of digital marketing, exploring innovative ways to connect with audiences and drive brand success.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 