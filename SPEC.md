# SoundbiteAI - Product Specification

## 1. Concept & Vision

SoundbiteAI is an AI-powered tool for podcasters and audio creators that automatically extracts the 5 most viral-worthy soundbites (30-90 second clips) from full transcripts or audio files. It targets content creators struggling with the manual, time-consuming process of finding promotional clips — delivering auto-captioned, waveform-visualized clips ready for TikTok, YouTube Shorts, and Instagram Reels.

The vibe: a professional audio studio dashboard meets dark, futuristic UI. Purple accents evoke music/audio creativity; cyan highlights signal tech intelligence.

---

## 2. Design Language

### Aesthetic Direction
Dark audio-studio aesthetic — think Ableton Live meets Vercel's dark mode. Professional, focused, creative.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `background` | #0f0f0f | Page background |
| `surface` | #1a1a1a | Cards, nav |
| `border` | #2a2a2a | Dividers, card borders |
| `primary` | #a855f7 | CTA buttons, highlights, logo |
| `secondary` | #06b6d4 | Accents, links, icons |
| `success` | #22c55e | Positive indicators |
| `text` | #fafafa | Primary text |
| `muted` | #a3a3a3 | Secondary text, captions |

### Typography
- Font: **Inter** (Google Fonts)
- Headings: Bold, tight tracking
- Body: Regular weight, relaxed line height

### Motion Philosophy
- Subtle entrance animations on scroll
- Hover states with smooth color transitions (150ms)
- Loading shimmer for processing states
- Waveform animations on soundbite cards

---

## 3. Layout & Structure

### Page Flow
1. **NavBar** — Fixed, blurred glass background
2. **Hero** — Full-viewport, centered headline + CTA
3. **Soundbite Preview** — Mock interactive demo showing the flow
4. **Features Grid** — 6 feature cards in responsive grid
5. **How It Works** — 3-step horizontal flow
6. **Stats Bar** — 3 key metrics
7. **Testimonials** — 3 podcasters with avatar, quote, name
8. **Pricing** — 3-tier cards (Starter, Creator, Pro)
9. **CTA Banner** — Final conversion push
10. **Footer** — Links, copyright

### Responsive Strategy
- Mobile: single column, stacked sections
- Tablet: 2-column grids
- Desktop: full layouts, max-width container at 1200px

---

## 4. Features & Interactions

### NavBar
- Logo (left), nav links (center), Login + Try Free buttons (right)
- Mobile: hamburger menu

### Hero
- Headline: "Find the clips that hook new listeners."
- Subtext: value prop
- Primary CTA: "Start Free" (purple)
- Secondary CTA: "See How It Works"

### Soundbite Preview Mock
- Step 1: Upload area (drag & drop or click)
- Step 2: Loading state (AI analyzing)
- Step 3: 5 soundbite cards with:
  - Waveform visualization (CSS bars)
  - Duration badge (e.g., "45s")
  - Hook reason tag (e.g., "Emotional Peak", "Strong Hook")
  - Play button

### Features Grid (6 cards)
1. AI Clip Extraction
2. Auto Captions
3. Waveform Visualization
4. Multi-Platform Export
5. Hook Strength Scoring
6. Batch Processing

### How It Works (3 steps)
1. Upload Audio → "Paste a transcript or upload your audio file"
2. AI Finds Clips → "Our AI identifies emotional peaks and viral-worthy moments"
3. Export & Share → "Download-ready clips with captions, optimized for every platform"

### Stats Bar
- "500K+ Clips Generated"
- "50K+ Podcasters Trust Us"
- "4.9/5 Average Rating"

### Testimonials (3)
- Realistic names, podcast titles, avatar placeholders
- Quotes about time saved and engagement increase

### Pricing (3 tiers)
| Tier | Price | Clips/mo | Features |
|---|---|---|---|
| Starter | $0 | 5 | Basic export |
| Creator | $19/mo | 50 | All export formats |
| Pro | $49/mo | Unlimited | Batch processing, commercial rights |

### CTA Banner
- "Ready to find your viral clips?"
- Email input + "Get Started Free" button

### Footer
- Logo, nav links, social icons, copyright

---

## 5. Component Inventory

| Component | States |
|---|---|
| NavBar | Default, scrolled (blur bg) |
| Button (Primary) | Default (purple), Hover (lighter), Active (darker) |
| Button (Secondary) | Default (outline), Hover (fill) |
| Feature Card | Default, Hover (lift + border glow) |
| Soundbite Card | Default, Hover (play button highlight), Playing |
| Pricing Card | Default, Featured (Creator - highlighted) |
| Input Field | Default, Focus (cyan border) |
| Testimonial Card | Default with avatar, quote, name/title |

---

## 6. Technical Approach

### Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme {}`)
- **Icons**: Lucide React
- **Fonts**: Inter via next/font/google

### Architecture
```
soundbite-ai/
├── app/
│   ├── globals.css       # Tailwind v4 + @theme
│   ├── layout.tsx        # Root layout + Inter font
│   └── page.tsx          # Landing page (all sections)
├── public/
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── .gitignore
└── SPEC.md
```

### Deployment
- Vercel CLI: `npx vercel --yes --token <token>`
- Production URL to be captured post-deploy