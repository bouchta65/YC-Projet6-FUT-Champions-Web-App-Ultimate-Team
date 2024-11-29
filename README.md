# Conception d'une Équipe FUT (Ultimate Team)

## Description du Projet

Cette application interactive permet aux utilisateurs de construire leur équipe FUT en ajoutant, positionnant et modifiant les joueurs, tout en respectant les formations tactiques comme **4-4-2** ou **4-3-3**. L'interface offre des formulaires dynamiques, un calcul automatique de la chimie de l'équipe et une gestion des données avec **localStorage**.

---

## Fonctionnalités Clés

### 🧩 **Ajout Dynamique de Joueurs**
- Formulaire complet pour ajouter des joueurs avec :
  - Nom
  - Position
  - Note
  - Statistiques spécifiques
- Validation stricte des champs pour garantir la cohérence des données.

### ⚽ **Positionnement des Joueurs par Formation**
- Gestion automatique des positions selon la formation choisie :
  - **Formation 4-3-3** : 1 GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.
  - **Formation 4-4-2** : 1 GK, 2 CB, 1 LB, 1 RB, 2 CM, 1 RM, 1 LM, 2 ST.
- Ajustement dynamique des positions des joueurs selon la formation sélectionnée.

### 🎮 **Gestion des Cartes de Joueurs**
- Ajout, modification et suppression des joueurs via une interface intuitive.
- Limitation stricte à **11 joueurs actifs** dans la formation principale.

### 🔗 **Calcul Automatique de la Chimie**
- Calcul dynamique basé sur :
  - Position correcte
  - Liaisons entre joueurs (club, ligue, nationalité)
- Score de chimie total affiché avec une échelle normalisée (0-100).

### 💾 **Sauvegarde et Récupération des Données**
- Utilisation de **localStorage** pour enregistrer la formation et les joueurs.
- Chargement automatique des données à l'ouverture de l'application.

### 🖱️ **Drag & Drop**
- Fonctionnalité de glisser-déposer pour repositionner ou remplacer des joueurs dans la formation.

### 📱 **Responsive Design**
- Interface optimisée pour une utilisation sur ordinateur, tablette et mobile.

---
