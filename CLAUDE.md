# CLAUDE.md

此文件为 Claude Code 在该仓库中工作时提供指导。

## 项目概述

**develop-assistant** — 本地 Claude Code 技能集合（`.agents/skills/`），主要面向 Vue 3 前端开发生态。作为 AI 助手的增强层，为 Claude Code 提供领域专业知识、最佳实践和可复用工作流。

## 架构与结构

```
.agents/skills/                     # 所有本地技能定义（每个技能一个目录）
  vue-best-practices/               # Vue 3 开发、Composition API、SSR、Volar
  vitest/                           # Vitest 单元测试
  vue-router-best-practices/        # Vue Router 4 模式
  vue-pinia-best-practices/         # Pinia 状态管理
  vue-options-api-best-practices/   # Vue 3 Options API
  vue-jsx-best-practices/           # Vue JSX 语法
  vue-testing-best-practices/       # Vue 测试（Vitest + Vue Test Utils + Playwright）
  vue-debug-guides/                 # Vue 3 调试与错误处理
  element-plus-vue3/                # Element Plus UI 库
  create-adaptable-composable/      # 支持 MaybeRef 的 Vue composable
  frontend-design/                  # 生产级前端 UI
  tailwind-design-system/           # Tailwind CSS v4 设计系统
  typescript-advanced-types/        # 高级 TypeScript 类型
  performance/                      # Web 性能优化
  webapp-testing/                   # 基于 Playwright 的 Web 应用测试
  api-testing-observability-api-mock/ # API 模拟
  uniapp-frontend-skills/           # uni-app 跨平台开发
  theme-factory/                    # 主题系统（幻灯片、文档等）
  skill-creator/                    # 元技能：创建/优化其他技能
  jsdoc-best-practices/             # JSDoc 规范
  architecture-diagram/             # 架构图生成
  gpt-image-2/                      # 图片生成
  rag-skill/                        # RAG 相关技能
  web-design-engineer/              # Web 设计工程
.claude/settings.json               # 技能注册和权限配置
.claude/commands/                   # 自定义斜杠命令（如 commit）
```

每个技能包含一个 `SKILL.md` 定义其行为、触发条件和工作流。部分技能还包含 `references/` 目录存放详细模式文档。

## 技能注册

技能在 `.claude/settings.json` 的 `skills` 字段中注册，使用 `sourceType: "local"` 和 `source` 指向技能目录。添加新技能 = 创建含 `SKILL.md` 的目录 + 在 settings.json 中注册。

## 关键约定

- **Vue 3**：默认使用 Composition API + `<script setup>` + TypeScript，除非项目明确使用 Options API
- **提交**：通过 `/commit` 使用 Conventional Commits（`feat:`、`fix:`、`refactor:` 等），中文描述
- **测试**：单元测试用 Vitest（Jest 兼容 API），E2E 用 Playwright
- **语言**：技能指令用英文，提交消息和用户沟通用中文

## 可用命令

- `/commit` — 暂存文件并生成 Conventional Commits 消息（中文描述）
- `/init` — 初始化/重新生成 CLAUDE.md
- `/loop` — 按时间间隔重复执行某个 prompt
- `Skill:skill-creator` — 创建或优化技能
- `Skill:simplify` — 审查代码变更质量

## JSDoc 注释规范

所有文件改动必须遵循 `.agents/skills/jsdoc-best-practices/SKILL.md` 中的 JSDoc 规范。

**通用要求**：所有注释使用 UTF-8 编码，内容使用中文。参数和返回值描述以 `-` 分隔类型和说明。

- **文件头部**: 每个文件必须包含 `@fileoverview`（一句话概述）、`@description`（详细功能点列表）和 `@module`（模块路径）
- **导出接口/类型**: 所有导出项必须有 JSDoc 注释，属性使用 `/** 描述 */` 格式
- **函数/方法**: 包含 `@param`（参数类型和描述）、`@returns`（返回值类型和描述），如有异常加 `@throws`
- **Pinia Store**: 文件头含功能点列表；Store 定义含 `@example`；内部使用 `// ==================== State ====================` 分区注释；return 对象按类别（State/Getters/Actions）分组注释
- **Vue 组件**: 文件头部描述组件功能和主要功能点；Props 属性注释；Emits 事件注释
- **API 模块**: 文件头部含接口列表；每个 API 函数含 `@param` 和 `@returns`
