---
sidebar_position: 2
title: Roles and permissions
---

# Roles and permissions

Archispec distinguishes roles at the **agency** level and at each **project** level.

## Agency-level roles

| Role | Description |
|------|-------------|
| **Owner** | Full access, can transfer agency ownership |
| **Administrator** | Manages members and agency settings |
| **Member** | Standard access: creates projects, works on specifications |

### Agency permissions

| Action | Owner | Administrator | Member |
|--------|:-----:|:-------------:|:------:|
| Create new projects | ✅ | ✅ | ✅ |
| Manage members | ✅ | ✅ | ❌ |
| Edit agency settings | ✅ | ✅ | ❌ |
| Transfer ownership | ✅ | ❌ | ❌ |

To invite a member to the agency, see [Member management (agency)](/agence/gestion-membres).

## Project-level roles

Each project member has a role specific to that project:

| Role | Description |
|------|-------------|
| **Owner** | Full project control, can archive the project |
| **Administrator** | Manages project settings and members |
| **Member** | Works on products, files, and chat |
| **Client** | Views shared products, validates choices, and communicates via external chat |

### Project permissions (team)

| Permission | Owner | Administrator | Member |
|------------|:-----:|:-------------:|:------:|
| Edit products and files | ✅ | ✅ | ✅ |
| Add new products | ✅ | ✅ | ✅ |
| Use chat | ✅ | ✅ | ✅ |
| Project settings | ✅ | ✅ | ❌ |
| Manage members | ✅ | ✅ | ❌ |
| Transfer ownership | ✅ | ❌ | ❌ |
| Archive project | ✅ | ❌ | ❌ |

To add a member to a project, see [Member management (project)](/projet/gestion-membres).

## Role hierarchy

Roles are hierarchical: an administrator inherits a member's permissions, and an owner inherits an administrator's permissions.

## Clients

Clients are not agency members. They only access projects they are invited to, through a dedicated space. Their scope is limited to proposed products, shared files, and external chat.

See [Client sharing](/projet/partage-client) for details.
