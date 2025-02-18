'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="relative w-full h-[100dvh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full space-y-8"
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl font-serif font-light text-black text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            contact me
          </motion.h1>
          <motion.p 
            className="text-xl text-zinc-600 font-light text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            i&apos;d love to hear from you. feel free to reach out directly:
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
            className="block text-2xl text-black hover:opacity-70 transition-opacity font-light"
          >
            (248) 762-0695
          </a>
          <a 
            href="mailto:Shanedelaney11@gmail.com" 
            className="block text-2xl text-black hover:opacity-70 transition-opacity font-light"
          >
            shanedelaney11@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
} 