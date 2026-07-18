---
name: huabing-mini-vue2-core-workflow
description: 通用 UniApp + Vue 2 移动端项目工作流。用于接手或维护陌生项目时识别仓库约束、页面与分包、pages/manifest/env 生成关系、模块边界、条件编译、构建命令和验证矩阵；也用于跨 UI、请求、状态、登录、支付或业务域的改动先确定影响范围。
---

# UniApp Vue 2 核心工作流

## 先发现，再实现

1. 读取目标仓库中的 `AGENTS.md`、`CLAUDE.md`、constitution、README 和目录内局部说明；目标仓库规则优先于本技能示例。
2. 读取 `package.json`、锁文件、Vue/UniApp/Vuex 版本、构建脚本和 lint/test 命令，不擅自迁移框架或包管理器。
3. 定位 `pages.json`、`manifest.json`、环境配置及其生成脚本。先判断文件是源文件还是生成物，再决定修改落点。
4. 从目标页面沿数据流反向追踪组件、API、请求封装、Store、持久化和路由，不假设目录名与某个项目一致。
5. 检查同领域相邻实现和历史兼容版本，只提炼当前仍成立的契约。

## 技术基线

- 使用目标项目既有的 Vue 2 Options API，不引入 `<script setup>`、Composition API 或 Vue 3 专属语法。
- `data` 返回每个实例独立的对象；`methods`、watcher 和生命周期钩子使用普通函数，避免箭头函数破坏 `this`。
- 源状态保持最小，派生展示值优先放 `computed`；watcher 只处理副作用。
- 组件默认遵守 props down / events up；只有打开弹层、聚焦、测量等命令式行为才暴露最小 `ref` API。
- 页面负责生命周期和流程编排，Store 负责跨组件状态，request/client 层负责传输，纯转换放普通 util。

## UniApp 边界

- 平台差异使用 `#ifdef` / `#ifndef` 条件编译；先复用项目已有平台常量和适配器。
- 页面路由、主包/分包、tabBar 和自定义导航以目标项目的 `pages.json` 或生成源为准。
- 使用 `uni.*` 前先核对目标平台支持度、权限声明、返回结构和 H5 降级路径。
- 尺寸单位、安全区、键盘、selector query、scroll-view 和 swiper 行为按目标平台实测，不复制固定机型数值。
- 环境地址、密钥、支付渠道、静态资源前缀和 socket 地址必须来自配置层。

## 多技能串联

- 请求、鉴权 header、错误和 Vuex：使用 `huabing-mini-vue2-request-store-flow`。
- 页面与局部模块骨架：使用 `huabing-mini-vue2-feature-scaffold`。
- 组件、滚动、导航和跨端样式：使用 `huabing-mini-vue2-cross-platform-ui`。
- 中心弹窗或底部弹层：分别使用 `huabing-mini-vue2-dialog-flow`、`huabing-mini-vue2-popup-flow`。
- 定时器、轮询、WebSocket：使用 `huabing-mini-vue2-realtime-lifecycle-flow`。
- 表单或列表：使用 `huabing-mini-vue2-form-submit-flow`、`huabing-mini-vue2-list-pagination-flow`。
- 旧版/新版页面并行和路由矩阵：使用 `huabing-mini-vue2-versioned-route-flow`。
- 业务域再按登录、定位、交易、支付、售后或营销会员技能补充，不用业务技能替代基础层规则。

## 实施顺序

1. 写出入口、状态所有者、外部副作用和清理点。
2. 列出受影响平台、登录态、页面版本和成功/失败/取消路径。
3. 先修改最底层稳定契约，再修改 Store、页面和组件调用方。
4. 保留旧流程时建立显式适配或路由矩阵，不散落版本判断。
5. 修改生成源后运行生成命令，并审查生成差异；不要把生成结果当长期维护源。

## 验证

- 运行目标项目实际存在的 lint、测试和最小构建命令。
- 至少覆盖目标平台、登录/未登录、首次进入/返回刷新、成功/失败/取消和页面卸载清理。
- 涉及持久化时检查容量、敏感数据和旧版本迁移；涉及异步时检查重复请求、过期响应和 loading 恢复。
- 面向项目所有者的计划、说明、检查清单和 metadata 中文优先。
