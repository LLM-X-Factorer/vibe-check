export interface Answer {
  text: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "AI 给你生成了一段你看不懂的代码，但能跑。你怎么做？",
    answers: [
      {
        text: "Tab 接受，不问为什么",
        scores: { "tab-tab": 2, "accept-all": 1, "ship-fast": 1 },
      },
      {
        text: "让 AI 给我解释一遍（然后还是没懂）",
        scores: { impostor: 2, "human-usb": 1, "cyber-foreman": 1 },
      },
      {
        text: "手动重写一遍（然后发现 AI 写得更好）",
        scores: { "ancient-coder": 2, todo: 1, "vibe-debugger": 1 },
      },
      {
        text: "删掉重新 prompt，直到我能看懂",
        scores: { "prompt-novelist": 2, "cursor-pm": 1, translator: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "你的 Cursor / Copilot 突然挂了，你的反应是？",
    answers: [
      {
        text: "陷入瘫痪，忘记怎么写 for 循环了",
        scores: { "tab-tab": 2, "human-usb": 2 },
      },
      {
        text: "终于可以证明我不需要 AI（然后偷偷用 ChatGPT）",
        scores: { "ancient-coder": 1, impostor: 2, "prompt-novelist": 1 },
      },
      {
        text: "翻出三年前的 Stack Overflow 收藏夹",
        scores: { todo: 1, "tech-debt": 1, "3am": 2 },
      },
      {
        text: "直接下班",
        scores: { "rm-rf": 2, "ship-fast": 1, "vibe-debugger": 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Code Review 时发现代码 95% 是 AI 生成的，你怎么看？",
    answers: [
      {
        text: "这就是我的代码，AI 只是我的手",
        scores: { "accept-all": 2, "ship-fast": 1, "tab-tab": 1 },
      },
      {
        text: "心虚地点了 Approve",
        scores: { impostor: 2, "accept-all": 1, "cyber-foreman": 1 },
      },
      {
        text: "认真 review 但其实也看不懂",
        scores: { "vibe-debugger": 2, "cursor-pm": 1, "human-usb": 1 },
      },
      {
        text: "等等，我的代码也是这样的",
        scores: { "tech-debt": 2, "prompt-novelist": 1, "tab-tab": 1 },
      },
    ],
  },
  {
    id: 4,
    text: "老板说「AI 时代不需要这么多程序员了」，你的反应？",
    answers: [
      {
        text: "默默打开招聘网站",
        scores: { "rm-rf": 2, impostor: 1, "3am": 1 },
      },
      {
        text: "「老板你试试让 AI 对接甲方」",
        scores: { translator: 2, "cyber-foreman": 1, "ancient-coder": 1 },
      },
      {
        text: "立刻学习 Prompt Engineering",
        scores: { "prompt-novelist": 2, "human-usb": 1, "cursor-pm": 1 },
      },
      {
        text: "打开 Cursor 演示自己的不可替代性",
        scores: { "tab-tab": 1, "ship-fast": 2, "accept-all": 1 },
      },
    ],
  },
  {
    id: 5,
    text: "你用 AI 写的项目上线后出了 bug，你怎么修？",
    answers: [
      {
        text: "把报错信息原封不动粘贴给 AI",
        scores: { "human-usb": 2, "tab-tab": 1, "accept-all": 1 },
      },
      {
        text: "让 AI 随机改改，改到不报错为止",
        scores: { "vibe-debugger": 2, "tech-debt": 1, "ship-fast": 1 },
      },
      {
        text: "回滚到上个版本假装没发生",
        scores: { "rm-rf": 1, "ship-fast": 1, todo: 2 },
      },
      {
        text: "终于开始认真读代码了",
        scores: { "ancient-coder": 2, impostor: 1, "cyber-foreman": 1 },
      },
    ],
  },
  {
    id: 6,
    text: "同事问你「这段代码是什么意思」。你：",
    answers: [
      {
        text: "「你问 Claude 啊，这是它写的」",
        scores: { "human-usb": 2, "cursor-pm": 2 },
      },
      {
        text: "「这很简单的」（让 AI 现场解释了一遍）",
        scores: { impostor: 2, "tab-tab": 1, "accept-all": 1 },
      },
      {
        text: "开始画架构图讲设计理念（虽然实现是 AI 做的）",
        scores: { "cyber-foreman": 2, translator: 1, "prompt-novelist": 1 },
      },
      {
        text: "「别碰这块，碰了就炸」",
        scores: { "security-hole": 2, "tech-debt": 1, "vibe-debugger": 1 },
      },
    ],
  },
  {
    id: 7,
    text: "面试被问「你最擅长什么编程语言？」你的真实答案是？",
    answers: [
      {
        text: "自然语言（中文 / 英文）",
        scores: { "prompt-novelist": 2, translator: 2 },
      },
      {
        text: "「看 AI 用什么我就擅长什么」",
        scores: { "tab-tab": 2, "accept-all": 1, "human-usb": 1 },
      },
      {
        text: "「全栈」（因为 AI 什么都能写）",
        scores: { "ship-fast": 2, "vibe-debugger": 1, "tech-debt": 1 },
      },
      {
        text: "其实我上次手写代码是三个月前了",
        scores: { "3am": 1, "ancient-coder": 1, impostor: 2 },
      },
    ],
  },
  {
    id: 8,
    text: "你的 Git 提交历史是什么画风？",
    answers: [
      {
        text: "全是 fix、update、wip",
        scores: { "ship-fast": 2, "tech-debt": 2 },
      },
      {
        text: "让 AI 写的完美 commit message",
        scores: { "cursor-pm": 2, "prompt-novelist": 1, "tab-tab": 1 },
      },
      {
        text: "一个巨大的 squash commit: feat: everything",
        scores: { "accept-all": 2, "vibe-debugger": 1, "rm-rf": 1 },
      },
      {
        text: "其实我一直在 main 上直推",
        scores: { "security-hole": 2, "ship-fast": 1, todo: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "你打开了一个没有 AI 辅助的老项目代码，感受是？",
    answers: [
      {
        text: "考古现场，居然有人手写了这些",
        scores: { "tab-tab": 1, "human-usb": 1, "cyber-foreman": 2 },
      },
      {
        text: "默默粘贴到 Claude 里让它解释",
        scores: { "prompt-novelist": 1, "human-usb": 2, "accept-all": 1 },
      },
      {
        text: "怀念那个纯真的年代",
        scores: { "ancient-coder": 2, "3am": 1, todo: 1 },
      },
      {
        text: "这代码虽然老，但至少没有安全漏洞",
        scores: { "security-hole": 2, "tech-debt": 1, "vibe-debugger": 1 },
      },
    ],
  },
  {
    id: 10,
    text: "你对「Vibe Coding」这个词的态度是？",
    answers: [
      {
        text: "这就是我的工作方式，有问题吗？",
        scores: { "accept-all": 2, "tab-tab": 1, "ship-fast": 1 },
      },
      {
        text: "我不 vibe code，我是「AI 增强型工程师」",
        scores: { translator: 2, "cursor-pm": 1, "cyber-foreman": 1 },
      },
      {
        text: "偷偷 vibe 但嘴上说自己不 vibe",
        scores: { impostor: 2, "3am": 1, "prompt-novelist": 1 },
      },
      {
        text: "反正老板看不懂代码，怎么说都行",
        scores: { "rm-rf": 1, "tech-debt": 1, "security-hole": 2 },
      },
    ],
  },
];
