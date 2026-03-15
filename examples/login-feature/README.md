# Login Feature - Layer 1-7 完整示例

> 展示从PRD到交付的完整7层开发流程

---

## 概述

本示例展示如何使用7层AI驱动流程开发一个"登录功能"。

---

## Layer 1: 文档抓取

### 输入

#### PRD (来自钉钉)

```markdown
# 登录功能PRD

## 需求描述
用户需要能够通过用户名和密码登录系统。

## 功能点
1. 登录表单：用户名、密码输入
2. 登录按钮：提交表单
3. 忘记密码链接
4. 错误提示：用户名或密码错误

## 验收标准
- [ ] 输入验证：用户名必填，密码必填且至少6位
- [ ] 登录成功：跳转到首页
- [ ] 登录失败：显示错误提示
- [ ] 记住我：可选，保存登录状态
```

#### 设计稿 (来自Figma→Pencil)

```
.ai/input/pencil/login.pen
.ai/input/pencil/login-content.xml (解压后)
```

#### API文档 (来自Apipost)

```markdown
# 认证API

## POST /api/auth/login
- Request: { username: string, password: string, remember: boolean }
- Response: { token: string, user: User }
- Error: 401 Unauthorized
```

### 输出位置

```
.ai/input/
├── prd/login.md
├── api/auth.md
└── pencil/
    ├── login.pen
    └── login-content.xml
```

---

## Layer 2: 需求结构化

### 输出: raw.md

```markdown
# login - 结构化需求

## 1. 业务实体
| 中文名 | 推荐英文名 | 类型 | 来源 |
|--------|-----------|------|------|
| 用户 | User | Entity | PRD |
| 登录凭证 | Credential | Value Object | PRD |
| 令牌 | Token | Value Object | API |

## 2. 页面结构（来自Pencil）
### Page: Login
- Container: login-container (centered, max-width: 400px)
  - Card: login-card
    - Text: title ("登录", fontSize: 24px, bold)
    - Form: login-form
      - Input: username (placeholder: "用户名", prefix: User icon)
      - Input: password (placeholder: "密码", type: password, prefix: Lock icon)
      - Checkbox: remember (label: "记住我")
      - Button: submit ("登录", type: primary, full-width)
    - Link: forgot-password ("忘记密码？", color: primary)

## 3. 接口规格（来自API）
### POST /api/auth/login
- 请求: { username: string, password: string, remember?: boolean }
- 响应: { token: string, user: { id, username, email } }
- 错误码: 401(认证失败), 422(参数错误)

## 4. 术语冲突检测
- [x] 无冲突

## 5. 待确认问题
- [ ] 支持手机号登录吗？
- [ ] 记住我有效期多久？
```

---

## Layer 3: 领域与契约

### 输出: contract.md

```markdown
# login - 契约定义

## 术语表更新建议
| 业务词 | 英文名 | 含义 | 所属领域 |
|--------|--------|------|----------|
| 登录 | Login | 用户身份认证流程 | Auth |
| 凭证 | Credential | 用户名+密码 | Auth |
| 记住我 | RememberMe | 持久化登录状态 | Auth |

## 组件契约: LoginForm

### Props
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| onSuccess | (user: User) => void | 是 | 登录成功回调 |
| redirectTo | string | 否 | 登录成功后跳转路径，默认"/" |

### State（Pinia Store: authStore）
| 状态 | 类型 | 说明 |
|------|------|------|
| token | string \| null | JWT令牌 |
| user | User \| null | 当前用户 |
| isLoggedIn | boolean | 登录状态 |
| loading | boolean | 登录中状态 |

### 状态机
```
Idle → Submitting → Success → Redirect
  ↓         ↓
Error ←─ ValidationError
```

## 接口适配契约

### 后端 → 前端
- POST /api/auth/login
- 封装: authApi.login(credentials)
- Mock: src/mocks/auth.ts

## 测试契约

### 用例1: 正常流程
- 输入: valid credentials (username: "test", password: "123456")
- 预期: 登录成功，调用onSuccess，token保存到store

### 用例2: 异常流程 - 密码错误
- 输入: wrong password
- 预期: 显示错误提示"用户名或密码错误"，表单不清空

### 用例3: 边缘情况 - 空表单提交
- 输入: empty form
- 预期: 表单验证失败，显示"请输入用户名"和"请输入密码"
```

---

## Layer 4: 红测试

### 输出: src/features/login/__tests__/login.spec.ts

```typescript
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import LoginForm from '../LoginForm.vue'
import { mockAuthApi } from '@/mocks/auth'

describe('LoginForm', () => {
  const mockOnSuccess = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('用例1: 正常流程 - 登录成功', async () => {
    // Given: 有效的用户名和密码
    mockAuthApi.login.mockResolvedValue({
      token: 'mock-jwt-token',
      user: { id: 1, username: 'test', email: 'test@example.com' }
    })

    render(LoginForm, {
      props: { onSuccess: mockOnSuccess },
      global: { plugins: [createTestingPinia()] }
    })

    // When: 用户输入并提交表单
    await fireEvent.update(screen.getByPlaceholderText('用户名'), 'test')
    await fireEvent.update(screen.getByPlaceholderText('密码'), '123456')
    await fireEvent.click(screen.getByRole('button', { name: '登录' }))

    // Then: 应显示登录成功，调用onSuccess
    expect(true).toBe(false) // 🔴 RED - 待实现
  })

  it('用例2: 异常流程 - 密码错误', async () => {
    // Given: 错误的密码
    mockAuthApi.login.mockRejectedValue({ code: 401, message: '认证失败' })

    render(LoginForm, {
      props: { onSuccess: mockOnSuccess },
      global: { plugins: [createTestingPinia()] }
    })

    // When: 用户输入错误密码并提交
    await fireEvent.update(screen.getByPlaceholderText('用户名'), 'test')
    await fireEvent.update(screen.getByPlaceholderText('密码'), 'wrongpass')
    await fireEvent.click(screen.getByRole('button', { name: '登录' }))

    // Then: 应显示错误提示
    expect(true).toBe(false) // 🔴 RED - 待实现
  })

  it('用例3: 边缘情况 - 空表单提交', async () => {
    render(LoginForm, {
      props: { onSuccess: mockOnSuccess },
      global: { plugins: [createTestingPinia()] }
    })

    // When: 用户直接点击提交
    await fireEvent.click(screen.getByRole('button', { name: '登录' }))

    // Then: 应触发验证错误
    expect(true).toBe(false) // 🔴 RED - 待实现
  })
})
```

### 输出: red.md

```markdown
# login - 红测试记录

## 测试运行结果
- 状态: 🔴 全红（预期）
- 测试框架: Vitest + Vue Testing Library

## 测试清单

### 用例1: 正常流程 - 登录成功
- [ ] 实现 LoginForm.vue 组件
- [ ] 实现表单验证逻辑
- [ ] 实现API调用 (authApi.login)
- [ ] 实现登录状态管理 (authStore)
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

---

## Layer 5: 绿代码+视觉还原

### 输出: LoginForm.vue

```vue
<template>
  <el-card class="login-container max-w-md mx-auto mt-20">
    <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">登录</h2>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      @submit.prevent="handleSubmit"
      class="space-y-4"
    >
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="用户名"
          :prefix-icon="User"
          size="large"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="密码"
          :prefix-icon="Lock"
          size="large"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.remember">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="w-full"
          size="large"
          :loading="authStore.loading"
          @click="handleSubmit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="text-center mt-4">
      <el-link type="primary" @click="$emit('forgotPassword')">
        忘记密码？
      </el-link>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useAuthStore } from '@/stores/auth'

interface Props {
  redirectTo?: string
}

const props = withDefaults(defineProps<Props>(), {
  redirectTo: '/'
})

defineEmits<{
  forgotPassword: []
}>()

const router = useRouter()
const authStore = useAuthStore()
const formRef = ref<FormInstance>()

const form = reactive({
  username: '',
  password: '',
  remember: false
})

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少6位', trigger: 'blur' }
  ]
}

const handleSubmit = async () => {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        await authStore.login({
          username: form.username,
          password: form.password,
          remember: form.remember
        })
        ElMessage.success('登录成功')
        router.push(props.redirectTo)
      } catch (error) {
        ElMessage.error('用户名或密码错误')
      }
    }
  })
}
</script>
```

### 输出: green.md

```markdown
# login - 绿代码+视觉还原记录

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
| Container | el-card | 100% |
| Title | h2.text-2xl | 100% |
| Username Input | ElInput | 100% |
| Password Input | ElInput (show-password) | 100% |
| Remember | ElCheckbox | 100% |
| Submit Button | ElButton (primary) | 100% |
| Forgot Link | ElLink | 100% |

### 样式映射
| Pencil颜色 | Tailwind类 |
|------------|-----------|
| #409EFF | text-primary, bg-primary |
| #303133 | text-gray-800 |
| #DCDFE6 | border-gray-300 |

### 视觉对比
- 截图路径: `screenshots/login-comparison.png`
- 相似度: 98%
- 状态: ✅ 通过

## 自检清单
- [x] 测试全绿（3/3）
- [x] 视觉对比 > 95%
- [x] a11y零违规
- [x] TypeScript无any
```

---

## Layer 6: 交付

### 输出: 归档文档

```
docs/delivered/login/
├── prd.md              # 原始PRD
├── contract.md         # 契约定义
├── red.md              # 红测试记录
├── green.md            # 绿代码记录
├── screenshots/        # 视觉对比截图
└── README.md           # 交付说明
```

### 钉钉通知

```
【登录功能已交付】

Demo地址: http://localhost:5173/login
测试清单: 3/3 通过
视觉对比: 98% 相似度

请 @测试 @设计 验收
相关文档已归档到 docs/delivered/login/
```

---

## Layer 7: 知识沉淀

### 输出: 优化项

1. **Layer Skills优化**
   - layer3-contract-definition: 新增表单验证契约模板
   - layer5-green-implementation: 优化视觉对比步骤

2. **术语归档**
   - 归档术语: 0个
   - 新增术语: 3个 (Login, Credential, RememberMe)

3. **自定义Skills沉淀**
   - 创建 `.ai/skills/form-validation/SKILL.md`

4. **Sprint复用率**
   - 术语复用率: N/A (首功能)
   - 代码复用率: N/A (首功能)

---

## 总结

| Layer | 耗时 | 产出 |
|-------|------|------|
| L1 | 15min | 原始文档 |
| L2 | 10min | raw.md |
| L3 | 15min | contract.md + glossary更新 |
| L4 | 15min | 3个红测试 |
| L5 | 2h | 实现代码 + 98%视觉还原 |
| L6 | 15min | Demo + 归档 |
| L7 | 30min | 优化Prompt + 沉淀Skill |

**总计**: 约3小时完成完整登录功能开发

---

*示例日期: 2026-03-15*
