---
sidebar_position: 8
title: Planning
---

# Planning

Archispec's Planning feature helps you manage a project visually, clearly, and collaboratively. At a glance, you see current tasks, upcoming ones, and dependencies between them.

## Access planning

1. Open your project
2. Click the **Planning** tab

:::info
Planning is enabled **per project**. When creating the project, or in **Settings** → **Edit**, turn on the **Planning** option. If the tab doesn't appear, check that planning is enabled for this project.
:::

## Enable planning on a project

1. Open the project **Settings**
2. Click **Edit**
3. Turn on the **Planning** option
4. Save

Turning planning off hides the tab and also disables client planning sharing.

To share the calendar with the client, then enable **global client sharing** in the **Planning** tab, and mark tasks as visible. See [Share planning with the client](#share-planning-with-the-client).

## Phases

**Phases** group tasks from the same project stage (Studies, Consultation, Construction, Handover, or custom labels).

### Create a phase

1. In the **Planning** tab, open the sidebar or task form
2. Click **Create a phase**
3. Enter the **name** and choose a **color**
4. Confirm

Phases appear as colored bands above their associated tasks. You can collapse or expand each phase to simplify the view.

### Edit or delete a phase

1. Open the phase from the task form or sidebar
2. Change the name or color, or delete the phase

Deleting a phase does not delete tasks — they are simply no longer grouped.

## Create a task

1. In the **Planning** tab, click **Create a task**
2. Fill in the information:
   - **Title**: custom name or project lot
   - **Start date** and **duration**
   - **Phase** (optional)
   - **Dependencies** (optional)
   - **Client visibility** (optional)
3. Confirm creation

The form opens in a right-side panel.

## Read the planning view

Each row represents a task, with:

- Its period (start date → end date)
- Its phase, if any
- Its dependencies (arrows between tasks)

You can switch between:

- **Day view** for very detailed tracking
- **Week view** for day-to-day follow-up
- **Month view** for a broader overview

## Navigate quickly

- Click a **task name** to jump directly to its start date
- Click a **phase** label to jump to the start of that phase
- The planning view automatically centers around today's date on load

## Reorder tasks

In the sidebar list, drag a task vertically to change its display order.

## Edit a task

1. Click a **task block** or a sidebar entry to open the edit panel
2. Edit the desired fields:
   - Title
   - Start date and duration
   - Phase
   - Dependencies
   - Client visibility

## Manage dependencies

A task can depend on **multiple** preceding tasks:

1. In the edit panel, under **Linked to**, select the tasks that precede this one
2. Arrows appear between tasks to visualize the relationships
3. Click a linked task title to find it quickly on the timeline

If you move a parent task, dependent tasks follow automatically.

You can also create a link directly from the timeline using a task's link handle.

## Share planning with the client

1. In the **Planning** tab, open the **Share** menu
2. Enable **Client space** sharing
3. The client sees tasks marked as visible in their **Progress** space

You can also control visibility **task by task** via the edit panel.

## External links (read-only)

To share planning with someone outside Archispec (no account):

1. Open **Share** → **Manage links** (or **Shares**)
2. Click **New share**
3. Give it a name, set a **password**, and choose:
   - **Share the entire planning**, or
   - **Select tasks** (by phase, with optional auto-include of new tasks)
4. Send the **link** and **password**

The recipient views planning read-only after entering the password. You can rotate the password, disable, or delete a share at any time.

## Validation deadlines on planning

Lot [validation deadlines](/projet/echeances-validation) also appear on the timeline. Position them relative to the lot start (same day, X days before or after) to align client validation with the build schedule.

## In summary

Planning lets you:

- Structure the project by phases and lots
- Anticipate dependencies between tasks
- Reorder tasks according to your priorities
- Share with the client or via a password-protected link
- See validation deadlines on the timeline
