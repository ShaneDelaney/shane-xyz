'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-black"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.span
          className="text-lg font-light tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/">shane delaney</Link>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/contact">
            <motion.button
              className="px-4 py-2 rounded-lg bg-black text-white text-sm font-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 