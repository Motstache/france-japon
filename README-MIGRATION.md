# 🚀 Guide de Migration GitHub

Ce guide vous explique comment migrer automatiquement votre projet vers GitHub.

## 📋 Prérequis

- ✅ Git installé sur votre machine
- ✅ Accès à votre compte GitHub
- ✅ Projet Bolt téléchargé et extrait

## 🎯 Scripts disponibles

### 🐧 Linux/Mac : `migrate-to-github.sh`
```bash
chmod +x migrate-to-github.sh
./migrate-to-github.sh
```

### 🪟 Windows : `migrate-to-github.bat`
```cmd
migrate-to-github.bat
```

## 📝 Étapes du script

1. **📥 Téléchargement** : Le script vous demande où vous avez extrait le projet Bolt
2. **🔄 Clonage** : Clone votre repository GitHub existant
3. **💾 Sauvegarde** : Sauvegarde les fichiers critiques (migration Supabase, .env)
4. **🗑️ Nettoyage** : Supprime l'ancien contenu (sauf .git)
5. **📋 Copie** : Copie le nouveau projet depuis Bolt
6. **🔧 Restauration** : Restaure les fichiers sauvegardés
7. **✅ Commit** : Crée un commit avec un message détaillé
8. **🚀 Push** : Pousse vers GitHub

## ⚠️ Fichiers préservés

- 🔒 `supabase/migrations/20250713014428_purple_rain.sql` (CRITIQUE)
- 🔑 `.env` (variables d'environnement)
- 📂 `.git/` (historique Git)

## 🎉 Résultat

Après la migration, vous aurez :

- ✅ **Design responsive** parfait sur tous appareils
- ✅ **Traductions complètes** en 5 langues
- ✅ **Widgets optimisés** pour mobile
- ✅ **Base de données préservée**
- ✅ **Historique Git intact**

## 🔧 En cas de problème

### Erreur d'authentification Git
```bash
# Configurer vos identifiants
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Ou utiliser un token personnel
git remote set-url origin https://TOKEN@github.com/Motstache/France-Japon.git
```

### Fichier de migration manquant
Si le script ne trouve pas le fichier de migration, c'est normal pour une première installation.

### Conflits de merge
```bash
# En cas de conflit
git status
git add .
git commit -m "Resolve conflicts"
git push origin main
```

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que Git est bien installé
2. Assurez-vous d'avoir les droits sur le repository
3. Vérifiez votre connexion internet
4. Consultez les logs d'erreur du script

## 🌐 Liens utiles

- 📂 **Repository** : https://github.com/Motstache/France-Japon
- 🌍 **Site déployé** : https://bright-raindrop-43d751.netlify.app
- 📚 **Documentation Git** : https://git-scm.com/docs