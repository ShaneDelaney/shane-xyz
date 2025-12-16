'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/10">
      {/* Main Content */}
      <section className="h-full w-full flex items-center justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 overflow-y-auto scrollbar-hide">
        <div className="max-w-lg mx-auto w-full">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 mb-4"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5">Send a Message</h2>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Open to freelance projects, full-time roles, and creative collaborations. If you're working on something that might be a good fit, feel free to reach out via email or LinkedIn.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-2.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-2.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-2.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } shadow-sm`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-2.5 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center text-xs font-medium">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center text-xs font-medium">
                    Oops! Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
          
          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5"
          >
            <h2 className="text-sm sm:text-base font-semibold text-gray-900 mb-2.5">Direct Contact</h2>
            <div className="space-y-2.5">
              <a
                href="mailto:shanedelaney11@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs text-gray-500">Email</p>
                  <p className="text-xs sm:text-sm font-medium truncate">shanedelaney11@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/shane-delaney-546445179/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs text-gray-500">LinkedIn</p>
                  <p className="text-xs sm:text-sm font-medium">Shane Delaney</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-center"
          >
            <p className="text-[10px] sm:text-xs text-gray-500">
              Based in Los Angeles, CA
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
