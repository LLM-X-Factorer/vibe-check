import Link from "next/link";
import { personalityTypes } from "@/data/types";

// 按冲击力递减排列，开头三连暴击：存在感焦虑 → 破坏性冲动 → 自知但不改
const marqueeTypes = [
  "human-usb",       // 🔌 人形 USB
  "rm-rf",           // 💣 删库预备役
  "tech-debt",       // 🖨️ 技术债打印机
  "impostor",        // 🎭 冒名顶替 2.0
  "tab-tab",         // ⌨️ Tab 键工程师
  "security-hole",   // 🔓 漏洞艺术家
  "vibe-debugger",   // 🔥 Vibe Debugger
  "cyber-foreman",   // 👷 赛博监工
  "prompt-novelist", // 📝 提示词小说家
  "ship-fast",       // 🚢 先发后改
  "ancient-coder",   // 🏺 古法编程师
  "translator",      // 🌐 需求翻译官
];

function MarqueeContent() {
  return (
    <>
      {marqueeTypes.map((id) => {
        const t = personalityTypes[id];
        return (
          <span
            key={id}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border border-white/10 bg-white/5 whitespace-nowrap shrink-0"
            style={{ color: t.color }}
          >
            <span className="text-base">{t.emoji}</span>
            {t.name}
          </span>
        );
      })}
    </>
  );
}

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      {/* Hero */}
      <div className="text-center max-w-lg mx-auto">
        <p className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-4">
          DevBug Personality Test
        </p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
          你是哪种
          <span className="text-red-500"> Bug</span>？
        </h1>
        <p className="text-lg text-neutral-400 mb-2">
          10 道题，1 分钟，测出你在 AI 时代的真实人格。
        </p>
        <p className="text-sm text-neutral-600 mb-8">
          16 种 Vibe Coding 人格 · 无需注册 · 结果可能过于真实
        </p>

        <Link
          href="/quiz"
          className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-neutral-200 transition-colors"
        >
          开始测试 →
        </Link>
      </div>

      {/* Marquee - 冲击力排列，无限滚动 */}
      <div className="mt-14 w-screen overflow-hidden marquee-mask">
        <div className="marquee-track flex gap-3">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      {/* Footer */}
      <p className="mt-14 text-xs text-neutral-700 text-center">
        纯娱乐，非专业测评 · 灵感来自 Vibe Coding 时代的集体焦虑
      </p>
    </main>
  );
}
