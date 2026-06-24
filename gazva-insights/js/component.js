/* ==========================================================================
   GAZVA INSIGHTS — component.js
   Shared navbar + footer markup, injected into every page.
   Keeping these in one place means editing the menu once updates every page.
   ========================================================================== */

(function () {
  "use strict";

  const NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "quran.html", label: "Quran" },
    { href: "fiqh.html", label: "Fiqh" },
    { href: "thareekh.html", label: "Thareekh" },
    { href: "general.html", label: "General" },
    { href: "kurippathukal.html", label: "Kurippathukal" },
    { href: "contact.html", label: "Contact" },
  ];

  const FOOTER_QUICKLINKS = [
    { href: "index.html", label: "Home" },
    { href: "quran.html", label: "Quran" },
    { href: "fiqh.html", label: "Fiqh" },
    { href: "thareekh.html", label: "Thareekh" },
    { href: "general.html", label: "General" },
    { href: "kurippathukal.html", label: "Kurippathukal" },
    { href: "contact.html", label: "Contact" },
    { href: "about.html", label: "About" },
  ];

  const GAZVA_WEBSITE_URL = "https://www.gazva.com";

  // Pages inside /pages/ (e.g. article templates) need a "../" prefix on every
  // site-relative link. We detect this from a data attribute on <body> so the
  // same component script works at any folder depth.
  function getBasePath() {
    return document.body.getAttribute("data-base-path") || "";
  }

const LOGO_SVG = `
  <img
    src="logo 40.png"
    alt="Gazva Insights Logo"
    width="40"
    height="40"
    style="border-radius:10px; object-fit:cover;"
  >
`;

  function getCurrentPage() {
    const path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function buildNavbar() {
    const current = getCurrentPage();
    const base = getBasePath();
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <nav class="navbar" aria-label="Primary">
        <a href="${base}index.html" class="navbar__brand" aria-label="Gazva Insights home">
          <span class="navbar__logo">${LOGO_SVG}</span>
          <span class="navbar__name">Gazva <span>Insights</span></span>
        </a>
        <ul class="navbar__links" id="navbarLinks">
          ${NAV_LINKS.map(
            (link) =>
              `<li><a href="${base}${link.href}" class="${link.href === current ? "is-active" : ""}" ${
                link.href === current ? 'aria-current="page"' : ""
              }>${link.label}</a></li>`
          ).join("")}
        </ul>
        <button class="navbar__toggle" id="navbarToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navbarLinks">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </nav>`;
    return header;
  }

 function buildFooter() {
  const base = getBasePath();
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer__top">

      <!-- Col 2: Brand -->
      <div class="footer__col footer__col--brand">
        <div class="footer__brand">
          <img src="${base}assets/logo.png" alt="Gazva Insights logo" class="footer__logo-img" />
          <div class="footer__brand-text">
            <span class="footer__brand-name">Gazva Insights</span>
            <span class="footer__brand-subline">Knowledge &amp; Reflection</span>
          </div>
        </div>
        <p class="footer__tagline">Sublime reflections on Quran, Fiqh, history, and the everyday questions readers bring to us.</p>
      
      </div>

      <!-- Col 3: About & Contact -->
      <div class="footer__col">
        <h3 class="footer__heading">About</h3>
        <ul class="footer__links">
          <li><a href="${base}about.html">About Us</a></li>
          <li><a href="${base}contact.html">Contact Us</a></li>
          <li><a href="${base}contact.html#contactForm">Ask a Question</a></li>
          <li><a href="${GAZVA_WEBSITE_URL}" target="_blank" rel="noopener">Gazva Media &#8599;</a></li>
        </ul>
      </div>

      <!-- Col 4: Follow Us -->
      <div class="footer__col">
        <h3 class="footer__heading">Follow Us</h3>
        <ul class="footer__links footer__links--social">
          <li>
              <div class="footer__socials">
            <div class="footer__socials">
          <a href="https://www.instagram.com/gazvafathimazahra/" class="footer__social-btn" aria-label="Instagram" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 1.97.24 2.43.41a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.17.46.35 1.26.41 2.43.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.24 1.97-.41 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.17-1.26.35-2.43.41-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-1.97-.24-2.43-.41a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.17-.46-.35-1.26-.41-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.24-1.97.41-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.17 1.26-.35 2.43-.41C9.28 1.33 9.68 1.32 12 1.32V2.2Zm0 1.8c-3.16 0-3.53 0-4.77.07-1.04.05-1.6.22-1.98.36-.5.2-.86.43-1.23.8-.37.37-.6.73-.8 1.23-.14.38-.31.94-.36 1.98C2.8 9.47 2.8 9.84 2.8 13s0 3.53.07 4.77c.05 1.04.22 1.6.36 1.98.2.5.43.86.8 1.23.37.37.73.6 1.23.8.38.14.94.31 1.98.36 1.24.06 1.61.07 4.77.07s3.53 0 4.77-.07c1.04-.05 1.6-.22 1.98-.36.5-.2.86-.43 1.23-.8.37-.37.6-.73.8-1.23.14-.38.31-.94.36-1.98.06-1.24.07-1.61.07-4.77s0-3.53-.07-4.77c-.05-1.04-.22-1.6-.36-1.98a3.1 3.1 0 0 0-.8-1.23 3.1 3.1 0 0 0-1.23-.8c-.38-.14-.94-.31-1.98-.36C15.53 3.8 15.16 3.8 12 3.8Zm0 4.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.4-2.25a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"/></svg>
          </a>
          <a href="https://facebook.com" class="footer__social-btn" aria-label="Facebook" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z"/></svg>
          </a>
          <a href="https://wa.me/919000000000" class="footer__social-btn" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.9-.4-1.8-1-2.6-1.9-.7-.8-1.2-1.6-1.5-2.2-.1-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.2-.5 0-.2 0-.4-.1-.5-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.1 2.9c.1.2 1.7 2.7 4.3 3.7 2.5 1 2.5.7 3 .6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Zm-5.5 6.9h-.1a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3a8.9 8.9 0 0 1-1.3-4.7c0-4.9 4-8.9 9-8.9 2.4 0 4.6.9 6.3 2.6a8.8 8.8 0 0 1 2.6 6.3c0 5-4 8.9-9.1 8.9Zm7.7-16.6A10.6 10.6 0 0 0 12 1.6c-5.9 0-10.7 4.7-10.7 10.6 0 1.9.5 3.7 1.4 5.2L1.6 22.4l5.2-1.4c1.5.8 3.2 1.3 5 1.3h.1c5.9 0 10.7-4.7 10.7-10.6 0-2.8-1.1-5.5-3.1-7.5Z"/></svg>
          </a>
        </div>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <span>&copy; <span id="footerYear">${new Date().getFullYear()}</span> Gazva Insights. All rights reserved.</span>
        <span>Powered by <a href="${GAZVA_WEBSITE_URL}" target="_blank" rel="noopener" style="color:#9FC1AC;">Gazva Media</a></span>
      </div>
    </div>`;

  return footer;
}

  function buildAskSidebar() {
    const wrap = document.createElement("aside");
    wrap.className = "ask-sidebar";
    wrap.setAttribute("aria-label", "Ask your question");
    wrap.innerHTML = `
      <h3 class="ask-sidebar__title">Ask your question</h3>
      <p class="ask-sidebar__desc">Have something on your mind about Quran, Fiqh, or history? Send it to our editorial team.</p>
      <form id="askQuestionForm" novalidate>
        <div class="form-field">
          <label for="ask-name">Name</label>
          <input id="ask-name" name="name" type="text" placeholder="Your name" required autocomplete="name" />
        </div>
        <div class="form-field">
          <label for="ask-email">Email</label>
          <input id="ask-email" name="email" type="email" placeholder="Your email address" required autocomplete="email" />
        </div>
        <div class="form-field">
          <label for="ask-subject">Subject</label>
          <textarea id="ask-subject" name="subject" placeholder="Topic of your question" required></textarea>
        </div>
        <div class="form-field">
        <label for="askq-category">Category</label>
        <select id="askq-category" name="category" required>
          <option value="">Select a category</option>
          <option value="Fiqh">Fiqh</option>
          <option value="Quran">Quran</option>
          <option value="Thareekh">Thareekh</option>
          <option value="General">General</option>
          <option value="Other">Other</option>
        </select>
      </div>
        <div class="form-field">
          <label for="ask-question">Your question</label>
          <textarea id="ask-question" name="question" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Send question</button>
        <div class="form-status" id="askQuestionStatus" role="status"></div>
      </form>`;
    return wrap;
  }

  
  function mountIncludes() {
    const headerSlot = document.getElementById("siteHeader");
    if (headerSlot) headerSlot.replaceWith(buildNavbar());

    const footerSlot = document.getElementById("siteFooter");
    if (footerSlot) footerSlot.replaceWith(buildFooter());

    document.querySelectorAll("#askSidebar").forEach((slot) => {
      slot.replaceWith(buildAskSidebar());
    });

    const yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function wireMobileMenu() {
    const toggle = document.getElementById("navbarToggle");
    const links = document.getElementById("navbarLinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  function wireShareButtons() {
    document.querySelectorAll("[data-share]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const platform = btn.getAttribute("data-share");
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        let shareUrl = "";
        if (platform === "whatsapp") {
          shareUrl = `https://wa.me/?text=${title}%20${url}`;
        } else if (platform === "facebook") {
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        }
        if (shareUrl) window.open(shareUrl, "_blank", "noopener,width=600,height=600");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    mountIncludes();
    wireMobileMenu();
    wireShareButtons();

    // The "Ask your question" sidebar form posts to Web3Forms, same as the contact form.
    if (window.GazvaForms && typeof window.GazvaForms.bindWeb3Form === "function") {
      window.GazvaForms.bindWeb3Form("askQuestionForm", "askQuestionStatus");
    }
  });
})();
