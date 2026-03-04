'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { findCachedAnswer, FALLBACK } from '@/lib/shanebot';

const SUGGESTED = [
  "What is Shane's current role?",
  "What are Shane's core skills?",
  "Is Shane open to new opportunities?",
  "What did Shane do at Snap?",
];

export default function ShaneGPT() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const ask = async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setAnswer('');

    // Check cache client-side first (instant)
    const cached = findCachedAnswer(trimmed);
    if (cached) {
      setAnswer(cached);
      setLoading(false);
      return;
    }

    // Fall back to API for uncached questions
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
      {/* Floating trigger */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Ask a question about Shane"
      >
        <span className="text-base leading-none">✦</span>
        <span className="hidden sm:inline">Ask about Shane</span>
        <span className="sm:hidden">Ask</span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed bottom-20 right-6 z-50 w-[min(360px,calc(100vw-3rem))] bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Ask a question about Shane</p>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-gray-700 transition-colors text-xl leading-none w-6 h-6 flex items-center justify-center"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="px-4 py-4 min-h-[160px] flex flex-col gap-3">

                {/* Idle: suggested questions */}
                {!answer && !loading && (
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED.map((s) => (
                      <button
                        key={s}
                        onClick={() => ask(s)}
                        className="text-left text-xs text-gray-600 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {/* Loading */}
                {loading && (
                  <div className="flex items-center gap-2 py-2">
                    <span className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
                        />
                      ))}
                    </span>
                  </div>
                )}

                {/* Answer */}
                {answer && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-3"
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">{answer}</p>
                    <button
                      onClick={reset}
                      className="self-start text-[11px] font-medium text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      Ask another question
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="px-4 pb-4">
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-gray-400 transition-colors bg-white">
                  <input
                    ref={inputRef}
                    type="text"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder="Ask a question..."
                    maxLength={300}
                    className="flex-1 text-sm text-gray-900 placeholder-gray-400 bg-transparent outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!question.trim() || loading}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 text-white disabled:opacity-25 transition-opacity hover:bg-gray-700"
                    aria-label="Send"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
