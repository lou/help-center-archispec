---
sidebar_position: 2
title: Utilisation
---

# Utilisation de l'extension SketchUp

Parcourez les produits d'un projet Archispec depuis SketchUp, placez leurs modèles 3D, peignez avec leurs matières, et renvoyez une sélection comme 3D produit.

## Prérequis

- Extension installée — voir [Installation](/sketchup/installation)
- Un projet Archispec avec des produits (idéalement avec un modèle 3D déjà généré ou importé — voir [Modèles 3D](/produits/generation-3d))

## Se connecter et lier un projet

1. Ouvrez le panneau **Archispec** (Extensions → Archispec → Open Panel)
2. Connectez-vous avec vos identifiants archispec.fr
3. Sélectionnez le **projet** à associer au fichier `.skp` ouvert

Le lien projet est mémorisé dans les attributs du modèle SketchUp.

## Parcourir les produits

Dans le panneau :

- Recherchez par nom
- Filtrez selon les options disponibles
- Ouvrez un produit pour voir ses images, fournisseurs et actions

**Voir sur Archispec.fr** ouvre la fiche produit dans le navigateur.

## Placer un modèle 3D

1. Choisissez un produit qui a un badge **3D** (GLB généré, importé, ou lié depuis SketchUp)
2. Cliquez sur **Placer la 3D dans le modèle**
3. Cliquez dans le modèle SketchUp pour positionner le composant

:::tip
Si le produit n'a pas encore de 3D, générez-la ou importez-la depuis la fiche produit sur le web, ou utilisez « Utiliser la sélection comme 3D » ci-dessous.
:::

## Trouver un produit déjà placé

Quand le produit est déjà dans le modèle, l'action **Trouver dans le modèle** sélectionne toutes les instances taguées avec cet identifiant produit Archispec.

## Utiliser la sélection comme 3D

Pour associer un composant SketchUp à une fiche produit :

1. Sélectionnez le composant (ou le groupe) dans le modèle
2. Sur le produit concerné, cliquez sur **Utiliser la sélection comme 3D**
3. Confirmez

Archispec enregistre :

- un fichier **`.skp`** pour rouvrir le composant dans SketchUp
- un aperçu **`.glb`** pour la fiche produit sur le web

## Ajouter une matière

Depuis un produit :

1. Cliquez sur **Ajouter aux matières**
2. Choisissez d'utiliser l'**image** comme texture, ou une **couleur unie** (pipette)
3. Avec l'outil Pot de peinture, cliquez une face pour appliquer la matière

## Dépannage

### Le panneau ne s'ouvre pas

- Vérifiez que l'extension est activée dans Extension Manager
- Redémarrez SketchUp
- Confirmez que vous êtes en SketchUp **Desktop 2025+**

### Impossible de placer la 3D

- Le produit doit avoir un modèle 3D (GLB ou SKP lié)
- Vérifiez votre connexion et que vous êtes bien membre du projet
- Les liens de téléchargement signés expirent : réessayez l'action pour en régénérer un

### « SketchUp 2025 requis »

L'import GLB natif nécessite SketchUp 2025 ou plus récent. Mettez SketchUp à jour, ou utilisez un fichier `.skp` lié plutôt qu'un GLB.

### La mise à jour échoue

Téléchargez le `.rbz` depuis [archispec.fr/sketchup](https://archispec.fr/sketchup) et réinstallez via Extension Manager.
