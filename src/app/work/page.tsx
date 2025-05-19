'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Define project interface with expanded details
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
  bgColor?: string;
  relatedLinks?: {
    title: string;
    url: string;
    description?: string;
  }[];
}

// New PDF Preview component
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
                <div className="absolute inset-0 pointer-events-none z-10"></div>
                <object 
                  data={url} 
                  type="application/pdf"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                >
                  <div className="flex items-center justify-center h-full bg-gray-50">
                    <p>PDF preview unavailable</p>
                  </div>
                </object>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center z-20">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white text-sm font-medium rounded-full px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  Request Full Report
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Project data with Apple-style descriptions
const projects: Project[] = [
  {
    id: "nux-project",
    title: "NUX Project",
    company: "Snapchat",
    role: "Trend Curator",
    timeline: "Mar 2025–Present",
    description: "Spearheaded Snapchat's teen onboarding strategy (13–17), curating 300+ Snaps and developing a Gen Z-informed editorial feed.",
    longDescription: "Led editorial strategy for Snapchat's New User Experience, building a curated first-week content feed optimized for teen audiences. Balanced algorithmic signals with human editorial input to drive higher retention and platform adoption.",
    details: [
      "Curated 300+ Snaps across Entertainment, Gaming, Fitness, and Tech categories",
      "Identified content gaps and pitched ideal creator partnerships",
      "Optimized for engagement and time-to-post metrics",
      "Partnered with UX research, data, and product teams"
    ],
    tags: ["Gen Z Strategy", "Content Curation", "Product Collaboration"],
    metrics: ["13–17 teen audience", "300+ curated Snaps", "Improved retention"],
    image: "/assets/snap-logo.png",
    bgColor: "#f9f9f9",
    relatedLinks: [
      {
        title: "New User Experience (NUX)",
        url: "",
        description: "Designed personalized onboarding content flows that guide new users through Snapchat's features while showcasing high-performing UGC from creators that resonates with teen audiences (13-17)."
      },
      {
        title: "Snap Feed Curation",
        url: "",
        description: "Developed editorial standards for the AI-powered Snap Feed, which organizes users' memories and camera roll content into personalized collections, enhancing discovery and engagement during critical first-week user journeys."
      },
      {
        title: "Onboarding Optimization",
        url: "",
        description: "Created personalized content recommendations for each new user segment, balancing algorithmic signals with human editorial oversight to improve retention metrics and drive meaningful engagement with the platform's social and creative features."
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
    image: "/assets/snap-logo.png",
    bgColor: "#f5f5f5",
    relatedLinks: [
      {
        title: "Campaign Overview",
        url: "https://newsroom.snap.com/",
        description: "Official Snap announcement for the Times Square takeover campaign"
      },
      {
        title: "Adweek Coverage",
        url: "https://www.adweek.com/",
        description: "Industry recognition of the campaign's creative approach and impact"
      }
    ]
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
    image: "/assets/snap-logo.png", 
    link: "",
    bgColor: "#f9f9f9",
    relatedLinks: [
      {
        title: "Data Science Collaboration",
        url: "",
        description: "Partnered with Snap's data science team to translate technical findings into actionable editorial strategies, bridging the gap between complex algorithms and practical content guidance for the platform's 1M+ monetized creators."
      },
      {
        title: "Content Discovery System",
        url: "",
        description: "Developed a comprehensive documentation system that standardized how high-potential content was identified, scored, and surfaced across the platform, enhancing creator discoverability and engagement metrics."
      },
      {
        title: "Creator Success Tools",
        url: "",
        description: "Built a custom web application using Cursor IDE that visualized creator performance data and provided tailored recommendations to improve content engagement, monetization, and audience growth."
      }
    ]
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
    bgColor: "#f5f5f5",
    relatedLinks: [
      {
        title: "Trend Report Excerpt",
        url: "/assets/StockXCoreInsights.pdf",
        description: "Strategic analysis of Gen Z consumer behavior in key markets — exclusive preview of full research report"
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
    bgColor: "#f9f9f9",
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
    bgColor: "#f5f5f5",
    relatedLinks: [
      {
        title: "Cheer Squad",
        url: "https://snapchat.com/t/J2MP13US",
        description: "Popular story about competitive cheer team dynamics — 6.32M views, 43K followers, 39% completion rate"
      },
      {
        title: "Inhaler",
        url: "https://snapchat.com/t/wPotqUYw",
        description: "Teen drama centered around school relationships — 4.39M views, 20.3K followers, 42% completion rate"
      },
      {
        title: "Snapscore",
        url: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168",
        description: "Comedy about social media status competitions — 3.59M views, 10K followers, 35% completion rate"
      },
      {
        title: "Mr. Shower",
        url: "https://snapchat.com/t/mqrF3WDp",
        description: "Quirky story with unexpected plot twists — 3.01M views, 8.43K followers, 41% completion rate"
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
    bgColor: "#f9f9f9",
    relatedLinks: [
      {
        title: "Actors and Their Favorite Movies",
        url: "https://collider.com/actors-and-their-favorite-movies/",
        description: "Evergreen feature on celebrities' film preferences — 125K+ organic views, 4:23 avg. time on page, top 3 Google result"
      },
      {
        title: "Hardest Working Characters in Succession",
        url: "https://collider.com/hardest-workers-in-succession-ranked/",
        description: "Analysis of HBO's award-winning drama series — 89K+ views during final season, 22% social share rate"
      },
      {
        title: "Movies To Get You Ready For Fall",
        url: "https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/",
        description: "Seasonal content with perennial search value — 76K+ views, 18% return visitor rate, featured in Google Discover"
      }
    ]
  }
];

// Project section component
const ProjectSection = ({ 
  project, 
  index 
}: { 
  project: Project; 
  index: number 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect values
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
  return (
    <motion.section
      ref={sectionRef}
      className={`py-20 md:py-28 lg:py-32 overflow-hidden border-b border-gray-100 ${project.bgColor}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="space-y-6">
              {/* Company and Role */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-500 text-sm">{project.company}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">{project.role}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">{project.timeline}</span>
                </div>
              </motion.div>
              
              {/* Project Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
              >
                {project.title}
              </motion.h2>
              
              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                  {project.longDescription || project.description}
                </p>
              </motion.div>
              
              {/* Enhanced metrics display */}
              {project.metrics && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-6"
                >
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Key Metrics</h3>
                  <div className="flex flex-wrap gap-6 md:gap-10">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="group">
                        <p className="text-xl md:text-2xl font-medium text-gray-900">{metric}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Tags */}
              {project.tags && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
              
              {/* See More Toggle Button */}
              {project.relatedLinks && project.relatedLinks.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-8"
                >
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    <span className="font-medium mr-2">{isExpanded ? "See less" : "See more"}</span>
                    <span className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                      {isExpanded ? "↑" : "↓"}
                    </span>
                  </button>
                </motion.div>
              )}
              
              {/* Expandable Related Links Section */}
              {project.relatedLinks && project.relatedLinks.length > 0 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 pb-2">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-6">Related Content</h3>
                    <div className="space-y-8">
                      {project.relatedLinks.map((link, i) => (
                        <div key={i} className="group">
                          {link.url.endsWith('.pdf') ? (
                            <div>
                              <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 flex items-center">
                                {link.title}
                              </h4>
                              {link.description && (
                                <p className="text-base text-gray-500 leading-relaxed">{link.description}</p>
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
                              <div className="flex flex-col space-y-1">
                                <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 inline-flex items-center">
                                  {link.title}
                                  <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all">
                                    →
                                  </span>
                                </h4>
                                {link.description && (
                                  <p className="text-base text-gray-500 leading-relaxed">{link.description}</p>
                                )}
                              </div>
                            </Link>
                          ) : (
                            <div className="flex flex-col space-y-1">
                              <h4 className="text-lg font-medium text-gray-900">
                                {link.title}
                              </h4>
                              {link.description && (
                                <p className="text-base text-gray-500 leading-relaxed">{link.description}</p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Link to full case study if available */}
              {project.link && project.link.trim() !== "" && !project.relatedLinks && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-8"
                >
                  <Link 
                    href={project.link} 
                    className="group inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    <span className="font-medium mr-2">Read case study</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Floating Image with Parallax Effect */}
          {project.image && (
            <motion.div 
              className="lg:col-span-3 flex items-center justify-center lg:h-auto relative"
              style={{ 
                opacity,
                y: yOffset
              }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 opacity-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

// Main Work component
export default function Work() {
  const [filter, setFilter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Control header visibility based on scroll direction and position
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Filter projects based on company
  const filteredProjects = filter 
    ? projects.filter(project => project.company.toLowerCase() === filter.toLowerCase())
    : projects;

  // Get unique companies for filter tabs
  const companies = ['all', ...Array.from(new Set(projects.map(project => project.company.toLowerCase())))];

  return (
    <div className="min-h-screen bg-white">
      {/* Introduction - Apple-style hero section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-10">
              Selected Work
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed">
              A curated collection of projects spanning content strategy, editorial leadership, and emerging culture trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky filter header - Apple Navigation Style */}
      <div 
        ref={headerRef}
        className={`sticky top-0 z-40 w-full py-4 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
          isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
            {/* Filter tabs */}
            <div className="flex gap-6 pb-1">
              {companies.map((company) => (
                <button
                  key={company}
                  onClick={() => {
                    setActiveTab(company);
                    setFilter(company === 'all' ? null : company);
                  }}
                  className={`py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === company
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {company === 'all' ? 'All Projects' : company === 'snapchat' ? 'Snapchat' : 
                   company === 'stockx' ? 'StockX' : 
                   company === 'phony content' ? 'Phony Content' : 
                   company === 'collider' ? 'Collider' : company}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Sections - Apple Style Full-Width Sections */}
      <div>
        {filteredProjects.map((project, index) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
      </div>

      {/* Footer section with call to action */}
      <section className="py-20 md:py-28 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-5 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
            >
              Ready to collaborate?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Let's explore how my expertise in trend strategy and content development can elevate your brand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                href="mailto:shanedelaney11@gmail.com" 
                className="inline-flex items-center py-4 px-8 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom styling for scrollbar hiding */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 