# 前端Vibe Coding辅助项目 - CLAUDE.md

> 本项目是一个可被其他项目通过 `claude --add-dir` 引入的前端Vibe Coding辅助工具，提供标准化AI驱动开发流程、团队规范和工具链配置。

---

## 1. 核心流程：7层架构

```
Layer 1: 文档抓取 → Layer 2: 需求结构化 → Layer 3: 领域与契约
     ↓
Layer 4: 红测试 → Layer 5: 绿代码+视觉还原
     ↓
Layer 6: 交付 → Layer 7: 知识沉淀
```

### 各层职责与执行指令

| Layer | 名称 | 负责人 | 耗时 | 核心产出 |
|-------|------|--------|------|----------|
| L1 | 文档抓取 | 前端Leader | 15min | `.ai/input/` 原始文档 |
| L2 | 需求结构化 | Leader+AI | 10min | `raw.md` 结构化需求 |
| L3 | 领域与契约 | Leader+AI | 15min | `contract.md` + 更新 `glossary.md` |
| L4 | 红测试 | 前端开发+AI | 15min | `*.spec.ts` (全红) + `red.md` |
| L5 | 绿代码+视觉还原 | 前端开发+AI | 2-4h | 实现代码 + `green.md` |
| L6 | 交付 | 前端Leader | 15min | Demo + 合并 + 归档 |
| L7 | 知识沉淀 | 前端Leader | 30min/周 | 优化Prompt + 归档术语 |

### 执行命令

```bash
# 启动带辅助项目的Claude（自动同步skills到全局目录）
claude-ai

# 各层执行（在业务项目目录内）
/skill layer1-document-capture    # Layer 1
/skill layer2-requirement-analysis # Layer 2
/skill layer3-contract-definition  # Layer 3
/skill layer4-red-tests            # Layer 4
/skill layer5-green-implementation # Layer 5
/skill layer6-delivery             # Layer 6
/skill layer7-knowledge-accumulation # Layer 7
```

> **提示**: `claude-ai` 命令会自动将 develop-assistant 的 skills 同步到 `~/.claude/skills/`，确保在任何项目中都能使用 `/skill` 命令。

---

## 2. 团队与项目信息

### 团队规模
- **总人数**：10人
- **前端**：4人（Leader 1人 + 开发 3人）
- **工作模式**：纯前端闭环，前端自治决策

### 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3 + TypeScript |
| 状态管理 | Pinia |
| UI组件库 | Element Plus |
| 测试 | Vitest + Vue Testing Library |
| 样式 | Tailwind CSS |
| 构建 | Vite |
| 设计 | Pencil (Figma导入) |
| API文档 | Apipost |
| 需求管理 | 钉钉文档 |

---

## 3. AI协作规则

### 禁止操作（AI绝对不可执行）

1. **不修改业务项目的 `CLAUDE.md`** - 只读取，不写入
2. **不自动创建/修改 `.ai/context/glossary.md`** - 输出diff供人工确认
3. **不自动提交代码** - 输出git diff供人工确认
4. **不自动创建文件到 `src/`** - 仅输出建议或写入 `.ai/output/`
5. **不访问生产环境** - 仅限本地开发环境

### 必做检查点

1. **术语一致性检查** - 任何输出需对比 `glossary.md`
2. **类型安全** - TypeScript严格模式，无 `any`
3. **测试覆盖** - 新功能必须伴随测试
4. **无障碍检查** - a11y零违规目标

### 通知机制

AI完成任务后通过OSC序列发送系统通知：
```bash
echo -e "\033]1337;SetNotification=AI任务已完成\007"
```
依赖：VSCode "Terminal Notification" 扩展

---

## 4. 目录结构规范

### 业务项目中的 `.ai/` 目录

```
.ai/
├── input/                    # Layer 1 输入
│   ├── prd/                  # 钉钉PRD文档
│   │   └── {feature}.md
│   ├── api/                  # Apipost接口文档
│   │   └── {module}.md
│   └── pencil/               # Pencil设计稿
│       └── {feature}.pen
├── output/                   # Layer 2-5 输出
│   └── {feature}/
│       ├── raw.md            # Layer 2 结构化需求
│       ├── contract.md       # Layer 3 契约定义
│       ├── red.md            # Layer 4 红测试记录
│       └── green.md          # Layer 5 绿代码记录
├── context/                  # 跨功能共享上下文
│   ├── glossary.md           # 统一语言表（术语库）
│   └── glossary-archive.md   # 归档术语
└── skills/                   # Layer 7 沉淀的skills
    └── {custom-skills}/
```

---

## 5. 隐私与协作规范

### 本地私有原则

1. **`.ai/` 目录不提交到Git** - 添加到 `.gitignore`
2. **辅助项目本身也不Push** - 本地维护，团队共享方式待定
3. **敏感信息不出本地** - PRD/API文档仅在本地处理

### 协作方式

```bash
# 方案1：本地目录引入（推荐）
claude --add-dir ~/develop-assistant

# 方案2：Shell别名（配置一次）
alias claude-ai='claude --add-dir ~/develop-assistant'
claude-ai
```

---

## 6. 可用Skills清单

### Vue生态（7个）
- `vue-best-practices` - Vue 3 最佳实践
- `vue-pinia-best-practices` - Pinia 状态管理
- `vue-router-best-practices` - Vue Router 路由
- `vue-testing-best-practices` - Vue 测试实践
- `vue-jsx-best-practices` - Vue JSX 用法
- `vue-options-api-best-practices` - Options API 实践
- `vue-debug-guides` - Vue 调试指南

### 工具链（4个）
- `element-plus-vue3` - Element Plus 组件库
- `typescript-advanced-types` - TypeScript 高级类型
- `tailwind-design-system` - Tailwind 设计系统
- `vitest` - Vitest 测试框架

### 工程化（2个）
- `create-adaptable-composable` - 可组合函数模式
- `performance` - 性能优化
- `api-testing-observability-api-mock` - API测试与Mock

### Layer流程（7个）- 计划中
- `layer1-document-capture` - 文档抓取
- `layer2-requirement-analysis` - 需求结构化
- `layer3-contract-definition` - 领域与契约
- `layer4-red-tests` - 红测试
- `layer5-green-implementation` - 绿代码+视觉还原
- `layer6-delivery` - 交付
- `layer7-knowledge-accumulation` - 知识沉淀

### Pencil工具链（4个）- 已基于testData.pen验证
- `pencil-json-parser` - Pencil JSON解析器（.pen文件直接解析）
- `pencil-to-vue` - Pencil转Vue代码（已验证组件映射）
- `pencil-to-tailwind` - Pencil设计Token转Tailwind（已提取23色+MiSans）
- `visual-regression-testing` - 视觉回归测试

**基于testData.pen验证：**
- 文件格式: JSON (非ZIP)
- 版本: 2.8
- 元素数: 604个 (frame:139, rectangle:96, text:179, group:110, path:65)
- 颜色: 23种 (#202020, #e80c00, #6367ff等)
- 字体: MiSans (7种大小: 8-20px)
- 解析器: `scripts/pencil-parser.js`

---

## 7. 快速开始

### 第一步：配置别名（推荐）

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
echo 'alias claude-ai="\$HOME/develop-assistant/scripts/claude-ai.sh"' >> ~/.bashrc
source ~/.bashrc
```

### 第二步：初始化业务项目

```bash
# 进入业务项目
cd /path/to/your-project

# 创建 .ai/ 目录结构
mkdir -p .ai/{input/{prd,api,pencil},output,context,skills}
touch .ai/context/glossary.md

# 添加到 .gitignore
echo ".ai/" >> .gitignore
```

### 第三步：启动开发流程

```bash
# 启动带辅助项目的Claude
claude-ai

# 在Claude中执行 Layer 1
/skill layer1-document-capture
```

---

## 8. 故障排查

### Skills未加载

**问题**: 运行 `/skills list` 显示 "No skills found"

**原因**: `--add-dir` 不会自动加载 develop-assistant 的 skills，skills 必须位于 `~/.claude/skills/` 或业务项目的 `.claude/skills/` 目录下。

**解决方案**:

```bash
# 使用 claude-ai 启动器（推荐）- 自动同步 skills
~/develop-assistant/scripts/claude-ai.sh

# 或手动同步 skills 到全局目录
mkdir -p ~/.claude/skills
cp -r ~/develop-assistant/.agents/skills/* ~/.claude/skills/

# 验证
/skills list
```

### 通知不弹窗

1. 确认安装 VSCode "Terminal Notification" 扩展
2. 检查终端支持OSC序列：`echo -e "\033]1337;SetNotification=test\007"`

---

*最后更新：2026-03-15*
*版本：MVP Phase 1*
