export interface PersonalityType {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  description: string;
  traits: string[];
  color: string;
  bgGradient: string;
}

export const personalityTypes: Record<string, PersonalityType> = {
  // === 经典永恒型（4个）===
  "rm-rf": {
    id: "rm-rf",
    emoji: "💣",
    name: "删库预备役",
    subtitle: "rm -rf Reservist",
    description:
      "AI 时代了你还想着删库跑路，说明问题不在代码，在心态。离职信都让 Claude 写好了。",
    traits: ["压力山大", "一触即发", "离职倒计时"],
    color: "#FF3838",
    bgGradient: "from-red-900/80 to-red-950/90",
  },
  impostor: {
    id: "impostor",
    emoji: "🎭",
    name: "冒名顶替 2.0",
    subtitle: "Impostor Syndrome v2.0",
    description:
      "以前担心被发现不会写代码。现在担心被发现代码全是 AI 写的。焦虑升级了，但薪资没有。",
    traits: ["双重冒名", "AI 代笔", "表面从容"],
    color: "#F8B500",
    bgGradient: "from-yellow-900/80 to-stone-950/90",
  },
  "3am": {
    id: "3am",
    emoji: "🌙",
    name: "凌晨选手",
    subtitle: "3AM Vibe Coder",
    description:
      "白天摸鱼，凌晨跟 AI 结对编程到天亮。你的 commit 时间戳是同事的噩梦，AI 是你唯一的深夜搭子。",
    traits: ["夜行动物", "凌晨灵感", "AI 夜聊搭子"],
    color: "#5352ED",
    bgGradient: "from-indigo-900/80 to-indigo-950/90",
  },
  todo: {
    id: "todo",
    emoji: "📌",
    name: "TODO 收藏家",
    subtitle: "TODO Collector",
    description:
      "你让 AI 生成了一个完美的 TODO 列表，然后你把它收藏了。然后就没有然后了。",
    traits: ["规划大师", "执行为零", "AI 生成待办"],
    color: "#FFA502",
    bgGradient: "from-amber-900/80 to-amber-950/90",
  },

  // === Vibe Coding 时代新类型（12个）===
  "tab-tab": {
    id: "tab-tab",
    emoji: "⌨️",
    name: "Tab 键工程师",
    subtitle: "The Tab Acceptor",
    description:
      "你的编程就是 Tab-Tab-Tab-Enter。AI 写的代码你一行没看，但它能跑。你不理解代码，代码也不需要你理解。",
    traits: ["闭眼接受", "指尖芭蕾", "从不看 diff"],
    color: "#3B82F6",
    bgGradient: "from-blue-900/80 to-blue-950/90",
  },
  "prompt-novelist": {
    id: "prompt-novelist",
    emoji: "📝",
    name: "提示词小说家",
    subtitle: "Prompt Novelist",
    description:
      "你写给 AI 的提示词比最终代码还长。需求描述 3000 字，生成代码 30 行。你不是程序员，你是甲方。",
    traits: ["小作文大师", "需求翻译器", "甲方本方"],
    color: "#FB923C",
    bgGradient: "from-orange-900/80 to-orange-950/90",
  },
  "vibe-debugger": {
    id: "vibe-debugger",
    emoji: "🔥",
    name: "Vibe Debugger",
    subtitle: "Debug by Vibes",
    description:
      "Vibe coding 的时候：太爽了！Vibe debugging 的时候：这什么鬼？你制造的 bug 连 AI 都修不了。",
    traits: ["爽完就崩", "AI 也救不了", "玄学报错"],
    color: "#F43F5E",
    bgGradient: "from-rose-900/80 to-rose-950/90",
  },
  "cyber-foreman": {
    id: "cyber-foreman",
    emoji: "👷",
    name: "赛博监工",
    subtitle: "The AI Supervisor",
    description:
      "你不写代码了，你「监督」AI 写代码。Cursor 是你的工人，你是包工头。日常：看 AI 干活、点头、偶尔说「不对重来」。",
    traits: ["代码验收员", "赛博包工头", "只看不写"],
    color: "#FACC15",
    bgGradient: "from-yellow-900/80 to-yellow-950/90",
  },
  "ancient-coder": {
    id: "ancient-coder",
    emoji: "🏺",
    name: "古法编程师",
    subtitle: "Artisanal Coder",
    description:
      "你坚持手动写每一行代码，拒绝 AI 辅助。同事用 Cursor 十分钟搞定的，你写了三天——但你的代码有灵魂。",
    traits: ["非遗传承人", "手工匠人", "效率为零"],
    color: "#D97706",
    bgGradient: "from-amber-800/80 to-stone-950/90",
  },
  "accept-all": {
    id: "accept-all",
    emoji: "✅",
    name: "全部接受",
    subtitle: "Accept All Andy",
    description:
      "Accept All 是你按得最多的按钮。Diff？不存在的。Code review？AI 写的肯定没问题。直到生产环境炸了。",
    traits: ["从不审查", "盲目信任", "爆炸倒计时"],
    color: "#22C55E",
    bgGradient: "from-green-900/80 to-green-950/90",
  },
  "tech-debt": {
    id: "tech-debt",
    emoji: "🖨️",
    name: "技术债打印机",
    subtitle: "Debt Printer Go Brrr",
    description:
      "两个 vibe coder 能制造 50 个工程师的技术债。你就是其中之一。代码能跑，但没人敢碰，包括 AI。",
    traits: ["债台高筑", "能跑就行", "后人自求多福"],
    color: "#EC4899",
    bgGradient: "from-pink-900/80 to-pink-950/90",
  },
  "cursor-pm": {
    id: "cursor-pm",
    emoji: "💼",
    name: "Claude 的 PM",
    subtitle: "AI's Project Manager",
    description:
      "你从「写代码的人」变成「管 AI 写代码的人」。你开 standup、排 sprint、写 JIRA——给 Claude。",
    traits: ["降级管理", "AI 的甲方", "人形需求文档"],
    color: "#A855F7",
    bgGradient: "from-purple-900/80 to-purple-950/90",
  },
  "human-usb": {
    id: "human-usb",
    emoji: "🔌",
    name: "人形 USB",
    subtitle: "Human USB Drive",
    description:
      "你存在的意义是把需求插进 AI，把结果拔出来。你是人肉接口层。老板问你做了什么，你说「我 prompt 了」。",
    traits: ["需求搬运工", "接口层", "存在感为零"],
    color: "#06B6D4",
    bgGradient: "from-cyan-900/80 to-cyan-950/90",
  },
  "security-hole": {
    id: "security-hole",
    emoji: "🔓",
    name: "漏洞艺术家",
    subtitle: "Vulnerability Artist",
    description:
      "你 vibe code 出来的应用，安全研究员看了笑出声。API key 硬编码、SQL 注入、XSS 全家桶——你一个人就是 OWASP Top 10。",
    traits: ["安全灾难", "黑客狂喜", "渗透免费"],
    color: "#DC2626",
    bgGradient: "from-red-800/80 to-red-950/90",
  },
  "ship-fast": {
    id: "ship-fast",
    emoji: "🚢",
    name: "先发后改",
    subtitle: "Ship First Fix Never",
    description:
      "你的座右铭：先上线再说。Bug？那是 v2 的事。你的 Git 历史全是 fix、fix again、actually fix this time。",
    traits: ["快速交付", "永远在修", "上线即巅峰"],
    color: "#14B8A6",
    bgGradient: "from-teal-900/80 to-teal-950/90",
  },
  translator: {
    id: "translator",
    emoji: "🌐",
    name: "需求翻译官",
    subtitle: "The Translator",
    description:
      "你最大的技能是把老板的「我要一个像抖音但不是抖音的东西」翻译成 AI 能理解的 prompt。两边都觉得你没用。",
    traits: ["两头受气", "模糊翻译", "双重不被理解"],
    color: "#818CF8",
    bgGradient: "from-indigo-800/80 to-violet-950/90",
  },
};

export const typeIds = Object.keys(personalityTypes);
