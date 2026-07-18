---
name: huabing-mini-vue2-marketing-member-flow
description: 话饼 UniApp Vue 2 营销与会员技能。用于修改优惠券列表/核销/卡密兑换、拼饭开团参团退出、邀请好友、抽奖领奖、积分商城、鳄币、会员开卡/赠礼/协议/禁用门店，以及营销分享、定位、登录拦截和确认订单回显联动。
---

# 话饼营销与会员流

## 快速入口

按目标业务读取对应闭环：

- 优惠券：`src/pagesE/`、`src/store/modules/couponList.js`、`api_coupon_list.js`
- 拼饭：`src/pagesI/groupBuying*`、`src/store/modules/groupBuying.js`、`api_groupBuying.js`
- 邀请：`src/pagesC/invite-friends/`、`src/store/modules/inviteFriends.js`
- 抽奖：`src/pagesI/lottery/`、`receive-award/`、`src/store/modules/lottery.js`
- 商城/鳄币：`src/pagesC/mall/`、`hungryCoin/` 及对应 Store/API
- 会员：`src/pagesL/vip/`、`src/store/modules/vip.js`、`api_vip.js`

需要领域地图、状态约定或目标提交依据时，再读 `references/source-map.md`。涉及付款时同时使用支付渠道 skill。

## 优惠券与卡密

- 优惠券来源由 `couponFromType` 区分个人中心和确认订单；`couponSiteCategory` 区分机型，`couponUniqueKey` 用于订单回显。
- 待使用、已使用、已过期列表使用各自 endpoint；确认订单来源需要保留临时缓存和返回后的 `onShow` 刷新语义。
- 列表分页先重置 `page/hasMore`，Store 只保存跨组件需要的分组结果。
- 卡券兑换与实体卡密是两类接口和长度校验；扫码填入后走与手输一致的校验链。
- `blur` 只更新按钮可用状态，正式提交再次完整校验，避免自动填充绕过规则。
- 兑换成功按类型显示对应 dialog，并在失败时恢复按钮状态。

## 拼饭

按状态机维护：

1. 检查系统/门店是否存在拼饭。
2. 获取推荐或附近拼饭门店并选择活动。
3. 查询门店拼饭配置、我的拼饭和团详情。
4. 开团/参团后维护 `groupBookingId`，待支付时进入点餐流程。
5. 团详情根据状态加载成功列表、参团记录、退出列表和“我的拼饭”。
6. 取消、退出、倒计时结束或页面销毁时刷新/重置状态。

- Store action 负责把时间、折扣、状态文案和样式字段归一化。
- `groupBookingId`、`siteId`、邀请信息和点餐参数要跨页面保持一致。
- 登录、无定位、无数据分别展示独立状态，不用空数组掩盖权限问题。

## 抽奖、邀请与商城

- 抽奖与领奖页面结构相近，但调用 endpoint 不同；不要抽象后误用“抽奖”接口执行“领奖”。
- 动态码使用 `uuid`，并保留 `channel`、位置和登录态；过期、不可分享和接口失败显示明确 dialog。
- 分享对象从接口结果构造并通过 `commonShareAppMessage` 返回，保留 `allowShare` 限制。
- 邀请关系写入 invite Store，登录注册只消费，不让活动页直接操作 token。
- 积分商城保持分页、库存/积分校验、确认兑换 dialog 和兑换后鳄币刷新。

## 会员

- 会员信息、可购买套餐、选择套餐、预备赠礼、正式赠礼和协议勾选分别维护状态。
- `vipSelectGiftPrepareIndex` 只表示弹层临时选择；确认后再写 `vipSelectGiftIndex`。
- 开卡前校验套餐、赠礼和协议；0 元开通成功后也要刷新会员中心。
- 会员价禁用门店列表由专用接口维护，不在商品组件写死。
- 付费开卡进入原生支付结果页时使用既有 machine version 标记和支付 Store；不要另建支付实现。

## 实现风格

- 每个营销域保持独立 Store/API；跨域只通过清晰参数、公共登录、定位和支付能力协作。
- 页面编排生命周期、分享、弹窗和跳转；Store 归一化后端数据并提交状态。
- 保持服务端枚举原值，展示 label/style 通过 `selectOptions` 或转换函数派生。
- 不把营销临时态加入持久化白名单，除非明确需要跨启动恢复并评估 storage 大小。
- 保留历史目录和 `refond` 等既有拼写，避免路由断裂。

## 验证

- 优惠券：三类 tab、确认订单回显、卡券/卡密扫码与手输。
- 拼饭：未登录、无定位、开团、参团、待支付、退出、倒计时结束。
- 抽奖/领奖：有效码、过期码、不可分享、接口失败。
- 商城：分页、积分不足、兑换成功、鳄币刷新。
- 会员：有/无赠礼、协议未勾选、0 元开通、付费开卡、禁用门店。
