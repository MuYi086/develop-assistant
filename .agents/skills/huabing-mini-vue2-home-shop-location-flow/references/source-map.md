# 来源映射

## 当前源码路径

- 首页：`src/pages/home/home.vue`
- 首页组件：`src/pages/home/components/`
- 首页 Store/API：`src/store/modules/home.js`、`src/utils/api/api_home.js`
- 定位 Store：`src/store/modules/location.js`
- 门店选择：`src/pagesA/shopChoose/`、`src/store/modules/shopChoose.js`
- 门店搜索：`src/pagesA/shopSearch/`、`src/store/modules/shopSearch.js`
- 活动自动选店：`src/pages/activity/activity.vue`
- 公共首页转换和跳转：`src/utils/util.js`
- 默认中心点和图片：`src/utils/config.js`

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。该能力域有 155 个目标非 merge 提交触达。

- `a18d78db0`（2026-01-14）：首页结构重构并收敛旧页面组件。
- `e94642cf3`（2026-01-15）：首页卡片切换结构与交互。
- `be468dd5c`（2026-01-15）：减少推荐店铺渲染遍历。
- `dde892256`（2026-02-02）：把登录/未登录首页请求合并到同一 Promise 编排。
- `97d07b9fe`（2026-02-05）：首页推荐较慢时优先渲染页面。
- `2da718649`（2026-04-02）：推荐门店只缓存三条，规避微信 storage 限制。
- `5c99b0b67`（2026-05-19）：修复部分 Android 门店图标换行。

## 数据流

```text
隐私授权 -> util.checkPosition -> location Store
                         -> 首页内容等 4 类请求 Promise.all -> 首屏完成
                         -> 推荐门店请求（独立）          -> 列表后到后渲染
API -> home/shopChoose/shopSearch action -> 数据归一化 -> getter -> 页面组件
```

## 常用定位

```bash
rg -n "getUserLocation|getSelectIndexSite|getSelectIndexInfo|getNutList" src/pages/home src/store/modules/home.js
rg -n "uniGetLocation|uniChooseLocation|SET_UNIPOSITION|defaultCenterPos" src
rg -n "shopTabType|SearchNearSite|GetPopSite|SearchSite" src/pagesA src/store src/utils/api
```
