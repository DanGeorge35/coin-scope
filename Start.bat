@echo off
echo Installing dependencies...

REM Attempt to install Node.js modules
npm install
IF %ERRORLEVEL% NEQ 0 (
    echo Error occurred during "npm install". Attempting with --legacy-peer-deps...
    
    REM Try using npm install with --legacy-peer-deps
    npm install --legacy-peer-deps
    IF %ERRORLEVEL% NEQ 0 (
        echo Error occurred during "npm install --legacy-peer-deps".
        echo Please check your dependencies or internet connection.
        pause
        exit /b
    )
)

echo Dependencies installed successfully!

echo Starting...

REM Start the Next.js project
npm run dev
IF %ERRORLEVEL% NEQ 0 (
    echo Error occurred while starting the Next.js project.
    echo Please check for issues in the project or configuration.
    pause
    exit /b
)


REM Open the default web browser at localhost:5173
start http://localhost:5173/

pause