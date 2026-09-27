---
id: 01M3CSA3M0Z7B4DEH8AGR0GJEP
title: The home page
slug: the-home-page
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "A badge, a headline under a kite, the product, the features, pictures, the latest news and closing cards."
updated_at: 2026-09-27T12:00:00Z
---
## Badge

`badge_text` is a short line above the headline, such as news of a release, and `badge_tag` a word or a version stamped in the accent color at its start. With `badge_link` set, the badge leads there.

## Headline and tagline

`hero_title` is the headline, and `hero_text` the sentence or two under it. Left empty, they are the site's title and description. A line break in `hero_title` starts a new line in the headline, where a long one should turn, and words between two asterisks are underlined in the accent color:

```yaml
hero_title: |-
  Docs that
  *show the way*
```

## Buttons and a command

`actions` are the buttons under the tagline. The first is the main one, drawn in ink, and a button that leads to GitHub carries its mark.

```yaml
actions:
  - {label: Get started, url: /introduction/}
  - {label: GitHub, url: https://github.com/you/project}
```

With no buttons, the home page links to the first page of the docs tree.

`hero_command` is drawn beside the buttons with a button that copies it, such as the command that installs the product.

## The sky

Behind the headline a paper kite flies among clouds, its string tied down by the buttons. At night it glows under the moon and stars. It takes the accent color. Turn off `hero_art` for a plain sky.

## The product

`showcase_image` is drawn in a window under the headline, and `showcase_image2` in a smaller window over a corner of it, such as the product and what it makes. A note, `showcase_note` with `showcase_note_text` under it, is written beside the second window with an arrow to it. Each picture has a twin for a dark page, and a line, `showcase_alt` or `showcase_alt2`, that says what it shows. With only the first picture, it is drawn alone and wide; on a phone the first window shows the middle of its picture, larger.

`showcase_label` is the small heading in red over the section, `showcase_title` its title and `showcase_text` a sentence under it. The other sections of the home page take the same three, with their own names.

## Features

`features` are paper tags hung down the page on one string, each numbered on a seal, with a title, a sentence, and a link if it has one. A tag can carry a sample, drawn by the theme under its text:

| `sample` | What it draws | From |
| --- | --- | --- |
| `page` | The head of a page, as the studio shows it | `page_title`, `page_text`, and `page_chips` with an icon each |
| `code` | A change to a file: a line starting with `+` added, one with `-` removed | `code_title`, the file, and `code` |
| `tiles` | Tiles, two to a row, each a label with an icon | `tiles` |
| `pictures` | Two pictures laid over each other, with labels beside them | `picture`, `picture2`, their dark twins, and `pills` |

```yaml
features:
  - title: Configured in the studio
    text: Every setting is a form in Kite's studio.
    link: /settings-reference/
    sample: code
    code_title: kite.yaml
    code: |-
      - accent: "#3a66c4"
      + accent: "#0f766e"
        color_scheme: auto
```

## Pictures

`gallery` lays pictures like prints on a band of darker paper, two to a row, each with a caption, a note at the other end of it, and a link if it has one.

## News

`show_news` lists the three newest posts. Kite pages the home page by the news, so its second page lists older posts.

## Closing cards

`more` draws cards at the end of the home page, such as related projects: each a `title` and a `text`, a short `note` such as a status or a version, and a `link` with its own `link_label`. `note_quiet` draws the note in gray, for something not out yet. `more_title` and `more_text` go beside them.
