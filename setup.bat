@echo off
REM SkillForge Setup Script for Windows
REM This script automates the setup process for the learning platform

echo.
echo Setting up SkillForge Interactive Learning Platform...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo Node.js found
node -v
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo npm is not installed. Please install npm first.
    exit /b 1
)

echo npm found
npm -v
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo Failed to install dependencies
    exit /b 1
)

echo Dependencies installed successfully
echo.

REM Setup environment variables
if not exist .env (
    echo Setting up environment variables...
    copy .env.example .env
    echo Please edit .env and set NEXTAUTH_SECRET to a secure random string
    echo You can generate one at: https://generate-secret.vercel.app/32
) else (
    echo .env file already exists
)

echo.

REM Setup database
echo Setting up database...
call npm run db:push

if %ERRORLEVEL% NEQ 0 (
    echo Failed to setup database
    exit /b 1
)

echo Database schema created
echo.

REM Seed database
echo Seeding database with sample courses...
call npm run db:seed

if %ERRORLEVEL% NEQ 0 (
    echo Failed to seed database
    exit /b 1
)

echo Database seeded successfully
echo.

REM Success message
echo.
echo ========================================
echo Setup completed successfully!
echo ========================================
echo.
echo Demo Account:
echo    Email: demo@example.com
echo    Password: password123
echo.
echo To start the development server, run:
echo    npm run dev
echo.
echo Then open: http://localhost:3000
echo.
echo For more information, check README.md or QUICKSTART.md
echo.
pause
