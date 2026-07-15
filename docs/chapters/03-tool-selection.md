---
title: ## 3. 工具怎么选
---

<script setup>
import { Activity, BookOpen, Bot, Boxes, Brain, Calendar, CheckCircle2, ClipboardList, Cloud, Code, Database, Eye, FileCode, FileText, FileType, FolderTree, Gauge, GitBranch, Globe, Layers, ListChecks, Lock, Network, Newspaper, Plug, RefreshCw, Rocket, Route, Scale, Server, ShieldCheck, Target, Terminal, TrendingUp, Users, Workflow, Zap } from '@lucide/vue'
</script>

# 3. 工具怎么选 {#_3-工具怎么选}

## <Terminal class="cat-icon" /> 从配置最少的方式开始 {#工具选择顺序}

| 你的目标 | 首选工具 | 继续升级的条件 |
|---|---|---|
| 写作、总结、企业知识问答 | 飞书 AI | 需要固定流程时进入 aily 或 Skill |
| 一张表里的批量处理 | Base AI 字段 | 需要跨步骤时进入工作流 |
| 状态变化后的提醒与同步 | Base 自动化 / 工作流 | 需要复杂代码或外部系统时接 API |
| 在飞书里提供智能伙伴 | aily | 需要本地工具、代码仓库或自定义运行时时接 Agent |
| 让个人 Agent 操作飞书 | 官方 CLI | 需要标准 MCP 工具协议时使用 OpenAPI MCP |
| 给 OpenClaw 提供飞书入口 | 官方 OpenClaw 插件 | 需要自定义权限与业务逻辑时开发服务 |
| 构建长期在线的业务服务 | OpenAPI + 事件订阅 | 需要独立界面时配合妙搭或 Web 应用 |

这个顺序的核心是：先验证任务，再增加工程复杂度。一个人工可执行、结果清楚的流程，才值得继续自动化。

## <Terminal class="cat-icon" /> 官方 CLI：个人开发者的主入口 {#cli-快速开始}

截至 2026 年 7 月 13 日，`@larksuite/cli` 最新 npm 版本为 `1.0.68`。官方 README 列出 200+ 命令、18 个业务域和 26 个 Agent Skills，覆盖消息、文档、Base、Sheets、Slides、日历、邮件、任务、会议、妙记、审批、OKR、Markdown 和妙搭 Apps。[官方仓库][official-cli]

### 安装与登录

```bash
# 安装最新版 CLI 与 Skills
npx @larksuite/cli@latest install

# 创建或绑定飞书应用
lark-cli config init --new

# 按常用范围完成用户授权
lark-cli auth login --recommend

# 检查身份、应用和 scope
lark-cli auth status
```

第一次操作可以从三个只读命令开始：

```bash
lark-cli calendar +agenda --as user
lark-cli task +list --as user
lark-cli minutes +search --as user
```

### 三层命令系统

| 层级 | 适合什么 | 例子 |
|---|---|---|
| Shortcut | 高频任务和 Agent 调用 | `lark-cli calendar +agenda` |
| API Command | 与 OpenAPI 资源一一对应 | `lark-cli calendar calendars list` |
| Raw API | 覆盖更完整的开放接口 | `lark-cli api GET /open-apis/calendar/v4/calendars` |

日常工作优先使用 Shortcut。需要特定字段时进入 API Command，遇到新接口或长尾能力时使用 Raw API。

### 用户身份与应用身份

| 身份 | 适合 | 典型资源 |
|---|---|---|
| `--as user` | 代表当前用户完成工作 | 个人日历、私人文档、审批、OKR、妙记 |
| `--as bot` | 代表应用持续运行 | 群通知、事件消费者、团队自动化 |

权限来自开放平台 scope、租户管理员审批和资源本身的访问权。CLI 沿用飞书开放平台的安全模型，调用会进入相应审计链路。[安全说明][security]

## <Plug class="cat-icon" /> MCP：让支持 MCP 的客户端直接调用飞书 {#mcp}

飞书官方 OpenAPI MCP 适合 Cursor、Claude 等支持 MCP 的客户端。它把开放平台接口包装成工具，并支持应用身份与用户身份。官方仓库当前仍标记为 Beta。[官方仓库][official-mcp]

用户身份适合读取个人文档、日历和消息；应用身份适合团队机器人和后台服务。配置时显式选择 `user_access_token`，能让资源访问边界更清楚。

MCP 的当前能力边界也值得写进设计：文件上传下载和云文档直接编辑仍有专门限制，涉及这些任务时，官方 CLI 的文档、Drive 与 Markdown Skills 提供了更完整的操作路径。

## <Server class="cat-icon" /> OpenAPI 与事件订阅：长期服务的底座 {#openapi-事件}

当流程需要 7×24 小时运行、多用户隔离、队列、重试、业务数据库和监控时，直接使用 OpenAPI 与事件订阅会更清晰。

典型结构：

```text
飞书事件 / 定时任务
→ 接入层校验身份与事件
→ 业务服务读取数据库
→ Agent 或规则生成候选动作
→ 用户确认关键写入
→ OpenAPI 执行
→ 回读结果并记录审计
```

## <Gauge class="cat-icon" /> 基础版的现实边界 {#基础版边界}

截至 2026 年 7 月 13 日，可以确认的基础版信息如下：

| 项目 | 当前信息 | 使用建议 |
|---|---|---|
| 成员 | 支持 100 用户 | 足够个人和小团队验证 |
| 云文档存储 | 认证前 15 GB，认证后 100 GB | 文档保存正式知识与成果 |
| Base | 单表 2,000 行 | 原始高频数据进入数据库 |
| 自动化 | 每月 200 次运行 | 用在关键状态变化 |
| 自建应用 API | 常规上限 10,000 次/月 | 使用批量、缓存和增量同步 |
| 飞书 AI | 企业共享统一 AI 额度 | 在后台设置限额与告警 |

2026 年 6 月曾有基础版 API 100 万次的限时额度，常规说明仍为每月 10,000 次。正式上线前，管理员可以直接在权益数据与开放平台调用量页面核对当月显示值。[调用量说明][api-quota] [版本说明][edition]
