import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../docs/index.md', import.meta.url);
const readmePath = new URL('../README.md', import.meta.url);

const readmeIntro = `# 飞书 Playbook

AI-First 飞书个人与开发者 Playbook —— 把飞书变成你和 Agent 的工作操作系统。

在线阅读：[chendahuang.com/playbook/feishu](https://chendahuang.com/playbook/feishu/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[AI-First 飞书 Playbook] --> B[重新理解飞书]
  A --> C[工具怎么选]
  A --> D[场景判断与优先级]
  A --> E[个人黄金场景]
  A --> F[开发者黄金场景]
  A --> G[系统设计]
  A --> H[Skill 工程]
  A --> I[项目拆解]
  A --> J[最佳实践]
  A --> K[反模式]
  A --> L[运营与治理]
  A --> M[30 天实施路线]
\`\`\`
`;

const toc = `## 目录

- [1. 重新理解飞书](#_1-重新理解飞书)
- [2. 工具怎么选](#_2-工具怎么选)
- [3. 场景判断与优先级](#_3-场景判断与优先级)
- [4. 个人黄金场景](#_4-个人黄金场景)
- [5. 开发者黄金场景](#_5-开发者黄金场景)
- [6. 系统设计](#_6-系统设计)
- [7. Skill 工程](#_7-skill-工程)
- [8. 项目拆解](#_8-项目拆解)
- [9. 最佳实践](#_9-最佳实践)
- [10. 反模式](#_10-反模式)
- [11. 运营与治理](#_11-运营与治理)
- [12. 30 天实施路线](#_12-30-天实施路线)
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