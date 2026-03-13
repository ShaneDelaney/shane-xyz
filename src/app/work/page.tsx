'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const E = [0.16, 1, 0.3, 1] as const;

interface Initiative {
  id: string;
  category: string;
  title: string;
  description: string;
  responsibilities?: string[];
  url?: string;
}

interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  system: string;
  impact: string;
  stats?: { value: string; label: string }[];
  overview: string[];
  initiatives: Initiative[];
}

const COMPANIES: Company[] = [
  {
    id: 'meta', name: 'Meta', role: 'Content Marketing Coordinator II', period: 'Oct 2025 – Mar 2026',
    summary: 'Editorial DRI for the Developer Ecosystem Success team at Meta Horizon — the platform where developers build worlds, games, and apps for VR. In five months, I led production and owned the full content pipeline: sourcing creators, developing story angles, running multi-stage XFN review across product, analytics, and legal, and publishing 13 pieces. Alongside editorial, I built the Growth Systems Toolkit and a Horizon Creator Studio prototype presented to C-suite to inform future creator tooling.',
    problem: 'Horizon had breakout developers building successful worlds — but no established editorial process to tell their stories publicly, and no internal tools to back the team\'s strategy work.',
    system: 'DRI across the full content pipeline: sourcing, interviews, 8-stage XFN review across five teams, and publication management for 13 pieces. In parallel: three AI-powered internal tools (the Growth Systems Toolkit) and a Creator Studio prototype taken to C-suite.',
    impact: '13 pieces out in 5 months. NRG whitepaper co-authored. Growth Systems Toolkit active in 2026 planning. Creator Studio prototype on the product roadmap.',
    stats: [
      { value: '13', label: 'Pieces Published' },
      { value: '5', label: 'XFN Teams' },
      { value: '3', label: 'Internal Tools Built' },
    ],
    overview: [
      'Led production of the Horizon Developer Blog — DRI across 13 pieces published in 5 months: developer stories, GTM guides, and a whitepaper',
      'Owned the full content pipeline: creator sourcing, editorial interviews, 8-stage XFN review across Product, DevRel, Design, Legal, and Data Science',
      'Built three AI-powered internal tools (Creator Compass, Campaign Intelligence Dashboard, GRI Simulator) — used in 2026 leadership strategy sessions',
      'Co-authored the NRG Gaming whitepaper as editorial lead',
      'Designed and built a Horizon Creator Studio prototype, presented to C-suite; now on the product roadmap',
    ],
    initiatives: [
      { id: 'meta-pipeline', category: 'Content System', title: 'Developer Story Pipeline', description: 'DRI across all production stages for the Horizon Developer Blog — sourcing creators, developing narratives, conducting interviews, coordinating XFN review, and managing publication. 13 pieces published across developer stories and GTM guides.',
        responsibilities: ['Owned the full content lifecycle from creator sourcing to publication', 'Conducted all editorial interviews with VR developers and creators', 'Developed narrative angles and story structures for each piece', 'Managed editorial timelines across concurrent projects'] },
      { id: 'meta-xfn', category: 'Editorial Operations', title: 'Cross-Functional Editorial Pipeline', description: 'Every piece of content required coordination across Product, DevRel, Design, Legal, and Data Science. Managed this review cycle end-to-end, including a formal stat-verification process confirming 100% metric accuracy across all published content.',
        responsibilities: ['Coordinated review cycles across 5 XFN teams per piece', 'Built a stat-verification process to confirm accuracy of all published metrics', 'Resolved cross-team feedback and maintained editorial voice throughout', 'Kept projects on schedule while routing through multiple stakeholder layers'] },
      { id: 'meta-growth', category: 'Case Studies', title: 'Developer Growth Narratives', description: 'Highlighting how creators succeed within the Horizon ecosystem — surfacing patterns in the metrics, community dynamics, and product behaviors that define a successful developer.',
        responsibilities: ['Identified story-worthy creators through platform data and developer community signals', 'Researched performance metrics and community dynamics for each subject', 'Translated developer journeys into editorial narratives with broad platform relevance', 'Contributed insights on what success patterns to amplify across the Horizon ecosystem'] },
      { id: 'meta-gst', category: 'Internal Tooling', title: 'Growth Systems Toolkit', description: 'Three AI-powered tools built for the Developer Ecosystem Success team and deployed on Vercel. The Creator Compass validated creator selection strategy. The Campaign Intelligence Dashboard tracked content performance across XFN stakeholders. The GRI Simulator modeled growth scenarios for 2026 planning. All three were used directly in leadership strategy presentations.',
        responsibilities: ['Scoped, designed, and built three AI-powered tools', 'Deployed all three on Vercel and integrated into the team\'s live workflow', 'Creator Compass, Campaign Intelligence Dashboard, and GRI Simulator each served a distinct strategic function', 'Tools presented to leadership and used in the 2026 growth strategy sessions'] },
      { id: 'meta-prototype', category: 'Product Design', title: 'Horizon Creator Studio Prototype', description: 'A functional prototype for Horizon Creator Studio — a creator-facing tool designed to improve developer onboarding and publishing experience on the platform. Spec\'d and built independently, then presented to C-suite for review to inform product roadmap decisions around future creator tooling.',
        responsibilities: ['Authored the full product spec (v6) based on creator feedback and platform data', 'Designed and built the functional prototype independently', 'Presented to C-suite as part of product strategy discussions for the Horizon platform', 'Prototype directly informed future creator tool decisions and roadmap prioritization'] },
      { id: 'vail-one', category: 'Developer Story', title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding', description: 'A VR studio raised $15M from players who hadn\'t played the game yet. The first in a two-part series documenting AEXLAB\'s path from bootstrapped studio to crowdfunding record-holder.',
        responsibilities: ['Sourced and developed the story concept and two-part series structure', 'Conducted all editorial interviews with AEXLAB founders', 'Wrote and edited the full piece', 'Managed XFN review and coordinated publication with the Horizon blog team'], url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/' },
      { id: 'vail-two', category: 'Developer Story', title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine', description: 'Raising $15M was the beginning. Keeping players engaged was the harder problem. Part two follows AEXLAB\'s live ops strategy for sustaining a competitive VR playerbase post-launch.',
        responsibilities: ['Developed the editorial angle for the live ops follow-up', 'Conducted follow-up interviews with the AEXLAB team', 'Wrote and edited the full piece', 'Coordinated cross-functional review and publication'], url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/' },
      { id: 'saydeechan', category: 'Developer Story', title: 'Saydeechan: Bringing Worlds to Japan', description: 'One creator decided Horizon Worlds needed a home in Japan. So they built it. A story about localization, community building, and what it means to represent a culture on a new platform.',
        responsibilities: ['Identified and sourced the creator for this story', 'Developed the localization and cultural representation angle', 'Conducted editorial interview and wrote the full piece', 'Managed review and publication with the Horizon blog team'], url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/' },
      { id: 'grow-farm', category: 'Developer Story', title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World', description: 'Two YouTubers with no dev experience hit the top 10 in two months. A story about platform accessibility and what the tools of Horizon enable for creators with an audience but no technical background.',
        responsibilities: ['Sourced the creators and developed the platform accessibility narrative angle', 'Conducted editorial interviews with both creators', 'Wrote and edited the full piece', 'Coordinated XFN review and publication'], url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/' },
      { id: 'matthiaos', category: 'Developer Story', title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community', description: 'The most important builders aren\'t always the ones with the highest numbers. A profile of a creator whose contribution to Horizon is measured in community trust, not installs.',
        responsibilities: ['Identified the creator as an underrepresented story type in the ecosystem', 'Developed the community-first editorial angle', 'Conducted the interview and wrote the full profile', 'Managed review and publication'], url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/' },
      { id: 'year-review', category: 'Year in Review', title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers', description: 'A year-in-review surfacing what scaled, what didn\'t, and who defined 2025 in the Horizon developer ecosystem.',
        responsibilities: ['Researched and synthesized platform data and creator performance across 2025', 'Developed editorial framework for what stories and patterns to surface', 'Wrote and edited the full year-in-review feature', 'Coordinated multi-team review and final publication'], url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/' },
      { id: 'kawaii', category: 'Success Story', title: 'Kawaii.Creator: Success Story', description: 'A distinctive visual world, built inside ours. Platform success story highlighting how creative identity and aesthetic commitment translate into platform growth.',
        responsibilities: ['Identified and developed the success story angle', 'Conducted creator interview and built the narrative', 'Wrote and edited the full feature', 'Managed cross-functional review and publication on the Horizon platform'], url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/' },
      { id: 'gtm-marketing', category: 'GTM Guide', title: 'Develop a Marketing Plan for Your VR App', description: 'The anchor guide in the series — strategy, audience research, channel selection, and the foundational thinking every VR developer needs before launch.',
        responsibilities: ['Researched and outlined the GTM marketing framework for VR developers', 'Wrote the full guide with actionable strategy and templates', 'Coordinated accuracy review with Product and DevRel teams', 'Published to the Meta Horizon developer resource library'], url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/' },
      { id: 'gtm-influencer', category: 'GTM Guide', title: 'Leverage Influencer Partnerships for Your VR App', description: 'A practical guide to building influencer partnerships for VR developers. Identifying the right creators, structuring relationships, and measuring what works.',
        responsibilities: ['Researched influencer partnership models relevant to VR and gaming', 'Wrote the full guide covering discovery, outreach, contracts, and measurement', 'Coordinated review with DevRel and marketing stakeholders', 'Published as part of the GTM series on Meta Horizon'], url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/' },
      { id: 'gtm-social', category: 'GTM Guide', title: 'Build Social Media and Community Engagement for Your VR App', description: 'Community-building and social media strategy for VR developers — how to build an audience before, during, and after a launch.',
        responsibilities: ['Developed the community-building framework specific to VR developer needs', 'Wrote the full guide covering pre-launch, launch, and post-launch strategy', 'Coordinated review and incorporated feedback from Product and DevRel', 'Published to the Horizon developer resource library'], url: 'https://developers.meta.com/horizon/resources/gtm-social-media/' },
      { id: 'gtm-assets', category: 'GTM Guide', title: 'Master Marketing Assets for Your VR App', description: 'Store page screenshots, trailers, and social creative for VR apps. The practical asset guide for developers managing their own visual identity.',
        responsibilities: ['Researched best practices for VR app store creative and marketing assets', 'Wrote the guide covering screenshots, trailers, icons, and social assets', 'Coordinated review with Design and DevRel teams', 'Published to the Horizon developer resource library'], url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/' },
      { id: 'gtm-pr', category: 'GTM Guide', title: 'PR Strategy for Your VR App', description: 'PR strategy for VR developers navigating press cycles and journalist relationships. How to get coverage and what to do with it.',
        responsibilities: ['Researched PR frameworks applicable to VR game launches', 'Wrote the full guide covering press outreach, media kits, and coverage amplification', 'Coordinated review with communications and DevRel teams', 'Published to the Horizon developer resource library'], url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/' },
      { id: 'gtm-demos', category: 'GTM Guide', title: 'Create App Demos That Convert', description: 'Best practices for VR app demos that convert player interest into installs. The tactical guide to letting your game make its own case.',
        responsibilities: ['Researched demo design principles specific to VR app conversion', 'Wrote the full guide with tactical best practices and examples', 'Coordinated review with Product and DevRel stakeholders', 'Published as the final entry in the GTM guide series'], url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/' },
    ],
  },
  {
    id: 'snap', name: 'Snap Inc.', role: 'Trend Producer', period: 'Mar – Oct 2025',
    summary: 'Trend Producer on Snapchat Spotlight — a short-form discovery surface with 900M+ monthly active users and 1,000+ pieces of content reviewed daily. Promoted from Trend Curator to Trend Producer, taking on final decision-making authority for content amplification. Built the curation systems, flagged breakout creators before the algorithm confirmed them, and sourced content featured in Times Square placements and national Snap brand campaigns.',
    stats: [
      { value: '900M+', label: 'Monthly Users' },
      { value: '1,000+', label: 'Pieces/Day' },
      { value: 'Promoted', label: 'Same Tenure' },
    ],
    overview: [
      'Reviewed and programmed 1,000+ pieces of content daily on Spotlight — a 900M+ MAU short-form discovery surface',
      'Promoted from Trend Curator to Trend Producer within the same tenure, taking on final decision-making authority',
      'Built a daily trend intelligence practice combining cross-platform monitoring (TikTok, YouTube Shorts, Instagram Reels) and internal data to flag breakout content before the algorithm confirmed it',
      'Led the Breakout Creator workstream with Data Science to surface emerging talent at scale across a 1M+ creator ecosystem',
      'Selected content and creators featured in Times Square placements and major national Snap brand campaigns',
      'Designed editorial workflows and documentation adopted by 10+ cross-functional teams',
    ],
    problem: 'At 1,000+ pieces of content per day on a 900M+ MAU platform, identifying breakout creators and cultural signals before they reached algorithmic momentum required editorial judgment, not just data.',
    system: 'Built a daily programming practice combining cross-platform competitive monitoring (TikTok, YouTube Shorts, Instagram Reels), internal performance data, and editorial instinct. Led the Breakout Creator workstream with Data Science to surface high-potential talent before peak adoption.',
    impact: 'Delivered consistent above-benchmark engagement and retention lifts. Creator selections featured in Times Square takeovers and major national Snap brand campaigns.',
    initiatives: [
      { id: 'snap-spotlight', category: 'Content Programming', title: 'Spotlight Programming Lead', description: 'Daily editorial oversight of a 1,000+ piece pipeline across one of the largest UGC surfaces in social media. Every programming decision shaped what 500M+ monthly viewers saw first.',
        responsibilities: ['Reviewed and programmed 1,000+ videos daily across Spotlight', 'Made editorial decisions directly shaping what 500M+ monthly viewers saw first', 'Balanced trend velocity, quality, and audience fit in every programming call', 'Maintained consistent editorial standards at high volume and speed'] },
      { id: 'snap-trend', category: 'Trend Intelligence', title: 'Trend Intelligence & Cultural Signals', description: 'Detecting breakout content across a 1,000+ piece daily pipeline, identifying cultural signals before they reached algorithmic momentum. Understanding what\'s next before the numbers confirm it.',
        responsibilities: ['Monitored daily pipeline for early cultural signals and breakout patterns', 'Flagged emerging trends before algorithmic data confirmed them', 'Developed a personal taxonomy of content signals used to predict velocity', 'Shared trend intelligence with editorial and product teams to inform platform decisions'] },
      { id: 'snap-nux', category: 'Product Collaboration', title: 'New User Experience Curation', description: 'Curating the first screen a new user sees — 300+ pieces reviewed per cohort. The NUX determines whether someone comes back. Every selection is a statement about what Spotlight is.',
        responsibilities: ['Reviewed 300+ content pieces per new user cohort', 'Selected content representing the highest-quality first impression of Spotlight', 'Applied editorial judgment to balance broad appeal with platform identity', 'Collaborated with product teams on NUX strategy and cohort composition'] },
      { id: 'snap-boosted', category: 'Data & Creator Strategy', title: 'Creator Identification System', description: 'A creator identification system built with Data Science to surface emerging talent earlier at scale. Contributed to the criteria that determine who gets boosted across the platform.',
        responsibilities: ['Partnered with Data Science to define criteria for emerging creator identification', 'Reviewed creator profiles flagged by the system for editorial validation', 'Contributed qualitative signal input to refine the quantitative model', 'Helped build a scalable talent discovery process across a 1M+ creator ecosystem'] },
      { id: 'snap-campaign', category: 'Campaign Sourcing', title: 'Marketing Campaign Content Sourcing', description: 'Identifying standout creator content for platform marketing campaigns. Contributed selections used in Times Square placements and other high-visibility Snap brand activations.',
        responsibilities: ['Sourced standout creator content for Snap platform marketing campaigns', 'Contributed selections used in Times Square and other high-visibility activations', 'Evaluated content for visual quality, brand fit, and cultural resonance', 'Coordinated with the marketing team on creative direction and final selections'] },
      { id: 'snap-systems', category: 'Editorial Systems', title: 'Editorial Systems & Workflow Design', description: 'The operational infrastructure that made a 1,000+ piece daily pipeline manageable. Documentation, routing systems, and workflow design used across 10+ cross-functional teams.',
        responsibilities: ['Designed editorial workflows to manage a 1,000+ piece daily content pipeline', 'Wrote documentation adopted across 10+ cross-functional teams', 'Built routing and categorization systems for consistent high-volume operations', 'Identified and eliminated bottlenecks that slowed editorial throughput'] },
      { id: 'snap-breakout', category: 'Breakout Detection', title: 'Breakout Content Identification', description: 'Flagging breakout content before it reached algorithmic momentum. The difference between surfacing a trend and following one. Part instinct, part pattern recognition, part data.',
        responsibilities: ['Identified breakout content before it gained algorithmic traction', 'Applied a combination of cultural instinct, pattern recognition, and data signals', 'Escalated high-potential content to programming leads for accelerated distribution', 'Contributed to platform-level trend intelligence shared with editorial and product teams'] },
      { id: 'snap-product', category: 'Product Collaboration', title: 'Cross-Functional Product Collaboration', description: 'Working with product teams to refine content discovery surfaces. Providing editorial perspective on how programming decisions interact with platform mechanics.',
        responsibilities: ['Provided editorial perspective in product reviews for Spotlight discovery surfaces', 'Articulated how programming decisions interact with algorithmic and UX mechanics', 'Contributed qualitative feedback on content policy and surface design changes', 'Served as a bridge between editorial operations and product development'] },
    ],
  },
  {
    id: 'phony', name: 'Phony Content', role: 'Content Manager', period: 'May 2024 – Mar 2025',
    summary: 'Content manager for Tiny Texts, a scripted short-form series on Snapchat built around text-message conversations — a format engineered for mobile viewing behavior. Wrote and produced 50+ episodes, designing story structures specifically for retention and follower conversion. The series generated 25M+ total views; top episode reached 6.3M views with a 39% completion rate.',
    stats: [
      { value: '25M+', label: 'Total Views' },
      { value: '39%', label: 'Top Completion' },
      { value: '50+', label: 'Episodes' },
    ],
    overview: [
      'Wrote and produced 50+ episodes of Tiny Texts — a scripted short-form series on Snapchat built around text-message conversations',
      'Designed story architectures calibrated for mobile retention: pacing, emotional arcs, and ending structures engineered for completion and follower conversion',
      '25M+ total views; top episode (Cheer Squad) hit 6.3M views and a 39% completion rate',
      'Multiple episodes drove follower spikes of 8K–20K in a single cycle',
      'Built editorial templates, style guides, and QA frameworks that sustained quality across high-volume production',
    ],
    problem: 'Serialized short-form storytelling on mobile requires a different architecture than traditional narrative. Retention drops off fast. The structure has to work harder than the story.',
    system: 'Designed story frameworks optimized for Snapchat\'s viewing behavior — pacing, emotional arcs, and ending structures calibrated for completion and follower conversion. Built production systems and editorial templates that sustained quality across 50+ episodes.',
    impact: '25M+ total views. 39% completion rate on the top episode. Multiple stories drove follower spikes of 8K–20K in a single cycle.',
    initiatives: [
      { id: 'phony-architecture', category: 'Narrative Design', title: 'Viral Story Architecture', description: 'Designing conversational stories engineered for retention: structure, pacing, and emotional arcs calibrated for short-form audience behavior. These aren\'t just scripts; they\'re systems for keeping someone reading.',
        responsibilities: ['Designed story frameworks optimized for Snapchat\'s short-form viewing behavior', 'Developed pacing and emotional arc structures calibrated for high completion rates', 'Established repeatable narrative templates used across 50+ episodes', 'Iterated on structure based on per-episode performance data'] },
      { id: 'phony-engagement', category: 'Audience Strategy', title: 'Audience Engagement Analysis', description: 'Analyzing completion rates and retention patterns to identify which structural choices drove behavior — and applying those findings to future production. Led to the 39% peak on Cheer Squad.',
        responsibilities: ['Analyzed completion rates and drop-off patterns across 50+ story episodes', 'Identified specific structural choices correlated with higher audience retention', 'Applied findings to improve story architecture and pacing in subsequent productions', 'Built a performance feedback loop that informed every creative decision'] },
      { id: 'phony-production', category: 'Editorial Pipeline', title: 'High-Volume Story Production', description: 'Editorial calendars, style guides, and QA frameworks for high-volume serialized story production across 50+ episodes. Built the infrastructure that made consistent quality achievable at scale.',
        responsibilities: ['Created editorial calendars managing production across concurrent story series', 'Wrote style guides establishing tone, format, and character voice standards', 'Built QA frameworks ensuring consistent quality across high-volume output', 'Maintained production velocity while preserving story quality at 50+ episode scale'] },
      { id: 'phony-cheersquad', category: 'Scripted Series', title: 'Tiny Texts: Cheer Squad', description: '6.3M views and a 39% completion rate. The highest-performing episode in the Tiny Texts catalog, a story whose structure was deliberately engineered for hold.',
        responsibilities: ['Developed the concept, characters, and narrative arc', 'Wrote and refined the full script', 'Applied structural techniques specifically designed to maximize completion rate', 'Analyzed post-publish performance data to extract lessons for future episodes'], url: 'https://snapchat.com/t/J2MP13US' },
      { id: 'phony-inhaler', category: 'Scripted Series', title: 'Tiny Texts: Inhaler', description: '4.39M views and 20.3K followers added to the account in one story cycle. A story that converted viewers into subscribers at a rate well above series average.',
        responsibilities: ['Developed the story concept and character dynamics', 'Wrote and edited the full script', 'Calibrated the ending and hook structure for follower conversion', 'Reviewed performance data and identified the conversion drivers'], url: 'https://snapchat.com/t/wPotqUYw' },
      { id: 'phony-shower', category: 'Scripted Series', title: 'Tiny Texts: Mr. Shower', description: '3.01M views and 8.43K followers added. Part of the core Tiny Texts run that established the series as a consistent performer on the platform.',
        responsibilities: ['Developed the story concept and character voice', 'Wrote and edited the full script', 'Maintained the narrative tone and pacing style established across the series', 'Contributed to overall series consistency and platform presence'] },
      { id: 'phony-sleepover', category: 'Scripted Series', title: 'Tiny Texts: Sleepover', description: '2.2M views and 9.4K followers added. A story that consistently outperformed its view count in follower conversion.',
        responsibilities: ['Developed the story concept and emotional hook', 'Wrote and edited the full script', 'Designed the ending to drive follower conversion above series average', 'Analyzed performance relative to other episodes in the catalog'] },
      { id: 'phony-snapscore', category: 'Scripted Series', title: 'Tiny Texts: Snap Score', description: '2.08M views and 5.73K followers added. A story timed to a culturally relevant prompt that resonated broadly across the Snapchat audience.',
        responsibilities: ['Identified the Snap Score topic as a high-relevance cultural prompt for the audience', 'Developed the story concept and character voice', 'Wrote and edited the full script', 'Timed release to maximize cultural resonance and audience engagement'], url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168' },
    ],
  },
  {
    id: 'stockx', name: 'StockX', role: 'Brand Creative Production (Freelance)', period: 'Sep 2021 & Dec 2024',
    summary: 'Freelance researcher and on-set production support for StockX across two engagements in 2021 and 2024. Authored the 2024 Core Insights Report — a primary-research trend report mapping Gen Z digital consumption behavior and affinity brands across LA and NYC — and provided production support on three brand campaign shoots featuring athletes and creators.',
    stats: [
      { value: '3', label: 'Brand Shoots' },
      { value: '2', label: 'Engagements' },
    ],
    overview: [
      'Authored the 2024 Core Insights Report — primary research mapping Gen Z digital consumption behavior, emerging subcultures, and affinity brands across LA and NYC',
      'Report directly informed StockX\'s 2025 marketing and brand strategy',
      'Provided on-set production support for three brand campaign shoots featuring athletes and creators (Sydeon, Briana King, Brittney Elena)',
      'Campaign content reached audiences across gaming, skate, and streetwear — including Times Square placements and national activations',
    ],
    problem: 'Two separate briefs: understanding how Gen Z consumers in LA and NYC were engaging with culture and resale, and executing high-visibility creator campaign shoots.',
    system: 'Authored a Gen Z trend report mapping digital consumption behavior, emerging subcultures, and affinity brands across two markets. Provided production support on three brand campaign shoots featuring athletes and creators.',
    impact: 'Trend report directly informed StockX\'s 2025 marketing strategy. Campaign content reached audiences across gaming, skate, and streetwear — including placements in Times Square.',
    initiatives: [
      { id: 'stockx-report', category: 'Research Report', title: '2024 Core Insights Report', description: 'A Gen Z trend report mapping digital consumption behavior, emerging subcultures, and affinity brands across LA and NYC. Directly informed StockX\'s 2025 marketing strategy.',
        responsibilities: ['Conducted primary and secondary research across LA and NYC Gen Z demographics', 'Mapped digital consumption behaviors, emerging subcultures, and affinity brand patterns', 'Synthesized findings into a structured trend report', 'Delivered insights that directly informed StockX\'s 2025 marketing and brand strategy'] },
      { id: 'stockx-sydeon', category: 'Campaign', title: 'Behind the Streams with Sydeon', description: 'Gaming culture and resale culture, one campaign at the intersection. Production support for a creator partnership that reached audiences across both worlds.',
        responsibilities: ['Provided on-set production support throughout the campaign shoot', 'Assisted with talent coordination and creative logistics', 'Supported the team in executing a creator partnership spanning gaming and streetwear audiences'], url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU' },
      { id: 'stockx-briana', category: 'Campaign', title: 'Briana King Joins StockX', description: 'Skate doesn\'t follow trends. It sets them. Production support for a brand campaign featuring a skate athlete at the forefront of culture.',
        responsibilities: ['Provided on-set production support for the brand campaign shoot', 'Assisted with talent coordination and shoot logistics', 'Contributed to ensuring the campaign reflected authentic athletic and cultural identity'], url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s' },
      { id: 'stockx-brittney', category: 'Campaign', title: 'What Drives Brittney Elena', description: 'An athlete who\'s also a brand. Production support for a campaign centered on authentic athletic identity and the cultural resonance of the StockX marketplace.',
        responsibilities: ['Provided on-set production support across the campaign shoot', 'Assisted with creative direction and talent-facing logistics', 'Supported delivery of a campaign grounded in authentic athlete storytelling'], url: 'https://www.youtube.com/watch?v=3-loqESOCMI' },
    ],
  },
  {
    id: 'collider', name: 'Collider', role: 'Editorial Content Specialist (Freelance)', period: 'Aug – Oct 2022',
    summary: 'Freelance editorial contributor for Collider, a film and television platform with 30M+ monthly visitors. Identified high-intent, under-served search opportunities and wrote editorial features calibrated for both audience hold and search-surface eligibility. Contributed to a ~15% organic traffic lift over two months; top piece hit 125K readers with a 4:23 average time on page.',
    stats: [
      { value: '125K', label: 'Top Piece Readers' },
      { value: '4:23', label: 'Avg Time on Page' },
      { value: '~15%', label: 'Traffic Lift' },
    ],
    overview: [
      'Freelance editorial contributor for Collider — a film and TV platform with 30M+ monthly visitors',
      'Identified high-intent, under-served search opportunities and wrote features calibrated for both editorial quality and search-surface eligibility',
      'Top piece (Actors and Their Favorite Movies) hit 125K readers, 4:23 average time on page, and a top-3 Google ranking for a competitive query',
      'Contributed to a ~15% organic traffic lift across two months',
      'Second piece (Hardest Working Characters in Succession) hit 89K views with a 22% social share rate; third piece selected for Google Discover',
    ],
    problem: 'High-traffic editorial platforms need content that captures search intent without sacrificing editorial quality. Most SEO content does one or the other.',
    system: 'Identified high-intent, under-served search opportunities and produced features designed to rank and hold attention — optimizing for both search surface eligibility and audience engagement.',
    impact: 'Contributed to roughly a 15% organic traffic lift in two months. Top piece hit 125K readers with a 4:23 average time on page and a top-3 Google ranking for a competitive query.',
    initiatives: [
      { id: 'collider-actors', category: 'Editorial Feature', title: 'Actors and Their Favorite Movies', description: '125K readers. 4:23 average time on page. Top-3 Google result for a competitive search query. An editorial piece that found the right audience and kept them.',
        responsibilities: ['Identified the topic as a high-intent, under-served search opportunity', 'Researched and compiled the editorial content across a broad actor catalog', 'Wrote and optimized the full piece for both editorial quality and search performance', 'Achieved top-3 Google ranking for a competitive query; 4:23 average time on page'], url: 'https://collider.com/actors-and-their-favorite-movies/' },
      { id: 'collider-succession', category: 'Editorial Feature', title: 'Hardest Working Characters in Succession, Ranked', description: '89K views and a 22% social share rate. Timed to Succession\'s cultural peak — an editorial instinct about when and what to publish that paid off.',
        responsibilities: ['Identified the timing opportunity during Succession\'s peak cultural moment', 'Developed the editorial angle and ranking framework', 'Wrote and edited the full piece for Collider\'s film-literate audience', 'Achieved 22% social share rate — well above Collider baseline'], url: 'https://collider.com/hardest-workers-in-succession-ranked/' },
      { id: 'collider-fall', category: 'Editorial Feature', title: 'Movies To Get You Ready For Fall', description: 'A seasonal editorial piece selected for Google Discover. 76K+ readers. A strong example of the intersection between editorial sensibility and search-surface optimization.',
        responsibilities: ['Developed the seasonal concept and editorial selection criteria', 'Wrote and edited the full feature for Collider\'s audience', 'Optimized metadata and structure for search and Google Discover eligibility', 'Piece was selected for Google Discover, driving 76K+ readers'], url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/' },
    ],
  },
];


function getUrlLabel(url: string) {
  try {
    const h = new URL(url).hostname;
    if (h.includes('snapchat')) return 'Open in Snap';
    if (h.includes('youtube')) return 'Watch on YouTube';
    if (h.includes('collider')) return 'Read on Collider';
    if (h.includes('meta')) return 'Open on Meta';
  } catch {}
  return 'Open ↗';
}

export default function Work() {
  const [mounted, setMounted] = useState(false);
  const [activeCompany, setActiveCompany] = useState('meta');
  const [activeInitiative, setActiveInitiative] = useState<string | null>(null);
  const [publishedOpen, setPublishedOpen] = useState(true);
  const [systemsOpen, setSystemsOpen] = useState(true);
  const [splitPct, setSplitPct] = useState(42);
  const [isDraggingDivider, setIsDraggingDivider] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const param = new URLSearchParams(window.location.search).get('company');
    if (param && COMPANIES.find(c => c.id === param)) setActiveCompany(param);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (isDraggingDivider) {
        const pct = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 22), 72);
        setSplitPct(pct);
      }
    };
    const onUp = () => setIsDraggingDivider(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [isDraggingDivider]);
  const selectCompany = (id: string) => { setActiveCompany(id); setActiveInitiative(null); setPublishedOpen(true); setSystemsOpen(true); setTopOpen(false); };

  const company = COMPANIES.find(c => c.id === activeCompany)!;
  const initiative = activeInitiative ? company.initiatives.find(i => i.id === activeInitiative) ?? null : null;

  if (!mounted) return <div className="h-screen pt-[52px]" style={{ background: 'var(--t-bg)' }} />;

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden flex flex-col pt-[52px]" style={{ background: 'var(--t-bg)' }}>

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col flex-1">
        {/* Company strip */}
        <div className="flex-shrink-0 px-5 pt-5 pb-3 overflow-x-auto scrollbar-none flex items-center gap-2">
          {COMPANIES.map(c => (
            <button key={c.id} onClick={() => selectCompany(c.id)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all"
              style={{
                background: c.id === activeCompany ? 'var(--t-primary)' : 'var(--t-surface)',
                color: c.id === activeCompany ? 'var(--t-bg)' : 'var(--t-secondary)',
                border: '1px solid var(--t-border)',
              }}>
              {c.name}
            </button>
          ))}
        </div>

        {/* Company content */}
        <div className="flex-1 overflow-y-auto scrollbar-none pb-24">
          <AnimatePresence mode="wait">
            <motion.div key={`m-${activeCompany}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: E }}>

              {/* Centered hero */}
              <div className="flex flex-col items-center text-center px-6 pt-8 pb-7"
                style={{ borderBottom: '1px solid var(--t-border)' }}>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-3"
                  style={{ color: 'var(--t-tertiary)' }}>{company.role}</p>
                <p className="text-[46px] font-semibold tracking-[-0.03em] leading-[0.93] mb-3"
                  style={{ color: 'var(--t-primary)' }}>{company.name}</p>
                <p className="text-[12px] uppercase tracking-[0.08em]"
                  style={{ color: 'var(--t-tertiary)' }}>{company.period}</p>
              </div>

              {/* Stats — big focal numbers */}
              {company.stats && company.stats.length > 0 && (
                <div className="grid" style={{
                  gridTemplateColumns: `repeat(${company.stats.length}, 1fr)`,
                  borderBottom: '1px solid var(--t-border)',
                }}>
                  {company.stats.map((s, i) => (
                    <div key={s.label} className="flex flex-col items-center py-7"
                      style={{ borderRight: i < company.stats!.length - 1 ? '1px solid var(--t-border)' : undefined }}>
                      <span className="text-[36px] font-semibold tracking-[-0.03em] leading-none"
                        style={{ color: 'var(--t-primary)' }}>{s.value}</span>
                      <span className="text-[10px] mt-2 text-center uppercase tracking-[0.1em] px-2"
                        style={{ color: 'var(--t-tertiary)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Impact — centered pull quote */}
              <div className="flex flex-col items-center text-center px-6 py-8"
                style={{ borderBottom: '1px solid var(--t-border)' }}>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-4"
                  style={{ color: 'var(--t-tertiary)' }}>Impact</p>
                <p className="text-[17px] font-medium leading-[1.6] max-w-[300px]"
                  style={{ color: 'var(--t-primary)' }}>{company.impact}</p>
              </div>

              {/* What I Built */}
              <div className="px-5 py-7" style={{ borderBottom: '1px solid var(--t-border)' }}>
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-5"
                  style={{ color: 'var(--t-tertiary)' }}>What I Built</p>
                <ul className="flex flex-col gap-4">
                  {company.overview.map((item, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <span className="mt-[9px] w-[3px] h-[3px] rounded-full flex-shrink-0"
                        style={{ background: 'var(--t-border-strong)' }} />
                      <span className="text-[14px] leading-[1.65]"
                        style={{ color: 'var(--t-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Published work */}
              {company.initiatives.filter(i => i.url).length > 0 && (
                <div className="py-7" style={{ borderBottom: company.initiatives.filter(i => !i.url).length > 0 ? '1px solid var(--t-border)' : undefined }}>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-5 px-5"
                    style={{ color: 'var(--t-tertiary)' }}>Published</p>
                  {company.initiatives.filter(i => i.url).map((init, idx, arr) => (
                    <a key={init.id} href={init.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-start justify-between gap-4 px-5 py-4"
                      style={{ borderBottom: idx < arr.length - 1 ? '1px solid var(--t-divider)' : undefined }}>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.1em] font-medium mb-1.5"
                          style={{ color: 'var(--t-tertiary)' }}>{init.category}</p>
                        <p className="text-[14px] font-medium leading-snug mb-2"
                          style={{ color: 'var(--t-primary)' }}>{init.title}</p>
                        <p className="text-[12px] leading-[1.6]"
                          style={{ color: 'var(--t-secondary)' }}>{init.description}</p>
                      </div>
                      <span className="flex-shrink-0 text-[15px] mt-0.5" style={{ color: 'var(--t-tertiary)' }}>↗</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Systems & process */}
              {company.initiatives.filter(i => !i.url).length > 0 && (
                <div className="py-7">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-5 px-5"
                    style={{ color: 'var(--t-tertiary)' }}>Systems & Process</p>
                  {company.initiatives.filter(i => !i.url).map((init, idx, arr) => (
                    <div key={init.id} className="px-5 py-4"
                      style={{ borderBottom: idx < arr.length - 1 ? '1px solid var(--t-divider)' : undefined }}>
                      <p className="text-[10px] uppercase tracking-[0.1em] font-medium mb-1.5"
                        style={{ color: 'var(--t-tertiary)' }}>{init.category}</p>
                      <p className="text-[14px] font-medium leading-snug mb-2"
                        style={{ color: 'var(--t-primary)' }}>{init.title}</p>
                      <p className="text-[12px] leading-[1.6]"
                        style={{ color: 'var(--t-secondary)' }}>{init.description}</p>
                    </div>
                  ))}
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Body — desktop only */}
      <div className="hidden md:flex flex-1 min-h-0">

        {/* Sidebar */}
        <div
          className="hidden lg:flex flex-col w-[220px] flex-shrink-0 py-10 px-6"
          style={{ borderRight: '1px solid var(--t-border)' }}
        >
          <p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-6" style={{ color: 'var(--t-tertiary)' }}>
            Experience
          </p>
          <div className="flex flex-col gap-0.5 flex-1">
            {COMPANIES.map((c) => {
              const active = c.id === activeCompany;
              return (
                <button
                  key={c.id}
                  onClick={() => selectCompany(c.id)}
                  className="text-left w-full px-3 py-2.5 rounded-lg transition-all"
                  style={{ background: active ? 'var(--t-surface)' : 'transparent' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--t-surface)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="block text-[14px] transition-colors" style={{ color: active ? 'var(--t-primary)' : 'var(--t-secondary)', fontWeight: active ? 500 : 400 }}>
                    {c.name}
                  </span>
                  <span className="block text-[11px] mt-0.5" style={{ color: 'var(--t-tertiary)' }}>
                    {c.period}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Main panel */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <AnimatePresence mode="wait">

            {/* ── Initiative detail ── */}
            {initiative ? (
              <motion.div
                key={`d-${initiative.id}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: E }}
                className="h-full overflow-y-auto scrollbar-none px-8 lg:px-12 py-10 pb-20 max-w-[620px]"
              >
                <button onClick={() => setActiveInitiative(null)}
                  className="flex items-center gap-1.5 text-[13px] mb-8 transition-colors"
                  style={{ color: 'var(--t-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-secondary)')}>
                  ← {company.name}
                </button>

                <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>
                  {initiative.category}
                </p>
                <h2 className="text-[24px] font-semibold tracking-[-0.015em] leading-snug mb-5" style={{ color: 'var(--t-primary)' }}>
                  {initiative.title}
                </h2>
                <p className="text-[15px] leading-[1.65] mb-8 max-w-[480px]" style={{ color: 'var(--t-secondary)' }}>
                  {initiative.description}
                </p>
                {initiative.responsibilities && initiative.responsibilities.length > 0 && (
                  <div className="mb-8">
                    <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>
                      My Role
                    </p>
                    <ul className="flex flex-col gap-2">
                      {initiative.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] leading-[1.6]" style={{ color: 'var(--t-secondary)' }}>
                          <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--t-tertiary)' }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {initiative.url && (
                  <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--t-divider)' }}>
                    <p className="text-[10px] uppercase tracking-[0.1em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>
                      Read the work
                    </p>
                    <a href={initiative.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl transition-opacity hover:opacity-70 group"
                      style={{ background: 'var(--t-surface)', border: '1px solid var(--t-border)' }}>
                      <div>
                        <p className="text-[13px] font-medium leading-snug" style={{ color: 'var(--t-primary)' }}>
                          {getUrlLabel(initiative.url)}
                        </p>
                        <p className="text-[11px] mt-1" style={{ color: 'var(--t-tertiary)' }}>
                          {(() => { try { return new URL(initiative.url).hostname.replace('www.',''); } catch { return ''; } })()}
                        </p>
                      </div>
                      <span className="text-[20px] flex-shrink-0 ml-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--t-secondary)' }}>↗</span>
                    </a>
                  </div>
                )}
              </motion.div>

            /* ── Company overview ── */
            ) : (
              <motion.div
                key={`c-${activeCompany}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: E }}
                className="h-full flex flex-col px-8 lg:px-14"
              >
                {/* Header: role + name/period left, stats right — fixed, doesn't scroll */}
                <div className="flex-shrink-0 pt-8 pb-0">
                <div className="flex items-start justify-between gap-8 mb-6 flex-wrap">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-3" style={{ color: 'var(--t-tertiary)' }}>
                      {company.role}
                    </p>
                    <h1 className="text-[32px] font-semibold tracking-[-0.025em] leading-tight" style={{ color: 'var(--t-primary)' }}>
                      {company.name}
                    </h1>
                    <p className="text-[13px] mt-1.5" style={{ color: 'var(--t-tertiary)' }}>{company.period}</p>
                  </div>
                  {company.stats && company.stats.length > 0 && (
                    <div className="flex items-end gap-7 pt-8">
                      {company.stats.map((s, i) => (
                        <span key={s.label} className="flex items-end gap-7">
                          <div className="text-right">
                            <p className="text-[22px] font-semibold tracking-[-0.02em] leading-none" style={{ color: 'var(--t-primary)' }}>{s.value}</p>
                            <p className="text-[10px] uppercase tracking-[0.08em] mt-1.5" style={{ color: 'var(--t-tertiary)' }}>{s.label}</p>
                          </div>
                          {i < company.stats!.length - 1 && (
                            <span className="pb-1 text-[11px]" style={{ color: 'var(--t-border)' }}>·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Summary */}
                <p className="text-[15px] leading-[1.7] mb-6 max-w-[620px]" style={{ color: 'var(--t-secondary)' }}>
                  {company.summary}
                </p>
                </div>{/* end flex-shrink-0 */}

                {/* Two-column: draggable on desktop, stacked on mobile */}
                {(() => {
                  const published = company.initiatives.filter(i => i.url);
                  const systems = company.initiatives.filter(i => !i.url);

                  const InitRow = ({ init, idx }: { init: Initiative; idx: number }) => (
                    <motion.button
                      key={init.id}
                      onClick={() => setActiveInitiative(init.id)}
                      className="w-full text-left flex items-center justify-between py-3 group"
                      style={{ borderBottom: '1px solid var(--t-divider)' }}
                      initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18, delay: 0.02 + idx * 0.02, ease: E }}
                    >
                      <div className="min-w-0 pr-3">
                        <p className="text-[10px] uppercase tracking-[0.08em] mb-0.5" style={{ color: 'var(--t-tertiary)' }}>{init.category}</p>
                        <p className="text-[13px] leading-snug" style={{ color: 'var(--t-primary)', fontWeight: 450 }}>{init.title}</p>
                      </div>
                      <span className="text-[12px] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--t-secondary)' }}>→</span>
                    </motion.button>
                  );

                  const ctxContent = (
                    <>
                      <p className="text-[10px] uppercase tracking-[0.12em] font-medium mb-6" style={{ color: 'var(--t-tertiary)' }}>Context</p>
                      <div className="flex flex-col">
                        {[
                          { label: 'Problem', text: company.problem },
                          { label: 'System', text: company.system },
                          { label: 'Impact', text: company.impact },
                        ].map(({ label, text }, i) => (
                          <div key={label} className="pb-5" style={{ borderTop: i > 0 ? '1px solid var(--t-divider)' : 'none', paddingTop: i > 0 ? '20px' : '0' }}>
                            <p className="text-[10px] uppercase tracking-[0.1em] font-semibold mb-2" style={{ color: 'var(--t-secondary)' }}>{label}</p>
                            <p className="text-[13px] leading-[1.7]" style={{ color: 'var(--t-secondary)' }}>{text}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  );

                  const workContent = (
                    <>
                      {published.length > 0 && (
                        <div className="mb-6">
                          <button onClick={() => setPublishedOpen(o => !o)} className="w-full flex items-center justify-between pb-3 mb-1">
                            <div className="flex items-center gap-2">
                              <p className="text-[10px] uppercase tracking-[0.12em] font-medium" style={{ color: 'var(--t-tertiary)' }}>Published</p>
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ background: 'var(--t-surface)', color: 'var(--t-secondary)' }}>{published.length}</span>
                            </div>
                            <motion.svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--t-tertiary)', display: 'block', flexShrink: 0 }} animate={{ rotate: publishedOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: E }}><path d="M1 1l5 4.5L11 1"/></motion.svg>
                          </button>
                          <AnimatePresence>
                            {publishedOpen && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22, ease: E }} style={{ overflow: 'hidden' }}>
                                {(() => {
                                  const getSubgroup = (init: Initiative) => {
                                    if (['Developer Story','Year in Review','Success Story','Creator Story'].includes(init.category)) return 'Developer Stories';
                                    if (init.category.includes('GTM')) return 'GTM Guides';
                                    return null;
                                  };
                                  const grouped = published.reduce<Record<string, Initiative[]>>((acc, init) => {
                                    const sg = getSubgroup(init) ?? '_flat';
                                    (acc[sg] = acc[sg] || []).push(init);
                                    return acc;
                                  }, {});
                                  const keys = Object.keys(grouped);
                                  const useSubgroups = keys.length > 1 && !keys.every(k => k === '_flat');
                                  if (!useSubgroups) return published.map((init, i) => <InitRow key={init.id} init={init} idx={i} />);
                                  return keys.map(sg => (
                                    <div key={sg}>
                                      <p className="text-[9px] uppercase tracking-[0.12em] font-semibold pt-3 pb-2" style={{ color: 'var(--t-secondary)' }}>{sg}</p>
                                      {grouped[sg].map((init, i) => <InitRow key={init.id} init={init} idx={i} />)}
                                    </div>
                                  ));
                                })()}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                      {systems.length > 0 && (
                        <div>
                          <button onClick={() => setSystemsOpen(o => !o)} className="w-full flex items-center justify-between pb-3 mb-1">
                            <div className="flex items-center gap-2">
                              <p className="text-[10px] uppercase tracking-[0.12em] font-medium" style={{ color: 'var(--t-tertiary)' }}>{published.length > 0 ? 'Process & Systems' : 'Work'}</p>
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ background: 'var(--t-surface)', color: 'var(--t-secondary)' }}>{systems.length}</span>
                            </div>
                            <motion.svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--t-tertiary)', display: 'block', flexShrink: 0 }} animate={{ rotate: systemsOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: E }}><path d="M1 1l5 4.5L11 1"/></motion.svg>
                          </button>
                          <AnimatePresence>
                            {systemsOpen && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22, ease: E }} style={{ overflow: 'hidden' }}>
                                {systems.map((init, i) => <InitRow key={init.id} init={init} idx={i} />)}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </>
                  );

                  return (
                    <div ref={containerRef} className="flex-1 min-h-0 overflow-hidden flex flex-col" style={{ userSelect: isDraggingDivider ? 'none' : undefined }}>

                      {/* Divider with More Context floating on it */}
                      <div className="flex-shrink-0 relative flex items-center justify-center" style={{ height: '36px' }}>
                        <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: 'var(--t-divider)' }} />
                        <button
                          onClick={() => setTopOpen(o => !o)}
                          className="relative z-10 flex items-center gap-[7px] px-3 group"
                          style={{ background: 'var(--t-bg)', outline: 'none' }}
                        >
                          <span className="text-[10px] uppercase tracking-[0.12em] font-medium transition-opacity duration-300" style={{ color: 'var(--t-tertiary)', opacity: topOpen ? 0.5 : 1 }}>
                            {topOpen ? 'Less' : 'More Context'}
                          </span>
                          <motion.svg
                            width="20" height="10" viewBox="0 0 20 10" fill="none"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                            style={{ color: 'var(--t-tertiary)', display: 'block', flexShrink: 0 }}
                            animate={topOpen
                              ? { rotate: 180, opacity: 1 }
                              : { rotate: 0, opacity: [0.3, 1, 0.3] }
                            }
                            transition={topOpen
                              ? { rotate: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
                              : { opacity: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
                            }
                          >
                            <path d="M1 1.5l9 7 9-7" />
                          </motion.svg>
                        </button>
                      </div>

                      {/* Reveal panel */}
                      <AnimatePresence>
                        {topOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: 'hidden', flexShrink: 0, borderBottom: '1px solid var(--t-divider)' }}
                          >
                            <div className="px-8 lg:px-14 py-5">
                              <p className="text-[10px] uppercase tracking-[0.12em] font-medium mb-4" style={{ color: 'var(--t-tertiary)' }}>Key Contributions</p>
                              <ul className="flex flex-col gap-2.5 max-w-[720px]">
                                {company.overview.map((point, i) => (
                                  <li key={i} className="flex items-start gap-3 text-[13px] leading-[1.65]" style={{ color: 'var(--t-secondary)' }}>
                                    <span className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: 'var(--t-border-strong)' }} />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Columns wrapper */}
                      <div className="flex-1 min-h-0">

                      {/* Desktop: side-by-side with draggable divider */}
                      <div className="hidden lg:flex h-full" style={{ height: '100%' }}>
                        <div className="overflow-y-auto scrollbar-none pt-7 pb-10 pr-10 min-w-0" style={{ width: `${splitPct}%` }}>
                          {ctxContent}
                        </div>

                        {/* Drag handle */}
                        <div
                          onMouseDown={e => { setIsDraggingDivider(true); e.preventDefault(); }}
                          className="flex-shrink-0 cursor-col-resize relative flex items-start justify-center group"
                          style={{ width: '16px' }}
                        >
                          <div className="w-px h-full transition-colors duration-150" style={{ background: isDraggingDivider ? 'var(--t-secondary)' : 'var(--t-border)' }} />
                          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity">
                            {[0,1,2].map(i => (
                              <div key={i} className="w-[3px] h-[3px] rounded-full" style={{ background: isDraggingDivider ? 'var(--t-primary)' : 'var(--t-border-strong)' }} />
                            ))}
                          </div>
                        </div>

                        <div className="overflow-y-auto scrollbar-none pt-7 pb-10 pl-10 min-w-0" style={{ width: `calc(${100 - splitPct}% - 16px)` }}>
                          {workContent}
                        </div>
                      </div>


                      </div>{/* end columns wrapper */}
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>{/* end desktop body */}

    </div>
  );
}
