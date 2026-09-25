---
id: 01M3CSA3MXC1AKHWGF1NQKP7C7
title: Writing docs
slug: writing-docs
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "Docs are Kite pages. What Sinan reads from them."
updated_at: 2026-09-25T09:00:00Z
---
Every doc is a page, made with `kite new page` or from the studio, and listed in [the docs tree](/navigation-and-the-docs-tree/).

## The description

A `description` in the front matter is drawn under the title as its lead, and is what search engines show.

```yaml
---
title: Quick start
description: From an empty folder to a docs site in a few minutes.
updated_at: 2026-09-25T09:00:00Z
---
```

## Headings

Second and third level headings make the table of contents, beside the page on a wide screen and above it on a narrow one. A page with fewer than two has none. Each heading can be linked to: hover over it and use the `#` before it.

## Last updated

The date under a page comes from its `updated_at`, or from its date when it has none. Turn it off with `show_updated`.

## A page outside the docs

A page the tree does not list is drawn on its own, with its table of contents. Choose the **Wide page** template, `layout: wide` in the front matter, for a page that should use the whole width.

## News

Posts are the news: listed on the home page and under `/posts/`, with their tags and categories, and in the RSS feed.
