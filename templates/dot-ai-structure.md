# `.ai/` 目录结构模板

> 在业务项目中创建此目录结构，用于支持7层开发流程。

---

## 目录结构

```
.ai/
├── input/                    # Layer 1: 文档抓取输出
│   ├── prd/                  # 产品需求文档（来自钉钉）
│   │   └── {feature}.md
│   ├── api/                  # 接口文档（来自Apipost）
│   │   └── {module}.md
│   └── pencil/               # 设计稿（来自Figma→Pencil）
│       ├── {feature}.pen
│       └── {feature}-content.xml  # 解压后的XML
├── output/                   # Layer 2-5: 中间产物
│   └── {feature}/
│       ├── raw.md            # Layer 2: 结构化需求
│       ├── contract.md       # Layer 3: 契约定义
│       ├── red.md            # Layer 4: 红测试记录
│       └── green.md          # Layer 5: 绿代码记录
├── context/                  # 跨功能共享上下文
│   ├── glossary.md           # 统一语言表（术语库）
│   └── glossary-archive.md   # 归档术语
└── skills/                   # Layer 7: 沉淀的自定义skills
    └── {custom-pattern}/
        └── SKILL.md
```

---

## 初始化命令

```bash
# 在业务项目根目录执行
mkdir -p .ai/{input/{prd,api,pencil},output,context,skills}
touch .ai/context/{glossary.md,glossary-archive.md}

# 添加到.gitignore
echo ".ai/" >> .gitignore
```

---

## 各目录说明

### `.ai/input/`

**Layer 1 输出目录**，存放外部文档的本地副本。

| 子目录 | 内容来源 | 格式 |
|--------|----------|------|
| `prd/` | 钉钉文档 | Markdown |
| `api/` | Apipost | Markdown |
| `pencil/` | Figma→Pencil | .pen + XML |

### `.ai/output/{feature}/`

**Layer 2-5 输出目录**，存放功能开发的中间产物。

| 文件 | Layer | 内容 |
|------|-------|------|
| `raw.md` | 2 | 结构化需求、业务实体、页面结构 |
| `contract.md` | 3 | 组件契约、接口适配、测试契约 |
| `red.md` | 4 | 红测试清单、待实现任务 |
| `green.md` | 5 | 绿代码记录、视觉对比结果 |

### `.ai/context/`

**跨功能共享目录**，存放全局上下文。

| 文件 | 说明 |
|------|------|
| `glossary.md` | 统一语言表，定义业务术语的中英文对照 |
| `glossary-archive.md` | 归档不再使用的术语 |

### `.ai/skills/`

**Layer 7 输出目录**，存放沉淀的自定义skills。

---

## 使用示例

### 开发登录功能

```bash
# 1. 创建功能目录
mkdir -p .ai/output/login

# 2. Layer 1: 抓取文档
# - 复制PRD到 .ai/input/prd/login.md
# - 保存设计稿到 .ai/input/pencil/login.pen
# - 导出API文档到 .ai/input/api/auth.md

# 3. Layer 2: 结构化需求
/skill layer2-requirement-analysis
# 输出: .ai/output/login/raw.md

# 4. Layer 3: 契约定义
/skill layer3-contract-definition
# 输出: .ai/output/login/contract.md
# 建议更新: .ai/context/glossary.md

# 5. Layer 4: 红测试
/skill layer4-red-tests
# 输出: src/features/login/__tests__/login.spec.ts
#        .ai/output/login/red.md

# 6. Layer 5: 绿代码
/skill layer5-green-implementation
# 输出: src/features/login/*.vue
#        .ai/output/login/green.md

# 7. Layer 6: 交付
/skill layer6-delivery
# 归档到: docs/delivered/login/

# 8. Layer 7: 知识沉淀
/skill layer7-knowledge-accumulation
# 输出: .ai/skills/form-validation/SKILL.md
```

---

## 注意事项

1. **`.ai/` 不提交到Git**
   - 已添加到 `.gitignore`
   - 本地私有，保护PRD/API等敏感信息

2. **`glossary.md` 人工确认**
   - AI输出更新建议，不自动修改
   - Leader确认后手动更新

3. **定期归档**
   - 过时术语移动到 `glossary-archive.md`
   - 已完成功能输出可删除或归档

---

*模板版本: MVP Phase 1*
