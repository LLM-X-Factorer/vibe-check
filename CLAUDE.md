# DevBug - Viral Developer Personality Quiz

## Overview

Viral zero-friction personality quiz for devs/tech workers in the Vibe Coding era. Traffic funnel for [VibeID](https://vibeid.dev). Inspired by SBTI: absurd self-deprecating labels, screenshot-optimized cards, zero registration.

## Tech Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + @vercel/og

## Commands

```bash
npm run dev    # Dev server (port 3000)
npm run build  # Production build (standalone output)
```

## Architecture

- `src/data/types.ts` — 16 personality type definitions (id, emoji, name, description, traits, color, gradient)
- `src/data/questions.ts` — 10 quiz questions, each with 4 answers mapped to type scores
- `src/lib/scoring.ts` — Score calculation: sum per-type points across answers, return highest
- `src/components/ResultCard.tsx` — Screenshot-optimized result card with illustration + QR code
- `src/components/SharePoster.tsx` — Canvas-based 1080x1920 share poster generation (client component)
- `src/components/VibeIdLink.tsx` — WeChat-compatible external link (copies URL in WeChat browser)
- `src/app/api/og/route.tsx` — OG image generation (edge runtime, emoji-based)
- `public/illustrations/` — 16 webp illustrations, filenames match type IDs
- `public/qr.png` — Static QR code pointing to site URL

## Design Principles

- Zero registration, zero login, ~1 minute completion
- Self-deprecating labels only, no flattery
- Result card designed for mobile screenshot with built-in QR code
- Homepage marquee ordered by impact (shock value), not balance
- WeChat browser compatible (H5, no JS-SDK needed)

## Deployment

Docker + Nginx on Tencent Cloud Lighthouse. Port 3003 mapped to container 3000.
Domain: devbug.llmxfactor.cloud
