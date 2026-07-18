---
name: huabing-web-vue2-release-automation
description: "通用 Vue 2 PC Web 项目的多环境构建与发布自动化规范。用于修改 package scripts、Vue CLI/Webpack 配置、环境变量、Node/ZX 前后置钩子、构建信息、Husky/commitlint、semantic-release、CHANGELOG、部署或通知流程时，先展开完整副作用链，再安全实现和验证。"
---

# 话饼 Web Vue2 发布自动化

## 开始前

1. 读取 `references/release-pipeline.md`。
2. 检查宿主项目的 package scripts、Vue CLI/Webpack 配置、环境文件、Node 脚本、CI 与发布配置。
3. 明确需求属于配置、本地编译、制品处理、部署、版本发布还是通知；权限不自动扩张。

## 实施流程

1. 展开目标命令的 package-manager pre/post 生命周期、脚本调用和 CI 后续阶段，标出所有外部写操作。
2. 将构建模式与后端/租户环境分别建模；新增环境时同步配置入口、环境映射、代理、运行时配置和 CI 参数。
3. 调整构建信息时同步核对生成端、制品包装、运行时读取端和更新检测，保持字段向后兼容。
4. 调整发布时同步核对分支策略、Conventional Commits、版本分析、tag、CHANGELOG 和自动提交边界。
5. 按宿主 Node 版本和模块体系维护 ESM/CJS 边界；不要机械复制另一项目的文件扩展名或 loader 上限。

## 安全约束

- 未经明确授权，不运行会部署、推送、打 tag、发通知、发布版本或自动提交的命令。
- 不在源码、Skill、示例或命令输出中新增 token、Webhook、SSH 密码、私钥、账号和私有地址；使用 CI secret 或受控环境变量。
- 不把整个 `process.env` 注入客户端；只白名单暴露可公开变量，并扫描最终制品。
- 为纯编译提供不经过部署钩子的底层入口；不要假设 `npm run build` 无副作用。
- 生成文件应来源清晰且尽量确定；时间、随机值和提交信息只在确有诊断价值时加入。
- 不从来源项目复制分支、环境名、域名、通知渠道或部署主机，全部以宿主配置为准。

## 验证

1. 静态检查脚本展开图、环境变量来源和每一步输入输出。
2. 使用无 deploy/push/notify/release 的本地编译路径验证构建配置。
3. 核对构建元数据的源文件、制品形式、缓存策略和运行时读取。
4. 对发布配置执行 dry-run 或只读检查；真实部署和通知必须明确目标环境并再次确认。
5. 检查 diff、生成文件与敏感信息扫描结果，确保没有意外版本变化或外部状态变更。
