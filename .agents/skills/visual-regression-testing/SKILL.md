---
name: visual-regression-testing
description: 视觉回归测试。使用Playwright截图并与设计稿对比，输出相似度报告。
---

## 何时使用此Skill

在Layer 5（绿代码+视觉还原）使用：
- 验证实现与设计稿的一致性
- 生成视觉对比报告
- 量化视觉还原质量

## 输入

| 文件 | 路径 | 说明 |
|------|------|------|
| 实现页面 | `http://localhost:5173/{feature}` | 本地开发服务器 |
| 设计稿 | `.ai/input/pencil/{feature}.pen` | 原始设计稿 |
| 或 | `screenshots/{feature}-design.png` | 导出的设计稿截图 |

## 工具链

### Playwright 截图

```bash
# 安装
npm install -D @playwright/test
npx playwright install

# 截图命令
npx playwright screenshot \
  --viewport-size=1280,720 \
  http://localhost:5173/login \
  screenshots/login-actual.png
```

### 图像对比

```bash
# 使用 pixelmatch
npm install -D pixelmatch pngjs

# 对比脚本
node scripts/compare-screenshots.js \
  screenshots/login-design.png \
  screenshots/login-actual.png \
  screenshots/login-diff.png
```

## 对比脚本示例

```javascript
// scripts/compare-screenshots.js
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const [img1Path, img2Path, diffPath] = process.argv.slice(2);

const img1 = PNG.sync.read(fs.readFileSync(img1Path));
const img2 = PNG.sync.read(fs.readFileSync(img2Path));

const { width, height } = img1;
const diff = new PNG({ width, height });

const numDiffPixels = pixelmatch(
  img1.data,
  img2.data,
  diff.data,
  width,
  height,
  { threshold: 0.1 }
);

const totalPixels = width * height;
const similarity = ((1 - numDiffPixels / totalPixels) * 100).toFixed(2);

console.log(`相似度: ${similarity}%`);
console.log(`差异像素: ${numDiffPixels}/${totalPixels}`);

fs.writeFileSync(diffPath, PNG.sync.write(diff));
```

## 输出

### 截图文件

```
screenshots/{feature}/
├── design.png       # 设计稿截图
├── actual.png       # 实现截图
└── diff.png         # 差异图（红色标记差异）
```

### 对比报告

```markdown
# 视觉回归测试报告 - {feature}

## 测试信息
- 测试时间: {timestamp}
- 视口: 1280x720
- 阈值: 0.1

## 对比结果
| 指标 | 数值 | 状态 |
|------|------|------|
| 相似度 | 98.5% | ✅ 通过 |
| 差异像素 | 1,234/921,600 | - |

## 差异区域
| 区域 | 差异类型 | 严重程度 |
|------|----------|----------|
| 按钮阴影 | 轻微偏移 | 低 |
| 输入框边框 | 颜色差异 | 中 |

## 建议
- [ ] 调整按钮阴影偏移量
- [ ] 统一输入框边框颜色

## 截图
- [设计稿](screenshots/{feature}/design.png)
- [实现](screenshots/{feature}/actual.png)
- [差异对比](screenshots/{feature}/diff.png)
```

## 阈值设置

| 相似度 | 状态 | 说明 |
|--------|------|------|
| ≥ 98% | ✅ 优秀 | 视觉还原度高 |
| 95-98% | ⚠️ 可接受 | 轻微差异 |
| 90-95% | ❌ 需调整 | 明显差异 |
| < 90% | 🚨 不合格 | 严重偏差 |

## 调用示例 (基于testData.pen)

```
用户: 对点餐页面进行视觉回归测试

AI: 正在执行视觉回归测试...

步骤：
1. 启动开发服务器 (npm run dev)
2. 设置视口 1280x800 (匹配testData.pen尺寸)
3. Playwright截图
4. 与Pencil导出图对比
5. 生成差异图

输入：
- 设计稿: testData.pen 导出图 (1280x800)
- 实现: http://localhost:5173/order

结果：
相似度: 94.5% ⚠️

差异分析：
- 字体差异: 使用系统字体而非MiSans (-2%)
- 图片占位: 实际图片vs占位符 (-1.5%)
- 间距微调: gap 5px vs 6px (-1%)
- 颜色精度: #202020 vs #1a1a1a (-1%)

建议：
1. 配置MiSans字体
   npm install @chinese-fonts/misans

2. 统一间距
   gap: 6px -> Tailwind gap-1.5 (0.375rem = 6px)

3. 颜色对齐
   使用提取的准确色值

详细报告: .ai/output/order/visual-report.md
截图对比: screenshots/order/
  ├── design.png  (来自testData.pen导出)
  ├── actual.png  (实现截图)
  └── diff.png    (差异标记)
```

## 集成到CI

```yaml
# .github/workflows/visual-test.yml
name: Visual Regression Test
on: [pull_request]
jobs:
  visual-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Start server
        run: npm run preview &
      - name: Run visual tests
        run: npm run test:visual
      - name: Upload screenshots
        uses: actions/upload-artifact@v3
        with:
          name: visual-test-results
          path: screenshots/
```

## 实现状态

> ✅ **框架已就绪，基于testData.pen验证**
>
> 已知信息 (testData.pen):
> - 页面尺寸: 1280x800
> - 设计Token: 23色, MiSans字体
> - 组件: 商品卡片、价格标签、套餐标签
>
> 需要：
> 1. Playwright环境安装
> 2. Pencil导出截图能力
> 3. 实际项目运行环境
>
> 参考: `testData.pen` (点餐页面, 604个元素)

## 注意事项

1. **浏览器一致性**
   - 使用Chromium确保一致性
   - 固定视口尺寸

2. **动态内容处理**
   - 等待数据加载完成
   - 使用稳定的选择器

3. **阈值调整**
   - 初期可放宽阈值
   - 稳定后逐步严格
