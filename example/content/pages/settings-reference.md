---
id: 01M3CSA3PNHBP7XCR4ECK70ZNW
title: Settings reference
slug: settings-reference
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "Every setting Vane declares, as kite.yaml stores it under theme.settings."
updated_at: 2026-09-27T12:00:00Z
---
The studio shows these as a form under **Settings → Theme**, in the sections below. A setting put back to its default is removed from `kite.yaml`.

## Brand

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `logo` | image | | Drawn before the site title in the header and the footer |
| `logo_dark` | image | | The logo on a dark page |
| `show_title` | boolean | `true` | Shows the site title beside the logo |
| `tagline` | string | | Follows the site's name in the home page's title |
| `favicon` | image | | The icon of browser tabs and bookmarks |
| `share_image` | image | | The picture a shared link shows, where a page has no cover |
| `accent` | color | `#3a66c4` | The kite, the seals, links, the focus and search matches |
| `color_scheme` | select | `auto` | `auto`, `light` or `dark` first |
| `texture` | boolean | `true` | A faint paper grain over the page |

## Navigation

| Setting | Type | What it does |
| --- | --- | --- |
| `nav` | list of `label`, `url` | The links in the header |
| `button_label` | string | An ink button at the right end of the header |
| `button_url` | url | Where the button leads |
| `sidebar` | list of `title`, `pages` | The docs tree; each page is a `label` and a `url` |

## Announcement

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `announcement` | boolean | `false` | Shows the bar above the header |
| `announcement_text` | string | | Its text |
| `announcement_link` | url | | Where it leads, if anywhere |

## Home page: the headline

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `badge_text` | string | | A short line above the headline |
| `badge_tag` | string | | A word or a version stamped at the start of the badge |
| `badge_link` | url | | Where the badge leads, if anywhere |
| `hero_title` | text | the site title | The headline; each line starts a new line, and `*words*` are underlined |
| `hero_text` | text | the site description | The tagline |
| `actions` | list of `label`, `url` | | The buttons; the first is the main one |
| `hero_command` | string | | A command beside the buttons, ready to copy |
| `hero_art` | boolean | `true` | A kite in the sky behind the headline |

## Home page: the product

| Setting | Type | What it does |
| --- | --- | --- |
| `showcase_label` | string | A small heading in red |
| `showcase_title` | string | The section's title |
| `showcase_text` | text | A sentence under it |
| `showcase_image` | image | The main window; without it the section is left out |
| `showcase_image_dark` | image | The main window on a dark page |
| `showcase_alt` | string | What the main picture shows |
| `showcase_image2` | image | A smaller window over a corner of the first |
| `showcase_image2_dark` | image | The smaller window on a dark page |
| `showcase_alt2` | string | What the second picture shows |
| `showcase_note` | string | A note beside the second window, with an arrow |
| `showcase_note_text` | string | The note's second line |

## Home page: the features

| Setting | Type | What it does |
| --- | --- | --- |
| `features_label` | string | A small heading in red |
| `features_title` | string | The section's title |
| `features` | list | Tags on a string: `title`, `text`, `link`, and a `sample` of `none`, `page`, `code`, `tiles` or `pictures` with the fields [the home page](/the-home-page/) lists |

## Home page: pictures

| Setting | Type | What it does |
| --- | --- | --- |
| `gallery_label` | string | A small heading in red |
| `gallery_title` | string | The section's title |
| `gallery_text` | text | A sentence under it |
| `gallery` | list of `image`, `image_dark`, `title`, `note`, `link` | Prints on a band of darker paper |

## Home page: news and more

| Setting | Type | Default | What it does |
| --- | --- | --- | --- |
| `show_news` | boolean | `true` | Lists the three newest posts |
| `more_title` | string | | A heading beside the closing cards |
| `more_text` | text | | A sentence under it |
| `more` | list of `title`, `text`, `note`, `note_quiet`, `link`, `link_label` | | Cards at the end of the home page |

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
