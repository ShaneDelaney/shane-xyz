'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const EASE = [0.16, 1, 0.3, 1] as const;

const FALLBACK = "I don't have a specific answer for that — reach Shane directly at shanedelaney11@gmail.com.";

// Renders **bold**, - bullet lines, and \n line breaks
function renderMarkdown(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = (key: string) => {
    if (bullets.length === 0) return;
    elements.push(
      <ul key={key} className="mt-1.5 space-y-1 pl-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-1.5">
            <span className="mt-[5px] w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          </li>
        ))}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((line, i) => {
    if (line.startsWith('- ')) {
      bullets.push(line.slice(2));
    } else {
      flushBullets(`bullets-${i}`);
      if (line.trim()) {
        elements.push(
          <p key={i} className={i > 0 ? 'mt-1.5' : ''} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        );
      }
    }
  });
  flushBullets('bullets-end');

  return <>{elements}</>;
}

const CONTEXTS = [
  { key: 'home',    label: 'Home',    icon: '⌂' },
  { key: 'about',   label: 'About',   icon: '◉' },
  { key: 'work',    label: 'Work',    icon: '◈' },
  { key: 'contact', label: 'Contact', icon: '◎' },
];

const CONTEXT_SUGGESTIONS: Record<string, string[]> = {
  home: [
    "What is Shane's current role?",
    "What makes Shane stand out?",
    "Is Shane open to new opportunities?",
    "Where is Shane based?",
  ],
  about: [
    "Tell me about Shane's background.",
    "What are Shane's core skills?",
    "How is Shane working with AI?",
    "What's Shane's educational background?",
  ],
  work: [
    "What did Shane accomplish at Meta?",
    "What was Shane's role at Snap?",
    "Tell me about the GTM guide series.",
    "What are Shane's biggest projects?",
  ],
  contact: [
    "How can I contact Shane?",
    "Is Shane open to freelance work?",
    "What kind of roles is Shane looking for?",
    "What's the best way to reach Shane?",
  ],
};

function pathnameToContext(pathname: string): string {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/work')) return 'work';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'home';
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function ShaneGPT() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState(() => pathnameToContext(pathname));
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Sync context when route changes but don't close panel
  useEffect(() => {
    setContext(pathnameToContext(pathname));
  }, [pathname]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const ask = async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setLoading(true);

    try {
      const res = await fetch('/api/shanebot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', text: data.answer ?? FALLBACK }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: FALLBACK }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(question);
    setQuestion('');
  };

  const suggestions = CONTEXT_SUGGESTIONS[context];
  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Trigger */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium shadow-lg hover:bg-gray-800 transition-colors"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? 'Close' : 'Ask a question about Shane'}
      >
        <motion.span
          className="text-base leading-none inline-block"
          animate={open ? { rotate: 135, scale: 1 } : { rotate: 0, scale: [1, 1.2, 1] }}
          transition={open
            ? { duration: 0.25, ease: EASE }
            : { duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }
          }
        >
          ✦
        </motion.span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'ask'}
            className="hidden sm:inline"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: EASE }}
          >
            {open ? 'Close' : 'Ask about Shane'}
          </motion.span>
        </AnimatePresence>
        <span className="sm:hidden">{open ? '×' : 'Ask'}</span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed bottom-20 right-6 z-50 flex overflow-hidden rounded-2xl shadow-2xl border border-white/10"
              style={{
                width: 'min(600px, calc(100vw - 2rem))',
                height: 'min(520px, calc(100vh - 8rem))',
              }}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              {/* Sidebar — sets context, never navigates */}
              <div className="w-40 flex-shrink-0 bg-[#111] flex flex-col py-5">
                <p className="text-[9px] font-semibold text-gray-600 uppercase tracking-widest px-4 mb-3">Context</p>
                <div className="flex flex-col gap-0.5 px-2">
                  {CONTEXTS.map(ctx => {
                    const isActive = context === ctx.key;
                    return (
                      <button
                        key={ctx.key}
                        onClick={() => { setContext(ctx.key); setMessages([]); }}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 text-left w-full ${
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                        }`}
                      >
                        <span className="text-xs opacity-60">{ctx.icon}</span>
                        <span className={isActive ? 'font-medium' : ''}>{ctx.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="sidebar-active"
                            className="ml-auto w-1 h-1 rounded-full bg-white/60"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-auto px-4 pb-1">
                  <p className="text-[9px] text-gray-700 leading-relaxed">
                    Switch context to change suggested questions.
                  </p>
                </div>
              </div>

              {/* Chat */}
              <div className="flex-1 flex flex-col bg-white min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">✦</span>
                    <p className="text-sm font-semibold text-gray-900">Ask about Shane</p>
                  </div>
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

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2.5">
                  {/* Context-aware suggestions */}
                  <AnimatePresence mode="wait">
                    {!hasMessages && !loading && (
                      <motion.div
                        key={`suggestions-${context}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: EASE }}
                        className="flex flex-col gap-1.5"
                      >
                        <p className="text-xs text-gray-400 mb-1">
                          Suggested — {CONTEXTS.find(c => c.key === context)?.label}
                        </p>
                        {suggestions.map((s, i) => (
                          <motion.button
                            key={s}
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.18, delay: i * 0.04, ease: EASE }}
                            onClick={() => ask(s)}
                            className="text-left text-xs text-gray-600 px-3 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
                          >
                            {s}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[86%] px-3 py-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-gray-900 text-white rounded-br-sm'
                          : 'bg-gray-100 text-gray-700 rounded-bl-sm'
                      }`}>
                        {msg.role === 'assistant' ? renderMarkdown(msg.text) : msg.text}
                      </div>
                    </motion.div>
                  ))}

                  <AnimatePresence>
                    {loading && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2.5 flex items-center gap-1.5">
                          {[0, 1, 2].map(i => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div ref={bottomRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="px-4 pb-4 pt-2">
                  <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 focus-within:border-gray-400 transition-colors">
                    <input
                      ref={inputRef}
                      type="text"
                      value={question}
                      onChange={e => setQuestion(e.target.value)}
                      placeholder="Ask anything..."
                      maxLength={500}
                      className="flex-1 text-sm text-gray-900 placeholder-gray-400 bg-transparent outline-none"
                    />
                    <motion.button
                      type="submit"
                      disabled={!question.trim() || loading}
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-900 text-white disabled:opacity-20 transition-opacity"
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
