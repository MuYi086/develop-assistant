# Develop Assistant 记忆

## 项目概述

Develop Assistant 是一个可被其他项目通过 `claude --add-dir` 引入的前端Vibe Coding辅助工具，提供标准化AI驱动开发流程、团队规范和工具链配置。

## 核心流程

7层架构开发流程：
1. **Layer 1**: 文档抓取
2. **Layer 2**: 需求结构化
3. **Layer 3**: 领域与契约
4. **Layer 4**: 红测试
5. **Layer 5**: 绿代码+视觉还原
6. **Layer 6**: 交付
7. **Layer 7**: 知识沉淀

## 跨平台支持

详见 [cross-platform.md](./cross-platform.md)

### 支持环境
- Linux/Mac: `claude-ai.sh`
- Windows CMD: `claude-ai.cmd`
- Windows Git Bash: `claude-ai.sh`

### 关键路径
- Linux/Mac: `~/develop-assistant`
- Windows: `%USERPROFILE%\develop-assistant`

## 技术栈

- Vue 3 + TypeScript
- Pinia 状态管理
- Element Plus UI组件库
- Vitest 测试框架
- Tailwind CSS
- Pencil 设计工具

## 可用 Skills

25个内置skills，涵盖：
- Vue生态（7个）
- 工具链（4个）
- 工程化（3个）
- Layer流程（7个）
- Pencil工具链（4个）

## 重要文件

- `CLAUDE.md` - 项目核心文档
- `OPERATIONAL-GUIDE.md` - 详细操作指南
- `scripts/claude-ai.sh` - Linux/Mac 启动脚本
- `scripts/claude-ai.cmd` - Windows 启动脚本
- `.claude/settings.json` - Skills 配置

## 多设备同步

私有仓库：`git@github.com:MuYi086/develop-assistant.git`

```bash
# 工作完成后
cd ~/develop-assistant
git add .
git commit -m "update: 描述变更"
git push

# 切换设备后
cd ~/develop-assistant
git pull
```

## 启动命令

```bash
# Linux/Mac/Git Bash
claude-ai

# Windows CMD
claude-ai.cmd
```
