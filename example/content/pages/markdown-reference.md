---
id: 01M3CSA3NSZSBS4BE399FGTHWD
title: Markdown reference
slug: markdown-reference
status: published
created_at: 2026-09-25T17:20:19Z
published_at: 2026-09-25T17:20:19Z
description: "Everything Kite's Markdown writes, as Sinan draws it."
updated_at: 2026-09-25T09:00:00Z
---
## Text

A paragraph with **bold**, *italic*, ~~struck~~ and `inline code`, and [a link](/introduction/). Footnotes are collected at the end of the page.[^1]

## Lists

- Docs in reading order
- A table of contents
  - beside the page on a wide screen
  - above it on a narrow one
- Light and dark

1. Create a site
2. Install the theme
3. Write

- [x] A home page
- [x] A docs tree
- [ ] A full-text search

## Code

```go
package main

import "fmt"

// Greet says hello to someone.
func Greet(name string) string {
	return fmt.Sprintf("Hello, %s", name)
}

func main() {
	fmt.Println(Greet("Sinan"))
}
```

```yaml
theme:
  name: sinan
  settings:
    accent: "#3d65bd"
    show_toc: true
```

```sh
kite build --verify
```

## Tables

| Page | Tree | Table of contents |
| --- | --- | --- |
| A doc | Beside it | With two headings or more |
| A post | None | With two headings or more |
| A wide page | None | None |

## Quotes

> A docs site is there to show the way.

## Definitions

Docs tree
: The groups and pages beside each doc, in reading order.

Table of contents
: The sections of the page being read.

## A rule

---

The end of the reference.

[^1]: Like this one.
