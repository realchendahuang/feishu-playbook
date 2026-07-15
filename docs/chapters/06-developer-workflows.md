---
title: ## 6. 开发者工作流
---

<script setup>
import { Activity, BookOpen, Bot, Boxes, Brain, Calendar, CheckCircle2, ClipboardList, Cloud, Code, Database, Eye, FileCode, FileText, FileType, FolderTree, Gauge, GitBranch, Globe, Layers, ListChecks, Lock, Network, Newspaper, Plug, RefreshCw, Rocket, Route, Scale, Server, ShieldCheck, Target, Terminal, TrendingUp, Users, Workflow, Zap } from '@lucide/vue'
</script>

# 6. 开发者工作流 {#_6-开发者工作流}

## <Code class="cat-icon" /> 把 Coding Agent 接回飞书 {#coding-agent}

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

## <Zap class="cat-icon" /> 事件驱动机器人 {#事件机器人}

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

## <Newspaper class="cat-icon" /> 行业信号与内容管道 {#行业信号}

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

## <Database class="cat-icon" /> 数据库与 Base 协同 {#数据库-base}

| 条件 | 主承载层 |
|---|---|
| 高频写入、事务、复杂 JOIN、全文检索 | SQLite / PostgreSQL |
| 人工查看、移动访问、状态机、团队协作 | Base |
| 原始模型中间结果和长期日志 | 数据库或对象存储 |
| 候选、摘要、审批状态和最终结果 | Base |

推荐用 `updated_at` 或 cursor 做增量同步，用批量 API 写入，用稳定业务主键保持两侧映射。人的判断在 Base 完成后，再把结果回写数据库。

## <Network class="cat-icon" /> 多用户 Agent 工作台 {#多用户工作台}

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
