# 来源映射

## 当前源码路径

| 能力 | 页面 | Store / API |
|---|---|---|
| 优惠券 | `src/pagesE/couponList/`、`couponExchange/`、`couponVerification/` | `couponList.js` / `api_coupon_list.js` |
| 拼饭 | `src/pagesI/groupBuying/`、`groupBuyingDetail/` | `groupBuying.js` / `api_groupBuying.js` |
| 邀请 | `src/pagesC/invite-friends/` | `inviteFriends.js` / `api_invite_friends.js` |
| 抽奖 | `src/pagesI/lottery/`、`receive-award/` | `lottery.js` / `api_lottery.js` |
| 商城 | `src/pagesC/mall/` | `mall.js` / `api_mall.js` |
| 鳄币 | `src/pagesC/hungryCoin/` | `hungryCoin.js` / `api_hungry_coin.js` |
| 会员 | `src/pagesL/vip/` | `vip.js` / `api_vip.js` |

## 关键状态

- 优惠券：`couponFromType`、`couponSiteCategory`、`couponUniqueKey`、三类列表。
- 拼饭：门店、已选活动、`groupBookingId`、团状态、参团/退出列表。
- 抽奖：活动详情、结果、`uuid`、`channel`、`allowShare`。
- 会员：套餐、赠礼 prepare/real index、协议、会员卡、禁用门店。

## 目标提交证据

筛选口径：committer 为 `ougege` 或 `muyi086`，且邮箱为 `1258947325@qq.com`。该能力域有 236 个目标非 merge 提交触达。

- `8fa233f44`（2025-03-26）：调整拼饭规则。
- `492847b13`（2025-08-04）：修复拼单满减按钮交互。
- `85e2c3570`（2025-10-21）：会员赠礼、交互和定位逻辑。
- `69c35e825`（2025-10-23）：确认订单接入会员能力。
- `7cf102810`（2025-10-28）：会员开卡联调。
- `22d639025`（2026-03-05）：修复活动与抽奖分享参数。
- `0b2a02896`（2026-03-11）：卡密兑换增加扫码兼容。
- `0367fa342`（2026-03-19）：拆分 blur 校验与按钮可用校验。
- `2324674c1`（2026-04-07）：扫码自动填入后自动校验。

## 常用定位

```bash
rg -n "couponFromType|couponSiteCategory|couponUniqueKey|ExchangeCoupon|Offlinecard" src
rg -n "groupBookingId|Groupbooking|timeCountDownEnd|quitGroup" src/pagesI src/store
rg -n "allowShare|uuid|lotteryAward|getAward|commonShareAppMessage" src/pagesI
rg -n "vipSelectGift|vipReadAndAgree|Buyvip|Payorderresult" src/pagesF src/pagesL src/store
```
