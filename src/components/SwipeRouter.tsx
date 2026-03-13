'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const PAGES = ['/', '/work', '/published'];

export function SwipeRouter() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let sx = 0, sy = 0, isH: boolean | null = null, hadLocal = false;

    const onStart = (e: TouchEvent) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
      isH = null;
      hadLocal = !!(e.target as Element).closest('[data-swipe-local]');
    };

    const onMove = (e: TouchEvent) => {
      if (hadLocal) return;
      if (isH === null) {
        const dx = Math.abs(e.touches[0].clientX - sx);
        const dy = Math.abs(e.touches[0].clientY - sy);
        if (dx > 8 || dy > 8) isH = dx > dy;
      }
    };

    const onEnd = (e: TouchEvent) => {
      if (!isH || hadLocal) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) < 60) return;
      const idx = PAGES.indexOf(pathname);
      if (idx === -1) return;
      if (dx < 0 && idx < PAGES.length - 1) router.push(PAGES[idx + 1]);
      else if (dx > 0 && idx > 0) router.push(PAGES[idx - 1]);
    };

    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', onStart);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
    };
  }, [pathname, router]);

  return null;
}
