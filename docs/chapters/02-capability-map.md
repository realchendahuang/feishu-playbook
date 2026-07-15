---
title: ## 2. 飞书能力地图
---

<script setup>
import { Activity, BookOpen, Bot, Boxes, Brain, Calendar, CheckCircle2, ClipboardList, Cloud, Code, Database, Eye, FileCode, FileText, FileType, FolderTree, Gauge, GitBranch, Globe, Layers, ListChecks, Lock, Network, Newspaper, Plug, RefreshCw, Rocket, Route, Scale, Server, ShieldCheck, Target, Terminal, TrendingUp, Users, Workflow, Zap } from '@lucide/vue'
</script>

# 2. 飞书能力地图 {#_2-飞书能力地图}

## <Layers class="cat-icon" /> 每个模块只承担一种主要职责 {#模块分工}

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

## <Database class="cat-icon" /> 多维表格已经是一层业务系统 {#base-业务系统}

当前多维表格的能力已经覆盖数据表、视图、表单、仪表盘、工作流、集成、AI 字段和精细权限。官方产品页还提供 AI 生成公式、AI 侧边栏、仪表盘 AI 分析、工作流 AI Agent 节点等入口。[官方资料][base-product]

从用户角度看，可以把 Base 分成四层：

1. **数据层**：一条记录代表一个真实对象；
2. **视图层**：每个角色只看到自己需要处理的部分；
3. **流程层**：状态变化触发提醒、同步和 AI 处理；
4. **分析层**：仪表盘呈现趋势、积压和结果。

一张“内容选题表”可以同时拥有编辑视图、待审核视图、发布日历、数据仪表盘和 AI 摘要字段。数据只维护一次，各角色通过不同视图工作。

## <Brain class="cat-icon" /> 飞书 AI 有三种使用层次 {#飞书-ai-层次}

### 第一层：个人直接使用

在文档、知识问答、妙记和多维表格里完成总结、解释、提取和生成。这一层配置最少，适合先验证任务是否真的值得交给 AI。

### 第二层：把 AI 放进业务流程

用多维表格 AI 字段批量处理记录，用工作流 AI 节点在状态变化时生成内容或做判断，用 aily 建立有知识、技能和记忆的智能伙伴。

### 第三层：连接外部 Agent

用官方 CLI、MCP、OpenAPI 或官方插件连接 Codex、Claude Code、OpenClaw 和自建服务。这个层次适合跨系统执行、事件驱动和长期运行。

## <Brain class="cat-icon" /> aily 适合什么 {#aily-适合什么}

飞书 aily 当前同时提供个人智能伙伴和企业级 Agent 平台。官方强调主动办公、技能库、个性化记忆、飞书消息与文档连接，以及智能客服、智能带教、智能工单等企业场景。[官方资料][aily]

它最适合两类需求：

- 希望在飞书内直接获得一个懂企业知识、能持续协助的智能伙伴；
- 希望用可视化方式搭建面向业务用户的 Agent，减少自建聊天入口和权限接入工作。

## <FileType class="cat-icon" /> 妙搭把“做个工具”放进飞书生态 {#妙搭}

官方 CLI 的 `lark-apps` Skill 已覆盖妙搭应用的创建、HTML 托管、本地全栈开发、云端 AI 生成、插件能力、日志、Trace、指标和访问范围。[Skill 文档][apps-skill]

三条常用路径：

| 需求 | 路径 |
|---|---|
| 发布一个静态页面或小工具 | HTML 托管 |
| 做带登录、数据库和多人协作的应用 | 本地全栈 |
| 用对话让 AI 生成应用 | 云端会话 |
