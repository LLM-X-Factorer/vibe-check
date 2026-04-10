import { notFound } from "next/navigation";
import Link from "next/link";
import { personalityTypes } from "@/data/types";
import ResultCard from "@/components/ResultCard";

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return Object.keys(personalityTypes).map((type) => ({ type }));
}

export async function generateMetadata({ params }: Props) {
  const { type: typeId } = await params;
  const type = personalityTypes[typeId];
  if (!type) return {};

  return {
    title: `${type.emoji} ${type.name} — DevBug 人格测试`,
    description: type.description,
    openGraph: {
      title: `我是「${type.name}」${type.emoji} — DevBug 人格测试`,
      description: type.description,
      images: [`/api/og?type=${typeId}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `我是「${type.name}」${type.emoji}`,
      description: type.description,
      images: [`/api/og?type=${typeId}`],
    },
  };
}

export default async function ResultPage({ params }: Props) {
  const { type: typeId } = await params;
  const type = personalityTypes[typeId];
  if (!type) notFound();

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* Result Card */}
      <ResultCard type={type} />

      {/* Actions */}
      <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-sm">
        {/* Share hint */}
        <p className="text-sm text-neutral-500 text-center">
          截图分享到朋友圈，看看你的朋友是哪种 Bug
        </p>

        {/* Buttons */}
        <div className="flex gap-3 w-full">
          <Link
            href="/quiz"
            className="flex-1 text-center px-4 py-3 rounded-xl border border-neutral-700 text-sm text-neutral-300 hover:bg-neutral-900 transition-colors"
          >
            再测一次
          </Link>
          <a
            href="https://vibeid.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors"
          >
            查看完整报告 →
          </a>
        </div>
      </div>

      {/* Type gallery hint */}
      <Link
        href="/"
        className="mt-8 text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
      >
        查看全部 16 种 Bug 人格
      </Link>
    </main>
  );
}
