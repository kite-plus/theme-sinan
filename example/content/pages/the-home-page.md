---
id: 01M3CSA3M0Z7B4DEH8AGR0GJEP
title: The home page
slug: the-home-page
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "A headline, buttons, cards for the features, and the latest news."
updated_at: 2026-09-25T09:00:00Z
---
## Headline and tagline

`hero_title` is the headline, and `hero_text` the sentence or two under it. Left empty, they are the site's title and description.

## Picture

`hero_image` is drawn beside the headline on a wide screen and under it on a narrow one, such as a screenshot of the product or a large logo.

## Buttons

`actions` are the buttons under the tagline. The first is the main one.

```yaml
actions:
  - {label: Get started, url: /introduction/}
  - {label: GitHub, url: https://github.com/you/project}
```

With no buttons, the home page links to the first page of the docs tree.

## Features

`features` are cards under the headline, each a title and a sentence. A card with a link leads to it.

## News

`show_news` lists the three newest posts under the features. Kite pages the home page by the news, so its second page lists older posts.
