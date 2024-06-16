# Scaly - Améliorez vos images avec l'IA 🚀

Scaly est un SaaS qui utilise l'IA pour améliorer la résolution et la qualité des images, offrant des outils de mise à l'échelle, de traitement par lots et d'édition, tout en garantissant la confidentialité et l'utilisation commerciale sans frais cachés. 🖼️🔍🔐

## Prérequis 📋

Avant de commencer, assurez-vous d'avoir installé Node.js sur votre machine. Node.js 12.0 ou une version ultérieure est nécessaire pour utiliser Next.js.

## Installation ✨

Pour installer les dépendances du projet, exécutez la commande suivante :

```bash
npm install
```

ou si vous utilisez yarn :

```bash
yarn install
```

## Configuration ⚙️

Vous pouvez configurer votre application en modifiant les variables d'environnement. Créez un fichier `.env.local` à la racine du projet et ajoutez vos variables :

```plaintext
NEXT_PUBLIC_STABILITY_API_KEY=VOTRE_CLÉ_API_ICI
```

Remplacez `VOTRE_CLÉ_API_ICI` par votre propre clé API générée sur [Stability AI](https://platform.stability.ai/account/keys).

## Démarrage du serveur de développement 🖥️

Pour lancer le serveur de développement, exécutez :

```bash
npm run dev
```

ou si vous utilisez yarn :

```bash
yarn dev
```

Votre application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet 🗂️

Voici la structure de base du projet :

- `app/` : Contient les pages de votre application. `app/page.tsx` est la page d'accueil.
- `components/` : Répertoire pour vos composants réutilisables.
- `public/` : Pour les fichiers statiques comme les images.

## Déploiement 🚀

Pour déployer votre application, vous pouvez utiliser Vercel, une plateforme cloud optimisée pour les applications Next.js. Consultez la [documentation officielle de Vercel](https://vercel.com/docs) pour plus d'informations.

## Licence 📜

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier `LICENSE`.
