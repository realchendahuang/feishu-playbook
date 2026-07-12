---
title: 飞书 Playbook
description: 从日常协作到 AI Agent，按真实任务搭建飞书工作系统的中文实战手册。
---

<script setup>
import { Activity, BookOpen, Bot, Boxes, Brain, Calendar, CheckCircle2, ClipboardList, Cloud, Code, Database, Eye, FileCode, FileText, FileType, FolderTree, Gauge, GitBranch, Globe, Layers, ListChecks, Lock, Network, Newspaper, Plug, RefreshCw, Rocket, Route, Scale, Server, ShieldCheck, Target, Terminal, TrendingUp, Users, Workflow, Zap } from '@lucide/vue'
</script>

<section class="frontpage">
  <p class="frontpage-kicker">飞书 Playbook · 2026 实战版</p>
  <h1 class="frontpage-title">从一件具体工作开始，把飞书真正用起来</h1>
  <p class="frontpage-subtitle">先用飞书整理信息、任务和时间，再把 AI、自动化与 Agent 接进来。这份手册按真实任务组织：每天怎么开始、会议怎样落成行动、项目资料怎样沉淀、团队流程怎样运行、开发者怎样接入 CLI 与 OpenAPI。</p>
  <div class="frontpage-rule">
    <span><strong>今天就能用</strong><br>简报、会议、日程、知识</span>
    <span><strong>一周搭起来</strong><br>Base、自动化、个人系统</span>
    <span><strong>继续接入 AI</strong><br>aily、CLI、MCP、Agent</span>
    <span><strong>长期跑得稳</strong><br>权限、审计、配额、备份</span>
  </div>
</section>

<div class="quick-grid">
  <a href="#_1-先从你的任务开始"><div class="card-icon"><Target /></div><div class="card-body"><strong>我想先把飞书用顺</strong><span>按普通用户、个人开发者、团队负责人和 Agent 开发者选择路线。</span></div></a>
  <a href="#15-分钟起步"><div class="card-icon"><Rocket /></div><div class="card-body"><strong>我想今天就开始</strong><span>用 15 分钟搭一套每日简报，或把一场会议变成行动清单。</span></div></a>
  <a href="#_2-飞书能力地图"><div class="card-icon"><Layers /></div><div class="card-body"><strong>我想知道各模块怎么分工</strong><span>消息、文档、Wiki、Base、任务、日历、妙记、AI 各自放什么。</span></div></a>
  <a href="#_3-工具怎么选"><div class="card-icon"><Terminal /></div><div class="card-body"><strong>我想接入 AI 和自动化</strong><span>内置 AI、Base 自动化、aily、CLI、MCP、OpenAPI 的选择顺序。</span></div></a>
  <a href="#_4-六套个人工作流"><div class="card-icon"><Calendar /></div><div class="card-body"><strong>我想照着场景搭</strong><span>简报、会议、日程、CRM、项目记忆、Markdown 发布。</span></div></a>
  <a href="#_5-ai-与业务工作流"><div class="card-icon"><Brain /></div><div class="card-body"><strong>我想把 AI 放进业务</strong><span>多维表格 AI、aily、审批、OKR 和妙搭应用。</span></div></a>
  <a href="#_6-开发者工作流"><div class="card-icon"><Code /></div><div class="card-body"><strong>我想开发机器人或 Agent</strong><span>Coding Agent、事件订阅、信号管道、数据库与 Base 协同。</span></div></a>
  <a href="#_9-团队上线与长期运行"><div class="card-icon"><ShieldCheck /></div><div class="card-body"><strong>我想让团队稳定使用</strong><span>权限、确认、幂等、审计、配额、备份与复盘。</span></div></a>
</div>

## 1. 先从你的任务开始 {#_1-先从你的任务开始}

飞书的价值来自一条很朴素的链路：消息里出现信息，文档保存上下文，多维表格承接状态，任务明确行动，日历锁定时间，AI 和自动化处理重复步骤。先把其中一条链路跑通，使用习惯会自然长出来。

### <Users class="cat-icon" /> 按你的身份选择路线 {#按身份选择路线}

| 你现在的角色 | 先读 | 第一套成果 | 下一步 |
|---|---|---|---|
| 普通飞书用户 | 15 分钟起步、六套个人工作流 | 每日简报或会议行动清单 | 项目记忆、个人 CRM |
| 个人开发者 | 工具怎么选、开发者工作流 | CLI 连接日历、任务、文档 | 事件机器人、Markdown 发布 |
| 团队负责人 | AI 与业务工作流、个人工作系统 | 一张业务 Base 和一条自动化 | 权限、指标、运行复盘 |
| Agent 开发者 | CLI、MCP、OpenAPI、Skill 工程 | 一个可验证的读写 Skill | 事件订阅、多用户工作台 |

### <Rocket class="cat-icon" /> 15 分钟起步 {#15-分钟起步}

第一次使用，选一个每天都会发生、结果容易检查的任务。每日简报和会议到行动都很合适。

#### 路线 A：每日工作简报

准备三个入口：

1. 飞书日历里放当天真实安排；
2. 飞书任务里放已经承诺的行动；
3. 建一篇《每日简报》文档，固定四个栏目。

```markdown
## 今天的时间安排

## 最重要的三件事

## 等待他人的事项

## 今天结束前要确认的结果
```

每天早上读取日历和未完成任务，把内容整理进这四个栏目。先人工执行三天，再决定是否交给飞书 AI、aily 或 CLI 自动生成。

#### 路线 B：会议到行动

一场会议结束后，只整理四类内容：

| 类型 | 放在哪里 | 例子 |
|---|---|---|
| 已确认结论 | 会议纪要或项目 Wiki | 7 月采用新版定价 |
| 行动项 | 飞书任务 | 小王周五前更新报价页 |
| 待确认问题 | Base 的待确认视图 | 合同生效日等待法务确认 |
| 下一次时间承诺 | 日历 | 下周二复盘数据 |

这套结构能让会议从“大家听过了”变成“有人负责、时间明确、结果可查”。

### <Target class="cat-icon" /> 选择第一套工作流的四个问题 {#选择第一套工作流}

给候选场景各打 1—5 分：

1. **出现频率**：一周会发生几次？
2. **信息是否清楚**：输入能否稳定拿到？
3. **结果是否可检查**：完成后能否回读状态或链接？
4. **节省的沟通**：能否减少查找、转述和重复确认？

优先选择高频、输入清楚、结果可检查的场景。日程简报、会议行动、项目收件箱和内容选题通常会排在前面。

### <Globe class="cat-icon" /> 飞书在整套系统里的位置 {#飞书的位置}

飞书最适合承接人需要查看、判断、协作和确认的工作状态：

```text
外部信息 / 本地文件 / 业务数据库
              ↓
        AI 提取与整理候选
              ↓
  飞书文档、Base、任务、日历、消息
              ↓
       人确认、协作、继续执行
              ↓
       结果回写与经验沉淀
```

高频原始日志、复杂查询和长期模型缓存进入 SQLite、PostgreSQL 或对象存储；飞书保留对人有意义的候选、状态、证据和结果。这样既能发挥飞书的协作体验，也能让数据规模保持清楚。

## 2. 飞书能力地图 {#_2-飞书能力地图}

### <Layers class="cat-icon" /> 每个模块只承担一种主要职责 {#模块分工}

| 模块 | 主要职责 | 适合放什么 | 一个判断标准 |
|---|---|---|---|
| 消息与卡片 | 提醒、确认、短交互 | 摘要、异常、按钮、进度 | 读完后会产生一个动作 |
| 文档 | 解释和交付 | 方案、纪要、报告、成稿 | 内容需要连续阅读 |
| 知识库 | 稳定入口和目录 | SOP、项目首页、制度、手册 | 团队会反复查找 |
| 多维表格 | 对象、状态和关系 | 项目、客户、候选、运行记录 | 需要筛选、分组和更新状态 |
| 任务 | 明确行动 | 负责人、截止时间、完成状态 | 有人需要完成它 |
| 日历 | 时间承诺 | 会议、跟进、深度工作 | 需要占用真实时间 |
| 妙记 | 会议原始输入 | 逐字稿、章节、总结、待办 | 需要回到原始发言 |
| 审批 | 正式授权动作 | 请假、采购、报销、发布审批 | 有明确流程与审批人 |
| OKR | 目标与进展 | Objective、KR、对齐、进展 | 需要持续回看结果 |
| 飞书 AI / aily | 理解、生成与主动协助 | 问答、总结、知识检索、Agent | 输入需要语言理解 |
| 妙搭 Apps | 小型业务应用 | 表单、工具、门户、全栈应用 | 用户需要独立界面 |

### <Database class="cat-icon" /> 多维表格已经是一层业务系统 {#base-业务系统}

当前多维表格的能力已经覆盖数据表、视图、表单、仪表盘、工作流、集成、AI 字段和精细权限。官方产品页还提供 AI 生成公式、AI 侧边栏、仪表盘 AI 分析、工作流 AI Agent 节点等入口。[官方资料][base-product]

从用户角度看，可以把 Base 分成四层：

1. **数据层**：一条记录代表一个真实对象；
2. **视图层**：每个角色只看到自己需要处理的部分；
3. **流程层**：状态变化触发提醒、同步和 AI 处理；
4. **分析层**：仪表盘呈现趋势、积压和结果。

一张“内容选题表”可以同时拥有编辑视图、待审核视图、发布日历、数据仪表盘和 AI 摘要字段。数据只维护一次，各角色通过不同视图工作。

### <Brain class="cat-icon" /> 飞书 AI 有三种使用层次 {#飞书-ai-层次}

#### 第一层：个人直接使用

在文档、知识问答、妙记和多维表格里完成总结、解释、提取和生成。这一层配置最少，适合先验证任务是否真的值得交给 AI。

#### 第二层：把 AI 放进业务流程

用多维表格 AI 字段批量处理记录，用工作流 AI 节点在状态变化时生成内容或做判断，用 aily 建立有知识、技能和记忆的智能伙伴。

#### 第三层：连接外部 Agent

用官方 CLI、MCP、OpenAPI 或官方插件连接 Codex、Claude Code、OpenClaw 和自建服务。这个层次适合跨系统执行、事件驱动和长期运行。

### <Brain class="cat-icon" /> aily 适合什么 {#aily-适合什么}

飞书 aily 当前同时提供个人智能伙伴和企业级 Agent 平台。官方强调主动办公、技能库、个性化记忆、飞书消息与文档连接，以及智能客服、智能带教、智能工单等企业场景。[官方资料][aily]

它最适合两类需求：

- 希望在飞书内直接获得一个懂企业知识、能持续协助的智能伙伴；
- 希望用可视化方式搭建面向业务用户的 Agent，减少自建聊天入口和权限接入工作。

### <FileType class="cat-icon" /> 妙搭把“做个工具”放进飞书生态 {#妙搭}

官方 CLI 的 `lark-apps` Skill 已覆盖妙搭应用的创建、HTML 托管、本地全栈开发、云端 AI 生成、插件能力、日志、Trace、指标和访问范围。[Skill 文档][apps-skill]

三条常用路径：

| 需求 | 路径 |
|---|---|
| 发布一个静态页面或小工具 | HTML 托管 |
| 做带登录、数据库和多人协作的应用 | 本地全栈 |
| 用对话让 AI 生成应用 | 云端会话 |

## 3. 工具怎么选 {#_3-工具怎么选}

### <Terminal class="cat-icon" /> 从配置最少的方式开始 {#工具选择顺序}

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

### <Terminal class="cat-icon" /> 官方 CLI：个人开发者的主入口 {#cli-快速开始}

截至 2026 年 7 月 13 日，`@larksuite/cli` 最新 npm 版本为 `1.0.68`。官方 README 列出 200+ 命令、18 个业务域和 26 个 Agent Skills，覆盖消息、文档、Base、Sheets、Slides、日历、邮件、任务、会议、妙记、审批、OKR、Markdown 和妙搭 Apps。[官方仓库][official-cli]

#### 安装与登录

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

#### 三层命令系统

| 层级 | 适合什么 | 例子 |
|---|---|---|
| Shortcut | 高频任务和 Agent 调用 | `lark-cli calendar +agenda` |
| API Command | 与 OpenAPI 资源一一对应 | `lark-cli calendar calendars list` |
| Raw API | 覆盖更完整的开放接口 | `lark-cli api GET /open-apis/calendar/v4/calendars` |

日常工作优先使用 Shortcut。需要特定字段时进入 API Command，遇到新接口或长尾能力时使用 Raw API。

#### 用户身份与应用身份

| 身份 | 适合 | 典型资源 |
|---|---|---|
| `--as user` | 代表当前用户完成工作 | 个人日历、私人文档、审批、OKR、妙记 |
| `--as bot` | 代表应用持续运行 | 群通知、事件消费者、团队自动化 |

权限来自开放平台 scope、租户管理员审批和资源本身的访问权。CLI 沿用飞书开放平台的安全模型，调用会进入相应审计链路。[安全说明][security]

### <Plug class="cat-icon" /> MCP：让支持 MCP 的客户端直接调用飞书 {#mcp}

飞书官方 OpenAPI MCP 适合 Cursor、Claude 等支持 MCP 的客户端。它把开放平台接口包装成工具，并支持应用身份与用户身份。官方仓库当前仍标记为 Beta。[官方仓库][official-mcp]

用户身份适合读取个人文档、日历和消息；应用身份适合团队机器人和后台服务。配置时显式选择 `user_access_token`，能让资源访问边界更清楚。

MCP 的当前能力边界也值得写进设计：文件上传下载和云文档直接编辑仍有专门限制，涉及这些任务时，官方 CLI 的文档、Drive 与 Markdown Skills 提供了更完整的操作路径。

### <Server class="cat-icon" /> OpenAPI 与事件订阅：长期服务的底座 {#openapi-事件}

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

### <Gauge class="cat-icon" /> 基础版的现实边界 {#基础版边界}

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

## 4. 六套个人工作流 {#_4-六套个人工作流}

### <Gauge class="cat-icon" /> 每日工作简报 {#每日工作简报}

你会得到一份每天可执行的工作入口，内容直接对应时间、任务和收工前的结果检查。

#### 这样搭

```text
读取今日日历
→ 读取未完成任务
→ 找出今天到期、逾期和等待事项
→ 按时间承诺与优先级整理
→ 写入个人文档或发送给自己
→ 晚上回填完成结果
```

推荐输出：

```markdown
## 今天已经占用的时间
- 10:00 产品评审
- 15:30 客户沟通

## 今天最重要的三件事
1. 完成报价页并发给客户
2. 确认新版数据口径
3. 处理评审后的三个修改项

## 等待与风险
- 合同日期等待法务确认

## 收工前检查
- 报价页是否已发送
- 数据口径是否写入项目 Wiki
```

#### 做完看三个结果

- 早上整理时间控制在 3 分钟内；
- 简报里的行动可以回到任务或项目；
- 晚上能明确判断当天是否完成关键结果。

### <FileText class="cat-icon" /> 会议到行动 {#会议到行动}

会议资料通常包含事实、意见、承诺和待确认信息。好的流程会把它们分开处理。

#### 这样搭

```text
读取妙记逐字稿与会议材料
→ 提取结论、行动、待确认问题
→ 为行动匹配负责人和日期
→ 在卡片或文档中展示候选
→ 用户确认
→ 创建任务并更新项目状态
→ 返回任务和纪要链接
```

妙记的 AI 总结适合快速浏览；需要重新提炼时，优先读取逐字稿，再独立判断争论、转折和真实承诺。官方 `lark-minutes` Skill 已支持搜索、详情、总结、待办、章节、逐字稿、上传音视频和说话人替换。[Skill 文档][minutes-skill]

#### 行动项的最小字段

| 字段 | 含义 |
|---|---|
| 标题 | 一个清楚的动作 |
| 负责人 | 真实飞书用户 ID |
| 截止日期 | 明确日期或待确认状态 |
| 来源 | 妙记、文档或消息链接 |
| 会议 ID | 幂等与追溯 |
| 状态 | 候选、已确认、进行中、完成 |

推荐幂等键：

```text
meeting_id + normalized_action_text + owner_id
```

#### 写入分级

| 动作 | 推荐处理 |
|---|---|
| 读取妙记 | 直接执行 |
| 生成候选行动 | 直接执行并展示来源 |
| 创建自己的任务 | 展示后确认，或执行后报告 |
| 给他人分配任务 | 明确确认负责人和日期 |
| 向群组发送总结 | 确认收件范围 |

### <Calendar class="cat-icon" /> 日程安排助手 {#日程安排助手}

日程安排的难点在于联系人、忙闲、时区、工作时间、缓冲和会议材料需要一起处理。

```text
识别参会人
→ 查询目标日期与时区
→ 读取多人忙闲
→ 应用工作时间和缓冲规则
→ 返回 2—3 个候选
→ 用户选择
→ 创建日程
→ 回读时间、参会人和 RSVP
```

一套实用的个人规则：

```yaml
timezone: Asia/Shanghai
working_hours: "09:30-18:30"
meeting_buffer_minutes: 15
default_duration_minutes: 45
lunch_protect: true
max_meetings_per_day: 6
external_invite_requires_confirmation: true
```

安排完成后，返回绝对日期、时区、参会人、会议室和日程链接。任务截止日继续放在任务里，需要真正占用时间时再创建日历时间块。

### <Users class="cat-icon" /> 个人 CRM {#个人-crm}

个人 CRM 主要回答四个问题：最近和谁有过重要互动、我答应了什么、下一次什么时候联系、判断依据来自哪里。

#### 两张表就能开始

**Contacts**

| 字段 | 用途 |
|---|---|
| 姓名、组织、角色 | 基础身份 |
| 重要程度 | 人工判断 |
| 最后互动时间 | 从互动表聚合 |
| 下一次跟进 | 计划时间 |
| 状态 | 活跃、低频、暂停、归档 |
| 备注文档 | 长期上下文 |

**Interactions**

| 字段 | 用途 |
|---|---|
| 时间、类型 | 互动发生在何时、通过什么渠道 |
| 摘要 | 对本次互动的短记录 |
| 来源链接 | 邮件、会议、消息或文档 |
| 双方承诺 | 后续行动 |
| 是否需跟进 | 进入候选队列 |
| source_id | 去重与回查 |

每次同步只处理新互动，重要程度支持人工覆盖，发送消息和会议邀请由用户确认。Base 保留最近窗口和关系状态，长期全文可归档到外部数据库。

### <BookOpen class="cat-icon" /> 项目记忆与带引用问答 {#项目记忆}

项目知识库的核心是让每条结论都带着来源，让读者可以随时回到原始资料。

```text
项目名称/
├── 00 项目总览
├── 10 目标与范围
├── 20 需求与方案
├── 30 决策记录
├── 40 行动与承诺
├── 50 会议与沟通
├── 60 来源清单
└── 90 待确认问题
```

每条关键结论保存文档链接、消息链接或会议时间戳。资料之间出现差异时，并列展示各自来源，并把最终口径放入待确认队列。

问答输出可以固定为：

```markdown
## 当前回答

## 已确认事实
- 结论与来源链接

## 仍在确认
- 差异与待确认负责人

## 下一步
- 一个可以执行的动作
```

### <FileType class="cat-icon" /> Markdown 发布、同步与备份 {#markdown-发布}

开发者常同时维护 Git、Markdown、飞书文档和 Wiki。先确定唯一主源，再设计同步。

| 模式 | 主源 | 适合 |
|---|---|---|
| Local-first | Git / Markdown | 代码、版本控制、自动发布 |
| Feishu-first | 飞书文档 / Wiki | 团队共同编辑 |
| One-way mirror | 一侧主源 | 展示、备份与归档 |

官方 CLI 现在提供 Drive 原生 Markdown 的创建、读取、局部 patch、覆盖和版本 diff；把 Markdown 导入在线文档时使用 Drive import。[Skill 文档][markdown-skill]

映射文件至少保存：

```yaml
documents:
  - local_path: docs/guide.md
    feishu_type: wiki
    feishu_token: wikcn_xxx
    last_synced_hash: sha256:...
    last_synced_revision: "42"
    sync_direction: local_to_feishu
    conflict_policy: ask
```

同步时先比较 hash 与 revision，局部改动使用精准编辑，两侧都有变化时进入人工确认。每次运行记录文档 ID、版本、结果和备份位置。

## 5. AI 与业务工作流 {#_5-ai-与业务工作流}

### <Database class="cat-icon" /> 用 Base AI 批量处理业务记录 {#base-ai}

Base AI 最适合“一行一个对象”的任务，例如给客户反馈分类、从简历提取字段、生成商品描述、给选题补充角度、总结工单和识别风险。

一条稳定流程：

```text
新记录进入表格
→ 完整性检查
→ AI 字段生成候选结果
→ 规则校验格式
→ 人在待审核视图确认
→ 状态进入已采用
→ 下游自动化继续执行
```

为 AI 结果保留四个字段：

| 字段 | 作用 |
|---|---|
| AI 结果 | 模型输出 |
| AI 状态 | 待处理、待审核、已采用、需重做 |
| 输入版本 | 判断源数据是否变化 |
| 人工修订 | 保存最终采用结果 |

AI 字段按生成单元格消耗额度，刷新也会产生新的消耗。批量运行前先在少量记录上验证提示词、输出格式和单次成本。[额度说明][base-ai-quota]

### <Workflow class="cat-icon" /> 用工作流连接状态变化 {#base-工作流}

工作流适合明确的状态机：当记录进入某个状态，就执行固定动作。

```text
内容状态 = 待审核
→ 通知审核人
→ 审核通过
→ 生成发布任务
→ 写入发布日期
→ 发布后更新数据
```

每条工作流写清楚五件事：触发条件、读取字段、执行动作、结束状态、异常去向。异常记录统一进入“待处理”视图，负责人能直接看到原因和下一步。

### <Bot class="cat-icon" /> 用 aily 建一个懂业务的智能伙伴 {#aily-工作流}

aily 的价值来自知识、技能和记忆的组合。可以从一个窄场景开始：

| 智能伙伴 | 连接内容 | 第一项技能 |
|---|---|---|
| 项目助手 | 项目 Wiki、会议、任务 | 回答项目状态并给来源 |
| 客户成功助手 | 产品文档、工单、客户记录 | 整理问题并生成跟进建议 |
| 内容助手 | 选题库、风格指南、历史文章 | 从候选选题生成大纲 |
| 新人助手 | 制度、SOP、组织信息 | 回答入职问题并导航到原文 |

先让它准确回答一个领域，再逐步增加主动提醒和写操作。每项写操作对应一个明确 Skill，并把目标对象、影响范围和结果链接展示给用户。

### <CheckCircle2 class="cat-icon" /> 把审批和任务分开 {#审批工作流}

审批负责正式授权，任务负责后续执行。请假、采购、报销、合同、发布审批都属于审批对象；完成审批后的准备、交付和跟进进入任务。

```text
搜索审批定义
→ 读取表单与流程
→ 填写并展示提交内容
→ 发起审批
→ 监听审批状态
→ 审批通过后创建后续任务
```

官方 `lark-approval` Skill 已覆盖发起、查询待办、同意、拒绝、转交、加签、退回、催办、撤回和抄送。审批动作默认使用用户身份，并在执行前展示单据与意见。[Skill 文档][approval-skill]

### <TrendingUp class="cat-icon" /> 让 OKR 回到每周工作 {#okr-工作流}

OKR 真正有用的时刻，是团队能从本周行动回到目标进展。

一套轻量流程：

1. 周一读取当前周期的 Objective 与 KR；
2. 把本周任务关联到对应 KR；
3. 周五汇总已完成任务、项目数据和风险；
4. 生成进展候选；
5. 负责人确认后更新 OKR 进展记录。

官方 CLI 已支持周期、目标、关键结果、对齐关系、指标和进展记录。[Skill 文档][okr-skill] 进展说明保留数据来源，让“完成 60%”能够回到任务、项目或业务指标。

### <FileCode class="cat-icon" /> 用妙搭交付一个真正可用的界面 {#妙搭工作流}

当 Base 视图已经承载了稳定流程，下一步可以把高频操作做成更简单的应用界面：客户提交表单、活动报名、内部工具、查询门户、项目驾驶舱。

```text
先用 Base 验证数据模型和流程
→ 明确用户最常做的 1—3 个动作
→ 在妙搭生成或开发界面
→ 连接飞书能力与外部服务
→ 发布到限定范围
→ 查看日志、错误率、延迟和访问量
```

这种顺序能让应用界面建立在已经验证的业务流程上。

## 6. 开发者工作流 {#_6-开发者工作流}

### <Code class="cat-icon" /> 把 Coding Agent 接回飞书 {#coding-agent}

飞书适合成为移动端入口和团队协作界面，代码执行继续发生在受控工作区。

```text
一个群 = 一个项目
一个话题 = 一个独立工作会话
一个评论线程 = 一个具体审阅任务
```

```text
群里提出需求
→ Agent 返回计划卡片
→ 用户确认范围
→ Agent 在绑定工作区执行
→ 飞书卡片持续显示进度
→ 生成 PR、文档或部署结果
→ 项目状态回写 Base
```

官方 OpenClaw 插件已经支持消息、文档、Base、Sheets、日历、任务、交互卡片、流式回复和群级权限策略。[官方仓库][official-openclaw] Lark Coding Agent Bridge 等项目也展示了群、话题、session 和本地工作区的映射方式。[项目仓库][coding-bridge]

团队使用时，为群、用户和工作目录设置白名单；推送、部署、外发和生产动作由用户确认；每个项目绑定独立凭证与运行记录。

### <Zap class="cat-icon" /> 事件驱动机器人 {#事件机器人}

事件订阅适合实时处理新消息、妙记生成、任务变化、Base 状态、审批结果和成员变更。

```text
飞书事件
→ 校验 EventKey 与 schema
→ 按事件类型进入对应 Skill
→ 读取业务状态
→ 执行动作
→ 回读结果
→ 记录 Agent Run
```

官方 `lark-event` Skill 的当前命令：

```bash
# 查看可订阅事件
lark-cli event list --json

# 读取事件字段结构
lark-cli event schema im.message.receive_v1 --json

# 取一个样本事件
lark-cli event consume im.message.receive_v1 \
  --max-events 1 \
  --timeout 30s \
  --as bot
```

一个消费者处理一种 EventKey，输出保持单一结构。长期进程使用 ready marker 判断就绪，通过 stdin EOF 或 SIGTERM 完成优雅退出，错误按结构化 `type`、`subtype` 和 `hint` 分支处理。[Skill 文档][event-skill]

### <Newspaper class="cat-icon" /> 行业信号与内容管道 {#行业信号}

一条可信的内容管道会把原始证据、事件、选题和成稿分开。

| 表 | 保存什么 |
|---|---|
| Sources | 信源、类型、抓取方式、健康状态 |
| Raw Signals | URL、标题、时间、内容指纹、原始摘要 |
| Events | 合并后的事件、证据状态、官方来源 |
| Topics | 选题、角度、受众、状态 |
| Content | 稿件、发布地址、效果数据 |
| Runs | 每轮抓取、错误、成本、结果 |

```text
采集
→ 标准化 URL 与时间
→ 内容指纹去重
→ 按事件聚类
→ 找到官方事实源
→ 人工判断选题
→ AI 生成大纲与草稿
→ 文档协作
→ 发布与复盘
```

原始抓取结果进入数据库，Base 同步候选事件和证据摘要。这样能控制 API 调用，也能让人工判断集中在最有价值的记录上。[官方案例][hotspot-case]

### <Database class="cat-icon" /> 数据库与 Base 协同 {#数据库-base}

| 条件 | 主承载层 |
|---|---|
| 高频写入、事务、复杂 JOIN、全文检索 | SQLite / PostgreSQL |
| 人工查看、移动访问、状态机、团队协作 | Base |
| 原始模型中间结果和长期日志 | 数据库或对象存储 |
| 候选、摘要、审批状态和最终结果 | Base |

推荐用 `updated_at` 或 cursor 做增量同步，用批量 API 写入，用稳定业务主键保持两侧映射。人的判断在 Base 完成后，再把结果回写数据库。

### <Network class="cat-icon" /> 多用户 Agent 工作台 {#多用户工作台}

当个人工具扩展到团队，需要增加用户身份、权限检查、隔离 HOME、执行记录和场景模板。

```text
飞书聊天 / Web 界面
→ 解析用户与租户
→ 检查场景权限
→ 展示执行计划
→ 用户确认
→ 在隔离环境执行
→ 写回飞书
→ 保存运行与审计记录
```

每个场景模板只开放一组明确能力，每个用户使用自己的授权，待处理运行进入告警视图，管理员拥有统一停用入口。

## 7. 搭一套个人工作系统 {#_7-个人工作系统}

### <Database class="cat-icon" /> 从四张表开始 {#四张核心表}

#### Projects

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

#### Actions

| 字段 | 说明 |
|---|---|
| action_id | 稳定主键 |
| 标题、负责人、截止日期 | 行动本身 |
| 所属项目 | 与 Projects 关联 |
| 状态 | 候选、已确认、进行中、完成、取消 |
| 来源类型、source_id | 追溯与幂等 |
| idempotency_key | 重复写入检查 |

#### Inbox

| 字段 | 说明 |
|---|---|
| item_id | 收件项主键 |
| 类型 | 消息、会议、文档、信号、人工 |
| 摘要与来源 | 快速判断入口 |
| 处理建议 | 归档、转任务、转项目、等待 |
| 状态 | 待处理、已安排、已归档 |

#### Agent Runs

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

### <Eye class="cat-icon" /> 视图跟着工作节奏走 {#核心视图}

- **今天**：今天到期、今天安排、今天等待；
- **本周重点**：高优先级项目与行动；
- **待确认**：AI 候选、缺负责人、缺日期、资料冲突；
- **阻塞**：等待外部输入或超过承诺时间；
- **待处理运行**：Agent 错误、配额、权限、写后验证异常；
- **归档**：完成项目和历史记录。

### <FolderTree class="cat-icon" /> Wiki 提供稳定入口 {#知识库目录}

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

### <Calendar class="cat-icon" /> 任务、日历和消息各管一件事 {#任务日历消息}

- 任务记录谁负责完成什么；
- 日历记录这件事何时真正占用时间；
- 消息负责提醒、确认和快速交互；
- 文档保存背景、方案和最终交付；
- Base 维护对象状态与队列。

### <Cloud class="cat-icon" /> 备份与可移植性 {#备份}

每周导出关键 Base、Wiki 目录和映射文件；每月抽查一次恢复。凭证、业务数据和运行日志分开备份。文档同步保存 token、revision、hash 和最后成功时间，数据库同步保存 cursor 与业务主键。

## 8. Agent 与 Skill 工程 {#_8-agent-与-skill-工程}

### <Workflow class="cat-icon" /> 一份稳定的工作合同 {#工作合同}

```text
Read → Plan → Confirm → Write → Verify → Report
```

1. **Read**：读取真实对象、权限、结构和当前状态；
2. **Plan**：列出将要创建、更新或发送的内容；
3. **Confirm**：在影响他人、外发、删除、审批和生产动作前获取确认；
4. **Write**：执行最小、明确、可追溯的写入；
5. **Verify**：回读 ID、字段、成员、时间和状态；
6. **Report**：返回结果链接、变更摘要、用量和待处理事项。

### <FileCode class="cat-icon" /> 一个 Skill 至少写清楚这些内容 {#skill-模板}

```markdown
# Meeting to Actions

## 目标
把会议资料整理成结论、行动和待确认问题。

## 触发条件
用户提供妙记、会议链接或要求整理会议。

## 输入
- minute_token
- project_id
- 目标收件范围

## 读取
- 妙记逐字稿
- 项目当前任务
- 负责人和日期信息

## 计划
- 创建哪些候选行动
- 更新哪些项目字段
- 发送到哪里

## 确认
- 给他人分配任务
- 群发会议总结
- 创建外部参与者日程

## 幂等
meeting_id + action_hash + owner_id

## 验证
回读任务、负责人、日期和项目状态。

## 输出
结果摘要、链接、待确认问题和运行记录。
```

### <ListChecks class="cat-icon" /> 四类 Skill {#skill-类型}

| 类型 | 负责什么 | 例子 |
|---|---|---|
| 原子 Skill | 一个业务域的稳定操作 | 文档、Base、任务、日历 |
| 工作流 Skill | 跨域完成一个结果 | 会议到行动、每日简报 |
| 策略 Skill | 判断、分级和选择 | 选题评分、关系跟进 |
| 调度与事件 Skill | 触发、路由和运行 | 事件消费者、定时任务 |

原子 Skill 保持小而清楚，工作流 Skill 组合多个原子能力，策略 Skill 输出理由与证据，事件 Skill 关注生命周期和可恢复性。

### <Database class="cat-icon" /> Base 操作的工程要点 {#base-工程}

- 先用 URL 或标题解析得到真实 `base_token`、`table_id`、`view_id` 和 `record_id`；
- 写入、公式、lookup、工作流和仪表盘前读取真实结构；
- 查询使用服务端过滤、排序和分页；
- 批量写入使用稳定业务主键和幂等键；
- 删除、字段更新和角色更新走确认门；
- 工作流异常进入统一待处理视图；
- 用户身份与应用身份按资源权限选择。

官方 `lark-base` Skill 当前还提供 Base 资源目录、表单、Dashboard、Workflow 和 Role 的操作入口。[Skill 文档][base-skill]

### <FileText class="cat-icon" /> 文档操作的工程要点 {#文档工程}

- 保存文档 token、Block ID、revision 和来源映射；
- 局部更新使用精准块编辑；
- 整篇覆盖展示目标文档与影响范围；
- 图片、附件和内部链接单独处理；
- 正式知识与候选草稿分开；
- 更新后回读标题、关键段落和版本。

### <Zap class="cat-icon" /> 事件消费者的工程要点 {#事件工程}

- 先读取 EventKey 列表和 schema；
- 一个进程处理一种事件结构；
- 用事件 ID 或业务键去重；
- bounded run 使用 `--max-events` 或 `--timeout`；
- 长期进程监听 ready marker；
- 退出使用 stdin EOF 或 SIGTERM；
- 结构化错误进入重试、补权限或人工处理分支。

### <GitBranch class="cat-icon" /> 从 CLI 原型走向在线服务 {#cli-到服务}

第一版先用 CLI 验证命令、scope、身份和数据结构。流程连续稳定运行后，把业务规则、确认策略、幂等键和验证步骤迁移到在线服务。

```text
CLI 原型
→ 固定输入输出
→ 写成 Skill
→ 增加测试和运行记录
→ 接入事件或队列
→ 迁移到 OpenAPI 服务
```

## 9. 团队上线与长期运行 {#_9-团队上线与长期运行}

### <Lock class="cat-icon" /> 权限按身份和动作拆分 {#权限}

推荐准备三类身份：

| 身份 | 权限 | 场景 |
|---|---|---|
| 只读用户身份 | 日历、任务、文档读取 | 简报、检索、分析 |
| 个人读写身份 | 个人任务、日历、文档写入 | 个人助手 |
| 团队应用身份 | 指定群、Base、Wiki 和事件 | 团队自动化 |

每个 Agent 只获得完成职责所需的资源和动作。生产凭证、开发凭证和个人授权分开保存，定期复核 scope、群白名单、资源权限和离职成员访问。

### <ShieldCheck class="cat-icon" /> 关键动作由人掌握 {#确认分级}

| 等级 | 动作 | 处理方式 |
|---|---|---|
| 低 | 读取、搜索、生成草稿 | 直接执行 |
| 中 | 更新自己的任务、文档和记录 | 展示摘要或执行后报告 |
| 高 | 给他人分配、群发、审批、外部邀请 | 执行前确认 |
| 很高 | 删除、生产发布、权限调整、批量外发 | 展示完整计划并明确确认 |

提示词注入防护也采用同样思路：外部内容作为数据读取，系统规则、权限和工具调用保持独立；敏感动作由固定策略与用户确认共同约束。

### <RefreshCw class="cat-icon" /> 可靠性来自可重放和可检查 {#可靠性}

每条工作流准备：

- 稳定主键与幂等键；
- 分页和增量游标；
- 明确的超时与重试次数；
- 写入前计划与写入后回读；
- 待处理运行视图；
- 原始输入、候选输出和最终结果；
- 可以人工接管的恢复步骤。

重试按错误类型处理：限流进入退避，权限错误进入授权提示，参数错误回到结构读取，业务冲突进入人工确认。

### <Gauge class="cat-icon" /> 配额与成本按工作结果管理 {#配额成本}

为每条工作流记录：

| 指标 | 作用 |
|---|---|
| API 调用数 | 判断批量、缓存和增量是否有效 |
| AI 额度 | 了解模型与工具消耗 |
| 成功运行数 | 计算稳定性 |
| 人工确认数 | 观察流程摩擦 |
| 有效结果数 | 对应真实业务产出 |
| 单个有效结果成本 | 比较不同方案 |

飞书 AI 当前使用统一 AI 额度，覆盖知识问答、妙记、aily、多维表格 AI、文档 AI、妙搭、飞书项目 AI 等已正式发布功能。管理员可以在 AI 使用管理中查看用量、设置月度上限和告警。[额度说明][ai-quota]

### <Activity class="cat-icon" /> 每周看系统，每月看结果 {#复盘}

#### 每周

- 待处理运行是否清零；
- 是否出现重复任务或重复记录；
- 哪些确认长期卡住；
- 哪些字段经常由人工修订；
- 哪条工作流最常被使用。

#### 每月

- 自动化实际节省了多少沟通；
- 哪些流程已经稳定，可以继续扩展；
- 哪些流程可以缩短或合并；
- API 与 AI 成本对应了多少有效结果；
- 权限、备份和恢复是否完成抽查。

### <ClipboardList class="cat-icon" /> 上线检查 {#上线检查}

- [ ] 目标用户和具体任务已经写清楚；
- [ ] 输入、输出和权威来源已经确定；
- [ ] 用户身份与应用身份已经分开；
- [ ] 写操作拥有计划、确认和验证；
- [ ] 幂等键、分页和增量游标已经测试；
- [ ] 异常记录拥有负责人和处理入口；
- [ ] API 与 AI 用量拥有上限和告警；
- [ ] 日志中保存资源 ID、状态和结果链接；
- [ ] 备份可以恢复；
- [ ] 管理员拥有停用入口。

## 10. 30 天落地路线 {#_10-30-天落地路线}

### <Rocket class="cat-icon" /> 第 1 周：让信息有固定去处 {#第1周}

1. 选择每日简报或会议到行动；
2. 建立 Projects、Actions、Inbox、Agent Runs；
3. 整理 Wiki 目录；
4. 人工跑三次完整流程；
5. 记录最耗时间的步骤。

本周完成标准：你能从一个入口看到今天的承诺、项目下一步和待确认事项。

### <Route class="cat-icon" /> 第 2 周：接入自动化 {#第2周}

1. 用 Base 自动化处理状态提醒；
2. 为候选记录增加 AI 字段；
3. 给写操作增加确认与回读；
4. 增加幂等键和待处理视图；
5. 统计每次运行的 API 与 AI 用量。

本周完成标准：至少一条流程可以重复运行，重复执行会更新已有对象。

### <BookOpen class="cat-icon" /> 第 3 周：连接知识与 Agent {#第3周}

1. 建立带来源的项目记忆；
2. 安装官方 CLI；
3. 先读取日历、任务、妙记和文档；
4. 写一个窄场景 Skill；
5. 把结果返回飞书链接。

本周完成标准：Agent 能读取真实上下文，完成一次经过确认和验证的写入。

### <Scale class="cat-icon" /> 第 4 周：准备长期运行 {#第4周}

1. 接入事件订阅或定时任务；
2. 设置权限、白名单、限额和告警；
3. 完成备份与恢复抽查；
4. 汇总运行成功率、人工修订和有效结果；
5. 选择下一条值得扩展的工作流。

本周完成标准：系统拥有运行记录、异常入口、成本视图和人工接管路径。

## 11. 参考项目与资料 {#_11-参考项目与资料}

### <Boxes class="cat-icon" /> 优先研究官方底座 {#官方底座}

1. [larksuite/cli：官方 CLI](https://github.com/larksuite/cli)
2. [lark-base Skill](https://github.com/larksuite/cli/blob/main/skills/lark-base/SKILL.md)
3. [lark-doc Skill](https://github.com/larksuite/cli/blob/main/skills/lark-doc/SKILL.md)
4. [lark-event Skill](https://github.com/larksuite/cli/blob/main/skills/lark-event/SKILL.md)
5. [lark-minutes Skill](https://github.com/larksuite/cli/blob/main/skills/lark-minutes/SKILL.md)
6. [lark-approval Skill](https://github.com/larksuite/cli/blob/main/skills/lark-approval/SKILL.md)
7. [lark-okr Skill](https://github.com/larksuite/cli/blob/main/skills/lark-okr/SKILL.md)
8. [lark-apps Skill](https://github.com/larksuite/cli/blob/main/skills/lark-apps/SKILL.md)
9. [飞书官方 OpenAPI MCP](https://github.com/larksuite/lark-openapi-mcp)
10. [飞书官方 OpenClaw 插件](https://github.com/larksuite/openclaw-lark)

### <Network class="cat-icon" /> 再看完整工作流项目 {#社区项目}

1. [飞书 AI 效率系统：22 个工作流 Skill](https://github.com/liangdabiao/lark-workflow-feishu-cli)
2. [Document Buddy：带引用的项目记忆](https://github.com/Hanzhi0807/document-buddy)
3. [Lark Coding Agent Bridge](https://github.com/zarazhangrui/lark-coding-agent-bridge)
4. [Feishu CLI Web](https://github.com/jingsongliujing/Feishu-CLI-Web)
5. [feishu-docx：文档与 Markdown 导入导出](https://github.com/leemysw/feishu-docx)
6. [Auto-JobHunter：SQLite + Base 看板](https://github.com/jolie-z/Auto-JobHunter)
7. [MealOptima：Base + 外部 AI 工作流](https://github.com/sylvanding/mealoptima)

研究项目时重点看五件事：身份与权限、数据主源、写操作确认、幂等与恢复、结果怎样回到用户工作流。

### <BookOpen class="cat-icon" /> 官方产品与额度资料 {#官方资料}

1. [飞书版本对比](https://www.feishu.cn/service)
2. [飞书多维表格](https://www.feishu.cn/product/base)
3. [飞书 aily](https://aily.feishu.cn/universal/landing)
4. [飞书开放平台文档](https://open.feishu.cn/document/home/index)
5. [飞书 CLI 能力与安全说明](https://www.feishu.cn/content/article/7641519075810069471)
6. [自建应用 API 调用量上限](https://open.feishu.cn/document/platform-notices/platform-updates-/custom-app-api-call-limit)
7. [飞书 AI 版本权益与额度规则](https://www.feishu.cn/hc/zh-CN/articles/629644238181)
8. [多维表格 AI 功能额度说明](https://www.feishu.cn/hc/zh-CN/articles/698366954342)

## 结语

真正好用的飞书系统，通常从一件每天都会发生的小事开始。先让信息有固定入口，让行动有负责人和时间，让结论能回到来源；再把 AI 放进重复步骤，把 Agent 放进跨系统执行，把权限、审计和成本补齐。

```text
信息进入
→ 形成候选
→ 人完成关键判断
→ 动作写入真实系统
→ 结果被验证
→ 经验沉淀成 Skill
```

当这条链路稳定运行，飞书会自然成为人、业务和 Agent 共同使用的工作界面。

---

[official-cli]: https://github.com/larksuite/cli "larksuite/cli 官方仓库"
[official-mcp]: https://github.com/larksuite/lark-openapi-mcp "飞书官方 OpenAPI MCP"
[official-openclaw]: https://github.com/larksuite/openclaw-lark "飞书官方 OpenClaw 插件"
[security]: https://www.feishu.cn/content/article/7641519075810069471 "飞书 CLI 能力与安全说明"
[base-product]: https://www.feishu.cn/product/base "飞书多维表格产品页"
[aily]: https://aily.feishu.cn/universal/landing "飞书 aily"
[apps-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-apps/SKILL.md "lark-apps Skill"
[minutes-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-minutes/SKILL.md "lark-minutes Skill"
[markdown-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-markdown/SKILL.md "lark-markdown Skill"
[approval-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-approval/SKILL.md "lark-approval Skill"
[okr-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-okr/SKILL.md "lark-okr Skill"
[base-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-base/SKILL.md "lark-base Skill"
[event-skill]: https://github.com/larksuite/cli/blob/main/skills/lark-event/SKILL.md "lark-event Skill"
[coding-bridge]: https://github.com/zarazhangrui/lark-coding-agent-bridge "Lark Coding Agent Bridge"
[hotspot-case]: https://www.feishu.cn/content/article/7647368333007997909 "AI 热点追踪自动化案例"
[edition]: https://www.feishu.cn/hc/zh-CN/articles/255316448091 "飞书商业版和企业版功能介绍"
[api-quota]: https://open.feishu.cn/document/platform-notices/platform-updates-/custom-app-api-call-limit "自建应用 API 调用量上限"
[ai-quota]: https://www.feishu.cn/hc/zh-CN/articles/629644238181 "飞书 AI 版本权益与额度消耗规则"
[base-ai-quota]: https://www.feishu.cn/hc/zh-CN/articles/698366954342 "多维表格 AI 功能额度说明"
