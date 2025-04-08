# Maman Location

![Logo Maman Location](./generated-icon.png)

## Description

Maman Location est une plateforme simplifiée de présentation d'appartements et d'espaces commerciaux à louer en Côte d'Ivoire. Ce site portfolio présente les propriétés disponibles, avec un design épuré et optimisé pour la vitesse.

## Fonctionnalités

- 🏠 Présentation élégante des propriétés avec photos et descriptions détaillées
- 🔍 Navigation par localité et type de propriété
- 📱 Design responsive adapté à tous les appareils (mobile, tablette, desktop)
- 📞 Formulaire de contact pour demander des renseignements
- ✨ Interface utilisateur moderne et intuitive

## Comment utiliser l'application

1. **Explorer les propriétés** : Parcourez les différentes propriétés disponibles en utilisant les filtres par localité et type de propriété.
2. **Voir les détails** : Cliquez sur une propriété pour afficher des photos, une description détaillée et les informations de contact.
3. **Contacter le propriétaire** : Utilisez le formulaire de contact intégré pour poser des questions ou demander plus d'informations.
4. **Navigation mobile** : Profitez d'une expérience fluide sur tous les appareils grâce au design responsive.

## Comment lancer l'application

Pour lancer l'application en local, suivez ces étapes :

1. **Cloner le dépôt** : Téléchargez le code source en exécutant la commande suivante dans votre terminal :
   ```bash
   git clone <URL_DU_DEPOT>
   ```
2. **Installer les dépendances** : Accédez au dossier du projet et installez les dépendances nécessaires avec :
   ```bash
   npm install
   ```
3. **Démarrer le serveur de développement** : Lancez l'application en mode développement avec :
   ```bash
   npm run dev
   ```
4. **Accéder à l'application** : Ouvrez votre navigateur et rendez-vous à l'adresse suivante :
   [http://localhost:5000](http://localhost:5000).

Ces étapes vous permettront de visualiser et de tester l'application en local.

## Installation

Pour des instructions détaillées sur l'installation et l'exécution du projet, veuillez consulter notre [Guide de démarrage](./GETTING_STARTED.md).

En résumé:

1. Cloner le dépôt
2. Installer les dépendances avec `npm install`
3. Lancer l'application avec `npm run dev`

Le site sera accessible à l'adresse [http://localhost:5000](http://localhost:5000).

## Technologies

Ce projet utilise une stack moderne et optimisée:

- **Frontend**: React, TypeScript, TailwindCSS, Shadcn UI
- **Backend**: Node.js, Express avec stockage en mémoire
- **State Management**: React Query
- **Routing**: wouter pour une navigation légère
- **Forms**: React Hook Form avec validation Zod
- **Styling**: Tailwind CSS pour un design efficace

## Structure du projet

```
maman-location/
├── client/               # Interface utilisateur React
│   ├── src/              # Code source React
│   └── index.html        # Point d'entrée HTML
├── server/               # Serveur Express et logique métier
├── shared/               # Types et schémas partagés
└── ...                   # Fichiers de configuration
```

## Architecture simplifiée

Le projet suit une architecture légère et efficace:
- Stockage en mémoire pour les données des propriétés et témoignages
- Utilisation de données statiques pour les éléments ne nécessitant pas d'API
- Absence de base de données externe pour simplifier le déploiement
- Composants React modulaires et réutilisables

## Déploiement

Le site peut être facilement déployé sur GitHub Pages, Vercel, Netlify ou un serveur personnel:

```bash
# Pour construire l'application pour la production
npm run build

# Les fichiers de production seront générés dans le dossier dist/
```

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

## Crédits

- Développé pour Maman Location
- Photos: Unsplash