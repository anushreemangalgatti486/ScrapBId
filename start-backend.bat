@echo off
title ScrapBid Backend
echo.
echo  ==========================================
echo   ScrapBid Backend Starting...
echo  ==========================================
echo.
cd /d "%~dp0backend"
node server.js
pause
