---
sidebar_position: 2
title: Usage
---

# Using the SketchUp extension

Browse an Archispec project's products from SketchUp, place their 3D models, paint with their materials, and send a selection back as product 3D.

## Prerequisites

- Extension installed — see [Installation](/sketchup/installation)
- An Archispec project with products (ideally with a 3D model already generated or imported — see [3D models](/produits/generation-3d))

## Sign in and link a project

1. Open the **Archispec** panel (Extensions → Archispec → Open Panel)
2. Sign in with your archispec.fr credentials
3. Select the **project** to associate with the open `.skp` file

The project link is stored in the SketchUp model attributes.

## Browse products

In the panel:

- Search by name
- Filter with the available options
- Open a product to see images, suppliers, and actions

**View on Archispec.fr** opens the product sheet in the browser.

## Place a 3D model

1. Choose a product with a **3D** badge (generated GLB, imported file, or linked from SketchUp)
2. Click **Place 3D in the model**
3. Click in the SketchUp model to position the component

:::tip
If the product has no 3D yet, generate or import it from the product sheet on the web, or use “Use selection as 3D” below.
:::

## Find a product already placed

When the product is already in the model, **Find in model** selects all instances tagged with that Archispec product id.

## Use selection as 3D

To attach a SketchUp component to a product sheet:

1. Select the component (or group) in the model
2. On the relevant product, click **Use selection as 3D**
3. Confirm

Archispec saves:

- a **`.skp`** file to reopen the component in SketchUp
- a **`.glb`** preview for the product sheet on the web

## Add a material

From a product:

1. Click **Add to materials**
2. Choose the product **image** as a texture, or a **flat color** (eyedropper)
3. With the Paint Bucket tool, click a face to apply the material

## Troubleshooting

### The panel does not open

- Check that the extension is enabled in Extension Manager
- Restart SketchUp
- Confirm you are on SketchUp **Desktop 2025+**

### Cannot place 3D

- The product must have a 3D model (GLB or linked SKP)
- Check your connection and that you are a member of the project
- Signed download links expire: retry the action to refresh one

### “SketchUp 2025 required”

Native GLB import needs SketchUp 2025 or newer. Update SketchUp, or use a linked `.skp` instead of a GLB.

### Update fails

Download the `.rbz` from [archispec.fr/en/sketchup](https://archispec.fr/en/sketchup) and reinstall via Extension Manager.
