@echo off
echo Recherche et remplacement des href="#..." dans src\components...

for /r src\components %%f in (*.tsx) do (
    echo Traitement de %%f
    powershell -Command "((Get-Content -Raw '%%f') -replace 'href=\"#.*?\"', 'href=\"#\" onClick=\"event.preventDefault()\"') | Set-Content '%%f'"
)

echo Remplacement terminé.
pause
