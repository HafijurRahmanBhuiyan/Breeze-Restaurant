# Breeze Restaurant — ব্রীজ রেস্তোরাঁ

A modern, fully responsive single-page website for **Breeze Restaurant**, a fine dining restaurant in Dhaka, Bangladesh. The site presents the restaurant online with an editorial-inspired design — bilingual (English / Bengali) branding, an interactive menu, an atmospheric photo gallery, guest reviews, venue location, and reservation tools.

![Status](https://img.shields.io/badge/status-active-brightgreen) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-7-yellow) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8)

---

## Live Link: https://breeze-restaurant.netlify.app/

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Sections](#sections)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Data & Content](#data--content)
- [Accessibility & SEO](#accessibility--seo)
- [Deployment](#deployment)

---

## Overview

Breeze Restaurant is a fine dining establishment located in **Dhaka 1229, Bangladesh**:

| | |
|---|---|
| **Name** | Breeze Restaurant (ব্রীজ রেস্তোরাঁ) |
| **Location** | House# 1/C, 1/D, Road# 16, Dhaka 1229, Bangladesh |
| **Located in** | Star Thai Aluminium |
| **Google Rating** | ⭐ 4.4 / 5 (951 reviews) |
| **Price Range** | ৳200–1,200 per person |
| **Opening Hours** | Daily, 12:00 PM – 11:00 PM |
| **Phone** | [01305-073888](tel:01305073888) |
| **Plus Code** | RCM9+J6 Dhaka |

The website serves as the restaurant's digital storefront, helping guests discover the menu, understand the available services, find the venue, and get in touch for reservations and inquiries.

---

## Features

- **Bilingual Experience** — Branding and supporting copy shown in both English and Bengali (Hind Siliguri, Cormorant Garamond, and Plus Jakarta Sans font families).
- **Interactive Menu** — Full menu with 8 category filters (Popular, Mains, Pizza, Burgers & Sandwiches, Appetizers & Soups, Desserts, Drinks), a "View Full Menu" toggle, and a rich item detail modal with imagery and call-to-order action.
- **Photo Gallery & Lightbox** — Filterable visual gallery (Food & Drink, Interior, Pizza, Desserts, Coffee, Vibe) with hover effects, a full-screen lightbox, prev/next navigation, image counter, and keyboard support (Esc / Arrow keys).
- **Table Reservation Flow** — A "Reserve a Table" modal from the navbar, hero, and menu that surfaces operating hours, location, and occasions, with one-tap **direct phone booking** or a link to the online inquiry form.
- **Contact & Inquiry Form** — Client-side validated form (name, contact, inquiry type, message) with success confirmation state.
- **Guest Reviews** — Rating overview card (4.4/5, 951 reviews) plus curated verified guest feedback cards with star ratings and highlight tags.
- **Venue Location** — Address card with Google Plus Code, an embedded interactive Google Map, and "Get Directions" / "Call" quick actions.
- **Services Showcase** — Dine-in, Drive-through, and No-contact delivery cards.
- **Responsive & Mobile-First** — Sticky navbar with scroll-aware styling, mobile drawer menu, and layouts optimized from small screens up.
- **Smooth Animations** — Subtle entrance reveals, hover transitions, and scroll-triggered CTAs powered by CSS + motion.

---

## Sections

The page is composed of the following sections (in order):

1. **Navbar** — Sticky header with smooth-scroll anchor navigation and reservation CTA.
2. **Hero** — Full-screen cinematic hero with backdrop image, ratings, price range, and CTA buttons.
3. **Quick Info Bar** — At-a-glance business highlights.
4. **About** — Introduction to the restaurant and atmosphere.
5. **Occasions** — Family gatherings, dates & couples, friends & get-togethers, casual meetings.
6. **Featured Food** — Editorial-style highlight of signature dishes.
7. **Menu** — The full categorized menu with filtering and item detail modals.
8. **Gallery** — Filterable visual atmosphere gallery with lightbox.
9. **Reviews** — Rating breakdown and verified guest feedback.
10. **Services** — Dine-in, drive-through, and no-contact delivery.
11. **Location** — Address, plus code, operating hours, and interactive Google Map.
12. **Reservation** — Cinematic table reservation CTA section.
13. **Contact** — Business details and inquiry form.
14. **Footer** — Closing links and brand info.

---

## Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens |
| **Icons** | [lucide-react](https://lucide.dev/) |
| **Animation** | [motion](https://motion.dev/) |
| **Fonts** | Cormorant Garamond, Plus Jakarta Sans, Hind Siliguri (Google Fonts) |

---

## Project Structure

```
.
├── index.html                  # HTML entry, SEO meta tags & JSON-LD structured data
├── vite.config.ts              # Vite config (React + Tailwind plugins, @ alias)
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
├── .env.example                # Example environment variables
├── metadata.json               # AI Studio applet metadata
└── src/
    ├── main.tsx                # React application entry point
    ├── App.tsx                 # Root component composing all sections
    ├── index.css               # Tailwind import, theme tokens & base styles
    ├── data/
    │   ├── restaurantData.ts   # Business info, menu catalog, guest reviews
    │   └── images.ts           # Centralized image & gallery configuration
    ├── assets/
    │   └── images/             # Restaurant photography
    └── components/             # One component per page section + modals
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd Breeze-Restaurant

# 2. Install dependencies
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will start at **http://localhost:3000** (hosted on `0.0.0.0`).

### Production Build

```bash
npm run build
```

Compiled output is written to the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Build the app for production to `dist/` |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Type-check the codebase with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` and `server.js` build artifacts |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | No* | Gemini AI API key. When deployed as a Google AI Studio applet this is injected automatically at runtime from user secrets. |
| `APP_URL` | No* | URL where the applet is hosted. Also injected automatically by AI Studio for self-referential links, OAuth callbacks, and API endpoints. |

\* Required only in environments that invoke the server-side runtime (e.g., Google AI Studio). The static frontend runs without environment variables. Add these to a `.env` file (see `.env.example`) for local server-side development if needed. See the [Deployment](#deployment) section for details.

---

## Data & Content

All business details, menu items, and reviews live in a single source of truth:

- **`src/data/restaurantData.ts`** — `businessInfo`, `menuItems`, and `guestReviews` with typed TypeScript interfaces.
- **`src/data/images.ts`** — Centralized image imports and the gallery dataset. Real restaurant photography is placed in `src/assets/images` and referenced here, so components never need modification to swap imagery.

To update content (phone number, hours, menu, reviews), edit these two files — the UI updates automatically.

---

## Accessibility & SEO

- **SEO:** Title, description, Open Graph and Twitter card meta tags, plus **JSON-LD structured data** (`schema.org/Restaurant`) describing name, cuisine, price range, phone, address, opening hours, and ratings — improving eligibility for rich results.
- **Accessibility:** Semantic HTML landmarks, `aria-label`s on icon buttons and interactive controls, keyboard-navigable lightbox and modals, focus-visible rings, and `alt` text on all imagery.
- **Performance:** Lazy-loaded images (`loading="lazy"`), preconnected Google Fonts, and optimized build output.

---

## Deployment

The project is configured as a **Google AI Studio applet** (`metadata.json`). When deployed there:

- The Cloud Run service URL is injected as `APP_URL`.
- User-configured secrets are injected as `GEMINI_API_KEY` at runtime (via the AI Studio **Secrets** panel).

For any static or serverless host (Vercel, Netlify, Google Cloud, Nginx), a standard Vite build works out of the box:

```bash
npm run build
# Serve the dist/ directory
```

---

## License

This is a private project — all content (branding, menu, photography, and reviews) is the property of Breeze Restaurant.