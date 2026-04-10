"use client";

import { useCallback, useState } from "react";
import QRCode from "qrcode";
import { PersonalityType } from "@/data/types";

const POSTER_W = 1080;
const POSTER_H = 1920;
const SITE_URL = "https://devbug.llmxfactor.cloud";

interface SharePosterProps {
  type: PersonalityType;
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (const char of text) {
    const test = current + char;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = char;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function drawPoster(type: PersonalityType): Promise<string> {
  const canvas = document.createElement("canvas");
  canvas.width = POSTER_W;
  canvas.height = POSTER_H;
  const ctx = canvas.getContext("2d")!;

  // Background
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, POSTER_W, POSTER_H);

  // Color gradient
  const grad = ctx.createRadialGradient(POSTER_W / 2, POSTER_H * 0.35, 0, POSTER_W / 2, POSTER_H * 0.35, POSTER_W * 0.8);
  grad.addColorStop(0, hexToRgba(type.color, 0.25));
  grad.addColorStop(1, "transparent");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, POSTER_W, POSTER_H);

  // Header
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = "500 28px monospace";
  ctx.textAlign = "left";
  ctx.fillText("DEVBUG PERSONALITY TEST", 80, 100);
  ctx.textAlign = "right";
  ctx.fillText("2026", POSTER_W - 80, 100);

  // Illustration
  const img = await loadImage(`/illustrations/${type.id}.webp`);
  if (img) {
    const imgSize = 360;
    const imgX = (POSTER_W - imgSize) / 2;
    const imgY = 180;
    ctx.save();
    roundRect(ctx, imgX, imgY, imgSize, imgSize, 40);
    ctx.clip();
    ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
    ctx.restore();
  }

  // Type Name
  ctx.textAlign = "center";
  ctx.fillStyle = type.color;
  ctx.font = "900 88px system-ui, sans-serif";
  ctx.fillText(type.name, POSTER_W / 2, 650);

  // Subtitle
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "400 32px monospace";
  ctx.fillText(type.subtitle, POSTER_W / 2, 710);

  // Description
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "400 40px system-ui, sans-serif";
  const lines = wrapText(ctx, type.description, POSTER_W - 200);
  let descY = 800;
  for (const line of lines) {
    ctx.fillText(line, POSTER_W / 2, descY);
    descY += 60;
  }

  // Traits
  const traitsY = descY + 40;
  const tagPadding = 24;
  const tagHeight = 56;
  const tagGap = 20;
  ctx.font = "500 30px system-ui, sans-serif";
  const tagWidths = type.traits.map((t) => ctx.measureText(t).width + tagPadding * 2);
  const totalTagWidth = tagWidths.reduce((a, b) => a + b, 0) + tagGap * (type.traits.length - 1);
  let tagX = (POSTER_W - totalTagWidth) / 2;

  for (let i = 0; i < type.traits.length; i++) {
    const w = tagWidths[i];
    ctx.strokeStyle = hexToRgba(type.color, 0.4);
    ctx.lineWidth = 2;
    ctx.fillStyle = hexToRgba(type.color, 0.1);
    roundRect(ctx, tagX, traitsY, w, tagHeight, 28);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = type.color;
    ctx.font = "500 30px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(type.traits[i], tagX + w / 2, traitsY + 38);
    tagX += w + tagGap;
  }

  // Divider
  const dividerY = traitsY + tagHeight + 80;
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(120, dividerY);
  ctx.lineTo(POSTER_W - 120, dividerY);
  ctx.stroke();

  // QR Code
  const qrY = dividerY + 60;
  const qrSize = 280;
  try {
    const qrDataUrl = await QRCode.toDataURL(SITE_URL, {
      width: qrSize * 2,
      margin: 1,
      color: { dark: "#ffffff", light: "#00000000" },
      errorCorrectionLevel: "M",
    });
    const qrImg = await loadImage(qrDataUrl);
    if (qrImg) {
      ctx.drawImage(qrImg, (POSTER_W - qrSize) / 2, qrY, qrSize, qrSize);
    }
  } catch {
    // QR fallback: show URL text
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "500 34px monospace";
    ctx.textAlign = "center";
    ctx.fillText("devbug.llmxfactor.cloud", POSTER_W / 2, qrY + 140);
  }

  // CTA below QR
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "400 32px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("扫码测试你的 Bug 人格", POSTER_W / 2, qrY + qrSize + 50);

  // Footer
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.font = "400 24px monospace";
  ctx.fillText("DevBug Personality Test · 2026", POSTER_W / 2, POSTER_H - 60);

  return canvas.toDataURL("image/png", 1);
}

export default function SharePoster({ type }: SharePosterProps) {
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const dataUrl = await drawPoster(type);
      setPosterUrl(dataUrl);
    } catch (err) {
      console.error("Poster generation failed:", err);
    } finally {
      setLoading(false);
    }
  }, [type, loading]);

  const handleDownload = useCallback(() => {
    if (!posterUrl) return;
    const a = document.createElement("a");
    a.href = posterUrl;
    a.download = `DevBug_${type.id}.png`;
    a.click();
  }, [posterUrl, type.id]);

  return (
    <>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="flex-1 text-center px-4 py-3 rounded-xl border font-bold text-sm transition-colors disabled:opacity-50"
        style={{
          borderColor: `${type.color}66`,
          color: type.color,
          backgroundColor: `${type.color}11`,
        }}
      >
        {loading ? "生成中..." : "保存分享图"}
      </button>

      {posterUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setPosterUrl(null)}
        >
          <p className="text-sm text-white/60 mb-3">长按图片保存 · 或点击下方按钮下载</p>
          <img
            src={posterUrl}
            alt={`${type.name} 分享海报`}
            className="max-h-[75vh] w-auto rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 flex gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); handleDownload(); }}
              className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm"
            >
              下载图片
            </button>
            <button
              onClick={() => setPosterUrl(null)}
              className="px-6 py-2.5 rounded-full border border-white/30 text-white/70 text-sm"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </>
  );
}
