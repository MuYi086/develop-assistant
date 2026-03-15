# .ai 目录多设备同步方案

> 问题：`.ai/` 包含个人核心竞争力，不提交到公司Git，但需要在多台电脑间同步

## 方案对比

| 方案 | 难度 | 成本 | 安全性 | 实时性 | 推荐度 |
|------|------|------|--------|--------|--------|
| **私有Git仓库** | ⭐⭐ | 免费 | ⭐⭐⭐ | 手动 | ⭐⭐⭐⭐⭐ |
| **云盘同步** | ⭐ | 免费~低 | ⭐⭐ | 自动 | ⭐⭐⭐⭐ |
| **NAS/自建** | ⭐⭐⭐⭐ | 高 | ⭐⭐⭐⭐⭐ | 实时 | ⭐⭐⭐ |
| **Syncthing** | ⭐⭐⭐ | 免费 | ⭐⭐⭐⭐ | 实时 | ⭐⭐⭐ |

---

## 方案1：私有Git仓库（⭐最推荐）

**适合**：有GitHub/GitLab账号，熟悉Git操作

### 优点
- 版本控制完整，可追溯历史
- 免费（GitHub私有仓库/GitLab私有仓库）
- 冲突解决能力强
- 完全控制权限

### 缺点
- 需要手动commit/push/pull
- 可能有学习成本（对Git不熟悉的用户）

### 实施步骤

```bash
# 1. 在GitHub/GitLab创建私有仓库（如 ai-workspace）

# 2. 初始化 develop-assistant/.ai 为Git仓库
cd ~/develop-assistant/.ai
git init
git remote add origin https://github.com/YOUR_USERNAME/ai-workspace.git

# 3. 创建 .gitignore（排除敏感大文件）
cat > .gitignore << 'EOF'
# 排除设计原稿（通常很大）
*.sketch
*.fig
*.psd

# 排除临时文件
*.tmp
.DS_Store
EOF

# 4. 首次提交
git add .
git commit -m "init: AI工作空间"
git push -u origin main

# 5. 在其他机器上克隆
cd ~/develop-assistant
rm -rf .ai  # 注意：先备份已有内容
git clone https://github.com/YOUR_USERNAME/ai-workspace.git .ai
```

### 日常 workflow

```bash
# 工作结束后同步到云端
cd ~/develop-assistant/.ai
git add .
git commit -m "update: pos-ui L3契约定义完成"
git push

# 到另一台机器后拉取最新
cd ~/develop-assistant/.ai
git pull
```

### 自动化脚本

可以添加到 `claude-ai.sh` 结尾：

```bash
# =========================== 自动同步提示 ===========================
if [ -d "$AI_WORKSPACE_DIR/.git" ]; then
    echo -e "${BLUE}💡 提示: 记得定期同步 .ai 目录到私有仓库${NC}"
    echo -e "   cd $AI_WORKSPACE_DIR && git add . && git commit -m 'update' && git push"
fi
```

---

## 方案2：云盘同步（⭐最简单）

**适合**：不想折腾Git，追求简单

### 可选云盘

| 云盘 | 免费空间 | 跨平台 | 特点 |
|------|----------|--------|------|
| **坚果云** | 1GB/月流量 | ✅ | 国内稳定，增量同步 |
| **OneDrive** | 5GB | ✅ | Win/Mac都好用 |
| **iCloud** | 5GB | ❌ | 仅Apple生态 |
| **Google Drive** | 15GB | ✅ | 需要梯子 |
| **Dropbox** | 2GB | ✅ | 稳定但空间小 |

### 实施步骤（以坚果云为例）

```bash
# 1. 安装坚果云客户端
# 2. 在坚果云中创建 ai-workspace 文件夹

# 3. 将 develop-assistant/.ai 作为云盘同步文件夹的软链接
# 或者反过来：把云盘文件夹链接到 develop-assistant

# 方法A：.ai 作为云盘文件夹的链接
mv ~/develop-assistant/.ai ~/develop-assistant/.ai.local
ln -s ~/Nutstore/ai-workspace ~/develop-assistant/.ai

# 方法B：云盘同步 develop-assistant/.ai
# 在坚果云客户端中添加 ~/develop-assistant/.ai 为同步文件夹
```

### 优点
- 全自动同步，无需手动操作
- 有文件历史版本（大部分云盘）
- 简单易用

### 缺点
- 依赖第三方服务
- 免费空间有限
- 大文件同步可能慢

---

## 方案3：NAS/自建服务器（⭐最安全）

**适合**：有NAS设备，或对数据安全要求极高

### 实施方式
- **群晖NAS**：使用 Synology Drive 同步
- **威联通NAS**：使用 Qsync
- **自建服务器**：使用 Nextcloud / Seafile

### 优点
- 数据完全在自己手中
- 无容量限制
- 局域网同步极快

### 缺点
- 需要硬件投入
- 需要一定技术能力维护
- 外网访问需要配置

---

## 方案4：Syncthing（⭐技术向）

**适合**：不想依赖云服务，追求去中心化

### 是什么
开源P2P文件同步工具，设备间直接同步，无需中央服务器。

### 优点
- 完全免费开源
- 端到端加密
- 无服务器，隐私最好
- 局域网内极速同步

### 缺点
- 配置相对复杂
- 两台设备同时在线才能同步
- 冲突解决不如Git优雅

---

## 我的建议

### 首选：方案1 私有Git仓库

原因：
1. `.ai` 目录本质上是文本文件（markdown），Git最擅长处理
2. 有完整的版本历史，可以回溯任何改动
3. 免费，且不受云盘容量限制
4. 作为开发者，Git操作是基本技能

### 备选：方案2 坚果云/OneDrive

如果不想每次手动commit，或者需要同步大文件（设计原稿），可以选择云盘。

---

## 决策检查清单

- [ ] 是否有GitHub/GitLab账号？
- [ ] 是否介意每次手动 `git commit && push`？
- [ ] `.ai` 目录预计多大？（设计原稿会很大）
- [ ] 是否有NAS设备？
- [ ] 对数据隐私的要求有多高？

---

请根据以上信息告诉我你的选择，我来帮你实施具体配置。
