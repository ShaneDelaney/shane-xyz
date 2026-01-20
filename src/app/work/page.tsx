'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Role {
  id: string;
  company: string;
  title: string;
  timeline: string;
  description: string[];
  logo?: string;
  category: string;
  portfolioLinks?: string[];
}

const roles: Role[] = [
  {
    id: 'meta',
    company: 'Meta',
    title: 'Content Marketing Coordinator II',
    timeline: 'October 2025 – Present',
    description: [
      'Lead narrative strategy for Horizon\'s developer ecosystem, crafting blog posts, case studies, and developer spotlights that educate and inspire VR creators while driving adoption of new Horizon Worlds features.',
      'Led the end-to-end creation of a four-part Meta Horizon Go-To-Market guide series for developers, coordinating publication schedules and owning all copy. The series covers developing marketing plans, leveraging influencer partnerships, building social media/community engagement, and mastering marketing assets for VR apps and Horizon Worlds.',
      'Led narrative strategy and editorial oversight for a six-part builder story spotlight series on the Meta Horizon Developers Blog, showcasing diverse creator journeys and success stories in VR. Managed the full editorial pipeline—from sourcing creator stories and conducting interviews to guiding agency writers and publishing—resulting in 10+ major pieces that drive developer engagement and platform adoption.',
      'Manage the end-to-end editorial pipeline using data-driven insights to identify high-impact stories, ensuring each piece aligns with developer needs and platform goals while maintaining editorial excellence and brand voice consistency.'
    ],
    logo: '/meta.png',
    category: 'tech',
    portfolioLinks: ['meta-horizon-gtm-guides', 'meta-horizon-builder-stories']
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    title: 'Trend Producer',
    timeline: 'March 2025 – October 2025',
    description: [
      'Managed a daily curation pipeline of 1,000+ creator submissions for Snapchat Spotlight, using performance data and analytics to inform content picks and strategy, achieving retention rates 10% higher than platform averages.',
      'Collaborated with product and data science teams to launch trend-driven initiatives – including a tailored new-user experience – that boosted engagement among teen audiences through data-informed content selection and strategic curation.'
    ],
    logo: '/assets/snap-logo.png',
    category: 'tech',
    portfolioLinks: ['nux-project', 'say-it-in-a-snap', 'boosted-content']
  },
  {
    id: 'phony',
    company: 'Phony Content',
    title: 'Content Manager',
    timeline: 'May 2024 – March 2025',
    description: [
      'Oversaw the production of 50+ scripted Snapchat stories, working closely with writers, editors, and designers. Streamlined workflows to improve story pacing, tone, and consistency—delivering highly engaging mobile content at scale.'
    ],
    logo: '/assets/Phony-logo.png',
    category: 'creative',
    portfolioLinks: ['tiny-texts']
  },
  {
    id: 'stockx',
    company: 'StockX',
    title: 'Brand Creative Production (Freelance)',
    timeline: 'September 2021 & December 2024',
    description: [
      'Coordinated multiple lifestyle photo and video shoots for major campaigns, ensuring seamless execution across creative teams. Authored the 2024 Core Insights Report, a culture-driven analysis of Gen Z trends that informed StockX\'s 2025 marketing strategy.'
    ],
    logo: '/assets/stockx-logo.png',
    category: 'creative',
    portfolioLinks: ['core-insights-research', 'campaign-shoot-highlights']
  },
  {
    id: 'collider',
    company: 'Collider',
    title: 'SEO Content Writer',
    timeline: 'August 2022 – October 2022',
    description: [
      'Wrote SEO-driven articles on entertainment and gaming, boosting organic web traffic by ~15% in two months.'
    ],
    logo: '/assets/collider-logo.png',
    category: 'writing',
    portfolioLinks: ['collider-seo']
  },
  {
    id: 'cappuccino',
    company: 'Cappuccino Man',
    title: 'Copywriter (Project)',
    timeline: 'March 2024',
    description: [
      'Developed and executed an email marketing campaign for a D2C coffee brand, creating compelling copy that increased customer engagement while maintaining a consistent brand voice.'
    ],
    logo: '/cap_man.png',
    category: 'writing'
  }
];

const RoleCard = ({ role, index }: { role: Role; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasPortfolioLinks = role.portfolioLinks && role.portfolioLinks.length > 0;
  
  const cardContent = (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-3 transition-shadow ${
        hasPortfolioLinks ? 'hover:shadow-md cursor-pointer hover:border-gray-300' : 'hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Logo */}
        {role.logo && (
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              fill
              className="object-contain"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-1.5">
            <h3 className="text-base font-semibold text-gray-900 mb-0.5">
              {role.company}
            </h3>
            <p className="text-xs text-gray-700 font-medium mb-0.5">
              {role.title}
            </p>
            <p className="text-[10px] text-gray-500">
              {role.timeline}
            </p>
          </div>
            
          {/* Description */}
          <div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {role.description[0]}
            </p>
            
            {/* Additional descriptions when expanded */}
            {isExpanded && role.description.length > 1 && (
              <div className="space-y-1.5 mt-1.5">
                {role.description.slice(1).map((desc, idx) => (
                  <p key={idx} className="text-xs text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            )}
            
            {/* Toggle button if multiple descriptions */}
            {role.description.length > 1 && (
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-[10px] font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center gap-1 mt-1.5"
              >
                {isExpanded ? 'Show less' : 'Show more'}
                <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
            )}
            
            {/* Portfolio link indicator */}
            {hasPortfolioLinks && (
              <div className="mt-1.5 pt-1.5 border-t border-gray-100">
                <span className="text-[10px] text-gray-500 inline-flex items-center gap-1">
                  View projects
                  <span>→</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  return hasPortfolioLinks && role.portfolioLinks?.[0] ? (
    <Link href={`/work/portfolio#${role.portfolioLinks[0]}`} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default function Work() {
  const [filter, setFilter] = useState<string>('all');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  const filteredRoles = filter === 'all' 
    ? roles 
    : roles.filter(role => role.category === filter);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 -z-10" />
      
      {/* Header */}
      <section className="h-full w-full flex items-center justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 overflow-y-auto scrollbar-hide">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-3 sm:mb-4 md:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-1.5 sm:mb-2">
                Work
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mb-2 sm:mb-3">
                Storytelling and creative strategy for tech companies—turning complex products into compelling narratives.
              </p>
              <Link href="/work/portfolio" className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-600 hover:text-gray-900 transition-colors">
                <span>View portfolio</span>
                <span>→</span>
              </Link>
            </div>
          
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
              {[
                { value: 'all', label: 'All' },
                { value: 'tech', label: 'Tech' },
                { value: 'creative', label: 'Creative' },
                { value: 'writing', label: 'Writing' }
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                    filter === tab.value
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Timeline - Compact */}
            <div className="space-y-1.5 sm:space-y-2 max-h-[50vh] overflow-y-auto scrollbar-hide">
              {filteredRoles.map((role, index) => (
                <RoleCard key={role.id} role={role} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
