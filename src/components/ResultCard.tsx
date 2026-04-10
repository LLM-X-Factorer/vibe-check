import Image from "next/image";
import { PersonalityType } from "@/data/types";

interface ResultCardProps {
  type: PersonalityType;
}

export default function ResultCard({ type }: ResultCardProps) {
  return (
    <div
      id="result-card"
      className={`relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-gradient-to-b ${type.bgGradient} border border-white/10 card-glow`}
      style={{ "--glow-color": `${type.color}33` } as React.CSSProperties}
    >
      {/* Header bar */}
      <div className="px-5 pt-4 pb-2 flex justify-between items-center">
        <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
          DevBug Personality Test
        </span>
        <span className="text-[10px] font-mono text-white/30">
          2026
        </span>
      </div>

      {/* Main content */}
      <div className="px-6 py-6 text-center">
        {/* Illustration */}
        <div className="mx-auto mb-3 w-36 h-36 relative emoji-bounce">
          <Image
            src={`/illustrations/${type.id}.webp`}
            alt={type.emoji}
            width={144}
            height={144}
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        {/* Type name */}
        <h2
          className="text-3xl font-black mb-1 fade-up"
          style={{ color: type.color }}
        >
          {type.name}
        </h2>
        <p className="text-sm font-mono text-white/50 mb-5 fade-up-delay-1">
          {type.subtitle}
        </p>

        {/* Description */}
        <p className="text-base text-white/80 leading-relaxed mb-5 fade-up-delay-2">
          {type.description}
        </p>

        {/* Traits */}
        <div className="flex justify-center gap-2 flex-wrap fade-up-delay-3">
          {type.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                borderColor: `${type.color}44`,
                color: type.color,
                backgroundColor: `${type.color}11`,
              }}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with QR */}
      <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
        <div>
          <p className="text-[11px] text-white/40 leading-tight">扫码测试你的 Bug 人格</p>
          <p className="text-[10px] text-white/20 font-mono mt-0.5">devbug.llmxfactor.cloud</p>
        </div>
        <Image
          src="/qr.png"
          alt="扫码测试"
          width={56}
          height={56}
          className="opacity-60"
        />
      </div>
    </div>
  );
}
