import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../docs/index.md', import.meta.url);
const readmePath = new URL('../README.md', import.meta.url);

const readmeIntro = `# 飞书 Playbook

用飞书搭建个人与团队工作系统的中文实战手册：每日简报、会议行动、项目记忆、内容发布、Coding Agent、事件机器人与混合数据架构。

在线阅读：[chendahuang.com/playbook/feishu](https://chendahuang.com/playbook/feishu/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[飞书 Playbook] --> B[飞书在工作系统中的位置]
  A --> C[工具组合与选择顺序]
  A --> D[场景筛选方法]
  A --> E[个人工作流]
  A --> F[开发者工作流]
  A --> G[数据、知识与执行系统]
  A --> H[Skill 工程]
  A --> I[参考项目与借鉴重点]
  A --> J[稳定运行准则]
  A --> K[十二条设计准则]
  A --> L[运营与治理]
  A --> M[30 天落地计划]
\`\`\`
`;

const toc = `## 目录

- [1. 飞书在工作系统中的位置](#_1-飞书在工作系统中的位置)
- [2. 工具组合与选择顺序](#_2-工具组合与选择顺序)
- [3. 场景筛选方法](#_3-场景筛选方法)
- [4. 个人工作流](#_4-个人工作流)
- [5. 开发者工作流](#_5-开发者工作流)
- [6. 数据、知识与执行系统](#_6-数据知识与执行系统)
- [7. Skill 工程](#_7-skill-工程)
- [8. 参考项目与借鉴重点](#_8-参考项目与借鉴重点)
- [9. 稳定运行准则](#_9-稳定运行准则)
- [10. 十二条设计准则](#_10-十二条设计准则)
- [11. 运营与治理](#_11-运营与治理)
- [12. 30 天落地计划](#_12-30-天落地计划)
- [13. 检查清单](#_13-检查清单)
- [14. 附录](#_14-附录)
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
