# Develop Assistant 跨平台使用指南

## 环境支持

| 环境 | 脚本 | 推荐程度 |
|------|------|----------|
| Linux/Mac | `scripts/claude-ai.sh` | ⭐⭐⭐ 最佳 |
| Windows Git Bash | `scripts/claude-ai.sh` | ⭐⭐⭐ 推荐 |
| Windows CMD | `scripts/claude-ai.cmd` | ⭐⭐⭐ 推荐 |
| Windows PowerShell | `scripts/claude-ai.cmd` | ⭐⭐ 可用 |

## 快速配置

### Linux/Mac（家里）

```bash
# 1. 克隆仓库
git clone git@github.com:MuYi086/develop-assistant.git ~/develop-assistant

# 2. 配置别名
echo 'alias claude-ai="\$HOME/develop-assistant/scripts/claude-ai.sh"' >> ~/.bashrc
source ~/.bashrc

# 3. 启动
cd /path/to/your-project
claude-ai
```

### Windows（公司）

#### 方式1：Git Bash（推荐）
```bash
# 1. 克隆仓库
git clone git@github.com:MuYi086/develop-assistant.git $HOME/develop-assistant

# 2. 配置别名
echo 'alias claude-ai="\$HOME/develop-assistant/scripts/claude-ai.sh"' >> ~/.bashrc
source ~/.bashrc

# 3. 在业务项目中启动
cd /c/path/to/your-project  # 注意：Git Bash 使用 /c/ 而不是 C:\
claude-ai
```

#### 方式2：CMD/PowerShell
```cmd
:: 1. 克隆仓库
git clone git@github.com:MuYi086/develop-assistant.git %USERPROFILE%\develop-assistant

:: 2. 添加 PATH（可选，推荐）
setx PATH "%PATH%;%USERPROFILE%\develop-assistant\scripts"

:: 3. 重启终端后，在业务项目中启动
cd C:\path\to\your-project
claude-ai.cmd
```

## 实现原理

### 跨平台统一入口

1. **Bash 脚本 (`claude-ai.sh`)**:
   - 用于 Linux/Mac/Git Bash
   - 使用软链接 (`ln -s`) 链接 `.ai` 目录
   - Skills 同步到 `~/.claude/skills/`

2. **CMD 脚本 (`claude-ai.cmd`)**:
   - 用于 Windows CMD/PowerShell
   - 使用 Junction (`mklink /J`) 链接 `.ai` 目录
   - Skills 同步到 `%USERPROFILE%\.claude\skills\`

### 统一功能

两个脚本都实现以下功能：
- ✅ 自动同步 skills 到全局目录
- ✅ 自动创建/链接 `.ai` 工作目录
- ✅ 启动 Claude 并加载辅助项目
- ✅ 使用 `--add-dir` 引入 develop-assistant

## 路径对照表

| 项目 | Linux/Mac | Windows |
|------|-----------|---------|
| 辅助项目目录 | `~/develop-assistant` | `%USERPROFILE%\develop-assistant` |
| Skills 目录 | `~/.claude/skills` | `%USERPROFILE%\.claude\skills` |
| AI 工作目录 | `~/develop-assistant/.ai` | `%USERPROFILE%\develop-assistant\.ai` |
| 启动命令 | `claude-ai` | `claude-ai.cmd` |

## 多设备同步

### 日常同步流程

```bash
# ===== 工作完成后（任意系统）=====
cd ~/develop-assistant  # 或 Windows: cd %USERPROFILE%\develop-assistant
git add .
git commit -m "update: 描述变更"
git push

# ===== 切换设备后（任意系统）=====
cd ~/develop-assistant  # 或 Windows: cd %USERPROFILE%\develop-assistant
git pull
# 启动 Claude 会自动同步 skills
```

## 故障排查

### Windows: 'claude-ai' 不是内部或外部命令

**原因**: 未添加到 PATH

**解决**:
```cmd
:: 方式1：临时使用完整路径
"%USERPROFILE%\develop-assistant\scripts\claude-ai.cmd"

:: 方式2：添加到 PATH 后重启终端
setx PATH "%PATH%;%USERPROFILE%\develop-assistant\scripts"
```

### Windows: 无法创建 Junction

**原因**: 权限不足或非管理员终端

**解决**:
- 以管理员身份运行 CMD/PowerShell
- 或确保 `.ai` 目录不存在（脚本会自动备份）

### Skills 未加载

**原因**: Skills 未同步到全局目录

**解决**:
```bash
# 手动同步（Linux/Mac/Git Bash）
mkdir -p ~/.claude/skills
cp -r ~/develop-assistant/.agents/skills/* ~/.claude/skills/

:: 手动同步（Windows CMD）
mkdir "%USERPROFILE%\.claude\skills"
xcopy /E /I "%USERPROFILE%\develop-assistant\.agents\skills\*" "%USERPROFILE%\.claude\skills\"
```

## 参考文件

- `scripts/claude-ai.sh` - Linux/Mac/Git Bash 启动脚本
- `scripts/claude-ai.cmd` - Windows CMD 启动脚本
- `CLAUDE.md` - 完整使用文档
