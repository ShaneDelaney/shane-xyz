'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Shared hook — triggers animation once when element scrolls into view
function useDraw() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return { ref, isInView };
}

const SVG_PROPS = {
  fill: 'none',
  stroke: '#1f2937',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function animatePath(isInView: boolean, delay = 0, duration = 1.5) {
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: isInView ? { pathLength: 1, opacity: 1 } : {},
    transition: {
      pathLength: { delay, duration, ease: 'easeInOut' as const },
      opacity: { delay, duration: 0.01 },
    },
  };
}

// ─── META ∞ ─────────────────────────────────────────────────────────────────
// Single continuous ribbon stroke traced from the reference logo:
// Pen starts at the centre crossing, sweeps right loop first (counterclockwise),
// returns through centre (creating the visible X crossing), then sweeps the
// left loop counterclockwise and closes. The self-intersection at (130,50)
// replicates the 3-D twist of the Meta mark.
export function MetaLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 260 100" aria-label="Meta" {...SVG_PROPS} strokeWidth={1.6}>
        <motion.path
          d="
            M 130 50
            C 135 30 155 10 185 10
            C 220 10 245 25 245 50
            C 245 75 220 90 185 90
            C 155 90 135 70 130 50
            C 125 30 105 10  75 10
            C  40 10  15 25  15 50
            C  15 75  40 90  75 90
            C 105 90 125 70 130 50
          "
          {...animatePath(isInView, 0, 2.4)}
        />
      </svg>
    </div>
  );
}

// ─── SNAP GHOST ──────────────────────────────────────────────────────────────
// Traced from the official Snap ghost reference image (single closed outline):
// Round head arch → right side descends → RIGHT shoulder bump protrudes out →
// right foot curls DOWN-RIGHT → centre valley rises → left foot curls DOWN-LEFT →
// LEFT shoulder bump protrudes out → back up to head. No internal features —
// the real logo is outline-only.
export function SnapLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 100 118" aria-label="Snap" {...SVG_PROPS} strokeWidth={1.8}>
        <motion.path
          d="
            M 50 12
            C 70 12 82 22 82 38
            C 82 48 84 52 90 55
            C 96 58 96 66 90 69
            C 84 72 82 76 82 82
            C 82 92 87 98 82 102
            C 77 106 70 104 66 98
            C 62 92 58 88 55 88
            C 52 88 48 88 45 88
            C 42 88 38 92 34 98
            C 30 104 23 106 18 102
            C 13 98 18 92 18 82
            C 18 76 16 72 10 69
            C  4 66  4 58 10 55
            C 16 52 18 48 18 38
            C 18 22 30 12 50 12
            Z
          "
          {...animatePath(isInView, 0, 2.8)}
        />
      </svg>
    </div>
  );
}

// ─── STOCKX X ────────────────────────────────────────────────────────────────
export function StockXLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 60 60" aria-label="StockX" {...SVG_PROPS}>
        <motion.path d="M 8 8 L 52 52" {...animatePath(isInView, 0, 0.7)} />
        <motion.path d="M 52 8 L 8 52" {...animatePath(isInView, 0.4, 0.7)} />
      </svg>
    </div>
  );
}

// ─── COLLIDER (film clapperboard) ────────────────────────────────────────────
export function ColliderLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 80 70" aria-label="Collider" {...SVG_PROPS}>
        {/* Body */}
        <motion.path
          d="M 8 22 L 8 62 L 72 62 L 72 22 Z"
          {...animatePath(isInView, 0, 1.0)}
        />
        {/* Top bar */}
        <motion.path
          d="M 8 22 L 8 12 L 72 12 L 72 22"
          {...animatePath(isInView, 0.8, 0.5)}
        />
        {/* Diagonal stripes */}
        {[16, 25, 34, 43, 52].map((x, i) => (
          <motion.path
            key={x}
            d={`M ${x} 12 L ${x + 8} 22`}
            {...animatePath(isInView, 1.2 + i * 0.15, 0.25)}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── PHONY CONTENT (smartphone) ──────────────────────────────────────────────
export function PhonyLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 50 80" aria-label="Phony Content" {...SVG_PROPS}>
        {/* Phone body */}
        <motion.path
          d="M 6 8 C 6 4 9 2 13 2 L 37 2 C 41 2 44 4 44 8 L 44 72 C 44 76 41 78 37 78 L 13 78 C 9 78 6 76 6 72 Z"
          {...animatePath(isInView, 0, 1.2)}
        />
        {/* Speaker */}
        <motion.path
          d="M 18 7 L 32 7"
          {...animatePath(isInView, 1.0, 0.3)}
        />
        {/* Home button */}
        <motion.path
          d="M 22 72 A 3 3 0 1 0 28 72 A 3 3 0 1 0 22 72"
          {...animatePath(isInView, 1.2, 0.5)}
        />
      </svg>
    </div>
  );
}
