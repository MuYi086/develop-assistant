# Vue 2 构建与发布通用链路

## 先绘制真实链路

```text
package script
  -> pre 生命周期或预处理脚本
  -> Vue CLI/Webpack 编译
  -> 制品包装与构建元数据
  -> 上传/部署
  -> tag、CHANGELOG 或版本发布
  -> 通知
```

package manager 会自动执行同名 `pre*`/`post*`。任何看似“build”的入口都要先展开，不能仅凭名称判断安全性。

## 环境模型

建议把两个维度分开：

| 维度 | 作用 | 常见值 |
| --- | --- | --- |
| 构建模式 | 优化、source map、调试能力 | development、production |
| 业务环境 | API、WebSocket、静态资源、租户配置 | local、test、staging、production |

环境变量名由宿主项目决定，例如 `APP_ENV`、`API_ENV` 或框架前缀变量。新增环境必须同步检查：

- package script 或 CI 参数；
- 环境映射和默认分支；
- devServer 代理与运行时 API/WebSocket 地址；
- 静态资源前缀、publicPath 与 CDN；
- 是否允许部署、通知或版本发布。

禁止把 secret 放入会进入浏览器 bundle 的变量。客户端只接收显式白名单中的公开配置。

## 构建信息

```text
Git/CI 元数据 -> 构建期生成 JSON/JS -> 打包进入制品 -> 运行时读取 -> 更新检测或通知
```

字段可包括项目标识、环境、分支、commit hash、subject、构建时间、版本和 CI run ID。实现时：

- 不依赖只在开发机存在的 Git 用户配置；
- 为浅克隆、无 tag 和源码压缩包提供缺省值；
- 字段改名时兼容旧客户端或提供迁移；
- 将浏览器读取的文件设置合适缓存策略，更新检测文件通常不能长期缓存；
- 不把提交正文、远程 URL 或环境快照中的敏感信息带入制品。

## 版本与变更日志

- 先确认宿主项目使用手工版本、Changesets、semantic-release 或其他方案。
- Conventional Commits 的 type、分支和发布通道以仓库配置为准。
- 自动 commit、pull、push、tag 与发布都是外部状态变更，不作为普通验证步骤。
- CHANGELOG 的生成、格式化和提交应幂等；dry-run 不应修改版本或远端。

## Node 与模块兼容

- 根据宿主 `package.json#type`、Node 版本与工具链选择 `.js`、`.cjs` 或 `.mjs`。
- 旧 Vue CLI/Webpack 项目升级 loader 前检查 Node、Sass、Webpack 和插件兼容矩阵。
- ESM 中读取 JSON 优先使用明确的文件读取或当前 Node 支持的 import assertion，不复制不兼容语法。
- Node 编排脚本应检查退出码并传播失败，部署和通知不得掩盖编译失败。

## 安全验证

1. 只读查看 scripts、CI、发布配置和部署目标。
2. 拆出或直接调用无外部副作用的编译器入口，并使用临时输出目录。
3. 用脱敏 fixture 测试通知格式，不调用真实 Webhook。
4. 对发布工具使用 dry-run；检查它是否仍会获取凭据或写入文件。
5. 扫描源码与制品中的 token 名、私有域名、密钥格式和意外环境变量。
