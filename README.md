<h1 align="center">Nik — 3D Creator</h1>

<p align="center">
  A dark, motion-driven portfolio landing page for a 3D creator — built with a focus on
  fluid typography, scroll-choreographed animation, and clean, production-ready code.
</p>

<p align="center">
  <img alt="React"        src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white">
  <img alt="TypeScript"   src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white">
  <img alt="Vite"         src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white">
</p>

---

## Overview

A single-page portfolio experience assembled from six full-height sections, each with its own
scroll-linked motion. The interface is fully responsive from small phones to ultra-wide displays,
using `clamp()` fluid typography throughout rather than breakpoint-stepped font sizes.

## Features

- **Magnetic hero portrait** — a cursor-following magnetic hover effect over an oversized gradient headline.
- **Scroll-driven marquee** — two rows of preview clips that translate in opposite directions as the page scrolls.
- **Character-by-character reveal** — the About bio fades in per glyph, mapped to scroll progress.
- **Sticky-stacking project cards** — cards pin and scale down as the next one slides over them.
- **Reusable motion primitives** — `FadeIn`, `Magnet` and `AnimatedText` keep animation logic out of the sections.
- **Anchored navigation** — About / Price / Projects / Contact map cleanly to their sections.

## Tech Stack

| Area        | Choice                                   |
| ----------- | ---------------------------------------- |
| Framework   | React 19 + TypeScript                    |
| Build tool  | Vite                                     |
| Styling     | Tailwind CSS v3 · Kanit (Google Fonts)   |
| Animation   | Framer Motion v12                        |
| Icons       | Lucide React                             |

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── components/     # Reusable primitives: FadeIn, Magnet, AnimatedText, buttons
├── sections/       # Hero, Marquee, About, Services, Projects, Contact
├── App.tsx         # Section composition
└── index.css       # Global reset, dark theme, gradient heading utility
public/images/      # Locally hosted, optimized assets
```

## Performance

Marquee previews originally shipped as ~170 MB of animated GIFs. They were transcoded to
muted, looping H.264 `<video>` tiles, cutting the asset payload to **~11 MB (~15×)** with no
visible quality loss — keeping load times and repository size in check.

## Author

**Nikolay Stoyanov** — AI-Native Full-Stack Developer
📧 [Lobido1988@gmail.com](mailto:Lobido1988@gmail.com)
