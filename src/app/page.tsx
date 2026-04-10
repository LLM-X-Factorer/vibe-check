import Link from "next/link";
import { personalityTypes } from "@/data/types";

const showcaseTypes = ["rm-rf", "impostor", "stackoverflow", "3am", "refactorer", "force-push"];

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
          10 道题，1 分钟，测出你的开发者真实人格。
        </p>
        <p className="text-sm text-neutral-600 mb-8">
          16 种 Bug 人格 · 无需注册 · 结果可能过于真实
        </p>

        <Link
          href="/quiz"
          className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-neutral-200 transition-colors"
        >
          开始测试 →
        </Link>
      </div>

      {/* Showcase types */}
      <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-md mx-auto">
        {showcaseTypes.map((id) => {
          const t = personalityTypes[id];
          return (
            <span
              key={id}
              className="px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-800 bg-neutral-900/50"
              style={{ color: t.color }}
            >
              {t.emoji} {t.name}
            </span>
          );
        })}
        <span className="px-3 py-1.5 rounded-full text-sm text-neutral-600 border border-neutral-800">
          +10 more...
        </span>
      </div>

      {/* Footer */}
      <p className="mt-16 text-xs text-neutral-700 text-center">
        纯娱乐，非专业测评 · 灵感来自 MBTI 的反面
      </p>
    </main>
  );
}
