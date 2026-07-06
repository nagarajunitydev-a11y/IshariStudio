# Portfolio Website

A modern portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Home** — Hero, featured work, and quick navigation
- **Portfolio Gallery** — Grid of projects with detail views
- **Categories** — Browse work by category
- **Search** — Full-text search across portfolio items
- **Filters** — Filter by category, tags, and featured status
- **Contact** — Contact form and social links
- **Admin Dashboard** — Manage portfolio items (CRUD)
- **Dark Mode** — System-aware theme with manual toggle
- **Responsive Design** — Mobile-first layout

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & layouts
│   ├── (public)/           # Public-facing routes
│   ├── admin/              # Admin dashboard routes
│   └── api/                # API route handlers
├── components/
│   ├── layout/             # Header, Footer, Navigation
│   ├── ui/                 # Reusable UI primitives
│   ├── portfolio/          # Gallery, cards, filters
│   ├── contact/            # Contact form components
│   └── admin/              # Admin-specific components
├── lib/                    # Utilities, data access, helpers
├── hooks/                  # Custom React hooks
├── types/                  # Shared TypeScript types
├── data/                   # Static seed data (JSON)
└── context/                # React context providers
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint             |
