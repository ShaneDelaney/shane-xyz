'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  timeline: string;
  description: string;
  longDescription?: string;
  details: string[];
  tags: string[];
  metrics?: string[];
  image?: string;
  link?: string;
  relatedLinks?: {
    title: string;
    url: string;
    description?: string;
  }[];
}

const PDFPreview = ({ url, title }: { url: string; title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mt-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700 mb-3"
      >
        <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {isOpen ? "Hide preview" : "View report preview"}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="relative border border-gray-200 rounded-lg overflow-hidden w-full">
              <div className="absolute inset-0 pointer-events-none" style={{ 
                background: 'linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.8) 70%, white 100%)',
                zIndex: 10 
              }}></div>
              
              <div className="h-96 overflow-hidden relative">
                <iframe 
                  src={url} 
                  className="w-full h-full"
                  style={{ border: 'none' }}
                >
                  <div className="flex items-center justify-center h-full bg-gray-50">
                    <p>PDF preview unavailable</p>
                  </div>
                </iframe>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center z-20">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white text-sm font-medium rounded-full px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  View Full Report
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const projects: Project[] = [
  {
    id: "meta-horizon-gtm-guides",
    title: "Meta Horizon Go-To-Market Developer Guides",
    company: "Meta",
    role: "Content Marketing Coordinator",
    timeline: "2025",
    description: "Led the end-to-end creation of a four-part Meta Horizon Go-To-Market guide series for developers, coordinating publication schedules and owning all copy.",
    longDescription: "Led the end-to-end creation of a four-part Meta Horizon Go-To-Market guide series for developers, coordinating publication schedules and owning all copy. Played dual roles as content strategist and technical writer, ensuring each guide was on-message and technically accurate. The series provides a comprehensive go-to-market playbook for VR developers, covering marketing strategy, influencer partnerships, social media/community engagement, and marketing asset creation for VR apps and Horizon Worlds.",
    details: [
      "Coordinated publication schedules and owned all copy for four comprehensive educational guides",
      "Defined and executed content strategy aligned with Meta's developer marketing goals",
      "Crafted guides addressing critical needs from high-level marketing strategy to hands-on tactics like community-building and influencer collaboration",
      "Managed project lifecycle from initial outline to final web publication, coordinating cross-functional reviews with product managers, developer relations, designers, and legal",
      "Maintained editorial calendar with tight deadlines, resulting in on-schedule release of all guides",
      "Applied content marketing principles to maximize impact, structuring content with clear headings, visuals, and examples",
      "Created supplementary worksheets and checklists to accompany the Marketing Plan guide, enabling developers to apply concepts directly",
      "Ensured consistent, developer-friendly tone aligned with Meta's branding, turning complex marketing concepts into actionable advice"
    ],
    tags: ["Content Strategy", "Technical Writing", "Project Management", "Content Marketing", "Developer Education"],
    metrics: ["4-part guide series", "Cornerstone resources in Meta developers portal", "Enhanced Meta Horizon developer experience"],
    image: "/meta.png",
    relatedLinks: [
      {
        title: "Develop a Marketing Plan for Your VR App",
        url: "https://developers.meta.com/horizon/resources/gtm-marketing-plan",
        description: "Guide covering high-level marketing strategy, audience research, and identifying target demographics and optimal channels for VR apps."
      },
      {
        title: "Leverage Influencer Partnerships",
        url: "https://developers.meta.com/horizon/resources/gtm-influencer-marketing",
        description: "Guide on collaborating with gaming influencers and building strategic partnerships to grow VR app visibility."
      },
      {
        title: "Build Social Media and Community Engagement",
        url: "https://developers.meta.com/horizon/resources/gtm-social-media",
        description: "Guide on community-building tactics, including forum engagement and social media strategies for VR developers."
      },
      {
        title: "Master Marketing Assets for VR Apps",
        url: "https://developers.meta.com/horizon/resources/gtm-marketing-assets",
        description: "Guide on creating effective marketing assets and visual content for promoting VR apps and Horizon Worlds experiences."
      }
    ]
  },
  {
    id: "meta-horizon-builder-stories",
    title: "Meta Horizon Builder Story Spotlights",
    company: "Meta",
    role: "Content Marketing Coordinator",
    timeline: "2025",
    description: "Led narrative strategy and editorial oversight for a series of builder story spotlights on the Meta Horizon Developers Blog, showcasing diverse creator journeys and success stories in VR.",
    longDescription: "Led narrative strategy and editorial oversight for a series of builder story spotlights on the Meta Horizon Developers Blog, showcasing diverse creator journeys and success stories in VR. Each feature explores unique paths to success—from entrepreneurial crowdfunding campaigns to first-time creators building top-ranked worlds, from community-driven worldbuilding to cultural storytelling that expands VR to new regions. These stories educate and inspire VR developers while driving adoption of Horizon Worlds features.",
    details: [
      "Led narrative direction and shaped story angles for each builder spotlight, ensuring diverse perspectives and compelling storytelling",
      "Conducted interviews and research to surface authentic insights about creator journeys and achievements",
      "Provided editorial oversight to ensure clarity, accuracy, and brand voice alignment across all features",
      "Guided agency partners on execution and content delivery",
      "Managed publication pipeline for builder stories series on Meta Horizon Developers Blog"
    ],
    tags: ["Narrative Direction", "Editorial Oversight", "Builder Stories", "Developer Stories", "Horizon Worlds"],
    metrics: ["4-part builder stories series", "Meta Horizon Developers Blog", "Creator spotlight series"],
    image: "/meta.png",
    relatedLinks: [
      {
        title: "Vail VR: From Couch-Surfing to $15M in Crowdfunding",
        url: "https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/",
        description: "Builder story spotlighting Vail VR's remarkable journey from humble beginnings to raising $15M in crowdfunding. This piece explores the entrepreneurial path of VR developers, highlighting how vision, persistence, and community support can transform a startup idea into a major success in the VR space."
      },
      {
        title: "Matthiaos: Pioneering Change in Worlds Through Passion and Community",
        url: "https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community",
        description: "Feature spotlight on Matthiaos, a leading creator whose work blends worldbuilding, community, and personal storytelling inside Horizon Worlds. This piece showcases how creators are building meaningful experiences and communities in the metaverse."
      },
      {
        title: "Grow a Farm: How Two Gaming Influencers Built a Top-Ranked World with Zero Development Experience",
        url: "https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world",
        description: "A success story spotlighting how two gaming influencers with no formal development experience created a top-ranked Horizon world from scratch. This piece highlights how vision, community engagement, and a dash of collaboration can turn first-time builders into standout creators in VR."
      },
      {
        title: "Saydeechan: A Solo Creator's Journey to Bring Worlds to Japan",
        url: "https://developers.meta.com/horizon/blog/saydeechan-bringing-worlds-to-japan",
        description: "A creator spotlight on Sade Young (aka \"Saydeechan\"), who helped launch Horizon Worlds in Japan by building culturally rich, community-driven spaces. This piece explores how one creator blended art, fashion, and cultural storytelling to make virtual worlds feel like home for a new regional community."
      }
    ]
  },
  {
    id: "nux-project",
    title: "NUX Project",
    company: "Snapchat",
    role: "Trend Curator",
    timeline: "Mar 2025–Present",
    description: "Curated high-quality user-generated content for Snapchat's New User Experience, creating personalized content feeds for teens (13-17).",
    longDescription: "Developed personalized onboarding content flows that guide new users through Snapchat's features while showcasing high-performing UGC from creators that resonates with teen audiences (13-17), balancing algorithmic signals with human editorial input.",
    details: [
      "Reviewed and recommended 300+ content pieces for diverse teen cohorts segmented by interest",
      "Filtered content using data-driven cohort guidelines (M1.2 incremental data)",
      "Collaborated with product engineering through dedicated Slack channels (#nux-curated-feed)",
      "Ensured demographic fit while maintaining editorial quality standards"
    ],
    tags: ["Teen Content Strategy", "Cohort Curation", "Product Collaboration"],
    metrics: ["13–17 teen audience", "300+ pieces per cohort", "Diverse creators"],
    image: "/assets/snap-logo.png",
    relatedLinks: [
      {
        title: "New User Experience (NUX)",
        url: "",
        description: "Designed personalized onboarding content flows that guide new users through Snapchat's features while showcasing high-performing UGC from creators that resonates with teen audiences (13-17)."
      },
      {
        title: "Snap Feed Curation",
        url: "",
        description: "Developed editorial standards for the AI-powered Spotlight feed, focusing on user-generated content discovery and engagement, helping surface the most relevant creator content during critical first-week user journeys."
      }
    ]
  },
  {
    id: "say-it-in-a-snap",
    title: "Say It in a Snap",
    company: "Snapchat",
    role: "Trend Curator",
    timeline: "Mar 2025–Present",
    description: "Led editorial for Snap's Times Square takeover campaign. Curated viral Snaps and collaborated with cross-functional teams.",
    longDescription: "Curated authentic user content for Snap's high-profile Times Square campaign, selecting standout user-generated content that showcased the platform's authentic creative community across outdoor media placements.",
    details: [
      "Selected standout UGC for Times Square subway takeovers",
      "Collaborated with marketing on merchandising and placement",
      "Aligned creator content with brand campaign messaging",
      "Increased creator visibility through strategic curation"
    ],
    tags: ["Times Square Placement", "UGC Merchandising", "Cross-Team Collaboration"],
    metrics: ["500K+ daily impressions", "Featured in NYC subway"],
    image: "/assets/snap-logo.png"
  },
  {
    id: "boosted-content",
    title: "Boosted Content Initiative",
    company: "Snapchat",
    role: "Trend Curator",
    timeline: "Mar 2025–Present",
    description: "Launched a platform initiative with Snap's data science team to surface and support emerging creators through a custom content system.",
    longDescription: "Collaborated with data science and product teams to develop an internal system for identifying promising creator content, increasing visibility for emerging voices and improving monetization opportunities across the platform.",
    details: [
      "Translated complex data findings into strategic content guidance",
      "Created internal documentation for 10+ cross-functional teams",
      "Built custom web app tool using Cursor IDE",
      "Influenced monetization strategy across platform"
    ],
    tags: ["Creator Tools", "Data Strategy", "Cross-Team Collaboration"],
    metrics: ["1M+ monetized creators", "Data-driven programming"],
    image: "/assets/snap-logo.png"
  },
  {
    id: "core-insights-research",
    title: "Core Insights Research",
    company: "StockX",
    role: "Brand Creative Production",
    timeline: "Dec 2024",
    description: "Contributed to StockX's Gen Z research report, analyzing consumer behavior in LA + NYC.",
    longDescription: "Authored a comprehensive trend report identifying key cultural figures, digital behaviors, and emerging subcultures that shaped StockX's 2025 brand strategy and campaign planning.",
    details: [
      "Mapped digital behaviors including curated sharing and resale culture",
      "Highlighted key subcultures: Gorp Core, DIY, archive styling",
      "Featured affinity brands and figures for campaign targeting",
      "Provided campaign and creative direction guidance for 2025"
    ],
    tags: ["Gen Z Strategy", "Trend Research", "Cultural Insights"],
    metrics: ["18–25 male demo", "LA & NYC markets", "2025 campaign planning"],
    image: "/assets/stockx-logo.png",
    relatedLinks: [
      {
        title: "Trend Report Excerpt",
        url: "/assets/StockXCoreInsights.pdf",
        description: "Strategic analysis of Gen Z consumer behavior in key markets (exclusive preview of full research report)"
      }
    ]
  },
  {
    id: "campaign-shoot-highlights",
    title: "Campaign Shoot Highlights",
    company: "StockX",
    role: "Brand Creative Production",
    timeline: "2022–2024",
    description: "Supported on-set production for 3 major campaigns, managing media asset coordination and influencer logistics.",
    longDescription: "Coordinated production logistics across multiple high-profile campaign shoots, managing talent schedules, location details, and digital asset organization while supporting the creative direction team.",
    details: [
      "Managed production logistics including talent scheduling and location setup",
      "Supported visual execution on-set with creative team",
      "Organized digital assets for post-production workflows",
      "Contributed to StockX's cultural positioning through visual storytelling"
    ],
    tags: ["Production Coordination", "Visual Storytelling", "Talent Management"],
    metrics: ["10M+ cross-platform impressions", "3 major campaigns"],
    image: "/assets/stockx-logo.png",
    relatedLinks: [
      {
        title: "Behind the Streams with Sydeon",
        url: "https://www.youtube.com/watch?v=0uBuJh7sEjU",
        description: "Campaign featuring gaming influencer Sydeon"
      },
      {
        title: "Briana King Joins StockX",
        url: "https://www.youtube.com/watch?v=V8sx2CJ9x4s",
        description: "Skate community leader and activist announcement"
      },
      {
        title: "What Drives Brittney Elena | StockX",
        url: "https://www.youtube.com/watch?v=3-loqESOCMI",
        description: "Profile on basketball influencer and personality"
      }
    ]
  },
  {
    id: "tiny-texts",
    title: "Tiny Texts",
    company: "Phony Content",
    role: "Content Manager",
    timeline: "2024–2025",
    description: "Wrote and programmed 50+ viral Snapchat stories.",
    longDescription: "Created compelling short-form narratives for the Tiny Texts brand on Snapchat, developing editorial systems to ensure consistent voice and quality across a rotating writing team.",
    details: [
      "Created style guides and templates for consistent storytelling",
      "Developed voice and tone documentation for team alignment",
      "Managed editorial calendar across rotating writing team",
      "Optimized content for viral metrics and engagement"
    ],
    tags: ["Viral Storytelling", "Content Curation", "Editorial Management"],
    metrics: ["7.89M+ avg. views/story", "35–45% SPV"],
    image: "/assets/Phony-logo.png",
    relatedLinks: [
      {
        title: "Cheer Squad",
        url: "https://snapchat.com/t/J2MP13US",
        description: "Popular story about competitive cheer team dynamics (6.32M views, 43K followers, 39% completion rate)"
      },
      {
        title: "Inhaler",
        url: "https://snapchat.com/t/wPotqUYw",
        description: "Teen drama centered around school relationships (4.39M views, 20.3K followers, 42% completion rate)"
      },
      {
        title: "Snapscore",
        url: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168",
        description: "Comedy about social media status competitions (3.59M views, 10K followers, 35% completion rate)"
      }
    ]
  },
  {
    id: "collider-seo",
    title: "Film & TV SEO Features",
    company: "Collider",
    role: "SEO Writer",
    timeline: "2023",
    description: "Delivered evergreen entertainment content optimized for search.",
    longDescription: "Produced SEO-optimized articles on film and television while maintaining editorial quality, balancing keyword strategy with compelling storytelling in a fast-paced newsroom environment.",
    details: [
      "Produced keyword-optimized articles driving organic traffic",
      "Balanced SEO requirements with editorial quality",
      "Met tight deadlines in fast-paced newsroom environment",
      "Created evergreen content with sustained traffic value"
    ],
    tags: ["SEO Writing", "Editorial Content", "Film & TV"],
    metrics: ["15%+ organic traffic growth", "High reader retention"],
    image: "/assets/collider-logo.png",
    relatedLinks: [
      {
        title: "Actors and Their Favorite Movies",
        url: "https://collider.com/actors-and-their-favorite-movies/",
        description: "Evergreen feature on celebrities' film preferences (125K+ organic views, 4:23 avg. time on page, top 3 Google result)"
      },
      {
        title: "Hardest Working Characters in Succession",
        url: "https://collider.com/hardest-workers-in-succession-ranked/",
        description: "Analysis of HBO's award-winning drama series (89K+ views during final season, 22% social share rate)"
      },
      {
        title: "Movies To Get You Ready For Fall",
        url: "https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/",
        description: "Seasonal content with perennial search value (76K+ views, 18% return visitor rate, featured in Google Discover)"
      }
    ]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      id={project.id}
      className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Logo */}
        {project.image && (
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={project.image}
              alt={`${project.company} logo`}
              fill
              className="object-contain opacity-60"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-2">
              <span>{project.company}</span>
              <span>•</span>
              <span className="break-words">{project.role}</span>
              <span>•</span>
              <span>{project.timeline}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>
          
          {/* Metrics */}
          {project.metrics && (
            <div className="mb-4 py-4 border-y border-gray-200">
              <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                Key Metrics
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="text-base font-medium text-gray-900">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Related Links - Always Visible */}
          {project.relatedLinks && project.relatedLinks.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              {project.relatedLinks.map((link, i) => (
                <div key={i}>
                  {link.url.endsWith('.pdf') ? (
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">
                        {link.title}
                      </h4>
                      {link.description && (
                        <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                      )}
                      <PDFPreview url={link.url} title={link.title} />
                    </div>
                  ) : link.url ? (
                    <Link 
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : "_self"}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                      className="block group"
                    >
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-gray-700 inline-flex items-center gap-2 mb-1">
                        {link.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </h4>
                      {link.description && (
                        <p className="text-sm text-gray-600">{link.description}</p>
                      )}
                    </Link>
                  ) : (
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">
                        {link.title}
                      </h4>
                      {link.description && (
                        <p className="text-sm text-gray-600">{link.description}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>('');
  
  // Group projects by company
  const projectsByCompany = projects.reduce((acc, project) => {
    if (!acc[project.company]) {
      acc[project.company] = [];
    }
    acc[project.company].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
  
  const companies = Object.keys(projectsByCompany);
  
  return (
    <div className="relative min-h-screen">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/10 -z-10" />
      
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/work" className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 transition-colors">
              <span>←</span>
              <span>Back to Experience</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Detailed case studies showcasing strategic thinking, creative execution, and measurable results across platforms.
            </p>
          </motion.div>
          
          {/* Mobile: Horizontal Scroll Navigation */}
          <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-2">
              {companies.map((company) => (
                <a
                  key={company}
                  href={`#${company.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(company.toLowerCase());
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  {company} ({projectsByCompany[company].length})
                </a>
              ))}
            </div>
          </div>

          {/* Two Column Layout: Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Desktop: Sticky Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                  <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
                    Jump to
                  </h3>
                  <nav className="space-y-2">
                    {companies.map((company) => (
                      <a
                        key={company}
                        href={`#${company.toLowerCase()}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(company.toLowerCase());
                          if (element) {
                            const offset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                            setActiveSection(company.toLowerCase());
                          }
                        }}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeSection === company.toLowerCase()
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {company}
                        <span className="ml-2 text-xs opacity-70">
                          ({projectsByCompany[company].length})
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
            
            {/* Main Content - Projects by Company */}
            <div className="col-span-1 lg:col-span-9 space-y-12 sm:space-y-16">
              {companies.map((company, companyIndex) => (
                <motion.section
                  key={company}
                  id={company.toLowerCase()}
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: companyIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Company Header */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                      {company}
                    </h2>
                    <div className="h-1 w-16 bg-gray-900 rounded-full"></div>
                  </div>
                  
                  {/* Projects for this company */}
                  <div className="space-y-6 sm:space-y-8">
                    {projectsByCompany[company].map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

