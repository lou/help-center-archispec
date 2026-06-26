---
sidebar_position: 2
title: Rôles et permissions
---

# Rôles et permissions

Archispec distingue les rôles au niveau de l'**agence** et au niveau de chaque **projet**.

## Rôles au niveau agence

| Rôle | Description |
|------|-------------|
| **Propriétaire** | Accès complet, peut transférer la propriété de l'agence |
| **Administrateur** | Gère les membres et les paramètres de l'agence |
| **Associé** | Accès standard : crée des projets, travaille sur les spécifications |

### Permissions agence

| Action | Propriétaire | Administrateur | Associé |
|--------|:------------:|:--------------:|:-------:|
| Créer de nouveaux projets | ✅ | ✅ | ✅ |
| Gérer les membres | ✅ | ✅ | ❌ |
| Modifier les paramètres de l'agence | ✅ | ✅ | ❌ |
| Transférer la propriété | ✅ | ❌ | ❌ |

Pour inviter un membre à l'agence, consultez [Gestion des membres (agence)](/agence/gestion-membres).

## Rôles au niveau projet

Chaque membre d'un projet a un rôle spécifique à ce projet :

| Rôle | Description |
|------|-------------|
| **Propriétaire** | Contrôle total du projet, peut l'archiver |
| **Administrateur** | Gère les paramètres et les membres du projet |
| **Associé** | Travaille sur les produits, fichiers et chat |
| **Client** | Consulte les produits partagés, valide et échange via le chat externe |

### Permissions projet (équipe)

| Permission | Propriétaire | Administrateur | Associé |
|------------|:------------:|:--------------:|:-------:|
| Modifier produits et fichiers | ✅ | ✅ | ✅ |
| Ajouter de nouveaux produits | ✅ | ✅ | ✅ |
| Utiliser le chat | ✅ | ✅ | ✅ |
| Paramètres du projet | ✅ | ✅ | ❌ |
| Gérer les membres | ✅ | ✅ | ❌ |
| Transférer la propriété | ✅ | ❌ | ❌ |
| Archiver le projet | ✅ | ❌ | ❌ |

Pour ajouter un membre à un projet, consultez [Gestion des membres (projet)](/projet/gestion-membres).

## Hiérarchie des rôles

Les rôles sont hiérarchiques : un administrateur hérite des permissions d'un associé, un propriétaire hérite de celles d'un administrateur.

## Clients

Les clients ne sont pas des membres de l'agence. Ils accèdent uniquement aux projets auxquels ils sont invités, via un espace dédié. Leur périmètre est limité aux produits proposés, fichiers partagés et chat externe.

Consultez [Partage client](/projet/partage-client) pour le détail.
