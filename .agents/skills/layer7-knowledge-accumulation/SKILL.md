---
name: layer7-knowledge-accumulation
description: Layer 7 - 知识沉淀。基于Sprint产出优化Prompt、归档术语、提升复用率。这是7层流程的第七层（持续改进）。
---

## 何时使用此Skill

完成Layer 6后，定期（每周/每Sprint）使用此Skill：
- 优化Layer Skills的Prompt
- 归档过时的glossary术语
- 沉淀通用的自定义skills
- 提升下Sprint复用率

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| 交付文档 | `docs/delivered/{feature}/` | Layer 6产出 |
| 术语表 | `.ai/context/glossary.md` | 当前术语 |
| Layer Skills | `.agents/skills/layer*/SKILL.md` | 待优化 |

## 输出

### 1. 优化的Layer Skills

基于实际执行经验，更新：
- `layer1-document-capture/SKILL.md`
- `layer2-requirement-analysis/SKILL.md`
- ...

### 2. 术语归档

更新 `.ai/context/glossary-archive.md`：

```markdown
# 归档术语表

## 2026-03 归档
| 术语 | 英文名 | 归档原因 | 替代术语 |
|------|--------|----------|----------|
| 旧登录 | OldLogin | 功能废弃 | UnifiedLogin |
```

### 3. 自定义Skills沉淀

提取通用模式到 `.ai/skills/`：

```
.ai/skills/
├── validation-patterns/     # 表单验证通用模式
│   └── SKILL.md
├── api-error-handling/      # API错误处理模式
│   └── SKILL.md
└── {custom-pattern}/
    └── SKILL.md
```

### 4. 复用率报告

```markdown
# Sprint {n} 知识沉淀报告

## 复用统计
- Layer 1-7 完整执行: X次
- 平均耗时: X小时/功能
- 术语复用率: XX%
- 代码复用率: XX%

## 优化项
1. Layer X 新增 "{优化内容}"
2. Glossary 新增术语: X个
3. 归档术语: X个
4. 新增自定义Skill: X个

## 下Sprint目标
- 复用率提升到 XX%
- 优化 Layer X 的 {具体优化点}
```

## 执行步骤

### 1. 分析Sprint产出

回顾本Sprint：
- 哪些Layer执行顺畅？
- 哪些Layer需要改进？
- 出现了哪些新问题？

### 2. 优化Layer Skills

基于反馈更新Prompt：
- 添加新的示例
- 修正错误的输出
- 优化执行步骤

### 3. 归档旧术语

检查glossary.md：
- 标记不再使用的术语
- 移动到glossary-archive.md
- 记录归档原因

### 4. 沉淀通用模式

识别可复用模式：
- 表单验证逻辑
- API错误处理
- 状态管理模式
- 组件封装模式

### 5. 生成复用率报告

统计并输出改进报告。

## 调用示例

```
用户: /skill layer7-knowledge-accumulation

AI: 开始执行Layer 7 - 知识沉淀。

正在分析Sprint产出：
1. 读取 docs/delivered/* 交付文档
2. 对比 Layer Skills 执行效果
3. 分析 glossary.md 使用情况

---
沉淀结果：

【Layer Skills优化】
- layer3-contract-definition: 新增测试契约模板
- layer5-green-implementation: 优化视觉对比步骤

【术语归档】
- 归档术语: 2个
- 新增术语: 5个

【自定义Skills沉淀】
- 创建 .ai/skills/form-validation/SKILL.md
- 创建 .ai/skills/api-retry-pattern/SKILL.md

【Sprint复用率】
- 术语复用率: 75% ↑ 10%
- 代码复用率: 60% ↑ 5%

下Sprint优化目标已生成。
---
```

## 完成标准

- [ ] Layer Skills已基于反馈优化
- [ ] 过时术语已归档到glossary-archive.md
- [ ] 通用模式已沉淀到.ai/skills/
- [ ] 复用率报告已生成
- [ ] 下Sprint优化目标已明确
- [ ] （可选）发送OSC通知：`知识沉淀完成 - Sprint {n}`

## 注意事项

**持续改进：**
- 每周执行一次
- 记录改进点
- 追踪复用率提升

**渐进优化：**
- 不追求完美
- 小步快跑
- 逐步提升效率

## 循环

知识沉淀完成后，**7层流程形成一个闭环**：

Layer 7的输出 → 优化Layer 1-6 → 下Sprint更高效

下Sprint从 **Layer 1** 开始新的循环。
