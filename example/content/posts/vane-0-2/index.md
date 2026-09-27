---
id: 01M3HQ2V6Z8KXJ4T9R1P5WNBDA
title: Vane 0.2, on paper
slug: vane-0-2
status: published
created_at: 2026-09-27T12:00:00Z
published_at: 2026-09-27T12:00:00Z
description: "Vane is drawn on paper in ink now, with a kite in the sky of its home page, and at night a kite that glows."
tags: [release]
---
Vane 0.2 draws every page on warm paper in ink, with headings in a serif. Night is a dark sky rather than an inverted page.

## The home page

The home page has more to say than a headline and a grid:

- **A kite in the sky** behind the headline, its string tied down by the buttons. At night it glows under the moon and stars. It takes the accent color, and `hero_art` turns it off.
- **A showcase**: two windows of the product, one over the other, with a note and an arrow between them.
- **Features as tags** hung on one string, each numbered on a seal, and each with a sample the theme draws: the head of a page, a change to a file, tiles, or two pictures.
- **A band of pictures**, like prints on a darker paper.
- **Closing cards** in place of the closing list.

## Upgrading

The settings of 0.1 keep working. A picture set under the headline with `hero_image` is shown as the showcase's one window until `showcase_image` takes its place. The accent's default is a slightly brighter blue, `#3a66c4`.

Serif headings use Noto Serif SC where the site loads it, and the serifs of the reader's system otherwise. Vane itself still loads nothing from a third party.
