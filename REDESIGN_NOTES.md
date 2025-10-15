# Shane Delaney Portfolio - 2025 Redesign

## Overview
Complete redesign and rewrite of shanedelaney.xyz as a modern, tech-focused personal site accurately representing Shane Delaney as a Los Angeles-based digital strategist, creative marketer, and writer.

## Design Philosophy
- **Visual Identity**: Clean, intuitive, professional with a tech-editorial feel (Meta × Notion × Linear aesthetic)
- **Tone**: Confident yet approachable, direct, not buzzword-heavy
- **Accuracy**: All content reflects verified experience with accurate titles and contributions

## Site Structure

### 🏠 Home (`/`)
**Hero Section**
- Primary heading: "Shaping stories and systems at the intersection of creativity and tech."
- Two-paragraph introduction highlighting current role at Meta and previous work at Snap Inc.
- Dual CTAs: "See My Work" and "About Me"
- Info cards showing: Currently (Meta), Previously (Snap, Phony, StockX, Collider), Based In (LA)

**Design Features**
- Subtle gradient background (gray-50 → white → blue-50/20)
- Large, generous typography with tracking-tight
- Smooth fade-in animations
- Fully responsive with breakpoints at sm, lg, xl

---

### 👤 About (`/about`)
**Structure**
- Header: "A strategist who blends storytelling with systems."
- Main content grid: 8-column body copy + 4-column sidebar
- Detailed career narrative covering Meta, Snap Inc., Phony Content, and StockX
- Sidebar cards for: Current role, Previous positions, Location, Education

**Key Message**
"I approach every project with equal parts creativity and precision — building content systems that let great ideas scale without losing their human voice."

**Design Features**
- Purple gradient accent in background
- Card-based sidebar with white backgrounds and subtle shadows
- LMU education prominently featured
- Dual CTAs: "View My Work" and "Get In Touch"

---

### 💼 Work (`/work`)
**Two-Page Structure**

#### Main Work Page
Timeline-based role display with expandable cards:
1. **Meta** - Content Marketing Coordinator II (Oct 2025 – Present)
2. **Snap Inc.** - Trend Curator (Mar 2025 – Oct 2025)
3. **Phony Content** - Content Manager (Mar 2024 – Mar 2025)
4. **StockX** - Brand Creative Production (Sept 2021 & Dec 2024)
5. **Collider** - SEO Content Writer (Aug 2022 – Oct 2022)
6. **Cappuccino Man** - Copywriter (Mar 2024)

**Filter System**
- All / Tech / Creative / Writing categories
- Pill-style filter buttons with active states

**Design Features**
- Logo display for each company
- Expandable descriptions with "Show more" functionality
- Link to detailed Portfolio Projects page
- Hover effects with shadow elevation

#### Portfolio Projects Page (`/work/portfolio`)
Detailed case studies with expanded information:
- **NUX Project** (Snapchat) - Teen content curation
- **Say It in a Snap** - Times Square campaign
- **Boosted Content Initiative** - Creator discovery system
- **Core Insights Research** (StockX) - Gen Z trend report with PDF preview
- **Campaign Shoot Highlights** (StockX) - Video links to campaigns
- **Tiny Texts** (Phony Content) - Snapchat stories with metrics
- **Film & TV SEO Features** (Collider) - Article links with performance data

**Enhanced Features**
- PDF preview component for StockX report
- External links to YouTube videos and Snapchat stories
- Metrics display (views, completion rates, impressions)
- Tag system for categorization
- Back navigation to main Work page

---

### ✉️ Contact (`/contact`)
**Header**
"Let's Build Something."
- Subtext about openness to collaboration and opportunities

**Components**
1. **Direct Contact Card**
   - Email: shanedelaney11@gmail.com (with icon)
   - LinkedIn: Shane Delaney (with icon)

2. **Contact Form**
   - Name field
   - Email field
   - Message textarea (6 rows)
   - Submit button with loading state
   - Success message animation

3. **Footer Note**
   - "Based in Los Angeles, CA · Available for freelance projects and full-time opportunities"

**Design Features**
- Form validation with required fields
- Focus states with ring-2 on inputs
- Simulated submission (ready for API integration)
- Purple gradient accent background

---

## Technical Implementation

### Navigation
- Fixed top navigation with blur backdrop
- Active page indicator with smooth animation (Framer Motion layoutId)
- Links: Home | About | Work | Contact
- Responsive mobile-friendly design

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 4xl to 7xl with font-semibold and tracking-tight
- **Body**: lg to xl with text-gray-600/700
- **Small text**: sm with text-gray-400/500

### Color System
```css
Primary: #0f0f0f (gray-900) - Text and primary buttons
Background: #ffffff (white) - Main background
Accents: Blue/purple gradients (subtle)
Borders: #e5e5e5 (gray-200)
Muted text: #737373 (gray-500)
```

### Animations (Framer Motion)
- Page load fade-ins with staggered delays
- Scroll-triggered viewport animations
- Hover states with scale: 1.02
- Tap states with scale: 0.98
- Smooth transitions using ease: [0.16, 1, 0.3, 1]

### Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **sm**: 640px+ (tablets)
- **lg**: 1024px+ (desktop)
- **xl**: 1280px+ (large desktop)

All sections tested and optimized for each breakpoint.

### SEO & Metadata
**Global Metadata**
```typescript
title: "Shane Delaney | Digital Strategist & Creative Marketer"
description: "Los Angeles-based digital strategist, creative marketer, and writer at Meta..."
keywords: ["digital strategy", "content marketing", "creative marketing", ...]
```

**Open Graph Tags**
- Proper OG title, description, URL
- Twitter card support
- Site name and locale configured

---

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── work/
│   │   ├── page.tsx        # Work timeline
│   │   └── portfolio/
│   │       ├── layout.tsx  # Portfolio metadata
│   │       └── page.tsx    # Detailed projects
│   └── contact/
│       └── page.tsx        # Contact form
└── components/
    └── navigation/
        └── Navigation.tsx  # Fixed nav component
```

---

## Key Features Implemented

✅ Modern, tech-focused design language  
✅ Accurate copy reflecting verified experience  
✅ Multi-page structure (Home, About, Work, Contact)  
✅ Responsive design across all breakpoints  
✅ Smooth animations and interactions  
✅ SEO optimization with Open Graph tags  
✅ Expandable content sections  
✅ Filter system for projects/roles  
✅ External link integration (YouTube, Snapchat, PDF)  
✅ Professional contact form  
✅ Clean navigation with active states  
✅ No exaggerated titles - accurate positioning  

---

## Build Information
- **Framework**: Next.js 15.2.0-canary.63
- **Styling**: Tailwind CSS 4.0.6
- **Animations**: Framer Motion 12.4.3
- **Build Status**: ✓ Successful (all pages static)
- **Total Routes**: 11 pages
- **Bundle Size**: ~110kB shared JS

---

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint check
npm run lint
```

---

## Next Steps (Future Enhancements)

1. **Contact Form Backend**: Integrate with email service (e.g., Resend, SendGrid)
2. **Analytics**: Add Vercel Analytics tracking
3. **Blog Section**: Optional content hub for articles
4. **Case Study Deep Dives**: Individual pages for major projects
5. **Performance Optimization**: Image optimization, lazy loading
6. **Dark Mode**: Optional dark theme toggle
7. **Micro-interactions**: Additional hover effects and transitions

---

## Notes
- All copy approved and reflects accurate job titles and contributions
- Design system follows Meta × Notion × Linear aesthetic
- Site maintains personality while being professional
- Mobile-first responsive approach
- Built with scalability in mind for future content additions

---

*Redesign completed: October 2025*
*Next.js build verification: ✓ Passed*

