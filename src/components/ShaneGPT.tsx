'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
const FALLBACK = "I don't have a specific answer for that, but you can reach Shane directly at shanedelaney11@gmail.com — he's happy to chat.";

const EASE = [0.16, 1, 0.3, 1] as const;

const SUGGESTED = [
  "What is Shane's current role?",
  "How is Shane working with AI?",
  "What are Shane's core skills?",
  "Is Shane open to new opportunities?",
];

export default function ShaneGPT() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Close panel on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const ask = async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/shanebot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();
      setAnswer(data.answer ?? FALLBACK);
    } catch {
      setAnswer(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(question);
    setQuestion('');
  };

  const reset = () => {
    setAnswer('');
    setQuestion('');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <>
      {/* Floating orb trigger */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: open
            ? 'radial-gradient(circle at 40% 35%, #a78bfa, #6d28d9)'
            : 'radial-gradient(circle at 40% 35%, #c4b5fd, #7c3aed)',
          boxShadow: open
            ? '0 0 0 4px rgba(139,92,246,0.15), 0 0 24px rgba(139,92,246,0.5), 0 0 48px rgba(139,92,246,0.25)'
            : '0 0 0 4px rgba(167,139,250,0.15), 0 0 20px rgba(167,139,250,0.4), 0 0 40px rgba(167,139,250,0.2)',
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
        whileHover={{ scale: 1.08, boxShadow: '0 0 0 6px rgba(139,92,246,0.2), 0 0 32px rgba(139,92,246,0.6), 0 0 60px rgba(139,92,246,0.3)' } as never}
        whileTap={{ scale: 0.93 }}
        aria-label={open ? 'Close' : 'Ask a question about Shane'}
      >
        {/* Glow pulse ring */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.3), transparent 70%)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Icon */}
        <motion.span
          className="text-lg leading-none text-white relative z-10"
          animate={open
            ? { rotate: 135, scale: 1 }
            : { rotate: 0, scale: [1, 1.15, 1] }
          }
          transition={open
            ? { duration: 0.25, ease: EASE }
            : { duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }
          }
        >
          ✦
        </motion.span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Invisible backdrop to close on outside click */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed bottom-20 right-6 z-50 w-[min(380px,calc(100vw-3rem))] bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Ask a question about Shane</p>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-700 transition-colors w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Body */}
              <div className="px-4 py-4 min-h-[160px] max-h-[320px] overflow-y-auto flex flex-col gap-3">

                {/* Suggestions — visible only when idle */}
                <AnimatePresence>
                  {!answer && !loading && (
                    <motion.div
                      key="suggestions"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col gap-1.5"
                    >
                      {SUGGESTED.map((s, i) => (
                        <motion.button
                          key={s}
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.05, ease: EASE }}
                          onClick={() => ask(s)}
                          className="text-left text-xs text-gray-600 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
                        >
                          {s}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Loading dots */}
                <AnimatePresence>
                  {loading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1.5 py-1"
                    >
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Answer — stays visible while user types follow-up */}
                <AnimatePresence>
                  {answer && (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      className="text-sm text-gray-700 leading-relaxed"
                    >
                      {answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="px-4 pb-4">
                <div
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 transition-colors bg-white focus-within:border-gray-500"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder="Ask a question..."
                    maxLength={500}
                    className="flex-1 text-sm text-gray-900 placeholder-gray-400 bg-transparent outline-none"
                  />
                  <motion.button
                    type="submit"
                    disabled={!question.trim() || loading}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 text-white disabled:opacity-25 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Send"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
