---
name: layer3-contract-definition
description: Layer 3 - 领域与契约。基于raw.md更新术语表，生成组件契约、接口适配规则、测试契约。这是7层流程的第三层。
---

## 何时使用此Skill

完成Layer 2后，使用此Skill：
- 更新统一语言表（glossary.md）
- 生成组件契约（结构+状态机）
- 定义接口适配规则（后端MD→前端Mock）
- 制定测试契约（3用例：正常/异常/边缘）

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| 结构化需求 | `.ai/output/{feature}/raw.md` | Layer 2输出 |
| 术语表 | `.ai/context/glossary.md` | 现有统一语言表 |

## 输出

### 1. 更新术语表（建议diff）

输出glossary.md更新建议：

```markdown
# 统一语言表 (Glossary)

## {feature} 相关术语
| 业务词 | 英文名 | 含义 | 所属领域 |
|--------|--------|------|----------|
| 登录 | Login | 用户身份认证流程 | Auth |
| 凭证 | Credential | 用户名+密码或Token | Auth |

## 命名约定
- 组件: PascalCase (LoginForm)
- 函数: camelCase (handleSubmit)
- 常量: SCREAMING_SNAKE_CASE (MAX_RETRY_COUNT)
- 类型: PascalCase + 后缀 (LoginFormProps)
```

### 2. 组件契约

输出到 `.ai/output/{feature}/contract.md`：

```markdown
## 组件契约: LoginForm

### Props
| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| onSubmit | (values: LoginValues) => Promise<void> | 是 | 提交回调 |
| loading | boolean | 否 | 加载状态 |

### State（Pinia Store）
| 状态 | 类型 | 说明 |
|------|------|------|
| isLoggedIn | boolean | 登录状态 |
| user | User \| null | 当前用户 |

### 状态机
```
Idle → Validating → Submitting → Success
  ↓         ↓           ↓
Error ←─── Error ←── Error
```
```

### 3. 接口适配契约

```markdown
## 接口适配: Auth API

### 后端定义
- POST /api/auth/login
- Request: { username: string, password: string }
- Response: { code: number, data: { token: string } }

### 前端适配
- 封装: authApi.login(credentials)
- Mock: src/mocks/auth.ts
- 错误转换: HTTP 401 → AuthError.UNAUTHORIZED
```

### 4. 测试契约

```markdown
## 测试契约

### 用例1: 正常流程
- 输入: valid credentials
- 预期: 登录成功，跳转到首页

### 用例2: 异常流程 - 密码错误
- 输入: wrong password
- 预期: 显示错误提示，不清空表单

### 用例3: 边缘情况 - 空表单提交
- 输入: empty form
- 预期: 表单验证失败，不调用API
```

## 执行步骤

### 1. 更新术语表

- 基于raw.md提取的业务实体
- 对比现有glossary.md
- 输出diff供人工确认

### 2. 生成组件契约

- 定义Props接口
- 设计State结构
- 绘制状态机

### 3. 定义接口适配

- 分析后端API结构
- 设计前端封装层
- 规划Mock规则

### 4. 制定测试契约

- 正常流程用例
- 异常流程用例
- 边缘情况用例

## 调用示例

```
用户: /skill layer3-contract-definition

AI: 开始执行Layer 3 - 领域与契约。

正在处理：
1. 分析 .ai/output/login/raw.md
2. 对比 .ai/context/glossary.md
3. 生成契约定义

输出：
- glossary.md 更新建议（diff）
- .ai/output/login/contract.md
  ├── 组件契约
  ├── 接口适配契约
  └── 测试契约（3用例）

请确认术语表更新后进入下一步。
```

## 完成标准

- [ ] contract.md 已生成到 `.ai/output/{feature}/contract.md`
- [ ] glossary.md 更新建议已输出（不自动修改）
- [ ] 组件契约完整（Props、State、状态机）
- [ ] 接口适配契约已定义
- [ ] 测试契约3用例已制定
- [ ] 发送OSC通知：`契约定义完成 - {feature}`

## 注意事项

**禁止操作：**
- 不自动修改 glossary.md - 仅输出diff供人工确认
- 不在业务项目创建CLAUDE.md

## 下一步

契约定义完成后，进入 **Layer 4: 红测试** (`/skill layer4-red-tests`)
