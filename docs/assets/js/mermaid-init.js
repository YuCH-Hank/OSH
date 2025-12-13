(function () {
  function renderMermaid() {
    if (typeof mermaid === "undefined") return;

    // 不用 startOnLoad，改成我們手動在每次換頁時跑
    mermaid.initialize({ startOnLoad: false });

    // 只對目前頁面內容跑
    const nodes = document.querySelectorAll(".md-content .mermaid");
    if (!nodes.length) return;

    // Mermaid v10+ 建議用 run
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
