'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ];

  const dark = pathname.startsWith('/work/portfolio');

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-700 ${dark ? 'bg-transparent' : 'bg-white/80 backdrop-blur-xl'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/work/portfolio"
            className={`text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity ${dark ? 'text-white' : 'text-gray-900'}`}
          >
            Shane Delaney
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    dark
                      ? isActive ? 'text-white' : 'text-white/45 hover:text-white'
                      : isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className={`text-sm px-4 py-1.5 rounded-full transition-colors ${dark ? 'bg-white/12 text-white hover:bg-white/20' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${dark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Hairline */}
      <div className={`h-px transition-colors duration-700 ${dark ? 'bg-white/8' : 'bg-gray-200/60'}`} />

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`md:hidden backdrop-blur-xl ${dark ? 'bg-black/50' : 'bg-white/95'}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2.5 text-sm ${pathname === link.href ? (dark ? 'text-white font-medium' : 'text-gray-900 font-medium') : (dark ? 'text-white/50' : 'text-gray-500')}`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/ShaneDelaneyResume.pdf"
                download
                onClick={() => setIsMenuOpen(false)}
                className={`py-2.5 text-sm ${dark ? 'text-white/50' : 'text-gray-500'}`}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
