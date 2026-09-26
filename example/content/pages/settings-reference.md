---
id: 01M3CSA3PNHBP7XCR4ECK70ZNW
title: Settings reference
slug: settings-reference
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "Every setting Vane declares, as kite.yaml stores it under theme.settings."
updated_at: 2026-09-25T09:00:00Z
---
The studio shows these as a form under **Settings → Theme**, in the sections below. A setting put back to its default is removed from `kite.yaml`.

## Brand

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `logo` | image | | Drawn before the site title in the header |
| `show_title` | boolean | `true` | Shows the site title beside the logo |
| `favicon` | image | | The icon of browser tabs and bookmarks |
| `accent` | color | `#3d65bd` | Links, the current page, buttons |
| `color_scheme` | select | `auto` | `auto`, `light` or `dark` first |

## Navigation

| Setting | Type | What it does |
| --- | --- | --- |
| `nav` | list of `label`, `url` | The links in the header |
| `sidebar` | list of `title`, `pages` | The docs tree; each page is a `label` and a `url` |

## Announcement

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `announcement` | boolean | `false` | Shows the bar above the header |
| `announcement_text` | string | | Its text |
| `announcement_link` | url | | Where it leads, if anywhere |

## Home page

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `hero_title` | string | the site title | The headline |
| `hero_text` | text | the site description | The tagline |
| `hero_image` | image | | The picture beside the headline |
| `actions` | list of `label`, `url` | | The buttons; the first is the main one |
| `features` | list of `title`, `text`, `link` | | The cards |
| `show_news` | boolean | `true` | Lists the three newest posts |

## Docs

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `show_toc` | boolean | `true` | Draws the table of contents |
| `show_updated` | boolean | `true` | Shows when a page was last updated |

## Social

`social` holds `github`, `x` and `discord` addresses and an `email`, drawn as icons in the header and the footer.

## Footer

| Setting | Type | What it does |
| --- | --- | --- |
| `footer_columns` | list of `title`, `links` | Columns of links; each link is a `label` and a `url` |
| `copyright` | string | The line at the bottom; left empty, the site and the year |

## Advanced

`head_html` is added to the head of every page as it is written, such as an analytics snippet. It is not checked, so paste only what you trust.
