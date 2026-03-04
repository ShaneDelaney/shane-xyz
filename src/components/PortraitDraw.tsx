'use client';

import { motion } from 'framer-motion';

interface DrawPath {
  d: string;
  delay: number;
  duration: number;
}

// Stylised cartoon portrait — paths drawn in sequence
const PATHS: DrawPath[] = [
  // Left shoulder / torso edge
  { d: "M 0 480 L 0 428 C 22 415 50 400 78 384 C 108 367 132 352 148 340 L 152 330", delay: 0, duration: 1.8 },
  // Right shoulder / torso edge
  { d: "M 320 480 L 320 428 C 298 415 270 400 242 384 C 212 367 188 352 172 340 L 168 330", delay: 0.15, duration: 1.8 },
  // Collar / shirt line
  { d: "M 152 330 C 150 336 150 340 152 344 C 154 348 156 350 160 350 C 164 350 166 348 168 344 C 170 340 170 336 168 330", delay: 1.4, duration: 0.6 },
  // Left neck
  { d: "M 152 344 L 146 305", delay: 1.8, duration: 0.5 },
  // Right neck
  { d: "M 168 344 L 174 305", delay: 1.9, duration: 0.5 },
  // Head outline — main shape
  { d: "M 146 305 C 122 298 106 277 102 254 C 98 230 99 203 103 180 C 107 157 116 137 128 123 C 140 109 152 104 160 104 C 168 104 180 109 192 123 C 204 137 213 157 217 180 C 221 203 222 230 218 254 C 214 277 198 298 174 305", delay: 2.2, duration: 2.8 },
  // Hair — main sweep across forehead
  { d: "M 116 168 C 118 150 126 133 138 121 C 148 111 156 107 160 107 C 164 107 172 111 182 121 C 194 133 202 150 204 168", delay: 3.0, duration: 1.4 },
  // Hair — left side detail
  { d: "M 103 198 C 101 186 101 172 104 161 C 107 149 112 139 118 132", delay: 3.6, duration: 0.8 },
  // Hair — right side detail
  { d: "M 217 198 C 219 186 219 172 216 161 C 213 149 208 139 202 132", delay: 3.8, duration: 0.8 },
  // Left ear
  { d: "M 102 226 C 94 229 90 237 91 246 C 92 255 99 260 107 257", delay: 4.2, duration: 0.8 },
  // Right ear
  { d: "M 218 226 C 226 229 230 237 229 246 C 228 255 221 260 213 257", delay: 4.3, duration: 0.8 },
  // Eyebrow left
  { d: "M 128 196 C 133 191 140 189 148 190 C 154 191 158 194 160 196", delay: 4.8, duration: 0.7 },
  // Eyebrow right
  { d: "M 192 196 C 187 191 180 189 172 190 C 166 191 162 194 160 196", delay: 5.0, duration: 0.7 },
  // Left eye
  { d: "M 128 212 C 132 205 139 202 146 205 C 153 208 156 216 152 222 C 147 228 138 227 132 222 C 128 218 127 215 128 212 Z", delay: 5.4, duration: 1.0 },
  // Left pupil
  { d: "M 140 212 C 141 210 143 210 144 212 C 145 214 144 216 142 216 C 140 216 139 214 140 212 Z", delay: 6.1, duration: 0.4 },
  // Right eye
  { d: "M 192 212 C 188 205 181 202 174 205 C 167 208 164 216 168 222 C 173 228 182 227 188 222 C 192 218 193 215 192 212 Z", delay: 5.6, duration: 1.0 },
  // Right pupil
  { d: "M 180 212 C 181 210 183 210 184 212 C 185 214 184 216 182 216 C 180 216 179 214 180 212 Z", delay: 6.2, duration: 0.4 },
  // Nose bridge
  { d: "M 158 220 L 154 240 C 152 246 150 250 156 253 C 160 255 168 253 165 247 L 163 240", delay: 6.5, duration: 0.9 },
  // Mouth
  { d: "M 144 272 C 149 280 155 284 160 283 C 165 284 171 280 176 272", delay: 7.0, duration: 0.8 },
  // Chin dimple (optional flair)
  { d: "M 158 295 C 159 298 161 298 162 295", delay: 7.5, duration: 0.3 },
];

export default function PortraitDraw() {
  return (
    <svg
      viewBox="0 0 320 480"
      fill="none"
      stroke="#1f2937"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Illustrated portrait of Shane Delaney"
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
    </svg>
  );
}
