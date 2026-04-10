import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBug 人格测试 | 你是哪种 Bug？",
  description:
    "10 道题，1 分钟，测出你的开发者真实人格。16 种 Bug 人格，总有一款是你。",
  openGraph: {
    title: "DevBug 人格测试 | 你是哪种 Bug？",
    description: "10 道题，1 分钟，测出你的开发者真实人格。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scanline">{children}</body>
    </html>
  );
}
