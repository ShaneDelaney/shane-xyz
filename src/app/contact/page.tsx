'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-24 pb-32 px-4 max-w-6xl mx-auto min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl font-serif font-bold text-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-zinc-600 font-light text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;d love to hear from you. Feel free to reach out directly:
          </motion.p>
        </div>

        <motion.div 
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="sms:+12487620695" 
            className="block text-2xl text-blue-600 hover:underline"
          >
            (248) 762-0695
          </a>
          <a 
            href="mailto:Shanedelaney11@gmail.com" 
            className="block text-2xl text-blue-600 hover:underline"
          >
            Shanedelaney11@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
} 