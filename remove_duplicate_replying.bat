@echo off
setlocal enabledelayedexpansion

set "input=src\utils\translations.ts"
set "output=src\utils\translations_fixed.ts"

set "found=0"

> "%output%" (
    for /f "usebackq delims=" %%L in ("%input%") do (
        set "line=%%L"
        echo !line! | findstr /r /c:"^\s*replying\s*:" >nul
        if !errorlevel! equ 0 (
            if !found! equ 0 (
                echo !line!
                set "found=1"
            ) else (
                rem Skip duplicate line
            )
        ) else (
            echo !line!
        )
    )
)

echo Doublon "replying" supprimé. Fichier corrigé : %output%
pause
