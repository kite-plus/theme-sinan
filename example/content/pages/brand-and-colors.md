---
id: 01M3CSA3J6VR0WRH1645XRZQ4R
title: Brand and colors
slug: brand-and-colors
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "A logo, a site icon, an accent color, day or night, and the paper."
updated_at: 2026-09-27T12:00:00Z
---
## Logo and title

`logo` is drawn before the site title in the header and the footer. An SVG, or a picture about 64 pixels tall, suits it best. `logo_dark` takes its place on a dark page, for a logo drawn in a color that would sink into the night. Turn off `show_title` when the logo already spells the name.

## Site icon

`favicon` is shown in browser tabs and bookmarks. A square picture of at least 64 pixels suits it best.

## Subtitle and share picture

`tagline` follows the site's name in the title of the home page, which browser tabs, search results and shared links show: `Vane · A documentation theme for Kite`. Other pages are titled with their own name and the site's.

`share_image` is the picture a link to the site shows in a chat or on a social network, 1200 by 630 pixels. A post with a `cover` shows its cover instead. Every page also names its canonical address and describes itself to those apps with Open Graph tags.

## Accent color

Vane is drawn in ink on paper, and `accent` is its one color: the kite in the sky of the home page, the seals the features are numbered with, the underline of links, the ring around whatever the keyboard is on, and the matches of a search. Buttons stay in ink, so any color suits. At night the theme lightens the accent by itself so that it stays readable, and where the browser can, it draws the kite's three panels and its glow from the same color.

| Color | Value |
| --- | --- |
| Kite blue | `#3a66c4` |
| Teal | `#0f766e` |
| Violet | `#6d4fc2` |
| Rust | `#b4530e` |

## Day or night

`color_scheme` sets what a reader sees first: `auto` follows their system, and `light` or `dark` holds one. Either way the button in the header steps through automatic, night and day, and the reader's choice is kept in their browser.

## Paper

`texture` lays a faint grain over the page, like the fibers of paper. Turn it off for a plain page of the same color.
