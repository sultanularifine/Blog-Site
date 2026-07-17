/* =========================================================
   script.js
========================================================= */

"use strict";

/* =========================================================
   ARTICLE DATA
========================================================= */

const POSTS = [
  {
    id: 1,
    title: "Future of Artificial Intelligence in Modern Web Development",
    category: "AI",
    image: "https://picsum.photos/800/520?random=301",
    excerpt:
      "How AI supports coding, testing, research and responsible development workflows.",
    date: "2026-07-18",
    views: 18400,
    comments: 24,
    read: "8 min"
  },
  {
    id: 2,
    title: "Laravel Architecture for Maintainable Applications",
    category: "Development",
    image: "https://picsum.photos/800/520?random=302",
    excerpt:
      "Organize services, actions, validation and domain logic without unnecessary complexity.",
    date: "2026-07-17",
    views: 15200,
    comments: 18,
    read: "9 min"
  },
  {
    id: 3,
    title: "A Practical Technical SEO Audit Workflow",
    category: "SEO",
    image: "https://picsum.photos/800/520?random=303",
    excerpt:
      "Review crawling, indexing, performance and content issues in a useful order.",
    date: "2026-07-16",
    views: 22100,
    comments: 31,
    read: "10 min"
  },
  {
    id: 4,
    title: "Security Habits Every Web Team Should Adopt",
    category: "Security",
    image: "https://picsum.photos/800/520?random=304",
    excerpt:
      "Reduce common risks through access control, updates, backups and code review.",
    date: "2026-07-15",
    views: 12600,
    comments: 12,
    read: "7 min"
  },
  {
    id: 5,
    title: "How Generative AI Improves Content Research",
    category: "AI",
    image: "https://picsum.photos/800/520?random=305",
    excerpt:
      "Use structured prompts to organize research without sacrificing accuracy.",
    date: "2026-07-14",
    views: 19600,
    comments: 27,
    read: "6 min"
  },
  {
    id: 6,
    title: "Build an Accessible Navigation Menu",
    category: "Development",
    image: "https://picsum.photos/800/520?random=306",
    excerpt:
      "Create keyboard-friendly navigation with responsive behavior and clear focus states.",
    date: "2026-07-13",
    views: 9800,
    comments: 10,
    read: "8 min"
  },
  {
    id: 7,
    title: "Core Web Vitals: What Actually Matters",
    category: "SEO",
    image: "https://picsum.photos/800/520?random=307",
    excerpt:
      "Understand loading, responsiveness and visual stability through practical examples.",
    date: "2026-07-12",
    views: 17300,
    comments: 22,
    read: "9 min"
  },
  {
    id: 8,
    title: "Protecting API Keys in Frontend Projects",
    category: "Security",
    image: "https://picsum.photos/800/520?random=308",
    excerpt:
      "Learn why public client code cannot safely hold secrets and what to do instead.",
    date: "2026-07-11",
    views: 14400,
    comments: 16,
    read: "7 min"
  },
  {
    id: 9,
    title: "Designing Better AI Prompts for Developers",
    category: "AI",
    image: "https://picsum.photos/800/520?random=309",
    excerpt:
      "Provide context, constraints and examples to get more useful technical answers.",
    date: "2026-07-10",
    views: 20500,
    comments: 29,
    read: "6 min"
  },
  {
    id: 10,
    title: "Modern CSS Layout Without a Framework",
    category: "Development",
    image: "https://picsum.photos/800/520?random=310",
    excerpt:
      "Use Grid, Flexbox and modern CSS functions to build responsive interfaces.",
    date: "2026-07-09",
    views: 11700,
    comments: 14,
    read: "8 min"
  },
  {
    id: 11,
    title: "Internal Linking for Large Content Websites",
    category: "SEO",
    image: "https://picsum.photos/800/520?random=311",
    excerpt:
      "Help readers and search engines discover related pages with a scalable strategy.",
    date: "2026-07-08",
    views: 16100,
    comments: 20,
    read: "7 min"
  },
  {
    id: 12,
    title: "A Simple Incident Response Checklist",
    category: "Security",
    image: "https://picsum.photos/800/520?random=312",
    excerpt:
      "Prepare your team to contain, investigate and communicate during an incident.",
    date: "2026-07-07",
    views: 8900,
    comments: 8,
    read: "5 min"
  },
  {
    id: 13,
    title: "How Small Businesses Can Use AI Responsibly",
    category: "Business",
    image: "https://picsum.photos/800/520?random=313",
    excerpt:
      "Practical ways small teams can save time without compromising customer trust.",
    date: "2026-07-06",
    views: 13500,
    comments: 17,
    read: "7 min"
  },
  {
    id: 14,
    title: "Healthy Work Habits for Remote Developers",
    category: "Health",
    image: "https://picsum.photos/800/520?random=314",
    excerpt:
      "Reduce fatigue and improve focus with simple movement and workspace habits.",
    date: "2026-07-05",
    views: 10800,
    comments: 13,
    read: "6 min"
  },
  {
    id: 15,
    title: "Content Strategy for a New Business Website",
    category: "Business",
    image: "https://picsum.photos/800/520?random=315",
    excerpt:
      "Plan service pages, supporting articles and calls to action before publishing.",
    date: "2026-07-04",
    views: 12800,
    comments: 11,
    read: "8 min"
  }
];

const $ = (selector, scope = document) => scope.querySelector(selector);

const $$ = (selector, scope = document) => [
  ...scope.querySelectorAll(selector)
];

/* =========================================================
   SHARED HEADER AND FOOTER
========================================================= */

function renderHeader() {
  const target = $("#siteHeader");

  if (!target) {
    return;
  }

  const page = document.body.dataset.page || "";

  target.innerHTML = `
    <header class="site-header">

      <div class="topbar">
        <div class="container topbar-inner">

          <a href="mailto:contact@techblog.com">
            <i class="fa-regular fa-envelope"></i>
            contact@techblog.com
          </a>

          <div class="topbar-socials">
            <a href="#" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="Twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="#" aria-label="YouTube">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>

        </div>
      </div>

      <div class="main-header">
        <div class="container header-inner">

          <a class="logo" href="index.html" aria-label="TechBlog home">
            <span class="logo-mark">T</span>

            <span class="logo-text">
              Tech<span>Blog</span>
            </span>
          </a>

          <form class="header-search site-search-form" role="search">

            <label class="sr-only" for="headerSearchInput">
              Search articles
            </label>

            <input
              id="headerSearchInput"
              name="q"
              type="search"
              placeholder="Search articles..."
            >

            <button type="submit" aria-label="Search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>

          </form>

          <div class="header-actions">

            <button
              id="themeToggle"
              class="icon-button"
              type="button"
              aria-label="Toggle dark mode"
            >
              <i class="fa-regular fa-moon"></i>
            </button>

            <a
              class="button button-outline desktop-only"
              href="contact.html"
            >
              Contact
            </a>

            <button
              id="menuToggle"
              class="menu-toggle"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <i class="fa-solid fa-bars"></i>
            </button>

          </div>

        </div>
      </div>

      <nav id="mainNav" class="main-nav" aria-label="Primary navigation">
        <div class="container nav-inner">

          <a
            href="index.html"
            class="${page === "home" ? "active" : ""}"
          >
            Home
          </a>

          <a
            href="category.html?category=Development"
            class="${page === "category" ? "active" : ""}"
          >
            Technology
          </a>

          <a href="category.html?category=Business">
            Business
          </a>

          <a href="category.html?category=SEO">
            SEO
          </a>

          <a href="category.html?category=AI">
            AI
          </a>

          <a
            href="about.html"
            class="${page === "about" ? "active" : ""}"
          >
            About
          </a>

          <a
            href="contact.html"
            class="${page === "contact" ? "active" : ""}"
          >
            Contact
          </a>

          <a
            href="search.html"
            class="${page === "search" ? "active" : ""}"
          >
            Search
          </a>

        </div>
      </nav>

    </header>
  `;
}

function renderFooter() {
  const target = $("#siteFooter");

  if (!target) {
    return;
  }

  target.innerHTML = `
    <footer class="site-footer">

      <div class="container footer-grid">

        <div class="footer-brand">

          <a class="logo footer-logo" href="index.html">
            <span class="logo-mark">T</span>

            <span class="logo-text">
              Tech<span>Blog</span>
            </span>
          </a>

          <p>
            Practical articles about technology, AI, SEO,
            development, business and digital growth.
          </p>

          <div class="footer-socials">

            <a href="#" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="Twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="#" aria-label="YouTube">
              <i class="fa-brands fa-youtube"></i>
            </a>

          </div>

        </div>

        <div class="footer-column">

          <h3>Explore</h3>

          <a href="index.html">Home</a>
          <a href="category.html">Categories</a>
          <a href="search.html">Search</a>
          <a href="single-blog.html">Featured Article</a>

        </div>

        <div class="footer-column">

          <h3>Company</h3>

          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="404.html">404 Page</a>

        </div>

        <div class="footer-column">

          <h3>Newsletter</h3>

          <p>
            Receive one useful email every week.
          </p>

          <form class="newsletter-form footer-newsletter">

            <input
              type="email"
              required
              placeholder="Email address"
            >

            <button type="submit" aria-label="Subscribe">
              <i class="fa-regular fa-paper-plane"></i>
            </button>

          </form>

        </div>

      </div>

      <div class="container footer-bottom">

        <p>
          © <span id="currentYear"></span>
          TechBlog. All rights reserved.
        </p>

        <div class="footer-bottom-links">
          <a href="privacy-policy.html">Privacy</a>
          <a href="contact.html">Contact</a>
        </div>

      </div>

    </footer>
  `;
}

/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${dateString}T00:00:00`));
}

function getBadgeClass(category) {
  const classes = {
    AI: "badge-red",
    SEO: "badge-purple",
    Security: "badge-green",
    Health: "badge-orange",
    Business: "badge-blue",
    Development: "badge-blue"
  };

  return classes[category] || "badge-blue";
}

function showToast(message) {
  const toast = $("#toast");

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* =========================================================
   THEME
========================================================= */

function initTheme() {
  const root = document.documentElement;
  const button = $("#themeToggle");

  const savedTheme = localStorage.getItem("techblog-theme");

  const preferredTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  root.dataset.theme = savedTheme || preferredTheme;

  function updateIcon() {
    if (!button) {
      return;
    }

    const isDark = root.dataset.theme === "dark";
    const icon = $("i", button);

    if (icon) {
      icon.className = isDark
        ? "fa-regular fa-sun"
        : "fa-regular fa-moon";
    }

    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  updateIcon();

  button?.addEventListener("click", () => {
    root.dataset.theme =
      root.dataset.theme === "dark" ? "light" : "dark";

    localStorage.setItem("techblog-theme", root.dataset.theme);

    updateIcon();
  });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {
  const toggle = $("#menuToggle");
  const navigation = $("#mainNav");

  toggle?.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(open));

    const icon = $("i", toggle);

    if (icon) {
      icon.className = open
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }

    document.body.classList.toggle("no-scroll", open);
  });

  $$("#mainNav a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const navigation = $("#mainNav");
  const toggle = $("#menuToggle");

  navigation?.classList.remove("open");
  document.body.classList.remove("no-scroll");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");

    const icon = $("i", toggle);

    if (icon) {
      icon.className = "fa-solid fa-bars";
    }
  }
}

/* =========================================================
   SEARCH REDIRECT
========================================================= */

function initGlobalSearch() {
  $$(".site-search-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const input = $('input[name="q"]', form);
      const value = input?.value.trim() || "";

      window.location.href =
        `search.html?q=${encodeURIComponent(value)}`;
    });
  });
}

/* =========================================================
   NEWSLETTER
========================================================= */

function initNewsletterForms() {
  $$(".newsletter-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      form.reset();
      showToast("Thanks for subscribing!");
    });
  });
}

/* =========================================================
   CATEGORY PAGE
========================================================= */

const CATEGORY_STATE = {
  page: 1,
  perPage: 6,
  category: "all"
};

function createPostCard(post) {
  return `
    <article class="post-card">

      <a class="post-card-image" href="single-blog.html?id=${post.id}">
        <img
          src="${post.image}"
          alt="${escapeHtml(post.title)}"
          loading="lazy"
        >
      </a>

      <div class="post-card-body">

        <span class="badge ${getBadgeClass(post.category)}">
          ${escapeHtml(post.category)}
        </span>

        <h3>
          <a href="single-blog.html?id=${post.id}">
            ${escapeHtml(post.title)}
          </a>
        </h3>

        <p>
          ${escapeHtml(post.excerpt)}
        </p>

        <div class="card-meta">

          <span>
            ${formatDate(post.date)}
          </span>

          <span>
            <i class="fa-regular fa-comment"></i>
            ${post.comments}
          </span>

        </div>

      </div>

    </article>
  `;
}

function renderCategoryPage() {
  const grid = $("#categoryGrid");
  const pagination = $("#categoryPagination");
  const resultCount = $("#categoryResultCount");

  if (!grid || !pagination) {
    return;
  }

  const filtered =
    CATEGORY_STATE.category === "all"
      ? POSTS
      : POSTS.filter(post => post.category === CATEGORY_STATE.category);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / CATEGORY_STATE.perPage)
  );

  CATEGORY_STATE.page = Math.min(CATEGORY_STATE.page, totalPages);

  const start = (CATEGORY_STATE.page - 1) * CATEGORY_STATE.perPage;
  const visiblePosts = filtered.slice(
    start,
    start + CATEGORY_STATE.perPage
  );

  grid.innerHTML = visiblePosts.map(createPostCard).join("");

  if (resultCount) {
    resultCount.textContent =
      `Showing ${filtered.length ? start + 1 : 0}–` +
      `${Math.min(start + CATEGORY_STATE.perPage, filtered.length)} ` +
      `of ${filtered.length} articles`;
  }

  const buttons = [];

  buttons.push(`
    <button
      type="button"
      data-page="${CATEGORY_STATE.page - 1}"
      ${CATEGORY_STATE.page === 1 ? "disabled" : ""}
      aria-label="Previous page"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `);

  for (let page = 1; page <= totalPages; page += 1) {
    buttons.push(`
      <button
        type="button"
        data-page="${page}"
        class="${page === CATEGORY_STATE.page ? "active" : ""}"
      >
        ${page}
      </button>
    `);
  }

  buttons.push(`
    <button
      type="button"
      data-page="${CATEGORY_STATE.page + 1}"
      ${CATEGORY_STATE.page === totalPages ? "disabled" : ""}
      aria-label="Next page"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `);

  pagination.innerHTML = buttons.join("");

  $$("[data-page]", pagination).forEach(button => {
    button.addEventListener("click", () => {
      if (button.disabled) {
        return;
      }

      CATEGORY_STATE.page = Number(button.dataset.page);
      renderCategoryPage();

      grid.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function initCategoryPage() {
  const grid = $("#categoryGrid");

  if (!grid) {
    return;
  }

  const filter = $("#categoryFilter");
  const parameters = new URLSearchParams(window.location.search);
  const queryCategory = parameters.get("category");

  if (
    queryCategory &&
    POSTS.some(post => post.category === queryCategory)
  ) {
    CATEGORY_STATE.category = queryCategory;

    if (filter) {
      filter.value = queryCategory;
    }
  }

  filter?.addEventListener("change", event => {
    CATEGORY_STATE.category = event.target.value;
    CATEGORY_STATE.page = 1;

    renderCategoryPage();
  });

  renderCategoryPage();
}

/* =========================================================
   SEARCH PAGE
========================================================= */

const SEARCH_STATE = {
  query: "",
  sort: "newest",
  category: "all"
};

function createSearchResult(post) {
  return `
    <article class="search-result-card">

      <a href="single-blog.html?id=${post.id}">
        <img
          src="${post.image}"
          alt="${escapeHtml(post.title)}"
          loading="lazy"
        >
      </a>

      <div class="search-result-body">

        <span class="badge ${getBadgeClass(post.category)}">
          ${escapeHtml(post.category)}
        </span>

        <h3>
          <a href="single-blog.html?id=${post.id}">
            ${escapeHtml(post.title)}
          </a>
        </h3>

        <p>
          ${escapeHtml(post.excerpt)}
        </p>

        <div class="post-meta">

          <span>
            <i class="fa-regular fa-calendar"></i>
            ${formatDate(post.date)}
          </span>

          <span>
            <i class="fa-regular fa-clock"></i>
            ${post.read}
          </span>

          <span>
            <i class="fa-regular fa-eye"></i>
            ${post.views.toLocaleString()}
          </span>

          <span>
            <i class="fa-regular fa-comment"></i>
            ${post.comments}
          </span>

        </div>

      </div>

    </article>
  `;
}

function renderSearchPage() {
  const results = $("#searchResults");
  const emptyState = $("#emptySearch");
  const heading = $("#searchHeading");
  const count = $("#searchCount");

  if (!results || !emptyState) {
    return;
  }

  const query = SEARCH_STATE.query.trim().toLowerCase();

  let filtered = POSTS.filter(post => {
    const searchable =
      `${post.title} ${post.category} ${post.excerpt}`.toLowerCase();

    const matchesQuery = !query || searchable.includes(query);

    const matchesCategory =
      SEARCH_STATE.category === "all" ||
      post.category === SEARCH_STATE.category;

    return matchesQuery && matchesCategory;
  });

  filtered = [...filtered].sort((a, b) => {
    if (SEARCH_STATE.sort === "popular") {
      return b.views - a.views;
    }

    if (SEARCH_STATE.sort === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }

    return new Date(b.date) - new Date(a.date);
  });

  if (heading) {
    heading.textContent = SEARCH_STATE.query
      ? `Results for “${SEARCH_STATE.query}”`
      : "All Articles";
  }

  if (count) {
    count.textContent =
      `${filtered.length} article${filtered.length === 1 ? "" : "s"} found`;
  }

  results.innerHTML = filtered.map(createSearchResult).join("");
  results.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;
}

function initSearchPage() {
  const results = $("#searchResults");

  if (!results) {
    return;
  }

  const parameters = new URLSearchParams(window.location.search);
  const initialQuery = parameters.get("q") || "";

  SEARCH_STATE.query = initialQuery;

  const input = $("#largeSearchInput");

  if (input) {
    input.value = initialQuery;
  }

  $("#largeSearchForm")?.addEventListener("submit", event => {
    event.preventDefault();

    SEARCH_STATE.query = input?.value.trim() || "";
    renderSearchPage();

    results.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  $("[data-search-term]");

  $$("[data-search-term]").forEach(button => {
    button.addEventListener("click", () => {
      SEARCH_STATE.query = button.dataset.searchTerm || "";

      if (input) {
        input.value = SEARCH_STATE.query;
      }

      renderSearchPage();
    });
  });

  $$("[data-sort]").forEach(button => {
    button.addEventListener("click", () => {
      SEARCH_STATE.sort = button.dataset.sort;

      $$("[data-sort]").forEach(item => {
        item.classList.toggle("active", item === button);
      });

      renderSearchPage();
    });
  });

  $("#searchCategoryFilter")?.addEventListener("change", event => {
    SEARCH_STATE.category = event.target.value;
    renderSearchPage();
  });

  $("#clearSearch")?.addEventListener("click", () => {
    SEARCH_STATE.query = "";
    SEARCH_STATE.category = "all";

    if (input) {
      input.value = "";
      input.focus();
    }

    const categoryFilter = $("#searchCategoryFilter");

    if (categoryFilter) {
      categoryFilter.value = "all";
    }

    renderSearchPage();
  });

  renderSearchPage();
}

/* =========================================================
   SINGLE BLOG PAGE
========================================================= */

function updateReadingProgress() {
  const bar = $("#readingProgress");
  const tocBar = $("#tocProgress");
  const article = $("#articleContent");

  if (!bar || !article) {
    return;
  }

  const articleTop = article.offsetTop;
  const total = Math.max(article.offsetHeight - window.innerHeight, 1);

  const current = Math.min(
    Math.max(window.scrollY - articleTop + 130, 0),
    total
  );

  const percentage = Math.min(100, (current / total) * 100);

  bar.style.width = `${percentage}%`;

  if (tocBar) {
    tocBar.style.width = `${percentage}%`;
  }
}

function initReadingProgress() {
  if (!$("#articleContent")) {
    return;
  }

  window.addEventListener("scroll", updateReadingProgress, {
    passive: true
  });

  window.addEventListener("resize", updateReadingProgress);

  updateReadingProgress();
}

function initTableOfContents() {
  const headings = [
    $("#article-section-1"),
    $("#article-section-2"),
    $("#article-section-3")
  ].filter(Boolean);

  const links = $$(
    '.toc-card a[href^="#article-section-"]'
  );

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const target = $(link.getAttribute("href"));

      target?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
        )[0];

      if (!visible) {
        return;
      }

      links.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${visible.target.id}`
        );
      });
    },
    {
      rootMargin: "-25% 0px -60%",
      threshold: [0, 1]
    }
  );

  headings.forEach(heading => observer.observe(heading));
}

function initFaq() {
  $$(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("open");

      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function shareArticle(network) {
  const url = window.location.href;
  const title =
    "Future of Artificial Intelligence in Modern Web Development";

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = {
    facebook:
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

    twitter:
      `https://twitter.com/intent/tweet?url=${encodedUrl}` +
      `&text=${encodedTitle}`,

    linkedin:
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  if (network === "copy") {
    navigator.clipboard
      ?.writeText(url)
      .then(() => showToast("Article link copied"))
      .catch(() => showToast("Unable to copy the link"));

    return;
  }

  if (targets[network]) {
    window.open(
      targets[network],
      "shareWindow",
      "width=720,height=560,noopener,noreferrer"
    );
  }
}

function initSharing() {
  $$("[data-share]").forEach(button => {
    button.addEventListener("click", () => {
      shareArticle(button.dataset.share);
    });
  });
}

function initializeLikeButton(button) {
  button.addEventListener("click", () => {
    const count = $("span", button);
    const liked = button.classList.toggle("liked");

    if (count) {
      const current = Number(count.textContent) || 0;
      count.textContent = String(Math.max(0, current + (liked ? 1 : -1)));
    }

    const icon = $("i", button);

    if (icon) {
      icon.className = liked
        ? "fa-solid fa-thumbs-up"
        : "fa-regular fa-thumbs-up";
    }
  });
}

function initializeReplyButton(button) {
  button.addEventListener("click", () => {
    const form = $("#commentForm");
    const textarea = $('#commentForm textarea[name="comment"]');

    form?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    if (textarea) {
      textarea.focus();
      textarea.placeholder = "Write your reply...";
    }
  });
}

function initComments() {
  $$(".like-button").forEach(initializeLikeButton);
  $$(".reply-button").forEach(initializeReplyButton);

  $("#jumpCommentForm")?.addEventListener("click", () => {
    $("#commentForm")?.scrollIntoView({
      behavior: "smooth"
    });
  });

  $("#commentForm")?.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = escapeHtml(formData.get("name") || "Guest");
    const comment = escapeHtml(formData.get("comment") || "");

    const article = document.createElement("article");

    article.className = "comment";

    article.innerHTML = `
      <img
        src="https://i.pravatar.cc/100?u=${encodeURIComponent(name)}"
        alt="${name} avatar"
      >

      <div class="comment-content">

        <div class="comment-top">

          <div class="comment-user">
            <strong>${name}</strong>
            <time>Just now</time>
          </div>

        </div>

        <p>${comment}</p>

        <div class="comment-actions">

          <button class="like-button" type="button">
            <i class="fa-regular fa-thumbs-up"></i>
            Like
            <span>0</span>
          </button>

          <button class="reply-button" type="button">
            <i class="fa-solid fa-reply"></i>
            Reply
          </button>

        </div>

      </div>
    `;

    $(".comment-list")?.append(article);

    initializeLikeButton($(".like-button", article));
    initializeReplyButton($(".reply-button", article));

    form.reset();
    showToast("Comment added successfully");
  });
}

function initSingleBlogPage() {
  if (!$("#articleContent")) {
    return;
  }

  initReadingProgress();
  initTableOfContents();
  initFaq();
  initSharing();
  initComments();
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function initContactForm() {
  $("#contactForm")?.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
    showToast("Your message has been sent successfully");
  });
}

/* =========================================================
   404 SEARCH
========================================================= */

function initNotFoundSearch() {
  $("#notFoundSearch")?.addEventListener("submit", event => {
    event.preventDefault();

    const input = $('input[name="q"]', event.currentTarget);
    const query = input?.value.trim() || "";

    window.location.href =
      `search.html?q=${encodeURIComponent(query)}`;
  });
}

/* =========================================================
   GLOBAL INITIALIZATION
========================================================= */

function initGlobalLinks() {
  $$('a[href="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });
}

function initializeWebsite() {
  renderHeader();
  renderFooter();

  const year = $("#currentYear");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  initTheme();
  initMobileMenu();
  initGlobalSearch();
  initNewsletterForms();
  initCategoryPage();
  initSearchPage();
  initSingleBlogPage();
  initContactForm();
  initNotFoundSearch();
  initGlobalLinks();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);