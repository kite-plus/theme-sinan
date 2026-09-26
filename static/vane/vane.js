/* Vane, a documentation theme for Kite.
 *
 * Every page works without this script. It adds what only a script can:
 * finding a page by its title, copying code, links to headings, and marking
 * the section being read. Light and dark live in theme-init.html, which has
 * to run before the first paint. */
(function () {
  "use strict";

  var root = document.documentElement;
  var strings = document.body.dataset;
  var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

  // The drawer of a narrow screen opens without a script; this closes it.
  var drawer = document.getElementById("nav-toggle");
  var sidebar = document.getElementById("sidebar");
  if (drawer && sidebar) {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && drawer.checked) drawer.checked = false;
    });
    sidebar.addEventListener("click", function (event) {
      if (event.target.closest("a")) drawer.checked = false;
    });
    window.matchMedia("(min-width: 960px)").addEventListener("change", function (event) {
      if (event.matches) drawer.checked = false;
    });
  }

  // A long tree opens scrolled to the page being read.
  var current = document.querySelector(".tree a[aria-current='page']");
  if (current && sidebar && sidebar.scrollHeight > sidebar.clientHeight) {
    var top = current.getBoundingClientRect().top - sidebar.getBoundingClientRect().top;
    if (top > sidebar.clientHeight * 0.6) sidebar.scrollTop = top - sidebar.clientHeight / 3;
  }

  // Links to headings.
  document.querySelectorAll(".prose h2[id], .prose h3[id], .prose h4[id]").forEach(function (heading) {
    var link = document.createElement("a");
    link.className = "anchor";
    link.href = "#" + heading.id;
    link.setAttribute("aria-label", strings.anchor || "Link to this section");
    link.textContent = "#";
    heading.insertBefore(link, heading.firstChild);
  });

  // Copying code: a button that copies the text it is given, and says so.
  var ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  var COPY = ICON + '<rect class="copy-icon" x="9" y="9" width="11" height="11" rx="2"/><path class="copy-icon" d="M5 15V6a2 2 0 0 1 2-2h9"/><path class="check" d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  var copyButton = function (text) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy";
    button.title = strings.copy || "Copy";
    button.setAttribute("aria-label", strings.copy || "Copy");
    button.innerHTML = COPY;
    var timer = 0;
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(text()).then(function () {
        button.classList.add("done");
        button.title = strings.copied || "Copied";
        button.setAttribute("aria-label", strings.copied || "Copied");
        clearTimeout(timer);
        timer = setTimeout(function () {
          button.classList.remove("done");
          button.title = strings.copy || "Copy";
          button.setAttribute("aria-label", strings.copy || "Copy");
        }, 1600);
      });
    });
    return button;
  };

  // What a code block's bar calls its language. Shells share one name.
  var SHELLS = /^(bash|sh|shell|zsh|fish|console|shell-session|shellsession|powershell|ps1|pwsh|cmd|bat|batch)$/;
  var NAMES = {
    yaml: "YAML", yml: "YAML", json: "JSON", jsonc: "JSON", toml: "TOML", ini: "INI", xml: "XML",
    html: "HTML", css: "CSS", scss: "SCSS", js: "JavaScript", javascript: "JavaScript", mjs: "JavaScript",
    ts: "TypeScript", typescript: "TypeScript", jsx: "JSX", tsx: "TSX", vue: "Vue", svelte: "Svelte",
    go: "Go", "go-html-template": "Go template", "go-text-template": "Go template", gotmpl: "Go template",
    rust: "Rust", rs: "Rust", python: "Python", py: "Python", ruby: "Ruby", rb: "Ruby", php: "PHP",
    java: "Java", kotlin: "Kotlin", swift: "Swift", c: "C", cpp: "C++", "c++": "C++", cs: "C#", csharp: "C#",
    sql: "SQL", graphql: "GraphQL", diff: "Diff", dockerfile: "Dockerfile", docker: "Dockerfile",
    makefile: "Makefile", make: "Makefile", nginx: "Nginx", md: "Markdown", markdown: "Markdown", lua: "Lua"
  };
  var languageOf = function (pre) {
    var lang = pre.getAttribute("data-lang");
    if (!lang) {
      var code = pre.querySelector("code");
      var match = code && /(?:^|\s)language-(\S+)/.exec(code.className);
      lang = match ? match[1] : "";
    }
    lang = lang.toLowerCase();
    if (!lang || /^(text|txt|plain|plaintext|none)$/.test(lang)) return "";
    if (SHELLS.test(lang)) return strings.terminal || "Terminal";
    return NAMES[lang] || lang;
  };

  var canCopy = !!(navigator.clipboard && window.isSecureContext !== false);
  document.querySelectorAll(".prose pre").forEach(function (pre) {
    var label = languageOf(pre);
    if (!label && !canCopy) return;
    var box = document.createElement("div");
    box.className = "code-block";
    pre.parentNode.insertBefore(box, pre);
    var bar = null;
    if (label) {
      box.classList.add("has-bar");
      bar = document.createElement("div");
      bar.className = "code-bar";
      var name = document.createElement("span");
      name.textContent = label;
      bar.appendChild(name);
      box.appendChild(bar);
    }
    box.appendChild(pre);
    if (canCopy) {
      var button = copyButton(function () {
        var code = pre.querySelector("code") || pre;
        return code.textContent.replace(/\n$/, "");
      });
      (bar || box).appendChild(button);
    }
  });

  // The command on the home page, ready to copy.
  if (canCopy) {
    document.querySelectorAll(".command code").forEach(function (code) {
      code.parentNode.appendChild(copyButton(function () { return code.textContent.trim(); }));
    });
  }

  // The section being read, marked in the table of contents.
  var tocLinks = document.querySelectorAll(".toc li a[href^='#']");
  if (tocLinks.length) {
    var linkFor = {};
    var headings = [];
    tocLinks.forEach(function (link) {
      var id = decodeURIComponent(link.hash.slice(1));
      var heading = document.getElementById(id);
      if (heading) {
        linkFor[id] = link;
        headings.push(heading);
      }
    });
    var marked = null;
    var mark = function () {
      var line = parseFloat(getComputedStyle(root).scrollPaddingTop) || 80;
      var reading = null;
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top - line - 1 > 0) break;
        reading = headings[i];
      }
      var atEnd = window.innerHeight + window.scrollY >= root.scrollHeight - 2;
      if (atEnd && reading) reading = headings[headings.length - 1];
      var link = reading ? linkFor[reading.id] : null;
      if (link === marked) return;
      if (marked) marked.classList.remove("active");
      if (link) link.classList.add("active");
      marked = link;
    };
    var pending = false;
    window.addEventListener("scroll", function () {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(function () {
        pending = false;
        mark();
      });
    }, { passive: true });
    mark();
  }

  var openers = document.querySelectorAll("[data-search]");
  openers.forEach(function (button) {
    var kbd = button.querySelector("kbd");
    if (kbd) kbd.textContent = mac ? "⌘K" : "Ctrl K";
  });

  // With the official search plugin on the site, the search box opens its
  // search of the whole text, and the plugin keeps the shortcuts.
  if (window.KiteSearch) {
    openers.forEach(function (button) {
      button.setAttribute("data-kite-search", "");
      button.hidden = false;
    });
    return;
  }

  // Otherwise, finding a page by its title, among the pages of the docs tree
  // and the header links.
  var entries = [];
  var seen = {};
  var add = function (link, group) {
    var href = link.getAttribute("href");
    var title = link.textContent.trim();
    if (!href || !title || seen[href]) return;
    seen[href] = true;
    entries.push({ href: href, title: title, group: group, external: link.target === "_blank" });
  };
  document.querySelectorAll(".tree .group").forEach(function (group) {
    var title = group.querySelector(".group-title");
    group.querySelectorAll("a").forEach(function (link) {
      add(link, title ? title.textContent.trim() : "");
    });
  });
  document.querySelectorAll(".drawer-nav a").forEach(function (link) { add(link, ""); });

  if (!openers.length || !entries.length || typeof HTMLDialogElement !== "function") return;

  var dialog = document.createElement("dialog");
  dialog.className = "search";
  dialog.setAttribute("aria-label", strings.searchLabel || "Search");
  var field = document.createElement("div");
  field.className = "search-field";
  var icon = openers[0].querySelector("svg");
  if (icon) field.appendChild(icon.cloneNode(true));
  var input = document.createElement("input");
  input.type = "search";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = strings.searchPlaceholder || "";
  input.setAttribute("aria-label", strings.searchLabel || "Search");
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-expanded", "true");
  input.setAttribute("aria-controls", "search-results");
  input.setAttribute("aria-autocomplete", "list");
  field.appendChild(input);
  var list = document.createElement("ul");
  list.className = "search-results";
  list.id = "search-results";
  list.setAttribute("role", "listbox");
  dialog.appendChild(field);
  dialog.appendChild(list);
  document.body.appendChild(dialog);

  var shown = [];
  var chosen = 0;

  var highlight = function (text, query) {
    var span = document.createElement("span");
    var at = query ? text.toLowerCase().indexOf(query) : -1;
    if (at < 0) {
      span.textContent = text;
      return span;
    }
    span.appendChild(document.createTextNode(text.slice(0, at)));
    var hit = document.createElement("mark");
    hit.textContent = text.slice(at, at + query.length);
    span.appendChild(hit);
    span.appendChild(document.createTextNode(text.slice(at + query.length)));
    return span;
  };

  var choose = function (index) {
    if (!shown.length) return;
    chosen = (index + shown.length) % shown.length;
    list.querySelectorAll("[role='option']").forEach(function (option, i) {
      option.setAttribute("aria-selected", i === chosen ? "true" : "false");
      if (i === chosen) {
        input.setAttribute("aria-activedescendant", option.id);
        option.scrollIntoView({ block: "nearest" });
      }
    });
  };

  var find = function () {
    var query = input.value.trim().toLowerCase();
    var ranked = [];
    entries.forEach(function (entry, order) {
      var title = entry.title.toLowerCase();
      var rank;
      if (!query) rank = 0;
      else if (title.indexOf(query) === 0) rank = 0;
      else if (title.indexOf(query) > 0) rank = 1;
      else if (entry.group.toLowerCase().indexOf(query) >= 0) rank = 2;
      else return;
      ranked.push({ entry: entry, rank: rank, order: order });
    });
    ranked.sort(function (a, b) { return a.rank - b.rank || a.order - b.order; });
    shown = ranked.slice(0, 50).map(function (item) { return item.entry; });

    list.textContent = "";
    input.removeAttribute("aria-activedescendant");
    if (!shown.length) {
      var empty = document.createElement("li");
      empty.className = "search-empty";
      empty.textContent = strings.searchEmpty || "";
      list.appendChild(empty);
      return;
    }
    shown.forEach(function (entry, i) {
      var option = document.createElement("li");
      option.id = "search-result-" + i;
      option.setAttribute("role", "option");
      var link = document.createElement("a");
      link.href = entry.href;
      link.tabIndex = -1;
      if (entry.external) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      link.appendChild(highlight(entry.title, query));
      if (entry.group) {
        var group = document.createElement("span");
        group.className = "result-group";
        group.textContent = entry.group;
        link.appendChild(group);
      }
      option.appendChild(link);
      option.addEventListener("mousemove", function () {
        if (chosen !== i) choose(i);
      });
      list.appendChild(option);
    });
    choose(0);
  };

  var open = function () {
    if (dialog.open) return;
    input.value = "";
    find();
    dialog.showModal();
    input.focus();
  };

  input.addEventListener("input", find);
  input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      choose(chosen + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      choose(chosen - 1);
    } else if (event.key === "Enter" && shown.length) {
      event.preventDefault();
      var link = list.querySelectorAll("[role='option'] a")[chosen];
      if (link) link.click();
    }
  });
  list.addEventListener("click", function (event) {
    if (event.target.closest("a")) dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  openers.forEach(function (button) {
    button.hidden = false;
    button.addEventListener("click", open);
  });
  document.addEventListener("keydown", function (event) {
    var target = event.target;
    var typing = target instanceof HTMLElement &&
      (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
    var slash = event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey;
    var shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (slash || shortcut) {
      event.preventDefault();
      open();
    }
  });
})();
