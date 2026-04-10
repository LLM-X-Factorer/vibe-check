# DevBug - 你是哪种 Bug？

Vibe Coding 时代的开发者人格测试。10 道题，1 分钟，16 种 Bug 人格。

**Live:** [devbug.llmxfactor.cloud](https://devbug.llmxfactor.cloud)

## What is this

一个病毒传播型人格测试，对标 [SBTI](https://sbti.wiki)（恶搞版 MBTI）的传播结构：

- 零注册、零登录、1 分钟出结果
- 荒诞自嘲标签（Tab 键工程师、人形 USB、技术债打印机...）
- 结果卡片为手机截图设计，自带二维码传播闭环
- AI 编程时代的集体焦虑，笑完扎心

## 16 种 Bug 人格

| 类型 | 一句话 |
|------|--------|
| ⌨️ Tab 键工程师 | Tab-Tab-Tab-Enter，从不看 diff |
| 🔌 人形 USB | 把需求插进 AI，把结果拔出来 |
| 🔥 Vibe Debugger | Vibe coding 很爽，vibe debugging 要命 |
| 👷 赛博监工 | 不写代码，监督 AI 写代码 |
| 📝 提示词小说家 | 提示词比代码还长，你是甲方 |
| 🏺 古法编程师 | 坚持手写代码的非遗传承人 |
| ✅ 全部接受 | Accept All，直到生产环境炸了 |
| 🖨️ 技术债打印机 | 两个 vibe coder = 50 人的技术债 |
| 💼 Claude 的 PM | 从写代码降级为管 AI 写代码 |
| 🔓 漏洞艺术家 | 一个人就是 OWASP Top 10 |
| 🚢 先发后改 | 先上线再说，Git 历史全是 fix |
| 🌐 需求翻译官 | 人类和 AI 之间的桥梁，两边都嫌你 |
| 💣 删库预备役 | 离删库跑路只差一个坏心情 |
| 🎭 冒名顶替 2.0 | 以前怕被发现不会写码，现在怕被发现全是 AI 写的 |
| 🌙 凌晨选手 | 白天摸鱼，凌晨跟 AI 结对到天亮 |
| 📌 TODO 收藏家 | AI 生成了完美 TODO 列表，然后收藏了 |

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **OG Images:** @vercel/og (Satori)
- **Illustrations:** AI-generated, black-and-white line art
- **Deployment:** Docker + Nginx

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docker Deployment

```bash
docker compose up -d --build
```

Runs on port 3003. Configure Nginx reverse proxy for your domain.

## License

MIT
