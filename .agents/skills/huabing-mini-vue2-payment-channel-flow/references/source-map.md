# 来源映射

## 当前源码路径

- 渠道常量：`src/utils/config.js`
- 公共支付工具：`src/utils/util.js`
- 支付方式 Store：`src/store/modules/wallet.js`
- 原生结果状态：`src/store/modules/nativePayResult.js`
- 支付 API：`src/utils/api/api_wallet.js`、`api_nativePayResult.js`
- 确认订单：`src/pagesF/orderConfirm/orderConfirm.vue`
- 支付选择：`src/pagesF/orderConfirm/components/popup-choose-pay-method.vue`
- 支付 item：`src/pagesF/orderConfirm/components/pay-method-item.vue`
- 原生结果：`src/pagesG/nativePayResult/`
- 钱包结果：`src/pagesG/walletPayResult/`
- 世环餐卡结果：`src/pagesG/shiHuanMealCardPayResult/`
- 继续支付入口：`src/pages/orderList/`、`src/pagesF/*OrderDetail*/`

## 渠道矩阵

| 类型 | channelId | 结果页/动作 |
|---|---|---|
| 微信原生 | `WX_JSAPI` | `nativePayResult` + `uni.requestPayment` |
| 支付宝原生 | `ALIPAY_MINI_APP` | `nativePayResult` + `uni.requestPayment` |
| 钱包 | `WALLET_PAYMENT` | `walletPayResult` |
| 世环餐卡 | `LENIU_WALLET` | `shiHuanMealCardPayResult` |

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。支付专项路径有 46 个目标非 merge 提交触达。

- `f7a3729c5`（2025-09-15）：增加确认订单支付方式弹层、Wallet Store 与支付 UI。
- `ceb6174ca`（2025-09-17）：联调钱包支付全流程。
- `80144ab9e`（2025-09-17）：查询并自动选中最佳支付方式。
- `ffa2f1bac`（2025-09-19）：优惠变化后重新获取最佳支付方式。
- `9050a4439`（2025-11-20）：多类订单详情支持钱包支付和跳转。
- `80bf1d4bf`（2026-06-09）：接入世环餐卡结果页和渠道分流。
- `def7803e5`（2026-06-12）：修正世环餐卡渠道与公共判断。
- `b56daec36`（2026-06-15）：优惠 -> 算价 -> 单次更新支付渠道。
- `f9b386ede`（2026-07-08）：统一三类支付方式的结果分发与支付后跳转。

## 常用定位

```bash
rg -n "nativePayChannelId|walletPayChannelId|shiHuanMealCardPayChannelId" src
rg -n "walletSplitPayChannelList|findBestPayMethodFormChannelList|commonRequestPayMent" src
rg -n "doLoopOrderStatus|clearPageTimer|handleGoCook|jumpType" src/pagesG
rg -n "orderPayChannelId|commonJumpToWallet|commonJumpToShiHuan" src/pages src/pagesF src/utils
```
