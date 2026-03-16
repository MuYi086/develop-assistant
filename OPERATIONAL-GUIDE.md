# 前端Vibe Coding 操作指南

> 本指南详细描述如何从零开始执行7层开发流程，以点餐页面（testData.pen）为例，逐步验证并优化流程。

---

## 目录

1. [Phase 0: 环境准备](#phase-0-环境准备)
2. [Phase 1: 辅助项目引入](#phase-1-辅助项目引入)
3. [Phase 2: 业务项目初始化](#phase-2-业务项目初始化)
4. [Phase 3: Layer 1 - 文档抓取](#phase-3-layer-1---文档抓取)
5. [Phase 4: Layer 2 - 需求结构化](#phase-4-layer-2---需求结构化)
6. [Phase 5: Layer 3 - 领域与契约](#phase-5-layer-3---领域与契约)
7. [Phase 6: Layer 4 - 红测试](#phase-6-layer-4---红测试)
8. [Phase 7: Layer 5 - 绿代码+视觉还原](#phase-7-layer-5---绿代码视觉还原)
9. [Phase 8: Layer 6 - 交付](#phase-8-layer-6---交付)
10. [Phase 9: Layer 7 - 知识沉淀](#phase-9-layer-7---知识沉淀)
11. [常见问题与优化建议](#常见问题与优化建议)

---

## Phase 0: 环境准备

### 0.1 检查清单

| 项目 | 版本要求 | 检查命令 | 状态 |
|------|----------|----------|------|
| Node.js | ≥18 | `node --version` | ⬜ |
| npm/pnpm | ≥8 | `npm --version` | ⬜ |
| Claude CLI | 最新 | `claude --version` | ⬜ |
| VSCode | 最新 | 检查关于页面 | ⬜ |
| VSCode扩展 | Terminal Notification | 扩展商店搜索安装 | ⬜ |

### 0.2 安装 VSCode Terminal Notification 扩展

```bash
# 在VSCode中按 Ctrl+P (Cmd+P on Mac)，粘贴：
ext install fabiospampinato.vscode-terminal-notifier
```

验证安装：
```bash
echo -e "\033]1337;SetNotification=测试通知\007"
# 应该看到VSCode右上角弹出通知
```

### 0.3 配置 Shell 别名

**Linux/Mac (Bash/Zsh):**

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
cat >> ~/.bashrc << 'EOF'

# Claude AI 开发助手
alias claude-ai='claude --add-dir ~/develop-assistant'
alias claude-ai-dev='claude --add-dir ~/develop-assistant --verbose'

# 辅助项目快捷命令
alias dev-assist='cd ~/develop-assistant'
EOF

source ~/.bashrc
```

**Windows (CMD):**

```cmd
:: 创建快捷命令（使用 doskey，临时生效）
doskey claude-ai=claude --add-dir %USERPROFILE%\develop-assistant $*
doskey claude-ai-dev=claude --add-dir %USERPROFILE%\develop-assistant --verbose $*
doskey dev-assist=cd /d %USERPROFILE%\develop-assistant

:: 或添加到 PATH 环境变量（推荐，永久生效）
:: 1. 将 scripts 目录添加到用户 PATH
setx PATH "%PATH%;%USERPROFILE%\develop-assistant\scripts"
:: 2. 重启终端后，直接使用 claude-ai.cmd
```

**Windows (PowerShell):**

```powershell
# 添加到 PowerShell 配置文件
$profilePath = $PROFILE
if (!(Test-Path $profilePath)) {
    New-Item -ItemType File -Path $profilePath -Force
}

Add-Content $profilePath @"
# Claude AI 开发助手
function claude-ai { & claude --add-dir $env:USERPROFILE\develop-assistant @args }
function claude-ai-dev { & claude --add-dir $env:USERPROFILE\develop-assistant --verbose @args }
function dev-assist { Set-Location $env:USERPROFILE\develop-assistant }
"@

# 重新加载配置
. $profilePath
```

**Windows (Git Bash):**

```bash
# Git Bash 可以使用 Linux 风格的别名
echo 'alias claude-ai="claude --add-dir /d/github/develop-assistant"' >> ~/.bashrc
echo 'alias claude-ai-dev="claude --add-dir /d/github/develop-assistant --verbose"' >> ~/.bashrc
echo 'alias dev-assist="cd /d/github/develop-assistant"' >> ~/.bashrc
source ~/.bashrc
```

### 0.4 验证辅助项目路径

**Linux/Mac:**
```bash
# 确认 develop-assistant 目录存在
ls -la ~/develop-assistant/.claude/settings.json
ls -la ~/develop-assistant/scripts/pencil-parser.js
ls -la ~/develop-assistant/testData.pen
```

**Windows (CMD):**
```cmd
:: 确认 develop-assistant 目录存在
dir "%USERPROFILE%\develop-assistant\.claude\settings.json"
dir "%USERPROFILE%\develop-assistant\scripts\pencil-parser.js"
dir "%USERPROFILE%\develop-assistant\testData.pen"
```

**Windows (PowerShell):**
```powershell
# 确认 develop-assistant 目录存在
Test-Path "$env:USERPROFILE\develop-assistant\.claude\settings.json"
Test-Path "$env:USERPROFILE\develop-assistant\scripts\pencil-parser.js"
Test-Path "$env:USERPROFILE\develop-assistant\testData.pen"
```

**预期输出**：
- `.claude/settings.json` 存在（包含25个skills配置）
- `scripts/pencil-parser.js` 存在（Pencil解析器）
- `testData.pen` 存在（示例设计稿）

---

## Phase 1: 辅助项目引入

### 1.1 创建测试业务项目

```bash
# 创建测试项目目录
mkdir -p ~/vibe-coding-demo
cd ~/vibe-coding-demo

# 初始化 Vue 3 + Vite 项目
npm create vue@latest . -- --typescript --pinia --router --vitest

# 安装依赖
npm install

# 安装 Element Plus
npm install element-plus @element-plus/icons-vue

# 安装 Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 1.2 配置 Tailwind CSS

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#202020',
        'bg-gray': '#ebebeb',
        'text-primary': '#222222',
        'text-secondary': '#444444',
        'text-muted': '#999999',
        'danger': '#e80c00',
        'accent': '#6367ff',
        'success': '#00a384',
        'warning': '#ffe866',
        'tag-danger': '#ffe9e8',
        'tag-accent': '#e8e8ff',
        'tag-success': '#d6f0eb',
      },
      fontFamily: {
        'mi-sans': ['MiSans', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

```css
/* src/style.css 添加 */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 1.3 启动带辅助项目的 Claude

**Linux/Mac:**
```bash
cd ~/vibe-coding-demo
claude-ai
```

**Windows (CMD):**
```cmd
cd C:\Users\%USERNAME%\vibe-coding-demo
:: 如果已添加到 PATH
claude-ai.cmd
:: 或直接使用完整路径
"%USERPROFILE%\develop-assistant\scripts\claude-ai.cmd"
```

**Windows (Git Bash):**
```bash
cd ~/vibe-coding-demo
# 可以使用 Linux 脚本
~/develop-assistant/scripts/claude-ai.sh
# 或使用 Windows 脚本
/c/Users/$USERNAME/develop-assistant/scripts/claude-ai.cmd
```

### 1.4 验证 Skills 加载

在 Claude 中执行：

```
/skills list
```

**预期输出**：显示25个skills，包括：
- vue-best-practices
- element-plus-vue3
- layer1-document-capture ~ layer7-knowledge-accumulation
- pencil-json-parser
- pencil-to-vue
- pencil-to-tailwind
- visual-regression-testing

### 1.5 测试 Skill 调用

```
/element-plus-vue3
```

**预期输出**：显示 Element Plus + Vue 3 技能说明文档

---

## Phase 2: 业务项目初始化

### 2.1 创建 .ai/ 目录结构

在 Claude 中执行（或使用 Git Bash）：

```bash
# 创建目录结构
mkdir -p .ai/input/{prd,api,pencil}
mkdir -p .ai/output/order-page
mkdir -p .ai/context
mkdir -p .ai/skills

# 创建初始文件
touch .ai/context/glossary.md
touch .ai/input/prd/order-page-prd.md
touch .ai/input/api/order-api.md

# 复制设计稿
cp ~/develop-assistant/testData.pen .ai/input/pencil/order-page.pen
```

**Windows (CMD) 等效命令：**
```cmd
:: 创建目录结构
mkdir .ai\input\prd
mkdir .ai\input\api
mkdir .ai\input\pencil
mkdir .ai\output\order-page
mkdir .ai\context
mkdir .ai\skills

:: 创建初始文件
type nul > .ai\context\glossary.md
type nul > .ai\input\prd\order-page-prd.md
type nul > .ai\input\api\order-api.md

:: 复制设计稿
copy "%USERPROFILE%\develop-assistant\testData.pen" .ai\input\pencil\order-page.pen
```

### 2.2 添加到 .gitignore

```bash
echo ".ai/" >> .gitignore
echo "*.local" >> .gitignore
echo "screenshots/" >> .gitignore
```

**Windows (CMD):**
```cmd
echo .ai/ >> .gitignore
echo *.local >> .gitignore
echo screenshots/ >> .gitignore
```

### 2.3 初始化术语表

编辑 `.ai/context/glossary.md`：

```markdown
# 统一语言表（术语库）

## 当前项目术语

| 术语 | 英文 | 定义 | 使用场景 |
|------|------|------|----------|
| 商品 | Product | 可购买的餐饮项目 | 点餐页面 |
| 套餐 | Set Meal | 包含多个商品的组合 | 商品标签 |
| 已售罄 | Sold Out | 商品库存为0 | 商品状态 |
| 加购 | Add to Cart | 将商品加入购物车 | 用户操作 |
| 购物车 | Cart | 存放已选商品的容器 | 订单流程 |

## 命名规范

- 组件名：PascalCase（如 `FoodCard.vue`）
- 变量名：camelCase（如 `productList`）
- 常量名：SCREAMING_SNAKE_CASE（如 `MAX_CART_ITEMS`）
- 文件路径：kebab-case（如 `order-page/`）
```

### 2.4 准备 PRD 文档

编辑 `.ai/input/prd/order-page-prd.md`：

```markdown
# 点餐页面 PRD

## 功能需求

### 1. 商品展示
- 网格布局展示商品卡片
- 每个卡片包含：图片、名称、价格、标签
- 标签类型：套餐（紫色）、已售罄（红色）

### 2. 商品卡片规格
- 尺寸：136x122px
- 圆角：8px
- 背景：白色
- 图片区域：136x86px

### 3. 价格标签
- 位置：图片右下角
- 样式：黑色半透明背景 + 白色文字
- 格式：¥XX.X

### 4. 交互
- 点击商品卡片进入详情（本版本仅展示）
- 已售罄商品置灰显示

## 设计要求

- 深色背景（#202020）
- MiSans 字体
- 灰色页面背景（#ebebeb）
```

### 2.5 验证目录结构

```bash
tree .ai -L 3
```

**预期输出**：
```
.ai/
├── context
│   └── glossary.md
├── input
│   ├── api
│   │   └── order-api.md
│   ├── pencil
│   │   └── order-page.pen
│   └── prd
│       └── order-page-prd.md
├── output
│   └── order-page
└── skills
```

---

## Phase 3: Layer 1 - 文档抓取

### 3.1 执行 Layer 1 Skill

在 Claude 中执行：

```
/layer1-document-capture
```

### 3.2 手动收集文档

如果自动化抓取不可用，手动执行：

```bash
# 1. PRD 文档（假设从钉钉下载）
cp ~/Downloads/点餐页面PRD.md .ai/input/prd/order-page-prd.md

# 2. API 文档（假设从 Apipost 导出）
cp ~/Downloads/order-api.md .ai/input/api/order-api.md

# 3. 设计稿（已复制）
ls -la .ai/input/pencil/order-page.pen
```

### 3.3 验证输入文档完整性

检查清单：

| 文档类型 | 文件路径 | 检查内容 | 状态 |
|----------|----------|----------|------|
| PRD | `.ai/input/prd/order-page-prd.md` | 功能需求、页面规格 | ⬜ |
| API | `.ai/input/api/order-api.md` | 接口定义、数据格式 | ⬜ |
| 设计稿 | `.ai/input/pencil/order-page.pen` | Pencil JSON格式 | ⬜ |

### 3.4 解析设计稿

```bash
# 使用 pencil-parser 解析设计稿
node ~/develop-assistant/scripts/pencil-parser.js \
  .ai/input/pencil/order-page.pen \
  .ai/output/order-page/pencil-analysis.json
```

查看解析结果：

```bash
cat .ai/output/order-page/pencil-analysis.json | head -100
```

**预期输出**：包含元素统计（frames, rectangles, texts等）、颜色列表、字体信息

---

## Phase 4: Layer 2 - 需求结构化

### 4.1 执行 Layer 2 Skill

在 Claude 中执行：

```
/layer2-requirement-analysis
```

输入提示：
```
功能：点餐页面
输入文件：
- PRD: .ai/input/prd/order-page-prd.md
- 设计稿分析: .ai/output/order-page/pencil-analysis.json

请生成 raw.md 结构化需求文档
```

### 4.2 手动生成 raw.md

如果自动化不可用，手动创建 `.ai/output/order-page/raw.md`：

```markdown
# 点餐页面 - 结构化需求

## 功能概述
实现一个点餐页面，网格展示商品卡片，支持查看商品信息（名称、价格、标签）。

## 用户故事

### US-001: 浏览商品
作为顾客，我希望看到所有可购买的商品，以便选择想吃的食物。

**验收标准**：
- [ ] 页面以网格形式展示商品卡片
- [ ] 每个卡片显示商品图片、名称、价格
- [ ] 卡片尺寸为 136x122px，圆角 8px

### US-002: 识别商品标签
作为顾客，我希望看到商品是否有特殊标记（套餐、已售罄），以便做出购买决策。

**验收标准**：
- [ ] 套餐商品显示紫色"套餐"标签
- [ ] 已售罄商品显示红色"已售罄"标签
- [ ] 标签位置：商品卡片左上角

### US-003: 查看价格
作为顾客，我希望清楚看到商品价格，以便控制预算。

**验收标准**：
- [ ] 价格显示在商品图片右下角
- [ ] 格式为 ¥XX.X
- [ ] 样式：黑色半透明背景 + 白色文字

## 页面规格

### 布局
- 页面背景：#202020（深色）
- 内容区域背景：#ebebeb（灰色）
- 内边距：40px
- 卡片间距：6px

### 商品卡片结构
```
FoodCard (136x122px, bg-white, rounded-lg)
├── Tag (absolute, top-1.5, left-1.5) - 可选
├── Image (136x86px, rounded-t-lg)
├── PriceTag (absolute, bottom-13.5, right-1)
└── Name (px-1.5, pt-1, text-[15px], text-[#222222])
```

### 数据需求

**商品对象**：
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: 'set' | 'soldout';
  tagText?: string;
}
```

## 待澄清问题

1. 是否需要实现点击跳转详情页？（当前版本仅展示）
2. 已售罄商品是否可点击？
3. 图片加载失败时的占位图？
```

### 4.3 验证 raw.md

检查清单：

- [ ] 包含用户故事（User Stories）
- [ ] 包含验收标准（Acceptance Criteria）
- [ ] 包含页面规格（布局、颜色、尺寸）
- [ ] 包含数据类型定义
- [ ] 包含待澄清问题

---

## Phase 5: Layer 3 - 领域与契约

### 5.1 执行 Layer 3 Skill

在 Claude 中执行：

```
/layer3-contract-definition
```

输入提示：
```
功能：点餐页面
输入：.ai/output/order-page/raw.md
输出：contract.md + 更新 glossary.md
```

### 5.2 手动生成 contract.md

创建 `.ai/output/order-page/contract.md`：

```markdown
# 点餐页面 - 组件契约

## 组件清单

| 组件名 | 类型 | 文件路径 | 说明 |
|--------|------|----------|------|
| OrderPage | Page | `src/views/order/OrderPage.vue` | 点餐页面主体 |
| FoodCard | Component | `src/components/order/FoodCard.vue` | 商品卡片 |
| PriceTag | Component | `src/components/order/PriceTag.vue` | 价格标签 |
| ProductTag | Component | `src/components/order/ProductTag.vue` | 商品标签 |

## Props 契约

### FoodCard

```typescript
interface FoodCardProps {
  /** 商品ID */
  id: string;
  /** 商品名称 */
  name: string;
  /** 商品价格（元） */
  price: number;
  /** 商品图片URL */
  image: string;
  /** 标签类型 */
  tag?: 'set' | 'soldout';
  /** 标签文本 */
  tagText?: string;
}
```

### PriceTag

```typescript
interface PriceTagProps {
  /** 价格（元） */
  price: number;
}
```

### ProductTag

```typescript
interface ProductTagProps {
  /** 标签类型 */
  type: 'set' | 'soldout';
  /** 标签文本 */
  text: string;
}
```

## State 契约

### OrderPage

```typescript
interface OrderPageState {
  /** 商品列表 */
  products: Product[];
  /** 加载状态 */
  loading: boolean;
  /** 错误信息 */
  error: string | null;
}
```

## Event 契约

| 组件 | 事件名 | 参数 | 说明 |
|------|--------|------|------|
| FoodCard | click | `id: string` | 点击商品卡片 |
| FoodCard | add-to-cart | `id: string` | 点击加购按钮 |

## API 契约

### 获取商品列表

```typescript
// GET /api/products
interface GetProductsResponse {
  code: number;
  data: Product[];
  message: string;
}
```

## 样式契约

### 颜色规范

| 用途 | 变量名 | 色值 | Tailwind类 |
|------|--------|------|------------|
| 页面背景 | --bg-page | #202020 | bg-bg-dark |
| 内容背景 | --bg-content | #ebebeb | bg-bg-gray |
| 卡片背景 | --bg-card | #ffffff | bg-white |
| 主文本 | --text-primary | #222222 | text-text-primary |
| 套餐标签背景 | --tag-set-bg | #e8e8ff | bg-tag-accent |
| 套餐标签文字 | --tag-set-text | #6367ff | text-accent |
| 售罄标签背景 | --tag-soldout-bg | #ffe9e8 | bg-tag-danger |
| 售罄标签文字 | --tag-soldout-text | #e80c00 | text-danger |

### 尺寸规范

| 元素 | 宽度 | 高度 | 圆角 |
|------|------|------|------|
| 商品卡片 | 136px | 122px | 8px |
| 商品图片 | 136px | 86px | 8px (上) |
| 标签 | auto | auto | 4px |
| 价格标签 | auto | 20px | 4px |

### 字体规范

| 元素 | 字号 | 字重 | 行高 |
|------|------|------|------|
| 商品名称 | 15px | 400 | 1.5 |
| 价格 | 12px | 400 | 1 |
| 标签 | 12px | 400 | 1 |
```

### 5.3 更新 glossary.md

将契约中定义的新术语添加到 `.ai/context/glossary.md`：

```markdown
## 新增术语

| 术语 | 英文 | 定义 | 使用场景 |
|------|------|------|----------|
| 商品卡片 | FoodCard | 展示单个商品的UI组件 | 点餐页面 |
| 价格标签 | PriceTag | 显示价格的UI组件 | 商品卡片 |
| 商品标签 | ProductTag | 显示商品状态的标签组件 | 商品卡片 |
```

### 5.4 验证 contract.md

检查清单：

- [ ] 组件清单完整
- [ ] Props 定义包含类型和注释
- [ ] State 定义清晰
- [ ] Event 列表完整
- [ ] API 契约明确
- [ ] 样式规范（颜色、尺寸、字体）

---

## Phase 6: Layer 4 - 红测试

### 6.1 执行 Layer 4 Skill

在 Claude 中执行：

```
/layer4-red-tests
```

输入提示：
```
功能：点餐页面
契约：.ai/output/order-page/contract.md
输出：测试文件 + red.md
```

### 6.2 手动创建测试文件

创建 `src/components/order/__tests__/FoodCard.spec.ts`：

```typescript
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FoodCard from '../FoodCard.vue'

describe('FoodCard', () => {
  const baseProps = {
    id: '1',
    name: '爽脆榨菜肉丝',
    price: 25.8,
    image: 'https://example.com/image.jpg',
  }

  it('应该正确渲染商品名称', () => {
    const wrapper = mount(FoodCard, { props: baseProps })
    expect(wrapper.text()).toContain('爽脆榨菜肉丝')
  })

  it('应该正确渲染价格', () => {
    const wrapper = mount(FoodCard, { props: baseProps })
    expect(wrapper.text()).toContain('¥25.8')
  })

  it('应该渲染商品图片', () => {
    const wrapper = mount(FoodCard, { props: baseProps })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://example.com/image.jpg')
  })

  it('套餐商品应该显示套餐标签', () => {
    const wrapper = mount(FoodCard, {
      props: {
        ...baseProps,
        tag: 'set',
        tagText: '套餐',
      },
    })
    expect(wrapper.text()).toContain('套餐')
  })

  it('已售罄商品应该显示已售罄标签', () => {
    const wrapper = mount(FoodCard, {
      props: {
        ...baseProps,
        tag: 'soldout',
        tagText: '已售罄',
      },
    })
    expect(wrapper.text()).toContain('已售罄')
  })

  it('点击卡片应该触发click事件', async () => {
    const wrapper = mount(FoodCard, { props: baseProps })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0]).toEqual(['1'])
  })
})
```

### 6.3 运行红测试

```bash
npm run test:unit -- src/components/order/__tests__/FoodCard.spec.ts
```

**预期输出**：测试失败（组件不存在）

```
FAIL  src/components/order/__tests__/FoodCard.spec.ts
FoodCard > 应该正确渲染商品名称
  Error: Failed to resolve import "../FoodCard.vue"
```

### 6.4 创建 red.md

创建 `.ai/output/order-page/red.md`：

```markdown
# Layer 4 - 红测试记录

## 测试执行时间
2026-03-15 10:00:00

## 测试文件清单

| 测试文件 | 测试数 | 状态 |
|----------|--------|------|
| FoodCard.spec.ts | 6 | ❌ 全红 |
| PriceTag.spec.ts | 2 | ❌ 全红 |
| ProductTag.spec.ts | 3 | ❌ 全红 |

## 失败原因

### FoodCard.spec.ts
- 组件文件不存在：src/components/order/FoodCard.vue
- 组件未定义 Props

### PriceTag.spec.ts
- 组件文件不存在：src/components/order/PriceTag.vue

### ProductTag.spec.ts
- 组件文件不存在：src/components/order/ProductTag.vue

## 下一步
进入 Layer 5，实现组件使测试变绿
```

### 6.5 验证红测试

检查清单：

- [ ] 测试文件创建在正确的位置
- [ ] 测试覆盖所有 Props
- [ ] 测试覆盖主要交互
- [ ] 运行测试显示失败
- [ ] red.md 记录完整

---

## Phase 7: Layer 5 - 绿代码+视觉还原

### 7.1 执行 Pencil-to-Tailwind

在 Claude 中执行：

```
/pencil-to-tailwind
```

输入提示：
```
设计稿：.ai/input/pencil/order-page.pen
输出：Tailwind配置建议
```

或者手动运行解析器：

```bash
node ~/develop-assistant/scripts/pencil-parser.js \
  .ai/input/pencil/order-page.pen \
  .ai/output/order-page/tailwind-config.json
```

### 7.2 执行 Pencil-to-Vue

在 Claude 中执行：

```
/pencil-to-vue
```

输入提示：
```
设计稿：.ai/input/pencil/order-page.pen
契约：.ai/output/order-page/contract.md
输出：Vue组件代码
```

### 7.3 手动实现 FoodCard 组件

创建 `src/components/order/FoodCard.vue`：

```vue
<template>
  <div
    class="w-[136px] h-[122px] rounded-lg bg-white relative overflow-hidden cursor-pointer"
    @click="handleClick"
  >
    <!-- 标签 -->
    <div
      v-if="tag"
      class="absolute top-1.5 left-1.5 px-1 py-0.5 rounded text-xs"
      :class="tagClass"
    >
      {{ tagText }}
    </div>

    <!-- 图片 -->
    <div class="h-[86px] rounded-t-lg bg-gray-200 overflow-hidden">
      <img
        :src="image"
        :alt="name"
        class="w-full h-full object-cover"
        @error="handleImageError"
      />
    </div>

    <!-- 价格标签 -->
    <div class="absolute bottom-[38px] right-1">
      <div class="bg-black/80 rounded px-2 py-0.5">
        <span class="text-white text-xs font-normal">¥{{ formattedPrice }}</span>
      </div>
    </div>

    <!-- 商品名称 -->
    <div class="px-1.5 pt-1">
      <span class="text-[15px] text-[#222222] font-normal leading-relaxed line-clamp-2">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id: string
  name: string
  price: number
  image: string
  tag?: 'set' | 'soldout'
  tagText?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: [id: string]
  'add-to-cart': [id: string]
}>()

const tagClass = computed(() => {
  if (props.tag === 'set') {
    return 'bg-[#e8e8ff] text-[#6367ff]'
  }
  if (props.tag === 'soldout') {
    return 'bg-[#ffe9e8] text-[#e80c00]'
  }
  return ''
})

const formattedPrice = computed(() => {
  return props.price.toFixed(1)
})

const handleClick = () => {
  emit('click', props.id)
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = '/placeholder-food.png'
}
</script>
```

### 7.4 手动实现 OrderPage 页面

创建 `src/views/order/OrderPage.vue`：

```vue
<template>
  <div class="min-h-screen bg-[#202020]">
    <div class="p-10">
      <div class="flex flex-wrap gap-1.5">
        <FoodCard
          v-for="product in products"
          :key="product.id"
          v-bind="product"
          @click="handleProductClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FoodCard from '@/components/order/FoodCard.vue'

interface Product {
  id: string
  name: string
  price: number
  image: string
  tag?: 'set' | 'soldout'
  tagText?: string
}

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

// 模拟数据
const mockProducts: Product[] = [
  {
    id: '1',
    name: '爽脆榨菜肉丝',
    price: 25.8,
    image: 'https://example.com/1.jpg',
    tag: 'set',
    tagText: '套餐',
  },
  {
    id: '2',
    name: '香煎牛排',
    price: 68.0,
    image: 'https://example.com/2.jpg',
  },
  {
    id: '3',
    name: '红烧牛肉面',
    price: 32.0,
    image: 'https://example.com/3.jpg',
    tag: 'soldout',
    tagText: '已售罄',
  },
]

onMounted(() => {
  loading.value = true
  // 模拟API调用
  setTimeout(() => {
    products.value = mockProducts
    loading.value = false
  }, 500)
})

const handleProductClick = (id: string) => {
  console.log('点击商品:', id)
}
</script>
```

### 7.5 运行绿测试

```bash
npm run test:unit -- src/components/order/__tests__/FoodCard.spec.ts
```

**预期输出**：测试通过

```
✓ FoodCard > 应该正确渲染商品名称
✓ FoodCard > 应该正确渲染价格
✓ FoodCard > 应该渲染商品图片
✓ FoodCard > 套餐商品应该显示套餐标签
✓ FoodCard > 已售罄商品应该显示已售罄标签
✓ FoodCard > 点击卡片应该触发click事件
```

### 7.6 启动开发服务器

```bash
npm run dev
```

### 7.7 执行视觉回归测试

在 Claude 中执行：

```
/visual-regression-testing
```

输入提示：
```
设计稿：.ai/input/pencil/order-page.pen
实现：http://localhost:5173/order
输出：对比报告
```

或者手动执行：

```bash
# 1. 截图实现页面
npx playwright screenshot \
  --viewport-size=1280,800 \
  http://localhost:5173/order \
  screenshots/order-page-actual.png

# 2. 导出设计稿（需要从Pencil手动导出）
# 将设计稿导出为 screenshots/order-page-design.png

# 3. 对比（需要 pixelmatch）
npm install -D pixelmatch pngjs

# 创建对比脚本 scripts/compare-screenshots.js
# ...（参考 SKILL.md 中的脚本）

node scripts/compare-screenshots.js \
  screenshots/order-page-design.png \
  screenshots/order-page-actual.png \
  screenshots/order-page-diff.png
```

### 7.8 创建 green.md

创建 `.ai/output/order-page/green.md`：

```markdown
# Layer 5 - 绿代码记录

## 实现时间
2026-03-15 11:00:00

## 完成内容

### 组件实现

| 组件 | 文件路径 | 状态 |
|------|----------|------|
| FoodCard | src/components/order/FoodCard.vue | ✅ |
| PriceTag | 内嵌于FoodCard | ✅ |
| ProductTag | 内嵌于FoodCard | ✅ |
| OrderPage | src/views/order/OrderPage.vue | ✅ |

### 样式实现

- Tailwind 配置：已添加自定义颜色和尺寸
- 设计Token映射：
  - #202020 → bg-[#202020]
  - #ebebeb → bg-bg-gray
  - 136x122px → w-[136px] h-[122px]
  - 8px圆角 → rounded-lg
  - MiSans字体 → font-mi-sans（需要安装字体）

### 测试状态

所有测试通过：6/6 ✅

### 视觉回归测试结果

| 指标 | 数值 | 状态 |
|------|------|------|
| 相似度 | 94.5% | ⚠️ |
| 差异像素 | 约50,000/1,024,000 | - |

### 已知差异

1. **字体差异** (-2%): 使用系统字体而非 MiSans
   - 解决：安装 @chinese-fonts/misans

2. **图片占位** (-1.5%): 使用占位图而非实际图片
   - 解决：使用真实图片URL

3. **间距微调** (-1%): gap 5px vs 6px
   - 已修正：使用 gap-1.5 (0.375rem = 6px)

4. **颜色精度** (-1%): #202020 vs #1a1a1a
   - 已修正：使用准确色值

## 待优化项

- [ ] 安装 MiSans 字体
- [ ] 配置真实图片数据
- [ ] 添加骨架屏加载状态
```

### 7.9 验证 Layer 5

检查清单：

- [ ] 所有组件实现完成
- [ ] 测试全部通过
- [ ] 开发服务器正常运行
- [ ] 页面可访问
- [ ] green.md 记录完整

---

## Phase 8: Layer 6 - 交付

### 8.1 执行 Layer 6 Skill

在 Claude 中执行：

```
/layer6-delivery
```

### 8.2 交付检查清单

| 检查项 | 状态 | 备注 |
|--------|------|------|
| 代码审查 | ⬜ | 检查 TypeScript 类型 |
| 测试通过 | ⬜ | 所有单元测试通过 |
| 视觉验收 | ⬜ | 与设计稿对比 ≥95% |
| 文档更新 | ⬜ | 更新 README |
| 构建成功 | ⬜ | npm run build 无错误 |

### 8.3 构建验证

```bash
npm run build
```

**预期输出**：构建成功，无错误

### 8.4 Git 提交

```bash
# 查看变更
git status

# 添加代码文件（不包括 .ai/）
git add src/
git add screenshots/
git add tailwind.config.js

# 提交
git commit -m "feat: 实现点餐页面

- 添加 FoodCard 组件
- 添加 OrderPage 页面
- 配置 Tailwind 自定义主题
- 添加单元测试

视觉相似度: 94.5%"
```

### 8.5 创建交付文档

创建 `.ai/output/order-page/delivery.md`：

```markdown
# Layer 6 - 交付文档

## 交付时间
2026-03-15 12:00:00

## 交付内容

### 代码文件

```
src/
├── components/
│   └── order/
│       ├── FoodCard.vue
│       └── __tests__/
│           └── FoodCard.spec.ts
└── views/
    └── order/
        └── OrderPage.vue
```

### 测试报告

- 单元测试：6/6 通过 ✅
- 视觉回归：94.5% 相似度 ⚠️

### 构建状态

- 开发构建：✅ 成功
- 生产构建：✅ 成功

## 待办事项

- [ ] 安装 MiSans 字体提升视觉还原度
- [ ] 对接真实商品API

## 归档

已合并到 main 分支，commit: xxxxxx
```

---

## Phase 9: Layer 7 - 知识沉淀

### 9.1 执行 Layer 7 Skill

在 Claude 中执行：

```
/layer7-knowledge-accumulation
```

### 9.2 创建 Skill 沉淀

根据本次开发经验，创建 Skill 到 `.ai/skills/`：

创建 `.ai/skills/food-card-pattern/SKILL.md`：

```markdown
---
name: food-card-pattern
description: 商品卡片组件设计模式，基于点餐页面实践经验
---

## 使用场景

在需要展示商品列表的页面中使用，包含图片、价格、标签等信息。

## 设计规格

- 卡片尺寸：136x122px
- 图片区域：136x86px
- 圆角：8px
- 标签位置：左上角绝对定位
- 价格位置：图片右下角绝对定位

## 代码模板

```vue
<!-- FoodCard.vue -->
<template>
  <div class="w-[136px] h-[122px] rounded-lg bg-white relative overflow-hidden">
    <!-- 标签 -->
    <div v-if="tag" class="absolute top-1.5 left-1.5 ...">
      {{ tagText }}
    </div>
    <!-- 图片 -->
    <div class="h-[86px] ...">
      <img :src="image" :alt="name" />
    </div>
    <!-- 价格 -->
    <div class="absolute bottom-[38px] right-1 ...">
      ¥{{ price }}
    </div>
    <!-- 名称 -->
    <div class="px-1.5 pt-1">
      {{ name }}
    </div>
  </div>
</template>
```

## 注意事项

1. 图片需要处理加载失败情况
2. 标签颜色根据类型变化：套餐(紫色)、已售罄(红色)
3. 价格格式化保留一位小数
```

### 9.3 更新 glossary.md

归档本次新增的术语：

```markdown
## 2026-03-15 新增（点餐页面）

- 商品卡片 (FoodCard)
- 价格标签 (PriceTag)
- 商品标签 (ProductTag)

## 已稳定术语（移动到主表）

（将之前新增的术语移动到主术语表）
```

### 9.4 流程优化反馈

创建 `.ai/output/order-page/feedback.md`：

```markdown
# 流程优化反馈

## 本次执行发现的问题

### Layer 3
- 契约定义时样式规范部分耗时较长
- 建议：创建样式契约模板

### Layer 5
- Pencil-to-Ve 自动生成代码与项目规范有差距
- 建议：定制化代码生成模板

## 改进建议

1. **增加样式契约模板**：预设颜色、尺寸、字体规范模板
2. **优化代码生成**：根据项目实际组件库定制生成规则
3. **视觉回归阈值**：当前 95% 可能过于严格，建议按模块调整

## 复用价值

本次 FoodCard 组件可在以下场景复用：
- 商品列表页
- 搜索结果页
- 推荐商品模块
```

---

## 常见问题与优化建议

### Q1: Skills 未加载

**现象**：`/skills list` 显示为空

**解决**：
```bash
# 检查 settings.json 路径
cat ~/develop-assistant/.claude/settings.json | grep -A5 "layer1"

# 重新启动 Claude
exit
claude-ai ~/vibe-coding-demo
```

### Q2: Pencil 解析失败

**现象**：`pencil-parser.js` 报错

**解决**：
```bash
# 检查文件格式
head -c 100 .ai/input/pencil/order-page.pen
# 应该以 {"version":"2.8"... 开头（JSON格式）

# 如果不是JSON格式，可能需要从Pencil重新导出
```

### Q3: 测试无法运行

**现象**：`npm run test:unit` 报错

**解决**：
```bash
# 检查 vitest 配置
cat vitest.config.ts

# 确认测试文件路径正确
ls src/components/order/__tests__/
```

### Q4: Tailwind 类不生效

**现象**：自定义类（如 `w-[136px]`）无效

**解决**：
```bash
# 检查 tailwind.config.js content 配置
# 确保包含 './src/**/*.{vue,js,ts,jsx,tsx}'

# 重启开发服务器
npm run dev
```

### Q5: 通知不弹窗

**现象**：OSC 序列不触发通知

**解决**：
```bash
# 检查 VSCode 扩展是否安装
code --list-extensions | grep terminal-notifier

# 手动测试
echo -e "\033]1337;SetNotification=测试\007"
```

---

## 附录：快速参考

### 常用命令

**Linux/Mac:**
```bash
# 启动开发
claude-ai
cd ~/vibe-coding-demo
npm run dev

# 运行测试
npm run test:unit
npm run test:unit -- --watch

# 构建
npm run build

# 解析设计稿
node ~/develop-assistant/scripts/pencil-parser.js \
  .ai/input/pencil/order-page.pen \
  .ai/output/order-page/pencil-analysis.json
```

**Windows (CMD):**
```cmd
:: 启动开发
claude-ai.cmd
cd C:\Users\%USERNAME%\vibe-coding-demo
npm run dev

:: 运行测试
npm run test:unit
npm run test:unit -- --watch

:: 构建
npm run build

:: 解析设计稿
node "%USERPROFILE%\develop-assistant\scripts\pencil-parser.js" ^
  .ai\input\pencil\order-page.pen ^
  .ai\output\order-page\pencil-analysis.json
```

### Layer 快捷键

```
/layer1-document-capture  # 文档抓取
/layer2-requirement-analysis  # 需求结构化
/layer3-contract-definition  # 领域与契约
/layer4-red-tests  # 红测试
/layer5-green-implementation  # 绿代码+视觉还原
/layer6-delivery  # 交付
/layer7-knowledge-accumulation  # 知识沉淀
```

### 文件模板位置

**Linux/Mac:**
```
~/develop-assistant/templates/
├── dot-ai-structure.md
├── raw.md.template
├── contract.md.template
├── red.md.template
└── green.md.template
```

**Windows:**
```
%USERPROFILE%\develop-assistant\templates\
├── dot-ai-structure.md
├── raw.md.template
├── contract.md.template
├── red.md.template
└── green.md.template
```

---

**文档版本**：v1.0
**最后更新**：2026-03-15
**适用范围**：develop-assistant MVP 阶段
