---
name: layer4-red-tests
description: Layer 4 - 红测试。基于contract.md生成Vitest测试，运行并确认全红，输出red.md记录。这是7层流程的第四层（TDD开始）。
---

## 何时使用此Skill

完成Layer 3后，使用此Skill：
- 基于测试契约生成Vitest测试代码
- 创建接口Mock（基于contract.md规则）
- 运行测试确认全红（预期失败）
- 输出red.md记录测试清单

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| 契约定义 | `.ai/output/{feature}/contract.md` | Layer 3输出 |

## 输出

### 1. 测试文件（全红）

```typescript
// src/features/{feature}/__tests__/{feature}.spec.ts
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import LoginForm from '../LoginForm.vue'

describe('LoginForm', () => {
  it('用例1: 正常流程 - 登录成功', async () => {
    // Given: 有效的用户名和密码
    // When: 用户提交表单
    // Then: 应显示登录成功，跳转首页
    expect(true).toBe(false) // 🔴 RED - 待实现
  })

  it('用例2: 异常流程 - 密码错误', async () => {
    // Given: 错误的密码
    // When: 用户提交表单
    // Then: 应显示错误提示
    expect(true).toBe(false) // 🔴 RED - 待实现
  })

  it('用例3: 边缘情况 - 空表单提交', async () => {
    // Given: 空表单
    // When: 用户点击提交
    // Then: 应触发验证错误
    expect(true).toBe(false) // 🔴 RED - 待实现
  })
})
```

### 2. Mock文件

```typescript
// src/mocks/{feature}.ts
export const mock{Feature}Api = {
  login: vi.fn(),
  logout: vi.fn(),
}

export const mock{Feature}Data = {
  validUser: { username: 'test', password: '123456' },
  invalidUser: { username: 'test', password: 'wrong' },
  token: 'mock-jwt-token',
}
```

### 3. red.md记录

输出到 `.ai/output/{feature}/red.md`：

```markdown
# {feature} - 红测试记录

## 测试运行结果
运行时间: {timestamp}
测试框架: Vitest + Vue Testing Library
状态: 🔴 全红（预期）

## 测试清单

### 用例1: 正常流程 - 登录成功
- [ ] 实现 LoginForm.vue 组件
- [ ] 实现表单验证逻辑
- [ ] 实现API调用
- [ ] 实现登录状态管理
- [ ] 测试通过

### 用例2: 异常流程 - 密码错误
- [ ] 实现错误处理逻辑
- [ ] 实现错误提示UI
- [ ] 测试通过

### 用例3: 边缘情况 - 空表单提交
- [ ] 实现表单必填验证
- [ ] 实现验证错误UI
- [ ] 测试通过

## 下一步
进入 Layer 5: 绿代码+视觉还原
```

## 执行步骤

### 1. 生成测试代码

基于contract.md的测试契约：
- 创建测试文件
- 编写3个测试用例
- 初始状态设为 `expect(true).toBe(false)`

### 2. 创建Mock

基于接口适配契约：
- 创建Mock函数
- 准备测试数据

### 3. 运行测试

```bash
npm test -- src/features/{feature}/__tests__/{feature}.spec.ts
```

确认输出：
- 3个测试全部失败（Expected true to be false）
- 这是预期行为（RED阶段）

### 4. 输出red.md

记录：
- 测试运行结果
- 测试清单（待完成的任务）

## 调用示例

```
用户: /skill layer4-red-tests

AI: 开始执行Layer 4 - 红测试。

正在执行：
1. 读取 .ai/output/login/contract.md
2. 生成测试代码
3. 创建Mock
4. 运行测试

输出：
- src/features/login/__tests__/login.spec.ts (3个测试，全红)
- src/mocks/login.ts
- .ai/output/login/red.md (测试清单)

请确认看到全红后，进入Layer 5逐条实现。
```

## 完成标准

- [ ] 测试文件已创建到 `src/features/{feature}/__tests__/{feature}.spec.ts`
- [ ] 3个测试用例全部失败（预期）
- [ ] Mock文件已创建到 `src/mocks/{feature}.ts`
- [ ] red.md 已生成到 `.ai/output/{feature}/red.md`
- [ ] 测试清单清晰，可逐条跟进
- [ ] 发送OSC通知：`红测试完成 - {feature}（3个测试全红）`

## 注意事项

**TDD原则：**
- 测试必须先红，再绿
- 每个测试对应一个具体需求点
- 测试即文档

**禁止操作：**
- 不自动修改业务代码
- 仅生成测试和Mock

## 下一步

红测试完成后，进入 **Layer 5: 绿代码+视觉还原** (`/skill layer5-green-implementation`)
