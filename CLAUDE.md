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

## 🚀 部署运维（本仓库可直接操作线上服务器）

> 本项目已部署上线。运维真源见 `~/Projects/INFRA-INVENTORY.md`。本机已配 SSH 密钥别名，可直接操作服务器，无需额外凭证。

- **服务器**：`llmx-lh`
- **部署目录**：`/opt/vibe-check`
- **运行方式**：docker compose（`docker-compose.yml`）
- **域名**：devbug.llmxfactor.cloud
- **当前状态**：已停(2026-05-25,可start复活)

常用操作（本机任意目录均可执行）：

```bash
ssh llmx-lh "sudo docker compose -f /opt/vibe-check/docker-compose.yml ps"                  # 状态
ssh llmx-lh "sudo docker compose -f /opt/vibe-check/docker-compose.yml logs --tail=200 -f"  # 日志
ssh llmx-lh "sudo docker compose -f /opt/vibe-check/docker-compose.yml restart"             # 重启
ssh llmx-lh "sudo docker compose -f /opt/vibe-check/docker-compose.yml start"               # 启(复活已停服务)
ssh llmx-lh "sudo docker compose -f /opt/vibe-check/docker-compose.yml stop"                # 停
# 更新部署(拉代码+重建, 末尾清 build 缓存防爆盘):
ssh llmx-lh "cd /opt/vibe-check && sudo git pull && sudo docker compose -f docker-compose.yml up -d --build && sudo docker builder prune -af"
```
