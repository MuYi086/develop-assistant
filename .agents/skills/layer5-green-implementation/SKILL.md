---
name: layer5-green-implementation
description: Layer 5 - 绿代码+视觉还原。逐条让测试变绿，同步进行视觉还原，每步触发通知。这是7层流程的第五层（核心实现）。
---

## 何时使用此Skill

完成Layer 4后，使用此Skill：
- 逐条实现让测试变绿（TDD绿阶段）
- 根据Pencil设计稿进行视觉还原
- 坐标转换：Pencil像素 → Vue flex/grid
- 样式映射：Pencil颜色 → Tailwind
- 截图对比输出相似度

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| red.md | `.ai/output/{feature}/red.md` | Layer 4输出（测试清单） |
| contract.md | `.ai/output/{feature}/contract.md` | Layer 3输出（契约定义） |
| Pencil XML | `.ai/input/pencil/{feature}/{feature}-content.xml` | 设计稿 |

## 输出

### 1. 实现代码

```vue
<!-- src/features/{feature}/{Component}.vue -->
<template>
  <!-- 根据Pencil XML生成的Vue代码 -->
</template>

<script setup lang="ts">
// 根据contract.md实现的逻辑
</script>
```

### 2. green.md记录

输出到 `.ai/output/{feature}/green.md`：

```markdown
# {feature} - 绿代码+视觉还原记录

## 实现进度

### 用例1: 正常流程 - 登录成功 ✅
- [x] 实现 LoginForm.vue 组件
- [x] 实现表单验证逻辑
- [x] 实现API调用
- [x] 实现登录状态管理
- [x] 测试通过 ✅

### 用例2: 异常流程 - 密码错误 ✅
- [x] 实现错误处理逻辑
- [x] 实现错误提示UI
- [x] 测试通过 ✅

### 用例3: 边缘情况 - 空表单提交 ✅
- [x] 实现表单必填验证
- [x] 实现验证错误UI
- [x] 测试通过 ✅

## 视觉还原

### Pencil → Vue 映射
| Pencil元素 | Vue实现 | 位置精度 |
|------------|---------|----------|
| Login容器 | div.login-container | 100% |
| 用户名输入 | ElInput | 100% |
| 密码输入 | ElInput | 100% |
| 提交按钮 | ElButton | 100% |

### 样式映射
| Pencil颜色 | Tailwind类 |
|------------|-----------|
| #409EFF | bg-blue-500 |
| #F56C6C | bg-red-500 |

### 视觉对比
- 截图路径: `screenshots/{feature}-comparison.png`
- 相似度: 98%
- 状态: ✅ 通过

## 自检清单
- [ ] 测试全绿（3/3）
- [ ] 视觉对比 > 95%
- [ ] a11y零违规
- [ ] TypeScript无any
```

## 执行步骤

### 1. 逐条实现（增量式）

按red.md测试清单逐条实现：
- 实现1个测试 → 运行测试 → 确认变绿 → 提交代码
- 发送OSC通知：`用例X已完成 ✅`

### 2. 视觉还原

#### 2.1 坐标转换
```
Pencil: x=100, y=200, width=300, height=40
↓
Vue: flex/grid布局，响应式适配
```

#### 2.2 样式映射
```
Pencil颜色 → Tailwind closest
#409EFF → blue-500
#F56C6C → red-500
```

#### 2.3 组件映射
```
Pencil元素 → Element Plus组件
Button → ElButton
Input → ElInput
Card → ElCard
```

### 3. 截图对比

```bash
# 使用Playwright截图
npx playwright screenshot http://localhost:5173/login screenshots/{feature}-actual.png

# 对比设计稿
# 输出相似度: 98%
```

### 4. 完成green.md

- 记录实现进度
- 记录视觉还原详情
- 填写自检清单

## 调用示例

```
用户: /skill layer5-green-implementation

AI: 开始执行Layer 5 - 绿代码+视觉还原。

基于 .ai/output/login/red.md 逐条实现：

---
步骤 1/6: 实现 LoginForm.vue 组件框架
正在生成...
✅ 代码已生成
运行测试... ✅ 通过
发送通知... ✅
---

步骤 2/6: 实现表单验证逻辑
...

---
视觉还原阶段 ---

正在解析Pencil XML...
生成坐标映射...
生成Tailwind样式...

截图对比结果：相似度 98% ✅

输出：.ai/output/login/green.md
```

## 完成标准

- [ ] 所有测试已变绿（3/3）
- [ ] Vue组件已实现
- [ ] Store状态管理已实现
- [ ] API封装已实现
- [ ] 视觉对比相似度 > 95%
- [ ] green.md 已生成
- [ ] 自检清单已填写
- [ ] 发送OSC通知：`绿代码完成 - {feature}（全部测试通过）`

## 注意事项

**增量开发：**
- 每让1个测试变绿，提交1次代码
- 每步触发通知
- 保持代码可运行

**视觉还原：**
- 使用Element Plus组件
- Tailwind辅助样式
- 响应式优先

**禁止操作：**
- 不自动提交代码 - 输出git diff供确认
- 不自动创建CLAUDE.md

## 下一步

绿代码完成后，进入 **Layer 6: 交付** (`/skill layer6-delivery`)
