import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../docs/index.md', import.meta.url);
const readmePath = new URL('../README.md', import.meta.url);

const readmeIntro = `# 飞书 Playbook

从一件具体工作开始，把飞书真正用起来。按普通用户、个人开发者、团队负责人和 Agent 开发者的真实任务，搭建简报、会议、知识、Base、AI、自动化与开放平台工作流。

在线阅读：[chendahuang.com/playbook/feishu](https://chendahuang.com/playbook/feishu/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[飞书 Playbook] --> B[从任务开始]
  A --> C[飞书能力地图]
  A --> D[工具选择]
  A --> E[个人工作流]
  A --> F[AI 与业务工作流]
  A --> G[开发者工作流]
  A --> H[个人工作系统]
  A --> I[Agent 与 Skill 工程]
  A --> J[团队上线与长期运行]
  A --> K[30 天落地路线]
\`\`\`
`;

const toc = `## 目录

- [1. 先从你的任务开始](#_1-先从你的任务开始)
- [2. 飞书能力地图](#_2-飞书能力地图)
- [3. 工具怎么选](#_3-工具怎么选)
- [4. 六套个人工作流](#_4-六套个人工作流)
- [5. AI 与业务工作流](#_5-ai-与业务工作流)
- [6. 开发者工作流](#_6-开发者工作流)
- [7. 搭一套个人工作系统](#_7-个人工作系统)
- [8. Agent 与 Skill 工程](#_8-agent-与-skill-工程)
- [9. 团队上线与长期运行](#_9-团队上线与长期运行)
- [10. 30 天落地路线](#_10-30-天落地路线)
- [11. 参考项目与资料](#_11-参考项目与资料)
`;

const source = await readFile(sourcePath, 'utf8');

// README 只保留正文内容，去掉 VitePress frontmatter、Vue import 和网页首屏。
const body = source
  .replace(/^---\n[\s\S]*?\n---\n+/, '')
  .replace(/<script setup>[\s\S]*?<\/script>\n+/g, '')
  .replace(/<section class="frontpage">[\s\S]*?<\/section>\n+/g, '')
  .replace(/<div class="quick-grid">[\s\S]*?<\/div>\n+/g, '')
  .replace(/^(#{3,4})\s+<[^>]+class="(?:cat|svc)-icon"[^>]*\/>\s+/gm, '$1 ')
  .replace(/[ \t]+\{#[^}]+}[ \t]*$/gm, '')
  .trim();

await writeFile(readmePath, `${readmeIntro}\n${toc}\n${body}\n`, 'utf8');
