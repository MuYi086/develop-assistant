#!/bin/bash
# =============================================================================
# AI 工作空间链接脚本 - 将业务项目链接到 develop-assistant 的 .ai 目录
# =============================================================================
# 用法:
#   ./link-ai.sh [project-name]          # 链接到指定项目名称
#   ./link-ai.sh                         # 自动使用当前目录名作为项目名
#
# 示例:
#   cd /path/to/pos-ui
#   ~/develop-assistant/scripts/link-ai.sh
#   # 或指定名称: ~/develop-assistant/scripts/link-ai.sh my-pos
# =============================================================================

set -e

# 获取 develop-assistant 目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEVELOP_ASSISTANT_DIR="$(dirname "$SCRIPT_DIR")"
AI_WORKSPACE_DIR="${DEVELOP_ASSISTANT_DIR}/.ai"

# 颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 获取项目名称
if [ -n "$1" ]; then
    PROJECT_NAME="$1"
else
    # 使用当前目录名
    PROJECT_NAME="$(basename "$PWD")"
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🔗 AI 工作空间链接工具${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 检查当前目录是否有 .git（确认是项目目录）
if [ ! -d ".git" ] && [ ! -f "package.json" ] && [ ! -d "src" ]; then
    echo -e "${YELLOW}⚠️  警告: 当前目录似乎不是项目根目录${NC}"
    echo "当前目录: $PWD"
    read -p "是否继续? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 检查目标目录是否存在
PROJECT_AI_DIR="${AI_WORKSPACE_DIR}/${PROJECT_NAME}"

if [ -d ".ai" ]; then
    # 已存在 .ai 目录
    if [ -L ".ai" ]; then
        # 已经是软链接
        CURRENT_LINK="$(readlink -f .ai)"
        if [ "$CURRENT_LINK" = "$PROJECT_AI_DIR" ]; then
            echo -e "${GREEN}✅ .ai 已链接到: ${CURRENT_LINK}${NC}"
            exit 0
        else
            echo -e "${YELLOW}⚠️  .ai 已链接到其他位置: ${CURRENT_LINK}${NC}"
            read -p "是否重新链接? (y/N) " -n 1 -r
            echo
            if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                exit 1
            fi
            rm .ai
        fi
    else
        # 是普通目录
        echo -e "${YELLOW}⚠️  当前目录已存在 .ai 文件夹${NC}"
        echo "备份到: .ai.backup.$(date +%Y%m%d_%H%M%S)"
        mv .ai ".ai.backup.$(date +%Y%m%d_%H%M%S)"
    fi
fi

# 创建 develop-assistant 中的项目目录（如果不存在）
if [ ! -d "$PROJECT_AI_DIR" ]; then
    echo -e "${BLUE}📁 在 develop-assistant 创建项目目录: ${PROJECT_NAME}${NC}"
    mkdir -p "${PROJECT_AI_DIR}/input/{prd,api,pencil}"
    mkdir -p "${PROJECT_AI_DIR}/output"
    mkdir -p "${PROJECT_AI_DIR}/context"
    mkdir -p "${PROJECT_AI_DIR}/skills"
    touch "${PROJECT_AI_DIR}/context/glossary.md"
    echo -e "${GREEN}✅ 目录结构已创建${NC}"
else
    echo -e "${BLUE}📁 使用已存在的目录: ${PROJECT_AI_DIR}${NC}"
fi

# 创建软链接
echo -e "${BLUE}🔗 创建软链接...${NC}"
ln -s "$PROJECT_AI_DIR" .ai

echo ""
echo -e "${GREEN}✅ 链接成功!${NC}"
echo -e "   业务项目: $PWD"
echo -e "   AI 数据:  $PROJECT_AI_DIR"
echo ""
echo -e "${BLUE}📂 目录结构:${NC}"
ls -la .ai/
echo ""
echo -e "${YELLOW}💡 提示: .ai 目录现在在 develop-assistant 中统一管理${NC}"
echo -e "${YELLOW}   记得备份 develop-assistant/.ai/ 目录到私有仓库或云盘${NC}"
