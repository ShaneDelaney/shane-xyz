'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/published', label: 'Published Content' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{ background: 'var(--t-nav)', borderBottom: '1px solid var(--t-border)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-[52px]">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight transition-opacity hover:opacity-60"
            style={{ color: 'var(--t-primary)' }}
          >
            Shane Delaney
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] transition-colors"
                  style={{ color: isActive ? 'var(--t-primary)' : 'var(--t-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--t-primary)' : 'var(--t-secondary)')}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              style={{ color: 'var(--t-secondary)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-secondary)')}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <a
              href="/ShaneDelaneyResume.pdf"
              download
              className="text-[14px] font-medium px-4 py-1.5 rounded-full transition-colors"
              style={{ background: 'var(--t-primary)', color: 'var(--t-bg)' }}
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{ color: 'var(--t-secondary)' }}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="p-1.5"
              style={{ color: 'var(--t-secondary)' }}
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" viewBox="0 0 24 24">
                {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'var(--t-bg)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-0.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-[15px]"
                style={{ color: pathname === link.href ? 'var(--t-primary)' : 'var(--t-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/ShaneDelaneyResume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-[15px]"
              style={{ color: 'var(--t-secondary)' }}
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
