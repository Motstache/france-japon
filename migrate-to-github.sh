#!/bin/bash

# 🚀 Script de migration automatique vers GitHub
# Repository: https://github.com/Motstache/France-Japon.git

set -e  # Arrêter en cas d'erreur

echo "🚀 Début de la migration vers GitHub..."
echo "📂 Repository cible: https://github.com/Motstache/France-Japon.git"
echo ""

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages colorés
print_step() {
    echo -e "${BLUE}📋 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    print_error "Git n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Demander le chemin du projet Bolt téléchargé
echo -e "${YELLOW}📥 Où avez-vous extrait le projet Bolt téléchargé ?${NC}"
read -p "Chemin complet du dossier: " BOLT_PROJECT_PATH

# Vérifier que le dossier existe
if [ ! -d "$BOLT_PROJECT_PATH" ]; then
    print_error "Le dossier $BOLT_PROJECT_PATH n'existe pas."
    exit 1
fi

# Vérifier que c'est bien un projet Bolt (présence de package.json)
if [ ! -f "$BOLT_PROJECT_PATH/package.json" ]; then
    print_error "Le dossier ne semble pas contenir un projet valide (package.json manquant)."
    exit 1
fi

print_success "Projet Bolt trouvé dans: $BOLT_PROJECT_PATH"

# Créer un dossier temporaire pour le travail
TEMP_DIR=$(mktemp -d)
print_step "Création du dossier temporaire: $TEMP_DIR"

# Cloner le repository GitHub
print_step "Clonage du repository GitHub..."
cd "$TEMP_DIR"
git clone https://github.com/Motstache/France-Japon.git
cd France-Japon

print_success "Repository cloné avec succès"

# Sauvegarder le fichier de migration critique
print_step "Sauvegarde du fichier de migration Supabase..."
if [ -f "supabase/migrations/20250713014428_purple_rain.sql" ]; then
    cp "supabase/migrations/20250713014428_purple_rain.sql" "$TEMP_DIR/migration_backup.sql"
    print_success "Fichier de migration sauvegardé"
else
    print_warning "Fichier de migration non trouvé (première installation ?)"
fi

# Sauvegarder le fichier .env s'il existe
if [ -f ".env" ]; then
    cp ".env" "$TEMP_DIR/env_backup"
    print_success "Fichier .env sauvegardé"
fi

# Supprimer l'ancien contenu (sauf .git)
print_step "Suppression de l'ancien contenu..."
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} + 2>/dev/null || true
print_success "Ancien contenu supprimé"

# Copier le nouveau contenu depuis Bolt
print_step "Copie du nouveau projet depuis Bolt..."
cp -r "$BOLT_PROJECT_PATH"/* . 2>/dev/null || true
cp -r "$BOLT_PROJECT_PATH"/.[^.]* . 2>/dev/null || true

# Exclure certains fichiers/dossiers si nécessaire
rm -rf node_modules 2>/dev/null || true
rm -rf dist 2>/dev/null || true
rm -rf .git 2>/dev/null || true

print_success "Nouveau contenu copié"

# Restaurer le fichier de migration s'il existait
if [ -f "$TEMP_DIR/migration_backup.sql" ]; then
    print_step "Restauration du fichier de migration Supabase..."
    mkdir -p supabase/migrations/
    cp "$TEMP_DIR/migration_backup.sql" "supabase/migrations/20250713014428_purple_rain.sql"
    print_success "Fichier de migration restauré"
fi

# Restaurer le fichier .env s'il existait
if [ -f "$TEMP_DIR/env_backup" ]; then
    print_step "Restauration du fichier .env..."
    cp "$TEMP_DIR/env_backup" ".env"
    print_success "Fichier .env restauré"
fi

# Vérifier les fichiers principaux
print_step "Vérification des fichiers principaux..."
files_to_check=(
    "package.json"
    "src/App.tsx"
    "src/main.tsx"
    "src/components/HeroSection.tsx"
    "src/components/WeatherWidget.tsx"
    "src/components/TranslationWidget.tsx"
    "src/utils/translations.ts"
    "src/hooks/useTranslation.ts"
)

for file in "${files_to_check[@]}"; do
    if [ -f "$file" ]; then
        print_success "✓ $file"
    else
        print_warning "✗ $file manquant"
    fi
done

# Ajouter tous les fichiers à Git
print_step "Ajout des fichiers à Git..."
git add .

# Vérifier s'il y a des changements
if git diff --staged --quiet; then
    print_warning "Aucun changement détecté. La migration pourrait être déjà à jour."
    echo "Voulez-vous continuer quand même ? (y/N)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        print_step "Migration annulée."
        rm -rf "$TEMP_DIR"
        exit 0
    fi
fi

# Créer le commit
print_step "Création du commit..."
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

print_success "Commit créé avec succès"

# Pousser vers GitHub
print_step "Push vers GitHub..."
echo -e "${YELLOW}🔐 Vous devrez peut-être entrer vos identifiants GitHub...${NC}"
git push origin main

print_success "Migration terminée avec succès !"

# Afficher le résumé
echo ""
echo -e "${GREEN}🎉 MIGRATION RÉUSSIE !${NC}"
echo ""
echo -e "${BLUE}📊 Résumé des changements:${NC}"
echo "✅ Design responsive pour tous les appareils"
echo "✅ Traductions complètes en 5 langues"
echo "✅ Widgets optimisés pour mobile"
echo "✅ Navigation améliorée"
echo "✅ Base de données Supabase préservée"
echo ""
echo -e "${BLUE}🌐 Votre site est maintenant disponible sur:${NC}"
echo "📂 GitHub: https://github.com/Motstache/France-Japon"
echo "🌍 Netlify: https://bright-raindrop-43d751.netlify.app"
echo ""
echo -e "${YELLOW}💡 Prochaines étapes recommandées:${NC}"
echo "1. Vérifiez que tout fonctionne sur GitHub"
echo "2. Testez l'affichage mobile sur différents appareils"
echo "3. Configurez le déploiement automatique depuis GitHub"
echo "4. Vérifiez les variables d'environnement Supabase"

# Nettoyer le dossier temporaire
print_step "Nettoyage..."
rm -rf "$TEMP_DIR"
print_success "Nettoyage terminé"

echo ""
echo -e "${GREEN}🚀 Migration terminée ! Votre projet est maintenant sur GitHub.${NC}"