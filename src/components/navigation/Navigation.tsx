'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
const links = [{ href: '/', label: 'The throughline' }, { href: '/work', label: 'Work' }, { href: '/published', label: 'Published' }, { href: '/about', label: 'About & next' }];
export default function Navigation() {
  const path = usePathname(); const [open, setOpen] = useState(false); const { theme, toggle } = useTheme();
  const active = (href: string) => href === '/' ? path === '/' : path.startsWith(href);
  return <header className="site-header"><div className="shell nav-inner">
    <Link href="/" className="wordmark" onClick={() => setOpen(false)}>Shane Delaney<span className="accent">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <Link key={l.href} href={l.href} aria-current={active(l.href) ? 'page' : undefined}>{l.label}</Link>)}</nav>
    <div className="nav-controls"><button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span></button><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></div>
  </div>{open && <nav id="mobile-navigation" className="mobile-navigation shell" aria-label="Mobile navigation">{links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={active(l.href) ? 'page' : undefined}>{l.label}<span aria-hidden="true">↗</span></Link>)}</nav>}</header>;
}
