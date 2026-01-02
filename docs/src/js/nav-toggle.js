// Enable collapsible navigation and table-of-contents lists.
(function () {
  function makeCollapsible(rootSelector) {
    const roots = document.querySelectorAll(rootSelector);
    roots.forEach((root) => {
      root.querySelectorAll("li").forEach((li) => {
        const sub = li.querySelector(":scope > ul");
        if (!sub) return;
        // Skip if already initialized
        if (li.dataset.tocInitialized) return;
        li.dataset.tocInitialized = "true";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "toc-toggle";
        btn.setAttribute("aria-label", "切換收合");
        btn.textContent = "▾";
        btn.addEventListener("click", () => {
          const isCollapsed = li.classList.toggle("toc-collapsed");
          btn.textContent = isCollapsed ? "▸" : "▾";
        });
        li.insertBefore(btn, li.firstChild);
      });
    });
  }

  function expandAll() {
    document.querySelectorAll(".toc-collapsed").forEach((li) => {
      li.classList.remove("toc-collapsed");
      const btn = li.querySelector(":scope > .toc-toggle");
      if (btn) btn.textContent = "▾";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    makeCollapsible("#toc > ul"); // per-page TOC
    makeCollapsible(".bs-sidenav"); // sidebar nav (bootswatch layout)
    makeCollapsible("nav ul.nav"); // fallback for top-nav dropdown
    expandAll();
  });
})();
