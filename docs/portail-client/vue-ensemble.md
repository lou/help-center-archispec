---
sidebar_position: 1
title: Vue d'ensemble
---

# Vue d'ensemble du portail client

Les clients invités sur un projet accèdent à un espace dédié, distinct de l'interface de l'agence.

## Accès

1. Le client reçoit un email d'invitation
2. Il clique sur le lien et se connecte (ou crée un compte)
3. Il accède directement à son projet

L'URL du portail client suit le format `archispec.fr/client/projects/...`.

## Navigation client

Le portail client propose les onglets suivants :

| Onglet | Contenu |
|--------|---------|
| **Produits** | Produits proposés par l'agence |
| **Fichiers** | Documents partagés par l'agence (si au moins un fichier est visible) |
| **Avancement** | Planning partagé (si le planning est activé sur le projet et partagé) |
| **Chat** | Canal externe — échanges avec l'équipe |

Le client accède aussi à son **Compte** (profil et notifications) via le menu en haut à droite.

## Ce que voit le client

### Produits

Le client ne voit que les produits au statut **Proposé** ou au-delà dans le cycle de vie. Les produits « Non spécifié » sont masqués.

Pour chaque produit visible, selon les [paramètres de partage](/projet/parametres-partage) :

- Nom, description et images
- Prix (si partagés)
- Lien web (si partagé)
- Suivi de livraison (date estimée, numéro et lien de suivi, s'ils sont renseignés)

### Fichiers

Uniquement les fichiers que l'agence a rendus visibles (icône œil activée). Consultation et téléchargement uniquement — pas d'ajout ni de modification des fichiers. Sur les images et PDF visibles, le client peut toutefois placer des [annotations](/projet/annotations).

### Avancement

Visible uniquement si le planning est activé sur le projet et que le partage client est activé. Le client voit les tâches marquées comme visibles.

### Chat

Le client accède au **canal externe** uniquement. Le canal interne de l'équipe lui est inaccessible.

## Ce que le client ne peut pas faire

| Action | Disponible côté client |
|--------|:----------------------:|
| Créer ou modifier des produits | Non |
| Exporter des documents | Non |
| Générer des modèles 3D | Non |
| Accéder au chat interne | Non |
| Modifier les paramètres du projet | Non |
| Uploader des fichiers | Non |
| Annoter une image ou un PDF visible | Oui |
| Inviter d'autres membres de l'agence | Non |

## Prévisualiser l'espace client (côté agence)

Avant d'inviter un client, utilisez la [prévisualisation client](/projet/previsualisation-client) pour vérifier ce qu'il verra.

Vous pouvez aussi ouvrir le portail client depuis l'icône **Aperçu client** dans la barre du projet. Un bandeau indique que vous êtes en mode aperçu et les actions client sont désactivées.

## Articles liés

- [Inviter un client](/projet/partage-client)
- [Valider des produits](/portail-client/validation-produits)
- [Annotations](/projet/annotations)
- [Statuts des produits](/produits/statuts-produits)
