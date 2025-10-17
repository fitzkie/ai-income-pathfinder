# AI Money Consultant - Design Guidelines

## Design Approach

**Selected Approach**: Modern SaaS Design System (inspired by Linear, Stripe, and Material Design)

**Rationale**: This is a data-rich decision-making tool requiring clarity, professional credibility, and efficient information hierarchy. The design prioritizes:
- Clean data visualization for complex scoring metrics
- Professional trustworthiness for financial recommendations
- Smooth multi-step flows with clear progress indication
- Approachable personality through thoughtful microcopy and subtle playfulness

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- **Primary Brand**: 220 75% 60% (confident blue - trust and clarity)
- **Background**: 222 47% 11% (deep slate - professional depth)
- **Surface**: 217 33% 17% (elevated slate)
- **Surface Elevated**: 215 28% 22% (cards, modals)
- **Text Primary**: 210 40% 98% (crisp white)
- **Text Secondary**: 215 20% 65% (muted slate)
- **Success**: 142 76% 45% (growth green for fit scores)
- **Warning**: 38 92% 50% (demand signal alerts)
- **Border**: 217 33% 25% (subtle divisions)

**Light Mode**
- **Primary Brand**: 220 75% 50%
- **Background**: 0 0% 100%
- **Surface**: 210 20% 98%
- **Text Primary**: 222 47% 11%
- **Text Secondary**: 215 16% 47%

### B. Typography

**Font Stack**: 
- Primary: Inter (Google Fonts) - clean, professional readability
- Monospace: JetBrains Mono - for code snippets, metrics

**Scale**:
- Hero/Display: text-4xl to text-6xl, font-bold (landing page)
- Section Headers: text-2xl to text-3xl, font-semibold
- Card Titles: text-lg, font-semibold
- Body: text-base (16px), font-normal
- Small/Meta: text-sm, font-medium
- Micro (badges): text-xs, font-semibold uppercase tracking-wide

### C. Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 or p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 or gap-8
- Grid columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**Container Strategy**:
- Landing page: Full-width sections with inner max-w-7xl
- App screens: max-w-6xl centered
- Wizard: max-w-2xl for focus
- Results cards: max-w-4xl with grid expansion

### D. Component Library

**Navigation**
- Clean top nav with logo, minimal links, dark background
- Progress stepper for wizard (shadcn/ui Steps component)
- Sticky header with blur backdrop

**Wizard Components**
- QuestionCard: clean white/elevated surface, single focus per screen
- TagSelect: pill-style multi-select with hover states
- SliderGroup: labeled range inputs with live value display
- Step indicators: numbered circles with connecting lines

**Results Components**
- RecommendationCard: elevated surface, clear hierarchy
  - Fit score badge (large, prominent, color-coded)
  - Radar chart (recharts) showing 5-7 scoring dimensions
  - Collapsible sections for action plan and rationale
  - Demand badges with trend indicators (▲▼ arrows)
- ScoreBreakdown: horizontal bar charts for component scores
- ActionPlan: numbered checklist with expandable day details

**Data Visualization**
- Radar charts: semi-transparent fills, bold outlines
- Score meters: gradient-filled progress rings
- Trend indicators: directional arrows with color coding
- Badges: rounded-full with subtle glow effects

**Forms & Inputs**
- Consistent shadcn/ui form components
- Dark mode inputs with light borders and focus rings
- Validation states with inline messages
- Multi-step wizard with autosave indication

### E. Animations

**Use Sparingly**:
- Page transitions: subtle fade-in (200ms)
- Card hover: slight lift (translate-y-1, shadow increase)
- Score counting: animated number increment on results load
- Progress stepper: smooth step transitions
- NO scroll-triggered animations, NO parallax

---

## Page-Specific Guidelines

### Landing Page

**Hero Section**
- Large, bold headline with gradient text accent on key words
- Subheading explaining value prop in friendly tone
- Single prominent CTA button (primary color, large size)
- Optional: Illustration or abstract pattern background (not photo)
- Height: 85vh for impact without forcing scroll

**Features Section** (if included)
- 3-column grid on desktop showcasing: Speed, Personalization, Actionability
- Icon + title + description pattern
- Clean spacing with consistent vertical rhythm (py-20)

**Social Proof** (optional)
- Simple stats: "10,000+ recommendations generated" or similar
- Subtle, not overwhelming

### Wizard Screens

**Layout**
- Centered card (max-w-2xl) on neutral background
- Progress indicator at top showing step X of 7
- Clear question heading (text-2xl)
- Input components with generous spacing
- Back/Next navigation at bottom (secondary/primary button pairing)
- Auto-save indicator (subtle, top-right)

**Question Types**
- Multi-select tags: wrap grid with hover/selected states
- Sliders: full-width with labeled ticks and current value
- Text inputs: clean, full-width with character count where relevant

### Results Page

**Layout**
- Top summary: "Here are your top 5 AI money-making paths"
- Filter/sort controls (optional): toggle by score, demand, time-to-cash
- Card stack: 3-5 RecommendationCards with generous spacing (gap-8)
- Sticky "Export PDF" or "Tweak Answers" CTA

**RecommendationCard Structure**
1. Header: Title + category badge
2. Fit Score: Large circular badge (80-100 scale) with color gradient
3. One-line summary
4. Radar Chart: 6-point visualization (skill, interest, assets, constraints, time, demand)
5. Demand Snapshot: "Sample Data" labeled badges with trend arrows
6. "Why this matched you": 3-5 bullet points
7. 7-Day Action Plan: Expandable accordion, numbered days with tasks
8. Example Prompts: Code-style blocks with copy button

---

## Microcopy & Personality

**Tone**: Professional yet friendly, slightly playful
- Empty states: "Let's find your money-maker. 5 minutes, zero fluff."
- Loading: "Analyzing your profile..." (not "Please wait")
- Success: "Nice! Here's how you can make money with AI."
- Tooltips: Explain jargon simply ("Fit Score = how well this matches YOU")

**Sample Data Badges**: Small, muted badge reading "Sample Data" next to any mocked demand signals

---

## Accessibility & Quality

- All interactive elements have focus-visible rings (primary color)
- Keyboard navigation throughout wizard and results
- Color contrast meets WCAG AA standards
- Form labels properly associated with inputs
- Radar charts include text fallback for screen readers
- Dark mode consistently applied to all surfaces including modals and inputs

---

## Images

**Hero Section**: Use an abstract illustration or geometric pattern representing AI/data/growth (not a photograph). Alternatively, a subtle gradient mesh background with floating UI elements suggesting personalization and analysis.

**Recommendation Cards**: No images required - rely on iconography, charts, and clean typography for visual interest.