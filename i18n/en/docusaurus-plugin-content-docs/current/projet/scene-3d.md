---
sidebar_position: 9.7
title: Project 3D scene
---

# Project 3D scene

Publish an interactive 3D model to explore the project on Archispec — in Orbit or Walk mode — and optionally share it with the client.

Each project has **one** versioned 3D scene. It appears in the project **3D** tab.

## Publish from SketchUp

This is the recommended path for a full model.

1. Open your model in SketchUp Desktop 2025+
2. Open the **Archispec** panel and connect the `.skp` to the project
3. Go to the **3D** tab
4. (Optional) Enable **Share with client**
5. Click **Publish**

The model is exported as `.glb` and uploaded to Archispec.

### New version or replace

If a scene already exists, choose:

| Option | Effect |
|--------|--------|
| **Publish a new version (vN+1)** | Adds a version; history stays available |
| **Replace current version (vN)** | Overwrites the latest version in place |

See also [Using the SketchUp extension](/sketchup/utilisation).

## Upload a file on the web

Without SketchUp, from the project **3D** tab (empty state):

1. Click **Upload a file**
2. Select a **`.glb`** or **`.gltf`** file

:::tip
A `.gltf` that references external files (`.bin`, textures) usually will not work as a single upload. Prefer a self-contained **`.glb`**.
:::

## View the scene

In the **3D** tab:

- **Orbit** — rotate, zoom, pan
- **Walk** — move through the scene (keyboard + mouse)
- **Version** picker when several versions exist

Contextual help appears at the bottom of the viewer.

## Share with the client

Sharing is no longer in project settings: manage it from the **3D** tab (share icon) or when publishing from SketchUp.

- **On**: the client sees the **3D** tab in the [client portal](/portail-client/vue-ensemble)
- **Off**: the scene stays team-only

## Delete

From the **3D** tab, trash button:

- **Current version** — removes only the version you are viewing (if others remain)
- **All versions** — deletes the entire project 3D scene

## Related articles

- [SketchUp extension — Usage](/sketchup/utilisation)
- [Product 3D models](/produits/generation-3d) — per-product 3D (separate from the project scene)
- [Client portal](/portail-client/vue-ensemble)
