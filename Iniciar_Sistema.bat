@echo off
:: Usar UTF-8 para evitar problemas con tildes
chcp 65001 > nul
color 0b

:: Obtener la ruta donde esta el archivo .bat
set "ROOT_DIR=%~dp0"
cd /d "%ROOT_DIR%"

echo ========================================================
echo    SISTEMA DE GESTION - U.E.N JOSE ANGEL ALAMO
echo ========================================================
echo.

:: --- BUSCAR BACKEND ---
echo [1/2] Iniciando Backend Django...
if exist "Backend-JoseAA\" (
    :: Abrir una nueva ventana, entrar a la carpeta y ejecutar
    start "BACKEND - Django" cmd /k "cd /d "%ROOT_DIR%Backend-JoseAA" && if exist venv (call venv\Scripts\activate) else (echo No hay venv, usando python global) && python manage.py runserver"
) else (
    echo [ERROR] No se encontro la carpeta 'Backend-JoseAA' en esta ruta.
)

timeout /t 3 /nobreak > nul

:: --- BUSCAR FRONTEND ---
echo [2/2] Iniciando Frontend React...
if exist "Frontend-JoseAA\" (
    start "FRONTEND - Vite" cmd /k "cd /d "%ROOT_DIR%Frontend-JoseAA" && npm run dev"
) else (
    echo [ERROR] No se encontro la carpeta 'Frontend-JoseAA' en esta ruta.
)

echo.
echo ========================================================
echo   ¡Listo! Verifica las ventanas que se abrieron.
echo ========================================================
pause