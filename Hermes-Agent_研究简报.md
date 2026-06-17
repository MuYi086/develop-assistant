# Hermes Agent 研究简报

> 研究时间：2026-06-17  
> 研究对象：NousResearch/hermes-agent  
> 类型：自托管个人 AI Agent 运行时 / 多入口 agent 框架 / skill + memory 系统

## 一句话结论

Hermes Agent 不是单纯的 coding agent，而是一个“常驻个人代理运行时”：同一个 `AIAgent` 内核同时服务 CLI、TUI、桌面端、Web 管理台、消息网关、cron 定时任务、ACP/IDE 接入和批量轨迹生成。它的核心卖点是自托管、模型无锁定、多平台消息入口、持久记忆、skill 自进化、定时自动化和广泛工具后端。

如果从“AI 应用开发/agent 架构学习”的角度看，它很值得研究；如果从“马上接管敏感工作流”的角度看，需要强安全边界，不能把内置审批、红action、规则扫描当真正隔离。

## 基本事实

- 主仓库：`NousResearch/hermes-agent`
- 官网/文档：`https://hermes-agent.nousresearch.com`
- License：MIT
- 主要语言：Python，另有 Web/TUI/Desktop 前端工作区
- 当前主版本：`pyproject.toml` 显示 `0.16.0`
- 最新 release：`Hermes Agent v0.16.0 (2026.6.5) — The Surface Release`
- GitHub API 在 2026-06-17 读取到：创建于 2025-07-22，最近 push 为 2026-06-16，约 195k stars、34k forks、21k open issues。这个体量非常异常但来自 GitHub API，暂按公开数据记录。

## 定位：它想解决什么

Hermes 的目标不是“帮你写一次代码”，而是“长期跟着你工作的个人 agent”。README 里强调几件事：

- Agent 会从任务经验中创建 skill，并在使用中改进 skill。
- Agent 会主动持久化知识，搜索过往对话，逐渐建立用户画像。
- Agent 可以跑在 VPS、GPU 集群、Modal/Daytona 等环境，不要求绑定本机。
- 用户可以从 Telegram、Discord、Slack、WhatsApp、Signal、CLI 等入口持续对话。
- 模型供应商可以随时切换，支持 Nous Portal、OpenRouter、OpenAI、Anthropic、Hugging Face、NVIDIA NIM、Kimi、MiniMax、z.ai、Xiaomi MiMo、自定义 OpenAI-compatible endpoint 等。

这个定位和 Codex/Claude Code 的主线不同。Codex/Claude Code 更像软件工程 agent；Hermes 更像“自托管个人 agent OS”。

## 架构脉络

官方架构文档把系统拆成几层：

- 入口层：CLI、Gateway、ACP、Batch Runner、API Server、Python Library。
- 核心层：`AIAgent`，负责 prompt 构建、provider 解析、API 调用、工具调用、压缩、回退、持久化。
- 工具层：70+ tools、约 28 toolsets，终端后端包括 local、Docker、SSH、Singularity、Modal、Daytona。
- 状态层：SQLite + FTS5，保存 session、message、tool call、全文检索、session lineage。
- 扩展层：MCP、plugins、memory provider、context engine、skills。
- 自动化层：cron job 是“一次 fresh agent session”，不是 shell cron。

`AIAgent` 的内部循环和我们现在用的 Codex/Claude Code 类似：模型输出 tool call，运行工具，把结果塞回上下文，再循环直到最终回复。不同点在于 Hermes 把这个 loop 做成可复用运行时，再挂到网关、cron、ACP、桌面端和 Web 管理台。

## 最有研究价值的模块

### 1. Skill 系统

Hermes 的 skill 和 OpenAI/Claude/Codex 生态里的 Skill 思路接近：用 `SKILL.md` 表示可按需加载的过程知识，并使用 progressive disclosure 降低 token 成本。

关键点：

- 默认目录是 `~/.hermes/skills/`。
- 支持外部 skill 目录，例如可以把一个团队共享技能仓库挂进 Hermes。
- skill 可作为 slash command 使用。
- skill 可声明环境变量、配置项、平台限制、toolset 依赖。
- agent 可以修改 skill，但有 `skills.write_approval` 审批开关。

这和本仓库 `.agents/skills/` 很相关。理论上，你可以把已有技能目录作为 Hermes 的 `skills.external_dirs` 进行试验，但要注意：Hermes 文档明确说外部目录不是写保护边界；如果 Hermes 进程对目录有写权限，agent-managed skill updates 可以改那些文件。

### 2. Memory + Session Search

Hermes 有两层记忆：

- `MEMORY.md`：环境、项目、经验，默认 2200 字符。
- `USER.md`：用户偏好、沟通风格，默认 1375 字符。

同时，所有 session 都进入 SQLite，带 FTS5 搜索。官方强调 memory 是“关键事实常驻上下文”，session search 是“按需找过去聊过的具体内容”。

这个设计比较实用：它没有把所有历史都塞 prompt，而是用小容量 curated memory + 大容量 searchable history 做折中。

### 3. Cron 调度

Hermes 的 cron 不是普通 shell job，而是定时启动一个 fresh `AIAgent` session。job 支持：

- relative delay、interval、cron expression、ISO timestamp。
- 绑定一个或多个 skill。
- 投递到 Telegram、Discord、Slack、Email、SMS、WeChat/WeCom、QQ Bot、Home Assistant 等。
- no-agent mode：只运行脚本并把 stdout 投递出去。

它适合做日报、监控、定期总结、订阅源扫描、代码库定期审计。但 cron 也放大了安全问题，因为它可以在无人值守时执行。

### 4. Provider Runtime

Hermes 把 provider/model/credential/api mode 解析做成共享层，CLI、gateway、cron、ACP、辅助模型调用都复用同一套逻辑。它支持三类 API mode：

- `chat_completions`
- `codex_responses`
- `anthropic_messages`

这点对学习 agent 产品工程很有价值：真正落地时，多 provider 不是简单拼 base_url，而是涉及 credential scope、fallback、OAuth 刷新、辅助模型路由、不同 tool call 格式转换。

### 5. Self-Evolution 分支

`NousResearch/hermes-agent-self-evolution` 是一个旁支项目，目标是用 DSPy + GEPA 做 skill、prompt、tool description、甚至代码的进化优化。

当前 README 显示：

- Phase 1：优化 `SKILL.md` 已实现。
- Phase 2：工具描述优化，计划中。
- Phase 3：系统 prompt 优化，计划中。
- Phase 4：工具实现代码进化，计划中。
- Phase 5：持续优化 loop，计划中。

这个方向和“人工智能训练师 / agent 评估 / prompt 优化”很贴合，值得单独跟踪。

## 横向对比

| 对象 | 更像什么 | Hermes 的差异 |
|---|---|---|
| Codex / Claude Code | 软件工程 agent | Hermes 范围更宽，强调常驻、消息入口、memory、cron、skill 自进化；代码能力未必强于专用 coding agent |
| OpenClaw | 最接近的个人 agent / always-on assistant | Hermes 提供 OpenClaw 迁移路径，显然在争夺同一类用户；Hermes 当前文档更强调 provider/runtime、skill、security 和多端 surface |
| CrewAI / LangGraph / AutoGen | agent framework/library | Hermes 是面向个人部署的产品化 runtime，不只是编排库 |
| Manus 类云端通用 agent | 托管式通用任务 agent | Hermes 偏自托管和可扩展，部署复杂度更高，但数据/环境控制更强 |

## 风险与短板

### 1. 安全边界必须靠 OS，不靠 agent 内部规则

Hermes 自己的 SECURITY.md 写得很直接：面对 adversarial LLM，唯一真正的安全边界是操作系统级隔离。approval gate、输出脱敏、pattern scanner、tool allowlist 都只是启发式防误操作，不是 containment。

这意味着：

- 默认 local backend 下，agent 能做的事情基本接近当前用户账号能做的事情。
- 如果接入邮件、网页、群聊、MCP、第三方 skill，必须考虑 prompt injection 和持久化污染。
- 生产/共享/含不可信输入的部署，应优先 whole-process sandbox，而不只是 terminal backend sandbox。

### 2. 常驻 + 记忆 + skill 自修改 = 价值和攻击面同时变大

Hermes 的优势是“会长期学习”；风险也在这里。恶意输入如果能变成 memory、skill、cron job、filesystem patch，就可能延迟触发。2026 年 5 月的 Sleeper Channels 论文就把 OpenClaw 和 Hermes Agent 归入 always-on autonomous agent 风险类别，指出持久 substrate 和 delayed firing 会组合出 sleeper channel。

### 3. Cron 与 memory 的边界存在设计张力

2026 年 6 月的 Channel Fracture 论文报告了一个 Hermes production deployment 中的失败模式：cron 上下文因 `skip_memory=True` 和 memory tool 条件注册，导致 cron-delegated memory injection 失败。这个结论来自单个生产部署，不应直接当成所有版本的通用事实，但它指出的设计张力是真实的：防止 cron 污染用户记忆，与允许明确的跨 agent memory 写入，会冲突。

### 4. 文档有滞后

英文 README 和 release 都说明原生 Windows 支持已经落地，`pyproject.toml` 也有 Windows 相关依赖；但中文 README 仍写“原生 Windows 不受支持，请用 WSL2”。中文资料要以英文 README、release 和代码为准。

### 5. 复杂度高

Hermes 覆盖 provider、gateway、desktop、web dashboard、MCP、cron、memory、skills、plugins、terminal backend。学习价值高，但也意味着部署和排障成本不低。对 16G Windows 笔记本来说，不建议一开始把所有 surface 都打开。

## 对你的价值判断

对你这种高级前端 + 正在转向 AI 应用/训练师方向的背景，Hermes 值得研究，原因有三点：

1. 它是一个完整 agent 产品工程样本，不只是 demo。
2. 它把 skill/memory/session/provider/tool/security 这些 agent 工程关键问题都摆在台面上。
3. 它的 self-evolution 方向和“如何评估、优化、沉淀 agent 能力”高度相关。

不建议把它当成“替代 Codex/Claude Code 的写代码工具”。更合适的定位是：研究它如何把 agent 从一次性对话变成长期运行的个人工作系统。

## 建议试用路径

1. 先不接消息网关，不开 cron，不开 YOLO。
2. 在 WSL2 或 Docker 中安装，或至少用低权限用户/独立目录试用。
3. 使用 `hermes model` 接 OpenRouter/自定义 endpoint，先跑 CLI/TUI。
4. 挂载一个只读或临时复制的 skill 目录，测试 Hermes 对 `.agents/skills` 类技能的兼容性。
5. 测试 session search、memory approval、skills approval。
6. 再试一个 local-only cron job，例如生成日报到本地文件，不接真实账号。
7. 真要接 Telegram/Discord/Slack 时，必须配置 allowlist，不要 allow all。
8. 如果处理网页、邮件、群聊、MCP 这类不可信输入，使用 whole-process sandbox。

## 推荐阅读顺序

1. README：确认产品定位与安装入口。
2. Architecture：看全局分层。
3. Agent Loop Internals：看主循环、tool call、fallback。
4. Tools Runtime：看 tool registry 与 toolset。
5. Skills System：看 skill 格式、external dirs、审批。
6. Persistent Memory：看 memory 与 session search。
7. Cron / Cron Internals：看定时任务如何运行。
8. Security / SECURITY.md：重点看 trust model。
9. hermes-agent-self-evolution：看 skill/prompt 进化优化方向。

## 信息来源

- GitHub 主仓库：https://github.com/NousResearch/hermes-agent
- GitHub API 仓库元数据：https://api.github.com/repos/NousResearch/hermes-agent
- Release v0.16.0：https://github.com/NousResearch/hermes-agent/releases
- Architecture：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/architecture.md
- Agent Loop：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/agent-loop.md
- Skills：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/skills.md
- Memory：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory.md
- Cron：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/cron.md
- Cron Internals：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/cron-internals.md
- Security Guide：https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/security.md
- SECURITY.md：https://github.com/NousResearch/hermes-agent/blob/main/SECURITY.md
- Self-Evolution：https://github.com/NousResearch/hermes-agent-self-evolution
- WildClawBench：https://arxiv.org/abs/2605.10912
- Sleeper Channels：https://arxiv.org/abs/2605.13471
- Channel Fracture：https://arxiv.org/abs/2606.04896
