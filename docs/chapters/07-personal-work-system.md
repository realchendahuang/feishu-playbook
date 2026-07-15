---
title: ## 7. 搭一套个人工作系统
---

<script setup>
import { Activity, BookOpen, Bot, Boxes, Brain, Calendar, CheckCircle2, ClipboardList, Cloud, Code, Database, Eye, FileCode, FileText, FileType, FolderTree, Gauge, GitBranch, Globe, Layers, ListChecks, Lock, Network, Newspaper, Plug, RefreshCw, Rocket, Route, Scale, Server, ShieldCheck, Target, Terminal, TrendingUp, Users, Workflow, Zap } from '@lucide/vue'
</script>

# 7. 搭一套个人工作系统 {#_7-个人工作系统}

## <Database class="cat-icon" /> 从四张表开始 {#四张核心表}

### Projects

| 字段 | 说明 |
|---|---|
| project_id | 稳定主键 |
| 项目名称、目标 | 人能直接理解的结果 |
| 状态 | 规划中、进行中、阻塞、完成、归档 |
| 下一步行动 | 当前最重要的动作 |
| 负责人、截止日期 | 承诺归属 |
| 健康状态 | 绿、黄、红 |
| 相关文档 | 项目 Wiki 或主文档 |
| source_of_truth | Base、Git 或外部系统 |

### Actions

| 字段 | 说明 |
|---|---|
| action_id | 稳定主键 |
| 标题、负责人、截止日期 | 行动本身 |
| 所属项目 | 与 Projects 关联 |
| 状态 | 候选、已确认、进行中、完成、取消 |
| 来源类型、source_id | 追溯与幂等 |
| idempotency_key | 重复写入检查 |

### Inbox

| 字段 | 说明 |
|---|---|
| item_id | 收件项主键 |
| 类型 | 消息、会议、文档、信号、人工 |
| 摘要与来源 | 快速判断入口 |
| 处理建议 | 归档、转任务、转项目、等待 |
| 状态 | 待处理、已安排、已归档 |

### Agent Runs

| 字段 | 说明 |
|---|---|
| run_id、skill_name | 运行身份 |
| trigger_type、trigger_id | 从哪里触发 |
| actor、identity | 谁发起、用什么身份 |
| planned_writes | 计划写入 |
| actual_writes | 实际写入 |
| status、error_type | 结果与错误类型 |
| api_calls、ai_cost | 用量与成本 |
| result_links | 文档、任务、记录链接 |

## <Eye class="cat-icon" /> 视图跟着工作节奏走 {#核心视图}

- **今天**：今天到期、今天安排、今天等待；
- **本周重点**：高优先级项目与行动；
- **待确认**：AI 候选、缺负责人、缺日期、资料冲突；
- **阻塞**：等待外部输入或超过承诺时间；
- **待处理运行**：Agent 错误、配额、权限、写后验证异常；
- **归档**：完成项目和历史记录。

## <FolderTree class="cat-icon" /> Wiki 提供稳定入口 {#知识库目录}

```text
工作系统/
├── 00 使用说明
├── 10 项目
├── 20 领域知识
├── 30 决策记录
├── 40 流程与 Skill
├── 50 周报与复盘
└── 90 归档
```

Base 记录“现在是什么状态”，Wiki 解释“为什么这样做、怎样继续做”。项目首页链接到状态表，状态表也链接回项目文档。

## <Calendar class="cat-icon" /> 任务、日历和消息各管一件事 {#任务日历消息}

- 任务记录谁负责完成什么；
- 日历记录这件事何时真正占用时间；
- 消息负责提醒、确认和快速交互；
- 文档保存背景、方案和最终交付；
- Base 维护对象状态与队列。

## <Cloud class="cat-icon" /> 备份与可移植性 {#备份}

每周导出关键 Base、Wiki 目录和映射文件；每月抽查一次恢复。凭证、业务数据和运行日志分开备份。文档同步保存 token、revision、hash 和最后成功时间，数据库同步保存 cursor 与业务主键。
