document.addEventListener('DOMContentLoaded', () => {
    // Add animation for elements as they scroll into view
    const elements = document.querySelectorAll('.project-text, .project-image');

    // Initially hide elements with the hidden class
    elements.forEach((el) => {
        el.classList.add('hidden');
    });

    window.addEventListener('scroll', () => {
        elements.forEach((el) => {
            const position = el.getBoundingClientRect().top;

            // When the element is within view, add the "visible" class
            if (position < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    });
});
