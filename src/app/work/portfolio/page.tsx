'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EASE = [0.16, 1, 0.3, 1] as const;

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
  relatedLinks?: {
    title: string;
    url: string;
    description?: string;
  }[];
}

const projects: Project[] = [
  {
    id: "meta-horizon-gtm-guides",
    title: "Meta Horizon Go-To-Market Developer Guides",
    company: "Meta",
    role: "Content Marketing Coordinator II",
    timeline: "2025",
    description: "Led end-to-end editorial lifecycle for a four-part GTM guide series, coordinating XFN reviews, owning all copy, and managing publication schedules.",
    longDescription: "Led the end-to-end creation of a four-part Meta Horizon Go-To-Market guide series for developers, coordinating publication schedules and owning all copy. Managed the full project lifecycle from initial outline to final web publication, coordinating cross-functional reviews with Product, Developer Relations, Design, and Legal. The series provides a comprehensive go-to-market playbook for VR developers, covering marketing strategy, influencer partnerships, social media/community engagement, and marketing asset creation.",
    details: [
      "Owned all copy and editorial direction for four comprehensive developer guides",
      "Managed the formal stat review and verification process with Data Science prior to each launch",
      "Coordinated XFN feedback loops across Product, DevRel, Design, and Legal using Quip",
      "Maintained editorial calendar with strict delivery dates, resulting in on-schedule release of all guides",
      "Created supplementary worksheets and checklists to accompany the Marketing Plan guide",
      "Ensured consistent developer-friendly tone aligned with Meta brand voice guidelines",
    ],
    tags: ["Editorial Lifecycle", "XFN Coordination", "Content Strategy", "Project Management", "Developer Education"],
    metrics: ["4-part guide series", "Cornerstone resource on Meta developers portal"],
    relatedLinks: [
      { title: "Develop a Marketing Plan for Your VR App", url: "https://developers.meta.com/horizon/resources/gtm-marketing-plan", description: "High-level marketing strategy, audience research, and channel identification for VR apps." },
      { title: "Leverage Influencer Partnerships", url: "https://developers.meta.com/horizon/resources/gtm-influencer-marketing", description: "Building strategic influencer partnerships to grow VR app visibility." },
      { title: "Build Social Media and Community Engagement", url: "https://developers.meta.com/horizon/resources/gtm-social-media", description: "Community-building tactics and social media strategies for VR developers." },
      { title: "Master Marketing Assets for VR Apps", url: "https://developers.meta.com/horizon/resources/gtm-marketing-assets", description: "Creating effective marketing assets for promoting VR apps and Horizon Worlds experiences." },
    ]
  },
  {
    id: "meta-horizon-builder-stories",
    title: "Meta Horizon Builder Story Spotlights",
    company: "Meta",
    role: "Content Marketing Coordinator II",
    timeline: "2025",
    description: "Led narrative strategy and editorial oversight for a six-part builder story spotlight series on the Meta Horizon Developers Blog.",
    longDescription: "Led narrative strategy and editorial oversight for a six-part builder story spotlight series on the Meta Horizon Developers Blog. Defined story angles, conducted interviews, guided agency partners on execution, and managed the full publication pipeline. Each feature showcases diverse creator journeys, from entrepreneurial crowdfunding campaigns to first-time creators building top-ranked worlds, educating and inspiring VR developers while driving adoption of Horizon Worlds features.",
    details: [
      "Defined story angles and narrative direction for each builder spotlight",
      "Conducted interviews to surface authentic creator insights",
      "Provided editorial oversight for clarity, accuracy, and brand voice alignment",
      "Guided agency partners on execution and content delivery",
      "Managed DRI tracking and publication pipeline for the full series",
    ],
    tags: ["Narrative Direction", "Editorial Oversight", "Agency Management", "Developer Stories"],
    metrics: ["6-part series", "Meta Horizon Developers Blog"],
    relatedLinks: [
      { title: "Vail VR: From Couch-Surfing to $15M in Crowdfunding", url: "https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/", description: "Vail VR's journey from humble beginnings to raising $15M in crowdfunding." },
      { title: "Matthiaos: Pioneering Change Through Passion and Community", url: "https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community", description: "Creator spotlight on community-driven worldbuilding inside Horizon Worlds." },
      { title: "Grow a Farm: How Two Influencers Built a Top-Ranked World", url: "https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world", description: "Two gaming influencers with no dev experience create a top-ranked Horizon world." },
      { title: "Saydeechan: A Solo Creator's Journey to Bring Worlds to Japan", url: "https://developers.meta.com/horizon/blog/saydeechan-bringing-worlds-to-japan", description: "Sade Young helped launch Horizon Worlds in Japan through cultural storytelling." },
      { title: "Year in Review: 2025's Breakout Creators and Developers", url: "https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/", description: "How rapid iteration drove commercial success in VR in 2025." },
      { title: "VAIL VR (Part Two): Community-Driven Live Ops Engine", url: "https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/", description: "How AEXLAB transitioned VAIL VR to free-to-play with data-driven live ops." },
    ]
  },
  {
    id: "nux-project",
    title: "NUX Curation Project",
    company: "Snap Inc.",
    role: "Trend Producer",
    timeline: "2025",
    description: "Curated personalized UGC feeds for Snapchat's New User Experience for teens (13–17), achieving 10% higher retention than platform averages.",
    longDescription: "Developed personalized onboarding content flows for new Snapchat users, combining algorithmic signals with human editorial judgment to surface high-performing UGC for teen cohorts (13–17). Used data-driven curation guidelines (M1.2 incremental data) to balance engagement and demographic fit.",
    details: [
      "Reviewed and recommended 300+ content pieces per teen cohort segmented by interest",
      "Filtered content using data-driven cohort guidelines",
      "Collaborated with product engineering teams through dedicated Slack channels",
      "Ensured demographic fit while maintaining editorial quality standards",
    ],
    tags: ["Content Curation", "Data-Driven Programming", "Cohort Segmentation", "Product Collaboration"],
    metrics: ["300+ pieces per cohort", "10% higher retention than platform average"],
  },
  {
    id: "say-it-in-a-snap",
    title: "Say It in a Snap: Times Square Campaign",
    company: "Snap Inc.",
    role: "Trend Producer",
    timeline: "2025",
    description: "Led editorial curation for Snap's Times Square takeover, selecting standout UGC for NYC subway placements generating 500K+ daily impressions.",
    longDescription: "Curated authentic user-generated content for Snap's high-profile Times Square campaign, selecting standout UGC that showcased the platform's creative community across outdoor media placements in NYC subway stations.",
    details: [
      "Selected standout UGC for Times Square and subway takeover placements",
      "Collaborated with marketing on content merchandising and placement strategy",
      "Aligned creator content with brand campaign messaging and visual standards",
    ],
    tags: ["UGC Curation", "Campaign Collaboration", "Content Merchandising"],
    metrics: ["500K+ daily impressions", "NYC subway placements"],
  },
  {
    id: "boosted-content",
    title: "Boosted Content Initiative",
    company: "Snap Inc.",
    role: "Trend Producer",
    timeline: "2025",
    description: "Built a custom content system with Snap's data science team to surface emerging creators, influencing monetization strategy across 1M+ creators.",
    longDescription: "Collaborated with data science and product teams to develop an internal system for identifying promising creator content. Translated complex data findings into strategic content guidance, created internal documentation for 10+ cross-functional teams, and built a supporting web app tool.",
    details: [
      "Translated complex data findings into strategic content guidance for editorial teams",
      "Created internal documentation and process templates for 10+ XFN teams",
      "Built custom web app tool to streamline creator identification workflow",
      "Developed standardized Editorial Instructions (EIs) for the initiative",
    ],
    tags: ["Data Strategy", "Process Documentation", "XFN Collaboration", "Creator Tools"],
    metrics: ["1M+ monetized creators", "10+ XFN teams served"],
  },
  {
    id: "tiny-texts",
    title: "Tiny Texts",
    company: "Phony Content",
    role: "Content Manager",
    timeline: "2024–2025",
    description: "Led editorial operations for 50+ scripted Snapchat stories, generating 4M+ views and 40K+ new followers with a 90% viewership boost.",
    longDescription: "Led project governance for Tiny Texts on Snapchat, managing resource allocation, creative QA, and editorial systems across a rotating writing team. Built style guides, voice/tone documentation, and editorial calendars to standardize production at scale.",
    details: [
      "Led agile sprint planning and creative QA for 50+ scripted digital stories",
      "Built centralized style guides and voice/tone documentation for writing team consistency",
      "Managed editorial calendar across rotating writers to maintain publishing cadence",
      "Optimized content for engagement metrics, achieving 90% viewership boost",
    ],
    tags: ["Editorial Operations", "Content Systems", "Team Management", "Short-Form Content"],
    metrics: ["4M+ views", "40K+ new followers", "90% viewership boost", "35–45% completion rate"],
    relatedLinks: [
      { title: "Cheer Squad", url: "https://snapchat.com/t/J2MP13US", description: "6.32M views · 43K followers · 39% completion rate" },
      { title: "Inhaler", url: "https://snapchat.com/t/wPotqUYw", description: "4.39M views · 20.3K followers · 42% completion rate" },
      { title: "Snapscore", url: "https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168", description: "3.59M views · 10K followers · 35% completion rate" },
    ]
  },
  {
    id: "core-insights-research",
    title: "Core Insights Report",
    company: "StockX",
    role: "Brand Creative Production",
    timeline: "December 2024",
    description: "Authored StockX's 2024 Gen Z trend report analyzing consumer behavior in LA + NYC to inform the 2025 marketing strategy.",
    longDescription: "Authored a comprehensive trend report identifying key cultural figures, digital behaviors, and emerging subcultures that shaped StockX's 2025 brand strategy and campaign planning. Focused on the 18–25 male demographic in LA and NYC markets.",
    details: [
      "Mapped digital behaviors including curated sharing and resale culture",
      "Highlighted emerging subcultures: Gorp Core, DIY, archive styling",
      "Identified affinity brands and figures for campaign targeting",
      "Delivered strategic recommendations for 2025 programming and creative direction",
    ],
    tags: ["Strategic Reporting", "Trend Research", "Gen Z Strategy", "Consumer Insights"],
    metrics: ["18–25 male demographic", "LA & NYC markets", "Informed 2025 campaign strategy"],
    relatedLinks: [
      { title: "Trend Report Excerpt", url: "/assets/StockXCoreInsights.pdf", description: "Strategic analysis of Gen Z consumer behavior in key markets" },
    ]
  },
  {
    id: "campaign-shoot-highlights",
    title: "Campaign Production Highlights",
    company: "StockX",
    role: "Brand Creative Production",
    timeline: "2021–2024",
    description: "Managed production logistics for 3 major campaign shoots, coordinating talent, location, and asset workflows across 10M+ impressions.",
    longDescription: "Coordinated production logistics across multiple high-profile campaign shoots, managing talent schedules, location details, and digital asset organization while supporting the creative direction team.",
    details: [
      "Managed talent scheduling, location coordination, and asset organization for 3 campaigns",
      "Supported on-set visual execution and creative direction",
      "Organized digital assets for post-production workflows",
    ],
    tags: ["Production Coordination", "Timeline Management", "Campaign Execution"],
    metrics: ["10M+ cross-platform impressions", "3 major campaigns"],
    relatedLinks: [
      { title: "Behind the Streams with Sydeon", url: "https://www.youtube.com/watch?v=0uBuJh7sEjU", description: "Gaming influencer campaign" },
      { title: "Briana King Joins StockX", url: "https://www.youtube.com/watch?v=V8sx2CJ9x4s", description: "Skate community leader campaign" },
      { title: "What Drives Brittney Elena", url: "https://www.youtube.com/watch?v=3-loqESOCMI", description: "Basketball influencer profile" },
    ]
  },
  {
    id: "collider-seo",
    title: "Film & TV Editorial Features",
    company: "Collider",
    role: "Editorial Content Specialist",
    timeline: "2022",
    description: "Produced SEO-optimized editorial features for a 30M+ monthly visitor platform, boosting organic traffic by ~15% in two months.",
    longDescription: "Produced SEO-optimized articles on film and television for Collider, balancing keyword strategy with editorial quality while adhering to complex style guides and metadata protocols in a fast-paced newsroom environment.",
    details: [
      "Produced features adhering to complex style guides and SEO metadata protocols",
      "Balanced keyword strategy with editorial quality for sustained organic traffic",
      "Created evergreen content with high reader retention and time-on-page",
    ],
    tags: ["Editorial Compliance", "SEO", "Content Strategy", "Evergreen Content"],
    metrics: ["30M+ monthly visitors", "15%+ organic traffic growth"],
    relatedLinks: [
      { title: "Actors and Their Favorite Movies", url: "https://collider.com/actors-and-their-favorite-movies/", description: "125K+ organic views · 4:23 avg time on page · top 3 Google result" },
      { title: "Hardest Working Characters in Succession", url: "https://collider.com/hardest-workers-in-succession-ranked/", description: "89K+ views · 22% social share rate" },
      { title: "Movies To Get You Ready For Fall", url: "https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/", description: "76K+ views · featured in Google Discover" },
    ]
  },
];

const companyOrder = ['Meta', 'Snap Inc.', 'Phony Content', 'StockX', 'Collider'];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        id={project.id}
        onClick={() => setIsOpen(true)}
        className="w-full text-left py-4 border-b border-gray-100 last:border-0 group flex items-start justify-between gap-4"
      >
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-gray-400 mb-1">{project.company} · {project.timeline}</p>
          <h3 className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug">{project.title}</h3>
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-2">{project.description}</p>
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.metrics.slice(0, 3).map((m, i) => (
                <span key={i} className="text-[10px] text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">{m}</span>
              ))}
            </div>
          )}
        </div>
        <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-sm flex-shrink-0 mt-0.5">→</span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white">
          <DialogHeader>
            <p className="text-xs text-gray-400 mb-1">{project.company} · {project.role} · {project.timeline}</p>
            <DialogTitle className="text-xl font-semibold text-gray-900 leading-tight">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-2">
            <p className="text-sm text-gray-500 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl px-4 py-3">
                    <p className="text-sm font-semibold text-gray-900 tracking-tight leading-snug">{m}</p>
                  </div>
                ))}
              </div>
            )}

            {project.details.length > 0 && (
              <div>
                <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-3">Key Contributions</p>
                <div className="space-y-3">
                  {project.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 mt-[7px]" />
                      <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.tags.length > 0 && (
              <div>
                <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-3">Skills & Areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            {project.relatedLinks && project.relatedLinks.length > 0 && (
              <div>
                <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest mb-3">Related Links</p>
                <div className="space-y-3">
                  {project.relatedLinks.map((link, i) => (
                    link.url ? (
                      <a
                        key={i}
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : '_self'}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="block group/link"
                      >
                        <p className="text-sm font-medium text-gray-900 group-hover/link:text-gray-500 transition-colors inline-flex items-center gap-1.5">
                          {link.title}
                          <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-xs">↗</span>
                        </p>
                        {link.description && <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>}
                      </a>
                    ) : (
                      <div key={i}>
                        <p className="text-sm font-medium text-gray-900">{link.title}</p>
                        {link.description && <p className="text-xs text-gray-400 mt-0.5">{link.description}</p>}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setMounted(true);
    const hash = window.location.hash.slice(1);
    if (hash) {
      const project = projects.find(p => p.id === hash);
      if (project) setSelectedCompany(project.company);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }
  }, []);

  const companies = ['all', ...companyOrder];
  const filtered = selectedCompany === 'all' ? projects : projects.filter(p => p.company === selectedCompany);
  const countByCompany = companyOrder.reduce((acc, c) => {
    acc[c] = projects.filter(p => p.company === c).length;
    return acc;
  }, {} as Record<string, number>);

  const select = (company: string) => {
    const fromIdx = companies.indexOf(selectedCompany);
    const toIdx = companies.indexOf(company);
    setDirection(toIdx > fromIdx ? 1 : -1);
    setSelectedCompany(company);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="flex-1 w-full px-6 pt-20 pb-0">
        <div className="max-w-5xl mx-auto h-full">

          <motion.div
            className="flex items-baseline justify-between pt-14 pb-8"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Portfolio</h1>
            <Link href="/work" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
              ← Experience
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-0 border border-gray-100 rounded-2xl overflow-hidden"
            style={{ height: 'calc(100vh - 14rem)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            {/* Left: company selector */}
            <div className="w-44 flex-shrink-0 border-r border-gray-100 py-4 flex flex-col gap-0.5 overflow-y-auto">
              {companies.map((company) => {
                const isActive = company === selectedCompany;
                return (
                  <button
                    key={company}
                    onClick={() => select(company)}
                    className={`w-full text-left px-4 py-3 transition-all duration-150 relative ${
                      isActive ? 'bg-gray-50' : 'hover:bg-gray-50/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="company-indicator"
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-900"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <p className={`text-sm transition-colors ${isActive ? 'font-semibold text-gray-900' : 'text-gray-400'}`}>
                      {company === 'all' ? 'All' : company}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {company === 'all'
                        ? `${projects.length} projects`
                        : `${countByCompany[company]} ${countByCompany[company] === 1 ? 'project' : 'projects'}`}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: project list */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedCompany}
                  initial={{ opacity: 0, x: direction * 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -16 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="px-8 pt-2 pb-8"
                >
                  {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="pb-8" />
        </div>
      </section>
    </div>
  );
}
