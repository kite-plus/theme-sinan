---
id: 01M3CSA3PNHBP7XCR4ECK70ZNW
title: Settings reference
slug: settings-reference
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "Every setting Vane declares, as kite.yaml stores it under theme.settings."
updated_at: 2026-09-27T09:00:00Z
---
The studio shows these as a form under **Settings → Theme**, in the sections below. A setting put back to its default is removed from `kite.yaml`.

## Brand

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `logo` | image | | Drawn before the site title in the header |
| `show_title` | boolean | `true` | Shows the site title beside the logo |
| `favicon` | image | | The icon of browser tabs and bookmarks |
| `accent` | color | `#3d65bd` | The underline of links, the focus and search matches |
| `color_scheme` | select | `auto` | `auto`, `light` or `dark` first |

## Navigation

| Setting | Type | What it does |
| --- | --- | --- |
| `nav` | list of `label`, `url` | The links in the header |
| `button_label` | string | A black button at the right end of the header |
| `button_url` | url | Where the button leads |
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
| `badge_text` | string | | A short line above the headline |
| `badge_tag` | string | | A word or a version at the start of the badge |
| `badge_link` | url | | Where the badge leads, if anywhere |
| `hero_title` | string | the site title | The headline |
| `hero_text` | text | the site description | The tagline |
| `actions` | list of `label`, `url` | | The buttons; the first is the main one |
| `hero_command` | string | | A command beside the buttons, ready to copy |
| `hero_image` | image | | A wide screenshot under the headline |
| `hero_image_dark` | image | | The screenshot on a dark page |
| `features_title` | string | | A small heading over the features |
| `features` | list of `title`, `text`, `link` | | The numbered grid |
| `show_news` | boolean | `true` | Lists the three newest posts |
| `more_title` | string | | A small heading over the closing list |
| `more_text` | text | | A sentence under it |
| `more` | list of `title`, `text`, `note`, `link` | | Rows at the end of the home page |

## Docs

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `show_toc` | boolean | `true` | Draws the table of contents |
| `show_updated` | boolean | `true` | Shows when a page was last updated |
| `show_reading_time` | boolean | `true` | Shows how long a page takes to read |

## Social

`social` holds `github`, `x` and `discord` addresses and an `email`, drawn as icons in the header and the footer.

## Footer

| Setting | Type | What it does |
| --- | --- | --- |
| `footer_columns` | list of `title`, `links` | Columns of links; each link is a `label` and a `url` |
| `copyright` | string | The line at the bottom; left empty, the site and the year |

## The site's own code

Code for the head or the end of every page, such as an analytics snippet, belongs to the site rather than the theme: set it under **Settings → Site** in the studio, and it stays when the site changes themes. Vane writes it out as it is, with the site's author, keywords and whether search engines may index it.
