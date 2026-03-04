'use client';

import { motion } from 'framer-motion';

interface DrawPath {
  d: string;
  delay: number;
  duration: number;
}

interface DrawLabel {
  x: number;
  y: number;
  text: string;
  delay: number;
}

// ─────────────────────────────────────────────────
// Layout: 280 × 380 canvas
//   Meta  ∞   — top centre    (140, 72)
//   Snap ghost — mid left     ( 80, 200)
//   StockX  X  — mid right    (200, 200)
//   Collider   — bot left     ( 80, 320)
//   Phony      — bot right    (200, 320)
// ─────────────────────────────────────────────────

const PATHS: DrawPath[] = [

  // ── META ∞ ──────────────────────────────────────
  // Left oval  (centre 116, 72 | rx=26 ry=16)
  {
    d: 'M 90 72 A 26 16 0 0 1 142 72 A 26 16 0 0 1 90 72 Z',
    delay: 0, duration: 1.3,
  },
  // Right oval (centre 164, 72 | rx=26 ry=16)
  {
    d: 'M 138 72 A 26 16 0 0 1 190 72 A 26 16 0 0 1 138 72 Z',
    delay: 0.7, duration: 1.3,
  },

  // ── SNAP GHOST ──────────────────────────────────
  // Head arc + sides + three-bump bottom
  {
    d: 'M 60 195 A 20 22 0 0 0 100 195 L 100 210 C 101 219 98 223 94 219 C 90 215 87 213 84 217 C 81 221 79 222 80 222 C 81 222 79 221 76 217 C 73 213 70 215 66 219 C 62 223 59 219 60 210 Z',
    delay: 2.2, duration: 2.0,
  },

  // ── STOCKX  X ───────────────────────────────────
  {
    d: 'M 178 178 L 222 222',
    delay: 4.5, duration: 0.8,
  },
  {
    d: 'M 222 178 L 178 222',
    delay: 5.0, duration: 0.8,
  },

  // ── COLLIDER (clapperboard) ──────────────────────
  // Main body
  {
    d: 'M 52 308 L 52 348 L 108 348 L 108 308 Z',
    delay: 6.0, duration: 1.0,
  },
  // Top bar
  {
    d: 'M 52 308 L 52 300 L 108 300 L 108 308',
    delay: 6.8, duration: 0.5,
  },
  // Diagonal stripes (staggered)
  { d: 'M 60 300 L 65 308', delay: 7.1, duration: 0.25 },
  { d: 'M 69 300 L 74 308', delay: 7.3, duration: 0.25 },
  { d: 'M 78 300 L 83 308', delay: 7.5, duration: 0.25 },
  { d: 'M 87 300 L 92 308', delay: 7.7, duration: 0.25 },
  { d: 'M 96 300 L 101 308', delay: 7.9, duration: 0.25 },

  // ── PHONY CONTENT (smartphone) ──────────────────
  // Phone body
  {
    d: 'M 184 298 C 184 294 187 292 191 292 L 209 292 C 213 292 216 294 216 298 L 216 348 C 216 352 213 354 209 354 L 191 354 C 187 354 184 352 184 348 Z',
    delay: 8.5, duration: 1.2,
  },
  // Speaker slot
  {
    d: 'M 196 296 L 204 296',
    delay: 9.5, duration: 0.3,
  },
  // Home button (small circle)
  {
    d: 'M 197 350 A 3 3 0 1 0 203 350 A 3 3 0 1 0 197 350',
    delay: 9.7, duration: 0.5,
  },
];

const LABELS: DrawLabel[] = [
  { x: 140, y: 104, text: 'META',    delay: 2.1 },
  { x:  80, y: 238, text: 'SNAP',    delay: 4.4 },
  { x: 200, y: 238, text: 'STOCKX',  delay: 5.9 },
  { x:  80, y: 364, text: 'COLLIDER', delay: 8.2 },
  { x: 200, y: 364, text: 'PHONY',   delay: 10.2 },
];

export default function CompanyDraw() {
  return (
    <svg
      viewBox="0 0 280 380"
      fill="none"
      stroke="#1f2937"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Companies Shane Delaney has worked with"
    >
      {PATHS.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay: p.delay, duration: p.duration, ease: 'easeInOut' },
            opacity: { delay: p.delay, duration: 0.01 },
          }}
        />
      ))}

      {LABELS.map((l, i) => (
        <motion.text
          key={`lbl-${i}`}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          fontSize="8"
          fill="#9ca3af"
          stroke="none"
          letterSpacing="0.12em"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: l.delay, duration: 0.5, ease: 'easeOut' }}
        >
          {l.text}
        </motion.text>
      ))}
    </svg>
  );
}
