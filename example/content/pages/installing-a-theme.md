---
id: 01M3CSA3H7XSFVN4E1Y42XCFRH
title: Installing a theme
slug: installing-a-theme
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "Vane lives in its own repository and is released as a zip the studio installs."
updated_at: 2026-09-25T09:00:00Z
---
Vane is not built into Kite, which ships only its default theme. It is released from its own repository, `kite-plus/theme-vane`, as a zip holding one folder, `vane`, with `theme.yaml` at its top.

## In the studio

1. Open **Settings → Theme**.
2. Drop the zip on the upload tile, or click the tile to choose the file.
3. Try Vane on the whole site with the settings as you edit them, then choose **Use**.

What the switch writes, `kite.yaml` and `themes/vane`, is published from the settings screen like any other change.

## By hand

Unzip the release into the site's `themes` folder, so that `themes/vane/theme.yaml` exists, and set `theme.name` to `vane`.

## Updating

Install a newer zip the same way. The studio shows both versions and replaces the folder only once you confirm, removing the files the new version no longer has. The settings stay in `kite.yaml`.

## Changing the theme

Change Vane in its repository and release it, rather than editing the copy in a site: the next update would overwrite the edit. To change one template for one site, copy it into the site's own `layouts` folder, where the site's copy wins.
