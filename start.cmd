@echo off
rem 书中人 · Book Atlas —— 一键启动本地预览
cd /d "%~dp0"
set PORT=8765
where python >nul 2>nul
if errorlevel 1 (
  echo [!] 没找到 python。请安装 Python，或直接用浏览器打开 index.html
  echo     ^(用 file:// 打开时浏览器可能禁止本地存储，数据无法自动保存^)
  pause
  exit /b 1
)
echo 正在启动 http://127.0.0.1:%PORT%/ ...
start "" http://127.0.0.1:%PORT%/
python -m http.server %PORT% --bind 127.0.0.1
