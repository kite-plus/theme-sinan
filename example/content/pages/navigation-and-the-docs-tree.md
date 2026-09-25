---
id: 01M3CSA3K2HZGXPE1MFPFANNWE
title: Navigation and the docs tree
slug: navigation-and-the-docs-tree
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "The links in the header, and the groups and pages of the docs in reading order."
updated_at: 2026-09-25T09:00:00Z
---
## Header links

`nav` lists the links in the header. An address within the site starts with a slash, and a link to another site opens in a new tab.

```yaml
nav:
  - {label: Docs, url: /introduction/}
  - {label: News, url: /posts/}
  - {label: GitHub, url: https://github.com/you/project}
```

A link into the docs tree is marked as current anywhere in the docs, and a link to the news anywhere in the news.

## The docs tree

`sidebar` is a list of groups, each a title and its pages, in reading order.

```yaml
sidebar:
  - title: Getting started
    pages:
      - {label: Introduction, url: /introduction/}
      - {label: Quick start, url: /quick-start/}
  - title: Reference
    pages:
      - {label: Settings reference, url: /settings-reference/}
```

A page listed here is drawn with the tree beside it, and its previous and next links follow the tree, from one group into the next. A page the tree does not list, such as an about page, is drawn on its own.

## On a narrow screen

The header links and the tree move into a drawer that the menu button opens, on every page. It opens without a script, too.

## Search

The search in the header finds a page of the tree, or a header link, by its title. Press `/`, or `Ctrl K`, to open it from anywhere.
