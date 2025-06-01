document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const progressBars = document.querySelectorAll('.progress-bar');

    // Animate progress bars on load
    progressBars.forEach(bar => {
        const percent = bar.dataset.percent;
        bar.style.width = percent + '%';
    });

    // Scroll event for sticky header
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Redirect functionality for projects
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const url = project.dataset.url; // Retrieve the URL from the dataset
            if (url) {
                window.location.href = url; // Redirect to the project-specific page
            } else {
                alert(`No URL specified for the project: ${project.querySelector('h3').textContent}`);
            }
        });
    });
});
