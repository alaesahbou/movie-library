# Movie Library

Une application de recommandation de films construite avec Next.js, GraphQL et Docker.

## Prérequis

- Node.js
- Docker

## Installation

1. Clonez ce dépôt sur votre machine locale :

```
git clone https://github.com/alaesahbou/movie-library.git
```

2. Accédez au répertoire du projet :

```
cd movie-library
```

3. Installez les dépendances :

```
npm i
```
## Utilisation sans Docker

Si vous souhaitez exécuter l'application sans utiliser Docker, vous pouvez suivre les étapes suivantes :

1. Exécutez la commande suivante pour construire l'application :

```
npm run build
```

2. Une fois la construction terminée, vous pouvez lancer l'application en utilisant la commande :

```
npm run start
```

7. Accédez à l'application dans votre navigateur Web à l'adresse [http://localhost:3000](http://localhost:3000).

## Utilisation avec docker

1. Construisez l'image Docker et démarrez le conteneur :

```
docker-compose up
```

2. Accédez à l'application dans votre navigateur Web à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure des Fichiers

L'application suit une structure de fichiers organisée pour une meilleure maintenabilité. Voici un aperçu des dossiers et fichiers principaux :

- **`pages/`** : Ce répertoire contient les différentes pages de l'application. Par exemple, `index.js` contient la page d'accueil, et `video/[slug].js` contient la page des détails pour chaque film.
- **`pages/api/`** : Ce répertoire contient les fichiers pour les endpoints d'API utilisés par l'application. Par exemple, `api/check.js` contient le code pour vérifier l'API, et `api/change-trailer-seen.js` est utilisé pour marquer un film comme vu afin de générer des recommandations.
- **`public/`** : Ce répertoire contient les fichiers statiques publics tels que le logo de l'application et les images des films.
- **`styles/`** : Ce répertoire contient les fichiers de styles pour l'application. Par exemple, `global.css` contient les styles globaux, et il peut y avoir d'autres fichiers pour les styles spécifiques à certains composants.
- **`components/`** : Ce répertoire contient les composants réutilisables de l'application tels que le composant de la barre de navigation (`Navbar`), le composant de la section (`Section`), et le composant de la carte (`Card`).

N'hésitez pas à personnaliser la structure des fichiers en fonction des besoins spécifiques de votre application, mais assurez-vous de maintenir une organisation cohérente pour faciliter le développement et la maintenance de l'application.

## Détails des Films

La page de détails affiche des informations détaillées sur chaque film, y compris le titre, les catégories et une description. Vous pouvez accéder à la page de détails d'un film en cliquant sur le lien correspondant à partir de la liste de films.

## Technologies Utilisées

- Next.js : Framework React pour le rendu côté serveur et la construction d'applications web.
- GraphQL : Langage de requête et environnement d'exécution pour les API utilisé pour récupérer et manipuler les données.
- GraphCMS : Plateforme de gestion de contenu headless utilisée comme backend GraphQL pour l'application.
- Docker : Plateforme pour la création de conteneurs d'applications et leur exécution dans des environnements isolés.
- Node.js : Environnement d'exécution JavaScript pour exécuter du code JavaScript côté serveur.
- Tailwind CSS : Framework CSS utilisé pour la conception et la mise en page de l'interface utilisateur.
- Autres dépendances : L'application utilise d'autres dépendances pour le routage, la gestion des données et d'autres fonctionnalités.
