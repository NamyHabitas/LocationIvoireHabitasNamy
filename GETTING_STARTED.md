# Guide de démarrage - Maman Location

Ce guide vous explique comment installer et lancer l'application Maman Location sur votre environnement local.

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

Suivez ces étapes pour configurer le projet sur votre machine :

### 2.1 Obtenir le code source

Clonez le dépôt Git :
```bash
git clone https://github.com/votre-username/maman-location.git
cd maman-location
```

Ou téléchargez et décompressez l'archive du code source.

### 2.2 Installer les dépendances

Exécutez la commande suivante pour installer toutes les bibliothèques nécessaires :
```bash
npm install
```

Cette commande lit le fichier `package.json` et installe toutes les dépendances requises.

### 2.3 Configuration de l'environnement

Créez un fichier `.env` à partir de l'exemple fourni :
```bash
cp .env.example .env
```

Ouvrez le fichier `.env` et modifiez les variables si nécessaire pour votre environnement local.

## 3. Lancement de l'application

### 3.1 Mode développement

Pour lancer l'application en mode développement avec rechargement automatique :
```bash
npm run dev
```

Cette commande démarre :
- Le serveur backend Express sur le port 5000
- Le serveur frontend Vite avec rechargement à chaud

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

## 4. Structure des dossiers

Voici la structure principale du projet :
```
maman-location/
├── client/               # Code frontend React
│   ├── src/              # Composants, pages, hooks, etc.
│   └── index.html        # Point d'entrée HTML
├── server/               # Serveur Express
│   ├── routes.ts         # Définition des routes API
│   └── storage.ts        # Gestion du stockage des données
├── shared/               # Types et schémas partagés
└── ...
```

## 5. Dépannage

### Problèmes fréquents

1. **Le serveur ne démarre pas**
   - Vérifiez qu'aucune autre application n'utilise le port 5000
   - Assurez-vous que toutes les dépendances sont installées : `npm install`

2. **Erreurs de compilation**
   - Vérifiez les journaux d'erreurs dans la console
   - Assurez-vous que votre version de Node.js est compatible

3. **Les données ne s'affichent pas**
   - Consultez les requêtes réseau dans les outils de développement du navigateur
   - Vérifiez que les API renvoient des données dans le format attendu

## 6. Contribution

Si vous souhaitez contribuer au projet, consultez le fichier [CONTRIBUTING.md](./CONTRIBUTING.md) pour connaître les directives.

## 7. Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.