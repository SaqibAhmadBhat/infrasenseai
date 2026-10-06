# Architecture Overview

## Objective
To build a scalable, performant, and accessible public-facing website for **InfraSense AI**, an AIoT road infrastructure intelligence platform.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Component Architecture
- **/components/ui**: Reusable, primitive UI components (buttons, cards, badges) built with accessibility in mind.
- **/components/layout**: Shell components like Navbar, Footer, PageContainer.
- **/components/home, /components/technology...**: Feature/page-specific domain components.

## Content Management Strategy
Instead of hardcoding text into dozens of UI components, facts and claims are abstracted into the `/content` directory. This allows for updating startup stages, product features, and verified metrics without needing deep dives into the UI tree.

## Data Visualization
The platform relies on demonstrating capability through UI. The `/data` folder contains mock JSON data that simulates the eventual real API output of the backend (e.g., YOLOv8 detection metadata, vibration readings, and geospatial scoring).

## Styling & Design Tokens
Styles are primarily governed by Tailwind CSS, with custom configuration representing the "premium industrial deep-tech" visual language (graphite, near-black, teal, and amber accents).

## SEO & Accessibility
- Semantic HTML tags are prioritized.
- Open Graph metadata and JSON-LD structured data are generated centrally in `/lib/seo.ts` (or equivalent).
- High contrast, visible focus states, and `prefers-reduced-motion` are supported.
