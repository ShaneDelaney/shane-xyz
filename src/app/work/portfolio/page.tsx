'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface Card {
  id: string;
  company: string;
  category: string;
  title: string;
  url?: string;
  hook: string;
  about: string;
  impact: string;
  period: string;
  tags: string[];
  metrics?: string[];
  bg: string;
  accent: string;
}

const INTRO_SECTIONS = [
  { company: 'Meta',          count: 16, label: 'pieces' },
  { company: 'Snap Inc.',     count: 8,  label: 'projects' },
  { company: 'Phony Content', count: 8,  label: 'stories' },
  { company: 'StockX',        count: 4,  label: 'campaigns' },
  { company: 'Collider',      count: 3,  label: 'features' },
];

const CARDS: Card[] = [
  // ── INTRO ─────────────────────────────────────────────────────────────────
  {
    id: 'intro',
    company: 'Shane Delaney',
    category: 'Content Operations & Ecosystem Storytelling',
    title: 'Introduction',
    hook: 'Los Angeles. Five companies. Editorial operations, content strategy, and ecosystem storytelling.',
    about: 'Use ← → to navigate or swipe on mobile. Click any company below to jump to that section.',
    impact: 'Content Marketing Coordinator II at Meta — Project Lead for Horizon\'s developer content program. Previously Trend Producer at Snap Inc. Editorial production, systems design, and content strategy across media, tech, and consumer platforms.',
    period: '2021 – Present',
    tags: [],
    bg: 'linear-gradient(145deg, #0a0a0a 0%, #141414 100%)',
    accent: '#e5e5e5',
  },

  // ── META — SYSTEM CONTEXT ─────────────────────────────────────────────────
  {
    id: 'meta-developer-story-pipeline',
    company: 'Meta',
    category: 'Content System',
    title: 'Developer Story Pipeline',
    hook: 'Building and managing the storytelling pipeline for Horizon creators.',
    about: 'Led the development of builder success stories for Meta\'s Horizon ecosystem — sourcing developers, conducting interviews, and translating technical innovations into accessible narratives for broader audiences.',
    impact: 'Served as Project Lead and System Owner across the full production lifecycle: outreach, narrative development, interview coordination, cross-functional review, and publication. Built the operational infrastructure that made the program repeatable at scale.',
    period: 'Oct 2025 – Mar 2026',
    tags: ['Developer Ecosystem', 'Story Development', 'Technical Storytelling', 'Content Strategy'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'meta-xfn-pipeline',
    company: 'Meta',
    category: 'Editorial Operations',
    title: 'Cross-Functional Editorial Pipeline',
    hook: 'Coordinating storytelling across product, analytics, and marketing teams.',
    about: 'Worked cross-functionally with product, analytics, marketing, and legal teams to guide stories from concept through approval and publication — maintaining narrative quality while satisfying platform, legal, and brand requirements.',
    impact: 'Owned XFN review coordination across 5 internal teams on every high-visibility launch. Ran formal stat verification with Data Science to confirm 100% metric accuracy prior to publication on all 13 pieces.',
    period: 'Oct 2025 – Mar 2026',
    tags: ['Editorial Operations', 'Cross-Functional Collaboration', 'Content Systems'],
    metrics: ['5', 'teams coordinated', '100%', 'stat accuracy'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'meta-developer-growth-narratives',
    company: 'Meta',
    category: 'Case Studies',
    title: 'Developer Growth Narratives',
    hook: 'Highlighting how creators succeed within the Horizon ecosystem.',
    about: 'Produced case studies spotlighting how developers and creators build successful experiences on the platform — demonstrating the real-world impact of Horizon tools and ecosystem support.',
    impact: 'Authored 7 developer success stories ranging from bootstrapped indie studios to top-ranked worlds within months of launch — building platform credibility by documenting the full arc of creator growth.',
    period: 'Oct 2025 – Mar 2026',
    tags: ['Case Studies', 'Creator Economy', 'Platform Growth'],
    metrics: ['7', 'success stories', '13', 'total pieces'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },

  // ── META — BUILDER STORIES ────────────────────────────────────────────────
  {
    id: 'vail-vr-part-one',
    company: 'Meta',
    category: 'Developer Story',
    title: 'VAIL VR (Part One): From Couch Surfing to $15M in Crowdfunding',
    url: 'https://developers.meta.com/horizon/blog/vail-vr-part-one-couch-surfing-to-15m-in-crowdfunding/',
    hook: 'A VR studio raised $15M from players who hadn\'t played the game yet — before it was even free to play.',
    about: 'Part one of a two-part spotlight on AEXLAB and VAIL VR — tracking the studio\'s journey from couch-surfing origins to one of VR gaming\'s most successful crowdfunding campaigns.',
    impact: 'Production lead across five documented meetings over two weeks. Shaped the narrative arc, coordinated the Scout House interview, managed developer approval with AEXLAB\'s Chandler Steele, and drove XFN review through to publication.',
    period: 'Nov 2025',
    tags: ['Developer Story', 'Production Lead', 'Agency Coordination', 'XFN Review'],
    metrics: ['$15M raised', '5 production meetings'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'vail-vr-part-two',
    company: 'Meta',
    category: 'Developer Story',
    title: 'VAIL VR (Part Two): AEXLAB\'s Live Ops Engine',
    url: 'https://developers.meta.com/horizon/blog/vail-vr-part-two-aexlabs-live-ops-engine/',
    hook: 'Raising $15M was the beginning. Keeping players is the harder problem.',
    about: 'The second installment — goes inside AEXLAB\'s live operations engine and documents how they transitioned VAIL VR to free-to-play using data-driven player retention and content cadence.',
    impact: 'Production lead end-to-end. Directed the live ops narrative angle, coordinated legal review for the financial and technical specifics, and drove the full cycle through to publication.',
    period: 'Nov 2025',
    tags: ['Developer Story', 'Production Lead', 'Legal Coordination'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'saydeechan',
    company: 'Meta',
    category: 'Developer Story',
    title: 'Saydeechan: Bringing Worlds to Japan',
    url: 'https://developers.meta.com/horizon/blog/worlds/saydeechan-bringing-worlds-to-japan/',
    hook: 'One creator decided Horizon Worlds needed a home in Japan. So they built it.',
    about: 'A solo creator story focused on cultural localization as a product strategy — one of the few ecosystem stories to put geography and language at the center of the narrative.',
    impact: 'Sourced and pitched the story. Developed the Japan localization framing, managed the Scout House interview, coordinated assets, and drove the full XFN review cycle through to publication.',
    period: 'Dec 2025',
    tags: ['Developer Story', 'Sourcing', 'Narrative Development', 'Production Lead'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'grow-a-farm',
    company: 'Meta',
    category: 'Developer Story',
    title: 'Grow a Farm: How Two Gaming Influencers Built a Top Ranked World',
    url: 'https://developers.meta.com/horizon/blog/grow-a-farm-how-two-gaming-influencers-built-top-ranked-world/',
    hook: 'Two YouTubers. No dev experience. Top 10 in two months.',
    about: 'SnakeThug7 (1.86M YouTube subscribers) and Dinco built a Horizon Worlds experience with zero prior development background — and reached the top 10 mobile worlds within two months of launch.',
    impact: 'Production lead end-to-end. Attended the Scout House interview October 29 and V1 review November 4. Authored the internal Workplace announcement post upon publication November 19, 2025.',
    period: 'Nov 2025',
    tags: ['Developer Story', 'Production Lead', 'Creator Sourcing'],
    metrics: ['Top 10', 'mobile worlds'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'matthiaos',
    company: 'Meta',
    category: 'Developer Story',
    title: 'Matthiaos: Pioneering Change in Worlds Through Passion and Community',
    url: 'https://developers.meta.com/horizon/blog/matthiaos-pioneering-change-in-worlds-through-passion-and-community/',
    hook: 'The most important builders aren\'t always the ones with the highest numbers.',
    about: 'A creator spotlight on Matthiaos — documenting community-driven worldbuilding and what it means to build for the players around you, not just the metrics above you.',
    impact: 'Production lead end-to-end. Owned sourcing, narrative development, interview coordination through Scout House, asset collection, and the full XFN review cycle from outreach through publication.',
    period: 'Feb 2026',
    tags: ['Developer Story', 'Production Lead', 'Community'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'year-in-review',
    company: 'Meta',
    category: 'Year in Review',
    title: 'Year in Review: Insights from 2025\'s Breakout Creators and Developers',
    url: 'https://developers.meta.com/horizon/blog/year-in-review-insights-2025-breakout-creators-developers/',
    hook: 'A year-in-review editorial surfacing what scaled, what didn\'t, and who defined 2025 in the Horizon ecosystem.',
    about: 'A 2025 year-in-review editorial surfacing patterns from the platform\'s breakout creators and developers — what scaled, what didn\'t, and what defined the year.',
    impact: 'Editorial lead and production owner. Developed the concept, owned all copy and narrative direction, ran stat verification with Data Science, and coordinated XFN review across Product, DevRel, Design, and Legal.',
    period: 'Feb 2026',
    tags: ['Editorial Lead', 'Data Verification', 'XFN Review'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },
  {
    id: 'kawaii-creator',
    company: 'Meta',
    category: 'Success Story',
    title: 'Kawaii.Creator — Success Story',
    url: 'https://developers.meta.com/horizon/discover/success-stories/kawaii-creator/',
    hook: 'A distinctive visual world, built inside ours.',
    about: 'Success story featured on the Meta Horizon developer portal\'s Discover section — spotlighting Kawaii.Creator and their work building on the platform.',
    impact: 'Production lead end-to-end. Owned sourcing, narrative development, and the full production and review cycle through to publication on the success stories portal.',
    period: 'Feb 2026',
    tags: ['Success Story', 'Production Lead'],
    bg: 'linear-gradient(145deg, #0D1B3E 0%, #162252 100%)',
    accent: '#60A5FA',
  },

  // ── META — GTM GUIDES ─────────────────────────────────────────────────────
  {
    id: 'gtm-marketing-plan',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Develop a Marketing Plan for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-marketing-plan/',
    hook: 'The anchor guide in a six-part series — marketing strategy, audience research, and channel selection for VR app launches.',
    about: 'The anchor guide in a six-part series — covers marketing strategy, audience research, and channel identification, with supplementary worksheets and checklists designed to be used during a live launch sprint.',
    impact: 'Primary author and editorial lead. Owned all copy from outline through publication. Created the supplementary worksheets and checklists. Coordinated XFN review across five teams and ran formal stat verification with Data Science.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination', 'Stat Verification'],
    metrics: ['Part 1 of 6', 'Includes worksheets'],
    bg: 'linear-gradient(145deg, #0A2030 0%, #0d3045 100%)',
    accent: '#38BDF8',
  },
  {
    id: 'gtm-influencer',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Leverage Influencer Partnerships for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-influencer-marketing/',
    hook: 'A practical guide to building influencer partnerships for VR developers entering creator marketing.',
    about: 'Practical strategy for building influencer partnerships to grow VR app visibility — covering tiers, outreach, and campaign structure for developers new to creator marketing.',
    impact: 'Primary author and editorial lead. Owned all copy and direction. Managed XFN review across five teams and formal stat verification before launch.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination'],
    metrics: ['Part 2 of 6'],
    bg: 'linear-gradient(145deg, #0A2030 0%, #0d3045 100%)',
    accent: '#38BDF8',
  },
  {
    id: 'gtm-social',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Build Social Media and Community Engagement for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-social-media/',
    hook: 'Community-building and social media strategy for VR developers launching on Meta Horizon.',
    about: 'Community-building tactics and social media strategies tailored for VR developers on Meta Horizon — covering channel selection, content cadence, and community management.',
    impact: 'Primary author and editorial lead. Owned all copy and direction. Managed XFN review and publication schedule across all five teams.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination'],
    metrics: ['Part 3 of 6'],
    bg: 'linear-gradient(145deg, #0A2030 0%, #0d3045 100%)',
    accent: '#38BDF8',
  },
  {
    id: 'gtm-assets',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Master Marketing Assets for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-marketing-assets/',
    hook: 'Best practices for VR app marketing assets — store page screenshots, trailers, and social creative.',
    about: 'Covers creating effective marketing assets for promoting VR apps and Horizon Worlds experiences — from store page screenshots to trailers and social creative.',
    impact: 'Primary author and editorial lead. Owned all copy and direction. Managed XFN review and publication.',
    period: 'Jan 2026',
    tags: ['GTM Guide', 'Primary Author', 'XFN Coordination'],
    metrics: ['Part 4 of 6'],
    bg: 'linear-gradient(145deg, #0A2030 0%, #0d3045 100%)',
    accent: '#38BDF8',
  },
  {
    id: 'gtm-pr',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'PR Strategy for Your VR App',
    url: 'https://developers.meta.com/horizon/resources/gtm-pr-for-vr/',
    hook: 'PR strategy for VR developers — navigating press cycles, review coverage, and journalist relationships specific to the VR space.',
    about: 'Public relations strategy and media outreach for VR developers — navigating press cycles, review coverage, and journalist relationships specific to the VR space.',
    impact: 'Co-authored with a Documentation Engineer at Meta. Collaborated on copy and editorial direction while managing production logistics, XFN review coordination, and the publication pipeline.',
    period: 'Feb 2026',
    tags: ['GTM Guide', 'Co-Author', 'XFN Coordination'],
    metrics: ['Part 5 of 6'],
    bg: 'linear-gradient(145deg, #0A2030 0%, #0d3045 100%)',
    accent: '#38BDF8',
  },
  {
    id: 'gtm-app-demos',
    company: 'Meta',
    category: 'GTM Guide',
    title: 'Create App Demos That Convert',
    url: 'https://developers.meta.com/horizon/resources/gtm-app-demos/',
    hook: 'Best practices for building VR app demos that convert player interest into installs.',
    about: 'Best practices for building compelling app demos that convert player interest into installs — the final guide in the six-part GTM series.',
    impact: 'Co-authored with a Documentation Engineer at Meta. Collaborated on copy and editorial direction through to publication.',
    period: 'Feb 2026',
    tags: ['GTM Guide', 'Co-Author', 'XFN Coordination'],
    metrics: ['Part 6 of 6'],
    bg: 'linear-gradient(145deg, #0A2030 0%, #0d3045 100%)',
    accent: '#38BDF8',
  },

  // ── SNAP INC. ─────────────────────────────────────────────────────────────
  {
    id: 'snap-spotlight',
    company: 'Snap Inc.',
    category: 'Content Programming',
    title: 'Spotlight Programming Lead',
    hook: 'Daily editorial oversight of a 1,000+ piece pipeline across one of the highest-scale content surfaces in social media.',
    about: 'Snapchat Spotlight is one of the highest-scale content surfaces in social media. As Programming Lead, owned the full daily editorial pipeline — quality, safety, amplification decisions — across 1,000+ pieces of content per day.',
    impact: 'Synthesized performance data daily to surface breakout trends, led editorial syncs translating data into real-time amplification decisions, and developed standardized EIs and content brief templates that reduced operational friction across the team.',
    period: 'Mar – Oct 2025',
    tags: ['Content Programming', 'Editorial Pipeline', 'Trend Analysis', 'Scale'],
    metrics: ['500M+', 'monthly viewers', '1,000+', 'pieces/day'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },
  {
    id: 'snap-nux',
    company: 'Snap Inc.',
    category: 'Product Collaboration',
    title: 'New User Experience Curation',
    hook: 'Curating the first screen a new user sees — 300+ pieces reviewed per cohort, segmented by interest.',
    about: 'Snapchat\'s New User Experience shapes what new users see on the platform. The teen NUX (13–17) required editorial judgment layered on algorithmic signals to build personalized onboarding feeds that drove retention.',
    impact: 'Curated personalized UGC feeds for teen cohorts using data-driven guidelines, reviewing 300+ pieces per cohort segmented by interest. Collaborated with product engineering teams. Achieved 10% higher retention than platform average.',
    period: 'Mar – Oct 2025',
    tags: ['Content Curation', 'Cohort Segmentation', 'Data-Driven', 'Product'],
    metrics: ['300+', 'pieces/cohort', '10%', 'above avg retention'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },
  {
    id: 'snap-boosted',
    company: 'Snap Inc.',
    category: 'Data & Creator Strategy',
    title: 'Creator Identification System',
    hook: 'A creator identification system built with Data Science to surface emerging talent earlier at scale.',
    about: 'Snap\'s boosted content initiative required identifying emerging creators earlier than algorithmic signals could surface them at scale — built in collaboration with Data Science to create a systematic early-identification approach.',
    impact: 'Collaborated with Data Science to build the creator identification system. Translated complex data findings into strategic content guidance, created internal documentation for 10+ XFN teams, and influenced monetization strategy across 1M+ creators.',
    period: 'Mar – Oct 2025',
    tags: ['Data Strategy', 'Creator Tools', 'XFN Collaboration', 'Process Documentation'],
    metrics: ['1M+', 'monetized creators', '10+', 'XFN teams'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },

  {
    id: 'snap-trend-intelligence',
    company: 'Snap Inc.',
    category: 'Trend Intelligence',
    title: 'Trend Intelligence & Cultural Signals',
    hook: 'Detecting breakout content across a 1,000+ piece daily pipeline.',
    about: 'Analyzed engagement signals across Spotlight — including completion rate, velocity, and viewer retention — to identify breakout content early. These insights informed editorial amplification decisions across one of the largest UGC discovery surfaces in social media.',
    impact: 'Synthesized performance data into actionable trend reports used by the programming team for real-time amplification decisions. Developed a repeatable framework for distinguishing genuine cultural signal from noise at scale.',
    period: 'Mar – Oct 2025',
    tags: ['Trend Analysis', 'Content Programming', 'Editorial Pipeline', 'Data Signals', 'Scale'],
    metrics: ['1,000+', 'pieces reviewed daily', '500M+', 'monthly viewers'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },
  {
    id: 'snap-breakout-detection',
    company: 'Snap Inc.',
    category: 'Breakout Detection',
    title: 'Breakout Content Identification',
    hook: 'Flagging breakout content before it reached algorithmic momentum — using data signals, not hindsight.',
    about: 'A systematic approach to early content identification across Spotlight — synthesizing completion rates, watch time velocity, and engagement patterns to surface high-potential Snaps ahead of the algorithm.',
    impact: 'Developed and applied a consistent early-detection framework that informed daily amplification decisions and reduced reliance on lagging algorithmic signals. Findings fed directly into editorial syncs and distribution prioritization.',
    period: 'Mar – Oct 2025',
    tags: ['Content Analysis', 'Early Detection', 'Data Signals', 'Spotlight'],
    metrics: ['1,000+', 'pieces evaluated daily'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },
  {
    id: 'snap-campaign-sourcing',
    company: 'Snap Inc.',
    category: 'Campaign Sourcing',
    title: 'Marketing Campaign Content Sourcing',
    hook: 'Identifying standout creator content for platform marketing campaigns.',
    about: 'Sourced high-performing Spotlight Snaps for use in Snap marketing activations, including the "Say It in a Snap" campaign that featured creator content across large-scale promotional placements.',
    impact: 'Contributed content selections that reached Times Square subway placements and national campaign usage — demonstrating that programming-level editorial judgment extends well beyond the feed.',
    period: 'Mar – Oct 2025',
    tags: ['Creator Strategy', 'Campaign Activation', 'Content Sourcing', 'Platform Marketing'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },
  {
    id: 'snap-editorial-systems',
    company: 'Snap Inc.',
    category: 'Editorial Systems',
    title: 'Editorial Systems & Workflow Design',
    hook: 'The operational infrastructure that made a 1,000+ piece daily pipeline manageable.',
    about: 'Developed standardized editorial briefs, evaluation templates, and cross-team documentation to systematize how the Spotlight programming team evaluated and surfaced high-performing content at scale.',
    impact: 'Reduced operational friction across the daily programming workflow. Built replicable systems that improved cross-team coordination and allowed editorial judgment to be applied consistently across high-volume content volume.',
    period: 'Mar – Oct 2025',
    tags: ['Editorial Systems', 'Process Design', 'Documentation', 'Operations'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },
  {
    id: 'snap-product-collab',
    company: 'Snap Inc.',
    category: 'Product Collaboration',
    title: 'Cross-Functional Product Collaboration',
    hook: 'Working with product teams to refine content discovery surfaces.',
    about: 'Collaborated with product and engineering teams to inform new user experience feeds and programming strategies based on observed engagement patterns and creator performance.',
    impact: 'Contributed editorial and programming insights directly to product development cycles — improving new user onboarding feeds and supporting experimentation across Spotlight surfaces. Achieved 10% higher retention than platform average on curated NUX cohorts.',
    period: 'Mar – Oct 2025',
    tags: ['Product Collaboration', 'Content Strategy', 'Platform Growth'],
    metrics: ['10%', 'above avg retention'],
    bg: 'linear-gradient(145deg, #111111 0%, #1c1c1c 100%)',
    accent: '#FDE047',
  },

  // ── PHONY CONTENT ─────────────────────────────────────────────────────────
  {
    id: 'tiny-texts-cheer-squad',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Cheer Squad',
    url: 'https://snapchat.com/t/J2MP13US',
    hook: '6.3M views and a 39% completion rate — the top-performing story in the Tiny Texts series.',
    about: 'The top-performing story in the Tiny Texts scripted series on Snapchat — the breakout title in a show that generated 25M+ total views across 50+ episodes.',
    impact: 'Led editorial operations for the full Tiny Texts slate. Oversaw creative direction, QA, and production cadence — built the style guides, editorial calendars, and documentation frameworks that made Cheer Squad and the series possible at scale.',
    period: '2024–2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat', 'Top Performer'],
    metrics: ['6.3M', 'views', '39%', 'completion rate'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },
  {
    id: 'tiny-texts-inhaler',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Inhaler',
    url: 'https://snapchat.com/t/wPotqUYw',
    hook: '4.39M views and 20.3K followers added — second highest in the Tiny Texts catalog.',
    about: 'Second highest-performing story in the Tiny Texts series — demonstrating the show\'s ability to sustain strong audience growth across different narrative formats and emotional tones.',
    impact: 'Led editorial operations across the full series. Managed creative QA, writing team coordination, and the production systems that maintained consistent quality across 50+ stories.',
    period: '2024–2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['4.39M', 'views', '20.3K', 'followers added'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },
  {
    id: 'tiny-texts-mr-shower',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Mr. Shower',
    hook: '3.01M views and 8.43K followers added.',
    about: 'A top-performing story in the Tiny Texts scripted series on Snapchat — part of a catalog that consistently converted viewers into channel followers.',
    impact: 'Led editorial operations across the full Tiny Texts slate. Owned creative QA, writing team coordination, and the production systems that sustained quality at scale.',
    period: '2024–2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['3.01M', 'views', '8.43K', 'followers added'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },
  {
    id: 'tiny-texts-bf-sleepover',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Sleepover',
    hook: '2.2M views and 9.4K followers added.',
    about: 'A consistently strong performer in the Tiny Texts series — notable for its follower conversion relative to view count.',
    impact: 'Led editorial operations across the full Tiny Texts slate. Built the style guides, editorial calendars, and documentation frameworks that standardized the production workflow end-to-end.',
    period: '2024–2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['2.2M', 'views', '9.4K', 'followers added'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },
  {
    id: 'tiny-texts-snapscore',
    company: 'Phony Content',
    category: 'Scripted Series',
    title: 'Tiny Texts — Snap Score',
    url: 'https://www.snapchat.com/p/20a7a9ee-b36c-41ac-ab33-e25c7f9174cd/530343519111168',
    hook: 'A story about Snapchat\'s most obsessed-over number, told inside Snapchat itself.',
    about: 'A story in the Tiny Texts series built around one of Snapchat\'s most culturally native concepts — part of a catalog that built a documented, replicable editorial system for scripted short-form content.',
    impact: 'Built the centralized documentation frameworks, style guides, and editorial calendars that standardized production end-to-end, enabling the team to scale output without sacrificing quality.',
    period: '2024–2025',
    tags: ['Scripted Series', 'Editorial Operations', 'Snapchat'],
    metrics: ['2.08M', 'views', '5.73K', 'followers added'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },

  // ── PHONY CONTENT — SYSTEM CONTEXT ───────────────────────────────────────
  {
    id: 'phony-viral-story-architecture',
    company: 'Phony Content',
    category: 'Narrative Design',
    title: 'Viral Story Architecture',
    hook: 'Designing conversational stories engineered for retention.',
    about: 'Structured dialogue-driven stories designed to maintain viewer attention through pacing, reveals, and conversational realism within Snapchat\'s Tiny Texts format.',
    impact: 'Developed and refined the narrative templates and pacing frameworks used across the Tiny Texts slate — the structures that produced 35–42% completion rates consistently across the series.',
    period: '2024–2025',
    tags: ['Narrative Design', 'Dialogue Writing', 'Short-Form Storytelling'],
    metrics: ['35–42%', 'completion range', '25M+', 'cumulative views'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },
  {
    id: 'phony-engagement-analysis',
    company: 'Phony Content',
    category: 'Audience Strategy',
    title: 'Audience Engagement Analysis',
    hook: 'Understanding how conversational storytelling retains audiences.',
    about: 'Analyzed viewer engagement patterns — completion rate, pacing drop-offs, and format performance — to identify narrative structures that resonated best with Snapchat audiences.',
    impact: 'Used engagement data to continuously refine story structure, pacing, and dialogue cadence. Insights fed directly into content brief templates and editorial guidelines used across the full slate.',
    period: '2024–2025',
    tags: ['Audience Behavior', 'Narrative Optimization', 'Content Strategy'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },
  {
    id: 'phony-high-volume-production',
    company: 'Phony Content',
    category: 'Editorial Pipeline',
    title: 'High-Volume Story Production',
    hook: 'Producing serialized conversational stories at scale.',
    about: 'Contributed scripts across the Tiny Texts slate while collaborating with editors and producers to maintain consistent story releases and sustained platform engagement.',
    impact: 'Managed the full editorial production workflow across 50+ stories — building the documentation frameworks, style guides, and editorial calendars that standardized output and enabled consistent quality at volume.',
    period: '2024–2025',
    tags: ['Editorial Pipeline', 'Serialized Storytelling', 'Creative Production'],
    metrics: ['50+', 'stories produced', '25M+', 'total views'],
    bg: 'linear-gradient(145deg, #180D35 0%, #240f4f 100%)',
    accent: '#C084FC',
  },

  // ── STOCKX ────────────────────────────────────────────────────────────────
  {
    id: 'stockx-core-insights',
    company: 'StockX',
    category: 'Research Report',
    title: '2024 Core Insights Report',
    hook: 'A Gen Z trend report mapping digital consumption behavior, subcultures, and affinity patterns across LA and NYC.',
    about: 'A Gen Z trend report analyzing digital consumption behavior among 18–25 males in LA and NYC — mapping emerging subcultures, affinity brands, and behavioral patterns that directly informed StockX\'s 2025 marketing strategy.',
    impact: 'Sole author. Identified emerging subcultures (Gorp Core, DIY, archive styling), mapped digital behaviors including curated sharing and resale culture, surfaced affinity figures for campaign targeting, and delivered strategic recommendations that shaped 2025 programming.',
    period: 'Dec 2024',
    tags: ['Research', 'Trend Analysis', 'Gen Z Strategy', 'Sole Author'],
    metrics: ['LA & NYC', '18–25 male demo'],
    bg: 'linear-gradient(145deg, #0A2010 0%, #122a18 100%)',
    accent: '#4ADE80',
  },
  {
    id: 'stockx-sydeon',
    company: 'StockX',
    category: 'Campaign',
    title: 'Behind the Streams with Sydeon',
    url: 'https://www.youtube.com/watch?v=0uBuJh7sEjU',
    hook: 'Gaming culture. Resale culture. One campaign at the intersection.',
    about: 'High-visibility campaign shoot with gaming influencer Sydeon, produced as part of StockX\'s creator partnership program targeting the gaming and streaming community.',
    impact: 'Supported production logistics — managed talent scheduling, location coordination, and digital asset organization. Contributed to on-set execution and post-production asset workflows.',
    period: 'Sep 2021',
    tags: ['Campaign Production', 'Influencer', 'Gaming'],
    metrics: ['10M+', 'series impressions'],
    bg: 'linear-gradient(145deg, #0A2010 0%, #122a18 100%)',
    accent: '#4ADE80',
  },
  {
    id: 'stockx-briana-king',
    company: 'StockX',
    category: 'Campaign',
    title: 'Briana King Joins StockX',
    url: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s',
    hook: 'Skate doesn\'t follow trends. It sets them. StockX wanted in.',
    about: 'Campaign shoot with Briana King, skate community leader — part of StockX\'s ongoing creator-driven content series bridging street culture and the resale market.',
    impact: 'Supported production logistics including talent scheduling, location coordination, and asset organization. Contributed to on-set execution and post-production asset workflows.',
    period: 'Sep 2021',
    tags: ['Campaign Production', 'Skate', 'Creator'],
    metrics: ['10M+', 'series impressions'],
    bg: 'linear-gradient(145deg, #0A2010 0%, #122a18 100%)',
    accent: '#4ADE80',
  },
  {
    id: 'stockx-brittney-elena',
    company: 'StockX',
    category: 'Campaign',
    title: 'What Drives Brittney Elena',
    url: 'https://www.youtube.com/watch?v=3-loqESOCMI',
    hook: 'An athlete who\'s also a brand. A campaign built to understand the difference.',
    about: 'Campaign profile with basketball influencer Brittney Elena — spotlighting the intersection of athletic identity, personal brand, and StockX\'s cultural positioning.',
    impact: 'Supported production logistics including talent scheduling, location coordination, and asset organization. Contributed to on-set execution and post-production workflows.',
    period: 'Dec 2024',
    tags: ['Campaign Production', 'Basketball', 'Creator'],
    metrics: ['10M+', 'series impressions'],
    bg: 'linear-gradient(145deg, #0A2010 0%, #122a18 100%)',
    accent: '#4ADE80',
  },

  // ── COLLIDER ──────────────────────────────────────────────────────────────
  {
    id: 'collider-actors-movies',
    company: 'Collider',
    category: 'Editorial Feature',
    title: 'Actors and Their Favorite Movies',
    url: 'https://collider.com/actors-and-their-favorite-movies/',
    hook: '125K readers. 4:23 average time on page. Top-3 Google result for its query.',
    about: 'Evergreen editorial feature for Collider — a 30M+ monthly visitor film platform. Designed to capture high-intent search traffic while providing genuine editorial value to a film-literate audience.',
    impact: 'Sole author. Developed the concept, executed the SEO strategy, and wrote the piece to balance optimization with editorial quality. Became the top-performing article from the engagement — 125K+ views, top-3 Google result, featured in multiple follow-up roundups.',
    period: 'Aug–Oct 2022',
    tags: ['SEO', 'Evergreen Content', 'Editorial Feature', 'Sole Author'],
    metrics: ['125K+ views', '4:23 avg time on page', 'Top-3 Google'],
    bg: 'linear-gradient(145deg, #1C0800 0%, #2d1200 100%)',
    accent: '#FB923C',
  },
  {
    id: 'collider-succession',
    company: 'Collider',
    category: 'Editorial Feature',
    title: 'Hardest Working Characters in Succession, Ranked',
    url: 'https://collider.com/hardest-workers-in-succession-ranked/',
    hook: 'A piece timed to Succession\'s cultural peak — 89K views, 22% social share rate.',
    about: 'Editorial feature on Succession capitalizing on peak cultural interest — optimized for both search traffic and social sharing among the show\'s highly engaged fan base.',
    impact: 'Sole author. Developed concept, executed SEO strategy, and wrote the feature. The 22% social share rate reflects an intentionally designed piece built to generate opinion and debate.',
    period: 'Aug–Oct 2022',
    tags: ['SEO', 'Editorial Feature', 'Pop Culture', 'Sole Author'],
    metrics: ['89K+ views', '22% social share'],
    bg: 'linear-gradient(145deg, #1C0800 0%, #2d1200 100%)',
    accent: '#FB923C',
  },
  {
    id: 'collider-fall-movies',
    company: 'Collider',
    category: 'Editorial Feature',
    title: 'Movies To Get You Ready For Fall',
    url: 'https://collider.com/sweater-weather-movies-to-get-you-ready-for-fall/',
    hook: 'A seasonal editorial piece selected for Google Discover. 76K readers.',
    about: 'Seasonal editorial feature designed to capture timely search and discovery traffic during the fall content cycle — selected for inclusion in Google Discover.',
    impact: 'Sole author. Developed concept, wrote the feature against a seasonal brief, and optimized for discovery. Featured in Google Discover — an algorithmic signal of high engagement and relevance.',
    period: 'Aug–Oct 2022',
    tags: ['SEO', 'Seasonal Content', 'Editorial Feature', 'Sole Author'],
    metrics: ['76K+ views', 'Google Discover'],
    bg: 'linear-gradient(145deg, #1C0800 0%, #2d1200 100%)',
    accent: '#FB923C',
  },
];

const COMPANY_ORDER = ['Shane Delaney', 'Meta', 'Snap Inc.', 'Phony Content', 'StockX', 'Collider'];

function parseMetric(m: string): { value: string; label: string } {
  const match = m.match(/^([0-9$£€.,+%MKBx~\-]+\+?)\s*(.*)/);
  if (match && match[2]) return { value: match[1], label: match[2] };
  const parts = m.split(' ');
  return { value: parts[0], label: parts.slice(1).join(' ') };
}

function getUrlLabel(url: string): string {
  try {
    const host = new URL(url).hostname;
    if (host.includes('snapchat')) return 'Open in Snap ↗';
    if (host.includes('youtube')) return 'Watch on YouTube ↗';
    if (host.includes('collider')) return 'Read on Collider ↗';
    if (host.includes('meta')) return 'Open on Meta ↗';
  } catch {}
  return 'Open ↗';
}

const contentVariants = {
  enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
};

const contentTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

function PortfolioInner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
    const id = searchParams.get('project');
    if (id) {
      const exact = CARDS.findIndex(c => c.id === id);
      if (exact !== -1) { setIndex(exact); return; }
      const byCompany = CARDS.findIndex(c =>
        id.includes(c.company.toLowerCase().split(' ')[0].toLowerCase())
      );
      if (byCompany !== -1) setIndex(byCompany);
    }
  }, [searchParams]);

  const go = useCallback((dir: 1 | -1) => {
    const next = index + dir;
    if (next < 0 || next >= CARDS.length) return;
    setDirection(dir);
    setIndex(next);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    setTouchStart(null);
  };

  const card = CARDS[index];
  const coCards = CARDS.filter(c => c.company === card.company);
  const coIdx = coCards.findIndex(c => c.id === card.id) + 1;
  const hasNext = index < CARDS.length - 1;
  const hasPrev = index > 0;

  // Build pairs for metrics display (every 2 items form a value+label pair if they look like it)
  const metricPairs: { value: string; label: string }[] = [];
  if (card.metrics) {
    // Check if metrics is in pairs format (even count, alternating value/label)
    // For pairs like ['500M+', 'monthly viewers', '1,000+', 'pieces/day']
    // vs single items like ['$15M raised', '5 production meetings']
    const allLookLikeLabels = card.metrics.every(m => !/^[0-9$]/.test(m));
    if (!allLookLikeLabels && card.metrics.length % 2 === 0 && card.metrics.length >= 4) {
      // Try pairs
      let isPaired = true;
      for (let i = 0; i < card.metrics.length; i += 2) {
        if (!/^[0-9$£%~]/.test(card.metrics[i])) { isPaired = false; break; }
      }
      if (isPaired) {
        for (let i = 0; i < card.metrics.length; i += 2) {
          metricPairs.push({ value: card.metrics[i], label: card.metrics[i + 1] });
        }
      } else {
        card.metrics.forEach(m => metricPairs.push(parseMetric(m)));
      }
    } else {
      card.metrics.forEach(m => metricPairs.push(parseMetric(m)));
    }
  }

  if (!mounted) {
    return (
      <div
        className="h-screen overflow-hidden flex flex-col pt-14"
        style={{ background: CARDS[0].bg }}
      />
    );
  }

  const domain = card.url ? new URL(card.url).hostname.replace('www.', '') : null;

  return (
    <div
      className="h-screen overflow-hidden flex flex-col pt-14"
      style={{ background: card.bg, transition: 'background 0.7s ease' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 lg:px-10 py-3 flex-shrink-0">
        <Link href="/work" className="text-sm text-white/40 hover:text-white transition-colors">
          ← Back
        </Link>
        <span className="text-sm text-white/40">{card.company} · {coIdx}/{coCards.length}</span>
      </div>

      {/* Main body */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0 px-6 lg:px-10 gap-6 lg:gap-6 pb-2">

        {/* Sidebar — company card list (desktop only) */}
        <div className="hidden lg:flex flex-col flex-shrink-0 w-44 xl:w-52 py-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={card.company}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col h-full"
            >
              <p
                className="text-[9px] uppercase tracking-widest font-semibold mb-3 px-3"
                style={{ color: card.accent }}
              >
                {card.company}
              </p>
              <div className="flex flex-col gap-0.5 overflow-y-auto flex-1 scrollbar-none">
                {coCards.map((c, i) => {
                  const isActive = c.id === card.id;
                  const globalIdx = CARDS.findIndex(x => x.id === c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setDirection(globalIdx > index ? 1 : -1);
                        setIndex(globalIdx);
                      }}
                      className="text-left px-3 py-2 rounded-lg transition-all group"
                      style={isActive ? { backgroundColor: card.accent + '18' } : {}}
                    >
                      <span
                        className="block text-[9px] font-semibold mb-0.5 tabular-nums"
                        style={{ color: isActive ? card.accent : 'rgba(255,255,255,0.2)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="block text-[11px] leading-snug line-clamp-2 transition-colors"
                        style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)' }}
                      >
                        {c.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left — editorial panel */}
        <div className="lg:flex-1 flex flex-col justify-center py-2 lg:py-8 min-h-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={card.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={contentTransition}
              className="flex flex-col max-w-sm"
            >
              <p
                className="text-[10px] uppercase tracking-widest font-medium mb-4"
                style={{ color: card.accent }}
              >
                {card.category}
              </p>

              <h1 className="text-xl lg:text-2xl font-semibold text-white leading-snug mb-5">
                {card.hook}
              </h1>

              <div className="w-8 h-px bg-white/15 mb-5" />

              <p className="text-sm text-white/55 leading-relaxed mb-6">{card.impact}</p>

              {metricPairs.length > 0 && (
                <div className="flex gap-6 mb-7">
                  {metricPairs.map((m, i) => (
                    <div key={i}>
                      <p className="text-lg font-semibold text-white leading-none mb-1">{m.value}</p>
                      <p className="text-[10px] text-white/35">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {card.url && (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors self-start"
                  style={{ color: card.accent }}
                >
                  {getUrlLabel(card.url)} →
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right — preview panel (desktop only) */}
        <div className="hidden lg:flex lg:w-[52%] py-6 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={card.id + '-preview'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full rounded-2xl border border-white/8 flex flex-col items-center justify-center px-12 text-center"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              {card.url ? (
                <>
                  <p
                    className="text-[10px] uppercase tracking-widest font-medium mb-5"
                    style={{ color: card.accent + 'aa' }}
                  >
                    {card.category}
                  </p>

                  <h2 className="text-lg lg:text-xl font-semibold text-white leading-snug mb-4 max-w-xs">
                    {card.title}
                  </h2>

                  <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-xs">
                    {card.about}
                  </p>

                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: card.accent }}
                  >
                    {getUrlLabel(card.url)} →
                  </a>
                </>
              ) : card.id === 'intro' ? (
                <div className="w-full flex flex-col justify-center px-10">
                  <p className="text-[9px] uppercase tracking-widest text-white/25 mb-5">What&apos;s inside</p>
                  <div className="flex flex-col gap-0 border-t border-white/8">
                    {INTRO_SECTIONS.map((s) => {
                      const firstIdx = CARDS.findIndex(c => c.company === s.company);
                      return (
                        <button
                          key={s.company}
                          onClick={() => { setDirection(1); setIndex(firstIdx); }}
                          className="flex items-center justify-between py-3.5 border-b border-white/8 group text-left"
                        >
                          <span className="text-sm text-white/60 group-hover:text-white transition-colors">{s.company}</span>
                          <span className="text-[11px] text-white/25 group-hover:text-white/50 transition-colors tabular-nums">{s.count} {s.label} →</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-white/20 mt-5">← → to navigate · swipe on mobile</p>
                </div>
              ) : (
                <>
                  {metricPairs.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-10 mb-6">
                      {metricPairs.map((m, i) => (
                        <div key={i} className="text-center">
                          <p className="text-3xl lg:text-4xl font-semibold leading-none mb-2" style={{ color: card.accent }}>{m.value}</p>
                          <p className="text-[10px] text-white/30 uppercase tracking-wider">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-[10px] text-white/20 uppercase tracking-widest">{card.period}</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="px-6 lg:px-10 py-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          {/* Prev */}
          <button
            onClick={() => go(-1)}
            disabled={!hasPrev}
            className="text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-lg"
            aria-label="Previous"
          >
            ←
          </button>

          {/* Company-scoped dots */}
          <div className="flex items-center gap-2">
            {coCards.map((c) => {
              const isActive = c.id === card.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    const globalIdx = CARDS.findIndex(x => x.id === c.id);
                    setDirection(globalIdx > index ? 1 : -1);
                    setIndex(globalIdx);
                  }}
                  aria-label={c.title}
                  className="p-1"
                >
                  <div
                    className="rounded-full transition-all duration-200"
                    style={
                      isActive
                        ? { width: 24, height: 6, backgroundColor: card.accent }
                        : { width: 6, height: 6, backgroundColor: 'rgba(255,255,255,0.2)' }
                    }
                  />
                </button>
              );
            })}
          </div>

          {/* Next */}
          <button
            onClick={() => go(1)}
            disabled={!hasNext}
            className="text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-lg"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Company strip */}
        <div className="flex items-center gap-5 overflow-x-auto pb-1 lg:justify-center scrollbar-none">
          {COMPANY_ORDER.map((co) => {
            const isActive = co === card.company;
            const firstIdx = CARDS.findIndex(c => c.company === co);
            return (
              <button
                key={co}
                onClick={() => {
                  if (firstIdx !== -1) {
                    setDirection(firstIdx > index ? 1 : -1);
                    setIndex(firstIdx);
                  }
                }}
                className={`flex-shrink-0 text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive ? 'text-white' : 'text-white/20 hover:text-white/50'
                }`}
              >
                {co}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <Suspense>
      <PortfolioInner />
    </Suspense>
  );
}
