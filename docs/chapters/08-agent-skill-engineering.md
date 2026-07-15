---
title: ## 8. Agent 与 Skill 工程
---

<script setup>
import { Activity, BookOpen, Bot, Boxes, Brain, Calendar, CheckCircle2, ClipboardList, Cloud, Code, Database, Eye, FileCode, FileText, FileType, FolderTree, Gauge, GitBranch, Globe, Layers, ListChecks, Lock, Network, Newspaper, Plug, RefreshCw, Rocket, Route, Scale, Server, ShieldCheck, Target, Terminal, TrendingUp, Users, Workflow, Zap } from '@lucide/vue'
</script>

# 8. Agent 与 Skill 工程 {#_8-agent-与-skill-工程}

## <Workflow class="cat-icon" /> 一份稳定的工作合同 {#工作合同}

```text
Read → Plan → Confirm → Write → Verify → Report
```

1. **Read**：读取真实对象、权限、结构和当前状态；
2. **Plan**：列出将要创建、更新或发送的内容；
3. **Confirm**：在影响他人、外发、删除、审批和生产动作前获取确认；
4. **Write**：执行最小、明确、可追溯的写入；
5. **Verify**：回读 ID、字段、成员、时间和状态；
6. **Report**：返回结果链接、变更摘要、用量和待处理事项。

## <FileCode class="cat-icon" /> 一个 Skill 至少写清楚这些内容 {#skill-模板}

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

## <ListChecks class="cat-icon" /> 四类 Skill {#skill-类型}

| 类型 | 负责什么 | 例子 |
|---|---|---|
| 原子 Skill | 一个业务域的稳定操作 | 文档、Base、任务、日历 |
| 工作流 Skill | 跨域完成一个结果 | 会议到行动、每日简报 |
| 策略 Skill | 判断、分级和选择 | 选题评分、关系跟进 |
| 调度与事件 Skill | 触发、路由和运行 | 事件消费者、定时任务 |

原子 Skill 保持小而清楚，工作流 Skill 组合多个原子能力，策略 Skill 输出理由与证据，事件 Skill 关注生命周期和可恢复性。

## <Database class="cat-icon" /> Base 操作的工程要点 {#base-工程}

- 先用 URL 或标题解析得到真实 `base_token`、`table_id`、`view_id` 和 `record_id`；
- 写入、公式、lookup、工作流和仪表盘前读取真实结构；
- 查询使用服务端过滤、排序和分页；
- 批量写入使用稳定业务主键和幂等键；
- 删除、字段更新和角色更新走确认门；
- 工作流异常进入统一待处理视图；
- 用户身份与应用身份按资源权限选择。

官方 `lark-base` Skill 当前还提供 Base 资源目录、表单、Dashboard、Workflow 和 Role 的操作入口。[Skill 文档][base-skill]

## <FileText class="cat-icon" /> 文档操作的工程要点 {#文档工程}

- 保存文档 token、Block ID、revision 和来源映射；
- 局部更新使用精准块编辑；
- 整篇覆盖展示目标文档与影响范围；
- 图片、附件和内部链接单独处理；
- 正式知识与候选草稿分开；
- 更新后回读标题、关键段落和版本。

## <Zap class="cat-icon" /> 事件消费者的工程要点 {#事件工程}

- 先读取 EventKey 列表和 schema；
- 一个进程处理一种事件结构；
- 用事件 ID 或业务键去重；
- bounded run 使用 `--max-events` 或 `--timeout`；
- 长期进程监听 ready marker；
- 退出使用 stdin EOF 或 SIGTERM；
- 结构化错误进入重试、补权限或人工处理分支。

## <GitBranch class="cat-icon" /> 从 CLI 原型走向在线服务 {#cli-到服务}

第一版先用 CLI 验证命令、scope、身份和数据结构。流程连续稳定运行后，把业务规则、确认策略、幂等键和验证步骤迁移到在线服务。

```text
CLI 原型
→ 固定输入输出
→ 写成 Skill
→ 增加测试和运行记录
→ 接入事件或队列
→ 迁移到 OpenAPI 服务
```
