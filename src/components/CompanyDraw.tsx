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
// Single continuous stroke: starts at centre crossing, traces left loop
// counterclockwise, returns to centre, traces right loop counterclockwise.
// The self-intersection at centre creates the 3-D crossover of the Meta mark.
export function MetaLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 220 80" aria-label="Meta" {...SVG_PROPS}>
        <motion.path
          d="
            M 110 40
            C 110 27  92 16  68 16
            C  44 16  24 28  24 40
            C  24 52  44 64  68 64
            C  92 64 110 53 110 40
            C 110 27 128 16 152 16
            C 176 16 196 28 196 40
            C 196 52 176 64 152 64
            C 128 64 110 53 110 40
          "
          {...animatePath(isInView, 0, 2.2)}
        />
      </svg>
    </div>
  );
}

// ─── SNAP GHOST ──────────────────────────────────────────────────────────────
// Round head arc, straight body sides, then W-shaped bottom:
// two feet hanging DOWN with a notch rising between them.
export function SnapLogo({ className }: { className?: string }) {
  const { ref, isInView } = useDraw();
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 80 82" aria-label="Snap" {...SVG_PROPS}>
        {/* Ghost body */}
        <motion.path
          d="
            M 10 40
            A 30 30 0 0 0 70 40
            L 70 55
            C 70 65 65 73 58 73
            C 51 73 48 65 40 65
            C 32 65 29 73 22 73
            C 15 73 10 65 10 55
            Z
          "
          {...animatePath(isInView, 0, 1.8)}
        />
        {/* Left eye */}
        <motion.path
          d="M 27 33 A 4 4 0 1 0 35 33 A 4 4 0 1 0 27 33"
          {...animatePath(isInView, 1.6, 0.6)}
        />
        {/* Right eye */}
        <motion.path
          d="M 45 33 A 4 4 0 1 0 53 33 A 4 4 0 1 0 45 33"
          {...animatePath(isInView, 1.9, 0.6)}
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
