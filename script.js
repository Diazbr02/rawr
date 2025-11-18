// ============================================
// DARK MODE THEME TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const htmlElement = document.documentElement;

    // Check if user has saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Theme toggle event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // ============================================
    // HAMBURGER MENU TOGGLE
    // ============================================

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbar = document.getElementById('navbar');

    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu when nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // ============================================
    // NAVIGATION TAB FUNCTIONALITY
    // ============================================

    const sections = document.querySelectorAll('section');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Remove active class from all nav links
                navLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked nav link
                this.classList.add('active');

                // Hide all sections
                sections.forEach(section => {
                    section.classList.add('hidden');
                });

                // Show target section
                targetSection.classList.remove('hidden');

                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Optional: Set active tab based on URL hash
    const currentHash = window.location.hash.substring(1) || 'tentang';
    const currentLink = document.querySelector(`a[href="#${currentHash}"]`);
    if (currentLink) {
        currentLink.click();
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        const link = document.querySelector(`a[href="#${hash}"]`);
        if (link) {
            link.click();
        }
    });
});
