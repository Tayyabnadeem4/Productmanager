# Design Guidelines: Product Manager Portfolio & Blog

## Design Approach

**Selected Approach:** Reference-Based (Notion/Linear-inspired) + Clean Content Systems

Drawing inspiration from Notion's clarity and Linear's typography excellence, creating a professional, content-first experience that emphasizes readability and hierarchy.

**Core Principles:**
- Content is king: Typography and spacing prioritize reading experience
- Structured simplicity: Clear sections with purposeful whitespace
- Professional credibility: Clean, modern aesthetic that builds trust

## Typography System

**Font Family:** Inter (via Google Fonts CDN)
- Primary: Inter (400, 500, 600, 700)

**Type Scale:**
- Hero Headline: text-5xl md:text-7xl, font-bold, leading-tight
- Section Headers: text-3xl md:text-4xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Meta/Labels: text-sm, font-medium, uppercase tracking-wide
- Captions: text-sm, font-normal

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Section padding: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Content spacing: space-y-4 md:space-y-6
- Generous margins: mb-12 md:mb-16 for section headers

**Container Strategy:**
- Full-width hero: w-full with inner max-w-6xl mx-auto px-6
- Content sections: max-w-5xl mx-auto px-6
- Blog content: max-w-3xl mx-auto (optimal reading width)
- Cards grid: max-w-6xl mx-auto

## Page Structures

### Homepage Layout

**1. Hero Section (80vh min-height)**
- Large professional headshot image (right side on desktop, centered mobile)
- Left-aligned content: Name (text-6xl), Role (text-2xl), Short bio (text-xl)
- Two-button CTA group: "View Projects" (primary) + "Download Resume" (secondary)
- Clean, modern composition with generous breathing room

**2. About Section**
- Single column max-w-3xl
- Brief professional summary (2-3 paragraphs)
- Key skills/expertise tags

**3. Featured Projects Section**
- Grid layout: grid-cols-1 md:grid-cols-2 gap-8
- 4-6 project cards with:
  - Project thumbnail image
  - Title + Role
  - Problem statement (2-3 lines)
  - Solution summary
  - Key outcomes/metrics
  - "View Case Study" link

**4. Recent Blog Posts Section**
- Grid layout: grid-cols-1 md:grid-cols-3 gap-6
- 3 latest posts with image, title, excerpt, date, read time

**5. Contact/CTA Section**
- Centered content with primary CTA
- Email and LinkedIn links
- Clean, focused design

### Blog Listing Page

**Header:** Page title, optional filter/search
**Blog Grid:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Featured image
- Title + excerpt
- Author, date, read time, tags
- "Read More" link

### Individual Blog Post

**Article Layout:**
- Hero image (full-width or constrained)
- Title (text-4xl md:text-5xl)
- Author info, date, read time
- Content in max-w-3xl with generous line-height (1.7)
- Syntax highlighting for code blocks
- Related posts at bottom

### Project Detail Page

**Case Study Structure:**
- Project hero image
- Title + Role + Duration
- Overview section
- Problem statement (highlighted)
- Solution approach
- Process/methodology (with visuals)
- Outcomes/results (with metrics)
- Learnings section

### Admin Dashboard

**Minimal Layout:**
- Simple sidebar navigation (Posts, Projects, Settings)
- Data table for content management
- Form pages for create/edit with rich text editor
- Clean, functional design - no excessive decoration

## Component Library

### Navigation
- Fixed header with logo/name (left), nav links (center), CTA button (right)
- Mobile: Hamburger menu
- Clean underline hover states

### Cards (Projects & Blog)
- Rounded corners (rounded-lg)
- Subtle border or shadow (border border-gray-200 or shadow-sm)
- Hover: slight shadow increase (hover:shadow-md transition)
- Image aspect ratio: 16:9 for consistency
- Padding: p-6

### Buttons
- Primary: Solid background, medium padding (px-6 py-3), rounded-lg
- Secondary: Border style, same padding
- Text: No background, underline on hover
- Blur background for buttons over images (backdrop-blur-sm bg-white/80)

### Tags/Labels
- Small, rounded pills (rounded-full px-3 py-1 text-xs)
- Used for skills, blog categories

### Forms (Admin)
- Label above input pattern
- Consistent input styling: border rounded-lg px-4 py-2
- Focus states with ring
- Rich text editor for blog content (Quill or TipTap)

## Images

**Hero Image:**
- Professional headshot or workspace photo
- Placement: Right side on desktop (40% width), full-width mobile
- Style: High-quality, professional photography with good lighting

**Project Cards:**
- Screenshot or mockup of project deliverable
- Aspect ratio: 16:9
- Placement: Top of card

**Blog Posts:**
- Featured image for each post
- Aspect ratio: 16:9 for consistency
- Full-width hero image on individual post pages

**About Section:**
- Optional secondary professional photo or team photo

## Accessibility

- All interactive elements keyboard navigable
- Focus indicators on all inputs/buttons (ring-2 ring-offset-2)
- ARIA labels for icon buttons
- Semantic HTML (article, section, nav)
- Alt text for all images
- Sufficient text contrast (meeting WCAG AA)

## Mobile Responsiveness

- Single column stacking on mobile (md: breakpoint at 768px)
- Touch-friendly button sizes (min 44x44px)
- Readable font sizes (min 16px base)
- Simplified navigation (hamburger menu)
- Optimized images for mobile bandwidth

## Animations

**Minimal, Purposeful Motion:**
- Fade-in on scroll for sections (subtle, once)
- Button hover transitions (150ms)
- Card hover elevation (200ms)
- No distracting parallax or scroll-jacking
- Page transitions: Simple fade (100ms)