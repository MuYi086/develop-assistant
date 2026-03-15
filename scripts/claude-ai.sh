#!/bin/bash
# =============================================================================
# Claude AI 启动脚本 - 带前端Vibe Coding辅助项目
# =============================================================================
# 功能:
#   1. 自动同步 skills 到 ~/.claude/skills/ (如不存在)
#   2. 启动 Claude 并加载辅助项目
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
# 优先使用环境变量，否则使用脚本所在目录的父目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEVELOP_ASSISTANT_DIR="${DEVELOP_ASSISTANT_DIR:-$(dirname "$SCRIPT_DIR")}"

# 颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# 检查辅助项目目录是否存在
if [ ! -d "$DEVELOP_ASSISTANT_DIR" ]; then
    echo "错误: 辅助项目目录不存在: $DEVELOP_ASSISTANT_DIR"
    echo "请设置 DEVELOP_ASSISTANT_DIR 环境变量或修改脚本中的默认路径"
    exit 1
fi

# =========================== Skills 同步逻辑 ===========================

GLOBAL_SKILLS_DIR="${HOME}/.claude/skills"
SOURCE_SKILLS_DIR="${DEVELOP_ASSISTANT_DIR}/.agents/skills"

# 检查源 skills 目录是否存在
if [ -d "$SOURCE_SKILLS_DIR" ]; then
    # 创建全局 skills 目录（如果不存在）
    mkdir -p "$GLOBAL_SKILLS_DIR"

    # 同步 skills（只复制不存在的）
    SYNCED_COUNT=0
    SKIPPED_COUNT=0

    for skill_dir in "$SOURCE_SKILLS_DIR"/*/; do
        [ -d "$skill_dir" ] || continue

        skill_name=$(basename "$skill_dir")
        target_skill_dir="${GLOBAL_SKILLS_DIR}/${skill_name}"

        # 检查是否是有效的 skill
        [ -f "${skill_dir}/SKILL.md" ] || continue

        if [ ! -d "$target_skill_dir" ]; then
            cp -r "$skill_dir" "$target_skill_dir"
            SYNCED_COUNT=$((SYNCED_COUNT + 1))
        else
            SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        fi
    done

    # 仅在同步了新技能时显示信息
    if [ $SYNCED_COUNT -gt 0 ]; then
        echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${GREEN}✓ Skills 同步完成: 新增 $SYNCED_COUNT 个${NC}"
        echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo ""
    fi
fi

# =========================== 启动 Claude ===========================

echo -e "${BLUE}正在启动 Claude with Vibe Coding Assistant...${NC}"
echo "辅助项目: $DEVELOP_ASSISTANT_DIR"
echo ""

claude --add-dir "$DEVELOP_ASSISTANT_DIR" "$@"
