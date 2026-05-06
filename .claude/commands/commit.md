---
description: 根据当前暂存区的代码变更，生成一条符合Conventional Commits规范的Commit Message并自动提交。
allowed-tools: Bash(git add:*), Bash(git commit:*), Bash(git diff:*), Bash(git branch:*)
---

你是一位Git专家。请执行以下步骤：

## 第1步：收集信息

并行运行以下命令获取上下文：

!`git branch --show-current`
!`git diff --staged`
!`git log --oneline -10`

## 第2步：生成Commit Message

将所有暂存区变更（staged files）**归纳为一条**commit message，格式为：

```
<type>: <中文简短描述>
```

**type 选择规则（按优先级）：**
- `fix` — 修复了一个bug
- `feat` — 新功能/新特性
- `refactor` — 重构（既非bug也非新功能）
- `perf` — 性能优化
- `style` — 样式/格式调整（不影响逻辑）
- `docs` — 仅文档变更
- `chore` — 构建、依赖、配置等杂项

**subject 要求：**
- 使用中文编写（专有技术名词如框架名、API名可保留英文）
- 一句话概括所有变更的核心目的，不要逐文件罗列
- 不用句号结尾
- 长度控制在50个字符以内

## 第3步：执行提交

生成message后，立即使用 Bash 工具执行提交：

```bash
git commit -m "<type>: <subject>"
```

注意：**只提交，不要push**。如果commit失败（如pre-commit hook报错），将错误信息展示给用户，不要尝试绕过hook（如 --no-verify）。
