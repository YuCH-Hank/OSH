(function () {
  function run() {
    if (!window.mermaid) return;
    mermaid.initialize({ startOnLoad: false });
    mermaid.run({ querySelector: ".mermaid" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
