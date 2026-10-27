@echo off
title Portfolio V2 - Natanael
cd /d "%~dp0"

echo === Portfolio V2 ===
echo.

REM 1) Se tem Node + Next (V2), usa Next
where node >nul 2>nul
if %errorlevel%==0 (
  if exist "package.json" (
    echo [V2] Node detectado. Verificando dependencias...
    if not exist "node_modules" (
      echo Dependencias nao encontradas. Rode instalar.bat primeiro.
      echo Instalando agora...
      call npm install
      if %errorlevel% neq 0 (
        echo [ERRO] npm install falhou. Rode instalar.bat manualmente. Tentando modo V1...
        goto :V1
      )
      if exist "backend\package.json" if not exist "backend\node_modules" (
        echo Instalando dependencias do backend...
        pushd backend & call npm install & popd
      )
    )
    echo [V2] Iniciando Next.js em http://localhost:3000
    echo [V2] API Next em http://localhost:3000/api/contact
    echo [V2] Para iniciar NestJS separado: cd backend ^&^& npm run dev (porta 3001)
    timeout /t 1 >nul
    start "" "http://localhost:3000"
    call npm run dev
    goto :END
  )
)

:V1
echo [V1] Modo estatico (HTML+CSS+JS)
if not exist "index.html" (
  echo [ERRO] index.html nao encontrado.
  pause
  exit /b 1
)
where python >nul 2>nul
if %errorlevel%==0 (
  echo Servidor V1 em http://localhost:8000
  timeout /t 1 >nul
  start "" "http://localhost:8000"
  python -m http.server 8000
) else (
  echo Python nao encontrado. Abrindo arquivo direto...
  start "" "%~dp0index.html"
)

:END
