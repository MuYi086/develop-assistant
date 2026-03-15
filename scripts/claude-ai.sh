#!/bin/bash
# =============================================================================
# Claude AI 启动脚本 - 带前端Vibe Coding辅助项目
# =============================================================================
# 功能:
#   1. 自动同步 skills 到 ~/.claude/skills/ (如不存在)
#   2. 自动链接 .ai 工作目录到 develop-assistant
#   3. 启动 Claude 并加载辅助项目
#
# 用法:
#   ./claude-ai.sh                    # 启动Claude并加载辅助项目
#   ./claude-ai.sh --verbose          # 详细模式启动
#   ./claude-ai.sh /path/to/project   # 直接打开指定项目
#
# 推荐: 将此脚本添加到PATH或使用别名
#   alias claude-ai='~/develop-assistant/scripts/claude-ai.sh'
# =============================================================================

set -e

# 获取辅助项目目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEVELOP_ASSISTANT_DIR="$(dirname "$SCRIPT_DIR")"

# 颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 检查辅助项目目录是否存在
if [ ! -d "$DEVELOP_ASSISTANT_DIR" ]; then
    echo "错误: 辅助项目目录不存在: $DEVELOP_ASSISTANT_DIR"
    exit 1
fi

# =========================== Skills 同步逻辑 ===========================

GLOBAL_SKILLS_DIR="${HOME}/.claude/skills"
SOURCE_SKILLS_DIR="${DEVELOP_ASSISTANT_DIR}/.agents/skills"

if [ -d "$SOURCE_SKILLS_DIR" ]; then
    mkdir -p "$GLOBAL_SKILLS_DIR"
    SYNCED_COUNT=0

    for skill_dir in "$SOURCE_SKILLS_DIR"/*/; do
        [ -d "$skill_dir" ] || continue
        skill_name=$(basename "$skill_dir")
        target_skill_dir="${GLOBAL_SKILLS_DIR}/${skill_name}"
        [ -f "${skill_dir}/SKILL.md" ] || continue

        if [ ! -d "$target_skill_dir" ]; then
            cp -r "$skill_dir" "$target_skill_dir"
            SYNCED_COUNT=$((SYNCED_COUNT + 1))
        fi
    done

    if [ $SYNCED_COUNT -gt 0 ]; then
        echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${GREEN}✓ Skills 同步完成: 新增 $SYNCED_COUNT 个${NC}"
        echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo ""
    fi
fi

# =========================== AI 工作目录链接 ===========================

AI_WORKSPACE_DIR="${DEVELOP_ASSISTANT_DIR}/.ai"

# 检查当前是否在业务项目中（有 .git 或 package.json）
if [ -d ".git" ] || [ -f "package.json" ]; then
    PROJECT_NAME="$(basename "$PWD")"
    PROJECT_AI_DIR="${AI_WORKSPACE_DIR}/${PROJECT_NAME}"

    # 如果当前没有 .ai 或 .ai 不是链接
    if [ ! -L ".ai" ]; then
        # 创建 develop-assistant 中的项目目录
        if [ ! -d "$PROJECT_AI_DIR" ]; then
            echo -e "${BLUE}📁 在 develop-assistant 创建 AI 工作目录: ${PROJECT_NAME}${NC}"
            mkdir -p "${PROJECT_AI_DIR}/input/prd"
            mkdir -p "${PROJECT_AI_DIR}/input/api"
            mkdir -p "${PROJECT_AI_DIR}/input/pencil"
            mkdir -p "${PROJECT_AI_DIR}/output"
            mkdir -p "${PROJECT_AI_DIR}/context"
            mkdir -p "${PROJECT_AI_DIR}/skills"
            touch "${PROJECT_AI_DIR}/context/glossary.md"
        fi

        # 如果存在普通 .ai 目录，备份它
        if [ -d ".ai" ]; then
            BACKUP_NAME=".ai.backup.$(date +%Y%m%d_%H%M%S)"
            echo -e "${YELLOW}⚠️  备份现有 .ai 目录到: ${BACKUP_NAME}${NC}"
            mv .ai "$BACKUP_NAME"
        fi

        # 创建软链接
        ln -s "$PROJECT_AI_DIR" .ai
        echo -e "${GREEN}✅ AI 工作目录已链接到 develop-assistant${NC}"
        echo -e "   项目: $PROJECT_NAME"
        echo -e "   位置: $PROJECT_AI_DIR"
        echo ""
    fi
fi

# =========================== 启动 Claude ===========================

echo -e "${BLUE}正在启动 Claude with Vibe Coding Assistant...${NC}"
echo "辅助项目: $DEVELOP_ASSISTANT_DIR"
echo ""

claude --add-dir "$DEVELOP_ASSISTANT_DIR" "$@"
