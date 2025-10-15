document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevents default jump behavior
        e.preventDefault();

        // Get the target element ID (e.g., #about)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Smooth scrolling behavior
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});