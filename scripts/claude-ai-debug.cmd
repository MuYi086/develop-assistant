@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

set "SCRIPT_DIR=%~dp0"
set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"
for %%I in ("%SCRIPT_DIR%") do set "DEVELOP_ASSISTANT_DIR=%%~dpI"
set "DEVELOP_ASSISTANT_DIR=%DEVELOP_ASSISTANT_DIR:~0,-1%"

echo ═══════════════════════════════════════════════════════════
echo  Claude with Vibe Coding Assistant
echo ═══════════════════════════════════════════════════════════
echo.

REM Skills 同步
set "GLOBAL_SKILLS_DIR=%USERPROFILE%\.claude\skills"
set "SOURCE_SKILLS_DIR=%DEVELOP_ASSISTANT_DIR%\.agents\skills"

echo [DEBUG] USERPROFILE=%USERPROFILE%
echo [DEBUG] GLOBAL_SKILLS_DIR=%GLOBAL_SKILLS_DIR%
echo [DEBUG] SOURCE_SKILLS_DIR=%SOURCE_SKILLS_DIR%
echo [DEBUG] Current Dir=%CD%
echo.

if not exist "%SOURCE_SKILLS_DIR%" (
    echo [DEBUG] Source dir not exist
echo.
    goto :SKIP_SKILLS
)

echo [DEBUG] Source skills found, ensuring target dir exists...

REM 确保父目录存在
set "CLAUDE_DIR=%USERPROFILE%\.claude"
if not exist "%CLAUDE_DIR%" (
    echo [DEBUG] Creating .claude dir...
    mkdir "%CLAUDE_DIR%" 2>nul
    if errorlevel 1 (
        echo [DEBUG] Failed to create .claude dir
    ) else (
        echo [DEBUG] Created .claude dir
    )
)

if not exist "%GLOBAL_SKILLS_DIR%" (
    echo [DEBUG] Creating skills dir: %GLOBAL_SKILLS_DIR%
    mkdir "%GLOBAL_SKILLS_DIR%" 2>nul
    if errorlevel 1 (
        echo [DEBUG] Failed to create skills dir
    ) else (
        echo [DEBUG] Created skills dir
    )
)

if not exist "%GLOBAL_SKILLS_DIR%" (
    echo [DEBUG] Skills dir still not exist, skip sync
echo.
    goto :SKIP_SKILLS
)

set "NEW_COUNT=0"
for /d %%S in ("%SOURCE_SKILLS_DIR%\*") do (
    set "SKILL_NAME=%%~nxS"
    if exist "%%S\SKILL.md" (
        if not exist "%GLOBAL_SKILLS_DIR%\!SKILL_NAME!" (
            echo [DEBUG] Copying: !SKILL_NAME!
            xcopy /E /I /Q "%%S" "%GLOBAL_SKILLS_DIR%\!SKILL_NAME!\" >nul 2>&1
            if errorlevel 1 (
                echo [DEBUG]   xcopy failed, trying robocopy...
                robocopy "%%S" "%GLOBAL_SKILLS_DIR%\!SKILL_NAME!" /E /NFL /NDL /NJH /NJS >nul 2>&1
                if errorlevel 8 (
                    echo [DEBUG]   robocopy also failed
                ) else (
                    echo [DEBUG]   robocopy success
                    set /a NEW_COUNT+=1
                )
            ) else (
                echo [DEBUG]   xcopy success
                set /a NEW_COUNT+=1
            )
        ) else (
            echo [DEBUG] Already exists: !SKILL_NAME!
        )
    )
)

if %NEW_COUNT% gtr 0 (
    echo ✓ 已同步 %NEW_COUNT% 个新 skills
echo.
)

:SKIP_SKILLS

REM AI 目录链接
set "AI_WORKSPACE_DIR=%DEVELOP_ASSISTANT_DIR%\.ai"

if exist ".git" goto :LINK_AI
if exist "package.json" goto :LINK_AI
goto :START_CLAUDE

:LINK_AI
for %%I in ("%CD%") do set "PROJECT_NAME=%%~nxI"
set "PROJECT_AI_DIR=%AI_WORKSPACE_DIR%\%PROJECT_NAME%"

if exist ".ai\" (
    if not exist ".ai\junction.flag" (
        ren ".ai" ".ai.backup.%random%" >nul 2>&1
        goto :CREATE_LINK
    )
) else if exist ".ai" (
    del ".ai" >nul 2>&1
    goto :CREATE_LINK
) else (
    goto :CREATE_LINK
)

:CREATE_LINK
if not exist "%PROJECT_AI_DIR%" (
    mkdir "%PROJECT_AI_DIR%\input\prd" 2>nul
    mkdir "%PROJECT_AI_DIR%\input\api" 2>nul
    mkdir "%PROJECT_AI_DIR%\input\pencil" 2>nul
    mkdir "%PROJECT_AI_DIR%\output" 2>nul
    mkdir "%PROJECT_AI_DIR%\context" 2>nul
    mkdir "%PROJECT_AI_DIR%\skills" 2>nul
    type nul > "%PROJECT_AI_DIR%\context\glossary.md" 2>nul
    echo 📁 创建 AI 工作目录: %PROJECT_NAME%
)

mklink /J ".ai" "%PROJECT_AI_DIR%" >nul 2>&1
if not errorlevel 1 (
    type nul > ".ai\junction.flag" 2>nul
    echo ✅ AI 工作目录已链接: %PROJECT_NAME%
    echo.
)

:START_CLAUDE
claude --add-dir "%DEVELOP_ASSISTANT_DIR%" %*
endlocal
