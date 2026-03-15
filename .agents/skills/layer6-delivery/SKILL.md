---
name: layer6-delivery
description: Layer 6 - 交付。验收实现成果，合并代码，通知相关方，归档文档。这是7层流程的第六层。
---

## 何时使用此Skill

完成Layer 5后，使用此Skill：
- 验收实现成果（测试+视觉）
- 创建可运行的Demo
- 合并代码到主分支
- 通知测试/设计团队
- 归档交付文档

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| green.md | `.ai/output/{feature}/green.md` | Layer 5输出 |
| 实现代码 | `src/features/{feature}/` | 绿代码产出 |

## 输出

### 1. Demo环境

```bash
# 本地启动Demo
npm run dev
# Demo地址: http://localhost:5173/{feature}
```

### 2. 合并请求

```bash
# 代码已就绪，等待人工合并
git add .
git commit -m "feat({feature}): 完成Layer 5实现"
git merge {feature-branch}
```

### 3. 归档文档

```
docs/delivered/{feature}/
├── prd.md              # 原始PRD
├── contract.md         # 契约定义
├── red.md              # 红测试记录
├── green.md            # 绿代码记录
├── screenshots/        # 视觉对比截图
└── README.md           # 交付说明
```

### 4. 通知模板

**钉钉通知（前端Leader手动发送）：**
```
【{feature}功能已交付】

Demo地址: http://localhost:5173/{feature}
测试清单: 3/3 通过
视觉对比: 98% 相似度

请 @测试 @设计 验收
相关文档已归档到 docs/delivered/{feature}/
```

## 执行步骤

### 1. 最终验收

检查清单：
- [ ] 测试全绿（3/3）
- [ ] 视觉对比 > 95%
- [ ] a11y零违规
- [ ] TypeScript严格模式

### 2. 启动Demo

```bash
npm run dev
# 确认功能可正常访问
```

### 3. 生成归档文档

复制以下文件到 `docs/delivered/{feature}/`：
- `.ai/input/prd/{feature}.md`
- `.ai/output/{feature}/contract.md`
- `.ai/output/{feature}/red.md`
- `.ai/output/{feature}/green.md`
- `screenshots/` 目录

### 4. 输出交付报告

生成交付报告摘要，供人工确认后发送。

## 调用示例

```
用户: /skill layer6-delivery

AI: 开始执行Layer 6 - 交付。

正在执行：
1. 读取 .ai/output/login/green.md
2. 检查测试状态... ✅ 3/3通过
3. 检查视觉对比... ✅ 98%
4. 生成归档文档... ✅

---
交付准备完成！

Demo地址: http://localhost:5173/login
归档路径: docs/delivered/login/

请执行以下操作：
1. 启动Demo并验证: npm run dev
2. 合并代码: git merge login-feature
3. 发送钉钉通知（模板已准备）

交付报告已生成，请确认后发送。
---
```

## 完成标准

- [ ] 验收检查清单已通过
- [ ] Demo可正常运行
- [ ] 归档文档已复制到 `docs/delivered/{feature}/`
- [ ] 交付报告已生成
- [ ] 钉钉通知模板已准备
- [ ] 发送OSC通知：`交付准备完成 - {feature}`

## 注意事项

**人工确认环节：**
- 不自动合并代码 - 输出命令供人工执行
- 不自动发送钉钉消息 - 提供模板供人工发送
- Demo需人工验证

**事后验收：**
- 测试/设计团队事后验收
- 前端已自测完成

## 下一步

交付完成后，进入 **Layer 7: 知识沉淀** (`/skill layer7-knowledge-accumulation`)
