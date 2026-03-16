@echo off
chcp 65001 >nul
REM =============================================================================
REM Claude AI 启动脚本 (Windows版本) - 带前端Vibe Coding辅助项目
REM =============================================================================
REM 用法:
REM   claude-ai.cmd                      # 启动Claude并加载辅助项目
REM   claude-ai.cmd --verbose            # 详细模式启动
REM   claude-ai.cmd C:\path\to\project   # 直接打开指定项目
REM =============================================================================

setlocal EnableDelayedExpansion

REM 获取辅助项目目录（假设脚本在 scripts 目录下）
set "SCRIPT_DIR=%~dp0"
set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"
for %%I in ("%SCRIPT_DIR%") do set "DEVELOP_ASSISTANT_DIR=%%~dpI"
set "DEVELOP_ASSISTANT_DIR=%DEVELOP_ASSISTANT_DIR:~0,-1%"

REM 检查辅助项目目录是否存在
if not exist "%DEVELOP_ASSISTANT_DIR%" (
    echo 错误: 辅助项目目录不存在: %DEVELOP_ASSISTANT_DIR%
    exit /b 1
)

echo.
echo ═══════════════════════════════════════════════════════════
echo  启动 Claude with Vibe Coding Assistant
echo ═══════════════════════════════════════════════════════════
echo 辅助项目: %DEVELOP_ASSISTANT_DIR%
echo.

REM =========================== Skills 同步逻辑 ===========================

set "GLOBAL_SKILLS_DIR=%USERPROFILE%\.claude\skills"
set "SOURCE_SKILLS_DIR=%DEVELOP_ASSISTANT_DIR%\.agents\skills"

if exist "%SOURCE_SKILLS_DIR%" (
    if not exist "%GLOBAL_SKILLS_DIR%" mkdir "%GLOBAL_SKILLS_DIR%"

    set "SYNCED_COUNT=0"
    for /d %%D in ("%SOURCE_SKILLS_DIR%\*") do (
        set "SKILL_NAME=%%~nxD"
        set "TARGET_SKILL_DIR=%GLOBAL_SKILLS_DIR%\!SKILL_NAME!"
        set "SOURCE_SKILL_FILE=%%D\SKILL.md"

        if exist "!SOURCE_SKILL_FILE!" (
            if not exist "!TARGET_SKILL_DIR!" (
                xcopy /E /I /Q "%%D" "!TARGET_SKILL_DIR!" >nul
                set /a SYNCED_COUNT+=1
            )
        )
    )

    if !SYNCED_COUNT! gtr 0 (
        echo ═══════════════════════════════════════════════════════════
        echo ✓ Skills 同步完成: 新增 !SYNCED_COUNT! 个
        echo ═══════════════════════════════════════════════════════════
        echo.
    )
)

REM =========================== AI 工作目录链接 ===========================

set "AI_WORKSPACE_DIR=%DEVELOP_ASSISTANT_DIR%\.ai"

REM 检查当前是否在业务项目中（有 .git 或 package.json）
if exist ".git" (
    goto :LINK_AI
)
if exist "package.json" (
    goto :LINK_AI
)
goto :START_CLAUDE

:LINK_AI
for %%I in ("%CD%") do set "PROJECT_NAME=%%~nxI"
set "PROJECT_AI_DIR=%AI_WORKSPACE_DIR%\%PROJECT_NAME%"

REM 检查是否已经是软链接（Windows junction 或软链接）
REM 注意：Windows 检测软链接比较复杂，这里简化处理
if exist ".ai\" (
    REM 如果 .ai 是目录而不是链接，备份它
    if not exist ".ai\junction.flag" (
        set "BACKUP_NAME=.ai.backup.%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%"
        set "BACKUP_NAME=!BACKUP_NAME: =0!"
        echo ⚠️  备份现有 .ai 目录到: !BACKUP_NAME!
        ren ".ai" "!BACKUP_NAME!"
        goto :CREATE_JUNCTION
    ) else (
        REM 已经是链接，检查是否指向正确的位置
        type ".ai\junction.flag" >nul 2>&1
        if !errorlevel! neq 0 (
            set "BACKUP_NAME=.ai.backup.%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%"
            set "BACKUP_NAME=!BACKUP_NAME: =0!"
            ren ".ai" "!BACKUP_NAME!"
            goto :CREATE_JUNCTION
        )
        echo ✅ AI 工作目录已链接
        goto :START_CLAUDE
    )
) else (
    :CREATE_JUNCTION
    REM 创建 develop-assistant 中的项目目录
    if not exist "%PROJECT_AI_DIR%" (
        echo 📁 在 develop-assistant 创建 AI 工作目录: %PROJECT_NAME%
        mkdir "%PROJECT_AI_DIR%\input\prd"
        mkdir "%PROJECT_AI_DIR%\input\api"
        mkdir "%PROJECT_AI_DIR%\input\pencil"
        mkdir "%PROJECT_AI_DIR%\output"
        mkdir "%PROJECT_AI_DIR%\context"
        mkdir "%PROJECT_AI_DIR%\skills"
        type nul > "%PROJECT_AI_DIR%\context\glossary.md"
        echo ✅ 目录结构已创建
    )

    REM 创建 junction（Windows 的目录硬链接）
    mklink /J ".ai" "%PROJECT_AI_DIR%" >nul 2>&1
    if !errorlevel! neq 0 (
        echo ⚠️  无法创建 junction，将使用普通目录复制方式
        xcopy /E /I /Q "%PROJECT_AI_DIR%" ".ai\" >nul 2>&1
        type nul > ".ai\junction.flag"
    ) else (
        type nul > ".ai\junction.flag"
        echo ✅ AI 工作目录已链接到 develop-assistant
        echo    项目: %PROJECT_NAME%
        echo    位置: %PROJECT_AI_DIR%
    )
    echo.
)

:START_CLAUDE
echo 正在启动 Claude with Vibe Coding Assistant...
echo.

REM 启动 Claude 并加载辅助项目
claude --add-dir "%DEVELOP_ASSISTANT_DIR%" %*

endlocal
