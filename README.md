# 前端Vibe Coding辅助项目

> 一个可被其他项目通过 `claude --add-dir` 引入的前端AI驱动开发辅助工具。

[![License](https://img.shields.io/badge/license-Private-blue.svg)]()
[![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)

---

## 核心特性

### 7层AI驱动开发流程

```
Layer 1: 文档抓取 → Layer 2: 需求结构化 → Layer 3: 领域与契约
     ↓
Layer 4: 红测试 → Layer 5: 绿代码+视觉还原
     ↓
Layer 6: 交付 → Layer 7: 知识沉淀
```

### 包含25个Skills

| 类别 | 数量 | Skills |
|------|------|--------|
| Vue生态 | 7 | vue-best-practices, vue-pinia-best-practices, vue-router-best-practices, vue-testing-best-practices, vue-jsx-best-practices, vue-options-api-best-practices, vue-debug-guides |
| 工具链 | 4 | element-plus-vue3, typescript-advanced-types, tailwind-design-system, vitest |
| 工程化 | 3 | create-adaptable-composable, performance, api-testing-observability-api-mock |
| Layer流程 | 7 | layer1-document-capture ~ layer7-knowledge-accumulation |
| Pencil工具链 | 4 | pencil-xml-parser, pencil-to-vue, pencil-to-tailwind, visual-regression-testing |

---

## 快速开始

### 1. 引入辅助项目

```bash
# 方式1: 直接使用
claude --add-dir ~/develop-assistant

# 方式2: 配置别名（推荐）
echo 'alias claude-ai="\$HOME/develop-assistant/scripts/claude-ai.sh"' >> ~/.bashrc
source ~/.bashrc
claude-ai
```

### 2. 验证加载

```bash
# 在Claude中执行
/skills list  # 应显示25个skills
/skill layer1-document-capture  # 应正常显示
```

### 3. 初始化业务项目

```bash
# 在业务项目根目录
mkdir -p .ai/{input/{prd,api,pencil},output,context,skills}
touch .ai/context/{glossary.md,glossary-archive.md}
echo ".ai/" >> .gitignore
```

---

## 使用Layer流程开发功能

以"登录功能"为例：

### Layer 1: 文档抓取

```bash
# 1. 准备输入文档
# - 从钉钉复制PRD → .ai/input/prd/login.md
# - Figma导出.fig → Pencil保存 → .ai/input/pencil/login.pen
# - Apipost导出 → .ai/input/api/auth.md

# 2. 在Claude中执行
/skill layer1-document-capture
```

### Layer 2: 需求结构化

```bash
/skill layer2-requirement-analysis

# 输出: .ai/output/login/raw.md
# 包含: 业务实体、页面结构、接口规格
```

### Layer 3: 领域与契约

```bash
/skill layer3-contract-definition

# 输出: .ai/output/login/contract.md
# 包含: 组件契约、接口适配、测试契约
```

### Layer 4: 红测试

```bash
/skill layer4-red-tests

# 输出: src/features/login/__tests__/login.spec.ts
# 状态: 3个测试全红（预期）
```

### Layer 5: 绿代码+视觉还原

```bash
/skill layer5-green-implementation

# 输出: 实现代码 + .ai/output/login/green.md
# 状态: 测试全绿 + 视觉对比 > 95%
```

### Layer 6: 交付

```bash
/skill layer6-delivery

# 输出: 归档到 docs/delivered/login/
# 操作: Demo验证 → 代码合并 → 通知团队
```

### Layer 7: 知识沉淀

```bash
/skill layer7-knowledge-accumulation

# 输出: 优化Prompt + 归档术语 + 沉淀Skills
```

---

## 项目结构

```
develop-assistant/
├── .agents/skills/              # 25个本地Skills
│   ├── layer1-document-capture/
│   ├── layer2-requirement-analysis/
│   ├── ...
│   └── visual-regression-testing/
├── .claude/
│   └── settings.json            # Skills注册配置
├── scripts/                     # 工具脚本
│   ├── claude-ai.sh            # 启动脚本
│   ├── notify.sh               # 系统通知
│   └── setup-alias.sh          # 别名配置
├── templates/                   # 项目模板
│   └── dot-ai-structure.md     # .ai/目录结构
├── examples/                    # 使用示例
│   └── login-feature/          # 完整Layer示例
├── CLAUDE.md                   # 项目级规范文档
└── README.md                   # 本文件
```

---

## 技术栈

- **框架**: Vue 3 + TypeScript
- **状态管理**: Pinia
- **UI组件库**: Element Plus
- **测试**: Vitest + Vue Testing Library
- **样式**: Tailwind CSS
- **构建**: Vite
- **设计**: Pencil (Figma导入)
- **API文档**: Apipost

---

## 团队规范

### 人员配置
- 团队: 10人
- 前端: 4人（Leader 1人 + 开发 3人）
- 模式: 纯前端闭环，前端自治决策

### AI协作规则

**禁止操作:**
- 不修改业务项目的 `CLAUDE.md`
- 不自动修改 `.ai/context/glossary.md`
- 不自动提交代码
- 不自动创建 `src/` 文件（仅输出到 `.ai/output/`）

**必做检查点:**
- 术语一致性检查
- TypeScript严格模式
- 测试覆盖
- 无障碍检查

---

## 隐私保护

- `.ai/` 目录不提交到Git（已添加到 `.gitignore`）
- 敏感信息（PRD/API文档）仅在本地处理
- 辅助项目本身建议本地维护

---

## 文档

- [CLAUDE.md](CLAUDE.md) - 项目级规范与AI协作规则
- [templates/dot-ai-structure.md](templates/dot-ai-structure.md) - `.ai/` 目录结构模板
- [流程.md](流程.md) - 7层详细流程设计（中文）
- [前端开发流程优化.md](前端开发流程优化.md) - 流程规划文档

---

## 开发状态

| Sprint | 内容 | 状态 |
|--------|------|------|
| Sprint 1 | Phase 1 - 基础配置 | ✅ 完成 |
| Sprint 2 | Phase 2 - 工具脚本 | ✅ 完成 |
| Sprint 3 | Phase 3 - Layer框架 | ✅ 完成 |
| Sprint 4 | Phase 4 - Pencil工具链 | ⚠️ 待示例文件完善 |
| Sprint 5 | Phase 5 - 文档 | 🚧 进行中 |

---

## 待办事项

- [x] 更新 `.claude/settings.json` 注册25个skills
- [x] 创建项目级 `CLAUDE.md`
- [x] 创建工具脚本（notify.sh, claude-ai.sh, setup-alias.sh）
- [x] 创建7个Layer skills
- [x] 创建 `.ai/` 目录结构模板
- [x] 创建4个Pencil工具链skills（框架）
- [x] 更新README.md
- [ ] 创建 `examples/login-feature/` 示例
- [ ] 根据示例文件完善Pencil解析器

---

## 贡献

这是一个内部项目，仅供团队使用。

---

## License

Private - 仅限内部使用
