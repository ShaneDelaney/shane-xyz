'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
      'Lead narrative strategy for Horizon's developer ecosystem, crafting blog posts, case studies, and developer spotlights that educate and inspire VR creators while driving adoption of new Horizon Worlds features.',
      'Manage the end-to-end editorial pipeline – from sourcing creator stories and conducting interviews to guiding agency writers and publishing on the Horizon Developers Blog.'
    ],
    logo: '/meta.png',
    category: 'tech',
    portfolioLinks: ['matthiaos-horizon-blog', 'grow-a-farm-horizon-blog', 'saydeechan-horizon-blog']
  },
  {
    id: 'snap',
    company: 'Snap Inc.',
    title: 'Trend Producer',
    timeline: 'March 2025 – October 2025',
    description: [
      'Managed a daily curation pipeline of 1,000+ creator submissions for Snapchat Spotlight, using performance data to inform content picks and strategy.',
      'Collaborated with product and data science teams to launch trend-driven initiatives – including a tailored new-user experience – that boosted engagement among teen audiences.'
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
      'Coordinated multiple lifestyle photo and video shoots for major campaigns, ensuring seamless execution across creative teams. Authored the 2024 Core Insights Report, a culture-driven analysis of Gen Z trends that informed StockX's 2025 marketing strategy.'
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
      className={`bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 transition-shadow ${
        hasPortfolioLinks ? 'hover:shadow-lg cursor-pointer hover:border-gray-300' : 'hover:shadow-lg'
      }`}
    >
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Logo */}
          {role.logo && (
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src={role.logo}
                alt={`${role.company} logo`}
                fill
                className="object-contain"
              />
                </div>
          )}
          
          {/* Content */}
          <div className="flex-1 min-w-0 w-full">
            {/* Header */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                {role.company}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium mb-1.5 sm:mb-2">
                {role.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                {role.timeline}
              </p>
            </div>
              
              {/* Description */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {role.description[0]}
              </p>
              
              {/* Additional descriptions when expanded */}
              {isExpanded && role.description.length > 1 && (
                <div className="space-y-2 sm:space-y-3">
                  {role.description.slice(1).map((desc, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
                  className="text-xs sm:text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center gap-1 mt-2"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                  <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    ↓
                                  </span>
                </button>
              )}
              
              {/* Portfolio link indicator */}
              {hasPortfolioLinks && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <span className="text-xs sm:text-sm text-gray-500 inline-flex items-center gap-1">
                    View related projects
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
  
  const filteredRoles = filter === 'all' 
    ? roles 
    : roles.filter(role => role.category === filter);

  return (
    <div className="relative min-h-screen">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/10 -z-10" />
      
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Work
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mb-3 sm:mb-4">
              A timeline of roles spanning content strategy, creative marketing, and digital storytelling across tech and media.
            </p>
            <Link href="/work/portfolio" className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <span>View detailed portfolio projects</span>
              <span>→</span>
            </Link>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 md:mb-12 pb-4 sm:pb-6 border-b border-gray-200">
            {[
              { value: 'all', label: 'All' },
              { value: 'tech', label: 'Tech' },
              { value: 'creative', label: 'Creative' },
              { value: 'writing', label: 'Writing' }
            ].map((tab) => (
                <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Timeline */}
          <div className="space-y-4 sm:space-y-6">
            {filteredRoles.map((role, index) => (
              <RoleCard key={role.id} role={role} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
