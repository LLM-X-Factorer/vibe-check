"use client";

import { useCallback, useState } from "react";

const VIBEID_URL = "https://vibeid.dev";

function isWeChat() {
  if (typeof navigator === "undefined") return false;
  return /MicroMessenger/i.test(navigator.userAgent);
}

export default function VibeIdLink() {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isWeChat()) return; // 非微信环境，正常跳转

      e.preventDefault();
      navigator.clipboard.writeText(VIBEID_URL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    },
    []
  );

  return (
    <a
      href={VIBEID_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="w-full text-center px-4 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors block"
    >
      {copied ? "已复制链接，请在浏览器中打开 ✓" : "查看完整报告 →"}
    </a>
  );
}
