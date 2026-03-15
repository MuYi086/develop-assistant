#!/bin/bash
# =============================================================================
# Shell别名配置脚本 - 设置claude-ai快捷命令
# =============================================================================
# 用法:
#   source ./setup-alias.sh              # 当前shell生效
#   ./setup-alias.sh --install           # 永久添加到shell配置
#
# 提供的别名:
#   claude-ai       - 启动带辅助项目的Claude
#   claude-ai-dev   - 详细模式启动
# =============================================================================

set -e

# 检测当前shell
CURRENT_SHELL=$(basename "$SHELL")
DEVELOP_ASSISTANT_DIR="${DEVELOP_ASSISTANT_DIR:-$HOME/develop-assistant}"

# 定义别名
setup_aliases() {
    echo "# ===== Claude AI Vibe Coding Assistant 别名 ====="
    echo "alias claude-ai='\$HOME/develop-assistant/scripts/claude-ai.sh'"
    echo "alias claude-ai-dev='\$HOME/develop-assistant/scripts/claude-ai.sh --verbose'"
    echo "# 可选：自定义辅助项目路径"
    echo "# export DEVELOP_ASSISTANT_DIR=/path/to/develop-assistant"
    echo "# ==============================================="
}

# 安装到shell配置
install_aliases() {
    local config_file=""

    case "$CURRENT_SHELL" in
        bash)
            config_file="$HOME/.bashrc"
            ;;
        zsh)
            config_file="$HOME/.zshrc"
            ;;
        *)
            echo "不支持的shell: $CURRENT_SHELL"
            echo "请手动将以下别名添加到您的shell配置:"
            setup_aliases
            return 1
            ;;
    esac

    echo "检测到shell: $CURRENT_SHELL"
    echo "配置将添加到: $config_file"
    echo ""

    # 检查是否已存在
    if grep -q "Claude AI Vibe Coding Assistant" "$config_file" 2>/dev/null; then
        echo "别名已存在于 $config_file，跳过添加"
        return 0
    fi

    # 添加别名
    echo "" >> "$config_file"
    setup_aliases >> "$config_file"

    echo "别名已添加到 $config_file"
    echo "请运行 'source $config_file' 使其生效"
}

# 显示使用说明
show_help() {
    echo "Claude AI Vibe Coding Assistant - 别名配置脚本"
    echo ""
    echo "用法:"
    echo "  source $0           - 在当前shell中临时启用别名"
    echo "  $0 --install        - 永久添加到shell配置文件"
    echo "  $0 --help           - 显示此帮助"
    echo ""
    echo "可用别名:"
    echo "  claude-ai           - 启动带辅助项目的Claude"
    echo "  claude-ai-dev       - 详细模式启动"
}

# 主逻辑
case "${1:-}" in
    --install)
        install_aliases
        ;;
    --help|-h)
        show_help
        ;;
    *)
        # 直接source模式 - 设置当前shell的别名
        alias claude-ai='$HOME/develop-assistant/scripts/claude-ai.sh'
        alias claude-ai-dev='$HOME/develop-assistant/scripts/claude-ai.sh --verbose'
        echo "Claude AI别名已设置:"
        echo "  claude-ai     -> 启动带辅助项目的Claude"
        echo "  claude-ai-dev -> 详细模式启动"
        echo ""
        echo "提示: 使用 'source $0 --install' 永久添加别名"
        ;;
esac
