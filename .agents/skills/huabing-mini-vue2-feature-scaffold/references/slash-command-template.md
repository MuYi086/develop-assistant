# 可选 Slash Command 模板

如果要做 slash command，建议只作为 skill 的入口别名，不把完整规则塞进 command。

## 模板

```md
请使用 $huabing-mini-vue2-feature-scaffold。

新需求信息：
- 页面路径：
- 导航标题：
- 分包 root：
- store 模块名：
- API 模块名：
- 接口常量和路径：
- 是否需要 H5 入口：
- 是否有登录/未登录接口对：

要求：
- 先读项目现状和相邻实现。
- 生成页面、同级 components、api_*.js、api/index.js、Vuex module、getters 和路由源。
- 页面 onLoad 通过 store action 请求，页面通过 getters 使用值。
- 不直接维护 src/env.js，不把 src/pages.json 当长期源文件。
```

## 推荐用法

把 command 命名成 `/huabing-feature` 或 `/new-huabing-page` 即可。command 的作用只是收集字段并触发 skill；具体规则仍由 skill 和项目上下文决定。
