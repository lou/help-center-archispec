---
sidebar_position: 9.7
title: Scène 3D
---

# Scène 3D du projet

Publiez une maquette 3D interactive pour parcourir le projet sur Archispec — en Orbit ou en mode Visite — et la partager éventuellement avec le client.

Chaque projet dispose d’**une seule** scène 3D, versionnée. Elle apparaît dans l’onglet **3D** du projet.

## Publier depuis SketchUp

C’est le parcours recommandé pour une maquette complète.

1. Ouvrez votre modèle dans SketchUp Desktop 2025+
2. Ouvrez le panneau **Archispec** et connectez le `.skp` au projet
3. Allez dans l’onglet **3D**
4. (Optionnel) Cochez **Partager avec le client**
5. Cliquez sur **Publier**

Le modèle est exporté en `.glb` et envoyé sur Archispec.

### Nouvelle version ou remplacement

Si une scène existe déjà, choisissez :

| Option | Effet |
|--------|--------|
| **Publier une nouvelle version (vN+1)** | Ajoute une version ; l’historique reste disponible |
| **Remplacer la version actuelle (vN)** | Écrase la dernière version sans en créer une nouvelle |

Voir aussi [Utilisation de l’extension SketchUp](/sketchup/utilisation).

## Importer un fichier sur le web

Sans SketchUp, depuis l’onglet **3D** du projet (état vide) :

1. Cliquez sur **Importer un fichier**
2. Sélectionnez un fichier **`.glb`** ou **`.gltf`**

:::tip
Un `.gltf` qui référence des fichiers externes (`.bin`, textures) ne fonctionne en général pas en import seul. Préférez un **`.glb`** autonome.
:::

## Consulter la scène

Dans l’onglet **3D** :

- **Orbit** — tourner, zoomer, déplacer la vue
- **Visite** — se déplacer dans la scène (clavier + souris)
- Sélecteur de **versions** s’il en existe plusieurs

Une aide contextuelle s’affiche en bas du viewer.

## Partager avec le client

Le partage ne se configure plus dans les paramètres du projet : il se gère depuis l’onglet **3D** (icône de partage) ou au moment de la publication SketchUp.

- **Activé** : le client voit l’onglet **3D** dans le [portail client](/portail-client/vue-ensemble)
- **Désactivé** : la scène reste réservée à l’équipe

## Supprimer

Depuis l’onglet **3D**, bouton corbeille :

- **Version actuelle** — retire uniquement la version affichée (s’il en reste d’autres)
- **Toutes les versions** — supprime toute la scène 3D du projet

## Articles liés

- [Extension SketchUp — Utilisation](/sketchup/utilisation)
- [Modèles 3D produit](/produits/generation-3d) — 3D d’un produit (distinct de la scène projet)
- [Portail client](/portail-client/vue-ensemble)
