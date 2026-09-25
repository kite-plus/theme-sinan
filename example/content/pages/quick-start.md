---
id: 01M3CSA3G8Z4FD41N5B5B3FSTA
title: Quick start
slug: quick-start
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "From an empty folder to a docs site in a few minutes."
updated_at: 2026-09-25T09:00:00Z
---
## Create a site

```sh
kite init my-docs
cd my-docs
```

## Install Sinan

Open the studio with `kite run`, go to **Settings → Theme**, and drop the zip of a Sinan release on the upload tile. Try it on the whole site, then choose **Use**.

Without the studio, unzip the release into the site's `themes` folder and choose the theme in `kite.yaml`:

```sh
unzip sinan-0.1.0.zip -d themes
```

```yaml
theme:
  name: sinan
```

## Write the first page

```sh
kite new page "Introduction"
```

## List it in the docs tree

A page joins the docs once the tree lists it. The studio edits the tree as a form; in `kite.yaml` it reads:

```yaml
theme:
  name: sinan
  settings:
    sidebar:
      - title: Getting started
        pages:
          - {label: Introduction, url: /introduction/}
```

## Run it

```sh
kite run
```

The home page links to the first page of the tree until you give it [buttons of its own](/the-home-page/).
