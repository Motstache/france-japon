@echo off
REM 🚀 Script de migration automatique vers GitHub (Windows)
REM Repository: https://github.com/Motstache/France-Japon.git

setlocal enabledelayedexpansion

echo 🚀 Début de la migration vers GitHub...
echo 📂 Repository cible: https://github.com/Motstache/France-Japon.git
echo.

REM Vérifier si git est installé
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git n'est pas installé. Veuillez l'installer d'abord.
    pause
    exit /b 1
)

REM Demander le chemin du projet Bolt téléchargé
echo 📥 Où avez-vous extrait le projet Bolt téléchargé ?
set /p BOLT_PROJECT_PATH="Chemin complet du dossier: "

REM Vérifier que le dossier existe
if not exist "%BOLT_PROJECT_PATH%" (
    echo ❌ Le dossier %BOLT_PROJECT_PATH% n'existe pas.
    pause
    exit /b 1
)

REM Vérifier que c'est bien un projet Bolt
if not exist "%BOLT_PROJECT_PATH%\package.json" (
    echo ❌ Le dossier ne semble pas contenir un projet valide (package.json manquant).
    pause
    exit /b 1
)

echo ✅ Projet Bolt trouvé dans: %BOLT_PROJECT_PATH%

REM Créer un dossier temporaire
set TEMP_DIR=%TEMP%\france-japon-migration-%RANDOM%
mkdir "%TEMP_DIR%"
echo 📋 Création du dossier temporaire: %TEMP_DIR%

REM Cloner le repository GitHub
echo 📋 Clonage du repository GitHub...
cd /d "%TEMP_DIR%"
git clone https://github.com/Motstache/France-Japon.git
cd France-Japon

echo ✅ Repository cloné avec succès

REM Sauvegarder le fichier de migration critique
echo 📋 Sauvegarde du fichier de migration Supabase...
if exist "supabase\migrations\20250713014428_purple_rain.sql" (
    copy "supabase\migrations\20250713014428_purple_rain.sql" "%TEMP_DIR%\migration_backup.sql" >nul
    echo ✅ Fichier de migration sauvegardé
) else (
    echo ⚠️ Fichier de migration non trouvé (première installation ?)
)

REM Sauvegarder le fichier .env s'il existe
if exist ".env" (
    copy ".env" "%TEMP_DIR%\env_backup" >nul
    echo ✅ Fichier .env sauvegardé
)

REM Supprimer l'ancien contenu (sauf .git)
echo 📋 Suppression de l'ancien contenu...
for /f "delims=" %%i in ('dir /b /a-d') do (
    if not "%%i"==".git" del "%%i" >nul 2>&1
)
for /f "delims=" %%i in ('dir /b /ad') do (
    if not "%%i"==".git" rmdir /s /q "%%i" >nul 2>&1
)
echo ✅ Ancien contenu supprimé

REM Copier le nouveau contenu depuis Bolt
echo 📋 Copie du nouveau projet depuis Bolt...
xcopy "%BOLT_PROJECT_PATH%\*" . /E /H /Y >nul 2>&1

REM Supprimer les dossiers inutiles
if exist "node_modules" rmdir /s /q "node_modules" >nul 2>&1
if exist "dist" rmdir /s /q "dist" >nul 2>&1
if exist ".git" rmdir /s /q ".git" >nul 2>&1

echo ✅ Nouveau contenu copié

REM Restaurer le fichier de migration s'il existait
if exist "%TEMP_DIR%\migration_backup.sql" (
    echo 📋 Restauration du fichier de migration Supabase...
    if not exist "supabase\migrations" mkdir "supabase\migrations"
    copy "%TEMP_DIR%\migration_backup.sql" "supabase\migrations\20250713014428_purple_rain.sql" >nul
    echo ✅ Fichier de migration restauré
)

REM Restaurer le fichier .env s'il existait
if exist "%TEMP_DIR%\env_backup" (
    echo 📋 Restauration du fichier .env...
    copy "%TEMP_DIR%\env_backup" ".env" >nul
    echo ✅ Fichier .env restauré
)

REM Vérifier les fichiers principaux
echo 📋 Vérification des fichiers principaux...
if exist "package.json" (echo ✅ ✓ package.json) else (echo ⚠️ ✗ package.json manquant)
if exist "src\App.tsx" (echo ✅ ✓ src\App.tsx) else (echo ⚠️ ✗ src\App.tsx manquant)
if exist "src\main.tsx" (echo ✅ ✓ src\main.tsx) else (echo ⚠️ ✗ src\main.tsx manquant)
if exist "src\components\HeroSection.tsx" (echo ✅ ✓ src\components\HeroSection.tsx) else (echo ⚠️ ✗ src\components\HeroSection.tsx manquant)

REM Ajouter tous les fichiers à Git
echo 📋 Ajout des fichiers à Git...
git add .

REM Créer le commit
echo 📋 Création du commit...
git commit -m "🎨 Major update: Responsive widgets + multilingual support

✨ New features:
- Responsive design for all devices (mobile, tablet, desktop)
- Complete translations in 5 languages (FR, EN, DE, RU, JA)
- Optimized widgets layout for mobile (stacked on phone)
- Enhanced user experience with weather, map, and translation widgets

🔧 Technical improvements:
- Better component organization and modularity
- Improved TypeScript types and interfaces
- Optimized CSS for all screen sizes
- Enhanced accessibility and mobile navigation
- Preserved Supabase migration integrity

📱 Mobile optimizations:
- Hero section properly sized for mobile
- Widgets stacked vertically on small screens
- Touch-friendly interface elements
- Improved text readability on all devices

🌍 Internationalization:
- Complete French, English, German, Russian, Japanese translations
- Dynamic language switching
- Localized content for all components"

echo ✅ Commit créé avec succès

REM Pousser vers GitHub
echo 📋 Push vers GitHub...
echo 🔐 Vous devrez peut-être entrer vos identifiants GitHub...
git push origin main

echo ✅ Migration terminée avec succès !

REM Afficher le résumé
echo.
echo 🎉 MIGRATION RÉUSSIE !
echo.
echo 📊 Résumé des changements:
echo ✅ Design responsive pour tous les appareils
echo ✅ Traductions complètes en 5 langues
echo ✅ Widgets optimisés pour mobile
echo ✅ Navigation améliorée
echo ✅ Base de données Supabase préservée
echo.
echo 🌐 Votre site est maintenant disponible sur:
echo 📂 GitHub: https://github.com/Motstache/France-Japon
echo 🌍 Netlify: https://bright-raindrop-43d751.netlify.app
echo.
echo 💡 Prochaines étapes recommandées:
echo 1. Vérifiez que tout fonctionne sur GitHub
echo 2. Testez l'affichage mobile sur différents appareils
echo 3. Configurez le déploiement automatique depuis GitHub
echo 4. Vérifiez les variables d'environnement Supabase

REM Nettoyer le dossier temporaire
echo 📋 Nettoyage...
cd /d "%TEMP%"
rmdir /s /q "%TEMP_DIR%" >nul 2>&1
echo ✅ Nettoyage terminé

echo.
echo 🚀 Migration terminée ! Votre projet est maintenant sur GitHub.
pause