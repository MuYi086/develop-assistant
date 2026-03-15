---
name: layer2-requirement-analysis
description: Layer 2 - 需求结构化。解析输入文档，提取业务实体、页面结构、接口规格，生成结构化的raw.md。这是7层流程的第二层。
---

## 何时使用此Skill

完成Layer 1后，使用此Skill进行：
- 解析PRD提取业务实体
- 解析Pencil XML获取页面结构
- 解析API文档提取接口规格
- 检测术语冲突（对比glossary.md）

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| PRD | `.ai/input/prd/{feature}.md` | 产品需求文档 |
| Pencil XML | `.ai/input/pencil/{feature}/{feature}-content.xml` | 设计稿XML |
| API文档 | `.ai/input/api/{module}.md` | 接口文档 |
| 术语表 | `.ai/context/glossary.md` | 现有统一语言表 |

## 输出

输出到 `.ai/output/{feature}/raw.md`：

```markdown
# {feature} - 结构化需求

## 1. 业务实体
| 中文名 | 推荐英文名 | 类型 | 来源 |
|--------|-----------|------|------|
| 用户 | User | Entity | PRD |
| 登录凭证 | Credential | Value Object | PRD |

## 2. 页面结构（来自Pencil）
### Page: Login
- Container: login-form
  - Input: username
  - Input: password
  - Button: submit
  - Link: forgot-password

## 3. 接口规格（来自API）
### POST /api/auth/login
- 请求: { username: string, password: string }
- 响应: { token: string, user: User }
- 错误码: 401(认证失败), 422(参数错误)

## 4. 术语冲突检测
- [ ] 无冲突 / [ ] 有冲突（见下方说明）

## 5. 待确认问题
- [ ] 手机号登录是否支持？
- [ ] 密码强度要求？
```

## 执行步骤

### 1. 提取业务实体

从PRD中识别：
- 名词（用户、订单、商品...）
- 动词（创建、更新、删除...）
- 推荐英文命名

### 2. 解析Pencil XML

提取信息：
- 页面列表
- 元素层级（容器→子元素）
- 位置尺寸（x, y, width, height）
- 颜色、字体、样式

### 3. 提取接口规格

整理：
- 端点URL
- HTTP方法
- 请求/响应字段
- 错误码和状态

### 4. 术语冲突检测

对比 `.ai/context/glossary.md`：
- 检查同名不同义
- 检查同义不同名
- 标记需要人工确认的问题

## 调用示例

```
用户: /skill layer2-requirement-analysis

AI: 开始执行Layer 2 - 需求结构化。

正在处理：
1. 读取 .ai/input/prd/login.md
2. 读取 .ai/input/pencil/login/login-content.xml
3. 读取 .ai/input/api/auth.md
4. 对比 .ai/context/glossary.md

输出：.ai/output/login/raw.md

包含：
- 业务实体表（推荐命名）
- 页面结构解析
- 接口规格整理
- 术语冲突标记
- 待确认问题列表
```

## 完成标准

- [ ] raw.md 已生成到 `.ai/output/{feature}/raw.md`
- [ ] 业务实体已提取并推荐英文命名
- [ ] Pencil XML已解析，页面结构已提取
- [ ] API接口规格已整理
- [ ] 术语冲突已检测并标记
- [ ] 待确认问题列表已提供
- [ ] 发送OSC通知：`需求结构化完成 - {feature}`

## 注意事项

**禁止操作：**
- 不自动修改 glossary.md - 仅输出diff供确认
- 不创建或修改 src/ 下的代码文件

## 下一步

需求结构化完成后，进入 **Layer 3: 领域与契约** (`/skill layer3-contract-definition`)
