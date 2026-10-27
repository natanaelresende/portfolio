@echo off
title Portfolio V2 - Instalar dependencias
cd /d "%~dp0"
echo === Portfolio V2 - Instalador ===
echo.

REM Verifica Node
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo [ERRO] Node.js nao encontrado.
  echo.
  echo Tentando instalar via winget...
  where winget >nul 2>nul
  if %errorlevel%==0 (
    winget install OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
    if %errorlevel% neq 0 (
      echo [ERRO] Falha ao instalar Node via winget.
      echo Instale manualmente em https://nodejs.org (LTS)
      pause
      exit /b 1
    )
    echo [OK] Node instalado. REABRA este terminal e rode instalar.bat novamente.
    pause
    exit /b 0
  ) else (
    echo winget nao encontrado. Instale Node manualmente: https://nodejs.org
    pause
    exit /b 1
  )
)

echo [OK] Node %~dp0
call node -v
call npm -v
echo.

REM Frontend V2
echo --- Frontend (Next.js) ---
if not exist "package.json" (
  echo [ERRO] package.json nao encontrado na raiz.
  pause
  exit /b 1
)
echo Instalando dependencias da raiz...
call npm install
if %errorlevel% neq 0 (
  echo [ERRO] npm install falhou na raiz.
  pause
  exit /b 1
)
echo [OK] Frontend instalado.
echo.

REM Backend NestJS
echo --- Backend (NestJS) ---
if exist "backend\package.json" (
  pushd backend
  echo Instalando dependencias do backend...
  call npm install
  if %errorlevel% neq 0 (
    echo [ERRO] npm install falhou no backend.
    popd
    pause
    exit /b 1
  )
  popd
  echo [OK] Backend instalado.
) else (
  echo [AVISO] backend\package.json nao encontrado - pulando.
)
echo.

echo === Tudo instalado! ===
echo Para iniciar: executar.bat  ou  npm run dev  (front :3000) + cd backend ^&^& npm run dev (api :3001)
pause
