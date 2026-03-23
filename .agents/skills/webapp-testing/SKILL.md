---
name: webapp-testing
description: Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.
license: Complete terms in LICENSE.txt
---

# Web Application Testing

To test local web applications, write native Python Playwright scripts.

**Helper Scripts Available**:
- `scripts/with_server.py` - Manages server lifecycle (supports multiple servers)

**Always run scripts with `--help` first** to see usage. DO NOT read the source until you try running the script first and find that a customized solution is abslutely necessary. These scripts can be very large and thus pollute your context window. They exist to be called directly as black-box scripts rather than ingested into your context window.

## Decision Tree: Choosing Your Approach

```
User task → Is it static HTML?
    ├─ Yes → Read HTML file directly to identify selectors
    │         ├─ Success → Write Playwright script using selectors
    │         └─ Fails/Incomplete → Treat as dynamic (below)
    │
    └─ No (dynamic webapp) → Is the server already running?
        ├─ No → Run: python scripts/with_server.py --help
        │        Then use the helper + write simplified Playwright script
        │
        └─ Yes → Reconnaissance-then-action:
            1. Navigate and wait for networkidle
            2. Take screenshot or inspect DOM
            3. Identify selectors from rendered state
            4. Execute actions with discovered selectors
```

## Example: Using with_server.py

To start a server, run `--help` first, then use the helper:

**Single server:**
```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_automation.py
```

**Multiple servers (e.g., backend + frontend):**
```bash
python scripts/with_server.py \
  --server "cd backend && python server.py" --port 3000 \
  --server "cd frontend && npm run dev" --port 5173 \
  -- python your_automation.py
```

To create an automation script, include only Playwright logic (servers are managed automatically):
```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True) # Always launch chromium in headless mode
    page = browser.new_page()
    page.goto('http://localhost:5173') # Server already running and ready
    page.wait_for_load_state('networkidle') # CRITICAL: Wait for JS to execute
    # ... your automation logic
    browser.close()
```

## Reconnaissance-Then-Action Pattern

1. **Inspect rendered DOM**:
   ```python
   page.screenshot(path='/tmp/inspect.png', full_page=True)
   content = page.content()
   page.locator('button').all()
   ```

2. **Identify selectors** from inspection results

3. **Execute actions** using discovered selectors

## Common Pitfall

❌ **Don't** inspect the DOM before waiting for `networkidle` on dynamic apps
✅ **Do** wait for `page.wait_for_load_state('networkidle')` before inspection

## Best Practices

- **Use bundled scripts as black boxes** - To accomplish a task, consider whether one of the scripts available in `scripts/` can help. These scripts handle common, complex workflows reliably without cluttering the context window. Use `--help` to see usage, then invoke directly. 
- Use `sync_playwright()` for synchronous scripts
- Always close the browser when done
- Use descriptive selectors: `text=`, `role=`, CSS selectors, or IDs
- Add appropriate waits: `page.wait_for_selector()` or `page.wait_for_timeout()`

## Reference Files

- **examples/** - Examples showing common patterns:
  - `element_discovery.py` - Discovering buttons, links, and inputs on a page
  - `static_html_automation.py` - Using file:// URLs for local HTML
  - `console_logging.py` - Capturing console logs during automation

---

## Visual Regression Testing

Use Playwright screenshots to compare implementation against design specs and generate similarity reports.

### When to Use

- Validating implementation matches design specs
- Generating visual comparison reports
- Quantifying visual fidelity

### Quick Start

```bash
# Install dependencies
npm install -D @playwright/test pixelmatch pngjs
npx playwright install

# Take screenshot
npx playwright screenshot \
  --viewport-size=1280,720 \
  http://localhost:5173/login \
  screenshots/login-actual.png
```

### Comparison Script

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
  img1.data, img2.data, diff.data, width, height,
  { threshold: 0.1 }
);

const totalPixels = width * height;
const similarity = ((1 - numDiffPixels / totalPixels) * 100).toFixed(2);

console.log(`相似度: ${similarity}%`);
console.log(`差异像素: ${numDiffPixels}/${totalPixels}`);

fs.writeFileSync(diffPath, PNG.sync.write(diff));
```

### Usage

```bash
node scripts/compare-screenshots.js \
  screenshots/login-design.png \
  screenshots/login-actual.png \
  screenshots/login-diff.png
```

### Output Files

```
screenshots/{feature}/
├── design.png       # Design spec screenshot
├── actual.png       # Implementation screenshot
└── diff.png         # Difference map (red = diff)
```

### Similarity Thresholds

| Similarity | Status | Description |
|------------|--------|-------------|
| ≥ 98% | ✅ Excellent | High visual fidelity |
| 95-98% | ⚠️ Acceptable | Minor differences |
| 90-95% | ❌ Needs work | Noticeable differences |
| < 90% | 🚨 Failed | Significant deviation |

### CI Integration

```yaml
# .github/workflows/visual-test.yml
name: Visual Regression Test
on: [pull_request]
jobs:
  visual-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npm run preview &
      - run: npm run test:visual
      - uses: actions/upload-artifact@v3
        with:
          name: visual-test-results
          path: screenshots/
```

### Best Practices

1. **Browser consistency** - Use Chromium, fix viewport size
2. **Dynamic content** - Wait for data load, use stable selectors
3. **Threshold tuning** - Start lenient, tighten over time