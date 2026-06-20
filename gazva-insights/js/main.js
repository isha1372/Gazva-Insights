/* ==========================================================================
   GAZVA INSIGHTS — main.js
   Page-specific behaviour: "Load more" pagination on category listing pages.
   ========================================================================== */

(function () {
  "use strict";

  const PAGE_SIZE = 4;

  function setupLoadMore() {
    const grid = document.querySelector("[data-load-more-grid]");
    const button = document.querySelector("[data-load-more-btn]");
    if (!grid || !button) return;

    const items = Array.from(grid.children);
    let visibleCount = 0;

    function reveal() {
      const next = items.slice(visibleCount, visibleCount + PAGE_SIZE);
      next.forEach((item) => item.removeAttribute("hidden"));
      visibleCount += next.length;

      if (visibleCount >= items.length) {
        button.setAttribute("hidden", "true");
      }
    }

    // Hide everything beyond the first page on load.
    items.forEach((item, index) => {
      if (index >= PAGE_SIZE) item.setAttribute("hidden", "true");
    });
    visibleCount = Math.min(PAGE_SIZE, items.length);
    if (items.length <= PAGE_SIZE) button.setAttribute("hidden", "true");

    button.addEventListener("click", reveal);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLoadMore();
  });
})();
