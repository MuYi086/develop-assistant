# 来源映射

## 当前源码路径

- 公共取消工具：`src/utils/util.js`
- 取消规则页：`src/pagesF/orderCancel/`
- 商责取消：`src/pagesI/shopResponsibilityCancel/`
- 异常餐退款：`src/pagesI/orderRefundAbnormal/`
- 异常工单退款：`src/pagesD/orderRefundException/`
- 退款成功：`src/pagesI/orderRefondSuccessPage/`
- 相关 Store：`src/store/modules/orderCancel.js`、`orderRefundAbnormal.js`、`orderRefundException.js`、`shopResponsibilityCancel.js`
- 相关 API：`src/utils/api/api_order_cancel.js`、`api_order_refund_abnormal.js`、`api_shopResponsibilityCancel.js`
- 入口：`src/pages/orderList/` 与 `src/pagesF/*OrderDetail*/`

## 取消矩阵

| 维度 | 分支 | 关键参数 |
|---|---|---|
| `enableCancel` | 0/1/2 | dialog / 有责页 / 商责页 |
| `orderVer` | 1 / >=2 | 旧取消 / V4 取消 |
| `jointOrder` | false / true | 普通单 / 联合单 |
| `payStatus` | 支付前 / 支付成功 | union-pay 取消 / V4 联合取消 |

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。该能力域有 61 个目标非 merge 提交触达。

- `2df994120`（2025-09-28）：对齐多个订单详情的取消入口调用。
- `2b06d4b72`（2025-10-11）：异常餐退款兼容新版套餐/单品详情对象。
- `06adb2e81`（2025-11-12）：异常餐退款兼容汤面机型。
- `7714c0aa6`（2025-11-18）：异常餐退款兼容 `orderType=12`。
- `b1cf95c87`（2026-07-09）：抽取 V4 状态检查、取消分流和公共取消逻辑。
- `d3c0a6672`（2026-07-10）：调整商责取消参数和 socket 联动。
- `975887149`（2026-07-15）：继续调试商责页面。

## 常用定位

```bash
rg -n "commonGetWxSiteOrderV4Checkorderentrystatus|jumpToCancelPageAfterCheckOrderEntryStatus|commonCancelOrderV4" src
rg -n "enableCancel|responsibleCancellationTime|jointOrder|payStatus" src/pages src/pagesF src/pagesI
rg -n "refundOrderType|cookingIds|refondAmount|REFUNDSUBMITTING" src/pagesD src/pagesI src/store
```
