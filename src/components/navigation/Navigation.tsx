'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTheme} from '@/components/ThemeProvider';
const links=[{href:'/',label:'Overview'},{href:'/work',label:'Experience'},{href:'/published',label:'Published'},{href:'/about',label:'About'}];
export default function Navigation(){const path=usePathname();const {theme,toggle}=useTheme();return <header className="site-header"><Link className="wordmark" href="/">Shane Delaney</Link><nav aria-label="Main navigation">{links.map(l=><Link key={l.href} href={l.href} aria-current={(l.href==='/'?path==='/':path.startsWith(l.href))?'page':undefined}>{l.label}</Link>)}</nav><button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`}>{theme==='dark'?'☼':'◐'}</button></header>}
