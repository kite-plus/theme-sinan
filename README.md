# Vane

Vane is a documentation theme for [Kite](https://github.com/kite-plus/kite),
drawn on paper in ink: a home page with a kite in its sky, documents in a tree
with their own order, news, and search, by day and by night. It is named
after the weather vane, which turns to show which way the wind blows: a docs
site is there to show the way, and Kite flies on the wind.

![Vane's home page, in the example site](screenshot.webp)

It is the theme [www.kite.plus](https://www.kite.plus) is built with, and it
was the second theme written against Kite's theme contract, which Kite froze
as `kite/v1` once a theme this different from the default one had been
written. Vane 1.0 is written to that contract.

Vane lives only in this repository. Kite ships just its default theme and
does not bundle this one.

## What it draws

Vane is drawn on warm paper in ink, with a faint grain and headings in a
serif. At night the paper turns to a dark sky. The accent color you choose
draws the kite, the seals that number the features, the underline of links
and the keyboard focus; buttons stay in ink.

- **A home page**: a badge for news and a headline under a sky where a paper
  kite flies, its string tied down by the buttons and a command a reader can
  copy; at night the kite glows under the moon and stars. Under it, two
  windows of the product with a note between them, the features as paper
  tags hung on one string, each with a small sample the theme draws, a band
  of pictures, the latest news and closing cards.
- **Docs** in the groups and the order you set, each page with the tree
  beside it, the time it takes to read, a table of contents, and links to the
  pages before and after it.
- **Code blocks** with a bar that names the language, such as Terminal or
  YAML, and a button that copies the code.
- **Search**: by title across the docs tree, from `/` or `Ctrl K`. With the
  official [Search](https://github.com/kite-plus/plugin-search) plugin on the
  site, the box in the header opens its search of the whole text instead.
- **News** from Kite's posts, with tags, categories and an RSS feed.
- **Day and night**: the button in the header steps through automatic (the
  reader's system), night and day, and the browser remembers the choice.
  The new scheme spreads from the button as a circle where the browser has
  view transitions, and switches at once where it has not or where the
  reader asks for less motion.

Every page works without a script, and nothing is loaded from a third party.
Headings use Noto Serif SC when the site loads it, as www.kite.plus does, and
the serifs of the reader's system otherwise.

## Using it

Drop the zip of a release on the upload tile under **Settings → Theme** in
Kite's studio, or unzip it into a site's `themes` folder and set `theme.name`
to `vane` in `kite.yaml`. Then list the docs in the docs tree, the way
[the example site's kite.yaml](example/kite.yaml) does. Every setting is
described in [the settings reference](example/content/pages/settings-reference.md).

The header draws the site's main menu, which the studio edits under
**Settings → Menus**; until the site has one, it shows the header links set
under Navigation in the theme's settings.

Vane 1.0 asks for Kite 0.1.4 or later, the release that brought site menus.

## Developing it

[`example/`](example) is a Kite site that uses the theme through a link,
`themes/vane` to the root of this repository, and that documents the theme
at the same time:

```sh
cd example
kite run
```

A change is ready when both of these pass:

```sh
kite theme verify .
(cd example && kite build --verify)
```

## Releasing

`scripts/package.sh` runs `kite theme pack`, which needs Kite 0.1.5 or
later, to pack `dist/vane-<version>.zip`: one folder named `vane` holding
`theme.yaml` and what the theme is made of, which the studio installs as it
is. Set `KITE` to use another kite binary than the one on `PATH`. Tag the
release and attach the zip.

## Design

The plan, with what Kite has to add for the rest of it, is in
[docs/design/README.md](docs/design/README.md).

## License

[Apache License 2.0](LICENSE).
