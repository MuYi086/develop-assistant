---
name: huabing-mini-vue2-versioned-route-flow
description: 通用 UniApp + Vue 2 版本化路由与兼容技能。用于旧版/新版页面并行、按版本/类型/状态选择详情或流程页、query 归一、navigateTo/redirectTo/reLaunch/switchTab 语义、公共入口、降级和迁移；也用于消除散落的版本判断与不一致跳转矩阵。
---

# UniApp Vue 2 版本化路由

## 规范化入口

所有调用方先进入一个公共 resolver：

1. 白名单提取 query/业务对象。
2. 显式转换 Number、Boolean、枚举和 ID。
3. 把旧字段转换为内部规范字段。
4. 根据路由矩阵返回 `{ url, navigation, query }`。
5. 统一序列化后调用 UniApp 导航 API。

页面内部不再重复判断版本、类型和导航方式。

## 表驱动矩阵

先列出决策维度及优先级，例如：

| 优先级 | 维度 | 示例 |
|---|---|---|
| 1 | 强制状态入口 | 处理中、失败工单、协议页 |
| 2 | 数据版本 | legacy、v2、v3 |
| 3 | 业务类型 | 普通、组合、配送、自提 |
| 4 | 来源与返回语义 | 列表、详情、支付结果 |

- 能用对象映射表达时不用深层 switch；需要复杂 predicate 时保持命名函数和单元测试。
- 矩阵必须包含 unknown/default 策略：安全详情、列表或明确错误，不静默跳首页掩盖问题。
- 服务端新增枚举时保留诊断信息并走安全降级。

## 导航语义

- `navigateTo`：需要返回原页的普通层级。
- `redirectTo`：当前中间页不应保留。
- `reLaunch`：完成关键流程后重建栈，使用前确认不会丢失必要上下文。
- `switchTab`：目标是 tabBar 页面。
- 不用魔法数字表示 navigation；使用语义枚举或函数。

## Query 契约

- ID 保持字符串，避免大整数精度丢失；Boolean 不直接使用 query 字符串真假。
- 复杂对象放 Store/缓存或重新查询，不塞进 URL；query 只传恢复所需最小标识。
- 编码 WebView URL、中文和特殊字符，接收页再按一次明确规则解码。
- 目标页 `onLoad` 校验必填参数，缺失时进入可解释降级。

## 迁移策略

- 旧/新页面并行期间，公共 resolver 是唯一入口；新功能只增加矩阵项，不新增私有跳转。
- 旧函数标记 deprecated 并统计调用方，迁移完成前不删除兼容路径。
- 路由、Store、API 和实时事件使用同一规范版本/类型字段。
- 删除旧版前验证调用量、收藏/分享深链、支付回跳、通知入口和历史缓存。

## 验证

- 为决策矩阵每一行和 unknown 分支建立表驱动测试。
- 覆盖 Number/Boolean 字符串、缺失字段、旧字段、新枚举和无效 ID。
- 覆盖列表、详情、支付/登录回跳及四种 UniApp navigation 语义。
- 搜索全仓版本判断和直写路径，确认没有绕过公共 resolver 的新入口。
