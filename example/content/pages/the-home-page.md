---
id: 01M3CSA3M0Z7B4DEH8AGR0GJEP
title: The home page
slug: the-home-page
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "A badge, a headline, buttons and a command, a screenshot, the features and the latest news."
updated_at: 2026-09-27T09:00:00Z
---
## Badge

`badge_text` is a short line above the headline, such as news of a release, and `badge_tag` a word or a version drawn in black at its start. With `badge_link` set, the badge leads there.

## Headline and tagline

`hero_title` is the headline, and `hero_text` the sentence or two under it. Left empty, they are the site's title and description.

## Buttons and a command

`actions` are the buttons under the tagline. The first is the main one, drawn in black.

```yaml
actions:
  - {label: Get started, url: /introduction/}
  - {label: GitHub, url: https://github.com/you/project}
```

With no buttons, the home page links to the first page of the docs tree.

`hero_command` is drawn beside the buttons with a button that copies it, such as the command that installs the product.

## Picture

`hero_image` is drawn in a frame under the buttons, across the page, so a wide screenshot of the product suits it best. `hero_image_dark` takes its place when the page is dark; left empty, the one picture is shown either way.

## Features

`features` are drawn as a grid under the picture, numbered in order, each a title and a sentence. A feature with a link leads to it. `features_title` puts a small heading over them.

## News

`show_news` lists the three newest posts under the features. Kite pages the home page by the news, so its second page lists older posts.

## A closing list

`more` draws rows at the end of the home page, such as related projects: each a `title` and a `text`, a short `note` such as a status or a version, and a `link` if it has one. `more_title` and `more_text` go over them.
