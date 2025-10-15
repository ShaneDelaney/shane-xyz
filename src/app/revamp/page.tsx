'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function RevampHero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gray-100/60 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-4 py-10 sm:py-16 w-full max-w-3xl mx-auto text-center"
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Helping brands catch what's next
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trend insights, content strategy, and creative consulting by Shane Delaney.
        </motion.p>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
          <Link href="/work" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm sm:text-base"
            >
              See selected work
            </motion.button>
          </Link>
          <Link href="/contact" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-gray-200 bg-white text-gray-900 px-6 py-3 text-sm sm:text-base"
            >
              Get in touch
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function RevampSections() {
  const items = [
    {
      title: 'Trend Curation',
      desc: 'Surfacing emerging behaviors early, with context and creative implications.',
    },
    {
      title: 'Editorial Systems',
      desc: 'Building calendars, formats, and voice guidelines that scale across teams.',
    },
    {
      title: 'Creative Strategy',
      desc: 'Turning insights into platform-native concepts people actually want to watch.',
    },
  ];
  return (
    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RevampPage() {
  return (
    <div className="bg-white min-h-screen">
      <RevampHero />
      <RevampSections />
    </div>
  );
}



