 <p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:020817,50:071A33,100:123B70&height=230&section=header&text=COLOMBO%20BEACON&fontSize=48&fontColor=FFFFFF&fontAlignY=40&desc=Navigation%20Towards%20Destination&descSize=16&descAlignY=60&animation=fadeIn&stroke=60A5FA&strokeWidth=1" width="100%" alt="Colombo Beacon — Navigation Towards Destination" />
</p>

<p align="center">
  <b>A digital home for our community, memories, events, and legacy.</b>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=15&duration=3000&pause=900&color=60A5FA&center=true&vCenter=true&width=600&lines=Building+community+through+technology;Celebrating+memories+and+our+legacy;Connecting+people+through+Colombo+Beacon" alt="Animated typing introduction" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-020817?style=for-the-badge&logo=next.js&logoColor=FFFFFF" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-071A33?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-123B70?style=for-the-badge&logo=typescript&logoColor=FFFFFF" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-0B2545?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS" />
</p>

---


A responsive web platform for **Colombo Beacon**, built to showcase the club, its events, articles, memories, history, and university sports coverage. The UI uses a dark navy visual system with blue accents, glow effects, image-led sections, and motion to create a polished editorial experience.

> **Repository:** https://github.com/isururx/Beacon-Web  
> **Status note:** This README describes the code currently present in the repository. Some routes are visual/page scaffolds and some data is currently hard-coded; do not assume authentication, registration, persistence, or live data integrations exist unless implemented separately.

---

## 1. Project at a glance

- **Framework:** Next.js App Router
- **Language:** TypeScript / TSX
- **UI:** React components + Tailwind CSS v4
- **Animation:** GSAP + ScrollTrigger, Framer Motion
- **Smooth-scroll dependency:** Lenis (installed; check where it is initialized before relying on it)
- **Runtime:** React 19, Next.js 16
- **Content currently represented:** landing page, featured events, articles area, club introduction, memories gallery, history archive, sports tournament dashboard, and dashboard placeholder
- **API route currently present:** `GET /api/events` returning a static event array

## 2. Getting started

### Requirements

Install a Node.js version compatible with the installed Next.js release, plus npm.

### Install and run locally

```bash
git clone https://github.com/isururx/Beacon-Web.git
cd Beacon-Web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

```bash
npm run dev    # Start the local development server
npm run build  # Create a production build
npm run start  # Start the production server (after build)
npm run lint   # Run ESLint
```

## 3. Route map

| Route | Purpose | Current implementation |
| --- | --- | --- |
| `/` | Main landing page | Composes the hero/experience, featured events, featured articles, About Beacon, memories gallery, and history preview |
| `/events` | Events page | Currently a basic page scaffold |
| `/articles` | Articles index | Currently a basic page scaffold; featured article UI lives in a home-page component |
| `/articles/[slug]` | Dynamic article route | Displays the supplied slug in a placeholder article page |
| `/history` | Club history archive | Uses an interactive timeline component |
| `/history/[year]` | History for one year | Loads year-specific data from `app/data/history.ts`; invalid years call `notFound()` |
| `/sports` | Sports tournament view | Composes tournament overview, recent/upcoming matches, live feeds, and updates using local data |
| `/dashboard` | Management dashboard | Currently a basic overview scaffold |
| `/api/events` | Event data endpoint | Returns a hard-coded JSON list via a GET handler |

## 4. Project structure

```text
app/
├── api/
│   └── events/route.ts          # GET API returning event records
├── articles/
│   ├── page.tsx                 # Articles index route
│   └── [slug]/page.tsx          # Dynamic article route
├── components/
│   ├── AboutBeacon.tsx          # About/club introduction section
│   ├── BeaconExperience.tsx     # Home hero/scroll experience imported by app/page.tsx
│   ├── BeaconHero.tsx           # Separate GSAP hero component
│   ├── BeaconMemories.tsx       # Animated memories gallery
│   ├── DashboardNav.tsx         # Dashboard navigation component
│   ├── EventCard.tsx            # Reusable event card
│   ├── FeaturedArticles.tsx     # Featured article section
│   ├── FeaturedEvents.tsx       # Featured event section
│   ├── HistoryPreview.tsx       # Home-page history preview/timeline
│   ├── HistoryTimeline.tsx      # Full history timeline
│   ├── MemoryGallery.tsx        # Memory gallery component
│   ├── hero.tsx                 # Additional hero component
│   └── navbar.tsx               # Shared responsive site navigation
├── dashboard/
│   ├── layout.tsx               # Dashboard route layout
│   └── page.tsx                 # Dashboard overview
├── data/
│   ├── history.ts               # Year-by-year club history data
│   └── sports.ts                # Tournament, matches, and update data
├── events/page.tsx              # Events route scaffold
├── history/
│   ├── page.tsx                 # History timeline route
│   └── [year]/page.tsx          # Dynamic year archive
├── sports/
│   ├── page.tsx                 # Sports page composition
│   ├── FacultyPointsTable.tsx
│   ├── LiveUpdates.tsx
│   ├── MatchResultCard.tsx
│   ├── RecentMatches.tsx
│   ├── TopFivePodium.tsx
│   ├── TournamentOverview.tsx
│   └── UpcomingMatches.tsx
├── globals.css                  # Global styling and Tailwind import
├── layout.tsx                   # Root layout, metadata, global nav
└── page.tsx                     # Home-page composition

public/
└── images/
    ├── beacon-hero.png
    ├── faculties/               # Faculty imagery
    └── memories/                # Numbered Beacon memory photos

package.json
next.config.ts
postcss.config.mjs
tsconfig.json
eslint.config.mjs
```

> File names above are based on the current repository tree. Check the actual imports and usages before deleting or renaming any of the similarly named hero/gallery components.

## 5. How the app is composed

### Root layout

`app/layout.tsx` imports `app/globals.css`, sets the page metadata, and renders the shared `Navbar` around the current route. As a result, changing the shared navbar affects every route using the root layout.

### Home page

`app/page.tsx` composes the homepage from reusable components in this order:

1. `BeaconExperience` — main hero/scroll experience.
2. `FeaturedEvents` — receives an array of sample event records from the page.
3. `FeaturedArticles` — article preview section.
4. `AboutBeacon` — introduces the club.
5. `BeaconMemories` — image-led animated gallery.
6. `HistoryPreview` — preview of the historical archive.

The sample event data is defined in `app/page.tsx`, so it is currently content in code rather than a database-backed event management workflow.

### History

- `app/data/history.ts` acts as the source for historical years, executive committee details, events, achievements, and memories.
- `app/components/HistoryTimeline.tsx` presents the timeline interaction.
- `app/history/[year]/page.tsx` resolves the chosen year and renders the corresponding archive.
- `generateStaticParams()` derives year route parameters from the local history data.
- Unknown or malformed year values are handled with Next.js `notFound()`.

To add or correct a historical year, start by updating `app/data/history.ts` and ensure the referenced image assets exist under `public/`.

### Sports

`app/data/sports.ts` contains the current tournament data. `app/sports/page.tsx` passes that data into presentation components for the tournament overview, match results, upcoming matches, live feeds, and live updates.

Treat the current implementation as locally supplied data unless a real-time data source is explicitly wired in. The presence of “live” UI components does not, by itself, mean scores are connected to a live service.

### Events API

`app/api/events/route.ts` implements a GET route that returns a static JSON array. It is useful as a starting point for an API, but it is not yet a full event management backend: the current handler does not create events, store registrations, issue QR passes, or connect to a database.

## 6. Visual design system

The existing interface leans into a cinematic, dark-blue style.

| Token / treatment | Current use |
| --- | --- |
| Deep navy | Main canvas and hero backgrounds, especially `#020817` |
| Navy surface | Navigation background, e.g. `#071A33` |
| Blue accent | Links, selected states, labels, borders, timeline nodes, and active indicators |
| Cyan / pale blue | Secondary text accents and restrained glow |
| White | Primary headings and important content |
| Muted gray | Supporting copy and secondary labels |
| Translucent borders | `border-white/10`, `border-white/[0.08]` and related utilities |
| Ambient glow | Large blurred blue shapes behind important sections |
| Image gradients | Dark gradient overlays keep labels readable over photography |
| Responsive layout | Tailwind breakpoints such as `sm:`, `md:`, and `lg:` |

Global styling starts in `app/globals.css`; many component-level colors and effects are expressed directly with Tailwind utility classes. If the color theme changes, search both files rather than assuming all tokens live in one theme configuration.

### Styling conventions

- Prefer existing utility patterns for spacing, borders, typography, and responsive layout to preserve consistency.
- Use `public/images/...` paths for local assets; files in `public` are served from the root URL (for example, `public/images/memories/1.jpg` is referenced as `/images/memories/1.jpg`).
- Keep text readable on dark surfaces. Glows should support hierarchy rather than compete with content.
- Design for mobile first and verify the navbar, image gallery, tables, and tournament cards on narrow viewports.

## 7. Animation and motion

The project currently includes **GSAP/ScrollTrigger** and **Framer Motion**.

### GSAP + ScrollTrigger

The standalone `app/components/BeaconHero.tsx` registers `ScrollTrigger` and animates the hero heading with scroll progress, including a pinned section. It is a client component because it uses React hooks and browser-side animation.

Use GSAP where an interaction needs scroll-linked timelines, pinning, or tightly sequenced motion. When adding effects, scope selectors/animations to the component and clean them up on unmount. Avoid killing every page's global ScrollTrigger instance from a component cleanup if the triggers may belong to other components.

### Framer Motion

Framer Motion is used for UI transitions and reveal effects, including the responsive navbar, memory gallery, and timeline-style presentation. Existing patterns include:

- `initial`, `animate`, and `exit` for enter/leave transitions
- `whileHover` for subtle interaction feedback
- `whileInView` with `viewport={{ once: true }}` for reveal-on-scroll
- `layoutId` for a moving active-navigation indicator
- delayed transitions to stagger cards into view

Use motion to communicate state and guide attention. Keep movement restrained, avoid animating every element, and respect reduced-motion preferences for users who request less animation.

### Lenis

Lenis is listed as a dependency in `package.json`. Verify that it is initialized and connected to the animation frame/ScrollTrigger flow before treating smooth scrolling as active throughout the application.

## 8. React / Next.js component conventions

- **Routes:** Keep route entry points in the `app/` directory using Next.js App Router conventions.
- **Reusable UI:** Put shared visual pieces in `app/components/` and smaller sports-specific pieces in `app/sports/`.
- **Data versus presentation:** Keep repeatable records in `app/data/` (or a future data service) and pass them to components through typed props.
- **Client components:** Add `"use client"` only when a component needs client-side state, event handlers, effects, or browser-only behavior. Components using Framer Motion, hooks, or GSAP generally need it.
- **Dynamic paths:** Use bracketed directories, such as `[slug]` and `[year]`, for dynamic route segments.
- **Assets:** Store static images in `public/` and use root-relative URLs.
- **TypeScript:** Keep component props and data structures explicit; update types when changing event, history, or sports records.

## 9. Current limitations and next development steps

The current codebase provides UI foundations and local data structures. Before treating the site as a production club-management platform, verify or implement the following:

- Replace sample events/articles with an agreed content source or database.
- Build event creation/editing and member registration flows with server-side validation.
- Add authentication, role-based authorization, and protected dashboard routes before exposing management functions.
- Persist event registrations and history/content updates rather than storing all records in source files.
- Implement QR pass generation and server-side verification if event passes are introduced.
- Connect sports scores/updates to a trustworthy source or define a controlled manual-update workflow.
- Add content administration for articles and investigate analytics/advertising only with appropriate privacy and policy handling.
- Add automated tests and deployment/CI checks.
- Review accessibility, keyboard navigation, image alternatives, loading/error states, and reduced-motion behavior.

These are recommendations for future work, not claims that those systems already exist.

## 10. Contributing workflow

1. Pull the latest changes from `main`.
2. Create a focused feature branch.
3. Keep changes scoped to a route, component, or data module.
4. Run `npm run lint` and `npm run build` before opening a pull request.
5. Include a clear summary and screenshots for visible UI changes.

## 11. Quick navigation for developers

- **Change site-wide navigation:** `app/components/navbar.tsx`
- **Change homepage section order:** `app/page.tsx`
- **Change global background/theme baseline:** `app/globals.css`
- **Change homepage sample events:** `app/page.tsx`
- **Change event API sample response:** `app/api/events/route.ts`
- **Change history content:** `app/data/history.ts`
- **Change sports/tournament content:** `app/data/sports.ts`
- **Change hero/scroll interaction:** inspect `app/components/BeaconExperience.tsx` and `app/components/BeaconHero.tsx`
- **Change memory gallery and reveal animation:** `app/components/BeaconMemories.tsx`
- **Change per-year history layout:** `app/history/[year]/page.tsx`

---

Built for Colombo Beacon — **Navigation Towards Destination**.
