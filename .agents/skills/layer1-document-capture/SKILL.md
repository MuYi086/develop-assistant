---
name: layer1-document-capture
description: Layer 1 - 文档抓取。将外部文档（钉钉PRD、Figma设计稿、Apipost API文档）本地化为AI可读的格式，存储到 .ai/input/ 目录。这是7层流程的第一层。
---

## 何时使用此Skill

当开始一个新功能开发时，使用此Skill完成Layer 1：
- 收到钉钉PRD文档需要整理
- 收到Figma/Figma设计稿需要导入
- 收到Apipost API接口文档需要整理
- 需要为AI准备标准化的输入文档

## 输入

| 来源 | 格式 | 位置 | 说明 |
|------|------|------|------|
| PRD | Markdown | 钉钉文档复制 | 产品需求文档 |
| 设计稿 | .pen文件 | Figma导出→Pencil | 视觉设计稿 |
| API文档 | Markdown | Apipost导出 | 接口规范文档 |

## 输出

输出到 `.ai/input/` 目录：

```
.ai/input/
├── prd/
│   └── {feature}.md          # 整理后的PRD文档
├── api/
│   └── {module}.md           # 整理后的API文档
└── pencil/
    └── {feature}.pen         # Pencil设计稿文件
        └── {feature}-content.xml  # 解压后的XML内容
```

## 执行步骤

### 1. PRD文档处理

```bash
# 从钉钉复制PRD内容
# 目标文件: .ai/input/prd/{feature}.md
```

**输出格式要求：**
- 保留原始结构（标题、列表、表格）
- 移除钉钉特有的格式标记
- 添加功能标识符（如：feature/login）

### 2. 设计稿处理

```bash
# Figma → 导出.fig → 拖拽到Pencil → Save As .pen
# 目标文件: .ai/input/pencil/{feature}.pen
# 解压: unzip -q {feature}.pen -d .ai/input/pencil/{feature}/
```

**输出要求：**
- 保留.pen文件
- 解压获取 pencil-content.xml
- 确认页面结构完整

### 3. API文档处理

```bash
# 从Apipost导出Markdown
# 目标文件: .ai/input/api/{module}.md
```

**输出格式要求：**
- 整理接口列表（端点、方法、参数、响应）
- 标注状态码和错误处理
- 分组相关接口

## 调用示例

```
用户: 我要开始开发登录功能，PRD在钉钉文档里

AI: 我将帮您完成Layer 1 - 文档抓取。

请提供以下信息：
1. 功能名称（如：login）
2. PRD文档内容（从钉钉复制粘贴）
3. 是否有设计稿？（Figma链接或.pen文件）
4. 涉及的API模块？（从Apipost导出）

完成后将生成：
- .ai/input/prd/login.md
- .ai/input/pencil/login.pen (如有设计稿)
- .ai/input/api/auth.md (如有API文档)
```

## 完成标准

- [ ] PRD文档已保存到 `.ai/input/prd/{feature}.md`
- [ ] 设计稿已保存到 `.ai/input/pencil/{feature}.pen`（如有）
- [ ] API文档已保存到 `.ai/input/api/{module}.md`（如有）
- [ ] 文档格式规范，AI可读
- [ ] 发送OSC通知：`文档抓取完成 - {feature}`

## 下一步

文档抓取完成后，进入 **Layer 2: 需求结构化** (`/skill layer2-requirement-analysis`)
