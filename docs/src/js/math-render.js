(function () {
  function renderMath() {
    if (typeof renderMathInElement === "undefined") return;

    const scope = document.querySelector(".md-content");
    if (!scope) return;

    renderMathInElement(scope, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }

  // 初次載入
  document.addEventListener("DOMContentLoaded", renderMath);

  // Material instant navigation：每次換頁都要重跑
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(() => {
      renderMath();
    });
  }
})();
