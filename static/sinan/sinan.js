/* Sinan, a documentation theme for Kite.
 *
 * Every page works without this script. It adds what only a script can:
 * switching light and dark, finding a page by its title, copying code, links
 * to headings, and marking the section being read. */
(function () {
  "use strict";

  var root = document.documentElement;
  var strings = document.body.dataset;

  // Light and dark. The choice is kept under the key the default theme uses.
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("kite-theme", next); } catch (e) {}
    });
  }

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

  // Copying code.
  if (navigator.clipboard) {
    document.querySelectorAll(".prose pre").forEach(function (pre) {
      var box = document.createElement("div");
      box.className = "code-block";
      pre.parentNode.insertBefore(box, pre);
      box.appendChild(pre);

      var button = document.createElement("button");
      button.type = "button";
      button.className = "copy";
      button.textContent = strings.copy || "Copy";
      var timer = 0;
      button.addEventListener("click", function () {
        var code = pre.querySelector("code") || pre;
        navigator.clipboard.writeText(code.textContent.replace(/\n$/, "")).then(function () {
          button.textContent = strings.copied || "Copied";
          button.classList.add("done");
          clearTimeout(timer);
          timer = setTimeout(function () {
            button.textContent = strings.copy || "Copy";
            button.classList.remove("done");
          }, 1600);
        });
      });
      box.appendChild(button);
    });
  }

  // The section being read, marked in the table of contents.
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
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

  // Finding a page by its title, among the pages of the docs tree and the
  // header links. Kite does not write a search index yet, so the text of the
  // pages is not searched.
  var openers = document.querySelectorAll("[data-search]");
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
