  'use strict';

        const root = document.documentElement;
        const darkToggle = document.getElementById('darkToggle');
        const darkIcon = document.getElementById('darkIcon');
        const menuBtn = document.getElementById('menuBtn');
        const menuIcon = document.getElementById('menuIcon');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileTechnologyBtn = document.getElementById('mobileTechnologyBtn');
        const mobileTechnologyMenu = document.getElementById('mobileTechnologyMenu');
        const mobileTechnologyIcon = document.getElementById('mobileTechnologyIcon');
        const backToTop = document.getElementById('backToTop');
        const headerSearchForm = document.getElementById('headerSearchForm');
        const headerSearch = document.getElementById('headerSearch');
        const mobileSearchForm = document.getElementById('mobileSearchForm');
        const mobileSearch = document.getElementById('mobileSearch');
        const searchMessage = document.getElementById('searchMessage');
        const newsletterForm = document.getElementById('newsletterForm');
        const newsletterEmail = document.getElementById('newsletterEmail');
        const newsletterMessage = document.getElementById('newsletterMessage');
        const searchableCards = Array.from(document.querySelectorAll('[data-search-card]'));

        function updateThemeButton() {
            const isDark = root.classList.contains('dark');
            darkIcon.textContent = isDark ? '☀️' : '🌙';
            darkToggle.setAttribute('aria-pressed', String(isDark));
            darkToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuIcon.textContent = '☰';
            document.body.classList.remove('overflow-hidden');
        }

        function runSearch(rawQuery) {
            const query = rawQuery.trim().toLowerCase();
            let visibleCount = 0;

            searchableCards.forEach((card) => {
                const matches = !query || card.textContent.toLowerCase().includes(query);
                card.classList.toggle('search-result-hidden', !matches);
                if (matches) visibleCount += 1;
            });

            searchMessage.classList.remove('hidden');
            if (!query) {
                searchMessage.textContent = 'Showing all articles.';
            } else if (visibleCount > 0) {
                searchMessage.textContent = `${visibleCount} article${visibleCount === 1 ? '' : 's'} found for “${rawQuery.trim()}”.`;
            } else {
                searchMessage.textContent = `No articles found for “${rawQuery.trim()}”. Try another keyword.`;
            }

            document.getElementById('latest').scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileMenu();
        }

        updateThemeButton();
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        darkToggle.addEventListener('click', () => {
            root.classList.toggle('dark');
            try {
                localStorage.setItem('techblog-theme', root.classList.contains('dark') ? 'dark' : 'light');
            } catch (error) {
                console.warn('Theme preference could not be saved.', error);
            }
            updateThemeButton();
        });

        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
            menuIcon.textContent = isOpen ? '✕' : '☰';
            document.body.classList.toggle('overflow-hidden', isOpen);
        });

        mobileTechnologyBtn.addEventListener('click', () => {
            const isOpen = mobileTechnologyMenu.classList.toggle('active');
            mobileTechnologyBtn.setAttribute('aria-expanded', String(isOpen));
            mobileTechnologyIcon.textContent = isOpen ? '−' : '＋';
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMobileMenu);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) closeMobileMenu();
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMobileMenu();
        });

        headerSearchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            runSearch(headerSearch.value);
        });

        mobileSearchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            headerSearch.value = mobileSearch.value;
            runSearch(mobileSearch.value);
        });

        document.querySelectorAll('[data-heart]').forEach((button) => {
            button.addEventListener('click', () => {
                const isActive = button.classList.toggle('heart-active');
                button.textContent = isActive ? '♥' : '♡';
                button.setAttribute('aria-pressed', String(isActive));
                button.setAttribute('aria-label', isActive ? 'Remove article from favorites' : 'Add article to favorites');
            });
        });

        document.querySelectorAll('[data-bookmark]').forEach((button) => {
            button.addEventListener('click', () => {
                const isActive = button.getAttribute('aria-pressed') !== 'true';
                button.setAttribute('aria-pressed', String(isActive));
                button.textContent = isActive ? '✓ Bookmarked' : '🔖 Bookmark';
            });
        });

        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!newsletterEmail.checkValidity()) {
                newsletterEmail.reportValidity();
                return;
            }
            newsletterMessage.textContent = 'Thank you! Your subscription has been received.';
            newsletterMessage.classList.remove('hidden');
            newsletterForm.reset();
        });

        window.addEventListener('scroll', () => {
            const showButton = window.scrollY > 500;
            backToTop.classList.toggle('hidden', !showButton);
            backToTop.classList.toggle('flex', showButton);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        