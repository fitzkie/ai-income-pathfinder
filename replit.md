# AI Income Pathfinder

## Overview
AI Income Pathfinder is a sophisticated web application that interviews users about their skills, interests, assets, constraints, and goals, then recommends the top 3-5 personalized AI monetization opportunities. Each recommendation includes a fit score (0-100), demand insights, rationale, and a detailed 7-day action plan.

## Tech Stack
- **Frontend**: React + TypeScript + TailwindCSS + shadcn/ui
- **State Management**: Zustand (with localStorage persistence)
- **Backend**: Express + TypeScript
- **Data Visualization**: Recharts (radar charts)
- **Routing**: Wouter
- **Storage**: PostgreSQL via Drizzle ORM (203 seeded opportunities)

## Project Architecture

### Frontend Structure
```
client/src/
├── components/          # Reusable UI components
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── ProgressStepper.tsx
│   ├── TagSelect.tsx
│   ├── SliderWithValue.tsx
│   ├── ScoreRadar.tsx
│   ├── FitScoreBadge.tsx
│   ├── DemandBadge.tsx
│   └── RecommendationCard.tsx
├── pages/              # Route pages
│   ├── Landing.tsx
│   ├── Wizard.tsx
│   ├── Results.tsx
│   └── wizard/         # Wizard step components
│       ├── SkillsStep.tsx
│       ├── InterestsStep.tsx
│       ├── AssetsStep.tsx
│       ├── ConstraintsStep.tsx
│       ├── GoalsStep.tsx
│       ├── WorkStyleStep.tsx
│       └── HunchesStep.tsx
├── store/
│   └── profileStore.ts # Zustand store with persistence
└── App.tsx
```

### Backend Structure
```
server/
├── routes.ts           # API endpoints
├── storage.ts          # Shared storage interface / exports DB implementation
├── db-storage.ts       # PostgreSQL-backed implementation (Drizzle)
├── scoring.ts          # Weighted scoring algorithm
├── demandSignals.ts    # Mock demand signal generator
└── actionPlans.ts      # 7-day action plan generator
```

## User Flow

### 1. Landing Page (/)
- Hero section with value proposition
- Features showcase (Personalization, Demand Signals, Action Plans)
- CTA to start assessment

### 2. Wizard (/wizard) - 8 Steps
1. **Skills & Experience**: Multi-select tags for user skills
2. **Interests & Enjoyment**: What tasks/topics they enjoy
3. **Assets On Hand**: Audience, budget, time, tools
4. **Network**: Audience type composition (students, new workers, experienced workers, executives, company owners)
5. **Constraints**: Risk tolerance, timeline, camera comfort
6. **Goals**: Income target, passive vs active, B2B vs B2C
7. **Work Style**: Collaboration preference, delivery types
8. **Market Hunches**: Optional niche suggestions

**Features**:
- Progress stepper with visual indicators
- Auto-save to localStorage
- Validation (e.g., must select at least 1 skill)
- Back/Next navigation

### 3. Results Page (/results)
- Top 5 recommendations ranked by fit score
- Each recommendation card includes:
  - Fit score badge (color-coded)
  - Radar chart (6 dimensions)
  - Demand snapshot with "Sample Data" badges
  - "Why this matched you" bullets
  - Collapsible 7-day action plan
  - Starter AI prompts with copy functionality
- "Tweak Answers" button to iterate

## API Endpoints

### GET /api/opportunities
Returns the full catalog of seeded opportunities (203 total, stored in Postgres)

### POST /api/recommendations
**Request Body**: User profile (Profile type)
**Response**: Recommendation object with top 5 scored opportunities

### GET /api/recommendations/:id
Get a specific recommendation by ID

## Scoring Algorithm

The scoring engine uses weighted components:
- **Skill Match (35%)**: Jaccard similarity between user skills and opportunity requirements
- **Interest Match (15%)**: Overlap with category and demand tags
- **Asset Advantage (15%)**: Tools, audience, budget, time availability
- **Constraint Fit (10%)**: Penalties for mismatches (camera, risk, timeline)
- **Time-to-Cash (10%)**: Inverted score (faster is better)
- **Startup Cost (5%)**: Inverted score (lower cost is better)
- **Demand (10%)**: Normalized demand signals from mock data

Total fit score: 0-100

## Data Persistence
- **Frontend**: Zustand store persists profile to localStorage
- **Backend**: PostgreSQL (Railway) accessed via Drizzle ORM
- Seed data is imported from `attached_assets/203 Side Hustles.csv` using `npm run seed:opportunities`

## Design System
Following design_guidelines.md:
- **Colors**: Professional blue primary (220 75% 60%), dark mode by default
- **Typography**: Inter font family
- **Spacing**: Consistent 6-8 unit padding
- **Components**: shadcn/ui with custom styling
- **Interactions**: Hover/active elevations, smooth transitions

## Key Features
✅ Multi-step wizard with validation
✅ Real-time fit scoring with 6-component breakdown
✅ Visual radar charts for score visualization
✅ Mock demand signals with trend indicators
✅ Personalized rationale generation
✅ 7-day action plans tailored to opportunity type
✅ Starter AI prompts with copy-to-clipboard
✅ Dark/light mode toggle
✅ Fully responsive design
✅ localStorage persistence

## Running the Project
```bash
npm install
npm run dev
```

Access at `http://localhost:5000`

## Future Enhancements (Post-MVP)
- PDF export functionality
- Email delivery of recommendations
- Real demand signal integrations (Google Trends, Product Hunt, etc.)
- Database persistence (Supabase/PostgreSQL)
- Authentication (magic link)
- Admin dashboard for CRUD operations on opportunities
- Playwright E2E tests
- Jest unit tests for scoring engine

## Recent Changes (Oct 17, 2025)
- Initial MVP implementation complete
- 22 opportunities seeded across 5 categories
- Full wizard flow expanded to 8 steps (added Network step)
- Network step captures audience composition for better targeting
- Scoring engine with weighted algorithm
- Results page with radar charts and action plans
- Dark mode support
- Zustand state management with persistence
- App rebranded to "AI Income Pathfinder"
