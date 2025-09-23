document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for user's preferred theme in localStorage, or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Save the current theme preference to localStorage
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get target element, accounting for fixed navbar height if needed
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20; // Adjust for navbar and a little extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 新增：處理專案卡片的點擊事件
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            // 檢查是否有 data-url 屬性
            const url = this.dataset.url; // 獲取 data-url 的值

            if (url) {
                window.open(url, '_blank'); // 如果有 data-url，則在新分頁中打開該 URL
            }
            // 如果沒有 data-url，則什麼都不做，或者您可以添加其他預設行為
        });
    });
});
