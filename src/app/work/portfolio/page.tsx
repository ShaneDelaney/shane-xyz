'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

const projects: Project[] = [
  {
    id: "meta-horizon-gtm-guides",
    title: "Meta Horizon Go-To-Market Developer Guides",
    company: "Meta",
    role: "Content Marketing Coordinator II",
    timeline: "2025",
    description: "Led end-to-end editorial lifecycle for a four-part GTM guide series — coordinating XFN reviews, owning all copy, and managing publication schedules.",
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
    metrics: ["4-part guide series", "Cornerstone resources in Meta developers portal"],
    image: "/meta.png",
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
    longDescription: "Led narrative strategy and editorial oversight for a six-part builder story spotlight series on the Meta Horizon Developers Blog. Defined story angles, conducted interviews, guided agency partners on execution, and managed the full publication pipeline. Each feature showcases diverse creator journeys — from entrepreneurial crowdfunding campaigns to first-time creators building top-ranked worlds — educating and inspiring VR developers while driving adoption of Horizon Worlds features.",
    details: [
      "Defined story angles and narrative direction for each builder spotlight",
      "Conducted interviews to surface authentic creator insights",
      "Provided editorial oversight for clarity, accuracy, and brand voice alignment",
      "Guided agency partners on execution and content delivery",
      "Managed DRI tracking and publication pipeline for the full series",
    ],
    tags: ["Narrative Direction", "Editorial Oversight", "Agency Management", "Developer Stories"],
    metrics: ["6-part builder stories series", "Meta Horizon Developers Blog"],
    image: "/meta.png",
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
    image: "/assets/snap-logo.png",
  },
  {
    id: "say-it-in-a-snap",
    title: "Say It in a Snap — Times Square Campaign",
    company: "Snap Inc.",
    role: "Trend Producer",
    timeline: "2025",
    description: "Led editorial curation for Snap's Times Square takeover — selecting standout UGC for NYC subway placements generating 500K+ daily impressions.",
    longDescription: "Curated authentic user-generated content for Snap's high-profile Times Square campaign, selecting standout UGC that showcased the platform's creative community across outdoor media placements in NYC subway stations.",
    details: [
      "Selected standout UGC for Times Square and subway takeover placements",
      "Collaborated with marketing on content merchandising and placement strategy",
      "Aligned creator content with brand campaign messaging and visual standards",
    ],
    tags: ["UGC Curation", "Campaign Collaboration", "Content Merchandising"],
    metrics: ["500K+ daily impressions", "NYC subway placements"],
    image: "/assets/snap-logo.png",
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
    image: "/assets/snap-logo.png",
  },
  {
    id: "tiny-texts",
    title: "Tiny Texts",
    company: "Phony Content",
    role: "Content Manager",
    timeline: "2024–2025",
    description: "Led editorial operations for 50+ scripted Snapchat stories — generating 4M+ views and 40K+ new followers with a 90% viewership boost.",
    longDescription: "Led project governance for Tiny Texts on Snapchat — managing resource allocation, creative QA, and editorial systems across a rotating writing team. Built style guides, voice/tone documentation, and editorial calendars to standardize production at scale.",
    details: [
      "Led agile sprint planning and creative QA for 50+ scripted digital stories",
      "Built centralized style guides and voice/tone documentation for writing team consistency",
      "Managed editorial calendar across rotating writers to maintain publishing cadence",
      "Optimized content for engagement metrics, achieving 90% viewership boost",
    ],
    tags: ["Editorial Operations", "Content Systems", "Team Management", "Short-Form Content"],
    metrics: ["4M+ views", "40K+ new followers", "90% viewership boost", "35–45% completion rate"],
    image: "/assets/Phony-logo.png",
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
    image: "/assets/stockx-logo.png",
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
    description: "Managed production logistics for 3 major campaign shoots — coordinating talent, location, and asset workflows across 10M+ impressions.",
    longDescription: "Coordinated production logistics across multiple high-profile campaign shoots, managing talent schedules, location details, and digital asset organization while supporting the creative direction team.",
    details: [
      "Managed talent scheduling, location coordination, and asset organization for 3 campaigns",
      "Supported on-set visual execution and creative direction",
      "Organized digital assets for post-production workflows",
    ],
    tags: ["Production Coordination", "Timeline Management", "Campaign Execution"],
    metrics: ["10M+ cross-platform impressions", "3 major campaigns"],
    image: "/assets/stockx-logo.png",
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
    image: "/assets/collider-logo.png",
    relatedLinks: [
      { title: "Actors and Their Favorite Movies", url: "https://collider.com/actors-and-their-favorite-movies/", description: "125K+ organic views · 4:23 avg time on page · top 3 Google result" },
      { title: "Hardest Working Characters in Succession", url: "https://collider.com/hardest-workers-in-succession-ranked/", description: "89K+ views · 22% social share rate" },
      { title: "Movies To Get You Ready For Fall", url: "https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/", description: "76K+ views · featured in Google Discover" },
    ]
  },
];

const companyOrder = ['Meta', 'Snap Inc.', 'Phony Content', 'StockX', 'Collider'];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        id={project.id}
        onClick={() => setIsOpen(true)}
        className="w-full text-left border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:bg-gray-50/50 transition-all group"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {project.image && (
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.company}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-90 transition-opacity"
                />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{project.company}</span>
                <span className="text-gray-200">·</span>
                <span className="text-[10px] text-gray-400">{project.timeline}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">{project.title}</h3>
            </div>
          </div>
          <span className="text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 text-sm">→</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mt-2.5 line-clamp-2">{project.description}</p>
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.metrics.slice(0, 3).map((m, i) => (
              <span key={i} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">{m}</span>
            ))}
          </div>
        )}
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              {project.image && (
                <div className="relative w-6 h-6 flex-shrink-0">
                  <Image src={project.image} alt={project.company} fill className="object-contain opacity-70" />
                </div>
              )}
              <span className="text-xs text-gray-500">{project.company} · {project.role} · {project.timeline}</span>
            </div>
            <DialogTitle className="text-xl font-semibold text-gray-900 leading-tight">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {project.details.length > 0 && (
              <div>
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Contributions</h4>
                <ul className="space-y-2">
                  {project.details.map((d, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2.5">
                      <span className="text-gray-300 flex-shrink-0 mt-1">–</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.metrics && project.metrics.length > 0 && (
              <div className="py-4 border-y border-gray-100">
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Impact</h4>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((m, i) => (
                    <span key={i} className="text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg">{m}</span>
                  ))}
                </div>
              </div>
            )}

            {project.tags.length > 0 && (
              <div>
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Skills & Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            {project.relatedLinks && project.relatedLinks.length > 0 && (
              <div className="pt-2 border-t border-gray-100">
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Related Links</h4>
                <div className="space-y-3">
                  {project.relatedLinks.map((link, i) => (
                    link.url ? (
                      <a
                        key={i}
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : '_self'}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="block group"
                      >
                        <p className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors inline-flex items-center gap-1.5">
                          {link.title} <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </p>
                        {link.description && <p className="text-xs text-gray-500 mt-0.5">{link.description}</p>}
                      </a>
                    ) : (
                      <div key={i}>
                        <p className="text-sm font-medium text-gray-900">{link.title}</p>
                        {link.description && <p className="text-xs text-gray-500 mt-0.5">{link.description}</p>}
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

  const filtered = selectedCompany === 'all' ? projects : projects.filter(p => p.company === selectedCompany);
  const companyCounts = companyOrder.reduce((acc, c) => {
    acc[c] = projects.filter(p => p.company === c).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
        <div className="max-w-3xl mx-auto w-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/work" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6">
              ← Back to Experience
            </Link>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-2">Portfolio</h1>
            <p className="text-sm text-gray-500 mb-8">
              Case studies with strategic detail, key contributions, and impact.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-100">
              <button
                onClick={() => setSelectedCompany('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCompany === 'all' ? 'bg-gray-900 text-white' : 'border border-gray-200 text-gray-500 hover:border-gray-300'
                }`}
              >
                All ({projects.length})
              </button>
              {companyOrder.map(company => (
                <button
                  key={company}
                  onClick={() => setSelectedCompany(company)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCompany === company ? 'bg-gray-900 text-white' : 'border border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {company} ({companyCounts[company]})
                </button>
              ))}
            </div>

            {/* Project list */}
            <div className="space-y-3">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
