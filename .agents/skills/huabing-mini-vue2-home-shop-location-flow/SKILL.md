---
name: huabing-mini-vue2-home-shop-location-flow
description: 话饼 UniApp Vue 2 首页、定位与门店发现技能。用于修改首页隐私/定位初始化、登录和未登录首页接口、推荐门店缓存、轮播与金刚区、商品直达、活动页自动选店、附近/常点/收藏门店、门店搜索、定位拒绝降级和 siteCategory 路由。
---

# 话饼首页门店定位流

## 快速入口

处理首页、定位、推荐门店或门店选择前，先读取：

- `src/pages/home/home.vue`、`src/store/modules/home.js`
- `src/store/modules/location.js`
- `src/pagesA/shopChoose/shopChoose.vue`、`src/store/modules/shopChoose.js`
- `src/pagesA/shopSearch/shopSearch.vue`、`src/store/modules/shopSearch.js`
- `src/utils/api/api_home.js`、`api_shop_choose.js`、`api_shop_search.js`

涉及商品直达、活动入口、缓存限制或目标提交依据时，再读 `references/source-map.md`。

## 首页初始化顺序

1. 微信先检查隐私授权；需要授权时显示 `hb-dialog-privacy`，支付宝沿现有分支进入定位。
2. 通过 `util.checkPosition(store)` 获取或恢复位置，不在首页重复封装定位 API。
3. 定位成功后，当前首页把系统参数、首页内容、优惠券和金刚区放入 `Promise.all`；推荐门店请求单独启动，以延续“推荐列表较慢时先渲染首屏”的既有行为。
4. 单独启动的推荐请求也必须自行处理失败和收尾，不能制造未处理 Promise；只有需求明确要求五项原子完成时，才把它并入 `Promise.all`。
5. 每个请求方法内部按 token 选择登录/未登录 endpoint；`Promise.all` 无论成功失败都恢复首屏 loading，错误提示兼容 `err.data.msg` 与 `err.errMsg`。

## 推荐门店与缓存

- 推荐门店先用 `util.commonDealHomeSelectIndexSite` 归一化。
- 调用推荐门店 Store action 前先核对返回契约；当前 action 返回处理后的数组，页面不应再假定存在 `res.data`。
- 写入持久化 Store 的列表只保留前三条，避免微信单 key 约 1 MB 限制造成后续逻辑中断。
- 只为活动页临时选店时使用不 commit 的 action，避免覆盖首页展示态。
- `onHide` 按现有逻辑清理首页推荐态，返回时重新请求；不要把大列表长期持久化。
- 首页内容通过 `commonDealHomeSelectIndexSiteInfo` 分拆轮播、开屏和 banner。

## 定位与门店选择

- 定位状态统一放在 `location` Store：授权状态、当前位置、选择位置、拒绝原因和地图缩放。
- `shopChoose` 根据 tab 切换附近、常点/收藏或拼饭门店；登录专属 tab 未登录时拉起公共登录组件。
- 附近列表选择登录/未登录 endpoint，并带 `longitude`、`latitude`。
- 定位不可用时使用 `config.defaultCenterPos` 与既有 scale 降级，不伪造“已授权”状态。
- `shopSearch` 保持分页、搜索词重置和登录/未登录 endpoint 分支。

## 页面跳转

- 按 `shopModel.siteCategory` 分流：一代机进入 `shopV1`，二/三代机进入 `shop`。
- 活动页没有可用门店时跳 `shopChoose?shopTabType=0`，不要停留空白页。
- 商品直达先从推荐结果定位包含 `goodsId` 的门店，再构造点餐页所需店铺/机器信息。
- 内部跳转使用 `util.commonViewTap`；tabBar、重定向和关闭页面语义按现有 jump type 保持。

## 实现风格

- 页面负责隐私、生命周期、并发编排和跳转；Store 负责列表归一化与缓存边界。
- 登录/未登录 endpoint 在同一个页面方法中选择，避免复制两套近似方法。
- 临时查询与需要持久展示的查询使用不同 action，避免隐藏副作用。
- 保持 Vue 2 Options API、`mapGetters` 和 `{ url, params, method }` 请求结构。

## 验证

- 微信隐私授权：同意、拒绝、已授权三条路径。
- 定位：成功、拒绝、系统定位失败、默认中心点降级。
- 登录态：登录/未登录推荐、优惠券、首页内容和门店搜索。
- 门店 tab：附近、常点/收藏、拼饭；分页和空数据。
- 路由：一代机、二/三代机、商品直达、活动页无门店。
- Storage：推荐列表只缓存三条，冷启动恢复不超限。
