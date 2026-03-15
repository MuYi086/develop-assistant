#!/bin/bash
# =============================================================================
# develop-assistant 同步脚本
# =============================================================================
# 用法:
#   ./sync.sh         # 推送到远程
#   ./sync.sh pull    # 从远程拉取
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 颜色
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🔄 develop-assistant 同步工具${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 检查Git仓库
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ 错误: 当前目录不是Git仓库${NC}"
    exit 1
fi

# 显示远程信息
echo -e "${BLUE}📡 远程仓库:${NC}"
git remote -v | head -1
echo ""

# 显示未提交的变更
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}📋 未提交的变更:${NC}"
    git status --short
    echo ""
fi

# 根据参数执行操作
if [ "$1" = "pull" ]; then
    echo -e "${BLUE}⬇️  从远程拉取更新...${NC}"
    git pull origin main
    echo ""
    echo -e "${GREEN}✅ 拉取完成${NC}"
else
    # 默认推送
    if [ -n "$(git status --porcelain)" ]; then
        echo -e "${BLUE}💾 自动提交变更...${NC}"
        git add -A
        git commit -m "sync: $(date '+%Y-%m-%d %H:%M:%S')"
        echo ""
    fi

    echo -e "${BLUE}⬆️  推送到远程...${NC}"
    git push origin main
    echo ""
    echo -e "${GREEN}✅ 同步完成${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
