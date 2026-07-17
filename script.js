"use strict";

/* =========================
   POST DATA
========================== */

const posts = [
  {
    id: 1,
    title:
      "Future of Artificial Intelligence in Modern Web Development",
    category: "AI",
    image:
      "https://picsum.photos/800/520?random=301",
    excerpt:
      "How AI supports coding, testing, research and responsible development workflows.",
    date: "2026-07-18",
    views: 18400,
    comments: 24,
    read: "8 min"
  },
  {
    id: 2,
    title:
      "Laravel Architecture for Maintainable Applications",
    category: "Development",
    image:
      "https://picsum.photos/800/520?random=302",
    excerpt:
      "Organize services, actions, validation and domain logic without unnecessary complexity.",
    date: "2026-07-17",
    views: 15200,
    comments: 18,
    read: "9 min"
  },
  {
    id: 3,
    title:
      "A Practical Technical SEO Audit Workflow",
    category: "SEO",
    image:
      "https://picsum.photos/800/520?random=303",
    excerpt:
      "Review crawling, indexing, performance and content issues in a useful order.",
    date: "2026-07-16",
    views: 22100,
    comments: 31,
    read: "10 min"
  },
  {
    id: 4,
    title:
      "Security Habits Every Web Team Should Adopt",
    category: "Security",
    image:
      "https://picsum.photos/800/520?random=304",
    excerpt:
      "Reduce common risks through access control, updates, backups and code review.",
    date: "2026-07-15",
    views: 12600,
    comments: 12,
    read: "7 min"
  },
  {
    id: 5,
    title:
      "How Generative AI Improves Content Research",
    category: "AI",
    image:
      "https://picsum.photos/800/520?random=305",
    excerpt:
      "Use structured prompts to organize research without sacrificing accuracy or originality.",
    date: "2026-07-14",
    views: 19600,
    comments: 27,
    read: "6 min"
  },
  {
    id: 6,
    title:
      "Build an Accessible Navigation Menu",
    category: "Development",
    image:
      "https://picsum.photos/800/520?random=306",
    excerpt:
      "Create keyboard-friendly navigation with clear focus states and responsive behavior.",
    date: "2026-07-13",
    views: 9800,
    comments: 10,
    read: "8 min"
  },
  {
    id: 7,
    title:
      "Core Web Vitals: What Actually Matters",
    category: "SEO",
    image:
      "https://picsum.photos/800/520?random=307",
    excerpt:
      "Understand loading, responsiveness and visual stability through practical examples.",
    date: "2026-07-12",
    views: 17300,
    comments: 22,
    read: "9 min"
  },
  {
    id: 8,
    title:
      "Protecting API Keys in Frontend Projects",
    category: "Security",
    image:
      "https://picsum.photos/800/520?random=308",
    excerpt:
      "Learn why public client code cannot safely hold secrets and what to do instead.",
    date: "2026-07-11",
    views: 14400,
    comments: 16,
    read: "7 min"
  },
  {
    id: 9,
    title:
      "Designing Better AI Prompts for Developers",
    category: "AI",
    image:
      "https://picsum.photos/800/520?random=309",
    excerpt:
      "Provide context, constraints and examples to get more useful technical answers.",
    date: "2026-07-10",
    views: 20500,
    comments: 29,
    read: "6 min"
  },
  {
    id: 10,
    title:
      "Modern CSS Layout Without a Framework",
    category: "Development",
    image:
      "https://picsum.photos/800/520?random=310",
    excerpt:
      "Use Grid, Flexbox, clamp and container patterns to build responsive interfaces.",
    date: "2026-07-09",
    views: 11700,
    comments: 14,
    read: "8 min"
  },
  {
    id: 11,
    title:
      "Internal Linking for Large Content Websites",
    category: "SEO",
    image:
      "https://picsum.photos/800/520?random=311",
    excerpt:
      "Help readers and search engines discover related pages with a scalable strategy.",
    date: "2026-07-08",
    views: 16100,
    comments: 20,
    read: "7 min"
  },
  {
    id: 12,
    title:
      "A Simple Incident Response Checklist",
    category: "Security",
    image:
      "https://picsum.photos/800/520?random=312",
    excerpt:
      "Prepare your team to contain, investigate and communicate during an incident.",
    date: "2026-07-07",
    views: 8900,
    comments: 8,
    read: "5 min"
  }
];

/* =========================
   APPLICATION STATE
========================== */

const state = {
  categoryPage: 1,
  categoryFilter: "all",
  searchTerm: "",
  searchSort: "newest"
};

const pageTitleMap = {
  home:
    "TechBlog — Modern Technology Blog",

  blog:
    "Future of Artificial Intelligence in Modern Web Development | TechBlog",

  category:
    "Technology Articles | TechBlog",

  search:
    "Search | TechBlog",

  about:
    "About TechBlog",

  contact:
    "Contact TechBlog",

  privacy:
    "Privacy Policy | TechBlog",

  404:
    "Page Not Found | TechBlog"
};

const routeAliases = {
  "": "home",
  home: "home",
  blog: "blog",
  category: "category",
  search: "search",
  about: "about",
  contact: "contact",
  privacy: "privacy",
  "privacy-policy": "privacy",
  404: "404"
};

/* =========================
   HELPERS
========================== */

const $ = (
  selector,
  scope = document
) => scope.querySelector(selector);

const $$ = (
  selector,
  scope = document
) => [...scope.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  ).format(
    new Date(`${dateString}T00:00:00`)
  );
}

function showToast(message) {
  const toast = $("#toast");

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(
    () => toast.classList.remove("show"),
    2600
  );
}

/* =========================
   ROUTER
========================== */

function getRoute() {
  const raw = location.hash
    .replace(/^#/, "")
    .split("?")[0]
    .trim()
    .toLowerCase();

  return routeAliases[raw] || "404";
}

function setActiveNavigation(route) {
  $$("[data-route-link]").forEach(
    link => {
      const target = link
        .getAttribute("href")
        .replace("#", "");

      const isActive =
        target === route ||
        (
          route === "blog" &&
          target === "category"
        );

      link.classList.toggle(
        "active",
        isActive
      );
    }
  );
}

function closeMobileMenu() {
  const menu = $("#mainNav");
  const toggle = $("#menuToggle");

  menu?.classList.remove("open");

  if (toggle) {
    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

    const icon = $("i", toggle);

    icon?.classList.remove("fa-xmark");
    icon?.classList.add("fa-bars");
  }

  document.body.classList.remove(
    "no-scroll"
  );
}

function showRoute() {
  const route = getRoute();

  $$(".page").forEach(
    page => {
      page.classList.toggle(
        "active",
        page.dataset.page === route
      );
    }
  );

  document.title =
    pageTitleMap[route] ||
    pageTitleMap["404"];

  setActiveNavigation(route);
  closeMobileMenu();

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  const footer = $(".site-footer");

  if (footer) {
    footer.hidden = false;
  }

  if (route === "category") {
    renderCategoryPosts();
  }

  if (route === "search") {
    renderSearchResults();
  }

  updateReadingProgress();
}

function initRouter() {
  window.addEventListener(
    "hashchange",
    showRoute
  );

  if (!location.hash) {
    history.replaceState(
      null,
      "",
      "#home"
    );
  }

  showRoute();
}

/* =========================
   DARK MODE
========================== */

function initTheme() {
  const root = document.documentElement;
  const button = $("#themeToggle");

  const saved =
    localStorage.getItem(
      "techblog-theme"
    );

  const preferred =
    window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

  const theme = saved || preferred;

  root.dataset.theme = theme;

  const updateIcon = () => {
    const isDark =
      root.dataset.theme === "dark";

    const icon = $("i", button);

    if (!icon) {
      return;
    }

    icon.className = isDark
      ? "fa-regular fa-sun"
      : "fa-regular fa-moon";

    button.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
    );
  };

  updateIcon();

  button?.addEventListener(
    "click",
    () => {
      root.dataset.theme =
        root.dataset.theme === "dark"
          ? "light"
          : "dark";

      localStorage.setItem(
        "techblog-theme",
        root.dataset.theme
      );

      updateIcon();
    }
  );
}

/* =========================
   MOBILE MENU
========================== */

function initMobileMenu() {
  const toggle = $("#menuToggle");
  const menu = $("#mainNav");

  toggle?.addEventListener(
    "click",
    () => {
      const open =
        menu.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );

      const icon = $("i", toggle);

      if (icon) {
        icon.className = open
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }

      document.body.classList.toggle(
        "no-scroll",
        open
      );
    }
  );

  $$("#mainNav a").forEach(
    link => {
      link.addEventListener(
        "click",
        closeMobileMenu
      );
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 1100) {
        closeMobileMenu();
      }
    }
  );
}

/* =========================
   READING PROGRESS
========================== */

function updateReadingProgress() {
  const bar = $("#readingProgress");
  const tocBar = $("#tocProgress");

  if (!bar) {
    return;
  }

  if (getRoute() !== "blog") {
    bar.style.width = "0%";

    if (tocBar) {
      tocBar.style.width = "0%";
    }

    return;
  }

  const article = $("#articleContent");

  if (!article) {
    return;
  }

  const start = article.offsetTop;

  const total = Math.max(
    article.offsetHeight -
      window.innerHeight,
    1
  );

  const current = Math.min(
    Math.max(
      window.scrollY -
        start +
        120,
      0
    ),
    total
  );

  const percent = Math.min(
    100,
    (current / total) * 100
  );

  bar.style.width = `${percent}%`;

  if (tocBar) {
    tocBar.style.width =
      `${percent}%`;
  }
}

function initReadingProgress() {
  window.addEventListener(
    "scroll",
    updateReadingProgress,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    updateReadingProgress
  );
}

/* =========================
   TABLE OF CONTENTS
========================== */

function initTableOfContents() {
  const headings = [
    "article-section-1",
    "article-section-2",
    "article-section-3"
  ]
    .map(
      id =>
        document.getElementById(id)
    )
    .filter(Boolean);

  const links = $$(
    '.toc-card a[href^="#article-section-"]'
  );

  links.forEach(
    link => {
      link.addEventListener(
        "click",
        event => {
          event.preventDefault();

          const target =
            document.querySelector(
              link.getAttribute("href")
            );

          target?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      );
    }
  );

  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(
            entry =>
              entry.isIntersecting
          )
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          )[0];

        if (!visible) {
          return;
        }

        links.forEach(
          link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") ===
                `#${visible.target.id}`
            );
          }
        );
      },
      {
        rootMargin:
          "-25% 0px -60%",
        threshold: [0, 1]
      }
    );

  headings.forEach(
    heading =>
      observer.observe(heading)
  );
}

/* =========================
   FAQ
========================== */

function initFaq() {
  $$(".faq-item > button").forEach(
    button => {
      button.addEventListener(
        "click",
        () => {
          const item =
            button.closest(".faq-item");

          const open =
            item.classList.toggle(
              "open"
            );

          button.setAttribute(
            "aria-expanded",
            String(open)
          );
        }
      );
    }
  );
}

/* =========================
   SHARE BUTTONS
========================== */

function shareArticle(network) {
  const url =
    `${location.origin}` +
    `${location.pathname}` +
    "#blog";

  const title =
    "Future of Artificial Intelligence in Modern Web Development";

  const encodedUrl =
    encodeURIComponent(url);

  const encodedTitle =
    encodeURIComponent(title);

  const targets = {
    facebook:
      "https://www.facebook.com/sharer/sharer.php" +
      `?u=${encodedUrl}`,

    twitter:
      "https://twitter.com/intent/tweet" +
      `?url=${encodedUrl}` +
      `&text=${encodedTitle}`,

    linkedin:
      "https://www.linkedin.com/sharing/share-offsite/" +
      `?url=${encodedUrl}`
  };

  if (network === "copy") {
    navigator.clipboard
      ?.writeText(url)
      .then(
        () =>
          showToast(
            "Article link copied"
          )
      )
      .catch(
        () =>
          showToast(
            `Copy this link: ${url}`
          )
      );

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
  $$("[data-share]").forEach(
    button => {
      button.addEventListener(
        "click",
        () =>
          shareArticle(
            button.dataset.share
          )
      );
    }
  );
}

/* =========================
   COMMENTS
========================== */

function initComments() {
  $$(".like-button").forEach(
    button => {
      button.addEventListener(
        "click",
        () => {
          const count =
            $("span", button);

          const liked =
            button.classList.toggle(
              "liked"
            );

          if (count) {
            count.textContent =
              String(
                Math.max(
                  0,
                  Number(
                    count.textContent
                  ) +
                    (
                      liked
                        ? 1
                        : -1
                    )
                )
              );
          }

          const icon =
            $("i", button);

          if (icon) {
            icon.className = liked
              ? "fa-solid fa-thumbs-up"
              : "fa-regular fa-thumbs-up";
          }
        }
      );
    }
  );

  $$(".reply-button").forEach(
    button => {
      button.addEventListener(
        "click",
        () => {
          $("#commentForm")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          const textarea = $(
            '#commentForm textarea[name="comment"]'
          );

          if (textarea) {
            textarea.focus();

            textarea.placeholder =
              "Write your reply...";
          }
        }
      );
    }
  );

  $("#jumpCommentForm")
    ?.addEventListener(
      "click",
      () =>
        $("#commentForm")
          ?.scrollIntoView({
            behavior: "smooth"
          })
    );

  $("#commentForm")
    ?.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        const form =
          event.currentTarget;

        const data =
          new FormData(form);

        const name =
          escapeHtml(
            data.get("name") ||
            "Guest"
          );

        const commentText =
          escapeHtml(
            data.get("comment") ||
            ""
          );

        const article =
          document.createElement(
            "article"
          );

        article.className =
          "comment";

        article.innerHTML = `
          <img
            src="https://i.pravatar.cc/100?u=${encodeURIComponent(name)}"
            alt="${name} avatar"
          >

          <div class="comment-content">

            <div class="comment-top">

              <div>

                <strong>${name}</strong>

                <time>Just now</time>

              </div>

            </div>

            <p>${commentText}</p>

            <div class="comment-actions">

              <button
                class="like-button"
                type="button"
              >

                <i class="fa-regular fa-thumbs-up"></i>

                Like

                <span>0</span>

              </button>

              <button
                class="reply-button"
                type="button"
              >

                <i class="fa-solid fa-reply"></i>

                Reply

              </button>

            </div>

          </div>
        `;

        $(".comment-list")
          ?.append(article);

        form.reset();

        showToast(
          "Comment added successfully"
        );

        const likeButton =
          $(".like-button", article);

        likeButton
          ?.addEventListener(
            "click",
            () => {
              likeButton.classList
                .toggle("liked");

              const count =
                $("span", likeButton);

              if (count) {
                count.textContent =
                  likeButton.classList
                    .contains("liked")
                    ? "1"
                    : "0";
              }
            }
          );
      }
    );
}

/* =========================
   CATEGORY PAGE
========================== */

function getFilteredCategoryPosts() {
  return state.categoryFilter ===
    "all"
    ? posts
    : posts.filter(
        post =>
          post.category ===
          state.categoryFilter
      );
}

function postCardTemplate(post) {
  const badgeClass =
    post.category === "AI"
      ? "badge-red"
      : post.category === "SEO"
        ? "badge-purple"
        : post.category ===
            "Security"
          ? "badge-green"
          : "badge-blue";

  return `
    <article class="post-card">

      <a href="#blog">

        <img
          src="${post.image}"
          alt="${escapeHtml(post.title)}"
        >

      </a>

      <div class="post-card-body">

        <span class="badge ${badgeClass}">
          ${escapeHtml(post.category)}
        </span>

        <h3>

          <a href="#blog">
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

function renderCategoryPosts() {
  const grid =
    $("#categoryGrid");

  const pagination =
    $("#categoryPagination");

  const count =
    $("#categoryResultCount");

  if (!grid || !pagination) {
    return;
  }

  const filtered =
    getFilteredCategoryPosts();

  const perPage = 6;

  const pages = Math.max(
    1,
    Math.ceil(
      filtered.length /
      perPage
    )
  );

  state.categoryPage =
    Math.min(
      state.categoryPage,
      pages
    );

  const start =
    (
      state.categoryPage -
      1
    ) *
    perPage;

  grid.innerHTML =
    filtered
      .slice(
        start,
        start + perPage
      )
      .map(postCardTemplate)
      .join("");

  if (count) {
    count.textContent =
      `Showing ${
        filtered.length
          ? start + 1
          : 0
      }–${
        Math.min(
          start + perPage,
          filtered.length
        )
      } of ${
        filtered.length
      } articles`;
  }

  const buttons = [];

  buttons.push(`
    <button
      type="button"
      data-page-number="${
        state.categoryPage - 1
      }"
      ${
        state.categoryPage === 1
          ? "disabled"
          : ""
      }
      aria-label="Previous page"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `);

  for (
    let page = 1;
    page <= pages;
    page += 1
  ) {
    buttons.push(`
      <button
        type="button"
        data-page-number="${page}"
        class="${
          page ===
          state.categoryPage
            ? "active"
            : ""
        }"
      >
        ${page}
      </button>
    `);
  }

  buttons.push(`
    <button
      type="button"
      data-page-number="${
        state.categoryPage + 1
      }"
      ${
        state.categoryPage ===
        pages
          ? "disabled"
          : ""
      }
      aria-label="Next page"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `);

  pagination.innerHTML =
    buttons.join("");

  $$(
    "[data-page-number]",
    pagination
  ).forEach(
    button => {
      button.addEventListener(
        "click",
        () => {
          if (button.disabled) {
            return;
          }

          state.categoryPage =
            Number(
              button.dataset
                .pageNumber
            );

          renderCategoryPosts();

          $("#categoryGrid")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
        }
      );
    }
  );
}

function initCategory() {
  $("#categorySelect")
    ?.addEventListener(
      "change",
      event => {
        state.categoryFilter =
          event.target.value;

        state.categoryPage = 1;

        renderCategoryPosts();
      }
    );

  renderCategoryPosts();
}

/* =========================
   SEARCH PAGE
========================== */

function searchResultTemplate(post) {
  const badgeClass =
    post.category === "AI"
      ? "badge-red"
      : post.category === "SEO"
        ? "badge-purple"
        : post.category ===
            "Security"
          ? "badge-green"
          : "badge-blue";

  return `
    <article class="search-result-card">

      <a href="#blog">

        <img
          src="${post.image}"
          alt="${escapeHtml(post.title)}"
        >

      </a>

      <div>

        <span class="badge ${badgeClass}">
          ${escapeHtml(post.category)}
        </span>

        <h3>

          <a href="#blog">
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

function renderSearchResults() {
  const results =
    $("#searchResults");

  const empty =
    $("#emptySearch");

  const heading =
    $("#searchHeading");

  const count =
    $("#searchCount");

  if (!results || !empty) {
    return;
  }

  const term =
    state.searchTerm
      .trim()
      .toLowerCase();

  let filtered =
    posts.filter(
      post =>
        !term ||
        (
          `${post.title} ` +
          `${post.category} ` +
          `${post.excerpt}`
        )
          .toLowerCase()
          .includes(term)
    );

  filtered =
    [...filtered].sort(
      (a, b) => {
        if (
          state.searchSort ===
          "popular"
        ) {
          return b.views - a.views;
        }

        if (
          state.searchSort ===
          "oldest"
        ) {
          return (
            new Date(a.date) -
            new Date(b.date)
          );
        }

        return (
          new Date(b.date) -
          new Date(a.date)
        );
      }
    );

  if (heading) {
    heading.textContent =
      term
        ? `Results for “${state.searchTerm.trim()}”`
        : "All Articles";
  }

  if (count) {
    count.textContent =
      `${filtered.length} article${
        filtered.length === 1
          ? ""
          : "s"
      } found`;
  }

  results.innerHTML =
    filtered
      .map(searchResultTemplate)
      .join("");

  results.hidden =
    filtered.length === 0;

  empty.hidden =
    filtered.length !== 0;

  if ($("#largeSearchInput")) {
    $("#largeSearchInput").value =
      state.searchTerm;
  }
}

function submitSearch(term) {
  state.searchTerm =
    term.trim();

  location.hash = "search";

  if (getRoute() === "search") {
    renderSearchResults();

    setTimeout(
      () =>
        $("#searchResults")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          }),
      50
    );
  }
}

function initSearch() {
  $("#headerSearchForm")
    ?.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        submitSearch(
          $("#headerSearchInput")
            ?.value || ""
        );
      }
    );

  $("#largeSearchForm")
    ?.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        state.searchTerm =
          $("#largeSearchInput")
            ?.value
            .trim() || "";

        renderSearchResults();
      }
    );

  $$("[data-search-term]")
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            state.searchTerm =
              button.dataset
                .searchTerm || "";

            renderSearchResults();
          }
        );
      }
    );

  $$("[data-sort]")
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            state.searchSort =
              button.dataset.sort;

            $$("[data-sort]")
              .forEach(
                item => {
                  item.classList
                    .toggle(
                      "active",
                      item === button
                    );
                }
              );

            renderSearchResults();
          }
        );
      }
    );

  $("#clearSearch")
    ?.addEventListener(
      "click",
      () => {
        state.searchTerm = "";

        renderSearchResults();

        $("#largeSearchInput")
          ?.focus();
      }
    );

  $("#notFoundSearch")
    ?.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        submitSearch(
          $("input", event.currentTarget)
            ?.value || ""
        );
      }
    );

  renderSearchResults();
}

/* =========================
   FORMS
========================== */

function initForms() {
  $$(".newsletter-form")
    .forEach(
      form => {
        form.addEventListener(
          "submit",
          event => {
            event.preventDefault();

            form.reset();

            showToast(
              "Thanks for subscribing!"
            );
          }
        );
      }
    );

  $("#contactForm")
    ?.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        const form =
          event.currentTarget;

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        form.reset();

        showToast(
          "Your message has been sent successfully"
        );
      }
    );
}

/* =========================
   GLOBAL LINKS
========================== */

function initGlobalLinks() {
  $$('a[href="#"]')
    .forEach(
      link => {
        link.addEventListener(
          "click",
          event =>
            event.preventDefault()
        );
      }
    );

  $("#currentYear").textContent =
    String(
      new Date().getFullYear()
    );
}

/* =========================
   INITIALIZE WEBSITE
========================== */

function init() {
  initTheme();
  initMobileMenu();
  initRouter();
  initReadingProgress();
  initTableOfContents();
  initFaq();
  initSharing();
  initComments();
  initCategory();
  initSearch();
  initForms();
  initGlobalLinks();
}

document.addEventListener(
  "DOMContentLoaded",
  init
);