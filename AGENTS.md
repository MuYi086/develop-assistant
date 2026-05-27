# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

**develop-assistant** — 本地 Claude Code 技能集合（`.agents/skills/`），作为 AI 助手的增强层，提供领域专业知识、最佳实践和可复用工作流。项目本身不包含可运行的应用代码，所有产出物均为技能定义文件（SKILL.md + 引用文档）。

## 架构

```
.agents/skills/                     # 所有本地技能（每个技能一个目录）
├── Vue 生态
│   vue-best-practices/             # Vue 3 开发、Composition API、SSR、Volar
│   vue-options-api-best-practices/ # Vue 3 Options API
│   vue-jsx-best-practices/         # Vue JSX 语法
│   vue-router-best-practices/      # Vue Router 4 模式
│   vue-pinia-best-practices/       # Pinia 状态管理
│   vue-debug-guides/               # Vue 3 调试与错误处理
│   create-adaptable-composable/    # 支持 MaybeRef 的 Vue composable
│   element-plus-vue3/              # Element Plus UI 库
│   uniapp-frontend-skills/         # uni-app 跨平台开发
├── 测试
│   vitest/                         # Vitest 单元测试
│   vue-testing-best-practices/     # Vue 测试（Vitest + Vue Test Utils + Playwright）
│   webapp-testing/                 # 基于 Playwright 的 Web 应用测试
├── 设计/UI
│   frontend-design/                # 生产级前端 UI
│   tailwind-design-system/         # Tailwind CSS v4 设计系统
│   theme-factory/                  # 主题系统（幻灯片、文档等）
│   web-design-engineer/            # Web 设计工程
│   architecture-diagram/           # 架构图生成
├── 基础设施
│   skill-creator/                  # 元技能：创建/优化其他技能
│   jsdoc-best-practices/           # JSDoc 注释规范
│   neat-freak/                     # 知识库洁癖整理与文档同步
│   api-testing-observability-api-mock/ # API 模拟
│   rag-skill/                      # RAG 检索增强
├── 增强工具
│   aihot/                          # AI HOT 中文资讯查询
│   hv-analysis/                    # 横纵分析法深度研究
│   gpt-image-2/                    # 图片生成
│   performance/                    # Web 性能优化
│   typescript-advanced-types/      # 高级 TypeScript 类型
.claude/
  settings.json                     # 技能注册、MCP 服务、权限、沙箱配置
  commands/commit.md                # /commit 命令（Conventional Commits 自动提交）
```

**关键设计决策：**
- 技能通过 `SKILL.md` 定义行为、触发条件和工作流，部分含 `references/` 存放详细模式文档
- 技能在 `.claude/settings.json` 的 `skills` 字段注册，`sourceType: "local"` + `source` 指向目录路径
- MCP 服务通过 `enabledMcpjsonServers` 启用（当前：`github`, `yunxiao`, `chrome-devtools`）
- 沙箱默认开启（`sandbox.enabled: true`），敏感命令通过 `permissions.deny` 限制（`rm:*`, `git:push:*`）

## 技能注册

添加新技能 = 创建含 `SKILL.md` 的目录 + 在 settings.json 的 `skills` 中注册。技能名使用 kebab-case。

验证技能注册：重启对话后尝试触发该技能的典型场景，或在对话中直接引用技能名。

## 可用命令

- `/commit` — 暂存文件并生成 Conventional Commits 消息（中文描述）。类型选择：`fix` / `feat` / `refactor` / `perf` / `style` / `docs` / `chore`
- `/init` — 重新生成 CLAUDE.md
- `/loop` — 按时间间隔重复执行某个 prompt

### Skill 触发

以下技能通过对话中的自然语言自动触发，也可手动 `Skill:<name>` 显式调用：

| 技能名 | 典型触发场景 |
|--------|------------|
| `skill-creator` | 创建新技能、优化已有技能 |
| `simplify` | 审查代码变更质量 |
| `aihot` | 查询 AI 资讯/日报/热点（"AI 圈"、"今天 AI 有什么"） |
| `hv-analysis` | 深度研究分析（"研究一下XX"、"竞品分析"） |
| `neat-freak` | 文档/记忆同步整理（"整理一下"、"/sync"） |

## Git 工作流

- 提交信息使用 Conventional Commits 格式：`<type>: <中文描述>`
- 常用 type：`feat`（新技能/新功能）、`fix`（修复）、`refactor`（重构）、`chore`（配置/依赖）、`docs`（文档）
- 禁止 push 到远程（permissions 默认限制 `git:push:*`）
- 提交通过 `/commit` 命令完成，不手动调用 `git commit`

## 关键约定

- **技能指令语言**：SKILL.md 使用英文编写（遵循开放 Agent Skill 规范）
- **用户沟通**：提交消息和对话使用中文
- **Vue 项目**：默认 Composition API + `<script setup>` + TypeScript
- **测试**：单元测试用 Vitest，E2E 用 Playwright
- **JSDoc**：遵循 `.agents/skills/jsdoc-best-practices/SKILL.md` 规范，所有注释使用 UTF-8 中文
