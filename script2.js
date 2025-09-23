document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for user's preferred theme in localStorage, or default to dark
    // 注意：這裡使用不同的 localStorage key 避免與 index.html 衝突，或者您可以決定共用
    const savedTheme = localStorage.getItem('theme_server_page');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Save the current theme preference to localStorage
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme_server_page', 'light-mode');
        } else {
            localStorage.setItem('theme_server_page', 'dark-mode');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20; // 考慮 navbar 高度和一些額外間距

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
