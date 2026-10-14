'use client';

import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react';

export default function PublishedPanel({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  function scrollToHash(hash: string, focus = false) {
    const panel = root.current?.querySelector<HTMLElement>('.publication-scroll');
    if (!panel) return;
    if (!hash) {
      panel.scrollTop = 0;
      return;
    }
    let id: string;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target || !panel.contains(target)) return;
    const top = target.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop;
    panel.scrollTo({ top: Math.max(0, top - 20), behavior: 'instant' });
    if (focus) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }

  useEffect(() => {
    const restore = () => scrollToHash(window.location.hash);
    restore();
    window.addEventListener('hashchange', restore);
    window.addEventListener('popstate', restore);
    return () => {
      window.removeEventListener('hashchange', restore);
      window.removeEventListener('popstate', restore);
    };
  }, []);

  function navigate(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('.category-nav a');
    if (!link || !root.current?.contains(link)) return;
    event.preventDefault();
    if (window.location.hash !== link.hash) window.history.pushState(null, '', link.hash);
    scrollToHash(link.hash, true);
  }

  return <div className="collection panel" ref={root} onClick={navigate}>{children}</div>;
}
