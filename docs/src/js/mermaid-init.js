(function () {
  function renderMermaid() {
    if (typeof mermaid === "undefined") return;

    // 每次換頁都重新跑（不要依賴 startOnLoad）
    mermaid.initialize({ startOnLoad: false });

    const nodes = document.querySelectorAll(".md-content .mermaid");
    if (!nodes.length) return;

    // Mermaid v10+：用 run 針對 node 渲染
    mermaid.run({ nodes });
  }

  document.addEventListener("DOMContentLoaded", renderMermaid);

  // Material instant navigation：每次換頁都要重跑
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(() => {
      renderMermaid();
    });
  }
})();
