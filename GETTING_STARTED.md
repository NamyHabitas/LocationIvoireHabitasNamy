# Guide de démarrage - Maman Location

Ce guide vous explique comment installer et lancer le site portfolio Maman Location, une plateforme simplifiée de présentation d'appartements et d'espaces commerciaux à louer en Côte d'Ivoire.

## 1. Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou plus récente)
- **npm** (version 8 ou plus récente)

Vous pouvez vérifier vos versions installées avec les commandes :
```bash
node -v
npm -v
```

## 2. Installation

Suivez ces étapes pour configurer le projet :

### 2.1 Obtenir le code source

Clonez le dépôt Git ou téléchargez l'archive du code source :
```bash
git clone https://github.com/votre-username/maman-location.git
cd maman-location
```

### 2.2 Installer les dépendances

Exécutez la commande suivante pour installer toutes les bibliothèques nécessaires :
```bash
npm install
```

Cette commande installe automatiquement toutes les dépendances requises pour le frontend et le backend.

## 3. Lancement de l'application

### 3.1 Mode développement

Pour lancer l'application en mode développement avec rechargement automatique :
```bash
npm run dev
```

Cette commande démarre à la fois :
- Le serveur Express (backend) avec stockage en mémoire
- L'application React (frontend) avec rechargement à chaud

L'application sera accessible à l'adresse : **http://localhost:5000**

### 3.2 Mode production

Pour générer une version optimisée pour la production :
```bash
npm run build
```

Cette commande crée les fichiers optimisés dans le dossier `dist/`.

Pour lancer la version de production :
```bash
npm start
```

## 4. Architecture simplifiée

L'application utilise une approche simplifiée avec les caractéristiques suivantes :

- **Stockage en mémoire** : Les données sont stockées en mémoire sans base de données externe
- **Données statiques** : Certains éléments comme les catégories de localisation utilisent des données statiques
- **Modèle simplifié** : Le modèle de données est léger mais évolutif

## 5. Structure du projet

```
maman-location/
├── client/               # Interface utilisateur React
│   ├── src/
│   │   ├── components/   # Composants réutilisables
│   │   ├── pages/        # Pages principales
│   │   ├── hooks/        # Hooks personnalisés
│   │   └── lib/          # Fonctions utilitaires
│   └── index.html        # Point d'entrée HTML
├── server/               # Serveur Express
│   ├── routes.ts         # Définition des API endpoints
│   └── storage.ts        # Gestionnaire de stockage en mémoire
├── shared/               # Types et schémas partagés
│   └── schema.ts         # Modèles de données
└── ...                   # Fichiers de configuration
```

## 6. Personnalisation

### 6.1 Modifier les propriétés

Les propriétés sont définies dans `server/storage.ts` dans la méthode `initializeData()`. Pour ajouter ou modifier des propriétés, éditez ce fichier.

### 6.2 Changer l'apparence

Le style du site est défini avec Tailwind CSS :
- `theme.json` - Définit les couleurs et le thème principal
- `tailwind.config.ts` - Configuration Tailwind
- `client/src/index.css` - Styles globaux

## 7. Déploiement

L'application peut être déployée sur:
- GitHub Pages
- Vercel
- Netlify 
- Votre propre serveur

Pour le déploiement, il suffit de construire l'application et de servir les fichiers statiques générés.

## 8. Dépannage

### Problèmes fréquents

1. **Le serveur ne démarre pas**
   - Vérifiez qu'aucune autre application n'utilise le port 5000
   - Assurez-vous que toutes les dépendances sont installées: `npm install`

2. **Images ne s'affichant pas**
   - Vérifiez que les URLs des images dans `server/storage.ts` sont accessibles
   - Utilisez des URLs d'images complètes (commençant par http/https)

## 9. Évolutions futures

L'architecture a été conçue pour évoluer facilement. Voici quelques pistes d'amélioration:
- Ajout d'un système d'authentification
- Base de données externe (PostgreSQL)
- Système de réservation
- Calendrier de disponibilité
- Blog et actualités

## 10. Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.