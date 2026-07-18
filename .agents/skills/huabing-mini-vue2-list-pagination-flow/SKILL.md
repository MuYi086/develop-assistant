---
name: huabing-mini-vue2-list-pagination-flow
description: 通用 UniApp + Vue 2 列表分页技能。用于 tab 列表、搜索/筛选、上拉加载、下拉刷新、页码或游标分页、空态/错误/无更多、请求去重、过期响应、滚动位置和 Vuex/页面状态取舍；适用于订单、优惠券、门店、商品、会员记录等列表。
---

# UniApp Vue 2 列表与分页

## 统一查询模型

列表状态至少包含：

```js
{
  items: [],
  cursor: null,
  page: 1,
  pageSize: 20,
  hasMore: true,
  status: 'idle',
  error: null,
  queryKey: ''
}
```

按后端协议选择 page 或 cursor，不同时维护两套真相。`queryKey` 由搜索词、tab、筛选、位置和用户上下文稳定生成。

## Reset 与 Append

- 首次进入、下拉刷新、搜索词/tab/筛选变化：reset 后请求第一页。
- `onReachBottom`：只有 `hasMore && status !== 'loading'` 时 append。
- reset 响应只替换当前 queryKey 的列表；append 响应只追加匹配当前页/游标的结果。
- 使用 item 稳定业务 ID 去重；不要用数组 index 作为可变列表 key。
- 后端重复页、空页但声明有更多时设置保护阈值，避免无限请求。

## 并发与过期响应

- 同一 queryKey 同一页只允许一个 in-flight 请求。
- 快速切 tab/搜索时取消旧请求，或用 request id/queryKey 丢弃旧响应。
- loading、refreshing、loadingMore 可以分开，避免尾部加载覆盖首屏 skeleton。
- `finally` 结束下拉刷新和 loading；过期响应不能关闭当前请求的 loading。

## Tab 与状态所有权

- 需要保留各 tab 列表和滚动位置时，为每个 tab 保存独立 list state。
- 只显示一个临时列表时可在切 tab reset，减少内存和复杂度。
- 跨页面共享或返回必须保留时使用 Vuex；页面离开即失效的搜索结果留本地。
- 持久化默认关闭；确需冷启动恢复时只缓存少量摘要并设置过期时间。

## 响应归一

- 在 service/store adapter 统一提取 `items/total/nextCursor/hasMore`，页面不兼容多种后端字段。
- page 模式可用 `page * pageSize < total` 或服务端 flag；cursor 模式以 nextCursor 为准。
- 空态仅在首次/reset 成功且 items 为空时显示；加载失败与空数据分开。
- append 失败保留旧 items 并提供重试，不把整页切成错误态。

## UniApp 交互

- 下拉刷新、页面 `onReachBottom` 和内部 scroll-view 只能选定一个主要滚动容器。
- 搜索 reset 后按需求回到顶部；在 `$nextTick` 后执行滚动。
- 页面返回时根据 dirty flag 决定刷新，不无条件清空用户滚动位置。
- 长列表先分页和减少热路径组件层级；确认瓶颈后再用虚拟列表。

## 验证

- 首屏、空数据、单页、多页、最后一页和 append 失败重试。
- 快速切 tab/搜索/筛选、连续触底、下拉刷新与旧响应。
- 重复 item、后端空页、total 变化、用户切换和返回滚动恢复。
- 页面/scroll-view 两种滚动容器及各目标平台触底行为。
