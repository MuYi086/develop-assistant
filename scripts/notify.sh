#!/bin/bash
# =============================================================================
# 系统通知脚本 - 使用OSC序列发送通知到VSCode
# =============================================================================
# 依赖: VSCode "Terminal Notification" 扩展
# 安装: 在VSCode扩展商店搜索 "Terminal Notification"
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

# 发送OSC 1337序列（iTerm2/VSCode Terminal Notification兼容）
# 格式: \033]1337;SetNotification=<message>\007
echo -e "\033]1337;SetNotification=${MESSAGE}\007"

# 可选：同时输出到stderr以便查看
echo "[通知已发送] ${MESSAGE}" >&2
