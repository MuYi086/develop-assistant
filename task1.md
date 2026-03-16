# Task 1: 跨平台使用支持

## 任务目标
1. ✅ 阅读 OPERATIONAL-GUIDE.md
2. ✅ 公司里是 Windows 电脑，家里是 Linux 环境
3. ✅ 期望在两个系统上，在业务项目中使用 claude-ai 都能引入 develop-assistant 的信息

## 完成情况

### 已完成的改动

1. **创建了 Windows 启动脚本** (`scripts/claude-ai.cmd`)
   - 支持 Windows CMD 环境
   - 自动同步 skills 到 `%USERPROFILE%\.claude\skills\`
   - 使用 Junction 链接 `.ai` 工作目录
   - 自动检测业务项目并链接 AI 工作空间

2. **更新了 CLAUDE.md**
   - 添加了 Windows 环境的多设备同步方案
   - 更新了协作方式的跨平台说明
   - 更新了快速开始的配置指南

3. **创建了记忆文档**
   - `memory/cross-platform.md` - 详细的跨平台使用指南
   - `memory/MEMORY.md` - 项目概述和快速参考

### 使用方式

#### Linux/Mac（家里）
```bash
# 配置别名
echo 'alias claude-ai="\$HOME/develop-assistant/scripts/claude-ai.sh"' >> ~/.bashrc
source ~/.bashrc

# 在业务项目中使用
cd /path/to/your-project
claude-ai
```

#### Windows（公司）
```cmd
:: 方式1：直接运行（推荐）
cd C:\path\to\your-project
"%USERPROFILE%\develop-assistant\scripts\claude-ai.cmd"

:: 方式2：添加到 PATH 后
setx PATH "%PATH%;%USERPROFILE%\develop-assistant\scripts"
:: 重启终端后
cd C:\path\to\your-project
claude-ai.cmd
```

#### Windows Git Bash
```bash
# Git Bash 可以直接使用 Linux 脚本
cd /c/path/to/your-project
~/develop-assistant/scripts/claude-ai.sh
```

### 核心功能

两个脚本都实现：
- ✅ 自动同步 skills 到全局目录
- ✅ 自动创建/链接 `.ai` 工作目录到 develop-assistant
- ✅ 启动 Claude 并加载辅助项目 (`--add-dir`)
- ✅ 在业务项目中保持 `.ai/` 数据统一

### 多设备同步

```bash
# 任何系统工作完成后
cd ~/develop-assistant  # Linux/Mac
:: 或 cd %USERPROFILE%\develop-assistant  :: Windows
git add .
git commit -m "update: 描述变更"
git push

# 切换设备后拉取
git pull
```

## 状态
**已完成** ✅
