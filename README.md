# Argent Bank – Application bancaire Front-end React

Projet réalisé dans le cadre de ma formation de développeur web.  
Ce projet consiste à développer le front-end d’une application bancaire moderne avec React et Redux, en intégrant les API back-end pour offrir une expérience utilisateur complète et réactive.

## Contexte

Argent Bank est une banque en ligne ambitieuse souhaitant proposer une interface simple et sécurisée à ses utilisateurs.  
Le projet vise à créer le tableau de bord des utilisateurs, incluant l’authentification, la gestion du profil, et la préparation à la gestion des transactions.

## Objectifs pédagogiques

- Développer une application React complète et responsive  
- Intégrer le front-end avec le back-end via des appels API REST  
- Gérer le state global de l’application avec Redux  
- Utiliser Swagger pour documenter et modéliser les routes API  
- Appliquer des bonnes pratiques de développement (composants réutilisables, optimisation des images)

## Fonctionnalités principales

### Phase 1 – Authentification

- Page d’accueil accessible à tous  
- Connexion sécurisée des utilisateurs avec gestion des erreurs (login / mot de passe)  
- Déconnexion des utilisateurs  
- Accès au profil utilisateur uniquement après connexion réussie  
- Modification du pseudo uniquement (nom et prénom non modifiables)

### Phase 2 – Gestion des transactions (en conception)

- Visualisation des transactions du mois en cours par compte (non implémenté côté front-end dans ce projet)  
- Propositions de routes API pour la gestion des transactions via Swagger (en cours)

## Technologies utilisées

- React.js  
- Redux  
- React Router  
- Axios (ou fetch) pour les appels API REST  
- Swagger (pour la documentation des routes API)  
- Node.js (exécution côté serveur backend)  
- Vite (outil de build et dev server)  
- Git & GitHub  
- Visual Studio Code

## Prérequis

- Node.js (version récente recommandée)  
- npm ou yarn  
- Pour la partie front-end : npm ou yarn install  
- Pour la partie back-end : voir le README du dépôt backend (https://github.com/MouawiyyaShafiq/Openclassrooms-P10-BE)

## Installation et lancement

### Front-end

1. Cloner le dépôt :  

    ```bash
git clone https://github.com/MouawiyyaShafiq/Openclassrooms-P10-FE.git

2. Installer les dépendances :

bash
npm install
Lancer l’application en mode développement :

bash
npm run dev
L’application sera accessible à l’adresse indiquée dans la console.

### Back-end
Voir le README du dépôt backend :
https://github.com/MouawiyyaShafiq/Openclassrooms-P10-BE

Auteur
Shafiq Mouawiyya
Développeur web junior