'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-32 px-4 max-w-6xl mx-auto min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl font-serif font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-zinc-600 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you as soon as possible.
          </motion.p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full px-8 py-3 bg-black text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status === 'success' && (
            <motion.p 
              className="text-green-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message sent successfully!
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p 
              className="text-red-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>

        <motion.div 
          className="pt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-medium text-gray-800">Or reach out directly:</h2>
          <div className="space-y-2">
            <a 
              href="sms:+12487620695" 
              className="block text-lg text-blue-600 hover:underline"
            >
              (248) 762-0695
            </a>
            <a 
              href="mailto:Shanedelaney11@gmail.com" 
              className="block text-lg text-blue-600 hover:underline"
            >
              Shanedelaney11@gmail.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 