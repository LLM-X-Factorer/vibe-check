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
    text: "你的代码报错了，第一反应是？",
    answers: [
      {
        text: "console.log 大法好，到处插",
        scores: { "3am": 2, coffee: 1, "ctrl-z": 1 },
      },
      {
        text: "复制错误信息，直奔 Stack Overflow",
        scores: { stackoverflow: 2, "copy-paste": 2 },
      },
      {
        text: "关掉终端，假装没看见",
        scores: { unread: 2, "rm-rf": 1, "npm-pray": 1 },
      },
      {
        text: "一定是框架的 bug，不是我的问题",
        scores: { "force-push": 2, interview: 1, architect: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "周五下午 5 点，PM 说「就加一个小功能」。你：",
    answers: [
      {
        text: "「好的」（心里已经在骂人了）",
        scores: { impostor: 2, unread: 1, coffee: 1 },
      },
      {
        text: "写了个半成品直接推上去，周一再说",
        scores: { "force-push": 2, "next-version": 2 },
      },
      {
        text: "开始重构整个模块，反正今晚没事",
        scores: { refactorer: 2, "3am": 1, architect: 1 },
      },
      {
        text: "已经在收拾书包了，假装没听见",
        scores: { "rm-rf": 2, unread: 2 },
      },
    ],
  },
  {
    id: 3,
    text: "你的 PR 挂了 5 天没人 review。你：",
    answers: [
      {
        text: "自己 approve 自己 merge",
        scores: { "force-push": 2, "copy-paste": 1, "rm-rf": 1 },
      },
      {
        text: "在群里 @ 所有人，附带一段长文解释",
        scores: { architect: 2, interview: 1, coffee: 1 },
      },
      {
        text: "默默关掉 PR，代码留在本地慢慢腐烂",
        scores: { unread: 2, impostor: 2 },
      },
      {
        text: "趁没人 review 把代码重写一遍",
        scores: { refactorer: 2, "ctrl-z": 1, todo: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "打开一个 6 个月前自己写的文件。感受是：",
    answers: [
      {
        text: "「这谁写的垃圾？」（git blame → 是自己）",
        scores: { "ctrl-z": 2, impostor: 2 },
      },
      {
        text: "完全看不懂，但能跑就绝对不碰",
        scores: { "copy-paste": 2, "next-version": 1, "npm-pray": 1 },
      },
      {
        text: "立刻开始重构，手已经按不住了",
        scores: { refactorer: 2, architect: 1, "ctrl-z": 1 },
      },
      {
        text: "加一行 // TODO: refactor this 然后关掉",
        scores: { todo: 2, unread: 1, "next-version": 1 },
      },
    ],
  },
  {
    id: 5,
    text: "新项目启动，你第一件事做什么？",
    answers: [
      {
        text: "花 3 天搭建「完美」的项目架构",
        scores: { architect: 2, refactorer: 1, todo: 1 },
      },
      {
        text: "直接开写，边写边想，能跑就行",
        scores: { "force-push": 2, "3am": 1, coffee: 1 },
      },
      {
        text: "先搜索有没有现成的可以「借鉴」",
        scores: { stackoverflow: 2, "copy-paste": 2 },
      },
      {
        text: "创建 repo，写了个 README，然后就没有然后了",
        scores: { todo: 2, "readme-blank": 1, "next-version": 1 },
      },
    ],
  },
  {
    id: 6,
    text: "线上出了 P0 事故，你的第一反应：",
    answers: [
      {
        text: "「不是我上次改的那块吧？」（是的）",
        scores: { "ctrl-z": 2, impostor: 1, "npm-pray": 1 },
      },
      {
        text: "先看看影响范围，影响不大就假装没看见",
        scores: { unread: 2, "npm-pray": 2 },
      },
      {
        text: "紧急 hotfix，但引入了两个新 bug",
        scores: { "force-push": 2, "next-version": 1, "ctrl-z": 1 },
      },
      {
        text: "在群里发「我看看」（然后去泡咖啡）",
        scores: { coffee: 2, architect: 1, "rm-rf": 1 },
      },
    ],
  },
  {
    id: 7,
    text: "你怎么学习新技术？",
    answers: [
      {
        text: "看完文档前 3 页就觉得自己会了",
        scores: { interview: 2, "force-push": 1, impostor: 1 },
      },
      {
        text: "找个视频教程，2 倍速看完",
        scores: { stackoverflow: 1, "copy-paste": 1, coffee: 2 },
      },
      {
        text: "等别人踩完坑，直接看总结",
        scores: { unread: 1, "npm-pray": 2, "copy-paste": 1 },
      },
      {
        text: "从 Hello World 到放弃，全程 3 天",
        scores: { "ctrl-z": 2, todo: 2 },
      },
    ],
  },
  {
    id: 8,
    text: "你的 node_modules：",
    answers: [
      {
        text: "有多大？不知道，也不敢看",
        scores: { "npm-pray": 2, unread: 1, "next-version": 1 },
      },
      {
        text: "刚删了，正在 npm install（第 3 次了）",
        scores: { "ctrl-z": 2, coffee: 1, "3am": 1 },
      },
      {
        text: "连同 node_modules 一起 push 到了 git",
        scores: { "force-push": 2, "readme-blank": 2 },
      },
      {
        text: "正在写一个工具来管理它（这是第 3 个了）",
        scores: { refactorer: 2, architect: 2 },
      },
    ],
  },
  {
    id: 9,
    text: "同事问你「这段代码是什么意思」。你：",
    answers: [
      {
        text: "「你看注释啊」（没有注释）",
        scores: { "readme-blank": 2, unread: 1, "force-push": 1 },
      },
      {
        text: "「这很简单的」（自己也忘了）",
        scores: { impostor: 2, "copy-paste": 1, interview: 1 },
      },
      {
        text: "开始长篇大论讲设计理念，停不下来",
        scores: { architect: 2, interview: 2 },
      },
      {
        text: "「别碰这块，碰了就炸」",
        scores: { "rm-rf": 2, "next-version": 1, "npm-pray": 1 },
      },
    ],
  },
  {
    id: 10,
    text: "如果你的职业生涯是一条 git commit message：",
    answers: [
      {
        text: "fix: 临时修复（已经临时了 3 年）",
        scores: { "next-version": 2, todo: 1, "copy-paste": 1 },
      },
      {
        text: "feat: 不知道干嘛的但是能跑",
        scores: { "npm-pray": 2, "force-push": 1, stackoverflow: 1 },
      },
      {
        text: "refactor: 第 47 次重构，这次一定",
        scores: { refactorer: 2, "ctrl-z": 2 },
      },
      {
        text: "chore: 更新简历",
        scores: { "rm-rf": 2, impostor: 1, "3am": 1 },
      },
    ],
  },
];
