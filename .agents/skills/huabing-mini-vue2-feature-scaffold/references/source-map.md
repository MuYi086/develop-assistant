# 来源映射

## 当前生成链

- 页面：`src/pages*/<page>/<page>.vue`
- 局部组件：页面同级 `components/`
- API 常量：`src/utils/api/api_*.js`
- API 汇总：`src/utils/api/index.js`
- Vuex module/getter：`src/store/modules/*.js`、`src/store/getters.js`
- 小程序路由源：`zxScript/basicPages.mjs`
- H5 路由源：`zxScript/basicPages.h5.mjs`

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。

- `a477991be`（2026-02-05）：新增食安溯源页面结构，并同步业务链路。
- `80bf1d4bf`（2026-06-09）：新增世环支付页并同步 config、util 和路由源。
- `e7f26f049`（2026-06-23）：新增公共订单详情页面、17 个局部组件、Store、API、getter 和路由源。
- `306e3b62c`（2026-07-06）：继续把公共详情接入 API 汇总、Store、WebSocket 和跨入口路由。

## 使用边界

- 脚本只生成骨架，不替代业务 spec 和相邻实现审查。
- 必须传真实 endpoint；脚本拒绝猜测后端路径。
- 写入前先完成所有目标缺失和更新锚点预检，避免半成品落盘。
- 已存在的页面/API/Store 不覆盖，增量补齐应由 Agent 读取现状后用补丁完成。
