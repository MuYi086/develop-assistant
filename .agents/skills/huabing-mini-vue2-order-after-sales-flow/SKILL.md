---
name: huabing-mini-vue2-order-after-sales-flow
description: 话饼 UniApp Vue 2 订单售后技能。用于修改订单入口取消检查、无责/有责/商责取消、未支付与联合单取消、取消规则倒计时、异常餐退款、异常工单确认、退款商品选择、退款结果页和相关 orderVer/orderType/jointOrder 路由参数。
---

# 话饼订单售后流

## 快速入口

处理订单取消、异常退款或商责流程前，先读取：

- `src/utils/util.js` 中 V4 入口检查与公共取消函数
- `src/pagesF/orderCancel/`、`src/store/modules/orderCancel.js`
- `src/pagesI/shopResponsibilityCancel/`、对应 Store/API
- `src/pagesI/orderRefundAbnormal/`、对应 Store/API
- `src/pagesD/orderRefundException/`、对应 Store
- `src/pagesI/orderRefondSuccessPage/`
- 发起售后的订单列表或详情页面

需要取消矩阵、订单类型兼容和目标提交依据时，再读 `references/source-map.md`。

## 取消入口检查

所有 V4 订单入口优先调用：

1. `util.commonGetWxSiteOrderV4Checkorderentrystatus(self, api, query)` 获取实时状态。
2. `util.jumpToCancelPageAfterCheckOrderEntryStatus(self, enableCancel, query)` 统一分流。

`enableCancel` 约定：

- `-1`：不允许取消，不跳转。
- `0`：无责取消，显示调用方传入的 `cancelDialogRef`。
- `1`：有责取消，进入 `pagesF/orderCancel`。
- `2`：商责取消，进入 `pagesI/shopResponsibilityCancel`。

不要在订单列表、公共详情和各机型详情页分别复制这套判断。

## 公共取消参数矩阵

调用 `util.commonCancelOrderV4(self, api, query)` 时保持这些字段完整：

- `transactionOrderId`
- `orderVer`
- `jointOrder`
- `payStatus`
- `cancelDialogRef`

页面 `onLoad` 或公共函数入口先统一路由参数：

- `transactionOrderId = query.transactionOrderId || query.orderId`
- `orderVer = Number(query.orderVer || 1)`
- `jointOrder = query.jointOrder === true || query.jointOrder === 'true'`

后续矩阵只使用归一化结果，不把 query 字符串直接当 Boolean。

分支规则：

- 一代机：使用旧订单取消 endpoint，并传传统 `orderId`。
- 二/三代机非联合单：按 transaction order 取消。
- 联合单支付后：使用 V4 联合单取消，传 `transactionOrderId` 和 `jointOrder`。
- 联合单支付前：走 union-pay 取消，传 `mainOrderId`。

成功后关闭来源 dialog、提示并通知调用方刷新；失败时保留页面状态并展示后端错误。

## 有责与商责取消

- `orderCancel` 先查询取消详情，再根据 `orderVer`、取消时间和“始终同意规则”决定是否显示规则/刷新弹窗。
- 二代机超过 `responsibleCancellationTime` 时先提示刷新，不用旧状态直接提交。
- 商责页面先查询 V4 回显，再提交商责取消；`cookingIds` 存在时逐个确认异常烹饪工单。
- 售后完成后的返回行为使用现有 `returnPrevPage` 或订单详情跳转，不额外堆叠重复详情页。

## 异常餐退款

- 保留 `refundOrderType` 对一代、套餐、汤面等订单类型的区分；新增类型前检查详情对象和烹饪页路由。
- 退款商品选择、可退数量、退款金额和 cookingIds 必须来自同一订单上下文。
- 提交前防重复点击；金额为 0、无可退商品和接口失败都有显式 UI 分支。
- 成功后写入结果 Store，再进入 `orderRefondSuccessPage`；不要只依赖页面临时 data。
- 页面离开或重新选择商品时重置退款提交态，避免上一订单数据泄漏。

## 实现风格

- 跨入口重复的状态检查和取消矩阵下沉 `util.js`；单页规则、弹窗和文案留在页面。
- 请求继续通过 API 常量、Vuex action 和 `postDataPromise`，页面只做参数和流程编排。
- 兼容旧 `orderId` 与新 `transactionOrderId` 时显式转换，不让同名字段含义漂移。
- 保留历史 `orderRefond*` 文件拼写，不在业务修改中顺手改路径。
- 错误对象兼容 `err.data.msg` 与 `err.msg`，失败路径恢复按钮和 loading。

## 验证

- 取消：不允许、无责、有责、商责四类状态。
- 订单：一代机、二/三代机、联合单支付前/后、未支付。
- 时间：责任取消时间内、超时、刷新后状态变化。
- 退款：普通、套餐、汤面和异常烹饪单；0 元和部分退款。
- 页面：订单列表、公共详情、旧详情入口结果一致，完成后返回栈正确。
