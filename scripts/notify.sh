#!/bin/bash
# =============================================================================
# 系统通知脚本 - 使用OSC序列或系统通知
# =============================================================================
# 优先: VSCode "Terminal Notification" 扩展 (OSC 1337序列)
# 备选: Linux系统通知 (notify-send)
#
# 用法:
#   ./notify.sh "消息内容"
#   ./notify.sh "AI任务已完成"
# =============================================================================

set -e

# 检查参数
if [ $# -eq 0 ]; then
    echo "错误: 请提供通知消息"
    echo "用法: $0 \"通知消息\""
    exit 1
fi

MESSAGE="$1"
NOTIFICATION_SENT=false

# 方法1: 尝试OSC 1337序列（VSCode Terminal Notification扩展）
# 仅在VSCode集成终端中有效
if [ "$TERM_PROGRAM" = "vscode" ]; then
    echo -e "\033]1337;SetNotification=${MESSAGE}\007"
    NOTIFICATION_SENT=true
fi

# 方法2: Linux系统通知 (notify-send)
if command -v notify-send &> /dev/null; then
    notify-send "Claude AI" "$MESSAGE" --icon=utilities-terminal 2>/dev/null || true
    NOTIFICATION_SENT=true
fi

# 方法3: Deepin/UOS 通知
if command -v dde-notification &> /dev/null; then
    dde-notification "$MESSAGE" 2>/dev/null || true
    NOTIFICATION_SENT=true
fi

# 输出结果
if [ "$NOTIFICATION_SENT" = true ]; then
    echo "[通知已发送] ${MESSAGE}" >&2
else
    echo "[通知未发送] 未找到可用的通知方式" >&2
    echo "建议安装: sudo apt install libnotify-bin" >&2
fi
