# Precision Studios — Design System & Business Strategy

> **Design Philosophy:** IBM Carbon-inspired. Enterprise-grade. Business-first.
> **Domain Target:** `precisionstudios.tech`
> **Audience:** Small-to-medium businesses seeking digital transformation

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Design System — IBM Carbon Style](#2-design-system--ibm-carbon-style)
3. [Website Architecture](#3-website-architecture)
4. [Outreach Templates](#4-outreach-templates)
5. [Whitelabel Demos](#5-whitelabel-demos)
6. [Todo Tracker](#6-todo-tracker)

---

## 1. Brand Identity

### Tagline Options

| Option | Tagline |
|--------|---------|
| Primary | **"Digitise. Automate. Scale."** |
| Secondary | **"Enterprise solutions, startup agility."** |
| Technical | **"Engineering precision for your business."** |

### Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Authority** | Speak like a trusted consultant, not a freelancer |
| **Clarity** | No jargon for the sake of jargon — explain value, not stack |
| **Confidence** | Every sentence should radiate competence |
| **IBM-style** | Structured, methodical, data-driven language |

### Positioning

```
WE ARE NOT:                          WE ARE:
─────────────────────────────────    ─────────────────────────────────
A freelance portfolio                A digital solutions consultancy
Selling "websites"                   Selling business transformation
Competing on price                   Competing on precision & ROI
A dev shop                           An engineering partner
```

---

## 2. Design System — IBM Carbon Style

### 2.1 Color Palette

Inspired by [IBM Carbon Design System](https://carbondesignsystem.com/), adapted for Precision Studios.

```
┌─────────────────────────────────────────────────────────────────┐
│  PRIMARY PALETTE                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Gray 100 (Background)     #161616    ████████  Primary BG      │
│  Gray 90                   #262626    ████████  Card BG          │
│  Gray 80                   #393939    ████████  Elevated BG      │
│  Gray 70                   #525252    ████████  Borders          │
│  Gray 50                   #8D8D8D    ████████  Muted Text       │
│  Gray 10                   #F4F4F4    ████████  Primary Text     │
│  White                     #FFFFFF    ████████  Headings         │
│                                                                 │
│  Blue 60 (Brand Accent)    #0F62FE    ████████  CTA / Links      │
│  Blue 70                   #0043CE    ████████  Hover States     │
│  Blue 80                   #002D9C    ████████  Active States    │
│                                                                 │
│  Teal 40 (Secondary)       #08BDBA    ████████  Success / Accents│
│  Red 50 (Danger)           #DA1E28    ████████  Errors           │
│  Yellow 30 (Warning)       #F1C21B    ████████  Warnings         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Typography

```
┌─────────────────────────────────────────────────────────────────┐
│  TYPOGRAPHY SCALE                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Font Family:  IBM Plex Sans  (Primary)                         │
│                IBM Plex Mono  (Code / Data)                     │
│                                                                 │
│  ─── HEADINGS ───                                               │
│  Display 01    42px / 50px    Light 300     -0.02em             │
│  Display 02    54px / 64px    Light 300     -0.02em             │
│  Heading 01    14px / 20px    Semibold 600   0.01em             │
│  Heading 02    16px / 24px    Semibold 600   0                  │
│  Heading 03    20px / 28px    Regular 400    0                  │
│  Heading 04    28px / 36px    Regular 400    0                  │
│  Heading 05    32px / 40px    Regular 400    0                  │
│  Heading 06    42px / 50px    Light 300      0                  │
│                                                                 │
│  ─── BODY ───                                                   │
│  Body Short 01   14px / 18px   Regular 400   0.01em            │
│  Body Short 02   16px / 22px   Regular 400   0                 │
│  Body Long 01    14px / 20px   Regular 400   0.01em            │
│  Body Long 02    16px / 24px   Regular 400   0                 │
│                                                                 │
│  ─── UTILITY ───                                                │
│  Label 01       12px / 16px   Regular 400    0.02em            │
│  Caption 01     12px / 16px   Regular 400    0.02em            │
│  Helper Text    12px / 16px   Regular 400    0.02em            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Spacing & Grid

```
Carbon 16-column grid system:

┌──────────────────────────────────────────────────────────────┐
│  SPACING TOKENS                                              │
├──────────────────────────────────────────────────────────────┤
│  $spacing-01    2px        Micro spacing                     │
│  $spacing-02    4px        Icon padding                      │
│  $spacing-03    8px        Component internal spacing        │
│  $spacing-04    12px       Inline element gaps               │
│  $spacing-05    16px       Base unit                         │
│  $spacing-06    24px       Section padding                   │
│  $spacing-07    32px       Card padding                      │
│  $spacing-08    40px       Section gaps                      │
│  $spacing-09    48px       Layout blocks                     │
│  $spacing-10    64px       Major section separation          │
│  $spacing-11    80px       Page-level separation             │
│  $spacing-12    96px       Hero spacing                      │
│  $spacing-13    160px      Section breathing room            │
└──────────────────────────────────────────────────────────────┘

GRID BREAKPOINTS:
  sm   320px     4 columns
  md   672px     8 columns
  lg   1056px    16 columns
  xlg  1312px    16 columns
  max  1584px    16 columns
```

### 2.4 Component Patterns

#### Buttons

```
┌──────────────────────────────────────────────────────────┐
│  IBM Carbon Button Variants                              │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────────────────┐                             │
│  │  Primary Button         │   bg: Blue 60 (#0F62FE)    │
│  │  "Get Started →"        │   text: White              │
│  └─────────────────────────┘   height: 48px             │
│                                padding: 0 64px 0 16px   │
│  ┌─────────────────────────┐                             │
│  │  Secondary Button       │   bg: Gray 80 (#393939)    │
│  │  "Learn More"           │   text: White              │
│  └─────────────────────────┘   Same dimensions          │
│                                                          │
│  ┌─────────────────────────┐                             │
│  │  Ghost Button           │   bg: Transparent          │
│  │  "View Docs →"          │   text: Blue 60            │
│  └─────────────────────────┘   border: none             │
│                                                          │
│  ┌─────────────────────────┐                             │
│  │  Danger Button          │   bg: Red 60 (#DA1E28)     │
│  │  "Cancel Contract"      │   text: White              │
│  └─────────────────────────┘                             │
│                                                          │
│  KEY RULES:                                              │
│  • No rounded corners (border-radius: 0)                 │
│  • Icon always right-aligned in button                   │
│  • 48px height (default), 40px (sm), 64px (lg)          │
│  • Transitions: 110ms ease-in                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

#### Cards

```
┌──────────────────────────────────────────────────────────┐
│  Card Pattern (IBM Productive)                           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │                                                  │    │
│  │  LABEL / CATEGORY          ← 12px, uppercase     │    │
│  │                                                  │    │
│  │  Card Heading              ← 20px, semibold      │    │
│  │                                                  │    │
│  │  Card description text     ← 14px, gray-50       │    │
│  │  that explains the value                         │    │
│  │  proposition clearly.                            │    │
│  │                                                  │    │
│  │  ───────────────────────                         │    │
│  │  CTA LINK →                ← Blue 60, 14px       │    │
│  │                                                  │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  BG: Gray 90 (#262626)                                   │
│  Border: none (use elevation via bg)                     │
│  Hover: border-left 3px Blue 60                          │
│  Transition: background 110ms                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

#### Navigation

```
┌──────────────────────────────────────────────────────────────────────────┐
│  IBM Carbon Header                                                      │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │ ☰  Precision Studios    Solutions  Industries  Demos  Contact   │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  Height: 48px                                                            │
│  BG: Gray 100 (#161616)                                                  │
│  Border-bottom: 1px solid Gray 80                                        │
│  Logo: Left-aligned, 16px from edge                                      │
│  Nav items: 14px, Semibold, Gray 10                                      │
│  Active: Blue 60 bottom border (3px)                                     │
│  Hover: Gray 80 background                                               │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### 2.5 Motion / Animation

```
IBM Carbon Motion Standards:

  PRODUCTIVE MOTION (UI feedback):
    Duration:  110ms (fast), 150ms (moderate), 240ms (slow)
    Easing:    cubic-bezier(0.2, 0, 0.38, 0.9)   — "productive"

  EXPRESSIVE MOTION (page transitions, hero):
    Duration:  250ms (fast), 400ms (moderate), 700ms (slow)
    Easing:    cubic-bezier(0.4, 0.14, 0.3, 1)   — "expressive"

  RULES:
    • Enter: Fade in + slide up (16px)
    • Exit: Fade out (no slide)
    • Stagger: 50ms between sequential elements
    • No bouncing, no elastic — this is enterprise software
    • Subtle is powerful. Less is more.
```

### 2.6 Iconography

```
Use: IBM Carbon Icons (or Lucide as current fallback)
Style: 
  • 20px default, 24px medium, 32px large
  • Stroke width: 1.5px
  • Color: inherits from text color
  • No filled icons — outline only
  • Always pair with text labels in navigation
```

---

## 3. Website Architecture

### 3.1 Sitemap

```
precisionstudios.tech
│
├── /                          ← Hero + Value Prop + Social Proof
├── /solutions                 ← Service offerings (by business need)
│   ├── /solutions/web         ← Website & Web App Development
│   ├── /solutions/mobile      ← Android / Cross-platform Apps
│   ├── /solutions/backend     ← Backend & API Engineering
│   ├── /solutions/seo         ← SEO / GEO / Marketing
│   └── /solutions/digitise    ← Full Business Digitalisation
│
├── /industries                ← Industry-specific landing pages
│   ├── /industries/medical    ← Healthcare / Clinics
│   ├── /industries/education  ← Private Tuition / Coaching
│   ├── /industries/cafe       ← Café & Restaurant
│   ├── /industries/pets       ← Pet Centers / Veterinary
│   ├── /industries/flowers    ← Florists / Product Listings
│   └── /industries/marketing  ← Marketing Agencies
│
├── /demos                     ← Live whitelabel demos
│   ├── /demos/medical         ← Clinic booking system
│   ├── /demos/education       ← Tuition management
│   ├── /demos/cafe            ← Digital menu + orders
│   ├── /demos/pets            ← Pet center management
│   ├── /demos/flowers         ← Product listing storefront
│   └── /demos/marketing       ← SEO dashboard demo
│
├── /contact                   ← Contact form (already exists)
├── /mvp                       ← Existing project showcase
└── /code                      ← Code samples / architecture docs
```

### 3.2 Page Structure — Home (IBM Style)

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAVIGATION BAR (48px, fixed)                                        │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │  HERO — Full Width                                           │    │
│  │                                                              │    │
│  │  [Overline: "PRECISION STUDIOS"]                             │    │
│  │                                                              │    │
│  │  Digitise your business.                ← Display 02         │    │
│  │  Automate your operations.                                   │    │
│  │  Scale with confidence.                                      │    │
│  │                                                              │    │
│  │  We build enterprise-grade software     ← Body Long 02       │    │
│  │  solutions for businesses ready to                           │    │
│  │  dominate their market.                                      │    │
│  │                                                              │    │
│  │  [ Get Started → ]  [ View Demos ]      ← Primary + Ghost   │    │
│  │                                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  METRICS BAR — Full Width, Gray 90 bg                        │    │
│  │                                                              │    │
│  │   10+          50+           99.9%          < 200ms          │    │
│  │   Projects     Commits/      Uptime SLA     API Response    │    │
│  │   Delivered    Week                         Time             │    │
│  │                                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  SOLUTIONS GRID — 3 Column                                   │    │
│  │                                                              │    │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐               │    │
│  │  │ Web Apps   │ │ Mobile     │ │ Backend    │               │    │
│  │  │            │ │            │ │            │               │    │
│  │  │ desc...    │ │ desc...    │ │ desc...    │               │    │
│  │  │ Learn → │ │ Learn → │ │ Learn → │               │    │
│  │  └────────────┘ └────────────┘ └────────────┘               │    │
│  │                                                              │    │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐               │    │
│  │  │ SEO/GEO    │ │ Digitise   │ │ Product    │               │    │
│  │  │ Marketing  │ │ Business   │ │ Listings   │               │    │
│  │  │ desc...    │ │ desc...    │ │ desc...    │               │    │
│  │  │ Learn → │ │ Learn → │ │ Learn → │               │    │
│  │  └────────────┘ └────────────┘ └────────────┘               │    │
│  │                                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  INDUSTRIES WE SERVE — Horizontal scroll / Tab navigation    │    │
│  │                                                              │    │
│  │  [Medical] [Education] [Café] [Pets] [Flowers] [Marketing]  │    │
│  │                                                              │    │
│  │  ┌──────────────────────────────────────────────────────┐    │    │
│  │  │  Image/Illustration        Description & Pain Points│    │    │
│  │  │                            "See the demo →"         │    │    │
│  │  └──────────────────────────────────────────────────────┘    │    │
│  │                                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  CTA SECTION — Full Width, Blue 60 bg                        │    │
│  │                                                              │    │
│  │  Ready to transform your business?                           │    │
│  │  [ Schedule a Consultation → ]                               │    │
│  │                                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  FOOTER — Gray 100 bg                                        │    │
│  │  Logo  |  Solutions  |  Industries  |  Contact  |  GitHub   │    │
│  │  © 2026 Precision Studios. All rights reserved.              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. Outreach Templates

### 4.1 Email Template — Cold Outreach

```
SUBJECT: [Business Name] — Your Digital Presence, Engineered

─────────────────────────────────────────────────────────────

Hi [First Name],

I came across [Business Name] and was genuinely impressed by
[specific compliment — e.g., "your patient reviews" / "your
menu creativity" / "your teaching approach"].

I noticed your business could benefit from a stronger digital
presence. At Precision Studios, we specialise in building
enterprise-grade digital solutions for businesses like yours —
not template websites, but custom-engineered platforms
designed to bring in customers and automate your operations.

Here's what we've built for similar businesses:

  • Online booking systems that reduced no-shows by 40%
  • Digital storefronts that increased orders by 3x
  • SEO strategies that put businesses on page 1 in 60 days

I'd love to show you a live demo of what we could build for
[Business Name]. It takes 15 minutes and there's zero
obligation.

Would [Day] at [Time] work for a quick call?

Best regards,
Soumyajit
Founder, Precision Studios
mail@precisionstudios.tech
precisionstudios.tech

─────────────────────────────────────────────────────────────
```

### 4.2 Follow-Up Email (3 days later)

```
SUBJECT: Re: [Business Name] — Quick follow-up

─────────────────────────────────────────────────────────────

Hi [First Name],

Just following up on my previous email. I know you're busy
running [Business Name], so I'll keep this brief.

I put together a quick mockup of what a digital solution
could look like for your business:

  → [Link to relevant whitelabel demo]

No strings attached — I just wanted to show you what's
possible. If it sparks any ideas, I'd love to chat.

Best,
Soumyajit
Precision Studios

─────────────────────────────────────────────────────────────
```

### 4.3 SMS Template

```
SMS TEMPLATES (160 char limit):

─── INITIAL ───
Hi [Name], this is Soumyajit from Precision Studios. We build
digital solutions for [industry] businesses. Can I show you a
quick 2-min demo? precisionstudios.tech/demos/[industry]

─── FOLLOW-UP ───
Hi [Name], just following up — here's a live demo of what we
could build for [Business Name]: precisionstudios.tech/demos/
[industry]. Happy to chat anytime!

─── POST-MEETING ───
Great speaking with you, [Name]! As discussed, here's the
proposal: [link]. Feel free to reach out with any questions.
— Soumyajit, Precision Studios
```

### 4.4 LinkedIn Message Template

```
─── CONNECTION REQUEST NOTE (300 char) ───

Hi [Name], I run Precision Studios — we build digital
solutions for [industry] businesses. I noticed [Business Name]
and thought there could be a great fit. Would love to connect
and share some ideas. No pitch, just value. — Soumyajit

─── FOLLOW-UP MESSAGE (after connection accepted) ───

Thanks for connecting, [Name]!

I wanted to share something relevant — we recently built a
[type of solution] for a [industry] business similar to yours.
The results were impressive:

  📊 [Specific metric — e.g., "3x increase in online bookings"]
  ⏱️ [Specific metric — e.g., "60% reduction in admin time"]

I put together a live demo you can explore:
→ precisionstudios.tech/demos/[industry]

If any of this resonates, I'd love to have a 15-minute
conversation about how we could help [Business Name].

No pressure at all — happy to just be a resource.

Best,
Soumyajit

─── LINKEDIN POST TEMPLATE (thought leadership) ───

🏗️ We just finished building a [solution type] for a local
[industry] business.

The problem:
→ [Pain point the business had]

Our solution:
→ [What we built — 2-3 bullet points]

The result:
→ [Measurable outcome]

This is why I believe every business — no matter the size —
deserves enterprise-grade software.

If you're a [industry] business owner wondering what digital
transformation looks like, check out our live demo:
precisionstudios.tech/demos/[industry]

#DigitalTransformation #SmallBusiness #[Industry]
#PrecisionStudios
```

---

## 5. Whitelabel Demos

Each demo is a fully functional, self-contained mini-app that can be shown to prospects as "this is what we'd build for you." Each demo ships with source code.

### 5.1 Medical — Clinic Booking System

```
ROUTE:  /demos/medical
TAGLINE: "Your clinic, digitised."

FEATURES:
  ├── Patient appointment booking (calendar view)
  ├── Doctor profile cards with specialisation
  ├── Service listing with pricing
  ├── SMS/Email confirmation mockup
  ├── Dashboard: upcoming appointments, patient stats
  └── Mobile-responsive patient portal

DESIGN:
  Primary: Teal (#08BDBA) + White
  Accent: Blue (#0F62FE)
  Feel: Clean, clinical, trustworthy

TARGET PAIN POINTS:
  • "Patients call to book → missed calls → lost revenue"
  • "No online presence → losing to competitors on Google"
  • "Manual record keeping → errors and inefficiency"
```

### 5.2 Education — Private Tuition Management

```
ROUTE:  /demos/education
TAGLINE: "Smart tools for smarter teaching."

FEATURES:
  ├── Student enrollment form
  ├── Class schedule / timetable view
  ├── Progress tracking dashboard
  ├── Fee management & payment status
  ├── Parent communication portal
  └── Resource sharing / homework uploads

DESIGN:
  Primary: Indigo (#4589FF) + Warm Gray
  Accent: Purple (#A56EFF)
  Feel: Academic, structured, approachable

TARGET PAIN POINTS:
  • "Tracking 50+ students in a notebook"
  • "Parents asking for updates via WhatsApp"
  • "No system for fee collection tracking"
```

### 5.3 Café — Digital Menu & Ordering

```
ROUTE:  /demos/cafe
TAGLINE: "From counter to cloud."

FEATURES:
  ├── Digital menu with categories & images
  ├── QR code table ordering
  ├── Order queue dashboard (kitchen view)
  ├── Daily sales analytics
  ├── Customer loyalty / stamp card
  └── Google Maps integration

DESIGN:
  Primary: Warm Brown (#8A3800) + Cream (#FFF8E1)
  Accent: Orange (#FF832B)
  Feel: Warm, inviting, artisanal

TARGET PAIN POINTS:
  • "Printing new menus every time prices change"
  • "No way to track what sells best"
  • "Losing walk-ins to cafés with better online presence"
```

### 5.4 Pet Center — Pet Care Management

```
ROUTE:  /demos/pets
TAGLINE: "Every pet deserves digital care."

FEATURES:
  ├── Pet profile registration (with photo)
  ├── Appointment booking (grooming, vet, boarding)
  ├── Vaccination & health record tracker
  ├── Service pricing & packages
  ├── Customer portal (pet owner dashboard)
  └── Automated reminders (vaccination due, etc.)

DESIGN:
  Primary: Green (#24A148) + Soft Gray
  Accent: Teal (#009D9A)
  Feel: Friendly, warm, nature-inspired

TARGET PAIN POINTS:
  • "Paper vaccination records get lost"
  • "Clients forget appointment times"
  • "No way to showcase services online"
```

### 5.5 Marketing / SEO / GEO

```
ROUTE:  /demos/marketing
TAGLINE: "Rank. Convert. Dominate."

FEATURES:
  ├── SEO audit dashboard (mock)
  ├── Keyword ranking tracker
  ├── Local SEO / Google Business profile manager
  ├── Competitor analysis view
  ├── Content calendar
  └── Analytics dashboard (traffic, conversions)

DESIGN:
  Primary: Blue (#0F62FE) + Dark (#161616)
  Accent: Cyan (#33B1FF)
  Feel: Data-driven, analytical, powerful

TARGET PAIN POINTS:
  • "We have a website but no one finds us"
  • "Competitors rank above us on Google"
  • "No idea which marketing channels work"
```

### 5.6 Flowers — Product Listing Storefront

```
ROUTE:  /demos/flowers
TAGLINE: "Beautiful arrangements, beautifully listed."

FEATURES:
  ├── Product catalog with categories (bouquets, plants, etc.)
  ├── Product detail page with image gallery
  ├── Cart / order system
  ├── Delivery scheduling
  ├── Seasonal collections
  └── WhatsApp order integration

DESIGN:
  Primary: Rose (#FF7EB6) + Soft White
  Accent: Green (#42BE65)
  Feel: Elegant, fresh, botanical

TARGET PAIN POINTS:
  • "Customers order via WhatsApp — no catalog"
  • "No way to showcase full product range"
  • "Seasonal inventory management is chaos"
```

### Demo Architecture

```
Each demo follows this structure:

/demos/[industry]/
  ├── index          ← Landing/hero for that industry
  ├── dashboard      ← Admin/management dashboard view
  ├── customer       ← Customer-facing portal
  └── [feature]      ← Feature-specific pages

Tech Stack per demo:
  • React + Tailwind (consistent with main site)
  • Framer Motion for interactions
  • Mock data (JSON) — no backend required
  • Fully self-contained, shareable via URL
  • Source code available at /code/[industry]
```

---

## 6. Todo Tracker

### Priority Legend
- 🔴 **P0** — Critical, do first
- 🟡 **P1** — Important, do soon
- 🟢 **P2** — Nice to have, schedule later

### Master Todo List

#### 🔴 P0 — Foundation

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | **Domain**: Secure `precisionstudios.tech` | ⬜ TODO | Check availability, register via Namecheap/Cloudflare |
| 2 | **Design System**: Implement IBM Carbon tokens in CSS | ⬜ TODO | Colors, typography, spacing as CSS custom properties |
| 3 | **Website Redesign**: Pivot Home page to business-focused | ⬜ TODO | Follow Section 3.2 wireframe |
| 4 | **Navigation**: Build IBM Carbon-style header | ⬜ TODO | 48px height, structured nav |
| 5 | **Font**: Integrate IBM Plex Sans + IBM Plex Mono | ⬜ TODO | Google Fonts CDN |

#### 🟡 P1 — Outreach & Content

| # | Task | Status | Notes |
|---|------|--------|-------|
| 6 | **Email Template**: Finalize cold outreach email | ⬜ TODO | See Section 4.1 |
| 7 | **Email Template**: Finalize follow-up email | ⬜ TODO | See Section 4.2 |
| 8 | **SMS Template**: Finalize all 3 SMS variants | ⬜ TODO | See Section 4.3 |
| 9 | **LinkedIn Message**: Finalize connection + follow-up | ⬜ TODO | See Section 4.4 |
| 10 | **LinkedIn Post**: Create thought leadership template | ⬜ TODO | See Section 4.4 |
| 11 | **Solutions Page**: Build `/solutions` with 6 service cards | ⬜ TODO | Web, Mobile, Backend, SEO, Digitise, Listings |
| 12 | **Industries Page**: Build `/industries` with 6 verticals | ⬜ TODO | Medical, Education, Café, Pets, Flowers, Marketing |

#### 🟡 P1 — Whitelabel Demos

| # | Task | Status | Notes |
|---|------|--------|-------|
| 13 | **Demo: Medical** — Clinic booking system | ⬜ TODO | See Section 5.1 |
| 14 | **Demo: Education** — Tuition management | ⬜ TODO | See Section 5.2 |
| 15 | **Demo: Café** — Digital menu & ordering | ⬜ TODO | See Section 5.3 |
| 16 | **Demo: Pets** — Pet center management | ⬜ TODO | See Section 5.4 |
| 17 | **Demo: Marketing** — SEO dashboard | ⬜ TODO | See Section 5.5 |
| 18 | **Demo: Flowers** — Product listing storefront | ⬜ TODO | See Section 5.6 |
| 19 | **Demo Hub**: Build `/demos` index page | ⬜ TODO | Grid of all demos with previews |
| 20 | **Code Samples**: Build `/code` page with architecture docs | ⬜ TODO | GitHub links + architecture diagrams |

#### 🟢 P2 — Polish & Growth

| # | Task | Status | Notes |
|---|------|--------|-------|
| 21 | **SEO**: Meta tags, OpenGraph, structured data | ⬜ TODO | All pages |
| 22 | **Analytics**: Set up conversion tracking | ⬜ TODO | Vercel Analytics already installed |
| 23 | **CTA Optimization**: A/B test button copy | ⬜ TODO | "Get Started" vs "Book a Demo" vs "See What We Build" |
| 24 | **Testimonials**: Add client testimonial section | ⬜ TODO | Social proof on home page |
| 25 | **Blog/Case Studies**: Create content strategy | ⬜ TODO | One case study per demo/vertical |
| 26 | **Email Automation**: Set up drip campaign | ⬜ TODO | Mailchimp/Resend integration |
| 27 | **LinkedIn Automation**: Schedule posts | ⬜ TODO | 2-3 posts/week cadence |
| 28 | **Google Business Profile**: Set up for local SEO | ⬜ TODO | If targeting local businesses |

---

## CSS Custom Properties Reference (Implementation)

```css
/* design-tokens.css — IBM Carbon-inspired tokens for Precision Studios */

:root {
  /* ─── COLORS ─── */
  --ps-gray-100: #161616;
  --ps-gray-90: #262626;
  --ps-gray-80: #393939;
  --ps-gray-70: #525252;
  --ps-gray-60: #6F6F6F;
  --ps-gray-50: #8D8D8D;
  --ps-gray-40: #A8A8A8;
  --ps-gray-30: #C6C6C6;
  --ps-gray-20: #E0E0E0;
  --ps-gray-10: #F4F4F4;
  --ps-white: #FFFFFF;

  --ps-blue-80: #002D9C;
  --ps-blue-70: #0043CE;
  --ps-blue-60: #0F62FE;
  --ps-blue-50: #4589FF;
  --ps-blue-40: #78A9FF;

  --ps-teal-60: #007D79;
  --ps-teal-50: #009D9A;
  --ps-teal-40: #08BDBA;

  --ps-red-60: #DA1E28;
  --ps-red-50: #FA4D56;
  --ps-yellow-30: #F1C21B;
  --ps-green-50: #24A148;

  /* ─── TYPOGRAPHY ─── */
  --ps-font-sans: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --ps-font-mono: 'IBM Plex Mono', 'Courier New', monospace;

  /* ─── SPACING ─── */
  --ps-spacing-01: 0.125rem;   /* 2px  */
  --ps-spacing-02: 0.25rem;    /* 4px  */
  --ps-spacing-03: 0.5rem;     /* 8px  */
  --ps-spacing-04: 0.75rem;    /* 12px */
  --ps-spacing-05: 1rem;       /* 16px */
  --ps-spacing-06: 1.5rem;     /* 24px */
  --ps-spacing-07: 2rem;       /* 32px */
  --ps-spacing-08: 2.5rem;     /* 40px */
  --ps-spacing-09: 3rem;       /* 48px */
  --ps-spacing-10: 4rem;       /* 64px */
  --ps-spacing-11: 5rem;       /* 80px */
  --ps-spacing-12: 6rem;       /* 96px */
  --ps-spacing-13: 10rem;      /* 160px */

  /* ─── MOTION ─── */
  --ps-ease-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --ps-ease-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --ps-duration-fast: 110ms;
  --ps-duration-moderate: 150ms;
  --ps-duration-slow: 240ms;
  --ps-duration-expressive-fast: 250ms;
  --ps-duration-expressive-mod: 400ms;
  --ps-duration-expressive-slow: 700ms;

  /* ─── LAYOUT ─── */
  --ps-header-height: 3rem;    /* 48px */
  --ps-max-width: 99rem;       /* 1584px */
}
```

---

## Appendix: Current → Target Migration Path

```
CURRENT STATE                         TARGET STATE
──────────────────────────────────    ──────────────────────────────────
Portfolio / showcase site             Business solutions consultancy
"Engineering Perfection"              "Digitise. Automate. Scale."
Dark + Indigo/Purple gradients        IBM Carbon dark (structured)
Rounded corners everywhere            Sharp corners (Carbon standard)
Framer Motion heavy                   Subtle, productive motion
Developer audience                    Business owner audience
/mvp as main CTA                      /demos as main CTA
No industry targeting                 6 industry verticals
No outreach strategy                  Email + SMS + LinkedIn pipeline
1 demo (T-shirt)                      6+ whitelabel demos
```

---

> **Next Steps:** Approve this design system, then we begin implementation starting with P0 tasks — design tokens, font integration, and the home page rebuild.
