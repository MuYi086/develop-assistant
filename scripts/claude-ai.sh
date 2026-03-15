#!/bin/bash
# =============================================================================
# Claude AI 启动脚本 - 带前端Vibe Coding辅助项目
# =============================================================================
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
# 优先使用环境变量，否则使用默认路径
DEVELOP_ASSISTANT_DIR="${DEVELOP_ASSISTANT_DIR:-$HOME/develop-assistant}"

# 检查辅助项目目录是否存在
if [ ! -d "$DEVELOP_ASSISTANT_DIR" ]; then
    echo "错误: 辅助项目目录不存在: $DEVELOP_ASSISTANT_DIR"
    echo "请设置 DEVELOP_ASSISTANT_DIR 环境变量或修改脚本中的默认路径"
    exit 1
fi

# 检查settings.json是否存在
if [ ! -f "$DEVELOP_ASSISTANT_DIR/.claude/settings.json" ]; then
    echo "警告: 未找到 settings.json，skills可能无法正确加载"
fi

# 启动Claude并加载辅助项目
echo "正在启动 Claude with Vibe Coding Assistant..."
echo "辅助项目: $DEVELOP_ASSISTANT_DIR"
echo ""

claude --add-dir "$DEVELOP_ASSISTANT_DIR" "$@"
